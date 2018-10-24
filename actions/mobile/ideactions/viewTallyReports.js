var selectedTallyReportMeetingDate = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
var selectedTallyReportMeetingOccID = 0;
var isPopupMeetingDateShown = false;

/**
 * Called on Post Show - Set Header Section and Resets ComboBox 
 * @returns {} 
 */
function onPostShowTallyReports() {

    if (in_array(deviceLocale,Countries["CA"])) {
        frmTallyReports.hboxDebitCards.isVisible = true;
        frmTallyReports.hboxChecks.isVisible = false;
        frmTallyReports.hbox20WeekPass.isVisible = true;
        frmTallyReports.hboxsixMonthPass.isVisible = true;
        frmTallyReports.hboxMPactivated.isVisible = false;
        frmTallyReports.hbox3MPactivated.isVisible = false;
        frmTallyReports.hbox6MPactivated.isVisible = false;
        frmTallyReports.hboxSixMonthLTCPass.setVisibility(false);
        frmTallyReports.hbox6MPLTCactivated.setVisibility(false); 
    } else {
        frmTallyReports.hboxDebitCards.isVisible = false;
        frmTallyReports.hboxChecks.isVisible = true;
        frmTallyReports.hbox20WeekPass.isVisible = false;
        frmTallyReports.hboxsixMonthPass.isVisible = true; //false;
        frmTallyReports.hboxMPactivated.isVisible = true;
        frmTallyReports.hbox3MPactivated.isVisible = true;
        frmTallyReports.hbox6MPactivated.isVisible = true;
        frmTallyReports.hboxSixMonthLTCPass.setVisibility(true);
        frmTallyReports.hbox6MPLTCactivated.setVisibility(true);
    }

    frmTallyReports.lblHeaderBreakIn.containerWeight = 12;
    frmTallyReports.lblHeaderBreakout.containerWeight = 12;
    frmTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMeetingReports"); // Added for MEGCA-96

    //MEGCA-17- if meeting type is Trade -- means not open hours then hide in and out time and change headera label
    if (in_array(deviceLocale,Countries["CA"]) && isSelMeetingOpenHours != true) {
        kony.print(" -- trade meeting ");
        //change the header labels for break in and break out for CA - MEGCA-17 ,21
        frmTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblHeaderTraineeName");
        frmTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblHeaderMentor");

        frmTallyReports.lblHeaderTimeIn.setVisibility(false);
        frmTallyReports.lblHeaderTimeout.setVisibility(false);
        frmTallyReports.lblHeaderBreakIn.containerWeight = 24;
        frmTallyReports.lblHeaderBreakout.containerWeight = 24;
    } else {
        kony.print(" -----> opn ehours meting ");
        frmTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
        frmTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
        frmTallyReports.lblHeaderTimeIn.setVisibility(true);
        frmTallyReports.lblHeaderTimeout.setVisibility(true);
    }
    
        frmTallyReports.lblselectReportType.text = kony.i18n.getLocalizedString("strSelectReportType");
        frmTallyReports.hboxTallyHeaderPopup.setVisibility(true);
        
        
        frmTallyReports.hboxMemberMilestone.setVisibility(false);
        frmTallyReports.hboxProductSale.setVisibility(false);
        frmTallyReports.hboxEmployeeSale.setVisibility(false);
        frmTallyReports.hboxProductReturn.setVisibility(false);
    
    if (kony.application.getPreviousForm().id != frmSelectMeeting.id) {

        kony.print("-->onPostShowTallyReports - hide show in out colum based on meetnig type");
        //frmTallyReports.lblHdrMeetingDate.text = kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate");
        frmTallyReports.lblHdrMeetingDatePopup.text = kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate"); // Added for MEGCA-96
        //frmTallyReports.lblCurrMeetingInfo.text = kony.i18n.getLocalizedString("strTallyReportSelectmeeting");
        frmTallyReports.lblCurrMeetingInfoPopup.text = kony.i18n.getLocalizedString("strTallyReportSelectmeeting");

        frmTallyReports.hboxAtRiskMembers.setVisibility(false); // Added for MEGCA-96
        frmTallyReports.hboxMainContainer.setVisibility(false);
        if (popupCurrentMeeting.segMeetingList != null) {
            if (popupCurrentMeeting.segMeetingList.data != undefined || popupCurrentMeeting.segMeetingList.data != null) {
                popupCurrentMeeting.segMeetingList.removeAll();
            }
        }
    }
    showLocationDetailsInHeader();
}


/**
 * This function brings the location name and number from the database and sets in header (postShow)
 * @returns {} 
 */
function showLocationDetailsInHeader() {
    kony.print("::showLocationDetailsInHeader::");
    boTallyMeetingReport.getLocationNameAndNumber(function(res) {
        kony.print("::showLocationDetailsInHeader::res=" + JSON.stringify(res));
        frmTallyReports.lblHdrLocationName.text = res.TallyLocationName;
        frmTallyReports.lblHdrLocationNumber.text = glbLocationNum;
    });
}


/**
 * This function Opens the Date Selector Popup - Loads with default date - Today and till 1 Month before.
 */
