var isTimeSheetEdit = false;
//back button event handle 
function eventonclickBtnBack() {
    frmTallyMeetingCashout.show();
}
// click on the continue button should be forwared to the report page 
function navigateToReport() {
    boTallyMeetingReport.clearTallyVariables();
    var timesheetData = frmTallyMeetingTimeSheet.segTimesheet.data;
    if (timesheetData.length > 0) {
        var leaderFlag = false;
        for (var i = 0; i < timesheetData.length; i++) {
            kony.print("::::timesheetData=" + JSON.stringify(timesheetData));
            var timein = timesheetData[i].lblTimeIn;
            var timeout = timesheetData[i].lblTimeOut;
            kony.print("timein =  " + timein + "-- " + timeout);
            if (in_array(deviceLocale, Countries["CA"])) {
                kony.print("--> canada");
                if (_.isObject(timein) && checkValidString(timein.text) && _.isObject(timeout) && checkValidString(timeout.text)) {
                    kony.print("--> canada object values for time in out = " + timein.text + "-- " + timeout.text);
                    if (timesheetData[i]["lblEmpRole"] == getLocalizedString("strLeader")) {
                        leaderFlag = true;
                    }
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strAlertValidTimesheet"));
                    return;
                }
            } else {
                if (_.isObject(timein) && checkValidString(timein.text) && _.isObject(timeout) && checkValidString(timeout.text)) {
                    kony.print("--> " + timesheetData[i]["lblEmpRole"].toLowerCase());
                    if (timesheetData[i]["lblEmpRole"] == getLocalizedString("strLeader")) {
                        leaderFlag = true;
                    }
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strAlertValidTimesheet"));
                    return;
                }
            }
            //if(_.isObject)
        }
        if (!leaderFlag && !isSelMeetingOpenHours) {
            var alertConfig = {
                message: kony.i18n.getLocalizedString("strmsgTimesheetConfimation"),
                alertType: constants.ALERT_TYPE_CONFIRMATION,
                alertTitle: "",
                yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
                noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
                alertHandler: onClickConfirmContinue
            };
            var psConfig = {};
            var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
        } else {
            onClickConfirmContinue(false);
        }
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strValidationMsgAddRecord"));
    }
}

