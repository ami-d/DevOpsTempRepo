var IsswitchReceiveCouponsEP = false;
var IsswitchParticipateSurveysEP = false;
var IsswitchReceiveMsgsEP = false;
var IsswitchReceiveCallsEP = false;
var IsBatchAddMember = "";
var IsSameAsMailingAdd = false;
var ageValidForMonthlyPassBatchAdd = false;
var isSegmentDate = false;
var batchWeightData = [];
var isSaveAndAdd = false;
var isBillingState = false;
var validateEmailBA = false;
var eligibleMilestonesArrObj = [];
var tmpAcheivedMilestone = [];

function eventonOpenStatusPopup() {
    var context = {
        "widget": frmBatchAddMember.hboxStatus,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupMemberStatus.pickerMemberStatus.masterData = [
        [
            ["1", getLocalizedString("strActive")], 100
        ]
    ];
    popupMemberStatus.pickerMemberStatus.selectedKeys = [glbSelectMemStatus];
    popupMemberStatus.setContext(context);
    popupMemberStatus.show();
}

function onVboxDoneClickforPhonetype() {
    if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
        frmBatchAddMember.lblPhoneTypeData.text = popupPhoneType.phoneTypeSegment.selectedItems[0]["lblEdit"];
        popupPhoneType.dismiss();
    }
}

