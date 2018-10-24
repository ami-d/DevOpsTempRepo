var IsStartDate = false;
var IsEnrollMember = "";
var valid = new validationcls();
var validateEmail = false;
var demoEmail = "";

function eventinitDOBPopUp(FormBirthdate) {
    var birthdate = "";
    if (FormBirthdate == "") {
        birthdate = new Date("01/01/1975");
    } else {
        birthdate = new Date(FormBirthdate);
    }
    		
    var birthday = birthdate.getDate();
    var birthmon = birthdate.getMonth() + 1;
    var birthyear = birthdate.getFullYear();

    var curdate = new Date();
    curday = curdate.getDate();
    curmon = curdate.getMonth() + 1;
    curyear = curdate.getFullYear();

    popupDateOfBirth.calEnrollMemberDOB.clear();
    popupDateOfBirth.calEnrollMemberDOB.validStartDate = [01, 01, 1900];
    popupDateOfBirth.calEnrollMemberDOB.validEndDate = [curday, curmon, curyear];
    popupDateOfBirth.calEnrollMemberDOB.date = [birthday, birthmon, birthyear];
}

function eventinitExpirationDatePopUp() {
    fortnightAway = new Date();
    date = fortnightAway.getDate();
    mon = fortnightAway.getMonth() + 1;
    year = fortnightAway.getFullYear();
    popupDateOfBirth.calEnrollMemberDOB.clear();
    popupDateOfBirth.calEnrollMemberDOB.validStartDate = [date, mon, year];
    popupDateOfBirth.calEnrollMemberDOB.validEndDate = [1, 12, 2050];
    popupDateOfBirth.calEnrollMemberDOB.date = null;
}

function eventinitDurationPopUp() {
    popupDuration.calDuration.clear();
    fortnightAway = new Date();
    date = fortnightAway.getDate();
    mon = fortnightAway.getMonth() + 1;
    year = fortnightAway.getFullYear();
    popupDateOfBirth.calEnrollMemberDOB.clear();
    popupDuration.calDuration.validStartDate = [date, mon, year];
    popupDuration.calDuration.validEndDate = [1, 12, 2050];
}

function eventPreShowEnrollNewMember() {
    ClearVariables();
    IsEnrollMember = FlowForScreens.Enroll;
}

function eventonSlideswitchOffers() {
    if (IsEnrollMember == FlowForScreens.Enroll) {
        if (frmEnrollNewMember.switchOffers.selectedIndex == 0) {
            validateEmail = true;
            frmEnrollNewMember.emailAsterisk.isVisible = true;
            kony.print("validateEmail Enroll---->>>>" + validateEmail);
        } else {
            validateEmail = false;
            frmEnrollNewMember.emailAsterisk.isVisible = false;
            kony.print("validateEmail Enroll---->>>>" + validateEmail);
        }
    }
    if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        if (frmEnrollReturningMember.switchOffers.selectedIndex == 0) {
            validateEmail = true;
            frmEnrollReturningMember.imgEmailAsk.isVisible = true;
            kony.print("validateEmail Re Enroll---->>>>" + validateEmail);
        } else {
            validateEmail = false;
            frmEnrollReturningMember.imgEmailAsk.isVisible = false;
            kony.print("validateEmail Re Enroll---->>>>" + validateEmail);
        }
    }
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
        if (frmAddIndividulaMember.switchOffers.selectedIndex == 0) {
            validateEmail = true;
            frmAddIndividulaMember.emailAsterisk.isVisible = true;
            kony.print("validateEmail Add Individual---->>>>" + validateEmail);
        } else {
            validateEmail = false;
            frmAddIndividulaMember.emailAsterisk.isVisible = false;
            kony.print("validateEmail Add Individual---->>>>" + validateEmail);
        }
    }
}

