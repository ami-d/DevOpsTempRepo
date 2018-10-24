var isEditTimesheet = false;
var isStartTimerVisible = false;
var isEndTimerVisible = false;
var isBreakStartTimerVisible = false;
var isBreakEndTimerVisible = false;
//var receptionistOne = false ;
//var leaderOne = false ;
//var editLeaderOne = false;
//var editReceptionistOne = false;
var empDataSource = [];

function removeAllPicker() {
    kony.print("---- remov all pickers ");
    isStartTimerVisible = false;
    isEndTimerVisible = false;
    isBreakStartTimerVisible = false;
    isBreakEndTimerVisible = false;
    popupAddTime.hboxForEndTimePicker.remove(popupTimePicker.timePicker);
    popupAddTime.hboxForBreakStartTimePicker.remove(popupTimePicker.timePicker);
    popupAddTime.hboxForBreakEndTimePicker.remove(popupTimePicker.timePicker);
    popupAddTime.hboxForStartTimePicker.remove(popupTimePicker.timePicker);
}

function setPickerSelection(lblValue) {
    if (lblValue) {
        if (lblValue == "") {
            var hr = "12";
            var min = "00";
            var ampm = "PM";
        } else {
            //** MEG 6386
            if (deviceLocale == "fr_CA") {
                lblValue = getFormatedTimeValue(lblValue);
            } else {
                kony.print("Do Nthing");
            }
            //** End
            kony.print("****lblValue " + lblValue);
            var str = lblValue.split(":", this.length);
            var hr = str[0].trim();
            var str1 = str[1].split(" ", this.length);
            var min = str1[0].trim();
            var ampm = str1[1].trim();
            //** MEG 6386
            if (deviceLocale == "fr_CA") {
                ampm = (ampm == kony.i18n.getLocalizedString("strAM")) ? "AM" : "PM";
            } else {
                kony.print("Do Nthing");
            }
            //** End
        }
        kony.print(" *****hr, min, ampm " + hr + " " + min + " " + ampm);
        popupTimePicker.timePicker.selectedKeys = [hr, min, ampm];
    }
}

function eventonClickStartTime() {
    if (!in_array(deviceLocale, Countries["CA"]) || (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours)) // US - open pickers for start and end time  
    {
        if (!isStartTimerVisible) {
            removeAllPicker();
            popupAddTime.hboxForStartTimePicker.add(popupTimePicker.timePicker);
            setPickerSelection(popupAddTime.lblStartTime.text);
            isStartTimerVisible = true;
        } else {
            removeAllPicker();
        }
    } else // for canada - set the start time as meeting start time 
    {
        //nothing to do on click of start time 
        kony.print("-- > nothing to do on click of start time  ");
    }
}

function eventonClickEndTime() {
    if (!in_array(deviceLocale, Countries["CA"]) || (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours)) // US - open pickers for start and end time  
    {
        if (!isEndTimerVisible) {
            removeAllPicker();
            isEndTimerVisible = true;
            popupAddTime.hboxForEndTimePicker.add(popupTimePicker.timePicker);
            setPickerSelection(popupAddTime.lblEndTime.text);
        } else {
            removeAllPicker();
        }
    } else {
        //nothing to do on click of end time 
        kony.print("-- > nothing to do on click of end time  ");
    }
}

function eventonClickBreakStartTime() {
    if (!in_array(deviceLocale, Countries["CA"]) || (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours)) // US - open pickers for start and end time  
    {
        if (!isBreakStartTimerVisible) {
            removeAllPicker();
            isBreakStartTimerVisible = true;
            setPickerSelection(popupAddTime.lblBreakStartTime.text);
            popupAddTime.hboxForBreakStartTimePicker.add(popupTimePicker.timePicker);
        } else {
            removeAllPicker();
        }
    } else {
        kony.print("-- > nothing to do on click of break start  time  ");
    }
}

function eventonClickBreakEndTime() {
    if (!in_array(deviceLocale, Countries["CA"]) || (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours)) // US - open pickers for start and end time  
    {
        if (!isBreakEndTimerVisible) {
            removeAllPicker();
            setPickerSelection(popupAddTime.lblBreakEndTime.text);
            isBreakEndTimerVisible = true;
            popupAddTime.hboxForBreakEndTimePicker.add(popupTimePicker.timePicker);
        } else {
            removeAllPicker();
        }
    } else {
        kony.print("-- > nothing to do on click of break end  time  ");
    }
}

