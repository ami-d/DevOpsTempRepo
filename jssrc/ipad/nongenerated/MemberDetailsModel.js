//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Thu Sep 20 06:39:52 UTC 2018MemberDetails*******************
// **********************************Start MemberDetails's helper methods************************
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
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.kony) === "undefined") {
    com.kony = {};
}
if (typeof(com.kony.WeightWatchers) === "undefined") {
    com.kony.WeightWatchers = {};
}
if (typeof(com.kony.WeightWatchers.MemberSyncScope) === "undefined") {
    com.kony.WeightWatchers.MemberSyncScope = {};
}
/************************************************************************************
 * Creates new MemberDetails
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails = function() {
    this.DontContByEmail = null;
    this.DateOfBirth = null;
    this.Email = null;
    this.EmpID = null;
    this.FirstName = null;
    this.Gender = null;
    this.Height = null;
    this.LastName = null;
    this.SubscriptnID = null;
    this.SubscriptnType = null;
    this.RegNumber = null;
    this.LastUpdatedTime = null;
    this.MemberType = null;
    this.BillingAddr1 = null;
    this.BillingAddr2 = null;
    this.BillingCity = null;
    this.BillingCountry = null;
    this.BillingState = null;
    this.BillingZipCode = null;
    this.ConsWeightGain = null;
    this.CrntLifeTimeSta = null;
    this.DontRecvCalls = null;
    this.DontCnctPhone = null;
    this.DontCnctSMS = null;
    this.DontSendCard = null;
    this.DontSendCoupon = null;
    this.EnrollmentDate = null;
    this.FeePaid = null;
    this.LastAchvdMStone = null;
    this.LastContactDate = null;
    this.LastNteEntrDate = null;
    this.LocationID = null;
    this.MeetingDate = null;
    this.MtngOccrID = null;
    this.CouponCode = null;
    this.ExpirationDate = null;
    this.LastUsedDate = null;
    this.ProductID = null;
    this.MissWeekPasses = null;
    this.NoWeeksAttended = null;
    this.Phone1 = null;
    this.PhoneType1 = null;
    this.Phone2 = null;
    this.PhoneType2 = null;
    this.PrevLifeTimeSta = null;
    this.ShippingAddr1 = null;
    this.ShippingAddr2 = null;
    this.ShippingCity = null;
    this.ShippingCountry = null;
    this.ShippingState = null;
    this.ShippingZipCode = null;
    this.StartDate = null;
    this.MemberStatus = null;
    this.TransactionType = null;
    this.WeeksCompleted = null;
    this.WeightGain = null;
    this.MeetingId = null;
    this.MemTypeUpdateDt = null;
    this.RegStatus = null;
    this.MemberID = null;
    this.GoalWeight = null;
    this.GoalAchDate = null;
    this.StartWeight = null;
    this.RegDate = null;
    this.IncompleteData = null;
    this.PreRegNumber = null;
    this.UniqueID = null;
    this.UserStsEndPrd = null;
    this.UserComments = null;
    this.UserStsChngRsn = null;
    this.LocalTime = null;
    this.IsPAYG = null;
    this.IsMemberInMtns = null;
    this.EmailID = null;
    this.EnterpriseID = null;
    this.LinkType = null;
    this.UserName = null;
    this.IsFreshStart = null;
    this.RefreshDate = null;
    this.SessionNumber = null;
    this.TrackerID = null;
    this.MaintenanceMode = null;
    this.TrackerStartDate = null;
    this.FailedDate = null;
    this.Eligible = null;
    this.EligibleDate = null;
    this.PaidLastFee = null;
    this.WeightCountMet = null;
    this.ReedeemedPasses = null;
    this.RedeemedDate = null;
    this.IsDateRedeemed = null;
    this.IsLink = null;
    this.IsCurrentWeekWeighed = null;
    this.LastAttendanceDate = null;
    this.MemberRole = null;
    this.ProgramDuration = null;
    this.isVoided = null;
    this.PersonalGoalWeight = null;
    this.PersonalGoalWeightDate = null;
    this.Locale = null;
    this.CountryID = null;
    this.SubscriptnDate = null;
    this.Usertype = null;
    this.PlanType = null;
    this.CommitmentDuration = null;
    this.WeightLossFocus = null;
    this.markForUpload = true;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype = {
    get DontContByEmail() {
        return kony.sync.getBoolean(this._DontContByEmail) + "";
    },
    set DontContByEmail(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute DontContByEmail in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._DontContByEmail = val;
    },
    get DateOfBirth() {
        return this._DateOfBirth;
    },
    set DateOfBirth(val) {
        this._DateOfBirth = val;
    },
    get Email() {
        return this._Email;
    },
    set Email(val) {
        this._Email = val;
    },
    get EmpID() {
        return this._EmpID;
    },
    set EmpID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute EmpID in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._EmpID = val;
    },
    get FirstName() {
        return this._FirstName;
    },
    set FirstName(val) {
        this._FirstName = val;
    },
    get Gender() {
        return this._Gender;
    },
    set Gender(val) {
        this._Gender = val;
    },
    get Height() {
        return this._Height;
    },
    set Height(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute Height in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._Height = val;
    },
    get LastName() {
        return this._LastName;
    },
    set LastName(val) {
        this._LastName = val;
    },
    get SubscriptnID() {
        return this._SubscriptnID;
    },
    set SubscriptnID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute SubscriptnID in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._SubscriptnID = val;
    },
    get SubscriptnType() {
        return this._SubscriptnType;
    },
    set SubscriptnType(val) {
        this._SubscriptnType = val;
    },
    get RegNumber() {
        return this._RegNumber;
    },
    set RegNumber(val) {
        this._RegNumber = val;
    },
    get LastUpdatedTime() {
        return this._LastUpdatedTime;
    },
    set LastUpdatedTime(val) {
        this._LastUpdatedTime = val;
    },
    get MemberType() {
        return this._MemberType;
    },
    set MemberType(val) {
        this._MemberType = val;
    },
    get BillingAddr1() {
        return this._BillingAddr1;
    },
    set BillingAddr1(val) {
        this._BillingAddr1 = val;
    },
    get BillingAddr2() {
        return this._BillingAddr2;
    },
    set BillingAddr2(val) {
        this._BillingAddr2 = val;
    },
    get BillingCity() {
        return this._BillingCity;
    },
    set BillingCity(val) {
        this._BillingCity = val;
    },
    get BillingCountry() {
        return this._BillingCountry;
    },
    set BillingCountry(val) {
        this._BillingCountry = val;
    },
    get BillingState() {
        return this._BillingState;
    },
    set BillingState(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute BillingState in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._BillingState = val;
    },
    get BillingZipCode() {
        return this._BillingZipCode;
    },
    set BillingZipCode(val) {
        this._BillingZipCode = val;
    },
    get ConsWeightGain() {
        return this._ConsWeightGain;
    },
    set ConsWeightGain(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ConsWeightGain in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ConsWeightGain = val;
    },
    get CrntLifeTimeSta() {
        return this._CrntLifeTimeSta;
    },
    set CrntLifeTimeSta(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute CrntLifeTimeSta in MemberDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._CrntLifeTimeSta = val;
    },
    get DontRecvCalls() {
        return kony.sync.getBoolean(this._DontRecvCalls) + "";
    },
    set DontRecvCalls(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute DontRecvCalls in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._DontRecvCalls = val;
    },
    get DontCnctPhone() {
        return kony.sync.getBoolean(this._DontCnctPhone) + "";
    },
    set DontCnctPhone(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute DontCnctPhone in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._DontCnctPhone = val;
    },
    get DontCnctSMS() {
        return kony.sync.getBoolean(this._DontCnctSMS) + "";
    },
    set DontCnctSMS(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute DontCnctSMS in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._DontCnctSMS = val;
    },
    get DontSendCard() {
        return kony.sync.getBoolean(this._DontSendCard) + "";
    },
    set DontSendCard(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute DontSendCard in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._DontSendCard = val;
    },
    get DontSendCoupon() {
        return kony.sync.getBoolean(this._DontSendCoupon) + "";
    },
    set DontSendCoupon(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute DontSendCoupon in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._DontSendCoupon = val;
    },
    get EnrollmentDate() {
        return this._EnrollmentDate;
    },
    set EnrollmentDate(val) {
        this._EnrollmentDate = val;
    },
    get FeePaid() {
        return kony.sync.getBoolean(this._FeePaid) + "";
    },
    set FeePaid(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute FeePaid in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._FeePaid = val;
    },
    get LastAchvdMStone() {
        return this._LastAchvdMStone;
    },
    set LastAchvdMStone(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute LastAchvdMStone in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._LastAchvdMStone = val;
    },
    get LastContactDate() {
        return this._LastContactDate;
    },
    set LastContactDate(val) {
        this._LastContactDate = val;
    },
    get LastNteEntrDate() {
        return this._LastNteEntrDate;
    },
    set LastNteEntrDate(val) {
        this._LastNteEntrDate = val;
    },
    get LocationID() {
        return this._LocationID;
    },
    set LocationID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute LocationID in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._LocationID = val;
    },
    get MeetingDate() {
        return this._MeetingDate;
    },
    set MeetingDate(val) {
        this._MeetingDate = val;
    },
    get MtngOccrID() {
        return this._MtngOccrID;
    },
    set MtngOccrID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MtngOccrID in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MtngOccrID = val;
    },
    get CouponCode() {
        return this._CouponCode;
    },
    set CouponCode(val) {
        this._CouponCode = val;
    },
    get ExpirationDate() {
        return this._ExpirationDate;
    },
    set ExpirationDate(val) {
        this._ExpirationDate = val;
    },
    get LastUsedDate() {
        return this._LastUsedDate;
    },
    set LastUsedDate(val) {
        this._LastUsedDate = val;
    },
    get ProductID() {
        return this._ProductID;
    },
    set ProductID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ProductID in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ProductID = val;
    },
    get MissWeekPasses() {
        return this._MissWeekPasses;
    },
    set MissWeekPasses(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MissWeekPasses in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MissWeekPasses = val;
    },
    get NoWeeksAttended() {
        return this._NoWeeksAttended;
    },
    set NoWeeksAttended(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute NoWeeksAttended in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._NoWeeksAttended = val;
    },
    get Phone1() {
        return this._Phone1;
    },
    set Phone1(val) {
        this._Phone1 = val;
    },
    get PhoneType1() {
        return this._PhoneType1;
    },
    set PhoneType1(val) {
        this._PhoneType1 = val;
    },
    get Phone2() {
        return this._Phone2;
    },
    set Phone2(val) {
        this._Phone2 = val;
    },
    get PhoneType2() {
        return this._PhoneType2;
    },
    set PhoneType2(val) {
        this._PhoneType2 = val;
    },
    get PrevLifeTimeSta() {
        return this._PrevLifeTimeSta;
    },
    set PrevLifeTimeSta(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute PrevLifeTimeSta in MemberDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PrevLifeTimeSta = val;
    },
    get ShippingAddr1() {
        return this._ShippingAddr1;
    },
    set ShippingAddr1(val) {
        this._ShippingAddr1 = val;
    },
    get ShippingAddr2() {
        return this._ShippingAddr2;
    },
    set ShippingAddr2(val) {
        this._ShippingAddr2 = val;
    },
    get ShippingCity() {
        return this._ShippingCity;
    },
    set ShippingCity(val) {
        this._ShippingCity = val;
    },
    get ShippingCountry() {
        return this._ShippingCountry;
    },
    set ShippingCountry(val) {
        this._ShippingCountry = val;
    },
    get ShippingState() {
        return this._ShippingState;
    },
    set ShippingState(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ShippingState in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ShippingState = val;
    },
    get ShippingZipCode() {
        return this._ShippingZipCode;
    },
    set ShippingZipCode(val) {
        this._ShippingZipCode = val;
    },
    get StartDate() {
        return this._StartDate;
    },
    set StartDate(val) {
        this._StartDate = val;
    },
    get MemberStatus() {
        return this._MemberStatus;
    },
    set MemberStatus(val) {
        this._MemberStatus = val;
    },
    get TransactionType() {
        return this._TransactionType;
    },
    set TransactionType(val) {
        this._TransactionType = val;
    },
    get WeeksCompleted() {
        return this._WeeksCompleted;
    },
    set WeeksCompleted(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute WeeksCompleted in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeeksCompleted = val;
    },
    get WeightGain() {
        return this._WeightGain;
    },
    set WeightGain(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute WeightGain in MemberDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeightGain = val;
    },
    get MeetingId() {
        return this._MeetingId;
    },
    set MeetingId(val) {
        this._MeetingId = val;
    },
    get MemTypeUpdateDt() {
        return this._MemTypeUpdateDt;
    },
    set MemTypeUpdateDt(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute MemTypeUpdateDt in MemberDetails.\nExpected:\"long\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MemTypeUpdateDt = val;
    },
    get RegStatus() {
        return this._RegStatus;
    },
    set RegStatus(val) {
        this._RegStatus = val;
    },
    get MemberID() {
        return this._MemberID;
    },
    set MemberID(val) {
        this._MemberID = val;
    },
    get GoalWeight() {
        return this._GoalWeight;
    },
    set GoalWeight(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute GoalWeight in MemberDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._GoalWeight = val;
    },
    get GoalAchDate() {
        return this._GoalAchDate;
    },
    set GoalAchDate(val) {
        this._GoalAchDate = val;
    },
    get StartWeight() {
        return this._StartWeight;
    },
    set StartWeight(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute StartWeight in MemberDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._StartWeight = val;
    },
    get RegDate() {
        return this._RegDate;
    },
    set RegDate(val) {
        this._RegDate = val;
    },
    get IncompleteData() {
        return kony.sync.getBoolean(this._IncompleteData) + "";
    },
    set IncompleteData(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IncompleteData in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IncompleteData = val;
    },
    get PreRegNumber() {
        return this._PreRegNumber;
    },
    set PreRegNumber(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute PreRegNumber in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PreRegNumber = val;
    },
    get UniqueID() {
        return this._UniqueID;
    },
    set UniqueID(val) {
        this._UniqueID = val;
    },
    get UserStsEndPrd() {
        return this._UserStsEndPrd;
    },
    set UserStsEndPrd(val) {
        this._UserStsEndPrd = val;
    },
    get UserComments() {
        return this._UserComments;
    },
    set UserComments(val) {
        this._UserComments = val;
    },
    get UserStsChngRsn() {
        return this._UserStsChngRsn;
    },
    set UserStsChngRsn(val) {
        this._UserStsChngRsn = val;
    },
    get LocalTime() {
        return this._LocalTime;
    },
    set LocalTime(val) {
        this._LocalTime = val;
    },
    get IsPAYG() {
        return this._IsPAYG;
    },
    set IsPAYG(val) {
        this._IsPAYG = val;
    },
    get IsMemberInMtns() {
        return kony.sync.getBoolean(this._IsMemberInMtns) + "";
    },
    set IsMemberInMtns(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsMemberInMtns in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsMemberInMtns = val;
    },
    get EmailID() {
        return this._EmailID;
    },
    set EmailID(val) {
        this._EmailID = val;
    },
    get EnterpriseID() {
        return this._EnterpriseID;
    },
    set EnterpriseID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute EnterpriseID in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._EnterpriseID = val;
    },
    get LinkType() {
        return this._LinkType;
    },
    set LinkType(val) {
        this._LinkType = val;
    },
    get UserName() {
        return this._UserName;
    },
    set UserName(val) {
        this._UserName = val;
    },
    get IsFreshStart() {
        return kony.sync.getBoolean(this._IsFreshStart) + "";
    },
    set IsFreshStart(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsFreshStart in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsFreshStart = val;
    },
    get RefreshDate() {
        return this._RefreshDate;
    },
    set RefreshDate(val) {
        this._RefreshDate = val;
    },
    get SessionNumber() {
        return this._SessionNumber;
    },
    set SessionNumber(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute SessionNumber in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._SessionNumber = val;
    },
    get TrackerID() {
        return this._TrackerID;
    },
    set TrackerID(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute TrackerID in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._TrackerID = val;
    },
    get MaintenanceMode() {
        return kony.sync.getBoolean(this._MaintenanceMode) + "";
    },
    set MaintenanceMode(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute MaintenanceMode in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._MaintenanceMode = val;
    },
    get TrackerStartDate() {
        return this._TrackerStartDate;
    },
    set TrackerStartDate(val) {
        this._TrackerStartDate = val;
    },
    get FailedDate() {
        return this._FailedDate;
    },
    set FailedDate(val) {
        this._FailedDate = val;
    },
    get Eligible() {
        return kony.sync.getBoolean(this._Eligible) + "";
    },
    set Eligible(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute Eligible in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._Eligible = val;
    },
    get EligibleDate() {
        return this._EligibleDate;
    },
    set EligibleDate(val) {
        this._EligibleDate = val;
    },
    get PaidLastFee() {
        return kony.sync.getBoolean(this._PaidLastFee) + "";
    },
    set PaidLastFee(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute PaidLastFee in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PaidLastFee = val;
    },
    get WeightCountMet() {
        return kony.sync.getBoolean(this._WeightCountMet) + "";
    },
    set WeightCountMet(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute WeightCountMet in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeightCountMet = val;
    },
    get ReedeemedPasses() {
        return this._ReedeemedPasses;
    },
    set ReedeemedPasses(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute ReedeemedPasses in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._ReedeemedPasses = val;
    },
    get RedeemedDate() {
        return this._RedeemedDate;
    },
    set RedeemedDate(val) {
        this._RedeemedDate = val;
    },
    get IsDateRedeemed() {
        return this._IsDateRedeemed;
    },
    set IsDateRedeemed(val) {
        this._IsDateRedeemed = val;
    },
    get IsLink() {
        return this._IsLink;
    },
    set IsLink(val) {
        this._IsLink = val;
    },
    get IsCurrentWeekWeighed() {
        return kony.sync.getBoolean(this._IsCurrentWeekWeighed) + "";
    },
    set IsCurrentWeekWeighed(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute IsCurrentWeekWeighed in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._IsCurrentWeekWeighed = val;
    },
    get LastAttendanceDate() {
        return this._LastAttendanceDate;
    },
    set LastAttendanceDate(val) {
        this._LastAttendanceDate = val;
    },
    get MemberRole() {
        return this._MemberRole;
    },
    set MemberRole(val) {
        this._MemberRole = val;
    },
    get ProgramDuration() {
        return this._ProgramDuration;
    },
    set ProgramDuration(val) {
        this._ProgramDuration = val;
    },
    get isVoided() {
        return kony.sync.getBoolean(this._isVoided) + "";
    },
    set isVoided(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute isVoided in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._isVoided = val;
    },
    get PersonalGoalWeight() {
        return this._PersonalGoalWeight;
    },
    set PersonalGoalWeight(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute PersonalGoalWeight in MemberDetails.\nExpected:\"float\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._PersonalGoalWeight = val;
    },
    get PersonalGoalWeightDate() {
        return this._PersonalGoalWeightDate;
    },
    set PersonalGoalWeightDate(val) {
        this._PersonalGoalWeightDate = val;
    },
    get Locale() {
        return this._Locale;
    },
    set Locale(val) {
        this._Locale = val;
    },
    get CountryID() {
        return this._CountryID;
    },
    set CountryID(val) {
        this._CountryID = val;
    },
    get SubscriptnDate() {
        return this._SubscriptnDate;
    },
    set SubscriptnDate(val) {
        this._SubscriptnDate = val;
    },
    get Usertype() {
        return this._Usertype;
    },
    set Usertype(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)) {
            sync.log.error("Invalid data type for the attribute Usertype in MemberDetails.\nExpected:\"int\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._Usertype = val;
    },
    get PlanType() {
        return this._PlanType;
    },
    set PlanType(val) {
        this._PlanType = val;
    },
    get CommitmentDuration() {
        return this._CommitmentDuration;
    },
    set CommitmentDuration(val) {
        this._CommitmentDuration = val;
    },
    get WeightLossFocus() {
        return kony.sync.getBoolean(this._WeightLossFocus) + "";
    },
    set WeightLossFocus(val) {
        if (!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)) {
            sync.log.error("Invalid data type for the attribute WeightLossFocus in MemberDetails.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
        }
        this._WeightLossFocus = val;
    },
};
/************************************************************************************
 * Retrieves all instances of MemberDetails SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "DontContByEmail";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "DateOfBirth";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    orderByMap = kony.sync.formOrderByClause("MemberDetails", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAll->successcallback");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of MemberDetails present in local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllCount function");
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of MemberDetails using where clause in the local Database
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCount->successcallback");
        if (null !== res) {
            var count = null;
            count = res["count(*)"];
            kony.sync.verifyAndCallClosure(successcallback, {
                count: count
            });
        } else {
            sync.log.error("Some error occured while getting the count");
        }
    }
};
/************************************************************************************
 * Creates a new instance of MemberDetails in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "MemberDetails", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of MemberDetails in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].DontContByEmail = true;
 *		valuesArray[0].DateOfBirth = 0;
 *		valuesArray[0].Email = "Email_0";
 *		valuesArray[0].EmpID = 0;
 *		valuesArray[0].FirstName = "FirstName_0";
 *		valuesArray[0].Gender = "Gender_0";
 *		valuesArray[0].Height = 0;
 *		valuesArray[0].LastName = "LastName_0";
 *		valuesArray[0].SubscriptnID = 0;
 *		valuesArray[0].SubscriptnType = "SubscriptnType_0";
 *		valuesArray[0].RegNumber = "RegNumber_0";
 *		valuesArray[0].LastUpdatedTime = 0;
 *		valuesArray[0].MemberType = "MemberType_0";
 *		valuesArray[0].BillingAddr1 = "BillingAddr1_0";
 *		valuesArray[0].BillingAddr2 = "BillingAddr2_0";
 *		valuesArray[0].BillingCity = "BillingCity_0";
 *		valuesArray[0].BillingCountry = "BillingCountry_0";
 *		valuesArray[0].BillingState = 0;
 *		valuesArray[0].BillingZipCode = "BillingZipCode_0";
 *		valuesArray[0].ConsWeightGain = 0;
 *		valuesArray[0].CrntLifeTimeSta = 0;
 *		valuesArray[0].DontRecvCalls = true;
 *		valuesArray[0].DontCnctPhone = true;
 *		valuesArray[0].DontCnctSMS = true;
 *		valuesArray[0].DontSendCard = true;
 *		valuesArray[0].DontSendCoupon = true;
 *		valuesArray[0].EnrollmentDate = 0;
 *		valuesArray[0].FeePaid = true;
 *		valuesArray[0].LastAchvdMStone = 0;
 *		valuesArray[0].LastContactDate = 0;
 *		valuesArray[0].LastNteEntrDate = 0;
 *		valuesArray[0].LocationID = 0;
 *		valuesArray[0].MeetingDate = 0;
 *		valuesArray[0].MtngOccrID = 0;
 *		valuesArray[0].CouponCode = "CouponCode_0";
 *		valuesArray[0].ExpirationDate = 0;
 *		valuesArray[0].LastUsedDate = 0;
 *		valuesArray[0].ProductID = 0;
 *		valuesArray[0].MissWeekPasses = 0;
 *		valuesArray[0].NoWeeksAttended = 0;
 *		valuesArray[0].Phone1 = "Phone1_0";
 *		valuesArray[0].PhoneType1 = "PhoneType1_0";
 *		valuesArray[0].Phone2 = "Phone2_0";
 *		valuesArray[0].PhoneType2 = "PhoneType2_0";
 *		valuesArray[0].PrevLifeTimeSta = 0;
 *		valuesArray[0].ShippingAddr1 = "ShippingAddr1_0";
 *		valuesArray[0].ShippingAddr2 = "ShippingAddr2_0";
 *		valuesArray[0].ShippingCity = "ShippingCity_0";
 *		valuesArray[0].ShippingCountry = "ShippingCountry_0";
 *		valuesArray[0].ShippingState = 0;
 *		valuesArray[0].ShippingZipCode = "ShippingZipCode_0";
 *		valuesArray[0].StartDate = 0;
 *		valuesArray[0].MemberStatus = "MemberStatus_0";
 *		valuesArray[0].TransactionType = "TransactionType_0";
 *		valuesArray[0].WeeksCompleted = 0;
 *		valuesArray[0].WeightGain = 0;
 *		valuesArray[0].MeetingId = "MeetingId_0";
 *		valuesArray[0].MemTypeUpdateDt = 0;
 *		valuesArray[0].RegStatus = "RegStatus_0";
 *		valuesArray[0].GoalWeight = 0;
 *		valuesArray[0].GoalAchDate = 0;
 *		valuesArray[0].StartWeight = 0;
 *		valuesArray[0].RegDate = 0;
 *		valuesArray[0].IncompleteData = true;
 *		valuesArray[0].PreRegNumber = 0;
 *		valuesArray[0].UniqueID = "UniqueID_0";
 *		valuesArray[0].UserStsEndPrd = 0;
 *		valuesArray[0].UserComments = "UserComments_0";
 *		valuesArray[0].UserStsChngRsn = "UserStsChngRsn_0";
 *		valuesArray[0].IsPAYG = "IsPAYG_0";
 *		valuesArray[0].IsMemberInMtns = true;
 *		valuesArray[0].EmailID = "EmailID_0";
 *		valuesArray[0].EnterpriseID = 0;
 *		valuesArray[0].LinkType = "LinkType_0";
 *		valuesArray[0].UserName = "UserName_0";
 *		valuesArray[0].IsFreshStart = true;
 *		valuesArray[0].RefreshDate = 0;
 *		valuesArray[0].SessionNumber = 0;
 *		valuesArray[0].TrackerID = 0;
 *		valuesArray[0].MaintenanceMode = true;
 *		valuesArray[0].TrackerStartDate = 0;
 *		valuesArray[0].FailedDate = 0;
 *		valuesArray[0].Eligible = true;
 *		valuesArray[0].EligibleDate = 0;
 *		valuesArray[0].PaidLastFee = true;
 *		valuesArray[0].WeightCountMet = true;
 *		valuesArray[0].ReedeemedPasses = 0;
 *		valuesArray[0].RedeemedDate = 0;
 *		valuesArray[0].IsDateRedeemed = "IsDateRedeemed_0";
 *		valuesArray[0].IsLink = "IsLink_0";
 *		valuesArray[0].IsCurrentWeekWeighed = true;
 *		valuesArray[0].LastAttendanceDate = 0;
 *		valuesArray[0].MemberRole = "MemberRole_0";
 *		valuesArray[0].ProgramDuration = "ProgramDuration_0";
 *		valuesArray[0].isVoided = true;
 *		valuesArray[0].PersonalGoalWeight = 0;
 *		valuesArray[0].PersonalGoalWeightDate = 0;
 *		valuesArray[0].Locale = "Locale_0";
 *		valuesArray[0].CountryID = "CountryID_0";
 *		valuesArray[0].SubscriptnDate = 0;
 *		valuesArray[0].Usertype = 0;
 *		valuesArray[0].PlanType = "PlanType_0";
 *		valuesArray[0].CommitmentDuration = "CommitmentDuration_0";
 *		valuesArray[0].WeightLossFocus = true;
 *		valuesArray[1] = {};
 *		valuesArray[1].DontContByEmail = true;
 *		valuesArray[1].DateOfBirth = 1;
 *		valuesArray[1].Email = "Email_1";
 *		valuesArray[1].EmpID = 1;
 *		valuesArray[1].FirstName = "FirstName_1";
 *		valuesArray[1].Gender = "Gender_1";
 *		valuesArray[1].Height = 1;
 *		valuesArray[1].LastName = "LastName_1";
 *		valuesArray[1].SubscriptnID = 1;
 *		valuesArray[1].SubscriptnType = "SubscriptnType_1";
 *		valuesArray[1].RegNumber = "RegNumber_1";
 *		valuesArray[1].LastUpdatedTime = 1;
 *		valuesArray[1].MemberType = "MemberType_1";
 *		valuesArray[1].BillingAddr1 = "BillingAddr1_1";
 *		valuesArray[1].BillingAddr2 = "BillingAddr2_1";
 *		valuesArray[1].BillingCity = "BillingCity_1";
 *		valuesArray[1].BillingCountry = "BillingCountry_1";
 *		valuesArray[1].BillingState = 1;
 *		valuesArray[1].BillingZipCode = "BillingZipCode_1";
 *		valuesArray[1].ConsWeightGain = 1;
 *		valuesArray[1].CrntLifeTimeSta = 1;
 *		valuesArray[1].DontRecvCalls = true;
 *		valuesArray[1].DontCnctPhone = true;
 *		valuesArray[1].DontCnctSMS = true;
 *		valuesArray[1].DontSendCard = true;
 *		valuesArray[1].DontSendCoupon = true;
 *		valuesArray[1].EnrollmentDate = 1;
 *		valuesArray[1].FeePaid = true;
 *		valuesArray[1].LastAchvdMStone = 1;
 *		valuesArray[1].LastContactDate = 1;
 *		valuesArray[1].LastNteEntrDate = 1;
 *		valuesArray[1].LocationID = 1;
 *		valuesArray[1].MeetingDate = 1;
 *		valuesArray[1].MtngOccrID = 1;
 *		valuesArray[1].CouponCode = "CouponCode_1";
 *		valuesArray[1].ExpirationDate = 1;
 *		valuesArray[1].LastUsedDate = 1;
 *		valuesArray[1].ProductID = 1;
 *		valuesArray[1].MissWeekPasses = 1;
 *		valuesArray[1].NoWeeksAttended = 1;
 *		valuesArray[1].Phone1 = "Phone1_1";
 *		valuesArray[1].PhoneType1 = "PhoneType1_1";
 *		valuesArray[1].Phone2 = "Phone2_1";
 *		valuesArray[1].PhoneType2 = "PhoneType2_1";
 *		valuesArray[1].PrevLifeTimeSta = 1;
 *		valuesArray[1].ShippingAddr1 = "ShippingAddr1_1";
 *		valuesArray[1].ShippingAddr2 = "ShippingAddr2_1";
 *		valuesArray[1].ShippingCity = "ShippingCity_1";
 *		valuesArray[1].ShippingCountry = "ShippingCountry_1";
 *		valuesArray[1].ShippingState = 1;
 *		valuesArray[1].ShippingZipCode = "ShippingZipCode_1";
 *		valuesArray[1].StartDate = 1;
 *		valuesArray[1].MemberStatus = "MemberStatus_1";
 *		valuesArray[1].TransactionType = "TransactionType_1";
 *		valuesArray[1].WeeksCompleted = 1;
 *		valuesArray[1].WeightGain = 1;
 *		valuesArray[1].MeetingId = "MeetingId_1";
 *		valuesArray[1].MemTypeUpdateDt = 1;
 *		valuesArray[1].RegStatus = "RegStatus_1";
 *		valuesArray[1].GoalWeight = 1;
 *		valuesArray[1].GoalAchDate = 1;
 *		valuesArray[1].StartWeight = 1;
 *		valuesArray[1].RegDate = 1;
 *		valuesArray[1].IncompleteData = true;
 *		valuesArray[1].PreRegNumber = 1;
 *		valuesArray[1].UniqueID = "UniqueID_1";
 *		valuesArray[1].UserStsEndPrd = 1;
 *		valuesArray[1].UserComments = "UserComments_1";
 *		valuesArray[1].UserStsChngRsn = "UserStsChngRsn_1";
 *		valuesArray[1].IsPAYG = "IsPAYG_1";
 *		valuesArray[1].IsMemberInMtns = true;
 *		valuesArray[1].EmailID = "EmailID_1";
 *		valuesArray[1].EnterpriseID = 1;
 *		valuesArray[1].LinkType = "LinkType_1";
 *		valuesArray[1].UserName = "UserName_1";
 *		valuesArray[1].IsFreshStart = true;
 *		valuesArray[1].RefreshDate = 1;
 *		valuesArray[1].SessionNumber = 1;
 *		valuesArray[1].TrackerID = 1;
 *		valuesArray[1].MaintenanceMode = true;
 *		valuesArray[1].TrackerStartDate = 1;
 *		valuesArray[1].FailedDate = 1;
 *		valuesArray[1].Eligible = true;
 *		valuesArray[1].EligibleDate = 1;
 *		valuesArray[1].PaidLastFee = true;
 *		valuesArray[1].WeightCountMet = true;
 *		valuesArray[1].ReedeemedPasses = 1;
 *		valuesArray[1].RedeemedDate = 1;
 *		valuesArray[1].IsDateRedeemed = "IsDateRedeemed_1";
 *		valuesArray[1].IsLink = "IsLink_1";
 *		valuesArray[1].IsCurrentWeekWeighed = true;
 *		valuesArray[1].LastAttendanceDate = 1;
 *		valuesArray[1].MemberRole = "MemberRole_1";
 *		valuesArray[1].ProgramDuration = "ProgramDuration_1";
 *		valuesArray[1].isVoided = true;
 *		valuesArray[1].PersonalGoalWeight = 1;
 *		valuesArray[1].PersonalGoalWeightDate = 1;
 *		valuesArray[1].Locale = "Locale_1";
 *		valuesArray[1].CountryID = "CountryID_1";
 *		valuesArray[1].SubscriptnDate = 1;
 *		valuesArray[1].Usertype = 1;
 *		valuesArray[1].PlanType = "PlanType_1";
 *		valuesArray[1].CommitmentDuration = "CommitmentDuration_1";
 *		valuesArray[1].WeightLossFocus = true;
 *		valuesArray[2] = {};
 *		valuesArray[2].DontContByEmail = true;
 *		valuesArray[2].DateOfBirth = 2;
 *		valuesArray[2].Email = "Email_2";
 *		valuesArray[2].EmpID = 2;
 *		valuesArray[2].FirstName = "FirstName_2";
 *		valuesArray[2].Gender = "Gender_2";
 *		valuesArray[2].Height = 2;
 *		valuesArray[2].LastName = "LastName_2";
 *		valuesArray[2].SubscriptnID = 2;
 *		valuesArray[2].SubscriptnType = "SubscriptnType_2";
 *		valuesArray[2].RegNumber = "RegNumber_2";
 *		valuesArray[2].LastUpdatedTime = 2;
 *		valuesArray[2].MemberType = "MemberType_2";
 *		valuesArray[2].BillingAddr1 = "BillingAddr1_2";
 *		valuesArray[2].BillingAddr2 = "BillingAddr2_2";
 *		valuesArray[2].BillingCity = "BillingCity_2";
 *		valuesArray[2].BillingCountry = "BillingCountry_2";
 *		valuesArray[2].BillingState = 2;
 *		valuesArray[2].BillingZipCode = "BillingZipCode_2";
 *		valuesArray[2].ConsWeightGain = 2;
 *		valuesArray[2].CrntLifeTimeSta = 2;
 *		valuesArray[2].DontRecvCalls = true;
 *		valuesArray[2].DontCnctPhone = true;
 *		valuesArray[2].DontCnctSMS = true;
 *		valuesArray[2].DontSendCard = true;
 *		valuesArray[2].DontSendCoupon = true;
 *		valuesArray[2].EnrollmentDate = 2;
 *		valuesArray[2].FeePaid = true;
 *		valuesArray[2].LastAchvdMStone = 2;
 *		valuesArray[2].LastContactDate = 2;
 *		valuesArray[2].LastNteEntrDate = 2;
 *		valuesArray[2].LocationID = 2;
 *		valuesArray[2].MeetingDate = 2;
 *		valuesArray[2].MtngOccrID = 2;
 *		valuesArray[2].CouponCode = "CouponCode_2";
 *		valuesArray[2].ExpirationDate = 2;
 *		valuesArray[2].LastUsedDate = 2;
 *		valuesArray[2].ProductID = 2;
 *		valuesArray[2].MissWeekPasses = 2;
 *		valuesArray[2].NoWeeksAttended = 2;
 *		valuesArray[2].Phone1 = "Phone1_2";
 *		valuesArray[2].PhoneType1 = "PhoneType1_2";
 *		valuesArray[2].Phone2 = "Phone2_2";
 *		valuesArray[2].PhoneType2 = "PhoneType2_2";
 *		valuesArray[2].PrevLifeTimeSta = 2;
 *		valuesArray[2].ShippingAddr1 = "ShippingAddr1_2";
 *		valuesArray[2].ShippingAddr2 = "ShippingAddr2_2";
 *		valuesArray[2].ShippingCity = "ShippingCity_2";
 *		valuesArray[2].ShippingCountry = "ShippingCountry_2";
 *		valuesArray[2].ShippingState = 2;
 *		valuesArray[2].ShippingZipCode = "ShippingZipCode_2";
 *		valuesArray[2].StartDate = 2;
 *		valuesArray[2].MemberStatus = "MemberStatus_2";
 *		valuesArray[2].TransactionType = "TransactionType_2";
 *		valuesArray[2].WeeksCompleted = 2;
 *		valuesArray[2].WeightGain = 2;
 *		valuesArray[2].MeetingId = "MeetingId_2";
 *		valuesArray[2].MemTypeUpdateDt = 2;
 *		valuesArray[2].RegStatus = "RegStatus_2";
 *		valuesArray[2].GoalWeight = 2;
 *		valuesArray[2].GoalAchDate = 2;
 *		valuesArray[2].StartWeight = 2;
 *		valuesArray[2].RegDate = 2;
 *		valuesArray[2].IncompleteData = true;
 *		valuesArray[2].PreRegNumber = 2;
 *		valuesArray[2].UniqueID = "UniqueID_2";
 *		valuesArray[2].UserStsEndPrd = 2;
 *		valuesArray[2].UserComments = "UserComments_2";
 *		valuesArray[2].UserStsChngRsn = "UserStsChngRsn_2";
 *		valuesArray[2].IsPAYG = "IsPAYG_2";
 *		valuesArray[2].IsMemberInMtns = true;
 *		valuesArray[2].EmailID = "EmailID_2";
 *		valuesArray[2].EnterpriseID = 2;
 *		valuesArray[2].LinkType = "LinkType_2";
 *		valuesArray[2].UserName = "UserName_2";
 *		valuesArray[2].IsFreshStart = true;
 *		valuesArray[2].RefreshDate = 2;
 *		valuesArray[2].SessionNumber = 2;
 *		valuesArray[2].TrackerID = 2;
 *		valuesArray[2].MaintenanceMode = true;
 *		valuesArray[2].TrackerStartDate = 2;
 *		valuesArray[2].FailedDate = 2;
 *		valuesArray[2].Eligible = true;
 *		valuesArray[2].EligibleDate = 2;
 *		valuesArray[2].PaidLastFee = true;
 *		valuesArray[2].WeightCountMet = true;
 *		valuesArray[2].ReedeemedPasses = 2;
 *		valuesArray[2].RedeemedDate = 2;
 *		valuesArray[2].IsDateRedeemed = "IsDateRedeemed_2";
 *		valuesArray[2].IsLink = "IsLink_2";
 *		valuesArray[2].IsCurrentWeekWeighed = true;
 *		valuesArray[2].LastAttendanceDate = 2;
 *		valuesArray[2].MemberRole = "MemberRole_2";
 *		valuesArray[2].ProgramDuration = "ProgramDuration_2";
 *		valuesArray[2].isVoided = true;
 *		valuesArray[2].PersonalGoalWeight = 2;
 *		valuesArray[2].PersonalGoalWeightDate = 2;
 *		valuesArray[2].Locale = "Locale_2";
 *		valuesArray[2].CountryID = "CountryID_2";
 *		valuesArray[2].SubscriptnDate = 2;
 *		valuesArray[2].Usertype = 2;
 *		valuesArray[2].PlanType = "PlanType_2";
 *		valuesArray[2].CommitmentDuration = "CommitmentDuration_2";
 *		valuesArray[2].WeightLossFocus = true;
 *		com.kony.WeightWatchers.MemberSyncScope.MemberDetails.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var isProperData = true;
    var arrayLen = 0;
    var errorInfo = [];
    var arrayLength = valuesArray.length;
    var errObject = null;
    var isReferentialIntegrityFailure = false;
    var errMsg = null;
    if (kony.sync.enableORMValidations) {
        var newValuesArray = [];
        //column level validations
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var valuestable = valuesArray[i];
            if (kony.sync.attributeValidation(valuestable, "MemberDetails", errorcallback, true) === false) {
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

        function checkDuplicatePkCallback(tx) {
            arrayLength = valuesArray.length;
            for (var i = 0; valuesArray != null && i < arrayLength; i++) {
                var valuestable = valuesArray[i];
                var pks = [];
                errMsg = "MemberID=" + valuestable.MemberID;
                pks["MemberID"] = {
                    key: "MemberID",
                    value: valuestable.MemberID
                };
                errMsg = errMsg + ", PreRegNumber=" + valuestable.PreRegNumber;
                pks["PreRegNumber"] = {
                    key: "PreRegNumber",
                    value: valuestable.PreRegNumber
                };
                var wcs = [];
                if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
                if (resultset === false) {
                    isError = true;
                    return;
                }
                if (resultset.rows.length != 0) {
                    isError = true;
                    errMsg = "[" + errMsg + "]";
                    isDuplicateKey = true;
                    return;
                }
            }
            if (!isError) {
                checkIntegrity(tx);
            }
        }
    } else {
        //copying by value
        var newValuesArray = [];
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
        }
        valuesArray = newValuesArray;
        kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
    }

    function transactionErrorCallback() {
        if (isError == true) {
            //Statement error has occurred
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
        } else {
            //Transaction error has occurred
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
        }
    }

    function transactionSuccessCallback() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.createAll->transactionSuccessCallback");
        if (!isError) {
            kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
        } else {
            if (isReferentialIntegrityFailure) {
                kony.sync.verifyAndCallClosure(errorcallback, errObject);
            }
            if (isDuplicateKey) {
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
            }
        }
    }
    //foreign key constraints validations
    function checkIntegrity(tx) {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRelationshipMap(relationshipMap, valuesArray[i]);
            errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
            if (errObject === false) {
                isError = true;
                return;
            }
            if (errObject !== true) {
                isError = true;
                isReferentialIntegrityFailure = true;
                return;
            }
        }
    }
};
/************************************************************************************
 * Updates MemberDetails using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "MemberDetails", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates MemberDetails(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "MemberDetails", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPKTable());
    }
};
/************************************************************************************
 * Updates MemberDetails(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.DontContByEmail = true;
 *		inputArray[0].changeSet.DateOfBirth = "DateOfBirth_updated0";
 *		inputArray[0].changeSet.Email = "Email_updated0";
 *		inputArray[0].changeSet.EmpID = 0;
 *		inputArray[0].whereClause = "where MemberID = '0'";
 *		inputArray[0].whereClause = "where PreRegNumber = 0";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.DontContByEmail = true;
 *		inputArray[1].changeSet.DateOfBirth = "DateOfBirth_updated1";
 *		inputArray[1].changeSet.Email = "Email_updated1";
 *		inputArray[1].changeSet.EmpID = 1;
 *		inputArray[1].whereClause = "where MemberID = '1'";
 *		inputArray[1].whereClause = "where PreRegNumber = 1";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.DontContByEmail = true;
 *		inputArray[2].changeSet.DateOfBirth = "DateOfBirth_updated2";
 *		inputArray[2].changeSet.Email = "Email_updated2";
 *		inputArray[2].changeSet.EmpID = 2;
 *		inputArray[2].whereClause = "where MemberID = '2'";
 *		inputArray[2].whereClause = "where PreRegNumber = 2";
 *		com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "MEGNARetail";
        var tbname = "MemberDetails";
        var isError = false;
        var errObject = null;
        if (markForUpload == false || markForUpload == "false") {
            markForUpload = "false"
        } else {
            markForUpload = "true"
        }
        if ((kony.sync.enableORMValidations)) {
            var newInputArray = [];
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var v = inputArray[i];
                var valuestable = v.changeSet;
                var isEmpty = true;
                for (var key in valuestable) {
                    isEmpty = false;
                    break;
                }
                if (isEmpty) {
                    errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeNullValue, kony.sync.getErrorMessage(kony.sync.errorCodeNullValue)));
                    return;
                }
                var wcs = v.whereClause;
                var twcs = wcs;
                if (kony.sync.attributeValidation(valuestable, "MemberDetails", errorcallback, false) === false) {
                    return;
                }
                newInputArray[i] = [];
                newInputArray[i].changeSet = valuestable;
                newInputArray[i].whereClause = wcs;
            }
            inputArray = newInputArray;
            var connection = kony.sync.getConnectionOnly(dbname, dbname);
            kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
        } else {
            //copying by value
            var newInputArray = [];
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var v = inputArray[i];
                newInputArray[i] = kony.sync.CreateCopy(v);
            }
            inputArray = newInputArray;
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPKTable());
            }
        }

        function transactionErrorCallback() {
            if (errObject === false) {
                //Sql statement error has occcurred
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
                kony.sync.errorObject = null;
            } else if (errObject !== null) {
                // Referential integrity error has occurred
                kony.sync.verifyAndCallClosure(errorcallback, errObject);
            } else {
                //Transaction error has occurred
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
            }
        }
        //foreign key constraints validations
        function checkIntegrity(tx) {
            sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
                sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
                errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
                if (errObject === false) {
                    isError = true;
                    return;
                }
                if (errObject !== true) {
                    isError = true;
                    kony.sync.rollbackTransaction(tx);
                    return;
                }
            }
        }
    }
    /************************************************************************************
     * Deletes MemberDetails using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function MemberDetailsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK->MemberDetails_PKPresent successcallback");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (null !== record) {
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeCascade, "WeighDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.removeCascade, "MilestoneEligible", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.NoteDetails.removeCascade, "NoteDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.removeCascade, "RefferalDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeCascade, "SaleDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeCascade, "PreActivation", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
        var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
        if (deletedRows === false) {
            isError = true;
        }
    }

    function MemberDetailsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MemberDetailsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK->relationship success callback");
        if (pkNotFound === true) {
            kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
            return;
        }
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, {
                rowsdeleted: 1
            });
        }
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MemberDetailsTransactionCallback, MemberDetailsSuccessCallback, MemberDetailsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes MemberDetails(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove("where DateOfBirth like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function MemberDetails_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeCascade, "WeighDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.removeCascade, "MilestoneEligible", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.NoteDetails.removeCascade, "NoteDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.removeCascade, "RefferalDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeCascade, "SaleDetails", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeCascade, "PreActivation", false, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function MemberDetails_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove->MemberDetails_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, MemberDetails_removeTransactioncallback, MemberDetails_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes MemberDetails using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function MemberDetailsTransactionCallback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK -> MemberDetailsTransactionCallback");
        var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (null !== record && false != record) {
            deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
            if (deletedRows === false) {
                isError = true;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeCascade, "WeighDetails", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.removeCascade, "MilestoneEligible", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.NoteDetails.removeCascade, "NoteDetails", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.removeCascade, "RefferalDetails", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeCascade, "SaleDetails", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("MemberID");
            targetAttributes.push("MemberID");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeCascade, "PreActivation", false, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
    }

    function MemberDetailsErrorCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK -> MemberDetailsErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function MemberDetailsSuccessCallback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK -> MemberDetailsSuccessCallback");
        if (pkNotFound === true) {
            kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
            return;
        }
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, {
                rowsdeleted: 1
            });
        }
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, MemberDetailsTransactionCallback, MemberDetailsSuccessCallback, MemberDetailsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes MemberDetails(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function MemberDetails_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeCascade, "WeighDetails", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.removeCascade, "MilestoneEligible", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.NoteDetails.removeCascade, "NoteDetails", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.removeCascade, "RefferalDetails", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeCascade, "SaleDetails", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeCascade, "PreActivation", false, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function MemberDetails_removeSuccess() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove->MemberDetails_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, MemberDetails_removeTransactioncallback, MemberDetails_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves MemberDetails using primary key from the local Database. 
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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

    function mySuccCallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK-> success callback function");
        successcallback(com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves MemberDetails(s) using where clause from the local Database. 
 * e.g. com.kony.WeightWatchers.MemberSyncScope.MemberDetails.find("where DateOfBirth like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of MemberDetails with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
        return;
    }

    function markRecordForUpload(tx, record) {
        var versionMapMain = [];
        versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname);
        kony.sync.qb_set(query, versionMapMain);
        kony.sync.qb_where(query, wcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        return kony.sync.executeSql(tx, sql, params);
    }

    function markRecordForUploadHistory(tx, record) {
        var versionMap = [];
        versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        var twcs = [];
        twcs = wcs;
        kony.table.insert(twcs, {
            key: kony.sync.historyTableChangeTypeColumn,
            value: record[kony.sync.historyTableChangeTypeColumn],
            optype: "EQ",
            comptype: "AND"
        });
        versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
        kony.sync.qb_set(query, versionMap);
        kony.sync.qb_where(query, twcs);
        kony.table.remove(twcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        return kony.sync.executeSql(tx, sql, params);
    }

    function single_transaction_callback(tx) {
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
        kony.sync.qb_from(query, tbname);
        kony.sync.qb_where(query, wcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        var resultSet = kony.sync.executeSql(tx, sql, params);
        if (resultSet === false) {
            isError = true;
            return;
        }
        var num_records = resultSet.rows.length;
        if (num_records > 0) {
            recordsFound = true;
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, 0);
            var changeType = record[kony.sync.mainTableChangeTypeColumn];
            if (!kony.sync.isNullOrUndefined(changeType) && kony.string.startsWith("" + changeType, "9")) {
                recordsMarkedForUpload = 1;
                if (markRecordForUpload(tx, record) === false) {
                    isError = true;
                    return;
                }
            }
        }
        var query1 = kony.sync.qb_createQuery();
        kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
        kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
        kony.sync.qb_where(query1, wcs);
        var query1_compile = kony.sync.qb_compile(query1);
        var sql1 = query1_compile[0];
        var params1 = query1_compile[1];
        var resultSet1 = kony.sync.executeSql(tx, sql1, params1);
        if (resultSet1 !== false) {
            var num_records = resultSet1.rows.length;
            for (var i = 0; i <= num_records - 1; i++) {
                var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
                if (markRecordForUploadHistory(tx, record) === false) {
                    isError = true;
                    return;
                }
                recordsFound = true;
            }
        } else {
            isError = true;
        }
    }

    function single_transaction_success_callback() {
        if (recordsFound === true) {
            kony.sync.verifyAndCallClosure(successcallback, {
                count: recordsMarkedForUpload
            });
        } else {
            kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
        }
    }

    function single_transaction_error_callback(res) {
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }
    var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (connection != null) {
        kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
    }
};
/************************************************************************************
 * Marks instance(s) of MemberDetails matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var isError = false;
    var num_records_main = 0;
    wcs = kony.sync.validateWhereClause(wcs);
    if (!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
        wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
    } else {
        wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
    }

    function markRecordForUpload(tx, record) {
        var versionMapMain = [];
        versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname);
        kony.sync.qb_set(query, versionMapMain);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0] + " " + wcs;
        var params = query_compile[1];
        if (kony.sync.executeSql(tx, sql, params) === false) {
            return false;
        }
    }

    function markRecordForUploadHistory(tx, record) {
        var versionMap = [];
        versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        var twcs = "";
        twcs = wcs;
        twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
        versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
        kony.sync.qb_set(query, versionMap);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0] + " " + twcs;
        var params = query_compile[1];
        if (kony.sync.executeSql(tx, sql, params) === false) {
            return false;
        }
    }

    function single_transaction_callback(tx) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUpload->single_transaction_callback");
        //updating main table
        var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from \"" + tbname + "\" " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            isError = true;
            return;
        }
        num_records_main = resultSet.rows.length;
        for (var i = 0; i < num_records_main; i++) {
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
            if (markRecordForUpload(tx, record) === false) {
                isError = true;
                return;
            }
        }
        //updating history table
        var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            isError = true;
            return;
        }
        var num_records = resultSet.rows.length;
        for (var i = 0; i <= num_records - 1; i++) {
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
            if (markRecordForUploadHistory(tx, record) === false) {
                isError = true;
                return;
            }
        }
    }

    function single_transaction_success_callback() {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.markForUpload->single_transaction_error_callback");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }
    var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (connection != null) {
        kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
    }
};
/************************************************************************************
 * Retrieves instance(s) of MemberDetails pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from \"" + tbname + "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of MemberDetails pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of MemberDetails deferred for upload.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from \"" + tbname + "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to MemberDetails in local database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to MemberDetails's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var wcs = [];
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether MemberDetails's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
        return;
    }
    var twcs = [];
    twcs = kony.sync.CreateCopy(wcs);
    kony.table.insert(twcs, {
        key: kony.sync.mainTableChangeTypeColumn,
        value: "9%",
        optype: "LIKE",
        comptype: "AND"
    });
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, twcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];
    kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordDeferredForUpload->successcallback function");
        if (res.length === 1) {
            flag = true;
        } else {
            flag = false;
        }
        kony.sync.verifyAndCallClosure(successcallback, {
            deferred: flag
        });
    }
};
/************************************************************************************
 * isRecordPendingForUpload returns true or false depending on whether MemberDetails's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    var wcs = [];
    var flag;
    if (com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
        return;
    }
    var twcs = [];
    twcs = kony.sync.CreateCopy(wcs);
    kony.table.insert(twcs, {
        key: kony.sync.mainTableChangeTypeColumn,
        value: "9%",
        optype: "NOT LIKE",
        comptype: "AND"
    });
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, twcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];
    kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.isRecordPendingForUpload->successcallback function");
        if (res.length === 1) {
            flag = true;
        } else {
            flag = false;
        }
        kony.sync.verifyAndCallClosure(successcallback, {
            pending: flag
        });
    }
};
/************************************************************************************
 * Retrieves instances of WeighDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getWeighDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getWeighDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getWeighDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getWeighDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getWeighDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getWeighDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey
            });
            var tbname = "WeighDetails"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.WeighDetails();
                obj.DailyPtTarget = res[i].DailyPtTarget;
                obj.EmpID = res[i].EmpID;
                obj.IsAtndgMeeting = res[i].IsAtndgMeeting;
                obj.NoWeighIn = res[i].NoWeighIn;
                obj.LastUpdatedTime = res[i].LastUpdatedTime;
                obj.ManualWeighIn = res[i].ManualWeighIn;
                obj.MeetingDate = res[i].MeetingDate;
                obj.MtngOccrID = res[i].MtngOccrID;
                obj.MilestoneID = res[i].MilestoneID;
                obj.ReachedDate = res[i].ReachedDate;
                obj.WeekNumber = res[i].WeekNumber;
                obj.WeighInDate = res[i].WeighInDate;
                obj.Weight = res[i].Weight;
                obj.WeighId = res[i].WeighId;
                obj.WeighMSDate = res[i].WeighMSDate;
                obj.Height = res[i].Height;
                obj.LocationID = res[i].LocationID;
                obj.SessionNumber = res[i].SessionNumber;
                obj.MemberID = res[i].MemberID;
                obj.WeightLoss = res[i].WeightLoss;
                obj.modifiedLast = res[i].modifiedLast;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                obj.IsMemberAtRisk = res[i].IsMemberAtRisk;
                obj.WeeklyPointsAllowance = res[i].WeeklyPointsAllowance;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of WeighDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfWeighDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfWeighDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfWeighDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfWeighDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfWeighDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfWeighDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of MilestoneAchieved related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getMilestoneAchievedWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getMilestoneAchievedWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneAchievedWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneAchievedWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneAchievedWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneAchievedWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey
            });
            var tbname = "MilestoneAchieved"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
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
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of MilestoneAchieved related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfMilestoneAchievedWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfMilestoneAchievedWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneAchievedWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneAchievedWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneAchievedWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneAchievedWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of MilestoneEligible related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getMilestoneEligibleWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getMilestoneEligibleWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneEligibleWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneEligibleWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneEligibleWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getMilestoneEligibleWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey
            });
            var tbname = "MilestoneEligible"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible();
                obj.LastUpdatedTS = res[i].LastUpdatedTS;
                obj.MilestoneID = res[i].MilestoneID;
                obj.TargetWeight = res[i].TargetWeight;
                obj.MemberID = res[i].MemberID;
                obj.IsAchieved = res[i].IsAchieved;
                obj.LocationNum = res[i].LocationNum;
                obj.ReachedDate = res[i].ReachedDate;
                obj.WeekNumber = res[i].WeekNumber;
                obj.WeighInDate = res[i].WeighInDate;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of MilestoneEligible related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfMilestoneEligibleWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfMilestoneEligibleWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneEligibleWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneEligibleWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneEligibleWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfMilestoneEligibleWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of NoteDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getNoteDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getNoteDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getNoteDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getNoteDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getNoteDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getNoteDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey
            });
            var tbname = "NoteDetails"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.NoteDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.NoteDetails();
                obj.EmployeeID = res[i].EmployeeID;
                obj.EmployeeName = res[i].EmployeeName;
                obj.EntryDate = res[i].EntryDate;
                obj.NoteTypeID = res[i].NoteTypeID;
                obj.lastUpdateTime = res[i].lastUpdateTime;
                obj.Note = res[i].Note;
                obj.ID = res[i].ID;
                obj.MemberID = res[i].MemberID;
                obj.LocationID = res[i].LocationID;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of NoteDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfNoteDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfNoteDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfNoteDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfNoteDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfNoteDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfNoteDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.NoteDetails.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of RefferalDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getRefferalDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getRefferalDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRefferalDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRefferalDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRefferalDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRefferalDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey
            });
            var tbname = "RefferalDetails"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.RefferalDetails();
                obj.LocationID = res[i].LocationID;
                obj.MeetingDate = res[i].MeetingDate;
                obj.MeetingOccurrenceID = res[i].MeetingOccurrenceID;
                obj.MemberID = res[i].MemberID;
                obj.ReferredByMemberID = res[i].ReferredByMemberID;
                obj.ReferredByRegistrationNumber = res[i].ReferredByRegistrationNumber;
                obj.Type = res[i].Type;
                obj.LastUpdatedTime = res[i].LastUpdatedTime;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of RefferalDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfRefferalDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfRefferalDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfRefferalDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfRefferalDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfRefferalDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfRefferalDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of SaleDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getSaleDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getSaleDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getSaleDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getSaleDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getSaleDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getSaleDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey
            });
            var tbname = "SaleDetails"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.SaleDetails();
                obj.EmpID = res[i].EmpID;
                obj.IsReturn = res[i].IsReturn;
                obj.IsSaleVoid = res[i].IsSaleVoid;
                obj.LocationID = res[i].LocationID;
                obj.MeetingDate = res[i].MeetingDate;
                obj.MeetingOccurID = res[i].MeetingOccurID;
                obj.SaleDate = res[i].SaleDate;
                obj.TotalSalePrice = res[i].TotalSalePrice;
                obj.TotalSalePriceNew = res[i].TotalSalePriceNew;
                obj.TotalSaleTax = res[i].TotalSaleTax;
                obj.LastUpdated = res[i].LastUpdated;
                obj.SaleTransactnId = res[i].SaleTransactnId;
                obj.Response = res[i].Response;
                obj.RegNumber = res[i].RegNumber;
                obj.MemberID = res[i].MemberID;
                obj.IsServiceProvider = res[i].IsServiceProvider;
                obj.IsReturnTransaction = res[i].IsReturnTransaction;
                obj.isVoidAllowed = res[i].isVoidAllowed;
                obj.TransactionType = res[i].TransactionType;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                obj.IsEmployeeSale = res[i].IsEmployeeSale;
                obj.EmployeeNumber = res[i].EmployeeNumber;
                obj.IsPreActivated = res[i].IsPreActivated;
                obj.HasSplitPayment = res[i].HasSplitPayment;
                obj.SubsidyAmount = res[i].SubsidyAmount;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of SaleDetails related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfSaleDetailsWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfSaleDetailsWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfSaleDetailsWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfSaleDetailsWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfSaleDetailsWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfSaleDetailsWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of PreActivation related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getPreActivationWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getPreActivationWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPreActivationWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPreActivationWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPreActivationWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPreActivationWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].MemberID;
            wcs.push({
                key: "MemberID",
                value: targetKey
            });
            var tbname = "PreActivation"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.kony.WeightWatchers.MemberSyncScope.PreActivation.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new com.kony.WeightWatchers.MemberSyncScope.PreActivation();
                obj.MemberID = res[i].MemberID;
                obj.SaleTransactnId = res[i].SaleTransactnId;
                obj.MtngOccrID = res[i].MtngOccrID;
                obj.LocationID = res[i].LocationID;
                obj.Locale = res[i].Locale;
                obj.CountryID = res[i].CountryID;
                obj.PreactivationDate = res[i].PreactivationDate;
                obj.ActivationDate = res[i].ActivationDate;
                obj.lastUpdateTime = res[i].lastUpdateTime;
                obj.MeetingDate = res[i].MeetingDate;
                obj.ActivationStatus = res[i].ActivationStatus;
                obj.CouponCode = res[i].CouponCode;
                obj.ExpirationDate = res[i].ExpirationDate;
                obj.PassType = res[i].PassType;
                obj.PassDuration = res[i].PassDuration;
                obj.ID = res[i].ID;
                obj.IsCurrentSyncData = res[i].IsCurrentSyncData;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of PreActivation related to MemberDetails
 * with given MemberID from local database.
 *************************************************************************************/
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfPreActivationWithMemberID = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getCountOfPreActivationWithMemberID function");
    var pks = this.getPKTable();
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfPreActivationWithMemberID(pks, successcallback, errorcallback);
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfPreActivationWithMemberID = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfPreActivationWithMemberID function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getCountOfPreActivationWithMemberID", "relationship", errorcallback)) {
        return;
    }

    function MemberDetails_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].MemberID;
            targetAttributes.push("MemberID");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "MemberID": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "MemberID": targetKey
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            com.kony.WeightWatchers.MemberSyncScope.PreActivation.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK(pks, MemberDetails_successcallback, errorcallback);
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.removeCascade function");
    var tbname = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeCascade, "WeighDetails", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeCascade, "MilestoneAchieved", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.removeCascade, "MilestoneEligible", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.NoteDetails.removeCascade, "NoteDetails", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.removeCascade, "RefferalDetails", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeCascade, "SaleDetails", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("MemberID");
        targetAttributes.push("MemberID");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeCascade, "PreActivation", false, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
    }
    if (isCascade) {
        if (removeCascadeChildren() === false) {
            return false;
        }
        if (kony.sync.deleteBatch(tx, tbname, wcs, isLocal, markForUpload, null) === false) {
            return false;
        }
        return true;
    } else {
        var sql = "select * from \"" + tbname + "\" " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            return false;
        }
        var num_records = resultSet.rows.length;
        if (num_records === 0) {
            return true;
        } else {
            sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname, tbname, tbname, parentTable));
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity, kony.sync.getReferetialIntegrityDeleteErrMessg(tbname, tbname, tbname, parentTable)));
            return false;
        }
    }
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject = function(res) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.kony.WeightWatchers.MemberSyncScope.MemberDetails();
            obj.DontContByEmail = res[i].DontContByEmail;
            obj.DateOfBirth = res[i].DateOfBirth;
            obj.Email = res[i].Email;
            obj.EmpID = res[i].EmpID;
            obj.FirstName = res[i].FirstName;
            obj.Gender = res[i].Gender;
            obj.Height = res[i].Height;
            obj.LastName = res[i].LastName;
            obj.SubscriptnID = res[i].SubscriptnID;
            obj.SubscriptnType = res[i].SubscriptnType;
            obj.RegNumber = res[i].RegNumber;
            obj.LastUpdatedTime = res[i].LastUpdatedTime;
            obj.MemberType = res[i].MemberType;
            obj.BillingAddr1 = res[i].BillingAddr1;
            obj.BillingAddr2 = res[i].BillingAddr2;
            obj.BillingCity = res[i].BillingCity;
            obj.BillingCountry = res[i].BillingCountry;
            obj.BillingState = res[i].BillingState;
            obj.BillingZipCode = res[i].BillingZipCode;
            obj.ConsWeightGain = res[i].ConsWeightGain;
            obj.CrntLifeTimeSta = res[i].CrntLifeTimeSta;
            obj.DontRecvCalls = res[i].DontRecvCalls;
            obj.DontCnctPhone = res[i].DontCnctPhone;
            obj.DontCnctSMS = res[i].DontCnctSMS;
            obj.DontSendCard = res[i].DontSendCard;
            obj.DontSendCoupon = res[i].DontSendCoupon;
            obj.EnrollmentDate = res[i].EnrollmentDate;
            obj.FeePaid = res[i].FeePaid;
            obj.LastAchvdMStone = res[i].LastAchvdMStone;
            obj.LastContactDate = res[i].LastContactDate;
            obj.LastNteEntrDate = res[i].LastNteEntrDate;
            obj.LocationID = res[i].LocationID;
            obj.MeetingDate = res[i].MeetingDate;
            obj.MtngOccrID = res[i].MtngOccrID;
            obj.CouponCode = res[i].CouponCode;
            obj.ExpirationDate = res[i].ExpirationDate;
            obj.LastUsedDate = res[i].LastUsedDate;
            obj.ProductID = res[i].ProductID;
            obj.MissWeekPasses = res[i].MissWeekPasses;
            obj.NoWeeksAttended = res[i].NoWeeksAttended;
            obj.Phone1 = res[i].Phone1;
            obj.PhoneType1 = res[i].PhoneType1;
            obj.Phone2 = res[i].Phone2;
            obj.PhoneType2 = res[i].PhoneType2;
            obj.PrevLifeTimeSta = res[i].PrevLifeTimeSta;
            obj.ShippingAddr1 = res[i].ShippingAddr1;
            obj.ShippingAddr2 = res[i].ShippingAddr2;
            obj.ShippingCity = res[i].ShippingCity;
            obj.ShippingCountry = res[i].ShippingCountry;
            obj.ShippingState = res[i].ShippingState;
            obj.ShippingZipCode = res[i].ShippingZipCode;
            obj.StartDate = res[i].StartDate;
            obj.MemberStatus = res[i].MemberStatus;
            obj.TransactionType = res[i].TransactionType;
            obj.WeeksCompleted = res[i].WeeksCompleted;
            obj.WeightGain = res[i].WeightGain;
            obj.MeetingId = res[i].MeetingId;
            obj.MemTypeUpdateDt = res[i].MemTypeUpdateDt;
            obj.RegStatus = res[i].RegStatus;
            obj.MemberID = res[i].MemberID;
            obj.GoalWeight = res[i].GoalWeight;
            obj.GoalAchDate = res[i].GoalAchDate;
            obj.StartWeight = res[i].StartWeight;
            obj.RegDate = res[i].RegDate;
            obj.IncompleteData = res[i].IncompleteData;
            obj.PreRegNumber = res[i].PreRegNumber;
            obj.UniqueID = res[i].UniqueID;
            obj.UserStsEndPrd = res[i].UserStsEndPrd;
            obj.UserComments = res[i].UserComments;
            obj.UserStsChngRsn = res[i].UserStsChngRsn;
            obj.LocalTime = res[i].LocalTime;
            obj.IsPAYG = res[i].IsPAYG;
            obj.IsMemberInMtns = res[i].IsMemberInMtns;
            obj.EmailID = res[i].EmailID;
            obj.EnterpriseID = res[i].EnterpriseID;
            obj.LinkType = res[i].LinkType;
            obj.UserName = res[i].UserName;
            obj.IsFreshStart = res[i].IsFreshStart;
            obj.RefreshDate = res[i].RefreshDate;
            obj.SessionNumber = res[i].SessionNumber;
            obj.TrackerID = res[i].TrackerID;
            obj.MaintenanceMode = res[i].MaintenanceMode;
            obj.TrackerStartDate = res[i].TrackerStartDate;
            obj.FailedDate = res[i].FailedDate;
            obj.Eligible = res[i].Eligible;
            obj.EligibleDate = res[i].EligibleDate;
            obj.PaidLastFee = res[i].PaidLastFee;
            obj.WeightCountMet = res[i].WeightCountMet;
            obj.ReedeemedPasses = res[i].ReedeemedPasses;
            obj.RedeemedDate = res[i].RedeemedDate;
            obj.IsDateRedeemed = res[i].IsDateRedeemed;
            obj.IsLink = res[i].IsLink;
            obj.IsCurrentWeekWeighed = res[i].IsCurrentWeekWeighed;
            obj.LastAttendanceDate = res[i].LastAttendanceDate;
            obj.MemberRole = res[i].MemberRole;
            obj.ProgramDuration = res[i].ProgramDuration;
            obj.isVoided = res[i].isVoided;
            obj.PersonalGoalWeight = res[i].PersonalGoalWeight;
            obj.PersonalGoalWeightDate = res[i].PersonalGoalWeightDate;
            obj.Locale = res[i].Locale;
            obj.CountryID = res[i].CountryID;
            obj.SubscriptnDate = res[i].SubscriptnDate;
            obj.Usertype = res[i].Usertype;
            obj.PlanType = res[i].PlanType;
            obj.CommitmentDuration = res[i].CommitmentDuration;
            obj.WeightLossFocus = res[i].WeightLossFocus;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.filterAttributes function");
    var attributeTable = {};
    attributeTable.DontContByEmail = "DontContByEmail";
    attributeTable.DateOfBirth = "DateOfBirth";
    attributeTable.Email = "Email";
    attributeTable.EmpID = "EmpID";
    attributeTable.FirstName = "FirstName";
    attributeTable.Gender = "Gender";
    attributeTable.Height = "Height";
    attributeTable.LastName = "LastName";
    attributeTable.SubscriptnID = "SubscriptnID";
    attributeTable.SubscriptnType = "SubscriptnType";
    attributeTable.RegNumber = "RegNumber";
    attributeTable.LastUpdatedTime = "LastUpdatedTime";
    attributeTable.MemberType = "MemberType";
    attributeTable.BillingAddr1 = "BillingAddr1";
    attributeTable.BillingAddr2 = "BillingAddr2";
    attributeTable.BillingCity = "BillingCity";
    attributeTable.BillingCountry = "BillingCountry";
    attributeTable.BillingState = "BillingState";
    attributeTable.BillingZipCode = "BillingZipCode";
    attributeTable.ConsWeightGain = "ConsWeightGain";
    attributeTable.CrntLifeTimeSta = "CrntLifeTimeSta";
    attributeTable.DontRecvCalls = "DontRecvCalls";
    attributeTable.DontCnctPhone = "DontCnctPhone";
    attributeTable.DontCnctSMS = "DontCnctSMS";
    attributeTable.DontSendCard = "DontSendCard";
    attributeTable.DontSendCoupon = "DontSendCoupon";
    attributeTable.EnrollmentDate = "EnrollmentDate";
    attributeTable.FeePaid = "FeePaid";
    attributeTable.LastAchvdMStone = "LastAchvdMStone";
    attributeTable.LastContactDate = "LastContactDate";
    attributeTable.LastNteEntrDate = "LastNteEntrDate";
    attributeTable.LocationID = "LocationID";
    attributeTable.MeetingDate = "MeetingDate";
    attributeTable.MtngOccrID = "MtngOccrID";
    attributeTable.CouponCode = "CouponCode";
    attributeTable.ExpirationDate = "ExpirationDate";
    attributeTable.LastUsedDate = "LastUsedDate";
    attributeTable.ProductID = "ProductID";
    attributeTable.MissWeekPasses = "MissWeekPasses";
    attributeTable.NoWeeksAttended = "NoWeeksAttended";
    attributeTable.Phone1 = "Phone1";
    attributeTable.PhoneType1 = "PhoneType1";
    attributeTable.Phone2 = "Phone2";
    attributeTable.PhoneType2 = "PhoneType2";
    attributeTable.PrevLifeTimeSta = "PrevLifeTimeSta";
    attributeTable.ShippingAddr1 = "ShippingAddr1";
    attributeTable.ShippingAddr2 = "ShippingAddr2";
    attributeTable.ShippingCity = "ShippingCity";
    attributeTable.ShippingCountry = "ShippingCountry";
    attributeTable.ShippingState = "ShippingState";
    attributeTable.ShippingZipCode = "ShippingZipCode";
    attributeTable.StartDate = "StartDate";
    attributeTable.MemberStatus = "MemberStatus";
    attributeTable.TransactionType = "TransactionType";
    attributeTable.WeeksCompleted = "WeeksCompleted";
    attributeTable.WeightGain = "WeightGain";
    attributeTable.MeetingId = "MeetingId";
    attributeTable.MemTypeUpdateDt = "MemTypeUpdateDt";
    attributeTable.RegStatus = "RegStatus";
    attributeTable.MemberID = "MemberID";
    attributeTable.GoalWeight = "GoalWeight";
    attributeTable.GoalAchDate = "GoalAchDate";
    attributeTable.StartWeight = "StartWeight";
    attributeTable.RegDate = "RegDate";
    attributeTable.IncompleteData = "IncompleteData";
    attributeTable.PreRegNumber = "PreRegNumber";
    attributeTable.UniqueID = "UniqueID";
    attributeTable.UserStsEndPrd = "UserStsEndPrd";
    attributeTable.UserComments = "UserComments";
    attributeTable.UserStsChngRsn = "UserStsChngRsn";
    attributeTable.IsPAYG = "IsPAYG";
    attributeTable.IsMemberInMtns = "IsMemberInMtns";
    attributeTable.EmailID = "EmailID";
    attributeTable.EnterpriseID = "EnterpriseID";
    attributeTable.LinkType = "LinkType";
    attributeTable.UserName = "UserName";
    attributeTable.IsFreshStart = "IsFreshStart";
    attributeTable.RefreshDate = "RefreshDate";
    attributeTable.SessionNumber = "SessionNumber";
    attributeTable.TrackerID = "TrackerID";
    attributeTable.MaintenanceMode = "MaintenanceMode";
    attributeTable.TrackerStartDate = "TrackerStartDate";
    attributeTable.FailedDate = "FailedDate";
    attributeTable.Eligible = "Eligible";
    attributeTable.EligibleDate = "EligibleDate";
    attributeTable.PaidLastFee = "PaidLastFee";
    attributeTable.WeightCountMet = "WeightCountMet";
    attributeTable.ReedeemedPasses = "ReedeemedPasses";
    attributeTable.RedeemedDate = "RedeemedDate";
    attributeTable.IsDateRedeemed = "IsDateRedeemed";
    attributeTable.IsLink = "IsLink";
    attributeTable.IsCurrentWeekWeighed = "IsCurrentWeekWeighed";
    attributeTable.LastAttendanceDate = "LastAttendanceDate";
    attributeTable.MemberRole = "MemberRole";
    attributeTable.ProgramDuration = "ProgramDuration";
    attributeTable.isVoided = "isVoided";
    attributeTable.PersonalGoalWeight = "PersonalGoalWeight";
    attributeTable.PersonalGoalWeightDate = "PersonalGoalWeightDate";
    attributeTable.Locale = "Locale";
    attributeTable.CountryID = "CountryID";
    attributeTable.SubscriptnDate = "SubscriptnDate";
    attributeTable.Usertype = "Usertype";
    attributeTable.PlanType = "PlanType";
    attributeTable.CommitmentDuration = "CommitmentDuration";
    attributeTable.WeightLossFocus = "WeightLossFocus";
    var PKTable = {};
    PKTable.MemberID = {}
    PKTable.MemberID.name = "MemberID";
    PKTable.MemberID.isAutoGen = false;
    PKTable.PreRegNumber = {}
    PKTable.PreRegNumber.name = "PreRegNumber";
    PKTable.PreRegNumber.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject MemberDetails. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject MemberDetails. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject MemberDetails. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.DontContByEmail = this.DontContByEmail;
    valuesTable.DateOfBirth = this.DateOfBirth;
    valuesTable.Email = this.Email;
    valuesTable.EmpID = this.EmpID;
    valuesTable.FirstName = this.FirstName;
    valuesTable.Gender = this.Gender;
    valuesTable.Height = this.Height;
    valuesTable.LastName = this.LastName;
    valuesTable.SubscriptnID = this.SubscriptnID;
    valuesTable.SubscriptnType = this.SubscriptnType;
    valuesTable.RegNumber = this.RegNumber;
    valuesTable.LastUpdatedTime = this.LastUpdatedTime;
    valuesTable.MemberType = this.MemberType;
    valuesTable.BillingAddr1 = this.BillingAddr1;
    valuesTable.BillingAddr2 = this.BillingAddr2;
    valuesTable.BillingCity = this.BillingCity;
    valuesTable.BillingCountry = this.BillingCountry;
    valuesTable.BillingState = this.BillingState;
    valuesTable.BillingZipCode = this.BillingZipCode;
    valuesTable.ConsWeightGain = this.ConsWeightGain;
    valuesTable.CrntLifeTimeSta = this.CrntLifeTimeSta;
    valuesTable.DontRecvCalls = this.DontRecvCalls;
    valuesTable.DontCnctPhone = this.DontCnctPhone;
    valuesTable.DontCnctSMS = this.DontCnctSMS;
    valuesTable.DontSendCard = this.DontSendCard;
    valuesTable.DontSendCoupon = this.DontSendCoupon;
    valuesTable.EnrollmentDate = this.EnrollmentDate;
    valuesTable.FeePaid = this.FeePaid;
    valuesTable.LastAchvdMStone = this.LastAchvdMStone;
    valuesTable.LastContactDate = this.LastContactDate;
    valuesTable.LastNteEntrDate = this.LastNteEntrDate;
    valuesTable.LocationID = this.LocationID;
    valuesTable.MeetingDate = this.MeetingDate;
    valuesTable.MtngOccrID = this.MtngOccrID;
    valuesTable.CouponCode = this.CouponCode;
    valuesTable.ExpirationDate = this.ExpirationDate;
    valuesTable.LastUsedDate = this.LastUsedDate;
    valuesTable.ProductID = this.ProductID;
    valuesTable.MissWeekPasses = this.MissWeekPasses;
    valuesTable.NoWeeksAttended = this.NoWeeksAttended;
    valuesTable.Phone1 = this.Phone1;
    valuesTable.PhoneType1 = this.PhoneType1;
    valuesTable.Phone2 = this.Phone2;
    valuesTable.PhoneType2 = this.PhoneType2;
    valuesTable.PrevLifeTimeSta = this.PrevLifeTimeSta;
    valuesTable.ShippingAddr1 = this.ShippingAddr1;
    valuesTable.ShippingAddr2 = this.ShippingAddr2;
    valuesTable.ShippingCity = this.ShippingCity;
    valuesTable.ShippingCountry = this.ShippingCountry;
    valuesTable.ShippingState = this.ShippingState;
    valuesTable.ShippingZipCode = this.ShippingZipCode;
    valuesTable.StartDate = this.StartDate;
    valuesTable.MemberStatus = this.MemberStatus;
    valuesTable.TransactionType = this.TransactionType;
    valuesTable.WeeksCompleted = this.WeeksCompleted;
    valuesTable.WeightGain = this.WeightGain;
    valuesTable.MeetingId = this.MeetingId;
    valuesTable.MemTypeUpdateDt = this.MemTypeUpdateDt;
    valuesTable.RegStatus = this.RegStatus;
    if (isInsert === true) {
        valuesTable.MemberID = this.MemberID;
    }
    valuesTable.GoalWeight = this.GoalWeight;
    valuesTable.GoalAchDate = this.GoalAchDate;
    valuesTable.StartWeight = this.StartWeight;
    valuesTable.RegDate = this.RegDate;
    valuesTable.IncompleteData = this.IncompleteData;
    if (isInsert === true) {
        valuesTable.PreRegNumber = this.PreRegNumber;
    }
    valuesTable.UniqueID = this.UniqueID;
    valuesTable.UserStsEndPrd = this.UserStsEndPrd;
    valuesTable.UserComments = this.UserComments;
    valuesTable.UserStsChngRsn = this.UserStsChngRsn;
    valuesTable.IsPAYG = this.IsPAYG;
    valuesTable.IsMemberInMtns = this.IsMemberInMtns;
    valuesTable.EmailID = this.EmailID;
    valuesTable.EnterpriseID = this.EnterpriseID;
    valuesTable.LinkType = this.LinkType;
    valuesTable.UserName = this.UserName;
    valuesTable.IsFreshStart = this.IsFreshStart;
    valuesTable.RefreshDate = this.RefreshDate;
    valuesTable.SessionNumber = this.SessionNumber;
    valuesTable.TrackerID = this.TrackerID;
    valuesTable.MaintenanceMode = this.MaintenanceMode;
    valuesTable.TrackerStartDate = this.TrackerStartDate;
    valuesTable.FailedDate = this.FailedDate;
    valuesTable.Eligible = this.Eligible;
    valuesTable.EligibleDate = this.EligibleDate;
    valuesTable.PaidLastFee = this.PaidLastFee;
    valuesTable.WeightCountMet = this.WeightCountMet;
    valuesTable.ReedeemedPasses = this.ReedeemedPasses;
    valuesTable.RedeemedDate = this.RedeemedDate;
    valuesTable.IsDateRedeemed = this.IsDateRedeemed;
    valuesTable.IsLink = this.IsLink;
    valuesTable.IsCurrentWeekWeighed = this.IsCurrentWeekWeighed;
    valuesTable.LastAttendanceDate = this.LastAttendanceDate;
    valuesTable.MemberRole = this.MemberRole;
    valuesTable.ProgramDuration = this.ProgramDuration;
    valuesTable.isVoided = this.isVoided;
    valuesTable.PersonalGoalWeight = this.PersonalGoalWeight;
    valuesTable.PersonalGoalWeightDate = this.PersonalGoalWeightDate;
    valuesTable.Locale = this.Locale;
    valuesTable.CountryID = this.CountryID;
    valuesTable.SubscriptnDate = this.SubscriptnDate;
    valuesTable.Usertype = this.Usertype;
    valuesTable.PlanType = this.PlanType;
    valuesTable.CommitmentDuration = this.CommitmentDuration;
    valuesTable.WeightLossFocus = this.WeightLossFocus;
    return valuesTable;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.prototype.getPKTable function");
    var pkTable = {};
    pkTable.MemberID = {
        key: "MemberID",
        value: this.MemberID
    };
    pkTable.PreRegNumber = {
        key: "PreRegNumber",
        value: this.PreRegNumber
    };
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPKTable = function() {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPKTable function");
    var pkTable = [];
    pkTable.push("MemberID");
    pkTable.push("PreRegNumber");
    return pkTable;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.pkCheck function");
    var wc = [];
    if (!kony.sync.isNull(pks.MemberID)) {
        if (!kony.sync.isNull(pks.MemberID.value)) {
            wc.key = "MemberID";
            wc.value = pks.MemberID.value;
        } else {
            wc.key = "MemberID";
            wc.value = pks.MemberID;
        }
    } else {
        sync.log.error("Primary Key MemberID not specified in " + opName + " an item in MemberDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("MemberID", opName, "MemberDetails")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.PreRegNumber)) {
        if (!kony.sync.isNull(pks.PreRegNumber.value)) {
            wc.key = "PreRegNumber";
            wc.value = pks.PreRegNumber.value;
        } else {
            wc.key = "PreRegNumber";
            wc.value = pks.PreRegNumber;
        }
    } else {
        sync.log.error("Primary Key PreRegNumber not specified in " + opName + " an item in MemberDetails");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("PreRegNumber", opName, "MemberDetails")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.validateNull function");
    if (valuestable.EmpID !== undefined) {
        if (kony.sync.isNull(valuestable.EmpID) || kony.sync.isEmptyString(valuestable.EmpID)) {
            sync.log.error("Mandatory attribute EmpID is missing for the SyncObject MemberDetails.");
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MemberDetails", "EmpID")));
            return false;
        }
    }
    if (valuestable.MemberType !== undefined) {
        if (kony.sync.isNull(valuestable.MemberType) || kony.sync.isEmptyString(valuestable.MemberType)) {
            sync.log.error("Mandatory attribute MemberType is missing for the SyncObject MemberDetails.");
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MemberDetails", "MemberType")));
            return false;
        }
    }
    if (valuestable.EnrollmentDate !== undefined) {
        if (kony.sync.isNull(valuestable.EnrollmentDate) || kony.sync.isEmptyString(valuestable.EnrollmentDate)) {
            sync.log.error("Mandatory attribute EnrollmentDate is missing for the SyncObject MemberDetails.");
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MemberDetails", "EnrollmentDate")));
            return false;
        }
    }
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.validateNullInsert function");
    if (kony.sync.isNull(valuestable.EmpID) || kony.sync.isEmptyString(valuestable.EmpID)) {
        sync.log.error("Mandatory attribute EmpID is missing for the SyncObject MemberDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MemberDetails", "EmpID")));
        return false;
    }
    if (kony.sync.isNull(valuestable.MemberType) || kony.sync.isEmptyString(valuestable.MemberType)) {
        sync.log.error("Mandatory attribute MemberType is missing for the SyncObject MemberDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MemberDetails", "MemberType")));
        return false;
    }
    if (kony.sync.isNull(valuestable.EnrollmentDate) || kony.sync.isEmptyString(valuestable.EnrollmentDate)) {
        sync.log.error("Mandatory attribute EnrollmentDate is missing for the SyncObject MemberDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MemberDetails", "EnrollmentDate")));
        return false;
    }
    if (kony.sync.isNull(valuestable.PreRegNumber) || kony.sync.isEmptyString(valuestable.PreRegNumber)) {
        sync.log.error("Mandatory attribute PreRegNumber is missing for the SyncObject MemberDetails.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "MemberDetails", "PreRegNumber")));
        return false;
    }
    return true;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName = function() {
    return "MemberDetails";
};
// **********************************End MemberDetails's helper methods************************