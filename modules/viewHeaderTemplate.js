function eventOnClickPlusIconHeader() {
    kony.print("glbMeetingNum===>>>>" + glbMeetingNum);
  	//**MEG 7312
  	if(IsInfoSessionMeeting())
    {
		kony.print("Info session Pre Reg Form Open");
      	frmPreRegAddMember.show();
    }else
    {
      //if(glbMeetingNum != "" || glbMeetingNum != undefined || glbMeetingNum != null || glbMeetingNum != " ")
      if (!IsNoMeetingSelected) {

          glbFormName = frmEnrollWeighMember; //Added By PK MEG-4797

          hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strEnrollMember");
          hboxEnrollHdrMain.lblCurrentMeeting.text = glbCurrentMeetingValue;
          ClearVariables();
          IsEnrollMember = FlowForScreens.Enroll;
          //IsFromPM=false;
          ClearInputFields(); //Nikita Patel
          if (glbMeetingStatus == "Open") {
              frmEnrollNewMember.show();
          } else {
              isClickedOnIcon = "Enroll";
              alertForEnrollAddInTalliedMeetingConfirmation();
          }
          //boMeetings.getMeetingStatusForEnrollAdd(glbMeetingNum, "Enroll");

      } else {
          alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
      }
    }
}

function eventonClickBackFromSearchResult() {
    hboxHomeScreenHeader.tbxLastNameHeader.text = "";
    hboxHomeScreenHeader.tbxFirstNameHeader.text = "";
    if (!IsNoMeetingSelected) {
   		selectedMemberData = "";
        evenOnPostShowHomeScreen();
    } else {
        frmHomeScreenNoMeeting.show();
    }
}

function eventOnClickAddIconHeader() {
    kony.print("glbMeetingNum===>>>>" + glbMeetingNum);
    kony.print("glbMeetingNum===>>>>" + glbMeetingNum.trim());
    //if(glbMeetingNum != "" || glbMeetingNum != undefined || glbMeetingNum != null)
    if (!IsNoMeetingSelected) {
    
    	glbFormName = frmEnrollWeighMember; //Added By PK MEG-4797

        ClearVariables();
        IsAddIndividual = FlowForScreens.AddIndividual;

        hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strAddWeighMember");

        hboxEnrollHdrMain.lblCurrentMeeting.text = glbCurrentMeetingValue;
        ClearInputFields(); //Nikita Patel 
        if (glbMeetingStatus == "Open") {
            frmAddIndividulaMember.lblMemberShipInfo.text = getLocalizedString("strPaid");
            frmAddIndividulaMember.imgGoalWeight.isVisible = false;
            frmAddIndividulaMember.show();

            //added by praveen kalal after new requirement for atwork 11OCT2014
            frmAddIndividulaMember.txtMemberID.setEnabled(true);
            frmAddIndividulaMember.btnScan.isVisible = true;
            frmAddIndividulaMember.image214153572481362595.isVisible = true;
            //End by praveen kalal after new requirement for atwork 11OCT2014
        } else {
            isClickedOnIcon = "Add";
            alertForEnrollAddInTalliedMeetingConfirmation();
        }
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
    }
}

function eventonClickvboxCurrMeetingSection() {
    kony.print("inside the call" + IsNoMeetingSelected)
    if (!IsNoMeetingSelected) {
        kony.print("Call the popup");
        //alert(app.headers.hdrEnrollNewMemberTemplate.hboxEnrollHdrMain.vbox13932202681386603.hbox13932202681386605.vboxCurrMeetingSection);
        var context = {
            "widget": hboxEnrollHdrMain.vboxCurrMeetingSection,
            "anchor": "bottom",
            "sizetoanchorwidth": false
        };
        popupCurrentMeeting.setContext(context);
        getCurrentMeetingDropDownData();
        popupCurrentMeeting.show();
    }
}

function eventonClickvboxCurrMeetingSectionHomeScreen() {
    if (!IsNoMeetingSelected) {
        var context1 = {
            "widget": hboxHomeScreen.vboxCurrMeetingSection,
            "anchor": "bottom",
            "sizetoanchorwidth": false
        };
        popupCurrentMeeting.setContext(context1);
        getCurrentMeetingDropDownData();
        popupCurrentMeeting.show();
    }
}

