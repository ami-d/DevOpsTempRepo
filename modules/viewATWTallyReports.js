// JS for viewATWTallyReport

/** MEG 5827
 * This Function is called on clicking the meetingtime selection, this opens the meeting time popup.
 */
function onClickATWvboxMeetingsReport() {

    
        if (frmATWTallyReports.lblHdrMeetingDatePopup.text == kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate")) {
            alertForMessages(kony.i18n.getLocalizedString("strTallyReportSelectDate"));
        } else {
            var context1 = {
                "widget": frmATWTallyReports.vboxMeetingsPopup,
                "anchor": "bottom",
                "sizetoanchorwidth": false
            };
            popupCurrentMeeting.setContext(context1);
            kony.print("::DJP::popupCurrentMeeting.segMeetingList=" + JSON.stringify(popupCurrentMeeting.segMeetingList.data));
            if (popupCurrentMeeting.segMeetingList && popupCurrentMeeting.segMeetingList.data && popupCurrentMeeting.segMeetingList.data.length > 0) {
                popupCurrentMeeting.show();
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strNoMeetingFoundTallyReport"));
            }
        }
   

}
//** End


//** MEG 5287
function onSelectATWTallyReportsRow() {
    //Clear the data
  	kony.print("onSelectATWTallyReportsRow ");
    popupTallyReportOptions.dismiss();
    boTallyMeetingReport.clearTallyVariables();
    //frmATWTallyReports.hboxAtRiskMembers.setVisibility(false);
    var lblCompare = false;
    
    if (frmATWTallyReports.lblHdrMeetingDatePopup.text != kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate")) {
         lblCompare = true;
    }
   kony.print("onSelectATWTallyReportsRow lblCompare" + lblCompare);
    //if(frmTallyReports.lblHdrMeetingDate.text != kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate")){
    if (lblCompare) {
    	frmATWTallyReports.hboxMemberMilestone.setVisibility(false);
    	frmATWTallyReports.hboxProductSale.setVisibility(false);
        frmATWTallyReports.hboxEmployeeSale.setVisibility(false);
        frmATWTallyReports.hboxProductReturn.setVisibility(false);
        
        frmATWTallyReports.hboxMainContainer.setVisibility(false);
       // frmATWTallyReports.hboxAtRiskMembers.setVisibility(false); // Added for MEGCA-96
        displayProgressView();
        var lblCurrMeetingCompare = false;
        
        if (checkValidString(frmATWTallyReports.lblCurrMeetingInfoPopup.text) && frmATWTallyReports.lblCurrMeetingInfoPopup.text != kony.i18n.getLocalizedString("strTallyReportSelectmeeting")) {
            lblCurrMeetingCompare = true
        }
       
 	kony.print("onSelectATWTallyReportsRow lblCurrMeetingCompare" + lblCurrMeetingCompare);
        //if(checkValidString(frmTallyReports.lblCurrMeetingInfo.text) && frmTallyReports.lblCurrMeetingInfo.text != kony.i18n.getLocalizedString("strTallyReportSelectmeeting")){
        if (lblCurrMeetingCompare) {
            
            var option = popupTallyReportOptions.tallyReportActionsSegment.selectedIndex[1];
            kony.print("onSelectATWTallyReportsRow option" + option);
           	frmATWTallyReports.lblselectReportType.text = popupTallyReportOptions.tallyReportActionsSegment.selectedItems[0]["lblActionItem"];
			
			
            if (option == 0) {
                
                //For Device Tally Limit the date to One Month
                
                if (!(isReportViewEnding(selectedTallyReportMeetingDate))) {
                	frmATWTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMeetingReports");
                    checkIfMeetingIsClosedAndPresentInDevice();
                }
            } else if (option == 1) { //if(frmTallyReports.cmbTallyTab.selectedKey == "meetingtally"){
                frmATWTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMeetingReports");
                loadMeetingTallyDataReport();
            } else if (option == 2) {
            	if (!(isReportViewEnding(selectedTallyReportMeetingDate))) {
            		frmATWTallyReports.lblTitle.text = getLocalizedString("strLblAttendanceAndSale");
                	getMemberAttendanceAndMilestoneData();
                }
            } /*else if (option == 3) {
                frmATWTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMemberAtRiskLog");
                loadMemberAtRiskDataReport();
            }*/
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strTallyReportPleaseSelectMeeting"));
            resetComboTallyReports();
            removeProgressView();
            return;
        }
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strTallyreportSelectDateTime"));
        resetComboTallyReports();
    }
}
//** End

/**MEG 5827
 * Called on Post Show - Set Header Section and Resets ComboBox 
 * @returns {} 
 */
