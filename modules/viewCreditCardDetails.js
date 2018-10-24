var creditCrardSalePaymentDataObj = null;
var glbCurrencyType = "USD";
var CreditCardInfo = {};
var isPartialAuthAllowed=true;
var glbMerchantReferenceCode = "";
var response1 = {
    "merchantReferenceCode": "0001",
    "requestID": "4442831359135000001521",
    "decision": "ACCEPT",
    "reasonCode": "100",
    "requestToken": "Ahj//wSR4bFXfAH/NvfiIkGLFi1ZNmjClGcVWdqS2T+WgnI2gBT+WgnI2jSBl3ClBDJpJlukB2X7AYE5HhsVd8Af829+IAAAGQ+2",
    "purchaseTotals": {
        "currency": "USD"
        },
    "ccAuthReply": {
      "reasonCode": "100",
      "amount": "30.00",
      "authorizationCode": "888888",
      "avsCode": "1",
      "authorizedDateTime": "2015-10-08T05:45:35Z",
      "processorResponse": "100",
      "reconciliationID": "11152640RF8U3ZI6"
    },
    "ccCaptureReply": {
      "reasonCode": "100",
      "requestDateTime": "2015-10-08T05:45:35Z",
      "amount": "30.00",
      "reconciliationID": "11152640RF8U3ZI6"
    }
};

var responseCCAuth;


var response2 = {
    "merchantReferenceCode": "0001",
    "requestID": "4442831359135000001521",
    "decision": "ACCEPT",
    "reasonCode": "100",
    "requestToken": "Ahj//wSR4bFXfAH/NvfiIkGLFi1ZNmjClGcVWdqS2T+WgnI2gBT+WgnI2jSBl3ClBDJpJlukB2X7AYE5HhsVd8Af829+IAAAGQ+2",
      "reasonCode": "100",
      "amount": "2.00",
      "authorizationCode": "888888",
      "avsCode": "1",
      "authorizedDateTime": "2015-10-08T05:45:35Z",
      "processorResponse": "100",
      "reconciliationID": "11152640RF8U3ZI6",
      "reasonCode": "100",
      "requestDateTime": "2015-10-08T05:45:35Z",
      "amount": "2.00",
      "reconciliationID": "11152640RF8U3ZI6"
};

var response1 = {
    "merchantReferenceCode": "0001",
    "requestID": "4442866764575000001513",
    "decision": "REJECT",
    "reasonCode": "202",
    "requestToken": "Ahj77wSR4bJTDiDD2PfSIp+8Wm7ACAp+8Wm7ADpAy7hSgTK0ky3SA7L9gBOR4bJTDiDD2PfSAAAA7wud",
    "ccAuthReply": { "reasonCode": "202" }
}

/*
 * Credit Card Autorize web service call
 */
