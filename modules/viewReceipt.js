function eventOnPreShowBindReceiptData() {
    frmReceipt.lblchangeAmount.text = addCurrency(amountForChangeOwnedForPayment) + " " + amountForChangeReturnFormatForPayment;
    frmReceipt.lblOutOfAmount.text = getLocalizedString("strLblOutof")+ " " + addCurrency(amountMemberHasSubmittedForPayment);
}

function eventOnClickOkBtn(){
    kony.print("eventOnClickOkBtn isSyncForActivation : "+isSyncForActivation);
	if(isSyncForActivation) {
		evenOnPostShowHomeScreen();
		hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
		onSelectMeetingMembers();
	    popupMPActivation.show();
      	showMpActivatedMemberData(); //Added as fix of MEG-6735
	    isSyncForActivation = false;
	} else {
		evenOnPostShowHomeScreen();
	}
}