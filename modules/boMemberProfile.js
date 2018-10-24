var WeighInfo = new Object();
var WeighInfoLastRow = new Object();
var offlineMemberResult = [];
var milestoneName = "";
var memberWeightList = [];
var memberWeightData = [];

var boMemberProfile = {

    getSelectedMemberProfileWeightDetails: function(memberID) {
        kony.print("Inside getSelectedMemberProfileWeightDetails --> deviceMemID = " + memberID);
        var whr = "where MemberID = '" + memberID + "'";
        DBMemberDetailsController.find(whr, function(res1) {
            if (res1 && res1.length > 0) {
                var v = res1[0];
                kony.print("::DJP::getSelectedMemberProfileWeightDetails:: Member search res1" + JSON.stringify(res1));
                var isVoided = kony.sync.getString(v.isVoided);
                kony.print("::DJP::getSelectedMemberProfileWeightDetails::isVoided=" + isVoided);

                //Member has been Voided dont make a call
                var whereClause = "where MemberID = '" + memberID + "' order by WeighInDate DESC "; //LIMIT 0,1";	
                MemberWeightAndMilestoneList = [];

                function getMemberProfileWeightSuccessCallback(res) {
                ClearMemberDetailsForWeight();
                    kony.print("Weight search response" + JSON.stringify(res));
                    if (res.length <= 0) {
                    
                        if (!isVoided || isVoided != "true") {
                            kony.print("No Member Weight records found");
                            // dileep - calling composite service here
                            try {
                                kony.print("Dileep --> Calling callMemberWeightAndMilestone = " + memberID);
                                if (!isNaN(memberID)) {
                                    callMemberWeightAndMilestone(memberID, getMemberWeightAndMilestoneWSCallback);
                                }
                            } catch (e) {
                                GlobalException(e);

                            }
                        }
                        removeProgressView();
                        // in the composite callback, call weight callback and milestone callback
                        //boMemberProfile.getMemberProfileWeightDetailsWS(deviceMemID);
                    } else {
                        //This was kept - for void member - weight details will not be there so dont clear when res <= 0
                        //ClearMemberDetailsForWeight();
						
                        kony.print("Member Weight Record found.... Applying logic count = " + res.length);
                        var WeighDate = res[0].WeighInDate.toString();
                      	//AD : MEG-7322
                     	 kony.print('MEG-7322=' + WeighDate);
                      	var isLatestWeighInAvailableIForLocalMember = checkWeighHistoryOfLocalMemberInDB(WeighDate);
                      	if(!isNaN(memberID) && !isLatestWeighInAvailableIForLocalMember)//previous week wiegh in not found in DB
                        {           
                          kony.print('calling weigh get all' + isLatestWeighInAvailableIForLocalMember);
                        	callMemberWeightAndMilestone(memberID, getMemberWeightAndMilestoneWSCallbackForMissedWeighEntries);
                        }else {
                          memberWeightList = res;
                          memberWeightData = res;
                          kony.print("Weight Record from local database:" + JSON.stringify(memberWeightData));
                          boMemberMilestone.getAchievedMilestonesForMember(memberID, 400, null, isVoided);
                        }
                       removeProgressView();
                    }
                }
                kony.print("getSelectedMemberProfileWeightDetails query ::: " + whereClause);
                DBWeighDetailsController.find(whereClause, getMemberProfileWeightSuccessCallback, eventErrorCallBack);
            }

        }, eventErrorCallBack);


    },


    getSelectedMemberWeightHistoryForFreshStart: function(memberID) {

        strExtraWhr = " AND ( NoWeighIn = 'false' OR NoWeighIn = 0) ";
        strAscDescOrder = " DESC ";
        var whereClause = "where MemberID = '" + memberID + "'" + strExtraWhr + " order by date(WeighInDate) " + strAscDescOrder; //LIMIT 0,1";
        kony.print("---->  wher condi -  " + whereClause);

        function getSelectedMemberWeightHistoryForFreshStartSuccessCallback(res) {
            boMemberProfile.BindWeightDetailsForStartWeight(res);

        }
        DBWeighDetailsController.find(whereClause, getSelectedMemberWeightHistoryForFreshStartSuccessCallback, eventErrorCallBack)
    },

    getSelectedMemberDetailsFromDeviceMemberID: function(memberID) {
        kony.print("glbMemberId : " + glbMemberId);
        var whereClause = "where MemberID = '" + memberID + "'"; //LIMIT 0,1";

        function getMemberProfileDetailsSuccessCallback(res) {
            kony.print("Result of search == " + JSON.stringify(res));
            if (res.length <= 0) {
                kony.print("No Member records found");

                boMemberProfile.BindMemberDetailsForProfileView(res, true, memberID);
            } else {
                kony.print("getSelectedMemberDetailsFromDeviceMemberID:Member Weight Record found.... Applying logic count = " + res.length);
                //var WeighDate = res[0].WeighInDate.toString();
                //boMemberMilestone.getAchievedMilestonesForMember(memberID, "400", null);
                boMemberProfile.BindMemberDetailsForProfileView(res, false, memberID);

            }

            boMemberProfile.getSelectedMemberProfileWeightDetails(memberID);
            //			ClearMemberDetailsForWeight();
            // IsViewMember = FlowForScreens.ViewMember;
            frmViewMemberProfile.show();
        }
        DBMemberDetailsController.find(whereClause, getMemberProfileDetailsSuccessCallback, eventErrorCallBack)
    },


    BindMemberDetailsForProfileView: function(response, isOnlineSearch, memberID) {
        kony.print("data in BindMemberDetailsForProfileView ==== " + JSON.stringify(response));
        frmMemberProfileDetils_temp = [];
        kony.print("Value when in BindMemberDetailsForProfileView isOnlineSearch ===>> " + isOnlineSearch);
        
         // AD : Added for MEG-4909 - START
       		response=boHomeScreenSearch.identifyAndUpdateExpiredSeventeenWeekPassMember(response);
         // AD : Added for MEG-4909 - END
        
        if (!isOnlineSearch) {
            if (response.length > 0) {
                for (var i in response) {
                    var v = response[i];
                    
                    kony.print("data in boMemberProfile ==== " + JSON.stringify(v));
                    var imgMemberRow = "";
                    var imgMemberStatus = "";
                    var imgMemberType = "";
                    var imgRegStatus = "";
                    var imgMemberSubscriptionStatus = "";
                    var isTerminated = false;
                    kony.print("Member status is : " + kony.sync.getString(v.MemberStatus));
                    kony.print("kony.sync.getString(v.DateOfBirth)===>>>>" + kony.sync.getString(v.DateOfBirth));
                    kony.print("MissWeekPasses in offline : " + kony.sync.getString(v.MissWeekPasses));
                    // Removed masking code as not used    
                    var expDateMasking = kony.sync.getString(v.ExpirationDate);
					var expDOBFormatted = "";
					if (checkValidString(expDateMasking)) {
						expDOBFormatted = formattedDate(expDateMasking);
					}
		
					var DOBFormatted = formattedDate(v.DateOfBirth);

                    var dateMasking = kony.sync.getString(v.DateOfBirth);
                    var dateMaskedSplit = dateMasking.split("T");
                    
                    var DontContByEmail = "";
                    var DontCnctPhone = "";
                    var DontCnctSMS = "";
                    var DontSendCard = "";
                    var DontRecvCalls = "";
                    var DontSendCoupon = "";
                    var MemberProfileDetailsView;

                    DontSendCard = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontSendCard));

                    DontContByEmail = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontContByEmail));

                    DontSendCoupon = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontSendCoupon));

                    DontRecvCalls = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontRecvCalls));

                    DontCnctSMS = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontCnctSMS));

                    DontCnctPhone = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontCnctPhone));
                    var memberBillingAdd = bindAddress(kony.sync.getString(v.BillingAddr1), kony.sync.getString(v.BillingAddr2), kony.sync.getString(v.BillingCity), getStateNameById(kony.sync.getString(v.BillingState)), kony.sync.getString(v.BillingZipCode))
                    var memberMailingAdd = bindAddress(encodeSpecialCharacters(kony.sync.getString(v.ShippingAddr1)), encodeSpecialCharacters(kony.sync.getString(v.ShippingAddr2)), kony.sync.getString(v.ShippingCity), getStateNameById(kony.sync.getString(v.ShippingState)), kony.sync.getString(v.ShippingZipCode))
                    glbLinkType = kony.sync.getString(v.LinkType);

                    /*Store Members Missed Week Values While Editing*/
                    glbRedeemedPasses = checkValidString(v.ReedeemedPasses) ? kony.sync.getString(v.ReedeemedPasses) : "";
                    glbRedeemedDate = checkValidString(v.RedeemedDate) ? kony.sync.getString(v.RedeemedDate) : "";
                    glbIsDateRedeemed = checkValidString(v.IsDateRedeemed) ? kony.sync.getString(v.IsDateRedeemed) : "";
                    glbMissWeekPasses = checkValidString(v.MissWeekPasses) ? kony.sync.getString(v.MissWeekPasses) : "";


                    currentMemberLinkValues.LinkType = kony.sync.getString(v.LinkType);
                    currentMemberLinkValues.EmailID = checkValidString(kony.sync.getString(v.EmailID)) ? kony.sync.getString(v.EmailID) : "";
                    currentMemberLinkValues.EnterpriseID = checkValidString(kony.sync.getString(v.EnterpriseID)) ? kony.sync.getString(v.EnterpriseID) : 0;
                    currentMemberLinkValues.UserName = checkValidString(kony.sync.getString(v.UserName)) ? kony.sync.getString(v.UserName) : "";

                    MemberProfileDetailsView = {
                        SessionNumber: v.SessionNumber, //fresh start - story -116
                        lblBillingAddData: memberBillingAdd,
                        lblDOBData: DOBFormatted, // kony.sync.getString(v.DateOfBirth),
                        lblPhoneData: kony.sync.getString(v.Phone1),
                        RegDate: kony.sync.getString(v.RegDate),
                        lblHeightData: kony.sync.getString(v.Height),
                        RegNumber: kony.sync.getString(v.RegNumber),
                        lblStartWeightData: kony.sync.getString(v.StartWeight),
                        lblCurrentDPTData: kony.sync.getString(v.DailyPtTarget),
                        lblWPAData : kony.sync.getString(v.WeeklyPointsAllowance),
                        lblGoalWeightData: kony.sync.getString(v.GoalWeight),
                        RegNo: kony.sync.getString(v.RegNumber),
                        MemberStatus: kony.sync.getString(v.MemberStatus),
                        MembershipType: kony.sync.getString(v.MemberType),
                        lblEmailData: kony.sync.getString(v.Email),
                        StartDate: kony.sync.getString(v.StartDate),
                        lblGenderData: (kony.sync.getString(v.Gender) == "Male") ? getLocalizedString("strLblMale") : getLocalizedString("strLblFemale"),
                        lblFirstName: kony.sync.getString(v.FirstName),
                        lblLastName: kony.sync.getString(v.LastName),
                        lblMailingAddData: memberMailingAdd,
                        RegStatus: kony.sync.getString(v.RegStatus),
                        lblRMissedWeeksData: (checkForUndefinedVal(kony.sync.getString(v.MissWeekPasses)) == "") ? 0 : kony.sync.getString(v.MissWeekPasses),
                        BillingAdd1: checkForUndefinedVal(kony.sync.getString(v.ShippingAddr1)),
                        BillingAdd2: checkForUndefinedVal(kony.sync.getString(v.ShippingAddr2)),
                        BillingCity: kony.sync.getString(v.ShippingCity),
                        BillingCountry: kony.sync.getString(v.ShippingCountry),
                        BillingZipCode: kony.sync.getString(v.ShippingZipCode),
                        BillingState: kony.sync.getString(v.ShippingState),
                        Phone1: checkForUndefinedVal(kony.sync.getString(v.Phone1)),
                        PhoneType1: checkForUndefinedVal(kony.sync.getString(v.PhoneType1)),
                        Phone2: checkForUndefinedVal(kony.sync.getString(v.Phone2)),
                        PhoneType2: checkForUndefinedVal(kony.sync.getString(v.PhoneType2)),
						txtNotes: kony.sync.getString(v.Note),
                        OriginalDOB: kony.sync.getString(v.DateOfBirth),
                        MemberID: kony.sync.getString(v.MemberID),
                        ExpirationDate: expDOBFormatted,
                        CouponCode: kony.sync.getString(v.CouponCode),
                        lblReceiveCouponsInfo: DontSendCoupon, //kony.sync.getString(v.DontSendCoupon) ,
                        lblReceiveCallsInfo: DontRecvCalls, // kony.sync.getString(v.DontRecvCalls) ,
                        lblParticipateSurveysInfo: DontCnctPhone, //kony.sync.getString(v.DontSendCard) ,
                        lblEmailOffersInfo: DontContByEmail, //kony.sync.getString(v.DontContByEmail),
                        lblReceiveMsgsInfo: DontSendCard, //kony.sync.getString(v.DontCnctSMS),
                        //lblReceiveCallsInfo : DontCnctPhone,//kony.sync.getString(v.DontCnctPhone)
                        lblSubscriptionType: checkForUndefinedVal(kony.sync.getString(v.SubscriptnType)),
                        glbIsInMaintance: kony.sync.getString(v.MaintenanceMode),
                        LastAttendanceDate: kony.sync.getString(v.LastAttendanceDate),
                        personalGoalWeight: kony.sync.getString(v.PersonalGoalWeight)
                    };
                }
                kony.print("v.MemberStatus.toString() in if is : " + kony.sync.getString(v.MemberStatus));
                frmMemberProfileDetils_temp.push(MemberProfileDetailsView);
                if (kony.sync.getString(v.MemberStatus) == MemberStatusEnum[3]) {
                    termMemberInfo = new Object();
                    boMemberProfile.fillTermMemberInfoObjectInMemberProfile(v);
                }
            }
        } else if (isOnlineSearch) {
            kony.print("Getting data from Online search object length  " + memberOnlineSearchResultSet["MembersList"].length);
            for (var i in memberOnlineSearchResultSet["MembersList"]) {
                var v = memberOnlineSearchResultSet["MembersList"][i];
                kony.print("data in boMemberProfile else  ====" + JSON.stringify(v));
                kony.print("Member Id is : " + v.ServerMemberID.toString() + "    " + memberID.toString());
                if (v.ServerMemberID.toString() == memberID.toString()) {
                    var imgMemberRow = "";
                    var imgMemberStatus = "";
                    var imgMemberType = "";
                    var imgRegStatus = "";
                    var imgMemberSubscriptionStatus = "";
                    var isTerminated = false;
                    kony.print("Member status is : " + v.MemberStatus);

                    var DontContByEmail = "";
                    var DontCnctPhone = "";
                    var DontCnctSMS = "";
                    var DontSendCard = "";
                    var DontRecvCalls = "";
                    var DontSendCoupon = "";
                    var MemberProfileDetailsView;

                    DontSendCard = boHomeScreenSearch.getValueYesOrNo(v.DontSendCard.toString());
                    DontContByEmail = boHomeScreenSearch.getValueYesOrNo(v.DontContByEmail.toString());
                    DontSendCoupon = boHomeScreenSearch.getValueYesOrNo(v.DontSendCoupon.toString());
                    DontRecvCalls = boHomeScreenSearch.getValueYesOrNo(v.DontRecvCalls.toString());
                    DontCnctSMS = boHomeScreenSearch.getValueYesOrNo(v.DontCnctSMS.toString());
                    DontCnctPhone = boHomeScreenSearch.getValueYesOrNo(v.DontCnctPhone.toString());
                    var memberBillingAdd = bindAddress(v.BillingAddr1, v.BillingAddr2, v.BillingCity, getStateNameById(v.BillingState), v.BillingZipCode);
                    var memberMailingAdd = bindAddress(v.ShippingAddr1, v.ShippingAddr2, v.ShippingCity, getStateNameById(v.ShippingState), v.ShippingZipCode);
                    var expDateMasking = kony.sync.getString(v.ExpirationDate);
                    var expDOBFormatted = "";
                    kony.print("expDateMasking:::->>>>." + expDateMasking);
                    
					
					if (checkValidString(expDateMasking)) {
						expDOBFormatted = formattedDate(expDateMasking);
					}
                    
                    var DOBFormatted = formattedDate(v.DateOfBirth);
                    glbLinkType = checkValidString(v.LinkType) ? v.LinkType : "None";
                    kony.print("checkUndefined(v.DateOfBirth).toString()===>>>>" + checkUndefined(v.DateOfBirth).toString());
                    kony.print("MissWeekPasses in online : " + checkUndefined(v.MissedWeekPasses));
                    MemberProfileDetailsView = {
                        lblBillingAddData: memberBillingAdd,
                        SessionNumber: v.SessionNumber, //fresh start -116
                        lblDOBData: DOBFormatted, // v.DateOfBirth,
                        lblPhoneData: checkUndefined(v.Phone1).toString(),
                        RegDate: checkUndefined(v.RegDate).toString(),
                        lblHeightData: checkUndefined(v.Height).toString(),
                        RegNumber: checkUndefined(v.RegNumber).toString(),
                        lblStartWeightData: checkUndefined(v.StartWeight).toString(),
                        lblGoalWeightData: checkUndefined(v.GoalWeight).toString(),
                        RegNo: checkUndefined(v.RegNumber).toString(),
                        MemberStatus: checkUndefined(v.MemberStatus).toString(),
                        MembershipType: checkUndefined(v.MemberType).toString(),
                        lblEmailData: checkUndefined(v.Email).toString(),
                        StartDate: checkUndefined(v.StartDate).toString(),
                        lblGenderData: (checkUndefined(v.Gender).toString() == "Male") ? getLocalizedString("strLblMale") : getLocalizedString("strLblFemale"),
                        lblFirstName: checkUndefined(v.FirstName).toString(),
                        lblLastName: checkUndefined(v.LastName).toString(),
                        lblMailingAddData: memberMailingAdd,
                        RegStatus: checkUndefined(v.RegStatus).toString(),
                        BillingAdd1: checkForUndefinedVal(v.ShippingAddr1),
                        BillingAdd2: checkForUndefinedVal(v.ShippingAddr2),
                        BillingCity: checkUndefined(v.ShippingCity).toString(),
                        BillingCountry: checkUndefined(v.ShippingCountry).toString(),
                        BillingZipCode: checkUndefined(v.ShippingZipCode).toString(),
                        BillingState: checkUndefined(v.ShippingState).toString(),
                        Phone1: checkForUndefinedVal(v.Phone1),
                        PhoneType1: checkForUndefinedVal(v.PhoneType1),
                        Phone2: checkForUndefinedVal(v.Phone2),
                        PhoneType2: checkForUndefinedVal(v.PhoneType2),
						txtNotes: checkUndefined(v.Note).toString(),
                        OriginalDOB: checkUndefined(v.DateOfBirth).toString(),
                        MemberID: checkUndefined(v.ServerMemberID).toString(),
                        ExpirationDate: expDOBFormatted,
                        CouponCode: checkUndefined(v.CouponCode).toString(),
                        lblRMissedWeeksData: (checkForUndefinedVal(v.MissedWeekPasses) == "") ? 0 : (v.MissedWeekPasses).toString(),
                        lblReceiveCouponsInfo: DontSendCoupon, //v.DontSendCoupon) ,
                        lblReceiveCallsInfo: DontRecvCalls, // v.DontRecvCalls) ,
                        lblParticipateSurveysInfo: DontCnctPhone, //v.DontSendCard) ,
                        lblEmailOffersInfo: DontContByEmail, //v.DontContByEmail),
                        lblReceiveMsgsInfo: DontSendCard, //v.DontCnctSMS),
                        //lblReceiveCallsInfo : DontCnctPhone,//v.DontCnctPhone)
                        lblSubscriptionType: checkForUndefinedVal(kony.sync.getString(v.SubscriptnType)),
                        glbIsInMaintance: kony.sync.getString(v.MaintenanceMode),
                        LastAttendanceDate: kony.sync.getString(v.LastAttendanceDate),
                        personalGoalWeight: checkUndefined(v.PersonalGoalWeight).toString()
                    };
                    frmMemberProfileDetils_temp.push(MemberProfileDetailsView);
                    kony.print("v.MemberStatus.toString() is : " + v.MemberStatus.toString());
                    if (v.MemberStatus.toString() == MemberStatusEnum[3]) {
                        termMemberInfo = new Object();
                        boMemberProfile.fillTermMemberInfoObjectOnline(v);
                    }
                }
            }
        }
        kony.print("frmMemberProfileDetils_temp length is : " + frmMemberProfileDetils_temp.length);

        if (frmMemberProfileDetils_temp.length > 0) {
            //termMemberInfo = new Object();
            //kony.print("Filled displayMemberProfileDetails " + JSON.stringify(termMemberInfo));// MEG-2716 - Dileep commenting as the resumt is: Filled displayMemberProfileDetails undefined 
            displayMemberProfileDetails(true, frmMemberProfileDetils_temp, true);
        }
    },


    fillTermMemberInfoObjectInMemberProfile: function(res) {
        kony.print("Inside fillTermMemberInfoObjectInMemberProfile --- " + JSON.stringify(res));
        var DontContByEmail = "";
        var DontCnctPhone = "";
        var DontCnctSMS = "";
        var DontSendCard = "";
        var DontRecvCalls = "";
        var DontSendCoupon = "";

        DontSendCard = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontSendCard).toString()));
        DontContByEmail = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontContByEmail).toString()));
        DontSendCoupon = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontSendCoupon).toString()));
        DontRecvCalls = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontRecvCalls).toString()));
        DontCnctSMS = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontCnctSMS).toString()));
        DontCnctPhone = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontCnctPhone).toString()));


        termMemberInfo.ConsWeightGain = (checkUndefined(res.ConsWeightGain) == "") ? 0 : checkUndefined(res.ConsWeightGain);
        termMemberInfo.CrntLifeTimeSta = (checkUndefined(res.CrntLifeTimeSta) == "") ? 0 : checkUndefined(res.CrntLifeTimeSta);
        termMemberInfo.LastAchvdMStone = (checkUndefined(res.LastAchvdMStone) == "") ? 0 : checkUndefined(res.LastAchvdMStone);
        termMemberInfo.PrevLifeTimeSta = (checkUndefined(res.PrevLifeTimeSta) == "") ? 0 : checkUndefined(res.PrevLifeTimeSta);
        termMemberInfo.WeeksCompleted = (checkUndefined(res.WeeksCompleted) == "") ? 0 : checkUndefined(res.WeeksCompleted);

        termMemberInfo.FeePaid = (checkUndefined(res.FeePaid) == "") ? false : checkUndefined(res.FeePaid);
        termMemberInfo.GoalWeight = (checkUndefined(res.GoalWeight) == "") ? 0 : checkUndefined(res.GoalWeight);
        termMemberInfo.IncompleteData = (checkUndefined(res.IncompleteData) == "") ? 1 : checkUndefined(res.IncompleteData);
        termMemberInfo.LastContactDate = checkUndefined(res.LastContactDate).trim();
        termMemberInfo.LastNteEntrDate = checkUndefined(res.LastNoteEntryDate).trim();
        termMemberInfo.MissWeekPasses = (checkUndefined(res.MissWeekPasses) == "") ? 0 : checkUndefined(res.MissWeekPasses);


        termMemberInfo.NoWeeksAttended = (checkUndefined(res.NoWeeksAttended) == "") ? 0 : checkUndefined(res.NoWeeksAttended);
        termMemberInfo.RegDate = checkUndefined(res.RegDate).trim();
        termMemberInfo.WeightGain = (checkUndefined(res.WeightGain) == "") ? 0 : checkUndefined(res.WeightGain);

        termMemberInfo.UserComments = checkUndefined(res.UserComments).trim();
        termMemberInfo.UserStsEndPrd = checkUndefined(res.UserStsEndPrd).trim();
        termMemberInfo.UserStsChngRsn = checkUndefined(res.UserStsChngRsn).trim();
        termMemberInfo.UniqueID = checkUndefined(res.UniqueID).trim();

        //res = JSON.parse(JSON.stringify(res));
        termMemberInfo.RegNumber = kony.sync.getString(res.RegNumber).trim();
        termMemberInfo.FirstName = kony.sync.getString(res.FirstName).trim();
        termMemberInfo.LastName = kony.sync.getString(res.LastName).trim();
        termMemberInfo.Gender = kony.sync.getString(res.Gender).trim();
        termMemberInfo.Height = kony.sync.getString(res.Height).trim();
        termMemberInfo.Email = kony.sync.getString(res.Email).trim();
        termMemberInfo.DateOfBirth = kony.sync.getString(res.DateOfBirth).trim();
        termMemberInfo.MemberType = kony.sync.getString(res.MemberType).trim();
        termMemberInfo.BillingAddr1 = kony.sync.getString(res.ShippingAddr1).trim();
        termMemberInfo.BillingAddr2 = kony.sync.getString(res.ShippingAddr2).trim();
        termMemberInfo.BillingCity = kony.sync.getString(res.ShippingCity).trim();
        termMemberInfo.BillingCountry = kony.sync.getString(res.ShippingCountry).trim();
        termMemberInfo.BillingState = getStateNameById(kony.sync.getString(res.ShippingState));
        termMemberInfo.StartDate = kony.sync.getString(res.StartDate).trim();
        termMemberInfo.BillingZipCode = kony.sync.getString(res.ShippingZipCode).trim();
        termMemberInfo.Phone = kony.sync.getString(res.Phone1).trim();
        termMemberInfo.EnrollmentDate = kony.sync.getString(res.EnrollmentDate).trim();
        kony.print("kony.sync.getString(res.MemberID).trim()" + kony.sync.getString(res.ServerMemberID).trim());
        termMemberInfo.MemberID = kony.sync.getString(res.MemberID).trim();
        termMemberInfo.PreRegNumber = kony.sync.getString(res.PreRegNumber);
        kony.print("termMemberInfo.MemberID=====>>>" + termMemberInfo.MemberID);
        termMemberInfo.RegStatus = kony.sync.getString(res.RegStatus).trim();

        termMemberInfo.DontContByEmail = DontContByEmail;
        termMemberInfo.DontCnctPhone = DontCnctPhone;
        termMemberInfo.DontCnctSMS = DontCnctSMS;
        termMemberInfo.DontSendCard = DontSendCard;
        termMemberInfo.DontRecvCalls = DontRecvCalls;
        termMemberInfo.DontSendCoupon = DontSendCoupon;
        termMemberInfo.SessionNumber = (checkUndefined(kony.sync.getString(res.SessionNumber)) == "") ? 1 : kony.sync.getString(res.SessionNumber);

        //added for MEG-3428
        termMemberInfo.UserName = (checkUndefined(res.UserName) == "") ? "" : checkUndefined(res.UserName);
        termMemberInfo.EnterpriseID = (checkUndefined(res.EnterpriseID) == "") ? 0 : checkUndefined(res.EnterpriseID);
        termMemberInfo.EmailID = (checkUndefined(res.EmailID) == "") ? "" : checkUndefined(res.EmailID);
        kony.print("boMemberProfile Filled fillTermMemberInfoObjectInMemberProfile " + JSON.stringify(termMemberInfo));
    },

    fillTermMemberInfoObjectOnline: function(res) {

        kony.print("Inside fillTermMemberInfoObjectOnline res is ::: " + JSON.stringify(res));

        var DontContByEmail = "";
        var DontCnctPhone = "";
        var DontCnctSMS = "";
        var DontSendCard = "";
        var DontRecvCalls = "";
        var DontSendCoupon = "";

        DontSendCard = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontSendCard).toString()));
        DontContByEmail = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontContByEmail).toString()));
        DontSendCoupon = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontSendCoupon).toString()));
        DontRecvCalls = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontRecvCalls).toString()));
        DontCnctSMS = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontCnctSMS).toString()));
        DontCnctPhone = boHomeScreenSearch.getValueYesOrNo((kony.sync.getString(res.DontCnctPhone).toString()));

        termMemberInfo.ConsWeightGain = (checkUndefined(res.ConsWeightGain) == "") ? 0 : checkUndefined(res.ConsWeightGain);
        termMemberInfo.CrntLifeTimeSta = (checkUndefined(res.CrntLifeTimeSta) == "") ? 0 : checkUndefined(res.CrntLifeTimeSta);
        termMemberInfo.LastAchvdMStone = (checkUndefined(res.LastAchvdMStone) == "") ? 0 : checkUndefined(res.LastAchvdMStone);
        termMemberInfo.PrevLifeTimeSta = (checkUndefined(res.PrevLifeTimeSta) == "") ? 0 : checkUndefined(res.PrevLifeTimeSta);
        termMemberInfo.WeeksCompleted = (checkUndefined(res.WeeksCompleted) == "") ? 0 : checkUndefined(res.WeeksCompleted);

        termMemberInfo.FeePaid = (checkUndefined(res.FeePaid) == "") ? false : checkUndefined(res.FeePaid);
        termMemberInfo.GoalWeight = (checkUndefined(res.GoalWeight) == "") ? 0 : checkUndefined(res.GoalWeight);
        termMemberInfo.IncompleteData = (checkUndefined(res.IncompleteData) == "") ? 1 : checkUndefined(res.IncompleteData);
        termMemberInfo.LastContactDate = checkUndefined(res.LastContactDate).trim();
        termMemberInfo.LastNteEntrDate = checkUndefined(res.LastNoteEntryDate).trim();
        termMemberInfo.MissWeekPasses = (checkUndefined(res.MissWeekPasses) == "") ? 0 : checkUndefined(res.MissWeekPasses);


        termMemberInfo.NoWeeksAttended = (checkUndefined(res.NoWeeksAttended) == "") ? 0 : checkUndefined(res.NoWeeksAttended);
        termMemberInfo.RegDate = checkUndefined(res.RegDate).trim();
        termMemberInfo.WeightGain = (checkUndefined(res.WeightGain) == "") ? 0 : checkUndefined(res.WeightGain);

        termMemberInfo.UserComments = checkUndefined(res.UserComments).trim();
        termMemberInfo.UserStsEndPrd = checkUndefined(res.UserStsEndPrd).trim();
        termMemberInfo.UserStsChngRsn = checkUndefined(res.UserStsChngRsn).trim();
        termMemberInfo.UniqueID = checkUndefined(res.UniqueID).trim();

        kony.print(" res :::: " + res);
        kony.print("res.RegNumber " + checkUndefined(res.RegNumber));
        kony.print("Test == " + JSON.stringify(termMemberInfo));
        termMemberInfo.RegNumber = checkUndefined(res.RegNumber);
        termMemberInfo.FirstName = checkUndefined(res.FirstName).trim();
        termMemberInfo.LastName = checkUndefined(res.LastName).trim();
        termMemberInfo.Gender = checkUndefined(res.Gender).trim();
        termMemberInfo.Height = checkUndefined(res.Height).trim();
        termMemberInfo.Email = checkUndefined(res.Email).trim();
        termMemberInfo.DateOfBirth = checkUndefined(res.DateOfBirth).trim();
        termMemberInfo.MemberType = checkUndefined(res.MemberType).trim();
        termMemberInfo.BillingAddr1 = checkUndefined(res.ShippingAddr1).trim();
        termMemberInfo.BillingAddr2 = checkUndefined(res.ShippingAddr2).trim();
        termMemberInfo.BillingCity = checkUndefined(res.ShippingCity).trim();
        termMemberInfo.BillingCountry = checkUndefined(res.ShippingCountry).trim();
        termMemberInfo.BillingState = getStateNameById(checkUndefined(res.ShippingState));
        termMemberInfo.StartDate = checkUndefined(res.StartDate).trim();
        termMemberInfo.BillingZipCode = checkUndefined(res.ShippingZipCode).trim();
        termMemberInfo.Phone = checkUndefined(res.Phone1).trim();

        termMemberInfo.EnrollmentDate = checkUndefined(res.EnrollmentDate).trim();
        kony.print("checkUndefined(res.ServerMemberID).trim()" + checkUndefined(res.ServerMemberID).trim());
        kony.print("::DJp::glbMemberId" + glbMemberId);
        termMemberInfo.MemberID = (checkValidString(res.ServerMemberID) && res.ServerMemberID != 0) ? res.ServerMemberID : glbMemberId;
        termMemberInfo.PreRegNumber = checkUndefined(res.PreRegNumber);
        //kony.print("termMemberInfo.MemberID=====>>>"+termMemberInfo.MemberID);
		termMemberInfo.RegStatus = kony.sync.getString(res.RegStatus).trim();

        termMemberInfo.DontContByEmail = DontContByEmail;
        termMemberInfo.DontCnctPhone = DontCnctPhone;
        termMemberInfo.DontCnctSMS = DontCnctSMS;
        termMemberInfo.DontSendCard = DontSendCard;
        termMemberInfo.DontRecvCalls = DontRecvCalls;
        termMemberInfo.DontSendCoupon = DontSendCoupon;
        termMemberInfo.SessionNumber = (checkUndefined(res.SessionNumber) == "") ? 1 : res.SessionNumber;

        //added for MEG-3428
        termMemberInfo.UserName = (checkUndefined(res.UserName) == "") ? "" : checkUndefined(res.UserName);
        termMemberInfo.EnterpriseID = (checkUndefined(res.EnterpriseID) == "") ? 0 : checkUndefined(res.EnterpriseID);
        termMemberInfo.EmailID = (checkUndefined(res.EmailID) == "") ? "" : checkUndefined(res.EmailID);
      	termMemberInfo.WeightLossFocus = (checkUndefined(res.WeightLossFocus));
      	
        kony.print("boMemberProfile Filled fillTermMemberInfoObjectOnline " + JSON.stringify(termMemberInfo));
    },

    BindWeightDetailsForProfileView: function(response) {
        kony.print("data in BindWeightDetailsForProfileView====" + response);
        var frmMemberProfileDetils_temp = [];
        var frmMemberProfileDetilsFullHistory_temp = [];
        var startWeight = "";

        //var remainingWeekPassCount = 0;
        var MemberProfileDetailsView;
        if (response.length > 0) {

            startWeight = gblStartWeightPM;
            kony.print("Start weight in BindWeightDetailsForProfileView " + startWeight);
            var actualLength = (response.length > 50) ? 50 : response.length;

            //COMMENTED  //for (var i in response)

            for (i = 0; i < parseInt(actualLength); i++) {

                var v = response[i];
                var imgData = "";
                kony.print("data in boMemberProfile====" + JSON.stringify(v));
                kony.print("kony.sync.getString(v.WeighInDate)====" + kony.sync.getString(v.WeighInDate));
                MemberProfileDetailsView = "";
                var DateFormat = kony.sync.getString(v.WeighInDate);
                //DateFormat = changeDateFormate(DateFormat, "mm/dd/yyyy");
                var timeArray = DateFormat.split("T");
                var lastWeighDate = formattedDate(DateFormat);
              	lastWeighDate =  changeDateFormate(lastWeighDate, kony.i18n.getLocalizedString("strDisplayDateFormat")) //** MEG 6386
                var lastWeight = "";
                var totalWeightLoss = 0.0;
                var roundWeight = 0;
                var roundTotalWeightLoss = 0;
                milestoneName = "";
                /* commented by Ami
            	if(v.IsAtndgMeeting != undefined){
	            	if(v.IsAtndgMeeting == true){
	            		imgData = "icn_checkbox_checked.png";
	            	}else{
	            		imgData = "icn_checkbox_unchecked.png";
	            		//remainingWeekPassCount++;
	            	}
	            } else{
	            	imgData = "icn_checkbox_unchecked.png";
	             	//remainingWeekPassCount++;
	            }
	            */
                //Added by Ami
                imgData = "icn_checkbox_checked.png";

                kony.print("Weigh in date offline is : " + timeArray[0]);
                kony.print("milestoneDataObj length offline is : " + milestoneDataObj.length);

                for (j in milestoneDataObj) {
                    var mileStone = milestoneDataObj[j];
                    kony.print("Milestone achieved offline is : " + JSON.stringify(mileStone));
                    var miDate = mileStone.mDate.split("T");
                    kony.print("Milestone achieved date : " + miDate[0]);
                    if (miDate[0].toString() == timeArray[0].toString()) {
                        if ((mileStone.mName).toString().trim() != "") {
                            milestoneName += (mileStone.mName).toString() + ", ";
                        }
                    }
                }
                milestoneName = milestoneName.replace(/,\s*$/, '');

                if (i == 0) { //(response.length)-1
                    lastWeight = kony.sync.getString(v.Weight);
                    glbLastWeightOfSelectedMember = parseFloat(lastWeight);
                    var lw = parseFloat(lastWeight);
                    var sw = parseFloat(startWeight)
                    totalWeightLoss = com.es.weighincalculations.RoundWeight(sw - lw);
                    kony.print("testing the weight change" + (startWeight - lastWeight));
                    roundWeight = com.es.weighincalculations.RoundWeight(lastWeight);
                    roundTotalWeightLoss = com.es.weighincalculations.RoundWeight(totalWeightLoss);
                    kony.print("Roundweightloss===" + roundTotalWeightLoss);
                    //startWeight = kony.sync.getString(v.Weight);
                }

                kony.print("kony.sync.getString(v.WeighInDate)" + kony.sync.getString(v.WeighInDate));
                var weightData;
                var weightLoss = "0";
                var nwiskin;
                var wSkin = "";
                if (kony.sync.getString(v.NoWeighIn) == "true" || kony.sync.getString(v.NoWeighIn) == "1") {
                    weightData = getLocalizedString("strNWI");
                    weightLoss = "0";
                    nwiskin = "btnNoWeighInSelected";
                } else {
                    weightData = kony.sync.getString(v.Weight);
                    weightLoss = kony.sync.getString(v.WeightLoss);
                    weightData = parseFloat(weightData).toFixed(1);
                    nwiskin = "btnwwtxtSearchLocation";
                }
                weightLoss = (parseFloat(weightLoss) * (-1)).toFixed(1);
                if (parseFloat(weightLoss) <= 0) {
                    wSkin = "lblF37HelveticaReg19px";
                } else {
                    weightLoss = "+" + weightLoss;
                    wSkin = "lblF38Helvetica19px"
                }
              //** MEG 6767_IsMemberAtRisk
              kony.print("ABA ----> chk isMemberAtRisk " + checkValidString(kony.sync.getString(v.IsMemberAtRisk)));
              kony.print("ABA ----> isMemberAtRisk " + kony.sync.getString(v.IsMemberAtRisk));
              var isMemberAtRiskFlag = false;
              if(checkValidString(kony.sync.getString(v.IsMemberAtRisk)))
                {
                  if(kony.sync.getString(v.IsMemberAtRisk) == '1' || kony.sync.getString(v.IsMemberAtRisk) == 'true' || kony.sync.getString(v.IsMemberAtRisk) == true)
                    {
                      kony.print("ABA ----> in isMemberAtRiskFlag true ");
                      isMemberAtRiskFlag = true;
                    }else{
                      kony.print("ABA ----> in isMemberAtRiskFlag false ");
                      isMemberAtRiskFlag = false;
                    }
                  kony.print("ABA ----> ismemberAtRisk found " +isMemberAtRiskFlag);
                }else{
                  kony.print("ABA ----> ismemberAtRisk Notfound")
                }
              //**end
                kony.print("TotalWeightLoss: " + weightLoss);
                kony.print("kony.sync.getString(v.WeighInDate) " + kony.sync.getString(v.WeighInDate) + "   weight is : " + weightData + " kony.sync.getString(v.Weight) " + kony.sync.getString(v.Weight));
                MemberProfileDetailsView = mapKeys(viewMemberProfileDetails, {
                    lbl5GoalData: com.es.weighincalculations.CalculateGoalWeight(parseFloat(startWeight), "5"),
                    lbl10GoalData: com.es.weighincalculations.CalculateGoalWeight(parseFloat(startWeight), "10"),
                    lblTotalChangeData: roundTotalWeightLoss,
                    lblStartWeightData: parseFloat(startWeight).toFixed(1),
                    lblCurrentWeightData: parseFloat(roundWeight).toFixed(1),
                    isNWIAllowed: true,
                    //Ami lblMeetingAttendedData : (v.IsAtndgMeeting.toString() == "true")?1:0,
                    lblMeetingAttendedData: 1,
                    //lblRMissedWeeksData : remainingWeekPassCount,
                    lblDateData: lastWeighDate,
                    LastWeighInDate: kony.sync.getString(v.WeighInDate),
                    imgCheckAttendance: imgData,
                    lblWeightData: weightData,
                    lblChangeData: {
                        text: weightLoss,
                        skin: wSkin
                    },
                    isMemberAtRisk : isMemberAtRiskFlag, //**Meg 6767
                    lblMilestoneData: milestoneName,
                    SessionNumber: v.SessionNumber,
                    lblCurrentDPTData: kony.sync.getString(v.DailyPtTarget),
                    lblWPAData : kony.sync.getString(v.WeeklyPointsAllowance),
                    WeekNumber: kony.sync.getString(v.WeekNumber)
                        //btnNWI : {text:"NWI",isVisible:true,skin:nwiskin}
                        //btnFreshStart : {text:"Fresh Start",isVisible:true}
                });
                frmMemberProfileDetilsFullHistory_temp.push(MemberProfileDetailsView);
                if (i == 0) {
                    frmMemberProfileDetils_temp.push(MemberProfileDetailsView);
                }
            }
        }
        kony.print("frmMemberProfileDetils_temp.length====>>>>" + frmMemberProfileDetils_temp.length);
       kony.print("ABA  ----> frmMemberProfileDetilsFullHistory_temp====>>>>" + JSON.stringify(frmMemberProfileDetilsFullHistory_temp));
       kony.print("ABA  ----> frmMemberProfileDetils_temp====>>>>" + JSON.stringify(frmMemberProfileDetils_temp));
        
      if (frmMemberProfileDetils_temp.length > 0) {
            //boMemberProfile.fillWeighInfoObject(frmMemberProfileDetils_temp);
            //boMemberProfile.fillWeighInfoObjectLastRow(frmMemberProfileDetils_temp);
            kony.print("after fillWeighInfoObject");
            BindWeighDataMemberProfileDetailsView(frmMemberProfileDetilsFullHistory_temp, frmMemberProfileDetils_temp);
            kony.print("after BindWeighDataMemberProfileDetailsView");
        }
        memberWeightList = [];
    },

    BindWeightDetailsForStartWeight: function(response) {
        var data_temp = [];
        if (response.length > 0) {
            startWeight = gblStartWeightPM;

            kony.print(" --> filling data in array ");

            for (var i in response) {
                var v = response[i];
                var imgData = "";


                var DateFormat = kony.sync.getString(v.WeighInDate);
                //DateFormat = changeDateFormate(DateFormat, "mm/dd/yyyy");
                
                var WeighDate = formattedDate(DateFormat);
                WeighDate =  changeDateFormate(WeighDate, kony.i18n.getLocalizedString("strDisplayDateFormat")) //** MEG 6386

                kony.print("---- > each object -- " + i + "--- > " + JSON.stringify(v));

                var templateName = (glbSelectedMemberSessionNumber < v.SessionNumber) ? hboxMemberHistoryGray : hboxWeighHisoryBlack; //fresh start - story -116

                kony.print("--- glbSelectedMemberSessionNumber = " + glbSelectedMemberSessionNumber + "-- session number = " + v.SessionNumber + " template themee = " + templateName);

                if (parseInt(v.SessionNumber) < parseInt(glbSelectedMemberSessionNumber)) {

                    kony.print("---- if - gray content ");
                    WeightHistory_data = mapKeys(viewMemberFreshStartWeight, {
                        hidWeightDetailRowId: "",
                        lblDate: WeighDate,
                        lblWeight: parseFloat(v.Weight).toFixed(2),
                        hidWeightDate: kony.sync.getString(v.WeighInDate),
                        SessionNumber: v.SessionNumber, //fresh start - story -116
                        imgCheckedIcon: "",
                        template: hboxMemberHistoryGray
                    });
                } else {
                    kony.print("---- else - Black font  ");
                    WeightHistory_data = mapKeys(viewMemberFreshStartWeight, {
                        hidWeightDetailRowId: "",
                        lblDate: WeighDate,
                        lblWeight: parseFloat(v.Weight).toFixed(2),
                        hidWeightDate: kony.sync.getString(v.WeighInDate),
                        SessionNumber: v.SessionNumber, //fresh start - story -116
                        imgCheckedIcon: "",
                        template: hboxWeighHisoryBlack
                    });
                }
                data_temp.push(WeightHistory_data);
            }
        }

        bindDataForMemberFreshStartPopup(data_temp);

    },

    fillWeighInfoObjectLastRow: function(res) {
        if (res.length > 0) {
            kony.print("Inside fillWeighInfoObjectLastRow====" + JSON.stringify(res));
            WeighInfoLastRow.StartWeight = checkForUndefinedVal(res[res.length - 1].lblStartWeightData);
            kony.print("checkForUndefinedVal(res[res.length-1].lblStartWeightData)===" + checkForUndefinedVal(res[res.length - 1].lblStartWeightData));
            //WeighInfoLastRow.GoalWeight = checkForUndefinedVal(res[res.length].Weight);
            WeighInfoLastRow.CurrentWeight = checkForUndefinedVal(res[res.length - 1].lblCurrentWeightData);
            //kony.print("checkForUndefinedVal(res[res.length-1].lblWeightData)====" + checkForUndefinedVal(res[res.length-1].lblCurrentWeightData));
            WeighInfoLastRow.TotalChange = checkForUndefinedVal(res[res.length - 1].lblTotalChangeData);
            kony.print("checkForUndefinedVal(res[res.length-1].TotalChange)====" + checkForUndefinedVal(res[res.length - 1].lblTotalChangeData));
            //WeighInfoLastRow.RemainingMissWP = res[res.length-1].lblRMissedWeeksData;
            //kony.print("checkForUndefinedVal(res[res.length-1].RemainingMissedWeekPass)====" + WeighInfoLastRow.RemainingMissWP);
            WeighInfoLastRow.LastWeighInDate = checkForUndefinedVal(res[res.length - 1].LastWeighInDate);
            kony.print("checkForUndefinedVal(res[res.length-1].LastWeighInDate)====" + WeighInfoLastRow.LastWeighInDate);
            WeighInfoLastRow.Date = checkForUndefinedVal(res[res.length - 1].lblDateData);
            kony.print("checkForUndefinedVal(res[res.length-1].Weight)===" + checkForUndefinedVal(res[res.length - 1].lblDateData));
            WeighInfoLastRow.WeekNumber = checkForUndefinedVal(res[res.length - 1].WeekNumber);
            kony.print("checkForUndefinedVal(res[res.length-1].WeekNumber)===" + checkForUndefinedVal(res[res.length - 1].WeekNumber));
            WeighInfoLastRow.Goal5Data = checkForUndefinedVal(res[res.length - 1].lbl5GoalData);
            WeighInfoLastRow.Goal10Data = checkForUndefinedVal(res[res.length - 1].lbl10GoalData);
            WeighInfoLastRow.MeetingAttendedData = res[res.length - 1].lblMeetingAttendedData;
            WeighInfoLastRow.DailyPtTarget = res[res.length - 1].lblCurrentDPTData;
            WeighInfoLastRow.WeeklyPointsAllowance = res[res.length - 1].lblWPAData;
        }
    },

    fillWeighInfoObject: function(res) {
        if (res.length > 0) {
            kony.print("Inside fillWeighInfoObject");
            WeighInfo.StartWeight = checkForUndefinedVal(res[0].lblStartWeightData);
            kony.print("checkForUndefinedVal(res[0].lblStartWeightData)===" + checkForUndefinedVal(res[0].lblStartWeightData));
            //WeighInfo.GoalWeight = checkForUndefinedVal(res[res.length].Weight);
            WeighInfo.CurrentWeight = checkForUndefinedVal(res[0].lblCurrentWeightData); //To do change this to current weight
            //kony.print("checkForUndefinedVal(res[res.length].lblWeightData)====" + checkForUndefinedVal(res[0].lblCurrentWeightData));
            WeighInfo.TotalChange = checkForUndefinedVal(res[0].lblTotalChangeData);
            kony.print("checkForUndefinedVal(res[res.length].TotalChange)====" + checkForUndefinedVal(res[0].lblTotalChangeData));
            //WeighInfo.RemainingMissWP = res[0].lblRMissedWeeksData;
            //kony.print("checkForUndefinedVal(res[res.length].RemainingMissedWeekPass)====" + WeighInfo.RemainingMissWP);
            WeighInfo.Date = checkForUndefinedVal(res[0].lblDateData);
            kony.print("checkForUndefinedVal(res[0].Weight)===" + checkForUndefinedVal(res[0].lblDateData));
            WeighInfo.WeekNumber = checkForUndefinedVal(res[0].WeekNumber);
            kony.print("checkForUndefinedVal(res[0].WeekNumber)===" + checkForUndefinedVal(res[0].WeekNumber));
            WeighInfo.Goal5Data = checkForUndefinedVal(res[0].lbl5GoalData);
            WeighInfo.Goal10Data = checkForUndefinedVal(res[0].lbl10GoalData);
            WeighInfo.MeetingAttendedData = res[0].lblMeetingAttendedData;
            WeighInfo.DailyPtTarget = res[0].lblCurrentDPTData;
            WeighInfo.WeeklyPointsAllowance = res[0].lblWPAData;
            kony.print("WWWWWWWeighInfo.DailyPtTarget======>>>>___" + WeighInfo.DailyPtTarget);
            kony.print("WWWWWres[0].lblMeetingAttendedData======>>>>___" + res[0].lblMeetingAttendedData);
        }
    },

    updateMemberAndWeightDetails: function(updateMemberDetailsObject, updateweightdetailsObject) {
        function updateMemberAndWeighSuccessCallback(res) {
        	boMonitor.log("updateMemberAndWeightDetails", "vboxDoneImage", updateMemberDetailsObject,FlowForMonitor.update,true);
            kony.print(getMessageTemplate("updateSuccess", "Member"), "info");
            kony.print("in updateMemberAndWeighSuccessCallback");
            boMemberProfile.updateWeightDetails(updateweightdetailsObject);
        }
        // var whrClause = "where MemberID = '"+ updateMemberDetailsObject.MemberID+"'" ;
        // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update ORM API
        //com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update(whrClause,updateMemberDetailsObject, updateMemberSuccessCallback, eventErrorCallBack);
        //com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update(whrClause,updateMemberSuccessCallback,eventErrorCallBack);
        //updateMemberDetailsObject.DeviceID = gblDeviceID;
        //		updateMemberDetailsObject.AccessToken = glbSPAuthToken;
        //		updateMemberDetailsObject.SPID = glbEmployeeId;
        updateMemberDetailsObject.EmpID = glbEmployeeId;

        updateMemberDetailsObject.Locale = deviceLocale;
        updateMemberDetailsObject.CountryID = getCountryID();

        //updateMemberDetailsObject.HeaderDate = glbHeaderDate;
        updateMemberDetailsObject.updateByPK(updateMemberAndWeighSuccessCallback, eventErrorCallBack);
    },

    updateWeightDetails: function(updateweightdetailsObject) {

        function getWeightLossForEditWeight(res) {
            if (res && res.length > 0) {

                kony.print(":::: res=" + JSON.stringify(res));
                var loss = parseFloat(res[0]._Weight) - parseFloat(updateweightdetailsObject.Weight);
                updateweightdetailsObject.WeightLoss = parseFloat(loss.toFixed(2));

            } else {
                updateweightdetailsObject.WeightLoss = parseFloat("0");
            }

            updateweightdetailsObject.EmpID = glbEmployeeId;

            var whrClause = "where MemberID = '" + updateweightdetailsObject.MemberID + "' AND WeighInDate = '" + updateweightdetailsObject.WeighInDate + "'";
          kony.print("ABA --- > updateweightdetailsObject " + JSON.stringify(updateweightdetailsObject)); 
          DBWeighDetailsController.update(whrClause, updateweightdetailsObject, updateWeightDetailsSuccessCallback, eventErrorCallBack);
        }

        function updateWeightDetailsSuccessCallback(res) {
        	boMonitor.log("Update Member previous weight", "vboxDoneImage", updateweightdetailsObject,FlowForMonitor.update,true);
            kony.print(getMessageTemplate("updateSuccess", "Weigh"), "info");
            kony.print("in updateWeightDetailsSuccessCallback");

            var whr = "where MemberID = '" + glbMemberId + "' and WeighInDate > '" + updateweightdetailsObject.WeighInDate + "' order by WeighInDate LIMIT 0,1";
            kony.print("Where condition-----" + whr);
            DBWeighDetailsController.find(whr, updatePrevWeightLoss, eventErrorCallBack);
        }

        function updatePrevWeightLoss(res) {
            if (res && res.length > 0) {
                var result = {};
                kony.print(":::: res=" + JSON.stringify(res));
                var loss = parseFloat(updateweightdetailsObject.Weight) - parseFloat(res[0]._Weight);


                result.MtngOccrID = (glbMeetingNum == "") ? 1 : glbMeetingNum;
                //result.MeetingDate = glbMeetingDate; //supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
              	result.MeetingDate = checkValidString(glbMeetingDate) ? glbMeetingDate : "0001-01-01T00:00:00";

                result.WeightLoss = parseFloat(loss.toFixed(2));
                result.EmpID = glbEmployeeId;
                var whrClause = "where WeekNumber='" + res[0]._WeekNumber + "' AND MemberID = '" + res[0]._MemberID + "' AND WeighInDate = '" + res[0]._WeighInDate + "'";
                kony.print(":second update---" + whrClause);
                DBWeighDetailsController.update(whrClause, result, updatePrevWeightLossSuccessCallback, eventErrorCallBack);
            }

        }

        function updatePrevWeightLossSuccessCallback() {
            kony.print(getMessageTemplate("updateSuccess", "Weigh"), "info");
            kony.print("in updatePrevWeightLossSuccessCallback");
        }

        var whereClause = "where MemberID = '" + updateweightdetailsObject.MemberID + "' and WeighInDate < '" + updateweightdetailsObject.WeighInDate + "' order by WeighInDate DESC LIMIT 0,1";
        DBWeighDetailsController.find(whereClause, getWeightLossForEditWeight, eventErrorCallBack);

    },
    updateMemberDetails: function(updateMemberDetailsObject, _callback) {
        function updateMemberSuccessCallback(res) {
        	boMonitor.log("Update Member details", "vboxDoneImage", updateMemberDetailsObject,FlowForMonitor.update,true);
            glbMemberId = 0;
                        //Added by Ami-MEG-3936
            alertForMessages(kony.i18n.getLocalizedString("strMemDataUpdateSuccess"));
            //alertForMessages(kony.i18n.getLocalizedString("strMemDataUpdateSuccess"));
            if (_callback) _callback.call(null);

            ClearEditMemberFeilds();
            //boEnrollMember.addMemberWeightDetails(createWeightDetailsObject);
        }
        var whrClause = "where MemberID = '" + updateMemberDetailsObject.MemberID + "'";
        kony.print("Where clause is : " + whrClause);
        
        updateMemberDetailsObject.EmpID = glbEmployeeId;
        
        //Update Defaults
        updateMemberDetailsSetDefaults(updateMemberDetailsObject, successupdateMemberSuccessCallback);

        function successupdateMemberSuccessCallback(updateMemberDetailsObject) {
            DBMemberDetailsController.update(whrClause, updateMemberDetailsObject, updateMemberSuccessCallback, eventErrorCallBack);
        }
    },
    updateMemberStartWeightDetails: function(updateMemberDetailsObject, _callback) {
        kony.print("::00::updateMemberDetailsObject=" + JSON.stringify(updateMemberDetailsObject));

        function updateMemberSuccessStartCallback(res) {
        	updateMemberDetailsObject.MemberID = glbMemberId
        	boMonitor.log("Update Member start weight", "vboxDoneImage", updateMemberDetailsObject,FlowForMonitor.update,true);
            kony.print("::00::SUccess Update");
            kony.print(getMessageTemplate("updateSuccess", "Member"), "info");
            kony.print("in updateMemberDetailsSuccessCallback");
            popupChangeStartWeight.dismiss();
            displayPopupAlert(kony.i18n.getLocalizedString("strMemDataUpdateSuccess"));
            if (_callback) _callback.call(null);
        }
        var whrClause = "where MemberID = '" + updateMemberDetailsObject.MemberID + "'";
        kony.print("::00::Where clause is : " + whrClause);
        updateMemberDetailsObject.EmpID = glbEmployeeId;

        //Change to 1 - if member mtngoccrid other than present mtngoccrid
        updateMemberDetailsObject.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
       
        //Update Defaults
        updateMemberDetailsSetDefaults(updateMemberDetailsObject, successupdateMemberStartWeightSuccessCallback);

        function successupdateMemberStartWeightSuccessCallback(updateMemberDetailsObject) {
            DBMemberDetailsController.update(whrClause, updateMemberDetailsObject, updateMemberSuccessStartCallback, eventErrorCallBack);
        }

        //}
    },
    addWeighDetails: function(createWeightDetailsObject) {
        //alert("Data issue==="+JSON.stringify(createWeightDetailsObject));
        function createMemberWeightSuccessCallback(res) {

            //Added by Praveen Kalal MEG-2925
            if (mileStoneObj.length > 0) {
                boMemberMilestone.insertMileStoneAchived(mileStoneObj);
            }

            kony.print("::mileStoneObj.length---" + mileStoneObj.length + " == 0 &&--- " + eligibleMilestonesArrObj.length);
            if (mileStoneObj.length == 0 && eligibleMilestonesArrObj.length > 0) {
                kony.print("inside EG---");
                boMemberMilestone.insertEligibleMilestone();
            }

            //End by Praveen Kalal MEG-2925

            kony.print(getMessageTemplate("addSuccess", "Member Weight"), "info");
            // alertForMessages(kony.i18n.getLocalizedString("strMemDataUpdateSuccess"));
            kony.print("in createMemberWeightSuccessCallback");
            //evenOnPostShowHomeScreen();
            //frmHomeScreen.show();
        }
        //alert("Weight object=="+JSON.stringify(createWeightDetailsObject));
        // Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create ORM API
        //createWeightDetailsObject.DeviceID = gblDeviceID;
        //		createWeightDetailsObject.AccessToken = glbSPAuthToken;
        //		createWeightDetailsObject.SPID = glbEmployeeId;
        //		createWeightDetailsObject.HeaderDate = glbHeaderDate;
        createWeightDetailsObject.SessionNumber = glbSelectedMemberSessionNumber; //fresh start - story -116
        function getWeightsForWeightLoss(res) {
            if (res && res.length > 0) {
                kony.print(":::: res=" + JSON.stringify(res));
                var loss = parseFloat(res[0]._Weight) - parseFloat(createWeightDetailsObject.Weight);
                kony.print("::::loss=" + loss);
                createWeightDetailsObject.WeightLoss = parseFloat(loss.toFixed(2));
            } else {
                createWeightDetailsObject.WeightLoss = parseFloat("0");
            }
            DBWeighDetailsController.create(createWeightDetailsObject, createMemberWeightSuccessCallback, eventErrorCallBack);
        }
        var whereClause = "where MemberID = '" + createWeightDetailsObject.MemberID + "' and WeighInDate < '" + createWeightDetailsObject.WeighInDate + "' order by WeighInDate DESC LIMIT 0,1";
        kony.print("::::addWeighDetails whereClause=" + whereClause);
        kony.print("::::addWeighDetails createWeightDetailsObject.WeighInDate=" + createWeightDetailsObject.WeighInDate);
        DBWeighDetailsController.find(whereClause, getWeightsForWeightLoss, eventErrorCallBack);



    },

    getMemberProfileWeightDetailsWS: function(memberID) {

        kony.print("Inside getMemberProfileWeightDetailsWS");
        var GetMemberProfile_inputparam = {};
        GetMemberProfile_inputparam["serviceID"] = Services.memberWeight;
        GetMemberProfile_inputparam["httpheaders"] = {};
	    GetMemberProfile_inputparam["httpconfigs"] = {};
        
        //** MEG 6493
	 	if(JsonService){
    		GetMemberProfile_inputparam["httpheaders"] = setRESTHeader();
  		}else {	       
	        GetMemberProfile_inputparam["deviceID"] = gblDeviceID;
	        GetMemberProfile_inputparam["accessToken"] = glbSPAuthToken;
	        GetMemberProfile_inputparam["SPID"] = glbEmployeeId;
	        GetMemberProfile_inputparam["HeaderDate"] = "";
	        GetMemberProfile_inputparam["Source"] = gblSourceVal;	      
	     }
	      GetMemberProfile_inputparam["MemberID"] = memberID;
	     //**End
        //GetMemberProfile = appmiddlewareinvokerasync(GetMemberProfile_inputparam, boMemberProfile.getMemberProfileWeightDetailsWSCallback);
        GetMemberProfile = Network.makeServiceCall(GetMemberProfile_inputparam, boMemberProfile.getMemberProfileWeightDetailsWSCallback, false); //true to allow offline data access
    },

    getMemberProfileWeightDetailsWSCallback: function(status, GetMemberProfile) {
        try {
            kony.print("Dileep --> getMemberProfileWeightDetailsWSCallback");
            var GetMemberProfile_temp = [],
                imgData = "icn_checkbox_unchecked.png";
            if (status == 400) {
                var frmMemberProfileDetils_temp = [];
                var frmMemberProfileDetilsFullHistory_temp = [];
                kony.print("Response===" + JSON.stringify(GetMemberProfile));

                var frmMemberProfileDetils_temp = [];
                var frmMemberProfileDetilsFullHistory_temp = [];
                kony.print("Response===" + JSON.stringify(GetMemberProfile));
                if (GetMemberProfile["MemberWeightList"] && GetMemberProfile["MemberWeightList"].length > 0) { //** MEG 6493
                    if (GetMemberProfile != null && GetMemberProfile != undefined && GetMemberProfile["MemberWeightList"] != null && GetMemberProfile["MemberWeightList"] != undefined) {
                        var memberWightRes = GetMemberProfile["MemberWeightList"];
                        var startWeight = gblStartWeightPM;
                        var meetigCount = 0;
                        //var remainingWeekPassCount = 0;
                        var MemberProfileDetailsView;
                        //frmViewMemberProfile.imgSortHeader.src = "";

                        /*		memberWightRes.sort(function(a, b) {
 								return new Date(b.WeighInDate)-new Date(a.WeighInDate);
								});
						*/
                        //kony.print("Sorted result : " + JSON.stringify(memberWightRes));

                        //ADDED
                        var actualLength = (memberWightRes.length > 50) ? 50 : memberWightRes.length;
                        //COMMENTED
                        //for (var i1 = 0; i1 < memberWightRes.length; i1++) {
                        for (var i1 = 0; i1 < parseInt(actualLength); i1++) {
                            //kony.print("Sorted result : " + JSON.stringify(memberWightRes[i1]));
                            var DateFormat = memberWightRes[i1]["WeighInDate"];
                            var timeArray = DateFormat.split("T");
                            var weighInDate = formattedDate(DateFormat);
                            weighInDate =  changeDateFormate(weighInDate, kony.i18n.getLocalizedString("strDisplayDateFormat")) //** MEG 6386
                            var lastWeight = "";
                            var totalWeightLoss = 0.0;
                            var roundWeight = 0;
                            var roundTotalWeightLoss = 0;
                            milestoneName = "";
                            if (memberWightRes[i1]["IsAttendingMeeting"] != undefined) {
                                if (memberWightRes[i1]["IsAttendingMeeting"] == "true") {
                                    imgData = "icn_checkbox_checked.png";
                                    meetigCount++;
                                } else if (memberWightRes[i1]["IsAttendingMeeting"] == "false") {
                                    imgData = "icn_checkbox_unchecked.png";
                                    //remainingWeekPassCount++;	 
                                }
                            } else {
                                imgData = "icn_checkbox_unchecked.png";
                                //remainingWeekPassCount++;
                            }
                            kony.print("Weigh in date offline is : " + timeArray[0]);
                            kony.print("milestoneDataObj length offline is : " + milestoneDataObj.length);

                            for (i in milestoneDataObj) {
                                var mileStone = milestoneDataObj[i];
                                //kony.print("Milestone achieved offline is : "+JSON.stringify(v) );
                                var miDate = (mileStone.mDate).split("T");
                                kony.print("Milestone achieved date : " + miDate[0]);
                                if (miDate[0].toString() == timeArray[0].toString()) {
                                    if ((mileStone.mName).toString().trim() != "") {
                                        milestoneName += (mileStone.mName).toString() + ", ";
                                    }
                                }
                            }
                            milestoneName = milestoneName.replace(/,\s*$/, '');

                            if (i1 == 0) //memberWightRes.length-1
                            {
                                lastWeight = memberWightRes[i1]["Weight"];
                                glbLastWeightOfSelectedMember = parseFloat(lastWeight);
                                var lw = parseFloat(lastWeight);
                                var sw = parseFloat(startWeight)
                                totalWeightLoss = sw - lw;
                                kony.print("testing the totalWeightLoss " + (startWeight - lastWeight));
                                roundWeight = com.es.weighincalculations.RoundWeight(lastWeight);
                                roundTotalWeightLoss = Math.round(totalWeightLoss).toFixed(1);
                            }
                            /*       	
				     			if(memberWightRes.length == 1)
				            	{
				            		lastWeight = memberWightRes[i1]["Weight"];
				            		var lw = parseFloat(lastWeight);
				            		var sw = parseFloat(startWeight)
				            		totalWeightLoss = sw - lw;
				            		roundWeight = com.es.weighincalculations.RoundWeight(lastWeight);
				            		roundTotalWeightLoss = Math.round(totalWeightLoss);
				            	}
				         */
                            kony.print("memberWightRes[i1][WeighInDate]" + memberWightRes[i1]["WeighInDate"]);
                            kony.print("memberWightRes[i1][WeekNo]" + memberWightRes[i1]["WeekNo"]);

                            var weightData;
                            var weightLoss = "0";
                            var nwiskin;
                            var wSkin = "";
                            if (memberWightRes[i1]["NoWeighIn"] == "true") {
                                weightData = getLocalizedString("strNWI");
                                weightLoss = "0";
                                nwiskin = "btnNoWeighInSelected";
                            } else {
                                weightData = memberWightRes[i1]["Weight"];
                                weightData = parseFloat(weightData).toFixed(1);
                                weightLoss = memberWightRes[i1]["WeightLoss"];
                                nwiskin = "btnwwtxtSearchLocation";
                                //var wLoss = com.es.weighincalculations.ConvertWeight_Kg_To_Pound(parseInt(memberWightRes[i1]["WeightLoss"]));
                                //wLoss = wLoss.toFixed(1);
                                //weightLoss = wLoss;
                            }
                            weightLoss = (parseFloat(weightLoss) * (-1)).toFixed(1);
                            if (parseFloat(weightLoss) <= 0) {
                                wSkin = "lblF37HelveticaReg19px";
                            } else {
                                weightLoss = "+" + weightLoss;
                                wSkin = "lblF38Helvetica19px";
                            }
                            //** MEG 6767_IsMemberAtRisk
                            kony.print("ABA ----> chk isMemberAtRisk " + checkValidString(memberWightRes[i1]["IsMemberAtRisk"]));
                            kony.print("ABA ----> isMemberAtRisk " +memberWightRes[i1]["IsMemberAtRisk"]);
                            var isMemberAtRiskFlag = false;
                            if(checkValidString(memberWightRes[i1]["IsMemberAtRisk"]))
                              {
                                if(memberWightRes[i1]["IsMemberAtRisk"] == '1' || memberWightRes[i1]["IsMemberAtRisk"] == 'true' || memberWightRes[i1]["IsMemberAtRisk"] == true)
                                  {
                                    kony.print("ABA ----> in isMemberAtRiskFlag true ");
                                    isMemberAtRiskFlag = true;
                                  }else{
                                    kony.print("ABA ----> in isMemberAtRiskFlag false ");
                                    isMemberAtRiskFlag = false;
                                  }
                                kony.print("ABA ----> ismemberAtRisk found " +isMemberAtRiskFlag);
                              }else{
                                kony.print("ABA ----> ismemberAtRisk Notfound")
                              }
                            //**end


                          
                          
                            //boMemberMilestone.getMilestoneNameForWeightHistory("");
                            var memberProfileDetailsView = mapKeys(viewMemberProfileDetails, {
                                lbl5GoalData: com.es.weighincalculations.CalculateGoalWeight(parseFloat(startWeight), "5"),
                                lbl10GoalData: com.es.weighincalculations.CalculateGoalWeight(parseFloat(startWeight), "10"),
                                lblTotalChangeData: totalWeightLoss,
                                lblStartWeightData: startWeight,
                                lblCurrentWeightData: roundWeight,
                                lblMeetingAttendedData: meetigCount,
                                isNWIAllowed: true,
                                //lblRMissedWeeksData : remainingWeekPassCount,
                                lblDateData: weighInDate,
                                LastWeighInDate: memberWightRes[i1]["WeighInDate"],
                                imgCheckAttendance: imgData,
                                lblWeightData: weightData,
                                lblChangeData: {
                                    text: weightLoss,
                                    skin: wSkin
                                },
                                lblMilestoneData: milestoneName,
                                lblCurrentDPTData: memberWightRes[i1]["DPT"],
                              	isMemberAtRisk : isMemberAtRiskFlag, //**Meg 6767
                                lblWPAData :  memberWightRes[i1]["WeeklyPointsAllowance"], // added by Ami MEG-4896
 								SessionNumber :  memberWightRes[i1]["SessionNumber"],
                                //WeekNumber : memberWightRes[i1]["WeekNumber"],
                                WeekNumber: memberWightRes[i1]["WeekNo"]
                                    //btnNWI : {text:"NWI",isVisible:true,skin:nwiskin}
                                    //btnFreshStart : {text:"Fresh Start",isVisible:true}
                            });
                            frmMemberProfileDetilsFullHistory_temp.push(memberProfileDetailsView);
                            //boMemberProfile.insertOnlineWeightDetails(memberWightRes[i1]);
                            if (i1 == 0) {
                                frmMemberProfileDetils_temp.push(memberProfileDetailsView);
                            }
                        }
                    }
                    if (frmMemberProfileDetils_temp.length > 0) {
                        //boMemberProfile.fillWeighInfoObject(frmMemberProfileDetils_temp);
                        kony.print("after fillWeighInfoObject");
                        //boMemberProfile.fillWeighInfoObjectLastRow(frmMemberProfileDetils_temp);
                        BindWeighDataMemberProfileDetailsView(frmMemberProfileDetilsFullHistory_temp, frmMemberProfileDetils_temp);
                        kony.print("after BindWeighDataMemberProfileDetailsView");
                    }
                }
                removeProgressView();
            }
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    updateMemberStatus: function(whrCond, updateObj) {
        function updateMemberStatusCallback(res) {
        	updateObj.MemberID = glbMemberId;
        	boMonitor.log("Update Member Status", "vboxDoneImage", updateObj,FlowForMonitor.update,true);
            ClearBatchMemberVariables();
            kony.print(getMessageTemplate("updateSuccess", "Member"), "info");
            alertForMessages(kony.i18n.getLocalizedString("strMsgMemberstatusSuccess"));

            if (!IsNoMeetingSelected) {
                evenOnPostShowHomeScreen();
            } else {
                frmHomeScreenNoMeeting.show();
            }


        }
        // updateObj.DeviceID = gblDeviceID;
        //		updateObj.AccessToken = glbSPAuthToken;
        //		updateObj.SPID = glbEmployeeId;
        updateObj.EmpID = glbEmployeeId;
        //updateObj.HeaderDate = glbHeaderDate;
        //Update Defaults
        updateMemberDetailsSetDefaults(updateObj, successupdateMemberStatusCallback);

        function successupdateMemberStatusCallback(updateObj) {
            DBMemberDetailsController.update(whrCond, updateObj, updateMemberStatusCallback, eventErrorCallBack)
        }


    },
    insertOnlineWeightDetails: function(v) {

        kony.print("ABA --> Inserting weight record into local db ::: " + JSON.stringify(v));
        var createWeightDetailsOnline = {};
        displayProgressView();
        //var createWeightDetailsOnline = new com.kony.WeightWatchers.MemberSyncScope.WeighDetails();

        createWeightDetailsOnline.DailyPtTarget = parseInt(v.DPT);
        createWeightDetailsOnline.Weight = parseFloat(v.Weight); //parseFloat(weightInKG)
        createWeightDetailsOnline.WeighInDate = v.WeighInDate; //supportTime("Apr 02, 2014", "", "yyyy-mm-ddTHH:NN:SS");;
        createWeightDetailsOnline.EmpID = glbEmployeeId;
        createWeightDetailsOnline.IsAtndgMeeting = v.IsAttendingMeeting;
        createWeightDetailsOnline.LocationID = parseInt(v.LocationID);
        createWeightDetailsOnline.ManualWeighIn = v.ManualWeighIn;
        createWeightDetailsOnline.MtngOccrID = (glbMeetingNum == "") ? 1 : glbMeetingNum;
        createWeightDetailsOnline.NoWeighIn = v.NoWeighIn; //Nikita Patel
        createWeightDetailsOnline.WeekNumber = parseInt(v.WeekNo); //parseInt(memberIDCount);//0;
        createWeightDetailsOnline.MemberID = v.MemberID;
        createWeightDetailsOnline.WeeklyPointsAllowance = checkValidString(v.WeeklyPointsAllowance)?parseInt(v.WeeklyPointsAllowance):0;
		createWeightDetailsOnline.IsMemberAtRisk = checkValidString(v.IsMemberAtRisk) ? (v.IsMemberAtRisk) : false;//MEG 6767

        createWeightDetailsOnline.SessionNumber = checkValidString(v.SessionNumber) ? parseInt(v.SessionNumber) : 1; //0;//
        kony.print("--> case 3- session number - createWeightDetailsOnline.MemberID---->>>>>" + createWeightDetailsOnline.MemberID);

        //createWeightDetailsOnline.DeviceID = gblDeviceID;
        //		createWeightDetailsOnline.AccessToken = glbSPAuthToken;
        //		createWeightDetailsOnline.SPID = glbEmployeeId;
        //		createWeightDetailsOnline.HeaderDate = glbHeaderDate;
        createWeightDetailsOnline.WeightLoss = parseFloat(v.WeightLoss);

        boEnrollMember.addOnlineMemberWeightDetails(createWeightDetailsOnline);

    },
    updateMemberGoalWeight: function(whrCond, updateObj) {
        function updateMemberGoalWeightSuccessCallback() {
        	updateObj.MemberID = glbMemberId;
        	boMonitor.log("Update Goalweight", "vboxDoneImage", updateObj,FlowForMonitor.update,true);
            
            isGoalWeightAvailable = true;
            frmProcessMember.lblGoalWeightInfo.text = updateObj.GoalWeight;
            goalWeight = updateObj.GoalWeight;
            popupGoalWeight.dismiss();
            popupActionsForProcessMember.dismiss();
            kony.print(getMessageTemplate("updateSuccess", "Member"), "info");
            alertForMessages(kony.i18n.getLocalizedString("strMsgGoalweightSuccess"))
        }
        //updateObj.DeviceID = gblDeviceID;
        //		updateObj.AccessToken = glbSPAuthToken;
        //		updateObj.SPID = glbEmployeeId;
        updateObj.EmpID = glbEmployeeId;
        //updateObj.HeaderDate = glbHeaderDate;
        DBMemberDetailsController.update(whrCond, updateObj, updateMemberGoalWeightSuccessCallback, eventErrorCallBack)
    },

    getMaxWeekNumber: function(memberid, callback) {
        var query = "select max(WeekNumber)+2 as weeknumber from WeighDetails where CountryID = '" + getCountryID() + "' AND MemberID like '" + memberid + "' and MemberID <> 0";

        function getMaxWeekNumberSuccessCallback(res) {
            kony.print("::getMaxWeekNumber::--" + JSON.stringify(res));
            if (res.length > 0) {
                if (res[0]['weeknumber'] > 0) {
                    callback.call(null, res[0]['weeknumber']);
                } else {
                    callback.call(null, 2);
                }
            } else {
                callback.call(null, 2);
            }
        }
        kony.print("::PK Sql ----" + query);
        kony.sync.single_select_execute(kony.sync.getDBName(), query, null, getMaxWeekNumberSuccessCallback, eventErrorCallBack);

    }
};
