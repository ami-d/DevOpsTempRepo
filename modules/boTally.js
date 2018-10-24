var NumOfPaidLTAttandance_C = 0;
var SumOfPaidLTAttandance = 0;
var NumOfFreeLTAttandance_F = 0;
var TotalCurrentAtt_A = 0;
var SumTotalCurrentAtt = 0;

var TotalPaidAttandace = 0;
var TotalMemberAttandace = 0;
var TotalMemberFees = 0;
var NumOfMembersAttMeeting = 0;
var NumOfMembersReached5 = 0;
var NumOfMembersReached10 = 0;
var NumOfMembersReachedWeighGoal = 0;
var NumOfMembersReachedLifetime = 0;
var NumOfMembersWeightLossMeeting = 0;
var SumOfMembersWeightLossMeeting = 0;
var SumOfPrepaymentSales = 0;

var SumOfTotalCurrentAttd = 0;
var NumOfTotalCurrentAttd = 0;

var SumOfTotalSeniorCurrAttd = 0;
var NumOfTotalSeniorCurrAttd = 0;

var SumOfMissedWKCurrAttd = 0;
var NumOfMissedWKCurrAttd = 0;

var NumOfMissedWKSenCurrAttd = 0;
var SumOfMissedWKSenCurrAttd = 0;

var NumOfEnrollPayg = 0;
var SumOfEnrollPayg = 0;

var NumOfEnrollSenPayg = 0;
var SumOfEnrollSenPayg = 0;

var NumOfEnrollMP = 0;

var NumOfEnroll_17Wk = 0;

var NumOfPrepaid_17WKAttd = 0;

var NumOfPrepaid_MPAttd = 0;

var NumOfPrepaid_OtherAttd = 0;

var TotalEnrolments_B = 0;
var TotalPrepaidCoupon_E = 0;
var SumOfEnrollMP = 0;
var sumOfEnroll_17Wk = 0;

