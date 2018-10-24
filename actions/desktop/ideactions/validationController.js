// check login validation
var maxweight = 999; // old 999.9 - MEGCA - 282
var minweight = 60;
var minheight = 122;
var maxheight = 241;
var maxPersonalGoalWeight = 500;
var error = '';
var validPasskey = ["1-1-1", "1-1-2", "1-2-1", "1-2-2", "8-1-1","10-1-1", "13-1-1","14-1-1"]; //, '9-1-1', '9-2-1' // MEGCA-290 //** MEG 6434
var minDPT = 1;
var maxDPT = 999;

function checkValidate() {
    try {
        if (frmLogin.tbxLogin.text == '' || frmLogin.tbxLogin.text == null) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgUser"));
            return false;
        } else if (frmLogin.tbxPassword.text == '' || frmLogin.tbxPassword.text == null) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgPass"));
            return false;
        }
        return true;
    } catch (e) {
        GlobalException(e);
    }
}

/*
 * Function to change javascript date format to yyyy-mm-dd H:i:s
 * 
 */
function changeDateFormat(value) {
    if (value) {
        Number.prototype.padLeft = function(base, chr) {
            var len = (String(base || 10).length - String(this).length) + 1;
            return len > 0 ? new Array(len).join(chr || '0') + this : this;
        }
        var d = new Date(value),
            dformat = [d.getFullYear().padLeft(), (d.getMonth() + 1).padLeft(),
                d.getDate()
            ].join('-') +
            ' ' + [d.getHours().padLeft(),
                d.getMinutes().padLeft(),
                d.getSeconds().padLeft()
            ].join(':');
        return dformat;
    }
}


/*
 * 	Validattion for search criteria text
 */
function validateZip() {
    try {
    	var searchText=popupSearchLocation.txtZip.text;
    	var regexpr = /^[a-zA-Z0-9- ]+$/; 
    	
        if (searchText == "" || searchText == null) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgZip"));
            return false;
        }else if(!regexpr.test(searchText)){
        	displayPopupAlert(kony.i18n.getLocalizedString("strValidMsgZip"));
        	return false;
        }else{
        	return true;
        }
    } catch (e) {
        GlobalException(e);
    }
}

function ValidateZiporLocation(zip) {
    try {
    	var regexpr = /^[a-zA-Z0-9- ]+$/; 
    	
        if (zip == "" || zip == null) {
            displayPopupAlert(kony.i18n.getLocalizedString("strMsgZip"));
            return false;
        }else if(!regexpr.test(zip)){
        	displayPopupAlert(kony.i18n.getLocalizedString("strValidMsgZip"));
        	return false;
        }else{
        	return true;
        }
    } catch (e) {
        GlobalException(e);
    }
}

function nth(d) {
    try {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    } catch (e) {
        GlobalException(e);
    }
}