function eventonClickvboxCancelImageHeader() {
    popupCurrentMeeting.dismiss();
}

function onClickSegmentForMenuOption() {
    kony.print("Selected index==" + JSON.stringify(popupHomeMenu.HomeScreenMenuSegment.selectedIndex));
    kony.print("Selected items==" + JSON.stringify(popupHomeMenu.HomeScreenMenuSegment.selectedItems[0].id));
    var selectedItemId = popupHomeMenu.HomeScreenMenuSegment.selectedItems[0].id;
    switch (selectedItemId) {

        case "lookupServiceProvider":
            if (checkIfNetworkIsAvailable()) {
                popupLookupServiceProvider.txtManualEmployeeNumber.setEnabled(false);
            } else {
                popupLookupServiceProvider.txtManualEmployeeNumber.setEnabled(true);
            }
            popupLookupServiceProvider.segLookupServiceProvider.removeAll();
            popupLookupServiceProvider.txtSearch.text = "";
            popupLookupServiceProvider.lblNoEmployee.isVisible = false;
            popupLookupServiceProvider.show();
            break;

        case "viewWgtHistory":
            alertForMessages(kony.i18n.getLocalizedString("strMsgPageDevProgress"));
            break;

        case "batchAddMember":
            ClearVariables();
            IsBatchAddMember = FlowForScreens.BatchAddMember;
            frmBatchAddMember.inTransitionConfig = {
                "transitionDirection": "fromRight",
                "transitionEffect": "transitionMoveIn"
            };
            frmBatchAddMember.outTransitionConfig = {
                "transitionDirection": "fromLeft",
                "transitionEffect": "transitionMoveIn"
            };
            frmBatchAddMember.show();

            break;

        case "switchLocation":
            frmLogin.show();
            isSelMeetingOpenHours = false;

            break;

        case "voidTransaction":
            if (glbMeetingNum == "" || IsNoMeetingSelected) {
                // Dileep Chejerla - MEG-2804
                popupHomeMenu.dismiss();
                alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingPurchase"));
                return;
                //"No Meeting is selected.  Please select a meeting to continue "
            } else {
                kony.print("This option will open the Product Returns Page");
                hboxHeaderWithCancelBtn.lblTitle.text = "";
                hboxHeaderWithCancelBtn.imgCancel.src = "back_button.png";
                hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strHeaderProductReturns") + " " + kony.i18n.getLocalizedString("strMeeting") + " " + glbCurrentMeetingValue; //Meeting 30-45 MIN 10:00 AM";
                frmProductReturns.show();
            }
            break;

        case "ReturnProd":
            if (glbMeetingNum == "" || IsNoMeetingSelected) {
                popupHomeMenu.dismiss();
                alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingPurchase"));
                return;
            } else {
                IsSimpleReturn = FlowForScreens.SimpleReturn;
                ClearTangibleProductsSegments();
                hboxHeaderWithCancelBtn.lblTitle.text = "";
                hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strHeaderProdcutReturn");
                frmDirectSaleProductList.scrollbox12443534679147550.containerHeight = 50;
                frmDirectSaleProductList.scrollbox12443534677872493.containerHeight = 80;
                frmDirectSaleProductList.lblProcessMembersubSubHeaderstudio4.text = kony.i18n.getLocalizedString("strSubHeaderReturn");//Modified by Studio Viz
                frmDirectSaleProductList.hboxSubHeader.isVisible = false;
                frmDirectSaleProductList.show();
            }
            break;

        case "preferredLoc":
            frmSavedLocations.show();
            break;

        case "tallyReport":
        	kony.print("1 kony.application.getCurrentForm().id " + kony.application.getCurrentForm().id);
  			kony.print("kony.application.getPreviousForm().id  " + kony.application.getPreviousForm().id );
        	prevForm = kony.application.getCurrentForm().id;
            kony.print("prevForm " +prevForm);
            navigateForm = false; 
			if(IsAWSLocationEnabled() || IsInfoSessionMeeting())
            {
               frmATWTallyReports.show();
            }else
            {
               frmTallyReports.show();
            }
        	
            break;

        case "help":
            if (checkIfNetworkIsAvailable()) {
                popupHomeMenu.dismiss();
                frmHelp.show();
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
            }

            break;

        case "logout":
            isSelMeetingOpenHours = false;
            logoutApplication();
            break;
        
		case "clear":
            initIngenico();
        	PairingHandlerObject.resetPairing();
            break;

    }

    popupHomeMenu.dismiss();
}

