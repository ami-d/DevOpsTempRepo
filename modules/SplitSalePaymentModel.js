//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:15 UTC 2018SplitSalePayment*******************
// **********************************Start SplitSalePayment's helper methods************************
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
* Creates new SplitSalePayment
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment = function(){
	this.SplitID = null;
	this.SplitType = null;
	this.SplitAmount = null;
	this.SplitNumber = null;
	this.SaleTransactnId = null;
	this.LastUpdated = null;
	this.CountryID = null;
	this.Locale = null;
	this.IsSplit = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype = {
	get SplitID(){
		return this._SplitID;
	},
	set SplitID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SplitID in SplitSalePayment.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SplitID = val;
	},
	get SplitType(){
		return this._SplitType;
	},
	set SplitType(val){
		this._SplitType = val;
	},
	get SplitAmount(){
		return this._SplitAmount;
	},
	set SplitAmount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SplitAmount in SplitSalePayment.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SplitAmount = val;
	},
	get SplitNumber(){
		return this._SplitNumber;
	},
	set SplitNumber(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute SplitNumber in SplitSalePayment.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._SplitNumber = val;
	},
	get SaleTransactnId(){
		return this._SaleTransactnId;
	},
	set SaleTransactnId(val){
		this._SaleTransactnId = val;
	},
	get LastUpdated(){
		return this._LastUpdated;
	},
	set LastUpdated(val){
		this._LastUpdated = val;
	},
	get CountryID(){
		return this._CountryID;
	},
	set CountryID(val){
		this._CountryID = val;
	},
	get Locale(){
		return this._Locale;
	},
	set Locale(val){
		this._Locale = val;
	},
	get IsSplit(){
		return this._IsSplit;
	},
	set IsSplit(val){
		this._IsSplit = val;
	},
};

