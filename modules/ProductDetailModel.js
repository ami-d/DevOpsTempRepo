//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Tue Mar 27 10:00:16 UTC 2018ProductDetail*******************
// **********************************Start ProductDetail's helper methods************************
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
* Creates new ProductDetail
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail = function(){
	this.sku = null;
	this.UnitPrice = null;
	this.description = null;
	this.localTime = null;
	this.ProductID = null;
	this.Category = null;
	this.CategoryNo = null;
	this.IsActive = null;
	this.IsMonthlyPass = null;
	this.IsNewEnrollment = null;
	this.IsSeventeenWkPs = null;
	this.IsSeventeenWPEn = null;
	this.IsTaxIncluded = null;
	this.LocationID = null;
	this.PosProductType = null;
	this.UnitPriceTax = null;
	this.Type = null;
	this.IsFeaturedProduct = null;
	this.ProductCategoryDesc = null;
	this.UPC = null;
	this.Locale = null;
	this.CountryID = null;
	this.TaxRate = null;
	this.IsPrepaymentPlan = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype = {
	get sku(){
		return this._sku;
	},
	set sku(val){
		this._sku = val;
	},
	get UnitPrice(){
		return this._UnitPrice;
	},
	set UnitPrice(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute UnitPrice in ProductDetail.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._UnitPrice = val;
	},
	get description(){
		return this._description;
	},
	set description(val){
		this._description = val;
	},
	get localTime(){
		return this._localTime;
	},
	set localTime(val){
		this._localTime = val;
	},
	get ProductID(){
		return this._ProductID;
	},
	set ProductID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ProductID in ProductDetail.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ProductID = val;
	},
	get Category(){
		return this._Category;
	},
	set Category(val){
		this._Category = val;
	},
	get CategoryNo(){
		return this._CategoryNo;
	},
	set CategoryNo(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute CategoryNo in ProductDetail.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._CategoryNo = val;
	},
	get IsActive(){
		return kony.sync.getBoolean(this._IsActive)+"";
	},
	set IsActive(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsActive in ProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsActive = val;
	},
	get IsMonthlyPass(){
		return kony.sync.getBoolean(this._IsMonthlyPass)+"";
	},
	set IsMonthlyPass(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsMonthlyPass in ProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsMonthlyPass = val;
	},
	get IsNewEnrollment(){
		return kony.sync.getBoolean(this._IsNewEnrollment)+"";
	},
	set IsNewEnrollment(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsNewEnrollment in ProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsNewEnrollment = val;
	},
	get IsSeventeenWkPs(){
		return kony.sync.getBoolean(this._IsSeventeenWkPs)+"";
	},
	set IsSeventeenWkPs(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsSeventeenWkPs in ProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsSeventeenWkPs = val;
	},
	get IsSeventeenWPEn(){
		return kony.sync.getBoolean(this._IsSeventeenWPEn)+"";
	},
	set IsSeventeenWPEn(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsSeventeenWPEn in ProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsSeventeenWPEn = val;
	},
	get IsTaxIncluded(){
		return kony.sync.getBoolean(this._IsTaxIncluded)+"";
	},
	set IsTaxIncluded(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsTaxIncluded in ProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsTaxIncluded = val;
	},
	get LocationID(){
		return this._LocationID;
	},
	set LocationID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute LocationID in ProductDetail.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._LocationID = val;
	},
	get PosProductType(){
		return this._PosProductType;
	},
	set PosProductType(val){
		this._PosProductType = val;
	},
	get UnitPriceTax(){
		return this._UnitPriceTax;
	},
	set UnitPriceTax(val){
		this._UnitPriceTax = val;
	},
	get Type(){
		return this._Type;
	},
	set Type(val){
		this._Type = val;
	},
	get IsFeaturedProduct(){
		return kony.sync.getBoolean(this._IsFeaturedProduct)+"";
	},
	set IsFeaturedProduct(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsFeaturedProduct in ProductDetail.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsFeaturedProduct = val;
	},
	get ProductCategoryDesc(){
		return this._ProductCategoryDesc;
	},
	set ProductCategoryDesc(val){
		this._ProductCategoryDesc = val;
	},
	get UPC(){
		return this._UPC;
	},
	set UPC(val){
		this._UPC = val;
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
	get TaxRate(){
		return this._TaxRate;
	},
	set TaxRate(val){
		this._TaxRate = val;
	},
	get IsPrepaymentPlan(){
		return this._IsPrepaymentPlan;
	},
	set IsPrepaymentPlan(val){
		this._IsPrepaymentPlan = val;
	},
};

