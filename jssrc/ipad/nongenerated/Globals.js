// productSKUData array will have result of product table
var idealTimeOut = 60;
var productSKUData = [];
var shoppingcart = []; //Shopping cart Products summary
var glbLifetimeEligibility = false; // false = skip the checking and pass as is data ; true : use the variable global variable CurrentUserValues
var OffersData = [];
var MemberType = "Value";
var isMonitorLogEnable = true;
var promotionProductIDs = []; // Open Promotion Array
var glbMemberStatus = "";
var emptyDirectSale = false;
var glbMeetingDayCodeID = ""; // Stores Current Meeting DayCodeID
var glbMeetingType = ""; // Stores Current Meeting Type
var glbMeetingDTCTime = ""; // Stores Current Meeting DTCTime
//Added for first name and last name of logged in user
var glbUserFirstName = "";
var glbUserLastName = "";
var isFromPrefferedDelete = false; //Saved Location delete sync
var glblocationToBeDeleted = "";
var glbIsSelectedMemberExpired = false;
var glbLastWeightOfSelectedMember = 0;
var glbSelectedNonTagibleProduct = 0;
var glbMemberIDSelectedForProducReturn = ""; // MemberID Selected For Product Return
//Startdate on member profile
var glbStartDateMemberProfile = "";
var glbIsTallyTimesheetChanged = false;
var glbNonTangibleDataToBeSet = [];
var glbSelectedMemberData = {};
var glbSelectedMemberSearchIndex = 0;
var glbSelectedMemberMtngOccrID = 0;
var glbBatchAddToShowActionNWI = true; //By Default show NWI in Actions of Segment in Batch Add after Add Weigh
//Number OF Banks 
NUMBER_OF_BANKS = 5; //** MEG 7248
glbNumberOfBanks = 1;
//Global for Program Duration
var glbProgDurationForProcess = "";
//Global Default Types 
var glbSelectSubType = "3-1-1";
var glbSelectMemStatus = "1";
var glbSelectMemType = "1";
var glbOpenedSubscriptionPopup = false;
var glbIsInMaintance = false;
var tempcurrentstatusIndex = "";
/*Member Missed Week Columns*/
var glbRedeemedPasses = "";
var glbRedeemedDate = "";
var glbIsDateRedeemed = "";
var glbMissWeekPasses = "";
var glbMembershipType = "";
//Temporary Globals for Meeting change will Add/Enroll/Process
var glbTempCurrentMeetingValue = "";
var glbTempMeetingNum = "";
var glbTempMeetingStatus = "";
var glbIsWeekChanged = false;
var glbIsWeightAdded = false;
var glbMemberSubscpBefore = ""; // Stores member previous subscription
var glbChangeSubscDetected = false; // Is there a change in subscription plan if yes then send subscription id = 0
var glbRefferalMemberObj = {};
var glbLTCInfo = {};
var glbMemberInMeeting = 0;
var glbTotalMemberAtRisk = 0; // for MEGCA-9 
var glbIsFormPM = ""; // added for MEGCA-321 [Ankit]
var milestoneRes = [];
var NumOfMemberToShow = 100; // TODO: change this number as per requirement
var termMemberInfo;
var IsReEnrollScreen = "";
var gblIsMemberSearchPage = false; // To find whether searching from Advacned Search popup or Search Results
var glbLocationID = "";
var isMultipleLocation = false;
var glbLocationTypeId = ""; //added by namrata for subscription type pop up- 899 story
var AT_WORK_LOCATION_TYPE_ID = -100; //7 REVERTED "AT WORK" LOCATION IMPLEMENTATION
var glbMeetingNum = ""; // It has Meeting Occurance ID
var glbMeetingDate = "";
var glbMeetingLookupID = "";
var glbEmployeeId = "";
var glbEmployeeNumber = "";
var isSortAscendingHome = false;
var glbHeaderDate = "";
var glbLastSyncDate = "";
var glbLinkType = "None"; // Global Link Type
var isDirectSaleForm = false; // this is to check which is the current formvar isSortAscendingHome = false;
var isSortAscendingAdv = false;
var isMaintainace = false;
var isEligibleForLifetime = false;
var isEligibleForLTInChangeMemberType = false;
var isLifetimeInChangeMemberType = false;
var goalAchiveDate = "";
var goalWeight = "";
var isServiceProvider = false; //For checking if service provider is the current user
var discountforServiceProvider = 0.5; //Discount for Service Provider
var goalWeightAdded = false;
var goalAchieved = false;
var isCurrentMeetingDropdown = false;
var isNotEligibleForLifetime = false;
//var glbUserName = "anita.sado"; //TODO: Remove the hardcoded username during original implementation
var glbLoginName = "";
var glbLocationTitle = "";
var userMissedWeekPass = 0;
var isNotesDataPresent = false;
var memberIDCount = 0;
var IsViewMember = "";
var advanceSearchHeader = "";
var glbCurrentMeetingValue = "";
var IsNoMeetingSelected = false;
var stateName = "";
var selectedStateId = "";
var cityName = "";
var stickyNote = "";
var bmiNote = "";
var isBMINotesDataPresent = false;
var IsFromLocationSelected = false;
var IsTimerCalled = false;
var Is24hTimerCalled = false;
var MaxProductCartAmount;
var username = "";
var pwd = "";
var isNoteUpdated = false;
var isBMIoverloaded = false;
var glbSPAuthToken = "";
var isExpirationDate = false;
var isPayAsYouGo = false;
var isSearchPage = false;
var isScanInProgress = false;
var isFromHomeScreen = false;
var isFromTally = false;
var isFromForceSync = false;
var isAWSAfterTallySync = false;
var prevForm = ""; //** MEG 7180
var navigateForm = false; //** MEG 7180
var isBarcodeScanned = false;
var gblSubType = "";
var gblExpirationDate = "";
var stateID;
var glbHeaderDate = "";
var glbMemberId;
var glbNoteID = "";
var goalWeightSub = "";
var isLifetime = false;
var glbMeetingStatus = "";
var isClickedOnIcon = "";
var isSortAscendingHomeFName = false;
var isSortAscendingHomeSubType = false;
var avgWeightLoss = 0.0;
var glbMilestoneName = "";
var selectedMemberData = "";
var isPMFromHomeScreen = false;
var stateNameDefault = "";
var cityNameDefault = "";
var IsSyncRunning = false;
var glbCouponCode = "";
var glbTallyDefaultDataInserted = false;
var glbLocationNum = "";
var glbCurrency = "$";
var checkDifferenceFlag = false;
var applyExtraCalculationBasedOnSKUForSubscriptionType = false; //for 922 story-if subscription plan e.g 12 week then do some extra calculation on price
var glbRegNo = 0; //Stores Present Member's Registration Number
var glbRegNoForProcess = 0;
var productCartTotalAmount = glbCurrency + "0.00"; //payment screen total
var productCartSubTotal = "0.00";
var productCartTaxTotal = "0.00";
var amountForChangeOwnedForPayment = "0.00"; // for recipet screen 
var amountForChangeReturnFormatForPayment = "Cash"; // for recipet screen
var amountMemberHasSubmittedForPayment = "0.00"; // for recipet screen
var excludeSKUList = " and sku not in (331, 350, 353, 375, 385, 400, 450, 455, 481, 500, 501, 503, 507, 250, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709)";
var glbBackOfficerRefID = "";
var glbCurrentMeetingTypeId = "";
var glbOpenHousMeetingObj = {
    "meetingTypeId": "9"
};
var isSelMeetingOpenHours = false;
var glbSelectedMeetingStartTime = "";
var glbSelectedMeetingEndTime = "";
var IsProductFlowFromCheckedIn = false;
var isFromFMP = false;
var linkChangeDetected = false; //added by Praveen Kalal MEG-3807
var MissedWeekWeightData = []; //holds wieght detail for missed week attendence
var isFromPreActivationHeight = false;
//Login Details 
var glbLoginUsername = ""; // Stores username
var glbLoginPassword = ""; // Stores password
var glbLoginPopupOpen = false; // Is Login Open
var glbIsUserLoggedIn = false;
//Phase1 Global Variable added for Flow of Direct Sale
var IsDirectSale = "";
var IsProductFlowFromSearch = false;
var IsSimpleReturn = "";
var IsTallyCashout = "";
var glbFirstNamePM = "";
var glbLastNamePM = "";
var glbRemoveMegtingsDays = 30;
var bankDepositSlip = "";
//phase 1 global variables for tally add timesheet validation
var allowedBeforeMeetingTimeInMinutes = 60; //Time In value must be > (Meeting start time - X minutes)
var allowedAfterMeetingMaxMinutes = 60; //Time Out value must be < (Meeting end time + Y minutes)
var allowedMinutesForTimeInAfterMeetingSTart = 180; //Time in must be (meeting starttime = "1 pm") <= 2pm && >=12:45 PM
var allowdMaxDurationMinutesForMeeting = 180; //end time must be (meeting_starttime = 1pm ) >= 4pm(1pm + 180 mins )
var gblWeightDataAvailable = "";
var glbSelectedMemberSessionNumber = 1; //fresh start -116
var glbObjMemberFreshStart = [];
var glbArrMemberFreshStart = {};
var blnFreshStartWeightChanged = false;
var glbMemberStartWeightUpdated = false;
var glbTallyCashout = {};
var MissWeekPasses = 0;
var ReedeemedPasses = 0;
//var gblMeetingSyncObject = new com.kony.WeightWatchers.MemberSyncScope.MemberDetails();
var isGoalWeightAvailable = false; //added by praveen to fix MEG-2602
var isMemberAcive = false; //added by praveen to fix MEG-2602
var glbLastGlbSubType;
var glbLastCouponCode;
var glbLastExpDate;
// all screens of application
var IsFFIInBackGround = false;
var isFromOffersForm = false;
var glbIsTaxCollected = true;
var missedWeek = 0;
var isMissedWeekPopupShowed = false;
var isOnlineMPMember = false;
var isFromAdvanceSearch = false;
var isPersonalGoalWeight = false;
var personalGoalDate = null;
var isDisplayPersonalGoalAlert = false;
var glbPersonalGoalWeight = 0;
var isDisplayPersonalGoalAlertOnce = false;
var glbIsPersonalGoalFeatureEnable = false;
var glbIsStarterFeeFeatureEnable = true;
var gblSourceVal = "MEG";
var gblLinkInfoForOnlineMember = {};
var IsRedeemOptionOfStarterFee = false;
var glbHelpURL = "http://api.meg.devstage1.weightwatchers.com/meghelp.html";
var glbTallyDiffReasonArray = [];
var glbBindTallyDiffReasonArray = false;
var IsAtRisk = false; //Added for MEGCN-14
var glbIsCreditCardEnabled = false;
var glbIsMPActivationEnabled = false;
var glbIsDisplayCCAmtRefundAlert = false;
var glbDisplayCCAmtRefundAlertMsg = "";
//var glbMPActivationMemberID = "";
//var glbMPActivationCoupon = "";
var glbMPActivationSegmentData = [];
var glbMPActivationSelectedData = {};
//var glbIsMPActivationHomeScreenFlow = false; 
var glbScrollbxDefaultHeight = 14;
var glbFormName;
var lastWeightFor5Lb = 0; //Added By PK MEGCA-434
var linkObj = {}; //Added for MEG-5044
var needTorRefreshToken = false; // MEG-5281 - AD
var isSyncForActivation = false;
var glbCurrentMemberSelectedData;
var glbSendReceiptCounter = 0;
var glbSendReceiptDisplayCounter = 0;
var glbSelectedMemberToLink = {};
var IsAWSLocation = false;
var IsInfoSession = false; //**MEG 7312
var isNonTangibleDataPresent = false;
var lifeTimeTypes = ['LIFETIME', 'LIFETIMEDISCOUNT', 'LIFETIMEDISCOUNTNEW'];
var minAgeForNewMember = 13;
var reasonMasterData = [];
var isPaymentByBTDevice = false;
var externalDeviceTypes = {
    "MSRReader": "IPCreditCard"
};
var paymentOptions = {
    "strCash": ["US", "CA"],
    "strCredit": ["US", "CA"],
    "strDebitCard": ["CA"],
    "strbtnCheck": ["US"],
    "strCreditSlip": ["US", "CA"],
    "strSplit": ["US"]
        // "strCCIngenico":["US"]
}
var syncErrorCode = [{
    "errorCode": "SY3001E",
    "errorMessage": "The App version is not the latest one. Please upgrade the application."
}, {
    "errorCode": "SY3002E",
    "errorMessage": "The App version is not the latest one. Please Reinstall the application."
}];
var listOfServicesNotDisplayLoading = ["runTransaction", "PeripheralStatusLog", "ActivityLogInsert", "SaleReceiptREST", "runTransaction_New", "runTranTokenCreation", "runTranBillingWithToken", "ActivityLogInsertREST", "PeripheralStatusLogREST", "CybersourceTransactionLogREST"];
var WWLinkRole = {
    ETools: "ETools",
    All: "All"
};
var ScreenNames = {
    Login: "frmLogin",
    EnrollNewMember: "frmEnrollNewMember",
    EnrollWeighMember: "frmEnrollWeighMember",
    EnrollWighPayment: "frmEnrollNewMemberPayment",
    ProcessMember: "frmProcessMember",
    SelectMeeting: "frmSelectMeeting",
    CheckOut: "frmProcessMember",
    HomeScreen: "frmHomeScreen",
    EnrollReturningMember: "frmEnrollReturningMember",
    TallyCashout: "frmTallyMeetingCashout",
    TallyTimeSheet: "frmTallyMeetingTimeSheet",
    TallyReport: "frmTallyMeetingReport"
};
// All Controls
var controls = {
    Button: "Button",
    Form: "Form",
    TextBox: "TextBox",
    HBox: "HBox",
    VBox: "VBox",
    Segment: "Segment"
};
// All Events
var events = {
    Click: "onClick",
    Done: "onDone",
    EndEditing: "onEndEditing",
    RowClick: "onRowClick",
    PostShow: "postShow",
    PreShow: "preShow",
    init: "init"
};
/*
 * DECLARE ALL SERVICES BELOW	
 */
