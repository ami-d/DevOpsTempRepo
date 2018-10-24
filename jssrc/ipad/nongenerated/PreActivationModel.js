//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:15 UTC 2018PreActivation*******************
// **********************************Start PreActivation's helper methods************************
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
 * Creates new PreActivation
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation = function() {
    this.MemberID = null;
    this.SaleTransactnId = null;
    this.MtngOccrID = null;
    this.LocationID = null;
    this.Locale = null;
    this.CountryID = null;
    this.PreactivationDate = null;
    this.ActivationDate = null;
    this.lastUpdateTime = null;
    this.MeetingDate = null;
    this.ActivationStatus = null;
    this.CouponCode = null;
    this.ExpirationDate = null;
    this.PassType = null;
    this.PassDuration = null;
    this.ID = null;
    this.IsCurrentSyncData = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype = {
    get MemberID() {
        return this._MemberID;
    },
    set MemberID(val) {
        this._MemberID = val;
    },
    get SaleTransactnId() {
        return this._SaleTransactnId;
    },
    set SaleTransactnId(val) {
        this._SaleTransactnId = val;
    },
    get MtngOccrID() {
        return this._MtngOccrID;
    },
    set MtngOccrID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MtngOccrID in PreActivation.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MtngOccrID = val;
    },
    get LocationID() {
        return this._LocationID;
    },
    set LocationID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute LocationID in PreActivation.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._LocationID = val;
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
    get PreactivationDate() {
        return this._PreactivationDate;
    },
    set PreactivationDate(val) {
        this._PreactivationDate = val;
    },
    get ActivationDate() {
        return this._ActivationDate;
    },
    set ActivationDate(val) {
        this._ActivationDate = val;
    },
    get lastUpdateTime() {
        return this._lastUpdateTime;
    },
    set lastUpdateTime(val) {
        this._lastUpdateTime = val;
    },
    get MeetingDate() {
        return this._MeetingDate;
    },
    set MeetingDate(val) {
        this._MeetingDate = val;
    },
    get ActivationStatus() {
        return this._ActivationStatus;
    },
    set ActivationStatus(val) {
        this._ActivationStatus = val;
    },
    get CouponCode() {
        return this._CouponCode;
    },
    set CouponCode(val) {
        this._CouponCode = val;
    },
    get ExpirationDate() {
        return this._ExpirationDate;
    },
    set ExpirationDate(val) {
        this._ExpirationDate = val;
    },
    get PassType() {
        return this._PassType;
    },
    set PassType(val) {
        this._PassType = val;
    },
    get PassDuration() {
        return this._PassDuration;
    },
    set PassDuration(val) {
        this._PassDuration = val;
    },
    get ID() {
        return this._ID;
    },
    set ID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ID in PreActivation.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ID = val;
    },
    get IsCurrentSyncData() {
        return this._IsCurrentSyncData;
    },
    set IsCurrentSyncData(val) {
        this._IsCurrentSyncData = val;
    },
};
/************************************************************************************
 * Retrieves all instances of PreActivation SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "MemberID";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "SaleTransactnId";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    orderByMap = kony.sync.formOrderByClause("PreActivation", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of PreActivation present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAllCount function");
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of PreActivation using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getCount->successcallback");
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
 * Creates a new instance of PreActivation in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "PreActivation", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of PreActivation in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].MemberID = "MemberID_0";
 *		valuesArray[0].SaleTransactnId = "SaleTransactnId_0";
 *		valuesArray[0].MtngOccrID = 0;
 *		valuesArray[0].LocationID = 0;
 *		valuesArray[0].Locale = "Locale_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[0].PreactivationDate = 0;
 *		valuesArray[0].MeetingDate = 0;
 *		valuesArray[0].CouponCode = "CouponCode_0";
 *		valuesArray[0].ExpirationDate = 0;
 *		valuesArray[0].PassType = "PassType_0";
 *		valuesArray[0].PassDuration = "PassDuration_0";
 *		valuesArray[0].IsCurrentSyncData = "IsCurrentSyncData_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].MemberID = "MemberID_1";
 *		valuesArray[1].SaleTransactnId = "SaleTransactnId_1";
 *		valuesArray[1].MtngOccrID = 1;
 *		valuesArray[1].LocationID = 1;
 *		valuesArray[1].Locale = "Locale_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[1].PreactivationDate = 1;
 *		valuesArray[1].MeetingDate = 1;
 *		valuesArray[1].CouponCode = "CouponCode_1";
 *		valuesArray[1].ExpirationDate = 1;
 *		valuesArray[1].PassType = "PassType_1";
 *		valuesArray[1].PassDuration = "PassDuration_1";
 *		valuesArray[1].IsCurrentSyncData = "IsCurrentSyncData_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].MemberID = "MemberID_2";
 *		valuesArray[2].SaleTransactnId = "SaleTransactnId_2";
 *		valuesArray[2].MtngOccrID = 2;
 *		valuesArray[2].LocationID = 2;
 *		valuesArray[2].Locale = "Locale_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		valuesArray[2].PreactivationDate = 2;
 *		valuesArray[2].MeetingDate = 2;
 *		valuesArray[2].CouponCode = "CouponCode_2";
 *		valuesArray[2].ExpirationDate = 2;
 *		valuesArray[2].PassType = "PassType_2";
 *		valuesArray[2].PassDuration = "PassDuration_2";
 *		valuesArray[2].IsCurrentSyncData = "IsCurrentSyncData_2";
 *		com.kony.WeightWatchers.MemberSyncScope.PreActivation.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "PreActivation", errorcallback, true) === false) {
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
                errMsg = "MemberID=" + valuestable.MemberID;
                pks["MemberID"] = {
                    key: "MemberID",
                    value: valuestable.MemberID
                };
                errMsg = errMsg + ", ActivationDate=" + valuestable.ActivationDate;
                pks["ActivationDate"] = {
                    key: "ActivationDate",
                    value: valuestable.ActivationDate
                };
                errMsg = errMsg + ", ActivationStatus=" + valuestable.ActivationStatus;
                pks["ActivationStatus"] = {
                    key: "ActivationStatus",
                    value: valuestable.ActivationStatus
                };
                errMsg = errMsg + ", CouponCode=" + valuestable.CouponCode;
                pks["CouponCode"] = {
                    key: "CouponCode",
                    value: valuestable.CouponCode
                };
                errMsg = errMsg + ", ID=" + valuestable.ID;
                pks["ID"] = {
                    key: "ID",
                    value: valuestable.ID
                };
                var wcs = [];
                if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates PreActivation using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "PreActivation", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates PreActivation(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "PreActivation", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPKTable());
    }
};
/************************************************************************************
 * Updates PreActivation(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.SaleTransactnId = "SaleTransactnId_updated0";
 *		inputArray[0].changeSet.MtngOccrID = 0;
 *		inputArray[0].changeSet.LocationID = 0;
 *		inputArray[0].changeSet.Locale = "Locale_updated0";
 *		inputArray[0].whereClause = "where MemberID = '0'";
 *		inputArray[0].whereClause = "where ActivationDate = '0'";
 *		inputArray[0].whereClause = "where ActivationStatus = '0'";
 *		inputArray[0].whereClause = "where CouponCode = '0'";
 *		inputArray[0].whereClause = "where ID = 0";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.SaleTransactnId = "SaleTransactnId_updated1";
 *		inputArray[1].changeSet.MtngOccrID = 1;
 *		inputArray[1].changeSet.LocationID = 1;
 *		inputArray[1].changeSet.Locale = "Locale_updated1";
 *		inputArray[1].whereClause = "where MemberID = '1'";
 *		inputArray[1].whereClause = "where ActivationDate = '1'";
 *		inputArray[1].whereClause = "where ActivationStatus = '1'";
 *		inputArray[1].whereClause = "where CouponCode = '1'";
 *		inputArray[1].whereClause = "where ID = 1";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.SaleTransactnId = "SaleTransactnId_updated2";
 *		inputArray[2].changeSet.MtngOccrID = 2;
 *		inputArray[2].changeSet.LocationID = 2;
 *		inputArray[2].changeSet.Locale = "Locale_updated2";
 *		inputArray[2].whereClause = "where MemberID = '2'";
 *		inputArray[2].whereClause = "where ActivationDate = '2'";
 *		inputArray[2].whereClause = "where ActivationStatus = '2'";
 *		inputArray[2].whereClause = "where CouponCode = '2'";
 *		inputArray[2].whereClause = "where ID = 2";
 *		com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "100001691c94a7df6";
        var tbname = "PreActivation";
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
                if (kony.sync.attributeValidation(valuestable, "PreActivation", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes PreActivation using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function PreActivationTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK->PreActivation_PKPresent successcallback");
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

    function PreActivationErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function PreActivationSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, PreActivationTransactionCallback, PreActivationSuccessCallback, PreActivationErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes PreActivation(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove("where MemberID like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function PreActivation_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function PreActivation_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove->PreActivation_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, PreActivation_removeTransactioncallback, PreActivation_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes PreActivation using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function PreActivationTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK -> PreActivationTransactionCallback");
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

    function PreActivationErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK -> PreActivationErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function PreActivationSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK -> PreActivationSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, PreActivationTransactionCallback, PreActivationSuccessCallback, PreActivationErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes PreActivation(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function PreActivation_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function PreActivation_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove->PreActivation_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, PreActivation_removeTransactioncallback, PreActivation_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves PreActivation using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves PreActivation(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.MemberSyncScope.PreActivation.find("where MemberID like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of PreActivation with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of PreActivation matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of PreActivation pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of PreActivation pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of PreActivation deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to PreActivation in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to PreActivation's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether PreActivation's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether PreActivation's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeCascade function");
    var tbname = com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName();
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
com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.MemberSyncScope.PreActivation();
            obj.MemberID = res[i].MemberID;
            obj.SaleTransactnId = res[i].SaleTransactnId;
            obj.MtngOccrID = res[i].MtngOccrID;
            obj.LocationID = res[i].LocationID;
            obj.Locale = res[i].Locale;
            obj.CountryID = res[i].CountryID;
            obj.PreactivationDate = res[i].PreactivationDate;
            obj.ActivationDate = res[i].ActivationDate;
            obj.lastUpdateTime = res[i].lastUpdateTime;
            obj.MeetingDate = res[i].MeetingDate;
            obj.ActivationStatus = res[i].ActivationStatus;
            obj.CouponCode = res[i].CouponCode;
            obj.ExpirationDate = res[i].ExpirationDate;
            obj.PassType = res[i].PassType;
            obj.PassDuration = res[i].PassDuration;
            obj.ID = res[i].ID;
            obj.IsCurrentSyncData = res[i].IsCurrentSyncData;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.filterAttributes function");
    var attributeTable = {};
    attributeTable.MemberID = "MemberID";
    attributeTable.SaleTransactnId = "SaleTransactnId";
    attributeTable.MtngOccrID = "MtngOccrID";
    attributeTable.LocationID = "LocationID";
    attributeTable.Locale = "Locale";
    attributeTable.CountryID = "CountryID";
    attributeTable.PreactivationDate = "PreactivationDate";
    attributeTable.ActivationDate = "ActivationDate";
    attributeTable.MeetingDate = "MeetingDate";
    attributeTable.ActivationStatus = "ActivationStatus";
    attributeTable.CouponCode = "CouponCode";
    attributeTable.ExpirationDate = "ExpirationDate";
    attributeTable.PassType = "PassType";
    attributeTable.PassDuration = "PassDuration";
    attributeTable.ID = "ID";
    attributeTable.IsCurrentSyncData = "IsCurrentSyncData";
    var PKTable = {};
    PKTable.MemberID = {}
    PKTable.MemberID.name = "MemberID";
    PKTable.MemberID.isAutoGen = false;
    PKTable.ActivationDate = {}
    PKTable.ActivationDate.name = "ActivationDate";
    PKTable.ActivationDate.isAutoGen = true;
    PKTable.ActivationStatus = {}
    PKTable.ActivationStatus.name = "ActivationStatus";
    PKTable.ActivationStatus.isAutoGen = true;
    PKTable.CouponCode = {}
    PKTable.CouponCode.name = "CouponCode";
    PKTable.CouponCode.isAutoGen = false;
    PKTable.ID = {}
    PKTable.ID.name = "ID";
    PKTable.ID.isAutoGen = true;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject PreActivation. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject PreActivation. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject PreActivation. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.PreActivation.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.MemberID = this.MemberID;
    }
    valuesTable.SaleTransactnId = this.SaleTransactnId;
    valuesTable.MtngOccrID = this.MtngOccrID;
    valuesTable.LocationID = this.LocationID;
    valuesTable.Locale = this.Locale;
    valuesTable.CountryID = this.CountryID;
    valuesTable.PreactivationDate = this.PreactivationDate;
    if (isInsert === true) {
        valuesTable.ActivationDate = this.ActivationDate;
    }
    valuesTable.MeetingDate = this.MeetingDate;
    if (isInsert === true) {
        valuesTable.ActivationStatus = this.ActivationStatus;
    }
    if (isInsert === true) {
        valuesTable.CouponCode = this.CouponCode;
    }
    valuesTable.ExpirationDate = this.ExpirationDate;
    valuesTable.PassType = this.PassType;
    valuesTable.PassDuration = this.PassDuration;
    if (isInsert === true) {
        valuesTable.ID = this.ID;
    }
    valuesTable.IsCurrentSyncData = this.IsCurrentSyncData;
    return valuesTable;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.prototype.getPKTable function");
    var pkTable = {};
    pkTable.MemberID = {
        key: "MemberID",
        value: this.MemberID
    };
    pkTable.ActivationDate = {
        key: "ActivationDate",
        value: this.ActivationDate
    };
    pkTable.ActivationStatus = {
        key: "ActivationStatus",
        value: this.ActivationStatus
    };
    pkTable.CouponCode = {
        key: "CouponCode",
        value: this.CouponCode
    };
    pkTable.ID = {
        key: "ID",
        value: this.ID
    };
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getPKTable function");
    var pkTable = [];
    pkTable.push("MemberID");
    pkTable.push("ActivationDate");
    pkTable.push("ActivationStatus");
    pkTable.push("CouponCode");
    pkTable.push("ID");
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.pkCheck function");
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
        sync.log.error("Primary Key MemberID not specified in " + opName + " an item in PreActivation");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("MemberID", opName, "PreActivation")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.ActivationDate)) {
        if (!kony.sync.isNull(pks.ActivationDate.value)) {
            wc.key = "ActivationDate";
            wc.value = pks.ActivationDate.value;
        } else {
            wc.key = "ActivationDate";
            wc.value = pks.ActivationDate;
        }
    } else {
        sync.log.error("Primary Key ActivationDate not specified in " + opName + " an item in PreActivation");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ActivationDate", opName, "PreActivation")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.ActivationStatus)) {
        if (!kony.sync.isNull(pks.ActivationStatus.value)) {
            wc.key = "ActivationStatus";
            wc.value = pks.ActivationStatus.value;
        } else {
            wc.key = "ActivationStatus";
            wc.value = pks.ActivationStatus;
        }
    } else {
        sync.log.error("Primary Key ActivationStatus not specified in " + opName + " an item in PreActivation");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ActivationStatus", opName, "PreActivation")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.CouponCode)) {
        if (!kony.sync.isNull(pks.CouponCode.value)) {
            wc.key = "CouponCode";
            wc.value = pks.CouponCode.value;
        } else {
            wc.key = "CouponCode";
            wc.value = pks.CouponCode;
        }
    } else {
        sync.log.error("Primary Key CouponCode not specified in " + opName + " an item in PreActivation");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("CouponCode", opName, "PreActivation")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.ID)) {
        if (!kony.sync.isNull(pks.ID.value)) {
            wc.key = "ID";
            wc.value = pks.ID.value;
        } else {
            wc.key = "ID";
            wc.value = pks.ID;
        }
    } else {
        sync.log.error("Primary Key ID not specified in " + opName + " an item in PreActivation");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ID", opName, "PreActivation")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.validateNull function");
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.validateNullInsert function");
    if (kony.sync.isNull(valuestable.MemberID) || kony.sync.isEmptyString(valuestable.MemberID)) {
        sync.log.error("Mandatory attribute MemberID is missing for the SyncObject PreActivation.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreActivation", "MemberID")));
        return false;
    }
    if (kony.sync.isNull(valuestable.CouponCode) || kony.sync.isEmptyString(valuestable.CouponCode)) {
        sync.log.error("Mandatory attribute CouponCode is missing for the SyncObject PreActivation.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreActivation", "CouponCode")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreActivation.getRelationshipMap function");
    var r1 = {};
    r1 = {};
    r1.sourceAttribute = [];
    r1.foreignKeyAttribute = [];
    r1.targetAttributeValue = [];
    if (!kony.sync.isNullOrUndefined(valuestable.MemberID)) {
        r1.sourceAttribute.push("MemberID");
        r1.foreignKeyAttribute.push("MemberID");
        r1.targetAttributeValue.push("'" + valuestable.MemberID + "'");
    }
    if (r1.targetAttributeValue.length > 0) {
        if (relationshipMap.MemberDetails === undefined) {
            relationshipMap.MemberDetails = [];
        }
        relationshipMap.MemberDetails.push(r1);
    }
    return relationshipMap;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.MemberSyncScope.PreActivation.getTableName = function() {
    return "PreActivation";
};
// **********************************End PreActivation's helper methods************************