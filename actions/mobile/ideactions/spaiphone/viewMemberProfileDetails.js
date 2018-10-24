var LastWeighInSelectedDate;
var IsNotFirstWeight = false;
var IsUpdateWeightHistory = false;
var IsUpdateBatchWeightHistory = false;
var IsSameAsMailingAdd = false;
var resMemberShipStatus;
var resTempMemberShipStatus;
var resOrgDOB;
var resMemberId;
var IsswitchReceiveCouponsEP = false;
var IsswitchParticipateSurveysEP = false;
var IsswitchReceiveMsgsEP = false;
var IsswitchReceiveCallsEP = false;
var validateEmailEP = false;
var WeighAddedForThisWeek = false;
var IsNWIInView = false;
var glbMemberId;
var glbMemberType;
var updatememberdetailsObject = {};
var updateweightdetailsObject = {};
var createWeightDetailsObject = {};
var vServMemberId;
var vServDeviceMemberId;
var selectedStatus;
var currentstatusIndex = 0;
var resWeekNumber = 0;
var glbMemberLastAttDate = "";
var hiddenMemberSubscription = "";
var glbMemberActivationStatusInfo = {};
var isSynForMPActivationFromProfile = false;

function preShowOfEditMemberProfile() {
    IsViewMember = FlowForScreens.ViewMember;
    if (frmEditMemberProfile.lblSubTypeInfo.text == kony.i18n.getLocalizedString("strPayg") || glbLocationTypeId == AT_WORK_LOCATION_TYPE_ID) {
        frmEditMemberProfile.txtSubID.setEnabled(false);
        frmEditMemberProfile.vboxExpirationDate.setEnabled(false);
    } else {
        frmEditMemberProfile.txtSubID.setEnabled(true);
        frmEditMemberProfile.vboxExpirationDate.setEnabled(true);
    }
    frmEditMemberProfile.txtMemberId.setEnabled(false);
    frmEditMemberProfile.txtRemainingMissedWeek.setEnabled(false);
    if (in_array(deviceLocale, Countries["CA"])) {
        frmEditMemberProfile.txtZip.textInputMode = constants.TEXTBOX_INPUT_MODE_ANY;
        frmEditMemberProfile.txtZip.maxTextLength = 7;
    }
}

function displayMemberProfileDetails(status, responseObj, isClearVars) {
    try {
        if (status) {
            kony.print("Flow val in DISPLAY FUNCTION======" + IsViewMember);
            kony.print("responseObj for Edit===>>" + JSON.stringify(responseObj));
            kony.print("status===>>" + status);
            if (isClearVars) {
                clearViewProfileFields(); // added by praveen kalal to remove last profile data.
                clearEditMemberFields(true); //Clear Edit form Fields before value is assign to it.
            } else {
                clearEditMemberFields(false);
            }
            if (responseObj != null) {
                vServMemberId = responseObj[0].MemberID;
                kony.print("responseObj[0].DateOfBirth===>>" + responseObj[0].lblDOBData);
                gblDOBPM = responseObj[0].OriginalDOB;
                kony.print("responseObj[0].OriginalDOB===>>" + responseObj[0].OriginalDOB);
                kony.print("gblDOBPM assigned with OriginalDOb===>>" + gblDOBPM);
                kony.print("responseObj[0].lblHeightData===>>" + responseObj[0].lblHeightData);
                gblHeightPM = responseObj[0].lblHeightData;
                kony.print("responseObj[0].lblGenderData===>>" + responseObj[0].lblGenderData);
                gblGenderPM = responseObj[0].lblGenderData;
                kony.print("responseObj[0].lblEmailData===>>" + responseObj[0].lblEmailData);
                gblEmail = responseObj[0].lblEmailData;
                kony.print("responseObj[0].StartDate===>>" + responseObj[0].StartDate);
                gblStartDatePM = responseObj[0].StartDate;
                glbMemberType = responseObj[0].MembershipType;
                kony.print("glbMemberType-->>>MEMBERTYPE : " + glbMemberType);
                if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) // Added by Dileep Chejerla
                {
                    frmEditMemberProfile.imgGoalAsk.isVisible = true;
                } else {
                    frmEditMemberProfile.imgGoalAsk.isVisible = false;
                }
                gblSubType = responseObj[0].lblSubscriptionType;
                gblExpirationDate = responseObj[0].ExpirationDate;
                kony.print("::DJP::00 Setting gblExpirationDate=" + gblExpirationDate);
                glbCouponCode = responseObj[0].CouponCode;
                kony.print("gblExpirationDate+++++++>>>.... " + gblExpirationDate);
                kony.print("gblSubType from responseObj = " + gblSubType);
                if (!checkValidString(gblSubType)) {
                    gblSubType = "PAYG";
                }
                kony.print("gblSubType = " + gblSubType);
                var dateData = getDateAsPerDeviceLocale();
                if (Date.parse(gblExpirationDate) >= Date.parse(dateData) && (in_array(glbMemberType.toUpperCase(), lifeTimeTypes))) // Added by Dileep Chejerla: MEG-2926
                {
                    frmViewMemberProfile.lblExpDate.skin = "lblwwTextBook38px";
                } else {
                    frmViewMemberProfile.lblExpDate.skin = "lblwwTextBook38pxRed";
                }
                if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                    frmViewMemberProfile.imgLifetime.setVisibility(true);
                    frmViewMemberProfile.imgLifetime.src = "icn_lifetime_member_header.png";
                } else {
                    frmViewMemberProfile.imgLifetime.src = "";
                    frmViewMemberProfile.imgLifetime.setVisibility(false);
                }
                if (gblSubType == "MonthlyPass" && !glbIsSelectedMemberExpired) {
                    kony.print("in MP == ");
                    frmViewMemberProfile.imgMonthlyPassImage.src = "icn_monthly_pass_header.png";
                    frmViewMemberProfile.lblExpDate.text = getLocalizedString("strMPAbbr") + " " + changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
                    frmEditMemberProfile.imgEmail.isVisible = true;
                } else if (gblSubType == MemberSubscriptionTypeEnumBatch["20 Week Pass"]) {
                    frmViewMemberProfile.imgMonthlyPassImage.src = "icn_20_week_pass_header.png";
                    frmViewMemberProfile.lblExpDate.text = getLocalizedString("str20WEEKSAbbr") + " " + changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;;
                    frmEditMemberProfile.imgEmail.isVisible = false;
                } else if (gblSubType == "PAYG") {
                    frmEditMemberProfile.imgEmail.isVisible = false;
                    if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                        frmViewMemberProfile.lblExpDate.text = getLocalizedString("strLTAbbr");
                        frmViewMemberProfile.lblExpDate.skin = "lblwwTextBook38px";
                        frmViewMemberProfile.imgMonthlyPassImage.src = "";
                        if (in_array(deviceLocale, Countries["US"]) && gblExpirationDate == "") {
                            frmViewMemberProfile.lblExpDate.text = getLocalizedString("strPAYGAbbr"); // change as MEG-5313
                            frmViewMemberProfile.imgMonthlyPassImage.src = "";
                        }
                    } else {
                        frmViewMemberProfile.lblExpDate.text = getLocalizedString("strPAYGAbbr");
                        frmViewMemberProfile.imgMonthlyPassImage.src = "icn_payment_header.png";
                    }
                } else {
                    kony.print("final else block of gblSubType = " + gblSubType);
                    frmEditMemberProfile.imgEmail.isVisible = false;
                    if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                        frmViewMemberProfile.lblExpDate.text = glbIsSelectedMemberExpired ? getLocalizedString("strLTAbbr") + " " : getLocalizedString("strLTAbbr") + " " + changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;;
                        frmViewMemberProfile.lblExpDate.skin = "lblwwTextBook38px";
                        frmViewMemberProfile.imgMonthlyPassImage.src = "";
                    } else {
                        frmViewMemberProfile.lblExpDate.text = glbIsSelectedMemberExpired ? "" : getLocalizedString("strPAYGAbbr") + " " + changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;;
                        frmViewMemberProfile.imgMonthlyPassImage.src = glbIsSelectedMemberExpired ? "" : "icn_payment_header.png";
                    }
                }
                kony.print("frmViewMemberProfile.lblnotes===>>" + frmViewMemberProfile.lblnotes.text);
                if (checkValidString(frmViewMemberProfile.lblnotes.text)) {
                    frmViewMemberProfile.vboxAddNote.setVisibility(false);
                    frmViewMemberProfile.vboxEditNote.setVisibility(true);
                } else {
                    frmViewMemberProfile.vboxAddNote.setVisibility(true);
                    frmViewMemberProfile.vboxEditNote.setVisibility(false);
                }
                var HeightInFtInch = com.es.weighincalculations.CalculateInchesToFeetInches(responseObj[0].lblHeightData);
                kony.print("HeightInFtInch===>>" + HeightInFtInch);
                frmViewMemberProfile.lblDOBData.text = changeDateFormate(responseObj[0].lblDOBData, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
                frmViewMemberProfile.lblPhoneData.text = responseObj[0].lblPhoneData;
                frmViewMemberProfile.lblEmailData.text = responseObj[0].lblEmailData;
                frmViewMemberProfile.lblEmailOffersInfo.text = responseObj[0].lblEmailOffersInfo;
                frmViewMemberProfile.lblMailingAddData.text = responseObj[0].lblMailingAddData;
                kony.print("responseObj[0].lblMailingAddData===>>>>" + responseObj[0].lblMailingAddData);
                frmViewMemberProfile.lblBillingAddData.text = responseObj[0].lblBillingAddData;
                frmViewMemberProfile.lblHeightData.text = HeightInFtInch; //responseObj[0].lblHeightData;
                frmViewMemberProfile.lblGenderData.text = responseObj[0].lblGenderData;
                frmViewMemberProfile.lblFirstName.text = (responseObj[0].lblFirstName).trim() + " " + (responseObj[0].lblLastName).trim();
                frmViewMemberProfile.lblFirstName.text = toTitleCase(frmViewMemberProfile.lblFirstName.text);
                kony.print("responseObj[0].lblLastName===>>>>" + responseObj[0].lblLastName);
                frmViewMemberProfile.lblRegNumber.text = responseObj[0].RegNo;
                frmViewMemberProfile.lblStartWeightData.text = parseFloat(responseObj[0].lblStartWeightData).toFixed(1);
                if (checkValidString(responseObj[0].lblCurrentDPTData)) frmViewMemberProfile.lblCurrentDPTData.text = responseObj[0].lblCurrentDPTData; //"0"//doubt
                if (checkValidString(responseObj[0].lblWPAData)) frmViewMemberProfile.lblWPAData.text = responseObj[0].lblWPAData;
                frmViewMemberProfile.lblRegNumber.text = responseObj[0].RegNumber;
                frmViewMemberProfile.lblGoalWeightData.text = (responseObj[0].lblGoalWeightData > 0) ? parseFloat(responseObj[0].lblGoalWeightData) : "0.0";
                var WeighDateFormatted = formattedDate(responseObj[0].RegDate);
                frmViewMemberProfile.lblRegDate.text = changeDateFormate(WeighDateFormatted, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386 //responseObj[0].RegDate;
                kony.print("responseObj[0].lblRMissedWeeksData to bind===>>>>" + responseObj[0].lblRMissedWeeksData);
                frmViewMemberProfile.lblRMissedWeeksData.text = responseObj[0].lblRMissedWeeksData;
                if (checkValidString(responseObj[0].lblStartWeightData) && responseObj[0].lblStartWeightData != 0) {
                    eventonDoneTextAreaProcessMemberWeighCalculations(responseObj[0].lblStartWeightData, true);
                } else {
                    kony.print("This means responseObj[0].lblStartWeightData is either null of 0");
                }
                kony.print("responseObj[0].lblStartWeightData===>>" + responseObj[0].lblStartWeightData);
                frmViewMemberProfile.lblReceiveCouponsInfo.text = responseObj[0].lblReceiveCouponsInfo;
                kony.print("responseObj[0].lblReceiveCouponsInfo===>>" + responseObj[0].lblReceiveCouponsInfo);
                frmViewMemberProfile.lblParticipateSurveysInfo.text = responseObj[0].lblParticipateSurveysInfo;
                kony.print("responseObj[0].lblParticipateSurveysInfo===>>" + responseObj[0].lblParticipateSurveysInfo);
                frmViewMemberProfile.lblReceiveMsgsInfo.text = responseObj[0].lblReceiveMsgsInfo;
                kony.print("responseObj[0].DontCnctSMS===>>" + responseObj[0].lblReceiveMsgsInfo);
                frmViewMemberProfile.lblReceiveCallsInfo.text = responseObj[0].lblReceiveCallsInfo;
                kony.print("responseObj[0].DontCnctPhone===>>" + responseObj[0].lblReceiveCallsInfo);
                resMemberId = responseObj[0].MemberID;
                kony.print("responseObj[0].MemberID===>>" + resMemberId);
                resOrgDOB = responseObj[0].OriginalDOB;
                kony.print("responseObj[0].OriginalDOB===>>" + resOrgDOB);
                ///For edit member profile page
                resMemberShipStatus = responseObj[0].MemberStatus;
                resTempMemberShipStatus = responseObj[0].MemberStatus;
                if (resMemberShipStatus.toUpperCase() == "ACTIVE") {
                    kony.print("one active");
                    currentstatusIndex = 0;
                } else if (resMemberShipStatus.toUpperCase() == "INACTIVE") {
                    kony.print("two active");
                    currentstatusIndex = 1;
                } else if (resMemberShipStatus.toUpperCase() == "TERMED") {
                    kony.print("three active");
                    currentstatusIndex = 2;
                }
                tempcurrentstatusIndex = currentstatusIndex;
                if (responseObj[0].ExpirationDate.search("T") != -1) {
                    var WeighDateFormatted = formattedDate(responseObj[0].ExpirationDate);
                    kony.print("WeighDateFormatted from PM ---->>>" + WeighDateFormatted);
                } else {
                    var WeighDateFormatted = responseObj[0].ExpirationDate;
                }
                WeighDateFormatted = changeDateFormate(WeighDateFormatted, kony.i18n.getLocalizedString('strDisplayDateFormat'));
                kony.print('WeighDateFormatted----------->' + WeighDateFormatted);
                frmEditMemberProfile.lblExpDateInfo.text = glbIsSelectedMemberExpired ? "" : WeighDateFormatted;
                kony.print(" responseObj[0].ExpirationDate===>>" + responseObj[0].ExpirationDate);
                frmEditMemberProfile.txtSubID.text = glbIsSelectedMemberExpired ? "" : generateSubscriptionId(responseObj[0].CouponCode, gblExpirationDate);
                kony.print("Append" + frmEditMemberProfile.txtSubID.text);
                kony.print(" responseObj[0].SubscriptnType===>>" + responseObj[0].lblSubscriptionType);
                frmEditMemberProfile.imgExpDate.setVisibility(true);
                frmEditMemberProfile.imgSubscID.setVisibility(true);
                if ((responseObj[0].lblSubscriptionType == "MonthlyPass" || responseObj[0].lblSubscriptionType == kony.i18n.getLocalizedString("strMonthlyPass")) && responseObj[0].CouponCode.toUpperCase() == 'M99999999' && !glbIsSelectedMemberExpired) {
                    frmEditMemberProfile.lblSubTypeInfo.text = kony.i18n.getLocalizedString("strMonthlyPass");
                    hiddenMemberSubscription = kony.i18n.getLocalizedString("strMPRedeem");
                } else if ((responseObj[0].lblSubscriptionType == "MonthlyPass" || responseObj[0].lblSubscriptionType == kony.i18n.getLocalizedString("strMonthlyPass")) && !glbIsSelectedMemberExpired) {
                    frmEditMemberProfile.lblSubTypeInfo.text = kony.i18n.getLocalizedString("strMonthlyPass");
                    hiddenMemberSubscription = kony.i18n.getLocalizedString("strMPBuyNew");
                } else if (responseObj[0].lblSubscriptionType == MemberSubscriptionTypeEnumBatch[kony.i18n.getLocalizedString("str20WkPass")] || responseObj[0].lblSubscriptionType == kony.i18n.getLocalizedString("str20WkPass")) {
                    frmEditMemberProfile.lblSubTypeInfo.text = kony.i18n.getLocalizedString("str20WkPass");
                    hiddenMemberSubscription = kony.i18n.getLocalizedString("str20WkBuyNew");
                } else {
                    frmEditMemberProfile.lblSubTypeInfo.text = kony.i18n.getLocalizedString("strPayg");
                    hiddenMemberSubscription = kony.i18n.getLocalizedString("strPayg");
                    frmEditMemberProfile.imgExpDate.setVisibility(false);
                    frmEditMemberProfile.imgSubscID.setVisibility(false);
                }
                if (glbLocationTypeId == AT_WORK_LOCATION_TYPE_ID) {
                    frmEditMemberProfile.lblSubTypeInfo.text = "";
                }
                frmEditMemberProfile.txtMemberId.text = responseObj[0].RegNo;
                frmEditMemberProfile.txtFirstName.text = responseObj[0].lblFirstName;
                frmEditMemberProfile.txtLastName.text = responseObj[0].lblLastName;
                frmEditMemberProfile.lblHeightInfo.text = HeightInFtInch; // responseObj[0].lblHeightData;
                frmEditMemberProfile.cmbGender.selectedKey = responseObj[0].lblGenderData;
                frmEditMemberProfile.lblDOBInfo.text = changeDateFormate(responseObj[0].lblDOBData, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
                frmEditMemberProfile.txtAddr1.text = encodeSpecialCharacters(responseObj[0].BillingAdd1);
                frmEditMemberProfile.txtPhone.text = responseObj[0].Phone1;
                kony.print("Phone type from server: " + responseObj[0].PhoneType1);
                switch (responseObj[0].PhoneType1) {
                    case phoneTypeValueEnum[1]:
                        frmEditMemberProfile.lblPhoneTypeData.text = getLocalizedString("strPhoneTypeHome");
                        break;
                    case phoneTypeValueEnum[7]:
                        frmEditMemberProfile.lblPhoneTypeData.text = getLocalizedString("strPhoneTypeWork");
                        break;
                    case phoneTypeValueEnum[8]:
                        frmEditMemberProfile.lblPhoneTypeData.text = getLocalizedString("strPhoneTypeCell");
                        break;
                    default:
                        break;
                }
                frmEditMemberProfile.txtEmail.text = responseObj[0].lblEmailData;
                frmEditMemberProfile.txtCity.text = responseObj[0].BillingCity;
                frmEditMemberProfile.lblStateInfo.text = getStateNameById(responseObj[0].BillingState);
                frmEditMemberProfile.txtAddr2.text = encodeSpecialCharacters(responseObj[0].BillingAdd2);
                frmEditMemberProfile.txtGoalWeight.text = (responseObj[0].lblGoalWeightData > 0) ? parseFloat(responseObj[0].lblGoalWeightData) : "0.0";
                frmEditMemberProfile.txtZip.text = responseObj[0].BillingZipCode;
                frmEditMemberProfile.txtPersonalGoalWeight.text = (responseObj[0].personalGoalWeight > 0) ? parseFloat(responseObj[0].personalGoalWeight).toFixed(1) : "";
                if (glbLinkType == "Link") {
                    frmEditMemberProfile.btnLinkUnlink.text = getLocalizedString("strUnlink");
                } else {
                    frmEditMemberProfile.btnLinkUnlink.text = getLocalizedString("strLink");
                }
                glbMemberLastAttDate = responseObj[0].MeetingDate;
                if (responseObj[0].lblEmailOffersInfo == "Yes") {
                    frmEditMemberProfile.imgEmail.setVisibility(true);
                    validateEmailEP = true;
                } else {
                    validateEmailEP = false;
                }
                frmEditMemberProfile.switchReceiveCalls.selectedIndex = (responseObj[0].lblReceiveCallsInfo == "Yes") ? 0 : 1;
                frmEditMemberProfile.switchReceiveMsgs.selectedIndex = (responseObj[0].lblReceiveMsgsInfo == "Yes") ? 0 : 1;
                frmEditMemberProfile.switchOffers.selectedIndex = (responseObj[0].lblEmailOffersInfo == "Yes") ? 0 : 1;
                frmEditMemberProfile.switchParticipateSurveys.selectedIndex = (responseObj[0].lblParticipateSurveysInfo == "Yes") ? 0 : 1;
                frmEditMemberProfile.switchReceiveCoupons.selectedIndex = (responseObj[0].lblReceiveCouponsInfo == "Yes") ? 0 : 1;
            }
        }
    } catch (e) {
        GlobalException(e);
    }
}

