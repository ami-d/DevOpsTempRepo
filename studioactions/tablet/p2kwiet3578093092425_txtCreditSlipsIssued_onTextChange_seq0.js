function p2kwiet3578093092425_txtCreditSlipsIssued_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCreditSlipsIssued");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCreditSlipsIssued.text, frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text, "lblDiffCreditSlipsIssued");
}