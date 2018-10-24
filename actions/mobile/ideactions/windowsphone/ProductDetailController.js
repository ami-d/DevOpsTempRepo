function addProductData() {
    var ProductDetailObject = new com.kony.WeightWatchers.ProductSyncScope.ProductDetail();
    //alert("Entering addProductData")
    function createProductDetailSuccessCallback(res) {
        //callAlert(getMessageTemplate("addSuccess","ProductDatail"),"info")
        kony.print(getMessageTemplate("addSuccess", "ProductDatail"), "info")
    }
    var jsonData = JSON.parse(productDetailData);
    for (var i = 0; i < jsonData.productDetailOb.length; i++) {
        var jsonObj = jsonData.productDetailOb[i];
        //console.log(counter.counter_name);
        ProductDetailObject.ProductID = jsonObj.ProductID;
        ProductDetailObject.Category = jsonObj.Category;
        ProductDetailObject.CategoryNo = jsonObj.CategoryNo;
        ProductDetailObject.IsActive = jsonObj.IsActive;
        ProductDetailObject.IsMonthlyPass = jsonObj.IsMonthlyPass;
        ProductDetailObject.IsNewEnrollment = jsonObj.IsNewEnrollment;
        ProductDetailObject.IsSeventeenWkPs = jsonObj.IsSeventeenWkPs;
        ProductDetailObject.IsSeventeenWPEn = jsonObj.IsSeventeenWPEn;
        ProductDetailObject.IsTaxIncluded = jsonObj.IsTaxIncluded;
        ProductDetailObject.PosProductType = jsonObj.PosProductType;
        ProductDetailObject.UnitPrice = jsonObj.UnitPrice;
        ProductDetailObject.description = jsonObj.description;
        ProductDetailObject.sku = jsonObj.sku;
        ProductDetailObject.UnitPriceTax = jsonObj.UnitPriceTax;
        // Call the com.kony.WeightWatchers.WeightWatchers.ProductSyncScope.ProductDetail.create ORM API
        kony.print("for " + i + "th record");
        ProductDetailObject.create(createProductDetailSuccessCallback, eventErrorCallBack);
    }
}

function getAllProductData() {
    var whrCondition = "";
    if (glbLocationID != "") {
        //whrCondition ="where LocationID = '"+glbLocationID+"' and sku in (select SKU from SKURuleEngine)";
        //To get all the non tangible products with discounted price if autoapplied ie implicit offer is true
        whrCondition = "select p.ProductID, p.Category, p.CategoryNo, p.IsActive, p.IsMonthlyPass, p.IsNewEnrollment, p.IsSeventeenWkPs, p.IsSeventeenWPEn, p.IsTaxIncluded, p.PosProductType, p.UnitPrice, p.UnitPriceTax, p.description, p.sku, p.TaxRate, p.IsPrepaymentPlan, DiscountedProductPrice from productdetail p " + "left join offerdetail o on p.productid = o.productid and o.[AutoApplied] = 'true' and o.LocationID = '" + glbLocationID + "' " + "and o.offerno in ( select offerno from offerdetail od " + "where  p.productid = od.productid and od.AutoApplied = 'true' and od.LocationID = '" + glbLocationID + "' limit 1) " + "where p.LocationID = '" + glbLocationID + "' " + "and p.sku in (select SKU from SKURuleEngine)";
    }
    //alert(whrCondition);
    function getAllProductDataSuccessCallback(res) {
        productSKUData = [];
        kony.print("::DJP::Product Data==" + JSON.stringify(res));
        if (res.length > 0) {
            for (var i in res) {
                kony.print(i + "th record fetching");
                var v = res[i];
                var tempObj = {};
                //If AutoApplied Offer - Take the Discounted Price Instead of Unit Price
                var discount = kony.sync.getString(v.DiscountedProductPrice);
                if (checkValidString(discount)) {
                    tempObj["UnitPrice"] = kony.sync.getString(v.DiscountedProductPrice);
                } else {
                    tempObj["UnitPrice"] = kony.sync.getString(v.UnitPrice);
                }
                tempObj["ProductID"] = kony.sync.getString(v.ProductID);
                tempObj["Category"] = kony.sync.getString(v.Category);
                tempObj["CategoryNo"] = kony.sync.getString(v.CategoryNo);
                tempObj["IsActive"] = kony.sync.getString(v.IsActive);
                tempObj["IsMonthlyPass"] = kony.sync.getString(v.IsMonthlyPass);
                tempObj["IsNewEnrollment"] = kony.sync.getString(v.IsNewEnrollment);
                tempObj["IsSeventeenWkPs"] = kony.sync.getString(v.IsSeventeenWkPs);
                tempObj["IsSeventeenWPEn"] = kony.sync.getString(v.IsSeventeenWPEn);
                tempObj["IsTaxIncluded"] = kony.sync.getString(v.IsTaxIncluded);
                tempObj["PosProductType"] = kony.sync.getString(v.PosProductType);
                //tempObj["UnitPrice"] = kony.sync.getString(v.UnitPrice);
                tempObj["UnitPriceTax"] = kony.sync.getString(v.UnitPriceTax);
                tempObj["description"] = kony.sync.getString(v.description);
                tempObj["sku"] = kony.sync.getString(v.sku);
                //Added for 4832
                if (kony.sync.getString(v.IsTaxIncluded) == "true" || kony.sync.getString(v.IsTaxIncluded) == true) tempObj["TaxRate"] = kony.sync.getString(v.TaxRate);
                else tempObj["TaxRate"] = 0;
                tempObj["IsPrepaymentPlan"] = kony.sync.getString(v.IsPrepaymentPlan);
                productSKUData.push(tempObj);
                //getOfferData(kony.sync.getString(v.ProductID))    
            }
            getOfferData();
            kony.print("::DJP::Product Data productSKUData==" + JSON.stringify(productSKUData));
        }
        //alert("Product Data=="+JSON.stringify(productSKUData));
    }
    //com.kony.WeightWatchers.ProductSyncScope.ProductDetail.find(whrCondition,getAllProductDataSuccessCallback, eventErrorCallBack);
    kony.sync.single_select_execute(kony.sync.getDBName(), whrCondition, null, getAllProductDataSuccessCallback, eventErrorCallBack);
}

function getOfferData() {
    //var whereCondition = "where ProductID= '"+productid+"'";
    var whereCondition = "where LocationID = '" + glbLocationID + "'";

    function getOfferDataSuccessCallback(response) {
        OffersData = [];
        //alert("Offer Data=="+JSON.stringify(response));
        for (var i in response) {
            var tempOffer = {};
            kony.print(i + "th record fetching");
            var v = response[i];
            tempOffer["ProductID"] = kony.sync.getString(v.ProductID);
            tempOffer["AutoApplied"] = kony.sync.getString(v.AutoApplied);
            tempOffer["UnitPrice"] = kony.sync.getString(v.DiscountValue);
            tempOffer["description"] = kony.sync.getString(v.OfferDesc);
            tempOffer["OfferNo"] = kony.sync.getString(v.OfferNo);
            tempOffer["OfferId"] = kony.sync.getString(v.OfferID);
            OffersData.push(tempOffer);
        }
    }
    DBOfferDetailController.find(whereCondition, getOfferDataSuccessCallback, eventErrorCallBack);
}