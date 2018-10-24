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
    //service Validate Bank deposit slip number
    validateBankDepositSlipNumberViaWS: function(meetingOccurrenceID, meetingDate, depositSlipNumberValue, callback) {
        var ValidateBankDepositSlipNumber_inputparam = {};
        ValidateBankDepositSlipNumber_inputparam["serviceID"] = Services.validateBankDepositSlipNumber;
        ValidateBankDepositSlipNumber_inputparam["MeetingOccurrenceID"] = meetingOccurrenceID;
        ValidateBankDepositSlipNumber_inputparam["MeetingDate"] = meetingDate;
        ValidateBankDepositSlipNumber_inputparam["BankDepositNumber"] = depositSlipNumberValue;
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
                        if (validateBankDepositSlipNumberResponse["Meeting"].length <= 0 || _.isEmpty(validateBankDepositSlipNumberResponse.Meeting[0])) {
                            isValid = true;
                        }
                        callback.call(null, isValid);
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
    }
}