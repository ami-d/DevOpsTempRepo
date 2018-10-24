function p2kwiet3578093091541_frmEnrollWeighMember_postshow_seq0(eventobject, neworientation) {
    eventOnPostshowFrmEnrollWeighMember.call(this);
    loadMissedWeekData.call(this);
    eventOnPostShowPreFillEmail.call(this);
    resetVarOnFrmCheckOutPostShow.call(this);
    eventOnPostShowCheckoutForm.call(this);
    displayPersonalGoalMessage.call(this);
}