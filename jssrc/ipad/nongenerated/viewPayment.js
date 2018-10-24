//var productCartTotalAmount ="$100.00";
var blnLastPaymentMethodByCheque = false;
var blnLastPaymentMethodByCard = false;
var selPaymentMode;
var tempAmt = 0.0;
var totalRecordsInPayment = 0;
var paymentRoundOff = false;
var enableCompleteTransaction = false;
var originalPaymentForCash = 0;
var outstandingNegativeBal = false;
var swipeSuccuss = false;
var paymentMode = "";
//var tempAmount;
function eventonClickvboxCancelImageHeaderForPaymentSection() {
    var previousform = kony.application.getPreviousForm();
    previousform.show();
}

function manageDecimalPlace(newText) {
    //Remove Decimal point if present if there are more than two digit
    if (newText.indexOf(".") != -1 && newText.length > 3) {
        //Remove Decimal point
        newText = newText.split(".").join("");
        //add deimal point
        newText = [newText.slice(0, (newText.length - 2)), '.', newText.slice((newText.length - 2))].join('');
    }
    if (newText.charAt(0) == "0") {
        newText = newText.substring(1);
    }
    //Add Decimal Point
    frmPayment.txtBoxAmount.text = addCurrency(newText);
}

function eventonClickvboxForEnterAmountSection(digit) {
    var txtAmt = removeDollar(frmPayment.txtBoxAmount.text);
    var newText;
    //if the text box value is zero and user press 00 then no action should be done 
    if (digit == "00" && parseFloat(txtAmt) == 0) {
        //nothing to do 
    } else {
        if (txtAmt == "0") {
            newText = digit;
        } else {
            newText = txtAmt + digit;
        }
        manageDecimalPlace(newText.toString());
    }
}
//This function adds the new value to old label value 
function setPaymentInfoLabelValue(infoLabel) {
    var valueOfLabel = frmPayment[infoLabel].text;
    var txtBoxAmount = parseFloat(frmPayment.txtBoxAmount.text);
    //Remove $ variable
    try {
        var oldVal = parseFloat(valueOfLabel.substring(1));
        if (oldVal != 0 && oldVal != null && oldVal != undefined && typeof oldVal == "number") {
            frmPayment[infoLabel].text = addCurrency((txtBoxAmount + oldVal).toFixed(2));
        } else {
            frmPayment[infoLabel].text = addCurrency(txtBoxAmount);
        }
        frmPayment.txtBoxAmount.text = ".0";
    } catch (e) {
        GlobalException(e);
    }
}

function onclickeventEraseBtn() {
    kony.print("onclickeventEraseBtn" + frmPayment.txtBoxAmount.text);
    var amount = removeDollar(frmPayment.txtBoxAmount.text);
    kony.print("amount===>>>" + amount);
    //Remove decimal point
    amount = amount.split(".").join("");
    //Remove last digit
    amount = amount.slice(0, -1);
    //Add decimal point again if number is more thn three
    if (amount.length >= 3) {
        amount = [amount.slice(0, (amount.length - 2)), '.', amount.slice((amount.length - 2))].join('');
    } else if (amount.length >= 1) {
        //Only Two Digits left
        amount = "0." + amount;
    } else {
        //All digits deleted
        amount = "0.0";
    }
    frmPayment.txtBoxAmount.text = addCurrency(amount);
}

function redirectToReceiptScreen() {
    enrollingMember();
    //frmReceipt.show();
}

function checkValidationsForCompleteTrasaction() {
    /*if (IsFromPM == FlowForScreens.ProcessMember) {
        boMonitor.log("Member Process:- Complete Transaction", "btnCompleteProcessMember", "", FlowForMonitor.ProcessMember, true);
    }*/
    kony.print("--- > clicked on button complete transaction ");;
    // **** start checking validation for different payment options
    productCartTotalAmountTemp = parseFloat(ProductSale.Cart.total);
    amountForChangeOwnedForPayment = 0;
    amountForChangeReturnFormatForPayment = "";
    var totalRecordsInPayment = 0;
    var outStandingBalanceVal = removeCurrency(frmPayment.lblOutstandingBalInfo.text);
    kony.print("--- > outstanding balance =  " + outStandingBalanceVal + " cart amount = " + productCartTotalAmountTemp);
    if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
        totalRecordsInPayment = frmPayment.segPaymentTypeData.data.length;
    }
    var arrPaymentMapping = new Array();
    for (i = 0; i < totalRecordsInPayment; i++) {
        amount = removeCurrency(frmPayment.segPaymentTypeData.data[i].lblPaymentTypeTextVal);
        paymentMode = frmPayment.segPaymentTypeData.data[i].hiddenPaymentMode;
        arrPaymentMapping[paymentMode] = parseFloat(amount);
    }
    var succcessPayment = false;
    var redirectToRecipetForm = false;
    var succcessPaymentUsingCreditCardOnly = false;
    var succcessPaymentUsingDeditCardOnly = false;
    if (totalRecordsInPayment > 0) {
        var invalidCardOrCreditAmount = false;
        var strMessage = "";
        if (blnLastPaymentMethodByCard == true && outStandingBalanceVal != 0 && (!paymentRoundOff && parseFloat(outStandingBalanceVal) < 0.03)) {
            kony.print("-- case 1 -- only pay by card and value not same -- arrPaymentMapping[0] = " + arrPaymentMapping[0]);
            strMessage = kony.i18n.getLocalizedString("strMsgInvalidCardAmount");
            alertForMessages(strMessage);
            succcessPayment = false;
        } else if (blnLastPaymentMethodByCheque == true && outStandingBalanceVal != 0 && (!paymentRoundOff && parseFloat(outStandingBalanceVal) < 0.03)) {
            kony.print("-- case 2 -- only pay by cheque and value not same -- arrPaymentMapping[0] = " + arrPaymentMapping[0]);
            strMessage = " " + kony.i18n.getLocalizedString("strMsgInvalidCheckAmount");
            alertForMessages(strMessage);
            succcessPayment = false;
        } //MEGCA - 15 - Allow user to enter round off values for payment type cash
        else if (enableCompleteTransaction == true) {
            kony.print("IS inside checkvalid transaction");
            strMessage = " " + kony.i18n.getLocalizedString("strMsgValueMismatchAmt");
            succcessPayment = true;
            redirectToRecipetForm = false;
            amountForChangeReturnFormatForPayment = "";
            originalPaymentForCash = outStandingBalanceVal;
            kony.print("IS originalPaymentForCash = " + originalPaymentForCash);
            kony.print("IS ischangedueuser==>" + isChangeDueToUser);
            showCompleteTransactionMessageAlert(strMessage, true, "confirmation");
        } //
        else {
            //case1 - only cash option selected, and amount submited is more than cart total
            if (totalRecordsInPayment == 1 && arrPaymentMapping[0]) {
                kony.print("-- case 3 -- only pay by CASH and value not same -- arrPaymentMapping[0] = " + arrPaymentMapping[0] + '--- productCartTotalAmountTemp =' + productCartTotalAmountTemp + "--outStandingBalanceVal = " + outStandingBalanceVal);
                if (arrPaymentMapping[0] >= productCartTotalAmountTemp || isChangeDueToUser == true) {
                    if (in_array(deviceLocale, Countries["CA"])) {
                        originalPaymentForCash = outStandingBalanceVal;
                        kony.print("originalPaymentForCash = " + originalPaymentForCash);
                        var givenByUser = arrPaymentMapping[0];
                        //var round = roundOff5Cents(productCartTotalAmountTemp);
                        var round = roundOffToHigh5Cents(productCartTotalAmountTemp);
                        outStandingBalanceVal = givenByUser - round;
                    }
                    amountForChangeOwnedForPayment = Math.abs(outStandingBalanceVal);
                    amountForChangeReturnFormatForPayment = kony.i18n.getLocalizedString("strCash");
                    redirectToRecipetForm = (arrPaymentMapping[0] > productCartTotalAmountTemp) ? true : false;
                    succcessPayment = true;
                    kony.print(" sucess payment true ");
                } else {
                    kony.print("-- else ");
                }
            }
            //case 2- only credit card 
            else if (totalRecordsInPayment == 1 && arrPaymentMapping[1]) {
                kony.print("-- case 4 -- only pay by CREDIT CARD and value not same -- arrPaymentMapping[1] = " + arrPaymentMapping[1] + '--- productCartTotalAmountTemp =' + productCartTotalAmountTemp);
                if (parseFloat(arrPaymentMapping[1]) != parseFloat(productCartTotalAmountTemp)) //productCartTotalAmountTemp removed to solve QA bug
                {
                    messageText = kony.i18n.getLocalizedString("strErrorMsgPaymentCredit");
                    showCompleteTransactionMessageAlert(messageText, false, "error");
                } else {
                    //succcessPaymentUsingCreditCardOnly = true;
                    succcessPayment = true;
                }
            }
            //case 3- only cheque
            else if (totalRecordsInPayment == 1 && parseFloat(arrPaymentMapping[2])) {
                kony.print("-- case 5 -- only pay by CHECQUE  and value not same -- arrPaymentMapping[2] = " + arrPaymentMapping[2] + '--- productCartTotalAmountTemp =' + productCartTotalAmountTemp);
                if (arrPaymentMapping[2] != parseFloat(productCartTotalAmountTemp)) //productCartTotalAmountTemp removed to solve QA bug
                {
                    messageText = kony.i18n.getLocalizedString("strErrorMsgPaymentCheck");
                    showCompleteTransactionMessageAlert(messageText, false, "error");
                } else {
                    succcessPayment = true;
                }
            }
            //case 3.1- only credit slip 
            else if (totalRecordsInPayment == 1 && arrPaymentMapping[3]) {
                kony.print("-- case 6 -- only pay by CREDIT SLIP and value not same -- arrPaymentMapping[3] = " + arrPaymentMapping[3] + '--- productCartTotalAmountTemp =' + productCartTotalAmountTemp);
                if (arrPaymentMapping[3] >= productCartTotalAmountTemp || isChangeDueToUser == true) {
                    amountForChangeOwnedForPayment = Math.abs(outStandingBalanceVal);
                    amountForChangeReturnFormatForPayment = kony.i18n.getLocalizedString("strCreditSlip");
                    redirectToRecipetForm = (arrPaymentMapping[3] > productCartTotalAmountTemp) ? true : false;
                    succcessPayment = true;
                    kony.print(" success payment ");
                }
            }
            //case 3.2- only Split
            else if (totalRecordsInPayment == 1 && arrPaymentMapping[5]) {
                kony.print("-- case 6.1 -- only pay by SPLIT and value not same -- arrPaymentMapping[5] = " + arrPaymentMapping[5] + '--- productCartTotalAmountTemp =' + productCartTotalAmountTemp);
                if (arrPaymentMapping[5] >= productCartTotalAmountTemp || isChangeDueToUser == true) {
                    amountForChangeOwnedForPayment = Math.abs(outStandingBalanceVal);
                    amountForChangeReturnFormatForPayment = kony.i18n.getLocalizedString("strSplit");
                    redirectToRecipetForm = (arrPaymentMapping[5] > productCartTotalAmountTemp) ? true : false;
                    succcessPayment = true;
                    kony.print(" success payment ");
                }
            }
            //case 4 - combination of Cash + any of (credit + cheque or credit slip)
            else if (totalRecordsInPayment > 1 && arrPaymentMapping[0]) {
                kony.print("-- case 7 -- combination of Cash + any of (credit + cheque or credit slip) -- outStandingBalanceVal = " + outStandingBalanceVal + '-- isChangeDueToUser ' + isChangeDueToUser);
                if (outStandingBalanceVal <= 0 || isChangeDueToUser == true) {
                    kony.print("arrPaymentMapping=" + JSON.stringify(arrPaymentMapping));
                    if (in_array(deviceLocale, Countries["CA"])) {
                        originalPaymentForCash = outStandingBalanceVal;
                        kony.print("originalPaymentForCash 2 = " + originalPaymentForCash);
                        //var round = roundOff5Cents(removeCurrency(productCartTotalAmountTemp));
                        var round = roundOffToHigh5Cents(productCartTotalAmountTemp);
                        outStandingBalanceVal = amountMemberHasSubmittedForPayment - round;
                    }
                    amountForChangeOwnedForPayment = Math.abs(outStandingBalanceVal);
                    amountForChangeReturnFormatForPayment = kony.i18n.getLocalizedString("strCash");
                    redirectToRecipetForm = (amountForChangeOwnedForPayment > 0) ? true : false;
                    succcessPayment = true;
                }
            }
            //case 4.1 - combination of credit slip + any of ( + cheque or credit slip)
            else if (totalRecordsInPayment > 1 && (arrPaymentMapping[3] || arrPaymentMapping[5])) {
                kony.print("-- case 8 -- combination of credit slip + any of ( + cheque or credit slip) -- amountMemberHasSubmittedForPayment = " + amountMemberHasSubmittedForPayment + '--  productCartTotalAmountTemp ' + productCartTotalAmountTemp);
                if (amountMemberHasSubmittedForPayment >= productCartTotalAmountTemp) {
                    amountForChangeOwnedForPayment = amountMemberHasSubmittedForPayment - productCartTotalAmountTemp;
                    amountForChangeReturnFormatForPayment = kony.i18n.getLocalizedString("strCreditSlip");
                    redirectToRecipetForm = (amountMemberHasSubmittedForPayment > productCartTotalAmountTemp) ? true : false;
                    succcessPayment = true;
                }
            }
            //case 5 -- cheque + credit slip 
            else if (totalRecordsInPayment == 2 && arrPaymentMapping[2] && arrPaymentMapping[3]) {
                kony.print("-- case 9 -- cheque + credit slip -- arrPaymentMapping[2] = " + arrPaymentMapping[2] + '--  arrPaymentMapping[3] = ' + arrPaymentMapping[3]);
                if (amountMemberHasSubmittedForPayment > productCartTotalAmountTemp) {
                    amountForChangeOwnedForPayment = amountMemberHasSubmittedForPayment - productCartTotalAmountTemp;
                    amountForChangeReturnFormatForPayment = kony.i18n.getLocalizedString("strCreditSlip");
                    redirectToRecipetForm = true;
                    succcessPayment = true;
                }
            }
            //case 6 -- card (credit / debit) + credit slip 
            else if (totalRecordsInPayment == 2 && arrPaymentMapping[1] && arrPaymentMapping[3]) {
                kony.print("-- case 10 -- card (credit / debit) + credit slip -- arrPaymentMapping[1] = " + arrPaymentMapping[1] + '--  arrPaymentMapping[3] = ' + arrPaymentMapping[3] + "-- outStandingBalanceVal = " + outStandingBalanceVal + '--isChangeDueToUser = ' + isChangeDueToUser);
                if (outStandingBalanceVal <= 0 || isChangeDueToUser == true) {
                    amountForChangeOwnedForPayment = Math.abs(outStandingBalanceVal);
                    amountForChangeReturnFormatForPayment = kony.i18n.getLocalizedString("strCreditSlip");
                    redirectToRecipetForm = true;
                    succcessPayment = true;
                }
            }
            //case 7 -- card (credit / debit) + cheque  
            else if (totalRecordsInPayment == 2 && arrPaymentMapping[1] && arrPaymentMapping[2]) {
                kony.print("-- case 10 -- card (credit / debit) + cheque  -- arrPaymentMapping[1] = " + arrPaymentMapping[1] + '--  arrPaymentMapping[2] = ' + arrPaymentMapping[2]);
                if (outStandingBalanceVal == 0 || isChangeDueToUser == true) {
                    amountForChangeOwnedForPayment = 0;
                    amountForChangeReturnFormatForPayment = "";
                    redirectToRecipetForm = (amountForChangeOwnedForPayment > 0) ? true : false;
                    succcessPayment = true;
                } else {
                    messageText = kony.i18n.getLocalizedString("strErrorMsgInvalidCardOrCheckAmount");
                    showCompleteTransactionMessageAlert(messageText, false, "error");
                }
            } else if (in_array(deviceLocale, Countries["CA"])) {
                // case-13 only for Debit Cards
                if (totalRecordsInPayment == 1 && arrPaymentMapping[4]) {
                    kony.print("-- case 13 -- only pay by Debit CARD and value not same -- arrPaymentMapping[4] = " + arrPaymentMapping[4] + '--- productCartTotalAmountTemp =' + productCartTotalAmountTemp);
                    if (parseFloat(arrPaymentMapping[4]) != parseFloat(productCartTotalAmountTemp)) //productCartTotalAmountTemp removed to solve QA bug
                    {
                        messageText = kony.i18n.getLocalizedString("strErrorMsgPaymentCredit");
                        showCompleteTransactionMessageAlert(messageText, false, "error");
                    } else {
                        succcessPaymentUsingDeditCardOnly = true;
                    }
                } else if (totalRecordsInPayment > 1 && (arrPaymentMapping[4] || arrPaymentMapping[1])) {
                    kony.print("case-17");
                    if (outStandingBalanceVal == 0) {
                        amountForChangeOwnedForPayment = 0;
                        amountForChangeReturnFormatForPayment = "";
                        redirectToRecipetForm = (amountForChangeOwnedForPayment > 0) ? true : false;
                        succcessPayment = true;
                    } else {
                        messageText = kony.i18n.getLocalizedString("strErrorMsgInvalidCardOrCheckAmount");
                        showCompleteTransactionMessageAlert(messageText, false, "error");
                    }
                }
            }
            //redirect to the recipet form
            amountForChangeOwnedForPayment = parseFloat(amountForChangeOwnedForPayment).toFixed(2);
            if (succcessPayment) {
                //show alert for successfult payment done
                redirectToHomePage = (redirectToRecipetForm) ? false : true;
                if (preActivationObj.isMPFromService == "true") enrollingMember(true);
                else showCompleteTransactionMessageAlert(kony.i18n.getLocalizedString("strMsgCompletePayment"), redirectToHomePage, "");
            } else if (succcessPaymentUsingCreditCardOnly) {
                //show alert for successfult payment done
                showCompleteTransactionMessageAlert(kony.i18n.getLocalizedString("strMsgCompletePaymentUsingCreditCard"), true, "");
            } else if (succcessPaymentUsingDeditCardOnly) {
                showCompleteTransactionMessageAlert(kony.i18n.getLocalizedString("strMsgCompletePaymentUsingDebitCard"), true, "");
            }
        }
    } else if (outStandingBalanceVal || (FlowForScreens.DirectSale != IsDirectSale && productCartTotalAmountTemp == 0)) {
        enrollingMember(true);
        //showCompleteTransactionMessageAlert(kony.i18n.getLocalizedString("strMsgCompletePayment"),true,"");
    }
    // **** end --checking validation for different payment options
}

