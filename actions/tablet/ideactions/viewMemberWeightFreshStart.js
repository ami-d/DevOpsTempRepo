var addrow = [];
var selectedSessionNumber = 0;

//function to show the weight history for user to select fresh start from the old history 
function getFreshStartWeightHistory() {

    kony.print("------------>getFreshStartWeightHistory");
    try {
        //getting data to view history of member weight from begining 
        boMemberProfile.getSelectedMemberWeightHistoryForFreshStart(glbMemberId);
    } catch (exp) {
        GlobalException(exp);
    }
}

//function to bind the data from database to the pop up segement
function bindDataForMemberFreshStartPopup(weightHistoryData) {

    kony.print("------>step 7  - display segment data in pop up " + JSON.stringify(weightHistoryData));
    displayProgressView();
    if (weightHistoryData.length == 0) {
        popupMemberWeightHistory.segWeightData.data = weightHistoryData;
        popupMemberWeightHistory.hboxRecentSearch.setVisibility(true);
    } else {
        popupMemberWeightHistory.segWeightData.data = weightHistoryData;
        popupMemberWeightHistory.hboxRecentSearch.setVisibility(false);
    }
    removeProgressView();
}

//function to update the weight in the database while clicking on the save button 
function eventOnClickSaveFreshStartWeight() {

    //flag for the fresh start weight selected or not 
    blnFreshStartWeightChanged = false;

    //if no history in past then show alert 
    if (!popupMemberWeightHistory.segWeightData.data || (popupMemberWeightHistory.segWeightData && popupMemberWeightHistory.segWeightData.data.length == 0)) {
        //alertForMessages(kony.i18n.getLocalizedString("strErrMsgNoWeightHistory"));
        
        displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgNoWeightHistory"));
    } else {
        currentDataForSeg = popupMemberWeightHistory.segWeightData.data;
        for (i = 0; i < currentDataForSeg.length; i++) {

            if (currentDataForSeg[i].imgCheckedIcon != "") {
                kony.print("------ selected --------> " + JSON.stringify(currentDataForSeg[i]));
                blnFreshStartWeightChanged = true;

                var tmp = {};
                tmp.StartWeight = currentDataForSeg[i].lblWeight;
                tmp.StartDate = currentDataForSeg[i].lblDate;
                tmp.WeighInDate = currentDataForSeg[i].hidWeightDate;
                tmp.SessionNumber = currentDataForSeg[i].SessionNumber;

                glbArrMemberFreshStart = tmp;

                kony.print("------glbObjMemberFreshStart = " + JSON.stringify(glbObjMemberFreshStart) + "--- array = " + JSON.stringify(glbArrMemberFreshStart));
            } else {
                kony.print("--------------> " + JSON.stringify(currentDataForSeg[i]));
            }
        }
        //if user is just clicking on save button without selecting any weight 
        if (blnFreshStartWeightChanged == true) {
            /*var alertConfig = {
		        message: kony.i18n.getLocalizedString("strErrMsgSureSaveWithChanges"),
		        alertType : constants.ALERT_TYPE_CONFIRMATION,
		        alertTitle : kony.i18n.getLocalizedString("strConfirm"),
		        yesLabel : kony.i18n.getLocalizedString("strLblYes"),// "Yes",
		        noLabel : kony.i18n.getLocalizedString("strLblNo"),// "No",
		        
			*/


            // alertHandler : 	function(response){
            function popupAlertYesHandler() {
             	
             	boMonitor.log("FreshStart", "vboxDoneImage", glbArrMemberFreshStart,FlowForMonitor.update,true);
                
                kony.print("Inside popupAlertYesHandler");
                displayProgressView();
                kony.print("---------- save buton clicked .updating the data in database  the pop up -- blnFreshStartWeightChanged=  " + blnFreshStartWeightChanged + "-- glb member session number = " + glbSelectedMemberSessionNumber);
                //boMemberProfile.updateMemberFreshStarWeight(glbMemberId, callBackAfterMemberFreshWeightUpdate);
                dismissPopupAlertHandler();
                popupGoalWeight.dismiss();
                popupActionsForProcessMember.dismiss();
                removeProgressView();
                destroyPopupforMemberWeightHistory();

                /*var alertConfig = {
				        message: kony.i18n.getLocalizedString("strMsgFreshStartWeightUpdatedSuccess"),
				        alertType : constants.ALERT_TYPE_INFO,
				        alertTitle : "",
				        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
				        alertHandler : 	function(response){
				        		popupMemberWeightHistory.dismiss();
				        }	
			    	};
				var psConfig = {};
				var myAlert = kony.ui.Alert(alertConfig, psConfig);
        		removeProgressView();
        		popupMemberWeightHistory.dismiss();
        		destroyPopupforMemberWeightHistory(); */
            };

            function popupAlertNoHandler() {
                //nothing to do
                kony.print("Inside popupAlertNoHandler");
                popupMemberWeightHistory.dismiss();
                destroyPopupforMemberWeightHistory();
                dismissPopupAlertHandler();
            }
            var context = {
                "widget": popupMemberWeightHistory.hbox62579280221430,
                "anchor": "bottom",
                "sizetoanchorwidth": true
            };
            popupAlertHandler.vboxYes.onClick = popupAlertYesHandler;
            popupAlertHandler.vboxNo.onClick = popupAlertNoHandler;
            displayPopupAlertHandler(kony.i18n.getLocalizedString("strErrMsgSureSaveWithChanges"), context);
            //var psConfig = {};
            //var myAlert = kony.ui.Alert(alertConfig, psConfig);
        } else {
            displayPopupAlert(kony.i18n.getLocalizedString("strErrMsgSelectStartWeight"));
        }
    }

}