function onSelectTallyMeetingDate() {

    popupDateOfBirth.calEnrollMemberDOB.clear();
    var context1 = {
	    "widget": frmTallyReports.hboxDatePickerPopup,
	    "anchor": "right",
	    "sizetoanchorwidth": true
    };
    
    popupDateOfBirth.setContext(context1);

    isPopupMeetingDateShown = true;
    // Set it to one month ago
    var lastDate = new Date();
    lastDate.setMonth(lastDate.getMonth() - 1);
    var lastday = lastDate.getDate();
    var lastmon = lastDate.getMonth() + 1;
    var lastyear = lastDate.getFullYear();



    var curdate = new Date();
    var curday = curdate.getDate();
    var curmon = curdate.getMonth() + 1;
    var curyear = curdate.getFullYear();

    popupDateOfBirth.calEnrollMemberDOB.clear();
    //popupDateOfBirth.calEnrollMemberDOB.validStartDate = [lastday,lastmon,lastyear];
    popupDateOfBirth.calEnrollMemberDOB.validEndDate = [curday, curmon, curyear];
    popupDateOfBirth.calEnrollMemberDOB.date = [curday, curmon, curyear];
    //kony.print("::frmTallyReports.lblHdrMeetingDate.text=" + frmTallyReports.lblHdrMeetingDate.text);
    //If User has already selected a date populate with it
    
    if (frmTallyReports.lblHdrMeetingDatePopup.text != kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate")) {
    	var dateThere = frmTallyReports.lblHdrMeetingDatePopup.text;
    	//if(deviceLocale == "fr_CA") {
//    		kony.print('dateThere-------------------->'+dateThere);
//        	var dateArray = dateThere.split(' ');
//			dateThere = dateArray[0] + ' ' + getMonthsValueShorForm(dateArray[1].substring(0,dateArray[1].length-1)) +' ' +dateArray[2];	
//    	}
		kony.print("***** dateThere " + dateThere);
        var curdate = new Date(dateThere);
        kony.print('curdate-------------------->'+curdate);
        
        var curyear, curday, curmon;
        if (curdate != "Invalid Date") {
        	curday = curdate.getDate();
            curmon = curdate.getMonth() + 1;
            curyear = curdate.getFullYear();
            popupDateOfBirth.calEnrollMemberDOB.date = [curday, curmon, curyear];
        }
    }
    

    popupDateOfBirth.show();
}

/**
 * This is called on save of popup of date time
 * @returns {} - Sets label and call service to get meetings 
 */
function setMeetingDateForTallyMeeting(date, month, year) {
    var montharray = new Array(getLocalizedString("strJan"), getLocalizedString("strFeb"), getLocalizedString("strMar"), getLocalizedString("strApr"), getLocalizedString("strMay"), getLocalizedString("strJun"), getLocalizedString("strJul"), getLocalizedString("strAug"), getLocalizedString("strSept"), getLocalizedString("strOct"), getLocalizedString("strNov"), getLocalizedString("strDec"));
    kony.print("montharray====>>>"+JSON.stringify(montharray));
    var dateToShow;
    if(deviceLocale == "fr_CA") {
    	dateToShow = date + " " + montharray[month - 1] + ", " + year;
    } else {
    	dateToShow = montharray[month - 1] + " " + date + ", " + year;
    }
    kony.print('dateToShow----------->'+dateToShow);
    //frmTallyReports.lblHdrMeetingDate.text = dateToShow;
    frmTallyReports.lblHdrMeetingDatePopup.text = dateToShow; // Added for MEGCA-96
    var dateStr = month + "/" + date + "/" + year; // eg.02/23/2015
    selectedTallyReportMeetingDate = new Date(dateStr);
    resetComboTallyReports();

    boTallyMeetingReport.getAllMeetingsForDate(selectedTallyReportMeetingDate, function(res) {
        setMeetingsInTallyDropdownData(res);
        popupDateOfBirth.dismiss();

    });

    if (isPopupMeetingDateShown == true) {
        kony.print(" --> reset the combo values on change of date");
        //frmTallyReports.lblCurrMeetingInfo.text = kony.i18n.getLocalizedString("strTallyReportSelectmeeting");
        frmTallyReports.lblCurrMeetingInfoPopup.text = kony.i18n.getLocalizedString("strTallyReportSelectmeeting");
        frmTallyReports.lblselectReportType.text = kony.i18n.getLocalizedString("strSelectReportType");
        isPopupMeetingDateShown = false;
    }

}

/**
 * This function Set Meetings in dropdown from the response of time selected 
 * @param {} response
 * @returns {} 
 */