var JsonService = true;
var Services = {};

function setRESTHeader() {
    return headerParamForREST = {
        "AccessToken": glbSPAuthToken,
        "deviceID": gblDeviceID,
        "Source": gblSourceVal,
        "EmployeeID": glbEmployeeId.toString(),
        "LastSyncDate": "",
        "Accept": "application/json",
        "Locale": (in_array(deviceLocale, Countries["US"])) ? "en-us" : ((deviceLocale == "en_CA") ? "en-ca" : "fr-ca")
    };
}
if (JsonService) {
    Services = {
        Login: "LoginService",
        GetLocationsService: "LocationSearchREST",
        searchMember: "SearchMemberREST", //** MEG 6493
        searchEmployee: "SearchEmployeeREST", //** MEG 6493
        memberWeight: "GetMemberWeightREST", //** MEG 6493
        Authorize: "AuthorizeServiceREST",
        memberNote: "GetNoteREST", //** MEG 6493
        issueSession: "IssueSessionREST", //** MEG 6493
        MemberMilestone: "MemberMilestoneREST", //** MEG 6493
        validateBankDepositSlipNumber: "MeetingSearchREST",
        TallyTimesheetSearch: "TallyTimesheetSearchREST",
        LocationGetAll: "LocationGetAllREST",
        CompMemberWeightAndMilestone: "MemberWeightAndMilestoneREST",
        CheckValidMP: "CheckValidMP",
        LogActivity: "ActivityLogInsertREST", //** MEG 6493
        PreActivate: "PreActivateREST", //** MEG 6493
        //CheckValidMP: "CheckValidMP",
        MeetingTally: "MeetingTallyJSON",
        TallyMeetingFeeGet: "GetTallyMeetingFeeREST",
        TallyPaymentGet: "GetTallyPaymentREST",
        TallySaleGet: "GetTallySaleREST",
        TallySummaryGet: "GetTallySummaryREST",
        TallyTimesheetGet: "GetTallyTimesheetREST",
        linkMember: "LinkREST", //** MEG 6493
        RegNumberValidate: "RegNumberValidateREST", //** MEG 6493
        GetAppSetting: "GetAppSettingREST",
        GetMemberReport: "GetMemberReportREST", //** MEG 6493// Added for MEGCA-96
        runTransaction: "runTransaction_New",
        runTranTokenCreation: "runTranTokenCreation",
        runTranBillingWithToken: "runTranBillingWithToken",
        voidCCTransaction: "voidCCTransaction",
        CybersourceTransactionLog: "CybersourceTransactionLogREST", //** MEG 6493
        PeripheralStatusLog: "PeripheralStatusLogREST", //** MEG 6493
        GetMemberActivation: "GetActivationStatusREST", //** MEG 6493
        ActivateMP: "ActivateMPREST", //** MEG 6493
        SaleReceipt: "SaleReceiptREST",
        GetPeripheralInfo: "GetPeripheralInfoREST",
        PeripheralInfoUpdate: "PeripheralInfoUpdateREST",
        GetAppVersionDetails: "GetAppVersionDetailsREST",
        GetMeetings: "GetMeetings", //**MEG 7357
        searchMemberForDuplicateMP: "searchMemberForDuplicateMP" //**MEG 6638
    }
} else {
    Services = {
        Login: "LoginService",
        GetLocationsService: "SearchLocation",
        searchMember: "SearchMember",
        searchEmployee: "SearchEmployee",
        memberWeight: "MemberWeight",
        Authorize: "AuthorizeService",
        memberNote: "GetNote",
        issueSession: "IssueSession",
        MemberMilestone: "MemberMilestone",
        validateBankDepositSlipNumber: "MeetingSearch",
        TallyTimesheetSearch: "TallyTimesheetSearch",
        LocationGetAll: "LocationGetAll",
        CompMemberWeightAndMilestone: "MemberWeightAndMilestone",
        CheckValidMP: "CheckValidMP",
        LogActivity: "ActivityLogInsert",
        PreActivate: "PreActivate",
        //CheckValidMP: "CheckValidMP",
        MeetingTally: "MeetingTally",
        TallyMeetingFeeGet: "TallyMeetingFeeGet",
        TallyPaymentGet: "TallyPaymentGet",
        TallySaleGet: "TallySaleGet",
        TallySummaryGet: "TallySummaryGet",
        TallyTimesheetGet: "TallyTimesheetGet",
        linkMember: "Link",
        RegNumberValidate: "RegNumberValidate",
        GetAppSetting: "GetAppSetting",
        GetMemberReport: "GetMemberReport", // Added for MEGCA-96
        runTransaction: "runTransaction_New",
        runTranTokenCreation: "runTranTokenCreation",
        runTranBillingWithToken: "runTranBillingWithToken",
        voidCCTransaction: "voidCCTransaction",
        CybersourceTransactionLog: "CybersourceTransactionLog",
        PeripheralStatusLog: "PeripheralStatusLog",
        GetMemberActivation: "GetActivationStatus",
        ActivateMP: "ActivateMP",
        SaleReceipt: "SaleReceiptREST"
    }
}
/*
 * Identifying the Flow through this Enum
 */
