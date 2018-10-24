function startBarcodeForSubIDOld() {
    try {
        kony.print("startBarcodeForSubID");
        //Creates an object of class 'BarcodeScanner'
        var ScanBarcodeFFIObject = new com.weightwatchers.barcodescanner.ScanBarcodeFFI();
        //Invokes method 'startScanner' on the object
        ScanBarcodeFFIObject.startScanner(
            /**Function*/
            startBarcodeForSubIDCallback);
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening scan FFI");
    }

}

// Dileep start
function startBarcodeForSubID() {
    try {
        kony.print("Inside startBarcodeForSubID");
        kony.print("Test comment");
        //Creates an object of class 'ReadNativeBarcodeObject'
        var ReadNativeBarcodeObject = new com.weightwatchers.nativebarcode.ReadNativeBarcode();
        //Invokes method 'readNativeBarcodeData' on the object
        ReadNativeBarcodeObject.readNativeBarcodeData(startBarcodeForSubIDCallback);
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening scan FFI Barcode Scanner");
    }
}

function startBarcodeForSubIDNew() {
    try {
        kony.print("Inside startBarcodeForSubID");
        kony.print("Test comment");
        //Invokes function 'readBarcodeFromCamera'
        com.ww.barcode.nativecam.readBarcodeFromCamera(startBarcodeForSubIDCallback);
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening scan FFI Barcode Scanner" + e);
    }
}

// Dileep end

