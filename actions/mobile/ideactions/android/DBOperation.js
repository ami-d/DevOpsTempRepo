var tableQuery;
var dbName = "MEGDevFRCA"; //kony.sync.getDBName();
var version = "1.0";
var displayName = "WeightWatchers web SQL Database";
var estimatedSize = 10 * 1024 * 1024; //5*1024*1024 indicates 5 MB
var databaseObjectId;
var dbSelectRes = [];
/*

*/
function openDB() {
    databaseObjectId = kony.db.openDatabase(dbName, version, displayName, estimatedSize);
    //kony.print("::databaseObjectId::---"+databaseObjectId);
    return databaseObjectId;
}

function createTable(result) {
    var fields = result["fields"];
    var tablename = result["tablename"];
    try {
        var sqlQuery = "";
        tableQuery = "";
        sqlQuery = "CREATE TABLE IF NOT EXISTS " + tablename + "( ";
        //sqlStatement = "CREATE TABLE IF NOT EXISTS location (id REAL PRIMARY KEY,location_id TEXT, zip TEXT,display_value TEXT)";
        for (i in fields) {
            if (fields[i]['isPrimary']) {
                sqlQuery += fields[i]['name'] + " " + fields[i]['datatype'] + " PRIMARY KEY,";
            } else {
                sqlQuery += fields[i]['name'] + " " + fields[i]['datatype'] + ",";
            }
        }
        sqlQuery = sqlQuery.replace(/,\s*$/, '');
        sqlQuery += ")";
        tableQuery = sqlQuery;
        kony.db.transaction(databaseObjectId, insertDbQueryCallback, commonErrorCallback, commonVoidcallback);
        //insertToTable("location","");
    } catch (e) {
        alertForMessages("err: " + e.message);
    } finally {
        //tableQuery ="";
    }
}
var tableNameStr = null;
var inserttableData = null;

function createTableWithData(tableName, tableData, insertData) {
    tableNameStr = tableName;
    inserttableData = insertData;
    try {
        openDB();
        createTableQueary(tableData);
        kony.db.transaction(databaseObjectId, createTableSuccessCallback, commonErrorCallback, commonVoidcallback);
    } catch (e) {
        alertForMessages("err: " + e.message);
    } finally {
        //tableQuery ="";
    }
}

function createTableSuccessCallback() {
    //alert("createTableSuccessCallback");
    try {
        insertToTableQuary(tableNameStr, inserttableData.data);
        kony.db.transaction(databaseObjectId, insertTableSuccessCallback, commonErrorCallback, commonVoidcallback);
    } catch (e) {
        alertForMessages("err: " + e.message);
    } finally {
        //tableQuery ="";
    }
}

function createTableQueary(result) {
    var fields = result["fields"];
    var tablename = result["tablename"];
    try {
        var sqlQuery = "";
        tableQuery = "";
        sqlQuery = "CREATE TABLE IF NOT EXISTS " + tablename + "( ";
        //sqlStatement = "CREATE TABLE IF NOT EXISTS location (id REAL PRIMARY KEY,location_id TEXT, zip TEXT,display_value TEXT)";
        for (i in fields) {
            if (fields[i]['isPrimary']) {
                sqlQuery += fields[i]['name'] + " " + fields[i]['datatype'] + " PRIMARY KEY,";
            } else {
                sqlQuery += fields[i]['name'] + " " + fields[i]['datatype'] + ",";
            }
        }
        sqlQuery = sqlQuery.replace(/,\s*$/, '');
        sqlQuery += ")";
        tableQuery = sqlQuery;
        kony.print("table create query===" + tableQuery);
    } catch (e) {
        alertForMessages("err: " + e.message);
    } finally {
        //tableQuery ="";
    }
}

function createTable(result) {
    try {
        createTableQueary(result);
        kony.db.transaction(databaseObjectId, insertDbQueryCallback, commonErrorCallback, commonVoidcallback);
    } catch (e) {
        alertForMessages("err: " + e.message);
    } finally {
        //tableQuery ="";
    }
}