function eventonSelectionTimerPicker() {
    var selectedTimeStr = popupTimePicker.timePicker.selectedKeyValues[0][1] + ":" + popupTimePicker.timePicker.selectedKeyValues[1][1] + " " + popupTimePicker.timePicker.selectedKeyValues[2][1]
        //** MEG 6386
    kony.print("********selectedTimeStr " + selectedTimeStr);
    if (deviceLocale == "fr_CA") {
        selectedTimeStr = convertTimeTo24HrsFormat(selectedTimeStr);
        kony.print("********selectedTimeStr " + selectedTimeStr);
        selectedTimeStr = convertTime24HrsForCA(selectedTimeStr);
        kony.print("********selectedTimeStr " + selectedTimeStr);
    } else {
        kony.print("Do Nothing");
    }
    //** End
    if (isStartTimerVisible) {
        popupAddTime.lblStartTime.text = selectedTimeStr;
    } else if (isEndTimerVisible) {
        popupAddTime.lblEndTime.text = selectedTimeStr;
    } else if (isBreakStartTimerVisible) {
        popupAddTime.lblBreakStartTime.text = selectedTimeStr;
    } else if (isBreakEndTimerVisible) {
        popupAddTime.lblBreakEndTime.text = selectedTimeStr;
    }
}

function eventonClickhboxEmpPositionSection() {
    var context = {
        "widget": popupAddTime.hboxEmpPosition,
        "anchor": "top",
        "sizetoanchorwidth": true
    };
    popupTimesheetSelectPosition.setContext(context);
    if (!isSelMeetingOpenHours) { // Added for MEGCA-201
        setEmployeePositionData();
        popupTimesheetSelectPosition.show();
    }
    selectedPosition = popupAddTime.lblPosition.text;
}

function eventonClickhboxEmpSearchSection() {
    //Dileep Chejerla: MEG-2817
    //var context={"widget":frmTallyMeetingTimeSheet.btnAddTime,"anchor":"top","sizetoanchorwidth":false}; 
    var context = {
        "widget": popupAddTime.hbxEmpDetails,
        "anchor": "any",
        "sizetoanchorwidth": false
    };
    popupEmployeeSearch.setContext(context);
    //popupEmployeeSearch.btnSaveSearch.isVisible=false;	
    if (checkIfNetworkIsAvailable()) {
        popupEmployeeSearch.txtManualSearch.setEnabled(false);
    } else {
        popupEmployeeSearch.txtManualSearch.setEnabled(true);
    }
    popupEmployeeSearch.show();
}

function eventonClickBackButton() {
    popupEmployeeSearch.destroy();
}

function eventonClickEmpSearchRow() {
    lastName = popupEmployeeSearch.segEmplyoeeData.selectedItems[0]["lblLastName"];
    firstName = popupEmployeeSearch.segEmplyoeeData.selectedItems[0]["lblFirstName"];
    popupAddTime.lblEmployee.text = firstName + " " + lastName;
    popupAddTime.lblEmployeeNumber.text = popupEmployeeSearch.segEmplyoeeData.selectedItems[0]["lblEmployeeNumber"];
    popupAddTime.hidEmployeeId.text = popupEmployeeSearch.segEmplyoeeData.selectedItems[0]["hdnEmployeeID"];
    popupEmployeeSearch.destroy();
}

function eventonClickManualEmpSaveButton() {
    popupAddTime.lblEmployee.text = popupEmployeeSearch.txtManualSearch.text;
    popupAddTime.lblEmployeeNumber.text = popupEmployeeSearch.txtManualSearch.text;
    popupAddTime.hidEmployeeId.text = 0;
    popupEmployeeSearch.destroy();
}

function eventonClickForManualEmpEntry() {
    popupEmployeeSearch.txtManualSearch.isVisible = true;
}

function hiddenControls() {
    popupEmployeeSearch.txtManualSearch.isVisible = false;
    popupEmployeeSearch.txtManualSearch.text = "";
}

