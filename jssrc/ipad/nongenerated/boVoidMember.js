var messageText = "";
var boVoidMember = {
    MemberID: 0,
    SaleTransactnId: 0,
    isNonTangibleSale: false,
    //Ordering is Important Here
    Tables: {
        "0": "SalePayments",
        "1": "SaleItems",
        "2": "SaleDetails",
        "3": "NoteDetails",
        "4": "MilestoneAchieved",
        "5": "WeighDetails",
        "6": "RefferalDetails",
        "7": "SplitSalePayment"
    },
    /**
     * This function gets the Sync Status and proceed to get the Transaction ID 
     * @param {} MemberID
     * @param {} TransactionID 
     * @param {} tables that you want to delete - Optional
     * @returns {} 
     */
    voidMember: function(MemberID, TransactionID, isNonTangibleSale, successCallback) {
        boVoidMember.messageText = "";
        boVoidMember.isNonTangibleSale = isNonTangibleSale;
        kony.print("::voidMember::isNonTangibleSale=" + isNonTangibleSale);
        var whereClause = "where MemberID = '" + MemberID + "'";
        boVoidMember.successCallback = successCallback;
        kony.print("::voidMember::whereClause=" + whereClause);
        kony.print("::voidMember::TransactionID=" + TransactionID);
        boVoidMember.MemberID = MemberID;
        kony.print("boVoidMember.MemberID=" + boVoidMember.MemberID);
        //Check if Transaction ID is prsent - if not find it
        if (checkValidString(TransactionID)) {
            boVoidMember.SaleTransactnId = TransactionID;
            boVoidMember.deleteTransaction();
        } else {
            boVoidMember.getTransactionID(whereClause);
        }
    },
    /**
     * This Function is used to get the SaleTransactnId for the selected member
     * @param {} whereClause
     * @param {} tables that you want to delete
     * @returns {} 
     */
    getTransactionID: function(whereClause) {
        //Get the voidable transactionid - Add/ Enroll
        whereClause += " and MeetingDate like '%" + glbMeetingDate.split("T")[0] + "%' and MeetingOccurID ='" + glbMeetingNum + "' and isVoidAllowed = 'true'";
        kony.print("::getTransactionID::whereClause=" + whereClause);
        DBSaleDetailsController.find(whereClause, function(res) {
            kony.print("::getTransactionID::res=" + JSON.stringify(res));
            if (res.length > 0) {
                var transID = kony.sync.getString(res[0].SaleTransactnId);
                boVoidMember.SaleTransactnId = transID;
                boVoidMember.deleteTransaction(isPartial);
            }
        }, eventErrorCallBack);
    },
    /**
     * This functions deletes the data for given member depending on the status of the sync. 
     * @param {} tables - Array of tables to be deleted.
     * @returns {} 
     */
    // kony.i18n.getLocalizedString("strAlertSimpleReturn")
    deleteTransaction: function() {
        var awsTable = IsAWSLocationEnabled() ? "SplitSalePayment" : "SalePayments";
        var numberPattern = /^[0-9]*$/;
        boVoidMember.getPaymentForReturn(boVoidMember.SaleTransactnId, function(message, response) {
            kony.print("::deleteTransaction::getPaymentForReturn=message=" + message);
            //messageText = message;
            if (glbIsDisplayCCAmtRefundAlert) {
                if (checkIfNetworkIsAvailable()) {
                    getCreditCardVoidWS(boVoidMember.SaleTransactnId, function getCreditCardVoidWSSuccess(msgText) {
                        kony.print("::deleteTransaction::getCreditCardVoidWS=message=" + msgText);
                        if (message.length == 0) message = msgText;
                        else message = msgText + "\n" + message;
                        boVoidMember.messageText = message;
                        if (numberPattern.test(boVoidMember.MemberID)) {
                            //Sync Done - Processed Member - Call Services
                            boVoidMember.deleteTableAfterSync(awsTable);
                        } else {
                            //Sync Not Done - Freshly Added member - Delete Instance -> No Service Call Reqd
                            boVoidMember.deleteTableBeforeSync(awsTable);
                        }
                    });
                } else {
                    glbIsDisplayCCAmtRefundAlert = false;
                    //if(message.length == 0)
                    var paymentMode = getPaymentModeStrById(PaymentType[9]);
                    message = kony.i18n.getLocalizedString("strAlertSimpleReturn");
                    //message += " "+glbCurrency +creditCrardSalePaymentDataObj.Amount+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(PaymentType[9]);
                    if (deviceLocale == "fr_CA") {
                        message += setPaymentModeToReturn(PaymentType[9]);
                        var returnAmt = " " + addCurrency(totalToBeShown) + " ";
                        message = message.replace("###", returnAmt);
                        kony.print("getPaymentForReturn else message==" + message);
                    } else {
                        message += " " + addCurrency(creditCrardSalePaymentDataObj.Amount) + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(PaymentType[9]);
                    }
                    message += ",";
                    _.each(response, function(p) {
                        var mode = getPaymentModeStrById(kony.sync.getString(p.Type));
                        if (mode != "CreditCard") message += " " + glbCurrency + parseFloat(kony.sync.getString(p.Amount)).toFixed(2) + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(p.Type));
                        //message += " "+getPaymentModeStrById(kony.sync.getString(p.Type))+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + parseFloat(kony.sync.getString(p.Amount)).toFixed(2);// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
                        message += ",";
                    });
                    if (message.slice(-1) == ',') message = message.substr(0, message.length - 1);
                    //message += " "+getPaymentModeStrById(PaymentType[9])+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + creditCrardSalePaymentDataObj.Amount;// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
                    creditCrardSalePaymentDataObj = null;
                    boVoidMember.messageText = message;
                    if (numberPattern.test(boVoidMember.MemberID)) {
                        //Sync Done - Processed Member - Call Services
                        boVoidMember.deleteTableAfterSync(awsTable);
                    } else {
                        //Sync Not Done - Freshly Added member - Delete Instance -> No Service Call Reqd
                        boVoidMember.deleteTableBeforeSync(awsTable);
                    }
                }
            } else {
                boVoidMember.messageText = message;
                if (numberPattern.test(boVoidMember.MemberID)) {
                    //Sync Done - Processed Member - Call Services
                    boVoidMember.deleteTableAfterSync(awsTable);
                } else {
                    //Sync Not Done - Freshly Added member - Delete Instance -> No Service Call Reqd
                    boVoidMember.deleteTableBeforeSync(awsTable);
                }
            }
        });
    },
    getPaymentForReturn: function(transaction, callback) {
        //Now find how much amount to be returned in which type - > Partial Return
        //** 7249
        var transactionSQLQuery = "SELECT S.SubsidyAmount as SubsidyAmount,(select count(1) from saleitems WHERE SaleTransactnId ='" + transaction + "' and IsSaleItemVoid = '1') as Partial, " + "Sum(B.AdjustTotal) as TotalAmount, Sum(B.UnitPriceTax * B.Quantity) as TotalTax," + " A.AuthorizationCode, A.CCLastFourDigits, A.CardType, A.ExpirationDate, A.HasToken, A.InvoiceNumber," + " A.ReferenceNumber, A.RequestId, A.Token, A.TokenExpirationDate, A.TransactionStatus, A.TransactionType, A.IsTrack," + " A.Amount, " + " A.IsIngenicoPayment, " + " A.Type, " + " A.SaleTransactnId " + " FROM SalePayments A " + " INNER JOIN SaleItems B ON B.SaleTransactnId = A.SaleTransactnId " + " AND A.CountryID = '" + getCountryID() + "'" + " AND A.SaleTransactnId ='" + transaction + "'" + " AND B.IsSaleItemVoid=0 " + " INNER JOIN ProductDetail C ON B.ProductID=C.ProductID " + "INNER JOIN SaleDetails S ON S.SaleTransactnId = A.SaleTransactnId" + " WHERE (A.RefundAmount ='NULL' " + "OR A.RefundAmount IS NULL " + "OR A.RefundAmount= '' " + "OR A.RefundAmount= 0) " + " AND C.LocationID=" + glbLocationID + " GROUP BY A.Type, " + "A.SaleTransactnId";
        kony.print("::getPaymentForReturn::getSalePaymentDatabySaleTransactionId transactionSQLQuery=" + transactionSQLQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, function(response) {
            kony.print("::deleteTransaction::::response::" + JSON.stringify(response));
            var messageToBeSent = "";
            if (response.length > 0) {
                var v = response[0];
                var isPartial = kony.sync.getString(v.Partial); //This feild gives if any record has IsSaleItemVoid = 1 (IsSaleItemVoid becuase now partial quantity return is not there so Sale Item can be only Voided)
                var total = (IsAWSLocationEnabled()) ? (parseFloat(parseFloat(kony.sync.getString(v.TotalAmount)) - parseFloat(kony.sync.getString(v.SubsidyAmount)))) : parseFloat(kony.sync.getString(v.TotalAmount)); //** 7249
                var totalTax = parseFloat(kony.sync.getString(v.TotalTax));
                kony.print("total=" + total + "totalTax=" + totalTax);
                var totalToBeShown = (total + totalTax).toFixed(2);
                if (isPartial >= 1) {
                    kony.print("::getPaymentForReturn:://Partial");
                    //Partial Return
                    var mode = "";
                    if (kony.sync.getString(v.Type) == PaymentType[1] && response.length == 1) {
                        mode = PaymentType[1];
                    } else if (kony.sync.getString(v.Type) == PaymentType[13]) {
                        mode = PaymentType[13];
                    } else {
                        mode = PaymentType[9];
                    }
                    /*Checking payment mode as credit for refund amount in credit card 
				     if credit card feature is enabled and location also enabled for credit card */
                    if (mode == "CreditCard" && kony.sync.getString(v.IsTrack) == true) {
                        glbIsDisplayCCAmtRefundAlert = true;
                        creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(v);
                        creditCrardSalePaymentDataObj.Amount = totalToBeShown;
                    } else {
                        kony.print("getPaymentForReturn else paymentMode==" + paymentMode);
                        if (deviceLocale == "fr_CA") {
                            messageToBeSent += setPaymentModeToReturn(mode);
                            var returnAmt = " " + addCurrency(totalToBeShown) + " ";
                            messageToBeSent = messageToBeSent.replace("###", returnAmt);
                        } else {
                            messageToBeSent += " " + addCurrency(totalToBeShown) + " " + kony.i18n.getLocalizedString("strIn") + " " + mode;
                        }
                        //messageToBeSent += " "+mode+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + totalToBeShown;// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
                    }
                } else {
                    //Full Return
                    if (response.length == 1) {
                        // Single Mode Payment
                        kony.print("::getPaymentForReturn:://Single Mode FULL");
                        var mode = getPaymentModeStrById(kony.sync.getString(v.Type));
                        /*Checking payment mode as credit for refund amount in credit card 
				          if credit card feature is enabled and location also enabled for credit card */
                        if (mode == "CreditCard" && kony.sync.getString(v.IsTrack) == true) {
                            glbIsDisplayCCAmtRefundAlert = true;
                            creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(v);
                            creditCrardSalePaymentDataObj.Amount = totalToBeShown;
                        } else {
                            //messageToBeSent += " "+glbCurrency +totalToBeShown+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(kony.sync.getString(v.Type));
                            var paymentMode = getPaymentModeStrById(kony.sync.getString(v.Type));
                            kony.print("getPaymentForReturn else paymentMode==" + paymentMode);
                            if (deviceLocale == "fr_CA") {
                                messageToBeSent += setPaymentModeToReturn(kony.sync.getString(v.Type));
                                var returnAmt = " " + addCurrency(totalToBeShown) + " ";
                                messageToBeSent = messageToBeSent.replace("###", returnAmt);
                                kony.print("getPaymentForReturn else messageToBeSent==" + messageToBeSent);
                            } else {
                                messageToBeSent += " " + addCurrency(totalToBeShown) + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
                            }
                            //messageToBeSent += " "+getPaymentModeStrById(kony.sync.getString(v.Type))+ " " +kony.i18n.getLocalizedString("strProductReturnSuccessMsg1")+" "+ glbCurrency + totalToBeShown;// + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
                        }
                    } else {
                        //Multiple Mode -> Return All 
                        kony.print("::getPaymentForReturn:://Multiple Mode FULL -> Return All ");
                        _.each(response, function(p) {
                            var mode = getPaymentModeStrById(kony.sync.getString(p.Type));
                            /*Checking payment mode as credit for refund amount in credit card 
				     		  if credit card feature is enabled and location also enabled for credit card */
                            if (mode == "CreditCard" && kony.sync.getString(p.IsTrack) == true) {
                                glbIsDisplayCCAmtRefundAlert = true;
                                creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(p);
                                creditCrardSalePaymentDataObj.Amount = parseFloat(kony.sync.getString(p.Amount)).toFixed(2);
                            } else {
                                //messageToBeSent += " "+glbCurrency +parseFloat(kony.sync.getString(p.Amount)).toFixed(2)+ " " +kony.i18n.getLocalizedString("strIn")+" "+getPaymentModeStrById(kony.sync.getString(p.Type));
                                messageToBeSent += " " + getPaymentModeStrById(kony.sync.getString(p.Type)) + " " + kony.i18n.getLocalizedString("strProductReturnSuccessMsg1") + " " + glbCurrency + parseFloat(kony.sync.getString(p.Amount)).toFixed(2); // + " " + kony.i18n.getLocalizedString("strIn") + " " + getPaymentModeStrById(kony.sync.getString(v.Type));
                            }
                            messageToBeSent += ",";
                        });
                        if (messageToBeSent.slice(-1) == ',') messageToBeSent = messageToBeSent.substr(0, messageToBeSent.length - 1);
                    }
                }
            } else {
                messageToBeSent = kony.i18n.getLocalizedString("strMsgTrascationVoidSuccess");
            }
            if (glbIsDisplayCCAmtRefundAlert) {
                if (messageToBeSent.length > 0) // multiple payment with credit card used
                {
                    messageToBeSent = kony.i18n.getLocalizedString("strProductReturnSuccessMsg") + messageToBeSent;
                }
            } else {
                messageToBeSent = kony.i18n.getLocalizedString("strAlertSimpleReturn") + messageToBeSent;
            }
            callback.call(null, messageToBeSent, response);
            kony.print("::getPaymentForReturn::messageToBeSent=" + messageToBeSent);
        }, eventErrorCallBack);
    },
    /**
     * This function is used to delete the data of selected member for the given table 
     * @param {} table
     * @param {} whr
     * @param {} successCallback
     * @returns {} 
     */
    deleteTableBeforeSync: function(table, successCallback) {
        var whr = "where MemberID = '" + boVoidMember.MemberID + "'";
        kony.print("::deleteTransaction:: table=" + table + " and query = " + whr);
        switch (table) {
            case "SplitSalePayment":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    kony.print("::deleteTableBeforeSync:: SplitSalePayment whereClause=" + whereClause);
                    com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.removeDeviceInstance(whereClause, function() {
                        boVoidMember.deleteTableBeforeSync("SalePayments");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "SalePayments":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    kony.print("::deleteTableBeforeSync:: SalePayments whereClause=" + whereClause);
                    com.kony.WeightWatchers.MemberSyncScope.SalePayments.removeDeviceInstance(whereClause, function() {
                        boVoidMember.deleteTableBeforeSync("SaleItems");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "SaleItems":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    kony.print("::deleteTableBeforeSync:: SaleItems whereClause=" + whereClause);
                    com.kony.WeightWatchers.MemberSyncScope.SaleItems.removeDeviceInstance(whereClause, function() {
                        boVoidMember.deleteTableBeforeSync("SaleDetails");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "SaleDetails":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    kony.print("::deleteTableBeforeSync:: SaleDetails whereClause=" + whereClause);
                    com.kony.WeightWatchers.MemberSyncScope.SaleDetails.removeDeviceInstance(whereClause, function() {
                        if (boVoidMember.isNonTangibleSale) {
                            //Delete member and relted Data
                            boVoidMember.deleteTableBeforeSync("MilestoneAchieved");
                        } else {
                            //Process Done -> Callback
                            boVoidMember.successCallback.call(null, boVoidMember.messageText);
                            popupProductReturns.dismiss();
                        }
                    }, eventErrorCallBack, false);
                    break;
                }
            case "MilestoneAchieved":
                {
                    //Delete the milestones acheived today
                    whr += " and WeighInDate like '%" + glbMeetingDate.split("T")[0] + "%'";
                    kony.print("::deleteTableBeforeSync:: MilestoneAchieved whr=" + whr);
                    var milestonesToBeInserted = [],
                        milestonesElligibleID = [];
                    var findEligible = "where MemberID = '" + boVoidMember.MemberID + "'";
                    DBMilestoneEligibleController.find(findEligible, function(resa) {
                        kony.print("::MilestoneEligible::resa=" + JSON.stringify(resa));
                        milestonesElligibleID = _.pluck(resa, '_MilestoneID');
                        kony.print("::MilestoneEligible::milestonesElligibleID=" + JSON.stringify(milestonesElligibleID));
                        DBMilestoneAchievedController.find(whr, function(res) {
                            if (res && res.length > 0) {
                                kony.print("::MilestoneAchieved::res=" + JSON.stringify(res));
                                for (var i in res) {
                                    var v = res[i];
                                    var mID = kony.sync.getString(v.MilestoneID);
                                    if (!_.contains(milestonesElligibleID, parseInt(mID))) {
                                        milestonesToBeInserted.push({
                                            MilestoneID: mID,
                                            MemberID: boVoidMember.MemberID,
                                            IsAchieved: false,
                                            LastUpdatedTS: "",
                                            LocationNum: "",
                                            ReachedDate: "1899-12-30",
                                            TargetWeight: 0,
                                            WeekNumber: 0,
                                            WeighInDate: "1899-12-30"
                                        });
                                    }
                                }
                                kony.print("::MilestoneAchieved::milestonesToBeInserted=" + JSON.stringify(milestonesToBeInserted));
                                com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.removeDeviceInstance(whr, function(res) {
                                    DBMilestoneEligibleController.createAll(milestonesToBeInserted, function() {
                                        boVoidMember.deleteTableBeforeSync("WeighDetails");
                                    }, eventErrorCallBack, false);
                                }, eventErrorCallBack, false);
                            } else {
                                boVoidMember.deleteTableBeforeSync("WeighDetails");
                            }
                        }, eventErrorCallBack, false);
                    }, eventErrorCallBack);
                    break;
                }
            case "WeighDetails":
                {
                    //Delete the todays weight
                    whr += " and MeetingDate like '%" + glbMeetingDate.split("T")[0] + "%' and WeighInDate like '%" + glbMeetingDate.split("T")[0] + "%' and MtngOccrID ='" + glbMeetingNum + "'";
                    kony.print("::deleteTableBeforeSync:: WeighDetails whr=" + whr);
                    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.removeDeviceInstance(whr, function() {
                        boVoidMember.deleteTableBeforeSync("NoteDetails");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "NoteDetails":
                {
                    //Delete Today's Note - Note can only be entered in Process / Add / Enroll so there will be only one note for today for a member
                    whr += " and EntryDate like '%" + glbMeetingDate.split("T")[0] + "%'";
                    kony.print("::deleteTableBeforeSync:: NoteDetails whr=" + whr);
                    com.kony.WeightWatchers.MemberSyncScope.NoteDetails.removeDeviceInstance(whr, function() {
                        boVoidMember.deleteTableBeforeSync("RefferalDetails");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "RefferalDetails":
                {
                    whr += "and Type='Sweepstake'";
                    kony.print("::deleteTableBeforeSync:: RefferalDetails whr=" + whr);
                    com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.removeDeviceInstance(whr, function() {
                        boVoidMember.deleteTableBeforeSync("MemberDetails");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "MemberDetails":
                {
                    var MemberData = {};
                    kony.print("::MemberData::" + JSON.stringify(MemberData));
                    //Delete That Member
                    //Add that member with default values
                    MemberData.IsPAYG = 'true';
                    MemberData.MaintenanceMode = 0;
                    MemberData.TrackerID = 0;
                    MemberData.TrackerStartDate = "0001-01-01T00:00:00";
                    MemberData.WeightCountMet = 0;
                    MemberData.SubscriptnType = "";
                    MemberData.SubscriptnID = 0;
                    MemberData.CouponCode = "";
                    MemberData.ExpirationDate = ""; //Ami : MEGCA-470
                    MemberData.TransactionType = TransactionType.VoidTransaction;
                    MemberData.UserStsEndPrd = "0001-01-01T00:00:00";
                    kony.print("::MemberData Insert::" + JSON.stringify(MemberData));
                    kony.print("::MemberData Insert Where::" + whr);
                    DBMemberDetailsController.update(whr, MemberData, function() {
                        kony.print("::CallBack Void::boVoidMember.messageText=" + boVoidMember.messageText);
                        //messageText = kony.i18n.getLocalizedString("strProductReturnSuccessMsg") + messageText;
                        boVoidMember.successCallback.call(null, boVoidMember.messageText);
                        popupProductReturns.dismiss();
                    }, eventErrorCallBack, true);
                    break;
                }
            default:
                {
                    break;
                };
        }
    },
    /**
     * This function is used to void a member which has been synced after enroll/add flow - need to call delete services 
     * @param {} table - table to be deleted
     * @param {} successCallback 
     * @returns {} 
     */
    deleteTableAfterSync: function(table, successCallback) {
        var whr = "where MemberID = '" + boVoidMember.MemberID + "'";
        kony.print("::deleteTransaction:: table=" + table + " and query = " + whr);
        switch (table) {
            case "SplitSalePayment":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    kony.print("::deleteTableAfterSync:: SplitSalePayment whereClause=" + whereClause);
                    com.kony.WeightWatchers.MemberSyncScope.SplitSalePayment.remove(whereClause, function() {
                        boVoidMember.deleteTableAfterSync("SalePayments");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "SalePayments":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    kony.print("::deleteTableAfterSync:: SalePayments whereClause=" + whereClause);
                    com.kony.WeightWatchers.MemberSyncScope.SalePayments.remove(whereClause, function() {
                        boVoidMember.deleteTableAfterSync("SaleItems");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "SaleItems":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    kony.print("::deleteTableAfterSync:: SaleItems whereClause=" + whereClause);
                    com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whereClause, function() {
                        boVoidMember.deleteTableAfterSync("SaleDetails");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "SaleDetails":
                {
                    var whereClause = "where SaleTransactnId = '" + boVoidMember.SaleTransactnId + "'";
                    DBSaleDetailsController.find(whereClause, function(res) {
                        if (res && res.length > 0) {
                            kony.print("::deleteTableAfterSync:: SaleDetails whereClause=" + whereClause);
                            var v = res[0];
                            var isVoidAllowed = kony.sync.getString(v.isVoidAllowed);
                            kony.print("::deleteTableAfterSync:: SaleDetails isVoidAllowed=" + isVoidAllowed);
                            var MemberData = {};
                            MemberData.IsCurrentWeekWeighed = false; // Make it Process Icon
                            MemberData.isVoided = true; // Make it Process Icon
                            MemberData.EmpID = glbEmployeeId;
                            if (isVoidAllowed && isVoidAllowed == 'true') { // Add / Enrolled Member -> Make it PAYG
                                //Add that member with default values
                                MemberData.IsPAYG = 'true';
                                MemberData.MaintenanceMode = 0;
                                MemberData.TrackerID = 0;
                                MemberData.TrackerStartDate = "0001-01-01T00:00:00";
                                MemberData.WeightCountMet = 0;
                                MemberData.SubscriptnType = "";
                                MemberData.SubscriptnID = 0;
                                MemberData.CouponCode = "";
                            }
                            kony.print("::MemberData update local::" + JSON.stringify(MemberData));
                            DBMemberDetailsController.update(whr, MemberData, function() {
                                kony.print("::CallBack Void::boVoidMember.messageText=" + boVoidMember.messageText);
                                com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove(whereClause, function() {
                                    if (boVoidMember.isNonTangibleSale) {
                                        //Delete member and relted Data
                                        boVoidMember.deleteTableAfterSync("MilestoneAchieved");
                                    } else {
                                        //Process Done -> Callback
                                        boVoidMember.successCallback.call(null, boVoidMember.messageText);
                                        popupProductReturns.dismiss();
                                    }
                                }, eventErrorCallBack, true);
                            }, eventErrorCallBack, false);
                        }
                    }, eventErrorCallBack);
                    break;
                }
            case "MilestoneAchieved":
                {
                    //Delete the milestones acheived today
                    whr += " and WeighInDate like '%" + glbMeetingDate.split("T")[0] + "%'";
                    kony.print("::deleteTableAfterSync:: MilestoneAchieved whr=" + whr);
                    var milestonesToBeInserted = [],
                        milestonesElligibleID = [];
                    var findEligible = "where MemberID = '" + boVoidMember.MemberID + "'";
                    DBMilestoneEligibleController.find(findEligible, function(resa) {
                        kony.print("::MilestoneEligible::resa=" + JSON.stringify(resa));
                        milestonesElligibleID = _.pluck(resa, '_MilestoneID');
                        kony.print("::MilestoneEligible::milestonesElligibleID=" + JSON.stringify(milestonesElligibleID));
                        DBMilestoneAchievedController.find(whr, function(res) {
                            if (res && res.length > 0) {
                                kony.print("::MilestoneAchieved::res=" + JSON.stringify(res));
                                for (var i in res) {
                                    var v = res[i];
                                    var mID = kony.sync.getString(v.MilestoneID);
                                    if (!_.contains(milestonesElligibleID, parseInt(mID))) {
                                        milestonesToBeInserted.push({
                                            MilestoneID: mID,
                                            MemberID: boVoidMember.MemberID,
                                            IsAchieved: false,
                                            LastUpdatedTS: "",
                                            LocationNum: "",
                                            ReachedDate: "1899-12-30",
                                            TargetWeight: 0,
                                            WeekNumber: 0,
                                            WeighInDate: "1899-12-30"
                                        });
                                    }
                                }
                                kony.print("::MilestoneAchieved::milestonesToBeInserted=" + JSON.stringify(milestonesToBeInserted));
                                com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove(whr, function(res) {
                                    DBMilestoneEligibleController.createAll(milestonesToBeInserted, function() {
                                        boVoidMember.deleteTableAfterSync("WeighDetails");
                                    }, eventErrorCallBack, false);
                                }, eventErrorCallBack, false);
                            } else {
                                boVoidMember.deleteTableAfterSync("WeighDetails");
                            }
                        }, eventErrorCallBack, false);
                    }, eventErrorCallBack);
                    break;
                }
            case "WeighDetails":
                {
                    //Delete the todays weight
                    whr += " and WeighInDate like '%" + glbMeetingDate.split("T")[0] + "%'";
                    kony.print("::deleteTableAfterSync:: WeighDetails whr=" + whr);
                    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove(whr, function() {
                        boVoidMember.deleteTableAfterSync("NoteDetails");
                    }, eventErrorCallBack, false);
                    break;
                }
            case "NoteDetails":
                {
                    //Delete Today's Note - Note can only be entered in Process / Add / Enroll so there will be only one note for today for a member
                    whr += " and EntryDate like '%" + glbMeetingDate.split("T")[0] + "%'";
                    kony.print("::deleteTableAfterSync:: NoteDetails whr=" + whr);
                    com.kony.WeightWatchers.MemberSyncScope.NoteDetails.remove(whr, function() {
                        kony.print("::CallBack Void::boVoidMember.messageText=" + boVoidMember.messageText);
                        //boVoidMember.successCallback.call(null, boVoidMember.messageText);
                        boVoidMember.deleteTableAfterSync("RefferalDetails");
                    }, eventErrorCallBack, true);
                    break;
                }
            case "RefferalDetails":
                {
                    whr += "and Type='Sweepstake'";
                    kony.print("::deleteTableAfterSync:: RefferalDetails whr=" + whr);
                    com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.removeDeviceInstance(whr, function() {
                        boVoidMember.deleteTableAfterSync("MemberDetails");
                    }, eventErrorCallBack, false);
                    break;
                }
                //Added for MEG-4713
            case "MemberDetails":
                {
                    DBMemberDetailsController.find(whr, function(res) {
                        if (res && res.length > 0) {
                            var MemberData = res[0];
                            kony.print("::MemberData::" + JSON.stringify(MemberData));
                            if (checkValidString(MemberData.SubscriptnDate)) {
                                var subscriptionDateFormatted = formattedDate(MemberData.SubscriptnDate);
                                kony.print("::subscriptionDateFormatted::" + subscriptionDateFormatted);
                                var date1 = new Date();
                                var month = (1 + date1.getMonth()).toString();
                                var monthVal = (month.length > 1) ? month : "0" + month;
                                var dayTemp = (1 + date1.getDate()).toString();
                                kony.print("DayTemp : " + dayTemp);
                                var day = (dayTemp.length > 1) ? date1.getDate() : "0" + date1.getDate();
                                var currDate = monthVal + '/' + day + '/' + date1.getFullYear();
                                kony.print("currDate :" + currDate);
                                kony.print("Sub Date: " + (subscriptionDateFormatted == currDate));
                                if (subscriptionDateFormatted == currDate) {
                                    kony.print("In member update");
                                    //update subscription date
                                    var memberObj = {};
                                    memberObj.IsPAYG = 'true';
                                    memberObj.SubscriptnType = "";
                                    memberObj.SubscriptnID = 0;
                                    memberObj.SubscriptnDate = "";
                                    memberObj.CouponCode = "";
                                    memberObj.ExpirationDate = ""; //Added to Resolve MEG-5040
                                    memberObj.EmpID = glbEmployeeId;
                                    memberObj.TransactionType = TransactionType.VoidTransaction;
                                    //Added for MEG-5267
                                    if ((MemberData.LinkType == "Link" || MemberData.LinkType == "UnLink") && MemberData.EnterpriseID > 0 && MemberData.userName != "") memberObj.IsLink = "false";
                                    else memberObj.IsLink = "true";
                                    memberObj.IsDateRedeemed = "true";
                                    memberObj.IsFreshStart = "false";
                                    kony.print("MemberData.IsLink ==>>" + MemberData.IsLink);
                                    kony.print("Member Obj : " + JSON.stringify(memberObj));
                                    DBMemberDetailsController.update(whr, memberObj, function() {
                                        kony.print("::CallBack Void::boVoidMember.MemberDetails AfterSync");
                                    }, eventErrorCallBack, true);
                                }
                            }
                        }
                        kony.print("::CallBack Void::boVoidMember.messageText=" + boVoidMember.messageText);
                        boVoidMember.successCallback.call(null, boVoidMember.messageText);
                    }, eventErrorCallBack, true);
                    break;
                }
            default:
                {
                    break;
                };
        }
    },
    getProducttoBeReturnedList: function(tranid, callback) {
        var whereClause = "WHERE SaleTransactnId ='" + tranid + "' and IsSaleItemVoid = '0'";
        kony.print("::getProducttoBeReturnedList::whereClause=" + whereClause);
        DBSaleItemsController.find(whereClause, function(res) {
            kony.print("::getProducttoBeReturnedList::res=" + JSON.stringify(res));
            if (res && res.length > 0) {
                var list = [];
                _.each(res, function(item) {
                    list.push({
                        SaleTransactnId: tranid,
                        ProductID: kony.sync.getString(item.ProductID)
                    });
                });
                kony.print("::getProducttoBeReturnedList::list=" + JSON.stringify(list));
                callback.call(null, list);
            }
        }, eventErrorCallBack)
    },
    getSaleItemDetailsBySaleTranID: function(transactionid, callback) {
        var whrClause = " Where SaleTransactnId = '" + transactionid + "' and ProductSku not in(" + convertArrayToString(getSKUList('Employee_Attendance')) + ")";
        kony.print("::where Clause::getSaleItemDetailsBySaleTranID::" + whrClause);

        function getSaleItemDetailsBySaleTranIDCallback(result) {
            var isFailedMPVoucher = false;
            kony.print("::SaleItem res::" + JSON.stringify(result));
            if (result.length > 0) {
                for (var i in result) {
                    var vRes = result[i];
                    kony.print("vRes.IsFailedMPVoucher :" + vRes.IsFailedMPVoucher);
                    if (vRes.IsFailedMPVoucher == true || vRes.IsFailedMPVoucher == 'true') isFailedMPVoucher = true;
                }
                callback.call(this, isFailedMPVoucher);
            } else {
                callback.call(this, false);
            }
        }
        DBSaleItemsController.find(whrClause, getSaleItemDetailsBySaleTranIDCallback, eventErrorCallBack);
    }
};