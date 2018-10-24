function mapKeys(object, keyMapping) {
    var mapped = {};
    for (var key in keyMapping) {
        mapped[object[key]] = keyMapping[key];
    }
    return mapped;
}


function ClearAdvancedSearchFields() {
    hboxName.tbxFirstNameHeader.text = "";
    hboxName.tbxLastNameHeader.text = "";
    hboxPhoneNumberSection.tbxPhoneNumberHeader.text = "";
    hboxUserIDSection.tbxUserIDHeader.text = "";
    hboxMemberIDSection.tbxMemberIDHeader.text = "";
    eventOnSelectionCmbSearchCriteria();
}

function ClearWeightInfo() {
    popupAddWeigh.txtAddWeight.text = "";
    popupAddWeigh.lblDOBInfo.text = "";
}

function ClearLinkObject()
{
	clearLinkInfoForOnlineMember();
	kony.print("link222");
	linkObj = {};
}

function clearRefferalobj(){
	onChangeSwitchReffered();
	frmEnrollNewMember.switchReffered.selectedIndex=1;
	kony.print("check Setting Refferal"+checkAppSettingEnable(Settings["Referral"]));
	if(checkAppSettingEnable(Settings["Referral"])){
		frmEnrollNewMember.hboxReffered.isVisible = true;
	}else{
		frmEnrollNewMember.hboxReffered.isVisible = false;
	}
//	lastWeighIn="";  // variable stores last member weight in 
	preActivationObj = {};  // clearing the preActivationObj
	getCurrentSelectedMemberData = null;
}

function ClearVariables() {
    glbStartDateMemberProfile = "";
    glbNumberOfBanks = "";
    IsReEnrollScreen = "";
    IsAddIndividual = "";
    IsEnrollMember = "";
    IsPreRegister = "";
    IsFromPM = "";
    IsWebsiteMember = "";
    IsViewMember = "";
    IsBatchAddMember = "";
    IsDirectSale = "";
    IsSimpleReturn = "";
    isServiceProvider = false;
    IsProductFlowFromSearch = false;
    IsProductFlowFromCheckedIn = false;
    isLifetime = false;
    isEligibleForLifetime = false;
    isEligibleForLTInChangeMemberType = false;
    //isLifetimeInChangeMemberType = false;
    deviceLevelTransactId = "";
    glbRegNo = 0;
    glbLinkType = "None";
    currentMemberLinkValues.EmailID = "";
    currentMemberLinkValues.EnterpriseID = 0;
    currentMemberLinkValues.LinkType = "None";
    currentMemberLinkValues.UserName = "";
    currentMemberLinkValues.IsLink = 'true';
    linkChangeDetected = false;
    glbSelectSubType = "3-1-1";
    glbSelectMemStatus = "1";
    glbSelectMemType = "1";
    glbOpenedSubscriptionPopup = false;
    promotionProductIDs = [];
    hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
    //frmHomeScreen.segCheckedInMembers.removeAll();
    glbRedeemedPasses = "";
    glbRedeemedDate = "";
    glbIsDateRedeemed = "";
    glbMissWeekPasses = "";
    IsTallyCashout = "";
  	bankDepositSlip = "";
    glbMemberStatus = "";
    glbLifetimeEligibility = false;
    //Ami isGoalWeightReset = 0;
    isTermedMemberForActive = false;
    //Ami add-MEG-3650
    gblBarcodeScannedData = "";
    isSubIdSearched = false;

    roundWeightPM = "";
    //Added for 4513
    //isDisplayPersonalGoalAlert = false;
    //	isPersonalGoalWeight = false;
    IsRedeemOptionOfStarterFee = false;
    glbProgDurationForProcess = 0;
    creditCrardSalePaymentDataObj=null;
    CreditCardInfo={};
	glbIsDisplayCCAmtRefundAlert=false;
	swipeSuccuss = false;
	//getCurrentSelectedMemberData=null;
	kony.print("ClearVariable() called");
	glbMemberActivationStatusInfo = {};
	frmPayment.hboxSendReceipt.setVisibility(false);
	frmPayment.paymentScroll.containerHeight=69;
	popupAddEmail.txtEmailAddress.text = "";
	isNonTangibleDataPresent = false;
	glbSendReceiptDisplayCounter = 0;
	
	boMeetings.getMeetingTypeIdForOpenHours(glbMeetingType);
}