function onClickConfirmContinue(response) {
    //Check Time in time out Validation
    if (response == false) {
        frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_unchecked.png";
        frmTallyMeetingReport.btnSubmit.skin = "btnNoWeighInSelected";
        frmTallyMeetingReport.show();
    }
}
// while cliking on the edit button or add button, show the pop up and show the default selected values 
function eventOnClickAddTime(selectedObjectForAddtime) {
    if (!selectedObjectForAddtime || selectedObjectForAddtime == undefined || selectedObjectForAddtime == null) {
        initAddTimePopUp();
    } else {
        //removeAllPicker();
        eventOnClickAddTimeButton();
        isTimeSheetEdit = true;
        popupAddTime.lblEmployee.text = selectedObjectForAddtime.lblEmployee;
        popupAddTime.lblEmployeeNumber.text = selectedObjectForAddtime.lblNumber;
        popupAddTime.hidEmployeeId.text = selectedObjectForAddtime.hidEmployeeId;
        popupAddTime.lblPosition.text = selectedObjectForAddtime.lblEmpRole;
        //namrata : MEGCA - 17 ,21 
        if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) {
            kony.print("---> edit time set start and end time for CA");
            //MEGCA-17 - open hours condition
            //if meting type = TRADE , then set the default values for start and end time 
            var imgSrcMeetingSetupCheck = (selectedObjectForAddtime.lblBreakOut.text != "Yes") ? "icn_checkbox_unchecked.png" : "icn_checkbox_checked.png";
            var imgMentorTraineeCheck = (selectedObjectForAddtime.lblBreakIn.text != "") ? "icn_checkbox_checked.png" : "icn_checkbox_unchecked.png";
            popupAddTime.imgParticipationCheckbox.src = imgSrcMeetingSetupCheck;
            popupAddTime.imgCheckbox.src = imgMentorTraineeCheck;
            popupAddTime.txtTraineeName.text = selectedObjectForAddtime.lblBreakIn.text;
            if (selectedObjectForAddtime.lblBreakIn.text != "") {
                popupAddTime.txtTraineeName.setEnabled(true);
            }
            //set the start and end time value as statis with 2.30 hours difference 
            kony.print("-->  edit time pop up  " + glbMeetingType + "--" + isSelMeetingOpenHours);
            var strStartTime = glbSelectedMeetingStartTime;
            var strEndTime = getTimeFromMinutes(parseInt(getMinutesFromTime(glbSelectedMeetingStartTime)) + 150); // 2:30 hours after meeting start time
            kony.print("-->strEndTime = " + strEndTime + " --strStartTime = " + strStartTime);
            if (strEndTime == "00:00 PM" || strEndTime == "0:00 PM") {
                strEndTime = "12:00 PM";
            }
            if (strStartTime == "00:00 PM" || strStartTime == "0:00 PM") {
                strStartTime = "12:00 PM";
            }
            popupAddTime.lblEndTime.text = strEndTime;
            popupAddTime.lblStartTime.text = strStartTime;
            kony.print("--> popupAddTime.lblEndTime.text = " + popupAddTime.lblEndTime.text);
        } else if (in_array(deviceLocale, Countries["CA"])) {
            popupAddTime.lblStartTime.text = selectedObjectForAddtime.lblTimeIn.text;
            popupAddTime.lblEndTime.text = selectedObjectForAddtime.lblTimeOut.text;
            popupAddTime.lblBreakStartTime.text = selectedObjectForAddtime.lblBreakOut.text;
            popupAddTime.lblBreakEndTime.text = selectedObjectForAddtime.lblBreakIn.text;
        } else {
            popupAddTime.lblStartTime.text = selectedObjectForAddtime.lblTimeIn.text;
            popupAddTime.lblEndTime.text = selectedObjectForAddtime.lblTimeOut.text;
            popupAddTime.lblBreakStartTime.text = selectedObjectForAddtime.lblBreakOut.text;
            popupAddTime.lblBreakEndTime.text = selectedObjectForAddtime.lblBreakIn.text;
        }
        if (popupAddTime.hidTallyTimesheetID) {
            popupAddTime.hidTallyTimesheetID.text = selectedObjectForAddtime.hidTimeSheetId;
        }
        popupAddTime.lblAddTimeHeader.text = kony.i18n.getLocalizedString("strEditTimesheet");
    }
}
// while timesheet entries has been cliked to edit the record
function eventOnClickAddTimeFromSegmentEdit() {
    // editReceptionistOne=false;
    // editLeaderOne=false;
    removeAllPicker();
    var context = {
        "widget": frmTallyMeetingTimeSheet.segTimesheet,
        "anchor": "left",
        "sizetoanchorwidth": false
    };
    // popupAddTime.setContext(context);
    popupAddTime.show();
    //get selected record for the current selected timesheet record 
    if (frmTallyMeetingTimeSheet.segTimesheet && frmTallyMeetingTimeSheet.segTimesheet.data) {
        var selectedIndex = frmTallyMeetingTimeSheet.segTimesheet.selectedIndex;
        var selectedRowIndex = selectedIndex[1];
        var selectedObjectForAddtime = frmTallyMeetingTimeSheet.segTimesheet.data[selectedRowIndex];
        kony.print("-------> selectd object = " + JSON.stringify(selectedObjectForAddtime));
        eventOnClickAddTime(selectedObjectForAddtime);
        /*   if (in_array(deviceLocale,Countries["CA"]) && isSelMeetingOpenHours != true){
			if(selectedObjectForAddtime.lblEmpRole=="Receptionist" && selectedObjectForAddtime.lblBreakIn.text!=""){
				editReceptionistOne=true;
			}else if(selectedObjectForAddtime.lblEmpRole=="Leader" && selectedObjectForAddtime.lblBreakIn.text!=""){
				editLeaderOne=true;
			}
		} */
        popupAddTime.lblAddTimeHeader.text = kony.i18n.getLocalizedString("strEditTimesheet");
    }
}

