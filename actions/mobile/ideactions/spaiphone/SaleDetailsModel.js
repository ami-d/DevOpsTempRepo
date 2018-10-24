//****************Sync Version:Sync-GA-6.0.3_v201505141956_r3*******************
// ****************Generated On Thu May 18 12:35:28 IST 2017SaleDetails*******************
// **********************************Start SaleDetails's helper methods************************
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
 * Creates new SaleDetails
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails = function() {
    this.EmpID = null;
    this.IsReturn = null;
    this.IsSaleVoid = null;
    this.LocationID = null;
    this.MeetingDate = null;
    this.MeetingOccurID = null;
    this.SaleDate = null;
    this.TotalSalePrice = null;
    this.TotalSalePriceNew = null;
    this.TotalSaleTax = null;
    this.LastUpdated = null;
    this.SaleTransactnId = null;
    this.Response = null;
    this.RegNumber = null;
    this.MemberID = null;
    this.IsServiceProvider = null;
    this.IsReturnTransaction = null;
    this.isVoidAllowed = null;
    this.TransactionType = null;
    this.Locale = null;
    this.CountryID = null;
    this.IsEmployeeSale = null;
    this.EmployeeNumber = null;
    this.IsPreActivated = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype = {
    get EmpID() {
        return this._EmpID;
    },
    set EmpID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute EmpID in SaleDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._EmpID = val;
    },
    get IsReturn() {
        return kony.sync.getBoolean(this._IsReturn);
    },
    set IsReturn(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsReturn in SaleDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsReturn = val;
    },
    get IsSaleVoid() {
        return kony.sync.getBoolean(this._IsSaleVoid);
    },
    set IsSaleVoid(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsSaleVoid in SaleDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsSaleVoid = val;
    },
    get LocationID() {
        return this._LocationID;
    },
    set LocationID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute LocationID in SaleDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._LocationID = val;
    },
    get MeetingDate() {
        return this._MeetingDate;
    },
    set MeetingDate(val) {
        this._MeetingDate = val;
    },
    get MeetingOccurID() {
        return this._MeetingOccurID;
    },
    set MeetingOccurID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MeetingOccurID in SaleDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MeetingOccurID = val;
    },
    get SaleDate() {
        return this._SaleDate;
    },
    set SaleDate(val) {
        this._SaleDate = val;
    },
    get TotalSalePrice() {
        return this._TotalSalePrice;
    },
    set TotalSalePrice(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute TotalSalePrice in SaleDetails.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._TotalSalePrice = val;
    },
    get TotalSalePriceNew() {
        return this._TotalSalePriceNew;
    },
    set TotalSalePriceNew(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute TotalSalePriceNew in SaleDetails.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._TotalSalePriceNew = val;
    },
    get TotalSaleTax() {
        return this._TotalSaleTax;
    },
    set TotalSaleTax(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute TotalSaleTax in SaleDetails.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._TotalSaleTax = val;
    },
    get LastUpdated() {
        return this._LastUpdated;
    },
    set LastUpdated(val) {
        this._LastUpdated = val;
    },
    get SaleTransactnId() {
        return this._SaleTransactnId;
    },
    set SaleTransactnId(val) {
        this._SaleTransactnId = val;
    },
    get Response() {
        return this._Response;
    },
    set Response(val) {
        this._Response = val;
    },
    get RegNumber() {
        return this._RegNumber;
    },
    set RegNumber(val) {
        this._RegNumber = val;
    },
    get MemberID() {
        return this._MemberID;
    },
    set MemberID(val) {
        this._MemberID = val;
    },
    get IsServiceProvider() {
        return kony.sync.getBoolean(this._IsServiceProvider);
    },
    set IsServiceProvider(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsServiceProvider in SaleDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsServiceProvider = val;
    },
    get IsReturnTransaction() {
        return kony.sync.getBoolean(this._IsReturnTransaction);
    },
    set IsReturnTransaction(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsReturnTransaction in SaleDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsReturnTransaction = val;
    },
    get isVoidAllowed() {
        return kony.sync.getBoolean(this._isVoidAllowed);
    },
    set isVoidAllowed(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute isVoidAllowed in SaleDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._isVoidAllowed = val;
    },
    get TransactionType() {
        return this._TransactionType;
    },
    set TransactionType(val) {
        this._TransactionType = val;
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
    get IsEmployeeSale() {
        return kony.sync.getBoolean(this._IsEmployeeSale);
    },
    set IsEmployeeSale(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsEmployeeSale in SaleDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsEmployeeSale = val;
    },
    get EmployeeNumber() {
        return this._EmployeeNumber;
    },
    set EmployeeNumber(val) {
        this._EmployeeNumber = val;
    },
    get IsPreActivated() {
        return kony.sync.getBoolean(this._IsPreActivated);
    },
    set IsPreActivated(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsPreActivated in SaleDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsPreActivated = val;
    },
};
/************************************************************************************
 * Retrieves all instances of SaleDetails SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "EmpID";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "IsReturn";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    orderByMap = kony.sync.formOrderByClause("SaleDetails", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of SaleDetails present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllCount function");
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of SaleDetails using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCount->successcallback");
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
 * Creates a new instance of SaleDetails in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "SaleDetails", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "SaleTransactnId=" + valuestable.SaleTransactnId;
        pks["SaleTransactnId"] = {
            key: "SaleTransactnId",
            value: valuestable.SaleTransactnId
        };
        errMsg = errMsg + ", MemberID=" + valuestable.MemberID;
        pks["MemberID"] = {
            key: "MemberID",
            value: valuestable.MemberID
        };
        errMsg = errMsg + ", TransactionType=" + valuestable.TransactionType;
        pks["TransactionType"] = {
            key: "TransactionType",
            value: valuestable.TransactionType
        };
        errMsg = errMsg + ", CountryID=" + valuestable.CountryID;
        pks["CountryID"] = {
            key: "CountryID",
            value: valuestable.CountryID
        };
        com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of SaleDetails in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].EmpID = 0;
 *		valuesArray[0].IsReturn = true;
 *		valuesArray[0].IsSaleVoid = true;
 *		valuesArray[0].LocationID = 0;
 *		valuesArray[0].MeetingDate = 0;
 *		valuesArray[0].MeetingOccurID = 0;
 *		valuesArray[0].SaleDate = 0;
 *		valuesArray[0].TotalSalePrice = 0;
 *		valuesArray[0].TotalSalePriceNew = 0;
 *		valuesArray[0].TotalSaleTax = 0;
 *		valuesArray[0].SaleTransactnId = "SaleTransactnId_0";
 *		valuesArray[0].Response = "Response_0";
 *		valuesArray[0].RegNumber = "RegNumber_0";
 *		valuesArray[0].MemberID = "MemberID_0";
 *		valuesArray[0].IsServiceProvider = true;
 *		valuesArray[0].IsReturnTransaction = true;
 *		valuesArray[0].isVoidAllowed = true;
 *		valuesArray[0].TransactionType = "TransactionType_0";
 *		valuesArray[0].Locale = "Locale_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[0].IsEmployeeSale = true;
 *		valuesArray[0].EmployeeNumber = "EmployeeNumber_0";
 *		valuesArray[0].IsPreActivated = true;
 *		valuesArray[1] = {};
 *		valuesArray[1].EmpID = 1;
 *		valuesArray[1].IsReturn = true;
 *		valuesArray[1].IsSaleVoid = true;
 *		valuesArray[1].LocationID = 1;
 *		valuesArray[1].MeetingDate = 1;
 *		valuesArray[1].MeetingOccurID = 1;
 *		valuesArray[1].SaleDate = 1;
 *		valuesArray[1].TotalSalePrice = 1;
 *		valuesArray[1].TotalSalePriceNew = 1;
 *		valuesArray[1].TotalSaleTax = 1;
 *		valuesArray[1].SaleTransactnId = "SaleTransactnId_1";
 *		valuesArray[1].Response = "Response_1";
 *		valuesArray[1].RegNumber = "RegNumber_1";
 *		valuesArray[1].MemberID = "MemberID_1";
 *		valuesArray[1].IsServiceProvider = true;
 *		valuesArray[1].IsReturnTransaction = true;
 *		valuesArray[1].isVoidAllowed = true;
 *		valuesArray[1].TransactionType = "TransactionType_1";
 *		valuesArray[1].Locale = "Locale_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[1].IsEmployeeSale = true;
 *		valuesArray[1].EmployeeNumber = "EmployeeNumber_1";
 *		valuesArray[1].IsPreActivated = true;
 *		valuesArray[2] = {};
 *		valuesArray[2].EmpID = 2;
 *		valuesArray[2].IsReturn = true;
 *		valuesArray[2].IsSaleVoid = true;
 *		valuesArray[2].LocationID = 2;
 *		valuesArray[2].MeetingDate = 2;
 *		valuesArray[2].MeetingOccurID = 2;
 *		valuesArray[2].SaleDate = 2;
 *		valuesArray[2].TotalSalePrice = 2;
 *		valuesArray[2].TotalSalePriceNew = 2;
 *		valuesArray[2].TotalSaleTax = 2;
 *		valuesArray[2].SaleTransactnId = "SaleTransactnId_2";
 *		valuesArray[2].Response = "Response_2";
 *		valuesArray[2].RegNumber = "RegNumber_2";
 *		valuesArray[2].MemberID = "MemberID_2";
 *		valuesArray[2].IsServiceProvider = true;
 *		valuesArray[2].IsReturnTransaction = true;
 *		valuesArray[2].isVoidAllowed = true;
 *		valuesArray[2].TransactionType = "TransactionType_2";
 *		valuesArray[2].Locale = "Locale_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		valuesArray[2].IsEmployeeSale = true;
 *		valuesArray[2].EmployeeNumber = "EmployeeNumber_2";
 *		valuesArray[2].IsPreActivated = true;
 *		com.kony.WeightWatchers.MemberSyncScope.SaleDetails.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "SaleDetails", errorcallback, true) === false) {
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
                errMsg = "SaleTransactnId=" + valuestable.SaleTransactnId;
                pks["SaleTransactnId"] = {
                    key: "SaleTransactnId",
                    value: valuestable.SaleTransactnId
                };
                errMsg = errMsg + ", MemberID=" + valuestable.MemberID;
                pks["MemberID"] = {
                    key: "MemberID",
                    value: valuestable.MemberID
                };
                errMsg = errMsg + ", TransactionType=" + valuestable.TransactionType;
                pks["TransactionType"] = {
                    key: "TransactionType",
                    value: valuestable.TransactionType
                };
                errMsg = errMsg + ", CountryID=" + valuestable.CountryID;
                pks["CountryID"] = {
                    key: "CountryID",
                    value: valuestable.CountryID
                };
                var wcs = [];
                if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates SaleDetails using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "SaleDetails", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates SaleDetails(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "SaleDetails", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPKTable());
    }
};
/************************************************************************************
 * Updates SaleDetails(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.EmpID = 0;
 *		inputArray[0].changeSet.IsReturn = true;
 *		inputArray[0].changeSet.IsSaleVoid = true;
 *		inputArray[0].changeSet.LocationID = 0;
 *		inputArray[0].whereClause = "where SaleTransactnId = '0'";
 *		inputArray[0].whereClause = "where MemberID = '0'";
 *		inputArray[0].whereClause = "where TransactionType = '0'";
 *		inputArray[0].whereClause = "where CountryID = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.EmpID = 1;
 *		inputArray[1].changeSet.IsReturn = true;
 *		inputArray[1].changeSet.IsSaleVoid = true;
 *		inputArray[1].changeSet.LocationID = 1;
 *		inputArray[1].whereClause = "where SaleTransactnId = '1'";
 *		inputArray[1].whereClause = "where MemberID = '1'";
 *		inputArray[1].whereClause = "where TransactionType = '1'";
 *		inputArray[1].whereClause = "where CountryID = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.EmpID = 2;
 *		inputArray[2].changeSet.IsReturn = true;
 *		inputArray[2].changeSet.IsSaleVoid = true;
 *		inputArray[2].changeSet.LocationID = 2;
 *		inputArray[2].whereClause = "where SaleTransactnId = '2'";
 *		inputArray[2].whereClause = "where MemberID = '2'";
 *		inputArray[2].whereClause = "where TransactionType = '2'";
 *		inputArray[2].whereClause = "where CountryID = '2'";
 *		com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "MEGDevelopment";
        var tbname = "SaleDetails";
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
                if (kony.sync.attributeValidation(valuestable, "SaleDetails", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes SaleDetails using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function SaleDetailsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK->SaleDetails_PKPresent successcallback");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (null !== record) {
            if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, "", com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeCascade, "SaleItems", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, "", com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeCascade, "SalePayments", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
        var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
        if (deletedRows === false) {
            isError = true;
        }
    }

    function SaleDetailsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function SaleDetailsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, SaleDetailsTransactionCallback, SaleDetailsSuccessCallback, SaleDetailsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes SaleDetails(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove("where MeetingDate like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function SaleDetails_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeCascade, "SaleItems", false, errorcallback, markForUpload, null, false)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeCascade, "SalePayments", false, errorcallback, markForUpload, null, false)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function SaleDetails_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove->SaleDetails_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, SaleDetails_removeTransactioncallback, SaleDetails_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes SaleDetails using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function SaleDetailsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK -> SaleDetailsTransactionCallback");
        var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (null !== record && false != record) {
            deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
            if (deletedRows === false) {
                isError = true;
            }
            if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, "", com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeCascade, "SaleItems", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, "", com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeCascade, "SalePayments", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
    }

    function SaleDetailsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK -> SaleDetailsErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function SaleDetailsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK -> SaleDetailsSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, SaleDetailsTransactionCallback, SaleDetailsSuccessCallback, SaleDetailsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes SaleDetails(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function SaleDetails_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeCascade, "SaleItems", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeCascade, "SalePayments", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function SaleDetails_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove->SaleDetails_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, SaleDetails_removeTransactioncallback, SaleDetails_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves SaleDetails using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves SaleDetails(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.MemberSyncScope.SaleDetails.find("where MeetingDate like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of SaleDetails with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of SaleDetails matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of SaleDetails pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of SaleDetails pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of SaleDetails deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to SaleDetails in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to SaleDetails's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether SaleDetails's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether SaleDetails's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.isRecordPendingForUpload->successcallback function");
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
 * Retrieves instances of SaleItems related to SaleDetails
 * with given SaleTransactnId from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getSaleItemsWithSaleTransactnId = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getSaleItemsWithSaleTransactnId function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSaleItemsWithSaleTransactnId(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSaleItemsWithSaleTransactnId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSaleItemsWithSaleTransactnId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSaleItemsWithSaleTransactnId", "relationship", errorcallback)) {
        return;
    }

    function SaleDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var targetKey = res[0].SaleTransactnId;
            var wcs = "";
            if (kony.type(targetKey) === "string") {
                wcs = "where SaleTransactnId = '" + targetKey + "'";
            } else {
                wcs = "where SaleTransactnId = " + targetKey;
            }
            com.kony.WeightWatchers.MemberSyncScope.SaleItems.find(wcs, mySuccesscallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
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
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK(pks, SaleDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of SaleItems related to SaleDetails
 * with given SaleTransactnId from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getCountOfSaleItemsWithSaleTransactnId = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getCountOfSaleItemsWithSaleTransactnId function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSaleItemsWithSaleTransactnId(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSaleItemsWithSaleTransactnId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSaleItemsWithSaleTransactnId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSaleItemsWithSaleTransactnId", "relationship", errorcallback)) {
        return;
    }

    function SaleDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var targetKey = res[0].SaleTransactnId;
            var wcs = "";
            if (kony.type(targetKey) === "string") {
                wcs = "where SaleTransactnId = '" + targetKey + "'";
            } else {
                wcs = "where SaleTransactnId = " + targetKey;
            }
            com.kony.WeightWatchers.MemberSyncScope.SaleItems.getCount(wcs, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK(pks, SaleDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of SalePayments related to SaleDetails
 * with given SaleTransactnId from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getSalePaymentsWithSaleTransactnId = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getSalePaymentsWithSaleTransactnId function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSalePaymentsWithSaleTransactnId(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSalePaymentsWithSaleTransactnId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSalePaymentsWithSaleTransactnId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getSalePaymentsWithSaleTransactnId", "relationship", errorcallback)) {
        return;
    }

    function SaleDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var targetKey = res[0].SaleTransactnId;
            var wcs = "";
            if (kony.type(targetKey) === "string") {
                wcs = "where SaleTransactnId = '" + targetKey + "'";
            } else {
                wcs = "where SaleTransactnId = " + targetKey;
            }
            com.kony.WeightWatchers.MemberSyncScope.SalePayments.find(wcs, mySuccesscallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.SalePayments();
                obj.Amount = res[i].Amount;
                obj.PaymentDate = res[i].PaymentDate;
                obj.Type = res[i].Type;
                obj.SaleTransactnId = res[i].SaleTransactnId;
                obj.LastUpdated = res[i].LastUpdated;
                obj.ID = res[i].ID;
                obj.RefundAmount = res[i].RefundAmount;
                obj.IsRefundAmount = res[i].IsRefundAmount;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                obj.AuthorizationCode = res[i].AuthorizationCode;
                obj.CCLastFourDigits = res[i].CCLastFourDigits;
                obj.CardType = res[i].CardType;
                obj.ExpirationDate = res[i].ExpirationDate;
                obj.HasToken = res[i].HasToken;
                obj.InvoiceNumber = res[i].InvoiceNumber;
                obj.ReferenceNumber = res[i].ReferenceNumber;
                obj.RequestId = res[i].RequestId;
                obj.Token = res[i].Token;
                obj.TokenExpirationDate = res[i].TokenExpirationDate;
                obj.TransactionStatus = res[i].TransactionStatus;
                obj.TransactionType = res[i].TransactionType;
                obj.IsTrack = res[i].IsTrack;
                obj.CardSignature = res[i].CardSignature;
                obj.IsIngenicoPayment = res[i].IsIngenicoPayment;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK(pks, SaleDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of SalePayments related to SaleDetails
 * with given SaleTransactnId from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getCountOfSalePaymentsWithSaleTransactnId = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getCountOfSalePaymentsWithSaleTransactnId function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSalePaymentsWithSaleTransactnId(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSalePaymentsWithSaleTransactnId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSalePaymentsWithSaleTransactnId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCountOfSalePaymentsWithSaleTransactnId", "relationship", errorcallback)) {
        return;
    }

    function SaleDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var targetKey = res[0].SaleTransactnId;
            var wcs = "";
            if (kony.type(targetKey) === "string") {
                wcs = "where SaleTransactnId = '" + targetKey + "'";
            } else {
                wcs = "where SaleTransactnId = " + targetKey;
            }
            com.kony.WeightWatchers.MemberSyncScope.SalePayments.getCount(wcs, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllDetailsByPK(pks, SaleDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeCascade function");
    var tbname = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {
        if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeCascade, "SaleItems", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        if (!kony.sync.removeCascadeHelper(tx, "SaleTransactnId", "SaleTransactnId", tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeCascade, "SalePayments", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
    }
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
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.MemberSyncScope.SaleDetails();
            obj.EmpID = res[i].EmpID;
            obj.IsReturn = res[i].IsReturn;
            obj.IsSaleVoid = res[i].IsSaleVoid;
            obj.LocationID = res[i].LocationID;
            obj.MeetingDate = res[i].MeetingDate;
            obj.MeetingOccurID = res[i].MeetingOccurID;
            obj.SaleDate = res[i].SaleDate;
            obj.TotalSalePrice = res[i].TotalSalePrice;
            obj.TotalSalePriceNew = res[i].TotalSalePriceNew;
            obj.TotalSaleTax = res[i].TotalSaleTax;
            obj.LastUpdated = res[i].LastUpdated;
            obj.SaleTransactnId = res[i].SaleTransactnId;
            obj.Response = res[i].Response;
            obj.RegNumber = res[i].RegNumber;
            obj.MemberID = res[i].MemberID;
            obj.IsServiceProvider = res[i].IsServiceProvider;
            obj.IsReturnTransaction = res[i].IsReturnTransaction;
            obj.isVoidAllowed = res[i].isVoidAllowed;
            obj.TransactionType = res[i].TransactionType;
            obj.Locale = res[i].Locale;
            obj.CountryID = res[i].CountryID;
            obj.IsEmployeeSale = res[i].IsEmployeeSale;
            obj.EmployeeNumber = res[i].EmployeeNumber;
            obj.IsPreActivated = res[i].IsPreActivated;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.filterAttributes function");
    var attributeTable = {};
    attributeTable.EmpID = "EmpID";
    attributeTable.IsReturn = "IsReturn";
    attributeTable.IsSaleVoid = "IsSaleVoid";
    attributeTable.LocationID = "LocationID";
    attributeTable.MeetingDate = "MeetingDate";
    attributeTable.MeetingOccurID = "MeetingOccurID";
    attributeTable.SaleDate = "SaleDate";
    attributeTable.TotalSalePrice = "TotalSalePrice";
    attributeTable.TotalSalePriceNew = "TotalSalePriceNew";
    attributeTable.TotalSaleTax = "TotalSaleTax";
    attributeTable.SaleTransactnId = "SaleTransactnId";
    attributeTable.Response = "Response";
    attributeTable.RegNumber = "RegNumber";
    attributeTable.MemberID = "MemberID";
    attributeTable.IsServiceProvider = "IsServiceProvider";
    attributeTable.IsReturnTransaction = "IsReturnTransaction";
    attributeTable.isVoidAllowed = "isVoidAllowed";
    attributeTable.TransactionType = "TransactionType";
    attributeTable.Locale = "Locale";
    attributeTable.CountryID = "CountryID";
    attributeTable.IsEmployeeSale = "IsEmployeeSale";
    attributeTable.EmployeeNumber = "EmployeeNumber";
    attributeTable.IsPreActivated = "IsPreActivated";
    var PKTable = {};
    PKTable.SaleTransactnId = {}
    PKTable.SaleTransactnId.name = "SaleTransactnId";
    PKTable.SaleTransactnId.isAutoGen = false;
    PKTable.MemberID = {}
    PKTable.MemberID.name = "MemberID";
    PKTable.MemberID.isAutoGen = false;
    PKTable.TransactionType = {}
    PKTable.TransactionType.name = "TransactionType";
    PKTable.TransactionType.isAutoGen = false;
    PKTable.CountryID = {}
    PKTable.CountryID.name = "CountryID";
    PKTable.CountryID.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SaleDetails. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SaleDetails. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SaleDetails. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.SaleDetails.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.EmpID = this.EmpID;
    valuesTable.IsReturn = this.IsReturn;
    valuesTable.IsSaleVoid = this.IsSaleVoid;
    valuesTable.LocationID = this.LocationID;
    valuesTable.MeetingDate = this.MeetingDate;
    valuesTable.MeetingOccurID = this.MeetingOccurID;
    valuesTable.SaleDate = this.SaleDate;
    valuesTable.TotalSalePrice = this.TotalSalePrice;
    valuesTable.TotalSalePriceNew = this.TotalSalePriceNew;
    valuesTable.TotalSaleTax = this.TotalSaleTax;
    if (isInsert === true) {
        valuesTable.SaleTransactnId = this.SaleTransactnId;
    }
    valuesTable.Response = this.Response;
    valuesTable.RegNumber = this.RegNumber;
    if (isInsert === true) {
        valuesTable.MemberID = this.MemberID;
    }
    valuesTable.IsServiceProvider = this.IsServiceProvider;
    valuesTable.IsReturnTransaction = this.IsReturnTransaction;
    valuesTable.isVoidAllowed = this.isVoidAllowed;
    if (isInsert === true) {
        valuesTable.TransactionType = this.TransactionType;
    }
    valuesTable.Locale = this.Locale;
    if (isInsert === true) {
        valuesTable.CountryID = this.CountryID;
    }
    valuesTable.IsEmployeeSale = this.IsEmployeeSale;
    valuesTable.EmployeeNumber = this.EmployeeNumber;
    valuesTable.IsPreActivated = this.IsPreActivated;
    return valuesTable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.prototype.getPKTable function");
    var pkTable = {};
    pkTable.SaleTransactnId = {
        key: "SaleTransactnId",
        value: this.SaleTransactnId
    };
    pkTable.MemberID = {
        key: "MemberID",
        value: this.MemberID
    };
    pkTable.TransactionType = {
        key: "TransactionType",
        value: this.TransactionType
    };
    pkTable.CountryID = {
        key: "CountryID",
        value: this.CountryID
    };
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getPKTable function");
    var pkTable = [];
    pkTable.push("SaleTransactnId");
    pkTable.push("MemberID");
    pkTable.push("TransactionType");
    pkTable.push("CountryID");
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.pkCheck function");
    var wc = [];
    if (!kony.sync.isNull(pks.SaleTransactnId)) {
        if (!kony.sync.isNull(pks.SaleTransactnId.value)) {
            wc.key = "SaleTransactnId";
            wc.value = pks.SaleTransactnId.value;
        } else {
            wc.key = "SaleTransactnId";
            wc.value = pks.SaleTransactnId;
        }
    } else {
        sync.log.error("Primary Key SaleTransactnId not specified in " + opName + " an item in SaleDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("SaleTransactnId", opName, "SaleDetails")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.MemberID)) {
        if (!kony.sync.isNull(pks.MemberID.value)) {
            wc.key = "MemberID";
            wc.value = pks.MemberID.value;
        } else {
            wc.key = "MemberID";
            wc.value = pks.MemberID;
        }
    } else {
        sync.log.error("Primary Key MemberID not specified in " + opName + " an item in SaleDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("MemberID", opName, "SaleDetails")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.TransactionType)) {
        if (!kony.sync.isNull(pks.TransactionType.value)) {
            wc.key = "TransactionType";
            wc.value = pks.TransactionType.value;
        } else {
            wc.key = "TransactionType";
            wc.value = pks.TransactionType;
        }
    } else {
        sync.log.error("Primary Key TransactionType not specified in " + opName + " an item in SaleDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("TransactionType", opName, "SaleDetails")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.CountryID)) {
        if (!kony.sync.isNull(pks.CountryID.value)) {
            wc.key = "CountryID";
            wc.value = pks.CountryID.value;
        } else {
            wc.key = "CountryID";
            wc.value = pks.CountryID;
        }
    } else {
        sync.log.error("Primary Key CountryID not specified in " + opName + " an item in SaleDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("CountryID", opName, "SaleDetails")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.validateNull function");
    if (valuestable.IsEmployeeSale !== undefined) {
        if (kony.sync.isNull(valuestable.IsEmployeeSale) || kony.sync.isEmptyString(valuestable.IsEmployeeSale)) {
            sync.log.error("Mandatory attribute IsEmployeeSale is missing for the SyncObject SaleDetails.");
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SaleDetails", "IsEmployeeSale")));
            return false;
        }
    }
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.validateNullInsert function");
    if (kony.sync.isNull(valuestable.SaleTransactnId) || kony.sync.isEmptyString(valuestable.SaleTransactnId)) {
        sync.log.error("Mandatory attribute SaleTransactnId is missing for the SyncObject SaleDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SaleDetails", "SaleTransactnId")));
        return false;
    }
    if (kony.sync.isNull(valuestable.MemberID) || kony.sync.isEmptyString(valuestable.MemberID)) {
        sync.log.error("Mandatory attribute MemberID is missing for the SyncObject SaleDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SaleDetails", "MemberID")));
        return false;
    }
    if (kony.sync.isNull(valuestable.TransactionType) || kony.sync.isEmptyString(valuestable.TransactionType)) {
        sync.log.error("Mandatory attribute TransactionType is missing for the SyncObject SaleDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SaleDetails", "TransactionType")));
        return false;
    }
    if (kony.sync.isNull(valuestable.CountryID) || kony.sync.isEmptyString(valuestable.CountryID)) {
        sync.log.error("Mandatory attribute CountryID is missing for the SyncObject SaleDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SaleDetails", "CountryID")));
        return false;
    }
    if (kony.sync.isNull(valuestable.IsEmployeeSale) || kony.sync.isEmptyString(valuestable.IsEmployeeSale)) {
        sync.log.error("Mandatory attribute IsEmployeeSale is missing for the SyncObject SaleDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SaleDetails", "IsEmployeeSale")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getRelationshipMap function");
    var r1 = {};
    if (!kony.sync.isNull(valuestable.MemberID)) {
        if (relationshipMap.MemberDetails === undefined) {
            relationshipMap.MemberDetails = [];
        }
        r1 = {};
        r1.sourceAttribute = "MemberID";
        r1.foreignKeyAttribute = "MemberID";
        //relationshipMap.MemberDetails.targetAttributeValue = "'" + valuestable.MemberID + "'";
        r1.targetAttributeValue = "'" + valuestable.MemberID + "'";
        relationshipMap.MemberDetails.push(r1);
    }
    return relationshipMap;
};
com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getTableName = function() {
    return "SaleDetails";
};
// **********************************End SaleDetails's helper methods************************