function eventOnClickSyncButton() {

    boMonitor.log("Force Sync - from PopUp Home Menu", "btnForceSync", "", FlowForMonitor.ForceSync, true);

    if (!checkIfNetworkIsAvailable()) {
        alertForMessages(kony.i18n.getLocalizedString("strTallyForceSyncMsg"));
    } else {
        if (glbIsUserLoggedIn) {
            callbackeventOnClickSyncButton();
        } else {
            frmLogin.show();
        }
    }

    function callbackeventOnClickSyncButton() {
//         showCheckedinUIData(true);
        isFromForceSync = true;
      
//         hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
        //frmHomeScreen.hbxTableTitle.isVisible = true; // MEG-7070
      
        //frmHomeScreen.hboxCheckedinTitle.isVisible = false; // MEG-7070 ///Added by Nikita To Solve MEG - 2178
        //displayProgressView();
        //Commented by Chirag Chauhan for Incremental Download
        //syncStartSession(); //Added By Praveen Kalal
        getLastSyncDateBeforesyncStartSession(); //Added by Chirag Chauhan for Incremental Download

        //boAuthentication.authenticateViaWSBeforeSync(); //Commented by Praveen kalal App MEG-2567 refresh authentication tokens instead of using new one per sync call			
    }
    popupHomeMenu.dismiss();
}

function eventonClickDoneImageHeader() {
    
    kony.print("selectedKeyValues----->>" + JSON.stringify(popupCurrentMeeting.segMeetingList.selectedItems));
    var CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems;
    kony.print("SubTypeKeyValues----->>>>" + JSON.stringify(CurrMeetingKeyValues));
   
  //** MEG 7180
  	var  selMeetingsIsAtWork = CurrMeetingKeyValues[0]["IsAtWork"];
  // **MEG 7319
 	var meetingTypeId = CurrMeetingKeyValues[0]["meetinglookUpID"];
   	
 
  	kony.print("1 kony.application.getCurrentForm().id " + kony.application.getCurrentForm().id);
  	kony.print("1 kony.application.getPreviousForm().id  " + kony.application.getPreviousForm().id );
   kony.print("isFormNavigationRequired(selMeetingsIsAtWork)  " + isFormNavigationRequired(selMeetingsIsAtWork) );
  	
  	var isInfoSession = CurrMeetingKeyValues[0]["IsInfoSession"];
    
 
  if(!selMeetingsIsAtWork)
    {
      selMeetingsIsAtWork = isInfoSession;
    }
  
  
  if(isFormNavigationRequired(selMeetingsIsAtWork))
      {
       	   navigateForm = true;
          if(IsAWSLocationEnabled() || IsInfoSessionMeeting())
            {									 
              var templblHdrMeetingDatePopup =   frmATWTallyReports.lblHdrMeetingDatePopup.text;
              kony.print("frmATWTallyReports templblHdrMeetingDatePopup " + templblHdrMeetingDatePopup);
              frmTallyReports.lblHdrMeetingDatePopup.text = templblHdrMeetingDatePopup;
              
              frmTallyReports.defaultAnimationEnabled = false;
			  frmTallyReports.inTransitionConfig = {"transitionEffect":"noEffect"};
              setAWSLocation(selMeetingsIsAtWork);
              //** MEG 7353
              //var isInfoSession = CurrMeetingKeyValues[0]["IsInfoSession"];
  	          setInfoSessionMeeting(isInfoSession);
              frmTallyReports.show();
            }else
              {
              var templblHdrMeetingDatePopup =   frmTallyReports.lblHdrMeetingDatePopup.text;
              kony.print("frmTallyReports templblHdrMeetingDatePopup " + templblHdrMeetingDatePopup);
              frmATWTallyReports.lblHdrMeetingDatePopup.text = templblHdrMeetingDatePopup;
              
                frmATWTallyReports.defaultAnimationEnabled = false;
				frmATWTallyReports.inTransitionConfig = {"transitionEffect":"noEffect"};
                setAWSLocation(selMeetingsIsAtWork);
                //** MEG 7353
                //var isInfoSession = CurrMeetingKeyValues[0]["IsInfoSession"];
  	  			setInfoSessionMeeting(isInfoSession);
                frmATWTallyReports.show();
              }
          
        }else
          {
           kony.print("Same Form");
           setInfoSessionMeeting(isInfoSession);
           setTallyDataAfterMeetinSelection();

      }
  	    
}

