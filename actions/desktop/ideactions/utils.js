
function checkValidString(str) {
    if (str == undefined || str == null || str == '' || str == "null") {
        return false;
    } else {
        return true;
    }
}

function checkValidObject(obj){
	return obj && obj !== 'null' && obj !== 'undefined';
}

function getProgramDuration()
{
	if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str3MPBuy"))
		return 3;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str6MPBuy"))
		return 6;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strMPBuyNew"))
		return 1;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strLTC6"))//** MEG 6434
		return 1;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strLTC12"))//** MEG 6434
		return 1;
	else
		return 0;
}

function getProgramDurationforPreActivation()
{
	if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str3MPBuy"))
		return 3;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str6MPBuy"))
		return 6;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strMPBuyNew"))
		return 1;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strLTC6"))//** MEG 6434
		return 1;
	else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("strLTC12"))//** MEG 6434
		return 1;
	else
		return 0;
}

function setCurrencyType() {
    //if(deviceLocale=="en_US")
    //    {
    //       glbCurrency="$"
    //    }
    //    else if(deviceLocale=="fr_FR")
    //    {
    //        glbCurrency="₣";
    //    }
    glbCurrency = kony.i18n.getLocalizedString("currencySymbol");
}

function removeDollar(str) {
    if (typeof str == "number") str = str.toString();
    if (str.indexOf(glbCurrency) != -1) {
        str = str.replace(glbCurrency, "");
        //fr_CA price format changes
        str = str.replace(",",".");
    }
    return str;
}

function addDollar(str) {
    if (typeof str == "number") str = str.toString();
    if (str.indexOf(glbCurrency) == -1) {
    	//fr_CA price format changes
        if(deviceLocale == 'fr_CA'){
			str = str.replace(".",",");
			str = str + glbCurrency;
		}
		else{
			str = glbCurrency + str;
		}
		//str = glbCurrency + str;
    }
    return str;
}

function displayPriceByLocale(str) {
    if (typeof str == "number") str = str.toString();
    //fr_CA price format changes
    if(deviceLocale == 'fr_CA'){
		str = str.replace(".",",");
	}else{
		str = str.replace(",",".");
	}
    return str;
}

function convertPriceToSaveByLocale(str) {
	//fr_CA price format changes
    if(deviceLocale == 'fr_CA'){
    	if(str != "" && str != undefined && str != null)
			str = str.replace(",",".");
	}
    return str;
}
 