function eventonClickCancelEnrollHeader() {
    IsNWI = false;
    if (isPMFromHomeScreen == true) {
        isPMFromHomeScreen = false;
    }
    evenOnPostShowHomeScreen();
}

function ClearEnrollWeighInFields() {
    frmEnrollWeighMember.txtWeight.text = "";
    frmEnrollWeighMember.txtNotes.text = "";
    frmEnrollWeighMember.lblbmi.text = "";
    frmEnrollWeighMember.txtDPTValue.text = "";
    frmEnrollWeighMember.lblWPAinfo.text= "";
    frmEnrollWeighMember.lblgoalfive.text = "";
    frmEnrollWeighMember.lblgoalten.text = "";
    frmEnrollWeighMember.lblhealthyrange.text = "";
    frmEnrollWeighMember.lblLbsToNextMilestoneInfo.text = "";
    frmEnrollWeighMember.lblPersonalGoalWeight.text = "";
    popupChangePersonalGoal.txtPersonalGoalWeight.text = "";
    frmEnrollWeighMember.lblSubType.text = kony.i18n.getLocalizedString("strPayg");
    frmEnrollWeighMember.lblTodayMilestoneInfo.text="";
    frmEnrollWeighMember.hboxTodayMilestones.setVisibility(false);
    frmEnrollWeighMember.lblLbsToNextMilestone.text=kony.i18n.getLocalizedString("strLBSToNextMilestone");
    frmEnrollWeighMember.imgCheckbox2.src = "atrisk_disable.png";
    frmEnrollWeighMember.imgCheckBox.src = "attending_disable.png";
    IsAtRisk = false;
    IsAttendMeeting = false;
    glbOpenedSubscriptionPopup = false;
    
}