function getCreditCardAuthWS(paymentData,amount,cardType)
{
	kony.print("SJ--->>> Invoking getCreditCardAuthWS service="+glbBackOfficerRefID);
	kony.print("deviceLevelTransactId getCreditCardAuthWS " + deviceLevelTransactId);	
	try{
		var GetCreditCardAuthService_inputparam = {};
		glbMerchantReferenceCode = getMerchantReferanceCode(deviceLevelTransactId); //Added to append saletransId 6 digit glbBackOfficerRefID + "-" + getRandomNumber(6);
		kony.print("glbMerchantReferenceCode getCreditCardAuthWS " + glbMerchantReferenceCode);
		GetCreditCardAuthService_inputparam["serviceID"] = Services.runTransaction;
		GetCreditCardAuthService_inputparam["CreatedTime"] = convertDateTOUTCDate();
		GetCreditCardAuthService_inputparam["ExpireTime"] = convertDateTOUTCDate(1);
		GetCreditCardAuthService_inputparam["UsernameToken"] = gblDeviceID;
		GetCreditCardAuthService_inputparam["merchantReferenceCode"] = glbMerchantReferenceCode; //meetingOccId
		GetCreditCardAuthService_inputparam["currency"] = glbCurrencyType;
		GetCreditCardAuthService_inputparam["entryMode"] = "Swiped";
		GetCreditCardAuthService_inputparam["cardPresent"] = "Y";
		GetCreditCardAuthService_inputparam["terminalCapability"] = "3";
		GetCreditCardAuthService_inputparam["terminalID"] = "12345674";
		GetCreditCardAuthService_inputparam["catLevel"] = "3";
		GetCreditCardAuthService_inputparam["paymentData"] = paymentData;
		GetCreditCardAuthService_inputparam["deviceReaderData"] = "4649443D4944544543482E5365637572654B65792E4D53522E53646B7631";
		GetCreditCardAuthService_inputparam["encryptionAlgorithm"] = "TDES";
		GetCreditCardAuthService_inputparam["encodingMethod"] = "Hex";
		GetCreditCardAuthService_inputparam["commerceIndicator"] = "retail";
		GetCreditCardAuthService_inputparam["cardType"] = cardType; 
		GetCreditCardAuthService_inputparam["recurringFrequency"] = "on-demand";
		
		
		kony.print(":preActivationObj:"+JSON.stringify(preActivationObj));
		if(preActivationObj.hasOwnProperty('voucherNumber') && preActivationObj.isMPFromService == "true")
		{
			GetCreditCardAuthService_inputparam["serviceID"] = Services.runTranTokenCreation;
			GetCreditCardAuthService_inputparam["merchantID"] = "Token_US";
			GetCreditCardAuthService_inputparam["partialAuthorization"] = isPartialAuthAllowed;
			GetCreditCardAuthService_inputparam["billingTitle"] = preActivationObj.title;
			GetCreditCardAuthService_inputparam["billingFirstName"] = preActivationObj.firstName;
			GetCreditCardAuthService_inputparam["billingMiddleName"] = preActivationObj.middleName;
			GetCreditCardAuthService_inputparam["billingLastName"] = preActivationObj.lastName;
			GetCreditCardAuthService_inputparam["billingStreet1"] = preActivationObj.billingAddr1;
			GetCreditCardAuthService_inputparam["billingStreet2"] = preActivationObj.billingAddr2;
			GetCreditCardAuthService_inputparam["billingCity"] = preActivationObj.city;
			GetCreditCardAuthService_inputparam["billingState"] = preActivationObj.state;
			GetCreditCardAuthService_inputparam["billingPostalCode"] = preActivationObj.zip;
			GetCreditCardAuthService_inputparam["billingCountry"] = preActivationObj.country;
			GetCreditCardAuthService_inputparam["billingEmail"] = preActivationObj.email;
			kony.print("::getCreditCardAuthWS::GetCreditCardAuthService_inputparam = "+JSON.stringify(GetCreditCardAuthService_inputparam));
			GetCreditCardAuthServiceHandle = Network.makeServiceCall(GetCreditCardAuthService_inputparam, getCreditCardAuthPart1WSCallback, false);
		}
		else
		{
			GetCreditCardAuthService_inputparam["serviceID"] = Services.runTransaction;
			GetCreditCardAuthService_inputparam["merchantID"] = "ww_meg";
			GetCreditCardAuthService_inputparam["grandTotalAmount"] = amount;
			kony.print("::getCreditCardAuthWS::GetCreditCardAuthService_inputparam = "+JSON.stringify(GetCreditCardAuthService_inputparam));
			GetCreditCardAuthServiceHandle = Network.makeServiceCall(GetCreditCardAuthService_inputparam, getCreditCardAuthWSCallback, false);
		}
		
		
	}catch(e){
		GlobalException(e);
	}
}
function alertCreditCardSuccessNotify()
{
 var basicConf = {
        message: kony.i18n.getLocalizedString("strCCAuthorized"),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Info",
        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
        alertHandler: (glbIsSignatureCapturingSupported) ? showSignPad : processPayment
        				
    };
    var pspConf = {};

    var infoAlert = kony.ui.Alert(basicConf, pspConf);
}
function showSignPad(){
	var SignPadObject = new com.weightwatchers.signatureCapture.SignPad();
	SignPadObject.openSignPad( callbackObj);
}
function callbackObj(base64)
{
	kony.print("base64 :: " + base64);
	if(base64 !=undefined && base64.length == 0){
		alertForMessages('Invalid Signature');
	}else {
		responseCCAuth.CardSignature = base64;
		processPayment();
	}
}

function processPayment()
{
	kony.print("*****processPayment " );
	kony.print("********** getPlanTypeDetails(SubscriptnType) " +getPlanTypeDetails(glbFormName.lblSubType.text));
	kony.print("********** getCommtDur(SubscriptnType) " +getCommtDur(glbFormName.lblSubType.text));
	
	if(validateActivationDetails()) {
        		    	
						kony.print("::glbIsMPActivationEnabled::"+glbIsMPActivationEnabled);
					 	if(checkAppSettingEnable(Settings["MPActivation"]) && (glbIsMPActivationEnabled == true || glbIsMPActivationEnabled == "true")){ //AMi&& !isPaymentByBTDevice){
						
							var cartNontangibleData = frmAddAndWeighMemberTransaction.segSKUDataPOC.data;
				        	kony.print("::cartNontangibleData::=="+JSON.stringify(cartNontangibleData));
				        	
							var prod_PrepaymentPlan = _.find(cartNontangibleData, function(prd){ return prd.hidIsPrepaymentPlan  == "true"; });
							kony.print("::prod_PrepaymentPlan::=="+JSON.stringify(prod_PrepaymentPlan));
							
							var preActivation_SubscriptnType = MemberSubscriptionTypeEnum[glbFormName.lblSubType.text];
							var preActivation_ProgramDuration = getProgramDurationforPreActivation();
							var preActivation_offerId =  (prod_PrepaymentPlan && checkValidString(prod_PrepaymentPlan.hidOfferId)) ? prod_PrepaymentPlan.hidOfferId : "";
							var preActivation_PlanType = getPlanTypeDetails(glbFormName.lblSubType.text); //** MEG 6434
							var preActivation_CommitmentDuration = getCommtDur(glbFormName.lblSubType.text); //** MEG 6434
							
							boPreActivation.getMPPreActivation(preActivation_offerId, preActivation_ProgramDuration, preActivation_SubscriptnType,preActivation_PlanType,preActivation_CommitmentDuration);
						}else{
							boPreActivation.MPPreActivationFailure(false);
						}	
					}else{
						MPPreActivationSuccessCC();  // case :- except of 3-month pass , monthly pass 
					}
}