function ClearTangibleProductsSegments(all) {
    if (all) {

        frmDirectSaleProductList.segSKUData.removeAll();
        frmDirectSaleProductList.segProductDetails.removeAll();
        frmDirectSaleProductList.segProductDetails1.removeAll();
        frmDirectSaleProductList.segProductDetails2.removeAll();
        if (in_array(deviceLocale,Countries["CA"]))
        	frmDirectSaleProductList.lblCatType.text = getLocalizedString("strAllProduct");
        else
        	frmDirectSaleProductList.lblCatType.text = getLocalizedString("strFeatured");
        glbMembershipType = "";
        frmAddAndWeighMemberTransaction.segSKUData.removeAll();
        //frmAddAndWeighMemberTransaction.segSKUDataPOC.removeAll();
        frmAddAndWeighMemberTransaction.segProductDetails.removeAll();
        frmAddAndWeighMemberTransaction.segProductDetails1.removeAll();
        frmAddAndWeighMemberTransaction.segProductDetails2.removeAll();
        if (in_array(deviceLocale,Countries["CA"]))
        	frmAddAndWeighMemberTransaction.lblCatType.text = getLocalizedString("strAllProduct");
        else
        	frmAddAndWeighMemberTransaction.lblCatType.text = getLocalizedString("strFeatured");
        shoppingcart = [];

    } else {
        if (IsDirectSale == FlowForScreens.DirectSale || IsProductFlowFromSearch == true || IsSimpleReturn == FlowForScreens.SimpleReturn || isServiceProvider == true || IsProductFlowFromSearch == true || IsProductFlowFromCheckedIn == true) {
            frmDirectSaleProductList.segSKUData.removeAll();
            frmDirectSaleProductList.segProductDetails.removeAll();
            frmDirectSaleProductList.segProductDetails1.removeAll();
            frmDirectSaleProductList.segProductDetails2.removeAll();
            if (in_array(deviceLocale,Countries["CA"]))
        		frmDirectSaleProductList.lblCatType.text = getLocalizedString("strAllProduct");
        	else
        		frmDirectSaleProductList.lblCatType.text = getLocalizedString("strFeatured");
        } else {
            frmAddAndWeighMemberTransaction.segSKUData.removeAll();
            //frmAddAndWeighMemberTransaction.segSKUDataPOC.removeAll();
            frmAddAndWeighMemberTransaction.segProductDetails.removeAll();
            frmAddAndWeighMemberTransaction.segProductDetails1.removeAll();
            frmAddAndWeighMemberTransaction.segProductDetails2.removeAll();
            if (in_array(deviceLocale,Countries["CA"]))
        		frmAddAndWeighMemberTransaction.lblCatType.text = getLocalizedString("strAllProduct");
        	else
        		frmAddAndWeighMemberTransaction.lblCatType.text = getLocalizedString("strFeatured");
        }
    }


}
/**function to get the time diff and validate that second time must be more than first time***/
function getTimeDifferenceInMinutes(time1, time2) {
    totalminutesTime1 = getMinutesFromTime(time1, ' time diff ');
    totalminutesTime2 = getMinutesFromTime(time2, ' time diff ');

    timeDiff = totalminutesTime2 - totalminutesTime1;
    return timeDiff;
}
//calculate minutes for time  
function getMinutesFromTime(time, field_name) {
	kony.print("getMinutesFromTime===>>> "+time);
    if (time && time != "" && time != null) {
    	var part;
        //var part = time.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
		if(deviceLocale == 'fr_CA'){
			//**  MEG 6386
			if(time.indexOf('h') > 0)
			{
				time = getFormatedTimeValue(time);
			}else
			{
				kony.print("Do Nothing");
			}
			kony.print("**** time " + time);
			//** End
			part = time.match(/(\d+):(\d+)(?: )?(Matin|Après-midi)?/i);
		}else{
			part = time.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
		}
        kony.print("getMinutesFromTime part===>>> "+part);
        var hh = parseInt(part[1], 10);
        var mm = parseInt(part[2], 10);
        var ap = part[3] ? part[3] : null;
        kony.print("getMinutesFromTime ap===>>> "+ap);
        if (ap == getLocalizedString("strAM")) {
            if (hh == 12) {
                hh = 0;
            }
        }
        if (ap == getLocalizedString("strPM")) {
            if (hh != 12) {
                hh += 12;
            }
        }
        totalminutesTime = parseInt((hh * 60) + parseInt(mm));
        return totalminutesTime;
    } else {
        return 0;
    }
}


//convert time to 24 hours format from 12 hrs format --e.g 03:00 PM to  15:00
function convertTimeTo24HrsFormat(time) {
	//**  MEG 6386
	if(deviceLocale == 'fr_CA'){
		if(time.indexOf('h') > 0)
		{
			time = getFormatedTimeValue(time);
		}else
		{
			kony.print("Do Nothing");
		}
	}else
	{
		kony.print("Do Nothing");
	}
	kony.print("**** time " + time);
	//** End
    if (time && time != "" && time != null) {
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == getLocalizedString("strPM") && hours < 12) hours = hours + 12;
        if (AMPM == getLocalizedString("strAM") && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;
        return (sHours + ":" + sMinutes);
    } else {
        return "00:00";
    }

}
//convert time to 24 hours format from 12 hrs format 15:00:00  to 03:00 PM
function convertTimeTo12HrsFormat(time) {

    if (time != "00:00:00") {
        arrTemp = time.split(":");

        hours = arrTemp[0];
        minutes = arrTemp[1];

        var ampm = hours >= 12 ? getLocalizedString("strPM") : getLocalizedString("strAM");
        hours = (hours > 12) ? hours - 12 : hours;
        //hours = (hours.length == 1) ? '0'+hours : hours;
        return hours + ":" + minutes + " " + ampm;

    } else if (time == "") {
        return "";
    } else {
        return "12:00 "+getLocalizedString("strAM");
    }
}


//** Added for MEG 6386
function convertTime24HrsForCA(time)
{
	try
	{
		kony.print("****convertTimeForCA ");
 		arrTemp = time.split(":");

        hours = arrTemp[0];
        minutes = arrTemp[1];         
       	return hours + "h" + minutes;

	}catch(e)
	{	
		GlobalException(e)
	}
}
//** End

//calculate time(01:30 pm) from 810 minutes   
function getTimeFromMinutes(minutes) {

    return_hours = Math.floor(minutes / 60);
    return_minutes = minutes % 60;

    ampm = (return_hours >= 12) ? getLocalizedString("strPM") : getLocalizedString("strAM");

    if (ampm == getLocalizedString("strPM")) {
        return_hours = return_hours - 12;
    }

    return_hours = (return_hours < 10) ? "0" + return_hours : return_hours;
    return_minutes = (return_minutes < 10) ? "0" + return_minutes : return_minutes;

    return_time = return_hours + ":" + return_minutes + " " + ampm;
    return return_time;
}

