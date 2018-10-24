var paymentModeArray = [];
var isAllChecked = false;
var sortFlag = true;
var isMemberSelected;
var prodTranscationData = [];
var isMemberSelected;
var price = 0;
var totalSelectedPrd = 0;
var selectedPrdList = [];
var saleTransactionID;
var paymentModFinal = [];
var messageText = "";
var totalSelectedTranscation = 0;
var finalData = [];
var isMulipleTranscationWithCC = false;

function resetVars() {
    frmProductReturns.segPrdReturns.setData([]);
    paymentModeArray = [];
    prodTranscationData = [];
    selectedPrdList = [];
    sortFlag = true;
    isAllChecked = false;
    price = 0;
    frmProductReturns.txtFname.text = "";
    frmProductReturns.txtLname.text = "";
    hboxHeaderWithCancelBtn.btnScan.setVisibility(false);
    messageText ="";// kony.i18n.getLocalizedString("strAlertSimpleReturn");
    totalSelectedTranscation = 0;
    finalData = [];
    glbIsDisplayCCAmtRefundAlert = false;
    glbDisplayCCAmtRefundAlertMsg = "";
    isMulipleTranscationWithCC=false;

}

function onChangeMemberType() {
    resetVars();
    isMemberSelected = frmProductReturns.cmbxMemberType.selectedKey;
    kony.print("::Nikita::=="+frmProductReturns.cmbxMemberType.selectedKey);
    if (isMemberSelected == "members") {
        frmProductReturns.hboxSearch.setVisibility(true);
        frmProductReturns.txtFname.setEnabled(true);
        frmProductReturns.txtLname.setEnabled(true);
    } else if (isMemberSelected == "nonmembers"){
        frmProductReturns.hboxSearch.setVisibility(false);
        frmProductReturns.txtFname.setEnabled(false);
        frmProductReturns.txtLname.setEnabled(false);
    }
    else if (isMemberSelected == "employeesale"){
        frmProductReturns.hboxSearch.setVisibility(true);
        frmProductReturns.txtFname.setEnabled(true);
        frmProductReturns.txtLname.setEnabled(true);
    }

    try {
        if (sortFlag == true) {
            frmProductReturns.imgSortHeader.src = "icn_sortby_down.png";
        } else {
            frmProductReturns.imgSortHeader.src = "icn_sortby.png";
        }
        boTransacations.getTransacationsByMeetingId(parseInt(glbMeetingNum), isMemberSelected, sortFlag, bindTransactionsData);
    } catch (e) {
        GlobalException(e);
    }
}

function onSelectRowOfProductReturnsList() {
    isAllChecked = false;

    if (isMemberSelected == "members" || isMemberSelected == "employeesale") {
        //Open Void Popup - new

        popupProductReturns.lineAfterTitlebox.setVisibility(true);
        popupProductReturns.hboxTitle.setVisibility(true);
    } else {
        //Open popup product return popup original
        popupProductReturns.lineAfterTitlebox.setVisibility(false);
        popupProductReturns.hboxTitle.setVisibility(false);
    }
    popupProductReturns.chkSelectAll.src = "icn_checkbox_unchecked.png";
    if(isMemberSelected == "members")
    popupProductReturns.lblTitle.text = kony.i18n.getLocalizedString("strTransactionFor") + " " + frmProductReturns.segPrdReturns.selectedItems[0]["lblFname"] + " " + frmProductReturns.segPrdReturns.selectedItems[0]["lblLname"];
    else
    	popupProductReturns.lblTitle.text = kony.i18n.getLocalizedString("strEmployeeTransaction") + " " + frmProductReturns.segPrdReturns.selectedItems[0]["lblFname"] + " " + frmProductReturns.segPrdReturns.selectedItems[0]["lblLname"];
    popupProductReturns.show();
    popupProductReturns.segPrdReturns.setData([]);
    try {

        if (isMemberSelected == "members" || isMemberSelected == "employeesale") {
            glbMemberIDSelectedForProducReturn = frmProductReturns.segPrdReturns.selectedItems[0]["MemberID"].toString();
            boTransacations.getProductsForReturnByMemberID(frmProductReturns.segPrdReturns.selectedItems[0]["MeetingOccurID"], frmProductReturns.segPrdReturns.selectedItems[0]["MemberID"].toString(), isMemberSelected, frmProductReturns.segPrdReturns.selectedItems[0]["lblTanscNumber"], bindProductsReturnData);
        } else if(isMemberSelected == "nonmembers"){
            boTransacations.getProductsForReturnByMeetingId(frmProductReturns.segPrdReturns.selectedItems[0]["MeetingOccurID"], frmProductReturns.segPrdReturns.selectedItems[0]["RegNumber"].toString(), isMemberSelected, frmProductReturns.segPrdReturns.selectedItems[0]["lblTanscNumber"], bindProductsReturnData);
        }

    } catch (e) {
        GlobalException(e);
    }
}

function isAllRowSelected() {
    //	var objData = popupProductReturns.segPrdReturns.data;
    var selectedCnt = 0;
    var totalcnt = 0;

    var rowdata1 = popupProductReturns.segPrdReturns.data;
    for (var j = 0; j < rowdata1.length; j++) {
        var objData = rowdata1[j];
        var isChecked = objData["isChecked"];
        if (isChecked) selectedCnt++;
        totalcnt++;
    }

    if (selectedCnt == totalcnt)
        return true;
    else
        return false;
}

