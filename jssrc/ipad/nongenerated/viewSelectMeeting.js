function eventOnClickNoMeeting() {
    try {
        IsNoMeetingSelected = true;
        glbMeetingNum = "";
        glbMeetingLookupID = "";
        gblMeetingSelected = "";
        glbMeetingDate = "";
        glbBackOfficerRefID = "";
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
        var selectedIndex = frmSelectMeeting.segMeetingsList.selectedIndex;
        kony.print("ABA --> selectedIndex " + selectedIndex);
        kony.print("ABA --> Week No " + frmSelectMeeting.segMeetingsList.selectedItems[0]["weekNumber"]["text"].substr(6));
        /* var selectedRow = parseInt(selectedIndex[1]);
         kony.print("ABA --> selectedRow " + selectedRow);
         var sData = frmSelectMeeting.segMeetingsList.data[selectedRow];
          kony.print("ABA --> Data : " + JSON.stringify(sData));
         sData["weekNo"]= parseInt(frmSelectMeeting.segMeetingsList.selectedItems[0]["weekNumber"]["text"].substr(6));
     
         kony.print("Segmemnt row to be modified is : " + selectedRow + "   data is : " + JSON.stringify(sData));


        frmSelectMeeting.segMeetingsList.setDataAt(sData, selectedRow);
         */
        // Set AWS Location MEG-5823
        var isAtWork = frmSelectMeeting.segMeetingsList.selectedItems[0]["IsAtWork"];
        setAWSLocation(isAtWork);
        //**MEG 7312
        var isInfoSession = frmSelectMeeting.segMeetingsList.selectedItems[0]["IsInfoSession"];
        setInfoSessionMeeting(isInfoSession);
        //** End
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
        if (in_array(deviceLocale, Countries["US"]) && checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") && !IsInfoSessionMeeting()) //**MEG 7312
            hboxHomeScreenHeader.vboxMPActivate.isVisible = true;
        else hboxHomeScreenHeader.vboxMPActivate.isVisible = false;
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
};
//open meeting tab Roshni
function showTalliedMeetingReport() {
    kony.print("frmSelectMeeting.segMeetingsList.selectedItems[0] " + JSON.stringify(frmSelectMeeting.segMeetingsList.selectedItems[0]));
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
    // Set AWS Location MEG-5827
    var isAtWork = frmSelectMeeting.segMeetingsList.selectedItems[0]["IsAtWork"];
    kony.print(" isAtWork on tally select " + isAtWork);
    setAWSLocation(isAtWork);
    //**End
    // **MEG 7313
    var isInfoSession = frmSelectMeeting.segMeetingsList.selectedItems[0]["IsInfoSession"];
    setInfoSessionMeeting(isInfoSession);
    // ** END 7313
    kony.print("1 kony.application.getCurrentForm().id " + kony.application.getCurrentForm().id);
    kony.print("kony.application.getPreviousForm().id  " + kony.application.getPreviousForm().id);
    prevForm = kony.application.getCurrentForm().id; //** MEG 7180
    kony.print("prevForm " + prevForm);
    navigateForm = false; //** MEG 7180
    kony.print("Report meeting date " + glbMeetingDate);
    var dateReport = glbMeetingDate.split("T")[0];
    var datetopass = dateReport.split("-")[1] + "/" + dateReport.split("-")[2] + "/" + dateReport.split("-")[0];
    selectedTallyReportMeetingDate = new Date(datetopass);
    selectedTallyReportMeetingOccID = glbMeetingNum;
    selectedTallyReportMeetingTime = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingTime"];
    kony.print("******************selectedTallyReportMeetingTime***********selectedTallyReportMeetingDate" + selectedTallyReportMeetingTime + selectedTallyReportMeetingDate)
    var formattedDate = formatDateTime(selectedTallyReportMeetingDate, "mmm DD,YYYY");
    setMeetingDateForTallyMeeting(selectedTallyReportMeetingDate.getDate(), selectedTallyReportMeetingDate.getMonth() + 1, selectedTallyReportMeetingDate.getFullYear());
    //frmTallyReports.lblCurrMeetingInfoPopup.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingName"];
    //added for MEGCA-17,21,18 - open hours meeting 
    boMeetings.getMeetingTypeIdForOpenHours(glbMeetingType);
    kony.print("----> open tallied meeting report from home screen :: isSelMeetingOpenHours = " + isSelMeetingOpenHours);
    //** MEG 5827 	
    if (IsAWSLocationEnabled() || IsInfoSessionMeeting()) {
        kony.print(" AWS Ami");
        kony.print("info session Ami ");
        frmATWTallyReports.lblCurrMeetingInfoPopup.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingName"];
        frmATWTallyReports.show();
    } else {
        kony.print("non AWS Ami ");
        frmTallyReports.lblCurrMeetingInfoPopup.text = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingName"];
        frmTallyReports.show();
    }
    //** End
}

function setMeetingDataHomeScreen() {
    IsNoMeetingSelected = false;
    kony.print(" setMeetingDataHomeScreen frmSelectMeeting.segMeetingsList.selectedItems[0]" + JSON.stringify(frmSelectMeeting.segMeetingsList.selectedItems[0]));
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
    // Set AWS Location MEG-5827
    var isAtWork = frmSelectMeeting.segMeetingsList.selectedItems[0]["IsAtWork"];
    kony.print(" isAtWork on tally select " + isAtWork);
    setAWSLocation(isAtWork);
    //**End
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
        if (in_array(deviceLocale, Countries["US"]) && checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") && !IsInfoSessionMeeting()) //**MEG 7312
            hboxHomeScreenHeader.vboxMPActivate.isVisible = true;
        else hboxHomeScreenHeader.vboxMPActivate.isVisible = false;
        setMeetingDataHomeScreen();
        com.kony.WeightWatchers.Tally.TallyTimesheet.remove(" where MeetingId='" + glbMeetingNum + "'", function() {
            kony.print("Timesheet Record Deleted..");
        }, eventErrorCallBack, false);
        removePreviouslyEnteredTallyMeetingFeeData();
        removePreviouslyEnteredTallySalesData();
        boMeetings.closeTallyMeetingInstance();
        kony.print("onReOpenTalliedMeetingConfirmationAlertHomeScreen glbMeetingNum: " + glbMeetingNum);
    }
}
// Added below function as part of MEG-7328
function removePreviouslyEnteredTallyMeetingFeeData() {
    kony.print("Inside removePreviouslyEnteredTallyMeetingFeeData");
    var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));
    var whrClause = " where MeetingOccrID  = " + glbMeetingNum + " and MeetingDate like '%" + dateQuery + "%'";
    kony.print("Inside removePreviouslyEnteredTallyMeetingFeeData whrClause: " + whrClause);
    DBTallyMeetingFeeController.find(whrClause, tallyMeetingFeeFindSuccessGetPK, eventErrorCallBack);

    function tallyMeetingFeeFindSuccessGetPK(res) {
        kony.print("Inside tallyMeetingFeeFindSuccessGetPK: res: " + JSON.stringify(res));
        if (res.length > 0) {
            for (var i in res) {
                kony.print("in tallyMeetingFeeFindSuccessGetPK of removePreviouslyEnteredTallyMeetingFeeData row ===>" + JSON.stringify(res[i]));
                com.kony.WeightWatchers.Tally.TallyMeetingFee.removeDeviceInstanceByPK(res[i]._id, function() {}, eventErrorCallBack);
            }
        }
    }
}
// Added below function as part of MEG-7328
function removePreviouslyEnteredTallySalesData() {
    kony.print("Inside removePreviouslyEnteredTallySalesData");
    var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));
    var whrClause = " where MeetingOccrID  = " + glbMeetingNum + " and MeetingDate like '%" + dateQuery + "%'";
    kony.print("Inside removePreviouslyEnteredTallySalesData whrClause: " + whrClause);
    DBTallySalesController.find(whrClause, tallySalesFindSuccessGetPK, eventErrorCallBack);

    function tallySalesFindSuccessGetPK(res) {
        kony.print("Inside tallySalesFindSuccessGetPK: res: " + JSON.stringify(res));
        if (res.length > 0) {
            for (var i in res) {
                kony.print("in tallySalesFindSuccessGetPK of removePreviouslyEnteredTallySalesData row ===>" + JSON.stringify(res[i]));
                com.kony.WeightWatchers.Tally.TallySales.removeDeviceInstanceByPK(res[i]._id, function() {}, eventErrorCallBack);
            }
        }
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

function eventOnWeekNoMeeting_org() {}

function getNextDayOfWeek(date, dayOfWeek) {
    var resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay() - 1) % 7 + 1);
    return resultDate;
}

