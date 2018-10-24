function getCommonMemberDataById() {
    isGoalWeightChecked = false;
    isGoalWeightReset = 0;
    boEnrollMember.getCommonMemberDataById(glbMemberId, function(res) {
        if (res != undefined && res != null) {
            kony.print("Res ===" + JSON.stringify(res));
            goalAchiveDate = kony.sync.getString(res.GoalAchDate);
            goalWeight = kony.sync.getString(res.GoalWeight);
            glbPersonalGoalWeight = kony.sync.getString(res.PersonalGoalWeight);

            if (in_array(res.MemberType.toUpperCase(),lifeTimeTypes) || isLifetimeInChangeMemberType == true) //Added by Ami - MEG-3312
            {
                kony.print("===Lifetime member====");
                isLifetime = true;
            } else {
                isLifetime = false;
                //Chirag Chauhan: MEG-1181 check membertype is Value and memberstatus is Active
                if (res.MemberType == MemberValueEnum[1] && res.MemberStatus == MemberStatusEnum[1] && res.GoalWeight > 0) {
                    isEligibleForLTInChangeMemberType = true;
                    isGoalWeightAvailable = true;
                    isMemberAcive = true;
                } else if (res.MemberStatus != MemberStatusEnum[1]) {
                    isMemberAcive = false;
                } else if (!isMemberAcive) {
                    isMemberAcive = true;
                } else if (res.GoalWeight < 1) {
                    isGoalWeightAvailable = false;
                } else {
                    isGoalWeightAvailable = false;
                    isMemberAcive = false;
                    isEligibleForLTInChangeMemberType = false;
                }
            }
        }
    })

}

function showFreshStart() {
/* var context = {         "widget": hboxProcessMember.vboxFreshStart,
                            "anchor": "top",
                            "sizetoanchorwidth": true
                        };
    popupMemberWeightHistory.setContext(context); */
    popupMemberWeightHistory.show();
}

function setGoalWeight() {
    if (frmProcessMember.lblGoalWeightInfo.text != "" || frmProcessMember.lblGoalWeightInfo.text != undefined) {
        popupGoalWeight.textareaGoalweight.text = frmProcessMember.lblGoalWeightInfo.text;
    } else {
        popupGoalWeight.textareaGoalweight.text = 0;
    }
    kony.print("in glbMemberId==" + glbMemberId);
/*  var context = {         "widget": hboxProcessMember.vboxGoalWeight,
                            "anchor": "top",
                            "sizetoanchorwidth": true
                        };
    popupGoalWeight.setContext(context); */
    popupGoalWeight.show();
}

function showMissedWeeks() {
    popupMissedWeeks.show();
}

function setStartWeight() {
/* var context = {     "widget": hboxProcessMember.vboxStartWeight,
                            "anchor": "top",
                            "sizetoanchorwidth": true
                        };
    popupChangeStartWeight.setContext(context); */
    popupChangeStartWeight.txtWeight.text = "";
  	popupChangeStartWeight.setContext(null);
    popupChangeStartWeight.show();
}

function makeLifeTimeMember() {

    if (isLifetime) {
        displayPopupAlert(kony.i18n.getLocalizedString("strMsgAlreadyLifetime"));
    } else if (!isMemberAcive) {
        displayPopupAlert(kony.i18n.getLocalizedString("strMsgLTCriteriaStatus"));
    } else if (!isGoalWeightAvailable) {
        displayPopupAlert(kony.i18n.getLocalizedString("strMsgLTCriteria"));
    } else {
/*	var context = {     "widget": hboxProcessMember.vboxMakeLifeTime,
                            "anchor": "top",
                            "sizetoanchorwidth": true
                        };
        popupChangeMemberTypeForProcessMember.setContext(context); */
        popupChangeMemberTypeForProcessMember.txtChangeMemberTypeForProcessMember.text = "";
        popupChangeMemberTypeForProcessMember.show();
    }
}

function showPersonalGoalWeight() {
    popupChangePersonalGoal.txtPersonalGoalWeight.text = (glbPersonalGoalWeight > 0) ? parseFloat(glbPersonalGoalWeight).toFixed(1) : "";
    popupChangePersonalGoal.show();
}