/************************************************************************************
* Retrieves all instances of SplitSalePayment SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "SplitID";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "SplitType";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	orderByMap = kony.sync.formOrderByClause("SplitSalePayment",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of SplitSalePayment present in local database.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAllCount function");
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of SplitSalePayment using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getCount->successcallback");
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
* Creates a new instance of SplitSalePayment in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"SplitSalePayment",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of SplitSalePayment in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].SplitType = "SplitType_0";
*		valuesArray[0].SplitAmount = 0;
*		valuesArray[0].SplitNumber = 0;
*		valuesArray[0].SaleTransactnId = "SaleTransactnId_0";
*		valuesArray[0].CountryID = "CountryID_0";
*		valuesArray[0].Locale = "Locale_0";
*		valuesArray[0].IsSplit = "IsSplit_0";
*		valuesArray[1] = {};
*		valuesArray[1].SplitType = "SplitType_1";
*		valuesArray[1].SplitAmount = 1;
*		valuesArray[1].SplitNumber = 1;
*		valuesArray[1].SaleTransactnId = "SaleTransactnId_1";
*		valuesArray[1].CountryID = "CountryID_1";
*		valuesArray[1].Locale = "Locale_1";
*		valuesArray[1].IsSplit = "IsSplit_1";
*		valuesArray[2] = {};
*		valuesArray[2].SplitType = "SplitType_2";
*		valuesArray[2].SplitAmount = 2;
*		valuesArray[2].SplitNumber = 2;
*		valuesArray[2].SaleTransactnId = "SaleTransactnId_2";
*		valuesArray[2].CountryID = "CountryID_2";
*		valuesArray[2].Locale = "Locale_2";
*		valuesArray[2].IsSplit = "IsSplit_2";
*		com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"SplitSalePayment",errorcallback,true)===false){
				return;
			}

			newValuesArray[i] = valuestable;
		}
		valuesArray = newValuesArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
		var isError = false;
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.createAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
		else{
			if(isReferentialIntegrityFailure){
				kony.sync.verifyAndCallClosure(errorcallback, errObject);
			}
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates SplitSalePayment using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"SplitSalePayment",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates SplitSalePayment(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"SplitSalePayment",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPKTable());
	}
};

/************************************************************************************
* Updates SplitSalePayment(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.SplitType = "SplitType_updated0";
*		inputArray[0].changeSet.SplitAmount = 0;
*		inputArray[0].changeSet.SplitNumber = 0;
*		inputArray[0].changeSet.SaleTransactnId = "SaleTransactnId_updated0";
*		inputArray[0].whereClause = "where SplitID = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.SplitType = "SplitType_updated1";
*		inputArray[1].changeSet.SplitAmount = 1;
*		inputArray[1].changeSet.SplitNumber = 1;
*		inputArray[1].changeSet.SaleTransactnId = "SaleTransactnId_updated1";
*		inputArray[1].whereClause = "where SplitID = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.SplitType = "SplitType_updated2";
*		inputArray[2].changeSet.SplitAmount = 2;
*		inputArray[2].changeSet.SplitNumber = 2;
*		inputArray[2].changeSet.SaleTransactnId = "SaleTransactnId_updated2";
*		inputArray[2].whereClause = "where SplitID = 2";
*		com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "100001691c94a7df6";
	var tbname = "SplitSalePayment";
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
			if(kony.sync.attributeValidation(valuestable,"SplitSalePayment",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes SplitSalePayment using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function SplitSalePaymentTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK->SplitSalePayment_PKPresent successcallback");
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
	
	function SplitSalePaymentErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function SplitSalePaymentSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, SplitSalePaymentTransactionCallback, SplitSalePaymentSuccessCallback, SplitSalePaymentErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes SplitSalePayment(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove("where SplitType like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function SplitSalePayment_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SplitSalePayment_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove->SplitSalePayment_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SplitSalePayment_removeTransactioncallback, SplitSalePayment_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes SplitSalePayment using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function SplitSalePaymentTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK -> SplitSalePaymentTransactionCallback");
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
	
	function SplitSalePaymentErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK -> SplitSalePaymentErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function SplitSalePaymentSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK -> SplitSalePaymentSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, SplitSalePaymentTransactionCallback, SplitSalePaymentSuccessCallback, SplitSalePaymentErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes SplitSalePayment(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SplitSalePayment_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SplitSalePayment_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove->SplitSalePayment_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SplitSalePayment_removeTransactioncallback, SplitSalePayment_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves SplitSalePayment using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves SplitSalePayment(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.find("where SplitType like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of SplitSalePayment with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of SplitSalePayment matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of SplitSalePayment pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SplitSalePayment pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SplitSalePayment deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to SplitSalePayment in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to SplitSalePayment's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether SplitSalePayment's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether SplitSalePayment's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeCascade function");
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName();
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


com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment();
			obj.SplitID = res[i].SplitID;
			obj.SplitType = res[i].SplitType;
			obj.SplitAmount = res[i].SplitAmount;
			obj.SplitNumber = res[i].SplitNumber;
			obj.SaleTransactnId = res[i].SaleTransactnId;
			obj.LastUpdated = res[i].LastUpdated;
			obj.CountryID = res[i].CountryID;
			obj.Locale = res[i].Locale;
			obj.IsSplit = res[i].IsSplit;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.filterAttributes function");
	var attributeTable = {};
	attributeTable.SplitID = "SplitID";
	attributeTable.SplitType = "SplitType";
	attributeTable.SplitAmount = "SplitAmount";
	attributeTable.SplitNumber = "SplitNumber";
	attributeTable.SaleTransactnId = "SaleTransactnId";
	attributeTable.CountryID = "CountryID";
	attributeTable.Locale = "Locale";
	attributeTable.IsSplit = "IsSplit";

	var PKTable = {};
	PKTable.SplitID = {}
	PKTable.SplitID.name = "SplitID";
	PKTable.SplitID.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SplitSalePayment. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SplitSalePayment. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SplitSalePayment. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.SplitID = this.SplitID;
	}
	valuesTable.SplitType = this.SplitType;
	valuesTable.SplitAmount = this.SplitAmount;
	valuesTable.SplitNumber = this.SplitNumber;
	valuesTable.SaleTransactnId = this.SaleTransactnId;
	valuesTable.CountryID = this.CountryID;
	valuesTable.Locale = this.Locale;
	valuesTable.IsSplit = this.IsSplit;
	return valuesTable;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.prototype.getPKTable function");
	var pkTable = {};
	pkTable.SplitID = {key:"SplitID",value:this.SplitID};
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getPKTable function");
	var pkTable = [];
	pkTable.push("SplitID");
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key SplitID not specified in  " + opName + "  an item in SplitSalePayment");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("SplitID",opName,"SplitSalePayment")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.SplitID)){
			if(!kony.sync.isNull(pks.SplitID.value)){
				wc.key = "SplitID";
				wc.value = pks.SplitID.value;
			}
			else{
				wc.key = "SplitID";
				wc.value = pks.SplitID;
			}
		}else{
			sync.log.error("Primary Key SplitID not specified in  " + opName + "  an item in SplitSalePayment");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("SplitID",opName,"SplitSalePayment")));
			return false;
		}
	}
	else{
		wc.key = "SplitID";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.validateNull function");
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.validateNullInsert function");
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.SaleTransactnId)){
		r1.sourceAttribute.push("SaleTransactnId");
		r1.foreignKeyAttribute.push("SaleTransactnId");
		r1.targetAttributeValue.push("'" + valuestable.SaleTransactnId + "'");
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.SaleDetails===undefined){
			relationshipMap.SaleDetails = [];
		}
		relationshipMap.SaleDetails.push(r1);
	}
	

	return relationshipMap;
};


com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.getTableName = function(){
	return "SplitSalePayment";
};




// **********************************End SplitSalePayment's helper methods************************