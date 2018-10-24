//MEG-114 database integration part is pending
var IsFromPM = "";
var valid = new validationcls();
var roundWeightPM;
//Adding this line again after code removed by Sayali
var IsAttendMeeting = true; //Changed on 16/5/2014 Default value passed was false nt matching the image that is checked and not unchecked.Nikita Acharya
var IsNWI = false;
var mileStoneObj = [];
var InsertAchMilestone = false;
var changeInLastWeight = 0;
var UnitText = "";
var missedwkClcDate; // added by praveen kalal to calculate missedweek based on lastweighin date
var passTypes;
var attendaceTypes;
var weekData = [];
var lastWeighDate = "";

function UnitLbsORKg() {
    glbLTCInfo = {};
    termMemberInfo = {};
    isFromPreActivationHeight = false;
    glbIsFormPM = "";
    goalWeightSub = "";
    IsAttendMeeting = (!in_array(deviceLocale, Countries["CA"])) ? true : false; //MEGCA -11 -default value 
    isOnlineMPMember = false;
    mileStoneObj = []; // clear the milestone object array
    eligibleMilestonesArrObj = []; // clear the eligible milestone object array
    glbSelectedMemberMtngOccrID = 0;
    if (deviceLocale == "fr_FR") {
        UnitText = "kg";
    } else //if (deviceLocale == "en_US"  || deviceLocale=="en_CA") 
    {
        UnitText = getLocalizedString("strLbs");
    }
    //Added for 4513
    isDisplayPersonalGoalAlert = false;
    isPersonalGoalWeight = false;
    glbPersonalGoalWeight = 0;
    isDisplayPersonalGoalAlertOnce = false;
    personalGoalDate = null;
    gblScannedData = "";
    IsAtRisk = false;
    //Added By PK MEGCA-346
    glbMilestoneName = "";
    frmEnrollWeighMember.hboxTodayMilestones.setVisibility(false);
    //End By PK MEGCA-346 
    //Added By PK MEGCA-434
    glbMemberId = 0;
    lastWeightFor5Lb = 0;
    //End By PK MEGCA-434 
}
var subtype = "";

function eventonClickvboxPaymentProcessMember() {
    var monitorData = {
        "WeighData": frmProcessMember.txtAreaWeightProcess.text
    };
    boMonitor.log("Member Process:- Weight detail", "vboxPaymentSection", monitorData, FlowForMonitor.ProcessMember);
    glbFormName.txtEmailID.setEnabled(true);
    frmCheckout.imgEnrollNormal.isVisible = false;
    frmCheckout.vboxFooterMemberSection.setEnabled(false);
    var subscription = frmProcessMember.lblSubType.text;
    kony.print("::PK::--gblDOBPM---" + gblDOBPM);
    var birthDate = formattedDate(gblDOBPM);
    kony.print("IsNWI==>>>" + IsNWI);
    if (!IsNWI) {
        valid = new validationcls();
        var res = valid.validateMinorForMP(subscription, birthDate).validateWeight(frmProcessMember.txtAreaWeightProcess.text).isValid();
        ClearVariables();
        glbSelectSubType = subtype;
        if (res) {
            kony.print("Res---->>>" + res);
            //Added for MEG-4497
            boEnrollMember.getMemberHeightByMemberId(function(resultHeight) {
                var memberHeight = resultHeight;
                kony.print("SJ--->>>memberHeight : " + memberHeight);
                kony.print("SJ---resultHeight : " + resultHeight);
                var roundWeight = com.es.weighincalculations.RoundWeight(frmProcessMember.txtAreaWeightProcess.text);
                roundWeight = (roundWeight.toString().length > 0) ? parseFloat(roundWeight).toFixed(1) : "";
                var weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeight));
                kony.print("------>>> Weight : " + weightInKG + ", Height : " + memberHeight);
                if (needToshowNoteMsg) {
                    kony.print("===>>>inside condition" + popupBMINote.textareaBMINote.text);
                    if (popupBMINote.textareaBMINote.text != undefined && popupBMINote.textareaBMINote.text != null && popupBMINote.textareaBMINote.text.trim() != "") {
                        if (popupBMINote.textareaBMINote.text.length > 0) {
                            needToshowNoteMsg = false;
                            IsFromPM = FlowForScreens.ProcessMember;
                            glbIsFormPM = FlowForScreens.ProcessMember;
                            kony.print("IsFromPM---->>>" + IsFromPM);
                            checkWeightLossByMemberId();
                            eventOnDoneWeightText();
                        } else {
                            alertForMessages(kony.i18n.getLocalizedString("strMsgEligiblility"));
                            needToshowNoteMsg = false;
                        }
                    } else {
                        alertForMessages(kony.i18n.getLocalizedString("strMsgEligiblility"));
                        needToshowNoteMsg = false;
                    }
                } else {
                    IsFromPM = FlowForScreens.ProcessMember;
                    glbIsFormPM = FlowForScreens.ProcessMember;
                    kony.print("IsFromPM---->>>" + IsFromPM);
                    var IsEligible = boEnrollMember.checkEligibilityOfMember(weightInKG, memberHeight);
                    if (IsEligible.isCorrect) {
                        IsEligible = com.es.weighincalculations.CalculateBMIMessageBasedOnHealthyWeightRange(roundWeight, memberHeight);
                    }
                    if (IsEligible.isCorrect) {
                        checkWeightLossByMemberId();
                        eventOnDoneWeightText();
                        isBMIoverloaded = false; // Added for WWMP-46
                        bmiNote = ""; // Added for WWMP-46
                    } else {
                        alertForEligileMember(IsEligible.msg);
                    }
                }
            });
        } else {
            IsFromPM = "";
        }
    } else {
        //show alert on weigh in screen
        showAlertForMessages(kony.i18n.getLocalizedString("strMsgNoWeighIn"), noWeighInAlertCallBack);
    }
}
//action for no weigh in alert 
function noWeighInAlertCallBack() {
    notifyNewlyEnrolledMember(false);
}

function eventonClickCheckBox() {
    if (frmProcessMember.imgCheckbox1.src == "attending_disable.png") {
        frmProcessMember.imgCheckbox1.src = "attending.png";
        IsAttendMeeting = true;
    } else {
        frmProcessMember.imgCheckbox1.src = "attending_disable.png";
        IsAttendMeeting = false;
    }
}