var FlowForScreens = {
    Enroll: "Enroll",
    ReEnroll: "ReEnroll",
    ProcessMember: "ProcessMember",
    AddIndividual: "AddIndividual",
    Website: "Website",
    PreRegistered: "PreRegistered",
    ViewMember: "ViewMember",
    BatchAddMember: "BatchAddMember",
    DirectSale: "DirectSale",
    SimpleReturn: "SimpleReturn",
    TallyCashout: "TallyCashout",
    PreActivation: "PreActivation"
}
var FlowForMonitor = {
    LogIn: "LogIn",
    ProcessMember: "ProcessMember",
    Search: "Search",
    ForceSync: "Force Sync",
    EditMember: "EditMember",
    ServiceCall: "Service Call",
    Tally: "Tally",
    RegNumber: "RegNumber",
    Update: "Update"
}
var SyncObject = {
        MemberDetails: "MemberDetails",
        WeighDetails: "WeighDetails",
        MilestoneAchieved: "MilestoneAchieved",
        MilestoneEligible: "MilestoneEligible",
        SaleDetails: "SaleDetails",
        SaleItems: "SaleItems",
        SalePayments: "SalePayments",
        NoteDetails: "NoteDetails",
        TallyMeeting: "TallyMeeting",
        TallyMeetingFee: "TallyMeetingFee",
        TallySales: "TallySales",
        TallyTimesheet: "TallyTimesheet",
        TallyInfo: "TallyInfo",
        TallySummary: "TallySummary"
    }
    /*
    	Global Temp Object For Current User Details
    */
var CurrentMemberValues = {
        memberId: "",
        currentWeight: "",
        memberType: "",
        goalWeight: "",
        memberStatus: "",
        startWeight: "",
        isMaintainace: "",
        isLifeTime: "",
        goalAchDate: "",
        subscriptionType: "",
        TrackerID: "",
        MaintenanceMode: "",
        TrackerStartDate: "",
        FailedDate: "",
        Eligible: "",
        EligibleDate: "",
        WeightCountMet: "",
        PaidLastFee: ""
    }
    /*
    	LINK UNLINK Values
    */
var currentMemberLinkValues = {
        EmailID: "",
        EnterpriseID: 0,
        LinkType: "None",
        UserName: "",
        IsLink: 'true'
    }
    /*
     * Member Type Enum
     */
var MemberTypeEnum = {
    Value: "1",
    LifeTime: "7",
    AtWork: "2"
}
var MemberValueEnum = {
        1: "Value",
        7: "LifeTime",
        6: "Senior",
        2: "AtWork"
    }
    //User types Added for MEG-5568
var UserType = {
        "Employee": 1,
        "Member": 2,
        "Visitor": 3
    }
    /*
     * Member Status Enum
     */
var MemberStatusEnum = {
        1: "Active",
        2: "Inactive",
        3: "Terminated",
        4: "MissYouSent"
    }
    /*
     *  Registratio Status Enum
     */
var MemberRegEnum = {
        Registered: "Registered",
        Pre_Registered: "PreRegistered",
        Website: "Website",
        Online: "Online"
    }
    // MemberRole ENUM
var MemberRoleEnum = {
    1: "AtWork",
    2: "Member"
}
var MemberSubscriptionTypeEnum = {
    "Monthly Pass-Buy New": "MonthlyPass",
    "Monthly Pass-Redeem": "MonthlyPass",
    "3 Months Pass - Buy": "MonthlyPass",
    "6 Months Pass - Buy": "MonthlyPass",
    "12 Months Pass - Buy": "MonthlyPass",
    "6 Months LTC": "MonthlyPass", //** MEG 6434
    "12 Months LTC": "MonthlyPass", //** MEG 6434
    "3 Months LTC": "MonthlyPass", //MEG-6957
    //"6 Months Pass - Redeem": "MonthlyPass",
    //"12 Months Pass - Redeem":"MonthlyPass",
    "17 Week Pass-Buy New": "SeventeenWeekPass",
    "17 Week Pass-Redeem": "SeventeenWeekPass",
    "20 Week Pass-Buy New": "WeeklyPass",
    "20 Week Pass-Redeem": "WeeklyPass",
    "Pay as you go": "",
    "Forgot Monthly Pass": "MonthlyPass",
    "Prepaid": "Prepaid",
    "Achat - CM 1 Mois": "MonthlyPass",
    "CM Prépayée": "MonthlyPass",
    "Achat - CM 3 Mois": "MonthlyPass",
    "Achat - CM 6 Mois": "MonthlyPass",
    "Carte mensuelle de 12 mois - acheter": "MonthlyPass",
    "Acheter un nouveau laissez-passer de 17 semaines": "SeventeenWeekPass",
    "Échanger un laissez-passer de 17 semaines": "SeventeenWeekPass",
    "Achat - 20 SEM": "WeeklyPass",
    "20 SEM Prépayées": "WeeklyPass",
    "Au fur et à mesure": "",
    "Carte mensuelle ACCÈS": "MonthlyPass",
    "Autre Prépayée": "Prepaid",
    "Carte mensuelle oubliée": "MonthlyPass" //MEG-7348
}
var MemberSubscriptionTypeEnumBatch = {
        "Monthly Pass": "MonthlyPass",
        "3 Months Pass - Buy": "MonthlyPass",
        "3 Months Pass": "MonthlyPass",
        "6 Months Pass - Buy": "MonthlyPass",
        "6 Months Pass": "MonthlyPass",
        "12 Months Pass - Buy": "MonthlyPass",
        "12 Months Pass": "MonthlyPass",
        "6 Months LTC": "MonthlyPass", //** MEG 6434
        "12 Months LTC": "MonthlyPass", //** MEG 6434
        "3 Months LTC": "MonthlyPass", //MEG-6957
        "17 Week Pass": "SeventeenWeekPass",
        "20 Week Pass": "WeeklyPass",
        "Pay as you go": "",
        "Carte mensuelle ACCÈS": "MonthlyPass",
        "Achat - CM 3 Mois": "MonthlyPass",
        "Carte mensuelle de 3 mois": "MonthlyPass",
        "Achat - CM 6 Mois": "MonthlyPass",
        "Carte mensuelle de 6 mois": "MonthlyPass",
        "Achat - CM 12 Mois": "MonthlyPass",
        "Carte mensuelle de 12 mois": "MonthlyPass",
        "Laissez-passer de 17 semaines": "SeventeenWeekPass",
        "Laissez-passer de 20 semaines": "WeeklyPass",
        "Au fur et à mesure": ""
    }
    //** MEG 6434