function onCheckedProductReturnList() {
    var isChecked = popupProductReturns.segPrdReturns.selectedItems[0]["isChecked"];
    var objData = popupProductReturns.segPrdReturns.data;


    var selectedItems = popupProductReturns.segPrdReturns.selectedItems;
    kony.print("objData===>>>"+JSON.stringify(selectedItems));
    var selIndex = parseInt(popupProductReturns.segPrdReturns.selectedItems[0]["rowIndex"]);
    // alert(selIndex);
    var newObj = {};
    //	alert(selectedItems["lblPrdSKU"]);
    newObj["lblPrdSKU"] = selectedItems[0]["lblPrdSKU"];
    newObj["lblDesc"] = selectedItems[0]["lblDesc"];
    newObj["lblAmount"] = selectedItems[0]["lblAmount"];
    newObj["lblTax"] = selectedItems[0]["lblTax"];
    newObj["lblQuantity"] = selectedItems[0]["lblQuantity"];
    if (isChecked == true) {
        newObj["imgCheck"] = "icn_checkbox_unchecked.png";
        newObj["isChecked"] = false;
        popupProductReturns.chkSelectAll.src = "icn_checkbox_unchecked.png";
        isAllChecked = false;
    } else {
        newObj["isChecked"] = true;
        newObj["imgCheck"] = "icn_checkbox_checked.png";
    }
    newObj["lblPrice"] = selectedItems[0]["lblPrice"];
    newObj["lblRetQuantity"] = selectedItems[0]["lblRetQuantity"];
    newObj["rowIndex"] = selectedItems[0]["rowIndex"];
    newObj["imgHope"] = selectedItems[0]["imgHope"];
    newObj["ProductID"] = selectedItems[0]["ProductID"];
    newObj["SaleTransactnId"] = selectedItems[0]["SaleTransactnId"];
    newObj["Id"] = selectedItems[0]["Id"];
    newObj["Type"] = selectedItems[0]["Type"];
    newObj["SalePrice"] = selectedItems[0]["SalePrice"];
    newObj["TotalSaleTax"] = selectedItems[0]["TotalSaleTax"];

    kony.print("objData" + JSON.stringify(newObj));
    popupProductReturns.segPrdReturns.setDataAt(newObj, selIndex);
    if (isAllRowSelected()) {
        popupProductReturns.chkSelectAll.src = "icn_checkbox_checked.png";
        isAllChecked = true;
    }
}

function onCheckedAllProductReturnList() {
    isAllChecked = !isAllChecked;
    var rowcnt = 0;
    var rowdata1 = popupProductReturns.segPrdReturns.data;
    for (var j = 0; j < rowdata1.length; j++) {
        var objData = rowdata1[j];

        var newObj = {};

        newObj["lblPrdSKU"] = objData["lblPrdSKU"];
        newObj["lblDesc"] = objData["lblDesc"];
        newObj["lblAmount"] = objData["lblAmount"];
        newObj["isChecked"] = isAllChecked;
        newObj["lblTax"] = objData["lblTax"];
        newObj["lblQuantity"] = objData["lblQuantity"];
        if (isAllChecked) {
            newObj["imgCheck"] = "icn_checkbox_checked.png";
            popupProductReturns.chkSelectAll.src = "icn_checkbox_checked.png";
        } else {
            newObj["imgCheck"] = "icn_checkbox_unchecked.png";
            popupProductReturns.chkSelectAll.src = "icn_checkbox_unchecked.png";
        }
        newObj["lblPrice"] = objData["lblPrice"];
        newObj["lblRetQuantity"] = objData["lblRetQuantity"];
        newObj["rowIndex"] = objData["rowIndex"];
        newObj["imgHope"] = objData["imgHope"];
        newObj["ProductID"] = objData["ProductID"];
        newObj["SaleTransactnId"] = objData["SaleTransactnId"];
        newObj["Id"] = objData["Id"];
        newObj["Type"] = objData["Type"];
        newObj["SalePrice"] = objData["SalePrice"];
        newObj["TotalSaleTax"] = objData["TotalSaleTax"];
        popupProductReturns.segPrdReturns.setDataAt(newObj, rowcnt);
        rowcnt++;
    }


}

function onChangeReturnQuantity() {
    /* var isChecked = popupProductReturns.segPrdReturns.selectedItems[0]["isChecked"];
     if (isChecked == true) {
         var quantity = parseInt(popupProductReturns.segPrdReturns.selectedItems[0]["lblQuantity"]);
         var quandata = [];
         var temp = [];
         for (var i = quantity; i > 0; i--) {
             temp.push([i, i.toString()]);
         }
         temp.push(100);
         quandata.push(temp);
         kony.print(quandata);
         popupQuantityPicker.quantityPicker.masterData = quandata;
         popupQuantityPicker.show();
     }*/
}

function onSelectQuantityPickerValue() {
    var objData = popupProductReturns.segPrdReturns.selectedItems;
    //var objData = popupProductReturns.segPrdReturns.data;
    var selIndex = parseInt(popupProductReturns.segPrdReturns.selectedItems[0]["rowIndex"]);
    var newObj = {};
    newObj["lblPrdSKU"] = objData[0]["lblPrdSKU"];
    newObj["lblDesc"] = objData[0]["lblDesc"];
    newObj["lblAmount"] = objData[0]["lblAmount"];
    newObj["isChecked"] = objData[0]["isChecked"];
    newObj["lblTax"] = objData[0]["lblTax"];
    newObj["lblQuantity"] = objData[0]["lblQuantity"];
    newObj["imgCheck"] = objData[0]["imgCheck"];
    newObj["lblPrice"] = objData[0]["lblPrice"];
    newObj["lblRetQuantity"] = popupQuantityPicker.quantityPicker.selectedKeyValues[0][1];
    newObj["rowIndex"] = objData[0]["rowIndex"];
    newObj["imgHope"] = objData[0]["imgHope"];
    newObj["ProductID"] = objData[0]["ProductID"];
    newObj["SaleTransactnId"] = objData[0]["SaleTransactnId"];
    newObj["Id"] = objData[0]["Id"];
    newObj["Type"] = objData[0]["Type"];
    newObj["SalePrice"] = objData[0]["SalePrice"];
    newObj["TotalSaleTax"] = objData[0]["TotalSaleTax"];


    popupProductReturns.segPrdReturns.setDataAt(newObj, selIndex);
    popupQuantityPicker.destroy();
}

function getSaleTransacationIdFromSelectedProducts() {
    var flags = [],
        output = [];

    var rowdata1 = popupProductReturns.segPrdReturns.data;
    for (var j = 0; j < rowdata1.length; j++) {
        var objData = rowdata1[j];
        if (flags[objData["SaleTransactnId"]]) continue;
        flags[objData["SaleTransactnId"]] = true;
        output.push(objData["SaleTransactnId"]);
    }

    return output;
}

function isAnyProductSelected() {
    var totalChecked = 0;
    var rowdata1 = popupProductReturns.segPrdReturns.data;
    for (var j = 0; j < rowdata1.length; j++) {
        var objData = rowdata1[j];
        if (objData["isChecked"] == true) {
            totalChecked++;
        }
    }
    if (totalChecked == 0)
        return false;
    else
        return true;


}

