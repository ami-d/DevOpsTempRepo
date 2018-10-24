//Event called on Check Out Click
var showBillingDate = false;
var isSenior = false;
var textSubType;
var textExpDate;
var isFromMissedWeek = false; //To check wheather member is from missedweek flow or not for tally calculation
var Validpass = ["m", "M", "w", "W", "c", "C", "q", "Q"];
var ValidFirstLettersInSubID = ["m", "M", "w", "W", "q", "Q", "c", "C"];

function onEndEditingForSubID() {
    var subID;
    if(IsPreActivation == FlowForScreens.PreActivation &&  in_array(deviceLocale,Countries["US"])){
    	subID = popupPreActivation.txtVoucherNumber.text;
    }else{ 
    	subID = glbFormName.txtSubscriptionID.text;
    } // added condition for MP validation from both end [preactivation & WeighScreen]
	kony.print("*******subID "+ subID);
    if (checkValidString(subID)) {
        var tmp = subID.slice(-6);
        if (deviceLocale == "fr_FR")
        {
            textExpDate = tmp.substring(2, 4) + "/" + tmp.substring(0, 2) + "/20" + tmp.substring(4, 6);
        } else if(kony.i18n.getLocalizedString("strDisplayDateFormat") == 'yyyy/mm/dd') //** MEG 6386 
        {
        	textExpDate =  "20" + tmp.substring(4, 6) + "/" + tmp.substring(0, 2) + "/" + tmp.substring(2, 4);
        }else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
        {
            textExpDate = tmp.substring(0, 2) + "/" + tmp.substring(2, 4) + "/20" + tmp.substring(4, 6);
        }
	kony.print("*******textExpDate "+ textExpDate);
        frmCheckout.lblExpDate.text = textExpDate;
        frmAddAndWeighMemberTransaction.lblExpDate.text = textExpDate;
    }

}

function toShowCheckOutForm() {
    //  frmCheckout.show();
}


function eventOnClickMemberSectionForFlow() {
    if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        frmEnrollReturningMember.show();
        frmEnrollReturningMember.imgWeight.src = "icn_weigh_selected.png";
        frmEnrollReturningMember.imgPayment.src = "icn_payment_selected.png";
        frmEnrollReturningMember.vboxPayment.onClick = toShowCheckOutForm;
    } else if (IsEnrollMember == FlowForScreens.Enroll) {
        frmEnrollNewMember.show();
        frmEnrollNewMember.imgWeight.src = "icn_weigh_selected.png";
        frmEnrollNewMember.imgPayment.src = "icn_payment_selected.png";
        frmEnrollNewMember.vboxPayment.onClick = toShowCheckOutForm;
    } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
        frmAddIndividulaMember.show();
        frmAddIndividulaMember.imgWeight.src = "icn_weigh_selected.png";
        frmAddIndividulaMember.imgPayment.src = "icn_payment_selected.png";
        frmAddIndividulaMember.vboxPayment.onClick = toShowCheckOutForm;

    }
}