function getCreditCardAuthPart1WSCallback(status, res){
	kony.print("In getCreditCardAuthWSPart1Callback" + JSON.stringify(res));
	kony.print("getCreditCardAuthPart1WSCallback deviceLevelTransactId " + deviceLevelTransactId);
	try{
		if (status == 400) {
	        if (res["opstatus"] == 0) {
	        	dismissSyncLoadingScreen();
	        	var response = res; //res;
				var amount = removeCurrency(frmPayment.txtBoxAmount.text);
				
	        	kony.print("In getCreditCardAuthWSPart1Callback response" + JSON.stringify(response));
	        	kony.print("Amount ==== "+amount);
	        	kony.print("response.Token" + response.Token);
	        	var GetCreditCardAuthService_inputparam = {};
				glbMerchantReferenceCode = getMerchantReferanceCode(deviceLevelTransactId);
				GetCreditCardAuthService_inputparam["serviceID"] = Services.runTranBillingWithToken;
				GetCreditCardAuthService_inputparam["CreatedTime"] = convertDateTOUTCDate();
				GetCreditCardAuthService_inputparam["ExpireTime"] = convertDateTOUTCDate(1);
				GetCreditCardAuthService_inputparam["UsernameToken"] = gblDeviceID;
				GetCreditCardAuthService_inputparam["merchantID"] = "ww_meg";
				GetCreditCardAuthService_inputparam["merchantReferenceCode"] = glbMerchantReferenceCode; //meetingOccId
				GetCreditCardAuthService_inputparam["currency"] = glbCurrencyType;
				GetCreditCardAuthService_inputparam["grandTotalAmount"] = amount;
				GetCreditCardAuthService_inputparam["Token"] = response.Token;
				kony.print("::getCreditCardAuthWS::GetCreditCardAuthService_inputparam = "+JSON.stringify(GetCreditCardAuthService_inputparam));
				GetCreditCardAuthServiceHandle = Network.makeServiceCall(GetCreditCardAuthService_inputparam, getCreditCardAuthWSCallback, false);
				
	        }else{
	        	kony.print(res['opstatus']);
	        	CommonErrHandler.networkError(res['opstatus'],res);
	        }
	    }else if(status == 300){
			CommonErrHandler.networkError(status,resulttable);
		}
	}catch(e){
		GlobalException(e);
	}
}

function getCreditCardAuthWSCallback(status, res){
	kony.print("In authoriseCreditCardCallBack" + JSON.stringify(res));
	try{
		if (status == 400) {
	        if (res["opstatus"] == 0) {
	        	dismissSyncLoadingScreen();
	        	var response = res; //res;
	        		kony.print("In authoriseCreditCardCallBack response" + JSON.stringify(response));
	        	
	        	kony.print("response.decision" + response.decision);
	        	kony.print("res.decision" + res.decision);
	        	kony.print("res.reasonCode" + res.decision);
	        	
	        	
	        	
        		if(response.decision == creditCardPaymentDecisionEnum[1]){
        		    response.IsIngenicoPayment = false;
        			responseCCAuth = response;
        			alertCreditCardSuccessNotify();
        			
        			
				}else if(response.decision == creditCardPaymentDecisionEnum[2] || response.decision == creditCardPaymentDecisionEnum[3]){
					disableCreditCardAndBackBtn(false);	
					var cybsErrorCode =[
										{"errorCode" : ["101","102","104","150","200","201","203","208","209","210","211","220","221","222","230","231","232","233","236","237"],"errorMessage" : kony.i18n.getLocalizedString("strCCDecline") },
										{"errorCode" : ["202"],"errorMessage" : kony.i18n.getLocalizedString("strCCInvalidDate") },
										{"errorCode" : ["151","207"],"errorMessage" : kony.i18n.getLocalizedString("strCCTranNotComplete") }
										];
					var isCodeAvailable = false;
					_.each(cybsErrorCode, function(row) {
						var errCode = _.find(row.errorCode, function(errcode){ return (errcode == response.reasonCode); });
						if(parseInt(errCode) == parseInt(response.reasonCode) ){
							isCodeAvailable = true;
							displayAlert(row.errorMessage);
						}
					});
					if(!isCodeAvailable) 
						displayAlert(kony.i18n.getLocalizedString("strCCTranNotComplete"));
				}
				
				/*else if(response.decision == creditCardPaymentDecisionEnum[2]){
					disableCreditCardAndBackBtn(false);
					//display alert according to rejection error
					if(response.reasonCode == "202")
						displayAlert(kony.i18n.getLocalizedString("strCCInvalidDate"));
					else if(response.reasonCode == "204")
						displayAlert(kony.i18n.getLocalizedString("strCCDecline"));
					else if(response.reasonCode == "208")
						displayAlert(kony.i18n.getLocalizedString("strCCNotProcess"));
					else
						displayAlert(kony.i18n.getLocalizedString("strCCInvalidData"));
				}else if(response.decision == creditCardPaymentDecisionEnum[3]){
					disableCreditCardAndBackBtn(false);
					displayAlert(kony.i18n.getLocalizedString("strCCTranNotComplete"));
				}*/
					
	        }else{
	        	kony.print(res['opstatus']);
	        	CommonErrHandler.networkError(res['opstatus'],res);
	        }
			
	    }
	    else if(status == 300){
			CommonErrHandler.networkError(status,resulttable);
		}
	}
	catch(e){
		GlobalException(e);
	}
	
}