function onPostShowATWTallyReports() {

    
        frmATWTallyReports.hboxChecks.isVisible = true;
        frmATWTallyReports.lblHeaderBreakIn.containerWeight = 12;
        frmATWTallyReports.lblHeaderBreakout.containerWeight = 12;
        frmATWTallyReports.lblTitle.text = kony.i18n.getLocalizedString("strMeetingReports"); // Added for MEGCA-96

        kony.print(" -----> opn ehours meting ");
        frmATWTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
        frmATWTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
        frmATWTallyReports.lblHeaderTimeIn.setVisibility(true);
        frmATWTallyReports.lblHeaderTimeout.setVisibility(true);
    
    
        frmATWTallyReports.lblselectReportType.text = kony.i18n.getLocalizedString("strSelectReportType");
        frmATWTallyReports.hboxTallyHeaderPopup.setVisibility(true);
        
        
        frmATWTallyReports.hboxMemberMilestone.setVisibility(false);
        frmATWTallyReports.hboxProductSale.setVisibility(false);
        frmATWTallyReports.hboxEmployeeSale.setVisibility(false);
        frmATWTallyReports.hboxProductReturn.setVisibility(false);
    
    if (kony.application.getPreviousForm().id != frmSelectMeeting.id && kony.application.getPreviousForm().id != frmATWTallyReports.id && kony.application.getPreviousForm().id != frmTallyReports.id ) {//**7180

        kony.print("-->onPostShowTallyReports - hide show in out colum based on meetnig type");
       
        frmATWTallyReports.lblHdrMeetingDatePopup.text = kony.i18n.getLocalizedString("strTallyReportSelectMeetingDate"); // Added for MEGCA-96
       
        frmATWTallyReports.lblCurrMeetingInfoPopup.text = kony.i18n.getLocalizedString("strTallyReportSelectmeeting");

       
        frmATWTallyReports.hboxMainContainer.setVisibility(false);
        if (popupCurrentMeeting.segMeetingList != null) {
            if (popupCurrentMeeting.segMeetingList.data != undefined || popupCurrentMeeting.segMeetingList.data != null) {
                popupCurrentMeeting.segMeetingList.removeAll();
            }
        }
    }
    showLocationDetailsInHeader();
  	kony.print("navigateForm " +navigateForm);
  	if(navigateForm)
    {
     	var CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems;
        kony.print("SubTypeKeyValues----->>>>" + JSON.stringify(CurrMeetingKeyValues));
        onSelectMeetingForTallyReport(CurrMeetingKeyValues);
    }
}

//**ENd


