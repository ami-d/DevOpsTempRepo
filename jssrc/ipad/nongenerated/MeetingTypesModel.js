//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:16 UTC 2018MeetingTypes*******************
// **********************************Start MeetingTypes's helper methods************************
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
if (typeof(com.kony.WeightWatchers.ProductSyncScope) === "undefined") {
    com.kony.WeightWatchers.ProductSyncScope = {};
}
/************************************************************************************
 * Creates new MeetingTypes
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes = function() {
    this.MeetingTypeName = null;
    this.MeetingTypeID = null;
    this.Length = null;
    this.CountryID = null;
    this.LastUpdatedTS = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype = {
    get MeetingTypeName() {
        return this._MeetingTypeName;
    },
    set MeetingTypeName(val) {
        this._MeetingTypeName = val;
    },
    get MeetingTypeID() {
        return this._MeetingTypeID;
    },
    set MeetingTypeID(val) {
        this._MeetingTypeID = val;
    },
    get Length() {
        return this._Length;
    },
    set Length(val) {
        this._Length = val;
    },
    get CountryID() {
        return this._CountryID;
    },
    set CountryID(val) {
        this._CountryID = val;
    },
    get LastUpdatedTS() {
        return this._LastUpdatedTS;
    },
    set LastUpdatedTS(val) {
        this._LastUpdatedTS = val;
    },
};
/************************************************************************************
 * Retrieves all instances of MeetingTypes SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "MeetingTypeName";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "MeetingTypeID";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    orderByMap = kony.sync.formOrderByClause("MeetingTypes", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of MeetingTypes present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllCount function");
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of MeetingTypes using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getCount->successcallback");
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
 * Creates a new instance of MeetingTypes in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "MeetingTypes", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "MeetingTypeID=" + valuestable.MeetingTypeID;
        pks["MeetingTypeID"] = {
            key: "MeetingTypeID",
            value: valuestable.MeetingTypeID
        };
        errMsg = errMsg + ", CountryID=" + valuestable.CountryID;
        pks["CountryID"] = {
            key: "CountryID",
            value: valuestable.CountryID
        };
        com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of MeetingTypes in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].MeetingTypeName = "MeetingTypeName_0";
 *		valuesArray[0].MeetingTypeID = "MeetingTypeID_0";
 *		valuesArray[0].Length = "Length_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].MeetingTypeName = "MeetingTypeName_1";
 *		valuesArray[1].MeetingTypeID = "MeetingTypeID_1";
 *		valuesArray[1].Length = "Length_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].MeetingTypeName = "MeetingTypeName_2";
 *		valuesArray[2].MeetingTypeID = "MeetingTypeID_2";
 *		valuesArray[2].Length = "Length_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "MeetingTypes", errorcallback, true) === false) {
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
                errMsg = "MeetingTypeID=" + valuestable.MeetingTypeID;
                pks["MeetingTypeID"] = {
                    key: "MeetingTypeID",
                    value: valuestable.MeetingTypeID
                };
                errMsg = errMsg + ", CountryID=" + valuestable.CountryID;
                pks["CountryID"] = {
                    key: "CountryID",
                    value: valuestable.CountryID
                };
                var wcs = [];
                if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates MeetingTypes using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "MeetingTypes", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates MeetingTypes(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "MeetingTypes", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPKTable());
    }
};
/************************************************************************************
 * Updates MeetingTypes(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.MeetingTypeName = "MeetingTypeName_updated0";
 *		inputArray[0].changeSet.Length = "Length_updated0";
 *		inputArray[0].whereClause = "where MeetingTypeID = '0'";
 *		inputArray[0].whereClause = "where CountryID = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.MeetingTypeName = "MeetingTypeName_updated1";
 *		inputArray[1].changeSet.Length = "Length_updated1";
 *		inputArray[1].whereClause = "where MeetingTypeID = '1'";
 *		inputArray[1].whereClause = "where CountryID = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.MeetingTypeName = "MeetingTypeName_updated2";
 *		inputArray[2].changeSet.Length = "Length_updated2";
 *		inputArray[2].whereClause = "where MeetingTypeID = '2'";
 *		inputArray[2].whereClause = "where CountryID = '2'";
 *		com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "100001691c94a7df6";
        var tbname = "MeetingTypes";
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
                if (kony.sync.attributeValidation(valuestable, "MeetingTypes", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes MeetingTypes using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function MeetingTypesTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK->MeetingTypes_PKPresent successcallback");
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

    function MeetingTypesErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MeetingTypesSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MeetingTypesTransactionCallback, MeetingTypesSuccessCallback, MeetingTypesErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes MeetingTypes(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove("where MeetingTypeName like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function MeetingTypes_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function MeetingTypes_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove->MeetingTypes_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, MeetingTypes_removeTransactioncallback, MeetingTypes_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes MeetingTypes using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function MeetingTypesTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK -> MeetingTypesTransactionCallback");
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

    function MeetingTypesErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK -> MeetingTypesErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MeetingTypesSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK -> MeetingTypesSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MeetingTypesTransactionCallback, MeetingTypesSuccessCallback, MeetingTypesErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes MeetingTypes(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function MeetingTypes_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function MeetingTypes_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove->MeetingTypes_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, MeetingTypes_removeTransactioncallback, MeetingTypes_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves MeetingTypes using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves MeetingTypes(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.find("where MeetingTypeName like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of MeetingTypes with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of MeetingTypes matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of MeetingTypes pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of MeetingTypes pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of MeetingTypes deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to MeetingTypes in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to MeetingTypes's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether MeetingTypes's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether MeetingTypes's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.removeCascade function");
    var tbname = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName();
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
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.ProductSyncScope.MeetingTypes();
            obj.MeetingTypeName = res[i].MeetingTypeName;
            obj.MeetingTypeID = res[i].MeetingTypeID;
            obj.Length = res[i].Length;
            obj.CountryID = res[i].CountryID;
            obj.LastUpdatedTS = res[i].LastUpdatedTS;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.filterAttributes function");
    var attributeTable = {};
    attributeTable.MeetingTypeName = "MeetingTypeName";
    attributeTable.MeetingTypeID = "MeetingTypeID";
    attributeTable.Length = "Length";
    attributeTable.CountryID = "CountryID";
    var PKTable = {};
    PKTable.MeetingTypeID = {}
    PKTable.MeetingTypeID.name = "MeetingTypeID";
    PKTable.MeetingTypeID.isAutoGen = false;
    PKTable.CountryID = {}
    PKTable.CountryID.name = "CountryID";
    PKTable.CountryID.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject MeetingTypes. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject MeetingTypes. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject MeetingTypes. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.MeetingTypeName = this.MeetingTypeName;
    if (isInsert === true) {
        valuesTable.MeetingTypeID = this.MeetingTypeID;
    }
    valuesTable.Length = this.Length;
    if (isInsert === true) {
        valuesTable.CountryID = this.CountryID;
    }
    return valuesTable;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.prototype.getPKTable function");
    var pkTable = {};
    pkTable.MeetingTypeID = {
        key: "MeetingTypeID",
        value: this.MeetingTypeID
    };
    pkTable.CountryID = {
        key: "CountryID",
        value: this.CountryID
    };
    return pkTable;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getPKTable function");
    var pkTable = [];
    pkTable.push("MeetingTypeID");
    pkTable.push("CountryID");
    return pkTable;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.pkCheck function");
    var wc = [];
    if (!kony.sync.isNull(pks.MeetingTypeID)) {
        if (!kony.sync.isNull(pks.MeetingTypeID.value)) {
            wc.key = "MeetingTypeID";
            wc.value = pks.MeetingTypeID.value;
        } else {
            wc.key = "MeetingTypeID";
            wc.value = pks.MeetingTypeID;
        }
    } else {
        sync.log.error("Primary Key MeetingTypeID not specified in " + opName + " an item in MeetingTypes");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("MeetingTypeID", opName, "MeetingTypes")));
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
        sync.log.error("Primary Key CountryID not specified in " + opName + " an item in MeetingTypes");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("CountryID", opName, "MeetingTypes")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.validateNull function");
    if (valuestable.MeetingTypeName !== undefined) {
        if (kony.sync.isNull(valuestable.MeetingTypeName) || kony.sync.isEmptyString(valuestable.MeetingTypeName)) {
            sync.log.error("Mandatory attribute MeetingTypeName is missing for the SyncObject MeetingTypes.");
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MeetingTypes", "MeetingTypeName")));
            return false;
        }
    }
    return true;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.validateNullInsert function");
    if (kony.sync.isNull(valuestable.MeetingTypeName) || kony.sync.isEmptyString(valuestable.MeetingTypeName)) {
        sync.log.error("Mandatory attribute MeetingTypeName is missing for the SyncObject MeetingTypes.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MeetingTypes", "MeetingTypeName")));
        return false;
    }
    if (kony.sync.isNull(valuestable.MeetingTypeID) || kony.sync.isEmptyString(valuestable.MeetingTypeID)) {
        sync.log.error("Mandatory attribute MeetingTypeID is missing for the SyncObject MeetingTypes.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MeetingTypes", "MeetingTypeID")));
        return false;
    }
    if (kony.sync.isNull(valuestable.CountryID) || kony.sync.isEmptyString(valuestable.CountryID)) {
        sync.log.error("Mandatory attribute CountryID is missing for the SyncObject MeetingTypes.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MeetingTypes", "CountryID")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.getTableName = function() {
    return "MeetingTypes";
};
// **********************************End MeetingTypes's helper methods************************