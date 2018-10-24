//function checkUndefined(val){
//    if(val==null || val+""=="undefined" || val=="" || val == undefined)
//        return "";
//    else
//        return val+"";	
//}

function checkDifferenceAmount(amount) {
	kony.print("checkDifferenceAmount amount : "+amount);
	kony.print("checkDifferenceAmount addDollar : "+addDollar("0.00"));
    if (amount == addDollar("0.00") || amount == addDollar("0")) {
        return true;
    }
    return false;
}

function checkDifference() {
    var lblDiffCash = frmTallyMeetingCashout.lblDiffCash.text;
    var lblDiffChecks = frmTallyMeetingCashout.lblDiffChecks.text;
    var lblDiffCreditCard = frmTallyMeetingCashout.lblDiffCreditCard.text;
    var lblDiffCreditSlipsRedeemed = frmTallyMeetingCashout.lblDiffCreditSlipsRedeemed.text;
    var lblDiffCreditSlipsIssued = frmTallyMeetingCashout.lblDiffCreditSlipsIssued.text;
    var lblDiffDebitCard = frmTallyMeetingCashout.lblDiffDebitCard.text;
	kony.print("lblDiffCash : "+lblDiffCash);
	kony.print("lblDiffChecks : "+lblDiffChecks);
	kony.print("lblDiffCreditCard : "+lblDiffCreditCard);
	kony.print("lblDiffCreditSlipsRedeemed : "+lblDiffCreditSlipsRedeemed);
	kony.print("lblDiffCreditSlipsIssued : "+lblDiffCreditSlipsIssued);
	kony.print("lblDiffDebitCard : "+lblDiffDebitCard);
    if (checkDifferenceAmount(lblDiffCash) && checkDifferenceAmount(lblDiffCreditCard) && checkDifferenceAmount(lblDiffCreditSlipsRedeemed) && checkDifferenceAmount(lblDiffCreditSlipsIssued) && ((in_array(deviceLocale,Countries["CA"])) ? (checkDifferenceAmount(lblDiffDebitCard)) : (checkDifferenceAmount(lblDiffChecks)))) {
        checkDifferenceFlag = false;
		kony.print("Setting checkDifferenceFlag : "+checkDifferenceFlag);
        //Reset Mismatch reason variable value
        tallyMismatchReason = 0;
        popupOutOfBalance.lblReason.text = "";
        popupOutOfBalanceReason.pickerviewTallyMismatchReasons.selectedKeys = ["1"];
    } else {
        checkDifferenceFlag = true;
        kony.print("Setting checkDifferenceFlag : "+checkDifferenceFlag);
    }
}

//This function removes comma(,) from In my bank amount entered
function removeCommaFromInMyBankTextBox(textBox) {
	if(deviceLocale != "fr_CA"){
	    if (frmTallyMeetingCashout[textBox].text.indexOf(",") != -1) {
	        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
	        frmTallyMeetingCashout[textBox].text = frmTallyMeetingCashout[textBox].text.replace(",", "");
	    }
	}else{
		if (frmTallyMeetingCashout[textBox].text.indexOf(".") != -1) {
	        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
	        frmTallyMeetingCashout[textBox].text = frmTallyMeetingCashout[textBox].text.replace(".", "");
	    }
	    if((frmTallyMeetingCashout[textBox].text.match(/,/g) || []).length > 1) {
	    	//alertForMessages("Please enter valid amount");
	    	frmTallyMeetingCashout[textBox].text = frmTallyMeetingCashout[textBox].text.substring(0, frmTallyMeetingCashout[textBox].text.length - 1);
	    	kony.print("input value"+frmTallyMeetingCashout[textBox].text);
	    }
	}
}

//This function removes comma(,) & .(Dot) from Bank Deposit slip number entered
function removeCommaAndDotFromDepositSliNumberTextBox() {
	
    if (frmTallyMeetingCashout.txtBankDepositSlipNumber.text.indexOf(",") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlipNumber.text = frmTallyMeetingCashout.txtBankDepositSlipNumber.text.replace(",", "");
    }

    if (frmTallyMeetingCashout.txtBankDepositSlipNumber.text.indexOf(".") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlipNumber.text = frmTallyMeetingCashout.txtBankDepositSlipNumber.text.replace(".", "");
    }
}