/************************************************************************************
* Retrieves all instances of ProductDetail SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "sku";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "UnitPrice";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	orderByMap = kony.sync.formOrderByClause("ProductDetail",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of ProductDetail present in local database.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllCount function");
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of ProductDetail using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCount->successcallback");
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
* Creates a new instance of ProductDetail in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"ProductDetail",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "ProductID=" + valuestable.ProductID;
		pks["ProductID"] = {key:"ProductID",value:valuestable.ProductID};
		errMsg = errMsg + ", LocationID=" + valuestable.LocationID;
		pks["LocationID"] = {key:"LocationID",value:valuestable.LocationID};
		com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of ProductDetail in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].sku = "sku_0";
*		valuesArray[0].UnitPrice = 0;
*		valuesArray[0].description = "description_0";
*		valuesArray[0].ProductID = 0;
*		valuesArray[0].Category = "Category_0";
*		valuesArray[0].CategoryNo = 0;
*		valuesArray[0].IsActive = true;
*		valuesArray[0].IsMonthlyPass = true;
*		valuesArray[0].IsNewEnrollment = true;
*		valuesArray[0].IsSeventeenWkPs = true;
*		valuesArray[0].IsSeventeenWPEn = true;
*		valuesArray[0].IsTaxIncluded = true;
*		valuesArray[0].LocationID = 0;
*		valuesArray[0].PosProductType = "PosProductType_0";
*		valuesArray[0].UnitPriceTax = "UnitPriceTax_0";
*		valuesArray[0].Type = "Type_0";
*		valuesArray[0].IsFeaturedProduct = true;
*		valuesArray[0].ProductCategoryDesc = "ProductCategoryDesc_0";
*		valuesArray[0].UPC = "UPC_0";
*		valuesArray[0].Locale = "Locale_0";
*		valuesArray[0].CountryID = "CountryID_0";
*		valuesArray[0].TaxRate = "TaxRate_0";
*		valuesArray[0].IsPrepaymentPlan = "IsPrepaymentPlan_0";
*		valuesArray[1] = {};
*		valuesArray[1].sku = "sku_1";
*		valuesArray[1].UnitPrice = 1;
*		valuesArray[1].description = "description_1";
*		valuesArray[1].ProductID = 1;
*		valuesArray[1].Category = "Category_1";
*		valuesArray[1].CategoryNo = 1;
*		valuesArray[1].IsActive = true;
*		valuesArray[1].IsMonthlyPass = true;
*		valuesArray[1].IsNewEnrollment = true;
*		valuesArray[1].IsSeventeenWkPs = true;
*		valuesArray[1].IsSeventeenWPEn = true;
*		valuesArray[1].IsTaxIncluded = true;
*		valuesArray[1].LocationID = 1;
*		valuesArray[1].PosProductType = "PosProductType_1";
*		valuesArray[1].UnitPriceTax = "UnitPriceTax_1";
*		valuesArray[1].Type = "Type_1";
*		valuesArray[1].IsFeaturedProduct = true;
*		valuesArray[1].ProductCategoryDesc = "ProductCategoryDesc_1";
*		valuesArray[1].UPC = "UPC_1";
*		valuesArray[1].Locale = "Locale_1";
*		valuesArray[1].CountryID = "CountryID_1";
*		valuesArray[1].TaxRate = "TaxRate_1";
*		valuesArray[1].IsPrepaymentPlan = "IsPrepaymentPlan_1";
*		valuesArray[2] = {};
*		valuesArray[2].sku = "sku_2";
*		valuesArray[2].UnitPrice = 2;
*		valuesArray[2].description = "description_2";
*		valuesArray[2].ProductID = 2;
*		valuesArray[2].Category = "Category_2";
*		valuesArray[2].CategoryNo = 2;
*		valuesArray[2].IsActive = true;
*		valuesArray[2].IsMonthlyPass = true;
*		valuesArray[2].IsNewEnrollment = true;
*		valuesArray[2].IsSeventeenWkPs = true;
*		valuesArray[2].IsSeventeenWPEn = true;
*		valuesArray[2].IsTaxIncluded = true;
*		valuesArray[2].LocationID = 2;
*		valuesArray[2].PosProductType = "PosProductType_2";
*		valuesArray[2].UnitPriceTax = "UnitPriceTax_2";
*		valuesArray[2].Type = "Type_2";
*		valuesArray[2].IsFeaturedProduct = true;
*		valuesArray[2].ProductCategoryDesc = "ProductCategoryDesc_2";
*		valuesArray[2].UPC = "UPC_2";
*		valuesArray[2].Locale = "Locale_2";
*		valuesArray[2].CountryID = "CountryID_2";
*		valuesArray[2].TaxRate = "TaxRate_2";
*		valuesArray[2].IsPrepaymentPlan = "IsPrepaymentPlan_2";
*		com.kony.WeightWatchers.ProductSyncScope.ProductDetail.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"ProductDetail",errorcallback,true)===false){
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
				errMsg = "ProductID=" + valuestable.ProductID;
				pks["ProductID"] = {key:"ProductID",value:valuestable.ProductID};
				errMsg = errMsg + ", LocationID=" + valuestable.LocationID;
				pks["LocationID"] = {key:"LocationID",value:valuestable.LocationID};
				var wcs = [];
				if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates ProductDetail using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"ProductDetail",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates ProductDetail(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"ProductDetail",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPKTable());
	}
};

/************************************************************************************
* Updates ProductDetail(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.sku = "sku_updated0";
*		inputArray[0].changeSet.UnitPrice = 0;
*		inputArray[0].changeSet.description = "description_updated0";
*		inputArray[0].changeSet.Category = "Category_updated0";
*		inputArray[0].whereClause = "where ProductID = 0";
*		inputArray[0].whereClause = "where LocationID = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.sku = "sku_updated1";
*		inputArray[1].changeSet.UnitPrice = 1;
*		inputArray[1].changeSet.description = "description_updated1";
*		inputArray[1].changeSet.Category = "Category_updated1";
*		inputArray[1].whereClause = "where ProductID = 1";
*		inputArray[1].whereClause = "where LocationID = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.sku = "sku_updated2";
*		inputArray[2].changeSet.UnitPrice = 2;
*		inputArray[2].changeSet.description = "description_updated2";
*		inputArray[2].changeSet.Category = "Category_updated2";
*		inputArray[2].whereClause = "where ProductID = 2";
*		inputArray[2].whereClause = "where LocationID = 2";
*		com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "100001691c94a7df6";
	var tbname = "ProductDetail";
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
			if(kony.sync.attributeValidation(valuestable,"ProductDetail",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes ProductDetail using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function ProductDetailTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK->ProductDetail_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("ProductID");
			targetAttributes.push("ProductID");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.ProductSyncScope.OfferDetail.removeCascade,"OfferDetail",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
		var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
	}
	
	function ProductDetailErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function ProductDetailSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, ProductDetailTransactionCallback, ProductDetailSuccessCallback, ProductDetailErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes ProductDetail(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove("where sku like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function ProductDetail_removeTransactioncallback(tx){
			wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("ProductID");
			targetAttributes.push("ProductID");
 			record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
            if (record === false) {
                isError = true;
                return;
            }
	if(record !== null){	
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.ProductSyncScope.OfferDetail.removeCascade, "OfferDetail", true, errorcallback, markForUpload, record, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
	}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function ProductDetail_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove->ProductDetail_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, ProductDetail_removeTransactioncallback, ProductDetail_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes ProductDetail using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function ProductDetailTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK -> ProductDetailTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("ProductID");
			targetAttributes.push("ProductID");
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.ProductSyncScope.OfferDetail.removeCascade,"OfferDetail",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function ProductDetailErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK -> ProductDetailErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function ProductDetailSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK -> ProductDetailSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, ProductDetailTransactionCallback, ProductDetailSuccessCallback, ProductDetailErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes ProductDetail(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function ProductDetail_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("ProductID");
			targetAttributes.push("ProductID");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.ProductSyncScope.OfferDetail.removeCascade, "OfferDetail", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function ProductDetail_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove->ProductDetail_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, ProductDetail_removeTransactioncallback, ProductDetail_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves ProductDetail using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves ProductDetail(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.ProductSyncScope.ProductDetail.find("where sku like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of ProductDetail with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of ProductDetail matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of ProductDetail pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of ProductDetail pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of ProductDetail deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to ProductDetail in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to ProductDetail's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether ProductDetail's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether ProductDetail's record  
* with given primary key is pending for upload
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	var wcs = [] ;
	var flag;
	if(com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of OfferDetail related to ProductDetail
* with given ProductID from local database.
*************************************************************************************/


