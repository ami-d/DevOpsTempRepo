function createEnrollMemberData(createMemberDetailsObject,entryDate)
{
	//Maintainance Tracker
        createMemberDetailsObject.SessionNumber = 1;
        createMemberDetailsObject.TrackerID = 0;
        createMemberDetailsObject.MaintenanceMode = 'false';
        createMemberDetailsObject.TrackerStartDate = "0001-01-01T00:00:00";
        createMemberDetailsObject.FailedDate = "0001-01-01T00:00:00";
        createMemberDetailsObject.Eligible = 'false';
        createMemberDetailsObject.EligibleDate = "0001-01-01T00:00:00";
        createMemberDetailsObject.WeightCountMet = 'false';
        createMemberDetailsObject.PaidLastFee = 'false';
        createMemberDetailsObject.ProgramDuration = getProgramDuration(); //"0"; //Program Duration set to 0

        //Link Unlink and Fresh Start
        createMemberDetailsObject.EmailID = "";
        createMemberDetailsObject.EnterpriseID = 0;
        createMemberDetailsObject.LinkType = "None";
        createMemberDetailsObject.UserName = "";
        createMemberDetailsObject.IsLink = 'true';
        createMemberDetailsObject.IsFreshStart = 'false';
        createMemberDetailsObject.RefreshDate = "0001-01-01T00:00:00";

        //Billing Address Block Nodes
        createMemberDetailsObject.BillingState = 0;

        //Other Nodes
        createMemberDetailsObject.ConsWeightGain = 0;
        createMemberDetailsObject.CrntLifeTimeSta = 0;
        createMemberDetailsObject.DateOfBirth = supportTime(frmEnrollNewMember.lblDOBInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
        kony.print("DateOfBirth in enroll==>>" + supportTime(frmEnrollNewMember.lblDOBInfo.text, "", "yyyy-mm-ddTHH:NN:SS"));
        createMemberDetailsObject.DontRecvCalls = false;
        createMemberDetailsObject.DontContByEmail = (frmEnrollNewMember.switchOffers.selectedIndex == "0") ? false : true; //Changing to solve bug in Phase 1 MEG -2354
        createMemberDetailsObject.DontCnctPhone = false;
        createMemberDetailsObject.DontCnctSMS = false;
        createMemberDetailsObject.DontSendCard = false;
        createMemberDetailsObject.DontSendCoupon = false;

        kony.print("Email in complete process member function else==>>" + glbFormName.txtEmailID.text);
        createMemberDetailsObject.EmpID = glbEmployeeId; //"anita.sado";
        createMemberDetailsObject.EnrollmentDate = entryDate;
        createMemberDetailsObject.FeePaid = true; //Set true for MEG-4791
        createMemberDetailsObject.FirstName = frmEnrollNewMember.txtFirstName.text;
        createMemberDetailsObject.Gender = frmEnrollNewMember.cmbGender.selectedKey;
        kony.print("gendervalue in complete process member function==>>" + frmEnrollNewMember.cmbGender.selectedKey);
        kony.print("Location ID to be added in Member is : " + glbLocationID);
        createMemberDetailsObject.GoalWeight = 0;
        createMemberDetailsObject.Height = Math.round(heightinInches);
        createMemberDetailsObject.LastAchvdMStone = 0;
        createMemberDetailsObject.LastContactDate = entryDate;
        createMemberDetailsObject.LastName = frmEnrollNewMember.txtLastName.text;
        createMemberDetailsObject.LastNteEntrDate = entryDate;
        createMemberDetailsObject.LocationID = parseInt(glbLocationID);
        
        createMemberDetailsObject.MeetingDate = glbMeetingDate;
        createMemberDetailsObject.MtngOccrID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
        createMemberDetailsObject.LastAttendanceDate = entryDate;
        
        //Other Nodes        
        createMemberDetailsObject.NoWeeksAttended = 1; //This is default value we need to pass
        createMemberDetailsObject.Phone1 = ""; //"4787878555"; //Replace with actual
        createMemberDetailsObject.Phone2 = ""; //"4787878555"; //Replace with actual
        createMemberDetailsObject.PhoneType1 = phoneTypeValueEnum[1];
        createMemberDetailsObject.PhoneType2 = phoneTypeValueEnum[1];
        createMemberDetailsObject.PreRegNumber = 0;
        createMemberDetailsObject.PrevLifeTimeSta = 0;
        createMemberDetailsObject.RegDate = entryDate;
        createMemberDetailsObject.RegNumber = frmEnrollNewMember.txtMemberIDInfo.text; //This should be 9 digits
        glbRegNo = frmEnrollNewMember.txtMemberIDInfo.text; //Enroll Member
        glbRegNoForProcess = frmEnrollNewMember.txtMemberIDInfo.text; //Enroll Member
        //Shipping Address Block Nodes
        createMemberDetailsObject.ShippingState = 0;

        //Other Nodes
        createMemberDetailsObject.StartDate = entryDate;
        createMemberDetailsObject.StartWeight = parseFloat(frmEnrollWeighMember.txtWeight.text);

        kony.print("StartWeight in Enroll: " + parseFloat(frmEnrollWeighMember.txtWeight.text));

        createMemberDetailsObject.MemberStatus = MemberStatusEnum[1]; // MemberStatusEnum[1];
        createMemberDetailsObject.TransactionType = TransactionType.Enrollment;
        createMemberDetailsObject.WeeksCompleted = 0;
        createMemberDetailsObject.WeightGain = 0;
        
        createMemberDetailsObject.Email = (checkForUndefinedVal(glbFormName.txtEmailID.text) == "") ? frmEnrollNewMember.txtEmailID.text : glbFormName.txtEmailID.text;
        createMemberDetailsObject.MemberRole = MemberRoleEnum[2];

        createMemberDetailsObject.MemberID = glbMemberId;
        createMemberDetailsObject.SessionNumber = 1; //fresh start -116
        createMemberDetailsObject.MemberType = MemberValueEnum[1];
        createMemberDetailsObject.MissWeekPasses = 3; //This is default value we need to pass
        //Ami add
        createMemberDetailsObject.ReedeemedPasses = 0;
        createMemberDetailsObject.RedeemedDate = "0001-01-01T00:00:00";
        createMemberDetailsObject.IsDateRedeemed = 'true';
        
        kony.print(":: createEnrollMemberData :: createMemberDetailsObject ---->>>>>" + JSON.stringify(createMemberDetailsObject));
}
function setEnrollSubcriptionData(createMemberDetailsObject, updatedEmailFromMPActivated, entryDate, flow)
{
	if (glbFormName.lblSubType.text != kony.i18n.getLocalizedString("strPayg") && glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID) {
            if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPrepaid")) {
                createMemberDetailsObject.IsPAYG = "true";
                createMemberDetailsObject.SubscriptnType = "";
            } else {
            	
                createMemberDetailsObject.SubscriptnID = 0;
                createMemberDetailsObject.LastUsedDate = entryDate;

                if (saleTransactionObj != undefined && saleTransactionObj.length > 0) {
                    createMemberDetailsObject.ProductID = saleTransactionObj[0]["productDetail"]["ProductID"];
                    kony.print("ProductID in Subscription enroll==>>> " + saleTransactionObj[0]["productDetail"]["ProductID"]);
                } else {
                    createMemberDetailsObject.ProductID = 1;

                }

                createMemberDetailsObject.SubscriptnType = MemberSubscriptionTypeEnum[glbFormName.lblSubType.text];
                kony.print("**********glbFormName.lblSubType.text " +  glbFormName.lblSubType.text);
                createMemberDetailsObject.IsPAYG = "false";
             				
				if(preActivationObj.hasOwnProperty('voucherNumber')) {
            		setPreActivationData(createMemberDetailsObject,updatedEmailFromMPActivated,flow)
            	}else {
	                var obj = (isFromFMP) ? getSubscriptionData(getFmpSubid()) : getSubscriptionData(glbFormName.txtSubscriptionID.text);
	                kony.print("getSubscriptionData:===== " + JSON.stringify(obj));
	                createMemberDetailsObject.CouponCode = (isFromFMP) ? "" : obj.CouponCode.toUpperCase(); //glbFormName.txtSubscriptionID.text;
	                createMemberDetailsObject.ExpirationDate = obj.ExpirationDate; //entryDate;
					createMemberDetailsObject.Email = (checkForUndefinedVal(glbFormName.txtEmailID.text) == "") ? frmEnrollNewMember.txtEmailID.text : glbFormName.txtEmailID.text;
					
                	setLinkDetails(createMemberDetailsObject);
                	
                }
				
            }
        } else {
            createMemberDetailsObject.CouponCode = ""; //glbFormName.txtSubscriptionID.text;
            createMemberDetailsObject.ExpirationDate = entryDate; //;
            createMemberDetailsObject.SubscriptnID = 0;
            createMemberDetailsObject.LastUsedDate = entryDate;
            createMemberDetailsObject.ProductID = 1;
            createMemberDetailsObject.SubscriptnType = "";
            createMemberDetailsObject.IsPAYG = "true";
        }
        setLTCDetails(createMemberDetailsObject);
        
        kony.print(":: setEnrollSubcriptionData :: createMemberDetailsObject ---->>>>>" + JSON.stringify(createMemberDetailsObject));
}