//** Meetingtally data bind function
function setDataToReportATWTally(status, result) {
    kony.print("::DJP::Report::Local setDataToReportATWTally :: " + JSON.stringify(result));
    kony.print("::ABA::Meetingtally popupCurrentMeeting.segMeetingList=" + JSON.stringify(popupCurrentMeeting.segMeetingList.selectedItems));


    if (status) {
        kony.print("selected meeting ############################: " + selectedTallyReportMeetingDate);
        kony.print("Meeting date is before: " + glbMeetingDate);
        var MeetingDate = selectedTallyReportMeetingDate;
        kony.print("MeetingDate: " + MeetingDate);
        kony.print("##################################" + MeetingDate);
        var dd = MeetingDate.getDate();
        kony.print("ddd   ##################################" + dd);
        var mm = MeetingDate.getMonth() + 1;
        var yyyy = MeetingDate.getFullYear();
        var dateData;
        if (deviceLocale != "fr_FR") {
            dateData = mm + "/" + dd + "/" + yyyy;
        } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
        {
            dateData = dd + "/" + mm + "/" + yyyy;
        }

		//**MEG 7233
      	var CurrMeetingKeyValues = [];
           
      	kony.print("glbMeetingNum " + glbMeetingNum);
      	if(!checkValidString(popupCurrentMeeting.segMeetingList.selectedItems))
          {
            _.each(popupCurrentMeeting.segMeetingList.data,function(v){
              	kony.print("v "+JSON.stringify(v));
                kony.print("v.meetingNum "+JSON.stringify(v.meetingNum));
              
             	if(v.meetingNum == glbMeetingNum)
                {	 kony.print("v "+JSON.stringify(v));
             	     CurrMeetingKeyValues.push(v);
                }
            });
          }else
            {
              CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems; //** MEG 7233
            }
      	kony.print("CurrMeetingKeyValues " + JSON.stringify(CurrMeetingKeyValues));
		frmATWTallyReports.lblHdrSeriesText.text = checkValidString(CurrMeetingKeyValues[0].SeriesNo) ? CurrMeetingKeyValues[0].SeriesNo : 0 ; //** 7261//**MEG 7233
      	frmATWTallyReports.lblHdrRenewalText.text = checkValidString(CurrMeetingKeyValues[0].RenewalNo) ? CurrMeetingKeyValues[0].RenewalNo : 0; //**MEG 7233
     	//frmATWTallyReports.lblHdrWeekText.text = CurrMeetingKeyValues[0].SeriesCompMeetings; //**MEG 7233
     	frmATWTallyReports.lblHdrStartDateText.text = formattedDate(CurrMeetingKeyValues[0].StartDate); //**MEG 7233
      	//** End
      	kony.print("result[WeekNo] " + result["WeekNo"]);
      	frmATWTallyReports.lblHdrWeekText.isVisible = true;
      	frmATWTallyReports.lblHdrWeek.isVisible = true;
        frmATWTallyReports.lblHdrWeekText.text = checkValidString(result["WeekNo"]) ? result["WeekNo"] : 0; //**MEG 7233
      
        frmATWTallyReports.lblLocationNo.text = glbLocationNum;
        frmATWTallyReports.lblLocationName.text = result["TallyLocationName"];
        frmATWTallyReports.lblRegion.text = result["TallyRegion"];
        frmATWTallyReports.lblMeetingDate.text = changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
        frmATWTallyReports.lblMeetingTime.text = selectedTallyReportMeetingTime;
       
        frmATWTallyReports.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
        frmATWTallyReports.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
        
        var EmpDetail = result["TallyEmployees"];
        if (EmpDetail.length > 0) {
            frmATWTallyReports.segTimesheet.removeAll();
            frmATWTallyReports.segTimesheet.data = EmpDetail;
        }
     
        frmATWTallyReports.lblNoPrepaidCoupRedeem.text = result["Section3NumPrePaidCoupons"];
        frmATWTallyReports.lblMemberStayingfrMeeting.text = result["Section3MembersAttMeeting"];
        frmATWTallyReports.lbl5perTarget.text = result["Section3NumOfMembersReached5"];
        frmATWTallyReports.lbl10perTarget.text = result["Section3NumOfMembersReached10"];
        frmATWTallyReports.lblWeightGoal.text = result["Section3NumOfMembersReachedWeighGoal"];
        frmATWTallyReports.lblReachingLifetime.text = result["Section3NumOfMembersReachedLifetime"];
        frmATWTallyReports.lblMemLossWeight.text = result["Section3NumOfMembersWeightLossMeeting"];
       
        frmATWTallyReports.lblTotalWeightLoss.text = result["Section3SumOfMembersWeightLossMeeting"].toFixed(1) + " " + UnitText; // Dileep Chejerla - MEG-2773
        kony.print("Section4MemberFees=" + result["Section4MemberFees"]);
        if (checkValidString(result["Section4MemberFees"])) {
            kony.print("::11");
            frmATWTallyReports.lblMemberFees.text = addDollar(parseFloat(result["Section4MemberFees"]).toFixed(2));
        } else {
            kony.print("::22");
            frmATWTallyReports.lblMemberFees.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
        }
        kony.print("::33");
        frmATWTallyReports.lblPrepaymentSales.text = addDollar(parseFloat(result["Section4PrepaymentSales"]).toFixed(2));
        frmATWTallyReports.lblProductSales.text = addDollar(parseFloat(result["Section4ProductSales"]).toFixed(2));
        frmATWTallyReports.lblProductReturns.text = addDollar(parseFloat(result["Section4ProductReturns"]).toFixed(2));
        frmATWTallyReports.lblEmployeeSales.text = addDollar(parseFloat(result["Section4EmployeeSales"]).toFixed(2));
        frmATWTallyReports.lblSalesTax.text = addDollar(parseFloat(result["Section4SalesTax"]).toFixed(2));
        //frmATWTallyReports.lblTotalSales.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2)); 
        frmATWTallyReports.lblTotalSales.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));//** removed subsidy as we are gettin git from response//** MEG 7234

       
        frmATWTallyReports.lblCashLeaderCheck.text = addDollar(parseFloat(result["Section5Cash"]).toFixed(2));
        frmATWTallyReports.lblMemberchecks.text = addDollar(parseFloat(result["Section5Check"]).toFixed(2));
       
        frmATWTallyReports.lblCreditCards.text = addDollar(parseFloat(result["Section5CreditCard"]).toFixed(2));
       
        frmATWTallyReports.lblCreditSlipsIssued.text = addDollar(parseFloat(result["Section5CreditSlipsIssued"]).toFixed(2));
        frmATWTallyReports.lblCreditSlipsRedeemed.text = addDollar(parseFloat(result["Section5CreditSlipsRedeemed"]).toFixed(2));
        frmATWTallyReports.lblTotalCredit.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));

        frmATWTallyReports.lblTotalPayementsOver.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));
        frmATWTallyReports.lblTotalSaleOver.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));
        frmATWTallyReports.lblOverUnder.text = addDollar(parseFloat(result["Section6OverUnder"]).toFixed(2));
        frmATWTallyReports.lblReason.text = result["Section5Reason"];
      
     kony.print("Section5DipositSlip1 "+ result["Section5DipositSlip1"] );
      
      kony.print("Section5DipositSlip2 "+ result["Section5DipositSlip2"] );
      kony.print("Section5DipositSlip3 "+ result["Section5DipositSlip3"] );
      if(result["Section5DipositSlip1"] && result["Section5DipositSlip1"].length >0)
          {
            	frmATWTallyReports.hboxATWDepositOne.isVisible = true;
          }else
            {
               	frmATWTallyReports.hboxATWDepositOne.isVisible = false;
            }
      	if(result["Section5DipositSlip2"] && result["Section5DipositSlip2"].length >0)
          {
            	frmATWTallyReports.hboxATWDepositTwo.isVisible = true;
          }else
            {
               	frmATWTallyReports.hboxATWDepositTwo.isVisible = false;
            }
      	if(result["Section5DipositSlip3"] && result["Section5DipositSlip3"].length >0)
          {
            	frmATWTallyReports.hboxATWDepositThree.isVisible = true;
          }else
            {
               	frmATWTallyReports.hboxATWDepositThree.isVisible = false;
            }	      

        ///******* NEED TO BE MAPPED FROM SERVICE AFTER SERVICE CHANGE
        
  				
        
                frmATWTallyReports.lblNewEnrollmentsNo.text = result["Section2NumOfNewEnrollments"];
                frmATWTallyReports.lblNewEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfNewEnrollments"]).toFixed(2));
                frmATWTallyReports.lblNewEnrollmentsSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfNewEnrollments"]).toFixed(2));
                
                frmATWTallyReports.lblContEnrollmentsNo.text = result["Section2NumOfContEnrollments"];
                frmATWTallyReports.lblContEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfContEnrollments"]).toFixed(2));
                frmATWTallyReports.lblContEnrollmentsSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfContEnrollments"]).toFixed(2));
              
                frmATWTallyReports.lblPaidLTNo.text = result["Section2NumOfPaidLTAttandance"];
                frmATWTallyReports.lblPaidLTAmount.text = addDollar(parseFloat(result["Section2SumOfPaidLTAttandance"]).toFixed(2));
                frmATWTallyReports.lblPaidLTSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfPaidLT"]).toFixed(2));
              
                frmATWTallyReports.lblFreeLTNo.text = result["Section2NumOfFreeLTAttandance"];
                frmATWTallyReports.lblFreeLTAmount.text = addDollar(parseFloat(0).toFixed(2));
                frmATWTallyReports.lblFreeLTSubsidy.text = addDollar(parseFloat(0).toFixed(2));
              	
      			// **MEG 7313
      			if(IsInfoSessionMeeting()){
                  	frmATWTallyReports.hboxPreRegistered.setVisibility(true);
                  	frmATWTallyReports.lblPreRegCount.text = result["Section2PreRegMemberCount"];
                  	frmATWTallyReports.hboxPreRegistered.skin = "hboxLightGrey"; //noSkinHBox
               		frmATWTallyReports.hbox0430d69c9184041.skin = "noSkinHBox";
                	frmATWTallyReports.hbox0937eb6c05ddf44.skin = "hboxLightGrey";
                    frmATWTallyReports.lblHdrWeekText.text = 0; //MEG-7347
                    frmATWTallyReports.lblHdrRenewalText.text = 0; //MEG-7347                  
                    frmATWTallyReports.lblHdrSeriesText.text = 0; //MEG-7347
                }else{
                  	frmATWTallyReports.hboxPreRegistered.setVisibility(false);
                  	//frmATWTallyMeetingReport.hboxPreRegistered.skin = "hboxLightGrey"; //noSkinHBox
               		frmATWTallyReports.hbox0430d69c9184041.skin = "hboxLightGrey";
                	frmATWTallyReports.hbox0937eb6c05ddf44.skin = "noSkinHBox";
                }
      			//** END 7313
      
                /* MEG-7153
                frmATWTallyReports.lblPrePaidNo.text = result["Section2NumOfPrepaidAttd"];
                frmATWTallyReports.lblPrePaidAmount.text = addDollar(parseFloat(0).toFixed(2));
                frmATWTallyReports.lblPrePaidSubsidy.text = addDollar(parseFloat(0).toFixed(2));
              	*/
      			frmATWTallyReports.lblPrePaidNo.text = result["Section2NumOfPrepaidAttd"];
      			frmATWTallyReports.lblPrePaidAmount.text = addDollar(parseFloat(result["Section2SumOfPrepaidAttd"]).toFixed(2));
                frmATWTallyReports.lblPrePaidSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfPrepaid"]).toFixed(2));
      
                frmATWTallyReports.lblEmployeeNo.text = result["Section2NumEmpAttendance"];
                frmATWTallyReports.lblEmployeeAmount.text = addDollar(parseFloat(0).toFixed(2));
                frmATWTallyReports.lblEmployeeSubsidy.text = addDollar(parseFloat(0).toFixed(2));
                
                frmATWTallyReports.lblTotalMemberTotal.text = result["Section2TotalMemberAttandace"];
                frmATWTallyReports.lblPaidTotal.text = result["Section2TotalPaidAttandace"];
                frmATWTallyReports.lblTotalFeesTotal.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
                frmATWTallyReports.lblTotalSubsidyTotal.text = addDollar(parseFloat(result["Section2TotalSubsidyAmt"]).toFixed(2));
    
                frmATWTallyReports.lblFutureAmtDue.text = addDollar(parseFloat(result["Section2TotalSubsidyAmt"]).toFixed(2));
              
                frmATWTallyReports.lblDepositDateOne.text = result["Section5DipositDate1"];
                frmATWTallyReports.lblDepositDateTwo.text = result["Section5DipositDate2"];
                frmATWTallyReports.lblDepositDateThree.text = result["Section5DipositDate3"];
                frmATWTallyReports.lblDepositSlipOne.text = result["Section5DipositSlip1"];
                frmATWTallyReports.lblDepositSlipTwo.text = result["Section5DipositSlip2"];
                frmATWTallyReports.lblDepositSlipThree.text = result["Section5DipositSlip3"];
                frmATWTallyReports.lblDepositAmtOne.text = addDollar(parseFloat(result["Section5DipositAmount1"]).toFixed(2));
                frmATWTallyReports.lblDepositAmtTwo.text = addDollar(parseFloat(result["Section5DipositAmount2"]).toFixed(2));
                frmATWTallyReports.lblDepositAmtThree.text = addDollar(parseFloat(result["Section5DipositAmount3"]).toFixed(2));
    



        if (parseFloat(result["Section6OverUnder"]) == 0.00) {
            frmATWTallyReports.hboxReason.setVisibility(false);
            frmATWTallyReports.hboxTotalOver.setVisibility(false);
            frmATWTallyReports.hboxTotalPayment.setVisibility(false);
            frmATWTallyReports.hboxTotalSales.setVisibility(false);
            frmATWTallyReports.hboxSectionVII.setVisibility(false);
            frmATWTallyReports.lineSectionVII.setVisibility(false);
        } else {
            frmATWTallyReports.hboxReason.setVisibility(true);
            frmATWTallyReports.hboxTotalOver.setVisibility(true);
            frmATWTallyReports.hboxTotalPayment.setVisibility(true);
            frmATWTallyReports.hboxTotalSales.setVisibility(true);
            frmATWTallyReports.hboxSectionVII.setVisibility(true);
            frmATWTallyReports.lineSectionVII.setVisibility(true);
        }
        removeProgressView();
        frmATWTallyReports.hboxMainContainer.setVisibility(true);
    } else {
        resetComboTallyReports();
        removeProgressView();
    }

}
//** END

