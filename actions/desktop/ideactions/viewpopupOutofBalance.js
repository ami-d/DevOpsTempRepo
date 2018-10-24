function eventonClickhboxOutofBalanceSection() {

    //bind picker data
    bindTallyReasonPickerData();

    //Show select Reason popup
    var context = {
        "widget": frmTallyMeetingCashout.btnContinue,
        "anchor": "top",
        "sizetoanchorwidth": true
    };
    popupOutOfBalanceReason.setContext(context);
    popupOutOfBalanceReason.show();
}

function bindTallyReasonPickerData() {
    /*convertEnumToArray(TallyDiffReasonEnum, successConvert);
	function successConvert(dropdownData) {
		dropdownData.push(100);
		var masterDataReason = [];
		masterDataReason.push(dropdownData);
    	popupOutOfBalanceReason.pickerviewTallyMismatchReasons.masterData = masterDataReason;
	}*/
    if (glbBindTallyDiffReasonArray == false) {
        glbBindTallyDiffReasonArray = true;
        glbTallyDiffReasonArray.push(100);
        var masterDataReason = [];
        masterDataReason.push(glbTallyDiffReasonArray);
        popupOutOfBalanceReason.pickerviewTallyMismatchReasons.masterData = masterDataReason;
    }

}

function eventonClickvboxCancelImageHeaderForTallyReason() {
    //Reset Temp Value of tally mismatch reason 
    //tallyMismatchReason = 0;
    tallyMismatchReason = "";
    kony.print("tallyMismatchReason----->>" + tallyMismatchReason);

    popupOutOfBalanceReason.dismiss();
}

var tallyMismatchReason = 0;

function eventonClickvboxDoneImageHeaderForTallyReason() {
    //Set Temp Value of tally mismatch reason 
    tallyMismatchReason = popupOutOfBalanceReason.pickerviewTallyMismatchReasons.selectedKeyValues[0][0];

    var CurrMeetingKeyValues = popupOutOfBalanceReason.pickerviewTallyMismatchReasons.selectedKeyValues;
    //popupOutOfBalance.lblReason.text = CurrMeetingKeyValues[0][1];
    if (CurrMeetingKeyValues.length > 0) {
        if (tallyMismatchReason != 0)
            checkDifferenceFlag = false;
        popupOutOfBalance.dismiss();
    }
    popupOutOfBalanceReason.dismiss();
}

function eventonClickvboxDoneImageHeaderForEnterTallyReason() {
    if (popupOutOfBalance.lblReason.text.length > 0) {
        if (tallyMismatchReason != 0)
            checkDifferenceFlag = false;
        popupOutOfBalance.dismiss();
    }
}
