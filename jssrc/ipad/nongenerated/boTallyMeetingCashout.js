var boTallyMeetingCashout = {
    fetchMEGDrawerDataForPaymentModesCashCheckCreditCard: function(MeetingId, EmpId, callback) {
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        kony.print("::DJP:: Today = " + today);
        var SQLQuery = "Select Type,sum(Amount) as amount From SaleDetails S Join SalePayments P on S.SaleTransactnId = P.SaleTransactnId and S.CountryID = '" + getCountryID() + "' Where S.MeetingOccurId = " + MeetingId + " and S.MeetingDate like '%" + today + "%' and P.Type NOT in ('CreditSlipIssued','CreditSlipRedeemed') Group by P.Type";
        kony.print("SQLQuery:: " + SQLQuery);

        function fetchMEGDrawerDataForPaymentModesCashCheckCreditCardSuccessCallBack(resp) {
            kony.print("Cash/check/credit card resp length is:" + resp.length);
            //Callback
            callback.call(null, resp);
        }
        //Execute Sql query
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQuery, null, fetchMEGDrawerDataForPaymentModesCashCheckCreditCardSuccessCallBack, eventErrorCallBack);
    },
    fetchMEGDrawerDataForPaymentModesCreditSlips: function(MeetingId, EmpId, callback) {
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        kony.print("::DJP:: Today = " + today);
        var SQLQueryForCreditSlips;
        //Ami var SQLQueryForCreditSlips = "Select sum(Amount) as amount, P.RefundAmount From SaleDetails S Join SalePayments P on S.SaleTransactnId = P.SaleTransactnId Where P.Type = 'CreditSlip' and S.MeetingOccurId = " + MeetingId + " and S.EmpId = " + EmpId + " Group by P.RefundAmount ";
        SQLQueryForCreditSlips = "Select sum(Amount) as amount, P.RefundAmount From SaleDetails S Join SalePayments P on S.SaleTransactnId = P.SaleTransactnId and  S.CountryID = '" + getCountryID() + "' Where P.Type like 'CreditSlip%' and S.MeetingOccurId = " + MeetingId + " and S.MeetingDate like '%" + today + "%' Group by P.RefundAmount ";
        kony.print(":: SQLQueryForCreditSlips" + SQLQueryForCreditSlips);

        function fetchMEGDrawerDataForPaymentModesCreditSlipsSuccessCallBack(resp) {
            kony.print("Credit slip resp length is:" + resp.length);
            //Callback
            callback.call(null, resp);
        }
        //Execute Sql query
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQueryForCreditSlips, null, fetchMEGDrawerDataForPaymentModesCreditSlipsSuccessCallBack, eventErrorCallBack);
    },
    fetchMEGDrawerDataForTotalSubsidyAmount: function(MeetingId, EmpId, callback) {
        var today = supportTime(new Date(), "", "yyyy-mm-dd");
        kony.print("::DJP:: Today = " + today);
        var SQLQuery;
        SQLQuery = "SELECT SUM(SubsidyAmount) as amount FROM SaleDetails WHERE CountryID = '" + getCountryID() + "' AND MeetingOccurId = " + MeetingId + " and MeetingDate like '%" + today + "%'"
        kony.print("::AWS subsidy query ::" + SQLQuery);

        function fetchMEGDrawerDataForTotalSubsidyAmountSuccessCallback(res) {
            kony.print("::result res::" + JSON.stringify(res));
            if (res && res.length > 0) {
                callback.call(null, res[0].amount);
            } else {
                callback.call(null, 0);
            }
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQuery, null, fetchMEGDrawerDataForTotalSubsidyAmountSuccessCallback, eventErrorCallBack);
    },
    checkForSplitPayment: function(MeetingId, EmpId, callback) {
        var today = glbMeetingDate.split('T')[0];
        //var whrClause =" where HasSplitPayment= '1' AND CountryID = '" + getCountryID() + "' AND MeetingOccurId = " + MeetingId + " and MeetingDate like '%" + today + "%'"
        //var query = "Select Type,max(NoOfCheques) as CheckNo,COUNT(Type) as Entries From SalePayments SP join SaleDetails SD on SP.SaleTransactnId = SD.SaleTransactnId Where  SD.CountryID = '" + getCountryID() + "' AND MeetingOccurId = " + MeetingId + " and MeetingDate like '%" + today + "%' Group by Type Order by CheckNo Desc"; //** MEG 7132	
        var query = "SELECT max(NoOfCheques) as CheckNo, sp.type as type, (total(case when amount > 0 then amount end) ) as pos,(total(case when amount < 0 then amount end) ) as neg FROM SalePayments SP join SaleDetails SD on SP.SaleTransactnId = SD.SaleTransactnId Where  SD.CountryID = '" + getCountryID() + "' AND MeetingOccurId = " + MeetingId + " and MeetingDate like '%" + today + "%' group by sp.type order by sp.NoOfCheques desc";

        function checkForSplitPaymentSuccessCallback(res) {
            kony.print("checkForSplitPaymentSuccessCallback res " + JSON.stringify(res));
            if (res.length > 0) {
                if (res[0].CheckNo == 3) {
                    callback.call(null, true, 3);
                } else if (res[0].CheckNo == 2) {
                    var isCashTypeAvailable = _.some(res, function(obj) {
                        var tempPos = parseFloat(obj.pos).toFixed(2);
                        var tempNeg = parseFloat(obj.neg).toFixed(2);
                        kony.print("tempPos " + tempPos);
                        kony.print("tempNeg " + tempNeg);
                        return (obj.type == "Cash" && (parseFloat(tempPos) + parseFloat(tempNeg)).toFixed(2) > 0);
                    });
                    var isCheckAvailable = _.some(res, function(obj) {
                        var tempPos = parseFloat(obj.pos).toFixed(2);
                        var tempNeg = parseFloat(obj.neg).toFixed(2);
                        kony.print("tempPos " + tempPos);
                        kony.print("tempNeg " + tempNeg);
                        return (obj.type == "Check" && (parseFloat(tempPos) + parseFloat(tempNeg)).toFixed(2) > 0);
                    });
                    kony.print("::isCashTypeAvailable::" + isCashTypeAvailable + "::isCheckAvailable::" + isCheckAvailable);
                    if (isCashTypeAvailable) {
                        callback.call(null, true, 3);
                    } else if (isCheckAvailable) {
                        boTallyMeetingCashout.checkPaymentAvailableInSplit(MeetingId, function(matchflag) {
                            if (matchflag == '1') {
                                callback.call(null, true, 3);
                            } else {
                                callback.call(null, true, 2);
                            }
                        });
                    } else {
                        callback.call(null, true, 2);
                    }
                } else {
                    callback.call(null, false, 0);
                }
            } else {
                callback.call(null, false, 0);
            }
        }
        //DBSaleDetailsController.find(whrClause, checkForSplitPaymentSuccessCallback, eventErrorCallBack);
        kony.print("checkForSplitPayment query " + query);
        kony.sync.single_select_execute(kony.sync.getDBName(), query, null, checkForSplitPaymentSuccessCallback, eventErrorCallBack);
    },
    checkPaymentAvailableInSplit: function(MeetingId, callback) {
        var today = glbMeetingDate.split('T')[0];
        //var sqlQuery= "SELECT SP.AMOUNT, SUM(SL.SPLITAMOUNT), CASE WHEN SP.AMOUNT = SUM(SL.SPLITAMOUNT) THEN 0 ELSE 1 END AS matchflag FROM SALEPAYMENTS SP JOIN SALEDETAILS SD ON SP.SALETRANSACTNID = SD.SALETRANSACTNID LEFT JOIN SPLITSALEPAYMENT SL ON  SP.SALETRANSACTNID = SL.SALETRANSACTNID where SP.type ='Check' AND SL.SplitType='Check' AND SL.IsSplit='1' AND SD.CountryID = '" + getCountryID() + "' AND SD.MeetingOccurId = " + MeetingId + " and SD.MeetingDate like '%" + today + "%' group by sp.saletransactnid order by  matchflag DESC limit 0,1";
        var sqlQuery = "SELECT SL.* FROM SALEDETAILS SD LEFT JOIN SALEPAYMENTS SP ON SD.SALETRANSACTNID = SP.SALETRANSACTNID LEFT JOIN SPLITSALEPAYMENT SL ON SL.SALETRANSACTNID = SD.SALETRANSACTNID where SL.IsSplit='0' and (SL.SplitType ='Check' OR SL.SplitType='Cash') AND SD.CountryID = '" + getCountryID() + "' AND SD.MeetingOccurId = " + MeetingId + " and SD.MeetingDate like '%" + today + "%'";
        // var sqlQuery = "SELECT SP.Type FROM SaleDetails SD LEFT JOIN SalePayments SP ON SP.SaleTransactnId = SD.SaleTransactnId  where SD.MeetingOccurID = '"+glbMeetingNum+"' and SD.MeetingDate like '%" +today + "%' AND SP.SaleTransactnId NOT IN(SELECT SaleTransactnId FROM SplitSalePayment) AND (SP.Type='Cash' OR SP.Type='Check')";
        kony.print("::7132::sqlQuery::" + sqlQuery);

        function checkPaymentAvailableInSplitSuccessCallback(res) {
            kony.print("checkPaymentAvailableInSplitSuccessCallback res " + JSON.stringify(res));
            if (res && res.length > 0) {
                callback.call(null, 1);
            } else {
                boTallyMeetingCashout.chkCashCheckPaymenExcptSplit(function(matchflag) {
                    if (matchflag == '1') {
                        callback.call(null, 1);
                    } else {
                        callback.call(null, 0);
                    }
                });
            }
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, checkPaymentAvailableInSplitSuccessCallback, eventErrorCallBack);
    },
    //service Validate Bank deposit slip number
    validateBankDepositSlipNumberViaWS: function(meetingOccurrenceID, meetingDate, depositSlipNumberValue, callback) {
        var ValidateBankDepositSlipNumber_inputparam = {};
        ValidateBankDepositSlipNumber_inputparam["serviceID"] = Services.validateBankDepositSlipNumber;
        ValidateBankDepositSlipNumber_inputparam["MeetingOccurrenceID"] = meetingOccurrenceID;
        ValidateBankDepositSlipNumber_inputparam["MeetingDate"] = meetingDate;
        ValidateBankDepositSlipNumber_inputparam["BankDepositNumber"] = JSON.stringify(depositSlipNumberValue);
        if (JsonService) {
            kony.print("IN JSON Service.. setting header");
            ValidateBankDepositSlipNumber_inputparam["httpheaders"] = setRESTHeader();
        } else {
            kony.print("IN SOAP Service.. setting header");
            ValidateBankDepositSlipNumber_inputparam["DeviceID"] = gblDeviceID;
            ValidateBankDepositSlipNumber_inputparam["AccessToken"] = glbSPAuthToken;
            ValidateBankDepositSlipNumber_inputparam["Source"] = gblSourceVal;
            ValidateBankDepositSlipNumber_inputparam["httpheaders"] = {};
        }
        ValidateBankDepositSlipNumber_inputparam["httpconfigs"] = {};
        GetEmployeeByNameOrNumber = Network.makeServiceCall(ValidateBankDepositSlipNumber_inputparam, validateBankDepositSlipNumberWSCallback, false); //true to allow offline data access
        function validateBankDepositSlipNumberWSCallback(status, validateBankDepositSlipNumberResponse) {
            try {
                if (status == 400) {
                    kony.print(" opt status = " + validateBankDepositSlipNumberResponse["opstatus"] + " ==== response  = " + JSON.stringify(validateBankDepositSlipNumberResponse));
                    if (validateBankDepositSlipNumberResponse["opstatus"] == 0) {
                        var isValid = false;
                        var failedData = [];
                        printObj("::BankResponse::", validateBankDepositSlipNumberResponse["Meeting"]);
                        if (checkValidString(validateBankDepositSlipNumberResponse["Meeting"]) && validateBankDepositSlipNumberResponse["Meeting"].length > 0) {
                            _.each(validateBankDepositSlipNumberResponse["Meeting"], function(v) {
                                failedData.push(v.BankDepositNumber);
                            })
                        } else {
                            isValid = true;
                        }
                        callback.call(null, isValid, failedData);
                    } else {
                        //Callback - opstatus is Nonzero
                        //Hide Progress View
                        removeProgressView();
                        CommonErrHandler.networkError(validateBankDepositSlipNumberResponse['opstatus'])
                            //callback.call(null, false);
                    }
                } else {
                    kony.print("status is other than 400");
                    //Hide Progress View
                    removeProgressView();
                    //CommonErrHandler.networkError(status, validateBankDepositSlipNumberResponse);	                
                }
            } catch (e) {
                removeProgressView();
                GlobalException(e);
            }
        }
    },
    deleteTallyCashout: function(whrClause, callback) {
        //To Delete Cashout Data from TallyMeeting table
        function deleteTallyCashoutSuccessCallBack(resp) {
            kony.print("Resp length is:" + resp.length);
        }
        var timesheetId = 0;

        function successGetPK(res) {
            if (res.length > 0) {
                timesheetId = res[0].Id;
                com.kony.WeightWatchers.Tally.TallyMeeting.removeDeviceInstanceByPK(timesheetId, deleteTallyCashoutSuccessCallBack, eventErrorCallBack);
            }
            callback.call(null);
        }
        DBTallyMeetingController.find(whrClause, successGetPK, eventErrorCallBack);
    },
    selectMaxIdFromTable: function(tableName, callback) {
        var query = "Select Max(Id) as MaxId From " + tableName;

        function selectMaxIdFromTableSuccessCallBack(resp) {
            kony.print("1 selectMaxIdFromTableResult ===" + resp);
            var Id = 1;
            if (resp[0].MaxId != null) {
                Id = resp[0].MaxId + 1;
            }
            //Callback
            callback.call(null, Id);
        }
        //Execute Sql query
        kony.sync.single_select_execute(kony.sync.getDBName(), query, null, selectMaxIdFromTableSuccessCallBack, eventErrorCallBack);
    },
    insertTallyCashout: function(cashoutObj, isMarkUpload) {
        //To Insert Cashout Data in TallyMeeting table
        kony.print("CashOut Object: " + JSON.stringify(cashoutObj));

        function createCashoutSuccessCallback(res) {
            //if(IsAWSLocationEnabled())
            boTallyMeetingCashout.InsertBankDepositeDetails(cashoutObj[0].Id, isMarkUpload);
            kony.print(getMessageTemplate("addSuccess", "Cashout"), "info")
        }
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        kony.print("::DJP:: Today = " + today);
        kony.print("in deleteInsertCashoutData");
        var whrClause = " where MeetingId = " + glbMeetingNum + " and MeetingDate like '%" + today + "%'";

        function insertTallyCashoutSuccessGetPK(res) {
            kony.print("in successGetPK ==>" + JSON.stringify(res));
            if (res.length > 0) {
                var v = res[0];
                var tempcashOut = {};
                kony.print("ID value --- " + kony.sync.getString(v.Id));
                //cashOutData = res;
                tempcashOut.Id = parseInt(kony.sync.getString(v.Id));
                kony.print("tempcashOut.Id====" + tempcashOut.Id);
                com.kony.WeightWatchers.Tally.TallyMeeting.removeDeviceInstanceByPK(tempcashOut.Id, function() {
                    DBTallyMeetingController.createAll(cashoutObj, createCashoutSuccessCallback, eventErrorCallBack, isMarkUpload);
                }, eventErrorCallBack);
            } else {
                DBTallyMeetingController.createAll(cashoutObj, createCashoutSuccessCallback, eventErrorCallBack, isMarkUpload);
            }
        }
        DBTallyMeetingController.find(whrClause, insertTallyCashoutSuccessGetPK, eventErrorCallBack);
    },
    InsertBankDepositeDetails: function(TallyMeetingID, isMarkUpload) {
        boTallyMeetingCashout.getDepositeAmountFromSalePayment(function(result) {
            kony.print("::Result::PK::" + JSON.stringify(result));
            if (result.length > 0) {
                var data = setBankDepositeDetailsData(result, TallyMeetingID);
                //kony.print("data.length " + data.length);
                function InsertBankDepositeDetailsSuccessCallback() {
                    kony.print(getMessageTemplate("addSuccess", "Bankdeposite"), "info")
                    kony.print("data.length " + data.length);
                    //** MEG 7223
                    if (data.length == 2) {
                        var wcs = "where MeetingID ='" + glbMeetingNum + "'";
                        var updateObj = {
                            "BankDepositSlipNumber": ""
                        };

                        function updateBankDepositNumberCallback(res) {
                            kony.print("updateBankDepositNumberCallback updated successfully")
                        }
                        kony.print("updateObj " + updateObj);
                        kony.print("wcs " + wcs);
                        DBTallyMeetingController.update(wcs, updateObj, updateBankDepositNumberCallback, eventErrorCallBack, isMarkUpload);
                    } else {
                        kony.print("Do Nothing");
                    }
                    //** End
                }
                DBBankDepositDetailsController.createAll(data, InsertBankDepositeDetailsSuccessCallback, eventErrorCallBack, isMarkUpload);
            }
        });
    },
    deleteInsertCashoutData: function(markUpload) {
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
        kony.print("::DJP:: Today = " + today);
        kony.print("in deleteInsertCashoutData");
        var whrClause = " where MeetingId = " + glbMeetingNum + " and MeetingDate like '%" + today + "%'";
        var cashOutData = [];

        function successGetPK(res) {
            kony.print("in successGetPK ==>" + JSON.stringify(res));
            if (res.length > 0) {
                var v = res[0];
                var tempcashOutData = {};
                kony.print("ID value --- " + kony.sync.getString(v.Id));
                //cashOutData = res;
                tempcashOutData.Id = parseInt(kony.sync.getString(v.Id));
                tempcashOutData.MeetingId = kony.sync.getString(v.MeetingId);
                tempcashOutData.MeetingDate = kony.sync.getString(v.MeetingDate);
                tempcashOutData.Cash = kony.sync.getString(v.Cash);
                tempcashOutData.Checks = kony.sync.getString(v.Checks);
                tempcashOutData.CreditCard = kony.sync.getString(v.CreditCard);
                tempcashOutData.CreditSlipsRedeemed = kony.sync.getString(v.CreditSlipsRedeemed);
                tempcashOutData.CreditSlipsIssued = kony.sync.getString(v.CreditSlipsIssued);
                tempcashOutData.BankCollected = kony.sync.getString(v.BankCollected);
                tempcashOutData.BankDepositSlipNumber = kony.sync.getString(v.BankDepositSlipNumber);
                tempcashOutData.DifferenceReason = kony.sync.getString(v.DifferenceReason);
                tempcashOutData.DifferenceAmount = kony.sync.getString(v.DifferenceAmount);
                tempcashOutData.DebitCardInteract = kony.sync.getString(v.DebitCardInteract);
                tempcashOutData.TotalSubsidyAmount = kony.sync.getString(v.TotalSubsidyAmount);
                tempcashOutData.WeekNumber = kony.sync.getString(v.WeekNumber);
                kony.print("cashOutData.Id====" + tempcashOutData.Id);
                //MEG-4512
                boTallyMeetingCashout.logCahsoutData(tempcashOutData);
                cashOutData.push(tempcashOutData);
                com.kony.WeightWatchers.Tally.TallyMeeting.removeDeviceInstanceByPK(tempcashOutData.Id, deleteTallyCashoutSuccessCallBack, eventErrorCallBack);
            }
        }
        DBTallyMeetingController.find(whrClause, successGetPK, eventErrorCallBack);

        function deleteTallyCashoutSuccessCallBack() {
            kony.print("in deleteTallyCashoutSuccessCallBack");
            boTallyMeetingCashout.selectMaxIdFromTable("TallyMeeting", selectMaxIdFromTableResponse);
        }

        function selectMaxIdFromTableResponse(response) {
            kony.print("in selectMaxIdFromTableResponse ===>" + response);
            if (cashOutData.length > 0) {
                cashOutData[0].Id = response;
                kony.print("in insertTallyCashout ===>" + JSON.stringify(cashOutData));
                kony.print("in insertTallyCashout id===>" + cashOutData[0].Id);
                boTallyMeetingCashout.insertTallyCashout(cashOutData, markUpload);
            }
        }
    },
    logCahsoutData: function(tempcashOutData) {
        var cashOutdata = {};
        cashOutdata.Cash = tempcashOutData.Cash;
        cashOutdata.Checks = tempcashOutData.Checks;
        cashOutdata.CreditCard = tempcashOutData.CreditCard;
        cashOutdata.CreditSlipsRedeemed = tempcashOutData.CreditSlipsRedeemed;
        cashOutdata.CreditSlipsIssued = tempcashOutData.CreditSlipsIssued;
        cashOutdata.BankCollected = tempcashOutData.BankCollected;
        cashOutdata.BankDepositSlipNumber = tempcashOutData.BankDepositSlipNumber;
        cashOutdata.DifferenceReason = tempcashOutData.DifferenceReason;
        cashOutdata.DifferenceAmount = tempcashOutData.DifferenceAmount;
        cashOutdata.DebitCardInteract = tempcashOutData.DebitCardInteract;
        boMonitor.log("Tally Cashout", "btnContinue", cashOutdata, FlowForMonitor.Tally);
    },
    getTallyPaymentDiffReasonData: function(countryId, callback) {
        var whrClause = " where CountryID = " + countryId;

        function getTallyPaymentDiffReasonDataSuccessCallBack(res) {
            kony.print("In getTallyPaymentDiffReasonDataSuccessCallBack : " + res.length);
            callback.call(null, res);
        }
        com.kony.WeightWatchers.ProductSyncScope.TallyDiffReasonLookup.find(whrClause, getTallyPaymentDiffReasonDataSuccessCallBack, eventErrorCallBack);
    },
    getDepositeAmountFromSalePayment: function(callback) {
        var today = glbMeetingDate.split('T')[0];
        var inputParams = {
                "today": today,
                "glbMeetingNum": glbMeetingNum
            }
            // var SqlQuery = "SELECT SUM(SP.Amount) as amount FROM SaleDetails SD LEFT JOIN SalePayments SP ON SP.SaleTransactnId = SD.SaleTransactnId  where SD.MeetingOccurID = '"+glbMeetingNum+"' and SD.MeetingDate like '%" +today + "%' AND SP.SaleTransactnId NOT IN(SELECT SaleTransactnId FROM SplitSalePayment) AND (SP.Type='Cash' OR SP.Type='Check')";
            // var SqlQuery = "SELECT (total(case when SP.amount > 0 then SP.amount end)) as pos, (total(case when SP.amount < 0 then SP.amount end)) as neg FROM SaleDetails SD LEFT JOIN SalePayments SP ON SP.SaleTransactnId = SD.SaleTransactnId  where SD.MeetingOccurID = '"+glbMeetingNum+"' and SD.MeetingDate like '%" +today + "%' AND SP.SaleTransactnId NOT IN(SELECT SaleTransactnId FROM SplitSalePayment) AND (SP.Type='Cash' OR SP.Type='Check')";
            //**MEG 7251
        var SqlQuery = " SELECT (total(case when SP.amount > 0 and SP.Type='Cash' then SP.amount end)) as posCash, (total(case when SP.amount < 0 and SP.Type='Cash'  then SP.amount end)) as negCash ,(total(case when SP.amount > 0 and SP.Type='Check' then SP.amount end)) as posCheck, (total(case when SP.amount < 0 and SP.Type='Check'  then SP.amount end)) as negCheck FROM SaleDetails SD LEFT JOIN SalePayments SP ON SP.SaleTransactnId = SD.SaleTransactnId  where SD.MeetingOccurID = '" + glbMeetingNum + "' and SD.MeetingDate like '%" + today + "%' AND SP.SaleTransactnId NOT IN(SELECT SaleTransactnId FROM SplitSalePayment) AND (SP.Type='Cash' OR SP.Type='Check')";

        function getDepositeAmountFromSalePaymentSuccessCallBack(res) {
            if (IsAWSLocationEnabled()) {
                var isCashChkAmtPrest = false;
                var amt = 0;
                var amtCheck = 0;
                var amtCash = 0;
                var amtData = [];
                kony.print("::inside0::" + JSON.stringify(res));
                if (res.length > 0) {
                    kony.print("::inside1");
                    //**MEG 7251
                    amtCheck = parseFloat(parseFloat(res[0].posCheck).toFixed(2)) + parseFloat(parseFloat(res[0].negCheck).toFixed(2));
                    amtCheck = amtCheck.toFixed(2);
                    kony.print("amtCheck " + amtCheck);
                    amtCash = parseFloat(parseFloat(res[0].posCash).toFixed(2)) + parseFloat(parseFloat(res[0].negCash).toFixed(2));
                    amtCash = amtCash.toFixed(2);
                    kony.print("amtCash " + amtCash);
                    amt = parseFloat(amtCheck) + parseFloat(amtCash);
                    amt = parseFloat(amt).toFixed(2);
                    kony.print("amt " + amt);
                    if (checkValidString(amt)) isCashChkAmtPrest = true;
                    kony.print("isCashChkAmtPrest " + isCashChkAmtPrest);
                    kony.print("amt " + amt);
                    amtData.push({
                        "amtCheck": amtCheck,
                        "amtCash": amtCash,
                        "amt": amt
                    });
                    kony.print("amtData " + JSON.stringify(amtData));
                    //**End
                    boTallyMeetingCashout.getDepositeAmountFromSplitPayment(amtData, isCashChkAmtPrest, callback);
                } else {
                    kony.print("::inside2");
                    amtData.push({
                        "amtCheck": amtCheck,
                        "amtCash": amtCash,
                        "amt": amt
                    });
                    boTallyMeetingCashout.getDepositeAmountFromSplitPayment(amtData, false, callback);
                }
            } else {
                callback.call(null, res);
            }
        }
        kony.print("getDepositeAmountFromSalePayment SqlQuery " + SqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), SqlQuery, null, getDepositeAmountFromSalePaymentSuccessCallBack, eventErrorCallBack);
    },
    getDepositeAmountFromSplitPayment: function(amtData, isCashChkPrest, callback) {
        var today = glbMeetingDate.split('T')[0];
        var inputParams = {
            "today": today,
            "glbMeetingNum": glbMeetingNum
        };
        //**MEG 7251
        var SqlQuery = "SELECT  (total(case when SP.SplitType='Check'  then SP.SplitAmount  end)) as checks, (total(case when SP.SplitType='Cash' then SP.SplitAmount end)) as cash ,SUM(SP.SplitAmount) as amount FROM SaleDetails SD JOIN SplitSalePayment SP ON SP.SaleTransactnId = SD.SaleTransactnId  where (SP.SplitType='Check' or  SP.SplitType='Cash') AND SD.MeetingOccurID = '" + glbMeetingNum + "' and SD.MeetingDate like '%" + today + "%' GROUP BY SP.SplitNumber";

        function getDepositeAmountFromSplitPaymentSuccessCallBack(res) {
            kony.print("amtData " + JSON.stringify(amtData));
            var amtData1 = amtData;
            kony.print("::11::amtData1::" + JSON.stringify(amtData1));
            if (res.length > 0) {
                kony.print("::00::res::" + JSON.stringify(res));
                kony.print("isCashChkPrest " + isCashChkPrest);
                kony.print("res.length " + res.length);
                if (isCashChkPrest && res.length == 2 && amtData1.length > 0 && amtData1[0].amt > 0) res.unshift({
                    "amount": amtData1[0].amt,
                    "checks": amtData1[0].amtCheck,
                    "cash": amtData1[0].amtCash
                });
                else {
                    res[0]['amount'] = parseFloat(res[0]['amount']) + parseFloat(amtData1[0].amt);
                    res[0]['checks'] = parseFloat(res[0]['checks']) + parseFloat(amtData1[0].amtCheck);
                    res[0]['cash'] = parseFloat(res[0]['cash']) + parseFloat(amtData1[0].amtCash);
                }
                kony.print("::11::res::" + JSON.stringify(res));
                callback.call(null, res);
            } else {
                var arr = [{
                    'amount': amtData1[0].amt,
                    'checks': amtData1[0].amtCheck,
                    'cash': amtData1[0].amtCash
                }];
                printObj("::Else::Arr::", arr);
                callback.call(null, arr);
            }
        }
        //**End
        kony.print("SqlQuery " + SqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), SqlQuery, null, getDepositeAmountFromSplitPaymentSuccessCallBack, eventErrorCallBack);
    },
    chkCashCheckPaymenExcptSplit: function(callback) {
        var today = glbMeetingDate.split('T')[0];
        /*var inputParams = {
        	"today":today,
        	"glbMeetingNum":glbMeetingNum
        }*/
        //var SqlQuery = "Select count(SplitType) as CashChkCount from SplitSalePayment Where  (SplitType='Cash' OR SplitType='Check') and IsSplit = 0";
        //var SqlQuery = "SELECT SP.Type FROM SaleDetails SD LEFT JOIN SalePayments SP ON SP.SaleTransactnId = SD.SaleTransactnId  where SD.MeetingOccurID = '"+glbMeetingNum+"' and SD.MeetingDate like '%" +today + "%' AND SP.SaleTransactnId NOT IN(SELECT SaleTransactnId FROM SplitSalePayment) AND (SP.Type='Cash' OR SP.Type='Check')";
        var SqlQuery = "SELECT SP.Type as type, (total(case when amount > 0 then amount end) ) as pos,(total(case when amount < 0 then amount end) ) as neg FROM SalePayments SP   JOIN SaleDetails SD ON SP.SaleTransactnId = SD.SaleTransactnId  where SD.MeetingOccurID = '" + glbMeetingNum + "' and SD.MeetingDate like '%" + today + "%' AND SP.SaleTransactnId NOT IN(SELECT SaleTransactnId FROM SplitSalePayment) AND (SP.Type='Cash' OR SP.Type='Check') group by SP.type";

        function checkCashChkPaymenInSaleSplitPaymentSuccessCallback(res) {
            kony.print("::checkCashChkPaymenInSaleSplitPaymentSuccessCallback " + JSON.stringify(res));
            if (res && res.length > 0) {
                kony.print("::inside1 count");
                var isCashTypeAvailable = _.some(res, function(obj) {
                    var tempPos = parseFloat(obj.pos).toFixed(2);
                    var tempNeg = parseFloat(obj.neg).toFixed(2);
                    kony.print("tempPos " + tempPos);
                    kony.print("tempNeg " + tempNeg);
                    return (obj.type == "Cash" && (parseFloat(tempPos) + parseFloat(tempNeg)).toFixed(2) > 0);
                });
                var isCheckAvailable = _.some(res, function(obj) {
                    var tempPos = parseFloat(obj.pos).toFixed(2);
                    var tempNeg = parseFloat(obj.neg).toFixed(2);
                    kony.print("tempPos " + tempPos);
                    kony.print("tempNeg " + tempNeg);
                    return (obj.type == "Check" && (parseFloat(tempPos) + parseFloat(tempNeg)).toFixed(2) > 0);
                });
                /* var isCashTypeAvailable = _.some (res,function(obj){
                   
                     return (obj.type =="Cash" && (parseFloat(obj.pos).toFixed(2) + parseFloat(obj.neg).toFixed(2)) > 0);
                 });
                 var isCheckAvailable =  _.some (res,function(obj){
                     return (obj.type =="Check" && (parseFloat(obj.pos).toFixed(2) + parseFloat(obj.neg).toFixed(2)) > 0);
                 });*/
                kony.print("::isCashTypeAvailable::" + isCashTypeAvailable + "::isCheckAvailable::" + isCheckAvailable);
                if (isCashTypeAvailable || isCheckAvailable) {
                    callback.call(null, true, 3);
                } else {
                    callback.call(null, 0);
                }
            } else {
                kony.print("::inside2 count");
                callback.call(null, 0);
            }
        }

        function checkCashChkPaymenInSaleSplitPaymentErrorCallback(res) {
            callback.call(null, 0);
        }
        kony.print("checkCashChkPaymenInSaleSplitPayment SqlQuery " + SqlQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), SqlQuery, null, checkCashChkPaymenInSaleSplitPaymentSuccessCallback, checkCashChkPaymenInSaleSplitPaymentErrorCallback);
    }
}