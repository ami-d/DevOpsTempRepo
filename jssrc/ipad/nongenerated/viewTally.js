//function checkUndefined(val){
//    if(val==null || val+""=="undefined" || val=="" || val == undefined)
//        return "";
//    else
//        return val+"";	
//}
function checkDifferenceAmount(amount) {
    kony.print("checkDifferenceAmount amount : " + amount);
    kony.print("checkDifferenceAmount addDollar : " + addDollar("0.00"));
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
    kony.print("lblDiffCash : " + lblDiffCash);
    kony.print("lblDiffChecks : " + lblDiffChecks);
    kony.print("lblDiffCreditCard : " + lblDiffCreditCard);
    kony.print("lblDiffCreditSlipsRedeemed : " + lblDiffCreditSlipsRedeemed);
    kony.print("lblDiffCreditSlipsIssued : " + lblDiffCreditSlipsIssued);
    kony.print("lblDiffDebitCard : " + lblDiffDebitCard);
    if (checkDifferenceAmount(lblDiffCash) && checkDifferenceAmount(lblDiffCreditCard) && checkDifferenceAmount(lblDiffCreditSlipsRedeemed) && checkDifferenceAmount(lblDiffCreditSlipsIssued) && ((in_array(deviceLocale, Countries["CA"])) ? (checkDifferenceAmount(lblDiffDebitCard)) : (checkDifferenceAmount(lblDiffChecks)))) {
        checkDifferenceFlag = false;
        kony.print("Setting checkDifferenceFlag : " + checkDifferenceFlag);
        //Reset Mismatch reason variable value
        tallyMismatchReason = 0;
        popupOutOfBalance.lblReason.text = "";
        popupOutOfBalanceReason.pickerviewTallyMismatchReasons.selectedKeys = ["1"];
    } else {
        checkDifferenceFlag = true;
        kony.print("Setting checkDifferenceFlag : " + checkDifferenceFlag);
    }
}
//This function removes comma(,) from In my bank amount entered
function removeCommaFromInMyBankTextBox(textBox) {
    if (deviceLocale != "fr_CA") {
        if (frmTallyMeetingCashout[textBox].text.indexOf(",") != -1) {
            alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
            frmTallyMeetingCashout[textBox].text = frmTallyMeetingCashout[textBox].text.replace(",", "");
        }
    } else {
        if (frmTallyMeetingCashout[textBox].text.indexOf(".") != -1) {
            alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
            frmTallyMeetingCashout[textBox].text = frmTallyMeetingCashout[textBox].text.replace(".", "");
        }
        if ((frmTallyMeetingCashout[textBox].text.match(/,/g) || []).length > 1) {
            //alertForMessages("Please enter valid amount");
            //frmTallyMeetingCashout[textBox].text = frmTallyMeetingCashout[textBox].text.substring(0, frmTallyMeetingCashout[textBox].text.length - 1);
            frmTallyMeetingCashout[textBox].text = frmTallyMeetingCashout[textBox].text.replace(/,([^,]*)$/, '$1')
            kony.print("input value" + frmTallyMeetingCashout[textBox].text);
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

function removeCommaAndDotFromSplitDepositSliNumberTextBox() {
    if (frmTallyMeetingCashout.txtBankDepositSlip1No.text.indexOf(",") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlip1No.text = frmTallyMeetingCashout.txtBankDepositSlip1No.text.replace(",", "");
    }
    if (frmTallyMeetingCashout.txtBankDepositSlip1No.text.indexOf(".") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlip1No.text = frmTallyMeetingCashout.txtBankDepositSlip1No.text.replace(".", "");
    }
    if (frmTallyMeetingCashout.txtBankDepositSlip2No.text.indexOf(",") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlip2No.text = frmTallyMeetingCashout.txtBankDepositSlip2No.text.replace(",", "");
    }
    if (frmTallyMeetingCashout.txtBankDepositSlip2No.text.indexOf(".") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlip2No.text = frmTallyMeetingCashout.txtBankDepositSlip2No.text.replace(".", "");
    }
    if (frmTallyMeetingCashout.txtBankDepositSlip3No.text.indexOf(",") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlip3No.text = frmTallyMeetingCashout.txtBankDepositSlip3No.text.replace(",", "");
    }
    if (frmTallyMeetingCashout.txtBankDepositSlip3No.text.indexOf(".") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        frmTallyMeetingCashout.txtBankDepositSlip3No.text = frmTallyMeetingCashout.txtBankDepositSlip3No.text.replace(".", "");
    }
}
//This function is called on OnTextChange event of 'In my bank' textboxes
function eventOnTextChangeInMyBankTextboxes(inMyBankAmount, megDrawerAmount, lblDifference) {
    inMyBankAmount = inMyBankAmount.replace(",", ".");
    megDrawerAmount = megDrawerAmount.replace(",", ".");
    kony.print("megDrawerAmount : " + inMyBankAmount);
    kony.print("megDrawerAmount : " + inMyBankAmount);
    if (inMyBankAmount !== null && inMyBankAmount !== undefined && inMyBankAmount.trim() !== "" && inMyBankAmount.trim() !== "." && megDrawerAmount !== null && megDrawerAmount !== undefined && megDrawerAmount !== "") {
        var difference = parseFloat(inMyBankAmount) - parseFloat(megDrawerAmount);
        kony.print("difference : " + difference);
        if (lblDifference) frmTallyMeetingCashout[lblDifference].text = addCurrency(parseFloat(difference).toFixed(2));
    } else {
        //Reset the Difference Label value
        frmTallyMeetingCashout[lblDifference].text = "";
    }
    checkDifference();
    checkContinueState();
}
//Form postShow - This function is for deciding Continue button state enabled/disabled
function checkContinueState() {
    if (in_array(deviceLocale, Countries["CA"])) {
        frmTallyMeetingCashout.hboxDebitCard.isVisible = true;
        frmTallyMeetingCashout.hboxCheck.isVisible = false;
        frmTallyMeetingCashout.hboxCreditCard.skin = "hboxLightGrey";
        frmTallyMeetingCashout.vbox1388753862114429.skin = "vboxLightGreyCashOut";
    } else {
        frmTallyMeetingCashout.hboxDebitCard.isVisible = false;
        frmTallyMeetingCashout.hboxCheck.isVisible = true;
        frmTallyMeetingCashout.hboxCreditCard.skin = "";
        frmTallyMeetingCashout.vbox1388753862114429.skin = "vboxGreyForCashOut";
    }
    var txtCash = frmTallyMeetingCashout.txtCash.text;
    var txtChecks = frmTallyMeetingCashout.txtChecks.text;
    var txtCreditCard = frmTallyMeetingCashout.txtCreditCard.text;
    var txtCreditSlipsIssued = frmTallyMeetingCashout.txtCreditSlipsIssued.text;
    var txtCreditSlipsRedeemed = frmTallyMeetingCashout.txtCreditSlipsRedeemed.text;
    var txtDebitCard = frmTallyMeetingCashout.txtDebitCard.text;
    if (validateInMyBankValues(txtCash) && validateInMyBankValues(txtCreditSlipsRedeemed) && validateInMyBankValues(txtCreditSlipsIssued) && validateInMyBankValues(txtCreditCard) && ((in_array(deviceLocale, Countries["CA"])) ? (validateInMyBankValues(txtDebitCard)) : (validateInMyBankValues(txtChecks)))) {
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
    if ((frmTallyMeetingCashout.txtCash.text != null && parseFloat(frmTallyMeetingCashout.txtCash.text) > 0) || ((in_array(deviceLocale, Countries["CA"])) ? (false) : (frmTallyMeetingCashout.txtChecks.text != null && parseFloat(frmTallyMeetingCashout.txtChecks.text) > 0))) {
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
    //**MEG 7248
    if (deviceLocale == "en_US") NUMBER_OF_BANKS = 10;
    else NUMBER_OF_BANKS = 5;
    //**End
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
    if (in_array(deviceLocale, Countries["CA"])) {
        amount = parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCash.text)) + parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGDebit.text)) + parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCreditCard.text)) + parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text)) - parseFloat(convertPriceToSaveByLocale(frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text));
    } else {
        amount = parseFloat(frmTallyMeetingCashout.lblMEGCash.text) + parseFloat(frmTallyMeetingCashout.lblMEGChecks.text) + parseFloat(frmTallyMeetingCashout.lblMEGCreditCard.text) + parseFloat(frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text) - parseFloat(frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text);
    }
    frmTallyMeetingCashout.lblMEGTotal.text = displayPriceByLocale(parseFloat(amount).toFixed(2));
    /*
     * if location is AWS then retrieve subsidyAmount for the transactions.
     */
    kony.print("::AWS::here");
    if (IsAWSLocationEnabled()) {
        frmTallyMeetingCashout.hboxSubsidy.setVisibility(true);
        kony.print("::IN AWS::here");
        boTallyMeetingCashout.fetchMEGDrawerDataForTotalSubsidyAmount(parseInt(glbMeetingNum), glbEmployeeId, displaySubsidyAmount);
    } else {
        frmTallyMeetingCashout.hboxSubsidy.setVisibility(false);
        frmTallyMeetingCashout.lblSubsidyTotal.text = "";
        displayAWSBankDepositeSlip(false, 0); //AD - Remove muliple bank deposit entry for the non-aws location. STR- empty tally for non aws location after visiting aws location in same meeting.
    }
}

