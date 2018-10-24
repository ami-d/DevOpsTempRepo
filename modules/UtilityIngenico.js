var PairingHandlerObject;
var isDevicePaired = false;
var isDeviceConnected = false;
var ClientVersion = "6.0.80";
var API_KEY = "SDK6-161d2986-af8e-4085-a9ac-ea22274bc125"; //"SDK6-ed92b1d2-d116-4a72-876b-80248a009454"; // //"SDK6-cb1cc57f-42e1-45a2-8aa0-4d4f56a88dff";//"RPX6-d76d2c37-f7b7-40c8-bf3f-9ec0a5cdc562";
var BASE_URL = "https://uatmcm.roamdata.com"; //"https://mcm.roamdata.com"; 
var USERNAME = "wwatcherssubline1"; //"wwatcherstest1";
var PASSWORD = "12345";
var connCounter = 0;
var ccBatteryLevel = 0;

var enumbHashPRF = {
    "SHA1": 1,
    "SHA224": 2,
    "SHA256": 3,
    "SHA384": 4,
    "SHA512": 5
};

var enumbHashPRFLength = {
    "SHA1": 20,
    "SHA224": 28,
    "SHA256": 32,
    "SHA384": 48,
    "SHA512": 64
};

var iteration = 10000;

var readerInfoObj = {
    "IsIngenico": false,
    "Deviceid": "",
    "ReaderName": "",
    "ReaderID": "",
    "LastPairedTime": "",
    "CreatedTime": "",
    "LastConnectedTime": ""
};

/* Initialize the Ingenioc FFI class oject */
function initIngenico() {
    //Creates an object of class 'PairingHandler'
    kony.print('MEG Ingenico :: In initIngenico');

    if (PairingHandlerObject == null) {
        kony.print('In initIngenico -- Object created');
        PairingHandlerObject = new com.weightwatchers.ingenico.PairingHandler();
    }

}

/* Get the reader info. from local DB */
function getCCReaderInfo() {
  kony.print('MEG Ingenico :: In getCCReaderInfo');
    //Get the info from the DB
    var deviceInfoObj = {};
    var whereClause = " where 1=1 LIMIT 0,1"
    DBCcDeviceInfoController.find(whereClause, function(res) {
        if (res && res.length > 0) {
            kony.print("MEG Ingenico :: Reader info found - getCCReaderInfo" + JSON.stringify(res[0]));
			deviceInfoObj.IsIngenico =kony.sync.getString(res[0].IsIngenico);
          deviceInfoObj.Deviceid = kony.sync.getString(res[0].Deviceid);
          deviceInfoObj.ReaderName = kony.sync.getString(res[0].ReaderName);
          deviceInfoObj.ReaderID = kony.sync.getString(res[0].ReaderID);
          deviceInfoObj.LastPairedTime = kony.sync.getString(res[0].LastPairedTime);
          deviceInfoObj.CreatedTime = kony.sync.getString(res[0].CreatedTime);
          deviceInfoObj.LastConnectedTime = kony.sync.getString(res[0].LastConnectedTime);
        } else {
                      kony.print("MEG Ingenico KONY : Reader info NOT");

            deviceInfoObj.IsIngenico = false;
        }
    }, eventErrorCallBack);
    kony.print("MEG Ingenico :: deviceInfoObj" + JSON.stringify(deviceInfoObj));
    return deviceInfoObj;
}

/* Check if reader already paired once with App */
function checkForTheReaderUsed() {
  kony.print("checkForTheReaderUsed " );
  if (in_array(deviceLocale,Countries["US"])) {
     kony.print("MEG Ingenico :: check in DB for reader info...");

   	 readerInfoObj = getCCReaderInfo();
     
  	kony.print("MEG Ingenico :: readerInfoObj == " + JSON.stringify(readerInfoObj));
	initIngenico();
    if (readerInfoObj && (readerInfoObj.IsIngenico == true || readerInfoObj.IsIngenico == "true")) {
      kony.print("MEG Ingenico ::  Device info found in DB =" + JSON.stringify(readerInfoObj));      
      kony.print("MEG Ingenico :: Saving device info into keychain == " + JSON.stringify(readerInfoObj));
      PairingHandlerObject.saveDeviceDetailTOKeychain(readerInfoObj.ReaderName, readerInfoObj.ReaderID);  
      testBTDevice(true);
    } else {
      kony.print("MEG Ingenico ::  Device info NOT found in DB");
      kony.print("MEG Ingenico :: Check in keycahin for reader info available.. ");
      PairingHandlerObject.getDeviceDetailFromKeychain(getDeviceDetailFromKeychain);  
    }
  }
}

