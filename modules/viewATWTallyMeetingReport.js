/**
  * Function for display AtWork Meeting Tally Summary Data. This function binds summary data to UI.
  *
*/

function DisplayATWTallyMettingReportData() {

    
    frmATWTallyMeetingReport.hboxChecks.isVisible = true;
 

    try {
        kony.print("--> DisplayATWTallyMettingReportData - hide show in out colum based on meetnig type" );
           
        frmATWTallyMeetingReport.btnSubmit.setEnabled(false);
        frmPayment.btnCompleteProcessMember.skin = "btnNoWeighInSelected";
        frmATWTallyMeetingReport.imgCheckBox.src = "icn_checkbox_unchecked.png";
        
        frmATWTallyMeetingReport.lblHeaderTimeIn.setVisibility(true);
        frmATWTallyMeetingReport.lblHeaderTimeout.setVisibility(true);
        frmATWTallyMeetingReport.lblHeaderBreakIn.text = kony.i18n.getLocalizedString("strLblBreakIn");
        frmATWTallyMeetingReport.lblHeaderBreakout.text = kony.i18n.getLocalizedString("strLblBreakOut");
        frmATWTallyMeetingReport.lblHeaderBreakIn.containerWeight = 12;
        frmATWTallyMeetingReport.lblHeaderBreakout.containerWeight = 12;
        
        boTallyMeetingReport.getRegion(null, null, DisplayATWTallyMettingReportDataSuccessCallback);


        function DisplayATWTallyMettingReportDataSuccessCallback(status, result) {
        kony.print("--> DisplayATWTallyMettingReportDataSuccessCallback" + JSON.stringify(result));

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
                var dateData = mm + "/" + dd + "/" + yyyy;

              


        if(result["Section5DipositSlip1"] && result["Section5DipositSlip1"].length >0)
          {
            	frmATWTallyMeetingReport.hboxATWDepositOne.isVisible = true;
          }else
            {
               	frmATWTallyMeetingReport.hboxATWDepositOne.isVisible = false;
            }
      	if(result["Section5DipositSlip2"] && result["Section5DipositSlip2"].length >0)
          {
            	frmATWTallyMeetingReport.hboxATWDepositTwo.isVisible = true;
          }else
            {
               	frmATWTallyMeetingReport.hboxATWDepositTwo.isVisible = false;
            }
      	if(result["Section5DipositSlip3"] && result["Section5DipositSlip3"].length >0)
          {
            	frmATWTallyMeetingReport.hboxATWDepositThree.isVisible = true;
          }else
            {
               	frmATWTallyMeetingReport.hboxATWDepositThree.isVisible = false;
            }

            //**MEG 7233
              getSeriesDataFromDB(function(res){
                kony.print("getSeriesDataFromDB res "+ JSON.stringify(res));
                frmATWTallyMeetingReport.lblHdrSeriesText.text = checkValidString(kony.sync.getString(res[0].SeriesNo)) ? kony.sync.getString(res[0].SeriesNo) : 0;  //** MEG 7261 //**MEG 7233
                frmATWTallyMeetingReport.lblHdrRenewalText.text = checkValidString(kony.sync.getString(res[0].RenewalNo)) ? kony.sync.getString(res[0].RenewalNo) : 0; //**MEG 7233
                //frmATWTallyMeetingReport.lblHdrWeekText.text = kony.sync.getString(res[0].SeriesCompMeetings); //**MEG 7233
                frmATWTallyMeetingReport.lblHdrStartDateText.text = formattedDate(kony.sync.getString(res[0].StartDate)); //**MEG 7233
                
                
              });
              //**End
               boMeetings.getAndUpdateWeekNoForAtWorkMeeting(function(WeekNo) {
            		frmATWTallyMeetingReport.lblHdrWeekText.text = WeekNo; //**MEG 7233
         	 });
              
                frmATWTallyMeetingReport.lblTitle.text = getLocalizedString("strLblTallyMeeting") + glbCurrentMeetingValue + " " + changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat")) + " -- " + getLocalizedString("strLblTallyReportAndSignOff");//** MEG 6386

                frmATWTallyMeetingReport.lblLocationNo.text = glbLocationNum;
                frmATWTallyMeetingReport.lblLocationName.text = result["TallyLocationName"];
                frmATWTallyMeetingReport.lblRegion.text = result["TallyRegion"];
                frmATWTallyMeetingReport.lblMeetingDate.text = changeDateFormate(dateData, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                frmATWTallyMeetingReport.lblMeetingTime.text = gblMeetingSelected;
              

                var EmpDetail = result["TallyEmployees"];
                frmATWTallyMeetingReport.segTimesheet.removeAll();
                frmATWTallyMeetingReport.segTimesheet.data = EmpDetail;

                frmATWTallyMeetingReport.lblNewEnrollmentsNo.text = result["Section2NumOfNewEnrollments"];
                frmATWTallyMeetingReport.lblNewEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfNewEnrollments"]).toFixed(2));
                frmATWTallyMeetingReport.lblNewEnrollmentsSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfNewEnrollments"]).toFixed(2));
              	
                frmATWTallyMeetingReport.lblContEnrollmentsNo.text = result["Section2NumOfContEnrollments"];
                frmATWTallyMeetingReport.lblContEnrollmentsAmount.text = addDollar(parseFloat(result["Section2SumOfContEnrollments"]).toFixed(2));
              	frmATWTallyMeetingReport.lblContEnrollmentsSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfContEnrollments"]).toFixed(2));
              
                frmATWTallyMeetingReport.lblPaidLTNo.text = result["Section2NumOfPaidLTAttandance"];
                frmATWTallyMeetingReport.lblPaidLTAmount.text = addDollar(parseFloat(result["Section2SumOfPaidLTAttandance"]).toFixed(2));
              	frmATWTallyMeetingReport.lblPaidLTSubsidy.text = addDollar(parseFloat(result["Section2SubsidyOfPaidLT"]).toFixed(2));
              
                frmATWTallyMeetingReport.lblFreeLTNo.text = result["Section2NumOfFreeLTAttandance"];
                frmATWTallyMeetingReport.lblFreeLTAmount.text = addDollar(parseFloat(0).toFixed(2));
              	frmATWTallyMeetingReport.lblFreeLTSubsidy.text = addDollar(parseFloat(0).toFixed(2));
                
              	// **MEG 7313
              	if(IsInfoSessionMeeting()){
                  	frmATWTallyMeetingReport.hboxPreRegistered.setVisibility(true);
                  	frmATWTallyMeetingReport.hboxPreRegistered.skin = "hboxLightGrey"; //noSkinHBox
        			frmATWTallyMeetingReport.preRegCount.text = result["Section2PreRegMemberCount"];
               		frmATWTallyMeetingReport.hbox1388753862374582.skin = "noSkinHBox";
                	frmATWTallyMeetingReport.hbox1388753862376006.skin = "hboxLightGrey";
                  	frmATWTallyMeetingReport.lblHdrWeekText.text = 0; //MEG-7347
                  	frmATWTallyMeetingReport.lblHdrRenewalText.text = 0; //MEG-7347
                  	frmATWTallyMeetingReport.lblHdrSeriesText.text = 0; //MEG-7347
                }else{
                  	frmATWTallyMeetingReport.hboxPreRegistered.setVisibility(false);
                  	//frmATWTallyMeetingReport.hboxPreRegistered.skin = "hboxLightGrey"; //noSkinHBox
               		frmATWTallyMeetingReport.hbox1388753862374582.skin = "hboxLightGrey";
                	frmATWTallyMeetingReport.hbox1388753862376006.skin = "noSkinHBox";
                }// ** END 7313
              	
                /* Ami - MEG-7153
                frmATWTallyMeetingReport.lblPrePaidNo.text = result["Section2NumOfPrepaidAttd"];
                frmATWTallyMeetingReport.lblPrePaidAmount.text = addDollar(parseFloat(0).toFixed(2));
              	frmATWTallyMeetingReport.lblPrePaidSubsidy.text = addDollar(parseFloat(0).toFixed(2));
               */
              //MEG-7153
              	
              frmATWTallyMeetingReport.lblPrePaidNo.text = parseInt(result["Section2NumOfPrepaid"]) + parseInt(result["Section2NumOfPrepaidBridgeSeries"]);
                frmATWTallyMeetingReport.lblPrePaidAmount.text = addDollar(((parseFloat(result["Section2SumOfPrepaid"])) + (parseFloat(result["Section2SumOfPrepaidBridgeSeries"]))).toFixed(2));
                frmATWTallyMeetingReport.lblPrePaidSubsidy.text = addDollar(((parseFloat(result["Section2SubsidyOfPrepaid"])) + (parseFloat(result["Section2SubsidyOfPrepaidBridgeSeries"]))).toFixed(2));
      
              
				frmATWTallyMeetingReport.lblEmployeeNo.text = result["Section2NumEmpAttendance"];
              	frmATWTallyMeetingReport.lblEmployeeAmount.text = addDollar(parseFloat(0).toFixed(2));
              	frmATWTallyMeetingReport.lblEmployeeSubsidy.text = addDollar(parseFloat(0).toFixed(2));
              	
              	frmATWTallyMeetingReport.lblTotalMemberTotal.text = result["Section2TotalMemberAttandace"];
                frmATWTallyMeetingReport.lblPaidTotal.text = result["Section2TotalPaidAttandace"];
                //frmATWTallyMeetingReport.lblTotalFeesTotal.text = addDollar(parseFloat(result["Section2TotalMemberFees"]).toFixed(2));
              
                frmATWTallyMeetingReport.lblTotalFeesTotal.text = addDollar((parseFloat(result["Section2TotalMemberFees"])+parseFloat(result["Section2SumOfPrepaidBridgeSeries"])).toFixed(2));

                frmATWTallyMeetingReport.lblTotalSubsidyTotal.text = addDollar(parseFloat(result["Section2TotalSubsidyAmt"]).toFixed(2));


                frmATWTallyMeetingReport.lblNoPrepaidCoupRedeem.text = result["Section3NumPrePaidCoupons"];
                frmATWTallyMeetingReport.lblMemberStayingfrMeeting.text = result["Section3MembersAttMeeting"];
                frmATWTallyMeetingReport.lbl5perTarget.text = result["Section3NumOfMembersReached5"];
                frmATWTallyMeetingReport.lbl10perTarget.text = result["Section3NumOfMembersReached10"];
                frmATWTallyMeetingReport.lblWeightGoal.text = result["Section3NumOfMembersReachedWeighGoal"];
                frmATWTallyMeetingReport.lblReachingLifetime.text = result["Section3NumOfMembersReachedLifetime"];
                frmATWTallyMeetingReport.lblMemLossWeight.text = result["Section3NumOfMembersWeightLossMeeting"];
                frmATWTallyMeetingReport.lblTotalWeightLoss.text = result["Section3SumOfMembersWeightLossMeeting"].toFixed(1) + " " + UnitText; // Dileep Chejerla - MEG-2773
                
              //	frmATWTallyMeetingReport.lblMemberFees.text = addDollar((parseFloat(result["Section2TotalMemberFees"])-parseFloat(result["Section2SumOfPrepaidBridgeSeries"])).toFixed(2));
                frmATWTallyMeetingReport.lblMemberFees.text = addDollar(parseFloat(result["Section2TotalMemberFees"]));

              frmATWTallyMeetingReport.lblPrepaymentSales.text = addDollar(parseFloat(result["Section4PrepaymentSales"]).toFixed(2));
                frmATWTallyMeetingReport.lblProductSales.text = addDollar(parseFloat(result["Section4ProductSales"]).toFixed(2));
                frmATWTallyMeetingReport.lblProductReturns.text = addDollar(parseFloat(result["Section4ProductReturns"]).toFixed(2));
                frmATWTallyMeetingReport.lblEmployeeSales.text = addDollar(parseFloat(result["Section4EmployeeSales"]).toFixed(2));
                frmATWTallyMeetingReport.lblSalesTax.text = addDollar(parseFloat(result["Section4SalesTax"]).toFixed(2));
              	frmATWTallyMeetingReport.lblFutureAmtDue.text = addDollar(parseFloat(result["Section2TotalSubsidyAmt"]).toFixed(2));
              	frmATWTallyMeetingReport.lblTotalSales.text = addDollar(parseFloat(parseFloat(result["Section4TotalSales"])+parseFloat(result["Section2TotalSubsidyAmt"])).toFixed(2));//** MEG 7234

                frmATWTallyMeetingReport.lblCashLeaderCheck.text = addDollar(parseFloat(result["Section5Cash"]).toFixed(2));
                frmATWTallyMeetingReport.lblMemberchecks.text = addDollar(parseFloat(result["Section5Check"]).toFixed(2));
              
              	frmATWTallyMeetingReport.lblDepositDateOne.text = result["Section5DipositDate1"];
              	frmATWTallyMeetingReport.lblDepositDateTwo.text = result["Section5DipositDate2"];
              	frmATWTallyMeetingReport.lblDepositDateThree.text = result["Section5DipositDate3"];
                frmATWTallyMeetingReport.lblDepositSlipOne.text = result["Section5DipositSlip1"];
              	frmATWTallyMeetingReport.lblDepositSlipTwo.text = result["Section5DipositSlip2"];
              	frmATWTallyMeetingReport.lblDepositSlipThree.text = result["Section5DipositSlip3"];
                frmATWTallyMeetingReport.lblDepositAmtOne.text = addDollar(parseFloat(result["Section5DipositAmount1"]).toFixed(2));
              	frmATWTallyMeetingReport.lblDepositAmtTwo.text = addDollar(parseFloat(result["Section5DipositAmount2"]).toFixed(2));
              	frmATWTallyMeetingReport.lblDepositAmtThree.text = addDollar(parseFloat(result["Section5DipositAmount3"]).toFixed(2));
                
              	frmATWTallyMeetingReport.lblCreditCards.text = addDollar(parseFloat(result["Section5CreditCard"]).toFixed(2));
                frmATWTallyMeetingReport.lblCreditSlipsIssued.text = addDollar(parseFloat(result["Section5CreditSlipsIssued"]).toFixed(2));
                frmATWTallyMeetingReport.lblCreditSlipsRedeemed.text = addDollar(parseFloat(result["Section5CreditSlipsRedeemed"]).toFixed(2));
                frmATWTallyMeetingReport.lblTotalCredit.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));

                frmATWTallyMeetingReport.lblTotalPayementsOver.text = addDollar(parseFloat(result["Section5TotalPayment"]).toFixed(2));
                frmATWTallyMeetingReport.lblTotalSaleOver.text = addDollar(parseFloat(result["Section4TotalSales"]).toFixed(2));
                frmATWTallyMeetingReport.lblOverUnder.text = addDollar(parseFloat(result["Section6OverUnder"]).toFixed(2));
                frmATWTallyMeetingReport.lblReason.text = result["Section5Reason"];
                
                if (parseFloat(result["Section6OverUnder"]) == 0.00) {
                    frmATWTallyMeetingReport.hboxReason.setVisibility(false);
                    frmATWTallyMeetingReport.hboxTotalOver.setVisibility(false);
                    frmATWTallyMeetingReport.hboxTotalPayment.setVisibility(false);
                    frmATWTallyMeetingReport.hboxTotalSales.setVisibility(false);
                    frmATWTallyMeetingReport.hboxSectionVII.setVisibility(false);
                    frmATWTallyMeetingReport.lineSectionVII.setVisibility(false);
                } else {
                    frmATWTallyMeetingReport.hboxReason.setVisibility(true);
                    frmATWTallyMeetingReport.hboxTotalOver.setVisibility(true);
                    frmATWTallyMeetingReport.hboxTotalPayment.setVisibility(true);
                    frmATWTallyMeetingReport.hboxTotalSales.setVisibility(true);
                    frmATWTallyMeetingReport.hboxSectionVII.setVisibility(true);
                    frmATWTallyMeetingReport.lineSectionVII.setVisibility(true);
                }

            }
        }
    } catch (e) {
        GlobalException(e);
    }

}