function displaySubsidyAmount(amount) {
    frmTallyMeetingCashout.lblSubsidyTotal.text = amount;
    boTallyMeetingCashout.checkForSplitPayment(parseInt(glbMeetingNum), glbEmployeeId, displayAWSBankDepositeSlip);
}

function displayAWSBankDepositeSlip(IsSplitPayment, noOfChecks) {
    kony.print("IsSplitPayment :" + IsSplitPayment);
    if (IsSplitPayment) {
        //frmTallyMeetingCashout.hboxbankslip2.setVisibility(true);
        //frmTallyMeetingCashout.hboxbankslip3.setVisibility(true);
        frmTallyMeetingCashout.hboxSplitBankSlip.setVisibility(true);
        frmTallyMeetingCashout.hboxbankDepoSlip.setVisibility(false);
        setDefaultDateForSlip(noOfChecks); //** 5823
    } else {
        //frmTallyMeetingCashout.hboxbankslip2.setVisibility(false);
        //frmTallyMeetingCashout.hboxbankslip3.setVisibility(false);
        frmTallyMeetingCashout.hboxSplitBankSlip.setVisibility(false);
        frmTallyMeetingCashout.hboxbankDepoSlip.setVisibility(true);
    }
}

function setDefaultDateForSlip(noOfChecks) {
    kony.print("setDefaultDateForSlip noOfChecks " + noOfChecks);
    var currDateOne = new Date();
    if (noOfChecks == 3) {
        var currDateThree = new Date().setDate(currDateOne.getDate() + 60);
        if (checkValidString(frmTallyMeetingCashout.lblSlipDate3.text)) currDateThree = new Date(frmTallyMeetingCashout.lblSlipDate3.text);
        else currDateThree = new Date(currDateThree);
        kony.print("currDateThree " + currDateThree);
        var dayThree = currDateThree.getDate();
        var monthThree = currDateThree.getMonth() + 1;
        var yearThree = currDateThree.getFullYear();
        var dateStrThree = monthThree + "/" + dayThree + "/" + yearThree; // eg.02/23/2015
        kony.print("dateStrThree " + dateStrThree);
        frmTallyMeetingCashout.lblSlipDate3.text = dateStrThree;
        frmTallyMeetingCashout.hboxbankslip3.isVisible = true;
    } else {
        currDateOne = new Date().setDate(currDateOne.getDate() + 30);
        currDateOne = new Date(currDateOne);
        frmTallyMeetingCashout.hboxbankslip3.isVisible = false;
    }
    if (checkValidString(frmTallyMeetingCashout.lblSlipDate1.text)) currDateOne = new Date(frmTallyMeetingCashout.lblSlipDate1.text);
    kony.print("currDateOne " + currDateOne);
    var dayOne = currDateOne.getDate();
    var monthOne = currDateOne.getMonth() + 1;
    var yearOne = currDateOne.getFullYear();
    var dateStrOne = monthOne + "/" + dayOne + "/" + yearOne; // eg.02/23/2015
    kony.print("dateStrOne " + dateStrOne);
    var currDateTwo = new Date(currDateOne).setDate(currDateOne.getDate() + 30);
    kony.print("currDateTwo " + currDateTwo);
    if (checkValidString(frmTallyMeetingCashout.lblSlipDate2.text)) currDateTwo = new Date(frmTallyMeetingCashout.lblSlipDate2.text);
    else currDateTwo = new Date(currDateTwo);
    kony.print("currDateTwo " + currDateTwo);
    var dayTwo = currDateTwo.getDate();
    var monthTwo = currDateTwo.getMonth() + 1;
    var yearTwo = currDateTwo.getFullYear();
    var dateStrTwo = monthTwo + "/" + dayTwo + "/" + yearTwo; // eg.02/23/2015
    kony.print("dateStrTwo " + dateStrTwo);
    frmTallyMeetingCashout.lblSlipDate1.text = dateStrOne;
    frmTallyMeetingCashout.lblSlipDate2.text = dateStrTwo;
}
//This function is called on Continue button tap
function eventonclickNavigatetoTimeSheet() {
    valid = new validationcls();
    if (in_array(deviceLocale, Countries["CA"])) {
        var res = valid.checkForRequiredFields(frmTallyMeetingCashout.txtCash.text).checkForRequiredFields(frmTallyMeetingCashout.txtDebitCard.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsIssued.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsRedeemed.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditCard.text).isValid();
    } else if (in_array(deviceLocale, Countries["US"])) {
        var res = valid.checkForRequiredFields(frmTallyMeetingCashout.txtCash.text).checkForRequiredFields(frmTallyMeetingCashout.txtChecks.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditCard.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsIssued.text).checkForRequiredFields(frmTallyMeetingCashout.txtCreditSlipsRedeemed.text).isValid();
    }
    if (res) {
        var cash = frmTallyMeetingCashout.txtCash.text;
        if ((cash != null) || (cash != undefined)) cash = cash.replace(",", ".");
        var check = frmTallyMeetingCashout.txtChecks.text;
        if ((check != null) || (check != undefined)) check = check.replace(",", ".");
        //Validate Bank deposit slip number if Cash or Check amount entered
        if (frmTallyMeetingCashout.lblBanks.text == null || frmTallyMeetingCashout.lblBanks.text.length == 0) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgTallyBanksCollectedRequired"));
        } else if (parseInt(frmTallyMeetingCashout.lblBanks.text) <= 0) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgTallyEnterValidBanks"));
        } else if ((frmTallyMeetingCashout.txtCash.text != null && parseFloat(frmTallyMeetingCashout.txtCash.text) > 0 || frmTallyMeetingCashout.txtChecks.text != null && parseFloat(frmTallyMeetingCashout.txtChecks.text) > 0) || (frmTallyMeetingCashout.txtBankDepositSlipNumber.text != "") || ((frmTallyMeetingCashout.txtBankDepositSlip1No.text != undefined) && (frmTallyMeetingCashout.txtBankDepositSlip1No.text != "")) || ((frmTallyMeetingCashout.txtBankDepositSlip2No.text != undefined) && (frmTallyMeetingCashout.txtBankDepositSlip2No.text != "")) || ((frmTallyMeetingCashout.txtBankDepositSlip3No.text != undefined) && (frmTallyMeetingCashout.txtBankDepositSlip3No.text != ""))) {
            kony.print("Validate Bank Deposit Slip number :: here");
            var bankSlipData = [];
            var bankDepositNumber = frmTallyMeetingCashout.txtBankDepositSlipNumber.text;
            if (in_array(deviceLocale, Countries["CA"])) {
                bankDepositNumber = bankDepositNumber.replace(/^0+/, '');
            }
            //Validate Bank deposit slip number
            if (IsAWSLocationEnabled()) {
                validateBankDepositSlipsForAWS(bankDepositNumber);
            } else {
                if ((frmTallyMeetingCashout.txtBankDepositSlipNumber.text == null) || (in_array(deviceLocale, Countries["CA"]) ? (frmTallyMeetingCashout.txtBankDepositSlipNumber.text.length == 0 || bankDepositNumber.length == 0) : (frmTallyMeetingCashout.txtBankDepositSlipNumber.text.length != 9))) {
                    alertForMessages(kony.i18n.getLocalizedString("strMsgDepositSlipNumberRequired"));
                } else {
                    bankSlipData.push(bankDepositNumber);
                    if (checkIfNetworkIsAvailable()) {
                        //Show Progress View
                        displayProgressView();
                        boTallyMeetingCashout.validateBankDepositSlipNumberViaWS(parseInt(glbMeetingNum), glbMeetingDate, bankSlipData, validateBankDepositSlipNumberViaWSCallBack);
                    } else {
                        //In offline mode Deposit slip number will not be validated by service
                        validationsSuccess();
                        //alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
                    }
                }
            }
        } else {
            if (IsAWSLocationEnabled()) {
                validateBankDepositSlipsForAWS(bankDepositNumber);
            } else {
                validationsSuccess();
            }
        }
    }
}

