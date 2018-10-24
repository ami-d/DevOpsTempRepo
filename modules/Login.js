var selectedLocation;

function WwLogin() {
    try {
        if (checkValidate()) {
            displayProgressView();
            var loginService_inputparam = {};
            loginService_inputparam["serviceID"] = Login;
            loginService_inputparam["userName"] = frmLogin.tbxLogin.text;
            loginService_inputparam["pwd"] = frmLogin.tbxPassword.text;
            /*
             * 	TODO: Add the stable version detail in below parameter
             * loginService_inputparam["version"] = "14.2.0.3";
             */

            loginService_inputparam["httpheaders"] = {};
            loginService_inputparam["httpconfigs"] = {};
            //loginService = appmiddlewareinvokerasync(loginService_inputparam, loginCallback);
            loginService = Network.makeServiceCall(loginService_inputparam, loginCallback, false); //true to allow offline data access
        }
    } catch (e) {
        removeProgressView();
        GlobalException(e);
    }

}

//callback for login service
function loginCallback(status, loginService) {
    try {
        if (status == 400) {
            if (loginService["opstatus"] == 0) {
                if (loginService["res_id"] == 1) {

                    glbUserName = "anita.sado"; // TODO: This needs to be changed during original implementation
                    // TODO: after login add username pass to local db.    	
                    //getMeetingsList();

                    //frmSelectMeeting.show();
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strMsgInvalid"));
                }
                removeProgressView();
            } else {

                kony.print(loginService['opstatus']);
                CommonErrHandler.networkError(loginService['opstatus'], loginService);
                removeProgressView();
            }
            //TODO : Currently Login is bypassed please change once its working
            frmSelectMeeting.show();
        } else if (status == 300) {
            CommonErrHandler.networkError(status, resulttable);
            removeProgressView();
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}
