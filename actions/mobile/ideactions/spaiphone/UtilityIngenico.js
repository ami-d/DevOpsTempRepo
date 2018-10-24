var PairingHandlerObject;
var isDevicePaired = false;
var isDeviceConnected = false;
var ClientVersion = "4.2.3";
var API_KEY = "SDK6-161d2986-af8e-4085-a9ac-ea22274bc125"; //"SDK6-cb1cc57f-42e1-45a2-8aa0-4d4f56a88dff";//"RPX6-d76d2c37-f7b7-40c8-bf3f-9ec0a5cdc562";
var BASE_URL = "https://uatmcm.roamdata.com";
var USERNAME = "wwatcherssubline1"; //"wwatcherstest1";
var PASSWORD = "12345";
var readerInfoObj = {
    "IsIngenico": false,
    "Deviceid": "",
    "ReaderName": "",
    "ReaderID": "",
    "LastPairedTime": "",
    "CreatedTime": "",
    "LastConnectedTime": ""
};

function initIngenico() {
    //Creates an object of class 'PairingHandler'
    kony.print('In initIngenico');
    if (PairingHandlerObject == null) {
        kony.print('In initIngenico -- Object created');
        PairingHandlerObject = new com.weightwatchers.ingenico.PairingHandler();
    }
}

function getCCReaderInfo() {
    //Get the info from the DB
    var deviceInfoObj = {};
    var whereClause = " where 1=1 LIMIT 0,1"
    DBCcDeviceInfoController.find(whereClause, function(res) {
        if (res && res.length > 0) {
            kony.print("getCCReaderInfo" + JSON.stringify(res[0]));
            deviceInfoObj = res[0];
        } else {
            deviceInfoObj.IsIngenico = false;
            //alert("no result");
        }
    }, eventErrorCallBack);
    kony.print("deviceInfoObj" + JSON.stringify(deviceInfoObj));
    return deviceInfoObj;
}

function checkForTheReaderUsed() {
    readerInfoObj = getCCReaderInfo();
    kony.print("checkForTheReaderUsed == " + JSON.stringify(readerInfoObj));
    if (readerInfoObj && readerInfoObj.IsIngenico == true) {
        testBTDevice(true);
    } else {}
}

function saveReaderInfo(deviceInfo) {
    kony.print('saveReaderInfo called', JSON.stringify(deviceInfo));
    var obj = {};
    obj.IsIngenico = true;
    obj.Deviceid = gblDeviceID;
    obj.ReaderName = deviceInfo.name;
    obj.ReaderID = deviceInfo.identifier;
    obj.LastPairedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    obj.CreatedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    obj.LastConnectedTime = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");

    function insertCCDeviceInfoSuccessCallback() {
        kony.print(getMessageTemplate("CCDeviceInfo Added", "CcDeviceInfo"), "info");
        readerInfoObj = getCCReaderInfo();
    }
    DBCcDeviceInfoController.create(obj, insertCCDeviceInfoSuccessCallback, eventErrorCallBack, false);
}

function initCallBack(data) {
    /*
     * data.pairStatus :0 no paired device found
     * data.pairStatus :1 single paired device found
     * data.pairStatus :2 multiple paired device found
     */
    kony.print('initCallBack called');
    kony.print('data.pairStatus =' + data.pairStatus);
    if (data.pairStatus != undefined && data.pairStatus != null) {
        if (parseInt(data.pairStatus) == 0) {
            kony.print('NO Paired device found');
            //alert('Device not paired');
            frmLogin.ccValidateImg.src = "icn_credit_card.png";
            //frmLogin.btnPair.text = "Start Pairing";
            isDevicePaired = false;
        } else if (parseInt(data.pairStatus) == 1) {
            kony.print('single Paired device found');
            frmLogin.ccValidateImg.src = "icn_credit_card_orange.png";
            //frmLogin.btnPair.text = "Connect";
            isDevicePaired = true;
            if (data.deviceInfo != undefined && data.deviceInfo != null) saveReaderInfo(data.deviceInfo);
        } else if (parseInt(data.pairStatus) == 2) {
            kony.print('multiple Paired device found');
            frmLogin.ccValidateImg.src = "icn_credit_card_orange.png";
            isDevicePaired = true;
        }
    }
}

function connectCallBack(data) {
    kony.print('connectCallBack called');
    kony.print('data.connStatus =' + data.connStatus);
    if (data.connStatus != undefined && data.connStatus != null) {
        var ccImg = "icn_credit_card.png";
        if (parseInt(data.connStatus) == 1) {
            kony.print('Device connected.');
            isDeviceConnected = true;
            ccImg = "icn_credit_card_green.png";
        } else if (parseInt(data.connStatus) == 0) {
            kony.print('Device Disconnected.');
            isDeviceConnected = false;
            ccImg = "icn_credit_card.png";
        }
        if (kony.application.getCurrentForm()) {
            kony.print('IN getCurrentForm kony.application.getCurrentForm().id=' + kony.application.getCurrentForm().id);
            if (kony.application.getCurrentForm().id == frmLogin.id) {
                kony.print('IN getCurrentForm frmLogin.id=' + frmLogin.id);
                frmLogin.ccValidateImg.src = ccImg;
            }
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

function connectDevice() {
    if (isDevicePaired) {
        PairingHandlerObject.connectDevice(connectCallBack);
    } else {
        //alert('Device not paired');
    }
}

function testBTDevice(isConnInBG) {
    //Creates an object of class 'PairingHandler'
    //Invokes method 'initiazeDevice' on the object
    if (isConnInBG == null) {
        isConnInBG = false;
    }
    initIngenico();
    PairingHandlerObject.initiazeDevice( /**String*/ BASE_URL, /**String*/ API_KEY, /**String*/ ClientVersion, /**String*/ USERNAME, /**String*/ PASSWORD, /**Function*/ initCallBack, /**Function*/ connectCallBack, isConnInBG);
}

function processIngenicoPayment(totalAmount, paymentCallback) {
    kony.print('in processIngenicoPayment=', isDeviceConnected);
    if (isDeviceConnected) {
        PairingHandlerObject.swipeCardAndProcessPayment(totalAmount, paymentCallback);
    } else {
        alert('Device not connected.');
    }
}

function testPayment() {
    PairingHandlerObject.swipeCardAndProcessPayment(10, paymentCallback);
}

function paymentCallback(data) {
    if (data != null) {
        kony.print('paymentCallback called =', data);
        alert(data);
    }
}