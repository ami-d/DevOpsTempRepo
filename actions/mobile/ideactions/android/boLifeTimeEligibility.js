var boLifeTimeEligibility = {
    checkEligibilityFlow: function(currentWeight) {
        //Check if member is lifetime
        boLifeTimeEligibility.getCurrentMemberDetails(currentWeight);
    },
    getCurrentMemberDetails: function(currentWeight) {
        kony.print("in getCurrentMemberDetails");
        var whereClause = "where MemberID = '" + glbMemberId + "'";
        kony.print("1179 : whereClause = " + whereClause);

        function getMembersDetailsForEligibility(res) {
            kony.print("1179 : res = " + JSON.stringify(res));
            if (res.length > 0) {
                CurrentMemberValues.memberId = glbMemberId;
                CurrentMemberValues.currentWeight = currentWeight;
                CurrentMemberValues.memberType = res[0].MemberType;
                CurrentMemberValues.goalWeight = res[0].GoalWeight;
                CurrentMemberValues.memberStatus = res[0].MemberStatus;
                CurrentMemberValues.startWeight = res[0].StartWeight;
                CurrentMemberValues.isMaintainace = res[0].IsMemberInMtns;
                CurrentMemberValues.isLifeTime = false;
                CurrentMemberValues.goalAchDate = res[0].GoalAchDate;
                CurrentMemberValues.subscriptionType = res[0].SubscriptnType;
                CurrentMemberValues.TrackerID = res[0].TrackerID;
                CurrentMemberValues.MaintenanceMode = res[0].MaintenanceMode;
                CurrentMemberValues.TrackerStartDate = res[0].TrackerStartDate;
                CurrentMemberValues.FailedDate = res[0].FailedDate;
                CurrentMemberValues.Eligible = res[0].Eligible;
                CurrentMemberValues.EligibleDate = res[0].EligibleDate;
                CurrentMemberValues.WeightCountMet = res[0].WeightCountMet;
                CurrentMemberValues.StartDate = res[0].StartDate;
                CurrentMemberValues.StartWeight = res[0].StartWeight;
                CurrentMemberValues.IsFreshStart = res[0].IsFreshStart;
                CurrentMemberValues.RefreshDate = res[0].RefreshDate;
                CurrentMemberValues.PaidLastFee = "false";
                glbLifetimeEligibility = true;
                if (checkValidString(CurrentMemberValues.goalWeight)) {
                    //Goal Weight Exists for that member
                    boLifeTimeEligibility.checkMemberType();
                }
                kony.print("------> CurrentMemberValues object = " + JSON.stringify(CurrentMemberValues));
            }
        }
        DBMemberDetailsController.find(whereClause, getMembersDetailsForEligibility, eventErrorCallBack);
    },
    checkMemberType: function() {
        kony.print("1179: in checkMemberType");
        if (CurrentMemberValues.memberType == MemberValueEnum[7]) {
            kony.print("===Lifetime member====");
            //Skip the Flow
            glbLifetimeEligibility = false;
        } else if (CurrentMemberValues.memberType == MemberValueEnum[1]) {
            //If value Member
            kony.print("1179: Value Member");
            CurrentMemberValues.Eligible = 'false';
            //If member is already in maintainence mode dont check goal weight and continue with 5 weeks calculation
            if ((CurrentMemberValues.MaintenanceMode == 'true' || CurrentMemberValues.MaintenanceMode == true)) {
                if (checkValidString(CurrentMemberValues.TrackerStartDate) && CurrentMemberValues.TrackerStartDate != "0001-01-01T00:00:00" && (CurrentMemberValues.MaintenanceMode == 'true' || CurrentMemberValues.MaintenanceMode == true)) {
                    kony.print("1179 : Already in maintaninence so go direct");
                    //Check Number of times member weight registered in 5 weeks consecutive >= 1
                    boLifeTimeEligibility.getNumberOfWeighIn5Weeks();
                }
            } else {
                boLifeTimeEligibility.checkGoalWeightOfMember();
            }
        }
    },
    checkGoalWeightOfMember: function() {
        //Check if member is already in maintainance or will enter in maintainance
        if (CurrentMemberValues.currentWeight <= CurrentMemberValues.goalWeight) {
            kony.print("1179: checkGoalWeightOfMember && CurrentMemberValues.MaintenanceMode=" + CurrentMemberValues.MaintenanceMode);
            //If Old value of maintainace was false - > make it true and this is the first time - first record - no need to go ahead
            //Assumption now GoalAchd Date will be inserted in database
            if (CurrentMemberValues.MaintenanceMode == 'false' || CurrentMemberValues.MaintenanceMode == false) {
                CurrentMemberValues.Eligible = 'false';
                CurrentMemberValues.MaintenanceMode = 'true';
                CurrentMemberValues.TrackerStartDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            } else if (checkValidString(CurrentMemberValues.TrackerStartDate) && CurrentMemberValues.TrackerStartDate != "0001-01-01T00:00:00" && (CurrentMemberValues.MaintenanceMode == 'true' || CurrentMemberValues.MaintenanceMode == true)) {
                //Check Number of times member weight registered in 5 weeks consecutive >= 1
                kony.print("1179: already in maintainance and now calculate 5 week");
                boLifeTimeEligibility.getNumberOfWeighIn5Weeks();
            }
        } else {
            boLifeTimeEligibility.failedMaintainance();
        }
    },
    getNumberOfWeighIn5Weeks: function() {
        var WeighDateFormatted = formattedDate(CurrentMemberValues.TrackerStartDate);
        var afterMaintanceWeek = getSunday(new Date(WeighDateFormatted));
        kony.print("1179 : afterMaintanceWeek=" + afterMaintanceWeek);
        var week5Date = calculateWeeks(new Date(afterMaintanceWeek), 5);
        kony.print("1179 : week5Date=" + week5Date);
        var tempdate = week5Date;
        week5Date = supportTime(new Date(week5Date), "", "yyyy-mm-ddTHH:NN:SS");
        afterMaintanceWeek = supportTime(new Date(afterMaintanceWeek), "", "yyyy-mm-ddTHH:NN:SS");
        var d1 = new Date(tempdate);
        var d2 = new Date();
        kony.print("1179: Calculate Difference Between two dates d1=" + d1 + " d2=" + d2);
        //Is todays date is greater than or equal to five weeks
        if (calculateDateDifference(d1, d2) >= 0) {
            var whereClause = "where WeighInDate BETWEEN '" + afterMaintanceWeek + "' AND '" + week5Date + "' AND WeighInDate != '" + week5Date + "' AND ( MemberID = '" + glbMemberId + "')";
            kony.print("1179: get weight whereClause=" + whereClause);

            function getNumberOfWeighIn5WeeksSuccessCallback(res) {
                //Check Number of times member weight registered in 5 weeks consecutive >= 1
                if (res.length >= 1) {
                    kony.print("1179 : res>1 : " + JSON.stringify(res));
                    //Member Weighs In
                    //Get Latest Weigh In
                    if (CurrentMemberValues.currentWeight) {
                        kony.print("1179 : CurrentMemberValues.currentWeight : " + CurrentMemberValues.currentWeight);
                        //Check Member Status
                        //If Termed
                        if (CurrentMemberValues.memberStatus == MemberStatusEnum[3]) {
                            kony.print("1179 : Termed CurrentMemberValues.memberStatus=" + CurrentMemberValues.memberStatus + "  MemberStatusEnum[3]=" + MemberStatusEnum[3]);
                            boLifeTimeEligibility.failedMaintainance();
                        } else {
                            kony.print("1179: Got Weight - 1 in 5 week");
                            CurrentMemberValues.WeightCountMet = 'true';
                            //Check Present Weight is <= +-2 lbs of Goal Weight
                            var goalWeightlbs = parseFloat(CurrentMemberValues.goalWeight);
                            kony.print("1179: (goalWeightlbs-2)=" + (goalWeightlbs - 2) + " (goalWeightlbs+2)=" + (goalWeightlbs + 2) + " parseFloat(CurrentMemberValues.currentWeight)=" + parseFloat(CurrentMemberValues.currentWeight));
                            if (((goalWeightlbs - 2) <= parseFloat(CurrentMemberValues.currentWeight)) && (parseFloat(CurrentMemberValues.currentWeight) <= (goalWeightlbs + 2))) {
                                kony.print("1179: set a Flag for Lifetime true and when payment is done check this flag and change status");
                                //Member Pays
                                //Here set a Flag for Lifetime true and when payment is done check this flag and change status
                                CurrentMemberValues.Eligible = 'true';
                                CurrentMemberValues.EligibleDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                                CurrentMemberValues.MaintenanceMode = 'false';
                                alertForMessages(kony.i18n.getLocalizedString("strMsgLifetime"));
                                //Enter in database after payment done
                            }
                        }
                    }
                } else {
                    kony.print("1179:check monthlypass");
                    //Check Subscription Monthly Pass
                    if (CurrentMemberValues.subscriptionType == "MonthlyPass") {
                        kony.print("1179:MonthlyPass");
                        boLifeTimeEligibility.getNumberOfWeighAfter5Weeks(week5Date);
                    } else {
                        kony.print("1179: not monthly pass fail");
                        boLifeTimeEligibility.failedMaintainance();
                    }
                }
            }
            DBWeighDetailsController.find(whereClause, getNumberOfWeighIn5WeeksSuccessCallback, eventErrorCallBack);
        } else {
            //Five weeks not passed still -- Wait -- 
        }
    },
    getNumberOfWeighAfter5Weeks: function(week5Date) {
        //Here DateParam is the 6th Week Date
        //Get Last WeighIn Date.
        var currentDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
        var goalWeightlbs = parseFloat(CurrentMemberValues.goalWeight);
        var whereClause = "where WeighInDate BETWEEN '" + week5Date + "' AND '" + currentDate + "' AND ( MemberID = '" + glbMemberId + "')";
        kony.print("1179 : whereclause for monthly pass = " + whereClause);

        function getNumberOfWeighAfter5WeeksSuccessCallback(res) {
            kony.print("1179 : getNumberOfWeighAfter5WeeksSuccessCallback res= " + JSON.stringify(res));
            if (res.length >= 1) {
                //Why 1 ? Because the current Weight will be the second one
                kony.print("1179: Got 2 records after weeks");
                //Member Pays
                //Here set a Flag for Lifetime true and when payment is done check this flag and change status
                //Second Weight must be +-2 
                //var weightOfMember = parseFloat(res[(res.length - 1)].Weight);
                kony.print("1179 :: MP and second weight :: goal weight = " + goalWeightlbs + " and  current weight = " + parseFloat(CurrentMemberValues.currentWeight));
                if (((goalWeightlbs - 2) <= parseFloat(CurrentMemberValues.currentWeight)) && (parseFloat(CurrentMemberValues.currentWeight) <= (goalWeightlbs + 2))) {
                    kony.print("1179: Elligible");
                    CurrentMemberValues.Eligible = 'true';
                    CurrentMemberValues.EligibleDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                    CurrentMemberValues.MaintenanceMode = 'false';
                    //Enter in database after payment done
                    alertForMessages(kony.i18n.getLocalizedString("strMsgLifetime"));
                }
            } else {
                kony.print("Member not eligible for lifetime");
            }
        }
        DBWeighDetailsController.find(whereClause, getNumberOfWeighAfter5WeeksSuccessCallback, eventErrorCallBack);
    },
    failedMaintainance: function() {
        kony.print("1179: failedMaintainance");
        CurrentMemberValues.Eligible = 'false';
        CurrentMemberValues.WeightCountMet = 'false';
        CurrentMemberValues.MaintenanceMode = 'false';
        CurrentMemberValues.TrackerStartDate = "0001-01-01T00:00:00";
        CurrentMemberValues.FailedDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    }
}