//This function is called on OnTextChange event of 'In my bank' textboxes
function eventOnTextChangeInMyBankTextboxes(inMyBankAmount, megDrawerAmount, lblDifference) {
    inMyBankAmount = inMyBankAmount.replace(",", ".");
    megDrawerAmount = megDrawerAmount.replace(",", ".");
    kony.print("megDrawerAmount : "+inMyBankAmount);
    kony.print("megDrawerAmount : "+inMyBankAmount);
    if (inMyBankAmount !== null && inMyBankAmount !== undefined && inMyBankAmount.trim() !== "" && inMyBankAmount.trim() !== "." && megDrawerAmount !== null && megDrawerAmount !== undefined && megDrawerAmount !== "") {
        var difference = parseFloat(inMyBankAmount) - parseFloat(megDrawerAmount);
        kony.print("difference : "+difference);
        if (lblDifference)
            frmTallyMeetingCashout[lblDifference].text = addCurrency(parseFloat(difference).toFixed(2));
    } else {
        //Reset the Difference Label value
        frmTallyMeetingCashout[lblDifference].text = "";
    }
    checkDifference();
    checkContinueState();
}

//Form postShow - This function is for deciding Continue button state enabled/disabled
function checkContinueState() {

    if (in_array(deviceLocale,Countries["CA"])) {
        frmTallyMeetingCashout.hboxDebitCard.isVisible = true;
        frmTallyMeetingCashout.hboxCheck.isVisible = false;
        frmTallyMeetingCashout.hboxCreditCard.skin="hboxLightGrey";
        frmTallyMeetingCashout.vbox1388753862114429.skin="vboxLightGreyCashOut";
    } else {
        frmTallyMeetingCashout.hboxDebitCard.isVisible = false;
        frmTallyMeetingCashout.hboxCheck.isVisible = true;
        frmTallyMeetingCashout.hboxCreditCard.skin="";
        frmTallyMeetingCashout.vbox1388753862114429.skin="vboxGreyForCashOut";
        
    }

    var txtCash = frmTallyMeetingCashout.txtCash.text;
    var txtChecks = frmTallyMeetingCashout.txtChecks.text;
    var txtCreditCard = frmTallyMeetingCashout.txtCreditCard.text;
    var txtCreditSlipsIssued = frmTallyMeetingCashout.txtCreditSlipsIssued.text;
    var txtCreditSlipsRedeemed = frmTallyMeetingCashout.txtCreditSlipsRedeemed.text;
    var txtDebitCard = frmTallyMeetingCashout.txtDebitCard.text;


    if (validateInMyBankValues(txtCash) && validateInMyBankValues(txtCreditSlipsRedeemed) && validateInMyBankValues(txtCreditSlipsIssued) && validateInMyBankValues(txtCreditCard) && ((in_array(deviceLocale,Countries["CA"])) ? (validateInMyBankValues(txtDebitCard)) : (validateInMyBankValues(txtChecks)))) {
        frmTallyMeetingCashout.btnContinue.skin = "btnwwtxtSearchLocation";
        frmTallyMeetingCashout.btnContinue.setEnabled(true);
    } else {
        frmTallyMeetingCashout.btnContinue.skin = "btnNoWeighInSelected";
        frmTallyMeetingCashout.btnContinue.setEnabled(false);
    }
    setAsterikVisibilityInCashout();
    //Check if You are coming back from flow and Number of banks are changed there.
    frmTallyMeetingCashout.lblBanks.text = glbNumberOfBanks;
}

function setAsterikVisibilityInCashout() {
    //When no checks and cash so bank slip not required - remove asterik
    var tempCheck;


    if ((frmTallyMeetingCashout.txtCash.text != null && parseFloat(frmTallyMeetingCashout.txtCash.text) > 0) || ((in_array(deviceLocale,Countries["CA"])) ? (false) : (frmTallyMeetingCashout.txtChecks.text != null && parseFloat(frmTallyMeetingCashout.txtChecks.text) > 0))) {
        frmTallyMeetingCashout.lblAsterik.setVisibility(true);
    } else {
        frmTallyMeetingCashout.lblAsterik.setVisibility(false);
    }
}
//This function is used to validate 'In My Bank' textbox values
function validateInMyBankValues(str) {
    if (str == undefined || str == null || str == '' || str.trim() == '.') {
        return false;
    } else {
        return true;
    }
}

