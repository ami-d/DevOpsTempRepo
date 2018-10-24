var selectedLocation;
var PassWord;
var myCryptoKey = "";
var glbUserName = "";
var timeElpased;
var getTokenOnAppActive = true;

function eventOnPostShowLogin() {

	setEnableLogingBut(true);
	glbFormName=frmProcessMember;
	//** Commented on 20/03/17 MEG 6345
	//** Called on eventOnClickLogin()
	/*
    registerForIdleTimeout(); //Added by Praveen Kalal for Idle timeout
	*/
    frmLogin.tbxLogin.text = "";
    frmLogin.tbxPassword.text = "";

    boMonitor.log("LogIn", "", "", FlowForMonitor.LogIn);
    
    //MEG-5094 -- Showing version details
	if(deviceLocale == 'fr_CA')
	{
		var mmInEng=(appVersionDetails.split('|')[1]).split('-')[1]; 
		var mmInFrench = getFrenchTranslationOfMonth(mmInEng);
		appVersionDetails = appVersionDetails.replace(mmInEng, mmInFrench);
		printLog('appVersionDetails', appVersionDetails);
	}
	frmLogin.lblVersionData.text = kony.i18n.getLocalizedString("strappVersionInfo") + " " + appVersionDetails;
	
	//End 
    if(in_array(deviceLocale,Countries["CA"])){
		popupSearchLocation.txtZip.maxTextLength=10;
		popupSearchLocation.txtZip.textInputMode=constants.TEXTBOX_INPUT_MODE_ANY;
		popupAddSavedLocation.txtZip.maxTextLength=10;
		popupAddSavedLocation.txtZip.textInputMode=constants.TEXTBOX_INPUT_MODE_ANY;
		MaxProductCartAmount = NaN;
		frmLogin.ccValidateImg.isVisible = false;
		kony.print("in here CA");
	}else{
		popupSearchLocation.txtZip.textInputMode=constants.TEXTBOX_INPUT_MODE_NUMERIC;
		popupSearchLocation.txtZip.maxTextLength=5;
		popupAddSavedLocation.txtZip.maxTextLength=5;
		popupAddSavedLocation.txtZip.textInputMode=constants.TEXTBOX_INPUT_MODE_NUMERIC;
		MaxProductCartAmount = 1500;
		frmLogin.ccValidateImg.isVisible = true;
		kony.print("in here US");
	}      // Added by Ankit for MEGCA-353

}
function setEnableLogingBut(isEnable){
	frmLogin.btnLogin.setEnabled(isEnable);
	frmLogin.btnLogin.skin= (isEnable) ? "btnwwtxtLogin" : "btnNoWeighInSelected";
}
function addDirectSaleMember() {
    var whereClause = " where MemberID = '1'";
    kony.print("in addDirectSaleMember ===");

    function successDirectSaleMember(res) {
        kony.print("in addDirectSaleMember ===" + JSON.stringify(res));

        if (res.length == 0) {
            var createMemberDetailsObject = {};
            createMemberDetailsObject.MemberID = "1";
            createMemberDetailsObject.PreRegNumber = 0;
            //Not Null
            createMemberDetailsObject.EmpID = glbEmployeeId;
            createMemberDetailsObject.MemberType = '0';
            createMemberDetailsObject.EnrollmentDate = "0001-01-01T00:00:00";
            kony.print("in createMemberDetailsObject ===" + JSON.stringify(createMemberDetailsObject));

            DBMemberDetailsController.create(createMemberDetailsObject, successAddDirectSaleMember, eventErrorCallBack, false);
        }
    }
    DBMemberDetailsController.find(whereClause, successDirectSaleMember, eventErrorCallBack);

    function successAddDirectSaleMember() {
        kony.print("Success Direct Sale");
    }
}

