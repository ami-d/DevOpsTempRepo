//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:16 UTC 2018TallyDiffReasonLookup*******************
// **********************************Start TallyDiffReasonLookup's helper methods************************
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
* Creates new TallyDiffReasonLookup
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup = function(){
	this.CountryID = null;
	this.TallyDiffReasonId = null;
	this.TallyDiffReasonDesc = null;
	this.LastUpdatedTS = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype = {
	get CountryID(){
		return this._CountryID;
	},
	set CountryID(val){
		this._CountryID = val;
	},
	get TallyDiffReasonId(){
		return this._TallyDiffReasonId;
	},
	set TallyDiffReasonId(val){
		this._TallyDiffReasonId = val;
	},
	get TallyDiffReasonDesc(){
		return this._TallyDiffReasonDesc;
	},
	set TallyDiffReasonDesc(val){
		this._TallyDiffReasonDesc = val;
	},
	get LastUpdatedTS(){
		return this._LastUpdatedTS;
	},
	set LastUpdatedTS(val){
		this._LastUpdatedTS = val;
	},
};

/************************************************************************************
* Retrieves all instances of TallyDiffReasonLookup SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "CountryID";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "TallyDiffReasonId";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	orderByMap = kony.sync.formOrderByClause("TallyDiffReasonLookup",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of TallyDiffReasonLookup present in local database.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllCount function");
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of TallyDiffReasonLookup using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getCount->successcallback");
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
* Creates a new instance of TallyDiffReasonLookup in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"TallyDiffReasonLookup",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "CountryID=" + valuestable.CountryID;
		pks["CountryID"] = {key:"CountryID",value:valuestable.CountryID};
		errMsg = errMsg + ", TallyDiffReasonId=" + valuestable.TallyDiffReasonId;
		pks["TallyDiffReasonId"] = {key:"TallyDiffReasonId",value:valuestable.TallyDiffReasonId};
		com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of TallyDiffReasonLookup in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].CountryID = "CountryID_0";
*		valuesArray[0].TallyDiffReasonId = "TallyDiffReasonId_0";
*		valuesArray[0].TallyDiffReasonDesc = "TallyDiffReasonDesc_0";
*		valuesArray[1] = {};
*		valuesArray[1].CountryID = "CountryID_1";
*		valuesArray[1].TallyDiffReasonId = "TallyDiffReasonId_1";
*		valuesArray[1].TallyDiffReasonDesc = "TallyDiffReasonDesc_1";
*		valuesArray[2] = {};
*		valuesArray[2].CountryID = "CountryID_2";
*		valuesArray[2].TallyDiffReasonId = "TallyDiffReasonId_2";
*		valuesArray[2].TallyDiffReasonDesc = "TallyDiffReasonDesc_2";
*		com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"TallyDiffReasonLookup",errorcallback,true)===false){
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
				errMsg = "CountryID=" + valuestable.CountryID;
				pks["CountryID"] = {key:"CountryID",value:valuestable.CountryID};
				errMsg = errMsg + ", TallyDiffReasonId=" + valuestable.TallyDiffReasonId;
				pks["TallyDiffReasonId"] = {key:"TallyDiffReasonId",value:valuestable.TallyDiffReasonId};
				var wcs = [];
				if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates TallyDiffReasonLookup using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"TallyDiffReasonLookup",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates TallyDiffReasonLookup(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"TallyDiffReasonLookup",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPKTable());
	}
};

/************************************************************************************
* Updates TallyDiffReasonLookup(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.TallyDiffReasonDesc = "TallyDiffReasonDesc_updated0";
*		inputArray[0].whereClause = "where CountryID = '0'";
*		inputArray[0].whereClause = "where TallyDiffReasonId = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.TallyDiffReasonDesc = "TallyDiffReasonDesc_updated1";
*		inputArray[1].whereClause = "where CountryID = '1'";
*		inputArray[1].whereClause = "where TallyDiffReasonId = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.TallyDiffReasonDesc = "TallyDiffReasonDesc_updated2";
*		inputArray[2].whereClause = "where CountryID = '2'";
*		inputArray[2].whereClause = "where TallyDiffReasonId = '2'";
*		com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "100001691c94a7df6";
	var tbname = "TallyDiffReasonLookup";
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
			if(kony.sync.attributeValidation(valuestable,"TallyDiffReasonLookup",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes TallyDiffReasonLookup using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function TallyDiffReasonLookupTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK->TallyDiffReasonLookup_PKPresent successcallback");
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
	
	function TallyDiffReasonLookupErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function TallyDiffReasonLookupSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, TallyDiffReasonLookupTransactionCallback, TallyDiffReasonLookupSuccessCallback, TallyDiffReasonLookupErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes TallyDiffReasonLookup(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove("where CountryID like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function TallyDiffReasonLookup_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function TallyDiffReasonLookup_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove->TallyDiffReasonLookup_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, TallyDiffReasonLookup_removeTransactioncallback, TallyDiffReasonLookup_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes TallyDiffReasonLookup using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function TallyDiffReasonLookupTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK -> TallyDiffReasonLookupTransactionCallback");
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
	
	function TallyDiffReasonLookupErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK -> TallyDiffReasonLookupErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function TallyDiffReasonLookupSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK -> TallyDiffReasonLookupSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, TallyDiffReasonLookupTransactionCallback, TallyDiffReasonLookupSuccessCallback, TallyDiffReasonLookupErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes TallyDiffReasonLookup(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function TallyDiffReasonLookup_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function TallyDiffReasonLookup_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove->TallyDiffReasonLookup_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, TallyDiffReasonLookup_removeTransactioncallback, TallyDiffReasonLookup_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves TallyDiffReasonLookup using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves TallyDiffReasonLookup(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.find("where CountryID like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of TallyDiffReasonLookup with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of TallyDiffReasonLookup matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of TallyDiffReasonLookup pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of TallyDiffReasonLookup pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of TallyDiffReasonLookup deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to TallyDiffReasonLookup in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to TallyDiffReasonLookup's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether TallyDiffReasonLookup's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether TallyDiffReasonLookup's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.removeCascade function");
	var tbname = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName();
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


com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup();
			obj.CountryID = res[i].CountryID;
			obj.TallyDiffReasonId = res[i].TallyDiffReasonId;
			obj.TallyDiffReasonDesc = res[i].TallyDiffReasonDesc;
			obj.LastUpdatedTS = res[i].LastUpdatedTS;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.filterAttributes function");
	var attributeTable = {};
	attributeTable.CountryID = "CountryID";
	attributeTable.TallyDiffReasonId = "TallyDiffReasonId";
	attributeTable.TallyDiffReasonDesc = "TallyDiffReasonDesc";

	var PKTable = {};
	PKTable.CountryID = {}
	PKTable.CountryID.name = "CountryID";
	PKTable.CountryID.isAutoGen = false;
	PKTable.TallyDiffReasonId = {}
	PKTable.TallyDiffReasonId.name = "TallyDiffReasonId";
	PKTable.TallyDiffReasonId.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject TallyDiffReasonLookup. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject TallyDiffReasonLookup. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject TallyDiffReasonLookup. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.CountryID = this.CountryID;
	}
	if(isInsert===true){
		valuesTable.TallyDiffReasonId = this.TallyDiffReasonId;
	}
	valuesTable.TallyDiffReasonDesc = this.TallyDiffReasonDesc;
	return valuesTable;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.prototype.getPKTable function");
	var pkTable = {};
	pkTable.CountryID = {key:"CountryID",value:this.CountryID};
	pkTable.TallyDiffReasonId = {key:"TallyDiffReasonId",value:this.TallyDiffReasonId};
	return pkTable;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getPKTable function");
	var pkTable = [];
	pkTable.push("CountryID");
	pkTable.push("TallyDiffReasonId");
	return pkTable;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.CountryID)){
		if(!kony.sync.isNull(pks.CountryID.value)){
			wc.key = "CountryID";
			wc.value = pks.CountryID.value;
		}
		else{
			wc.key = "CountryID";
			wc.value = pks.CountryID;
		}
	}else{
		sync.log.error("Primary Key CountryID not specified in " + opName + " an item in TallyDiffReasonLookup");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("CountryID",opName,"TallyDiffReasonLookup")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.TallyDiffReasonId)){
		if(!kony.sync.isNull(pks.TallyDiffReasonId.value)){
			wc.key = "TallyDiffReasonId";
			wc.value = pks.TallyDiffReasonId.value;
		}
		else{
			wc.key = "TallyDiffReasonId";
			wc.value = pks.TallyDiffReasonId;
		}
	}else{
		sync.log.error("Primary Key TallyDiffReasonId not specified in " + opName + " an item in TallyDiffReasonLookup");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("TallyDiffReasonId",opName,"TallyDiffReasonLookup")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.validateNull function");
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.validateNullInsert function");
	if(kony.sync.isNull(valuestable.CountryID) || kony.sync.isEmptyString(valuestable.CountryID)){
		sync.log.error("Mandatory attribute CountryID is missing for the SyncObject TallyDiffReasonLookup.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "TallyDiffReasonLookup", "CountryID")));
		return false;
	}
	if(kony.sync.isNull(valuestable.TallyDiffReasonId) || kony.sync.isEmptyString(valuestable.TallyDiffReasonId)){
		sync.log.error("Mandatory attribute TallyDiffReasonId is missing for the SyncObject TallyDiffReasonLookup.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "TallyDiffReasonLookup", "TallyDiffReasonId")));
		return false;
	}
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.getTableName = function(){
	return "TallyDiffReasonLookup";
};




// **********************************End TallyDiffReasonLookup's helper methods************************