function setMemberRefferalOtherData()
{
	if(_.isEmpty(glbRefferalMemberObj) == false){
        	glbRefferalMemberObj.LocationID = parseInt(glbLocationID);
        	glbRefferalMemberObj.MeetingDate = glbMeetingDate;
        	glbRefferalMemberObj.MeetingOccurrenceID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum;
        	glbRefferalMemberObj.MemberID = glbMemberId;
        	glbRefferalMemberObj.Type="Sweepstake";
        }  
        
        kony.print(":: setMemberRefferalOtherData :: glbRefferalMemberObj ---->>>>>" + JSON.stringify(glbRefferalMemberObj));
}
function setEnrollWeightData(entryDate)
{
	var WeeklyPoint;
	var createWeightDetailsObject={};
	kony.print("inside weigh in False");
        createWeightDetailsObject.DailyPtTarget = parseInt(frmEnrollWeighMember.txtDPTValue.text);
        
        WeeklyPoint=frmEnrollWeighMember.lblWPAinfo.text;
        createWeightDetailsObject.WeeklyPointsAllowance = parseInt(checkforWPA(WeeklyPoint));
        createWeightDetailsObject.EmpID = glbEmployeeId; //"anita.sado";
        createWeightDetailsObject.IsAtndgMeeting = IsAttendMeeting;
        createWeightDetailsObject.LocationID = parseInt(glbLocationID);
        createWeightDetailsObject.ManualWeighIn = "true";
        createWeightDetailsObject.MeetingDate = glbMeetingDate; //entryDate;
        createWeightDetailsObject.SessionNumber = 1;
        createWeightDetailsObject.MtngOccrID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
        createWeightDetailsObject.NoWeighIn = "false";
        createWeightDetailsObject.WeighInDate = entryDate; //supportTime("Apr 02, 2014", "", "yyyy-mm-ddTHH:NN:SS");;
        createWeightDetailsObject.Weight = parseFloat(frmEnrollWeighMember.txtWeight.text); //parseFloat(weightInKG);
        
        createWeightDetailsObject.WeekNumber = 0; //parseInt(memberIDCount);//0;//parseInt(memberIDCount);//0;
        createWeightDetailsObject.MemberID = glbMemberId;
        createWeightDetailsObject.WeightLoss = parseFloat("0.0");

        //Added for MEGCN-14
        if (in_array(deviceLocale,Countries["CA"])) {
            createWeightDetailsObject.IsMemberAtRisk = IsAtRisk;
            kony.print("SJ===>>> Setting flag AtRisk : " + IsAtRisk);
            if (IsAtRisk) {
                IsAtRisk = false;
            }
        }

        kony.print("memberIDCount in Enroll: " + parseInt(memberIDCount));
        
        kony.print(":: setEnrollWeightData :: createWeightDetailsObject ---->>>>>" + JSON.stringify(createWeightDetailsObject));
        
        return createWeightDetailsObject;
}

