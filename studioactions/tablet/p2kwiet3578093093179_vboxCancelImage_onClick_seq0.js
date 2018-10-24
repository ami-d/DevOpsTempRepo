function p2kwiet3578093093179_vboxCancelImage_onClick_seq0(eventobject) {
    boTallyMeetingReport.isfromTallyReportFlow = false;
    kony.print("prevForm  " + prevForm);
    if (checkValidString(prevForm)) {
        if (prevForm == frmSelectMeeting.id) {
            frmSelectMeeting.show();
        } else if (prevForm == frmHomeScreenNoMeeting.id) {
            frmHomeScreenNoMeeting.show();
            setAWSLocation(false);
        } else if (prevForm == frmHomeScreen.id) {
            frmHomeScreen.show();
        }
        prevForm = "";
    } else {
        if (kony.application.getPreviousForm().id == frmSelectMeeting.id) {
            frmSelectMeeting.show();
        } else {
            if (glbMeetingNum != "") {
                frmHomeScreen.show();
            } else if (glbMeetingNum == "") {
                frmHomeScreenNoMeeting.show();
            }
        }
    }
}