//Form postShow - This function is used to bind meeting & Location data initially
function bindMeetingAndLocationData() {


    setBankDepositTextLength();
    //PreFill Number Of banks
    var popupbanks = [];
    var temp = [];
    for (var i = 0; i < NUMBER_OF_BANKS; i++) {
        temp.push([i, i + 1]);
    }
    temp.push(60);
    popupbanks.push(temp);
    popupNumberOfBanks.pickerBanks.masterData = popupbanks;

    //Meeting Data on top header
    frmTallyMeetingCashout.lblTitle.text = kony.i18n.getLocalizedString("strLblTallyMeeting") + ": " + glbCurrentMeetingValue + " -- " + kony.i18n.getLocalizedString("strLblCashout");

    //Date in MM/dd/yy format
    meetingDate = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//supportTime( new Date(glbMeetingDate), "", "mm/dd/yy");
    frmTallyMeetingCashout.lblDate.text = meetingDate;

    //DayTime Code
    frmTallyMeetingCashout.lblDaytimeCode.text = glbDayTimeCodeID;

    //Location Number
    frmTallyMeetingCashout.lblLocationNumber.text = glbLocationNum;

    //MEG Drawer amounts
    boTallyMeetingCashout.fetchMEGDrawerDataForPaymentModesCashCheckCreditCard(parseInt(glbMeetingNum), glbEmployeeId, fetchMEGDrawerDataForPaymentModesCashCheckCreditCardResponse);
}

//This function binds the MEG drawer data For Cash,Checks and Credit cards
function fetchMEGDrawerDataForPaymentModesCashCheckCreditCardResponse(response) {
    //Bind drawer values
    kony.print("::fetchMEGDrawerDataForPaymentModesCashCheckCreditCardResponse::response=" + JSON.stringify(response));
    for (var i in response) {
        var record = response[i];
        var amount = "0.00";
        var paymentType = record.Type;

        if (kony.sync.getString(record.amount) != null || kony.sync.getString(record.amount) != undefined) {
            amount = parseFloat(kony.sync.getString(record.amount)).toFixed(2);
            if (amount == 0 || Math.abs(amount) == 0) {
                amount = "0.00"; // When Amount is 0 - we want as 0.00 because Math.abs converts it to 0
            }
        }
		amount = displayPriceByLocale(amount);
        if (paymentType == PaymentType[1]) //Cash
        {
            frmTallyMeetingCashout.lblMEGCash.text = amount.toString();
        } else if (paymentType == PaymentType[2]) //Check
        {
            frmTallyMeetingCashout.lblMEGChecks.text = amount.toString();
        } else if (paymentType == PaymentType[13]) //CreditCard
        {
            frmTallyMeetingCashout.lblMEGCreditCard.text = amount.toString();
        } else if (paymentType == PaymentType[7]) // debit card
        {
            frmTallyMeetingCashout.lblMEGDebit.text = amount.toString();
        }

    }
    boTallyMeetingCashout.fetchMEGDrawerDataForPaymentModesCreditSlips(parseInt(glbMeetingNum), glbEmployeeId, fetchMEGDrawerDataForPaymentModeCreditSlipsResponse);
}

//This function binds the MEG drawer data For Credit Slips
function fetchMEGDrawerDataForPaymentModeCreditSlipsResponse(response) {
    //Bind drawer values
    for (var i in response) {
        var record = response[i];
        var amount = "0.00";
        var isRefundAmount = kony.sync.getString(record.RefundAmount);

        if (kony.sync.getString(record.amount) != null || kony.sync.getString(record.amount) != undefined) {
            amount = parseFloat(kony.sync.getString(record.amount)).toFixed(2);
        }

        if (isRefundAmount == 1) //Credit slips Issued
        {
            //Used absolute value as For Credit slip issued(product return case) negative Amounts are stored in DB 
            frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text = displayPriceByLocale(parseFloat(Math.abs(amount)).toFixed(2));
        } else //Credit slips Redeemed
        {
            /*
    		If value of field 'RefundAmount' is anything other than 1, 
			its Credit Slip Redeemed
			*/
            frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text = displayPriceByLocale(parseFloat(amount).toFixed(2));
        }
    }
    MEGTotalCalcultaion();
}

