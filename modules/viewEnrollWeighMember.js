var boolAttending = false;
var needToshowNoteMsg = false;
var isWeightNotInRange = false;
var valid = new validationcls();
var roundWeight;
var fortnightAway;
var date;
var mon;
var year;
var heightInMeters, weightinlbs, agevalue, gendervalue, heightinInches;
var weightInKG = 0;
var currRoundWeight;

function eventonClickvboxPaymentSection() {
}
//Added by nikita acharya on 6/5/2014 This function is written as I found 
//that while erasing the 
//value from the weigh text it is 
//not clearing the already calculated values.
function ClearCalculations() {
    frmEnrollWeighMember.lblbmi.text = "";
    frmEnrollWeighMember.lblgoalfive.text = "";
    frmEnrollWeighMember.lblgoalten.text = "";
    frmEnrollWeighMember.lblhealthyrange.text = "";
    frmEnrollWeighMember.lblLbsToNextMilestoneInfo.text = "";
    frmEnrollWeighMember.txtDPTValue.text = "";
    frmEnrollWeighMember.lblPersonalGoalWeight.text="";
    frmEnrollWeighMember.lblWPAinfo.text = "";

}

function onEndEditingOfDPT() {

    var dpt = frmEnrollWeighMember.txtDPTValue.text.replace(/[,\s]/g,""); //remove , from dpt text value
    frmEnrollWeighMember.txtDPTValue.text = dpt;
    kony.print("Done pressed"+dpt);
    
    var dtpValue = frmEnrollWeighMember.txtDPTValue.text;
  
    valid = new validationcls();
    var isValidDPT = valid.validateDPTvalue(frmEnrollWeighMember.txtDPTValue.text).isValid();
    kony.print("isValidDPT  "+ isValidDPT);
  	if(isValidDPT){

    for (i = 0; i < dtpValue.length; i++) {
    	    	    	
        if (dtpValue.charAt(i) == ".") {
        	var decimalIndex =  dtpValue.indexOf(".");
        	kony.print("decimalIndex ======= "+decimalIndex);
        	var number = 0;
        	if(decimalIndex == 0 || decimalIndex == "0")
        		number = 0;
        	else
            	number = parseInt(dtpValue.substring(0, i));
            kony.print("number ======= "+number);	
            if (dtpValue.charAt(i + 1) >= 5) {

                frmEnrollWeighMember.txtDPTValue.text = number + 1;
            } else {
                frmEnrollWeighMember.txtDPTValue.text = number;
            }
        }
    }
  	
  	}
}

//This function is called on NOWeighIn button tap
function eventonClickbtnNWI() {
    //Validations for NWI
	
    if (MemberType == "LifeTime") {
        if (MissedWeekWeightData.length > 0) {
            kony.print("::DJP:: MissedWeekWeightData=" + JSON.stringify(MissedWeekWeightData));
            var data = JSON.parse(JSON.stringify(MissedWeekWeightData));
            var dates = _.map(data, function(w) {
                return new Date(w.WeighInDate);
            });
            kony.print("::DJP:: dates=" + JSON.stringify(dates));
            var matches = _.filter(dates, function(d) {
                return (d.getMonth() == new Date().getMonth()) && (d.getFullYear() == new Date().getFullYear());
            });
            kony.print("::DJP:: matches=" + JSON.stringify(matches));
            if (checkValidString(matches)) {
                //There are one or more records for the given month
                var minDate = _.min(matches, function(d) {
                    return d;
                });
                kony.print("::DJP:: typeof minDate=" + typeof minDate);
                if (new Date().setHours(0, 0, 0, 0) <= new Date(minDate).setHours(0, 0, 0, 0)) {
                    //today is less than the minimum date in weights - so NWI not allowed 
                    kony.print("NWI is not allowed");
                    alertForMessages(kony.i18n.getLocalizedString("strMsgNWINotAllowed"));
                    //Return the control
                    return;
                }
            } else {
                //First Entry for the month - Dont allow NWI
                kony.print("NWI is not allowed");
                alertForMessages(kony.i18n.getLocalizedString("strMsgNWINotAllowed"));
                //Return the control
                return;
            }
        }else{
        	kony.print("In else MissedWeekWeightData.length > 0 ");
        	//First Entry for the month - Dont allow NWI
            kony.print("NWI is not allowed");
            alertForMessages(kony.i18n.getLocalizedString("strMsgNWINotAllowed"));
            //Return the control
            return;
        }

    }
    //Allow NWI for all other Member Types
    if (frmEnrollWeighMember.imgNoWeighIn.src == "noweighin_disable.png") {
        frmEnrollWeighMember.imgNoWeighIn.src="noweighin.png";
        isNWI = true;
    } else {
        frmEnrollWeighMember.imgNoWeighIn.src = "noweighin_disable.png";
        isNWI = false;
    }

    if (isNWI && IsAddIndividual == FlowForScreens.AddIndividual) {
        frmEnrollWeighMember.txtWeight.text = frmAddIndividulaMember.txtStartWeight.text;
        frmEnrollWeighMember.txtWeight.setEnabled(false);
        eventonDoneTextAreaWeighCalculations();
    } else if (!isNWI && IsAddIndividual == FlowForScreens.AddIndividual) {
        frmEnrollWeighMember.txtWeight.setEnabled(true);
        frmEnrollWeighMember.txtWeight.text = "";
    }

}

