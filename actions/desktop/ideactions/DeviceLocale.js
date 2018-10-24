var deviceLocale = "";
var gblDeviceID = "";
var CardScannerObject;
var isScannerConnected=false;
function getDeviceLocaleInfo()
{
	underscore();
	deviceLocale = kony.i18n.getCurrentDeviceLocale();	
	kony.print("Current Device locale is : " + deviceLocale);
	
	var deviceInfo = kony.os.deviceInfo();
	// Dileep Chejerla - Kony: Commenting "deviceInfo.deviceid" to make sure that 
	// we will get unique device ID's for iOS7 platform
    // gblDeviceID = deviceInfo.deviceid;
	
	/* Commented By AD
	gblDeviceID = deviceInfo.identifierForVendor;
    kony.print("Device ID is : " + gblDeviceID);*/
    
    setDeviceLocale();
    kony.print("Current Device locale is : " + deviceLocale);    
    
}

function setSyncAndUsbSettingsForScanners()
{
	try{
		kony.print("setSyncAndUsbSettingsForScanners");
		//Creates an object of class 'CardScanner'
		CardScannerObject = new com.weightwatchers.CreditCardReader.CardScanner();
		CardScannerObject.connectScanner(scannerState);
		
		//initIngenico();
		
	}
	catch (e) {
		// todo: handle exception
		kony.print("Exception in opening scan FFI");
	}
}
function onSelectionOfPaymentDevices()
{
	try{   
			popupSelectPaymentOption.dismiss();
	       /* var selectedPaymentOption = popupSelectPaymentOption.pickerPaymentOption.selectedKeyValues;
	        kony.print("selected payment option = " + JSON.stringify(selectedPaymentOption));
	        var selectedOption = selectedPaymentOption[0][0];
	        kony.print("selectedOption=" + JSON.stringify(selectedOption));*/
	        var selectedPaymentOption = popupSelectPaymentOption.radioPaymentOption.selectedKeyValues;
        kony.print("selected payment option = " + JSON.stringify(selectedPaymentOption));
        var selectedOption = selectedPaymentOption[0][0];
        kony.print("selectedOption=" + JSON.stringify(selectedOption));
	        if(selectedOption == 1)
	        {
	        	testMountedDevice();
	        }else
	        {
	        	testBTDevice(false);
	        }
	        
	}catch(err)
	{
		GlobalException(err);
	}
}
function checkDevice() {
    if (!readerInfoObj.IsIngenico && !isDevicePaired) {
        var context1 = {
            "widget": frmLogin.vbox156335075082754,
            "anchor": "bottom",
            "sizetoanchorwidth": true
        };
        popupSelectPaymentOption.setContext(context1);
        popupSelectPaymentOption.show();

    } else if (readerInfoObj.IsIngenico && isDevicePaired) {
        if (!isDeviceConnected) {
            testBTDevice(false);
        }

    }
}


function checkDeviceONMeeting() {
    if (!readerInfoObj.IsIngenico && !isDevicePaired) {
       /* var context1 = {
            "widget": frmLogin.vbox156335075082754,
            "anchor": "bottom",
            "sizetoanchorwidth": true
        };
        popupSelectPaymentOption.setContext(context1);
        popupSelectPaymentOption.show();*/
		testMountedDevice();
    } else if (readerInfoObj.IsIngenico && isDevicePaired) {
        if (!isDeviceConnected) {
            testBTDevice(false);
        }

    }
}


function testMountedDevice()
{
	if(!isScannerConnected){
//		alert("No Device connected.");
		alertForMessages(kony.i18n.getLocalizedString("strMsgCCDeviceNotConnected"));
		return;
	}
	try{
		kony.print("checkDevice");
		CardScannerObject.checkDevice(getDTDeviceInfo);
	}
	catch (e) {
		// todo: handle exception
		kony.print("Exception in opening scan FFI"+e.toString());
	}
}


function getCCKeyVersion()
{
	return (syncServerHost == "weightwatchers.sync.konycloud.com") ? "4" : "3";
}

function getDTDeviceInfo(data)
{
	var gblCCDeviceKeyInfo=[{"keyName":"AES256 Encryption 1","keyID":"1","keyVersion":"2"},{"keyName":"DUKPT 1","keyID":"32","keyVersion": getCCKeyVersion()}]; 
	kony.print("gblCCDeviceKeyInfo == "+JSON.stringify(gblCCDeviceKeyInfo));
	
	//alert(JSON.stringify(data));
	var strMsg=kony.i18n.getLocalizedString("strMsgCCDeviceNotTempered");
	kony.print("getDTDeviceInfo == "+JSON.stringify(data));
	var msrInfo ={};
	msrInfo.deviceType = externalDeviceTypes["MSRReader"];
	msrInfo.isReady = true;
	var strMsrInfo = "isCreditCardTampered:"+data.isTempered+",";
	if(data.isTempered == "false"){
		
		var allKeyValidateCount = 0;
		if(data.keyInfo) {
		_.each(data.keyInfo, function(deviceKey) {
			 _.each(gblCCDeviceKeyInfo, function(key) {
        			if(key.keyName == deviceKey.keyName && key.keyVersion == deviceKey.keyVersion &&  key.keyID == deviceKey.keyID){
        				strMsrInfo += deviceKey.keyName+":"+deviceKey.keyVersion+",";
        				kony.print("data.keyInfo.keyName == "+deviceKey.keyName +" - key.keyName = "+key.keyName) ;
        				allKeyValidateCount++;
        			}
    			})
    		})
    	}
    	kony.print("allKeyValidateCount == "+allKeyValidateCount);
    	if(allKeyValidateCount != gblCCDeviceKeyInfo.length){
		 	strMsg=kony.i18n.getLocalizedString("strMsgCCKeyInvalidate");
		 	msrInfo.isReady = false;
		}
	}else{
			strMsg=kony.i18n.getLocalizedString("strMsgCCDeviceIsTempered");
			msrInfo.isReady = false;
	}
	alertForMessages(strMsg);
	
	msrInfo.data=removeCommaAtEndFromString(strMsrInfo);
	msrInfo.LocationID = glbLocationID.toString(); 
	msrInfo.EmployeeID = glbEmployeeId.toString();
	kony.print("getDTDeviceInfo msrInfo == "+JSON.stringify(msrInfo));
		
	//MEG-5324
	if(kony.application.getCurrentForm().id != frmLogin.id){ // MEG-5748
		if(checkIfNetworkIsAvailable()){ // if network avaiable, sent the MSR information to the server.
			sendMSRValidatedData(msrInfo);
		}else{ // In case of no network connectivity, the MSR information stored in local persistance storage.
			kony.store.setItem("msrInfo", msrInfo);	
		}
	}	
}

function scannerState(data)
{
	try{
		(parseInt(data) == 1) ? isScannerConnected=true : isScannerConnected=false;
		//alert("isScannerConnected = "+isScannerConnected);
	}
	catch (e) {
		// todo: handle exception
		kony.print("Exception in opening scan FFI");
	}
}
function scannerDisconnedted(data)
{
	
}
