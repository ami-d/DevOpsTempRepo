var IsPreRegister = "";
var IsWebsiteMember = "";

function alertForTermed_old() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strAlertTermed"), //strAlertTermed "Would you like to Re-Enroll this termed member?"
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
        alertHandler: onClickTermedAlert
    };
    var psConfig = {};
    var termedAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onClickEventForReenrollTermedMember() {
    glbFormName = frmEnrollWeighMember; //Added By PK MEG-4797
    ClearVariables();
    hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strReEnrollMember");
    IsReEnrollScreen = FlowForScreens.ReEnroll;
    kony.print("IsReEnrollScreen====>>>" + IsReEnrollScreen);
    kony.print("FlowForScreens.ReEnroll====>>>" + FlowForScreens.ReEnroll);
    kony.print("IsViewMember====>>>" + IsViewMember);
    kony.print("FlowForScreens.ViewMember====>>>" + FlowForScreens.ViewMember);
    var memType = termMemberInfo.MemberType;
    addReEnrollFormData();
    ClearInputFields();
    frmEnrollReturningMember.show();
    glbMemberStatus = MemberStatusEnum[3];
}
var isTermedMemberForActive = false;

function onClickEventForActiveTermedMember() {
    glbFormName = frmProcessMember; //Added By PK MEG-4797
    if (IsViewMember == FlowForScreens.ViewMember) {
        frmViewMemberProfile.segMemberProfileDetails.removeAll();
        frmEditMemberProfile.segEditMemberProfileDetails.removeAll();
        frmViewMemberProfile.show();
    }
    isTermedMemberForActive = true;
    kony.print("::DJP::Data = " + JSON.stringify(frmMemberProfileSearch.segMemberProfileSearch.data));
    kony.print("::DJP::current form  = " + kony.application.getCurrentForm().id + " tempIndex=" + tempIndex);
    ProcessMemberAfterSearch();
}

function alertForTermed() {
    popupReEntrollOrActiveTermedMember.show();
}

function onClickTermedAlert(response) {
    if (response == true) {
        ClearVariables();
        hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strReEnrollMember");
        IsReEnrollScreen = FlowForScreens.ReEnroll;
        kony.print("IsReEnrollScreen====>>>" + IsReEnrollScreen);
        kony.print("FlowForScreens.ReEnroll====>>>" + FlowForScreens.ReEnroll);
        kony.print("IsViewMember====>>>" + IsViewMember);
        kony.print("FlowForScreens.ViewMember====>>>" + FlowForScreens.ViewMember);
        //if(IsViewMember != FlowForScreens.ViewMember)
        //		{
        var memType = termMemberInfo.MemberType;
        addReEnrollFormData();
        //}
        //		else
        //		{
        //			
        //		}
        ClearInputFields();
        frmEnrollReturningMember.show();
        glbMemberStatus = MemberStatusEnum[3];
    } else {
        if (IsViewMember == FlowForScreens.ViewMember) {
            frmViewMemberProfile.segMemberProfileDetails.removeAll();
            frmEditMemberProfile.segEditMemberProfileDetails.removeAll();
            frmViewMemberProfile.show();
        }
        // TO DO: Have to write logic in case no is pressed
    }
}

function onPopupOpenStateInReEnroll() {
    displayStatePopup(frmEnrollReturningMember.vboxStateSection, "left", false)
}