function getSelectedTransaction() {
	var transactions = [];
    var tempData = popupProductReturns.segPrdReturns.data;
    finalData = [];
	var tempFinaldata=[];
    _.each(tempData, function(d1) {
        tempFinaldata.push(d1[1])
    })

    kony.print("tempData==" + JSON.stringify(tempData));

    _.each(tempFinaldata, function(rowdata) {
        _.each(rowdata, function(objData) {
            if (objData["isChecked"] == true) {
                if (!in_array(objData["SaleTransactnId"], transactions)) {
                    transactions.push(objData["SaleTransactnId"]);
                    finalData.push(rowdata);
                }
            }
        })
    })

    totalSelectedTranscation = finalData.length;
    kony.print("totalSelectedTranscation==" + totalSelectedTranscation);
    kony.print("finalData==" + JSON.stringify(finalData));
    
}

function eventOnSelectReturnBtn() {

    if (isMemberSelected == "members" || isMemberSelected == "employeesale") {
		//isMulipleTranscationWithCC = false;
         getSelectedTransaction();
		 processMemberReturn();
       /* if (totalSelectedTranscation > 0) {
            _.each(finalData, function(rowdata) {
           		if(!isMulipleTranscationWithCC)
               		eventOnSelectReturnBtn_test(rowdata);
            });
           kony.print("Loop Done Multiple Void starts" + totalSelectedTranscation);
           voidMulipleTranscationWithCC();
        }*/
    } else if(isMemberSelected == "nonmembers"){
    	totalSelectedTranscation = 0;
        eventOnSelectReturnBtn_test(popupProductReturns.segPrdReturns.data);
    }

}
function processMemberReturn()
{
	if (totalSelectedTranscation > 0 ) {
			kony.print("AD :: 1 totalSelectedTranscation===" + totalSelectedTranscation-1);
           	eventOnSelectReturnBtn_test(finalData[totalSelectedTranscation-1]);
    }
}

function voidPaymentwithCC(selectedPrdList,isMulitplePayment)
{
	if (checkIfNetworkIsAvailable()) {
		var SaleTransId = selectedPrdList[0].SaleTransactnId;
		kony.print("AD ::  voidPaymentwithC===" + SaleTransId);
		
	    getCreditCardVoidWS(SaleTransId,function getCreditCardVoidWSSuccess(msgText, voidCCrequestID) {
	    kony.print("AD :: 3 getCreditCardVoidWS===" + msgText);
	    kony.print("AD ::  voidCCrequestID===" + voidCCrequestID);
	  // 	msgText = "\n" + msgText;
	    	if(isMulitplePayment == false){
	        	messageText += msgText + "\n" ;
	        }else {
	        	messageText += msgText + "\n" ;//+ messageText;
	        }
	        
	        var voidInfo = {
	            "voidCCrequestID": voidCCrequestID,
	            "isVoidSuccess": true
	        };
	        boTransacations.returnProducts(selectedPrdList, true, productsReturnSuccessCallBack, voidInfo);
	    });
	} else {
		
	   var voidInfo = {
	        "voidCCrequestID": "",
	        "isVoidSuccess": false
	    };
	    boTransacations.returnProducts(selectedPrdList, true, productsReturnSuccessCallBack, voidInfo);
	}
}

function eventOnSelectReturnBtn_test(rowdata1) {
    price = 0;
    totalSelectedPrd = 0;
    selectedPrdList = [];
    var isQuantityChanged = false;
    var totalcnt = 0;

	messageText+="\n";
    _.each(rowdata1, function(objData) {

        // var objData = rowdata1[j];
        saleTransactionID = objData["SaleTransactnId"];
        kony.print("objData===" + JSON.stringify(objData));


        //	isQuantityChanged = false;
        totalcnt++;
        if (objData["isChecked"] == true) {

            totalSelectedPrd++;
            selectedPrdList.push(objData);
            if (parseInt(objData["lblRetQuantity"]) < parseInt(objData["lblQuantity"])) isQuantityChanged = true;
            var orgPrice = removeDollar(objData["lblPrice"]);
            var orgTax = removeDollar(objData["lblTax"]);
            var retQuntity = objData["lblRetQuantity"];
            price += (parseFloat(orgPrice) + parseFloat(orgTax)) * parseInt(retQuntity);

        }
    });
    kony.print("c" + saleTransactionID);
    kony.print("isQuantityChanged===" + isQuantityChanged);
    kony.print("isQuantityChanged price===" + price);
    if(totalSelectedPrd > 0){
		boTransacations.checkMuliplePaymentType(saleTransactionID, function(isMulitplePayment,isCreditDisabled){
        		kony.print("::PK isMulitplePayment:: "+isMulitplePayment);
        		kony.print("::PK glbIsDisplayCCAmtRefundAlert:: "+glbIsDisplayCCAmtRefundAlert);
        		if(totalSelectedPrd != totalcnt && isMulitplePayment == true ) { //Partial Return is not allowed for transactions with Multiple payments.
        			kony.print("*** PARTIAL - MULTIPLE");
        			totalSelectedTranscation--;
        			alertForMessages(getLocalizedString("strPartialReturnNotAllowedMultiPayment"));
        			processMemberReturn();
        		}else if(totalSelectedPrd != totalcnt && isMulitplePayment == false && glbIsDisplayCCAmtRefundAlert == true) { //Partial Return is not allowed For transactions with Credit Card payment.
        			kony.print("*** PARTIAL - SINGLE - CC");
        			totalSelectedTranscation--;
        			alertForMessages(getLocalizedString("strPartialReturnNotAllowedCC"));
        			processMemberReturn();
        		}else if (totalSelectedPrd != totalcnt  && isMulitplePayment == false && glbIsDisplayCCAmtRefundAlert == false){ //Partial Return is only allowed for transactions Completed with single payment 
        			kony.print("*** PARTIAL - SINGLE - without CC");
        			if(isCreditDisabled == false){
        			try {
							boTransacations.returnProducts(selectedPrdList, false, productsReturnSuccessCallBack);
						} catch (e) {
							GlobalException(e);
						}
        			}else {
        				totalSelectedTranscation--;
        				alertForMessages(getLocalizedString("strPartialReturnNotAllowedCC"));
        				processMemberReturn();
        			}
        			
        		}else if (totalSelectedPrd == totalcnt  && isMulitplePayment == true && glbIsDisplayCCAmtRefundAlert == false){ //All Return is only allowed for transactions Completed with multiple payment -withour credti card
        			kony.print("*** ALL - MULTIPLE - without CC");
        			try {
							boTransacations.returnProducts(selectedPrdList, true, productsReturnSuccessCallBack);
						} catch (e) {
							GlobalException(e);
						}
        		}else if(totalSelectedPrd == totalcnt && isMulitplePayment == false && glbIsDisplayCCAmtRefundAlert == false) { //All return with Single payment - withour credit card
        			kony.print("*** ALL - SINGLE - without CC");
        			try {
							boTransacations.checkForPartialreturnByTransacationId(isMemberSelected, saleTransactionID, checkForPartialreturnByTransacationIdSuccessCallback);
					} catch (e) {
				           GlobalException(e);
					}
        		}else if(totalSelectedPrd == totalcnt && glbIsDisplayCCAmtRefundAlert == true){ //All product return wiht single/multiple payment with credit card
        			kony.print("*** ALL - SINGLE/MULIPLE -  CC");
					voidPaymentwithCC(selectedPrdList,isMulitplePayment);
        		}
        		
    		});	
	}
}