function eventonClickDoneImageHeaderCheckOut() {
    glbOpenedSubscriptionPopup = true;
    //** MEG 7171 
  	var subTypeText1;
  	if(IsBatchAddMember == FlowForScreens.BatchAddMember){
      subTypeText1 =  frmBatchAddMember.lblSubTypeInfo.text;
      kony.print("::Here::1::"); 
    }else if(IsViewMember == FlowForScreens.ViewMember){
      subTypeText1 = frmEditMemberProfile.lblSubTypeInfo.text;
      kony.print("::Here::2::"); // Edit member flow
    }else{
      subTypeText1 = glbFormName.lblSubType.text;
      kony.print("::Here::3::");  // Either EnrollWeigh & processmember
    } // added both if condition for Batch Add flow & Edit member flow 
    kony.print("subTypeText1"+subTypeText1);
    kony.print("frmProcessMember.lblProcessMemberSubHeaderlbl2.text" + frmProcessMember.lblProcessMemberSubHeaderlbl2.text);
  	kony.print("kony.application.getCurrentForm().id " + kony.application.getCurrentForm().id);
    kony.print("selectedKeyValues----->>" + popupSubscriptionType.pickerSubType.selectedKeyValues); // 3-2-2, Pay as you go
    var SubTypeKeyValues = popupSubscriptionType.pickerSubType.selectedKeyValues;
    kony.print("SubTypeKeyValues----->>>>" + SubTypeKeyValues); // 3-2-2, Pay as you go
	kony.print("frmProcessMember.lblProcessMemberSubHeaderlbl2.text " + frmProcessMember.lblProcessMemberSubHeaderlbl2.text);
  	if((in_array(SubTypeKeyValues[0][0],['1-2-1']) || in_array(SubTypeKeyValues[0][0],['3-1-1']))&& subTypeText1  == "Series") //** MEG 7171 1-2-1,Monthly Pass,3-1-1,Pay as you go, block from edit profile for series member
      { 
        alertForMessages(kony.i18n.getLocalizedString("strEditPAYGSeriesAlert"));
      }
  	else if(in_array(SubTypeKeyValues[0][0],['12-1-1']) && subTypeText1  != "Series") //**  MEG-7281 
      { 
        alertForMessages(kony.i18n.getLocalizedString("strEditPAYGSeriesAlert"));
      }
  	else if(IsAWSLocationEnabled() && (in_array(SubTypeKeyValues[0][0],['12-1-2'])))
    {
      alert("This feature is not available");
		
	}else if(!IsAWSLocationEnabled() && kony.application.getCurrentForm().id == frmProcessMember.id && frmProcessMember.lblProcessMemberSubHeaderlbl2.text == "Series Member" && !in_array(SubTypeKeyValues[0][0],['7-2-2'] )) //** 7171 prepaid
      {
         alertForMessages(kony.i18n.getLocalizedString("strAlertChangeSubTypePrePaidForSeries"));
      }else{    
        glbSelectSubType = SubTypeKeyValues[0][0]; //Added by praveen kalal // 3-2-2
        subtype = glbSelectSubType; // 3-2-2
        if (SubTypeKeyValues[0][1] && (SubTypeKeyValues[0][1].indexOf("Monthly") != -1 || SubTypeKeyValues[0][1].indexOf("20 Week") != -1)) {
            kony.print("::INNN::");
            frmEditMemberProfile.imgEmail.isVisible = true;
            frmEditMemberProfile.imgSubscID.setVisibility(true);
            frmBatchAddMember.txtSubID.setEnabled(true);
            frmBatchAddMember.imgSubID.isVisible = true;
            frmBatchAddMember.imgExpDate.isVisible = true;
            frmBatchAddMember.vboxExpirationDate.setEnabled(true);
            frmEditMemberProfile.txtSubID.setEnabled(true);
            frmEditMemberProfile.vboxExpirationDate.setEnabled(true);
            glbFormName.imgsub.isVisible = true;
            frmEditMemberProfile.imgExpDate.setVisibility(true);
        } else {
            frmEditMemberProfile.imgEmail.isVisible = false;
            frmEditMemberProfile.imgSubscID.setVisibility(false);
        }


        //End by Praveen for Mandatory icon on email and subscription id.

        var subTypeText;
        if(IsBatchAddMember == FlowForScreens.BatchAddMember){
            subTypeText =  frmBatchAddMember.lblSubTypeInfo.text;
            kony.print("::Here::1::");  // MEG-5344  (batch add member)
        }else if(IsViewMember == FlowForScreens.ViewMember){
            subTypeText = frmEditMemberProfile.lblSubTypeInfo.text;
            kony.print("::Here::2::"); // Edit member flow
        }else{
            subTypeText = glbFormName.lblSubType.text;
            kony.print("::Here::3::");  // Either EnrollWeigh & processmember
        } // added both if condition for Batch Add flow & Edit member flow 
        kony.print("subTypeText"+subTypeText);
        if (subTypeText != SubTypeKeyValues[0][1]) {
            glbFormName.txtSubscriptionID.text = "";
            preActivationObj = {};  // clear obj when changes on subcription type ...
            clearPreActivationpopupText(); // clear entire popup text
            frmBatchAddMember.lblExpDateInfo.text = "";
            frmBatchAddMember.txtSubID.text = "";		// Add here for MEG-5361 .. clear the subscriptionID & Expiry Dates when changing subscriptionTypes
            //Check if change is detected - If old was Monthly and new is 17/PAYG .. Dont check Buy nee and Reedem
            var selectdTyp = SubTypeKeyValues[0][1];
            var selectdSubTyp = "";
            if (glbMemberSubscpBefore.indexOf("Monthly") != -1) {
                selectdSubTyp = "Monthly";
            } else if (glbMemberSubscpBefore.indexOf("Pay") != -1) {
                selectdSubTyp = "Pay";
            }
            if (selectdTyp.indexOf(selectdSubTyp) == -1) {
                kony.print("change detected");
                glbChangeSubscDetected = true;
            } else {
                kony.print("no change detected");
                glbChangeSubscDetected = false;
            }
            if (glbChangeSubscDetected) {
                frmEditMemberProfile.lblExpDateInfo.text = "";
                frmEditMemberProfile.txtSubID.text = "";
            }

            glbFormName.lblSubType.text = SubTypeKeyValues[0][1];
            kony.print("SELECTED KEYS --> glbSelectSubType == " + glbSelectSubType);

            //DEFAULT
            glbFormName.imgMonthlyPassImage.isVisible = false;
            frmAddAndWeighMemberTransaction.imgMonthlyPass.isVisible = false;
            glbFormName.txtSubscriptionID.setEnabled(false);
            glbFormName.btnScan.setVisibility(false);
            frmBatchAddMember.txtSubID.setEnabled(false);
            frmBatchAddMember.imgSubID.isVisible = false;
            frmBatchAddMember.imgExpDate.isVisible = false;
            frmBatchAddMember.vboxExpirationDate.setEnabled(false);
            frmEditMemberProfile.txtSubID.setEnabled(false);
            frmEditMemberProfile.vboxExpirationDate.setEnabled(false);
            frmEditMemberProfile.imgExpDate.setVisibility(false);
            frmEditMemberProfile.imgSubscID.setVisibility(false);
            glbFormName.imgsub.isVisible = false;
            if (glbFormName.lblSubType.text != kony.i18n.getLocalizedString("strPrepaid")) {
                textSubType = SubTypeKeyValues[0][1];
                glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
            }
            frmCheckout.lblExpDate.text = "";
            frmEditMemberProfile.lblExpDateInfo.text = "";
            frmAddAndWeighMemberTransaction.lblExpDate.text = "";
            glbFormName.imgsub.setVisibility(false);
            isPayAsYouGo = false;
            glbFormName.txtEmailID.setEnabled(true);
            frmBatchAddMember.imgEmail.isVisible = false;
            glbFormName.imgAsterisk.isVisible = false;
            glbFormName.txtSubscriptionID.maxTextLength = 15;
            frmBatchAddMember.txtSubID.maxTextLength = 15;
            frmEditMemberProfile.txtSubID.maxTextLength = 15;
            var subscriptionSelected;
            if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
                subscriptionSelected = frmBatchAddMember.lblSubTypeInfo.text;
            }
            if (IsViewMember == FlowForScreens.ViewMember) {
                subscriptionSelected = frmEditMemberProfile.lblSubTypeInfo.text;
            } else {
                subscriptionSelected = glbFormName.lblSubType.text;
            }
            switch (SubTypeKeyValues[0][1]) {
                case kony.i18n.getLocalizedString("strPayg"):
                    kony.print("case Pay as you go");
                    frmEditMemberProfile.txtSubID.text = "";
                    glbFormName.imgMonthlyPassImage.isVisible = true;
                    glbFormName.imgMonthlyPassImage.src = "icn_payment_header.png";
                    frmAddAndWeighMemberTransaction.imgMonthlyPass.isVisible = true;
                    frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_payment_header.png";
                    textSubType = getLocalizedString("strPAYGAbbr");
                    glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
                    frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
                    isPayAsYouGo = true;
                    frmCheckout.lblExpDate.text = "";
                    frmEditMemberProfile.lblExpDateInfo.text = "";
                    frmAddAndWeighMemberTransaction.lblExpDate.text = "";
                    glbFormName.imgAsterisk.isVisible = false;
                    break;
                case kony.i18n.getLocalizedString("strAWSEnroll"):
                case kony.i18n.getLocalizedString("strAWSContinue"):
                case kony.i18n.getLocalizedString("strAWSRedeem"):
                case kony.i18n.getLocalizedString("strAWSBridge")://** MEG 7153
                case kony.i18n.getLocalizedString("strAWSMaintenance"): //** MEG 7153
                	frmEditMemberProfile.txtSubID.text = "";
                    glbFormName.imgMonthlyPassImage.isVisible = true;
                    glbFormName.imgMonthlyPassImage.src = "";
                    frmAddAndWeighMemberTransaction.imgMonthlyPass.isVisible = true;
                    frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "";
                    textSubType = getLocalizedString("strSeriesAbbr");
                    glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
                    frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
                    //isPayAsYouGo = true;
                    frmCheckout.lblExpDate.text = "";
                    frmEditMemberProfile.lblExpDateInfo.text = "";
                    frmAddAndWeighMemberTransaction.lblExpDate.text = "";
                    glbFormName.imgAsterisk.isVisible = false;
                    break;
                case kony.i18n.getLocalizedString("strMPRedeem"):
                case kony.i18n.getLocalizedString("strMPBuyNew"):
                case kony.i18n.getLocalizedString("str3MPBuy"):
                case kony.i18n.getLocalizedString("str6MPBuy"):
                case kony.i18n.getLocalizedString("str12MPBuy"):
                case "6 Months Pass - Redeem":
                case "12 Months Pass - Redeem":
                case kony.i18n.getLocalizedString("strMonthlyPass"):
                case kony.i18n.getLocalizedString("str3MonthPass"):
                case kony.i18n.getLocalizedString("str6MonthPass"):
                case kony.i18n.getLocalizedString("strLTC6"): //** MEG 6434
                case kony.i18n.getLocalizedString("strLTC12"): //** MEG 6434
                case kony.i18n.getLocalizedString("strLTC3"): //** MEG-6957
                    isPayAsYouGo = false;
                    if(in_array(deviceLocale,Countries["US"]) && (in_array(SubTypeKeyValues[0][1],[kony.i18n.getLocalizedString("strMPBuyNew"),kony.i18n.getLocalizedString("str3MPBuy"),kony.i18n.getLocalizedString("str6MPBuy"),kony.i18n.getLocalizedString("strLTC6"),kony.i18n.getLocalizedString("strLTC12"),kony.i18n.getLocalizedString("strLTC3")]))){ //** MEG 6434
                        glbFormName.txtSubscriptionID.setEnabled(false);
                        glbFormName.imgsub.isVisible = false;
                        glbFormName.btnScan.setVisibility(false);
                        kony.print("::IN IF condition::");
                    }else{
                        glbFormName.txtSubscriptionID.setEnabled(true);
                        glbFormName.imgsub.isVisible = true;
                        glbFormName.btnScan.setVisibility(true);
                        kony.print("IN else condition::");
                    } // condition added to remove MP validation on weigh screen [MEG-5385]
                    frmBatchAddMember.txtSubID.setEnabled(true);
                    frmBatchAddMember.imgSubID.isVisible = true;
                    frmBatchAddMember.imgExpDate.isVisible = true;
                    frmBatchAddMember.vboxExpirationDate.setEnabled(true);
                    frmEditMemberProfile.txtSubID.setEnabled(true);
                    frmEditMemberProfile.vboxExpirationDate.setEnabled(true);
                //    glbFormName.imgsub.isVisible = true;
                    frmEditMemberProfile.imgExpDate.setVisibility(true);
                    frmEditMemberProfile.imgSubscID.setVisibility(true);
               //     glbFormName.txtSubscriptionID.setEnabled(true);
               //     glbFormName.btnScan.setVisibility(true); // Added by Dileep Chejerla
                    glbFormName.txtEmailID.setEnabled(true);
                    glbFormName.imgAsterisk.isVisible = true;
                    frmEditMemberProfile.imgEmail.isVisible = true;
               //     glbFormName.imgsub.setVisibility(true);

                    //IMAGES
                    glbFormName.imgMonthlyPassImage.isVisible = true;
                    glbFormName.imgMonthlyPassImage.src = "icn_monthly_pass_header.png";
                    frmAddAndWeighMemberTransaction.imgMonthlyPass.isVisible = true;
                    frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_monthly_pass_header.png";
                    textSubType = getLocalizedString("strMPAbbr");
                    glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
                    frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
                    frmBatchAddMember.imgEmail.isVisible = true;
                    break;
            case kony.i18n.getLocalizedString("str20WkBuyNew"):
            case kony.i18n.getLocalizedString("str20WkRedeem"):
            case kony.i18n.getLocalizedString("str20WkPass"):
                frmBatchAddMember.txtSubID.setEnabled(true);
                frmBatchAddMember.imgSubID.isVisible = true;
                frmBatchAddMember.imgExpDate.isVisible = true;
                frmBatchAddMember.vboxExpirationDate.setEnabled(true);
                frmBatchAddMember.imgEmail.isVisible = true;
                glbFormName.txtSubscriptionID.maxTextLength = 16;
                frmBatchAddMember.txtSubID.maxTextLength = 16;
                frmEditMemberProfile.txtSubID.maxTextLength = 16;
                glbFormName.txtSubscriptionID.setEnabled(true);
                frmEditMemberProfile.imgExpDate.setVisibility(true);
                frmEditMemberProfile.txtSubID.setEnabled(true);
                frmEditMemberProfile.vboxExpirationDate.setEnabled(true);
                frmEditMemberProfile.imgEmail.isVisible = true;
                frmEditMemberProfile.imgSubscID.setVisibility(true);
                glbFormName.btnScan.setVisibility(true);
                glbFormName.imgsub.setVisibility(true);
                //glbFormName.imgAsterisk.setVisibility(true);
                glbFormName.imgAsterisk.isVisible = false; // MEGCA-290
                glbFormName.imgMonthlyPassImage.isVisible = true;
                glbFormName.imgMonthlyPassImage.src = "icn_20_week_pass_header.png";
                //frmEnrollNewMemberPayment.imgMonthlyPass.src = "icn_17_week_pass_header.png";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.isVisible = true;
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_20_week_pass_header.png";
                textSubType = getLocalizedString("str20WEEKSAbbr");
                glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
                //frmEnrollNewMemberPayment.lblProcessMemberSubHeaderlbl2studio1.text = textSubType;//Modified by Studio Viz
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
                break;
            case kony.i18n.getLocalizedString("strFMP"):
                glbFormName.imgMonthlyPassImage.src = "icn_monthly_pass_header.png";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_monthly_pass_header.png";
                glbFormName.imgMonthlyPassImage.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgMonthlyPass.setVisibility(true);
                textSubType = getLocalizedString("strMPAbbr");
                glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
                break;
            case kony.i18n.getLocalizedString("strPrepaid"):
                //** MEG 7171
                if(!IsAWSLocationEnabled() && kony.application.getCurrentForm().id == frmProcessMember.id && frmProcessMember.lblProcessMemberSubHeaderlbl2.text == "Series Member")
               		kony.print("Do Nothing");
                else
                {
                  glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
                  frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "";//Modified by Studio Viz
                }
                break;
            }

            if (IsViewMember == FlowForScreens.ViewMember) {
                glbFormName.txtEmailID.setEnabled(true);
                frmEditMemberProfile.lblSubTypeInfo.text = SubTypeKeyValues[0][1];
            }
            if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
                frmBatchAddMember.lblSubTypeInfo.text = SubTypeKeyValues[0][1];
            }

        } else {
            glbChangeSubscDetected = false;
        }
    
    
        //Ami add MEG-2355 start
        if (IsAddIndividual == FlowForScreens.AddIndividual || IsEnrollMember == FlowForScreens.Enroll || IsReEnrollScreen == FlowForScreens.ReEnroll) {
            onChangeOfLableSubType();
        }
        //Ami add MEG-2355 end
        popupSubscriptionType.dismiss();
    
        if(kony.application.getCurrentForm().id != frmBatchAddMember.id){
            setDollerPriceValue(); // Added By PK for MEG-4797
        }
	}
}

