function p2kwiet3578093095117_vbox13932202681386599_onClick_seq0(eventobject) {
    ClearVariables();
    glbMemberId = 0;
    if (isSearchPage) {
        isSearchPage = false;
        frmMemberProfileSearch.show();
    } else {
        if (isPMFromHomeScreen == true) {
            isPMFromHomeScreen = false;
        }
        evenOnPostShowHomeScreen();
        //frmHomeScreen.show();
    }
    isLifetimeInChangeMemberType = false;
}