function eventOnClickLoginPopup() {
    kony.print("Inside eventOnClickLoginPopup");
    try {
        if (IsSyncRunning) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgSycRunningInBg"));
        } else {
            var res = false;
            valid = new validationcls();
            res = valid.checkForRequiredFields(popupLogin.tbxEmployeeNumber.text, "Employee Number").isValid();
            if (res) {
                displayProgressView();
                glbLoginUsername = frmLogin.tbxLogin.text;
                glbEmployeeNumber = popupLogin.tbxEmployeeNumber.text;
                kony.print("glbLoginUsername = " + glbLoginUsername + " and glbEmployeeNumber = " + glbEmployeeNumber);
                // Dileep Chejerla: MEG-2812 and MEG-2809
                kony.print("checkValidString(glbEmployeeNumber) == " + checkValidString(glbEmployeeNumber));
                if (checkValidString(glbEmployeeNumber)) {
                    boAuthentication.wwAuthenticate(frmLogin.tbxLogin.text, popupLogin.tbxEmployeeNumber.text, "offline");
                } else {
                    displayPopupAlert(kony.i18n.getLocalizedString("strMsgInvalidEmpNum"));
                }
                glbLoginPopupOpen = false;
            } else if (error != "") {
                displayPopupAlert(error);
                error = "";
            }
        }
        removeProgressView();
    } catch (e) {
        removeProgressView();
        GlobalException(e);
    }
}

// function enableloginbutton()
// {
//   setEnableLogingBut(true);
// }
function eventOnClickLogin() {
    try {
      	kony.print("eventOnClickLogin");
		//setEnableLogingBut(false);
   		registerForIdleTimeout(); //** Added on 20/03/17 MEG 6345 LogOut Issue
        if (IsSyncRunning) {
          	//setEnableLogingBut(false);
            //alertForMessages("Sync is already running in background, please try after sometime");
        } else {
        	openDB();
            var res = false;
            valid = new validationcls();
            res = valid.checkLocation(frmLogin.lblLocationName.text).checkForRequiredFields(frmLogin.tbxLogin.text, kony.i18n.getLocalizedString("strUsername")).checkForRequiredFields(frmLogin.tbxPassword.text, kony.i18n.getLocalizedString("strPlacePassword")).isValid();
            if (res) {
                glbLoginUsername = frmLogin.tbxLogin.text;
                glbLoginPassword = frmLogin.tbxPassword.text;
                
                
                
                    if (checkIfNetworkIsAvailable()) {
                        boAuthentication.wwAuthenticate(frmLogin.tbxLogin.text, frmLogin.tbxPassword.text, "ws");
                    } else {
                      	//setEnableLogingBut(true);
                        function successFindUserInTable(res) {
                            kony.print("Inside successFindUserInTable --> res = " + JSON.stringify(res));
                            removeProgressView();
                            if (res.length > 0) {
                                kony.print("got record");
                                var context1 = {
                                    "widget": frmLogin.vbox5075934196767,
                                    "anchor": "top",
                                    "sizetoanchorwidth": true
                                };
                                popupLogin.setContext(context1);
                                popupLogin.show();
                                removeProgressView();
                               // popupLogin.tbxEmployeeNumber.text = "";
                            } else {
                                kony.print("no record");
                                alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
                            }
                        }
                        var whereClause = " where UserName like '" + frmLogin.tbxLogin.text + "'";
                        com.kony.WeightWatchers.LookUpTables.UserDetailsLookup.find(whereClause, successFindUserInTable, eventErrorCallBack)

                    }


                var monitorData = {
                    "UserName": frmLogin.tbxLogin.text
                };

                boMonitor.log("LogIn", "btnLogin", monitorData, FlowForMonitor.LogIn);
          }else{
            	removeProgressView();
          }
          
        }
    } catch (e) {
        removeProgressView();
        GlobalException(e);
	    //setEnableLogingBut(true);
    }

}

function schedule24HoursTimer() {

    if (!Is24hTimerCalled) {
        kony.print("===schedule24HoursTimer called===");
        kony.timer.schedule("ww24hTimer", logoutApplication, 86400, true); //24 Hours 60s=1m*60m=1h*24h=1d
        Is24hTimerCalled = true;
    }
}

