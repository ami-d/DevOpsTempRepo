var MeetingDataForPicker = [];
var TalliedMeetingOccID;
var TallyMettingDate = "";
var boMeetings = {

    getMeetingsByLocationId: function(locationId) {
        var daycodeid = (new Date).getDay();
        daycodeid = daycodeid + 1;
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        if (m < 10) {
            var dtcTime = "" + h + "" + "0" + "" + m + "";
        } else {
            var dtcTime = "" + h + "" + "" + m + "";
        }
        var strWhere = "";
        //strWhere = "where locationID = "+ locationId+" and DayCodeID = "+daycodeid;
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386
        /*strWhere =
            "select A.* , B.BackOfficeRefID as BackOfficeRefID from " +
            "(" +
            "select ID, DTCTime, MeetingStatus, MeetingTypeID, isTimesheetModified, DayTimeCodeID, DayCodeID, MeetingDate from Meetings where CountryID = '" + getCountryID() + "' AND locationID = " + locationId + " and MeetingDate like '%" + dateQuery + "%'" +
            " union " +
            "select MeetingOccID as ID, DTCTime, MeetingStatus, MeetingTypeID, 0, DayTimeCodeID, DayCodeID, MeetingDate from MeetingInstance where CountryID = '" + getCountryID() + "' AND locationID = " + locationId + " and MeetingDate like '%" + dateQuery + "%'" +
            ") as A, Meetings B where  A.ID = B.ID" +
            " group by A.ID";*/
            
        /*
         * MEG-5152 Added left join to get meeting status based on meetingstatus and tally status received from backend.
		*/
        strWhere = "SELECT M.ID,M.LineOfBsinessID,M.DTCTime,M.IsAtWork,M.SeriesCompMeetings,M.IsTallySubmitted,M.IsInfoSession, " + 
       				"CASE M.MeetingStatus WHEN 'Submitted' THEN 'Disable' " + 
       				"ELSE CASE M.TallyStatus WHEN 'LeaderSignOff' THEN 'Close' ELSE IFNULL(MI.MeetingStatus, 'Open') END END AS MeetingStatus, " +       
       				"M.MeetingTypeID, M.isTimesheetModified, M.DayTimeCodeID, M.DayCodeID, M.MeetingDate, M.BackOfficeRefID, M.WeekNo, M.StartDate " +
       				"from Meetings M LEFT JOIN MeetingInstance MI ON MI.MeetingOccID == M.ID AND " +
       				"MI.MeetingDate like '%" + dateQuery + "%' AND MI.locationID = " + locationId + " "+
       				"Where M.CountryID = '" + getCountryID() + "' AND M.locationID = " + locationId + " and M.MeetingDate like '%" + dateQuery + "%'";
       				
        kony.print("getMeetingsByLocationId:=== " + strWhere);
        boMeetings.searchMeetingsByLocationId(strWhere, locationId);
    },

    searchMeetingsByLocationId: function(strWhere, locationId) {
        function searchMeetingsByLocationIdSuccessCallback(res) {
            if (res.length <= 0) {
                //boMeetings.getMeetingsListFromWs(locationId);
                removeProgressView();
            } else {
                boMeetings.getMeetingsListOffline(res);
            }
        }

        displayProgressView();
        //com.kony.WeightWatchers.MeetingSyncScope.Meetings.find(strWhere, searchMeetingsByLocationIdSuccessCallback, eventErrorCallBack);
        kony.sync.single_select_execute(kony.sync.getDBName(), strWhere, null, searchMeetingsByLocationIdSuccessCallback, eventErrorCallBack);
        //com.kony.WeightWatchers.LookUpTables.MeetingInstance.find(strWhere, searchMeetingsByLocationIdSuccessCallback, eventErrorCallBack);
        //gblMeetingSyncObject.find(strWhere, searchMeetingsByLocationIdSuccessCallback, eventErrorCallBack);
    },

    getMeetingsListOffline: function(response) {
        kony.print("getMeetingsListOffline:=== " + JSON.stringify(response));
        if (response.length > 0) {
            var Meetings_temp = [];
            var meetingResponse_segmentMeetings_temp = [];
            var mtngTypeId = "";
            var meetingTime = "";
            var meetingStatus = "";
          	var meetingWeekNo = "";
            for (var i in response) {
                var vData = response[i];
                kony.print("vData:=== " + JSON.stringify(vData));
                //mtngTypeId = kony.sync.getString(vData.meetingTypeID);
                mtngTypeId = kony.sync.getString(vData.MeetingTypeID);
                mtngTypeId = parseInt(mtngTypeId);
              	meetingWeekNo = kony.sync.getString(vData.WeekNo);
                meetingWeekNo = parseInt(meetingWeekNo);
                kony.print("Getting meeting type ID for Meeting type " + mtngTypeId);
                var mtngTypeDesc = LocaitonLookupTable[mtngTypeId];
                kony.print("meeting type ID Desc:== " + mtngTypeDesc);
                kony.print("meeting status:== " + kony.sync.getString(vData.MeetingStatus));

                //glbMeetingDate = kony.sync.getString(vData._MeetingDate);

                kony.print("Meeting date is: " + glbMeetingDate);

                meetingTime = kony.sync.getString(vData.DTCTime);
                meetingTime = getFormatedValue(meetingTime);
                TallyMettingDate = meetingTime;
                var vMap = mapKeys(viewSelectMeeting, {

                    lblMeetings: ((mtngTypeDesc && mtngTypeDesc != "") ? (mtngTypeDesc + " - " + meetingTime) : meetingTime),
                    meetingTime: meetingTime,
                    hdmeetingNum: kony.sync.getString(vData.ID),
                    meetinglookUpID: mtngTypeId,
                    meetingStatus: kony.sync.getString(vData.MeetingStatus),
                    meetingDayTimeCode: kony.sync.getString(vData.DayTimeCodeID),
                  	meetingWeekNo: meetingWeekNo,
                    isTimesheetModified: kony.sync.getString(vData.isTimesheetModified),
                    meetingDate: kony.sync.getString(vData.MeetingDate).split('T')[0] + "T" + kony.sync.getString(vData.MeetingDate).split('T')[1].split('-')[0],//MEG-5922 //kony.sync.getString(vData.MeetingDate).substring(0, 18),
                    meetingStartDate: kony.sync.getString(vData.StartDate).split('T')[0] + "T" + kony.sync.getString(vData.StartDate).split('T')[1].split('-')[0],
                  	meetingTypeID: kony.sync.getString(vData.MeetingTypeID),
                    meetingDayCodeID: kony.sync.getString(vData.DayCodeID),
                    meetingDTCTime: kony.sync.getString(vData.DTCTime),
                    backOfficerRefID:kony.sync.getString(vData.BackOfficeRefID),
                  	LineOfBsinessID:kony.sync.getString(vData.LineOfBsinessID),
                    SeriesCompMeetings:kony.sync.getString(vData.SeriesCompMeetings),
                    IsAtWork:kony.sync.getString(vData.IsAtWork),
                    IsTallySubmitted:kony.sync.getString(vData.IsTallySubmitted), //**MEG 7172
                  	IsInfoSession : kony.sync.getString(vData.IsInfoSession)

                });
                //var Temp=[];
                //				Temp[i]=[meetingTime,kony.sync.getString(vData._MeetingNumber)];
                //				MeetingDataForPicker.push(Temp,100);

                //kony.print("MeetingDataForPicker:== "+MeetingDataForPicker);
                //MeetingDataForPicker.push(vTemp);
                meetingResponse_segmentMeetings_temp.push(vMap);
                kony.print("meetingResponse_segmentMeetings_temp :== " + meetingResponse_segmentMeetings_temp);


            }

            /*if(isCurrentMeetingDropdown)
            	bindMeetingDataToDropdown(meetingResponse_segmentMeetings_temp, TalliedMeetingOccID);
            else
            	getMeetingsListFromWsResponse(true,meetingResponse_segmentMeetings_temp);*/
            bindMeetingDataToDropdown(meetingResponse_segmentMeetings_temp, TalliedMeetingOccID);
        }

    },


    getLookupForMeeting: function(cntryCode) {
        var cntryCode = parseInt(cntryCode);
        kony.print("Country code is : " + cntryCode);
        var whrCondition = "";
        whrCondition = "where CountryID = " + cntryCode;

        boMeetings.getMeetingTypesBySearchKey(whrCondition);
    },


    getMeetingTypesBySearchKey: function(whrClouse) {
        try {
            kony.print("Inside populating Location lookup table");
            //Success callback reads the response and populates the SegmentedUI for Meeting Screen
            function getMeetigTypesSuccessCallback(res) {
                //preparing object to be mapped with Meeting time
                if (res.length <= 0) {
                    kony.print("No meeting type found");
                    removeProgressView();
                } else {
                    //fetching all the meeting display value from result
                    var objectMap = [];
                    LocaitonLookupTable = new Array();
                    for (var i in res) {
                        var v = res[i];
                        kony.print("LocaitonLookupTable v==" + JSON.stringify(v));
                        var mtngTypeId = kony.sync.getString(v.MeetingTypeID);
                        mtngTypeId = parseInt(mtngTypeId);
                        LocaitonLookupTable[mtngTypeId] = kony.sync.getString(v.MeetingTypeName);
                    }
                    kony.print("LocaitonLookupTable:==" + JSON.stringify(LocaitonLookupTable));
                }
                removeProgressView();
            }

            //Display Loading screen
            displayProgressView();
            com.kony.WeightWatchers.ProductSyncScope.MeetingTypes.find(whrClouse, getMeetigTypesSuccessCallback, eventErrorCallBack);
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }

    },


    getFormatedMeetingTime: function(inpt) {

        if (inpt == 1200) {
            return "12:00 "+getLocalizedString("strPM");
        } else if (inpt < 1200) {
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " "+getLocalizedString("strAM");
        } else if (inpt < 1300) {
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " "+getLocalizedString("strPM");
        } else if (inpt < 2400) {
            inpt = inpt - 1200;
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " "+getLocalizedString("strPM");
        } else {
            return "Invalid Input";
        }

    },

    //MEG-3: Show Pre Registered Member on Home Screen

    getPreRegisteredMembers: function() {

        kony.print("Inside getPreRegisteredMembers from Meeting");

        var whrClause = "where RegStatus='" + MemberRegEnum.Pre_Registered + "'";

        function getPreRegisteredMembersSuccessCallback(res) {
            kony.print("Got Pre Registered Members ----- " + res.length);
            (res.length >= NumOfMemberToShow) ? frmMemberProfileSearch.lblShowMoreResult.setVisibility(true): frmMemberProfileSearch.lblShowMoreResult.setVisibility(false);
            boHomeScreenSearch.populateSearchResults(res);

        }
        DBMeetingsController.find(whereClause, getPreRegisteredMembersSuccessCallback, eventErrorCallBack);
        //gblMeetingSyncObject.find(whereClause, getPreRegisteredMembersSuccessCallback, eventErrorCallBack);
    },

    getMeetingDataByID: function(meetingId) {
        var whereClause = "where MeetingNumber='" + meetingId + "'";

        function getMeetingDataByIDSuccessCallback(res) {
            if (res.length > 0) {
                var meetingData = res[0];
                var mtngTypeId = kony.sync.getString(meetingData.MeetingTypeID);
                mtngTypeId = parseInt(mtngTypeId);
                kony.print("Getting meeting type ID for Meeting type " + mtngTypeId);
                var mtngTypeDesc = LocaitonLookupTable[mtngTypeId];
                showMeetingInfo(mtngTypeDesc);
            }
        }
        DBMeetingsController.find(whereClause, getMeetingDataByIDSuccessCallback, eventErrorCallBack);
    },
    closeTallyMeeting: function(callback) {
       kony.print("ABA --> Week No " + frmSelectMeeting.segMeetingsList.selectedItems[0]["weekNumber"]["text"].substr(6));
       
      var updateMeetingObj = {
            "TransactionType": "Close",
            "Date": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS")
          	
        };
      
      	if(IsAWSLocationEnabled())
        {
          
          boMeetings.getAndUpdateWeekNoForAtWorkMeeting(function(WeekNo) {
            updateMeetingObj.WeekNo = WeekNo;
          });
          
         // updateMeetingObj.WeekNo = frmSelectMeeting.segMeetingsList.selectedItems[0]["weekNumber"]["text"].substr(6);
        }else{
          updateMeetingObj.WeekNo = "0";
        }
      kony.print("closeTallyMeeting updateMeetingObj==" + JSON.stringify(updateMeetingObj));
        var WhereCond = "where ID ='" + glbMeetingNum + "'";
       kony.print("Where condition for close==" + WhereCond);

        function closeTallyMeetingSuccessCallBack(res) {
            kony.print("close meeting updated successfully");
            kony.print(getMessageTemplate("Update closemeeting", "Meetings"), "info")
            var createObj = {
                "MeetingOccID": glbMeetingNum,
                "MeetingDate": glbMeetingDate,
                "MeetingStatus": "Close",
                "LocationID": glbLocationID,
                "DayCodeID": glbMeetingDayCodeID,
                "DTCTime": glbMeetingDTCTime,
                "MeetingTypeID": glbMeetingType,
                "DayTimeCodeID": glbDayTimeCodeID
            };
            boMeetings.RemoveMeetingInstance(createObj, callback);
        }
        //updateMeetingObj.DeviceID = gblDeviceID;
        //  updateMeetingObj.AccessToken = glbSPAuthToken;
        //  updateMeetingObj.SPID = glbEmployeeId;
        //  updateMeetingObj.HeaderDate = glbHeaderDate;
        DBMeetingsController.update(WhereCond, updateMeetingObj, closeTallyMeetingSuccessCallBack, eventErrorCallBack, true);

    },

    closeTallyMeetingInstance: function() {
        var updateMeetingInstanceObj = {
            "MeetingStatus": "Open",
            "MeetingDate": glbMeetingDate
        }
        var WhereCond = "where MeetingOccID ='" + glbMeetingNum + "'";
        kony.print("Where condition for close instance==" + WhereCond);

        function closeTallyMeetingInstanceSuccessCallBack(res) {
            kony.print("close meeting instance updated successfully" + JSON.stringify(res));
            glbMeetingStatus = "Open";

            boMeetings.getCurrentMeeting(); // Added by Praveen kalal MEG-4333 
            //boMeetings.ReopenTallyMeeting();
            kony.print(getMessageTemplate("Update closemeeting in instance", "MeetingsInstance"), "info")
        }

        DBMeetingInsatnaceController.update(WhereCond, updateMeetingInstanceObj, closeTallyMeetingInstanceSuccessCallBack, eventErrorCallBack, false)

    },
    UpdateMeetingStatus: function(obj, WhereCond) {
        obj.TransactionType = "Open";
      kony.print("::pk::--" + JSON.stringify(obj));

        DBMeetingsUpdateController.update(WhereCond, obj, UpdateMeetingStatusSuccess, eventErrorCallBack, true);

        function UpdateMeetingStatusSuccess() {
            kony.print("Updated Succesfully.");
        }
    },
  	UpdateMeetingRecord: function(obj, WhereCond) {
        //obj.TransactionType = "Open";
        kony.print("::pk:: updatemeetingrecord--" + JSON.stringify(obj));

        DBMeetingsController.update(WhereCond, obj, UpdateMeetingStatusSuccess, eventErrorCallBack, true);

        function UpdateMeetingStatusSuccess() {
            kony.print("Updated Succesfully.");
        }
    },
    getCurrentMeeting: function() {
        var strWhere = "where ID ='" + glbMeetingNum + "'";

        function getCurrentMeetingSuccessCallback(res) {
            if (res.length > 0) {
                var WhereCond = "where ID ='" + glbMeetingNum + "'";

                var obj = {
                    "ID": res[0].ID,
                    "TransactionType": "Close",
                    "Date": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNo": frmSelectMeeting.segMeetingsList.selectedItems[0]["weekNumber"]["text"].substr(6)//"0"

                }

                boMeetings.checkMeetingExist(WhereCond, function(isExist) {
                    kony.print("::PK::---isExist--" + isExist);
                    if (isExist) {
                        boMeetings.UpdateMeetingStatus(obj, strWhere);

                    } else {
                        kony.print("::PK: res---" + JSON.stringify(obj));
                        DBMeetingsUpdateController.create(obj, function() {
                            boMeetings.UpdateMeetingStatus(obj, WhereCond);
                        }, eventErrorCallBack, false);
                    }
                });

            }
        }

        DBMeetingsController.find(strWhere, getCurrentMeetingSuccessCallback, eventErrorCallBack);
    },
    checkMeetingExist: function(whrCond, callback) {
        kony.print("::PK:Check for MeetingUpdate");

        function checkMeetingExistSuccessCallback(res) {
            kony.print("::PK:Inside success res.length--" + res.length);

            if (res.length > 0) {
                callback.call(null, true)
            } else {
                callback.call(null, false)
            }
        }

        DBMeetingsUpdateController.find(whrCond, checkMeetingExistSuccessCallback, eventErrorCallBack);
    },
    ReopenTallyMeeting: function() {
        var updateMeetingObj = {
            "TransactionType": "Open",
            "Date": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS")
        }
        var WhereCond = "where ID ='" + glbMeetingNum + "'";
        kony.print("Where condition for close instance==" + WhereCond);

        function ReopenTallyMeetingSuccessCallBack(res) {
            kony.print("close meeting instance updated successfully" + JSON.stringify(res));
            //glbMeetingStatus = "Open";
            kony.print(getMessageTemplate("Update closemeeting in Meeting Table", "Meetings"), "info")
        }

        DBMeetingsController.update(WhereCond, updateMeetingObj, ReopenTallyMeetingSuccessCallBack, eventErrorCallBack, true);

    },

    getMeetingStatusByMtngOccID: function(meetingId) {
        //var whereClause = "where MeetingOccID='"+ meetingId +"' and MeetingStatus='Close'";
        var whereClause = "where MeetingOccID='" + meetingId + "' and MeetingStatus='Close' and date(MeetingDate) = date('now','localtime')";

        function getMeetingStatusByMtngOccIDSuccessCallback(res) {
            removeProgressView();
            if (res.length > 0) {
                alertForMessages(kony.i18n.getLocalizedString("strMsgMeetingAlreadyTallied"));
                frmHomeScreen.show();
            } else {
                boTally.getAllTallyData();
            }
        }
        DBMeetingInsatnaceController.find(whereClause, getMeetingStatusByMtngOccIDSuccessCallback, eventErrorCallBack);
    },

    getMeetingStatusForEnrollAdd: function(meetingId, flow) {
        var whereClause = "where MeetingOccID='" + meetingId + "' and MeetingStatus='Close'";

        function getMeetingStatusForEnrollAddSuccessCallback(res) {
            if (res.length > 0) {
                alertForEnrollAddInTalliedMeetingConfirmation();
            } else {
                if (flow == "Enroll") {
                    frmEnrollNewMember.show();
                } else if (flow == "Add") {
                    frmAddIndividulaMember.lblMemberShipInfo.text = getLocalizedString("strPaid");
                    frmAddIndividulaMember.imgGoalWeight.isVisible = false;
                    frmAddIndividulaMember.show();
                }
            }
        }
        DBMeetingInsatnaceController.find(whereClause, getMeetingStatusForEnrollAddSuccessCallback, eventErrorCallBack);
    },

    getMtngOccIDOfTalliedMeeting: function() {
        //var whereClause = "where MeetingStatus='Close' and date(MeetingDate) = date('now','localtime')"; Commented by Ami. check meeting date only instead of datetime
		var whereClause = "where MeetingStatus='Close' and substr(MeetingDate, 1, 10) = date('now','localtime')";
		
        function getMtngOccIDOfTalliedMeetingSuccessCallback(res) {
            kony.print("getMtngOccIDOfTalliedMeetingSuccessCallback===>> " + JSON.stringify(res));
            TalliedMeetingOccID = "";
            if (res.length > 0) {
                for (var i in res) {
                    var vData = res[i];
                    TalliedMeetingOccID += vData.MeetingOccID + ",";
                }
                TalliedMeetingOccID = TalliedMeetingOccID.replace(/,\s*$/, '');
                kony.print("TalliedMeetingOccID===>> " + TalliedMeetingOccID);
            }
            boMeetings.getMeetingsByLocationId(glbLocationID);
        }
        DBMeetingInsatnaceController.find(whereClause, getMtngOccIDOfTalliedMeetingSuccessCallback, eventErrorCallBack);
    },

    /*getAllMeetings : function(){
    	var whereClause = "where LocationID='"+ glbLocationID +"'";
    	function getAllMeetingsSuccessCallback(res){
    		ObjMeetingsArr = [];
    		if(res.length > 0){
    	        for(var i in res)
    	        {
    	            var vData = res[i];
    	            var createObj = {
    			    	"MeetingOccID":kony.sync.getString(vData._ID),
    			    	"MeetingDate":supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
    			        "MeetingStatus":"Open",
    			        "LocationID":glbLocationID,
    			        "DTCTime":kony.sync.getString(vData._DTCTime),
    			        "DayCodeID":kony.sync.getString(vData._DayCodeID)
    	    		};
    	    		ObjMeetingsArr.push(createObj);
    	        }
    	        kony.print("getAllMeetingsSuccessCallback===>> " + JSON.stringify(ObjMeetingsArr));
    	        boMeetings.createMeetingsInstance(ObjMeetingsArr);
           	} 
    	}
    	DBMeetingsController.find(whereClause, getAllMeetingsSuccessCallback, eventErrorCallBack);		
    },*/

    createMeetingsInstance: function(objCreate, callback) {
        kony.print("createMeetingsInstance==>> " + JSON.stringify(objCreate));

        function createMeetingsInstanceSuccessCallback(res) {
            kony.print("MeetingsInstance created successfully");
            glbMeetingStatus = "Close";
            kony.print(getMessageTemplate("Create MeetingsInstance Success", "MeetingsInstance"), "info");
            callback.call(null, true);
        }
        DBMeetingInsatnaceController.create(objCreate, createMeetingsInstanceSuccessCallback, eventErrorCallBack, false);
    },
    RemoveMeetingInstance: function(objCreate, callback) {
        var whrCodition = " where LocationID ='" + glbLocationID + "' and MeetingOccID='" + glbMeetingNum + "'";
        kony.print("RemoveMeetingInstance==>> " + JSON.stringify(objCreate));

        function RemoveMeetingsInstanceSuccessCallback(res) {
            kony.print("MeetingsInstance Remove successfully");
            boMeetings.createMeetingsInstance(objCreate, callback);
            //callback.call(null,true);
        }
        com.kony.WeightWatchers.LookUpTables.MeetingInstance.remove(whrCodition, RemoveMeetingsInstanceSuccessCallback, eventErrorCallBack);

    },

    GetMeetingStatusByLocationId: function() {
        var meetingday = new Date();
        meetingday.setDate(meetingday.getDate() - glbRemoveMegtingsDays);
        var LastMeetingDate = supportTime(meetingday, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386

        boMeetings.RemoveTallyMeetingFromLocalDb(LastMeetingDate)
    },
    RemoveTallyMeetingFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from TallyMeeting where CountryID = '" + getCountryID() + "' AND MeetingId in(select MeetingOccID from MeetingInstance where LocationID ='" + glbLocationID + "' and MeetingStatus ='Close' and MeetingDate <'" + LastMeetingDate + "' )";
        //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.print("RemoveTallyMeetingFromLocalDb:=== " + whrCodition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallyMeetingFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallyMeetingFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallyMeetingFromLocalDb Data");
            boMeetings.RemoveTallySummaryFromLocalDb(LastMeetingDate);
        }
    },
    RemoveTallySummaryFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from TallySummary where CountryID = '" + getCountryID() + "' AND MeetingOccurrenceID  in(select MeetingOccID from MeetingInstance where LocationID ='" + glbLocationID + "' and MeetingStatus ='Close' and MeetingDate <'" + LastMeetingDate + "' )";
        //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.print("RemoveTallySummaryFromLocalDb:=== " + whrCodition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallySummaryFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallySummaryFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallySummaryFromLocalDb Data");
            boMeetings.RemoveTallyTimesheetFromLocalDb(LastMeetingDate);
        }
    },
    RemoveTallyTimesheetFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from TallyTimesheet where CountryID = '" + getCountryID() + "' AND MeetingId in(select MeetingOccID from MeetingInstance where LocationID ='" + glbLocationID + "' and MeetingStatus ='Close' and MeetingDate <'" + LastMeetingDate + "' )";
        kony.print("RemoveTallyTimesheetFromLocalDb:=== " + whrCodition);
        //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallyTimesheetFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallyTimesheetFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallyTimesheetFromLocalDb Data");
            boMeetings.RemoveSaleItemsFromLocalDb(LastMeetingDate);
        }
    },
    RemoveSaleItemsFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from SaleItems where CountryID = '" + getCountryID() + "' AND SaleTransactnId in (select SaleTransactnId from SaleDetails where MeetingOccurID in (select MeetingOccID from MeetingInstance where LocationID ='" + glbLocationID + "' and MeetingStatus ='Close' and MeetingDate <'" + LastMeetingDate + "' ))";
        //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.print("RemoveSaleItemsFromLocalDb:=== " + whrCodition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveSaleItemsFromLocalDbCallback, eventErrorCallBack);

        function RemoveSaleItemsFromLocalDbCallback(res) {
            kony.print("Remove RemoveSaleItemsFromLocalDb Data");
            boMeetings.RemoveSalePaymentsFromLocalDb(LastMeetingDate);
        }
    },
    RemoveSalePaymentsFromLocalDb: function(LastMeetingDate) {

        var whrCodition = "delete from SalePayments where CountryID = '" + getCountryID() + "' AND SaleTransactnId in (select SaleTransactnId from SaleDetails where MeetingOccurID in (select MeetingOccID from MeetingInstance where LocationID ='" + glbLocationID + "' and MeetingStatus ='Close' and MeetingDate <'" + LastMeetingDate + "' ))"
        kony.print("RemoveSalePaymentsFromLocalDb:=== " + whrCodition);
        //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveSalePaymentsFromLocalDbCallback, eventErrorCallBack);

        function RemoveSalePaymentsFromLocalDbCallback(res) {
            kony.print("Remove RemoveSalePaymentsFromLocalDbCallback Data");
            boMeetings.RemoveSaleDetailsFromLocalDb(LastMeetingDate);
        }
    },
    RemoveSaleDetailsFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from SaleDetails where CountryID = '" + getCountryID() + "' AND MeetingOccurID in (select MeetingOccID from MeetingInstance where LocationID ='" + glbLocationID + "' and MeetingStatus ='Close' and MeetingDate <'" + LastMeetingDate + "' )"
            //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.print("RemoveSaleDetailsFromLocalDb:=== " + whrCodition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack);

        function RemoveSaleDetailsFromLocalDbCallback(res) {
            boMeetings.RemoveMeetingInstanceFromLocalDb(LastMeetingDate);
            kony.print("Remove RemoveSaleDetailsFromLocalDbCallback Data");

        }
    },
    RemoveMeetingInstanceFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from MeetingInstance where CountryID = '" + getCountryID() + "' AND LocationID ='" + glbLocationID + "' and MeetingStatus ='Close' and MeetingDate <'" + LastMeetingDate + "'"
            //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.print("RemoveMeetingInstanceFromLocalDb:=== " + whrCodition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveMeetingInstanceFromLocalDbCallback, eventErrorCallBack);

        function RemoveMeetingInstanceFromLocalDbCallback(res) {
            kony.print("Remove RemoveMeetingInstanceFromLocalDb Data");
            boMeetings.RemoveTallyMeetingFeeFromLocalDb(LastMeetingDate);
        }
    },
    RemoveTallyMeetingFeeFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from TallyMeetingFee where CountryID = '" + getCountryID() + "' AND MeetingDate <'" + LastMeetingDate + "'"
            //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.print("RemoveTallyMeetingFeeFromLocalDb:=== " + whrCodition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallyMeetingFeeFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallyMeetingFeeFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallyMeetingFeeFromLocalDbCallback Data");
            boMeetings.RemoveTallySalesFromLocalDb(LastMeetingDate);
        }
    },
    RemoveTallySalesFromLocalDb: function(LastMeetingDate) {
        var whrCodition = "delete from TallySales where CountryID = '" + getCountryID() + "' AND MeetingDate <'" + LastMeetingDate + "'"
            //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.print("RemoveMeetingInstanceFromLocalDb:=== " + whrCodition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallySalesFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallySalesFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallySalesFromLocalDbCallback Data");
            //boMeetings.RemoveTallyMilestoneReportFromLocalDb(LastMeetingDate);
        }
    },
    getMeetingTypeIdForOpenHours: function(glbMeetingType) {
        //meetingTypeId = '"+glbOpenHousMeetingObj.meetingTypeId+"' 

        isSelMeetingOpenHours = (glbMeetingType == glbOpenHousMeetingObj.meetingTypeId) ? true : false;
        kony.print("------------------>> isSelMeetingOpenHours = " + isSelMeetingOpenHours);


        /*var whereClause = "where  meetingTypeId  = '"+ glbOpenHousMeetingObj.meetingTypeId+"' AND meetingTypeId= '"+glbMeetingType+"' ";
        kony.print("---->whereClause = "+whereClause);
        function getMeetingTypeIdForOpenHoursSuccessCallback(res){
        	kony.print(" --> success call back for open hours meeting  "+JSON.stringify(res));
        	if(res.length > 0){
        		isSelMeetingOpenHours = true;		
        		kony.print("-- isSelMeetingOpenHours = "+isSelMeetingOpenHours);	 
        	}
        	else
        	{
        		isSelMeetingOpenHours = false;
        		kony.print("-- isSelMeetingOpenHours = "+isSelMeetingOpenHours);
        	}
        }
         com.kony.WeightWatchers.LookUpTables.MeetingTypeLookup.find(whereClause, getMeetingTypeIdForOpenHoursSuccessCallback, eventErrorCallBack);
         */
    },
    getSeriesWeekLeft:function(callback){
    	var strWhere ="where ID= '"+glbMeetingNum+"'";
    	function getSeriesWeekLeftSuccessCallback(res){
    		callback.call(null,res);
    	}
    	DBMeetingsController.find(strWhere, getSeriesWeekLeftSuccessCallback, eventErrorCallBack);
    },
  getAndUpdateWeekNoForAtWorkMeeting:function(callback){
  	var strWhere = "where ID ='" + glbMeetingNum + "' LIMIT 0,1";
    
  		function getMeetingWeekNoSuccess(res) {
  			kony.print("getMeetingWeekNoSuccess res.length--" + res.length);
			kony.print("getMeetingWeekNoSuccess res--" + JSON.stringify(res));
  			if (res.length > 0) {
              	var weekNo = "0";
  				weekNo = kony.sync.getString(res[0].WeekNo);
                callback.call(null,weekNo);
        	}
		}
		DBMeetingsUpdateController.find(strWhere, getMeetingWeekNoSuccess, eventErrorCallBack);
	},
  getWeekNoForAtWorkMeetingClosed:function(meetingID,meetingDate, callback){
   // var strWhere = "select A.WeekNo as WeekNo from MeetingsUpdate A left join Meetings B on A.ID = B.ID and B.MeetingStatus = 'Close' where A.ID ='" + meetingID + "'  LIMIT 0,1";
    var strWhere = "Select  ifnull(M2.WeekNo,M1.SeriesCompMeetings)  as WeekNo from Meetings M1 left join MeetingsUpdate M2 on  "+
        "M1.ID = M2.ID  where M1.ID ='" + meetingID + "' and M1.MeetingDate like '%" + meetingDate + "%'";

    kony.print("getWeekNoForAtWorkMeetingClosedSuccess strWhere--" + strWhere);
    function getWeekNoForAtWorkMeetingClosedSuccess(res) {
      kony.print("getWeekNoForAtWorkMeetingClosedSuccess res.length--" + res.length);
      kony.print("getWeekNoForAtWorkMeetingClosedSuccess res--" + JSON.stringify(res));
      var weekNo = "0";

      if (res.length > 0) {
          weekNo = kony.sync.getString(res[0].WeekNo);
      }
      callback.call(null,weekNo);
    }
    kony.sync.single_select_execute(kony.sync.getDBName(), strWhere, null, getWeekNoForAtWorkMeetingClosedSuccess, eventErrorCallBack);
  },