function eventonDoneTextAreaWeighCalculations() {
    try {
    	var currWeightOfMember = frmEnrollWeighMember.txtWeight.text;
    	var IsDisplayStatisticsOnStartWeight = false;
        if (currWeightOfMember == "0" || currWeightOfMember == "" || currWeightOfMember == undefined) //Added by nikita acharya on 6/5/2014
        {
        	if(!IsAddIndividual){
        		ClearCalculations();
        	}else{
        		currWeightOfMember = frmAddIndividulaMember.txtStartWeight.text;
        		IsDisplayStatisticsOnStartWeight = true;
        	}
        }
        valid = new validationcls();
        kony.print("::IsAddIndividual--11--" + IsAddIndividual);
        var res;
        // when add member flow then calculations are based on start weight and when enroll member flow then calculations are based on current weight.
        if (IsAddIndividual) {
            kony.print("before round txtWeight in eventonDoneTextAreaWeighCalculations----->>>" + frmAddIndividulaMember.txtStartWeight.text);
            roundWeight = com.es.weighincalculations.RoundWeight(frmAddIndividulaMember.txtStartWeight.text);
            kony.print("After round txtWeight in eventonDoneTextAreaWeighCalculations----->>>" + roundWeight);
            //Added by praveen kalal MEG-558
            roundWeight = (roundWeight.toString().length > 0) ? parseFloat(roundWeight).toFixed(1) : "";
            //Ended by praveen kalal MEG-558
            currRoundWeight = com.es.weighincalculations.RoundWeight(currWeightOfMember);
            currRoundWeight = (currRoundWeight.toString().length > 0) ? parseFloat(currRoundWeight).toFixed(1) : "";
            if(!IsDisplayStatisticsOnStartWeight){
            	frmEnrollWeighMember.txtWeight.text = (currRoundWeight.toString().length > 0) ? currRoundWeight.toString() : "";
            }
            res = valid.validateWeight(currRoundWeight).isValid();	// added for MEGCA-282
        } else {
            kony.print("before round txtWeight in eventonDoneTextAreaWeighCalculations----->>>" + frmEnrollWeighMember.txtWeight.text);
            roundWeight = com.es.weighincalculations.RoundWeight(frmEnrollWeighMember.txtWeight.text);
            kony.print("After round txtWeight in eventonDoneTextAreaWeighCalculations----->>>" + roundWeight);
            //Added by praveen kalal MEG-558
            roundWeight = (roundWeight.toString().length > 0) ? parseFloat(roundWeight).toFixed(1) : "";
            //Ended by praveen kalal MEG-558

            frmEnrollWeighMember.txtWeight.text = (roundWeight.toString().length > 0) ? roundWeight.toString() : "";
			res = valid.validateWeight(roundWeight).isValid();	// added for MEGCA-282
        }

        kony.print("Assign txtWeight in eventonDoneTextAreaWeighCalculations----->>>" + frmEnrollWeighMember.txtWeight.text);
        res = valid.setValidateWeightFlag(roundWeight).isValid();
        if (res) {
            //Added By praveen MEG-2925
            kony.print("::IsAddIndividual--12--" + IsAddIndividual);
            if (IsAddIndividual) {
				
				frmEnrollWeighMember.hboxTodayMilestones.setVisibility(true); //Added By PK MEGCA-346
                var weightVal = com.es.weighincalculations.RoundWeight(currWeightOfMember);

                if (weightVal >= 60 && weightVal <= 999.9) {

                    eligibleMilestonesArrObj = [];
                    var startwt = frmAddIndividulaMember.txtStartWeight.text;
                    var goalwt = frmAddIndividulaMember.txtGoalWeight.text;
                    var weightData = [{
                        "Weight": frmAddIndividulaMember.txtStartWeight.text,
                        "NoWeighIn": "false",
                        "WeighInDate": supportTime(frmAddIndividulaMember.lblStartDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS")
                    }, {
                        "Weight": currWeightOfMember,
                        "NoWeighIn": "false",
                        "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS")
                    }]

                    if (MissedWeekWeightData.length > 0) {
                        weightData = _.union(weightData, MissedWeekWeightData);
                    }

                    kony.print("::PK ::weightData---" + JSON.stringify(weightData));
                    boMemberMilestone.getMasterMilestones(toGetAchievedMilestoneForBatchAddAndAdd, weightData, startwt, goalwt, true, true);
                    if(IsDisplayStatisticsOnStartWeight)
                    	frmEnrollWeighMember.lblTodayMilestoneInfo.text = "";
					else
						frmEnrollWeighMember.lblTodayMilestoneInfo.text = glbMilestoneName; //Added By PK MEGCA-346
                }

            }
            //End By praveen MEG-2925

            weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeight));
            kony.print("weightInKG----->>>" + weightInKG);
            //Added By PK MEGCA-402 lbsToNextMilestone in add flow 
			lbsToNextMilestone();
            
            
            kony.print("weightvalue " + roundWeight);
            kony.print("Age :" + agevalue);
            kony.print("Gender :" + gendervalue);
            if (IsAddIndividual) {
                var currWeightRes = valid.setValidateWeightFlag(currRoundWeight).isValid();
                if (currWeightRes) {
                    var currWeightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(currRoundWeight));
					var weighForNewDPT = parseFloat(currWeightInKG);					
					var currWeight= deductWeight(currWeightInKG);
                    var bmiOfCurrWeight = com.es.weighincalculations.CalculateBMI(parseFloat(currWeight), parseFloat(heightInMeters));
                    frmEnrollWeighMember.lblbmi.text = bmiOfCurrWeight.toString(); //+" "+UnitText;
                    kony.print("bmi----->>>" + bmiOfCurrWeight);
                    kony.print("1.heightInMeters ****************----->>>" + heightInMeters);
                    var TotalCurrDPT = com.es.weighincalculations.CalculateStatistics("DPT", weighForNewDPT, heightInMeters, agevalue, gendervalue);
                
               	    var WPA =  com.es.weighincalculations.CalculateStatistics("WPA", weighForNewDPT, heightInMeters , agevalue , gendervalue);
					
                    kony.print("1. The total WPA is.  "+ JSON.stringify(WPA));
                    kony.print("After FUnction:->" + TotalCurrDPT);
					frmEnrollWeighMember.lblWPAinfo.text = WPA;
                    if (agevalue > 17) {
						 frmEnrollWeighMember.txtDPTValue.text = 	TotalCurrDPT.toString();
                    }  else {
                    	setDptWpa("", "", agevalue, gendervalue, "Enroll", function(dptVal, wpaVal) {
			                kony.print("SJ DPT:" + dptVal);
			                frmEnrollWeighMember.txtDPTValue.text = dptVal;	
			            });
		            }
                                      
		            kony.print("TotalCurrDPT----->>>"+TotalCurrDPT);
                } else {
                    isWeightNotInRange = true;
                }
            } else {
				var weighForNewDPT = parseFloat(weightInKG);
				var currWeight= deductWeight(weightInKG);
                var bmi = com.es.weighincalculations.CalculateBMI(parseFloat(currWeight), parseFloat(heightInMeters));
                frmEnrollWeighMember.lblbmi.text = bmi.toString();
                kony.print("bmi----->>>" + bmi);
                 kony.print("2.heightInMeters ****************----->>>" + heightInMeters);
               	 var TotalDPT = com.es.weighincalculations.CalculateStatistics("DPT", weighForNewDPT, heightInMeters, agevalue, gendervalue);
                
               	 var WPA =  com.es.weighincalculations.CalculateStatistics("WPA", weighForNewDPT, heightInMeters , agevalue , gendervalue);
				               	
                 kony.print("After FUnction:->" + TotalDPT);
				frmEnrollWeighMember.lblWPAinfo.text = WPA;
                if (!checkAppSettingEnable(Settings["DPT"]) && agevalue < 16) {
                     frmEnrollWeighMember.txtDPTValue.setEnabled(true);
                } else {
					frmEnrollWeighMember.txtDPTValue.text = TotalDPT.toString();
                    kony.print("else IsAddIndividualfrmEnrollWeighMember.txtDPTValue.text" );
                    frmEnrollWeighMember.txtDPTValue.setEnabled(false);
					
                }
                kony.print("TotalDPT----->>>" + TotalDPT);
            }
            var GoalFive = com.es.weighincalculations.CalculateGoalWeight(parseFloat(roundWeight), "5");
            frmEnrollWeighMember.lblgoalfive.text = GoalFive.toString() + " " + UnitText;
            kony.print("GoalFive----->>>" + GoalFive);

            var GoalTen = com.es.weighincalculations.CalculateGoalWeight(parseFloat(roundWeight), "10");
            frmEnrollWeighMember.lblgoalten.text = GoalTen.toString() + " " + UnitText;
            kony.print("GoalTen----->>>" + GoalTen);


            heightinInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
            kony.print("heightinInches----->>>" + heightinInches);
            var roundedheightinInches = Math.round(heightinInches);
            kony.print("roundedheightinInches----->>>" + roundedheightinInches);
          //**MEG 7278 
          // var HealthyRange = com.es.weighincalculations.CalculateHelathyWeightRange(roundedheightinInches);
           var HealthyRange =[];
           com.es.weighincalculations.getHelathyWeightRange(roundedheightinInches,function(healthyRange){
            kony.print("healthyRange 1 " + JSON.stringify(healthyRange));
            HealthyRange = healthyRange ; 
          }); 
          //**End
          //Added by praveen kalal MEG-926
            if (HealthyRange != undefined && HealthyRange.length > 0) {
                frmEnrollWeighMember.lblhealthyrange.text = HealthyRange[0] + " " + UnitText + "-" + HealthyRange[1] + " " + UnitText;
            } else {
                frmEnrollWeighMember.lblhealthyrange.text = "";
            }
            //Ended by praveen kalal MEG-926
            kony.print("glbPersonalGoalWeight-->>" + glbPersonalGoalWeight);
            frmEnrollWeighMember.lblPersonalGoalWeight.text = checkValidString(glbPersonalGoalWeight) ? ""+glbPersonalGoalWeight+" "+UnitText : "";
            kony.print("HealthyRange----->>>" + HealthyRange);


        } else {
            isWeightNotInRange = true;
        }
        setDollerPriceValue(); // added for MEG-4797 [Ankit]
    } catch (e) {
        GlobalException(e);
    }

}