function cancel24hTimer() {
    try {
        kony.timer.cancel("ww24hTimer");
    } catch (err) {
        kony.print("Error :: " + err);
    }
}

function timerCallBack() {
    kony.print("Timer invoked");
}



function loginResponse(loginStatus, errorMsg, empNumber) {
    removeProgressView();
    if (loginStatus) {
        boAuthentication.authenticateEmployeeWS(empNumber);
    } else {
        kony.print("loginResponse status: " + loginStatus);
        kony.print("loginResponse errorMsg: " + errorMsg);
        frmSelectMeeting.show();
    }
}

// MEG-64: Employee authentication service 
function employeeResponse(empStatus, errorMsg, status) {

    if (empStatus) {
        if (checkIfNetworkIsAvailable() && status != "offline") {
            IsFromLocationSelected = true;
            if (!IsSyncRunning) {
                boLocation.getDBAllLocationFromDB();
                schedule24HoursTimer();
            } else {
                alertForMessages("Sync is already running in background, please try after sometime");
            }
        } else {
            if (status && status == "offline") {
                //Offline Login
                removeProgressView();
                boMeetings.GetMeetingStatusByLocationId();
                frmSelectMeeting.segMeetingsList.removeAll();
                frmSelectMeeting.show();
                schedule24HoursTimer();
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
            }

        }
        
    } else {
        removeProgressView();
        alert(errorMsg);
    }
}

function eventOnClickChangeLocation() {
    try {
        popupSearchLocation.segmentRecentLocations.removeAll();
        popupSearchLocation.txtZip.text = "";
        boLocation.getLocationFromLocalDb(5, orderMapLocation)
    } catch (exp) {
        GlobalException(exp);
    }
}

function getLocationFromLocalDbResponse(status, popupSearchLocation_segmentRecentLocations_temp) {

    if (popupSearchLocation_segmentRecentLocations_temp.length > 0) {
        popupSearchLocation.hboxZipSec2.setVisibility(true);
    } else {
        popupSearchLocation.hboxZipSec2.setVisibility(false);
    }
    if (status) {

        popupSearchLocation.segmentRecentLocations.setVisibility(true);
        popupSearchLocation.hboxRecentSearch.setVisibility(false);
        popupSearchLocation.segmentRecentLocations.setData(popupSearchLocation_segmentRecentLocations_temp);
    } else {
        removeProgressView();
        popupSearchLocation.segmentRecentLocations.setVisibility(false);
        popupSearchLocation.hboxRecentSearch.setVisibility(true);
        popupSearchLocation.lblNoRecentSearch.text = kony.i18n.getLocalizedString("strNoRecentSearch");
    }
    popupSearchLocation.lblLocationsTitle.text = kony.i18n.getLocalizedString("strRecentTitle");
    kony.print("kony.application.getCurrentForm()===>>>" + kony.application.getCurrentForm().id);
    
        var context = {
            "widget": frmLogin.hboxLocation,
            "anchor": "top",
            "sizetoanchorwidth": true
        };
        popupSearchLocation.setContext(context);
    popupSearchLocation.show();
    //Dismiss Loading screen
    removeProgressView();
    dismissSyncLoadingScreen();

}


function eventOnPostShowGetLastLocation() {
    try {
        boLocation.GetLastSelectedLocation();
    } catch (e) {
        GlobalException(e);
    }

}



function displayLastSelectedLocation(status, locationNo, dispValue, locationid) {
    try {
        kony.print("displayLastSelectedLocation: " + status + " " + locationNo + " " + dispValue + " " + locationid);
        if (status) {
            kony.print("inside true---" + status);
            
                frmLogin.lblLocationName.text = dispValue + "(" + locationNo + ")";
            glbLocationNum = locationNo;
            glbLocationID = locationid;
            
        }
        removeProgressView();
    } catch (e) {
        // todo: handle exception
        GlobalException(e)
    }
}

// For stopping bar code scanner when application goes into background

