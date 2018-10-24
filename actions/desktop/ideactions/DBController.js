function parseDbJson() {
    try {
        //alert(JSON.stringify(dbCreationJson));
        for (x in dbCreationJson) {
            //alert(dbCreationJson[x]['operation']);
            var operation = dbCreationJson[x]['operation'];
            switch (operation) {
                case "create":
                    createTable(dbCreationJson[x]);
                    //kony.timer.schedule("my"+x, testFunc, 5, true)
                    break;
            }
        }
    } catch (e) {
        GlobalException(e);
    }
}

function callInsertDbOperation(tablename, recordValue) {
    try {
        insertToTable(tablename, recordValue);
    } catch (e) {
        GlobalException(e);
    }
}

function callSelectDbOperation(tablename, fields, whereClause) {
    try {
        selectFromTable(tablename, fields, whereClause);
    } catch (e) {
        GlobalException(e);
    }
}

function callUpdateDbOperation(tablename, recordValue, whereClause) {
    try {
        updateTable(tablename, recordValue, whereClause);
    } catch (e) {
        GlobalException(e);
    }
}

function callDeleteDbOperation(tablename, recordValue, whereClause) {
    try {
        deleteFromTable(tableName, whereClause);
    } catch (e) {
        GlobalException(e);
    }
}

function testFunc() {
    //kony.print("inside timeout.");
}