function MPPreActivationSuccessCC(){
	// var serviceAmt = parseFloat(responseCCAuth.amount).toFixed(2);
     creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(responseCCAuth);
     kony.print("New CCSalePaymentDataObj=="+JSON.stringify(creditCrardSalePaymentDataObj));
     var txtAmt = removeCurrency(frmPayment.txtBoxAmount.text);
	 var txtBoxAmount = parseFloat(txtAmt).toFixed(2);
	// kony.print("responseCCAuth.ccAuthReply.amount : "+responseCCAuth.amount+" and txtBoxAmount :"+txtBoxAmount);
    
    //displayAlert(kony.i18n.getLocalizedString("strCCAuthorized"));
    bindPaymentDataToSegmentSuccess(kony.i18n.getLocalizedString("strCredit"),txtBoxAmount);
    /* if(serviceAmt ==  txtBoxAmount){
        displayAlert(kony.i18n.getLocalizedString("strCCAuthorized"));
        bindPaymentDataToSegmentSuccess(kony.i18n.getLocalizedString("strCredit"),responseCCAuth.amount);
     }else if(serviceAmt <  txtBoxAmount){
        displayAlert(kony.i18n.getLocalizedString("strCCApprove")+ " " + glbCurrency +responseCCAuth.amount);
        bindPaymentDataToSegmentSuccess(kony.i18n.getLocalizedString("strCredit"),responseCCAuth.amount);
     }*/
     //if(checkAppSettingEnable(Settings["SalesForce"])){
//     	frmPayment.hboxSendReceipt.setVisibility(true);
//     	frmPayment.imgSendReceipt.src = "icn_checkbox_unchecked.png";
//     	frmPayment.paymentScroll.containerHeight=64;
//     }
     disableCreditCardAndBackBtn(true);
    // if(!isPaymentByBTDevice)
     cyberSourceLogWS(creditCrardSalePaymentDataObj,deviceLevelTransactId,false); 
}

function getRefundCCAmtWS(){
	kony.print("In getRefundCCAmtWS");
}

/*
 * Function returns UTC format date
 * inputParam addDay is adding days in existing date.
 */
function convertDateTOUTCDate(addDay){
	var todayDate = new Date();
	var newDate;
	if(addDay != undefined && addDay > 0)
		newDate = todayDate .setDate(todayDate .getDate() + addDay );
	else
		newDate = todayDate
	var utcDate = new Date(newDate ).toISOString();
	return utcDate;
}


var CCSalePaymentDataObj =  function(v){
kony.print("IN CCSalePaymentDataObj=="+JSON.stringify(v));
if(!isPaymentByBTDevice && !(v.IsIngenicoPayment)){
	this.AuthorizationCode = v.AuthorizationCode,
	this.CCLastFourDigits =(checkValidString(CreditCardInfo.lastFourDigitOfPAN))  ? CreditCardInfo.lastFourDigitOfPAN : v.CCLastFourDigits,
	this.CardType = (checkValidString(CreditCardInfo.cardTypeName))  ? CreditCardInfo.cardTypeName : v.CardType,
	this.ExpirationDate =  (checkValidString(CreditCardInfo.cardExpiryDate))  ? CreditCardInfo.cardExpiryDate : v.ExpirationDate,
	this.HasToken = (checkValidString(v.Token)) ? true : false;
    this.InvoiceNumber = v.RequestId, 
    this.ReferenceNumber = v.ReferenceNumber,
    this.RequestId = v.RequestId,
    this.Token = v.Token,
    this.TokenExpirationDate = "",
    this.TransactionStatus = "Success",
    this.TransactionType = "Billing",
    this.IsIngenicoPayment = (checkValidString(v.IsIngenicoPayment))  ? v.IsIngenicoPayment : false,
    this.Amount =v.amount,
	this.IsTrack = true,
	this.CardSignature = v.CardSignature,
	this.PaymentGateway = paymentGatewayEnum[2]
}else{

	var expDate = getLastDateOfMonth(v.ExpirationDate);
	
	this.AuthorizationCode = v.AuthorizationCode,
	this.CCLastFourDigits = (checkValidString(v.cardNumber))  ? v.cardNumber.substr(v.cardNumber.length - 4) : v.CCLastFourDigits,
	this.CardType = (checkValidString(v.cardType))  ? getCardNameFromType(v.cardType) : v.CardType,
	this.ExpirationDate = (checkValidString(expDate)) ? expDate : v.ExpirationDate, //1902(YYMM) - 2019-02-28T00:00:00
	this.HasToken = (checkValidString(v.Token)) ? true : false;
    this.InvoiceNumber = v.InvoiceNumber, 
    this.ReferenceNumber = v.ReferenceNumber,
    this.RequestId = v.RequestId,
    this.Token = v.Token,
    this.TokenExpirationDate = "",
    this.TransactionStatus = "Success",
    this.TransactionType = "Billing",
    this.Amount = (parseFloat(v.Amount)/100).toFixed(2),
	this.IsTrack = true,
	this.CardSignature = v.CardSignature,
	this.IsIngenicoPayment =  (checkValidString(v.IsIngenicoPayment))  ? v.IsIngenicoPayment : true,
	this.PaymentGateway = paymentGatewayEnum[3]
}
kony.print("IN CCSalePaymentDataObj 1 =="+JSON.stringify(this));

}