function validateBankDepositSlipsForAWS(bankDepositNumber) {
    var bankSlipData = [];
    if (frmTallyMeetingCashout.hboxSplitBankSlip.isVisible == true) {
        var bankDepositSlip1 = frmTallyMeetingCashout.txtBankDepositSlip1No.text;
        var bankDepositSlip2 = frmTallyMeetingCashout.txtBankDepositSlip2No.text;
        var bankDepositSlip3 = frmTallyMeetingCashout.txtBankDepositSlip3No.text;
        kony.print("bankDepositSlip3 :" + bankDepositSlip3);
        kony.print("frmTallyMeetingCashout.hboxbankslip3.isVisible " + frmTallyMeetingCashout.hboxbankslip3.isVisible);
        if (parseFloat(frmTallyMeetingCashout.lblMEGCash.text) > 0 || parseFloat(frmTallyMeetingCashout.lblMEGChecks.text) > 0 || (frmTallyMeetingCashout.txtCash.text != null && parseFloat(frmTallyMeetingCashout.txtCash.text) > 0) || (frmTallyMeetingCashout.txtChecks.text != null && parseFloat(frmTallyMeetingCashout.txtChecks.text) > 0)) {
            if (bankDepositSlip1 == "" || ((bankDepositSlip1 != undefined) && (bankDepositSlip1.length > 0 && bankDepositSlip1.length != 9))) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgEnterSlip1"));
            } else if (bankDepositSlip2 == "" || ((bankDepositSlip2 != undefined) && (bankDepositSlip2.length > 0 && bankDepositSlip2.length != 9))) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgEnterSlip2"));
            } else if (frmTallyMeetingCashout.hboxbankslip3.isVisible && (bankDepositSlip3 == "" || ((bankDepositSlip3 != undefined) && (bankDepositSlip3.length > 0 && bankDepositSlip3.length != 9)))) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgEnterSlip3"));
            } else if (frmTallyMeetingCashout.lblSlipDate1.text == "") {
                alertForMessages(kony.i18n.getLocalizedString("strMsgSlip1Date"));
            } else if (frmTallyMeetingCashout.lblSlipDate2.text == "") {
                alertForMessages(kony.i18n.getLocalizedString("strMsgSlip2Date"));
            } else if (frmTallyMeetingCashout.lblSlipDate3.text == "" && frmTallyMeetingCashout.hboxbankslip3.isVisible) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgSlip3Date"));
            } else if ((bankDepositSlip1 != "" && bankDepositSlip2 != "" && bankDepositSlip1 == bankDepositSlip2) || (bankDepositSlip2 != "" && bankDepositSlip3 != "" && bankDepositSlip2 == bankDepositSlip3) || (bankDepositSlip1 != "" && bankDepositSlip3 != "" && bankDepositSlip1 == bankDepositSlip3)) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgDuplicateSlipNumber"));
            } else {
                bankSlipData.push(bankDepositSlip1);
                bankSlipData.push(bankDepositSlip2);
                if (frmTallyMeetingCashout.hboxbankslip3.isVisible) //** MEG 7132
                    bankSlipData.push(bankDepositSlip3);
                if (checkIfNetworkIsAvailable()) {
                    //Show Progress View
                    displayProgressView();
                    boTallyMeetingCashout.validateBankDepositSlipNumberViaWS(parseInt(glbMeetingNum), glbMeetingDate, bankSlipData, validateBankDepositSlipNumberViaWSCallBack);
                } else {
                    //In offline mode Deposit slip number will not be validated by service
                    validationsSuccess();
                }
            }
        }
    } else {
        if (parseFloat(frmTallyMeetingCashout.lblMEGCash.text) > 0 || parseFloat(frmTallyMeetingCashout.lblMEGChecks.text) > 0 || (frmTallyMeetingCashout.txtCash.text != null && parseFloat(frmTallyMeetingCashout.txtCash.text) > 0) || (frmTallyMeetingCashout.txtChecks.text != null && parseFloat(frmTallyMeetingCashout.txtChecks.text) > 0)) {
            kony.print("::bankDepositNumber::" + bankDepositNumber);
            if (!(checkValidString(bankDepositNumber)) || (bankDepositNumber.length != 9)) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgDepositSlipNumberRequired"));
            } else {
                bankSlipData.push(bankDepositNumber);
                if (checkIfNetworkIsAvailable()) {
                    //Show Progress View
                    displayProgressView();
                    boTallyMeetingCashout.validateBankDepositSlipNumberViaWS(parseInt(glbMeetingNum), glbMeetingDate, bankSlipData, validateBankDepositSlipNumberViaWSCallBack);
                } else {
                    //In offline mode Deposit slip number will not be validated by service
                    validationsSuccess();
                }
            }
        } else {
            validationsSuccess();
        }
    }
}
//This function is Bank deposit slip number service response 
function validateBankDepositSlipNumberViaWSCallBack(isValidDepositNumber, failedData) {
    //Hide Progress View
    removeProgressView();
    if (isValidDepositNumber) {
        //Proceed further
        validationsSuccess();
    } else {
        if (in_array(deviceLocale, Countries["CA"])) {
            validationsSuccess();
        } else {
            var messageText;
            //Show Invalid Bank deposit slip number error Alert
            if (failedData && failedData.length) {
                if (in_array(frmTallyMeetingCashout.txtBankDepositSlip1No.text, failedData)) {
                    frmTallyMeetingCashout.txtBankDepositSlip1No.skin = "txtRedBorder";
                }
                if (in_array(frmTallyMeetingCashout.txtBankDepositSlip2No.text, failedData)) {
                    frmTallyMeetingCashout.txtBankDepositSlip2No.skin = "txtRedBorder";
                }
                if (in_array(frmTallyMeetingCashout.txtBankDepositSlip3No.text, failedData)) {
                    frmTallyMeetingCashout.txtBankDepositSlip3No.skin = "txtRedBorder";
                }
                messageText = kony.i18n.getLocalizedString("strMsgInvalidDepositSlipNumber");
            } else {
                messageText = kony.i18n.getLocalizedString("strMsgInvalidDepositSlipNumber");
            }
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
    kony.print("checkDifferenceFlag :" + checkDifferenceFlag);
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
    var checks = (in_array(deviceLocale, Countries["CA"])) ? 0 : frmTallyMeetingCashout.txtChecks.text; //frmTallyMeetingCashout.txtChecks.text; 
    var creditCard = convertPriceToSaveByLocale(frmTallyMeetingCashout.txtCreditCard.text);
    var creditSlipsRedeemed = convertPriceToSaveByLocale(frmTallyMeetingCashout.txtCreditSlipsRedeemed.text);
    var creditSlipsIssued = convertPriceToSaveByLocale(frmTallyMeetingCashout.txtCreditSlipsIssued.text);
    var totalSubsidyAmt = checkValidString(frmTallyMeetingCashout.lblSubsidyTotal.text) ? frmTallyMeetingCashout.lblSubsidyTotal.text : 0;
    //Maulik - 08/19/2016 - Sending DebitCardInteract as 0 instead of "" as REST APIs error out with a null value
    var DebitCardInteract = (in_array(deviceLocale, Countries["CA"])) ? convertPriceToSaveByLocale(frmTallyMeetingCashout.txtDebitCard.text) : 0;
    var bankCollected = glbNumberOfBanks;
    var bankDepositSlipNumber = "";
    if (IsAWSLocationEnabled()) {
        bankDepositSlipNumber = checkValidString(frmTallyMeetingCashout.txtBankDepositSlip1No.text) ? frmTallyMeetingCashout.txtBankDepositSlip1No.text : frmTallyMeetingCashout.txtBankDepositSlipNumber.text;
    } else {
        bankDepositSlipNumber = bankDepositSlipNumber = (in_array(deviceLocale, Countries["CA"]) ? frmTallyMeetingCashout.txtBankDepositSlipNumber.text.replace(/^0+/, '') : frmTallyMeetingCashout.txtBankDepositSlipNumber.text);
    }
    var differenceReason = tallyMismatchReason;
    if (in_array(deviceLocale, Countries["CA"])) {
        var totalDifference = parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCash.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditCard.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffDebitCard.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsRedeemed.text)) - parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsIssued.text));
    } else {
        var totalDifference = parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCash.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffChecks.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditCard.text)) + parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsRedeemed.text)) - parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCreditSlipsIssued.text));
    }
    var differenceAmount = parseFloat(totalDifference).toFixed(2);
    var meetingDate = glbMeetingDate;
    var WeekNumber = 0;
    if (IsAWSLocationEnabled()) {
        boMeetings.getAndUpdateWeekNoForAtWorkMeeting(function(WeekNo) {
            WeekNumber = WeekNo;
        });
    }
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
        "DebitCardInteract": DebitCardInteract,
        "TotalSubsidyAmount": totalSubsidyAmt,
        "WeekNumber": WeekNumber
    }];
    //Insert Cashout data in DB
    boTallyMeetingCashout.insertTallyCashout(cashoutObj, false);
    //---------Insert Cashout record to DB END--------------
    //Show Timesheet form
    if (kony.application.getCurrentForm().id == frmTallyMeetingCashout.id) frmTallyMeetingTimeSheet.show();
}
//on preShow - to start scanner
function onpreShowfrmTallyMeetingCashoutStartBarcodeScanner(val) {
    //set value of global flow variable
    IsTallyCashout = FlowForScreens.TallyCashout;
    bankDepositSlip = val;
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
        if (IsAWSLocationEnabled() || IsInfoSessionMeeting()) {
            frmATWTallyMeetingReport.imgCheckBox.src = "icn_checkbox_checked.png";
            frmATWTallyMeetingReport.btnSubmit.skin = "btnwwtxtSearchLocation";
            frmATWTallyMeetingReport.btnSubmit.setEnabled(true);
        } else {
            frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_checked.png";
            frmTallyMeetingReport.btnSubmit.skin = "btnwwtxtSearchLocation";
            frmTallyMeetingReport.btnSubmit.setEnabled(true);
        }
    }
    popupNumberOfBanks.dismiss();
}

