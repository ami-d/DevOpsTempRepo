var pID;
var pSKU;
var rowindex;

function eventonClicksegmentApplyDiscount() {
    var selectedvalue = popupDiscount.segmentApplyDiscount.selectedItems[0]["lblDiscountData"];
    kony.print("selectedvalue==>>" + selectedvalue);
    kony.print("popupDiscount.segmentApplyDiscount.selectedItems[lblDiscountData]" + popupDiscount.segmentApplyDiscount.selectedItems[0]["lblDiscountData"]);
    kony.print("popupDiscount.segmentApplyDiscount.selectedItems[lblDiscountData]" + popupDiscount.segmentApplyDiscount.selectedItems[0]["lblDiscountData"]);
    if (selectedvalue == "Apply Discount") {
        var context = {
            "widget": popupDiscount.segmentApplyDiscount,
            "anchor": "left",
            "sizetoanchorwidth": true
        };
        popupDiscountData.setContext(context);
        //kony.print("popupDiscountData.cmbApplyDiscount.isVisible" + popupDiscountData.cmbApplyDiscount.isVisible);
        //popupDiscountData.cmbApplyDiscount.masterData=getMasterDataforCombo();
        //popupDiscountData.cmbApplyDiscount.isVisible = true;
        popupDiscountData.hboxOfferCoupon.isVisible = true;
        popupDiscountData.hboxQuantity.isVisible = false;
        popupDiscountData.show();
    } else if (selectedvalue == "Change Quantity") {
        var context = {
            "widget": popupDiscount.segmentApplyDiscount,
            "anchor": "left",
            "sizetoanchorwidth": true
        };
        popupDiscountData.setContext(context);
        kony.print("popupDiscountData.hboxQuantity.isVisible" + popupDiscountData.hboxQuantity.isVisible);
        popupDiscountData.hboxQuantity.isVisible = true;
        popupDiscountData.cmbApplyDiscount.isVisible = false;
        popupDiscountData.show();
    } else if (selectedvalue == "Apply Pre-paid Coupon") {
        //alert("Selectd data == "+JSON.stringify(popupDiscount.segmentApplyDiscount.selectedItems[0]));
        var skuVal = popupDiscount.segmentApplyDiscount.selectedItems[0]["hidSku"];
        //alert("Select SKU=="+skuVal);
        if (in_array(skuVal, getSKUList('Applied_PrePaid_Coupon'))) {
            getSkuValue("Attend", "Value", "3-2-2", "01/28/1989", "0", "0", true, true);
        } else {
            getSkuValue("Attend", "Value", "3-2-2", "01/28/1989", "0", "0", true, false);
        }


    }
}

function getMasterDataforCombo(offers) {
    var offers = [{
        "AutoApplied": false,
        "DiscountValue": "3.95",
        "OID": "1",
        "OfferDescription": "CRUNCHYSALE"
    }, {
        "AutoApplied": false,
        "DiscountValue": "3.95",
        "OID": "2",
        "OfferDescription": "2014 KIT COUPON"
    }]


    var result = [];
    if (offers.length > 0) {
        for (obj in offers) {
            var arr = [];
            arr.push(offers[obj].OID);
            arr.push(offers[obj].OfferDescription);
            result.push(arr);
        }
    }
    return result;
}

function eventonClickDoneImageDiscount() {
    //kony.print("popupDiscountData.cmbApplyDiscount.selectedKeyValue[0][1]===>>>"+popupDiscountData.cmbApplyDiscount.selectedKeyValue[0][1]);
    kony.print("popupDiscountData.cmbApplyDiscount.selectedKey===>>" + popupDiscountData.cmbApplyDiscount.selectedKey);
    //var SelectedData = popupDiscountData.cmbApplyDiscount.selectedKey;
    var QuantityValue = popupDiscountData.txtQuantity.text;
    var OfferCoupon = popupDiscountData.txtOfferCoupon.text;
    //alert(pID+"------"+OfferCoupon+'------'+pSKU);
    popupDiscountData.dismiss();
    popupDiscount.dismiss();
    boEnrollMember.applyDiscountValue(pID, OfferCoupon);

    popupDiscountData.txtQuantity.text = "";
    popupDiscountData.txtOfferCoupon.text = "";


}