function setMeetingsInTallyDropdownData(response) {
    kony.print("::setMeetingsInTallyDropdownData::res=" + JSON.stringify(response));
    if (response.length > 0) {
        var Meetings_temp = [];
        var meetingResponse_segmentMeetings_temp = [];
        var mtngTypeId = "";
        var meetingTime = "";
        var meetingStatus = "";
        var bindMeetingDataHomeScreen = [];
        for (var i in response) {
            var vData = response[i];
            kony.print("vData:=== " + JSON.stringify(vData));
            mtngTypeId = kony.sync.getString(vData._MeetingTypeID);
            mtngTypeId = parseInt(mtngTypeId);
            kony.print("Getting meeting type ID for Meeting type " + mtngTypeId);
            var mtngTypeDesc = LocaitonLookupTable[mtngTypeId];
            kony.print("meeting type ID Desc:== " + mtngTypeDesc);
            kony.print("meeting status:== " + kony.sync.getString(vData._MeetingStatus));

            meetingTime = kony.sync.getString(vData._DTCTime);
            meetingTime = getFormatedValue(meetingTime);
            TallyMettingDate = meetingTime;

            bindMeetingDataHomeScreen.push({
                "lblMeetings": ((mtngTypeDesc && mtngTypeDesc != "") ? (mtngTypeDesc + " - " + meetingTime) : meetingTime),
                "meetingName": ((mtngTypeDesc && mtngTypeDesc != "") ? (mtngTypeDesc + " - " + meetingTime) : meetingTime),
                "meetingTime": meetingTime,
                "meetingNum": kony.sync.getString(vData._ID),
                "meetinglookUpID": mtngTypeId,
                "meetingStatus": "Open",
                "meetingDayTimeCode": kony.sync.getString(vData._DayTimeCodeID),
                "isTimesheetModified": kony.sync.getString(vData._isTimesheetModified),
                "meetingDate": kony.sync.getString(vData._MeetingDate),
                "meetingDTCTime": kony.sync.getString(vData._DTCTime),
                 "backOfficerRefID": kony.sync.getString(vData._BackOfficeRefID)
            });
        }

        bindMeetingDataHomeScreen = _.sortBy(bindMeetingDataHomeScreen, function(d) {
                return parseInt(d.meetingDTCTime);
            }) // sort the meeting by the Meeting Time MEG-4554
        kony.print("::setMeetingsInTallyDropdownData::bindMeetingDataHomeScreen=" + JSON.stringify(bindMeetingDataHomeScreen));
        if (popupCurrentMeeting.segMeetingList != null) {
            if (popupCurrentMeeting.segMeetingList.data != undefined || popupCurrentMeeting.segMeetingList.data != null) {
                popupCurrentMeeting.segMeetingList.removeAll();
            }
        }
        if (popupCurrentMeeting.segMeetingList) popupCurrentMeeting.segMeetingList.setData(bindMeetingDataHomeScreen);
    } else {
        if (popupCurrentMeeting.segMeetingList != null) {
            if (popupCurrentMeeting.segMeetingList.data != undefined || popupCurrentMeeting.segMeetingList.data != null) {
                popupCurrentMeeting.segMeetingList.removeAll();
            }
        }
        alertForMessages(kony.i18n.getLocalizedString("strNoMeetingFoundTallyReport"));
    }

}

/**
 * This Function is called on clicking the meetingtime selection, this opens the meeting time popup.
 */
function onClickvboxMeetingsReport() {

    
        if (frmTallyReports.lblHdrMeetingDatePopup.text == kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate")) {
            alertForMessages(kony.i18n.getLocalizedString("strTallyReportSelectDate"));
        } else {
            var context1 = {
                "widget": frmTallyReports.vboxMeetingsPopup,
                "anchor": "bottom",
                "sizetoanchorwidth": false
            };
            popupCurrentMeeting.setContext(context1);
            kony.print("::DJP::popupCurrentMeeting.segMeetingList=" + JSON.stringify(popupCurrentMeeting.segMeetingList.data));
            if (popupCurrentMeeting.segMeetingList && popupCurrentMeeting.segMeetingList.data && popupCurrentMeeting.segMeetingList.data.length > 0) {
                popupCurrentMeeting.show();
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strNoMeetingFoundTallyReport"));
            }
        }
   

}

/**
 * This function is called on selecting a meeting from the dropdown.
 * @param {} CurrMeetingKeyValues
 * @returns {} 
 */
function onSelectMeetingForTallyReport(CurrMeetingKeyValues) {
    kony.print("::onSelectMeetingForTallyReport::CurrMeetingKeyValues=" + JSON.stringify(CurrMeetingKeyValues) + "-- meeting lookup id = " + CurrMeetingKeyValues[0].meetingLookUpID);
    var mtngOccrID = CurrMeetingKeyValues[0].meetingNum;
    resetComboTallyReports();

    //MEGCA-18 - open hours or trade meetintg condition 
    kony.print("--> current meting type , glb ==> " + CurrMeetingKeyValues[0].meetinglookUpID + "== " + glbOpenHousMeetingObj.meetingTypeId);

    frmTallyReports.lblselectReportType.text = kony.i18n.getLocalizedString("strSelectReportType");
	if(in_array(deviceLocale,Countries["CA"])){
		if (CurrMeetingKeyValues[0].meetinglookUpID == glbOpenHousMeetingObj.meetingTypeId) {
	        isSelMeetingOpenHours = true;
	        frmTallyReports.lblHeaderTimeIn.setVisibility(true);
	        frmTallyReports.lblHeaderTimeout.setVisibility(true);
	        frmTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
	        frmTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
	        frmTallyReports.lblHeaderBreakIn.containerWeight = 12;
	        frmTallyReports.lblHeaderBreakout.containerWeight = 12;
	    } else {
	        isSelMeetingOpenHours = false;
	        frmTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblHeaderTraineeName");
	        frmTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblHeaderMentor");
	        frmTallyReports.lblHeaderTimeIn.setVisibility(false);
	        frmTallyReports.lblHeaderTimeout.setVisibility(false);
	        frmTallyReports.lblHeaderBreakIn.containerWeight = 24;
	        frmTallyReports.lblHeaderBreakout.containerWeight = 24;
	    }
		
	}	
    
    //frmTallyReports.lblCurrMeetingInfo.text = CurrMeetingKeyValues[0].meetingName;
    frmTallyReports.lblCurrMeetingInfoPopup.text = CurrMeetingKeyValues[0].meetingName;
    selectedTallyReportMeetingOccID = mtngOccrID;
    selectedTallyReportMeetingTime = CurrMeetingKeyValues[0].meetingTime;
    kony.print("::selectedTallyReportMeetingOccID =" + selectedTallyReportMeetingOccID);
    popupCurrentMeeting.dismiss();
}