function formatDate(date) {
    var date = (date != undefined && date != "") ? date : new Date;
    try {

        var fortnightAway = new Date(date);
        var date = fortnightAway.getDate();
        var month = '"'+getLocalizedString('strJanF')+","+ getLocalizedString('strFebF')+","+  getLocalizedString('strMarF')+","+  getLocalizedString('strAprF')+","+  getLocalizedString('strMayF')+","+  getLocalizedString('strJunF')+","+  getLocalizedString('strJulF')+","+  getLocalizedString('strAugF')+","+  getLocalizedString('strSepF')+","+  getLocalizedString('strOctF')+","+  getLocalizedString("strNovF")+","+  getLocalizedString('strDecF')+'"';
        month = month.split(",")[fortnightAway.getMonth()];
        var weekday = new Array(getLocalizedString("strSun"), getLocalizedString("strMon"), getLocalizedString("strTue"), getLocalizedString("strWed"), getLocalizedString("strThu"), getLocalizedString("strFri"), getLocalizedString("strSat"));
        var dayOfWeek = weekday[fortnightAway.getDay()];
        if(deviceLocale == "fr_CA"){
        	finaldate = dayOfWeek + " " + date + " " + month + " " //remove space
            + fortnightAway.getFullYear();
        }else{
        	finaldate = dayOfWeek + " " + month + " " + date + nth(date) + ", " //remove space
            + fortnightAway.getFullYear();
        }
        
        kony.print("finaldate : "+finaldate);
        return finaldate;
    } catch (e) {
        GlobalException(e);
    }
}
/*
	check for valid US phone number
	allowed format E.g. 999 999 9999
	allowed format E.g. 999.999.9999
	allowed format E.g. 999-999-9999
*/
function validatePhone(inputtxt) {
    try {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneno.test(inputtxt);
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

/*
	check valid name format
*/

function validName(name) {
    try {
        var namePattern = /^[A-z ]+$/;
        return namePattern.test(name);
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

/*
	check valid email format
*/

function validEmail(email) {
    try {
    	return kony.string.isValidEmail(email);
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}
/*
 *	check date format dd/mm/yyyy
 */
function validDateFormat(dateStr) {
    try {

        var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        return pattern.test(dateStr);
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

function validWeight(str) {
    try {
        var weight = parseFloat(str);
        if (weight >= minweight && weight <= maxweight) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        GlobalException(e);
    }
}

var validationcls = function() {
    isvalid = true;
}

validationcls.prototype.checkForRequiredFields = function(str, name, customMsg) {
    var field = (name == undefined || name == "") ? "" : name;
    try {
        kony.print("Required === " + str);
        if (str == undefined || str == null || str.trim() == '') {
            if (customMsg != undefined && customMsg != null && customMsg != "") {
                error += kony.i18n.getLocalizedString(customMsg);
            } else {
                if (deviceLocale == "fr_CA") {
                	error += getLocalizedString("strMsgFieldRequiedforFr") + " " + field.trim() + " "+ getLocalizedString("strValidfr");
                }else {
                	error += kony.i18n.getLocalizedString("strMsgFieldRequied") + " " + field.trim();
                	
                }
            }

            error += "\r";
            isvalid = false;
            return this;
        } else {
            return this;
        }

    } catch (e) {
        GlobalException(e);
    }
}

//Nikita Patel
validationcls.prototype.checkMemberID = function(str,name,isForPreactivation) {
        var numberPattern = /^[0-9]{1,10}$/;
        try {
            if (str != null && str != undefined && str.trim() != '') {
            	
            	var validMinLen = 8;//(isForPreactivation) ? 7 : 8;
            	var validMaxLen = 9;
				
				//MEG - 5714 - Fixed for Process flow considering no 7 digit RegNumber allowed to enter from App for other Flow.
				if(isForPreactivation && IsFromPM == FlowForScreens.ProcessMember){
					var regNoForExistingMember = (glbRegNo == "") ? glbRegNoForProcess : glbRegNo;
					if(regNoForExistingMember.toString().length == str.toString().length && numberPattern.test(str) && str.toString().length == 7) {
            			return this;
            		}
            	}
            	
                if (parseInt(str) != 0 && numberPattern.test(str) && str.length >= validMinLen && str.length <= validMaxLen) {
                    return this;
                } else {
                    (isForPreactivation)?error += kony.i18n.getLocalizedString("strRegNumValidateMsg") : error += kony.i18n.getLocalizedString("strRegIDSort");
                    error += "\r";
                    isvalid = false;
                    return this;
                }
            } else {
                error += kony.i18n.getLocalizedString("strMsgSearchMemberValid");
                error += "\r";
                isvalid = false;
                return this;
            }

        } catch (e) {
            GlobalException(e);
        }
    }
    //end
validationcls.prototype.checkLocation = function(str) {
    try {
        kony.print("Required === " + str);
        if (str == undefined || str == null || str == '') {

            error += kony.i18n.getLocalizedString("strMsgSelectLocation");
            error += "\r";
            isvalid = false;
            return this;
        } else {
            return this;
        }

    } catch (e) {
        GlobalException(e);
    }
}

validationcls.prototype.CheckWeeksMilestonesAchieved = function(StartDate, ForNumberOfWeeks) {
    try {

        
        var WeighDateFormatted = formattedDate(StartDate);
        kony.print("Formatted Weight Start Date : " + WeighDateFormatted);

        var orgDate2 = formattJsDefaultDate(); ////Current Date
        kony.print("Current Date in CheckWeeksMilestonesAchieved===>>" + orgDate2);

        var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
        kony.print("ONE_WEEK in CheckWeeksMilestonesAchieved===" + ONE_WEEK);

        kony.print("WeighDateFormatted in CheckWeeksMilestonesAchieved===" + WeighDateFormatted);
        var x = WeighDateFormatted.split("/"); ///Start Date
        kony.print("x in CheckWeeksMilestonesAchieved===" + x);

        var y = orgDate2.split("/"); ////Current Date
        kony.print("y in CheckWeeksMilestonesAchieved===" + y);

        kony.print("deviceLocale during add individaul Weeks validation====" + deviceLocale);
        if (deviceLocale == "fr_FR") //DD/MM/YYYY
        {
            var date1 = new Date((x[2]), (x[1]), x[0]);
            kony.print("Start date date1 in CheckWeeksMilestonesAchieved in else ===" + date1);
            var date2 = new Date((y[2]), (y[1]), y[0]);
            kony.print("Curr date date2 in CheckWeeksMilestonesAchieved in else===" + date2);
        } else //  if(deviceLocale == "en_US"  || deviceLocale=="en_CA")//MM/DD/YYYY  03 MM 04 DD 2014 YYYY
        {
            var date1 = new Date((x[2]), x[0] - 1, (x[1]));
            kony.print("Start date date1 in CheckWeeksMilestonesAchieved in if===" + date1);
            var date2 = new Date((y[2]), y[0] - 1, (y[1]));
            kony.print("Curr date DATE2 in CheckWeeksMilestonesAchieved in if===" + date2);
        }

        var _Diff = Math.floor((date2.getTime() - date1.getTime()) / (ONE_WEEK));
        if (ForNumberOfWeeks == "2 Weeks") {

            if (_Diff == 1) {
                kony.print("in true validation IF");
                error += kony.i18n.getLocalizedString("strMsg2WeeksMilestoneCompleted");
                error += "\r";
                return this;
            } else {
                kony.print("In else for valid weeks complete");
                isvalid = false;
                return this;
            }
        } else if (ForNumberOfWeeks == "16 Weeks") {
            if (_Diff == 15) {
                kony.print("in true validation IF");
                error += kony.i18n.getLocalizedString("strMsg16WeeksMilestoneCompleted");
                error += "\r";
                return this;
            } else {
                kony.print("In else for valid weeks complete");
                isvalid = false;
                return this;
            }
        }


        var DateDifference = date2.getTime() - date1.getTime();

        kony.print("date2.getTime()===" + date2.getTime());
        kony.print("date1.getTime()===" + date1.getTime());
        kony.print("date2.getTime()-date1.getTime()===" + DateDifference);
        kony.print("diff of weeks===" + _Diff);

    } catch (e) {
        GlobalException(e);
    }
}

validationcls.prototype.CheckWeeksCompleted = function(inputstr, WeekInput) {
    try {
        if (inputstr != undefined && inputstr != null && inputstr != "" && WeekInput != "" && WeekInput != undefined) {
            var orgDate2 = formattJsDefaultDate(); ////Current Date
            kony.print("Current Date in CheckWeeksCompleted===>>" + orgDate2);

            var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
            kony.print("ONE_WEEK in CheckWeeksCompleted===" + ONE_WEEK);

            kony.print("inputstr in CheckWeeksCompleted===" + inputstr);
            var x = inputstr.split("/"); ///Start Date
            kony.print("x in CheckWeeksCompleted===" + x);

            var y = orgDate2.split("/"); ////Current Date
            kony.print("y in CheckWeeksCompleted===" + y);

            kony.print("deviceLocale during add individaul Weeks validation====" + deviceLocale);
            if (deviceLocale == "fr_FR") //DD/MM/YYYY
            {
                var date1 = new Date((x[2]), (x[1]), x[0]);
                kony.print("Start date date1 in CheckWeeksCompleted in else ===" + date1);
                var date2 = new Date((y[2]), (y[1]), y[0]);
                kony.print("Curr date date2 in CheckWeeksCompleted in else===" + date2);
            } else if(kony.i18n.getLocalizedString("strDisplayDateFormat") == 'yyyy/mm/dd'){ //** MEG 6386
            	var date1 = new Date((x[0]), x[1] - 1, (x[2]));
                kony.print("Start date date1 in CheckWeeksCompleted in if===" + date1);
                var date2 = new Date((y[2]), y[0] - 1, (y[1]));
                kony.print("Curr date DATE2 in CheckWeeksCompleted in if===" + date2);
            }else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA")//MM/DD/YYYY  03 MM 04 DD 2014 YYYY
            {
                var date1 = new Date((x[2]), x[0] - 1, (x[1]));
                kony.print("Start date date1 in CheckWeeksCompleted in if===" + date1);
                var date2 = new Date((y[2]), y[0] - 1, (y[1]));
                kony.print("Curr date DATE2 in CheckWeeksCompleted in if===" + date2);
            }

            var _Diff = Math.floor((date2.getTime() - date1.getTime()) / (ONE_WEEK)) + 1; //CheckWeeksMilestonesAchieved(inputstr,WeekInput);//
            kony.print("diff of weeks===" + _Diff);

            kony.print("WeekInput===" + WeekInput);

            kony.print("parseInt(WeekInput)===" + parseInt(WeekInput));
			
			var weekCompletedRegex = /^\d+$/;
            if (weekCompletedRegex.test(WeekInput) && parseInt(WeekInput) >= 0 && parseInt(WeekInput) <= _Diff) {
                kony.print("in true validation IF");
                return this;
            } else {
                kony.print("In else for valid weeks complete");
                error += kony.i18n.getLocalizedString("strMsgWeeksCompleted");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else if (WeekInput == undefined || WeekInput == null || WeekInput == "") {
            kony.print("In else for Null strings");
            error += kony.i18n.getLocalizedString("strNullWeeksCompleted");
            error += "\r";
            isvalid = false;
            return this;
        } else {
            kony.print("Start date is missing");
            isvalid = false;
            return this;
        }
    } catch (e) {
        GlobalException(e);
    }
}
validationcls.prototype.CheckRemainingMissedWeekPasses = function(WeekCompletedInput,isRemainingMissedWeekPasses) {
	 try {
	 	kony.print("IS WeekCompletedInput==>"+parseFloat(WeekCompletedInput));
	 	if (WeekCompletedInput != '' && WeekCompletedInput.length != 0) { //WeekCompletedInput < 1 && 
	 		kony.print("In if weekcompleted");
	 		var missedweekpasses = /^\d+$/;
	 		if(!missedweekpasses.test(WeekCompletedInput)) {
		 		if(isRemainingMissedWeekPasses) {
		            error += kony.i18n.getLocalizedString("strMsgRemainingMissedWeekPasses");	 		
		 		} else {
		 		    error += kony.i18n.getLocalizedString("strMsgWeeksCompleted"); // Msg for Weeks Completed
		 		}
	            error += "\r";
	            isvalid = false;
		 		return this;
	 		} else {
	 			kony.print("In else1 weekcompleted");
	 			return this;
	 		}
	 	} else {
	 		kony.print("In else weekcompleted");
            return this;
	 	}
	 }  catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}
validationcls.prototype.CheckPhone = function(inputstr) {
    try {

        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneno.test(inputstr) && inputstr != "" && inputstr != undefined) {
            return this;
        } else {
            error += kony.i18n.getLocalizedString("strValidPhone");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.checkEmail = function(inputstr) {
    try {
        if (kony.string.isValidEmail(inputstr)) {
            return this;
        } else {
            error += kony.i18n.getLocalizedString("strValidEmail");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

// Nikita Patel

validationcls.prototype.checkEnrollFirstName = function(inputstr) {
    try {
        //var namePattern = /^[a-zA-Z-' ]*$/;
		kony.print("first name : "+inputstr);
        var namePattern = "";
    	kony.print("deviceSubLocale first name"+deviceLocale);
        if(deviceLocale == "fr_CA"){
        	namePattern = /^[A-Za-z-' \u00C0-\u017F\u00AA\u00BA]+$/;  
        }else{
        	namePattern = /^[a-zA-Z-' ]*$/;
        }

        if (inputstr != undefined && inputstr != null && inputstr.trim() != "") {
            if (namePattern.test(inputstr)) {
                if (inputstr.length >= 1) {//MEG 5048 Changing validation lenght 2 to 1
                    return this;
                } else {
                    error += kony.i18n.getLocalizedString("firstNameMinLength");
                    error += "\r";
                    isvalid = false;
                    return this;
                }
            } else {
                error += kony.i18n.getLocalizedString("strValidFirstName");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {
            error += kony.i18n.getLocalizedString("strEnterFirstName");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}
validationcls.prototype.checkLookUpServiceProviderName = function(inputstr) {
    try {
        var namePattern = /^[a-zA-Z-' ]*$/;
        var numberPattern = /^[0-9' ]*$/;
        kony.print("in name validation for service provide===>>" + namePattern.test(inputstr))
        kony.print("in number validation for service provide===>>" + numberPattern.test(inputstr))
        if (inputstr != "" && inputstr != undefined) {
            if (namePattern.test(inputstr) || numberPattern.test(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strValidLookUpServiceProviderName");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {
            error += kony.i18n.getLocalizedString("strValidLookUpServiceProviderName");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}
validationcls.prototype.checkEnrollLastName = function(inputstr) {
        try {
            //var namePattern = /^[a-zA-Z-' ]*$/;
            kony.print("last name : "+inputstr);
            var namePattern = "";
        	kony.print("deviceSubLocale last name"+deviceLocale);
            if(deviceLocale == "fr_CA"){
	        	namePattern = /^[A-Za-z-' \u00C0-\u017F\u00AA\u00BA]+$/;
	        }else{
	        	namePattern = /^[a-zA-Z-' ]*$/;
	        }

            if (inputstr != undefined && inputstr != null && inputstr.trim() != "") {
                if (namePattern.test(inputstr)) {
                    if (inputstr.length >= 1) {//MEG 5048 Changing validation lenght 2 to 1
                        return this;
                    } else {
                        error += kony.i18n.getLocalizedString("lastNameMinLength");
                        error += "\r";
                        isvalid = false;
                        return this;
                    }
                } else {
                    error += kony.i18n.getLocalizedString("strValidLastName");
                    error += "\r";
                    isvalid = false;
                    return this;
                }
            } else {
                error += kony.i18n.getLocalizedString("strEnterLastName");
                error += "\r";
                isvalid = false;
                return this;
            }
        } catch (e) {
            // todo: handle exception
            GlobalException(e);
        }
    }

validationcls.prototype.checkFirstName = function(inputstr) {
    try {
        //var namePattern = /^[a-zA-Z-' ]*$/;
        var namePattern = "";
    	kony.print("deviceSubLocale first name"+deviceLocale);
        if(deviceLocale == "fr_CA"){
        	namePattern = /^[A-Za-z-' \u00C0-\u017F\u00AA\u00BA]+$/;   
        }else{
        	namePattern = /^[a-zA-Z-' ]*$/;
        }
        if (inputstr != "" && inputstr != undefined) {
            if (namePattern.test(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strValidFirstName");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {
            error += kony.i18n.getLocalizedString("strEnterFirstName");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.checkLastName = function(inputstr) {
    try {
        //var namePattern = /^[a-zA-Z-' ]*$/;
        var namePattern = "";
    	kony.print("deviceSubLocale last name"+deviceLocale);
        if(deviceLocale == "fr_CA"){
        	namePattern = /^[A-Za-z-' \u00C0-\u017F\u00AA\u00BA]+$/;  
        }else{
        	namePattern = /^[a-zA-Z-' ]*$/;
        }
        if (inputstr != "" && inputstr != undefined) {
            if (namePattern.test(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strValidLastName");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {
            error += kony.i18n.getLocalizedString("strEnterLastName");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

//
validationcls.prototype.checkNickName = function(inputstr) {
    try {
        //var namePattern = /^[a-zA-Z-' ]*$/;
        var namePattern = "";
    	kony.print("deviceSubLocale nick name"+deviceLocale);
        if(deviceLocale == "fr_CA"){
        	namePattern = /^[A-Za-z-' \u00C0-\u017F\u00AA\u00BA]+$/; 
        }else{
        	namePattern = /^[a-zA-Z-' ]*$/;
        }
        if (inputstr != "" && inputstr != undefined) {
            if (namePattern.test(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strEnterValidNickName");
                error += "\r";
                isvalid = false;
                return this;
            }
        }
    } catch (e) {

        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.checkCity = function(inputstr) {
    try {
        //var namePattern = /^[a-zA-Z ]*$/;
        var namePattern = "";
    	kony.print("deviceSubLocale city"+deviceLocale);
        if(deviceLocale == "fr_CA"){
        	namePattern = /^[A-Za-z\u00C0-\u017F\u00AA\u00BA]+$/; 
        }else{
        	namePattern = /^[a-zA-Z ]*$/;
        }
        if (inputstr != "" && inputstr != undefined) {
            if (namePattern.test(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strVaildCity");
                error += "\r";
                isvalid = false;
                return this;
            }
        }
    } catch (e) {

        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.checkCityForRefineSearch = function(inputstr) {
    try {
        //var namePattern = /^[a-zA-Z ]*$/;
        var namePattern = "";
    	kony.print("deviceSubLocale city refine search "+deviceLocale);
        if(deviceLocale == "fr_CA"){
        	namePattern = /^[A-Za-z \u00C0-\u017F\u00AA\u00BA]+$/; 
        }else{
        	namePattern = /^[a-zA-Z ]*$/;
        }
        if (inputstr != undefined) {
            if (namePattern.test(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strVaildCity");
                error += "\r";
                isvalid = false;
                return this;
            }
        }
    } catch (e) {

        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.checkPostalCode = function(inputstr) {
    try {
        var namePattern = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]\s?[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
        if (inputstr != "" && inputstr != undefined) {
            if (namePattern.test(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strValidMsgPostal");
                error += "\r";
                isvalid = false;
                return this;
            }
        }
    } catch (e) {

        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.heightValidation = function(inputstr) {
    try {

        if (inputstr != "" && inputstr != undefined) {
            return this;
        } else {
            error += kony.i18n.getLocalizedString("strValidHeight");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}


validationcls.prototype.validateDate = function(datestr, customMsg) {
    try {
        kony.print("--------datestr----------"+datestr);
        var Pattern;
        
        if (deviceLocale == "fr_FR") {//** MEG 6386
            Pattern = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        } else if(kony.i18n.getLocalizedString("strDisplayDateFormat") == 'yyyy/mm/dd'){
        	if(datestr.indexOf("/") != 4)//** MEG 6386
        	{
        		datestr = changeDateFormate(datestr, kony.i18n.getLocalizedString("strDisplayDateFormat"));
        	}else
        	{
        		kony.print("Do Nothing");
        	}        	
        	Pattern = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
        	//Pattern = /^(19|20)\d{2}\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])$/;
        } else 
        {
            Pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        }

        //Nikita Patel
        if (datestr != "" && datestr != undefined) {
            if (Pattern.test(datestr)) { 
                return this;
            } else {
                if (customMsg != undefined && customMsg != null && customMsg != "") {
                    error += kony.i18n.getLocalizedString(customMsg);
                    error += "\r";
                } else {
                    error += kony.i18n.getLocalizedString("strValidDateFormat");
                    error += "\r";
                }

                isvalid = false;
                return this;
            }
        } else {
            if (customMsg != undefined && customMsg != null && customMsg != "") {
                error += kony.i18n.getLocalizedString(customMsg);
                error += "\r";
            } else {
                error += kony.i18n.getLocalizedString("strValidDateFormat");
                error += "\r";
            }
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }

}

validationcls.prototype.validateStartDate = function(datestr, dateDOB) {
    try {
        var Pattern;
        if (deviceLocale == "fr_FR") {
            Pattern = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        } else if(kony.i18n.getLocalizedString("strDisplayDateFormat") == 'yyyy/mm/dd'){//** MEG 6386
			if(datestr.indexOf("/") != 4)//** MEG 6386
        	{
        		datestr = changeDateFormate(datestr, kony.i18n.getLocalizedString("strDisplayDateFormat"));
        	}else
        	{
        		kony.print("Do Nothing");
        	}       
        	Pattern = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
        } else 
        {
            Pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        }


        if (datestr != "" && datestr != undefined) {
            if (Pattern.test(datestr)) {
                if (dateDOB != "" && dateDOB != undefined) {
                    if (Date.parse(datestr) > Date.parse(dateDOB)) {
                        return this;
                    } else {
                        error += kony.i18n.getLocalizedString("strNullString");
                        error += "\r";
                        isvalid = false;
                        return this;
                    }
                }
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strNullString");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {
            error += kony.i18n.getLocalizedString("strNullString");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }

}

/*
	height must be between 3-7 feet 
	allowed format E.g. 5'7"
*/



validationcls.prototype.validateWeight = function(str) {
    try {

        var weight = parseFloat(str);
        if (weight >= minweight && weight <= maxweight && weight != "") {
            return this;
        } else {
            error += kony.i18n.getLocalizedString("strValidWeight");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        GlobalException(e);
    }
}

validationcls.prototype.setValidateWeightFlag = function(str) {
    try {

        var weight = parseFloat(str);
        if (weight >= minweight && weight <= maxweight && weight != "") {
            return this;
        } else {
            isvalid = false;
            return this;
        }
    } catch (e) {
        GlobalException(e);
    }
}


validationcls.prototype.validateZip = function(str) {
    try {
        var zip = parseInt(str);
        if (isNaN(zip) && zip.length > 5 && zip != "") {
            return this;
        } else {

            error += kony.i18n.getLocalizedString("strValidZip");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        GlobalException(e);
    }
}

validationcls.prototype.validateAdvanceSearchString = function(str) {
    try {
        kony.print("str===>>>" + str);
        if (str != undefined && str != null && str != "") {
            kony.print("first if===>>>" + str);
            var pattern = "";
            if(deviceLocale == "fr_CA"){
	        	pattern = /^[^\'][a-zA-Z\u00C0-\u017F\u00AA\u00BA0-9\'\-]+$/g;
	        }else{
	        	pattern = /^[^\'][a-zA-Z0-9\'\-]+$/g;
	        }
            if (pattern.test(str) || kony.string.isValidEmail(str)) {
                kony.print("second if===>>>" + str);
                return this;
            } else {
                kony.print("second else===>>>" + str);
                error += kony.i18n.getLocalizedString("strMsgSearchValid");
                error += "\r";
                isvalid = false;
                return this;

            }
        } else {
            kony.print("first else===>>>" + str);
            error += kony.i18n.getLocalizedString("strMsgSearchValid");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}
//Creating this function to solve MEG 5148
validationcls.prototype.validateAdvanceSearchFNameLName = function(str) {
    try {
        kony.print("str===>>>" + str);
        if (str != undefined && str != null && str != "") {
            kony.print("first if===>>>" + str);
            //Commenting old adding new MEG 5048
			var pattern = "";
            if(deviceLocale == "fr_CA"){
            	pattern = /^[^\'][a-zA-Z\u00C0-\u017F\u00AA\u00BA0-9\'\-]+$/g;
	        }else{
	        	pattern = /\b(?!')\w*[a-zA-Z0-9+\s\'\-]\b/g;
	        }
            //Adding .trim() here as MEG 5148 needs to allow space in between and not ends.
            if (pattern.test(str.trim()) || kony.string.isValidEmail(str)) {
                kony.print("second if===>>>" + str);
                return this;
            } else {
                kony.print("second else===>>>" + str);
                error += kony.i18n.getLocalizedString("strMsgSearchValid");
                error += "\r";
                isvalid = false;
                return this;

            }
        } else {
            kony.print("first else===>>>" + str);
            error += kony.i18n.getLocalizedString("strMsgSearchValid");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.validSubscriptiodIdLength = function(subscriptionId, customfield) {
    kony.print("Subvalu == " + subscriptionId + "====" + customfield);
    try {
        if (subscriptionId != undefined && subscriptionId != null && subscriptionId != "") {
            kony.print("in == " + subscriptionId);
            if (subscriptionId.length == 15 || subscriptionId.length == 16) {
                var alpha = subscriptionId.charAt(0);
                kony.print("alpha = " + alpha + " in array=" + in_array(alpha, ValidFirstLettersInSubID));
                
                 var reg = new RegExp("^[m|M|w|W|q|Q]{1}[0-9]*$");
                
                if (in_array(alpha, ValidFirstLettersInSubID) && subscriptionId.match(reg) != null) {
                    kony.print("--> inside in_array(alpha,ValidFirstLettersInSubID) IF block");
                    if (customfield == "MP" && alpha.toLowerCase() != "q") {
                        //Only m and w
                        return this;
                    } else if (subscriptionId.length == 16 && customfield == "20WP") {
                        kony.print("::20::20 Week");
                        //20 Week
                        if (alpha.toLowerCase() == "q" && (!isNaN(subscriptionId.slice(1))) ) {
                            //Allow
                            return this;
                        } else {
                            kony.print("::20::Other than q or Q");
                            //Other than q or Q
                            error += kony.i18n.getLocalizedString("strValid20WeekPass");
                            error += "\r";
                            isvalid = false;
                            return this;
                        }
                    } else if (customfield == "20WP") {
                        //Other than 16 characters
                        kony.print("::20::Other than 16 characters");
                        error += kony.i18n.getLocalizedString("strValid20WeekPass");
                        error += "\r";
                        isvalid = false;
                        return this;
                    } else {
                        //if Q - dont allow
                        kony.print("Dileep --> inside in_array(alpha,Validpass) ELSE block");
                        kony.print("Dileep --> inside in_array(alpha,Validpass) ELSE block");
                        error += kony.i18n.getLocalizedString("strMsgSubId"); //"Please check mp number format";
                        error += "\r";
                        isvalid = false;
                        return this;
                    }
                } else {

                    //any letters other than q,w,m
                    kony.print("Dileep --> inside in_array(alpha,Validpass) ELSE block");
                    kony.print("Dileep --> inside in_array(alpha,Validpass) ELSE block");
                    if (customfield != undefined && customfield != null && customfield != "") {
                        var msgstr;
                        switch (customfield) {
                            case "MP":
                                msgstr = 'strMsgSubId';
                                break;
                            case "20WP":
                                msgstr = 'strValid20WeekPass';
                                break;
                            case "SW":
                            default:
                                msgstr = 'strMsg17SubId';
                                break;

                        }
                    }
                    error += kony.i18n.getLocalizedString(msgstr); //"Please check mp number format";
                    error += "\r";
                    isvalid = false;
                    return this;
                }

                if (IsValidMonthlyPass(subscriptionId)) {
                    return this;
                } else {
                    var msgstr;
                    if (customfield != undefined && customfield != null && customfield != "") {
                        switch (customfield) {
                            case "MP":
                                msgstr = 'strMsgSubId';
                                break;
                            case "20WP":
                                msgstr = 'strValid20WeekPass';
                                break;
                            case "SW":
                            default:
                                msgstr = 'strMsg17SubId';
                                break;

                        }
                    }

                    error += kony.i18n.getLocalizedString(msgstr);
                    error += "\r";
                    isvalid = false;
                    return this;
                }
            } else {
                var msgstr;
                if (customfield != undefined && customfield != null && customfield != "") {
                    switch (customfield) {
                        case "MP":
                            msgstr = 'strMsgSubId';
                            break;
                        case "20WP":
                            msgstr = 'strValid20WeekPass';
                            break;
                        case "SW":
                        default:
                            msgstr = 'strMsg17SubId';
                            break;

                    }
                }

                error += kony.i18n.getLocalizedString(msgstr);
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {

            kony.print("out1==");
            if (customfield != undefined && customfield != null && customfield != "") {
                kony.print("out2==");
                var msgstr;
                switch (customfield) {
                    case "MP":
                        msgstr = 'strMsgSubId';
                        break;
                    case "20WP":
                        msgstr = 'strValid20WeekPass';
                        break;
                    case "SW":
                    default:
                        msgstr = 'strMsg17SubId';
                        break;

                }
                error += kony.i18n.getLocalizedString(msgstr);
                error += "\r";
                isvalid = false;
                return this;
            }
        }

        return this;
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.checkForMonthlyPass = function(passKey, email) {
    try {
        if (passKey != null && passKey != undefined && passKey != "") {
            kony.print("pass value==" + passKey + "== email==" + email + "validPasskey" +validPasskey );
            if (in_array(passKey, validPasskey)) {
                if (email != null && email != undefined && email != "") {
                    if (kony.string.isValidEmail(email)) {
                        return this;
                    } else {
                        error += kony.i18n.getLocalizedString("strValidEmail");
                        error += "\r";
                        kony.print("1. Please enter valid email.")
                        isvalid = false;
                        return this;
                    }

                } else {
                   
                    error += kony.i18n.getLocalizedString("strValidEmail");
                    error += "\r";
                    isvalid = false;
                    return this;
                }

            } else if (email != null && email != undefined && email != "") {
                if (kony.string.isValidEmail(email)) {
                	
                    return this;
                } else {
                    kony.print("3. strValidEmail");
                    error += kony.i18n.getLocalizedString("strValidEmail");
                    error += "\r";
                    isvalid = false;
                    return this;
                }
            }
			
            return this;


        } else {

			
           
            error += kony.i18n.getLocalizedString("strValidSubType"); //"Enter Subscription Type";
            error += "\r";
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.checkForMonthlyPassForBatch = function(passKey, email, lblinfo) {
    try {
        if (lblinfo != null && lblinfo != undefined && lblinfo != "") {
            if (passKey != null && passKey != undefined && passKey != "") {
                kony.print("pass value==" + passKey + "== email==" + email);//Added Condition "10-1-1" for MEG 5100
                if (passKey == "1-1-1" || passKey == "1-1-2" || passKey == "8-1-1" || passKey == "10-1-1") {

                    if (email != null && email != undefined && email != "") {
                        if (kony.string.isValidEmail(email)) {
                            return this;
                        } else {
                            error += kony.i18n.getLocalizedString("strValidEmail");
                            error += "\r";
                            isvalid = false;
                            return this;
                        }

                    } else {
                        error += kony.i18n.getLocalizedString("strValidEmail");
                        error += "\r";
                        isvalid = false;
                        return this;
                    }

                } else if (email != null && email != undefined && email != "") {
                    if (kony.string.isValidEmail(email)) {
                        return this;
                    } else {
                        error += kony.i18n.getLocalizedString("strValidEmail");
                        error += "\r";
                        isvalid = false;
                        return this;
                    }
                }
            } else {
                error += kony.i18n.getLocalizedString("strValidSubType"); //"Enter Subscription Type";
                error += "\r";
                isvalid = false;
                return this;
            }

        } else {
            error += kony.i18n.getLocalizedString("strValidSubType"); //"Enter Subscription Type";
            error += "\r";
            isvalid = false;
            return this;
        }
        return this;
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

/*
 * function for validation of zipcode - allow only 5 digits , not allowing , . for that
 */


validationcls.prototype.validateZipCode = function(str) {
    try {
    	if(!in_array(deviceLocale,Countries["US"]))
    	{
    		return this;
    	}
        if (!isNaN(str) && str.indexOf(".") == -1  && str.length == 5 && str != "") {
            return this;
        } else {
            error += kony.i18n.getLocalizedString("strErorMsgInvalidZip");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        GlobalException(e);
    }
}


/*
	Function to check weight date equal or next to start date 
*/
validationcls.prototype.checkforValidWeightDate = function(startdate) {
    try {

        if (startdate != undefined && startdate != null && startdate.trim() != "") {
            var currWeighDate = popupAddWeigh.lblDOBInfo.text;
            if (currWeighDate != undefined && currWeighDate != null && currWeighDate.trim() != "") {
                if (Date.parse(currWeighDate) > Date.parse(startdate)) {
                    return this;
                } else {
                    error += kony.i18n.getLocalizedString("strMsgValidweighdate"); //"Selected Weight date should not be earlier than start date";
                    error += "\r";
                    isvalid = false;
                    return this;
                }
            }
        } else {
            error += kony.i18n.getLocalizedString("strMsgValidstDate"); //"Please enter a valid start date before adding weight"
            error += "\r";
            isvalid = false;
            return this;
        }
        return this;
    } catch (e) {
        // todo: handle exception
        GlobalException(e)
    }
}

// Validate Minor Members for MP-1,3,6 pass

validationcls.prototype.validateMinorForMP = function (subscriptionType,birthDate){
	try 
	{
		kony.print("::PK:: subscriptionType ---"+subscriptionType+"---birthDate---"+birthDate);
		var subscriptions = [kony.i18n.getLocalizedString("strMPBuyNew"),kony.i18n.getLocalizedString("str3MPBuy"),kony.i18n.getLocalizedString("str6MPBuy"),kony.i18n.getLocalizedString("strMPRedeem")];
        if(in_array(subscriptionType,subscriptions))
	 	{
			var today = new Date();
    		var birthDate = new Date(birthDate);
    		var age = today.getFullYear() - birthDate.getFullYear();
    		var m = today.getMonth() - birthDate.getMonth();
    		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    		{
        		age--;
    		}
    		kony.print("::PK:: Age ---"+age);
    		if(age < 18){
    			error += kony.i18n.getLocalizedString("strMinorMPMsg");
            	error += "\r";
            	isvalid = false;
            	return this;
    		}
    		else{
    			return this;
    		}
		}
		else
		{
			return this;
		}
	} 
	catch (e) 
	{
		// todo: handle exception
 		GlobalException(e);
	}
}
function showInActiveConfirmation(localizedstring, callback) {
	var alertConfig = {
        message: localizedstring, 
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblOk"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("btnCancel"), //"No",
        alertHandler: callback
    };
    var psConfig = {};
    var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function showAlertForMessages(localizedstring, showAlertForMessagesCallBack) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": localizedstring,
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "",
        "yesLabel": kony.i18n.getLocalizedString("strLblOk"),
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": showAlertForMessagesCallBack
    }, {});
    kony.print("localizedstring===>>" + localizedstring);
}

function showAlertForConfirmation(localizedstring) {
    var alertConfig = {
        message: localizedstring, 
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), //"No",
        alertHandler: onAlertConfirmation
    };
    var psConfig = {};
    var LocationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onAlertConfirmation(response){
	if(response == true){
		processTimesheetDBOperation();
		alertForMessages(kony.i18n.getLocalizedString("strMsgTimesheetDataSaved"));
	}else{
		return false;
	}
}

function alertForMessages(localizedstring, localizedHeaderString) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": localizedstring,
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle":  (localizedHeaderString == undefined || localizedHeaderString == null) ? "" : localizedHeaderString,
        "yesLabel": kony.i18n.getLocalizedString("strLblOk"),
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
    kony.print("localizedstring===>>" + localizedstring);
    
}


validationcls.prototype.isValid = function() {
    if (error != "") {

        alertForMessages(error);
    }

    error = "";
    kony.print("this.isvalid==" + isvalid);
    return isvalid;
}


/* 
 * Description:Get subscription dropdown data based on membertype 
 * parameters: 
 *     memberType  type of member value or lifetime
 * 	  type: incase of lifetime member free or paid
 * 	  age: member age from dob	 
 * 	  missedWeekPaass: week missed by member.
 */

function getSubscriptionDropDownData(memberflow) {
    var dropdownData = [];
    try {
        if (memberflow != undefined) {
            kony.print("memberflow===>>" + memberflow);
            // a-b-c 
            // a = Subscription 1=MP 8=3MP 3=PAYG 5=FMP 2=20 Week
            // b = Action 1=Buy 2=Redeem
            // c = Temp 
            if (in_array(deviceLocale,Countries["CA"])) {
            	var width = 60;
            	width = (deviceLocale == "fr_CA") ? 100 : 60;
                switch (memberflow) {
                    case 1: // Enroll Flow
                        dropdownData = [
                            [
                                ["1-1-1", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["10-1-1", kony.i18n.getLocalizedString("str6MPBuy")],
                                ["1-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["9-1-1", kony.i18n.getLocalizedString("str20WkBuyNew")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")],
                                ["5-1-1", kony.i18n.getLocalizedString("strFMP")],
                                ["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], width
                            ]
                        ];
                        break;
                    case 2: // Add/Process
                        dropdownData = [
                            [
                                ["1-1-2", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["10-1-1", kony.i18n.getLocalizedString("str6MPBuy")],
                                ["1-2-2", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["9-1-1", kony.i18n.getLocalizedString("str20WkBuyNew")],
                                ["9-2-1", kony.i18n.getLocalizedString("str20WkRedeem")],
                                ["5-2-2", kony.i18n.getLocalizedString("strFMP")],
                                ["3-2-2", kony.i18n.getLocalizedString("strPayg")],
                                ["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], width
                            ]
                        ];
                        break;
                    case 3: // Batch Add - Not used
                        dropdownData = [
                            [
                                ["6-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                              //  ["6-2-7", kony.i18n.getLocalizedString("strPrepaid")],
                                ["6-3-1", kony.i18n.getLocalizedString("strFMP")], width
                            ]
                        ];
                        break;
                    case 4: // FMP - Process/Add
                        dropdownData = [
                            [
                                ["1-1-2", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["10-1-1", kony.i18n.getLocalizedString("str6MPBuy")],
                                ["1-2-2", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["9-1-1", kony.i18n.getLocalizedString("str20WkBuyNew")],
                                ["9-2-1", kony.i18n.getLocalizedString("str20WkRedeem")], 
                                ["3-2-2", kony.i18n.getLocalizedString("strPayg")],
                                ["5-2-2", kony.i18n.getLocalizedString("strFMP")], width
                            ]
                        ];
                        break;
                    case 5: // Not Used
                        dropdownData = [
                            [
                                ["1-1-1", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["10-1-1", kony.i18n.getLocalizedString("str6MPBuy")],
                                ["1-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")],
                                ["5-1-1", kony.i18n.getLocalizedString("strFMP")], width
                            ]
                        ];
                        break;
                    case 6:
                        //Edit Profile
                        dropdownData = [
                            [
                                ["1-2-1", kony.i18n.getLocalizedString("strMonthlyPass")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")],
                                ["9-1-1", kony.i18n.getLocalizedString("str20WkPass")], width
                            ]
                        ];
                        break;
                    case 7: // At Work Enroll
                        dropdownData = [
                            [
                                ["1-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["9-2-1", kony.i18n.getLocalizedString("str20WkRedeem")],
                                ["5-1-1", kony.i18n.getLocalizedString("strFMP")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")], width
                               //["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], 
                            ]
                        ];
                        break;
                    case 8: // At Work Add / Process
                        dropdownData = [
                            [
                                ["1-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["9-2-1", kony.i18n.getLocalizedString("str20WkRedeem")],
                                ["5-1-1", kony.i18n.getLocalizedString("strFMP")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")], width
                               //["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], 
                            ]
                        ];
                        break;
                }
            } else {
                switch (memberflow) {
                    case 1:
                        dropdownData = [
                            [
                                ["1-1-1", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["10-1-1", kony.i18n.getLocalizedString("str6MPBuy")],
                                ["13-1-1", kony.i18n.getLocalizedString("strLTC6")], //** MEG 6434
                                //["14-1-1", kony.i18n.getLocalizedString("strLTC12")],//** MEG 6434
                                ["1-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")],
                                ["5-1-1", kony.i18n.getLocalizedString("strFMP")],
                                ["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], 60
                            ]
                        ];
                        break;
                    case 2:
                        dropdownData = [
                            [
                                ["1-1-1", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["10-1-1", kony.i18n.getLocalizedString("str6MPBuy")],
                                ["13-1-1", kony.i18n.getLocalizedString("strLTC6")], //** MEG 6434
                                //["14-1-1", kony.i18n.getLocalizedString("strLTC12")],//** MEG 6434
                                ["1-2-2", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["5-2-2", kony.i18n.getLocalizedString("strFMP")],
                                ["3-2-2", kony.i18n.getLocalizedString("strPayg")],
                                ["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], 60
                            ]
                        ];
                        break;
                    case 3:
                        dropdownData = [
                            [
                                ["6-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["6-2-7", kony.i18n.getLocalizedString("strPrepaid")],
                                ["6-3-1", kony.i18n.getLocalizedString("strFMP")], 60
                            ]
                        ];
                        break;
                    case 4:
                        dropdownData = [
                            [
                                ["1-1-2", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["1-2-2", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["3-2-2", kony.i18n.getLocalizedString("strPayg")],
                                ["5-2-2", kony.i18n.getLocalizedString("strFMP")], 60
                            ]
                        ];
                        break;
                    case 5:
                        dropdownData = [
                            [
                                ["1-1-1", kony.i18n.getLocalizedString("strMPBuyNew")],
                                ["8-1-1", kony.i18n.getLocalizedString("str3MPBuy")],
                                ["1-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")],
                                ["5-1-1", kony.i18n.getLocalizedString("strFMP")], 60
                            ]
                        ];
                        break;
                    case 6:
                        //Edit Profile
                        dropdownData = [
                            [
                                ["1-2-1", kony.i18n.getLocalizedString("strMonthlyPass")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")], 60
                            ]
                        ];
                        break;
                    case 7:
                        dropdownData = [
                            [
                                ["1-2-1", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["5-1-1", kony.i18n.getLocalizedString("strFMP")],
                                ["3-1-1", kony.i18n.getLocalizedString("strPayg")],
                                ["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], 60
                            ]
                        ];
                        break;
                    case 8:
                        dropdownData = [
                            [
                                ["1-2-2", kony.i18n.getLocalizedString("strMPRedeem")],
                                ["5-2-2", kony.i18n.getLocalizedString("strFMP")],
                                ["3-2-2", kony.i18n.getLocalizedString("strPayg")],
                                ["7-2-2", kony.i18n.getLocalizedString("strPrepaid")], 60
                            ]
                        ];
                        break;
                }
            }

        }
        kony.print("glbProgDurationForProcess---->>>>" + glbProgDurationForProcess);
        kony.print("memberflow---->>>>" + memberflow);
        kony.print("dropdownData---->>>>" + dropdownData);
        return dropdownData;
    } catch (e) {
        GlobalException(e);
        return dropdownData;
    }

}
/*
 * Function to get next billing date in case monthly pass from current date.
 * Related to MEG-132,131
 */

function getNextBillingDate() {
    var today = new Date();
    var nextBillingdate = new Date(new Date(today).setMonth(today.getMonth() + 1))
    return nextBillingdate;
}


function getCurrentMeetingDropDownData() {
    kony.print("IN getCurrentMeetingDropDownData");
    displayProgressView();
    isCurrentMeetingDropdown = true;
    boMeetings.getMtngOccIDOfTalliedMeeting();
}

function bindMeetingDataToDropdown(meetingData, TalliedMeetingData) {
    kony.print("bindMeetingDataToDropdown===>> " + JSON.stringify(meetingData));

    var bindMeetingData = [];
    var bindMeetingDataHomeScreen = [];
    var bindCloseMeetingData = [];
    kony.print("bindMeetingDataToDropdown TalliedMeetingData===>> " + TalliedMeetingData);
    var comparedata = TalliedMeetingData.split(",");
    kony.print("bindMeetingDataToDropdown comparedata===>> " + JSON.stringify(comparedata));



    if (meetingData.length > 0) {
        var isAddedTallied = false;
        var addedMtngArr = [];

        kony.print("::PK:: Before Sorting meeting time ==================== " + JSON.stringify(meetingData));
        meetingData = _.sortBy(meetingData, function(d) {
                return parseInt(d.meetingDTCTime);
            }) // sort the meeting by the Meeting Time MEG-4554
        kony.print("::PK :: After Sorted meeting time ==================== " + JSON.stringify(meetingData));

        
        for (var i in meetingData) {
        	var meetingObj = meetingData[i];
        	kony.print("meetingObj.meetingStatus ==>>?"+meetingObj.meetingStatus);
        	if(meetingObj.meetingStatus == "Open"){
        		bindMeetingData.push({
                    "meetingName": meetingObj.lblMeetings,
                    "meetingId": meetingObj.meetingNum,
                    "meetingTime": meetingObj.meetingTime,
                    "meetingStatus": "Open",
                    "meetingDayTimeCode": meetingObj.meetingDayTimeCode,
                    "isTimesheetModified": meetingObj.isTimesheetModified,
                    "meetingDate": meetingObj.meetingDate,
                    "meetingType": meetingObj.meetingTypeID,
                    "dayCodeID": meetingObj.meetingDayCodeID,
                    "meetingDTCTime": meetingObj.meetingDTCTime,
                    "backOfficerRefID": meetingObj.backOfficerRefID
                });
                bindMeetingDataHomeScreen.push({
                    "lblMeetings": meetingObj.lblMeetings,
                    "btnOpen": kony.i18n.getLocalizedString("btnOpen"),
                    "meetingName": meetingObj.lblMeetings,
                    "meetingTime": meetingObj.meetingTime,
                    "meetingNum": meetingObj.meetingNum,
                    "meetinglookUpID": meetingObj.meetinglookUpID,
                    "meetingStatus": "Open",
                    "meetingDayTimeCode": meetingObj.meetingDayTimeCode,
                    "isTimesheetModified": meetingObj.isTimesheetModified,
                    "meetingDate": meetingObj.meetingDate,
                    "meetingType": meetingObj.meetingTypeID,
                    "dayCodeID": meetingObj.meetingDayCodeID,
                    "backOfficerRefID": meetingObj.backOfficerRefID,
                    "lineSegment": (i == meetingData.length - 1) ? {
                        "isVisible": false
                    } : {
                        "isVisible": true
                    },
                    "meetingDTCTime": meetingObj.meetingDTCTime
                });
        	
        	}else{
        	 if(meetingObj.meetingStatus != "Disable"){
	                bindMeetingData.push({
	                    "meetingName": meetingObj.lblMeetings,
	                    "meetingId": meetingObj.meetingNum,
	                    "meetingTime": meetingObj.meetingTime,
	                    "meetingStatus": meetingObj.meetingStatus, //"Close",
	                    "meetingDayTimeCode": meetingObj.meetingDayTimeCode,
	                    "isTimesheetModified": meetingObj.isTimesheetModified,
	                    "meetingDate": meetingObj.meetingDate,
	                    "meetingType": meetingObj.meetingTypeID,
	                    "dayCodeID": meetingObj.meetingDayCodeID,
	                    "meetingDTCTime": meetingObj.meetingDTCTime,
	                    "backOfficerRefID": meetingObj.backOfficerRefID
	                });
              	}
                bindCloseMeetingData.push({
                    "lblMeetings": meetingObj.lblMeetings,
                    "meetingName": meetingObj.lblMeetings,
                    "meetingTime": meetingObj.meetingTime,
                    "meetingNum": meetingObj.meetingNum,
                    "meetinglookUpID": meetingObj.meetinglookUpID,
                    "meetingStatus": meetingObj.meetingStatus, //"Close",
                    "template": (meetingObj.meetingStatus == "Close") ? hboxMeetingTemp : hboxMeetingDisableTemp,
                    "meetingDayTimeCode": meetingObj.meetingDayTimeCode,
                    "isTimesheetModified": meetingObj.isTimesheetModified,
                    "meetingDate": meetingObj.meetingDate,
                    "meetingType": meetingObj.meetingTypeID,
                    "dayCodeID": meetingObj.meetingDayCodeID,
                    "meetingDTCTime": meetingObj.meetingDTCTime,
                    "backOfficerRefID": meetingObj.backOfficerRefID
                });
        	}
        }
    }

    //Added blank row for spacing between two sections.
    bindMeetingDataHomeScreen.push({
        "lblMeetings": {
            "isVisible": false
        },
        "btnOpen": {
            "isVisible": false
        },
        "lineSegment": {
            "isVisible": false
        }
    });

    removeProgressView();
    kony.print("bindMeetingDataToDropdown DROPDOWN bindMeetingData===>> " + JSON.stringify(bindMeetingData));
    kony.print("frmSelectMeeting HOME OPEN===>> " + JSON.stringify(bindMeetingDataHomeScreen));
    kony.print("frmSelectMeeting HOME CLOSE===>> " + JSON.stringify(bindCloseMeetingData));

    //checking empty arry and setting appropriate label text
    if (bindMeetingDataHomeScreen.length == 0) {
        bindMeetingDataHomeScreen.pop();
        bindMeetingDataHomeScreen.push({
            "meetingName": getLocalizedString("strNoMeetings"),//"No Meetings",
            "btnOpen": {
                "isVisible": false
            }
        });
    }
    if (bindCloseMeetingData.length == 0) {
        bindCloseMeetingData.pop();
        bindCloseMeetingData.push({
            "meetingName": getLocalizedString("strNoMeetings"),//"No Meetings",
            "btnOpen": {
                "isVisible": false
            },
            "btnReport": {
                "isVisible": false
            }
        });
    }


    if (isCurrentMeetingDropdown) {
        if (popupCurrentMeeting.segMeetingList != null) {
            if (popupCurrentMeeting.segMeetingList.data != undefined || popupCurrentMeeting.segMeetingList.data != null) {
                popupCurrentMeeting.segMeetingList.removeAll();
            }
        }
        if (popupCurrentMeeting.segMeetingList) popupCurrentMeeting.segMeetingList.setData(bindMeetingData);
    } else {
        var meetingOpenTitle = "  " + kony.i18n.getLocalizedString("strOpenMeetingTittle");
        var closeMeetingTitle = "  " + kony.i18n.getLocalizedString("strCloseMeetingTittle");
        frmSelectMeeting.segMeetingsList.removeAll();
        frmSelectMeeting.segMeetingsList.data = [
            [meetingOpenTitle, bindMeetingDataHomeScreen],
            [closeMeetingTitle, bindCloseMeetingData]
        ]

    }
    isCurrentMeetingDropdown = false;
}


function bindSateDataToDropdown(stateData, isRefineSearch) {
	stateData = StateDataObjArr;
    removeProgressView();
    var bindStatesData = [];
    if (isRefineSearch) {
        var tmpObj = [];
        tmpObj.push("0");
        tmpObj.push(getLocalizedString("strAll"));
        bindStatesData.push(tmpObj);
    }
    if (stateData.length > 0) {
        for (var i in stateData) {
            var stateObj = stateData[i];
            var newstateObj = [];
            newstateObj.push(stateObj.StateID);
            newstateObj.push(stateObj.StateABBR);
            if (stateObj.StateABBR != "")
                bindStatesData.push(newstateObj);
        }
    }
    bindStatesData.push(60);
    var dropdownData = [];
    dropdownData.push(bindStatesData);
    kony.print("Data====" + JSON.stringify(dropdownData));
    if (isRefineSearch) {
        popupStateRefineSearch.pickerState.masterData = dropdownData;
    } else {
        popupState.pickerState.masterData = dropdownData;
    }

}
//Validate Goal Weight entered [FORMULA: Goal weight <= start weight - 5 lbs]
validationcls.prototype.validateGoalWeight = function(goalWeight, startWeight) {
        try {
            kony.print("startWeight==>>" + startWeight);
            kony.print("goalWeight==>>" + goalWeight);
            var diffWeight = parseFloat(startWeight) - 5;
            if (parseFloat(goalWeight) <= diffWeight && parseFloat(goalWeight) > 1 && !isNaN(goalWeight)) {
                
                return this;
            } else { //Invalid Goal weight
                if (parseFloat(goalWeight) == 0) {
                    return this;
                } else {
                    error += kony.i18n.getLocalizedString("strInvalidGoalWeightMsg");
                    error += "\r";
                    isvalid = false;
                    return this;
                }
            }
        } catch (e) {
            GlobalException(e);
        }
    }
    //Check is Object is empty
function isEmptyObject(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}
//check zip code is only consisting digits and not comma or dot 
function checkValidationForZipDigits(zipcode) {
    var reg = /^[0-9]{1,10}$/;
    var isValid = reg.test(zipcode);

    if (isValid) {
        return true;
    } else {
        return false;
    }
}
// validate Member goal weight

validationcls.prototype.validateMemberGoalWeight = function(str) {
    try {

        var weight = parseFloat(str);
        if (weight >= minweight && weight <= maxweight && weight != "") {
            return this;
        } else {
            error += kony.i18n.getLocalizedString("strValidGoalWeight");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        GlobalException(e);
    }
}

function getSubscriptionDataBasedOnFlow(flow) {
    isFromFMP = true;
    if (flow.toUpperCase() == 'ATTEND') {
        popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(4);
        popupSubscriptionType.pickerSubType.selectedKeys = ["4-2-2"];
    } else {
        popupSubscriptionType.pickerSubType.masterData = getSubscriptionDropDownData(5);
        popupSubscriptionType.pickerSubType.selectedKeys = ["4-1-1"];
    }
}

function checkConsecutiveMonth(d1) {
    var date1 = new Date(d1);
    var date2 = new Date();
    var yeardiff = date2.getFullYear() - date1.getFullYear();
    if ((date2.getMonth() - date1.getMonth() == 1 || date2.getMonth() - date1.getMonth() == -11) && yeardiff == 0) {
        return true
    } else {
        return false
    }

}

// function checkMemberIDForEditProfile to check valid memberid for edit profile.

validationcls.prototype.checkMemberIDForEditProfile = function(str) {
    var numberPattern = /^[0-9]{1,10}$/;
    try {
        if (str != null && str != undefined && str.trim() != '') {
            if (parseInt(str) != 0 && numberPattern.test(str) && str.length >= 6 && str.length <= 9) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strRegIDSort");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {
            error += kony.i18n.getLocalizedString("strMsgSearchMemberValid");
            error += "\r";
            isvalid = false;
            return this;
        }

    } catch (e) {
        GlobalException(e);
    }
}

// Check valid email for Non-Mandatory field

validationcls.prototype.checkEmailForNonMandatory = function(inputstr) {
    try {

        if (inputstr != null && inputstr.trim().length > 0) {
            if (kony.string.isValidEmail(inputstr)) {
                return this;
            } else {
                error += kony.i18n.getLocalizedString("strValidEmail");
                error += "\r";
                isvalid = false;
                return this;
            }
        } else {
            return this;
        }
    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

validationcls.prototype.validatePersonalGoalWeight = function(str) {
    try {

        var weight = parseFloat(str);
        if (weight >= minweight && weight <= maxPersonalGoalWeight && weight != "") {
            return this;
        } else {
            error += kony.i18n.getLocalizedString("strValidPersonalWeight");
            error += "\r";
            isvalid = false;
            return this;
        }
    } catch (e) {
        GlobalException(e);
    }
}

validationcls.prototype.validateDPTvalue = function(str) {

    try {

        var dptvalue = parseFloat(str);

        if (dptvalue >= minDPT && dptvalue <= maxDPT && dptvalue != "") {

            return this;

        } else {

            error += kony.i18n.getLocalizedString("strValidDPTAlertMsg");

            error += "\r";

            isvalid = false;

            return this;

        }

    } catch (e) {

        GlobalException(e);

    }

}

function checkforWPA(isWPA){
	if(isWPA=="" || isWPA==null || isWPA==undefined || isNaN(isWPA) ){
		return 0;
	}else{
		return isWPA;
	}
}