//This function is used to convert enum to array
function convertEnumToArray(Enum, callback) {
    var arr = [];
    for (var prop in Enum) {
        if (Enum.hasOwnProperty(prop))
            arr.push([prop, Enum[prop]]);
    }
    callback.call(null, arr);
}

function toTitleCase(str) {
    kony.print("toTitleCase==>>" + str);
    if (str != null && str != undefined && str.trim() != '') {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    } else {
        return "";
    }
}
//function to check the meeting type is "in between" or not
function checkMeetingIsInBetween() {
    kony.print(" ---> checking meeting is in between : meeing name = " + glbCurrentMeetingValue);
    var regex = new RegExp(/between/i);
    var res = regex.test(glbCurrentMeetingValue);
    return res;
}

function updateMemberDetailsSetDefaults(updatememberdetailsObject, callback) {
    var MemberValuesFromDB = {};

    var whereClause = "where MemberID = '" + glbMemberId + "'";
    kony.print(" IN updateMemberDetailsSetDefaults===>" + JSON.stringify(updatememberdetailsObject));

    function getMembersDetailsForUpdateRequest(res) {
        kony.print(" IN getMembersDetailsForUpdateRequest===>" + JSON.stringify(res));
        //Get the member Info for this selected member
        if (res.length > 0) {
            MemberValuesFromDB.TrackerID = checkValidString(res[0].TrackerID) ? res[0].TrackerID : 0;
            MemberValuesFromDB.MemberRole = checkValidString(res[0].MemberRole) ? res[0].MemberRole : "Member";
            MemberValuesFromDB.MaintenanceMode = checkValidString(res[0].MaintenanceMode) ? res[0].MaintenanceMode : 'false';
            MemberValuesFromDB.TrackerStartDate = checkValidString(res[0].TrackerStartDate) ? res[0].TrackerStartDate : "0001-01-01T00:00:00";
            MemberValuesFromDB.FailedDate = checkValidString(res[0].FailedDate) ? res[0].FailedDate : "0001-01-01T00:00:00";
            MemberValuesFromDB.Eligible = checkValidString(res[0].Eligible) ? res[0].Eligible : 'false';
            MemberValuesFromDB.EligibleDate = checkValidString(res[0].EligibleDate) ? res[0].EligibleDate : "0001-01-01T00:00:00";
            MemberValuesFromDB.WeightCountMet = checkValidString(res[0].WeightCountMet) ? res[0].WeightCountMet : 'false';
            MemberValuesFromDB.StartDate = checkValidString(res[0].StartDate) ? res[0].StartDate : "0001-01-01T00:00:00";
            MemberValuesFromDB.IsFreshStart = checkValidString(res[0].IsFreshStart) ? res[0].IsFreshStart : 'false';
            MemberValuesFromDB.RefreshDate = checkValidString(res[0].RefreshDate) ? res[0].RefreshDate : "0001-01-01T00:00:00";
            MemberValuesFromDB.PaidLastFee = checkValidString(res[0].PaidLastFee) ? res[0].PaidLastFee : 'false';
            MemberValuesFromDB.EnterpriseID = checkValidString(res[0].EnterpriseID) ? res[0].EnterpriseID : 0;
            MemberValuesFromDB.EmailID = checkValidString(res[0].EmailID) ? res[0].EmailID : "";
            MemberValuesFromDB.LinkType = checkValidString(res[0].LinkType) ? res[0].LinkType : "None";
            MemberValuesFromDB.UserName = checkValidString(res[0].UserName) ? res[0].UserName : "";
            MemberValuesFromDB.IsLink = checkValidString(res[0].IsLink) ? res[0].IsLink : "true";
            MemberValuesFromDB.EmpID = checkValidString(res[0].EmpID) ? res[0].EmpID : glbEmployeeId;
            MemberValuesFromDB.IsPAYG = checkValidString(res[0].IsPAYG) ? res[0].IsPAYG : 'false';
            MemberValuesFromDB.BillingState = checkValidString(res[0].BillingState) ? res[0].BillingState : 0;
            MemberValuesFromDB.ShippingState = checkValidString(res[0].ShippingState) ? res[0].ShippingState : 0;
            MemberValuesFromDB.WeeksCompleted = checkValidString(res[0].WeeksCompleted) ? res[0].WeeksCompleted : 0;
            MemberValuesFromDB.SubscriptnID = checkValidString(res[0].SubscriptnID) ? res[0].SubscriptnID : 0;
            MemberValuesFromDB.ProductID = checkValidString(res[0].ProductID) ? res[0].ProductID : 0;
            MemberValuesFromDB.SessionNumber = checkValidString(res[0].SessionNumber) ? res[0].SessionNumber : 1;
            MemberValuesFromDB.RedeemedDate = checkValidString(res[0].RedeemedDate) ? res[0].RedeemedDate : "0001-01-01T00:00:00";
            MemberValuesFromDB.ReedeemedPasses = checkValidString(res[0].ReedeemedPasses) ? res[0].ReedeemedPasses : 0;
            MemberValuesFromDB.MissWeekPasses = checkValidString(res[0].MissWeekPasses) ? res[0].MissWeekPasses : 0;
            MemberValuesFromDB.IsDateRedeemed = checkValidString(res[0].IsDateRedeemed) ? res[0].IsDateRedeemed : 'true';
            MemberValuesFromDB.UserStsChngRsn = checkValidString(res[0].UserStsChngRsn) ? res[0].UserStsChngRsn : "None";
            MemberValuesFromDB.UserStsEndPrd = checkValidString(res[0].UserStsEndPrd) ? res[0].UserStsEndPrd : "0001-01-01T00:00:00";
            MemberValuesFromDB.LastAttendanceDate = checkValidString(res[0].LastAttendanceDate) ? res[0].LastAttendanceDate : glbMeetingDate;

            kony.print(" IN MemberValuesFromDB===>" + JSON.stringify(MemberValuesFromDB));

            //Save the update object from request and check if it has all necessary elements to be updated. If not, get it from database result, if that is event not there use default.
            /*Old Function*/
            memberInfo = updatememberdetailsObject;
            checkValidString(memberInfo.MemberRole) ? (updatememberdetailsObject.MemberRole = memberInfo.MemberRole) : (updatememberdetailsObject.MemberRole = MemberValuesFromDB.MemberRole);
            checkValidString(memberInfo.EnterpriseID) && memberInfo.EnterpriseID != 0 ? (updatememberdetailsObject.EnterpriseID = memberInfo.EnterpriseID) : (updatememberdetailsObject.EnterpriseID = MemberValuesFromDB.EnterpriseID);
            checkValidString(memberInfo.EmailID) ? (updatememberdetailsObject.EmailID = memberInfo.EmailID) : (updatememberdetailsObject.EmailID = MemberValuesFromDB.EmailID);
            checkValidString(memberInfo.LinkType) ? (updatememberdetailsObject.LinkType = memberInfo.LinkType) : (updatememberdetailsObject.LinkType = MemberValuesFromDB.LinkType);
            checkValidString(memberInfo.UserName) ? (updatememberdetailsObject.UserName = memberInfo.UserName) : (updatememberdetailsObject.UserName = MemberValuesFromDB.UserName);
            checkValidString(memberInfo.IsLink) && checkValidString(memberInfo.EnterpriseID) && memberInfo.EnterpriseID != "0" ? (updatememberdetailsObject.IsLink = memberInfo.IsLink) : (updatememberdetailsObject.IsLink = "true");
            checkValidString(memberInfo.IsFreshStart) ? (updatememberdetailsObject.IsFreshStart = memberInfo.IsFreshStart) : (updatememberdetailsObject.IsFreshStart = MemberValuesFromDB.IsFreshStart);
            checkValidString(memberInfo.RefreshDate) ? (updatememberdetailsObject.RefreshDate = memberInfo.RefreshDate) : (updatememberdetailsObject.RefreshDate = MemberValuesFromDB.RefreshDate);
            checkValidString(memberInfo.EmpID) ? (updatememberdetailsObject.EmpID = memberInfo.EmpID) : (updatememberdetailsObject.EmpID = MemberValuesFromDB.EmpID);
            checkValidString(memberInfo.IsPAYG) ? (updatememberdetailsObject.IsPAYG = memberInfo.IsPAYG) : (updatememberdetailsObject.IsPAYG = MemberValuesFromDB.IsPAYG);
            checkValidString(memberInfo.BillingState) ? (updatememberdetailsObject.BillingState = memberInfo.BillingState) : (updatememberdetailsObject.BillingState = MemberValuesFromDB.BillingState);
            checkValidString(memberInfo.ShippingState) ? (updatememberdetailsObject.ShippingState = memberInfo.ShippingState) : (updatememberdetailsObject.ShippingState = MemberValuesFromDB.ShippingState);
            checkValidString(memberInfo.WeeksCompleted) ? (updatememberdetailsObject.WeeksCompleted = memberInfo.WeeksCompleted) : (updatememberdetailsObject.WeeksCompleted = MemberValuesFromDB.WeeksCompleted);
            checkValidString(memberInfo.SubscriptnID) || (memberInfo.SubscriptnID === 0) ? (updatememberdetailsObject.SubscriptnID = memberInfo.SubscriptnID) : (updatememberdetailsObject.SubscriptnID = MemberValuesFromDB.SubscriptnID);
            checkValidString(memberInfo.MemberID) ? (updatememberdetailsObject.MemberID = memberInfo.MemberID) : (updatememberdetailsObject.MemberID = glbMemberId);
            checkValidString(memberInfo.ProductID) ? (updatememberdetailsObject.ProductID = memberInfo.ProductID) : (updatememberdetailsObject.ProductID = MemberValuesFromDB.ProductID);
            checkValidString(memberInfo.TrackerID) ? (updatememberdetailsObject.TrackerID = memberInfo.TrackerID) : (updatememberdetailsObject.TrackerID = MemberValuesFromDB.TrackerID);
            checkValidString(memberInfo.MaintenanceMode) || (memberInfo.MaintenanceMode === 0) ? (updatememberdetailsObject.MaintenanceMode = memberInfo.MaintenanceMode) : (updatememberdetailsObject.MaintenanceMode = MemberValuesFromDB.MaintenanceMode);
            checkValidString(memberInfo.TrackerStartDate) ? (updatememberdetailsObject.TrackerStartDate = memberInfo.TrackerStartDate) : (updatememberdetailsObject.TrackerStartDate = MemberValuesFromDB.TrackerStartDate);
            checkValidString(memberInfo.FailedDate) ? (updatememberdetailsObject.FailedDate = memberInfo.FailedDate) : (updatememberdetailsObject.FailedDate = MemberValuesFromDB.FailedDate);
            checkValidString(memberInfo.Eligible) ? (updatememberdetailsObject.Eligible = memberInfo.Eligible) : (updatememberdetailsObject.Eligible = MemberValuesFromDB.Eligible);
            checkValidString(memberInfo.EligibleDate) ? (updatememberdetailsObject.EligibleDate = memberInfo.EligibleDate) : (updatememberdetailsObject.EligibleDate = MemberValuesFromDB.EligibleDate);
            checkValidString(memberInfo.WeightCountMet) ? (updatememberdetailsObject.WeightCountMet = memberInfo.WeightCountMet) : (updatememberdetailsObject.WeightCountMet = MemberValuesFromDB.WeightCountMet);
            checkValidString(memberInfo.PaidLastFee) ? (updatememberdetailsObject.PaidLastFee = memberInfo.PaidLastFee) : (updatememberdetailsObject.PaidLastFee = MemberValuesFromDB.PaidLastFee);
            checkValidString(memberInfo.SessionNumber) ? (updatememberdetailsObject.SessionNumber = memberInfo.SessionNumber) : (updatememberdetailsObject.SessionNumber = MemberValuesFromDB.SessionNumber);
            checkValidString(memberInfo.RedeemedDate) ? (updatememberdetailsObject.RedeemedDate = memberInfo.RedeemedDate) : (updatememberdetailsObject.RedeemedDate = MemberValuesFromDB.RedeemedDate);
            checkValidString(memberInfo.ReedeemedPasses) ? (updatememberdetailsObject.ReedeemedPasses = memberInfo.ReedeemedPasses) : (updatememberdetailsObject.ReedeemedPasses = MemberValuesFromDB.ReedeemedPasses);
            checkValidString(memberInfo.MissWeekPasses) ? (updatememberdetailsObject.MissWeekPasses = memberInfo.MissWeekPasses) : (updatememberdetailsObject.MissWeekPasses = MemberValuesFromDB.MissWeekPasses);
            checkValidString(memberInfo.IsDateRedeemed) ? (updatememberdetailsObject.IsDateRedeemed = memberInfo.IsDateRedeemed) : (updatememberdetailsObject.IsDateRedeemed = MemberValuesFromDB.IsDateRedeemed);
            checkValidString(memberInfo.UserStsChngRsn) ? (updatememberdetailsObject.UserStsChngRsn = memberInfo.UserStsChngRsn) : (updatememberdetailsObject.UserStsChngRsn = MemberValuesFromDB.UserStsChngRsn);
            checkValidString(memberInfo.UserStsEndPrd) ? (updatememberdetailsObject.UserStsEndPrd = memberInfo.UserStsEndPrd) : (updatememberdetailsObject.UserStsEndPrd = MemberValuesFromDB.UserStsEndPrd);
            checkValidString(memberInfo.LastAttendanceDate) ? (updatememberdetailsObject.LastAttendanceDate = memberInfo.LastAttendanceDate) : (updatememberdetailsObject.LastAttendanceDate = MemberValuesFromDB.LastAttendanceDate);


            kony.print(" IN memberInfo===>" + JSON.stringify(memberInfo));
            kony.print(" IN updatememberdetailsObject===>" + JSON.stringify(updatememberdetailsObject));


            callback.call(null, updatememberdetailsObject);
        }
    }
    DBMemberDetailsController.find(whereClause, getMembersDetailsForUpdateRequest, eventErrorCallBack);
}

