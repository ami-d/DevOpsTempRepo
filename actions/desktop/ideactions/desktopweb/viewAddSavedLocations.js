var locationnodata = [];
var addrow = [];

function getSavedLocationData() {
    displayProgressView();
    try {
        function getSavedLocationFromLocalDbResponse(frmSavedLocation_segmentSavedLocations_temp) {
            if (frmSavedLocation_segmentSavedLocations_temp == "undefined" || frmSavedLocation_segmentSavedLocations_temp == null || frmSavedLocation_segmentSavedLocations_temp == undefined) {
                removeProgressView();
                dismissSyncLoadingScreen();
                frmSavedLocations.segLocationView.setVisibility(false);
            } else {
                if (frmSavedLocation_segmentSavedLocations_temp.length > 0) {
                    frmSavedLocations.segLocationView.setVisibility(true);
                    frmSavedLocations.segLocationView.data = frmSavedLocation_segmentSavedLocations_temp;
                } else {
                    removeProgressView();
                    frmSavedLocations.segLocationView.setVisibility(false);
                }
                removeProgressView();
                dismissSyncLoadingScreen();
            }
        }
        frmSavedLocations.segLocationView.removeAll();
        boviewSavedLocation.getSavedLocationFromLocalDb(getSavedLocationFromLocalDbResponse);
    } catch (exp) {
        removeProgressView();
        GlobalException(exp);
    }
}

function eventOnClickAddMyLocationPopup1() {
    if (!checkIfNetworkIsAvailable()) {
        var alertConfig = {
            message: kony.i18n.getLocalizedString("err1011"),
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "",
            yesLabel: kony.i18n.getLocalizedString("strLblOk") // "Yes",											
        };
        var psConfig = {};
        var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
    } else {
        var context = {
            "widget": frmSavedLocations.btnAddNew,
            "anchor": "left",
            "sizetoanchorwidth": false
        };
        popupAddSavedLocation.setContext(context);
        popupAddSavedLocation.show();
    }
}

function alertForDeleteSavedLocation() {
    try {
        var id = frmSavedLocations["segLocationView"]["selectedItems"][0]["locationnumber"];
        if (glbLocationNum == id) {
            alertForMessages(kony.i18n.getLocalizedString("strCannotDeleteSaved"));
        } else {
            displayProgressView();
            glblocationToBeDeleted = id;
            kony.print("::glblocationToBeDeleted=" + glblocationToBeDeleted);
            boviewSavedLocation.CallDeletefun(id, getDeleteSavedLocationResponse);

            function getDeleteSavedLocationResponse(status) {
                if (status) {
                    getSavedLocationData();
                }
            }
        }
    } catch (exp) {
        removeProgressView();
        GlobalException(exp);
    }
}

function eventOnClickAddLocationPopupRow() {
    var selectedObj = popupAddSavedLocation.segmentSearchLocationsResult.selectedItems[0];
    var whrCodition = " where locationno = '" + selectedObj.locationnumber + "'";
    kony.print("eventOnClickAddLocationPopupRow whrCodition =" + whrCodition);
    DBSavedLocationController.find(whrCodition, getSavedLocationFromLocalDbCallback, eventErrorCallBack);

    function getSavedLocationFromLocalDbCallback(res) {
        if (res.length > 0) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgNoLocationToAddFromPopup"));
        } else {
            addLocationPopupRow();
        }
    }
}

function addLocationPopupRow() {
    try {
        currentDataForSeg = popupAddSavedLocation.segmentSearchLocationsResult.data;
        var objData1 = {};
        var objData = {};
        var selectedObj = popupAddSavedLocation.segmentSearchLocationsResult.selectedItems[0];
        var strAddLocationselectedZip = selectedObj.locationnumber;
        var strAddLocationselectedLocation = selectedObj.displayvalue;
        var zip = selectedObj.zip;
        var city = selectedObj.city;
        var stateId = selectedObj.stateId;
        var LocationID = selectedObj.locationid;
        var locationTypeId = selectedObj.locationTypeId;
        var AreaSiteNumber = selectedObj.AreaSiteNumber;
        var IsActive = selectedObj.IsActive;
        var imgicon = selectedObj.imgCheckedIcon;
        var lblLocationTitle = selectedObj.lblLocationTitle;
        var isSelected = selectedObj.isSelected;
        kony.print("image = " + isSelected);
        selectedRowIndex = popupAddSavedLocation.segmentSearchLocationsResult.selectedRowIndex;
        selectedRowIndex = parseInt(selectedRowIndex[1]);
        objData = {
            locationnumber: strAddLocationselectedZip,
            displayvalue: strAddLocationselectedLocation,
            zip: zip,
            city: city,
            stateId: stateId,
            locationTypeId: locationTypeId,
            AreaSiteNumber: AreaSiteNumber,
            IsActive: IsActive,
            imgCheckedIcon: (isSelected) ? "" : "icn_checkmark.png",
            locationid: LocationID,
            lblLocationTitle: lblLocationTitle,
            isSelected: !isSelected
        };
        popupAddSavedLocation.segmentSearchLocationsResult.setDataAt(objData, selectedRowIndex);
        if (!selectedObj.isSelected) {
            addrow.push(objData);
            locationnodata.push(objData);
        } else {
            for (var j = addrow.length - 1; j >= 0; j--) {
                if (addrow[j]["locationnumber"] === strAddLocationselectedZip) {
                    addrow.splice(j, 1);
                    locationnodata.splice(j, 1);
                }
            }
        }
        kony.print("addrow = " + JSON.stringify(addrow));
        kony.print("locationnodata = " + JSON.stringify(locationnodata));
    } catch (e) {
        GlobalException(e);
    }
}