/* Callback for reader info check in keychain */
function getDeviceDetailFromKeychain(data)
{
  kony.print("MEG Ingenico :: in getDeviceDetailFromKeychain "+JSON.stringify(data));
  if(data && data.isDeviceInfoFound == 1)
          {
            kony.print("MEG Ingenico :: reader info found in keychain. ");
            /*var deviceInfo = {};
            deviceInfo.name=data.deviceInfo.name;
            deviceInfo.identifier=data.deviceInfo.identifier;
            saveReaderInfo(deviceInfo);*/
            testBTDevice(true);
          }else{
            kony.print("MEG Ingenico :: reader info NOT found in keychain and DB. ");
          }
}



//MEG-7017
/* Save reader info in the local DB */
function saveReaderInfo(deviceInfo) {
    kony.print('MEG Ingenico :: saveReaderInfo ', JSON.stringify(deviceInfo));
    
    function removeReaderInfoFromDBSuccessCallback() {
      kony.print('removeReaderInfoFromDBSuccessCallback called');
      var obj = {};
      obj.IsIngenico = true;
      obj.Deviceid = gblDeviceID;
      obj.ReaderName = deviceInfo.name;
      obj.ReaderID = deviceInfo.identifier;
      obj.LastPairedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
      obj.CreatedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
      obj.LastConnectedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");

      function insertCCDeviceInfoSuccessCallback() {
        kony.print("MEG Ingenico :: reader info saved in DB");
          kony.print(getMessageTemplate("CCDeviceInfo Added", "CcDeviceInfo"), "info");
          readerInfoObj = getCCReaderInfo();
      }
      //Insert new paired device
      DBCcDeviceInfoController.create(obj, insertCCDeviceInfoSuccessCallback, eventErrorCallBack, false);

    }
    //Delete all device info  
    com.kony.WeightWatchers.Logger.CcDeviceInfo.remove(" where 1=1 ", removeReaderInfoFromDBSuccessCallback, eventErrorCallBack);
  
}
function addUpdateReaderInfoInDB(deviceInfo) {

    try {
     
        var strWhere = "where ReaderName = '" + deviceInfo.name + "' and ReaderID = '" + deviceInfo.identifier + "'";
        kony.print("MEG Ingenico :: IN addUpdateReaderInfoInDB == " + strWhere);

        function getDeviceInfoSuccessCallback(res) {
            kony.print('MEG Ingenico :: res  ' + JSON.stringify(res));

            if (res && res.length === 0) { //Insert
                saveReaderInfo(deviceInfo);
            }else{ //Update
              var obj = {};
              obj.IsIngenico = true;
              obj.Deviceid = gblDeviceID;
              obj.ReaderName = deviceInfo.name;
              obj.ReaderID = deviceInfo.identifier;
              obj.LastPairedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
              obj.CreatedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
              obj.LastConnectedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
              DBCcDeviceInfoController.update(strWhere, obj, function(){ kony.print("MEG Ingenico :: reader Info updated in DB"); }, function(){ kony.print("find checkReaderInfoAvailableInDB update failed");})
            }
        }
        function errorCallBack() {
            kony.print("MEG Ingenico :: find addUpdateReaderInfoInDB Insert failed");
        }
        DBCcDeviceInfoController.find(strWhere, getDeviceInfoSuccessCallback, errorCallBack);
    } catch (e) {
        kony.print("MEG Ingenico :: Ingenico Login:  addUpdateReaderInfoInDB FAILED :: " + JSON.stringify(e));
        GlobalException(e);
    }
}

/* Callback for pairing status

 data.pairStatus :0 no paired device found
 data.pairStatus :1 single paired device found
 data.pairStatus :2 multiple paired device found
*/
function initCallBack(data) {
  connCounter = 0;
    kony.print('MEG Ingenico :: pairing callback called');
    kony.print('MEG Ingenico :: data.pairStatus =' + data.pairStatus);
    if (data.pairStatus != undefined && data.pairStatus != null) {
        if (parseInt(data.pairStatus) == 0) {
            kony.print('MEG Ingenico :: NO Paired device found');
            frmLogin.ccValidateImg.src = "icn_credit_card.png";
            isDevicePaired = false;
        } else if (parseInt(data.pairStatus) == 1) {
            kony.print('MEG Ingenico :: single Paired device found');
            frmLogin.ccValidateImg.src = "icn_credit_card_orange.png";
            isDevicePaired = true;
            if (data.deviceInfo != undefined && data.deviceInfo != null) addUpdateReaderInfoInDB(data.deviceInfo);
        } else if (parseInt(data.pairStatus) == 2) {
            kony.print('MEG Ingenico :: multiple Paired device found');
            frmLogin.ccValidateImg.src = "icn_credit_card_orange.png";
            isDevicePaired = true;
        }
    }
  kony.print('MEG Ingenico :: isDevicePaired =' + isDevicePaired);
}

