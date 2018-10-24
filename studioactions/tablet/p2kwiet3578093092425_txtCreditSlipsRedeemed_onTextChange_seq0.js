function p2kwiet3578093092425_txtCreditSlipsRedeemed_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCreditSlipsRedeemed");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCreditSlipsRedeemed.text, frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text, "lblDiffCreditSlipsRedeemed");
}