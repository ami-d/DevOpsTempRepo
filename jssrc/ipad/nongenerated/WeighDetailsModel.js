//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:15 UTC 2018WeighDetails*******************
// **********************************Start WeighDetails's helper methods************************
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
 * Creates new WeighDetails
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails = function() {
    this.DailyPtTarget = null;
    this.EmpID = null;
    this.IsAtndgMeeting = null;
    this.NoWeighIn = null;
    this.LastUpdatedTime = null;
    this.ManualWeighIn = null;
    this.MeetingDate = null;
    this.MtngOccrID = null;
    this.MilestoneID = null;
    this.ReachedDate = null;
    this.WeekNumber = null;
    this.WeighInDate = null;
    this.Weight = null;
    this.WeighId = null;
    this.WeighMSDate = null;
    this.Height = null;
    this.LocationID = null;
    this.SessionNumber = null;
    this.MemberID = null;
    this.WeightLoss = null;
    this.modifiedLast = null;
    this.Locale = null;
    this.CountryID = null;
    this.IsMemberAtRisk = null;
    this.WeeklyPointsAllowance = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype = {
    get DailyPtTarget() {
        return this._DailyPtTarget;
    },
    set DailyPtTarget(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute DailyPtTarget in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._DailyPtTarget = val;
    },
    get EmpID() {
        return this._EmpID;
    },
    set EmpID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute EmpID in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._EmpID = val;
    },
    get IsAtndgMeeting() {
        return kony.sync.getBoolean(this._IsAtndgMeeting) + "";
    },
    set IsAtndgMeeting(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsAtndgMeeting in WeighDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsAtndgMeeting = val;
    },
    get NoWeighIn() {
        return kony.sync.getBoolean(this._NoWeighIn) + "";
    },
    set NoWeighIn(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute NoWeighIn in WeighDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._NoWeighIn = val;
    },
    get LastUpdatedTime() {
        return this._LastUpdatedTime;
    },
    set LastUpdatedTime(val) {
        this._LastUpdatedTime = val;
    },
    get ManualWeighIn() {
        return kony.sync.getBoolean(this._ManualWeighIn) + "";
    },
    set ManualWeighIn(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute ManualWeighIn in WeighDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ManualWeighIn = val;
    },
    get MeetingDate() {
        return this._MeetingDate;
    },
    set MeetingDate(val) {
        this._MeetingDate = val;
    },
    get MtngOccrID() {
        return this._MtngOccrID;
    },
    set MtngOccrID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MtngOccrID in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MtngOccrID = val;
    },
    get MilestoneID() {
        return this._MilestoneID;
    },
    set MilestoneID(val) {
        this._MilestoneID = val;
    },
    get ReachedDate() {
        return this._ReachedDate;
    },
    set ReachedDate(val) {
        this._ReachedDate = val;
    },
    get WeekNumber() {
        return this._WeekNumber;
    },
    set WeekNumber(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute WeekNumber in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeekNumber = val;
    },
    get WeighInDate() {
        return this._WeighInDate;
    },
    set WeighInDate(val) {
        this._WeighInDate = val;
    },
    get Weight() {
        return this._Weight;
    },
    set Weight(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute Weight in WeighDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._Weight = val;
    },
    get WeighId() {
        return this._WeighId;
    },
    set WeighId(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute WeighId in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeighId = val;
    },
    get WeighMSDate() {
        return this._WeighMSDate;
    },
    set WeighMSDate(val) {
        this._WeighMSDate = val;
    },
    get Height() {
        return this._Height;
    },
    set Height(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute Height in WeighDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._Height = val;
    },
    get LocationID() {
        return this._LocationID;
    },
    set LocationID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute LocationID in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._LocationID = val;
    },
    get SessionNumber() {
        return this._SessionNumber;
    },
    set SessionNumber(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute SessionNumber in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._SessionNumber = val;
    },
    get MemberID() {
        return this._MemberID;
    },
    set MemberID(val) {
        this._MemberID = val;
    },
    get WeightLoss() {
        return this._WeightLoss;
    },
    set WeightLoss(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute WeightLoss in WeighDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeightLoss = val;
    },
    get modifiedLast() {
        return this._modifiedLast;
    },
    set modifiedLast(val) {
        this._modifiedLast = val;
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
    get IsMemberAtRisk() {
        return this._IsMemberAtRisk;
    },
    set IsMemberAtRisk(val) {
        this._IsMemberAtRisk = val;
    },
    get WeeklyPointsAllowance() {
        return this._WeeklyPointsAllowance;
    },
    set WeeklyPointsAllowance(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute WeeklyPointsAllowance in WeighDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeeklyPointsAllowance = val;
    },
};
/************************************************************************************
 * Retrieves all instances of WeighDetails SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "DailyPtTarget";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "EmpID";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    orderByMap = kony.sync.formOrderByClause("WeighDetails", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of WeighDetails present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllCount function");
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of WeighDetails using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCount->successcallback");
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
 * Creates a new instance of WeighDetails in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "WeighDetails", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "WeekNumber=" + valuestable.WeekNumber;
        pks["WeekNumber"] = {
            key: "WeekNumber",
            value: valuestable.WeekNumber
        };
        errMsg = errMsg + ", MemberID=" + valuestable.MemberID;
        pks["MemberID"] = {
            key: "MemberID",
            value: valuestable.MemberID
        };
        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of WeighDetails in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].DailyPtTarget = 0;
 *		valuesArray[0].EmpID = 0;
 *		valuesArray[0].IsAtndgMeeting = true;
 *		valuesArray[0].NoWeighIn = true;
 *		valuesArray[0].ManualWeighIn = true;
 *		valuesArray[0].MeetingDate = 0;
 *		valuesArray[0].MtngOccrID = 0;
 *		valuesArray[0].MilestoneID = "MilestoneID_0";
 *		valuesArray[0].ReachedDate = "ReachedDate_0";
 *		valuesArray[0].WeekNumber = 0;
 *		valuesArray[0].WeighInDate = 0;
 *		valuesArray[0].Weight = 0;
 *		valuesArray[0].WeighId = 0;
 *		valuesArray[0].WeighMSDate = "WeighMSDate_0";
 *		valuesArray[0].Height = 0;
 *		valuesArray[0].LocationID = 0;
 *		valuesArray[0].SessionNumber = 0;
 *		valuesArray[0].MemberID = "MemberID_0";
 *		valuesArray[0].WeightLoss = 0;
 *		valuesArray[0].modifiedLast = 0;
 *		valuesArray[0].Locale = "Locale_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[0].IsMemberAtRisk = "IsMemberAtRisk_0";
 *		valuesArray[0].WeeklyPointsAllowance = 0;
 *		valuesArray[1] = {};
 *		valuesArray[1].DailyPtTarget = 1;
 *		valuesArray[1].EmpID = 1;
 *		valuesArray[1].IsAtndgMeeting = true;
 *		valuesArray[1].NoWeighIn = true;
 *		valuesArray[1].ManualWeighIn = true;
 *		valuesArray[1].MeetingDate = 1;
 *		valuesArray[1].MtngOccrID = 1;
 *		valuesArray[1].MilestoneID = "MilestoneID_1";
 *		valuesArray[1].ReachedDate = "ReachedDate_1";
 *		valuesArray[1].WeekNumber = 1;
 *		valuesArray[1].WeighInDate = 1;
 *		valuesArray[1].Weight = 1;
 *		valuesArray[1].WeighId = 1;
 *		valuesArray[1].WeighMSDate = "WeighMSDate_1";
 *		valuesArray[1].Height = 1;
 *		valuesArray[1].LocationID = 1;
 *		valuesArray[1].SessionNumber = 1;
 *		valuesArray[1].MemberID = "MemberID_1";
 *		valuesArray[1].WeightLoss = 1;
 *		valuesArray[1].modifiedLast = 1;
 *		valuesArray[1].Locale = "Locale_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[1].IsMemberAtRisk = "IsMemberAtRisk_1";
 *		valuesArray[1].WeeklyPointsAllowance = 1;
 *		valuesArray[2] = {};
 *		valuesArray[2].DailyPtTarget = 2;
 *		valuesArray[2].EmpID = 2;
 *		valuesArray[2].IsAtndgMeeting = true;
 *		valuesArray[2].NoWeighIn = true;
 *		valuesArray[2].ManualWeighIn = true;
 *		valuesArray[2].MeetingDate = 2;
 *		valuesArray[2].MtngOccrID = 2;
 *		valuesArray[2].MilestoneID = "MilestoneID_2";
 *		valuesArray[2].ReachedDate = "ReachedDate_2";
 *		valuesArray[2].WeekNumber = 2;
 *		valuesArray[2].WeighInDate = 2;
 *		valuesArray[2].Weight = 2;
 *		valuesArray[2].WeighId = 2;
 *		valuesArray[2].WeighMSDate = "WeighMSDate_2";
 *		valuesArray[2].Height = 2;
 *		valuesArray[2].LocationID = 2;
 *		valuesArray[2].SessionNumber = 2;
 *		valuesArray[2].MemberID = "MemberID_2";
 *		valuesArray[2].WeightLoss = 2;
 *		valuesArray[2].modifiedLast = 2;
 *		valuesArray[2].Locale = "Locale_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		valuesArray[2].IsMemberAtRisk = "IsMemberAtRisk_2";
 *		valuesArray[2].WeeklyPointsAllowance = 2;
 *		com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "WeighDetails", errorcallback, true) === false) {
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
                errMsg = "WeekNumber=" + valuestable.WeekNumber;
                pks["WeekNumber"] = {
                    key: "WeekNumber",
                    value: valuestable.WeekNumber
                };
                errMsg = errMsg + ", MemberID=" + valuestable.MemberID;
                pks["MemberID"] = {
                    key: "MemberID",
                    value: valuestable.MemberID
                };
                var wcs = [];
                if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates WeighDetails using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "WeighDetails", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates WeighDetails(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "WeighDetails", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPKTable());
    }
};
/************************************************************************************
 * Updates WeighDetails(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.DailyPtTarget = 0;
 *		inputArray[0].changeSet.EmpID = 0;
 *		inputArray[0].changeSet.IsAtndgMeeting = true;
 *		inputArray[0].changeSet.NoWeighIn = true;
 *		inputArray[0].whereClause = "where WeekNumber = 0";
 *		inputArray[0].whereClause = "where MemberID = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.DailyPtTarget = 1;
 *		inputArray[1].changeSet.EmpID = 1;
 *		inputArray[1].changeSet.IsAtndgMeeting = true;
 *		inputArray[1].changeSet.NoWeighIn = true;
 *		inputArray[1].whereClause = "where WeekNumber = 1";
 *		inputArray[1].whereClause = "where MemberID = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.DailyPtTarget = 2;
 *		inputArray[2].changeSet.EmpID = 2;
 *		inputArray[2].changeSet.IsAtndgMeeting = true;
 *		inputArray[2].changeSet.NoWeighIn = true;
 *		inputArray[2].whereClause = "where WeekNumber = 2";
 *		inputArray[2].whereClause = "where MemberID = '2'";
 *		com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "100001691c94a7df6";
        var tbname = "WeighDetails";
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
                if (kony.sync.attributeValidation(valuestable, "WeighDetails", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes WeighDetails using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function WeighDetailsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK->WeighDetails_PKPresent successcallback");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (null !== record) {
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            srcAttributes.push("WeekNumber");
            targetAttributes.push("WeekNumber");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", true, errorcallback, markForUpload, record, false)) {
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

    function WeighDetailsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function WeighDetailsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, WeighDetailsTransactionCallback, WeighDetailsSuccessCallback, WeighDetailsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes WeighDetails(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove("where MeetingDate like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function WeighDetails_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        srcAttributes.push("WeekNumber");
        targetAttributes.push("WeekNumber");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", true, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function WeighDetails_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove->WeighDetails_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, WeighDetails_removeTransactioncallback, WeighDetails_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes WeighDetails using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function WeighDetailsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK -> WeighDetailsTransactionCallback");
        var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (null !== record && false != record) {
            deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
            if (deletedRows === false) {
                isError = true;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            srcAttributes.push("WeekNumber");
            targetAttributes.push("WeekNumber");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", true, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
    }

    function WeighDetailsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK -> WeighDetailsErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function WeighDetailsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK -> WeighDetailsSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, WeighDetailsTransactionCallback, WeighDetailsSuccessCallback, WeighDetailsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes WeighDetails(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function WeighDetails_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        srcAttributes.push("WeekNumber");
        targetAttributes.push("WeekNumber");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", true, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function WeighDetails_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove->WeighDetails_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, WeighDetails_removeTransactioncallback, WeighDetails_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves WeighDetails using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves WeighDetails(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.MemberSyncScope.WeighDetails.find("where MeetingDate like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of WeighDetails with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of WeighDetails matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of WeighDetails pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of WeighDetails pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of WeighDetails deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to WeighDetails in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to WeighDetails's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether WeighDetails's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether WeighDetails's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.isRecordPendingForUpload->successcallback function");
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
 * Retrieves instances of MilestoneAchieved related to WeighDetails
 * with given $relationship.getTargetObjectAttribute() from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getMilestoneAchievedWithMemberIDANDWeekNumber = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getMilestoneAchievedWithMemberIDANDWeekNumber function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getMilestoneAchievedWithMemberIDANDWeekNumber(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getMilestoneAchievedWithMemberIDANDWeekNumber = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getMilestoneAchievedWithMemberIDANDWeekNumber function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getMilestoneAchievedWithMemberIDANDWeekNumber", "relationship", errorcallback)) {
        return;
    }

    function WeighDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey_0 = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey_0
            });
            var targetKey_1 = res[0].WeekNumber;
            wcs.push({
                key: "WeekNumber",
                value: targetKey_1
            });
            var tbname = "MilestoneAchieved"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved();
                obj.LastUpdatedTS = res[i].LastUpdatedTS;
                obj.MilestoneID = res[i].MilestoneID;
                obj.ReachedDate = res[i].ReachedDate;
                obj.MemberID = res[i].MemberID;
                obj.WeighInDate = res[i].WeighInDate;
                obj.LocationNum = res[i].LocationNum;
                obj.WeekNumber = res[i].WeekNumber;
                obj.MilestoneName = res[i].MilestoneName;
                obj.MeetingID = res[i].MeetingID;
                obj.MemberMilestoneID = res[i].MemberMilestoneID;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                obj.ID = res[i].ID;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK(pks, WeighDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of MilestoneAchieved related to WeighDetails
 * with given ${displayTargetAttribute} from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getCountOfMilestoneAchievedWithMemberIDANDWeekNumber = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getCountOfMilestoneAchievedWithMemberIDANDWeekNumber function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCountOfMilestoneAchievedWithMemberIDANDWeekNumber(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCountOfMilestoneAchievedWithMemberIDANDWeekNumber = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCountOfMilestoneAchievedWithMemberIDANDWeekNumber function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCountOfMilestoneAchievedWithMemberIDANDWeekNumber", "relationship", errorcallback)) {
        return;
    }

    function WeighDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey_0 = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey_0) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey_0 + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey_0
                });
            }
            var targetKey_1 = res[0].WeekNumber;
            targetAttributes.push("WeekNumber");
            if (kony.type(targetKey_1) === "string") {
                wcs.push({
                    "WeekNumber": "'" + targetKey_1 + "'"
                });
            } else {
                wcs.push({
                    "WeekNumber": targetKey_1
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK(pks, WeighDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeCascade function");
    var tbname = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        srcAttributes.push("WeekNumber");
        targetAttributes.push("WeekNumber");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", true, errorcallback, markForUpload, null, isLocal)) {
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
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.MemberSyncScope.WeighDetails();
            obj.DailyPtTarget = res[i].DailyPtTarget;
            obj.EmpID = res[i].EmpID;
            obj.IsAtndgMeeting = res[i].IsAtndgMeeting;
            obj.NoWeighIn = res[i].NoWeighIn;
            obj.LastUpdatedTime = res[i].LastUpdatedTime;
            obj.ManualWeighIn = res[i].ManualWeighIn;
            obj.MeetingDate = res[i].MeetingDate;
            obj.MtngOccrID = res[i].MtngOccrID;
            obj.MilestoneID = res[i].MilestoneID;
            obj.ReachedDate = res[i].ReachedDate;
            obj.WeekNumber = res[i].WeekNumber;
            obj.WeighInDate = res[i].WeighInDate;
            obj.Weight = res[i].Weight;
            obj.WeighId = res[i].WeighId;
            obj.WeighMSDate = res[i].WeighMSDate;
            obj.Height = res[i].Height;
            obj.LocationID = res[i].LocationID;
            obj.SessionNumber = res[i].SessionNumber;
            obj.MemberID = res[i].MemberID;
            obj.WeightLoss = res[i].WeightLoss;
            obj.modifiedLast = res[i].modifiedLast;
            obj.Locale = res[i].Locale;
            obj.CountryID = res[i].CountryID;
            obj.IsMemberAtRisk = res[i].IsMemberAtRisk;
            obj.WeeklyPointsAllowance = res[i].WeeklyPointsAllowance;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.filterAttributes function");
    var attributeTable = {};
    attributeTable.DailyPtTarget = "DailyPtTarget";
    attributeTable.EmpID = "EmpID";
    attributeTable.IsAtndgMeeting = "IsAtndgMeeting";
    attributeTable.NoWeighIn = "NoWeighIn";
    attributeTable.ManualWeighIn = "ManualWeighIn";
    attributeTable.MeetingDate = "MeetingDate";
    attributeTable.MtngOccrID = "MtngOccrID";
    attributeTable.MilestoneID = "MilestoneID";
    attributeTable.ReachedDate = "ReachedDate";
    attributeTable.WeekNumber = "WeekNumber";
    attributeTable.WeighInDate = "WeighInDate";
    attributeTable.Weight = "Weight";
    attributeTable.WeighId = "WeighId";
    attributeTable.WeighMSDate = "WeighMSDate";
    attributeTable.Height = "Height";
    attributeTable.LocationID = "LocationID";
    attributeTable.SessionNumber = "SessionNumber";
    attributeTable.MemberID = "MemberID";
    attributeTable.WeightLoss = "WeightLoss";
    attributeTable.modifiedLast = "modifiedLast";
    attributeTable.Locale = "Locale";
    attributeTable.CountryID = "CountryID";
    attributeTable.IsMemberAtRisk = "IsMemberAtRisk";
    attributeTable.WeeklyPointsAllowance = "WeeklyPointsAllowance";
    var PKTable = {};
    PKTable.WeekNumber = {}
    PKTable.WeekNumber.name = "WeekNumber";
    PKTable.WeekNumber.isAutoGen = false;
    PKTable.MemberID = {}
    PKTable.MemberID.name = "MemberID";
    PKTable.MemberID.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject WeighDetails. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject WeighDetails. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject WeighDetails. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.DailyPtTarget = this.DailyPtTarget;
    valuesTable.EmpID = this.EmpID;
    valuesTable.IsAtndgMeeting = this.IsAtndgMeeting;
    valuesTable.NoWeighIn = this.NoWeighIn;
    valuesTable.ManualWeighIn = this.ManualWeighIn;
    valuesTable.MeetingDate = this.MeetingDate;
    valuesTable.MtngOccrID = this.MtngOccrID;
    valuesTable.MilestoneID = this.MilestoneID;
    valuesTable.ReachedDate = this.ReachedDate;
    if (isInsert === true) {
        valuesTable.WeekNumber = this.WeekNumber;
    }
    valuesTable.WeighInDate = this.WeighInDate;
    valuesTable.Weight = this.Weight;
    valuesTable.WeighId = this.WeighId;
    valuesTable.WeighMSDate = this.WeighMSDate;
    valuesTable.Height = this.Height;
    valuesTable.LocationID = this.LocationID;
    valuesTable.SessionNumber = this.SessionNumber;
    if (isInsert === true) {
        valuesTable.MemberID = this.MemberID;
    }
    valuesTable.WeightLoss = this.WeightLoss;
    valuesTable.modifiedLast = this.modifiedLast;
    valuesTable.Locale = this.Locale;
    valuesTable.CountryID = this.CountryID;
    valuesTable.IsMemberAtRisk = this.IsMemberAtRisk;
    valuesTable.WeeklyPointsAllowance = this.WeeklyPointsAllowance;
    return valuesTable;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.prototype.getPKTable function");
    var pkTable = {};
    pkTable.WeekNumber = {
        key: "WeekNumber",
        value: this.WeekNumber
    };
    pkTable.MemberID = {
        key: "MemberID",
        value: this.MemberID
    };
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPKTable function");
    var pkTable = [];
    pkTable.push("WeekNumber");
    pkTable.push("MemberID");
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.pkCheck function");
    var wc = [];
    if (!kony.sync.isNull(pks.WeekNumber)) {
        if (!kony.sync.isNull(pks.WeekNumber.value)) {
            wc.key = "WeekNumber";
            wc.value = pks.WeekNumber.value;
        } else {
            wc.key = "WeekNumber";
            wc.value = pks.WeekNumber;
        }
    } else {
        sync.log.error("Primary Key WeekNumber not specified in " + opName + " an item in WeighDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("WeekNumber", opName, "WeighDetails")));
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
        sync.log.error("Primary Key MemberID not specified in " + opName + " an item in WeighDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("MemberID", opName, "WeighDetails")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.validateNull function");
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.validateNullInsert function");
    if (kony.sync.isNull(valuestable.WeekNumber) || kony.sync.isEmptyString(valuestable.WeekNumber)) {
        sync.log.error("Mandatory attribute WeekNumber is missing for the SyncObject WeighDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "WeighDetails", "WeekNumber")));
        return false;
    }
    if (kony.sync.isNull(valuestable.MemberID) || kony.sync.isEmptyString(valuestable.MemberID)) {
        sync.log.error("Mandatory attribute MemberID is missing for the SyncObject WeighDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "WeighDetails", "MemberID")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getRelationshipMap function");
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
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName = function() {
    return "WeighDetails";
};
// **********************************End WeighDetails's helper methods************************