function eventonClickPaymentMode(paymentMode) {
    kony.print("Total Amt : " + parseFloat((frmPayment.lblTotalData.text).replace(glbCurrency, "")).toFixed(2));
    var totalAmt = parseFloat(removeCurrency(frmPayment.lblTotalData.text)).toFixed(2);
    var txtBoxAmt = parseFloat(removeCurrency(frmPayment.txtBoxAmount.text)).toFixed(2)
    kony.print("txtBoxAmt : " + txtBoxAmt);
    var outstandingBalValue = parseFloat(removeCurrency(frmPayment.lblOutstandingBalInfo.text));
    if (totalAmt == txtBoxAmt) {
        if (paymentMode == kony.i18n.getLocalizedString("strSplit") && txtBoxAmt == outstandingBalValue) { //MEG-7362
            showPaymentAlert(paymentMode, 3);
        } else {
            showPaymentAlert(paymentMode, 0);
        }
    } else {
        if (paymentMode == kony.i18n.getLocalizedString("strSplit") && txtBoxAmt == outstandingBalValue) { //MEG-7362
            showPaymentAlert(paymentMode, 2);
        } else {
            eventonClickhboxForPaymentMode(paymentMode);
        }
    }
}

function showPaymentAlert(paymentMode, splitNo) {
    kony.print("IN showPaymentAlert : " + paymentMode);
    var tempMsg = kony.i18n.getLocalizedString("strSplitSelectionMsgPart1");
    if (splitNo == 3) tempMsg = kony.i18n.getLocalizedString("strSplitSelectionMsgPart3");
    tempMsg = tempMsg + splitNo + kony.i18n.getLocalizedString("strSplitSelectionMsgPart2");
    var alertConfig = {
        // message: kony.i18n.getLocalizedString("strPaymentAlert") + ' "'+ paymentMode+'" ?',
        message: (splitNo == 0) ? kony.i18n.getLocalizedString("strPaymentAlert") + ' "' + paymentMode + '" ?' : tempMsg, //MEG-7362
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
        alertHandler: alertHandlerForPayment
    };
    var psConfig = {};
    var termedAlert = kony.ui.Alert(alertConfig, psConfig);
}

function alertHandlerForPayment(response) {
    kony.print("alertHandlerFotPayment response==>>" + response);
    kony.print("alertHandlerFotPayment paymentMode==>>" + paymentMode);
    if (response == true) {
        eventonClickhboxForPaymentMode(paymentMode);
    } else {
        frmPayment.txtBoxAmount.text = addCurrency("0.00");
    }
}

function eventonClickhboxForPaymentMode(paymentMode) {
    kony.print("glbIsCreditCardEnabled : " + glbIsCreditCardEnabled);
    kony.print("::glbIsMPActivationEnabled::" + glbIsMPActivationEnabled);
    enableDisablePaymentModes(function(status) {
        if (status) { //glbIsCreditCardEnabled = true;
            if (checkAppSettingEnable(Settings["CC"])) {
                if (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") {
                    kony.print("glbIsCreditCardEnabled 1: " + glbIsCreditCardEnabled);
                    var txtBoxAmount = parseFloat((frmPayment.txtBoxAmount.text).replace(glbCurrency, "")).toFixed(2);
                    if (paymentMode == kony.i18n.getLocalizedString("strCredit") || isPaymentByBTDevice) {
                        if (txtBoxAmount > 0) {
                            var outstandingBalValue = parseFloat(removeCurrency(frmPayment.lblOutstandingBalInfo.text)).toFixed(2);
                            if (outstandingBalValue <= 0 || isChangeDueToUser == true) {
                                showCompleteTransactionMessageAlert(kony.i18n.getLocalizedString("strPaymentOutstandingBalReachedLimit"), false, "error");
                                return;
                            }
                            if (parseFloat(txtBoxAmount) <= parseFloat(outstandingBalValue)) {
                                if (creditCrardSalePaymentDataObj == null) // check the CCpaymetn obj length = 0
                                {
                                    kony.print("::glbIsMPActivationEnabled::" + glbIsMPActivationEnabled);
                                    if (validateActivationDetails() && checkIfNetworkIsAvailable() && checkAppSettingEnable(Settings["MPActivation"]) && (glbIsMPActivationEnabled == true || glbIsMPActivationEnabled == "true")) { //Ami && !isPaymentByBTDevice){
                                        //popupPreActivation.hboxVoucherNumber.isVisible = false;
                                        populatePreActivationPopup(paymentMode, false);
                                    } else {
                                        kony.print("::isPaymentByBTDevice::" + isPaymentByBTDevice);
                                        if (isPaymentByBTDevice && !checkIfNetworkIsAvailable()) {
                                            alertForManualCCprocess();
                                        } else {
                                            alertForswipeCreditCard();
                                        }
                                    }
                                } else {
                                    displayAlert(kony.i18n.getLocalizedString("strTwoCCNotAllowed"));
                                }
                            } else {
                                displayAlert(kony.i18n.getLocalizedString("strErrorMsgInvalidCardOrCheckAmount"));
                            }
                        } else {
                            //setEnabledDisabledButton(true,"btnwwtxtCompleteProcessMember"); //** MEG 6193
                            displayAlert(kony.i18n.getLocalizedString("strErrorMsgInvalidCardOrCheckAmount"));
                        }
                    } else {
                        bindPaymentDataToSegment(paymentMode, frmPayment.txtBoxAmount.text);
                    }
                } else {
                    if ((paymentMode == kony.i18n.getLocalizedString("strCredit") || isPaymentByBTDevice) && validateActivationDetails()) {
                        boPreActivation.MPPreActivationFailure(false); // it will redirect to starter voucher coupon popup
                    } else {
                        bindPaymentDataToSegment(paymentMode, frmPayment.txtBoxAmount.text);
                    } // added if condition in case of CC disabled location , starter voucher coupon popup open
                }
            } else {
                stopTimerAndDisableSled();
                if ((paymentMode == kony.i18n.getLocalizedString("strCredit") || isPaymentByBTDevice) && validateActivationDetails()) {
                    boPreActivation.MPPreActivationFailure(false); // it will redirect to starter voucher coupon popup
                } else {
                    bindPaymentDataToSegment(paymentMode, frmPayment.txtBoxAmount.text);
                    kony.print("here in else 13 ");
                }
                //bindPaymentDataToSegment(paymentMode,frmPayment.txtBoxAmount.text);
            }
        }
    });
}