function setAppCallBacks() {
    var callbacksObj = {
        onbackground: onBackGroundCallBack,
        onforeground: onForeGroundCallBack
    };
    kony.application.setApplicationCallbacks(callbacksObj);
}

function getEncryptedData(name1, name2) {

    //myCryptoKey = kony.crypto.readKey("cryptKey");
    kony.print(" myCryptoKey is ::: " + myCryptoKey);
    if (myCryptoKey == null || myCryptoKey == undefined || myCryptoKey.length <= 0) {
        kony.print("Doing encryption " + name1);
        keyobj = {
            passphrasetext: [name1.toString()],
            subalgo: "aes",
            passphrasehashalgo: "md5"
        };
        kony.print("Generating new Cryto Key");
        var EncryptDecryptKey = kony.crypto.newKey("passphrase", 128, keyobj);
        myUniqueIDKey = kony.crypto.saveKey("cryptKey", EncryptDecryptKey);
        myCryptoKey = kony.crypto.readKey(myUniqueIDKey);
    }

    kony.print("Crypto Key is : " + myCryptoKey);
    prptobj = {
        padding: "pkcs5",
        mode: "cbc",
        initializationvector: "1234567890123456"
    };

    var value1 = kony.crypto.encrypt("aes", myCryptoKey, name2, prptobj);

    kony.print("Encrypted value val1 obj is : " + value1);
    kony.print("Encrypted value val1 base64 is : " + kony.convertToBase64(value1));

    return (kony.convertToBase64(value1));
}

function getDecryptedData(myEncryptedText, name1) {
    kony.print("Inside getDecryptedData " + myCryptoKey);
    if (myCryptoKey == null || myCryptoKey == undefined || myCryptoKey.length <= 0) {
        keyobj = {
            passphrasetext: [name1.toString()],
            subalgo: "aes",
            passphrasehashalgo: "md5"
        };
        kony.print("Generating new Cryto Key");
        var EncryptDecryptKey = kony.crypto.newKey("passphrase", 128, keyobj);
        myUniqueIDKey = kony.crypto.saveKey("cryptKey", EncryptDecryptKey);
        myCryptoKey = kony.crypto.readKey(myUniqueIDKey);
    }

    kony.print("Crypto Key is : " + myCryptoKey);
    prptobj = {
        padding: "pkcs5",
        mode: "cbc",
        initializationvector: "1234567890123456"
    };
    var myClearText = kony.crypto.decrypt("aes", myCryptoKey, kony.convertToRawBytes(myEncryptedText), prptobj);
    kony.print("Return value is : " + myClearText);
    return myClearText;
}

function onForeGroundCallBack() {
  	kony.print("onForeGroundCallBack invoked ");
  	if (kony.sync.syncInitialized) { //MEG-6943
        checkForLastUpdatedTime(true);
        if (getTimeDifferance() >= 577 && getTokenOnAppActive == true) {
            kony.print("In getTimeDifferance invoked ");
            callIssueSessionWs();
        }
    }else{
      	kony.print("Sync not initialized");
    }
    
}

function onBackGroundCallBack() {
    kony.print("onBackgourd invoked " + isScanInProgress);

}

function callIssueSessionWs() {
    kony.print(" In callIssueSessionWs ");
    if (checkIfNetworkIsAvailable()) {
        timeElpased = new Date();
        kony.print(" In callIssueSessionWs at time==" + timeElpased.getHours() + ":" + timeElpased.getMinutes() + ":" + timeElpased.getSeconds());
        boAuthentication.issueSessionViaWS();
    }
}

function callSyncSession() {
    boAuthentication.issueSessionViaWSForSync();
}

function getTimeDifferance() {
    var currentTime = new Date();
    kony.print(" currentTime==" + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds());

    var diff = (currentTime - timeElpased) / 1000;
    kony.print("You waited: " + diff + " seconds");
    return diff;
}

//MEG-6853
/**
     * This function validates current installed application version with active application versions from backend service and if does not matches then application will exit
     * @param {} fromLogin (true/false)
     * @returns {} 
     */
