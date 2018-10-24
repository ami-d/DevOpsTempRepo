var boviewSavedLocation = {
    getSavedLocationFromLocalDb: function(callback) {

        var whrCodition = " where locationno in(select locationno from savedlocation where EmployeeNumber = " + glbEmployeeNumber + ") and IsActive != 'false' ";

        function getLocationFromLocalDbCallback(res) {
            //preparing object to be mapped to SegmentedUI
            var objectToMap = [];
            frmSavedLocation_segmentLocations_temp = [];
            if (res != null) {
                if (res.length < 0) {

                    callback.call(null, frmSavedLocation_segmentLocations_temp);
                    //callAlert(getMessageTemplate("noData"),"info");
                } else {
                    for (var i in res) {
                        kony.print(i + "th record fetching");
                        var v = res[i];
                        var b = mapKeys(viewLocation, {
                            locationNumber: kony.sync.getString(v.locationno),
                            displayValue: kony.sync.getString(v.displayvalue),
                            lbllocationTitle: kony.sync.getString(v.locationno) + "      " + kony.sync.getString(v.displayvalue), //kony.sync.getString(v.displayvalue)+" ("+kony.sync.getString(v.locationno)+")",
                            locationZip: kony.sync.getString(v.zip),
                            city: kony.sync.getString(v.City),
                            locationTypeId: kony.sync.getString(v.locationTypeId),
                            stateId: kony.sync.getString(v.StateId),
                            isSelected:false,
                            AreaSiteNumber: kony.sync.getString(v.AreaSiteNumber)
                        });
                        frmSavedLocation_segmentLocations_temp.push(b);

                    }
                    callback.call(null, frmSavedLocation_segmentLocations_temp);

                }
            } else {
                callback.call(null, frmSavedLocation_segmentLocations_temp);
            }

        }
        //Display Loading screen

        DBLocationController.find(whrCodition, getLocationFromLocalDbCallback, eventErrorCallBack);
        // Call the com.kony.WeightWatchers.WeightWatchers.Location.getAll ORM API
        //ExecuteSQL.ExecuteSQLQuery(getquery,getLocationFromLocalDbCallback, eventErrorCallBack);


    },

    CallDeletefun: function(LocationNo, callback) {

        boviewSavedLocation.CheckSyncPendingData(LocationNo, callback, false);
    },

    CheckSyncPendingData: function(LocationNo, callback, ifSyncSuccess) {
        var whrCodition = " where locationno = '"+ LocationNo+"'";

        if (ifSyncSuccess) {
            onClickfirstConfirmation();
        } else {
            com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getPendingUpload(successMemberDetailUploadCallback, errorUploadFailCallback);
        }

        function successMemberDetailUploadCallback(res) {
            if (res.length <= 0) {
                var whrCodition = " where locationno = '"+ LocationNo+"'";
                com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getPendingUpload(successWeightDetailUploadCallback, errorUploadFailCallback);
            } else {
                LocationNotRemovedCallbak();
            }
        }

        function successWeightDetailUploadCallback(res) {
            kony.print("RESULT " + res);
            if (res.length <= 0) {
                onClickfirstConfirmation();
            }
        }

        function errorUploadFailCallback(res) {
            LocationNotRemovedCallbak();
        }

        function onClickSyncUnSyncedData(response) {
            if (response == true) {
                isFromPrefferedDelete = true;
                if (checkIfNetworkIsAvailable()) {
                    isMultipleLocation = true;
                    boAuthentication.authenticateViaWSBeforeSync();
                    // syncStartSession();
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
                    removeProgressView();
                }
            } else {
                removeProgressView();
            }
        }

        function LocationNotRemovedCallbak() {
            var alertConfig = {
                message: kony.i18n.getLocalizedString("strLocationNotRemovedMessage"), //strAlertTermed "Would you like to Re-Enroll this termed member?"
                alertType: constants.ALERT_TYPE_CONFIRMATION,
                alertTitle: "",
                yesLabel: kony.i18n.getLocalizedString("strLblOk"), // "Yes",
                noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
                alertHandler: onClickSyncUnSyncedData
            };
            var psConfig = {};
            var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
            callback.call(null, false);
        }

        function onClickfirstConfirmation() {
            var alertConfig = {
                message: kony.i18n.getLocalizedString("strDeleteLocationMessage"), //strAlertTermed "Would you like to Re-Enroll this termed member?"
                alertType: constants.ALERT_TYPE_CONFIRMATION,
                alertTitle: "",
                yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
                noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
                alertHandler: onClickDeleteLocationAlert
            };
            var psConfig = {};
            var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
        }

        function onClickDeleteLocationAlert(response) {
            if (response == true) {
                var alertConfig = {
                    message: kony.i18n.getLocalizedString("strLocationDoubleConfirmDeleteMessage"), //strAlertTermed "Would you like to Re-Enroll this termed member?"
                    alertType: constants.ALERT_TYPE_CONFIRMATION,
                    alertTitle: "",
                    yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
                    noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
                    alertHandler: DeleteSavedlocation
                };
                var psConfig = {};
                var LocationAlert = kony.ui.Alert(alertConfig, psConfig);

            } else {
                removeProgressView();
                callback.call(null, false);
            }
        }

        function DeleteSavedlocation(response) {

            if (response === true) {
                var whrCodition = " where locationno ='"+ LocationNo+"'";

                DBSavedLocationController.find(whrCodition, getSuccessCallbackfromSavedLocation, getErrorCallbackfromSavedLocation, false);

            } else {
                removeProgressView();
                callback.call(null, false);
            }

        }

        function getSuccessCallbackfromSavedLocation(res) {
            if (res.length > 0) {
                var whrCodition = " where locationno ='"+ LocationNo +"' and EmployeeNumber = " + glbEmployeeNumber;
                if (res.length == 1) {
                    //There is only one location saved by SP's
                    //So delete all things related to it.
                    com.kony.WeightWatchers.LookUpTables.SavedLocation.remove(whrCodition, RemoveSavedLocationFromLocalDbCallback, LocationDeleteeventErrorcallbak, false);
                } else {
                    //There are multiple SP that have same location saved. So just Delete entry from saved location
                    com.kony.WeightWatchers.LookUpTables.SavedLocation.remove(whrCodition, RemoveSavedLocationFromOnlySavedCallback, LocationDeleteeventErrorcallbak, false);
                }
            }
        }

        function getErrorCallbackfromSavedLocation(res) {
            callback.call(null, false);
        }

        function RemoveSavedLocationFromLocalDbCallback(res) {
            var whrCodition = " where locationno ='"+ LocationNo+"'";
            kony.print("Remove Saved Location");
            com.kony.WeightWatchers.LookUpTables.Location.remove(whrCodition, RemoveMemberFromLocalDbCallback, LocationDeleteeventErrorcallbak, false);
        }

        function RemoveSavedLocationFromOnlySavedCallback(response) {
            kony.print("Remove Saved Only");
            callback.call(null, true);
        }

        function RemoveMemberFromLocalDbCallback(response) {
            kony.print("Remove WeighDetails");
            var whereClause = " delete from WeighDetails where CountryID = '" + getCountryID() + "' AND memberid in (select memberid from memberdetails where locationid=" + LocationNo + ")";
            kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, RemoveLocationFromLocalDbCallback, eventErrorCallBack);
        }

        function RemoveLocationFromLocalDbCallback(response) {
            kony.print("Remove MilestoneAchieved");
            var whereClause = " delete from MilestoneAchieved where CountryID = '" + getCountryID() + "' AND memberid in (select memberid from memberdetails where locationid=" + LocationNo + ")";
            kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, RemoveMilestoneAchievedFromLocalDbCallback, eventErrorCallBack);

        }

        function RemoveMilestoneAchievedFromLocalDbCallback(response) {
            kony.print("Remove MilestoneEligible");
            var whereClause = " delete from MilestoneEligible where CountryID = '" + getCountryID() + "' AND memberid in (select memberid from memberdetails where locationid=" + LocationNo + ")";
            kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, RemoveMilestoneEligibleFromLocalDbCallback, eventErrorCallBack);
        }

        function RemoveMilestoneEligibleFromLocalDbCallback(response) {
            kony.print("Remove NoteDetails");
            var whereClause = " delete from NoteDetails where CountryID = '" + getCountryID() + "' AND memberid in (select memberid from memberdetails where locationid=" + LocationNo + ")";
            kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, RemoveSaleItemsFromLocalDbCallback, eventErrorCallBack);
        }

        function RemoveSaleItemsFromLocalDbCallback(response) {
            kony.print("Remove SaleDetails");
            var whereClause = " delete from SaleItems where CountryID = '" + getCountryID() + "' AND SaleTransactnId in (select SaleTransactnId from saledetails where locationid=" + LocationNo + ")";
            kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, RemoveSalePaymentsFromLocalDbCallback, eventErrorCallBack);
        }

        function RemoveSalePaymentsFromLocalDbCallback(response) {
            kony.print("Remove SaleDetails");
            var whereClause = " delete from SalePayments where CountryID = '" + getCountryID() + "' AND SaleTransactnId in (select SaleTransactnId from saledetails where locationid=" + LocationNo + ")";
            kony.sync.single_select_execute(kony.sync.getDBName(), whereClause, null, RemoveNoteDetailsFromLocalDbCallback, eventErrorCallBack);
        }

        function RemoveNoteDetailsFromLocalDbCallback(response) {
            kony.print("Remove SaleDetails");
            var whrCodition = " where LocationID =" + LocationNo;
            com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, LocationDeleteeventErrorcallbak, false);
        }

        function RemoveSaleDetailsFromLocalDbCallback(response) {
            kony.print("Remove MemberDetails");
            var whrCodition = " where LocationID =" + LocationNo;
            com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove(whrCodition, RemoveWeightFromLocalDbCallback, LocationDeleteeventErrorcallbak, false);
        }





        function RemoveWeightFromLocalDbCallback(response) {
            kony.print("Remove ProductDetail");
            var whrCodition = " where LocationID =" + LocationNo;
            com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove(whrCodition, RemovProductFromLocalDbCallback, LocationDeleteeventErrorcallbak, false);
        }

        function RemovProductFromLocalDbCallback(response) {
            kony.print("Remove Meetings");
            var whrCodition = " where LocationID ='" + LocationNo + "'";
            com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove(whrCodition, RemovMeetingFromLocalDbCallback, LocationDeleteeventErrorcallbak, false);
        }

        function RemovMeetingFromLocalDbCallback(response) {
            kony.print("Remove Meeting");
            callback.call(null, true);
        }

        function LocationDeleteeventErrorcallbak() {
            callback.call(null, false);
        }
    }

};
