//SyncGlobals
syncUserID = "wwmegna";
syncPwd = "Welcome2016";
syncAppID = "MEGDevFRCA"; //"MEGQAT1";  //"MEGPRD";
syncServerHost = "weightwatchers-ds1.sync.konycloud.com"; //"weightwatchers-ds1.sync.konycloud.com";//"kony-ww-dbg1.sync.konycloud.com";//"14.141.118.66"; //"weightwatchers-qa1.sync.konycloud.com";//"weightwatchers.sync.konycloud.com";//"14.141.118.66";//
syncServerPort = "80"; //"8080";//
syncServerSecurePort = "443";
syncBatchSize = "2000";
syncConfigKey = "syncConfig"
skyConfigKey = "skyConfig"
syncUserIDKey = "syncUserID"
syncPwdKey = "syncPwd"
syncAppIDKey = "syncAppID"
syncServerHostKey = "syncServerHost"
syncServerPortKey = "syncServerPort"
syncBatchSizeKey = "syncBatchSize"
syncdevicedbencryptionkey = "WeightWatchersInternationalSync"
syncUploadBatchSize = "1500";
syncNetworktimeout = "120000";

function NavigateToForm(formname) {
    formname.show();
}

function navigateToTableForm() {}

function showSyncForm() {
    NavigateToForm(frmSync)
}

function callSyncAPIs() {
    if (frmSync.seguiSync.selectedIndex[1] == 0) {
        initSyncSession();
    }
    if (frmSync.seguiSync.selectedIndex[1] == 1) {
        syncStartSession();
    }
    if (frmSync.seguiSync.selectedIndex[1] == 2) {
        resetSyncSession();
    }
    if (frmSync.seguiSync.selectedIndex[1] == 3) {
        rollbackSyncSession();
    }
}

function callSkyAPIs() {
    if (frmSync.seguiSky.selectedIndex[1] == 0) {
        initSyncSkySession();
    }
    if (frmSync.seguiSky.selectedIndex[1] == 1) {
        syncSkyStartSession();
    }
    if (frmSync.seguiSky.selectedIndex[1] == 2) {
        resetSyncSkySession();
    }
    if (frmSync.seguiSky.selectedIndex[1] == 3) {
        stopSyncSkySession();
    }
}

function initSyncSession() {
    var config = {};
    config.oninitsuccess = syncinit_successcallback;
    config.oniniterror = syncinit_errorcallback;
    config.devicedbencryptionkey = syncdevicedbencryptionkey;
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strMsgInitSync"));
    loadSyncSettingsFromDevice();
    sync.init(config);
}
var dbpoint = null;

function syncinit_successcallback(outputparams) {
    checkForTheReaderUsed();
    //Only FOr Development - DEBUG else ERROR
    //kony.sync.currentLogLevel = kony.sync.log.TRACE;
    kony.sync.currentLogLevel = kony.sync.log.ERROR;
    kony.sync.trackIntermediateUpdates = false;
    kony.print(getMessageTemplate("syncInitSuccess"), "info");
    //addDirectSaleMember();
    setgblDeviceID();
    var isFirstLuanch = kony.store.getItem("isFirstLuanch");
    if (isFirstLuanch == null || !isFirstLuanch) { // App launched first time after installation.
        showSyncLoadingScreen(kony.i18n.getLocalizedString("strMsgInitSync"));
        createProductMaxQtyLookup();
    } else {
        eventOnPostShowGetLastLocation();
        dismissSyncLoadingScreen();
    }
    if (checkIfNetworkIsAvailable()) IsUpgradeRequired();
    kony.print("\n\n Device ID is : " + konysyncClientSyncConfig.Version + "\n\n");
}

function setgblDeviceID() {
    try {
        gblDeviceID = kony.sync.getDeviceID();
    } catch (e) {
        gblDeviceID = kony.os.deviceInfo().identifierForVendor;
        kony.print("Exception in assiging DeviceID = " + e.toString());
    }
    kony.print("\n\n Device ID is : " + gblDeviceID + "\n\n");
}

function transactionSuccessCallback() {
    eventOnPostShowGetLastLocation();
    dismissSyncLoadingScreen();
    kony.store.setItem("isFirstLuanch", true);
}

function transactionErrorCallback() {
    dismissSyncLoadingScreen();
}

function syncinit_errorcallback(outputparams) {
    dismissSyncLoadingScreen();
}