function getCardNameFromType(cardCode)
{
	kony.print("IN getCardNameFromType number="+cardCode);
	switch (parseInt(cardCode)) {
	case 1 : {
		return "AmericanExpress";
		break;
	}
	case 2 : {
		return "Discover";
		break;
	}
	case 3 : {
		return "MasterCard";
		break;
	}
	case 4 : {
		return "Visa";
		break;
	}
	default: {
		return "";
		break;
	}
	}
}
/*
001: Visa
002: MasterCard
003: American Express 
004: Discover
005: Diners Club
006: Carte Blanche 
007: JCB

*/
function GetCardType(number,isReturnInCode)
{
kony.print("IN GetCardType number="+number);
    // visa
    var re = new RegExp("^(?:4[0-9*]{12}(?:[0-9*]{3})?)$");
    if (number.match(re) != null)
        return isReturnInCode?"001":"Visa";

    // Mastercard and Mastercard 2-series BIN 
    //re = new RegExp("^(?:5[1-5][0-9*]{14})$");
	re = new RegExp("^(?:5[1-5][0-9*]{14})$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))[0-9*]{12}$"); // MEG-5725
    if (number.match(re) != null)
        return isReturnInCode?"002":"MasterCard";

    // AMEX
    re = new RegExp("^(?:3[47][0-9*]{13})$");
    if (number.match(re) != null)
        return isReturnInCode?"003":"AmericanExpress";

	// Discover
    re =  new RegExp("^(?:6011[0-9*]{4}|65[0-9*]{6}|22[1-9*]|(?:62212[6-9*]|6221[3-9*]|622[1-8*]|62291|62292[1-5*])[0-9*]{2})[0-9*]{8}$");
    if (number.match(re) != null)
        return isReturnInCode?"004":"Discover";
        
  /*
   * Maulik - 02/23 Stopping the support in order to not allow JCB and DinersClub
   * MEG - 2449 refer to only supported card formats
   * MEG - 5095 to refer to not supported card formats
   */
   /*
    // Diners
    re = new RegExp("^(?:3[068][0-9*]{12})$");
    if (number.match(re) != null)
        return isReturnInCode?"005":"DinersClub";
        
    // JCB
    re = new RegExp("^(?:3088|3096|3112|3158|3337)[0-9*]{12}$");
    re1 = new RegExp("^(?:35[2-8][80-99][0-9*]{4})[0-9*]{8}$");
    if (number.match(re) != null || number.match(re1) != null)
        return isReturnInCode?"007":"JCB";
	*/
	
    return "";
}

function getLastDayOfMonth(expiryDate)
{
	var expiryDateofCard=expiryDate.split("/");
 
	var lastDay = new Date(parseInt(expiryDateofCard[1]), parseInt(expiryDateofCard[0]), 0);

	var lastDayWithSlashes =   lastDay.getFullYear()+ '-' + zeroPad((lastDay.getMonth() + 1)) + '-' +(lastDay.getDate())+"T00:00:00";
				kony.print("lastDayWithSlashes ="+lastDayWithSlashes);

	return lastDayWithSlashes;
}

function zeroPad(num) {
  var zero = 2 - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}
/*
 * Credit Card Void credit web service call
 */
var voidCallBack=null;


