//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:12 UTC 2018ExceptionDetail*******************
// **********************************Start ExceptionDetail's helper methods************************
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
if (typeof(com.kony.WeightWatchers.Logger) === "undefined") {
    com.kony.WeightWatchers.Logger = {};
}
/************************************************************************************
 * Creates new ExceptionDetail
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail = function() {
    this.id = null;
    this.user = null;
    this.errortype = null;
    this.description = null;
    this.localTime = null;
    this.errorcode = null;
    this.name = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype = {
    get id() {
        return this._id;
    },
    set id(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute id in ExceptionDetail.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._id = val;
    },
    get user() {
        return this._user;
    },
    set user(val) {
        this._user = val;
    },
    get errortype() {
        return this._errortype;
    },
    set errortype(val) {
        this._errortype = val;
    },
    get description() {
        return this._description;
    },
    set description(val) {
        this._description = val;
    },
    get localTime() {
        return this._localTime;
    },
    set localTime(val) {
        this._localTime = val;
    },
    get errorcode() {
        return this._errorcode;
    },
    set errorcode(val) {
        this._errorcode = val;
    },
    get name() {
        return this._name;
    },
    set name(val) {
        this._name = val;
    },
};
/************************************************************************************
 * Retrieves all instances of ExceptionDetail SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "id";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "user";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.Logger.ExceptionDetail.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    orderByMap = kony.sync.formOrderByClause("ExceptionDetail", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of ExceptionDetail present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getAllCount function");
    com.kony.WeightWatchers.Logger.ExceptionDetail.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of ExceptionDetail using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getCount->successcallback");
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
 * Creates a new instance of ExceptionDetail in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.Logger.ExceptionDetail.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "ExceptionDetail", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.Logger.ExceptionDetail.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of ExceptionDetail in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].user = "user_0";
 *		valuesArray[0].errortype = "errortype_0";
 *		valuesArray[0].description = "description_0";
 *		valuesArray[0].errorcode = "errorcode_0";
 *		valuesArray[0].name = "name_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].user = "user_1";
 *		valuesArray[1].errortype = "errortype_1";
 *		valuesArray[1].description = "description_1";
 *		valuesArray[1].errorcode = "errorcode_1";
 *		valuesArray[1].name = "name_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].user = "user_2";
 *		valuesArray[2].errortype = "errortype_2";
 *		valuesArray[2].description = "description_2";
 *		valuesArray[2].errorcode = "errorcode_2";
 *		valuesArray[2].name = "name_2";
 *		com.kony.WeightWatchers.Logger.ExceptionDetail.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "ExceptionDetail", errorcallback, true) === false) {
                return;
            }
            newValuesArray[i] = valuestable;
        }
        valuesArray = newValuesArray;
        var connection = kony.sync.getConnectionOnly(dbname, dbname);
        kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
        var isError = false;
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
        sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.createAll->transactionSuccessCallback");
        if (!isError) {
            kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
        } else {
            if (isReferentialIntegrityFailure) {
                kony.sync.verifyAndCallClosure(errorcallback, errObject);
            }
        }
    }
    //foreign key constraints validations
    function checkIntegrity(tx) {
        sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.Logger.ExceptionDetail.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates ExceptionDetail using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.Logger.ExceptionDetail.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "ExceptionDetail", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.Logger.ExceptionDetail.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates ExceptionDetail(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "ExceptionDetail", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.Logger.ExceptionDetail.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.Logger.ExceptionDetail.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.Logger.ExceptionDetail.getPKTable());
    }
};
/************************************************************************************
 * Updates ExceptionDetail(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.user = "user_updated0";
 *		inputArray[0].changeSet.errortype = "errortype_updated0";
 *		inputArray[0].changeSet.description = "description_updated0";
 *		inputArray[0].changeSet.errorcode = "errorcode_updated0";
 *		inputArray[0].whereClause = "where id = 0";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.user = "user_updated1";
 *		inputArray[1].changeSet.errortype = "errortype_updated1";
 *		inputArray[1].changeSet.description = "description_updated1";
 *		inputArray[1].changeSet.errorcode = "errorcode_updated1";
 *		inputArray[1].whereClause = "where id = 1";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.user = "user_updated2";
 *		inputArray[2].changeSet.errortype = "errortype_updated2";
 *		inputArray[2].changeSet.description = "description_updated2";
 *		inputArray[2].changeSet.errorcode = "errorcode_updated2";
 *		inputArray[2].whereClause = "where id = 2";
 *		com.kony.WeightWatchers.Logger.ExceptionDetail.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "100001691c94a7df6";
        var tbname = "ExceptionDetail";
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
                if (kony.sync.attributeValidation(valuestable, "ExceptionDetail", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.Logger.ExceptionDetail.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.Logger.ExceptionDetail.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.Logger.ExceptionDetail.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes ExceptionDetail using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function ExceptionDetailTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK->ExceptionDetail_PKPresent successcallback");
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

    function ExceptionDetailErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function ExceptionDetailSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, ExceptionDetailTransactionCallback, ExceptionDetailSuccessCallback, ExceptionDetailErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes ExceptionDetail(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.Logger.ExceptionDetail.remove("where user like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function ExceptionDetail_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function ExceptionDetail_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.remove->ExceptionDetail_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, ExceptionDetail_removeTransactioncallback, ExceptionDetail_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes ExceptionDetail using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function ExceptionDetailTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK -> ExceptionDetailTransactionCallback");
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

    function ExceptionDetailErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK -> ExceptionDetailErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function ExceptionDetailSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK -> ExceptionDetailSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, ExceptionDetailTransactionCallback, ExceptionDetailSuccessCallback, ExceptionDetailErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes ExceptionDetail(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function ExceptionDetail_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function ExceptionDetail_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.remove->ExceptionDetail_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, ExceptionDetail_removeTransactioncallback, ExceptionDetail_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves ExceptionDetail using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Logger.ExceptionDetail.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves ExceptionDetail(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.Logger.ExceptionDetail.find("where user like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of ExceptionDetail with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Logger.ExceptionDetail.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of ExceptionDetail matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of ExceptionDetail pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of ExceptionDetail pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of ExceptionDetail deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to ExceptionDetail in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to ExceptionDetail's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether ExceptionDetail's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether ExceptionDetail's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.Logger.ExceptionDetail.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.removeCascade function");
    var tbname = com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName();
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
com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.Logger.ExceptionDetail();
            obj.id = res[i].id;
            obj.user = res[i].user;
            obj.errortype = res[i].errortype;
            obj.description = res[i].description;
            obj.localTime = res[i].localTime;
            obj.errorcode = res[i].errorcode;
            obj.name = res[i].name;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.filterAttributes function");
    var attributeTable = {};
    attributeTable.id = "id";
    attributeTable.user = "user";
    attributeTable.errortype = "errortype";
    attributeTable.description = "description";
    attributeTable.errorcode = "errorcode";
    attributeTable.name = "name";
    var PKTable = {};
    PKTable.id = {}
    PKTable.id.name = "id";
    PKTable.id.isAutoGen = true;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject ExceptionDetail. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject ExceptionDetail. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject ExceptionDetail. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.Logger.ExceptionDetail.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.id = this.id;
    }
    valuesTable.user = this.user;
    valuesTable.errortype = this.errortype;
    valuesTable.description = this.description;
    valuesTable.errorcode = this.errorcode;
    valuesTable.name = this.name;
    return valuesTable;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.prototype.getPKTable function");
    var pkTable = {};
    pkTable.id = {
        key: "id",
        value: this.id
    };
    return pkTable;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getPKTable function");
    var pkTable = [];
    pkTable.push("id");
    return pkTable;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key id not specified in  " + opName + "  an item in ExceptionDetail");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("id", opName, "ExceptionDetail")));
        return false;
    } else if (kony.sync.isValidJSTable(pks)) {
        if (!kony.sync.isNull(pks.id)) {
            if (!kony.sync.isNull(pks.id.value)) {
                wc.key = "id";
                wc.value = pks.id.value;
            } else {
                wc.key = "id";
                wc.value = pks.id;
            }
        } else {
            sync.log.error("Primary Key id not specified in  " + opName + "  an item in ExceptionDetail");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("id", opName, "ExceptionDetail")));
            return false;
        }
    } else {
        wc.key = "id";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.validateNull function");
    return true;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.validateNullInsert function");
    return true;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.Logger.ExceptionDetail.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.Logger.ExceptionDetail.getTableName = function() {
    return "ExceptionDetail";
};
// **********************************End ExceptionDetail's helper methods************************