//** MEG 7180
function isFormNavigationRequired(selMeetingsIsAtWork)
{
  
  var tempIsAtWork =  false;//IsAWSLocationEnabled();
  if(IsAWSLocationEnabled() || IsInfoSessionMeeting())
    	 tempIsAtWork = true;
  kony.print("tempIsAtWork " +tempIsAtWork);
  kony.print("selMeetingsIsAtWork " +selMeetingsIsAtWork);
  	if (tempIsAtWork.toString() != selMeetingsIsAtWork.toString() && in_array(deviceLocale,Countries["US"]) && (kony.application.getCurrentForm().id == frmATWTallyReports.id || kony.application.getCurrentForm().id == frmTallyReports.id)) {
    	return true;
    }else
      {
        return false;
      }
}

//** MEG 7180
function setTallyDataAfterMeetinSelection()
{
	navigateForm = false;  
    kony.print("1 kony.application.getCurrentForm().id " + kony.application.getCurrentForm().id);
  	kony.print("1 kony.application.getPreviousForm().id  " + kony.application.getPreviousForm().id );
 	kony.print("setTallyDataAfterMeetinSelection selectedKeyValues----->>" + JSON.stringify(popupCurrentMeeting.segMeetingList.selectedItems));
    var CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems;
    kony.print("SubTypeKeyValues----->>>>" + JSON.stringify(CurrMeetingKeyValues));
  if (kony.application.getCurrentForm().id == frmTallyReports.id) {
       // var CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems;
        kony.print("SubTypeKeyValues----->>>>" + JSON.stringify(CurrMeetingKeyValues));
        onSelectMeetingForTallyReport(CurrMeetingKeyValues);
        return;
    }
  
  //** MEG 5827
   if (kony.application.getCurrentForm().id == frmATWTallyReports.id) {
       // var CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems;
        kony.print("SubTypeKeyValues----->>>>" + JSON.stringify(CurrMeetingKeyValues));
        onSelectMeetingForTallyReport(CurrMeetingKeyValues);
        return;
    }
  //** End
    var meetingstatus = CurrMeetingKeyValues[0]["meetingStatus"];

    if (meetingstatus == "Close") {
        alertForReOpenTalliedMeetingConfirmation();
    } else {
        setMeetingDataOnScreens(CurrMeetingKeyValues);
      	hideHomeScreenWeightHeader();
    }

    // Added By Praveen kalal For issue Weight loss does not change when meetings are switched
   /* if (kony.application.getCurrentForm().id == frmHomeScreen.id) {
        hboxMeetingSummery.vBoxSelectFilter.isVisible = false;
        hboxMeetingSummery.lblFilterTitle.isVisible = false;
        hboxMeetingSummery.vboxTotalWeightLoss.isVisible = false;
        hboxMeetingSummery.lineTWLoss.isVisible = false;
        hboxMeetingSummery.lineProduct.isVisible = false;
    }*/
    
    clearHomeScreenPaymentData();
    getHomeScreenPaymentData();
    // End By Praveen kalal For issue Weight loss does not change when meetings are switched
}