function emptyCurrentMemebrDetails() {
    CurrentMemberValues.memberId = "";
    CurrentMemberValues.currentWeight = "";
    CurrentMemberValues.memberType = "";
    CurrentMemberValues.goalWeight = "";
    CurrentMemberValues.memberStatus = "";
    CurrentMemberValues.startWeight = "";
    CurrentMemberValues.isMaintainace = "";
    CurrentMemberValues.isLifeTime = "";
    CurrentMemberValues.goalAchDate = "";
    CurrentMemberValues.subscriptionType = "";
    CurrentMemberValues.TrackerID = "";
    CurrentMemberValues.MaintenanceMode = "";
    CurrentMemberValues.TrackerStartDate = "";
    CurrentMemberValues.FailedDate = "";
    CurrentMemberValues.Eligible = "";
    CurrentMemberValues.EligibleDate = "";
    CurrentMemberValues.WeightCountMet = "";
    CurrentMemberValues.PaidLastFee = "";
}

function calculateDateDifference(d1, d2) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000));
}

function getSunday(d) {
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -7 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff + 6));
}

function checkIfUserOnlineAndLoggedIn() {
    if (checkValidString(glbLoginUsername) && checkValidString(glbLoginPassword)) {
        return true;
    } else if (checkValidString(glbLoginUsername) && checkValidString(glbEmployeeNumber)) {
        return false;
    }
}