function insertToTableQuary(tableName, datafields, callback) {
    var insertTable = datafields;
    tableQuery = "";
    try {
        var objKeys = Object.keys(insertTable);
        var columnStatement = "(";
        for (k in objKeys) {
            columnStatement += ' \"' + objKeys[k] + '"\,';
        }
        columnStatement += '\"CountryID"\,';
        columnStatement = columnStatement.replace(/,\s*$/, '');
        columnStatement += ")";
        var valueStatement = "(";
        for (k in objKeys) {
            valueStatement += ' \"' + insertTable[objKeys[k]] + '"\,';
        }
        valueStatement += ' \"' + getCountryID() + '"\,';
        valueStatement = valueStatement.replace(/,\s*$/, '');
        valueStatement += ")";
        var sqlStatement = "INSERT INTO " + tableName + " " + columnStatement + "  VALUES " + valueStatement;
        tableQuery = sqlStatement;
        kony.print(":::table insert query===" + tableQuery);
        callback.call(null);
    } catch (e) {
        GlobalException(e);
    } finally {
        //tableQuery ="";
    }
}

function insertToTable(tableName, datafields, callback) {
    try {
        insertToTableQuary(tableName, datafields, function() {
            kony.db.transaction(databaseObjectId, insertDbQueryCallback, eventErrorCallBack, insertTransactionVoidcallback);
        })

        function insertDbQueryCallback(dbId) {
            //alert("tnbb=="+tableQuery);
            try {
                kony.print("::inside  insertDbQueryCallback--" + tableQuery);
                kony.db.executeSql(dbId, tableQuery, null, successCallback, commonErrorCallback);
            } catch (e) {
                GlobalException(e);
            }
        }

        function successCallback(transactionId, resultset) {
            kony.print("::transactionId::" + transactionId + "::-Resultset---::" + JSON.stringify(resultset));
            callback.call(null, transactionId, resultset);
        }

        function insertTransactionVoidcallback() {
            kony.print("::inside void callback");
            callback.call(null, true);
        }
    } catch (e) {
        GlobalException(e);
    } finally {
        //tableQuery ="";
    }
}

function selectFromTable(tableName, fields, filterCriteria) {
    try {
        var selField = "";
        selField = (fields.length != 0) ? fields.join() : "*";
        var whereClause = (filterCriteria.length == 0) ? " WHERE 1=1" : " WHERE " + filterCriteria;
        var sqlStatement = "SELECT " + selField + " FROM " + tableName + whereClause;
        tableQuery = sqlStatement;
        kony.db.transaction(databaseObjectId, sqlSelectDbQueryCallback, commonErrorCallback, commonVoidcallback);
    } catch (e) {
        GlobalException(e);
    }
}

function sqlSelectDbQueryCallback(dbId) {
    kony.print("query===" + tableQuery);
    kony.db.executeSql(dbId, tableQuery, null, successSelect_operation, commonErrorCallback);
}

function successSelect_operation(transaction_id, resultset) {
    kony.print("resultset===" + JSON.stringify(resultset));
    var numResults = resultset.rows.length;
    kony.print("length====" + numResults);
    dbSelectRes = [];
    if (numResults > 0) {
        for (var i = 0; i <= numResults - 1; i++) {
            var tmpItem = kony.db.sqlResultsetRowItem(transaction_id, resultset, i);
            dbSelectRes.push(tmpItem);
        }
        kony.print("Result A====" + JSON.stringify(dbSelectRes));
    } else {
        kony.print("No record found.");
        //alert("No record found.");	
    }
}

function createDbQueryCallback(dbId) {
    try {
        kony.db.executeSql(dbId, tableQuery, null, successCreate_operation, commonErrorCallback);
    } catch (e) {
        GlobalException(e);
    }
}

function updateTable(tableName, fields, filterCriteria, callback) {
    try {
        var sqlStatement = "UPDATE " + tableName + " SET ";
        var objKeys = Object.keys(fields);
        var setdata = "";
        for (k in objKeys) {
            setdata += objKeys[k] + '= \"' + fields[objKeys[k]] + '"\,';
        }
        setdata += 'CountryID ="' + getCountryID() + '"';
        var whereClause = (filterCriteria.length == 0) ? " WHERE 1=1" : " WHERE " + filterCriteria;
        sqlStatement += setdata + whereClause;
        tableQuery = sqlStatement;
        kony.print("::sqlStatement::" + sqlStatement);
        kony.db.transaction(databaseObjectId, sqlUpdateDbQueryCallback, commonErrorCallback, updateTransactionVoidcallback);

        function sqlUpdateDbQueryCallback(dbId) {
            //alert("tnbb=="+tableQuery);
            try {
                kony.print("::tableQuery::" + tableQuery);
                kony.db.executeSql(dbId, tableQuery, null, updatesuccess_operation, commonErrorCallback);
            } catch (e) {
                GlobalException(e);
            }
        }

        function updatesuccess_operation(transactionId, resultset) {
            kony.print("::transactionId::" + transactionId + "::-Resultset---::" + JSON.stringify(resultset));
            callback.call(null);
        }

        function updateTransactionVoidcallback() {
            kony.print("::Update Done::");
            callback.call(null);
        }
    } catch (e) {
        GlobalException(e);
    }
}