function ClearInputFields() {
    if (IsEnrollMember == FlowForScreens.Enroll) {
        frmEnrollNewMember.txtFirstName.text = "";
        frmEnrollNewMember.txtLastName.text = "";
        frmEnrollNewMember.lblHeightInfo.text = "";
        frmEnrollNewMember.lblDOBInfo.text = "";
        frmEnrollNewMember.txtMemberIDInfo.text = "";
        frmEnrollNewMember.txtEmailID.text = "";
        frmEnrollNewMember.switchOffers.selectedIndex = 1;
        onChangeSwitchReffered();
        frmEnrollNewMember.emailAsterisk.isVisible = false;
        validateEmail = false;
        frmEnrollNewMember.cmbGender.selectedKey = "Female";
        frmEnrollNewMember.imgWeight.src = "icn_weigh_normal.png";
        frmEnrollNewMember.imgPayment.src = "icn_payment_normal.png";
        frmEnrollNewMember.vboxPayment.onClick = "";
        frmEnrollNewMember.txtMemberIDInfo.text ="";
      	frmEnrollNewMember.switchWeightLossFocus.selectedIndex = 0;
    }
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
        frmAddIndividulaMember.txtFirstName.text = "";
        frmAddIndividulaMember.txtLastName.text = "";
        frmAddIndividulaMember.lblHeightInfo.text = "";
        frmAddIndividulaMember.lblDOBInfo.text = "";
        frmAddIndividulaMember.txtMemberID.text = "";
        frmAddIndividulaMember.lblStartDateInfo.text = "";
        frmAddIndividulaMember.lblMemberShipInfo.text = "";
        frmAddIndividulaMember.txtRemainingWeeks.text = "";
        frmAddIndividulaMember.txtWeeksCompleted.text = "";
        frmAddIndividulaMember.txtEmailID.text = "";
        frmAddIndividulaMember.txtGoalWeight.text = "";
        frmAddIndividulaMember.imgGoalWeight.isVisible = false;
        frmAddIndividulaMember.txtStartWeight.text = "";
        frmAddIndividulaMember.switchOffers.selectedIndex = 1;
        frmAddIndividulaMember.emailAsterisk.isVisible = false;
        validateEmail = false;
        frmEnrollWeighMember.imgNoWeighIn.src = "noweighin_disable.png";
        frmAddIndividulaMember.cmbGender.selectedKey = "Female";
        isNWI = false;
        frmAddIndividulaMember.imgWeight.src = "icn_weigh_normal.png";
        frmAddIndividulaMember.imgPayment.src = "icn_payment_normal.png";
        frmAddIndividulaMember.vboxPayment.onClick = "";
        frmAddIndividulaMember.txtMemberID.text ="";
    }
    if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        frmEnrollReturningMember.imgWeight.src = "icn_weigh_normal.png";
        frmEnrollReturningMember.imgPayment.src = "icn_payment_normal.png";
        frmEnrollReturningMember.vboxPayment.onClick = "";
        
    }
    if(IsReEnrollScreen == FlowForScreens.ReEnroll || IsPreRegister == FlowForScreens.PreRegistered || IsWebsiteMember == FlowForScreens.Website){
    	frmEnrollReturningMember.txtRegistrationID.text ="";
    }
    glbFormName.imgsub.isVisible = true;
    frmCheckout.imgEnrollNormal.isVisible = true;
    frmEnrollWeighMember.txtWeight.text = "";
    frmEnrollWeighMember.txtNotes.text = "";
    frmEnrollWeighMember.lblbmi.text = "";
    frmEnrollWeighMember.txtDPTValue.text = "";
    frmEnrollWeighMember.lblWPAinfo.text= "";
    frmEnrollWeighMember.lblgoalfive.text = "";
    frmEnrollWeighMember.lblgoalten.text = "";
    frmEnrollWeighMember.lblhealthyrange.text = "";
    frmEnrollWeighMember.lblLbsToNextMilestoneInfo.text = "";
   // frmEnrollWeighMember.imgPayment.src = "icn_payment_normal.png";
	frmEnrollWeighMember.lblPersonalGoalWeight.text="";
    frmEnrollWeighMember.lblLbsToNextMilestone.text=kony.i18n.getLocalizedString("strLBSToNextMilestone");
	

    glbFormName.lblSubType.text = "";
    glbFormName.txtSubscriptionID.text = "";
    glbFormName.txtEmailID.text = "";
    glbFormName.imgMonthlyPassImage.src = "";
    glbFormName.imgLifetime.src = "";
    frmAddAndWeighMemberTransaction.imgLifetime.src = "";

    glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
    popupBMINote.textareaBMINote.text = "";
    frmCheckout.lblExpDate.text = "";
    frmEnrollNewMemberPayment.lblExpDate.text = "";
    frmAddAndWeighMemberTransaction.lblExpDate.text = "";
    IsStartDate = false;
}

function ClearBatchMemberVariables() {
    frmBatchAddMember.txtEmail.text = "";
    frmBatchAddMember.lblSubTypeInfo.text = "";
    frmBatchAddMember.txtSubID.text = "";
    frmBatchAddMember.lblExpDateInfo.text = "";
    frmBatchAddMember.txtMemberId.text = "";
    frmBatchAddMember.lblMemberType.text = "";
    frmBatchAddMember.lblMemberStatus.text = "";
    frmBatchAddMember.txtFirstName.text = "";
    frmBatchAddMember.txtLastName.text = "";
    frmBatchAddMember.lblHeightInfo.text = "";
    frmBatchAddMember.txtNickName.text = "";
    frmBatchAddMember.lblDOBInfo.text = "";
    frmBatchAddMember.txtAddr1.text = "";
    frmBatchAddMember.txtCity.text = "";
    frmBatchAddMember.txtAddr2.text = "";
    frmBatchAddMember.txtZip.text = "";
    frmBatchAddMember.lblStateInfo.text = "";
    frmBatchAddMember.lblPhoneTypeData.text = "";
    frmBatchAddMember.txtPhone.text = "";
    frmBatchAddMember.txtGoalWeight.text = "";
    frmBatchAddMember.txtRemainingMissedWeek.text = "";
    frmBatchAddMember.txtWeeksCompleted.text = "";
    frmBatchAddMember.txtBillingCity.text = "";
    frmBatchAddMember.lblBillingStateInfo.text = "";
    frmBatchAddMember.txtBillingAdd1.text = "";
    frmBatchAddMember.txtBillingZip.text = "";
    frmBatchAddMember.txtBillingAddr2.text = "";
    frmBatchAddMember.switchMailingAdd.selectedIndex = 1;
    frmBatchAddMember.switchReceiveCoupons.selectedIndex = 1;
    frmBatchAddMember.switchReceiveCalls.selectedIndex = 1;
    frmBatchAddMember.switchReceiveMsgs.selectedIndex = 1;
    frmBatchAddMember.switchOffers.selectedIndex = 1;
    frmBatchAddMember.switchReceiveCoupons.selectedIndex = 1;
    frmBatchAddMember.txtSubID.setEnabled(true);
    frmBatchAddMember.segAddBatchMembeProfileDetails.removeAll();
    frmBatchAddMember.txtStartWeight.text = "";
    frmBatchAddMember.lblStartDateInfo.text = "";
    frmBatchAddMember.cmbGender.selectedKey = "Female";
    frmBatchAddMember.imgSubID.isVisible = true;
    frmBatchAddMember.imgExpDate.isVisible = true;
    frmBatchAddMember.vboxExpirationDate.setEnabled(true);
    frmBatchAddMember.imgGoalWeight.isVisible = false;
    IsStartDate = false;
    glbMemberLastAttDate = "";
  	validateEmailBA = false;
}