function setDollerPriceValue() {

    var WeighDateFormatted;
    var weightDiff = 0;
    missedWeek = (missedWeek > 0) ? missedWeek : 0;
    
    kony.print("glbIsFormPM"+glbIsFormPM);
    
    var Flow = (glbIsFormPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) ? "Attend" : "Enroll";
    
    if (glbIsFormPM == FlowForScreens.ProcessMember) {

        weightDiff = parseFloat(goalWeightSub) - parseFloat(frmProcessMember.txtAreaWeightProcess.text);
        /*weightDiff = Math.abs(weightDiff);
        if (isNaN(weightDiff)) weightDiff = 0; */
        if (isNaN(weightDiff) || weightDiff >= 0) {
            weightDiff = 0;
        } else {
            weightDiff = Math.abs(weightDiff);
        }

    } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
        weightDiff = parseFloat(frmAddIndividulaMember.txtGoalWeight.text) - parseFloat(frmEnrollWeighMember.txtWeight.text);
        if (isNaN(weightDiff) || weightDiff >= 0) {
            weightDiff = 0;
        } else {
            weightDiff = Math.abs(weightDiff);
        }
    }

    if (IsReEnrollScreen == FlowForScreens.ReEnroll) //|| IsPreRegister == FlowForScreens.PreRegistered)
    {
    	MemberType = "Value";
        
        WeighDateFormatted = formattedDate(termMemberInfo.DateOfBirth);

    }
    if (glbIsFormPM == FlowForScreens.ProcessMember) {
    	WeighDateFormatted = formattedDate(gblDOBPM);
        if (glbMembershipType.toUpperCase() == MemberValueEnum[2].toUpperCase()) //ATWORK
        {  
            MemberType = "AtWork"; //Temporary
        } else {
			if(MemberType.toLowerCase() == "lifetime"){
            	boProcessMember.getCurrentMonthGoalReachedForMember(glbMemberId, function(res){
            		if(res){
            			weightDiff =0;
            			missedWeek = 0;
            		}
            	});
            }else{
            	//processFlowForMember();
            }
        }
    }
    if (IsEnrollMember == FlowForScreens.Enroll) {
    	MemberType = "Value";
        WeighDateFormatted = frmEnrollNewMember.lblDOBInfo.text;
    }
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
    	MemberType = MemberValueEnum[glbSelectMemType];
    	kony.print("::MemberType::--"+MemberType);
        WeighDateFormatted = frmAddIndividulaMember.lblDOBInfo.text;
    }
    //Added for MEG-4893
    if (IsViewMember == FlowForScreens.ViewMember){
    	MemberType = glbMemberType;
        WeighDateFormatted = frmEditMemberProfile.lblDOBInfo.text;
    }

    getDollerPriceValue(Flow, MemberType, glbSelectSubType, WeighDateFormatted, weightDiff, missedWeek, false, false);
}

