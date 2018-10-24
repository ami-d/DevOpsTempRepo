function onPostFrmHelp() {
    loadURL();
}

function loadURL() {
    frmHelp.browserHelp.requestURLConfig = {
        "URL": glbHelpURL,
        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
    };
}

function closeHelp() {

    if (glbMeetingNum != "") {
        frmHomeScreen.show();

    } else if (glbMeetingNum == "") {
        frmHomeScreenNoMeeting.show();
    }
    frmHelp.destroy();
}
