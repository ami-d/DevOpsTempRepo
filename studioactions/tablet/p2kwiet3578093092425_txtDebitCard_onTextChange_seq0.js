function p2kwiet3578093092425_txtDebitCard_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtDebitCard");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtDebitCard.text, frmTallyMeetingCashout.lblMEGDebit.text, "lblDiffDebitCard");
}