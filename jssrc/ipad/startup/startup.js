//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "MEG7REST",
    appName: "MEGNAQA0905",
    appVersion: "10.1.8",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "MEG7REST",
    isturlbase: "https://weightwatchers-qa2.konycloud.com/services",
    isMFApp: true,
    appKey: "590b6c11ed33254b1ae31f0c628231ed",
    appSecret: "3d01760f5bf2aba481d03556eadea53d",
    serviceUrl: "https://100001691.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100001691.auth.konycloud.com/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "MEGNARetailService5": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService5",
            "MEGNARetailService4": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService4",
            "MEGNARetailService7": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService7",
            "MEGNARetailService6": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService6",
            "MEGNARetailService1": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService1",
            "MEGNARetailService0": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService0",
            "MEGNARetailService3": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService3",
            "MEGNARetailService2": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService2"
        },
        "service_doc_etag": "000001666709DE80",
        "appId": "88a16d63-7d71-4034-b672-1ab2a74e1245",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "MEGNARetail",
        "reportingsvc": {
            "session": "https://weightwatchers-qa2.konycloud.com/services/IST",
            "custom": "https://weightwatchers-qa2.konycloud.com/services/CMS"
        },
        "baseId": "b52c032f-5372-4000-9479-167eb02faeff",
        "app_default_version": "1.0",
        "services_meta": {
            "MEGNARetailService5": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService5"
            },
            "MEGNARetailService4": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService4"
            },
            "MEGNARetailService7": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService7"
            },
            "MEGNARetailService6": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService6"
            },
            "MEGNARetailService1": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService1"
            },
            "MEGNARetailService0": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService0"
            },
            "MEGNARetailService3": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService3"
            },
            "MEGNARetailService2": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://weightwatchers-qa2.konycloud.com/services/MEGNARetailService2"
            }
        },
        "sync": {
            "appId": "MEGNARetail",
            "url": "https://weightwatchers-qa2.sync.konycloud.com/syncservice/api/v1/MEGNARetail"
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://weightwatchers-qa2.konycloud.com/MEG7REST/MWServlet",
    secureurl: "https://weightwatchers-qa2.konycloud.com/MEG7REST/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppHeadersAndFooters();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        preappinit: MEGDevelopmentpreappinit,
        init: appInit,
        postappinit: MEGDevelopmentpostappinit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    //This is to define sync global variable if application has sync
    var mbaasSdkObj = kony.sdk && kony.sdk.getCurrentInstance();
    if (mbaasSdkObj.getSyncService()) {
        sync = mbaasSdkObj.getSyncService();
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;