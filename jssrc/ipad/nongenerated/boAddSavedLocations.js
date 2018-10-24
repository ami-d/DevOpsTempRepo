var isaddResFromService = false;
var isSavedLocation = [];
var isLocationExists = false;
var boAddSavedLocations = {
    searchSavedLocationByZipFromLocalDb: function(strZip, callback) {
        var whrCondition = "";
        if (strZip.length < 5) {
            whrCondition = "where locationno like '" + strZip + "' and IsActive != 'false' ";
        } else {
            whrCondition = "where zip like '" + strZip + "' or locationno like '" + strZip + "' and IsActive != 'false' ";;
        }
        boAddSavedLocations.getSavedLocationBySearchKey(whrCondition, strZip, callback);
    },
    getSavedLocationBySearchKey: function(whereClause, strZip, callback) {
        var popupSearchLocation_segmentRecentLocations_temp = [];

        function getLocationBySearchKeySuccessCallback(res) {
            if (res.length <= 0) {
                isaddResFromService = true;
                boAddSavedLocations.searchSavedLocationByZipViaWS(strZip, callback);
            } else {
                isaddResFromService = false;
                for (var i in res) {
                    kony.print(i + "th record fetching");
                    var v = res[i];
                    var b = mapKeys(viewLocation, {
                        lbllocationTitle: kony.sync.getString(v.locationno) + "      " + kony.sync.getString(v.displayvalue), // kony.sync.getString(v.displayvalue)+" ("+kony.sync.getString(v.locationno)+")",
                        locationNumber: kony.sync.getString(v.locationno),
                        locationTypeId: kony.sync.getString(v.locationTypeId),
                        locationZip: kony.sync.getString(v.zip),
                        displayValue: kony.sync.getString(v.displayvalue),
                        locationid: kony.sync.getString(v.LocationID),
                        city: kony.sync.getString(v.City),
                        stateId: kony.sync.getString(v.StateId),
                        IsActive: kony.sync.getString(v.IsActive),
                        isSelected: false,
                        AreaSiteNumber: kony.sync.getString(v.AreaSiteNumber)
                    });
                    popupSearchLocation_segmentRecentLocations_temp.push(b);
                }
                callback.call(null, popupSearchLocation_segmentRecentLocations_temp);
            }
        }
        //Display Loading screen
        // Call the com.kony.WeightWatchers.WeightWatchers.Location.getAll ORM API
        DBLocationController.find(whereClause, getLocationBySearchKeySuccessCallback, eventErrorCallBack);
    },
    searchSavedLocationByZipViaWS: function(searchId, callback) {
        var GetLocationbyZip_inputparam = {};
        GetLocationbyZip_inputparam["serviceID"] = Services.GetLocationsService;
        GetLocationbyZip_inputparam["searchId"] = searchId;
        if (JsonService) {
            GetLocationbyZip_inputparam["httpheaders"] = setRESTHeader();
        } else {
            GetLocationbyZip_inputparam["deviceID"] = gblDeviceID;
            GetLocationbyZip_inputparam["Source"] = gblSourceVal;
            GetLocationbyZip_inputparam["httpheaders"] = {};
        }
        GetLocationbyZip_inputparam["httpconfigs"] = {};
        GetLocationbyZip = Network.makeServiceCall(GetLocationbyZip_inputparam, searchSavedLocationByZipViaWSCallback, false); //true to allow offline data access
        function searchSavedLocationByZipViaWSCallback(status, GetLocationbyZip) {
            try {
                var popupSavedSearchLocation_segmentRecentLocations_temp = [];
                if (status == 400) {
                    if (GetLocationbyZip["opstatus"] == 0) {
                        kony.print("Response===" + JSON.stringify(GetLocationbyZip));
                        if (GetLocationbyZip["LocationList"] && GetLocationbyZip["LocationList"].length > 0) { //** MEG 6493
                            if (GetLocationbyZip != null && GetLocationbyZip != undefined && GetLocationbyZip["LocationList"] != null && GetLocationbyZip["LocationList"] != undefined) {
                                for (var i1 = 0; i1 < GetLocationbyZip["LocationList"].length; i1++) {
                                    if (GetLocationbyZip["LocationList"][i1]["isActive"] == 'true') {
                                        var b = mapKeys(viewLocation, {
                                            lbllocationTitle: GetLocationbyZip["LocationList"][i1]["locationnumber"] + "      " + GetLocationbyZip["LocationList"][i1]["displayvalue"], //GetLocationbyZip["LocationList"][i1]["displayvalue"] + " ("+GetLocationbyZip["LocationList"][i1]["locationnumber"]+")",
                                            locationNumber: GetLocationbyZip["LocationList"][i1]["locationnumber"],
                                            locationZip: GetLocationbyZip["LocationList"][i1]["zip"],
                                            displayValue: GetLocationbyZip["LocationList"][i1]["displayvalue"],
                                            city: GetLocationbyZip["LocationList"][i1]["city"],
                                            locationid: GetLocationbyZip["LocationList"][i1]["locationid"],
                                            IsActive: GetLocationbyZip["LocationList"][i1]["isActive"],
                                            locationTypeId: GetLocationbyZip["LocationList"][i1]["locationTypeId"],
                                            stateId: GetLocationbyZip["LocationList"][i1]["stateId"],
                                            isSelected: false,
                                            AreaSiteNumber: GetLocationbyZip["LocationList"][i1]["areaSiteNumber"]
                                        });
                                        popupSavedSearchLocation_segmentRecentLocations_temp.push(b);
                                    }
                                }
                                callback.call(null, popupSavedSearchLocation_segmentRecentLocations_temp);
                            }
                        } else {
                            callback.call(null, popupSavedSearchLocation_segmentRecentLocations_temp);
                        }
                    } else {
                        CommonErrHandler.networkError(GetLocationbyZip['opstatus'])
                        callback.call(null, popupSavedSearchLocation_segmentRecentLocations_temp);
                    }
                } else if (status == 300) {
                    CommonErrHandler.networkError(status, GetLocationbyZip);
                    callback.call(null, popupSavedSearchLocation_segmentRecentLocations_temp);
                }
            } catch (e) {
                removeProgressView();
                GlobalException(e);
            }
        }
    },
    addSelectLocationToLocalDb: function(date, addLocationDetail, callback) {
        // Success callback creates a new record on frmLocationDetails	
        function createLocationSuccessCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "Location"), "info");
            boAddSavedLocations.addSavedSelectLocationToLocalDb(date, addLocationDetail, callback);
        }

        function updateLocationSuccessCallback(res) {
            kony.print(getMessageTemplate("UpdateSuccess", "Location"), "info");
            boAddSavedLocations.addSavedSelectLocationToLocalDb(date, addLocationDetail, callback);
        }
        var location = "";
        var pusharr = [];
        for (i = 0; i < addLocationDetail.length; i++) {
            isLocationExists = false;
            boAddSavedLocations.checkForAlreadyExistsLocations(addLocationDetail[i]["locationnumber"]);
            kony.print("isLocationExists  =" + isLocationExists);
            if (isLocationExists) {
                location += addLocationDetail[i]["locationnumber"] + ",";
            } else {
                var createAllLocationObject = {};
                createAllLocationObject["zip"] = addLocationDetail[i]["zip"];
                createAllLocationObject["displayvalue"] = addLocationDetail[i]["displayvalue"];
                createAllLocationObject["locationno"] = addLocationDetail[i]["locationnumber"];
                createAllLocationObject["ModifiedLast"] = date;
                createAllLocationObject["lastSelected"] = "false";
                createAllLocationObject["City"] = addLocationDetail[i]["city"];
                createAllLocationObject["StateId"] = addLocationDetail[i]["stateId"];
                createAllLocationObject["LocationID"] = addLocationDetail[i]["locationid"];
                createAllLocationObject["locationTypeId"] = addLocationDetail[i]["locationTypeId"];
                createAllLocationObject["AreaSiteNumber"] = addLocationDetail[i]["AreaSiteNumber"];
                createAllLocationObject["IsActive"] = addLocationDetail[i]["IsActive"];
                pusharr.push(createAllLocationObject);
            }
        }
        kony.print("pusharr  =" + JSON.stringify(pusharr));
        kony.print("location =" + location);
        if (pusharr.length > 0) {
            DBLocationController.createAll(pusharr, createLocationSuccessCallback, eventErrorCallBack, false);
        }
        if (location.length > 0) {
            location = location.substr(0, location.length - 1);
            var whrCondition = "where locationno in(" + location + ")";
            var updateObj = {};
            updateObj["ModifiedLast"] = date;
            updateObj["lastSelected"] = "false";
            DBLocationController.update(whrCondition, updateObj, updateLocationSuccessCallback, eventErrorCallBack, false);
        }
        // Call the com.kony.WeightWatchers.WeightWatchers.Location.create and update ORM API
    },
    addSavedSelectLocationToLocalDb: function(date, addLocationDetail, callback) {
        var whrCondition;
        var location;
        var addlocationdetails = addLocationDetail;
        if (addLocationDetail.length <= 0) {
            callback.call(null, true);
        }
        for (i = 0; i < addLocationDetail.length; i++) {
            location = addlocationdetails[i]["locationnumber"];
            addlocationdetails.splice(i, 1);
            whrCondition = "where locationno ='" + location + "' and EmployeeNumber = " + glbEmployeeNumber;
            DBSavedLocationController.find(whrCondition, getLocationBySearchKeySuccessCallback, eventErrorCallBack);
        }

        function getLocationBySearchKeySuccessCallback(res) {
            if (res.length <= 0) {
                var createLocationObject = {};
                createLocationObject.locationno = location;
                createLocationObject.lastupdatedtime = date;
                createLocationObject.EmployeeNumber = glbEmployeeNumber;
                // commented for MEGCA-166  
                DBSavedLocationController.create(createLocationObject, createLocationSuccessCallback, eventErrorCallBack, false); // Added for MEGCA-166 
                function createLocationSuccessCallback(res) {
                    kony.print(getMessageTemplate("addSuccess", "Location"), "info");
                    isSavedLocation.push({
                        locationnumber: location,
                        isSaved: false
                    });
                    boAddSavedLocations.addSavedSelectLocationToLocalDb(date, addlocationdetails, callback);
                }
            } else {
                var updateObj = {};
                updateObj["lastupdatedtime"] = date;

                function updateStatusToLocationDbSuccessCallback(res) {
                    kony.print(getMessageTemplate("UpdateStatus", "Location"), "info");
                    isSavedLocation.push({
                        locationnumber: location,
                        isSaved: true
                    });
                    boAddSavedLocations.addSavedSelectLocationToLocalDb(date, addlocationdetails, callback);
                }
                DBSavedLocationController.update(whrCondition, updateObj, updateStatusToLocationDbSuccessCallback, eventErrorCallBack, false)
            }
        }
    },
    checkForAlreadyExistsLocations: function(locationNumber) {
        var whrCodition = " where locationno = '" + locationNumber + "'";
        kony.print("checkForAlreadyExistsLocations whrCodition =" + whrCodition);
        DBLocationController.find(whrCodition, checkForAlreadyExistsLocationsCallback, eventErrorCallBack);

        function checkForAlreadyExistsLocationsCallback(res) {
            if (res.length > 0) isLocationExists = true;
        }
    }
};