function setGlbMemberActivationStatusAndUpdateMPIcon(activationDataOfMember) {
    setGlbMemberActivationStatusInfo(activationDataOfMember);
    updateMPiconInMemberProfileHeader();
}

function setGlbMemberActivationStatusInfo(activationDataOfMember) {
    glbMemberActivationStatusInfo.status = kony.sync.getString(activationDataOfMember.ActivationStatus);
    glbMemberActivationStatusInfo.isPreActivatedMP = true;
    glbMemberActivationStatusInfo.memberID = kony.sync.getString(activationDataOfMember.MemberID);
    glbMemberActivationStatusInfo.couponCode = kony.sync.getString(activationDataOfMember.CouponCode);
    glbMemberActivationStatusInfo.isLocalyPreActivatedMP = (checkValidString(activationDataOfMember.isLocalyPreActivatedMP)) ? activationDataOfMember.isLocalyPreActivatedMP : false;
}

function updateMPiconInMemberProfileHeader() {
    var mpIconName = "icn_monthly_pass_header.png";
    switch (glbMemberActivationStatusInfo.status) {
        case "true":
            mpIconName = "mpactive_greenicon.png";
            break;
        case "false":
            mpIconName = "mpactive_orangeicon.png";
            break;
        default:
            mpIconName = "icn_monthly_pass_header.png";
            break;
    }
    frmViewMemberProfile.imgMonthlyPassImage.src = mpIconName;
}

function eventOnClickWeighIconProfilePage() {
    if (!IsNoMeetingSelected) {
        kony.print("gblDOBPM------>>>" + gblDOBPM);
        kony.print("gblHeightPM------>>>" + gblHeightPM);
        kony.print("gblGenderPM------>>>" + gblGenderPM);
        kony.print("gblEmail------>>>" + gblEmail);
        kony.print("gblStartDatePM------>>>" + gblStartDatePM);
        hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strProcessMember");
        kony.print("frmProcessMember.lblProcessMembersubHeader1.text===>>>" + frmProcessMember.lblProcessMembersubHeader1.text);
        frmProcessMember.lblProcessMembersubHeader1.text = (frmViewMemberProfile.lblFirstName.text).trim() + " " + (frmViewMemberProfile.lblLastName.text).trim();
        frmProcessMember.lblProcessMembersubHeader1.text = toTitleCase(frmProcessMember.lblProcessMembersubHeader1.text);
        hboxEnrollHdrMain.lblCurrentMeeting.text = hboxNameSection.lblCurrentMeetingName.text;
        kony.print("frmViewMemberProfile.lblFirstName.text===>>>" + frmViewMemberProfile.lblFirstName.text);
        kony.print("frmViewMemberProfile.lblLastName.text===>>>" + frmViewMemberProfile.lblLastName.text);
        boHomeScreenSearch.getSelectedMemberWeightDetails(glbMemberId);
        ClearVariables();
        //This flag is used to determine the Process member flow
        IsFromPM = FlowForScreens.ProcessMember;
        glbIsFormPM = FlowForScreens.ProcessMember;
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
    }
}

function eventOnClickSegmentMemberProfileSearch() {
    kony.print("Dileep --> Inside eventOnClickSegmentMemberProfileSearch");
    var selectedIndex = frmMemberProfileSearch.segMemberProfileSearch.selectedIndex;
    var selectedRow = parseInt(selectedIndex[1]);
    var tempmemberid = "";
    selectedMemberData = frmMemberProfileSearch.segMemberProfileSearch.data[selectedRow];
    boMonitor.log("View Selected Member", "segMemberProfileSearch", selectedMemberData, FlowForMonitor.EditMember);
    //For Updating the Segment Row when start weight is changed 3363
    glbSelectedMemberData = frmMemberProfileSearch.segMemberProfileSearch.data[selectedRow];
    glbSelectedMemberSearchIndex = selectedRow;
    glbSelectedMemberMtngOccrID = selectedMemberData["MtngOccrID"];
    frmMemberProfileSearch.segMemberProfileSearch.selectedIndex = selectedIndex;
    glbIsSelectedMemberExpired = checkExpirationDate(kony.sync.getString(selectedMemberData["ExpirationDate"]));
    glbProgDurationForProcess = checkValidString(selectedMemberData["ProgramDuration"]) ? selectedMemberData["ProgramDuration"] : 0;
    kony.print("::DJP::glbProgDurationForProcess=" + glbProgDurationForProcess);
    glbRegNoForProcess = checkValidString(selectedMemberData["RegNo"]) ? selectedMemberData["RegNo"] : 0;
    kony.print("Dileep --> selectedMemberData = " + JSON.stringify(selectedMemberData));
    displayProgressView();
    if (selectedMemberData["RegStatus"] == MemberRegEnum.Pre_Registered || selectedMemberData["RegStatus"] == MemberRegEnum.Website || selectedMemberData["RegStatus"] == MemberRegEnum.Online || selectedMemberData["UserType"] == UserType.Employee) { //|| selectedMemberData["UserType"] == "") {
        kony.print("Pre Registered or Website or Online member or Employee... so not showing profile");
        selectedMemberData = "";
        removeProgressView();
        return;
    }
    isSearchPage = true;
    gblSubType = selectedMemberData["SubscriptnType"];
    gblExpirationDate = glbIsSelectedMemberExpired ? "" : selectedMemberData["ExpirationDate"];
    kony.print("::DJP:: 11 Setting gblExpirationDate=" + gblExpirationDate);
    glbMemberId = selectedMemberData["MemberID"];
    gblStartWeightPM = selectedMemberData["StartWeight"];
    glbStartDateMemberProfile = selectedMemberData["StartDate"];
    gblGoalWeightPM = selectedMemberData["GoalWeight"];
    glbCouponCode = selectedMemberData["CouponCode"];
    glbMemberType = selectedMemberData["MembershipType"]; // Added by Dileep Chejerla
    kony.print("Inside eventOnClickSegmentMemberProfileSearch --> MembershipType --> glbMemberType = " + glbMemberType);
    kony.print("Inside eventOnClickSegmentMemberProfileSearch --> SubscriptnType --> gblSubType = " + gblSubType);
    kony.print("Inside eventOnClickSegmentMemberProfileSearch -->  selectedMemberData[MemberStatus] = " + selectedMemberData["MemberStatus"]);
    var whereClause = " where MemberID = '" + glbMemberId + "' and NoteTypeID = 'Sticky' ";
    boEnrollMember.getNoteByMemberId(whereClause, glbMemberId);
    glbSelectedMemberSessionNumber = checkValidString(selectedMemberData["SessionNumber"]) ? selectedMemberData["SessionNumber"] : 1; //fresh sart- 116
    kony.print("-- selecting member-- setting gloal val = " + glbSelectedMemberSessionNumber + '--- obj values = ' + JSON.stringify(selectedMemberData));
    kony.print("selectedMemberData[MemberID]------>>>" + selectedMemberData["MemberID"]);
    IsViewMember = FlowForScreens.ViewMember;
    kony.print("Inside eventOnClickSegmentMemberProfileSearch -->  selectedMemberData[FlowForCart] = " + selectedMemberData["FlowForCart"]);
    kony.print("IsViewMember in eventOnClickSegmentMemberProfileSearch==>>> " + IsViewMember + " This is OnlineMember Flag value : " + selectedMemberData["isOnlineSearch"]);
    if (selectedMemberData["MemberStatus"] == MemberStatusEnum[3]) {
        frmViewMemberProfile.vboxWeighSection.isVisible = false;
        hboxMainMemberProfile.image212443534675273874.src = "icn_action_menu.png";
        hboxMainMemberProfile.vboxEditPopup.onClick = onReEnrollEditProfilePopupOpen;
    } else {
        kony.print("selectedMemberData[MemberStatus]  else block : " + selectedMemberData["MemberStatus"]);
        frmViewMemberProfile.vboxWeighSection.isVisible = true;
        hboxMainMemberProfile.image212443534675273874.src = "icn_action_menu_header.png";
        hboxMainMemberProfile.vboxEditPopup.onClick = onEditProfilePopupOpen;
    }
    frmViewMemberProfile.vboxNotesSection.isVisible = false;
    frmViewMemberProfile.vboxPaymentSection.isVisible = false;
    if (selectedMemberData["FlowForCart"] == true) {
        frmViewMemberProfile.imgWeigh.src = "icn_shopping_cart.png";
    } else {
        frmViewMemberProfile.imgWeigh.src = "icn_weigh.png";
    }
    kony.print("selectedMemberData[isOnlineSearch] :: " + selectedMemberData["isOnlineSearch"]);
    if (selectedMemberData["isOnlineSearch"]) {
        kony.print("Getting data from Online search object  " + memberOnlineSearchResultSet["MembersList"].length);
        for (var i in memberOnlineSearchResultSet["MembersList"]) {
            var v = memberOnlineSearchResultSet["MembersList"][i];
            kony.print("data in  ====" + JSON.stringify(v));
            kony.print("v.ServerMemberID = " + v.ServerMemberID.toString());
            kony.print("glbMemberId = " + glbMemberId.toString());
            if (v.ServerMemberID.toString() == glbMemberId.toString()) {
                addMemberdataToLocaldb(v, true);
                kony.print("MEG-2716: calling boMemberProfile.BindMemberDetailsForProfileView >>> glbMemberId = " + glbMemberId);
                boMemberProfile.BindMemberDetailsForProfileView("", true, glbMemberId);
                ClearMemberDetailsForWeight();
                boMemberProfile.getSelectedMemberProfileWeightDetails(glbMemberId);
                IsViewMember = FlowForScreens.ViewMember;
                frmViewMemberProfile.show();
                break;
            }
        }
    } else {
        boMemberProfile.getSelectedMemberDetailsFromDeviceMemberID(glbMemberId);
    }
}