function eventOnClickDeleteTimesheetRecord() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strConfirmMsgDeletetime"),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: kony.i18n.getLocalizedString("strConfirm"),
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), // "No",
        alertHandler: function(response) {
            if (response == true) {
                if (frmTallyMeetingTimeSheet.segTimesheet && frmTallyMeetingTimeSheet.segTimesheet.data) {
                    var selectedIndex = frmTallyMeetingTimeSheet.segTimesheet.selectedIndex;
                    var selectedRowIndex = selectedIndex[1];
                    var selectedObject = frmTallyMeetingTimeSheet.segTimesheet.data[selectedRowIndex];
                    kony.print("::DJP::selectd object = " + JSON.stringify(selectedObject));
                    boTallyTimesSheet.deleteTimesheetRecord(glbMeetingNum, selectedObject.hidEmployeeId);
                    kony.print("::DJP::selectedRowIndex=" + selectedRowIndex);
                    frmTallyMeetingTimeSheet.segTimesheet.removeAt(selectedRowIndex);
                }
            }
        }
    };
    var psConfig = {};
    var NumberOfBanksConfirmationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function eventOnClickAddTimeSaveData() {
    var isAllValidationsPassed = checkValidationsforAddTime();
    //Dileep
    if (isAllValidationsPassed) {
        //add the data into database and add the row to table 
        popupAddTime.dismiss();
    }
}
//this function is used to check all types of validation when save button has been pressed for Add time pop up 
function checkValidationsforAddTime() {
    var errorMsg = "";
    var regex = /^([^0-9/&]*)$/;
    /*
     * if meeting time is 10:00 AM then start time can be >= 9:00 AM AND <= 1:00 PM(10 am+ 3hours ) ----end time >= 9:01 AM and <=  2:00 PM (1:00 PM + 1hour)
     * if meeting time is 12:00 PM then start time can be >= 11:00 AM AND <= 3:00 PM(12pm + 3hours ) ----end time >= 12:01 PM and <=  4:00 PM(3:00 PM + 1hour)
     * if meeting time is 5:30 PM then start time can be >= 4:30 PM AND <= 8:30 PM(5:30pm + 3hours ) ----end time >= 4:31 PM and <=  9:30 PM(8:30 PM + 1hour)
     */
    var employeeNumber = popupAddTime.lblEmployeeNumber.text;
    var startTime = popupAddTime.lblStartTime.text;
    var endTime = popupAddTime.lblEndTime.text;
    var breakOutTime = popupAddTime.lblBreakStartTime.text;
    var breakInime = popupAddTime.lblBreakEndTime.text;
    if (!isSelMeetingOpenHours && in_array(deviceLocale, Countries["CA"])) {
        popupAddTime.txtTraineeName.text = (popupAddTime.txtTraineeName.text).replace(/\\/g, '');
    }
    var traineeName = popupAddTime.txtTraineeName.text;
    var isMentorTrainee = (popupAddTime.imgCheckbox.src == "icn_checkbox_checked.png") ? true : false;
    var meetingStartTime = glbSelectedMeetingStartTime;
    var meetingEndTime = glbSelectedMeetingEndTime;
    kony.print("--------------------calculated time ------>>>" + meetingStartTime + "--" + meetingEndTime + "--" + startTime + "==" + endTime + "======" + breakOutTime + "========" + breakInime);
    var meetingStartTimeMinutes = getMinutesFromTime(meetingStartTime, 'meeting_starttime');
    var meetingEndTimeMinutes = getMinutesFromTime(meetingEndTime, 'meeting_endtime');
    var startTimeMinutes = getMinutesFromTime(startTime, 'starttime');
    var endTimeMinutes = getMinutesFromTime(endTime, 'endtime');
    var breakOutTimeMinutes = (breakOutTime != null) ? getMinutesFromTime(breakOutTime, 'break_startttime') : 0;
    var breakInimeMinutes = (breakInime != null) ? getMinutesFromTime(breakInime, 'break_endtime') : 0;
    var startEndtimediff = endTimeMinutes - startTimeMinutes;
    kony.print("--------------------calculated minutes ------>>>" + meetingStartTimeMinutes + "--" + meetingEndTimeMinutes + "--" + startTimeMinutes + "==" + endTimeMinutes + "======" + breakOutTimeMinutes + "========" + breakInimeMinutes);
    var context = {
        "widget": popupAddTime.hboxHeaderSection,
        "anchor": "left",
        "sizetoanchorwidth": true
    };
    kony.print("employeeNumber===>  " + employeeNumber);
    //if (employeeNumber != "" ) {
    if (employeeNumber != undefined && employeeNumber != null && employeeNumber != "") {
        //start time is mendatory 
        if (startTimeMinutes == 0 || startTime == "") {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgSelectStartTime"));
            return false;
        }
        //end time is mendatory 
        else if (endTimeMinutes == 0 || endTime == "") {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgSelectEndTime"));
            return false;
        }
        //start time must be less than end time 
        else if (endTimeMinutes <= startTimeMinutes) {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgEndtimeNotValid"));
            return false;
        }
        //break out time selected and break In time not selected
        else if (breakOutTimeMinutes > 0 && breakInime == "") {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgSelectBreakStartTime"));
            return false;
        }
        //break in time selected and break out time not selected
        else if (breakInimeMinutes > 0 && breakOutTime == 0) {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgSelectBreakEndTime"));
            return false;
        }
        //break out time > start time 
        else if (breakOutTimeMinutes > 0 && breakInimeMinutes > 0 && breakOutTimeMinutes <= startTimeMinutes) {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgBreakStartTimeNotValid1"));
            return false;
        }
        //break in time < out time  
        else if (breakOutTimeMinutes > 0 && breakInimeMinutes > 0 && breakInimeMinutes >= endTimeMinutes) {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgBreakEndTimeNotValid1"));
            return false;
        }
        //break out > break in time  
        else if (breakOutTimeMinutes > 0 && breakInimeMinutes > 0 && breakInimeMinutes <= breakOutTimeMinutes) {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgBreakEndTimeNotValid2"));
            return false;
        }
        //start time must start before 15 min of meeting start time OR can start till m eeting start time + 1 hour
        //else if (startTimeMinutes > (parseInt(meetingStartTimeMinutes) + parseInt(allowedMinutesForTimeInAfterMeetingSTart)) || startTimeMinutes < (meetingStartTimeMinutes - allowedBeforeMeetingTimeInMinutes)) {
        else if (startTimeMinutes < (meetingStartTimeMinutes - allowedBeforeMeetingTimeInMinutes)) {
            var strMsg = kony.i18n.getLocalizedString("strErrMsgStarTimeLimitation");
            strMsg = strMsg.replace("XXX", allowedBeforeMeetingTimeInMinutes);
            strMsg = strMsg.replace(/YYY/g, glbSelectedMeetingStartTime);
            strMsg = strMsg.replace(/ZZZ/g, allowedMinutesForTimeInAfterMeetingSTart);
            //alertForMessages(strMsg);
            displayPopupAlert(strMsg);
            return false;
        }
        //start and end time duration must not exceed 180 minutes (global variables)
        else if (startEndtimediff > allowdMaxDurationMinutesForMeeting) { //&& in_array(deviceLocale,Countries["US"])) {
            var strMsg = kony.i18n.getLocalizedString("strErrMsgMeetingDurationNotValid");
            strMsg = strMsg.replace("XXX", allowdMaxDurationMinutesForMeeting);
            showAlertForConfirmation(strMsg);
            //return false;
        }
        //check validation for trainee name if mentor is true, min and max length and invalid characters for trainee name  -- MEGCA-17,21 ,18
        else if (isSelMeetingOpenHours != true && isMentorTrainee == true && traineeName == "") {
            var strMsg = kony.i18n.getLocalizedString("strErrMsgTraineeName");
            displayPopupAlert(strMsg);
            return false;
        }
        //check validation for trainee name length - min 3 and max 25 , if mentor is true -- MEGCA-17,21,18
        else if (isSelMeetingOpenHours != true && isMentorTrainee == true && traineeName.length < 3) {
            var strMsg = kony.i18n.getLocalizedString("strErrMsgTraineeNameMinLength");
            displayPopupAlert(strMsg);
            return false;
        } else if (isSelMeetingOpenHours != true && !regex.test(traineeName)) {
            var strMsg = kony.i18n.getLocalizedString("strValidTraineename");
            displayPopupAlert(strMsg);
            return false;
        } else if (checkIfNetworkIsAvailable()) {
            if (isSelMeetingOpenHours || (in_array(deviceLocale, Countries["US"]))) {
                boTallyTimesSheet.validateTimeForEmpUsingService(getTimesheetValidFlag);
            } else {
                getTimesheetValidFlag('No');
            }
            //network checking and validation using service
        } else if (!checkValidationForEmployeeTimesheetRecord()) {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgEmployeeExists"));
            return false;
        } else {
            kony.print("------->step 2  - refreshing ");
            processTimesheetDBOperation();
        }
    } else {
        displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgSelectEmployee"));
        return false;
    }
}
//this function is used to check the timesheet entry for selected employee in the local database for duplication purpose 
function checkValidationForEmployeeTimesheetRecord() {
    popupTimesheetId = popupAddTime.hidTallyTimesheetID.text;
    var TempValue = Math.abs(popupTimesheetId);
    var action = (TempValue > 0) ? "update" : "add";
    kony.print("------------>checkValidationForEmployeeTimesheetRecord = " + action + '-- ' + popupTimesheetId);
    var arrTimesheetdata = new Array();
    var timesheetRecords = 0;
    var isValid = true;
    if (frmTallyMeetingTimeSheet.segTimesheet.data && frmTallyMeetingTimeSheet.segTimesheet.data.length > 0) {
        arrTimesheetdata = frmTallyMeetingTimeSheet.segTimesheet.data;
        timesheetRecords = arrTimesheetdata.length;
    }
    if (action == 'update') {
        kony.print(" update check for duplication ");
        var selectedIndex = frmTallyMeetingTimeSheet.segTimesheet.selectedIndex;
        var selectedRowIndex = selectedIndex[1];
        var selectedObjectToEdit = frmTallyMeetingTimeSheet.segTimesheet.data[selectedRowIndex];
        if (selectedObjectToEdit.lblNumber == popupAddTime.lblEmployeeNumber.text) {
            isvalid = false;
        }
        //else
        {
            for (i = 0; i < timesheetRecords; i++) {
                //case 1 : not valid if : action = add and employee number found in the segment data, for selected employee in pop up 
                //case 2 : not valid if : action = update and employee number found in the segment data found in the other rows than selected
                if (popupAddTime.lblEmployeeNumber.text == arrTimesheetdata[i].lblNumber && selectedObjectToEdit.lblNumber != popupAddTime.lblEmployeeNumber.text) {
                    isValid = false;
                }
            }
        }
    } else {
        kony.print(" -----> add time  check for duplication ");
        for (i = 0; i < timesheetRecords; i++) {
            //case 1 : not valid if : action = add and employee number found in the segment data, for selected employee in pop up 
            //case 2 : not valid if : action = update and employee number found in the segment data found in the other rows than selected
            if (popupAddTime.lblEmployeeNumber.text == arrTimesheetdata[i].lblNumber) {
                isValid = false;
            }
        }
    }
    return isValid;
}
// this function will be called on init of the timesheet page(list section )
function eventPreShow_TallyTimesheet() {
    kony.print("------->step  4  -  ");
    if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) //is CA+ Meeting type 
    {
        //change the header labels for break in and break out for CA - MEGCA-17 ,21
        frmTallyMeetingTimeSheet.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblHeaderTraineeName");
        frmTallyMeetingTimeSheet.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblHeaderMentor");
        frmTallyMeetingTimeSheet.lblHeaderEndTime.isVisible = false;
        frmTallyMeetingTimeSheet.lblHeaderStartTime.isVisible = false;
        frmTallyMeetingTimeSheet.lblTimesheetMessage.text = "";
        frmTallyMeetingTimeSheet.lblHeaderBreakIn.containerWeight = 21;
        frmTallyMeetingTimeSheet.lblHeaderBreakout.containerWeight = 21;
    } else {
        frmTallyMeetingTimeSheet.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
        frmTallyMeetingTimeSheet.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
        frmTallyMeetingTimeSheet.lblHeaderBreakIn.containerWeight = 12;
        frmTallyMeetingTimeSheet.lblHeaderBreakout.containerWeight = 12;
        frmTallyMeetingTimeSheet.lblHeaderEndTime.isVisible = true;
        frmTallyMeetingTimeSheet.lblHeaderStartTime.isVisible = true;
    }
    frmTallyMeetingTimeSheet.lblTitle.text = kony.i18n.getLocalizedString("strLblTallyMeeting") + ": " + glbCurrentMeetingValue + " -- " + kony.i18n.getLocalizedString("strlblTimesheetHeading");
    try {
        frmTallyMeetingTimeSheet.segTimesheet.removeAll();
        kony.print("------->step  5  -  ");
        //Check if record exists or not
        boTallyTimesSheet.checkWhetherEmpTimesheetDataForMeetingExistOrNot(glbMeetingNum, glbEmployeeId, checkWhetherEmpTimesheetDataForMeetingExistOrNotResponse);
    } catch (exp) {
        GlobalException(exp);
    }
}
//This function is callback of checkWhetherEmpTimesheetDataForMeetingExistOrNot
function checkWhetherEmpTimesheetDataForMeetingExistOrNotResponse(recordExists) {
    kony.print("::DJP::recordExists=" + recordExists + " glbIsTallyTimesheetChanged=" + glbIsTallyTimesheetChanged);
    if (!recordExists && (glbIsTallyTimesheetChanged.toString() == "false" || glbIsTallyTimesheetChanged.toString() == "0")) {
        kony.print(":::: NOT EXISTS");
        //Insert default entry of logged in SP in local DB and show same record in UI
        var timesheetId = 0;
        var meetingDate = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")) + "T"; //** MEG 6386
        //For Time In and Time Out
        var strStartTime = convertTimeTo24HrsFormat(glbSelectedMeetingStartTime);
        var strEndTime = convertTimeTo24HrsFormat(glbSelectedMeetingEndTime);
        var strDBStartTime = meetingDate + strStartTime + ":00";
        var strDBEndTime = meetingDate + strEndTime + ":00";
        var meetingSetUp = "false";
        var strMentorTraineeName = "";
        var timesheetObj = {};
        timesheetObj.Id = 0;
        timesheetObj.EmpName = glbUserFirstName + " " + glbUserLastName;
        timesheetObj.EmpNumber = glbEmployeeNumber;
        timesheetObj.MeetingId = glbMeetingNum;
        timesheetObj.TimeIn = "";
        timesheetObj.TimeOut = "";
        timesheetObj.MeetingDate = glbMeetingDate;
        timesheetObj.EmpRole = empRoleEnum[1];
        timesheetObj.EmpId = glbEmployeeId;
        timesheetObj.CountryID = getCountryID();
        if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) {
            timesheetObj.MeetingSetup = meetingSetUp;
            timesheetObj.MentorTraineeName = strMentorTraineeName;
        } else {
            timesheetObj.BreakOut = "";
            timesheetObj.BreakIn = "";
        }
        kony.print("::timesheetObj:: timesheetObj = " + JSON.stringify(timesheetObj));
        isTimeSheetEdit = false; //Prateek: Added to ensure that timesheet entry is added as record does not exist
        timeSheetId = boTallyTimesSheet.addAndUpdateEmployeeTimesheet(timesheetObj, timesheetId, addAndUpdateEmployeeTimesheetResponse, false);
        boTallyTimesSheet.modifyMeetingTimesheet();
    } else {
        kony.print("::::EXISTS");
        glbTallyDefaultDataInserted = true;
        //Get data and show it on UI
        boTallyTimesSheet.getCurrentMeetingTimeSheetFromLocalDb(getTallyTimesheetFromLocalDbResponse);
    }
}
//This function is called as a callback of addAndUpdateEmployeeTimesheet
function addAndUpdateEmployeeTimesheetResponse() {
    glbTallyDefaultDataInserted = true;
    //Get data and show it on UI
    boTallyTimesSheet.getCurrentMeetingTimeSheetFromLocalDb(getTallyTimesheetFromLocalDbResponse);
}
//this function is used to bind the data from the search enployee response to search employee pop up 
function getTallyTimesheetFromLocalDbResponse(status, tallyTimesheet_data_temp) {
    displayProgressView();
    if (status) {
        frmTallyMeetingTimeSheet.segTimesheet.setData(tallyTimesheet_data_temp);
    } else {
        //frmTallyMeetingTimeSheet.segTimesheet.setVisibility(false);
    }
    removeProgressView();
    if (frmTallyMeetingTimeSheet.segTimesheet.data != null) {
        if (frmTallyMeetingTimeSheet.segTimesheet.data.length > 0) {
            frmTallyMeetingTimeSheet.btnContinue.skin = "btnwwtxtSearchLocation";
            frmTallyMeetingTimeSheet.btnContinue.setEnabled(true);
        } else {
            frmTallyMeetingTimeSheet.btnContinue.skin = "btnNoWeighInSelected";
            frmTallyMeetingTimeSheet.btnContinue.setEnabled(false);
            //	alertForMessages(kony.i18n.getLocalizedString("strmsgTallyTimesheetDetail"));
        }
    } else {
        frmTallyMeetingTimeSheet.btnContinue.skin = "btnNoWeighInSelected";
        frmTallyMeetingTimeSheet.btnContinue.setEnabled(false);
        //	alertForMessages(kony.i18n.getLocalizedString("strmsgTallyTimesheetDetail"));
    }
}
//Search Employee by name or number service response
function searchEmployeeFromTimesheetResponse(status, popupEmployee_seg_temp) {
    popupEmployeeSearch.segEmplyoeeData.removeAll();
    removeProgressView();
    if (status) {
        popupEmployeeSearch.lblNoRecordsFound.isVisible = false;
        popupEmployeeSearch.scrollbox12443534679147550.containerHeight = 27;
        popupEmployeeSearch.segEmplyoeeData.setData(popupEmployee_seg_temp);
    } else {
        popupEmployeeSearch.scrollbox12443534679147550.containerHeight = 20;
        popupEmployeeSearch.lblNoRecordsFound.isVisible = true;
    }
}

