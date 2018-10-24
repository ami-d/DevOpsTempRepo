var boTallyMeetingReport = {
    TallyRegion: "",
    TallyLocationName: "",
    TallyEmployees: [],
    Section2NumOfTotalCurrentAttd: 0,
    Section2SumOfTotalCurrentAttd: 0,
    Section2NumOfMissedWKCurrAttd: 0,
    Section2SumOfMissedWKCurrAttd: 0,
    Section2NumOfEnrollPayg: 0,
    Section2SumOfEnrollPayg: 0,
    Section2NumOfPaidLTAttandance: 0,
    Section2NumOfPrepaidAttd: 0,
    Section2SumOfPrepaidAttd: 0,
    Section2NumOfMonthlyPassLTAttd: 0, // Added for MEGCA-13
    Section2NumOfFreeLTAttandance: 0,
    Section2SumOfPaidLTAttandance: 0,
    Section2PreRegMemberCount: 0, // **MEG 7313
    //Section2TotalMemberAttandace : 0,
    Section2NumOfNewEnrollments: 0,
    Section2SumOfNewEnrollments: 0,
    Section2SubsidyOfNewEnrollments: 0,
    Section2NumOfContEnrollments: 0,
    Section2SumOfContEnrollments: 0,
    Section2SubsidyOfContEnrollments: 0,
    Section2NumOfPaidLT: 0,
    Section2SumOfPaidLT: 0,
    Section2SubsidyOfPaidLT: 0,
    Section2NumOfFreeLT: 0,
    Section2SumOfFreeLT: 0,
    Section2SubsidyOfFreeLT: 0,
    Section2NumOfPrepaid: 0,
    Section2NumOfPrepaidBridgeSeries: 0,
    Section2SumOfPrepaid: 0,
    Section2SumOfPrepaidBridgeSeries: 0,
    Section2SubsidyOfPrepaid: 0,
    Section2SubsidyOfPrepaidBridgeSeries: 0,
    Section2NumOfEmployee: 0,
    Section2SumOfEmployee: 0,
    Section2SubsidyOfEmployee: 0,
    Section2TotalSubsidyAmt: 0,
    Section3NumPrePaidCoupons: 0,
    Section3MembersAttMeeting: 0,
    Section3NumOfMembersReached5: 0,
    Section3NumOfMembersReached10: 0,
    Section3NumOfMembersReachedWeighGoal: 0,
    Section3NumOfMembersReachedLifetime: 0,
    Section3NumMonthlyPassSold: 0,
    Section3Num3MonthPassSold: 0,
    Section3Num3MonthLTCPassSold: 0, //MEG-6955
    Section3Num20weekPassSold: 0, // MEGCA-8
    Section3Num6MonthPassSold: 0, //MEGCA-301
    Section3Num6MonthLTCPassSold: 0, //MEG-6140
    Section3NumMPsActivationSold: 0, // MEG-5414
    Section3NumThreeMPsActivationSold: 0,
    Section3NumThreeMPsLTCActivationSold: 0, ///MEG-6955
    Section3NumSixMPsActivationSold: 0,
    Section3NumSixMPsLTCActivationSold: 0, //MEG-6140
    Section3NumOfMembersWeightLossMeeting: 0,
    Section3SumOfMembersWeightLossMeeting: 0,
    Section4PrepaymentSales: 0,
    Section4ProductSales: 0,
    Section4ProductReturns: 0,
    Section4EmployeeSales: 0,
    Section4SalesTax: 0,
    Section5Cash: 0,
    Section5Check: 0,
    Section5DipositeTicket: "",
    Section5CreditCard: 0,
    Section5CreditSlipsIssued: 0,
    Section5CreditSlipsRedeemed: 0,
    Section5Reason: "",
    Section5DebitCard: 0,
    Section2NumEmpAttendance: 0,
    Section5DipositDate1: "",
    ection5DipositSlip1: "",
    Section5DipositAmount1: 0,
    Section5DipositDate2: "",
    Section5DipositSlip2: "",
    Section5DipositAmount2: 0,
    Section5DipositDate3: "",
    Section5DipositSlip3: "",
    Section5DipositAmount3: 0,
    TallySummaryobj: {},
    isfromTallyReportFlow: false,
    /**
     * 
     * @param {} meetingdate - which meeting date - null for normal flow
     * @param {} meetingoccr - which meeting occr id - null for normal flow
     * @param {} callback 
     * @returns 
     */
    getRegion: function(meetingdate, meetingoccr, callback) {
        kony.print("::getRegion::meetingdate=" + meetingdate + " meetingoccr=" + meetingoccr);
        //Set the flow if from Menu Report Flow
        if (checkValidString(meetingdate) && checkValidString(meetingoccr)) {
            kony.print("::getRegion::isfromTallyReportFlow=true MeetingDate=" + meetingdate + " meetingoccr= " + meetingoccr);
            boTallyMeetingReport.isfromTallyReportFlow = true;
            boTallyMeetingReport.MeetingDate = new Date(meetingdate);
            boTallyMeetingReport.MeetingOccrID = meetingoccr;
        }
        kony.print("inside the getRegion callback======" + JSON.stringify(callback));
        //boTallyMeetingReport.clearTallyVariables();
        //alert("inside the Tally======");
        var whereClause = "where locationno='" + glbLocationNum + "'";
        DBLocationController.find(whereClause, getRegionCallback, eventErrorCallBack)

        function getRegionCallback(res) {
            // alert("Success");
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    boTallyMeetingReport.TallyRegion = kony.sync.getString(v.AreaSiteNumber);
                    boTallyMeetingReport.TallyLocationName = kony.sync.getString(v.displayvalue);
                }
            }
            boTallyMeetingReport.getPayrollDetails(callback);
        }
    },
    getPayrollDetails: function(callback) {
        kony.print("inside the Tally======");
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        kony.print("::getPayrollDetails:: dateQuery = " + dateQuery + " meetingQuery=" + meetingQuery);
        var whereClause = "where MeetingId='" + meetingQuery + "' and MeetingDate like '%" + dateQuery + "%'";
        kony.print("::getPayrollDetails::whereClause=" + whereClause);
        DBTallyTimesheetController.find(whereClause, getPayrollInformationCallback, eventErrorCallBack)

        function getPayrollInformationCallback(res) {
            // alert("Success");
            kony.print("::getPayrollDetails::res=" + JSON.stringify(res));
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    var lblTimeIn = "";
                    var lblBreakIn = "";
                    var lblTimeOut = "";
                    var lblBreakOut = "";
                    // alert(kony.sync.getString(v.TimeIn));
                    if (kony.sync.getString(v.TimeIn) != null || kony.sync.getString(v.TimeIn) != "" || kony.sync.getString(v.TimeIn) != undefined) {
                        var first = kony.sync.getString(v.TimeIn).split("T");
                        if (first.length > 1) {
                            var second = first[1].split(":");
                            lblTimeIn = getFormatedValue(second[0] + second[1]);
                        }
                    }
                    kony.print("*****lblTimeIn " + lblTimeIn);
                    // alert("TimeOut"+kony.sync.getString(v.TimeOut));
                    if (kony.sync.getString(v.TimeOut) != null || kony.sync.getString(v.TimeOut) != "" || kony.sync.getString(v.TimeOut) != undefined) {
                        var first = kony.sync.getString(v.TimeOut).split("T");
                        if (first.length > 1) {
                            var second = first[1].split(":");
                            lblTimeOut = getFormatedValue(second[0] + second[1]);
                        }
                    }
                    kony.print("*****lblTimeOut " + lblTimeOut);
                    //  alert("lblBreakIn"+kony.sync.getString(v.lblBreakIn));
                    if (kony.sync.getString(v.lblBreakIn) != null || kony.sync.getString(v.lblBreakIn) != "" || kony.sync.getString(v.lblBreakIn) != undefined) {
                        var first = kony.sync.getString(v.lblBreakIn).split("T");
                        if (first.length > 1) {
                            var second = first[1].split(":");
                            lblBreakIn = getFormatedValue(second[0] + second[1]);
                        }
                    }
                    kony.print("*****lblBreakIn " + lblBreakIn);
                    // alert("BreakOut"+kony.sync.getString(v.BreakOut));
                    if (kony.sync.getString(v.BreakOut) != null || kony.sync.getString(v.BreakOut) != "" || kony.sync.getString(v.BreakOut) != undefined) {
                        var first = kony.sync.getString(v.BreakOut).split("T");
                        if (first.length > 1) {
                            var second = first[1].split(":");
                            lblBreakOut = getFormatedValue(second[0] + second[1]);
                        }
                    }
                    kony.print("*****lblBreakOut " + lblBreakOut);
                    kony.print("*****TimeIn " + v.TimeIn);
                    kony.print("*****TimeIn " + v.TimeOut);
                    //** MEG 6386
                    if (deviceLocale == "fr_CA") {
                        TimeIn = convertTime24HrsForCA((v.TimeIn).substr(11, 8));
                        TimeOut = convertTime24HrsForCA((v.TimeOut).substr(11, 8));
                    } else {
                        TimeIn = convertTimeTo12HrsFormat((v.TimeIn).substr(11, 8));
                        TimeOut = convertTimeTo12HrsFormat((v.TimeOut).substr(11, 8));
                    }
                    //** END
                    kony.print("*****TimeIn " + TimeIn);
                    kony.print("*****TimeOut " + TimeOut);
                    var isVisibleTimeinOut = true;
                    var intBreakInOutColWidth = 12;
                    //meeting type == trade 
                    if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) {
                        var isMentor = (v.MeetingSetup == true || v.MeetingSetup == "true") ? getLocalizedString("strYes") : getLocalizedString("strNo");
                        BreakIn = decodeDisplayText(v.MentorTraineeName);
                        BreakOut = isMentor;
                        isVisibleTimeinOut = false;
                        intBreakInOutColWidth = 24;
                        kony.print("--> step 333 --> BreakIn = " + BreakIn + "--breakot = " + BreakOut);
                    } else {
                        //BreakIn = (v.BreakIn != "") ? convertTimeTo12HrsFormat((v.BreakIn).substr(11, 8)) : "";
                        //BreakOut = (v.BreakOut != "") ? convertTimeTo12HrsFormat((v.BreakOut).substr(11, 8)) : "";
                        //** MEG 6386
                        if (deviceLocale == "fr_CA") {
                            BreakIn = checkValidString(v.BreakIn) ? convertTime24HrsForCA((v.BreakIn).substr(11, 8)) : "";
                            BreakOut = checkValidString(v.BreakOut) ? convertTime24HrsForCA((v.BreakOut).substr(11, 8)) : "";
                        } else {
                            BreakIn = checkValidString(v.BreakIn) ? convertTimeTo12HrsFormat((v.BreakIn).substr(11, 8)) : "";
                            BreakOut = checkValidString(v.BreakOut) ? convertTimeTo12HrsFormat((v.BreakOut).substr(11, 8)) : "";
                        }
                        //** END                   
                    }
                    var b = {
                        lblPosition: v.Position,
                        lblEmployee: v.EmpName,
                        lblNumber: v.EmpNumber,
                        lblPosition: (v.EmpRole == empRoleEnum[1]) ? getLocalizedString("strReceptionist") : getLocalizedString("strLeader"),
                        lblTimeIn: {
                            "text": TimeIn,
                            "isVisible": isVisibleTimeinOut
                        },
                        lblTimeOut: {
                            "text": TimeOut,
                            "isVisible": isVisibleTimeinOut
                        },
                        lblBreakIn: {
                            "text": BreakIn,
                            containerWeight: intBreakInOutColWidth
                        },
                        lblBreakOut: {
                            "text": BreakOut,
                            containerWeight: intBreakInOutColWidth
                        }
                    };
                    kony.print("-->boTallyMeetingReport.TallyEmployees " + JSON.stringify(b));
                    boTallyMeetingReport.TallyEmployees.push(b);
                }
            }
            boTallyMeetingReport.getWeightDetail(callback);
        }
    },
    getWeightDetail: function(callback) {
        /*commented by Ami MEG-2695
         var whereClause = " where MtngOccrID='" + glbMeetingNum + "'";
         kony.print("inside the getWeightDetail ======"+whereClause);
         DBWeighDetailsController.find(whereClause, getWeightDetailCallback, eventErrorCallBack)
         */
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        //Ami Add MEG-2695 start
        //var sqlQuery="SELECT A.* FROM WeighDetails A,MemberDetails B, SaleDetails C where B.MtngOccrID='"+meetingQuery+"' and A.MemberID=B.MemberID and A.MemberID= C.MemberID and A.MemberID != 0 and date(A.WeighInDate) = '" + dateQuery + "'";
        var sqlQuery = "SELECT A.* FROM WeighDetails A inner join MemberDetails B on A.MemberID=B.MemberID where B.CountryID = '" + getCountryID() + "' AND B.MtngOccrID='" + meetingQuery + "' and A.MemberID != 0 and date(A.WeighInDate) = '" + dateQuery + "'  and A.MemberID in (Select MemberID from SaleDetails where CountryID = '" + getCountryID() + "' AND date(MeetingDate) = '" + dateQuery + "' AND TransactionType='NonTangible')";
        kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, getWeightDetailCallback, eventErrorCallBack);
        kony.print("::getWeightDetail::sqlQuery=" + sqlQuery);
        //Ami Add MEG-2695 end
        function getWeightDetailCallback(res) {
            kony.print(" getWeightDetail res" + JSON.stringify(res));
            var MembersAttMeeting = [];
            var Membersweightloss = [];
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    var IsAtndgMeeting = kony.sync.getString(v.IsAtndgMeeting);
                    var weightloss = kony.sync.getString(v.WeightLoss);
                    // kony.print("memIsSenior===" + i + "===" + memIsSenior);
                    if (IsAtndgMeeting == 'true' || IsAtndgMeeting == "1") {
                        if (!in_array(kony.sync.getString(v.MemberID), MembersAttMeeting)) {
                            MembersAttMeeting.push(kony.sync.getString(v.MemberID));
                        }
                    }
                    if (parseFloat(weightloss) > 0 && weightloss != null) {
                        if (!in_array(kony.sync.getString(v.MemberID), Membersweightloss)) {
                            Membersweightloss.push(kony.sync.getString(v.MemberID));
                        }
                        var tmpweightloss = kony.sync.getString(v.WeightLoss);
                        if (parseFloat(tmpweightloss) > 0 && tmpweightloss != null) {
                            boTallyMeetingReport.Section3SumOfMembersWeightLossMeeting = parseFloat(boTallyMeetingReport.Section3SumOfMembersWeightLossMeeting) + parseFloat(kony.sync.getString(v.WeightLoss))
                        }
                    }
                }
            }
            boTallyMeetingReport.Section3MembersAttMeeting = MembersAttMeeting.length;
            glbMemberInMeeting = MembersAttMeeting.length;
            boTallyMeetingReport.Section3NumOfMembersWeightLossMeeting = Membersweightloss.length;
            boTallyMeetingReport.getTallyMeetingReportData(callback);
        }
    },
    getTallyMeetingReportData: function(callback) {
        kony.print("inside the getTallyMeetingReportData======");
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        /*
        	MEG-5105 Issue observed on production that member staying count in tally summary is low compare to actual member add/enroll/processed in the meeting.
        	As we have join of memberdetails table in query, this may create issue if download for members will fail. Anyway, join of memberdetails is 
        	require only for CA locale hence keeping both query separately.
        */
        var whereClause = "";
        if (in_array(deviceLocale, Countries["CA"])) {
            whereClause = "Select m.membertype,s.productsku,s.* from SaleItems s inner join SaleDetails d on s.SaleTransactnId = d.SaleTransactnId INNER JOIN memberdetails m on m.memberid=d.memberid where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' order by s.ProductSku";
        } else {
            whereClause = "Select *,(UnitPrice-SubsidyAmount) as UnitPriceWithoutSubsidy from SaleItems s inner join SaleDetails d on s.SaleTransactnId = d.SaleTransactnId where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' and d.MemberID NOT IN(SELECT EmpId FROM TallyTimesheet WHERE MeetingId = '" + meetingQuery + "' and MeetingDate like '%" + dateQuery + "%') order by s.ProductSku";
        }
        kony.print("::getTallyMeetingReportData:: whereClause = " + whereClause);

        function getTallyMeetingReportCallback(res) {
            var saleItemProductSKU = "";
            var saleItemUnitPrice = 0.0;
            var saleItemSubsidyAmt = 0.0;
            kony.print("getTallyMeetingReportCallback " + JSON.stringify(res));
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    saleItemProductSKU = kony.sync.getString(v.ProductSku);
                    saleItemUnitPrice = (IsAWSLocationEnabled()) ? kony.sync.getString(v.UnitPriceWithoutSubsidy) : kony.sync.getString(v.UnitPrice); //** 7254
                    saleItemSubsidyAmt = kony.sync.getString(v.SubsidyAmount);
                    boTallyMeetingReport.setAtandanceAndMettingFeesDetails(saleItemProductSKU, saleItemUnitPrice, kony.sync.getString(v.MemberType), saleItemSubsidyAmt);
                }
                kony.print("Tally save data =====" + JSON.stringify(res));
            }
            boTallyMeetingReport.getMPsActivatedDetails(callback);
        }
        // **MEG 7313
        if (IsInfoSessionMeeting()) {
            getPreRegisteredMemberCountFromDB(function(res) {
                kony.print("getPreRegisteredMemberCountFromDB res " + JSON.stringify(res));
                boTallyMeetingReport.Section2PreRegMemberCount = res["count"];
            });
        }
        // ** END 7313
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, getTallyMeetingReportCallback, eventErrorCallBack);
        //    com.kony.WeightWatchers.MemberSyncScope.SaleItems.find(whereClause, getTallyMeetingReportCallback, eventErrorCallBack)
    },
    setAtandanceAndMettingFeesDetails: function(SKU, UnitPrice, MemberType, SubsidyAmt) {
        kony.print("SKU " + SKU);
        kony.print("setAtandanceAndMettingFeesDetails ");
        // Maulik- 07/27/2015 : Fixing MEG-4615 to add SKU 490 in the Prepaid coupon list to be considered
        if (in_array(SKU, getSKUList('Prepaid_Coupons'))) {
            boTallyMeetingReport.Section3NumPrePaidCoupons = boTallyMeetingReport.Section3NumPrePaidCoupons + 1;
        }
        // Added by PK MEG-5568
        if (in_array(SKU, getSKUList('Employee_Attendance'))) {
            boTallyMeetingReport.Section2NumEmpAttendance = boTallyMeetingReport.Section2NumEmpAttendance + 1;
        }
        if (in_array(SKU, getSKUList('Current_Attendance')) && !IsAWSLocationEnabled()) {
            boTallyMeetingReport.Section2NumOfTotalCurrentAttd = boTallyMeetingReport.Section2NumOfTotalCurrentAttd + 1;
            boTallyMeetingReport.Section2SumOfTotalCurrentAttd = parseFloat(boTallyMeetingReport.Section2SumOfTotalCurrentAttd) + parseFloat(UnitPrice);
        } else if (in_array(SKU, getSKUList('MissedWeek'))) {
            boTallyMeetingReport.Section2NumOfMissedWKCurrAttd = boTallyMeetingReport.Section2NumOfMissedWKCurrAttd + 1;
            boTallyMeetingReport.Section2SumOfMissedWKCurrAttd = parseFloat(boTallyMeetingReport.Section2SumOfMissedWKCurrAttd) + parseFloat(UnitPrice);
        }
        // Maulik- Added 490 in the below array to fix MEG-3983 where in section 2 of tally attendance the 3 MP member doesn't show up.
        else if (in_array(SKU, getSKUList('Enrollments')) || (IsAWSLocationEnabled() && SKU == "500")) { //** MEG-7247 500 added
            boTallyMeetingReport.Section2NumOfEnrollPayg = boTallyMeetingReport.Section2NumOfEnrollPayg + 1;
            //Ami-MEG-4180      if(SKU != "490"){
            boTallyMeetingReport.Section2SumOfEnrollPayg = parseFloat(boTallyMeetingReport.Section2SumOfEnrollPayg) + parseFloat(UnitPrice);
            //Ami-MEG-4180   }
        }
        // Commented by Praveen Kalal for starter Fee Implementation
        /*
                else if (in_array(SKU, ["400","490","450", "455", "481"])) { 
                	boTallyMeetingReport.Section2SumOfEnrollPayg = parseFloat(boTallyMeetingReport.Section2SumOfEnrollPayg) + parseFloat(UnitPrice);
                	boTallyMeetingReport.Section2NumOfEnrollPayg = boTallyMeetingReport.Section2NumOfEnrollPayg + 1;
                	
                }*/
        // Ended by Praveen Kalal for starter Fee Implementation
        else if (in_array(SKU, getSKUList('PaidLTAttendance'))) {
            boTallyMeetingReport.Section2NumOfPaidLTAttandance = boTallyMeetingReport.Section2NumOfPaidLTAttandance + 1;
            boTallyMeetingReport.Section2SumOfPaidLTAttandance = parseFloat(boTallyMeetingReport.Section2SumOfPaidLTAttandance) + parseFloat(UnitPrice);
            boTallyMeetingReport.Section2SubsidyOfPaidLT = parseFloat(boTallyMeetingReport.Section2SubsidyOfPaidLT) + parseFloat(SubsidyAmt);
        } else if (in_array(SKU, getSKUList('PrepaidAttendance')) && !IsAWSLocationEnabled()) {
            kony.print("IS Membertype: " + MemberType);
            kony.print("IS MemberValueEnum: " + MemberValueEnum[7]);
            kony.print("IS sku: " + SKU);
            if (in_array(deviceLocale, Countries["CA"]) && in_array(SKU, getSKUList('NumOfMonthlyPassLTAttd')) && MemberType == MemberValueEnum[7]) { // Added for MEGCA-13   && MemberType == MemberValueEnum[7]
                boTallyMeetingReport.Section2NumOfMonthlyPassLTAttd = boTallyMeetingReport.Section2NumOfMonthlyPassLTAttd + 1;
            } else {
                boTallyMeetingReport.Section2NumOfPrepaidAttd = boTallyMeetingReport.Section2NumOfPrepaidAttd + 1;
            }
        } else if (in_array(SKU, getSKUList('FreeLTAttendance'))) {
            boTallyMeetingReport.Section2NumOfFreeLTAttandance = boTallyMeetingReport.Section2NumOfFreeLTAttandance + 1;
        } else if (in_array(SKU, getSKUList('MPSold'))) {
            //353- 20 Week Pass Sold
            boTallyMeetingReport.Section3NumMonthlyPassSold = boTallyMeetingReport.Section3NumMonthlyPassSold + 1;
        } else if (in_array(SKU, getSKUList('20weekPassSold'))) { // MEGCA-8 for 20 week pass
            boTallyMeetingReport.Section3Num20weekPassSold = boTallyMeetingReport.Section3Num20weekPassSold + 1;
        } else if (in_array(SKU, getSKUList('ThreeMPSold'))) {
            boTallyMeetingReport.Section3Num3MonthPassSold = boTallyMeetingReport.Section3Num3MonthPassSold + 1;
        } else if (in_array(SKU, getSKUList('ThreeMPLTCSold'))) {
            boTallyMeetingReport.Section3Num3MonthLTCPassSold = boTallyMeetingReport.Section3Num3MonthLTCPassSold + 1;
        } else if (in_array(SKU, getSKUList('SixMPSold'))) { //MEGCA-301
            boTallyMeetingReport.Section3Num6MonthPassSold = boTallyMeetingReport.Section3Num6MonthPassSold + 1;
        } else if (in_array(SKU, getSKUList('SixMPLTCSold'))) {
            boTallyMeetingReport.Section3Num6MonthLTCPassSold = boTallyMeetingReport.Section3Num6MonthLTCPassSold + 1;
        } else if (in_array(SKU, getSKUList('Cont_Enrollments'))) {
            boTallyMeetingReport.Section2NumOfContEnrollments = boTallyMeetingReport.Section2NumOfContEnrollments + 1;
            boTallyMeetingReport.Section2SumOfContEnrollments = parseFloat(boTallyMeetingReport.Section2SumOfContEnrollments) + parseFloat(UnitPrice);
            boTallyMeetingReport.Section2SubsidyOfContEnrollments = parseFloat(boTallyMeetingReport.Section2SubsidyOfContEnrollments) + parseFloat(SubsidyAmt);
        } else if (in_array(SKU, getSKUList('Paid_LT'))) {
            kony.print("entered into Paid_LT");
            boTallyMeetingReport.Section2NumOfPaidLT = boTallyMeetingReport.Section2NumOfPaidLT + 1;
            boTallyMeetingReport.Section2SumOfPaidLT = parseFloat(boTallyMeetingReport.Section2SumOfPaidLT) + parseFloat(UnitPrice);
            boTallyMeetingReport.Section2SubsidyOfPaidLT = parseFloat(boTallyMeetingReport.Section2SubsidyOfPaidLT) + parseFloat(SubsidyAmt);
        } else if (in_array(SKU, getSKUList('Free_LT'))) {
            kony.print("entered into Free_LT")
            boTallyMeetingReport.Section2NumOfFreeLT = boTallyMeetingReport.Section2NumOfFreeLT + 1;
            boTallyMeetingReport.Section2SumOfFreeLT = parseFloat(boTallyMeetingReport.Section2SumOfFreeLT) + parseFloat(UnitPrice);
            boTallyMeetingReport.Section2SubsidyOfFreeLT = parseFloat(boTallyMeetingReport.Section2SubsidyOfFreeLT) + parseFloat(SubsidyAmt);
        } else if (in_array(SKU, getSKUList('PrePaid'))) {
            kony.print("entered into PrePaid")
            boTallyMeetingReport.Section2NumOfPrepaid = boTallyMeetingReport.Section2NumOfPrepaid + 1;
            boTallyMeetingReport.Section2SumOfPrepaid = parseFloat(boTallyMeetingReport.Section2SumOfPrepaid) + parseFloat(UnitPrice);
            boTallyMeetingReport.Section2SubsidyOfPrepaid = parseFloat(boTallyMeetingReport.Section2SubsidyOfPrepaid) + parseFloat(SubsidyAmt);
        } else if (in_array(SKU, getSKUList('BridgeSeries'))) {
            kony.print("entered into BridgeSeries")
            boTallyMeetingReport.Section2NumOfPrepaidBridgeSeries = boTallyMeetingReport.Section2NumOfPrepaidBridgeSeries + 1;
            boTallyMeetingReport.Section2SumOfPrepaidBridgeSeries = parseFloat(boTallyMeetingReport.Section2SumOfPrepaidBridgeSeries) + parseFloat(UnitPrice);
            boTallyMeetingReport.Section2SubsidyOfPrepaidBridgeSeries = parseFloat(boTallyMeetingReport.Section2SubsidyOfPrepaidBridgeSeries) + parseFloat(SubsidyAmt);
        }
        if (in_array(SKU, getSKUList('New_Enrollments')) && IsAWSLocationEnabled()) {
            boTallyMeetingReport.Section2NumOfNewEnrollments = boTallyMeetingReport.Section2NumOfNewEnrollments + 1;
            boTallyMeetingReport.Section2SumOfNewEnrollments = parseFloat(boTallyMeetingReport.Section2SumOfNewEnrollments) + parseFloat(UnitPrice);
            boTallyMeetingReport.Section2SubsidyOfNewEnrollments = parseFloat(boTallyMeetingReport.Section2SubsidyOfNewEnrollments) + parseFloat(SubsidyAmt);
        }
    },
    getMPsActivatedDetails: function(callback) {
        var whereClause = "";
        var dateQuery, meetingQuery;
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        whereClause = "where MtngOccrID='" + meetingQuery + "' and MeetingDate like '%" + dateQuery + "%'  and ActivationStatus='true'";
        kony.print("::where Clause::MPs Activated::" + whereClause);

        function getMPsActivationSuccess(res) {
            kony.print("::PreActivation res::" + JSON.stringify(res));
            //boTallyMeetingReport.Section3NumMPsActivationSold = res.length;
            for (var i in res) {
                var v = res[i];
                var whrClause = " where SaleTransactnId = '" + v.SaleTransactnId + "'";
                kony.print("::where Clause::MPs Activated Sale::" + whrClause);

                function getSaleItemDataCallback(result) {
                    kony.print("::SaleItem res::" + JSON.stringify(result));
                    for (var i in result) {
                        var vRes = result[i];
                        kony.print("vRes.ProductSku :" + vRes.ProductSku);
                        var resSKU = vRes.ProductSku;
                        if (in_array(resSKU, getSKUList('MPSold'))) {
                            boTallyMeetingReport.Section3NumMPsActivationSold = boTallyMeetingReport.Section3NumMPsActivationSold + 1;
                        }
                        if (in_array(resSKU, getSKUList('ThreeMPSold'))) {
                            boTallyMeetingReport.Section3NumThreeMPsActivationSold = boTallyMeetingReport.Section3NumThreeMPsActivationSold + 1;
                        }
                        if (in_array(resSKU, getSKUList('SixMPSold'))) {
                            boTallyMeetingReport.Section3NumSixMPsActivationSold = boTallyMeetingReport.Section3NumSixMPsActivationSold + 1;
                        }
                        if (in_array(resSKU, getSKUList('SixMPLTCSold'))) {
                            boTallyMeetingReport.Section3NumSixMPsLTCActivationSold = boTallyMeetingReport.Section3NumSixMPsLTCActivationSold + 1;
                        }
                        if (in_array(resSKU, getSKUList('ThreeMPLTCSold'))) { //MEG-6955
                            boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold = boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold + 1;
                        }
                    }
                }
                DBSaleItemsController.find(whrClause, getSaleItemDataCallback, eventErrorCallBack);
            }
            kony.print("boTallyMeetingReport.Section3NumMPsActivationSold==>>" + boTallyMeetingReport.Section3NumMPsActivationSold);
            kony.print("boTallyMeetingReport.Section3NumThreeMPsActivationSold==>>" + boTallyMeetingReport.Section3NumThreeMPsActivationSold);
            kony.print("boTallyMeetingReport.Section3NumSixMPsActivationSold==>>" + boTallyMeetingReport.Section3NumSixMPsActivationSold);
            kony.print("boTallyMeetingReport.Section3NumSixMPsLTCActivationSold==>>" + boTallyMeetingReport.Section3NumSixMPsLTCActivationSold);
            kony.print("boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold==>>" + boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold);
            boTallyMeetingReport.setMilestonedata(callback);
        }
        DBPreActivationController.find(whereClause, getMPsActivationSuccess, eventErrorCallBack);
    },
    setMilestonedata: function(callback) {
        kony.print("Inside setMilestonedata");
        var dateQuery, meetingQuery, strWhere;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
            strWhere = "Select FivePercent,TenPercent,Goal,Lifetime from TallySummary where CountryID = '" + getCountryID() + "' AND MeetingDate like '%" + dateQuery + "%' and MeetingOccurrenceID='" + meetingQuery + "'";
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
            strWhere = "Select * from MilestoneAchieved MA 	where (date(MA.ReachedDate) like '%" + dateQuery + "%'	and MA.MilestoneID in ('26','2','3','13')) and MA.MemberID in (Select MemberID from SaleDetails SD where SD.CountryID = '" + getCountryID() + "' AND SD.MeetingOccurID='" + meetingQuery + "' AND date(SD.MeetingDate) = '" + dateQuery + "' AND SD.TransactionType='NonTangible' AND SD.LocationID = '" + glbLocationID + "') ";
        }
        kony.print("::setMilestonedata:: strWhere = " + strWhere);
        //var strWhere = "where MeetingID = '" + glbMeetingNum + "' and MilestoneID in('26','2','3','13')";        
        function getMilestoneSuccessCallback(res) {
            kony.print("getMilestoneSuccessCallback data : " + JSON.stringify(res));
            if (res.length > 0) {
                if (boTallyMeetingReport.isfromTallyReportFlow) {
                    for (var i in res) {
                        var v = res[i];
                        boTallyMeetingReport.Section3NumOfMembersReached5 = kony.sync.getString(v.FivePercent);
                        boTallyMeetingReport.Section3NumOfMembersReached10 = kony.sync.getString(v.TenPercent);
                        boTallyMeetingReport.Section3NumOfMembersReachedWeighGoal = kony.sync.getString(v.Goal);
                        boTallyMeetingReport.Section3NumOfMembersReachedLifetime = kony.sync.getString(v.Lifetime);
                    }
                } else {
                    for (var i in res) {
                        var v = res[i];
                        var MilestoneID = kony.sync.getString(v.MilestoneID);
                        // alert("MilestoneID  "+MilestoneID);
                        if (MilestoneID == "26") {
                            boTallyMeetingReport.Section3NumOfMembersReached5 = boTallyMeetingReport.Section3NumOfMembersReached5 + 1;
                        } else if (MilestoneID == "2") {
                            boTallyMeetingReport.Section3NumOfMembersReached10 = boTallyMeetingReport.Section3NumOfMembersReached10 + 1;
                        } else if (MilestoneID == "3") {
                            boTallyMeetingReport.Section3NumOfMembersReachedWeighGoal = boTallyMeetingReport.Section3NumOfMembersReachedWeighGoal + 1;
                        } else if (MilestoneID == "13") {
                            boTallyMeetingReport.Section3NumOfMembersReachedLifetime = boTallyMeetingReport.Section3NumOfMembersReachedLifetime + 1;
                        }
                    }
                }
            }
            boTallyMeetingReport.GetSalesPrepayment();
            boTallyMeetingReport.GetProductSales();
            boTallyMeetingReport.GetProductReturns();
            boTallyMeetingReport.GetEmployeeSales();
            boTallyMeetingReport.GetSalesTax();
            boTallyMeetingReport.getSalePayment(callback);
        }
        kony.print("strWhr is : " + strWhere);
        kony.sync.single_select_execute(kony.sync.getDBName(), strWhere, null, getMilestoneSuccessCallback, eventErrorCallBack);
        //com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.find(strWhere, getMilestoneSuccessCallback, eventErrorCallBack);
    },
    GetSalesPrepayment: function() {
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        // Commented by Praveen Kalal for starter Fee Implementation
        //*** MEG-7230 
        var whereClause = "";
        if (IsAWSLocationEnabled()) {
            whereClause = "select (CalcTotal-SubsidyAmount) as CalcTotal,Quantity,UnitPriceTax from SaleItems s inner join SaleDetails d on s.SaleTransactnId = d.SaleTransactnId where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' and d.IsServiceProvider = 0 and s.ProductSku not in(" + convertArrayToString(getSKUList('QueryCombination')) + ") and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' and (s.ProductType <> 'TangibleProduct' and s.ProductSku in (Select SKU from SKURuleEngine where CountryID = '" + getCountryID() + "'))";
        } else {
            whereClause = "select CalcTotal,Quantity,UnitPriceTax from SaleItems s inner join SaleDetails d on s.SaleTransactnId = d.SaleTransactnId where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' and d.IsServiceProvider = 0 and s.ProductSku not in(" + convertArrayToString(getSKUList('QueryCombination')) + ") and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' and (s.ProductType <> 'TangibleProduct' and s.ProductSku in (Select SKU from SKURuleEngine where CountryID = '" + getCountryID() + "'))";
        }
        // Ended  by Praveen Kalal for starter Fee Implementation
        kony.print("::GetSalesPrepayment:: whereClause = " + whereClause);
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, GetSalesPrepaymentCallback, eventErrorCallBack);
        //  com.kony.WeightWatchers.MemberSyncScope.SaleItems.find(whereClause, GetSalesPrepaymentCallback, eventErrorCallBack)
        function GetSalesPrepaymentCallback(res) {
            // alert("GetSalesPrepayment");
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    boTallyMeetingReport.Section4PrepaymentSales += parseFloat(kony.sync.getString(v.CalcTotal));
                    kony.print("::HERE::boTallyMeetingReport.Section4PrepaymentSales=" + boTallyMeetingReport.Section4PrepaymentSales);
                }
            }
        }
    },
    GetProductSales: function() {
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        // var whereClause = "select CalcTotal,UnitPriceTax from SaleItems s inner join SaleDetails d on s.SaleTransactnId=d.SaleTransactnId where d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%"+dateQuery+"%' and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' and d.IsServiceProvider = 0 and s.ProducType = 'TangibleProduct' ";//group by CalcTotal";
        var whereClause = "select CalcTotal,UnitPriceTax, Quantity from SaleItems s inner join SaleDetails d on s.SaleTransactnId=d.SaleTransactnId where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' " + "and d.IsServiceProvider = 0 and (s.ProductType = 'TangibleProduct' or s.ProductSku not in (Select SKU from SKURuleEngine where CountryID = '" + getCountryID() + "'))"; //group by CalcTotal";*/
        kony.print("GetProductSales=" + whereClause);
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, GetProductSalesCallback, eventErrorCallBack);
        // com.kony.WeightWatchers.MemberSyncScope.SaleItems.find(whereClause, GetProductSalesCallback, eventErrorCallBack)
        function GetProductSalesCallback(res) {
            //alert("GetProductSales");
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    boTallyMeetingReport.Section4ProductSales += parseFloat(parseFloat(kony.sync.getString(v.CalcTotal)));
                }
            }
        }
    },
    GetProductReturns: function() {
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        var whereClause = "select s.TotalSalePrice, s.TotalSaleTax from SaleDetails s where s.CountryID = '" + getCountryID() + "' AND s.MeetingOccurID='" + meetingQuery + "' and s.MeetingDate like '%" + dateQuery + "%' and s.IsReturn = 1 "; //group by s.TotalSalePrice ";
        kony.print("::GetProductReturns:: whereClause = " + whereClause);
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, GetProductReturnsCallback, eventErrorCallBack);
        //   com.kony.WeightWatchers.MemberSyncScope.SaleDetails.find(whereClause, GetProductReturnsCallback, eventErrorCallBack)
        function GetProductReturnsCallback(res) {
            // alert("GetProductReturns");
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    boTallyMeetingReport.Section4ProductReturns += (parseFloat(kony.sync.getString(v.TotalSalePrice)) + parseFloat(kony.sync.getString(v.TotalSaleTax)));
                }
            }
        }
    },
    GetEmployeeSales: function() {
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        //Ami    var whereClause = "select s.TotalSalePrice,s.TotalSaleTax from SaleDetails s inner join SaleItems d on s.SaleTransactnId=d.SaleTransactnId where s.MeetingOccurID='" + glbMeetingNum + "' and s.IsServiceProvider = 1 ";//group by s.TotalSaleTax,s.TotalSalePrice  ";
        whereClause = "select TotalSalePrice from SaleDetails  where CountryID = '" + getCountryID() + "' AND MeetingOccurID='" + meetingQuery + "' and MeetingDate like '%" + dateQuery + "%' and IsServiceProvider = 1 "; //group by s.TotalSaleTax,s.TotalSalePrice  ";
        kony.print("::GetEmployeeSales:: whereClause = " + whereClause);
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, GetEmployeeSalesCallback, eventErrorCallBack);
        //  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.find(whereClause, GetEmployeeSalesCallback, eventErrorCallBack)
        function GetEmployeeSalesCallback(res) {
            // alert("GetEmployeeSales");
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    boTallyMeetingReport.Section4EmployeeSales += parseFloat(kony.sync.getString(v.TotalSalePrice)); // + parseFloat(kony.sync.getString(v.TotalSaleTax));
                }
            }
        }
    },
    GetSalesTax: function() {
        //Ami var whereClause = "select s.TotalSaleTax from SaleDetails s inner join SaleItems d on s.SaleTransactnId=d.SaleTransactnId where s.MeetingOccurID='" + glbMeetingNum + "' and d.IsSaleItemVoid <> 1 and s.IsReturn <> 1 ";//group by s.TotalSaleTax";
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        //var whereClause = " select sum(s.UnitPriceTax*s.Quantity) as TotalSaleTax from SaleItems s inner join SaleDetails d on s.SaleTransactnId=d.SaleTransactnId where d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%"+dateQuery+"%' and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' and d.IsServiceProvider = 0 group by s.SaleTransactnId";
        var whereClause = " select sum(s.UnitPriceTax*s.Quantity) as TotalSaleTax from SaleItems s inner join SaleDetails d on s.SaleTransactnId=d.SaleTransactnId where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' group by s.SaleTransactnId";
        kony.print("::GetSalesTax:: whereClause = " + whereClause);
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, GetSalesTaxCallback, eventErrorCallBack);
        //  com.kony.WeightWatchers.MemberSyncScope.SaleDetails.find(whereClause, GetSalesTaxCallback, eventErrorCallBack)
        function GetSalesTaxCallback(res) {
            //  alert("GetSalesTax");
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    if (checkUndefined(v.TotalSaleTax) != "") boTallyMeetingReport.Section4SalesTax += parseFloat(kony.sync.getString(v.TotalSaleTax));
                }
            }
        }
    },
    getSalePayment: function(callback) {
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        var whereClause = "where MeetingId='" + meetingQuery + "' and MeetingDate like '%" + dateQuery + "%'";
        kony.print("::getSalePayment::whereClause=" + whereClause);
        DBTallyMeetingController.find(whereClause, getSalePaymentCallback, eventErrorCallBack)

        function getSalePaymentCallback(res) {
            kony.print("getSalePaymentCallback " + JSON.stringify(res));
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    boTallyMeetingReport.Section5Cash = parseFloat(kony.sync.getString(v.Cash));
                    boTallyMeetingReport.Section5Check = parseFloat(kony.sync.getString(v.Checks));
                    boTallyMeetingReport.Section5CreditCard = parseFloat(kony.sync.getString(v.CreditCard));
                    boTallyMeetingReport.Section5CreditSlipsIssued = parseFloat(kony.sync.getString(v.CreditSlipsIssued));
                    boTallyMeetingReport.Section5CreditSlipsRedeemed = parseFloat(kony.sync.getString(v.CreditSlipsRedeemed));
                    boTallyMeetingReport.Section5DipositeTicket = kony.sync.getString(v.BankDepositSlipNumber);
                    boTallyMeetingReport.Section5DebitCard = parseFloat(kony.sync.getString(v.DebitCardInteract));
                    var diffres = kony.sync.getString(v.DifferenceReason);
                    var reason = "";
                    for (var i in glbTallyDiffReasonArray) {
                        var obj = glbTallyDiffReasonArray[i];
                        if (obj[0] == diffres) reason = obj[1];
                    }
                    if (reason != "") boTallyMeetingReport.Section5Reason = reason;
                    else boTallyMeetingReport.Section5Reason = "";
                    kony.print("--->>>DifferenceReason String : " + reason);
                    /*if (diffres == 5){ 
                    boTallyMeetingReport.Section5Reason = "Unknown Difference"; }
                    else if (diffres == 6){ 
                    boTallyMeetingReport.Section5Reason = "Credit Cards"; }
                        // else if(diffres == 3)
                        //{ boTallyMeetingReport.Section5Reason= "Bank Change";}
                    else if (diffres == 9){
                    boTallyMeetingReport.Section5Reason = "Member Checks"; }
                        //   else if(diffres == 5)
                        //  { boTallyMeetingReport.Section5Reason= "Unknown Difference";}
                    else if (diffres == 7)
                    { boTallyMeetingReport.Section5Reason = "WW Credit Slip"; }
                        //  else if(diffres == 7)
                        //{ boTallyMeetingReport.Section5Reason= "WW Credit Slip";}
                    else if (diffres == 3)
                    { boTallyMeetingReport.Section5Reason = "Bank Change"; }
                        //   else if(diffres == 9)
                        // { boTallyMeetingReport.Section5Reason= "Member Checks";}
                    else
                    { boTallyMeetingReport.Section5Reason = ""; }
                    */
                }
            }
            if (IsAWSLocationEnabled()) {
                boTallyMeetingReport.getBankDepositDetails(callback, parseInt(kony.sync.getString(res[0]["Id"]))); //** Added to get meeting specific deposit data
            } else {
                boTallyMeetingReport.getFinalResult(callback);
            }
        }
    },
    getBankDepositDetails: function(callback, id) {
        //** Added to get meeting specific bank deposit slip data.
        var tallyMeetingId = id;
        var whereClause = "where TallyMeetingId = '" + tallyMeetingId + "'";
        kony.print("::getBankDepositDetails::whereClause=" + whereClause);
        DBBankDepositDetailsController.find(whereClause, getBankDepositDetailsCallback, eventErrorCallBack);

        function getBankDepositDetailsCallback(res) {
            kony.print("SJ getBankDepositDetailsCallback = " + JSON.stringify(res));
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    if (i == 0) {
                        boTallyMeetingReport.Section5DipositDate1 = kony.sync.getString(v.DepositDate).split("T")[0];
                        boTallyMeetingReport.Section5DipositSlip1 = kony.sync.getString(v.DepositNumber);
                        boTallyMeetingReport.Section5DipositAmount1 = parseFloat(kony.sync.getString(v.DepositAmount));
                    } else if (i == 1) {
                        boTallyMeetingReport.Section5DipositDate2 = kony.sync.getString(v.DepositDate).split("T")[0];
                        boTallyMeetingReport.Section5DipositSlip2 = kony.sync.getString(v.DepositNumber);
                        boTallyMeetingReport.Section5DipositAmount2 = parseFloat(kony.sync.getString(v.DepositAmount));
                    } else if (i == 2) {
                        boTallyMeetingReport.Section5DipositDate3 = kony.sync.getString(v.DepositDate).split("T")[0];
                        boTallyMeetingReport.Section5DipositSlip3 = kony.sync.getString(v.DepositNumber);
                        boTallyMeetingReport.Section5DipositAmount3 = parseFloat(kony.sync.getString(v.DepositAmount));
                    }
                }
            }
            boTallyMeetingReport.getFinalResult(callback);
        }
    },
    getFinalResult: function(callback) {
        //   Section4PrepaymentSales=0;
        // alert("getFinalResult "+Section2SumOfTotalCurrentAttd);
        var Section2TotalPaidAttandace = boTallyMeetingReport.Section2NumOfTotalCurrentAttd + boTallyMeetingReport.Section2NumOfMissedWKCurrAttd + boTallyMeetingReport.Section2NumOfEnrollPayg + boTallyMeetingReport.Section2NumOfPaidLTAttandance + boTallyMeetingReport.Section2NumOfPrepaidAttd + boTallyMeetingReport.Section2NumOfMonthlyPassLTAttd + boTallyMeetingReport.Section2NumOfNewEnrollments + boTallyMeetingReport.Section2NumOfContEnrollments + boTallyMeetingReport.Section2NumOfPrepaidBridgeSeries + boTallyMeetingReport.Section2NumOfPrepaid;
        var Section2TotalMemberFees = boTallyMeetingReport.Section2SumOfTotalCurrentAttd + boTallyMeetingReport.Section2SumOfMissedWKCurrAttd + boTallyMeetingReport.Section2SumOfEnrollPayg + boTallyMeetingReport.Section2SumOfPaidLTAttandance + boTallyMeetingReport.Section2SumOfNewEnrollments + boTallyMeetingReport.Section2SumOfContEnrollments + boTallyMeetingReport.Section2SumOfPaidLT + boTallyMeetingReport.Section2SumOfFreeLT + boTallyMeetingReport.Section2SumOfPrepaid;
        Section2TotalMemberFees = parseFloat(Section2TotalMemberFees).toFixed(2);
        var Section2TotalMemberAttandace = boTallyMeetingReport.Section2NumOfTotalCurrentAttd + boTallyMeetingReport.Section2NumOfMissedWKCurrAttd + boTallyMeetingReport.Section2NumOfEnrollPayg + boTallyMeetingReport.Section2NumOfPaidLTAttandance + boTallyMeetingReport.Section2NumOfPrepaidAttd + boTallyMeetingReport.Section2NumOfFreeLTAttandance + boTallyMeetingReport.Section2NumOfMonthlyPassLTAttd + boTallyMeetingReport.Section2NumEmpAttendance + boTallyMeetingReport.Section2NumOfNewEnrollments + boTallyMeetingReport.Section2NumOfContEnrollments + boTallyMeetingReport.Section2NumOfPaidLT + boTallyMeetingReport.Section2NumOfFreeLT + boTallyMeetingReport.Section2NumOfPrepaidBridgeSeries + boTallyMeetingReport.Section2NumOfPrepaid; //** Updated to fix total member count issue
        kony.print("Section2TotalMemberAttandace " + Section2TotalMemberAttandace);
        var Section4TotalSales = parseFloat(Section2TotalMemberFees) + parseFloat(boTallyMeetingReport.Section4PrepaymentSales) + parseFloat(boTallyMeetingReport.Section4ProductSales) - parseFloat(boTallyMeetingReport.Section4ProductReturns) + parseFloat(boTallyMeetingReport.Section4EmployeeSales) + parseFloat(boTallyMeetingReport.Section4SalesTax);
        Section4TotalSales = parseFloat(Section4TotalSales).toFixed(2);
        var Section5BankDeposit = (in_array(deviceLocale, Countries["CA"])) ? (boTallyMeetingReport.Section5Cash) : (boTallyMeetingReport.Section5Cash + boTallyMeetingReport.Section5Check);
        Section5BankDeposit = parseFloat(Section5BankDeposit).toFixed(2);
        var Section5TotalPayment = (in_array(deviceLocale, Countries["CA"])) ? (parseFloat(Section5BankDeposit) + boTallyMeetingReport.Section5DebitCard + boTallyMeetingReport.Section5CreditCard - boTallyMeetingReport.Section5CreditSlipsIssued + boTallyMeetingReport.Section5CreditSlipsRedeemed) : (parseFloat(Section5BankDeposit) + boTallyMeetingReport.Section5CreditCard - boTallyMeetingReport.Section5CreditSlipsIssued + boTallyMeetingReport.Section5CreditSlipsRedeemed);
        Section5TotalPayment = parseFloat(Section5TotalPayment).toFixed(2);
        var Section6OverUnder = (parseFloat(Section5TotalPayment) - parseFloat(Section4TotalSales)).toFixed(2);
        var Section2TotalSubsidyAmt = parseFloat(boTallyMeetingReport.Section2SubsidyOfNewEnrollments) + parseFloat(boTallyMeetingReport.Section2SubsidyOfContEnrollments) + parseFloat(boTallyMeetingReport.Section2SubsidyOfPaidLT) + parseFloat(boTallyMeetingReport.Section2SubsidyOfFreeLT) + parseFloat(boTallyMeetingReport.Section2SubsidyOfPrepaid) + parseFloat(boTallyMeetingReport.Section2SubsidyOfPrepaidBridgeSeries);
        Section2TotalSubsidyAmt = parseFloat(Section2TotalSubsidyAmt).toFixed(2); //** Added to fix total subsidy amt issue
        kony.print("Section2TotalSubsidyAmt " + Section2TotalSubsidyAmt);
        boTallyMeetingReport.Section2TotalMemberAttandace = Section2TotalMemberAttandace;
        boTallyMeetingReport.Section2TotalPaidAttandace = Section2TotalPaidAttandace;
        boTallyMeetingReport.Section2TotalMemberFees = Section2TotalMemberFees;
        boTallyMeetingReport.Section4TotalSales = Section4TotalSales;
        boTallyMeetingReport.Section5BankDeposit = Section5BankDeposit;
        boTallyMeetingReport.Section5TotalPayment = Section5TotalPayment;
        boTallyMeetingReport.Section6OverUnder = Section6OverUnder;
        boTallyMeetingReport.Section2TotalSubsidyAmt = Section2TotalSubsidyAmt;
        kony.print("TotalPaidAttandace==" + Section2TotalPaidAttandace + "======================TotalMemberAttandace=====" + TotalMemberAttandace);
        var resultObj = {
            "TallyRegion": boTallyMeetingReport.TallyRegion,
            "TallyLocationName": boTallyMeetingReport.TallyLocationName,
            "TallyEmployees": boTallyMeetingReport.TallyEmployees,
            "Section2NumOfTotalCurrentAttd": boTallyMeetingReport.Section2NumOfTotalCurrentAttd,
            "Section2SumOfTotalCurrentAttd": boTallyMeetingReport.Section2SumOfTotalCurrentAttd,
            "Section2NumOfMissedWKCurrAttd": boTallyMeetingReport.Section2NumOfMissedWKCurrAttd,
            "Section2SumOfMissedWKCurrAttd": boTallyMeetingReport.Section2SumOfMissedWKCurrAttd,
            "Section2NumOfEnrollPayg": boTallyMeetingReport.Section2NumOfEnrollPayg,
            "Section2SumOfEnrollPayg": boTallyMeetingReport.Section2SumOfEnrollPayg,
            "Section2NumOfPaidLTAttandance": boTallyMeetingReport.Section2NumOfPaidLTAttandance,
            "Section2SumOfPaidLTAttandance": boTallyMeetingReport.Section2SumOfPaidLTAttandance,
            "Section2NumOfPrepaidAttd": boTallyMeetingReport.Section2NumOfPrepaidAttd,
            "Section2NumOfMonthlyPassLTAttd": boTallyMeetingReport.Section2NumOfMonthlyPassLTAttd, // Added for MEGCA-13
            "Section2TotalPaidAttandace": Section2TotalPaidAttandace,
            "Section2TotalMemberFees": Section2TotalMemberFees,
            "Section2NumOfFreeLTAttandance": boTallyMeetingReport.Section2NumOfFreeLTAttandance,
            "Section2TotalMemberAttandace": Section2TotalMemberAttandace,
            "Section2TotalSubsidyAmt": Section2TotalSubsidyAmt,
            "Section2PreRegMemberCount": boTallyMeetingReport.Section2PreRegMemberCount, // **MEG 7313
            "Section2NumOfNewEnrollments": boTallyMeetingReport.Section2NumOfNewEnrollments,
            "Section2SumOfNewEnrollments": boTallyMeetingReport.Section2SumOfNewEnrollments,
            "Section2SubsidyOfNewEnrollments": boTallyMeetingReport.Section2SubsidyOfNewEnrollments,
            "Section2NumOfContEnrollments": boTallyMeetingReport.Section2NumOfContEnrollments,
            "Section2SumOfContEnrollments": boTallyMeetingReport.Section2SumOfContEnrollments,
            "Section2SubsidyOfContEnrollments": boTallyMeetingReport.Section2SubsidyOfContEnrollments,
            "Section2NumOfPaidLT": boTallyMeetingReport.Section2NumOfPaidLT,
            "Section2SumOfPaidLT": boTallyMeetingReport.Section2SumOfPaidLT,
            "Section2SubsidyOfPaidLT": boTallyMeetingReport.Section2SubsidyOfPaidLT,
            "Section2NumOfFreeLT": boTallyMeetingReport.Section2NumOfFreeLT,
            "Section2SumOfFreeLT": boTallyMeetingReport.Section2SumOfFreeLT,
            "Section2SubsidyOfFreeLT": boTallyMeetingReport.Section2SubsidyOfFreeLT,
            "Section2NumOfPrepaid": boTallyMeetingReport.Section2NumOfPrepaid,
            "Section2SumOfPrepaid": boTallyMeetingReport.Section2SumOfPrepaid,
            "Section2SubsidyOfPrepaid": boTallyMeetingReport.Section2SubsidyOfPrepaid,
            "Section2NumOfPrepaidBridgeSeries": boTallyMeetingReport.Section2NumOfPrepaidBridgeSeries,
            "Section2SumOfPrepaidBridgeSeries": boTallyMeetingReport.Section2SumOfPrepaidBridgeSeries,
            "Section2SubsidyOfPrepaidBridgeSeries": boTallyMeetingReport.Section2SubsidyOfPrepaidBridgeSeries,
            "Section3NumPrePaidCoupons": boTallyMeetingReport.Section3NumPrePaidCoupons,
            "Section3MembersAttMeeting": (!in_array(deviceLocale, Countries["CA"])) ? Section2TotalMemberAttandace : boTallyMeetingReport.Section3MembersAttMeeting,
            //"Section3MembersAttMeeting": boTallyMeetingReport.Section3MembersAttMeeting,
            //"Section3MembersAttMeeting": Section2TotalMemberAttandace,
            "Section3NumOfMembersReached5": boTallyMeetingReport.Section3NumOfMembersReached5,
            "Section3NumOfMembersReached10": boTallyMeetingReport.Section3NumOfMembersReached10,
            "Section3NumOfMembersReachedWeighGoal": boTallyMeetingReport.Section3NumOfMembersReachedWeighGoal,
            "Section3NumOfMembersReachedLifetime": boTallyMeetingReport.Section3NumOfMembersReachedLifetime,
            "Section3NumMonthlyPassSold": boTallyMeetingReport.Section3NumMonthlyPassSold,
            "Section3Num3MonthLTCPassSold": boTallyMeetingReport.Section3Num3MonthLTCPassSold, //MEG-6955
            "Section3NumThreeMPsLTCActivationSold": boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold, //MEG-6955
            "Section3Num20weekPassSold": boTallyMeetingReport.Section3Num20weekPassSold, // MEGCA-8
            "Section3Num6MonthPassSold": boTallyMeetingReport.Section3Num6MonthPassSold, // MEGCA-301
            "Section3Num6MonthLTCPassSold": boTallyMeetingReport.Section3Num6MonthLTCPassSold, //MEG-6140
            "Section3NumSixMPsLTCActivationSold": boTallyMeetingReport.Section3NumSixMPsLTCActivationSold, //MEG-6140
            "Section3NumMPsActivationSold": boTallyMeetingReport.Section3NumMPsActivationSold, // MEG - 5414
            "Section3NumThreeMPsActivationSold": boTallyMeetingReport.Section3NumThreeMPsActivationSold,
            "Section3NumSixMPsActivationSold": boTallyMeetingReport.Section3NumSixMPsActivationSold,
            "Section3NumOfMembersWeightLossMeeting": boTallyMeetingReport.Section3NumOfMembersWeightLossMeeting,
            "Section3SumOfMembersWeightLossMeeting": boTallyMeetingReport.Section3SumOfMembersWeightLossMeeting,
            "Section3Num3MonthPassSold": boTallyMeetingReport.Section3Num3MonthPassSold,
            "Section4PrepaymentSales": boTallyMeetingReport.Section4PrepaymentSales,
            "Section4ProductSales": boTallyMeetingReport.Section4ProductSales,
            "Section4ProductReturns": boTallyMeetingReport.Section4ProductReturns,
            "Section4EmployeeSales": boTallyMeetingReport.Section4EmployeeSales,
            "Section4SalesTax": boTallyMeetingReport.Section4SalesTax,
            "Section4TotalSales": Section4TotalSales,
            "Section5Cash": boTallyMeetingReport.Section5Cash,
            "Section5Check": boTallyMeetingReport.Section5Check,
            "Section5BankDeposit": Section5BankDeposit,
            "Section5CreditCard": boTallyMeetingReport.Section5CreditCard,
            "Section5CreditSlipsIssued": boTallyMeetingReport.Section5CreditSlipsIssued,
            "Section5CreditSlipsRedeemed": boTallyMeetingReport.Section5CreditSlipsRedeemed,
            "Section5DebitCard": boTallyMeetingReport.Section5DebitCard,
            "Section5Reason": boTallyMeetingReport.Section5Reason,
            "Section5DipositeTicket": boTallyMeetingReport.Section5DipositeTicket,
            "Section5TotalPayment": Section5TotalPayment,
            "Section6OverUnder": Section6OverUnder,
            "Section2NumEmpAttendance": boTallyMeetingReport.Section2NumEmpAttendance,
            "Section5DipositDate1": boTallyMeetingReport.Section5DipositDate1,
            "Section5DipositSlip1": boTallyMeetingReport.Section5DipositSlip1,
            "Section5DipositAmount1": boTallyMeetingReport.Section5DipositAmount1,
            "Section5DipositDate2": boTallyMeetingReport.Section5DipositDate2,
            "Section5DipositSlip2": boTallyMeetingReport.Section5DipositSlip2,
            "Section5DipositAmount2": boTallyMeetingReport.Section5DipositAmount2,
            "Section5DipositDate3": boTallyMeetingReport.Section5DipositDate3,
            "Section5DipositSlip3": boTallyMeetingReport.Section5DipositSlip3,
            "Section5DipositAmount3": boTallyMeetingReport.Section5DipositAmount3,
        }
        kony.print("Final result data==" + JSON.stringify(resultObj));
        callback.call(null, true, resultObj);
        //boTallyMeetingReport.clearTallyVariables();
    },
    clearTallyVariables: function() {
        //Report Tally Clear Varibles
        boTallyMeetingReport.isfromTallyReportFlow = false;
        boTallyMeetingReport.MeetingDate = "";
        boTallyMeetingReport.MeetingOccrID = 0;
        boTallyMeetingReport.TallyRegion = "";
        boTallyMeetingReport.TallyEmployees = [];
        boTallyMeetingReport.TallyLocationName = "";
        boTallyMeetingReport.Section2NumOfTotalCurrentAttd = 0;
        boTallyMeetingReport.Section2SumOfTotalCurrentAttd = 0;
        boTallyMeetingReport.Section2NumOfMissedWKCurrAttd = 0;
        boTallyMeetingReport.Section2SumOfMissedWKCurrAttd = 0;
        boTallyMeetingReport.Section2NumOfEnrollPayg = 0;
        boTallyMeetingReport.Section2SumOfEnrollPayg = 0;
        boTallyMeetingReport.Section2NumOfPaidLTAttandance = 0;
        boTallyMeetingReport.Section2SumOfPrepaidAttd = 0;
        boTallyMeetingReport.Section2NumOfPrepaidAttd = 0;
        boTallyMeetingReport.Section2NumOfMonthlyPassLTAttd = 0; // Added for MEGCA-13
        boTallyMeetingReport.Section2TotalPaidAttandace = 0;
        boTallyMeetingReport.Section2TotalMemberFees = 0;
        boTallyMeetingReport.Section2NumOfFreeLTAttandance = 0;
        boTallyMeetingReport.Section2SumOfPaidLTAttandance = 0;
        boTallyMeetingReport.Section2TotalMemberAttandace = 0;
        boTallyMeetingReport.Section4PrepaymentSales = 0;
        boTallyMeetingReport.Section4ProductSales = 0;
        boTallyMeetingReport.Section4ProductReturns = 0;
        boTallyMeetingReport.Section4EmployeeSales = 0;
        boTallyMeetingReport.Section4SalesTax = 0;
        boTallyMeetingReport.Section4TotalSales = 0;
        boTallyMeetingReport.Section5Cash = 0;
        boTallyMeetingReport.Section5Check = 0;
        boTallyMeetingReport.Section5DipositeTicket = "";
        boTallyMeetingReport.Section5CreditCard = 0;
        boTallyMeetingReport.Section5CreditSlipsIssued = 0;
        boTallyMeetingReport.Section5CreditSlipsRedeemed = 0;
        boTallyMeetingReport.Section5DebitCard = 0;
        boTallyMeetingReport.Section5Reason = "";
        boTallyMeetingReport.Section5BankDeposit = 0;
        boTallyMeetingReport.Section5TotalPayment = 0;
        boTallyMeetingReport.Section6OverUnder = 0;
        boTallyMeetingReport.Section3NumPrePaidCoupons = 0;
        boTallyMeetingReport.Section3MembersAttMeeting = 0;
        boTallyMeetingReport.Section3NumOfMembersReached5 = 0;
        boTallyMeetingReport.Section3NumOfMembersReached10 = 0;
        boTallyMeetingReport.Section3NumOfMembersReachedWeighGoal = 0;
        boTallyMeetingReport.Section3NumOfMembersReachedLifetime = 0;
        boTallyMeetingReport.Section3NumMonthlyPassSold = 0;
        boTallyMeetingReport.Section3Num3MonthPassSold = 0;
        boTallyMeetingReport.Section3Num20weekPassSold = 0; // MEGCA-8
        boTallyMeetingReport.Section3Num6MonthPassSold = 0; // MEGCA-301
        boTallyMeetingReport.Section3Num3MonthLTCPassSold = 0; //MEG-6955
        boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold = 0; //MEG-6955
        boTallyMeetingReport.Section3Num6MonthLTCPassSold = 0;
        boTallyMeetingReport.Section3NumSixMPsLTCActivationSold = 0;
        boTallyMeetingReport.Section3NumMPsActivationSold = 0;
        boTallyMeetingReport.Section3NumThreeMPsActivationSold = 0;
        boTallyMeetingReport.Section3NumSixMPsActivationSold = 0;
        boTallyMeetingReport.Section3NumOfMembersWeightLossMeeting = 0;
        boTallyMeetingReport.Section3SumOfMembersWeightLossMeeting = 0;
        boTallyMeetingReport.Section2NumEmpAttendance = 0;
        boTallyMeetingReport.Section2NumOfNewEnrollments = 0;
        boTallyMeetingReport.Section2SumOfNewEnrollments = 0;
        boTallyMeetingReport.Section2SubsidyOfNewEnrollments = 0;
        boTallyMeetingReport.Section2NumOfContEnrollments = 0;
        boTallyMeetingReport.Section2SumOfContEnrollments = 0;
        boTallyMeetingReport.Section2SubsidyOfContEnrollments = 0;
        boTallyMeetingReport.Section2NumOfPaidLT = 0;
        boTallyMeetingReport.Section2SumOfPaidLT = 0;
        boTallyMeetingReport.Section2SubsidyOfPaidLT = 0;
        boTallyMeetingReport.Section2NumOfFreeLT = 0;
        boTallyMeetingReport.Section2SumOfFreeLT = 0;
        boTallyMeetingReport.Section2SubsidyOfFreeLT = 0;
        boTallyMeetingReport.Section2NumOfPrepaid = 0;
        boTallyMeetingReport.Section2SumOfPrepaid = 0;
        boTallyMeetingReport.Section2SubsidyOfPrepaid = 0;
        boTallyMeetingReport.Section2NumOfPrepaidBridgeSeries = 0;
        boTallyMeetingReport.Section2SumOfPrepaidBridgeSeries = 0;
        boTallyMeetingReport.Section2SubsidyOfPrepaidBridgeSeries = 0;
        boTallyMeetingReport.Section2NumOfEmployee = 0;
        boTallyMeetingReport.Section2SumOfEmployee = 0;
        boTallyMeetingReport.Section2SubsidyOfEmployee = 0;
        boTallyMeetingReport.Section2TotalSubsidyAmt = 0;
        boTallyMeetingReport.Section5DipositDate1 = "";
        boTallyMeetingReport.Section5DipositSlip1 = "";
        boTallyMeetingReport.Section5DipositAmount1 = 0;
        boTallyMeetingReport.Section5DipositDate2 = "";
        boTallyMeetingReport.Section5DipositSlip2 = "";
        boTallyMeetingReport.Section5DipositAmount2 = 0;
        boTallyMeetingReport.Section5DipositDate3 = "";
        boTallyMeetingReport.Section5DipositSlip3 = "";
        boTallyMeetingReport.Section5DipositAmount3 = 0;
    },
    removeCreateTallySummary: function(callback) {
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        var whrClause = " where MeetingOccurrenceID  = " + glbMeetingNum + " and MeetingDate like '%" + dateQuery + "%'";
        var deleteCount = 0;

        function successGetPK(res) {
            if (res.length > 0) {
                kony.print("in successGetPK of deleteInsertSummaryDataSuccessCallBack ===>" + JSON.stringify(res));
                deleteCount = res.length;
                kony.print("in successGetPK of deleteInsertSummaryDataSuccessCallBack deleteCount ===>" + deleteCount);
                for (var i in res) {
                    kony.print("in successGetPK of deleteInsertSummaryDataSuccessCallBack row ===>" + JSON.stringify(res[i]));
                    com.kony.WeightWatchers.TallySyncScope.TallySummary.removeDeviceInstanceByPK(res[i].Id, deleteInsertSummaryDataSuccessCallBack, eventErrorCallBack);
                }
            } else {
                boTallyMeetingReport.createTallySummary(callback);
            }

            function deleteInsertSummaryDataSuccessCallBack() {
                deleteCount--;
                kony.print("in deleteInsertSummaryDataSuccessCallBack ===>" + deleteCount);
                if (deleteCount === 0) boTallyMeetingReport.createTallySummary(callback);
            }
        }
        DBTallySummaryController.find(whrClause, successGetPK, eventErrorCallBack);
    },
    createTallySummary: function(callback) {
        boTallyMeetingCashout.selectMaxIdFromTable("TallySummary", createTallySummaryCallback);
        kony.print("createTallySummary::boTallyMeetingReport=" + JSON.stringify(boTallyMeetingReport));

        function createTallySummaryCallback(res) {
            var Id = res;
            boTallyMeetingReport.TallySummaryobj = {
                "Id": Id,
                "MeetingOccurrenceID": glbMeetingNum,
                "MeetingDate": glbMeetingDate,
                "Coupons": boTallyMeetingReport.Section3NumPrePaidCoupons,
                "Staying": (!in_array(deviceLocale, Countries["CA"])) ? boTallyMeetingReport.Section2TotalMemberAttandace : boTallyMeetingReport.Section3MembersAttMeeting,
                "TenPercent": boTallyMeetingReport.Section3NumOfMembersReached10,
                "FivePercent": boTallyMeetingReport.Section3NumOfMembersReached5,
                "Goal": boTallyMeetingReport.Section3NumOfMembersReachedWeighGoal,
                "Lifetime": boTallyMeetingReport.Section3NumOfMembersReachedLifetime,
                "Losing": boTallyMeetingReport.Section3NumOfMembersWeightLossMeeting,
                "TotalLoss": boTallyMeetingReport.Section3SumOfMembersWeightLossMeeting,
                "PreRegMemberCount": IsInfoSessionMeeting() ? boTallyMeetingReport.Section2PreRegMemberCount : 0, // **MEG 7313
                "MonthlyPassesSold": boTallyMeetingReport.Section3NumMonthlyPassSold + boTallyMeetingReport.Section3Num3MonthPassSold + boTallyMeetingReport.Section3Num6MonthPassSold + boTallyMeetingReport.Section3Num6MonthLTCPassSold + boTallyMeetingReport.Section3Num3MonthLTCPassSold,
                "MonthlyPassesActivated": boTallyMeetingReport.Section3NumMPsActivationSold + boTallyMeetingReport.Section3NumThreeMPsActivationSold + boTallyMeetingReport.Section3NumSixMPsActivationSold + boTallyMeetingReport.Section3NumSixMPsLTCActivationSold + boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold,
                "OneMonthPassesActivated": boTallyMeetingReport.Section3NumMPsActivationSold,
                "ThreeMonthsPassesActivated": boTallyMeetingReport.Section3NumThreeMPsActivationSold,
                "ThreeMonthsPassesLTCActivated": boTallyMeetingReport.Section3NumThreeMPsLTCActivationSold,
                "SixMonthsPassesActivated": boTallyMeetingReport.Section3NumSixMPsActivationSold,
                "SixMonthsPassesLTCActivated": boTallyMeetingReport.Section3NumSixMPsLTCActivationSold,
                "TwentyWeekPassesSold": boTallyMeetingReport.Section3Num20weekPassSold,
                "EmployeeAttendance": boTallyMeetingReport.Section2NumEmpAttendance
            }
            boMonitor.log("Tally Summary", "btnSubmitTally", boTallyMeetingReport.TallySummaryobj, FlowForMonitor.Tally);
            kony.print("createMeetingsInstance==>> " + JSON.stringify(boTallyMeetingReport.TallySummaryobj));

            function createTallySummarySuccessCallback(res) {
                boTallyMeetingReport.TallySummaryobj = {};
                kony.print("MeetingsInstance created successfully");
                kony.print(getMessageTemplate("Create MeetingsInstance Success", "MeetingsInstance"), "info");
                boTallyMeetingReport.createTallyAttendance(callback);
            }
            DBTallySummaryController.create(boTallyMeetingReport.TallySummaryobj, createTallySummarySuccessCallback, eventErrorCallBack);
        }
    },
    createTallyAttendance: function(callback) {
        boTallyMeetingCashout.selectMaxIdFromTable("TallyMeetingFee", function(resID) {
            kony.print("boTallyMeetingReport.Section2NumOfEnrollPayg " + boTallyMeetingReport.Section2NumOfEnrollPayg);
            kony.print("boTallyMeetingReport.Section2SumOfEnrollPayg " + boTallyMeetingReport.Section2SumOfEnrollPayg);
            kony.print("boTallyMeetingReport.Section2NumOfNewEnrollments " + boTallyMeetingReport.Section2NumOfNewEnrollments + " boTallyMeetingReport.Section2NumOfContEnrollments " + boTallyMeetingReport.Section2NumOfContEnrollments);
            kony.print("boTallyMeetingReport.boTallyMeetingReport.Section2SumOfNewEnrollments  " + boTallyMeetingReport.Section2SumOfNewEnrollments + " boTallyMeetingReport.Section2SumOfContEnrollments " + boTallyMeetingReport.Section2SumOfContEnrollments);
            boTallyMeetingReport.TallyAttendanceAndFeesobj = {
                "id": resID,
                "MeetingOccrID": glbMeetingNum,
                "MeetingDate": glbMeetingDate,
                "CurrentAttNumber": boTallyMeetingReport.Section2NumOfTotalCurrentAttd,
                "CurrentAttAmount": boTallyMeetingReport.Section2SumOfTotalCurrentAttd,
                "MissedAtt": boTallyMeetingReport.Section2NumOfMissedWKCurrAttd,
                "MissedAmount": boTallyMeetingReport.Section2SumOfMissedWKCurrAttd,
                "EnrollAtt": (IsAWSLocationEnabled()) ? (boTallyMeetingReport.Section2NumOfNewEnrollments + boTallyMeetingReport.Section2NumOfContEnrollments) : boTallyMeetingReport.Section2NumOfEnrollPayg, //** MEG 7205
                "EnrollAmount": (IsAWSLocationEnabled()) ? (parseFloat(boTallyMeetingReport.Section2SumOfNewEnrollments) + parseFloat(boTallyMeetingReport.Section2SumOfContEnrollments)) : boTallyMeetingReport.Section2SumOfEnrollPayg, //** MEG 7205
                "PaidLifeAtt": boTallyMeetingReport.Section2NumOfPaidLTAttandance,
                "PaidLifAmount": boTallyMeetingReport.Section2SumOfPaidLTAttandance,
                "PrepaidAtt": (IsAWSLocationEnabled()) ? (boTallyMeetingReport.Section2NumOfPrepaidBridgeSeries + boTallyMeetingReport.Section2NumOfPrepaid) : boTallyMeetingReport.Section2NumOfPrepaidAttd, //** MEG 7205
                "FreeLifAtt": boTallyMeetingReport.Section2NumOfFreeLTAttandance,
                "TotalPaidAtt": boTallyMeetingReport.Section2TotalPaidAttandace,
                "TotalMemberAtt": boTallyMeetingReport.Section2TotalMemberAttandace,
                "TotalMemberFees": (IsAWSLocationEnabled()) ? (parseFloat(boTallyMeetingReport.Section2TotalMemberFees) + parseFloat(boTallyMeetingReport.Section2SumOfPrepaidBridgeSeries)) : boTallyMeetingReport.Section2TotalMemberFees, //**MEG 7252
                "LTPrepaidMember": boTallyMeetingReport.Section2NumOfMonthlyPassLTAttd // Added for MEGCA-13
            }
            boMonitor.log("Tally Meeting Fees", "btnSubmitTally", boTallyMeetingReport.TallyAttendanceAndFeesobj, FlowForMonitor.Tally);
            kony.print("TallyAttendanceAndFeesobj==>> " + JSON.stringify(boTallyMeetingReport.TallyAttendanceAndFeesobj));
            DBTallyMeetingFeeController.create(boTallyMeetingReport.TallyAttendanceAndFeesobj, function(resCreateTallyAttFees) {
                kony.print("TallyMeetingFee created successfully");
                kony.print(getMessageTemplate("Create TallyMeetingFee Success", "TallyAttendanceFees"), "info");
                boTallyMeetingReport.TallyAttendanceAndFeesobj = {};
                boTallyMeetingReport.createTallySales(callback);
            }, eventErrorCallBack);
        });
    },
    createTallySales: function(callback) {
        boTallyMeetingCashout.selectMaxIdFromTable("TallySales", function(resID) {
            boTallyMeetingReport.TallySalesobj = {
                "id": resID,
                "MeetingOccrID": glbMeetingNum,
                "MeetingDate": glbMeetingDate,
                "MemberFees": parseFloat(boTallyMeetingReport.Section2TotalMemberFees).toFixed(2),
                "Prepayment": parseFloat(boTallyMeetingReport.Section4PrepaymentSales).toFixed(2),
                "ProductSales": parseFloat(boTallyMeetingReport.Section4ProductSales).toFixed(2),
                "ProductReturn": parseFloat(boTallyMeetingReport.Section4ProductReturns).toFixed(2),
                "EmployeeSales": parseFloat(boTallyMeetingReport.Section4EmployeeSales).toFixed(2),
                "SalesTax": parseFloat(boTallyMeetingReport.Section4SalesTax).toFixed(2),
                "TotalSales": parseFloat(boTallyMeetingReport.Section4TotalSales).toFixed(2)
            }
            kony.print("boTallyMeetingReport.TallySalesobj==>> " + JSON.stringify(boTallyMeetingReport.TallySalesobj));
            boMonitor.log("Tally Sales", "btnSubmitTally", boTallyMeetingReport.TallySalesobj, FlowForMonitor.Tally, true);
            DBTallySalesController.create(boTallyMeetingReport.TallySalesobj, function(resCreateTallyAttFees) {
                boTallyMeetingReport.TallySalesobj = {};
                kony.print("TallySales created successfully");
                kony.print(getMessageTemplate("Create TallySales Success", "TallySales"), "info");
                boTallyMeetingReport.clearTallyVariables();
                callback.call(null, true);
            }, eventErrorCallBack);
        });
    },
    getLocationNameAndNumber: function(callback) {
        var whereClause = "where locationno='" + glbLocationNum + "'";
        kony.print("::getLocationNameAndNumber::whereClause" + whereClause);
        DBLocationController.find(whereClause, getLocationNameAndNumberCallback, eventErrorCallBack)

        function getLocationNameAndNumberCallback(res) {
            var result = {};
            // alert("Success");
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    result.TallyLocationName = kony.sync.getString(v.displayvalue);
                }
                callback.call(this, result);
            }
        }
    },
    getAllMeetingsForDate: function(meetingDate, callback) {
        //**MEG 7391 Added meeting date codition to show the meeting list
        var dateQuery = supportTime(meetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));
        var daycodeid = new Date(meetingDate).getDay();
        daycodeid = daycodeid + 1;
        kony.print("::getAllMeetingsForDate::daycodeid=" + daycodeid);
        var strWhere = "where locationID = " + glbLocationID + " and DayCodeID = " + daycodeid + " and MeetingDate like '%" + dateQuery + "%'";
        kony.print("::getAllMeetingsForDate::strWhere=" + strWhere);

        function getMtngOccIDOfReportsTalliedMeetingSuccessCallback(res) {
            kony.print("::getMtngOccIDOfReportsTalliedMeetingSuccessCallback===>> " + JSON.stringify(res));
            callback.call(this, res);
        }
        DBMeetingsController.find(strWhere, getMtngOccIDOfReportsTalliedMeetingSuccessCallback, eventErrorCallBack);
    },
    getClosedMeetingInfo: function(meetingdate, mtngoccid, callback) {
        var dateQuery = supportTime(meetingdate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        var whrCodition = " where LocationID ='" + glbLocationID + "' and MeetingDate like '%" + dateQuery + "%' and MeetingOccID='" + mtngoccid + "' and MeetingStatus='Close'";
        kony.print("::getClosedMeetingInfo::==>>whrCodition " + whrCodition);

        function GetMeetingsInstanceClosedSuccessCallback(res) {
            kony.print("::GetMeetingsInstanceClosedSuccessCallback::res = " + JSON.stringify(res));
            if (res.length > 0) callback.call(null, true);
            else callback.call(null, false);
        }
        DBMeetingInsatnaceController.find(whrCodition, GetMeetingsInstanceClosedSuccessCallback, eventErrorCallBack);
    },
    /**
     * This calls the member report services for member at Risk and then sends the result to make result object
     */
    getMemberAtRiskReportService: function(meetingdate, mtngoccid, callback) {
        try {
            meetingdate = supportTime(new Date(meetingdate), "", "yyyy-mm-ddT00:00:00");
            kony.print("::getMemberReportService::meetingdate=" + meetingdate);
            var TallyServices_inputparam = {};
            TallyServices_inputparam["serviceID"] = Services.GetMemberReport;
            TallyServices_inputparam["httpheaders"] = {};
            TallyServices_inputparam["httpconfigs"] = {};
            //** MEG 6493
            if (JsonService) {
                TallyServices_inputparam["httpheaders"] = setRESTHeader();
            } else {
                TallyServices_inputparam["DeviceID"] = gblDeviceID;
                TallyServices_inputparam["AccessToken"] = glbSPAuthToken;
                TallyServices_inputparam["SPID"] = glbEmployeeId;
                TallyServices_inputparam["Source"] = gblSourceVal;
            }
            TallyServices_inputparam["MeetingOccurrenceID"] = mtngoccid.toString();
            TallyServices_inputparam["MeetingDate"] = meetingdate.toString();
            TallyServices_inputparam["LocationID"] = glbLocationID;
            //**End
            kony.print("::getMemberReportService::TallyServices_inputparam = " + JSON.stringify(TallyServices_inputparam));

            function getMemberReportServicesWSCallback(status, responseTally) {
                kony.print("::getMemberReportWSCallback::responseTally=" + JSON.stringify(responseTally));
                boTallyMeetingReport.makeMemberReportResultFromService(status, responseTally, callback);
            }
            TallyServicesHandle = Network.makeServiceCall(TallyServices_inputparam, getMemberReportServicesWSCallback, true); //true to allow offline data access
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    /**
     * This function makes the result object of Member report service
     */
    makeMemberReportResultFromService: function(status, resultsTallyService, callback) {
        /*if (resultsTallyService.MemberReport == undefined) {
            alert(kony.i18n.getLocalizedString("strRiskReportServiceError"));
            callback.call(null, false, {});
            return;
        } else*/
        if (resultsTallyService.MemberReport == undefined || resultsTallyService["MemberReport"].length == 0) { // Empty report
            alertForMessages(kony.i18n.getLocalizedString("strMemberRiskReportNotAva"));
            callback.call(null, false, {});
            return;
        } else {
            var meetingReportResponse_segmentMeetings_temp = [];
            try {
                if (status == 400) {
                    if (resultsTallyService["opstatus"] == 0) {
                        if (resultsTallyService["MemberReport"] && resultsTallyService["MemberReport"].length > 0) { //** MEG 6493
                            for (i in resultsTallyService["MemberReport"]) {
                                var memberObj = resultsTallyService["MemberReport"][i];
                                var email = "";
                                var contactno = "";
                                var currentW = "";
                                var lastmilestone = "";
                                /*if (checkValidString(memberObj.DontContactByEmail) && memberObj.DontContactByEmail == "true") {
                                    email = "--";
                                } else {
                                    email = checkValidString(memberObj.Email) ? memberObj.Email : "--";
                                }
                                if (checkValidString(memberObj.DontContactByPhone) && memberObj.DontContactByPhone == "true") {
                                    contactno = "--";
                                } else {
                                    contactno = checkValidString(memberObj.Phone1) ? memberObj.Phone1 : "--";
                                }*/
                                email = checkValidString(memberObj.Email) ? memberObj.Email : "--";
                                contactno = checkValidString(memberObj.Phone1) ? memberObj.Phone1 : "--";
                                var memberSubscription = setMemberSubType(memberObj.SubscriptionType);
                                if (memberObj.LastAchievedMileStoneID == "0") {
                                    lastmilestone = "--";
                                } else {
                                    lastmilestone = checkUndefined(MiletoneLookupTable[parseInt(memberObj.LastAchievedMileStoneID)]);
                                }
                                currentW = checkValidString(memberObj.CurrentWeight) ? parseFloat(memberObj.CurrentWeight).toFixed(2) : "";
                                meetingReportResponse_segmentMeetings_temp.push({
                                    "lblregno": checkValidString(memberObj.RegistrationNumber) ? memberObj.RegistrationNumber : "",
                                    "lblName": memberObj.FirstName + " " + memberObj.LastName,
                                    "lblSubscription": memberSubscription,
                                    "lblcurrentWeight": currentW,
                                    "lblgoalweight": checkValidString(memberObj.GoalWeight) ? parseFloat(memberObj.GoalWeight).toFixed(2) : "",
                                    "lblmilestone": lastmilestone,
                                    "lblemail": email,
                                    "lblcontact": contactno
                                });
                            }
                        }
                        callback.call(null, true, meetingReportResponse_segmentMeetings_temp);
                    } else {
                        kony.print(resultsTallyService['opstatus']);
                        CommonErrHandler.networkError(resultsTallyService['opstatus'], resultsTallyService);
                    }
                } else if (status == 300) {
                    CommonErrHandler.networkError(status, resultsTallyService);
                }
            } catch (e) {
                GlobalException(e);
            }
        }
    },
    /**
     * This calls the tally services and then sends the result to make result object
     */
    getMeetingTallyService: function(meetingdate, mtngoccid, callback) {
        try {
            meetingdate = supportTime(new Date(meetingdate), "", "yyyy-mm-ddT00:00:00");
            kony.print("::getMeetingTallyService::meetingdate=" + meetingdate);
            //var one = "194556270";
            //var two = "2014-04-26T00:00:00";
            var TallyServices_inputparam = {};
            TallyServices_inputparam["serviceID"] = Services.MeetingTally;
            TallyServices_inputparam["MeetingOccrID"] = mtngoccid.toString();
            TallyServices_inputparam["MeetingDate"] = meetingdate.toString();
            if (JsonService) {
                TallyServices_inputparam["httpheaders"] = setRESTHeader();
            } else {
                TallyServices_inputparam["DeviceID"] = gblDeviceID;
                TallyServices_inputparam["AccessToken"] = glbSPAuthToken;
                TallyServices_inputparam["SPID"] = glbEmployeeId;
                TallyServices_inputparam["HeaderDate"] = "";
                TallyServices_inputparam["Source"] = gblSourceVal;
                TallyServices_inputparam["httpheaders"] = {};
            }
            TallyServices_inputparam["httpconfigs"] = {};
            kony.print("::getMeetingTallyService::TallyServices_inputparam = " + JSON.stringify(TallyServices_inputparam));

            function getTallyServicesWSCallback(status, responseTally) {
                kony.print("::getTallyServicesWSCallback::responseTally=" + JSON.stringify(responseTally));
                boTallyMeetingReport.makeTallyResultFromService(responseTally, callback);
            }
            TallyServicesHandle = Network.makeServiceCall(TallyServices_inputparam, getTallyServicesWSCallback, true); //true to allow offline data access
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    /**
     * This function makes the same result object as made in device tally report so we cab call the same
     */
    makeTallyResultFromService: function(resultsTallyService, callback) {
        kony.print("::TallyMeetingFees= " + resultsTallyService.TallyMeetingFees);
        kony.print("::TallyPayment= " + resultsTallyService.TallyPayment);
        kony.print("::TallySale= " + resultsTallyService.TallySale);
        kony.print("::TallySummary= " + resultsTallyService.TallySummary);
        kony.print("::TallyTimesheet= " + resultsTallyService.TallyTimesheet);
        kony.print("::JSON= ");
        kony.print("::TallyMeetingFees= " + JSON.stringify(resultsTallyService.TallyMeetingFees));
        kony.print("::TallyPayment= " + JSON.stringify(resultsTallyService.TallyPayment));
        kony.print("::TallySale= " + JSON.stringify(resultsTallyService.TallySale));
        kony.print("::TallySummary= " + JSON.stringify(resultsTallyService.TallySummary));
        kony.print("::TallyTimesheet= " + JSON.stringify(resultsTallyService.TallyTimesheet));
        /*Check if service is failed*/
        if (checkIfNetworkIsAvailable()) {
            if (resultsTallyService.TallyMeetingFees == undefined || resultsTallyService.TallyPayment == undefined || resultsTallyService.TallySale == undefined || resultsTallyService.TallySummary == undefined || resultsTallyService.TallyTimesheet == undefined) {
                alertForMessages(kony.i18n.getLocalizedString("strMeetingTallyNotAvail")); // old messgae => strTallyMeetingServiceError
                callback.call(null, false, {});
                return;
            }
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strYourInternetConnection"));
            callback.call(null, false, {});
            return;
        }
        //Get Individual Results
        var TallyMeetingFees = resultsTallyService.TallyMeetingFees[0];
        var TallyPayment = resultsTallyService.TallyPayment[0];
        var TallySale = resultsTallyService.TallySale[0];
        var TallySummary = resultsTallyService.TallySummary[0];
        var TallyTimesheet = (resultsTallyService.TallyTimesheet.length > 0) ? ((resultsTallyService.TallyTimesheet[0].TallyTimesheetReportResponse) ? resultsTallyService.TallyTimesheet[0].TallyTimesheetReportResponse : resultsTallyService.TallyTimesheet) : [];
        var TallyRegion, TallyLocationName;
        kony.print("::TallyMeetingFees::" + JSON.stringify(TallyMeetingFees));
        kony.print("::TallyPayment::" + JSON.stringify(TallyPayment));
        kony.print("::TallySale::" + JSON.stringify(TallySale));
        kony.print("::TallySummary::" + JSON.stringify(TallySummary));
        kony.print("::TallyTimesheet::" + JSON.stringify(TallyTimesheet));
        /*Untallied Meeting - All response empty*/
        if (TallyMeetingFees == undefined && TallyPayment == undefined && TallySummary == undefined && TallySale == undefined && TallyTimesheet.length == 0) {
            alertForMessages(kony.i18n.getLocalizedString("strMeetingTallyNotAvail"));
            callback.call(null, false, {});
            return;
        }
        if (checkIfNetworkIsAvailable()) {
            if (TallyMeetingFees == undefined || TallyPayment == undefined || TallySummary == undefined || TallySale == undefined || TallyTimesheet.length == 0) {
                alertForMessages(kony.i18n.getLocalizedString("strMeetingTallyNotAvail")); // old messgae => strTallyMeetingServiceError
                callback.call(null, false, {});
                return;
            }
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strYourInternetConnection"));
            callback.call(null, false, {});
            return;
        }
        //If any service returns empty response
        /*if(TallyMeetingFees == undefined){
	    	TallyMeetingFees.CurrentAttendanceCount = "";
			TallyMeetingFees.CurrentAttendanceAmount = "";
			TallyMeetingFees.MissedWeekAttendanceCount = "";
			TallyMeetingFees.MissedWeekAttendanceAmount = "";
			TallyMeetingFees.EnrollmentsCount = "";
			TallyMeetingFees.EnrollmentsAmount = "";
			TallyMeetingFees.PaidLifetimeAttendanceCount = "";
			TallyMeetingFees.PaidLifetimeAttendanceAmount = "";
			TallyMeetingFees.PrePaidAttendanceCount = "";
			TallyMeetingFees.TotalPaidAttendance = "";
			TallyMeetingFees.TotalMemberFees = "";
			TallyMeetingFees.FreeLifetimeAttendanceCount = "";
			TallyMeetingFees.TotalMemberAttendance = "";
	    }
	    
	    if(TallyPayment == undefined){
		    TallyPayment.Cash = "";
			TallyPayment.Checks = "";
			TallyPayment.CreditCards = "";
			TallyPayment.CreditSlipsIssued = "";
			TallyPayment.CreditSlipsRedeemed = "";
			OverUnderReason = "";
			TallyPayment.BankDepositNumber = "";
			TallyPayment.Total = "";
	    }
	    
	    if(TallySummary == undefined){
	    	TallySummary.Coupons = "";
			TallySummary.Staying = "";
			TallySummary.FivePercent = "";
			TallySummary.TenPercent = "";
			TallySummary.Goal = "";
			TallySummary.Lifetime = "";
			TallySummary.MonthlyPassesSold = "";
			TallySummary.SeventeenWeekPassesSold = "";
			TallySummary.Losing = "";
			TallySummary.TotalLoss = "";
	    }*/
        //Get Difference Reason
        var reason = "";
        for (var i in glbTallyDiffReasonArray) {
            var obj = glbTallyDiffReasonArray[i];
            if (obj[0] == parseInt(TallyPayment.TallyDifferenceReasonID)) reason = obj[1];
        }
        //Get Timesheet Records
        var TallyEmployeesArray = [];
        if (TallyTimesheet.length == undefined && _.isEmpty(TallyTimesheet) == false) {
            var tempTallyTimesheet = [];
            tempTallyTimesheet[0] = TallyTimesheet;
            TallyTimesheet = tempTallyTimesheet;
        }
        if (TallyTimesheet.length > 0) {
            for (var i in TallyTimesheet) {
                var v = TallyTimesheet[i];
                var lblTimeIn = "";
                var lblBreakIn = "";
                var lblTimeOut = "";
                var lblBreakOut = "";
                //** MEG 6386
                if (deviceLocale == "fr_CA") {
                    var TimeIn = convertTime24HrsForCA((v.TimeIn).substr(11, 8));
                    var TimeOut = convertTime24HrsForCA((v.TimeOut).substr(11, 8));
                } else {
                    var TimeIn = convertTimeTo12HrsFormat((v.TimeIn).substr(11, 8));
                    var TimeOut = convertTimeTo12HrsFormat((v.TimeOut).substr(11, 8));
                }
                //** End
                kony.print("-->tally timeshet object for response = " + JSON.stringify(v));
                //if MEG -US or MEG-CA + meeting type!= open hours
                var isVisibletimeInout = true;
                var intBreakInOutColWidth = 12;
                if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) {
                    var isMentor = (v.MeetingSetup == true || v.MeetingSetup == "true") ? getLocalizedString("strYes") : getLocalizedString("strNo");
                    var BreakIn = checkValidString(v.MentorTraineeName) ? decodeDisplayText(v.MentorTraineeName) : "";
                    var BreakOut = isMentor;
                    isVisibletimeInout = false;
                    intBreakInOutColWidth = 24;
                    kony.print("--> step 222 --> BreakIn = " + BreakIn + "--breakot = " + BreakOut + "--isVisibletimeInout = " + isVisibletimeInout);
                } else {
                    kony.print("--- else ");
                    //** MEG 6386
                    if (deviceLocale == "fr_CA") {
                        var BreakIn = checkValidString(v.BreakIn) ? convertTime24HrsForCA((v.BreakIn).substr(11, 8)) : "";
                        var BreakOut = checkValidString(v.BreakOut) ? convertTime24HrsForCA((v.BreakOut).substr(11, 8)) : "";
                    } else {
                        var BreakIn = checkValidString(v.BreakIn) ? convertTimeTo12HrsFormat((v.BreakIn).substr(11, 8)) : "";
                        var BreakOut = checkValidString(v.BreakOut) ? convertTimeTo12HrsFormat((v.BreakOut).substr(11, 8)) : "";
                    }
                    //** END
                }
                if (in_array(deviceLocale, Countries["CA"])) {
                    kony.print("---> Record number loop " + i + "---- if canada  ");
                    var b = {
                        lblPosition: checkValidString(v.EmployeeRole) ? ((v.EmployeeRole == empRoleEnum[1]) ? getLocalizedString("strReceptionist") : getLocalizedString("strLeader")) : "",
                        lblEmployee: checkValidString(v.EmployeeName) ? v.EmployeeName : "",
                        lblNumber: checkValidString(v.EmployeeNumber) ? v.EmployeeNumber : "",
                        lblTimeIn: {
                            "text": TimeIn,
                            "isVisible": isVisibletimeInout
                        },
                        lblTimeOut: {
                            "text": TimeOut,
                            "isVisible": isVisibletimeInout
                        },
                        //lblBreakIn: BreakIn,
                        // lblBreakOut: BreakOut
                        lblBreakIn: {
                            "text": BreakIn,
                            containerWeight: intBreakInOutColWidth
                        },
                        lblBreakOut: {
                            "text": BreakOut,
                            containerWeight: intBreakInOutColWidth
                        }
                    };
                } else {
                    kony.print("---> Record number loop " + i + "---- else US");
                    var b = mapKeys(viewTallyEmpDetails, {
                        lblPosition: (kony.sync.getString(v.EmployeeRole) == empRoleEnum[1]) ? getLocalizedString("strReceptionist") : getLocalizedString("strLeader"),
                        lblEmployee: kony.sync.getString(v.EmployeeName),
                        lblNumber: kony.sync.getString(v.EmployeeNumber),
                        lblTimeIn: kony.sync.getString(TimeIn),
                        lblTimeOut: kony.sync.getString(TimeOut),
                        lblBreakIn: kony.sync.getString(BreakIn),
                        lblBreakOut: kony.sync.getString(BreakOut)
                    });
                }
                TallyEmployeesArray.push(b);
            }
        }
        kony.print("-------------> TallyEmployeesArray = " + JSON.stringify(TallyEmployeesArray));
        var bankDepositSlips = TallyPayment.BankDeposits;
        var resultObj = {
            //"TallyRegion": TallyRegion,
            //"TallyLocationName": TallyLocationName,
            "TallyEmployees": TallyEmployeesArray,
            "Section2NumOfTotalCurrentAttd": TallyMeetingFees.CurrentAttendanceCount,
            "Section2SumOfTotalCurrentAttd": TallyMeetingFees.CurrentAttendanceAmount,
            "Section2NumOfMissedWKCurrAttd": TallyMeetingFees.MissedWeekAttendanceCount,
            "Section2SumOfMissedWKCurrAttd": TallyMeetingFees.MissedWeekAttendanceAmount,
            "Section2NumOfEnrollPayg": TallyMeetingFees.EnrollmentsCount,
            "Section2SumOfEnrollPayg": TallyMeetingFees.EnrollmentsAmount,
            "Section2NumOfPaidLTAttandance": TallyMeetingFees.PaidLifetimeAttendanceCount,
            "Section2SumOfPaidLTAttandance": TallyMeetingFees.PaidLifetimeAttendanceAmount,
            "Section2NumOfPrepaidAttd": TallyMeetingFees.PrePaidAttendanceCount,
            "Section2TotalPaidAttandace": TallyMeetingFees.TotalPaidAttendance,
            "Section2TotalMemberFees": TallyMeetingFees.TotalMemberFees,
            "Section2NumOfFreeLTAttandance": TallyMeetingFees.FreeLifetimeAttendanceCount,
            "Section2TotalMemberAttandace": TallyMeetingFees.TotalMemberAttendance,
            "Section2NumOfMPLifetime": TallyMeetingFees.LifeTimeMonthlyPassAttendance, // Added for MEGCA-13
            "Section2NumOfMonthlyPassLTAttd": (in_array(deviceLocale, Countries["CA"])) ? TallyMeetingFees.LTPrepaidMember : 0,
            "Section2SumOfPrepaidAttd": TallyMeetingFees.PrepaidFees,
            "Section2NumOfNewEnrollments": TallyMeetingFees.AWEnrollments,
            "Section2SumOfNewEnrollments": TallyMeetingFees.AWEnrollmentAmount,
            "Section2SubsidyOfNewEnrollments": TallyMeetingFees.AWEnrollmentSubsidyAmount,
            "Section2NumOfContEnrollments": TallyMeetingFees.ContAWEnrollments,
            "Section2SumOfContEnrollments": TallyMeetingFees.ContAWEnrollmentAmount,
            "Section2SubsidyOfContEnrollments": TallyMeetingFees.ContAWEnrollmentSubsidyAmount,
            "Section2SubsidyOfPaidLT": TallyMeetingFees.PaidLifetimeSubsidyAmount,
            "Section2SubsidyOfFreeLT": TallyMeetingFees.FreeLifetimeSubsidyAmount,
            "Section2SubsidyOfPrepaid": TallyMeetingFees.PrePaidSubsidyAmount,
            "Section2TotalSubsidyAmt": TallySale.TotalSubsidyAmount,
            "Section2PreRegMemberCount": TallySummary.PreRegMemberCount, // **MEG 7319
            "Section3NumPrePaidCoupons": TallySummary.Coupons,
            //3MP
            "Section3Num3MonthPassSold": TallySummary.ThreeMonthsPassesSold,
            "Section3MembersAttMeeting": TallySummary.Staying,
            "Section3NumOfMembersReached5": TallySummary.FivePercent,
            "Section3NumOfMembersReached10": TallySummary.TenPercent,
            "Section3NumOfMembersReachedWeighGoal": TallySummary.Goal,
            "Section3NumOfMembersReachedLifetime": TallySummary.Lifetime,
            "Section3NumMonthlyPassSold": TallySummary.OneMonthPassesSold,
            "Section3Num20weekPassSold": (in_array(deviceLocale, Countries["CA"])) ? (checkValidString(TallySummary.TwentyWeekPassesSold) ? TallySummary.TwentyWeekPassesSold : 0) : 0,
            "Section3Num6MonthPassSold": (checkValidString(TallySummary.SixMonthsPassesSold)) ? TallySummary.SixMonthsPassesSold : 0,
            "Section3NumMPsActivationSold": (checkValidString(TallySummary.OneMonthPassesActivated)) ? TallySummary.OneMonthPassesActivated : 0,
            "Section3NumThreeMPsActivationSold": (checkValidString(TallySummary.ThreeMonthsPassesActivated)) ? TallySummary.ThreeMonthsPassesActivated : 0,
            "Section3NumSixMPsActivationSold": (checkValidString(TallySummary.SixMonthsPassesActivated)) ? TallySummary.SixMonthsPassesActivated : 0,
            "Section3NumSixMPsLTCActivationSold": (checkValidString(TallySummary.SixMonthsPassesLTCActivated)) ? TallySummary.SixMonthsPassesLTCActivated : 0,
            "Section3Num6MonthLTCPassSold": (checkValidString(TallySummary.SixMonthLTCPassSold)) ? TallySummary.SixMonthLTCPassSold : 0,
            "Section3NumThreeMPsLTCActivationSold": (checkValidString(TallySummary.ThreeMonthsPassesLTCActivated)) ? TallySummary.ThreeMonthsPassesLTCActivated : 0, //MEG-6955
            "Section3Num3MonthLTCPassSold": (checkValidString(TallySummary.ThreeMonthLTCPassSold)) ? TallySummary.ThreeMonthLTCPassSold : 0, //MEG-6955
            "Section3NumOfMembersWeightLossMeeting": TallySummary.Losing,
            "Section3SumOfMembersWeightLossMeeting": parseFloat(TallySummary.TotalLoss),
            "Section4PrepaymentSales": TallySale.Prepayment,
            "Section4ProductSales": TallySale.ProductSales,
            "Section4ProductReturns": TallySale.ProductReturn,
            "Section4EmployeeSales": TallySale.EmployeeSales,
            "Section4SalesTax": TallySale.SalesTax,
            "Section4TotalSales": TallySale.TotalSales,
            "Section4MemberFees": TallySale.MemberFees,
            "Section5Cash": parseFloat(TallyPayment.Cash).toFixed(2),
            "Section5Check": parseFloat(TallyPayment.Checks).toFixed(2),
            "Section5BankDeposit": (in_array(deviceLocale, Countries["CA"])) ? (parseFloat(parseFloat(TallyPayment.Cash).toFixed(2))) : ((parseFloat(parseFloat(TallyPayment.Cash).toFixed(2)) + parseFloat(parseFloat(TallyPayment.Checks).toFixed(2))).toFixed(2)),
            "Section5CreditCard": TallyPayment.CreditCards,
            "Section5DebitCard": parseFloat(TallyPayment.DebitCardInteract).toFixed(2),
            "Section5CreditSlipsIssued": parseFloat(TallyPayment.CreditSlipsIssued) > 0 ? parseFloat(TallyPayment.CreditSlipsIssued).toFixed(2) : (-1 * parseFloat(TallyPayment.CreditSlipsIssued)).toFixed(2),
            "Section5CreditSlipsRedeemed": TallyPayment.CreditSlipsRedeemed,
            "Section5Reason": reason,
            "Section5DipositeTicket": TallyPayment.BankDepositNumber,
            "Section5TotalPayment": TallyPayment.Total,
            "Section6OverUnder": TallyPayment.TallyDifferenceAmount,
            "Section2NumEmpAttendance": TallySummary.EmployeeAttendance,
            "WeekNo": TallyPayment.WeekNo //**MEG-7233
        }
        kony.print("MeetingTally IsAWSLocationEnabled : " + IsAWSLocationEnabled());
        kony.print("MeetingTally bankDepositSlips : " + JSON.stringify(bankDepositSlips));
        if (IsAWSLocationEnabled() && bankDepositSlips && bankDepositSlips.length > 0) {
            for (var i in bankDepositSlips) {
                var v = bankDepositSlips[i]
                if (i == 0) {
                    resultObj.Section5DipositDate1 = (v.DepositDate).split("T")[0];
                    resultObj.Section5DipositSlip1 = v.DepositNumber;
                    resultObj.Section5DipositAmount1 = parseFloat(v.DepositAmount);
                } else if (i == 1) {
                    resultObj.Section5DipositDate2 = (v.DepositDate).split("T")[0];
                    resultObj.Section5DipositSlip2 = v.DepositNumber,
                        resultObj.Section5DipositAmount2 = parseFloat(v.DepositAmount);
                } else if (i == 2) {
                    resultObj.Section5DipositDate3 = (v.DepositDate).split("T")[0];
                    resultObj.Section5DipositSlip3 = v.DepositNumber;
                    resultObj.Section5DipositAmount3 = parseFloat(v.DepositAmount);
                }
            }
        }
        kony.print("Final result makeTallyResultFromService B4 Location==" + JSON.stringify(resultObj));
        var whereClause = "where locationno='" + glbLocationNum + "'";
        DBLocationController.find(whereClause, getRegionCallback, eventErrorCallBack)

        function getRegionCallback(res) {
            kony.print("Final result getRegionCallback res==" + JSON.stringify(res));
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    resultObj.TallyRegion = kony.sync.getString(v.AreaSiteNumber);
                    resultObj.TallyLocationName = kony.sync.getString(v.displayvalue);
                }
                kony.print("Final result makeTallyResultFromService resultObj==" + JSON.stringify(resultObj));
                callback.call(null, true, resultObj);
            }
        }
    },
    getHomeScreenMeetingData: function(callback) {
        kony.print("inside the getHomeScreenMeetingData======");
        var dateQuery, meetingQuery;
        dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        meetingQuery = glbMeetingNum;
        var whereClause = "";
        if (in_array(deviceLocale, Countries["CA"])) {
            whereClause = "Select m.membertype,s.productsku,s.* from SaleItems s inner join SaleDetails d on s.SaleTransactnId = d.SaleTransactnId INNER JOIN memberdetails m on m.memberid=d.memberid where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' order by s.ProductSku";
        } else {
            whereClause = "Select * from SaleItems s inner join SaleDetails d on s.SaleTransactnId = d.SaleTransactnId where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' order by s.ProductSku";
        }
        kony.print("::getHomeScreenMeetingData:: whereClause = " + whereClause);

        function getHomeScreenMeetingDataCallback(res) {
            kony.print("getHomeScreenMeetingDataCallback res " + JSON.stringify(res));
            var saleItemProductSKU = "";
            var saleItemUnitPrice = 0.0;
            var updatedGlbTotalAttendanceAndFees;
            var glbTotalAttendanceAndFees = {
                totalMemberAttandace: 0,
                totalMemberFees: 0
            };
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    saleItemProductSKU = kony.sync.getString(v.ProductSku);
                    saleItemUnitPrice = (IsAWSLocationEnabled()) ? (parseFloat(parseFloat(kony.sync.getString(v.UnitPrice)) - parseFloat(kony.sync.getString(v.SubsidyAmount))).toFixed(2)) : kony.sync.getString(v.UnitPrice); //**MEG 7249
                    kony.print("saleItemUnitPrice " + saleItemUnitPrice);
                    updatedGlbTotalAttendanceAndFees = boTallyMeetingReport.getAtandanceAndMettingFeesDetailsHomeScreen(saleItemProductSKU, saleItemUnitPrice, kony.sync.getString(v.MemberType), glbTotalAttendanceAndFees);
                    kony.print("===>>>>==updatedGlbTotalAttendanceAndFees" + JSON.stringify(updatedGlbTotalAttendanceAndFees));
                }
                kony.print("Tally save data =====" + JSON.stringify(res));
                //kony.print("===>>>>==totalMemberAttandace"+totalMemberAttandace);
                //kony.print("===>>>>==totalMemberFees"+totalMemberFees);
                boTallyMeetingReport.getProductSalesHomeScreen(updatedGlbTotalAttendanceAndFees, callback);
            } else {
                boTallyMeetingReport.getProductSalesHomeScreen(updatedGlbTotalAttendanceAndFees, callback);
            }
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, getHomeScreenMeetingDataCallback, eventErrorCallBack);
    },
    getAtandanceAndMettingFeesDetailsHomeScreen: function(SKU, UnitPrice, MemberType, glbTotalAttendanceAndFees) {
        kony.print("getAtandanceAndMettingFeesDetailsHomeScreen");
        kony.print("SKU " + SKU);
        kony.print("UnitPrice " + UnitPrice);
        kony.print("MemberType " + MemberType);
        kony.print("glbTotalAttendanceAndFees " + glbTotalAttendanceAndFees);
        if (in_array(SKU, getSKUList('Current_Attendance'))) {
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees) + parseFloat(UnitPrice);
        } else if (in_array(SKU, getSKUList('MissedWeek'))) {
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees) + parseFloat(UnitPrice);
        } else if (in_array(SKU, getSKUList('Enrollments'))) {
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees) + parseFloat(UnitPrice);
        } else if (in_array(SKU, getSKUList('PaidLTAttendance'))) {
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees) + parseFloat(UnitPrice);
        } else if (in_array(SKU, getSKUList('PrepaidAttendance'))) {
            kony.print("IS Membertype: " + MemberType);
            kony.print("IS MemberValueEnum: " + MemberValueEnum[7]);
            kony.print("IS sku: " + SKU);
            if (in_array(deviceLocale, Countries["CA"]) && in_array(SKU, getSKUList('NumOfMonthlyPassLTAttd')) && MemberType == MemberValueEnum[7]) { // Added for MEGCA-13   && MemberType == MemberValueEnum[7]
                glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            } else {
                glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            }
        } else if (in_array(SKU, getSKUList('FreeLTAttendance'))) {
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
        } else if (in_array(SKU, getSKUList('Cont_Enrollments')) && IsAWSLocationEnabled()) {
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees) + parseFloat(UnitPrice);
        } else if (in_array(SKU, getSKUList('New_Enrollments')) && IsAWSLocationEnabled()) {
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees) + parseFloat(UnitPrice);
        } else if (in_array(SKU, getSKUList('BridgeSeries')) && IsAWSLocationEnabled()) { //** MEG 7283
            glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
            glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees) + parseFloat(UnitPrice);
        }
        /*else if (in_array(SKU, getSKUList('MPSold'))) {
              //353- 20 Week Pass Sold
              glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
          } else if (in_array(SKU, getSKUList('20weekPassSold'))) { // MEGCA-8 for 20 week pass
             glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
          } else if (in_array(SKU, getSKUList('ThreeMPSold'))) {
             glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
          }else if (in_array(SKU, getSKUList('SixMPSold'))) { //MEGCA-301
              glbTotalAttendanceAndFees.totalMemberAttandace = glbTotalAttendanceAndFees.totalMemberAttandace + 1;
          } */
        //totalMemberAttandace = section2NumOfTotalCurrentAttd + section2NumOfMissedWKCurrAttd + section2NumOfEnrollPayg + section2NumOfPaidLTAttandance + section2NumOfPrepaidAttd + section2NumOfFreeLTAttandance + section2NumOfMonthlyPassLTAttd;
        //totalMemberFees = section2SumOfTotalCurrentAttd + section2SumOfMissedWKCurrAttd + section2SumOfEnrollPayg + section2SumOfPaidLTAttandance;
        glbTotalAttendanceAndFees.totalMemberFees = parseFloat(glbTotalAttendanceAndFees.totalMemberFees).toFixed(2);
        return glbTotalAttendanceAndFees;
    },
    getProductSalesHomeScreen: function(totalAttendanceAndFees, callback) {
        var dateQuery, meetingQuery;
        //alert("inside the Tally======");
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
            meetingQuery = glbMeetingNum;
        }
        // var whereClause = "select CalcTotal,UnitPriceTax from SaleItems s inner join SaleDetails d on s.SaleTransactnId=d.SaleTransactnId where d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%"+dateQuery+"%' and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' and d.IsServiceProvider = 0 and s.ProducType = 'TangibleProduct' ";//group by CalcTotal";
        var whereClause = "select CalcTotal,UnitPriceTax, Quantity from SaleItems s inner join SaleDetails d on s.SaleTransactnId=d.SaleTransactnId where d.CountryID = '" + getCountryID() + "' AND d.MeetingOccurID='" + meetingQuery + "' and d.MeetingDate like '%" + dateQuery + "%' and s.IsSaleItemVoid <> '1' and d.IsReturn <> '1' " + "and d.IsServiceProvider = 0 and (s.ProductType = 'TangibleProduct' or s.ProductSku not in (Select SKU from SKURuleEngine where CountryID = '" + getCountryID() + "'))"; //group by CalcTotal";*/
        kony.print("GetProductSales=" + whereClause);
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, getProductSalesHomeScreenCallback, eventErrorCallBack);
        // com.kony.WeightWatchers.MemberSyncScope.SaleItems.find(whereClause, GetProductSalesCallback, eventErrorCallBack)
        function getProductSalesHomeScreenCallback(res) {
            //alert("GetProductSales");
            var totalProductSales = 0;
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    totalProductSales += parseFloat(parseFloat(kony.sync.getString(v.CalcTotal)));
                }
                kony.print("===>>>>==totalProductSales" + totalProductSales);
                boTallyMeetingReport.GetEmployeeSalesHomeScreen(totalAttendanceAndFees, totalProductSales, callback);
            } else {
                boTallyMeetingReport.GetEmployeeSalesHomeScreen(totalAttendanceAndFees, totalProductSales, callback);
            }
        }
    },
    GetEmployeeSalesHomeScreen: function(totalAttendanceAndFees, totalProductSales, callback) {
        var dateQuery, meetingQuery;
        dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        meetingQuery = glbMeetingNum;
        setAWSLocationOnHomeScreen(meetingQuery, dateQuery, function(isAtwork) { //**MEG 7180
            kony.print("setAWSLocationOnHomeScreen isAtwork " + isAtwork);
            setAWSLocation(isAtwork);
        });
        enableDisableBtnOnHomeScreen() //** MEG 7312
        whereClause = "select TotalSalePrice from SaleDetails  where CountryID = '" + getCountryID() + "' AND MeetingOccurID='" + meetingQuery + "' and MeetingDate like '%" + dateQuery + "%' and IsServiceProvider = 1 ";
        kony.print("::GetEmployeeSalesHomeScreen:: whereClause = " + whereClause);
        kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, GetEmployeeSalesHomeScreenCallback, eventErrorCallBack);

        function GetEmployeeSalesHomeScreenCallback(res) {
            var totalEmployeeSale = 0;
            var totalProductEmpSale = totalProductSales;
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    totalEmployeeSale += parseFloat(kony.sync.getString(v.TotalSalePrice));
                }
                kony.print("===>>>>==totalEmployeeSale" + totalEmployeeSale);
                totalProductEmpSale += totalEmployeeSale;
                kony.print("===>>>>==totalProductEmpSale" + totalProductEmpSale);
                if (totalAttendanceAndFees == undefined) callback.call(null, 0, parseFloat(0).toFixed(2), totalProductEmpSale.toFixed(2));
                else callback.call(null, totalAttendanceAndFees.totalMemberAttandace, totalAttendanceAndFees.totalMemberFees, totalProductEmpSale.toFixed(2));
            } else {
                if (totalAttendanceAndFees == undefined) callback.call(null, 0, parseFloat(0).toFixed(2), totalProductEmpSale.toFixed(2));
                else callback.call(null, totalAttendanceAndFees.totalMemberAttandace, totalAttendanceAndFees.totalMemberFees, totalProductEmpSale.toFixed(2));
            }
        }
    },
    getEmployeeAttendence: function(callback) {
        //var whrCondition = "SELECT * FROM memberdetails M INNER JOIN SaleDetails S ON M.MemberID = S.MemberID WHERE M.MtngOccrID = '" + glbMeetingNum + "' and date(M.LastAttendanceDate) = date('now','localtime') and M.Usertype = '1'";
        var whrCondition = "SELECT * FROM memberdetails M INNER JOIN SaleDetails S ON M.MemberID = S.MemberID WHERE M.MtngOccrID = '" + glbMeetingNum + "' and date(M.LastAttendanceDate) = date('now','localtime') and M.Usertype = '1' and S.TransactionType = 'NonTangible' and M.MemberID NOT IN(SELECT EmpId FROM TallyTimesheet   WHERE MeetingId = '" + glbMeetingNum + "' and date(MeetingDate) = date('now','localtime'))";

        function getEmployeeAttendenceSuccesscallback(res) {
            callback.call(null, res.length);
        }
        kony.print(":::whrCondition::" + whrCondition);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCondition, null, getEmployeeAttendenceSuccesscallback, eventErrorCallBack);
    },
    getMemberAttendanceAndMilestoneData: function(MeetingDate, MeetingOccID, callback) {
        var dateQuery, meetingQuery;
        dateQuery = supportTime(MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        meetingQuery = MeetingOccID;

        function getMemberAttendanceAndMilestoneDataCallback(res) {
            kony.print("::MR AA::" + JSON.stringify(res));
            var result = {};
            if (res && res.length > 0) {
                boTallyMeetingReport.getMilestoneDataForMember(MeetingDate, MeetingOccID, result, res, callback);
            } else {
                removeProgressView();
                boTallyMeetingReport.getProductSaleReportData(MeetingDate, MeetingOccID, result, callback);
            }
        }
        //var sqlQuery = "SELECT B.MemberID,sum(UnitPrice) as Fees,B.SubscriptnType, A.Weight,(B.FirstName || ' ' || B.LastName) as MemberName ,B.RegNumber FROM  MemberDetails B INNER JOIN  WeighDetails A on A.MemberID=B.MemberID INNER JOIN SaleDetails S ON S.MemberID = B.MemberID INNER JOIN SaleItems SI ON SI.SaleTransactnId =S.SaleTransactnId AND SI.ProductType ='Fees' AND SI.ProductSku NOT IN ("+convertArrayToString(getSKUList('SaleReport'))+") where B.CountryID = '" + getCountryID() + "' AND B.MtngOccrID='" + meetingQuery + "' and A.MemberID != 0 and date(A.WeighInDate) = '"+dateQuery+"' and A.MemberID in (Select MemberID from SaleDetails where CountryID = '" + getCountryID() + "' AND date(MeetingDate) = '"+dateQuery+"' AND TransactionType='NonTangible')  group by S.SaleTransactnId";
        //
        // MEG-5894 Fix to ensure in the attendance section of the report we show the summation of both Purchase and Redeem SKU $value when the member is purchasing any MPs or Weekly Passes in the meeting rooms.
        //	
        // var sqlQuery = "SELECT B.MemberID,sum(UnitPrice) as Fees,B.SubscriptnType, A.Weight,(B.FirstName || ' ' || B.LastName) as MemberName ,B.RegNumber FROM  MemberDetails B INNER JOIN  WeighDetails A on A.MemberID=B.MemberID INNER JOIN SaleDetails S ON S.MemberID = B.MemberID INNER JOIN SaleItems SI ON SI.SaleTransactnId =S.SaleTransactnId AND SI.ProductType ='Fees' where B.CountryID = '" + getCountryID() + "' AND B.MtngOccrID='" + meetingQuery + "' and A.MemberID != 0 and date(A.WeighInDate) = '"+dateQuery+"' and A.MemberID in (Select MemberID from SaleDetails where CountryID = '" + getCountryID() + "' AND date(MeetingDate) = '"+dateQuery+"' AND TransactionType='NonTangible')  group by S.SaleTransactnId";
        //
        // MEG-5979 fix to ensure that we pick only the weigh in and sale of the current meeting week date when there's a use case that we had weighed in the same member week over week from the same device
        //
        //**MEG 7249  
        //**MEG 7383
        var sqlQuery = "";
        if (IsAWSLocationEnabled()) {
            sqlQuery = "SELECT B.MemberID,(sum(UnitPrice) - sum(SubsidyAmount)) as Fees,sum(SubsidyAmount) as Subsidy,B.SubscriptnType, A.Weight,(B.FirstName || ' ' || B.LastName) as MemberName ,B.RegNumber FROM  MemberDetails B INNER JOIN  WeighDetails A on A.MemberID=B.MemberID and(B.memberid =B.PreRegNumber or B.PreRegNumber = 0 or B.memberid GLOB '*[A-z]*')  INNER JOIN SaleDetails S ON S.MemberID = B.MemberID and date(S.MeetingDate) = '" + dateQuery + "' INNER JOIN SaleItems SI ON SI.SaleTransactnId =S.SaleTransactnId AND SI.ProductType ='Fees' AND SI.ProductSku NOT IN (" + convertArrayToString(getSKUList('SaleReport')) + ") where  B.CountryID = '" + getCountryID() + "' AND B.MtngOccrID='" + meetingQuery + "' and A.MemberID != 0 and date(A.WeighInDate) = '" + dateQuery + "' and A.MemberID in (Select MemberID from SaleDetails where CountryID = '" + getCountryID() + "' AND date(MeetingDate) = '" + dateQuery + "' AND TransactionType='NonTangible')  group by S.SaleTransactnId";
        } else {
            sqlQuery = "SELECT B.MemberID,sum(UnitPrice) as Fees,sum(SubsidyAmount) as Subsidy,B.SubscriptnType, A.Weight,(B.FirstName || ' ' || B.LastName) as MemberName ,B.RegNumber FROM  MemberDetails B INNER JOIN  WeighDetails A on A.MemberID=B.MemberID and(B.memberid =B.PreRegNumber or B.PreRegNumber = 0 or B.memberid GLOB '*[A-z]*')  INNER JOIN SaleDetails S ON S.MemberID = B.MemberID and date(S.MeetingDate) = '" + dateQuery + "' INNER JOIN SaleItems SI ON SI.SaleTransactnId =S.SaleTransactnId AND SI.ProductType ='Fees' AND SI.ProductSku NOT IN (" + convertArrayToString(getSKUList('SaleReport')) + ") where  B.CountryID = '" + getCountryID() + "' AND B.MtngOccrID='" + meetingQuery + "' and A.MemberID != 0 and date(A.WeighInDate) = '" + dateQuery + "' and A.MemberID in (Select MemberID from SaleDetails where CountryID = '" + getCountryID() + "' AND date(MeetingDate) = '" + dateQuery + "' AND TransactionType='NonTangible')  group by S.SaleTransactnId";
        }
        //**End
        kony.print("MRA::" + sqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, getMemberAttendanceAndMilestoneDataCallback, eventErrorCallBack);
    },
    getMilestoneDataForMember: function(MeetingDate, MeetingOccID, result, res, callback) {
        dateQuery = supportTime(MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        meetingQuery = MeetingOccID;

        function getMilestoneDataForMemberCallback(data) {
            if (data && data.length > 0) {
                _.each(res, function(a) {
                    _.each(data, function(b) {
                        if (a.MemberID == b.MemberID) {
                            a.Milestone = b.Milestone;
                        }
                    })
                })
                result['attendanceData'] = res;
                kony.print("::Final::--" + JSON.stringify(res));
                boTallyMeetingReport.getProductSaleReportData(MeetingDate, MeetingOccID, result, callback);
            } else {
                result['attendanceData'] = res;
                boTallyMeetingReport.getProductSaleReportData(MeetingDate, MeetingOccID, result, callback);
            }
        }
        //var sqlQuery = "SELECT MA.MemberID,group_concat(ML.MilestoneName,',') as Milestone FROM milestoneachieved MA LEFT JOIN milestonelookup ML on ML.milestoneID = MA.milestoneID where MA.CountryID = '" + getCountryID() + "' AND date(MA.ReachedDate) = '"+dateQuery+"' GROUP BY MA.MemberID";
        var sqlQuery = "SELECT MA.MemberID,group_concat(ML.MilestoneName,',') as Milestone FROM milestoneachieved MA LEFT JOIN milestonelookup ML on ML.milestoneID = MA.milestoneID where MA.CountryID = '" + getCountryID() + "' AND ML.CountryID = '" + getCountryID() + "' AND date(MA.ReachedDate) = '" + dateQuery + "' GROUP BY MA.MemberID";
        kony.print("MRA::" + sqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, getMilestoneDataForMemberCallback, eventErrorCallBack);
    },
    getProductSaleReportData: function(MeetingDate, MeetingOccID, result, callback) {
        dateQuery = supportTime(MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        meetingQuery = MeetingOccID;

        function getProductSaleReportDataCallback(res) {
            if (res && res.length > 0) {
                removeProgressView();
                result['productSaleData'] = res;
                kony.print("::MR PP::" + JSON.stringify(result));
                boTallyMeetingReport.getEmployeeSaleReportData(MeetingDate, MeetingOccID, result, callback);
            } else {
                removeProgressView();
                result['productSaleData'] = res;
                boTallyMeetingReport.getEmployeeSaleReportData(MeetingDate, MeetingOccID, result, callback);
            }
        }
        var sqlQuery = "SELECT SUM(((SI.UnitPrice*SI.Quantity)+(SI.UnitPriceTax*SI.Quantity))) as total,SUM(SI.Quantity) as Qty,P.description,P.UnitPrice as ProductUnitPrice,SI.* FROM SaleDetails SD INNER JOIN SaleItems SI ON SD.SaleTransactnId=SI.SaleTransactnId INNER JOIN ProductDetail P ON P.ProductID = SI.ProductID AND P.LocationID ='" + glbLocationID + "' WHERE SD.IsEmployeeSale <> '1' AND SD.CountryID = '" + getCountryID() + "' AND SD.MeetingOccurID='" + meetingQuery + "' AND date(SD.SaleDate) = '" + dateQuery + "' AND SI.ProductType='TangibleProduct' AND SI.IsReturnItem <>1 AND SD.IsSaleVoid <> 1 GROUP BY SI.ProductSku";
        kony.print("::Product report sqlQuery::" + sqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, getProductSaleReportDataCallback, eventErrorCallBack);
    },
    getEmployeeSaleReportData: function(MeetingDate, MeetingOccID, result, callback) {
        dateQuery = supportTime(MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        meetingQuery = MeetingOccID;

        function getEmployeeSaleReportDataCallback(res) {
            if (res && res.length > 0) {
                removeProgressView();
                result['employeeSaleData'] = res;
                kony.print("SJ::" + JSON.stringify(result));
                boTallyMeetingReport.getProductReturnReportData(MeetingDate, MeetingOccID, result, callback);
            } else {
                removeProgressView();
                result['employeeSaleData'] = res;
                boTallyMeetingReport.getProductReturnReportData(MeetingDate, MeetingOccID, result, callback);
            }
        }
        var sqlQuery = "SELECT SUM(((SI.UnitPrice*SI.Quantity)+(SI.UnitPriceTax*SI.Quantity))) as total,SUM(SI.Quantity) as Qty,P.description,P.UnitPrice as ProductUnitPrice,SI.* FROM SaleDetails SD INNER JOIN SaleItems SI ON SD.SaleTransactnId=SI.SaleTransactnId INNER JOIN ProductDetail P ON P.ProductID = SI.ProductID AND P.LocationID ='" + glbLocationID + "' WHERE SD.IsEmployeeSale = '1' AND SD.CountryID = '" + getCountryID() + "' AND SD.MeetingOccurID='" + meetingQuery + "' AND date(SD.SaleDate) = '" + dateQuery + "' AND SI.ProductType='TangibleProduct' AND SI.IsReturnItem <>1 AND SD.IsSaleVoid <> 1 GROUP BY SI.ProductSku";
        kony.print("::Employee sale report sqlQuery::" + sqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, getEmployeeSaleReportDataCallback, eventErrorCallBack);
    },
    getProductReturnReportData: function(MeetingDate, MeetingOccID, result, callback) {
        dateQuery = supportTime(MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        meetingQuery = MeetingOccID;

        function getProductReturnReportDataCallback(res) {
            if (res && res.length > 0) {
                removeProgressView();
                result['productReturnData'] = res;
                kony.print("SJ::" + JSON.stringify(result));
                callback.call(null, true, result);
            } else {
                removeProgressView();
                result['productReturnData'] = res;
                callback.call(null, true, result);
            }
        }
        var sqlQuery = "SELECT SUM(((SI.UnitPrice*SI.Quantity)+(SI.UnitPriceTax*SI.Quantity))) as total,SUM(SI.Quantity) as Qty,P.description,P.UnitPrice as ProductUnitPrice,SI.* FROM SaleDetails SD INNER JOIN SaleItems SI ON SD.SaleTransactnId=SI.SaleTransactnId INNER JOIN ProductDetail P ON P.ProductID = SI.ProductID AND P.LocationID ='" + glbLocationID + "' WHERE SD.CountryID = '" + getCountryID() + "' AND SD.MeetingOccurID='" + meetingQuery + "' AND date(SD.SaleDate) = '" + dateQuery + "' AND SI.ProductType='TangibleProduct' AND SI.IsReturnItem = 1 AND SD.IsSaleVoid <>1 GROUP BY SI.ProductSku";
        kony.print("::ProductReturn report sqlQuery::" + sqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, getProductReturnReportDataCallback, eventErrorCallBack);
    },
    /**
     * MEG 7357 This calls the to get Meeting data from serive for particular date and location
     */
    getAllMeetingsForDateFromWS: function(meetingdate, callback) {
            try {
                meetingdate = supportTime(new Date(meetingdate), "", "yyyy-mm-ddT00:00:00");
                var meetingDate = meetingdate.split("T")[0];
                kony.print("::getMemberReportService::meetingdate=" + meetingdate);
                var GetMeetingsServices_inputparam = {};
                GetMeetingsServices_inputparam["serviceID"] = Services.GetMeetings;
                GetMeetingsServices_inputparam["httpheaders"] = {};
                GetMeetingsServices_inputparam["httpconfigs"] = {};
                GetMeetingsServices_inputparam["httpheaders"] = setRESTHeader();
                GetMeetingsServices_inputparam["MeetingDate"] = meetingDate.toString();
                GetMeetingsServices_inputparam["locationID"] = glbLocationID;
                kony.print("::getAllMeetingsForDateFromWS::GetMeetingsServices_inputparam = " + JSON.stringify(GetMeetingsServices_inputparam));

                function getAllMeetingsForDateFromWSCallback(status, responseMeetingData) {
                    kony.print("::getAllMeetingsForDateFromWSCallback::responseTally=" + JSON.stringify(responseMeetingData));
                    callback.call(null, responseMeetingData);
                }
                GetMeetingsServicesHandle = Network.makeServiceCall(GetMeetingsServices_inputparam, getAllMeetingsForDateFromWSCallback, true); //true to allow offline data access
            } catch (e) {
                GlobalException(e);
                removeProgressView();
            }
        } //***End
}