function clearEditMemberFields(inputVal) {
    frmEditMemberProfile.lblSubTypeInfo.text = "";
    frmEditMemberProfile.txtSubID.text = "";
    frmEditMemberProfile.lblExpDateInfo.text = "";
    frmEditMemberProfile.txtMemberId.text = "";
    frmEditMemberProfile.txtFirstName.text = "";
    frmEditMemberProfile.txtLastName.text = "";
    frmEditMemberProfile.lblHeightInfo.text = "";
    frmEditMemberProfile.txtNickName.text = "";
    frmEditMemberProfile.lblDOBInfo.text = "";
    frmEditMemberProfile.txtAddr1.text = "";
    frmEditMemberProfile.txtAddr2.text = "";
    frmEditMemberProfile.txtCity.text = "";
    frmEditMemberProfile.lblStateInfo.text = "";
    frmEditMemberProfile.txtZip.text = "";
    frmEditMemberProfile.lblPhoneTypeData.text = "";
    frmEditMemberProfile.txtEmail.text = "";
    frmEditMemberProfile.txtPhone.text = "";
    frmEditMemberProfile.txtGoalWeight.text = "";
    frmEditMemberProfile.txtRemainingMissedWeek.text = "";
    frmEditMemberProfile.switchReceiveCoupons.selectedIndex = 1;
    frmEditMemberProfile.switchParticipateSurveys.selectedIndex = 1;
    frmEditMemberProfile.switchReceiveCalls.selectedIndex = 1;
    frmEditMemberProfile.switchReceiveMsgs.selectedIndex = 1;
    frmEditMemberProfile.switchOffers.selectedIndex = 1;
    if(inputVal)
    	frmEditMemberProfile.segEditMemberProfileDetails.removeAll();
    frmEditMemberProfile.cmbGender.selectedKey = "Female";
}

function makeFirstLetterUp(inStr) {
    if (checkUndefined(inStr) != "") {
        inStr = inStr.toLowerCase();
        inStr = inStr.replace(/\b./g, function(m) {
            return m.toUpperCase();
        });
    } else {
        return "";
    }
    return inStr;
}

function generateGUID() {
    return 'xxxxxxxx-xxxx-3xxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function generateSaleItemID() {
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function generateSaleTranscationID() {
   var v=  'xxxxxxxx-xx'.replace(/[xy]/g, function(c) {

        var r = Math.random() * 16 | 0,

            v = c == 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);

    });
  
	var b='3xxxxx'.replace(/[xy]/g, function(c) {

        var r = Math.random() * 8 | 0,

            b = c == 'x' ? r : (r & 0x3 | 0x8);

		return b.toString(8);

 	});
          return v+"-"+b;
}