function eventonDoneTextAreaProcessMemberWeighCalculations(txtAreaWeightProcess, viewFlow, isProcess) {
    try {
        if (MissedWeekWeightData.length < 1) {
            tmpAcheivedMilestone = [];
        }
        kony.print("viewFlow==>  " + viewFlow);
        valid = new validationcls();
        var txtWeigh = com.es.weighincalculations.RoundWeight(txtAreaWeightProcess);
        if (IsFromPM == FlowForScreens.ProcessMember) {
            kony.print("IS txtWeigh before==>" + txtWeigh);
            txtWeigh = (txtWeigh.toString().length > 0) ? parseFloat(txtWeigh).toFixed(1) : "";
            kony.print("IS txtWeigh after==>" + txtWeigh);
            frmProcessMember.txtAreaWeightProcess.text = (txtWeigh.toString().length > 0) ? txtWeigh.toString() : "";
        }
        var result = valid.validateWeight(txtWeigh).isValid();
        if (result) {
            kony.print("IsViewMember====>>>" + IsViewMember);
            frmViewMemberProfile.lblHealthyRangeData.text = "";
            kony.print("gblHeightPM in the Calculation function===>>" + gblHeightPM);
            var heightinInches = gblHeightPM; // com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
            kony.print("heightinInches----->>>" + heightinInches);
            var roundedheightinInches = Math.round(heightinInches);
            kony.print("roundedheightinInches----->>>" + roundedheightinInches);
            var heightInMeters = com.es.weighincalculations.ConvertHeight_Inches_To_Meters(gblHeightPM);
            if (gblHeightPM != 0) {
                kony.print("gblDOBPM from PM ---->>>" + gblDOBPM);
                if (gblDOBPM.search("T") != -1) {
                    var WeighDateFormatted = formattedDate(gblDOBPM);
                    kony.print("WeighDateFormatted from PM ---->>>" + WeighDateFormatted);
                } else {
                    var WeighDateFormatted = gblDOBPM;
                }
                //
                var fortnightAway = new Date(WeighDateFormatted);
                var date = fortnightAway.getDate();
                var mon = fortnightAway.getMonth() + 1;
                var year = fortnightAway.getFullYear();
                agevalue = com.es.weighincalculations.CalculateAge(mon, date, year);
                kony.print("agevalue from PM ---->>>" + agevalue);
                //**MEG 7278 
                // var HealthyRange = com.es.weighincalculations.CalculateHelathyWeightRange(roundedheightinInches);
                var HealthyRange = [];
                com.es.weighincalculations.getHelathyWeightRange(roundedheightinInches, function(healthyRange) {
                    kony.print("healthyRange 3 " + JSON.stringify(healthyRange));
                    HealthyRange = healthyRange;
                });
                //**End
                if (HealthyRange != undefined && HealthyRange.length > 0) {
                    frmViewMemberProfile.lblHealthyRangeData.text = HealthyRange[0] + " " + UnitText + "-" + HealthyRange[1] + " " + UnitText;
                } else {
                    frmViewMemberProfile.lblHealthyRangeData.text = "";
                }
                kony.print("HealthyRange----->>>" + HealthyRange);
                kony.print("gblHeightPM in PM this is inches====>>>" + gblHeightPM);
                kony.print("gblHeightPM in PM this is meters====>>>" + heightInMeters);
                kony.print("gblGenderPM in PM====>>>" + gblGenderPM);
                var roundWeightPM = com.es.weighincalculations.RoundWeight(txtAreaWeightProcess);
                if (deviceLocale == "fr_FR") {
                    var DPTWeightNeedsKG = weightInKG;
                } else // if (deviceLocale == "en_US"  || deviceLocale=="en_CA") 
                {
                    var DPTWeightNeedsKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeightPM));
                }
                //Roshnivar TotalDPT = com.es.weighincalculations.CalculateDPT(agevalue, heightInMeters, DPTWeightNeedsKG, gblGenderPM);
                var TotalDPT = com.es.weighincalculations.CalculateStatistics("DPT", DPTWeightNeedsKG, heightInMeters, agevalue, gblGenderPM);
                var WPA = com.es.weighincalculations.CalculateStatistics("WPA", DPTWeightNeedsKG, heightInMeters, agevalue, gblGenderPM);
                //alert("5. The total WPA is.  "+ JSON.stringify(WPA));
                kony.print("1. The total WPA is.  " + JSON.stringify(WPA));
                //frmViewMemberProfile.lblCurrentDPTData.text=TotalDPT.toString();
                kony.print("TotalDPT----->>>" + TotalDPT);
                frmProcessMember.lblTodaysDTPInfo.text = TotalDPT.toString();
                frmProcessMember.lblWPAinfo.text = WPA;
                //Bmi Calculation for MEGCA-442
                var roundWeightLbs = com.es.weighincalculations.RoundWeight(txtWeigh);
                var weightKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeightLbs));
                var currWeight = deductWeight(weightKG);
                var bmi = com.es.weighincalculations.CalculateBMI(parseFloat(currWeight), parseFloat(heightInMeters));
                kony.print("--->>>bmi : " + bmi);
                frmProcessMember.lblBMIInfo.text = bmi;
            } else {
                kony.print("the data for DPT healthy range and other calculations dependent on height are not correct as the height is not fetched correctly from database");
            }
            //if(IsViewMember == FlowForScreens.ViewMember)
            //{
            //Commenting above and adding new IF condition to handle MEG-2800
            if ((IsFromPM != FlowForScreens.ProcessMember && kony.application.getCurrentForm().id == frmViewMemberProfile.id) || viewFlow) {
                kony.print("IN frmViewMemberProfile.id || viewFlow" + frmViewMemberProfile.id + "==" + viewFlow);
                frmProcessMember.lblTodayMilestoneInfo.text = "";
                frmProcessMember.lblProgressSinceLastInfo.text = "";
                kony.print("GoalFive in View----->>>" + IsViewMember);
                valid = new validationcls();
                roundWeightPM = com.es.weighincalculations.RoundWeight(txtAreaWeightProcess);
                kony.print("txtAreaWeightProcess value----->>>" + txtAreaWeightProcess);
                if (deviceLocale == "fr_FR") {
                    var weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeightPM));
                    kony.print("weightInKG in fr_FR----->>>" + weightInKG);
                } else //if (deviceLocale == "en_US"  || deviceLocale=="en_CA") 
                {
                    var weightInKG = (parseFloat(roundWeightPM)); //this will keep the value as lbs only
                    kony.print("weightInKG in en_US----->>>" + weightInKG);
                }
                kony.print("weightInKG----->>>" + weightInKG);
                kony.print("weightvalue " + roundWeightPM);
                var startWeightInLbs = gblStartWeightPM;
                var GoalFive = com.es.weighincalculations.CalculateGoalWeight(parseFloat(startWeightInLbs), "5");
                frmViewMemberProfile.lbl5GoalData.text = GoalFive.toString() + " " + UnitText;
                var GoalTen = com.es.weighincalculations.CalculateGoalWeight(parseFloat(startWeightInLbs), "10");
                frmViewMemberProfile.lbl10GoalData.text = GoalTen.toString() + " " + UnitText;
                // MEG 2869: Total weight loss is not shown while coming from View profil to process member.
                kony.print("startWeightInLbs----->>>1 " + startWeightInLbs);
                var roundstartweightInLbs = com.es.weighincalculations.RoundWeight(startWeightInLbs);
                kony.print("roundstartweightInLbs----->>>1 " + roundstartweightInLbs);
                var startweightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundstartweightInLbs));
                if (deviceLocale == "fr_FR") {
                    var TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startweightInKG, weightInKG);
                    kony.print("TotalWeightLoss in fr_FR----->>>" + TotalWeightLoss);
                } else // if (deviceLocale == "en_US"  || deviceLocale=="en_CA") 
                {
                    var TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startWeightInLbs, weightInKG);
                    kony.print("TotalWeightLoss in en_US----->>>" + TotalWeightLoss);
                }
                TotalWeightLoss = parseFloat(TotalWeightLoss) * (-1);
                kony.print("TotalWeightLoss----->>>" + TotalWeightLoss);
                if (parseFloat(TotalWeightLoss) > 0) {
                    kony.print("inside positive frmProcessMember.lblTotalWeightChangeInfo.skin " + frmProcessMember.lblTotalWeightChangeInfo.skin);
                    frmProcessMember.lblTotalWeightChangeInfo.text = "+" + parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
                    frmProcessMember.lblTotalWeightChangeInfo.skin = "lblRedBold";
                } else {
                    frmProcessMember.lblTotalWeightChangeInfo.skin = "lblHelveticaBoldGreen";
                    frmProcessMember.lblTotalWeightChangeInfo.text = parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
                }
                if (TotalWeightLoss == 5 || TotalWeightLoss == "5") {
                    frmProcessMember.lblTodayMilestoneInfo.text = "5 " + getLocalizedString("strLbs");
                } else {
                    frmProcessMember.lblTodayMilestoneInfo.text = glbMilestoneName;
                }
                boEnrollMember.getAvgWeightLossOfMember(glbMemberId);
                // MEG 2869 End
            } else {
                kony.print("In ELSE FlowForScreens.ProcessMember==> " + FlowForScreens.ProcessMember);
                if (IsFromPM == FlowForScreens.ProcessMember) {
                    callbackForMilestone = callbackAfterMilestoneAchieved;
                    kony.print("isProcess in Process member " + isProcess);
                    boMemberMilestone.getEligibleMilestoneByMemberId(function(res) {
                        if (res.length > 0) {
                            _.each(res, function(m) {
                                m.strmilestoneName = m.MilestoneName;
                                m.milestoneID = m.MilestoneID;
                            });
                            milestoneRes = res;
                            kony.print("::PK:--MilestoneList ---" + JSON.stringify(res));
                            checkAchievedMilestone(isProcess);
                        } else {
                            callbackForMilestone.call(null); //Added for MEG-4763
                        }
                    });
                    //frmProcessMember.txtAreaWeightProcess.text = parseFloat(txtAreaWeightProcess).toFixed(1);
                } else {
                    callbackAfterMilestoneAchieved();
                }

                function callbackAfterMilestoneAchieved() {
                    txtAreaWeightProcess = frmProcessMember.txtAreaWeightProcess.text;
                    kony.print("txtAreaWeightProcess in callbackAfterMilestoneAchieved " + txtAreaWeightProcess);
                    roundWeightPM = com.es.weighincalculations.RoundWeight(txtAreaWeightProcess);
                    var res = valid.validateWeight(roundWeightPM).isValid();
                    kony.print("res in ProcessMember----->>>" + res);
                    if (res) {
                        //eventOnDoneWeightText(); 
                        if (deviceLocale == "fr_FR") {
                            var weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeightPM));
                            kony.print("weightInKG in fr_FR----->>>" + weightInKG);
                        } else // if (deviceLocale == "en_US"  || deviceLocale=="en_CA") 
                        {
                            var weightInKG = (parseFloat(roundWeightPM)); //this will keep the value as lbs only
                            kony.print("weightInKG in en_US----->>>" + weightInKG);
                        }
                        kony.print("weightInKG----->>>" + weightInKG);
                        //kony.print("Value -->"+parseInt(frmProcessMember.txtAreaWeightProcess.text));
                        kony.print("weightvalue " + roundWeightPM);
                        kony.print("gblHeightPM in the Calculation function===>>" + gblHeightPM);
                        var heightinInches = gblHeightPM; // com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
                        kony.print("heightinInches----->>>" + heightinInches);
                        var roundedheightinInches = Math.round(heightinInches);
                        kony.print("roundedheightinInches----->>>" + roundedheightinInches);
                        //Need to uncomment the below code after the query for Start Weight value is solve, also ht goalweight in lbs to next milestone is a query
                        var startWeightInLbs = gblStartWeightPM;
                        kony.print("startWeightInLbs----->>>" + startWeightInLbs);
                        var roundstartweightInLbs = com.es.weighincalculations.RoundWeight(startWeightInLbs);
                        kony.print("roundstartweightInLbs----->>>" + roundstartweightInLbs);
                        var startweightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundstartweightInLbs));
                        kony.print("startweightInKG----->>>" + startweightInKG);
                        ///////////////////////Changing this code to make calculations device locale specific
                        //var GoalFive=com.es.weighincalculations.CalculateGoalWeight(parseFloat(roundWeightPM),"5");
                        var GoalFive = com.es.weighincalculations.CalculateGoalWeight(parseFloat(roundstartweightInLbs), "5");
                        frmProcessMember.lbl5GoalTargetInfo.text = GoalFive.toString() + " " + UnitText;
                        var GoalTen = com.es.weighincalculations.CalculateGoalWeight(parseFloat(roundstartweightInLbs), "10");
                        frmProcessMember.lbl10GoalTargetInfo.text = GoalTen.toString() + " " + UnitText;
                        var goalWeightInLbs;
                        if (gblGoalWeightPM != 0 && gblGoalWeightPM != null) {
                            kony.print("Value of GW:->" + gblGoalWeightPM);
                            goalWeightInLbs = gblGoalWeightPM;
                            frmProcessMember.lblGoalWeightInfo.text = gblGoalWeightPM;
                            //Ami add-MEG-2552
                            frmProcessMember.txtGoalWeightUnit.text = " " + UnitText;
                            kony.print("GW" + frmProcessMember.lblGoalWeightInfo.text);
                            kony.print("goalWeightInLbs in if----->>>" + goalWeightInLbs);
                        } else {
                            goalWeightInLbs = 0;
                            kony.print("Value of GW WHEN ZERO IS SELECTED.:->" + gblGoalWeightPM);
                            frmProcessMember.lblGoalWeightInfo.text = goalWeightInLbs;
                            //Ami add-MEG-2552
                            frmProcessMember.txtGoalWeightUnit.text = " " + UnitText;
                            kony.print("goalWeightInLbs in else----->>>" + goalWeightInLbs);
                        }
                    }
                    lbsToNextMilestone();
                    frmProcessMember.lblAverageWeightLossInfo.skin = "lblHelveticaBoldGreen";
                    frmProcessMember.lblAverageWeightLossInfo.text = parseFloat(0).toFixed(1) + " " + UnitText;
                    boEnrollMember.getAvgWeightLossOfMember(glbMemberId);
                    if (deviceLocale == "fr_FR") {
                        var TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startweightInKG, weightInKG);
                        kony.print("TotalWeightLoss in fr_FR----->>>" + TotalWeightLoss);
                    } else //if (deviceLocale == "en_US"  || deviceLocale=="en_CA") 
                    {
                        var TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startWeightInLbs, weightInKG);
                        kony.print("TotalWeightLoss in en_US----->>>" + TotalWeightLoss);
                    }
                    TotalWeightLoss = parseFloat(TotalWeightLoss) * (-1);
                    kony.print("TotalWeightLoss----->>>" + TotalWeightLoss);
                    if (parseFloat(TotalWeightLoss) > 0) {
                        kony.print("inside positive frmProcessMember.lblTotalWeightChangeInfo.skin " + frmProcessMember.lblTotalWeightChangeInfo.skin);
                        frmProcessMember.lblTotalWeightChangeInfo.text = "+" + parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
                        frmProcessMember.lblTotalWeightChangeInfo.skin = "lblRedBold";
                    } else {
                        frmProcessMember.lblTotalWeightChangeInfo.skin = "lblHelveticaBoldGreen";
                        frmProcessMember.lblTotalWeightChangeInfo.text = parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
                    }
                    if (TotalWeightLoss == 5 || TotalWeightLoss == "5") {
                        frmProcessMember.lblTodayMilestoneInfo.text = "5 " + getLocalizedString("strLbs");
                    } else {
                        frmProcessMember.lblTodayMilestoneInfo.text = glbMilestoneName;
                    }
                    var heightInMeters = com.es.weighincalculations.ConvertHeight_Inches_To_Meters(gblHeightPM);
                    if (gblHeightPM != 0) {
                        kony.print("gblDOBPM from PM ---->>>" + gblDOBPM);
                        var WeighDateFormatted = formattedDate(gblDOBPM);
                        kony.print("WeighDateFormatted from PM ---->>>" + WeighDateFormatted);
                        var fortnightAway = new Date(WeighDateFormatted);
                        var date = fortnightAway.getDate();
                        var mon = fortnightAway.getMonth() + 1;
                        var year = fortnightAway.getFullYear();
                        agevalue = com.es.weighincalculations.CalculateAge(mon, date, year);
                        kony.print("agevalue from PM ---->>>" + agevalue);
                        //**MEG 7278 
                        //  var HealthyRange = com.es.weighincalculations.CalculateHelathyWeightRange(roundedheightinInches);
                        var HealthyRange = [];
                        com.es.weighincalculations.getHelathyWeightRange(roundedheightinInches, function(healthyRange) {
                            kony.print("healthyRange 4 " + JSON.stringify(healthyRange));
                            HealthyRange = healthyRange;
                        });
                        //**End 
                        if (HealthyRange != undefined && HealthyRange.length > 0) {
                            frmProcessMember.lblHealthyRangeInfo.text = HealthyRange[0] + " " + UnitText + "-" + HealthyRange[1] + " " + UnitText;
                        } else {
                            frmProcessMember.lblHealthyRangeInfo.text = "";
                        }
                        kony.print("HealthyRange----->>>" + HealthyRange);
                        kony.print("gblHeightPM in PM this is inches====>>>" + gblHeightPM);
                        kony.print("gblHeightPM in PM this is meters====>>>" + heightInMeters);
                        kony.print("gblGenderPM in PM====>>>" + gblGenderPM);
                        //change sayali
                        var DPTWeightNeedsKG = "";
                        if (deviceLocale == "fr_FR") {
                            var DPTWeightNeedsKG = weightInKG;
                        } else {
                            var DPTWeightNeedsKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(weightInKG));
                        }
                        //Roshni var TotalDPT = com.es.weighincalculations.CalculateDPT(agevalue, heightInMeters, DPTWeightNeedsKG, gblGenderPM);
                        var TotalDPT = com.es.weighincalculations.CalculateStatistics("DPT", DPTWeightNeedsKG, heightInMeters, agevalue, gblGenderPM);
                        var WPA = com.es.weighincalculations.CalculateStatistics("WPA", DPTWeightNeedsKG, heightInMeters, agevalue, gblGenderPM);
                        //alert("6. The total WPA is.  "+ JSON.stringify(WPA));
                        kony.print("1. The total WPA is.  " + JSON.stringify(WPA));
                        frmProcessMember.lblTodaysDTPInfo.text = TotalDPT.toString();
                        frmProcessMember.lblWPAinfo.text = WPA;
                        kony.print("TotalDPT----->>>" + TotalDPT);
                    } else {
                        kony.print("the data for DPT healthy range and other calculations dependent on height are not correct as the height is not fetched correctly from database");
                        //alertForMessages(kony.i18n.getLocalizedString("strHeightLengthCalc"));
                    }
                    kony.print("gblWeightDataAvailable in process flow: " + gblWeightDataAvailable);
                    if (gblWeightDataAvailable) {
                        var previousWeightInKgs = WeightValueFromDB;
                        if (deviceLocale == "fr_FR") {
                            previousWeightInKgs = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(WeightValueFromDB));
                            var ProgressLastWeighIn = com.es.weighincalculations.ProgressSinceLastWeightIn(weightInKG, previousWeightInKgs);
                            kony.print("ProgressLastWeighIn in FR----->>>" + ProgressLastWeighIn);
                        } else //if (deviceLocale == "en_US"  || deviceLocale=="en_CA") 
                        {
                            var ProgressLastWeighIn = com.es.weighincalculations.ProgressSinceLastWeightIn(weightInKG, previousWeightInKgs);
                            kony.print("ProgressLastWeighIn in US----->>>" + ProgressLastWeighIn);
                        }
                        kony.print("parseFloat(ProgressLastWeighIn) in US----->>>" + parseFloat(ProgressLastWeighIn));
                        if (parseFloat(ProgressLastWeighIn) > 0) {
                            frmProcessMember.lblProgressSinceLastInfo.skin = "lblRedBold";
                            frmProcessMember.lblProgressSinceLastInfo.text = "+" + parseFloat(ProgressLastWeighIn).toFixed(1) + " " + UnitText;
                        } else {
                            frmProcessMember.lblProgressSinceLastInfo.skin = "lblHelveticaBoldGreen";
                            frmProcessMember.lblProgressSinceLastInfo.text = parseFloat(ProgressLastWeighIn).toFixed(1) + " " + UnitText;
                        }
                        //var ProgressLastWeighIn=com.es.weighincalculations.ProgressSinceLastWeightIn(weightInKG, previousWeightInKgs);
                        kony.print("ProgressLastWeighIn----->>>" + ProgressLastWeighIn);
                        changeInLastWeight = parseFloat(ProgressLastWeighIn).toFixed(1);
                    } else {
                        frmProcessMember.lblProgressSinceLastInfo.text = "--";
                        frmProcessMember.lblProgressSinceLastInfo.skin = "lblHelveticaBold50pxGrey";
                        getWeightDetailsObject = {};
                        getWeightDetailsObject.WeekNumber = 0;
                        getWeightDetailsObject.MemberID = glbMemberId;
                        kony.print("for no data weight is :::: " + weightInKG);
                        changeInLastWeight = 0;
                    }
                }
                IsViewMember = "";
                kony.print("frmProcessMember.lblTotalWeightChangeInfo.skin " + frmProcessMember.lblTotalWeightChangeInfo.skin);
                kony.print("frmProcessMember.lblProgressSinceLastInfo.skin " + frmProcessMember.lblProgressSinceLastInfo.skin);
            }
        }
    } catch (e) {
        GlobalException(e);
    }
}
//This function is called on NOWeighIn button tap 
function eventonClickbtnNoWeighIn() {
    //Added by Sayali for issue - displaying 1st members start weight in 2nd members profile when process 2nd member with NWI
    kony.print("----->NWI Flow members weight" + frmProcessMember.txtAreaWeightProcess.text);
    kony.print("----->glbMemberId :" + glbMemberId);
    boLifeTimeEligibility.checkEligibilityFlow(frmProcessMember.txtAreaWeightProcess.text);
    //Validations for NWI
    if (MemberType == "Value") //Validations for Value members
    {
        boProcessMember.getValueMemberWeighInDataForNWI(getWeightDetailsObject.MemberID, getMemberWeighInDataForNWIResponse);
    } else if (in_array(MemberType.toUpperCase(), lifeTimeTypes)) //Validations for Lifetime members
    {
        boProcessMember.getLifetimeMemberWeighInDataForNWI(getWeightDetailsObject.MemberID, getMemberWeighInDataForNWIResponse);
    }
}
//This is the response function for NWI validation
function getMemberWeighInDataForNWIResponse(isNWIAllowed) {
    //MEG-3919
    if (glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase()) {
        //If missed week given - has this month entry, allow NWI
        if (MissedWeekWeightData.length > 0) {
            kony.print("::getMemberWeighInDataForNWIResponse:: MissedWeekWeightData=" + JSON.stringify(MissedWeekWeightData));
            var data = JSON.parse(JSON.stringify(MissedWeekWeightData));
            var dates = _.map(data, function(w) {
                return new Date(w.WeighInDate);
            });
            var matches = _.filter(dates, function(d) {
                return (d.getMonth() == new Date().getMonth()) && (d.getFullYear() == new Date().getFullYear());
            });
            kony.print("::getMemberWeighInDataForNWIResponse:: matches=" + JSON.stringify(matches));
            if (checkValidString(matches)) {
                //There are one or more records for the given month
                var minDate = _.min(matches, function(d) {
                    return d;
                });
                kony.print("::getMemberWeighInDataForNWIResponse:: typeof minDate=" + typeof minDate);
                if (new Date().setHours(0, 0, 0, 0) <= new Date(minDate).setHours(0, 0, 0, 0)) {
                    //today is less than the minimum date in weights - so NWI not allowed 
                    kony.print("NWI is not allowed");
                    alertForMessages(kony.i18n.getLocalizedString("strMsgNWINotAllowed"));
                    //Return the control
                    return;
                } else {
                    //Weight Done for that month in missed week so allow
                    isNWIAllowed = true;
                }
            }
        }
    }
    if (isNWIAllowed) { //Allow NWI
        kony.print("NWI is allowed");
        if (frmProcessMember.imgNoWeighIn.src == "noweighin_disable.png") {
            kony.print("frmProcessMember.btnNoWeighIn.skin in if==>>" + frmProcessMember.imgNoWeighIn.src);
            frmProcessMember.imgNoWeighIn.src = "noweighin.png";
            frmProcessMember.txtAreaWeightProcess.setEnabled(false);
            roundWeightPM = getWeightDetailsObject.Weight;
            kony.print("round weightPM ::here::" + roundWeightPM); // Added here for MEG-5312
            //Added by praveen kalal onclick of NWI button Reset the achived milstone object and flag
            frmProcessMember.lblTodayMilestoneInfo.text = "";
            InsertAchMilestone = false;
            mileStoneObj = []
                //Added for - Fix last members weight displayed in weight textarea after click on NWI
            if (!checkValidString(roundWeightPM)) {
                if (CurrentMemberValues != undefined && CurrentMemberValues != null) {
                    frmProcessMember.txtAreaWeightProcess.text = parseFloat(CurrentMemberValues["StartWeight"]);
                    roundWeightPM = parseFloat(CurrentMemberValues["StartWeight"]);
                } else {
                    roundWeightPM = 0;
                }
            } else {
                frmProcessMember.txtAreaWeightProcess.text = roundWeightPM;
            }
            //End by praveen kalal onclick of NWI button Reset the achived milstone object and flag
            kony.print("IsNWI in if===>>>" + IsNWI);
            IsNWI = true;
            kony.print("IsNWI in if after value set===>>>" + IsNWI);
            //Bmi Calculation for MEGCA-442
            var roundWeightLbs = com.es.weighincalculations.RoundWeight(frmProcessMember.txtAreaWeightProcess.text);
            var weightKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeightLbs));
            var currWeight = deductWeight(weightKG);
            var heightInMeters = com.es.weighincalculations.ConvertHeight_Inches_To_Meters(gblHeightPM);
            var bmi = com.es.weighincalculations.CalculateBMI(parseFloat(currWeight), parseFloat(heightInMeters));
            kony.print("--->>>bmi : " + bmi);
            frmProcessMember.lblBMIInfo.text = bmi;
            //AD :: MEG-5180 -  Update 'Process since last weigh-in' and 'Total weight loss' values --- START
            var weightInKG = 0;
            if (deviceLocale == "fr_FR") {
                weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeightPM));
            } else {
                weightInKG = (parseFloat(roundWeightPM)); //this will keep the value as lbs only
            }
            kony.print("weightInKG----->>>" + weightInKG);
            var TotalWeightLoss = 0;
            if (gblWeightDataAvailable) {
                var previousWeightInKgs = WeightValueFromDB;
                var ProgressLastWeighIn = 0;
                if (deviceLocale == "fr_FR") {
                    previousWeightInKgs = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(WeightValueFromDB));
                    ProgressLastWeighIn = com.es.weighincalculations.ProgressSinceLastWeightIn(weightInKG, previousWeightInKgs);
                } else {
                    ProgressLastWeighIn = com.es.weighincalculations.ProgressSinceLastWeightIn(weightInKG, previousWeightInKgs);
                }
                kony.print("parseFloat(ProgressLastWeighIn) in US----->>>" + parseFloat(ProgressLastWeighIn));
                if (parseFloat(ProgressLastWeighIn) > 0) {
                    frmProcessMember.lblProgressSinceLastInfo.skin = "lblRedBold";
                    frmProcessMember.lblProgressSinceLastInfo.text = "+" + parseFloat(ProgressLastWeighIn).toFixed(1) + " " + UnitText;
                } else {
                    frmProcessMember.lblProgressSinceLastInfo.skin = "lblHelveticaBoldGreen";
                    frmProcessMember.lblProgressSinceLastInfo.text = parseFloat(ProgressLastWeighIn).toFixed(1) + " " + UnitText;
                }
                changeInLastWeight = parseFloat(ProgressLastWeighIn).toFixed(1);
            }
            var startWeightInLbs = gblStartWeightPM;
            kony.print("startWeightInLbs----->>>1 " + startWeightInLbs);
            var roundstartweightInLbs = com.es.weighincalculations.RoundWeight(startWeightInLbs);
            kony.print("roundstartweightInLbs----->>>1 " + roundstartweightInLbs);
            var startweightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundstartweightInLbs));
            if (deviceLocale == "fr_FR") {
                TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startweightInKG, weightInKG);
            } else {
                TotalWeightLoss = com.es.weighincalculations.TotalWeightLoss(startWeightInLbs, weightInKG);
            }
            TotalWeightLoss = parseFloat(TotalWeightLoss) * (-1);
            kony.print("TotalWeightLoss----->>>" + TotalWeightLoss);
            if (parseFloat(TotalWeightLoss) > 0) {
                kony.print("inside positive frmProcessMember.lblTotalWeightChangeInfo.skin " + frmProcessMember.lblTotalWeightChangeInfo.skin);
                frmProcessMember.lblTotalWeightChangeInfo.text = "+" + parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
                frmProcessMember.lblTotalWeightChangeInfo.skin = "lblRedBold";
            } else {
                frmProcessMember.lblTotalWeightChangeInfo.skin = "lblHelveticaBoldGreen";
                frmProcessMember.lblTotalWeightChangeInfo.text = parseFloat(TotalWeightLoss).toFixed(1) + " " + UnitText;
            }
            //AD :: MEG-5180 -  Update 'Process since last weigh-in' and 'Total weight loss' values --- END
        } else {
            kony.print("frmProcessMember.btnNoWeighIn.skin in else==>>" + frmProcessMember.imgNoWeighIn.src);
            frmProcessMember.imgNoWeighIn.src = "noweighin_disable.png";
            frmProcessMember.txtAreaWeightProcess.setEnabled(true);
            kony.print("IsNWI in else===>>>" + IsNWI);
            IsNWI = false;
            kony.print("IsNWI in else after value set===>>>" + IsNWI);
        }
        getWeightDetailsObject = {};
        if (!gblWeightDataAvailable) {
            if (CurrentMemberValues != undefined && CurrentMemberValues != null) {
                frmProcessMember.lblProgressSinceLastInfo.text = "--";
                frmProcessMember.lblProgressSinceLastInfo.skin = "lblHelveticaBold50pxGrey";
                getWeightDetailsObject.Weight = parseFloat(CurrentMemberValues["StartWeight"]);
            }
        } else {
            getWeightDetailsObject.Weight = roundWeightPM;
        }
        getWeightDetailsObject.WeekNumber = 0;
        getWeightDetailsObject.MemberID = CurrentMemberValues["memberId"];
        var stWeight = getWeightDetailsObject.Weight;
        var heightInMeters = com.es.weighincalculations.ConvertHeight_Inches_To_Meters(gblHeightPM);
        kony.print("gblDOBPM from PM ---->>>" + gblDOBPM);
        var WeighDateFormatted = formattedDate(gblDOBPM);
        kony.print("WeighDateFormatted from PM ---->>>" + WeighDateFormatted);
        var fortnightAway = new Date(WeighDateFormatted);
        var date = fortnightAway.getDate();
        var mon = fortnightAway.getMonth() + 1;
        var year = fortnightAway.getFullYear();
        agevalue = com.es.weighincalculations.CalculateAge(mon, date, year);
        kony.print("agevalue from PM ---->>>" + agevalue);
        kony.print("In NWI for no data startweight is :::: " + stWeight);
        //change sayali
        if (deviceLocale == "fr_FR") {
            var DPTWeightNeedsKG = stWeight;
        } else //if (deviceLocale == "en_US" || deviceLocale=="en_CA" )
        {
            var DPTWeightNeedsKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(stWeight));
        }
        changeInLastWeight = 0;
        //Roshni getWeightDetailsObject.DailyPtTarget = com.es.weighincalculations.CalculateDPT(agevalue, heightInMeters, DPTWeightNeedsKG, gblGenderPM);
        var TotalDPT = com.es.weighincalculations.CalculateStatistics("DPT", DPTWeightNeedsKG, heightInMeters, agevalue, gblGenderPM);
        getWeightDetailsObject.DailyPtTarget = TotalDPT;
        var WPA = com.es.weighincalculations.CalculateStatistics("WPA", DPTWeightNeedsKG, heightInMeters, agevalue, gblGenderPM);
        //alert("7. The total WPA is.  "+ JSON.stringify(WPA));
        getWeightDetailsObject.WeeklyPointsAllowance = WPA;
        kony.print("1. The total WPA is.  " + JSON.stringify(WPA));
        frmProcessMember.lblTodaysDTPInfo.text = TotalDPT.toString();
        frmProcessMember.lblWPAinfo.text = WPA;
        // }
        // }
        kony.print("glbSelectSubType---2---" + glbSelectSubType);
    } else { //NWI Not allowed
        kony.print("NWI is not allowed");
        alertForMessages(kony.i18n.getLocalizedString("strMsgNWINotAllowed"));
    }
}
//Adding below code again for calculating the time range after code overwrite by Sayali
var IsWeighedInTimeRange = false;

