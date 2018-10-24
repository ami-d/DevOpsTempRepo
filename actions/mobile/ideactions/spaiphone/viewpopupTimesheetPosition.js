var selectedPosition = "";

function eventonClickhboxTimesheetPositionSection() {
    var val = popupTimesheetSelectPosition["segEmployeePosition"]["selectedItems"][0]["lblPosition"];
    for (var i = 0; i < empPositionData.length; i++) {
        if (empPositionData[i]["lblPosition"] === val) {
            selectedPosition = val;
            empPositionData[i]["imgStatus"] = imgSrc;
            popupTimesheetSelectPosition.segEmployeePosition.setDataAt(empPositionData[i], i);
        } else {
            empPositionData[i]["imgStatus"] = "";
            popupTimesheetSelectPosition.segEmployeePosition.setDataAt(empPositionData[i], i);
        }
    }
}
var empPositionData = [];
var imgSrc = "icn_checkmark.png";
//Added for MEGCA-201
kony.print("IS show-meeting Type ID if==>" + glbOpenHousMeetingObj.meetingTypeId);

function setEmployeePositionData() {
    var leader = kony.i18n.getLocalizedString("strLeader");
    var receptionist = kony.i18n.getLocalizedString("strReceptionist");
    if (isSelMeetingOpenHours) {
        empPositionData = [{
            "lblPosition": receptionist,
            "imgStatus": ""
        }];
        kony.print("empPositionData---" + JSON.stringify(empPositionData));
    } else {
        empPositionData = [{
            "lblPosition": receptionist,
            "imgStatus": ""
        }, {
            "lblPosition": leader,
            "imgStatus": ""
        }];
        kony.print("empPositionData---" + JSON.stringify(empPositionData));
    }
}

function bindPositionDatainSegment() {
    popupTimesheetSelectPosition.segEmployeePosition.data = empPositionData;
    var val = "";
    val = popupAddTime.lblPosition.text;
    kony.print(" -->  selectedPosition = " + selectedPosition + '---- val = ' + val);
    for (var i = 0; i < empPositionData.length; i++) {
        if (empPositionData[i]["lblPosition"] === val) {
            selectedPosition = val;
            empPositionData[i]["imgStatus"] = imgSrc;
        } else {
            empPositionData[i]["imgStatus"] = "";
        }
        popupTimesheetSelectPosition.segEmployeePosition.setDataAt(empPositionData[i], i);
    }
}

function eventonClickvboxDoneImageHeaderForEEmpPosition() {
    popupAddTime.lblPosition.text = selectedPosition;
    /* commented code for MEGCA-17
    setFlagForTrainee();
    if( ( receptionistOne && popupAddTime.lblPosition.text=="Receptionist") || (leaderOne && popupAddTime.lblPosition.text=="Leader")){
		popupAddTime.vboxMeetingSetup.setEnabled(false);
    	popupAddTime.imgCheckbox.src = "icn_checkbox_unchecked.png";
    	popupAddTime.txtTraineeName.setEnabled(false);
        popupAddTime.txtTraineeName.text = "";
    }else {
    		popupAddTime.vboxMeetingSetup.setEnabled(true);
    } */
    popupTimesheetSelectPosition.destroy();
}