function startBarcodeForSubIDCallback(data) {
    try {
        kony.print("startBarcodeForSubIDCallback data: " + data);
        if (data != undefined && data != null && data.length > 0) {
            if (data == "(Cancelled)") {
                kony.print("User has cancelled barcode scanning. " + data);
                return;
            } else {
                data = data.toUpperCase().trim();
                if (!isNaN(data)) {
                    // TODO: Will have both Product and Member, need a differentiator
                    kony.print("Got the number as : " + data);

                    if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
                        if (isFromOffersForm) {
                            isFromOffersForm = false;
                            alertForMessages(kony.i18n.getLocalizedString("strlblOfferNotFound"));
                            return;
                        } else getBarcodeSKUSuccess(data);
                    }
                    //Added by Shobhit to differentiate flow
                    else if (IsTallyCashout == FlowForScreens.TallyCashout) {
                        kony.print("deposit slip number scanned");
                        //Flow for Bank deposit slip number in Tally cashout screen
						//Dhrupal- Issue MEG-5448, on scanning . was allowd. Restrited with condition 
						if (data.indexOf(".") != -1) 
                        {
        					alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        					frmTallyMeetingCashout.txtBankDepositSlipNumber.text = data.replace(".", "");
    					}
                        else if (in_array(deviceLocale,Countries["CA"]) && data.length > 6) {
                            alertForMessages(kony.i18n.getLocalizedString("strValidDepositSlip"));
                        } else {
                        	if(bankDepositSlip == frmTallyMeetingCashout.lbl1stSlip.text)
                        		frmTallyMeetingCashout.txtBankDepositSlip1No.text = data;
                        	else if(bankDepositSlip == frmTallyMeetingCashout.lbl2ndSlip.text)
                        		frmTallyMeetingCashout.txtBankDepositSlip2No.text = data;
                        	else if(bankDepositSlip == frmTallyMeetingCashout.lbl3rdSlip.text)
                        		frmTallyMeetingCashout.txtBankDepositSlip3No.text = data;
                        	else
                        		frmTallyMeetingCashout.txtBankDepositSlipNumber.text = data;
                        }
                        //Dhrupal- Commented because form seems to loaded again
                        //frmTallyMeetingCashout.show();
                    } else {
                        if (data.length < 9) {
                            data = leftpadZerosForMonthlyPassId(data);
                        }
                        //Enroll flow
                        kony.print("enroll flow");
                        //var whrClause = " where RegNumber = '"+data+"'";
                        //frmEnrollNewMember.txtMemberIDInfo.text = "";
                        //frmAddIndividulaMember.txtMemberID.text = "";

                        if (kony.application.getCurrentForm().id == frmAddIndividulaMember.id) {
                            frmAddIndividulaMember.txtMemberID.text = data;
                        } else if (kony.application.getCurrentForm().id == frmEnrollNewMember.id) {
                            frmEnrollNewMember.txtMemberIDInfo.text = data;
                        }else if(IsPreActivation == FlowForScreens.PreActivation){
                             popupPreActivation.txtRegNum.text = data;
                        }else if(kony.application.getCurrentForm().id == frmEnrollReturningMember.id){ //**MEG 7302
                             frmEnrollReturningMember.txtRegistrationID.text = data;
                        }else if(kony.application.getCurrentForm().id == frmBatchAddMember.id){ //**MEG 7330
                             frmBatchAddMember.txtMemberId.text = data;
                        }
                    }
                } else {
                    //Commented by Ami
                    //if(data.length < 9)
                    //Added by Ami MEG-3721
                    if (data.length < 9 || data.length < 15) {
                        data = leftpadZerosForMonthlyPassId(data);
                    }
                    var barcodeChar = data.charAt(0);
                    barcodeChar = barcodeChar.toUpperCase();
                    kony.print("Starting Char is : " + barcodeChar);
                    if (kony.application.getCurrentForm().id == frmTallyMeetingCashout.id) {
                        if (isNaN(parseInt(barcodeChar))) {
                            alertForMessages(kony.i18n.getLocalizedString("strDepositNumberInvalid"));
                            return;
                        }
                    }



                    switch (barcodeChar) {
                        case "M":
                        case "W":
                            {
                                if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
                                    if (isFromOffersForm) {
                                        isFromOffersForm = false;
                                        alertForMessages(kony.i18n.getLocalizedString("strlblOfferNotFound"));
                                    } else {
                                        alertForMessages(kony.i18n.getLocalizedString("strlblproductnotfound"));
                                    }
                                    return;
                                }
                                kony.print("Monthly Pass Detected");
                                if (kony.application.getCurrentForm().id == glbFormName.id) {
                                    /* Commented by Praveen Kalal MEG-3377
                                    if(data.length != 15 && barcodeChar == "M"){
                                    	kony.print("Length is less than 15==="+data.length)
                                    	alert(kony.i18n.getLocalizedString("strMsgSubId"));
                                    	return;
                                    }*/
                                } else if (kony.application.getCurrentForm().id == frmAddIndividulaMember.id || kony.application.getCurrentForm().id == frmEnrollNewMember.id || kony.application.getCurrentForm().id == frmEnrollReturningMember.id) {
                                    alertForMessages(kony.i18n.getLocalizedString("strInvalidMemberID"));
                                }

                                kony.print("===inside the data.length===" + data.length)
                                gblBarcodeScannedData = data;
                                if(IsPreActivation == FlowForScreens.PreActivation){
                                	popupPreActivation.txtVoucherNumber.text = data;
                               	}else{
                                	glbFormName.txtSubscriptionID.text = data;
                                } // added here for barcode scanner on preActivation
                                if (data.length == 15) {
                                    kony.print("inside the data.length");
                                    onEndEditingForSubID();
                                }
                                break;
                            }
                         case "C":
                        	{
                        		if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
                                    if (isFromOffersForm) {
                                        //isFromOffersForm = false;
                                       // alert(kony.i18n.getLocalizedString("strlblOfferNotFound"));
										kony.print(" C detected Office code/Coupon Detected");
                                    	gblBarcodeScannedData = data;
                                   		GetBarcodeOfferno(data);
                                   		break;
                                    } else {
                                        alertForMessages(kony.i18n.getLocalizedString("strlblproductnotfound"));
                                        return;
                                    }
                                    
                                }
                                process20WeekPasses(data);
                                break;
                        	}
                        case "Q":
                            {
                                if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
                                    if (isFromOffersForm) {
                                        isFromOffersForm = false;
                                        alertForMessages(kony.i18n.getLocalizedString("strlblOfferNotFound"));
                                    } else {
                                        alertForMessages(kony.i18n.getLocalizedString("strlblproductnotfound"));
                                    }
                                    return;
                                }
                                process20WeekPasses(data);
                                break;
                            }
                        case "P":
                            {

                                if (kony.application.getCurrentForm().id != frmDirectSaleProductList.id && kony.application.getCurrentForm().id != frmAddAndWeighMemberTransaction.id) {
                                    if (kony.application.getCurrentForm().id == frmAddIndividulaMember.id || kony.application.getCurrentForm().id == frmEnrollNewMember.id || kony.application.getCurrentForm().id == frmEnrollReturningMember.id) {
                                        alertForMessages(kony.i18n.getLocalizedString("strInvalidMemberID"));
                                    } else if (kony.application.getCurrentForm().id == glbFormName.id) alertForMessages(kony.i18n.getLocalizedString("strInvalidSubscriptionID"));
                                    else alertForMessages(kony.i18n.getLocalizedString("strMemberNotFound"));
                                    return;
                                } else if (!isFromOffersForm) {
                                    alertForMessages(kony.i18n.getLocalizedString("strlblproductnotfound"));
                                    return;
                                } else {
                                    kony.print("Office code/Coupon Detected");
                                    gblBarcodeScannedData = data;
                                    GetBarcodeOfferno(data);
                                    break;
                                }



                            }
                            /*case "Q" :
                            {
                            	if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id== frmAddAndWeighMemberTransaction.id)  
                            	{
                            		if(isFromOffersForm){
                            			isFromOffersForm = false;
                            			alert(kony.i18n.getLocalizedString("strlblOfferNotFound"));
                            		}
                            		else{
                            			alert(kony.i18n.getLocalizedString("strlblproductnotfound"));
                            		}
                            		return;
                            	}
                            	kony.print("17 Week Pass Detected" );
                            	
                            	gblBarcodeScannedData = data;
                            	glbFormName.txtSubscriptionID.text = data;
                            	if(data.length == 15){
                            		onEndEditingForSubID();
                            	}
                            	break;
                            }*/
                        default:
                            {
                                if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
                                    if (isFromOffersForm) {
                                        isFromOffersForm = false;
                                        alertForMessages(kony.i18n.getLocalizedString("strlblOfferNotFound"));
                                    } else {
                                        //alert(kony.i18n.getLocalizedString("strlblproductnotfound"));
                                        getBarcodeSKUSuccess(data);
                                    }
                                } else {
                                    kony.print("Unrecognized Barcode");
                                    alertForMessages(kony.i18n.getLocalizedString("strBarcodeNotReg"));
                                }
                                break;
                            }
                    }
                }
            }
        }
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in parsing scan data Barcode Scanner");
    }
}

