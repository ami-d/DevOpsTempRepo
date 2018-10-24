var boLocationChecking = {

    getLocationFromDB: function(callback, InactiveLocation) {
        var whereClause = " where locationno = '" + InactiveLocation + "'";

        DBLocationController.find(whereClause, getLocationFromDBSuccessCallback, eventErrorCallBack)

        function getLocationFromDBSuccessCallback(res) {
            if (res.length > 0) {

                boLocationChecking.UpdateLocationFlag(callback, InactiveLocation);
            }
        }
    },

    UpdateLocationFlag: function(callback, InactiveLocation) {
        var updateObj = {};
        var whrCondition = "where locationno ='" + InactiveLocation + "'";
        var flagdate = new Date();

        updateObj["ModifiedLast"] = flagdate.getDate();;
        updateObj["lastSelected"] = "false";
        updateObj["IsActive"] = "false"

        DBLocationController.update(whrCondition, updateObj, UpdateLocationFlagSuccessCallback, eventErrorCallBack)

        function UpdateLocationFlagSuccessCallback(res) {
            if (InactiveLocation == glbLocationID) {
                glbLocationID = "";
                frmLogin.lblLocationName.text = "";
                
            }
            kony.print("Update UpdateLocationFlag Data")
            boLocationChecking.RemoveSavedLocationFromLocalDb(callback, InactiveLocation);
        }

    },


    RemoveSavedLocationFromLocalDb: function(callback, InactiveLocation) {

        var whrCodition = " where locationno ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.LookUpTables.SavedLocation.remove(whrCodition, RemoveSavedLocationFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveSavedLocationFromLocalDbCallback(res) {
            kony.print("Remove RemoveSavedLocationFromLocalDb Data");
            boLocationChecking.RemoveMeetingInstanceFromLocalDb(callback, InactiveLocation);
        }
    },

    RemoveMeetingInstanceFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationID ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.LookUpTables.MeetingInstance.remove(whrCodition, RemoveMeetingInstanceFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveMeetingInstanceFromLocalDbCallback(res) {
            kony.print("Remove RemoveMeetingInstanceFromLocalDb Data");
            boLocationChecking.RemoveTallyInfoFromLocalDb(callback, InactiveLocation);
        }
    },

    RemoveTallyInfoFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = "delete from TallyInfo where CountryID = '" + getCountryID() + "' AND MeetingId in(select ID from Meetings where LocationID ='" + InactiveLocation + "')"; //com.kony.WeightWatchers.MemberSyncScope.SaleItems.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallyInfoFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallyInfoFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallyInfoFromLocalDb Data");
            boLocationChecking.RemoveTallyMeetingFromLocalDb(callback, InactiveLocation);
        }
    },

    RemoveTallyMeetingFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = "delete from TallyMeeting where CountryID = '" + getCountryID() + "' AND MeetingId in(select ID from Meetings where LocationID ='" + InactiveLocation + "')";
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallyMeetingFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallyMeetingFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallyMeetingFromLocalDb Data");
            boLocationChecking.RemoveTallySummaryFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveTallySummaryFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = "delete from TallySummary where CountryID = '" + getCountryID() + "' AND MeetingOccurrenceID  in(select ID from Meetings where LocationID ='" + InactiveLocation + "')";
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallySummaryFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallySummaryFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallySummaryFromLocalDb Data");
            boLocationChecking.RemoveTallyTimesheetFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveTallyTimesheetFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = "delete from TallyTimesheet where CountryID = '" + getCountryID() + "' AND MeetingId in(select ID from Meetings where LocationID ='" + InactiveLocation + "')";
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveTallyTimesheetFromLocalDbCallback, eventErrorCallBack);

        function RemoveTallyTimesheetFromLocalDbCallback(res) {
            kony.print("Remove RemoveTallyTimesheetFromLocalDb Data");
            boLocationChecking.RemoveMeetingFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveMeetingFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationID ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.MeetingSyncScope.Meetings.remove(whrCodition, RemoveMeetingFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveMeetingFromLocalDbCallback(res) {
            kony.print("Remove RemoveMeetingFromLocalDb Data");
            boLocationChecking.RemoveMemberDetailsFromLocalDb(callback, InactiveLocation);
        }
    },

    RemoveMemberDetailsFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationID ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove(whrCodition, RemoveMemberDetailsFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveMemberDetailsFromLocalDbCallback(res) {
            kony.print("Remove RemoveMemberDetailsFromLocalDb Data");
            boLocationChecking.RemoveMilestoneAchievedFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveMilestoneAchievedFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationNum ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove(whrCodition, RemoveMilestoneAchievedFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveMilestoneAchievedFromLocalDbCallback(res) {
            kony.print("Remove RemoveMemberDetailsFromLocalDb Data");
            boLocationChecking.RemoveMilestoneEligibleFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveMilestoneEligibleFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationNum ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.MemberSyncScope.MilestoneEligible.remove(whrCodition, RemoveMilestoneEligibleFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveMilestoneEligibleFromLocalDbCallback(res) {
            kony.print("Remove RemoveMilestoneEligibleFromLocalDb Data");
            boLocationChecking.RemoveNoteDetailsFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveNoteDetailsFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationID ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.MemberSyncScope.NoteDetails.remove(whrCodition, RemoveNoteDetailsFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveNoteDetailsFromLocalDbCallback(res) {
            kony.print("Remove RemoveNoteDetailsFromLocalDb Data");
            boLocationChecking.RemoveProductDetailFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveProductDetailFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationID ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove(whrCodition, RemoveProductDetailFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveProductDetailFromLocalDbCallback(res) {
            kony.print("Remove RemoveProductDetailFromLocalDb Data");
            boLocationChecking.RemoveSaleItemsFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveSaleItemsFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = "delete from SaleItems where CountryID = '" + getCountryID() + "' AND SaleTransactnId in (select SaleTransactnId from SaleDetails where LocationID ='" + InactiveLocation + "')";
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveSaleItemsFromLocalDbCallback, eventErrorCallBack);

        function RemoveSaleItemsFromLocalDbCallback(res) {
            kony.print("Remove RemoveSaleItemsFromLocalDb Data");
            boLocationChecking.RemoveSalePaymentsFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveSalePaymentsFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = "delete from SalePayments where CountryID = '" + getCountryID() + "' AND SaleTransactnId in (select SaleTransactnId from SaleDetails where LocationID ='" + InactiveLocation + "')";
        kony.sync.single_select_execute(kony.sync.getDBName(), whrCodition, null, RemoveSalePaymentsFromLocalDbCallback, eventErrorCallBack);

        function RemoveSalePaymentsFromLocalDbCallback(res) {
            kony.print("Remove RemoveSalePaymentsFromLocalDbCallback Data");
            boLocationChecking.RemoveSaleDetailsFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveSaleDetailsFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationID ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.MemberSyncScope.SaleDetails.remove(whrCodition, RemoveSaleDetailsFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveSaleDetailsFromLocalDbCallback(res) {
            kony.print("Remove RemoveSaleDetailsFromLocalDbCallback Data");
            boLocationChecking.RemoveSKURuleEngineFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveSKURuleEngineFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationId ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.ProductSyncScope.SKURuleEngine.remove(whrCodition, RemoveSKURuleEngineFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveSKURuleEngineFromLocalDbCallback(res) {
            kony.print("Remove RemoveSKURuleEngineFromLocalDb Data");
            boLocationChecking.RemoveWeighDetailsFromLocalDb(callback, InactiveLocation);
        }
    },
    RemoveWeighDetailsFromLocalDb: function(callback, InactiveLocation) {
        var whrCodition = " where LocationID ='" + InactiveLocation + "'";
        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove(whrCodition, RemoveWeighDetailsFromLocalDbCallback, eventErrorCallBack, false);

        function RemoveWeighDetailsFromLocalDbCallback(res) {
            kony.print("Remove RemoveWeighDetailsFromLocalDb Data");
            callback.call(null, true);
        }
    }
}