function onSelectSearchOption() {
    if (popupEmployeeSearch.cmbxSearchType.selectedKey == kony.i18n.getLocalizedString("cmbName")) {
        popupEmployeeSearch.txtSearch.placeholder = kony.i18n.getLocalizedString("strlblSearchName");
        popupEmployeeSearch.txtSearch.textInputMode = constants.TEXTBOX_INPUT_MODE_ANY;
    } else {
        popupEmployeeSearch.txtSearch.textInputMode = constants.TEXTBOX_INPUT_MODE_NUMERIC;
        popupEmployeeSearch.txtSearch.placeholder = kony.i18n.getLocalizedString("strlblSearchNumber");
    }
}
//namrata change 
function eventOnClickEmpSearchText() {
    var val = popupEmployeeSearch.txtSearch.text;
    if (val.length > 0) {
        try {
            //Show Progress View
            displayProgressView();
            //Check search by field
            var searchByField;
            if (isNaN(val)) {
                searchByField = "Name";
            } else {
                searchByField = "Number";
            }
            //Call service
            if (checkIfNetworkIsAvailable()) {
                //displayProgressView();
                boLookupServiceProvider.searchEmployeeByNameOrNumberViaWS(glbLocationID, val.toLowerCase().toString(), searchByField, 'frmTallyTimesheet');
                popupEmployeeSearch.txtManualSearch.setEnabled(false);
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
                removeProgressView();
                popupEmployeeSearch.txtManualSearch.setEnabled(true);
            }
        } catch (e) {
            GlobalException(e);
        }
    }
}

function eventonClickIsMentorTraining() {
    /*  commented code of MEGCA-17
	setFlagForTrainee();
	
	if( ( editLeaderOne && popupAddTime.lblPosition.text=="Leader") || (editReceptionistOne && popupAddTime.lblPosition.text=="Receptionist") ){
			popupAddTime.vboxMeetingSetup.setEnabled(true);
			if (popupAddTime.imgCheckbox.src == "icn_checkbox_unchecked.png") {
			        popupAddTime.imgCheckbox.src = "icn_checkbox_checked.png";
			        popupAddTime.txtTraineeName.setEnabled(true);
			        kony.print("--two--");
	   		 } else {
			        popupAddTime.imgCheckbox.src = "icn_checkbox_unchecked.png";
			        popupAddTime.txtTraineeName.setEnabled(false);
			        popupAddTime.txtTraineeName.text = "";
			        kony.print("--three--");
	    	}
	}else if( (receptionistOne && popupAddTime.lblPosition.text=="Receptionist") || (leaderOne && popupAddTime.lblPosition.text=="Leader") ){
		popupAddTime.txtTraineeName.setEnabled(false);
        popupAddTime.txtTraineeName.text = "";
        popupAddTime.imgCheckbox.src = "icn_checkbox_unchecked.png";
        popupAddTime.vboxMeetingSetup.setEnabled(false);	
        kony.print("--one--");
        
        */
    if (popupAddTime.imgCheckbox.src == "icn_checkbox_unchecked.png") {
        popupAddTime.imgCheckbox.src = "icn_checkbox_checked.png";
        popupAddTime.txtTraineeName.setEnabled(true);
        popupAddTime.vboxMeetingSetup.setEnabled(true);
        kony.print("--two--");
    } else {
        popupAddTime.imgCheckbox.src = "icn_checkbox_unchecked.png";
        popupAddTime.txtTraineeName.setEnabled(false);
        popupAddTime.txtTraineeName.text = "";
        popupAddTime.vboxMeetingSetup.setEnabled(true);
        kony.print("--three--");
    }
}

function eventonClickIsParticipatedinMetingSetup() {
    if (popupAddTime.imgParticipationCheckbox.src == "icn_checkbox_unchecked.png") {
        popupAddTime.imgParticipationCheckbox.src = "icn_checkbox_checked.png";
    } else {
        popupAddTime.imgParticipationCheckbox.src = "icn_checkbox_unchecked.png";
    }
}
/* commented for MEGCA-17
function setFlagForTrainee(){
	var segdata = frmTallyMeetingTimeSheet.segTimesheet.data;
	
	receptionistOne=false;
	leaderOne=false;
	
	for(i=0;i<segdata.length;i++){
		if(segdata[i].lblEmpRole == "Receptionist" && segdata[i].lblBreakIn.text!="" && segdata[i].lblBreakIn.text!=undefined){
			receptionistOne=true;
		}else if(segdata[i].lblEmpRole == "Leader" && segdata[i].lblBreakIn.text!="" && segdata[i].lblBreakIn.text!=undefined){
			leaderOne=true;
		}
	}
}
*/