//**MEG 7361
function hideHomeScreenWeightHeader()
{
  if (kony.application.getCurrentForm().id == frmHomeScreen.id) {
        hboxMeetingSummery.vBoxSelectFilter.isVisible = false;
        hboxMeetingSummery.lblFilterTitle.isVisible = false;
        hboxMeetingSummery.vboxTotalWeightLoss.isVisible = false;
        hboxMeetingSummery.lineTWLoss.isVisible = false;
        hboxMeetingSummery.lineProduct.isVisible = false;
    }
}
function setMeetingDataOnScreens(selectedMeetingData) {
	//set AWS location MEG-5823 
  kony.print("setMeetingDataOnScreens selectedMeetingData " + JSON.stringify(selectedMeetingData));
  kony.print("setMeetingDataOnScreens isAtWork " + selectedMeetingData[0]["IsAtWork"]);
	var isAtWork = selectedMeetingData[0]["IsAtWork"];
  	setAWSLocation(isAtWork);	
  
  	//MEG 69 Allow to change Meeting Time for a particular Member - Change to Original on Home screen.
  	if (IsEnrollMember == FlowForScreens.Enroll || IsAddIndividual == FlowForScreens.AddIndividual || IsFromPM == FlowForScreens.ProcessMember || IsReEnrollScreen == FlowForScreens.ReEnroll) {
        //Header Template Enroll New Member Meeting Label assigned with the value selected
        hboxEnrollHdrMain.lblCurrentMeeting.text = selectedMeetingData[0]["meetingName"];
        glbTempCurrentMeetingValue = selectedMeetingData[0]["meetingName"];
        glbTempMeetingNum = selectedMeetingData[0]["meetingId"];
        glbTempMeetingStatus = selectedMeetingData[0]["meetingStatus"];

        popupCurrentMeeting.dismiss();

    } else {
        //Header Template Enroll New Member Meeting Label assigned with the value selected
        hboxEnrollHdrMain.lblCurrentMeeting.text = selectedMeetingData[0]["meetingName"];
        hboxHomeScreen.lblCurrMeetingInfo.text = selectedMeetingData[0]["meetingName"];
        hboxNameSection.lblCurrentMeetingName.text = selectedMeetingData[0]["meetingName"];
        hboxPhoneSection.lblCurrentMeetingPhone.text = selectedMeetingData[0]["meetingName"];
        hboxUserIdSection.lblCurrentMeetingUserId.text = selectedMeetingData[0]["meetingName"];
        hboxMemberIdSection.lblCurrentMeetingMemerId.text = selectedMeetingData[0]["meetingName"];
        hboxMeetingSummery.lblCurrentMeetingValueNew.text = selectedMeetingData[0]["meetingName"] + getLocalizedString("strLblScheduled");
        glbCurrentMeetingValue = selectedMeetingData[0]["meetingName"];
        glbMeetingNum = selectedMeetingData[0]["meetingId"];
        glbMeetingStatus = selectedMeetingData[0]["meetingStatus"];
        glbDayTimeCodeID = selectedMeetingData[0]["meetingDayTimeCode"];

        glbMeetingType = selectedMeetingData[0]["meetingType"];
        glbMeetingDayCodeID = selectedMeetingData[0]["dayCodeID"];
        glbMeetingDTCTime = selectedMeetingData[0]["meetingDTCTime"];
        
         glbBackOfficerRefID = selectedMeetingData[0]["backOfficerRefID"];

        glbIsTallyTimesheetChanged = checkValidString(selectedMeetingData[0]["isTimesheetModified"]) ? selectedMeetingData[0]["isTimesheetModified"] : "false";
        kony.print("selectedMeetingData[0]['meetingId']====>>>" + selectedMeetingData[0]["meetingId"]);
        gblMeetingSelected = selectedMeetingData[0]["meetingTime"]; //MeetingSelected[1];

        glbMeetingDate = selectedMeetingData[0]["meetingDate"];

        glbSelectedMeetingStartTime = gblMeetingSelected;
        kony.print(":::: glbSelectedMeetingStartTime Set:=== " + glbSelectedMeetingStartTime);
        meetingEndTimeMaxInMinutes = parseInt(getMinutesFromTime(glbSelectedMeetingStartTime)) + parseInt(meetingduration);
        kony.print(":::: meetingEndTimeMaxInMinutes Set:=== " + meetingEndTimeMaxInMinutes);
        glbSelectedMeetingEndTime = getTimeFromMinutes(meetingEndTimeMaxInMinutes);
        kony.print(":::: glbSelectedMeetingEndTime Set:=== " + glbSelectedMeetingEndTime);
        ///////IsNoMeetingSelected = false; //Need to uncomment this if user has to be allowed Add/Enroll after No Meeting and selecting meeting from this combo
        kony.print("glbMeetingNum in eventonClickDoneImageHeader====>>>" + glbMeetingNum);
        boMeetings.getMeetingDataByID(selectedMeetingData[0]["meetingId"]);

        boMeetings.getCurrentMeeting(); // Added by Praveen kalal MEG-4333 

        popupCurrentMeeting.dismiss();

        //open hours meeting check
        boMeetings.getMeetingTypeIdForOpenHours(glbMeetingType);

        if (!IsNoMeetingSelected) {
            kony.print("Calling function to get Pre Reg Member");
            evenOnPostShowHomeScreen();
        }
        IsNoMeetingSelected = false; //Need to uncomment this if user has to be allowed Add/Enroll after No Meeting and selecting meeting from this combo
    }

}

