function setSubcriptionData(memberdetailsObject, updatedEmailFromMPActivated, entryDate,flow)
{
kony.print("ABA ---> setSubcriptionData memberdetailsObject " + JSON.stringify(memberdetailsObject));
 kony.print("ABA ---> setSubcriptionData saleTransactionObj " + JSON.stringify(saleTransactionObj)); 
  if (glbFormName.lblSubType.text != kony.i18n.getLocalizedString("strPayg") && glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID && !IsAWSLocationEnabled()) {

            kony.print("::DJP::glbFormName.lblSubType.text.toUpperCase()=" + frmProcessMember.lblSubType.text.toUpperCase() + " glbSelectMemType=" + glbSelectMemType + " glbMembershipType=" + glbMembershipType);

            if (flow == megFlow.Process && glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPrepaid") && (glbSelectMemType == MemberTypeEnum['AtWork'] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase())) {
                //FOR PREPAID MEMBERS
              	kony.print("1 frmProcessMember.lblProcessMemberSubHeaderlbl2.text" + frmProcessMember.lblProcessMemberSubHeaderlbl2.text);
                if(frmProcessMember.lblProcessMemberSubHeaderlbl2.text != "Series Member") //**MEG 7171
                {
                    memberdetailsObject['CouponCode'] = "";
                    memberdetailsObject['ExpirationDate'] = ""; //entryDate;
                    memberdetailsObject['SubscriptnID'] = "";
                    memberdetailsObject['LastUsedDate'] = "";
                    memberdetailsObject['ProductID'] = "";
                    memberdetailsObject['SubscriptnType'] = "";
                    memberdetailsObject['IsPAYG'] = "true";
                  }

            } else if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPrepaid")) {
              kony.print(" 2 frmProcessMember.lblProcessMemberSubHeaderlbl2.text" + frmProcessMember.lblProcessMemberSubHeaderlbl2.text);
                
               if(frmProcessMember.lblProcessMemberSubHeaderlbl2.text != "Series Member")//**MEG 7171
                {
                    memberdetailsObject['IsPAYG'] = "true";
                    memberdetailsObject['SubscriptnType'] = "";
                }
            } else {
                // FOR NON PREPAID MEMBERS
                var obj;

                if (isFromFMP) {
                    if (glbLastGlbSubType == "MonthlyPass") {
                        memberdetailsObject['CouponCode'] = glbLastCouponCode.toUpperCase(); //glbFormName.txtSubscriptionID.text;
                        memberdetailsObject['ExpirationDate'] = supportTime(new Date(glbLastExpDate), "", "yyyy-mm-ddTHH:NN:SS"); //entryDate;
                        memberdetailsObject['LastUsedDate'] = entryDate;
                        memberdetailsObject['SubscnMemberID'] = glbMemberId;
                        memberdetailsObject['IsPAYG'] = (checkExpirationDate(memberdetailsObject["ExpirationDate"])) ? "true" : "false";
                        memberdetailsObject['SubscriptnType'] = (checkExpirationDate(memberdetailsObject["ExpirationDate"])) ? "" : glbLastGlbSubType;
                        kony.print("glbLastCouponCode : "+glbLastCouponCode);
                        if(glbLastCouponCode == "" || glbLastCouponCode == null || glbLastCouponCode == undefined)
                        	memberdetailsObject['SubscriptnDate'] = supportTime(new Date(),"", "yyyy-mm-ddTHH:NN:SS"); //Added for 4713
                        glbLastGlbSubType = "";
                        glbLastExpDate = "";

                    } else {
                        memberdetailsObject['SubscriptnType'] = "";
                        memberdetailsObject['IsPAYG'] = "true";
                        glbLastGlbSubType = "";
                        glbLastExpDate = "";
                    }
                } else {
                    obj = getSubscriptionData(glbFormName.txtSubscriptionID.text);

                    kony.print("getSubscriptionData:===== " + JSON.stringify(obj));

                    memberdetailsObject['CouponCode'] = obj.CouponCode.toUpperCase(); //glbFormName.txtSubscriptionID.text;
                    memberdetailsObject['ExpirationDate'] = obj.ExpirationDate; //entryDate;
					
                    memberdetailsObject['LastUsedDate'] = entryDate;
                    memberdetailsObject['SubscnMemberID'] = glbMemberId;
                    memberdetailsObject['IsPAYG'] = "false";
                    memberdetailsObject['SubscriptnType'] = MemberSubscriptionTypeEnum[glbFormName.lblSubType.text];
                    
                    //Added for 4713
					kony.print("obj.CouponCode : "+obj.CouponCode);
					kony.print("glbLastCouponCode : "+glbLastCouponCode);
                    if(glbLastCouponCode != "" || glbLastCouponCode != null || glbLastCouponCode != undefined){
                    	if(glbLastCouponCode != obj.CouponCode){
                    		memberdetailsObject['SubscriptnDate'] = supportTime(new Date(),"", "yyyy-mm-ddTHH:NN:SS");
                    	}
                    }else{
                    	memberdetailsObject['SubscriptnDate'] = supportTime(new Date(),"", "yyyy-mm-ddTHH:NN:SS");
                    }
                    	
                    glbLastGlbSubType = "";
                    glbLastExpDate = "";
                  
                  	
					
					if(preActivationObj.hasOwnProperty('voucherNumber')) {
        				setPreActivationData(memberdetailsObject,updatedEmailFromMPActivated,flow);
					}else{
						setLinkDetails(memberdetailsObject);
					} 
					
                    kony.print("in process Ami =" + JSON.stringify(memberdetailsObject));
                }

                if (saleTransactionObj !== undefined && saleTransactionObj.length > 0) {
                    memberdetailsObject['ProductID'] = saleTransactionObj[0]['productDetail']['ProductID'];
                    kony.print("ProductID in Subscription Process==>>> " + saleTransactionObj[0]['productDetail']['ProductID']);
                } else {
                    memberdetailsObject['ProductID'] = 1;
                }
            }
        } else if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPayg")) {
            memberdetailsObject['CouponCode'] = "";
            memberdetailsObject['ExpirationDate'] = entryDate; //entryDate;
            memberdetailsObject['SubscriptnID'] = 0;
            memberdetailsObject['LastUsedDate'] = entryDate;
            memberdetailsObject['SubscnMemberID'] = glbMemberId;
            memberdetailsObject['ProductID'] = 1;
            memberdetailsObject['SubscriptnType'] = "";
            memberdetailsObject['IsPAYG'] = "true";
            (checkValidString(gblLinkInfoForOnlineMember.IsLink) && memberdetailsObject.EnterpriseID != "0" && memberdetailsObject.EnterpriseID != 0) ? (memberdetailsObject.IsLink = gblLinkInfoForOnlineMember.IsLink) : (memberdetailsObject.IsLink = 'true');
        }else
          {
            boMeetings.getMeetingEndDate(function(meetingEndDate) {
             memberdetailsObject['ExpirationDate']  = meetingEndDate;
          });
            memberdetailsObject['CouponCode'] = memberdetailsObject.MtngOccrID;
           // memberdetailsObject['ExpirationDate'] = entryDate; //entryDate;
            memberdetailsObject['SubscriptnID'] = 0; 
            memberdetailsObject['LastUsedDate'] = entryDate;
            memberdetailsObject['SubscnMemberID'] = glbMemberId;
            memberdetailsObject['ProductID'] = (saleTransactionObj !== undefined && saleTransactionObj.length > 0) ? saleTransactionObj[0]['productDetail']['ProductID'] : 1;
            memberdetailsObject['SubscriptnType'] = "Series";
            memberdetailsObject['IsPAYG'] = "false";
            (checkValidString(gblLinkInfoForOnlineMember.IsLink) && memberdetailsObject.EnterpriseID != "0" && memberdetailsObject.EnterpriseID != 0) ? (memberdetailsObject.IsLink = gblLinkInfoForOnlineMember.IsLink) : (memberdetailsObject.IsLink = 'true');
        
          }
  		kony.print("glbChangeSubscDetected " + glbChangeSubscDetected);
  		kony.print("glbSubscriptionID " + glbSubscriptionID);
        if (glbChangeSubscDetected && memberdetailsObject['IsPAYG'] == "false") {
            memberdetailsObject['SubscriptnID'] = 0;
        } else {
            memberdetailsObject['SubscriptnID'] = glbSubscriptionID;
        }
        
        setLTCDetails(memberdetailsObject);
        
        kony.print(":: setSubcriptionData :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));
}
function setPreActivationData(memberdetailsObject,updatedEmailFromMPActivated,flow)
{
	kony.print("In hasOwnProperty('voucherNumber') ===>>>");

	memberdetailsObject['Email'] = preActivationObj.email;
	memberdetailsObject['RegNumber'] = preActivationObj.regNum;
	
	memberdetailsObject['BillingAddr1'] = preActivationObj.billingAddr1;
	memberdetailsObject['BillingAddr2'] = preActivationObj.billingAddr2;
	memberdetailsObject['BillingCity'] = preActivationObj.city;
	memberdetailsObject['BillingState'] = returnStateIDByName(preActivationObj.state);
	memberdetailsObject['BillingZipCode'] = preActivationObj.zip;
	
	memberdetailsObject['ShippingAddr1'] = preActivationObj.shippingAddr1;
	memberdetailsObject['ShippingAddr2'] = preActivationObj.shippingAddr2;
	memberdetailsObject['ShippingCity'] = preActivationObj.shippingCity;
	memberdetailsObject['ShippingState'] = returnStateIDByName(preActivationObj.shippingState);
	memberdetailsObject['ShippingZipCode'] = preActivationObj.shippingZip;
	
	var date = preActivationObj.voucherNumber.slice(-6);
    kony.print("date"+date);
    var dt = new Date(date.slice(0,2) + "/" + date.slice(2,4) + "/" + date.slice(4,6));
    kony.print("::dt::"+dt);
    memberdetailsObject.CouponCode = preActivationObj.voucherNumber.slice(0,-6).toUpperCase();
    memberdetailsObject.ExpirationDate = supportTime(dt, "", "yyyy-mm-ddTHH:NN:SS");
    
    //Patch for member request failure due to empty coupon code.
    if(!checkValidString(memberdetailsObject.CouponCode)){
    	kony.print(":: Inside the patch Preactivation::");
        var obj = getSubscriptionData(glbFormName.txtSubscriptionID.text);
        kony.print(":: Patch for member failure ::getSubscriptionData:===== " + JSON.stringify(obj));
        memberdetailsObject.CouponCode = obj.CouponCode.toUpperCase(); 
        memberdetailsObject.ExpirationDate = obj.ExpirationDate;
        preActivationObj.voucherNumber = glbFormName.txtSubscriptionID.text;
    }        		
	
	if (flow == megFlow.Process) {
	    glbLastCouponCode = preActivationObj.voucherNumber.slice(0, -6);
	    var dt = preActivationObj.voucherNumber.slice(-6);
	    glbLastExpDate = dt.slice(0, 2) + "/" + dt.slice(2, 4) + "/" + dt.slice(4, 6);
	    glbRegNoForProcess = preActivationObj.regNum;
		
		
	    if (preActivationObj.hasOwnProperty('Height')) {
	        kony.print("::heightInMeters:: ==" + heightInMeters);
	        heightinInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
	        memberdetailsObject.Height = heightinInches;
	    }
	}
	if (preActivationObj.isMPFromService == "true") {
    	kony.print("Link data glbSelectedMemberToLink : " + JSON.stringify(glbSelectedMemberToLink));
    	memberdetailsObject = linkMPActivation(memberdetailsObject,updatedEmailFromMPActivated);
	}

	kony.print(":: setPreActivationData :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));
}
// Must be set after the preactivation
function setIncompleteFlag(memberdetailsObject, flow)
{

	//memberdetailsObject.IncompleteData = checkForMemberInCompleteProfile(memberdetailsObject);
	var isShippingAddressComplete = false;
		
		if(flow == megFlow.Process){
			
			memberdetailsObject.IncompleteData = checkForMemberInCompleteProfile(memberdetailsObject,false,true);
		}else if(flow == megFlow.Enroll){
			
				memberdetailsObject.IncompleteData = checkForMemberInCompleteProfile(memberdetailsObject);
		}else if(flow == megFlow.ReEnroll){
			memberdetailsObject.IncompleteData = checkForMemberInCompleteProfile(memberdetailsObject);
			
		}else if(flow == megFlow.Add){
		        memberdetailsObject.IncompleteData = checkForMemberInCompleteProfile(memberdetailsObject);//!inCompleteFlag;
		
		}
		kony.print(":: setIncompleteFlag :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));
}

function linkMPActivation(memberdetailsObject,updatedEmailFromMPActivated)
{
	if(glbSelectedMemberToLink.lblEmailID != "" && glbSelectedMemberToLink.lblEmailID != undefined){
				kony.print(" IN IF linkMPActivation == ");
				memberdetailsObject.LinkType = "Link";
		        memberdetailsObject.EmailID = glbSelectedMemberToLink.lblEmailID;
		        memberdetailsObject.RegNumber = preActivationObj.regNum;
		        memberdetailsObject.EnterpriseID = glbSelectedMemberToLink.EnterpriseID;
		        memberdetailsObject.UserName = glbSelectedMemberToLink.lblUsername;
		        memberdetailsObject.IsLink = "false";
			}else{
				kony.print(" IN ELSE linkMPActivation == ");
				memberdetailsObject.EnterpriseID = 1;
				memberdetailsObject.EmailID = updatedEmailFromMPActivated;
				memberdetailsObject.RegNumber = preActivationObj.regNum;
				memberdetailsObject.LinkType = "Link";
				memberdetailsObject.UserName = memberdetailsObject.CouponCode;
				memberdetailsObject.IsLink = "false";
			}
			
			kony.print(":: linkMPActivation :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));	
			
			return memberdetailsObject;
}

function setLifeTimeEligibityForProcessMember(memberdetailsObject)
{
	if (isEligibleForLifetime) {
            memberdetailsObject['MemberType'] = MemberValueEnum[7]; //MemberTypeEnum.Lifetime;
            isEligibleForLifetime = false;
        }else if (isLifetimeInChangeMemberType) {
            memberdetailsObject['MemberType'] = MemberValueEnum[7]; //MemberTypeEnum.Lifetime;
            isLifetimeInChangeMemberType = false;
        }
        // LifeTime Rules MEG-1179

        kony.print("-----Current Member Values = " + JSON.stringify(CurrentMemberValues));

        if (glbLifetimeEligibility) {
            kony.print("-----Current Member Values glbLifetimeEligibility= " + glbLifetimeEligibility);

            CurrentMemberValues.PaidLastFee = "true";
            memberdetailsObject["TrackerID"] = CurrentMemberValues.TrackerID;
            memberdetailsObject["MaintenanceMode"] = CurrentMemberValues.MaintenanceMode;
            memberdetailsObject["TrackerStartDate"] = CurrentMemberValues.TrackerStartDate;
            memberdetailsObject["FailedDate"] = CurrentMemberValues.FailedDate;
            memberdetailsObject["Eligible"] = CurrentMemberValues.Eligible;
            memberdetailsObject["EligibleDate"] = CurrentMemberValues.EligibleDate;
            memberdetailsObject["WeightCountMet"] = CurrentMemberValues.WeightCountMet;
            memberdetailsObject["PaidLastFee"] = CurrentMemberValues.PaidLastFee;
            kony.print("-----Current Member Values isGoalWeightReset= " + isGoalWeightReset);
            memberdetailsObject["ProgramDuration"] = getProgramDuration(); //"0"; //Program Duration set to 0



            if (CurrentMemberValues.Eligible == 'true') memberdetailsObject["MemberType"] = MemberValueEnum[7]; //LifeTime
            //Insert Milestone if Elligible
            if (CurrentMemberValues.Eligible == true || CurrentMemberValues.Eligible == 'true') {
                var mileStoneObj = [];
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MilestoneID": "13",
                    "MemberMilestoneID": generateGUID(),
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    //"WeekNumber": 2,
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": "Reached Lifetime",
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                boMemberMilestone.insertMileStoneAchived(mileStoneObj);
            }
            emptyCurrentMemebrDetails(); //Empty Values
            kony.print("---> Setting new Member after 1179 = " + JSON.stringify(memberdetailsObject));
        }

        glbLifetimeEligibility = false;
        kony.print(":: setLifeTimeEligibityForProcessMember :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));
}

function setPersonalGoalWeight(memberdetailsObject,entryDate)
{
	if (checkAppSettingEnable(Settings["PG"])) {
            //Added for 4513
            if (isDisplayPersonalGoalAlert) {
                memberdetailsObject['PersonalGoalWeightDate'] = entryDate;
                kony.print("SJ--->>>Saving PersonalGoalWeightDate : " + entryDate);
            }

            //Added for 4513
            if (checkValidString(glbPersonalGoalWeight)) {//*** MEG 6870
                memberdetailsObject['PersonalGoalWeight'] = parseFloat(glbPersonalGoalWeight).toFixed(1);
                kony.print("SJ--->>>Saving personalGoalWeight : " + parseFloat(glbPersonalGoalWeight));
                glbPersonalGoalWeight = 0;
            }else { //*** MEG 6870

                          glbPersonalGoalWeight = 0;
                          memberdetailsObject['PersonalGoalWeight']=glbPersonalGoalWeight;

            }

        }
        
        kony.print(":: setPersonalGoalWeight :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));
}
function setGoalWeightReset(memberdetailsObject)
{
	if (isGoalWeightReset == 1) {
            isGoalWeightChecked = false;
            isGoalWeightReset = 0;
            isConsicutive5WeeksCompleted = 0;
            var maintanceMode = 0;

            if (glbIsInMaintance || glbIsInMaintance == '1' || glbIsInMaintance == 1 || glbIsInMaintance == "true") {
                maintanceMode = 0;
            }

            memberdetailsObject["GoalWeight"] = parseFloat(frmProcessMember.txtAreaWeightProcess.text);
            memberdetailsObject["MaintenanceMode"] = maintanceMode;
            memberdetailsObject["TrackerStartDate"] = "0001-01-01T00:00:00";
            memberdetailsObject["FailedDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");

        }
        kony.print(":: setGoalWeightReset :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));
}
function setFreshStart(memberdetailsObject)
{
/*** start - below changes is related to fresh start story - 116 **********/
        if (blnFreshStartWeightChanged && glbArrMemberFreshStart.WeighInDate && glbArrMemberFreshStart.WeighInDate != '') {
            glbSelectedMemberSessionNumber++;
            memberdetailsObject["SessionNumber"] = glbSelectedMemberSessionNumber;
            memberdetailsObject["StartDate"] = glbArrMemberFreshStart['WeighInDate'];
            memberdetailsObject["StartWeight"] = glbArrMemberFreshStart['StartWeight'];
            memberdetailsObject["IsFreshStart"] = 'true';
            memberdetailsObject["RefreshDate"] = glbArrMemberFreshStart['WeighInDate'];
            blnFreshStartWeightChanged = false;
            //call the function to update or delete the weight history based on selected fresh star weight object 
            boEnrollMember.removeWeightHistoryForFreshStartAction(glbMemberId, glbArrMemberFreshStart);
            glbArrMemberFreshStart = {};
        } else {
            memberdetailsObject["SessionNumber"] = glbSelectedMemberSessionNumber;
            memberdetailsObject["StartDate"] = CurrentMemberValues.StartDate;
            memberdetailsObject["StartWeight"] = CurrentMemberValues.StartWeight;
            memberdetailsObject["IsFreshStart"] = (CurrentMemberValues.IsFreshStart == true || CurrentMemberValues.IsFreshStart == 'true') ? 'true' : 'false';
            memberdetailsObject["RefreshDate"] = CurrentMemberValues.RefreshDate;
            kony.print("----- CurrentMemberValues.IsFreshStart = " + CurrentMemberValues.IsFreshStart);
        }
     
        /***end- above changes is related to fresh start story - 116 **********/
        
        kony.print(":: setFreshStart :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));
}
function setWeighData(entryDate)
{
	var WeeklyPoint;
	if (IsWeighedInTimeRange) {
            kony.print("IsWeighedInTimeRange flag at Process member Clicked");
            IsWeighedInTimeRange = false;
            evenOnPostShowHomeScreen();
        } else {
            updateMilestoneObjectMeetingID();
            createWeightDetailsObject = {};
            if (IsNWI) {
                kony.print("IsNWI flag at Process member Clicked" + IsNWI);
                createWeightDetailsObject.Weight = getWeightDetailsObject.Weight;
                               
                createWeightDetailsObject.DailyPtTarget = isNaN(frmProcessMember.lblTodaysDTPInfo.text) ? getWeightDetailsObject.DailyPtTarget : parseInt(frmProcessMember.lblTodaysDTPInfo.text);
                              
                var checkDPTSettings = checkAppSettingEnable(Settings["DPT"]) ? true : false;
       			kony.print("checkDPTSettings IsReEnrollScreen =============="+checkDPTSettings);
                if(!checkDPTSettings)
                {
                	WeeklyPoint=getWeightDetailsObject.WeeklyPointsAllowance;
                	createWeightDetailsObject.WeeklyPointsAllowance = checkforWPA(WeeklyPoint);
                }
                else
                {
                	WeeklyPoint=frmProcessMember.lblWPAinfo.text;
                	createWeightDetailsObject.WeeklyPointsAllowance = parseInt(checkforWPA(WeeklyPoint));
                }	
                
                createWeightDetailsObject.EmpID = glbEmployeeId; //"anita.sado";
                createWeightDetailsObject.NoWeighIn = (IsNWI) ? 'true' : 'false'; //getWeightDetailsObject.NoWeighIn;
                createWeightDetailsObject.IsAtndgMeeting = IsAttendMeeting; //getWeightDetailsObject.IsAtndgMeeting;
                createWeightDetailsObject.WeighInDate = entryDate; //getWeightDetailsObject.WeighInDate;
                if (getWeightDetailsObject.WeekNumber == null) {
                    createWeightDetailsObject.WeekNumber = 1;
                } else {
                    createWeightDetailsObject.WeekNumber = getWeekNumber(entryDate.split('T')[0]); //parseInt(getWeightDetailsObject.WeekNumber) + 1;
                }
                
                createWeightDetailsObject.MemberID = glbMemberId;
                createWeightDetailsObject.LocationID = parseInt(glbLocationID);
                createWeightDetailsObject.ManualWeighIn = "true";
                createWeightDetailsObject.MeetingDate = glbMeetingDate; //entryDate;

                createWeightDetailsObject.MtngOccrID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
                createWeightDetailsObject.WeightLoss = changeInLastWeight;
                createWeightDetailsObject.SessionNumber = checkValidString(glbSelectedMemberSessionNumber) ? glbSelectedMemberSessionNumber : 1;

                //Added for MEGCN-14
                if (in_array(deviceLocale,Countries["CA"])) {
                    createWeightDetailsObject.IsMemberAtRisk = IsAtRisk;
                    kony.print("SJ===>>> Setting flag AtRisk : " + IsAtRisk);
                    if (IsAtRisk) {
                        IsAtRisk = false;
                    }
                }else //** MEG 6826
                {
                   createWeightDetailsObject.IsMemberAtRisk = false;

                }//** End

                kony.print("IsNWI Weight Data==" + JSON.stringify(createWeightDetailsObject));

                getWeightDetailsObject = {};
               
            } else {
                kony.print("Process weight=====" + weightInKG);
                createWeightDetailsObject.Weight = parseFloat(frmProcessMember.txtAreaWeightProcess.text); //parseFloat(weightInKG);
                createWeightDetailsObject.DailyPtTarget = isNaN(frmProcessMember.lblTodaysDTPInfo.text) ? 0 : parseInt(frmProcessMember.lblTodaysDTPInfo.text);
                              
                 var checkDPTSettings = checkAppSettingEnable(Settings["DPT"]) ? true : false;
       			kony.print("checkDPTSettings IsReEnrollScreen =============="+checkDPTSettings);
                if(!checkDPTSettings)
                {
                	createWeightDetailsObject.WeeklyPointsAllowance = 0;
                }
                else
                {
                	WeeklyPoint=frmProcessMember.lblWPAinfo.text;
                	createWeightDetailsObject.WeeklyPointsAllowance = parseInt(checkforWPA(WeeklyPoint));
                }	
                createWeightDetailsObject.EmpID = glbEmployeeId; //"anita.sado";
                createWeightDetailsObject.NoWeighIn = "false";
                createWeightDetailsObject.IsAtndgMeeting = IsAttendMeeting;
                createWeightDetailsObject.WeighInDate = entryDate; //frmProcessMember.lblLastWeighInInfo.text;
                if (getWeightDetailsObject.WeekNumber == null) {
                    createWeightDetailsObject.WeekNumber = 1;
                } else {
                    createWeightDetailsObject.WeekNumber = parseInt(getWeightDetailsObject.WeekNumber) + 1;
                }
                
                createWeightDetailsObject.MemberID =getWeightDetailsObject.MemberID;// (getWeightDetailsObject.MemberID == undefined) ? glbMemberId : getWeightDetailsObject.MemberID;
                createWeightDetailsObject.LocationID = parseInt(glbLocationID);
                createWeightDetailsObject.ManualWeighIn = "true";
                createWeightDetailsObject.MeetingDate = glbMeetingDate; //entryDate;
                createWeightDetailsObject.MtngOccrID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
                createWeightDetailsObject.WeightLoss = changeInLastWeight * (-1);
                createWeightDetailsObject.SessionNumber = checkValidString(glbSelectedMemberSessionNumber) ? glbSelectedMemberSessionNumber : 1;

                //Added for MEGCN-14
                if (in_array(deviceLocale,Countries["CA"])) {
                    createWeightDetailsObject.IsMemberAtRisk = IsAtRisk;
                    kony.print("SJ===>>> Setting flag AtRisk : " + IsAtRisk);
                    if (IsAtRisk) {
                        IsAtRisk = false;
                    }
                }else //** MEG 6826
                {
                   createWeightDetailsObject.IsMemberAtRisk = false;

                }//** End

                kony.print("IsNWI Else Weight Data==" + JSON.stringify(createWeightDetailsObject));
                kony.print("IsNWI Else Week Number==" + parseInt(getWeightDetailsObject.WeekNumber));

                getWeightDetailsObject = {};
               
            }

            IsNWI = false;
            changeInLastWeight = 0;
            
            kony.print(":: setWeighData :: createWeightDetailsObject ---->>>>>" + JSON.stringify(createWeightDetailsObject));
            
            return createWeightDetailsObject;
        }
        
        
}
function setNoteData(entryDate,noteStr)
{
	isNotesDataPresent = false;
	var createNoteDetailsObject = {};

            if (noteStr != undefined && noteStr != null && noteStr.length > 0 && noteStr.replace("\n", "").trim().length > 0) {
                createNoteDetailsObject.MemberID = glbMemberId;
                createNoteDetailsObject.EmployeeID = glbEmployeeId;
                createNoteDetailsObject.ID = parseInt(memberIDCount) + 1;
                createNoteDetailsObject.EntryDate = entryDate;
                createNoteDetailsObject.Note = noteStr;
                createNoteDetailsObject.NoteTypeID = "Sticky";
                
                isNotesDataPresent = true;
               
            }
            kony.print(":: setNoteData :: createNoteDetailsObject ---->>>>>" + JSON.stringify(createNoteDetailsObject));
            return createNoteDetailsObject;
}
function updateNoteData()
{
			isNotesDataPresent = false;
			var notememberdetailsObject = {};

            notememberdetailsObject["Note"] = frmProcessMember.txtNotes.text;

            kony.print("update notememberdetailsObject:===> " + JSON.stringify(notememberdetailsObject));
			
            if (notememberdetailsObject != null && notememberdetailsObject != "" && frmProcessMember.txtNotes.text.replace("\n", "").trim().length > 0) {
				isNotesDataPresent = true;
            }
            
            kony.print(":: updateNoteData :: notememberdetailsObject ---->>>>>" + JSON.stringify(notememberdetailsObject));
            
       		return notememberdetailsObject;
}
function setBMINoteData(entryDate)
{
	var createBMINoteDetailsObject={};
	isBMINotesDataPresent = false;
	 //save BMI note - Added for 4497
        if (isBMIoverloaded) {
            if (bmiNote != undefined && bmiNote != null && bmiNote.length > 0) {
                
                createBMINoteDetailsObject.EmployeeID = glbEmployeeId; //"anita.sado";
                createBMINoteDetailsObject.ID = parseInt(memberIDCount) + 1;
                createBMINoteDetailsObject.EntryDate = entryDate;
                createBMINoteDetailsObject.Note = bmiNote;
                createBMINoteDetailsObject.NoteTypeID = "BMIOverride";
                createBMINoteDetailsObject.MemberID = glbMemberId;
                isBMINotesDataPresent = true;
            }
        }
        
        kony.print(":: setBMINoteData :: createBMINoteDetailsObject ---->>>>>" + JSON.stringify(createBMINoteDetailsObject));
        
        return createBMINoteDetailsObject;
}
function setLinkDetails(memberdetailsObject)
{
 //MEG-4510 - proccess
    checkValidString(gblLinkInfoForOnlineMember.EnterpriseID) ? (memberdetailsObject.EnterpriseID = gblLinkInfoForOnlineMember.EnterpriseID) : (memberdetailsObject.EnterpriseID = 0);
    checkValidString(gblLinkInfoForOnlineMember.EmailID) ? (memberdetailsObject.EmailID = gblLinkInfoForOnlineMember.EmailID) : (memberdetailsObject.EmailID = "");
    checkValidString(gblLinkInfoForOnlineMember.LinkType) ? (memberdetailsObject.LinkType = gblLinkInfoForOnlineMember.LinkType) : (memberdetailsObject.LinkType = "None");
    checkValidString(gblLinkInfoForOnlineMember.UserName) ? (memberdetailsObject.UserName = gblLinkInfoForOnlineMember.UserName) : (memberdetailsObject.UserName = "");
    (checkValidString(gblLinkInfoForOnlineMember.IsLink) && memberdetailsObject.EnterpriseID != "0" && memberdetailsObject.EnterpriseID != 0) ? (memberdetailsObject.IsLink = gblLinkInfoForOnlineMember.IsLink) : (memberdetailsObject.IsLink = 'true');
     
    kony.print(":: setLinkDetails :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject));           
}


function setMemberUpdateEmail(memberdetailsObject, updatedEmailFromMPActivated){

 		kony.print("popupAddEmail.txtEmailAddress.text : "+popupAddEmail.txtEmailAddress.text);
       	if(popupAddEmail.txtEmailAddress.text != "" && popupAddEmail.txtEmailAddress.text != undefined){
       		kony.print("In if add email");
       		memberdetailsObject.Email = popupAddEmail.txtEmailAddress.text;
       	}
       	
       	if(updatedEmailFromMPActivated != "" && updatedEmailFromMPActivated != undefined)
        	memberdetailsObject.Email = updatedEmailFromMPActivated;
        	
        kony.print(":: setMemberUpdateEmail :: memberdetailsObject ---->>>>>" + JSON.stringify(memberdetailsObject)); 
}

function updateProcessMemberData(updatememberdetailsObject,entryDate)
{
	 	updatememberdetailsObject['MemberStatus'] = MemberStatusEnum[1];
        //updatememberdetailsObject['IncompleteData'] = checkForMemberInCompleteProfile(selectedMemberData,false,true);
        updatememberdetailsObject['FeePaid'] = true;//Added to update this value in Process Member Flow;
		updatememberdetailsObject['EmpID'] = glbEmployeeId;
        updatememberdetailsObject['MtngOccrID'] = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum;
        updatememberdetailsObject['MeetingDate'] = glbMeetingDate;
		updatememberdetailsObject['Email'] = checkForUndefinedVal(glbFormName.txtEmailID.text);
      	
      	updatememberdetailsObject['Height'] = selectedMemberData.Height; // Line Added to set profile incompleteflag ::checkForMemberInCompleteProfile
       	updatememberdetailsObject['RegNumber'] = selectedMemberData.RegNo;// Line Added to set profile incompleteflag ::checkForMemberInCompleteProfile
       
        if (goalAchieved) {
            updatememberdetailsObject['GoalAchDate'] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            goalAchieved = false;
        }
        if (goalWeightAdded) {
            updatememberdetailsObject['GoalWeight'] = gblGoalWeightPM; //To Do:Replace with actual
            goalWeightAdded = false;
        }
        		
		if (parseInt(ReedeemedPasses) > 0) {
            updatememberdetailsObject['ReedeemedPasses'] = ReedeemedPasses;
            updatememberdetailsObject['RedeemedDate'] = entryDate;
            updatememberdetailsObject['MissWeekPasses'] = MissWeekPasses;
            updatememberdetailsObject['IsDateRedeemed'] = 'false';
        }
        
        updatememberdetailsObject["LastAttendanceDate"] = entryDate;
        
        kony.print(":: updateProcessMemberData :: updatememberdetailsObject ---->>>>>" + JSON.stringify(updatememberdetailsObject)); 
}