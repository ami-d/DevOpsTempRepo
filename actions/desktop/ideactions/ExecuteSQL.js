var ExecuteSQL = {
    /************************************************************************************
     * Executes SQL query and returns record set.
     *************************************************************************************/
    ExecuteSQLQuery: function(SQL, successcallback, errorcallback) {
        kony.print("Execute: " + SQL + " Query");

        try {
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(successcallback, com.kony.WeightWatchers.MemberSyncScope.WeighDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }

            kony.sync.single_select_execute(dbname, SQL, null, mySuccCallback, errorcallback);
        } catch (e) {
            kony.print("Exeption Occured while executing Query " + SQL + "Error: " + e);
        }
    },
    sqlExecuteQuery: function(sql) {

        kony.sync.executeSql(tx, sql, params, errorCallback, rollback, opMsg);
    }
}