function checkForPartialreturnByTransacationIdSuccessCallback(isReturnDone) {

    kony.print("==isReturnDone==" + isReturnDone);
    var objData = popupProductReturns.segPrdReturns.data;
    try {
        boTransacations.returnProducts(selectedPrdList, !isReturnDone, productsReturnSuccessCallBack);

    } catch (e) {
        GlobalException(e);
    }
}

function getPaymentModeStrById(paymentMode) {
    var paymentStr = "";
    if (paymentMode == PaymentType[1]) {
        paymentStr = kony.i18n.getLocalizedString("strCash");
    } else if (paymentMode == PaymentType[13]) {
        paymentStr = kony.i18n.getLocalizedString("strCredit");
    } else if (paymentMode == PaymentType[2]) {
        paymentStr = kony.i18n.getLocalizedString("strCheck");
    } else if (paymentMode == PaymentType[9]) {
        paymentStr = kony.i18n.getLocalizedString("strCreditSlip");
    } else if (paymentMode == PaymentType[10]) {
        paymentStr = kony.i18n.getLocalizedString("strCreditSlip");
    } else if (paymentMode == PaymentType[7]) {
        paymentStr = kony.i18n.getLocalizedString("strDebitCard");
    }
    return paymentStr;
}

function allproductsReturnSuccessCallBack(SaleTransId,isVoidSuccess) {

    try {
        boTransacations.getSalePaymentDatabySaleTransactionId(SaleTransId, getallproductsReturnSuccessCallBack, isVoidSuccess);
    } catch (e) {
        GlobalException(e);
    }
}

function getallproductsReturnSuccessCallBack(response,isVoidSuccess) {
    if (isMemberSelected == "members" || isMemberSelected == "employeesale")
        totalSelectedTranscation--;
    kony.print("productCount found.... = " + JSON.stringify(response));
        kony.print("isVoidSuccess = " + isVoidSuccess);
    if(response.length>1 && glbIsDisplayCCAmtRefundAlert == true && isVoidSuccess == true) 
    	messageText+=kony.i18n.getLocalizedString("strProductReturnSuccessMsg");
    else  if(response.length == 1 && glbIsDisplayCCAmtRefundAlert == true && isVoidSuccess == true)
    	messageText+="";
    else
     	messageText+=kony.i18n.getLocalizedString("strAlertSimpleReturn");	
    if (response.length > 0) {
        for (var i in response) {
            var v = response[i];
            kony.print("mode.... = " + kony.sync.getString(v.Type));
            if(getPaymentModeStrById(kony.sync.getString(v.Type)) == "CreditCard" && glbIsDisplayCCAmtRefundAlert == true){
            	if( isVoidSuccess == false)
						{
							messageText += " "+glbCurrency + parseFloat(kony.sync.getString(v.Amount)).toFixed(2)+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(PaymentType[9]) ;
							messageText +=",";
						}
            } else {
            	 if(response.length>1 && glbIsDisplayCCAmtRefundAlert == true && isVoidSuccess == true){
                   if(kony.sync.getString(v.Type) == PaymentType[10]){
                      var amtToBeReturn = parseFloat(kony.sync.getString(v.Amount)).toFixed(2);
                      kony.print("amtToBeReturn=="+amtToBeReturn);
                  	  var amtAlreadyReturned = 0;
                      calculateCrSlipReturnAmt(v.SaleTransactnId,false, function(amt){
                        	amtAlreadyReturned = parseFloat(amt).toFixed(2);
                      });
                      amtToBeReturn = amtToBeReturn - amtAlreadyReturned;
                  	  kony.print("amtToBeReturn final=="+amtToBeReturn);
                      messageText += " "+getPaymentModeStrById(kony.sync.getString(v.Type))+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + parseFloat(amtToBeReturn).toFixed(2);
                   } else {
                     	messageText += " "+getPaymentModeStrById(kony.sync.getString(v.Type))+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + parseFloat(kony.sync.getString(v.Amount)).toFixed(2);
                   }
					
				}else if(getPaymentModeStrById(kony.sync.getString(v.Type)) == "CreditCard" && glbIsDisplayCCAmtRefundAlert == false) {
				        messageText += " "+glbCurrency + parseFloat(kony.sync.getString(v.Amount)).toFixed(2)+ " " +kony.i18n.getLocalizedString("strIn")+" "+kony.i18n.getLocalizedString("strCreditCardReturn") ;
				}else {
					var paymentMode = getPaymentModeStrById(kony.sync.getString(v.Type));
					kony.print("allproductsReturnSuccessCallBack paymentMode=="+paymentMode);
                  	var amtToBeReturn = parseFloat(kony.sync.getString(v.Amount)).toFixed(2);
                    kony.print("amtToBeReturn=="+amtToBeReturn);
                  	var amtAlreadyReturned = 0;
                  	if(kony.sync.getString(v.Type) == PaymentType[10]){
                      calculateCrSlipReturnAmt(v.SaleTransactnId,false, function(amt){
                        	amtAlreadyReturned = parseFloat(amt).toFixed(2);
                      });
                    }
                  	amtToBeReturn = parseFloat(amtToBeReturn - amtAlreadyReturned).toFixed(2);
                  	kony.print("amtToBeReturn final=="+amtToBeReturn);
		    	 	if(deviceLocale == "fr_CA"){
		    	 		messageText += setPaymentModeToReturn(kony.sync.getString(v.Type));
			     		var returnAmt = " "+addCurrency(amtToBeReturn)+ " ";
			     		messageText = messageText.replace("###", returnAmt);
			     		kony.print("allproductsReturnSuccessCallBack mode messageText=="+messageText);
			     	}else{
			     		messageText += " "+addCurrency(amtToBeReturn)+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(kony.sync.getString(v.Type)) ;
			     	}
            			
				}            
           		messageText +=",";
            }            
        }
         kony.print("AD :: messageText===" + messageText);
        kony.print("AD :: 2 totalSelectedTranscation===" + totalSelectedTranscation);
        if (totalSelectedTranscation > 0 ) {
			processMemberReturn();
		}else if (totalSelectedTranscation == 0 ) {
        	if(messageText.slice(-1) ==  ',')
       		messageText= messageText.substr(0,messageText.length-1);
        	kony.print("AD :: 3 totalSelectedTranscation===" + totalSelectedTranscation);
        	kony.print("AD :: 3 messageText===" + messageText);
       		showProductReturnAlert(messageText, true, "info");
        }
    }
}


