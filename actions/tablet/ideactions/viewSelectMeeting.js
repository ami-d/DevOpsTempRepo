function eventOnClickNoMeeting() {
    try {
        IsNoMeetingSelected = true;
        glbMeetingNum = "";
        glbMeetingLookupID = "";
        gblMeetingSelected = "";
        glbMeetingDate = "";
        glbBackOfficerRefID = "" ;
        kony.print("glbMeetingDate = empty");
        //glbLocationID = "";
        //changeVisiblityonClickNoMeeting(true);
        //changePropertyOnClickMeeting(false);

		
        //hboxNoMeetingHeader.lblCurrMeetingInfo.text = kony.i18n.getLocalizedString("strNone");
		hboxHomeScreen.lblCurrMeetingInfo.text = kony.i18n.getLocalizedString("strNone");
        hboxNameSection.lblCurrentMeetingName.text = kony.i18n.getLocalizedString("strNone");
        hboxPhoneSection.lblCurrentMeetingPhone.text = kony.i18n.getLocalizedString("strNone");
        hboxUserIdSection.lblCurrentMeetingUserId.text = kony.i18n.getLocalizedString("strNone");
        hboxMemberIdSection.lblCurrentMeetingMemerId.text = kony.i18n.getLocalizedString("strNone");
        glbCurrentMeetingValue = kony.i18n.getLocalizedString("strNone");
        
        hboxMeetingSummery.isVisible = false;
        hboxHomeScreenHeader.vboxTally.isVisible = false;
        hboxHomeScreenHeader.vboxDirectSale.isVisible = false;
        hboxHomeScreenHeader.vboxMPActivate.isVisible = false;

        //added for MEGCA-17,21 - open hours meeting 
        isSelMeetingOpenHours = false; //reset the variable for no meeting selection 
        kony.print("----> no meeting option from home screen :: isSelMeetingOpenHours = " + isSelMeetingOpenHours);

        frmHomeScreenNoMeeting.show();
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
};
var gblMeetingSelected;

function eventOnclickMeetingSegment() {
    try {
    
            kony.print("---->select meeting or  reopen tally meeting or open tally report = " + JSON.stringify(frmSelectMeeting.segMeetingsList.selectedItems[0]));
    
        glbMeetingStatus = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingStatus"]; //"Open";
        glbMeetingNum = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingNum"];
        glbIsTallyTimesheetChanged = checkValidString(frmSelectMeeting.segMeetingsList.selectedItems[0]["isTimesheetModified"]) ? frmSelectMeeting.segMeetingsList.selectedItems[0]["isTimesheetModified"] : "false";
        glbDayTimeCodeID = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDayTimeCode"];
        glbMeetingDate = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDate"];
        glbMeetingType = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingType"];
        glbMeetingDayCodeID = frmSelectMeeting.segMeetingsList.selectedItems[0]["dayCodeID"];
        glbMeetingDTCTime = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDTCTime"];
        glbBackOfficerRefID = frmSelectMeeting.segMeetingsList.selectedItems[0]["backOfficerRefID"];
        kony.print("---->glbBackOfficerRefID= " + glbBackOfficerRefID);

        //added for MEGCA-17,21 - open hours meeting 
        boMeetings.getMeetingTypeIdForOpenHours(glbMeetingType);
        kony.print("---->select meeting or  reopen tally meeting or open tally report = " + isSelMeetingOpenHours);

        kony.print("Meeting date is: 1" + glbMeetingDate);

        if (glbMeetingStatus == "Close") {
            alertForReOpenTalliedMeetingConfirmationHomeScreen();
        } else {
            setMeetingDataHomeScreen();
        }

        boMeetings.getCurrentMeeting(); // Added by Praveen kalal MEG-4333


        boMonitor.log("SelectMeeting", "segMeetingsList", "", FlowForMonitor.LogIn, true);
        
        hboxMeetingSummery.isVisible = true;
        hboxHomeScreenHeader.vboxTally.isVisible = true;
        hboxHomeScreenHeader.vboxDirectSale.isVisible = true;
        if(in_array(deviceLocale,Countries["US"]) && checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true"))
        	hboxHomeScreenHeader.vboxMPActivate.isVisible = true;
        else
        	hboxHomeScreenHeader.vboxMPActivate.isVisible = false;

    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
};

//open meeting tab Roshni

function showTalliedMeetingReport() {

    glbMeetingStatus = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingStatus"]; //"Open";
    glbMeetingNum = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingNum"];
    glbIsTallyTimesheetChanged = checkValidString(frmSelectMeeting.segMeetingsList.selectedItems[0]["isTimesheetModified"]) ? frmSelectMeeting.segMeetingsList.selectedItems[0]["isTimesheetModified"] : "false";
    glbDayTimeCodeID = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDayTimeCode"];
    glbMeetingDate = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDate"];
    glbMeetingType = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingType"];
    glbMeetingDayCodeID = frmSelectMeeting.segMeetingsList.selectedItems[0]["dayCodeID"];
    glbMeetingDTCTime = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDTCTime"];
    glbMeetingLookupID = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetinglookUpID"];
    glbBackOfficerRefID = frmSelectMeeting.segMeetingsList.selectedItems[0]["backOfficerRefID"];


    kony.print("Report meeting date " + glbMeetingDate);
    var dateReport = glbMeetingDate.split("T")[0];
    var datetopass = dateReport.split("-")[1] + "/" + dateReport.split("-")[2] + "/" + dateReport.split("-")[0];
    selectedTallyReportMeetingDate = new Date(datetopass);
    selectedTallyReportMeetingOccID = glbMeetingNum;
    selectedTallyReportMeetingTime = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingTime"];

    kony.print("******************selectedTallyReportMeetingTime***********selectedTallyReportMeetingDate" + selectedTallyReportMeetingTime + selectedTallyReportMeetingDate)

    var formattedDate = formatDateTime(selectedTallyReportMeetingDate, "mmm DD,YYYY");
    setMeetingDateForTallyMeeting(selectedTallyReportMeetingDate.getDate(), selectedTallyReportMeetingDate.getMonth() + 1, selectedTallyReportMeetingDate.getFullYear());
    frmTallyReports.lblCurrMeetingInfoPopup.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingName"];

    //added for MEGCA-17,21,18 - open hours meeting 
    boMeetings.getMeetingTypeIdForOpenHours(glbMeetingType);
    kony.print("----> open tallied meeting report from home screen :: isSelMeetingOpenHours = " + isSelMeetingOpenHours);

    frmTallyReports.lblCurrMeetingInfoPopup.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingName"];

    frmTallyReports.show();
}

function setMeetingDataHomeScreen() {
    IsNoMeetingSelected = false;

    glbMeetingStatus = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingStatus"]; //"Open";
    glbMeetingNum = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingNum"];
    glbIsTallyTimesheetChanged = checkValidString(frmSelectMeeting.segMeetingsList.selectedItems[0]["isTimesheetModified"]) ? frmSelectMeeting.segMeetingsList.selectedItems[0]["isTimesheetModified"] : "false";
    glbDayTimeCodeID = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDayTimeCode"];
    glbMeetingDate = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDate"];
    glbMeetingType = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingType"];
    glbMeetingDayCodeID = frmSelectMeeting.segMeetingsList.selectedItems[0]["dayCodeID"];
    glbMeetingDTCTime = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingDTCTime"];
    glbBackOfficerRefID = frmSelectMeeting.segMeetingsList.selectedItems[0]["backOfficerRefID"];
    

    glbMeetingLookupID = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetinglookUpID"];
    gblMeetingSelected = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingTime"]; //MeetingSelected[1];
    hboxHomeScreen.lblCurrMeetingInfo.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["lblMeetings"]; //Nikita Patel: Replce with meeting time.//MeetingSelected[1];
    hboxHomeScreen.lblCurrMeetingInfo.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["lblMeetings"] + " " + getLocalizedString("strLblScheduled");;
    hboxMeetingSummery.lblCurrentMeetingValueNew.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["lblMeetings"] + " " + getLocalizedString("strLblScheduled");
    glbCurrentMeetingValue = frmSelectMeeting.segMeetingsList.selectedItems[0]["lblMeetings"];
    hboxEnrollHdrMain.lblCurrentMeeting.text = glbCurrentMeetingValue;
    hboxHomeScreen.lblCurrMeetingInfo.text = glbCurrentMeetingValue;
    hboxNameSection.lblCurrentMeetingName.text = glbCurrentMeetingValue;
    hboxPhoneSection.lblCurrentMeetingPhone.text = glbCurrentMeetingValue;
    hboxUserIdSection.lblCurrentMeetingUserId.text = glbCurrentMeetingValue;
    hboxMemberIdSection.lblCurrentMeetingMemerId.text = glbCurrentMeetingValue;
    //changeVisiblityonClickNoMeeting(false);
    //changePropertyOnClickMeeting(true);
    kony.print("glbMeetingNum:=== " + glbMeetingNum);
    kony.print("glbMeetingLookupID:=== " + glbMeetingLookupID);

    //added for MEGCA-17,21 - open hours meeting 
    boMeetings.getMeetingTypeIdForOpenHours(glbMeetingType);
    kony.print("----> Select the meeting from home screen :: isSelMeetingOpenHours = " + isSelMeetingOpenHours);

    evenOnPostShowHomeScreen();
    //set meeting start and end time in global variables- for add timesheet validation 
    meetingduration = allowdMaxDurationMinutesForMeeting;
    glbSelectedMeetingStartTime = gblMeetingSelected;
    meetingEndTimeMaxInMinutes = parseInt(getMinutesFromTime(glbSelectedMeetingStartTime)) + parseInt(meetingduration);
    glbSelectedMeetingEndTime = getTimeFromMinutes(meetingEndTimeMaxInMinutes);


}

function alertForReOpenTalliedMeetingConfirmationHomeScreen() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strReOpenTalliedMeeting"), //"Are you sure you want to Re-Open a Tallied meeting?",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: kony.i18n.getLocalizedString("strConfirm"),
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), // "No",
        alertHandler: onReOpenTalliedMeetingConfirmationAlertHomeScreen
    };
    var psConfig = {};
    var ReOpenTalliedMeetingConfirmationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onReOpenTalliedMeetingConfirmationAlertHomeScreen(response) {
    if (response == true) {
        glbMeetingStatus = "Open";
        
        hboxMeetingSummery.isVisible = true;
        hboxHomeScreenHeader.vboxTally.isVisible = true;
        hboxHomeScreenHeader.vboxDirectSale.isVisible = true;
        if(in_array(deviceLocale,Countries["US"]) && checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true"))
        	hboxHomeScreenHeader.vboxMPActivate.isVisible = true;
        else
        	hboxHomeScreenHeader.vboxMPActivate.isVisible = false;
        
        setMeetingDataHomeScreen();
        com.kony.WeightWatchers.Tally.TallyTimesheet.remove(" where MeetingId='" + glbMeetingNum + "'", function() {
            kony.print("Timesheet Record Deleted..");
        }, eventErrorCallBack, false);

        boMeetings.closeTallyMeetingInstance();
        kony.print("onReOpenTalliedMeetingConfirmationAlertHomeScreen glbMeetingNum: " + glbMeetingNum);
    }
}


function eventOnPostShowSelectMeetingForm() {
    try {
        kony.print("City name==" + cityName + "===statename==" + returnStateNameById(stateID));
        var todaydate = new Date();
        displayProgressView();
        frmSelectMeeting.lblDateInfo.text = formatDate();
        //boMeetings.getMeetingsListFromWs();
        kony.print("Inside eventOnPostShowSelectMeetingForm");
        //boMeetings.getMeetingsByLocationId(glbLocationID);
        boMeetings.getMtngOccIDOfTalliedMeeting();
        popupAdvancedSearch.txtCity.text = cityName;
        stateName = returnStateNameById(stateID);
        popupAdvancedSearch.lblStateInfo.text = stateName;
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }

}

function eventOnPreShowSelectMeetingForm() {
    try {
        kony.print("Inside eventOnPreShowSelectMeetingForm");

    } catch (e) {
        GlobalException(e);
        removeProgressView();

    }
}

function getMeetingsListFromWsResponse(status, meetingResponse_segmentMeetings_temp) {
    try {
        if (status) {
            // frmSelectMeeting.segMeetingsList.removeAll();
            //  frmSelectMeeting.segMeetingsList.setData(meetingResponse_segmentMeetings_temp);
            //popupCurrentMeeting.pickerCurrMeeting.masterData=MeetingDataForPicker;
            kony.print("MeetingDataForPicker in view=++++++++++++++++===>>" + MeetingDataForPicker);
            removeProgressView();
        } else {
            removeProgressView();
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }

}

function changeVisiblityonClickNoMeeting(makeVisible) {
    frmHomeScreen.hboxUpcomingMeetings.isVisible = makeVisible;
    frmHomeScreen.hboxNoMeetingTitle.isVisible = makeVisible;
    frmHomeScreen.segNoMeeting.isVisible = makeVisible;
}

function changePropertyOnClickMeeting(makeVisible) {
    frmHomeScreen.hboxMeetingSelection.isVisible = makeVisible;
    frmHomeScreen.hbxTableTitle.isVisible = makeVisible;
    frmHomeScreen.segHomeMemberView.isVisible = makeVisible;
    frmHomeScreen.segCheckedInMembers.isVisible = makeVisible;
    frmHomeScreen.vbxTally.isVisible = makeVisible;
}

function alertForEnrollAddInTalliedMeetingConfirmation() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strReOpenTalliedMeeting"), //"Are you sure you want to Re-Open a Tallied meeting?",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: kony.i18n.getLocalizedString("strConfirm"),
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), // "No",
        alertHandler: onEnrollAddInTalliedMeetingConfirmationAlert
    };
    var psConfig = {};
    var EnrollAddInTalliedMeetingConfirmationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onEnrollAddInTalliedMeetingConfirmationAlert(response) {
    if (response == true) {
        boMeetings.closeTallyMeetingInstance();
        kony.print("onEnrollAddInTalliedMeetingConfirmationAlert glbMeetingNum: " + glbMeetingNum);
        ProceedToEnrollAdd(isClickedOnIcon, true);
    } else {
        isClickedOnIcon = "";
        ProceedToEnrollAdd(isClickedOnIcon, false);
    }
}

function ProceedToEnrollAdd(flow, status) {
    if (status) {
        if (flow == "Enroll") {
            frmEnrollNewMember.show();
        } else if (flow == "Add") {
            frmAddIndividulaMember.lblMemberShipInfo.text = getLocalizedString("strPaid");
            frmAddIndividulaMember.imgGoalWeight.isVisible = false;
            frmAddIndividulaMember.show();
        } else if (flow == "Process") {
            ProcessMemberAfterSearch();
        } else if (flow == "Scanned") {
            scannedDataFunctionFlow(gblBarcodeScannedData);
        }
    }
    isClickedOnIcon = "";
}