// **MEG 7313
function getPreRegisteredMemberCountFromDB(callback)
{
  		//**MEG 7372		
 		 var dateQuery, meetingQuery;
        
        if (boTallyMeetingReport.isfromTallyReportFlow) {
            dateQuery = supportTime(boTallyMeetingReport.MeetingDate, "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));
            meetingQuery = boTallyMeetingReport.MeetingOccrID;
        } else {
            dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));
            meetingQuery = glbMeetingNum;
        }
  		//**End
  		function getPreRegisteredMemberCountFromDBSuccess(res) {
			kony.print("getPreRegisteredMemberCountFromDBSuccess res--" + JSON.stringify(res));  	
          	callback.call(null,res);      	
		}
  		
  		function getPreRegisteredMemberCountFromDBError() {
			kony.print("getPreRegisteredMemberCountFromDBError ");  	
          	callback.call(null,{count:0});      	
		}
  		
  		var whereClause = "where MtngOccrID='" + meetingQuery + "' and MeetingDate like '%" + dateQuery + "%'"; //**MEG 7372
  		kony.print("getPreRegisteredMemberCountFromDBSuccess whereclause--" + JSON.stringify(whereClause));	
  		com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.getCount(whereClause,getPreRegisteredMemberCountFromDBSuccess,getPreRegisteredMemberCountFromDBError);
}
//** END 7313
//** MEG 7233
function getSeriesDataFromDB(callback)
{
 var strWhere = "where ID ='" + glbMeetingNum + "' LIMIT 0,1";
    
  		function getSeriesDataFromDBSuccess(res) {
  			kony.print("getSeriesDataFromDBSuccess res.length--" + res.length);
			kony.print("getSeriesDataFromDBSuccess res--" + JSON.stringify(res));
  			if (res.length > 0) {
              	
                callback.call(null,res);
        	}
		}
		DBMeetingsController.find(strWhere, getSeriesDataFromDBSuccess, eventErrorCallBack);
}