var PlanTypeEnum = {
        "Monthly Pass-Buy New": "REG",
        "Monthly Pass-Redeem": "REG",
        "3 Months Pass - Buy": "REG",
        "6 Months Pass - Buy": "REG",
        "12 Months Pass - Buy": "REG",
        "6 Months LTC": "LTC",
        "12 Months LTC": "LTC",
        "3 Months LTC": "LTC",
        //"6 Months Pass - Redeem": "",
        //"12 Months Pass - Redeem":"",
        "17 Week Pass-Buy New": "",
        "17 Week Pass-Redeem": "",
        "20 Week Pass-Buy New": "",
        "20 Week Pass-Redeem": "",
        "Pay as you go": "",
        "Forgot Monthly Pass": "",
        "Prepaid": "",
        "Achat - CM 1 Mois": "",
        "CM Prépayée": "",
        "Achat - CM 3 Mois": "",
        "Achat - CM 6 Mois": "",
        "Carte mensuelle de 12 mois - acheter": "",
        "Acheter un nouveau laissez-passer de 17 semaines": "",
        "Échanger un laissez-passer de 17 semaines": "",
        "Achat - 20 SEM": "",
        "20 SEM Prépayées": "",
        "Au fur et à mesure": "",
        "Carte mensuelle ACCÈS": "",
        "Autre Prépayée": ""
    }
    //** End
    //** MEG 6434
var CommitmentDurationEnum = {
        "Monthly Pass-Buy New": "0",
        "Monthly Pass-Redeem": "0",
        "3 Months Pass - Buy": "0",
        "6 Months Pass - Buy": "0",
        "12 Months Pass - Buy": "0",
        "6 Months LTC": "6",
        "12 Months LTC": "12",
        "3 Months LTC": "3",
        //"6 Months Pass - Redeem": "",
        //"12 Months Pass - Redeem":"",
        "17 Week Pass-Buy New": "",
        "17 Week Pass-Redeem": "",
        "20 Week Pass-Buy New": "",
        "20 Week Pass-Redeem": "",
        "Pay as you go": "",
        "Forgot Monthly Pass": "",
        "Prepaid": "",
        "Achat - CM 1 Mois": "",
        "CM Prépayée": "",
        "Achat - CM 3 Mois": "",
        "Achat - CM 6 Mois": "",
        "Carte mensuelle de 12 mois - acheter": "",
        "Acheter un nouveau laissez-passer de 17 semaines": "",
        "Échanger un laissez-passer de 17 semaines": "",
        "Achat - 20 SEM": "",
        "20 SEM Prépayées": "",
        "Au fur et à mesure": "",
        "Carte mensuelle ACCÈS": "",
        "Autre Prépayée": ""
    }
    //** End
    /*
     * Member Search service type Enum
     */
var MemberSearchTypeEnum = {
        Name: "Name",
        Phone: "Phone",
        Email: "EmailOrUserID",
        RegNo: "ID",
        Lifetime: "LifetimeID",
        WeekPass17: "SeventeenWeekPass",
        MonthlyPass: "MonthlyPass",
        PreRegId: "PreRegID",
        Website: "Website"
    }
    //Added by shobhit for new Phone types - MEG-1960
var PhoneTypeEnum = {
    1: "Home",
    2: "Work",
    3: "Cell"
}
var phoneTypeValueEnum = {
        1: "Phone",
        7: "WorkPhone",
        8: "CellPhone"
    }
    /*
    	Meetingd DayCodeId Enum
    */
var DayCodeIdEnum = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }
    /*
     * Payment types
     */
var PaymentType = {
        1: "Cash",
        2: "Check",
        3: "Visa",
        4: "MasterCard",
        5: "AmericanExpress",
        6: "Discover",
        7: "DebitCardInteract",
        9: "CreditSlipIssued",
        10: "CreditSlipRedeemed",
        11: "CreditSlip",
        13: "CreditCard",
        14: "Split"
    }
    //Credit Card Enum
var creditCardRequestTypeEnum = {
    1: "Authorization",
    2: "Billing",
    3: "Credit",
    4: "Taxation"
}
var creditCardPaymentDecisionEnum = {
    1: "ACCEPT",
    2: "REJECT",
    3: "ERROR"
}
var ingenicocCreditCardPaymentDecisionEnum = {
    1: "APPROVED"
}
var empRoleEnum = {
    1: "Receptionist",
    2: "Leader"
}
var productCategoryEnum = {
    1: "Featured",
    2: "All Products"
}
var paymentGatewayEnum = {
        1: "Orbital",
        2: "CyberSource",
        3: "Ingenico"
    }
    /*
     * DECLARE ALL VIEWS HERE
     */
