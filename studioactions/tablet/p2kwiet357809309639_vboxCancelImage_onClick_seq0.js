function p2kwiet357809309639_vboxCancelImage_onClick_seq0(eventobject) {
    ClearVariables();
    batchWeightData = [];
    if (IsNoMeetingSelected) {
        frmHomeScreenNoMeeting.show();
    } else {
        evenOnPostShowHomeScreen();
        //frmHomeScreen.show();
    }
}