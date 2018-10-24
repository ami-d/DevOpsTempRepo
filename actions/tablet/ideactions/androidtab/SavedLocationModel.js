//****************Sync Version:Sync-GA-6.0.3_v201505141956_r3*******************
// ****************Generated On Thu May 18 12:35:29 IST 2017SavedLocation*******************
// **********************************Start SavedLocation's helper methods************************
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
 * Creates new SavedLocation
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation = function() {
    this.ID = null;
    this.lastupdatedtime = null;
    this.locationno = null;
    this.EmployeeNumber = null;
    this.Locale = null;
    this.CountryID = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype = {
    get ID() {
        return this._ID;
    },
    set ID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ID in SavedLocation.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ID = val;
    },
    get lastupdatedtime() {
        return this._lastupdatedtime;
    },
    set lastupdatedtime(val) {
        this._lastupdatedtime = val;
    },
    get locationno() {
        return this._locationno;
    },
    set locationno(val) {
        this._locationno = val;
    },
    get EmployeeNumber() {
        return this._EmployeeNumber;
    },
    set EmployeeNumber(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute EmployeeNumber in SavedLocation.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._EmployeeNumber = val;
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
};
/************************************************************************************
 * Retrieves all instances of SavedLocation SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "ID";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "lastupdatedtime";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.LookUpTables.SavedLocation.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    orderByMap = kony.sync.formOrderByClause("SavedLocation", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of SavedLocation present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getAllCount function");
    com.kony.WeightWatchers.LookUpTables.SavedLocation.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of SavedLocation using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getCount->successcallback");
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
 * Creates a new instance of SavedLocation in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.LookUpTables.SavedLocation.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "SavedLocation", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.LookUpTables.SavedLocation.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of SavedLocation in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].locationno = "locationno_0";
 *		valuesArray[0].EmployeeNumber = 0;
 *		valuesArray[0].Locale = "Locale_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].locationno = "locationno_1";
 *		valuesArray[1].EmployeeNumber = 1;
 *		valuesArray[1].Locale = "Locale_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].locationno = "locationno_2";
 *		valuesArray[2].EmployeeNumber = 2;
 *		valuesArray[2].Locale = "Locale_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		com.kony.WeightWatchers.LookUpTables.SavedLocation.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "SavedLocation", errorcallback, true) === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.LookUpTables.SavedLocation.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates SavedLocation using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.LookUpTables.SavedLocation.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "SavedLocation", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.LookUpTables.SavedLocation.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates SavedLocation(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "SavedLocation", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.LookUpTables.SavedLocation.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.LookUpTables.SavedLocation.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.LookUpTables.SavedLocation.getPKTable());
    }
};
/************************************************************************************
 * Updates SavedLocation(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.locationno = "locationno_updated0";
 *		inputArray[0].changeSet.EmployeeNumber = 0;
 *		inputArray[0].changeSet.Locale = "Locale_updated0";
 *		inputArray[0].changeSet.CountryID = "CountryID_updated0";
 *		inputArray[0].whereClause = "where ID = 0";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.locationno = "locationno_updated1";
 *		inputArray[1].changeSet.EmployeeNumber = 1;
 *		inputArray[1].changeSet.Locale = "Locale_updated1";
 *		inputArray[1].changeSet.CountryID = "CountryID_updated1";
 *		inputArray[1].whereClause = "where ID = 1";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.locationno = "locationno_updated2";
 *		inputArray[2].changeSet.EmployeeNumber = 2;
 *		inputArray[2].changeSet.Locale = "Locale_updated2";
 *		inputArray[2].changeSet.CountryID = "CountryID_updated2";
 *		inputArray[2].whereClause = "where ID = 2";
 *		com.kony.WeightWatchers.LookUpTables.SavedLocation.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "MEGDevelopment";
        var tbname = "SavedLocation";
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
                if (kony.sync.attributeValidation(valuestable, "SavedLocation", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.LookUpTables.SavedLocation.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.LookUpTables.SavedLocation.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.LookUpTables.SavedLocation.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes SavedLocation using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function SavedLocationTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK->SavedLocation_PKPresent successcallback");
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

    function SavedLocationErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function SavedLocationSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, SavedLocationTransactionCallback, SavedLocationSuccessCallback, SavedLocationErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes SavedLocation(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.LookUpTables.SavedLocation.remove("where locationno like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function SavedLocation_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function SavedLocation_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.remove->SavedLocation_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, SavedLocation_removeTransactioncallback, SavedLocation_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes SavedLocation using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function SavedLocationTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK -> SavedLocationTransactionCallback");
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

    function SavedLocationErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK -> SavedLocationErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function SavedLocationSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK -> SavedLocationSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, SavedLocationTransactionCallback, SavedLocationSuccessCallback, SavedLocationErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes SavedLocation(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function SavedLocation_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function SavedLocation_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.remove->SavedLocation_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, SavedLocation_removeTransactioncallback, SavedLocation_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves SavedLocation using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.SavedLocation.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves SavedLocation(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.LookUpTables.SavedLocation.find("where locationno like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of SavedLocation with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of SavedLocation matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of SavedLocation pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of SavedLocation pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of SavedLocation deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to SavedLocation in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to SavedLocation's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether SavedLocation's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether SavedLocation's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.LookUpTables.SavedLocation.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.removeCascade function");
    var tbname = com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName();
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
com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.LookUpTables.SavedLocation();
            obj.ID = res[i].ID;
            obj.lastupdatedtime = res[i].lastupdatedtime;
            obj.locationno = res[i].locationno;
            obj.EmployeeNumber = res[i].EmployeeNumber;
            obj.Locale = res[i].Locale;
            obj.CountryID = res[i].CountryID;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.filterAttributes function");
    var attributeTable = {};
    attributeTable.ID = "ID";
    attributeTable.locationno = "locationno";
    attributeTable.EmployeeNumber = "EmployeeNumber";
    attributeTable.Locale = "Locale";
    attributeTable.CountryID = "CountryID";
    var PKTable = {};
    PKTable.ID = {}
    PKTable.ID.name = "ID";
    PKTable.ID.isAutoGen = true;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SavedLocation. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SavedLocation. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SavedLocation. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.LookUpTables.SavedLocation.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.ID = this.ID;
    }
    valuesTable.locationno = this.locationno;
    valuesTable.EmployeeNumber = this.EmployeeNumber;
    valuesTable.Locale = this.Locale;
    valuesTable.CountryID = this.CountryID;
    return valuesTable;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.prototype.getPKTable function");
    var pkTable = {};
    pkTable.ID = {
        key: "ID",
        value: this.ID
    };
    return pkTable;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getPKTable function");
    var pkTable = [];
    pkTable.push("ID");
    return pkTable;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key ID not specified in  " + opName + "  an item in SavedLocation");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ID", opName, "SavedLocation")));
        return false;
    } else if (kony.sync.isValidJSTable(pks)) {
        if (!kony.sync.isNull(pks.ID)) {
            if (!kony.sync.isNull(pks.ID.value)) {
                wc.key = "ID";
                wc.value = pks.ID.value;
            } else {
                wc.key = "ID";
                wc.value = pks.ID;
            }
        } else {
            sync.log.error("Primary Key ID not specified in  " + opName + "  an item in SavedLocation");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ID", opName, "SavedLocation")));
            return false;
        }
    } else {
        wc.key = "ID";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.validateNull function");
    return true;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.validateNullInsert function");
    return true;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SavedLocation.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.kony.WeightWatchers.LookUpTables.SavedLocation.getTableName = function() {
    return "SavedLocation";
};
// **********************************End SavedLocation's helper methods************************