function IsWeighInGivenTimeRangeValue(inDate) {
    //IsWeighedInTimeRange=false;
    try {
        var orgDate2 = formattJsDefaultDate();
        var WeighDateFormatted = formattedDate(inDate);
        kony.print("Formatted Weight Entry Date : " + WeighDateFormatted);
        kony.print("Returning from IsWeighInGivenTimeRangeValue");
    } catch (e) {
        GlobalException(e);
    }
    //return IsWeighedInTimeRange;
}

function ToCheckLastWeighInRnge(LastWeignIn) {
    var WeighInRange = false;
    var lastweighindate = new Date(LastWeignIn);
    kony.print("lastweighindate" + lastweighindate);
    var curr = new Date(); // get current date
    var yyyy = curr.getFullYear().toString();
    var mm = curr.getMonth().toString(); // getMonth() is zero-based
    var dd = curr.getDate().toString();
    var currdate = new Date(yyyy, mm, dd);
    kony.print("currdate" + currdate);
    kony.print("curr" + curr);
    kony.print("currdate.getTime() - lastweighindate.getTime()==" + currdate.getTime() + "------" + lastweighindate.getTime())
    var timeDiff = Math.abs(currdate.getTime() - lastweighindate.getTime());
    kony.print("timeDiff" + timeDiff);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    kony.print("diffDays" + diffDays);
    if (currdate > lastweighindate) {
        if (lastweighindate.getDay() == 6) {
            //alert("can weight");
            WeighInRange = false;
        } else if (diffDays > 6) {
            //alert("can weight");
            WeighInRange = false;
        } else if (lastweighindate.getDay() > currdate.getDay()) {
            //alert("can weight");
            WeighInRange = false;
        } else {
            //alert("can not weight");
            WeighInRange = true;
        }
    } else {
        //alert("can not weight");
        WeighInRange = true;
    }
    kony.print("WeighInRange" + WeighInRange);
    return WeighInRange;
}
//Added for solving bug current week weigh in not allowed in batch add--Nikita
function ToCheckLastWeighInRngeForBatchAdd(LastWeignIn, curWeighDate) {
    kony.print("LastWeignIn-----" + LastWeignIn);
    if (LastWeignIn.indexOf("T") != "-1") {
        var splitdata = LastWeignIn.split("T");
        var dSplit = splitdata[0].split("-");
        LastWeignIn = dSplit[1] + "/" + dSplit["2"] + "/" + dSplit[0];
    }
    kony.print("After LastWeignIn-----" + LastWeignIn);
    var WeighInRange = false;
    var lastweighindate = new Date(LastWeignIn);
    kony.print("lastweighindate" + lastweighindate);
    var curr = new Date(curWeighDate); // get current date
    kony.print("Curr Weigh date ===" + curr);
    var yyyy = curr.getFullYear().toString();
    var mm = curr.getMonth().toString(); // getMonth() is zero-based
    var dd = curr.getDate().toString();
    var currdate = new Date(yyyy, mm, dd);
    kony.print("currdate" + currdate);
    kony.print("curr" + curr);
    kony.print("currdate.getTime() - lastweighindate.getTime()==" + currdate.getTime() + "------" + lastweighindate.getTime())
    var timeDiff = Math.abs(currdate.getTime() - lastweighindate.getTime());
    kony.print("timeDiff" + timeDiff);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    kony.print("diffDays" + diffDays);
    if (currdate > lastweighindate) {
        if (lastweighindate.getDay() == 6) {
            //alert("can weight");
            WeighInRange = false;
        } else if (diffDays > 6) {
            //alert("can weight");
            WeighInRange = false;
        } else if (lastweighindate.getDay() > currdate.getDay()) {
            //alert("can weight");
            WeighInRange = false;
        } else {
            //alert("can not weight");
            WeighInRange = true;
        }
    } else {
        //alert("can not weight");
        WeighInRange = true;
    }
    kony.print("WeighInRange" + WeighInRange);
    return WeighInRange;
}
//End
function CalculationforWeek(t1, t2) {
    try {
        var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
        kony.print("Date 1 :" + t1);
        kony.print("Date 2 :" + t2);
        var x = t1.split("/");
        var y = t2.split("/");
        if (deviceLocale == "fr_FR") //DD/MM/YYYY
        {
            var date1 = new Date((x[2]), (x[1]), x[0]);
            kony.print("date1 in CalculationforWeek in else ===" + date1);
            var date2 = new Date((y[2]), (y[1]), y[0]);
            kony.print("date2 in CalculationforWeek in else===" + date2);
        } else //if (deviceLocale == "en_US" || deviceLocale=="en_CA") //MM/DD/YYYY  03 MM 04 DD 2014 YYYY
        {
            var date1 = new Date((x[2]), x[0] - 1, (x[1]));
            kony.print("date1 in CalculationforWeek in if===" + date1);
            var date2 = new Date((y[2]), y[0] - 1, (y[1]));
            kony.print("DATE2 in CalculationforWeek in if===" + date2);
        }
        return Math.floor((date2.getTime() - date1.getTime()) / (ONE_WEEK));
    } catch (e) {
        kony.print("Error :" + e);
        // todo: handle exception
    }
}
var WeightValueFromDB;

function eventonPostShowProcessMember(res, isOnlineMember, isDataAvailable) {
    try {
        kony.print("Is data available " + isDataAvailable);
        gblWeightDataAvailable = isDataAvailable;
        if (!isDataAvailable) {
            kony.print("Called function getEligibleMilestone date  " + glbMemberId);
            alertForMessages(kony.i18n.getLocalizedString("strNoWeighProcesss"));
            boMemberMilestone.getEligibleMilestone(glbMemberId);
            frmProcessMember.lblLastWeighInInfo.text = " -- ";
            frmProcessMember.txtAreaWeightProcess.text = "";
            frmProcessMember.lblPersonalGoalWeight.text = checkValidString(glbPersonalGoalWeight) ? "" + glbPersonalGoalWeight + " " + UnitText : "";
            frmProcessMember.imgCheckbox1.src = "attending.png";
            frmProcessMember.imgNoWeighIn.src = "noweighin_disable.png";
            frmProcessMember.vboxNoWeighIn.setEnabled(true);
            frmProcessMember.txtAreaWeightProcess.setEnabled(true);
            frmProcessMember.lblTotalWeightChangeInfo.text = " -- "
            frmProcessMember.lblTodaysDTPInfo.text = " -- "
            frmProcessMember.lblWPAinfo.text = "--";
            frmProcessMember.lblBMIInfo.text = "--";
            frmProcessMember.lblLbsToNextMilestoneInfo.text = " -- ";
            frmProcessMember.lblTodaysDTPInfo.text = " -- ";
            frmProcessMember.lblTodayMilestoneInfo.text = " -- ";
            frmProcessMember.lblProgressSinceLastInfo.text = " -- ";
            frmProcessMember.lblGoalWeightInfo.text = " -- ";
            frmProcessMember.lbl5GoalTargetInfo.text = " -- ";
            frmProcessMember.lbl10GoalTargetInfo.text = " -- ";
            frmProcessMember.lblHealthyRangeInfo.text = " -- ";
            frmProcessMember.lblAverageWeightLossInfo.text = " --";
            //Ami add
            frmProcessMember.txtGoalWeightUnit.text = "";
            frmProcessMember.lblProgressSinceLastInfo.skin = "lblHelveticaBold50pxGrey";
            frmProcessMember.lblTotalWeightChangeInfo.skin = "lblHelveticaBold50pxGrey";
            frmProcessMember.lblAverageWeightLossInfo.skin = "lblHelveticaBold50pxGrey";
            showSubscriptionDetails();
            kony.print("Ended eventonPostShowProcessMember in if ");
        } else {
            WeightValueFromDB = res[0].Weight;
            kony.print("res[0] in eventonPostShowProcessMember===>>>" + JSON.stringify(res));
            boMemberProfile.getSelectedMemberProfileWeightDetails(glbMemberId);
            kony.print("Called function getEligibleMilestone date  " + glbMemberId);
            boMemberMilestone.getEligibleMilestone(glbMemberId);
            kony.print("Called function getEligibleMilestone date  + " + res[0].WeighInDate + "  " + isOnlineMember);
            //Adding this changes again after overwrite by Sayali.
            //Removing call to below function as it was not working for calculating weigh in time range. Nikita Acharya 19/05/2014
            //IsWeighInGivenTimeRangeValue(WeighDateFormatted);
            kony.print("res[0].WeighInDate :: " + res[0].WeighInDate);
            lastWeighDate = formattedDate(res[0].WeighInDate);
            missedwkClcDate = formattedDate(res[0].WeighInDate); // added by praveen kalal to calculate missedweek based on lastweighin date
            //Adding this code again after code overWrite by Sayali
            IsWeighedInTimeRange = ToCheckLastWeighInRnge(lastWeighDate);
            if (isOnlineMember) {
                getWeightDetailsObject.Weight = res[0].Weight;
                getWeightDetailsObject.DailyPtTarget = res[0].DPT;
                getWeightDetailsObject.WeeklyPointsAllowance = res[0].WPA;
                getWeightDetailsObject.NoWeighIn = res[0].NoWeighIn;
                getWeightDetailsObject.IsAtndgMeeting = res[0].IsAttendingMeeting;
                getWeightDetailsObject.WeighInDate = res[0].WeighInDate;
                getWeightDetailsObject.MemberID = res[0].MemberID;
                getWeightDetailsObject.WeekNumber = res[0].WeekNo;
                getWeightDetailsObject.WeightLoss = res[0].WeightLoss;
            } else {
                var v = res[0];
                getWeightDetailsObject.Weight = kony.sync.getString(v.Weight);
                getWeightDetailsObject.DailyPtTarget = kony.sync.getString(v.DailyPtTarget);
                getWeightDetailsObject.WeeklyPointsAllowance = kony.sync.getString(v.WeeklyPointsAllowance);
                getWeightDetailsObject.NoWeighIn = kony.sync.getString(v.NoWeighIn);
                getWeightDetailsObject.IsAtndgMeeting = kony.sync.getString(v.IsAtndgMeeting);
                getWeightDetailsObject.WeighInDate = kony.sync.getString(v.WeighInDate);
                getWeightDetailsObject.MemberID = kony.sync.getString(v.MemberID);
                getWeightDetailsObject.WeekNumber = kony.sync.getString(v.WeekNumber);
                getWeightDetailsObject.WeightLoss = kony.sync.getString(v.WeightLoss);
            }
            kony.print("getWeightDetailsObject in eventonPostShowProcessMember===>>>" + JSON.stringify(getWeightDetailsObject));
            kony.print("IsWeighedInTimeRange---->>>>" + IsWeighedInTimeRange + " isOnlineMember---->>>> " + isOnlineMember);
            if (IsWeighedInTimeRange) {
                kony.print("res[0].WeighInDate===>>>" + res[0].WeighInDate);
                alertForMessages(kony.i18n.getLocalizedString("strMsgWeighDone"));
                kony.print("isBarcodeScanned  : " + isBarcodeScanned);
                if (isBarcodeScanned) {
                    isBarcodeScanned = false;
                    frmMemberProfileSearch.show();
                }
            } else {
                var res2Weeks = valid.CheckWeeksMilestonesAchieved(gblStartDatePM, "2 Weeks").isValid(); //Here TO DO inputstr needs to be the value that comes as the start date for the member being processed
                var res16Weeks = valid.CheckWeeksMilestonesAchieved(gblStartDatePM, "16 Weeks").isValid();
                if (res16Weeks) {
                    kony.print("True for 16 Weeks");
                }
                if (res2Weeks) {
                    kony.print("True for 2 Weeks");
                }
                roundWeightPM = com.es.weighincalculations.RoundWeight(parseFloat(res[0].Weight));
                //lastWeighIn = roundWeightPM; // variable that stores last weight in
                frmProcessMember.lblLastWeighInInfo.text = roundWeightPM + " " + UnitText + "(" + changeDateFormate(lastWeighDate, kony.i18n.getLocalizedString("strDisplayDateFormat")) + ")"; //** MEG 6386
                frmProcessMember.txtAreaWeightProcess.text = roundWeightPM;
                //Commented the below as discussed with bhakti to show the calculation
                //when user did not weigh in for the same week. to use the last weigh in value
                //and do the calculations. Nikita Acharya 31/05/2014
                kony.print("res[0].NoWeighIn==>>" + res[0].NoWeighIn);
                kony.print("res[0].IsAtndgMeeting==>>" + res[0].IsAtndgMeeting);
                if (!res[0].IsAtndgMeeting) {
                    frmProcessMember.imgCheckbox1.src = "attending_disable.png";
                } else {
                    frmProcessMember.imgCheckbox1.src = "attending.png";
                }
                frmProcessMember.imgNoWeighIn.src = "noweighin_disable.png";
                frmProcessMember.vboxNoWeighIn.setEnabled(true);
                frmProcessMember.txtAreaWeightProcess.setEnabled(true);
                if (isOnlineMember) {
                    kony.print("res[0].DPT " + res[0].DPT);
                    frmProcessMember.lblTodaysDTPInfo.text = res[0].DPT;
                    frmProcessMember.lblWPAinfo.text = res[0].WPA;
                } else {
                    frmProcessMember.lblTodaysDTPInfo.text = kony.sync.getString(res[0].DailyPtTarget);
                    frmProcessMember.lblWPAinfo.text = kony.sync.getString(res[0].WeeklyPointsAllowance);
                }
                eventonDoneTextAreaProcessMemberWeighCalculations(res[0].Weight);
            }
            frmProcessMember.lblPersonalGoalWeight.text = checkValidString(glbPersonalGoalWeight) ? "" + glbPersonalGoalWeight + " " + UnitText : "";
            // Dileep Chejerla
            kony.print("Calling showSubscriptionDetails");
            showSubscriptionDetails();
        }
        if (!IsWeighedInTimeRange) {
            frmProcessMember.show();
        }
    } catch (e) {
        GlobalException(e);
    }
    removeProgressView();
}