function validateApplicationVersion(fromLogin){
  var installedAppVersion = appConfig.appVersion;
  kony.print("SJ installedAppVersion ===>>>"+installedAppVersion);
  if(checkIfNetworkIsAvailable()){
    	getCurrentAppVersionFromWS(function(appVersionArr){
            kony.print("SJ appVersionFromWS ====>>>"+JSON.stringify(appVersionArr));
            if(in_array(installedAppVersion,appVersionArr)){
                  kony.print("Installed app version is correct one.");
                  kony.print("fromLogin : "+fromLogin);
              
                  if((fromLogin == false) ||  (fromLogin == 'false')){
                    	initSyncSession();
                  }else{
			            //displayProgressView();
                    	eventOnClickLogin();
                  }
            }else{
                  var alertMsg = kony.i18n.getLocalizedString("strAlertAppVersion");
                  alertMsg = alertMsg.replace("###", installedAppVersion);
                  var appVersions = "["+appVersionArr.join()+"]";
                  alertMsg = alertMsg.replace("@@@", appVersions);
                  var alertConfig = {
                    message: alertMsg, 
                    alertType: constants.ALERT_TYPE_INFO,
                    alertTitle: "",
                    yesLabel: kony.i18n.getLocalizedString("btnClose"), 
                    alertHandler: closeApplication
                  };
              var psConfig = {};
              var validateAppVersionAlert = kony.ui.Alert(alertConfig, psConfig);
            }
        });
  }else{
    if((fromLogin == false) ||  (fromLogin == 'false')){
      initSyncSession();
    }else{
      eventOnClickLogin();
    }
  }
}

function getCurrentAppVersionFromWS(callback){
  
  var GetAppVersion_inputparam = {};
  GetAppVersion_inputparam["serviceID"] = Services.GetAppVersionDetails;
  if(JsonService){
    GetAppVersion_inputparam["httpheaders"] = setRESTHeader();
  }else {
    GetAppVersion_inputparam["deviceID"] = gblDeviceID;
    GetAppVersion_inputparam["Source"] = gblSourceVal;
    GetAppVersion_inputparam["httpheaders"] = {};
  }

  GetAppVersion_inputparam["httpconfigs"] = {};
  GetAppVersion = Network.makeServiceCall(GetAppVersion_inputparam, getCurrentAppVersionFromWSCallback, false);

  function getCurrentAppVersionFromWSCallback(status, GetAppVersion){
      try {
        var appVersionArr = [];	
        if (status == 400) {
          if (GetAppVersion["opstatus"] == 0) {
            kony.print("Response===" + JSON.stringify(GetAppVersion));
            if (GetAppVersion["AppDetails"] && GetAppVersion["AppDetails"].length > 0) {
              for (var i in GetAppVersion["AppDetails"]) {
                var v = GetAppVersion["AppDetails"][i];
                if(v.IsActive == 'true' || v.IsActive == true)
                	appVersionArr.push(v.AppVersionNo);
              }

            }
            
            kony.print("SJ getCurrentAppVersionFromWS ====>>>"+JSON.stringify(appVersionArr));
            removeProgressView();
            if(appVersionArr.length > 0 ){
            	callback.call(null, appVersionArr);
            }
            else{
              	alertForMessages(kony.i18n.getLocalizedString("strMsgNoRecord"));
            }
          } else {
            kony.print("::GetAppVersionFailure::");
            removeProgressView();  
          	CommonErrHandler.networkError(status, GetAppVersion);
          }

        } else if (status == 300) {
          removeProgressView();  
          CommonErrHandler.networkError(status, GetAppVersion);
        }
        else{
        	removeProgressView();    
        }
        
      } catch (e) {
        GlobalException(e);
      }

  }	
}



function closeApplication(){
  	try{
      	kony.print("SJ ===>>> Exit from application");
    	kony.application.exit();
  	} catch(err){
    	GlobalException(err);
  	}
}