function addMemberdataToLocaldb(v, isSegmentClicked) {
    kony.print("Inside addMemberdataToLocaldb " + JSON.stringify(v));
    var createMemberDetailsObject = {}; // = new com.kony.WeightWatchers.MemberSyncScope.MemberDetails();
    createMemberDetailsObject.IsCurrentWeekWeighed = v.IsCurrentWeekWeighed;
    createMemberDetailsObject.ConsWeightGain = parseInt(v.ConsecutiveWeightGain);
    createMemberDetailsObject.CrntLifeTimeSta = parseInt(v.CurrentLifeTimeStatus);
    createMemberDetailsObject.DateOfBirth = v.DateOfBirth;
    createMemberDetailsObject.DontRecvCalls = v.ConsecutiveWeightGain;
    createMemberDetailsObject.DontContByEmail = v.DontContByEmail;
    createMemberDetailsObject.DontCnctPhone = v.DontCnctPhone;
    createMemberDetailsObject.DontCnctSMS = v.DontCnctSMS;
    createMemberDetailsObject.DontSendCard = v.DontSendCard;
    createMemberDetailsObject.DontSendCoupon = v.DontSendCoupon;
    createMemberDetailsObject.ProgramDuration = v.ProgramDuration;
    createMemberDetailsObject.Email = checkUndefined(v.Email);
    kony.print("parseInt(v.EmpID) = " + parseInt(v.EmpID));
    createMemberDetailsObject.EmpID = parseInt(v.EmpID); //"anita.sado";
    kony.print("createMemberDetailsObject.EmpID = " + createMemberDetailsObject.EmpID);
    createMemberDetailsObject.EnrollmentDate = checkUndefined(v.EnrollmentDate);
    createMemberDetailsObject.FeePaid = checkUndefined(v.FeePaid);
    createMemberDetailsObject.FirstName = checkUndefined(v.FirstName);
    createMemberDetailsObject.Gender = checkUndefined(v.Gender);
    kony.print("Location ID to be added in Member is : " + glbLocationID);
    createMemberDetailsObject.GoalWeight = checkUndefined(v.GoalWeight);
    createMemberDetailsObject.Height = Math.round(v.Height);
    createMemberDetailsObject.IncompleteData = v.IncompleteData;
    createMemberDetailsObject.LastAchvdMStone = parseInt(v.LastAchievedMileStoneID);
    createMemberDetailsObject.LastContactDate = v.LastContactDate;
    createMemberDetailsObject.LastName = checkUndefined(v.LastName);
    createMemberDetailsObject.LastNteEntrDate = v.LastNoteEntryDate;
    createMemberDetailsObject.LocationID = parseInt(glbLocationID);
    createMemberDetailsObject.MeetingDate = v.MeetingDate;
    //Online Member Returns MeetingOccurance ID as 0 so we should replace by Current meeting number
    createMemberDetailsObject.MtngOccrID = (v.MeetingOccuranceID == 0) ? glbMeetingNum : v.MeetingOccuranceID;
    createMemberDetailsObject.MemberType = v.MemberType;
    createMemberDetailsObject.MemberStatus = v.MemberStatus;
    createMemberDetailsObject.MissWeekPasses = parseInt(v.MissedWeekPasses);
    createMemberDetailsObject.NoWeeksAttended = parseInt(v.NumberOfWeeksAttended);
    createMemberDetailsObject.LastAttendanceDate = checkUndefined(v.LastAttendanceDate);
    createMemberDetailsObject.Phone1 = checkUndefined(v.Phone1);
    createMemberDetailsObject.Phone2 = checkUndefined(v.Phone2);
    createMemberDetailsObject.PhoneType1 = checkUndefined(v.PhoneType1);
    createMemberDetailsObject.PhoneType2 = checkUndefined(v.PhoneType2);
    createMemberDetailsObject.PrevLifeTimeSta = parseInt(v.PrevLifeTimeSta);
    createMemberDetailsObject.RegDate = v.RegDate;
    createMemberDetailsObject.RegNumber = v.RegNumber;
    createMemberDetailsObject.RegStatus = v.RegStatus;
    if (parseInt(v.ServerMemberID) == 0 && (v.RegStatus == MemberRegEnum.Website || v.RegStatus == MemberRegEnum.Online)) {
        boEnrollMember.generateDeviceLevelMemberID();
        createMemberDetailsObject.MemberID = glbMemberId;
    } else {
        createMemberDetailsObject.MemberID = v.ServerMemberID;
    }
    if (checkUndefined(v.PreRegNumber)) {
        createMemberDetailsObject.PreRegNumber = parseInt(v.PreRegNumber);
    } else {
        createMemberDetailsObject.PreRegNumber = 0;
    }
    kony.print("Inserting record to local db with Member ID : " + createMemberDetailsObject.MemberID + "     glbMemberId : " + glbMemberId);
    //Shipping Address Block Nodes
    createMemberDetailsObject.ShippingAddr1 = checkUndefined(v.ShippingAddr1);
    createMemberDetailsObject.ShippingAddr2 = checkUndefined(v.ShippingAddr2);
    createMemberDetailsObject.ShippingCity = checkUndefined(v.ShippingCity);
    createMemberDetailsObject.ShippingCountry = checkUndefined(v.ShippingCountry);
    createMemberDetailsObject.ShippingState = checkUndefined(v.ShippingState);
    createMemberDetailsObject.ShippingZipCode = checkUndefined(v.ShippingZipCode);
    //Billing Address Block Nodes
    createMemberDetailsObject.BillingAddr1 = checkUndefined(v.BillingAddr1);
    createMemberDetailsObject.BillingAddr2 = checkUndefined(v.BillingAddr2);
    createMemberDetailsObject.BillingCity = checkUndefined(v.BillingCity);
    createMemberDetailsObject.BillingCountry = checkUndefined(v.BillingCountry);
    createMemberDetailsObject.BillingState = checkUndefined(v.BillingState);
    createMemberDetailsObject.BillingZipCode = checkUndefined(v.BillingZipCode);
    // Subscription Block Nodes
    createMemberDetailsObject.ProductID = checkUndefined(v.ProductID);
    createMemberDetailsObject.SubscriptnID = checkUndefined(v.SubscriptnID);
    createMemberDetailsObject.SubscriptnType = checkUndefined(v.SubscriptnType);
    createMemberDetailsObject.ExpirationDate = checkUndefined(v.ExpirationDate);
    createMemberDetailsObject.SubMemberID = checkUndefined(v.SubMemberID);
    createMemberDetailsObject.CouponCode = checkUndefined(v.CouponCode);
    createMemberDetailsObject.LastUsedDate = checkUndefined(v.LastUsedDate);
    //Other Nodes
    createMemberDetailsObject.StartDate = checkUndefined(v.StartDate);
    createMemberDetailsObject.StartWeight = parseFloat(v.StartWeight);
    createMemberDetailsObject.TransactionType = v.TransactionType;
    createMemberDetailsObject.WeeksCompleted = checkUndefined(v.WeeksCompleted);
    createMemberDetailsObject.WeightGain = parseInt(v.WeightGain);
    createMemberDetailsObject.UserComments = checkUndefined(v.UserComments);
    createMemberDetailsObject.UserStsEndPrd = checkUndefined(v.UserStsEndPrd);
    createMemberDetailsObject.UserStsChngRsn = checkUndefined(v.UserStsChngRsn);
    createMemberDetailsObject.UniqueID = checkUndefined(v.UniqueID);
    createMemberDetailsObject.SessionNumber = checkUndefined(v.SessionNumber);
    //Maintainance Tracker
    checkValidString(v.TrackerID) ? (createMemberDetailsObject.TrackerID = v.TrackerID) : (createMemberDetailsObject.TrackerID = 0);
    checkValidString(v.MaintenanceMode) ? (createMemberDetailsObject.MaintenanceMode = v.MaintenanceMode) : (createMemberDetailsObject.MaintenanceMode = 'false');
    checkValidString(v.TrackerStartDate) ? (createMemberDetailsObject.TrackerStartDate = v.TrackerStartDate) : (createMemberDetailsObject.TrackerStartDate = "0001-01-01T00:00:00");
    checkValidString(v.FailedDate) ? (createMemberDetailsObject.FailedDate = v.FailedDate) : (createMemberDetailsObject.FailedDate = "0001-01-01T00:00:00");
    checkValidString(v.Eligible) ? (createMemberDetailsObject.Eligible = v.Eligible) : (createMemberDetailsObject.Eligible = 'false');
    checkValidString(v.EligibleDate) ? (createMemberDetailsObject.EligibleDate = v.EligibleDate) : (createMemberDetailsObject.EligibleDate = "0001-01-01T00:00:00");
    checkValidString(v.WeightCountMet) ? (createMemberDetailsObject.WeightCountMet = v.WeightCountMet) : (createMemberDetailsObject.WeightCountMet = 'false');
    checkValidString(v.PaidLastFee) ? (createMemberDetailsObject.PaidLastFee = v.PaidLastFee) : (createMemberDetailsObject.PaidLastFee = 'false');
    checkValidString(v.SessionNumber) ? (createMemberDetailsObject.SessionNumber = v.SessionNumber) : (createMemberDetailsObject.SessionNumber = 1);
    //LinkUnlink
    checkValidString(v.EnterpriseID) && v.EnterpriseID != 0 ? (createMemberDetailsObject.EnterpriseID = v.EnterpriseID) : (createMemberDetailsObject.EnterpriseID = 0);
    checkValidString(v.EmailID) ? (createMemberDetailsObject.EmailID = v.EmailID) : (createMemberDetailsObject.EmailID = "");
    checkValidString(v.LinkType) ? (createMemberDetailsObject.LinkType = v.LinkType) : (createMemberDetailsObject.LinkType = "None");
    (checkValidString(v.LinkType) && (v.LinkType == "Link" || v.LinkType == "UnLink")) ? (createMemberDetailsObject.IsLink = "false") : (createMemberDetailsObject.IsLink = "true");
    checkValidString(v.UserName) ? (createMemberDetailsObject.UserName = decodeSpecialCharacters(v.UserName)) : (createMemberDetailsObject.UserName = "");
    checkValidString(v.IsFreshStart) ? (createMemberDetailsObject.IsFreshStart = v.IsFreshStart) : (createMemberDetailsObject.IsFreshStart = 'false');
    checkValidString(v.RefreshDate) ? (createMemberDetailsObject.RefreshDate = v.RefreshDate) : (createMemberDetailsObject.RefreshDate = "0001-01-01T00:00:00");
    //115 related
    createMemberDetailsObject.ReedeemedPasses = 0;
    createMemberDetailsObject.RedeemedDate = "0001-01-01T00:00:00";
    createMemberDetailsObject.IsDateRedeemed = 'true';
    //personal goal related
    createMemberDetailsObject.PersonalGoalWeight = checkUndefined(v.PersonalGoalWeight);
    createMemberDetailsObject.PersonalGoalWeightDate = checkUndefined(v.PersonalGoalWeightDate);
    kony.print("Inserting online searche member");
    if (v.MemberStatus.toString() == MemberStatusEnum[3]) {
        termMemberInfo = new Object();
        boMemberProfile.fillTermMemberInfoObjectOnline(v);
    }
    //Added By Praveen (Maulik's Email Issue: LocalMember With Expired MP but valid extension from .COM gives "MP Expired")
    boEnrollMember.checkMemberExistWithMemberId(v.ServerMemberID, createMemberDetailsObject, isSegmentClicked, boEnrollMember.addOnlineMemberDetails); //
}