var boTally = {
    getAllTallyData: function() {
        kony.print("inside the Tally======");
        glbTotalMemberAtRisk = 0;
        var whereClause = "where MeetingId='" + glbMeetingNum + "'";

        function getAllTallyDataCallback(res) {

            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    var SKU = kony.sync.getString(v.Sku)
                    var memIsSenior = kony.sync.getString(v.isSenior);
                    var isFrmMissWK = kony.sync.getString(v.isFromMissWeek);
                    var memFlow = kony.sync.getString(v.Flow);
                    kony.print("memIsSenior===" + i + "===" + memIsSenior);
                    kony.print("isFrmMissWK===" + i + "===" + isFrmMissWK);

                    var whereCondition = "where MemberID = '" + v.MemberId + "'";
                    DBWeighDetailsController.find(whereCondition, getTotalMemberAtRisk, eventErrorCallBack);

                    function getTotalMemberAtRisk(res) {
                        if (res != undefined && res.length > 0) {
                            var response = res[0];
                            if ((kony.sync.getString(response.IsMemberAtRisk)) == "1") {
                                glbTotalMemberAtRisk++;
                            }
                        }
                    }


                    if (SKU == '500') {
                        NumOfTotalCurrentAttd = NumOfTotalCurrentAttd + 1;
                        SumOfTotalCurrentAttd = parseFloat(SumOfTotalCurrentAttd) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '507') {
                        NumOfTotalSeniorCurrAttd = NumOfTotalSeniorCurrAttd + 1;
                        SumOfTotalSeniorCurrAttd = parseFloat(SumOfTotalSeniorCurrAttd) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (isFrmMissWK == 'true' && memIsSenior == 'false') {
                        NumOfMissedWKCurrAttd = NumOfMissedWKCurrAttd + 1;
                        SumOfMissedWKCurrAttd = parseFloat(SumOfMissedWKCurrAttd) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (isFrmMissWK == 'true' && memIsSenior == 'true') {
                        NumOfMissedWKSenCurrAttd = NumOfMissedWKSenCurrAttd + 1;
                        SumOfMissedWKSenCurrAttd = parseFloat(SumOfMissedWKSenCurrAttd) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '400') {
                        NumOfEnrollPayg = NumOfEnrollPayg + 1;
                        SumOfEnrollPayg = parseFloat(SumOfEnrollPayg) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '481') {
                        NumOfEnrollSenPayg = NumOfEnrollSenPayg + 1;
                        SumOfEnrollSenPayg = parseFloat(SumOfEnrollSenPayg) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '450' && memFlow.toUpperCase() == 'ENROLL') {
                        NumOfEnrollMP = NumOfEnrollMP + 1;
                    } else if (SKU == '331' && memFlow.toUpperCase() == 'ENROLL') {
                        SumOfEnrollMP = parseFloat(SumOfEnrollMP) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '455' && memFlow.toUpperCase() == 'ENROLL') {
                        NumOfEnroll_17Wk = NumOfEnroll_17Wk + 1;
                    } else if (SKU == '353' && memFlow.toUpperCase() == 'ENROLL') {
                        sumOfEnroll_17Wk = parseFloat(sumOfEnroll_17Wk) + parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '385' && memFlow.toUpperCase() == 'ATTEND') {
                        NumOfPrepaid_17WKAttd = NumOfPrepaid_17WKAttd + 1;
                        //sumOfTotalCurrentAttd = parseFloat(sumOfTotalCurrentAttd)+parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '375' && memFlow.toUpperCase() == 'ATTEND') {
                        NumOfPrepaid_MPAttd = NumOfPrepaid_MPAttd + 1;
                        //sumOfTotalCurrentAttd = parseFloat(sumOfTotalCurrentAttd)+parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '250') {
                        NumOfPrepaid_OtherAttd = NumOfPrepaid_OtherAttd + 1;
                        //sumOfTotalCurrentAttd = parseFloat(sumOfTotalCurrentAttd)+parseFloat(kony.sync.getString(v.UnitPrice));
                    } else if (SKU == '350') {
                        NumOfFreeLTAttandance_F = NumOfFreeLTAttandance_F + 1;
                    } else if (SKU == '501' || SKU == '503') {
                        NumOfPaidLTAttandance_C = NumOfPaidLTAttandance_C + 1;
                        SumOfPaidLTAttandance = parseFloat(SumOfPaidLTAttandance) + parseFloat(kony.sync.getString(v.UnitPrice));
                    }
                }
                kony.print("Tally save data =====" + JSON.stringify(res));
            }
            boTally.getStayingMembersAttandance();
        }

        DBTallyInfoController.find(whereClause, getAllTallyDataCallback, eventErrorCallBack)
    },
    getStayingMembersAttandance: function() {
        var whereClause = "where MeetingId='" + glbMeetingNum + "' and IsAtndgMeeting='true'";
        kony.print("Where Clause==" + whereClause)

        function getStayingMembersAttandanceCallback(res) {
            var members = [];
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    if (!in_array(kony.sync.getString(v.MemberId), members)) {
                        members.push(kony.sync.getString(v.MemberId));
                    }
                }
                NumOfMembersAttMeeting = members.length;
            }
            boTally.getAchievedMilestone5();
            kony.print("Number of members staying for the meeting---" + NumOfMembersAttMeeting)
        }
        DBTallyInfoController.find(whereClause, getStayingMembersAttandanceCallback, eventErrorCallBack)
    },

    getAchievedMilestone5: function() {
        //var strWhere = "where MeetingID = '"+glbMeetingNum+"' and MilestoneID='26'";
        var strWhere = "where ',' || MilestoneID || ',' LIKE '%,26,%' and MeetingID = '" + glbMeetingNum + "'";
        kony.print("getAchievedMilestone5 where:=== " + strWhere);

        function getAchievedMilestone5SuccessCallback(res) {
            NumOfMembersReached5 = res.length;
            kony.print("getAchievedMilestone5 Response:=== " + JSON.stringify(res));
            boTally.getAchievedMilestone10();
        }

        //displayProgressView();
        DBTallyInfoController.find(strWhere, getAchievedMilestone5SuccessCallback, eventErrorCallBack);
    },

    getAchievedMilestone10: function() {

        //var strWhere = "where MeetingID = '"+glbMeetingNum+"' and MilestoneID='2'";
        var strWhere = "where ',' || MilestoneID || ',' LIKE '%,2,%' and MeetingID = '" + glbMeetingNum + "'";
        kony.print("getAchievedMilestone10 where:=== " + strWhere);

        function getAchievedMilestone10SuccessCallback(res) {
            NumOfMembersReached10 = res.length;
            kony.print("getAchievedMilestone10 Response:=== " + JSON.stringify(res));
            boTally.getAchievedMilestoneWeighGoal();
        }

        //displayProgressView();
        DBTallyInfoController.find(strWhere, getAchievedMilestone10SuccessCallback, eventErrorCallBack);
    },

    getAchievedMilestoneWeighGoal: function() {

        //var strWhere = "where MeetingID = '"+glbMeetingNum+"' and MilestoneID='3'";
        var strWhere = "where ',' || MilestoneID || ',' LIKE '%,3,%' and MeetingID = '" + glbMeetingNum + "'";
        kony.print("getAchievedMilestoneWeighGoal where:=== " + strWhere);

        function getAchievedMilestoneWeighGoalSuccessCallback(res) {
            NumOfMembersReachedWeighGoal = res.length;
            kony.print("getAchievedMilestoneWeighGoal Response:=== " + JSON.stringify(res));
            boTally.getAchievedMilestoneLifetime();
        }

        //displayProgressView();
        DBTallyInfoController.find(strWhere, getAchievedMilestoneWeighGoalSuccessCallback, eventErrorCallBack);
    },

    getAchievedMilestoneLifetime: function() {
        //var strWhere = "where MeetingID = '"+glbMeetingNum+"' and MilestoneID='13'";
        var strWhere = "where ',' || MilestoneID || ',' LIKE '%,13,%' and MeetingID = '" + glbMeetingNum + "'";
        kony.print("getAchievedMilestoneLifetime where:=== " + strWhere);

        function getAchievedMilestoneLifetimeSuccessCallback(res) {
            NumOfMembersReachedLifetime = res.length;
            kony.print("getAchievedMilestoneLifetime Response:=== " + JSON.stringify(res));
            boTally.getSumOfPrepaymentSales();
        }
        //displayProgressView();
        DBTallyInfoController.find(strWhere, getAchievedMilestoneLifetimeSuccessCallback, eventErrorCallBack);
    },
    getSumOfPrepaymentSales: function() {
        var whereClause = "where MeetingId='" + glbMeetingNum + "' and sku in('331','353')";
        kony.print("Where Clause==" + whereClause)

        function getSumOfPrepaymentSalesCallback(res) {

            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    SumOfPrepaymentSales = parseFloat(SumOfPrepaymentSales) + parseFloat(kony.sync.getString(v.UnitPrice))
                }
            }
            boTally.getMembersWeightLoss();
            kony.print("======SumOfPrepaymentSales---" + SumOfPrepaymentSales)
        }
        DBTallyInfoController.find(whereClause, getSumOfPrepaymentSalesCallback, eventErrorCallBack)
    },
    getMembersWeightLoss: function() {
        var whereClause = "where MeetingId='" + glbMeetingNum + "' and weightloss<>'0.0'";
        kony.print("Where Clause==" + whereClause)

        function getMembersWeightLossCallback(res) {
            var members = [];
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    if (!in_array(kony.sync.getString(v.MemberId), members)) {
                        members.push(kony.sync.getString(v.MemberId));
                    }
                    var tmpweightloss = kony.sync.getString(v.weightloss);
                    if (tmpweightloss != null) {
                        SumOfMembersWeightLossMeeting = parseFloat(SumOfMembersWeightLossMeeting) + parseFloat(kony.sync.getString(v.weightloss))
                    }

                }
                NumOfMembersWeightLossMeeting = members.length;
            }
            boTally.getTotalMemberFee();
            kony.print("Number of weightloss---" + NumOfMembersWeightLossMeeting + "======Sumofweightloss---" + SumOfMembersWeightLossMeeting)
        }
        DBTallyInfoController.find(whereClause, getMembersWeightLossCallback, eventErrorCallBack)
    },
    getTotalMemberFee: function() {
        var whereClause = "where sku NOT IN('331','353') and MeetingId='" + glbMeetingNum + "'";
        kony.print("Where Clause==" + whereClause)

        function getTotalMemberFeeCallback(res) {
            var members = [];
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    TotalMemberFees = parseFloat(TotalMemberFees) + parseFloat(kony.sync.getString(v.UnitPrice));
                }
            }
            boTally.getFinalResult();
            kony.print("TotalMemberFees---" + TotalMemberFees);
        }
        DBTallyInfoController.find(whereClause, getTotalMemberFeeCallback, eventErrorCallBack)

    },
    getFinalResult: function() {
        TotalCurrentAtt_A = TotalCurrentAtt_A + NumOfTotalCurrentAttd + NumOfTotalSeniorCurrAttd + NumOfMissedWKCurrAttd + NumOfMissedWKSenCurrAttd;

        SumTotalCurrentAtt = parseFloat(SumTotalCurrentAtt) + parseFloat(SumOfTotalCurrentAttd) + parseFloat(SumOfTotalSeniorCurrAttd) + parseFloat(SumOfMissedWKCurrAttd) + parseFloat(SumOfMissedWKSenCurrAttd)

        TotalEnrolments_B = TotalEnrolments_B + NumOfEnrollPayg + NumOfEnrollSenPayg + NumOfEnrollMP + NumOfEnroll_17Wk;

        TotalPrepaidCoupon_E = TotalPrepaidCoupon_E + NumOfPrepaid_17WKAttd + NumOfPrepaid_MPAttd + NumOfPrepaid_OtherAttd;

        TotalPaidAttandace = TotalCurrentAtt_A + TotalEnrolments_B + NumOfPaidLTAttandance_C + TotalPrepaidCoupon_E;

        TotalMemberAttandace = TotalPaidAttandace + NumOfFreeLTAttandance_F;

        kony.print("TotalPaidAttandace==" + TotalPaidAttandace + "======================TotalMemberAttandace=====" + TotalMemberAttandace);
        var resultObj = {
            "NumOfPaidLTAttandance_C": NumOfPaidLTAttandance_C,
            "SumOfPaidLTAttandance": SumOfPaidLTAttandance,
            "NumOfFreeLTAttandance_F": NumOfFreeLTAttandance_F,
            "TotalPaidAttandace": TotalPaidAttandace,
            "TotalMemberAttandace": TotalMemberAttandace,
            "TotalEnrolments_B": TotalEnrolments_B,
            "TotalMemberFees": TotalMemberFees,
            "NumOfMembersAttMeeting": NumOfMembersAttMeeting,
            "NumOfMembersReached5": NumOfMembersReached5,
            "NumOfMembersReached10": NumOfMembersReached10,
            "NumOfMembersReachedWeighGoal": NumOfMembersReachedWeighGoal,
            "NumOfMembersReachedLifetime": NumOfMembersReachedLifetime,
            "NumOfMembersWeightLossMeeting": NumOfMembersWeightLossMeeting,
            "SumOfMembersWeightLossMeeting": SumOfMembersWeightLossMeeting,
            "SumOfPrepaymentSales": SumOfPrepaymentSales,
            "SumOfTotalCurrentAttd": SumOfTotalCurrentAttd,
            "NumOfTotalCurrentAttd": NumOfTotalCurrentAttd,
            "SumOfTotalSeniorCurrAttd": SumOfTotalSeniorCurrAttd,
            "NumOfTotalSeniorCurrAttd": NumOfTotalSeniorCurrAttd,
            "SumOfMissedWKCurrAttd": SumOfMissedWKCurrAttd,
            "NumOfMissedWKCurrAttd": NumOfMissedWKCurrAttd,
            "NumOfMissedWKSenCurrAttd": NumOfMissedWKSenCurrAttd,
            "SumOfMissedWKSenCurrAttd": SumOfMissedWKSenCurrAttd,
            "NumOfEnrollPayg": NumOfEnrollPayg,
            "SumOfEnrollPayg": SumOfEnrollPayg,
            "NumOfEnrollSenPayg": NumOfEnrollSenPayg,
            "SumOfEnrollSenPayg": SumOfEnrollSenPayg,
            "NumOfEnrollMP": NumOfEnrollMP,
            "NumOfEnroll_17Wk": NumOfEnroll_17Wk,
            "NumOfPrepaid_17WKAttd": NumOfPrepaid_17WKAttd,
            "NumOfPrepaid_MPAttd": NumOfPrepaid_MPAttd,
            "NumOfPrepaid_OtherAttd": NumOfPrepaid_OtherAttd,
            "sumOfEnroll_17Wk": sumOfEnroll_17Wk,
            "SumOfEnrollMP": SumOfEnrollMP,
            "TotalCurrentAtt_A": TotalCurrentAtt_A
        }

        kony.print("Final result data==" + JSON.stringify(resultObj));

        boMeetings.closeTallyMeeting();
        displayTallyData(true, resultObj);

        NumOfFreeLTAttandance_F = 0;
        TotalPaidAttandace = 0;
        TotalMemberAttandace = 0;
        TotalMemberFees = 0;
        NumOfMembersAttMeeting = 0;
        NumOfMembersReached5 = 0;
        NumOfMembersReached10 = 0;
        NumOfMembersReachedWeighGoal = 0;
        NumOfMembersReachedLifetime = 0;
        NumOfMembersWeightLossMeeting = 0;
        SumOfMembersWeightLossMeeting = 0;
        SumOfPrepaymentSales = 0;
        SumOfTotalCurrentAttd = 0;
        NumOfTotalCurrentAttd = 0;
        SumOfTotalSeniorCurrAttd = 0;
        NumOfTotalSeniorCurrAttd = 0;
        SumOfMissedWKCurrAttd = 0;
        NumOfMissedWKCurrAttd = 0;
        NumOfMissedWKSenCurrAttd = 0;
        SumOfMissedWKSenCurrAttd = 0;
        NumOfEnrollPayg = 0;
        SumOfEnrollPayg = 0;
        NumOfEnrollSenPayg = 0;
        SumOfEnrollSenPayg = 0;
        NumOfEnrollMP = 0;
        NumOfEnroll_17Wk = 0;
        NumOfPrepaid_17WKAttd = 0;
        NumOfPrepaid_MPAttd = 0;
        NumOfPrepaid_OtherAttd = 0;
        NumOfPaidLTAttandance_C = 0;
        TotalEnrolments_B = 0;
        sumOfEnroll_17Wk = 0;
        SumOfEnrollMP = 0;
        TotalCurrentAtt_A = 0;
        TotalPrepaidCoupon_E = 0;
        SumTotalCurrentAtt = 0;
        SumOfPaidLTAttandance = 0;
    }

};
