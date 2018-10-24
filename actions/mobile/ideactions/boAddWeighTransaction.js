var boAddWeighTransaction = {
    getProducts: function(category, callback) {
        var strWhere;
        kony.print("::category = " + category);
        //Remember to add list of sku which should not be displayed. MEG-905 its stored in Global.js
        var ProductSQLQuery = "Select Q.MaxQuantity,P.* from ProductDetail P Left Join ProductMaxQuantity Q on P.sku= Q.ProductSKU and P.CountryID = '" + getCountryID() + "'";
        if (category == productCategoryEnum[2])
            strWhere = " where P.ProductID is not null AND P.Type = 'TangibleProduct' and P.LocationID=" + glbLocationID + excludeSKUList;
        else if (category == productCategoryEnum[1])
            strWhere = " where P.ProductID is not null AND P.Type = 'TangibleProduct' and P.IsFeaturedProduct='true' and P.LocationID=" + glbLocationID + excludeSKUList;
        else
            strWhere = " where P.ProductID is not null AND P.Type = 'TangibleProduct' and P.ProductCategoryDesc='" + category + "' and P.LocationID=" + glbLocationID + excludeSKUList;

        function productsSuccess(response) {
            callback.call(null, response);
        }
        var dbname = kony.sync.getDBName();
        var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();

        function mySuccCallback(res) {
            kony.sync.verifyAndCallClosure(productsSuccess, boAddWeighTransaction.ConvertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
        }
        kony.sync.single_select_execute(dbname, ProductSQLQuery + strWhere, null, mySuccCallback, eventErrorCallBack);
    },

    ConvertTableToObject: function(res) {
        //MaxQty = 0 for those who have not defined value
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject function");
        var objMap1 = [];
        if (res !== null) {
            for (var i in res) {
                var obj = {};
                var maxqty = res[i].MaxQuantity;
                if (maxqty != undefined && maxqty != null && maxqty != "") {
                    obj._MaxQuantity = maxqty;
                } else {
                    obj._MaxQuantity = 0;
                }
                obj._sku = res[i].sku;
                obj._UnitPrice = res[i].UnitPrice;
                obj._description = res[i].description;
                obj._localTime = res[i].localTime;
                obj._ProductID = res[i].ProductID;
                obj._Category = res[i].Category;
                obj._CategoryNo = res[i].CategoryNo;
                obj._IsActive = res[i].IsActive;
                obj._IsMonthlyPass = res[i].IsMonthlyPass;
                obj._IsNewEnrollment = res[i].IsNewEnrollment;
                obj._IsSeventeenWkPs = res[i].IsSeventeenWkPs;
                obj._IsSeventeenWPEn = res[i].IsSeventeenWPEn;
                obj._IsTaxIncluded = res[i].IsTaxIncluded;
                obj._LocationID = res[i].LocationID;
                obj._PosProductType = res[i].PosProductType;
                obj._UnitPriceTax = res[i].UnitPriceTax;
                obj._DeviceID = res[i].DeviceID;
                obj._IsFeaturedProduct = res[i].IsFeaturedProduct;
                obj._ProductCategoryDesc = res[i].ProductCategoryDesc;
                obj._markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
                //Added for 4832 
				if(res[i].IsTaxIncluded == true || res[i].IsTaxIncluded == "true")
					obj._TaxRate = res[i].TaxRate;  
				else
					obj._TaxRate = 0;
				obj._IsPrepaymentPlan = res[i].IsPrepaymentPlan;
                objMap1.push(obj);
            }
        }
        return objMap1;
    },
    getCategories: function(callback) {

        var sql = "select DISTINCT ProductCategoryDesc from ProductDetail where ProductCategoryDesc is not null AND CountryID = '" + getCountryID() + "' AND Type = 'TangibleProduct' and LocationID=" + glbLocationID + excludeSKUList;

        function categorySuccess(response) {
            callback.call(null, response);
        }
        var dbname = kony.sync.getDBName();
        var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();

        function mySuccCallback(res) {
            kony.sync.verifyAndCallClosure(categorySuccess, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
        }
        kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, eventErrorCallBack);
    },

    getOffersForProduct: function(productID, callback) {
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386
        var strWhere = " where ProductID is not null and AutoApplied = 'false' and ProductID =" + productID + " and LocationID = " + glbLocationID +
            " and date('" + today + "') BETWEEN date(StartDate) and date(EndDate)";

        kony.print("getOffersForProduct strWhere=" + strWhere);

        function offersSuccess(response) {
            callback.call(null, response);
        }
        DBOfferDetailController.find(strWhere, offersSuccess, eventErrorCallBack);
    },

    getOpenPromotionProducts: function(callback) {
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386

        var sqlQuery = " where AutoApplied = 'true' and LocationID = " + glbLocationID +
            " and date('" + today + "') BETWEEN date(StartDate) and date(EndDate)";
        kony.print("getOpenPromotionProducts sqlQuery=" + sqlQuery);

        function promotionSuccess(response) {
            kony.print("::Response Promotion:: " + JSON.stringify(response));
            callback.call(null, response);
        }
        DBOfferDetailController.find(sqlQuery, promotionSuccess, eventErrorCallBack);

    },

    getProductsViaWS: function() {
        var GetAllProducts_inputparam = {};
        GetAllProducts_inputparam["serviceID"] = Services.GetAllProducts;
        GetAllProducts_inputparam["locationId"] = glbLocationID;
        GetAllProducts_inputparam["deviceID"] = gblDeviceID;
        GetAllProducts_inputparam["httpheaders"] = {};
        GetAllProducts_inputparam["httpconfigs"] = {};
        GetAllProductsService = Network.makeServiceCall(GetAllProducts_inputparam, boAddWeighTransaction.getAllProductsViaWSCallback, false); //true to allow offline data access
    },

    getAllProductsViaWSCallback: function(status, GetAllProductsService) {
        try {
            var allProductsArray_temp = [];
            if (status == 400) {
                if (GetAllProductsService["opstatus"] == 0) {
                    kony.print("Response===" + JSON.stringify(GetAllProductsService));
                }
            } else if (status == 300) {
                CommonErrHandler.networkError(status, GetLocationbyZip);
            }
        } catch (e) {
            GlobalException(e);
        }
    },
    GetBarcodeSKUProduct: function(searchText, callback) {
		searchText=searchText.toUpperCase();
        var strExtraWherCat = "",
            ProductSQLQuery = "";
        if (glbLocationTypeId == AT_WORK_LOCATION_TYPE_ID || (glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID && IsDirectSale == FlowForScreens.DirectSale)) {
            strExtraWherCat = " AND P.ProductCategoryDesc != 'PREPAYMENT PLAN'";
        }
        var numberPattern = /^[0-9a-zA-Z]*$/;
        if (numberPattern.test(searchText)) {
            //Number Search
            ProductSQLQuery = "Select Q.MaxQuantity,P.* from ProductDetail P Left Join ProductMaxQuantity Q on P.sku= Q.ProductSKU AND CountryID = '" + getCountryID() + "'" +
                " Where (UPPER(P.sku)='" + searchText + "' OR UPPER(P.UPC)='" + searchText + "' OR UPPER(P.description) like '%" + searchText + "%') and P.ProductID is not null AND P.Type = 'TangibleProduct' and P.LocationID=" + glbLocationID + excludeSKUList + strExtraWherCat;
        } else {
            //Name Search
            ProductSQLQuery = "Select Q.MaxQuantity,P.* from ProductDetail P Left Join ProductMaxQuantity Q on P.sku= Q.ProductSKU AND CountryID = '" + getCountryID() + "'" +
                " Where P.description like '%" + searchText + "%' and P.ProductID is not null AND P.Type = 'TangibleProduct'  and P.LocationID=" + glbLocationID + excludeSKUList + strExtraWherCat;
        }

        kony.print("getBarcode product ProductSQLQuery=" + ProductSQLQuery);

        function productsSuccess(response) {

            callback.call(null, response);
        }
        var dbname = kony.sync.getDBName();

        function mySuccCallback(res) {
            kony.sync.verifyAndCallClosure(productsSuccess, boAddWeighTransaction.ConvertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
        }

        kony.sync.single_select_execute(dbname, ProductSQLQuery, null, mySuccCallback, eventErrorCallBack);


    },
    getBarcodeOfferforproduct: function(OfferNo, productID, callback) {
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386

        var strWhere = " where ProductID is not null and AutoApplied = 'false' and ProductID =" + productID + " and OfferNo = " + OfferNo + " and LocationID = " + glbLocationID +
            " and date('" + today + "') BETWEEN date(StartDate) and date(EndDate)";
        kony.print("getBarcodeOfferforproduct strWhere=" + strWhere);

        function offersSuccess(response) {
            callback.call(null, response);
        }
        DBOfferDetailController.find(strWhere, offersSuccess, eventErrorCallBack);
    }
};