function productsReturnSuccessCallBack(productCount, paymentMode) {
    kony.print("paymentMode : "+paymentMode);
	kony.print("--PK---totalSelectedTranscation=="+totalSelectedTranscation);
	//if(paymentMode )
	messageText+=kony.i18n.getLocalizedString("strAlertSimpleReturn");	
 	if(isMemberSelected=="members" ||isMemberSelected == "employeesale" )
    	totalSelectedTranscation--;
	kony.print("totalSelectedTranscation=="+totalSelectedTranscation);
	if(paymentMode == "CreditCard" && glbIsDisplayCCAmtRefundAlert == true){
		kony.print("totalSelectedTranscation CreditCard=="+creditCrardSalePaymentDataObj);
		if(creditCrardSalePaymentDataObj == null)
		{
		    //     messageText += " "+glbCurrency + parseFloat(price.toFixed(2))+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(paymentMode) ;// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
			messageText += " "+getPaymentModeStrById(paymentMode[9])+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + parseFloat(kony.sync.getString(v.Amount)).toFixed(2);// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
		}
    } else {
		//messageText += " "+getPaymentModeStrById(paymentMode)+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + parseFloat(price.toFixed(2));// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
         //messageText += " "+glbCurrency + parseFloat(price.toFixed(2))+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(paymentMode) ;// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
    	var mode = getPaymentModeStrById(paymentMode);
    	kony.print("totalSelectedTranscation mode=="+mode);
	 	if(deviceLocale == "fr_CA"){
	 		messageText += setPaymentModeToReturn(paymentMode);
     		kony.print("Price To Return=="+price + " - " +parseFloat(price).toFixed(2));
     		var returnAmt = " "+addCurrency(parseFloat(price).toFixed(2))+ " ";
     		messageText = messageText.replace("###", returnAmt);
     		kony.print("totalSelectedTranscation mode messageText=="+messageText);
     		
     	}else{
     		messageText += " "+addCurrency(parseFloat(price).toFixed(2))+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(paymentMode) ;
     	}
    }
    if (totalSelectedTranscation > 0 ) {
			processMemberReturn();
	}else if (totalSelectedTranscation == 0 ){
		if(messageText.slice(-1) ==  ',')
       		messageText= messageText.substr(0,messageText.length-1);
    	kony.print("AD :: 4 messageText===" + messageText + " --- totalSelectedTranscation==" +totalSelectedTranscation);
        showProductReturnAlert(messageText, true, "info");
    }
}

function eventOnSelectSimpleReturnBtn() {
    IsSimpleReturn = FlowForScreens.SimpleReturn;
    ClearTangibleProductsSegments();
    hboxHeaderWithCancelBtn.lblTitle.text = "";
    hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strHeaderProdcutReturn");
    frmDirectSaleProductList.scrollbox12443534679147550.containerHeight = 50;
    frmDirectSaleProductList.scrollbox12443534677872493.containerHeight = 80;
    frmDirectSaleProductList.lblProcessMembersubSubHeaderstudio4.text = kony.i18n.getLocalizedString("strSubHeaderReturn");//Modified by Studio Viz
    frmDirectSaleProductList.hboxSubHeader.isVisible = false;
    frmDirectSaleProductList.show();
}

function showProductReturnAlert(messageText, isRedirectToHomePage, alert_type) {
    alert_type_const = (alert_type == "error") ? constants.ALERT_TYPE_ERROR : constants.ALERT_TYPE_INFO;
    if (isRedirectToHomePage == true) {
        alertHandlerFunction = redirectHomeScreen;
    } else if (isRedirectToHomePage == false) {
        if (alert_type == "error" || alert_type == "voidinfo" ) {
            alertHandlerFunction = "";
        } else {
        	alertHandlerFunction = redirectToReceiptScreen;
        }
    }
    var basicConf = {
        message: messageText,
        alertType: alert_type_const,
        alertTitle: "",
        yesLabel: "Ok",
        noLabel: "Cancel",
        alertHandler: alertHandlerFunction
    };
    var pspConf = {};
    var infoAlert = kony.ui.Alert(basicConf, pspConf);
}

function displayTranRefundAlert(){
	var alertConfig = {
        message:  glbDisplayCCAmtRefundAlertMsg ,
        alertType : constants.ALERT_TYPE_INFO,
        alertTitle : "",
        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
        alertHandler : 	resetVariableData
    };
    var psConfig = {};
    var myAlert = kony.ui.Alert(alertConfig, psConfig);
}

function redirectHomeScreen(response) {
	
	resetVariableData();
}

function resetVariableData(){
	resetVars();
    popupProductReturns.dismiss();
    checkeInMembers.getAllMembersList();
    frmHomeScreen.show();
}