function loadReportType() {
    popupTallyReportOptions.tallyReportActionsSegment.data = [];
    var reportTypes = [{
        "lblActionItem": getLocalizedString("strLblDeviceTally")//"My Device Tally"
    }, {
        "lblActionItem": getLocalizedString("strLblMeetingTally")//"Meeting Tally"
    },
    {
        "lblActionItem": getLocalizedString("strLblAttendanceAndSale")//"Device Attendance and Sale"
    }];

    if (in_array(deviceLocale,Countries["CA"])) {
        reportTypes = [{
            "lblActionItem": getLocalizedString("strLblDeviceTally")//"My Device Tally"
        }, {
            "lblActionItem": getLocalizedString("strLblMeetingTally")//"Meeting Tally"
        }, {
        	"lblActionItem": getLocalizedString("strLblAttendanceAndSale")//"Device Attendance and Sale"
    	}, {
            "lblActionItem": getLocalizedString("strLblMembetAtRisk")//"Member At Risk"
        }];
    }
    popupTallyReportOptions.tallyReportActionsSegment.setData(reportTypes);
}

/**
 * This is called when we click any of the tabs - My Device Tally / Meeting Tally
 * @returns {} 
 */


function onClickTallyTabs() {
    
        var context = {
            "widget": frmTallyReports.vbox674499,
            "anchor": "bottom",
            "sizetoanchorwidth": true
        };
        popupTallyReportOptions.setContext(context);
        popupTallyReportOptions.show();
    
}

function onSelectTallyReportsRow() {
    //Clear the data
    popupTallyReportOptions.dismiss();
    boTallyMeetingReport.clearTallyVariables();
    frmTallyReports.hboxAtRiskMembers.setVisibility(false);
    var lblCompare = false;
    
    if (frmTallyReports.lblHdrMeetingDatePopup.text != kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate")) {
         lblCompare = true;
    }
   
    //if(frmTallyReports.lblHdrMeetingDate.text != kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate")){
    if (lblCompare) {
    	frmTallyReports.hboxMemberMilestone.setVisibility(false);
    	frmTallyReports.hboxProductSale.setVisibility(false);
        frmTallyReports.hboxEmployeeSale.setVisibility(false);
        frmTallyReports.hboxProductReturn.setVisibility(false);
        
        frmTallyReports.hboxMainContainer.setVisibility(false);
        frmTallyReports.hboxAtRiskMembers.setVisibility(false); // Added for MEGCA-96
        displayProgressView();
        var lblCurrMeetingCompare = false;
        
        if (checkValidString(frmTallyReports.lblCurrMeetingInfoPopup.text) && frmTallyReports.lblCurrMeetingInfoPopup.text != kony.i18n.getLocalizedString("strTallyReportSelectmeeting")) {
            lblCurrMeetingCompare = true
        }
       

        //if(checkValidString(frmTallyReports.lblCurrMeetingInfo.text) && frmTallyReports.lblCurrMeetingInfo.text != kony.i18n.getLocalizedString("strTallyReportSelectmeeting")){
        if (lblCurrMeetingCompare) {
            
            var option = popupTallyReportOptions.tallyReportActionsSegment.selectedIndex[1];
            
           	frmTallyReports.lblselectReportType.text = popupTallyReportOptions.tallyReportActionsSegment.selectedItems[0]["lblActionItem"];
			
			
            if (option == 0) {
                
                //For Device Tally Limit the date to One Month
                
                if (!(isReportViewEnding(selectedTallyReportMeetingDate))) {
                	frmTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMeetingReports");
                    checkIfMeetingIsClosedAndPresentInDevice();
                }
            } else if (option == 1) { //if(frmTallyReports.cmbTallyTab.selectedKey == "meetingtally"){
                frmTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMeetingReports");
                loadMeetingTallyDataReport();
            } else if (option == 2) {
            	if (!(isReportViewEnding(selectedTallyReportMeetingDate))) {
            		frmTallyReports.lblTitle.text = getLocalizedString("strLblAttendanceAndSale");
                	getMemberAttendanceAndMilestoneData();
                }
            } else if (option == 3) {
                frmTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMemberAtRiskLog");
                loadMemberAtRiskDataReport();
            }
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strTallyReportPleaseSelectMeeting"));
            resetComboTallyReports();
            removeProgressView();
            return;
        }
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strTallyreportSelectDateTime"));
        resetComboTallyReports();
    }




}
function isReportViewEnding(meetingDate)
{
	var onemonthbefore = new Date();
                onemonthbefore.setMonth(onemonthbefore.getMonth() - 1);
                //Set the date to previous day before one month so that same day of last month can be included
                onemonthbefore.setDate(onemonthbefore.getDate() - 1);
                onemonthbefore.setHours("00");
                onemonthbefore.setMinutes("00");
                onemonthbefore.setSeconds("00");
                kony.print("onemonthbefore=" + onemonthbefore);
                kony.print("selectedTallyReportMeetingDate=" + meetingDate);
                if(selectedTallyReportMeetingDate < onemonthbefore) {
                	removeProgressView();
                    resetComboTallyReports();
                    alertForMessages(kony.i18n.getLocalizedString("strTallyReportOneMonth"));
                	return true;
                }else
                	return false;
}
/**
 * This function checks in Meeting Instance if the selected Meeting is Tallied and Closed in Meeting Instance table
 * @returns {} 
 */