function setLTCDetails(memberdetailsObject){
kony.print("*****glbLTCInfo.PlanType " + glbLTCInfo.PlanType);
kony.print("*****memberdetailsObject " + JSON.stringify(memberdetailsObject));


	checkValidString(glbLTCInfo.PlanType) ? (memberdetailsObject.PlanType = glbLTCInfo.PlanType) : (memberdetailsObject.PlanType = getPlanTypeDetails(glbFormName.lblSubType.text)); //** MEG 6434
    checkValidString(glbLTCInfo.CommitmentDuration) ? (memberdetailsObject.CommitmentDuration = glbLTCInfo.CommitmentDuration) : (memberdetailsObject.CommitmentDuration = getCommtDur(glbFormName.lblSubType.text));//** MEG 6434
}

//** MEG 6434
//** set Plan Type details
function getPlanTypeDetails(SubscriptnType)
{
	try{
		kony.print("**** SubscriptnType " + SubscriptnType);
		kony.print("**** PlanType " + PlanTypeEnum[SubscriptnType]);
		if(checkValidString(PlanTypeEnum[SubscriptnType]))
		{
			return PlanTypeEnum[SubscriptnType];
			
		}else
		{
			return "REG";
		}
	
	}catch(err)
	{
		GlobalException(err);
	}

}
//** End

//** MEG 6434
//** set Plan Type details
function getCommtDur(SubscriptnType)
{
	try{
		kony.print("**** SubscriptnType " + SubscriptnType);
		kony.print("**** CommitmentDuration " + CommitmentDurationEnum[SubscriptnType]);
		if(checkValidString(CommitmentDurationEnum[SubscriptnType]))
		{
			return CommitmentDurationEnum[SubscriptnType] ;
		}else
		{
			return "0";
		}
	
	}catch(err)
	{
		GlobalException(err);
	}

}
//** End