function bindTransactionsData(response) {
    if (response.length > 0) {
        prodTranscationData = [];
        for (var i in response) {
            var v = response[i];
            var newObj = {};
            if (isMemberSelected == "members" || isMemberSelected == "employeesale") {
                newObj["lblLname"] = kony.sync.getString(v.LastName);
                newObj["lblFname"] = kony.sync.getString(v.FirstName);
            } else {
                newObj["lblLname"] = "-";
                newObj["lblFname"] = "-";
            }
            newObj["lblTanscNumber"] = kony.sync.getString(v.SaleTransactnId);
            newObj["lblTime"] = timeConvert24To12(kony.sync.getString(v.SaleDate1));
            newObj["lblAmount"] = addCurrency(parseFloat(kony.sync.getString(v.TotalSalePrice)).toFixed(2));
            newObj["RegNumber"] = kony.sync.getString(v.RegNumber);
            newObj["MemberID"] = kony.sync.getString(v.MemberID);
            newObj["MeetingOccurID"] = kony.sync.getString(v.MeetingOccurID);
            newObj["SalePrice"] = kony.sync.getString(v.TotalSalePrice);
            newObj["TotalSaleTax"] = kony.sync.getString(v.TotalSaleTax);
            prodTranscationData.push(newObj);
        }
        frmProductReturns.segPrdReturns.setData(prodTranscationData);
    }
}

function eventOnClickTimeSortImg() {
    var obj = frmProductReturns.segPrdReturns.data;
    if (obj != null && obj.length > 0) {
        sortFlag = !sortFlag;
        if (sortFlag == true) {
            frmProductReturns.imgSortHeader.src = "icn_sortby_down.png";
        } else {
            frmProductReturns.imgSortHeader.src = "icn_sortby.png";
        }
        try {
            boTransacations.getTransacationsByMeetingId(parseInt(glbMeetingNum), isMemberSelected, sortFlag, bindTransactionsData);
        } catch (e) {
            GlobalException(e);
        }
    }
}

function eventOnClickTransactionSearchText() {
    var lnameval = frmProductReturns.txtLname.text;
    var fnameval = frmProductReturns.txtFname.text;
    var empDataSource = prodTranscationData;
    try {
        if (checkValidString(lnameval) || checkValidString(fnameval)) {
            var newdatasource = {};
            var tmpdata = [];
            for (var i = 0; i < empDataSource.length; i++) {
                var lastname = -1;
                var firstname = -1;
                if (checkValidString(lnameval)) {
                    lastname = empDataSource[i].lblLname.toLowerCase().indexOf(lnameval.toLowerCase());
                }
                if (checkValidString(fnameval)) {
                    firstname = empDataSource[i].lblFname.toLowerCase().indexOf(fnameval.toLowerCase());
                }
                if (lastname != -1 || firstname != -1) {
                    newdatasource = empDataSource[i];
                    tmpdata.push(newdatasource);
                }
            }
            if (tmpdata.length > 0) {
                frmProductReturns.segPrdReturns.data = tmpdata;
            }
        } else {
            frmProductReturns.segPrdReturns.data = empDataSource;
        }
    } catch (e) {
        GlobalException(e);
    }
}

function bindProductsReturnData(response) {
    if (response.length > 0) {
        if (isMemberSelected == "members" || isMemberSelected == "employeesale") {
            //Member Data
            BindProductReturnDataForMember(response);
            popupProductReturns.chkSelectAll.isVisible = false;
            popupProductReturns.vbox1332450755740884.padding = [0, 0, 23, 0];
            if(isMemberSelected == "employeesale")
			{
				popupProductReturns.btnSimpleRet.isVisible = false;
			}
			else
			{
				popupProductReturns.btnSimpleRet.isVisible = true;
			}
        } else {
            popupProductReturns.btnSimpleRet.isVisible = true;
            popupProductReturns.chkSelectAll.isVisible = true;
            popupProductReturns.vbox1332450755740884.padding = [0, 0, 0, 0];
            var prodData = [];
            kony.print("bindProductsReturnData response==>> "+JSON.stringify(response));
            for (var i in response) {
                var v = response[i];
                kony.print("bindProductsReturnData v==>> "+JSON.stringify(v));
                var newObj = {};
                newObj["lblPrdSKU"] = kony.sync.getString(v.ProductSku);
                newObj["lblDesc"] = kony.sync.getString(v.description);
                newObj["lblAmount"] = addDollar(parseFloat(kony.sync.getString(v.TotalPrice)).toFixed(2));
                newObj["isChecked"] = false;
                newObj["lblTax"] = addDollar(parseFloat(kony.sync.getString(v.UnitPriceTax)).toFixed(2));
                newObj["lblQuantity"] = kony.sync.getString(v.Quantity);
                newObj["imgCheck"] = "icn_checkbox_unchecked.png";
                newObj["lblPrice"] = addDollar(parseFloat(kony.sync.getString(v.UnitPrice)).toFixed(2));
                newObj["lblRetQuantity"] = kony.sync.getString(v.Quantity);
                newObj["rowIndex"] = i;
                newObj["imgHope"] = "icn_currentmeeting_hope_aerrow.png";
                newObj["ProductID"] = kony.sync.getString(v.ProductID);
                newObj["SaleTransactnId"] = kony.sync.getString(v.SaleTransactnId);
                newObj["Id"] = kony.sync.getString(v.Id);
                newObj["Type"] = kony.sync.getString(v.Type);
                newObj["SalePrice"] = parseFloat(kony.sync.getString(v.SalePrice)).toFixed(2);
                newObj["TotalSaleTax"] = parseFloat(kony.sync.getString(v.TotalSaleTax)).toFixed(2);
                prodData.push(newObj);
            }
            popupProductReturns.segPrdReturns.setData(prodData);

        }
    }
}