function checkIfMeetingIsClosedAndPresentInDevice() {
    boTallyMeetingReport.getClosedMeetingInfo(selectedTallyReportMeetingDate, selectedTallyReportMeetingOccID, function(res) {
        if (res) {
            loadDeviceTallyDataReport();
            //frmTallyReports.hboxMainContainer.setVisibility(true);
            //Present and Closed
        } else {
            removeProgressView();
            alertForMessages(kony.i18n.getLocalizedString("strTallyReportNoTally"));
            resetComboTallyReports();
            //Meeting Not Found Closed
        }

    });
}

/**
 * This Function is called when the user clicks the My Device Tally Tab
 * @returns {} 
 */
function loadDeviceTallyDataReport() {
    //if closed and there, get Data
    kony.print("::loadDeviceTallyDataReport::selectedTallyReportMeetingDate=" + selectedTallyReportMeetingDate + " selectedTallyReportMeetingOccID=" + selectedTallyReportMeetingOccID);
    boTallyMeetingReport.getRegion(selectedTallyReportMeetingDate, selectedTallyReportMeetingOccID, setDataToReportTally);
}

function setDataToReportTally(status, result) {
    kony.print("::DJP::Report::Local :: " + JSON.stringify(result));

    if (status) {
        kony.print("selected meeting ############################: " + selectedTallyReportMeetingDate);
        kony.print("Meeting date is before: " + glbMeetingDate);
        var MeetingDate = selectedTallyReportMeetingDate;
        kony.print("MeetingDate: " + MeetingDate);
        kony.print("##################################" + MeetingDate);
        var dd = MeetingDate.getDate();
        kony.print("ddd   ##################################" + dd);
        var mm = MeetingDate.getMonth() + 1;
        var yyyy = MeetingDate.getFullYear();
        var dateData;
        if (deviceLocale != "fr_FR") {
            dateData = mm + "/" + dd + "/" + yyyy;
        } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
        {
            dateData = dd + "/" + mm + "/" + yyyy;
        }



        frmTallyReports.lblLocationNo.text = glbLocationNum;
        frmTallyReports.lblLocationName.text = result["TallyLocationName"];
        frmTallyReports.lblRegion.text = result["TallyRegion"];
        frmTallyReports.lblMeetingDate.text = changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
        frmTallyReports.lblMeetingTime.text = selectedTallyReportMeetingTime;
        if (in_array(deviceLocale,Countries["CA"]) && isSelMeetingOpenHours != true) {
            //change the header labels for break in and break out for CA - MEGCA-17 ,21
            frmTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblHeaderTraineeName");
            frmTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblHeaderMentor");
        } else {
            frmTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
            frmTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
        }
        var EmpDetail = result["TallyEmployees"];
        if (EmpDetail.length > 0) {
            frmTallyReports.segTimesheet.removeAll();
            frmTallyReports.segTimesheet.data = EmpDetail;
        }

        frmTallyReports.lblCurrentAttendanceNo.text = result["Section2NumOfTotalCurrentAttd"];
        frmTallyReports.lblCurrentAttendanceAmount.text = addDollar(parseFloat(result["Section2SumOfTotalCurrentAttd"]).toFixed(2));
        frmTallyReports.lblMissedWeekAttendanceNo.text = result["Section2NumOfMissedWKCurrAttd"];
        frmTallyReports.lblMissedWeekAttendanceAmount.text = addDollar(parseFloat(result["Section2SumOfMissedWKCurrAttd"]).toFixed(2));
        frmTallyReports.lblEnrollmentsNo.text = result["Section2NumOfEnrollPayg"];
        frmTallyReports.lblEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfEnrollPayg"]).toFixed(2));
        frmTallyReports.lblPaidLifeTimeNo.text = result["Section2NumOfPaidLTAttandance"];
        frmTallyReports.lblPaidLifeTimeAmount.text = addDollar(parseFloat(result["Section2SumOfPaidLTAttandance"]).toFixed(2));
        frmTallyReports.lblPrepaidAttendanceNo.text = result["Section2NumOfPrepaidAttd"];
        if (in_array(deviceLocale,Countries["CA"])) { // Added for MEGCA-13
            frmTallyReports.hboxMPLTAttendance.setVisibility(true);
            frmTallyReports.lblMonthlyPassLTAttendanceNo.text = result["Section2NumOfMonthlyPassLTAttd"];
        } else {
            frmTallyReports.hboxMPLTAttendance.setVisibility(false);
        }
        frmTallyReports.lblFreelifetimeNo.text = result["Section2NumOfFreeLTAttandance"];
        frmTallyReports.lblTotalMemberFeesTotal.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
        frmTallyReports.lblPaidAttendanceTotal.text = result["Section2TotalPaidAttandace"];
        frmTallyReports.lblTotalMemberAttendanceTotal.text = result["Section2TotalMemberAttandace"];
        if (in_array(deviceLocale,Countries["CA"])) { // Added for MEG-5568
        	frmTallyReports.hbox1563350750172192.setVisibility(false);
        } else {
        	frmTallyReports.hbox1563350750172192.setVisibility(true);
            frmTallyReports.lblEmpAttendance.text = result['Section2NumEmpAttendance'];
        }
        frmTallyReports.lblNoPrepaidCoupRedeem.text = result["Section3NumPrePaidCoupons"];
        frmTallyReports.lblMemberStayingfrMeeting.text = result["Section3MembersAttMeeting"];
        frmTallyReports.lbl5perTarget.text = result["Section3NumOfMembersReached5"];
        frmTallyReports.lbl10perTarget.text = result["Section3NumOfMembersReached10"];
        frmTallyReports.lblWeightGoal.text = result["Section3NumOfMembersReachedWeighGoal"];
        frmTallyReports.lblReachingLifetime.text = result["Section3NumOfMembersReachedLifetime"];
        frmTallyReports.lblMonthlyPassesSold.text = result["Section3NumMonthlyPassSold"];
        frmTallyReports.lblMPactivecount.text = result["Section3NumMPsActivationSold"];
        frmTallyReports.lblThreeMPactiveCount.text = result["Section3NumThreeMPsActivationSold"];
        frmTallyReports.lblSixMPactiveCount.text = result["Section3NumSixMPsActivationSold"];
        frmTallyReports.lbl3MonthPass.text = result["Section3Num3MonthPassSold"];
        frmTallyReports.lbl20WeekPasses.text=result["Section3Num20weekPassSold"]; // MEGCA-8
		frmTallyReports.lbl6MonthPass.text=result["Section3Num6MonthPassSold"]; // MEGCA-301
		frmTallyReports.lbl6MonthLTCPass.text = result["Section3Num6MonthLTCPassSold"]; //MEG-6140
		frmTallyReports.lblSixMPLTCactiveCount.text = result["Section3NumSixMPsLTCActivationSold"]; //MEG-6140
        frmTallyReports.lblMembersLosingWeight.text = result["Section3NumOfMembersWeightLossMeeting"];
        frmTallyReports.lblTotalWeightLoss.text = result["Section3SumOfMembersWeightLossMeeting"].toFixed(1) + " " + UnitText; // Dileep Chejerla - MEG-2773
        kony.print("Section4MemberFees=" + result["Section4MemberFees"]);
        if (checkValidString(result["Section4MemberFees"])) {
            kony.print("::11");
            frmTallyReports.lblMemberFees.text = addDollar(parseFloat(result["Section4MemberFees"]).toFixed(2));
        } else {
            kony.print("::22");
            frmTallyReports.lblMemberFees.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
        }
        kony.print("::33");
        frmTallyReports.lblPrepaymentSales.text = addDollar(parseFloat(result["Section4PrepaymentSales"]).toFixed(2));
        frmTallyReports.lblProductSales.text = addDollar(parseFloat(result["Section4ProductSales"]).toFixed(2));
        frmTallyReports.lblProductReturns.text = addDollar(parseFloat(result["Section4ProductReturns"]).toFixed(2));
        frmTallyReports.lblEmployeeSales.text = addDollar(parseFloat(result["Section4EmployeeSales"]).toFixed(2));
        frmTallyReports.lblSalesTax.text = addDollar(parseFloat(result["Section4SalesTax"]).toFixed(2));
        frmTallyReports.lblTotalSales.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));

        frmTallyReports.lblPaymentSummary.text = kony.i18n.getLocalizedString("strTallyReportSectionPaymentSummary") + " -- " + changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//Dileep Chejerla: MEG-2677
        frmTallyReports.lblCashLeaderCheck.text = addDollar(parseFloat(result["Section5Cash"]).toFixed(2));
        frmTallyReports.lblMemberchecks.text = addDollar(parseFloat(result["Section5Check"]).toFixed(2));
        frmTallyReports.lblTotalPayementSummary.text = addDollar(parseFloat(result["Section5BankDeposit"]).toFixed(2));
        frmTallyReports.lblDepositSlipNumber.text = result["Section5DipositeTicket"];
        frmTallyReports.lblCreditCards.text = addDollar(parseFloat(result["Section5CreditCard"]).toFixed(2));
        frmTallyReports.lblDebitCard.text = addDollar(parseFloat(result["Section5DebitCard"]).toFixed(2));
        frmTallyReports.lblCreditSlipsIssued.text = addDollar(parseFloat(result["Section5CreditSlipsIssued"]).toFixed(2));
        frmTallyReports.lblCreditSlipsRedeemed.text = addDollar(parseFloat(result["Section5CreditSlipsRedeemed"]).toFixed(2));
        frmTallyReports.lblTotalCredit.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));

        frmTallyReports.lblTotalPayementsOver.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));
        frmTallyReports.lblTotalSaleOver.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));
        frmTallyReports.lblOverUnder.text = addDollar(parseFloat(result["Section6OverUnder"]).toFixed(2));
        frmTallyReports.lblReason.text = result["Section5Reason"];

        if (parseFloat(result["Section6OverUnder"]) == 0.00) {
            frmTallyReports.hboxReason.setVisibility(false);
            frmTallyReports.hboxTotalOver.setVisibility(false);
            frmTallyReports.hboxTotalPayment.setVisibility(false);
            frmTallyReports.hboxTotalSales.setVisibility(false);
            frmTallyReports.hboxSectionVII.setVisibility(false);
            frmTallyReports.lineSectionVII.setVisibility(false);
        } else {
            frmTallyReports.hboxReason.setVisibility(true);
            frmTallyReports.hboxTotalOver.setVisibility(true);
            frmTallyReports.hboxTotalPayment.setVisibility(true);
            frmTallyReports.hboxTotalSales.setVisibility(true);
            frmTallyReports.hboxSectionVII.setVisibility(true);
            frmTallyReports.lineSectionVII.setVisibility(true);
        }
        removeProgressView();
        frmTallyReports.hboxMainContainer.setVisibility(true);
    } else {
        resetComboTallyReports();
        removeProgressView();
    }

}