var viewMemberFreshStartWeight = {
    hidWeightDetailRowId: "hidWeightDetailRowId",
    lblDate: "lblDate",
    lblWeight: "lblWeight",
    hidWeightDate: "hidWeightDate",
    SessionNumber: "SessionNumber",
    imgCheckedIcon: "imgCheckedIcon",
    template: "template"
}
var viewLocation = {
    lbllocationTitle: "lblLocationTitle",
    locationNumber: "locationnumber",
    locationZip: "zip",
    displayValue: "displayvalue",
    city: "city",
    stateId: "stateId",
    locationid: "locationid",
    locationTypeId: "locationTypeId",
    AreaSiteNumber: "AreaSiteNumber",
    IsActive: "IsActive",
    isSelected: "isSelected",
    IsTaxCollected: "IsTaxCollected",
    IsCreditCardEnabled: "IsCreditCardEnabled",
    MPActivationEnabled: "MPActivationEnabled"
}
var viewLogin = {
    imgHeaderTtl: "imgHeaderTtl",
    imgChanglocation: "imgChanglocation",
    lblChgLocation: "lblChgLocation",
    lblLocationName: "lblLocationName",
    btnLogin: "btnLogin",
    tbxLogin: "tbxLogin",
    tbxPassword: "tbxPassword",
    lblMngPwd: "lblMngPwd"
}
var viewMPMembers = {
    lblName: "lblName",
    lblMPNumber: "lblMPNumber",
    lblStatus: "lblStatus",
    MemberID: "MemberID",
    btnIssueVoucher: "btnIssueVoucher",
    ActivationDate: "ActivationDate",
    ProgramDuration: "ProgramDuration",
    ID: "ID"
}
var viewLinkMember = {
    lblUsername: "lblUsername",
    lblAddress: "lblAddress",
    lblName: "lblName",
    lblEmailID: "lblEmailID",
    EnterpriseID: "EnterpriseID",
    LinkType: "LinkType"
}
var viewMembertoLink = {
    lblUsername: "lblUsername",
    lblAddress: "lblAddress",
    lblMemName: "lblMemName",
    lblEmailID: "lblEmailID",
    EnterpriseID: "EnterpriseID",
    LinkType: "LinkType",
    imgCheckMember: "imgCheckMember",
    SubscriptionType: "SubscriptionType",
    ExpirationDate: "ExpirationDate"
}
var viewHomeScreen = {
    lblSubscriptioType: "lblSubscriptioType",
    imgSubscriptionType: "imgSubscriptionType",
    lblFirstName: "lblFirstName",
    imgProcessMember: "imgProcessMember",
    lblMembershipType: "lblMembershipType",
    lblPhoneNumber: "lblPhoneNumber",
    lblLastName: "lblLastName",
    imgLastName: "imgLastName",
    StatusForMemberFlow: "StatusForMemberFlow",
    RegNo: "RegNo",
    MemberId: "MemberId",
    MemberStatus: "MemberStatus",
    PreRegNumber: "PreRegNumber",
    MembershipType: "MembershipType",
    RegStatus: "RegStatus",
    MtngOccrID: "MtngOccrID"
}
var viewHomeScreenChkIn = {
    lblMPSLastName: "lblMPSLastName",
    lblMPSFirstName: "lblMPSFirstName",
    lblChkPhone: "lblChkPhone",
    lblChkWeightChange: "lblChkWeightChange",
    SubscriptnType: "SubscriptnType",
    lblChkMilestone: "lblChkMilestone",
    MemberId: "MemberId",
    imgIncompleteProfile: "imgIncompleteProfile"
}
var viewMemberSubscription = {
    lbl_ProcessMember_subHeader_1: "lbl_ProcessMember_subHeader_1",
    lbl_ProcessMember_SubHeader_lbl2: "lbl_ProcessMember_SubHeader_lbl2",
    imgSeparator1: "imgSeparator1",
    imgMonthlyPassImage: "imgMonthlyPassImage",
    lbl_ProcessMember_SubHeader_lbl2: "lbl_ProcessMember_SubHeader_lbl2",
    imgAsterisk6: "imgAsterisk6",
    lblSubscriptionType: "lblSubscriptionType",
    cmbSubscriptionType: "cmbSubscriptionType",
    imgAsterisk1: "imgAsterisk1",
    txtSubscriptionID: "txtSubscriptionID",
    txtEmailID: "txtEmailID",
    btnCheckOut: "btnCheckOut",
    imgWeigh: "imgWeigh",
    imgPayment: "imgPayment"
}
var viewEnrollWeighPayment = {
    lbl_ProcessMember_subHeader_1: "lbl_ProcessMember_subHeader_1",
    lbl_ProcessMember_SubHeader_lbl2: "lbl_ProcessMember_SubHeader_lbl2",
    imgSeparator1: "imgSeparator1",
    imgMonthlyPassImage: "imgMonthlyPassImage",
    lbl_ProcessMember_SubHeader_lbl2: "lbl_ProcessMember_SubHeader_lbl2",
    cmbPaymentMode: "cmbPaymentMode",
    lblOrderDetails: "lblOrderDetails",
    imgBasket: "imgBasket",
    imgEditIcon: "imgEditIcon",
    imgEditIcon1: "imgEditIcon1",
    lblMonthlyPass: "lblMonthlyPass",
    lblMonthlyPassData: "lblMonthlyPassData",
    lblDiscountOff: "lblDiscountOff",
    lblDiscountOffData: "lblDiscountOffData",
    lblBillingDate: "lblBillingDate",
    lblBillingDateData: "lblBillingDateData",
    lblTax: "lblTax",
    lblTaxData: "lblTaxData",
    lblTotal: "lblTotal",
    lblTotalData: "lblTotalData",
    btnCompleteProcessMember: "btnCompleteProcessMember",
    imgWeigh: "imgWeigh",
    imgPayment: "imgPayment",
    segSKUData: "segSKUData",
    segSKUDataPOC: "segSKUDataPOC",
    lblDesc: "lblDesc",
    lblUnit: "lblUnit",
    hidProductId: "hidProductId",
    hidSKU: "hidSKU",
    hidIsOffer: "hidIsOffer",
    hidPrice: "hidPrice",
    hidProductTax: "hidProductTax",
    hidTaxRate: "hidTaxRate", //Added for 4832
    hidIsPrepaymentPlan: "hidIsPrepaymentPlan",
    hidIsAllowPriceOverride: "hidIsAllowPriceOverride"
}
var viewTallyEmpDetails = {
    lblPosition: "lblPosition",
    lblEmployee: "lblEmployee",
    lblNumber: "lblNumber",
    lblTimeIn: "lblTimeIn",
    lblTimeOut: "lblTimeOut",
    lblBreakOut: "lblBreakOut",
    lblBreakIn: "lblBreakIn"
}
var viewSelectMeeting = {
    lblDateInfo: "lblDateInfo",
    segMeetingsList: "segMeetingsList",
    lblMeetings: "lblMeetings",
    btnNoMeeting: "btnNoMeeting",
    meetingWeekNo: "meetingWeekNo",
    hdmeetingNum: "meetingNum",
    meetingTime: "meetingTime",
    meetingStatus: "meetingStatus",
    meetinglookUpID: "meetinglookUpID",
    meetingDayTimeCode: "meetingDayTimeCode",
    isTimesheetModified: "isTimesheetModified",
    meetingDate: "meetingDate",
    meetingStartDate: "meetingStartDate",
    meetingTypeID: "meetingTypeID",
    meetingDayCodeID: "meetingDayCodeID",
    meetingDTCTime: "meetingDTCTime",
    backOfficerRefID: "backOfficerRefID",
    LineOfBsinessID: "LineOfBsinessID",
    IsAtWork: "IsAtWork",
    SeriesCompMeetings: "SeriesCompMeetings",
    IsTallySubmitted: "IsTallySubmitted", //** MEG 7172
    IsInfoSession: "IsInfoSession"
}
var viewChekedInMembers = {
    imgIncompleteProfile: "imgIncompleteProfile",
    lblMPSLastName: "lblMPSLastName",
    lblMPSFirstName: "lblMPSFirstName",
    lblChkPhone: "lblChkPhone",
    lblChkWeightChangeN: "lblChkWeightChangeN",
    lblChkWeightChangeP: "lblChkWeightChangeP",
    SubscriptnType: "SubscriptnType",
    lblChkMilestone: "lblChkMilestone",
    MemberID: "MemberID",
    MemberStatus: "MemberStatus",
    RegNo: "RegNo",
    StartDate: "StartDate",
    MembershipType: "MembershipType",
    OriginalDateOfBirth: "OriginalDateOfBirth",
    Height: "Height",
    Gender: "Gender",
    RegStatus: "RegStatus",
    Email: "Email",
    misWeekPass: "misWeekPass",
    StartWeight: "StartWeight",
    GoalWeight: "GoalWeight",
    PreRegNumber: "PreRegNumber",
    ExpirationDate: "ExpirationDate",
    CouponCode: "CouponCode",
    imgProductLst: "imgProductLst",
    imgMPActive: "imgMPActive",
    FlowForCart: "FlowForCart",
    MtngOccrID: "MtngOccrID",
    EmpID: "EmpID",
    FirstName: "FirstName",
    LastName: "LastName",
    Usertype: "Usertype"
}
var viewMemberProfileDetails = {
    lblDOBData: "lblDOBData",
    lblPhoneData: "lblPhoneData",
    lblnotes: "lblnotes",
    lblGenderData: "lblGenderData",
    lblMailingAddData: "lblMailingAddData",
    lblEmailData: "lblEmailData",
    lblBillingAddData: "lblBillingAddData",
    lblStartWeightData: "lblStartWeightData",
    lblMeetingAttendedData: "lblMeetingAttendedData",
    lblRMissedWeeksData: "lblRMissedWeeksData",
    lblGoalWeightData: "lblGoalWeightData",
    lblHeightData: "lblHeightData",
    lblCurrentWeightData: "lblCurrentWeightData",
    lblTotalChangeData: "lblTotalChangeData",
    lblCurrentDPTData: "lblCurrentDPTData",
    lblWPAData: "lblWPAData",
    lbl5GoalData: "lbl5GoalData",
    lbl10GoalData: "lbl10GoalData",
    lblHealthyRangeData: "lblHealthyRangeData",
    lblDateData: "lblDateData",
    imgCheckAttendance: "imgCheckAttendance",
    lblWeightData: "lblWeightData",
    lblChangeData: "lblChangeData",
    lblMilestoneData: "lblMilestoneData",
    lblReceiveCouponsInfo: "lblReceiveCouponsInfo",
    lblParticipateSurveysInfo: "lblParticipateSurveysInfo",
    lblReceiveMsgsInfo: "lblReceiveMsgsInfo",
    lblReceiveCallsInfo: "lblReceiveCallsInfo",
    lblEmailOffersInfo: "lblEmailOffersInfo",
    RegNo: "RegNo",
    MemberStatus: "MemberStatus",
    MembershipType: "MembershipType",
    RegStatus: "RegStatus",
    lblFirstName: "lblFirstName",
    lblLastName: "lblLastName",
    lblRegNumber: "lblRegNumber",
    lblRegDate: "lblRegDate",
    StartDate: "StartDate",
    MemberID: "MemberID",
    WeekNumber: "WeekNumber",
    btnNWI: "btnNWI",
    btnFreshStart: "btnFreshStart",
    OriginalDOB: "OriginalDOB",
    ExpirationDate: "ExpirationDate",
    CouponCode: "CouponCode",
    RegNumber: "RegNumber",
    RegDate: "RegDate",
    LastWeighInDate: "LastWeighInDate",
    SessionNumber: "SessionNumber",
    MaintenanceMode: "MaintenanceMode",
    isNWIAllowed: "isNWIAllowed",
    personalGoalWeight: "personalGoalWeight",
    isMemberAtRisk: "isMemberAtRisk" //**MEG 6767
}
var viewProcessMember = {
    lblProcessMembersubHeader1: "lblProcessMembersubHeader1",
    lbl_ProcessMemberSubHeaderlbl2: "lblProcessMemberSubHeaderlbl2",
    imgSeparator1: "imgSeparator1",
    imgMonthlyPassImage: "imgMonthlyPassImage",
    img1: "img1",
    lbldateProcessSubHeader: "lbldateProcessSubHeader",
    imgSeparator2: "imgSeparator2",
    img2: "img2",
    lblProcessMemberSubHeader4: "lblProcessMemberSubHeader4",
    lblToday: "lblToday",
    txtAreaWeightProcess: "txtAreaWeightProcess",
    lbl_ProcessMember_notes: "lbl_ProcessMember_notes",
    lblInfo: "lblInfo",
    imgCheckbox1: "imgCheckbox1",
    lblAttendingMeeting: "lblAttendingMeeting",
    btnNoWeighIn: "btnNoWeighIn",
    lblStats: "lblStats",
    lblTodaysMilestone: "lblTodaysMilestone",
    lblTodayMilestoneInfo: "lblTodayMilestoneInfo",
    lblTodayDPT: "lblTodayDPT",
    lblTodaysDTPInfo: "lblTodaysDTPInfo",
    lblLbsToNextMilestone: "lblLbsToNextMilestone",
    lblLbsToNextMilestoneInfo: "lblLbsToNextMilestoneInfo",
    lblProgressSinceLast: "lblProgressSinceLastInfo",
    lblLastWeighIn: "lblLastWeighIn",
    lblLastWeighInInfo: "lblLastWeighInInfo",
    lblGoalWeight: "lblGoalWeight",
    lblGoalWeightInfo: "lblGoalWeightInfo"
}
var viewAddWeighTransactions = {
    segProductDetails: "segProductDetails",
    segProductDetails1: "segProductDetails1",
    segProductDetails2: "segProductDetails2",
    lblDesc1: "lblDesc1",
    img1: "img1",
    lblPrice1: "lblPrice1",
    lblProdID1: "lblProdID1",
    lblDesc2: "lblDesc2",
    img2: "img2",
    lblPrice2: "lblPrice2",
    lblProdID2: "lblProdID2",
    lblDesc3: "lblDesc3",
    img3: "img3",
    lblPrice3: "lblPrice3",
    lblProdID3: "lblProdID3",
    lblSelectedProductID1: "lblSelectedProductID1",
    lblSelectedProductID2: "lblSelectedProductID2",
    lblSelectedProductID3: "lblSelectedProductID3",
    lblFullDesc1: "lblFullDesc1",
    lblFullDesc2: "lblFullDesc2",
    lblFullDesc3: "lblFullDesc3",
    lblProductMaxQuantity: "lblProductMaxQuantity",
    lblProductTax: "lblProductTax",
    lblTaxRate: "lblTaxRate", //Added for 4832
    lblIsPrepaymentPlan: "lblIsPrepaymentPlan"
}
var Actions = {
    "1": "Buy",
    "2": "Redeem",
    "3": "Redeem-Forgot",
    "4": "New_Series",
    "5": "BRIDGE",
    "6": "FALLON",
    "7": "4WEEK_MAINTENANCE"
};
var Subcriptions = {
    "1": "MP",
    "2": "17WEEK",
    "3": "PAYG",
    "4": "12Week",
    "5": "FMP",
    "6": "AtWork",
    "7": "PREPAID",
    "8": "MP-3",
    "9": "WP",
    "10": "MP-6",
    "11": "EMPLOYEE",
    "12": "AT-WORK",
    "13": "LTC-6", //** MEG 6434
    "14": "LTC-12", //** MEG 6434
    "15": "LTC-3" //MEG-6957
};
var TransactionType = {
    "Add": "Add",
    "Enrollment": "Enrollment",
    "ReEnrollment": "ReEnrollment",
    "PreRegistration": "PreRegistration",
    "VoidTransaction": "VoidTransaction"
        //"PreRegistration":"UpgradeToLifetime"
};
var Flows = {
    "1": "Enroll",
    "2": "Attend"
}
var viewAdvancedSearchResult = {
    imgMPS1: "imgMPS1",
    lblMPSLastName: "lblMPSLastName",
    lblMPSFirstName: "lblMPSFirstName",
    lblMPSCity: "lblMPSCity",
    lblMPSState: "lblMPSState",
    lblMPSStreet: "lblMPSStreet",
    Height: "Height",
    lblMPSDateOfBirth: "lblMPSDateOfBirth",
    lblMPSPhone: "lblMPSPhone",
    Gender: "Gender",
    OriginalDateOfBirth: "OriginalDateOfBirth",
    StatusForMemberFlow: "StatusForMemberFlow",
    RegNo: "RegNo",
    MemberStatus: "MemberStatus",
    MembershipType: "MembershipType",
    imgMPS2: "imgMPS2",
    imgMPS3: "imgMPS3",
    imgMPS4: "imgMPS4",
    imgMPS5: "imgMPS5",
    RegStatus: "RegStatus",
    Email: "Email",
    StartDate: "StartDate",
    missWeekPass: "missWeekPass",
    MemberID: "MemberID",
    isOnlineSearch: "isOnlineSearch",
    StartWeight: "StartWeight",
    UniqueID: "UniqueID",
    PreRegNumber: "PreRegNumber",
    GoalWeight: "GoalWeight",
    SubscriptnType: "SubscriptnType",
    ExpirationDate: "ExpirationDate",
    CouponCode: "CouponCode",
    FlowForCart: "FlowForCart",
    SessionNumber: "SessionNumber",
    MaintenanceMode: "MaintenanceMode",
    SubscriptionID: "SubscriptionID",
    MemberRole: "MemberRole",
    ProgramDuration: "ProgramDuration",
    MtngOccrID: "MtngOccrID",
    EnterpriseID: "EnterpriseID",
    UserName: "UserName",
    ShippingZipCode: "ShippingZipCode",
    UserType: "UserType",
    CommitmentDuration: "CommitmentDuration",
    PlanType: "PlanType",
    IsGracePeriod: "IsGracePeriod",
    WeightLossFocus: "WeightLossFocus"
}
var viewAdvancedSearchResultWithDuplicate = {
    imgMPS1: "imgMPS1",
    lblMPSLastName: "lblMPSLastName",
    lblMPSFirstName: "lblMPSFirstName",
    lblMPSCity: "lblMPSCity",
    lblMPSState: "lblMPSState",
    lblMPSStreet: "lblMPSStreet",
    Height: "Height",
    lblMPSDateOfBirth: "lblMPSDateOfBirth",
    lblMPSPhone: "lblMPSPhone",
    Gender: "Gender",
    OriginalDateOfBirth: "OriginalDateOfBirth",
    StatusForMemberFlow: "StatusForMemberFlow",
    RegNo: "RegNo",
    MemberStatus: "MemberStatus",
    MembershipType: "MembershipType",
    imgMPS2: "imgMPS2",
    imgMPS3: "imgMPS3",
    imgMPS4: "imgMPS4",
    imgMPS5: "imgMPS5",
    template: "template",
    RegStatus: "RegStatus",
    Email: "Email",
    StartDate: "StartDate",
    missWeekPass: "missWeekPass",
    MemberID: "MemberID",
    isOnlineSearch: "isOnlineSearch",
    StartWeight: "StartWeight",
    UniqueID: "UniqueID",
    GoalWeight: "GoalWeight",
    SubscriptnType: "SubscriptnType",
    ExpirationDate: "ExpirationDate",
    CouponCode: "CouponCode",
    FlowForCart: "FlowForCart",
    SessionNumber: "SessionNumber",
    MaintenanceMode: "MaintenanceMode",
    SubscriptionID: "SubscriptionID",
    MemberRole: "MemberRole",
    ProgramDuration: "ProgramDuration",
    MtngOccrID: "MtngOccrID",
    ShippingZipCode: "ShippingZipCode",
    UserType: "UserType",
    CommitmentDuration: "CommitmentDuration",
    PlanType: "PlanType",
    IsGracePeriod: "IsGracePeriod",
    WeightLossFocus: "WeightLossFocus"
}
var viewAdvancedSearchResultWithTerminated = {
        imgMPS1: "imgMPS1",
        lblMPSLastName: "lblMPSLastName",
        lblMPSFirstName: "lblMPSFirstName",
        lblMPSCity: "lblMPSCity",
        lblMPSState: "lblMPSState",
        lblMPSStreet: "lblMPSStreet",
        Height: "Height",
        lblMPSDateOfBirth: "lblMPSDateOfBirth",
        lblMPSPhone: "lblMPSPhone",
        Gender: "Gender",
        OriginalDateOfBirth: "OriginalDateOfBirth",
        StatusForMemberFlow: "StatusForMemberFlow",
        RegNo: "RegNo",
        MemberStatus: "MemberStatus",
        MembershipType: "MembershipType",
        Email: "Email",
        StartDate: "StartDate",
        imgMPS2: "imgMPS2",
        imgMPS3: "imgMPS3",
        imgMPS4: "imgMPS4",
        imgMPS5: "imgMPS5",
        template: "template",
        MemberID: "MemberID",
        isOnlineSearch: "isOnlineSearch",
        StartWeight: "StartWeight",
        UniqueID: "UniqueID",
        PreRegNumber: "PreRegNumber",
        GoalWeight: "GoalWeight",
        SubscriptnType: "SubscriptnType",
        ExpirationDate: "ExpirationDate",
        CouponCode: "CouponCode",
        FlowForCart: "FlowForCart",
        SessionNumber: "SessionNumber",
        MaintenanceMode: "MaintenanceMode",
        SubscriptionID: "SubscriptionID",
        MemberRole: "MemberRole",
        ProgramDuration: "ProgramDuration",
        MtngOccrID: "MtngOccrID",
        ShippingZipCode: "ShippingZipCode",
        UserType: "UserType",
        CommitmentDuration: "CommitmentDuration",
        PlanType: "PlanType",
        IsGracePeriod: "IsGracePeriod",
        WeightLossFocus: "WeightLossFocus"
    }
    //Added by Shobhit - For Serach Emp by name or number
