function setReEnrollMemberData(updatememberdetailsObject, entryDate) {
    updatememberdetailsObject.LastAttendanceDate = entryDate;
    updatememberdetailsObject.ProgramDuration = getProgramDuration(); //"0";
    updatememberdetailsObject.BillingAddr1 = termMemberInfo.BillingAddr1;
    updatememberdetailsObject.BillingAddr2 = termMemberInfo.BillingAddr2;
    updatememberdetailsObject.BillingCity = termMemberInfo.BillingCity;
    updatememberdetailsObject.BillingCountry = termMemberInfo.BillingCountry;
    updatememberdetailsObject.BillingState = returnStateIDByName(termMemberInfo.BillingState);
    updatememberdetailsObject.BillingZipCode = termMemberInfo.BillingZipCode;
    /*New Feilds*/
    checkValidString(termMemberInfo.EnterpriseID) ? (updatememberdetailsObject.EnterpriseID = termMemberInfo.EnterpriseID) : (updatememberdetailsObject.EnterpriseID = 0);
    checkValidString(termMemberInfo.EmailID) ? (updatememberdetailsObject.EmailID = termMemberInfo.EmailID) : (updatememberdetailsObject.EmailID = "");
    checkValidString(termMemberInfo.LinkType) ? (updatememberdetailsObject.LinkType = termMemberInfo.LinkType) : (updatememberdetailsObject.LinkType = "None");
    checkValidString(termMemberInfo.UserName) ? (updatememberdetailsObject.UserName = decodeSpecialCharacters(termMemberInfo.UserName)) : (updatememberdetailsObject.UserName = "");
    checkValidString(termMemberInfo.IsFreshStart) ? (updatememberdetailsObject.IsFreshStart = termMemberInfo.IsFreshStart) : (updatememberdetailsObject.IsFreshStart = 'false');
    checkValidString(termMemberInfo.RefreshDate) ? (updatememberdetailsObject.RefreshDate = termMemberInfo.RefreshDate) : (updatememberdetailsObject.RefreshDate = "0001-01-01T00:00:00");
    /* --- */
    //Maintainance Tracker
    checkValidString(termMemberInfo.TrackerID) ? (updatememberdetailsObject.TrackerID = termMemberInfo.TrackerID) : (updatememberdetailsObject.TrackerID = 0);
    checkValidString(termMemberInfo.MaintenanceMode) ? (updatememberdetailsObject.MaintenanceMode = termMemberInfo.MaintenanceMode) : (updatememberdetailsObject.MaintenanceMode = 'false');
    checkValidString(termMemberInfo.TrackerStartDate) ? (updatememberdetailsObject.TrackerStartDate = termMemberInfo.TrackerStartDate) : (updatememberdetailsObject.TrackerStartDate = "0001-01-01T00:00:00");
    checkValidString(termMemberInfo.FailedDate) ? (updatememberdetailsObject.FailedDate = termMemberInfo.FailedDate) : (updatememberdetailsObject.FailedDate = "0001-01-01T00:00:00");
    checkValidString(termMemberInfo.Eligible) ? (updatememberdetailsObject.Eligible = termMemberInfo.Eligible) : (updatememberdetailsObject.Eligible = 'false');
    checkValidString(termMemberInfo.EligibleDate) ? (updatememberdetailsObject.EligibleDate = termMemberInfo.EligibleDate) : (updatememberdetailsObject.EligibleDate = "0001-01-01T00:00:00");
    checkValidString(termMemberInfo.WeightCountMet) ? (updatememberdetailsObject.WeightCountMet = termMemberInfo.WeightCountMet) : (updatememberdetailsObject.WeightCountMet = 'false');
    checkValidString(termMemberInfo.PaidLastFee) ? (updatememberdetailsObject.PaidLastFee = termMemberInfo.PaidLastFee) : (updatememberdetailsObject.PaidLastFee = 'false');
    checkValidString(termMemberInfo.SessionNumber) ? (updatememberdetailsObject.SessionNumber = termMemberInfo.SessionNumber) : (updatememberdetailsObject.SessionNumber = 1);
    updatememberdetailsObject.ConsWeightGain = termMemberInfo.ConsWeightGain;
    updatememberdetailsObject.CrntLifeTimeSta = termMemberInfo.CrntLifeTimeSta;
    updatememberdetailsObject.DateOfBirth = termMemberInfo.DateOfBirth;
    updatememberdetailsObject.DontRecvCalls = (frmEnrollReturningMember.switchReceiveCalls.selectedIndex == 0) ? false : true; //Changing to solve bug in Phase 1 MEG -2354
    updatememberdetailsObject.DontContByEmail = (frmEnrollReturningMember.switchOffers.selectedIndex == 0) ? false : true; //Changing to solve bug in Phase 1 MEG -2354
    updatememberdetailsObject.DontCnctPhone = (termMemberInfo.DontCnctPhone == "true") ? true : false;
    updatememberdetailsObject.DontCnctSMS = (frmEnrollReturningMember.switchReceiveMsgs.selectedIndex == 0) ? false : true; //Changing to solve bug in Phase 1 MEG -2354
    updatememberdetailsObject.DontSendCard = (frmEnrollReturningMember.switchParticipateSurveys.selectedIndex == 0) ? false : true; //Changing to solve bug in Phase 1 MEG -2354
    updatememberdetailsObject.DontSendCoupon = (frmEnrollReturningMember.switchReceiveCoupons.selectedIndex == 0) ? false : true; //Changing to solve bug in Phase 1 MEG -2354
    updatememberdetailsObject.FeePaid = true; //Set true for MEG-4791
    updatememberdetailsObject.FirstName = termMemberInfo.FirstName;
    updatememberdetailsObject.Gender = termMemberInfo.Gender;
    updatememberdetailsObject.GoalWeight = termMemberInfo.GoalWeight;
    updatememberdetailsObject.Height = Math.round(termMemberInfo.Height);
    updatememberdetailsObject.LastAchvdMStone = termMemberInfo.LastAchvdMStone;
    updatememberdetailsObject.LastContactDate = termMemberInfo.LastContactDate;
    updatememberdetailsObject.LastName = termMemberInfo.LastName;
    updatememberdetailsObject.LastNteEntrDate = termMemberInfo.LastNteEntrDate;
    updatememberdetailsObject.MissWeekPasses = termMemberInfo.MissWeekPasses;
    updatememberdetailsObject.NoWeeksAttended = termMemberInfo.NoWeeksAttended;
    if (checkUndefined(frmEnrollReturningMember.lblPhone.text) != "") {
        updatememberdetailsObject.Phone1 = frmEnrollReturningMember.lblPhone.text;
        updatememberdetailsObject.PhoneType1 = phoneTypeValueEnum[1];
    } else {
        updatememberdetailsObject.Phone1 = "";
        updatememberdetailsObject.PhoneType1 = phoneTypeValueEnum[1];
    }
    updatememberdetailsObject.Phone2 = "";
    updatememberdetailsObject.PhoneType2 = phoneTypeValueEnum[1];
    updatememberdetailsObject.PrevLifeTimeSta = termMemberInfo.PrevLifeTimeSta;
    if (checkUndefined(termMemberInfo.RegDate) == "") {
        updatememberdetailsObject.RegDate = entryDate;
    } else {
        updatememberdetailsObject.RegDate = termMemberInfo.RegDate;
    }
    updatememberdetailsObject.StartWeight = parseFloat(frmEnrollWeighMember.txtWeight.text);
    updatememberdetailsObject.WeeksCompleted = termMemberInfo.WeeksCompleted;
    updatememberdetailsObject.WeightGain = termMemberInfo.WeightGain;
    updatememberdetailsObject.Email = frmEnrollReturningMember.lblEmailInfo.text;
    updatememberdetailsObject.ShippingAddr1 = frmEnrollReturningMember.lblAddr1Info.text;
    updatememberdetailsObject.ShippingAddr2 = frmEnrollReturningMember.lblAddr2Info.text;
    updatememberdetailsObject.ShippingCity = frmEnrollReturningMember.lblCityInfo.text;
    updatememberdetailsObject.ShippingState = returnStateIDByName(frmEnrollReturningMember.lblStateInfo.text);
    updatememberdetailsObject.ShippingZipCode = frmEnrollReturningMember.lblZipInfo.text;
    updatememberdetailsObject.Phone1 = (frmEnrollReturningMember.lblPhone.text != "") ? frmEnrollReturningMember.lblPhone.text : "";
    updatememberdetailsObject.EmpID = glbEmployeeId; //"anita.sado";
    updatememberdetailsObject.EnrollmentDate = termMemberInfo.EnrollmentDate;
    updatememberdetailsObject.LocationID = glbLocationID;
    updatememberdetailsObject.MtngOccrID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum;
    updatememberdetailsObject.MeetingDate = glbMeetingDate;
    updatememberdetailsObject.MemberType = MemberValueEnum[1]; // MemberTypeEnum[memberType];
    updatememberdetailsObject.RegNumber = frmEnrollReturningMember.txtRegistrationID.text;
    updatememberdetailsObject.StartDate = entryDate;
    updatememberdetailsObject.RegStatus = MemberRegEnum.Registered;
    updatememberdetailsObject.MemberStatus = MemberStatusEnum[1]; //MemberStatusEnum.Active;
    updatememberdetailsObject.MemberRole = MemberRoleEnum[2];
    // MEG- 2802 Fix where changing the transaction type to Enrollment for both Pre- Reg and web site member.
    if (IsWebsiteMember == FlowForScreens.Website) {
        updatememberdetailsObject.TransactionType = TransactionType.Enrollment;
    } else if (IsPreRegister == FlowForScreens.PreRegistered) {
        updatememberdetailsObject.TransactionType = TransactionType.PreRegistration;
    } else {
        updatememberdetailsObject.TransactionType = TransactionType.ReEnrollment;
    }
    updatememberdetailsObject.UserComments = termMemberInfo.UserComments;
    updatememberdetailsObject.UserStsEndPrd = termMemberInfo.UserStsEndPrd;
    updatememberdetailsObject.UserStsChngRsn = termMemberInfo.UserStsChngRsn;
    updatememberdetailsObject.UniqueID = termMemberInfo.UniqueID;
    updatememberdetailsObject.RedeemedDate = "0001-01-01T00:00:00";
    updatememberdetailsObject.IsDateRedeemed = 'true';
    updatememberdetailsObject.ReedeemedPasses = 0;
    updatememberdetailsObject.IsLink = 'true';
    kony.print(":: updateProcessMemberData :: updatememberdetailsObject ---->>>>>" + JSON.stringify(updatememberdetailsObject));
}