function addReEnrollFormData() {
    kony.print("termMemberInfo is ====== " + JSON.stringify(termMemberInfo));
    kony.print("termMemberInfo.FirstName + termMemberInfo.LastName " + termMemberInfo.FirstName + "    " + termMemberInfo.LastName);
    frmEnrollReturningMember.lblMemberName.text = (termMemberInfo.FirstName).trim() + " " + (termMemberInfo.LastName).trim();
    frmEnrollReturningMember.txtRegistrationID.text = termMemberInfo.RegNumber;
    var dispMemberType = termMemberInfo.MemberType;
    //Ami ad
    if (termMemberInfo.MemberType.toUpperCase() == 'VALUE') {
        dispMemberType = 'Paid';
    }
    frmEnrollReturningMember.lblMembershipTypeValue.text = dispMemberType;
    frmEnrollReturningMember.lblAddr1Info.text = termMemberInfo.BillingAddr1;
    frmEnrollReturningMember.lblAddr2Info.text = termMemberInfo.BillingAddr2;
    frmEnrollReturningMember.lblCityInfo.text = termMemberInfo.BillingCity;
    frmEnrollReturningMember.lblStateInfo.text = termMemberInfo.BillingState;
    frmEnrollReturningMember.lblPhone.text = termMemberInfo.Phone;
    frmEnrollReturningMember.lblZipInfo.text = termMemberInfo.BillingZipCode;
    frmEnrollReturningMember.lblEmailInfo.text = termMemberInfo.Email;
    frmEnrollReturningMember.switchReceiveCoupons.setEnabled(true);
    frmEnrollReturningMember.switchParticipateSurveys.setEnabled(true);
    frmEnrollReturningMember.switchReceiveMsgs.setEnabled(true);
    frmEnrollReturningMember.switchReceiveCalls.setEnabled(true);
    frmEnrollReturningMember.switchOffers.setEnabled(true);
    var HeightInFtInch = com.es.weighincalculations.CalculateInchesToFeetInches(termMemberInfo.Height);
    kony.print("AD :: HeightInFtInch==" + HeightInFtInch);
    frmEnrollReturningMember.lblHeightInfo.text = HeightInFtInch;
    frmEnrollReturningMember.lblDOBInfo.text = formattedDate(termMemberInfo.DateOfBirth) //supportTime(termMemberInfo.DateOfBirth, "", formatString)
    frmEnrollReturningMember.cmbGender.selectedKey = (termMemberInfo.Gender == "Female") ? "Female" : "Male";
    frmEnrollReturningMember.switchReceiveCalls.selectedIndex = (termMemberInfo.DontRecvCalls == "Yes") ? 0 : 1;
    frmEnrollReturningMember.switchReceiveMsgs.selectedIndex = (termMemberInfo.DontCnctSMS == "Yes") ? 0 : 1;
    frmEnrollReturningMember.switchOffers.selectedIndex = (termMemberInfo.DontContByEmail == "Yes") ? 0 : 1;
    frmEnrollReturningMember.switchParticipateSurveys.selectedIndex = (termMemberInfo.DontSendCard == "Yes") ? 0 : 1;
    frmEnrollReturningMember.switchReceiveCoupons.selectedIndex = (termMemberInfo.DontSendCoupon == "Yes") ? 0 : 1;
}
// MEG-3: Preparing flow for Pre Registred member
function preRegisterdMember() {
    addReEnrollFormData();
    hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strPreRegMember");
    ClearVariables();
    IsPreRegister = FlowForScreens.PreRegistered;
    IsReEnrollScreen = FlowForScreens.ReEnroll;
    frmEnrollReturningMember.txtRegistrationID.text = "";
    if (termMemberInfo.MemberType == MemberTypeEnum[7]) frmEnrollReturningMember.hboxMemberSection1.setEnabled(false);
    else frmEnrollReturningMember.hboxMemberSection1.setEnabled(true);
    //popupAdvancedSearch.dismiss();
    popupAdvancedSearch.destroy(); // Added by Praveen Kalal MEG-2712
    ClearInputFields();
    glbFormName = frmEnrollWeighMember; // added by Ankit
    frmEnrollReturningMember.show();
}
// MEG-4: Preparing flow for Website/Online member
function websiteMember() {
    ClearVariables();
    IsWebsiteMember = FlowForScreens.Website;
    IsReEnrollScreen = FlowForScreens.ReEnroll;
    addReEnrollFormData();
    hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strWebsideMember");
    frmEnrollReturningMember.txtRegistrationID.text = "";
    if (termMemberInfo.MemberType == MemberTypeEnum[7]) frmEnrollReturningMember.hboxMemberSection1.setEnabled(false);
    else frmEnrollReturningMember.hboxMemberSection1.setEnabled(true);
    //popupAdvancedSearch.dismiss();
    popupAdvancedSearch.destroy(); // Added by Praveen Kalal MEG-2712
    ClearInputFields();
    glbFormName = frmEnrollWeighMember;
    frmEnrollReturningMember.show();
}

