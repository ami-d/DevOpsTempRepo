var intSelectedRowIndexFromCart = 0;
var selectedProductID = 0; // for knowing which product is selected
var selectedProductOffersArray = []; // for knowing the offers of selected product offers
var isAnyOpenPromotion = false; //For knowing if any product as AutoApplied- open promotion

var nonTangibleTotal = 0;
var totalNonTangibleTaxAmount = 0;
var selectedOfferForProduct = {};

var unitPrice;

function onPostShowGetFormNameForProductList() {
    //Set the current application form flag and empty the segments
    if (kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
        isDirectSaleForm = false;
    } else if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id) {
        isDirectSaleForm = true;
    }
}

//Called on Post Show with "Featured" Product Category
function onPostShowgetProductsAddWeighScreen() {
    onPostShowGetFormNameForProductList();
    onPostShowPopulateOpenPromotion();

    //This is used to set Non Tangible products after subscription screen.
    if (glbNonTangibleDataToBeSet.length > 0) {
        eventOnClickProductInSegment(glbNonTangibleDataToBeSet, "NonTangible");
    }
    kony.print("ProductSale.Cart instanceof ProductCart = " + ProductSale.Cart instanceof ProductCart);
    kony.print("ProductSale.Cart = " + JSON.stringify(ProductSale.Cart));

    ProductSale.Cart.calculateTotal();

    //Show Loading
    displayProgressView();
    try {
        //Bind categories - first time
        function successCallbackCategories(categoryResponse) {

            if (categoryResponse.length > 0) {
                bindCategories(categoryResponse);
            } else {

                removeProgressView();
            }
        }
        //populate category popup - only first time
        boAddWeighTransaction.getCategories(successCallbackCategories);
        //First Launch - show Featured Products
		if (in_array(deviceLocale,Countries["CA"]))
        	getProductsFromTable(productCategoryEnum[2]);
        else
        	getProductsFromTable(productCategoryEnum[1]);
        frmDirectSaleProductList.txtSearchProduct.text = "";
        if (in_array(deviceLocale,Countries["CA"]))
        	kony.application.getCurrentForm().lblCatType.text = getLocalizedString("strAllProduct");
        else
        	kony.application.getCurrentForm().lblCatType.text = getLocalizedString("strFeatured");

    } catch (e) {
        removeProgressView();
        GlobalException(e);
    }
}


//General GetProductsFromTable takes category as parameter
function getProductsFromTable(category) {
    try {
        displayProgressView();
        frmDirectSaleProductList.txtSearchProduct.text = "";

        function successCallbackProducts(productResponse) {
            if (productResponse.length > 0) {
                BindSegProductData(productResponse);
            } else {
				alertForMessages(kony.i18n.getLocalizedString("strMsgValidPass")); // MEGCA-286
				BindSegProductData(new Array(0));
                //Call webservice and get data - bind to segment
                removeProgressView();
            }
        }
        //get Products - Featured on first launch else pass category
        boAddWeighTransaction.getProducts(category, successCallbackProducts);
    } catch (e) {
        removeProgressView();
        GlobalException(e);
    }
}



//This is called first time on postShow
function bindCategories(categories) {

    var popupcategorydata = [];
    var temp = [];
    temp.push([0, getLocalizedString("strFeatured")], [1, getLocalizedString("strAllProduct")]);
    for (var i in categories) {
        temp.push([i + 2, categories[i]._ProductCategoryDesc]);
    }
    temp.push(100);

    popupcategorydata.push(temp);
    popupCategoryType.pickerCategories.masterData = popupcategorydata;

    if (in_array(deviceLocale,Countries["CA"]))
    	//popupCategoryType.pickerCategories.setSelectedKeyInComponent("All Products", 1);
    	popupCategoryType.pickerCategories.selectedKeys=["1"];
    else
    	popupCategoryType.pickerCategories.selectedKeys=["0"];
    	//popupCategoryType.pickerCategories.setSelectedKeyInComponent("Featured", 0);
    	}