function deleteFromTable(tableName, filterCriteria, callback) {
    try {
        var whereClause = (filterCriteria.length == 0) ? " WHERE 1=1" : " WHERE " + filterCriteria;
        var sqlStatement = "DELETE FROM " + tablename + " " + whereClause;
        tableQuery = sqlStatement;
        kony.db.transaction(databaseObjectId, sqlDeleteDbQueryCallback, commonErrorCallback, DeleteVoidcallback);

        function sqlDeleteDbQueryCallback(dbId) {
            try {
                kony.db.executeSql(dbId, tableQuery, null, deletesuccess_operation, commonErrorCallback);
            } catch (e) {
                GlobalException(e);
            }
        }

        function deletesuccess_operation() {
            kony.print("::delete Done::");
            callback.call(null);
        }

        function DeleteVoidcallback() {
            kony.print("::delete Done::");
            callback.call(null);
        }
    } catch (e) {
        GlobalException(e);
    }
}

function commonError_fail(transactionId, error) {
    kony.print(" ------------------Record not added" + error);
}
/*****************************************************************
 *	Name    : commonErrorCallback
 *	Author  : Kony Solutions
 *	Purpose : To display error message on the console 
 ******************************************************************/
function commonErrorCallback(transactionId, error) {
    kony.print(" Error code:: " + error);
    kony.print(" Error message:: " + error.message);
}

function success_operation(transactionId, resultset) {
    //alert("success callback ==="+transactionId);
    kony.print("Query:" + tableQuery);
    kony.print(" ------------------Resultset SUCCESS " + JSON.stringify(resultset));
    kony.print(" ------------------trid " + transactionId);
    //kony.print(" ------------------success_createTable  SUCCESS ");
}
/*****************************************************************
 *	Name    : commonVoidcallback
 *	Author  : Kony Solutions
 *	Purpose : To display success message on the console.
 ******************************************************************/
function commonVoidcallback() {
    kony.print("The transaction was executed successfully.");
}
/*****************************************************************
 *	Name    : success_sqlSelect
 *	Author  : Kony Solutions
 *	Purpose : To show all the rows of 'emp_details' table in the form
 ******************************************************************/
function success_sqlUpdate(transactionId, resultset) {
    kony.print("-----------> success_sqlUpdate");
}
/*****************************************************************
 *	Name    : sqlUpdate
 *	Author  : Kony Solutions
 *	Purpose : To implement webSQL 'UPDATE' to update 'employee_details' table  in such a way that employee John's depart number will be 30
 ******************************************************************/
function sqlUpdate(dbId) {
    var sqlStatement = "UPDATE department SET depname='John' WHERE depid=1068";
    //Execute sql statement
    kony.db.executeSql(dbId, sqlStatement, null, success_sqlUpdate, commonErrorCallback);
}
/*****************************************************************
 *	Name    : doTransactionUpdate
 *	Author  : Kony Solutions
 *	Purpose : To initiate transaction to implement webSQL 'UPDATE' to update 'employee_details' table  
 ******************************************************************/
function doTransactionUpdate() {
    kony.db.transaction(databaseObjectId, sqlUpdate, commonErrorCallback, commonVoidcallback);
}
/*****************************************************************
 *	Name    : success_sqlDelete
 *	Author  : Kony Solutions
 *	Purpose : To display a message when deleting the rows from 'employee_details' is successful
 ******************************************************************/
function success_sqlDelete(transactionId, resultset) {
    kony.print("Delete successful");
}
/*****************************************************************
 *	Name    : sqlDelete
 *	Author  : Kony Solutions
 *	Purpose : To delete the row which is having maximum id from the 'employee_details' table.
 ******************************************************************/
function sqlDelete(dbId) {
    var sqlStatement = "DELETE FROM department ";
    //Execute sql statement
    kony.db.executeSql(dbId, sqlStatement, null, success_sqlDelete, commonErrorCallback);
}
/*****************************************************************
 *	Name    : doTransactionDelete
 *	Author  : Kony Solutions
 *	Purpose : To initiate transaction to delete a row from 'employee_details' table.
 ******************************************************************/
function doTransactionDelete() {
    kony.db.transaction(databaseObjectId, sqlDelete, commonErrorCallback, commonVoidcallback);
}