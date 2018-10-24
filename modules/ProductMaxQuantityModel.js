//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:13 UTC 2018ProductMaxQuantity*******************
// **********************************Start ProductMaxQuantity's helper methods************************
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
* Creates new ProductMaxQuantity
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity = function(){
	this.Id = null;
	this.ProductSKU = null;
	this.MaxQuantity = null;
	this.LocalTime = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype = {
	get Id(){
		return this._Id;
	},
	set Id(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Id in ProductMaxQuantity.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Id = val;
	},
	get ProductSKU(){
		return this._ProductSKU;
	},
	set ProductSKU(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ProductSKU in ProductMaxQuantity.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ProductSKU = val;
	},
	get MaxQuantity(){
		return this._MaxQuantity;
	},
	set MaxQuantity(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute MaxQuantity in ProductMaxQuantity.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._MaxQuantity = val;
	},
	get LocalTime(){
		return this._LocalTime;
	},
	set LocalTime(val){
		this._LocalTime = val;
	},
};

/************************************************************************************
* Retrieves all instances of ProductMaxQuantity SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "Id";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "ProductSKU";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	orderByMap = kony.sync.formOrderByClause("ProductMaxQuantity",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of ProductMaxQuantity present in local database.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllCount function");
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of ProductMaxQuantity using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getCount->successcallback");
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
* Creates a new instance of ProductMaxQuantity in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"ProductMaxQuantity",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getRelationshipMap(relationshipMap,valuestable);
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
		com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of ProductMaxQuantity in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].Id = 0;
*		valuesArray[0].ProductSKU = 0;
*		valuesArray[0].MaxQuantity = 0;
*		valuesArray[1] = {};
*		valuesArray[1].Id = 1;
*		valuesArray[1].ProductSKU = 1;
*		valuesArray[1].MaxQuantity = 1;
*		valuesArray[2] = {};
*		valuesArray[2].Id = 2;
*		valuesArray[2].ProductSKU = 2;
*		valuesArray[2].MaxQuantity = 2;
*		com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"ProductMaxQuantity",errorcallback,true)===false){
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
				if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates ProductMaxQuantity using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"ProductMaxQuantity",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates ProductMaxQuantity(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"ProductMaxQuantity",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPKTable());
	}
};

/************************************************************************************
* Updates ProductMaxQuantity(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.ProductSKU = 0;
*		inputArray[0].changeSet.MaxQuantity = 0;
*		inputArray[0].whereClause = "where Id = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.ProductSKU = 1;
*		inputArray[1].changeSet.MaxQuantity = 1;
*		inputArray[1].whereClause = "where Id = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.ProductSKU = 2;
*		inputArray[2].changeSet.MaxQuantity = 2;
*		inputArray[2].whereClause = "where Id = 2";
*		com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "100001691c94a7df6";
	var tbname = "ProductMaxQuantity";
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
			if(kony.sync.attributeValidation(valuestable,"ProductMaxQuantity",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes ProductMaxQuantity using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function ProductMaxQuantityTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK->ProductMaxQuantity_PKPresent successcallback");
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
	
	function ProductMaxQuantityErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function ProductMaxQuantitySuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, ProductMaxQuantityTransactionCallback, ProductMaxQuantitySuccessCallback, ProductMaxQuantityErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes ProductMaxQuantity(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove("where Id = 1", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function ProductMaxQuantity_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function ProductMaxQuantity_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove->ProductMaxQuantity_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, ProductMaxQuantity_removeTransactioncallback, ProductMaxQuantity_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes ProductMaxQuantity using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function ProductMaxQuantityTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK -> ProductMaxQuantityTransactionCallback");
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
	
	function ProductMaxQuantityErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK -> ProductMaxQuantityErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function ProductMaxQuantitySuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK -> ProductMaxQuantitySuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, ProductMaxQuantityTransactionCallback, ProductMaxQuantitySuccessCallback, ProductMaxQuantityErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes ProductMaxQuantity(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function ProductMaxQuantity_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function ProductMaxQuantity_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove->ProductMaxQuantity_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, ProductMaxQuantity_removeTransactioncallback, ProductMaxQuantity_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves ProductMaxQuantity using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves ProductMaxQuantity(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.find("where Id = 1", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of ProductMaxQuantity with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of ProductMaxQuantity matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of ProductMaxQuantity pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of ProductMaxQuantity pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of ProductMaxQuantity deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to ProductMaxQuantity in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to ProductMaxQuantity's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether ProductMaxQuantity's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether ProductMaxQuantity's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.removeCascade function");
	var tbname = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName();
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


com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity();
			obj.Id = res[i].Id;
			obj.ProductSKU = res[i].ProductSKU;
			obj.MaxQuantity = res[i].MaxQuantity;
			obj.LocalTime = res[i].LocalTime;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.filterAttributes function");
	var attributeTable = {};
	attributeTable.Id = "Id";
	attributeTable.ProductSKU = "ProductSKU";
	attributeTable.MaxQuantity = "MaxQuantity";

	var PKTable = {};
	PKTable.Id = {}
	PKTable.Id.name = "Id";
	PKTable.Id.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject ProductMaxQuantity. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject ProductMaxQuantity. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject ProductMaxQuantity. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.Id = this.Id;
	}
	valuesTable.ProductSKU = this.ProductSKU;
	valuesTable.MaxQuantity = this.MaxQuantity;
	return valuesTable;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.prototype.getPKTable function");
	var pkTable = {};
	pkTable.Id = {key:"Id",value:this.Id};
	return pkTable;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getPKTable function");
	var pkTable = [];
	pkTable.push("Id");
	return pkTable;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key Id not specified in  " + opName + "  an item in ProductMaxQuantity");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"ProductMaxQuantity")));
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
			sync.log.error("Primary Key Id not specified in  " + opName + "  an item in ProductMaxQuantity");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"ProductMaxQuantity")));
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

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.validateNull function");
	return true;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.validateNullInsert function");
	if(kony.sync.isNull(valuestable.Id) || kony.sync.isEmptyString(valuestable.Id)){
		sync.log.error("Mandatory attribute Id is missing for the SyncObject ProductMaxQuantity.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductMaxQuantity", "Id")));
		return false;
	}
	return true;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.getTableName = function(){
	return "ProductMaxQuantity";
};




// **********************************End ProductMaxQuantity's helper methods************************