function bindPaymentDataToSegment(paymentMode, txtBoxAmount) {
    if (validateActivationDetails() && (paymentMode != kony.i18n.getLocalizedString("strCredit") || checkIfNetworkIsAvailable() == false) && (parseFloat(removeCurrency(txtBoxAmount)).toFixed(2)) > 0) {
        kony.print("::amount::" + parseFloat(removeCurrency(txtBoxAmount)).toFixed(2));
        populatePreActivationPopup(paymentMode, false); // to prepopulate popup after succesfull transaction..
    } else {
        kony.print("::amount::" + parseFloat(removeCurrency(txtBoxAmount)).toFixed(2));
        bindPaymentDataToSegmentSuccess(paymentMode, txtBoxAmount);
    }
}

function bindPaymentDataToSegmentSuccess(paymentMode, txtBoxAmount) {
    /*** get the i 18 value for selected button text ********/
    var paymentText = "";
    var hiddenValue = 0;
    if (paymentMode == kony.i18n.getLocalizedString("strCash")) {
        paymentText = kony.i18n.getLocalizedString("strCash");
        hiddenValue = 0;
    } else if (paymentMode == kony.i18n.getLocalizedString("strCredit") || isPaymentByBTDevice) {
        paymentText = kony.i18n.getLocalizedString("strCredit");
        hiddenValue = 1;
    } else if (paymentMode == kony.i18n.getLocalizedString("strbtnCheck")) {
        paymentText = kony.i18n.getLocalizedString("strbtnCheck");
        hiddenValue = 2;
    } else if (paymentMode == kony.i18n.getLocalizedString("strCreditSlip")) {
        paymentText = kony.i18n.getLocalizedString("strCreditSlip");
        hiddenValue = 3;
    } else if (paymentMode == kony.i18n.getLocalizedString("strDebitCard")) {
        paymentText = kony.i18n.getLocalizedString("strDebitCard");
        hiddenValue = 4;
    } else if (paymentMode == kony.i18n.getLocalizedString("strSplit")) {
        paymentText = kony.i18n.getLocalizedString("strSplit");
        hiddenValue = 5;
    }
    kony.print("bindPaymentDataToSegment.txtBoxAmount = " + txtBoxAmount);
    /***********end*************/
    if (!in_array(deviceLocale, Countries["CA"]) && txtBoxAmount.length > 8) //OLD = 7
    {
        alertForMessages(kony.i18n.getLocalizedString("strInvalidAmountLength"));
        frmPayment.txtBoxAmount.text = addCurrency("0.00");
        txtBoxAmount = 0;
    } else {
        /*  var txtAmt = (frmPayment.txtBoxAmount.text).replace(glbCurrency, "");
          var txtBoxAmount = parseFloat(txtAmt).toFixed(2);*/
        txtBoxAmount = parseFloat(removeCurrency(txtBoxAmount)).toFixed(2);
    }
    kony.print("bindPaymentDataToSegment.txtBoxAmount 1= " + txtBoxAmount);
    //if payment by cheque/credit card, then amount should not be more than outstanding balance
    var outstandingBalValue = removeCurrency(frmPayment.lblOutstandingBalInfo.text);
    //if the amount entered is greater than zero then only add to segment 	 
    if (txtBoxAmount > 0) {
        if (outstandingBalValue <= 0 || isChangeDueToUser == true) {
            showCompleteTransactionMessageAlert(kony.i18n.getLocalizedString("strPaymentOutstandingBalReachedLimit"), false, "error");
        } else {
            var totalPaymentMethodsClicked = 0;
            var objData = new Array();
            if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
                var objData = frmPayment.segPaymentTypeData.data;
                totalPaymentMethodsClicked = objData.length;
            }
            isPaymentTypeFound = false;
            for (i = 0; i < totalPaymentMethodsClicked; i++) {
                if (objData[i].lblPaymentTypeText == paymentText) {
                    newObj = new Array();
                    newObj["imgPaymentRemove"] = "icn_delete.png";
                    newObj["lblPaymentTypeText"] = paymentText;
                    newObj["lblPaymentTypeTextVal"] = addCurrency(parseFloat(parseFloat(txtBoxAmount) + parseFloat(removeCurrency(objData[i].lblPaymentTypeTextVal))).toFixed(2));
                    newObj["hiddenPaymentMode"] = hiddenValue;
                    //over write the current row with quantity value 
                    frmPayment.segPaymentTypeData.setDataAt(newObj, i);
                    //if(hiddenValue != 1) // Ami : we are allowing to swipe more than one credit card
                    isPaymentTypeFound = true;
                }
            }
            //payment type is not exist in form then, add the payment type option in form 
            if (isPaymentTypeFound == false) {
                newObj = new Array();
                newObj["imgPaymentRemove"] = "icn_delete.png";
                newObj["lblPaymentTypeText"] = paymentText;
                newObj["lblPaymentTypeTextVal"] = addCurrency(txtBoxAmount);
                newObj["hiddenPaymentMode"] = hiddenValue;
                totalRecords = objData.length;
                if (totalRecords > 0) {
                    frmPayment.segPaymentTypeData.addDataAt(newObj, totalRecords);
                } else {
                    var newobjarray = [];
                    newobjarray.push(newObj);
                    frmPayment.segPaymentTypeData.data = newobjarray;
                }
            }
            frmPayment.txtBoxAmount.text = addCurrency("0.00");
            blnLastPaymentMethodByCheque = false;
            blnLastPaymentMethodByCard = false;
            paymentRoundOff = false;
            // check for the credit / check amount is valid ( == outstanding amount )- then valid else not 
            if (hiddenValue == 1 || hiddenValue == 2) {
                if (hiddenValue == 1) {
                    blnLastPaymentMethodByCard = true;
                }
                if (hiddenValue == 2) {
                    blnLastPaymentMethodByCheque = true;
                }
            }
            var totalNoOfRecordsInPayment = 0;
            if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
                totalNoOfRecordsInPayment = frmPayment.segPaymentTypeData.data.length;
            }
            // MEGCA-15
            if (in_array(deviceLocale, Countries["CA"])) {
                kony.print("frmPayment.segPaymentTypeData = " + JSON.stringify(frmPayment.segPaymentTypeData.data));
                var cash = _.findWhere(frmPayment.segPaymentTypeData.data, {
                    "hiddenPaymentMode": 0
                });
                if (cash) {
                    paymentRoundOff = true;
                } else {
                    paymentRoundOff = false;
                }
            }
            //
            calculateOutStandingValue();
            showHideCompleteTxButton();
        }
    } else {
        //nothing to do, when amount is not more than zero
        //setEnabledDisabledButton(true,"btnwwtxtCompleteProcessMember"); //** MEG 6193
        displayAlert(kony.i18n.getLocalizedString("strErrorMsgInvalidCardOrCheckAmount"));
    }
}

function startScanningCallBack__(data) {
    var encryptedSampleData = "020301001B3C2800252A3630313130302A2A2A2A2A2A303030305E204348415345205041594D454E54454348205E313831322A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A3F2A3B3630313130302A2A2A2A2A2A303030303D313831322A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A3F2A80A497CDEC87B0BBE88200B1675EF8EAE3D4E270B05B435198B81CEF0002017BF892DAEF2B4F47BC5F727A8B5145540E29853481CDF502A210B55AFDE1B3243454E2178D6CB315EC8E1D848957B627407766CE42005B1A4454063D58E52991A674DA76C514340F32669F3779A45C82C0D39CB4729EBF6E132E79492DB6AEC36475D6DA00A1EE9FA45B0E094F98D9F8DC62994904000D2A200008340603"; //"6904B3C4C6ED4898DF5DB6FF55F672C1294E3F61C33F28E446BB66AD2E28CFAB2A3F33BF7275A028CA333E81D11CC53F121248F80207ADE5A4519BB4C30A9EF12232B04F84DB4B81B33940F91F3B7E9A56F0C1AE2EB62629B15A3230A7EBC118090A0B6112028D685FE06299490100115E200001D4B6";
    var cardType = "004";
    CreditCardInfo.paymentData = "020301001B3C2800252A3630313130302A2A2A2A2A2A303030305E204348415345205041594D454E54454348205E313831322A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A3F2A3B3630313130302A2A2A2A2A2A303030303D313831322A2A2A2A2A2A2A2A2A2A2A2A2A2A2A2A3F2A80A497CDEC87B0BBE88200B1675EF8EAE3D4E270B05B435198B81CEF0002017BF892DAEF2B4F47BC5F727A8B5145540E29853481CDF502A210B55AFDE1B3243454E2178D6CB315EC8E1D848957B627407766CE42005B1A4454063D58E52991A674DA76C514340F32669F3779A45C82C0D39CB4729EBF6E132E79492DB6AEC36475D6DA00A1EE9FA45B0E094F98D9F8DC62994904000D2A200008340603";
    CreditCardInfo.cardType = "004";
    CreditCardInfo.cardExpiryDate = "2018-09-09T00:00:00"; //getLastDayOfMonth('09/09/2018');
    CreditCardInfo.cardTypeName = "Discover"; //GetCardType(data.dencryptedInfo.accountNumber.toString(),false);
    CreditCardInfo.lastFourDigitOfPAN = "9008"; //data.dencryptedInfo.accountNumber.toString().substr(data.dencryptedInfo.accountNumber.toString().length - 4);
    if (checkIfNetworkIsAvailable()) {
        //Credit Card authorise Service calling code
        var amount = removeCurrency(frmPayment.txtBoxAmount.text);
        if (cardType == "") displayAlert(kony.i18n.getLocalizedString("strMsgCardNotSupported"));
        else if (encryptedSampleData != "" && amount > 0 && cardType != "") {
            showSyncLoadingScreen(kony.i18n.getLocalizedString("strCCWSCall"));
            getCreditCardAuthWS(encryptedSampleData, amount, cardType);
        }
    } else {
        alertForManualCCprocess();
    }
}

function startScanningCallBack(data) {
    swipeSuccuss = true;
    try {
        kony.timer.cancel("CCTimer");
    } catch (e) {
        kony.print("Error in canceling Timer");
    }
    if (data.encryptedInfo != undefined && data.encryptedInfo != null) {
        try {
            if (isScannerConnected) CardScannerObject.stopScanning(scannerDisconnedted);
        } catch (e) {
            kony.print("Exception in opening scan FFI");
        }
        var encryptedSampleData = data.encryptedInfo.toString();
        var cardType = GetCardType(data.dencryptedInfo.accountNumber.toString(), true);
        var cardExpiryDate = data.dencryptedInfo.expiryDate.toString();
        var cardTypeName = GetCardType(data.dencryptedInfo.accountNumber.toString(), false);
        kony.print("encryptedSampleData=" + encryptedSampleData);
        kony.print("dencryptedInfo=" + JSON.stringify(data.dencryptedInfo));
        kony.print("cardType=" + cardType);
        kony.print("cardExpiryDate=" + cardExpiryDate);
        CreditCardInfo.paymentData = data.encryptedInfo.toString();
        CreditCardInfo.cardType = GetCardType(data.dencryptedInfo.accountNumber.toString(), true);
        CreditCardInfo.cardExpiryDate = getLastDayOfMonth(data.dencryptedInfo.expiryDate.toString());
        CreditCardInfo.cardTypeName = GetCardType(data.dencryptedInfo.accountNumber.toString(), false);
        CreditCardInfo.lastFourDigitOfPAN = data.dencryptedInfo.accountNumber.toString().substr(data.dencryptedInfo.accountNumber.toString().length - 4);
        kony.print("CreditCardInfo =" + JSON.stringify(CreditCardInfo));
        if (checkIfNetworkIsAvailable()) {
            //Credit Card authorise Service calling code
            var amount = removeCurrency(frmPayment.txtBoxAmount.text);
            if (cardType == "") displayAlert(kony.i18n.getLocalizedString("strMsgCardNotSupported"));
            else if (encryptedSampleData != "" && amount > 0 && cardType != "") {
                showSyncLoadingScreen(kony.i18n.getLocalizedString("strCCWSCall"));
                getCreditCardAuthWS(encryptedSampleData, amount, cardType);
            }
        } else {
            alertForManualCCprocess();
        }
    } else {
        //alert(kony.i18n.getLocalizedString("strInvalidSwipe"));
    }
}