//This function is used to calculate Total of all MEG Drawer amount
function MEGTotalCalcultaion() {
    /*
    	Checks if there is any difference in the Bank, 
    	if yes then it sets this flag and a popup is shown for enetering the reason
    	if no then navigate to timesheet field
    */

    checkDifferenceFlag = false;
    var amount;
    if (in_array(deviceLocale,Countries["CA"])) {
        amount = parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCash.text)) + parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGDebit.text)) + parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCreditCard.text)) + parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text)) - parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text));
    } else {
        amount = parseFloat(frmTallyMeetingCashout.lblMEGCash.text) + parseFloat(frmTallyMeetingCashout.lblMEGChecks.text) + parseFloat(frmTallyMeetingCashout.lblMEGCreditCard.text) + parseFloat(frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text) - parseFloat(frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text);
    }
    frmTallyMeetingCashout.lblMEGTotal.text = displayPriceByLocale(parseFloat(amount).toFixed(2));
}

//This function is called on Continue button tap
function eventonclickNavigatetoTimeSheet() {
    valid = new validationcls();

    if (in_array(deviceLocale,Countries["CA"])) {
        var res = valid.checkForRequiredFields(frmTallyMeetingCashout.txtCash.text).checkForRequiredFields(frmTallyMeetingCashout.txtDebitCard.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsIssued.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsRedeemed.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditCard.text).isValid();
    } else if (in_array(deviceLocale,Countries["US"])) {
        var res = valid.checkForRequiredFields(frmTallyMeetingCashout.txtCash.text).checkForRequiredFields(frmTallyMeetingCashout.txtChecks.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditCard.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsIssued.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsRedeemed.text).isValid();
    }
    if (res) {
    	var cash = frmTallyMeetingCashout.txtCash.text;
    	if((cash != null) || (cash != undefined))
    		cash = cash.replace(",", ".");
    	var check = frmTallyMeetingCashout.txtChecks.text;
    	if((check != null) || (check != undefined))
    		check = check.replace(",", ".");
        //Validate Bank deposit slip number if Cash or Check amount entered
        if (frmTallyMeetingCashout.lblBanks.text == null || frmTallyMeetingCashout.lblBanks.text.length == 0) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgTallyBanksCollectedRequired"));
        } else if (parseInt(frmTallyMeetingCashout.lblBanks.text) <= 0) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgTallyEnterValidBanks"));
        } else if ((frmTallyMeetingCashout.txtCash.text != null && parseFloat(cash) > 0 || frmTallyMeetingCashout.txtChecks.text != null && parseFloat(check) > 0) || (frmTallyMeetingCashout.txtBankDepositSlipNumber.text != "")) {
            kony.print("Validate Bank Deposit Slip number :: here");
            var bankDepositNumber = frmTallyMeetingCashout.txtBankDepositSlipNumber.text;
            if (in_array(deviceLocale,Countries["CA"])) {
                bankDepositNumber = bankDepositNumber.replace(/^0+/, '');
            }
            //Validate Bank deposit slip number
            if ((frmTallyMeetingCashout.txtBankDepositSlipNumber.text == null) || (in_array(deviceLocale,Countries["CA"]) ? (frmTallyMeetingCashout.txtBankDepositSlipNumber.text.length == 0 || bankDepositNumber.length == 0) : (frmTallyMeetingCashout.txtBankDepositSlipNumber.text.length != 9))) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgDepositSlipNumberRequired"));
            } else {
                //9 digit slip number is entered, validate it now via service

                //To bypass service THIS IS TEMP
                //validateBankDepositSlipNumberViaWSCallBack(null,true);
                //validationsSuccess();

                //Via Service - Uncomment this when service available
                if (checkIfNetworkIsAvailable()) {
                    //Show Progress View
                    displayProgressView();
                    boTallyMeetingCashout.validateBankDepositSlipNumberViaWS(parseInt(glbMeetingNum), glbMeetingDate, bankDepositNumber, validateBankDepositSlipNumberViaWSCallBack);
                } else {
                    //In offline mode Deposit slip number will not be validated by service
                    validationsSuccess();

                    //alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
                }
            }
        } else {
            validationsSuccess();
        }
    }
}