//This is called when user clicks category - opens Popup	
function eventonClickhboxCategorySection() {
    var context = {
        "widget": kony.application.getCurrentForm().hboxCategorySection,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupCategoryType.setContext(context);
    popupCategoryType.show();

}

//This Binds Segment Data - Provide just the response array in parameter 
function BindSegProductData(productsArray) {
    //Take 3 arrays for 3 different segments	
    var a = [],
        b = [],
        c = [];
    for (var i = 0; i < productsArray.length; i++) {

        var vData = productsArray[i];
        var ProductID = kony.sync.getString(vData._ProductID);
        var description = kony.sync.getString(vData._description);
        var UnitPrice = addDollar(parseFloat(kony.sync.getString(vData._UnitPrice)).toFixed(2));
        var sku = kony.sync.getString(vData._sku);
        var smallDesc = description;
        var maxQty = vData._MaxQuantity;
        var tax = vData._UnitPriceTax;
        var taxRateForProduct = parseFloat(vData._TaxRate).toFixed(3); //Added for 4832
		var isPrepaymentPlan = vData._IsPrepaymentPlan;
        if ((glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') && tax != "" && tax != null && tax != undefined) {
            tax = parseFloat(tax).toFixed(2);
        } else {
            tax = 0;
        }
        if (smallDesc.length > 17) {
            smallDesc = description.substring(0, 14) + "..";
        }
        if ((i + 1) % 3 == 1) //Segment 0
        {
            var vMap = mapKeys(viewAddWeighTransactions, {
                lblDesc1: smallDesc,
                img1: getProductImage(sku), //"prod" + sku + ".png",
                lblPrice1: UnitPrice,
                lblProdID1: sku,
                lblSelectedProductID1: ProductID,
                lblFullDesc1: description,
                lblProductMaxQuantity: maxQty,
                lblProductTax: tax,
                lblTaxRate:taxRateForProduct, //Added for 4832
				lblIsPrepaymentPlan:isPrepaymentPlan

            });
            a.push(vMap);
        } else if ((i + 1) % 3 == 2) //Segment 1
        {
            var vMap = mapKeys(viewAddWeighTransactions, {
                lblDesc2: smallDesc,
                img2: getProductImage(sku), //"prod" + sku + ".png",
                lblPrice2: UnitPrice,
                lblProdID2: sku,
                lblSelectedProductID2: ProductID,
                lblFullDesc2: description,
                lblProductMaxQuantity: maxQty,
                lblProductTax: tax,
                lblTaxRate:taxRateForProduct, //Added for 4832
				lblIsPrepaymentPlan:isPrepaymentPlan

            });
            b.push(vMap);
        } else if ((i + 1) % 3 == 0) //Segment 2
        {
            var vMap = mapKeys(viewAddWeighTransactions, {
                lblDesc3: smallDesc,
                img3: getProductImage(sku), //"prod" + sku + ".png",
                lblPrice3: UnitPrice,
                lblProdID3: sku,
                lblSelectedProductID3: ProductID,
                lblFullDesc3: description,
                lblProductMaxQuantity: maxQty,
                lblProductTax: tax,
                lblTaxRate:taxRateForProduct, //Added for 4832
				lblIsPrepaymentPlan:isPrepaymentPlan
            });
            c.push(vMap);
        }
    }
    //Set Data to respective segments
    kony.application.getCurrentForm().segProductDetails.setData(a);
    kony.application.getCurrentForm().segProductDetails1.setData(b);
    kony.application.getCurrentForm().segProductDetails2.setData(c);

    removeProgressView();
}

//This is called when user selects category from popup
function eventonClickDoneImageHeaderCategoryType() {
    var selectedCategories = popupCategoryType.pickerCategories.selectedKeyValues;
    var selectedCategory = selectedCategories[0][1];
    kony.application.getCurrentForm().lblCatType.text = selectedCategory;
    if (selectedCategory.length > 21) {
        kony.application.getCurrentForm().lblCatType.text = kony.application.getCurrentForm().lblCatType.text.substring(0, 21) + "...";
    }

    popupCategoryType.dismiss();
    //Populate ProductList with selected category
    if(selectedCategory == getLocalizedString("strFeatured"))
    	getProductsFromTable(productCategoryEnum[1]);
    else if(selectedCategory == getLocalizedString("strAllProduct"))
    	getProductsFromTable(productCategoryEnum[2]);
    else
    	getProductsFromTable(selectedCategory);
}

//Save the selected Offer
function eventonClickDoneImageHeaderProductOfferType() {
    var offerKeyValues = popupProductOffers.pickerTypes.selectedKeyValues;
    popupItemDetails.lblOffersData.text = offerKeyValues[0][1];
    var offer = offerKeyValues[0][0];

    kony.print("The offer value which comes out as selection is : " + offer);
    var discountval, offerdesc, offerno, discountedprice = "",
        offertax = "";
        offerid = "";
    //Check open promotion
    var openFlag = false;
    kony.print("::eventonClickDoneImageHeaderProductOfferType::ProductSale.promotionProductIDs=" + JSON.stringify(ProductSale.promotionProductIDs));
    var pro = _.find(ProductSale.promotionProductIDs, function(pro) {
        return pro._ProductID == selectedProductID;
    });
    if (checkValidString(pro)) {
        discountval = pro._DiscountValue;
        offerdesc = pro._OfferDesc;
        offerno = pro._OfferNo;
        offerid = pro._OfferID;
        discountedprice = pro._DiscountedProductPrice;
        offertax = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? pro._OfferUnitPriceTax : 0;
    }
    //For service Provide we just have two options  -- so seperate if flag -- in case if any new req comes
    if (offer == "1" && isServiceProvider) {
        discountval = "";
        offerdesc = "Incorrect Price";
        offerno = 1;
    } else if (offer == "1" || offer == "2") { //Selected Incorrect Price or Customer Coupon
        //MEG- 2808 Fix where discount value should not get reset...
        discountval = "";
        if (offer == 1) {
            offerdesc = "Incorrect Price";
            offerno = 1;
        }
        if (offer == 2) {
            offerdesc = "Customer Coupon";
            offerno = 2;
        }
        //popupItemDetails.txtUnitPrice.text = "";
        popupItemDetails.txtUnitPrice.setEnabled(true);
    } else {
        discountval = offer.split("#")[0];
        offerdesc = offer.split("#")[1];
        offerno = offer.split("#")[2];
        discountedprice = offer.split("#")[3];
        offertax = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? offer.split("#")[4] : 0;
        offerid = offer.split("#")[5];
    }
    //ANY Offer is selected except None
    if (offer !== "0") {

        if (offerdesc == "Incorrect Price" || offerdesc == "Customer Coupon") {
            discountedprice = "";
            offertax = "";
        }
        //Save the discount selected
        selectedOfferForProduct = {
            "DiscountValue": discountval,
            "OfferDesc": offerdesc,
            "OfferNo": offerno,
            "OfferID": offerid,
            "DiscountedPrice": discountedprice,
            "OfferTax": offertax
        };
        kony.print("--::DJP::eventonClickDoneImageHeaderProductOfferType selectedOfferForProduct=====" + JSON.stringify(selectedOfferForProduct));
        if (!isServiceProvider && offer != "1" && offer != "2") {
            //If Open Flag - disable price override
            //Except SP dont allow anyone to change Unit Price after selecting offer - Improvement -2342
            //Keep enabled text override on Customer Coupon and Incorrect Price Offer type
            //Restrict Price Change Manually by SP
            popupItemDetails.txtUnitPrice.text = "";
            popupItemDetails.txtUnitPrice.setEnabled(false);
        } else if (openFlag && (offer == "1" && offer == "2")) {
            popupItemDetails.txtUnitPrice.text = "";
            popupItemDetails.txtUnitPrice.setEnabled(true);
        } else if (isServiceProvider) {
            popupItemDetails.txtUnitPrice.text = "";
            popupItemDetails.txtUnitPrice.setEnabled(true);
        }
    } else {
        //NONE IS SELECTED
        selectedOfferForProduct = {};
        popupItemDetails.txtUnitPrice.text = "";
        kony.print("--::DJP::eventonClickDoneImageHeaderProductOfferType selectedOfferForProduct NONE=====" + JSON.stringify(selectedOfferForProduct));
        //When NONE is selected - Check if Oprn Promotion Applies, if yes then disable manual entering of price else allow
        if (openFlag) {
            // Hiding the selectedOfferForProduct due to the Bug filed by Gauri and agreed upon by Rajiv for 22nd Jan,2015 build
            // JIRA ID is MEG-3429. Refer comment in MEG-3429
            popupItemDetails.txtUnitPrice.setEnabled(false);
        } else {
            popupItemDetails.txtUnitPrice.setEnabled(true);
        }
    }
    updateProductDetailSubTotal();
    //Get the discount value-update the cart
    popupProductOffers.dismiss();
}

//it is the product cart
function eventonClicksegSKUData() {
    if(popupItemDetails){
    	//get the selected row index 
	    var selectedRowForCart = kony.application.getCurrentForm().segSKUData.selectedRowIndex;
	    //get the row index to get the selected product data
	    intSelectedRowIndexFromCart = selectedRowForCart[1];
	    objProductData = kony.application.getCurrentForm().segSKUData.data[intSelectedRowIndexFromCart];
	
	    selectedProductID = parseInt(objProductData.hidProductId);
    	popupItemDetails.show();
	    populateOffersforProduct(); //Dont load any offers for Service Provider
	    //fill the product details data dynamically 
	    showProductDetailsData();
    }
    
}

//This gets the product details from the segment.. includes hidden fields
function showProductDetailsData() {
    var objData = objProductData;
    kony.print("objProductData=" + JSON.stringify(objProductData));
    var priceOfProduct = objData.hidOrigPrice;
    if (priceOfProduct != objData.lblPrice) {
        if (isServiceProvider) {
            var origPrrice = parseFloat(removeDollar(priceOfProduct));
            var currPrice = parseFloat(removeDollar(objData.lblPrice));
            kony.print("currPrice=" + currPrice);
            kony.print("origPrrice=" + origPrrice);
            if (currPrice.toFixed(2) != (origPrrice * discountforServiceProvider).toFixed(2)) {
                priceOfProduct = currPrice * (1 / discountforServiceProvider);
                popupItemDetails.txtUnitPrice.text = displayPriceByLocale(priceOfProduct);
            }
        } else {
            priceOfProduct = objData.lblPrice;
            priceOfProduct = removeDollar(priceOfProduct);
            popupItemDetails.txtUnitPrice.text = displayPriceByLocale(priceOfProduct);
        }

    }

    //save selected product ID
    popupItemDetails.productImg.src = objData.lblPrdImgName;
    popupItemDetails.lblDesc1.text = objData.hidFullDesc;
    popupItemDetails.lblProdID1.text = objData.lblProdId;
    popupItemDetails.lblPrice1.text = objData.hidOrigPrice;

    //Check if any promotion applies
    if (!isEmptyObject(objData) && objData.hidOfferDesc != "") {
        selectedOfferForProduct.DiscountValue = objData.hidDiscountValue;
        selectedOfferForProduct.OfferDesc = objData.hidOfferDesc;
        selectedOfferForProduct.OfferNo = objData.hidOfferNo;
        selectedOfferForProduct.OfferID = objData.hidOfferId; // Added for MEG-4857
        selectedOfferForProduct.DiscountedPrice = objData.hidDiscountedPrice;
        selectedOfferForProduct.OfferTax = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? objData.hidOfferTax : 0;
        //If not SP and Selected offer isnt incorrect and customer -- keep the unit overprice enabled else disable
        if (!isServiceProvider && selectedOfferForProduct.OfferDesc != "Incorrect Price" && selectedOfferForProduct.OfferDesc != "Customer Coupon") {
            popupItemDetails.txtUnitPrice.text = "";
            popupItemDetails.txtUnitPrice.setEnabled(false);
        }
    } else {
        popupItemDetails.lblOffersData.text = getLocalizedString("strNone");
    }

    var quantity = objData.lblQuantity;
    quantity = quantity.slice(quantity.indexOf("x") + 2);
    popupItemDetails.txtUnits.text = quantity;
    kony.print("Roshni quantity");
    ///Check if any offer applies
    if (selectedOfferForProduct.OfferDesc != "" && selectedOfferForProduct.OfferDesc != null && selectedOfferForProduct.OfferDesc != undefined) {
        popupItemDetails.lblOffersData.text = selectedOfferForProduct.OfferDesc;
    }

    //update/show the sub total for product detail page 
    updateProductDetailSubTotal();
}

//This is called in Product Detail Popup clicking + icon in quantity
function addProductCounter() {
    var popuptxtUnits = popupItemDetails.txtUnits.text;
    if (checkValidString(popuptxtUnits) && popuptxtUnits != "." && popuptxtUnits != ",") {
        currentCnt = parseInt(popuptxtUnits);
    } else {
        popuptxtUnits = 1;
    }
    popupItemDetails.txtUnits.text = parseInt(currentCnt) + 1;

    //update the sub total for details page
    updateProductDetailSubTotal();
}

//This is called in Product Detail Popup clicking - icon in quantity
function decrementProductCounter() {
    var popuptxtUnits = popupItemDetails.txtUnits.text;
    if (checkValidString(popuptxtUnits) && popuptxtUnits != "." && popuptxtUnits != ",") {
        currentCnt = parseInt(popuptxtUnits);
    }
    if (currentCnt > 1) {
        popupItemDetails.txtUnits.text = currentCnt - 1;
        //update the sub total for details page
        updateProductDetailSubTotal();
    }
}

function updateProductDetailSubTotal() {

    var quantity = popupItemDetails.txtUnits.text;
    if (quantity != "" && quantity != undefined && quantity != null && quantity != "." && quantity != ",") {
        quantity = parseInt(quantity);
    } else {
        quantity = 1;
    }

    var subTotal = 0.0;
    var price = convertPriceToSaveByLocale(popupItemDetails.txtUnitPrice.text);
    if (price == "" || price == undefined || price == null || price.trim() == ".") {
        price = removeDollar(popupItemDetails.lblPrice1.text);
    }

    price = parseFloat(price).toFixed(2);
    //DJP
    kony.print("--::DJP::updateProductDetailSubTotal selectedOfferForProduct =====" + JSON.stringify(selectedOfferForProduct));
    kony.print("--::DJP::updateProductDetailSubTotal price =====" + price);

    if (!isEmptyObject(selectedOfferForProduct) && selectedOfferForProduct.DiscountedPrice != "" && !isServiceProvider) {
        var disc = selectedOfferForProduct.DiscountedPrice;
        subTotal = quantity * (parseFloat(disc)).toFixed(2);
    } else if (isServiceProvider) {
        subTotal = quantity * parseFloat(price * discountforServiceProvider);
    } else {
        subTotal = quantity * parseFloat(price);
    }
    if (subTotal && parseFloat(subTotal) > MaxProductCartAmount) {
        alertForMessages(kony.i18n.getLocalizedString("strlblMaxCartAmtReached"));
        return;
    } else {
        popupItemDetails.lblTotalPrice.text = addDollar(subTotal.toFixed(2));
    }

    kony.print("--::DJP::updateProductDetailSubTotal subTotal =====" + subTotal);
}

function makeCartAsEmpty() {
    var totalRecordsInCart = 0;
    shoppingcart = [];
    ProductSale.Cart.empty();
    kony.application.getCurrentForm().segSKUData.removeAll();
}

function eventOnClickProductSegment(e) {
    var currentProduct, arrData = [];
    switch (e.id) {
        case "segProductDetails":
            currentProduct = kony.application.getCurrentForm().segProductDetails.selectedItems[0];
            arrData['productId'] = currentProduct["lblProdID1"];
            arrData['productDescr'] = currentProduct["lblDesc1"];
            arrData['price'] = currentProduct["lblPrice1"];
            arrData['productImg'] = currentProduct["img1"];
            arrData['selectedProductId'] = currentProduct["lblSelectedProductID1"];
            arrData['hidFullDesc'] = currentProduct["lblFullDesc1"];
            arrData['hidProductTax'] = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? currentProduct["lblProductTax"] : 0;
            arrData['hidMaxQty'] = currentProduct["lblProductMaxQuantity"];
            arrData['hidTaxRate'] = currentProduct["lblTaxRate"]; //Added for 4832
			arrData['hidIsPrepaymentPlan'] = currentProduct["lblIsPrepaymentPlan"];
			kony.print("lblTaxRate : "+currentProduct["lblTaxRate"]);
            break;
        case "segProductDetails1":
            currentProduct = kony.application.getCurrentForm().segProductDetails1.selectedItems[0];
            arrData['productId'] = currentProduct["lblProdID2"];
            arrData['productDescr'] = currentProduct["lblDesc2"];
            arrData['price'] = currentProduct["lblPrice2"];
            arrData['productImg'] = currentProduct["img2"];
            arrData['selectedProductId'] = currentProduct["lblSelectedProductID2"];
            arrData['hidFullDesc'] = currentProduct["lblFullDesc2"];
            arrData['hidProductTax'] = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? currentProduct["lblProductTax"] : 0;
            arrData['hidMaxQty'] = currentProduct["lblProductMaxQuantity"];
            arrData['hidTaxRate'] = currentProduct["lblTaxRate"]; //Added for 4832
			arrData['hidIsPrepaymentPlan'] = currentProduct["lblIsPrepaymentPlan"];
			kony.print("lblTaxRate : "+currentProduct["lblTaxRate"]);
            break;
        case "segProductDetails2":
            currentProduct = kony.application.getCurrentForm().segProductDetails2.selectedItems[0];
            arrData['productId'] = currentProduct["lblProdID3"];
            arrData['productDescr'] = currentProduct["lblDesc3"];
            arrData['price'] = currentProduct["lblPrice3"];
            arrData['productImg'] = currentProduct["img3"];
            arrData['selectedProductId'] = currentProduct["lblSelectedProductID3"];
            arrData['hidFullDesc'] = currentProduct["lblFullDesc3"];
            arrData['hidProductTax'] = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? currentProduct["lblProductTax"] : 0;
            arrData['hidMaxQty'] = currentProduct["lblProductMaxQuantity"];
            arrData['hidTaxRate'] = currentProduct["lblTaxRate"]; //Added for 4832
			arrData['hidIsPrepaymentPlan'] = currentProduct["lblIsPrepaymentPlan"];

			kony.print("lblTaxRate : "+currentProduct["lblTaxRate"]);
            break;
    }
    eventOnClickProductInSegment(arrData);
}


function eventonClickCompleteProcessingMember() {
    frmPayment.show();
}


//PopupItemDetails - Populate offers(if any) in init of Product Details
function populateOffersforProduct() {
    selectedOfferForProduct = {};
    try {
        if (!isServiceProvider) {
            displayProgressView();

            function successOffersResponse(offersResponse) {
                setProductOfferTypesData(offersResponse);
            }
            //get selected product id and get offers for that id from bo
            boAddWeighTransaction.getOffersForProduct(selectedProductID, successOffersResponse)
        } else {
            var temp = [];
            var popupoffersdata = [];
            temp.push([0, getLocalizedString("strNone")]);
            temp.push([1, getLocalizedString("strIncorrectPrice")]);
            temp.push(100);
            popupoffersdata.push(temp);
            popupProductOffers.pickerTypes.masterData = popupoffersdata;
            popupProductOffers.pickerTypes.setSelectedKeyInComponent(getLocalizedString("strNone"), 0);
            var labelTextOffer = popupItemDetails.lblOffersData.text;
            if (labelTextOffer == "" || labelTextOffer == null || labelTextOffer == undefined)
                popupItemDetails.lblOffersData.text = getLocalizedString("strNone");
        }

    } catch (e) {
        GlobalException(e);
    }

}

//This calls on postshow of Offers Popup
function setProductOfferTypesData(offers) {
    var popupoffersdata = [];
    var temp = [];
    temp.push([0, getLocalizedString("strNone")]);
    temp.push([1, getLocalizedString("strIncorrectPrice")]);
    temp.push([2, getLocalizedString("strCustomerCoupon")]);
    //If offers are present
    if (offers && offers != undefined && offers != "" && offers.length > 0) {
        for (var i in offers) {
            var str = offers[i]._DiscountValue + "#" + offers[i]._OfferDesc + "#" + offers[i]._OfferNo + "#" + offers[i]._DiscountedProductPrice + "#" + offers[i]._OfferUnitPriceTax + "#" + offers[i]._OfferID;
            //it was i+1
            temp.push([str, offers[i]._OfferDesc]); // , offers[i]._OfferID
        }
    }
    temp.push(100);
    popupoffersdata.push(temp);
    if(popupItemDetails && popupItemDetails.lblOffersData) {
    	var labelTextOffer = popupItemDetails.lblOffersData.text;
    	if (labelTextOffer == "" || labelTextOffer == null || labelTextOffer == undefined)
        	popupItemDetails.lblOffersData.text = getLocalizedString("strNone");
    }
    
    //Save seleted products offers array in memory
    selectedProductOffersArray = offers;
    popupProductOffers.pickerTypes.masterData = popupoffersdata;
    popupProductOffers.pickerTypes.setSelectedKeyInComponent(getLocalizedString("strNone"), 0);
    removeProgressView();
}

function eventonClickhBoxProductOfferTypeSelection() {
    var context = {
        "widget": popupItemDetails.hboxOffersSection1,
        "anchor": "top",
        "sizetoanchorwidth": false
    };
    popupProductOffers.setContext(context);
    popupProductOffers.show();
}

function onPostShowPopulateBarcodeSKU() {
	kony.print("In onPostShowPopulateBarcodeSKU");
    startBarcodeForSubID();
}

function successCallbackSearchBySKUorUPC(productResponse) {
    kony.print("::successCallbackSearchBySKUorUPC::productResponse=" + JSON.stringify(productResponse));
    if (productResponse.length <= 0) {
        frmDirectSaleProductList.txtSearchProduct.text = "";
        frmAddAndWeighMemberTransaction.txtSearchProduct.text = "";
        var alertConfig = {
            message: kony.i18n.getLocalizedString("strlblproductnotfound"),
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "",
            yesLabel: kony.i18n.getLocalizedString("strLblOk")
        };
        var psConfig = {};
        var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
    } else if (productResponse.length == 1) {
        var tax = productResponse[0]["_UnitPriceTax"];
        if ((glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') && tax != "" && tax != null && tax != undefined) {
            tax = parseFloat(tax).toFixed(2);
        } else {
            tax = 0;
        }

        var arrData = new Array(),
            smallDesc = "";

        arrData['productId'] = productResponse[0]["_sku"];

        smallDesc = productResponse[0]["_description"];
        if (smallDesc.length > 17) {
            smallDesc = smallDesc.substring(0, 14) + "..";
        }
        arrData['productDescr'] = smallDesc;

        arrData['price'] = addDollar(productResponse[0]["_UnitPrice"].toFixed(2));
        arrData['productImg'] = getProductImage(productResponse[0]["_sku"]);// "prod" + productResponse[0]["_sku"] + ".png";
        arrData['hidMaxQty'] = productResponse[0]["_MaxQuantity"];
        arrData['selectedProductId'] = productResponse[0]["_ProductID"].toString();
        arrData['hidFullDesc'] = productResponse[0]["_description"];
        arrData['hidProductTax'] = tax;
        arrData['hidTaxRate'] = productResponse[0]["_TaxRate"]; //Added for 4832
        arrData['hidIsPrepaymentPlan'] = productResponse[0]["_IsPrepaymentPlan"]; //Added for 4832

        eventOnClickProductInSegment(arrData);
    } else {
        BindSegProductData(productResponse);
    }

}

function getBarcodeSKUSuccess(data) {
    if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
        try {

            boAddWeighTransaction.GetBarcodeSKUProduct(data, successCallbackSearchBySKUorUPC);
        } catch (e) {
            GlobalException(e);
        }
    }
}

function GetBarcodeOfferno(OfferNo) {

    try {
        if (!isServiceProvider) {
            function successOffersResponse(offersResponse) {
                setBarcodeProductOffer(offersResponse);
            }
            OfferNo = OfferNo.substr(1);
            //get selected product id and get offers for that id from bo
            boAddWeighTransaction.getBarcodeOfferforproduct(OfferNo, selectedProductID, successOffersResponse)
        }
    } catch (e) {
        GlobalException(e);
    }

}

function setBarcodeProductOffer(offers) {

    if (offers && offers != undefined && offers != "" && offers.length > 0) {
        popupItemDetails.lblOffersData.text = offers[0]._OfferDesc;
        var discountval = offers[0]._DiscountValue;
        var offerdesc = offers[0]._OfferDesc;
        var offerno = offers[0]._OfferNo;
        var offerid = offers[0]._OfferID;
        var discountedprice = offers[0]._DiscountedProductPrice;
        var offertax = offers[0]._OfferUnitPriceTax;

        selectedOfferForProduct = {
            "DiscountValue": discountval,
            "OfferDesc": offerdesc,
            "OfferNo": offerno,
            "DiscountedPrice": discountedprice,
            "OfferTax": offertax,
            "OfferID": offerid
        };
        if (!isServiceProvider) {
            //Restrict Price Change Manually by SP
            popupItemDetails.txtUnitPrice.text = "";
            popupItemDetails.txtUnitPrice.setEnabled(false);
        }
    } else {
        //NONE IS SELECTED
        var alertConfig = {
            message: kony.i18n.getLocalizedString("strlblOfferNotFound"), //strAlertTermed "Would you like to Re-Enroll this termed member?"
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "",
            yesLabel: kony.i18n.getLocalizedString("strLblOk") // "Yes",											
        };
        var psConfig = {};
        var discountval = "";
        var offerdesc = "";
        var offerno = "";
        var discountedprice = "";
        var offertax = "";
        var offerid = "";

        var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
        selectedOfferForProduct = {};
        //When NONE is selected - Check if Oprn Promotion Applies, if yes then disable manual entering of price else allow
        var openFlag = false;
        
        if(ProductSale.isAnyOpenPromotion)
        {
	        ProductSale.promotionProductIDs.filter(function(product) {
	            if (selectedProductID == product._ProductID && !openFlag) {
	                openFlag = true;
	            }
	        });
	        ProductSale.promotionProductIDs.filter(function(product) {
	            if (selectedProductID == product._ProductID && !openFlag) {
	                openFlag = true;
	                discountval = product._DiscountValue;
	                offerdesc = product._OfferDesc;
	                offerno = product._OfferNo;
	                discountedprice = product._DiscountedProductPrice;
	                offertax = product._OfferUnitPriceTax;
	                offerid = product._OfferID;
	                selectedOfferForProduct = {
	                    "DiscountValue": discountval,
	                    "OfferDesc": offerdesc,
	                    "OfferNo": offerno,
	                    "DiscountedPrice": discountedprice,
	                    "OfferTax": offertax,
	                    "OfferID": offerid
	                };
	            }
	        });
		}		
        if (openFlag) {
            popupItemDetails.txtUnitPrice.text = "";
            popupItemDetails.txtUnitPrice.setEnabled(false);
        } else {
            popupItemDetails.txtUnitPrice.text = "";
            popupItemDetails.txtUnitPrice.setEnabled(true);
        }
    }
    updateProductDetailSubTotal();

}


function eventonClickCheckedInProductSale() {
	
	var selectedIndex = frmHomeScreen.segCheckedInMembers.selectedIndex;
    var selectedRow = parseInt(selectedIndex[1]);
    var selectedData = frmHomeScreen.segCheckedInMembers.data[selectedRow];
    selectedMemberData = selectedData; //MEG-5993
    kony.print("::::selectedData::::"+JSON.stringify(selectedData));
    kony.print("::(selectedData['Usertype'] === 1)::"+(selectedData['Usertype'] =="1"));
    if(selectedData['Usertype'] == "1"){ // check if MemberID and EmpID same it will be direct sale for employee 
		kony.print(":::inside the employee sale");
       	redirectToProductFromCheckedInListForSP(selectedData);
    	
    } else {
    
	    IsProductFlowFromSearch = false;
	    IsProductFlowFromCheckedIn = true;
	    hboxEnrollHdrMain.lblHeaderName.text = "";
	    hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strHeaderSellMember");
	    
	    glbRegNo = selectedData["RegNo"];
	    glbRegNoForProcess = selectedData["RegNo"];
	    glbMemberId = checkValidString(selectedData["MemberID"]) ? selectedData["MemberID"] : "1";
	    deviceLevelPreRegNo = checkValidString(selectedData["RegNo"]) ? selectedData["RegNo"] : "1";
	    frmDirectSaleProductList.hboxSubHeader.isVisible = true;
	    frmDirectSaleProductList.vbox12443534672611876.setEnabled(false);
	    frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.isVisible = true;//Modified by Studio Viz
	    frmDirectSaleProductList.vbox198407320743.isVisible = true;
	    frmDirectSaleProductList.vbox12443534672611876.isVisible = false;
	    frmDirectSaleProductList.scrollbox12443534679147550.containerHeight = 43;
	    frmDirectSaleProductList.scrollbox12443534677872493.containerHeight = 73;
	    var fname = selectedData["lblMPSFirstName"].trim();
	    var lname = selectedData["lblMPSLastName"].trim();
	    popupAddEmail.txtEmailAddress.text = selectedData["Email"];
	
	    if (fname.length > 6) {
	        fname = fname.substring(0, 4) + "..";
	    }
	
	    if (lname.length > 6) {
	        lname = lname.substring(0, 4) + "..";
	    }
	    gblSubType = selectedData["SubscriptnType"];
	    kony.print("SUBSCRIPTION TYPE:0>>" + gblSubType);
	    frmDirectSaleProductList.lblExpDate.isVisible = false;
	    if (gblSubType == undefined || gblSubType == "") {
	        gblSubType = " ";
	    }
	    if (gblSubType == "MonthlyPass" || gblSubType == "Monthly Pass") {
	        frmDirectSaleProductList.imgMonthlyPass.src = "icn_monthly_pass_header.png";
	        frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strMPAbbr");//Modified by Studio Viz
	    } else if (gblSubType == "SeventeenWeekPass" || gblSubType == "17 Week Pass") {
	        frmDirectSaleProductList.imgMonthlyPass.src = "icn_17_week_pass_header.png";
	        frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = "17 Week ";//Modified by Studio Viz
	    } else if (gblSubType == MemberSubscriptionTypeEnumBatch["20 Week Pass"]) {
	        frmDirectSaleProductList.imgMonthlyPass.src = "icn_20week_pass_header.png";
	        frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("str20WEEKSAbbr");//Modified by Studio Viz
	    } else if (gblSubType == "PAYG" || gblSubType == "Pay as you go") // OR condition Added by Dileep Chejerla MEG-2697
	    {
	        //Commented By Ami
	
	        /*		frmDirectSaleProductList.imgMonthlyPass.src ="icn_payment_header.png";
	        		frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = "PAYG ";   //Modified by Studio Viz
	        	*/
	
	        //Ami add - START
	        kony.print("eventonClickCheckedInProductSale Memeber Type---" + selectedData["MembershipType"]);
	        if (selectedData["MembershipType"] == "LifeTime" || selectedData["MembershipType"].toUpperCase() == "LIFETIME") {
	            frmDirectSaleProductList.imgLifetime.setVisibility(true);
	            frmDirectSaleProductList.imgLifetime.src = "icn_lifetime_member_header.png";
	            frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strLTAbbr");//Modified by Studio Viz
	            frmDirectSaleProductList.imgMonthlyPass.src = "";
	        } else {
	            frmDirectSaleProductList.imgLifetime.src = "";
	            frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strPAYGAbbr");//Modified by Studio Viz
	            frmDirectSaleProductList.imgMonthlyPass.src = "icn_payment_header.png";
	            frmDirectSaleProductList.imgLifetime.setVisibility(false);
	        }
	        //Ami add- END 
	    } else {
	        frmDirectSaleProductList.imgMonthlyPass.isVisible = false;
	        frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.isVisible = false;//Modified by Studio Viz
	    }
	    ClearTangibleProductsSegments();
	    frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = fname + " " + lname;//Modified by Studio Viz
	    frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = toTitleCase(frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text);//Modified by Studio Viz
	    //frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = selectedData["SubscriptnType"];//Modified by Studio Viz
	    frmDirectSaleProductList.lblProcessMembersubSubHeaderstudio4.text = kony.i18n.getLocalizedString("strLblPayment");//Modified by Studio Viz
	    frmDirectSaleProductList.show();
    }
}


function removeCommaFromUnitPriceTextBox(textBox) {
	if(deviceLocale != "fr_CA"){
		if (popupItemDetails[textBox].text.indexOf(",") != -1) {
	        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
	        popupItemDetails[textBox].text = popupItemDetails[textBox].text.replace(",", "");
	    }
	}else{
		if (popupItemDetails[textBox].text.indexOf(".") != -1) {
	        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
	        popupItemDetails[textBox].text = popupItemDetails[textBox].text.replace(".", "");
	    }
	    if((popupItemDetails[textBox].text.match(/,/g) || []).length > 1) {
	    	popupItemDetails[textBox].text = popupItemDetails[textBox].text.substring(0, popupItemDetails[textBox].text.length - 1);
	    	kony.print("input value"+popupItemDetails[textBox].text);
	    }
	}
}

function removeCommaFromNonTGUnitPriceTextBox(textBox){
	if(deviceLocale != "fr_CA"){
		if(popupNonTengibleoffers[textBox].text.indexOf(",") != -1) {
			alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
			popupNonTengibleoffers[textBox].text = popupNonTengibleoffers[textBox].text.replace(",","");
		}
	}else{
		if (popupNonTengibleoffers[textBox].text.indexOf(".") != -1) {
	        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
	        popupNonTengibleoffers[textBox].text = popupNonTengibleoffers[textBox].text.replace(".", "");
	    }
	    if((popupNonTengibleoffers[textBox].text.match(/,/g) || []).length > 1) {
	    	popupNonTengibleoffers[textBox].text = popupNonTengibleoffers[textBox].text.substring(0, popupNonTengibleoffers[textBox].text.length - 1);
	    }
	}
}

//Added by praveen to open offer region MEG-2737

function evenOnClickOffersRegion() {
    var context = {
        "widget": popupNonTengibleoffers.hboxOffersSection1,
        "anchor": "right",
        "sizetoanchorwidth": false
    };
    popupOfferRegions.setContext(context);
    popupOfferRegions.show();
}

function eventonClickDoneImageHeaderOffersRegion(){
	var offerKeyValues= popupOfferRegions.pickerTypes.selectedKeyValues;
	kony.print("Keys === "+JSON.stringify(offerKeyValues))
	popupNonTengibleoffers.lblOffersData.text = offerKeyValues[0][1];
	//popupNonTengibleoffers.txtUnitPrice.text = removeDollar(frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["lblUnit"]);
	kony.print("lblprice" + unitPrice )
	popupOfferRegions.destroy();
	if(popupNonTengibleoffers.lblOffersData.text == getLocalizedString("strNone")){
		var sku =frmAddAndWeighMemberTransaction.segSKUDataPOC.selectedItems[0]["hidSKU"];
		boEnrollMember.getOriginalUnitPrice(sku,unitPriceCallback); 
		kony.print("The  price without discount  " + unitPrice);
		popupNonTengibleoffers.lblprice.text = addCurrency(unitPrice);
		popupNonTengibleoffers.txtUnitPrice.text = displayPriceByLocale(unitPrice);
		//frmAddAndWeighMemberTransaction.lblTotalProductPrice.text = unitPrice; 
	}
	
}
function  unitPriceCallback(res) {

	var result =res;
	unitPrice = result[0].UnitPrice;
	kony.print("UNIT PRICE ##########"+unitPrice)	;	
}

function eventOnDoneHeaderApplyOffer() {
    try {
    	kony.print("popupNonTengibleoffers.txtUnitPrice.text : "+popupNonTengibleoffers.txtUnitPrice.text);
    	if(popupNonTengibleoffers.txtUnitPrice.text == ""){
    		alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
    	}else{
    		if(popupNonTengibleoffers.txtUnitPrice.text == "."){
    			popupNonTengibleoffers.txtUnitPrice.text ="0.0";
    		}  // added by ankit for MEGCA-358
    		var product = ProductSale.Cart.find(glbSelectedNonTagibleProduct);
	        kony.print("::PRODUCT SALE: NON TAN : Override Product = " + JSON.stringify(product));
	        
	        var offerDesc = popupNonTengibleoffers.lblOffersData.text;
	        kony.print("offerDesc : "+offerDesc);
	        //Added for 4832
	        var isDiscount = false;
	        if(offerDesc != getLocalizedString("strNone"))
	        	isDiscount = (checkValidString(offerDesc)?true:false);
	        else if(product.isDiscount == true)
	        	isDiscount = true;
	        	
	        kony.print("isDiscount : "+isDiscount);
	        var overrideprice = convertPriceToSaveByLocale(popupNonTengibleoffers.txtUnitPrice.text);
	        var isOverride = checkValidString(popupNonTengibleoffers.txtUnitPrice.text) ? true:false;
	        kony.print("overrideprice : "+overrideprice);
	        kony.print("isOverride : "+isOverride);
	        
	        
	        //Added for 4832
	        var tax = parseFloat(overrideprice) * parseFloat(popupNonTengibleoffers.lblTaxRate.text);
	        var updatedTax = tax.toFixed(2);
	        /*if(isDiscount == false)
	        	updatedTax = tax.toFixed(2);*/
	        kony.print("Updated Nontagible Product Tax==="+updatedTax);
	
	        // AD :: Commented - MEG-5211
	        // ProductSale.Cart.update(product, 1, isOverride, overrideprice, isDiscount, 1, 0, (isOverride)?overrideprice:product.price, offerDesc, updatedTax);
			// AD :: Added - MEG-5211
	        if(offerDesc != getLocalizedString("strNone"))
	        	ProductSale.Cart.update(product, 1, isOverride, overrideprice, isDiscount, 1, 0, (isOverride)?overrideprice:product.price, offerDesc, updatedTax);
	        else if(product.isDiscount == true)
	        	ProductSale.Cart.update(product, 1, isOverride, overrideprice, isDiscount, product.offerNo, 0, (isOverride)?overrideprice:product.price, offerDesc, updatedTax, product.offerId);


	        popupNonTengibleoffers.destroy();
    	}

    } catch (e) {
        popupNonTengibleoffers.destroy();
        GlobalException(e);
        // todo: handle exception
    }
}
//End by praveen to open offer region MEG-2737

//MEG-4261 SP Can Search By SKU/UPC
function searchProductBySKUUPC() {
    var searchText;
    if (kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
        searchText = frmAddAndWeighMemberTransaction.txtSearchProduct.text.trim();
    } else if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id) {
        searchText = frmDirectSaleProductList.txtSearchProduct.text.trim();
    }

    if (checkValidString(searchText)) {
        boAddWeighTransaction.GetBarcodeSKUProduct(searchText, successCallbackSearchBySKUorUPC);
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strValidSKUUPC"));
        if (kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
            frmAddAndWeighMemberTransaction.txtSearchProduct.text = "";
        } else if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id) {
            frmDirectSaleProductList.txtSearchProduct.text = "";
        }
    }
}
