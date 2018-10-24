var boTallyTimesSheet = {

    addAndUpdateEmployeeTimesheet: function(timesheetObj, timesheetId, callback, isMarkUpload) {
        displayProgressView();
        kony.print("::::0 timesheetObj=" + JSON.stringify(timesheetObj));
        kony.print("::::isTimeSheetEdit=" + isTimeSheetEdit + " ::isMarkUpload: " + isMarkUpload);
        // Call the com.kony.WeightWatchers.WeightWatchers.Timesheet.create and update ORM API
        if (isTimeSheetEdit) {
            //Edit Mode
            var updateObj = {};

            function deteleTimesheetCallback() {
                //Select Max Id from TallyTimesheet table
                boTallyMeetingCashout.selectMaxIdFromTable("TallyTimesheet", selectMaxIdFromTableCallbackForTimesheet1);
            }

            function selectMaxIdFromTableCallbackForTimesheet1(res) {
                var Id = res;

                timesheetObj.Id = Id;

                boTallyTimesSheet.insertTimeSheetForEmployee(timesheetObj, true, isMarkUpload);
            }

            function selectTimesheetSuccessCallback(res) {
                if (res.length > 0) {
                    //var deleteSQLQuery = "DELETE from TallyTimesheet where Id ='" + timesheetId +"'";
                    //				kony.sync.single_select_execute(kony.sync.getDBName(), deleteSQLQuery, null, deteleTimesheetCallback, eventErrorCallBack);
                    com.kony.WeightWatchers.Tally.TallyTimesheet.removeDeviceInstanceByPK(timesheetId, deteleTimesheetCallback, eventErrorCallBack);
                }
            }
            var transactionSQLQuery = "Select * from TallyTimesheet where CountryID = '" + getCountryID() + "' AND Id ='" + timesheetId + "'";
            kony.print("Tally Timesheet query: " + transactionSQLQuery);
            kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, selectTimesheetSuccessCallback, eventErrorCallBack);
        } else {
            //Add Mode
            //Select Max Id from TallyTimesheet table
            boTallyMeetingCashout.selectMaxIdFromTable("TallyTimesheet", selectMaxIdFromTableCallbackForTimesheet);

            function selectMaxIdFromTableCallbackForTimesheet(res) {
                var Id = res;

                timesheetObj.Id = Id;
                kony.print("::::1 timesheetObj=" + JSON.stringify(timesheetObj));
                //Insert data in TallyTimesheet Table
                boTallyTimesSheet.insertTimeSheetForEmployee(timesheetObj, false, isMarkUpload);
            }
            removeProgressView();
            if (callback) {
                callback.call(null);
            }
        }
    },

    createTimesheetSuccessCallback: function(res) {
        kony.print(getMessageTemplate("addSuccess", "Timesheet"), "info")
        eventPreShow_TallyTimesheet();
    },
    modifyMeetingTimesheet: function() {
        var updateMeetingObj = {
            "isTimesheetModified": true
        };
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        var WhereCond = "where ID ='" + glbMeetingNum + "' and MeetingDate like '%" + dateQuery + "%'";

        function timesheetModifiedCallback(res) {
            glbIsTallyTimesheetChanged = true;
        }
        DBMeetingsController.update(WhereCond, updateMeetingObj, timesheetModifiedCallback, eventErrorCallBack, false);
    },

    updateTimesheetSuccessCallback: function(res) {
        kony.print(getMessageTemplate("addSuccess", "Timesheet"), "info")
            //refreshing the data 
        eventPreShow_TallyTimesheet();
    },

    insertTimeSheetForEmployee: function(timesheetObj, isEdit, isMarkUpload) {

        callBackFunction = (isEdit) ? boTallyTimesSheet.createTimesheetSuccessCallback : boTallyTimesSheet.updateTimesheetSuccessCallback;
        kony.print("::::22 timesheetObj=" + JSON.stringify(timesheetObj));
        kony.print("::::22 isEdit=" + isEdit);
        var createTimesheetObject = {};

        createTimesheetObject.Id = timesheetObj.Id;
        createTimesheetObject.EmpName = timesheetObj.EmpName;
        createTimesheetObject.EmpNumber = timesheetObj.EmpNumber;
        createTimesheetObject.MeetingId = timesheetObj.MeetingId;
        createTimesheetObject.TimeIn = timesheetObj.TimeIn;
        createTimesheetObject.TimeOut = timesheetObj.TimeOut;

        if (in_array(deviceLocale,Countries["CA"]) && isSelMeetingOpenHours != true) {
            kony.print("--> createTimesheet --glbMeetingType , isSelMeetingOpenHours " + glbMeetingType + " ===" + isSelMeetingOpenHours);
            //overwrite the timein and out values if meeting type is not "open hours "
            var meetingDate = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")) + "T"; //** MEG 6386
            createTimesheetObject.TimeIn = meetingDate + convertTimeTo24HrsFormat(glbSelectedMeetingStartTime) + ":00";
            createTimesheetObject.TimeOut = meetingDate + convertTimeTo24HrsFormat(getTimeFromMinutes(parseInt(getMinutesFromTime(glbSelectedMeetingStartTime)) + 150)) + ":00";; // 2:30 hours after meeting start time;
            createTimesheetObject.MentorTraineeName = timesheetObj.MentorTraineeName;
            createTimesheetObject.MeetingSetup = timesheetObj.MeetingSetup;

        } else {
            createTimesheetObject.BreakIn = timesheetObj.BreakIn;
            createTimesheetObject.BreakOut = timesheetObj.BreakOut;
        }

        createTimesheetObject.MeetingDate = timesheetObj.MeetingDate;
        createTimesheetObject.EmpRole = timesheetObj.EmpRole;
        createTimesheetObject.EmpId = timesheetObj.EmpId;
        createTimesheetObject.markForUpload = isMarkUpload;

        DBTallyTimesheetController.create(createTimesheetObject, callBackFunction, eventErrorCallBack, isMarkUpload);

        kony.print("-----------------------> json object creation ---" + JSON.stringify(createTimesheetObject) + "-------------edit flag = " + isEdit);
    },

    getCurrentMeetingTimeSheetFromLocalDb: function(callback) {
        kony.print(":: getCurrentMeetingTimeSheetFromLocalDb");
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        var whereClause = " where MeetingId='" + glbMeetingNum + "' and MeetingDate like '%" + dateQuery + "%'";

        function getTallyTimesheetFromLocalDbCallback(resList) {
            //preparing object to be mapped to SegmentedUI
            var objectToMap = [];
            tallyTimeshet_segmentData_temp = [];

            if (resList.length < 0) {
                kony.print(":: getCurrentMeetingTimeSheetFromLocalDb 1");
                getTallyTimesheetFromLocalDbResponse(false, tallyTimeshet_segmentData_temp);
            } else {
                kony.print(":: getCurrentMeetingTimeSheetFromLocalDb 2");
                for (var i in resList) {

                    var v = resList[i];
                    kony.print("----->:: getCurrentMeetingTimeSheetFromLocalDb v=" + JSON.stringify(v));
                	//** MEG 6386
                 	if(deviceLocale == "fr_CA")
                   {
                     	TimeIn = checkValidString(v.TimeIn) ? convertTime24HrsForCA((v.TimeIn).substr(11, 8)) : "";
	                 	TimeOut = checkValidString(v.TimeOut) ? convertTime24HrsForCA((v.TimeOut).substr(11, 8)) : "";
                   
                   }else
                   {
	                    TimeIn = checkValidString(v.TimeIn) ? convertTimeTo12HrsFormat((v.TimeIn).substr(11, 8)) : "";
	                    TimeOut = checkValidString(v.TimeOut) ? convertTimeTo12HrsFormat((v.TimeOut).substr(11, 8)) : "";
	
	                    TimeIn = (TimeIn.substring(0, 1) == "0") ? TimeIn.substring(1, TimeIn.length) : TimeIn;
	                    TimeOut = (TimeOut.substring(0, 1) == "0") ? TimeOut.substring(1, TimeOut.length) : TimeOut;
					
					}
					//** End
					var blnShowTmeinOut = true;
                    var intBreakInOutColWidth = 11;
                    //if MEG -US or MEG-CA + meeting type!= open hours
                    if (in_array(deviceLocale,Countries["CA"]) && isSelMeetingOpenHours != true) {
                        BreakIn = v.MentorTraineeName;
                        BreakOut = (v.MeetingSetup == true || v.MeetingSetup == "true") ? getLocalizedString("strYes") : getLocalizedString("strNo");
                        kony.print("--> step1 --> BreakIn = " + BreakIn + "--breakot = " + BreakOut);
                        blnShowTmeinOut = false;
                        intBreakInOutColWidth = 21;
                    } else {
                    	//** MEG 6386
                    	if(deviceLocale == "fr_CA")
                  		{
	                  		 BreakIn = (checkValidString(v.BreakIn) && checkValidString(v.BreakIn) != "") ? convertTime24HrsForCA((v.BreakIn).substr(11, 8)) : "";
	                       	 BreakOut = (checkValidString(v.BreakOut) && checkValidString(v.BreakOut) != "") ? convertTime24HrsForCA((v.BreakOut).substr(11, 8)) : "";
                  		}else
                  		 {
	                        BreakIn = (checkValidString(v.BreakIn) && checkValidString(v.BreakIn) != "") ? convertTimeTo12HrsFormat((v.BreakIn).substr(11, 8)) : "";
	                        BreakOut = (checkValidString(v.BreakOut) && checkValidString(v.BreakOut) != "") ? convertTimeTo12HrsFormat((v.BreakOut).substr(11, 8)) : "";
                   		 }//** End
                    }
                    var b;
                    kony.print("-------------->" + JSON.stringify(v) + "--" + TimeIn + "--" + TimeOut + "----" + BreakIn + "---" + BreakOut);
                    kony.print("::::glbTallyDefaultDataInserted=" + glbTallyDefaultDataInserted);
                    if (in_array(deviceLocale,Countries["CA"])) {
	                  	var empRole = v.EmpRole;
	                  	empRole = (empRole == "Leader") ? getLocalizedString("strLeader") : getLocalizedString("strReceptionist");
		                if(checkMeetingIsInBetween()){
		                   	empRole = getLocalizedString("strLeader");
		                }
						if(isSelMeetingOpenHours) {   //Added for MEGCA-201
		                   	empRole = getLocalizedString("strReceptionist");		
		                }
		                kony.print("CA empRole:===>"+empRole);
	                }                    
                    if (glbTallyDefaultDataInserted && checkValidString(v.TimeIn) && checkValidString(v.TimeOut)) {
                        if (!in_array(deviceLocale,Countries["CA"])) {
                            b = mapKeys(viewTallyTimesheet, {
                                hidTimeSheetId: kony.sync.getString(v.Id),
                                hidEmployeeId: kony.sync.getString(v.EmpId),
                                lblEmployee: kony.sync.getString(v.EmpName),
                                lblNumber: kony.sync.getString(v.EmpNumber),
                                lblEmpRole: kony.sync.getString(v.EmpRole),
                                lblTimeIn: {
                                    "text": kony.sync.getString(TimeIn),
                                    "isVisible": blnShowTmeinOut
                                },
                                lblTimeOut: {
                                    "text": kony.sync.getString(TimeOut),
                                    "isVisible": blnShowTmeinOut
                                },
                                lblBreakIn: {
                                    text: kony.sync.getString(BreakIn),
                                    containerWeight: intBreakInOutColWidth
                                },
                                lblBreakOut: {
                                    text: kony.sync.getString(BreakOut),
                                    containerWeight: intBreakInOutColWidth
                                },
                                imgEdit: "icn_edit_general.png"
                            });
                        } else {
                            b = {
                                hidTimeSheetId: (v.Id),
                                hidEmployeeId: v.EmpId,
                                lblEmployee: v.EmpName,
                                lblNumber: v.EmpNumber,
                                //lblEmpRole: (v.EmpRole),
								//lblEmpRole: (isSelMeetingOpenHours) ? "Receptionist" : (v.EmpRole),//Added for MEGCA-201
								lblEmpRole: empRole,
                                lblTimeIn: {
                                    "text": TimeIn,
                                    "isVisible": blnShowTmeinOut
                                },
                                lblTimeOut: {
                                    "text": TimeOut,
                                    "isVisible": blnShowTmeinOut
                                },
                                lblBreakIn: {
                                    text: BreakIn,
                                    containerWeight: intBreakInOutColWidth
                                },
                                lblBreakOut: {
                                    text: BreakOut,
                                    containerWeight: intBreakInOutColWidth
                                },
                                imgEdit: "icn_edit_general.png"
                            };
                        }
                    } else {
                        if (!in_array(deviceLocale,Countries["CA"])) {
                            b = mapKeys(viewTallyTimesheet, {
                                hidTimeSheetId: kony.sync.getString(v.Id),
                                hidEmployeeId: kony.sync.getString(v.EmpId),
                                lblEmployee: kony.sync.getString(v.EmpName),
                                lblNumber: kony.sync.getString(v.EmpNumber),
                                //lblEmpRole : kony.sync.getString(v.EmpRole),
                                lblEmpRole: (checkMeetingIsInBetween()) ? kony.i18n.getLocalizedString("strLeader") : kony.sync.getString(v.EmpRole),
                                lblTimeIn: {
                                    "text": "",
                                    "isVisible": blnShowTmeinOut
                                },
                                lblTimeOut: {
                                    "text": "",
                                    "isVisible": blnShowTmeinOut
                                },
                                lblBreakIn: {
                                    text: kony.sync.getString(BreakIn),
                                    containerWeight: intBreakInOutColWidth
                                },
                                lblBreakOut: {
                                    text: kony.sync.getString(BreakOut),
                                    containerWeight: intBreakInOutColWidth
                                },
                                imgEdit: "icn_edit_general.png"
                            });
                        } else {
                            b = {
                                hidTimeSheetId: (v.Id),
                                hidEmployeeId: v.EmpId,
                                lblEmployee: v.EmpName,
                                lblNumber: v.EmpNumber,
								lblEmpRole: empRole,
                                lblTimeIn: {
                                    "text": "",
                                    "isVisible": blnShowTmeinOut
                                },
                                lblTimeOut: {
                                    "text": "",
                                    "isVisible": blnShowTmeinOut
                                },
                                lblBreakIn: {
                                    "text": BreakIn,
                                    "containerWeight": intBreakInOutColWidth
                                },
                                lblBreakOut: {
                                    "text": BreakOut,
                                    "containerWeight": intBreakInOutColWidth
                                },
                                imgEdit: "icn_edit_general.png"
                            };
                        }
                    }
                    tallyTimeshet_segmentData_temp.push(b);
                }
                kony.print("------> tallyTimeshet_segmentData_temp = " + JSON.stringify(tallyTimeshet_segmentData_temp));
                callback.call(null, true, tallyTimeshet_segmentData_temp);
            }
        }
        //ExecuteSQL.ExecuteSQLQuery(SQLQuery, getTallyTimesheetFromLocalDbCallback, eventErrorCallBack);
        DBTallyTimesheetController.find(whereClause, getTallyTimesheetFromLocalDbCallback, eventErrorCallBack);
    },

    validateTimeForEmpUsingService: function(callback) {
        isDuplicateTimesheetForEmployee = false;
        kony.print("------- checking validations using service ");

        function validateTimeServiceCallBack(status, timeValidateResponse) {
            kony.print("----------status = " + status + "---- opt status = " + timeValidateResponse["opstatus"] + " ----------------timeValidateResponse ===" + JSON.stringify(timeValidateResponse["TallyTimesheetData"]));
            try {
                if (status == 400) {
                    if (timeValidateResponse["opstatus"] == 0) {
                        kony.print("--------> getting response ");

                        if (timeValidateResponse["TallyTimesheetData"] && timeValidateResponse["TallyTimesheetData"].length > 0) {
                            kony.print("--------> if");
                            isDuplicateTimesheetForEmployee = 'Yes';
                        } else {
                            kony.print("--------> else  ");
                            isDuplicateTimesheetForEmployee = 'No';
                        }
                    } else {
                        //Callback - opstatus is Nonzero
                        CommonErrHandler.networkError(timeValidateResponse['opstatus'])
                    }
                    kony.print("-----isDuplicateTimesheetForEmployee " + isDuplicateTimesheetForEmployee);
                    //callback.call(null,isDuplicateTimesheetForEmployee);
                    getTimesheetValidFlag(isDuplicateTimesheetForEmployee);

                } else if (status == 300) {
                    //Callback - Network Error
                    CommonErrHandler.networkError(status, timeValidateResponse);
                }
                tempCallback = null;
            } catch (e) {
                GlobalException(e);
            }
        }


        //alert("--------------- meeting time = "+ glbMeetingDate+'-- glbMeetingOccID= '+glbMeetingOccID+'-- MeetingDate =  '+glbCurrentMeetingValue);
        employeeId = popupAddTime.hidEmployeeId.text;

        arrTemp1 = glbMeetingDate.split("T");
        meetingDate = arrTemp1[0];

        arrTemp2 = arrTemp1[1].split("-");
        meetingTime = arrTemp2[0];


        var meetingDate = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")) + "T"; //** MEG 6386

        strStartTime = convertTimeTo24HrsFormat(popupAddTime.lblStartTime.text);
        strEndTime = convertTimeTo24HrsFormat(popupAddTime.lblEndTime.text);

        strDBStartTime = meetingDate + strStartTime + ":00";
        strDBEndTime = meetingDate + strEndTime + ":00";


        var validateTimeForEmpService_inputparam = {};
         validateTimeForEmpService_inputparam["serviceID"] = Services.TallyTimesheetSearch;
         validateTimeForEmpService_inputparam["EmployeeID"] = employeeId;
	     validateTimeForEmpService_inputparam["MeetingDate"] = meetingDate + meetingTime;
	     validateTimeForEmpService_inputparam["MeetingOccurrenceID"] = glbMeetingNum;
	     validateTimeForEmpService_inputparam["TimeIn"] = strDBStartTime;
	     validateTimeForEmpService_inputparam["TimeOut"] = strDBEndTime;
	     
        if(JsonService){
	        validateTimeForEmpService_inputparam["httpheaders"] = setRESTHeader();
	    }else{
	       
	        validateTimeForEmpService_inputparam["DeviceID"] = gblDeviceID;
	        validateTimeForEmpService_inputparam["AccessToken"] = glbSPAuthToken;
	        validateTimeForEmpService_inputparam["SPID"] = glbEmployeeId;
	        validateTimeForEmpService_inputparam["HeaderDate"] = glbHeaderDate;
	        validateTimeForEmpService_inputparam["Source"] = gblSourceVal;
	        validateTimeForEmpService_inputparam["httpheaders"] = {};
		}
		 validateTimeForEmpService_inputparam["httpconfigs"] = {};
		 
        /*validateTimeForEmpService_inputparam["EmployeeID"] = 76975;
        validateTimeForEmpService_inputparam["MeetingDate"] = "2013-09-30T00:00:00";
        validateTimeForEmpService_inputparam["MeetingOccurrenceID"] = 175432167;
        validateTimeForEmpService_inputparam["TimeIn"] = "2013-09-30T05:00:00";     
        validateTimeForEmpService_inputparam["TimeOut"] = "2013-09-30T05:30:00";*/

        kony.print("------> validateTimeForEmpService_inputparam -->  = " + JSON.stringify(validateTimeForEmpService_inputparam));

        //validateTimeForEmpService = appmiddlewareinvokerasync(validateTimeForEmpService_inputparam, validateTimeServiceCallBack);
        validateTimeForEmpService = Network.makeServiceCall(validateTimeForEmpService_inputparam, validateTimeServiceCallBack, false); //true to allow offline data access


    },

    deleteTimesheetRecord: function(MeetingId, EmpId) {
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386
        var SQLQuery = "where MeetingId=" + MeetingId + " and EmpId = " + EmpId + " and MeetingDate like '%" + dateQuery + "%'";

        function successGetPK(res) {
            if (res.length > 0) {
                kony.print("::DJP::res=" + JSON.stringify(res));
                com.kony.WeightWatchers.Tally.TallyTimesheet.removeDeviceInstanceByPK(res[0]._Id, function() {
                    alertForMessages(kony.i18n.getLocalizedString("strTimeDeletedSuccessMsg"))
                }, eventErrorCallBack);
            }
        }
        DBTallyTimesheetController.find(SQLQuery, successGetPK, eventErrorCallBack);

    },

    //checkIfChangesDoneInTimesheet: function(MeetingId, EmpId, callback){
    //	 	var SQLQuery = "where MeetingId=" + MeetingId;
    //    	function checkWhetherEmpTimesheetDataForMeetingExistOrNotCallback(resp) {
    //    		//Callback
    //			kony.print("::::checkWhetherEmpTimesheetDataForMeetingExistOrNotCallback="+JSON.stringify(resp));
    //			if(resp.length > 0)
    //			{
    //				callback.call(null, true);
    //			}
    //			else
    //			{
    //				callback.call(null, false);
    //			}
    //    	}
    //    	//Execute Sql query
    //		com.kony.WeightWatchers.Tally.TallyTimesheet.find(SQLQuery, checkWhetherEmpTimesheetDataForMeetingExistOrNotCallback, eventErrorCallBack);
    //	 },


    checkWhetherEmpTimesheetDataForMeetingExistOrNot: function(MeetingId, EmpId, callback) {
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386
        var SQLQuery = "where MeetingId=" + MeetingId + " and EmpId = " + EmpId + " and MeetingDate like '%" + dateQuery + "%'";

        function checkWhetherEmpTimesheetDataForMeetingExistOrNotCallback(resp) {
            //Callback
            kony.print("::::checkWhetherEmpTimesheetDataForMeetingExistOrNotCallback=" + JSON.stringify(resp));
            if (resp.length > 0) {
                callback.call(null, true);
            } else {
                callback.call(null, false);
            }
        }
        //Execute Sql query
        DBTallyTimesheetController.find(SQLQuery, checkWhetherEmpTimesheetDataForMeetingExistOrNotCallback, eventErrorCallBack);

    },


    deleteInsertTimeSheetData: function(markUpload) {
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386
        var whrClause = " where MeetingId = " + glbMeetingNum + " and MeetingDate like '%" + dateQuery + "%'";
        var timeSheetData = null;
        var deleteCount = 0;

        function successGetPK(res) {
            if (res.length > 0) {
                //MEG-4512
                boTallyTimesSheet.logTallyTimeSheetData(res);
                kony.print("in successGetPK of deleteInsertTimeSheetData ===>" + JSON.stringify(res));
                deleteCount = res.length;
                kony.print("in successGetPK of deleteInsertTimeSheetData deleteCount ===>" + deleteCount);
                for (var i in res) {
                    kony.print("in successGetPK of deleteInsertTimeSheetData row ===>" + JSON.stringify(res[i]));
                    timeSheetData = res[i];
                    kony.print("in successGetPK of deleteInsertTimeSheetData timeSheetData ===>" + JSON.stringify(timeSheetData));

                    com.kony.WeightWatchers.Tally.TallyTimesheet.removeDeviceInstanceByPK(res[i].Id, deleteInsertTimeSheetDataSuccessCallBack, eventErrorCallBack);
                }
            }
        }
        DBTallyTimesheetController.find(whrClause, successGetPK, eventErrorCallBack);


        function deleteInsertTimeSheetDataSuccessCallBack() {
            deleteCount--;
            kony.print("in deleteInsertTimeSheetDataSuccessCallBack ===>" + deleteCount);

            //if(deleteCount==0 && timeSheetData!=null)
            if (timeSheetData != null) {
                kony.print("in deleteInsertTimeSheetDataSuccessCallBack 000===>" + JSON.stringify(timeSheetData));

                boTallyTimesSheet.insertTimeSheetForEmployee(timeSheetData, false, markUpload);

            }
        }
    },
    logTallyTimeSheetData: function(timeSheetData) {
        kony.print("::LOG:: logTallyTimeSheetData timeSheetData = " + JSON.stringify(timeSheetData));
        _.each(timeSheetData, function(tsObject, index) {
            var obj = {};
            obj.EmpName = tsObject._EmpName;
            obj.EmpRole = tsObject._EmpRole;
            obj.TimeIn = tsObject._TimeIn;
            obj.TimeOut = tsObject._TimeOut;
            obj.BreakIn = tsObject._BreakIn;
            obj.BreakOut = tsObject._BreakOut;

            //MEG-17,21- if meeting type = TRADE (NOT OPEN HOURS )
            if (in_array(deviceLocale,Countries["CA"]) && isSelMeetingOpenHours != true) {
                obj.MeetingSetup = tsObject._MeetingSetup;
                obj.MentorTraineeName = tsObject._MentorTraineeName;
            }
            boMonitor.log("Tally TimeSheet", "btnAddTime", obj, FlowForMonitor.Tally);
        });
    }
};