function onEndEditingOfWeightTextboxPopup() {
    kony.print("popupAddWeigh.txtAddWeight.text====>" + popupAddWeigh.txtAddWeight.text);
    var roundPopUpWeight = com.es.weighincalculations.RoundWeight(popupAddWeigh.txtAddWeight.text);
    roundPopUpWeight = (roundPopUpWeight.toString().length > 0) ? parseFloat(roundPopUpWeight).toFixed(1) : "";
    popupAddWeigh.txtAddWeight.text = (roundPopUpWeight.toString().length > 0) ? roundPopUpWeight.toString() : "";
}
///To do change the weight values based on locales
function eventonclickToSaveweigh() {
    kony.print("eventonclickToSaveweigh");
    popupAddWeigh.vboxDOBSection.onClick = eventOnClickDateSelection;
    var ageVal;
    if (kony.application.getCurrentForm().id == frmEditMemberProfile.id) {
        kony.print("eventonclickToSaveweigh EDIT  " + frmEditMemberProfile.lblDOBInfo.text + "" + frmBatchAddMember.lblDOBInfo.text);
        ageVal = getAgeFromDob(frmEditMemberProfile.lblDOBInfo.text);
    } else {
        kony.print("eventonclickToSaveweigh Batch Add");
        ageVal = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
    }
    if (ageVal < 13) {
        alertForMessages(kony.i18n.getLocalizedString("strValidAgeAlert"));
        return;
    }
    if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
        var NextDataIndex = 0;
        var currWeight = 0;
        var tempWeightData = {};
        valid = new validationcls();
        if (IsNWIInView) {
            var res = valid.checkForRequiredFields(popupAddWeigh.lblDOBInfo.text, "date", "").checkforValidWeightDate(frmBatchAddMember.lblStartDateInfo.text);
        } else {
            var res = valid.checkForRequiredFields(frmBatchAddMember.lblDOBInfo.text, getLocalizedString("strMsgDOB"), "").checkForRequiredFields(frmBatchAddMember.lblHeightInfo.text, getLocalizedString("strMsgHeight"), "").checkForRequiredFields(popupAddWeigh.lblDOBInfo.text, "date", "").validateWeight(popupAddWeigh.txtAddWeight.text).checkforValidWeightDate(frmBatchAddMember.lblStartDateInfo.text);
        }
        kony.print("error = " + error);
        if (error != "") {
            displayPopupAlert(error);
            error = "";
        } else {
            //Added for solving bug current week weigh in not allowed in batch add--Nikita
            if (batchWeightData.length > 0) {
                for (var i = 0; i < batchWeightData.length; i++) {
                    var batchlastweighindate = batchWeightData[i].WeighInDate;
                    var curWeighDate = popupAddWeigh.lblDOBInfo.text;
                    kony.print(":::batchlastweighindate=" + batchlastweighindate + " curWeighDate=" + curWeighDate);
                    batchlastweighindate = formattedDate(batchlastweighindate);
                    if (!IsUpdateBatchWeightHistory && ToCheckIfTheWeekIsSame(batchlastweighindate, curWeighDate)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsgWeighDone"));
                        return;
                    }
                }
            }
            //End for solving bug current week weigh in not allowed in batch add--Nikita
            popupAddWeigh.txtAddWeight.setEnabled(true);
            var PickerHeightSelectedKeys = popupHeight.pckrSelectHeight.selectedKeys;
            var hghtInMtrs = com.es.weighincalculations.ConvertHeight(PickerHeightSelectedKeys);
            var ageval = ageVal;
            var wghtInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeight));
            var gender = frmBatchAddMember.cmbGender.selectedKey;
            tempWeightData.EmpID = glbEmployeeId;
            tempWeightData.IsAtndgMeeting = true;
            tempWeightData.WeighInDate = supportTime(new Date(popupAddWeigh.lblDOBInfo.text), "", "yyyy-mm-ddTHH:NN:SS");
            tempWeightData.MemberID = glbMemberId;
            tempWeightData.LocationID = parseInt(glbLocationID);
            tempWeightData.ManualWeighIn = true;
            tempWeightData.MeetingDate = checkValidString(glbMeetingDate) ? glbMeetingDate : "0001-01-01T00:00:00";
            if (tempWeightData.WeighInDate > glbMemberLastAttDate) {
                glbMemberLastAttDate = tempWeightData.WeighInDate;
            }
            if (!IsUpdateBatchWeightHistory) {
                if (batchWeightData.length > 0) {
                    var indexitem = getIndexItemByWeekNumber(batchWeightData);
                    kony.print("indexitem-----" + indexitem);
                    if (tempWeightData.WeighInDate < batchWeightData[indexitem].WeighInDate) {
                        tempWeightData.WeekNumber = batchWeightData[indexitem].WeekNumber
                        batchWeightData[indexitem].WeekNumber = parseInt(batchWeightData.length) + 1;
                    } else {
                        tempWeightData.WeekNumber = parseInt(batchWeightData.length) + 1;
                    }
                } else {
                    tempWeightData.WeekNumber = parseInt(batchWeightData.length) + 1;
                }
            }
            tempWeightData.SessionNumber = "1";
            if (checkIfToday(tempWeightData.WeighInDate)) {
                tempWeightData.MtngOccrID = (glbMeetingNum == "") ? 1 : glbMeetingNum;
            } else {
                tempWeightData.MtngOccrID = 1; //Total weight loss issue
            }
            tempWeightData.WeightLoss = parseFloat("0.0");
            var dataArr = frmBatchAddMember.segAddBatchMembeProfileDetails.data;
            var skn, lastindex, ans = [];
            if (IsNWIInView) {
                tempWeightData.NoWeighIn = true;
                if (dataArr != null) {
                    if (dataArr.length > 0) {
                        ans = _.filter(dataArr, function(a) {
                            return (new Date(a.lblDateData) < new Date(popupAddWeigh.lblDOBInfo.text) && a.lblWeightData != getLocalizedString("strNWI"))
                        })
                        kony.print("ans == " + JSON.stringify(ans));
                    }
                }
                skn = "btnNoWeighInSelected";
                IsNWIInView = false;
                if (IsUpdateBatchWeightHistory) {
                    kony.print("Item to be updated in object : " + parseInt(selectedIndexforBatchUpdate[1]));
                    wghtInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(batchWeightData[parseInt(selectedIndexforBatchUpdate[1]) - 1].Weight));
                    tempWeightData.Weight = parseFloat(batchWeightData[parseInt(selectedIndexforBatchUpdate[1]) - 1].Weight);
                    tempWeightData.WeekNumber = parseInt(batchWeightData[parseInt(selectedIndexforBatchUpdate[1])].WeekNumber);
                    addNWItoNextRcrdinBatchAdd(parseInt(selectedIndexforBatchUpdate[1]) + 1, tempWeightData.Weight);
                } else {
                    wghtInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(ans[ans.length - 1].lblWeightData));
                    tempWeightData.Weight = ans[ans.length - 1].lblWeightData;
                }
                kony.print("tempWeightData.Weight == " + tempWeightData.Weight);
                currWeight = "NWI";
            } else {
                wghtInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(popupAddWeigh.txtAddWeight.text));
                tempWeightData.NoWeighIn = false;
                currWeight = popupAddWeigh.txtAddWeight.text;
                tempWeightData.Weight = parseFloat(popupAddWeigh.txtAddWeight.text);
                skn = "btnwwtxtSearchLocation";
                if (IsUpdateBatchWeightHistory) {
                    tempWeightData.WeekNumber = parseInt(batchWeightData[parseInt(selectedIndexforBatchUpdate[1])].WeekNumber);
                    //updating next weigh in for next NWI
                    addNWItoNextRcrdinBatchAdd(parseInt(selectedIndexforBatchUpdate[1]) + 1, tempWeightData.Weight);
                }
            }
            //MEG 3919 - No NWI for Lifetime in First Weigh of Month
            //glbBatchAddToShowActionNWI  - true by default show NWI in segment actions
            //false when lifetime member weigh in for first time in month - NWI not allowed
            var data = {
                lblDateData: popupAddWeigh.lblDOBInfo.text,
                lblWeightData: currWeight,
                btnNWI: {
                    text: getLocalizedString("strNWI"),
                    isVisible: (tempWeightData.WeekNumber == 1 || !glbBatchAddToShowActionNWI) ? false : true,
                    skin: skn
                },
                isNWIAllowed: glbBatchAddToShowActionNWI
            };
            kony.print("ageval==" + ageval + "===hghtInMtrs==" + hghtInMtrs + "===currWeight==" + currWeight + "==gender==" + gender + " ==wghtInKG== " + wghtInKG);
            ageval = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
            var DptValue = "";
            var WPA = " ";
            setDptWpa(wghtInKG, hghtInMtrs, ageval, gender, "", function(dptVal, wpaVal) {
                kony.print("SJ DPT:" + dptVal);
                kony.print("SJ WPA:" + wpaVal);
                DptValue = dptVal;
                WPA = wpaVal;
            });
            tempWeightData.DailyPtTarget = (DptValue != undefined && DptValue != null && DptValue != "") ? DptValue : 0;
            tempWeightData.WeeklyPointsAllowance = (WPA != undefined && WPA != null && WPA != "") ? WPA : 0;
            kony.print("::On Save::batchWeightData 30  === " + JSON.stringify(batchWeightData));
            kony.print("::tempWeightData:::" + JSON.stringify(tempWeightData));
            kony.print("::dataArr::: before" + dataArr);
            kony.print("::NextDataIndex::: before" + NextDataIndex);
            kony.print("::selectedIndexforBatchUpdate::: before" + selectedIndexforBatchUpdate[1]);
            kony.print("tempWeightData.DailyPtTarget eventonclickToSaveweigh wwwwww " + tempWeightData.DailyPtTarget)
            if (IsUpdateBatchWeightHistory) {
                batchWeightData.splice(parseInt(selectedIndexforBatchUpdate[1]), 1, tempWeightData);
            } else {
                batchWeightData.push(tempWeightData);
            }
            //Sort and keep Data
            batchWeightData = _.sortBy(batchWeightData, function(w) {
                return w.WeighInDate;
            });
            kony.print("::On Save::batchWeightData 33  === " + JSON.stringify(batchWeightData));
            if (dataArr == undefined || dataArr == null) {
                kony.print("in if");
                frmBatchAddMember.segAddBatchMembeProfileDetails.setData([{
                    lblDateData: popupAddWeigh.lblDOBInfo.text,
                    lblWeightData: popupAddWeigh.txtAddWeight.text,
                    btnNWI: {
                        text: getLocalizedString("strNWI"),
                        isVisible: false
                    },
                    isNWIAllowed: false
                }]);
            } else {
                kony.print("in else");
                if (IsUpdateBatchWeightHistory) {
                    kony.print("Updating value in segment");
                    frmBatchAddMember.segAddBatchMembeProfileDetails.setDataAt(data, parseInt(selectedIndexforBatchUpdate[1]));
                } else {
                    NextDataIndex = parseInt(dataArr.length); //+parseInt(1);
                    frmBatchAddMember.segAddBatchMembeProfileDetails.addDataAt(data, NextDataIndex);
                }
                tempWeightData = {};
            }
            var segWeights = frmBatchAddMember.segAddBatchMembeProfileDetails.data;
            /*Sort The Segment - Helps in Editing the Weights - Index Changes*/
            segWeights = _.sortBy(segWeights, function(d) {
                return new Date(d.lblDateData);
            });
            _.each(segWeights, function(d) {
                d.isNWIAllowed = true;
                if (d.lblWeightData == getLocalizedString("strNWI")) {
                    d.btnNWI = {
                        text: getLocalizedString("strNWI"),
                        isVisible: true,
                        skin: "btnNoWeighInSelected"
                    };
                } else {
                    d.btnNWI = {
                        text: getLocalizedString("strNWI"),
                        isVisible: true,
                        skin: "btnwwtxtSearchLocation"
                    };
                }
            });
            //First Weight
            segWeights[0].btnNWI = {
                text: getLocalizedString("strNWI"),
                isVisible: false
            };
            segWeights[0].isNWIAllowed = false;
            frmBatchAddMember.segAddBatchMembeProfileDetails.setData(segWeights);
            /*MEG-3919 Replace the Data with New Segment Data if liftime member after NWI changes*/
            if (glbSelectMemType == MemberTypeEnum["LifeTime"]) {
                var dataSeg = frmBatchAddMember.segAddBatchMembeProfileDetails.data;
                kony.print("::LIFETIME:: dataSeg = " + JSON.stringify(dataSeg));
                var weightdata = dataSeg;
                _.each(weightdata, function(d) {
                    d.isNWIAllowed = true;
                    d.btnNWI = {
                        text: getLocalizedString("strNWI"),
                        isVisible: true,
                        skin: "btnwwtxtSearchLocation"
                    }
                });
                // First Weight
                weightdata[0].isNWIAllowed = false;
                weightdata[0].btnNWI = {
                    text: getLocalizedString("strNWI"),
                    isVisible: false,
                    skin: "btnwwtxtSearchLocation"
                };
                kony.print("::LIFETIME:: weightdata  =" + JSON.stringify(weightdata));
                var sorted = _.sortBy(weightdata, function(d) {
                    return new Date(d.lblDateData);
                });
                var result = [],
                    sorted1 = sorted;
                kony.print("::LIFETIME:: sorted1=" + JSON.stringify(sorted1));
                _.each(sorted, function(d) {
                    var date = new Date(d.lblDateData);
                    var monthrecords = _.filter(sorted1, function(dd) {
                        return new Date(dd.lblDateData).getMonth() == date.getMonth() && new Date(dd.lblDateData).getFullYear() == date.getFullYear();
                    });
                    if (monthrecords.length > 0) {
                        monthrecords[0]["isNWIAllowed"] = false;
                        if (monthrecords[0].lblWeightData == getLocalizedString("strNWI")) {
                            monthrecords[0].lblWeightData = "0";
                        }
                        monthrecords[0].btnNWI = {
                            text: getLocalizedString("strNWI"),
                            isVisible: false
                        };
                        result.push(monthrecords);
                        sorted1 = _.difference(sorted1, monthrecords);
                        kony.print("::LIFETIME:: Loop sorted1==" + JSON.stringify(sorted1));
                    }
                });
                dataSeg = _.flatten(result);
                kony.print("::LIFETIME:: After Change data = " + JSON.stringify(dataSeg));
                frmBatchAddMember.segAddBatchMembeProfileDetails.setData(dataSeg);
            }
            /*Change batchData with NWI Weights*/
            if (batchWeightData.length > 0) {
                _.each(batchWeightData, function(w) {
                    if (w.NoWeighIn == true) {
                        var lessDateWeights = _.filter(batchWeightData, function(a) {
                            return (new Date(a.WeighInDate).setHours(0, 0, 0) < new Date(w.WeighInDate).setHours(0, 0, 0) && a.NoWeighIn != true);
                        });
                        kony.print("::DJP:: After lessDateWeights === " + JSON.stringify(lessDateWeights));
                        w.Weight = parseFloat(lessDateWeights[lessDateWeights.length - 1].Weight).toFixed(1);
                    }
                });
            }
            kony.print("dataArr::: After" + dataArr);
            kony.print("NextDataIndex::: After" + NextDataIndex);
            kony.print("batch Data for weight === " + JSON.stringify(batchWeightData));
            popupAddWeigh.lblDOBInfo.text = "";
            popupAddWeigh.txtAddWeight.text = "";
            popupAddWeigh.dismiss();
            IsUpdateBatchWeightHistory = false;
        }
    } else {
        kony.print("EDIT PROFILE FLOW");
        glbIsWeightAdded = true;
        valid = new validationcls();
        var dataRow = {};
        var dataSegArr = frmEditMemberProfile.segEditMemberProfileDetails.data;
        if (dataSegArr != undefined && dataSegArr != null) {
            if (dataSegArr.length > 0) {
                for (i = dataSegArr.length - 1; i >= 0; i--) {
                    kony.print("weight data ===>" + dataSegArr[i].lblWeightData);
                    if (dataSegArr[i].lblWeightData != getLocalizedString("strNWI")) {
                        kony.print("inside weightData ===>" + dataSegArr[i].lblWeightData);
                        var OldWeight = dataSegArr[i].lblWeightData;
                        kony.print("OldWeight weightData ===>" + OldWeight);
                        break;
                    }
                }
            }
            kony.print("OldWeight==>>" + OldWeight);
        }
        var StartDateMember = glbStartDateMemberProfile;
        kony.print("::::StartDateMember=" + glbStartDateMemberProfile);
        var startWeighInDate = formattedDate(StartDateMember);
        kony.print("::::startWeighInDate =" + startWeighInDate);
        if (IsNWIInView) {
            var textWeight = OldWeight;
            var res = valid.checkForRequiredFields(popupAddWeigh.lblDOBInfo.text, "date.", "").checkforValidWeightDate(startWeighInDate);
        } else {
            var textWeight = checkUndefined(popupAddWeigh.txtAddWeight.text);
            var res = valid.checkForRequiredFields(popupAddWeigh.lblDOBInfo.text, "date.", "").validateWeight(popupAddWeigh.txtAddWeight.text).checkforValidWeightDate(startWeighInDate);
        }
        if (error != "") {
            displayPopupAlert(error);
            error = "";
        } else {
            kony.print("IsUpdateWeightHistory before condition" + IsUpdateWeightHistory);
            if (!IsUpdateWeightHistory) {
                var currDate = new Date(popupAddWeigh.lblDOBInfo.text);
                if (dataSegArr != undefined && dataSegArr != null && dataSegArr.length) {
                    for (i = dataSegArr.length - 1; i >= 0; i--) {
                        kony.print("::::dataSegArr[i].lblDateData=" + dataSegArr[i].lblDateData + " currDate=" + currDate);
                        if (ToCheckIfTheWeekIsSame(dataSegArr[i].lblDateData, currDate)) {
                            alertForMessages(kony.i18n.getLocalizedString("strMsgWeighDone"));
                            return;
                        }
                    }
                }
                kony.print("frmEditMemberProfile.lblHeightInfo.text==> " + frmEditMemberProfile.lblHeightInfo.text);
                var PickerHeightSelectedKeys = frmEditMemberProfile.lblHeightInfo.text;
                if (deviceLocale == "fr_FR") {
                    PickerHeightSelectedKeys = PickerHeightSelectedKeys.replace("cms", "");
                } else {
                    PickerHeightSelectedKeys = PickerHeightSelectedKeys.replace(getLocalizedString("strFeetAbbr"), "").trim();
                    PickerHeightSelectedKeys = PickerHeightSelectedKeys.replace(getLocalizedString("strInchesAbbr"), "").trim();
                }
                PickerHeightSelectedKeys = PickerHeightSelectedKeys.replace(/\s+/g, ' ');
                PickerHeightSelectedKeys = PickerHeightSelectedKeys.trim();
                kony.print("PickerHeightSelectedKeys --- " + PickerHeightSelectedKeys);
                var heightVals = PickerHeightSelectedKeys.split(" ");
                var hghtInMtrs = com.es.weighincalculations.ConvertHeight(heightVals);
                var ageval = getAgeFromDob(frmEditMemberProfile.lblDOBInfo.text);
                var gender = frmEditMemberProfile.cmbGender.selectedKey;
                kony.print("hghtInMtrs --- " + hghtInMtrs);
                if (textWeight != "") {
                    createWeightDetailsObject.Weight = parseFloat(textWeight);
                }
                if (dataSegArr != undefined && dataSegArr != null && dataSegArr.length) {
                    resWeekNumber = parseInt(dataSegArr.length);
                } else {
                    resWeekNumber = 0;
                }
                createWeightDetailsObject.WeekNumber = resWeekNumber;
                kony.print("parseInt(resWeekNumber)+parseInt(1)====>>>>" + parseInt(resWeekNumber) + parseInt(1));
                createWeightDetailsObject.MemberID = resMemberId;
                createWeightDetailsObject.DeviceID = gblDeviceID;
                kony.print("resMemberId in eventonclickToSaveweigh===>>>" + resMemberId);
                if (popupAddWeigh.lblDOBInfo.text != "") {
                    lastWeighDate = popupAddWeigh.lblDOBInfo.text;
                    var DateData = supportTime(new Date(popupAddWeigh.lblDOBInfo.text), "", "yyyy-mm-ddTHH:NN:SS");
                    kony.print("DateData in if==>>" + DateData);
                } else {
                    var DateData = supportTime(formattJsDefaultDate(), "", "yyyy-mm-ddTHH:NN:SS");
                    kony.print("DateData in else==>>" + DateData);
                    lastWeighDate = formattedDate(DateData);
                }
                createWeightDetailsObject.WeighInDate = DateData;
                createWeightDetailsObject.NoWeighIn = IsNWIInView;
                createWeightDetailsObject.MtngOccrID = (glbMeetingNum == "") ? 1 : glbMeetingNum; //ID field value of the meetings getall
                createWeightDetailsObject.LocationID = parseInt(glbLocationID);
                createWeightDetailsObject.EmpID = glbEmployeeId; //"anita.sado";
                createWeightDetailsObject.IsAtndgMeeting = false;
                createWeightDetailsObject.ManualWeighIn = true;
                var textWeightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(textWeight)); // added by PK convert weight in pound to KG
                kony.print("::PK:: pound to KG--" + textWeightInKG);
                createWeightDetailsObject.MeetingDate = checkValidString(glbMeetingDate) ? glbMeetingDate : "0001-01-01T00:00:00";
                kony.print("Maulik Coming Here... MEG-4870... " + ageval);
                if (IsBatchAddMember == FlowForScreens.BatchAddMember) ageval = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
                kony.print("Maulik Coming Here... MEG-4870... After the BatchAdd Form validartion... " + ageval);
                var DptValue = "";
                var WPA = " ";
                setDptWpa(textWeightInKG, hghtInMtrs, ageval, gender, "", function(dptVal, wpaVal) {
                    kony.print("SJ DPT:" + dptVal);
                    kony.print("SJ WPA:" + wpaVal);
                    DptValue = dptVal;
                    WPA = wpaVal;
                });
                createWeightDetailsObject.DailyPtTarget = DptValue;
                createWeightDetailsObject.WeeklyPointsAllowance = WPA;
                kony.print("1. The total WPA is." + JSON.stringify(WPA));
                createWeightDetailsObject.SessionNumber = glbSelectedMemberSessionNumber;
                //removed commented code
                if (DateData > glbMemberLastAttDate) {
                    glbMemberLastAttDate = DateData;
                }
                //Added By Praveen Kalal MEG-2925
                kony.print(":PK:DataArr----" + JSON.stringify(dataSegArr));
                var weighDates = _.map(dataSegArr, function(w) {
                    return new Date(w.LastWeighInDate);
                });
                kony.print(":PK:weighDates----" + JSON.stringify(weighDates));
                kony.print(":PK:new Date(DateData)----" + new Date(DateData));
                var currendatevalid = _.find(weighDates, function(d) {
                    return (new Date(DateData) < d);
                })
                kony.print("::PK--" + currendatevalid);
                if (currendatevalid == undefined && dataSegArr != undefined && dataSegArr != null && dataSegArr.length > 0) {
                    var goalwt = frmEditMemberProfile.txtGoalWeight.text;
                    var startwt = dataSegArr[0]['lblWeightData'];
                    var lastwt;
                    if (dataSegArr.length > 0) {
                        lastwt = dataSegArr[parseInt(dataSegArr.length) - 1]['lblWeightData'];
                    }
                    kony.print("::lastwt----+" + lastwt)
                    var weighDataArr = [];
                    weighDataArr.push(createWeightDetailsObject);
                    boMemberMilestone.getEligibleMilestoneByMemberId(toGetAchievedMilestoneForBatchAddAndAdd, weighDataArr, startwt, goalwt, lastwt);
                }
                // End by Praveen Kalal MEG-2925
                boMemberProfile.addWeighDetails(createWeightDetailsObject);
                var nwiskin = (IsNWIInView) ? "btnNoWeighInSelected" : "btnwwtxtSearchLocation";
                var weightEnt = (IsNWIInView) ? getLocalizedString("strNWI") : textWeight;
                var data = {
                    lblDateData: popupAddWeigh.lblDOBInfo.text,
                    LastWeighInDate: DateData,
                    lblWeightData: weightEnt,
                    isNWIAllowed: glbBatchAddToShowActionNWI
                };
                kony.print("frmEditMemberProfile.segEditMemberProfileDetails.data==>>" + frmEditMemberProfile.segEditMemberProfileDetails.data);
                if (dataSegArr != undefined && dataSegArr != null) {
                    var dataArr = frmEditMemberProfile.segEditMemberProfileDetails.data;
                    var NextDataIndex = parseInt(dataArr.length); //+parseInt(1);
                    kony.print("dataArr====>>>>" + dataArr);
                    kony.print("NextDataIndex====>>>>" + NextDataIndex);
                    frmEditMemberProfile.segEditMemberProfileDetails.addDataAt(data, NextDataIndex);
                } else {
                    kony.print("in else part");
                    frmEditMemberProfile.segEditMemberProfileDetails.setData([{
                        lblDateData: popupAddWeigh.lblDOBInfo.text,
                        LastWeighInDate: DateData,
                        lblWeightData: weightEnt,
                        isNWIAllowed: false
                    }]);
                }
                /*MEG-3919 Replace the Data with New Segment Data if liftime member after NWI changes*/
                var dataSeg = frmEditMemberProfile.segEditMemberProfileDetails.data;
                if (glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase()) {
                    kony.print("::LIFETIME:: dataSeg = " + JSON.stringify(dataSeg));
                    var weightdata = dataSeg;
                    _.each(weightdata, function(d) {
                        d.isNWIAllowed = true;
                    });
                    weightdata[0].isNWIAllowed = false; //First Weight
                    kony.print("::LIFETIME:: weightdata  =" + JSON.stringify(weightdata));
                    var sorted = _.sortBy(weightdata, function(d) {
                        return new Date(d.lblDateData);
                    });
                    var result = [],
                        sorted1 = sorted;
                    _.each(sorted, function(d) {
                        var date = new Date(d.lblDateData);
                        var monthrecords = _.filter(sorted1, function(dd) {
                            return new Date(dd.lblDateData).getMonth() == date.getMonth() && new Date(dd.lblDateData).getFullYear() == date.getFullYear();
                        });
                        if (monthrecords.length > 0) {
                            monthrecords[0]["isNWIAllowed"] = false;
                            result.push(monthrecords);
                            sorted1 = _.difference(sorted1, monthrecords);
                        }
                    });
                    dataSeg = _.flatten(result);
                    kony.print("::LIFETIME:: After Change data = " + JSON.stringify(dataSeg));
                    frmEditMemberProfile.segEditMemberProfileDetails.setData(dataSeg);
                }
                WeighAddedForThisWeek = true;
                IsNWIInView = false;
            } else {
                kony.print("IsUpdateWeightHistory in else" + IsUpdateWeightHistory);
                var updateObj = {};
                if (textWeight != "") {
                    updateObj.Weight = parseFloat(textWeight);
                }
                kony.print("LastWeighDate selected in segment when updating==>>" + LastWeighInSelectedDate);
                updateObj.MemberID = resMemberId;
                updateObj.WeighInDate = LastWeighInSelectedDate;
                updateObj.DeviceID = gblDeviceID;
                updateObj.MtngOccrID = (glbMeetingNum == "") ? 1 : glbMeetingNum;
                updateObj.NoWeighIn = IsNWIInView;
                updateObj.MeetingDate = checkValidString(glbMeetingDate) ? glbMeetingDate : "0001-01-01T00:00:00"; //supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                boMemberProfile.updateWeightDetails(updateObj);
                IsUpdateWeightHistory = false;
                var weighInDate = formattedDate(LastWeighInSelectedDate);
                weighInDate = changeDateFormate(weighInDate, kony.i18n.getLocalizedString("strDisplayDateFormat")) //** MEG 6386
                var nwiskin = (IsNWIInView) ? "btnNoWeighInSelected" : "btnwwtxtSearchLocation";
                var rowweightVal = (IsNWIInView) ? getLocalizedString("strNWI") : textWeight;
                var data = {
                    lblDateData: weighInDate,
                    LastWeighInDate: LastWeighInSelectedDate,
                    lblWeightData: rowweightVal
                };
                kony.print("selectedIndexforUpdate===>>" + selectedIndexforUpdate);
                frmEditMemberProfile.segEditMemberProfileDetails.setDataAt(data, selectedIndexforUpdate[1], selectedIndexforUpdate[0]);
                WeighAddedForThisWeek = false;
            }
            IsNWIInView = false;
            popupAddWeigh.lblDOBInfo.text = "";
            popupAddWeigh.txtAddWeight.text = "";
            popupAddWeigh.dismiss();
        }
    }
}

function addNWItoNextRcrdinBatchAdd(indexToStart, weightToChange) {
    kony.print("Weight to be chanaged " + weightToChange + " == from index : " + indexToStart);
    if (batchWeightData != null && batchWeightData.length > 0) {
        kony.print(" batchWeightData.length  is :: " + batchWeightData.length);
        for (var indx = indexToStart; indx < batchWeightData.length; indx++) {
            kony.print("NoWeighIn at index : " + indx + " === value :: " + batchWeightData[indx].NoWeighIn);
            if (batchWeightData[indx].NoWeighIn == true) {
                batchWeightData[indx].Weight = parseFloat(weightToChange);
            } else {
                break;
            }
        }
    }
}

function eventOnSaveReasonMemberShipType() {
    var updateObj = {};
    var textReason = checkUndefined(popupChangeMemberType.txtChangeMemberType.text);
    kony.print("textReason" + textReason);
    kony.print("eventOnSaveReasonMemberShipType gblSubType: " + gblSubType);
    if (gblSubType != "PAYG") {
        updateObj.IsPAYG = "false";
    } else {
        updateObj.IsPAYG = "true";
    }
    updateObj.MemberType = MemberValueEnum[7];
    updateObj.MemberID = resMemberId;
    updateObj.DeviceID = gblDeviceID;
    kony.print("textReason in if" + textReason);
    popupChangeMemberType.destroy();
    if (!IsNoMeetingSelected) {
        evenOnPostShowHomeScreen();
    } else {
        frmHomeScreenNoMeeting.show();
    }
    boMemberProfile.updateMemberDetails(updateObj);
}
var selectedIndexforUpdate = [];

