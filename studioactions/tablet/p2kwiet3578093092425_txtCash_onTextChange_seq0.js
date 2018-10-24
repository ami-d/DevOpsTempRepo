function p2kwiet3578093092425_txtCash_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCash");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCash.text, frmTallyMeetingCashout.lblMEGCash.text, "lblDiffCash");
}