//This function is Bank deposit slip number service response 
function validateBankDepositSlipNumberViaWSCallBack(isValidDepositNumber) {
    //Hide Progress View
    removeProgressView();

    if (isValidDepositNumber) {
        //Proceed further
        validationsSuccess();
    } else {
        if (in_array(deviceLocale,Countries["CA"])) {
            validationsSuccess();
        } else {
            //Show Invalid Bank deposit slip number error Alert
            var messageText = kony.i18n.getLocalizedString("strMsgInvalidDepositSlipNumber");
            var basicConf = {
                message: messageText,
                alertType: constants.ALERT_TYPE_ERROR,
                alertTitle: getLocalizedString("strLblError"),
                okLabel: getLocalizedString("strLblOk")
            };
            //Defining pspConf parameter for alert
            var pspConf = {};

            //Alert definition
            var errAlert = kony.ui.Alert(basicConf, pspConf);

        }
    }
}

//This function is called when all validations are passed
function validationsSuccess() {
	kony.print("checkDifferenceFlag :"+checkDifferenceFlag);
    if (checkDifferenceFlag) {
        eventonClickhboxOutofBalanceSection();
    } else {
        //---------Delete Cashout record from DB START--------------

        var whrClause = " where MeetingId = " + glbMeetingNum + " and MeetingDate = '" + glbMeetingDate + "'";
        boTallyMeetingCashout.deleteTallyCashout(whrClause, deleteTallyCashoutResponse);

        //---------Delete Cashout record from DB END--------------
    }
}

//This function is deleteTallyCashout response 
function deleteTallyCashoutResponse() {
    //---------Select Id from TallyMeeting Table START--------------

    boTallyMeetingCashout.selectMaxIdFromTable("TallyMeeting", selectMaxIdFromTableResponse);

    //---------Select Id from TallyMeeting Table END--------------
}

//This function is Select Id from TallyMeeting response 
function selectMaxIdFromTableResponse(response) {
    kony.print(":: selectMaxIdFromTableResponse:: 11 :: ");
    //---------Insert Cashout record to DB START--------------

    //Prepare Cashout Data to insert into DB
    var Id = response;


    var meetingId = parseInt(glbMeetingNum);
    var cash = convertPriceToSaveByLocale(frmTallyMeetingCashout.txtCash.text);
    
    //Maulik - 08/22/2016 - Sending check as 0 instead of blank value for en-CA locale for REST APIs as it was erroring out with blank value
    var checks = (in_array(deviceLocale,Countries["CA"])) ? 0 : frmTallyMeetingCashout.txtChecks.text; //frmTallyMeetingCashout.txtChecks.text; 
    var creditCard = convertPriceToSaveByLocale(frmTallyMeetingCashout.txtCreditCard.text);
    var creditSlipsRedeemed = convertPriceToSaveByLocale(frmTallyMeetingCashout.txtCreditSlipsRedeemed.text);
    var creditSlipsIssued = convertPriceToSaveByLocale(frmTallyMeetingCashout.txtCreditSlipsIssued.text);
    
    //Maulik - 08/19/2016 - Sending DebitCardInteract as 0 instead of "" as REST APIs error out with a null value
    var DebitCardInteract = (in_array(deviceLocale,Countries["CA"])) ? convertPriceToSaveByLocale(frmTallyMeetingCashout.txtDebitCard.text) : 0;

    var bankCollected = glbNumberOfBanks;
    var bankDepositSlipNumber = (in_array(deviceLocale,Countries["CA"]) ? frmTallyMeetingCashout.txtBankDepositSlipNumber.text.replace(/^0+/, '') : frmTallyMeetingCashout.txtBankDepositSlipNumber.text);
    var differenceReason = tallyMismatchReason;

    if (in_array(deviceLocale,Countries["CA"])) {
        var totalDifference = parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCash.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditCard.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffDebitCard.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsRedeemed.text)) - parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsIssued.text));
    } else {
        var totalDifference = parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCash.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffChecks.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditCard.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsRedeemed.text)) - parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsIssued.text));
    }
    var differenceAmount = parseFloat(totalDifference).toFixed(2);
    var meetingDate = glbMeetingDate;

    //Prepare Cashout data object
    var cashoutObj = [{
        "Id": Id,
        "MeetingId": meetingId,
        "Cash": cash,
        "Checks": checks,
        "CreditCard": creditCard,
        "CreditSlipsRedeemed": creditSlipsRedeemed,
        "CreditSlipsIssued": creditSlipsIssued,
        "BankCollected": bankCollected,
        "BankDepositSlipNumber": bankDepositSlipNumber,
        "DifferenceReason": differenceReason,
        "DifferenceAmount": differenceAmount,
        "MeetingDate": meetingDate,
        "DebitCardInteract": DebitCardInteract
    }];

    //Insert Cashout data in DB
    boTallyMeetingCashout.insertTallyCashout(cashoutObj, false);

    //---------Insert Cashout record to DB END--------------

    //Show Timesheet form
    if (kony.application.getCurrentForm().id == frmTallyMeetingCashout.id) frmTallyMeetingTimeSheet.show();

}