function getCreditCardVoidWS(saleTransactionID, callBack)
{
	kony.print("::getCreditCardVoidWS:: SaleTransactnId = " + saleTransactionID);

	if(callBack)
		voidCallBack=callBack;
		
	if(creditCrardSalePaymentDataObj && creditCrardSalePaymentDataObj.IsIngenicoPayment)
	{
		voidIngenicoPayment(saleTransactionID, creditCrardSalePaymentDataObj.RequestId);
	}else{
		voidIPCPayment(saleTransactionID);// Updated to generate Merchant Ref Code
	}

}
function voidIPCPayment(saleTransactionID)
{
	kony.print("SJ--->>> Invoking getCreditCardVoidWS service == "+JSON.stringify(creditCrardSalePaymentDataObj));
		kony.print("saleTransactionID voidPaymentCallback " + saleTransactionID);
	try{
		
		var GetCreditCardAuthService_inputparam = {};
		glbMerchantReferenceCode = getMerchantReferanceCode(saleTransactionID); // added to append saletransid lat 6 char glbBackOfficerRefID + "-" + getRandomNumber(6);
		GetCreditCardAuthService_inputparam["serviceID"] = Services.voidCCTransaction;
		GetCreditCardAuthService_inputparam["CreatedTime"] = convertDateTOUTCDate();
		GetCreditCardAuthService_inputparam["ExpireTime"] = convertDateTOUTCDate(1);
		GetCreditCardAuthService_inputparam["UsernameToken"] = gblDeviceID;
		GetCreditCardAuthService_inputparam["merchantID"] = "ww_meg"; 
		GetCreditCardAuthService_inputparam["merchantReferenceCode"] = glbMerchantReferenceCode;//"meg_app"; //meetingOccId
		GetCreditCardAuthService_inputparam["currency"] = glbCurrencyType;
		GetCreditCardAuthService_inputparam["grandTotalAmount"] = creditCrardSalePaymentDataObj.Amount;
		GetCreditCardAuthService_inputparam["requestID"] = creditCrardSalePaymentDataObj.RequestId;
		
		kony.print("::getCreditCardVoidWS::GetCreditCardAuthService_inputparam = "+JSON.stringify(GetCreditCardAuthService_inputparam));
		GetCreditCardAuthServiceHandle = Network.makeServiceCall(GetCreditCardAuthService_inputparam, function(status, res){
		kony.print("In voidCreditCardCallBack" + JSON.stringify(res));
		kony.print("saleTransactionID getCreditCardVoidWSCallback " + saleTransactionID);
		try{
		if (status == 400) {
	        if (res["opstatus"] == 0) {
	        	dismissSyncLoadingScreen();
	        	var response = res; //res;
	        	
	        	kony.print("response.decision" + response.decision);
	        	kony.print("res.decision" + res.decision);
        		if(response.decision == creditCardPaymentDecisionEnum[1]){
					
					var messageText=kony.i18n.getLocalizedString("strCCTranRefund3") + " "+ glbCurrency  + parseFloat(creditCrardSalePaymentDataObj.Amount).toFixed(2)+ " " + kony.i18n.getLocalizedString("strCCTranRefund2");
					var ccObj=creditCrardSalePaymentDataObj;
					creditCrardSalePaymentDataObj=null;
					kony.print("res.requestID" + res.requestID);
					
					
					if(voidCallBack)
						voidCallBack.call(null,messageText,res.requestID);
					
					ccObj.RequestId=res.requestID;
					cyberSourceLogWS(ccObj,saleTransactionID,true);
					
				
				}else {//if(response.decision == creditCardPaymentDecisionEnum[2]){
				
					//display alert according to rejection error
					if(response.reasonCode == "202")
						displayAlert(kony.i18n.getLocalizedString("strCCInvalidDate"));
					else if(response.reasonCode == "204")
						displayAlert(kony.i18n.getLocalizedString("strCCDecline"));
					else if(response.reasonCode == "208")
						displayAlert(kony.i18n.getLocalizedString("strCCNotProcess"));
					else
						displayAlert(kony.i18n.getLocalizedString("strCCTranNotComplete"));
				}/*else if(response.decision == creditCardPaymentDecisionEnum[3]){
					displayAlert(kony.i18n.getLocalizedString("strCCTranNotComplete"));
			
					}*/
	        }else{
	        	
	        	kony.print(res['opstatus']);
	        	CommonErrHandler.networkError(res['opstatus'],res);
	        }
			
	    }
	    else if(status == 300){
			CommonErrHandler.networkError(status,resulttable);
		}
	}
	catch(e){
		GlobalException(e);
	}
}, false);
	}catch(e){
		GlobalException(e);
	}
}
function voidIngenicoPayment(saleTransactionID, transactionID) {
    	kony.print('in processIngenicoPayment='+ saleTransactionID + "-" +transactionID);
    	var merchantReferenceCode = getMerchantReferanceCode(saleTransactionID);
    	
        PairingHandlerObject.voidPayment(transactionID, merchantReferenceCode,  function(data)
	{
	if(data != null)
	{
		kony.print('voidPaymentCallback called =', data);
		kony.print('voidPaymentCallback saleTransactionID =', saleTransactionID);
		
		//alert(data);
		if(data.ResponseCode == 0 && data.ClerkDisplay.toUpperCase() == ingenicocCreditCardPaymentDecisionEnum[1]){
		   var messageText=kony.i18n.getLocalizedString("strCCTranRefund3") + " "+ glbCurrency  + parseFloat(creditCrardSalePaymentDataObj.Amount).toFixed(2)+ " " + kony.i18n.getLocalizedString("strCCTranRefund2");
					var ccObj=creditCrardSalePaymentDataObj;
					creditCrardSalePaymentDataObj=null;
					kony.print("res.requestID" + data.RequestId);
					
					
					if(voidCallBack)
						voidCallBack.call(null,messageText,data.RequestId);
					
					ccObj.RequestId=data.RequestId;
					cyberSourceLogWS(ccObj,saleTransactionID,true);
					
		}else {
			displayAlert(getErrorMessageFromIngenicoGatewayErrorcode(data.ResponseCode));
		}
	}
}
)
}

/*
function getCreditCardVoidWSCallback(status, res){
	kony.print("In voidCreditCardCallBack" + JSON.stringify(res));
	kony.print("saleTransactionID getCreditCardVoidWSCallback " + saleTransactionID);
	try{
		if (status == 400) {
	        if (res["opstatus"] == 0) {
	        	dismissSyncLoadingScreen();
	        	var response = res; //res;
	        	
	        	kony.print("response.decision" + response.decision);
	        	kony.print("res.decision" + res.decision);
        		if(response.decision == creditCardPaymentDecisionEnum[1]){
					
					var messageText=kony.i18n.getLocalizedString("strCCTranRefund3") + " "+ glbCurrency  + parseFloat(creditCrardSalePaymentDataObj.Amount).toFixed(2)+ " " + kony.i18n.getLocalizedString("strCCTranRefund2");
					var ccObj=creditCrardSalePaymentDataObj;
					creditCrardSalePaymentDataObj=null;
					kony.print("res.requestID" + res.requestID);
					
					
					if(voidCallBack)
						voidCallBack.call(null,messageText,res.requestID);
					
					ccObj.RequestId=res.requestID;
					cyberSourceLogWS(ccObj);
					
				
				}else {//if(response.decision == creditCardPaymentDecisionEnum[2]){
				
					//display alert according to rejection error
					if(response.reasonCode == "202")
						displayAlert(kony.i18n.getLocalizedString("strCCInvalidDate"));
					else if(response.reasonCode == "204")
						displayAlert(kony.i18n.getLocalizedString("strCCDecline"));
					else if(response.reasonCode == "208")
						displayAlert(kony.i18n.getLocalizedString("strCCNotProcess"));
					else
						displayAlert(kony.i18n.getLocalizedString("strCCTranNotComplete"));
				}//else if(response.decision == creditCardPaymentDecisionEnum[3]){
					//displayAlert(kony.i18n.getLocalizedString("strCCTranNotComplete"));
			
					//}
	        }else{
	        	
	        	kony.print(res['opstatus']);
	        	CommonErrHandler.networkError(res['opstatus'],res);
	        }
			
	    }
	    else if(status == 300){
			CommonErrHandler.networkError(status,resulttable);
		}
	}
	catch(e){
		GlobalException(e);
	}
}*/


