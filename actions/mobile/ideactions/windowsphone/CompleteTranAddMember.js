function createAddMemberData(createMemberDetailsObject, entryDate) {
    // TODO: Remove hard coded data from below entries
    //Billing Address Block Nodes
    createMemberDetailsObject.BillingState = 0;
    //Maintainance Tracker
    createMemberDetailsObject.TrackerID = 0;
    createMemberDetailsObject.MaintenanceMode = 'false';
    createMemberDetailsObject.TrackerStartDate = "0001-01-01T00:00:00";
    createMemberDetailsObject.FailedDate = "0001-01-01T00:00:00";
    createMemberDetailsObject.Eligible = 'false';
    createMemberDetailsObject.EligibleDate = "0001-01-01T00:00:00";
    createMemberDetailsObject.WeightCountMet = 'false';
    createMemberDetailsObject.PaidLastFee = 'false';
    createMemberDetailsObject.SessionNumber = 1;
    createMemberDetailsObject.ProgramDuration = getProgramDuration(); //"0";
    //Link Unlink and Fresh Start
    createMemberDetailsObject.EmailID = "";
    createMemberDetailsObject.EnterpriseID = 0;
    createMemberDetailsObject.LinkType = "None";
    createMemberDetailsObject.UserName = "";
    createMemberDetailsObject.IsLink = 'true';
    createMemberDetailsObject.IsFreshStart = 'false';
    createMemberDetailsObject.RefreshDate = "0001-01-01T00:00:00";
    //Other Nodes
    createMemberDetailsObject.ConsWeightGain = 0;
    createMemberDetailsObject.CrntLifeTimeSta = 0;
    createMemberDetailsObject.DateOfBirth = supportTime(frmAddIndividulaMember.lblDOBInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
    createMemberDetailsObject.DontRecvCalls = false;
    createMemberDetailsObject.DontContByEmail = (frmAddIndividulaMember.switchOffers.selectedIndex == "0") ? false : true; //Changing to solve bug in Phase 1 MEG -2354
    createMemberDetailsObject.DontCnctPhone = false;
    createMemberDetailsObject.DontCnctSMS = false;
    createMemberDetailsObject.DontSendCard = false;
    createMemberDetailsObject.DontSendCoupon = false;
    createMemberDetailsObject.Email = (checkForUndefinedVal(glbFormName.txtEmailID.text) == "") ? frmAddIndividulaMember.txtEmailID.text : glbFormName.txtEmailID.text;
    kony.print("Email in complete process member function else==>>" + glbFormName.txtEmailID.text);
    createMemberDetailsObject.EmpID = glbEmployeeId; //"anita.sado";
    createMemberDetailsObject.EnrollmentDate = entryDate;
    createMemberDetailsObject.FeePaid = true; //Set true for MEG-4791
    createMemberDetailsObject.FirstName = frmAddIndividulaMember.txtFirstName.text;
    createMemberDetailsObject.Gender = frmAddIndividulaMember.cmbGender.selectedKey;
    kony.print("gendervalue in complete process member function==>>" + frmAddIndividulaMember.cmbGender.selectedKey);
    kony.print("Location ID to be added in Member is : " + glbLocationID);
    createMemberDetailsObject.GoalWeight = (frmAddIndividulaMember.txtGoalWeight.text > 0) ? frmAddIndividulaMember.txtGoalWeight.text : 0;
    kony.print("heightinInches in Add memebr flow : " + heightinInches);
    createMemberDetailsObject.Height = Math.round(heightinInches);
    createMemberDetailsObject.LastAchvdMStone = 0;
    createMemberDetailsObject.LastContactDate = entryDate;
    createMemberDetailsObject.LastName = frmAddIndividulaMember.txtLastName.text;
    createMemberDetailsObject.LastNteEntrDate = entryDate;
    createMemberDetailsObject.LocationID = parseInt(glbLocationID);
    createMemberDetailsObject.MeetingDate = glbMeetingDate;
    createMemberDetailsObject.LastAttendanceDate = entryDate;
    createMemberDetailsObject.MtngOccrID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
    //added by praveen kalal after new requirement for atwork 11OCT2014
    if (glbSelectMemType == MemberTypeEnum["AtWork"]) {
        createMemberDetailsObject.MemberType = MemberValueEnum[1];
        createMemberDetailsObject.MemberRole = MemberRoleEnum[1];
    } else {
        createMemberDetailsObject.MemberType = MemberValueEnum[glbSelectMemType];
        createMemberDetailsObject.MemberRole = MemberRoleEnum[2];
    }
    //End by praveen kalal after new requirement for atwork 11OCT2014
    //Ami add - MEG-115 start
    createMemberDetailsObject.ReedeemedPasses = 0;
    createMemberDetailsObject.RedeemedDate = "0001-01-01T00:00:00";
    createMemberDetailsObject.IsDateRedeemed = 'true';
    // Check if passes are reedemed for missed week attendance or not
    if (parseInt(ReedeemedPasses) > 0) {
        createMemberDetailsObject.ReedeemedPasses = ReedeemedPasses;
        createMemberDetailsObject.RedeemedDate = entryDate;
        createMemberDetailsObject.MissWeekPasses = MissWeekPasses;
        createMemberDetailsObject.IsDateRedeemed = 'false';
    } else {
        if (frmAddIndividulaMember.txtRemainingWeeks.text == '' || frmAddIndividulaMember.txtRemainingWeeks.text.length == 0) {
            createMemberDetailsObject.MissWeekPasses = 3;
        } else {
            createMemberDetailsObject.MissWeekPasses = frmAddIndividulaMember.txtRemainingWeeks.text;
        }
    }
    //Ami add - MEG-115 end
    //Other Nodes        
    createMemberDetailsObject.NoWeeksAttended = 1; //This is default value we need to pass
    createMemberDetailsObject.Phone1 = ""; //Replace with actual
    createMemberDetailsObject.Phone2 = ""; //Replace with actual
    createMemberDetailsObject.PhoneType1 = phoneTypeValueEnum[1];
    createMemberDetailsObject.PhoneType2 = phoneTypeValueEnum[1];
    createMemberDetailsObject.PreRegNumber = 0;
    createMemberDetailsObject.PrevLifeTimeSta = 0;
    createMemberDetailsObject.RegDate = supportTime(frmAddIndividulaMember.lblStartDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
    kony.print("createMemberDetailsObject.RegDate---->>>>>" + createMemberDetailsObject.RegDate);
    //added by praveen kalal after new requirement for atwork 11OCT2014
    if (glbSelectMemType == MemberTypeEnum["AtWork"]) {
        createMemberDetailsObject.RegNumber = "";
    } else {
        createMemberDetailsObject.RegNumber = frmAddIndividulaMember.txtMemberID.text; //This should be 9 digits
    }
    //end by praveen kalal after new requirement for atwork 11OCT2014
    glbRegNo = frmAddIndividulaMember.txtMemberID.text; //Add Member
    glbRegNoForProcess = frmAddIndividulaMember.txtMemberID.text; //Add Member
    //Shipping Address Block Nodes
    createMemberDetailsObject.ShippingState = 0;
    //Other Nodes
    createMemberDetailsObject.StartDate = supportTime(frmAddIndividulaMember.lblStartDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS"); ////To do Format this date to server time
    createMemberDetailsObject.StartWeight = parseFloat(frmAddIndividulaMember.txtStartWeight.text); //Nikita Patel
    kony.print(" VALUE frmAddIndividulaMember.txtStartWeight.text===========>" + frmAddIndividulaMember.txtStartWeight.text);
    createMemberDetailsObject.MemberStatus = MemberStatusEnum[1]; // MemberStatusEnum[1];
    createMemberDetailsObject.TransactionType = TransactionType.Add;
    createMemberDetailsObject.WeeksCompleted = parseInt(frmAddIndividulaMember.txtWeeksCompleted.text);
    createMemberDetailsObject.WeightGain = 0;
    createMemberDetailsObject.SessionNumber = 1; //fresh start -116
    kony.print(":: createAddMemberData :: createMemberDetailsObject ---->>>>>" + JSON.stringify(createMemberDetailsObject));
}

function setAddMemberSubscriptionData(createMemberDetailsObject, updatedEmailFromMPActivated, entryDate, flow) {
    if (glbFormName.lblSubType.text != kony.i18n.getLocalizedString("strPayg") && glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID) {
        if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPrepaid") && (glbSelectMemType == MemberTypeEnum["AtWork"] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase())) {
            //FOR PREPAID MEMBERS
            createMemberDetailsObject.CouponCode = "";
            createMemberDetailsObject.ExpirationDate = ""; //entryDate;
            createMemberDetailsObject.SubscriptnID = "";
            createMemberDetailsObject.LastUsedDate = "";
            createMemberDetailsObject.ProductID = "";
            createMemberDetailsObject.SubscriptnType = "";
            createMemberDetailsObject.IsPAYG = "true";
        } else if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPrepaid")) {
            createMemberDetailsObject.IsPAYG = "true";
            createMemberDetailsObject.SubscriptnType = "";
        } else {
            var obj = (isFromFMP) ? getSubscriptionData(getFmpSubid()) : getSubscriptionData(glbFormName.txtSubscriptionID.text);
            kony.print("getSubscriptionData:===== " + JSON.stringify(obj));
            if (preActivationObj.hasOwnProperty('voucherNumber')) {
                setPreActivationData(createMemberDetailsObject, updatedEmailFromMPActivated, flow)
            } else {
                createMemberDetailsObject.CouponCode = (isFromFMP) ? "" : obj.CouponCode.toUpperCase(); //glbFormName.txtSubscriptionID.text;
                createMemberDetailsObject.ExpirationDate = obj.ExpirationDate; //entryDate;
                //MEG-4510- add
                setLinkDetails(createMemberDetailsObject);
            }
            createMemberDetailsObject.SubscriptnID = 0;
            createMemberDetailsObject.LastUsedDate = entryDate;
            createMemberDetailsObject.ProductID = (saleTransactionObj !== undefined && saleTransactionObj.length > 0) ? saleTransactionObj[0]['productDetail']['ProductID'] : 1;
            createMemberDetailsObject.SubscriptnType = MemberSubscriptionTypeEnum[glbFormName.lblSubType.text];
            createMemberDetailsObject.IsPAYG = "false";
        }
    } else {
        createMemberDetailsObject.IsPAYG = "true";
    }
    createMemberDetailsObject.MemberID = glbMemberId;
    setLTCDetails(createMemberDetailsObject);
    kony.print(":: setAddMemberSubscriptionData :: createMemberDetailsObject ---->>>>>" + JSON.stringify(createMemberDetailsObject));
}

function setAddMemberWeightData(createWeightDetailsForAddMember, createWeightDetailsObject, entryDate) {
    var WeeklyPoint;
    kony.print("inside weigh in False");
    //Weight Details for Start Weight and Start Date..//Nikita Patel
    var startWeight = parseFloat(frmAddIndividulaMember.txtStartWeight.text);
    var startDate = Date.parse(frmAddIndividulaMember.lblStartDateInfo.text);
    startDate = supportTime(startDate, "", "yyyy-mm-ddTHH:NN:SS");
    var roundWeight = com.es.weighincalculations.RoundWeight(frmAddIndividulaMember.txtStartWeight.text);
    roundWeight = (roundWeight.toString().length > 0) ? parseFloat(roundWeight).toFixed(1) : "";
    var weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeight));
    //Roshni var TotalDPT = com.es.weighincalculations.CalculateDPT(agevalue, heightInMeters, weightInKG, gendervalue);
    var TotalDPT = com.es.weighincalculations.CalculateStatistics("DPT", weightInKG, heightInMeters, agevalue, gendervalue);
    var WPA = com.es.weighincalculations.CalculateStatistics("WPA", weightInKG, heightInMeters, agevalue, gendervalue);
    kony.print("1. The total WPA is.  " + JSON.stringify(WPA));
    createWeightDetailsForAddMember.DailyPtTarget = parseInt(TotalDPT);
    createWeightDetailsForAddMember.WeeklyPointsAllowance = parseInt(WPA);
    createWeightDetailsForAddMember.Weight = startWeight; //parseFloat(weightInKG)
    createWeightDetailsForAddMember.WeighInDate = startDate; //supportTime("Apr 02, 2014", "", "yyyy-mm-ddTHH:NN:SS");;
    createWeightDetailsForAddMember.EmpID = glbEmployeeId;
    createWeightDetailsForAddMember.IsAtndgMeeting = "true";
    createWeightDetailsForAddMember.LocationID = parseInt(glbLocationID);
    createWeightDetailsForAddMember.ManualWeighIn = "true";
    //Added for MEGCN-14
    if (in_array(deviceLocale, Countries["CA"])) {
        createWeightDetailsForAddMember.IsMemberAtRisk = IsAtRisk;
        kony.print("SJ===>>> Setting flag AtRisk : " + IsAtRisk);
    }
    /* 
         * MEG-March'2015 Release 
         * Fix for MEG-3866. As per Nimmy's comments and discussion with Devang the MTGOCCID hould be kept 1 and meeting date should be kept as the start weight date for the start weight weigh in record insert call.
            hence commenting the below 2 paramters and assigning new values accordingly. Offshore team needs to do DIT and confirm if there is any impact
		*/
    //createWeightDetailsForAddMember.MeetingDate = entryDate;
    //createWeightDetailsForAddMember.MtngOccrID = parseInt(checkValidString(glbTempMeetingNum)?glbTempMeetingNum:glbMeetingNum);
    createWeightDetailsForAddMember.MeetingDate = startDate;
    createWeightDetailsForAddMember.MtngOccrID = 1;
    createWeightDetailsForAddMember.NoWeighIn = "false"; //Nikita Patel
    createWeightDetailsForAddMember.WeekNumber = 0; //parseInt(memberIDCount);//0;
    createWeightDetailsForAddMember.MemberID = glbMemberId;
    kony.print("createWeightDetailsForAddMember.MemberID---->>>>>" + createWeightDetailsForAddMember.MemberID);
    createWeightDetailsForAddMember.WeightLoss = parseFloat("0.0");
    createWeightDetailsForAddMember.SessionNumber = 1;
    kony.print("START WEIGHT AND DATE ARRAY::-->>" + JSON.stringify(createWeightDetailsForAddMember));
    //end
    createWeightDetailsObject.DailyPtTarget = parseInt(frmEnrollWeighMember.txtDPTValue.text);
    WeeklyPoint = frmEnrollWeighMember.lblWPAinfo.text;
    createWeightDetailsObject.WeeklyPointsAllowance = parseInt(checkforWPA(WeeklyPoint));
    createWeightDetailsObject.Weight = parseFloat(frmEnrollWeighMember.txtWeight.text); //parseFloat(weightInKG);
    createWeightDetailsObject.EmpID = glbEmployeeId; //"anita.sado";
    createWeightDetailsObject.IsAtndgMeeting = IsAttendMeeting;
    createWeightDetailsObject.LocationID = parseInt(glbLocationID);
    createWeightDetailsObject.ManualWeighIn = "true";
    createWeightDetailsObject.MeetingDate = glbMeetingDate; //entryDate;
    createWeightDetailsObject.MtngOccrID = parseInt(checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum);
    createWeightDetailsObject.NoWeighIn = (isNWI) ? 'true' : 'false'; //""+isNWI+"'"; //Nikita Patel
    createWeightDetailsObject.SessionNumber = 1; //fresh start -116
    kony.print(" -- coming cse 2 --- session number - weight details - 1 value  ");
    //Added for MEGCN-14
    if (in_array(deviceLocale, Countries["CA"])) {
        createWeightDetailsObject.IsMemberAtRisk = IsAtRisk;
        kony.print("SJ===>>> Setting flag AtRisk : " + IsAtRisk);
        if (IsAtRisk) {
            IsAtRisk = false;
        }
    }
    kony.print("NWI VALUE ===========>" + isNWI);
    createWeightDetailsObject.WeighInDate = entryDate; //supportTime("Apr 02, 2014", "", "yyyy-mm-ddTHH:NN:SS");;
    createWeightDetailsObject.WeekNumber = 1; //parseInt(memberIDCount);//0;
    createWeightDetailsObject.MemberID = glbMemberId;
    kony.print("ENROLL createWeightDetailsObject.MemberID---->>>>>" + createWeightDetailsObject.MemberID);
    var lossTemp = createWeightDetailsObject.Weight - createWeightDetailsForAddMember.Weight;
    kony.print("::DJP::lossTem=" + lossTemp);
    if (lossTemp < 0) {
        createWeightDetailsObject.WeightLoss = Math.abs(parseFloat(lossTemp));
    } else {
        createWeightDetailsObject.WeightLoss = parseFloat("0.0");
    }
    kony.print(":: setAddMemberWeightData :: createWeightDetailsObject ---->>>>>" + JSON.stringify(createWeightDetailsObject));
    kony.print(":: setAddMemberWeightData :: createWeightDetailsForAddMember ---->>>>>" + JSON.stringify(createWeightDetailsForAddMember));
}