//**MEG 5827
//*** Devicetally data bind function
function DisplayATWTallyReportDataSuccessCallback(status, result) {
  kony.print("DisplayATWTallyReportDataSuccessCallback result " + JSON.stringify(result));
  kony.print("::ABA::popupCurrentMeeting.segMeetingList=" + JSON.stringify(popupCurrentMeeting.segMeetingList.data));

    if (status) {
      
        /*kony.print("Meeting date is before: " + glbMeetingDate);
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
        var dateData = mm + "/" + dd + "/" + yyyy;*/
      
        if(result["Section5DipositSlip1"] && result["Section5DipositSlip1"].length >0)
          {
            	frmATWTallyReports.hboxATWDepositOne.isVisible = true;
          }else
            {
               	frmATWTallyReports.hboxATWDepositOne.isVisible = false;
            }
      	if(result["Section5DipositSlip2"] && result["Section5DipositSlip2"].length >0)
          {
            	frmATWTallyReports.hboxATWDepositTwo.isVisible = true;
          }else
            {
               	frmATWTallyReports.hboxATWDepositTwo.isVisible = false;
            }
      	if(result["Section5DipositSlip3"] && result["Section5DipositSlip3"].length >0)
          {
            	frmATWTallyReports.hboxATWDepositThree.isVisible = true;
          }else
            {
               	frmATWTallyReports.hboxATWDepositThree.isVisible = false;
            }
      
      	//frmATWTallyReports.lblTitle.text = getLocalizedString("strLblTallyMeeting") + glbCurrentMeetingValue + " " + changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat")) + " -- " + getLocalizedString("strLblTallyReportAndSignOff");//** MEG 6386
		//** MEG 7233
      	var CurrMeetingKeyValues = [];
           
      	kony.print("glbMeetingNum " + glbMeetingNum);
      	if(!checkValidString(popupCurrentMeeting.segMeetingList.selectedItems))
          {
            _.each(popupCurrentMeeting.segMeetingList.data,function(v){
              	kony.print("v "+JSON.stringify(v));
                kony.print("v.meetingNum "+JSON.stringify(v.meetingNum));
              
             	if(v.meetingNum == glbMeetingNum)
                {	 kony.print("v "+JSON.stringify(v));
             	     CurrMeetingKeyValues.push(v);
                }
            });
          }else
            {
              CurrMeetingKeyValues = popupCurrentMeeting.segMeetingList.selectedItems; //** MEG 7233
            }
		kony.print("CurrMeetingKeyValues " + JSON.stringify(CurrMeetingKeyValues));
      	frmATWTallyReports.lblHdrSeriesText.text = checkValidString(CurrMeetingKeyValues[0].SeriesNo) ? CurrMeetingKeyValues[0].SeriesNo : 0; //** 7261 //**MEG 7233
      	frmATWTallyReports.lblHdrRenewalText.text = checkValidString(CurrMeetingKeyValues[0].RenewalNo) ? CurrMeetingKeyValues[0].RenewalNo : 0; //**MEG 7233
     	//frmATWTallyReports.lblHdrWeekText.text = CurrMeetingKeyValues[0].SeriesCompMeetings; //**MEG 7233
     	frmATWTallyReports.lblHdrStartDateText.text = formattedDate(CurrMeetingKeyValues[0].StartDate); //**MEG 7233
      	//** End
      	frmATWTallyReports.lblHdrWeekText.isVisible = false;
      	frmATWTallyReports.lblHdrWeek.isVisible = false;
      /*
         boMeetings.getWeekNoForSelectedAtWorkMeeting(CurrMeetingKeyValues[0].meetingNum,function(WeekNo) {
           			kony.print("boMeetings.getWeekNoForSelectedAtWorkMeeting " + WeekNo);
            		frmATWTallyReports.lblHdrWeekText.text = WeekNo; //**MEG 7233
         	 });*/
      //** DateTime NAN issue when gbl values are not set
      	kony.print("Meeting date is before: " + glbMeetingDate);
      	var localmeetingtime = glbMeetingDate;
      	if(!checkValidString(glbMeetingDate))
        {
          localmeetingtime = CurrMeetingKeyValues[0].meetingDate;
        }  
        localmeetingtime = localmeetingtime.split("T")[0];
        kony.print("localmeetingtime1: " + localmeetingtime);
        localmeetingtime = formattedDate(glbMeetingDate);
      	if(!checkValidString(glbMeetingDate))
        {
          localmeetingtime = formattedDate(CurrMeetingKeyValues[0].meetingDate);
        }
        kony.print("localmeetingtime2: " + localmeetingtime);
        
        var MeetingDate = new Date(localmeetingtime);
        kony.print("MeetingDate: " + MeetingDate);
        var dd = MeetingDate.getDate();
        var mm = MeetingDate.getMonth() + 1;
        var yyyy = MeetingDate.getFullYear();
        var dateData = mm + "/" + dd + "/" + yyyy;
      
      
        frmATWTallyReports.lblLocationNo.text = glbLocationNum;
        frmATWTallyReports.lblLocationName.text = result["TallyLocationName"];
        frmATWTallyReports.lblRegion.text = result["TallyRegion"];
        frmATWTallyReports.lblMeetingDate.text = changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
        //** DateTime NAN issue when gbl values are not set
      	if(!checkValidString(gblMeetingSelected))
        {
          localmeetingtime = CurrMeetingKeyValues[0].meetingTime;
        }else
        {
          frmATWTallyReports.lblMeetingTime.text = gblMeetingSelected;
        }

        var EmpDetail = result["TallyEmployees"];
        frmATWTallyReports.segTimesheet.removeAll();
        frmATWTallyReports.segTimesheet.data = EmpDetail;

        frmATWTallyReports.lblNewEnrollmentsNo.text = result["Section2NumOfNewEnrollments"];
        frmATWTallyReports.lblNewEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfNewEnrollments"]).toFixed(2));
        frmATWTallyReports.lblNewEnrollmentsSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfNewEnrollments"]).toFixed(2));
        
        frmATWTallyReports.lblContEnrollmentsNo.text = result["Section2NumOfContEnrollments"];
        frmATWTallyReports.lblContEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfContEnrollments"]).toFixed(2));
        frmATWTallyReports.lblContEnrollmentsSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfContEnrollments"]).toFixed(2));
      
        frmATWTallyReports.lblPaidLTNo.text = result["Section2NumOfPaidLTAttandance"]; 
        frmATWTallyReports.lblPaidLTAmount.text = addDollar(parseFloat(result["Section2SumOfPaidLTAttandance"]).toFixed(2));
        frmATWTallyReports.lblPaidLTSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfPaidLT"]).toFixed(2));
      
        frmATWTallyReports.lblFreeLTNo.text = result["Section2NumOfFreeLTAttandance"];
        frmATWTallyReports.lblFreeLTAmount.text = addDollar(parseFloat(result["Section2SumOfFreeLT"]).toFixed(2));
        frmATWTallyReports.lblFreeLTSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfFreeLT"]).toFixed(2));
      
      	// **MEG 7313
      	if(IsInfoSessionMeeting()){
                frmATWTallyReports.hboxPreRegistered.setVisibility(true);
                frmATWTallyReports.hboxPreRegistered.skin = "hboxLightGrey"; //noSkinHBox
          		frmATWTallyReports.lblPreRegCount.text = result["Section2PreRegMemberCount"];
               	frmATWTallyReports.hbox0430d69c9184041.skin = "noSkinHBox";
                frmATWTallyReports.hbox0937eb6c05ddf44.skin = "hboxLightGrey";
                frmATWTallyReports.lblHdrWeekText.text = 0; //MEG-7347
                frmATWTallyReports.lblHdrRenewalText.text = 0; //MEG-7347                  
                frmATWTallyReports.lblHdrSeriesText.text = 0; //MEG-7347
        }else{
              	frmATWTallyReports.hboxPreRegistered.setVisibility(false);
              	//frmATWTallyMeetingReport.hboxPreRegistered.skin = "hboxLightGrey"; //noSkinHBox
           		frmATWTallyReports.hbox0430d69c9184041.skin = "hboxLightGrey";
              	frmATWTallyReports.hbox0937eb6c05ddf44.skin = "noSkinHBox";
         }// ** END 7313
      		
      
      	
      
        /*device tally
        frmATWTallyReports.lblPrePaidNo.text = result["Section2NumOfPrepaidAttd"];
      
        frmATWTallyReports.lblPrePaidAmount.text = addDollar(parseFloat(result["Section4PrepaymentSales "]).toFixed(2));
        frmATWTallyReports.lblPrePaidSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfPrepaid"]).toFixed(2));*/
      
       	frmATWTallyReports.lblPrePaidNo.text = parseInt(result["Section2NumOfPrepaid"]) + parseInt(result["Section2NumOfPrepaidBridgeSeries"]);
        frmATWTallyReports.lblPrePaidAmount.text = addDollar(((parseFloat(result["Section2SumOfPrepaid"])) + (parseFloat(result["Section2SumOfPrepaidBridgeSeries"]))).toFixed(2));
        frmATWTallyReports.lblPrePaidSubsidy.text = addDollar(((parseFloat(result["Section2SubsidyOfPrepaid"])) + (parseFloat(result["Section2SubsidyOfPrepaidBridgeSeries"]))).toFixed(2));
      
      
        frmATWTallyReports.lblEmployeeNo.text = result["Section2NumEmpAttendance"];
        frmATWTallyReports.lblEmployeeAmount.text = addDollar(parseFloat(0).toFixed(2));
        frmATWTallyReports.lblEmployeeSubsidy.text = addDollar(parseFloat(0).toFixed(2));
        
        frmATWTallyReports.lblTotalMemberTotal.text = result["Section2TotalMemberAttandace"];
        frmATWTallyReports.lblPaidTotal.text = result["Section2TotalPaidAttandace"];
        //frmATWTallyReports.lblTotalFeesTotal.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2) + parseFloat(result["Section2SumOfPrepaidBridgeSeries"]).toFixed(2));
        frmATWTallyReports.lblTotalFeesTotal.text = addDollar((parseFloat(result["Section2TotalMemberFees"])+parseFloat(result["Section2SumOfPrepaidBridgeSeries"])).toFixed(2));
  
      	frmATWTallyReports.lblTotalSubsidyTotal.text = addDollar(parseFloat(result["Section2TotalSubsidyAmt"]).toFixed(2));


        frmATWTallyReports.lblNoPrepaidCoupRedeem.text = result["Section3NumPrePaidCoupons"];
        frmATWTallyReports.lblMemberStayingfrMeeting.text = result["Section3MembersAttMeeting"];
        frmATWTallyReports.lbl5perTarget.text = result["Section3NumOfMembersReached5"];
        frmATWTallyReports.lbl10perTarget.text = result["Section3NumOfMembersReached10"];
        frmATWTallyReports.lblWeightGoal.text = result["Section3NumOfMembersReachedWeighGoal"];
        frmATWTallyReports.lblReachingLifetime.text = result["Section3NumOfMembersReachedLifetime"];
        frmATWTallyReports.lblMemLossWeight.text = result["Section3NumOfMembersWeightLossMeeting"];
        frmATWTallyReports.lblTotalWeightLoss.text = result["Section3SumOfMembersWeightLossMeeting"].toFixed(1) + " " + UnitText; // Dileep Chejerla - MEG-2773
        
        frmATWTallyReports.lblMemberFees.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
        frmATWTallyReports.lblPrepaymentSales.text = addDollar(parseFloat(result["Section4PrepaymentSales"]).toFixed(2));
        frmATWTallyReports.lblProductSales.text = addDollar(parseFloat(result["Section4ProductSales"]).toFixed(2));
        frmATWTallyReports.lblProductReturns.text = addDollar(parseFloat(result["Section4ProductReturns"]).toFixed(2));
        frmATWTallyReports.lblEmployeeSales.text = addDollar(parseFloat(result["Section4EmployeeSales"]).toFixed(2));
        frmATWTallyReports.lblSalesTax.text = addDollar(parseFloat(result["Section4SalesTax"]).toFixed(2));
        frmATWTallyReports.lblFutureAmtDue.text = addDollar(parseFloat(result["Section2TotalSubsidyAmt"]).toFixed(2));
        frmATWTallyReports.lblTotalSales.text = addDollar(parseFloat(parseFloat(result["Section4TotalSales"])+parseFloat(result["Section2TotalSubsidyAmt"])).toFixed(2));//** MEG 7234

        frmATWTallyReports.lblCashLeaderCheck.text = addDollar(parseFloat(result["Section5Cash"]).toFixed(2));
        frmATWTallyReports.lblMemberchecks.text = addDollar(parseFloat(result["Section5Check"]).toFixed(2));
      
        frmATWTallyReports.lblDepositDateOne.text = result["Section5DipositDate1"];
        frmATWTallyReports.lblDepositDateTwo.text = result["Section5DipositDate2"];
        frmATWTallyReports.lblDepositDateThree.text = result["Section5DipositDate3"];
        frmATWTallyReports.lblDepositSlipOne.text = result["Section5DipositSlip1"];
        frmATWTallyReports.lblDepositSlipTwo.text = result["Section5DipositSlip2"];
        frmATWTallyReports.lblDepositSlipThree.text = result["Section5DipositSlip3"];
        frmATWTallyReports.lblDepositAmtOne.text = addDollar(parseFloat(result["Section5DipositAmount1"]).toFixed(2));
        frmATWTallyReports.lblDepositAmtTwo.text = addDollar(parseFloat(result["Section5DipositAmount2"]).toFixed(2));
        frmATWTallyReports.lblDepositAmtThree.text = addDollar(parseFloat(result["Section5DipositAmount3"]).toFixed(2));
        
        frmATWTallyReports.lblCreditCards.text = addDollar(parseFloat(result["Section5CreditCard"]).toFixed(2));
        frmATWTallyReports.lblCreditSlipsIssued.text = addDollar(parseFloat(result["Section5CreditSlipsIssued"]).toFixed(2));
        frmATWTallyReports.lblCreditSlipsRedeemed.text = addDollar(parseFloat(result["Section5CreditSlipsRedeemed"]).toFixed(2));
        frmATWTallyReports.lblTotalCredit.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));

        frmATWTallyReports.lblTotalPayementsOver.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));
        frmATWTallyReports.lblTotalSaleOver.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));
        frmATWTallyReports.lblOverUnder.text = addDollar(parseFloat(result["Section6OverUnder"]).toFixed(2));
        frmATWTallyReports.lblReason.text = result["Section5Reason"];
        
        if (parseFloat(result["Section6OverUnder"]) == 0.00) {
            frmATWTallyReports.hboxReason.setVisibility(false);
            frmATWTallyReports.hboxTotalOver.setVisibility(false);
            frmATWTallyReports.hboxTotalPayment.setVisibility(false);
            frmATWTallyReports.hboxTotalSales.setVisibility(false);
            frmATWTallyReports.hboxSectionVII.setVisibility(false);
            frmATWTallyReports.lineSectionVII.setVisibility(false);
        } else {
            frmATWTallyReports.hboxReason.setVisibility(true);
            frmATWTallyReports.hboxTotalOver.setVisibility(true);
            frmATWTallyReports.hboxTotalPayment.setVisibility(true);
            frmATWTallyReports.hboxTotalSales.setVisibility(true);
            frmATWTallyReports.hboxSectionVII.setVisibility(true);
            frmATWTallyReports.lineSectionVII.setVisibility(true);
        }

		removeProgressView();
        frmATWTallyReports.hboxMainContainer.setVisibility(true);
    } else {
        resetComboTallyReports();
        removeProgressView();
    }
  }