function getDollerPriceValue(Flow, membertype, selectKey, birthdate, weightDiff, missedWeekCnt, isPrepaid, isOverride) {

    kony.print("Calculating DollerPrice--" + Flow + "=== " + membertype + "=== " + selectKey + "=== " + birthdate + "=== " + missedWeekCnt + "=== " + weightDiff + "===" + isPrepaid + "==" + isOverride);

    try {

        if (membertype.toUpperCase() == "PAID") {
            membertype = "Value";
        }

        var sku = "";
        var whrCondition = "";
        var valid = new validationcls();
        //birthdate = changeDateFormate(birthdate, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
        var res = false;
        //if(IsAWSLocationEnabled() && (IsEnrollMember == FlowForScreens.Enroll || IsReEnrollScreen == FlowForScreens.ReEnroll || IsPreRegister == FlowForScreens.PreRegistered))
      	if(selectKey == "")
        	res = valid.checkForRequiredFields(membertype, "Membertype").checkForRequiredFields(Flow, "flow").validateDate(birthdate).isValid();
      	else
          	res = valid.checkForRequiredFields(membertype, "Membertype").checkForRequiredFields(selectKey, "selectKey").checkForRequiredFields(Flow, "flow").validateDate(birthdate).isValid();

      	kony.print("response valid==" + res);
        if (res && selectKey != "") {
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
            if (Subcriptions[splData[0]] == "FMP") {
                // isFromFMP = true;
                if (isSenior) {
                    var str = (Flow.toUpperCase() == 'ENROLL' || membertype.toUpperCase() == 'LIFETIME') ? "and membertype like 'Value' and Transact='" + Flow + "' and AgeGreaterThan <>64" : "and membertype like '" + membertype + "' and Transact='" + Flow + "' and AgeGreaterThan <= " + age + " and AgeGreaterThan > 0";
                    whrCondition = " where Action='Redeem-Forgot' " + str;
                } else {
                    var str = (Flow.toUpperCase() == 'ENROLL') ? "and membertype like 'Value' and Transact='" + Flow + "'" : "and membertype like '" + membertype + "' and Transact='" + Flow + "'";
                    whrCondition = " where Action='Redeem-Forgot' " + str + " and AgeGreaterThan <>64";
                }

                kony.print("whrCondition===" + whrCondition);


            } else if (in_array(Subcriptions[splData[0]],['LTC-3','LTC-6','LTC-12','MP-3','MP-6'])) {
                whrCondition = "where Action='" + Actions[splData[1]] + "' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "'";           	
            } else if (Subcriptions[splData[0]] == "PREPAID") {
                whrCondition = " where Subscription like 'PREPAID' and membertype like 'LifeTime' and Action='" + Actions[splData[1]] + "' and Transact='Attend'";

            } else if (Subcriptions[splData[0]] == "AtWork") {

                whrCondition = " where Subscription like '" + Subcriptions[splData[2]] + "' and membertype like 'AtWork' and Action='" + Actions[splData[1]] + "'";

            } else if (Subcriptions[splData[0]] == "WP") {
                kony.print("20Week");
                //whrCondition = " where Action='"+Actions[splData[1]]+"'";
                whrCondition = "where Action='" + Actions[splData[1]] + "' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "' and membertype like '" + membertype + "'";
                kony.print("20Week whrCondition= " + whrCondition);

            } else {
                kony.print("::DJP::here 000");
                if (glbProgDurationForProcess == 3 && splData[1] == 2) splData[0] = "8"; // 3 Month Redeem

				if (glbProgDurationForProcess == 6 && splData[1] == 2) splData[0] = "10"; // 6 Month Redeem Added for MEG-5038 [PK]

                whrCondition = "where Action='" + Actions[splData[1]] + "' and Subscription='" + Subcriptions[splData[0]] + "' and Transact='" + Flow + "' and membertype like '" + membertype + "'";
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
	                    } else if (weightDiff <= 2 && isWeighInCalendarMonth) {
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
                kony.print("isSenior **Ami ===" + isSenior);

                    if (missedWeekCnt > 0) {
                    	var missedSku = "";
                    	// MEG-4913 - Added new condition that if member is senior then it will have always 480 SKU for any missedweek greter than 0 - Sunil
                    	var courtesyTitle = (isSenior == true) ? "srwkcourtesy" : "wkcourtesy";
                    	                kony.print("courtesyTitle **Ami ===" + courtesyTitle);
                    	
						if (in_array(deviceLocale,Countries["CA"])) {
						     missedSku = (missedWeekCnt > 1) ? MissedWeekSku["CACOURTESY"]: MissedWeekSku["CA1WEEK"];
					    }else {
					                          	                kony.print("MissedWeekSku[courtesyTitle] **Ami ===" + MissedWeekSku[courtesyTitle]);
					      
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
						kony.print("====>>>"+in_array(deviceLocale,Countries["CA"]));
                        var regSku = ""
                        if (in_array(deviceLocale,Countries["CA"])) {
						    regSku = MissedWeekSku["CACOURTESY"];
					    }else {
					        regSku = MissedWeekSku[courtesyTitle];
					    }
                         
                        kony.print("regSku val===>" + regSku);
                        isFromMissedWeek = true;
                        kony.print("checkout Compare missedSkuPrice >= parseInt(regSkuPrice)===" + missedSkuPrice + "==" + regSkuPrice);
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
            }
            if(IsAWSLocationEnabled() && !in_array(selectKey,['3-2-2','3-1-1'])){
            	getSkuQueryForAWS(splData, membertype,true,20);
            }
            else{
            	boEnrollMember.getDollerPriceValue(whrCondition,Subcriptions[splData[0]],Actions[splData[1]], function(priceval) {
	                kony.print("price :-- " + priceval);
	                if (priceval == null || priceval == undefined) {
	                    priceval = 0;
	                }
	                glbFormName.lblFeesPayble.text = addDollar(priceval.toFixed(2));
	            });
            }
            
            

        }


    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }

}
