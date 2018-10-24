var activityLogName = "ActivityMonitor";
var maxRecordFromLocalLimit = 10;
var localMonitorData = "";

var monitorObject = {
    "DeviceId": gblDeviceID,
    "Details": []
};

function onFlowComplete() {
    kony.print("One Flow has completed:");
    if (checkIfNetworkIsAvailable()) {
        boMonitor.submitActivityLog(false);
    } else {
        boMonitor.saveActivityLog();
    }
}

var boMonitor = {

    log: function(action, control, data, flow, isFlowCompleted) {
        try {
            if (isMonitorLogEnable == true) {

                var tempDetails = {
                    "EmployeeNumber": (glbEmployeeNumber !== undefined && glbEmployeeNumber != "")?glbEmployeeNumber:"0",
                    "EmployeeName": glbUserName,
                    "MeetingOccuranceId": glbMeetingNum,
                    "MeetingDate": checkValidString(glbMeetingDate) ? glbMeetingDate : supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "Flow": flow,
                    "LocationNumber": glbLocationNum,
                    "Operation": []
                };
				kony.print("::PK::tempDetails::"+JSON.stringify(tempDetails));
                var tempOperation = {
                    "Action": action,
                    "Screen": kony.application.getCurrentForm().id,
                    "Control": control,
                    "Time": new Date(),
                    "Data": []
                };

                for (key in data) {
                    if (data.hasOwnProperty(key)) {
                        if (key.toLowerCase() != "httpheaders" && key.toLowerCase() != "httpconfigs" && key.toLowerCase() != "appver" && key.toLowerCase() != "channel" && key.toLowerCase() != "platform" && key.toLowerCase() != "konyreportingparams" && key.toLowerCase() != "deviceid") {
                            var temp = {
                                "FieldName": key,
                                "FieldValue": data[key].toString()
                            };
                            tempOperation['Data'].push(temp);
                        }
                    }
                }

                tempDetails['Operation'].push(tempOperation);

                if (monitorObject['Details'] && monitorObject['Details'].length > 0) { //** MEG 6493
                    var length = monitorObject['Details'].length - 1;
                    var lastFlow = monitorObject['Details'][length].Flow;

                    if (tempDetails['Flow'] == FlowForMonitor.LogIn) {
                        tempDetails['Operation'] = monitorObject['Details'][length].Operation;
                        monitorObject['Details'][length] = tempDetails;
                    }

                    if ((tempDetails['Flow'] == lastFlow || flow == FlowForMonitor.ServiceCall)) {
                        monitorObject['Details'][length].Operation.push(tempOperation);

                        if (isFlowCompleted == true) {
                            onFlowComplete();
                        }
                    } else {
                        onFlowComplete();
                        monitorObject['Details'].push(tempDetails);
                    }
                } else {
                    monitorObject['Details'].push(tempDetails);
                    if (isFlowCompleted == true) {
                        onFlowComplete();
                    }
                }

                //kony.print("After adding data: " + JSON.stringify(monitorObject.Details));
                kony.store.setItem(activityLogName, monitorObject);

            } else {
                kony.print("Monitor logging is disabled");
            }
        } catch (e) {
            removeProgressView();
            GlobalException(e);
        }
    },

    saveActivityLog: function() {
        try {
            var monitoryArray = new Array();
            var temp = {};

            function saveMonitorLogSuccessCallback(res) {
                kony.print("Monitor object saved successfully.");
                monitorObject['Details'].splice(0, 1);
            }

            temp.MonitorJSON = JSON.stringify(monitorObject.Details[0]);
            temp.TimeStamp = new Date();

            monitoryArray.push(temp);

            //kony.print("Monitor Object: " + JSON.stringify(monitorObject.Details[0]));
            DBMonitorLoggingController.createAll(monitoryArray, saveMonitorLogSuccessCallback, eventErrorCallBack, false);
        } catch (e) {
            GlobalException(e);
            monitorObject['Details'].splice(0, 1);
        }
    },

    submitActivityLog: function(isFromDB, Id) {
        var inputParams = {};
        var response;

        try {
            kony.print("Start activity log submit");

            function callbackActivityLog(status, res) {
				kony.print("callbackActivityLog res " + JSON.stringify(res));
                if (checkForUndefinedVal(res) && res.opstatus != 0) {
                    kony.print("Error occured while submitting data to server, save log into database");

                    if (!checkValidString(Id)) {
                        kony.print("Object save to local database");
                        boMonitor.saveActivityLog();
                    }

                } else {
                    kony.print("Activity log Request submitted successfully: ");
                    monitorObject['Details'].splice(0, 1);

                    if (isFromDB) {
                        //Remove from db
                        kony.print("Remove data from local storage");
                        boMonitor.removeFromDatabase(Id);
                    } else {
                        boMonitor.submitLocalSavedDataToServer();
                    }
                }
                //Commented by Ami
                // Uncommented by Maulik due to MEG-3985 
                //AAA removeProgressView();
            }

            inputParams["serviceID"] = Services.LogActivity;
            //** MEG 6493
		 	if(JsonService){
        		inputParams["httpheaders"] = setRESTHeader();
      		}else {
	            inputParams["accessToken"] = glbSPAuthToken;
	            inputParams["deviceID"] = gblDeviceID;
	            inputParams["SPID"] = glbEmployeeId;
	            inputParams["HeaderDate"] = glbHeaderDate;
	            inputParams["Source"] = gblSourceVal;
	         }
	         //**End
            if (isFromDB) inputParams["logMonitor"] = localMonitorData; // ** MEG 6493 JSON.stringify(localMonitorData);
            else inputParams["logMonitor"] = monitorObject.Details[0]; //** MEG 6493 JSON.stringify(monitorObject.Details[0]);
            response = Network.makeServiceCall(inputParams, callbackActivityLog, true);
        } catch (e) {
            GlobalException(e);
            monitorObject['Details'].splice(0, 1);
        }
    },

    submitLocalSavedDataToServer: function() {
        try {

            kony.print("Start submitLocalSavedDataToServer");

            function getAllMonitorDataCallback(res) {
            kony.print("getAllMonitorDataCallback " + JSON.stringify(res));
                var objectToMap = [];
                if (res.length > 0) {
                    for (var i in res) {
                        var v = res[i];
                        objectToMap[i] = new Object();
                        objectToMap[i]["Id"] = kony.sync.getString(v.Id);
                        objectToMap[i]["MonitorJSON"] = kony.sync.getString(v.MonitorJSON);

                        localMonitorData = objectToMap[i]["MonitorJSON"];
                        kony.print("Send data to server from local storage: " + objectToMap[i]["Id"]);
                        boMonitor.submitActivityLog(true, objectToMap[i]["Id"]);
                        kony.print("End of send local data to server");
                    }
                }else //** MEG 6493
                {
                //Ami	removeProgressView()
                }//**End
            }
            com.kony.WeightWatchers.Logger.MonitorLogging.getAll(getAllMonitorDataCallback, eventErrorCallBack, null, maxRecordFromLocalLimit, 0);
        } catch (e) {
           //Ami removeProgressView()//** MEG 6493
            GlobalException(e);
        }
    },

    removeFromDatabase: function(Id) {
        try {

            function removeSuccessCallback() {
                localMonitorData = "";
                kony.print("Record successfully removed from local database.");
            }

            if (checkValidString(Id)) {
                com.kony.WeightWatchers.Logger.MonitorLogging.removeDeviceInstanceByPK(Id, removeSuccessCallback, eventErrorCallBack);
            }
        } catch (e) {
            GlobalException(e);
        }
    }
}