function eventonClickhboxHeightSection() {
    if (deviceLocale == "fr_FR") {
        popupHeight.pckrSelectHeight.masterData = heightFR;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightFR;
    } else 
    {
        popupHeight.pckrSelectHeight.masterData = heightUS;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightUS;
        
    }
    
    var context = {
        "widget": frmEnrollNewMember.hboxHeight,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupHeight.setContext(context);
    popupHeight.show();
}

function eventonClickvboxDOBSection() {
    
    popupDateOfBirth.calEnrollMemberDOB.clear();
    var context1 = {
        "widget": frmEnrollNewMember.hboxDOBSection1,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupDateOfBirth.setContext(context1);
    if (frmEnrollNewMember.lblDOBInfo.text == "") {
        eventinitDOBPopUp("");
    } else {
        eventinitDOBPopUp(frmEnrollNewMember.lblDOBInfo.text);
    }

    popupDateOfBirth.show();
}

function eventonClickvboxWeighSection() {
    try {
        if (IsReEnrollScreen == FlowForScreens.ReEnroll) 
        {
            frmEnrollWeighMember.vboxNoWeighIn.isVisible = false;

			kony.print("AD :: eventonClickvboxWeighSection frmEnrollReturningMember.lblHeightInfo.text=="+frmEnrollReturningMember.lblHeightInfo.text);
			
			if (checkValidString(frmEnrollReturningMember.lblHeightInfo.text)) {
				var hgt = (frmEnrollReturningMember.lblHeightInfo.text).split(" ");
				var heightArr = [];
				heightArr.push(hgt[0]);
				heightArr.push(hgt[2]);
							kony.print("AD :: eventonClickvboxWeighSection heightArr=="+heightArr);
				
	            var heightinInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(com.es.weighincalculations.ConvertHeight(heightArr));
				kony.print("AD :: eventonClickvboxWeighSection HeightInFtInch=="+heightinInches);
				if(heightinInches <= 0) {
					alertForMessages(kony.i18n.getLocalizedString("strValidHeight"));
	    	 		return;
				}
				termMemberInfo.Height = heightinInches;
			}
			
			if (checkValidString(frmEnrollReturningMember.lblDOBInfo.text)) {
				termMemberInfo.DateOfBirth = supportTime(new Date(frmEnrollReturningMember.lblDOBInfo.text), "", kony.i18n.getLocalizedString("strDisplayDateFormatWithTimestamp"));//** MEG 6386
				kony.print("termMemberInfo.DateOfBirth----------------->>>>>>>>>" + termMemberInfo.DateOfBirth);
			}
			
			kony.print("AD :: eventonClickvboxWeighSection termMemberInfo.DateOfBirth=="+termMemberInfo.DateOfBirth);
			termMemberInfo.Gender = (frmEnrollReturningMember.cmbGender.selectedKey == "Female") ? "Female" : "Male";
					
            heightInMeters = com.es.weighincalculations.ConvertHeight_Inches_To_Meters(termMemberInfo.Height);
            kony.print("heightInMeters in Re Enroll Flow----->>" + heightInMeters);
            kony.print("termMemberInfo.MemberID----->>" + termMemberInfo.MemberID);
            glbMemberId = termMemberInfo.MemberID;
            kony.print("glbMemberId----->>" + glbMemberId);
            if (termMemberInfo.DateOfBirth != "") {
                var termedDOB = termMemberInfo.DateOfBirth.split("T");
                var splitedDOB = termedDOB[0].split("-");
                agevalue = com.es.weighincalculations.CalculateAge(splitedDOB[1], splitedDOB[2], splitedDOB[0]);
                
                if(agevalue < minAgeForNewMember ) {
     				alertForMessages(kony.i18n.getLocalizedString("strValidAgeAlert"));
    	 			return;
	     		}
                
       			var gender = termMemberInfo.Gender;
                setDptWpa("", "", agevalue, gender,"Enroll", function(dptVal, wpaVal) {
                    kony.print("SJ DPT:" + dptVal);
                    kony.print("SJ WPA:" + wpaVal);
                    frmEnrollWeighMember.txtDPTValue.text = dptVal;	
					frmEnrollWeighMember.lblWPAinfo.text = wpaVal;		
                });
        	}
            kony.print("agevalue from ReEnroll Flow---->>>" + agevalue);
            gendervalue = termMemberInfo.Gender;
            kony.print("gendervalue from ReEnroll Flow---->>>" + gendervalue);
            if (frmEnrollReturningMember.switchOffers.selectedIndex == 0) {
                validateEmail = true;
                kony.print("validateEmail Re Enroll---->>>>" + validateEmail);
            } else {
                validateEmail = false;
                kony.print("validateEmail Re Enroll---->>>>" + validateEmail);
            }
            valid = new validationcls();
            //Ami add -start
            var stateRes = false;
            if (IsWebsiteMember == FlowForScreens.Website) {
                stateRes = true;
                if (frmEnrollReturningMember.lblCityInfo.text != "" || frmEnrollReturningMember.lblAddr1Info.text != "" || frmEnrollReturningMember.lblAddr2Info.text != "" || frmEnrollReturningMember.lblZipInfo.text != "") {

                    if (frmEnrollReturningMember.lblStateInfo.text == "--") {
                        stateRes = valid.checkForRequiredFields("", "State").isValid(); //.validateHeight(frmEnrollNewMember.lblHeightInfo.text)
                    }
                }
            } else {
                stateRes = true;
            }
            kony.print("validateEmail Re Enroll stateRes---->>>>" + stateRes);

            //Ami add -end
            if (validateEmail && stateRes) {
                var res = valid.checkMemberID(frmEnrollReturningMember.txtRegistrationID.text, "Registration ID")
                		.checkEmail(frmEnrollReturningMember.lblEmailInfo.text)
                		.heightValidation(frmEnrollReturningMember.lblHeightInfo.text, "Height")
                		.validateDate(frmEnrollReturningMember.lblDOBInfo.text)
                		.isValid();
                if (res) {
                    checkIfMemberAlreadyExistsInDB(frmEnrollReturningMember.txtRegistrationID.text, glbMemberId, function() {
                        frmEnrollWeighMember.lblProcessMembersubHeader1.text = (termMemberInfo.FirstName).trim() + " " + (termMemberInfo.LastName).trim();
                        demoEmail = frmEnrollReturningMember.lblEmailInfo.text;
                        frmEnrollWeighMember.show();
                    });

                }
            } else {
                var res = valid.checkMemberID(frmEnrollReturningMember.txtRegistrationID.text, "Registration ID")
                		.checkEmailForNonMandatory(frmEnrollReturningMember.lblEmailInfo.text)
                		.heightValidation(frmEnrollReturningMember.lblHeightInfo.text, "Height")
                		.validateDate(frmEnrollReturningMember.lblDOBInfo.text)
                		.isValid();
                if (res) {
                    checkIfMemberAlreadyExistsInDB(frmEnrollReturningMember.txtRegistrationID.text, glbMemberId, function() {
                        frmEnrollWeighMember.lblProcessMembersubHeader1.text = (termMemberInfo.FirstName).trim() + " " + (termMemberInfo.LastName).trim();
                        demoEmail = frmEnrollReturningMember.lblEmailInfo.text;
                        frmEnrollWeighMember.show();
                    });
                }
            }
            frmEnrollWeighMember.lblProcessMembersubHeader1.text = toTitleCase(frmEnrollWeighMember.lblProcessMembersubHeader1.text);


        } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
        	glbSelectSubType = "3-2-2";
            frmEnrollWeighMember.vboxNoWeighIn.isVisible = true;


            isNWI = false;
            //changes related to MEGCN-11
            if (!(in_array(deviceLocale,Countries["CA"]))) //not in case of CA 
            {
                frmEnrollWeighMember.imgCheckBox.src = "attending.png";
                IsAttendMeeting = true;
            }
            frmEnrollWeighMember.txtWeight.setEnabled(true);
            kony.print("this is in ===>>" + IsAddIndividual + "Agevalue===>>" + agevalue);
            
            if(agevalue < minAgeForNewMember ) {
     				alertForMessages(kony.i18n.getLocalizedString("strValidAgeAlert"));
    	 			return;
	     	}
			//var checkDPTSettings = checkAppSettingEnable(Settings["DPT"]) ? true : false;
   			//kony.print("checkDPTSettings ============== IsAddIndividual"+checkDPTSettings);
   			var gender = frmAddIndividulaMember.cmbGender.selectedKey.toString();
			setDptWpa("", "", agevalue, gender,"Enroll", function(dptVal, wpaVal) {
                kony.print("SJ DPT:" + dptVal);
                kony.print("SJ WPA:" + wpaVal);
                frmEnrollWeighMember.txtDPTValue.text = dptVal;	
				frmEnrollWeighMember.lblWPAinfo.text = wpaVal;		
            });
                
            valid = new validationcls();
            kony.print("frmAddIndividulaMember.txtWeeksCompleted.text===>>>" + frmAddIndividulaMember.txtWeeksCompleted.text);

            kony.print("frmAddIndividulaMember.lblStartDateInfo.text===>>>" + frmAddIndividulaMember.lblStartDateInfo.text);

            

            //added by praveen kalal after new requirement for atwork 11OCT2014

            if (frmAddIndividulaMember.lblMemberShipInfo.text.toUpperCase() == "AT WORK") {
                var res = valid
                    .checkEnrollFirstName(frmAddIndividulaMember.txtFirstName.text, "FirstName")
                    .checkEnrollLastName(frmAddIndividulaMember.txtLastName.text, "LastName")
                    .checkEmailForNonMandatory(frmAddIndividulaMember.txtEmailID.text)
                    .validateDate(frmAddIndividulaMember.lblDOBInfo.text)
                    .validateStartDate(frmAddIndividulaMember.lblStartDateInfo.text, frmAddIndividulaMember.lblDOBInfo.text)
                    .checkForRequiredFields(frmAddIndividulaMember.lblMemberShipInfo.text, "MembershipType")
                    .heightValidation(frmAddIndividulaMember.lblHeightInfo.text, "Height")
                    .CheckWeeksCompleted(frmAddIndividulaMember.lblStartDateInfo.text, frmAddIndividulaMember.txtWeeksCompleted.text)
                    .validateWeight(frmAddIndividulaMember.txtStartWeight.text)
                    .CheckRemainingMissedWeekPasses(frmAddIndividulaMember.txtRemainingWeeks.text,1)
                    .isValid();
            } else {
                var res = valid
                    .checkEnrollFirstName(frmAddIndividulaMember.txtFirstName.text, "FirstName")
                    .checkEnrollLastName(frmAddIndividulaMember.txtLastName.text, "LastName")
                    .checkEmailForNonMandatory(frmAddIndividulaMember.txtEmailID.text)
                    .validateDate(frmAddIndividulaMember.lblDOBInfo.text)
                    .validateStartDate(frmAddIndividulaMember.lblStartDateInfo.text, frmAddIndividulaMember.lblDOBInfo.text)
                    .checkForRequiredFields(frmAddIndividulaMember.lblMemberShipInfo.text, "MembershipType")
                    .checkMemberID(frmAddIndividulaMember.txtMemberID.text, "MemberId")
                    .heightValidation(frmAddIndividulaMember.lblHeightInfo.text, "Height")
                    .CheckWeeksCompleted(frmAddIndividulaMember.lblStartDateInfo.text, frmAddIndividulaMember.txtWeeksCompleted.text)
                    .validateWeight(frmAddIndividulaMember.txtStartWeight.text)
                    .CheckRemainingMissedWeekPasses(frmAddIndividulaMember.txtRemainingWeeks.text,1)
                    .isValid();
                kony.print("Res Add individual====>>" + res);
            }

            //MEG-3919 Lifetime Member Dont Allow NWI for First Weight - Post Show Button Disable
            if (glbSelectMemType == MemberTypeEnum["LifeTime"]) {
                if (res) //WWMP-29
                    changeNWIButtonWeighInScreen();
            } else {
                frmEnrollWeighMember.imgNoWeighIn.src = "noweighin_disable.png";
                frmEnrollWeighMember.vboxNoWeighIn.setEnabled(true);
            }

            //End by praveen kalal after new requirement for atwork 11OCT2014

            //Check ID Exists	
            if (res) {
                var addmemberid = (frmAddIndividulaMember.txtMemberID.text != null && frmAddIndividulaMember.txtMemberID.text != "") ? frmAddIndividulaMember.txtMemberID.text : "0";
                checkIfMemberAlreadyExistsInDB(addmemberid, glbMemberId, function() {
                    var isGoalWeight;
                    if (frmAddIndividulaMember.lblMemberShipInfo.text == getLocalizedString("strLifetime")) {
                        if (parseFloat(frmAddIndividulaMember.txtGoalWeight.text) < 60 || parseFloat(frmAddIndividulaMember.txtGoalWeight.text) > 999.9) {
                            alertForMessages(kony.i18n.getLocalizedString("strValidGoalWeight"));
                            return false;
                        }
                        isGoalWeight = valid.validateGoalWeight(parseFloat(frmAddIndividulaMember.txtGoalWeight.text), parseFloat(frmAddIndividulaMember.txtStartWeight.text)).isValid();
                    } else if (frmAddIndividulaMember.txtGoalWeight.text != "" && frmAddIndividulaMember.txtGoalWeight.text != "0.0" && frmAddIndividulaMember.txtGoalWeight.text != "0") {
                        kony.print("frmAddIndividulaMember.txtGoalWeight.text===" + frmAddIndividulaMember.txtGoalWeight.text);
                        if (parseFloat(frmAddIndividulaMember.txtGoalWeight.text) < 60 || parseFloat(frmAddIndividulaMember.txtGoalWeight.text) > 999.9) {
                            alertForMessages(kony.i18n.getLocalizedString("strValidGoalWeight"));
                            return false;
                        }
                        isGoalWeight = valid.validateGoalWeight(parseFloat(frmAddIndividulaMember.txtGoalWeight.text), parseFloat(frmAddIndividulaMember.txtStartWeight.text)).isValid();
                    } else {
                        kony.print("===Not IN");
                        isGoalWeight = true;
                    }
                    kony.print("MemberType ===+++++++++" + frmAddIndividulaMember.lblMemberShipInfo.text);
                    if (validateEmail) {
                        //added by  Ami MEG-3875 - start
                        var resEmail = true;
                        if (frmAddIndividulaMember.txtEmailID.text == null || frmAddIndividulaMember.txtEmailID.text.trim().length <= 0) {
                            resEmail = valid.checkEmail(frmAddIndividulaMember.txtEmailID.text).isValid();
                        }

                        kony.print("res in IF---->>" + res);

                        kony.print("resEmail in IF---->>" + resEmail);
                        //added by  Ami MEG-3875 - end
                        if (res != false && resEmail != false && isGoalWeight != false) {
                            MemberType = frmAddIndividulaMember.lblMemberShipInfo.text;
                            gendervalue = frmAddIndividulaMember.cmbGender.selectedKey.toString();
                            demoEmail = frmAddIndividulaMember.txtEmailID.text;
                            frmEnrollWeighMember.show();
                        }
                    } else {
                        kony.print("res in else---->>" + res);
                        //var resWeeksCompleted=
                        if (res && isGoalWeight)
                        {
                            MemberType = frmAddIndividulaMember.lblMemberShipInfo.text;
                            kony.print("FirstName====>>>>" + frmAddIndividulaMember.txtFirstName.text);
                            kony.print("LastName====>>>>" + frmAddIndividulaMember.txtLastName.text);
                            gendervalue = frmAddIndividulaMember.cmbGender.selectedKey.toString();
                            kony.print("gendervalue for add individual flow in else---->>" + gendervalue);
                            demoEmail = frmAddIndividulaMember.txtEmailID.text;
                            frmEnrollWeighMember.show();
                        }
                    }
                    frmEnrollWeighMember.lblProcessMembersubHeader1.text = (frmAddIndividulaMember.txtFirstName.text).trim() + " " + (frmAddIndividulaMember.txtLastName.text).trim();
                    frmEnrollWeighMember.lblProcessMembersubHeader1.text = toTitleCase(frmEnrollWeighMember.lblProcessMembersubHeader1.text);
                });
				eventonDoneTextAreaWeighCalculations();
            }
        } else if (IsEnrollMember == FlowForScreens.Enroll) {
          
            frmEnrollWeighMember.vboxNoWeighIn.isVisible = false;
          
          	if(agevalue < minAgeForNewMember ) {
     				alertForMessages(kony.i18n.getLocalizedString("strValidAgeAlert"));
    	 			return;
	     	}

			//var checkDPTSettings = checkAppSettingEnable(Settings["DPT"]) ? true : false;
       		//kony.print("checkDPTSettings ==============IsEnrollMember "+checkDPTSettings);
    		var gender =frmEnrollNewMember.cmbGender.selectedKey.toString();
    		setDptWpa("", "", agevalue, gender,"Enroll", function(dptVal, wpaVal) {
                kony.print("SJ DPT:" + dptVal);
                kony.print("SJ WPA:" + wpaVal);
                frmEnrollWeighMember.txtDPTValue.text = dptVal;	
				frmEnrollWeighMember.lblWPAinfo.text = wpaVal;		
            });
        		
            valid = new validationcls();
            kony.print("HEIGHT OF ENROLL PERSON:->" + frmEnrollNewMember.lblHeightInfo.text);
            var res = valid.checkEnrollFirstName(frmEnrollNewMember.txtFirstName.text).checkEnrollLastName(frmEnrollNewMember.txtLastName.text).checkEmailForNonMandatory(frmEnrollNewMember.txtEmailID.text).heightValidation(frmEnrollNewMember.lblHeightInfo.text).validateDate(frmEnrollNewMember.lblDOBInfo.text).checkMemberID(frmEnrollNewMember.txtMemberIDInfo.text, "Memberid").isValid(); //.validateHeight(frmEnrollNewMember.lblHeightInfo.text)..Nikita Patel code

            checkIfMemberAlreadyExistsInDB(frmEnrollNewMember.txtMemberIDInfo.text, glbMemberId, function() {
                if (validateEmail) {
                    //added by  Ami MEG-3875 - start
                    var resEmail = true;
                    if (frmEnrollNewMember.txtEmailID.text == null || frmEnrollNewMember.txtEmailID.text.trim().length <= 0) {
                        resEmail = valid.checkEmail(frmEnrollNewMember.txtEmailID.text).isValid();
                    }

                    kony.print("res in IF---->>" + res);

                    kony.print("resEmail in IF---->>" + resEmail);
                    //added by  Ami MEG-3875 - end

                    if (res != false && resEmail != false) {
                        kony.print("FirstName====>>>>" + frmEnrollNewMember.txtFirstName.text);
                        kony.print("LastName====>>>>" + frmEnrollNewMember.txtLastName.text);
                        frmEnrollWeighMember.lblProcessMembersubHeader1.text = frmEnrollNewMember.txtFirstName.text + " " + frmEnrollNewMember.txtLastName.text;
                        gendervalue = frmEnrollNewMember.cmbGender.selectedKey.toString();
                        demoEmail = frmEnrollNewMember.txtEmailID.text;
                        frmEnrollWeighMember.show();
                    }
                } else {
                    kony.print("res in else---->>" + res);
                    if (res != false) 
                    {
                        kony.print("FirstName====>>>>" + frmEnrollNewMember.txtFirstName.text);
                        kony.print("LastName====>>>>" + frmEnrollNewMember.txtLastName.text);
                        frmEnrollWeighMember.lblProcessMembersubHeader1.text = (frmEnrollNewMember.txtFirstName.text).trim() + " " + (frmEnrollNewMember.txtLastName.text).trim();
                        gendervalue = frmEnrollNewMember.cmbGender.selectedKey.toString();
                        demoEmail = frmEnrollNewMember.txtEmailID.text;
                        frmEnrollWeighMember.show();
                    }
                }
                frmEnrollWeighMember.lblProcessMembersubHeader1.text = toTitleCase(frmEnrollWeighMember.lblProcessMembersubHeader1.text);

                //changes related to MEGCN-11
                if (!(in_array(deviceLocale,Countries["CA"]))) //not in case of CA 
                {
                    frmEnrollWeighMember.imgCheckBox.src = "attending.png";
                    IsAttendMeeting = true;
                }

            });
        }
    } catch (e) {
        alertForMessages("e :" + e);
    }
}

function eventonClickDoneDOBPopUp() {
    kony.print("popupDateOfBirth.calEnrollMemberDOB.date-->>" + popupDateOfBirth.calEnrollMemberDOB.date);
    var day = popupDateOfBirth.calEnrollMemberDOB.day;
    kony.print("Day---->>>" + day);
    var month = popupDateOfBirth.calEnrollMemberDOB.month;
    var year = popupDateOfBirth.calEnrollMemberDOB.year;
    var TodayDate = new Date().toString('MM/dd/yyyy');


    if (kony.application.getCurrentForm().id == frmTallyReports.id) {

        setMeetingDateForTallyMeeting(day, month, year);


        return;
    }
   
    if (popupDateOfBirth.calEnrollMemberDOB.date > TodayDate) {
        alertForMessages(kony.i18n.getLocalizedString("strSelectDOB"));
    } else {
        if (!IsStartDate) {
            agevalue = com.es.weighincalculations.CalculateAge(month, day, year);
            kony.print("Age:-->" + agevalue);
            kony.print("agevalue from Enroll Flow---->>>" + agevalue);
        }
        kony.print("IsStartDate---->>>" + IsStartDate);
        kony.print("DATE:---->>>" + popupDateOfBirth.calEnrollMemberDOB.date);

        //null comes when we dont pick date, so its todays date
        if (popupDateOfBirth.calEnrollMemberDOB.date == null) {
            kony.print("INSIDE DEFULT DATE FUNCTION");
            if (frmAddIndividulaMember.id != kony.application.getCurrentForm().id) {
                fortnightAway = new Date();
            }
            //MEG-4034 Edit Profile Cannot Add Weight with todays Date - so default date should be yesterdays.
            if (IsViewMember == FlowForScreens.ViewMember) {
            	var x=popupDateOfBirth.calEnrollMemberDOB.validEndDate;
            	kony.print("popupendvalidDate::getDate::"+x[0]+"::getMonth::"+x[1]+"::getYear::"+x[2]);
            	kony.print("fortnightAwayDate::getDate-1::"+(fortnightAway.getDate()-1)+"::getMonth::"+(fortnightAway.getMonth()+1)+"::getYear::"+fortnightAway.getFullYear());
                if(  (x[0]==(fortnightAway.getDate()-1)) && (x[1]==(fortnightAway.getMonth()+1)) && (x[2]==fortnightAway.getFullYear())  ){
                	fortnightAway.setDate(fortnightAway.getDate() - 1);
                	kony.print("::In If condition ::");
                }  // code of if condition is added for MEG-5357...
            }
            date = fortnightAway.getDate();
            mon = fortnightAway.getMonth() + 1;
            year = fortnightAway.getFullYear();
            kony.print(date + "" + mon + "" + year);
            kony.print("MyDateString" + MyDateString);
            var MyDateString = ('0' + (fortnightAway.getMonth() + 1)).slice(-2) + '/' + ('0' + fortnightAway.getDate()).slice(-2) + '/' + fortnightAway.getFullYear();

            kony.print("MyDateString " + MyDateString);
            kony.print("IsAddIndividual out of If====>>" + IsAddIndividual);
            if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
                kony.print("IsReEnrollScreen in If====>>" + IsReEnrollScreen);
                kony.print("IsStartDate in If====>>" + IsStartDate);
                kony.print("MyDateString" + MyDateString);
                if (deviceLocale == "fr_FR") {
                    if (IsStartDate) {
                        frmEnrollReturningMember.lblStartDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmEnrollReturningMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    }
                } else
                {
                    if (IsStartDate) {
                        frmEnrollReturningMember.lblStartDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                    } else {
                        frmEnrollReturningMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                    }

                }
            }
            if (IsAddIndividual == FlowForScreens.AddIndividual) {
                kony.print("IsAddIndividual in If====>>" + IsAddIndividual);
                kony.print("IsStartDate in If====>>" + IsStartDate);
                kony.print("MyDateString" + MyDateString);
                if (deviceLocale == "fr_FR") {
                    if (IsStartDate) {
                        frmAddIndividulaMember.lblStartDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmAddIndividulaMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    }
                } else
                {
                    if (IsStartDate) {
                        frmAddIndividulaMember.lblStartDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386 //mon+ "/" +date  + "/" + year;
                    } else {
                        frmAddIndividulaMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                    }

                }
            } else {
                if (deviceLocale == "fr_FR") {
                    frmEnrollNewMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                } else 
                {
                    frmEnrollNewMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386 //mon+ "/" +date  + "/" + year;
                }
            }
            if (IsViewMember == FlowForScreens.ViewMember) {
                kony.print("isSegmentDate in IsViewMember==>>" + isSegmentDate);
                kony.print("isExpirationDate in IsViewMember==>>" + isExpirationDate);

                if (deviceLocale == "fr_FR") {

                    if (isSegmentDate) {
                        isSegmentDate = false;
                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else if (isExpirationDate) {
                        isExpirationDate = false;
                        frmEditMemberProfile.lblExpDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmEditMemberProfile.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                    }

                } else 
                {

                    if (isSegmentDate) {
                        isSegmentDate = false;
                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else if (isExpirationDate) {
                        isExpirationDate = false;
                        frmEditMemberProfile.lblExpDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmEditMemberProfile.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                    }

             
                }
            }
            if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
                kony.print("isSegmentDate==>>" + isSegmentDate);
                kony.print("IsBatchAddMember==>>" + IsBatchAddMember);

                if (deviceLocale == "fr_FR") {
                    if (isExpirationDate) {
                        isExpirationDate = false;
                        frmBatchAddMember.lblExpDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else if (isSegmentDate) {
                        isSegmentDate = false;
                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else if (IsStartDate) {
                        IsStartDate = false;
                        frmBatchAddMember.lblStartDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386

                    } else {
                        frmBatchAddMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        ValidateageforDPT();
                    }
                } else 
                {
                    if (isExpirationDate) {
                        isExpirationDate = false;
                        popupDateOfBirth.calEnrollMemberDOB.validEndDate = new Date();
                        frmBatchAddMember.lblExpDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else if (isSegmentDate) {
                        isSegmentDate = false;

                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else if (IsStartDate) {
                        IsStartDate = false;
                        frmBatchAddMember.lblStartDateInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386

                    } else {
                        frmBatchAddMember.lblDOBInfo.text = changeDateFormate(MyDateString, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        ValidateageforDPT();
                    }
                }
            }
        } else {
            kony.print("In else part of popupDateOfBirth.calEnrollMemberDOB.date == null..");
            kony.print("OUTSIDE DEFULT DATE FUNCTION");
            kony.print("In else part of popupDateOfBirth.calEnrollMemberDOB.date == null" + popupDateOfBirth.calEnrollMemberDOB.date);
			if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
                kony.print("deviceLocale===>>" + deviceLocale);
                kony.print("IsReEnrollScreen===>>" + IsReEnrollScreen);
                if (deviceLocale == "fr_FR") {
                    if (IsStartDate) {
                        frmEnrollReturningMember.lblStartDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmEnrollReturningMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    }
                } else 
                {
                    if (IsStartDate) {
                        kony.print("IsStartDate===>>" + IsStartDate);
                        frmEnrollReturningMember.lblStartDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        kony.print("frmEnrollReturningMember.lblStartDateInfo.text===>>" + frmAddIndividulaMember.lblStartDateInfo.text);
                    } else {
                        kony.print("IsStartDate in else===>>" + IsStartDate);
                        frmEnrollReturningMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                        kony.print("frmEnrollReturningMember.lblDOBInfo.text===>>" + frmAddIndividulaMember.lblDOBInfo.text);
                    }
                }

            }
            if (IsAddIndividual == FlowForScreens.AddIndividual) {
                kony.print("deviceLocale===>>" + deviceLocale);
                kony.print("IsAddIndividual===>>" + IsAddIndividual);
                if (deviceLocale == "fr_FR") {
                    if (IsStartDate) {
                        frmAddIndividulaMember.lblStartDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmAddIndividulaMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    }
                } else 
                {
                    if (IsStartDate) {
                        kony.print("IsStartDate===>>" + IsStartDate);
                        frmAddIndividulaMember.lblStartDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        kony.print("frmAddIndividulaMember.lblStartDateInfo.text===>>" + frmAddIndividulaMember.lblStartDateInfo.text);
                    } else {
                        kony.print("IsStartDate in else===>>" + IsStartDate);
                        frmAddIndividulaMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                        kony.print("frmAddIndividulaMember.lblDOBInfo.text===>>" + frmAddIndividulaMember.lblDOBInfo.text);
                    }
                }

            } else {
                if (deviceLocale == "fr_FR") {
                    frmEnrollNewMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                } else 
                {
                    frmEnrollNewMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                }
            }
            if (IsViewMember == FlowForScreens.ViewMember) {
                kony.print("isSegmentDate in IsViewMember==>>" + isSegmentDate);
                if (deviceLocale == "fr_FR") {

                    if (isSegmentDate) {
                        isSegmentDate = false;
                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else if (isExpirationDate) {
                        isExpirationDate = false;
                        frmEditMemberProfile.lblExpDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmEditMemberProfile.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                    }

                } else 
                {

                    if (isSegmentDate) {
                        isSegmentDate = false;
                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else if (isExpirationDate) {
                        isExpirationDate = false;
                        frmEditMemberProfile.lblExpDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else {
                        frmEditMemberProfile.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat")); //** MEG 6386//mon+ "/" +date  + "/" + year;
                    }
                }
            }
            if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
                kony.print("isSegmentDate==>>" + isSegmentDate);
                kony.print("IsBatchAddMember==>>" + IsBatchAddMember);

                if (deviceLocale == "fr_FR") {
                    if (isExpirationDate) {
                        isExpirationDate = false;
                        frmBatchAddMember.lblExpDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else if (isSegmentDate) {
                        isSegmentDate = false;
                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else {
                        frmBatchAddMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        ValidateageforDPT();
                    }
                } else
                {
                    if (isExpirationDate) {
                        isExpirationDate = false;
                        kony.print("Inside Expiration Date======?????>>>>");
                        frmBatchAddMember.lblExpDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                    } else if (isSegmentDate) {
                        isSegmentDate = false;
                        popupAddWeigh.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        sameMonthLifetimeAddWeighIn(); // MEG-3919
                    } else if (IsStartDate) {
                        IsStartDate = false;
                        kony.print("Inside Start Date======?????>>>>");
                        frmBatchAddMember.lblStartDateInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386

                    } else {
                        frmBatchAddMember.lblDOBInfo.text = changeDateFormate(popupDateOfBirth.calEnrollMemberDOB.date, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386
                        ValidateageforDPT();
                    }
                }
            }
        }

        popupDateOfBirth.dismiss();
    }
}

function sameMonthLifetimeAddWeighIn() {

    //MEG-3919 - Lifetime Member - so during batch add or add weight history NWI should not be allowed for first week of calendar month.
    //glbSelectMemType - Used in Batch Add and glbMemberType Used in Edit Profile

    var dates, matches;
    if (IsBatchAddMember == FlowForScreens.BatchAddMember && glbSelectMemType == MemberTypeEnum["LifeTime"]) {
        kony.print("::DJP::sameMonthLifetimeAddWeighIn IsBatchAddMember");
        dates = _.map(batchWeightData, function(w) {
            return new Date(w.WeighInDate);
        });
        kony.print("::DJP::sameMonthLifetimeAddWeighIn dates=" + JSON.stringify(dates));
        matches = _.filter(dates, function(d) {
            return (d.getMonth() == new Date(popupAddWeigh.lblDOBInfo.text).getMonth()) && (d.getFullYear() == new Date(popupAddWeigh.lblDOBInfo.text).getFullYear());
        });

        kony.print("::DJP::sameMonthLifetimeAddWeighIn matches=" + JSON.stringify(matches));
        //Default Flow - If no entry in segment, dont allow NWI
        if (frmBatchAddMember.segAddBatchMembeProfileDetails.data == null) {
            popupAddWeigh.btnNWI.isVisible = false;
        } else if (checkValidString(matches)) {
            //There are one or more records for the given month
            var minDate = _.min(matches, function(d) {
                return d;
            });
            if (new Date(popupAddWeigh.lblDOBInfo.text).setHours(0, 0, 0, 0) <= minDate.setHours(0, 0, 0, 0)) {
                //The selected date is less than the minimum date in segment - so NWI not allowed 
                glbBatchAddToShowActionNWI = false; //Dont show NWI in actions of Batch Add for this record
                popupAddWeigh.txtAddWeight.text = "";
                popupAddWeigh.txtAddWeight.setEnabled(true);
                popupAddWeigh.btnNWI.setEnabled(false);
                popupAddWeigh.btnNWI.skin = "btnNoWeighInSelected";
            } else {
                //Weigh in Date is greater than minimum date
                popupAddWeigh.btnNWI.setEnabled(true);
                popupAddWeigh.btnNWI.skin = "btnwwtxtSearchLocation";
            }
        } else {
            //First Weigh In
            glbBatchAddToShowActionNWI = false; //Dont show NWI in actions of Batch Add for this record
            popupAddWeigh.txtAddWeight.text = "";
            popupAddWeigh.txtAddWeight.setEnabled(true);
            popupAddWeigh.btnNWI.setEnabled(false);
            popupAddWeigh.btnNWI.skin = "btnNoWeighInSelected";
        }
    } else if (IsViewMember == FlowForScreens.ViewMember && glbMemberType.toUpperCase() == MemberValueEnum[7].toUpperCase()) { // LIFETIME
        kony.print("::DJP::sameMonthLifetimeAddWeighIn IsViewMember");
        var segData = frmEditMemberProfile.segEditMemberProfileDetails.data;
        kony.print("::DJP::sameMonthLifetimeAddWeighIn segData=" + JSON.stringify(segData));
        dates = _.map(segData, function(w) {
            return new Date(w.lblDateData);
        });
        kony.print("::DJP::sameMonthLifetimeAddWeighIn dates=" + JSON.stringify(dates));
        matches = _.filter(dates, function(d) {
            return (d.getMonth() == new Date(popupAddWeigh.lblDOBInfo.text).getMonth()) && (d.getFullYear() == new Date(popupAddWeigh.lblDOBInfo.text).getFullYear());
        });
        kony.print("::DJP::sameMonthLifetimeAddWeighIn matches=" + JSON.stringify(matches));

        if (checkValidString(matches)) {
            //There are one or more records for the given month
            var minDate = _.min(matches, function(d) {
                return d;
            });
            if (new Date(popupAddWeigh.lblDOBInfo.text).setHours(0, 0, 0, 0) <= minDate.setHours(0, 0, 0, 0)) {
                //The selected date is less than the minimum date in segment - so NWI not allowed 
                glbBatchAddToShowActionNWI = false; //Dont show NWI in actions of Batch Add for this record
                popupAddWeigh.txtAddWeight.text = "";
                popupAddWeigh.txtAddWeight.setEnabled(true);
                popupAddWeigh.btnNWI.setEnabled(false);
                popupAddWeigh.btnNWI.skin = "btnNoWeighInSelected";
            } else {
                //Weigh in Date is greater than minimum date
                popupAddWeigh.btnNWI.setEnabled(true);
                popupAddWeigh.btnNWI.skin = "btnwwtxtSearchLocation";
            }
        } else {
            popupAddWeigh.btnNWI.setEnabled(false);
            popupAddWeigh.btnNWI.skin = "btnNoWeighInSelected";
        }

    } else {
        //Paid Member - If enters date less than first weight date
        if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
            kony.print("::DJP::sameMonthLifetimeAddWeighIn IsBatchAddMember");
            if (batchWeightData && batchWeightData.length > 0) {
                dates = _.map(batchWeightData, function(w) {
                    return new Date(w.WeighInDate);
                });
                var minDate = _.min(dates, function(d) {
                    return d;
                });
                kony.print("::DJP::sameMonthLifetimeAddWeighIn IsBatchAddMember minDate=" + minDate);
                if (new Date(popupAddWeigh.lblDOBInfo.text).setHours(0, 0, 0, 0) <= minDate.setHours(0, 0, 0, 0)) {
                    kony.print("::DJP::sameMonthLifetimeAddWeighIn IsBatchAddMember LESS");
                    //The selected date is less than the minimum date in segment - so NWI not allowed 
                    glbBatchAddToShowActionNWI = false; //Dont show NWI in actions of Batch Add for this record
                    popupAddWeigh.txtAddWeight.text = "";
                    popupAddWeigh.txtAddWeight.setEnabled(true);
                    popupAddWeigh.btnNWI.setEnabled(false);
                    popupAddWeigh.btnNWI.skin = "btnNoWeighInSelected";
                }
            }
        }

    }

}

function eventonClickDoneHeightPopUp() {
	var PickerHeightSelectedKeys
    if (popupHeight.pckrSelectHeight.selectedKeys != null && !isFromPreActivationHeight) {
        PickerHeightSelectedKeys = popupHeight.pckrSelectHeight.selectedKeys;
        heightInMeters = com.es.weighincalculations.ConvertHeight(PickerHeightSelectedKeys);
        kony.print("heightInMeters in Enroll Flow----->>" + heightInMeters);
        if (IsAddIndividual == FlowForScreens.AddIndividual) {
            if (deviceLocale == "fr_FR") {
                frmAddIndividulaMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " cms ";
            } else 
            {
                frmAddIndividulaMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " "+getLocalizedString("strFeetAbbr")+" " + PickerHeightSelectedKeys[1] + " "+getLocalizedString("strInchesAbbr")+" ";
            }
        } else {
            if (deviceLocale == "fr_FR") {
                frmEnrollNewMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " cms ";
            } else 
            {
                frmEnrollNewMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " "+getLocalizedString("strFeetAbbr")+" "+ PickerHeightSelectedKeys[1] + " "+getLocalizedString("strInchesAbbr")+" ";
            }
        }
        if (IsViewMember == FlowForScreens.ViewMember) {
            if (deviceLocale == "fr_FR") {
                frmEditMemberProfile.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " cms ";
            } else 
            {
                frmEditMemberProfile.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " "+getLocalizedString("strFeetAbbr")+" " + PickerHeightSelectedKeys[1] + " "+getLocalizedString("strInchesAbbr")+" ";
            }
        }
        if (IsBatchAddMember == FlowForScreens.BatchAddMember) {

            if (deviceLocale == "fr_FR") {
                frmBatchAddMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " cms ";
            } else 
            {
                frmBatchAddMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " "+getLocalizedString("strFeetAbbr")+" " + PickerHeightSelectedKeys[1] + " "+getLocalizedString("strInchesAbbr")+" ";
            }
        }
        if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
            if (deviceLocale == "fr_FR") {
                frmEnrollReturningMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " cms ";
            } else 
            {
                frmEnrollReturningMember.lblHeightInfo.text = PickerHeightSelectedKeys[0] + " "+getLocalizedString("strFeetAbbr")+" " + PickerHeightSelectedKeys[1] + " "+getLocalizedString("strInchesAbbr")+" ";
            }
        }

    }
    
    if(isFromPreActivationHeight){
    	PickerHeightSelectedKeys = popupHeight.pckrSelectHeight.selectedKeys;
        heightInMeters = com.es.weighincalculations.ConvertHeight(PickerHeightSelectedKeys);
        
        kony.print("heightInMeters in Enroll Flow----->>" + heightInMeters);
        
    	if (deviceLocale == "fr_FR") {
            popupPreActivation.lblheight.text = PickerHeightSelectedKeys[0] + " cms ";
        } 
        else 
        {
            popupPreActivation.lblheight.text = PickerHeightSelectedKeys[0] + " "+getLocalizedString("strFeetAbbr")+" " + PickerHeightSelectedKeys[1] + " "+getLocalizedString("strInchesAbbr")+" ";
        }
        isFromPreActivationHeight = false;
    }
    
    popupHeight.dismiss();
}

function onDoneEditingSubscriptionID() {
    if (IsEnrollMember == FlowForScreens.Enroll) {
        var selectedKey = glbSelectSubType;
        if (selectedKey == '1-1-1' || selectedKey == '1-2-1' || selectedKey == null) {
            displayProgressView();
            var subid = glbFormName.txtSubscriptionID.text;
            boEnrollMember.validateMonthlyCoupon(subid.substring(0, 9));
        }
    }
}

function eventonClickvboxEnrollNewMemberActions() {
    //Show popup Actions for add Member
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
        var context = {
            "widget": frmEnrollWeighMember.vboxEnrollNewMemberActions,
            "anchor": "top",
            "sizetoanchorwidth": true
        };
        popupActionsForAddMember.setContext(context);
        popupActionsForAddMember.show();
    } else if (IsEnrollMember == FlowForScreens.Enroll || IsReEnrollScreen == FlowForScreens.ReEnroll) {
        var context = {
            "widget": frmEnrollWeighMember.vboxEnrollNewMemberActions,
            "anchor": "top",
            "sizetoanchorwidth": true
        };
        popupActionsForEnrollMember.setContext(context);
        popupActionsForEnrollMember.show();
    }

}

function onRowClickFromActionAddMemberPopup() {
    var option = popupActionsForAddMember.addMemberActionsSegment.selectedIndex[1];
    if (option == 0) {
        popupActionsForAddMember.dismiss();
        

        popupMissedWeeks.show();
    } else if (option == 1) {
        popupActionsForAddMember.dismiss();
        popupChangePersonalGoal.txtPersonalGoalWeight.text = glbPersonalGoalWeight;
        var context1 = {
            "widget": frmEnrollWeighMember.vboxEnrollNewMemberActions,
            "anchor": "top",
            "sizetoanchorwidth": true
        };
        popupChangePersonalGoal.setContext(context1);
        popupChangePersonalGoal.show();
    }
}

function onRowClickFromActionEnrollMemberPopup() {
    var option = popupActionsForEnrollMember.enrollMemberActionsSegment.selectedIndex[1];
    if (option == 0) {
        popupActionsForEnrollMember.dismiss();
        popupChangePersonalGoal.txtPersonalGoalWeight.text = glbPersonalGoalWeight;
        var context1 = {
            "widget": frmEnrollWeighMember.vboxEnrollNewMemberActions,
            "anchor": "top",
            "sizetoanchorwidth": true
        };
        popupChangePersonalGoal.setContext(context1);
        popupChangePersonalGoal.show();
    }
}