function setReEnrollSubcriptionData(updatememberdetailsObject, updatedEmailFromMPActivated, entryDate, flow) {
    if (glbFormName.lblSubType.text != kony.i18n.getLocalizedString("strPayg") && glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID) {
        if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPrepaid")) {
            updatememberdetailsObject.IsPAYG = "true";
            updatememberdetailsObject.SubscriptnType = "";
        } else {
            var obj = (isFromFMP) ? getSubscriptionData(getFmpSubid()) : getSubscriptionData(glbFormName.txtSubscriptionID.text);
            kony.print("getSubscriptionData:===== " + JSON.stringify(obj));
            updatememberdetailsObject.SubscriptnID = 0;
            updatememberdetailsObject.LastUsedDate = entryDate;
            if (saleTransactionObj != undefined && saleTransactionObj.length > 0) {
                updatememberdetailsObject.ProductID = saleTransactionObj[0]["productDetail"]["ProductID"];
                kony.print("ProductID in Subscription enroll==>>> " + saleTransactionObj[0]["productDetail"]["ProductID"]);
            } else {
                updatememberdetailsObject.ProductID = 1;
            }
            updatememberdetailsObject.SubscriptnType = MemberSubscriptionTypeEnum[glbFormName.lblSubType.text];
            updatememberdetailsObject.IsPAYG = "false";
            if (preActivationObj.hasOwnProperty('voucherNumber')) {
                setPreActivationData(updatememberdetailsObject, updatedEmailFromMPActivated, flow);
                kony.print("::createMemberDetailsObject::" + JSON.stringify(updatememberdetailsObject));
            } else {
                updatememberdetailsObject.Email = glbFormName.txtEmailID.text;
                updatememberdetailsObject.CouponCode = (isFromFMP) ? "" : obj.CouponCode.toUpperCase(); //glbFormName.txtSubscriptionID.text;
                updatememberdetailsObject.ExpirationDate = obj.ExpirationDate; //entryDate;
                //MEG-4510 - reenroll
                setLinkDetails(updatememberdetailsObject);
            }
        }
    } else {
        //MEG-2864 - Update local fields for Pay as you go
        updatememberdetailsObject.CouponCode = "";
        updatememberdetailsObject.ExpirationDate = entryDate; //;
        updatememberdetailsObject.SubscriptnID = 0;
        updatememberdetailsObject.LastUsedDate = entryDate;
        updatememberdetailsObject.ProductID = 1;
        updatememberdetailsObject.SubscriptnType = "";
        updatememberdetailsObject.IsPAYG = "true";
        (checkValidString(gblLinkInfoForOnlineMember.IsLink) && updatememberdetailsObject.EnterpriseID != 0 && updatememberdetailsObject.EnterpriseID != "0") ? (updatememberdetailsObject.IsLink = gblLinkInfoForOnlineMember.IsLink) : (updatememberdetailsObject.IsLink = 'true');
    }
    setLTCDetails(updatememberdetailsObject);
    kony.print(":: setReEnrollSubcriptionData :: updatememberdetailsObject ---->>>>>" + JSON.stringify(updatememberdetailsObject));
}