function eventonClickCheckOut() {

	if (linkObj == undefined || linkObj == null || checkValidString(linkObj.EnterpriseID) == false || linkObj.EnterpriseID == "0") {
		clearLinkInfoForOnlineMember();
	}
	
    if (in_array(deviceLocale,Countries["CA"])) {
        if (checkValidString(glbFormName.txtSubscriptionID.text)) {
            glbFormName.txtSubscriptionID.text = glbFormName.txtSubscriptionID.text.replace("c", "q");
        }
    }
    if (IsFromPM == FlowForScreens.ProcessMember) {
        frmAddAndWeighMemberTransaction.imgEnrollNormal.isVisible = false;
        frmAddAndWeighMemberTransaction.vboxFooterMemberSection.setEnabled(false);

        var monitorData = {
            "SubscriptionType": glbFormName.lblSubType.text,
            "SubscriptionId": glbFormName.txtSubscriptionID.text,
            "EmailId": glbFormName.txtEmailID.text
        };

        boMonitor.log("Member Process:- Select Subscription type", "btnCheckOut", monitorData, FlowForMonitor.ProcessMember);
    } else {
        frmAddAndWeighMemberTransaction.imgEnrollNormal.isVisible = true;
        frmAddAndWeighMemberTransaction.vboxFooterMemberSection.setEnabled(true);
    } /*This is the common function that is called for Process Member flow*/

    function processFlowForMember(res) {
        
        var WeighDateFormatted = formattedDate(gblDOBPM);
        kony.print("Formatted gblDOBPM in IsFromPM: " + WeighDateFormatted);
        kony.print("::processFlowForMember::res=" + res);
        if (res) {
            getSkuValue(Flow, MemberType, glbSelectSubType, WeighDateFormatted, 0, 0, false, false);
        } else {
            getSkuValue(Flow, MemberType, glbSelectSubType, WeighDateFormatted, weightDiff, missedWeek, false, false);
        }


    }


    var valid = new validationcls();
    var res;
    if (glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID) {
        //Ami add -MEG-2759 start
        frmAddAndWeighMemberTransaction.vbox198407320743.isVisible = true;
        frmAddAndWeighMemberTransaction.vbox12443534672611876.isVisible = true;
        frmAddAndWeighMemberTransaction.lblExpDate.isVisible = true;
        frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.isVisible = true;//Modified by Studio Viz
        frmAddAndWeighMemberTransaction.scrollbox124435346767178.isVisible = true;

        //Ami add - MEG02759 end
     /*   if (glbSelectSubType != "") {
            res = valid.checkForRequiredFields(glbFormName.lblSubType.text, "Subscription type").checkForMonthlyPass(glbSelectSubType, glbFormName.txtEmailID.text).isValid();
        } else {
            res = valid.checkForRequiredFields(glbFormName.lblSubType.text, "Subscription type").checkForMonthlyPass(glbSelectSubType, glbFormName.txtEmailID.text).isValid();
        } */
        // code optimization of above ..
      	if(!checkValidString(glbFormName.lblSubType.text)){
          	alertForMessages(kony.i18n.getLocalizedString('strValidSubType'));
        }else{
          	res = valid.checkForRequiredFields(glbFormName.lblSubType.text, "Subscription type").checkForMonthlyPass(glbSelectSubType, glbFormName.txtEmailID.text).isValid();
        }
        kony.print("Res For Email--->>" + res);
        if (glbSelectMemType == MemberTypeEnum["AtWork"] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) isPayAsYouGo = false;
        try {
            if (res) //||res==undefined)
            {
                kony.print("Res For Email in func--->>" + res);
                kony.print("Demo main in check out " + demoEmail);
				if(glbFormName.txtEmailID.text!=""){
                   demoEmail = glbFormName.txtEmailID.text;  //  Ankit [MEGCA-321]
                }
                //Ami add -MEG-3325
                gblEmail = glbFormName.txtEmailID.text;
                //	            var missedWeek = 0;
                if (!isPayAsYouGo && glbFormName.lblSubType.text != kony.i18n.getLocalizedString("strPayg")) {
                    var msgtype = "";
                    var resdpt = true;
                    
                    //commented by Ami , Suggested by praveen
                    // missedWeek = 0;
					kony.print("glbFormName.lblSubType.text==>>"+glbFormName.lblSubType.text);
                    if (in_array(glbFormName.lblSubType.text,arrSubtype)) {
                        msgtype = "MP";
                        if(agevalue <= 16){
                        	resdpt = false;
                        }
                    } else if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str20WkBuyNew") || glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str20WkRedeem")) {
                        msgtype = "20WP";
                    }

/*else if(glbFormName.lblSubType.text == "17 Week Pass-Buy New" || frmCheckout.lblSubType.text== "17 Week Pass-Redeem"){
                        msgtype = "SW";
                    }*/
                    var resSubID = false;
                    if((in_array(deviceLocale, Countries["US"])) && (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strMPBuyNew") || glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str3MPBuy") || glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str6MPBuy"))){
                    	resSubID = true;
                    }else{
                    	resSubID = valid.validSubscriptiodIdLength(glbFormName.txtSubscriptionID.text, msgtype).isValid();
                    }  
                    
                    if (resSubID && resdpt) {
                        var weightDiff = parseFloat(goalWeightSub) - parseFloat(frmProcessMember.txtAreaWeightProcess.text);
                        weightDiff = Math.abs(weightDiff);
                        if (isNaN(weightDiff)) weightDiff = 0;

                        //var missedWeek = (isNaN(userMissedWeekPass))?0:userMissedWeekPass;

                        Flow = (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) ? "Attend" : "Enroll"; ///Need to check this
                        kony.print("Flow value===>>>" + Flow);
                        kony.print("Res For IsValidMonthlyPass--->>" + res);
                        ///Member Type Requied to be passed dynamic here........
                        if (IsReEnrollScreen == FlowForScreens.ReEnroll) //|| IsPreRegister == FlowForScreens.PreRegistered)
                        {
                            MemberType = "Value";
                            var WeighDateFormatted = formattedDate(termMemberInfo.DateOfBirth);
                            getSkuValue(Flow, MemberType, glbSelectSubType, WeighDateFormatted, weightDiff, missedWeek, false, false,termMemberInfo.RegStatus);
                        }
                        if (IsFromPM == FlowForScreens.ProcessMember) {
                            if (glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) //ATWORK
                            {
                                
                                var WeighDateFormatted = formattedDate(gblDOBPM);
                                MemberType = "AtWork"; //Temporary
                                getSkuValue(Flow, MemberType, glbSelectSubType, WeighDateFormatted, weightDiff, missedWeek, false, false);

                            } else {
                                //MEG-3919
                                /*Check if member has goal weight achieved this month - if yes, then no fees for that month*/
                                if (MemberType.toLowerCase() == "lifetime") {
                                    boProcessMember.getCurrentMonthGoalReachedForMember(glbMemberId, processFlowForMember);
                                } else {
                                    processFlowForMember();
                                }
                            }
                        }
                        if (IsEnrollMember == FlowForScreens.Enroll) {
                            MemberType = "Value";
                            kony.print("IsEnrollMember in CheckOut--->>" + IsEnrollMember);
                            kony.print("Selected keys Subscriptions in IsEnrollMember------>>>" + glbSelectSubType);
                            kony.print("frmEnrollNewMember.lblDOBInfo.text IsEnrollMember------>>>" + frmEnrollNewMember.lblDOBInfo.text);
                            getSkuValue(Flow, MemberType, glbSelectSubType, frmEnrollNewMember.lblDOBInfo.text, weightDiff, missedWeek, false, false);
                            kony.print("Selected keys Subscriptions------>>>" + glbSelectSubType);
                            kony.print("Date------>>>>>" + frmEnrollNewMember.lblDOBInfo.text);
                        }
                        if (IsAddIndividual == FlowForScreens.AddIndividual) {
                            MemberType = "Value";
                            kony.print("MemberType is ::::: " + MemberType);
                            kony.print("IsAddIndividual in CheckOut--->>" + IsAddIndividual);
                            kony.print("Selected keys Subscriptions in IsAddIndividual------>>>" + popupSubscriptionType.pickerSubType.selectedKeys[0]);
                            kony.print("frmAddIndividulaMember.lblDOBInfo.text IsAddIndividual------>>>" + frmAddIndividulaMember.lblDOBInfo.text);
                            getSkuValue(Flow, MemberType, glbSelectSubType, frmAddIndividulaMember.lblDOBInfo.text, weightDiff, missedWeek, false, false);
                        }

                    } else {
                        if (resdpt == false) {
                            alertForMessages(kony.i18n.getLocalizedString("strmsgValidateDPT"));
                        }
                    }
                } else {
                    kony.print("missedWeek Data===" + missedWeek);
                    var weightDiff = parseFloat(goalWeightSub) - parseFloat(frmProcessMember.txtAreaWeightProcess.text);
                    if (isNaN(weightDiff) || weightDiff >= 0) {
                        weightDiff = 0;
                    } else {
                        weightDiff = Math.abs(weightDiff);
                    }
                    missedWeek = (missedWeek > 0) ? missedWeek : 0;
                    Flow = (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) ? "Attend" : "Enroll"; ///Need to check this
                    kony.print("Flow value===>>>" + Flow);
                    kony.print("Res For IsValidMonthlyPass--->>" + res);
                    ///Member Type Requied to be passed dynamic here........
                    if (IsReEnrollScreen == FlowForScreens.ReEnroll) //|| IsPreRegister == FlowForScreens.PreRegistered)
                    {
                        MemberType = "Value";
                        kony.print("IsReEnrollScreen in CheckOut--->>" + IsReEnrollScreen);
                        kony.print("Selected keys Subscriptions in IsReEnrollScreen------>>>" + popupSubscriptionType.pickerSubType.selectedKeys[0]);
                        kony.print("termMemberInfo.DateOfBirth IsReEnrollScreen------>>>" + termMemberInfo.DateOfBirth);
                        
                        var WeighDateFormatted = formattedDate(termMemberInfo.DateOfBirth);
                        kony.print("Formatted termMemberInfo.DateOfBirth in IsReEnrollScreen: " + WeighDateFormatted);
                        getSkuValue(Flow, MemberType, glbSelectSubType, WeighDateFormatted, weightDiff, missedWeek, false, false);
                    }
                    if (IsFromPM == FlowForScreens.ProcessMember) {

                        if (glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) //ATWORK
                        {
                            
                            var WeighDateFormatted = formattedDate(gblDOBPM);
                            MemberType = "AtWork"; //Temporary
                            getSkuValue(Flow, MemberType, glbSelectSubType, WeighDateFormatted, weightDiff, missedWeek, false, false);

                        } else {
                            // added by praveen kalal to calculate missedweek based on lastweighin date
                            kony.print("MissedWeek based on   date === " + missedWeek);
                            // Ended by praveen kalal to calculate missedweek based on lastweighin date
                            kony.print("IsFromPM in CheckOut--->>" + IsFromPM);
                            kony.print("Selected keys Subscriptions in IsFromPM------>>>" + glbSelectSubType);
                            kony.print("gblDOBPM in IsFromPM------>>>" + gblDOBPM);
                            kony.print("MemberType is ::::: " + MemberType);
                            //MEG-3919
                            /*Check if member has goal weight achieved this month - if yes, then no fees for that month*/
                            if (MemberType.toLowerCase() == "lifetime") {
                                boProcessMember.getCurrentMonthGoalReachedForMember(glbMemberId, processFlowForMember);
                            } else {
                                processFlowForMember();
                            }
                        }
                    }
                    if (IsEnrollMember == FlowForScreens.Enroll) {
                        MemberType = "Value";
                        kony.print("IsEnrollMember in CheckOut--->>" + IsEnrollMember);
                        kony.print("Selected keys Subscriptions in IsEnrollMember------>>>" + popupSubscriptionType.pickerSubType.selectedKeys[0]);
                        kony.print("frmEnrollNewMember.lblDOBInfo.text IsEnrollMember------>>>" + frmEnrollNewMember.lblDOBInfo.text);
                        getSkuValue(Flow, MemberType, glbSelectSubType, frmEnrollNewMember.lblDOBInfo.text, weightDiff, missedWeek, false, false);
                        kony.print("Selected keys Subscriptions------>>>" + popupSubscriptionType.pickerSubType.selectedKeys[0]);
                        kony.print("Date------>>>>>" + frmEnrollNewMember.lblDOBInfo.text);
                    }
                    if (IsAddIndividual == FlowForScreens.AddIndividual) {
                        kony.print("::DJP::777 glbMembershipType=" + glbMembershipType);
                        if (glbSelectMemType == MemberTypeEnum["AtWork"] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) {
                            MemberType = "AtWork";
                            getSkuValue(Flow, MemberType, glbSelectSubType, frmAddIndividulaMember.lblDOBInfo.text, weightDiff, missedWeek, false, false);

                        } else {
                            if (frmAddIndividulaMember.lblMemberShipInfo.text == getLocalizedString("strLifetime")) {
                                kony.print("Value goal---->" + parseFloat(frmAddIndividulaMember.txtGoalWeight.text) + "=======weight" + parseFloat(frmEnrollWeighMember.txtWeight.text))
                                var weightDiff = parseFloat(frmAddIndividulaMember.txtGoalWeight.text) - parseFloat(frmEnrollWeighMember.txtWeight.text);
                                if (isNaN(weightDiff) || weightDiff >= 0) {
                                    weightDiff = 0;
                                } else {
                                    weightDiff = Math.abs(weightDiff);
                                }

                            }
                            glbSelectSubType = (glbSelectSubType == '3-1-1') ? '3-2-2' : glbSelectSubType; //Added by praveen kalal
                            kony.print("After MissedWeek difference====" + missedWeek);

                            kony.print("MemberType is ::::: " + MemberType);
                            kony.print("IsAddIndividual in CheckOut--->>" + IsAddIndividual);
                            kony.print("Selected keys Subscriptions in IsAddIndividual------>>>" + popupSubscriptionType.pickerSubType.selectedKeys[0]);
                            kony.print("frmAddIndividulaMember.lblDOBInfo.text IsAddIndividual------>>>" + frmAddIndividulaMember.lblDOBInfo.text);
                            getSkuValue(Flow, MemberType, glbSelectSubType, frmAddIndividulaMember.lblDOBInfo.text, weightDiff, missedWeek, false, false);
                        }
                    }
                }
            }
        } catch (e) {
            GlobalException(e);
        }
    } else {
        frmAddAndWeighMemberTransaction.vbox198407320743.isVisible = false;
        frmAddAndWeighMemberTransaction.vbox12443534672611876.isVisible = false;
        frmAddAndWeighMemberTransaction.lblExpDate.isVisible = false;
        frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.isVisible = false;//Modified by Studio Viz
        frmAddAndWeighMemberTransaction.scrollbox124435346767178.isVisible = false;
        displayCheckOutForm(true, "", "", "");
    }
}