function ingenicoPaymentCallback(data) {
    if (data != null) {
        kony.print('paymentCallback called =', data);
        //alert(data);
        if (data.ResponseCode == 0 && data.ClerkDisplay.toUpperCase() == ingenicocCreditCardPaymentDecisionEnum[1]) {
            // responseCCAuth.Amount=parseFloat((frmPayment.txtBoxAmount.text).replace(glbCurrency, "")).toFixed(2);
            data.IsIngenicoPayment = true;
            responseCCAuth = data;
            //Added for MEG-6746
            var tokenSource = data.tokenSourceData;
            kony.print("tokenSource =" + tokenSource);
            var tokenSourceObj = {};
            if (tokenSource != undefined) {
                tokenSourceObj = JSON.parse(tokenSource);
                kony.print("tokenSourceObj =" + JSON.stringify(tokenSourceObj));
                kony.print("tokenSource cybersource_cc_ar_processor_response =" + tokenSourceObj.cybersource_cc_ar_processor_response);
                kony.print("tokenSource cybersource_descision =" + tokenSourceObj.cybersource_descision);
            }
            kony.print("paymentCallback preActivationObj.isMPFromService =" + preActivationObj.isMPFromService);
            if (preActivationObj.isMPFromService == "true") {
                //if(checkValidString(data.Token) && (parseInt(tokenSourceObj.cybersource_cc_ar_processor_response) == 100) && (parseInt(tokenSourceObj.cybersource_descision) == 100) ){
                if (checkValidString(data.Token) && (parseInt(tokenSourceObj.cybersource_descision) == 100)) {
                    alertCreditCardSuccessNotify();
                } else {
                    boPreActivation.MPPreActivationFailure(true);
                }
            } else {
                alertCreditCardSuccessNotify();
            }
        } else {
            displayAlert(getErrorMessageFromIngenicoGatewayErrorcode(data.ResponseCode));
        }
    }
}

function startSwipeSession() {
    if (!swipeSuccuss) alertForMessages(kony.i18n.getLocalizedString("strCCSessionMsg"));
    stopTimerAndDisableSled();
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function swipeCreditCard(response) {
    if (response == true) {
        if (isPaymentByBTDevice) {
            if (!isDeviceConnected) {
                alertForMessages(kony.i18n.getLocalizedString("strIngenicoMSGDevNotConnected"));
                return;
            } else {
                try {
                    var txtBoxAmount = parseFloat((frmPayment.txtBoxAmount.text).replace(glbCurrency, "")).toFixed(2);
                    if (deviceLevelTransactId != null && deviceLevelTransactId !== undefined && deviceLevelTransactId != "") {
                        kony.print("IN swipeCreditCard deviceLevelTransactId==>>>" + deviceLevelTransactId);
                    } else {
                        boEnrollMember.generateDeviceLevelTransactID();
                        kony.print("IN swipeCreditCard Generated deviceLevelTransactId==>>>" + deviceLevelTransactId);
                    }
                    var merchantReferenceCode = getMerchantReferanceCode(deviceLevelTransactId);
                    var tokenReferenceNo = getTokenReferanceNumber(deviceLevelTransactId);
                    var enrollToken = false;
                    if (preActivationObj && preActivationObj.hasOwnProperty('voucherNumber') && preActivationObj.isMPFromService == "true") {
                        enrollToken = true;
                        var memberActivationDetails = clone(preActivationObj);
                        kony.print("ss:preActivationObj details befoew " + JSON.stringify(preActivationObj));
                        kony.print("ss:memberActivationDetails details befoew " + JSON.stringify(memberActivationDetails));
                        if (memberActivationDetails.hasOwnProperty('firstName')) {
                            memberActivationDetails.firstName = memberActivationDetails.firstName.replace("'", " ").replace("-", " ");
                        }
                        if (memberActivationDetails.hasOwnProperty('middleName')) {
                            memberActivationDetails.middleName = memberActivationDetails.middleName.replace("'", " ").replace("-", " ");
                        }
                        if (memberActivationDetails.hasOwnProperty('lastName')) {
                            memberActivationDetails.lastName = memberActivationDetails.lastName.replace("'", " ").replace("-", " ");
                        }
                        kony.print("ss:preActivationObj details after " + JSON.stringify(preActivationObj));
                        kony.print("ss:memberActivationDetails details after " + JSON.stringify(memberActivationDetails));
                    }
                    processIngenicoPayment(txtBoxAmount.toString().replace('.', ''), merchantReferenceCode, enrollToken, tokenReferenceNo, memberActivationDetails, ingenicoPaymentCallback);
                } catch (e) {
                    kony.print("Exception in opening scan FFI");
                }
            }
        } else {
            if (!isScannerConnected) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgCCDeviceNotConnected"));
                return;
            }
            try {
                kony.timer.schedule("CCTimer", startSwipeSession, 120, false);
                CardScannerObject.startScanning(startScanningCallBack);
                //startScanningCallBack({});
            } catch (e) {
                kony.print("Exception in opening scan FFI");
                try {
                    kony.timer.cancel("CCTimer");
                } catch (e) {
                    kony.print("Exception in opening scan FFI");
                }
            }
        }
    }
}

function alertForswipeCreditCard() {
    if (readerInfoObj.IsIngenico) {
        isPaymentByBTDevice = true;
    }
    swipeSuccuss = false;
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strSwipeCC"),
        //message: "Do you want to swipe the Credit card?",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"),
        noLabel: kony.i18n.getLocalizedString("strLblNo"),
        alertHandler: swipeCreditCard
    };
    var psConfig = {};
    var weightLossAlert = kony.ui.Alert(alertConfig, psConfig);
}

function displayAlert(message) {
    var alertConfig = {
        message: message, // kony.i18n.getLocalizedString(message),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
        alertHandler: ""
    };
    var psConfig = {};
    var myAlert = kony.ui.Alert(alertConfig, psConfig);
}

function calculateOutStandingValue() {
    var totalPaymentTypes = 0;
    productCartTotalAmountTemp = ProductSale.Cart.total;
    // MEGCA-15 - Allow user to enter round off values for payment type cash
    var productCartRoundOffAmtTemp = roundOff5Cents(productCartTotalAmountTemp);
    var productCartRoundOffHighAmt = parseFloat(roundOffToHigh5Cents(productCartTotalAmountTemp)).toFixed(2);
    var productCartRoundOffLowAmt = parseFloat(roundOffToLow5Cents(productCartTotalAmountTemp)).toFixed(2);
    var productCartRoundOffAmt = parseFloat(productCartRoundOffAmtTemp).toFixed(2);
    // end
    if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
        objData = frmPayment.segPaymentTypeData.data;
        totalPaymentTypes = objData.length;
    }
    totalPaymentGiven = 0;
    for (i = 0; i < totalPaymentTypes; i++) {
        totalPaymentGiven += parseFloat(removeCurrency(objData[i].lblPaymentTypeTextVal));
    }
    kony.print(" --> function calculating value for outstanding balance ::: start ");
    kony.print("---> user payment given = " + totalPaymentGiven);
    kony.print("IS calculate diff--->" + (productCartTotalAmountTemp - totalPaymentGiven));
    var diffTemp = productCartTotalAmountTemp - totalPaymentGiven;
    if (diffTemp > 0) {
        outstandingNegativeBal = false;
    } else {
        outstandingNegativeBal = true;
    }
    kony.print("IS outstandingNegativeBal" + outstandingNegativeBal);
    //set in global variable for change owned screen after payment 
    amountMemberHasSubmittedForPayment = parseFloat(totalPaymentGiven).toFixed(2);
    outStandingBal = parseFloat(productCartTotalAmountTemp - totalPaymentGiven).toFixed(2);
    // MEGCA-15
    if (in_array(deviceLocale, Countries["CA"])) {
        kony.print("IS productCartRoundOffAmt--->" + productCartRoundOffAmt);
        kony.print("IS productCartRoundOffHighAmt--> " + productCartRoundOffHighAmt + "  productCartRoundOffLowAmt -->" + productCartRoundOffLowAmt);
        kony.print("IS amountMemberHasSubmittedForPayment--->" + amountMemberHasSubmittedForPayment);
        kony.print("IS paymentRoundOff--->" + paymentRoundOff);
        if (parseFloat(productCartTotalAmountTemp).toFixed(2) != amountMemberHasSubmittedForPayment && (productCartRoundOffHighAmt == amountMemberHasSubmittedForPayment || productCartRoundOffLowAmt == amountMemberHasSubmittedForPayment) && paymentRoundOff == true) {
            enableCompleteTransaction = true;
        } else {
            enableCompleteTransaction = false;
        }
    }
    if (outStandingBal >= 0) {
        frmPayment.lblOutstandingBalInfo.text = addCurrency(parseFloat(Math.abs(outStandingBal)).toFixed(2));
        frmPayment.lblOutstandingBal.text = kony.i18n.getLocalizedString("strOutstandingBalance");
        isChangeDueToUser = false;
    } else {
        frmPayment.lblOutstandingBalInfo.text = addCurrency(parseFloat(Math.abs(outStandingBal)).toFixed(2));
        frmPayment.lblOutstandingBal.text = kony.i18n.getLocalizedString("strlblChangeDue");
        isChangeDueToUser = true;
    }
    kony.print("---> function calculating outstanding function end ::: user amount submitted = " + amountMemberHasSubmittedForPayment + '-- isChangeDueToUser = ' + isChangeDueToUser);
}

function eventonClickvboxRemovePaymentDetails() {
    kony.print(" --> function remove single payment method from the segment ");
    selectedIndex = frmPayment.segPaymentTypeData.selectedIndex;
    if (selectedIndex) {
        selectedRowIndex = selectedIndex[1];
        selectedPaymentRecord = frmPayment.segPaymentTypeData.data[selectedRowIndex];
        kony.print("----------------->" + JSON.stringify(selectedPaymentRecord));
        if (selectedPaymentRecord != null && selectedPaymentRecord.hiddenPaymentMode == 1) {
            if (checkAppSettingEnable(Settings["CC"])) {
                if ((glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") && creditCrardSalePaymentDataObj != null) {
                    //Webservice call for Returning the amount to credit card.
                    //if response is success then the amount is credited to the Members credit card.
                    //the amount will be the amount which we are receiving in the response.
                    getCreditCardVoidWS(getCreditCardVoidWSSuccess);

                    function getCreditCardVoidWSSuccess(messageText) {
                        showProductReturnAlert(messageText, false, "voidinfo");
                        removePaymentDatails(selectedRowIndex);
                    }
                } else {
                    removePaymentDatails(selectedRowIndex);
                }
            } else {
                removePaymentDatails(selectedRowIndex);
            }
        } else {
            removePaymentDatails(selectedRowIndex);
        }
    }
}

function removePaymentDatails(selectedRowIndex) {
    blnLastPaymentMethodByCheque = false;
    blnLastPaymentMethodByCard = false;
    frmPayment.segPaymentTypeData.removeAt(selectedRowIndex);
    removePaymentForATW();
    calculateOutStandingValue();
    showHideCompleteTxButton();
}

function eventonClickvboxRemoveAllPaymentDetails() {
    kony.print(" --> function remove all payment methods  ");
    var totalRecordsInPayment = 0;
    if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
        totalRecordsInPayment = frmPayment.segPaymentTypeData.data.length;
    }
    kony.print("totalRecordsInPayment :" + totalRecordsInPayment);
    var segmentData = frmPayment.segPaymentTypeData.data;
    kony.print("segmentData :" + JSON.stringify(segmentData));
    var index = totalRecordsInPayment - 1;
    var isCreditCard = false;
    var len = 0;
    if (totalRecordsInPayment > 0) {
        while (totalRecordsInPayment > 0) {
            kony.print("totalRecordsInPayment 1: " + totalRecordsInPayment);
            var paymentRecord = frmPayment.segPaymentTypeData.data[index];
            kony.print("Remove all paymentRecord : " + JSON.stringify(paymentRecord));
            if (paymentRecord != null && paymentRecord.hiddenPaymentMode == 1) {
                kony.print(" in  cc totalRecordsInPayment 1: " + totalRecordsInPayment);
                if (checkAppSettingEnable(Settings["CC"])) {
                    if ((glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") && creditCrardSalePaymentDataObj != null) {
                        isCreditCard = true;
                    } else {
                        frmPayment.segPaymentTypeData.removeAt(index);
                    }
                } else {
                    frmPayment.segPaymentTypeData.removeAt(index);
                }
            } else {
                frmPayment.segPaymentTypeData.removeAt(index);
            }
            if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
                totalRecordsInPayment = frmPayment.segPaymentTypeData.data.length;
                if (isCreditCard) {
                    index = index--;
                    totalRecordsInPayment--;
                }
                index--;
            }
            kony.print(" in  cc totalRecordsInPayment 2: " + totalRecordsInPayment);
            kony.print(" in  cc index 2: " + index);
        }
    }
    /*for(var i in segmentData){
		index++;
		var paymentRecord = segmentData[i];
		kony.print("Remove all paymentRecord : "+JSON.stringify(paymentRecord));
		if(paymentRecord != null && paymentRecord.hiddenPaymentMode == 1){
			if(checkAppSettingEnable(Settings["CC"])){
					if((glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") && creditCrardSalePaymentDataObj != null){
					//Webservice call for Returning the amount to credit card.
					//if response is success then the amount is credited to the Members credit card.
					//the amount will be the amount which we are receiving in the response.
					//var amount = (paymentRecord.lblPaymentTypeTextVal).replace(glbCurrency, "");
					//displayAlert(kony.i18n.getLocalizedString("strCCTranRefund1") + " "+ glbCurrency  + amount+ " " + kony.i18n.getLocalizedString("strCCTranRefund2"));
					isCreditCard=true;
				}else{
					frmPayment.segPaymentTypeData.removeAt(totalRecordsInPayment-index);
				}
			}else{
				frmPayment.segPaymentTypeData.removeAt(totalRecordsInPayment-index);
			}
		}else{
			frmPayment.segPaymentTypeData.removeAt(totalRecordsInPayment-index);
		}
 	}
 	*/
    reCalculateOutStandingValue();
    if (isCreditCard) {
        getCreditCardVoidWS(getCreditCardVoidWSSuccess);

        function getCreditCardVoidWSSuccess(messageText) {
            showProductReturnAlert(messageText, false, "voidinfo");
            frmPayment.segPaymentTypeData.removeAt(0);
            reCalculateOutStandingValue();
        }
    }
    removePaymentForATW();
}