function setPreRegMemberData(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject) {
    updatememberdetailsObject.MemberID = deviceLevelPreRegNo;
    updatememberdetailsObject.PreRegNumber = deviceLevelPreRegNo; //MEG-3023
    createWeightDetailsObject.MemberID = deviceLevelPreRegNo;
    createNoteDetailsObject.MemberID = deviceLevelPreRegNo;
    createBMINoteDetailsObject.MemberID = deviceLevelPreRegNo;
    if (preActivationObj.hasOwnProperty('voucherNumber')) {
        preActivationObj.MemberID = deviceLevelPreRegNo;
    }
    kony.print(":: setPreRegMemberData :: updatememberdetailsObject ---->>>>>" + JSON.stringify(updatememberdetailsObject));
    kony.print(":: setPreRegMemberData :: createWeightDetailsObject ---->>>>>" + JSON.stringify(createWeightDetailsObject));
    kony.print(":: setPreRegMemberData :: createNoteDetailsObject ---->>>>>" + JSON.stringify(createNoteDetailsObject));
    kony.print(":: setPreRegMemberData :: createBMINoteDetailsObject ---->>>>>" + JSON.stringify(createBMINoteDetailsObject));
}

function setWebsiteMembertData(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, updatedEmailFromMPActivated) {
    kony.print("Link Type for IsWebSite Members");
    //added for MEG-3428
    //updatememberdetailsObject.IsLink= 'false';
    // Maulik - MEG-3686, 3685. Code change.
    if (isOnlineMPMember == true) {
        updatememberdetailsObject.IsLink = 'false';
        updatememberdetailsObject.LinkType = "Link";
        isOnlineMPMember = false;
    }
    //End for MEG-3428
    //var whereClause = "where MemberID = '"+ glbMemberId+"'" ;
    /* Maulik - 13th OCt - Changing the where clause to use PreRegNumber for the deletion which we are calling before creating the member in DB*/
    updatememberdetailsObject.MemberID = glbMemberId;
    updatememberdetailsObject.PreRegNumber = deviceLevelPreRegNo;
    if (updatedEmailFromMPActivated != "" && updatedEmailFromMPActivated != undefined) updatememberdetailsObject.Email = updatedEmailFromMPActivated;
    createWeightDetailsObject.MemberID = glbMemberId;
    createNoteDetailsObject.MemberID = glbMemberId;
    createBMINoteDetailsObject.MemberID = glbMemberId;
    if (preActivationObj.hasOwnProperty('voucherNumber')) {
        preActivationObj.MemberID = glbMemberId;
    }
    kony.print(":: setWebsiteMembertData :: updatememberdetailsObject ---->>>>>" + JSON.stringify(updatememberdetailsObject));
    kony.print(":: setWebsiteMembertData :: createWeightDetailsObject ---->>>>>" + JSON.stringify(createWeightDetailsObject));
    kony.print(":: setWebsiteMembertData :: createNoteDetailsObject ---->>>>>" + JSON.stringify(createNoteDetailsObject));
    kony.print(":: setWebsiteMembertData :: createBMINoteDetailsObject ---->>>>>" + JSON.stringify(createBMINoteDetailsObject));
}