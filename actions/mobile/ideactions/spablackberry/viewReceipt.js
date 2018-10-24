function eventOnPreShowBindReceiptData() {
    frmReceipt.lblchangeAmount.text = addCurrency(amountForChangeOwnedForPayment) + " " + amountForChangeReturnFormatForPayment;
    frmReceipt.lblOutOfAmount.text = getLocalizedString("strLblOutof") + " " + addCurrency(amountMemberHasSubmittedForPayment);
}