function ProcessMember() {
    ClearVariables();
    glbMemberId = termMemberInfo.MemberID;
    kony.print("MemberID------>>>" + glbMemberId);
    gblDOBPM = termMemberInfo.DateOfBirth;
    kony.print("gblDOBPM------>>>" + gblDOBPM);
    gblHeightPM = termMemberInfo.Height;
    kony.print("gblHeightPM------>>>" + gblHeightPM);
    gblGenderPM = termMemberInfo.Gender;
    kony.print("gblGenderPM------>>>" + gblGenderPM);
    gblEmail = termMemberInfo.Email;
    kony.print("gblEmail------>>>" + gblEmail);
    gblStartDatePM = termMemberInfo.StartDate;
    kony.print("gblStartDatePM------>>>" + gblStartDatePM);
    kony.print("termMemberInfo.FirstName------>>>" + termMemberInfo.FirstName);
    kony.print("termMemberInfo.LastName------>>>" + termMemberInfo.LastName);
    frmProcessMember.lblProcessMembersubHeader1.text = (termMemberInfo.FirstName).trim() + "  " + (termMemberInfo.LastName).trim();
    if (termMemberInfo.StartWeight != undefined && termMemberInfo.StartWeight != null && termMemberInfo.StartWeight != "") {
        gblStartWeightPM = termMemberInfo.StartWeight;
        kony.print("termMemberInfo.StartWeight------>>>" + termMemberInfo.StartWeight);
    }
    kony.print("gblStartWeightPM------>>>" + gblStartWeightPM);
    gblGoalWeightPM = termMemberInfo.GoalWeight;
    kony.print("gblGoalWeightPM------>>>" + gblGoalWeightPM);
    kony.print("selectedData[GoalWeight]------>>>" + termMemberInfo.GoalWeight);
    // glbIsInMaintance = termMemberInfo.MaintenanceMode;
    if (termMemberInfo.RegNumber != undefined && termMemberInfo.RegNumber != null && termMemberInfo.RegNumber != "") {
        glbFormName.lblProcessMemberSubHeader4.text = termMemberInfo.RegNumber;
        kony.print("REG NO:->>>>" + termMemberInfo.RegNumber);
    } else {
        glbFormName.lblProcessMemberSubHeader4.text = "";
    }
    IsFromPM = FlowForScreens.ProcessMember;
    glbIsFormPM = FlowForScreens.ProcessMember;
    hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strProcessMember");
    //hboxEnrollHdrMain.lblHeaderName.text = "Process Member";
    //popupAdvancedSearch.dismiss();
    popupAdvancedSearch.destroy(); // Added by Praveen Kalal MEG-2712
    boHomeScreenSearch.getSelectedMemberWeightDetails(glbMemberId);
}
var IsswitchReceiveCoupons = false;
var IsswitchParticipateSurveys = false;
var IsswitchReceiveMsgs = false;
var IsswitchReceiveCalls = false;

function eventonSlideswitchReceiveCoupons() {
    kony.print("swtch.selectedIndex===>>" + frmEnrollReturningMember.switchReceiveCoupons.selectedIndex);
    if (frmEnrollReturningMember.switchReceiveCoupons.selectedIndex == 0) {
        IsswitchReceiveCoupons = true;
    } else {
        IsswitchReceiveCoupons = false;
    }
    kony.print("IsswitchReceiveCoupons---->>>>" + IsswitchReceiveCoupons);
}

function eventonSlideswitchParticipateSurveys() {
    if (frmEnrollReturningMember.switchParticipateSurveys.selectedIndex == 0) {
        IsswitchParticipateSurveys = true;
    } else {
        IsswitchParticipateSurveys = false;
    }
    kony.print("IsswitchParticipateSurveys---->>>>" + IsswitchParticipateSurveys);
}

function eventonSlideswitchReceiveMsgs() {
    if (frmEnrollReturningMember.switchReceiveMsgs.selectedIndex == 0) {
        IsswitchReceiveMsgs = true;
    } else {
        IsswitchReceiveMsgs = false;
    }
    kony.print("IsswitchReceiveMsgs---->>>>" + IsswitchReceiveMsgs);
}

function eventonSlideswitchReceiveCalls() {
    if (frmEnrollReturningMember.switchReceiveCalls.selectedIndex == 0) {
        IsswitchReceiveCalls = true;
    } else {
        IsswitchReceiveCalls = false;
    }
    kony.print("IsswitchReceiveCalls---->>>>" + IsswitchReceiveCalls);
}