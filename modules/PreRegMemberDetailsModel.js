//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:15 UTC 2018PreRegMemberDetails*******************
// **********************************Start PreRegMemberDetails's helper methods************************
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
* Creates new PreRegMemberDetails
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails = function(){
	this.ID = null;
	this.FirstName = null;
	this.LastName = null;
	this.Gender = null;
	this.Height = null;
	this.DateOfBirth = null;
	this.Email = null;
	this.Phone = null;
	this.HomeAdd1 = null;
	this.HomeAdd2 = null;
	this.HomeStateId = null;
	this.HomeCity = null;
	this.PostalCode = null;
	this.MtngOccrID = null;
	this.MeetingDate = null;
	this.CountryID = null;
	this.Locale = null;
	this.LocalTime = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype = {
	get ID(){
		return this._ID;
	},
	set ID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ID in PreRegMemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ID = val;
	},
	get FirstName(){
		return this._FirstName;
	},
	set FirstName(val){
		this._FirstName = val;
	},
	get LastName(){
		return this._LastName;
	},
	set LastName(val){
		this._LastName = val;
	},
	get Gender(){
		return this._Gender;
	},
	set Gender(val){
		this._Gender = val;
	},
	get Height(){
		return this._Height;
	},
	set Height(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Height in PreRegMemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Height = val;
	},
	get DateOfBirth(){
		return this._DateOfBirth;
	},
	set DateOfBirth(val){
		this._DateOfBirth = val;
	},
	get Email(){
		return this._Email;
	},
	set Email(val){
		this._Email = val;
	},
	get Phone(){
		return this._Phone;
	},
	set Phone(val){
		this._Phone = val;
	},
	get HomeAdd1(){
		return this._HomeAdd1;
	},
	set HomeAdd1(val){
		this._HomeAdd1 = val;
	},
	get HomeAdd2(){
		return this._HomeAdd2;
	},
	set HomeAdd2(val){
		this._HomeAdd2 = val;
	},
	get HomeStateId(){
		return this._HomeStateId;
	},
	set HomeStateId(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute HomeStateId in PreRegMemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HomeStateId = val;
	},
	get HomeCity(){
		return this._HomeCity;
	},
	set HomeCity(val){
		this._HomeCity = val;
	},
	get PostalCode(){
		return this._PostalCode;
	},
	set PostalCode(val){
		this._PostalCode = val;
	},
	get MtngOccrID(){
		return this._MtngOccrID;
	},
	set MtngOccrID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute MtngOccrID in PreRegMemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._MtngOccrID = val;
	},
	get MeetingDate(){
		return this._MeetingDate;
	},
	set MeetingDate(val){
		this._MeetingDate = val;
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
	get LocalTime(){
		return this._LocalTime;
	},
	set LocalTime(val){
		this._LocalTime = val;
	},
};