var viewSearchEmployee = {
    hdnEmployeeID: "hdnEmployeeID",
    lblFirstName: "lblFirstName",
    lblLastName: "lblLastName",
    lblEmployeeNumber: "lblEmployeeNumber",
    imgPurchase: "imgPurchase",
    RegNo: "RegNo",
    isEmpCurrWeekWeighin: "isEmpCurrWeekWeighin",
    imgEnroll: "imgEnroll",
    lastWeight: "lastWeight"
}
var viewTallyTimesheet = {
    hidTimeSheetId: "hidTimeSheetId",
    hidEmployeeId: "hidEmployeeId",
    lblNumber: "lblNumber",
    lblEmployee: "lblEmployee",
    lblEmpRole: "lblEmpRole",
    lblTimeIn: "lblTimeIn",
    lblTimeOut: "lblTimeOut",
    lblBreakIn: "lblBreakIn",
    lblBreakOut: "lblBreakOut",
    imgEdit: "imgEdit"
}
var MessageEnum = {
    NoResultFoundAdvSearch: "No results are found for Search Criteria"
}
var glbMemberWieghtHistoryCount = 0;
var MissedWeekSku = {
    "senior": "481",
    "nonsenior": "400",
    "wkcourtesy": "720",
    "srwkcourtesy": "480",
    "CA1WEEK": "F12",
    "CACOURTESY": "F27"
}
var viewReferredSearch = {
    lblsegLastName: "lblsegLastName",
    lblsegFirstName: "lblsegFirstName",
    lblsegCity: "lblsegCity",
    lblsegState: "lblsegState",
    lblsegPhone: "lblsegPhone",
    MemberID: "MemberID",
    RegNumber: "RegNumber"
}
var viewMilestoneAndAttendance = {
    lblMemNameInfo: "lblMemNameInfo",
    lblRegNoInfo: "lblRegNoInfo",
    lblTodayWeightInfo: "lblTodayWeightInfo",
    lblMemberTypeInfo: "lblMemberTypeInfo",
    lblMilestoneInfo: "lblMilestoneInfo",
    lblMemberFeeInfo: "lblMemberFeeInfo",
    lblMemberSubsidyInfo: "lblMemberSubsidyInfo",
    template: "template"
}
var viewProductReport = {
        lblProductInfo: "lblProductInfo",
        lblProductDescInfo: "lblProductDescInfo",
        lblQTYInfo: "lblQTYInfo",
        lblTexInfo: "lblTexInfo",
        lblTotalInfo: "lblTotalInfo",
        lblUnitPriceInfo: "lblUnitPriceInfo",
        template: "template"
    }
    // MEG-5279