function eventonClickCheckBoxEnrollWeighMember() {
    if (frmEnrollWeighMember.imgCheckBox.src == "attending_disable.png") {
        frmEnrollWeighMember.imgCheckBox.src = "attending.png";
        IsAttendMeeting = true;
    } else {
        frmEnrollWeighMember.imgCheckBox.src = "attending_disable.png";
        IsAttendMeeting = false;
    }
}


//MEG-112
function eventonClickvBoxPayment() {
    kony.print("=====IsWebsiteMember===" + IsWebsiteMember)
    if (IsWebsiteMember == FlowForScreens.Website) {
        kony.print("Online member");
        /* For online/website member, glbMemberId is already created with generateDeviceLevelMemberID function while inserting that record in local DB.
        in viewMemberProfileDetails.js file at line no.598.
        */
    } else {
        boEnrollMember.generateDeviceLevelMemberID();
    }
    
    var birthDate;
    var subscription = frmEnrollWeighMember.lblSubType.text;
    
    var checkDPTSettings = checkAppSettingEnable(Settings["DPT"]) ? true : false;
    kony.print("IS checkDPTSettings ==============" + checkDPTSettings);
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
        if (!isNWI) {
        
        	birthDate = frmAddIndividulaMember.lblDOBInfo.text;
        	
        	
            kony.print("PK in----" + frmEnrollWeighMember.txtWeight.text + "----currRoundWeight---" + currRoundWeight);
            currRoundWeight = frmEnrollWeighMember.txtWeight.text;
            kony.print("----currRoundWeight---" + currRoundWeight);
            valid = new validationcls();
            var res = valid.validateMinorForMP(subscription,birthDate).checkForRequiredFields(frmEnrollWeighMember.txtWeight.text, "", "strMsgWeighin").validateWeight(currRoundWeight).isValid();
            if (res) {
                valid = new validationcls();
                
                if(!checkDPTSettings && agevalue>16) {  //MEGCA-296
                	kony.print("IS add inside old validation");
                	var resSubID = valid.checkForRequiredFields(frmEnrollWeighMember.txtDPTValue.text, "DPT", "strmsgDPT").isValid();
                } else {
                	kony.print("IS add inside new validation");
                	var resSubID = valid.validateDPTvalue(frmEnrollWeighMember.txtDPTValue.text).isValid();
                }
				
                if (resSubID) {
                    
                    var heighInInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
                    kony.print("inside value===" + needToshowNoteMsg);
                    if (needToshowNoteMsg) {
                        kony.print("inside condition" + popupBMINote.textareaBMINote.text);
                        if (popupBMINote.textareaBMINote.text != undefined && popupBMINote.textareaBMINote.text != null && popupBMINote.textareaBMINote.text.trim() != "") {
                            if (popupBMINote.textareaBMINote.text.length > 0) {
                                needToshowNoteMsg = false;
                                notifyNewlyEnrolledMember(true);
                            } else {
                                alertForMessages(kony.i18n.getLocalizedString("strMsgEligiblility"));
                                needToshowNoteMsg = false;
                            }
                        } else {
                            alertForMessages(kony.i18n.getLocalizedString("strMsgEligiblility"));
                            needToshowNoteMsg = false;
                        }
                    } else {
                        var wInKg = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(currRoundWeight));
                        kony.print("outside value===" + needToshowNoteMsg + "---wInKg--" + wInKg);

                        var IsEligible = boEnrollMember.checkEligibilityOfMember(wInKg, heighInInches);
                        if (IsEligible.isCorrect) {
                    		IsEligible = com.es.weighincalculations.CalculateBMIMessageBasedOnHealthyWeightRange(currRoundWeight,heighInInches);
                    	}
                        if (IsEligible.isCorrect) {
                            notifyNewlyEnrolledMember(true);
                        } else {
                            alertForEligileMember(IsEligible.msg);
                        }
                    }
                }
            }
        } else {
            //display no weigh in alert msg
			if(agevalue>16) { //MEGCA-296
	            showAlertForMessages(kony.i18n.getLocalizedString("strMsgNoWeighIn"), alertCallBackForEnrollNoWieghIn);
			} else {
				var dptValid = valid.validateDPTvalue(frmEnrollWeighMember.txtDPTValue.text).isValid();
		        if (dptValid) {	
		            showAlertForMessages(kony.i18n.getLocalizedString("strMsgNoWeighIn"), alertCallBackForEnrollNoWieghIn);
		        }
			}
        }
    } else {
    
    	if (IsReEnrollScreen == FlowForScreens.ReEnroll || IsPreRegister == FlowForScreens.PreRegistered){
    		
        	birthDate = formattedDate(termMemberInfo.DateOfBirth);
    	} else{
    		birthDate = frmEnrollNewMember.lblDOBInfo.text;
    	}
    	
    	
        kony.print("PK in2----" + frmEnrollWeighMember.txtWeight.text + "----roundWeight---" + roundWeight);
        valid = new validationcls();
        var res = valid.validateMinorForMP(subscription,birthDate).checkForRequiredFields(frmEnrollWeighMember.txtWeight.text, "", "strMsgWeighin").validateWeight(roundWeight).isValid();
        if (res) {
            valid = new validationcls();
            
            if(!checkDPTSettings && agevalue>16) {  //MEGCA-296
            	var resSubID = valid.checkForRequiredFields(frmEnrollWeighMember.txtDPTValue.text, "DPT", "strmsgDPT").isValid();
            } else {
            	var resSubID = valid.validateDPTvalue(frmEnrollWeighMember.txtDPTValue.text).isValid();
            }
			
            if (resSubID) {
            	
                var heighInInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
                kony.print("inside value===" + needToshowNoteMsg);
                if (needToshowNoteMsg) {
                    kony.print("inside condition" + popupBMINote.textareaBMINote.text);
                    if (popupBMINote.textareaBMINote.text != undefined && popupBMINote.textareaBMINote.text != null && popupBMINote.textareaBMINote.text.trim() != "") {
                        if (popupBMINote.textareaBMINote.text.length > 0) {
                            needToshowNoteMsg = false;
                            notifyNewlyEnrolledMember(true);
                        } else {
                            alertForMessages(kony.i18n.getLocalizedString("strMsgEligiblility"));
                            needToshowNoteMsg = false;
                        }
                    } else {
                        alertForMessages(kony.i18n.getLocalizedString("strMsgEligiblility"));
                        needToshowNoteMsg = false;
                    }
                } else {
                	var wInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(frmEnrollWeighMember.txtWeight.text));
                    kony.print("outside value===" + needToshowNoteMsg+"---weightInKG---"+weightInKG);
                    var IsEligible = boEnrollMember.checkEligibilityOfMember(wInKG, heighInInches);
                    if (IsEligible.isCorrect) {
                    		IsEligible = com.es.weighincalculations.CalculateBMIMessageBasedOnHealthyWeightRange(roundWeight,heighInInches);
                    }
                    if (IsEligible.isCorrect) {
                        notifyNewlyEnrolledMember(true);
                    } else {
                        alertForEligileMember(IsEligible.msg);
                    }
                }
            }
        }
    }
}