function eventonClickBulletHmeScr() {
    var context = {
        "widget": hboxHomeScreen.vbxMenu,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupHomeMenu.setContext(context);
    popupHomeMenu.show();
}

function eventOnClickDateSelection() {
    isSegmentDate = true;
    popupDateOfBirth.calEnrollMemberDOB.clear();
    var context1 = {
        "widget": popupAddWeigh.hboxDOBSection1,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupDateOfBirth.setContext(context1);
    popupDateOfBirth.calEnrollMemberDOB.clear();
    var batchpopupfortnightAway, batchpopupdate, batchpopupmon, batchpopupyear;
    if (kony.application.getCurrentForm().id == frmEditMemberProfile.id) {
        batchpopupfortnightAway = new Date();
        //MEG - 4034 Dont allow todays Date Weigh In
        batchpopupdate = batchpopupfortnightAway.getDate() - 1;
        batchpopupmon = batchpopupfortnightAway.getMonth() + 1;
        batchpopupyear = batchpopupfortnightAway.getFullYear();
    } else {
        batchpopupfortnightAway = new Date();
        batchpopupdate = batchpopupfortnightAway.getDate();
        batchpopupmon = batchpopupfortnightAway.getMonth() + 1;
        batchpopupyear = batchpopupfortnightAway.getFullYear();
    }

    popupDateOfBirth.calEnrollMemberDOB.clear();
    popupDateOfBirth.calEnrollMemberDOB.validStartDate = [01, 01, 1900];
    popupDateOfBirth.calEnrollMemberDOB.validEndDate = [batchpopupdate, batchpopupmon, batchpopupyear];
    popupDateOfBirth.show();

}

function ValidateageforDPT() {
    if (frmBatchAddMember.lblDOBInfo.text != "") {
        var ageval1 = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
        if ((frmBatchAddMember.lblSubTypeInfo.text == "Monthly Pass" || frmBatchAddMember.lblSubTypeInfo.text == "3 Months Pass" || frmBatchAddMember.lblSubTypeInfo.text == "6 Months Pass" || frmBatchAddMember.lblSubTypeInfo.text == "20 Week Pass") && ageval1 <= 16) {
            alertForMessages(kony.i18n.getLocalizedString("strmsgValidateDPT"));
            ageValidForMonthlyPassBatchAdd = false;
        } else {
            ageValidForMonthlyPassBatchAdd = true;
        }
    }
}

function eventOnClickState1SectionBAMemberPage() {
    displayStatePopup(frmBatchAddMember.hboxState, "bottom", false)
}

function eventOnClickState2SectionBAMemberPage() {
    isBillingState = true;
    displayStatePopup(frmBatchAddMember.hboxBillingState, "top", false)
}

function eventOnClickSubTypeSectionBAMemberPage() {
    var context = {
        "widget": frmBatchAddMember.vboxSubTypeBAMember,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupSubscriptionType.setContext(context);
    if(!in_array(deviceLocale,Countries["CA"])){
	    popupSubscriptionType.pickerSubType.masterData = [
	        [
	            ["1-1-1", kony.i18n.getLocalizedString("strMonthlyPass")],
	            ["8-1-1", kony.i18n.getLocalizedString("str3MonthPass")],
	            ["10-1-1", kony.i18n.getLocalizedString("str6MonthPass")],
	            ["13-1-1", kony.i18n.getLocalizedString("strLTC6")],
	            ["3-1-1", kony.i18n.getLocalizedString("strPayg")],60
	        ]
	    ]; 
    }else {
    	popupSubscriptionType.pickerSubType.masterData = [
	        [
	            ["1-1-1", kony.i18n.getLocalizedString("strMonthlyPass")],
	            ["8-1-1", kony.i18n.getLocalizedString("str3MonthPass")],
	            ["10-1-1", kony.i18n.getLocalizedString("str6MonthPass")],
	            ["3-1-1", kony.i18n.getLocalizedString("strPayg")],
	            ["9-1-1", kony.i18n.getLocalizedString("str20WkPass")], 60
	        ]
	    ]; 
    }
    popupSubscriptionType.pickerSubType.selectedKeys = [glbSelectSubType];
    popupSubscriptionType.show();
}

function onPostShowfrmAddBatchMember() {
    frmBatchAddMember.lblMemberType.text = getLocalizedString("strPaid");
    frmBatchAddMember.lblMemberStatus.text = getLocalizedString("strActive");
    frmBatchAddMember.lblSubTypeInfo.text = getLocalizedString("strPayg");
    glbFormName.txtSubscriptionID.setEnabled(false);
    glbFormName.btnScan.setVisibility(false); 
    frmBatchAddMember.txtSubID.setEnabled(false);
    frmBatchAddMember.imgSubID.isVisible = false;
    frmBatchAddMember.imgExpDate.isVisible = false;
    frmBatchAddMember.vboxExpirationDate.setEnabled(false);
    frmEditMemberProfile.txtSubID.setEnabled(false);
    frmEditMemberProfile.vboxExpirationDate.setEnabled(false);
    glbFormName.imgsub.isVisible = false;

    frmBatchAddMember.imgEmail.setVisibility(false);

    glbFormName.imgMonthlyPassImage.src = "icn_payment_header.png";
    frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_payment_header.png";
    textSubType = "PAYG";
    glbFormName.lblProcessMemberSubHeaderlbl2.text = textSubType;
    frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = textSubType;//Modified by Studio Viz
    isPayAsYouGo = true;
    frmCheckout.lblExpDate.text = "";
    frmAddAndWeighMemberTransaction.lblExpDate.text = "";
    glbSelectSubType = "3-1-1";
    glbSelectMemStatus = "1";
    glbSelectMemType = "1";
    // MEGCA-400
    if(in_array(deviceLocale,Countries["CA"])) {
		frmBatchAddMember.txtZip.textInputMode = constants.TEXTBOX_INPUT_MODE_ANY;
		frmBatchAddMember.txtZip.maxTextLength = 7;
		
	}
}

function eventOnClickSegmentDateBAMemberPage() {
    isSegmentDate = true;
    var context1 = {
        "widget": frmBatchAddMember.vboxImage,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupDateOfBirth.setContext(context1);
    popupDateOfBirth.calEnrollMemberDOB.clear();
    var segfortnightAway = new Date();
    var segdate = segfortnightAway.getDate();
    var segmon = segfortnightAway.getMonth() + 1;
    var segyear = segfortnightAway.getFullYear();
    popupDateOfBirth.calEnrollMemberDOB.validStartDate = [01, 01, 1900];
    popupDateOfBirth.calEnrollMemberDOB.validEndDate = [segdate, segmon, segyear];
    popupDateOfBirth.show();
}

function eventOnClickExpiryDateSectionBAMemberPage() {
    isExpirationDate = true;

    var context1 = {
        "widget": frmBatchAddMember.vboxExpirationDate,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupDateOfBirth.setContext(context1);
    popupDateOfBirth.calEnrollMemberDOB.clear();
    eventinitExpirationDatePopUp();
    popupDateOfBirth.show();

}

function eventOnClickMemberShipTypeSectionBAMemberPage() {
    var context1 = {
        "widget": frmBatchAddMember.vboxMemberShipType,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupMemberType.pickerMemberType.masterData = [
        [
            ["1", getLocalizedString("strPaid")],
            ["7", getLocalizedString("strLifetime")], 100
        ]
    ]; //added by praveen kalal
    popupMemberType.pickerMemberType.selectedKeys = [glbSelectMemType];
    popupMemberType.setContext(context1);
    popupMemberType.show();
}

function eventOnClickHeightSectionBAMemberPage() {

    if (deviceLocale == "fr_FR") {
        popupHeight.pckrSelectHeight.masterData = heightFR;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightFR;
    } else 
    {
        popupHeight.pckrSelectHeight.masterData = heightUS;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightUS;
    }

    var context = {
        "widget": frmBatchAddMember.hboxHeight,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupHeight.setContext(context);
    popupHeight.show();
}

function eventOnClickDOBSectionBAMemberPage() {
    var context = {
        "widget": frmBatchAddMember.hboxDOBSection1,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupDateOfBirth.setContext(context);
    popupDateOfBirth.calEnrollMemberDOB.clear();
    if (frmBatchAddMember.lblDOBInfo.text == "") {
        eventinitDOBPopUp("");
    } else {
        eventinitDOBPopUp(frmBatchAddMember.lblDOBInfo.text);
    }

    popupDateOfBirth.show();
}

function eventOnClickCellTypeSectionBAMemberPage() {
    var context = {
        "widget": frmBatchAddMember.vboxPhone,
        "anchor": "right",
        "sizetoanchorwidth": false
    };
    popupPhoneType.setContext(context);
    popupPhoneType.show();
}

function eventonSlideswitchReceiveCouponsBAMember() {
    kony.print("swtch.selectedIndex===>>" + frmBatchAddMember.switchReceiveCoupons.selectedIndex);
    if (frmBatchAddMember.switchReceiveCoupons.selectedIndex == 0) {
        IsswitchReceiveCouponsEP = true;
    } else {
        IsswitchReceiveCouponsEP = false;
    }

    kony.print("IsswitchReceiveCouponsEP---->>>>" + IsswitchReceiveCouponsEP);
}

function eventonSlideswitchSameAsMailingAdd() {
    if (frmBatchAddMember.switchMailingAdd.selectedIndex == 0) {
        IsSameAsMailingAdd = true;
        frmBatchAddMember.txtBillingAdd1.text = decodeSpecialCharacters(frmBatchAddMember.txtAddr1.text);
        frmBatchAddMember.txtBillingAddr2.text = decodeSpecialCharacters(frmBatchAddMember.txtAddr2.text);
        frmBatchAddMember.txtBillingCity.text = frmBatchAddMember.txtCity.text;
        frmBatchAddMember.lblBillingStateInfo.text = frmBatchAddMember.lblStateInfo.text;
        frmBatchAddMember.txtBillingZip.text = frmBatchAddMember.txtZip.text;
    } else {
        IsSameAsMailingAdd = false;
    }

    kony.print("IsSameAsMailingAdd in Edit profile---->>>>" + IsSameAsMailingAdd);
}

function eventonSlideswitchReceiveCallsBAMember() {
    if (frmBatchAddMember.switchReceiveCalls.selectedIndex == 0) {
        IsswitchReceiveCallsEP = true;
    } else {
        IsswitchReceiveCallsEP = false;
    }

    kony.print("IsswitchReceiveCallsEP---->>>>" + IsswitchReceiveCallsEP);
}

function eventonSlideswitchReceiveMsgsBAMember() {
    if (frmBatchAddMember.switchReceiveMsgs.selectedIndex == 0) {
        IsswitchReceiveMsgsEP = true;
    } else {
        IsswitchReceiveMsgsEP = false;
    }

    kony.print("IsswitchReceiveMsgsEP---->>>>" + IsswitchReceiveMsgsEP);
}

function eventonSlideswitchParticipateSurveysBAMember() {
    if (frmBatchAddMember.switchParticipateSurveys.selectedIndex == 0) {
        IsswitchParticipateSurveysEP = true;
    } else {
        IsswitchParticipateSurveysEP = false;
    }


    kony.print("IsswitchParticipateSurveysEP---->>>>" + IsswitchParticipateSurveysEP);
}

//This function is called on NOWeighIn button tap
function eventonClickNoWeighInpopUpAddWeigh() {
    if (popupAddWeigh.btnNWI.skin == "btnwwtxtSearchLocation") {
        popupAddWeigh.btnNWI.skin = "btnNoWeighInSelected";
        popupAddWeigh.txtAddWeight.text = getLocalizedString("strNWI");
        popupAddWeigh.txtAddWeight.setEnabled(false);
        IsNWIInView = true;
    } else {
        popupAddWeigh.btnNWI.skin = "btnwwtxtSearchLocation";
        popupAddWeigh.txtAddWeight.setEnabled(true);
        popupAddWeigh.txtAddWeight.text = "";
        IsNWIInView = false;
    }
}

//added by Nikita Patel
function eventOnClickStartDateAddBatchMember() {
    IsStartDate = true;
    var context1 = {
        "widget": frmBatchAddMember.hboxStartDate,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    popupDateOfBirth.setContext(context1);
    popupDateOfBirth.calEnrollMemberDOB.clear();
    var batchfortnightAway = new Date();
    var batchdate = batchfortnightAway.getDate();
    var batchmon = batchfortnightAway.getMonth() + 1;
    var batchyear = batchfortnightAway.getFullYear();
    popupDateOfBirth.calEnrollMemberDOB.validStartDate = [01, 01, 1900];
    popupDateOfBirth.calEnrollMemberDOB.validEndDate = [batchdate, batchmon, batchyear];

    popupDateOfBirth.show();
}


function onDoneEditingGoalWeightTextBA() {
    if (frmBatchAddMember.txtGoalWeight.text != "") {
        var rndWeight = parseFloat(frmBatchAddMember.txtGoalWeight.text);
        frmBatchAddMember.txtGoalWeight.text = rndWeight.toFixed(1); //parseFloat
    } else {
        frmBatchAddMember.txtGoalWeight.text = "0.0";
    }

}
//added by praveen kalal

function eventOnclickSaveAndAddBtn() {
    isSaveAndAdd = true;
	 kony.print("eventOnclickSaveAndAddBtn()");
	var ageVal = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
 	if(ageVal < 13 ) {
 		
 		alertForMessages(kony.i18n.getLocalizedString("strValidAgeAlert"));
       
     }
     else
     {
     	eventOnclickSaveBtn();
     }
}

function eventOnclickSaveOnlyBatchBtn() {
    isSaveAndAdd = false;
    kony.print("eventOnclickSaveOnlyBatchBtn()");
	var ageVal = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
	kony.print("eventOnclickSaveOnlyBatchBtn() ageVal" + ageVal + (ageVal+1));
	 if(ageVal < 13 ) {
	 	
	 	alertForMessages(kony.i18n.getLocalizedString("strValidAgeAlert"));
       
     }
     else
     {
     	eventOnclickSaveBtn();
     }
}

function eventOnclickSaveBtn() {
	kony.print("Batch Save===>");

    //To Check if any of the Weight has 0 value - Happens When Fill Data using Paid member and then change to Lifetime
    var batchSegment = frmBatchAddMember.segAddBatchMembeProfileDetails.data;
    var result1 = _.find(batchSegment, function(d) {
        if (d.lblWeightData == 0) {
            alertForMessages(kony.i18n.getLocalizedString("strValidationMsgEnterWeights"));
            return true;
        }
    });
    if (checkValidString(result1)) {
        //Stop Further Propogation
        return false;
    }

    var valid = new validationcls();
    var SubRes, city = true,
        cityBill = true,
        nickName = true,
        zipcode = true,
        postal = true;
    kony.print("Selected key==="+popupSubscriptionType.pickerSubType.selectedKeys[0]);
    if (isPayAsYouGo) {
        var res = valid
            .checkEnrollFirstName(frmBatchAddMember.txtFirstName.text)
            .checkEnrollLastName(frmBatchAddMember.txtLastName.text)
            //Ami MEG-2586 
            .checkForRequiredFields(frmBatchAddMember.lblMemberType.text, "Membership type")
            .checkForRequiredFields(frmBatchAddMember.lblMemberStatus.text, "Status")
            .heightValidation(frmBatchAddMember.lblHeightInfo.text)
            .validateDate(frmBatchAddMember.lblDOBInfo.text)
            .validateWeight(frmBatchAddMember.txtStartWeight.text)
            .validateStartDate(frmBatchAddMember.lblStartDateInfo.text, frmBatchAddMember.lblDOBInfo.text)
            .checkMemberID(frmBatchAddMember.txtMemberId.text)
            .checkForMonthlyPassForBatch(glbSelectSubType, frmBatchAddMember.txtEmail.text, frmBatchAddMember.lblSubTypeInfo.text)
            .CheckRemainingMissedWeekPasses(frmBatchAddMember.txtWeeksCompleted.text,0)
            .CheckRemainingMissedWeekPasses(frmBatchAddMember.txtRemainingMissedWeek.text,1)
            .isValid();
        SubRes = true;
    } else {
    	kony.print("IS inside else !ageValidForMonthlyPassBatchAdd===>");
        if (!ageValidForMonthlyPassBatchAdd) {
            alertForMessages(kony.i18n.getLocalizedString("strmsgValidateDPT"));
            return;
        }
        var msgtype = "";
        if (frmBatchAddMember.lblSubTypeInfo.text == getLocalizedString("strMonthlyPass") || frmBatchAddMember.lblSubTypeInfo.text == getLocalizedString("str3MonthPass") || frmBatchAddMember.lblSubTypeInfo.text == getLocalizedString("str6MonthPass") || frmBatchAddMember.lblSubTypeInfo.text == getLocalizedString("strLTC6")) {
            msgtype = "MP";
        } else if (frmBatchAddMember.lblSubTypeInfo.text == getLocalizedString("str20WkPass")) {
            msgtype = "20WP";
        }

        var res = valid
            .checkEnrollFirstName(frmBatchAddMember.txtFirstName.text)
            .checkEnrollLastName(frmBatchAddMember.txtLastName.text)
            .checkForRequiredFields(frmBatchAddMember.lblMemberType.text, "Membership Type")
            .checkForRequiredFields(frmBatchAddMember.lblMemberStatus.text, "Status")
            .heightValidation(frmBatchAddMember.lblHeightInfo.text)
            .validateDate(frmBatchAddMember.lblDOBInfo.text)
            .validateDate(frmBatchAddMember.lblExpDateInfo.text, "strExpirationDate")
            .validSubscriptiodIdLength(frmBatchAddMember.txtSubID.text, msgtype)
            .validateWeight(frmBatchAddMember.txtStartWeight.text)
            .validateStartDate(frmBatchAddMember.lblStartDateInfo.text, frmBatchAddMember.lblDOBInfo.text)
            .checkMemberID(frmBatchAddMember.txtMemberId.text)
            .checkForMonthlyPassForBatch(glbSelectSubType, frmBatchAddMember.txtEmail.text, frmBatchAddMember.lblSubTypeInfo.text)
            .CheckRemainingMissedWeekPasses(frmBatchAddMember.txtWeeksCompleted.text,0)
            .CheckRemainingMissedWeekPasses(frmBatchAddMember.txtRemainingMissedWeek.text,1)
            .isValid();

        SubRes = IsValidMonthlyPass(frmBatchAddMember.txtSubID.text);

    }
    if (!isPayAsYouGo && checkValidString(frmBatchAddMember.txtSubID.text) && checkValidString(frmBatchAddMember.lblExpDateInfo.text)) {
        var SubscriptionId = frmBatchAddMember.txtSubID.text;
        var ExpDate = formatDateTommddyyyy(frmBatchAddMember.lblExpDateInfo.text);
        var tmp = SubscriptionId.slice(-6);
        kony.print("::DJP::SubscriptionId=" + SubscriptionId);
        kony.print("::DJP::ExpDate=" + ExpDate);
        kony.print("::DJP::tmp=" + tmp);
        if (!isNaN(tmp)) {
            var strdate = tmp.substring(0, 2) + "/" + tmp.substring(2, 4) + "/20" + tmp.substring(4, 6);
            kony.print("::DJP::strdate=" + strdate);   // 06/29/2017
            if (ExpDate != strdate) {
                alertForMessages(kony.i18n.getLocalizedString("strEnterValidDateAdd"));
                return;
            }

        }
    }

    var isGoalWeight = true;
    // To fix MEG-3910
    if (frmBatchAddMember.txtGoalWeight.text != "" || (frmBatchAddMember.lblMemberType.text) == getLocalizedString("strLifetime")) {
        isGoalWeight = valid.validateGoalWeight(parseFloat(frmBatchAddMember.txtGoalWeight.text), parseFloat(frmBatchAddMember.txtStartWeight.text)).isValid();
    }

    if (frmBatchAddMember.txtCity.text != "") {
        city = valid
            .checkCity(frmBatchAddMember.txtCity.text)
            .isValid();
    }
    if (frmBatchAddMember.txtBillingCity.text != "") {
        cityBill = valid
            .checkCity(frmBatchAddMember.txtBillingCity.text)
            .isValid();
    }
    if(frmBatchAddMember.txtZip.text != "") {
    	zipcode = valid
    		.validateZipCode(frmBatchAddMember.txtZip.text)
            .isValid();
    }
    if (frmBatchAddMember.txtNickName.text != "") {
        nickName = valid
            .checkNickName(frmBatchAddMember.txtNickName.text)
            .isValid();
    }
	if (in_array(deviceLocale,Countries["CA"])) {
		if (frmBatchAddMember.txtZip.text != "") {
	        postal = valid
	            .checkPostalCode(frmBatchAddMember.txtZip.text)
	            .isValid();
	    }
	}
    if (frmBatchAddMember.txtGoalWeight.text != "") {
        if (frmBatchAddMember.txtGoalWeight.text == "0.0" || frmBatchAddMember.txtGoalWeight.text == "0") {} else {
            if (parseFloat(frmBatchAddMember.txtGoalWeight.text) < 60 || parseFloat(frmBatchAddMember.txtGoalWeight.text) > 999.9) {
                kony.print("frmBatchAddMember.txtGoalWeight.text---INSIDE---" + frmBatchAddMember.txtGoalWeight.text);
                alertForMessages(kony.i18n.getLocalizedString("strValidGoalWeight"));
                return false;
            }
        }
    }
    checkIfMemberAlreadyExistsInDB(frmBatchAddMember.txtMemberId.text, glbMemberId, BatchAddSuccessCallbackMemberExistence);

    function BatchAddSuccessCallbackMemberExistence() {
    	kony.print("BatchAddSuccessCallbackMemberExistence") ;
        //added by Praveen MEG-3927
        if (res && validateEmailBA && isPayAsYouGo) {
            res = valid.checkEmail(frmBatchAddMember.txtEmail.text).isValid();
        }

        if (res && SubRes && isGoalWeight && city && cityBill && nickName && postal && zipcode) {
            kony.print("Batch sdbsahjd===?" + batchWeightData.length);
            if (batchWeightData.length > 0) {
                if (frmBatchAddMember.txtCity.text != "" || frmBatchAddMember.txtAddr1.text != "" || frmBatchAddMember.txtAddr2.text != "" || frmBatchAddMember.txtZip.text != "") {

                    if (frmBatchAddMember.lblStateInfo.text == "") {
                        alertForMessages(kony.i18n.getLocalizedString("strSelectState"));
                        return false;
                    }
                }
                var createMember = {};
                var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");

                var pickerHeightSelectedKeys = popupHeight.pckrSelectHeight.selectedKeys;
                var heightInMeters = com.es.weighincalculations.ConvertHeight(pickerHeightSelectedKeys);
                var heightinInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);


                // Added by Praveen for insert start weight data in weight history table
                var startWeightData = {};
                var ageval = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
                var gender = frmBatchAddMember.cmbGender.selectedKey;
                var strtwghtInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(frmBatchAddMember.txtStartWeight.text));
                startWeightData.EmpID = glbEmployeeId;
                startWeightData.IsAtndgMeeting = "true";
                startWeightData.WeighInDate = supportTime(new Date(frmBatchAddMember.lblStartDateInfo.text), "", "yyyy-mm-ddTHH:NN:SS");
                startWeightData.WeekNumber = 0;
                startWeightData.MemberID = glbMemberId;
                startWeightData.LocationID = parseInt(glbLocationID);
                startWeightData.ManualWeighIn = "true";
                startWeightData.MeetingDate = (glbMeetingNum == "") ? entryDate : glbMeetingDate;

                /*Maulik's Change  - Chnage MeetingOcc ID ot 0 for Batch Add in Meeting or NoMeeting as per new design Checked-In discussion
	 Date - 08/14/2014 */
                startWeightData.MtngOccrID = 1; //ID field value of the meetings getall            
                startWeightData.Weight = frmBatchAddMember.txtStartWeight.text;
				ageval = getAgeFromDob(frmBatchAddMember.lblDOBInfo.text);
                kony.print("ageval==" + ageval + "===hghtInMtrs==" + heightInMeters + "===strtwghtInKG==" + strtwghtInKG + "==gender==" + gender);
               
                var DptValue ="";
                var WPA = " ";
                setDptWpa(strtwghtInKG, heightInMeters, ageval, gender,"", function(dptVal, wpaVal){
                	kony.print("SJ DPT:"+dptVal);
                	kony.print("SJ WPA:"+wpaVal);
               		DptValue = dptVal;
               		WPA = wpaVal;
                });
                              
                startWeightData.DailyPtTarget = (DptValue != undefined && DptValue != null && DptValue != "") ? DptValue : 0;
                startWeightData.WeeklyPointsAllowance = (WPA != undefined && WPA != null && WPA != "") ? WPA : 0;
                
                startWeightData.NoWeighIn = "false";
                startWeightData.WeightLoss = parseFloat("0.0");
                startWeightData.SessionNumber = 1;
                kony.print("startWeightData====" + JSON.stringify(startWeightData));
                batchWeightData.push(startWeightData);

                createMember.ConsWeightGain = 0;
                createMember.CrntLifeTimeSta = 0;
                createMember.DateOfBirth = supportTime(frmBatchAddMember.lblDOBInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
                createMember.DontRecvCalls = (frmBatchAddMember.switchReceiveCalls.selectedIndex == "0") ? false : true;
                createMember.DontContByEmail = (frmBatchAddMember.switchOffers.selectedIndex == "0") ? false : true;
                createMember.DontCnctPhone = (frmBatchAddMember.switchReceiveCalls.selectedIndex == "0") ? false : true;
                createMember.DontCnctSMS = (frmBatchAddMember.switchReceiveMsgs.selectedIndex == "0") ? false : true;
                createMember.DontSendCard = (frmBatchAddMember.switchOffers.selectedIndex == "0") ? false : true;
                createMember.DontSendCoupon = (frmBatchAddMember.switchReceiveCoupons.selectedIndex == "0") ? false : true;

                createMember.Email = frmBatchAddMember.txtEmail.text;

                createMember.EmpID = glbEmployeeId; 
                createMember.EnrollmentDate = entryDate;
                createMember.FeePaid = true; //Added for MEG-4791
                createMember.FirstName = frmBatchAddMember.txtFirstName.text;
                createMember.Gender = frmBatchAddMember.cmbGender.selectedKey;
                createMember.StartWeight = frmBatchAddMember.txtStartWeight.text;
                createMember.StartDate = supportTime(frmBatchAddMember.lblStartDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS");

                kony.print("Location ID to be added in Member is : " + glbLocationID);
                createMember.GoalWeight = parseFloat(frmBatchAddMember.txtGoalWeight.text);
                createMember.Height = Math.round(heightinInches);
                
                createMember.LastAchvdMStone = 0;
                createMember.LastContactDate = entryDate;
                createMember.LastName = frmBatchAddMember.txtLastName.text;
                createMember.LastNteEntrDate = entryDate;
                createMember.LocationID = parseInt(glbLocationID);

                createMember.MeetingDate = (glbMeetingNum == "") ? "0001-01-01T00:00:00" : glbMeetingDate;
                createMember.LastAttendanceDate = batchWeightData[parseInt(batchWeightData.length) - 2].WeighInDate;
               
                glbMemberLastAttDate = "";

                /*Maulik's Change  - Chnage MeetingOcc ID ot 0 for Batch Add in Meeting or NoMeeting as per new design Checked-In discussion
	 Date - 08/14/2014 */
                createMember.MtngOccrID = 0; //ID field value of the meetings getall
				if (frmBatchAddMember.lblSubTypeInfo.text == getLocalizedString("str20WkPass")) {
                    var data = frmBatchAddMember.txtSubID.text.toUpperCase().replace("C", "Q");
                    createMember.CouponCode = data.substring(0, 10);
                    createMember.SubscriptnID = 0;
                    createMember.LastUsedDate = entryDate;
                    createMember.ProductID = 1;
                    createMember.SubscriptnType = MemberSubscriptionTypeEnumBatch[frmBatchAddMember.lblSubTypeInfo.text];
                    createMember.IsPAYG = "false";
                    createMember.ExpirationDate = supportTime(frmBatchAddMember.lblExpDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
                }else if (frmBatchAddMember.lblSubTypeInfo.text == getLocalizedString("strLTC6")) {
                    createMember.CommitmentDuration = "6";
                    createMember.PlanType = PlanTypeEnum[frmBatchAddMember.lblSubTypeInfo.text];
                    createMember.CouponCode = frmBatchAddMember.txtSubID.text.substring(0, 9);
                    createMember.SubscriptnID = 0;
                    createMember.LastUsedDate = entryDate;
                    createMember.ProductID = 1;
                    createMember.SubscriptnType = MemberSubscriptionTypeEnumBatch[frmBatchAddMember.lblSubTypeInfo.text];
                    createMember.IsPAYG = "false";
                    createMember.ExpirationDate = supportTime(frmBatchAddMember.lblExpDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
                    kony.print("EXP DATE:->" + createMember.ExpirationDate);
                } else if (frmBatchAddMember.lblSubTypeInfo.text != kony.i18n.getLocalizedString("strPayg")) {
                    createMember.CouponCode = frmBatchAddMember.txtSubID.text.substring(0, 9);
                    createMember.SubscriptnID = 0;
                    createMember.LastUsedDate = entryDate;
                    createMember.ProductID = 1;
                    createMember.SubscriptnType = MemberSubscriptionTypeEnumBatch[frmBatchAddMember.lblSubTypeInfo.text];
                    createMember.IsPAYG = "false";
                    createMember.ExpirationDate = supportTime(frmBatchAddMember.lblExpDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
                    kony.print("EXP DATE:->" + createMember.ExpirationDate);
                } 
                else {
                    createMember.IsPAYG = "true";
                    createMember.ExpirationDate = "";
                    kony.print("EXP DATE:->" + createMember.ExpirationDate);
                }


                createMember.MemberID = glbMemberId;
                kony.print("createMember.MemberID----->" + createMember.MemberID);
                kony.print("memberIDCount===========?????/" + memberIDCount);
                createMember.MemberType = MemberValueEnum[glbSelectMemType];
                createMember.MissWeekPasses = 3; //This is default value we need to pass

                //Ami add -MEG-115
                createMember.ReedeemedPasses = 0;
                createMember.RedeemedDate = "0001-01-01T00:00:00";
                createMember.IsDateRedeemed = 'true';

                createMember.NoWeeksAttended = 1; //This is default value we need to pass
                createMember.Phone1 = (frmBatchAddMember.txtPhone.text != "") ? frmBatchAddMember.txtPhone.text : ""; //Replace with actual
                createMember.Phone2 = "";
                kony.print("frmBatchAddMember.lblPhoneTypeData.text :"+frmBatchAddMember.lblPhoneTypeData.text);
                
                switch (frmBatchAddMember.lblPhoneTypeData.text) {
	                case kony.i18n.getLocalizedString("strPhoneTypeHome"):
	                    createMember.PhoneType1 = phoneTypeValueEnum[1];
	                    break;
	                case kony.i18n.getLocalizedString("strPhoneTypeWork"):
	                    createMember.PhoneType1 = phoneTypeValueEnum[7];
	                    break;
	                case kony.i18n.getLocalizedString("strPhoneTypeCell"):
	                    createMember.PhoneType1 = phoneTypeValueEnum[8];
	                    break;
	                default:
	                	createMember.PhoneType1 = "";
	                    break;
	            }
                createMember.PhoneType2 = phoneTypeValueEnum[1];
                createMember.PrevLifeTimeSta = 0;
                createMember.RegDate = supportTime(frmBatchAddMember.lblStartDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS");

                createMember.RegNumber = frmBatchAddMember.txtMemberId.text; //This should be 8 or 9 digits

                createMember.BillingAddr1 = "";
                createMember.BillingAddr2 = "";
                createMember.BillingCity = "";
                createMember.BillingState = 0;
                createMember.BillingZipCode = "";

                //Maintainance Tracker

                createMember.TrackerID = 0;
                createMember.UserID = glbMemberId;
                createMember.MaintenanceMode = 'false';
                createMember.TrackerStartDate = "0001-01-01T00:00:00";
                createMember.FailedDate = "0001-01-01T00:00:00";
                createMember.Eligible = 'false';
                createMember.EligibleDate = "0001-01-01T00:00:00";
                createMember.WeightCountMet = 'false';
                createMember.PaidLastFee = 'false';
                createMember.SessionNumber = 1;

                //Shipping Address Block Nodes
                createMember.ShippingAddr1 = decodeSpecialCharacters(frmBatchAddMember.txtAddr1.text);
                createMember.ShippingAddr2 = decodeSpecialCharacters(frmBatchAddMember.txtAddr2.text);
                createMember.ShippingCity = frmBatchAddMember.txtCity.text;
                createMember.ShippingState = returnStateIDByName(frmBatchAddMember.lblStateInfo.text);
                createMember.ShippingZipCode = frmBatchAddMember.txtZip.text;


				
                createMember.IncompleteData = checkForMemberInCompleteProfile(createMember);//!inCompleteFlag;
                
                //Other Nodes
                createMember.UserStsChngRsn = "";
                createMember.UserComments = "";
                createMember.UserStsEndPrd = "0001-01-01T00:00:00";
                createMember.PreRegNumber = 0;
                createMember.MemberStatus = MemberStatusEnum[glbSelectMemStatus];
                createMember.TransactionType = TransactionType.Add;
                createMember.WeeksCompleted = 0;
                createMember.WeightGain = 0;
                createMember.GoalWeight = (frmBatchAddMember.txtGoalWeight.text > 0) ? frmBatchAddMember.txtGoalWeight.text : 0; //replace by form value

                //Link Unlink  DJP
                createMember.LinkType = currentMemberLinkValues.LinkType;
                createMember.EmailID = currentMemberLinkValues.EmailID;
                createMember.EnterpriseID = currentMemberLinkValues.EnterpriseID;
                createMember.UserName = decodeSpecialCharacters(currentMemberLinkValues.UserName);
                createMember.IsLink = currentMemberLinkValues.IsLink;
                createMember.IsFreshStart = 'false';
                createMember.RefreshDate = "0001-01-01T00:00:00";
                createMember.MemberRole = MemberRoleEnum[2];
                createMember.Usertype = UserType.Member;

                //Start of MEG-2518

                batchWeightData.sort(function(a, b) {
                    var dateA = new Date(a.WeighInDate),
                        dateB = new Date(b.WeighInDate);
                    return dateA - dateB //sort by date ascending
                });

                for (var i in batchWeightData) {

                    if (i != 0) {
                        batchWeightData[i].WeightLoss = (parseFloat(batchWeightData[i - 1].Weight - batchWeightData[i].Weight)).toFixed(1);
                    }
                    kony.print("BatchAdd member weight Data: " + JSON.stringify(batchWeightData[i]));
                }

                //End of MEG-2518

                kony.print("Create Batch Member Data=== " + JSON.stringify(createMember));

                //Added By praveen MEG-2925

                batchWeightData = _.sortBy(batchWeightData, function(w) {
                    return w.WeighInDate;
                });

                for (var b in batchWeightData) {
                    if (b > 0) {
                        if (batchWeightData[b].NoWeighIn || batchWeightData[b].NoWeighIn == "true") {
                            batchWeightData[b].Weight = batchWeightData[parseInt(b) - 1].Weight;
                        }
                    }
                }
				
                eligibleMilestonesArrObj = [];
                var startwt = frmBatchAddMember.txtStartWeight.text;
                var goalwt = frmBatchAddMember.txtGoalWeight.text;
                boMemberMilestone.getMasterMilestones(toGetAchievedMilestoneForBatchAddAndAdd, batchWeightData, startwt, goalwt, false, true);
                //End By praveen MEG-2925

                boEnrollMember.createBatchMember(createMember, batchWeightData);
                startWeightData = {};
                if (isSaveAndAdd) {
                    batchWeightData = [];
                    frmBatchAddMember.segAddBatchMembeProfileDetails.removeAll();
                    isSaveAndAdd = false;
                    kony.print("memberIDCount===========?????/" + memberIDCount);

                    if (frmBatchAddMember.lblSubTypeInfo.text == "Monthly Pass") {
                        frmBatchAddMember.imgEmail.setVisibility(true);
                    } else {
                        frmBatchAddMember.imgEmail.setVisibility(false);
                    }

                    frmBatchAddMember.show();
                } else {
                    batchWeightData = [];
                    ClearVariables();
                    kony.print("All flow Variables clear..:)");
                    if (IsNoMeetingSelected) {
                        frmHomeScreenNoMeeting.show();

                    } else {
                        evenOnPostShowHomeScreen();
                    }
                }
                onPostShowBatchAddMember();
                onPostShowfrmAddBatchMember();
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strMsgWeight"));
                return false;
            }

        }
    }

}

function eventOnclickEnableInsert() {
    frmBatchAddMember.hboxinsertweight.isVisible = true;

}


function eventonClickAddInBatchMember() {
    IsUpdateBatchWeightHistory = false;
    glbBatchAddToShowActionNWI = true; // Default - Show NWI in actions while binding the segment Data
    if (frmBatchAddMember.segAddBatchMembeProfileDetails.data == null) {
        popupAddWeigh.btnNWI.isVisible = false;
    } else {
        popupAddWeigh.btnNWI.isVisible = true;
        popupAddWeigh.btnNWI.skin = "btnwwtxtSearchLocation";
        popupAddWeigh.btnNWI.setEnabled(true);
    }
    popupAddWeigh.show();
}

function onDoneEditingAddWeightText() {
    roundWeight = com.es.weighincalculations.RoundWeight(popupAddWeigh.txtAddWeight.text);
    roundWeight = (roundWeight.toString().length > 0) ? parseFloat(roundWeight).toFixed(1) : "";
    popupAddWeigh.txtAddWeight.text = roundWeight;
    valid = new validationcls();
    var resWeigh = valid.validateWeight(roundWeight).isValid();	// added for MEGCA-282
}

function onClickSwitchSameAsBillingAddress() {
    if (frmBatchAddMember.switchMailingAdd.selectedIndex == 0) {
        frmBatchAddMember.txtBillingAdd1.text = frmBatchAddMember.txtAddr1.text;
        frmBatchAddMember.txtBillingAddr2.text = frmBatchAddMember.txtAddr2.text;
        frmBatchAddMember.txtBillingCity.text = frmBatchAddMember.txtCity.text;
        frmBatchAddMember.txtBillingZip.text = frmBatchAddMember.txtZip.text;
        frmBatchAddMember.lblBillingStateInfo.text = frmBatchAddMember.lblStateInfo.text;
    } else {
        frmBatchAddMember.txtBillingAdd1.text = "";
        frmBatchAddMember.txtBillingAddr2.text = "";
        frmBatchAddMember.txtBillingCity.text = "";
        frmBatchAddMember.txtBillingZip.text = "";
        frmBatchAddMember.lblBillingStateInfo.text = "";
    }
}

function returnStateIDByName(statename) {
    //kony.print("returnStateIDByName==>: " + JSON.stringify(StateDataObjArr));
    if (statename != undefined && statename != null && statename != "") {
       // kony.print("returnStateIDByName statename==>: " + statename);
        for (i in StateDataObjArr) {
           // kony.print("returnStateIDByName StateDataObjArr[i][StateABBR]==>: " + StateDataObjArr[i]["StateABBR"]);
            if (StateDataObjArr[i]["StateABBR"] == statename.toString()) {
                kony.print("returnStateIDByName StateDataObjArr[i][StateID]==>: " + StateDataObjArr[i]["StateID"]);
                return StateDataObjArr[i]["StateID"];
                break;
            }
        }
    }
    return 0;
}

function returnStateNameById(stateId) {
    if (stateId != undefined && stateId != null && stateId != "") {
        for (i in StateDataObjArr) {
            if (StateDataObjArr[i]["StateID"] == stateId.toString()) {
                stateNameDefault = StateDataObjArr[i]["StateABBR"];
                return StateDataObjArr[i]["StateABBR"];
                break;
            }
        }
    }
    return "--";
}
//unlink link button DJP
function onClickLinkUnlinkButton() {
    if (frmBatchAddMember.btnUnlink.text == getLocalizedString("strLink")) {
        //Link Member - Show LinkMember popup
        popupLinkMember.segLinkMember.removeAll();
        popupLinkMember.txtSearch.text = "";
        popupLinkMember.lblNoMember.setVisibility(false);
        popupLinkMember.segLinkMember.setVisibility(false);
        popupLinkMember.hbxTableTitle.setVisibility(false);
        popupLinkMember.show();
    } else {
        //Unlink Member
        frmBatchAddMember.btnUnlink.text = getLocalizedString("strLink");
        currentMemberLinkValues.EmailID = "";
        currentMemberLinkValues.EnterpriseID = 0;
        currentMemberLinkValues.LinkType = "None";
        currentMemberLinkValues.UserName = "";
        currentMemberLinkValues.IsLink = 'true';
    }
}

function onPostShowBatchAddMember() {
    frmBatchAddMember.btnUnlink.text = getLocalizedString("strLink");
    currentMemberLinkValues.EmailID = "";
    currentMemberLinkValues.EnterpriseID = 0;
    currentMemberLinkValues.LinkType = "None";
    currentMemberLinkValues.UserName = "";
    currentMemberLinkValues.IsLink = 'true';

}

//added by Praveen MEG-3927
function eventonSlideswitchOffersBatchAdd() {
    if (frmBatchAddMember.switchOffers.selectedIndex == 0) {
        frmBatchAddMember.imgEmail.setVisibility(true);
        validateEmailBA = true;
    } else {
        if (frmBatchAddMember.lblSubTypeInfo.text != 'Monthly Pass') {
            frmBatchAddMember.imgEmail.setVisibility(false);
        }
        validateEmailBA = false;
    }

    kony.print("validateEmailBA---->>>>" + validateEmailBA);
}

//End by Praveen MEG-3927

//Added by Praveen kalal MEG-2925
function toGetAchievedMilestoneForBatchAddAndAdd(masterMilestoneRes, weightData, startwt, goalwt, isFromAdd, doCreateEligble, lastwt) {

    kony.print(":: toGetAchievedMilestoneForBatchAddAndAdd :: masterMilestoneRes ------ " + JSON.stringify(masterMilestoneRes));

    var sortedWeighdata = _.sortBy(weightData, function(w) {
        return w.WeighInDate;
    });
    
    glbMilestoneName ="";
    mileStoneObj = [];
    var alertMessages = [];
    var AchievedMilestArr = [];
    var AchievedMilestID = [];
    var lastweight;
    kony.print("::sortedWeighdata::" + JSON.stringify(sortedWeighdata));
    for (var i in sortedWeighdata) {
        if (sortedWeighdata[i]['NoWeighIn'] != undefined && sortedWeighdata[i]['NoWeighIn'].toString() == "true") {
            continue;
        }

        var currentweight = sortedWeighdata[i]['Weight'];
        if (doCreateEligble) {
            lastweight = (i > 0) ? sortedWeighdata[i - 1]['Weight'] : null;
        } else {
            lastweight = lastwt;
            kony.print("::lastwt--:=" + lastwt);
        }

        var wdate = sortedWeighdata[i]['WeighInDate'];

        if (checkIfToday(wdate) && MissedWeekWeightData.length > 0) {
            lastweight = (MissedWeekWeightData.length == 1) ? startwt : MissedWeekWeightData[parseFloat(MissedWeekWeightData.length) - 1].Weight;
        }

        kony.print('lastweight=====' + lastweight);
        kony.print("weight--" + sortedWeighdata[i]['Weight']);
        if (masterMilestoneRes.length > 0) {
			//kony.print("masterMilestoneRes ===>>>"+JSON.stringify(masterMilestoneRes));
            for (var j in masterMilestoneRes) {
            	var milestoneID = masterMilestoneRes[j]["MilestoneID"];
            	//milestoneID = parseInt(milestoneID);
            	kony.print("MilestoneID ===>>> "+milestoneID);
                var milestoneName = masterMilestoneRes[j]["MilestoneName"].trim();
                if (_.contains(AchievedMilestArr, milestoneName) && (milestoneID != "31") ) {/*milestoneID != '5lb Award'*/
                    continue;
                }
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": masterMilestoneRes[j]["MilestoneID"],
                    "ReachedDate": wdate,
                    "WeekNumber": getWeekNumber(wdate.split('T')[0]),
                    "WeighInDate": wdate,
                    "MilestoneName": masterMilestoneRes[j]["MilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };

                kony.print("isFromAdd && checkIfToday(wdate)====" + isFromAdd + "------" + checkIfToday(wdate));
                
                switch (milestoneID.toString()) {
                    //case "10% Award":
                    case "2":
                    	kony.print("IN Switch MilestoneID ===>>> "+milestoneID);
                        if (getXPercentageOfWeight("10", startwt, currentweight)) {
                            if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsg10perAward")); 
                            mileStoneObj.push(createObj);
                            AchievedMilestArr.push(milestoneName);
                            AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                        }
                        break;
                    //case "Reached Goal":
                    case "3":
                        kony.print(":: goal:: goalwt--" + goalwt + "::currentweight--" + currentweight + "----wdate---" + wdate);
                        if (goalwt != undefined && goalwt != null) {

                            if (parseFloat(goalwt) >= parseFloat(currentweight)) {

                                if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsgReachedGoal")); 
                                mileStoneObj.push(createObj);
                                AchievedMilestArr.push(milestoneName);
                                AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                            }

                        }
                        break;
                    //case "25lb Award":
                    case "8":
                        if (weightDifferencInLbs("25", startwt, currentweight)) {
                            if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsg25lbAward")); 
                            mileStoneObj.push(createObj);
                            AchievedMilestArr.push(milestoneName);
                            AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                        }
                        break;
                    //case "50lb Award":
                    case "11":
                        if (weightDifferencInLbs("50", startwt, currentweight)) {
                            if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsg50lbAward")); 
                            mileStoneObj.push(createObj);
                            AchievedMilestArr.push(milestoneName);
                            AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                        }
                        break;
                    //case "Reached Lifetime":
                    case "13":
                        if (!doCreateEligble) {
                            boMemberMilestone.checkLifeTimeEligibility(glbMemberId, function() {
                                if (isEligibleForLifetime) {
                                    mileStoneObj.push(createObj);
                                    AchievedMilestArr.push(milestoneName);
                                    AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                                    isEligibleForLifetime = false;
                                }
                            });
                        }
                        break;
                    //case "75lb Award":
                    case "15":
                        if (weightDifferencInLbs("75", startwt, currentweight)) {
                            if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsg75lbAward")); 
                            mileStoneObj.push(createObj);
                            AchievedMilestArr.push(milestoneName);
                            AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                        }
                        break;
                    //case "100lb Award":
                    case "18":
                        if (weightDifferencInLbs("100", startwt, currentweight)) {
                            if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsg100lbAward")); 
                            mileStoneObj.push(createObj);
                            AchievedMilestArr.push(milestoneName);
                            AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                        }
                        break;
                    //case "5% Award":
                    case "26":
                        if (getXPercentageOfWeight("5", startwt, currentweight)) {
                        kony.print("In 5% award"+wdate);
                            if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsg5perAward")); 
                            mileStoneObj.push(createObj);
                            AchievedMilestArr.push(milestoneName);
                            AchievedMilestID.push(masterMilestoneRes[j]["MilestoneID"]);
                        }
                        break;
                    //case "5lb Award":
                    case "31":
                    	kony.print("IN Switch MilestoneID ===>>> "+milestoneID);
                        if (checkFor5LbMilestoneAward(startwt, lastweight, currentweight)) {
                            if (isFromAdd && checkIfToday(wdate)) alertMessages.push(kony.i18n.getLocalizedString("strMsg5lbAward"));
                            mileStoneObj.push(createObj);
                            AchievedMilestArr.push(milestoneName);
                        }
                        break;

                }
            }
            kony.print(":: toGetAchievedMilestoneForBatchAddAndAdd :: mileStoneObj++++" + JSON.stringify(mileStoneObj));
        }
    }
    tmpAcheivedMilestone = JSON.parse(JSON.stringify(AchievedMilestArr));
    kony.print(":: toGetAchievedMilestoneForBatchAddAndAdd :: tmpAcheivedMilestone =" + JSON.stringify(tmpAcheivedMilestone));

    //Remove already achieved milestones from the list
    if (IsFromPM == FlowForScreens.ProcessMember) {
        //Get members achieved milestones from table
        //Remove from milestone object - dont remove 5lb recurring
        kony.print(":: toGetAchievedMilestoneForBatchAddAndAdd :: milestoneDataObj=" + JSON.stringify(milestoneDataObj));
        var milestoneAchievedIDs = _.pluck(milestoneDataObj, "mID");
        //For 5lb Recurring - Allow
        milestoneAchievedIDs = _.without(milestoneAchievedIDs, 31);
        mileStoneObj = _.difference(mileStoneObj, _.filter(mileStoneObj, function(w) {
            return _.contains(milestoneAchievedIDs, parseInt(w.MilestoneID))
        }));
    }


    if (alertMessages.length > 0) {
        displayMilestoneMessages(alertMessages);
        glbMilestoneName = tmpAcheivedMilestone.join(','); //Added By PK MEGCA-346
    }
    kony.print("doCreateEligble =" + doCreateEligble);
    // check if flow is add and batch add it will create eligible milestone.
    if (doCreateEligble) {
        if (AchievedMilestArr.length > 0) {
            for (var k in masterMilestoneRes) {

                if (!(_.contains(AchievedMilestArr, masterMilestoneRes[k]["MilestoneName"])) || masterMilestoneRes[i]["MilestoneID"] == 31) { // masterMilestoneRes[k]["MilestoneName"] == '5lb Award'

                    var ElgMileObj = {
                        "MemberID": glbMemberId,
                        "MemberMilestoneID": generateGUID(),
                        "MilestoneID": masterMilestoneRes[k]["MilestoneID"],
                        "MilestoneName": masterMilestoneRes[k]["MilestoneName"]
                    };

                    eligibleMilestonesArrObj.push(ElgMileObj);
                }

            }

        } else {
            for (var k in masterMilestoneRes) {
                var ElgMileObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": masterMilestoneRes[k]["MilestoneID"],
                    "MilestoneName": masterMilestoneRes[k]["MilestoneName"]
                };

                eligibleMilestonesArrObj.push(ElgMileObj);
            }
        }
		eligibleMilestonesArrObj = _.uniq(eligibleMilestonesArrObj,"MilestoneID");
        kony.print("::eligibleMilestonesArrObj--" + JSON.stringify(eligibleMilestonesArrObj));
    } else if (AchievedMilestID.length > 0) {
        kony.print("::Inside delete state---" + JSON.stringify(AchievedMilestID));
        boMemberMilestone.deleteAchievedFromEligbleMilstone(AchievedMilestID);
    }


}

function checkIfToday(wdate) {
    kony.print("wwww===>>" + wdate);
    wdate = wdate.split("T")[0];
    kony.print("222===>>" + wdate);
    if (new Date(wdate).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)) {
        return true;
    }
    return false
}

function displayMilestoneMessages(messages) {
    kony.print("messages===>>" + JSON.stringify(messages));
    if (messages.length > 0) {
        showAlertForMilestoneMessages(messages.splice(0, 1), function() {
            displayMilestoneMessages(messages);

        });
    }

}

function showAlertForMilestoneMessages(msg, showAlertForMilestoneMessagesCallback) {
    var basicConf = {
        message: msg.toString(),
        alertType: constants.
        ALERT_TYPE_INFO,
        alertTitle: kony.i18n.getLocalizedString("strMsgMilestoneAchieved"),
        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
        noLabel: getLocalizedString("strNo"),
        alertHandler: showAlertForMilestoneMessagesCallback
    };

    //Defining pspConf parameter for alert
    var pspConf = {};
    var infoAlert = kony.ui.Alert(basicConf, pspConf);
}

//End by Praveen kalal MEG-2925

function setDptWpa(strtwghtInKG, heightInMeters, ageval, gender, flow, callback){
	kony.print("In setDptWpa function");
	var checkDPTSettings = checkAppSettingEnable(Settings["DPT"]) ? true : false;
	kony.print("checkDPTSettings  =============="+checkDPTSettings);
	var DptValue ="";
	var WPA = " ";
	if(checkDPTSettings) {
	    //new DPT rules
		/*if(ageval < 13){
			alert(kony.i18n.getLocalizedString("strValidAgeAlert"));
			return;
		} else {*/
			WPA = "42";
			if (gender === "FEMALE" || gender === "F" || gender === "Female") {	
				switch(ageval){
					case 13 :
						 DptValue = "35";
						 break;
					case 14 :
						 DptValue = "36";
						 break;
					case 15 :
						DptValue = "37";
						break;
					case 16 :
						DptValue = "38";
						break;
					case 17 :
						DptValue = "38";
						break;
					default :
						if(flow == 'Enroll'){
							frmEnrollWeighMember.txtDPTValue.setEnabled(false);
	             	    	DptValue = "";
	             	    	WPA = "";
						}else{
							DptValue = com.es.weighincalculations.CalculateStatistics("DPT", parseFloat(strtwghtInKG), heightInMeters, ageval, gender);
							WPA =  com.es.weighincalculations.CalculateStatistics("WPA", parseFloat(strtwghtInKG), heightInMeters , ageval , gender);
						}
						break;  	
				}
			} else {
				switch(ageval){
					case 13 :
						 DptValue = "48";
						 break;
					case 14 :
						 DptValue = "49";
						 break;
					case 15 :
						DptValue = "50";
						break;
					case 16 :
						DptValue = "51";
						break;
					case 17 :
						DptValue = "51";
						break;
					default :
						if(flow == 'Enroll'){
							frmEnrollWeighMember.txtDPTValue.setEnabled(false);
	             	    	DptValue = "";
	             	    	WPA = "";
						}else{
						 	DptValue = com.es.weighincalculations.CalculateStatistics("DPT", parseFloat(strtwghtInKG), heightInMeters, ageval, gender);
						 	WPA =  com.es.weighincalculations.CalculateStatistics("WPA", parseFloat(strtwghtInKG), heightInMeters , ageval , gender);
						}
						break; 	
				}
			}	
		//}	
	} else {
		//old DPT rules
		if(flow == 'Enroll'){
			if (agevalue > 16) {
	       	 	frmEnrollWeighMember.txtDPTValue.placeholder = " ";
	   		} else {
	   		 	frmEnrollWeighMember.txtDPTValue.setEnabled(true);
	        	frmEnrollWeighMember.txtDPTValue.placeholder = kony.i18n.getLocalizedString("strEnterDPT");
	   		}
		}else{
			DptValue = com.es.weighincalculations.CalculateStatistics("DPT", parseFloat(strtwghtInKG), heightInMeters, ageval, gender);
			WPA = 0;
		}
		
	}
	callback.call(this, DptValue, WPA);
}

function formatDateTommddyyyy(date) {
    try {
    	 var ExpDate;
    	 if(deviceLocale == "fr_CA") {
            var splitExpDate = date.split('/');
        	ExpDate = splitExpDate[1] + "/" +splitExpDate[2] + "/" +splitExpDate[0];//** MEG 6386 2017/06/29
        } else {
            ExpDate = date;
        }
        return ExpDate;
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in date compare");
    }
}