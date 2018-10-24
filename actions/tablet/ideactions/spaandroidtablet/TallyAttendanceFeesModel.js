//****************Sync Version:Sync-GA-5.6.2_v201408132025*******************
// ****************Generated On Mon Feb 16 12:53:06 IST 2015TallyAttendanceFees*******************
// **********************************Start TallyAttendanceFees's helper methods************************
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
if (typeof(com.kony.WeightWatchers.Tally) === "undefined") {
    com.kony.WeightWatchers.Tally = {};
}
/************************************************************************************
 * Creates new TallyAttendanceFees
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees = function() {
    this.id = null;
    this.MeetingDate = null;
    this.MeetingOccrID = null;
    this.CurrentAttNumber = null;
    this.CurrentAttAmount = null;
    this.MissedAtt = null;
    this.MissedAmount = null;
    this.EnrollAtt = null;
    this.EnrollAmount = null;
    this.PaidLifeAtt = null;
    this.PaidLifAmount = null;
    this.PrepaidAtt = null;
    this.FreeLifAtt = null;
    this.TotalPaidAtt = null;
    this.TotalMemberAtt = null;
    this.TotalMemberFees = null;
    this.Timestamp = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype = {
    get id() {
        return this._id;
    },
    set id(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute id in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._id = val;
    },
    get MeetingDate() {
        return this._MeetingDate;
    },
    set MeetingDate(val) {
        this._MeetingDate = val;
    },
    get MeetingOccrID() {
        return this._MeetingOccrID;
    },
    set MeetingOccrID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MeetingOccrID in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MeetingOccrID = val;
    },
    get CurrentAttNumber() {
        return this._CurrentAttNumber;
    },
    set CurrentAttNumber(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute CurrentAttNumber in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._CurrentAttNumber = val;
    },
    get CurrentAttAmount() {
        return this._CurrentAttAmount;
    },
    set CurrentAttAmount(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute CurrentAttAmount in TallyAttendanceFees.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._CurrentAttAmount = val;
    },
    get MissedAtt() {
        return this._MissedAtt;
    },
    set MissedAtt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MissedAtt in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MissedAtt = val;
    },
    get MissedAmount() {
        return this._MissedAmount;
    },
    set MissedAmount(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MissedAmount in TallyAttendanceFees.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MissedAmount = val;
    },
    get EnrollAtt() {
        return this._EnrollAtt;
    },
    set EnrollAtt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute EnrollAtt in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._EnrollAtt = val;
    },
    get EnrollAmount() {
        return this._EnrollAmount;
    },
    set EnrollAmount(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute EnrollAmount in TallyAttendanceFees.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._EnrollAmount = val;
    },
    get PaidLifeAtt() {
        return this._PaidLifeAtt;
    },
    set PaidLifeAtt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute PaidLifeAtt in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PaidLifeAtt = val;
    },
    get PaidLifAmount() {
        return this._PaidLifAmount;
    },
    set PaidLifAmount(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute PaidLifAmount in TallyAttendanceFees.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PaidLifAmount = val;
    },
    get PrepaidAtt() {
        return this._PrepaidAtt;
    },
    set PrepaidAtt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute PrepaidAtt in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PrepaidAtt = val;
    },
    get FreeLifAtt() {
        return this._FreeLifAtt;
    },
    set FreeLifAtt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute FreeLifAtt in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._FreeLifAtt = val;
    },
    get TotalPaidAtt() {
        return this._TotalPaidAtt;
    },
    set TotalPaidAtt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute TotalPaidAtt in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._TotalPaidAtt = val;
    },
    get TotalMemberAtt() {
        return this._TotalMemberAtt;
    },
    set TotalMemberAtt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute TotalMemberAtt in TallyAttendanceFees.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._TotalMemberAtt = val;
    },
    get TotalMemberFees() {
        return this._TotalMemberFees;
    },
    set TotalMemberFees(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute TotalMemberFees in TallyAttendanceFees.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._TotalMemberFees = val;
    },
    get Timestamp() {
        return this._Timestamp;
    },
    set Timestamp(val) {
        this._Timestamp = val;
    },
};
/************************************************************************************
 * Retrieves all instances of TallyAttendanceFees SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "id";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "MeetingDate";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    orderByMap = kony.sync.formOrderByClause("TallyAttendanceFees", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of TallyAttendanceFees present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllCount function");
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of TallyAttendanceFees using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from " + tbname + " " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getCount->successcallback");
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
 * Creates a new instance of TallyAttendanceFees in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "TallyAttendanceFees", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "id=" + valuestable.id;
        pks["id"] = {
            key: "id",
            value: valuestable.id
        };
        com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of TallyAttendanceFees in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].id = 0;
 *		valuesArray[0].MeetingDate = 0;
 *		valuesArray[0].MeetingOccrID = 0;
 *		valuesArray[0].CurrentAttNumber = 0;
 *		valuesArray[0].CurrentAttAmount = 0;
 *		valuesArray[0].MissedAtt = 0;
 *		valuesArray[0].MissedAmount = 0;
 *		valuesArray[0].EnrollAtt = 0;
 *		valuesArray[0].EnrollAmount = 0;
 *		valuesArray[0].PaidLifeAtt = 0;
 *		valuesArray[0].PaidLifAmount = 0;
 *		valuesArray[0].PrepaidAtt = 0;
 *		valuesArray[0].FreeLifAtt = 0;
 *		valuesArray[0].TotalPaidAtt = 0;
 *		valuesArray[0].TotalMemberAtt = 0;
 *		valuesArray[0].TotalMemberFees = 0;
 *		valuesArray[1] = {};
 *		valuesArray[1].id = 1;
 *		valuesArray[1].MeetingDate = 1;
 *		valuesArray[1].MeetingOccrID = 1;
 *		valuesArray[1].CurrentAttNumber = 1;
 *		valuesArray[1].CurrentAttAmount = 1;
 *		valuesArray[1].MissedAtt = 1;
 *		valuesArray[1].MissedAmount = 1;
 *		valuesArray[1].EnrollAtt = 1;
 *		valuesArray[1].EnrollAmount = 1;
 *		valuesArray[1].PaidLifeAtt = 1;
 *		valuesArray[1].PaidLifAmount = 1;
 *		valuesArray[1].PrepaidAtt = 1;
 *		valuesArray[1].FreeLifAtt = 1;
 *		valuesArray[1].TotalPaidAtt = 1;
 *		valuesArray[1].TotalMemberAtt = 1;
 *		valuesArray[1].TotalMemberFees = 1;
 *		valuesArray[2] = {};
 *		valuesArray[2].id = 2;
 *		valuesArray[2].MeetingDate = 2;
 *		valuesArray[2].MeetingOccrID = 2;
 *		valuesArray[2].CurrentAttNumber = 2;
 *		valuesArray[2].CurrentAttAmount = 2;
 *		valuesArray[2].MissedAtt = 2;
 *		valuesArray[2].MissedAmount = 2;
 *		valuesArray[2].EnrollAtt = 2;
 *		valuesArray[2].EnrollAmount = 2;
 *		valuesArray[2].PaidLifeAtt = 2;
 *		valuesArray[2].PaidLifAmount = 2;
 *		valuesArray[2].PrepaidAtt = 2;
 *		valuesArray[2].FreeLifAtt = 2;
 *		valuesArray[2].TotalPaidAtt = 2;
 *		valuesArray[2].TotalMemberAtt = 2;
 *		valuesArray[2].TotalMemberFees = 2;
 *		com.kony.WeightWatchers.Tally.TallyAttendanceFees.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "TallyAttendanceFees", errorcallback, true) === false) {
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
                errMsg = "id=" + valuestable.id;
                pks["id"] = {
                    key: "id",
                    value: valuestable.id
                };
                var wcs = [];
                if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates TallyAttendanceFees using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "TallyAttendanceFees", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates TallyAttendanceFees(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "TallyAttendanceFees", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPKTable());
    }
};
/************************************************************************************
 * Updates TallyAttendanceFees(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.MeetingDate = "MeetingDate_updated0";
 *		inputArray[0].changeSet.MeetingOccrID = 0;
 *		inputArray[0].changeSet.CurrentAttNumber = 0;
 *		inputArray[0].changeSet.CurrentAttAmount = 0;
 *		inputArray[0].whereClause = "where id = 0";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.MeetingDate = "MeetingDate_updated1";
 *		inputArray[1].changeSet.MeetingOccrID = 1;
 *		inputArray[1].changeSet.CurrentAttNumber = 1;
 *		inputArray[1].changeSet.CurrentAttAmount = 1;
 *		inputArray[1].whereClause = "where id = 1";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.MeetingDate = "MeetingDate_updated2";
 *		inputArray[2].changeSet.MeetingOccrID = 2;
 *		inputArray[2].changeSet.CurrentAttNumber = 2;
 *		inputArray[2].changeSet.CurrentAttAmount = 2;
 *		inputArray[2].whereClause = "where id = 2";
 *		com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "MEGQA";
        var tbname = "TallyAttendanceFees";
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
                var wcs = v.whereClause;
                var twcs = wcs;
                if (kony.sync.attributeValidation(valuestable, "TallyAttendanceFees", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes TallyAttendanceFees using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function TallyAttendanceFeesTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK->TallyAttendanceFees_PKPresent successcallback");
        if (kony.sync.enableORMValidations) {
            record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
            if (record === false) {
                isError = true;
                return;
            }
        }
        if (null !== record || !kony.sync.enableORMValidations) {
            var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
            if (deletedRows === false) {
                isError = true;
            }
        } else {
            pkNotFound = true;
        }
    }

    function TallyAttendanceFeesErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function TallyAttendanceFeesSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, TallyAttendanceFeesTransactionCallback, TallyAttendanceFeesSuccessCallback, TallyAttendanceFeesErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes TallyAttendanceFees(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove("where MeetingDate like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function TallyAttendanceFees_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function TallyAttendanceFees_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove->TallyAttendanceFees_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, TallyAttendanceFees_removeTransactioncallback, TallyAttendanceFees_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes TallyAttendanceFees using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function TallyAttendanceFeesTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK -> TallyAttendanceFeesTransactionCallback");
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

    function TallyAttendanceFeesErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK -> TallyAttendanceFeesErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function TallyAttendanceFeesSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK -> TallyAttendanceFeesSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, TallyAttendanceFeesTransactionCallback, TallyAttendanceFeesSuccessCallback, TallyAttendanceFeesErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes TallyAttendanceFees(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function TallyAttendanceFees_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function TallyAttendanceFees_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove->TallyAttendanceFees_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, TallyAttendanceFees_removeTransactioncallback, TallyAttendanceFees_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves TallyAttendanceFees using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves TallyAttendanceFees(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.Tally.TallyAttendanceFees.find("where MeetingDate like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from " + tbname + " " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of TallyAttendanceFees with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var isError = false;
    var recordsFound = false;
    var wcs = [];
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
        for (var i = 0; i <= num_records - 1; i++) {
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
            if (markRecordForUpload(tx, record) === false) {
                isError = true;
                return;
            }
            recordsFound = true;
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
                count: 1
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
 * Marks instance(s) of TallyAttendanceFees matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUpload->single_transaction_callback");
        //updating main table
        var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + " " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            isError = true;
            return;
        }
        num_records_main = resultSet.rows.length;
        for (var i = 0; i <= num_records_main - 1; i++) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of TallyAttendanceFees pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from " + tbname + " " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of TallyAttendanceFees pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of TallyAttendanceFees deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from " + tbname + " " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to TallyAttendanceFees in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to TallyAttendanceFees's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether TallyAttendanceFees's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether TallyAttendanceFees's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.removeCascade function");
    var tbname = com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName();
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
        var sql = "select * from " + tbname + wcs;
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
com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.Tally.TallyAttendanceFees();
            obj.id = res[i].id;
            obj.MeetingDate = res[i].MeetingDate;
            obj.MeetingOccrID = res[i].MeetingOccrID;
            obj.CurrentAttNumber = res[i].CurrentAttNumber;
            obj.CurrentAttAmount = res[i].CurrentAttAmount;
            obj.MissedAtt = res[i].MissedAtt;
            obj.MissedAmount = res[i].MissedAmount;
            obj.EnrollAtt = res[i].EnrollAtt;
            obj.EnrollAmount = res[i].EnrollAmount;
            obj.PaidLifeAtt = res[i].PaidLifeAtt;
            obj.PaidLifAmount = res[i].PaidLifAmount;
            obj.PrepaidAtt = res[i].PrepaidAtt;
            obj.FreeLifAtt = res[i].FreeLifAtt;
            obj.TotalPaidAtt = res[i].TotalPaidAtt;
            obj.TotalMemberAtt = res[i].TotalMemberAtt;
            obj.TotalMemberFees = res[i].TotalMemberFees;
            obj.Timestamp = res[i].Timestamp;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.filterAttributes function");
    var attributeTable = {};
    attributeTable.id = "id";
    attributeTable.MeetingDate = "MeetingDate";
    attributeTable.MeetingOccrID = "MeetingOccrID";
    attributeTable.CurrentAttNumber = "CurrentAttNumber";
    attributeTable.CurrentAttAmount = "CurrentAttAmount";
    attributeTable.MissedAtt = "MissedAtt";
    attributeTable.MissedAmount = "MissedAmount";
    attributeTable.EnrollAtt = "EnrollAtt";
    attributeTable.EnrollAmount = "EnrollAmount";
    attributeTable.PaidLifeAtt = "PaidLifeAtt";
    attributeTable.PaidLifAmount = "PaidLifAmount";
    attributeTable.PrepaidAtt = "PrepaidAtt";
    attributeTable.FreeLifAtt = "FreeLifAtt";
    attributeTable.TotalPaidAtt = "TotalPaidAtt";
    attributeTable.TotalMemberAtt = "TotalMemberAtt";
    attributeTable.TotalMemberFees = "TotalMemberFees";
    var PKTable = {};
    PKTable.id = {}
    PKTable.id.name = "id";
    PKTable.id.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject TallyAttendanceFees. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject TallyAttendanceFees. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject TallyAttendanceFees. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.Tally.TallyAttendanceFees.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.id = this.id;
    }
    valuesTable.MeetingDate = this.MeetingDate;
    valuesTable.MeetingOccrID = this.MeetingOccrID;
    valuesTable.CurrentAttNumber = this.CurrentAttNumber;
    valuesTable.CurrentAttAmount = this.CurrentAttAmount;
    valuesTable.MissedAtt = this.MissedAtt;
    valuesTable.MissedAmount = this.MissedAmount;
    valuesTable.EnrollAtt = this.EnrollAtt;
    valuesTable.EnrollAmount = this.EnrollAmount;
    valuesTable.PaidLifeAtt = this.PaidLifeAtt;
    valuesTable.PaidLifAmount = this.PaidLifAmount;
    valuesTable.PrepaidAtt = this.PrepaidAtt;
    valuesTable.FreeLifAtt = this.FreeLifAtt;
    valuesTable.TotalPaidAtt = this.TotalPaidAtt;
    valuesTable.TotalMemberAtt = this.TotalMemberAtt;
    valuesTable.TotalMemberFees = this.TotalMemberFees;
    return valuesTable;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.prototype.getPKTable function");
    var pkTable = {};
    pkTable.id = {
        key: "id",
        value: this.id
    };
    return pkTable;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getPKTable function");
    var pkTable = [];
    pkTable.push("id");
    return pkTable;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key id not specified in  " + opName + "  an item in TallyAttendanceFees");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("id", opName, "TallyAttendanceFees")));
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
            sync.log.error("Primary Key id not specified in  " + opName + "  an item in TallyAttendanceFees");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("id", opName, "TallyAttendanceFees")));
            return false;
        }
    } else {
        wc.key = "id";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.validateNull function");
    return true;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.validateNullInsert function");
    if (kony.sync.isNull(valuestable.id) || kony.sync.isEmptyString(valuestable.id)) {
        sync.log.error("Mandatory attribute id is missing for the SyncObject TallyAttendanceFees.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "TallyAttendanceFees", "id")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.Tally.TallyAttendanceFees.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.kony.WeightWatchers.Tally.TallyAttendanceFees.getTableName = function() {
    return "TallyAttendanceFees";
};
// **********************************End TallyAttendanceFees's helper methods************************