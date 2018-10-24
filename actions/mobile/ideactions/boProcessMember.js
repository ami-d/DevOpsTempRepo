var boProcessMember = {

    //MEG-141 - mobile application to display message in case member is loosing his/her weight rapidly.
    isMemberLoosingWeightRapidly: function(memberId, currentWeight) {
        currentWeight = parseInt(currentWeight);

        kony.print("Query WeightDetails Table");
        var limitCount = 3;
        var SQLQuery = "SELECT strftime('%W',weighindate) as WeekNumber,Weight from weighdetails where MemberID = '" + memberId + "' order by weighindate desc limit " + limitCount + ";";
        var isFlag = false;

        function getMemberLoosingWeightRapidlyCallBack(res) {

            kony.print("Fetch record from WeightDetails table");

            if (res != null && res.length == limitCount) {
                kony.print("Json resposn----" + res.length + "------>" + JSON.stringify(res));
                /*Calculate weeek difference for consicutive 2 weeks, if last or last to last month is December than difference should be 51 else 1*/
                if ((parseInt(kony.sync.getString(res[0].Weight)) - currentWeight) > 2) {
                    var weekNumber0 = parseInt(kony.sync.getString(res[0].WeekNumber));
                    var weekNumber1 = parseInt(kony.sync.getString(res[1].WeekNumber));
                    var weekNumber2 = parseInt(kony.sync.getString(res[2].WeekNumber));
                    var weight0 = parseInt(kony.sync.getString(res[0].Weight));
                    var weight1 = parseInt(kony.sync.getString(res[1].Weight));
                    var weight2 = parseInt(kony.sync.getString(res[2].Weight));

                    kony.print("weekNumber0: " + weekNumber0);
                    kony.print("weekNumber1: " + weekNumber1);
                    kony.print("weekNumber2: " + weekNumber2);
                    kony.print("weight0: " + weight0);
                    kony.print("weight1: " + weight1);
                    kony.print("weight2: " + weight2);
                    kony.print("currentWeight: " + currentWeight);

                    if (((weekNumber0 - weekNumber1) == 1 || (weekNumber0 - weekNumber1) == -51) && (weight1 - weight0) > 2 &&
                        ((weekNumber1 - weekNumber2) == 1 || (weekNumber1 - weekNumber2) == -51) && (weight2 - weight1) > 2) {
                        isFlag = true;
                        alertForMessages(kony.i18n.getLocalizedString("lblRapidWeightLoss"));
                    }
                }
            }
            return isFlag;
        }
        ExecuteSQL.ExecuteSQLQuery(SQLQuery, getMemberLoosingWeightRapidlyCallBack, eventErrorCallBack)
    },

    getValueMemberWeighInDataForNWI: function(memberId, callback) {
        var limitCount = 3;
        var SQLQuery = "SELECT NoWeighIn from weighdetails where MemberID = '" + memberId + "' AND (substr(WeighInDate,1,4)||substr(WeighInDate,6,2)||substr(WeighInDate,9,2) between strftime('%Y','now') || strftime('%m','now') || '01' and strftime('%Y','now') || strftime('%m','now') || strftime('%d','now'));";
        var isNWIAllowed = false;

        function getValueMemberWeighInDataForNWICallBack(res) {
            if (res != null) {
                kony.print("Json resposn----" + res.length + "------>" + JSON.stringify(res));
                if (res.length < limitCount) {
                    isNWIAllowed = true;
                } else {
                    //>=3 weigh-in records available in DB
                    if (res[res.length - 1].NoWeighIn == true && res[res.length - 2].NoWeighIn == true && res[res.length - 3].NoWeighIn == true) {
                        //Last 3 records are NWI - NWI not allowed 
                        isNWIAllowed = false;
                    } else {
                        //Last 3 records are not NWI - NWI allowed
                        isNWIAllowed = true;
                    }
                }
                callback.call(null, isNWIAllowed);
            }
        }
        ExecuteSQL.ExecuteSQLQuery(SQLQuery, getValueMemberWeighInDataForNWICallBack, eventErrorCallBack)
    },

    getLifetimeMemberWeighInDataForNWI: function(memberId, callback) {
        var SQLQuery = "SELECT NoWeighIn from weighdetails where MemberID = '" + memberId + "' AND (substr(WeighInDate,1,4)||substr(WeighInDate,6,2)||substr(WeighInDate,9,2) between strftime('%Y','now') || strftime('%m','now') || '01' and strftime('%Y','now') || strftime('%m','now') || strftime('%d','now'))" + ";";
        var isNWIAllowed = false;

        function getLifetimeMemberWeighInDataForNWICallBack(res) {
            if (res != null) {
                kony.print("Json resposn----" + res.length + "------>" + JSON.stringify(res));
                if (res.length > 0) {
                    //Not a first NWI for current month - Allow
                    isNWIAllowed = true;
                } else {
                    //First NWI for current month - Dont Allow
                    isNWIAllowed = false;
                }
                callback.call(null, isNWIAllowed);
            }
        }
        ExecuteSQL.ExecuteSQLQuery(SQLQuery, getLifetimeMemberWeighInDataForNWICallBack, eventErrorCallBack)
    },
    getMissedWeekDatabyMemberId: function(memberId, bindMissedWeekData) {
        function getMissedWeekDatabyMemberIdSuccessCallback(recordSet) {
            if (recordSet.length <= 0) {
                removeProgressView();
                kony.print("No transaction records found");
            } else {
                removeProgressView();
                kony.print("transaction found.... = " + recordSet.length);
                bindMissedWeekData(recordSet);
            }
        }
        displayProgressView();
        //var transactionSQLQuery="SELECT MemberID,strftime('%m/%d/%Y', max(WeighInDate)) as LastWeightInDate FROM WeighDetails where MemberID="+memberId;
        var transactionSQLQuery = "SELECT A.MemberID,strftime('%m/%d/%Y', max(A.WeighInDate)) as LastWeightInDate, B.ReedeemedPasses as ReedeemedPasses,B.MemberType FROM WeighDetails A ,MemberDetails B where B.CountryID = '" + getCountryID() + "' AND A.MemberID='" + memberId + "' and A.MemberID=B.MemberID";
        kony.print("getSalePaymentDatabySaleTransactionId transactionSQLQuery=" + transactionSQLQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getMissedWeekDatabyMemberIdSuccessCallback, eventErrorCallBack);
    },
    checkForMemberInMaintainace: function(memberId, checkMemberInMaintainenceSucessCallback) {
        kony.print("in glbMemberId memberId==" + memberId);

        var transactionSQLQuery = "select MaintenanceMode,TrackerStartDate,SubscriptnType from MemberDetails where CountryID = '" + getCountryID() + "' AND MemberID = '" + memberId + "'";

        function checkMemberISInMaintainenceCallback(res) {
            kony.print(" IN checkMemberInMaintainence==>>" + res.length + "-" + transactionSQLQuery); //+"-"+kony.sync.getString(res[0].MaintenanceMode));

            if (res.length > 0) {
                var v = res[0];
                if (kony.sync.getString(v.MaintenanceMode) != null)
                    glbIsInMaintance = kony.sync.getString(v.MaintenanceMode);

                kony.print("glbIsInMaintance" + glbIsInMaintance);

                if (glbIsInMaintance == "true" || glbIsInMaintance == "1" || glbIsInMaintance == 1 || glbIsInMaintance == true) {
                    boProcessMember.getNumberOfWeighInForConsecutive5Weeks(memberId, kony.sync.getString(v.TrackerStartDate), kony.sync.getString(v.SubscriptnType), checkMemberInMaintainenceSucessCallback);
                } else {
                    checkMemberInMaintainenceSucessCallback();
                }
            }
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, checkMemberISInMaintainenceCallback, eventErrorCallBack);

    },
    getNumberOfWeighInForConsecutive5Weeks: function(memberId, TrackerStartDate, SubscriptnType, checkMemberInMaintainenceSucessCallback) {
        //alert("1182: Enters getNumberOfWeighIn5Weeks");
        var timeArray = TrackerStartDate.split("T");
        var WeighDateFormatted = formattedDate(timeArray[0]);
        var afterMaintanceWeek = getSunday(new Date(WeighDateFormatted));
        kony.print("1182 : afterMaintanceWeek=" + afterMaintanceWeek);

        var week5Date = calculateWeeks(new Date(afterMaintanceWeek), 5);
        kony.print("1182 : week5Date=" + week5Date);
        var tempdate = week5Date;
        week5Date = supportTime(new Date(week5Date), "", "yyyy-mm-ddTHH:NN:SS");
        afterMaintanceWeek = supportTime(new Date(afterMaintanceWeek), "", "yyyy-mm-ddTHH:NN:SS");
        var d1 = new Date(tempdate);
        var d2 = new Date();
        kony.print("1182: Calculate Difference Between two dates d1=" + d1 + " d2=" + d2);
        //Is todays date is greater than or equal to five weeks
        if (calculateDateDifference(d1, d2) >= 0) {
            kony.print("1182: CurrentMemberValues.subscriptionType=" + SubscriptnType);

            if (SubscriptnType == "MonthlyPass") {
                isConsicutive5WeeksCompleted = 1;
                kony.print("isConsicutive5WeeksCompleted: " + isConsicutive5WeeksCompleted);
                checkMemberInMaintainenceSucessCallback();
            } else {


                var whereClause = "where WeighInDate BETWEEN '" + afterMaintanceWeek + "' AND '" + week5Date + "' AND WeighInDate != '" + week5Date + "' AND (MemberID = '" + memberId + "')";

                kony.print("1182: get weight whereClause=" + whereClause);

                function getNumberOfWeighIn5WeeksSuccessCallback(res) {
                    //Check Number of times member weight registered in 5 weeks consecutive >= 1
                    if (res.length >= 1) {
                        kony.print("1182 : res>1 : " + JSON.stringify(res));
                        //Member Weighs In
                        //Get Latest Weigh In
                        isConsicutive5WeeksCompleted = 1;
                        kony.print("isConsicutive5WeeksCompleted: " + isConsicutive5WeeksCompleted);
                    }
                    checkMemberInMaintainenceSucessCallback();
                }
                DBWeighDetailsController.find(whereClause, getNumberOfWeighIn5WeeksSuccessCallback, eventErrorCallBack);
            }
        } else {
            //Five weeks not passed still -- Wait -- 
            checkMemberInMaintainenceSucessCallback.call(null);
        }
    },
    //MEG-3919
    getCurrentMonthGoalReachedForMember: function(memberID, callback) {
        kony.print("::getCurrentMonthGoalReachedForMember:: memberID=" + memberID);
        var whereClause = '';
        var date = new Date(),
            y = date.getFullYear(),
            m = date.getMonth();
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        firstDay = supportTime(new Date(firstDay), "", "yyyy-mm-ddTHH:NN:SS");
        lastDay = supportTime(new Date(lastDay), "", "yyyy-mm-ddTHH:NN:SS");
        //Find all weights of this month
        var whereClause = "where WeighInDate BETWEEN '" + firstDay + "' AND '" + lastDay + "' AND MemberID = '" + memberID + "'";
        kony.print("::getCurrentMonthGoalReachedForMember:: whereClause=" + whereClause);

        function getCurrentMonthWeighDetailsForMemberSuccessCallback(res) {
            kony.print("::DJP::getCurrentMonthWeighDetailsForMemberSuccessCallback = " + JSON.stringify(res));
            kony.print("::DJP::gblGoalWeightPM=" + gblGoalWeightPM);
            if (res.length > 0) {
                var result = _.find(res, function(w) {
                    kony.print(kony.sync.getString(w.Weight));
                    return parseFloat(kony.sync.getString(w.Weight)) <= (parseFloat(gblGoalWeightPM) + 2);
                });
                //If any of the weight record <= (GoalWeight+2) -> Means user has achieved goal in this month, so FREE LIFE
                //else PAID LIFE
                if (result) {
                    callback.call(null, true);
                } else {
                    boProcessMember.checkMissedWeekDataForLifetime(firstDay, lastDay, callback);
                }
            } else {
                boProcessMember.checkMissedWeekDataForLifetime(firstDay, lastDay, callback);
            }
        }
        DBWeighDetailsController.find(whereClause, getCurrentMonthWeighDetailsForMemberSuccessCallback, eventErrorCallBack);
    },
    checkMissedWeekDataForLifetime: function(firstDay, lastDay, callback) {
        kony.print("::MISSED LIFETIME::");
        if (MissedWeekWeightData && MissedWeekWeightData.length > 0) {

            var data = _.filter(MissedWeekWeightData, function(w) {
                return (new Date(w.WeighInDate).setHours(0, 0, 0) >= new Date(firstDay).setHours(0, 0, 0) && new Date(w.WeighInDate).setHours(0, 0, 0) <= new Date(lastDay).setHours(0, 0, 0));
            });
            kony.print("::MISSED LIFETIME:: data= " + JSON.stringify(data));
            if (data && data.length > 0) {
                //Find any one weight that has achieved <(goalweight+2)  
                var goals = _.find(data, function(w) {
                    return parseFloat(w.Weight) <= (parseFloat(gblGoalWeightPM) + 2);
                })
                kony.print("::MISSED LIFETIME:: goals= " + JSON.stringify(goals));
                //Return Object
                if (goals) {
                    callback.call(null, true);
                } else {
                    callback.call(null, false);
                }
            } else {
                callback.call(null, false);
            }
        } else {
            callback.call(null, false);
        }
    },
    checkCurrentAndPrevMonthWeighInMissedWeeksForLTMember:function(callback){
    	var date = new Date(),
            y = date.getFullYear(),
            m = date.getMonth()-1;
           
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date();
        kony.print(firstDay+"__Before___"+lastDay);
        
        firstDay = supportTime(new Date(firstDay), "", "yyyy-mm-ddTHH:NN:SS");
        lastDay = supportTime(new Date(lastDay), "", "yyyy-mm-ddTHH:NN:SS");
        
        kony.print(firstDay+"_____"+lastDay);
        
    	if (MissedWeekWeightData && MissedWeekWeightData.length > 0) {
    		var data = _.filter(MissedWeekWeightData, function(w) {
                return (new Date(w.WeighInDate).setHours(0, 0, 0) >= new Date(firstDay).setHours(0, 0, 0) && new Date(w.WeighInDate).setHours(0, 0, 0) <= new Date(lastDay).setHours(0, 0, 0));
            });
            if (data && data.length > 0) {
            	callback.call(null,true);
            }
            else{
	            boProcessMember.checkCurrentAndPrevMonthWeighForLTMember(firstDay,lastDay,callback);
            }
    	}
    	else if (IsAddIndividual == FlowForScreens.AddIndividual){
    		var startdate = frmAddIndividulaMember.lblStartDateInfo.text;
    		if(checkValidString(startdate) && (new Date(startdate).setHours(0, 0, 0) >= new Date(firstDay).setHours(0, 0, 0) && new Date(startdate).setHours(0, 0, 0) <= new Date(lastDay).setHours(0, 0, 0))){
    			callback.call(null, true);
    		}
    		else{
    			callback.call(null, false);
    		}
    	}
    	else{
    		boProcessMember.checkCurrentAndPrevMonthWeighForLTMember(firstDay,lastDay,callback);
    	}
    },
    checkCurrentAndPrevMonthWeighForLTMember:function(firstDay,lastDay,callback){
    	var whereClause = '';
        var whereClause = "where WeighInDate BETWEEN '" + firstDay + "' AND '" + lastDay + "' AND MemberID = '" + glbMemberId + "'";
        function checkCurrentAndPrevMonthWeighForLTMemberSuccessCallback (res) {
    		if (res.length > 0) {
                if (res) {
                    callback.call(null, true);
                } else {
                    callback.call(null,false);
                }
            }
            else{
            	callback.call(null,false);	
            }
		}
        
        DBWeighDetailsController.find(whereClause, checkCurrentAndPrevMonthWeighForLTMemberSuccessCallback, eventErrorCallBack);
    }
}