/*
 * cyberSource Log  service call
 */
  
function cyberSourceLogWS(cybsResponse,saleTransactionID,isVoid)
{
	if(checkAppSettingEnable(Settings["CYBSLog"])){

	kony.print("SJ--->>> Invoking cyberSourceLogWS service" + JSON.stringify(cybsResponse));
	kony.print("cyberSourceLogWS glbMerchantReferenceCode " + glbMerchantReferenceCode);
	kony.print("cyberSourceLogWS deviceLevelTransactId " + deviceLevelTransactId);
	kony.print("cyberSourceLogWS saleTransactionID " + saleTransactionID);
	
	try{
		var cyberSourceLog_inputparam = {};
		cyberSourceLog_inputparam["serviceID"] = Services.CybersourceTransactionLog;
		cyberSourceLog_inputparam["httpheaders"] = {};
        cyberSourceLog_inputparam["httpconfigs"] = {};
		
		//** MEG 6493
	 	if(JsonService){
    		cyberSourceLog_inputparam["httpheaders"] = setRESTHeader();
  		}else {
			cyberSourceLog_inputparam["deviceID"] = gblDeviceID;
	    	cyberSourceLog_inputparam["accessToken"] = glbSPAuthToken;
	    	cyberSourceLog_inputparam["SPID"] = glbEmployeeId;
	    	cyberSourceLog_inputparam["HeaderDate"] = "";
	    	cyberSourceLog_inputparam["Source"] = gblSourceVal.toString();
	    	cyberSourceLog_inputparam["locale"] = "en-us";	    	
	    }
	    cyberSourceLog_inputparam["AuthorizationCode"] = (checkValidString(cybsResponse.AuthorizationCode)) ?cybsResponse.AuthorizationCode.toString():"0";
		cyberSourceLog_inputparam["ExpirationDate"] = (checkValidString(cybsResponse.ExpirationDate))? cybsResponse.ExpirationDate : "0";
		cyberSourceLog_inputparam["ReferenceNumber"] =  (checkValidString(cybsResponse.ReferenceNumber))?cybsResponse.ReferenceNumber.toString() : "0";
		cyberSourceLog_inputparam["RequestId"] =(checkValidString(cybsResponse.RequestId))? cybsResponse.RequestId.toString() : "0"; 
		cyberSourceLog_inputparam["Token"] = (checkValidString(cybsResponse.Token)) ?cybsResponse.Token.toString() : "0";
		cyberSourceLog_inputparam["TransactionStatus"] = "Success";
		cyberSourceLog_inputparam["TransactionType"] = (isVoid) ? "Reversal" : "Billing";
		cyberSourceLog_inputparam["EmployeeID"] = glbEmployeeId.toString();
		cyberSourceLog_inputparam["LocationID"] = glbLocationID.toString();
		cyberSourceLog_inputparam["MeetingOccrID"] = glbMeetingNum.toString();
		cyberSourceLog_inputparam["TransactionAmount"] = (checkValidString(cybsResponse.Amount)) ? cybsResponse.Amount.toString() : "0";
		
		cyberSourceLog_inputparam["MemberID"] = (isNaN(glbMemberId)) ? "0" : glbMemberId.toString(); //For Add,enroll,re-enroll this will be passed as 0 as memberid is available only after sync
		cyberSourceLog_inputparam["PaymentGateway"] = cybsResponse.PaymentGateway;
		cyberSourceLog_inputparam["ClientReferenceNumber"] = getMerchantReferanceCode(saleTransactionID);
      //**End
		//cyberSourceLog_inputparam["merchantReferenceCode"] = glbMerchantReferenceCode;
		
		var regnumber="0";
		if (IsEnrollMember == FlowForScreens.Enroll) {
	        regnumber = frmEnrollNewMember.txtMemberIDInfo.text; //Enroll Member
			kony.print("AD--->>> FLOW IsEnrollMember" + IsEnrollMember);
		}else if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
			regnumber= frmEnrollReturningMember.txtRegistrationID.text;
			kony.print("AD--->>> FLOW IsReEnrollScreen" + IsReEnrollScreen);
		}else if (IsAddIndividual == FlowForScreens.AddIndividual) {
			regnumber=frmAddIndividulaMember.txtMemberID.text;
			kony.print("AD--->>> FLOW IsAddIndividual" + IsAddIndividual);
		}else if (IsPreRegister == FlowForScreens.PreRegistered) {
			regnumber=deviceLevelPreRegNo;
			kony.print("AD--->>> FLOW IsPreRegister" + IsPreRegister);
		}else if (IsFromPM == FlowForScreens.ProcessMember) {
			regnumber=glbRegNoForProcess;
			kony.print("AD--->>> FLOW IsFromPM" + IsFromPM);
			
		}
					kony.print("AD--->>> RegistrationNumber" + regnumber+"===MemberID==="+glbMemberId.toString());
			
		cyberSourceLog_inputparam["RegistrationNumber"] = regnumber;
		cyberSourceLog_inputparam["TransactionDate"] =supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"))+"T00:00:00";//** MEG 6386
		
		kony.print("ss::cyberSourceLogWS::cyberSourceLog_inputparam = "+JSON.stringify(cyberSourceLog_inputparam));
		
		cyberSourceLogServiceHandle = Network.makeServiceCall(cyberSourceLog_inputparam, cyberSourceLogWSCallback, false);
	}catch(e){
		GlobalException(e);
	}
	}
}