function reCalculateOutStandingValue() {
    calculateOutStandingValue();
    showHideCompleteTxButton();
    blnLastPaymentMethodByCheque = false;
    blnLastPaymentMethodByCard = false;
}

function showHideCompleteTxButton() {
    kony.print(" --> function show hide complete transaction :: start  ");
    kony.print("----> isChangeDueToUser = " + isChangeDueToUser);
    //if memeber submited amount > cart total then dont allow to proceed and make button disable
    var outstandingBalValue = parseFloat(removeCurrency(frmPayment.lblOutstandingBalInfo.text));
    var cartAmountValue = parseFloat(ProductSale.Cart.total);
    //var cartRoundOffAmtValue = roundOff5Cents(cartAmountValue);
    //if( amountMemberHasSubmittedForPayment < productCartTotalAmount  )
    if (outstandingBalValue <= 0 || (FlowForScreens.DirectSale != IsDirectSale && cartAmountValue == 0) || isChangeDueToUser == true || enableCompleteTransaction == true) {
        kony.print("---- if condition inside outstandingBalValue = " + outstandingBalValue + ' -- enable button = true ');
        frmPayment.btnCompleteProcessMember.skin = "btnwwtxtCompleteProcessMember";
        frmPayment.btnCompleteProcessMember.setEnabled(true);
    } else {
        kony.print("---- else -- outstandingBalValue = " + outstandingBalValue + ' -- enable button= false ');
        frmPayment.btnCompleteProcessMember.skin = "btnNoWeighInSelected";
        frmPayment.btnCompleteProcessMember.setEnabled(false);
    }
    kony.print(" --> function show hide complete transaction :: END  ");
}

function preShow_FormPayment() {
    kony.print("-------- step1 -  comes in preShow_FormPayment ");
    if (readerInfoObj.IsIngenico) {
        if (isDeviceConnected) {
            frmPayment.ccValidateImg.src = "icn_credit_card_green.png";
            frmPayment.ccValidateImg.isVisible = true;
            //frmPayment.boxBatteryStatus.isVisible  = true;
            frmPayment.boxBatteryStatus.imgBatteryStatus.isVisible = true;
            frmPayment.boxBatteryStatus.lblBatteryStatus.isVisible = true;
            frmPayment.lblBatteryStatus.text = ccBatteryLevel + "%";
            //updateBatteryStatus();
        } else {
            frmPayment.ccValidateImg.src = "icn_credit_card.png";
            frmPayment.boxBatteryStatus.imgBatteryStatus.isVisible = false;
            frmPayment.boxBatteryStatus.lblBatteryStatus.isVisible = false;
        }
    } else {
        frmPayment.ccValidateImg.isVisible = false;
        frmPayment.boxBatteryStatus.imgBatteryStatus.isVisible = false;
        frmPayment.boxBatteryStatus.lblBatteryStatus.isVisible = false;
    }
    blnLastPaymentMethodByCheque = false;
    blnLastPaymentMethodByCard = false;
    isChangeDueToUser = false;
    frmPayment.segPaymentTypeData.data = [];
    frmPayment.lblTotalData.text = addCurrency(ProductSale.Cart.total);
    eventonClickvboxRemoveAllPaymentDetails();
    frmPayment.txtBoxAmount.text = addCurrency("0.00");
    frmPayment.btnCompleteProcessMember.setEnabled(false);
    frmPayment.txtBoxAmount.setEnabled(false); //MEG - 2253 solved by disabling this textbox
    frmPayment.btnCompleteProcessMember.skin = "btnNoWeighInSelected";
    kony.print("-------- step 2  -  comes in preShow_FormPayment - button enable disable etc  ");
    if (checkAppSettingEnable(Settings["SalesForce"]) && checkIfNetworkIsAvailable()) {
        frmPayment.hboxSendReceipt.setVisibility(true);
        frmPayment.imgSendReceipt.src = "icn_checkbox_unchecked.png";
        frmPayment.paymentScroll.containerHeight = 64;
    }
    showHideCompleteTxButton();
}
var CheckFormshow = false;

function showCompleteTransactionMessageAlert(messageText, isRedirectToHomePage, alert_type) {
    //alert("isRedirectToHomePage value::" + isRedirectToHomePage);
    //	alert_type_const = (alert_type == "error") ?   constants.ALERT_TYPE_ERROR : constants.ALERT_TYPE_INFO;
    if (alert_type == "error") {
        alert_type_const = constants.ALERT_TYPE_ERROR;
    } else if (alert_type == "confirmation") {
        alert_type_const = constants.ALERT_TYPE_CONFIRMATION;
    } else {
        alert_type_const = constants.ALERT_TYPE_INFO;
    }
    if (isRedirectToHomePage == true) {
        // Added for MEGCA-15
        if (alert_type == "confirmation") {
            CheckFormshow = true;
            alertHandlerFunction = RoundoffConfirmHandler; //This shows home screen
        } else {
            CheckFormshow = true;
            alertHandlerFunction = EnrollAlertHandler; //This shows home screen
        }
    } else if (isRedirectToHomePage == false) {
        if (alert_type == "error") {
            alertHandlerFunction = "";
        } else {
            CheckFormshow = false;
            alertHandlerFunction = EnrollAlertHandler; //This shows receipt screen
        }
    }
    //Defining basicConf parameter for alert
    var basicConf = {
        message: messageText,
        alertType: alert_type_const,
        alertTitle: getLocalizedString("strAlertTitle"),
        yesLabel: getLocalizedString("strLblOk"),
        noLabel: getLocalizedString("btnCancel"),
        alertHandler: alertHandlerFunction
    };
    //Defining pspConf parameter for alert
    var pspConf = {};
    //Alert definition
    var infoAlert = kony.ui.Alert(basicConf, pspConf);
}

function RoundoffConfirmHandler(response) {
    if (response == true) {
        enrollingMember(CheckFormshow);
    }
}

function EnrollAlertHandler() {
    enrollingMember(CheckFormshow);
}

function enrollingMember(formshow) {
    displayProgressView();
    CheckFormshow = formshow; //AAA
    kony.print("IsDirectSale===>>" + IsDirectSale);
    kony.print("IsProductFlowFromSearch===>>" + IsProductFlowFromSearch);
    kony.print("IsSimpleReturn===>>" + IsSimpleReturn);
    kony.print("isServiceProvider===>>" + isServiceProvider);
    kony.print("formshow===>>" + formshow);
    kony.print("preActivationObj.isMPFromService===>>" + preActivationObj.isMPFromService);
    if ((IsDirectSale == "" || IsDirectSale != FlowForScreens.DirectSale) && IsProductFlowFromSearch == false && (IsSimpleReturn != FlowForScreens.SimpleReturn || IsSimpleReturn == "") && isServiceProvider == false && IsProductFlowFromCheckedIn == false) //&&( IsDirectSale == "" || IsSimpleReturn == ""))
    {
        removeProgressView();
        kony.print("This is the IF condition enrollingMember");
        if (preActivationObj.hasOwnProperty('voucherNumber')) {
            kony.print("In hasOwnProperty('voucherNumber') ===>>>viewPayment");
            //Patch for member request failure due to empty coupon code.
            preActivationObj.voucherNumber = glbFormName.txtSubscriptionID.text;
            var date = preActivationObj.voucherNumber.slice(-6);
            var dt = new Date(date.slice(0, 2) + "/" + date.slice(2, 4) + "/" + date.slice(4, 6));
            preActivationObj.ExpirationDate = supportTime(dt, "", "yyyy-mm-ddTHH:NN:SS");
            preActivationObj.MemberID = glbMemberId;
            preActivationObj.MtngOccrID = parseInt(checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum);
            preActivationObj.ActivationDate = "";
            preActivationObj.PreactivationDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            preActivationObj.LocationID = parseInt(glbLocationID);
            preActivationObj.SaleTransactnId = deviceLevelTransactId.toString();
            preActivationObj.MeetingDate = glbMeetingDate;
            preActivationObj.ActivationStatus = "";
            preActivationObj.CouponCode = preActivationObj.voucherNumber.slice(0, -6).toUpperCase();
            kony.print("preActivationObj" + JSON.stringify(preActivationObj));
        }
        if (preActivationObj.isMPFromService == "true") {
            var voucherNumberLength = preActivationObj.voucherNumber.length;
            var ExpirationDateLength = preActivationObj.ExpirationDate.length;
            var Name = getCurrentMemberName();
            popupMPPreActivated.lblMemberName.text = Name.firstName + " " + Name.lastName;
            popupMPPreActivated.lblMothlyPass.text = preActivationObj.voucherNumber.slice(0, voucherNumberLength - 6);
            //Added for MEG-5651 (display date in mm-dd-yyyy format)
            var expDate = preActivationObj.ExpirationDate;
            var dateArr = expDate.split("T");
            expDate = dateArr[0];
            dateArr = expDate.split("-");
            var updatedExpDate = dateArr[1] + "-" + dateArr[2] + "-" + dateArr[0];
            popupMPPreActivated.lblExpirationDate.text = updatedExpDate;
            popupMPPreActivated.txtEmailAddress.text = preActivationObj.email;
            var monitorData = {
                "CouponCode": popupMPPreActivated.lblMothlyPass.text,
                "ExpirationDate": popupMPPreActivated.lblExpirationDate.text
            };
            boMonitor.log("PreActivation:DataInPopup ", "PreActivation", monitorData, FlowForMonitor.ServiceCall);
            boMonitor.log("PreActivation:DataInDB ", "PreActivation", preActivationObj, FlowForMonitor.ServiceCall);
            popupMPPreActivated.show();
        } else {
            onclickCompleteEnrollProcess();
            disableCreditCardAndBackBtn(false);
        }
    } else if (isServiceProvider) {
        onCompleteSpProductSale(formshow);
        disableCreditCardAndBackBtn(false);
    } else {
        onClickCompleteTransaction();
        disableCreditCardAndBackBtn(false);
        kony.print("glbMeetingNum ===>" + glbMeetingNum + "====IsNoMeetingSelected====" + IsNoMeetingSelected);
        kony.print("This is the else condition enrollingMember");
    }
    if (IsFromPM == FlowForScreens.ProcessMember) {
        boMonitor.log("Member Process:- Complete Transaction", "btnCompleteProcessMember", "", FlowForMonitor.ProcessMember, true);
    }
}

function redirectToHomeScreen(response) {
    enrollingMember();
    //frmHomeScreen.show();
}

