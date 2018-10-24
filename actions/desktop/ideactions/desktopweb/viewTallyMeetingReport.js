function checkBoxToggle() {
    if (frmTallyMeetingReport.imgCheckBox.src == "icn_checkbox_checked.png") {
        frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_unchecked.png";
        frmTallyMeetingReport.btnSubmit.skin = "btnNoWeighInSelected";
        frmTallyMeetingReport.btnSubmit.setEnabled(false);
    } else {
        //Confirm Banks
        var messageToBeShown;
        if (parseInt(glbNumberOfBanks) === 1) {
            messageToBeShown = kony.i18n.getLocalizedString("strNumberOfOneBankConfirm");
        } else {
            messageToBeShown = (kony.i18n.getLocalizedString("strNumberOfBanksConfirm")).replace(/##/gi, glbNumberOfBanks); //"Are you sure you want to tally this meeting?",
        }
        var alertConfig = {
            message: messageToBeShown,
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: kony.i18n.getLocalizedString("strConfirm"),
            yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
            noLabel: kony.i18n.getLocalizedString("strLblNo"), // "No",
            alertHandler: function(response) {
                if (response == true) {
                    frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_checked.png";
                    frmTallyMeetingReport.btnSubmit.skin = "btnwwtxtSearchLocation";
                    frmTallyMeetingReport.btnSubmit.setEnabled(true);
                } else {
                    popupNumberOfBanks.hboxLabelUpdate.isVisible = true;
                    var context = {
                        "widget": kony.application.getCurrentForm().hbox1388753862500523,
                        "anchor": "top",
                        "sizetoanchorwidth": true
                    };
                    kony.print("::DJP::Opening glbNumberOfBanks=" + glbNumberOfBanks);
                    // if(checkValidString(glbNumberOfBanks))popupNumberOfBanks.pickerBanks.selectedKeys = [parseInt(glbNumberOfBanks)-1];
                    popupNumberOfBanks.setContext(context);
                    popupNumberOfBanks.show();
                    if (checkValidString(glbNumberOfBanks)) popupNumberOfBanks.pickerBanks.selectedKeys = [parseInt(glbNumberOfBanks) - 1];
                }
            }
        };
        var psConfig = {};
        var NumberOfBanksConfirmationAlert = kony.ui.Alert(alertConfig, psConfig);
    }
}

function navigateToTallyTimesheet() {
    frmTallyMeetingTimeSheet.show();
}

function onclickSubmitTallyReport() {
    if (frmTallyMeetingTimeSheet.segTimesheet.data != null) {
        if (frmTallyMeetingTimeSheet.segTimesheet.data.length > 0) {
            if (frmTallyMeetingReport.imgCheckBox.src == "icn_checkbox_checked.png") {
                boMeetings.closeTallyMeeting(closeTallyMeetingsuccess);
            } else {
                var alertConfig = {
                    message: kony.i18n.getLocalizedString("strmsgAcknowledgeTally"),
                    alertType: constants.ALERT_TYPE_INFO,
                    alertTitle: "",
                    yesLabel: kony.i18n.getLocalizedString("strLblOk")
                };
                var psConfig = {};
                var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
            }
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strmsgTallyTimesheetDetail"));
        }
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strmsgTallyTimesheetDetail"));
    }
}

function TallySuccessSyncCallback() {
    kony.print("glbMember-->" + glbMemberInMeeting);
    kony.print("show-meeting Type ID==>" + glbOpenHousMeetingObj.meetingTypeId);
    if (!isSelMeetingOpenHours && in_array(deviceLocale, Countries["CA"])) {
        popupStaffGuideline.txtGuideline.text = glbMemberInMeeting;
        popupStaffGuideline.show();
    }
}
//Added by Ami
function closeTallyMeetingsuccess(status) {
    if (status) {
        //Delete Insert Cashout data
        boTallyMeetingCashout.deleteInsertCashoutData(true);
        boTallyTimesSheet.deleteInsertTimeSheetData(true);
        boPreActivation.deletePendingActivationDataFromDB();
        boTallyMeetingReport.createTallySummary(createTallySummarysuccess);
    }
}
/*Commented by Ami
function closeTallyMeetingsuccess_old(status)
{
	if(status){
		boTallyMeetingReport.createTallySummary(createTallySummarysuccess);    	  
    }
}*/
function createTallySummarysuccess() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strAlertTallyReport"),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblOk"), // "Yes",
        alertHandler: TallyReportSyncCallback
    };
    var psConfig = {};
    var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function TallyReportSyncCallback() {
    if (checkIfNetworkIsAvailable()) {
        if (glbIsUserLoggedIn) {
            isFromTally = true;
            //boAuthentication.authenticateViaWSBeforeSync();
            getLastSyncDateBeforesyncStartSession();
        } else {
            frmLogin.show();
        }
    } else {
        var alertConfig = {
            message: kony.i18n.getLocalizedString("strTallyForceSyncMsg"),
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "",
            yesLabel: kony.i18n.getLocalizedString("strLblOk"), // "Yes",
            alertHandler: navigateToHomeScreen
        };
        var psConfig = {};
        var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
    }
}