//on preShow - to start scanner
function onpreShowfrmTallyMeetingCashoutStartBarcodeScanner() {
    //set value of global flow variable
    IsTallyCashout = FlowForScreens.TallyCashout;

    //start barcode scanner
    startBarcodeForSubID();
}

//onHide & onDestroy - to stop scanner 
function onHideAndOnDestroyfrmTallyMeetingCashoutStopBarcodeScanner() {
    //reset value of global flow variable
    IsTallyCashout = "";

    try {
        //Creates an object of class 'BarcodeScanner'
        var ScanBarcodeFFIObject = new com.weightwatchers.barcodescanner.ScanBarcodeFFI();
        //Invokes method 'stopScan' on the object
        ScanBarcodeFFIObject.stopScanner(
            /**Function*/
            stopScannerCallback);
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in closing scan FFI");
    }
}
//----------------------Barcode related Methods End----------------------


//Number Of Banks popup
function onClickNumberOfBanksSelect() {
    popupNumberOfBanks.hboxLabelUpdate.isVisible = false;
    //popupNumberOfBanks.pickerBanks.setSelectedKeyInComponent("Featured", 0);
    var context = {
        "widget": kony.application.getCurrentForm().hboxNumberOfBanks,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    popupNumberOfBanks.setContext(context);
    //if(checkValidString(glbNumberOfBanks))popupNumberOfBanks.pickerBanks.selectedKeys = [parseInt(glbNumberOfBanks)-1];

    popupNumberOfBanks.show();
    if (checkValidString(glbNumberOfBanks)) popupNumberOfBanks.pickerBanks.selectedKeys = [parseInt(glbNumberOfBanks) - 1];

}

function onSaveNumberOfBanks() {
    if (kony.application.getCurrentForm().id == frmTallyMeetingCashout.id) {
        var selectedBanks = popupNumberOfBanks.pickerBanks.selectedKeyValues;
        kony.print("selectedBanks=" + JSON.stringify(selectedBanks));
        var selectedBank = selectedBanks[0][1];
        kony.print("selectedBank=" + JSON.stringify(selectedBank));
        frmTallyMeetingCashout.lblBanks.text = selectedBank;
        glbNumberOfBanks = selectedBank;
    } else { // Report Update

        var selectedBanks = popupNumberOfBanks.pickerBanks.selectedKeyValues;
        kony.print("selectedBanks=" + JSON.stringify(selectedBanks));
        var selectedBank = selectedBanks[0][1];
        kony.print("selectedBank=" + JSON.stringify(selectedBank));
        frmTallyMeetingCashout.lblBanks.text = selectedBank;
        glbNumberOfBanks = selectedBank;
        var whrClause = " where MeetingId = " + glbMeetingNum + " and MeetingDate = '" + glbMeetingDate + "'";
        boTallyMeetingCashout.deleteTallyCashout(whrClause, deleteTallyCashoutResponse);
        frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_checked.png";
        frmTallyMeetingReport.btnSubmit.skin = "btnwwtxtSearchLocation";
        frmTallyMeetingReport.btnSubmit.setEnabled(true);

    }

    popupNumberOfBanks.dismiss();
}


function setBankDepositTextLength() {
    if (in_array(deviceLocale,Countries["CA"])) {
        frmTallyMeetingCashout.txtBankDepositSlipNumber.maxTextLength = 6;
    } else {
        frmTallyMeetingCashout.txtBankDepositSlipNumber.maxTextLength = 9;
    }
}