function customAlert(messageText) {
    alert_type_const = constants.ALERT_TYPE_INFO;
    alertHandlerFunction = redirectforHomeScreen;
    //Defining basicConf parameter for alert
    var basicConf = {
        message: messageText,
        alertType: alert_type_const,
        alertTitle: kony.i18n.getLocalizedString("strAlertTitle"),
        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
        alertHandler: alertHandlerFunction
    };
    //Defining pspConf parameter for alert
    var pspConf = {};
    //Alert definition
    var infoAlert = kony.ui.Alert(basicConf, pspConf);
}

function redirectforHomeScreen() {
    frmHomeScreen.show();
}

function eventonClickCompleteTransaction() {
    kony.print("------>on click of complete transaction ");
    if (ProductSale.Cart.total != 0) {
        if (IsSimpleReturn == FlowForScreens.SimpleReturn) {
            kony.print("------>cart amount zero, and simple return case ");
            customAlert(kony.i18n.getLocalizedString("strAlertSimpleReturn") + " " + addCurrency(ProductSale.Cart.total) + " " + kony.i18n.getLocalizedString("strAlertSimpleReturnCredit"));
            onClickCompleteTransaction();
            kony.print("No need for Payment Screen");
        } else {
            kony.print("------>show payment form ");
            frmPayment.show();
        }
    } else {
        var segData = frmDirectSaleProductList.segSKUData.data;
        if (segData && segData.length > 0) {
            emptyDirectSale = true;
            kony.print("set emptyDirectSale=" + emptyDirectSale);
            if (isServiceProvider) {
                var MemberValuesFromDB = {};
                MemberValuesFromDB.MemberID = glbMemberId
                MemberValuesFromDB.PreRegNumber = 0;
                MemberValuesFromDB.TrackerID = 0;
                MemberValuesFromDB.RegNumber = 0;
                MemberValuesFromDB.MemberType = 'Active';
                MemberValuesFromDB.MaintenanceMode = 'false';
                MemberValuesFromDB.TrackerStartDate = "0001-01-01T00:00:00";
                MemberValuesFromDB.FailedDate = "0001-01-01T00:00:00";
                MemberValuesFromDB.Eligible = 'false';
                MemberValuesFromDB.EligibleDate = "0001-01-01T00:00:00";
                MemberValuesFromDB.WeightCountMet = 'false';
                MemberValuesFromDB.StartDate = "0001-01-01T00:00:00";
                MemberValuesFromDB.IsFreshStart = 'false';
                MemberValuesFromDB.RefreshDate = "0001-01-01T00:00:00";
                MemberValuesFromDB.PaidLastFee = 'false';
                MemberValuesFromDB.EnterpriseID = 0;
                MemberValuesFromDB.EmailID = "";
                MemberValuesFromDB.LinkType = "None";
                MemberValuesFromDB.UserName = "";
                MemberValuesFromDB.IsLink = "true";
                MemberValuesFromDB.EmpID = glbEmployeeId;
                MemberValuesFromDB.IsPAYG = 'false';
                MemberValuesFromDB.BillingState = 0;
                MemberValuesFromDB.ShippingState = 0;
                MemberValuesFromDB.WeeksCompleted = 0;
                MemberValuesFromDB.SubscriptnID = 0;
                MemberValuesFromDB.ProductID = 0;
                MemberValuesFromDB.SessionNumber = 1;
                MemberValuesFromDB.RedeemedDate = "0001-01-01T00:00:00";
                MemberValuesFromDB.EnrollmentDate = "0001-01-01T00:00:00";
                MemberValuesFromDB.ReedeemedPasses = 0;
                MemberValuesFromDB.MissWeekPasses = 0;
                MemberValuesFromDB.IsDateRedeemed = 'true';
                MemberValuesFromDB.UserStsChngRsn = "None";
                MemberValuesFromDB.UserStsEndPrd = "0001-01-01T00:00:00";
                MemberValuesFromDB.LastAttendanceDate = glbMeetingDate;
                MemberValuesFromDB.Usertype = UserType.Employee;
                var nameArr = [];
                kony.print("::Nikita nameArr in viewPayment::==" + frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text); //Modified by Studio Viz
                nameArr = frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text.split(" "); //Modified by Studio Viz
                kony.print("::Nikita nameArr in viewPayment::==" + nameArr);
                MemberValuesFromDB.FirstName = nameArr[0];
                MemberValuesFromDB.LastName = nameArr[1];
                //MemberValuesFromDB.create(createSPMemberSuccessCallback, eventErrorCallBack);
                kony.print("::Nikita MemberValuesFromDB in viewPayment::==" + JSON.stringify(MemberValuesFromDB));
                insertToTable("MemberDetails", MemberValuesFromDB, function() {
                    onClickCompleteTransaction();
                });
                //DBMemberDetailsController.create(MemberValuesFromDB, function() {
                //                    onClickCompleteTransaction();
                //                }, eventErrorCallBack, false);
            } else {
                onClickCompleteTransaction();
            }
            kony.print("No need for Payment Screen");
        }
    }
}

function checkPaymentTypeValueInPaymentDetails(paymentModeType) {
    var totalRecordsInPayment = 0;
    if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
        totalRecordsInPayment = frmPayment.segPaymentTypeData.data.length;
    }
    amountForPaymentMode = 0;
    for (i = 0; i < totalRecordsInPayment; i++) {
        if (frmPayment.segPaymentTypeData.data[i].hiddenPaymentMode == paymentModeType) {
            amountForPaymentMode = removeCurrency(frmPayment.segPaymentTypeData.data[i].lblPaymentTypeTextVal);
        }
    }
    return amountForPaymentMode;
}

function eventOnclick_DeleteAllPaymentDetails() {
    if (frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data) {
        totalRecordsInPayment = frmPayment.segPaymentTypeData.data.length;
    }
    if (totalRecordsInPayment > 0) {
        var alertConfig = {
            message: kony.i18n.getLocalizedString("strConfirmMsgDeleteAllPayment"),
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: "",
            yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
            noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No", 
            //alertHandler: eventonClickvboxRemoveAllPaymentDetails
            alertHandler: function(response) {
                kony.print("-=-------------> response --> delete payment record response== " + response);
                if (response == true) {
                    eventonClickvboxRemoveAllPaymentDetails();
                } else {}
            }
        };
        var psConfig = {};
        var paymentAlert = kony.ui.Alert(alertConfig, psConfig);
    }
}

function eventOnclick_DeleteEachPaymentDetail() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strConfirmMsgDeletePayment"),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
        //alertHandler: eventonClickvboxRemovePaymentDetails
        alertHandler: function(response) {
            kony.print("-=-------------> response --> delete payment record response== " + response);
            if (response == true) {
                eventonClickvboxRemovePaymentDetails();
            } else {}
        }
    };
    var psConfig = {};
    var paymentAlert = kony.ui.Alert(alertConfig, psConfig);
}

function postShow_generatePaymentOptions() {
    kony.print("isNonTangibleDataPresent : " + isNonTangibleDataPresent);
    paymentMode = "";
    kony.print("In postShow_generatePaymentOptions : " + parseFloat(ProductSale.Cart.total));
    frmPayment.txtBoxAmount.text = addCurrency(parseFloat(ProductSale.Cart.total).toFixed(2));
    var strCurrentLocale = kony.i18n.getCurrentDeviceLocale();
    kony.print("-->strCurrentLocale  = " + strCurrentLocale);
    var arrTemp = strCurrentLocale.split("_");;
    kony.print("--> arrTemp  = " + arrTemp);
    var regionCode = (arrTemp[1]).toUpperCase();
    kony.print("--> regionCode = " + regionCode);
    var totalItem = frmPayment.vboxPaymentButtons.widgets().length;
    // alert(totalItem);
    for (var item = totalItem; item >= 0; item--) {
        frmPayment.vboxPaymentButtons.removeAt(item);
    }
    for (key in paymentOptions) {
        if (in_array(regionCode, paymentOptions[key])) {
            kony.print("--> regionCode = " + regionCode + ", " + paymentOptions[key]);
            kony.print("isNonTangibleDataPresent : " + isNonTangibleDataPresent + " IsAWSLocation: " + IsAWSLocationEnabled());
            if ((key == "strSplit") && IsAWSLocationEnabled() && (isNonTangibleDataPresent == true)) {
                hboxPamentButton = createPaymentButton(key);
                frmPayment.vboxPaymentButtons.add(hboxPamentButton);
            } else if (key != "strSplit") {
                hboxPamentButton = createPaymentButton(key);
                frmPayment.vboxPaymentButtons.add(hboxPamentButton);
            }
        }
    }
    setEnabledDisabledButton(true, "btnwwtxtCompleteProcessMember"); //** 5823 
}

function createPaymentButton(buttonKey) {
    var buttonText = kony.i18n.getLocalizedString(buttonKey);
    kony.print("--->> Ingenico " + buttonText);
    kony.print("--->> dynamic hbox creation -- start " + buttonText);
    //Defining the properties for a box with the ID :"boxIdTest"
    var basicConfBox = {
        id: "hbox_" + buttonKey,
        isVisible: true,
        skin: "hboxSearchLocation",
        orientation: constants.BOX_LAYOUT_HORIZONTAL
    };
    var layoutConfBox = {
        containerWeight: 80,
        percent: false,
        layoutAlignment: constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        contentAlignment: constants.CONTENT_ALIGN_TOP_CENTER,
        padding: [10, 10, 10, 10],
        margin: [2, 10, 0, 2],
        vExpand: true
    };
    var pspConfBox = {};
    boxTest = new kony.ui.Box(basicConfBox, layoutConfBox, pspConfBox);
    kony.print("--->> dynamic hbox creation -- end ");
    kony.print("--->> dynamic button creation -- start ");
    //Defining the button with onClick:onClickCallBck.
    /* var btnBasic ={id: buttonId, isVisible:true, skin: "btnwwtxtCompleteProcessMember", focusSkin:"btnwwtxtCompleteProcessMember" , text: buttonText , onClick:eventonClickhboxForPaymentMode(buttonText)};
    var btnLayout ={containerWeight:100, padding:[01,0,6,0], margin:[3,0,3,0], hExpand:true, vExpand:false, displayText:true};
    var btnPSP ={  };
	
    //Creating the button. 
    var button = new kony.ui.Button(btnBasic, btnLayout, btnPSP);
    */
    var btnBasic = {
        id: buttonKey,
        isVisible: true,
        skin: "btnwwtxtCompleteProcessMember",
        focusSkin: "btnwwtxtCompleteProcessMember",
        text: buttonText,
        "onClick": eventonClickPaymentOptionButton
    };
    var btnLayout = {
        containerWeight: 100,
        padding: [5, 5, 5, 5],
        margin: [5, 10, 5, 5],
        hExpand: true,
        vExpand: false,
        displayText: true
    };
    var btnPSP = {};
    //Creating the button.
    var button = new kony.ui.Button(btnBasic, btnLayout, btnPSP);
    boxTest.add(button);
    kony.print("--->> dynamic button creation -- done ");
    return button;
}

function eventonClickPaymentOptionButton(e) {
    kony.print("event onclick button" + e.text);
    kony.print("::glbFormName.lblSubType.text::" + glbFormName.lblSubType.text);
    // added for when button click on payment mode section
    //alert("eventonClickPaymentOptionButton == "+e.text);
    paymentMode = e.text;
    isPaymentByBTDevice = false;
    if (paymentMode == kony.i18n.getLocalizedString("strCredit") && readerInfoObj.IsIngenico) {
        isPaymentByBTDevice = true;
    }
    //eventonClickhboxForPaymentMode(e.text);
    eventonClickPaymentMode(e.text);
}

