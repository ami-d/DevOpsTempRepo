var PERIPHERAL_TYPE = {
    "CreditCard": 1
};

var GATEWAY_ID = {
    "Ingenico": 3,
    "CyberSource": 2
};

var isIngenicoBackOfficerID = false;

var getSaltCallback;

function getSALTforSerialNumberFromService(deviceSerialNumber, getSALTforSerialNumberCallback) {

    kony.print('Ingenico Login: GET SALT from back end for serial number =  ' + deviceSerialNumber);

    try {
        kony.print("getPeripheralInfo");

        getSaltCallback = getSALTforSerialNumberCallback;

        var GetPeripheralInfo_inputparam = {};

        GetPeripheralInfo_inputparam["serviceID"] = Services.GetPeripheralInfo;
        GetPeripheralInfo_inputparam["PeripheralType"] = "CreditCard";
        GetPeripheralInfo_inputparam["GateWayID"] = "Ingenico";
        GetPeripheralInfo_inputparam["SerialNO"] = deviceSerialNumber;
        GetPeripheralInfo_inputparam["httpconfigs"] = {};
        GetPeripheralInfo_inputparam["httpheaders"] = setRESTHeader();

        kony.print("GetPeripheralInfo_inputparam::response= " + JSON.stringify(GetPeripheralInfo_inputparam));
        //checkSaltBySerialNofromDB(SerialNO, "krsdggfjerdbxfhykifs", insertUpdateSaltInDB);
        GetPeripheralInfoWSCallbackHandle = Network.makeServiceCall(GetPeripheralInfo_inputparam, GetPeripheralInfoWSCallback, false);

    } catch (e) {
        GlobalException(e);
    }

}

function GetPeripheralInfoWSCallback(status, result) {
    removeProgressView();
    kony.print("GetPeripheralInfoWSCallback::response= " + JSON.stringify(result));
    try {
        if (status == 400) {
            if (result["opstatus"] == 0) {
                kony.print('Ingenico Login: SALT received=  ' + result.Salt);
                getSaltCallback.call(null, result.Salt);
            } else {
                getSaltCallback.call(null, "");
            }
        } else {
            getSaltCallback.call(null, "");
        }
    } catch (e) {
        getSaltCallback.call(null, "");
        GlobalException(e);
    }
}


function updatePeripheralInfo(SALT, updatePeripheralInfoWSCallback) {

    kony.print('Ingenico Login: Updating SALT in back end via service =  ' + SALT);
    try {
        var updatePeripheralInfo_inputparam = {};
        updatePeripheralInfo_inputparam["serviceID"] = Services.PeripheralInfoUpdate;
        updatePeripheralInfo_inputparam["PeripheralType"] = "CreditCard";
        updatePeripheralInfo_inputparam["GateWayID"] = "Ingenico";
        updatePeripheralInfo_inputparam["SerialNO"] = readerInfoObj.ReaderID;
        updatePeripheralInfo_inputparam["Salt"] = SALT;
        updatePeripheralInfo_inputparam["httpheaders"] = setRESTHeader();

        kony.print("updatePeripheralInfo_inputparam:: request= " + JSON.stringify(updatePeripheralInfo_inputparam));

        updatePeripheralInfoWSCallbackHandle = Network.makeServiceCall(updatePeripheralInfo_inputparam, updatePeripheralInfoWSCallback, false);
    } catch (e) {
        GlobalException(e);
    }

}

function insertSALTinDB(SALT, storeSALTinDBSuccessCallback) {
    kony.print('Ingenico Login: Storing SALT in Locale DB =  ' + SALT);

    var peripheralObject = {};
    peripheralObject.SerialNO = readerInfoObj.ReaderID;
    peripheralObject.Salt = SALT;
    peripheralObject.PeripheralType = PERIPHERAL_TYPE.CreditCard;
    peripheralObject.GateWayID = GATEWAY_ID.Ingenico;
    peripheralObject.DateModified = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");;
    peripheralObject.PaymentType = "CreditCard";

    kony.print('Ingenico Login: peripheralObject ' + JSON.stringify(peripheralObject));

    function successCallback() {
        storeSALTinDBSuccessCallback.call(null, true);
    }

    function errorCallBack() {
        storeSALTinDBSuccessCallback.call(null, false);
    }

    DBPeripheralController.create(peripheralObject, successCallback, errorCallBack);
}

function updatSALTinDB(SALT, updateSALTinDBSuccessCallback) {

    try {
        var strWhere = "where SerialNO = '" + readerInfoObj.ReaderID + "'";
        kony.print("IN updatSALTinDB == " + strWhere);


        function getSALTSuccessCallback(res) {
            kony.print('---res getSALTSuccessCallback ' + JSON.stringify(res));

            if (res && res.length > 0) { //update
                var peripheralObject = {};
                peripheralObject.Salt = SALT;
                kony.print('Update peripheralObject' + JSON.stringify(peripheralObject));

                function successCallback() {
                    kony.print("Ingenico Login:  SALT updated successfully in DB");
                    updateSALTinDBSuccessCallback.call(null, true);
                }

                function errorCallBack() {
                    kony.print("Ingenico Login:  Update SALT FAILED");
                    updateSALTinDBSuccessCallback.call(null, false);
                }
                DBPeripheralController.update(strWhere, peripheralObject, successCallback, errorCallBack);
            } else {

                insertSALTinDB(SALT, function storeSALTinDBSuccessCallback(isSavedSuccess) {
                    updateSALTinDBSuccessCallback.call(null, isSavedSuccess);
                });
            }
        }

        function errorCallBack() {
            kony.print("Update SALT FAILED");

        }
        DBPeripheralController.find(strWhere, getSALTSuccessCallback, errorCallBack);
    } catch (e) {

        kony.print("Ingenico Login:  Update SALT FAILED :: " + JSON.stringify(e));
        GlobalException(e);
    }
}

function checkForSALTexistsInDB(deviceSerialNumber, checkForSALTexistsInDBCallBack) {
    try {

        kony.print("IN checkForSALTexistsInDB");
        var strWhere = "where SerialNO = '" + deviceSerialNumber + "'";
        kony.print("IN strWhere == " + strWhere);

        function checkForSALTexistsInDBSuccessCallback(res) {
            kony.print('---res getRecordBySerialNofromDBSuccessCallback ' + JSON.stringify(res));
            if (res && res.length > 0) checkForSALTexistsInDBCallBack.call(null, res[0].Salt);
            else
            checkForSALTexistsInDBCallBack.call(null, "");
        }

        function errorCallBack() {
            kony.print('---res errorCallBack ');
            checkForSALTexistsInDBCallBack.call(null, "");
        }

        DBPeripheralController.find(strWhere, checkForSALTexistsInDBSuccessCallback, errorCallBack);

    } catch (err) {
        GlobalException(err);
    }

}