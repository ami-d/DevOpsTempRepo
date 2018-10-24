//****************Sync Version:Sync-GA-6.0.3_v201505141956_r3*******************
// ****************Generated On Thu May 18 12:35:28 IST 2017SalePayments*******************
// **********************************Start SalePayments's helper methods************************
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
* Creates new SalePayments
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments = function(){
	this.Amount = null;
	this.PaymentDate = null;
	this.Type = null;
	this.SaleTransactnId = null;
	this.LastUpdated = null;
	this.ID = null;
	this.RefundAmount = null;
	this.IsRefundAmount = null;
	this.Locale = null;
	this.CountryID = null;
	this.AuthorizationCode = null;
	this.CCLastFourDigits = null;
	this.CardType = null;
	this.ExpirationDate = null;
	this.HasToken = null;
	this.InvoiceNumber = null;
	this.ReferenceNumber = null;
	this.RequestId = null;
	this.Token = null;
	this.TokenExpirationDate = null;
	this.TransactionStatus = null;
	this.TransactionType = null;
	this.IsTrack = null;
	this.CardSignature = null;
	this.IsIngenicoPayment = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype = {
	get Amount(){
		return this._Amount;
	},
	set Amount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute Amount in SalePayments.\nExpected:\"double\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Amount = val;
	},
	get PaymentDate(){
		return this._PaymentDate;
	},
	set PaymentDate(val){
		this._PaymentDate = val;
	},
	get Type(){
		return this._Type;
	},
	set Type(val){
		this._Type = val;
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
	get ID(){
		return this._ID;
	},
	set ID(val){
		this._ID = val;
	},
	get RefundAmount(){
		return this._RefundAmount;
	},
	set RefundAmount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute RefundAmount in SalePayments.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._RefundAmount = val;
	},
	get IsRefundAmount(){
		return kony.sync.getBoolean(this._IsRefundAmount);
	},
	set IsRefundAmount(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsRefundAmount in SalePayments.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsRefundAmount = val;
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
	get AuthorizationCode(){
		return this._AuthorizationCode;
	},
	set AuthorizationCode(val){
		this._AuthorizationCode = val;
	},
	get CCLastFourDigits(){
		return this._CCLastFourDigits;
	},
	set CCLastFourDigits(val){
		this._CCLastFourDigits = val;
	},
	get CardType(){
		return this._CardType;
	},
	set CardType(val){
		this._CardType = val;
	},
	get ExpirationDate(){
		return this._ExpirationDate;
	},
	set ExpirationDate(val){
		this._ExpirationDate = val;
	},
	get HasToken(){
		return kony.sync.getBoolean(this._HasToken);
	},
	set HasToken(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute HasToken in SalePayments.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HasToken = val;
	},
	get InvoiceNumber(){
		return this._InvoiceNumber;
	},
	set InvoiceNumber(val){
		this._InvoiceNumber = val;
	},
	get ReferenceNumber(){
		return this._ReferenceNumber;
	},
	set ReferenceNumber(val){
		this._ReferenceNumber = val;
	},
	get RequestId(){
		return this._RequestId;
	},
	set RequestId(val){
		this._RequestId = val;
	},
	get Token(){
		return this._Token;
	},
	set Token(val){
		this._Token = val;
	},
	get TokenExpirationDate(){
		return this._TokenExpirationDate;
	},
	set TokenExpirationDate(val){
		this._TokenExpirationDate = val;
	},
	get TransactionStatus(){
		return this._TransactionStatus;
	},
	set TransactionStatus(val){
		this._TransactionStatus = val;
	},
	get TransactionType(){
		return this._TransactionType;
	},
	set TransactionType(val){
		this._TransactionType = val;
	},
	get IsTrack(){
		return kony.sync.getBoolean(this._IsTrack);
	},
	set IsTrack(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsTrack in SalePayments.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsTrack = val;
	},
	get CardSignature(){
		return this._CardSignature;
	},
	set CardSignature(val){
		this._CardSignature = val;
	},
	get IsIngenicoPayment(){
		return kony.sync.getBoolean(this._IsIngenicoPayment);
	},
	set IsIngenicoPayment(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsIngenicoPayment in SalePayments.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsIngenicoPayment = val;
	},
};

/************************************************************************************
* Retrieves all instances of SalePayments SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "Amount";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "PaymentDate";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	orderByMap = kony.sync.formOrderByClause("SalePayments",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of SalePayments present in local database.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAllCount function");
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of SalePayments using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getCount->successcallback");
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
* Creates a new instance of SalePayments in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"SalePayments",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of SalePayments in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].Amount = 0;
*		valuesArray[0].PaymentDate = 0;
*		valuesArray[0].Type = "Type_0";
*		valuesArray[0].SaleTransactnId = "SaleTransactnId_0";
*		valuesArray[0].RefundAmount = 0;
*		valuesArray[0].IsRefundAmount = true;
*		valuesArray[0].Locale = "Locale_0";
*		valuesArray[0].CountryID = "CountryID_0";
*		valuesArray[0].AuthorizationCode = "AuthorizationCode_0";
*		valuesArray[0].CCLastFourDigits = "CCLastFourDigits_0";
*		valuesArray[0].CardType = "CardType_0";
*		valuesArray[0].ExpirationDate = 0;
*		valuesArray[0].HasToken = true;
*		valuesArray[0].InvoiceNumber = "InvoiceNumber_0";
*		valuesArray[0].ReferenceNumber = "ReferenceNumber_0";
*		valuesArray[0].RequestId = "RequestId_0";
*		valuesArray[0].Token = "Token_0";
*		valuesArray[0].TokenExpirationDate = 0;
*		valuesArray[0].TransactionStatus = "TransactionStatus_0";
*		valuesArray[0].TransactionType = "TransactionType_0";
*		valuesArray[0].IsTrack = true;
*		valuesArray[0].CardSignature = "CardSignature_0";
*		valuesArray[0].IsIngenicoPayment = true;
*		valuesArray[1] = {};
*		valuesArray[1].Amount = 1;
*		valuesArray[1].PaymentDate = 1;
*		valuesArray[1].Type = "Type_1";
*		valuesArray[1].SaleTransactnId = "SaleTransactnId_1";
*		valuesArray[1].RefundAmount = 1;
*		valuesArray[1].IsRefundAmount = true;
*		valuesArray[1].Locale = "Locale_1";
*		valuesArray[1].CountryID = "CountryID_1";
*		valuesArray[1].AuthorizationCode = "AuthorizationCode_1";
*		valuesArray[1].CCLastFourDigits = "CCLastFourDigits_1";
*		valuesArray[1].CardType = "CardType_1";
*		valuesArray[1].ExpirationDate = 1;
*		valuesArray[1].HasToken = true;
*		valuesArray[1].InvoiceNumber = "InvoiceNumber_1";
*		valuesArray[1].ReferenceNumber = "ReferenceNumber_1";
*		valuesArray[1].RequestId = "RequestId_1";
*		valuesArray[1].Token = "Token_1";
*		valuesArray[1].TokenExpirationDate = 1;
*		valuesArray[1].TransactionStatus = "TransactionStatus_1";
*		valuesArray[1].TransactionType = "TransactionType_1";
*		valuesArray[1].IsTrack = true;
*		valuesArray[1].CardSignature = "CardSignature_1";
*		valuesArray[1].IsIngenicoPayment = true;
*		valuesArray[2] = {};
*		valuesArray[2].Amount = 2;
*		valuesArray[2].PaymentDate = 2;
*		valuesArray[2].Type = "Type_2";
*		valuesArray[2].SaleTransactnId = "SaleTransactnId_2";
*		valuesArray[2].RefundAmount = 2;
*		valuesArray[2].IsRefundAmount = true;
*		valuesArray[2].Locale = "Locale_2";
*		valuesArray[2].CountryID = "CountryID_2";
*		valuesArray[2].AuthorizationCode = "AuthorizationCode_2";
*		valuesArray[2].CCLastFourDigits = "CCLastFourDigits_2";
*		valuesArray[2].CardType = "CardType_2";
*		valuesArray[2].ExpirationDate = 2;
*		valuesArray[2].HasToken = true;
*		valuesArray[2].InvoiceNumber = "InvoiceNumber_2";
*		valuesArray[2].ReferenceNumber = "ReferenceNumber_2";
*		valuesArray[2].RequestId = "RequestId_2";
*		valuesArray[2].Token = "Token_2";
*		valuesArray[2].TokenExpirationDate = 2;
*		valuesArray[2].TransactionStatus = "TransactionStatus_2";
*		valuesArray[2].TransactionType = "TransactionType_2";
*		valuesArray[2].IsTrack = true;
*		valuesArray[2].CardSignature = "CardSignature_2";
*		valuesArray[2].IsIngenicoPayment = true;
*		com.kony.WeightWatchers.MemberSyncScope.SalePayments.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"SalePayments",errorcallback,true)===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates SalePayments using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"SalePayments",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates SalePayments(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"SalePayments",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPKTable());
	}
};

/************************************************************************************
* Updates SalePayments(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.Amount = 0;
*		inputArray[0].changeSet.PaymentDate = "PaymentDate_updated0";
*		inputArray[0].changeSet.Type = "Type_updated0";
*		inputArray[0].changeSet.SaleTransactnId = "SaleTransactnId_updated0";
*		inputArray[0].whereClause = "where ID = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.Amount = 1;
*		inputArray[1].changeSet.PaymentDate = "PaymentDate_updated1";
*		inputArray[1].changeSet.Type = "Type_updated1";
*		inputArray[1].changeSet.SaleTransactnId = "SaleTransactnId_updated1";
*		inputArray[1].whereClause = "where ID = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.Amount = 2;
*		inputArray[2].changeSet.PaymentDate = "PaymentDate_updated2";
*		inputArray[2].changeSet.Type = "Type_updated2";
*		inputArray[2].changeSet.SaleTransactnId = "SaleTransactnId_updated2";
*		inputArray[2].whereClause = "where ID = '2'";
*		com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "MEGDevelopment";
	var tbname = "SalePayments";
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
			if(kony.sync.attributeValidation(valuestable,"SalePayments",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes SalePayments using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function SalePaymentsTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK->SalePayments_PKPresent successcallback");
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
	
	function SalePaymentsErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function SalePaymentsSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, SalePaymentsTransactionCallback, SalePaymentsSuccessCallback, SalePaymentsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes SalePayments(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove("where PaymentDate like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SalePayments_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SalePayments_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove->SalePayments_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SalePayments_removeTransactioncallback, SalePayments_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes SalePayments using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function SalePaymentsTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK -> SalePaymentsTransactionCallback");
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
	
	function SalePaymentsErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK -> SalePaymentsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function SalePaymentsSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK -> SalePaymentsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, SalePaymentsTransactionCallback, SalePaymentsSuccessCallback, SalePaymentsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes SalePayments(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function SalePayments_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function SalePayments_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove->SalePayments_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, SalePayments_removeTransactioncallback, SalePayments_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves SalePayments using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves SalePayments(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.MemberSyncScope.SalePayments.find("where PaymentDate like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of SalePayments with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of SalePayments matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of SalePayments pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SalePayments pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of SalePayments deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to SalePayments in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to SalePayments's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether SalePayments's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether SalePayments's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.isRecordPendingForUpload->successcallback function");
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
com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeCascade function");
	var tbname = com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName();
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


com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.MemberSyncScope.SalePayments();
			obj.Amount = res[i].Amount;
			obj.PaymentDate = res[i].PaymentDate;
			obj.Type = res[i].Type;
			obj.SaleTransactnId = res[i].SaleTransactnId;
			obj.LastUpdated = res[i].LastUpdated;
			obj.ID = res[i].ID;
			obj.RefundAmount = res[i].RefundAmount;
			obj.IsRefundAmount = res[i].IsRefundAmount;
			obj.Locale = res[i].Locale;
			obj.CountryID = res[i].CountryID;
			obj.AuthorizationCode = res[i].AuthorizationCode;
			obj.CCLastFourDigits = res[i].CCLastFourDigits;
			obj.CardType = res[i].CardType;
			obj.ExpirationDate = res[i].ExpirationDate;
			obj.HasToken = res[i].HasToken;
			obj.InvoiceNumber = res[i].InvoiceNumber;
			obj.ReferenceNumber = res[i].ReferenceNumber;
			obj.RequestId = res[i].RequestId;
			obj.Token = res[i].Token;
			obj.TokenExpirationDate = res[i].TokenExpirationDate;
			obj.TransactionStatus = res[i].TransactionStatus;
			obj.TransactionType = res[i].TransactionType;
			obj.IsTrack = res[i].IsTrack;
			obj.CardSignature = res[i].CardSignature;
			obj.IsIngenicoPayment = res[i].IsIngenicoPayment;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.filterAttributes function");
	var attributeTable = {};
	attributeTable.Amount = "Amount";
	attributeTable.PaymentDate = "PaymentDate";
	attributeTable.Type = "Type";
	attributeTable.SaleTransactnId = "SaleTransactnId";
	attributeTable.ID = "ID";
	attributeTable.RefundAmount = "RefundAmount";
	attributeTable.IsRefundAmount = "IsRefundAmount";
	attributeTable.Locale = "Locale";
	attributeTable.CountryID = "CountryID";
	attributeTable.AuthorizationCode = "AuthorizationCode";
	attributeTable.CCLastFourDigits = "CCLastFourDigits";
	attributeTable.CardType = "CardType";
	attributeTable.ExpirationDate = "ExpirationDate";
	attributeTable.HasToken = "HasToken";
	attributeTable.InvoiceNumber = "InvoiceNumber";
	attributeTable.ReferenceNumber = "ReferenceNumber";
	attributeTable.RequestId = "RequestId";
	attributeTable.Token = "Token";
	attributeTable.TokenExpirationDate = "TokenExpirationDate";
	attributeTable.TransactionStatus = "TransactionStatus";
	attributeTable.TransactionType = "TransactionType";
	attributeTable.IsTrack = "IsTrack";
	attributeTable.CardSignature = "CardSignature";
	attributeTable.IsIngenicoPayment = "IsIngenicoPayment";

	var PKTable = {};
	PKTable.ID = {}
	PKTable.ID.name = "ID";
	PKTable.ID.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject SalePayments. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject SalePayments. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject SalePayments. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.MemberSyncScope.SalePayments.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.SalePayments.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.Amount = this.Amount;
	valuesTable.PaymentDate = this.PaymentDate;
	valuesTable.Type = this.Type;
	valuesTable.SaleTransactnId = this.SaleTransactnId;
	if(isInsert===true){
		valuesTable.ID = this.ID;
	}
	valuesTable.RefundAmount = this.RefundAmount;
	valuesTable.IsRefundAmount = this.IsRefundAmount;
	valuesTable.Locale = this.Locale;
	valuesTable.CountryID = this.CountryID;
	valuesTable.AuthorizationCode = this.AuthorizationCode;
	valuesTable.CCLastFourDigits = this.CCLastFourDigits;
	valuesTable.CardType = this.CardType;
	valuesTable.ExpirationDate = this.ExpirationDate;
	valuesTable.HasToken = this.HasToken;
	valuesTable.InvoiceNumber = this.InvoiceNumber;
	valuesTable.ReferenceNumber = this.ReferenceNumber;
	valuesTable.RequestId = this.RequestId;
	valuesTable.Token = this.Token;
	valuesTable.TokenExpirationDate = this.TokenExpirationDate;
	valuesTable.TransactionStatus = this.TransactionStatus;
	valuesTable.TransactionType = this.TransactionType;
	valuesTable.IsTrack = this.IsTrack;
	valuesTable.CardSignature = this.CardSignature;
	valuesTable.IsIngenicoPayment = this.IsIngenicoPayment;
	return valuesTable;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.prototype.getPKTable function");
	var pkTable = {};
	pkTable.ID = {key:"ID",value:this.ID};
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getPKTable function");
	var pkTable = [];
	pkTable.push("ID");
	return pkTable;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key ID not specified in  " + opName + "  an item in SalePayments");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ID",opName,"SalePayments")));
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
			sync.log.error("Primary Key ID not specified in  " + opName + "  an item in SalePayments");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ID",opName,"SalePayments")));
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

com.kony.WeightWatchers.MemberSyncScope.SalePayments.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.validateNull function");
	if(valuestable.IsRefundAmount!==undefined){
		if(kony.sync.isNull(valuestable.IsRefundAmount) || kony.sync.isEmptyString(valuestable.IsRefundAmount)){
			sync.log.error("Mandatory attribute IsRefundAmount is missing for the SyncObject SalePayments.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SalePayments", "IsRefundAmount")));
			return false;
		}
	}
	return true;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.validateNullInsert function");
	if(kony.sync.isNull(valuestable.IsRefundAmount) || kony.sync.isEmptyString(valuestable.IsRefundAmount)){
		sync.log.error("Mandatory attribute IsRefundAmount is missing for the SyncObject SalePayments.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "SalePayments", "IsRefundAmount")));
		return false;
	}
	return true;
};
com.kony.WeightWatchers.MemberSyncScope.SalePayments.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.SalePayments.getRelationshipMap function");
	var r1 = {};
	if(!kony.sync.isNull(valuestable.SaleTransactnId)){
		if(relationshipMap.SaleDetails===undefined){
			relationshipMap.SaleDetails = [];
		}		
		r1 = {};
		r1.sourceAttribute = "SaleTransactnId";
		r1.foreignKeyAttribute = "SaleTransactnId";
		//relationshipMap.SaleDetails.targetAttributeValue = "'" + valuestable.SaleTransactnId + "'";
		r1.targetAttributeValue = "'" + valuestable.SaleTransactnId + "'";
		relationshipMap.SaleDetails.push(r1);
	}
	return relationshipMap;
};

com.kony.WeightWatchers.MemberSyncScope.SalePayments.getTableName = function(){
	return "SalePayments";
};


// **********************************End SalePayments's helper methods************************