/**
 * This function is called when the user select the Meeting Reports option
 * @returns {} 
 */
function loadMemberAtRiskDataReport() {
    removeProgressView();
    frmTallyReports.hboxMainContainer.setVisibility(false);
    //frmTallyReports.hboxAtRiskMembers.setVisibility(true);
    boTallyMeetingReport.getMemberAtRiskReportService(selectedTallyReportMeetingDate, selectedTallyReportMeetingOccID, function(status, result) {
        setDataToMeetingReport(status, result);

    });

}

function setDataToMeetingReport(status, meetingReportResponse_segmentMeetings_temp) {

    if (status) {
        frmTallyReports.segMemberReportAtRisk.data = meetingReportResponse_segmentMeetings_temp;
        frmTallyReports.hboxAtRiskMembers.setVisibility(true);
        removeProgressView();
    } else {
        frmTallyReports.hboxAtRiskMembers.setVisibility(false);
        removeProgressView();
    }
}

/**
 * This function is called when the user clicks the Meeting Tally Tab
 * @returns {} 
 */
function loadMeetingTallyDataReport() {
    boTallyMeetingReport.getMeetingTallyService(selectedTallyReportMeetingDate, selectedTallyReportMeetingOccID, function(status, result) {
        setDataToReportTally(status, result);

    });
}