function eventOnClickChkSendReceipt() {
    if (frmPayment.imgSendReceipt.src == "icn_checkbox_checked.png") {
        frmPayment.imgSendReceipt.src = "icn_checkbox_unchecked.png";
    } else {
        frmPayment.imgSendReceipt.src = "icn_checkbox_checked.png";
        var emailAddress = "";
        kony.print("popupAddEmail.txtEmailAddress.text : " + popupAddEmail.txtEmailAddress.text);
        if (IsEnrollMember == FlowForScreens.Enroll) {
            if (preActivationObj.hasOwnProperty('voucherNumber')) emailAddress = preActivationObj.email;
            else emailAddress = (checkForUndefinedVal(glbFormName.txtEmailID.text) == "") ? frmEnrollNewMember.txtEmailID.text : glbFormName.txtEmailID.text;
        } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
            if (preActivationObj.hasOwnProperty('voucherNumber')) emailAddress = preActivationObj.email;
            else emailAddress = (checkForUndefinedVal(glbFormName.txtEmailID.text) == "") ? frmAddIndividulaMember.txtEmailID.text : glbFormName.txtEmailID.text;
        } else if (IsFromPM == FlowForScreens.ProcessMember) {
            if (preActivationObj.hasOwnProperty('voucherNumber')) emailAddress = preActivationObj.email;
            else emailAddress = checkForUndefinedVal(glbFormName.txtEmailID.text);
        } else if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
            if (preActivationObj.hasOwnProperty('voucherNumber')) emailAddress = preActivationObj.email;
            else emailAddress = (checkForUndefinedVal(glbFormName.txtEmailID.text) == "") ? frmEnrollReturningMember.lblEmailInfo.text : glbFormName.txtEmailID.text;
        } else if (IsProductFlowFromSearch || IsProductFlowFromCheckedIn) {
            emailAddress = selectedMemberData.Email;
        } else {
            emailAddress = popupAddEmail.txtEmailAddress.text;
        }
        kony.print("emailAddress : " + emailAddress);
        if (emailAddress == "" || emailAddress == undefined) {
            popupAddEmail.show();
        } else {
            popupAddEmail.txtEmailAddress.text = emailAddress;
        }
    }
}

function sendReceiptEmail(saleItemsObject, salePaymentObject, emailAdd) {
    kony.print("Send receipt email to user.");
    kony.print("saleItemsObject: " + JSON.stringify(saleItemsObject));
    kony.print("salePaymentObject: " + JSON.stringify(salePaymentObject));
    var email = popupAddEmail.txtEmailAddress.text;
    if (email == "" || email == undefined) email = emailAdd
    kony.print("email : " + email);
    var saleItems = [];
    var salePayment = [];
    var saleTranID, salePaymentDate = "";
    for (var i = 0; i < saleItemsObject.length; i++) {
        var obj = saleItemsObject[i];
        var updatedObj = {};
        updatedObj.Discount = (obj.Discount) ? obj.Discout : 0;
        var productName = "";
        boEnrollMember.getProductNameBySKU(obj.ProductSku, function(res) {
            if (res) {
                productName = res;
                kony.print("productName : " + productName);
            }
        });
        updatedObj.ProductDescription = productName;
        updatedObj.Quantity = obj.Quantity;
        //**MEG 7290
        if (IsAWSLocationEnabled() && obj.ProductType == 'Fees') {
            boEnrollMember.getSubsidyAmtBysaleTranID(obj.SaleTransactnId, function(SubAmt) {
                kony.print("SubAmt " + SubAmt);
                updatedObj.UnitPrice = parseFloat(parseFloat(obj.UnitPrice) - parseFloat(SubAmt)).toFixed(2);
            });
        } else {
            updatedObj.UnitPrice = obj.UnitPrice;
        }
        //** End
        updatedObj.UnitPriceTax = obj.UnitPriceTax;
        kony.print("updatedObj " + JSON.stringify(updatedObj))
        saleItems.push(updatedObj);
        saleTranID = obj.SaleTransactnId;
    }
    kony.print("saleItems updated: " + JSON.stringify(saleItems));
    for (var i = 0; i < salePaymentObject.length; i++) {
        var obj = salePaymentObject[i];
        var updatedObj = {};
        updatedObj.PaymentAmount = obj.Amount;
        updatedObj.PaymentMeta = obj.CCLastFourDigits;
        updatedObj.PaymentType = obj.Type;
        salePayment.push(updatedObj);
        salePaymentDate = obj.PaymentDate;
    }
    /*
     * MEG - 5728 Fix... sending SalePaymentDate as-is
     */
    kony.print("salePayment updated: " + JSON.stringify(salePayment));
    var locationObj = {};
    boLocation.getLocationDataByID(glbLocationNum, function(res) {
        if (res != null) {
            kony.print("Location Data" + JSON.stringify(res));
            kony.print("Location Data StateDataObjArr " + JSON.stringify(StateDataObjArr));
            locationObj.locationNumber = res.locationno;
            locationObj.displayValue = res.displayvalue;
            locationObj.city = res.City;
            locationObj.locationZip = res.zip;
            var state = "";
            for (var i = 0; i < StateDataObjArr.length; i++) {
                var Obj = StateDataObjArr[i];
                if (Obj.StateID == res.StateId) {
                    state = Obj.StateABBR;
                    break;
                }
            }
            kony.print("Location Data state" + state);
            locationObj.state = state;
        }
    });
    kony.print("locationObj updated: " + JSON.stringify(locationObj));
    sendSaleReceiptViaWS(JSON.stringify(saleItems), JSON.stringify(salePayment), saleTranID, salePaymentDate, locationObj, email);
}

function sendSaleReceiptViaWS(saleItems, salePayment, saleTranID, salePaymentDate, locationObj, email) {
    kony.print("SJ--->>> Invoking SendSaleReceipt service");
    try {
        var SaleReceipt_inputparam = {};
        var SaleReceipt_headerparam = {};
        SaleReceipt_inputparam["serviceID"] = Services.SaleReceipt;
        SaleReceipt_inputparam["LocationNumber"] = locationObj.locationNumber;
        SaleReceipt_inputparam["LocationDescription"] = locationObj.displayValue;
        SaleReceipt_inputparam["LocationZip"] = locationObj.locationZip;
        SaleReceipt_inputparam["LocationStateAbbr"] = locationObj.state;
        SaleReceipt_inputparam["ClientSaleTransactionID"] = saleTranID;
        SaleReceipt_inputparam["SaleDate"] = salePaymentDate;
        SaleReceipt_inputparam["EmailAddress"] = email;
        SaleReceipt_inputparam["SaleItem"] = saleItems;
        SaleReceipt_inputparam["Payment"] = salePayment;
        SaleReceipt_headerparam["AccessToken"] = glbSPAuthToken;
        SaleReceipt_headerparam["DeviceID"] = gblDeviceID;
        SaleReceipt_headerparam["EmployeeID"] = glbEmployeeId;
        SaleReceipt_headerparam["LastSyncDate"] = "";
        SaleReceipt_headerparam["Source"] = gblSourceVal;
        SaleReceipt_headerparam["Accept"] = "application/json";
        SaleReceipt_headerparam["Locale"] = (in_array(deviceLocale, Countries["US"])) ? "en-us" : "en-ca";
        SaleReceipt_inputparam["httpheaders"] = SaleReceipt_headerparam;
        SaleReceipt_inputparam["httpconfigs"] = {};
        kony.print("::sendReceiptEmail::SaleReceipt_inputparam = " + JSON.stringify(SaleReceipt_inputparam));
        glbSendReceiptCounter = glbSendReceiptCounter + 1;
        if (kony.application.getCurrentForm().id == frmViewMemberProfile.id) {
            displayProgressView();
        }
        SaleReceiptServiceHandle = Network.makeServiceCall(SaleReceipt_inputparam, sendSaleReceiptViaWSCallback, false);
    } catch (e) {
        GlobalException(e);
    }
}

function retrySendSaleReceipt(SaleReceipt_inputparam) {
    kony.print("In retrySendSaleReceipt : " + JSON.stringify(SaleReceipt_inputparam));
    //removeProgressView();
    if (glbSendReceiptCounter == 2) {
        glbSendReceiptCounter = 0;
    } else {
        glbSendReceiptCounter = glbSendReceiptCounter + 1;
        SaleReceiptServiceHandle = Network.makeServiceCall(SaleReceipt_inputparam, sendSaleReceiptViaWSCallback, false);
    }
}

function sendSaleReceiptViaWSCallback(res) {
    kony.print("In sendSaleReceiptViaWSCallback= " + JSON.stringify(res));
    glbSendReceiptDisplayCounter--;
    if (glbSendReceiptDisplayCounter == 0 && kony.application.getCurrentForm().id == frmViewMemberProfile.id) {
        alertForMessages(kony.i18n.getLocalizedString("strRecptSend"));
        removeProgressView();
    }
}