var isGoalWeightReset = 0;
var isConsicutive5WeeksCompleted = 0;
//MEG-5094 -- App Version Info
var appVersionText = "Installed Version";
// App Version Number & Release Date - DO NOT CHANGE 
var appVersionDetails = "7.0.22 | 05-SEPT-2017";

function callMemberWeightAndMilestone(memberID, callback) {
    try {
        var MemberWeightAndMilestone_inputparam = {};
        MemberWeightAndMilestone_inputparam["serviceID"] = Services.CompMemberWeightAndMilestone;
        MemberWeightAndMilestone_inputparam["httpheaders"] = {};
        MemberWeightAndMilestone_inputparam["httpconfigs"] = {};
        if (JsonService) {
            MemberWeightAndMilestone_inputparam["httpheaders"] = setRESTHeader();
        } else {
            MemberWeightAndMilestone_inputparam["deviceID"] = gblDeviceID;
            MemberWeightAndMilestone_inputparam["accessToken"] = glbSPAuthToken;
            MemberWeightAndMilestone_inputparam["SPID"] = glbEmployeeId;
            MemberWeightAndMilestone_inputparam["Source"] = gblSourceVal;
            MemberWeightAndMilestone_inputparam["HeaderDate"] = "";
        }
        MemberWeightAndMilestone_inputparam["MemberID"] = memberID;
        kony.print("Dileep --> MemberWeightAndMilestone_inputparam = " + JSON.stringify(MemberWeightAndMilestone_inputparam));
        MemberWeightAndMilestoneHandle = Network.makeServiceCall(MemberWeightAndMilestone_inputparam, callback, true); //true to allow offline data access
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}

function getMemberWeightAndMilestoneWSCallback(status, MemberWeightAndMilestoneList, processOffline) {
    kony.print("In getMemberWeightAndMilestoneWSCallback function");
    kony.print("MemberWeightAndMilestoneList status = " + status);
    kony.print("MemberWeightAndMilestoneList MemberWeightAndMilestoneList = " + JSON.stringify(MemberWeightAndMilestoneList));
    if (status == 400) {
        //** MEG 6831
        if (MemberWeightAndMilestoneList.MemberWeightList) {
            memberWeightData = MemberWeightAndMilestoneList.MemberWeightList;
        } else {
            memberWeightData = [];
        }
        //** End
        kony.print("Weight Details from online service call: " + JSON.stringify(memberWeightData));
        if (memberWeightData && memberWeightData.length > 0) {
            _.each(memberWeightData, function(obj) {
                boMemberProfile.insertOnlineWeightDetails(obj);
            })
        }
        kony.print("Dileep --> calling boMemberMilestone.getAchievedMilestonesForMember");
        boMemberMilestone.getAchievedMilestonesForMember(glbMemberId, status, MemberWeightAndMilestoneList);
        kony.print("Dileep --> calling boMemberProfile.getMemberProfileWeightDetailsWSCallback");
        boMemberProfile.getMemberProfileWeightDetailsWSCallback(status, MemberWeightAndMilestoneList);
    }
}
//Added for MEG-7322
//Delete and Insert Milestone and Weight Data on service callback.
function getMemberWeightAndMilestoneWSCallbackForMissedWeighEntries(status, MemberWeightAndMilestoneList, processOffline) {
    kony.print("In getMemberWeightAndMilestoneWSCallbackForMissedWeighEntries finction");
    kony.print("MemberWeightAndMilestoneList status = " + status);
    kony.print("MemberWeightAndMilestoneList MemberWeightAndMilestoneList = " + JSON.stringify(MemberWeightAndMilestoneList));
    if (status == 400) {
        //** MEG 6831
        if (MemberWeightAndMilestoneList.MemberWeightList) {
            memberWeightData = MemberWeightAndMilestoneList.MemberWeightList;
        } else {
            memberWeightData = [];
        }
        //** End
        kony.print("Weight Details from online service call: " + JSON.stringify(memberWeightData));
        if (memberWeightData && memberWeightData.length > 0) {
            var whrClause = " where MemberID = " + glbMemberId;

            function getMemberWeightSuccCallback(res) {
                kony.print("Member Weight Data : " + JSON.stringify(res));
                if (res && res.length > 0) {
                    function getMemberMilestoneSuccessCallback(milestoneRes) {
                        kony.print("in getMemberMilestoneSuccessCallback : " + JSON.stringify(milestoneRes));
                        if (milestoneRes && milestoneRes.length > 0) {
                            function deleteMilestoneDataSuccessCallBack() {
                                kony.print("in deleteMilestoneDataSuccessCallBack");
                                DBWeighDetailsController.remove(whrClause, deleteWeighDataSuccessCallBack, eventErrorCallBack, false);
                            }
                            DBMilestoneAchievedController.remove(whrClause, deleteMilestoneDataSuccessCallBack, eventErrorCallBack, false);
                        } else {
                            DBWeighDetailsController.remove(whrClause, deleteWeighDataSuccessCallBack, eventErrorCallBack, false);
                        }
                    }
                    DBMilestoneAchievedController.find(whrClause, getMemberMilestoneSuccessCallback, eventErrorCallBack);
                }
            }

            function deleteWeighDataSuccessCallBack() {
                kony.print("In deleteWeighDataSuccessCallBack");
                _.each(memberWeightData, function(obj) {
                    boMemberProfile.insertOnlineWeightDetails(obj);
                });
            }
            DBWeighDetailsController.find(whrClause, getMemberWeightSuccCallback, eventErrorCallBack);
        }
        kony.print("Dileep --> calling boMemberMilestone.getAchievedMilestonesForMember");
        boMemberMilestone.getAchievedMilestonesForMember(glbMemberId, status, MemberWeightAndMilestoneList);
        kony.print("Dileep --> calling boMemberProfile.getMemberProfileWeightDetailsWSCallback");
        boMemberProfile.getMemberProfileWeightDetailsWSCallback(status, MemberWeightAndMilestoneList);
    }
}

function getPaymentModeByPurchaseModeType(PaymentTypeAtPurchase) {
    var paymentMode;
    switch (PaymentTypeAtPurchase) {
        case PaymentType[1]: //if Payment mode is Cash at buy
            paymentMode = PaymentType[1]; //Payment mode is Cash at return
            break;
        case PaymentType[2]: //if Payment mode is Check at buy
            paymentMode = PaymentType[9]; //Payment mode is CreditSlip at return
            break;
        case PaymentType[13]: //if Payment mode is Credit at buy
            paymentMode = PaymentType[13]; //Payment mode is Credit at return
            break;
        case PaymentType[9]: //if Payment mode is CreditSlip at buy
            paymentMode = PaymentType[9]; //Payment mode is CreditSlip at return
            break;
        case PaymentType[10]: //if Payment mode is CreditSlip at buy
            paymentMode = PaymentType[9]; //Payment mode is CreditSlip at return
            break;
        case PaymentType[7]: // Debit-Card Interact
            paymentMode = PaymentType[7];
            break;
    }
    return paymentMode;
}
/**
 *  Added by Dileep Chejerla as popup shrink issue while displaying alert in iOS8.
 *  Pass the alert message to be displayed and the context to dock the popup as input values to this function.
 */
function displayPopupAlert(alertMsg) {
    alertForMessages(alertMsg);
}
//Ami add -START
function displayPopupAlertWithoutContext(alertMsg) {
    popupAlertWithoutContext.destroy();
    popupAlertWithoutContext.lblAlertMsg.text = alertMsg;
    popupAlertWithoutContext.show();
}

function dismissPopupAlertWithoutContext() {
    popupAlertWithoutContext.dismiss();
}
//Ami add -END
function dismissPopupAlert() {
    popupAlert.dismiss();
}

function displayPopupAlertHandler(alertMsg, context) {
    popupAlertHandler.setContext(context);
    popupAlertHandler.lblAlertMsg.text = alertMsg;
    popupAlertHandler.show();
}

function dismissPopupAlertHandler() {
    popupAlertHandler.dismiss();
}

function getFmpSubid() {
    var mp = "M99999999"
    var d = new Date();
    var da = (d.getDate() < 10) ? "0" + d.getDate() : d.getDate()
    var m = d.getMonth();
    var y = d.getFullYear().toString();
    m = (parseInt(m) + 1 < 10) ? "0" + (parseInt(m) + 1) : parseInt(m) + 1;
    y = y.substring(2, 4);
    if (deviceLocale == "fr_FR") {
        mp = mp + da + m + y;
    } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
    {
        mp = mp + m + da + y;
    }
    kony.print("MP value ------" + mp);
    return mp;
}
/*  genrating dynamic data for home menu */
var glbHomeMenuOptions = [];

function addDataForGlobalMenu() {
    // MEGCA-35 Simple Return feature Enable/Diable
    var checkSimpleReturn = checkAppSettingEnable(Settings["SR"]) ? true : false;
    kony.print("IS checkSimple---" + checkSimpleReturn);
    glbHomeMenuOptions = [{
        "lblMenuName": kony.i18n.getLocalizedString("strlblLookupServiceProvider"), // Or the i18 key
        "isActive": true,
        "id": "lookupServiceProvider"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strViewWgtHistory"),
        "isActive": true,
        "id": "viewWgtHistory"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strBatchAddMember"),
        "isActive": true,
        "id": "batchAddMember"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strSwitchLocation"),
        "isActive": true,
        "id": "switchLocation"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strLblProductReturn"),
        "isActive": true,
        "id": "voidTransaction"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strLblReturnProd"),
        "isActive": checkSimpleReturn,
        "id": "ReturnProd"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strPreferredLocation"),
        "isActive": true,
        "id": "preferredLoc"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strMeetingReports"), //strTallyReports
        "isActive": true,
        "id": "tallyReport"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strHelp"),
        "isActive": false,
        "id": "help"
    }, {
        "lblMenuName": kony.i18n.getLocalizedString("strLogout"),
        "isActive": true,
        "id": "logout"
    }];
    /*, {
            "lblMenuName": "Clear Ingenico Pairing",
            "isActive": true,
            "id": "clear"
        }];*/
}

function getNextMeeting() {
    var attend = parseInt(popupStaffGuideline.txtGuideline.text);
    if (isNaN(parseInt(attend)) || attend < 0) {
        alertForMessages(kony.i18n.getLocalizedString("strValidAttendance"));
        return;
    }
    popupStaffGuideline.dismiss();
    var message, receptionist;
    kony.print("attended--->" + attend);
    kony.print("glbLcationtaypeID" + glbLocationTypeId);
    if (glbLocationTypeId == "7") {
        switch (true) {
            case attend >= 20:
                receptionist = 1;
                message = getLocalizedString("strStaffGuidelineMsg1Part1") + " " + attend + " " + getLocalizedString("strStaffGuidelineMsg1Part2") + " " + receptionist + " " + getLocalizedString("strStaffGuidelineMsg1Part3");
                break;
            default:
                message = getLocalizedString("strStaffGuidelineMsg2Part1") + " " + attend + " " + getLocalizedString("strStaffGuidelineMsg2Part2");
        }
    } else {
        switch (true) {
            case attend >= 80:
                receptionist = 4;
                break;
            case attend >= 61 && attend < 80:
                receptionist = 3;
                break;
            case attend >= 36 && attend < 61:
                receptionist = 2;
                break;
            default:
                receptionist = 1;
        }
        message = getLocalizedString("strStaffGuidelineMsg1Part1") + " " + attend + " " + getLocalizedString("strStaffGuidelineMsg1Part2") + " " + receptionist + " " + getLocalizedString("strStaffGuidelineMsg1Part3");
    }
    popupNextMeeting.lblNextMeeting.text = message;
    popupNextMeeting.show();
}

function cancelStaffingGuideline() {
    popupStaffGuideline.dismiss();
}

function submitNextMeeting() {
    popupNextMeeting.dismiss();
}
var signSupportStates = {
    "1": [5, 14],
    "4": []
};
var glbIsSignatureCapturingSupported = false;

function setIsSignatureCapturingSupported(stateId) {
    var isSignatureCapturing = false;
    for (key in signSupportStates) {
        kony.print("setIsSignatureCapturingSupported :: key =" + key);
        if (key.toString() == getCountryID().toString()) {
            if (in_array(stateId, signSupportStates[key])) {
                kony.print("setIsSignatureCapturingSupported :: key =" + JSON.stringify(signSupportStates[key]));
                isSignatureCapturing = true;
            }
        }
    }
    kony.print("setIsSignatureCapturingSupported :: isSignatureCapturing =" + isSignatureCapturing);
    return isSignatureCapturing;
}

function getLocalizedString(key) {
    if (key != undefined) return kony.i18n.getLocalizedString(key);
    else return "";
}

function printLog(lbl, value) {
    if (value != undefined) kony.print(lbl + " ==> " + value);
    else kony.print(lbl);
}

function printObj(lbl, obj) {
    if (obj != undefined) kony.print(lbl + " ==> " + JSON.stringify(obj));
    else kony.print(lbl);
}
var arrSubtype = ["Monthly Pass-Buy New", "Monthly Pass-Redeem", "3 Months Pass - Buy", "6 Months Pass - Buy", "12 Months Pass - Buy",
    //"6 Months Pass - Redeem",
    //"12 Months Pass - Redeem",
    "Achat - CM 1 Mois", "CM Prépayée", "Achat - CM 3 Mois", "Achat - CM 6 Mois", "Achat - CM 12 Mois"
]