function logoutApplication() {
    kony.print("Logout");
    glbLoginUsername = "";
    glbLoginPassword = "";
    glbLoginPopupOpen = false;
    glbEmployeeNumber = "";
    IsSyncRunning = false;
    cancel24hTimer();
    frmLogin.show();
}
//This function is used to check whether the given regnumber(memberid) is already in local db or not.
function checkIfMemberAlreadyExistsOnServer(RegNumber, memberID, callback) {
    var ValidateRegNumber_inputparam = {};
    ValidateRegNumber_inputparam["serviceID"] = Services.RegNumberValidate;
    ValidateRegNumber_inputparam["DeviceID"] = gblDeviceID;
    ValidateRegNumber_inputparam["AccessToken"] = glbSPAuthToken;
    ValidateRegNumber_inputparam["RegNumber"] = RegNumber;
    ValidateRegNumber_inputparam["MemberID"] = (isNaN(memberID)) ? 0 : memberID;
    ValidateRegNumber_inputparam["Source"] = gblSourceVal;
    ValidateRegNumber_inputparam["httpheaders"] = {};
    ValidateRegNumber_inputparam["httpconfigs"] = {};

    if (checkIfNetworkIsAvailable()) {
        GetRegNumber = Network.makeServiceCall(ValidateRegNumber_inputparam, validateRegNumberWSCallback, false);
    } else {
        //No Network -> Allow
        var data = {
            Screen: kony.application.getCurrentForm().id,
            RegNumber: RegNumber,
            MemberID: (isNaN(memberID)) ? 0 : memberID,
            Network: "Offline",
            Response: "None"
        };
        boMonitor.log("RegNumber Validation", "ValidateService", data, FlowForMonitor.RegNumber, true);
        callback.call(null, true);
    }


    function validateRegNumberWSCallback(status, validateRegNumberResponse) {
        try {
            var isValid = false;
            var data = {};
            if (status == 400) {
                kony.print(" opt status = " + validateRegNumberResponse["opstatus"] + " ==== response  = " + JSON.stringify(validateRegNumberResponse));
                if (validateRegNumberResponse["opstatus"] == 0) {

                    isValid = validateRegNumberResponse.SearchMemberResponse[0]["IsUsed"].toString() === "0";
                    data = {
                        Screen: kony.application.getCurrentForm().id,
                        RegNumber: RegNumber,
                        MemberID: (isNaN(memberID)) ? 0 : memberID,
                        Network: "Online",
                        Response: isValid
                    };

                } else {
                    data = {
                        Screen: kony.application.getCurrentForm().id,
                        RegNumber: RegNumber,
                        MemberID: (isNaN(memberID)) ? 0 : memberID,
                        Network: "Online",
                        Response: "Opstatus Not 0"
                    };
                    removeProgressView();
                    CommonErrHandler.networkError(validateBankDepositSlipNumberResponse['opstatus']);
                }
            } else {
                data = {
                    Screen: kony.application.getCurrentForm().id,
                    RegNumber: RegNumber,
                    MemberID: (isNaN(memberID)) ? 0 : memberID,
                    Network: "Online",
                    Response: "Status Not 400"
                };
                kony.print("status is other than 400");
            }
            boMonitor.log("RegNumber Validation", "ValidateService", data, FlowForMonitor.RegNumber, true);
            removeProgressView();
            kony.print("::REG NO ::isValid=" + isValid);
            callback.call(null, isValid);
        } catch (e) {
            removeProgressView();
            GlobalException(e);
        }
    }
}

