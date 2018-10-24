var Network = Network || {};
Network.isSecure = true; //to make network calls over HTTPS, set to true 
/***
 * Purpose: generic method to make a async Kony middleware service call with inputparams & callback event
 * Author: Kony Dated: 07/29/2014
 * Called From: whenever asynchronous network call is required
 */
Network.makeServiceCall = function(inputParam, callBack, processOffline) {
    try {
        if (inputParam["serviceID"] != Services.LogActivity) {
            boMonitor.log("Online Service Call", "", inputParam, FlowForMonitor.ServiceCall);
        }
        var connHandle;
        inputParam["locale"] = deviceLocale.replace('_', '-');
        kony.print("Middlewere call: " + JSON.stringify(inputParam));
        kony.print("Service name : " + inputParam.serviceID);
        // Not displaying loading screen in case of credit card service
        //if(inputParam.serviceID == Services.runTransaction || inputParam.serviceID == Services.PeripheralStatusLog)
        if (_.find(listOfServicesNotDisplayLoading, function(serviceName) {
                return (serviceName == inputParam.serviceID);
            })) kony.print("Not displaying loading screen");
        else displayProgressView();
        if (Network.isSecure) {
            connHandle = appmiddlewaresecureinvokerasync(inputParam, handleCallback);
        } else {
            connHandle = appmiddlewareinvokerasync(inputParam, handleCallback);
        }
        //inline method to handle application level generic opstatus
        function handleCallback(status, response) {
            try {
                if (status == 400) {
                    if (inputParam.serviceID == Services.PreActivate) {
                        kony.print("::service Response::--" + JSON.stringify(response));
                        var monitorData = {
                            "CouponCode": (response.PreActivationList && checkValidString(response.PreActivationList[0].CouponCode)) ? response.PreActivationList[0].CouponCode : "Error",
                            "ExpirationDate": (response.PreActivationList && checkValidString(response.PreActivationList[1].ExpirationDate)) ? response.PreActivationList[1].ExpirationDate : "Error"
                        };
                        //printObj("monitorData " , monitorData);
                        boMonitor.log("PreActivation:RESPONSE-Online Service Call", "PreActivation", monitorData, FlowForMonitor.ServiceCall);
                    }
                    var serviceOpstatus = response.opstatus;
                    if (serviceOpstatus != 0) {
                        if (inputParam.serviceID == Services.SaleReceipt && glbSendReceiptCounter < 2) {
                            retrySendSaleReceipt(inputParam);
                        } else {
                            kony.print("handleError else");
                            handleError(status, response);
                        }
                        return;
                        //}else if(serviceOpstatus == "8005" || serviceOpstatus == "8009" ){
                        //handle error for backend time outs
                        //return;
                        //add more opstatus as per application requirements
                    } else {
                        //call to module level callback method
                        if (inputParam.serviceID == Services.runTranBillingWithToken) {
                            kony.print("::service Response::--" + JSON.stringify(response));
                            response.Token = inputParam.Token;
                            kony.print("::service after setting token Response::--" + JSON.stringify(response));
                        }
                        callBack(status, response);
                    }
                } else if (status == 300) {
                    kony.print("In generic callback" + status);
                    if (inputParam.serviceID == Services.SaleReceipt && glbSendReceiptCounter < 2) {
                        retrySendSaleReceipt(inputParam);
                    } else {
                        kony.print("handleError else");
                        handleError(status, response);
                    }
                    //handleError(status, response);
                }
            } catch (err) {
                kony.print("the value of err.message is:" + err);
                if (_.find(listOfServicesNotDisplayLoading, function(serviceName) {
                        return (serviceName == inputParam.serviceID);
                    })) {
                    if (kony.application.getCurrentForm().id == frmViewMemberProfile.id && inputParam.serviceID == Services.SaleReceipt) removeProgressView();
                    else kony.print("No loading screen");
                } else removeProgressView();
                GlobalException(err);
            }
        }

        function handleError(status, response) {
            if (processOffline) {
                callBack(status, response, processOffline);
            } else {
                CommonErrHandler.networkError(response.opstatus, response);
            }
            if (_.find(listOfServicesNotDisplayLoading, function(serviceName) {
                    return (serviceName == inputParam.serviceID);
                })) {
                if (kony.application.getCurrentForm().id == frmViewMemberProfile.id && inputParam.serviceID == Services.SaleReceipt) removeProgressView();
                else {
                    //MEG-7418 dismissSyncLoadingScreen();
                    kony.print("No loading screen");
                }
            } else {
                if (!IsSyncRunning) {
                    removeProgressView();
                }
            }
        }
        return connHandle;
    } catch (err) {
        kony.print("the value of err.message is:" + err);
        if (_.find(listOfServicesNotDisplayLoading, function(serviceName) {
                return (serviceName == inputParam.serviceID);
            })) {
            if (kony.application.getCurrentForm().id == frmViewMemberProfile.id && inputParam.serviceID == Services.SaleReceipt) removeProgressView();
            else {
                dismissSyncLoadingScreen();
                kony.print("No loading screen");
            }
        } else removeProgressView();
        GlobalException(err);
    }
}