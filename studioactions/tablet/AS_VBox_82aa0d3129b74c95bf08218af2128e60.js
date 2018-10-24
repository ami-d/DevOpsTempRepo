function AS_VBox_82aa0d3129b74c95bf08218af2128e60(eventobject) {
    kony.print("prevForm " + prevForm);
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