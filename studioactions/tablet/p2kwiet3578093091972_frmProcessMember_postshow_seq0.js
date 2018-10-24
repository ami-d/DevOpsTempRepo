function p2kwiet3578093091972_frmProcessMember_postshow_seq0(eventobject, neworientation) {
    onPostShowFrmProcess.call(this);
    lbsToNextMilestone.call(this);
    loadMissedWeekData.call(this);
    checkForAchievedReachedLifeTimeMilestone.call(this);
    displayPersonalGoalMessage.call(this);
    eventOnPostShowPreFillEmail.call(this);
    resetVarOnFrmCheckOutPostShow.call(this);
    eventOnPostShowCheckoutForm.call(this);
    setIsAttendingOnPostShow_ProcessMember.call(this);
    setSubScriptionInfo.call(this);
}