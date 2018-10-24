//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:13 UTC 2018MeetingTypeLookup*******************
// **********************************Start MeetingTypeLookup's helper methods************************
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
if (typeof(com.kony.WeightWatchers.LookUpTables) === "undefined") {
    com.kony.WeightWatchers.LookUpTables = {};
}
/************************************************************************************
 * Creates new MeetingTypeLookup
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup = function() {
    this.meetingTypeId = null;
    this.countryCode = null;
    this.meetingTypeDesc = null;
    this.localTime = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype = {
    get meetingTypeId() {
        return this._meetingTypeId;
    },
    set meetingTypeId(val) {
        this._meetingTypeId = val;
    },
    get countryCode() {
        return this._countryCode;
    },
    set countryCode(val) {
        this._countryCode = val;
    },
    get meetingTypeDesc() {
        return this._meetingTypeDesc;
    },
    set meetingTypeDesc(val) {
        this._meetingTypeDesc = val;
    },
    get localTime() {
        return this._localTime;
    },
    set localTime(val) {
        this._localTime = val;
    },
};
/************************************************************************************
 * Retrieves all instances of MeetingTypeLookup SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "meetingTypeId";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "countryCode";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    orderByMap = kony.sync.formOrderByClause("MeetingTypeLookup", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of MeetingTypeLookup present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllCount function");
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of MeetingTypeLookup using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getCount->successcallback");
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
 * Creates a new instance of MeetingTypeLookup in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "MeetingTypeLookup", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "meetingTypeId=" + valuestable.meetingTypeId;
        pks["meetingTypeId"] = {
            key: "meetingTypeId",
            value: valuestable.meetingTypeId
        };
        com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of MeetingTypeLookup in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].meetingTypeId = "meetingTypeId_0";
 *		valuesArray[0].countryCode = "countryCode_0";
 *		valuesArray[0].meetingTypeDesc = "meetingTypeDesc_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].meetingTypeId = "meetingTypeId_1";
 *		valuesArray[1].countryCode = "countryCode_1";
 *		valuesArray[1].meetingTypeDesc = "meetingTypeDesc_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].meetingTypeId = "meetingTypeId_2";
 *		valuesArray[2].countryCode = "countryCode_2";
 *		valuesArray[2].meetingTypeDesc = "meetingTypeDesc_2";
 *		com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "MeetingTypeLookup", errorcallback, true) === false) {
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
                errMsg = "meetingTypeId=" + valuestable.meetingTypeId;
                pks["meetingTypeId"] = {
                    key: "meetingTypeId",
                    value: valuestable.meetingTypeId
                };
                var wcs = [];
                if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates MeetingTypeLookup using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "MeetingTypeLookup", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates MeetingTypeLookup(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "MeetingTypeLookup", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPKTable());
    }
};
/************************************************************************************
 * Updates MeetingTypeLookup(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.countryCode = "countryCode_updated0";
 *		inputArray[0].changeSet.meetingTypeDesc = "meetingTypeDesc_updated0";
 *		inputArray[0].whereClause = "where meetingTypeId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.countryCode = "countryCode_updated1";
 *		inputArray[1].changeSet.meetingTypeDesc = "meetingTypeDesc_updated1";
 *		inputArray[1].whereClause = "where meetingTypeId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.countryCode = "countryCode_updated2";
 *		inputArray[2].changeSet.meetingTypeDesc = "meetingTypeDesc_updated2";
 *		inputArray[2].whereClause = "where meetingTypeId = '2'";
 *		com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "100001691c94a7df6";
        var tbname = "MeetingTypeLookup";
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
                if (kony.sync.attributeValidation(valuestable, "MeetingTypeLookup", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes MeetingTypeLookup using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function MeetingTypeLookupTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK->MeetingTypeLookup_PKPresent successcallback");
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

    function MeetingTypeLookupErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MeetingTypeLookupSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MeetingTypeLookupTransactionCallback, MeetingTypeLookupSuccessCallback, MeetingTypeLookupErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes MeetingTypeLookup(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove("where meetingTypeId like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function MeetingTypeLookup_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function MeetingTypeLookup_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove->MeetingTypeLookup_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, MeetingTypeLookup_removeTransactioncallback, MeetingTypeLookup_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes MeetingTypeLookup using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function MeetingTypeLookupTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK -> MeetingTypeLookupTransactionCallback");
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

    function MeetingTypeLookupErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK -> MeetingTypeLookupErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MeetingTypeLookupSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK -> MeetingTypeLookupSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MeetingTypeLookupTransactionCallback, MeetingTypeLookupSuccessCallback, MeetingTypeLookupErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes MeetingTypeLookup(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function MeetingTypeLookup_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function MeetingTypeLookup_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove->MeetingTypeLookup_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, MeetingTypeLookup_removeTransactioncallback, MeetingTypeLookup_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves MeetingTypeLookup using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves MeetingTypeLookup(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.find("where meetingTypeId like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of MeetingTypeLookup with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of MeetingTypeLookup matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of MeetingTypeLookup pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of MeetingTypeLookup pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of MeetingTypeLookup deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to MeetingTypeLookup in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to MeetingTypeLookup's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether MeetingTypeLookup's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether MeetingTypeLookup's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.removeCascade function");
    var tbname = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName();
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
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup();
            obj.meetingTypeId = res[i].meetingTypeId;
            obj.countryCode = res[i].countryCode;
            obj.meetingTypeDesc = res[i].meetingTypeDesc;
            obj.localTime = res[i].localTime;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.filterAttributes function");
    var attributeTable = {};
    attributeTable.meetingTypeId = "meetingTypeId";
    attributeTable.countryCode = "countryCode";
    attributeTable.meetingTypeDesc = "meetingTypeDesc";
    var PKTable = {};
    PKTable.meetingTypeId = {}
    PKTable.meetingTypeId.name = "meetingTypeId";
    PKTable.meetingTypeId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject MeetingTypeLookup. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject MeetingTypeLookup. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject MeetingTypeLookup. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.meetingTypeId = this.meetingTypeId;
    }
    valuesTable.countryCode = this.countryCode;
    valuesTable.meetingTypeDesc = this.meetingTypeDesc;
    return valuesTable;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.prototype.getPKTable function");
    var pkTable = {};
    pkTable.meetingTypeId = {
        key: "meetingTypeId",
        value: this.meetingTypeId
    };
    return pkTable;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getPKTable function");
    var pkTable = [];
    pkTable.push("meetingTypeId");
    return pkTable;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key meetingTypeId not specified in  " + opName + "  an item in MeetingTypeLookup");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("meetingTypeId", opName, "MeetingTypeLookup")));
        return false;
    } else if (kony.sync.isValidJSTable(pks)) {
        if (!kony.sync.isNull(pks.meetingTypeId)) {
            if (!kony.sync.isNull(pks.meetingTypeId.value)) {
                wc.key = "meetingTypeId";
                wc.value = pks.meetingTypeId.value;
            } else {
                wc.key = "meetingTypeId";
                wc.value = pks.meetingTypeId;
            }
        } else {
            sync.log.error("Primary Key meetingTypeId not specified in  " + opName + "  an item in MeetingTypeLookup");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("meetingTypeId", opName, "MeetingTypeLookup")));
            return false;
        }
    } else {
        wc.key = "meetingTypeId";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.validateNull function");
    return true;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.validateNullInsert function");
    if (kony.sync.isNull(valuestable.meetingTypeId) || kony.sync.isEmptyString(valuestable.meetingTypeId)) {
        sync.log.error("Mandatory attribute meetingTypeId is missing for the SyncObject MeetingTypeLookup.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MeetingTypeLookup", "meetingTypeId")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.getTableName = function() {
    return "MeetingTypeLookup";
};
// **********************************End MeetingTypeLookup's helper methods************************