//** End

function checkBoxATWToggle() {
    if (frmATWTallyMeetingReport.imgCheckBox.src == "icn_checkbox_checked.png") {
        frmATWTallyMeetingReport.imgCheckBox.src = "icn_checkbox_unchecked.png";
        frmATWTallyMeetingReport.btnSubmit.skin = "btnNoWeighInSelected";
        frmATWTallyMeetingReport.btnSubmit.setEnabled(false);
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
                    frmATWTallyMeetingReport.imgCheckBox.src = "icn_checkbox_checked.png";
                    frmATWTallyMeetingReport.btnSubmit.skin = "btnwwtxtSearchLocation";
                    frmATWTallyMeetingReport.btnSubmit.setEnabled(true);
                } else {
                    popupNumberOfBanks.hboxLabelUpdate.isVisible = true;
                    var context = {
                        "widget": kony.application.getCurrentForm().hbox1388753862500523,
                        "anchor": "top",
                        "sizetoanchorwidth": true
                    };
                    kony.print("Opening glbNumberOfBanks=" + glbNumberOfBanks);
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

function onclickSubmitATWTallyReport() {
    if (frmATWTallyMeetingReport.segTimesheet.data != null) {
        if (frmATWTallyMeetingReport.segTimesheet.data.length > 0) {
            if (frmATWTallyMeetingReport.imgCheckBox.src == "icn_checkbox_checked.png") {
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