/**
 * This is a utility which resets the Tabs Color to defalut state = None Selected
 * @returns {} 
 */
function resetComboTallyReports() {
    kony.print("rest tally reprts *********************************");
    if (in_array(deviceLocale,Countries["CA"])) {
        frmTallyReports.hboxAtRiskMembers.setVisibility(false);
    }
    frmTallyReports.hboxMainContainer.setVisibility(false);
}

/**
 * This function is called when user click on Attendance/Milestone Report
 * @return {}
 */

function getMemberAttendanceAndMilestoneData(){
	
	boTallyMeetingReport.getMemberAttendanceAndMilestoneData(selectedTallyReportMeetingDate, selectedTallyReportMeetingOccID,bindDataToMilestoneAttendanceReport);
	
	/* boTallyMeetingReport.getClosedMeetingInfo(selectedTallyReportMeetingDate, selectedTallyReportMeetingOccID, function(res) {
        if (res) {
           	boTallyMeetingReport.getMemberAttendanceAndMilestoneData(selectedTallyReportMeetingDate, selectedTallyReportMeetingOccID,bindDataToMilestoneAttendanceReport);
        } else {
            removeProgressView();
            alert(kony.i18n.getLocalizedString("strTallyReportNoTally"));
            resetComboTallyReports();
            //Meeting Not Found Closed
        }

    });*/
	
}