/* Callback for connection status

 data.connStatus :0 reader connected
 data.connStatus :1 reader not connected yet/disconnected/error while connecting
 data.isManualConn : identify the connection type (manual/Auto). set to 1 in manual connectio failed else set to 0 for auto connection
*/
function connectCallBack(data) {
    kony.print('MEG Ingenico :: connectCallBack called');
    kony.print('MEG Ingenico :: data.connStatus =' + data.connStatus);
    if (data.connStatus != undefined && data.connStatus != null) {
      var ccImg = "icn_credit_card.png";
        if (parseInt(data.connStatus) == 1) {
            kony.print('MEG Ingenico :: Device connected.');
            isDeviceConnected = true;
           ccImg = "icn_credit_card_green.png";
		   connCounter = 0;
        } else if (parseInt(data.connStatus) == 0) {
            kony.print('MEG Ingenico :: Device Disconnected.');
            isDeviceConnected = false;
             ccImg = "icn_credit_card.png";
          
          ccBatteryLevel=0;
          if (kony.application.getCurrentForm()) {
			if (kony.application.getCurrentForm().id == frmPayment.id) {
              	frmPayment.boxBatteryStatus.imgBatteryStatus.isVisible=false;
  	  			frmPayment.boxBatteryStatus.lblBatteryStatus.isVisible=false;
            }
          }
          if(isDevicePaired && data.isManualConn === 1)
          {
            if (kony.application.getCurrentForm().id == frmLogin.id) { //check for current screen is login 
              if(connCounter >= 1) 
              {
                showPairAlert(kony.i18n.getLocalizedString("strManualConnFailMsg2")); // show re-pair alert
              }else{
                connCounter++;
                displayAlert(kony.i18n.getLocalizedString("strManualConnFailMsg1"));//show connection error
              }
            }else {
              displayAlert(kony.i18n.getLocalizedString("strIngenicoMSGConnErr"));//show connection error
            }
          }
        }    
       if (kony.application.getCurrentForm()) {
            kony.print('MEG Ingenico :: IN getCurrentForm kony.application.getCurrentForm().id=' + kony.application.getCurrentForm().id);
          frmLogin.ccValidateImg.src = ccImg; 
         
            if (kony.application.getCurrentForm().id == frmPayment.id) {
                frmPayment.ccValidateImg.src = ccImg;
            }
            if (kony.application.getCurrentForm().id == frmSelectMeeting.id) {
                frmSelectMeeting.ccValidateImg.src = ccImg;
            }
        } else {
            frmLogin.ccValidateImg.src = ccImg;
        }
    }
}

function getBatteryStatusCallBack(data)
{
  ccBatteryLevel = data.batteryStatus;
  kony.print('IN getBatteryStatusCallBack=='+data.batteryStatus);
  updateBatteryStatus();
}

function updateBatteryStatus()
{
  kony.print('IN updateBatteryStatus='+ccBatteryLevel);
  if (kony.application.getCurrentForm()) {
    kony.print('IN updateBatteryStatus 111='+ccBatteryLevel);
    if(kony.application.getCurrentForm().id == frmPayment.id) {
      kony.print('IN updateBatteryStatus 222='+ccBatteryLevel);
      frmPayment.boxBatteryStatus.imgBatteryStatus.isVisible=true;
  	  frmPayment.boxBatteryStatus.lblBatteryStatus.isVisible=true;
      frmPayment.lblBatteryStatus.text=ccBatteryLevel+"%";
    }
  }
}