function alertForReOpenTalliedMeetingConfirmation() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strReOpenTalliedMeeting"), //"Are you sure you want to Re-Open a Tallied meeting?",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: kony.i18n.getLocalizedString("strConfirm"),
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), // "No",
        alertHandler: onReOpenTalliedMeetingConfirmationAlert
    };
    var psConfig = {};
    var ReOpenTalliedMeetingConfirmationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onReOpenTalliedMeetingConfirmationAlert(response) {
    if (response == true) {
      	hideHomeScreenWeightHeader(); //**MEG7361
        kony.print("selectedKeyValues----->>" + popupCurrentMeeting.segMeetingList.selectedItems);
        var CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems;
        kony.print("SubTypeKeyValues----->>>>" + CurrMeetingKeyValues);

        glbCurrentMeetingValue = CurrMeetingKeyValues[0]["meetingName"];
        glbMeetingNum = CurrMeetingKeyValues[0]["meetingId"];
        glbMeetingStatus = CurrMeetingKeyValues[0]["meetingStatus"];
        gblMeetingSelected = CurrMeetingKeyValues[0]["meetingTime"];
        glbMeetingDate = CurrMeetingKeyValues[0]["meetingDate"];
        var dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386
        com.kony.WeightWatchers.Tally.TallyTimesheet.remove(" where MeetingId='" + glbMeetingNum + "' and MeetingDate like '%" + dateQuery + "%'", function() {
            kony.print("Timesheet Record Deleted..");
        }, eventErrorCallBack, false);
        boMeetings.closeTallyMeetingInstance();
        kony.print("onReOpenTalliedMeetingConfirmationAlert glbMeetingNum: " + glbMeetingNum);

        setMeetingDataOnScreens(CurrMeetingKeyValues);


        //boTally.getCurrentAttandance(); 
    } else {
        popupCurrentMeeting.dismiss();
    }
}

function showMeetingInfo(meetingDesc) {
    meetingDesc = meetingDesc + " - " + hboxHomeScreen.lblCurrMeetingInfo.text + getLocalizedString("strLblScheduled");
    hboxMeetingSummery.lblCurrentMeetingValueNew.text = meetingDesc;
}


function ClearMemberDetailsForWeight() {
    frmViewMemberProfile.lblCurrentWeightData.text = "";
    frmViewMemberProfile.lblStartWeightData.text = "";
    frmViewMemberProfile.lblCurrentDPTData.text = "";
    frmViewMemberProfile.lblWPAData.text = "";
    frmViewMemberProfile.lbl5GoalData.text = "";
    frmViewMemberProfile.lbl10GoalData.text = "";
    //frmViewMemberProfile.lblRMissedWeeksData.text = "";
    frmViewMemberProfile.lblTotalChangeData.text = "";
    //frmViewMemberProfile.lblHealthyRangeData.text = "";
    frmViewMemberProfile.segMemberProfileDetails.removeAll();
    frmEditMemberProfile.segEditMemberProfileDetails.removeAll();
}
