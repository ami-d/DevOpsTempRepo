    // this function opens the search popup and related code
    function openSearchPopup() {
        //addMember();
        try {
            popupSearchLocation.segmentRecentLocations.removeAll();
            popupSearchLocation.txtZip.text = "";

            getAllLocation(5, orderMapLocation);
        } catch (exp) {
            GlobalException(exp);
        }
    }


    /*
    Search location by zip Online call webservice
     */

    function searchLocationByZip(eventobject) {
        try {
            if (validateZip()) {
                displayProgressView();
                //Doing Offline search first
                var whrCondition = "";
                if (popupSearchLocation.txtZip.text.length < 5) {
                    whrCondition = "where locationno = '"+ popupSearchLocation.txtZip.text+"'";
                } else {
                    whrCondition = "where zip= '"+popupSearchLocation.txtZip.text+"'";
                }

                getLocationBySearchKey(whrCondition);
            }
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    };

    function callingOnlineSearch() {
        var GetLocationbyZip_inputparam = {};
        GetLocationbyZip_inputparam["serviceID"] = LocationService;
        GetLocationbyZip_inputparam["searchId"] = popupSearchLocation.txtZip.text.toString();
        GetLocationbyZip_inputparam["httpheaders"] = {};
        GetLocationbyZip_inputparam["httpconfigs"] = {};
        GetLocationbyZip = Network.makeServiceCall(GetLocationbyZip_inputparam, searchLocationByZipCallback);
    }

    // callback for Search by zip service
    function searchLocationByZipCallback(status, GetLocationbyZip) {
        try {
            kony.print("Status is : " + status);
            if (status == 400) {

                popupSearchLocation.lblLocationsTitle.text = kony.i18n.getLocalizedString("strSearchTitle");
                //	alert(JSON.stringify(GetLocationbyZip));


                if (GetLocationbyZip["LocationList"] && GetLocationbyZip["LocationList"].length > 0) { //** MEG 6394
                    //alert("Data===="+JSON.stringify(GetLocationbyZip["LocationList"]));
                    if (GetLocationbyZip != null && GetLocationbyZip != undefined && GetLocationbyZip["LocationList"] != null && GetLocationbyZip["LocationList"] != undefined) {

                        popupSearchLocation.segmentRecentLocations.setVisibility(true);
                        popupSearchLocation.hboxRecentSearch.setVisibility(false);
                        var popupSearchLocation_segmentRecentLocations_temp = [];
                        for (var i1 = 0; i1 < GetLocationbyZip["LocationList"].length; i1++) {
                            popupSearchLocation_segmentRecentLocations_temp.push({
                                "lblLocationTitle": GetLocationbyZip["LocationList"][i1]["locationnumber"] + "      " + GetLocationbyZip["LocationList"][i1]["displayvalue"], //GetLocationbyZip["LocationList"][i1]["displayvalue"]+" ("+GetLocationbyZip["LocationList"][i1]["locationnumber"]+")",
                                "locationnumber": GetLocationbyZip["LocationList"][i1]["locationnumber"],
                                "zip": GetLocationbyZip["LocationList"][i1]["zip"],
                                "displayvalue": GetLocationbyZip["LocationList"][i1]["displayvalue"],
                                "locationTypeId": GetLocationbyZip["LocationList"][i1]["locationTypeId"]
                            })
                        }
                        popupSearchLocation.segmentRecentLocations.removeAll();
                        popupSearchLocation.segmentRecentLocations.setData(popupSearchLocation_segmentRecentLocations_temp);
                        removeProgressView();
                    }
                } else {
                    // 	alert(kony.i18n.getLocalizedString("strMsgNoRecord"));
                    popupSearchLocation.segmentRecentLocations.setVisibility(false);
                    popupSearchLocation.hboxRecentSearch.setVisibility(true);
                    popupSearchLocation.lblNoRecentSearch.text = kony.i18n.getLocalizedString("strMsgNoRecord");
                    /*
                    var TempRecord = [];
                    TempRecord.push({
                             "lblLocationTitle": kony.i18n.getLocalizedString("strMsgNoRecord")
                    });
                                    popupSearchLocation.segmentRecentLocations.setData(TempRecord);	 
                         */
                    removeProgressView();
                }
            }
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    };

    /*
     * Code when location is selected from Searched Results
     */
    function changeLocation() {
        try {
            var date = new Date();
            kony.print(" date added is :" + date);
            //var createLocationObject = new com.kony.WeightWatchers.LookUpTables.Location();
            var createLocationObject = {};
            // Success callback creates a new record on frmLocationDetails	
            function createLocationSuccessCallback(res) {
                //callAlert(getMessageTemplate("addSuccess","Location"),"info")
                kony.print(getMessageTemplate("addSuccess", "Location"), "info")
            }
            createLocationObject.zip = popupSearchLocation.segmentRecentLocations.selectedItems[0]["zip"];
            createLocationObject.displayvalue = popupSearchLocation.segmentRecentLocations.selectedItems[0]["displayvalue"];
            createLocationObject.locationno = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"];
            createLocationObject.locationTypeId = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationTypeId"];
            createLocationObject.lastupdatedtime = date;

            // Call the com.kony.WeightWatchers.WeightWatchers.Location.create ORM API

            //createLocationObject.create(createLocationSuccessCallback, eventErrorCallBack);
            DBLocationController.create(createLocationObject, createLocationSuccessCallback, eventErrorCallBack, false);
            frmLogin.lblLocationName.text = popupSearchLocation.segmentRecentLocations.selectedItems[0]["lblLocationTitle"];
            /*var data = [{"locationnumber":popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"],"zip":popupSearchLocation.segmentRecentLocations.selectedItems[0]["zip"],"displayvalue":popupSearchLocation.segmentRecentLocations.selectedItems[0]["displayvalue"]}]
            callInsertDbOperation("location", data);
            frmLogin.lblLocationName.text = popupSearchLocation.segmentRecentLocations.selectedItems[0]["lblLocationTitle"];*/
            popupSearchLocation.dismiss();
        } catch (e) {
            GlobalException(e);
        }
    }