function syncStartSession() {
    //check for last sync time from table syncLookUp
    checkForLastUpdatedTime()
    var config = {};
    config.userid = syncUserID;
    config.password = syncPwd;
    config.appid = syncAppID;
    config.issecure = Network.isSecure;
    config.batchsize = syncBatchSize;
    config.serverhost = syncServerHost;
    config.uploadbatchsize = syncUploadBatchSize; //Added by praveen kalal
    if (Network.isSecure) {
        config.serverport = syncServerSecurePort;
    } else {
        config.serverport = syncServerPort;
    }
    config.onsyncstart = onsyncstartCallback;
    config.onscopestart = onscopestartCallback;
    config.onscopeerror = onscopeerrorCallback;
    config.onscopesuccess = onscopesuccessCallback;
    config.onuploadstart = onuploadstartCallback;
    config.onuploadsuccess = onuploadsuccessCallback;
    config.ondownloadstart = ondownloadstartCallback;
    config.ondownloadsuccess = ondownloadsuccessCallback;
    config.onbatchstored = onbatchstoredCallback;
    config.onbatchprocessingstart = onbatchprocessingstartCallback;
    config.onbatchprocessingsuccess = onbatchprocessingsuccessCallback;
    config.onsyncsuccess = onsyncsuccessCallback;
    config.onsyncerror = onsyncerrorCallback;
    config.devicedbencryptionkey = syncdevicedbencryptionkey;
    //config.removeafterupload = {"MemberSyncScope" : ["MemberDetails"], "MemberSyncScope" : ["WeighDetails"], "MemberSyncScope" : ["MilestoneAchieved"], "MemberSyncScope" : ["NoteDetails"],"MeetingSyncScope": ["Meetings"]};
    config.removeafterupload = {
        "MeetingSyncScope": ["Meetings"],
        "MemberSyncScope": ["MemberDetails", "MilestoneAchieved", "MilestoneEligible", "NoteDetails", "WeighDetails", "RefferalDetails"]
    };
    var doProductDownload = false;
    var doSKUDownload = false;
    //To control specific syncscope on specific event
    //if(IsFromProceed)
    //	{
    //		doProductDownload = true;
    //		doSKUDownload = true;
    //		IsFromProceed = false;
    //	}MilestoneSyncScope,NoteSyncScope,WeightSyncScope
    if (IsFromLocationSelected) {
        config.removeafterupload = {
            "MeetingSyncScope": ["Meetings"],
            "MemberSyncScope": ["MilestoneEligible", "NoteDetails", "RefferalDetails"]
        };
        config.sessiontasks = {
            ProductSyncScope: {
                doupload: false,
                dodownload: true
            },
            MeetingUpload: {
                doupload: true,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            MemberSyncScope: {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            Tally: {
                doupload: false,
                dodownload: false
            },
            MeetingSyncScope: {
                doupload: false,
                dodownload: true
            },
            LookUpTables: {
                doupload: false,
                dodownload: false
            },
            Logger: {
                doupload: false,
                dodownload: false
            },
            TallySyncScope: {
                doupload: false,
                dodownload: false
            }
        };
    } else if (isSyncForActivation) {
        config.removeafterupload = {
            "MemberSyncScope": ["MilestoneEligible", "NoteDetails", "RefferalDetails"]
        };
        config.sessiontasks = {
            ProductSyncScope: {
                doupload: false,
                dodownload: false
            },
            MeetingUpload: {
                doupload: true,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            MemberSyncScope: {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            Tally: {
                doupload: false,
                dodownload: false
            },
            MeetingSyncScope: {
                doupload: false,
                dodownload: false
            },
            LookUpTables: {
                doupload: false,
                dodownload: false
            },
            Logger: {
                doupload: false,
                dodownload: false
            },
            TallySyncScope: {
                doupload: false,
                dodownload: false
            }
        };
    } else {
        config.removeafterupload = {
            "MeetingSyncScope": ["Meetings"],
            "MemberSyncScope": ["MilestoneEligible", "NoteDetails", "RefferalDetails"]
        };
        config.sessiontasks = {
            ProductSyncScope: {
                doupload: false,
                dodownload: false
            },
            MeetingUpload: {
                doupload: true,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            MemberSyncScope: {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            Tally: {
                doupload: true,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            MeetingSyncScope: {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            LookUpTables: {
                doupload: false,
                dodownload: false
            },
            Logger: {
                doupload: false,
                dodownload: false
            },
            TallySyncScope: {
                doupload: true,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            }
        };
    }
    if (IsFromLocationSelected || isFromTally || isFromForceSync || isFromPrefferedDelete || isSyncForActivation) {
        showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgStartSession"));
        IsFromLocationSelected = false;
        //isSyncForActivation = false;
        //isFromTally = false;
    }
    /*config.filterparams = { 
    	MeetingSyncScope : [ { Meetings : [ { Name : "LocationID", Value1 :  glbLocationID},{ Name : "DeviceID", Value1 :  gblDeviceID},
    										{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    										{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] }],
    	ProductSyncScope : [ { ProductDetail : [ { Name : "LocationID", Value1 :  glbLocationID},{ Name : "DeviceID", Value1 :  gblDeviceID},
    											{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    											{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] } ], 
    	SKUSyncScope : [ { SKURuleEngine : [ { Name : "LocationNum", Value1 :  glbLocationID}, { Name : "DeviceId", Value1 :  gblDeviceID},
    										{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    										{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] } ], 
    	MemberSyncScope : [ { MemberDetails : [ { Name : "LocationID", Value1 :  glbLocationID}, { Name : "DeviceID", Value1 :  gblDeviceID},
    											{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    											{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] }],
    	WeightSyncScope : [ { WeighDetails : [ { Name : "LocationID", Value1 :  glbLocationID}, { Name : "DeviceID", Value1 :  gblDeviceID},
    											{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    											{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] }],
    	MilestoneSyncScope : [ { MilestoneAchieved : [ { Name : "LocationNum", Value1 :  glbLocationID}, { Name : "DeviceID", Value1 :  gblDeviceID},
    													{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    													{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] }, 
    						{ MilestoneEligible : [ { Name : "LocationNum", Value1 :  glbLocationID}, { Name : "DeviceID", Value1 :  gblDeviceID},
    												{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    												{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] }],
    	NoteSyncScope : [ { NoteDetails : [ { Name : "LocationID", Value1 :  glbLocationID}, { Name : "DeviceID", Value1 :  gblDeviceID},
    										{ Name : "AccessToken", Value1 :  glbSPAuthToken},{ Name : "SPID", Value1 :  glbEmployeeId},
    										{ Name : "HeaderDate", Value1 :  glbHeaderDate} ] } ]
    } ;*/
    /*config.filterparams = { 
		
		ProductSyncScope : [ { ProductDetail : [ { Name : "LocationID", Value1 :  glbLocationID} ] } ], 
		SKUSyncScope : [ { SKURuleEngine : [ { Name : "LocationNum", Value1 :  glbLocationID} ] } ], 
		MemberSyncScope : [ { MemberDetails : [ { Name : "LocationID", Value1 :  glbLocationID} ] }],
		WeightSyncScope : [ { WeighDetails : [ { Name : "LocationID", Value1 :  glbLocationID} ] }],
		MilestoneSyncScope : [ { MilestoneAchieved : [ { Name : "LocationNum", Value1 :  glbLocationID} ] }, 
							{ MilestoneEligible : [ { Name : "LocationNum", Value1 :  glbLocationID} ] }],
		NoteSyncScope : [ { NoteDetails : [ { Name : "LocationID", Value1 :  glbLocationID} ] } ],
		MeetingSyncScope : [ { Meetings : [ { Name : "LocationID", Value1 :  glbLocationID} ] }]
	} ;*/
    config.filterparams = {
        ProductSyncScope: [{
            ProductDetail: [{
                Name: "LocationID",
                Value1: parseInt(glbLocationID)
            }]
        }, {
            SKURuleEngine: [{
                Name: "LocationNum",
                Value1: parseInt(glbLocationID)
            }]
        }],
        MemberSyncScope: [{
            MemberDetails: [{
                Name: "LocationID",
                Value1: glbLocationID
            }]
        }, {
            WeighDetails: [{
                Name: "LocationID",
                Value1: glbLocationID
            }]
        }, {
            MilestoneAchieved: [{
                Name: "LocationNum",
                Value1: glbLocationID
            }]
        }, {
            MilestoneEligible: [{
                Name: "LocationNum",
                Value1: glbLocationID
            }]
        }, {
            NoteDetails: [{
                Name: "LocationID",
                Value1: glbLocationID
            }]
        }],
        MeetingSyncScope: [{
            Meetings: [{
                Name: "LocationID",
                Value1: glbLocationID
            }]
        }]
    };
    //networktimout in milliseconds 
    config.networktimeout = syncNetworktimeout;
    //Retry configuration 
    //config.numberofretryattempts = 1
    //	config.retryerrorcodes = [1000,1013, 1017,1014,1011,1015] 
    //	config.onretry = function(){kony.print("In Retry")}
    sync.startSession(config);
}

function resetSyncSession() {
    function resetSucc() {
        kony.print(getMessageTemplate("syncResetSuccess"), "info")
    }

    function resetFail() {
        kony.print(getMessageTemplate("syncResetFailure"), "error")
    }
    var config = {};
    config.onresetsuccess = resetSucc;
    config.onreseterror = resetFail;
    config.devicedbencryptionkey = syncdevicedbencryptionkey;
    sync.reset(config);
}

function rollbackSyncSession() {
    function resetSucc() {
        kony.print(getMessageTemplate("rollbackSuccess"), "info")
    }

    function resetFail() {
        kony.print(getMessageTemplate("rollbackFailure"), "error")
    }
    sync.rollbackPendingLocalChanges(resetSucc, resetFail);
}

function onsyncstartCallback(outputparams) {
    //window.Alert("Sync Started", nil, "info", "Ok", "", "info", nil);
    //showSyncLoadingScreen("Sync Started");
    IsSyncRunning = true;
}

function onuploadstartCallback(outputparams) {
    //showSyncLoadingScreen("Upload Started")
    var req = outputparams.uploadRequest;
    if (req.clientcontext === undefined) {
        req.clientcontext = {};
    }
    //req.clientcontext.AUTH_TOKEN = glbSPAuthToken;
    req.clientcontext.DEVICEID = gblDeviceID;
    //req.clientcontext.DEVICEID = "?";
    req.clientcontext.SPID = glbEmployeeId;
    req.clientcontext.HEADERDATE = glbHeaderDate;
    req.clientcontext.ACCESSTOKEN = glbSPAuthToken;
    req.clientcontext.LOCALE = deviceLocale.replace('_', '-');
    req.clientcontext.SOURCE = gblSourceVal;
    req.clientcontext.ACCEPT = "application/json";
    return req;
}

function onuploadsuccessCallback(outputparams) {
    kony.print("onuploadsuccessCallback callback called");
    setDefaultDataForMemberAndWeight(outputparams); // Added for MEG-6194
    //if (checkAppSettingEnable(Settings["SyncFeedback"])){
    if (in_array(deviceLocale, Countries["US"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true")) {
        var randomSyncSessionID = generateRandomString(14);
        if (outputparams && outputparams.uploadcontext && outputparams.uploadcontext.objectlevelinfo) {
            boSyncFailTrace.insertSyncFeedback(outputparams.uploadcontext.objectlevelinfo, randomSyncSessionID);
        }
        if (outputparams && outputparams.uploadcontext && outputparams.uploadcontext.failedrowinfo && outputparams.uploadcontext.failedrowinfo.length > 0) {
            boSyncFailTrace.log(outputparams.uploadcontext.failedrowinfo, randomSyncSessionID);
        }
        kony.print(JSON.stringify(outputparams.uploadcontext.failedrowinfo));
    }
    //showSyncLoadingScreen("Upload Success");
    kony.sync.OTAChangestobeDeleted = [];
}

function ondownloadstartCallback(outputparams) {
    //showSyncLoadingScreen("Download Started")
    var req = outputparams.downloadRequest;
    if (req.clientcontext === undefined) {
        req.clientcontext = {};
    }
    //req.clientcontext.AUTH_TOKEN = glbSPAuthToken;
    req.clientcontext.DEVICEID = gblDeviceID;
    //req.clientcontext.DEVICEID = "?";
    req.clientcontext.SPID = glbEmployeeId;
    req.clientcontext.HEADERDATE = glbLastSyncDate;
    req.clientcontext.ACCESSTOKEN = glbSPAuthToken;
    req.clientcontext.LOCALE = deviceLocale.replace('_', '-');
    req.clientcontext.SOURCE = gblSourceVal;
    req.clientcontext.ACCEPT = "application/json";
    return req;
}

function ondownloadsuccessCallback(outputparams) {
    //showSyncLoadingScreen("Download Success");
}

function onbatchstoredCallback(outputparams) {
    //showSyncLoadingScreen("Batch Stored");
}

function onbatchprocessingstartCallback(outputparams) {
    //showSyncLoadingScreen("Batch Processing")
}

function onbatchprocessingsuccessCallback(outputparams) {
    //showSyncLoadingScreen("Batch Processing Success")
}

function onsyncerrorCallback(outputparams) {
    if (outputparams != undefined && outputparams != null) {
        createExceptionDetail("Sync Error", outputparams);
        kony.print(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
        if (outputparams.errorCode != undefined && outputparams.errorCode != null && outputparams.errorMessage != undefined && outputparams.errorMessage != null) {
            kony.print("Error Code : " + outputparams.errorCode + " and Error Desc is : " + outputparams.errorMessage);
        }
    }
    //showSyncLoadingScreen("Sync Session Error");
    dismissSyncLoadingScreen();
    removeProgressView();
    if (isSyncForActivation) {
        if (kony.application.getCurrentForm().id != frmHomeScreen.id) {
            //frmHomeScreen.show();
            evenOnPostShowHomeScreen();
        }
        alertForMessages(kony.i18n.getLocalizedString("strSyncDeviceDataUnSuccesful"));
        hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
        onSelectMeetingMembers();
        popupMPActivation.show();
        isSyncForActivation = false;
    }
    if (isFromForceSync) {
        alertForMessages(kony.i18n.getLocalizedString("strSyncDeviceDataUnSuccesful"));
        isFromForceSync = false;
        hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
        onSelectMeetingMembers();
    }
    if (isMultipleLocation) {
        isMultipleLocation = false;
        alertForMessages(kony.i18n.getLocalizedString("strSyncDeviceDataUnSuccesful"));
        MultipleLocationSyncCall();
    }
    if (isFromTally) {
        isFromTally = false;
        alertForMessages(kony.i18n.getLocalizedString("strMsgTallySubmitSuccess")); //MEG-3665 changes
        navigateToMeetingScreen();
    }
    if (kony.application.getCurrentForm().id == frmLogin.id) {
        boMeetings.GetMeetingStatusByLocationId();
        frmSelectMeeting.segMeetingsList.removeAll();
        frmSelectMeeting.show();
    }
    insertLastSyncTime(false); // added by praveen kalal
    IsSyncRunning = false;
}

function onsyncsuccessCallback(outputparams) {
    kony.print("::pk::Upload Success callback::" + JSON.stringify(outputparams));
    var activationSync = isSyncForActivation;
    kony.print(getMessageTemplate("syncSuccess"), "info")
        //showSyncLoadingScreen("Sync Session Success");
    dismissSyncLoadingScreen();
    removeProgressView();
    if (isSyncForActivation) {
        IsSyncRunning = false;
        if (isSynForMPActivationFromProfile) {
            isSynForMPActivationFromProfile = false;
            boActivation.getMemberActivationStatusFromDB(selectedMemberData, function(activationDataOfMember) { // get the updated activation status from DB
                setGlbMemberActivationStatusAndUpdateMPIcon(activationDataOfMember);
                glbMemberId = glbMemberActivationStatusInfo.memberID; // MEG - 5566
                frmMemberProfileDetils_temp[0]["MemberID"] = glbMemberId;
                alertForMessages(kony.i18n.getLocalizedString("strMsgDeviceDataSyncSucessful"));
                kony.print("onsyncsuccessCallback activationDataOfMember:: " + JSON.stringify(activationDataOfMember));
                kony.print("onsyncsuccessCallback glbMemberActivationStatusInfo:: " + JSON.stringify(glbMemberActivationStatusInfo));
            });
        } else {
            if (kony.application.getCurrentForm().id != frmHomeScreen.id) {
                //frmHomeScreen.show();
                evenOnPostShowHomeScreen();
            }
            hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
            onSelectMeetingMembers();
            alertForMessages(kony.i18n.getLocalizedString("strMsgDeviceDataSyncSucessful"));
            popupMPActivation.show();
        }
        isSyncForActivation = false;
    }
    if (isFromForceSync) {
        alertForMessages(kony.i18n.getLocalizedString("strMsgDeviceDataSyncSucessful"));
        //isFromTally = false;
        isFromForceSync = false;
        hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
        onSelectMeetingMembers();
    }
    if (isFromTally) {
        //alert(kony.i18n.getLocalizedString("strMsgTallySubmitSuccess")); //MEG-3665 changes
        var alertConfig = {
            message: kony.i18n.getLocalizedString("strMsgTallySubmitSuccess"),
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "",
            yesLabel: kony.i18n.getLocalizedString("strLblOk"),
            alertHandler: TallySuccessSyncCallback
        };
        var psConfig = {};
        var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
        isFromTally = false;
        isFromForceSync = false;
        navigateToMeetingScreen();
    }
    if (kony.application.getCurrentForm().id == frmLogin.id) {
        boMeetings.GetMeetingStatusByLocationId();
        frmSelectMeeting.segMeetingsList.removeAll();
        frmSelectMeeting.show();
    }
    insertLastSyncTime(true); // added by praveen kalal
    IsSyncRunning = false;
    if (isMultipleLocation) {
        if (isFromPrefferedDelete) {
            kony.print("::glblocationToBeDeleted=" + glblocationToBeDeleted);
            //boviewSavedLocation.CallDeletefun(glblocationToBeDeleted, successDeleteLocationCallback);
            boviewSavedLocation.CheckSyncPendingData(glblocationToBeDeleted, successDeleteLocationCallback, true);
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgDeviceDataSyncSucessful"));
        }

        function successDeleteLocationCallback() {
            getSavedLocationData();
        }
        isFromPrefferedDelete = false;
        MultipleLocationSyncCall();
    }
    // Update the preactivation table when sync is not from MP Activation MEG-5593
    if (!activationSync) {
        insertLastSyncTime(true); // added by praveen kalal
        updatePreActivationAfterSync();
    }
    activationSync = false;
}

function onscopestartCallback(outputparams) {
    //showSyncLoadingScreen("Scope Started");
}

function onscopeerrorCallback(outputparams) {
    kony.print("onscopeerrorCallback====>>>>" + JSON.stringify(outputparams));
    //showSyncLoadingScreen("Sync Scope Error");
    //dismissSyncLoadingScreen();
}

function onscopesuccessCallback(outputparams) {
    //showSyncLoadingScreen("Scope Success");
}

function loadSyncSettingsFromDevice() {
    var syncConfigArr = kony.store.getItem(syncConfigKey);
    if (null != syncConfigArr) {
        syncServerHost = syncConfigArr[syncServerHostKey];
        syncServerPort = syncConfigArr[syncServerPortKey];
        syncUserID = syncConfigArr[syncUserIDKey];
        syncPwd = syncConfigArr[syncPwdKey];
        syncAppID = syncConfigArr[syncAppIDKey];
        syncBatchSize = syncConfigArr[syncBatchSizeKey];
    }
}

function loadSkySettingsFromDevice() {}

function showSyncSettingsForm() {
    //Sync Settings
    loadSyncSettingsFromDevice();
    frmSyncSettings.txtIP.text = syncServerHost;
    frmSyncSettings.txtPort.text = syncServerPort;
    frmSyncSettings.txtUserID.text = syncUserID;
    frmSyncSettings.txtUserPwd.text = syncPwd;
    frmSyncSettings.txtAppID.text = syncAppID;
    frmSyncSettings.txtBatchSize.text = syncBatchSize;
    frmSyncSettings.show();
}

function saveSyncSettings() {
    //Sync Settings
    syncServerHost = frmSyncSettings.txtIP.text;
    syncServerPort = frmSyncSettings.txtPort.text;
    syncUserID = frmSyncSettings.txtUserID.text;
    syncPwd = frmSyncSettings.txtUserPwd.text;
    syncAppID = frmSyncSettings.txtAppID.text;
    syncBatchSize = frmSyncSettings.txtBatchSize.text;
    //updating the sync datastore with new settings
    var syncConfigArr = {};
    syncConfigArr[syncServerHostKey] = syncServerHost;
    syncConfigArr[syncServerPortKey] = syncServerPort;
    syncConfigArr[syncUserIDKey] = syncUserID;
    syncConfigArr[syncPwdKey] = syncPwd;
    syncConfigArr[syncAppIDKey] = syncAppID;
    syncConfigArr[syncBatchSizeKey] = syncBatchSize;
    kony.store.setItem(syncConfigKey, syncConfigArr);
    kony.print(getMessageTemplate("settingsSaveSuccess"), "info")
}

function initSyncSkySession() {
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgInitSky"));
    loadSkySettingsFromDevice();
    var config = {};
    config.SERVER = skyServerHost;
    config.PORT = skyServerPort;
    config.PROFILE = skyProfile;
    config.onProvisionError = syncskyinit_errorcallback;
    config.onProvisionSuccess = syncskyinit_successcallback;
    skySync.init(config);
}

function syncskyinit_successcallback(outputparams) {
    kony.print(getMessageTemplate("syncInitSuccess"), "info")
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgInitSkySuccess"));
    dismissSyncLoadingScreen();
}

function syncskyinit_errorcallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncInitFailure"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function syncSkyStartSession() {
    var config = {};
    config.onSkyStart = onSkySyncStartCallback;
    config.onSkySuccess = onSkySyncSuccessCallback;
    config.onSkyError = onSkySyncErrorCallback;
    config.onIndentifyStart = onIndentifyStartCallback;
    config.onIndentifyError = onIndentifyErrorCallback;
    config.onIndentifySuccess = onIndentifySuccessCallback;
    config.onSessionStart = onSessionStartCallback;
    config.onSessionSuccess = onSessionSuccessCallback;
    config.onSessionError = onSessionErrorCallback;
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgStartSkySession"));
    loadSkySettingsFromDevice();
    config.USER = skyUserID;
    config.PASSWORD = skyPwd;
    skySync.startSession(config);
}

function onSkySyncStartCallback(outputparams) {
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgSkyStart"));
}

function onSkySyncSuccessCallback(outputparams) {
    kony.print(getMessageTemplate("syncSuccess"), "info")
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgSkySuccess"));
    dismissSyncLoadingScreen();
}

function onSkySyncErrorCallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function onIndentifyStartCallback(outputparams) {
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgSkyStart"));
}

function onIndentifySuccessCallback(outputparams) {
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgIdentifiedSuccess"));
}

function onIndentifyErrorCallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function onSessionStartCallback(outputparams) {
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgSessionStarted"));
}

function onSessionSuccessCallback(outputparams) {
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgSessionSuccess"));
}

function onSessionErrorCallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncError"), outputparams), "error");
    dismissSyncLoadingScreen();
}

function resetSyncSkySession() {
    var config = {};
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgStartSession"));
    config.onResetError = syncskyreset_errorcallback;
    config.onResetSuccess = syncskyreset_successcallback;
    skySync.reset(config);
}

function syncskyreset_successcallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncResetSuccess"), outputparams), "info");
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgResetSkySuccess"));
    dismissSyncLoadingScreen()
}

function syncskyreset_errorcallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncResetFailure"), outputparams), "error");
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgResetSkyFailure"));
    dismissSyncLoadingScreen()
}

function stopSyncSkySession() {
    var config = {};
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgStopSession"));
    config.onStopError = syncskystop_errorcallback;
    config.onStopSuccess = syncskystop_successcallback;
    skySync.stop(config);
}

function syncskystop_successcallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncSuccessFailure"), outputparams), "info");
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgStopSkySyncSuccess"));
    dismissSyncLoadingScreen()
}

function syncskystop_errorcallback(outputparams) {
    kony.print(constructErrorMsg(getMessageTemplate("syncStopFailure"), outputparams), "error");
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgStopSkySyncFailure"));
    dismissSyncLoadingScreen();
}

function NavigateToFormScopes() {
    form.show(frmSyncScopes)
}

function createExceptionDetail(operation, errorDetails) {
    var createExceptionDetailObject = new com.kony.WeightWatchers.Logger.ExceptionDetail();
    // Success callback creates a new record on frmLogDetails	
    function createExceptionDetailSuccessCallback(res) {
        kony.print("In createExceptionDetailSuccessCallback");
        kony.print(getMessageTemplate("addSuccess", "Exception Detail"));
    }
    createExceptionDetailObject.user = glbUserName;
    createExceptionDetailObject.name = operation;
    if (errorDetails != undefined && errorDetails != null) {
        if (errorDetails.errorMessage != null) {
            kony.print("In errorDetails.errorMessage");
            createExceptionDetailObject.description = errorDetails.errorMessage;
        }
        if (errorDetails.errorCode != null) {
            kony.print("In errorDetails.errorCode");
            createExceptionDetailObject.description = errorDetails.errorCode;
        }
    }
    createExceptionDetailObject.errortype = kony.i18n.getLocalizedString('strKonySyncErrorMsg');
    var today = new Date();
    createExceptionDetailObject.localTime = today;
    // Call the com.kony.WeightWatchers.WeightWatchers.ExceptionDetail.create ORM API
    createExceptionDetailObject.create(createExceptionDetailSuccessCallback, createExceptionDetailErrorCallback);
}
//MEG-52: Code to handle app upgrade
function IsUpgradeRequired() {
    var config = {};
    config.userid = syncUserID;
    config.password = syncPwd;
    config.appid = syncAppID;
    config.serverhost = syncServerHost;
    //config.serverport = syncServerPort;
    if (Network.isSecure) {
        config.serverport = syncServerSecurePort;
    } else {
        config.serverport = syncServerPort;
    }
    config.issecure = Network.isSecure;
    config.batchsize = syncBatchSize;
    config.isupgraderequiredstart = isUpgradeRequiredStartCallback;
    config.isupgraderequiredsuccess = isUpgradeRequiredSuccessCallback;
    config.isupgraderequirederror = isUpgradeRequiredErrorCallback;
    sync.isUpgradeRequired(config);
}

function isUpgradeRequiredSuccessCallback(res) {
    kony.print("IN isUpgradeRequiredSuccessCallback == " + JSON.stringify(res));
    if (res.upgradeRequired) {
        kony.print("Perform Upgrade");
        PerformUpgrade();
    } else {
        kony.print("Perform Upgrade not required");
    }
}

function PerformUpgrade() {
    kony.print("===========In PerformUpgrade===============");
    var config = {};
    config.userid = syncUserID;
    config.password = syncPwd;
    config.appid = syncAppID;
    config.serverhost = syncServerHost;
    //config.serverport = syncServerPort;
    config.issecure = Network.isSecure;
    //Insert parameters like userid, password, appid, batchsize from sync.start session
    if (Network.isSecure) {
        config.serverport = syncServerSecurePort;
    } else {
        config.serverport = syncServerPort;
    }
    config.onscopestart = onscopestartCallback;
    config.onscopeerror = onscopeerrorCallback;
    config.onscopesuccess = onscopesuccessCallback;
    config.onuploadstart = onuploadstartCallback;
    config.onuploadsuccess = onuploadsuccessCallback;
    config.ondownloadstart = ondownloadstartCallback;
    config.ondownloadsuccess = ondownloadsuccessCallback;
    config.onbatchprocessingstart = onbatchprocessingstartCallback;
    config.onbatchprocessingsuccess = onbatchprocessingsuccessCallback;
    config.onperformupgradesuccess = onPerformUpgradeSuccessCallback;
    config.onupgradescriptsdownloadstart = onUpgradeScriptsDownloadStartCallback;
    config.onupgradescriptsdownloadsuccess = onUpgradeScriptsDownloadSuccessCallback;
    config.onupgradescriptsdownloaderror = onUpgradeScriptsDownloadErrorCallback;
    config.onupgradescriptsexecutionstart = onUpgradeScriptsExecutionStartCallback;
    config.onupgradescriptsexecutionsuccess = onUpgradeScriptsExecutionSuccessCallback;
    config.onupgradescriptsexecutionerror = onUpgradeScriptsExecutionErrorCallback;
    config.onperformupgradeerror = onPerformUpgradeErrorCallback;
    config.onperformupgradestart = onPerformUpgradeStartCallback;
    config.onupgraderequired = onUpgradeRequiredCallback;
    kony.print("performUpgrade before");
    sync.performUpgrade(config);
    kony.print("performUpgrade after");
}

function onupgradescriptsdownloadsuccess(res) {
    kony.print("~~~~~onUpgrade Scripts Download Success Callback");
    kony.print("Upgrade Scripts Download Success");
}

function onupgradescriptsdownloaderror(res) {
    kony.print("~~~~~onUpgrade Scripts Download Error Callback");
    alertForMessages("Upgrade Scripts Download Error" + JSON.stringify(res));
}

function onupgradescriptsexecutionstart(res) {
    kony.print("~~~~~onUpgrade Scripts Execution Start Callback");
    //user can add their own upgrade scripts here and push it with the downloaded scripts using
    //res.upgradeScripts.push(your_query);
}

function onupgradescriptsexecutionsuccess(res) {
    kony.print("~~~~~onUpgrade Scripts Execution Success Callback");
    kony.print(kony.i18n.getLocalizedString('strErrorMsgUpgradeScript') + " " + JSON.stringify(res));
}

function onupgradescriptsexecutionerror(res) {
    kony.print("~~~~~onUpgrade Scripts Execution Error Callback");
    alertForMessages("Upgrade script execution error" + JSON.stringify(res));
}

function onPerformUpgradeSuccessCallback() {
    setgblDeviceID();
    kony.print("In onPerformUpgradeSuccessCallback");
}

function onUpgradeScriptsDownloadStartCallback(res) {
    kony.print("In onUpgradeScriptsDownloadStartCallback");
    for (i in res) {
        kony.print(i + " " + res[i]);
    }
    kony.print("Upgrade DownloadStart Completed");
}

function onUpgradeScriptsDownloadSuccessCallback() {
    kony.print("In onUpgradeScriptsDownloadSuccessCallback");
}

function onUpgradeScriptsDownloadErrorCallback() {
    kony.print("In onUpgradeScriptsDownloadErrorCallback");
    kony.print("In onUpgradeScriptsDownloadErrorCallback");
}

function onUpgradeScriptsExecutionStartCallback() {
    kony.print("In onUpgradeScriptsExecutionStartCallback");
}

function onUpgradeScriptsExecutionSuccessCallback() {
    kony.print("In onUpgradeScriptsExecutionSuccessCallback");
}

function onUpgradeScriptsExecutionErrorCallback() {
    kony.print("In onUpgradeScriptsExecutionErrorCallback");
}

function onPerformUpgradeErrorCallback(res) {
    kony.print("In onPerformUpgradeErrorCallback" + JSON.stringify(res));
    showUpgrageError(res);
}

function onPerformUpgradeStartCallback() {
    kony.print("In onPerformUpgradeStartCallback");
}

function onUpgradeRequiredCallback() {
    kony.print("In onUpgradeRequiredCallback");
}

function isUpgradeRequiredStartCallback() {
    kony.print("In isUpgradeRequiredStartCallback");
}

function isUpgradeRequiredErrorCallback(res) {
    kony.print("In isUpgradeRequiredErrorCallback" + JSON.stringify(res));
    showUpgrageError(res);
}

function onupgraderequired(res) {
    kony.print("On Upgrade Required Callback");
    return "UPLOAD_AND_UPGRADE"; //specify policy name E.g. : "UPLOAD_AND_UPGRADE"
}

function showUpgrageError(res) {
    try {
        var errorMsg = _.findWhere(syncErrorCode, {
            "errorCode": res.errorCode
        }).errorMessage;
        if (checkValidString(errorMsg)) {
            alertForMessages(errorMsg);
            setEnableLogingBut(false);
        }
    } catch (e) {
        kony.print("Exception - In isUpgradeRequiredErrorCallback" + e.toString());
    }
}