function eventOnClickSearchSavedLocationByZip() {
    try {
        var zip = popupAddSavedLocation.txtZip.text;
        if (ValidateZiporLocation(zip)) {
            var isValidZip;
            if (in_array(deviceLocale, Countries["CA"])) {
                isValidZip = true;
            } else {
                isValidZip = checkValidationForZipDigits(zip);
            }
            if (!isValidZip) {
                displayPopupAlert(kony.i18n.getLocalizedString("strMsgZip"));
            } else {
                addrow = [];
                locationnodata = [];
                displayProgressView();
                boAddSavedLocations.searchSavedLocationByZipFromLocalDb(zip, getSavedLocationBySearchKeyResponse);
            }
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}

function getSavedLocationBySearchKeyResponse(popupAddSavedLocation_segmentRecentLocations_temp) {
    if (popupAddSavedLocation_segmentRecentLocations_temp == "undefined" || popupAddSavedLocation_segmentRecentLocations_temp == null || popupAddSavedLocation_segmentRecentLocations_temp == undefined) {
        popupAddSavedLocation.segmentSearchLocationsResult.setVisibility(false);
        popupAddSavedLocation.hboxRecentSearch.setVisibility(true);
        popupAddSavedLocation.lblNoRecentSearch.text = kony.i18n.getLocalizedString("strMsgNoRecord");
        removeProgressView();
        dismissSyncLoadingScreen();
    } else {
        if (popupAddSavedLocation_segmentRecentLocations_temp.length > 0) {
            popupAddSavedLocation.segmentSearchLocationsResult.setVisibility(true);
            popupAddSavedLocation.hboxRecentSearch.setVisibility(false);
            popupAddSavedLocation.segmentSearchLocationsResult.setData(popupAddSavedLocation_segmentRecentLocations_temp);
            if (popupAddSavedLocation_segmentRecentLocations_temp.length > 10) popupAddSavedLocation.containerHeight = 80;
            else popupAddSavedLocation.containerHeight = 28 + (popupAddSavedLocation_segmentRecentLocations_temp.length) * 6;
            removeProgressView();
            dismissSyncLoadingScreen();
        } else {
            popupAddSavedLocation.containerHeight = 28;
            popupAddSavedLocation.segmentSearchLocationsResult.setVisibility(false);
            popupAddSavedLocation.hboxRecentSearch.setVisibility(true);
            popupAddSavedLocation.lblNoRecentSearch.text = kony.i18n.getLocalizedString("strMsgNoRecord");
            removeProgressView();
            dismissSyncLoadingScreen();
        }
    }
}

function eventOnClickSaveAddLocationData() {
    try {
        popupAddSavedLocation.dismiss(); // Added for MEG-4917
        if (addrow.length > 0) {
            displayProgressView();
            var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            kony.print(" date added is :" + entryDate);
            boAddSavedLocations.addSelectLocationToLocalDb(entryDate, addrow, SaveSavedLocationResponse);
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgSelectLocation"));
            removeProgressView();
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}

function SaveSavedLocationResponse(status) {
    removeProgressView();
    if (status) {
        MultipleLocationSyncCall();
    }
}

function MultipleLocationSyncCall() {
    isMultipleLocation = true;
    if (locationnodata.length > 0) {
        if (isSavedLocation[0]["locationnumber"] == locationnodata[0]["locationnumber"]) {
            if (isSavedLocation[0]["isSaved"] == false) {
                locationnodata.splice(0, 1);
                isSavedLocation.splice(0, 1);
                IsFromLocationSelected = true;
                kony.print(" IsFromLocationSelected is :" + IsFromLocationSelected);
                if (checkIfNetworkIsAvailable()) {
                    boAuthentication.authenticateViaWSBeforeSync();
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
                }
                isaddResFromService = false;
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strMsgNoLocationToAddFromPopup"));
                isaddResFromService = false;
                isMultipleLocation = false;
                isSavedLocation.splice(0, 1);
                popupAddSavedLocation.destroy();
                getSavedLocationData();
            }
        }
    } else {
        if (locationnodata.length <= 0) {
            isaddResFromService = false;
            isSavedLocation = [];
            isMultipleLocation = false;
            popupAddSavedLocation.destroy();
            getSavedLocationData();
        }
    }
}