function initAddTimePopUp() {
    kony.print(" --> set add time default values  " + deviceLocale + "--" + Countries["CA"]);
    //removeAllPicker();
    popupAddTime.vboxMeetingSetup.setEnabled(true);
    isTimeSheetEdit = false;
    if (checkValidString(popupAddTime.hidTallyTimesheetID.text)) popupAddTime.hidTallyTimesheetID.text = 0;
    if (checkValidString(popupAddTime.lblEmployee.text)) popupAddTime.lblEmployee.text = "";
    if (checkValidString(popupAddTime.hidEmployeeId.text)) popupAddTime.hidEmployeeId.text = 0;
    if (checkValidString(popupAddTime.lblEmployeeNumber.text)) popupAddTime.lblEmployeeNumber.text = "";
    if (checkValidString(popupAddTime.lblPosition.text))
        if (in_array(deviceLocale, Countries["CA"])) {
            if (isSelMeetingOpenHours) {
                popupAddTime.lblPosition.text = getLocalizedString("strReceptionist");
            } else {
                popupAddTime.lblPosition.text = (checkMeetingIsInBetween()) ? getLocalizedString("strLeader") : getLocalizedString("strReceptionist");
            }
        } else {
            popupAddTime.lblPosition.text = (checkMeetingIsInBetween()) ? getLocalizedString("strLeader") : getLocalizedString("strReceptionist");
        }
        // popupAddTime.lblPosition.text = (checkMeetingIsInBetween()) ? "Leader" : "Receptionist";
    if (checkValidString(popupAddTime.lblStartTime.text)) popupAddTime.lblStartTime.text = ""; //glbSelectedMeetingStartTime;
    if (checkValidString(popupAddTime.lblEndTime.text)) popupAddTime.lblEndTime.text = ""; //glbSelectedMeetingEndTime;
    if (checkValidString(popupAddTime.lblBreakStartTime.text)) popupAddTime.lblBreakStartTime.text = "";
    if (checkValidString(popupAddTime.lblBreakEndTime.text)) popupAddTime.lblBreakEndTime.text = "";
    popupAddTime.lblAddTimeHeader.text = kony.i18n.getLocalizedString("strAddTime");
    //MEGCA-17 - meeting type = open hours /trade condition
    if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) //CA + meeting type= trade 
    {
        //case 1-  (MEGCCA + meting type = TRADE) - hide start/end/breakin/breakout time and show traine name and meeting setup
        popupAddTime.hboxStartTime.setVisibility(false);
        popupAddTime.hboxEndTime.setVisibility(false);
        popupAddTime.hboxBreakStartTime.setVisibility(false);
        popupAddTime.hboxBreakEndTime.setVisibility(false);
        popupAddTime.hboxTraineeName.setVisibility(true);
        popupAddTime.hboxParticipated.setVisibility(true);
        popupAddTime.lineBeforeEndTime.setVisibility(false);
        popupAddTime.lineBeforeStartTime.setVisibility(false);
        popupAddTime.lineBreakEndTime.setVisibility(false);
        popupAddTime.lineBreakStartTime.setVisibility(false);
        popupAddTime.imgCheckbox.src = "icn_checkbox_unchecked.png";
        popupAddTime.imgParticipationCheckbox.src = "icn_checkbox_unchecked.png";
        popupAddTime.txtTraineeName.text = "";
        popupAddTime.txtTraineeName.setEnabled(false);
        kony.print("-->  add time pop up  " + glbMeetingType + "--" + isSelMeetingOpenHours);
        var strStartTime = glbSelectedMeetingStartTime
        var strEndTime = getTimeFromMinutes(parseInt(getMinutesFromTime(glbSelectedMeetingStartTime)) + 150); // 2:30 hours after meeting start time
        kony.print("-->add time strEndTime = " + strEndTime + " --strStartTime = " + strStartTime);
        if (strEndTime == "00:00 PM" || strEndTime == "0:00 PM") {
            kony.print(" end time is 12 pm ");
            strEndTime = "12:00 PM";
        }
        if (strStartTime == "00:00 PM" || strStartTime == "0:00 PM") {
            kony.print(" start time is 12 pm ");
            strStartTime = "12:00 PM";
        }
        popupAddTime.lblEndTime.text = strEndTime;
        popupAddTime.lblStartTime.text = strStartTime;
        kony.print(" --> CA- start and end time set from initAddtime function -start and end time- " + popupAddTime.lblStartTime.text + "--" + popupAddTime.lblEndTime.text);
    } else //case 2-  (MEGCCA + meting type = OPEN HOURS ) AND MEG-US  Are same
    {
        popupAddTime.hboxStartTime.setVisibility(true);
        popupAddTime.hboxEndTime.setVisibility(true);
        popupAddTime.hboxBreakStartTime.setVisibility(true);
        popupAddTime.hboxBreakEndTime.setVisibility(true);
        popupAddTime.hboxTraineeName.setVisibility(false);
        popupAddTime.hboxParticipated.setVisibility(false);
        popupAddTime.lineBreakEndTime.setVisibility(true);
        popupAddTime.lineBreakStartTime.setVisibility(true);
        popupAddTime.lineBeforeEndTime.setVisibility(true);
        popupAddTime.lineBeforeStartTime.setVisibility(true);
    }
}
// this function is calling when add time button has been clicked
function eventOnClickAddTimeButton() {
    //editLeaderOne = false;
    //editReceptionistOne = false;
    kony.print(" --> open pop up ");
    var context = {
        "widget": frmTallyMeetingTimeSheet.btnAddTime,
        "anchor": "top",
        "sizetoanchorwidth": false
    };
    // popupAddTime.setContext(context);
    kony.print(" --> set add time default values  ");
    initAddTimePopUp();
    removeAllPicker();
    popupAddTime.show();
}
// this function is called when click on a selected employee row
function eventOnClickEditEmpTimeButton() {
    //var context = { "widget": frmTallyMeetingTimeSheet.btnAddTime, "anchor": "top", "sizetoanchorwidth": true };
    //    popupAddTime.setContext(context);
    //    popupAddTime.show();
    //    if (frmTallyMeetingTimeSheet.segTimesheet && frmTallyMeetingTimeSheet.segTimesheet.data) {
    //        var selectedIndex = frmTallyMeetingTimeSheet.segTimesheet.selectedIndex;
    //        var selectedRowIndex = selectedIndex[1];
    //        var selectedObjectForAddtime = frmTallyMeetingTimeSheet.segTimesheet.data[selectedRowIndex];
    //        kony.print("-------> selectd object = " + JSON.stringify(selectedObjectForAddtime));
    //
    //        eventOnClickAddTime(selectedObjectForAddtime);
    //    }
}
//function is to get the flag in return, while checking timesheet entry on the server
function getTimesheetValidFlag(isDupFlag) {
    kony.print("-------isDupFlag " + isDupFlag);
    if (isDupFlag == "Yes") {
        removeProgressView();
        displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgEmployeeExistsOnServer"));
        return false;
    } else {
        if (!checkValidationForEmployeeTimesheetRecord()) {
            removeProgressView();
            //alertForMessages(kony.i18n.getLocalizedString("strErrMsgEmployeeExists"));
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgEmployeeExists"));
            return false;
        } else {
            processTimesheetDBOperation();
            kony.print("------->step 3  -  ");
            //  popupAddTime.dismiss();
            alertForMessages(kony.i18n.getLocalizedString("strMsgTimesheetDataSaved"));
            return true;
        }
    }
}
//process for add and edit timesheet entries in database 
function processTimesheetDBOperation() {
    var timesheetId = popupAddTime.hidTallyTimesheetID.text;
    var meetingDate = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")) + "T"; //** MEG 6386
    var strStartTime = convertTimeTo24HrsFormat(popupAddTime.lblStartTime.text);
    var strEndTime = convertTimeTo24HrsFormat(popupAddTime.lblEndTime.text);
    var strBreakStartTime = popupAddTime.lblBreakStartTime.text;
    var strBreakEndTime = popupAddTime.lblBreakEndTime.text;
    var strDBStartTime = meetingDate + strStartTime + ":00";
    var strDBEndTime = meetingDate + strEndTime + ":00";
    var strDBBreakStartTime = (strBreakStartTime != null && strBreakStartTime != "") ? (meetingDate + convertTimeTo24HrsFormat(strBreakStartTime) + ":00") : "";
    var strDBBreakEndTime = (strBreakEndTime != null && strBreakEndTime != "") ? (meetingDate + convertTimeTo24HrsFormat(strBreakEndTime) + ":00") : "";
    var timesheetObj = {};
    timesheetObj.Id = 0;
    timesheetObj.EmpName = popupAddTime.lblEmployee.text;
    timesheetObj.EmpNumber = popupAddTime.lblEmployeeNumber.text;
    timesheetObj.MeetingId = glbMeetingNum;
    timesheetObj.TimeIn = strDBStartTime;
    timesheetObj.TimeOut = strDBEndTime;
    /*Ami   timesheetObj.BreakOut = strDBBreakEndTime;
       timesheetObj.BreakIn = strDBBreakStartTime;*/
    //Ami add
    if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) {
        var meetingSetUp = (popupAddTime.imgParticipationCheckbox.src == "icn_checkbox_checked.png") ? "true" : "false";
        var strMentorTraineeName = (popupAddTime.imgCheckbox.src == "icn_checkbox_checked.png") ? popupAddTime.txtTraineeName.text : "";
        timesheetObj.TimeIn = meetingDate + glbSelectedMeetingStartTime + ":00";
        timesheetObj.TimeOut = meetingDate + getTimeFromMinutes(parseInt(getMinutesFromTime(glbSelectedMeetingStartTime)) + 150) + ":00";; // 2:30 hours after meeting start time;		
        timesheetObj.MeetingSetup = meetingSetUp;
        timesheetObj.MentorTraineeName = strMentorTraineeName;
    } else {
        timesheetObj.BreakOut = strDBBreakStartTime;
        timesheetObj.BreakIn = strDBBreakEndTime;
    }
    timesheetObj.MeetingDate = glbMeetingDate; //supportTime(new Date(), "", "yyyy-mm-dd");
    if (popupAddTime.lblPosition.text == getLocalizedString("strReceptionist")) timesheetObj.EmpRole = empRoleEnum[1];
    else if (popupAddTime.lblPosition.text == getLocalizedString("strLeader")) timesheetObj.EmpRole = empRoleEnum[2];
    timesheetObj.EmpId = popupAddTime.hidEmployeeId.text;
    kony.print("---> timesheetObj => " + JSON.stringify(timesheetObj));
    timeSheetId = boTallyTimesSheet.addAndUpdateEmployeeTimesheet(timesheetObj, timesheetId, null, false);
    popupAddTime.dismiss();
}