//This function is used to check whether the given regnumber(memberid) is already in local db or not.
function checkIfMemberAlreadyExistsInDB(number, memberID, callback) {
    var sql = " where RegNumber= '" + number + "'";
    kony.print("MemberID---" + memberID + "--Sql statement--" + sql);
    kony.print("memberID statement--" + memberID);

    function getMemberRegNumberFromDB(response) {
        kony.print("Response----" + JSON.stringify(response));

        function regNumberSearchOnlineCallback(isValidRes) {
            kony.print("isValidRes=" + isValidRes);
            if (isValidRes || isValidRes == "true") {
                callback.call(null);
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strCannotAddMember"));
                return;
            }
        }
        if (response && response.length > 0 && response[0].MemberID != memberID) { //MEG-2865 Assumption is that there can only be one member with existing RegID
            if (isNaN(memberID) && kony.application.getCurrentForm().id == frmEnrollReturningMember.id && IsPreRegister != FlowForScreens.PreRegistered && IsWebsiteMember != FlowForScreens.Website) {
                checkIfMemberAlreadyExistsOnServer(number, memberID, regNumberSearchOnlineCallback);
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strCannotAddMember"));
                return;
            }
        } else {
            if (kony.application.getCurrentForm().id == frmEnrollReturningMember.id && checkValidString(memberID)) checkIfMemberAlreadyExistsOnServer(number, memberID, regNumberSearchOnlineCallback);
            else checkIfMemberAlreadyExistsOnServer(number, "", regNumberSearchOnlineCallback);
        }


    }
    if (checkValidString(number)) {
        DBMemberDetailsController.find(sql, getMemberRegNumberFromDB, eventErrorCallBack);
    }
}