getMeetingEndDate:function(callback){
  	var strWhere = "where ID ='" + glbMeetingNum + "' LIMIT 0,1";
    
  		function getMeetingEndDateSuccess(res) {
  			kony.print("getMeetingEndDateSuccess res.length--" + res.length);
			kony.print("getMeetingEndDateSuccess res--" + JSON.stringify(res));
  			if (res.length > 0) {
              	var MeetingEndDate = "";
  				MeetingEndDate = kony.sync.getString(res[0].EndDate);
                callback.call(null,MeetingEndDate);
        	}
		}
		DBMeetingsController.find(strWhere, getMeetingEndDateSuccess, eventErrorCallBack);
	},
  //**MEG-7233
  getWeekNoForSelectedAtWorkMeeting:function(meetingId,callback){
    var meetingId = meetingId;
  	var strWhere = "where ID ='" + meetingId + "' LIMIT 0,1";
    
  		function getWeekNoForSelectedAtWorkMeetingSuccess(res) {
  			kony.print("getWeekNoForSelectedAtWorkMeetingSuccess res.length--" + res.length);
			kony.print("getWeekNoForSelectedAtWorkMeetingSuccess res--" + JSON.stringify(res));
  			if (res.length > 0) {
              	var weekNo = "0";
  				weekNo = kony.sync.getString(res[0].WeekNo);
                callback.call(null,weekNo);
        	}
		}
		DBMeetingsUpdateController.find(strWhere, getWeekNoForSelectedAtWorkMeetingSuccess, eventErrorCallBack);
	}
};
    