function eventonClickvboxEditIcon() {
    popupDiscount.segmentApplyDiscount.removeAll();
    //alert("In vbox");
    //Commenting POc code here
    //pID = frmEnrollNewMemberPayment.segSKUData.selectedItems[0]["hidProductId"];
    //	pSKU = frmEnrollNewMemberPayment.segSKUData.selectedItems[0]["hidSKU"];
    //	
    //	if(pSKU == "500" || pSKU == "507"){
    //		var dataObj = [{lblDiscountData:"Apply Discount"},{lblDiscountData:"Change Quantity"},{lblDiscountData:"Apply Pre-paid Coupon"}];
    //		popupDiscount.segmentApplyDiscount.setData(dataObj)
    //	}
    //	
    //	var context={"widget":frmEnrollNewMemberPayment.segSKUData,"anchor":"left","sizetoanchorwidth":true};  
    //	popupDiscount.setContext(context);
    //	popupDiscount.show();


    pID = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidProductId"];
    pSKU = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSKU"];

    if (in_array(pSKU, getSKUList('Applied_Discount'))) {
        var dataObj = [{
            lblDiscountData: "Apply Discount",
            hidproductid: "",
            hidSku: ""
        }, {
            lblDiscountData: "Change Quantity",
            hidproductid: "",
            hidSku: ""
        }, {
            lblDiscountData: "Apply Pre-paid Coupon",
            hidproductid: pID,
            hidSku: pSKU
        }];
        popupDiscount.segmentApplyDiscount.setData(dataObj)
    } else {
        var firObj = [{
            lblDiscountData: "Apply Discount",
            hidproductid: "",
            hidSku: ""
        }, {
            lblDiscountData: "Change Quantity",
            hidproductid: "",
            hidSku: ""
        }];
        popupDiscount.segmentApplyDiscount.setData(firObj)
    }
    var context = {
        "widget": frmAddAndWeighMemberTransaction.segSKUDataPOC,
        "anchor": "left",
        "sizetoanchorwidth": true
    };
    popupDiscount.setContext(context);
    popupDiscount.show();
}

//Added by praveen kalal for MEG-2737
function eventOnRowClickOrderDetails() {
    try {
        if (popupNonTengibleoffers.lblskuno != undefined && popupNonTengibleoffers.lblskuno != null && popupNonTengibleoffers.lblprice != null) {
            var context = {
                "widget": frmAddAndWeighMemberTransaction.segSKUDataPOC,
                "anchor": "left",
                "sizetoanchorwidth": true
            };
          	 kony.print("hidIsAllowPriceOverride==" + frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidIsAllowPriceOverride"]);

            enabledOrDisabledAWSContainer();
          	enabledOrDisabledPriceOverride(frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidIsAllowPriceOverride"]);
            popupNonTengibleoffers.setContext(context);
            popupNonTengibleoffers.show();
            //var Itemsdata = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0];
            rowindex = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedIndex[1];
            glbSelectedNonTagibleProduct = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidProductId"];
            kony.print("frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0][hidSKU]==" + frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSKU"]);
            //popupNonTengibleoffers.lblskuno.text = (IsAWSLocationEnabled())?getAWSProductSku(frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSKU"]):frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSKU"];
            popupNonTengibleoffers.lblskuno.text = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSKU"];
          	popupNonTengibleoffers.lblprice.text = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["lblUnit"];
            popupNonTengibleoffers.lblItemDetails.text = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["lblDesc"];
            popupNonTengibleoffers.txtUnitPrice.text = glbCurrency + displayPriceByLocale(parseFloat(removeDollar(frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["lblUnit"]))+parseFloat(frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSubsidyAmount"]));//**MEG 7352
          	popupNonTengibleoffers.lblTaxRate.text = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidTaxRate"]; //Added for 4832
          	popupNonTengibleoffers.txtSubsidyPrice.text = glbCurrency + frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSubsidyAmount"];
          
          	kony.print("::debug::hidSubsidyAmount::"+frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSubsidyAmount"]);
          	printLog("hidReasonId", frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidReasonId"]);
			var reasonID = frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidReasonId"];
			if(checkValidString(reasonID)){
				  _.each(reasonMasterData[0], function(objData) {
			            if (objData[0] == reasonID) {
			               popupNonTengibleoffers.lblReasonData.text = objData[1];
			               printLog("selected reason", objData[1]);
			               
			            }
			        });
			}else {
				popupNonTengibleoffers.lblReasonData.text = "None"
			}
        }

    } catch (e) {
        GlobalException(e);
        // todo: handle exception
    }
}

//End by praveen kalal for MEG-2737
