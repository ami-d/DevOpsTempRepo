var UserName;
var UserPassword;
var glbClientKey = "";

var boAuthentication = {

    wwAuthenticate: function(loginname, loginpassword, logintype) {

        UserName = loginname;
        UserPassword = loginpassword;

        switch (logintype.toString()) {

            case 'ws':
                kony.print("In wwAuthenticate");
                boAuthentication.authenticateViaWS(loginname, loginpassword);

                break;
            case 'offline':
                kony.print("In wwAuthenticate offline");
                //here Login Password = Employee Number
                boAuthentication.getUserDetailsOffline(loginname, loginpassword, false, null);
                break;

            case 'offline_ws':

                break;
            default:
                alertForMessages(kony.i18n.getLocalizedString("strMsgNoLoginTypeDefined"));
        }
    },

    authenticateViaWS: function(loginname, loginpassword) {
        kony.print("In authenticateViaWS");
        var loginService_inputparam = {};
        loginService_inputparam["httpconfigs"] = {};

        //TODO : comment below line when getting secret key from AirWatch SDK
        if (glbClientKey == null || glbClientKey == undefined || glbClientKey == "") {
            glbClientKey = "b25918b9-e55c-4337-9b6c-6d6cdb248516";
        }

        loginService_inputparam["serviceID"] = Services.Authorize;
        loginService_inputparam["userName"] = loginname;
        loginService_inputparam["pwd"] = escape(loginpassword);
        loginService_inputparam["locationId"] = glbLocationID;
        loginService_inputparam["clientKey"] = glbClientKey;
       
        // Ends here

		if(JsonService){
			loginService_inputparam["httpheaders"] = setRESTHeader();
		}
		else
		{
			loginService_inputparam["deviceID"] = gblDeviceID;
			loginService_inputparam["Source"] = gblSourceVal;
			loginService_inputparam["httpheaders"] = {};
		}
		kony.print("loginService_inputparam JSON" + JSON.stringify(loginService_inputparam));
		
        loginService = Network.makeServiceCall(loginService_inputparam, boAuthentication.authorizeViaWSCallbackNew);
    },

    // Callback for new login servkce    
    authorizeViaWSCallbackNew: function(status, loginService) {
        try {
            kony.print("In authorizeViaWSCallbackNew");
            kony.print("In authorizeViaWSCallbackNew JSON" + JSON.stringify(loginService));
            if (status == 400) {
                kony.print("In authorizeViaWSCallbackNew" + status);
                glbSPAuthToken = "";
                /*if (loginService != undefined && loginService.AuthorizeDetails != undefined && loginService.AuthorizeDetails[0] != undefined &&
                		loginService.AuthorizeDetails[0]["status"] != undefined && loginService.AuthorizeDetails[0]["status"] == "Successful") {
                	loginService = loginService.AuthorizeDetails[0];
                	*/
                	
                	if(JsonService){
                		loginService["status"] = loginService.AuthorizeDetails[0]["status"];
                	}
                	if (loginService["status"] != undefined && loginService["status"] == "Successful") {
               
	                	if(JsonService){
		                		if (loginService != undefined && loginService.AuthorizeDetails != undefined && loginService.AuthorizeDetails[0] != undefined) {
		                			loginService = loginService.AuthorizeDetails[0];
		                		}
                		}
                	
                    glbSPAuthToken = loginService["accessToken"];
                    glbUserName = makeFirstLetterUp(loginService["FirstName"] + "." + loginService["LastName"]).toString();
                    glbUserFirstName = makeFirstLetterUp(loginService["FirstName"]);
                    glbUserLastName = makeFirstLetterUp(loginService["LastName"]);
                    glbEmployeeId = loginService["EmployeeID"];
                    glbEmployeeNumber = loginService["empNumber"];
                    //on successful authentication store valid user to local db for future use
                    boAuthentication.getUserDetailsOffline(UserName, UserPassword, true, loginService);
                    glbIsUserLoggedIn = true;
                    employeeResponse(true, "success");
                    
                    //MGE- 5324 - MSR info stored in offline mode sent to in network is available at login
					if (checkIfNetworkIsAvailable()) {
						var msrInfo = kony.store.getItem("msrInfo");
						kony.print("authorizeViaWSCallbackNew msrInfo == "+JSON.stringify(msrInfo));
						if(msrInfo)
							sendMSRValidatedData(msrInfo);
					}
                    
                } else {
                    kony.print("In else token::::: ");
                    boAuthentication.getLoginErrorMessage(loginService["status"]);
                }
            }
          setEnableLogingBut(true);
        } catch (e) {
            removeProgressView();
            GlobalException(e);
        }
    },

    getLoginErrorMessage: function(statusStr) {
        if (checkUndefined(statusStr) != "") {
            statusStr = statusStr.toLowerCase();
            kony.print("statusStr in getLoginErrorMessage  ::" + statusStr);
            switch (statusStr) {
                case "accountlocked":
                    {
                        kony.print("Inside accountlocked");
                        employeeResponse(false, kony.i18n.getLocalizedString("strMsgLockedUser"));
                        break;
                    }
                case "inactivelocation":
                    {
                        kony.print("Location not found");
                        employeeResponse(false, kony.i18n.getLocalizedString("strMsgInactiveLocation"));
                        boLocationChecking.getLocationFromDB(GetInactiveRemoveLocationCallback, glbLocationID);
                        break;
                    }
                default:
                    {
                        employeeResponse(false, kony.i18n.getLocalizedString("strMsgInvalid"));
                        break;
                    }
            }
        }
    },

    addMemberToLocalDB: function(loginname, loginpassword, loginResult) {
        var whereClause = " where UserName like '" + loginname + "'";
        kony.print("whereClause=====>" + whereClause)

        function checkForLocalDbSuccessCallBack(response) {
            if (response.length < 1) {
                var createUserDetailsObject = {};
                kony.print(loginname + ' ' + loginpassword + " Response === " + JSON.stringify(loginResult));
                kony.print("First Name == " + loginResult["FirstName"]);

                createUserDetailsObject.UserName = loginname;
                var encryptedPwd = getEncryptedData(loginname, loginpassword);
                kony.print("Encrpted Pwd : " + encryptedPwd);

                createUserDetailsObject.FirstName = loginResult["FirstName"];
                createUserDetailsObject.LastName = loginResult["LastName"];
                createUserDetailsObject.EmployeeNumber = loginResult["empNumber"];
                createUserDetailsObject.EmployeeID = loginResult["EmployeeID"];

                function addMemberToLocalDBSuccessCallback(res) {
                    kony.print(getMessageTemplate("addSuccess", "Location"), "info")
                }
                com.kony.WeightWatchers.LookUpTables.UserDetailsLookup.create(createUserDetailsObject, addMemberToLocalDBSuccessCallback, eventErrorCallBack, false);
            }
        }

        com.kony.WeightWatchers.LookUpTables.UserDetailsLookup.find(whereClause, checkForLocalDbSuccessCallBack, eventErrorCallBack);
    },

    // issue session service. To be called everytime before sync starts
    issueSessionViaWS: function() {
    
    	// MEG-5281 - AD  : START
    	if(!needTorRefreshToken)
    		return;
    	// MEG-5281 - AD  : END	

        kony.print("In issueSessionViaWS");
        var issueSessionService_inputparam = {};
        issueSessionService_inputparam["httpheaders"] = {};
        issueSessionService_inputparam["httpconfigs"] = {};

        //TODO : comment below line when getting secret key from AirWatch SDK
        if (glbClientKey == null || glbClientKey == undefined || glbClientKey == "") {
            glbClientKey = "b25918b9-e55c-4337-9b6c-6d6cdb248516";
        }

        issueSessionService_inputparam["serviceID"] = Services.issueSession;
        /*issueSessionService_inputparam["userName"] = UserName;
        issueSessionService_inputparam["pwd"] = UserPassword;
        issueSessionService_inputparam["deviceID"] = gblDeviceID;
        issueSessionService_inputparam["accessToken"] = glbSPAuthToken;
        issueSessionService_inputparam["SPID"] = glbEmployeeId;
        issueSessionService_inputparam["HeaderDate"] = "";
        issueSessionService_inputparam["Source"] = gblSourceVal;
        issueSessionService_inputparam["locationId"] = glbLocationID;
        issueSessionService_inputparam["clientKey"] = glbClientKey;*/
         //** MEG 6493
        if(JsonService){
        	issueSessionService_inputparam["httpheaders"] = setRESTHeader();
        }else { 
	        issueSessionService_inputparam["deviceID"] = gblDeviceID;
	        issueSessionService_inputparam["accessToken"] = glbSPAuthToken;
	        issueSessionService_inputparam["SPID"] = glbEmployeeId;
	        issueSessionService_inputparam["HeaderDate"] = "";
	        issueSessionService_inputparam["Source"] = gblSourceVal;
        }        
        issueSessionService_inputparam["userName"] = UserName;
        issueSessionService_inputparam["pwd"] = UserPassword;
        issueSessionService_inputparam["locationId"] = glbLocationID;
        issueSessionService_inputparam["clientKey"] = glbClientKey;
        //**End

        issueSessionService = Network.makeServiceCall(issueSessionService_inputparam, boAuthentication.issueSessionViaWSCallbackNew);
    },

    // issue session service call back

    issueSessionViaWSCallbackNew: function(status, issueSessionService) {
        try {
            removeProgressView();
            kony.print("In issueSessionViaWSCallbackNew");
            kony.print("In issueSessionViaWSCallbackNew JSON" + JSON.stringify(issueSessionService));
            if (status == 400) {
                kony.print("In issueSessionViaWSCallbackNew" + status);
                if (issueSessionService["status"] != undefined && issueSessionService["status"].toUpperCase() == "SUCCESSFUL") {
                    //on successful authentication store valid user to local db for future use
                    glbSPAuthToken = issueSessionService["accessToken"];
                    kony.print("Got the issue token ::::: " + glbSPAuthToken);
                }
            }
        } catch (e) {
            removeProgressView();
            GlobalException(e);
        }
    },

    // issue session before sync
    issueSessionViaWSForSync: function() {
    
      	kony.print("issueSessionViaWSForSync Started");
    	// MEG-5281 - AD  : START
    	if(!needTorRefreshToken){
          kony.print("issueSessionViaWSForSync needTorRefreshToken");
    		if (!IsSyncRunning) {
              	kony.print("issueSessionViaWSForSync Session Started");
                syncStartSession();
              	kony.print("issueSessionViaWSForSync Session Ended");
            } else {
                kony.print("Sync is already running in background");
            }
            
            return;
    	}
    	// MEG-5281 - AD  : END
    		
        kony.print("In issueSessionViaWSForSync");
        var issueSessionServiceForSync_inputparam = {};
        issueSessionServiceForSync_inputparam["httpheaders"] = {};
        issueSessionServiceForSync_inputparam["httpconfigs"] = {};

        //TODO : comment below line when getting secret key from AirWatch SDK
        if (glbClientKey == null || glbClientKey == undefined || glbClientKey == "") {
            glbClientKey = "b25918b9-e55c-4337-9b6c-6d6cdb248516";
        }

        issueSessionServiceForSync_inputparam["serviceID"] = Services.issueSession;
        /*issueSessionServiceForSync_inputparam["userName"] = UserName;
        issueSessionServiceForSync_inputparam["pwd"] = UserPassword;
        issueSessionServiceForSync_inputparam["deviceID"] = gblDeviceID;
        issueSessionServiceForSync_inputparam["accessToken"] = glbSPAuthToken;
        issueSessionServiceForSync_inputparam["SPID"] = glbEmployeeId;
        issueSessionServiceForSync_inputparam["HeaderDate"] = "";
        issueSessionServiceForSync_inputparam["Source"] = gblSourceVal;
        issueSessionServiceForSync_inputparam["locationId"] = glbLocationID;
        issueSessionServiceForSync_inputparam["clientKey"] = glbClientKey;*/
         //** MEG 6493
        if(JsonService){
        	issueSessionServiceForSync_inputparam["httpheaders"] = setRESTHeader();
        }else { 
	        issueSessionServiceForSync_inputparam["deviceID"] = gblDeviceID;
	        issueSessionServiceForSync_inputparam["accessToken"] = glbSPAuthToken;
	        issueSessionServiceForSync_inputparam["SPID"] = glbEmployeeId;
	        issueSessionServiceForSync_inputparam["HeaderDate"] = "";
	        issueSessionServiceForSync_inputparam["Source"] = gblSourceVal;
        }        
        issueSessionServiceForSync_inputparam["userName"] = UserName;
        issueSessionServiceForSync_inputparam["pwd"] = UserPassword;
        issueSessionServiceForSync_inputparam["locationId"] = glbLocationID;
        issueSessionServiceForSync_inputparam["clientKey"] = glbClientKey;
        //**End

        issueSessionServiceForSync = Network.makeServiceCall(issueSessionServiceForSync_inputparam, boAuthentication.issueSessionViaWSForSyncCallbackNew);
    },

    // issue session service call back

    issueSessionViaWSForSyncCallbackNew: function(status, issueSessionServiceForSync) {
        try {
            kony.print("In issueSessionViaWSForSyncCallbackNew");
            kony.print("In issueSessionViaWSForSyncCallbackNew JSON" + JSON.stringify(issueSessionServiceForSync));
            if (status == 400) {
                kony.print("In issueSessionViaWSForSyncCallbackNew" + status);
                glbSPAuthToken = "";
                removeProgressView();
                if (issueSessionServiceForSync["status"] != undefined && issueSessionServiceForSync["status"].toUpperCase() == "SUCCESSFUL") {
                    //on successful authentication store valid user to local db for future use
                    glbSPAuthToken = issueSessionServiceForSync["accessToken"];
                    kony.print("Got the issue token ::::: " + glbSPAuthToken);
                    kony.print("issueSessionViaWSForSyncCallbackNew IsSyncRunning: " + IsSyncRunning);
                    if (!IsSyncRunning) {
                        syncStartSession(); //Prateek: Uncommented for issueSession flow as this will only be called after generating last sync date.
                    } else {
                        kony.print("Sync is already running in background");
                    }
                }
            }
        } catch (e) {
            removeProgressView();
            GlobalException(e);
        }
    },

    getUserDetailsOffline: function(usrName, pwd, toInsert, loginResult) {
        var whereClause = " where UserName like '" + usrName + "'";
        kony.print("whereClause=" + whereClause);
        kony.print("UserPassword=" + UserPassword);
        kony.print("usrName=" + usrName);
        var isInsert = (toInsert) ? toInsert : false;

        function getUserDetailsOfflineSuccessCallback(res) {
            kony.print("Res Length : " + res.length);
            if (res.length > 0 && !toInsert) {
                kony.print("kony.sync.getString(res[0].UserName) ::: " + kony.sync.getString(res[0].UserName));
                if (usrName.toUpperCase() == kony.sync.getString(res[0].UserName).toUpperCase()) {
                    var empNumber = parseInt(kony.sync.getString(res[0].EmployeeNumber));
                    glbEmployeeId = parseInt(kony.sync.getString(res[0].EmployeeID));
                    glbUserFirstName = makeFirstLetterUp(kony.sync.getString(res[0].FirstName));
                    glbUserLastName = makeFirstLetterUp(kony.sync.getString(res[0].LastName));
                    glbUserName = makeFirstLetterUp(kony.sync.getString(res[0].FirstName) + "." + kony.sync.getString(res[0].LastName)).toString();
                    kony.print("glbUserName from offline: " + glbUserName);
                    //Here UserPassword == Employee Number
                    if (empNumber.toString() == UserPassword.toString()) {
                        popupLogin.dismiss();
                        popupLogin.tbxEmployeeNumber.text = "";
                        glbEmployeeNumber = empNumber;
                        glbIsUserLoggedIn = false;
                        employeeResponse(true, "success", "offline");
                    } else {
                        //Dileep Chejerla: MEG-2810 - added i18n "Please enter valid employee number"
                      	 displayPopupAlert(kony.i18n.getLocalizedString("strMsgInvalidEmpNum"));
                    }
                } else if (toInsert) {
                    displayPopupAlert(kony.i18n.getLocalizedString("strNoOfflineLogin"));
                }
            } else {
                kony.print("Record not found ");
                if (toInsert) {
                    boAuthentication.addMemberToLocalDB(UserName, UserPassword, loginResult);
                } else {
                    employeeResponse(false, kony.i18n.getLocalizedString("strNoOfflineLogin"));
                }
            }
        }
        com.kony.WeightWatchers.LookUpTables.UserDetailsLookup.find(whereClause, getUserDetailsOfflineSuccessCallback, eventErrorCallBack)
    },

    authenticateViaWSBeforeSync: function() {
        kony.print("In authenticateViaWS");
        kony.print("gblDeviceID==" + gblDeviceID + "==  glbLocationID===" + glbLocationID);
        var loginService_inputparam = {};
        loginService_inputparam["httpconfigs"] = {};

        //TODO : comment below line when getting secret key from AirWatch SDK
        if (glbClientKey == null || glbClientKey == undefined || glbClientKey == "") {
            glbClientKey = "b25918b9-e55c-4337-9b6c-6d6cdb248516";
        }

        if (glbLoginName == null || glbLoginName == undefined || glbLoginName == "") {
            glbLoginName = glbLoginUsername;
        }

        if (PassWord == null || PassWord == undefined || PassWord == "") {
            PassWord = glbLoginPassword;
        }

        loginService_inputparam["serviceID"] = Services.Authorize;
        loginService_inputparam["userName"] = glbLoginUsername;
        loginService_inputparam["pwd"] = glbLoginPassword;
        loginService_inputparam["locationId"] = glbLocationID;
        loginService_inputparam["clientKey"] = glbClientKey;
        
        
        if(JsonService){
			loginService_inputparam["httpheaders"] = setRESTHeader();
		}
		else
		{
			loginService_inputparam["deviceID"] = gblDeviceID;
			loginService_inputparam["Source"] = gblSourceVal;
			loginService_inputparam["httpheaders"] = {};
		}
		
        // Ends here
        loginService = Network.makeServiceCall(loginService_inputparam, boAuthentication.authenticateViaWSBeforeSyncCallback);
    },

    authenticateViaWSBeforeSyncCallback: function(status, loginService) {
        try {

            if (status == 400) {
                kony.print("In authenticateViaWSBeforeSyncCallback" + status);
                kony.print("In authenticateViaWSCallback JSON" + JSON.stringify(loginService));
                if (loginService != undefined && loginService.AuthorizeDetails != undefined && loginService.AuthorizeDetails[0] != undefined &&
                		loginService.AuthorizeDetails[0]["status"] != undefined && loginService.AuthorizeDetails[0]["status"] == "Successful") {
                	loginService = loginService.AuthorizeDetails[0];
                    if (loginService["accessToken"] != undefined && loginService["accessToken"].length > 0) {
                        //on successful authentication store valid user to local db for future use
                        glbSPAuthToken = loginService["accessToken"];

                        kony.print("Successful login .... got token ::::: " + glbSPAuthToken);

                        glbUserName = loginService["FirstName"] + "." + loginService["LastName"];
                        glbUserName = makeFirstLetterUp(glbUserName);
                        glbEmployeeId = loginService["EmployeeID"];
                        kony.print("authenticateViaWSBeforeSyncCallback IsSyncRunning: " + IsSyncRunning);
                        removeProgressView();
                        if (!IsSyncRunning) {
                            onInitSearchLocation();
                         } else {

                            alertForMessages(kony.i18n.getLocalizedString("strMsgSycRunningInBg"));
                        }

                    } else {
                        loginResponse(false, kony.i18n.getLocalizedString("strMsgInvalid"));
                    }
                }
            }
        } catch (e) {
            removeProgressView();
            GlobalException(e);
        }
    }
}