function bindDataToMilestoneAttendanceATWReport(status,result){
  kony.print("bindDataToMilestoneAttendanceATWReport resulr" + JSON.stringify(result));
    if(status){
        frmATWTallyReports.hboxMemberMilestone.setVisibility(true);
        frmATWTallyReports.hboxProductSale.setVisibility(true);
        frmATWTallyReports.hboxEmployeeSale.setVisibility(true);
        frmATWTallyReports.hboxProductReturn.setVisibility(true);
        frmATWTallyReports.segAttendMilstoneRep.widgetDataMap = {lblAttdReport:"lblAttdReport",lblRegNumber:"lblRegNumber",lblMemberName:"lblMemberName",lblTodayWT:"lblTodayWT",lblMemName:"lblMemName",lblMilestoneReached:"lblMilestoneReached",lblFees:"lblFees",lblMemNameInfo:"lblMemNameInfo",lblRegNoInfo:"lblRegNoInfo",lblTodayWeightInfo:"lblTodayWeightInfo",lblMilestoneInfo:"lblMilestoneInfo",lblMemberTypeInfo:"lblMemberTypeInfo",lblMemberFeeInfo:"lblMemberFeeInfo",lblProductInfo:"lblProductInfo",lblProductDescInfo:"lblProductDescInfo",lblQTYInfo:"lblQTYInfo",lblUnitPriceInfo:"lblUnitPriceInfo",lblTexInfo:"lblTexInfo",lblTotalInfo:"lblTotalInfo",lblProduct:"lblProduct",lblProductDesc:"lblProductDesc",lblQTY:"lblQTY",lblUnitPrice:"lblUnitPrice",lblTex:"lblTex",lblTotal:"lblTotal",lblSubsidy:"lblSubsidy",lblMemberSubsidyInfo:"lblMemberSubsidyInfo"};
        var AttendanceReportData = [];
        var ProductReportData = [];
        var EmployeeReportData = [];
        var ProductReturnData = [];
        
        var totalAttendance = 0;
        var totalMemberFees = 0;
      	var totalSubsidyAmount = 0;
        _.each(result.attendanceData,function(v){
            totalAttendance = totalAttendance + 1;
            totalMemberFees = totalMemberFees + ((checkValidString(v.Fees))? (v.Fees): 0);
            totalSubsidyAmount = totalSubsidyAmount + ((checkValidString(v.Subsidy))? (v.Subsidy): 0);
            var subType = setMemberSubType(v.SubscriptnType);
            
            
            var b = mapKeys(viewMilestoneAndAttendance, {
                                lblRegNoInfo:v.RegNumber,
                                lblMemNameInfo: v.MemberName,
                                lblTodayWeightInfo: v.Weight,
                                lblMemberTypeInfo: subType,
                                lblMilestoneInfo: (v.Milestone == ',')?'--':v.Milestone,
                                lblMemberFeeInfo: (checkValidString(v.Fees))?addCurrency(v.Fees):addCurrency("0.00"),
              					lblMemberSubsidyInfo:(checkValidString(v.Subsidy))?addCurrency(v.Subsidy):addCurrency("0.00"),
                                template:hboxAttedRowTempATW
                           }); 
            AttendanceReportData.push(b);              
        })
        frmATWTallyReports.segAttendMilstoneRep.data = AttendanceReportData;
        frmATWTallyReports.lblTotalAttendance.text = totalAttendance;
        frmATWTallyReports.lblTotalMemberFees.text = addCurrency(totalMemberFees);
      	frmATWTallyReports.lblTotalSubsidyAmount.text = addCurrency(totalSubsidyAmount);
        
        var totalProductSale = 0;
        _.each(result.productSaleData,function(v){
            kony.print("v.description----"+v.description);
            totalProductSale = totalProductSale + v.total;
            ProductReportData.push(setSegmentData(v));
        })
        
        frmATWTallyReports.segProductSale.data = ProductReportData;
        frmATWTallyReports.lblTotalProductSale.text = addCurrency(totalProductSale);
        
        var totalEmployeeSale = 0;
        _.each(result.employeeSaleData,function(v){
            kony.print("v.description----"+v.description);
            totalEmployeeSale = totalEmployeeSale + v.total;
            EmployeeReportData.push(setSegmentData(v));
        })
        
        frmATWTallyReports.segEmployeeSale.data = EmployeeReportData;
        frmATWTallyReports.lblTotalEmployeeSale.text = addCurrency(totalEmployeeSale);
        
        var totalProductReturn = 0;
        _.each(result.productReturnData,function(v){
            kony.print("v.description----"+v.description);
            totalProductReturn = totalProductReturn + v.total;
            ProductReturnData.push(setSegmentData(v));
        })
        
        frmATWTallyReports.segProductReturn.data = ProductReturnData;
        frmATWTallyReports.lblTotalProductReturn.text = addCurrency(totalProductReturn);
            
    } else {
        alertForMessages(kony.i18n.getLocalizedString("strTallyReportNoTally"));
    }
    kony.print("result data===="+JSON.stringify(result));
}