function eventonRowClickSegWeighHistory() {
    if (frmEditMemberProfile.segEditMemberProfileDetails.selectedIndex[1] != 0) {
        selectedIndexforUpdate = frmEditMemberProfile.segEditMemberProfileDetails.selectedIndex;
        var length = frmEditMemberProfile.segEditMemberProfileDetails.data.length;
        LastWeighInSelectedDate = frmEditMemberProfile.segEditMemberProfileDetails.selectedItems[0].LastWeighInDate;
        LastWeightSelected = frmEditMemberProfile.segEditMemberProfileDetails.selectedItems[0].lblWeightData;
        kony.print("Selected Data == " + JSON.stringify(frmEditMemberProfile.segEditMemberProfileDetails.selectedItems));
        var selectedDate = new Date(changeDateformateFromInput(LastWeighInSelectedDate.split("T")[0]) + " 00:00:00");
        kony.print("selectedDate=" + selectedDate);
        var today = new Date();
        if (selectedDate.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) {
            //Cannot Edit Todays Weight
            //MEG-4034 Member Cant weigh in with todays date in edit profile.
            alertForMessages(getLocalizedString("strMsgCanNotEditTodayWeight"));
            kony.print("Cannot Edit Todays Weight");
            return;
        } else {
            var btnskin = (LastWeightSelected == 'NWI') ? "btnNoWeighInSelected" : "btnwwtxtSearchLocation";
            IsUpdateWeightHistory = true;
            var context = {
                "widget": frmEditMemberProfile.btnAdd,
                "anchor": "right",
                "sizetoanchorwidth": true
            };
            if (popupAddWeigh != undefined && popupAddWeigh != null) {
                popupAddWeigh.btnNWI.isVisible = true;
                popupAddWeigh.btnNWI.skin = btnskin;
                popupAddWeigh.vboxDOBSection.onClick = false;
                popupAddWeigh.lblDOBInfo.text = frmEditMemberProfile.segEditMemberProfileDetails.selectedItems[0].lblDateData;
                popupAddWeigh.txtAddWeight.text = frmEditMemberProfile.segEditMemberProfileDetails.selectedItems[0].lblWeightData;
                //MEG-3919 NWI not allowed for Lifetime member 
                if (glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase() && frmEditMemberProfile.segEditMemberProfileDetails.selectedItems[0].isNWIAllowed == false) {
                    //this was the first record of that month so dont allow nwi
                    popupAddWeigh.btnNWI.setEnabled(false);
                    popupAddWeigh.btnNWI.skin = "btnNoWeighInSelected";
                } else {
                    popupAddWeigh.btnNWI.setEnabled(true);
                    popupAddWeigh.btnNWI.skin = "btnwwtxtSearchLocation";
                }
                if (LastWeightSelected == 'NWI') {
                    IsNWIInView = true;
                    popupAddWeigh.txtAddWeight.setEnabled(false);
                } else {
                    popupAddWeigh.txtAddWeight.setEnabled(true);
                }
            }
            popupAddWeigh.show();
        }
    } else {
        IsUpdateWeightHistory = false;
        alertForMessages(kony.i18n.getLocalizedString("strUpdate1stWeg"));
    }
}
var selectedIndexforBatchUpdate = [];

function eventonClickBatchSegWeighHistory() {
    kony.print("Inside eventonClickBatchSegWeighHistory ");
    selectedIndexforBatchUpdate = frmBatchAddMember.segAddBatchMembeProfileDetails.selectedIndex;
    LastWeightSelected = frmBatchAddMember.segAddBatchMembeProfileDetails.selectedItems[0].lblWeightData;
    kony.print("Selected Data == " + JSON.stringify(frmBatchAddMember.segAddBatchMembeProfileDetails.selectedItems));
    var isBtnNWIVisible = frmBatchAddMember.segAddBatchMembeProfileDetails.selectedItems[0]["isNWIAllowed"];
    var btnskin = (LastWeightSelected == 'NWI' || isBtnNWIVisible == false) ? "btnNoWeighInSelected" : "btnwwtxtSearchLocation";
    kony.print("isBtnNWIVisible =" + isBtnNWIVisible);
    IsUpdateBatchWeightHistory = true;
    if (popupAddWeigh != undefined && popupAddWeigh != null) {
        //MEG - 3919- NWI not allowed
        if (isBtnNWIVisible == false) popupAddWeigh.btnNWI.setEnabled(false);
        else popupAddWeigh.btnNWI.setEnabled(true);
        //Added for MEG-3776
        if (frmBatchAddMember.segAddBatchMembeProfileDetails.selectedIndex[1] == 0) {
            popupAddWeigh.btnNWI.isVisible = false;
        } else {
            popupAddWeigh.btnNWI.isVisible = true;
        }
        //End for MEG-3776
        popupAddWeigh.btnNWI.skin = btnskin;
        popupAddWeigh.vboxDOBSection.onClick = false;
        popupAddWeigh.lblDOBInfo.text = frmBatchAddMember.segAddBatchMembeProfileDetails.selectedItems[0].lblDateData;
        popupAddWeigh.txtAddWeight.text = frmBatchAddMember.segAddBatchMembeProfileDetails.selectedItems[0].lblWeightData;
        if (LastWeightSelected == 'NWI') {
            IsNWIInView = true;
            popupAddWeigh.txtAddWeight.setEnabled(false);
        } else {
            IsNWIInView = false;
            popupAddWeigh.txtAddWeight.setEnabled(true);
        }
    }
    popupAddWeigh.show();
}

function BindWeighDataMemberProfileDetailsView(data, viewweighData) {
    kony.print("data Weightdata" + JSON.stringify(viewweighData));
    kony.print("data in c for ViewProfile" + JSON.stringify(data));
    frmViewMemberProfile.segMemberProfileDetails.setData(data);
    /*MEG-3919 Lifetime Member NWI not allowed in first week*/
    if (glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase()) {
        kony.print("::LIFETIME:: data = " + JSON.stringify(data));
        var weightdata = data;
        var sorted = _.sortBy(weightdata, function(d) {
            return new Date(d.lblDateData);
        });
        var result = [],
            sorted1 = sorted;
        _.each(sorted, function(d) {
            var date = new Date(d.lblDateData);
            var monthrecords = _.filter(sorted1, function(dd) {
                return new Date(dd.lblDateData).getMonth() == date.getMonth() && new Date(dd.lblDateData).getFullYear() == date.getFullYear();
            });
            if (monthrecords.length > 0) {
                monthrecords[0]["isNWIAllowed"] = false;
                result.push(monthrecords);
                sorted1 = _.difference(sorted1, monthrecords);
            }
        });
        data = _.flatten(result);
        kony.print("::LIFETIME:: After Change data = " + JSON.stringify(data));
    }
    var finalres = data.sort(function(a, b) {
        return new Date(a.lblDateData) - new Date(b.lblDateData);
    });
    kony.print("finalres in BindWeighDataMemberProfileDetailsView for EditProfile" + JSON.stringify(finalres));
    if (viewweighData.length > 0) {
        var WeighInfoLastRow = viewweighData[0];
        lastWeighDate = formattedDate(WeighInfoLastRow.LastWeighInDate);
        kony.print("WeighInfoLastRow.CurrentWeight=====Value in BindWeighDataMemberProfileDetailsView" + WeighInfoLastRow.lblCurrentWeightData);
        kony.print("WeighInfoLastRow.StartWeight=====Value in BindWeighDataMemberProfileDetailsView" + WeighInfoLastRow.lblStartWeightData);
        frmViewMemberProfile.lblStartWeightData.text = parseFloat(WeighInfoLastRow.lblStartWeightData).toFixed(1);
        frmViewMemberProfile.lblCurrentWeightData.text = parseFloat(WeighInfoLastRow.lblCurrentWeightData).toFixed(1); // WeighInfo.CurrentWeight;
        kony.print("BindWeighDataMemberProfileDetailsView WeighInfoLastRow.lblTotalChangeData: " + WeighInfoLastRow.lblTotalChangeData);
        var wChange = (parseFloat(WeighInfoLastRow.lblTotalChangeData) * (-1)).toFixed(1);
        kony.print("BindWeighDataMemberProfileDetailsView wChange: " + wChange);
        if (parseFloat(wChange) > 0) {
            frmViewMemberProfile.lblTotalChangeData.text = "+" + wChange + " " + getLocalizedString("strLbs");
            frmViewMemberProfile.lblTotalChangeData.skin = "lblRedBold";
        } else {
            frmViewMemberProfile.lblTotalChangeData.text = wChange + " " + getLocalizedString("strLbs");
            frmViewMemberProfile.lblTotalChangeData.skin = "lblHelveticaBoldGreen";
        }
        kony.print("BindWeighDataMemberProfileDetailsView wChange122: " + frmViewMemberProfile.lblTotalChangeData.text);
        frmViewMemberProfile.lblMeetingAttendedData.text = data.length;
        frmViewMemberProfile.lbl5GoalData.text = WeighInfoLastRow.lbl5GoalData;
        frmViewMemberProfile.lbl10GoalData.text = WeighInfoLastRow.lbl10GoalData;
        kony.print("WeighInfoLastRow.DailyPtTarget---->>>>.." + WeighInfoLastRow.lblCurrentDPTData);
        frmViewMemberProfile.lblCurrentDPTData.text = WeighInfoLastRow.lblCurrentDPTData;
        frmViewMemberProfile.lblWPAData.text = WeighInfoLastRow.lblWPAData;
        kony.print("DateData==>>" + DateData);
        var DateData = WeighInfoLastRow.lblDateData;
        resWeekNumber = WeighInfoLastRow.WeekNumber;
        kony.print("DateData==>>" + DateData);
        kony.print("resWeekNumber==>>" + resWeekNumber);
        kony.print("WeighInfoLastRow.WeekNumber in BindWeighDataMemberProfileDetailsView===>>" + WeighInfoLastRow.WeekNumber);
        if (WeighInfoLastRow.lblCurrentWeightData != null && WeighInfoLastRow.lblCurrentWeightData != 0) {
            eventonDoneTextAreaProcessMemberWeighCalculations(WeighInfoLastRow.lblCurrentWeightData, true);
        } else {
            if (WeighInfoLastRow.lblStartWeightData != null && WeighInfoLastRow.lblStartWeightData != 0) {
                eventonDoneTextAreaProcessMemberWeighCalculations(WeighInfoLastRow.lblStartWeightData, true);
            } else {
                kony.print("This means WeighInfoLastRow.StartWeight is either null of 0");
            }
        }
        kony.print("data====>>>>>" + data);
    }
    frmEditMemberProfile.segEditMemberProfileDetails.setData(finalres);
    removeProgressView();
}
var WeighingAgainInThisWeek = false;

function eventonClickAddWeightData() {
    IsViewMember = FlowForScreens.ViewMember;
    popupAddWeigh.btnNWI.skin = "btnwwtxtSearchLocation";
    popupAddWeigh.btnNWI.setEnabled(true);
    kony.print("eventonClickAddWeightData value for WeighInfoLastRow.Date==" + WeighInfoLastRow.Date);
    popupAddWeigh.show();
    popupAddWeigh.txtAddWeight.setEnabled(true);
}

function onEditProfilePopupOpen() {
    var isCCTranExist = false;
    boEnrollMember.getCCTranSalePaymentForMember("count", function(res) {
        kony.print("Res = " + JSON.stringify(res));
        if (res != null && res != undefined && res == true) {
            isCCTranExist = true;
        }
    });
    if (checkAppSettingEnable(Settings["SalesForce"]) && isCCTranExist && checkIfNetworkIsAvailable() && validateCCEnabledLocation()) {
        var data = [{
            "lblEdit": kony.i18n.getLocalizedString("strEditProfile")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeMemberStatus")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeTypeToLifetime")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeStartWeight")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strSendReceipt")
        }];
    } else {
        var data = [{
            "lblEdit": kony.i18n.getLocalizedString("strEditProfile")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeMemberStatus")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeTypeToLifetime")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeStartWeight")
        }];
    }
    if (in_array(deviceLocale, Countries["CA"])) {
        data = [{
            "lblEdit": kony.i18n.getLocalizedString("strEditProfile")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeMemberStatus")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeTypeToLifetime")
        }, {
            "lblEdit": kony.i18n.getLocalizedString("strChangeStartWeight")
        }];
    }
    popupEditMemberProfile.editMemberProfileSegment.setData(data);
    kony.print(" :::: outside");
    var context = {
        "widget": hboxMainMemberProfile.vboxEditPopup,
        "anchor": "left",
        "sizetoanchorwidth": true
    };
    popupEditMemberProfile.setContext(context);
    popupEditMemberProfile.show();
    kony.print(" :::: inside");
}

function onSelectingFromPopup() {
    var option = popupEditMemberProfile.editMemberProfileSegment.selectedIndex[1];
    kony.print("Inside Select pop up function:->");
    kony.print("option value===" + option);
    if (option == "0") //0== Edit Profile
    {
        kony.print("inside the edit");
        boMonitor.log("Edit Member Profile", "editMemberProfileSegment", "", FlowForMonitor.EditMember);
        popupEditMemberProfile.dismiss();
        frmEditMemberProfile.show();
        displayMemberProfileDetails(true, frmMemberProfileDetils_temp, false);
        kony.print("Inside Edit Profile function:->");
    } else if (option == "1") //1==Change Member Status
    {
        //Ami add - MEG-3798 - start
        if (selectedMemberData["MemberStatus"] == MemberStatusEnum[4]) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgMemberNotActive"));
        } else { //Ami add - MEG-3798 - end
            popupChangeMemberStatus.destroy();
            popupChangeMemberStatus.lblReasonForStatusChange.text = "";
            popupChangeMemberStatus.lblDuration.text = "";
            popupChangeMemberStatus.lblChangeMemberStatus.text = "";
            popupChangeMemberStatus.show();
            kony.print("resMemberShipStatus.toUpperCase()===" + resMemberShipStatus.toUpperCase());
            resMemberShipStatus = resTempMemberShipStatus;
            if (resMemberShipStatus.toUpperCase() == "INACTIVE") {
                popupChangeMemberStatus.hbox12443534676850739.isVisible = false;
                popupChangeMemberStatus.hbox12443534676077363.isVisible = false;
                currentstatusIndex = 1;
            } else {
                popupChangeMemberStatus.hbox12443534676850739.isVisible = true;
                popupChangeMemberStatus.hbox12443534676077363.isVisible = true;
                currentstatusIndex = 0;
            }
            popupEditMemberProfile.dismiss();
        }
    } else if (option == "2") //2==Change Member Type To Lifetime
    {
        //Getting type of member. If type is Lifetime then not allow to change the type.
        kony.print("=========isLifetime===========" + isLifetime);
        if (isLifetime) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgAlreadyLifetime"));
        } else if (!isMemberAcive) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMemberNotActiveMsg"));
        } else if (!isEligibleForLTInChangeMemberType) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgLTCriteria"));
        } else {
            popupChangeMemberType.destroy();
            popupChangeMemberType.txtChangeMemberType.text = "";
            var context1 = {
                "widget": frmViewMemberProfile.hboxSubHeader,
                "anchor": "bottom",
                "sizetoanchorwidth": true
            };
            popupChangeMemberType.setContext(context1);
            popupChangeMemberType.show();
            popupEditMemberProfile.dismiss();
        }
    } else if (option == "3") {
        popupEditMemberProfile.dismiss();
        popupChangeStartWeight.txtWeight.text = "";
        var context1 = {
            "widget": frmViewMemberProfile.hboxSubHeader,
            "anchor": "bottom",
            "sizetoanchorwidth": true
        };
        popupChangeStartWeight.setContext(context1);
        popupChangeStartWeight.show();
    } else if (option == "4") {
        kony.print("View profile SendReceipt");
        popupEditMemberProfile.dismiss();
        getCCTransactionsForMember();
    }
}

function activateMPfromMemberProfile() {
    if (checkIfNetworkIsAvailable()) {
        var alertConfig = {
            message: getLocalizedString("strMsgActivateMPPass"),
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: kony.i18n.getLocalizedString("strConfirm"),
            yesLabel: kony.i18n.getLocalizedString("strLblYes"),
            noLabel: kony.i18n.getLocalizedString("strLblNo"),
            alertHandler: function(response) {
                if (response == true) {
                    if (!isNaN(selectedMemberData["MemberID"]) && glbMemberActivationStatusInfo.isLocalyPreActivatedMP == false) { // member data synced
                        boActivation.activateMemberMPByWS(function() {
                            var memberInfoObj = {};
                            memberInfoObj.MemberID = glbMemberActivationStatusInfo.memberID;
                            memberInfoObj.CouponCode = glbMemberActivationStatusInfo.couponCode;
                            boActivation.getMemberActivationStatusFromDB(memberInfoObj, function(activationDataOfMember) { // get the updated activation status from DB
                                if (activationDataOfMember !== undefined) {
                                    setGlbMemberActivationStatusAndUpdateMPIcon(activationDataOfMember)
                                    kony.print("activateMPfromMemberProfile activationDataOfMember:: " + JSON.stringify(activationDataOfMember));
                                    kony.print("activateMPfromMemberProfile glbMemberActivationStatusInfo:: " + JSON.stringify(glbMemberActivationStatusInfo));
                                }
                            });
                        });
                    } else { //local member not synced yet 
                        if (!IsSyncRunning) {
                            kony.print("Activating MP..");
                            IsFromLocationSelected = false;
                            isSyncForActivation = true;
                            isSynForMPActivationFromProfile = true;
                            syncStartSession();
                        } else {
                            alertForMessages("Sync is already running in background, please try after sometime");
                        }
                    }
                } else {}
            }
        };
        var psConfig = {};
        var mpActivate = kony.ui.Alert(alertConfig, psConfig);
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strInternateConnection"));
    }
}