/************************************************************************************
* Retrieves all instances of PreRegMemberDetails SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "ID";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "FirstName";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	orderByMap = kony.sync.formOrderByClause("PreRegMemberDetails",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of PreRegMemberDetails present in local database.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAllCount function");
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of PreRegMemberDetails using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getCount->successcallback");
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
* Creates a new instance of PreRegMemberDetails in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"PreRegMemberDetails",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of PreRegMemberDetails in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].FirstName = "FirstName_0";
*		valuesArray[0].LastName = "LastName_0";
*		valuesArray[0].Gender = "Gender_0";
*		valuesArray[0].Height = 0;
*		valuesArray[0].DateOfBirth = 0;
*		valuesArray[0].Email = "Email_0";
*		valuesArray[0].Phone = "Phone_0";
*		valuesArray[0].HomeAdd1 = "HomeAdd1_0";
*		valuesArray[0].HomeAdd2 = "HomeAdd2_0";
*		valuesArray[0].HomeStateId = 0;
*		valuesArray[0].HomeCity = "HomeCity_0";
*		valuesArray[0].PostalCode = "PostalCode_0";
*		valuesArray[0].MtngOccrID = 0;
*		valuesArray[0].MeetingDate = 0;
*		valuesArray[0].CountryID = "CountryID_0";
*		valuesArray[0].Locale = "Locale_0";
*		valuesArray[1] = {};
*		valuesArray[1].FirstName = "FirstName_1";
*		valuesArray[1].LastName = "LastName_1";
*		valuesArray[1].Gender = "Gender_1";
*		valuesArray[1].Height = 1;
*		valuesArray[1].DateOfBirth = 1;
*		valuesArray[1].Email = "Email_1";
*		valuesArray[1].Phone = "Phone_1";
*		valuesArray[1].HomeAdd1 = "HomeAdd1_1";
*		valuesArray[1].HomeAdd2 = "HomeAdd2_1";
*		valuesArray[1].HomeStateId = 1;
*		valuesArray[1].HomeCity = "HomeCity_1";
*		valuesArray[1].PostalCode = "PostalCode_1";
*		valuesArray[1].MtngOccrID = 1;
*		valuesArray[1].MeetingDate = 1;
*		valuesArray[1].CountryID = "CountryID_1";
*		valuesArray[1].Locale = "Locale_1";
*		valuesArray[2] = {};
*		valuesArray[2].FirstName = "FirstName_2";
*		valuesArray[2].LastName = "LastName_2";
*		valuesArray[2].Gender = "Gender_2";
*		valuesArray[2].Height = 2;
*		valuesArray[2].DateOfBirth = 2;
*		valuesArray[2].Email = "Email_2";
*		valuesArray[2].Phone = "Phone_2";
*		valuesArray[2].HomeAdd1 = "HomeAdd1_2";
*		valuesArray[2].HomeAdd2 = "HomeAdd2_2";
*		valuesArray[2].HomeStateId = 2;
*		valuesArray[2].HomeCity = "HomeCity_2";
*		valuesArray[2].PostalCode = "PostalCode_2";
*		valuesArray[2].MtngOccrID = 2;
*		valuesArray[2].MeetingDate = 2;
*		valuesArray[2].CountryID = "CountryID_2";
*		valuesArray[2].Locale = "Locale_2";
*		com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"PreRegMemberDetails",errorcallback,true)===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates PreRegMemberDetails using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"PreRegMemberDetails",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates PreRegMemberDetails(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"PreRegMemberDetails",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPKTable());
	}
};

/************************************************************************************
* Updates PreRegMemberDetails(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.FirstName = "FirstName_updated0";
*		inputArray[0].changeSet.LastName = "LastName_updated0";
*		inputArray[0].changeSet.Gender = "Gender_updated0";
*		inputArray[0].changeSet.Height = 0;
*		inputArray[0].whereClause = "where ID = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.FirstName = "FirstName_updated1";
*		inputArray[1].changeSet.LastName = "LastName_updated1";
*		inputArray[1].changeSet.Gender = "Gender_updated1";
*		inputArray[1].changeSet.Height = 1;
*		inputArray[1].whereClause = "where ID = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.FirstName = "FirstName_updated2";
*		inputArray[2].changeSet.LastName = "LastName_updated2";
*		inputArray[2].changeSet.Gender = "Gender_updated2";
*		inputArray[2].changeSet.Height = 2;
*		inputArray[2].whereClause = "where ID = 2";
*		com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "100001691c94a7df6";
	var tbname = "PreRegMemberDetails";
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
			if(kony.sync.attributeValidation(valuestable,"PreRegMemberDetails",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes PreRegMemberDetails using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function PreRegMemberDetailsTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK->PreRegMemberDetails_PKPresent successcallback");
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
	
	function PreRegMemberDetailsErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function PreRegMemberDetailsSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, PreRegMemberDetailsTransactionCallback, PreRegMemberDetailsSuccessCallback, PreRegMemberDetailsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes PreRegMemberDetails(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove("where FirstName like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function PreRegMemberDetails_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function PreRegMemberDetails_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove->PreRegMemberDetails_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, PreRegMemberDetails_removeTransactioncallback, PreRegMemberDetails_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes PreRegMemberDetails using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function PreRegMemberDetailsTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK -> PreRegMemberDetailsTransactionCallback");
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
	
	function PreRegMemberDetailsErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK -> PreRegMemberDetailsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function PreRegMemberDetailsSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK -> PreRegMemberDetailsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, PreRegMemberDetailsTransactionCallback, PreRegMemberDetailsSuccessCallback, PreRegMemberDetailsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes PreRegMemberDetails(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function PreRegMemberDetails_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function PreRegMemberDetails_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove->PreRegMemberDetails_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, PreRegMemberDetails_removeTransactioncallback, PreRegMemberDetails_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves PreRegMemberDetails using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves PreRegMemberDetails(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.find("where FirstName like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of PreRegMemberDetails with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of PreRegMemberDetails matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of PreRegMemberDetails pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of PreRegMemberDetails pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of PreRegMemberDetails deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to PreRegMemberDetails in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to PreRegMemberDetails's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether PreRegMemberDetails's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether PreRegMemberDetails's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.removeCascade function");
	var tbname = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName();
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


com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails();
			obj.ID = res[i].ID;
			obj.FirstName = res[i].FirstName;
			obj.LastName = res[i].LastName;
			obj.Gender = res[i].Gender;
			obj.Height = res[i].Height;
			obj.DateOfBirth = res[i].DateOfBirth;
			obj.Email = res[i].Email;
			obj.Phone = res[i].Phone;
			obj.HomeAdd1 = res[i].HomeAdd1;
			obj.HomeAdd2 = res[i].HomeAdd2;
			obj.HomeStateId = res[i].HomeStateId;
			obj.HomeCity = res[i].HomeCity;
			obj.PostalCode = res[i].PostalCode;
			obj.MtngOccrID = res[i].MtngOccrID;
			obj.MeetingDate = res[i].MeetingDate;
			obj.CountryID = res[i].CountryID;
			obj.Locale = res[i].Locale;
			obj.LocalTime = res[i].LocalTime;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.filterAttributes function");
	var attributeTable = {};
	attributeTable.ID = "ID";
	attributeTable.FirstName = "FirstName";
	attributeTable.LastName = "LastName";
	attributeTable.Gender = "Gender";
	attributeTable.Height = "Height";
	attributeTable.DateOfBirth = "DateOfBirth";
	attributeTable.Email = "Email";
	attributeTable.Phone = "Phone";
	attributeTable.HomeAdd1 = "HomeAdd1";
	attributeTable.HomeAdd2 = "HomeAdd2";
	attributeTable.HomeStateId = "HomeStateId";
	attributeTable.HomeCity = "HomeCity";
	attributeTable.PostalCode = "PostalCode";
	attributeTable.MtngOccrID = "MtngOccrID";
	attributeTable.MeetingDate = "MeetingDate";
	attributeTable.CountryID = "CountryID";
	attributeTable.Locale = "Locale";

	var PKTable = {};
	PKTable.ID = {}
	PKTable.ID.name = "ID";
	PKTable.ID.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject PreRegMemberDetails. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject PreRegMemberDetails. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject PreRegMemberDetails. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.ID = this.ID;
	}
	valuesTable.FirstName = this.FirstName;
	valuesTable.LastName = this.LastName;
	valuesTable.Gender = this.Gender;
	valuesTable.Height = this.Height;
	valuesTable.DateOfBirth = this.DateOfBirth;
	valuesTable.Email = this.Email;
	valuesTable.Phone = this.Phone;
	valuesTable.HomeAdd1 = this.HomeAdd1;
	valuesTable.HomeAdd2 = this.HomeAdd2;
	valuesTable.HomeStateId = this.HomeStateId;
	valuesTable.HomeCity = this.HomeCity;
	valuesTable.PostalCode = this.PostalCode;
	valuesTable.MtngOccrID = this.MtngOccrID;
	valuesTable.MeetingDate = this.MeetingDate;
	valuesTable.CountryID = this.CountryID;
	valuesTable.Locale = this.Locale;
	return valuesTable;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.prototype.getPKTable function");
	var pkTable = {};
	pkTable.ID = {key:"ID",value:this.ID};
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getPKTable function");
	var pkTable = [];
	pkTable.push("ID");
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key ID not specified in  " + opName + "  an item in PreRegMemberDetails");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ID",opName,"PreRegMemberDetails")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
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
			sync.log.error("Primary Key ID not specified in  " + opName + "  an item in PreRegMemberDetails");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ID",opName,"PreRegMemberDetails")));
			return false;
		}
	}
	else{
		wc.key = "ID";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.validateNull function");
	if(valuestable.FirstName!==undefined){
		if(kony.sync.isNull(valuestable.FirstName) || kony.sync.isEmptyString(valuestable.FirstName)){
			sync.log.error("Mandatory attribute FirstName is missing for the SyncObject PreRegMemberDetails.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "FirstName")));
			return false;
		}
	}
	if(valuestable.LastName!==undefined){
		if(kony.sync.isNull(valuestable.LastName) || kony.sync.isEmptyString(valuestable.LastName)){
			sync.log.error("Mandatory attribute LastName is missing for the SyncObject PreRegMemberDetails.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "LastName")));
			return false;
		}
	}
	if(valuestable.Gender!==undefined){
		if(kony.sync.isNull(valuestable.Gender) || kony.sync.isEmptyString(valuestable.Gender)){
			sync.log.error("Mandatory attribute Gender is missing for the SyncObject PreRegMemberDetails.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Gender")));
			return false;
		}
	}
	if(valuestable.Height!==undefined){
		if(kony.sync.isNull(valuestable.Height) || kony.sync.isEmptyString(valuestable.Height)){
			sync.log.error("Mandatory attribute Height is missing for the SyncObject PreRegMemberDetails.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Height")));
			return false;
		}
	}
	if(valuestable.DateOfBirth!==undefined){
		if(kony.sync.isNull(valuestable.DateOfBirth) || kony.sync.isEmptyString(valuestable.DateOfBirth)){
			sync.log.error("Mandatory attribute DateOfBirth is missing for the SyncObject PreRegMemberDetails.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "DateOfBirth")));
			return false;
		}
	}
	if(valuestable.Email!==undefined){
		if(kony.sync.isNull(valuestable.Email) || kony.sync.isEmptyString(valuestable.Email)){
			sync.log.error("Mandatory attribute Email is missing for the SyncObject PreRegMemberDetails.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Email")));
			return false;
		}
	}
	if(valuestable.Phone!==undefined){
		if(kony.sync.isNull(valuestable.Phone) || kony.sync.isEmptyString(valuestable.Phone)){
			sync.log.error("Mandatory attribute Phone is missing for the SyncObject PreRegMemberDetails.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Phone")));
			return false;
		}
	}
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.validateNullInsert function");
	if(kony.sync.isNull(valuestable.FirstName) || kony.sync.isEmptyString(valuestable.FirstName)){
		sync.log.error("Mandatory attribute FirstName is missing for the SyncObject PreRegMemberDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "FirstName")));
		return false;
	}
	if(kony.sync.isNull(valuestable.LastName) || kony.sync.isEmptyString(valuestable.LastName)){
		sync.log.error("Mandatory attribute LastName is missing for the SyncObject PreRegMemberDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "LastName")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Gender) || kony.sync.isEmptyString(valuestable.Gender)){
		sync.log.error("Mandatory attribute Gender is missing for the SyncObject PreRegMemberDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Gender")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Height) || kony.sync.isEmptyString(valuestable.Height)){
		sync.log.error("Mandatory attribute Height is missing for the SyncObject PreRegMemberDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Height")));
		return false;
	}
	if(kony.sync.isNull(valuestable.DateOfBirth) || kony.sync.isEmptyString(valuestable.DateOfBirth)){
		sync.log.error("Mandatory attribute DateOfBirth is missing for the SyncObject PreRegMemberDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "DateOfBirth")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Email) || kony.sync.isEmptyString(valuestable.Email)){
		sync.log.error("Mandatory attribute Email is missing for the SyncObject PreRegMemberDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Email")));
		return false;
	}
	if(kony.sync.isNull(valuestable.Phone) || kony.sync.isEmptyString(valuestable.Phone)){
		sync.log.error("Mandatory attribute Phone is missing for the SyncObject PreRegMemberDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "PreRegMemberDetails", "Phone")));
		return false;
	}
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getTableName = function(){
	return "PreRegMemberDetails";
};




// **********************************End PreRegMemberDetails's helper methods************************