com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getOfferDetailWithProductID  = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getOfferDetailWithProductID function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getOfferDetailWithProductID(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getOfferDetailWithProductID = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getOfferDetailWithProductID function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getOfferDetailWithProductID",  "relationship", errorcallback)){
		return;
	}	
	function ProductDetail_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey = res[0].ProductID;
			wcs.push({key:"ProductID", value:targetKey});
			

			var tbname = "OfferDetail"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.ProductSyncScope.OfferDetail.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
							}
		
			kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback);
			return;
		}	
	}
	
	function mySuccesscallback(res){
		var objMap = [];
		if(res!==null){
			for(var i in res){
				var obj = new com.kony.WeightWatchers.ProductSyncScope.OfferDetail();
				obj.AutoApplied = res[i].AutoApplied;
				obj.DiscountValue = res[i].DiscountValue;
				obj.OfferDesc = res[i].OfferDesc;
				obj.ProductID = res[i].ProductID;
				obj.LocalTime = res[i].LocalTime;
				obj.OfferNo = res[i].OfferNo;
				obj.LocationId = res[i].LocationId;
				obj.DiscountedProductPrice = res[i].DiscountedProductPrice;
				obj.OfferUnitPriceTax = res[i].OfferUnitPriceTax;
				obj.StartDate = res[i].StartDate;
				obj.EndDate = res[i].EndDate;
				obj.Locale = res[i].Locale;
				obj.CountryID = res[i].CountryID;
				obj.OfferID = res[i].OfferID;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK(pks, ProductDetail_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of OfferDetail related to ProductDetail
* with given ProductID from local database.
*************************************************************************************/
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getCountOfOfferDetailWithProductID  = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getCountOfOfferDetailWithProductID function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCountOfOfferDetailWithProductID(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCountOfOfferDetailWithProductID = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCountOfOfferDetailWithProductID function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getCountOfOfferDetailWithProductID",  "relationship", errorcallback)){
		return;
	}
	function ProductDetail_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
							var targetKey = res[0].ProductID;
				targetAttributes.push("ProductID");
				if(kony.type(targetKey)==="string") {
					wcs.push({"ProductID":"'"+targetKey+"'"});	
				}else{
					wcs.push({"ProductID":targetKey});
				}
						
			var wClause = "where ";
   			var i;
        	var len = wcs.length;
        	for (i = 0; i < len; i++) {
        		wClauseMap = wcs[i];
        		wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
        		if(i != len-1)
        		{
            		 wClause += " AND "
        		}
    		}
		   com.kony.WeightWatchers.ProductSyncScope.OfferDetail.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getAllDetailsByPK(pks, ProductDetail_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.removeCascade function");
	var tbname = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("ProductID");
			targetAttributes.push("ProductID");
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.ProductSyncScope.OfferDetail.removeCascade, "OfferDetail", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
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


com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.ProductSyncScope.ProductDetail();
			obj.sku = res[i].sku;
			obj.UnitPrice = res[i].UnitPrice;
			obj.description = res[i].description;
			obj.localTime = res[i].localTime;
			obj.ProductID = res[i].ProductID;
			obj.Category = res[i].Category;
			obj.CategoryNo = res[i].CategoryNo;
			obj.IsActive = res[i].IsActive;
			obj.IsMonthlyPass = res[i].IsMonthlyPass;
			obj.IsNewEnrollment = res[i].IsNewEnrollment;
			obj.IsSeventeenWkPs = res[i].IsSeventeenWkPs;
			obj.IsSeventeenWPEn = res[i].IsSeventeenWPEn;
			obj.IsTaxIncluded = res[i].IsTaxIncluded;
			obj.LocationID = res[i].LocationID;
			obj.PosProductType = res[i].PosProductType;
			obj.UnitPriceTax = res[i].UnitPriceTax;
			obj.Type = res[i].Type;
			obj.IsFeaturedProduct = res[i].IsFeaturedProduct;
			obj.ProductCategoryDesc = res[i].ProductCategoryDesc;
			obj.UPC = res[i].UPC;
			obj.Locale = res[i].Locale;
			obj.CountryID = res[i].CountryID;
			obj.TaxRate = res[i].TaxRate;
			obj.IsPrepaymentPlan = res[i].IsPrepaymentPlan;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.filterAttributes function");
	var attributeTable = {};
	attributeTable.sku = "sku";
	attributeTable.UnitPrice = "UnitPrice";
	attributeTable.description = "description";
	attributeTable.ProductID = "ProductID";
	attributeTable.Category = "Category";
	attributeTable.CategoryNo = "CategoryNo";
	attributeTable.IsActive = "IsActive";
	attributeTable.IsMonthlyPass = "IsMonthlyPass";
	attributeTable.IsNewEnrollment = "IsNewEnrollment";
	attributeTable.IsSeventeenWkPs = "IsSeventeenWkPs";
	attributeTable.IsSeventeenWPEn = "IsSeventeenWPEn";
	attributeTable.IsTaxIncluded = "IsTaxIncluded";
	attributeTable.LocationID = "LocationID";
	attributeTable.PosProductType = "PosProductType";
	attributeTable.UnitPriceTax = "UnitPriceTax";
	attributeTable.Type = "Type";
	attributeTable.IsFeaturedProduct = "IsFeaturedProduct";
	attributeTable.ProductCategoryDesc = "ProductCategoryDesc";
	attributeTable.UPC = "UPC";
	attributeTable.Locale = "Locale";
	attributeTable.CountryID = "CountryID";
	attributeTable.TaxRate = "TaxRate";
	attributeTable.IsPrepaymentPlan = "IsPrepaymentPlan";

	var PKTable = {};
	PKTable.ProductID = {}
	PKTable.ProductID.name = "ProductID";
	PKTable.ProductID.isAutoGen = false;
	PKTable.LocationID = {}
	PKTable.LocationID.name = "LocationID";
	PKTable.LocationID.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject ProductDetail. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject ProductDetail. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject ProductDetail. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.ProductSyncScope.ProductDetail.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.sku = this.sku;
	valuesTable.UnitPrice = this.UnitPrice;
	valuesTable.description = this.description;
	if(isInsert===true){
		valuesTable.ProductID = this.ProductID;
	}
	valuesTable.Category = this.Category;
	valuesTable.CategoryNo = this.CategoryNo;
	valuesTable.IsActive = this.IsActive;
	valuesTable.IsMonthlyPass = this.IsMonthlyPass;
	valuesTable.IsNewEnrollment = this.IsNewEnrollment;
	valuesTable.IsSeventeenWkPs = this.IsSeventeenWkPs;
	valuesTable.IsSeventeenWPEn = this.IsSeventeenWPEn;
	valuesTable.IsTaxIncluded = this.IsTaxIncluded;
	if(isInsert===true){
		valuesTable.LocationID = this.LocationID;
	}
	valuesTable.PosProductType = this.PosProductType;
	valuesTable.UnitPriceTax = this.UnitPriceTax;
	valuesTable.Type = this.Type;
	valuesTable.IsFeaturedProduct = this.IsFeaturedProduct;
	valuesTable.ProductCategoryDesc = this.ProductCategoryDesc;
	valuesTable.UPC = this.UPC;
	valuesTable.Locale = this.Locale;
	valuesTable.CountryID = this.CountryID;
	valuesTable.TaxRate = this.TaxRate;
	valuesTable.IsPrepaymentPlan = this.IsPrepaymentPlan;
	return valuesTable;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.prototype.getPKTable function");
	var pkTable = {};
	pkTable.ProductID = {key:"ProductID",value:this.ProductID};
	pkTable.LocationID = {key:"LocationID",value:this.LocationID};
	return pkTable;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getPKTable function");
	var pkTable = [];
	pkTable.push("ProductID");
	pkTable.push("LocationID");
	return pkTable;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.ProductID)){
		if(!kony.sync.isNull(pks.ProductID.value)){
			wc.key = "ProductID";
			wc.value = pks.ProductID.value;
		}
		else{
			wc.key = "ProductID";
			wc.value = pks.ProductID;
		}
	}else{
		sync.log.error("Primary Key ProductID not specified in " + opName + " an item in ProductDetail");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ProductID",opName,"ProductDetail")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.LocationID)){
		if(!kony.sync.isNull(pks.LocationID.value)){
			wc.key = "LocationID";
			wc.value = pks.LocationID.value;
		}
		else{
			wc.key = "LocationID";
			wc.value = pks.LocationID;
		}
	}else{
		sync.log.error("Primary Key LocationID not specified in " + opName + " an item in ProductDetail");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("LocationID",opName,"ProductDetail")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.validateNull function");
	if(valuestable.IsMonthlyPass!==undefined){
		if(kony.sync.isNull(valuestable.IsMonthlyPass) || kony.sync.isEmptyString(valuestable.IsMonthlyPass)){
			sync.log.error("Mandatory attribute IsMonthlyPass is missing for the SyncObject ProductDetail.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsMonthlyPass")));
			return false;
		}
	}
	if(valuestable.IsNewEnrollment!==undefined){
		if(kony.sync.isNull(valuestable.IsNewEnrollment) || kony.sync.isEmptyString(valuestable.IsNewEnrollment)){
			sync.log.error("Mandatory attribute IsNewEnrollment is missing for the SyncObject ProductDetail.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsNewEnrollment")));
			return false;
		}
	}
	if(valuestable.IsSeventeenWkPs!==undefined){
		if(kony.sync.isNull(valuestable.IsSeventeenWkPs) || kony.sync.isEmptyString(valuestable.IsSeventeenWkPs)){
			sync.log.error("Mandatory attribute IsSeventeenWkPs is missing for the SyncObject ProductDetail.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsSeventeenWkPs")));
			return false;
		}
	}
	if(valuestable.IsSeventeenWPEn!==undefined){
		if(kony.sync.isNull(valuestable.IsSeventeenWPEn) || kony.sync.isEmptyString(valuestable.IsSeventeenWPEn)){
			sync.log.error("Mandatory attribute IsSeventeenWPEn is missing for the SyncObject ProductDetail.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsSeventeenWPEn")));
			return false;
		}
	}
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.validateNullInsert function");
	if(kony.sync.isNull(valuestable.ProductID) || kony.sync.isEmptyString(valuestable.ProductID)){
		sync.log.error("Mandatory attribute ProductID is missing for the SyncObject ProductDetail.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "ProductID")));
		return false;
	}
	if(kony.sync.isNull(valuestable.IsMonthlyPass) || kony.sync.isEmptyString(valuestable.IsMonthlyPass)){
		sync.log.error("Mandatory attribute IsMonthlyPass is missing for the SyncObject ProductDetail.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsMonthlyPass")));
		return false;
	}
	if(kony.sync.isNull(valuestable.IsNewEnrollment) || kony.sync.isEmptyString(valuestable.IsNewEnrollment)){
		sync.log.error("Mandatory attribute IsNewEnrollment is missing for the SyncObject ProductDetail.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsNewEnrollment")));
		return false;
	}
	if(kony.sync.isNull(valuestable.IsSeventeenWkPs) || kony.sync.isEmptyString(valuestable.IsSeventeenWkPs)){
		sync.log.error("Mandatory attribute IsSeventeenWkPs is missing for the SyncObject ProductDetail.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsSeventeenWkPs")));
		return false;
	}
	if(kony.sync.isNull(valuestable.IsSeventeenWPEn) || kony.sync.isEmptyString(valuestable.IsSeventeenWPEn)){
		sync.log.error("Mandatory attribute IsSeventeenWPEn is missing for the SyncObject ProductDetail.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "IsSeventeenWPEn")));
		return false;
	}
	if(kony.sync.isNull(valuestable.LocationID) || kony.sync.isEmptyString(valuestable.LocationID)){
		sync.log.error("Mandatory attribute LocationID is missing for the SyncObject ProductDetail.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ProductDetail", "LocationID")));
		return false;
	}
	return true;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.kony.WeightWatchers.ProductSyncScope.ProductDetail.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.kony.WeightWatchers.ProductSyncScope.ProductDetail.getTableName = function(){
	return "ProductDetail";
};




// **********************************End ProductDetail's helper methods************************