function showSubscriptionDetails() {
    try {
        var todayDate = new Date();
        var dd = todayDate.getDate();
        var mm = todayDate.getMonth() + 1;
        var yyyy = todayDate.getFullYear();
        var dateData;
        if (deviceLocale == "fr_FR") {
            dateData = dd + "/" + mm + "/" + yyyy;
        } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
        {
            dateData = mm + "/" + dd + "/" + yyyy;
        }
        if (Date.parse(gblExpirationDate) >= Date.parse(dateData) && (glbMemberType.toUpperCase() == "LIFETIME" || glbMemberType == "LifeTime")) // Added by Dileep Chejerla: MEG-2926
        {
            glbFormName.lbldateProcessSubHeader.skin = "lblwwTextBook38px";
        } else {
            glbFormName.lbldateProcessSubHeader.skin = "lblwwTextBook38pxRed";
        }
        // Added by Dileep Chejerla
        kony.print("Inside showSubscriptionDetails --> glbMemberType.toUpperCase() = " + glbMemberType.toUpperCase());
        kony.print("Inside showSubscriptionDetails --> gblSubType = " + gblSubType);
        //If member is expired.. glbsubtype will be payg
        if (!checkValidString(gblSubType) || glbIsSelectedMemberExpired) {
            gblSubType = "PAYG";
        }
        kony.print("Inside showSubscriptionDetails --> after undefined condition --> gblSubType = " + gblSubType);
        if (gblSubType == "MonthlyPass" || gblSubType == "Monthly Pass") {
            kony.print("Inside gblSubType == MonthlyPass");
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgLifetime.setVisibility(true);
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
            } else {
                glbFormName.imgLifetime.src = "";
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.imgLifetime.setVisibility(false);
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
            }
            glbFormName.imgMonthlyPassImage.src = "icn_monthly_pass_header.png";
            glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strMPAbbr");
            glbFormName.lbldateProcessSubHeader.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
            glbFormName.imgMonthlyPassImage.src = "icn_monthly_pass_header.png";
            frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_monthly_pass_header.png";
            glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strMPAbbr");
            frmCheckout.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_monthly_pass_header.png";
            frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strMPAbbr"); //Modified by Studio Viz
            frmAddAndWeighMemberTransaction.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strMPRedeem");
            glbFormName.txtSubscriptionID.text = generateSubscriptionId(glbCouponCode, gblExpirationDate);
            glbSelectSubType = "1-2-2";
            isPayAsYouGo = false;
            glbFormName.imgAsterisk.isVisible = true;
        } else if (gblSubType == MemberSubscriptionTypeEnumBatch["20 Week Pass"]) {
            kony.print("Inside gblSubType == TwentyWeekPass");
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgLifetime.setVisibility(true);
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
            } else {
                glbFormName.imgLifetime.src = "";
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.imgLifetime.setVisibility(false);
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
            }
            glbFormName.imgMonthlyPassImage.src = "icn_20_week_pass_header.png";
            frmProcessMember.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("str20WEEKSAbbr");
            glbFormName.lbldateProcessSubHeader.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
            glbFormName.imgMonthlyPassImage.src = "icn_20_week_pass_header.png";
            frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_20_week_pass_header.png";
            glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("str20WEEKSAbbr");
            frmCheckout.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_20_week_pass_header.png";
            frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("str20WEEKSAbbr"); //Modified by Studio Viz
            frmAddAndWeighMemberTransaction.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            glbFormName.lblSubType.text = kony.i18n.getLocalizedString("str20WkRedeem");
            glbFormName.txtSubscriptionID.maxTextLength = 16; // added for MEGCA-325
            glbFormName.txtSubscriptionID.text = generateSubscriptionId(glbCouponCode, gblExpirationDate);
            glbSelectSubType = "9-2-1";
            isPayAsYouGo = false;
            glbFormName.imgAsterisk.isVisible = true;
        } else if (gblSubType == "SeventeenWeekPass" || gblSubType == "17 Week Pass") {
            kony.print("Inside gblSubType == SeventeenWeekPass");
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgLifetime.setVisibility(true);
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
            } else {
                glbFormName.imgLifetime.src = "";
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.imgLifetime.setVisibility(false);
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
            }
            glbFormName.imgMonthlyPassImage.src = "icn_17_week_pass_header.png";
            glbFormName.lblProcessMemberSubHeaderlbl2.text = "17 Week";
            glbFormName.lbldateProcessSubHeader.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
            frmProcessMember.imgMonthlyPassImage.src = "icn_17_week_pass_header.png";
            frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_17_week_pass_header.png";
            glbFormName.lblProcessMemberSubHeaderlbl2.text = "17 Week";
            frmCheckout.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            glbFormName.lblSubType.text = "17 Week Pass-Redeem";
            glbSelectSubType = "2-2-2";
            isPayAsYouGo = false;
            glbFormName.imgAsterisk.isVisible = false;
            frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "17 Week"; //Modified by Studio Viz
            frmAddAndWeighMemberTransaction.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
        } else if (gblSubType == "12 Week Pass-Buy New" || gblSubType == "12 Week Pass-Reedem") {
            kony.print("Inside gblSubType == 12 Week Pass-Buy New");
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
            } else {
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
            }
            glbFormName.imgMonthlyPassImage.src = "icn_12_week_pass_header.png";
            glbFormName.lblProcessMemberSubHeaderlbl2.text = "12 Week";
            glbFormName.lbldateProcessSubHeader.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            glbFormName.imgMonthlyPassImage.src = "icn_17_week_pass_header.png";
            frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_12_week_pass_header.png";
            frmCheckout.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = "12 Week"; //Modified by Studio Viz
            frmAddAndWeighMemberTransaction.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
        } else if ((gblSubType == "Series" || gblSubType == kony.i18n.getLocalizedString("strSeriesAbbr")) && in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
            kony.print("Inside gblSubType == PAYG");
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                kony.print("7280 -- 3");
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                // frmCheckout.imgLifetime.src = "icn_lifetime_member_header.png";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                // frmProcessMember.lblProcessMemberSubHeaderlbl2.text = "LT";
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strSeriesAbbr"); //** MEG 7280 //Modified by Studio Viz
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strSeriesAbbr"); //** MEG 7280
                glbFormName.lbldateProcessSubHeader.skin = "lblwwTextBook38px";
                glbFormName.imgMonthlyPassImage.src = "";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "";
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
                //**MEG 7280
                glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strAWSRedeem");
                glbFormName.imgsub.isVisible = false;
                glbSelectSubType = "12-2-1";
                glbFormName.txtSubscriptionID.setEnabled(false);
                glbFormName.btnScan.setVisibility(false); // Added by Dileep Chejerla
                //isPayAsYouGo = true;
                glbFormName.imgAsterisk.isVisible = false;
                //**End 
            } else {
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strPAYGAbbr");
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strPAYGAbbr"); //Modified by Studio Viz
                glbFormName.imgMonthlyPassImage.src = "icn_payment_header.png";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_payment_header.png";
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
                //** MEG 7280
                glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strPayg");
                glbFormName.imgsub.isVisible = false;
                glbSelectSubType = "3-2-2";
                glbFormName.txtSubscriptionID.setEnabled(false);
                glbFormName.btnScan.setVisibility(false); // Added by Dileep Chejerla
                isPayAsYouGo = true;
                glbFormName.imgAsterisk.isVisible = false;
                //**End
            }
            glbFormName.lbldateProcessSubHeader.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
            frmCheckout.lblExpDate.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            frmAddAndWeighMemberTransaction.lblExpDate.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            /* glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strPayg");
             glbFormName.imgsub.isVisible = false;
             glbSelectSubType = "3-2-2";
             glbFormName.txtSubscriptionID.setEnabled(false);
             glbFormName.btnScan.setVisibility(false); // Added by Dileep Chejerla
             isPayAsYouGo = true;
             glbFormName.imgAsterisk.isVisible = false;*/
        } else if (gblSubType == "Series" || gblSubType == kony.i18n.getLocalizedString("strSeriesAbbr")) {
            kony.print("Inside gblSubType == Series Member");
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                kony.print("7280 -- 4");
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                // frmCheckout.imgLifetime.src = "icn_lifetime_member_header.png";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                // frmProcessMember.lblProcessMemberSubHeaderlbl2.text = "LT";
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strSeriesAbbr"); //** MEG 7280//Modified by Studio Viz
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strSeriesAbbr"); //** MEG 7280
                glbFormName.lbldateProcessSubHeader.skin = "lblwwTextBook38px";
                glbFormName.imgMonthlyPassImage.src = "";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "";
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
            } else {
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strSeriesAbbr");
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strSeriesAbbr"); //Modified by Studio Viz
                glbFormName.imgMonthlyPassImage.src = "";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "";
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
            }
            glbFormName.lbldateProcessSubHeader.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
            frmCheckout.lblExpDate.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            frmAddAndWeighMemberTransaction.lblExpDate.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            //** MEG 7171 	
            if (!IsAWSLocationEnabled()) {
                glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strPrepaid");
                glbSelectSubType = "7-2-2";
            } else {
                glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strAWSRedeem");
                glbSelectSubType = "12-2-1";
            }
            //** END
            glbFormName.imgsub.isVisible = false;
            glbFormName.txtSubscriptionID.setEnabled(false);
            glbFormName.btnScan.setVisibility(false); // Added by Dileep Chejerla
            //isPayAsYouGo = true;
            glbFormName.imgAsterisk.isVisible = false;
        } else if (gblSubType == "PAYG" || gblSubType == kony.i18n.getLocalizedString("strPayg")) {
            kony.print("Inside gblSubType == PAYG");
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                // frmCheckout.imgLifetime.src = "icn_lifetime_member_header.png";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                // frmProcessMember.lblProcessMemberSubHeaderlbl2.text = "LT";
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strLTAbbr"); //Modified by Studio Viz
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strLTAbbr");
                glbFormName.lbldateProcessSubHeader.skin = "lblwwTextBook38px";
                glbFormName.imgMonthlyPassImage.src = "";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "";
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
            } else {
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strPAYGAbbr");
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strPAYGAbbr"); //Modified by Studio Viz
                glbFormName.imgMonthlyPassImage.src = "icn_payment_header.png";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_payment_header.png";
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
            }
            glbFormName.lbldateProcessSubHeader.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
            frmCheckout.lblExpDate.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            frmAddAndWeighMemberTransaction.lblExpDate.text = (glbIsSelectedMemberExpired) ? "" : changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strPayg");
            glbFormName.imgsub.isVisible = false;
            glbSelectSubType = "3-2-2";
            glbFormName.txtSubscriptionID.setEnabled(false);
            glbFormName.btnScan.setVisibility(false); // Added by Dileep Chejerla
            isPayAsYouGo = true;
            glbFormName.imgAsterisk.isVisible = false;
        } else {
            kony.print("Inside last else block --> glbMemberType.toUpperCase() = " + glbMemberType.toUpperCase());
            if (in_array(glbMemberType.toUpperCase(), lifeTimeTypes)) {
                glbFormName.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strLTAbbr");
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strLTAbbr"); //Modified by Studio Viz
                frmAddAndWeighMemberTransaction.imgLifetime.src = "icn_lifetime_member_header.png";
                glbFormName.imgMonthlyPassImage.src = "";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "";
                glbFormName.imgLifetime.setVisibility(true);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(true);
                kony.print("if --> glbFormName.lblProcessMemberSubHeaderlbl2.text = " + glbFormName.lblProcessMemberSubHeaderlbl2.text);
            } else {
                glbFormName.imgLifetime.src = "";
                frmAddAndWeighMemberTransaction.imgLifetime.src = "";
                glbFormName.imgMonthlyPassImage.src = "icn_payment_header.png";
                frmAddAndWeighMemberTransaction.imgMonthlyPass.src = "icn_payment_header.png";
                glbFormName.lblProcessMemberSubHeaderlbl2.text = getLocalizedString("strPAYGAbbr");
                frmAddAndWeighMemberTransaction.lblProcessMemberSubHeaderlbl2studio11.text = getLocalizedString("strPAYGAbbr"); //Modified by Studio Viz
                glbFormName.imgLifetime.setVisibility(false);
                frmAddAndWeighMemberTransaction.imgLifetime.setVisibility(false);
                kony.print("else --> frmProcessMember.lblProcessMemberSubHeaderlbl2.text = " + glbFormName.lblProcessMemberSubHeaderlbl2.text);
            }
            glbFormName.lbldateProcessSubHeader.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386
            frmCheckout.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            frmAddAndWeighMemberTransaction.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386;
            glbFormName.lblSubType.text = kony.i18n.getLocalizedString("strPayg");
            glbFormName.imgsub.isVisible = false;
            glbSelectSubType = "3-2-2";
            glbFormName.txtSubscriptionID.setEnabled(false);
            glbFormName.btnScan.setVisibility(false); // Added by Dileep Chejerla
            isPayAsYouGo = true;
            glbFormName.imgAsterisk.isVisible = false;
        }
        //Set this user's Subscription Type Before change
        kony.print("Final image for glbFormName.imgMonthlyPassImage.src = " + glbFormName.imgMonthlyPassImage.src);
        kony.print("final frmProcessMember.lblProcessMemberSubHeaderlbl2.text = " + glbFormName.lblProcessMemberSubHeaderlbl2.text);
        glbMemberSubscpBefore = glbFormName.lblSubType.text;
        subtype = glbSelectSubType;
    } catch (e) {
        GlobalException(e);
    }
}

function eventOnDoneWeightText() {
    boEnrollMember.checkForGoalAchivedDate();
    if (IsFromPM == FlowForScreens.ProcessMember) {
        var currentWeight = frmProcessMember.txtAreaWeightProcess.text;
        boLifeTimeEligibility.checkEligibilityFlow(currentWeight);
    }
}
var messageIndex = 0;
var callbackForMilestone;

function showAlertForMessagesCallBack() {
    messageIndex++;
    if (messageIndex == 1) {
        showAchievedMilestoneForReachedGoal();
    } else if (messageIndex == 2) {
        showAchievedMilestoneFor25lbAward();
    } else if (messageIndex == 3) {
        showAchievedMilestoneFor50lbAward();
    } else if (messageIndex == 4) {
        showAchievedMilestoneForReachedLifetime();
    } else if (messageIndex == 5) {
        showAchievedMilestoneFor75lbAward();
    } else if (messageIndex == 6) {
        showAchievedMilestoneFor100lbAward();
    } else if (messageIndex == 7) {
        showAchievedMilestoneFor5perAward();
    } else if (messageIndex == 8) {
        showAchievedMilestoneFor5lbAward();
    } else if (messageIndex == 9) {
        showAchievedMilestoneForNew5lbAward();
    } else if (messageIndex == 10) {
        showAchievedMilestoneFor10lbAward();
    } else {
        glbMilestoneName = glbMilestoneName.replace(/,\s*$/, '');
        callbackForMilestone.call(null);
    }
}

