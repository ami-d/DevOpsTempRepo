function p2kwiet3578093092060_vbox12443534676066565_onClick_seq0(eventobject) {
    frmSavedLocations.destroy();
    popupAddSavedLocation.dismiss();
    //frmLogin.show();
    if (glbMeetingNum != "") {
        frmHomeScreen.show();
    } else if (glbMeetingNum == "") {
        frmHomeScreenNoMeeting.show();
    }
}