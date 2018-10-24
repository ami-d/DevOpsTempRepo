function p2kwiet3578093091972_txtAreaWeightProcess_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneCurrentWeight.call(this);
    eventonDoneTextAreaProcessMemberWeighCalculations.call(this, frmProcessMember.txtAreaWeightProcess.text, null, true);
    onClickIsMemberLoosingWeightRapidly.call(this, frmProcessMember.txtAreaWeightProcess.text);
}