function eventOnPreShowSetHeaderLabel() {
    try {
        //frmCheckout.lblSubType.text = ""; // added by praveen kalal
        if (IsEnrollMember == FlowForScreens.Enroll) {
            frmCheckout.lblProcessMembersubHeader1studio8.text = (frmEnrollNewMember.txtFirstName.text).trim() + " " + (frmEnrollNewMember.txtLastName.text).trim();//Modified by Studio Viz
            frmCheckout.lblProcessMembersubHeader1studio8.text = toTitleCase(frmCheckout.lblProcessMembersubHeader1studio8.text);//Modified by Studio Viz
            frmEnrollWeighMember.hboxGoalWeight.isVisible = false;
     	    hboxEnrollFooter.isVisible = true;
     	    hboxTopEnrollFooter.isVisible = true;
    	    hboxAddFooter.isVisible = false;
    	    hboxTopAddFooter.isVisible=false;
        }
        if (IsAddIndividual == FlowForScreens.AddIndividual) {
            frmCheckout.lblProcessMembersubHeader1studio8.text = (frmAddIndividulaMember.txtFirstName.text).trim() + " " + (frmAddIndividulaMember.txtLastName.text).trim();//Modified by Studio Viz
            frmCheckout.lblProcessMembersubHeader1studio8.text = toTitleCase(frmCheckout.lblProcessMembersubHeader1studio8.text);//Modified by Studio Viz
            frmEnrollWeighMember.hboxGoalWeight.isVisible = true;
      		hboxEnrollFooter.isVisible = false;
      		hboxTopEnrollFooter.isVisible = false;
       	    hboxAddFooter.isVisible = true;
       	    hboxTopAddFooter.isVisible=true;
        }
        if (IsFromPM == FlowForScreens.ProcessMember) {
            frmCheckout.lblProcessMembersubHeader1studio8.text = (frmProcessMember.lblProcessMembersubHeader1.text).trim(); //= selectedData["lblMPSFirstName"] +"  "+ selectedData["lblMPSLastName"];//Modified by Studio Viz
            frmCheckout.lblProcessMembersubHeader1studio8.text = toTitleCase(frmCheckout.lblProcessMembersubHeader1studio8.text);//Modified by Studio Viz
            frmCheckout.imgSeparator1.isVisible = true;
            glbFormName.imgMonthlyPassImage.isVisible = true;
            glbFormName.lblProcessMemberSubHeaderlbl2.isVisible = true;

            if (isSubIdSearched && gblBarcodeScannedData != "") {
                kony.print("inside the if case..");
                if (kony.application.getPreviousForm().id != frmAddAndWeighMemberTransaction.id) {
                    if (in_array(gblBarcodeScannedData.charAt(0), Validpass)) {
                        glbFormName.txtSubscriptionID.text = generateSubscriptionId(gblBarcodeScannedData, gblExpirationDate);
                    }
                }
            }
        }
        if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
            frmCheckout.lblProcessMembersubHeader1studio8.text = (termMemberInfo.FirstName).trim() + " " + (termMemberInfo.LastName).trim();//Modified by Studio Viz
            frmCheckout.lblProcessMembersubHeader1studio8.text = toTitleCase(frmCheckout.lblProcessMembersubHeader1studio8.text);//Modified by Studio Viz
        	hboxEnrollFooter.isVisible = true;
        	hboxTopEnrollFooter.isVisible = true;
        	hboxTopAddFooter.isVisible=false;
    	    hboxAddFooter.isVisible = false;
        }
        showStatistics();  // Added for MEG-4797 [Ankit] to remove flickr on screen
    } catch (e) {
        GlobalException(e);
        // todo: handle exception
    }
}

//On Post Show Prepopulate PAYG subscription plan - Improvement


function eventOnPostShowCheckoutForm() {
    //If already changed subscription one time then dont consider this and PROCESS member flow should not be affected by this.
    kony.print("IsWebsiteMember---" + IsWebsiteMember + "-----IsReEnrollScreen---" + IsReEnrollScreen);
    if ((glbCouponCode != undefined && glbCouponCode != null && glbCouponCode.length > 0) && IsWebsiteMember == FlowForScreens.Website) {

        kony.print("glbCouponCode------" + glbCouponCode + "-------gblExpirationDate----" + gblExpirationDate);

        if (glbCouponCode.length < 9) {
            glbCouponCode = leftpadZerosForMonthlyPassId(glbCouponCode);
        }

        glbFormName.txtSubscriptionID.text = generateSubscriptionId(glbCouponCode, gblExpirationDate);
        glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strMPRedeem");
        glbFormName.txtEmailID.setEnabled(true);
        glbFormName.txtSubscriptionID.setEnabled(true);
        glbFormName.btnScan.setVisibility(true);
        glbFormName.imgsub.setVisibility(true);
        glbFormName.imgAsterisk.isVisible = true;
        
        
        //MEG 5093 25/2/2016
        frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_monthly_pass_header.png";
        frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strMPAbbr");//Modified by Studio Viz
        glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strMPAbbr");
		glbFormName.imgMonthlyPassImage.setVisibility(true);
		glbFormName.imgMonthlyPassImage.src = "icn_monthly_pass_header.png";
        /*Commented For MEG 5093 25/2/2016
        frmAddAndWeighMemberTransaction.imgMonthlyPass.setVisibility(false);
        glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
		glbFormName.imgMonthlyPassImage.setVisibility(false);
		frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "";*///Modified by Studio Viz
        glbSelectSubType = "1-2-1";

    } else if (!glbOpenedSubscriptionPopup && IsFromPM != FlowForScreens.ProcessMember) {
        kony.print("::::00 glbMembershipType" + glbMembershipType);
        kony.print("::::00 glbSelectMemType" + glbSelectMemType);
        glbFormName.txtSubscriptionID.text = "";
       // glbFormName.txtEmailID.text = "";
        if (glbSelectMemType == MemberTypeEnum["AtWork"] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) {
            kony.print("::::eventOnPostShowCheckoutForm at work");
            glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strPrepaid");
            isPayAsYouGo = false;
            glbFormName.txtEmailID.setEnabled(true);
            glbFormName.txtSubscriptionID.setEnabled(false);
            glbFormName.imgAsterisk.isVisible = false;
            glbFormName.imgsub.setVisibility(false);
            glbFormName.btnScan.setVisibility(false);
            glbSelectSubType = "6-2-7";

            glbFormName.imgMonthlyPassImage.setVisibility(false);
            frmAddAndWeighMemberTransaction.imgMonthlyPass.setVisibility(false);
            glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
            frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "";//Modified by Studio Viz

            //1-1-3
        } else
        if (glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID) {
            kony.print("::::eventOnPostShowCheckoutForm else");
            glbFormName.txtWeight.setEnabled(true);
            glbFormName.txtSubscriptionID.setEnabled(false); // added by Ankit...
			glbFormName.btnScan.setVisibility(false);    
            glbFormName.imgMonthlyPassImage.setVisibility(true);
            frmAddAndWeighMemberTransaction.imgMonthlyPass.setVisibility(true);
            frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_payment_header.png";
            textSubType = getLocalizedString("strPAYGAbbr");
            glbFormName.imgsub.isVisible = false;
            glbFormName.imgAsterisk.isVisible = false;
          	if(IsAWSLocationEnabled() && (IsEnrollMember == FlowForScreens.Enroll || IsReEnrollScreen == FlowForScreens.ReEnroll || IsPreRegister == FlowForScreens.PreRegistered)){
             	glbSelectSubType = "";
              	glbFormName.lblFeesPayble.text = "";
              	glbFormName.lblSubType.text = "";
              	glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
              	glbFormName.imgMonthlyPassImage.src = "";
            }else{
              	glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strPayg");
              	glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
            	frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
              	glbFormName.imgMonthlyPassImage.src = "icn_payment_header.png";
            	isPayAsYouGo = true;
            }
          	
        } else {
            glbFormName.imgsub.isVisible = false;
            glbFormName.lblSubType.text = "";
            glbFormName.imgMonthlyPassImage.setVisibility(false);
            frmAddAndWeighMemberTransaction.imgMonthlyPass.setVisibility(false);
            glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
            frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "";//Modified by Studio Viz
        }
        //This try is due to - when popup is not initialized and we set then it will throw error
        try {
            if (glbSelectMemType == MemberTypeEnum["AtWork"] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) popupSubscriptionType.pickerSubType.selectedKeys = ["6-2-1"];
            else popupSubscriptionType.pickerSubType.selectedKeys = [glbSelectSubType];
        } catch (e) {
            GlobalException(e);
        }
        frmBatchAddMember.txtSubID.setEnabled(false);
        frmBatchAddMember.imgSubID.isVisible = false;
        frmBatchAddMember.imgExpDate.isVisible = false;
        frmBatchAddMember.vboxExpirationDate.setEnabled(false);
        frmEditMemberProfile.txtSubID.setEnabled(false);
        frmEditMemberProfile.vboxExpirationDate.setEnabled(false);


        frmCheckout.lblExpDate.text = "";
        frmAddAndWeighMemberTransaction.lblExpDate.text = "";
    } else if (!glbOpenedSubscriptionPopup && IsFromPM == FlowForScreens.ProcessMember && (glbSelectMemType == MemberTypeEnum["AtWork"] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase())) {
        //For At Work Location Process Member Dont populate membership type
        glbFormName.lblSubType.text = "";
        glbFormName.imgMonthlyPassImage.setVisibility(false);
        frmAddAndWeighMemberTransaction.imgMonthlyPass.setVisibility(false);
        glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
        frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "";//Modified by Studio Viz
        kony.print("::DJP::11 glbMembershipType" + glbMembershipType);
        if (glbSelectMemType == MemberTypeEnum["AtWork"] || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) {
            glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strMPRedeem");
            glbFormName.txtEmailID.setEnabled(true);
            glbFormName.txtSubscriptionID.setEnabled(true);
            glbFormName.btnScan.setVisibility(true);
            glbFormName.imgsub.setVisibility(true);
            glbFormName.imgAsterisk.isVisible = true;
            glbFormName.imgMonthlyPassImage.setVisibility(false);
            frmAddAndWeighMemberTransaction.imgMonthlyPass.setVisibility(false);
            glbFormName.lblProcessMemberSubHeaderlbl2.text = "";
            frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "";//Modified by Studio Viz
            glbSelectSubType = "6-2-1";
            kony.print("::::Setting PostShow glbSelectSubType = 6-2-1");
            //1-1-3
        }
    }
    setDollerPriceValue(); // added for setting on post show()
}