function navigateToMeetingScreen() {
    frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_unchecked.png";
    frmTallyMeetingReport.btnSubmit.skin = "btnNoWeighInSelected";
    frmSelectMeeting.show();
}

function navigateToHomeScreen() {
    frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_unchecked.png";
    frmTallyMeetingReport.btnSubmit.skin = "btnNoWeighInSelected";
    frmSelectMeeting.show();
    TallySuccessSyncCallback();
    //frmHomeScreen.show();    
}

function DisplayTallyMettingReportData() {
    if (in_array(deviceLocale, Countries["CA"])) {
        frmTallyMeetingReport.hboxDebitCards.isVisible = true;
        frmTallyMeetingReport.hboxChecks.isVisible = false;
        frmTallyMeetingReport.hbox20WeekPass.isVisible = true;
        frmTallyMeetingReport.hboxSixMonthPass.isVisible = true;
        frmTallyMeetingReport.hboxMPactivated.isVisible = false;
        frmTallyMeetingReport.hbox3MpActivated.isVisible = false;
        frmTallyMeetingReport.hbox6MPactivated.isVisible = false;
        frmTallyMeetingReport.hboxSixMonthLTCPass.setVisibility(false);
        frmTallyMeetingReport.hbox6MPLTCactivated.setVisibility(false);
    } else {
        frmTallyMeetingReport.hboxDebitCards.isVisible = false;
        frmTallyMeetingReport.hboxChecks.isVisible = true;
        frmTallyMeetingReport.hbox20WeekPass.isVisible = false;
        frmTallyMeetingReport.hboxSixMonthPass.isVisible = true; //false;
        frmTallyMeetingReport.hboxMPactivated.isVisible = true;
        frmTallyMeetingReport.hbox3MpActivated.isVisible = true;
        frmTallyMeetingReport.hbox6MPactivated.isVisible = true;
        frmTallyMeetingReport.hboxSixMonthLTCPass.setVisibility(true);
        frmTallyMeetingReport.hbox6MPLTCactivated.setVisibility(true);
    }
    try {
        kony.print("--> DisplayTallyMettingReportData - hide show in out colum based on meetnig type");
        frmTallyMeetingReport.btnSubmit.setEnabled(false);
        frmPayment.btnCompleteProcessMember.skin = "btnNoWeighInSelected";
        frmTallyMeetingReport.imgCheckBox.src = "icn_checkbox_unchecked.png";
        if (in_array(deviceLocale, Countries["CA"]) && isSelMeetingOpenHours != true) {
            kony.print("--> trade meeting ");
            //change the header labels for break in and break out for CA - MEGCA-17 ,21
            frmTallyMeetingReport.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblHeaderTraineeName");
            frmTallyMeetingReport.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblHeaderMentor");
            frmTallyMeetingReport.lblHeaderTimeIn.setVisibility(false);
            frmTallyMeetingReport.lblHeaderTimeout.setVisibility(false);
            frmTallyMeetingReport.lblHeaderBreakIn.containerWeight = 24;
            frmTallyMeetingReport.lblHeaderBreakout.containerWeight = 24;
        } else {
            kony.print("--> open hours meeting  ");
            frmTallyMeetingReport.lblHeaderTimeIn.setVisibility(true);
            frmTallyMeetingReport.lblHeaderTimeout.setVisibility(true);
            frmTallyMeetingReport.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
            frmTallyMeetingReport.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
            frmTallyMeetingReport.lblHeaderBreakIn.containerWeight = 12;
            frmTallyMeetingReport.lblHeaderBreakout.containerWeight = 12;
        }
        boTallyMeetingReport.getRegion(null, null, DisplayTallyMettingReportSuccessCallback);

        function DisplayTallyMettingReportSuccessCallback(status, result) {
            if (status) {
                kony.print("Meeting date is before: " + glbMeetingDate);
                var localmeetingtime = glbMeetingDate;
                localmeetingtime = localmeetingtime.split("T")[0];
                kony.print("localmeetingtime1: " + localmeetingtime);
                localmeetingtime = formattedDate(glbMeetingDate);
                kony.print("localmeetingtime2: " + localmeetingtime);
                var MeetingDate = new Date(localmeetingtime);
                kony.print("MeetingDate: " + MeetingDate);
                var dd = MeetingDate.getDate();
                var mm = MeetingDate.getMonth() + 1;
                var yyyy = MeetingDate.getFullYear();
                var dateData;
                if (deviceLocale == "fr_FR") {
                    dateData = dd + "/" + mm + "/" + yyyy;
                } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
                {
                    dateData = mm + "/" + dd + "/" + yyyy;
                }
                frmTallyMeetingReport.lblECCMemberResult.text = glbTotalMemberAtRisk;
                frmTallyMeetingReport.lblTitle.text = getLocalizedString("strLblTallyMeeting") + glbCurrentMeetingValue + " " + changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat")) + " -- " + getLocalizedString("strLblTallyReportAndSignOff"); //** MEG 6386
                frmTallyMeetingReport.lblLocationNo.text = glbLocationNum;
                frmTallyMeetingReport.lblLocationName.text = result["TallyLocationName"];
                frmTallyMeetingReport.lblRegion.text = result["TallyRegion"];
                frmTallyMeetingReport.lblMeetingDate.text = changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
                frmTallyMeetingReport.lblMeetingTime.text = gblMeetingSelected;
                var EmpDetail = result["TallyEmployees"];
                frmTallyMeetingReport.segTimesheet.removeAll();
                frmTallyMeetingReport.segTimesheet.data = EmpDetail;
                frmTallyMeetingReport.lblCurrentAttendanceNo.text = result["Section2NumOfTotalCurrentAttd"];
                frmTallyMeetingReport.lblCurrentAttendanceAmount.text = addDollar(parseFloat(result["Section2SumOfTotalCurrentAttd"]).toFixed(2));
                frmTallyMeetingReport.lblMissedWeekAttendanceNo.text = result["Section2NumOfMissedWKCurrAttd"];
                frmTallyMeetingReport.lblMissedWeekAttendanceAmount.text = addDollar(parseFloat(result["Section2SumOfMissedWKCurrAttd"]).toFixed(2));
                frmTallyMeetingReport.lblEnrollmentsNo.text = result["Section2NumOfEnrollPayg"];
                frmTallyMeetingReport.lblEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfEnrollPayg"]).toFixed(2));
                frmTallyMeetingReport.lblPaidLifeTimeNo.text = result["Section2NumOfPaidLTAttandance"];
                frmTallyMeetingReport.lblPaidLifeTimeAmount.text = addDollar(parseFloat(result["Section2SumOfPaidLTAttandance"]).toFixed(2));
                frmTallyMeetingReport.lblPrepaidAttendanceNo.text = result["Section2NumOfPrepaidAttd"];
                if (in_array(deviceLocale, Countries["CA"])) { // Added for MEGCA-13
                    frmTallyMeetingReport.hboxMPLTAttendance.setVisibility(true);
                    frmTallyMeetingReport.lblMonthlyPassLTAttendanceNo.text = result["Section2NumOfMonthlyPassLTAttd"];
                } else {
                    frmTallyMeetingReport.hboxMPLTAttendance.setVisibility(false);
                }
                frmTallyMeetingReport.lblFreelifetimeNo.text = result["Section2NumOfFreeLTAttandance"];
                frmTallyMeetingReport.lblTotalMemberFeesTotal.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
                frmTallyMeetingReport.lblPaidAttendanceTotal.text = result["Section2TotalPaidAttandace"];
                frmTallyMeetingReport.lblTotalMemberAttendanceTotal.text = result["Section2TotalMemberAttandace"];
                if (in_array(deviceLocale, Countries["CA"])) { // Added for MEG-5568
                    frmTallyMeetingReport.hbox186678699640870.setVisibility(false);
                } else {
                    frmTallyMeetingReport.hbox186678699640870.setVisibility(true);
                    frmTallyMeetingReport.lblEmpAttendance.text = result['Section2NumEmpAttendance'];
                }
                frmTallyMeetingReport.lblNoPrepaidCoupRedeem.text = result["Section3NumPrePaidCoupons"];
                frmTallyMeetingReport.lblMemberStayingfrMeeting.text = result["Section3MembersAttMeeting"];
                frmTallyMeetingReport.lbl5perTarget.text = result["Section3NumOfMembersReached5"];
                frmTallyMeetingReport.lbl10perTarget.text = result["Section3NumOfMembersReached10"];
                frmTallyMeetingReport.lblWeightGoal.text = result["Section3NumOfMembersReachedWeighGoal"];
                frmTallyMeetingReport.lblReachingLifetime.text = result["Section3NumOfMembersReachedLifetime"];
                frmTallyMeetingReport.lblMonthlyPassesSold.text = result["Section3NumMonthlyPassSold"];
                frmTallyMeetingReport.lbl3MonthPass.text = result["Section3Num3MonthPassSold"];
                frmTallyMeetingReport.lbl20WeekPasses.text = result["Section3Num20weekPassSold"]; // MEGCA-8
                frmTallyMeetingReport.lblMembersLosingWeight.text = result["Section3NumOfMembersWeightLossMeeting"];
                frmTallyMeetingReport.lblTotalWeightLoss.text = result["Section3SumOfMembersWeightLossMeeting"].toFixed(1) + " " + UnitText; // Dileep Chejerla - MEG-2773
                frmTallyMeetingReport.lbl6MonthPass.text = result["Section3Num6MonthPassSold"]; // MEGCA-301
                frmTallyMeetingReport.lblMPactivecount.text = result["Section3NumMPsActivationSold"]; // MEG - 5414
                kony.print("::Section3NumMPsActivationSold" + result["Section3NumMPsActivationSold"]);
                kony.print("::Section3NumThreeMPsActivationSold" + result["Section3NumThreeMPsActivationSold"]);
                frmTallyMeetingReport.lblThreeMPactiveCount.text = result["Section3NumThreeMPsActivationSold"];
                kony.print("::Section3NumSixMPsActivationSold" + result["Section3NumSixMPsActivationSold"]);
                frmTallyMeetingReport.lblSixMPactiveCount.text = result["Section3NumSixMPsActivationSold"];
                frmTallyMeetingReport.lblMemberFees.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
                frmTallyMeetingReport.lblPrepaymentSales.text = addDollar(parseFloat(result["Section4PrepaymentSales"]).toFixed(2));
                frmTallyMeetingReport.lblProductSales.text = addDollar(parseFloat(result["Section4ProductSales"]).toFixed(2));
                frmTallyMeetingReport.lblProductReturns.text = addDollar(parseFloat(result["Section4ProductReturns"]).toFixed(2));
                frmTallyMeetingReport.lblEmployeeSales.text = addDollar(parseFloat(result["Section4EmployeeSales"]).toFixed(2));
                frmTallyMeetingReport.lblSalesTax.text = addDollar(parseFloat(result["Section4SalesTax"]).toFixed(2));
                frmTallyMeetingReport.lblTotalSales.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));
                frmTallyMeetingReport.lblPaymentSummary.text = kony.i18n.getLocalizedString("strTallyReportSectionPaymentSummary") + " -- " + changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//Dileep Chejerla: MEG-2677
                frmTallyMeetingReport.lblCashLeaderCheck.text = addDollar(parseFloat(result["Section5Cash"]).toFixed(2));
                frmTallyMeetingReport.lblMemberchecks.text = addDollar(parseFloat(result["Section5Check"]).toFixed(2));
                frmTallyMeetingReport.lblTotalPayementSummary.text = addDollar(parseFloat(result["Section5BankDeposit"]).toFixed(2));
                frmTallyMeetingReport.lblDepositSlipNumber.text = result["Section5DipositeTicket"];
                frmTallyMeetingReport.lblCreditCards.text = addDollar(parseFloat(result["Section5CreditCard"]).toFixed(2));
                frmTallyMeetingReport.lblCreditSlipsIssued.text = addDollar(parseFloat(result["Section5CreditSlipsIssued"]).toFixed(2));
                frmTallyMeetingReport.lblCreditSlipsRedeemed.text = addDollar(parseFloat(result["Section5CreditSlipsRedeemed"]).toFixed(2));
                frmTallyMeetingReport.lblTotalCredit.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));
                frmTallyMeetingReport.lblDebitCard.text = addDollar(parseFloat(result["Section5DebitCard"]).toFixed(2));
                frmTallyMeetingReport.lblTotalPayementsOver.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));
                frmTallyMeetingReport.lblTotalSaleOver.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));
                frmTallyMeetingReport.lblOverUnder.text = addDollar(parseFloat(result["Section6OverUnder"]).toFixed(2));
                frmTallyMeetingReport.lblReason.text = result["Section5Reason"];
                frmTallyMeetingReport.lbl6MonthLTCPass.text = result["Section3Num6MonthLTCPassSold"];
                frmTallyMeetingReport.lblSixMPLTCactiveCount.text = result["Section3NumSixMPsLTCActivationSold"];
                // MEGCA-35 - Show/Hide Subtract Product returns hbox, if App setting Enable/Disable            	
                if (checkAppSettingEnable(Settings["SR"])) {
                    frmTallyMeetingReport.hbox1388753862464206.setVisibility(true);
                } else {
                    frmTallyMeetingReport.hbox1388753862464206.setVisibility(false);
                }
                if (parseFloat(result["Section6OverUnder"]) == 0.00) {
                    frmTallyMeetingReport.hboxReason.setVisibility(false);
                    frmTallyMeetingReport.hboxTotalOver.setVisibility(false);
                    frmTallyMeetingReport.hboxTotalPayment.setVisibility(false);
                    frmTallyMeetingReport.hboxTotalSales.setVisibility(false);
                    frmTallyMeetingReport.hboxSectionVII.setVisibility(false);
                    frmTallyMeetingReport.lineSectionVII.setVisibility(false);
                } else {
                    frmTallyMeetingReport.hboxReason.setVisibility(true);
                    frmTallyMeetingReport.hboxTotalOver.setVisibility(true);
                    frmTallyMeetingReport.hboxTotalPayment.setVisibility(true);
                    frmTallyMeetingReport.hboxTotalSales.setVisibility(true);
                    frmTallyMeetingReport.hboxSectionVII.setVisibility(true);
                    frmTallyMeetingReport.lineSectionVII.setVisibility(true);
                }
            }
        }
    } catch (e) {
        GlobalException(e);
    }
}