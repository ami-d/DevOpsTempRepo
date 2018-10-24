var appSettings;

var Settings = {
    "PG": "PERSONAL GOAL",
    "SR": "SIMPLE RETURN",
    "DPT": "SMARTPOINT AND WPA",
    "CC": "CREDITCARD",
    "CYBSLog": "CYBERSOURCETRANSACTIONLOG",
    "Referral": "MEMBER REFERRAL",
    "SyncFeedback": "SYNC FEEDBACK",
    "MPActivation":"MP ACTIVATION",
    "EMPLOYEEWEIGHIN":"EMPLOYEE WEIGHIN",
    "SalesForce":"SALES FORCE",
    "AppMsg":"APP MESSAGES"
};

function getAppSettingsWS() {
    kony.print("SJ--->>> Invoking GetAppSetting service");
    try {
    	 var GetAppSettingService_inputparam = {};
        GetAppSettingService_inputparam["serviceID"] = Services.GetAppSetting;
      	GetAppSettingService_inputparam["LanguageID"] = "1";
        GetAppSettingService_inputparam["CountryID"] = getCountryID();
        if(JsonService){
        	GetAppSettingService_inputparam["httpheaders"] = setRESTHeader();
        }else {
        	GetAppSettingService_inputparam["accessToken"] = glbSPAuthToken;
        	GetAppSettingService_inputparam["SPID"] = glbEmployeeId;
        	GetAppSettingService_inputparam["HeaderDate"] = "";
        	
        	GetAppSettingService_inputparam["deviceID"] = gblDeviceID;
        	GetAppSettingService_inputparam["Source"] = gblSourceVal;
        	GetAppSettingService_inputparam["httpheaders"] = {};
        }
        
        GetAppSettingService_inputparam["httpconfigs"] = {};
        GetAppSettingServiceHandle = Network.makeServiceCall(GetAppSettingService_inputparam, getAppSettingsWSCallback, false);
        
    } catch (e) {
        GlobalException(e);
    }
}

function getAppSettingsWSCallback(status, getAppSettingResult) {
    kony.print("SJ--->>>getAppSettingsFromService::response=" + JSON.stringify(getAppSettingResult));
    try {
        if (status == 400) {
            if (getAppSettingResult["opstatus"] == 0) {
                if (getAppSettingResult["AppSettings"].length > 0) {
                    removeProgressView();
                    for (var i in getAppSettingResult["AppSettings"]) {
                        var v = getAppSettingResult["AppSettings"][i];
                        saveAppSettingDataToLocaldb(v);
                    }
                } else {
                    removeProgressView();
                }
            } else {
                kony.print(getAppSettingResult['opstatus']);
                CommonErrHandler.networkError(getAppSettingResult['opstatus'], getAppSettingResult);
            }

        } else if (status == 300) {
            CommonErrHandler.networkError(status, resulttable);
        }
    } catch (e) {
        GlobalException(e);
    }
}

function saveAppSettingDataToLocaldb(v) {
    var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");

    //kony.print("Inside saveAppSettingDataToLocaldb " + JSON.stringify(v));
    
    var appSettingObject = new appSettingObj(v);
    //kony.print("AD---appSettingObjects=" + JSON.stringify(appSettingObject));
    
    appSettings.addSetting(appSettingObject);
	
	
    boAppSettings.checkRecordPresentInDB(appSettingObject.SettingName, function(isFlag) {
       // kony.print("SJ---->>>isFlag : " + isFlag);
        if (isFlag) {
            //update into db
            var whrClause = " where SettingName = '" + appSettingObject.SettingName + "'";
            boAppSettings.updateAppSettingDetails(_.clone(appSettingObject), whrClause)
        } else {
            //add into db
            boAppSettings.addAppSettingDetails(_.clone(appSettingObject));
        }
       // kony.print("AD---appSettings.settings=" + JSON.stringify(appSettings));
    });
}

function setDataFromAppSetting() {

    appSettings = appSettings || new appSettingsList();
    appSettings.clear();
    if (checkIfNetworkIsAvailable()) {
        getAppSettingsWS();
        kony.print("IS whole appsetting----" + JSON.stringify(appSettings));
    } else {
        boAppSettings.getAllAppSettings(createSettingObject);
    }
}
function hideCCImage()
{
	if(in_array(deviceLocale,Countries["US"])){
		frmSelectMeeting.ccValidateImg.isVisible = true;
		if(readerInfoObj.IsIngenico)
    	{
    		if(isDeviceConnected)
    		{
    			frmSelectMeeting.ccValidateImg.src = "icn_credit_card_green.png";
    		}else {
    			frmSelectMeeting.ccValidateImg.src = "icn_credit_card.png";
    	}
    }
	}else{
		frmSelectMeeting.ccValidateImg.isVisible = false;
	}	
}
function createSettingObject(res) {
    for (var i in res) {
        var v = res[i];
        var appSettingObject = new appSettingObj(v);
        appSettings.addSetting(appSettingObject);
    }
    
    kony.print("IS---outside appSettings.settings=" + JSON.stringify(appSettings));
}
var appSettingObj = function(v) {
    this.SettingName = v.SettingName;
    this.ActiveFromDate = v.ActiveFromDate,
        this.CountryId = v.CountryId,
        this.IsActive = v.IsActive,
        this.SettingName = v.SettingName.toUpperCase(),
        this.IsApplicableToUI = v.IsApplicableToUI,
        this.LanguageId = v.LanguageId,
        this.CountryId = v.CountryId,
        this.SettingDescription = v.SettingDescription,
        this.SettingTypeName = v.SettingTypeName,
        this.ModifiedLast = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS")
}

var appSettingsList = function() {
    var _this = this;
    this.settings = [];
    this.find = function(settingName) {
        var obj = _.findWhere(_this.settings, {
            SettingName: settingName
        });
        return obj;
    }
    this.addSetting = function(setting) {
        _this.settings.push(setting);
       // kony.print("Added = " + JSON.stringify(_this.settings));
    }
    this.clear = function() {
        _this.settings = [];
    }
};

function checkIfActiveIsNotAFutureDate(activeDate) {
    try {
        kony.print("::PK::--" + activeDate);
        activeDate = activeDate.split("T")[0];
        kony.print("222===>>" + activeDate);

        kony.print("new Date(activeDate).setHours(0,0,0,0)" + new Date(activeDate).setHours(0, 0, 0, 0) + "--new Date().setHours(0,0,0,0)---" + new Date().setHours(0, 0, 0, 0));

        if (new Date(activeDate).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0)) {
            return true;
        } else {
            return false;
        }

    } catch (e) {
        GlobalException(e);
    }

}
// Check whether Setting is Enable/Disable
function checkAppSettingEnable(AppSettingName) {
    kony.print("IS appsettingname--->" + AppSettingName);
    if(AppSettingName == "SYNC FEEDBACK"){ // If WS is having this Setting then this condition is not required.
    	return false;
    }
    var appSettingObj = appSettings.find(AppSettingName);
    kony.print("IS---appsettingabj *******************" + JSON.stringify(appSettingObj));
    if (appSettingObj && checkIfActiveIsNotAFutureDate(appSettingObj.ActiveFromDate) && (appSettingObj.IsActive == true || appSettingObj.IsActive == "true")) {
        kony.print("IS appsettingname---> true");
        return true;
    } 
    else {
        return false;
    }

}