function cyberSourceLogWSCallback(status, res){
	kony.print("In cyberSourceLogWSCallback" + JSON.stringify(res));
	try {
            if (status == 400) {
                kony.print("In cyberSourceLogWSCallback" + status);
                if (res["opstatus"] == 0 ) {
                   kony.print("CyberSource log uploaded ");
                } else {
                    kony.print("Error in uploading CyberSource log");
                }
            }
        } catch (e) {
            removeProgressView();
            GlobalException(e);
        }

}

function alertForManualCCprocess() {
    var alertConfig = {
    	message: kony.i18n.getLocalizedString("strNoInternet"),
        //message: "Do you want to swipe the Credit card?",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strCCManual"),
        noLabel: kony.i18n.getLocalizedString("btnCancel"),
        alertHandler: manualCCprocessHandler
    };
    var psConfig = {};
    var weightLossAlert = kony.ui.Alert(alertConfig, psConfig);
}

function manualCCprocessHandler(response)
{
	if (response == true) {
		creditCrardSalePaymentDataObj=null;
		var txtAmt = (frmPayment.txtBoxAmount.text).replace(glbCurrency, "");
		bindPaymentDataToSegment(kony.i18n.getLocalizedString("strCredit"),parseFloat(txtAmt).toFixed(2));
	}
}

function disableCreditCardAndBackBtn(val){
	if(kony.application.getCurrentForm().id == frmPayment.id){
		if(val != undefined && val != null && val != "" && val){
			frmPayment.strCredit.setEnabled(false); 
		    frmPayment.strCredit.skin = "btnNoWeighInSelected";
		    frmPayment.vbox12443534676066565.setEnabled(false);
		    frmPayment.vbox2052845472275302.setEnabled(false);
		    frmPayment.segPaymentTypeData.setEnabled(false);
          	if(IsAWSLocationEnabled())
              {
                var paymentData = frmPayment.segPaymentTypeData.data;
                var paymentDataLength = (checkValidString(paymentData))?paymentData.length:0;
                var outstandingBalValue = parseFloat(removeCurrency(frmPayment.lblOutstandingBalInfo.text));
                kony.print("paymentDataLength " + paymentDataLength);
                kony.print("outstandingBalValue " + outstandingBalValue);
                if(paymentDataLength > 1 || outstandingBalValue == 0)
            		setEnabledDisabledButton(false,"btnNoWeighInSelected"); //** MEG 6193
              }
		}else{
			frmPayment.strCredit.setEnabled(true); 
			frmPayment.strCredit.skin = "btnwwtxtCompleteProcessMember";
			frmPayment.vbox12443534676066565.setEnabled(true);
			frmPayment.vbox2052845472275302.setEnabled(true);
			frmPayment.segPaymentTypeData.setEnabled(true);
		}
	}
}

function stopTimerAndDisableSled()
{
	swipeSuccuss = false;
	try{	
			kony.timer.cancel("CCTimer");
			if(isScannerConnected)
				CardScannerObject.stopScanning(scannerDisconnedted);
	}catch(e){
		kony.print("Exception in opening scan FFI");
	}
}

/*
 * Credit Card Reader Validation Log  web service call
 */
function sendMSRValidatedData(msrInfo)
{
	try{
		var msrVaidateService_inputparam = {};
		msrVaidateService_inputparam["serviceID"] = Services.PeripheralStatusLog;
		//** MEG 6493
	 	if(JsonService){
    		msrVaidateService_inputparam["httpheaders"] = setRESTHeader();
  		}else {			
			msrVaidateService_inputparam["accessToken"] = glbSPAuthToken;
	    	msrVaidateService_inputparam["SPID"] = glbEmployeeId;
	    	msrVaidateService_inputparam["HeaderDate"] = "";
	    	msrVaidateService_inputparam["Source"] = gblSourceVal.toString();
		
		}
		msrVaidateService_inputparam["deviceID"] = gblDeviceID;
		msrVaidateService_inputparam["LocationID"] = msrInfo.LocationID;
		msrVaidateService_inputparam["EmployeeID"] = msrInfo.EmployeeID;
		msrVaidateService_inputparam["MetaInfo"] = msrInfo.data;
		msrVaidateService_inputparam["PeripheralType"] = msrInfo.deviceType;
		msrVaidateService_inputparam["Status"] = msrInfo.isReady;
		//**End
		kony.print("::sendMSRValidatedData::msrVaidateService_inputparam = "+JSON.stringify(msrVaidateService_inputparam));
		sendMSRValidatedDataServiceHandle = Network.makeServiceCall(msrVaidateService_inputparam, sendMSRValidatedDataCallBack, false);
	}catch(e){
		GlobalException(e);
	}
}

function sendMSRValidatedDataCallBack(status, res){
	kony.print("In sendMSRValidatedDataCallBack" + JSON.stringify(res));
	try{
		if (status == 400) {
	        if (res["opstatus"] == 0) {	        	
	        		kony.print("In sendMSRValidatedDataCallBack response" + JSON.stringify(res));
	        		kony.store.removeItem("msrInfo");
	        }else{
	        	kony.print(res['opstatus']);
	        	CommonErrHandler.networkError(res['opstatus'],res);
	        }
	    }
	    else if(status == 300){
			CommonErrHandler.networkError(status,resulttable);
		}
	}
	catch(e){
		GlobalException(e);
	}
	
}
