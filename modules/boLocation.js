var isResFromService = false;
var StateDataObjArr = [];
var LocationsArr = [];
var boLocation = {
    getLocationFromLocalDb: function(limit, orderMap) {
        var whrCodition = " where IsActive != 'false' order by ModifiedLast DESC LIMIT 0,5";

        function getLocationFromLocalDbCallback(res) {
            //preparing object to be mapped to SegmentedUI
            var objectToMap = [];
            popupSearchLocation_segmentRecentLocations_temp = [];
            if (res.length < 0) {
                getLocationFromLocalDbResponse(false, popupSearchLocation_segmentRecentLocations_temp);
            } else {
                //Initialize global for back button feature
                for (var i in res) {
                    kony.print(i + "th record fetching");
                    var v = res[i];
                    var b = mapKeys(viewLocation, {
                        lbllocationTitle: kony.sync.getString(v.locationno) + "      " + kony.sync.getString(v.displayvalue), //kony.sync.getString(v.displayvalue)+" ("+kony.sync.getString(v.locationno)+")",
                        locationNumber: kony.sync.getString(v.locationno),
                        locationZip: kony.sync.getString(v.zip),
                        displayValue: kony.sync.getString(v.displayvalue),
                        city: kony.sync.getString(v.City),
                        IsActive: kony.sync.getString(v.IsActive),
                        stateId: kony.sync.getString(v.StateId),
                        locationid: kony.sync.getString(v.LocationID),
                        locationTypeId: kony.sync.getString(v.locationTypeId),
                        AreaSiteNumber: kony.sync.getString(v.AreaSiteNumber),
                        IsTaxCollected: kony.sync.getString(v.IsTaxCollected),
                        IsCreditCardEnabled: kony.sync.getString(v.IsCreditCardEnabled),
                        MPActivationEnabled: kony.sync.getString(v.MPActivationEnabled)
                    });
                    popupSearchLocation_segmentRecentLocations_temp.push(b);

                }
                getLocationFromLocalDbResponse(true, popupSearchLocation_segmentRecentLocations_temp);

            }


        }
        //Display Loading screen
        displayProgressView();
        // Call the com.kony.WeightWatchers.WeightWatchers.Location.getAll ORM API
        DBLocationController.find(whrCodition, getLocationFromLocalDbCallback, eventErrorCallBack, null, limit, 0);
    },
    searchLocationByZipFromLocalDb: function(strZip) {
        var whrCondition = "";
        if (strZip.length < 5) {
            whrCondition = "where IsActive != 'false' and locationno like '" + strZip + "'";
        } else {
            whrCondition = "where IsActive != 'false' and zip like '" + strZip + "' or locationno like '" + strZip + "'";
        }

        boLocation.getLocationBySearchKey(whrCondition, strZip);
    },
    getLocationBySearchKey: function(whereClause, strZip) {
        var popupSearchLocation_segmentRecentLocations_temp = [];

        function getLocationBySearchKeySuccessCallback(res) {
            if (res.length <= 0) {
                isResFromService = true;
                boLocation.searchLocationByZipViaWS(strZip);
            } else {
                isResFromService = false;
                if (!checkIfNetworkIsAvailable()) {
                    for (var i in res) {
                        kony.print(i + "th record fetching");
                        var v = res[i];
                        if (kony.sync.getString(v.IsActive != 'false')) {
                            var b = mapKeys(viewLocation, {
                                lbllocationTitle: kony.sync.getString(v.locationno) + "      " + kony.sync.getString(v.displayvalue), // kony.sync.getString(v.displayvalue)+" ("+kony.sync.getString(v.locationno)+")",
                                locationNumber: kony.sync.getString(v.locationno),
                                locationZip: kony.sync.getString(v.zip),
                                displayValue: kony.sync.getString(v.displayvalue),
                                city: kony.sync.getString(v.City),
                                stateId: kony.sync.getString(v.StateId),
                                locationid: kony.sync.getString(v.LocationID),
                                locationTypeId: kony.sync.getString(v.locationTypeId),
                                AreaSiteNumber: kony.sync.getString(v.AreaSiteNumber),
                                IsActive: kony.sync.getString(v.IsActive),
                                IsTaxCollected: kony.sync.getString(v.IsTaxCollected),
                                IsCreditCardEnabled: kony.sync.getString(v.IsCreditCardEnabled),
                                MPActivationEnabled: kony.sync.getString(v.MPActivationEnabled)
                            });
                            popupSearchLocation_segmentRecentLocations_temp.push(b);
                        }
                    }
                    if (popupSearchLocation_segmentRecentLocations_temp.length > 0) {
                        getLocationBySearchKeyResponse(true, popupSearchLocation_segmentRecentLocations_temp);
                    } else {
                        getLocationBySearchKeyResponse(false, popupSearchLocation_segmentRecentLocations_temp);
                    }
                } else {
                    boLocation.searchLocationByZipViaWS(strZip);

                }
            }


        }
        //Display Loading screen
        displayProgressView();
        // Call the com.kony.WeightWatchers.WeightWatchers.Location.getAll ORM API

        DBLocationController.find(whereClause, getLocationBySearchKeySuccessCallback, eventErrorCallBack)
    },
    searchLocationByZipViaWS: function(searchId) {
        var GetLocationbyZip_inputparam = {};
        GetLocationbyZip_inputparam["serviceID"] = Services.GetLocationsService;
        GetLocationbyZip_inputparam["searchId"] = searchId;
        if(JsonService){
        	GetLocationbyZip_inputparam["httpheaders"] = setRESTHeader();
        }else {
        	GetLocationbyZip_inputparam["deviceID"] = gblDeviceID;
        	GetLocationbyZip_inputparam["Source"] = gblSourceVal;
        	GetLocationbyZip_inputparam["httpheaders"] = {};
        }
        
        GetLocationbyZip_inputparam["httpconfigs"] = {};
        GetLocationbyZip = Network.makeServiceCall(GetLocationbyZip_inputparam, boLocation.searchLocationByZipViaWSCallback, true); //true to allow offline data access
    },
    searchLocationByZipViaWSCallback: function(status, GetLocationbyZip, processOffline) {

        try {
            var popupSearchLocation_segmentRecentLocations_temp = [];
            if (status == 400) {
                kony.print("Response===" + JSON.stringify(GetLocationbyZip));
                if (processOffline) {
                    getLocationBySearchKeyResponse(false, popupSearchLocation_segmentRecentLocations_temp);
                    return;
                }

                if (GetLocationbyZip["LocationList"] != undefined && GetLocationbyZip["LocationList"] != "" && GetLocationbyZip["LocationList"].length > 0) {
                	kony.print("GetLocationbyZip[LocationList].length=== " + GetLocationbyZip["LocationList"].length);
                    kony.print("GetLocationbyZip[LocationList]=== " + JSON.stringify(GetLocationbyZip["LocationList"]));
                    if (GetLocationbyZip != null && GetLocationbyZip != undefined && GetLocationbyZip["LocationList"] != null && GetLocationbyZip["LocationList"] != undefined) {

                        for (var i1 = 0; i1 < GetLocationbyZip["LocationList"].length; i1++) {
                            if (GetLocationbyZip["LocationList"][i1]["isActive"] == 'true') {
                                var b;
                                b = mapKeys(viewLocation, {
                                    lbllocationTitle: GetLocationbyZip["LocationList"][i1]["locationnumber"] + "      " + GetLocationbyZip["LocationList"][i1]["displayvalue"], //GetLocationbyZip["LocationList"][i1]["displayvalue"] + " ("+GetLocationbyZip["LocationList"][i1]["locationnumber"]+")",
                                    locationNumber: GetLocationbyZip["LocationList"][i1]["locationnumber"],
                                    locationZip: GetLocationbyZip["LocationList"][i1]["zip"],
                                    displayValue: GetLocationbyZip["LocationList"][i1]["displayvalue"],
                                    city: GetLocationbyZip["LocationList"][i1]["city"],
                                    IsActive: GetLocationbyZip["LocationList"][i1]["isActive"],
                                    stateId: GetLocationbyZip["LocationList"][i1]["stateId"],
                                    locationid: GetLocationbyZip["LocationList"][i1]["locationid"],
                                    locationTypeId: GetLocationbyZip["LocationList"][i1]["locationTypeId"],
                                    AreaSiteNumber: GetLocationbyZip["LocationList"][i1]["areaSiteNumber"],
                                    IsTaxCollected: GetLocationbyZip["LocationList"][i1]["IsTaxCollected"],
                                    IsCreditCardEnabled: GetLocationbyZip["LocationList"][i1]["IsCreditCardEnabled"],
                                    MPActivationEnabled: GetLocationbyZip["LocationList"][i1]["MPActivationEnabled"]
                                });
                                popupSearchLocation_segmentRecentLocations_temp.push(b);
                            }
                        }
                        if (popupSearchLocation_segmentRecentLocations_temp.length > 0) {
                            getLocationBySearchKeyResponse(true, popupSearchLocation_segmentRecentLocations_temp);
                        } else {
                            getLocationBySearchKeyResponse(false, popupSearchLocation_segmentRecentLocations_temp);
                        }
                    }
                } else {
                    getLocationBySearchKeyResponse(false, popupSearchLocation_segmentRecentLocations_temp);
                }

            }
        } catch (e) {
            GlobalException(e);
        }
    },
    addSelectLocationToLocalDb: function(date) {
        var createLocationObject = {};
        // Success callback creates a new record on frmLocationDetails	
        function createLocationSuccessCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "Location"), "info")
        }

        function updateLocationSuccessCallback(res) {
            kony.print(getMessageTemplate("UpdateSuccess", "Location"), "info")
        }

        // Call the com.kony.WeightWatchers.WeightWatchers.Location.create and update ORM API
        if (isResFromService) {
            isResFromService = false;
            isLocationExists= false;
            boAddSavedLocations.checkForAlreadyExistsLocations(popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"]);
            kony.print("isLocationExists  ="+isLocationExists);
        	if(isLocationExists)
        	{
	        	kony.print("Not from service");
	            var updateObj = {};
	            var location = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"];
	            var whrCondition = "where locationno ='" + location + "'";
	            updateObj["ModifiedLast"] = date;
	            updateObj["lastSelected"] = "true";
	            updateObj["City"] = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
	            updateObj["StateId"] = popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"];
	            stateID = popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"];
	            cityName = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
	            DBLocationController.update(whrCondition, updateObj, updateLocationSuccessCallback, eventErrorCallBack, false);
            }else {
	            kony.print("Is from service");
	            createLocationObject.zip = popupSearchLocation.segmentRecentLocations.selectedItems[0]["zip"];
	            createLocationObject.displayvalue = popupSearchLocation.segmentRecentLocations.selectedItems[0]["displayvalue"];
	            createLocationObject.locationno = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"];
	            createLocationObject.LocationID = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationid"];
	            createLocationObject.ModifiedLast = date;
	            createLocationObject.locationTypeId = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationTypeId"];
	            createLocationObject.AreaSiteNumber = popupSearchLocation.segmentRecentLocations.selectedItems[0]["AreaSiteNumber"];
	            createLocationObject.IsActive = popupSearchLocation.segmentRecentLocations.selectedItems[0]["IsActive"];
	            createLocationObject.lastSelected = "true";
	            createLocationObject.City = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
	            createLocationObject.StateId = popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"];
	            createLocationObject.IsTaxCollected = popupSearchLocation.segmentRecentLocations.selectedItems[0]["IsTaxCollected"];
	            createLocationObject.IsCreditCardEnabled = popupSearchLocation.segmentRecentLocations.selectedItems[0]["IsCreditCardEnabled"];
	            createLocationObject.MPActivationEnabled = popupSearchLocation.segmentRecentLocations.selectedItems[0]["MPActivationEnabled"];
	            stateID = popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"];
	            cityName = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
	            //createLocationObject.create(createLocationSuccessCallback, eventErrorCallBack);
	            DBLocationController.create(createLocationObject, createLocationSuccessCallback, eventErrorCallBack, false);
            }
        } else {
            kony.print("Not from service");
            var updateObj = {};
            var location = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"];
            var whrCondition = "where locationno ='" + location + "'";
            updateObj["ModifiedLast"] = date;
            updateObj["lastSelected"] = "true";
            updateObj["City"] = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
            updateObj["StateId"] = popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"];
            stateID = popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"];
            cityName = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
            DBLocationController.update(whrCondition, updateObj, updateLocationSuccessCallback, eventErrorCallBack, false);
        }

    },
    updateStatusToLocationDb: function() {

        var updateObj = {};
        var whrCondition = "where 1=1";
        updateObj["lastSelected"] = "false";

        function updateStatusToLocationDbSuccessCallback(res) {
            kony.print(getMessageTemplate("UpdateStatus", "Location"), "info")
        }
        DBLocationController.update(whrCondition, updateObj, updateStatusToLocationDbSuccessCallback, eventErrorCallBack, false);
    },
    GetLastSelectedLocation: function() {
        var whereClause = "where IsActive != 'false' and lastSelected='true' LIMIT 0,1";

        function GetLastSelectedLocationSuccessCallback(res) {
            removeProgressView();
            if (res.length > 0) {
                var locationno = kony.sync.getString(res[0].locationno);
                var locationid = kony.sync.getString(res[0].LocationID);
                var displayvalue = kony.sync.getString(res[0].displayvalue);
                glbIsTaxCollected = kony.sync.getString(res[0].IsTaxCollected);
                glbLocationTypeId = kony.sync.getString(res[0].locationTypeId);
                glbLocationTitle = locationno + " " + displayvalue;
                displayLastSelectedLocation(true, locationno, displayvalue, locationid);
                cityName = kony.sync.getString(res[0].City);
                stateID = res[0].StateId;
                kony.print("Last glbIsTaxCollected====" + glbIsTaxCollected);
                glbIsCreditCardEnabled = kony.sync.getBoolean(res[0].IsCreditCardEnabled);
                glbIsMPActivationEnabled = kony.sync.getBoolean(res[0].MPActivationEnabled); 
                kony.print("LocationSuccessCallback::MPActivationEnabled"+glbIsMPActivationEnabled);
                
                glbIsSignatureCapturingSupported = setIsSignatureCapturingSupported(stateID);
                kony.print("glbIsSignatureCapturingSupported :: "+glbIsSignatureCapturingSupported);
				//Just setting creditcard feature to true for a location for some development testing... need to rever it back..
                boLocation.getStateNameByStateId(kony.sync.getString(res[0].StateId));
            }
        }
        //Display Loading screen
        displayProgressView();
        // Call the com.kony.WeightWatchers.WeightWatchers.Location.getAll ORM API

        DBLocationController.find(whereClause, GetLastSelectedLocationSuccessCallback, eventErrorCallBack)
    },

    getStateNameByStateId: function(stateId) {
        var whereClause = "where StateID ='" + stateId + "' AND CountryID='"+ getCountryID()+"'";

        function getStateNameByStateIdSuccessCallback(res) {
            if (res.length > 0) {
                stateName = kony.sync.getString(res[0]._StateABBR);
                popupAdvancedSearch.lblStateInfo.text = stateName;
            }
        }
        com.kony.WeightWatchers.ProductSyncScope.StatesLookup.find(whereClause, getStateNameByStateIdSuccessCallback, eventErrorCallBack)
    },

    getStates: function() {
    
    	bindSateDataToDropdown(StateDataObjArr,false);
    },
    getStatesData: function() {
        kony.print("Inside statedata method.....");
        StateDataObjArr = [];
        var stateCodesToBeIgnore = [];
		var whereClause = " where CountryID='"+ getCountryID()+"' and (stateABBR <> '' or stateABBR <> null ) order by stateABBR asc";
		if(in_array(deviceLocale,Countries["US"])){
			stateCodesToBeIgnore = [66,60,69,61,67,68]; // MEG-5536	
		}
		else{
			stateCodesToBeIgnore = []; // MEG-5700
		}
		
		
        function getStatesDataSuccessCallback(res) {
            kony.print("state Response Data===" + JSON.stringify(res));
            if (res.length > 0) {
                kony.print("Inside statedata success.....");
                for (var i in res) {
                    var v = res[i];
                     
                    var tmpstateObj = {
                        "StateID": kony.sync.getString(v.StateID),
                        "StateABBR": kony.sync.getString(v.StateABBR)
                    };
                    
                    var stateCode=parseInt(kony.sync.getString(v.StateCode));
                    var stateFound = _.find(stateCodesToBeIgnore, function(state){ return state == stateCode; });
               
                    if(!stateFound) {
                    	StateDataObjArr.push(tmpstateObj);
                    }else{
                    	kony.print("DO NOT PUSH THE STATES =="+stateCode);
                    }
                }
                kony.print("StateDataObjArr==" + JSON.stringify(StateDataObjArr));
            }
        }
        com.kony.WeightWatchers.ProductSyncScope.StatesLookup.find(whereClause, getStatesDataSuccessCallback, eventErrorCallBack)
    },
    getStatesForRefineSearch: function() {
   	 	bindSateDataToDropdown(StateDataObjArr, true);
    },
    getDBAllLocationFromDB: function() {
        LocationsArr = [];
        com.kony.WeightWatchers.LookUpTables.Location.getAll(getDBAllLocationSuccessCallback, eventErrorCallBack)

        function getDBAllLocationSuccessCallback(res) {
            for (var i in res) {
                var v = res[i];
                var locallocation = {};
                if(JsonService){
                	LocationsArr.push(kony.sync.getString(v.LocationID));
                }
                else{
                	locallocation = {
	                    id: kony.sync.getString(v.LocationID)
	                };
	                LocationsArr.push(locallocation);
                }
            }
            if (LocationsArr.length > 0) {
                boLocation.getDBAllLocationWSCall();
            } else {
                getLastSyncDateBeforesyncStartSession();
            }
        }
    },
    getDBAllLocationWSCall: function() {
        kony.print("Response LocationsArr ===" + JSON.stringify(LocationsArr));
        var GetLocationbyZip_inputparam = {};
        GetLocationbyZip_inputparam["serviceID"] = Services.LocationGetAll;
        GetLocationbyZip_inputparam["locationid"] = JSON.stringify(LocationsArr);
        if(JsonService){
        	GetLocationbyZip_inputparam["httpheaders"] = setRESTHeader();
        }else {
        	GetLocationbyZip_inputparam["AccessToken"] = glbSPAuthToken;
        	GetLocationbyZip_inputparam["DeviceID"] = gblDeviceID;
        	GetLocationbyZip_inputparam["SPID"] = glbEmployeeId;
        	GetLocationbyZip_inputparam["Source"] = gblSourceVal;
        	GetLocationbyZip_inputparam["httpheaders"] = {};
        }
        
        GetLocationbyZip_inputparam["httpconfigs"] = {};
       
        kony.print("Response LocationsArr ===" + JSON.stringify(GetLocationbyZip_inputparam));
        GetLocationbyZip = Network.makeServiceCall(GetLocationbyZip_inputparam, ALLLocationByZipViaWSCallback, false); //true to allow offline data access

        function ALLLocationByZipViaWSCallback(status, GetLocationbyZip) {
            var IsSelectedLocationActive = false;
            try {
                if (status == 400) {

                    if (GetLocationbyZip["opstatus"] == 0) {
                        kony.print("Response===" + JSON.stringify(GetLocationbyZip));
                        kony.print("GetLocationbyZip[LocationList].length=== " + GetLocationbyZip["LocationList"].length);

                        if (GetLocationbyZip["LocationList"] && GetLocationbyZip["LocationList"].length > 0) { //** MEG 6493
                            if (GetLocationbyZip != null && GetLocationbyZip != undefined && GetLocationbyZip["LocationList"] != null && GetLocationbyZip["LocationList"] != undefined) {
                                var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                                for (var i1 = 0; i1 < GetLocationbyZip["LocationList"].length; i1++) {
                                    var LocationObj;

                                    var updateObj = {};
                                    var location = GetLocationbyZip["LocationList"][i1]["locationnumber"]
                                    var whrCondition = "where locationno ='" + location + "'";
                                    updateObj["zip"] = GetLocationbyZip["LocationList"][i1]["zip"];
                                    updateObj["displayvalue"] = GetLocationbyZip["LocationList"][i1]["displayvalue"];
                                    updateObj["locationTypeId"] = GetLocationbyZip["LocationList"][i1]["locationTypeId"];
                                    updateObj["AreaSiteNumber"] = GetLocationbyZip["LocationList"][i1]["areaSiteNumber"];
                                    updateObj["City"] = GetLocationbyZip["LocationList"][i1]["city"];
                                    updateObj["StateId"] = GetLocationbyZip["LocationList"][i1]["stateId"];
                                    updateObj["IsActive"] = GetLocationbyZip["LocationList"][i1]["isActive"];
                                    updateObj["IsTaxCollected"] = GetLocationbyZip["LocationList"][i1]["IsTaxCollected"];
									updateObj["IsCreditCardEnabled"] = GetLocationbyZip["LocationList"][i1]["IsCreditCardEnabled"];
									updateObj["MPActivationEnabled"] = GetLocationbyZip["LocationList"][i1]["MPActivationEnabled"];
									
                                    kony.print("ALLLocationByZipViaWSCallback ===" + JSON.stringify(updateObj));
                                    DBLocationController.update(whrCondition, updateObj, updateLocationSuccessCallback, eventErrorCallBack, false);

                                    // Phase-1 Prod Issue where the message says location is not active since the IsSelectedLocationActive would never get true if glbLocationID and "location" which is set in the above parameter set are not identical.

                                    if (glbLocationID == location || glbLocationID == GetLocationbyZip["LocationList"][i1]["locationid"]) {
                                        glbLocationTitle = GetLocationbyZip["LocationList"][i1]["locationnumber"] + " " + GetLocationbyZip["LocationList"][i1]["displayvalue"];
                                        glbLocationTypeId = GetLocationbyZip["LocationList"][i1]["locationTypeId"];
                                        IsSelectedLocationActive = GetLocationbyZip["LocationList"][i1]["isActive"];
                                        glbIsTaxCollected = GetLocationbyZip["LocationList"][i1]["IsTaxCollected"];
                                        glbIsCreditCardEnabled = GetLocationbyZip["LocationList"][i1]["IsCreditCardEnabled"];
                                        glbIsMPActivationEnabled = GetLocationbyZip["LocationList"][i1]["MPActivationEnabled"];
                                        kony.print("ALLLocationSuccessCallback::MPActivationEnabled"+glbIsMPActivationEnabled);
                                       //Just setting creditcard feature to true for a location for some development testing... need to rever it back..
										glbIsSignatureCapturingSupported = setIsSignatureCapturingSupported(GetLocationbyZip["LocationList"][i1]["stateId"]);
                						kony.print("glbIsSignatureCapturingSupported :: "+glbIsSignatureCapturingSupported);
                                    }
                                    if (GetLocationbyZip["LocationList"][i1]["isActive"] != 'true') {
                                        boLocationChecking.getLocationFromDB(GetInactiveRemoveLocationCallback, location);
                                    }
                                }
                                if (IsSelectedLocationActive != 'true') {
                                    alertForMessages(kony.i18n.getLocalizedString("strLocationInactive"));
                                    removeProgressView();
                                } else {
                                    //MEG-4018
                                    boTransacations.deleteAllProductAndOffer();
                                }
                            }
                        }

                    } else {

                        CommonErrHandler.networkError(GetLocationbyZip['opstatus']);
                    }

                } else if (status == 300) {
                    CommonErrHandler.networkError(status, GetLocationbyZip);
                }
            } catch (e) {
                GlobalException(e);
            }

            function updateLocationSuccessCallback(res) {
                kony.print("updateLocationSuccessCallback for all location");
                kony.print(getMessageTemplate("UpdateSuccess", "Location"), "info");
            }
        }
    },
    getAllLocationServicecall: function() {
        boLocation.getDBAllLocationFromDB();
    },
    
    getLocationDataByID:function(locationID,callback){
    	var whrClause = " Where locationno like '" + locationID + "'";
    	kony.print("getLocationDataByID whrClause : "+whrClause);
    	function getLocationDataByIDSuccessCallBack (res){
    		kony.print("getLocationDataByID res : "+JSON.stringify(res));
    		if(res.length > 0){
    			callback.call(this, res[0]);
    		}else{
    			callback.call(this, null);
    		}
    	}
    	DBLocationController.find(whrClause, getLocationDataByIDSuccessCallBack, eventErrorCallBack);
    }

}