function eventOnClickAddFreshStartRecord() {


    kony.print("---- selecting record glbSelectedMemberSessionNumber =  " + glbSelectedMemberSessionNumber);

    try {
        currentDataForSeg = popupMemberWeightHistory.segWeightData.data;

        var objData1 = {};
        var objData = {};
        var selectedObj = popupMemberWeightHistory.segWeightData.selectedItems[0];

        var strSelectedDate = selectedObj.lblDate;
        var strSelectedWeight = selectedObj.lblWeight;
        var weightId = selectedObj.hidWeightDetailRowId;
        var imgicon = selectedObj.imgCheckedIcon;

        selectedRowIndex = popupMemberWeightHistory.segWeightData.selectedRowIndex;

        selectedRowIndex = parseInt(selectedRowIndex[1]);

        kony.print("--------total record = " + currentDataForSeg.length + '------selec obj = ' + JSON.stringify(selectedObj) + '--- row index = ' + selectedRowIndex);

        for (i = 0; i < currentDataForSeg.length; i++) {
            kony.print("-----------in lopp " + i);

            if (selectedRowIndex == i) {
                //if member session number is 1 and weight history >= 1 then only allow to select as a fresh start, else block to select 
                if (currentDataForSeg[i].SessionNumber < glbSelectedMemberSessionNumber && glbSelectedMemberSessionNumber != 1) //
                {
                    alertForMessages(kony.i18n.getLocalizedString("strErrMsgCantSelectFreshStartWeight"));
                    return false;
                } else {
                    if (imgicon == "" || imgicon == "undefined" || imgicon == null || imgicon == undefined) {
                        selectedSessionNumber = currentDataForSeg[i].SessionNumber;
                        objData = {
                            lblDate: currentDataForSeg[i].lblDate,
                            lblWeight: currentDataForSeg[i].lblWeight,
                            template: currentDataForSeg[i].template,
                            hidWeightDetailRowId: currentDataForSeg[i].hidWeightDetailRowId,
                            imgCheckedIcon: "icn_checkmark.png",
                            hidWeightDate: currentDataForSeg[i].hidWeightDate,
                            SessionNumber: currentDataForSeg[i].SessionNumber
                        };
                        popupMemberWeightHistory.segWeightData.setDataAt(objData, i);
                    }
                }
            } else {
                objData = {
                    lblDate: currentDataForSeg[i].lblDate,
                    lblWeight: currentDataForSeg[i].lblWeight,
                    template: currentDataForSeg[i].template,
                    hidWeightDetailRowId: currentDataForSeg[i].hidWeightDetailRowId,
                    imgCheckedIcon: "",
                    hidWeightDate: currentDataForSeg[i].hidWeightDate,
                    SessionNumber: currentDataForSeg[i].SessionNumber
                };
                popupMemberWeightHistory.segWeightData.setDataAt(objData, i);
            }
        }
    } catch (e) {
        GlobalException(e);
    }
}

function destroyPopupforMemberWeightHistory() {
    popupMemberWeightHistory.destroy();
}
