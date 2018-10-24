var milestonelookupRes = [];
var milestoneDataObj = [];
var boMemberMilestone = {

    getEligibleMilestone: function(memberId) {
        milestoneRes = [];
        glbMilestoneName = "";
        var strWhere = "";
        //strWhere = "where UserID = "+ memberId+" and IsAchieved <> '0'";
        strWhere = "where MemberID like '" + memberId + "'";
        kony.print("getEligibleMilestone:=== " + strWhere);

        function getEligibleMilestoneSuccessCallback(res) {
            kony.print("getEligibleMilestone Response:=== " + JSON.stringify(res));
            boMemberMilestone.getEligibleMilestoneOffline(res);
        }

        //displayProgressView();
        DBMilestoneEligibleController.find(strWhere, getEligibleMilestoneSuccessCallback, eventErrorCallBack);
    },

    getEligibleMilestoneOffline: function(response) {
        kony.print("getEligibleMilestoneOffline:=== " + JSON.stringify(response));

        if (response.length > 0) {

            var strmilestoneDesc = "";
            var milestoneID = "";
            var targetWeight = "";

            for (var i in response) {
                var vData = response[i];
                milestoneID = kony.sync.getString(vData.MilestoneID);
                kony.print("vData:=== " + JSON.stringify(vData));
                boMemberMilestone.getMilestoneLookUpData(milestoneID, vData);
            }
        }
    },

    getMilestoneLookUpData: function(milestoneID, vDataObj) {
        var strWhere = "";
        strWhere = "where MilestoneID = " + milestoneID;
        kony.print("getMilestoneLookUpData:=== " + strWhere);

        function getMilestoneLookUpDataSuccessCallback(res) {

            boMemberMilestone.getMilestoneLookUpDataOffline(res, vDataObj);
        }

        //displayProgressView();
        DBMilestoneLookUpController.find(strWhere, getMilestoneLookUpDataSuccessCallback, eventErrorCallBack);

    },

    getMilestoneLookUpDataOffline: function(response, vDataObj) {
        kony.print("getMilestoneLookUpDataOffline:=== " + JSON.stringify(response));
        if (response.length > 0) {
            for (var i in response) {
                var vData = response[i];
                kony.print("vData:=== " + JSON.stringify(vData));
                milestoneName = kony.sync.getString(vData.MilestoneName);
                milestoneDesc = kony.sync.getString(vData.MilestoneDesc);

                milestoneRes.push({
                    "milestoneID": kony.sync.getString(vDataObj.MilestoneID),
                    "targetWeight": kony.sync.getString(vDataObj.TargetWeight),
                    "strmilestoneName": milestoneName,
                    "strmilestoneDesc": milestoneDesc
                });
            }
        }

    },
    insertMileStoneAchived: function(createObj) {
        if (createObj.length > 0) {
        	
        	_.each(createObj,function(obj,i){
        			kony.print("::---::"+i);
        			var p = i;
        			DBMilestoneAchievedController.create(obj, insertMileStoneAchivedCallback, eventErrorCallBack);
        			
	        		function insertMileStoneAchivedCallback() {
	        			kony.print("::PC::Inside the callback"+p);
	        			kony.print("::PC::Inside the callback"+(p == createObj.length-1));
	        			kony.print("::ob::"+(createObj.length-1))
		            	if(p == (createObj.length-1)){
		            		kony.print("::PC::IN::"+p);
			                //alert("inside the callback");
			                milestonelookupRes = [];
			                milestoneRes = [];
			                //boMemberMilestone.getEligibleMilestone(1);
			                kony.print(getMessageTemplate("milestone added", "MilestoneAchieved"), "info")
			                mileStoneObj = [];
			
			                kony.print("::ELT::" + JSON.stringify(eligibleMilestonesArrObj));
			
			                if (eligibleMilestonesArrObj.length > 0) {
			                    for (var i in eligibleMilestonesArrObj) {
			                        eligibleMilestonesArrObj[i]["MemberID"] = glbMemberId;
			                    }
			                    boMemberMilestone.insertEligibleMilestone();
			                } else {
			                    kony.print(":: Inside delete statement...");
			                    var AchievedMilestoneList = [];
			
			                    _.each(createObj, function(m) {
			                        if (m.MilestoneID != "31") {
			                            AchievedMilestoneList.push(m.MilestoneID);
			                        }
			                    })
			
			                    if (AchievedMilestoneList.length > 0) {
			                        kony.print("AchievedMilestoneList--- " + JSON.stringify(AchievedMilestoneList));
			                        boMemberMilestone.deleteAchievedFromEligbleMilstone(AchievedMilestoneList);
			                    }
			                }
		                }
	            	}
        		
        	})
        	
        	kony.print("::PK::createObj::"+JSON.stringify(createObj));
            //alert("Inside main");
            
            //createObj.DeviceID = gblDeviceID;
            //		createObj.AccessToken = glbSPAuthToken;
            //		createObj.SPID = glbEmployeeId;
            //		createObj.HeaderDate = glbHeaderDate;

            //DBMilestoneAchievedController.createAll(createObj, insertMileStoneAchivedCallback, eventErrorCallBack)
        }
    },

    getMilestoneNameForWeightHistory: function(milestoneID, mileDate) {
        var whrClause = "where MilestoneID = " + milestoneID;

        function getMilestoneNameForWeightHistorySuccessCallback(res) {
            if (res.length > 0) {
                kony.print("Res length in getMilestoneNameForWeightHistorySuccessCallback " + res.length);
                for (i in res) {
                    var v = res[i];
                    var b = {};
                    b.mName = kony.sync.getString(v.MilestoneName);
                    b.mDate = mileDate;
                    milestoneDataObj.push(b);
                }
            }
            kony.print("milestoneDataObj length is : " + milestoneDataObj.length);
        }
        kony.print("Where clause in getMilestoneNameForWeightHistory : " + whrClause);
        DBMilestoneLookUpController.find(whrClause, getMilestoneNameForWeightHistorySuccessCallback, eventErrorCallBack);

    },

    getAchievedMilestonesForMember: function(memberId, status, MemberWeightAndMilestoneList, isVoided) {
        try {
            milestoneDataObj = [];
            var whrClause = "where MemberID = '" + memberId + "'";

            function getAchievedMilestonesForMemberSuceessCallback(res) {
                kony.print("2716: if condition: res.length = " + res.length);
                if (res.length > 0) {
                    for (var i in res) {
                        kony.print("2716: if condition: i = " + i + ">>>>>>>row= " + res[i]);
                        var v = res[i];
                        var b = {};
                        var mID = kony.sync.getString(v.MilestoneID);
                        //	var mDate = kony.sync.getString(v.ReachedDate);

                        b.mName = checkUndefined(MiletoneLookupTable[parseInt(mID)]);
                        //b.mDate = kony.sync.getString(v.ReachedDate);

                        // MEG-2716 resolution where we may have put in member weight history today and their ReachedDate will be as of today but the milestone should be displayed for weigh in date 
                        b.mDate = kony.sync.getString(v.WeighInDate);
                        b.mID = parseInt(mID);
                        milestoneDataObj.push(b);
                        //					boMemberMilestone.getMilestoneNameForWeightHistory(mID, mDate);
                    }
                    boMemberProfile.BindWeightDetailsForProfileView(memberWeightList);
                } else if (!isNaN(memberId) && (!isVoided || isVoided != "true")) { // Dileep - start

                    var GetMemberMilestoneDetails_inputparam = {};
                    GetMemberMilestoneDetails_inputparam["serviceID"] = Services.MemberMilestone;
                    GetMemberMilestoneDetails_inputparam["deviceID"] = gblDeviceID;
                    GetMemberMilestoneDetails_inputparam["accessToken"] = glbSPAuthToken;
                    GetMemberMilestoneDetails_inputparam["SPID"] = glbEmployeeId;
                    GetMemberMilestoneDetails_inputparam["MemberID"] = memberId;
                    GetMemberMilestoneDetails_inputparam["HeaderDate"] = "";
                    GetMemberMilestoneDetails_inputparam["Source"] = gblSourceVal;
                    GetMemberMilestoneDetails_inputparam["httpheaders"] = {};
                    GetMemberMilestoneDetails_inputparam["httpconfigs"] = {};
                    kony.print("GetMemberMilestoneDetails_inputparam:  " + JSON.stringify(GetMemberMilestoneDetails_inputparam))
                    GetMemberMilestoneDetails = Network.makeServiceCall(GetMemberMilestoneDetails_inputparam, boMemberMilestone.getMemberMilestoneDetailsWSCallback, true);

                } // Dileep - end
                else {
                    kony.print(" no milestone in local db. no service call ");
                    boMemberProfile.BindWeightDetailsForProfileView(memberWeightList);
                }
            }

            if (MemberWeightAndMilestoneList == null) {
                kony.print("2716: else condition: MemberWeightAndMilestoneList is null ");
                kony.print("where clause is getAchievedMilestonesForMember : " + whrClause);
                DBMilestoneAchievedController.find(whrClause, getAchievedMilestonesForMemberSuceessCallback, eventErrorCallBack);
            } else {
                kony.print("Dileep --> Calling callMemberWeightAndMilestone = " + memberId);
                boMemberMilestone.getMemberMilestoneDetailsWSCallback(status, MemberWeightAndMilestoneList);
            }

        } catch (e) {
            GlobalException(e);
            boMemberProfile.BindWeightDetailsForProfileView(memberWeightList);
            removeProgressView();
        }
    },

    getMemberMilestoneDetailsWSCallback: function(status, GetMemberMilestoneDetails) {
        try {
            var GetMemberMileStoneTemp = [];
            var GetMemberEligibleMilestoneTemp = [];
            if (status == 400) {
                kony.print("getMemberMilestoneDetailsWSCallback --> Result of WS ===" + JSON.stringify(GetMemberMilestoneDetails))
                if (GetMemberMilestoneDetails["AchievedMilestones"] && GetMemberMilestoneDetails["AchievedMilestones"].length > 0) {
                    kony.print("Result of WS Achieved Milestones ===" + JSON.stringify(GetMemberMilestoneDetails["AchievedMilestones"]))
                    for (var milestoneIterator = 0; milestoneIterator < GetMemberMilestoneDetails["AchievedMilestones"].length; milestoneIterator++) {
                        if (GetMemberMilestoneDetails != null && GetMemberMilestoneDetails != undefined) {
                            var b = {};
                            var tempObj = {};
                            b.mName = checkUndefined(MiletoneLookupTable[parseInt(GetMemberMilestoneDetails["AchievedMilestones"][milestoneIterator]["AchMilestoneID"])]);
                            b.mDate = GetMemberMilestoneDetails["AchievedMilestones"][milestoneIterator]["AchWeighInDate"]; //Changed to Weigh in date for MEG - 2716
                            milestoneDataObj.push(b);
                            tempObj["MilestoneID"] = GetMemberMilestoneDetails["AchievedMilestones"][milestoneIterator]["AchMilestoneID"];
                            tempObj["ReachedDate"] = GetMemberMilestoneDetails["AchievedMilestones"][milestoneIterator]["AchReachedDate"];
                            tempObj["MemberID"] = GetMemberMilestoneDetails["AchievedMilestones"][milestoneIterator]["AchMemberID"];
                            tempObj["WeighInDate"] = GetMemberMilestoneDetails["AchievedMilestones"][milestoneIterator]["AchWeighInDate"];
                            // Dileep Chejerla - MEG-2716
                            tempObj["MemberMilestoneID"] = GetMemberMilestoneDetails["AchievedMilestones"][milestoneIterator]["MemberMilestoneID"];
                            GetMemberMileStoneTemp.push(tempObj);
                        }
                    }
                    kony.print("GetMemberMileStoneTemp===" + JSON.stringify(GetMemberMileStoneTemp));
                    if (GetMemberMileStoneTemp.length > 0) {
                    	_.each(GetMemberMileStoneTemp,function(obj,i){
                    		var p = i;
                    		DBMilestoneAchievedController.create(obj,insertMilestoneSuccessCallback,eventErrorCallBack,false)
                    		function insertMilestoneSuccessCallback(){
                    			if(p == (GetMemberMileStoneTemp.length-1)){
                    				boMemberMilestone.milestoneAchievedInsertSuccessCallback();
                    			}
                    		}
                    	})
                    
                        //DBMilestoneAchievedController.createAll(GetMemberMileStoneTemp, boMemberMilestone.milestoneAchievedInsertSuccessCallback, eventErrorCallBack, false);
                    }
                }
                if (GetMemberMilestoneDetails["EligibleMilestones"] && GetMemberMilestoneDetails["EligibleMilestones"].length > 0) {
                    for (var eligibleMilestoneIterator = 0; eligibleMilestoneIterator < GetMemberMilestoneDetails["EligibleMilestones"].length; eligibleMilestoneIterator++) {
                        if (GetMemberMilestoneDetails != null && GetMemberMilestoneDetails != undefined) {
                            var tmpObj1 = {};

                            tmpObj1["MilestoneID"] = GetMemberMilestoneDetails["EligibleMilestones"][eligibleMilestoneIterator]["ElgID"];
                            tmpObj1["TargetWeight"] = GetMemberMilestoneDetails["EligibleMilestones"][eligibleMilestoneIterator]["ElgTargetWeight"];
                            tmpObj1["MemberID"] = GetMemberMilestoneDetails["EligibleMilestones"][eligibleMilestoneIterator]["ElgMemberID"];
                            GetMemberEligibleMilestoneTemp.push(tmpObj1);
                        }
                    }
                    if (GetMemberEligibleMilestoneTemp.length > 0) {
                        DBMilestoneEligibleController.createAll(GetMemberEligibleMilestoneTemp, boMemberMilestone.milestoneEligibleInsertSuccessCallback, eventErrorCallBack, false);
                    }
                }
                boMemberProfile.BindWeightDetailsForProfileView(memberWeightList);
            }
        } catch (e) {
            boMemberProfile.BindWeightDetailsForProfileView(memberWeightList);
            GlobalException(e);
        }
    },

    milestoneAchievedInsertSuccessCallback: function(res) {
        kony.print("Achieved Milestone Insert Success");
    },

    milestoneEligibleInsertSuccessCallback: function(res) {
        kony.print("Eligible Milestone Insert Success");
    },

    getMasterMilestones: function(callback, weightData, startwt, goalwt, isFromBatchAdd, doCreateEligble) {
        var strWhere = "where 1=1";

        function getMasterMilestonesSuccessCallback(res) {
            callback.call(null, res, weightData, startwt, goalwt, isFromBatchAdd, doCreateEligble);
        }

        DBMilestoneLookUpController.find(strWhere, getMasterMilestonesSuccessCallback, eventErrorCallBack);
    },
    insertEligibleMilestone: function() {
        if (eligibleMilestonesArrObj.length > 0) {
            kony.print("eligibleMilestonesArrObj----" + JSON.stringify(eligibleMilestonesArrObj));

            function insertEligibleMilestoneCallback() {

                kony.print(getMessageTemplate("Eligiblemilestone added", "MilestoneEligible"), "info")
                eligibleMilestonesArrObj = [];
            }
            DBMilestoneEligibleController.createAll(eligibleMilestonesArrObj, insertEligibleMilestoneCallback, eventErrorCallBack, false)

        }
    },
    getEligibleMilestoneByMemberId: function(callback, weighDataArr, startwt, goalwt, lastwt) {
        var sql = "select me.*,ml.MilestoneName from MilestoneEligible me,MilestoneLookUp ml on me.MilestoneID = ml.MilestoneID and ml.CountryID = '" + getCountryID() + "' where me.MemberID like '" + glbMemberId + "'";
        kony.print("::PK: sql---" + sql);

        function getEligibleMilestoneByMemberIdCallback(res) {
            //kony.print("::PK: Res---"+JSON.stringify(res));
            //if(res.length > 0){ //Commented for MEG-4763
            callback.call(null, res, weighDataArr, startwt, goalwt, false, false, lastwt);
            //}
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), sql, null, getEligibleMilestoneByMemberIdCallback, eventErrorCallBack);
    },
    deleteAchievedFromEligbleMilstone: function(achievedArr) {

        var sql = "delete from MilestoneEligible where CountryID = '" + getCountryID() + "' AND MilestoneID IN(" + achievedArr.toString() + ") and MemberID like '" + glbMemberId + "'";
        kony.print("SQL for delete --- " + sql);

        function deleteAchievedFromEligbleMilstoneCallback() {
            kony.print("deleted succesfully");
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), sql, null, deleteAchievedFromEligbleMilstoneCallback, eventErrorCallBack);
    },
    checkLifeTimeEligibility: function(memberId, callback) {

        var sql = "select w.WeighInDate,m.GoalWeight from MemberDetails m,WeighDetails w on m.MemberID = w.MemberID and m.CountryID = '" + getCountryID() + "' where w.Weight <= m.GoalWeight and w.MemberID ='" + memberId + "' order by w.WeighInDate LIMIT 0,1";

        kony.print(":Sql:--" + sql);

        function checkLifeTimeEligibilitySuccessCallback(res) {

            kony.print(":res1:--" + JSON.stringify(res));

            if (res.length > 0) {
                var v = res[0];
                boMemberMilestone.checkWeightDetailsForLifetimeMemberEligibility(memberId, kony.sync.getString(v.GoalWeight), kony.sync.getString(v.WeighInDate), callback);
            } else {
                callback.call(null);
            }
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), sql, null, checkLifeTimeEligibilitySuccessCallback, eventErrorCallBack);
    },
    checkWeightDetailsForLifetimeMemberEligibility: function(memberId, goalWeight, goalAchDate, callback) {

        var whereClause = " where Weight BETWEEN '60' AND '" + (parseInt(goalWeight) + 2) + "' AND MemberID = '" + memberId + "' ORDER BY WeighInDate DESC";

        kony.print(":whereClause:--" + whereClause);

        function checkWeightDetailsForLifetimeMemberEligibilitySuccessCallback(res) {

            kony.print(":res2:--" + JSON.stringify(res));

            if (res.length > 0) {

                isMaintainace = true;

            } else {}
            if (isMaintainace)
                boMemberMilestone.checkWeightEntriesTillSixthWeek(memberId, goalAchDate, goalWeight, callback);
            else {
                callback.call(null);
            }
        }
        DBWeighDetailsController.find(whereClause, checkWeightDetailsForLifetimeMemberEligibilitySuccessCallback, eventErrorCallBack);
    },

    checkWeightEntriesTillSixthWeek: function(memberId, goalAchDate, goalWeight, callback) {

        
        var WeighDateFormatted = formattedDate(goalAchDate);
        var week6Date = calculateWeeks(new Date(WeighDateFormatted), 6);
        week6Date = supportTime(new Date(week6Date), "", "yyyy-mm-ddTHH:NN:SS");

        var whereClause = "where WeighInDate BETWEEN '" + goalAchDate + "' AND '" + week6Date + "' AND MemberID = '" + memberId + "'";

        kony.print(":whereClause2:--" + whereClause);

        function checkWeightEntriesTillSixthWeekSuccessCallback(res) {

            kony.print(":res3:--" + JSON.stringify(res));

            if (res.length >= 2) {
                boMemberMilestone.checkWeightEntriesAfterSixthWeek(memberId, week6Date, goalWeight, callback)
            } else {
                kony.print("Member not eligible for lifetime");
                isMaintainace = false;
                boMemberMilestone.updateEditProfileIsMemberInMaintainence(memberId, isMaintainace, callback);
            }
        }

        DBWeighDetailsController.find(whereClause, checkWeightEntriesTillSixthWeekSuccessCallback, eventErrorCallBack);
    },

    checkWeightEntriesAfterSixthWeek: function(memberId, dateParam, goalWeight, callback) {
        
        var WeighDateFormatted = formattedDate(dateParam);
        var week12Date = calculateWeeks(new Date(WeighDateFormatted), 6);

        week12Date = supportTime(new Date(week12Date), "", "yyyy-mm-ddTHH:NN:SS");

        var whereClause = "where WeighInDate BETWEEN '" + dateParam + "' AND '" + week12Date + "' AND  Weight BETWEEN '60' AND '" + (parseInt(goalWeight) + 2) + "' AND MemberID = '" + memberId + "'";

        kony.print(":whereClause3:--" + whereClause);

        function checkWeightEntriesAfterSixthWeekSuccessCallback(res) {

            kony.print(":res4:--" + JSON.stringify(res));

            if (res.length >= 1) {
                isEligibleForLifetime = true;
                callback.call(null)
            } else {
                isMaintainace = false;
                boMemberMilestone.updateEditProfileIsMemberInMaintainence(memberId, isMaintainace, callback);
            }
        }
        DBWeighDetailsController.find(whereClause, checkWeightEntriesAfterSixthWeekSuccessCallback, eventErrorCallBack);
    },

    updateEditProfileIsMemberInMaintainence: function(memberId, isMaintainace, callback) {

        var dataObj = {};
        dataObj["IsMemberInMtns"] = isMaintainace;

        //Change to 1 - if member mtngoccrid other than present mtngoccrid
        dataObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum || IsFromPM == FlowForScreens.ProcessMember) ? glbMeetingNum : 1;

        var whereClause = "where MemberID = '" + memberId + "'";

        function updateEditProfileIsMemberInMaintainenceCallback() {
            callback.call(null)
            kony.print(getMessageTemplate("Update IsMemberInMaintainence", "MemberDetails"), "info")
        }

        DBMemberDetailsController.update(whereClause, dataObj, updateEditProfileIsMemberInMaintainenceCallback, eventErrorCallBack);

    }

};