function eventOnWeekNoMeeting() {
    kony.print("---->selected meeting" + JSON.stringify(frmSelectMeeting.segMeetingsList.selectedItems[0]));
    var startDate = frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingStartDate"];
    //var weeksBetween = weeksBetween(new Date(startDate), new Date());
    var weekNumber = parseInt(frmSelectMeeting.segMeetingsList.selectedItems[0]["SeriesCompMeetings"]) + 1;
    /*var StartDate = getNextDayOfWeek(new Date(startDate),0); 
 		var EndDate = getNextDayOfWeek(new Date(),0); 

 		var weeks = Math.round((EndDate - StartDate)/ 604800000);
  		kony.print("getWeekNoForAtWorkMeetingClosed week in between="+weeks);
  		if(weeks < parseInt(frmSelectMeeting.segMeetingsList.selectedItems[0]["SeriesCompMeetings"]))
  		{
   			 weekNumber = parseInt(frmSelectMeeting.segMeetingsList.selectedItems[0]["SeriesCompMeetings"]);
  		}*/
    var IsTallySubmitted = frmSelectMeeting.segMeetingsList.selectedItems[0]["IsTallySubmitted"];
    if (IsTallySubmitted == true || IsTallySubmitted == 'true') //** MEG 7154
        weekNumber = parseInt(frmSelectMeeting.segMeetingsList.selectedItems[0]["SeriesCompMeetings"]);
    else weekNumber = parseInt(frmSelectMeeting.segMeetingsList.selectedItems[0]["SeriesCompMeetings"]) + 1;
    var date1 = getNextDayOfWeek(new Date(), 0);
    var date2 = getNextDayOfWeek(new Date(startDate), 0);
    var weeksInBetween = Math.round((date1 - date2) / (7 * 24 * 60 * 60 * 1000));
    kony.print("weeksBetween= " + weeksInBetween + " weekNumber= " + weekNumber);
    var pickerWeek = [];
    var weekEndRange = parseInt(weeksInBetween) + 1;
    kony.print("New weekEndRange " + weekEndRange);
    if (weeksInBetween > 0 && weeksInBetween >= weekNumber) {
        for (var i = weekNumber; i <= weekEndRange; i++) {
            kony.print("i= " + i);
            var pickerValue = [];
            pickerValue.push(String(i));
            pickerValue.push(String("week " + i));
            pickerWeek.push(pickerValue);
            kony.print("pickerWeek 123= " + pickerWeek);
        };
    } else {
        var pickerValue = [];
        pickerValue.push(String(weekNumber));
        pickerValue.push(String("week " + weekNumber));
        pickerWeek.push(pickerValue);
        kony.print("pickerWeek= " + pickerWeek);
    };
    pickerWeek.push(50);
    var pickerMain = [];
    pickerMain.push(pickerWeek);
    popupWeek.pckrSelectWeek.masterData = pickerMain;
    var context = {
        "widget": frmSelectMeeting.line1,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    popupWeek.setContext(context);
    popupWeek.show();
}

function eventonClickDoneWeekPopUp() {
    try {
        var PickerWeekSelectedKeys;
        if (popupWeek.pckrSelectWeek.selectedKeys != null) {
            PickerWeekSelectedKeys = popupWeek.pckrSelectWeek.selectedKeys;
            kony.print("selected week in meetings page----->>" + PickerWeekSelectedKeys);
            var weekText = "week: " + PickerWeekSelectedKeys;
            kony.print("---->selected Item" + JSON.stringify(frmSelectMeeting.segMeetingsList.selectedItems));
            //kony.print("---->segMeetingsList" + JSON.stringify(frmSelectMeeting.segMeetingsList));
            //var WhereCond = "where ID ='" + frmSelectMeeting.segMeetingsList.selectedItems[0]["meetingNum"] + "'";
            var selectedIndex = frmSelectMeeting.segMeetingsList.selectedIndex;
            kony.print("---->selectedIndex" + JSON.stringify(selectedIndex));
            var index1, index2;
            index1 = parseInt(selectedIndex[0]);
            index2 = parseInt(selectedIndex[1]);
            var selectedRow = index1;
            var sData = frmSelectMeeting.segMeetingsList.data[selectedRow];
            kony.print("Segmemnt row to be modified is : " + selectedRow + "   data is : " + JSON.stringify(sData));
            sData[1][index2]["weekNumber"] = {
                "text": weekText,
                "isVisible": true
            };
            kony.print("Segmemnt row to be modified is : " + selectedRow + "   data is : " + JSON.stringify(sData));
            frmSelectMeeting.segMeetingsList.setSectionAt(sData, selectedRow);
            /*kony.print("whereCond" + WhereCond);

                var obj = { 
                    "SeriesCompMeetings": PickerWeekSelectedKeys[0]
                }
          	
            kony.print("object week" + obj);
          
         	//boMeetings.UpdateMeetingRecord(obj, WhereCond);*/
            popupWeek.dismiss();
            glbIsWeekChanged = true;
            //frmSelectMeeting.show();
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}