function showAchievedMilestoneFor10perAward() {
    kony.print("showAchievedMilestoneFor10perAward =======>");
    kony.print("::PK::mileStoneObj---" + JSON.stringify(mileStoneObj));
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "10% Award") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "2") {
            if (getXPercentageOfWeight("10", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg10perAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneForReachedGoal() {
    kony.print("showAchievedMilestoneForReachedGoal gblStartWeightPM=======>" + gblStartWeightPM);
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    currentweight = parseFloat(currentweight); //MEG 7300
    goalWeight = parseFloat(goalWeight); //MEG 7300
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "Reached Goal") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "3") {
            if (goalWeight >= currentweight) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsgReachedGoal"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneForNew5lbAward() {
    kony.print("showAchievedMilestoneForNew5lbAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        var milestoneID = milestoneRes[i]["milestoneID"];
        if (milestoneID == "43") {
            if (weightDifferencInLbs("5", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg5lbOneTimeAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneFor10lbAward() {
    kony.print("showAchievedMilestoneFor25lbAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "42") {
            if (weightDifferencInLbs("10", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg10lbAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneFor25lbAward() {
    kony.print("showAchievedMilestoneFor25lbAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "25lb Award") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "8") {
            if (weightDifferencInLbs("25", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg25lbAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneFor50lbAward() {
    kony.print("showAchievedMilestoneFor50lbAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "50lb Award") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "11") {
            if (weightDifferencInLbs("50", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg50lbAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneForReachedLifetime() {
    kony.print("showAchievedMilestoneForReachedLifetime =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "Reached Lifetime") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "13") {
            if (isEligibleForLifetime) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsgLifetime"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneFor75lbAward() {
    kony.print("showAchievedMilestoneFor75lbAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "75lb Award") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "15") {
            if (weightDifferencInLbs("75", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg75lbAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneFor100lbAward() {
    kony.print("showAchievedMilestoneFor100lbAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "100lb Award") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "18") {
            if (weightDifferencInLbs("100", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg100lbAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneFor5perAward() {
    kony.print("showAchievedMilestoneFor5perAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        if (_.contains(tmpAcheivedMilestone, milestoneName)) {
            continue;
        }
        //if (milestoneName.toString() == "5% Award") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "26") {
            if (getXPercentageOfWeight("5", startWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg5perAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}

function showAchievedMilestoneFor5lbAward() {
    kony.print("showAchievedMilestoneFor5lbAward =======>");
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    var isAchieved = false;
    var minWeight;
    for (i in milestoneRes) {
        var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
        //if (milestoneName.toString() == "5lb Award") {
        var milestoneID = milestoneRes[i]["milestoneID"];
        //milestoneID = parseInt(milestoneID);
        if (milestoneID == "31") {
            kony.print("Weight Details for Member: " + JSON.stringify(memberWeightData));
            var weightDataArray = [];
            for (var j = 0; j < memberWeightData.length; j++) {
                weightDataArray.push(parseFloat(memberWeightData[j].Weight));
            }
            if (MissedWeekWeightData.length > 0) {
                minWeight = MissedWeekWeightData[0]["Weight"];
            } else {
                minWeight = Math.min.apply(null, weightDataArray);
            }
            kony.print("minWeight is: " + minWeight + " Weight Array Length: " + memberWeightData.length);
            //if(weightDifferencInLbs("5",startWeight,currentweight)){
            if (checkFor5LbMilestoneAward(startWeight, minWeight, currentweight)) {
                isAchieved = true;
                InsertAchMilestone = true;
                var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                var createObj = {
                    "MemberID": glbMemberId,
                    "MemberMilestoneID": generateGUID(),
                    "MilestoneID": milestoneRes[i]["milestoneID"],
                    "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                    "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                    "MilestoneName": milestoneRes[i]["strmilestoneName"],
                    "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
                };
                kony.print("::DJP::11 createObj=" + JSON.stringify(createObj));
                mileStoneObj.push(createObj);
                glbMilestoneName += milestoneName.toString() + ",";
                showAlertForMessages(kony.i18n.getLocalizedString("strMsg5lbAward"), showAlertForMessagesCallBack);
                break;
            }
        }
    }
    if (isAchieved == false) showAlertForMessagesCallBack();
}
//Start - Changed for current week milestone changes
function checkFor5LbMilestoneAward(startWeight, lastWeight, currentWeight) {
    kony.print("Entering checkFor5LbMilestoneAward");
    kony.print("Start Weight: " + startWeight + " Last Weight: " + lastWeight + " Current Weight: " + currentWeight);
    var waitDiff = 0;
    if (lastWeight != null && lastWeight != "" && lastWeight != undefined) {
        waitDiff = (parseFloat(startWeight) - parseFloat(lastWeight));
    }
    var modulus = Math.floor(waitDiff / 5);
    var targetWeight = startWeight;
    if (modulus > 0) {
        targetWeight = parseFloat(startWeight - (modulus * 5));
    }
    kony.print("Weight Diff: " + waitDiff + " Modulus: " + modulus + " TargetWeight: " + targetWeight);
    if (targetWeight - currentWeight >= 5) {
        return true;
    }
    return false;
}
//End - Changed for current week milestone changes
function checkAchievedMilestone(isProcess) {
    messageIndex = 0;
    kony.print("Milestone Res++++" + isProcess + "  " + JSON.stringify(milestoneRes));
    if (milestoneRes.length > 0 && isProcess) {
        mileStoneObj = [];
        glbMilestoneName = "";
        showAchievedMilestoneFor10perAward();
        //  glbMilestoneName = glbMilestoneName.replace(/,\s*$/, '');
        kony.print("glbMilestoneName Res++++" + glbMilestoneName);
    } else {
        callbackForMilestone.call(null);
    }
}
//MEG-3887
function checkForAchievedReachedLifeTimeMilestone() {
    kony.print("checkAchievedReachedLifeTimeMilestone Milestone Res++++" + JSON.stringify(milestoneDataObj));
    //MEG-4183 Dont show alert if already a lifetime member
    if (glbMemberType.toUpperCase() != "LIFETIME") {
        for (j in milestoneDataObj) {
            var mileStone = milestoneDataObj[j];
            kony.print("Milestone achieved offline is : " + JSON.stringify(mileStone));
            if ((mileStone.mName).toString() == "Reached Lifetime") {
                alertForMessages(kony.i18n.getLocalizedString("strMsgReachedLifetime"));
                break;
            }
        }
    }
}

function checkAchievedMilestone_Org() {
    var startWeight = gblStartWeightPM; // "230"; //To do: Get the value of enroll time from Db by query
    /// var goalweight = "190";
    var currentweight = frmProcessMember.txtAreaWeightProcess.text;
    kony.print("Milestone Res++++" + JSON.stringify(milestoneRes));
    if (milestoneRes.length > 0) {
        mileStoneObj = [];
        glbMilestoneName = "";
        for (i in milestoneRes) {
            var weekDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            var createObj = {
                "MemberID": glbMemberId,
                "MemberMilestoneID": generateGUID(),
                "MilestoneID": milestoneRes[i]["milestoneID"],
                "ReachedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                "WeekNumber": getWeekNumber(weekDate.split('T')[0]),
                "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                "MilestoneName": milestoneRes[i]["strmilestoneName"],
                "MeetingID": checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum
            };
            var milestoneName = milestoneRes[i]["strmilestoneName"].trim();
            var milestoneID = milestoneRes[i]["milestoneID"];
            milestoneID = parseInt(milestoneID);
            kony.print("startWeight===" + startWeight + " ---currentWeight === " + currentweight);
            kony.print("Milestone name====" + milestoneName.toString());
            kony.print("Milestone Id====" + milestoneID);
            kony.print("CreateObj ====" + JSON.stringify(createObj));
            switch (milestoneID.toString()) {
                //case "Give Award":
                case "1":
                    break;
                    //case "10% Award":
                case "2":
                    if (getXPercentageOfWeight("10", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg10perAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "Reached Goal":
                case "3":
                    if (goalWeight >= currentweight) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsgReachedGoal"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "25lb Award":
                case "8":
                    if (weightDifferencInLbs("25", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg25lbAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "50lb Award":
                case "11":
                    if (weightDifferencInLbs("50", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg50lbAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "Reached Lifetime":
                case "13":
                    if (isEligibleForLifetime) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsgLifetime"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "75lb Award":
                case "15":
                    if (weightDifferencInLbs("75", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg75lbAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "100lb Award":
                case "18":
                    if (weightDifferencInLbs("100", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg100lbAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "5% Award":
                case "26":
                    if (getXPercentageOfWeight("5", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg5perAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case "Recruitment Opportunity":
                case "27":
                    break;
                    //case "Reached Personal Goal":
                case "28":
                    break;
                    //case "5lb Award":
                case "31":
                    if (weightDifferencInLbs("5", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg5lbAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
                    //case 10 LB award MEG-6995
                case "42":
                    if (weightDifferencInLbs("10", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg10lbAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    //case new 5 LB award MEG-6995
                case "43":
                    if (weightDifferencInLbs("5", startWeight, currentweight)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsg5lbOneTimeAward"));
                        InsertAchMilestone = true;
                        mileStoneObj.push(createObj);
                        glbMilestoneName += milestoneName.toString() + ",";
                    }
                    break;
            }
        }
        glbMilestoneName = glbMilestoneName.replace(/,\s*$/, '');
    }
}

function createMilestoneLookUp() {
    var whereclause = "";

    function getMilestoneLookUpSuccessCallback(res) {
        if (res.length > 0) {
            MiletoneLookupTable = new Array();
            for (var i = 0; i < res.length; i++) {
                var jsonObj = res[i];
                MiletoneLookupTable[jsonObj.MilestoneID] = jsonObj.MilestoneName;
            }
        } else {}
    }
    DBMilestoneLookUpController.find(whereclause, getMilestoneLookUpSuccessCallback, eventErrorCallBack);
}

function checkWeightLossByMemberId() {
    var currentWeight = frmProcessMember.txtAreaWeightProcess.text;
    currentWeight = parseFloat(currentWeight);
    if (IsFromPM == FlowForScreens.ProcessMember) boEnrollMember.getLatestWeightDataOfMember(glbMemberId, currentWeight);
}

function alertForWeightLoss() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("str10LbsNotification"),
        //" Please note the weight loss for this member is greater than 10lbs. If this is correct, proceed",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"),
        // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"),
        // "No",
        alertHandler: onClickWeightLossAlert
    };
    var psConfig = {};
    var weightLossAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onClickWeightLossAlert(response) {
    if (response == true) {
        notifyNewlyEnrolledMember(false);
    }
}

function getXPercentageOfWeight(xpercent, startweight, currentweight) {
    kony.print("getXPercentageOfWeight : " + xpercent + " " + startweight + " " + currentweight);
    var xpercentage = parseFloat(xpercent / 100) * parseFloat(startweight);
    var weightDiff = parseFloat(startweight) - parseFloat(currentweight);
    if (weightDiff >= xpercentage) {
        return true;
    }
    return false;
}

function getXPercentageOfWeightData(xpercent, startweight, currentweight) {
    var xpercentage = parseFloat(xpercent / 100) * parseFloat(startweight);
    if (currentweight > 0) {
        var weightDiff = parseFloat(startweight) - parseFloat(currentweight);
        if (weightDiff > 0 && weightDiff <= xpercentage) {
            xpercentage = parseFloat(xpercentage) - parseFloat(weightDiff);
        } else if (weightDiff < 0) {
            xpercentage = parseFloat(xpercentage) + parseFloat(Math.abs(weightDiff));
        }
    }
    return xpercentage.toFixed(1);
}

function weightDifferencInLbs(lbsweight, startweight, currentweight) {
    var weightDiff = parseFloat(startweight) - parseFloat(currentweight);
    kony.print("weightDifferencInLbs=" + weightDiff);
    kony.print("startweight=" + startweight);
    kony.print("currentweight=" + currentweight);
    if (weightDiff >= parseFloat(lbsweight)) {
        return true;
    }
    return false;
}

function weightDifferencInLbsData(lbsweight, startweight, currentweight) {
    if (currentweight > 0) {
        var weightDiff = parseFloat(startweight) - parseFloat(currentweight);
        if (weightDiff > 0 && weightDiff <= lbsweight) {
            lbsweight = parseFloat(lbsweight) - parseFloat(weightDiff);
        } else if (weightDiff < 0) {
            lbsweight = parseFloat(Math.abs(weightDiff) + parseFloat(lbsweight));
        }
    }
    return lbsweight;
}

function notifyNewlyEnrolledMember(isEnrollFlow) {
    if (isEnrollFlow) showNotificationsForNewlyEnrolledMember(0);
    else boEnrollMember.getNewlyEnrolledMember(glbMemberId);
}

function showNotificationsForNewlyEnrolledMember(week) {
    /*if(checkAppSettingEnable(Settings["AppMsg"]))
     	showNotificationsForNewlyEnrolledMemberAfterDec(week);
    else
    	showNotificationsForNewlyEnrolledMemberBeforeDec(week);*/
    if (checkAppSettingEnable(Settings["WDSAppMsg"])) showNotificationsForNewlyEnrolledMemberAfterDec(week);
    else showNotificationsForNewlyEnrolledMemberBeforeDec(week);
}
/*
function showNotificationsForNewlyEnrolledMemberBeforeDec(week) {
	kony.print("showNotificationsForNewlyEnrolledMemberBeforeDec week : "+week);
    var isNextScreen = false;
    switch (week) {
        case 0:
            {
                kony.print("Week 0");
                kony.print("FlowForScreens.AddIndividual : "+FlowForScreens.AddIndividual);
                    notifyMember(kony.i18n.getLocalizedString("strMsgWeek0"));

                break;
            }
        case 1:
            {
                kony.print("Week 1");
                notifyMember(kony.i18n.getLocalizedString("strMsgWeek1"));
                break;
            }
        case 2:
            {
                kony.print("Week 2");
                notifyMember(kony.i18n.getLocalizedString("strMsgWeek2"));
                break;
            }
        case 3:
            {
                kony.print("Week 3");
                notifyMember(kony.i18n.getLocalizedString("strMsgWeek3"));
                break;
            }
        default:
            //frmCheckout.show();
            checkAttendMeetingForWeighIn();
            break;
    }
}
*/
function showNotificationsForNewlyEnrolledMemberAfterDec(week) {
    kony.print("showNotificationsForNewlyEnrolledMemberAfterDec week : " + week);
    var isNextScreen = false;
    switch (week) {
        case 0:
            {
                kony.print("Week 0");
                notifyMember(kony.i18n.getLocalizedString("strMsgNewFor18YrWeek0")); //kony.i18n.getLocalizedString("strMsgWeek0"));
                break;
            }
        case 1:
            {
                kony.print("Week 1");
                notifyMember(kony.i18n.getLocalizedString("strMsgNewFor18YrWeek1")); //kony.i18n.getLocalizedString("strMsgWeek1"));
                break;
            }
        case 2:
            {
                kony.print("Week 2");
                notifyMember(kony.i18n.getLocalizedString("strMsgNewFor18YrWeek2")); //kony.i18n.getLocalizedString("strMsgWeek2"));
                break;
            }
        case 3:
            {
                kony.print("Week 3");
                notifyMember(kony.i18n.getLocalizedString("strMsgNewFor18YrWeek3")); //kony.i18n.getLocalizedString("strMsgWeek3"));
                break;
            }
        case 4:
            {
                kony.print("Week 4");
                notifyMember(kony.i18n.getLocalizedString("strMsgNewFor18YrWeek4")); //kony.i18n.getLocalizedString("strMsgWeek3"));
                break;
            }
        default:
            //frmCheckout.show();
            checkAttendMeetingForWeighIn();
            break;
    }
}

function showNotificationsForNewlyEnrolledMemberBeforeDec(week) {
    kony.print("showNotificationsForNewlyEnrolledMemberBeforeDec week : " + week);
    var isNextScreen = false;
    switch (week) {
        case 0:
            {
                kony.print("Week 0");
                notifyMemberWithMsg(kony.i18n.getLocalizedString("strMsgNewWeek0")); //kony.i18n.getLocalizedString("strMsgWeek0"));
                break;
            }
        case 1:
            {
                kony.print("Week 1");
                notifyMemberWithMsg(kony.i18n.getLocalizedString("strMsgNewWeek1")); //kony.i18n.getLocalizedString("strMsgWeek1"));
                break;
            }
        case 2:
            {
                kony.print("Week 2");
                notifyMemberWithMsg(kony.i18n.getLocalizedString("strMsgNewWeek2")); //kony.i18n.getLocalizedString("strMsgWeek2"));
                break;
            }
        case 3:
            {
                kony.print("Week 3");
                notifyMemberWithMsg(kony.i18n.getLocalizedString("strMsgNewWeek3")); //kony.i18n.getLocalizedString("strMsgWeek3"));
                break;
            }
        case 4:
            {
                kony.print("Week 4");
                notifyMemberWithMsg(kony.i18n.getLocalizedString("strMsgNewWeek4")); //kony.i18n.getLocalizedString("strMsgWeek3"));
                break;
            }
        default:
            //frmCheckout.show();
            checkAttendMeetingForWeighIn();
            break;
    }
}

function notifyMember(msg) {
    var basicConf = {
        message: msg,
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
        noLabel: "",
        alertHandler: HandleResponse
    };
    var pspConf = {};
    var infoAlert = kony.ui.Alert(basicConf, pspConf);
}

function notifyMemberWithMsg(msg) {
    kony.print("notifyMemberWithMsg alert msg = " + msg);
    msg = "<br><br>" + msg + "</br></br></br>";
    popupShowWeeklyAlert.msgBox.text = msg;
    popupShowWeeklyAlert.show();
}

function HandleResponse(response) {
    checkAttendMeetingForWeighIn();
    //   frmCheckout.show();
}

function displayNote() {
    var whereClause = " where (MemberID = '" + glbMemberId + "') and NoteTypeID = 'Sticky' ";
    boEnrollMember.getNoteByMemberId(whereClause, glbMemberId);
}

function displayNoteFromOnline(status, strNote) {
    if (status) {
        frmViewMemberProfile.lblnotes.text = strNote; // display note on view member profile
        frmViewMemberProfile.vboxAddNote.setVisibility(false);
        frmViewMemberProfile.vboxEditNote.setVisibility(true);
        frmProcessMember.txtNotes.text = strNote;
    }
}
//MEG-43 code
function ShowAlertMemberFallingMaintenace() {
    var basicConf = {
        message: getLocalizedString("strMsgFailingMaintence"),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"),
        noLabel: kony.i18n.getLocalizedString("strLblNo"),
        alertHandler: onClickYesOrNOMaintenace
    };
    var psConfig = {};
    var maintenaceAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onClickYesOrNOMaintenace(response) {
    if (response) {} else {}
}
//added by praveen kalal on click of vbox of Edit setting of gaol weight and fresh start
function eventonClickvboxProcessMemberActions() {
    //Show popup Actions for Process Member
    var context = {
        "widget": glbFormName.vboxProcessMemberActions,
        "anchor": "top",
        "sizetoanchorwidth": true
    };
    popupActionsForProcessMember.setContext(context);
    popupActionsForProcessMember.show();
}

function onDoneEditingGoalWeight() {
    popupGoalWeight.textareaGoalweight.text = parseFloat(popupGoalWeight.textareaGoalweight.text).toFixed(1);
}

function onDoneUpdateGoalWeight() {
    //Validate Goal weight
    if (popupGoalWeight.textareaGoalweight.text == "" || parseFloat(popupGoalWeight.textareaGoalweight.text) < 60 || parseFloat(popupGoalWeight.textareaGoalweight.text) > 999.9 || isNaN(popupGoalWeight.textareaGoalweight.text)) {
        //alertForMessages(kony.i18n.getLocalizedString("strValidGoalWeight"));
        displayPopupAlert(kony.i18n.getLocalizedString("strValidGoalWeight"));
        return false;
    }
    kony.print("ChangeGoalWeight: Goal Weight: " + parseFloat(popupGoalWeight.textareaGoalweight.text) + " Start Weight: " + parseFloat(gblStartWeightPM));
    valid = new validationcls();
    var res;
    res = valid.validateGoalWeight(parseFloat(popupGoalWeight.textareaGoalweight.text), parseFloat(gblStartWeightPM)).isValid();
    kony.print("ValidateGoalWeight Response: " + res);
    if (res) {
        var whrCond = "where MemberID = '" + glbMemberId + "'";
        //Entered Goal weight is Valid, Update goal weight...
        kony.print("onDoneUpdateGoalWeight whrCond: " + whrCond);
        var updateObj = {
            "GoalWeight": parseFloat(parseFloat(popupGoalWeight.textareaGoalweight.text).toFixed(2))
        };
        if (MemberType == "Value" && isGoalWeightReset == 1) {
            if (glbIsInMaintance || glbIsInMaintance == '1' || glbIsInMaintance == 1 || glbIsInMaintance == "true") {
                isGoalWeightReset = 0;
                updateObj = {
                    "GoalWeight": parseFloat(popupGoalWeight.textareaGoalweight.text),
                    "MaintenanceMode": 0,
                    "TrackerStartDate": "0001-01-01T00:00:00",
                    "FailedDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS")
                };
            }
            //showConfirmationOnGoalReset(kony.i18n.getLocalizedString("strMsgForGoalReset"));
        }
        //Change to 1 - if member mtngoccrid other than present mtngoccrid
        updateObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
        glbSelectedMemberMtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;
        if (gblSubType != "PAYG") {
            updateObj.IsPAYG = "false";
        } else {
            updateObj.IsPAYG = "true";
        }
        //Dileep Chejerla: Added to fix "Entered goal weight does not save on weigh in screen" issue
        goalWeightSub = parseFloat(popupGoalWeight.textareaGoalweight.text);
        gblGoalWeightPM = parseFloat(popupGoalWeight.textareaGoalweight.text);
        //Update Defaults
        updateMemberDetailsSetDefaults(updateObj, UpdateGoalWeightSuccessCallback);

        function UpdateGoalWeightSuccessCallback(updateObjWithDefaults) {
            boMemberProfile.updateMemberGoalWeight(whrCond, updateObjWithDefaults);
        }
    } else {
        if (error != "") {
            displayPopupAlert(kony.i18n.getLocalizedString("strValidGoalWeight"));
            error = "";
        }
    }
}

function lbsToNextMilestone() {
    getLast5LbWeight() //Added By PK MEGCA-434 
    var lbsToNextMilestoneList = [];
    var lbsToNextMilestoneListKV = [];
    var isEligible = false;
    var startWeight, GoalWt // "230"; //To do: Get the value of enroll time from Db by query
    var ltnweight = 0;
    var ltnName = "";
    var currentweight = 0;
    /// var goalweight = "190";
    if (IsFromPM == FlowForScreens.ProcessMember) {
        kony.print("lbsToNextMilestone gblStartWeightPM: " + gblStartWeightPM);
        kony.print("lbsToNextMilestone goalWeight: " + goalWeight);
        kony.print("lbsToNextMilestone gblGoalWeightPM: " + gblGoalWeightPM);
        kony.print("::pk---" + JSON.stringify(milestoneRes));
        startWeight = gblStartWeightPM;
        GoalWt = gblGoalWeightPM;
        lbsToNextMilestoneList = milestoneRes;
        kony.print("::pk--cc-" + JSON.stringify(lbsToNextMilestoneList));
        if (frmProcessMember.txtAreaWeightProcess.text != undefined && frmProcessMember.txtAreaWeightProcess.text != null && frmProcessMember.txtAreaWeightProcess.text != "") {
            currentweight = frmProcessMember.txtAreaWeightProcess.text;
        }
    } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
        kony.print("::pk-a--" + JSON.stringify(eligibleMilestonesArrObj));
        lbsToNextMilestoneList = _.clone(eligibleMilestonesArrObj);
        lbsToNextMilestoneList = _.each(lbsToNextMilestoneList, function(a) {
            a.strmilestoneName = a.MilestoneName
        });
        kony.print("::pk--b-" + JSON.stringify(lbsToNextMilestoneList));
        currentweight = (checkValidString(frmEnrollWeighMember.txtWeight.text)) ? frmEnrollWeighMember.txtWeight.text : 0;
        startWeight = (checkValidString(frmAddIndividulaMember.txtStartWeight.text)) ? frmAddIndividulaMember.txtStartWeight.text : 0;
        GoalWt = (checkValidString(frmAddIndividulaMember.txtGoalWeight.text)) ? frmAddIndividulaMember.txtGoalWeight.text : 0;
    }
    kony.print("lbsToNextMilestone Milestone Res++++: " + JSON.stringify(lbsToNextMilestoneList));
    kony.print("startWeight===" + startWeight + " ---currentWeight === " + currentweight);
    if (lbsToNextMilestoneList.length > 0) {
        for (var i in lbsToNextMilestoneList) {
            var milestoneName = lbsToNextMilestoneList[i]["strmilestoneName"].trim();
            var milestoneID = "";
            if (IsFromPM == FlowForScreens.ProcessMember) milestoneID = lbsToNextMilestoneList[i]["milestoneID"];
            else if (IsAddIndividual == FlowForScreens.AddIndividual) milestoneID = lbsToNextMilestoneList[i]["MilestoneID"];
            isEligible = false;
            kony.print("Milestone name====" + milestoneName.toString());
            kony.print("Milestone ID====" + milestoneID.toString());
            ltnweight = 0;
            ltnName = milestoneName.toString();
            switch (milestoneID.toString()) {
                //case "Give Award":
                case "1":
                    break;
                    //case "10% Award":
                case "2":
                    ltnweight = getXPercentageOfWeightData("10", startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case "Reached Goal":
                case "3":
                    //ltnweight = weightDifferencInLbsData(goalWeight,startWeight,currentweight);
                    var weightDiff = parseFloat(currentweight) - parseFloat(GoalWt);
                    if (weightDiff > 0) {
                        ltnweight = weightDiff;
                    }
                    isEligible = true;
                    break;
                    //case "25lb Award":
                case "8":
                    ltnweight = weightDifferencInLbsData("25", startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case "50lb Award":
                case "11":
                    ltnweight = weightDifferencInLbsData("50", startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case "Reached Lifetime":
                case "13":
                    break;
                    //case "75lb Award":
                case "15":
                    ltnweight = weightDifferencInLbsData("75", startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case "100lb Award":
                case "18":
                    ltnweight = weightDifferencInLbsData("100", startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case "5% Award":
                case "26":
                    ltnweight = getXPercentageOfWeightData("5", startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case "Recruitment Opportunity":
                case "27":
                    break;
                    //case "Reached Personal Goal":
                case "28":
                    break;
                    //case "5lb Award":
                case "31":
                    ltnweight = checkLbsTo5LbMilestone(lastWeightFor5Lb, startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case 10 LB award MEG-6995
                case "42":
                    ltnweight = weightDifferencInLbsData("10", startWeight, currentweight);
                    isEligible = true;
                    break;
                    //case New 5 LB award MEG-6995
                case "43":
                    ltnweight = weightDifferencInLbsData("5", startWeight, currentweight);
                    isEligible = true;
                    break;
            }
            if (isEligible) {
                var createObj = {
                    "MilestoneName": milestoneName,
                    "lbsToDeductFromStWt": parseFloat(ltnweight).toFixed(1)
                };
                kony.print("lbsToNextMilestone createObj===>> " + JSON.stringify(createObj));
                //Added for MEG-7060
                if (checkAppSettingEnable(Settings["NMILESTONE"])) {
                    kony.print("mileStoneObj===>> " + JSON.stringify(mileStoneObj));
                    var milestoneFound = _.some(mileStoneObj, function(ml) {
                        return ml.MilestoneID === milestoneID;
                    });
                    kony.print("milestoneFound===>> " + JSON.stringify(milestoneFound));
                    if (milestoneFound) {
                        kony.print("Found " + milestoneName);
                    } else {
                        lbsToNextMilestoneListKV.push(createObj);
                    }
                } else {
                    lbsToNextMilestoneListKV.push(createObj);
                }
            }
        }
        kony.print("Before lbsToNextMilestoneListKV==> " + JSON.stringify(lbsToNextMilestoneListKV));
        if (lbsToNextMilestoneListKV != undefined && lbsToNextMilestoneListKV != null && lbsToNextMilestoneListKV.length > 0) {
            sortMilestones(lbsToNextMilestoneListKV);
            kony.print("After lbsToNextMilestoneListKV==> " + JSON.stringify(lbsToNextMilestoneListKV));
            lbsToNextMilestoneListKV = _.filter(lbsToNextMilestoneListKV, function(num) {
                return num.lbsToDeductFromStWt != "0.0";
            })
            kony.print("After fliter lbsToNextMilestoneListKV==> " + JSON.stringify(lbsToNextMilestoneListKV));
            ltnName = lbsToNextMilestoneListKV[0]["MilestoneName"] + ",";
            for (var j = 1; j < lbsToNextMilestoneListKV.length; j++) {
                kony.print("compare" + lbsToNextMilestoneListKV[0]["lbsToDeductFromStWt"] + " =====" + lbsToNextMilestoneListKV[j]["lbsToDeductFromStWt"]);
                if (lbsToNextMilestoneListKV[0]["lbsToDeductFromStWt"] == lbsToNextMilestoneListKV[j]["lbsToDeductFromStWt"]) {
                    kony.print("IN");
                    ltnName += lbsToNextMilestoneListKV[j]["MilestoneName"] + ",";
                }
            }
            kony.print("Before ltnName: " + ltnName);
            ltnName = ltnName.replace(/,\s*$/, '');
            kony.print("After ltnName: " + ltnName);
            kony.print("::PK::5025--" + IsAddIndividual);
            //Changes added for MEG-5025
            if (IsAddIndividual) {
                if (!checkValidString(frmEnrollWeighMember.txtWeight.text)) {
                    glbFormName.lblLbsToNextMilestoneInfo.text = " 5 lbs "; //parseFloat(ltnweight).toFixed(1);
                    glbFormName.lblLbsToNextMilestone.text = "";
                    glbFormName.lblLbsToNextMilestone.text = kony.i18n.getLocalizedString("strLBSToNextMilestone") + "[" + getLocalizedString("str5lbAward") + "]"; //kony.i18n.getLocalizedString("strLBSToNextMilestone")+"["+ltnName+"]";
                } else {
                    glbFormName.lblLbsToNextMilestoneInfo.text = parseFloat(lbsToNextMilestoneListKV[0]["lbsToDeductFromStWt"].toString()).toFixed(1); //parseFloat(ltnweight).toFixed(1);
                    glbFormName.lblLbsToNextMilestone.text = "";
                    glbFormName.lblLbsToNextMilestone.text = kony.i18n.getLocalizedString("strLBSToNextMilestone") + "[" + ltnName + "]"; //kony.i18n.getLocalizedString("strLBSToNextMilestone")+"["+ltnName+"]";
                }
            } else {
                glbFormName.lblLbsToNextMilestoneInfo.text = parseFloat(lbsToNextMilestoneListKV[0]["lbsToDeductFromStWt"].toString()).toFixed(1); //parseFloat(ltnweight).toFixed(1);
                glbFormName.lblLbsToNextMilestone.text = "";
                glbFormName.lblLbsToNextMilestone.text = kony.i18n.getLocalizedString("strLBSToNextMilestone") + "[" + ltnName + "]"; //kony.i18n.getLocalizedString("strLBSToNextMilestone")+"["+ltnName+"]";
            }
        } else {
            glbFormName.lblLbsToNextMilestoneInfo.text = " -- ";
            glbFormName.lblLbsToNextMilestone.text = "";
            glbFormName.lblLbsToNextMilestone.text = kony.i18n.getLocalizedString("strLBSToNextMilestone");
        }
    } else {
        glbFormName.lblLbsToNextMilestoneInfo.text = " 5 lbs "; //Added for MEGCA-430
        glbFormName.lblLbsToNextMilestone.text = "";
        glbFormName.lblLbsToNextMilestone.text = kony.i18n.getLocalizedString("strLBSToNextMilestone");
    }
}
//Added By PK MEGCA-434
function getLast5LbWeight() {
    lastWeightFor5Lb = 0;
    var transactionSQLQuery = "SELECT WD.Weight from Milestoneachieved MA " + "INNER JOIN MilestoneLookup ML on MA.MilestoneID = ML.MilestoneID " + "INNER JOIN WeighDetails WD on WD.MemberID = MA.MemberID AND WD.WeighInDate = MA.WeighInDate " + "WHERE MA.memberid = '" + glbMemberId + "' AND ML.MilestoneName = '5lb Award'" + " AND WD.CountryID = '" + getCountryID() + "' ORDER BY WD.WeighInDate Desc limit 0,1";
    kony.print("::getLast5LbWeight::transactionSQLQuery=" + transactionSQLQuery);
    kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, function(response) {
        kony.print("::deleteTransaction::::response::" + JSON.stringify(response));
        if (response.length > 0) {
            var v = response[0];
            kony.print("Weight=" + v.Weight);
            lastWeightFor5Lb = kony.sync.getString(v.Weight);
        }
    }, eventErrorCallBack);
}
//End By PK MEGCA-434
function checkLbsTo5LbMilestone(lastweight, startWeight, currentWeight) {
    try {
        var lastwt = (lastweight > 0) ? lastweight : startWeight;
        var lastRange = _.find(_.range(parseFloat(startWeight), 0, -5), function(num) {
            return num < parseFloat(lastwt);
        });
        if (lastRange > currentWeight) {
            lastRange = _.find(_.range(parseFloat(startWeight), 0, -5), function(num) {
                return num < parseFloat(currentWeight);
            });
        }
        var diff = parseFloat(currentWeight) - parseFloat(lastRange);
        diff = (diff == 0) ? 5 : diff;
        return parseFloat(diff).toFixed(1);
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

function onPostShowFrmProcess() {
    needToshowNoteMsg = false; // MEGCA-333
    getCommonMemberDataById(); // Added By Praveen Kalal FOR MEG-4797
    if (glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID) {
        //glbSelectSubType = (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual)?"3-2-2":"3-1-1";
        kony.print("Inside glbSelectSubType===" + glbSelectSubType);
    }
    if (!in_array(deviceLocale, Countries["CA"])) {
        frmProcessMember.imgCheckbox1.src = "attending.png";
        IsAttendMeeting = true;
        frmProcessMember.vboxAtendingMeeting.isVisible = false;
        frmProcessMember.vboxCheckAtRisk.isVisible = false;
    } else //Added for MEGCN-14
    {
        frmProcessMember.vboxAtendingMeeting.isVisible = true;
        frmProcessMember.vboxCheckAtRisk.isVisible = true;
        kony.print("In canada");
        // Added to solve ‘At Risk’ checkbox reset on back
        if (IsAtRisk == true) {
            frmProcessMember.imgCheckbox2.src = "atrisk.png";
        } else {
            frmProcessMember.imgCheckbox2.src = "atrisk_disable.png";
        }
        //    frmProcessMember.lblAtRisk.setVisibility(true);
        frmProcessMember.vboxCheckAtRisk.setVisibility(true);
    }
    //popupAdvancedSearch.dismiss();
    popupAdvancedSearch.destroy(); // Added by Praveen Kalal MEG-2712
    frmProcessMember.txtSubscriptionID.setEnabled(true);
    frmProcessMember.btnScan.setVisibility(true); // Added by Dileep Chejerla
    if (checkAppSettingEnable(Settings["DPT"])) {
        frmProcessMember.hboxWPA.isVisible = true;
    } else {
        frmProcessMember.hboxWPA.isVisible = false;
    }
    //Added changes for MEG-7061
    if (checkAppSettingEnable(Settings["NMILESTONE"])) {
        frmProcessMember.hbox202458205262808.isVisible = false;
        frmProcessMember.hbox202458205262814.isVisible = false;
    } else {
        frmProcessMember.hbox202458205262808.isVisible = true;
        frmProcessMember.hbox202458205262814.isVisible = true;
    }
}

function generateSubscriptionId(coupon, expdate) {
    if (coupon != "" && expdate != "") {
        kony.print("coupon==" + coupon + "===expdate===" + expdate);
        var d = expdate.split("/");
        ///////////////////////////////
        // back and forth fix to show what you have as expiry in memory
        ///////////////////////////////
        var magicExpDate = d[0] + d[1] + d[2].substring(2, 4);
        if (coupon.length == 15 && (coupon.substring(9, 15) != magicExpDate)) {
            var magicSubid = coupon;
            kony.print("magicSubid====" + magicSubid);
            return magicSubid;
        }
        //////////////////////////////////
        // end of back and forth fix to show
        /////////////////////////////////
        var subid;
        if (coupon.length == 10) {
            subid = coupon.substring(0, 10) + d[0] + d[1] + d[2].substring(2, 4);
        } else {
            subid = coupon.substring(0, 10) + d[0] + d[1] + d[2].substring(2, 4);
        }
        kony.print("PK==subid==" + subid);
        return subid;
    }
    return "";
}
//MEG-141 - mobile application to display message in case member is loosing his/her weight rapidly.
function onClickIsMemberLoosingWeightRapidly(currentWeight) {
    try {
        boProcessMember.isMemberLoosingWeightRapidly(glbMemberId, currentWeight)
    } catch (e) {
        GlobalException(e);
    }
}
//By Shobhit for showing menu
function eventonClickvboxProcessMemberActions() {
    popupActionsForProcessMember.show();
}

function onRowClickFromActionPopup() {
    kony.print("selected index==" + JSON.stringify(popupActionsForProcessMember.processMemberActionsSegment.selectedIndex));
    var option = popupActionsForProcessMember.processMemberActionsSegment.selectedIndex[1];
    if (option == 0) {
        kony.print("------->fresh start ");
        //Dileep Chejerla: MEG-2815
        //var context = {"widget":frmProcessMember.vboxProcessMemberActions,"anchor":"top","sizetoanchorwidth":true};  
        var context = {
            "widget": popupActionsForProcessMember.hboxActionPopup,
            "anchor": "right",
            "sizetoanchorwidth": true
        };
        popupMemberWeightHistory.setContext(context);
        popupMemberWeightHistory.show();
    } else if (option == 1) {
        //Dileep Chejerla: MEG-2815
        var context = {
            "widget": popupActionsForProcessMember.hboxActionPopup,
            "anchor": "right",
            "sizetoanchorwidth": true
        };
        popupGoalWeight.setContext(context);
        if (frmProcessMember.lblGoalWeightInfo.text != "" || frmProcessMember.lblGoalWeightInfo.text != undefined) {
            popupGoalWeight.textareaGoalweight.text = frmProcessMember.lblGoalWeightInfo.text;
        } else {
            popupGoalWeight.textareaGoalweight.text = 0;
        }
        kony.print("in glbMemberId==" + glbMemberId);
        popupGoalWeight.show();
    } else if (option == 2) {
        popupActionsForProcessMember.dismiss();
        popupMissedWeeks.show();
    } else if (option == 3) {
        //Getting type of member. If type is Lifetime then not allow to change the type.
        kony.print("=========isLifetime===========" + isLifetime);
        if (isLifetime) {
            // Dileep Chejerla: MEG-2816 - popup shrink issue
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgAlreadyLifetime"));
        } else if (!isMemberAcive) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgLTCriteriaStatus"));
        } else if (!isGoalWeightAvailable) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgLTCriteria"));
        } else {
            popupChangeMemberTypeForProcessMember.txtChangeMemberTypeForProcessMember.text = "";
            var context1 = {
                "widget": popupActionsForProcessMember.hboxActionPopup,
                "anchor": "right",
                "sizetoanchorwidth": true
            };
            popupChangeMemberTypeForProcessMember.setContext(context1);
            popupChangeMemberTypeForProcessMember.show();
        }
    } else if (option == 4) {
        popupActionsForProcessMember.dismiss();
        popupChangeStartWeight.txtWeight.text = "";
        popupChangeStartWeight.show();
    } else if (option == 5) {
        popupActionsForProcessMember.dismiss();
        popupChangePersonalGoal.txtPersonalGoalWeight.text = (glbPersonalGoalWeight > 0) ? parseFloat(glbPersonalGoalWeight).toFixed(1) : "";
        popupChangePersonalGoal.show();
    }
}
var isGoalWeightChecked = false;

function onDoneCurrentWeight() {
    kony.print(" isGoalWeightChecked=" + isGoalWeightChecked);
    if (isGoalWeightChecked == false && MemberType == "Value" && IsFromPM == FlowForScreens.ProcessMember && isGoalWeightReset == 0) {
        boProcessMember.checkForMemberInMaintainace(glbMemberId, checkMemberInMaintainenceSucessCallback);
    }
    setDollerPriceValue(); // added for MEG-4797 [Ankit]
}

function checkMemberInMaintainenceSucessCallback() {
    kony.print(" in checkMemberInMaintainenceSucessCallback");
    var currentWeight = parseFloat(frmProcessMember.txtAreaWeightProcess.text);
    var goalWeight = parseFloat(frmProcessMember.lblGoalWeightInfo.text);
    if (glbIsInMaintance == null || glbIsInMaintance == 0 || glbIsInMaintance == "" || glbIsInMaintance == "false") {
        glbIsInMaintance = false;
    } else if (glbIsInMaintance || glbIsInMaintance == '1' || glbIsInMaintance == 1 || glbIsInMaintance == "true") {
        kony.print(" in glbIsInMaintance");
        if (isConsicutive5WeeksCompleted == 1) //If member has completed 5-weeks
        {
            kony.print(" in isConsicutive5WeeksCompleted");
            kony.print("currentWeight=" + currentWeight + "--goalWeight=" + goalWeight);
            if ((currentWeight < (goalWeight - 2)) || (currentWeight > (goalWeight + 2))) //weight is NOT in range of +/- 2 lbs of "Goal weight",
            {
                kony.print("in currentWeight=" + currentWeight + "--goalWeight=" + goalWeight);
                showConfirmationOnGoalReset(kony.i18n.getLocalizedString("strMsgForGoalReset"));
            }
        }
    }
}

function showConfirmationOnGoalReset(msg) {
    var alertConfig = {
        message: msg,
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"),
        noLabel: kony.i18n.getLocalizedString("strLblNo"),
        alertHandler: onClickYesOrNO
    };
    var psConfig = {};
    var termedAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onClickYesOrNO(response) {
    isGoalWeightChecked = true;
    kony.print("response val== " + response)
    if (response) {
        isGoalWeightReset = 1;
        frmProcessMember.lblGoalWeightInfo.text = frmProcessMember.txtAreaWeightProcess.text;
    } else {
        isGoalWeightReset = 0;
    }
}

function eventOnSaveReasonMemberShipTypeForProcessMember() {
    kony.print("In eventOnSaveReasonMemberShipTypeForProcessMember");
    isLifetimeInChangeMemberType = true;
    isLifetime = true;
    isGoalWeightAvailable = false;
    MemberType = "LifeTime";
    popupChangeMemberTypeForProcessMember.dismiss();
    //popupActionsForAddMember.dismiss();
    displayPopupAlert(kony.i18n.getLocalizedString("strMsgMemberUpdateSuccess"));
}

function onDoneEditingGoalWeight() {
    popupGoalWeight.textareaGoalweight.text = parseFloat(popupGoalWeight.textareaGoalweight.text).toFixed(1);
}
var optNum = 0;
//var ReedeemedPasses=0;
var currentIndex = 0;

function onSelectCalender() {
    popupActionsForAttendence.dismiss();
    var index = getIndexFromID(this.id);
    currentIndex = index;
    var sDate = Date.parse(weekData[index]["startDate"]);
    var nextWeekSdate = sDate * 1 + 7 * 24 * 3600 * 1000;
    var weekDays = getDates(sDate, nextWeekSdate);
    var segData = [];
    kony.print("weekDays " + JSON.stringify(weekDays));
    for (var i = 0; i < weekDays.length; i++) {
        var newObj = new Array();
        //** MEG 6622 
        // Added Alternative code to formate the date to locale specific date string as with latest Kony IOS Plugins 
        // "toLocaleDateString()" function does not convert the date to locale specific date string in IOS 10 devices.
        var finaldate = "";
        var date = weekDays[i].getDate();
        var month = '"' + getLocalizedString('strJanF') + "," + getLocalizedString('strFebF') + "," + getLocalizedString('strMarF') + "," + getLocalizedString('strAprF') + "," + getLocalizedString('strMayF') + "," + getLocalizedString('strJunF') + "," + getLocalizedString('strJulF') + "," + getLocalizedString('strAugF') + "," + getLocalizedString('strSepF') + "," + getLocalizedString('strOctF') + "," + getLocalizedString("strNovF") + "," + getLocalizedString('strDecF') + '"';
        month = month.split(",")[weekDays[i].getMonth()];
        if (deviceLocale == "fr_CA") {
            finaldate = date + " " + month + " " //remove space
                + weekDays[i].getFullYear();
        } else {
            finaldate = month + " " + date + ", " //remove space
                + weekDays[i].getFullYear();
        }
        kony.print("finaldate " + finaldate);
        newObj["lblActionItem"] = finaldate;
        //**Commented as with latest Kony IOS Plugins 
        // "toLocaleDateString()" function does not convert the date to locale specific date string in IOS 10 devices.    
        //newObj["lblActionItem"] = weekDays[i].toLocaleDateString(); //.getDate()+"/"+weekDays[i].getMonth()+1+"/"+weekDays[i].getFullYear();
        //** End
        segData.push(newObj);
    }
    showOptionPopup(segData, 1, this);
}

function onSelectLastAttendence() {
    var index = getIndexFromID(this.id);
    currentIndex = index;
    showOptionPopup(attendaceTypes, 2, this);
}

function onSelectPasses() {
    var index = getIndexFromID(this.id);
    if (checkforMissedWeekAttendaceType(index)) {
        currentIndex = index;
        showOptionPopup(passTypes, 3, this);
    }
}

function showOptionPopup(optionData, option, target) {
    popupActionsForAttendence.dismiss();
    popupActionsForAttendence.segActions.setData(optionData);
    kony.print("targetId==" + target.id);
    targetId = getIndexFromID(target.id);
    kony.print("targetId after==" + targetId);
    context = {
        "widget": target,
        "anchor": "any",
        "sizetoanchorwidth": false
    };
    popupActionsForAttendence.setContext(context);
    popupActionsForAttendence.show();
    optNum = option;
}

function createPassTypesArray() {
    passTypes = [];
    var pass1 = kony.i18n.getLocalizedString("strPrepay");
    var pass2 = kony.i18n.getLocalizedString("strMissedWeekCoupan");
    var passType1 = {};
    var passType2 = {};
    passType1["lblActionItem"] = pass1;
    passType2["lblActionItem"] = pass2;
    passTypes.push(passType1);
    passTypes.push(passType2);
}

function createAttendanceTypesArray() {
    attendaceTypes = [];
    var attType1 = kony.i18n.getLocalizedString("strSelectAttendeceType");
    var attType2 = kony.i18n.getLocalizedString("strMissedWeeks");
    var attType3 = kony.i18n.getLocalizedString("strAttendOtherMeeting");
    var attType4 = kony.i18n.getLocalizedString("strMeetingClosed");
    var attType5 = kony.i18n.getLocalizedString("strOtherExcuse");
    var attTypes1 = {},
        attTypes2 = {},
        attTypes3 = {},
        attTypes4 = {},
        attTypes5 = {};
    attTypes1["lblActionItem"] = attType1;
    attTypes2["lblActionItem"] = attType2;
    attTypes3["lblActionItem"] = attType3;
    attTypes4["lblActionItem"] = attType4;
    attTypes5["lblActionItem"] = attType5;
    attendaceTypes.push(attTypes1);
    attendaceTypes.push(attTypes2);
    attendaceTypes.push(attTypes3);
    attendaceTypes.push(attTypes4);
    attendaceTypes.push(attTypes5);
}

function loadMissedWeekData() {
    kony.print("isMissedWeekPopupShowed====" + isMissedWeekPopupShowed);
    if (!isMissedWeekPopupShowed) {
        kony.print("inside isMissedWeekPopupShowed====" + isMissedWeekPopupShowed);
        kony.print("print memberSUbtype---" + gblSubType);
        //Added by praveen  AND condition to check glbSubType is not MonthlyPass and SeventeenWeek
        if (glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID && glbSelectSubType == '') {
            glbSelectSubType = (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) ? "3-2-2" : "3-1-1";
            kony.print("Inside glbSelectSubType===" + glbSelectSubType);
        }
        createPassTypesArray();
        createAttendanceTypesArray();
        ReedeemedPasses = 0;
        MissWeekPasses = 0;
        weekData = [];
        if (userMissedWeekPass == 0 || userMissedWeekPass == "" || userMissedWeekPass == '') userMissedWeekPass = 0;
        kony.print("attendaceTypes" + JSON.stringify(attendaceTypes));
        kony.print("memberID=" + attendaceTypes[1]["lblActionItem"], "missedWeek=" + kony.i18n.getLocalizedString("strSelectAttendeceType"));
        kony.print("frmAddIndividulaMember.txtRemainingWeeks.text====" + frmAddIndividulaMember.txtRemainingWeeks.text);
        if (IsAddIndividual == FlowForScreens.AddIndividual) {
            kony.print("inside IsAddIndividual isMissedWeekPopupShowed====" + isMissedWeekPopupShowed);
            if (frmAddIndividulaMember.txtRemainingWeeks.text == '' || frmAddIndividulaMember.txtRemainingWeeks.text.length == 0) {
                userMissedWeekPass = 0;
            } else {
                userMissedWeekPass = parseInt(frmAddIndividulaMember.txtRemainingWeeks.text);
            }
            kony.print("frmAddIndividulaMember.txtRemainingWeeks.text====" + parseInt(frmAddIndividulaMember.txtRemainingWeeks.text));
            var weeks = returnWeeksDates(frmAddIndividulaMember.lblStartDateInfo.text);
            missedWeek = weeks.length;
            var weeksCompleted = 0;
            if (frmAddIndividulaMember.txtWeeksCompleted.text == '' || frmAddIndividulaMember.txtWeeksCompleted.text.length == 0) weeksCompleted = 0;
            else weeksCompleted = parseInt(frmAddIndividulaMember.txtWeeksCompleted.text)
            missedWeek = missedWeek - weeksCompleted;
            var dateAfterWeeksCompleted = returnDateAfterWeeksCompleted(frmAddIndividulaMember.lblStartDateInfo.text, weeksCompleted);
            weeksRemain = returnWeeksDates(dateAfterWeeksCompleted);
            var last4MissedWeeks = returnLast4MissedWeeks(weeksRemain, 4);
            kony.print("last4MissedWeeks length====" + last4MissedWeeks.length);
            kony.print("last4MissedWeeks====" + last4MissedWeeks);
            kony.print("weeks====" + weeksRemain.length);
            kony.print("weeksCompleted====" + weeksCompleted);
            kony.print("missedWeek====" + missedWeek);
            kony.print("missedWeek for add member====" + missedWeek);
            setAttendeceDetail(last4MissedWeeks);
            enableControl(false);
            //}
        } else if (IsFromPM == FlowForScreens.ProcessMember) {
            boProcessMember.getMissedWeekDatabyMemberId(glbMemberId, bindMissedWeekData);
        }
    }
}
//Added for MEG 4859
function returnLast4MissedWeeks(weeksData, noOfMaxMissedWeeks) {
    kony.print("weeksData length in returnLast4MissedWeeks==" + weeksData.length);
    kony.print("noOfMaxMissedWeeks in returnLast4MissedWeeks==" + noOfMaxMissedWeeks);
    kony.print("weeksData in returnLast4MissedWeeks==" + weeksData);
    if (weeksData != undefined && weeksData.length != 0 && weeksData != null) {
        if (weeksData.length > noOfMaxMissedWeeks) {
            if (noOfMaxMissedWeeks != undefined && noOfMaxMissedWeeks != null) {
                if (noOfMaxMissedWeeks == 0) // || weeksData.length == noOfMaxMissedWeeks)
                {
                    kony.print("noOfMaxMissedWeeks is 0");
                    return weeksData;
                } else {
                    return _.last(weeksData, noOfMaxMissedWeeks);
                }
            } else {
                kony.print("noOfMaxMissedWeeks is undefined/null");
                return weeksData;
            }
        } else {
            kony.print("weeksData.length is less than or equal to noOfMaxMissedWeeks");
            return weeksData;
        }
    } else {
        kony.print("There is some problem with the Weeks Data calculation");
        return weeksData;
    }
}

function checkforMissedWeekAttendaceType(index) {
    var attendenceType = weekData[index]["txtAttendenceType"];
    kony.print("memberID=" + attendenceType.toString() + "-" + attendaceTypes[1]["lblActionItem"]);
    if (attendenceType.toString() == attendaceTypes[1]["lblActionItem"]) {
        return true;
    }
    return false;
}

function getTotalPassesused() {
    var totalPassesUsed = 0;
    for (var i = 0; i < weekData.length; i++) {
        var mData = weekData[i];
        var passType = mData["passesIndex"];
        kony.print(" passType== " + passType);
        if (parseInt(passType) > 0) {
            totalPassesUsed++;
        }
    }
    return totalPassesUsed;
}

function enableControl(enable) {
    for (var i = 0; i < popupMissedWeeks.vboxScroll.widgets().length; i++) {
        if (popupMissedWeeks["txtAttendenceType" + i]) {
            popupMissedWeeks["txtWeight" + i].setEnabled(enable);
            popupMissedWeeks["btnNoWeighIn" + i].setEnabled(enable);
            popupMissedWeeks["btnNoWeighIn" + i].skin = "btnNoWeighInSelected";
        }
    }
}
//MEG-3919 NWI not allowed for first weigh in of month for lifetime member
function changeNWIForLifetimeMissedWeeks() {
    kony.print("::MISSED NWI::changeNWIForLifetimeMissedWeeks");
    var MissedNWIArray = [];
    //Add Start Date By Default - in add flow and LastWeign In Date for Missed Week
    var dateToPush;
    if (IsAddIndividual == FlowForScreens.AddIndividual) dateToPush = frmAddIndividulaMember.lblStartDateInfo.text;
    else if (IsFromPM == FlowForScreens.ProcessMember) dateToPush = lastWeighDate;
    MissedNWIArray.push({
        "Date": dateToPush,
        "Record": -1,
        "isNWIAllowed": false
    });
    for (var i = 0; i < popupMissedWeeks.vboxScroll.widgets().length; i++) {
        if (popupMissedWeeks["txtAttendenceType" + i].text == kony.i18n.getLocalizedString("strAttendOtherMeeting")) {
            //All these records have Weight Enabled
            kony.print("::MISSED NWI::txtAttendenceType i=" + i);
            //Get the date for that record
            var selectedDate = popupMissedWeeks["lblDate" + i].text;
            kony.print("::MISSED NWI::selectedDate=" + selectedDate);
            //Populate the array with default NWI true to all
            MissedNWIArray.push({
                "Date": selectedDate,
                "Record": i,
                "isNWIAllowed": true
            });
        }
    }
    kony.print("::MISSED NWI::MissedNWIArray=" + JSON.stringify(MissedNWIArray));
    //MissedNWIArray = _.each(function(d){d.isNWIAllowed = true;});
    var sortedDates = _.sortBy(MissedNWIArray, function(d) {
        return new Date(d.Date);
    });
    var result = [],
        sorted1 = sortedDates;
    kony.print("::MISSED NWI:: sorted1=" + JSON.stringify(sorted1));
    _.each(sortedDates, function(d) {
        if (d.Record >= 0) NWIButtonSet(true, d.Record);
        var date = new Date(d.Date);
        var monthrecords = _.filter(sorted1, function(dd) {
            return new Date(dd.Date).getMonth() == date.getMonth() && new Date(dd.Date).getFullYear() == date.getFullYear();
        });
        if (monthrecords.length > 0) {
            monthrecords[0].isNWIAllowed = false;
            if (monthrecords[0].Record >= 0) {
                //-1 is for Start Date
                NWIButtonSet(false, monthrecords[0].Record);
                popupMissedWeeks["txtWeight" + monthrecords[0].Record].setEnabled(true);
            }
            result.push(monthrecords);
            sorted1 = _.difference(sorted1, monthrecords);
        }
        kony.print("::MISSED NWI:: monthrecords=" + JSON.stringify(monthrecords));
        kony.print("::MISSED NWI:: monthrecords Loop sorted1==" + JSON.stringify(sorted1));
    });
    var finalObj = _.flatten(result);
    kony.print("::MISSED NWI::  After Change data finalObj= " + JSON.stringify(finalObj));
    var NWIRecords = _.filter(finalObj, function(a) {
        return a.isNWIAllowed;
    })
}

function NWIButtonSet(enable, i) {
    if (enable) {
        popupMissedWeeks["txtWeight" + i].setEnabled(true);
        popupMissedWeeks["btnNoWeighIn" + i].setEnabled(true);
        popupMissedWeeks["btnNoWeighIn" + i].skin = "btnwwtxtSearchLocation";
    } else {
        popupMissedWeeks["txtWeight" + i].setEnabled(false);
        popupMissedWeeks["btnNoWeighIn" + i].setEnabled(false);
        popupMissedWeeks["btnNoWeighIn" + i].skin = "btnNoWeighInSelected";
    }
}

function onSelectRowForActions() {
    var selectedOptIndex = popupActionsForAttendence.segActions.selectedIndex[1];
    var selectedOpt = popupActionsForAttendence.segActions.selectedItems[0]["lblActionItem"];
    kony.print("selectedOptIndex = " + selectedOptIndex + " <<-->> selectedOpt = " + selectedOpt);
    var selIndex = currentIndex; //parseInt(popupMissedWeeks.segMissedWeekData.selectedItems[0]["rowIndex"]);
    kony.print("selIndex = " + selIndex);
    //Empty the weight Field whenevr changing anything, except date
    if (optNum != 1) popupMissedWeeks["txtWeight" + selIndex].text = "";
    kony.print("::onSelectRowForActions:: optNum= " + optNum);
    if (optNum == 1) {
        //** MEG 6386
        var dateArray = selectedOpt.split(' ');
        kony.print(dateArray[0] + ' ' + getMonthsValue(dateArray[1]) + ' ' + dateArray[2]);
        selectedOpt = dateArray[0] + ' ' + getMonthsValue(dateArray[1]) + ' ' + dateArray[2];
        var selDate = new Date(selectedOpt);
        kony.print("***** selDate " + selDate);
        if (kony.i18n.getLocalizedString("strDisplayDateFormat") == 'yyyy/mm/dd') {
            weekData[selIndex]["lblDate"] = selDate.getFullYear() + "/" + (parseInt(selDate.getMonth()) + 1) + "/" + selDate.getDate();
        } else {
            weekData[selIndex]["lblDate"] = (parseInt(selDate.getMonth()) + 1) + "/" + selDate.getDate() + "/" + selDate.getFullYear();
        }
        //** End 
        popupMissedWeeks["lblDate" + selIndex].text = weekData[selIndex]["lblDate"];
        //MEG-3919 Change NWI option based on Weight for that month - Lifetime member
        if ((IsAddIndividual == FlowForScreens.AddIndividual && glbSelectMemType == MemberTypeEnum["LifeTime"]) || (IsFromPM == FlowForScreens.ProcessMember && glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase())) {
            changeNWIForLifetimeMissedWeeks();
        }
    } else if (optNum == 2) {
        weekData[selIndex]["txtAttendenceType"] = selectedOpt;
        popupMissedWeeks["txtAttendenceType" + selIndex].text = weekData[selIndex]["txtAttendenceType"];
        if (selectedOpt.toString() == attendaceTypes[1]["lblActionItem"]) {
            weekData[selIndex]["txtPasses"] = passTypes[0]["lblActionItem"];
            popupMissedWeeks["txtPasses" + selIndex].text = weekData[selIndex]["txtPasses"];
        } else {
            weekData[selIndex]["txtPasses"] = "None";
            popupMissedWeeks["txtPasses" + selIndex].text = weekData[selIndex]["txtPasses"];
        }
        weekData[selIndex]["attendenceIndex"] = popupActionsForAttendence.segActions.selectedIndex[1];
        enableControl(false);
        if (popupActionsForAttendence.segActions.selectedIndex[1] == 2) {
            //MEG-3919
            //On Changing the Type Clear the Weight Text
            popupMissedWeeks["txtWeight" + selIndex].setEnabled(true);
            popupMissedWeeks["btnNoWeighIn" + selIndex].setEnabled(true);
            popupMissedWeeks["btnNoWeighIn" + selIndex].skin = "btnwwtxtSearchLocation";
        }
        if (popupActionsForAttendence.segActions.selectedIndex[1] == 1) {
            if (popupMissedWeeks["txtPasses" + selIndex].text != kony.i18n.getLocalizedString("strMissedWeekCoupan")) {
                weekData[selIndex]["passesIndex"] = 0;
            }
        } else {
            weekData[selIndex]["passesIndex"] = 0;
        }
        if ((IsAddIndividual == FlowForScreens.AddIndividual && glbSelectMemType == MemberTypeEnum["LifeTime"]) || (IsFromPM == FlowForScreens.ProcessMember && glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase())) {
            changeNWIForLifetimeMissedWeeks();
        }
    } else if (optNum == 3) {
        if (getTotalPassesused() == userMissedWeekPass && selectedOptIndex == 1 && userMissedWeekPass > 0) {
            popupActionsForAttendence.dismiss();
            alertForMessages(kony.i18n.getLocalizedString("strMsgPassesAvailable"));
        } else if (userMissedWeekPass == 0 && selectedOptIndex == 1) {
            popupActionsForAttendence.dismiss();
            alertForMessages(kony.i18n.getLocalizedString("strMsgPassesAvailable"));
        } else {
            weekData[selIndex]["txtPasses"] = selectedOpt;
            popupMissedWeeks["txtPasses" + selIndex].text = weekData[selIndex]["txtPasses"];
            weekData[selIndex]["passesIndex"] = popupActionsForAttendence.segActions.selectedIndex[1];
            kony.print("selectedOpt==" + selectedOpt);
            kony.print("passTypes[1]==" + passTypes[1]["lblActionItem"]);
        }
    }
    popupActionsForAttendence.dismiss();
}

function getDates(d1, d2) {
    var oneDay = 24 * 3600 * 1000;
    for (var d = [], ms = d1 * 1, last = d2 * 1; ms < last; ms += oneDay) {
        d.push(new Date(ms));
    }
    return d;
}
var passesused = 0;

function bindMissedWeekData(response) {
    if (response.length > 0) {
        passesused = 0;
        v = response[0];
        var weeks = returnWeeksDates(kony.sync.getString(v.LastWeightInDate));
        if (kony.sync.getString(v.ReedeemedPasses) == null || kony.sync.getString(v.ReedeemedPasses) == '' || kony.sync.getString(v.ReedeemedPasses) == "" || kony.sync.getString(v.ReedeemedPasses) == undefined) {
            passesused = 0;
        } else {
            passesused = parseInt(kony.sync.getString(v.ReedeemedPasses));
        }
        kony.print("v.LastWeightInDate====" + v.LastWeightInDate);
        kony.print("checkConsecutiveMonth()====" + checkConsecutiveMonth(v.LastWeightInDate));
        if (checkConsecutiveMonth(v.LastWeightInDate) && v.MemberType.toUpperCase() == "LIFETIME") {
            missedWeek = 0;
        } else {
            missedWeek = weeks.length;
        }
        kony.print("missedWeek for process member====" + missedWeek);
        //	if(isMissedWeekPopupShowed) {
        var last4MissedWeeks = returnLast4MissedWeeks(weeks, 4);
        kony.print("last4MissedWeeks length====" + last4MissedWeeks.length);
        kony.print("last4MissedWeeks====" + last4MissedWeeks);
        //Commented old and Added new for MEG 4859
        setAttendeceDetail(last4MissedWeeks);
        //setAttendeceDetail(weeks);
        enableControl(false);
        //}
    }
}

function clearSegment() {
    var controlArray = popupMissedWeeks.vboxScroll.widgets();
    kony.print("in clearSegment" + JSON.stringify(controlArray));
    for (var i = 0; i < controlArray.length; i++); {
        kony.print("in clearSegment loop");
        popupMissedWeeks.vboxScroll.removeAt(i);
    }
}

function setAttendeceDetail(missedDates) {
    var conHeight = 15;
    clearSegment();
    for (var i = 0; i < missedDates.length; i++) {
        kony.print("lblActionItem=" + attendaceTypes[0]["lblActionItem"]);
        var newObj = {};
        //** MEG 6386 cahnge date display frmt for FRCA
        if (kony.i18n.getLocalizedString("strDisplayDateFormat") == 'yyyy/mm/dd') {
            newObj["lblDate"] = missedDates[i].getFullYear() + "/" + (parseInt(missedDates[i].getMonth()) + 1) + "/" + missedDates[i].getDate();
            newObj["startDate"] = missedDates[i].getFullYear() + "/" + (parseInt(missedDates[i].getMonth()) + 1) + "/" + missedDates[i].getDate();
        } else {
            newObj["lblDate"] = (parseInt(missedDates[i].getMonth()) + 1) + "/" + missedDates[i].getDate() + "/" + missedDates[i].getFullYear();
            newObj["startDate"] = (parseInt(missedDates[i].getMonth()) + 1) + "/" + missedDates[i].getDate() + "/" + missedDates[i].getFullYear();
        }
        //** End
        newObj["txtAttendenceType"] = attendaceTypes[0]["lblActionItem"];
        newObj["txtPasses"] = getLocalizedString("strNone");
        newObj["txtWeight"] = "";
        newObj["attendenceIndex"] = 0;
        newObj["passesIndex"] = 0;
        weekData.push(newObj);
        var row = createTableRowAtIndex(i, newObj);
        popupMissedWeeks.vboxScroll.addAt(row, i);
        if (conHeight <= 50) {
            conHeight = conHeight + 5;
        }
    }
    kony.print("weekData stringyfy==" + JSON.stringify(weekData));
    popupMissedWeeks.containerHeight = conHeight;
    kony.print("weekData length==" + weekData.length);
}

function onDoneTxtweight() {
    var index = getIndexFromID(this.id);
    currentIndex = index;
    var weightTxt = popupMissedWeeks["txtWeight" + index].text;
    valid = new validationcls();
    var txtWeigh = com.es.weighincalculations.RoundWeight(weightTxt);
    var result = valid.validateWeight(txtWeigh).isValid();
    if (result) {
        //weekData[index]["txtWeight"] = popupMissedWeeks["txtWeight" + index].text;
        txtWeigh = (txtWeigh.toString().length > 0) ? parseFloat(txtWeigh).toFixed(1) : ""; // MEGCA-282
        weekData[index]["txtWeight"] = txtWeigh;
        popupMissedWeeks["txtWeight" + index].text = txtWeigh;
    } else {
        popupMissedWeeks["txtWeight" + index].text = '';
    }
}

function displaySortedData() {
    for (var i = 0; i < weekData.length; i++) {
        var row = createTableRowAtIndex(i, weekData[i]);
        popupMissedWeeks.vboxScroll.removeAt(i);
        popupMissedWeeks.vboxScroll.addAt(row, i);
    }
    enableControl(false);
}

function getIndexFromID(idStr) {
    var selectedIndex = (idStr).replace(/\D+/, '');
    return selectedIndex;
}

function onClickNWIForMissedWeek() {
    var index = getIndexFromID(this.id);
    currentIndex = index;
    var txtWeight = popupMissedWeeks["txtWeight" + index];
    txtWeight.text = getLocalizedString("strNWI");
    weekData[index]["txtWeight"] = getLocalizedString("strNWI");
}
var sortFlag = true;

function eventOnClickDateSortImg() {
    if (weekData != null && weekData.length > 0) {
        sortFlag = !sortFlag;
        if (sortFlag == true) {
            popupMissedWeeks.imgSortHeader.src = "icn_sortby.png";
            weekData.sort(function(a, b) {
                var dateA = new Date(a.lblDate),
                    dateB = new Date(b.lblDate)
                return dateA - dateB //sort by date ascending
            });
            // popupMissedWeeks.segMissedWeekData.data=obj;
        } else {
            popupMissedWeeks.imgSortHeader.src = "icn_sortby_down.png";
            weekData.sort(function(a, b) {
                var dateA = new Date(a.lblDate),
                    dateB = new Date(b.lblDate)
                return dateB - dateA //sort by date descending
            });
            // popupMissedWeeks.segMissedWeekData.data=obj;
        }
        displaySortedData();
    }
}

function changeNWIButtonWeighInScreen() {
    kony.print("::::changeNWIButtonWeighInScreen MissedWeekWeightData=" + JSON.stringify(MissedWeekWeightData));
    var data = JSON.parse(JSON.stringify(MissedWeekWeightData));
    //var monthrecords = _.find(data, function(dd){ return today.getMonth() && today.getFullYear();});
    var dates = [];
    if (MissedWeekWeightData.length > 0) {
        dates = _.map(data, function(w) {
            return new Date(w.WeighInDate);
        });
    }
    //Add Start Date
    if (IsAddIndividual == FlowForScreens.AddIndividual) dates.push(new Date(frmAddIndividulaMember.lblStartDateInfo.text));
    else if (IsFromPM == FlowForScreens.ProcessMember) dates.push(new Date(lastWeighDate));
    kony.print("::::sameMonthLifetimeAddWeighIn dates=" + JSON.stringify(dates));
    var matches = _.filter(dates, function(d) {
        return (d.getMonth() == new Date().getMonth()) && (d.getFullYear() == new Date().getFullYear());
    });
    kony.print("::::sameMonthLifetimeAddWeighIn matches=" + JSON.stringify(matches));
    if (checkValidString(matches)) {
        //There are one or more records for the given month
        var minDate = _.min(matches, function(d) {
            return d;
        });
        if (new Date().setHours(0, 0, 0, 0) <= minDate.setHours(0, 0, 0, 0)) {
            //today is less than the minimum date in segment - so NWI not allowed 
            frmEnrollWeighMember.vboxNoWeighIn.setEnabled(false);
            frmEnrollWeighMember.imgNoWeighIn.src = "noweighin.png";
            glbFormName.vboxNoWeighIn.setEnabled(false);
            glbFormName.imgNoWeighIn.src = "noweighin.png";
        } else {
            //Weigh in Date is greater than minimum date - Allowed
            frmEnrollWeighMember.vboxNoWeighIn.setEnabled(true);
            frmEnrollWeighMember.imgNoWeighIn.src = "noweighin_disable.png";
            glbFormName.vboxNoWeighIn.setEnabled(true);
            glbFormName.imgNoWeighIn.src = "noweighin_disable.png";
        }
    } else {
        frmEnrollWeighMember.vboxNoWeighIn.setEnabled(true);
        frmEnrollWeighMember.imgNoWeighIn.src = "noweighin_disable.png";
        glbFormName.vboxNoWeighIn.setEnabled(true);
        glbFormName.imgNoWeighIn.src = "noweighin_disable.png";
    }
}

function onDoneMissedWeek() {
    MissedWeekWeightData = [];
    try {
        boMemberProfile.getMaxWeekNumber(glbMemberId, function(maxWeekNumber) {
            var MissedWeekDataObj = weekData; //popupMissedWeeks.segMissedWeekData.data;
            kony.print("popupMissedWeeks.segMissedWeekData.data :::: " + JSON.stringify(weekData));
            var weekNo = maxWeekNumber;
            MissedWeekDataObj.sort(function(a, b) {
                var dateA = new Date(a.lblDate),
                    dateB = new Date(b.lblDate)
                return dateA - dateB //sort by date ascending
            });
            //	kony.print("Sorted popupMissedWeeks.segMissedWeekData.data :::: "  + JSON.stringify(popupMissedWeeks.segMissedWeekData.data));
            var segMisLen = weekData.length; //popupMissedWeeks.segMissedWeekData.data.length;
            kony.print("popupMissedWeeks.segMissedWeekData.data.length == " + segMisLen);
            var lastWeight = 0.0;
            if (IsAddIndividual == FlowForScreens.AddIndividual) {
                lastWeight = parseFloat(frmAddIndividulaMember.txtStartWeight.text);
                var PickerHeightSelectedKeys = popupHeight.pckrSelectHeight.selectedKeys;
                //kony.print("PickerHeightSelectedKeys----->>"+PickerHeightSelectedKeys);
                var heightInMeters = com.es.weighincalculations.ConvertHeight(PickerHeightSelectedKeys);
                kony.print("heightInMeters in Missed week Flow----->>" + heightInMeters);
            } else if (IsFromPM == FlowForScreens.ProcessMember) {
                if (parseFloat(WeightValueFromDB) > 0) {
                    lastWeight = WeightValueFromDB;
                } else {
                    lastWeight = gblStartWeightPM;
                }
                var heightInMeters = com.es.weighincalculations.ConvertHeight_Inches_To_Meters(gblHeightPM);
                gendervalue = gblGenderPM;
            }
            for (var i = 0; i < segMisLen; i++) {
                var mData = MissedWeekDataObj[i];
                var mType = mData["attendenceIndex"];
                kony.print(" mType== " + mType);
                var passType = mData["passesIndex"];
                kony.print(" passType== " + passType);
                if (parseInt(mType) > 0) // && parseInt(mType)!=2)
                {
                    missedWeek--;
                }
                if (parseInt(passType) > 0) {
                    ReedeemedPasses++;
                }
                if (mType == "2" || mType == 2) {
                    kony.print(" weight to be inserted into local db for missed weeks::: ");
                    var cWeight = mData["txtWeight"];
                    kony.print(" cWeight== " + cWeight);
                    if (cWeight != getLocalizedString("strNWI")) {
                        if (cWeight == "0" || isNaN(cWeight) || cWeight == "") {
                            alertForMessages(kony.i18n.getLocalizedString("strMsgValidWeight"));
                            return;
                        }
                    }
                    var createWeightDetailsOnline = {};
                    var wLoss = 0.0;
                    if (cWeight == getLocalizedString("strNWI")) {
                        createWeightDetailsOnline.Weight = parseFloat(lastWeight);
                        createWeightDetailsOnline.NoWeighIn = "true";
                    } else {
                        wLoss = parseFloat(lastWeight) - parseFloat(cWeight);
                        createWeightDetailsOnline.Weight = parseFloat(cWeight);
                        createWeightDetailsOnline.NoWeighIn = "false";
                        lastWeight = cWeight;
                    }
                    var roundWeight = com.es.weighincalculations.RoundWeight(createWeightDetailsOnline.Weight);
                    roundWeight = (roundWeight.toString().length > 0) ? parseFloat(roundWeight).toFixed(1) : "";
                    var weightInKG = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(parseFloat(roundWeight));
                    kony.print("agevalue -- " + agevalue + "  heightInMeters -- " + heightInMeters + "   gendervalue -- " + gendervalue + "  weightInKG --  " + weightInKG + "   weekNo -- " + weekNo);
                    //Roshni var TotalDPT = com.es.weighincalculations.CalculateDPT(agevalue, heightInMeters, weightInKG, gendervalue);
                    var TotalDPT = com.es.weighincalculations.CalculateStatistics("DPT", weightInKG, heightInMeters, agevalue, gendervalue);
                    var WPA = com.es.weighincalculations.CalculateStatistics("WPA", weightInKG, heightInMeters, agevalue, gendervalue);
                    //alert("1. The total WPA is.  "+ JSON.stringify(WPA));
                    kony.print("1. The total WPA is.  " + JSON.stringify(WPA));
                    //var createWeightDetailsOnline = new com.kony.WeightWatchers.MemberSyncScope.WeighDetails();
                    createWeightDetailsOnline.WeighInDate = supportTime(mData["lblDate"], "", "yyyy-mm-ddTHH:NN:SS");
                    createWeightDetailsOnline.DailyPtTarget = parseInt(TotalDPT);
                    createWeightDetailsOnline.WeeklyPointsAllowance = parseInt(WPA);
                    createWeightDetailsOnline.EmpID = glbEmployeeId;
                    createWeightDetailsOnline.IsAtndgMeeting = "true";
                    createWeightDetailsOnline.LocationID = glbLocationID;
                    createWeightDetailsOnline.ManualWeighIn = "true";
                    createWeightDetailsOnline.MeetingDate = glbMeetingDate; //supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"); //Ami add
                    createWeightDetailsOnline.MtngOccrID = parseInt(checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum);
                    createWeightDetailsOnline.WeekNumber = parseInt(weekNo);
                    //createWeightDetailsOnline.MemberID = glbMemberId;
                    //Ami add
                    if (IsAddIndividual == FlowForScreens.AddIndividual) {
                        createWeightDetailsOnline.SessionNumber = 1;
                    } else if (IsFromPM == FlowForScreens.ProcessMember) {
                        createWeightDetailsOnline.SessionNumber = glbSelectedMemberSessionNumber;
                        createWeightDetailsOnline.MemberID = glbMemberId;
                    }
                    //Ami add
                    createWeightDetailsOnline.WeightLoss = parseFloat(wLoss);
                    weekNo++;
                    MissedWeekWeightData.push(createWeightDetailsOnline);
                }
            }
            MissWeekPasses = parseInt((userMissedWeekPass - ReedeemedPasses));
            ReedeemedPasses = ReedeemedPasses + passesused;
            kony.print("missedWeek=" + missedWeek);
            kony.print("ReedeemedPasses=" + ReedeemedPasses);
            kony.print("userMissedWeekPass=" + userMissedWeekPass);
            kony.print("::MISSED::MissedWeekWeightData= 00" + JSON.stringify(MissedWeekWeightData));
            kony.print("MissedWeekWeightData.length is in missed week add : " + MissedWeekWeightData.length);
            //MEG-3919 Lifetime member - NWI not allwed for first weight in month
            if ((IsAddIndividual == FlowForScreens.AddIndividual && glbSelectMemType == MemberTypeEnum["LifeTime"]) || (IsFromPM == FlowForScreens.ProcessMember && glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase())) {
                changeNWIButtonWeighInScreen();
            }
            //Added by Praveen for MEG-2925
            if (IsFromPM == FlowForScreens.ProcessMember) {
                if (MissedWeekWeightData.length > 0) {
                    kony.print("::MISSED::MissedWeekWeightData = > 0 " + JSON.stringify(MissedWeekWeightData));
                    var weightdataArr = JSON.parse(JSON.stringify(MissedWeekWeightData));
                    var startwt = gblStartWeightPM;
                    var goalwt = frmProcessMember.lblGoalWeightInfo.text;
                    kony.print("::PK-Missedweek::startwt--" + startwt + "---goalwt---" + goalwt + "---weightdataArr---" + JSON.stringify(weightdataArr));
                    boMemberMilestone.getMasterMilestones(toGetAchievedMilestoneForBatchAddAndAdd, weightdataArr, startwt, goalwt, false, false);
                }
            } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
                //Added to Fix WWMP-70 - milestone not displaying for current week in CheckedIn List for add members when entering missed weeks entry
                if (MissedWeekWeightData.length > 0) {
                    var startwt = frmAddIndividulaMember.txtStartWeight.text;
                    var goalwt = frmAddIndividulaMember.txtGoalWeight.text;
                    var weightData = [{
                        "Weight": frmAddIndividulaMember.txtStartWeight.text,
                        "NoWeighIn": "false",
                        "WeighInDate": supportTime(frmAddIndividulaMember.lblStartDateInfo.text, "", "yyyy-mm-ddTHH:NN:SS")
                    }, {
                        "Weight": frmEnrollWeighMember.txtWeight.text,
                        "NoWeighIn": "false",
                        "WeighInDate": supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS")
                    }]
                    weightData = _.union(weightData, MissedWeekWeightData);
                    boMemberMilestone.getMasterMilestones(toGetAchievedMilestoneForBatchAddAndAdd, weightData, startwt, goalwt, false, true);
                }
            }
            kony.print("::MISSED::MissedWeekWeightData 33=" + JSON.stringify(MissedWeekWeightData));
            displayPersonalGoalMessage();
            popupMissedWeeks.dismiss();
        });
    } catch (e) {
        // todo: handle exception
    }
}
//Added for 4513
function displayPersonalGoalMessage() {
    if (checkAppSettingEnable(Settings["PG"])) {
        kony.print("SJ--->>>In displayPersonalGoalMessage");
        //Checking if missed week data is available
        kony.print("SJ--->>>MissedWeekWeightData length : " + MissedWeekWeightData.length);
        if (IsFromPM == FlowForScreens.ProcessMember) {
            frmProcessMember.lblPersonalGoalWeight.text = checkValidString(glbPersonalGoalWeight) ? "" + glbPersonalGoalWeight + " " + UnitText : "";
        }
        if (MissedWeekWeightData.length > 0) {
            kony.print("SJ--->>>MissedWeekWeightData.length > 0");
            var personalGoalWeight = popupChangePersonalGoal.txtPersonalGoalWeight.text;
            kony.print("SJ--->>>personalGoalWeight :" + personalGoalWeight);
            isPersonalGoalWeight = true;
            var data;
            if (personalGoalDate == null) {
                data = _.sortBy(MissedWeekWeightData, function(d) {
                    return (new Date(d.WeighInDate).setHours(0, 0, 0));
                });
            } else {
                data = _.sortBy(MissedWeekWeightData, function(d) {
                    return (new Date(d.WeighInDate).setHours(0, 0, 0) >= new Date(personalGoalDate).setHours(0, 0, 0));
                });
            }
            kony.print("MissedWeekWeightData Sorted Data length : " + data.length);
            if (data.length > 4) {
                isDisplayPersonalGoalAlert = true;
            } else if (data.length == 3) {
                isDisplayPersonalGoalAlert = true;
            } else {
                isDisplayPersonalGoalAlert = false;
            }
            kony.print("SJ--->>>isDisplayPersonalGoalAlert :" + isDisplayPersonalGoalAlert);
            if (isDisplayPersonalGoalAlert && !isDisplayPersonalGoalAlertOnce) {
                if (personalGoalDate == null) showPersonalGoalAlert("strPersonalGoalAlert1stTime");
                else showPersonalGoalAlert("strPersonalGoalAlert4thWeek");
            }
        } else {
            kony.print("SJ--->>> Process Flow");
            boEnrollMember.checkPersonalGoalWeightAvailability();
            if (IsEnrollMember != FlowForScreens.Enroll && IsReEnrollScreen != FlowForScreens.ReEnroll) { //Added for MEGCA-379
                if (personalGoalDate == null) {
                    kony.print("SJ--->>> personalGoalDate null");
                    isDisplayPersonalGoalAlert = true;
                    if (isDisplayPersonalGoalAlert && !isDisplayPersonalGoalAlertOnce) {
                        showPersonalGoalAlert("strPersonalGoalAlert4thWeek");
                    }
                } else {
                    //if(isPersonalGoalWeight){
                    boEnrollMember.getWeightEntries(function(isFlag) {
                        if (isFlag) {
                            isDisplayPersonalGoalAlert = true;
                            if (isDisplayPersonalGoalAlert && !isDisplayPersonalGoalAlertOnce) {
                                showPersonalGoalAlert("strPersonalGoalAlert4thWeek");
                            }
                        }
                    });
                }
            }
            //}
        }
    }
}

function showPersonalGoalAlert(msg) {
    isDisplayPersonalGoalAlertOnce = true;
    var alertConfig = {
        message: kony.i18n.getLocalizedString(msg),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblOk"),
        alertHandler: ""
    };
    var psConfig = {};
    var myAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onDonePopupPersonalGoal() {
    var tempPersonalGoalWeight = popupChangePersonalGoal.txtPersonalGoalWeight.text;
    popupChangePersonalGoal.dismiss();
    valid = new validationcls();
    var res = valid.validatePersonalGoalWeight(tempPersonalGoalWeight).isValid();
    if (res) {
        glbPersonalGoalWeight = popupChangePersonalGoal.txtPersonalGoalWeight.text;
        if (IsFromPM == FlowForScreens.ProcessMember) frmProcessMember.lblPersonalGoalWeight.text = checkValidString(glbPersonalGoalWeight) ? "" + glbPersonalGoalWeight + " " + UnitText : "";
        else frmEnrollWeighMember.lblPersonalGoalWeight.text = checkValidString(glbPersonalGoalWeight) ? "" + glbPersonalGoalWeight + " " + UnitText : "";
    }
    popupChangePersonalGoal.txtPersonalGoalWeight.text = "";
}

function checkAttendMeetingForWeighIn() {
    var isAttending;
    if (IsFromPM == FlowForScreens.ProcessMember) {
        isAttending = (frmProcessMember.imgCheckbox1.src == "attending.png") ? true : false;
    } else {
        isAttending = (frmEnrollWeighMember.imgCheckBox.src == "attending.png") ? true : false;
    }
    kony.print("--> checkAttendMeetingForWeighIn :: isAttending =" + isAttending);
    //MEGCA-11-we are asking SP/ receptionist that 'Member is attending Meeting or not(in case is attended not ticked yet)'
    if (in_array(deviceLocale, Countries["CA"]) && isAttending == false) {
        var alertConfig = {
            message: kony.i18n.getLocalizedString("strAlertMsgIsAttendingCAN"),
            //"Did you ask the member if they were staying for the meeting? ",
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: "",
            yesLabel: kony.i18n.getLocalizedString("strLblYes"),
            // "Yes",
            noLabel: kony.i18n.getLocalizedString("strLblNo"),
            // "No",
            alertHandler: onClickAttendMeetingConfirmation
        };
        var psConfig = {};
        var meetingAttendAlert = kony.ui.Alert(alertConfig, psConfig);
    } else {
        eventonClickCheckOut() // MEG-4797 Added by Praveen
    }
}

function onClickAttendMeetingConfirmation(response) {
    if (response == true) {
        eventonClickCheckOut();
    }
}
//Added for MEGCN-14
function eventonClickAtRiskCheckBox() {
    if (IsFromPM == FlowForScreens.ProcessMember) {
        if (frmProcessMember.imgCheckbox2.src == "atrisk_disable.png") {
            frmProcessMember.imgCheckbox2.src = "atrisk.png";
            IsAtRisk = true;
        } else {
            frmProcessMember.imgCheckbox2.src = "atrisk_disable.png";
            IsAtRisk = false;
        }
    } else {
        if (frmEnrollWeighMember.imgCheckbox2.src == "atrisk_disable.png") {
            frmEnrollWeighMember.imgCheckbox2.src = "atrisk.png";
            IsAtRisk = true;
        } else {
            frmEnrollWeighMember.imgCheckbox2.src = "atrisk_disable.png";
            IsAtRisk = false;
        }
    }
}

function setIsAttendingOnPostShow_ProcessMember() {
    kony.print("--> " + deviceLocale + "==>IsAttendMeeting = " + IsAttendMeeting + "-- IsFromPM =  " + IsFromPM);
    if (in_array(deviceLocale, Countries["CA"]) && IsFromPM == FlowForScreens.ProcessMember) {
        kony.print("--> if condition ");
        if (IsAttendMeeting == false) {
            frmProcessMember.imgCheckbox1.src = "attending_disable.png";
        } else {
            frmProcessMember.imgCheckbox1.src = "attending.png";
        }
        frmProcessMember.vboxAtendingMeeting.isVisible = true;
        frmProcessMember.imgCheckbox1.isVisible = true;
    } else if (in_array(deviceLocale, Countries["CA"])) {
        kony.print("-->else ---  if condition ");
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
    }
}
//MEG-4797 show stats data in tab 
function showStatistics() {
    glbFormName.cmbStats.selectedKey = "stats";
    onclickStatisticsTabs();
}

function onclickStatisticsTabs() {
    glbFormName.hboxStats.setVisibility(false);
    glbFormName.hboxMilestone.setVisibility(false);
    glbFormName.hboxGoals.setVisibility(false);
    switch (glbFormName.cmbStats.selectedKey) {
        case "stats":
            glbFormName.hboxStats.setVisibility(true);
            break;
        case "milestones":
            glbFormName.hboxMilestone.setVisibility(true);
            break;
        case "goals":
            glbFormName.hboxGoals.setVisibility(true);
            break;
        default:
            glbFormName.hboxStats.setVisibility(true);
            break;
    }
}

function setSubScriptionInfo() {
    if (in_array(deviceLocale, Countries["US"]) && (in_array(glbFormName.lblSubType.text, [kony.i18n.getLocalizedString("strMPBuyNew"), kony.i18n.getLocalizedString("str3MPBuy"), kony.i18n.getLocalizedString("str6MPBuy"), kony.i18n.getLocalizedString("strAWSEnroll"), kony.i18n.getLocalizedString("strAWSContinue"), kony.i18n.getLocalizedString("strAWSRedeem"), kony.i18n.getLocalizedString("strAWSMaintenance"), kony.i18n.getLocalizedString("strAWSBridge")]))) {
        glbFormName.txtSubscriptionID.setEnabled(false);
        glbFormName.imgsub.isVisible = false;
        glbFormName.btnScan.setVisibility(false);
        kony.print("::IN IF condition::");
    }
}
//END MEG-4797 show stats data in tab
function closePopupChangeMemberType() {
    popupChangeMemberTypeForProcessMember.dismiss();
}