function timeConvert24To12(timeStr) {
    var n1 = timeStr.split(':');
    var time = n1[0] + n1[1];
    var hours = time[0] + time[1];
    var min = time[2] + time[3];
    if (hours < 12) {
        return hours + ':' + min + ' AM';
    } else {
        hours = hours - 12;
        if (hours == 0)
            hours = 12;
        else
            hours = (hours.length < 10) ? '0' + hours : hours;

        return hours + ':' + min + ' PM';
    }
}

function clearViewProfileFields() {
    frmViewMemberProfile.lblFirstName.text = "";
    frmViewMemberProfile.lblLastName.text = "";
    frmViewMemberProfile.lblRegNumber.text = "";
    frmViewMemberProfile.lblRegDate.text = "";
    frmViewMemberProfile.lblDOBData.text = "";
    frmViewMemberProfile.lblPhoneData.text = "";
    frmViewMemberProfile.lblGenderData.text = "";
    frmViewMemberProfile.lblEmailData.text = "";
    frmViewMemberProfile.lblMailingAddData.text = "";
    frmViewMemberProfile.lblBillingAddData.text = "";
    frmViewMemberProfile.lblStartWeightData.text = "";
    frmViewMemberProfile.lblMeetingAttendedData.text = "";
    frmViewMemberProfile.lblRMissedWeeksData.text = "";
    frmViewMemberProfile.lblGoalWeightData.text = "";
    frmViewMemberProfile.lblCurrentWeightData.text = "";
    frmViewMemberProfile.lblTotalChangeData.text = ""
    frmViewMemberProfile.lblCurrentDPTData.text = "";
    frmViewMemberProfile.lblWPAData.text="";
    frmViewMemberProfile.lbl5GoalData.text = "";
    frmViewMemberProfile.lblHeightData.text = "";
    frmViewMemberProfile.lbl10GoalData.text = "";
    frmViewMemberProfile.lblHealthyRangeData.text = "";
    frmViewMemberProfile.vboxAddNote.setVisibility(true);
    frmViewMemberProfile.vboxEditNote.setVisibility(false);
    //frmViewMemberProfile.segMemberProfileDetails.removeAll();
}

function clearPreActivationpopupText(){
	popupPreActivation.txtVoucherNumber.text = "";
	popupPreActivation.txtEmail.text = "";
	popupPreActivation.txtAddress1.text = "";
	popupPreActivation.txtAddress2.text = "";
	popupPreActivation.txtCity.text = "";
	popupPreActivation.txtZip.text = "";
	popupPreActivation.lblState.text = "";
	popupPreActivation.lblheight.text = "";
}

function sortMilestones(eligibleMilestoneArrayKV) {
    eligibleMilestoneArrayKV.sort(function(milestone1, milestone2) {
        return milestone1.lbsToDeductFromStWt - milestone2.lbsToDeductFromStWt;
    });
}

//Function for replacing '&amp;' with '&' in string value.
function encodeSpecialCharacters(inputVal){
	/*var replaceVal = inputVal;
	kony.print("Before Replace --> "+inputVal);
	if (inputVal.indexOf("&amp;") > -1) {
    	replaceVal = inputVal.replace(/&amp;/g, '&');
    }
    if (inputVal.indexOf("&lt;") > -1){
    	replaceVal = inputVal.replace(/&lt;/g, '<');
    }
    kony.print("After Replace --> "+replaceVal);*/
	return inputVal ;
}

function getRandomNumber(numberLength)
{
 var randomNumber = Math.floor((Math.random() * 900000) + 100000);
 randomNumber = "000000" + randomNumber;
 randomNumber = randomNumber.substr(randomNumber.length - numberLength);
 return randomNumber;
}

//This function is generating the random alphanumeric string according to the given length 
function generateRandomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function removeCommaAtEndFromString(strMessage)
{
	if(strMessage.slice(-1) ==  ',')
       		strMessage= strMessage.substr(0,strMessage.length-1);
    return strMessage;
}

function clearHomeScreenPaymentData(){
	hboxMeetingSummery.lblAttendance.text = "0";
	hboxMeetingSummery.lblMemberFees.text = displayPriceByLocale("0.00");
	hboxMeetingSummery.lblProductSale.text = displayPriceByLocale("0.00");
	hboxMeetingSummery.lblTotalWeightLossInfo.text = "0.0 "+getLocalizedString("strLbs");
}
