//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:15 UTC 2018SaleItems*******************
// **********************************Start SaleItems's helper methods************************
if (typeof(kony) === "undefined") {
    kony = {};
}
if (typeof(kony.sync) === "undefined") {
    kony.sync = {};
}
if (typeof(kony.sync.log) === "undefined") {
    kony.sync.log = {};
}
if (typeof(sync) === "undefined") {
    sync = {};
}
if (typeof(sync.log) === "undefined") {
    sync.log = {};
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.kony) === "undefined") {
    com.kony = {};
}
if (typeof(com.kony.WeightWatchers) === "undefined") {
    com.kony.WeightWatchers = {};
}
if (typeof(com.kony.WeightWatchers.MemberSyncScope) === "undefined") {
    com.kony.WeightWatchers.MemberSyncScope = {};
}
/************************************************************************************
 * Creates new SaleItems
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems = function() {
    this.ProductID = null;
    this.AdjustTotal = null;
    this.CalcTotal = null;
    this.CouponCode = null;
    this.IsUpload = null;
    this.IsSaleItemVoid = null;
    this.MissWeekPassNo = null;
    this.OfrCouponCode = null;
    this.OfferId = null;
    this.PrepaidCoupNo = null;
    this.ProductSku = null;
    this.Quantity = null;
    this.OriginalQuantity = null;
    this.ReasonCode = null;
    this.UnitPrice = null;
    this.UnitPriceTax = null;
    this.SaleTransactnId = null;
    this.Id = null;
    this.LastUpdated = null;
    this.ProductType = null;
    this.IsReturnItem = null;
    this.ReturnQuantity = null;
    this.ClientSaleItemId = null;
    this.Locale = null;
    this.CountryID = null;
    this.IsFailedMPVoucher = null;
    this.ReasonId = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype = {
    get ProductID() {
        return this._ProductID;
    },
    set ProductID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ProductID in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ProductID = val;
    },
    get AdjustTotal() {
        return this._AdjustTotal;
    },
    set AdjustTotal(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute AdjustTotal in SaleItems.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._AdjustTotal = val;
    },
    get CalcTotal() {
        return this._CalcTotal;
    },
    set CalcTotal(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute CalcTotal in SaleItems.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._CalcTotal = val;
    },
    get CouponCode() {
        return this._CouponCode;
    },
    set CouponCode(val) {
        this._CouponCode = val;
    },
    get IsUpload() {
        return kony.sync.getBoolean(this._IsUpload) + "";
    },
    set IsUpload(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsUpload in SaleItems.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsUpload = val;
    },
    get IsSaleItemVoid() {
        return kony.sync.getBoolean(this._IsSaleItemVoid) + "";
    },
    set IsSaleItemVoid(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsSaleItemVoid in SaleItems.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsSaleItemVoid = val;
    },
    get MissWeekPassNo() {
        return this._MissWeekPassNo;
    },
    set MissWeekPassNo(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MissWeekPassNo in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MissWeekPassNo = val;
    },
    get OfrCouponCode() {
        return this._OfrCouponCode;
    },
    set OfrCouponCode(val) {
        this._OfrCouponCode = val;
    },
    get OfferId() {
        return this._OfferId;
    },
    set OfferId(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute OfferId in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._OfferId = val;
    },
    get PrepaidCoupNo() {
        return this._PrepaidCoupNo;
    },
    set PrepaidCoupNo(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute PrepaidCoupNo in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PrepaidCoupNo = val;
    },
    get ProductSku() {
        return this._ProductSku;
    },
    set ProductSku(val) {
        this._ProductSku = val;
    },
    get Quantity() {
        return this._Quantity;
    },
    set Quantity(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute Quantity in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._Quantity = val;
    },
    get OriginalQuantity() {
        return this._OriginalQuantity;
    },
    set OriginalQuantity(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute OriginalQuantity in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._OriginalQuantity = val;
    },
    get ReasonCode() {
        return this._ReasonCode;
    },
    set ReasonCode(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ReasonCode in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ReasonCode = val;
    },
    get UnitPrice() {
        return this._UnitPrice;
    },
    set UnitPrice(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute UnitPrice in SaleItems.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._UnitPrice = val;
    },
    get UnitPriceTax() {
        return this._UnitPriceTax;
    },
    set UnitPriceTax(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute UnitPriceTax in SaleItems.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._UnitPriceTax = val;
    },
    get SaleTransactnId() {
        return this._SaleTransactnId;
    },
    set SaleTransactnId(val) {
        this._SaleTransactnId = val;
    },
    get Id() {
        return this._Id;
    },
    set Id(val) {
        this._Id = val;
    },
    get LastUpdated() {
        return this._LastUpdated;
    },
    set LastUpdated(val) {
        this._LastUpdated = val;
    },
    get ProductType() {
        return this._ProductType;
    },
    set ProductType(val) {
        this._ProductType = val;
    },
    get IsReturnItem() {
        return kony.sync.getBoolean(this._IsReturnItem) + "";
    },
    set IsReturnItem(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsReturnItem in SaleItems.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsReturnItem = val;
    },
    get ReturnQuantity() {
        return this._ReturnQuantity;
    },
    set ReturnQuantity(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ReturnQuantity in SaleItems.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ReturnQuantity = val;
    },
    get ClientSaleItemId() {
        return this._ClientSaleItemId;
    },
    set ClientSaleItemId(val) {
        this._ClientSaleItemId = val;
    },
    get Locale() {
        return this._Locale;
    },
    set Locale(val) {
        this._Locale = val;
    },
    get CountryID() {
        return this._CountryID;
    },
    set CountryID(val) {
        this._CountryID = val;
    },
    get IsFailedMPVoucher() {
        return this._IsFailedMPVoucher;
    },
    set IsFailedMPVoucher(val) {
        this._IsFailedMPVoucher = val;
    },
    get ReasonId() {
        return this._ReasonId;
    },
    set ReasonId(val) {
        this._ReasonId = val;
    },
};
/************************************************************************************
 * Retrieves all instances of SaleItems SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "ProductID";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "AdjustTotal";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    orderByMap = kony.sync.formOrderByClause("SaleItems", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of SaleItems present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllCount function");
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of SaleItems using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getCount->successcallback");
        if (null !== res) {
            var count = null;
            count = res["count(*)"];
            kony.sync.verifyAndCallClosure(successcallback, {
                count: count
            });
        } else {
            sync.log.error("Some error occured while getting the count");
        }
    }
};
/************************************************************************************
 * Creates a new instance of SaleItems in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "SaleItems", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "ClientSaleItemId=" + valuestable.ClientSaleItemId;
        pks["ClientSaleItemId"] = {
            key: "ClientSaleItemId",
            value: valuestable.ClientSaleItemId
        };
        com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of SaleItems in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].ProductID = 0;
 *		valuesArray[0].AdjustTotal = 0;
 *		valuesArray[0].CalcTotal = 0;
 *		valuesArray[0].CouponCode = "CouponCode_0";
 *		valuesArray[0].IsUpload = true;
 *		valuesArray[0].IsSaleItemVoid = true;
 *		valuesArray[0].MissWeekPassNo = 0;
 *		valuesArray[0].OfrCouponCode = "OfrCouponCode_0";
 *		valuesArray[0].OfferId = 0;
 *		valuesArray[0].PrepaidCoupNo = 0;
 *		valuesArray[0].ProductSku = "ProductSku_0";
 *		valuesArray[0].Quantity = 0;
 *		valuesArray[0].OriginalQuantity = 0;
 *		valuesArray[0].ReasonCode = 0;
 *		valuesArray[0].UnitPrice = 0;
 *		valuesArray[0].UnitPriceTax = 0;
 *		valuesArray[0].SaleTransactnId = "SaleTransactnId_0";
 *		valuesArray[0].Id = "Id_0";
 *		valuesArray[0].ProductType = "ProductType_0";
 *		valuesArray[0].IsReturnItem = true;
 *		valuesArray[0].ReturnQuantity = 0;
 *		valuesArray[0].ClientSaleItemId = "ClientSaleItemId_0";
 *		valuesArray[0].Locale = "Locale_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[0].IsFailedMPVoucher = "IsFailedMPVoucher_0";
 *		valuesArray[0].ReasonId = "ReasonId_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].ProductID = 1;
 *		valuesArray[1].AdjustTotal = 1;
 *		valuesArray[1].CalcTotal = 1;
 *		valuesArray[1].CouponCode = "CouponCode_1";
 *		valuesArray[1].IsUpload = true;
 *		valuesArray[1].IsSaleItemVoid = true;
 *		valuesArray[1].MissWeekPassNo = 1;
 *		valuesArray[1].OfrCouponCode = "OfrCouponCode_1";
 *		valuesArray[1].OfferId = 1;
 *		valuesArray[1].PrepaidCoupNo = 1;
 *		valuesArray[1].ProductSku = "ProductSku_1";
 *		valuesArray[1].Quantity = 1;
 *		valuesArray[1].OriginalQuantity = 1;
 *		valuesArray[1].ReasonCode = 1;
 *		valuesArray[1].UnitPrice = 1;
 *		valuesArray[1].UnitPriceTax = 1;
 *		valuesArray[1].SaleTransactnId = "SaleTransactnId_1";
 *		valuesArray[1].Id = "Id_1";
 *		valuesArray[1].ProductType = "ProductType_1";
 *		valuesArray[1].IsReturnItem = true;
 *		valuesArray[1].ReturnQuantity = 1;
 *		valuesArray[1].ClientSaleItemId = "ClientSaleItemId_1";
 *		valuesArray[1].Locale = "Locale_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[1].IsFailedMPVoucher = "IsFailedMPVoucher_1";
 *		valuesArray[1].ReasonId = "ReasonId_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].ProductID = 2;
 *		valuesArray[2].AdjustTotal = 2;
 *		valuesArray[2].CalcTotal = 2;
 *		valuesArray[2].CouponCode = "CouponCode_2";
 *		valuesArray[2].IsUpload = true;
 *		valuesArray[2].IsSaleItemVoid = true;
 *		valuesArray[2].MissWeekPassNo = 2;
 *		valuesArray[2].OfrCouponCode = "OfrCouponCode_2";
 *		valuesArray[2].OfferId = 2;
 *		valuesArray[2].PrepaidCoupNo = 2;
 *		valuesArray[2].ProductSku = "ProductSku_2";
 *		valuesArray[2].Quantity = 2;
 *		valuesArray[2].OriginalQuantity = 2;
 *		valuesArray[2].ReasonCode = 2;
 *		valuesArray[2].UnitPrice = 2;
 *		valuesArray[2].UnitPriceTax = 2;
 *		valuesArray[2].SaleTransactnId = "SaleTransactnId_2";
 *		valuesArray[2].Id = "Id_2";
 *		valuesArray[2].ProductType = "ProductType_2";
 *		valuesArray[2].IsReturnItem = true;
 *		valuesArray[2].ReturnQuantity = 2;
 *		valuesArray[2].ClientSaleItemId = "ClientSaleItemId_2";
 *		valuesArray[2].Locale = "Locale_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		valuesArray[2].IsFailedMPVoucher = "IsFailedMPVoucher_2";
 *		valuesArray[2].ReasonId = "ReasonId_2";
 *		com.kony.WeightWatchers.MemberSyncScope.SaleItems.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var isProperData = true;
    var arrayLen = 0;
    var errorInfo = [];
    var arrayLength = valuesArray.length;
    var errObject = null;
    var isReferentialIntegrityFailure = false;
    var errMsg = null;
    if (kony.sync.enableORMValidations) {
        var newValuesArray = [];
        //column level validations
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var valuestable = valuesArray[i];
            if (kony.sync.attributeValidation(valuestable, "SaleItems", errorcallback, true) === false) {
                return;
            }
            newValuesArray[i] = valuestable;
        }
        valuesArray = newValuesArray;
        var isDuplicateKey = false;
        //checking for duplicate records
        var connection = kony.sync.getConnectionOnly(dbname, dbname);
        kony.sync.startTransaction(connection, checkDuplicatePkCallback, transactionSuccessCallback, transactionErrorCallback);
        var isError = false;

        function checkDuplicatePkCallback(tx) {
            arrayLength = valuesArray.length;
            for (var i = 0; valuesArray != null && i < arrayLength; i++) {
                var valuestable = valuesArray[i];
                var pks = [];
                errMsg = "ClientSaleItemId=" + valuestable.ClientSaleItemId;
                pks["ClientSaleItemId"] = {
                    key: "ClientSaleItemId",
                    value: valuestable.ClientSaleItemId
                };
                var wcs = [];
                if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "searching") === false) {
                    isError = true;
                    return;
                }
                var query = kony.sync.qb_createQuery();
                kony.sync.qb_select(query, null);
                kony.sync.qb_from(query, tbname);
                kony.sync.qb_where(query, wcs);
                var query_compile = kony.sync.qb_compile(query);
                var sql = query_compile[0];
                var params = query_compile[1];
                var resultset = kony.sync.executeSql(tx, sql, params);
                if (resultset === false) {
                    isError = true;
                    return;
                }
                if (resultset.rows.length != 0) {
                    isError = true;
                    errMsg = "[" + errMsg + "]";
                    isDuplicateKey = true;
                    return;
                }
            }
            if (!isError) {
                checkIntegrity(tx);
            }
        }
    } else {
        //copying by value
        var newValuesArray = [];
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
        }
        valuesArray = newValuesArray;
        kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
    }

    function transactionErrorCallback() {
        if (isError == true) {
            //Statement error has occurred
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
        } else {
            //Transaction error has occurred
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
        }
    }

    function transactionSuccessCallback() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.createAll->transactionSuccessCallback");
        if (!isError) {
            kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
        } else {
            if (isReferentialIntegrityFailure) {
                kony.sync.verifyAndCallClosure(errorcallback, errObject);
            }
            if (isDuplicateKey) {
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
            }
        }
    }
    //foreign key constraints validations
    function checkIntegrity(tx) {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getRelationshipMap(relationshipMap, valuesArray[i]);
            errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
            if (errObject === false) {
                isError = true;
                return;
            }
            if (errObject !== true) {
                isError = true;
                isReferentialIntegrityFailure = true;
                return;
            }
        }
    }
};
/************************************************************************************
 * Updates SaleItems using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "SaleItems", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates SaleItems(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "SaleItems", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPKTable());
    }
};
/************************************************************************************
 * Updates SaleItems(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.ProductID = 0;
 *		inputArray[0].changeSet.AdjustTotal = 0;
 *		inputArray[0].changeSet.CalcTotal = 0;
 *		inputArray[0].changeSet.CouponCode = "CouponCode_updated0";
 *		inputArray[0].whereClause = "where ClientSaleItemId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.ProductID = 1;
 *		inputArray[1].changeSet.AdjustTotal = 1;
 *		inputArray[1].changeSet.CalcTotal = 1;
 *		inputArray[1].changeSet.CouponCode = "CouponCode_updated1";
 *		inputArray[1].whereClause = "where ClientSaleItemId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.ProductID = 2;
 *		inputArray[2].changeSet.AdjustTotal = 2;
 *		inputArray[2].changeSet.CalcTotal = 2;
 *		inputArray[2].changeSet.CouponCode = "CouponCode_updated2";
 *		inputArray[2].whereClause = "where ClientSaleItemId = '2'";
 *		com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "MEGNARetail";
        var tbname = "SaleItems";
        var isError = false;
        var errObject = null;
        if (markForUpload == false || markForUpload == "false") {
            markForUpload = "false"
        } else {
            markForUpload = "true"
        }
        if ((kony.sync.enableORMValidations)) {
            var newInputArray = [];
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var v = inputArray[i];
                var valuestable = v.changeSet;
                var isEmpty = true;
                for (var key in valuestable) {
                    isEmpty = false;
                    break;
                }
                if (isEmpty) {
                    errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeNullValue, kony.sync.getErrorMessage(kony.sync.errorCodeNullValue)));
                    return;
                }
                var wcs = v.whereClause;
                var twcs = wcs;
                if (kony.sync.attributeValidation(valuestable, "SaleItems", errorcallback, false) === false) {
                    return;
                }
                newInputArray[i] = [];
                newInputArray[i].changeSet = valuestable;
                newInputArray[i].whereClause = wcs;
            }
            inputArray = newInputArray;
            var connection = kony.sync.getConnectionOnly(dbname, dbname);
            kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
        } else {
            //copying by value
            var newInputArray = [];
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var v = inputArray[i];
                newInputArray[i] = kony.sync.CreateCopy(v);
            }
            inputArray = newInputArray;
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPKTable());
            }
        }

        function transactionErrorCallback() {
            if (errObject === false) {
                //Sql statement error has occcurred
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
                kony.sync.errorObject = null;
            } else if (errObject !== null) {
                // Referential integrity error has occurred
                kony.sync.verifyAndCallClosure(errorcallback, errObject);
            } else {
                //Transaction error has occurred
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
            }
        }
        //foreign key constraints validations
        function checkIntegrity(tx) {
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
                sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
                errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
                if (errObject === false) {
                    isError = true;
                    return;
                }
                if (errObject !== true) {
                    isError = true;
                    kony.sync.rollbackTransaction(tx);
                    return;
                }
            }
        }
    }
    /************************************************************************************
     * Deletes SaleItems using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function SaleItemsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK->SaleItems_PKPresent successcallback");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (null !== record) {} else {
            pkNotFound = true;
        }
        var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
        if (deletedRows === false) {
            isError = true;
        }
    }

    function SaleItemsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function SaleItemsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK->relationship success callback");
        if (pkNotFound === true) {
            kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
            return;
        }
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, {
                rowsdeleted: 1
            });
        }
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, SaleItemsTransactionCallback, SaleItemsSuccessCallback, SaleItemsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes SaleItems(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove("where CouponCode like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function SaleItems_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function SaleItems_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove->SaleItems_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, SaleItems_removeTransactioncallback, SaleItems_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes SaleItems using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function SaleItemsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK -> SaleItemsTransactionCallback");
        var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (null !== record && false != record) {
            deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
            if (deletedRows === false) {
                isError = true;
            }
        } else {
            pkNotFound = true;
        }
    }

    function SaleItemsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK -> SaleItemsErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function SaleItemsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK -> SaleItemsSuccessCallback");
        if (pkNotFound === true) {
            kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
            return;
        }
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, {
                rowsdeleted: 1
            });
        }
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, SaleItemsTransactionCallback, SaleItemsSuccessCallback, SaleItemsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes SaleItems(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function SaleItems_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function SaleItems_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove->SaleItems_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, SaleItems_removeTransactioncallback, SaleItems_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves SaleItems using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "searching") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, wcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves SaleItems(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.MemberSyncScope.SaleItems.find("where CouponCode like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of SaleItems with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
        return;
    }

    function markRecordForUpload(tx, record) {
        var versionMapMain = [];
        versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname);
        kony.sync.qb_set(query, versionMapMain);
        kony.sync.qb_where(query, wcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        return kony.sync.executeSql(tx, sql, params);
    }

    function markRecordForUploadHistory(tx, record) {
        var versionMap = [];
        versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        var twcs = [];
        twcs = wcs;
        kony.table.insert(twcs, {
            key: kony.sync.historyTableChangeTypeColumn,
            value: record[kony.sync.historyTableChangeTypeColumn],
            optype: "EQ",
            comptype: "AND"
        });
        versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
        kony.sync.qb_set(query, versionMap);
        kony.sync.qb_where(query, twcs);
        kony.table.remove(twcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        return kony.sync.executeSql(tx, sql, params);
    }

    function single_transaction_callback(tx) {
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
        kony.sync.qb_from(query, tbname);
        kony.sync.qb_where(query, wcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        var resultSet = kony.sync.executeSql(tx, sql, params);
        if (resultSet === false) {
            isError = true;
            return;
        }
        var num_records = resultSet.rows.length;
        if (num_records > 0) {
            recordsFound = true;
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, 0);
            var changeType = record[kony.sync.mainTableChangeTypeColumn];
            if (!kony.sync.isNullOrUndefined(changeType) && kony.string.startsWith("" + changeType, "9")) {
                recordsMarkedForUpload = 1;
                if (markRecordForUpload(tx, record) === false) {
                    isError = true;
                    return;
                }
            }
        }
        var query1 = kony.sync.qb_createQuery();
        kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
        kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
        kony.sync.qb_where(query1, wcs);
        var query1_compile = kony.sync.qb_compile(query1);
        var sql1 = query1_compile[0];
        var params1 = query1_compile[1];
        var resultSet1 = kony.sync.executeSql(tx, sql1, params1);
        if (resultSet1 !== false) {
            var num_records = resultSet1.rows.length;
            for (var i = 0; i <= num_records - 1; i++) {
                var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
                if (markRecordForUploadHistory(tx, record) === false) {
                    isError = true;
                    return;
                }
                recordsFound = true;
            }
        } else {
            isError = true;
        }
    }

    function single_transaction_success_callback() {
        if (recordsFound === true) {
            kony.sync.verifyAndCallClosure(successcallback, {
                count: recordsMarkedForUpload
            });
        } else {
            kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
        }
    }

    function single_transaction_error_callback(res) {
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }
    var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (connection != null) {
        kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
    }
};
/************************************************************************************
 * Marks instance(s) of SaleItems matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var isError = false;
    var num_records_main = 0;
    wcs = kony.sync.validateWhereClause(wcs);
    if (!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
        wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
    } else {
        wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
    }

    function markRecordForUpload(tx, record) {
        var versionMapMain = [];
        versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname);
        kony.sync.qb_set(query, versionMapMain);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0] + " " + wcs;
        var params = query_compile[1];
        if (kony.sync.executeSql(tx, sql, params) === false) {
            return false;
        }
    }

    function markRecordForUploadHistory(tx, record) {
        var versionMap = [];
        versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        var twcs = "";
        twcs = wcs;
        twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
        versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
        kony.sync.qb_set(query, versionMap);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0] + " " + twcs;
        var params = query_compile[1];
        if (kony.sync.executeSql(tx, sql, params) === false) {
            return false;
        }
    }

    function single_transaction_callback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUpload->single_transaction_callback");
        //updating main table
        var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from \"" + tbname + "\" " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            isError = true;
            return;
        }
        num_records_main = resultSet.rows.length;
        for (var i = 0; i < num_records_main; i++) {
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
            if (markRecordForUpload(tx, record) === false) {
                isError = true;
                return;
            }
        }
        //updating history table
        var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            isError = true;
            return;
        }
        var num_records = resultSet.rows.length;
        for (var i = 0; i <= num_records - 1; i++) {
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
            if (markRecordForUploadHistory(tx, record) === false) {
                isError = true;
                return;
            }
        }
    }

    function single_transaction_success_callback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.markForUpload->single_transaction_error_callback");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }
    var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (connection != null) {
        kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
    }
};
/************************************************************************************
 * Retrieves instance(s) of SaleItems pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from \"" + tbname + "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of SaleItems pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of SaleItems deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from \"" + tbname + "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to SaleItems in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to SaleItems's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether SaleItems's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
        return;
    }
    var twcs = [];
    twcs = kony.sync.CreateCopy(wcs);
    kony.table.insert(twcs, {
        key: kony.sync.mainTableChangeTypeColumn,
        value: "9%",
        optype: "LIKE",
        comptype: "AND"
    });
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, twcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];
    kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordDeferredForUpload->successcallback function");
        if (res.length === 1) {
            flag = true;
        } else {
            flag = false;
        }
        kony.sync.verifyAndCallClosure(successcallback, {
            deferred: flag
        });
    }
};
/************************************************************************************
 * isRecordPendingForUpload returns true or false depending on whether SaleItems's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
        return;
    }
    var twcs = [];
    twcs = kony.sync.CreateCopy(wcs);
    kony.table.insert(twcs, {
        key: kony.sync.mainTableChangeTypeColumn,
        value: "9%",
        optype: "NOT LIKE",
        comptype: "AND"
    });
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, twcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];
    kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.isRecordPendingForUpload->successcallback function");
        if (res.length === 1) {
            flag = true;
        } else {
            flag = false;
        }
        kony.sync.verifyAndCallClosure(successcallback, {
            pending: flag
        });
    }
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeCascade function");
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {}
    if (isCascade) {
        if (removeCascadeChildren() === false) {
            return false;
        }
        if (kony.sync.deleteBatch(tx, tbname, wcs, isLocal, markForUpload, null) === false) {
            return false;
        }
        return true;
    } else {
        var sql = "select * from \"" + tbname + "\" " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            return false;
        }
        var num_records = resultSet.rows.length;
        if (num_records === 0) {
            return true;
        } else {
            sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname, tbname, tbname, parentTable));
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity, kony.sync.getReferetialIntegrityDeleteErrMessg(tbname, tbname, tbname, parentTable)));
            return false;
        }
    }
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.MemberSyncScope.SaleItems();
            obj.ProductID = res[i].ProductID;
            obj.AdjustTotal = res[i].AdjustTotal;
            obj.CalcTotal = res[i].CalcTotal;
            obj.CouponCode = res[i].CouponCode;
            obj.IsUpload = res[i].IsUpload;
            obj.IsSaleItemVoid = res[i].IsSaleItemVoid;
            obj.MissWeekPassNo = res[i].MissWeekPassNo;
            obj.OfrCouponCode = res[i].OfrCouponCode;
            obj.OfferId = res[i].OfferId;
            obj.PrepaidCoupNo = res[i].PrepaidCoupNo;
            obj.ProductSku = res[i].ProductSku;
            obj.Quantity = res[i].Quantity;
            obj.OriginalQuantity = res[i].OriginalQuantity;
            obj.ReasonCode = res[i].ReasonCode;
            obj.UnitPrice = res[i].UnitPrice;
            obj.UnitPriceTax = res[i].UnitPriceTax;
            obj.SaleTransactnId = res[i].SaleTransactnId;
            obj.Id = res[i].Id;
            obj.LastUpdated = res[i].LastUpdated;
            obj.ProductType = res[i].ProductType;
            obj.IsReturnItem = res[i].IsReturnItem;
            obj.ReturnQuantity = res[i].ReturnQuantity;
            obj.ClientSaleItemId = res[i].ClientSaleItemId;
            obj.Locale = res[i].Locale;
            obj.CountryID = res[i].CountryID;
            obj.IsFailedMPVoucher = res[i].IsFailedMPVoucher;
            obj.ReasonId = res[i].ReasonId;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.filterAttributes function");
    var attributeTable = {};
    attributeTable.ProductID = "ProductID";
    attributeTable.AdjustTotal = "AdjustTotal";
    attributeTable.CalcTotal = "CalcTotal";
    attributeTable.CouponCode = "CouponCode";
    attributeTable.IsUpload = "IsUpload";
    attributeTable.IsSaleItemVoid = "IsSaleItemVoid";
    attributeTable.MissWeekPassNo = "MissWeekPassNo";
    attributeTable.OfrCouponCode = "OfrCouponCode";
    attributeTable.OfferId = "OfferId";
    attributeTable.PrepaidCoupNo = "PrepaidCoupNo";
    attributeTable.ProductSku = "ProductSku";
    attributeTable.Quantity = "Quantity";
    attributeTable.OriginalQuantity = "OriginalQuantity";
    attributeTable.ReasonCode = "ReasonCode";
    attributeTable.UnitPrice = "UnitPrice";
    attributeTable.UnitPriceTax = "UnitPriceTax";
    attributeTable.SaleTransactnId = "SaleTransactnId";
    attributeTable.Id = "Id";
    attributeTable.ProductType = "ProductType";
    attributeTable.IsReturnItem = "IsReturnItem";
    attributeTable.ReturnQuantity = "ReturnQuantity";
    attributeTable.ClientSaleItemId = "ClientSaleItemId";
    attributeTable.Locale = "Locale";
    attributeTable.CountryID = "CountryID";
    attributeTable.IsFailedMPVoucher = "IsFailedMPVoucher";
    attributeTable.ReasonId = "ReasonId";
    var PKTable = {};
    PKTable.ClientSaleItemId = {}
    PKTable.ClientSaleItemId.name = "ClientSaleItemId";
    PKTable.ClientSaleItemId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SaleItems. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SaleItems. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SaleItems. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.SaleItems.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.ProductID = this.ProductID;
    valuesTable.AdjustTotal = this.AdjustTotal;
    valuesTable.CalcTotal = this.CalcTotal;
    valuesTable.CouponCode = this.CouponCode;
    valuesTable.IsUpload = this.IsUpload;
    valuesTable.IsSaleItemVoid = this.IsSaleItemVoid;
    valuesTable.MissWeekPassNo = this.MissWeekPassNo;
    valuesTable.OfrCouponCode = this.OfrCouponCode;
    valuesTable.OfferId = this.OfferId;
    valuesTable.PrepaidCoupNo = this.PrepaidCoupNo;
    valuesTable.ProductSku = this.ProductSku;
    valuesTable.Quantity = this.Quantity;
    valuesTable.OriginalQuantity = this.OriginalQuantity;
    valuesTable.ReasonCode = this.ReasonCode;
    valuesTable.UnitPrice = this.UnitPrice;
    valuesTable.UnitPriceTax = this.UnitPriceTax;
    valuesTable.SaleTransactnId = this.SaleTransactnId;
    valuesTable.Id = this.Id;
    valuesTable.ProductType = this.ProductType;
    valuesTable.IsReturnItem = this.IsReturnItem;
    valuesTable.ReturnQuantity = this.ReturnQuantity;
    if (isInsert === true) {
        valuesTable.ClientSaleItemId = this.ClientSaleItemId;
    }
    valuesTable.Locale = this.Locale;
    valuesTable.CountryID = this.CountryID;
    valuesTable.IsFailedMPVoucher = this.IsFailedMPVoucher;
    valuesTable.ReasonId = this.ReasonId;
    return valuesTable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.prototype.getPKTable function");
    var pkTable = {};
    pkTable.ClientSaleItemId = {
        key: "ClientSaleItemId",
        value: this.ClientSaleItemId
    };
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getPKTable function");
    var pkTable = [];
    pkTable.push("ClientSaleItemId");
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key ClientSaleItemId not specified in  " + opName + "  an item in SaleItems");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ClientSaleItemId", opName, "SaleItems")));
        return false;
    } else if (kony.sync.isValidJSTable(pks)) {
        if (!kony.sync.isNull(pks.ClientSaleItemId)) {
            if (!kony.sync.isNull(pks.ClientSaleItemId.value)) {
                wc.key = "ClientSaleItemId";
                wc.value = pks.ClientSaleItemId.value;
            } else {
                wc.key = "ClientSaleItemId";
                wc.value = pks.ClientSaleItemId;
            }
        } else {
            sync.log.error("Primary Key ClientSaleItemId not specified in  " + opName + "  an item in SaleItems");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ClientSaleItemId", opName, "SaleItems")));
            return false;
        }
    } else {
        wc.key = "ClientSaleItemId";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.validateNull function");
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.validateNullInsert function");
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleItems.getRelationshipMap function");
    var r1 = {};
    r1 = {};
    r1.sourceAttribute = [];
    r1.foreignKeyAttribute = [];
    r1.targetAttributeValue = [];
    if (!kony.sync.isNullOrUndefined(valuestable.SaleTransactnId)) {
        r1.sourceAttribute.push("SaleTransactnId");
        r1.foreignKeyAttribute.push("SaleTransactnId");
        r1.targetAttributeValue.push("'" + valuestable.SaleTransactnId + "'");
    }
    if (r1.targetAttributeValue.length > 0) {
        if (relationshipMap.SaleDetails === undefined) {
            relationshipMap.SaleDetails = [];
        }
        relationshipMap.SaleDetails.push(r1);
    }
    return relationshipMap;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.MemberSyncScope.SaleItems.getTableName = function() {
    return "SaleItems";
};
// **********************************End SaleItems's helper methods************************