function saveEmail() {
    kony.print("In saveEmail" + popupAddEmail.txtEmailAddress.text);
    var email = popupAddEmail.txtEmailAddress.text;
    var valid = new validationcls;
    var res = valid.checkEmail(email).isValid();
    if (res) {
        popupAddEmail.dismiss();
        kony.print("kony.application.getCurrentForm().id ==" + kony.application.getCurrentForm().id);
        kony.print("selectedMemberData ==" + JSON.stringify(selectedMemberData));
        if (glbMemberId != "") {
            kony.print("glbMemberId : " + glbMemberId);
            var updateObj = {};
            updateObj.MemberID = glbMemberId;
            updateObj.Email = email;
        }
        if (kony.application.getCurrentForm().id == frmViewMemberProfile.id) {
            boEnrollMember.updateMemberEmail(updateObj);
        } else if ((selectedMemberData != "" && selectedMemberData != undefined) && (selectedMemberData.Email == "" || selectedMemberData.Email == undefined) && (selectedMemberData.Usertype != "1")) {
            kony.print("In else");
            boEnrollMember.updateMemberEmail(updateObj, "DirectSale");
        }
    } else {
        kony.print("Invalid email");
    }
}
//MEG-5823 ATW
function setEnabledDisabledButton(flag, btnskin) {
    if (frmPayment.strSplit != null) {
        if (showSplitPaymentOptionForWeek()) {
            frmPayment.strSplit.isVisible = true; //**MEG 7128
            frmPayment.strSplit.setEnabled(flag);
            frmPayment.strSplit.skin = btnskin;
        } else {
            frmPayment.strSplit.isVisible = false; //**MEG 7128
            frmPayment.strSplit.setEnabled(false);
            frmPayment.strSplit.skin = "btnNoWeighInSelected";
        }
    }
}
//** MEG 7364 MEG 7128
function showSplitPaymentOptionForWeek() {
    try {
        var seriesLength = 0;
        boMeetings.getSeriesWeekLeft(function(res) {
            seriesLength = parseInt(res[0]._SeriesLength);
        });
        kony.print("seriesLength " + seriesLength);
        var currWeek = frmSelectMeeting.segMeetingsList.selectedItems[0]["weekNumber"]["text"].substr(6);;
        var baseSeriesLen;
        if (seriesLength >= 12 && seriesLength < 17) baseSeriesLen = 12;
        else if (seriesLength >= 17 && seriesLength < 26) baseSeriesLen = 17;
        else if (seriesLength >= 26) baseSeriesLen = 26;
        var promotionalWeek = seriesLength - baseSeriesLen;
        var enrollmentWeeks = promotionalWeek + 2;
        seriesLength = baseSeriesLen;
        kony.print("currWeek " + currWeek);
        kony.print("baseSeriesLen " + baseSeriesLen);
        kony.print("promotionalWeek " + promotionalWeek);
        kony.print("enrollmentWeeks " + enrollmentWeeks);
        kony.print("seriesLength " + seriesLength);
        if (currWeek <= enrollmentWeeks) {
            return true;
        } else {
            return false;
        }
        /*
        if (WeekNoData < 3) {
            return true;
        } else {
            return false;
        }*/
    } catch (err) {
        kony.print("showSplitPaymentOptionForWeek err " + err);
    }
}
//** End
function enableDisablePaymentModes(callback) {
    try {
        if (IsAWSLocationEnabled()) {
            if (showSplitPaymentOptionForWeek()) {
                var totalAmt = parseFloat(removeDollar(frmPayment.lblTotalData.text));
                var txtBoxAmount = parseFloat(removeDollar(frmPayment.txtBoxAmount.text));
                var isApplicable = (parseInt(totalAmt) % 3 == 0) ? true : false;
                var outstandingBalValue = parseFloat(removeCurrency(frmPayment.lblOutstandingBalInfo.text));
                var paymentData = frmPayment.segPaymentTypeData.data;
                var paymentDataLength = (checkValidString(paymentData)) ? paymentData.length : 0;
                var paymentArr = (paymentDataLength) ? _.pluck(paymentData, "lblPaymentTypeText") : [];
                kony.print("::paymentsData::" + paymentData + "::" + JSON.stringify(paymentData));
                var prdAmount = 0;
                for (var i in paymentData) {
                    prdAmount += removeCurrency(paymentData[i].lblPaymentTypeTextVal);
                }
                kony.print("::txtBoxAmount::" + txtBoxAmount);
                kony.print("::paymentDataLength::" + paymentDataLength);
                kony.print("::paymentArr::" + JSON.stringify(paymentArr));
                kony.print("::paymentArr.length::" + paymentArr.length);
                kony.print("::paymentMode::" + JSON.stringify(paymentMode));
                kony.print("::outstandingBalValue::" + outstandingBalValue);
                kony.print("::totalAmt::" + totalAmt + "::isApplicable::" + isApplicable);
                kony.print("::prdAmount::" + prdAmount);
                prdAmount = parseFloat(prdAmount) + parseFloat(txtBoxAmount);
                kony.print("::UprdAmount::" + prdAmount);
                if (paymentDataLength == 1) //** 5823
                {
                    if (paymentMode == kony.i18n.getLocalizedString("strSplit")) {
                        if (txtBoxAmount == outstandingBalValue) {
                            setEnabledDisabledButton(false, "btnNoWeighInSelected"); //**  5823
                            callback.call(null, true);
                        } else {
                            displayAlert(kony.i18n.getLocalizedString("strAlertTotalOutStandAmt"));
                            callback.call(null, false);
                        }
                    } else {
                        if (in_array(kony.i18n.getLocalizedString("strSplit"), paymentArr) && txtBoxAmount != outstandingBalValue) {
                            displayAlert(kony.i18n.getLocalizedString("strAlertTotalOutStandAmt"));
                            callback.call(null, false);
                        } else {
                            if (txtBoxAmount == 0 || in_array(paymentMode, paymentArr) || paymentMode == kony.i18n.getLocalizedString("strCredit")) {
                                if (paymentMode == kony.i18n.getLocalizedString("strCredit")) {
                                    callback.call(null, true);
                                } else {
                                    if ((outstandingBalValue == 0 || prdAmount >= totalAmt)) {
                                        setEnabledDisabledButton(false, "btnNoWeighInSelected"); //**  5823
                                        callback.call(null, true);
                                    } else {
                                        setEnabledDisabledButton(true, "btnwwtxtCompleteProcessMember"); //**  5823
                                        callback.call(null, true);
                                    }
                                }
                            } else {
                                setEnabledDisabledButton(false, "btnNoWeighInSelected"); //**  5823
                                callback.call(null, true);
                            }
                        }
                    }
                } else {
                    if (isApplicable || paymentDataLength == 0) { //** MEG 7022
                        var oneThirdAmt = totalAmt / 3;
                        //var txtBoxAmount= removeDollar(frmPayment.txtBoxAmount.text);
                        kony.print("1");
                        kony.print("::oneThirdAmt::" + oneThirdAmt + "::txtBoxAmount::" + txtBoxAmount);
                        if (paymentMode != kony.i18n.getLocalizedString("strSplit")) {
                            kony.print("2");
                            if (paymentDataLength == 2 && !in_array(paymentMode, paymentArr)) {
                                //displayAlert("Split payment allow only one additional payment mode");
                                setEnabledDisabledButton(false, "btnNoWeighInSelected");
                                callback.call(null, true);
                            } else if (txtBoxAmount == oneThirdAmt) {
                                kony.print("3");
                                setEnabledDisabledButton(true, "btnwwtxtCompleteProcessMember");
                                callback.call(null, true);
                            } else {
                                if (paymentMode == kony.i18n.getLocalizedString("strCredit")) {
                                    callback.call(null, true);
                                } else {
                                    if (totalAmt <= txtBoxAmount || paymentDataLength >= 2) //** MEG-7172 //** 5823	//** MEG 6913
                                    {
                                        kony.print("4");
                                        setEnabledDisabledButton(false, "btnNoWeighInSelected");
                                    } else {
                                        kony.print("5");
                                        setEnabledDisabledButton(true, "btnwwtxtCompleteProcessMember"); //**  5823
                                    }
                                    callback.call(null, true);
                                }
                            }
                        } else if (paymentMode == kony.i18n.getLocalizedString("strSplit")) {
                            if (paymentDataLength == 0 && totalAmt == txtBoxAmount) {
                                setEnabledDisabledButton(false, "btnNoWeighInSelected");
                                callback.call(null, true);
                            } else if (paymentDataLength > 0 && txtBoxAmount == (oneThirdAmt * 2)) {
                                setEnabledDisabledButton(false, "btnNoWeighInSelected");
                                callback.call(null, true);
                            } else if (paymentDataLength == 0) {
                                displayAlert(kony.i18n.getLocalizedString("strAlertTotalAmount"));
                                callback.call(null, false);
                            } else {
                                displayAlert(kony.i18n.getLocalizedString("strAlertDoubleAmt"));
                                callback.call(null, false);
                            }
                        } else {
                            setEnabledDisabledButton(false, "btnNoWeighInSelected");
                            callback.call(null, true);
                        }
                    } else {
                        setEnabledDisabledButton(false, "btnNoWeighInSelected");
                        callback.call(null, true);
                    }
                }
            } else {
                setEnabledDisabledButton(false, "btnNoWeighInSelected");
                callback.call(null, true);
            }
        } else {
            callback.call(null, true);
        }
    } catch (e) {
        GlobalException(e);
    }
}
/*
function enableDisablePaymentModes_org(callback){
	try{
		if(IsAWSLocationEnabled()){
          	if(showSplitPaymentOptionForWeek())
              {
                var totalAmt = removeDollar(frmPayment.lblTotalData.text);
                 var txtBoxAmount= removeDollar(frmPayment.txtBoxAmount.text);
                var isApplicable = (parseInt(totalAmt)%3 == 0)?true:false;
				var outstandingBalValue = parseFloat(removeCurrency(frmPayment.lblOutstandingBalInfo.text));
                var paymentData = frmPayment.segPaymentTypeData.data;

                var paymentDataLength = (checkValidString(paymentData))?paymentData.length:0;
                var paymentArr = (paymentDataLength)?_.pluck(paymentData,"lblPaymentTypeText"):[];

                kony.print("::paymentsData::"+paymentData+"::"+JSON.stringify(paymentData));
                kony.print("::paymentDataLength::"+paymentDataLength);
                kony.print("::paymentArr::"+JSON.stringify(paymentArr));
                 kony.print("::paymentArr.length::"+paymentArr.length);
                kony.print("::paymentMode::"+JSON.stringify(paymentMode));
                kony.print("::outstandingBalValue::"+outstandingBalValue);
                kony.print("::totalAmt::"+totalAmt+"::isApplicable::"+isApplicable);
				
               if(paymentDataLength == 1)//** 5823
                  {
                   
                    if(paymentMode == kony.i18n.getLocalizedString("strSplit"))
                      {
                        if(txtBoxAmount == outstandingBalValue){
                           setEnabledDisabledButton(false,"btnNoWeighInSelected"); //**  5823
                    		callback.call(null,true);
                            
                        }else{
                            displayAlert(kony.i18n.getLocalizedString("strAlertTotalOutStandAmt"));
                            callback.call(null,false);
                        }
                         
                      }else
                        {
                          if(txtBoxAmount == 0 || in_array(paymentMode, paymentArr) || paymentMode == kony.i18n.getLocalizedString("strCredit"))
                            {
                              	setEnabledDisabledButton(true,"btnwwtxtCompleteProcessMember"); //**  5823
                    	  		callback.call(null,true);
                            }else
                              {
                                  setEnabledDisabledButton(false,"btnNoWeighInSelected"); //**  5823
                    			  callback.call(null,true);
                              }
                          
                        }
                  }else
                    {
                	if(isApplicable || paymentDataLength==0){ //** MEG 7022
                    var oneThirdAmt = totalAmt/3;
                    //var txtBoxAmount= removeDollar(frmPayment.txtBoxAmount.text);
                        kony.print("1");
                    kony.print("::oneThirdAmt::"+oneThirdAmt+"::txtBoxAmount::"+txtBoxAmount);

                    if(paymentMode != kony.i18n.getLocalizedString("strSplit")){	
                        kony.print("2");
                        if(paymentDataLength == 2 && !in_array(paymentMode, paymentArr)){
                            //displayAlert("Split payment allow only one additional payment mode");
                            setEnabledDisabledButton(false,"btnNoWeighInSelected");
                            callback.call(null,true);
                        }
                        else if(txtBoxAmount == oneThirdAmt){
                            setEnabledDisabledButton(true,"btnwwtxtCompleteProcessMember");
                            callback.call(null,true);
                        }
                        else{
                            if((totalAmt == txtBoxAmount || paymentDataLength == 2) && paymentMode != kony.i18n.getLocalizedString("strCredit")) //** MEG-7172 //** 5823	//** MEG 6913
                            {
                              setEnabledDisabledButton(false,"btnNoWeighInSelected");
                            } 
                          else
                            {
                               setEnabledDisabledButton(true,"btnwwtxtCompleteProcessMember"); //**  5823
                            }
                                 callback.call(null,true);
                        }
                    }
                    else if(paymentMode == kony.i18n.getLocalizedString("strSplit")){
                        if(paymentDataLength == 0  && totalAmt == txtBoxAmount){
                            setEnabledDisabledButton(false,"btnNoWeighInSelected");
                            callback.call(null,true);
                        }
                        else if(paymentDataLength > 0 && txtBoxAmount == (oneThirdAmt*2)){
                            setEnabledDisabledButton(false,"btnNoWeighInSelected");
                            callback.call(null,true);
                        }
                        else if(paymentDataLength == 0){
                            displayAlert(kony.i18n.getLocalizedString("strAlertTotalAmount"));
                            callback.call(null,false);
                        }
                        else{
                            displayAlert(kony.i18n.getLocalizedString("strAlertDoubleAmt"));
                            callback.call(null,false);
                        }
                    }
                    else{
                        setEnabledDisabledButton(false,"btnNoWeighInSelected");
                        callback.call(null,true);
                    }
                }
                else{
   
                    setEnabledDisabledButton(false,"btnNoWeighInSelected");
                    callback.call(null,true);
                }
            }
        }else{
          setEnabledDisabledButton(false,"btnNoWeighInSelected");
          callback.call(null,true);
        }}
            else{
                callback.call(null,true);
            }
	}
	catch (e) {
		GlobalException(e);
	}
}
 */
function removePaymentForATW() {
    if (IsAWSLocationEnabled()) {
        var paymentData = frmPayment.segPaymentTypeData.data;
        var paymentDataLength = (checkValidString(paymentData)) ? paymentData.length : 0;
        if (paymentDataLength) {
            var totalAmt = removeDollar(frmPayment.lblTotalData.text);
            var oneThirdAmt = totalAmt / 3;
            var amt = removeDollar(paymentData[0].lblPaymentTypeTextVal);
            var method = paymentData[0].lblPaymentTypeText;
            kony.print("::totalAmt::" + totalAmt + "::oneThirdAmt::" + oneThirdAmt + "::amt::" + amt + "::method::" + method);
            kony.print("condition ::" + (method != kony.i18n.getLocalizedString("strSplit") && amt == oneThirdAmt));
            if (paymentDataLength == 1 && method != kony.i18n.getLocalizedString("strSplit")) {
                setEnabledDisabledButton(true, "btnwwtxtCompleteProcessMember");
            } else {
                if (method != kony.i18n.getLocalizedString("strSplit") && amt == oneThirdAmt) {
                    setEnabledDisabledButton(true, "btnwwtxtCompleteProcessMember");
                } else {
                    setEnabledDisabledButton(false, "btnNoWeighInSelected");
                }
            }
        } else {
            setEnabledDisabledButton(true, "btnwwtxtCompleteProcessMember");
        }
    }
}

function bindReasonPicker() {
    //var ReasonMasterData = [];
    if (reasonMasterData.length == 0) {
        var whrClause = " where CountryID = " + getCountryID();

        function getPriceOverrideReasonsLookupSuccessCallBack(res) {
            printObj("In getPriceOverrideReasonsLookupSuccessCallBack", res);
            if (res.length > 0) {
                var priceOverrideReasonsList = [];
                var priceOverrideReasonsMasterData = [];
                for (var i in res) {
                    var obj = res[i];
                    priceOverrideReasonsList.push([obj.Id, obj.Desc]);
                }
                printObj("priceOverrideReasonsList", priceOverrideReasonsList);
                priceOverrideReasonsList.push(100);
                reasonMasterData.push(priceOverrideReasonsList);
                printObj("reasonMasterData", reasonMasterData);
            }
            popupAWSPriceOverrideReason.pickerviewPriceOverrideReasons.masterData = reasonMasterData;
            //callback.call(null, res);
        }
        com.kony.WeightWatchers.ProductSyncScope.PriceOverrideReasonsLookup.find(whrClause, getPriceOverrideReasonsLookupSuccessCallBack, eventErrorCallBack);
    } else {
        popupAWSPriceOverrideReason.pickerviewPriceOverrideReasons.masterData = reasonMasterData;
    }
}