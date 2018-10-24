//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:15 UTC 2018MilestoneAchieved*******************
// **********************************Start MilestoneAchieved's helper methods************************
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



if(typeof(com)=== "undefined"){ com = {}; }
if(typeof(com.kony)=== "undefined"){ com.kony = {}; }
if(typeof(com.kony.WeightWatchers)=== "undefined"){ com.kony.WeightWatchers = {}; }
if(typeof(com.kony.WeightWatchers.MemberSyncScope)=== "undefined"){ com.kony.WeightWatchers.MemberSyncScope = {}; }

/************************************************************************************
* Creates new MilestoneAchieved
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved = function(){
	this.LastUpdatedTS = null;
	this.MilestoneID = null;
	this.ReachedDate = null;
	this.MemberID = null;
	this.WeighInDate = null;
	this.LocationNum = null;
	this.WeekNumber = null;
	this.MilestoneName = null;
	this.MeetingID = null;
	this.MemberMilestoneID = null;
	this.Locale = null;
	this.CountryID = null;
	this.ID = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype = {
	get LastUpdatedTS(){
		return this._LastUpdatedTS;
	},
	set LastUpdatedTS(val){
		this._LastUpdatedTS = val;
	},
	get MilestoneID(){
		return this._MilestoneID;
	},
	set MilestoneID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute MilestoneID in MilestoneAchieved.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._MilestoneID = val;
	},
	get ReachedDate(){
		return this._ReachedDate;
	},
	set ReachedDate(val){
		this._ReachedDate = val;
	},
	get MemberID(){
		return this._MemberID;
	},
	set MemberID(val){
		this._MemberID = val;
	},
	get WeighInDate(){
		return this._WeighInDate;
	},
	set WeighInDate(val){
		this._WeighInDate = val;
	},
	get LocationNum(){
		return this._LocationNum;
	},
	set LocationNum(val){
		this._LocationNum = val;
	},
	get WeekNumber(){
		return this._WeekNumber;
	},
	set WeekNumber(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute WeekNumber in MilestoneAchieved.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._WeekNumber = val;
	},
	get MilestoneName(){
		return this._MilestoneName;
	},
	set MilestoneName(val){
		this._MilestoneName = val;
	},
	get MeetingID(){
		return this._MeetingID;
	},
	set MeetingID(val){
		this._MeetingID = val;
	},
	get MemberMilestoneID(){
		return this._MemberMilestoneID;
	},
	set MemberMilestoneID(val){
		this._MemberMilestoneID = val;
	},
	get Locale(){
		return this._Locale;
	},
	set Locale(val){
		this._Locale = val;
	},
	get CountryID(){
		return this._CountryID;
	},
	set CountryID(val){
		this._CountryID = val;
	},
	get ID(){
		return this._ID;
	},
	set ID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ID in MilestoneAchieved.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ID = val;
	},
};

/************************************************************************************
* Retrieves all instances of MilestoneAchieved SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "LastUpdatedTS";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "MilestoneID";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	orderByMap = kony.sync.formOrderByClause("MilestoneAchieved",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of MilestoneAchieved present in local database.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAllCount function");
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of MilestoneAchieved using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getCount->successcallback");
		if(null!==res){
			var count = null;
			count = res["count(*)"];
			kony.sync.verifyAndCallClosure(successcallback, {count:count});
		}
		else{
			sync.log.error("Some error occured while getting the count");
		}
	}
};

/************************************************************************************
* Creates a new instance of MilestoneAchieved in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"MilestoneAchieved",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of MilestoneAchieved in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].MilestoneID = 0;
*		valuesArray[0].ReachedDate = 0;
*		valuesArray[0].MemberID = "MemberID_0";
*		valuesArray[0].WeighInDate = 0;
*		valuesArray[0].LocationNum = "LocationNum_0";
*		valuesArray[0].WeekNumber = 0;
*		valuesArray[0].MilestoneName = "MilestoneName_0";
*		valuesArray[0].MeetingID = "MeetingID_0";
*		valuesArray[0].Locale = "Locale_0";
*		valuesArray[0].CountryID = "CountryID_0";
*		valuesArray[1] = {};
*		valuesArray[1].MilestoneID = 1;
*		valuesArray[1].ReachedDate = 1;
*		valuesArray[1].MemberID = "MemberID_1";
*		valuesArray[1].WeighInDate = 1;
*		valuesArray[1].LocationNum = "LocationNum_1";
*		valuesArray[1].WeekNumber = 1;
*		valuesArray[1].MilestoneName = "MilestoneName_1";
*		valuesArray[1].MeetingID = "MeetingID_1";
*		valuesArray[1].Locale = "Locale_1";
*		valuesArray[1].CountryID = "CountryID_1";
*		valuesArray[2] = {};
*		valuesArray[2].MilestoneID = 2;
*		valuesArray[2].ReachedDate = 2;
*		valuesArray[2].MemberID = "MemberID_2";
*		valuesArray[2].WeighInDate = 2;
*		valuesArray[2].LocationNum = "LocationNum_2";
*		valuesArray[2].WeekNumber = 2;
*		valuesArray[2].MilestoneName = "MilestoneName_2";
*		valuesArray[2].MeetingID = "MeetingID_2";
*		valuesArray[2].Locale = "Locale_2";
*		valuesArray[2].CountryID = "CountryID_2";
*		com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var isProperData = true;
	var arrayLen = 0;
	var errorInfo = [];
	var arrayLength = valuesArray.length;
	var errObject = null;
	var isReferentialIntegrityFailure = false;
	var errMsg = null;
	if(kony.sync.enableORMValidations){
		var newValuesArray = [];

		//column level validations
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
			if(kony.sync.attributeValidation(valuestable,"MilestoneAchieved",errorcallback,true)===false){
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
		function checkDuplicatePkCallback(tx){
			arrayLength = valuesArray.length;
			for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
				var pks = [];
				errMsg = "MemberID=" + valuestable.MemberID;
				pks["MemberID"] = {key:"MemberID",value:valuestable.MemberID};
				errMsg = errMsg + ", MemberMilestoneID=" + valuestable.MemberMilestoneID;
				pks["MemberMilestoneID"] = {key:"MemberMilestoneID",value:valuestable.MemberMilestoneID};
				errMsg = errMsg + ", ID=" + valuestable.ID;
				pks["ID"] = {key:"ID",value:valuestable.ID};
				var wcs = [];
				if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
				if(resultset===false){
					isError = true;
					return;
				}
				if(resultset.rows.length!=0){
					isError = true;
					errMsg = "[" + errMsg + "]";
					isDuplicateKey = true;
					return;
				}
			}
			if(!isError){
				checkIntegrity(tx);
			}
		}
	}
	else{
		//copying by value
		var newValuesArray = [];
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
		}
		valuesArray = newValuesArray;
		kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
	}

	function transactionErrorCallback(){
		if(isError==true){
			//Statement error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
		}
		else{
			//Transaction error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}

	function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.createAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
		else{
			if(isReferentialIntegrityFailure){
				kony.sync.verifyAndCallClosure(errorcallback, errObject);
			}
			if(isDuplicateKey){
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
			}
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getRelationshipMap(relationshipMap,valuesArray[i]);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				isReferentialIntegrityFailure = true;
				return;
			}
		}
	}
};
/************************************************************************************
* Updates MilestoneAchieved using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"MilestoneAchieved",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates MilestoneAchieved(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"MilestoneAchieved",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPKTable());
	}
};

/************************************************************************************
* Updates MilestoneAchieved(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.MilestoneID = 0;
*		inputArray[0].changeSet.ReachedDate = "ReachedDate_updated0";
*		inputArray[0].changeSet.WeighInDate = "WeighInDate_updated0";
*		inputArray[0].changeSet.LocationNum = "LocationNum_updated0";
*		inputArray[0].whereClause = "where MemberID = '0'";
*		inputArray[0].whereClause = "where MemberMilestoneID = '0'";
*		inputArray[0].whereClause = "where ID = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.MilestoneID = 1;
*		inputArray[1].changeSet.ReachedDate = "ReachedDate_updated1";
*		inputArray[1].changeSet.WeighInDate = "WeighInDate_updated1";
*		inputArray[1].changeSet.LocationNum = "LocationNum_updated1";
*		inputArray[1].whereClause = "where MemberID = '1'";
*		inputArray[1].whereClause = "where MemberMilestoneID = '1'";
*		inputArray[1].whereClause = "where ID = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.MilestoneID = 2;
*		inputArray[2].changeSet.ReachedDate = "ReachedDate_updated2";
*		inputArray[2].changeSet.WeighInDate = "WeighInDate_updated2";
*		inputArray[2].changeSet.LocationNum = "LocationNum_updated2";
*		inputArray[2].whereClause = "where MemberID = '2'";
*		inputArray[2].whereClause = "where MemberMilestoneID = '2'";
*		inputArray[2].whereClause = "where ID = 2";
*		com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "100001691c94a7df6";
	var tbname = "MilestoneAchieved";
	var isError = false;
	var errObject = null;
	if(markForUpload == false || markForUpload == "false"){
		markForUpload="false"
	}
	else{
		markForUpload="true"
	}
	if((kony.sync.enableORMValidations)){

		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var v = inputArray[i];
			var valuestable = v.changeSet;
			var isEmpty = true;
			for(var key in valuestable){
				isEmpty = false;
				break;
			}
			if(isEmpty){
				errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeNullValue,kony.sync.getErrorMessage(kony.sync.errorCodeNullValue)));
				return;
			}
			var wcs = v.whereClause;
			var twcs = wcs;
			if(kony.sync.attributeValidation(valuestable,"MilestoneAchieved",errorcallback,false)===false){
				return;
			}

			newInputArray[i] = [];
			newInputArray[i].changeSet = valuestable;
			newInputArray[i].whereClause = wcs;
		}
		inputArray = newInputArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);

	}
	else{
		//copying by value
		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
		    var v = inputArray[i];
		    newInputArray[i] = kony.sync.CreateCopy(v);
		}
		inputArray = newInputArray;
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPKTable());
		}
	}

	function transactionErrorCallback(){
		if(errObject===false){
			//Sql statement error has occcurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
			
		}
		else if(errObject!==null){
			// Referential integrity error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, errObject);
		}
		else{
			//Transaction error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
			sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}
	}


}
/************************************************************************************
* Deletes MilestoneAchieved using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function MilestoneAchievedTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK->MilestoneAchieved_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
		}else{
			pkNotFound = true;
		}
		var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
	}
	
	function MilestoneAchievedErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function MilestoneAchievedSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, MilestoneAchievedTransactionCallback, MilestoneAchievedSuccessCallback, MilestoneAchievedErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes MilestoneAchieved(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove("where ReachedDate like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function MilestoneAchieved_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function MilestoneAchieved_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove->MilestoneAchieved_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, MilestoneAchieved_removeTransactioncallback, MilestoneAchieved_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes MilestoneAchieved using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function MilestoneAchievedTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK -> MilestoneAchievedTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function MilestoneAchievedErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK -> MilestoneAchievedErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function MilestoneAchievedSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK -> MilestoneAchievedSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, MilestoneAchievedTransactionCallback, MilestoneAchievedSuccessCallback, MilestoneAchievedErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes MilestoneAchieved(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function MilestoneAchieved_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function MilestoneAchieved_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove->MilestoneAchieved_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, MilestoneAchieved_removeTransactioncallback, MilestoneAchieved_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves MilestoneAchieved using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves MilestoneAchieved(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.find("where ReachedDate like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of MilestoneAchieved with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
		return;
	}

	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);		
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = [];
		twcs = wcs;
		kony.table.insert(twcs,{key : kony.sync.historyTableChangeTypeColumn, value : record[kony.sync.historyTableChangeTypeColumn], optype : "EQ",comptype : "AND"});
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
					kony.sync.qb_where(query, twcs);
		kony.table.remove(twcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);
	}
	
	function single_transaction_callback (tx){
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query, tbname);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		var resultSet = kony.sync.executeSql(tx, sql, params);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		if(num_records > 0){
			recordsFound = true;
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, 0);
			var changeType = record[kony.sync.mainTableChangeTypeColumn];
			if(!kony.sync.isNullOrUndefined(changeType) && kony.string.startsWith(""+changeType,"9")){
				recordsMarkedForUpload = 1;
				if(markRecordForUpload(tx, record) === false){
					isError = true;
					return;
				}
			}
		}
					
				
		var query1 =kony.sync.qb_createQuery();
					kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
					kony.sync.qb_where(query1, wcs);
		var query1_compile = kony.sync.qb_compile(query1);
		var sql1 = query1_compile[0];
		var params1 = query1_compile[1];
		var resultSet1 = kony.sync.executeSql (tx, sql1, params1);
		if(resultSet1!==false){
			var num_records = resultSet1.rows.length;
			for(var i = 0; i <= num_records - 1; i++ ){
				var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
				if(markRecordForUploadHistory(tx, record) === false){
					isError = true;
					return;
				}
				recordsFound = true;
			}
		}
		else{
			isError = true;
		}
	}
	function single_transaction_success_callback(){
		if(recordsFound === true){
			kony.sync.verifyAndCallClosure(successcallback , {count:recordsMarkedForUpload});
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	
	function single_transaction_error_callback(res){
		if (!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Marks instance(s) of MilestoneAchieved matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var isError = false;
	var num_records_main = 0;
	wcs = kony.sync.validateWhereClause(wcs);
	if(!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
		wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}else{	
		wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}
	
	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0] + " " + wcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = "";
		twcs = wcs;
		twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0]  + " " + twcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function single_transaction_callback (tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUpload->single_transaction_callback");
		//updating main table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from \"" + tbname + "\" " + wcs ;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}
		
		num_records_main = resultSet.rows.length;
		for(var i = 0; i < num_records_main; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
		}
		
		//updating history table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for ( var i = 0; i <= num_records - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUploadHistory(tx, record)=== false){
				isError = true;
				return;
			}
		}
	}
	
	function single_transaction_success_callback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.markForUpload->single_transaction_error_callback");
		if(!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Retrieves instance(s) of MilestoneAchieved pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql;
	if(typeof(wcs) === "string" && wcs != null){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname + "\" "+ wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of MilestoneAchieved pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of MilestoneAchieved deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var sql;
	if(typeof(wcs) === "string" && wcs != null ){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname +  "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'";
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	}
	
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to MilestoneAchieved in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to MilestoneAchieved's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether MilestoneAchieved's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordDeferredForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {deferred:flag});
	}
};

/************************************************************************************
* isRecordPendingForUpload returns true or false depending on whether MilestoneAchieved's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "NOT LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.isRecordPendingForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {pending:flag});
	}
};




/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade function");
	var tbname = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
	}
	if(isCascade){
		if(removeCascadeChildren()===false){
			return false;
		}
		if(kony.sync.deleteBatch(tx, tbname, wcs, isLocal,markForUpload, null)===false){
			return false;
		}
		return true;
	}else{
		var sql = "select * from \"" + tbname + "\" " + wcs;
		var resultSet = kony.sync.executeSql(tx, sql, null);
		if(resultSet===false){
			return false;
		}	
		var num_records = resultSet.rows.length;
		if(num_records === 0){
			return true;
		}else{
			sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable));
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity,kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable)));
			return false;
		}
	}
};


com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
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
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.filterAttributes function");
	var attributeTable = {};
	attributeTable.MilestoneID = "MilestoneID";
	attributeTable.ReachedDate = "ReachedDate";
	attributeTable.MemberID = "MemberID";
	attributeTable.WeighInDate = "WeighInDate";
	attributeTable.LocationNum = "LocationNum";
	attributeTable.WeekNumber = "WeekNumber";
	attributeTable.MilestoneName = "MilestoneName";
	attributeTable.MeetingID = "MeetingID";
	attributeTable.MemberMilestoneID = "MemberMilestoneID";
	attributeTable.Locale = "Locale";
	attributeTable.CountryID = "CountryID";
	attributeTable.ID = "ID";

	var PKTable = {};
	PKTable.MemberID = {}
	PKTable.MemberID.name = "MemberID";
	PKTable.MemberID.isAutoGen = false;
	PKTable.MemberMilestoneID = {}
	PKTable.MemberMilestoneID.name = "MemberMilestoneID";
	PKTable.MemberMilestoneID.isAutoGen = true;
	PKTable.ID = {}
	PKTable.ID.name = "ID";
	PKTable.ID.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject MilestoneAchieved. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject MilestoneAchieved. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject MilestoneAchieved. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
			}else{
				newvaluestable[k] = v;
			}
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.MilestoneID = this.MilestoneID;
	valuesTable.ReachedDate = this.ReachedDate;
	if(isInsert===true){
		valuesTable.MemberID = this.MemberID;
	}
	valuesTable.WeighInDate = this.WeighInDate;
	valuesTable.LocationNum = this.LocationNum;
	valuesTable.WeekNumber = this.WeekNumber;
	valuesTable.MilestoneName = this.MilestoneName;
	valuesTable.MeetingID = this.MeetingID;
	if(isInsert===true){
		valuesTable.MemberMilestoneID = this.MemberMilestoneID;
	}
	valuesTable.Locale = this.Locale;
	valuesTable.CountryID = this.CountryID;
	if(isInsert===true){
		valuesTable.ID = this.ID;
	}
	return valuesTable;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.prototype.getPKTable function");
	var pkTable = {};
	pkTable.MemberID = {key:"MemberID",value:this.MemberID};
	pkTable.MemberMilestoneID = {key:"MemberMilestoneID",value:this.MemberMilestoneID};
	pkTable.ID = {key:"ID",value:this.ID};
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getPKTable function");
	var pkTable = [];
	pkTable.push("MemberID");
	pkTable.push("MemberMilestoneID");
	pkTable.push("ID");
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.MemberID)){
		if(!kony.sync.isNull(pks.MemberID.value)){
			wc.key = "MemberID";
			wc.value = pks.MemberID.value;
		}
		else{
			wc.key = "MemberID";
			wc.value = pks.MemberID;
		}
	}else{
		sync.log.error("Primary Key MemberID not specified in " + opName + " an item in MilestoneAchieved");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("MemberID",opName,"MilestoneAchieved")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.MemberMilestoneID)){
		if(!kony.sync.isNull(pks.MemberMilestoneID.value)){
			wc.key = "MemberMilestoneID";
			wc.value = pks.MemberMilestoneID.value;
		}
		else{
			wc.key = "MemberMilestoneID";
			wc.value = pks.MemberMilestoneID;
		}
	}else{
		sync.log.error("Primary Key MemberMilestoneID not specified in " + opName + " an item in MilestoneAchieved");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("MemberMilestoneID",opName,"MilestoneAchieved")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.ID)){
		if(!kony.sync.isNull(pks.ID.value)){
			wc.key = "ID";
			wc.value = pks.ID.value;
		}
		else{
			wc.key = "ID";
			wc.value = pks.ID;
		}
	}else{
		sync.log.error("Primary Key ID not specified in " + opName + " an item in MilestoneAchieved");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ID",opName,"MilestoneAchieved")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.validateNull function");
	if(valuestable.MilestoneID!==undefined){
		if(kony.sync.isNull(valuestable.MilestoneID) || kony.sync.isEmptyString(valuestable.MilestoneID)){
			sync.log.error("Mandatory attribute MilestoneID is missing for the SyncObject MilestoneAchieved.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MilestoneAchieved", "MilestoneID")));
			return false;
		}
	}
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.validateNullInsert function");
	if(kony.sync.isNull(valuestable.MilestoneID) || kony.sync.isEmptyString(valuestable.MilestoneID)){
		sync.log.error("Mandatory attribute MilestoneID is missing for the SyncObject MilestoneAchieved.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MilestoneAchieved", "MilestoneID")));
		return false;
	}
	if(kony.sync.isNull(valuestable.MemberID) || kony.sync.isEmptyString(valuestable.MemberID)){
		sync.log.error("Mandatory attribute MemberID is missing for the SyncObject MilestoneAchieved.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MilestoneAchieved", "MemberID")));
		return false;
	}
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.MemberID)){
		r1.sourceAttribute.push("MemberID");
		r1.foreignKeyAttribute.push("MemberID");
		r1.targetAttributeValue.push("'" + valuestable.MemberID + "'");
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.MemberDetails===undefined){
			relationshipMap.MemberDetails = [];
		}
		relationshipMap.MemberDetails.push(r1);
	}
	
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.MemberID)){
		r1.sourceAttribute.push("MemberID");
		r1.foreignKeyAttribute.push("MemberID");
		r1.targetAttributeValue.push("'" + valuestable.MemberID + "'");
	}
	if (!kony.sync.isNullOrUndefined(valuestable.WeekNumber)){
		r1.sourceAttribute.push("WeekNumber");
		r1.foreignKeyAttribute.push("WeekNumber");
		r1.targetAttributeValue.push(valuestable.WeekNumber);
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.WeighDetails===undefined){
			relationshipMap.WeighDetails = [];
		}
		relationshipMap.WeighDetails.push(r1);
	}
	

	return relationshipMap;
};


com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getTableName = function(){
	return "MilestoneAchieved";
};




// **********************************End MilestoneAchieved's helper methods************************