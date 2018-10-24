var boSyncFailTrace = {
    log: function(failObject, randomSyncSessionID) {
        kony.print("Failed Object: " + JSON.stringify(failObject));
        boSyncFailTrace.insertFailedSyncRecord(failObject, randomSyncSessionID);
    },
    isfailedRecordExistInCheckedInList: function(memberId, preRegNumber) {
        var isExist = false;
        kony.print("Calling isfailedRecordExistInCheckedInList " + memberId + " PreRegNumber: " + preRegNumber);
        var query = " where TableName = 'MemberDetails' and PKKey = 'MemberID' and PKValue = '" + memberId + "' AND CKKey = 'PreRegNumber' AND CKValue = '" + preRegNumber + "'";
        kony.print("isfailedRecordExistInCheckedInList Query: " + query);

        function failedRecordForCheckedInSuccessCallback(res) {
            kony.print("failedRecordForCheckedInSuccessCallback response: " + JSON.stringify(res));
            if (res.count > 0) {
                isExist = true;
            }
        }
        com.kony.WeightWatchers.Logger.SyncFailedTrace.getCount(query, failedRecordForCheckedInSuccessCallback, eventErrorCallBack);
        return isExist;
    },
    /**
     * Checking failed sync request is already exist in db or not
     * @param {} failRecord
     * @returns {} isExist
     */
    isFailedSyncRecordExist: function(failRecord) {
        var isExist = false;
        kony.print("Start of isFailedSyncRecordExist " + JSON.stringify(failRecord));
        var whrCondition = " Where SyncObject = '" + failRecord.type + "' AND Key = '" + JSON.stringify(failRecord.key) + "'"; // AND ErrorCode = '" + failRecord.errorCode + "'";
        kony.print("whrCondition " + whrCondition);

        function isFailedSyncRecordExistSuccessCallBack(res) {
            kony.print("isFailedSyncRecordExistSuccessCallBack response: " + JSON.stringify(res));
            if (res.count > 0) {
                isExist = true;
            }
        }
        com.kony.WeightWatchers.Logger.SyncErrorLog.getCount(whrCondition, isFailedSyncRecordExistSuccessCallBack, eventErrorCallBack);
        return isExist;
    },
    /**
     * Inserting failed sync request in to SyncErrorLog syncObject
     */
    insertFailedSyncRecord: function(failObjects, randomSyncSessionID) {
        kony.print("Start of InsertFailedSyncRecord");
        for (i in failObjects) {
            var failObject = failObjects[i];
            kony.print("Failed Obj:" + JSON.stringify(failObject));
            var isRecordExist = boSyncFailTrace.isFailedSyncRecordExist(failObject);
            kony.print("boSyncFailTrace.isFailedSyncRecordExist:" + isRecordExist);
            if (!isRecordExist) {
                var failedSyncObj = {};

                function saveFailedSyncRecSuccessCallback(res) {
                    kony.print("Failed sync record saved successfully.");
                }
                failedSyncObj.Key = JSON.stringify(failObject.key);
                failedSyncObj.SyncObject = failObject.type;
                failedSyncObj.ErrorCode = failObject.errorCode;
                failedSyncObj.ErrorMessage = failObject.errorMessage;
                failedSyncObj.ErrorType = failObject.errorType;
                failedSyncObj.SyncSessionID = randomSyncSessionID;
                failedSyncObj.TimeStamp = new Date();
                kony.print("Failed Sync Object to Insert: " + JSON.stringify(failedSyncObj));
                com.kony.WeightWatchers.Logger.SyncErrorLog.create(failedSyncObj, saveFailedSyncRecSuccessCallback, eventErrorCallBack, false);
            }
        }
    },
    /**
     * Inserting sync response in to SyncFeedback syncObject
     */
    insertSyncFeedback: function(feedbackObjects, randomSyncSessionID) {
        kony.print("Start of insertSyncFeedback");
        kony.print("feedbackObjects ==>> " + feedbackObjects);
        for (i in SyncObject) {
            if (feedbackObjects[SyncObject[i]]) {
                kony.print(SyncObject[i]);
                var newObj = feedbackObjects[SyncObject[i]];

                function insertSyncFeedbackCallback(res) {
                    kony.print("Inserted Sync feedback.");
                }
                if (newObj && newObj.rowsuploaded > 0) {
                    var syncFeedBackObj = {}
                    syncFeedBackObj.Key = JSON.stringify(newObj.reconciledprimarykeys);
                    syncFeedBackObj.SyncObject = SyncObject[i];
                    syncFeedBackObj.RowsUploaded = newObj.rowsuploaded;
                    syncFeedBackObj.RowsInserted = newObj.rowsinserted;
                    syncFeedBackObj.RowsDeleted = newObj.rowsdeleted;
                    syncFeedBackObj.RowsUpdated = newObj.rowsupdated;
                    syncFeedBackObj.RowsFailedToUpload = newObj.rowsfailedtoupload;
                    syncFeedBackObj.SyncSessionID = randomSyncSessionID;
                    syncFeedBackObj.TimeStamp = new Date();
                    kony.print("Object to Insert ==>> " + JSON.stringify(syncFeedBackObj));
                    com.kony.WeightWatchers.Logger.SyncFeedback.create(syncFeedBackObj, insertSyncFeedbackCallback, eventErrorCallBack, false);
                }
            }
        }
    }
}