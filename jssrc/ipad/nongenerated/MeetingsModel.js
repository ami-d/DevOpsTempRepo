//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Apr 23 07:56:37 UTC 2018Meetings*******************
// **********************************Start Meetings's helper methods************************
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
if (typeof(com.kony.WeightWatchers.MeetingSyncScope) === "undefined") {
    com.kony.WeightWatchers.MeetingSyncScope = {};
}
/************************************************************************************
 * Creates new Meetings
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings = function() {
    this.ID = null;
    this.BackOfficeRefID = null;
    this.DTCTime = null;
    this.DayCodeID = null;
    this.DayTimeCodeID = null;
    this.Description = null;
    this.DisplayValue = null;
    this.EndDate = null;
    this.EndTime = null;
    this.IsPersnlMeeting = null;
    this.LastModifdDate = null;
    this.LeaderID = null;
    this.LineOfBsinessID = null;
    this.LocationID = null;
    this.MeetingDate = null;
    this.MeetingNumber = null;
    this.MtingOcrncStsID = null;
    this.MeetingStatus = null;
    this.MtingTerminalID = null;
    this.MeetingTypeID = null;
    this.StartDate = null;
    this.TallyStatus = null;
    this.TransactionType = null;
    this.Date = null;
    this.isTimesheetModified = null;
    this.Locale = null;
    this.CountryID = null;
    this.SeriesNo = null;
    this.RenewalNo = null;
    this.WeekNo = null;
    this.SeriesLength = null;
    this.SeriesCompMeetings = null;
    this.IsAtWork = null;
    this.IsTallySubmitted = null;
    this.IsInfoSession = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype = {
    get ID() {
        return this._ID;
    },
    set ID(val) {
        this._ID = val;
    },
    get BackOfficeRefID() {
        return this._BackOfficeRefID;
    },
    set BackOfficeRefID(val) {
        this._BackOfficeRefID = val;
    },
    get DTCTime() {
        return this._DTCTime;
    },
    set DTCTime(val) {
        this._DTCTime = val;
    },
    get DayCodeID() {
        return this._DayCodeID;
    },
    set DayCodeID(val) {
        this._DayCodeID = val;
    },
    get DayTimeCodeID() {
        return this._DayTimeCodeID;
    },
    set DayTimeCodeID(val) {
        this._DayTimeCodeID = val;
    },
    get Description() {
        return this._Description;
    },
    set Description(val) {
        this._Description = val;
    },
    get DisplayValue() {
        return this._DisplayValue;
    },
    set DisplayValue(val) {
        this._DisplayValue = val;
    },
    get EndDate() {
        return this._EndDate;
    },
    set EndDate(val) {
        this._EndDate = val;
    },
    get EndTime() {
        return this._EndTime;
    },
    set EndTime(val) {
        this._EndTime = val;
    },
    get IsPersnlMeeting() {
        return kony.sync.getBoolean(this._IsPersnlMeeting) + "";
    },
    set IsPersnlMeeting(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsPersnlMeeting in Meetings.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsPersnlMeeting = val;
    },
    get LastModifdDate() {
        return this._LastModifdDate;
    },
    set LastModifdDate(val) {
        this._LastModifdDate = val;
    },
    get LeaderID() {
        return this._LeaderID;
    },
    set LeaderID(val) {
        this._LeaderID = val;
    },
    get LineOfBsinessID() {
        return this._LineOfBsinessID;
    },
    set LineOfBsinessID(val) {
        this._LineOfBsinessID = val;
    },
    get LocationID() {
        return this._LocationID;
    },
    set LocationID(val) {
        this._LocationID = val;
    },
    get MeetingDate() {
        return this._MeetingDate;
    },
    set MeetingDate(val) {
        this._MeetingDate = val;
    },
    get MeetingNumber() {
        return this._MeetingNumber;
    },
    set MeetingNumber(val) {
        this._MeetingNumber = val;
    },
    get MtingOcrncStsID() {
        return this._MtingOcrncStsID;
    },
    set MtingOcrncStsID(val) {
        this._MtingOcrncStsID = val;
    },
    get MeetingStatus() {
        return this._MeetingStatus;
    },
    set MeetingStatus(val) {
        this._MeetingStatus = val;
    },
    get MtingTerminalID() {
        return this._MtingTerminalID;
    },
    set MtingTerminalID(val) {
        this._MtingTerminalID = val;
    },
    get MeetingTypeID() {
        return this._MeetingTypeID;
    },
    set MeetingTypeID(val) {
        this._MeetingTypeID = val;
    },
    get StartDate() {
        return this._StartDate;
    },
    set StartDate(val) {
        this._StartDate = val;
    },
    get TallyStatus() {
        return this._TallyStatus;
    },
    set TallyStatus(val) {
        this._TallyStatus = val;
    },
    get TransactionType() {
        return this._TransactionType;
    },
    set TransactionType(val) {
        this._TransactionType = val;
    },
    get Date() {
        return this._Date;
    },
    set Date(val) {
        this._Date = val;
    },
    get isTimesheetModified() {
        return this._isTimesheetModified;
    },
    set isTimesheetModified(val) {
        this._isTimesheetModified = val;
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
    get SeriesNo() {
        return this._SeriesNo;
    },
    set SeriesNo(val) {
        this._SeriesNo = val;
    },
    get RenewalNo() {
        return this._RenewalNo;
    },
    set RenewalNo(val) {
        this._RenewalNo = val;
    },
    get WeekNo() {
        return this._WeekNo;
    },
    set WeekNo(val) {
        this._WeekNo = val;
    },
    get SeriesLength() {
        return this._SeriesLength;
    },
    set SeriesLength(val) {
        this._SeriesLength = val;
    },
    get SeriesCompMeetings() {
        return this._SeriesCompMeetings;
    },
    set SeriesCompMeetings(val) {
        this._SeriesCompMeetings = val;
    },
    get IsAtWork() {
        return kony.sync.getBoolean(this._IsAtWork) + "";
    },
    set IsAtWork(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsAtWork in Meetings.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsAtWork = val;
    },
    get IsTallySubmitted() {
        return kony.sync.getBoolean(this._IsTallySubmitted) + "";
    },
    set IsTallySubmitted(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsTallySubmitted in Meetings.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsTallySubmitted = val;
    },
    get IsInfoSession() {
        return kony.sync.getBoolean(this._IsInfoSession) + "";
    },
    set IsInfoSession(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsInfoSession in Meetings.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsInfoSession = val;
    },
};
/************************************************************************************
 * Retrieves all instances of Meetings SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "ID";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "BackOfficeRefID";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    orderByMap = kony.sync.formOrderByClause("Meetings", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of Meetings present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllCount function");
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of Meetings using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getCount->successcallback");
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
 * Creates a new instance of Meetings in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "Meetings", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "ID=" + valuestable.ID;
        pks["ID"] = {
            key: "ID",
            value: valuestable.ID
        };
        com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of Meetings in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].ID = "ID_0";
 *		valuesArray[0].BackOfficeRefID = "BackOfficeRefID_0";
 *		valuesArray[0].DTCTime = "DTCTime_0";
 *		valuesArray[0].DayCodeID = "DayCodeID_0";
 *		valuesArray[0].DayTimeCodeID = "DayTimeCodeID_0";
 *		valuesArray[0].Description = "Description_0";
 *		valuesArray[0].DisplayValue = "DisplayValue_0";
 *		valuesArray[0].EndDate = 0;
 *		valuesArray[0].EndTime = "EndTime_0";
 *		valuesArray[0].IsPersnlMeeting = true;
 *		valuesArray[0].LeaderID = "LeaderID_0";
 *		valuesArray[0].LineOfBsinessID = "LineOfBsinessID_0";
 *		valuesArray[0].LocationID = "LocationID_0";
 *		valuesArray[0].MeetingDate = 0;
 *		valuesArray[0].MeetingNumber = "MeetingNumber_0";
 *		valuesArray[0].MtingOcrncStsID = "MtingOcrncStsID_0";
 *		valuesArray[0].MeetingStatus = "MeetingStatus_0";
 *		valuesArray[0].MtingTerminalID = "MtingTerminalID_0";
 *		valuesArray[0].MeetingTypeID = "MeetingTypeID_0";
 *		valuesArray[0].StartDate = 0;
 *		valuesArray[0].TallyStatus = "TallyStatus_0";
 *		valuesArray[0].TransactionType = "TransactionType_0";
 *		valuesArray[0].Date = 0;
 *		valuesArray[0].isTimesheetModified = "isTimesheetModified_0";
 *		valuesArray[0].Locale = "Locale_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[0].SeriesNo = "SeriesNo_0";
 *		valuesArray[0].RenewalNo = "RenewalNo_0";
 *		valuesArray[0].WeekNo = "WeekNo_0";
 *		valuesArray[0].SeriesLength = "SeriesLength_0";
 *		valuesArray[0].SeriesCompMeetings = "SeriesCompMeetings_0";
 *		valuesArray[0].IsAtWork = true;
 *		valuesArray[0].IsTallySubmitted = true;
 *		valuesArray[0].IsInfoSession = true;
 *		valuesArray[1] = {};
 *		valuesArray[1].ID = "ID_1";
 *		valuesArray[1].BackOfficeRefID = "BackOfficeRefID_1";
 *		valuesArray[1].DTCTime = "DTCTime_1";
 *		valuesArray[1].DayCodeID = "DayCodeID_1";
 *		valuesArray[1].DayTimeCodeID = "DayTimeCodeID_1";
 *		valuesArray[1].Description = "Description_1";
 *		valuesArray[1].DisplayValue = "DisplayValue_1";
 *		valuesArray[1].EndDate = 1;
 *		valuesArray[1].EndTime = "EndTime_1";
 *		valuesArray[1].IsPersnlMeeting = true;
 *		valuesArray[1].LeaderID = "LeaderID_1";
 *		valuesArray[1].LineOfBsinessID = "LineOfBsinessID_1";
 *		valuesArray[1].LocationID = "LocationID_1";
 *		valuesArray[1].MeetingDate = 1;
 *		valuesArray[1].MeetingNumber = "MeetingNumber_1";
 *		valuesArray[1].MtingOcrncStsID = "MtingOcrncStsID_1";
 *		valuesArray[1].MeetingStatus = "MeetingStatus_1";
 *		valuesArray[1].MtingTerminalID = "MtingTerminalID_1";
 *		valuesArray[1].MeetingTypeID = "MeetingTypeID_1";
 *		valuesArray[1].StartDate = 1;
 *		valuesArray[1].TallyStatus = "TallyStatus_1";
 *		valuesArray[1].TransactionType = "TransactionType_1";
 *		valuesArray[1].Date = 1;
 *		valuesArray[1].isTimesheetModified = "isTimesheetModified_1";
 *		valuesArray[1].Locale = "Locale_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[1].SeriesNo = "SeriesNo_1";
 *		valuesArray[1].RenewalNo = "RenewalNo_1";
 *		valuesArray[1].WeekNo = "WeekNo_1";
 *		valuesArray[1].SeriesLength = "SeriesLength_1";
 *		valuesArray[1].SeriesCompMeetings = "SeriesCompMeetings_1";
 *		valuesArray[1].IsAtWork = true;
 *		valuesArray[1].IsTallySubmitted = true;
 *		valuesArray[1].IsInfoSession = true;
 *		valuesArray[2] = {};
 *		valuesArray[2].ID = "ID_2";
 *		valuesArray[2].BackOfficeRefID = "BackOfficeRefID_2";
 *		valuesArray[2].DTCTime = "DTCTime_2";
 *		valuesArray[2].DayCodeID = "DayCodeID_2";
 *		valuesArray[2].DayTimeCodeID = "DayTimeCodeID_2";
 *		valuesArray[2].Description = "Description_2";
 *		valuesArray[2].DisplayValue = "DisplayValue_2";
 *		valuesArray[2].EndDate = 2;
 *		valuesArray[2].EndTime = "EndTime_2";
 *		valuesArray[2].IsPersnlMeeting = true;
 *		valuesArray[2].LeaderID = "LeaderID_2";
 *		valuesArray[2].LineOfBsinessID = "LineOfBsinessID_2";
 *		valuesArray[2].LocationID = "LocationID_2";
 *		valuesArray[2].MeetingDate = 2;
 *		valuesArray[2].MeetingNumber = "MeetingNumber_2";
 *		valuesArray[2].MtingOcrncStsID = "MtingOcrncStsID_2";
 *		valuesArray[2].MeetingStatus = "MeetingStatus_2";
 *		valuesArray[2].MtingTerminalID = "MtingTerminalID_2";
 *		valuesArray[2].MeetingTypeID = "MeetingTypeID_2";
 *		valuesArray[2].StartDate = 2;
 *		valuesArray[2].TallyStatus = "TallyStatus_2";
 *		valuesArray[2].TransactionType = "TransactionType_2";
 *		valuesArray[2].Date = 2;
 *		valuesArray[2].isTimesheetModified = "isTimesheetModified_2";
 *		valuesArray[2].Locale = "Locale_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		valuesArray[2].SeriesNo = "SeriesNo_2";
 *		valuesArray[2].RenewalNo = "RenewalNo_2";
 *		valuesArray[2].WeekNo = "WeekNo_2";
 *		valuesArray[2].SeriesLength = "SeriesLength_2";
 *		valuesArray[2].SeriesCompMeetings = "SeriesCompMeetings_2";
 *		valuesArray[2].IsAtWork = true;
 *		valuesArray[2].IsTallySubmitted = true;
 *		valuesArray[2].IsInfoSession = true;
 *		com.kony.WeightWatchers.MeetingSyncScope.Meetings.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "Meetings", errorcallback, true) === false) {
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
                errMsg = "ID=" + valuestable.ID;
                pks["ID"] = {
                    key: "ID",
                    value: valuestable.ID
                };
                var wcs = [];
                if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates Meetings using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "Meetings", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates Meetings(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "Meetings", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPKTable());
    }
};
/************************************************************************************
 * Updates Meetings(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.BackOfficeRefID = "BackOfficeRefID_updated0";
 *		inputArray[0].changeSet.DTCTime = "DTCTime_updated0";
 *		inputArray[0].changeSet.DayCodeID = "DayCodeID_updated0";
 *		inputArray[0].changeSet.DayTimeCodeID = "DayTimeCodeID_updated0";
 *		inputArray[0].whereClause = "where ID = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.BackOfficeRefID = "BackOfficeRefID_updated1";
 *		inputArray[1].changeSet.DTCTime = "DTCTime_updated1";
 *		inputArray[1].changeSet.DayCodeID = "DayCodeID_updated1";
 *		inputArray[1].changeSet.DayTimeCodeID = "DayTimeCodeID_updated1";
 *		inputArray[1].whereClause = "where ID = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.BackOfficeRefID = "BackOfficeRefID_updated2";
 *		inputArray[2].changeSet.DTCTime = "DTCTime_updated2";
 *		inputArray[2].changeSet.DayCodeID = "DayCodeID_updated2";
 *		inputArray[2].changeSet.DayTimeCodeID = "DayTimeCodeID_updated2";
 *		inputArray[2].whereClause = "where ID = '2'";
 *		com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "100001691c94a7df6";
        var tbname = "Meetings";
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
                if (kony.sync.attributeValidation(valuestable, "Meetings", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPKTable());
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
            sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes Meetings using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function MeetingsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK->Meetings_PKPresent successcallback");
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

    function MeetingsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MeetingsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MeetingsTransactionCallback, MeetingsSuccessCallback, MeetingsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes Meetings(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove("where ID like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function Meetings_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function Meetings_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove->Meetings_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, Meetings_removeTransactioncallback, Meetings_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes Meetings using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function MeetingsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK -> MeetingsTransactionCallback");
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

    function MeetingsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK -> MeetingsErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MeetingsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK -> MeetingsSuccessCallback");
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
        sync.log.error("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MeetingsTransactionCallback, MeetingsSuccessCallback, MeetingsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes Meetings(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function Meetings_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function Meetings_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove->Meetings_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, Meetings_removeTransactioncallback, Meetings_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves Meetings using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves Meetings(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.MeetingSyncScope.Meetings.find("where ID like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of Meetings with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of Meetings matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of Meetings pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of Meetings pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of Meetings deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
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
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to Meetings in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to Meetings's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether Meetings's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether Meetings's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.removeCascade function");
    var tbname = com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName();
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
com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.MeetingSyncScope.Meetings();
            obj.ID = res[i].ID;
            obj.BackOfficeRefID = res[i].BackOfficeRefID;
            obj.DTCTime = res[i].DTCTime;
            obj.DayCodeID = res[i].DayCodeID;
            obj.DayTimeCodeID = res[i].DayTimeCodeID;
            obj.Description = res[i].Description;
            obj.DisplayValue = res[i].DisplayValue;
            obj.EndDate = res[i].EndDate;
            obj.EndTime = res[i].EndTime;
            obj.IsPersnlMeeting = res[i].IsPersnlMeeting;
            obj.LastModifdDate = res[i].LastModifdDate;
            obj.LeaderID = res[i].LeaderID;
            obj.LineOfBsinessID = res[i].LineOfBsinessID;
            obj.LocationID = res[i].LocationID;
            obj.MeetingDate = res[i].MeetingDate;
            obj.MeetingNumber = res[i].MeetingNumber;
            obj.MtingOcrncStsID = res[i].MtingOcrncStsID;
            obj.MeetingStatus = res[i].MeetingStatus;
            obj.MtingTerminalID = res[i].MtingTerminalID;
            obj.MeetingTypeID = res[i].MeetingTypeID;
            obj.StartDate = res[i].StartDate;
            obj.TallyStatus = res[i].TallyStatus;
            obj.TransactionType = res[i].TransactionType;
            obj.Date = res[i].Date;
            obj.isTimesheetModified = res[i].isTimesheetModified;
            obj.Locale = res[i].Locale;
            obj.CountryID = res[i].CountryID;
            obj.SeriesNo = res[i].SeriesNo;
            obj.RenewalNo = res[i].RenewalNo;
            obj.WeekNo = res[i].WeekNo;
            obj.SeriesLength = res[i].SeriesLength;
            obj.SeriesCompMeetings = res[i].SeriesCompMeetings;
            obj.IsAtWork = res[i].IsAtWork;
            obj.IsTallySubmitted = res[i].IsTallySubmitted;
            obj.IsInfoSession = res[i].IsInfoSession;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.filterAttributes function");
    var attributeTable = {};
    attributeTable.ID = "ID";
    attributeTable.BackOfficeRefID = "BackOfficeRefID";
    attributeTable.DTCTime = "DTCTime";
    attributeTable.DayCodeID = "DayCodeID";
    attributeTable.DayTimeCodeID = "DayTimeCodeID";
    attributeTable.Description = "Description";
    attributeTable.DisplayValue = "DisplayValue";
    attributeTable.EndDate = "EndDate";
    attributeTable.EndTime = "EndTime";
    attributeTable.IsPersnlMeeting = "IsPersnlMeeting";
    attributeTable.LeaderID = "LeaderID";
    attributeTable.LineOfBsinessID = "LineOfBsinessID";
    attributeTable.LocationID = "LocationID";
    attributeTable.MeetingDate = "MeetingDate";
    attributeTable.MeetingNumber = "MeetingNumber";
    attributeTable.MtingOcrncStsID = "MtingOcrncStsID";
    attributeTable.MeetingStatus = "MeetingStatus";
    attributeTable.MtingTerminalID = "MtingTerminalID";
    attributeTable.MeetingTypeID = "MeetingTypeID";
    attributeTable.StartDate = "StartDate";
    attributeTable.TallyStatus = "TallyStatus";
    attributeTable.TransactionType = "TransactionType";
    attributeTable.Date = "Date";
    attributeTable.isTimesheetModified = "isTimesheetModified";
    attributeTable.Locale = "Locale";
    attributeTable.CountryID = "CountryID";
    attributeTable.SeriesNo = "SeriesNo";
    attributeTable.RenewalNo = "RenewalNo";
    attributeTable.WeekNo = "WeekNo";
    attributeTable.SeriesLength = "SeriesLength";
    attributeTable.SeriesCompMeetings = "SeriesCompMeetings";
    attributeTable.IsAtWork = "IsAtWork";
    attributeTable.IsTallySubmitted = "IsTallySubmitted";
    attributeTable.IsInfoSession = "IsInfoSession";
    var PKTable = {};
    PKTable.ID = {}
    PKTable.ID.name = "ID";
    PKTable.ID.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Meetings. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Meetings. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Meetings. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.MeetingSyncScope.Meetings.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.ID = this.ID;
    }
    valuesTable.BackOfficeRefID = this.BackOfficeRefID;
    valuesTable.DTCTime = this.DTCTime;
    valuesTable.DayCodeID = this.DayCodeID;
    valuesTable.DayTimeCodeID = this.DayTimeCodeID;
    valuesTable.Description = this.Description;
    valuesTable.DisplayValue = this.DisplayValue;
    valuesTable.EndDate = this.EndDate;
    valuesTable.EndTime = this.EndTime;
    valuesTable.IsPersnlMeeting = this.IsPersnlMeeting;
    valuesTable.LeaderID = this.LeaderID;
    valuesTable.LineOfBsinessID = this.LineOfBsinessID;
    valuesTable.LocationID = this.LocationID;
    valuesTable.MeetingDate = this.MeetingDate;
    valuesTable.MeetingNumber = this.MeetingNumber;
    valuesTable.MtingOcrncStsID = this.MtingOcrncStsID;
    valuesTable.MeetingStatus = this.MeetingStatus;
    valuesTable.MtingTerminalID = this.MtingTerminalID;
    valuesTable.MeetingTypeID = this.MeetingTypeID;
    valuesTable.StartDate = this.StartDate;
    valuesTable.TallyStatus = this.TallyStatus;
    valuesTable.TransactionType = this.TransactionType;
    valuesTable.Date = this.Date;
    valuesTable.isTimesheetModified = this.isTimesheetModified;
    valuesTable.Locale = this.Locale;
    valuesTable.CountryID = this.CountryID;
    valuesTable.SeriesNo = this.SeriesNo;
    valuesTable.RenewalNo = this.RenewalNo;
    valuesTable.WeekNo = this.WeekNo;
    valuesTable.SeriesLength = this.SeriesLength;
    valuesTable.SeriesCompMeetings = this.SeriesCompMeetings;
    valuesTable.IsAtWork = this.IsAtWork;
    valuesTable.IsTallySubmitted = this.IsTallySubmitted;
    valuesTable.IsInfoSession = this.IsInfoSession;
    return valuesTable;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.prototype.getPKTable function");
    var pkTable = {};
    pkTable.ID = {
        key: "ID",
        value: this.ID
    };
    return pkTable;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getPKTable function");
    var pkTable = [];
    pkTable.push("ID");
    return pkTable;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key ID not specified in  " + opName + "  an item in Meetings");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ID", opName, "Meetings")));
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
            sync.log.error("Primary Key ID not specified in  " + opName + "  an item in Meetings");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("ID", opName, "Meetings")));
            return false;
        }
    } else {
        wc.key = "ID";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.validateNull function");
    return true;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.validateNullInsert function");
    if (kony.sync.isNull(valuestable.ID) || kony.sync.isEmptyString(valuestable.ID)) {
        sync.log.error("Mandatory attribute ID is missing for the SyncObject Meetings.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Meetings", "ID")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.MeetingSyncScope.Meetings.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.MeetingSyncScope.Meetings.getTableName = function() {
    return "Meetings";
};
// **********************************End Meetings's helper methods************************