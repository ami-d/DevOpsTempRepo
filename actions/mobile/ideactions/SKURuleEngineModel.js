//****************Sync Version:Sync-GA-6.0.3_v201505141956_r3*******************
// ****************Generated On Thu May 18 12:35:24 IST 2017SKURuleEngine*******************
// **********************************Start SKURuleEngine's helper methods************************
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
if(typeof(com.kony.WeightWatchers.ProductSyncScope)=== "undefined"){ com.kony.WeightWatchers.ProductSyncScope = {}; }

/************************************************************************************
* Creates new SKURuleEngine
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine = function(){
	this.Action = null;
	this.Id = null;
	this.AgeGreaterThan = null;
	this.IsDefault = null;
	this.MemberType = null;
	this.MissedWeekMax = null;
	this.MissedWeekMin = null;
	this.SKU = null;
	this.Subscription = null;
	this.Transact = null;
	this.WeightDiff = null;
	this.LocalTime = null;
	this.LocationId = null;
	this.LocationNum = null;
	this.isPrepaid = null;
	this.PriceOverride = null;
	this.PriceOverideSKU = null;
	this.Locale = null;
	this.CountryID = null;
	this.RegistrationStatus = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype = {
	get Action(){
		return this._Action;
	},
	set Action(val){
		this._Action = val;
	},
	get Id(){
		return this._Id;
	},
	set Id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Id in SKURuleEngine.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Id = val;
	},
	get AgeGreaterThan(){
		return this._AgeGreaterThan;
	},
	set AgeGreaterThan(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute AgeGreaterThan in SKURuleEngine.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._AgeGreaterThan = val;
	},
	get IsDefault(){
		return kony.sync.getBoolean(this._IsDefault);
	},
	set IsDefault(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsDefault in SKURuleEngine.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsDefault = val;
	},
	get MemberType(){
		return this._MemberType;
	},
	set MemberType(val){
		this._MemberType = val;
	},
	get MissedWeekMax(){
		return this._MissedWeekMax;
	},
	set MissedWeekMax(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute MissedWeekMax in SKURuleEngine.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._MissedWeekMax = val;
	},
	get MissedWeekMin(){
		return this._MissedWeekMin;
	},
	set MissedWeekMin(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute MissedWeekMin in SKURuleEngine.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._MissedWeekMin = val;
	},
	get SKU(){
		return this._SKU;
	},
	set SKU(val){
		this._SKU = val;
	},
	get Subscription(){
		return this._Subscription;
	},
	set Subscription(val){
		this._Subscription = val;
	},
	get Transact(){
		return this._Transact;
	},
	set Transact(val){
		this._Transact = val;
	},
	get WeightDiff(){
		return this._WeightDiff;
	},
	set WeightDiff(val){
		this._WeightDiff = val;
	},
	get LocalTime(){
		return this._LocalTime;
	},
	set LocalTime(val){
		this._LocalTime = val;
	},
	get LocationId(){
		return this._LocationId;
	},
	set LocationId(val){
		this._LocationId = val;
	},
	get LocationNum(){
		return this._LocationNum;
	},
	set LocationNum(val){
		this._LocationNum = val;
	},
	get isPrepaid(){
		return kony.sync.getBoolean(this._isPrepaid);
	},
	set isPrepaid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute isPrepaid in SKURuleEngine.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._isPrepaid = val;
	},
	get PriceOverride(){
		return kony.sync.getBoolean(this._PriceOverride);
	},
	set PriceOverride(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute PriceOverride in SKURuleEngine.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._PriceOverride = val;
	},
	get PriceOverideSKU(){
		return this._PriceOverideSKU;
	},
	set PriceOverideSKU(val){
		this._PriceOverideSKU = val;
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
	get RegistrationStatus(){
		return this._RegistrationStatus;
	},
	set RegistrationStatus(val){
		this._RegistrationStatus = val;
	},
};

/************************************************************************************
* Retrieves all instances of SKURuleEngine SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "Action";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "Id";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	orderByMap = kony.sync.formOrderByClause("SKURuleEngine",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of SKURuleEngine present in local database.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllCount function");
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of SKURuleEngine using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getCount->successcallback");
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
* Creates a new instance of SKURuleEngine in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"SKURuleEngine",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "Id=" + valuestable.Id;
		pks["Id"] = {key:"Id",value:valuestable.Id};
		com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of SKURuleEngine in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].Action = "Action_0";
*		valuesArray[0].Id = 0;
*		valuesArray[0].AgeGreaterThan = 0;
*		valuesArray[0].IsDefault = true;
*		valuesArray[0].MemberType = "MemberType_0";
*		valuesArray[0].MissedWeekMax = 0;
*		valuesArray[0].MissedWeekMin = 0;
*		valuesArray[0].SKU = "SKU_0";
*		valuesArray[0].Subscription = "Subscription_0";
*		valuesArray[0].Transact = "Transact_0";
*		valuesArray[0].WeightDiff = "WeightDiff_0";
*		valuesArray[0].LocationId = "LocationId_0";
*		valuesArray[0].LocationNum = "LocationNum_0";
*		valuesArray[0].isPrepaid = true;
*		valuesArray[0].PriceOverride = true;
*		valuesArray[0].PriceOverideSKU = "PriceOverideSKU_0";
*		valuesArray[0].Locale = "Locale_0";
*		valuesArray[0].CountryID = "CountryID_0";
*		valuesArray[0].RegistrationStatus = "RegistrationStatus_0";
*		valuesArray[1] = {};
*		valuesArray[1].Action = "Action_1";
*		valuesArray[1].Id = 1;
*		valuesArray[1].AgeGreaterThan = 1;
*		valuesArray[1].IsDefault = true;
*		valuesArray[1].MemberType = "MemberType_1";
*		valuesArray[1].MissedWeekMax = 1;
*		valuesArray[1].MissedWeekMin = 1;
*		valuesArray[1].SKU = "SKU_1";
*		valuesArray[1].Subscription = "Subscription_1";
*		valuesArray[1].Transact = "Transact_1";
*		valuesArray[1].WeightDiff = "WeightDiff_1";
*		valuesArray[1].LocationId = "LocationId_1";
*		valuesArray[1].LocationNum = "LocationNum_1";
*		valuesArray[1].isPrepaid = true;
*		valuesArray[1].PriceOverride = true;
*		valuesArray[1].PriceOverideSKU = "PriceOverideSKU_1";
*		valuesArray[1].Locale = "Locale_1";
*		valuesArray[1].CountryID = "CountryID_1";
*		valuesArray[1].RegistrationStatus = "RegistrationStatus_1";
*		valuesArray[2] = {};
*		valuesArray[2].Action = "Action_2";
*		valuesArray[2].Id = 2;
*		valuesArray[2].AgeGreaterThan = 2;
*		valuesArray[2].IsDefault = true;
*		valuesArray[2].MemberType = "MemberType_2";
*		valuesArray[2].MissedWeekMax = 2;
*		valuesArray[2].MissedWeekMin = 2;
*		valuesArray[2].SKU = "SKU_2";
*		valuesArray[2].Subscription = "Subscription_2";
*		valuesArray[2].Transact = "Transact_2";
*		valuesArray[2].WeightDiff = "WeightDiff_2";
*		valuesArray[2].LocationId = "LocationId_2";
*		valuesArray[2].LocationNum = "LocationNum_2";
*		valuesArray[2].isPrepaid = true;
*		valuesArray[2].PriceOverride = true;
*		valuesArray[2].PriceOverideSKU = "PriceOverideSKU_2";
*		valuesArray[2].Locale = "Locale_2";
*		valuesArray[2].CountryID = "CountryID_2";
*		valuesArray[2].RegistrationStatus = "RegistrationStatus_2";
*		com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"SKURuleEngine",errorcallback,true)===false){
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
				errMsg = "Id=" + valuestable.Id;
				pks["Id"] = {key:"Id",value:valuestable.Id};
				var wcs = [];
				if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates SKURuleEngine using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"SKURuleEngine",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates SKURuleEngine(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"SKURuleEngine",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPKTable());
	}
};

/************************************************************************************
* Updates SKURuleEngine(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.Action = "Action_updated0";
*		inputArray[0].changeSet.AgeGreaterThan = 0;
*		inputArray[0].changeSet.IsDefault = true;
*		inputArray[0].changeSet.MemberType = "MemberType_updated0";
*		inputArray[0].whereClause = "where Id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.Action = "Action_updated1";
*		inputArray[1].changeSet.AgeGreaterThan = 1;
*		inputArray[1].changeSet.IsDefault = true;
*		inputArray[1].changeSet.MemberType = "MemberType_updated1";
*		inputArray[1].whereClause = "where Id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.Action = "Action_updated2";
*		inputArray[2].changeSet.AgeGreaterThan = 2;
*		inputArray[2].changeSet.IsDefault = true;
*		inputArray[2].changeSet.MemberType = "MemberType_updated2";
*		inputArray[2].whereClause = "where Id = 2";
*		com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "MEGDevelopment";
	var tbname = "SKURuleEngine";
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
			if(kony.sync.attributeValidation(valuestable,"SKURuleEngine",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes SKURuleEngine using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function SKURuleEngineTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK->SKURuleEngine_PKPresent successcallback");
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
	
	function SKURuleEngineErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function SKURuleEngineSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, SKURuleEngineTransactionCallback, SKURuleEngineSuccessCallback, SKURuleEngineErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes SKURuleEngine(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove("where Action like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SKURuleEngine_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SKURuleEngine_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove->SKURuleEngine_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SKURuleEngine_removeTransactioncallback, SKURuleEngine_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes SKURuleEngine using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function SKURuleEngineTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK -> SKURuleEngineTransactionCallback");
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
	
	function SKURuleEngineErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK -> SKURuleEngineErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function SKURuleEngineSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK -> SKURuleEngineSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, SKURuleEngineTransactionCallback, SKURuleEngineSuccessCallback, SKURuleEngineErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes SKURuleEngine(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SKURuleEngine_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SKURuleEngine_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove->SKURuleEngine_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SKURuleEngine_removeTransactioncallback, SKURuleEngine_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves SKURuleEngine using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves SKURuleEngine(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.find("where Action like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of SKURuleEngine with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of SKURuleEngine matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of SKURuleEngine pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SKURuleEngine pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SKURuleEngine deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to SKURuleEngine in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to SKURuleEngine's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether SKURuleEngine's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether SKURuleEngine's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.removeCascade function");
	var tbname = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName();
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


com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine();
			obj.Action = res[i].Action;
			obj.Id = res[i].Id;
			obj.AgeGreaterThan = res[i].AgeGreaterThan;
			obj.IsDefault = res[i].IsDefault;
			obj.MemberType = res[i].MemberType;
			obj.MissedWeekMax = res[i].MissedWeekMax;
			obj.MissedWeekMin = res[i].MissedWeekMin;
			obj.SKU = res[i].SKU;
			obj.Subscription = res[i].Subscription;
			obj.Transact = res[i].Transact;
			obj.WeightDiff = res[i].WeightDiff;
			obj.LocalTime = res[i].LocalTime;
			obj.LocationId = res[i].LocationId;
			obj.LocationNum = res[i].LocationNum;
			obj.isPrepaid = res[i].isPrepaid;
			obj.PriceOverride = res[i].PriceOverride;
			obj.PriceOverideSKU = res[i].PriceOverideSKU;
			obj.Locale = res[i].Locale;
			obj.CountryID = res[i].CountryID;
			obj.RegistrationStatus = res[i].RegistrationStatus;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.filterAttributes function");
	var attributeTable = {};
	attributeTable.Action = "Action";
	attributeTable.Id = "Id";
	attributeTable.AgeGreaterThan = "AgeGreaterThan";
	attributeTable.IsDefault = "IsDefault";
	attributeTable.MemberType = "MemberType";
	attributeTable.MissedWeekMax = "MissedWeekMax";
	attributeTable.MissedWeekMin = "MissedWeekMin";
	attributeTable.SKU = "SKU";
	attributeTable.Subscription = "Subscription";
	attributeTable.Transact = "Transact";
	attributeTable.WeightDiff = "WeightDiff";
	attributeTable.LocationId = "LocationId";
	attributeTable.LocationNum = "LocationNum";
	attributeTable.isPrepaid = "isPrepaid";
	attributeTable.PriceOverride = "PriceOverride";
	attributeTable.PriceOverideSKU = "PriceOverideSKU";
	attributeTable.Locale = "Locale";
	attributeTable.CountryID = "CountryID";
	attributeTable.RegistrationStatus = "RegistrationStatus";

	var PKTable = {};
	PKTable.Id = {}
	PKTable.Id.name = "Id";
	PKTable.Id.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SKURuleEngine. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SKURuleEngine. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SKURuleEngine. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.Action = this.Action;
	if(isInsert===true){
		valuesTable.Id = this.Id;
	}
	valuesTable.AgeGreaterThan = this.AgeGreaterThan;
	valuesTable.IsDefault = this.IsDefault;
	valuesTable.MemberType = this.MemberType;
	valuesTable.MissedWeekMax = this.MissedWeekMax;
	valuesTable.MissedWeekMin = this.MissedWeekMin;
	valuesTable.SKU = this.SKU;
	valuesTable.Subscription = this.Subscription;
	valuesTable.Transact = this.Transact;
	valuesTable.WeightDiff = this.WeightDiff;
	valuesTable.LocationId = this.LocationId;
	valuesTable.LocationNum = this.LocationNum;
	valuesTable.isPrepaid = this.isPrepaid;
	valuesTable.PriceOverride = this.PriceOverride;
	valuesTable.PriceOverideSKU = this.PriceOverideSKU;
	valuesTable.Locale = this.Locale;
	valuesTable.CountryID = this.CountryID;
	valuesTable.RegistrationStatus = this.RegistrationStatus;
	return valuesTable;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.prototype.getPKTable function");
	var pkTable = {};
	pkTable.Id = {key:"Id",value:this.Id};
	return pkTable;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getPKTable function");
	var pkTable = [];
	pkTable.push("Id");
	return pkTable;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key Id not specified in  " + opName + "  an item in SKURuleEngine");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"SKURuleEngine")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.Id)){
			if(!kony.sync.isNull(pks.Id.value)){
				wc.key = "Id";
				wc.value = pks.Id.value;
			}
			else{
				wc.key = "Id";
				wc.value = pks.Id;
			}
		}else{
			sync.log.error("Primary Key Id not specified in  " + opName + "  an item in SKURuleEngine");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"SKURuleEngine")));
			return false;
		}
	}
	else{
		wc.key = "Id";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.validateNull function");
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.validateNullInsert function");
	if(kony.sync.isNull(valuestable.Id) || kony.sync.isEmptyString(valuestable.Id)){
		sync.log.error("Mandatory attribute Id is missing for the SyncObject SKURuleEngine.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SKURuleEngine", "Id")));
		return false;
	}
	return true;
};
com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getRelationshipMap function");
	var r1 = {};
	return relationshipMap;
};

com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.getTableName = function(){
	return "SKURuleEngine";
};


// **********************************End SKURuleEngine's helper methods************************