function setBankDepositTextLength() {
    frmTallyMeetingCashout.txtBankDepositSlip1No.skin = "txtHelvetica19pxGrey";
    frmTallyMeetingCashout.txtBankDepositSlip2No.skin = "txtHelvetica19pxGrey";
    frmTallyMeetingCashout.txtBankDepositSlip3No.skin = "txtHelvetica19pxGrey";
    if (in_array(deviceLocale, Countries["CA"])) {
        frmTallyMeetingCashout.txtBankDepositSlipNumber.maxTextLength = 6;
    } else {
        frmTallyMeetingCashout.txtBankDepositSlipNumber.maxTextLength = 9;
    }
}

function eventonClickSlipDate(section) {
    kony.print("eventonClickSlipDate section " + section);
    popupDateOfBirth.calEnrollMemberDOB.clear();
    var widgetVal = "";
    if (section == frmTallyMeetingCashout.lbl1stSlip.text) widgetVal = frmTallyMeetingCashout.hboxSlipDate1Section;
    else if (section == frmTallyMeetingCashout.lbl2ndSlip.text) widgetVal = frmTallyMeetingCashout.hboxSlipDate2Section;
    else if (section == frmTallyMeetingCashout.lbl3rdSlip.text) widgetVal = frmTallyMeetingCashout.hboxSlipDate3Section;
    var context1 = {
        "widget": widgetVal,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupDateOfBirth.setContext(context1);
    if (section == "") {
        eventinitDOBPopUp("");
        popupDateOfBirth.lblHiddenVal.text = section;
    } else {
        if (section == frmTallyMeetingCashout.lbl1stSlip.text) eventinitDOBPopUp(frmTallyMeetingCashout.lblSlipDate1.text);
        else if (section == frmTallyMeetingCashout.lbl2ndSlip.text) eventinitDOBPopUp(frmTallyMeetingCashout.lblSlipDate2.text);
        else if (section == frmTallyMeetingCashout.lbl3rdSlip.text) eventinitDOBPopUp(frmTallyMeetingCashout.lblSlipDate3.text);
        //eventinitDOBPopUp(section);
        popupDateOfBirth.lblHiddenVal.text = section;
    }
    popupDateOfBirth.show();
}
//AWS MEG-5826
function setBankDepositeDetailsData(res, TallyMeetingID) {
    var BankData = [];
    kony.print("setBankDepositeDetailsData res.length : " + res.length);
    kony.print("setBankDepositeDetailsData res : " + JSON.stringify(res));
    if (res.length > 0) {
        var cashDifferance = 0 //;Math.abs(parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCash.text)));
        var checkDifferance = 0; //Math.abs(parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffChecks.text)));
        if (parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCash.text)) < 0) {
            cashDifferance = Math.abs(parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffCash.text)));
        }
        if (parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffChecks.text)) < 0) {
            checkDifferance = Math.abs(parseFloat(removeDollar(frmTallyMeetingCashout.lblDiffChecks.text)));
        }
        _.each(res, function(v, i) {
            if (checkValidString(res[i].amount)) {
                var tmp = {};
                var slipNum, slipDate;
                if (res.length == 1) {
                    slipNum = (checkValidString(frmTallyMeetingCashout.txtBankDepositSlipNumber.text)) ? frmTallyMeetingCashout.txtBankDepositSlipNumber.text : "0";
                    slipDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                } else {
                    if (i == 0) {
                        slipNum = frmTallyMeetingCashout.txtBankDepositSlip1No.text;
                        slipDate = supportTime(frmTallyMeetingCashout.lblSlipDate1.text, "", "yyyy-mm-ddTHH:NN:SS");
                    } else if (i == 1) {
                        slipNum = frmTallyMeetingCashout.txtBankDepositSlip2No.text;
                        slipDate = supportTime(frmTallyMeetingCashout.lblSlipDate2.text, "", "yyyy-mm-ddTHH:NN:SS");
                    } else {
                        slipNum = frmTallyMeetingCashout.txtBankDepositSlip3No.text;
                        slipDate = supportTime(frmTallyMeetingCashout.lblSlipDate3.text, "", "yyyy-mm-ddTHH:NN:SS");
                    }
                }
                kony.print("setBankDepositeDetailsData slipNum : " + slipNum);
                kony.print("setBankDepositeDetailsData slipDate : " + slipDate);
                tmp.DepositNumber = slipNum;
                tmp.DepositDate = slipDate;
                tmp.DepositAmount = (checkValidString(res[i].amount)) ? res[i].amount : "0";
                tmp.DepositCash = (checkValidString(res[i].cash)) ? res[i].cash : "0"; //**MEG 7251
                tmp.DepositCheck = (checkValidString(res[i].checks)) ? res[i].checks : "0"; //**MEG 7251
                if (i == 0) {
                    //**MEG 7251	
                    tmp.DepositCash = tmp.DepositCash - cashDifferance;
                    //tmp.DepositAmount = tmp.DepositAmount - cashDifferance;
                    var checkCollection = 0;
                    if (checkDifferance <= parseFloat(tmp.DepositCheck)) {
                        tmp.DepositCheck = tmp.DepositCheck - checkDifferance;
                        checkDifferance = 0;
                    } else {
                        checkDifferance = checkDifferance - (tmp.DepositCheck);
                        tmp.DepositCheck = 0;
                        /*  if(cashDifferance == parseFloat(frmTallyMeetingCashout.lblMEGCash.text))
                          {
                            tmp.DepositAmount = 0;
                          }else if (cashDifferance >= 0)
                          {
                            tmp.DepositAmount = parseFloat(frmTallyMeetingCashout.txtCash.text);
                          }*/
                    }
                    tmp.DepositAmount = parseFloat(parseFloat(tmp.DepositCash) + parseFloat(tmp.DepositCheck)).toFixed(2);
                    //** End
                    kony.print("setBankDepositeDetailsData DepositAmount 0: " + tmp.DepositAmount);
                    kony.print(" differance 0: " + checkDifferance);
                } else if (i == 1 && checkDifferance != 0) {
                    if (checkDifferance <= parseFloat(tmp.DepositAmount)) {
                        tmp.DepositAmount = tmp.DepositAmount - checkDifferance;
                        checkDifferance = 0
                    } else {
                        checkDifferance = checkDifferance - tmp.DepositAmount;
                        tmp.DepositAmount = 0;
                    }
                    kony.print("setBankDepositeDetailsData DepositAmount 1: " + tmp.DepositAmount);
                    kony.print(" differance 1: " + checkDifferance);
                } else if (checkDifferance != 0) {
                    if (checkDifferance <= parseFloat(tmp.DepositAmount)) {
                        tmp.DepositAmount = tmp.DepositAmount - checkDifferance;
                        checkDifferance = 0;
                    } else {
                        checkDifferance = checkDifferance - tmp.DepositAmount;
                        tmp.DepositAmount = 0;
                    }
                    kony.print("setBankDepositeDetailsData DepositAmount 2: " + tmp.DepositAmount);
                    kony.print(" differance 2: " + checkDifferance);
                }
                tmp.TallyMeetingID = TallyMeetingID;
                BankData.push(tmp);
            }
        })
    } else {
        tmp.DepositNumber = "0";
        tmp.DepositDate = "0000-00-00T00:00:00";
        tmp.DepositAmount = "0";
        tmp.TallyMeetingID = TallyMeetingID;
        BankData.push(tmp);
    }
    return BankData;
}

function clearValidationSkin(eventObj) {
    kony.print("eventObj::" + JSON.stringify(eventObj));
    if (eventObj.id == 'txtBankDepositSlip1No') {
        frmTallyMeetingCashout.txtBankDepositSlip1No.skin = "txtHelvetica19pxGrey";
    } else if (eventObj.id == 'txtBankDepositSlip2No') {
        frmTallyMeetingCashout.txtBankDepositSlip2No.skin = "txtHelvetica19pxGrey";
    } else if (eventObj.id == 'txtBankDepositSlip3No') {
        frmTallyMeetingCashout.txtBankDepositSlip3No.skin = "txtHelvetica19pxGrey";
    }
}