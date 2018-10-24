var isNetworkError = false;
var CommonErrHandler = {
    exceptionError: function(err) {
        GlobalException(err);
    },
    securityError: function(result) {},
    statusError: function(status) {},
    networkError: function(status, result) {
        isNetworkError = true;
        kony.print("network error status and result " + status);
        var errMsg = "";
        var errorcode = status.toString();
        if (errorcode.length > 0) {
            errMsg = kony.i18n.getLocalizedString("err" + errorcode);
        } else {
            errMsg = "undefined";
        }
        alertForMessages(errMsg);
        CommonErrHandler.NetworkExceptionToDb("Network", "Network Error", errMsg, errorcode);
    },
    NetworkExceptionToDb: function(name, error_type, desc, errorcode) {
        try {
            logger.Log_SendException(name, error_type, desc, errorcode)
        } catch (e) {
            GlobalException(e);
        }
    }
}

function GlobalException(error) {
    try {
        kony.print("Error code===" + JSON.stringify(error));
        var err = kony.getError(error);
        if (checkValidString(err)) {
            kony.print("Error code err===" + JSON.stringify(err));
        }
        //this.message = error;   
        //this.name = "Global Exception"; 
        //kony.print("Exception message is>>>"+this.message+"::name is::"+this.name);
        //alert("Exception message is>>>"+err.message+"::name is::"+err.name);
        //logger.Log_SendException(err.name,"Exception",err.message,err.errorCode)
    } catch (err) {
        kony.print("Inside catch block of GlobalException() method");
        kony.print("the value of err.message is:" + err);
    }
}