function BindProductReturnDataForMember(response) {
    kony.print("::BindProductReturnDataForMember::response=" + JSON.stringify(response));

    //Group Transactions by Transaction ID
    var transactions = _.groupBy(response, function(r) {
        return r.SaleTransactnId
    });
    
    var segData = []; // main segment data
    var trasactionCount = 0,
        i = 0;
    // List of items for a transaction
    _.each(transactions, function(transaction, SaleTransactnId) {
    
        var oneTransactionSegment = []; // this contains one full transaction with header and items array
        var itemsData = [];
        var header;
        var voidabletransaction = _.find(transaction, function(tr) {
            return tr.Type != "TangibleProduct"
        });
        
        //If starter voucher is issued then Void transaction is disabled for the member.
        var isFailedMPVoucher = false;
        boVoidMember.getSaleItemDetailsBySaleTranID(SaleTransactnId, function(res){
        	kony.print("isFailedMPVoucher res = "+res);
        	isFailedMPVoucher = res;
        });
        
        
        kony.print("::voidabletransaction::" + JSON.stringify(voidabletransaction));
        if (checkValidString(voidabletransaction)) {
            kony.print("::voidabletransaction::00");
            //Got A NonTangible Product - So Normal Flow - Void allowed
            header = {
                template: createSegmentHeaderProductReturn(SaleTransactnId, kony.i18n.getLocalizedString("strmsgTransaction") + " " + (trasactionCount + 1),transaction[0].isActivated,isFailedMPVoucher)
            };
        } else {
            kony.print("::voidabletransaction::11");
            //No Non Tangible Products - Simple All Product Return Flow
            header = {
                template: createSegmentHeaderProductReturn(SaleTransactnId + "~~", kony.i18n.getLocalizedString("strmsgTransaction") + " " + (trasactionCount + 1),transaction[0].isActivated,isFailedMPVoucher)
            };
        }
        //Push Header
        oneTransactionSegment.push(header);
        //Push Items for that ID

        _.each(transaction, function(item) {
            var type = kony.sync.getString(item.Type);
            var newObj = {};

            newObj["lblPrdSKU"] = kony.sync.getString(item.ProductSku);
            newObj["lblDesc"] = kony.sync.getString(item.description);
            newObj["lblAmount"] = addCurrency(parseFloat(kony.sync.getString(item.TotalPrice)).toFixed(2));
            newObj["isChecked"] = false;
            newObj["lblTax"] = addCurrency(parseFloat(kony.sync.getString(item.UnitPriceTax)).toFixed(2));
            newObj["lblQuantity"] = kony.sync.getString(item.Quantity);
            newObj["imgCheck"] = {
                isVisible: (type == 'TangibleProduct' && isMemberSelected != "employeesale") ? true : false,
                src: "icn_checkbox_unchecked.png"
            }
            newObj["lblPrice"] = addCurrency(parseFloat(kony.sync.getString(item.UnitPrice)).toFixed(2));
            newObj["lblRetQuantity"] = kony.sync.getString(item.Quantity);
            newObj["rowIndex"] = i++;
            newObj["imgHope"] = "icn_currentmeeting_hope_aerrow.png";
            newObj["ProductID"] = kony.sync.getString(item.ProductID);
            newObj["SaleTransactnId"] = kony.sync.getString(item.SaleTransactnId);
            newObj["Id"] = kony.sync.getString(item.Id);
            newObj["Type"] = type;

            newObj["SalePrice"] = parseFloat(kony.sync.getString(item.SalePrice)).toFixed(2);
            newObj["TotalSaleTax"] = parseFloat(kony.sync.getString(item.TotalSaleTax)).toFixed(2);
			

            itemsData.push(newObj);
        });
        trasactionCount++;
        oneTransactionSegment.push(itemsData);
        segData.push(oneTransactionSegment);

    });


    popupProductReturns.segPrdReturns.setData(segData);
}
/*function onCheckedAllProductReturnListforEmployee() {
    	isAllChecked = !isAllChecked;
    var rowcnt = 0;
    var rowdata1 = popupProductReturns.segPrdReturns.data;
    kony.print("::onCheckedAllProductReturnListforEmployee::==>rowdata1"+JSON.stringify(rowdata1));
    kony.print("::onCheckedAllProductReturnListforEmployee::==>rowdata1 length =="+rowdata1.length);
    for (var j = 0; j < rowdata1.length; j++) {

        var objData = rowdata1[j];
        kony.print("::onCheckedAllProductReturnListforEmployee::==rowdata1[j]"+JSON.stringify(rowdata1[j]));
        kony.print("::onCheckedAllProductReturnListforEmployee::==rowdata1[j] length =="+rowdata1[j].length);
		kony.print("::onCheckedAllProductReturnListforEmployee::==>objData"+JSON.stringify(objData));
		kony.print("::onCheckedAllProductReturnListforEmployee::==>objData length =="+objData.length);
        var newObj = {};

        newObj["lblPrdSKU"] = objData["lblPrdSKU"];
        newObj["lblDesc"] = objData["lblDesc"];
        newObj["lblAmount"] = objData["lblAmount"];
        newObj["isChecked"] = isAllChecked;
        newObj["lblTax"] = objData["lblTax"];
        newObj["lblQuantity"] = objData["lblQuantity"];
        if (isAllChecked) {
            newObj["imgCheck"] = "icn_checkbox_checked.png";
            popupProductReturns.chkSelectAll.src = "icn_checkbox_checked.png";
        } else {
            newObj["imgCheck"] = "icn_checkbox_unchecked.png";
            popupProductReturns.chkSelectAll.src = "icn_checkbox_unchecked.png";
        }
        newObj["lblPrice"] = objData["lblPrice"];
        newObj["lblRetQuantity"] = objData["lblRetQuantity"];
        newObj["rowIndex"] = objData["rowIndex"];
        newObj["imgHope"] = objData["imgHope"];
        newObj["ProductID"] = objData["ProductID"];
        newObj["SaleTransactnId"] = objData["SaleTransactnId"];
        newObj["Id"] = objData["Id"];
        newObj["Type"] = objData["Type"];
        newObj["SalePrice"] = objData["SalePrice"];
        newObj["TotalSaleTax"] = objData["TotalSaleTax"];
		popupProductReturns.segPrdReturns.setDataAt(newObj, rowcnt);
    	kony.print("::onCheckedAllProductReturnListforEmployee::==>newObj"+JSON.stringify(newObj));    
        rowcnt++;
}

        
};*/
function createSegmentHeaderProductReturn(id, name, isActivated,isFailedMPVoucher) {
    kony.print("::createSegmentHeaderProductReturn::id=" + id);
    kony.print("::createSegmentHeaderProductReturn::isActivated=" + isActivated);
    kony.print("::createSegmentHeaderProductReturn::isFailedMPVoucher=" + isFailedMPVoucher);
    
    /*var isbtnVoidTranVisible = false;
    if(checkValidString(id)&& isMemberSelected == "members")
    	isbtnVoidTranVisible = true;
    else
    	isbtnVoidTranVisible = false;*/
    	
    /*if(checkValidString(id) && isMemberSelected == "employeesale")
    {
	    var chkSelectAll = new kony.ui.Image2({
	        "id": "chkSelectAll",
	        "imageWhenFailed": null,
	        "imageWhileDownloading": null,
	        "isVisible": true,
	        "src": "icn_checkbox_unchecked.png"
	    }, {
	        "containerWeight": 93,
	        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
	        "margin": [0, 0, 0, 0],
	        "marginInPixel": false,
	        "padding": [0, 0, 0, 0],
	        "paddingInPixel": false,
	        "referenceHeight": null,
	        "referenceWidth": null,
	        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
	    }, {
	        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
	    });
	    var vboxchkSelectAll = new kony.ui.Box({
	        "id": "vboxchkSelectAll",
	        "isVisible": true,
	        "onClick": onCheckedAllProductReturnListforEmployee,
	        "orientation": constants.BOX_LAYOUT_VERTICAL
	    }, {
	        "containerWeight": 6,
	        "hExpand": true,
	        "layoutType": constants.CONTAINER_LAYOUT_BOX,
	        "margin": [25, 0, 0, 0],//i need pixel between 2% and 3%
	        "marginInPixel": true,
	        "padding": [0, 0, 0, 0],
	        "paddingInPixel": false,
	        "vExpand": false,
	        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
	    }, {});
    	vboxchkSelectAll.add(
    	chkSelectAll);
    
    }*/
    
    var lblTransactionId = new kony.ui.Label({
        "id": "lblTransactionId",
        "isVisible": true,
        "text": name,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [7, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox351552438727641 = new kony.ui.Box({
        "id": "vbox351552438727641",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 59,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox351552438727641.add(
        lblTransactionId);
    var btnSimpleRet = new kony.ui.Button({
        "id": checkValidString(id) ? id : "btnSimple",
        "isVisible": checkValidString(id) ? true : false,//(checkValidString(id) && isMemberSelected != "employeesale") ? true : false,
        "text": kony.i18n.getLocalizedString("strVoidTransaction"),
        "skin": (parseInt(isActivated) > 0 || isFailedMPVoucher) ? "btnNoWeighInSelected" : "btnwwtxtSearchLocation",
        "focusSkin": (parseInt(isActivated) > 0 || isFailedMPVoucher) ? "btnNoWeighInSelected" : "btnwwtxtSearchLocation",
        "onClick": (parseInt(isActivated) > 0 || isFailedMPVoucher) ? doNothing : onClickVoidProducts
        
       // "enable" : (parseInt(isActivated) > 0) ? false : true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_RIGHT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox2041388838552970 = new kony.ui.Box({
        "id": "vbox2041388838552970",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox2041388838552970.add(
        btnSimpleRet);
      
    var hbox12443534672794576 = new kony.ui.Box({
        "id": "hbox12443534672794576",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 86,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 8],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox12443534672794576.add(
        vbox2041388838552970);
    var vbox1332450755651457 = new kony.ui.Box({
        "id": "vbox1332450755651457",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 41,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 3, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1332450755651457.add(
        hbox12443534672794576);
    boxRefSegHdr = new kony.ui.Box({
        "id": "boxRefSegHdr",
        "isVisible": true,
        "skin": "hboxFooterSkin",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    boxRefSegHdr.add(vbox351552438727641, vbox1332450755651457);//vboxchkSelectAll


    return boxRefSegHdr;
};
function doNothing(){}
function onClickVoidProducts(event) {
    var transactionid = event.id,
        isNonTangibleSale;
    kony.print("::onClickVoidProducts::" + transactionid);

    if (transactionid.indexOf("~~") != -1) {
        //Normal Sale - No NonTangible Found -> All Product Return
        transactionid = transactionid.replace("~~", "");
        isNonTangibleSale = false;
    } else {
        //Non Tangible Item Present -> Delete Weight and Note (Locally)
        isNonTangibleSale = true;
    }
    kony.print("::onClickVoidProducts::isNonTangibleSale=" + isNonTangibleSale);
   
    boVoidMember.voidMember(glbMemberIDSelectedForProducReturn, transactionid, isNonTangibleSale, function(msg) {
        kony.print("::onClickVoidProducts:: Success - > msg=" + msg);
        kony.print("glbIsDisplayCCAmtRefundAlert" + glbIsDisplayCCAmtRefundAlert);
        if(msg.slice(-1) ==  ',')
       			msg= msg.substr(0,msg.length-1);
        showProductReturnAlert(msg, true, "info");
        
    });
}

function setPaymentModeToReturn(paymentMode){
	var msg = "";
	switch(paymentMode){
		case PaymentType[1] :
			msg = getLocalizedString("strReurnCash");
			break;
		case PaymentType[13] :
			msg = getLocalizedString("strReturnCredit");
			break;
		case PaymentType[9] :
		 	msg = getLocalizedString("strReturnCreditSlip");
			break;
		case PaymentType[10] :
		 	msg = getLocalizedString("strReturnCreditSlip");
			break;
		case PaymentType[7] :
		 	msg = getLocalizedString("strReturnDebit");
			break;
	}
	return msg;
}

function calculateCrSlipReturnAmt(saleTransactnId, isSaveToDB, callback){
    var amtAlreadyReturned = 0;
  	kony.print("SJ isSaveToDB=="+isSaveToDB);
    boTransacations.getCrSlipIssueBySaleTranID(saleTransactnId, function(result){
      kony.print("SJ Result=="+JSON.stringify(result));
      var val = 0;
      if(isSaveToDB == false || isSaveToDB == 'false'){
        	val = 1;
      }
      kony.print("SJ val=="+val);
      if(result != undefined && result.length > val){
        var obj = result[0];
        amtAlreadyReturned = parseFloat(kony.sync.getString(obj.Amount)).toFixed(2);
        kony.print("amtAlreadyReturned=="+amtAlreadyReturned);
      }
      
    });
  	callback.call(null, amtAlreadyReturned);
}