// action for weigh in alert 
function alertCallBackForEnrollNoWieghIn() {
    checkAttendMeetingForWeighIn();
}

function alertForEligileMember(msg) {
    var alertConfig = {
        message: kony.i18n.getLocalizedString(msg),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"),
        noLabel: kony.i18n.getLocalizedString("strLblNo"),
        alertHandler: onClickYesOrNOForNotes
    };
    var psConfig = {};
    var termedAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onClickYesOrNOForNotes(response) {
    kony.print("response val== " + response)
    var date = new Date();
    var LogDetails = [];
    LogDetails[0] = kony.i18n.getLocalizedString("strMsgForEligibilityOverrideLogAction");
    LogDetails[1] = kony.i18n.getLocalizedString("strMsgForEligibilityOverrideLogDesc");
    LogDetails[2] = date;
    if (response) {
        needToshowNoteMsg = true;
        kony.print("response val inside== " + response)
        openBMINotePopup();
        boEnrollMember.addLogForEligibility(LogDetails);
    } else {
        needToshowNoteMsg = false;
        kony.print("response val out== " + response)
    }

    kony.print("needToshowNoteMsg val last== " + needToshowNoteMsg)
}

function openStickyNotePopup() {
    var context = {
        "widget": frmEnrollWeighMember.lblNotes,
        "anchor": "top",
        "sizetoanchorwidth": true
    };
    popupStickyNote.setContext(context);
    popupStickyNote.show();
}

function saveStickyNote() {
    stickyNote = popupStickyNote.textareaStickyNote.text;
    popupStickyNote.dismiss();
}

function openBMINotePopup() {
    try {
        kony.print("openBMINotePopup val last== " + needToshowNoteMsg)
        var context1;
        if (kony.application.getCurrentForm().id == frmEnrollWeighMember.id)
            context1 = {
                "widget": frmEnrollWeighMember.lblNotes,
                "anchor": "top",
                "sizetoanchorwidth": true
            };
        else if (kony.application.getCurrentForm().id == frmProcessMember.id)
            context1 = {
                "widget": frmProcessMember.lblNotes,
                "anchor": "top",
                "sizetoanchorwidth": true
            };
        popupBMINote.setContext(context1);
        popupBMINote.show();
    } catch (error) {
        kony.print("Error" + JSON.stringify(error))
    }
}

function saveBMINote() {
    bmiNote = popupBMINote.textareaBMINote.text;
    isBMIoverloaded = true;
    popupBMINote.dismiss();
}

//Added for MEGCN-14
function eventOnPostshowFrmEnrollWeighMember() {
	needToshowNoteMsg = false;
    if (in_array(deviceLocale,Countries["CA"])) {
        kony.print("In canada");
        // Added to solve ‘At Risk’ checkbox reset on back
        if (IsAtRisk == true) {
            frmEnrollWeighMember.imgCheckbox2.src = "atrisk.png";
        } else {
            frmEnrollWeighMember.imgCheckbox2.src = "atrisk_disable.png";
        }
        frmEnrollWeighMember.vboxCheckAtRisk.isVisible=true;
        frmEnrollWeighMember.vboxAtendingMeeting.isVisible=true;
    }
    
    kony.print("--> " + deviceLocale + "==>IsAttendMeeting = " + IsAttendMeeting + "-- IsFromPM =  " + IsFromPM);
    if (in_array(deviceLocale,Countries["CA"]) && IsFromPM == FlowForScreens.ProcessMember) {
        kony.print("--> if condition ");
        if (IsAttendMeeting == false) {
            frmProcessMember.imgCheckbox1.src = "attending_disable.png";
        } else {
            frmProcessMember.imgCheckbox1.src = "attending.png";
        }
        frmProcessMember.vboxAtendingMeeting.isVisible = true;
        frmProcessMember.imgCheckbox1.isVisible = true;
    } else if (in_array(deviceLocale,Countries["CA"])) {
    if (IsAttendMeeting == false) {
            frmEnrollWeighMember.imgCheckBox.src = "attending_disable.png";
        } else {
            frmEnrollWeighMember.imgCheckBox.src = "attending.png";
        }
        frmEnrollWeighMember.vboxAtendingMeeting.isVisible = true;
        frmEnrollWeighMember.imgCheckBox.isVisible = true;
    } else {
        kony.print("--> else ");
        frmProcessMember.imgCheckbox1.src = "attending.png";
        IsAttendMeeting = true;
        frmEnrollWeighMember.vboxCheckAtRisk.isVisible=false;
        frmEnrollWeighMember.vboxAtendingMeeting.isVisible=false;
    }
    
	var goalWeight=frmAddIndividulaMember.txtGoalWeight.text;
    if (IsAddIndividual == FlowForScreens.AddIndividual){
    	frmEnrollWeighMember.lblProcessMemberSubHeader4.text=frmAddIndividulaMember.txtMemberID.text;
    	if(goalWeight!=undefined && goalWeight!=""){
    		frmEnrollWeighMember.lblGoalWeightInfo.text=goalWeight;
    		frmEnrollWeighMember.txtGoalWeightUnit.text=UnitText;
    	}else{
    		frmEnrollWeighMember.lblGoalWeightInfo.text="";
    		frmEnrollWeighMember.txtGoalWeightUnit.text="";
    	}
    }else if(IsEnrollMember == FlowForScreens.Enroll){
    	frmEnrollWeighMember.lblProcessMemberSubHeader4.text=frmEnrollNewMember.txtMemberIDInfo.text;
    }else if(IsReEnrollScreen == FlowForScreens.ReEnroll || IsPreRegister == FlowForScreens.PreRegistered || IsWebsiteMember == FlowForScreens.Website){
    	frmEnrollWeighMember.lblProcessMemberSubHeader4.text= frmEnrollReturningMember.txtRegistrationID.text;
    }
    
    if (!checkAppSettingEnable(Settings["DPT"])) {
    	if(IsAddIndividual){
    		if(agevalue > 17){
    			frmEnrollWeighMember.txtDPTValue.setEnabled(false);
    			frmEnrollWeighMember.txtDPTValue.text = "";
    			
    		}else{
    			frmEnrollWeighMember.txtDPTValue.setEnabled(true);
    		}
    	}
    	else{
    		if(agevalue > 15){
    			frmEnrollWeighMember.txtDPTValue.setEnabled(false);
    			frmEnrollWeighMember.txtDPTValue.text = "";
    			
    		}else{
    			frmEnrollWeighMember.txtDPTValue.setEnabled(true);
    		}
       	}
    
	 }else {
  		frmEnrollWeighMember.txtDPTValue.setEnabled(false);
 	}
	
	if(checkAppSettingEnable(Settings["DPT"])){
		frmEnrollWeighMember.hboxWPA.isVisible = true;
	}else{
		frmEnrollWeighMember.hboxWPA.isVisible = false;
	}
  
  	//Added changes for MEG-7061
  	if(checkAppSettingEnable(Settings["NMILESTONE"])){
		frmEnrollWeighMember.hbox202458205262808.isVisible = false;
      	frmEnrollWeighMember.hbox202458205262814.isVisible = false;
	}else{
		frmEnrollWeighMember.hbox202458205262808.isVisible = true;
      	frmEnrollWeighMember.hbox202458205262814.isVisible = true;
	}
    
}