function onChangeOfLableSubType() {
    var key = glbFormName.lblSubType.text;
    var arr = [kony.i18n.getLocalizedString("strMPBuyNew"), kony.i18n.getLocalizedString("str3MPBuy"), kony.i18n.getLocalizedString("str6MPBuy"),kony.i18n.getLocalizedString("str12MPBuy"), kony.i18n.getLocalizedString("strMPRedeem"), kony.i18n.getLocalizedString("str20WkBuyNew"), kony.i18n.getLocalizedString("str20WkRedeem")];
    if (in_array(key, arr)) {
        glbFormName.txtEmailID.text = demoEmail;
    } else {
       // glbFormName.txtEmailID.text = ""; //commented for MEGCA-349
    }

}

function eventOnPostShowPreFillEmail() {
    kony.print("Demo Emiail is : " + demoEmail + " IsEnrollMember " + IsEnrollMember);
    if (IsEnrollMember == FlowForScreens.Enroll) {
        //if(frmEnrollNewMember.txtEmailID.text != "" || frmEnrollNewMember.txtEmailID.text != undefined || frmEnrollNewMember.txtEmailID.text != null)
        if ((demoEmail != "" || demoEmail != undefined || demoEmail != null)) {
            glbFormName.txtEmailID.text = demoEmail;
            //frmCheckout.txtEmailID.text=frmEnrollNewMember.txtEmailID.text;        
        }
       // glbFormName.lblSubType.text = "Pay as you go";
    }
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
        //if(frmAddIndividulaMember.txtEmailID.text != "" || frmAddIndividulaMember.txtEmailID.text != undefined || frmAddIndividulaMember.txtEmailID.text != null)
        if ((demoEmail != "" || demoEmail != undefined || demoEmail != null)) {
            glbFormName.txtEmailID.text = demoEmail;
            //frmCheckout.txtEmailID.text=frmAddIndividulaMember.txtEmailID.text;
        }
      //  glbFormName.lblSubType.text = "Pay as you go";
    }
    if (IsFromPM == FlowForScreens.ProcessMember) {
        //If glbemail - populate else populate demo email
        checkValidString(gblEmail) ? glbFormName.txtEmailID.text = gblEmail : checkValidString(gblEmail) ? glbFormName.txtEmailID.text = demoEmail : 0;
        kony.print("gblEmail in checkout pre fill email===>>" + gblEmail);
    }
    if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        if ((demoEmail != "" || demoEmail != undefined || demoEmail != null)) {
            glbFormName.txtEmailID.text = demoEmail;
            //frmCheckout.txtEmailID.text= frmEnrollReturningMember.lblEmailInfo.text;
        }
    }
}

function eventonFootervboxWeighSectionCheckout() {
    kony.print("IsFromPM===>>>" + IsFromPM);
    if (IsFromPM != FlowForScreens.ProcessMember) {
        if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
            frmEnrollWeighMember.show();
           // frmEnrollWeighMember.imgPayment.src = "icn_payment_selected.png";
        } else if (IsEnrollMember == FlowForScreens.Enroll) {
            frmEnrollWeighMember.show();
          //  frmEnrollWeighMember.imgPayment.src = "icn_payment_selected.png";
        } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
            frmEnrollWeighMember.show();
           // frmEnrollWeighMember.imgPayment.src = "icn_payment_selected.png";

        }
    } else {
        frmProcessMember.show();
        frmProcessMember.imgPayment.src = "icn_payment_selected.png";
    }
}

function eventonClickhboxMemberSection() {
    var context = {
        "widget": glbFormName.hboxSubscriptionTypeSection,
        "anchor": "top",
        "sizetoanchorwidth": false
    };
    popupSubscriptionType.setContext(context);

    kony.print("::::glbMembershipType=" + glbMembershipType + " MemberValueEnum[2]=" + MemberValueEnum[2]);

    kony.print("::glbLocationTypeId---::" + glbLocationTypeId);

    //if(glbSelectMemType == MemberTypeEnum["AtWork"]  || glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()){ // Commented by  Praveen kalal for MEG-3426

    if(IsAWSLocationEnabled()){
      	if (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) {
        	popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(10);  
        }
      	else{
	        popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(9);
        }
    	//popupSubscriptionType.pickerSubType.selectedKeys = [glbSelectSubType];
    }
    else if (glbLocationTypeId == "7") {

        if (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) {
            // 8: It will pickup the keys combination in subscription down which we have designed for Add and Process flow of atwork location
            popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(8);
        } else {
            // 7: It will pickup the keys combination in subscription down which we have designed for Enroll,Re-enroll flow of atwork location
            popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(7);
        }

        popupSubscriptionType.pickerSubType.selectedKeys = [glbSelectSubType];

    } else if (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) {
        kony.print("IsFromPM this is in popup filling function===:" + IsFromPM);
        if (isFromFMP) {
            popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(4);
        } else {
            popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(2);
        }
        popupSubscriptionType.pickerSubType.selectedKeys = [glbSelectSubType];
    } else {
        var context = {
            "widget": glbFormName.hboxSubscriptionTypeSection,
            "anchor": "top",
            "sizetoanchorwidth": false
        };
        popupSubscriptionType.setContext(context);

        popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(1);

        popupSubscriptionType.pickerSubType.selectedKeys = [glbSelectSubType];
    }
    popupSubscriptionType.show();

}


function eventonClickvboxCancelImageHeader() {
    popupSubscriptionType.dismiss();
}

// Function to retrieve SKU value based on Member type and subscription type