// Added by Praveen Kalal for scan barcode for offers
function startBarcodeForOfferCoupon() {
    try {
        isFromOffersForm = true;
        kony.print("Inside startBarcodeForSubID");
        kony.print("Test comment");
        //Creates an object of class 'ReadNativeBarcodeObject'
        var ReadNativeBarcodeObject = new com.weightwatchers.nativebarcode.ReadNativeBarcode();
        //Invokes method 'readNativeBarcodeData' on the object
        ReadNativeBarcodeObject.readNativeBarcodeData(startBarcodeForSubIDCallback);
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening scan FFI Barcode Scanner");
    }
}

function process20WeekPasses(data)
{
kony.print("20 Week Pass Detected");
                                if (kony.application.getCurrentForm().id == glbFormName.id) {
                                    /* Commented by Praveen Kalal MEG-3377
                                    if(data.length != 15 && barcodeChar == "M"){
                                    	kony.print("Length is less than 15==="+data.length)
                                    	alert(kony.i18n.getLocalizedString("strMsgSubId"));
                                    	return;
                                    }*/
                                } else if (kony.application.getCurrentForm().id == frmAddIndividulaMember.id || kony.application.getCurrentForm().id == frmEnrollNewMember.id || kony.application.getCurrentForm().id == frmEnrollReturningMember.id) {
                                    alertForMessages(kony.i18n.getLocalizedString("strInvalidMemberID"));
                                } 

                                kony.print("===inside the data.length===" + data.length)
                                gblBarcodeScannedData = data;
                                data.replace("C", "Q");
                                if(IsPreActivation == FlowForScreens.PreActivation){
                                	popupPreActivation.txtVoucherNumber.text = data;
                                }else{
                                	glbFormName.txtSubscriptionID.text = data;
                                }  //  added here for barcode scanner on preActivation
                                if (data.length == 16) {
                                    kony.print("inside the data.length");
                                    onEndEditingForSubID();
                                }
}

// End by Praveen Kalal for scan barcode for offers
