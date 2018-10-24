var boAppSettings = {

    addAppSettingDetails: function(createAppSettingDetailsObject) {
        function createAppSettingDetailsObjectSuccessCallback(res) {
            kony.print("SJ--->>> in createAppSettingDetailsObjectSuccessCallback addAppSettingDetails");
        }

        kony.print("SJ--->>> Inserting createAppSettingDetailsObject" + JSON.stringify(createAppSettingDetailsObject));

        com.kony.WeightWatchers.LookUpTables.AppSettingLookUp.create(createAppSettingDetailsObject, createAppSettingDetailsObjectSuccessCallback, eventErrorCallBack, false);
    },

    updateAppSettingDetails: function(updateAppSettingDetailsObject, whrClause) {
        function updateAppSettingDetailsObjectSuccessCallback(res) {
            kony.print("SJ--->>> in updateAppSettingDetailsObjectSuccessCallback addAppSettingDetails");
        }

        kony.print("SJ--->>> Updating createAppSettingDetailsObject" + JSON.stringify(updateAppSettingDetailsObject));

        com.kony.WeightWatchers.LookUpTables.AppSettingLookUp.update(whrClause, updateAppSettingDetailsObject, updateAppSettingDetailsObjectSuccessCallback, eventErrorCallBack, false);
    },

    getAppSettingBySettingName: function(settingName, callback) {
        kony.print("SJ---->>>>In getAppSettingBySettingName");

        var whereClause = " where SettingName = '" + settingName + "'";

        function getAppSettingBySettingNameSuccessCallback(res) {
            var isSettingActive = false;

            if (res.length > 0) {
                kony.print("SJ---->>>>Setting Data from DB :" + JSON.stringify(res));
                if (kony.sync.getBoolean(res[0].IsActive)) {
                    isSettingActive = checkIfActiveIsNotAFutureDate(res[0].ActiveFromDate);
                } else {
                    isSettingActive = false;
                }

                callback.call(null, isSettingActive);
            } else {
                callback.call(null, isSettingActive);
            }
        }

        com.kony.WeightWatchers.LookUpTables.AppSettingLookUp.find(whereClause, getAppSettingBySettingNameSuccessCallback, eventErrorCallBack);
    },

    checkRecordPresentInDB: function(settingName, callback) {
        kony.print("SJ---->>>>In checkRecordPresentInDB");

        var whereClause = " where SettingName = '" + settingName + "'";

        function checkRecordPresentInDBSuccessCallback(res) {
            var isPresentInDB = false;

            if (res.length > 0) {
                kony.print("SJ---->>>>Data present in DB ");
                isPresentInDB = true;
                callback.call(null, isPresentInDB);
            } else {
                callback.call(null, isPresentInDB);
            }
        }

        com.kony.WeightWatchers.LookUpTables.AppSettingLookUp.find(whereClause, checkRecordPresentInDBSuccessCallback, eventErrorCallBack);
    },
    getAllAppSettings: function(callBackFunc) {
        function getAllAppSettingObjectSuccessCallback(res) {
            if (res.length > 0) {
                callBackFunc.call(null, res);
            }
        }
        com.kony.WeightWatchers.LookUpTables.AppSettingLookUp.getAll(getAllAppSettingObjectSuccessCallback, eventErrorCallBack);
    }
}