function ToCheckIfTheWeekIsSame(LastWeignIn, CurrentDate) {
    kony.print(":::LastWeignIn=" + LastWeignIn);
    kony.print(":::CurrentDate=" + CurrentDate);
    var currDate = new Date(CurrentDate);
    var startD = new Date(LastWeignIn);
    var endD = new Date(LastWeignIn);
    var start = 0,
        end = 0;
    switch (startD.getDay()) {
        case 0:
            //Sunday
            start = 0;
            end = 6;
            break;
        case 1:
            start = 1;
            end = 6 - start;
            break;
        case 2:
            start = 2;
            end = 6 - start;
            break;
        case 3:
            start = 3;
            end = 6 - start;
            break;
        case 4:
            start = 4;
            end = 6 - start;
            break;
        case 5:
            start = 5;
            end = 6 - start;
            break;
        case 6:
            start = 6;
            end = 6 - start;
            break;

    }
    startD.setDate(startD.getDate() - start);
    endD.setDate(endD.getDate() + end);

    kony.print(":::: 1 ToCheckIfTheWeekIsSame currDate=" + currDate);
    kony.print(":::: 1 ToCheckIfTheWeekIsSame start=" + startD);
    kony.print(":::: 1 ToCheckIfTheWeekIsSame end=" + endD);
    kony.print(":::: 1 ToCheckIfTheWeekIsSame result=" + (startD <= currDate && currDate <= endD));
    return startD <= currDate && currDate <= endD;

}

function getLastWeekSaturday() {
    var curr = new Date();
    var start = 0;
    switch (curr.getDay()) {
        case 0:
            //Sunday
            start = 1;
            break;
        case 1:
            start = 2;
            break;
        case 2:
            start = 3;
            break;
        case 3:
            start = 4;
            break;
        case 4:
            start = 5;
            break;
        case 5:
            start = 6;
            break;
        case 6:
            start = 0;
            break;

    }
    return curr.setDate(curr.getDate() - start);
}