function onDoneTextChangeStartWeight() {
    if (checkValidString(popupChangeStartWeight.txtWeight.text)) {
        var rndWeight = parseFloat(popupChangeStartWeight.txtWeight.text);
        popupChangeStartWeight.txtWeight.text = rndWeight.toFixed(1);
    }
}

function onDoneTextChangeGoalWeight() {
    if (checkValidString(popupGoalWeight.textareaGoalweight.text)) {
        var rndWeight = parseFloat(popupGoalWeight.textareaGoalweight.text);
        popupGoalWeight.textareaGoalweight.text = rndWeight.toFixed(1);
    }
}

function onClickSavePopupChangeStartWeight() {
    var startweight = popupChangeStartWeight.txtWeight.text;
    var valid = new validationcls();
    var res = valid.checkForRequiredFields(popupChangeStartWeight.txtWeight.text, getLocalizedString("strLblStartWeight")).validateWeight(startweight).isValid();
    if (res) {
        var updateObj = {};
        updateObj.StartWeight = parseFloat(startweight);
        updateObj.MemberID = checkValidString(resMemberId) ? resMemberId : glbMemberId;
        boMemberProfile.updateMemberStartWeightDetails(updateObj, function() {
            //popupChangeStartWeight.dismiss();
            gblStartWeightPM = parseFloat(startweight);
            glbSelectedMemberData.StartWeight = parseFloat(startweight);
            //Change to 1 - if member mtngoccrid other than present mtngoccrid
            glbSelectedMemberMtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
            selectedMemberData.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
            selectedMemberData.StartWeight = parseFloat(startweight);
            kony.print("glbSelectedMemberData=" + JSON.stringify(glbSelectedMemberData));
            if (kony.application.getCurrentForm().id == frmViewMemberProfile.id) {
                frmMemberProfileSearch.segMemberProfileSearch.setDataAt(glbSelectedMemberData, glbSelectedMemberSearchIndex);
                frmViewMemberProfile.lblStartWeightData.text = parseFloat(startweight).toFixed(1);
                frmViewMemberProfile.lbl5GoalData.text = com.es.weighincalculations.CalculateGoalWeight(parseFloat(startweight), "5")
                frmViewMemberProfile.lbl10GoalData.text = com.es.weighincalculations.CalculateGoalWeight(parseFloat(startweight), "10")
                kony.print("::00::glbLastWeightOfSelectedMember=" + glbLastWeightOfSelectedMember);
                var wChange = (parseFloat(parseFloat(startweight) - glbLastWeightOfSelectedMember) * (-1)).toFixed(1);
                kony.print("::00::BindWeighDataMemberProfileDetailsView wChange: " + wChange);
                if (parseFloat(wChange) > 0) {
                    frmViewMemberProfile.lblTotalChangeData.text = "+" + wChange + " " + getLocalizedString("strLbs");
                    frmViewMemberProfile.lblTotalChangeData.skin = "lblRedBold";
                } else {
                    frmViewMemberProfile.lblTotalChangeData.text = wChange + " " + getLocalizedString("strLbs");
                    frmViewMemberProfile.lblTotalChangeData.skin = "lblHelveticaBoldGreen";
                }
            } else if (kony.application.getCurrentForm().id == frmProcessMember.id) {
                boEnrollMember.getAvgWeightLossOfMember(glbMemberId);
                var startWeightInLbs = gblStartWeightPM;
                var roundstartweightInLbs = com.es.weighincalculations.RoundWeight(startWeightInLbs);
                kony.print("roundstartweightInLbs----->>>" + roundstartweightInLbs);
                var startweightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundstartweightInLbs));
                kony.print("startweightInKG----->>>" + startweightInKG);
                var GoalFive = com.es.weighincalculations.CalculateGoalWeight(parseFloat(roundstartweightInLbs), "5");
                frmProcessMember.lbl5GoalTargetInfo.text = GoalFive.toString() + " " + UnitText;
                var GoalTen = com.es.weighincalculations.CalculateGoalWeight(parseFloat(roundstartweightInLbs), "10");
                frmProcessMember.lbl10GoalTargetInfo.text = GoalTen.toString() + " " + UnitText;
                var txtAreaWeightProcess = frmProcessMember.txtAreaWeightProcess.text;
                kony.print("txtAreaWeightProcess in callbackAfterMilestoneAchieved " + txtAreaWeightProcess);
                roundWeightPM = com.es.weighincalculations.RoundWeight(txtAreaWeightProcess);
                if (deviceLocale == "fr_FR") {
                    var weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeightPM));
                    var TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startweightInKG, weightInKG);
                    kony.print("TotalWeightLoss in fr_FR----->>>" + TotalWeightLoss);
                } else {
                    var weightInKG = (parseFloat(roundWeightPM)); //this will keep the value as lbs only
                    var TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startWeightInLbs, weightInKG);
                    kony.print("TotalWeightLoss in en_US----->>>" + TotalWeightLoss);
                }
                TotalWeightLoss = parseFloat(TotalWeightLoss) * (-1);
                kony.print("TotalWeightLoss----->>>" + TotalWeightLoss);
                if (parseFloat(TotalWeightLoss) > 0) {
                    kony.print("inside positive frmProcessMember.lblTotalWeightChangeInfo.skin " + frmProcessMember.lblTotalWeightChangeInfo.skin);
                    frmProcessMember.lblTotalWeightChangeInfo.text = "+" + parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
                    frmProcessMember.lblTotalWeightChangeInfo.skin = "lblRedBold";
                } else {
                    frmProcessMember.lblTotalWeightChangeInfo.skin = "lblHelveticaBoldGreen";
                    frmProcessMember.lblTotalWeightChangeInfo.text = parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
                }
                lbsToNextMilestone();
            }
        });
    }
}

function onSelectingFromPopupPhoneType() {
    var option = popupPhoneType.phoneTypeSegment.selectedItems[0]["lblEdit"];
    frmEditMemberProfile.lblPhoneTypeData.text = option;
    frmBatchAddMember.lblPhoneTypeData.text = option;
    popupPhoneType.dismiss();
    kony.print("Inside Select pop up function:->");
}