function getSkuValue(flow, membertype, selectKey, birthdate, weightDiff, missedWeekCnt, isPrepaid, isOverride, memberRegStatus) {
    kony.print(flow + "=== " + membertype + "=== " + selectKey + "=== " + birthdate + "=== " + missedWeekCnt + "=== " + weightDiff + "===" + isPrepaid + "==" + isOverride + "===" + memberRegStatus);

    try {

        if (membertype.toUpperCase() == "PAID") {
            membertype = "Value";
        }
		glbLTCInfo = {};
        var sku = "";
        var whrCondition = "";
        var valid = new validationcls();
        var res = valid.checkForRequiredFields(membertype, "Membertype").checkForRequiredFields(selectKey, "selectKey").checkForRequiredFields(flow, "flow").validateDate(birthdate).isValid();
        kony.print("response valid==" + res);
        if (res) {
            isFromMissedWeek = false;
            var splData = selectKey.split("-");

            var agetype = splData[2];
            var age = getAgeFromDob(birthdate);
            isSenior = (age >= 65) ? true : false;
            if ((splData[0] == "1" || splData[0] == "8") && Flow == "Enroll") { //8 = 3 Month Pass
                if (glbFormName.lblSubType.text != kony.i18n.getLocalizedString("strMPRedeem")) {
                    //showBillingDate = true; //Removed -> No Billing Date to be showed
                }
            }
            if(IsAWSLocationEnabled() && !in_array(selectKey,['3-2-2','3-1-1'])){
            	getSkuQueryForAWS(splData,membertype,false,20);
            }
            else if (Subcriptions[splData[0]] == "FMP") {
                isFromFMP = true;
                if (isSenior) {
                    var str = (flow.toUpperCase() == 'ENROLL' || in_array(membertype.toUpperCase(),lifeTimeTypes)) ? "and membertype like 'Value' and Transact='" + Flow + "' and AgeGreaterThan <>64" : "and membertype like '" + membertype + "' and Transact='" + Flow + "' and AgeGreaterThan <= " + age + " and AgeGreaterThan > 0";
                    whrCondition = " where Action='Redeem-Forgot' " + str;
                } else {
                    var str = (flow.toUpperCase() == 'ENROLL') ? "and membertype like 'Value' and Transact='" + Flow + "'" : "and membertype like '" + membertype + "' and Transact='" + Flow + "'";
                    whrCondition = " where Action='Redeem-Forgot' " + str + " and AgeGreaterThan <>64";
                }

                kony.print("whrCondition===" + whrCondition);

                boEnrollMember.getSKUValueFromDb(whrCondition, membertype, Subcriptions[splData[0]], isOverride, Actions[splData[1]]);
            }
            else if(in_array(Subcriptions[splData[0]],['LTC-3','LTC-6','LTC-12','MP-3','MP-6'])){
            	whrCondition = "where Action='" + Actions[splData[1]] + "' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "'";
                kony.print(Subcriptions[splData[0]]+"--::whrCondition===="+whrCondition);
               	if(in_array(deviceLocale, Countries["US"])){
               		kony.print("::here in if::");
               		boEnrollMember.getSKUValueFromDb(whrCondition,membertype,Subcriptions[splData[0]],isOverride,Actions[splData[1]]);
               	}else{
               		boEnrollMember.checkForValidMP(whrCondition, membertype, Subcriptions[splData[0]], isOverride, flow, Actions[splData[1]], boEnrollMember.getSKUValueFromDb);
               	}
            }
            else if (Subcriptions[splData[0]] == "PREPAID") {
                whrCondition = " where Subscription like 'PREPAID' and membertype like 'LifeTime' and Action='" + Actions[splData[1]] + "' and Transact='Attend'";
                boEnrollMember.getSKUValueFromDb(whrCondition, membertype, Subcriptions[splData[0]], isOverride, Actions[splData[1]]);
            } else if (Subcriptions[splData[0]] == "AtWork") {
                if (splData[1] == '3') isFromFMP = true;
                whrCondition = " where Subscription like '" + Subcriptions[splData[2]] + "' and membertype like 'AtWork' and Action='" + Actions[splData[1]] + "'";
                boEnrollMember.getSKUValueFromDb(whrCondition, membertype, Subcriptions[splData[0]], isOverride, Actions[splData[1]]);
            } else if (Subcriptions[splData[0]] == "WP") {
                kony.print("20Week");
                //whrCondition = " where Action='"+Actions[splData[1]]+"'";
                whrCondition = "where Action='" + Actions[splData[1]] + "' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "' and membertype like '" + membertype + "'";
                if(membertype.toUpperCase() == 'LIFETIME') { // MEGCA-288
	                if(isSenior){
						whrCondition += " and AgeGreaterThan=64";	
					} else {
						whrCondition += " and AgeGreaterThan <>64";
					}
                }
                kony.print("20Week whrCondition= " + whrCondition);
                boEnrollMember.checkForValidMP(whrCondition, membertype, Subcriptions[splData[0]], isOverride, flow, Actions[splData[1]], boEnrollMember.getSKUValueFromDb);
                //boEnrollMember.getSKUValueFromDb(whrCondition,membertype,Subcriptions[splData[0]],isOverride,Actions[splData[1]]);
            } else {
                kony.print("::DJP::here 000");
                if (glbProgDurationForProcess == 3 && splData[1] == 2) splData[0] = "8"; // 3 Month Redeem
				
				if (glbProgDurationForProcess == 6 && splData[1] == 2) splData[0] = "10"; // 6 Month Redeem Added for MEG-5038 [PK]

				if (in_array(deviceLocale,Countries["CA"]) && (Flow == "Enroll") && (memberRegStatus == 'Online'))
            		whrCondition = "where Action='" + Actions[splData[1]] + "' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "' and membertype like '" + membertype + "' and RegistrationStatus = 'ONLINE'";
            	else 
                	whrCondition = "where Action='" + Actions[splData[1]] + "' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "' and membertype like '" + membertype + "' and RegistrationStatus <> 'ONLINE'";
                if (Flow == "Enroll" && age >= 65 && Subcriptions[splData[0]] == "PAYG") {
                    whrCondition += " and AgeGreaterThan > 0 and AgeGreaterThan <= " + age;
                } else if (Flow == "Enroll") {
                    whrCondition += " and AgeGreaterThan <> 64";
                }

                if (Flow == "Attend" && membertype.toUpperCase() == "LIFETIME" && Subcriptions[splData[0]] == "PAYG") {
                    kony.print("missedWeekCnt ====" + missedWeekCnt + "===weightDiff====" + weightDiff + "=====isSenior====" + isSenior);
                    
                    boProcessMember.checkCurrentAndPrevMonthWeighInMissedWeeksForLTMember(function(isWeighInCalendarMonth){
                    	if ((!isWeighInCalendarMonth || weightDiff > 2) && isSenior) {
	                        whrCondition = "where Action='Buy' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "' and membertype like '" + membertype + "'and AgeGreaterThan <= " + age;
	                        //whrCondition += " and AgeGreaterThan <= "+age;
	                    }else if (weightDiff <= 2 && isWeighInCalendarMonth) {
		                    whrCondition += " and MissedWeekMin = '0' and MissedWeekMax = '0' and weightDiff = '0'";
		                }
		                else{
		                    whrCondition += " and MissedWeekMin > 0 and WeightDiff >0 and isPrepaid = 'false'";
		                }
                    	
                    })
                }
                else if(Flow == "Attend" && Subcriptions[splData[0]] == "PAYG" && (membertype.toUpperCase() == "LIFETIMEDISCOUNT" || membertype.toUpperCase() == "LIFETIMEDISCOUNTNEW")){
                	boProcessMember.checkCurrentAndPrevMonthWeighInMissedWeeksForLTMember(function(isWeighInCalendarMonth){
	                	if (weightDiff <= 2 && isWeighInCalendarMonth) {
		                    whrCondition += " and MissedWeekMin = '0' and MissedWeekMax = '0' and weightDiff = '0'";
		                }
		                else{
		                    whrCondition += " and MissedWeekMin > 0 and WeightDiff >0 and isPrepaid = 'false'";
		                }
	                });

                }
                else if (Flow == "Attend" && membertype.toUpperCase() == "VALUE" && Subcriptions[splData[0]] == "PAYG") {

                    if (missedWeekCnt > 0) {
						var missedSku = "";
						var courtesyTitle = (isSenior == true) ? "srwkcourtesy" : "wkcourtesy";
						
						if (in_array(deviceLocale,Countries["CA"])) {
						     missedSku = (missedWeekCnt > 1) ? MissedWeekSku["CACOURTESY"]: MissedWeekSku["CA1WEEK"];
					    }else {
					        // MEG-4913 - Added new condition that if member is senior then it will have always 480 SKU for any missedweek greter than 0 - Sunil
							if(isSenior == true)
							 	missedSku = MissedWeekSku[courtesyTitle];
							 else
					         	missedSku = ((newSku = parseInt('701') + parseInt(missedWeekCnt)) > 703) ? MissedWeekSku[courtesyTitle] : newSku;
					    }
                        //var missedSku = ((newSku = parseInt('701') + parseInt(missedWeekCnt)) > 703) ? MissedWeekSku["wkcourtesy"] : newSku;
                        kony.print("missedSku val===>" + missedSku);
                        var missedSkuPrice = getPriceValueFromSKU(missedSku);
                        kony.print("missedSkuPrice val===>" + missedSkuPrice);
                        //var regSkuPrice = (isSenior)?getPriceValueFromSKU(MissedWeekSku["senior"]):getPriceValueFromSKU(MissedWeekSku["nonsenior"]);
                        //var regSkuPrice = getPriceValueFromSKU(MissedWeekSku["wkcourtesy"]);
						var regSkuPrice = 0;
                        if (in_array(deviceLocale,Countries["CA"])) {
						    regSkuPrice = getPriceValueFromSKU(MissedWeekSku["CACOURTESY"]);
					    }else {
					        regSkuPrice = getPriceValueFromSKU(MissedWeekSku[courtesyTitle]);
					    }
                        kony.print("regSkuPrice val===>" + regSkuPrice);
                        //var regSku = (isSenior)?MissedWeekSku["senior"]:MissedWeekSku["nonsenior"];
                        //var regSku = MissedWeekSku["wkcourtesy"];
						kony.print("====>>>#"+in_array(deviceLocale,Countries["CA"]));
						var regSku = ""
                        if (in_array(deviceLocale,Countries["CA"])) {
						    regSku = MissedWeekSku["CACOURTESY"];
					    }else {
					        regSku = MissedWeekSku[courtesyTitle];
					    }
                        kony.print("regSku val===>" + regSku);
                        isFromMissedWeek = true;
                        kony.print("subscription Compare missedSkuPrice >= parseInt(regSkuPrice)===" + missedSkuPrice + "==" + regSkuPrice);
                        if (missedSkuPrice >= parseInt(regSkuPrice)) {

                            kony.print("inside===");
                            if (isSenior) {
                                whrCondition = "where isPrepaid = '" + isPrepaid + "' and SKU ='" + regSku + "' and PriceOverride='false'";
                            } else {
                                whrCondition = "where isPrepaid = '" + isPrepaid + "' and SKU ='" + regSku + "' and PriceOverride='false'";
                            }
                        } else {
                            kony.print("outside===");
                            whrCondition += " and isPrepaid = '" + isPrepaid + "' and SKU ='" + missedSku + "'";
                        }
                    } else if (isSenior) {
                        whrCondition = "where Action='Buy' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "' and MissedWeekMin <= 0 and membertype like '" + membertype + "'and AgeGreaterThan <= " + age;
                    } else if (isPrepaid) {
                        if (isOverride) {
                            whrCondition += " and PriceOverride='true' and isPrepaid = 'true' limit 0,1";
                        } else {
                            whrCondition += " and PriceOverride='false' and isPrepaid = 'true'";
                        }

                    } else {
                        whrCondition += " and MissedWeekMin <= 0";
                    }
                } else if (Flow == "Attend" && membertype.toUpperCase() == "VALUE" && Subcriptions[splData[0]] == "MP") {
                    if (isPrepaid) {
                        whrCondition += " and isPrepaid = 'true'";
                    } else {
                        whrCondition += " and MissedWeekMin <= 0";
                    }
                } else if (Flow == "Attend" && membertype.toUpperCase() == "LIFETIME" && (Subcriptions[splData[0]] == "MP" || Subcriptions[splData[0]] == "17WEEK")) {
                    whrCondition += " and AgeGreaterThan > 0";
                }
				
                kony.print("where glbProgDurationForProcess==>>>" + glbProgDurationForProcess);
                kony.print("where condi==>>>" + whrCondition);
                
                if(in_array(deviceLocale,Countries["US"]) && (Subcriptions[splData[0]] == "MP" || Subcriptions[splData[0]] == "MP-3" || Subcriptions[splData[0]] == "MP-6") && (Actions[splData[1]] == "Buy")){
                	 kony.print("::no validation required");
                	 boEnrollMember.getSKUValueFromDb(whrCondition, membertype, Subcriptions[splData[0]], isOverride, Actions[splData[1]]);
                }else {
	                if (Subcriptions[splData[0]] == "MP" || Subcriptions[splData[0]] == "MP-3" || Subcriptions[splData[0]] == "MP-6") {
	                    boEnrollMember.checkForValidMP(whrCondition, membertype, Subcriptions[splData[0]], isOverride, flow, Actions[splData[1]], boEnrollMember.getSKUValueFromDb);
	                } else {
	                    boEnrollMember.getSKUValueFromDb(whrCondition, membertype, Subcriptions[splData[0]], isOverride, Actions[splData[1]]);
	                }
                } // added if condition for removeMP validation [MEG-5385]

            } // 
        }


    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }

}

