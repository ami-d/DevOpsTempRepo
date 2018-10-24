/*
	Display progress bar
*/

function displayProgressView_org() {
    //JavaScript: kony.application.showLoadingScreen(skin, text, position, isBlocked, showProgressIndicator, properties)

    //	if(kony.os.is)
    var myProgressIndicatorType = constants.PROGRESS_INDICATOR_TYPE_DEFAULT;
    kony.application.showLoadingScreen(null, kony.i18n.getLocalizedString("loadingText"), constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: "true",
        separatorHeight: 50,
        progressIndicatorColor: "gray",
        progressIndicatorType: myProgressIndicatorType
    })
}

function displayProgressView() {
    var myProgressIndicatorType = constants.PROGRESS_INDICATOR_TYPE_DEFAULT;
    kony.application.showLoadingScreen(null, kony.i18n.getLocalizedString("loadingText"), constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        shouldShowLabelInBottom: "true",
        separatorHeight: 50,
        progressIndicatorColor: "gray",
        progressIndicatorType: myProgressIndicatorType
    })
}

/*
	Remove progress bar
*/
function removeProgressView() {
    kony.print("Removing Progress Screen Now");
    kony.application.dismissLoadingScreen();
}
