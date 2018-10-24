/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of Location instances
 *   
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
/*  This method retrieves all the instances of the Location stored in the device and displays on frmLocationList
 *
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
seguiSearchKeyLocation = null;

function getAllLocation(limit, orderByMap) {
    //alert("orderby map :" + orderByMap[0].key);
    //alert("orderby map :" + orderByMap[0].sortType);
    //alert("Limit is: " + limit);
    //Success callback reads the response and populates the SegmentedUI
    function getAllLocationSuccessCallback(res) {
        //preparing object to be mapped to SegmentedUI
        var objectToMap = [];
        kony.print("kony.application.getCurrentForm()===>>" + kony.application.getCurrentForm());
        if (res.length < 0) {
            removeProgressView();
            popupSearchLocation.segmentRecentLocations.setVisibility(false);
            popupSearchLocation.hboxRecentSearch.setVisibility(true);
            popupSearchLocation.lblNoRecentSearch.text = kony.i18n.getLocalizedString("strNoRecentSearch");
            //callAlert(getMessageTemplate("noData"),"info");
        } else {
            //Initialize global for back button feature
            gblLocationBack = getAllLocation;
            for (var i in res) {
                kony.print(i + "th record fetching");
                var v = res[i];
                objectToMap[i] = new Object();
                //objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
                objectToMap[i]["lblLocationTitle"] = kony.sync.getString(v.displayvalue) + " (" + kony.sync.getString(v.locationno) + ")";
                objectToMap[i]["zip"] = kony.sync.getString(v.zip);
                objectToMap[i]["displayvalue"] = kony.sync.getString(v.displayvalue);
                objectToMap[i]["locationnumber"] = kony.sync.getString(v.locationno);
                objectToMap[i]["locationTypeId"] = kony.sync.getString(v.locationTypeId);
            }
            popupSearchLocation.segmentRecentLocations.setVisibility(true);
            popupSearchLocation.hboxRecentSearch.setVisibility(false);
            popupSearchLocation.segmentRecentLocations.setData(objectToMap);
        }
        //if(res.length!=0) {
        //			offsetForListView = offsetForListView + limitForListView;
        //		}
        //		else{
        //			isPageLimit = true;
        //		}
        popupSearchLocation.lblLocationsTitle.text = kony.i18n.getLocalizedString("strRecentTitle");
        kony.print("kony.application.getCurrentForm()===>>" + kony.application.getCurrentForm());
        var context = {
            "widget": frmLogin.hboxLocation,
            "anchor": "top",
            "sizetoanchorwidth": true
        };
        popupSearchLocation.setContext(context);
        popupSearchLocation.show();
        //Dismiss Loading screen
        removeProgressView();
        dismissSyncLoadingScreen();
    }
    //Display Loading screen
    displayProgressView();
    // Call the com.kony.WeightWatchers.LookUpTables.Location.getAll ORM API
    com.kony.WeightWatchers.LookUpTables.Location.getAll(getAllLocationSuccessCallback, eventErrorCallBack, null, limit, 0);
    //com.kony.WeightWatchers.LookUpTables.Location.getPendingUpload(getAllLocationSuccessCallback, eventErrorCallBack);
}

function getLocationBySearchKey(whereClause) {
    //Success callback reads the response and populates the SegmentedUI
    function getLocationBySearchKeySuccessCallback(res) {
        //preparing object to be mapped to SegmentedUI
        var objectToMap = [];
        if (res.length <= 0) {
            //	popupSearchLocation.segmentRecentLocations.setVisibility(false);
            //  popupSearchLocation.hboxRecentSearch.setVisibility(true);
            callingOnlineSearch();
            //callAlert(getMessageTemplate("noData"),"info");
        } else {
            //Initialize global for back button feature
            //	gblLocationBack = getAllLocation;
            for (var i in res) {
                var v = res[i];
                objectToMap[i] = new Object();
                //objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
                objectToMap[i]["lblLocationTitle"] = kony.sync.getString(v.displayvalue) + " (" + kony.sync.getString(v.locationno) + ")";
                objectToMap[i]["zip"] = kony.sync.getString(v.zip);
                objectToMap[i]["locationTypeId"] = kony.sync.getString(v.locationTypeId);
                objectToMap[i]["displayvalue"] = kony.sync.getString(v.displayvalue);
                objectToMap[i]["locationnumber"] = kony.sync.getString(v.locationno);
                kony.print(i + " th record fetched");
            }
            kony.print("Setting value to segment");
            popupSearchLocation.segmentRecentLocations.setVisibility(true);
            popupSearchLocation.hboxRecentSearch.setVisibility(false);
            popupSearchLocation.segmentRecentLocations.setData(objectToMap);
        }
        popupSearchLocation.lblLocationsTitle.text = kony.i18n.getLocalizedString("strSearchTitle");
        var context = {
            "widget": frmLogin.hboxLocation,
            "anchor": "top",
            "sizetoanchorwidth": true
        };
        popupSearchLocation.setContext(context);
        popupSearchLocation.show();
        //Dismiss Loading screen
        removeProgressView();
        dismissSyncLoadingScreen();
    }
    //Display Loading screen
    displayProgressView();
    // Call the com.kony.WeightWatchers.LookUpTables.Location.getAll ORM API
    //com.kony.WeightWatchers.LookUpTables.Location.getAll(getRecentLocationSuccessCallback, eventErrorCallBack,null,5,0);
    DBLocationController.find(whereClause, getLocationBySearchKeySuccessCallback, eventErrorCallBack)
}
//Wrapper method for back button functionality of edit page
function getLocationbyPKFromBack() {
    getLocationbyPK(true);
}
//Wrapper method for navigation from List to Detail view
function getLocationbyPKFromList() {
    getLocationbyPK(false);
}
/*  This method retrieves an instance of Location for a given Primary Key (unique identifier) of the object and displays on frmLocationDetails
 *
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
function getLocationbyPK(fromBack) {
    var getLocationbyPKObject = new com.kony.WeightWatchers.LookUpTables.Location();
    // Success callback reads the response and populates the fields on frmLocationDetails
    function getLocationSuccessCallback(res) {
        if (res != null && res.length > 0) {
            gblLocationObject = res[0];
            frmLocationDetails.widgetzipValue.text = kony.sync.getString(gblLocationObject.zip);
            frmLocationDetails.widgetdisplayvalueValue.text = kony.sync.getString(gblLocationObject.displayvalue);
            frmLocationDetails.widgetlocationnoValue.text = kony.sync.getString(gblLocationObject.locationno);
            frmLocationDetails.show();
        }
        //Showing alert when result set is empty
        else {
            callAlert(getMessageTemplate("noData"), "info")
        }
    }
    if (fromBack == true) {
        getLocationbyPKObject.locationno = gblLocationObject.locationno;
    } else {
        //Storing the primary key in global variable to be used for other ORMs
        getLocationbyPKObject.locationno = frmLocationList.seguiList.selectedItems[0].locationno;
    }
    // Call the com.kony.WeightWatchers.LookUpTables.Location.getAllDetailsByPK ORM API
    getLocationbyPKObject.getAllDetailsByPK(getLocationSuccessCallback, eventErrorCallBack);
}
/* This method deletes an instance of Location identified by Primary Key (unique identifier) of the object 
 * and loads the frmLocationList with refreshed data
 *
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
function deleteByPKLocation() {
    // Success callback deletes the entry of specified record on frmLocationDetails
    function deleteByPKLocationSuccessCallback(res) {
        callAlert(getMessageTemplate("deleteSuccess", "Location"), "info")
        gblLocationObject = null;
        kony.appgen.comingFromDelete = true;
        goBackToLocationList();
    }
    // Call the com.kony.WeightWatchers.LookUpTables.Location.deleteByByPK ORM API
    function handler(response) {
        if (response == true) {
            gblLocationObject.deleteByPK(deleteByPKLocationSuccessCallback, eventErrorCallBack);
        }
    }
    callAlert(getMessageTemplate("delete", "Location"), "confirmation", handler, "", "YES", "NO")
}
/* This method updates an instance of Location identified by Primary Key (unique identifier) of the object
 *
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
function updateByPKLocation() {
    //Success callback that displays an alert on successful update
    function updateByPKLocationSuccessCallback(res) {
        callAlert(getMessageTemplate("updateSuccess", "Location"), "info")
    }

    function updateByPKLocationErrorCallback(res) {
        gblLocationObject = gblLocationtempObject;
        eventErrorCallBack(res);
    }
    //storing the global object in a temporary object as backup in case the update fails
    var gblLocationtempObject = kony.sync.CreateCopy(gblLocationObject);
    //Preparing an object to store the values to be updated
    gblLocationObject.zip = frmLocationEdit.widgetzipValue.text;
    gblLocationObject.displayvalue = frmLocationEdit.widgetdisplayvalueValue.text;
    // Call the com.kony.WeightWatchers.LookUpTables.Location.updateByByPK ORM API
    gblLocationObject.updateByPK(updateByPKLocationSuccessCallback, updateByPKLocationErrorCallback);
}
/*  This method navigates to Add Form of Location object after resetting the fields 
 *
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
function showAddLocationForm() {
    //Resetting the fields				
    frmLocationAdd.widgetzipValue.text = "";
    frmLocationAdd.widgetdisplayvalueValue.text = "";
    frmLocationAdd.widgetlocationnoValue.text = "";
    frmLocationAdd.show();
}
/*  This method navigates to Edit Form of Location object
 *
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
function showEditLocationForm() {
    // Success callback reads the response and populates the fields on frmLocationEdit
    function editLocationSuccessCallback(res) {
        if (res != null && res.length > 0) {
            frmLocationEdit.widgetzipValue.text = checkUndefined(res[0].zip).trim();
            frmLocationEdit.widgetdisplayvalueValue.text = checkUndefined(res[0].displayvalue).trim();
            frmLocationEdit.show();
        }
    }
    // Call the com.kony.WeightWatchers.LookUpTables.Location.getAllDetailsByPK ORM API
    gblLocationObject.getAllDetailsByPK(editLocationSuccessCallback, eventErrorCallBack);
}
/* This method creates an instance of Location
 *
 * Created On: Wed Feb 26 14:48:22 IST 2014
 * Created by: ispl_336
 */
function createLocation() {
    var createLocationObject = new com.kony.WeightWatchers.LookUpTables.Location();
    // Success callback creates a new record on frmLocationDetails	
    function createLocationSuccessCallback(res) {
        callAlert(getMessageTemplate("addSuccess", "Location"), "info")
    }
    createLocationObject.zip = frmLocationAdd.widgetzipValue.text;
    createLocationObject.displayvalue = frmLocationAdd.widgetdisplayvalueValue.text;
    createLocationObject.locationno = frmLocationAdd.widgetlocationnoValue.text;
    // Call the com.kony.WeightWatchers.LookUpTables.Location.create ORM API
    createLocationObject.create(createLocationSuccessCallback, eventErrorCallBack);
}

function goBackToLocationList() {
    gblComingFromHome = true;
    offsetForListView = 0;
    goBack(gblLocationBack);
}

function getAllLocationFromMenu() {
    gblComingFromHome = true;
    limitForListView = gblLimitForListView;
    offsetForListView = 0;
    isPageLimit = false;
    showSyncLoadingScreen("Loading Data");
    getAllLocation();
}

function onReachEventLocation() {
    if (gblLocationBack) {
        gblLocationBack();
    } else {
        getAllLocation();
    }
}