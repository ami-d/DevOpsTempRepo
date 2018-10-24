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
                    //   popupSearchLocation.hboxRecentSearch.setVisibility(false);
                    frmSavedLocations.segLocationView.data = frmSavedLocation_segmentSavedLocations_temp;
                } else {
                    removeProgressView();
                    frmSavedLocations.segLocationView.setVisibility(false);
                }

                removeProgressView();
                dismissSyncLoadingScreen();
            }
        }

        boviewSavedLocation.getSavedLocationFromLocalDb(getSavedLocationFromLocalDbResponse);
    } catch (exp) {
        removeProgressView();
        GlobalException(exp);
    }
}


function eventOnClickAddMyLocationPopup() {
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
        popupAddSavedLocation.txtZip.text = "";
        popupAddSavedLocation.segmentSearchLocationsResult.removeAll();
        popupAddSavedLocation.setContext(context);
        popupAddSavedLocation.containerHeight=28;
        popupAddSavedLocation.show();
    }
}
