function eventOnClickSearchLocationByZip(eventobject) {
    try {
        if (validateZip()) {
            displayProgressView();
            cityName = "";
            boLocation.searchLocationByZipFromLocalDb(popupSearchLocation.txtZip.text.toString());
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
};

function getLocationBySearchKeyResponse(status, popupSearchLocation_segmentRecentLocations_temp) {
    if (status) {
        popupSearchLocation.hboxZipSec2.setVisibility(true);
        popupSearchLocation.segmentRecentLocations.setVisibility(true);
        popupSearchLocation.hboxRecentSearch.setVisibility(false);
        popupSearchLocation.segmentRecentLocations.setData(popupSearchLocation_segmentRecentLocations_temp);
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
    } else {
        popupSearchLocation.hboxZipSec2.setVisibility(false);
        //popupSearchLocation.hboxZipSec2.setVisibility(true);
        popupSearchLocation.segmentRecentLocations.setVisibility(false);
        popupSearchLocation.hboxRecentSearch.setVisibility(true);
        popupSearchLocation.lblNoRecentSearch.text = kony.i18n.getLocalizedString("strMsgNoRecord");
        removeProgressView();
        dismissSyncLoadingScreen();
    }
}

function eventOnClickRowSelectLocation() {
    try {
        if (!IsSyncRunning) {
            var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            cityName = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
            cityNameDefault = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
            kony.print(" date added is :" + entryDate);
            boLocation.updateStatusToLocationDb();
            boLocation.addSelectLocationToLocalDb(entryDate);
            frmLogin.lblLocationName.text = popupSearchLocation.segmentRecentLocations.selectedItems[0]["displayvalue"] + "(" + popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"] + ")";
            glbLocationTitle = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"] + " " + popupSearchLocation.segmentRecentLocations.selectedItems[0]["displayvalue"];
            //Setting the value of selected location (locationNumber) before login to use through out the app
            glbLocationID = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationid"];
            glbLocationNum = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationnumber"];
            glbLocationTypeId = popupSearchLocation.segmentRecentLocations.selectedItems[0]["locationTypeId"];
            glbIsTaxCollected = popupSearchLocation.segmentRecentLocations.selectedItems[0]["IsTaxCollected"];
            glbIsCreditCardEnabled = popupSearchLocation.segmentRecentLocations.selectedItems[0]["IsCreditCardEnabled"];
            glbIsMPActivationEnabled = popupSearchLocation.segmentRecentLocations.selectedItems[0]["MPActivationEnabled"];
            glbIsSignatureCapturingSupported = setIsSignatureCapturingSupported(popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"]);
            kony.print(" eventOnClickRowSelectLocation :: glbIsSignatureCapturingSupported :: " + glbIsSignatureCapturingSupported);
            kony.print("eventOnClickRowSelectLocation==== " + JSON.stringify(popupSearchLocation.segmentRecentLocations.selectedItems));
            kony.print(" glbLocationID is :" + glbLocationID);
            kony.print(" glbLocationNum is :" + glbLocationNum);
            kony.print(" glbIsTaxCollected is :" + glbIsTaxCollected);
            kony.print(" glbIsMPActivationEnabled is :" + glbIsMPActivationEnabled);
            IsFromLocationSelected = true;
            kony.print(" IsFromLocationSelected is :" + IsFromLocationSelected);
            popupSearchLocation.dismiss();
            var monitorData = {
                "LocationId": glbLocationID,
                "LocationNumber": glbLocationNum
            };
            boMonitor.log("Select Location", "txtZip", monitorData, FlowForMonitor.LogIn);
            /*if(checkIfNetworkIsAvailable())
			{
				boAuthentication.authenticateViaWSBeforeSync();
				//syncStartSession();
			}
			else
			{
				alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
			}*/
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgSycRunningInBg"));
        }
    } catch (e) {
        GlobalException(e);
    }
}

function onInitMeetingForm() {
    boMeetings.getLookupForMeeting(getCountryID());
    addDirectSaleMember();
}

function onPostShowMeetingForm() {
    boLocation.getStatesData();
}

function onInitSearchLocation() {
    boLocation.getAllLocationServicecall();
}

function GetInactiveRemoveLocationCallback(res) {
    if (res == true) {
        kony.print("Successfully Removed");
    }
}