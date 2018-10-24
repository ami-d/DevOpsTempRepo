function p2kwiet3578093092425_txtCreditCard_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCreditCard");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCreditCard.text, frmTallyMeetingCashout.lblMEGCreditCard.text, "lblDiffCreditCard");
}