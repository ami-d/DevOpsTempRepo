// ****************Generated On Fri Apr 04 12:20:43 IST 2014Members*******************
// **********************************Start Members's helper methods************************
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
if(typeof(com.kony.WeightWatchers.WeightWatchers)=== "undefined"){ com.kony.WeightWatchers.WeightWatchers = {}; }

/************************************************************************************
* Creates new Members
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members = function(){
	this.ClientRefID = null;
	this.DateOfBirth = null;
	this.DNTReCalForEvnt = null;
	this.DNTConctByEmail = null;
	this.DNTConctByPhone = null;
	this.DNTContactBySMS = null;
	this.DontSendCards = null;
	this.DontSendCoupons = null;
	this.Email = null;
	this.EmployeeID = null;
	this.FeePaid = null;
	this.FirstName = null;
	this.Gender = null;
	this.Height = null;
	this.LastName = null;
	this.LocationID = null;
	this.MeetingDate = null;
	this.MeetingOcurncID = null;
	this.CouponCode = null;
	this.ExpirationDate = null;
	this.ID = null;
	this.LastUsedDate = null;
	this.MemberID = null;
	this.ProductID = null;
	this.SubscriptnType = null;
	this.MemberType = null;
	this.MissedWeekPass = null;
	this.Phone1 = null;
	this.Phone2 = null;
	this.PhoneType1 = null;
	this.PhoneType2 = null;
	this.RegistrationNum = null;
	this.StartDate = null;
	this.Status = null;
	this.WeeksCompleted = null;
	this.lastupdatedtime = null;
	this.TransStatus = null;
	this.markForUpload = true;
};

com.kony.WeightWatchers.WeightWatchers.Members.prototype = {
	get ClientRefID(){
		return this._ClientRefID;
	},
	set ClientRefID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ClientRefID in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ClientRefID = val;
	},
	get DateOfBirth(){
		return this._DateOfBirth;
	},
	set DateOfBirth(val){
		this._DateOfBirth = val;
	},
	get DNTReCalForEvnt(){
		return kony.sync.getBoolean(this._DNTReCalForEvnt);
	},
	set DNTReCalForEvnt(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute DNTReCalForEvnt in Members.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DNTReCalForEvnt = val;
	},
	get DNTConctByEmail(){
		return kony.sync.getBoolean(this._DNTConctByEmail);
	},
	set DNTConctByEmail(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute DNTConctByEmail in Members.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DNTConctByEmail = val;
	},
	get DNTConctByPhone(){
		return kony.sync.getBoolean(this._DNTConctByPhone);
	},
	set DNTConctByPhone(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute DNTConctByPhone in Members.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DNTConctByPhone = val;
	},
	get DNTContactBySMS(){
		return kony.sync.getBoolean(this._DNTContactBySMS);
	},
	set DNTContactBySMS(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute DNTContactBySMS in Members.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DNTContactBySMS = val;
	},
	get DontSendCards(){
		return kony.sync.getBoolean(this._DontSendCards);
	},
	set DontSendCards(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute DontSendCards in Members.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DontSendCards = val;
	},
	get DontSendCoupons(){
		return kony.sync.getBoolean(this._DontSendCoupons);
	},
	set DontSendCoupons(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute DontSendCoupons in Members.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._DontSendCoupons = val;
	},
	get Email(){
		return this._Email;
	},
	set Email(val){
		this._Email = val;
	},
	get EmployeeID(){
		return this._EmployeeID;
	},
	set EmployeeID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute EmployeeID in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._EmployeeID = val;
	},
	get FeePaid(){
		return kony.sync.getBoolean(this._FeePaid);
	},
	set FeePaid(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute FeePaid in Members.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._FeePaid = val;
	},
	get FirstName(){
		return this._FirstName;
	},
	set FirstName(val){
		this._FirstName = val;
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
			sync.log.error("Invalid data type for the attribute Height in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._Height = val;
	},
	get LastName(){
		return this._LastName;
	},
	set LastName(val){
		this._LastName = val;
	},
	get LocationID(){
		return this._LocationID;
	},
	set LocationID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute LocationID in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._LocationID = val;
	},
	get MeetingDate(){
		return this._MeetingDate;
	},
	set MeetingDate(val){
		this._MeetingDate = val;
	},
	get MeetingOcurncID(){
		return this._MeetingOcurncID;
	},
	set MeetingOcurncID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute MeetingOcurncID in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._MeetingOcurncID = val;
	},
	get CouponCode(){
		return this._CouponCode;
	},
	set CouponCode(val){
		this._CouponCode = val;
	},
	get ExpirationDate(){
		return this._ExpirationDate;
	},
	set ExpirationDate(val){
		this._ExpirationDate = val;
	},
	get ID(){
		return this._ID;
	},
	set ID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ID in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ID = val;
	},
	get LastUsedDate(){
		return this._LastUsedDate;
	},
	set LastUsedDate(val){
		this._LastUsedDate = val;
	},
	get MemberID(){
		return this._MemberID;
	},
	set MemberID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute MemberID in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._MemberID = val;
	},
	get ProductID(){
		return this._ProductID;
	},
	set ProductID(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute ProductID in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._ProductID = val;
	},
	get SubscriptnType(){
		return this._SubscriptnType;
	},
	set SubscriptnType(val){
		this._SubscriptnType = val;
	},
	get MemberType(){
		return this._MemberType;
	},
	set MemberType(val){
		this._MemberType = val;
	},
	get MissedWeekPass(){
		return this._MissedWeekPass;
	},
	set MissedWeekPass(val){
		this._MissedWeekPass = val;
	},
	get Phone1(){
		return this._Phone1;
	},
	set Phone1(val){
		this._Phone1 = val;
	},
	get Phone2(){
		return this._Phone2;
	},
	set Phone2(val){
		this._Phone2 = val;
	},
	get PhoneType1(){
		return this._PhoneType1;
	},
	set PhoneType1(val){
		this._PhoneType1 = val;
	},
	get PhoneType2(){
		return this._PhoneType2;
	},
	set PhoneType2(val){
		this._PhoneType2 = val;
	},
	get RegistrationNum(){
		return this._RegistrationNum;
	},
	set RegistrationNum(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute RegistrationNum in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._RegistrationNum = val;
	},
	get StartDate(){
		return this._StartDate;
	},
	set StartDate(val){
		this._StartDate = val;
	},
	get Status(){
		return this._Status;
	},
	set Status(val){
		this._Status = val;
	},
	get WeeksCompleted(){
		return this._WeeksCompleted;
	},
	set WeeksCompleted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute WeeksCompleted in Members.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._WeeksCompleted = val;
	},
	get lastupdatedtime(){
		return this._lastupdatedtime;
	},
	set lastupdatedtime(val){
		this._lastupdatedtime = val;
	},
	get TransStatus(){
		return this._TransStatus;
	},
	set TransStatus(val){
		this._TransStatus = val;
	},
};

/************************************************************************************
* Retrieves all instances of Members SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "ClientRefID";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "DateOfBirth";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.kony.WeightWatchers.WeightWatchers.Members.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getAll->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	orderByMap = kony.sync.formOrderByClause("Members",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getAll->successcallback");
		successcallback(com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Members present in local database.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getAllCount function");
	com.kony.WeightWatchers.WeightWatchers.Members.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of Members using where clause in the local Database
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getCount->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from " + tbname + " " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getCount->successcallback");
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
* Creates a new instance of Members in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.kony.WeightWatchers.WeightWatchers.Members.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.WeightWatchers.Members.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.create->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"Members",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.WeightWatchers.Members.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of Members in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].DateOfBirth = 0;
*		valuesArray[0].DNTReCalForEvnt = true;
*		valuesArray[0].DNTConctByEmail = true;
*		valuesArray[0].DNTConctByPhone = true;
*		valuesArray[0].DNTContactBySMS = true;
*		valuesArray[0].DontSendCards = true;
*		valuesArray[0].DontSendCoupons = true;
*		valuesArray[0].Email = "Email_0";
*		valuesArray[0].EmployeeID = 0;
*		valuesArray[0].FeePaid = true;
*		valuesArray[0].FirstName = "FirstName_0";
*		valuesArray[0].Gender = "Gender_0";
*		valuesArray[0].Height = 0;
*		valuesArray[0].LastName = "LastName_0";
*		valuesArray[0].LocationID = 0;
*		valuesArray[0].MeetingDate = 0;
*		valuesArray[0].MeetingOcurncID = 0;
*		valuesArray[0].CouponCode = "CouponCode_0";
*		valuesArray[0].ExpirationDate = 0;
*		valuesArray[0].ID = 0;
*		valuesArray[0].LastUsedDate = 0;
*		valuesArray[0].MemberID = 0;
*		valuesArray[0].ProductID = 0;
*		valuesArray[0].SubscriptnType = "SubscriptnType_0";
*		valuesArray[0].MemberType = "MemberType_0";
*		valuesArray[0].MissedWeekPass = "MissedWeekPass_0";
*		valuesArray[0].Phone1 = "Phone1_0";
*		valuesArray[0].Phone2 = "Phone2_0";
*		valuesArray[0].PhoneType1 = "PhoneType1_0";
*		valuesArray[0].PhoneType2 = "PhoneType2_0";
*		valuesArray[0].RegistrationNum = 0;
*		valuesArray[0].StartDate = 0;
*		valuesArray[0].Status = "Status_0";
*		valuesArray[0].WeeksCompleted = 0;
*		valuesArray[0].TransStatus = "TransStatus_0";
*		valuesArray[1] = {};
*		valuesArray[1].DateOfBirth = 1;
*		valuesArray[1].DNTReCalForEvnt = true;
*		valuesArray[1].DNTConctByEmail = true;
*		valuesArray[1].DNTConctByPhone = true;
*		valuesArray[1].DNTContactBySMS = true;
*		valuesArray[1].DontSendCards = true;
*		valuesArray[1].DontSendCoupons = true;
*		valuesArray[1].Email = "Email_1";
*		valuesArray[1].EmployeeID = 1;
*		valuesArray[1].FeePaid = true;
*		valuesArray[1].FirstName = "FirstName_1";
*		valuesArray[1].Gender = "Gender_1";
*		valuesArray[1].Height = 1;
*		valuesArray[1].LastName = "LastName_1";
*		valuesArray[1].LocationID = 1;
*		valuesArray[1].MeetingDate = 1;
*		valuesArray[1].MeetingOcurncID = 1;
*		valuesArray[1].CouponCode = "CouponCode_1";
*		valuesArray[1].ExpirationDate = 1;
*		valuesArray[1].ID = 1;
*		valuesArray[1].LastUsedDate = 1;
*		valuesArray[1].MemberID = 1;
*		valuesArray[1].ProductID = 1;
*		valuesArray[1].SubscriptnType = "SubscriptnType_1";
*		valuesArray[1].MemberType = "MemberType_1";
*		valuesArray[1].MissedWeekPass = "MissedWeekPass_1";
*		valuesArray[1].Phone1 = "Phone1_1";
*		valuesArray[1].Phone2 = "Phone2_1";
*		valuesArray[1].PhoneType1 = "PhoneType1_1";
*		valuesArray[1].PhoneType2 = "PhoneType2_1";
*		valuesArray[1].RegistrationNum = 1;
*		valuesArray[1].StartDate = 1;
*		valuesArray[1].Status = "Status_1";
*		valuesArray[1].WeeksCompleted = 1;
*		valuesArray[1].TransStatus = "TransStatus_1";
*		valuesArray[2] = {};
*		valuesArray[2].DateOfBirth = 2;
*		valuesArray[2].DNTReCalForEvnt = true;
*		valuesArray[2].DNTConctByEmail = true;
*		valuesArray[2].DNTConctByPhone = true;
*		valuesArray[2].DNTContactBySMS = true;
*		valuesArray[2].DontSendCards = true;
*		valuesArray[2].DontSendCoupons = true;
*		valuesArray[2].Email = "Email_2";
*		valuesArray[2].EmployeeID = 2;
*		valuesArray[2].FeePaid = true;
*		valuesArray[2].FirstName = "FirstName_2";
*		valuesArray[2].Gender = "Gender_2";
*		valuesArray[2].Height = 2;
*		valuesArray[2].LastName = "LastName_2";
*		valuesArray[2].LocationID = 2;
*		valuesArray[2].MeetingDate = 2;
*		valuesArray[2].MeetingOcurncID = 2;
*		valuesArray[2].CouponCode = "CouponCode_2";
*		valuesArray[2].ExpirationDate = 2;
*		valuesArray[2].ID = 2;
*		valuesArray[2].LastUsedDate = 2;
*		valuesArray[2].MemberID = 2;
*		valuesArray[2].ProductID = 2;
*		valuesArray[2].SubscriptnType = "SubscriptnType_2";
*		valuesArray[2].MemberType = "MemberType_2";
*		valuesArray[2].MissedWeekPass = "MissedWeekPass_2";
*		valuesArray[2].Phone1 = "Phone1_2";
*		valuesArray[2].Phone2 = "Phone2_2";
*		valuesArray[2].PhoneType1 = "PhoneType1_2";
*		valuesArray[2].PhoneType2 = "PhoneType2_2";
*		valuesArray[2].RegistrationNum = 2;
*		valuesArray[2].StartDate = 2;
*		valuesArray[2].Status = "Status_2";
*		valuesArray[2].WeeksCompleted = 2;
*		valuesArray[2].TransStatus = "TransStatus_2";
*		com.kony.WeightWatchers.WeightWatchers.Members.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.createAll function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"Members",errorcallback,true)===false){
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
				errMsg = "ClientRefID=" + valuestable.ClientRefID;
				pks["ClientRefID"] = {key:"ClientRefID",value:valuestable.ClientRefID};
				errMsg = errMsg + ", RegistrationNum=" + valuestable.RegistrationNum;
				pks["RegistrationNum"] = {key:"RegistrationNum",value:valuestable.RegistrationNum};
				var wcs = [];
				if(com.kony.WeightWatchers.WeightWatchers.Members.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.kony.WeightWatchers.WeightWatchers.Members.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates Members using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.kony.WeightWatchers.WeightWatchers.Members.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.WeightWatchers.Members.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.updateByPK-> main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.kony.WeightWatchers.WeightWatchers.Members.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"Members",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.kony.WeightWatchers.WeightWatchers.Members.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates Members(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.update function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"Members",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.WeightWatchers.Members.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.kony.WeightWatchers.WeightWatchers.Members.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.kony.WeightWatchers.WeightWatchers.Members.getPKTable());
	}
};

/************************************************************************************
* Updates Members(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.DateOfBirth = "DateOfBirth_updated0";
*		inputArray[0].changeSet.DNTReCalForEvnt = true;
*		inputArray[0].changeSet.DNTConctByEmail = true;
*		inputArray[0].changeSet.DNTConctByPhone = true;
*		inputArray[0].whereClause = "where ClientRefID = 0";
*		inputArray[0].whereClause = "where RegistrationNum = 0";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.DateOfBirth = "DateOfBirth_updated1";
*		inputArray[1].changeSet.DNTReCalForEvnt = true;
*		inputArray[1].changeSet.DNTConctByEmail = true;
*		inputArray[1].changeSet.DNTConctByPhone = true;
*		inputArray[1].whereClause = "where ClientRefID = 1";
*		inputArray[1].whereClause = "where RegistrationNum = 1";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.DateOfBirth = "DateOfBirth_updated2";
*		inputArray[2].changeSet.DNTReCalForEvnt = true;
*		inputArray[2].changeSet.DNTConctByEmail = true;
*		inputArray[2].changeSet.DNTConctByPhone = true;
*		inputArray[2].whereClause = "where ClientRefID = 2";
*		inputArray[2].whereClause = "where RegistrationNum = 2";
*		com.kony.WeightWatchers.WeightWatchers.Members.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.updateAll function");
	var dbname = "WeightWatchers";
	var tbname = "Members";
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
			var wcs = v.whereClause;
			var twcs = wcs;
			if(kony.sync.attributeValidation(valuestable,"Members",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.kony.WeightWatchers.WeightWatchers.Members.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.kony.WeightWatchers.WeightWatchers.Members.getPKTable());
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
		sync.log.trace("Entering  com.kony.WeightWatchers.WeightWatchers.Members.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.kony.WeightWatchers.WeightWatchers.Members.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes Members using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.WeightWatchers.Members.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.WeightWatchers.Members.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.deleteByPK-> main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.kony.WeightWatchers.WeightWatchers.Members.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function MembersTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.deleteByPK->Members_PKPresent successcallback");
		if(kony.sync.enableORMValidations){
			record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
			if(record===false){
				isError = true;
				return;
			}
		}
		if (null !== record || !kony.sync.enableORMValidations) {
			var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function MembersErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.WeightWatchers.Members.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function MembersSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.WeightWatchers.Members.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, MembersTransactionCallback, MembersSuccessCallback, MembersErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes Members(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.kony.WeightWatchers.WeightWatchers.Members.remove("where DateOfBirth like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.remove->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Members_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Members_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.remove->Members_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Members_removeTransactioncallback, Members_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes Members using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstanceByPK function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.kony.WeightWatchers.WeightWatchers.Members.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function MembersTransactionCallback(tx){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstanceByPK -> MembersTransactionCallback");
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
	
	function MembersErrorCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstanceByPK -> MembersErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function MembersSuccessCallback(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstanceByPK -> MembersSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, MembersTransactionCallback, MembersSuccessCallback, MembersErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes Members(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Members_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Members_removeSuccess(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.remove->Members_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Members_removeTransactioncallback, Members_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves Members using primary key from the local Database. 
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.WeightWatchers.Members.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.kony.WeightWatchers.WeightWatchers.Members.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getAllDetailsByPK-> main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.WeightWatchers.Members.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getAllDetailsByPK-> success callback function");
		successcallback(com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Members(s) using where clause from the local Database. 
* e.g. com.kony.WeightWatchers.WeightWatchers.Members.find("where DateOfBirth like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.find function");
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Members with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.WeightWatchers.Members.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.WeightWatchers.Members.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.markForUploadbyPK function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(com.kony.WeightWatchers.WeightWatchers.Members.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
		for(var i = 0; i <= num_records - 1; i++){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
			recordsFound = true;
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
			kony.sync.verifyAndCallClosure(successcallback , {count:1});
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
* Marks instance(s) of Members matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.markForUpload->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
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
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.markForUpload->single_transaction_callback");
		//updating main table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + " " + wcs ;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}
		
		num_records_main = resultSet.rows.length;
		for(var i = 0; i <= num_records_main - 1; i++ ){
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
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.kony.WeightWatchers.WeightWatchers.Members.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of Members pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.getPendingUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getPendingUpload->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of Members pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getPendingAcknowledgement->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Members deferred for upload.
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.getDeferredUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getDeferredUpload->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Members in local database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChanges->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to Members's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.kony.WeightWatchers.WeightWatchers.Members.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChangesByPK->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
	var wcs = [];
	if(com.kony.WeightWatchers.WeightWatchers.Members.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.kony.WeightWatchers.WeightWatchers.Members.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};


/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.kony.WeightWatchers.WeightWatchers.Members.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.removeCascade function");
	var tbname = com.kony.WeightWatchers.WeightWatchers.Members.getTableName();
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
		var sql = "select * from " + tbname + wcs;
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


com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject = function(res){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.kony.WeightWatchers.WeightWatchers.Members();
			obj.ClientRefID = res[i].ClientRefID;
			obj.DateOfBirth = res[i].DateOfBirth;
			obj.DNTReCalForEvnt = res[i].DNTReCalForEvnt;
			obj.DNTConctByEmail = res[i].DNTConctByEmail;
			obj.DNTConctByPhone = res[i].DNTConctByPhone;
			obj.DNTContactBySMS = res[i].DNTContactBySMS;
			obj.DontSendCards = res[i].DontSendCards;
			obj.DontSendCoupons = res[i].DontSendCoupons;
			obj.Email = res[i].Email;
			obj.EmployeeID = res[i].EmployeeID;
			obj.FeePaid = res[i].FeePaid;
			obj.FirstName = res[i].FirstName;
			obj.Gender = res[i].Gender;
			obj.Height = res[i].Height;
			obj.LastName = res[i].LastName;
			obj.LocationID = res[i].LocationID;
			obj.MeetingDate = res[i].MeetingDate;
			obj.MeetingOcurncID = res[i].MeetingOcurncID;
			obj.CouponCode = res[i].CouponCode;
			obj.ExpirationDate = res[i].ExpirationDate;
			obj.ID = res[i].ID;
			obj.LastUsedDate = res[i].LastUsedDate;
			obj.MemberID = res[i].MemberID;
			obj.ProductID = res[i].ProductID;
			obj.SubscriptnType = res[i].SubscriptnType;
			obj.MemberType = res[i].MemberType;
			obj.MissedWeekPass = res[i].MissedWeekPass;
			obj.Phone1 = res[i].Phone1;
			obj.Phone2 = res[i].Phone2;
			obj.PhoneType1 = res[i].PhoneType1;
			obj.PhoneType2 = res[i].PhoneType2;
			obj.RegistrationNum = res[i].RegistrationNum;
			obj.StartDate = res[i].StartDate;
			obj.Status = res[i].Status;
			obj.WeeksCompleted = res[i].WeeksCompleted;
			obj.lastupdatedtime = res[i].lastupdatedtime;
			obj.TransStatus = res[i].TransStatus;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.kony.WeightWatchers.WeightWatchers.Members.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.filterAttributes function");
	var attributeTable = {};
	attributeTable.ClientRefID = "ClientRefID";
	attributeTable.DateOfBirth = "DateOfBirth";
	attributeTable.DNTReCalForEvnt = "DNTReCalForEvnt";
	attributeTable.DNTConctByEmail = "DNTConctByEmail";
	attributeTable.DNTConctByPhone = "DNTConctByPhone";
	attributeTable.DNTContactBySMS = "DNTContactBySMS";
	attributeTable.DontSendCards = "DontSendCards";
	attributeTable.DontSendCoupons = "DontSendCoupons";
	attributeTable.Email = "Email";
	attributeTable.EmployeeID = "EmployeeID";
	attributeTable.FeePaid = "FeePaid";
	attributeTable.FirstName = "FirstName";
	attributeTable.Gender = "Gender";
	attributeTable.Height = "Height";
	attributeTable.LastName = "LastName";
	attributeTable.LocationID = "LocationID";
	attributeTable.MeetingDate = "MeetingDate";
	attributeTable.MeetingOcurncID = "MeetingOcurncID";
	attributeTable.CouponCode = "CouponCode";
	attributeTable.ExpirationDate = "ExpirationDate";
	attributeTable.ID = "ID";
	attributeTable.LastUsedDate = "LastUsedDate";
	attributeTable.MemberID = "MemberID";
	attributeTable.ProductID = "ProductID";
	attributeTable.SubscriptnType = "SubscriptnType";
	attributeTable.MemberType = "MemberType";
	attributeTable.MissedWeekPass = "MissedWeekPass";
	attributeTable.Phone1 = "Phone1";
	attributeTable.Phone2 = "Phone2";
	attributeTable.PhoneType1 = "PhoneType1";
	attributeTable.PhoneType2 = "PhoneType2";
	attributeTable.RegistrationNum = "RegistrationNum";
	attributeTable.StartDate = "StartDate";
	attributeTable.Status = "Status";
	attributeTable.WeeksCompleted = "WeeksCompleted";
	attributeTable.TransStatus = "TransStatus";

	var PKTable = {};
	PKTable.ClientRefID = {}
	PKTable.ClientRefID.name = "ClientRefID";
	PKTable.ClientRefID.isAutoGen = true;
	PKTable.RegistrationNum = {}
	PKTable.RegistrationNum.name = "RegistrationNum";
	PKTable.RegistrationNum.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Members. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Members. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Members. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.kony.WeightWatchers.WeightWatchers.Members.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.kony.WeightWatchers.WeightWatchers.Members.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.kony.WeightWatchers.WeightWatchers.Members.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.ClientRefID = this.ClientRefID;
	}
	valuesTable.DateOfBirth = this.DateOfBirth;
	valuesTable.DNTReCalForEvnt = this.DNTReCalForEvnt;
	valuesTable.DNTConctByEmail = this.DNTConctByEmail;
	valuesTable.DNTConctByPhone = this.DNTConctByPhone;
	valuesTable.DNTContactBySMS = this.DNTContactBySMS;
	valuesTable.DontSendCards = this.DontSendCards;
	valuesTable.DontSendCoupons = this.DontSendCoupons;
	valuesTable.Email = this.Email;
	valuesTable.EmployeeID = this.EmployeeID;
	valuesTable.FeePaid = this.FeePaid;
	valuesTable.FirstName = this.FirstName;
	valuesTable.Gender = this.Gender;
	valuesTable.Height = this.Height;
	valuesTable.LastName = this.LastName;
	valuesTable.LocationID = this.LocationID;
	valuesTable.MeetingDate = this.MeetingDate;
	valuesTable.MeetingOcurncID = this.MeetingOcurncID;
	valuesTable.CouponCode = this.CouponCode;
	valuesTable.ExpirationDate = this.ExpirationDate;
	valuesTable.ID = this.ID;
	valuesTable.LastUsedDate = this.LastUsedDate;
	valuesTable.MemberID = this.MemberID;
	valuesTable.ProductID = this.ProductID;
	valuesTable.SubscriptnType = this.SubscriptnType;
	valuesTable.MemberType = this.MemberType;
	valuesTable.MissedWeekPass = this.MissedWeekPass;
	valuesTable.Phone1 = this.Phone1;
	valuesTable.Phone2 = this.Phone2;
	valuesTable.PhoneType1 = this.PhoneType1;
	valuesTable.PhoneType2 = this.PhoneType2;
	if(isInsert===true){
		valuesTable.RegistrationNum = this.RegistrationNum;
	}
	valuesTable.StartDate = this.StartDate;
	valuesTable.Status = this.Status;
	valuesTable.WeeksCompleted = this.WeeksCompleted;
	valuesTable.TransStatus = this.TransStatus;
	return valuesTable;
};

com.kony.WeightWatchers.WeightWatchers.Members.prototype.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.prototype.getPKTable function");
	var pkTable = {};
	pkTable.ClientRefID = {key:"ClientRefID",value:this.ClientRefID};
	pkTable.RegistrationNum = {key:"RegistrationNum",value:this.RegistrationNum};
	return pkTable;
};

com.kony.WeightWatchers.WeightWatchers.Members.getPKTable = function(){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getPKTable function");
	var pkTable = [];
	pkTable.push("ClientRefID");
	pkTable.push("RegistrationNum");
	return pkTable;
};

com.kony.WeightWatchers.WeightWatchers.Members.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.ClientRefID)){
		if(!kony.sync.isNull(pks.ClientRefID.value)){
			wc.key = "ClientRefID";
			wc.value = pks.ClientRefID.value;
		}
		else{
			wc.key = "ClientRefID";
			wc.value = pks.ClientRefID;
		}
	}else{
		sync.log.error("Primary Key ClientRefID not specified in " + opName + " an item in Members");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("ClientRefID",opName,"Members")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.RegistrationNum)){
		if(!kony.sync.isNull(pks.RegistrationNum.value)){
			wc.key = "RegistrationNum";
			wc.value = pks.RegistrationNum.value;
		}
		else{
			wc.key = "RegistrationNum";
			wc.value = pks.RegistrationNum;
		}
	}else{
		sync.log.error("Primary Key RegistrationNum not specified in " + opName + " an item in Members");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("RegistrationNum",opName,"Members")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.kony.WeightWatchers.WeightWatchers.Members.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.validateNull function");
	return true;
};

com.kony.WeightWatchers.WeightWatchers.Members.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.validateNullInsert function");
	if(kony.sync.isNull(valuestable.RegistrationNum) || kony.sync.isEmptyString(valuestable.RegistrationNum)){
		sync.log.error("Mandatory attribute RegistrationNum is missing for the SyncObject Members.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Members", "RegistrationNum")));
		return false;
	}
	return true;
};
com.kony.WeightWatchers.WeightWatchers.Members.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.kony.WeightWatchers.WeightWatchers.Members.getRelationshipMap function");
	var r1 = {};
	return relationshipMap;
};

com.kony.WeightWatchers.WeightWatchers.Members.getTableName = function(){
	return "Members";
};


// **********************************End Members's helper methods************************