function showPairAlert(localizedstring) {
  var alertConfig = {
    message: localizedstring, 
    alertType: constants.ALERT_TYPE_CONFIRMATION,
    alertTitle: "",
    yesLabel: "Pair", // "Yes",
    noLabel: "Cancel",//kony.i18n.getLocalizedString("strLblOk"), //"No",
    alertHandler: /*function(response) {
      if(response == true){
        var alertConfig = {
          message: "Are you sure to start the fresh pairing?", 
          alertType: constants.ALERT_TYPE_CONFIRMATION,
          alertTitle: "",
          yesLabel: "Yes", // "Yes",
          noLabel: "No",
          alertHandler:onshowPairAlertConfirm
        };
      }else{
        return false;
      }
      var psConfig = {};
      var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
    }*/onshowPairAlertConfirm
  };
  var psConfig = {};
  var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onshowPairAlertConfirm(response){
	if(response == true){
		testBTDevice(false, true);
	}else{
		return false;
	}
}

/* 
 To Initiaze, pair and connection process
 isConnInBG : if connection intiated manually(tap on CC icon) or auto
 isRepair : set to true for opted for re-pair
*/
function testBTDevice(isConnInBG, isRepair) {
    //Creates an object of class 'PairingHandler'
    //Invokes method 'initiazeDevice' on the object
    if (isConnInBG === null) {
        isConnInBG = false;
    }
    if(isRepair === undefined || isRepair === null)
      {
        isRepair=false;
      }
    initIngenico();
    PairingHandlerObject.initiazeDevice( /**String*/ BASE_URL, /**String*/ API_KEY, /**String*/ ClientVersion, /**String*/ USERNAME, /**String*/ PASSWORD, /**Function*/ initCallBack, /**Function*/ connectCallBack, isConnInBG, isRepair, getBatteryStatusCallBack);

}

/*
 Initiate the payment 
*/
function processIngenicoPayment(totalAmount, merchantReferenceCode, enrollToken, tokenReferenceNo, memberData, paymentCallback) {
    kony.print('MEG Ingenico :: in processIngenicoPayment=', isDeviceConnected);
    if (isDeviceConnected) {
        //PairingHandlerObject.swipeCardAndProcessPayment(totalAmount, paymentCallback);
        PairingHandlerObject.swipeCardAndProcessPayment(
		/**Number*/ totalAmount, 
		/**String*/ merchantReferenceCode, 
		/**Boolean*/ enrollToken, 
		/**String*/ tokenReferenceNo,
		/**Object*/ memberData, 
		/**Function*/ paymentCallback);
			 	
    } else {
        alert('MEG Ingenico :: Device not connected.');
    }
}


function paymentCallback(data) {
    if (data != null) {
        kony.print('paymentCallback called =', data);
        alert(data);
    }
}



function ingenicoLogin() {

    if (checkIfNetworkIsAvailable() && readerInfoObj.IsIngenico && isDevicePaired) {


        var deviceSerialNumber = readerInfoObj.ReaderID; // Ingenico device's serial number
        var USERNAME_PREFIX = "WW";
        var username = USERNAME_PREFIX + deviceSerialNumber;
        var password = deviceSerialNumber;
        var DEFAULT_PASSWORD = deviceSerialNumber;

        //displayProgressView();
        showSyncLoadingScreen("Initiating Ingenico Login..");

        //Creates an object of class 'PairingHandler'
        initIngenico();

        //Get SALT from backend for given Ingenico device serial number
        getSALTforSerialNumberFromService(deviceSerialNumber, function getSALTforSerialNumberCallback(saltData) {

            //Received SALT from backend for given Ingenico device serial number
            if (checkValidString(saltData)) {
                kony.print('Ingenico Login: SALT = ' + saltData + ' exists form backend for serial number  =', deviceSerialNumber);
                SALT = saltData;

                //Generate hash password using SALT
                generateHashPasswordAndLogin(username, password, DEFAULT_PASSWORD, SALT, function sucessCallback() {

                    //Update SALT in DB
                    updateSALTforSerialNumberInDB(SALT);
                });
            } else { //SALT NOT available in backend for given Ingenico device serial number
                //Check for SALT available in local DB for given Ingenico device serial number
                kony.print('Ingenico Login: SALT NOT exists for serial number from backend =', deviceSerialNumber);
                kony.print('Ingenico Login: Check for SALT available in local DB for given Ingenico device serial number =', deviceSerialNumber);


                checkForSALTexistsInDB(deviceSerialNumber, function checkForSALTexistsInDBCallback(saltData) {

                    kony.print('Ingenico Login: checkForSALTexistsInDB SALT  =', saltData);
                    //SALT available in locally DB for given Ingenico device serial number
                    if (checkValidString(saltData)) {

                        kony.print('Ingenico Login: SALT = ' + saltData + ' exists in DB for serial number  =', deviceSerialNumber);


                        SALT = saltData;

                        //Generate hash password using SALT
                        generateHashPasswordAndLogin(username, password, DEFAULT_PASSWORD, SALT, function sucessCallback() {

                            //Update SALT in BACKEND
                            updateSALTforSerialNumberInBackEnd(SALT);
                        });
                    } else { //SALT NOT available in DB and BACKEND
                        //The Ingenico device must be used first time hence need to chagne the default passowrd with hash password
                        changeDefaultPasswordByHashPassword(username, password, DEFAULT_PASSWORD);
                    }
                });
            }
        });
    }
}


function generateHashPasswordAndLogin(username, password, DEFAULT_PASSWORD, SALT, successCallback) {

    //generate HashPassword using SALT
    PairingHandlerObject.generateHashPassword(password, SALT, enumbHashPRFLength.SHA256, enumbHashPRF.SHA256, iteration, function generateHashPasswordCallBack(pwdResponse) {
        kony.print('Ingenico Login: Hash password generated  =', pwdResponse.hashPassword);

        //Hash password generated using SALT
        if (checkValidString(pwdResponse.hashPassword)) {
            password = pwdResponse.hashPassword;
            printLog('Ingenico Login: Login with Hash password...');

            //Login with Hash password
            PairingHandlerObject.login(username, password, function loginWithHashPasswordCallBack(loginResponse) {
                printObj('Ingenico Login: loginWithHashPasswordCallBack  =', loginResponse);

                //Login success with generated hash password
                if (loginResponse.loginStatus && loginResponse.ErrorCode == 0) {
                    printLog('Ingenico Login: Login SUCCESS with hash password');

                    //Set Login Credential
                    PairingHandlerObject.setLoginCredential(username, password, true, function setLoginCredentialCallBack(setloginResponse) {
                        printLog('Ingenico Login:  username/password set for Payment with Hash password');
                        dismissSyncLoadingScreen();
                        //displayAlert("Ingenico login successful");
                        successCallback.call(null);
                    });
                } else {
                    // dismissSyncLoadingScreen();
                    //  showIngneicoLoginError(loginResponse.ErrorCode);
                    password = DEFAULT_PASSWORD; // Ingenico device's serial number - reset password
                    changeDefaultPasswordByHashPassword(username, password, DEFAULT_PASSWORD);
                }

            });
        } else {
            dismissSyncLoadingScreen();
            displayAlert("Login Failed. Password generation failed");
        }
    });
}

function changeDefaultPasswordByHashPassword(username, password, DEFAULT_PASSWORD) {

    var SALT = "";

    //Login with default password
    PairingHandlerObject.login(username, DEFAULT_PASSWORD, function loginWithDefaultPasswordCallBack(loginResponse) {
        printObj('Ingenico Login: loginWithDefaultPasswordCallBack  =', loginResponse);

        //Login success with defualt password
        if (loginResponse.loginStatus && loginResponse.ErrorCode == 0) {
            printLog('Ingenico Login: Login SUCCESS with DEFAULT password');
            printLog('Ingenico Login: Generating random SALT...');

            //generate random SALT
            PairingHandlerObject.generateSalt256(function generateSalt256CallBack(saltData) {

                //SALT generated sucessfully	            
                if (checkValidString(saltData.saltKey)) {
                    printLog('Ingenico Login: SALT generated = ' + saltData.saltKey);
                    SALT = saltData.saltKey;
                    printLog('Ingenico Login: Generating Hash password from device serial number...');

                    //generate HashPassword using SALT
                    PairingHandlerObject.generateHashPassword(password, SALT, enumbHashPRFLength.SHA256, enumbHashPRF.SHA256, iteration, function generateHashPasswordCallBack(pwdResponse) {
                        kony.print('Ingenico Login: Hash password generated  =', pwdResponse.hashPassword);

                        //Hash password generated using SALT
                        if (checkValidString(pwdResponse.hashPassword)) {
                            password = pwdResponse.hashPassword;
                            printLog('Ingenico Login: Changing default password by hash password...');

                            //Change default password by hash password
                            PairingHandlerObject.changeLoginPassword(DEFAULT_PASSWORD, password, function changeLoginPasswordCallBack(changePwdResponse) {
                                printObj('Ingenico Login: changeLoginPasswordCallBack  =', changePwdResponse); //{"ErrorCode":0,"ChangePasswordStatus":1}
                                //Default Password changed successfully by hash password
                                if (changePwdResponse.ChangePasswordStatus && changePwdResponse.ErrorCode == 0) {
                                    printLog('Ingenico Login: Default Password changed successfully by hash password');

                                    //Store SALT locally in DB
                                    //  insertSALTinDB(SALT, function storeSALTinDBSuccessCallback(isSavedSuccess) {
                                    updatSALTinDB(SALT, function storeSALTinDBSuccessCallback(isSavedSuccess) {
                                        if (isSavedSuccess) {
                                            printLog('Ingenico Login: SALT stored sucessfully. Login with hash password after change...');
                                            //Login with Hash password after change
                                            PairingHandlerObject.login(username, password, function loginWithHashPasswordCallBack(loginResponse) {
                                                printObj('Ingenico Login: loginWithHashPasswordCallBack  =', loginResponse);

                                                //Login success with generated hash password after change
                                                if (loginResponse.loginStatus && loginResponse.ErrorCode == 0) {

                                                    //Set Login Credential
                                                    PairingHandlerObject.setLoginCredential(username, password, true, function setLoginCredentialCallBack(setloginResponse) {
                                                        printLog('Ingenico Login:  username/password set for Payment with changed password');

                                                        //Save SALT at BACKEND
                                                        printLog('Ingenico Login:  Saving SALT in backend..');

                                                        updateSALTforSerialNumberInBackEnd(SALT);
                                                        dismissSyncLoadingScreen();
                                                        //displayAlert("Ingenico login successful");
                                                    });

                                                } else {
                                                    dismissSyncLoadingScreen();
                                                    showIngneicoLoginError(loginResponse.ErrorCode);
                                                }
                                            });
                                        } else {
                                            dismissSyncLoadingScreen();
                                            displayAlert("Login Failed. SALT not saved locally");
                                        }
                                    });
                                } else {
                                    dismissSyncLoadingScreen();
                                    showIngneicoLoginError(changePwdResponse.ErrorCode);
                                }
                            });
                        } else {
                            dismissSyncLoadingScreen();
                            displayAlert("Login Failed. Password generation failed");
                        }
                    });
                } else {
                    dismissSyncLoadingScreen();
                    displayAlert("Login Failed. SALT generation failed.");
                }
            });
        } else {
            dismissSyncLoadingScreen();
            showIngneicoLoginError(loginResponse.ErrorCode);
        }
    });
}

function updateSALTforSerialNumberInBackEnd(SALT) {
    //Save SALT at BACKEND
    updatePeripheralInfo(SALT, function updatePeripheralInfoWSCallback(status, result) {
        kony.print("updatePeripheralInfoWSCallback::response=" + JSON.stringify(result));
        removeProgressView();
        try {
            if (status == 400) {
                if (result["opstatus"] == 0) {
                    if (result.Res) {
                        kony.print("SALT saved ");
                    } else {}
                } else {
                    kony.print("Ingenico Login:  SALT update failed");
                    CommonErrHandler.networkError(result['opstatus'], result);
                }
            } else if (status == 300) {
                kony.print("Ingenico Login:  SALT update failed");
                CommonErrHandler.networkError(status, result);
            }
        } catch (e) {
            kony.print("Ingenico Login:  SALT update failed");
            GlobalException(e);
        }
    });
}

function updateSALTforSerialNumberInDB(SALT) {
    updatSALTinDB(SALT, function updatePeripheralInfoWSCallback(isUpdateSuccess) {
        if (isUpdateSuccess) {
            dismissSyncLoadingScreen();
            //displayAlert("Ingenico login successful");
        } else {
            dismissSyncLoadingScreen();
        }
    });
}

function ingenicoLogin_OLD() {

    if (!checkIfNetworkIsAvailable() && !readerInfoObj.IsIngenico && !isDevicePaired) {
        return;
    }


    var SALT = "770A8A65DA156D24EE2A093277530142";
    var USERNAME_PREFIX = "WW";

    var username = USERNAME_PREFIX + readerInfoObj.ReaderID; // Ingenico device's serial number
    var password = readerInfoObj.ReaderID; // Ingenico device's serial number
    var DEFAULT_PASSWORD = readerInfoObj.ReaderID; // Ingenico device's serial number
    //displayProgressView();
    showSyncLoadingScreen("Initiating Ingenico Login..");

    //Creates an object of class 'PairingHandler'
    initIngenico();

    printLog('Ingenico Login: Generating Hash password from device serial number...');

    //Invokes method 'generateHashPassword' on the object
    PairingHandlerObject.generateHashPassword(password, SALT, enumbHashPRFLength.SHA256, enumbHashPRF.SHA256, iteration, function generateHashPasswordCallBack(pwdResponse) {
        kony.print('Ingenico Login: Hash password generated  =', pwdResponse.hashPassword);
        if (checkValidString(pwdResponse.hashPassword)) {
            password = pwdResponse.hashPassword;
            printLog('Ingenico Login: Login with Hash password...');

            //Invokes method 'login' using hash password
            PairingHandlerObject.login(username, password, function loginWithHashPasswordCallBack(loginResponse) {
                printObj('Ingenico Login: loginWithHashPasswordCallBack  =', loginResponse);
                if (!loginResponse.loginStatus && loginResponse.ErrorCode == 2013) { //Login failed with generated hash password - {"ErrorCode":2013,"loginStatus":"0"}
                    printLog('Ingenico Login: Login FAILED with hash password');
                    printLog('Ingenico Login: Login with DEFAULT password...');

                    //Login with default password
                    PairingHandlerObject.login(username, DEFAULT_PASSWORD, function loginWithDefaultPasswordCallBack(loginResponse) {
                        printObj('Ingenico Login: loginWithDefaultPasswordCallBack  =', loginResponse);
                        if (loginResponse.loginStatus && loginResponse.ErrorCode == 0) { //Login success with defualt password
                            printLog('Ingenico Login: Login SUCCESS with DEFAULT password');
                            printLog('Ingenico Login: Changing default password by hash password...');

                            //Invokes method 'changeLoginPassword' on the object
                            PairingHandlerObject.changeLoginPassword(DEFAULT_PASSWORD, password, function changeLoginPasswordCallBack(changePwdResponse) {
                                printObj('Ingenico Login: changeLoginPasswordCallBack  =', changePwdResponse); //{"ErrorCode":0,"ChangePasswordStatus":1}
                                if (changePwdResponse.ChangePasswordStatus && changePwdResponse.ErrorCode == 0) { //Default Password changed successfully by hash password
                                    printLog('Ingenico Login: Default Password changed successfully by hash password');
                                    printLog('Ingenico Login: Login with hash password after change...');

                                    //Login with Hash password
                                    PairingHandlerObject.login(username, password, function loginWithHashPasswordCallBack(loginResponse) {
                                        printObj('Ingenico Login: loginWithHashPasswordCallBack  =', loginResponse);
                                        if (loginResponse.loginStatus && loginResponse.ErrorCode == 0) { //Login success with hash password
                                            //Invokes method 'setLoginCredential' on the object
                                            PairingHandlerObject.setLoginCredential(username, password, true, function setLoginCredentialCallBack(setloginResponse) {
                                                printLog('Ingenico Login:  username/password set for Payment with changed password');
                                                dismissSyncLoadingScreen();
                                               // displayAlert("Ingenico login successful");
                                            });

                                        } else {
                                            dismissSyncLoadingScreen();
                                            showIngneicoLoginError(loginResponse.ErrorCode);
                                        }
                                    });
                                } else {
                                    dismissSyncLoadingScreen();
                                    showIngneicoLoginError(changePwdResponse.ErrorCode);
                                }
                            });
                        } else {
                            dismissSyncLoadingScreen();
                            showIngneicoLoginError(loginResponse.ErrorCode);
                        }
                    });
                } else if (loginResponse.loginStatus && loginResponse.ErrorCode == 0) { //Login success with generated hash password
                    printLog('Ingenico Login: Login SUCCESS with hash password');

                    //Invokes method 'setLoginCredential' on the object
                    PairingHandlerObject.setLoginCredential(username, password, true, function setLoginCredentialCallBack(setloginResponse) {
                        printLog('Ingenico Login:  username/password set for Payment with Hash password');
                        dismissSyncLoadingScreen();
                        //displayAlert("Ingenico login successful");
                    });
                } else {
                    dismissSyncLoadingScreen();
                    showIngneicoLoginError(loginResponse.ErrorCode);
                }

            });
        } else {
            dismissSyncLoadingScreen();
            displayAlert("Login Failed. Password generation failed");
        }
    });
}

function showIngneicoLoginError(errorCode) {
    var errorMsg = "Ingenico Login Failed. ";
    errorCode = errorCode.toString();
    switch (errorCode) {
    case "2006":
        errorMsg += "Account is locked for the next 15 minutes due to invalid login attempts";
        break;
    case "4981":
        errorMsg += "Ingenico SDK need to initialized before login attempt";
        break;
    case "2011":
        errorMsg += "Invalid App token";
        break;
    case "2013":
        errorMsg += "Invalid Credential";
        break;
    case "4944":
        errorMsg += "Unknown reason";
        break;
    case "4998":
        errorMsg += "The Ingenico initialization didn’t initialize with an API key";
        break;
    case "4984":
        errorMsg += "The Ingenico initialization didn’t initialize with a Client Version";
        break;
    case "2100":
        errorMsg += "Some required parameter is missing";
        break;
    case "4996":
        errorMsg += "Password missing";
        break;
    case "4997":
        errorMsg += "Username missing";
        break;
    case "2004":
        errorMsg += "Permission Error";
        break;
    case "4975":
        errorMsg += "Missing new password";
        break;
    case "4976":
        errorMsg += "Missing old password";
        break;
    default:
        break;
    }

    displayAlert(errorMsg);
}
function getMerchantReferanceCode(saleTransID) {
    var deviceLevelTransactIdWithoutHyphen = saleTransID.replace(/-/g, "");
    kony.print("IN swipeCreditCard  deviceLevelTransactIdWithoutHyphen==>>>" + deviceLevelTransactIdWithoutHyphen);

    return glbBackOfficerRefID + "-" + deviceLevelTransactIdWithoutHyphen.substr(deviceLevelTransactIdWithoutHyphen.length - 6);
}

function getTokenReferanceNumber(saleTransID) {
    var deviceLevelTransactIdWithoutHyphen = saleTransID.replace(/-/g, "");
    var tokenRefMaxLen = 12; 
    kony.print("IN swipeCreditCard  deviceLevelTransactIdWithoutHyphen==>>>" + deviceLevelTransactIdWithoutHyphen);
    kony.print("glbBackOfficerRefID " + glbBackOfficerRefID);
	var numberOfsaleTranIdCharAppend = (tokenRefMaxLen - (glbBackOfficerRefID.length +1));
	kony.print("numberOfsaleTranIdCharAppend " + numberOfsaleTranIdCharAppend);
    return glbBackOfficerRefID + "M" + deviceLevelTransactIdWithoutHyphen.substr(deviceLevelTransactIdWithoutHyphen.length - numberOfsaleTranIdCharAppend);
}

function getErrorMessageFromIngenicoGatewayErrorcode(responseCode) {
    kony.print("IN getErrorMessageFromIngenicoGatewayErrorcode  responseCode==>>>" + responseCode);
    var ingenicoErrorCode = [

    {
        "errorCode": ["202"],
        "errorMessage": kony.i18n.getLocalizedString("strCCInvalidDate")
    },
    {
        "errorCode": ["4901"],
        "errorMessage": kony.i18n.getLocalizedString("strChkInternetConnection")
    },
    {
        "errorCode": ["4986", "4981", "4950", "4939", "6001", "6002"],
        "errorMessage": kony.i18n.getLocalizedString("strPressCCIcon")
    },
    {
        "errorCode": ["4998", "4997", "4996", "4995", "4994", "4992", "4988", "4987", "4985", "4984", "4965", "4964", "4947", "4946", "4944", "4943", "4942", "4938", "4925", "4924", "4923", "6004", "6007", "6008", "6009", "1000", "1001", "1002", "1003", "2001", "2002", "2003", "2004", "2005", "2006", "2010", "2011", "2012", "2013", "2100", "2200", "2300", "2302", "2303", "2304", "2305", "2400", "2500", "3000"],
        "errorMessage": kony.i18n.getLocalizedString("strCCNotProcessed")
    },
    {
        "errorCode": ["4993", "4990", "4983", "4982", "4967", "4961", "4960", "4958", "4957", "4956", "4955", "4954", "4953", "4952", "4951", "4949", "4948", "4945", "4937", "4936", "4935", "4934", "4933", "4932", "4931", "4930", "4929", "4928", "4927", "4926", "4921", "6003", "6006", "6011", "6012", "4000", "4500", "4502", "4503", "4504", "4505", "4506", "4940"],
        "errorMessage": kony.i18n.getLocalizedString("strTryAnotherCard")
    },
    {
        "errorCode": ["4991", "6005", "7001", "7002", "7003", "7004", "7005", "7006", "7007", "7012", "7013", "7014", "7015", "7019", "7021", "7025", "7028", "7041", "7043", "7051", "7052", "7053", "7054", "7055", "7057", "7058", "7059", "7061", "7062", "7063", "7065", "7075", "7076", "7077", "7078", "7080", "7081", "7082", "7083", "7091", "7092", "7093", "7096", "7101", "7102", "7103", "7104", "7105", " 7106", "7107", "7108", "7109", "7110", "7111", "7112", "7113", "7115"],
        "errorMessage": kony.i18n.getLocalizedString("strCCDecline")
    },
    {
        "errorCode": ["4999", "4980", "4979", "4978", "4977", "4976", "4975", "4974", "4973", "4972", "4971", "4970", "4969", "4968", "4966", "3010", "3020", "3030", "3040", "3050", "3051", "5100", "5101", "5200"],
        "errorMessage": kony.i18n.getLocalizedString("strCCTranNotComplete")
    },
    {
        "errorCode": ["4962", "4959"],
        "errorMessage": kony.i18n.getLocalizedString("strVoidNotProcessed")
    },
    {
        "errorCode": ["6010"],
        "errorMessage": kony.i18n.getLocalizedString("strIngneicoBatteryLow")
    }];
    var isCodeAvailable = false;
	var errMsg="";
    _.each(ingenicoErrorCode, function(row) {
        var errCode = _.find(row.errorCode, function(errcode) {
            return (errcode == responseCode);
        });
        if (parseInt(errCode) == parseInt(responseCode)) {
            isCodeAvailable = true;
            kony.print("showIngneicoLoginError errorMessage = "+row.errorMessage);
            errMsg = row.errorMessage;
        }
    });
    kony.print("showIngneicoLoginError errMsg = "+errMsg);

    if(!isCodeAvailable) {
      return kony.i18n.getLocalizedString("strCCTranNotComplete");
    }else {
      return errMsg;
    }
}
 
function removePairing()
{
  initIngenico();
  removeReaderInfoFromDB();  
}

function removeReaderInfoFromDB()
{
  try {

    var strWhere = "where ReaderName = '" + readerInfoObj.ReaderName + "' and ReaderID = '" + readerInfoObj.ReaderID + "'";
    kony.print("Ingenico : IN removeReaderInfoFromDB == " + strWhere);

    function removeReaderInfoFromDBSuccessCallback() {
      kony.print("Ingenico : removeReaderInfoFromDB delete success");
      resetFlags();
      PairingHandlerObject.resetPairing();
    }
    function errorCallBack() {
      kony.print("Ingenico : removeReaderInfoFromDB delete failed");
      displayAlert("Unable to clear pairing info. Try again");
    }
    com.kony.WeightWatchers.Logger.CcDeviceInfo.remove(strWhere, removeReaderInfoFromDBSuccessCallback, errorCallBack);

  } catch (e) {
    kony.print("Ingenico : removeReaderInfoFromDB FAILED :: " + JSON.stringify(e));
    GlobalException(e);
  }
}

function resetFlags()
{
  isDeviceConnected = false;
  isDevicePaired = false;
  readerInfoObj = {IsIngenico:false};
}