function displayCheckOutForm(status, responseObj, totalprice, taxVal) {
    try {
        if (status) {

            kony.print("responseObj==========" + JSON.stringify(responseObj));
            //Commenting POc code here

			var lblExtraHeightForSixMonth = 0; // MEGCA-329
            if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str6MPBuy")){
                lblExtraHeightForSixMonth = 6;
            }
            if (glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID || frmAddAndWeighMemberTransaction.scrollbox124435346767178.isVisible == false) {
                if (showBillingDate) {
                    kony.print("flow in IF==========" + taxVal);
                    frmAddAndWeighMemberTransaction.lblBillingDate.setVisibility(true);
                    if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str3MPBuy")) {
                        frmAddAndWeighMemberTransaction.lblBillingDateData.text = getDateAfterXMonths(3);
                    }else if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str6MPBuy")) {
                        frmAddAndWeighMemberTransaction.lblBillingDateData.text = getDateAfterXMonths(6);
                    } else {
                        frmAddAndWeighMemberTransaction.lblBillingDateData.text = getDateAfterXMonths(1);
                    }
                    kony.print("IS glbScrollbxDefaultHeight"+glbScrollbxDefaultHeight);
                    kony.print("IS frmAddAndWeighMemberTransaction.segSKUDataPOC.data.length"+frmAddAndWeighMemberTransaction.segSKUDataPOC.data.length);
                    
                    if (frmAddAndWeighMemberTransaction.segSKUDataPOC.data != undefined && frmAddAndWeighMemberTransaction.segSKUDataPOC.data != null) {
                        if (frmAddAndWeighMemberTransaction.segSKUDataPOC.data.length < 2) {
                            //frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = 17;
                            frmAddAndWeighMemberTransaction.scrollbox12443534679147550.containerHeight = (41 + 17);
                        } else if (frmAddAndWeighMemberTransaction.segSKUDataPOC.data.length == 2) {
                            //frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = 33;
                            frmAddAndWeighMemberTransaction.scrollbox12443534679147550.containerHeight = 40;
                        }
                        var segSkuLength = frmAddAndWeighMemberTransaction.segSKUDataPOC.data.length;
                        frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight =  (segSkuLength * glbScrollbxDefaultHeight) + lblExtraHeightForSixMonth; //MEGCA-329
                    } else {
                        //frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = 17;
						frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = glbScrollbxDefaultHeight;
                        frmAddAndWeighMemberTransaction.scrollbox12443534679147550.containerHeight = (41 + 17);
                    }
                } else {
                    kony.print("Outside the==========" + taxVal);
                    frmAddAndWeighMemberTransaction.lblBillingDate.setVisibility(false);
                    frmAddAndWeighMemberTransaction.lblBillingDateData.text = "";
                    kony.print("IS lblExtraHeightForSixMonth "+lblExtraHeightForSixMonth);
                    if (responseObj != undefined && responseObj != null) {
                        if (responseObj.length < 2) {
                            //frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = 17;
                            frmAddAndWeighMemberTransaction.scrollbox12443534679147550.containerHeight = (41 + 17);
                        } else if (responseObj.length == 2) {
                            //frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = 33;
                            frmAddAndWeighMemberTransaction.scrollbox12443534679147550.containerHeight = 41;
                        }
                        frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = ((responseObj.length) * glbScrollbxDefaultHeight) + lblExtraHeightForSixMonth; //MEGCA-329
                    } else {
                        //frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = 17;
						frmAddAndWeighMemberTransaction.scrollbox124435346767178.containerHeight = glbScrollbxDefaultHeight;
                        frmAddAndWeighMemberTransaction.scrollbox12443534679147550.containerHeight = (41 + 17);
                    }
                }



                boEnrollMember.generateDeviceLevelTransactID();
            } else {
                frmAddAndWeighMemberTransaction.scrollbox12443534679147550.containerHeight = 77;
            }
            //ClearTangibleProductsSegments();
            frmAddAndWeighMemberTransaction.show();
            frmAddAndWeighMemberTransaction.segSKUDataPOC.removeAll();

            glbNonTangibleDataToBeSet = responseObj;
        }
    } catch (e) {
        GlobalException(e);
    }

}



//MEG-88 to validate the monthly pass for a monthly pass member.