function bindDataToMilestoneAttendanceReport(status,result){
	if(status){
		frmTallyReports.hboxMemberMilestone.setVisibility(true);
		frmTallyReports.hboxProductSale.setVisibility(true);
        frmTallyReports.hboxEmployeeSale.setVisibility(true);
        frmTallyReports.hboxProductReturn.setVisibility(true);
		frmTallyReports.segAttendMilstoneRep.widgetDataMap = {lblAttdReport:"lblAttdReport",lblRegNumber:"lblRegNumber",lblMemberName:"lblMemberName",lblTodayWT:"lblTodayWT",lblMemName:"lblMemName",lblMilestoneReached:"lblMilestoneReached",lblFees:"lblFees",lblMemNameInfo:"lblMemNameInfo",lblRegNoInfo:"lblRegNoInfo",lblTodayWeightInfo:"lblTodayWeightInfo",lblMilestoneInfo:"lblMilestoneInfo",lblMemberTypeInfo:"lblMemberTypeInfo",lblMemberFeeInfo:"lblMemberFeeInfo",lblProductInfo:"lblProductInfo",lblProductDescInfo:"lblProductDescInfo",lblQTYInfo:"lblQTYInfo",lblUnitPriceInfo:"lblUnitPriceInfo",lblTexInfo:"lblTexInfo",lblTotalInfo:"lblTotalInfo",lblProduct:"lblProduct",lblProductDesc:"lblProductDesc",lblQTY:"lblQTY",lblUnitPrice:"lblUnitPrice",lblTex:"lblTex",lblTotal:"lblTotal"};
		var AttendanceReportData = [];
		var ProductReportData = [];
		var EmployeeReportData = [];
		var ProductReturnData = [];
		
		var totalAttendance = 0;
		var totalMemberFees = 0;
		_.each(result.attendanceData,function(v){
			totalAttendance = totalAttendance + 1;
			totalMemberFees = totalMemberFees + ((checkValidString(v.Fees))? (v.Fees): 0);
			
			var subType = setMemberSubType(v.SubscriptnType);
			//if(deviceLocale == "fr_CA"){
//				if(checkValidString(subType)){
//					if(subType == "MonthlyPass")
//						subType = getLocalizedString("strMPAbbr");
//					else if(subType == "WeeklyPass")
//						subType = getLocalizedString("str20WEEKSAbbr");
//					else 
//						subType = getLocalizedString("strPAYGAbbr");
//				}else{
//					subType = getLocalizedString("strPAYGAbbr");
//				}
//			}else{
//				if(checkValidString(subType))
//					subType = v.SubscriptnType;
//				else
//					subType = "PAYG";
//				
//			}
			
			var b = mapKeys(viewMilestoneAndAttendance, {
		                    	lblRegNoInfo:v.RegNumber,
		                        lblMemNameInfo: v.MemberName,
		                        lblTodayWeightInfo: v.Weight,
		                        lblMemberTypeInfo: subType,
		                        lblMilestoneInfo: (v.Milestone == ',')?'--':v.Milestone,
		                        lblMemberFeeInfo: (checkValidString(v.Fees))?addCurrency(v.Fees):addCurrency("0.00"),
								template:hboxAttedRowTemp
		                   }); 
			AttendanceReportData.push(b);			   
		})
		frmTallyReports.segAttendMilstoneRep.data = AttendanceReportData;
		frmTallyReports.lblTotalAttendance.text = totalAttendance;
		frmTallyReports.lblTotalMemberFees.text = addCurrency(totalMemberFees);
		
		var totalProductSale = 0;
		_.each(result.productSaleData,function(v){
			kony.print("v.description----"+v.description);
			totalProductSale = totalProductSale + v.total;
			ProductReportData.push(setSegmentData(v));
		})
		
		frmTallyReports.segProductSale.data = ProductReportData;
		frmTallyReports.lblTotalProductSale.text = addCurrency(totalProductSale);
		
		var totalEmployeeSale = 0;
		_.each(result.employeeSaleData,function(v){
			kony.print("v.description----"+v.description);
			totalEmployeeSale = totalEmployeeSale + v.total;
			EmployeeReportData.push(setSegmentData(v));
		})
		
		frmTallyReports.segEmployeeSale.data = EmployeeReportData;
		frmTallyReports.lblTotalEmployeeSale.text = addCurrency(totalEmployeeSale);
		
		var totalProductReturn = 0;
		_.each(result.productReturnData,function(v){
			kony.print("v.description----"+v.description);
			totalProductReturn = totalProductReturn + v.total;
			ProductReturnData.push(setSegmentData(v));
		})
		
		frmTallyReports.segProductReturn.data = ProductReturnData;
		frmTallyReports.lblTotalProductReturn.text = addCurrency(totalProductReturn);
			
	} else {
		alertForMessages(kony.i18n.getLocalizedString("strTallyReportNoTally"));
	}
	kony.print("result data===="+JSON.stringify(result));
}

function setSegmentData(v){
	var prodSegData = mapKeys(viewProductReport,{
		lblProductInfo:v.ProductSku,
		lblProductDescInfo:v.description,
		lblQTYInfo:v.Qty,
		lblUnitPriceInfo:addCurrency(v.ProductUnitPrice),
		lblTexInfo:addCurrency(v.UnitPriceTax),
		lblTotalInfo:addCurrency(v.total),
	    template: hboxProductSaleTemp
	});
	kony.print("prodSegData::"+JSON.stringify(prodSegData));

	return prodSegData;
}

function setMemberSubType(subscriptionType){
	var subType = subscriptionType;
		
	if(checkValidString(subType)){
		if(deviceLocale == "fr_CA"){
			if(subType == "MonthlyPass")
				subType = getLocalizedString("strMPAbbr");
			else if(subType == "WeeklyPass")
				subType = getLocalizedString("str20WEEKSAbbr");
			else 
				subType = getLocalizedString("strPAYGAbbr")
		}else{
			subType = subscriptionType;
		}
	}else{
		subType = getLocalizedString("strPAYGAbbr");
	}
	
	
	return subType;
}
