function p2kwiet3578093092083_frmSelectMeeting_postshow_seq0(eventobject, neworientation) {
    getAllProductData.call(this);
    eventOnPostShowSelectMeetingForm.call(this);
    createMilestoneLookUp.call(this);
    setDataFromAppSetting.call(this);
    createStateLookUp.call(this);
    setHeight.call(this);
    ingenicoLogin.call(this);
    glbIsWeekChanged = false;
}