function eventOnClickExpiryDateSectionEditProfilePage() {
    isExpirationDate = true;
    var context1 = {
        "widget": frmEditMemberProfile.vboxExpirationDate,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupDateOfBirth.setContext(context1);
    eventinitExpirationDatePopUp();
    popupDateOfBirth.show();
}

function eventOnClickDOBSectionEditProfilePage() {
    isExpirationDate = false;
    var context = {
        "widget": frmEditMemberProfile.hboxDOBSection1,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupDateOfBirth.setContext(context);
    if (frmEditMemberProfile.lblDOBInfo.text == "") {
        eventinitDOBPopUp("");
    } else {
        eventinitDOBPopUp(frmEditMemberProfile.lblDOBInfo.text);
    }
    popupDateOfBirth.show();
}

function eventOnClickHeightSectionEditProfilePage() {
    if (deviceLocale == "fr_FR") {
        popupHeight.pckrSelectHeight.masterData = heightFR;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightFR;
    } else {
        popupHeight.pckrSelectHeight.masterData = heightUS;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightUS;
    }
    var context = {
        "widget": frmEditMemberProfile.hboxHeight,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupHeight.setContext(context);
    popupHeight.show();
}

function eventOnClickSubTypeSectionEditProfilePage() {
    if (glbLocationTypeId == AT_WORK_LOCATION_TYPE_ID) {
        alertForMessages(kony.i18n.getLocalizedString("strMsgLocationIsAtWork"));
    } else {
        var context = {
            "widget": frmEditMemberProfile.hboxSubType,
            "anchor": "bottom",
            "sizetoanchorwidth": false
        };
        popupSubscriptionType.setContext(context);
        popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(6);
        popupSubscriptionType.show();
    }
}

function eventOnClickCellTypeSectionEditProfilePage() {
    var context = {
        "widget": frmEditMemberProfile.vboxPhone,
        "anchor": "right",
        "sizetoanchorwidth": false
    };
    popupPhoneType.setContext(context);
    popupPhoneType.show();
}

function eventOnClickState1SectionEditProfilePage() {
    displayStatePopup(frmEditMemberProfile.hboxState, "bottom", false)
}

function eventOnClickState2SectionEditProfilePage() {
    displayStatePopup(frmEditMemberProfile.hboxStateBilling, "bottom", false)
}

function eventOnClickStateSearchResult() {
    gblIsMemberSearchPage = true;
    var context = {
        "widget": frmMemberProfileSearch.hboxState,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupStateRefineSearch.setContext(context);
    popupStateRefineSearch.show();
}

function eventonSlideswitchOffersEditProfile() {
    if (frmEditMemberProfile.switchOffers.selectedIndex == 0) {
        frmEditMemberProfile.imgEmail.setVisibility(true);
        validateEmailEP = true;
    } else {
        if (frmEditMemberProfile.lblSubTypeInfo.text != 'Monthly Pass') {
            frmEditMemberProfile.imgEmail.setVisibility(false);
        }
        validateEmailEP = false;
    }
    kony.print("validateEmailEP---->>>>" + validateEmailEP);
}

function eventonSlideswitchReceiveCouponsEditProfile() {
    kony.print("swtch.selectedIndex===>>" + frmEnrollReturningMember.switchReceiveCoupons.selectedIndex);
    if (frmEditMemberProfile.switchReceiveCoupons.selectedIndex == 0) {
        IsswitchReceiveCouponsEP = true;
    } else {
        IsswitchReceiveCouponsEP = false;
    }
    kony.print("IsswitchReceiveCouponsEP---->>>>" + IsswitchReceiveCouponsEP);
}

function eventonSlideswitchParticipateSurveysEditProfile() {
    if (frmEditMemberProfile.switchParticipateSurveys.selectedIndex == 0) {
        IsswitchParticipateSurveysEP = true;
    } else {
        IsswitchParticipateSurveysEP = false;
    }
    kony.print("IsswitchParticipateSurveysEP---->>>>" + IsswitchParticipateSurveysEP);
}

function eventonSlideswitchReceiveMsgsEditProfile() {
    if (frmEditMemberProfile.switchReceiveMsgs.selectedIndex == 0) {
        IsswitchReceiveMsgsEP = true;
    } else {
        IsswitchReceiveMsgsEP = false;
    }
    kony.print("IsswitchReceiveMsgsEP---->>>>" + IsswitchReceiveMsgsEP);
}

function eventonSlideswitchReceiveCallsEditProfile() {
    if (frmEditMemberProfile.switchReceiveCalls.selectedIndex == 0) {
        IsswitchReceiveCallsEP = true;
    } else {
        IsswitchReceiveCallsEP = false;
    }
    kony.print("IsswitchReceiveCallsEP---->>>>" + IsswitchReceiveCallsEP);
}

function eventonSlideswitchSameAsMailingAdd() {
    if (frmEditMemberProfile.switchMailingAdd.selectedIndex == 0) {
        IsSameAsMailingAdd = true;
        frmEditMemberProfile.txtBillingAdd1.text = frmEditMemberProfile.txtAddr1.text;
        frmEditMemberProfile.txtBillingAddr2.text = frmEditMemberProfile.txtAddr2.text;
        frmEditMemberProfile.txtBillingCity.text = frmEditMemberProfile.txtCity.text;
        frmEditMemberProfile.lblBillingStateInfo.text = frmEditMemberProfile.lblStateInfo.text;
    } else {
        IsSameAsMailingAdd = false;
    }
    kony.print("IsSameAsMailingAdd in Edit profile---->>>>" + IsSameAsMailingAdd);
}
//This function is called on Link/Unlink button tap of Edit profile screen DJP
function eventOnClickbtnLinkUnlink() {
    if (frmEditMemberProfile.btnLinkUnlink.text == getLocalizedString("strLink")) {
        //Link Member - Show LinkMember popup
        popupLinkMember.segLinkMember.removeAll();
        popupLinkMember.txtSearch.text = "";
        popupLinkMember.lblNoMember.text = ""; //For solving MEG 2576
        popupLinkMember.lblNoMember.setVisibility(false);
        popupLinkMember.segLinkMember.setVisibility(false);
        popupLinkMember.hbxTableTitle.setVisibility(false);
        popupLinkMember.show();
    } else {
        //Unlink Member
        linkChangeDetected = true;
        frmEditMemberProfile.btnLinkUnlink.text = getLocalizedString("strLink");
        currentMemberLinkValues.LinkType = "UnLink";
        currentMemberLinkValues.IsLink = 'false';
        glbLinkType = "UnLink";
    }
}
//This function is called on Save button tap of Edit profile screen
function UpdateMemberProfile() {
    var ageVal;
    ageVal = getAgeFromDob(frmEditMemberProfile.lblDOBInfo.text);
    kony.print("getAgeFromDob0000000000000000000000000000" + ageVal);
    if (ageVal < 13) {
        alertForMessages(kony.i18n.getLocalizedString("strValidAgeAlert"));
        return;
    }
    var isValid = validateMemberDetails();
    if (isValid) {
        if (frmEditMemberProfile.lblSubTypeInfo.text == "Monthly Pass") {
            boEnrollMember.checkForValidMP("", "", "", "", "", "", "", true, successMonthlyCheckInEditProfile);
        } else {
            successMonthlyCheckInEditProfile();
        }

        function successMonthlyCheckInEditProfile() {
            kony.print("is Valid");
            var updateObj = {};
            glbFormName.lblSubType.text = "";
            var DOBinTFormat = supportTime(new Date(frmEditMemberProfile.lblDOBInfo.text), "", "yyyy-mm-ddTHH:NN:SS");
            updateObj.DateOfBirth = DOBinTFormat;
            updateObj.DeviceID = gblDeviceID;
            updateObj.Email = frmEditMemberProfile.txtEmail.text;
            updateObj.EmpID = glbEmployeeId;
            updateObj.FirstName = frmEditMemberProfile.txtFirstName.text;
            updateObj.LastName = frmEditMemberProfile.txtLastName.text;
            updateObj.Gender = frmEditMemberProfile.cmbGender.selectedKey.toString();
            //Commented for MEG-5954 
            /*var pickerHeightSelectedKeys = popupHeight.pckrSelectHeight.selectedKeys; ///when coming from Db height is assigned to label in that case need to handle this
            kony.print("pickerHeightSelectedKeys===>>" + pickerHeightSelectedKeys)
            kony.print("frmEditMemberProfile.lblHeightInfo.text===>>>" + frmEditMemberProfile.lblHeightInfo.text);
            if (pickerHeightSelectedKeys == "") {
                heightinInches = gblHeightPM;
                kony.print("heightinInches===when null>>>>" + heightinInches);
            } else {
                heightInMeters = com.es.weighincalculations.ConvertHeight(pickerHeightSelectedKeys);
                kony.print("heightInMeters===when picker not null>>>>" + heightInMeters);
                heightinInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
                kony.print("heightinInches===when picker not null>>>>" + heightinInches);
            }*/
            //Added for MEG-5954 
            var hgt = (frmEditMemberProfile.lblHeightInfo.text).split(" ");
            var heightArr = [];
            heightArr.push(hgt[0]);
            heightArr.push(hgt[2]);
            kony.print("PK::MEG-5954  :: UpdateMemberProfile heightArr==" + heightArr);
            heightInMeters = com.es.weighincalculations.ConvertHeight(heightArr);
            heightinInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
            kony.print("PK::MEG-5954  :: UpdateMemberProfile heightinInches==" + heightinInches);
            //End MEG-5954
            updateObj.Height = Math.round(heightinInches);
            if (frmEditMemberProfile.lblSubTypeInfo.text == "20 Week Pass") {
                kony.print("IS edit memberpro===>");
                var obj = getSubscriptionData(frmEditMemberProfile.txtSubID.text);
                updateObj.ExpirationDate = supportTime(frmEditMemberProfile.lblExpDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
                kony.print("IS edit expdate===>" + updateObj.ExpirationDate);
                updateObj.CouponCode = obj.CouponCode;
                updateObj.LastUsedDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                updateObj.ProductID = 1;
                updateObj.SubscriptnID = 0;
                updateObj.SubscriptnType = MemberSubscriptionTypeEnumBatch[frmEditMemberProfile.lblSubTypeInfo.text]; //frmCheckout.lblSubType.text;
                updateObj.IsPAYG = "false";
            } else if (frmEditMemberProfile.lblSubTypeInfo.text != kony.i18n.getLocalizedString("strPayg") && !glbIsSelectedMemberExpired) {
                var obj = getSubscriptionData(frmEditMemberProfile.txtSubID.text);
                updateObj.ExpirationDate = supportTime(frmEditMemberProfile.lblExpDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS"); //obj.ExpirationDate;
                updateObj.CouponCode = obj.CouponCode;
                updateObj.LastUsedDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                updateObj.ProductID = 1;
                updateObj.SubscriptnID = 0;
                updateObj.SubscriptnType = MemberSubscriptionTypeEnumBatch[frmEditMemberProfile.lblSubTypeInfo.text]; //glbFormName.lblSubType.text;
                updateObj.IsPAYG = "false";
            } else {
                updateObj.ExpirationDate = ""; // Added as for "PAYG" , no expiration date is needed.. [MEG-5313]
                updateObj.CouponCode = "";
                updateObj.LastUsedDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                updateObj.ProductID = 1;
                updateObj.SubscriptnID = 0;
                updateObj.SubscriptnType = "";
                updateObj.IsPAYG = "true";
            }
            updateObj.MemberID = resMemberId;
            kony.print("updateObj.MemberID>>>>" + updateObj.MemberID);
            kony.print("resMemberId--->>>+++++______" + resMemberId);
            var currentMeetingDate = updateObj.MeetingDate;
            //Change to 1 - if member mtngoccrid other than present mtngoccrid
            updateObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
            updateObj.MeetingId = glbMeetingNum;
            updateObj.LocationID = glbLocationID;
            updateObj.GoalWeight = (frmEditMemberProfile.txtGoalWeight.text > 0) ? parseFloat(frmEditMemberProfile.txtGoalWeight.text) : 0;
            updateObj.RegNumber = frmEditMemberProfile.txtMemberId.text;
            //Added for 4513
            updateObj.PersonalGoalWeight = (frmEditMemberProfile.txtPersonalGoalWeight.text > 0) ? parseFloat(frmEditMemberProfile.txtPersonalGoalWeight.text).toFixed(1) : "";
            /*Change by: Pratik Kagda
            MEG-3996 - For edit member with no meeting, meeting occ Id should be 1 */
            kony.print("MEG-3996, value for glbMeetingNumb " + glbMeetingNum);
            if (glbMeetingNum == "") {
                updateObj.MtngOccrID = 1;
            }
            /*Add Members Previous Values of Missed Week Information*/
            updateObj.ReedeemedPasses = glbRedeemedPasses;
            updateObj.RedeemedDate = glbRedeemedDate;
            updateObj.IsDateRedeemed = glbIsDateRedeemed;
            updateObj.MissWeekPasses = glbMissWeekPasses;
            var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            updateObj.MemberStatus = MemberStatusEnum[1];
            kony.print(frmEditMemberProfile.lblStateInfo.text + "Statedata====" + returnStateIDByName(frmEditMemberProfile.lblStateInfo.text));
            updateObj.ShippingState = returnStateIDByName(frmEditMemberProfile.lblStateInfo.text);
            updateObj.ShippingCity = frmEditMemberProfile.txtCity.text;
            updateObj.ShippingAddr1 = decodeSpecialCharacters(frmEditMemberProfile.txtAddr1.text);
            updateObj.ShippingAddr2 = decodeSpecialCharacters(frmEditMemberProfile.txtAddr2.text);
            updateObj.ShippingZipCode = frmEditMemberProfile.txtZip.text;
            updateObj.Phone1 = frmEditMemberProfile.txtPhone.text;
            kony.print("Edit phone number:0->>>" + updateObj.Phone1);
            //Added by Shobhit for MEG-1960
            kony.print("Phone type in App: " + frmEditMemberProfile.lblPhoneTypeData.text);
            switch (frmEditMemberProfile.lblPhoneTypeData.text) {
                case getLocalizedString("strPhoneTypeHome"):
                    updateObj.PhoneType1 = phoneTypeValueEnum[1];
                    break;
                case getLocalizedString("strPhoneTypeWork"):
                    updateObj.PhoneType1 = phoneTypeValueEnum[7];
                    break;
                case getLocalizedString("strPhoneTypeCell"):
                    updateObj.PhoneType1 = phoneTypeValueEnum[8];
                    break;
                default:
                    break;
            }
            updateObj.DontCnctSMS = receiveSwitchFlag(frmEditMemberProfile.switchReceiveMsgs.selectedIndex);
            updateObj.DontSendCoupon = receiveSwitchFlag(frmEditMemberProfile.switchReceiveCoupons.selectedIndex);
            updateObj.DontRecvCalls = receiveSwitchFlag(frmEditMemberProfile.switchReceiveCalls.selectedIndex);
            updateObj.DontContByEmail = receiveSwitchFlag(frmEditMemberProfile.switchOffers.selectedIndex);
            updateObj.DontSendCard = receiveSwitchFlag(frmEditMemberProfile.switchParticipateSurveys.selectedIndex);
            updateObj.DontCnctPhone = receiveSwitchFlag(frmEditMemberProfile.switchParticipateSurveys.selectedIndex); //MEG-3733
            updateObj.ProgramDuration = "0";
            if (glbIsWeightAdded) {
                updateObj.LastAttendanceDate = entryDate;
                glbIsWeightAdded = false;
            }
            /*
             * LINK - UNLINK
             * linkChangeDetected - flag is set when user selects a user name form popup DJP
             */
            if (linkChangeDetected) {
                updateObj.IsLink = currentMemberLinkValues.IsLink;
                updateObj.LinkType = currentMemberLinkValues.LinkType;
                updateObj.EmailID = currentMemberLinkValues.EmailID;
                updateObj.EnterpriseID = currentMemberLinkValues.EnterpriseID;
                updateObj.UserName = decodeSpecialCharacters(currentMemberLinkValues.UserName);
                glbLinkType = currentMemberLinkValues.LinkType;
            }
            linkChangeDetected = false;
            updateObj.IncompleteData = checkForMemberInCompleteProfile(updateObj, true); //!inCompleteFlag;
            kony.print("inside UpdateProfile" + JSON.stringify(updateObj));
            boMemberProfile.updateMemberDetails(updateObj, successUpdateAfterEdit);

            function successUpdateAfterEdit() {
                if (!IsNoMeetingSelected) {
                    evenOnPostShowHomeScreen();
                } else {
                    frmHomeScreenNoMeeting.show();
                }
                boMonitor.log("Save Member Profile", "vboxDoneImage", updateObj, FlowForMonitor.EditMember, true);
            }
        }
    }
}

function showViewMemberProfileScreenAfterUpdate() {
    ClearEditMemberFeilds();
    //selectedMemberData is global, so get all new fresh data and populate the view member screen
    glbMemberId = selectedMemberData["MemberID"];
    gblStartWeightPM = selectedMemberData["StartWeight"];
    gblGoalWeightPM = selectedMemberData["GoalWeight"];
    glbCouponCode = selectedMemberData["CouponCode"];
    var flowforcart = selectedMemberData["FlowForCart"];
    kony.print("glbCouponCode:>GLB COUPON CODE-->" + glbCouponCode);
    kony.print("IsViewMember in onSelectRowCheckedInMember==>>>" + IsViewMember + " MemberStatus is " + selectedMemberData["MemberStatus"]);
    glbSelectedMemberSessionNumber = checkValidString(selectedMemberData["SessionNumber"]) ? selectedMemberData["SessionNumber"] : 1; //fresh sart- 116
    if (selectedMemberData["MemberStatus"] == MemberStatusEnum[3]) {
        kony.print("Terminated member");
        frmViewMemberProfile.vboxPaymentSection.isVisible = true;
        frmViewMemberProfile.vboxWeighSection.isVisible = false;
        hboxMainMemberProfile.image212443534675273874.src = "icn_edit_profile.png";
        hboxMainMemberProfile.vboxEditPopup.onClick = false;
    } else {
        kony.print("else member");
        frmViewMemberProfile.vboxPaymentSection.isVisible = false;
        frmViewMemberProfile.vboxWeighSection.isVisible = true;
        if (flowforcart == true) {
            frmViewMemberProfile.imgWeigh.src = "icn_shopping_cart.png";
        } else {
            frmViewMemberProfile.imgWeigh.src = "icn_weigh.png";
        }
        hboxMainMemberProfile.image212443534675273874.src = "icn_action_menu_header.png";
        hboxMainMemberProfile.vboxEditPopup.onClick = onEditProfilePopupOpen;
    }
    boMemberProfile.getSelectedMemberDetailsFromDeviceMemberID(glbMemberId);
}

function ClearEditMemberFeilds() {
    frmEditMemberProfile.lblSubTypeInfo.text = "";
    hiddenMemberSubscription = "";
    frmEditMemberProfile.txtAddr1.text = "";
    frmEditMemberProfile.txtAddr2.text = "";
    frmEditMemberProfile.lblPhoneTypeData.text = "";
    frmEditMemberProfile.txtGoalWeight.text = "";
    frmEditMemberProfile.txtSubID.text = "";
    frmEditMemberProfile.lblExpDateInfo.text = "";
    frmEditMemberProfile.txtCity.text = "";
    frmEditMemberProfile.lblStateInfo.text = "";
    frmEditMemberProfile.lblHeightInfo.text = "";
    frmEditMemberProfile.lblDOBInfo.text = "";
    frmEditMemberProfile.txtZip.text = "";
    frmEditMemberProfile.txtEmail.text = "";
}

function createStateLookUp() {
    var whereClause = " where CountryID='" + getCountryID() + "' order by stateABBR asc";
    kony.print("IN createStateLookUp" + whereClause);

    function getStateLookUpSuccessCallback(res) {
        kony.print(getMessageTemplate("addSuccess", "StatesLookup"), "info")
        kony.print("IN getStateLookUpSuccessCallback" + res.length);
        if (res.length > 0) {
            boLocation.getStatesData();
        }
    }
    com.kony.WeightWatchers.ProductSyncScope.StatesLookup.find(whereClause, getStateLookUpSuccessCallback, eventErrorCallBack)
}

function eventonDoneReasonForStatusChange() {
    popupChangeMemberStatus.lblReasonForStatusChange.text = popupReasonForStatusChange.pickerReasonForStatusChange.selectedKeyValues[0][1];
    popupReasonForStatusChange.dismiss();
}

function eventonClickDoneDurationPopUp() {
    kony.print("popupDuration.calDuration.date-->>" + popupDuration.calDuration.date);
    if (popupDuration.calDuration.date == null) {
        fortnightAway = new Date();
        date = fortnightAway.getDate();
        mon = fortnightAway.getMonth() + 1;
        year = fortnightAway.getFullYear();
        kony.print(date + "" + mon + "" + year);
        kony.print("MyDateString" + MyDateString);
        var MyDateString = ('0' + (fortnightAway.getMonth() + 1)).slice(-2) + '/' + ('0' + fortnightAway.getDate()).slice(-2) + '/' + fortnightAway.getFullYear();
        kony.print("MyDateString" + MyDateString);
        if (deviceLocale == "fr_FR") {
            popupChangeMemberStatus.lblDuration.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString('strDisplayDateFormat')); //** MEG 6386
        } else {
            popupChangeMemberStatus.lblDuration.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString('strDisplayDateFormat')); //** MEG 6386 //mon+ "/" +date  + "/" + year;
        }
    } else {
        if (deviceLocale == "fr_FR") {
            popupChangeMemberStatus.lblDuration.text = changeDateFormate(popupDuration.calDuration.date, kony.i18n.getLocalizedString('strDisplayDateFormat')); //** MEG 6386 
        } else {
            popupChangeMemberStatus.lblDuration.text = changeDateFormate(popupDuration.calDuration.date, kony.i18n.getLocalizedString('strDisplayDateFormat')); //** MEG 6386//mon+ "/" +date  + "/" + year;
        }
    }
    popupDuration.dismiss();
}

function eventonClickVboxReasonForStatusChange() {
    var context = {
        "widget": popupChangeMemberStatus.vboxReason,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupReasonForStatusChange.setContext(context);
    popupReasonForStatusChange.show();
}

function eventonClickhboxDurationSection() {
    popupDuration.calDuration.clear();
    var context = {
        "widget": popupChangeMemberStatus.vboxDuration,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupDuration.setContext(context);
    popupDuration.show();
}

function eventonClickhboxMemberStatusSection() {
    popupChangeMemberStatus.isModal = false;
    var context = {
        "widget": popupChangeMemberStatus.hboxSubscriptionTypeSection,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    var BindSegMentData = [];
    popupChangeMemberStatusTransition.segMemberStatus.widgetDataMap = {
        lblStatus: "lblStatus",
        imgStatus: "imgStatus"
    };
    kony.print("resMemberShipStatus==>>" + resMemberShipStatus);
    kony.print("currentstatusIndex==>>" + currentstatusIndex);
    if (resMemberShipStatus.toUpperCase() == "ACTIVE" && currentstatusIndex == 0) {
        BindSegMentData = [{
            lblStatus: getLocalizedString("strActive"),
            imgStatus: "icn_active_member.png",
            membertype: "1"
        }, {
            lblStatus: getLocalizedString("strInactive"),
            imgStatus: "",
            membertype: "2"
        }];
    } else if (resMemberShipStatus.toUpperCase() == "INACTIVE" && currentstatusIndex == 1) {
        BindSegMentData = [{
            lblStatus: getLocalizedString("strActive"),
            imgStatus: "",
            membertype: "1"
        }, {
            lblStatus: getLocalizedString("strInactive"),
            imgStatus: "icn_active_member.png",
            membertype: "2"
        }];
    }
    kony.print("BindSegmentData == " + JSON.stringify(BindSegMentData));
    popupChangeMemberStatusTransition.segMemberStatus.setData(BindSegMentData);
    popupChangeMemberStatusTransition.setContext(context);
    popupChangeMemberStatusTransition.show();
}

function eventonClickDoneChangeMemStatus() {
    valid = new validationcls();
    var res = valid.checkForRequiredFields(popupChangeMemberStatus.lblChangeMemberStatus.text, "MemberStatus", "").checkForRequiredFields(popupChangeMemberStatus.lblDuration.text, "Duration", "").isValid();
    if (res) {}
}

function onReEnrollEditProfilePopupOpen() {
    kony.print(" :::: outside");
    if (!IsNoMeetingSelected) {
        var context = {
            "widget": hboxMainMemberProfile.vboxEditPopup,
            "anchor": "left",
            "sizetoanchorwidth": true
        };
        popupReEnrollEditProfile.setContext(context);
        popupReEnrollEditProfile.show();
        kony.print(" :::: inside");
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
    }
}

function onSelectingFromPopupReEnrollEditProfile() {
    var option = popupReEnrollEditProfile.reEnrollEditMemberProfileSegment.selectedItems[0]["lblEdit"];
    kony.print("Inside Select pop up function:->");
    if (option == kony.i18n.getLocalizedString("strReEnroll")) {
        popupReEnrollEditProfile.dismiss();
        kony.print("Termed memebr info in Re Enroll " + JSON.stringify(termMemberInfo));
        if (!IsNoMeetingSelected) {
            onClickEventForReenrollTermedMember();
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
        }
    } else if (option == kony.i18n.getLocalizedString("strLblActive")) {
        popupReEnrollEditProfile.dismiss();
        isTermedMemberForActive = true;
        ProcessMemberAfterSearch();
    }
}

function onClickNoteIconForReEnroll() {
    if (!IsNoMeetingSelected) {
        onClickEventForReenrollTermedMember();
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
    }
}

function alertForMemberStatusActive() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strAlertChangeTermedStatus"),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
        alertHandler: onClickTermedMemberStatusAlert
    };
    var psConfig = {};
    var termedAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onClickTermedMemberStatusAlert(response) {
    if (response == true) {
        var updateMemberObj = {};
        var whrCond = "where MemberID = '" + glbMemberId + "'";
        kony.print("onClickTermedMemberStatusAlert whrCond: " + whrCond);
        updateMemberObj = {
            "MemberStatus": MemberStatusEnum[1]
        };
        //Change to 1 - if member mtngoccrid other than present mtngoccrid
        updateMemberObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
        if (gblSubType != "PAYG") {
            updateMemberObj.IsPAYG = "false";
        } else {
            updateMemberObj.IsPAYG = "true";
        }
        kony.print("Update member===" + JSON.stringify(updateMemberObj));
        popupChangeTermedMemberStatus.dismiss();
        boMemberProfile.updateMemberStatus(whrCond, updateMemberObj);
    } else {
        // TO DO: Have to write logic in case no is pressed
    }
}

function validateMemberDetails() {
    valid = new validationcls();
    var startweight = 0;
    kony.print("startweight in view==>>" + startweight);
    startweight = frmViewMemberProfile.lblStartWeightData.text;
    var city = true,
        nickName = true,
        expDate = true,
        phone = true,
        resEmail = true,
        personalGoalWeight = true,
        postal = true;
    var res = false;
    if (glbLocationTypeId == AT_WORK_LOCATION_TYPE_ID) {
        res = valid.checkEnrollFirstName(frmEditMemberProfile.txtFirstName.text).checkEnrollLastName(frmEditMemberProfile.txtLastName.text).checkEmailForNonMandatory(frmEditMemberProfile.txtEmail.text).validateDate(frmEditMemberProfile.lblDOBInfo.text).heightValidation(frmEditMemberProfile.lblHeightInfo.text).validateGoalWeight(parseFloat(frmEditMemberProfile.txtGoalWeight.text), parseFloat(startweight)).isValid();
    } else {
        res = valid.checkEnrollFirstName(frmEditMemberProfile.txtFirstName.text).checkEnrollLastName(frmEditMemberProfile.txtLastName.text).checkEmailForNonMandatory(frmEditMemberProfile.txtEmail.text).validateDate(frmEditMemberProfile.lblDOBInfo.text).heightValidation(frmEditMemberProfile.lblHeightInfo.text).checkForRequiredFields(frmEditMemberProfile.lblSubTypeInfo.text, "Subscription Type").validateGoalWeight(parseFloat(frmEditMemberProfile.txtGoalWeight.text), parseFloat(startweight)).isValid();
    }
    kony.print("Res edit profile====>>" + res);
    if (frmEditMemberProfile.txtCity.text != "") {
        city = valid.checkCity(frmEditMemberProfile.txtCity.text).isValid();
    }
    if (frmEditMemberProfile.txtNickName.text != "" && frmEditMemberProfile.txtNickName.text != undefined) {
        nickName = valid.checkNickName(frmEditMemberProfile.txtNickName.text).isValid();
    }
    if (frmEditMemberProfile.txtPhone.text != "") {
        phone = valid.checkForRequiredFields(frmEditMemberProfile.lblPhoneTypeData.text, "phone type").isValid();
    }
    kony.print(" frmEditMemberProfile.lblSubTypeInfo.text :: " + frmEditMemberProfile.lblSubTypeInfo.text);
    if (frmEditMemberProfile.txtPersonalGoalWeight.text != "" && parseFloat(frmEditMemberProfile.txtPersonalGoalWeight.text) > 0) {
        personalGoalWeight = valid.validatePersonalGoalWeight(frmEditMemberProfile.txtPersonalGoalWeight.text).isValid();
    }
    if (in_array(deviceLocale, Countries["CA"])) {
        if (frmEditMemberProfile.txtZip.text != "") {
            postal = valid.checkPostalCode(frmEditMemberProfile.txtZip.text).isValid();
        }
    } else {
        if (frmEditMemberProfile.txtZip.text != "") {
            postal = valid.validateZipCode(frmEditMemberProfile.txtZip.text).isValid();
        }
    }
    if (res && frmEditMemberProfile.lblSubTypeInfo.text != kony.i18n.getLocalizedString("strPayg")) {
        var msgtype = "";
        if (frmEditMemberProfile.lblSubTypeInfo.text == getLocalizedString("strMonthlyPass")) {
            msgtype = "MP";
            resEmail = valid.checkEmail(frmEditMemberProfile.txtEmail.text).isValid();
        } else if (frmEditMemberProfile.lblSubTypeInfo.text == getLocalizedString("str17WkPass")) {
            msgtype = "SW";
        } else if (frmEditMemberProfile.lblSubTypeInfo.text == getLocalizedString("str20WkPass")) {
            msgtype = "20WP";
        }
        expDate = valid.checkForRequiredFields(frmEditMemberProfile.lblExpDateInfo.text, getLocalizedString("strDateExp")).validSubscriptiodIdLength(frmEditMemberProfile.txtSubID.text, msgtype).isValid();
        //Ami add Start
        if (expDate) {
            var SubscriptionId = frmEditMemberProfile.txtSubID.text;
            var ExpDate = formatDateTommddyyyy(frmEditMemberProfile.lblExpDateInfo.text);
            var tmp = SubscriptionId.slice(-6);
            kony.print("::DJP::SubscriptionId=" + SubscriptionId);
            kony.print("::DJP::ExpDate=" + ExpDate);
            kony.print("::DJP::tmp=" + tmp);
            if (!isNaN(tmp)) {
                var strdate = tmp.substring(0, 2) + "/" + tmp.substring(2, 4) + "/20" + tmp.substring(4, 6);
                kony.print("::DJP::strdate=" + strdate);
                if (ExpDate != strdate) {
                    alertForMessages(kony.i18n.getLocalizedString("strEnterValidDateAdd"));
                    return false;
                }
            } //Ami add start End
        }
    } else if (res && validateEmailEP && frmEditMemberProfile.lblSubTypeInfo.text == kony.i18n.getLocalizedString("strPayg")) { //added by Praveen MEG-3927
        resEmail = valid.checkEmail(frmEditMemberProfile.txtEmail.text).isValid();
    }
    //End by Praveen MEG-3927
    if (frmEditMemberProfile.txtCity.text != "" || frmEditMemberProfile.txtAddr1.text != "" || frmEditMemberProfile.txtAddr2.text != "" || frmEditMemberProfile.txtZip.text != "") {
        kony.print("Inside City,Address,Zip Condition..");
        if (frmEditMemberProfile.lblStateInfo.text == "" || frmEditMemberProfile.lblStateInfo.text == "--") {
            kony.print("Inside State Condition..");
            alertForMessages(kony.i18n.getLocalizedString("strSelectState"));
            return false;
        }
    }
    if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
        kony.print("LIFETIME====>>" + res);
        if (frmEditMemberProfile.txtGoalWeight.text == undefined || frmEditMemberProfile.txtGoalWeight.text == "" || frmEditMemberProfile.txtGoalWeight.text == "0") {
            alertForMessages(kony.i18n.getLocalizedString("strSelectWeight"));
            return false;
        } else if (parseFloat(frmEditMemberProfile.txtGoalWeight.text) < 60 || parseFloat(frmEditMemberProfile.txtGoalWeight.text) > 999.9) {
            alertForMessages(kony.i18n.getLocalizedString("strValidWeight"));
            return false;
        }
    }
    kony.print("frmEditMemberProfile.txtGoalWeight.text---" + frmEditMemberProfile.txtGoalWeight.text);
    if (frmEditMemberProfile.txtGoalWeight.text != "") {
        if (frmEditMemberProfile.txtGoalWeight.text == "0.0" || frmEditMemberProfile.txtGoalWeight.text == "0") {} else {
            if (parseFloat(frmEditMemberProfile.txtGoalWeight.text) < 60 || parseFloat(frmEditMemberProfile.txtGoalWeight.text) > 999.9) {
                kony.print("frmEditMemberProfile.txtGoalWeight.text---INSIDE---" + frmEditMemberProfile.txtGoalWeight.text);
                alertForMessages(kony.i18n.getLocalizedString("strValidGoalWeight"));
                return false;
            }
        }
    }
    if (res != false && city != false && nickName != false && expDate != false && resEmail != false && personalGoalWeight != false && phone != false && postal != false) //&& resEmail!=false  && subID!=false
    {
        return true;
    } else {
        return false;
    }
}
// Added by praveen kalal for change the member status
function eventOnClickDoneChangeMemberStatus() {
    popupChangeMemberStatus.isModal = true;
    if (resMemberShipStatus != selectedStatus) {
        if ((MemberStatusEnum[parseInt(currentstatusIndex) + 1]).toUpperCase() == 'INACTIVE') popupChangeMemberStatus.lblChangeMemberStatus.text = getLocalizedString("strInactive");
        else if ((MemberStatusEnum[parseInt(currentstatusIndex) + 1]).toUpperCase() == 'ACTIVE') popupChangeMemberStatus.lblChangeMemberStatus.text = getLocalizedString("strActive");
        resMemberShipStatus = MemberStatusEnum[parseInt(currentstatusIndex) + 1];
        popupChangeMemberStatusTransition.dismiss();
    }
}

function eventOnclickChangeStatus() {
    var valid = new validationcls();
    var res = false;
    if (!checkValidString(popupChangeMemberStatus.lblChangeMemberStatus.text)) {
        alertForMessages(kony.i18n.getLocalizedString("strSelectMemberStatus"));
        return;
    }
    kony.print("selectedStatus = " + selectedStatus);
    kony.print("in value of selectedStatus = " + popupChangeMemberStatus.lblChangeMemberStatus.text);
    if (tempcurrentstatusIndex == currentstatusIndex) {
        kony.print("in value of selectedStatus = " + selectedStatus);
        popupChangeMemberStatus.dismiss();
        popupChangeMemberStatus.lblChangeMemberStatus.text = "";
        popupChangeMemberStatus.lblDuration.text = "";
        popupChangeMemberStatus.lblReasonForStatusChange.text = "";
    } else if (popupChangeMemberStatus.lblChangeMemberStatus.text == "Inactive") {
        res = valid.checkForRequiredFields(popupChangeMemberStatus.lblChangeMemberStatus.text, "Member status").validateDate(popupChangeMemberStatus.lblDuration.text, "strMsgValidDueDate").isValid();
        var whrCond = "where MemberID = '" + glbMemberId + "'";
        kony.print("value of res = " + res);
        if (res) {
            var reasonToChange = checkValidString(popupChangeMemberStatus.lblReasonForStatusChange.text) ? popupChangeMemberStatus.lblReasonForStatusChange.text : "None";
            updateMemberObj = {
                "MemberStatus": MemberStatusEnum[parseInt(currentstatusIndex) + 1],
                "UserStsEndPrd": supportTime(popupChangeMemberStatus.lblDuration.text, "", "yyyy-mm-ddTHH:NN:SS"),
                "UserComments": popupChangeMemberStatus.lblReasonForStatusChange.text,
                "UserStsChngRsn": reasonToChange
            };
            kony.print("eventOnclickChangeStatus gblSubType: " + gblSubType);
            //Change to 1 - if member mtngoccrid other than present mtngoccrid
            updateMemberObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
            if (gblSubType != "PAYG") {
                updateMemberObj.IsPAYG = "false";
            } else {
                updateMemberObj.IsPAYG = "true";
            }
            currentstatusIndex = 0;
            popupChangeMemberStatus.dismiss();
            popupChangeMemberStatus.lblChangeMemberStatus.text = "";
            popupChangeMemberStatus.lblDuration.text = "";
            popupChangeMemberStatus.lblReasonForStatusChange.text = "";
            boMemberProfile.updateMemberStatus(whrCond, updateMemberObj);
        } else {
            return;
        }
    } else {
        res = valid.checkForRequiredFields(popupChangeMemberStatus.lblChangeMemberStatus.text, "Member status").isValid();
        if (res) {
            var whrCond = "where MemberID = '" + glbMemberId + "'";
            updateMemberObj = {
                "MemberStatus": MemberStatusEnum[parseInt(currentstatusIndex) + 1],
                "UserStsEndPrd": "0001-01-01T00:00:00",
                "UserComments": "None",
                "UserStsChngRsn": "None"
            };
            kony.print("eventOnclickChangeStatus gblSubType: " + gblSubType);
            //Change to 1 - if member mtngoccrid other than present mtngoccrid
            updateMemberObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
            if (gblSubType != "PAYG") {
                updateMemberObj.IsPAYG = "false";
            } else {
                updateMemberObj.IsPAYG = "true";
            }
            currentstatusIndex = 0;
            popupChangeMemberStatus.dismiss();
            popupChangeMemberStatus.lblChangeMemberStatus.text = "";
            popupChangeMemberStatus.lblDuration.text = "";
            popupChangeMemberStatus.lblReasonForStatusChange.text = "";
            boMemberProfile.updateMemberStatus(whrCond, updateMemberObj);
        } else {
            return;
        }
    }
}

function dismissWeightPopup() {
    popupAddWeigh.vboxDOBSection.onClick = eventOnClickDateSelection;
    popupAddWeigh.txtAddWeight.setEnabled(true);
    popupAddWeigh.dismiss();
    IsNWIInView = false;
    IsUpdateWeightHistory = false;
}

function eventOnRowClickStatusSegment() {
    currentstatusIndex = popupChangeMemberStatusTransition.segMemberStatus.selectedIndex[1];
    kony.print("Post current index inside eventOnRowClickStatusSegment == " + currentstatusIndex);
    selectedStatus = popupChangeMemberStatusTransition.segMemberStatus.selectedItems[0]["lblStatus"];
    kony.print("selectedStatus here == " + selectedStatus);
    var segmentData = popupChangeMemberStatusTransition.segMemberStatus.data;
    kony.print("Before segment==" + JSON.stringify(segmentData));
    if (segmentData != null && segmentData.length > 0) {
        for (i in segmentData) {
            if (currentstatusIndex == i) {
                segmentData[i]["imgStatus"] = "icn_active_member.png";
            } else {
                segmentData[i]["imgStatus"] = "";
            }
        }
        kony.print("On row click==" + JSON.stringify(segmentData));
        popupChangeMemberStatusTransition.segMemberStatus.setData(segmentData);
    }
}

function onDoneEditingMemberGoalWeightText() {
    var rndWeight = com.es.weighincalculations.RoundWeight(frmEditMemberProfile.txtGoalWeight.text);
    frmEditMemberProfile.txtGoalWeight.text = rndWeight.toFixed(1); //parseFloat
}

function eventOnClickStateSectionEditMemberPage() {
    displayStatePopup(frmEditMemberProfile.hboxState, "any", false);
}

function getStateNameById(id) {
    if (id != undefined && id != "" && id != 0) {
        if (StateDataObjArr.length > 0) {
            for (i in StateDataObjArr) {
                if (StateDataObjArr[i]["StateID"] == id) {
                    return StateDataObjArr[i]["StateABBR"];
                }
            }
        }
    }
    return "--";
}

function receiveSwitchFlag(flagVal) {
    if (flagVal == 0) {
        return false;
    }
    return true;
}

function getIndexItemByWeekNumber() {
    for (i in batchWeightData) {
        if (batchWeightData.length == batchWeightData[i].WeekNumber) {
            return i;
        }
    }
}

function eventOnCancelChangeMemberTransition() {
    var statusval = popupChangeMemberStatus.lblChangeMemberStatus.text;
    if (statusval != undefined && statusval != null && statusval != "") {
        if (statusval.toUpperCase() == "ACTIVE") {
            currentstatusIndex = 0;
        } else {
            currentstatusIndex = 1;
        }
    } else {
        if (resMemberShipStatus.toUpperCase() == "ACTIVE") {
            currentstatusIndex = 0;
        } else {
            currentstatusIndex = 1;
        }
    }
    popupChangeMemberStatusTransition.destroy();
}
// Ended by praveen kalal for change the member status
function changeDateformateFromInput(input) {
    try {
        var datePart = input.match(/\d+/g),
            year = datePart[0],
            month = datePart[1],
            day = datePart[2];
        return month + '/' + day + '/' + year;
    } catch (e) {
        GlobalException(e);
    }
}

function onPostShowViewMemberProfile() {
    boEnrollMember.getMemberTypeByMemberId(glbMemberId);
    if (checkAppSettingEnable(Settings["DPT"])) {
        frmViewMemberProfile.hboxWPA.isVisible = true;
    } else {
        frmViewMemberProfile.hboxWPA.isVisible = false;
    }
}

function showPopupAddNote(action) {
    var context = {
        "widget": frmViewMemberProfile.hboxNotesProfileData,
        "anchor": "top",
        "sizetoanchorwidth": true
    };
    popupAddNote.setContext(context);
    popupAddNote.lblNoteFlow.text = action;
    if (action == "edit") {
        popupAddNote.lblNoteHdr.text = kony.i18n.getLocalizedString("strEditNote");
        popupAddNote.textareaAddNote.text = frmViewMemberProfile.lblnotes.text;
    } else if (action == "add") {
        popupAddNote.lblNoteHdr.text = kony.i18n.getLocalizedString("strAddNote");
        popupAddNote.textareaAddNote.text = "";
    }
    popupAddNote.show();
}

function onDonePopupAddNote() {
    var noteStr = popupAddNote.textareaAddNote.text;
    var flow = popupAddNote.lblNoteFlow.text;
    if (flow == "edit") {
        kony.print("In Edit Note flow");
        var noteDataObj = {};
        if (glbNoteID == "") {
            var whereClause = " where MemberID = '" + glbMemberId + "' and NoteTypeID = 'Sticky' ";
            boEnrollMember.getNoteByMemberId(whereClause, glbMemberId);
        }
        //update Note
        if (glbNoteID != null && glbNoteID != "") {
            noteDataObj["Note"] = noteStr;
            kony.print("update noteDataObj:===> " + JSON.stringify(noteDataObj));
            var whrcond = " where MemberID = '" + glbMemberId + "' and ID = '" + glbNoteID + "'";
            if (noteDataObj != null && noteDataObj != "" && noteStr.replace("\n", "").trim().length > 0) {
                kony.print("whrcond : " + whrcond);
                boEnrollMember.updateNoteByMemberId(whrcond, noteDataObj);
                frmViewMemberProfile.lblnotes.text = noteStr;
                popupAddNote.dismiss();
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strMsgEditNote"));
            }
        }
    } else if (flow == "add") {
        kony.print("In Add Note flow");
        generateIncrementalMemberID();
        var createNoteDetailsObject = {};
        //Add Note
        if (noteStr != undefined && noteStr != null && noteStr.length > 0 && noteStr.replace("\n", "").trim().length > 0) {
            createNoteDetailsObject.MemberID = glbMemberId;
            createNoteDetailsObject.EmployeeID = glbEmployeeId;
            createNoteDetailsObject.ID = parseInt(memberIDCount) + 1;
            createNoteDetailsObject.EntryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            createNoteDetailsObject.Note = noteStr;
            createNoteDetailsObject.NoteTypeID = "Sticky";
            isNotesDataPresent = false;
            boEnrollMember.addMemberNoteDetails(createNoteDetailsObject);
            frmViewMemberProfile.vboxAddNote.setVisibility(false);
            frmViewMemberProfile.vboxEditNote.setVisibility(true);
            frmViewMemberProfile.lblnotes.text = noteStr;
            popupAddNote.dismiss();
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgAddNote"));
        }
    }
}

function getCCTransactionsForMember(flow, email) {
    kony.print("In getCCTransactionsForMember" + flow);
    kony.print("In frmViewMemberProfile.lblEmailData.text " + frmViewMemberProfile.lblEmailData.text);
    var isMemberEmailExist = false;
    if (flow == "updatedEmail") {
        isMemberEmailExist = true;
        frmViewMemberProfile.lblEmailData.text = email;
    } else {
        if ((frmViewMemberProfile.lblEmailData.text != "") && (frmViewMemberProfile.lblEmailData.text != undefined)) isMemberEmailExist = true;
        else isMemberEmailExist = false;
    }
    if (isMemberEmailExist) {
        boEnrollMember.getCCTranSalePaymentForMember("data", function(res) {
            kony.print("Res = " + JSON.stringify(res));
            if (res != null && res != undefined) {
                var updatedData = _.uniq(res, function(x) {
                    return x.SaleTransactnId;
                });
                kony.print("updatedData = " + JSON.stringify(updatedData));
                glbSendReceiptDisplayCounter = updatedData.length;
                for (var i = 0; i < updatedData.length; i++) {
                    var salePaymentObj = _.filter(res, function(o) {
                        return o.SaleTransactnId == updatedData[i].SaleTransactnId;
                    });
                    var isReturnTran = false;
                    _.each(salePaymentObj, function(o) {
                        return (o.RefundAmount == 1 || o.RefundAmount == true) ? isReturnTran = true : isReturnTran;
                    });
                    if (isReturnTran) {
                        var totalAmount = 0;
                        _.each(salePaymentObj, function(o) {
                            totalAmount = totalAmount + o.Amount;
                        });
                        salePaymentObj = _.filter(salePaymentObj, function(o) {
                            return o.RefundAmount != 1;
                        });
                        salePaymentObj[0].Amount = totalAmount;
                    }
                    var salePaymentArr = [];
                    kony.print("salePaymentObj ==== " + JSON.stringify(salePaymentObj));
                    boEnrollMember.getCCTranSaleItemForMember(updatedData[i].SaleTransactnId, function(resSaleItem) {
                        kony.print("resSaleItem = " + JSON.stringify(resSaleItem));
                        if (resSaleItem != null && resSaleItem != undefined) {
                            glbSendReceiptCounter = 1;
                            sendReceiptEmail(resSaleItem, salePaymentObj, frmViewMemberProfile.lblEmailData.text);
                        } else {
                            kony.print("No record Found");
                        }
                    });
                }
            } else {
                kony.print("No record Found");
            }
        });
    } else {
        popupAddEmail.show();
    }
}