function IsValidMonthlyPass(SubscriptionId) {
    //var SubscriptionId = "1234022414"; //last 6 digits mm-dd-yy
    kony.print("Dileep --> SubscriptionId.length == " + SubscriptionId.length);
    if (SubscriptionId.length >= 6) {
        var numberPattern = /^[0-9]{1,10}$/;
        var namePattern = /^[a-zA-Z ]*$/;
        var alpha = SubscriptionId.charAt(0);
        var number = SubscriptionId.slice(1, -6);
        kony.print("Dileep --> alpha == " + alpha);
        kony.print("Dileep --> number == " + number);
        if (namePattern.test(alpha) && numberPattern.test(number)) {
            kony.print("Dileep --> inside namePattern.test(alpha) && numberPattern.test(number)");
            kony.print("Dileep --> glbFormName.lblSubType.text == " + glbFormName.lblSubType.text);
            if (in_array(glbFormName.lblSubType.text,arrSubtype)) {
                if (in_array(alpha, Validpass)) {
                    kony.print("Dileep --> inside in_array(alpha,Validpass) IF block");
                } else {
                    kony.print("Dileep --> inside in_array(alpha,Validpass) ELSE block");
                    return false;
                }
            } else if (glbFormName.lblSubType.text == "17 Week Pass-Buy New" || glbFormName.lblSubType.text == "17 Week Pass-Redeem") {
                if (alpha == "Q" || alpha == "q") {
                    kony.print("Dileep --> 2 IF block");
                } else {
                    kony.print("Dileep --> 2 ELSE block");
                    return false;
                }
            } else if (frmBatchAddMember.lblSubTypeInfo.text == kony.i18n.getLocalizedString("strMonthlyPass") || frmBatchAddMember.lblSubTypeInfo.text == kony.i18n.getLocalizedString("str3MonthPass") || frmBatchAddMember.lblSubTypeInfo.text == kony.i18n.getLocalizedString("str6MonthPass")) {
                if (in_array(alpha, Validpass)) {
                    kony.print("Dileep --> 3 IF block");
                } else {
                    kony.print("Dileep --> 3 ELSE block");
                    return false;
                }
            } else if (frmBatchAddMember.lblSubTypeInfo.text == kony.i18n.getLocalizedString("str20WkPass") || frmEditMemberProfile.lblSubTypeInfo.text == kony.i18n.getLocalizedString("str20WkPass")) {
                if (alpha == "Q" || alpha == "q" || alpha == "C" || alpha == "c") {
                    kony.print("Dileep --> 4 IF block");
                } else {
                    kony.print("Dileep --> 4 ELSE block");
                    return false;
                }
            } else if (in_array(frmEditMemberProfile.lblSubTypeInfo.text,arrSubtype)) {
                if (in_array(alpha, Validpass)) {
                    kony.print("Dileep --> 5 IF block");
                } else {
                    kony.print("Dileep --> 5 ELSE block");
                    return false;
                }
            } else if (frmEditMemberProfile.lblSubTypeInfo.text == "17 Week Pass-Buy New" || frmEditMemberProfile.lblSubTypeInfo.text == "17 Week Pass-Redeem") {
                if (alpha == "Q" || alpha == "q") {
                    kony.print("Dileep --> 6 IF block");
                } else {
                    kony.print("Dileep --> 6 ELSE block");
                    return false;
                }
            }

            var tmp = SubscriptionId.slice(-6);
            if (!isNaN(tmp)) {
                if (!checkForCorrectDate(tmp)) {
                    return false;
                }
                var strdate = tmp.substring(0, 2) + "/" + tmp.substring(2, 4) + "/" + tmp.substring(4, 6);
                //alert(strdate);
                kony.print("one===" + strdate);
                var expirydate = new Date(strdate);
                kony.print("Two===" + expirydate);
                if (expirydate == "Invalid Date") {
                    return false;
                }
                expirydate = changeDateFormatTo(expirydate);
                kony.print("thrree expirydate===" + expirydate);
                var currentdate = new Date();
                currentdate = changeDateFormatTo(currentdate);
                kony.print("thrree currentdate===" + currentdate);
                //alert(currentdate);
                if (Date.parse(expirydate) >= Date.parse(currentdate)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function changeDateFormatTo(value) {
    if (value) {
        Number.prototype.padLeft = function(base, chr) {
            var len = (String(base || 10).length - String(this).length) + 1;
            return len > 0 ? new Array(len).join(chr || '0') + this : this;
        }
        var d = new Date(value),
            dformat = [d.getFullYear().padLeft(), (d.getMonth() + 1).padLeft(), d.getDate()].join('/');
        return dformat;
    }
}

function checkForCorrectDate(tmpdate) {
    var m = parseInt(tmpdate.substring(0, 2), 10);
    var d = parseInt(tmpdate.substring(2, 4), 10);
    var y = 20 + tmpdate.substring(4, 6);
    var vdate = new Date(y, m - 1, d);
    kony.print("Valid date val===" + vdate);
    if (vdate.getFullYear() == y && vdate.getMonth() + 1 == m && vdate.getDate() == d) {
        return true;
    } else {
        return false;
    }

}

// Added by Praveen Kalal to get unitprice value from sku 


function getPriceValueFromSKU(sku) {
    try {
        if (checkValidString(sku)) {
            for (var i in productSKUData) {
                if (productSKUData[i].sku == sku) {
                    return productSKUData[i].UnitPrice;
                    break;
                }
            }
        }
        return 0;
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }

}

function resetVarOnFrmCheckOutPostShow() {
    isFromFMP = false;
  
 if (IsEnrollMember != FlowForScreens.Enroll && IsAddIndividual != FlowForScreens.AddIndividual) { //MEG-6985 - Fixed
   boEnrollMember.getGoalWeightOfMember(glbMemberId);
 }
    if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPayg")) {
        kony.print("inside resetVarOnFrmCheckOutPostShow");
        glbSelectSubType = (IsAddIndividual == FlowForScreens.AddIndividual || IsFromPM == FlowForScreens.ProcessMember) ? "3-2-2" : "3-1-1";
        glbFormName.txtSubscriptionID.text = "";
        glbFormName.txtSubscriptionID.setEnabled(false);
        glbFormName.imgsub.isVisible = false;
        glbFormName.btnScan.setVisibility(false);  // added by ankit [MEGCA-357]
        glbFormName.imgMonthlyPassImage.isVisible = true;
        glbFormName.imgMonthlyPassImage.src = "icn_payment_header.png";
        frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_payment_header.png";
        textSubType = getLocalizedString("strPAYGAbbr");
        glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
        frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
        isPayAsYouGo = true;
        frmCheckout.lblExpDate.text = "";
        frmAddAndWeighMemberTransaction.lblExpDate.text = "";
        glbFormName.imgAsterisk.isVisible = false;
        //frmCheckout.btnScan.setVisibility(false); // Added by Dileep Chejerla
        kony.print("Flow====" + Flow + "====IsAddIndividual===" + IsAddIndividual + "======IsFromPM====" + IsFromPM + "====subscription type===" + glbSelectSubType);
    } else if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strPrepaid") || glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strFMP")) {
        frmCheckout.lblExpDate.text = "";
        frmAddAndWeighMemberTransaction.lblExpDate.text = "";
        glbFormName.imgMonthlyPassImage.isVisible = false;
        glbFormName.txtSubscriptionID.setEnabled(false);
        glbFormName.btnScan.setVisibility(false); 
        //Ami Add- MEG-3326
        if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strFMP")) {
            glbFormName.imgMonthlyPassImage.isVisible = true;

        }
    }

}
// Ended by Praveen Kalal to get unitprice value from sku

function setLinkInfoForOnlineMember(onlineMemberInfo) {
    gblLinkInfoForOnlineMember.LinkType = "Link";
    gblLinkInfoForOnlineMember.EnterpriseID = onlineMemberInfo.EnterpriseID;
    gblLinkInfoForOnlineMember.UserName = decodeSpecialCharacters(onlineMemberInfo.UserName);
    gblLinkInfoForOnlineMember.EmailID = onlineMemberInfo.EmailID;
    gblLinkInfoForOnlineMember.IsLink = 'false';
}

function clearLinkInfoForOnlineMember(){
	gblLinkInfoForOnlineMember.LinkType = "None";
    gblLinkInfoForOnlineMember.EnterpriseID = "0";
    gblLinkInfoForOnlineMember.UserName = "";
    gblLinkInfoForOnlineMember.EmailID = "";
    gblLinkInfoForOnlineMember.IsLink = 'true';

}

//Added for replacing '&' with '&amp;' in user name value.


function decodeSpecialCharacters(inputUserName) {
    /*kony.print("Input UserName : " + inputUserName);
    var userName = inputUserName;
    if (checkValidString(inputUserName)) {
        if (inputUserName.indexOf("&") > -1) {
            if (inputUserName.indexOf("&amp;") == -1) {
                userName = inputUserName.replace(/&/g, '&amp;');
            }
        }
        if (inputUserName.indexOf("<") > -1) {
            if (inputUserName.indexOf("&lt;") == -1) {
                userName = userName.replace(/</g, '&lt;');
            }
        }
    } else {
        userName = "";
    }
    kony.print("Output UserName : " + userName);
    return userName;*/
    return inputUserName;
}


/*
 * function getSkuQueryForAWS  
 * MEG-5819 enrolling a atwork series member
 */
 
 function getSkuQueryForAWS_org(splitData,membertype,isFromCheckout,lineofbusiness){
 	try{
 		boMeetings.getSeriesWeekLeft(function(res){
	 		if(res.length > 0){
              	kony.print("getSeriesWeekLeft res=== " + JSON.stringify(res));
	 			var seriesLength = parseInt(res[0]._SeriesLength); //  Changes as per discussion with Nimmy serieslength denotes no of weeks of the series and SeriesCompletedMeetings denotes how many meetings conducted in series
              //	var currWeek = parseInt(res[0]._WeekNo) + 1;	//getCurrentWeekNumberByData(res[0].StartDate);
              	var currWeek = parseInt(res[0]._SeriesCompMeetings); //  Changes as per discussion with Nimmy serieslength denotes no of weeks of the series and SeriesCompletedMeetings denotes how many meetings conducted in series //Changed as per conversation with Nimmy : the weeknumber from meeting get all is weeks completed and the remaining  weeks left should be calculated including current week
                var weekleft = seriesLength - currWeek;
              	var whrCondition = "";
              	if(Actions[splitData[1]] == Actions[2]){
                  	whrCondition = "where Transact='"+Flows[splitData[2]]+"' and Subscription = '"+Subcriptions[splitData[0]]+"' and Action ='"+Actions[splitData[1]]+"' and SeriesLength = '"+seriesLength+"'";
                } else if(Actions[splitData[1]] == Actions[6] || Actions[splitData[1]] == Actions[7]){
                  	whrCondition = "where Transact='"+Flows[splitData[2]]+"' and Subscription = '"+Subcriptions[splitData[0]]+"' and Action ='"+Actions[splitData[1]]+"'";
                }
              	else {
                  	whrCondition = "where Transact='"+Flows[splitData[2]]+"' and Subscription = '"+Subcriptions[splitData[0]]+"' and Action ='"+Actions[splitData[1]]+"' and Weeksleft="+weekleft+" and SeriesLength = '"+seriesLength+"'";
                }

	 			kony.print("::5819::Weekleft::"+weekleft);
	 			kony.print("::5819::whrCondition::"+whrCondition);
	 			
	 			if(isFromCheckout){
	 				boEnrollMember.getDollerPriceValue(whrCondition,Subcriptions[splitData[0]],Actions[splitData[1]], function(priceval) {
		                kony.print("price :-- " + priceval);
		                if (priceval == null || priceval == undefined) {
		                    priceval = 0;
		                }
		                glbFormName.lblFeesPayble.text = addDollar(priceval.toFixed(2));
		            });
	 			}
	 			else{
	 				boEnrollMember.getSKUValueFromDb(whrCondition, membertype, Subcriptions[splitData[0]], false, Actions[splitData[1]]);
	 			}
	 		}
	 	});
 	}
 	catch (e) {
		GlobalException(e);
	}
 }


function getSkuQueryForAWS(splitData,membertype,isFromCheckout,lineofbusiness){
 	try{
 		boMeetings.getSeriesWeekLeft(function(res){
	 		if(res.length > 0){
              	kony.print("getSeriesWeekLeft res=== " + JSON.stringify(res));
	 			var seriesLength = parseInt(res[0]._SeriesLength); //  Changes as per discussion with Nimmy serieslength denotes no of weeks of the series and SeriesCompletedMeetings denotes how many meetings conducted in series
              //	var currWeek = parseInt(res[0]._WeekNo) + 1;	//getCurrentWeekNumberByData(res[0].StartDate);
              var weeksComplete = parseInt(res[0]._SeriesCompMeetings); //  Changes as per discussion with Nimmy serieslength denotes no of weeks of the series and SeriesCompletedMeetings denotes how many meetings conducted in series //Changed as per conversation with Nimmy : the weeknumber from meeting get all is weeks completed and the remaining  weeks left should be calculated including current week
               getWeeksComplete(res,function(weeksComp){ 
                 weeksComplete = weeksComp;
               });
              kony.print("weeksComplete "+weeksComplete);
			
            /*MEG-7301*/
              var weekleft = seriesLength - weeksComplete;
              var currWeek = frmSelectMeeting.segMeetingsList.selectedItems[0]["weekNumber"]["text"].substr(6);
              var baseSeriesLen;
              if(seriesLength >= 12 && seriesLength < 17)
                	baseSeriesLen = 12;
              else if(seriesLength >= 17 && seriesLength < 26)
                	baseSeriesLen = 17;
              else if(seriesLength >= 26)
                	baseSeriesLen = 26;
              
              var promotionalWeek = seriesLength - baseSeriesLen; 
              var enrollmentWeeks = promotionalWeek + 2;
              
              seriesLength = baseSeriesLen;
              
              kony.print("currWeek "+currWeek);
              kony.print("baseSeriesLen "+baseSeriesLen);
              kony.print("promotionalWeek "+promotionalWeek);
              kony.print("enrollmentWeeks "+enrollmentWeeks);
              kony.print("seriesLength "+seriesLength);
              kony.print("weekleft "+weekleft);
              
              /*MEG-7301*/
              
              var whrCondition = "";
              
              	if(Actions[splitData[1]] == Actions[2]){ // Redeem
                  	whrCondition = "where Transact='"+Flows[splitData[2]]+"' and Subscription = '"+Subcriptions[splitData[0]]+"' and Action ='"+Actions[splitData[1]]+"' and SeriesLength = '"+seriesLength+"'";
              	} else if(Actions[splitData[1]] == Actions[6] || Actions[splitData[1]] == Actions[7]){ // Bridge/follown
                  	whrCondition = "where Transact='"+Flows[splitData[2]]+"' and Subscription = '"+Subcriptions[splitData[0]]+"' and Action ='"+Actions[splitData[1]]+"'";
                } else {
                  	if(currWeek <= enrollmentWeeks)/*MEG-7301 , MEG-7318*/
                        whrCondition = "where Transact='"+Flows[splitData[2]]+"' and Subscription = '"+Subcriptions[splitData[0]]+"' and Action ='"+Actions[splitData[1]]+"' and SeriesLength = '"+seriesLength+"'";
					else
                  		whrCondition = "where Transact='"+Flows[splitData[2]]+"' and Subscription = '"+Subcriptions[splitData[0]]+"' and Action ='"+Actions[splitData[1]]+"' and Weeksleft="+weekleft+" and LOWER(SeriesLength) = 'null'";
                }
              
            
	 			kony.print("::5819::Weekleft::"+weekleft);
	 			kony.print("::5819::whrCondition::"+whrCondition);
	 			
	 			if(isFromCheckout){
	 				boEnrollMember.getDollerPriceValue(whrCondition,Subcriptions[splitData[0]],Actions[splitData[1]], function(priceval) {
		                kony.print("price :-- " + priceval);
		                if (priceval == null || priceval == undefined) {
		                    priceval = 0;
		                }
		                glbFormName.lblFeesPayble.text = addDollar(priceval.toFixed(2));
		            });
	 			}
	 			else{
	 				boEnrollMember.getSKUValueFromDb(whrCondition, membertype, Subcriptions[splitData[0]], false, Actions[splitData[1]]);
	 			}
	 		}
	 	});
 	}
 	catch (e) {
		GlobalException(e);
	}
 }

/** Function added to calculate the weeks completed 
	When meeting is tallied the seriesCompMeeting gets updated with current meeting
    and in case of ReOpen meeting we need to sub 1 to get corrrect weeks left

*/
function getWeeksComplete(res1, callback) {
    kony.print("getWeeksComplete res1 " + JSON.stringify(res1));
    var weeksCompl = parseInt(res1[0]._SeriesCompMeetings);

    var whrCond = "where ID= '" + glbMeetingNum + "'";
    DBMeetingsUpdateController.find(whrCond, getWeeksCompleteSuccessCallback, getWeeksCompleteeventErrorCallBack);

    function getWeeksCompleteSuccessCallback(res) {
        kony.print("getWeeksCompleteSuccessCallback res " + JSON.stringify(res));
        if (res.length > 0) {
            kony.print("getWeeksCompleteSuccessCallback res " + JSON.stringify(res[0]._WeekNo));
            if (parseInt(res[0]._WeekNo) >= weeksCompl)
                weeksCompl = parseInt(res[0]._WeekNo) - 1;
        }
        kony.print("weeksCompl " + weeksCompl);
        callback.call(null, weeksCompl);
    }

    function getWeeksCompleteeventErrorCallBack(res) {
        callback.call(null, weeksCompl);
    }
}