//****************Sync Version:Sync-GA-6.0.3_v201505141956_r3*******************
// ****************Generated On Fri Aug 07 10:24:01 IST 2015SkuLookup*******************
// **********************************Start SkuLookup's helper methods************************
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
if(typeof(com.kony.WeightWatchers.LookUpTables)=== "undefined"){ com.kony.WeightWatchers.LookUpTables = {}; }

/************************************************************************************
* Creates new SkuLookup
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup = function(){
	this.action = null;
	this.addedsku = null;
	this.agetype = null;
	this.changedsku = null;
	this.discountsku = null;
	this.flowid = null;
	this.id = null;
	this.localtime = null;
	this.membertype = null;
	this.sourcesku = null;
	this.subtype = null;
	this.summarizedsku = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype = {
	get action(){
		return this._action;
	},
	set action(val){
		this._action = val;
	},
	get addedsku(){
		return this._addedsku;
	},
	set addedsku(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute addedsku in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._addedsku = val;
	},
	get agetype(){
		return this._agetype;
	},
	set agetype(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute agetype in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._agetype = val;
	},
	get changedsku(){
		return this._changedsku;
	},
	set changedsku(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute changedsku in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._changedsku = val;
	},
	get discountsku(){
		return this._discountsku;
	},
	set discountsku(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute discountsku in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._discountsku = val;
	},
	get flowid(){
		return this._flowid;
	},
	set flowid(val){
		this._flowid = val;
	},
	get id(){
		return this._id;
	},
	set id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute id in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._id = val;
	},
	get localtime(){
		return this._localtime;
	},
	set localtime(val){
		this._localtime = val;
	},
	get membertype(){
		return this._membertype;
	},
	set membertype(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute membertype in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._membertype = val;
	},
	get sourcesku(){
		return this._sourcesku;
	},
	set sourcesku(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute sourcesku in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._sourcesku = val;
	},
	get subtype(){
		return this._subtype;
	},
	set subtype(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute subtype in SkuLookup.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._subtype = val;
	},
	get summarizedsku(){
		return this._summarizedsku;
	},
	set summarizedsku(val){
		this._summarizedsku = val;
	},
};

/************************************************************************************
* Retrieves all instances of SkuLookup SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "action";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "addedsku";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.LookUpTables.SkuLookup.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	orderByMap = kony.sync.formOrderByClause("SkuLookup",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of SkuLookup present in local database.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllCount function");
	com.kony.WeightWatchers.LookUpTables.SkuLookup.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of SkuLookup using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getCount->successcallback");
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
* Creates a new instance of SkuLookup in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.LookUpTables.SkuLookup.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"SkuLookup",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.LookUpTables.SkuLookup.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "id=" + valuestable.id;
		pks["id"] = {key:"id",value:valuestable.id};
		com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of SkuLookup in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].action = "action_0";
*		valuesArray[0].addedsku = 0;
*		valuesArray[0].agetype = 0;
*		valuesArray[0].changedsku = 0;
*		valuesArray[0].discountsku = 0;
*		valuesArray[0].flowid = "flowid_0";
*		valuesArray[0].id = 0;
*		valuesArray[0].membertype = 0;
*		valuesArray[0].sourcesku = 0;
*		valuesArray[0].subtype = 0;
*		valuesArray[0].summarizedsku = "summarizedsku_0";
*		valuesArray[1] = {};
*		valuesArray[1].action = "action_1";
*		valuesArray[1].addedsku = 1;
*		valuesArray[1].agetype = 1;
*		valuesArray[1].changedsku = 1;
*		valuesArray[1].discountsku = 1;
*		valuesArray[1].flowid = "flowid_1";
*		valuesArray[1].id = 1;
*		valuesArray[1].membertype = 1;
*		valuesArray[1].sourcesku = 1;
*		valuesArray[1].subtype = 1;
*		valuesArray[1].summarizedsku = "summarizedsku_1";
*		valuesArray[2] = {};
*		valuesArray[2].action = "action_2";
*		valuesArray[2].addedsku = 2;
*		valuesArray[2].agetype = 2;
*		valuesArray[2].changedsku = 2;
*		valuesArray[2].discountsku = 2;
*		valuesArray[2].flowid = "flowid_2";
*		valuesArray[2].id = 2;
*		valuesArray[2].membertype = 2;
*		valuesArray[2].sourcesku = 2;
*		valuesArray[2].subtype = 2;
*		valuesArray[2].summarizedsku = "summarizedsku_2";
*		com.kony.WeightWatchers.LookUpTables.SkuLookup.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"SkuLookup",errorcallback,true)===false){
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
				errMsg = "id=" + valuestable.id;
				pks["id"] = {key:"id",value:valuestable.id};
				var wcs = [];
				if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.LookUpTables.SkuLookup.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates SkuLookup using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.LookUpTables.SkuLookup.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"SkuLookup",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.LookUpTables.SkuLookup.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates SkuLookup(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"SkuLookup",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.LookUpTables.SkuLookup.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.LookUpTables.SkuLookup.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.LookUpTables.SkuLookup.getPKTable());
	}
};

/************************************************************************************
* Updates SkuLookup(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.action = "action_updated0";
*		inputArray[0].changeSet.addedsku = 0;
*		inputArray[0].changeSet.agetype = 0;
*		inputArray[0].changeSet.changedsku = 0;
*		inputArray[0].whereClause = "where id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.action = "action_updated1";
*		inputArray[1].changeSet.addedsku = 1;
*		inputArray[1].changeSet.agetype = 1;
*		inputArray[1].changeSet.changedsku = 1;
*		inputArray[1].whereClause = "where id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.action = "action_updated2";
*		inputArray[2].changeSet.addedsku = 2;
*		inputArray[2].changeSet.agetype = 2;
*		inputArray[2].changeSet.changedsku = 2;
*		inputArray[2].whereClause = "where id = 2";
*		com.kony.WeightWatchers.LookUpTables.SkuLookup.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "MEGDevREST";
	var tbname = "SkuLookup";
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
			if(kony.sync.attributeValidation(valuestable,"SkuLookup",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.LookUpTables.SkuLookup.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.LookUpTables.SkuLookup.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.LookUpTables.SkuLookup.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes SkuLookup using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function SkuLookupTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK->SkuLookup_PKPresent successcallback");
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
	
	function SkuLookupErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function SkuLookupSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, SkuLookupTransactionCallback, SkuLookupSuccessCallback, SkuLookupErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes SkuLookup(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.LookUpTables.SkuLookup.remove("where action like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SkuLookup_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SkuLookup_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.remove->SkuLookup_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SkuLookup_removeTransactioncallback, SkuLookup_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes SkuLookup using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function SkuLookupTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK -> SkuLookupTransactionCallback");
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
	
	function SkuLookupErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK -> SkuLookupErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function SkuLookupSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK -> SkuLookupSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, SkuLookupTransactionCallback, SkuLookupSuccessCallback, SkuLookupErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes SkuLookup(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SkuLookup_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SkuLookup_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.remove->SkuLookup_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SkuLookup_removeTransactioncallback, SkuLookup_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves SkuLookup using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves SkuLookup(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.LookUpTables.SkuLookup.find("where action like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of SkuLookup with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of SkuLookup matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of SkuLookup pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SkuLookup pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SkuLookup deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to SkuLookup in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to SkuLookup's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether SkuLookup's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether SkuLookup's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.LookUpTables.SkuLookup.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.removeCascade function");
	var tbname = com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName();
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


com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.LookUpTables.SkuLookup();
			obj.action = res[i].action;
			obj.addedsku = res[i].addedsku;
			obj.agetype = res[i].agetype;
			obj.changedsku = res[i].changedsku;
			obj.discountsku = res[i].discountsku;
			obj.flowid = res[i].flowid;
			obj.id = res[i].id;
			obj.localtime = res[i].localtime;
			obj.membertype = res[i].membertype;
			obj.sourcesku = res[i].sourcesku;
			obj.subtype = res[i].subtype;
			obj.summarizedsku = res[i].summarizedsku;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.filterAttributes function");
	var attributeTable = {};
	attributeTable.action = "action";
	attributeTable.addedsku = "addedsku";
	attributeTable.agetype = "agetype";
	attributeTable.changedsku = "changedsku";
	attributeTable.discountsku = "discountsku";
	attributeTable.flowid = "flowid";
	attributeTable.id = "id";
	attributeTable.membertype = "membertype";
	attributeTable.sourcesku = "sourcesku";
	attributeTable.subtype = "subtype";
	attributeTable.summarizedsku = "summarizedsku";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SkuLookup. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SkuLookup. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SkuLookup. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.LookUpTables.SkuLookup.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.LookUpTables.SkuLookup.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.action = this.action;
	valuesTable.addedsku = this.addedsku;
	valuesTable.agetype = this.agetype;
	valuesTable.changedsku = this.changedsku;
	valuesTable.discountsku = this.discountsku;
	valuesTable.flowid = this.flowid;
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.membertype = this.membertype;
	valuesTable.sourcesku = this.sourcesku;
	valuesTable.subtype = this.subtype;
	valuesTable.summarizedsku = this.summarizedsku;
	return valuesTable;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	return pkTable;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	return pkTable;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key id not specified in  " + opName + "  an item in SkuLookup");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"SkuLookup")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.id)){
			if(!kony.sync.isNull(pks.id.value)){
				wc.key = "id";
				wc.value = pks.id.value;
			}
			else{
				wc.key = "id";
				wc.value = pks.id;
			}
		}else{
			sync.log.error("Primary Key id not specified in  " + opName + "  an item in SkuLookup");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"SkuLookup")));
			return false;
		}
	}
	else{
		wc.key = "id";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.validateNull function");
	return true;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.validateNullInsert function");
	if(kony.sync.isNull(valuestable.id) || kony.sync.isEmptyString(valuestable.id)){
		sync.log.error("Mandatory attribute id is missing for the SyncObject SkuLookup.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SkuLookup", "id")));
		return false;
	}
	return true;
};
com.kony.WeightWatchers.LookUpTables.SkuLookup.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.SkuLookup.getRelationshipMap function");
	var r1 = {};
	return relationshipMap;
};

com.kony.WeightWatchers.LookUpTables.SkuLookup.getTableName = function(){
	return "SkuLookup";
};


// **********************************End SkuLookup's helper methods************************