function checkIfValidDate(d) {
    if (Object.prototype.toString.call(d) === "[object Date]") {
        // it is a date
        if (isNaN(d.getTime())) { // d.valueOf() could also work
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function getLastSaturday(d) {
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 7 ? -7 : -7); // adjust when day is saturday
    return new Date(d.setDate(diff + 6));
}

//This function is deducting 5 lbs from weight and return weight in KG 
function deductWeight(weightInKg){
	var deductWeightInLbs = 5;
	var weightToDeductInKgs = com.es.weighincalculations.ConvertWeight_Pound_To_Kg(deductWeightInLbs);
	var weightAfterDeduction = weightInKg - weightToDeductInKgs;
	return weightAfterDeduction;
}


function checkForMemberInCompleteProfile(memberObj,isEditProfile,isProcess)
{
		kony.print("checkForMemberInCompleteProfile  memberObj =="+ JSON.stringify(memberObj));
		kony.print("checkForMemberInCompleteProfile  selectedMemberData =="+ JSON.stringify(selectedMemberData));
		kony.print("checkForMemberInCompleteProfile  termMemberInfo =="+ JSON.stringify(termMemberInfo));
		kony.print("checkForMemberInCompleteProfile  isEditProfile - isProcess =="+ isEditProfile + "-" + isProcess);
		
		
        if(isEditProfile)
        {
        	inCompleteFlag = (checkValidString(memberObj.FirstName.trim()) && checkValidString(memberObj.LastName.trim()) && 
                			checkValidString(memberObj.RegNumber.trim()) && checkValidString(memberObj.Gender.trim()) && 
                			checkValidString(memberObj.ShippingAddr1) && checkValidString(memberObj.ShippingState) && checkValidString(memberObj.ShippingCity) && 
					        checkValidString(memberObj.ShippingZipCode) && (memberObj.Height > 0));
        }else if(isProcess){
        	inCompleteFlag = (checkValidString(selectedMemberData.lblMPSFirstName.trim()) && checkValidString(selectedMemberData.lblMPSLastName.trim()) && 
                			checkValidString(memberObj.RegNumber.trim()) && checkValidString(selectedMemberData.Gender.trim()) && 
                			(checkValidString(memberObj.ShippingAddr1) || checkValidString(selectedMemberData.lblMPSStreet)) && 
                			(checkValidString(memberObj.ShippingState) || checkValidString(selectedMemberData.lblMPSState)) && 
                			(checkValidString(memberObj.ShippingCity) || checkValidString(selectedMemberData.lblMPSCity)) && 
					        (checkValidString(memberObj.ShippingZipCode) || checkValidString(selectedMemberData.ShippingZipCode)) &&
					        checkValidString(selectedMemberData.MembershipType) && (memberObj.Height > 0));
        }else{
        	inCompleteFlag = (checkValidString(memberObj.FirstName.trim()) && checkValidString(memberObj.LastName.trim()) && 
                			checkValidString(memberObj.RegNumber.trim()) && checkValidString(memberObj.Gender.trim()) && 
                			checkValidString(memberObj.ShippingAddr1) && checkValidString(memberObj.ShippingState) && checkValidString(memberObj.ShippingCity) && 
					        checkValidString(memberObj.ShippingZipCode) && checkValidString(memberObj.MemberType) && (memberObj.Height > 0));
        }
        return !inCompleteFlag;
}

function clearPreActivationPopupData(){
	popupPreActivation.lblMemberName.text ="";
	popupPreActivation.txtVoucherNumber.text = "";
}

function dismissHeightPopup(){
	isFromPreActivationHeight=false;
	popupHeight.dismiss();
}

//Display state popup 

function displayStatePopup(widget,anchor,sizetoanchor){
	var context = {
        "widget": widget,
        "anchor": anchor,
        "sizetoanchorwidth": sizetoanchor
    };
    popupState.setContext(context);
    popupState.show();
}

function decodeDisplayText(str){
	kony.print("IN decodeDisplayText : "+str);
	var decodeString = decodeURIComponent(str)
	kony.print("decodeString : "+decodeString);
	return decodeString;
}

function getFrenchTranslationOfMonth(mmInEng) {
    switch (mmInEng) {
    case 'FEB':
        return 'FÉV';
        break;
    case 'APR':
        return 'AVR';
        break;
    case 'MAY':
        return 'MAI';
        break;
    case 'JUL':
        return 'JUIL';
        break;
    case 'DEC':
        return 'DÉC';
        break;
    default:
        return mmInEng;
        break;
    }
}
