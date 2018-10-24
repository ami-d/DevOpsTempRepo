//Configuration Parameters
if(kony===undefined){
    kony = {};
}
if(kony.appgen===undefined){
    kony.appgen = {};
}

kony.appgen.comingFromDelete = false;

gblLimitForListView = 20; //Variable that holds the limit of records to be displayed in list view
limitForListView = gblLimitForListView;

function showObjectListForm(){
    gblComingFromHome = true;
    limitForListView = gblLimitForListView;
    offsetForListView = 0;
    isPageLimit = false;    
    showSyncLoadingScreen(kony.i18n.getLocalizedString("strSyncMsgLoading"));

    if(popupSearchLocation.segmentRecentLocations.selectedIndex[1]==0){
        //if(frmHome.seguiObjects.selectedIndex[1]==0){
        getAllLocation();
    }
}
function eventErrorCallBack(err){
    if(err!=null && err["errorMessage"]!=null) {
        kony.print(constructErrorMsg("Error",err));
    	//callAlert(constructErrorMsg("Error",err),"error");
		createExceptionDetail("Error", err);
	} else {
        kony.print(getMessageTemplate("generalError"));
		createExceptionDetail(getMessageTemplate("generalError"), err);
	}

    dismissSyncLoadingScreen();
    removeProgressView();
}
function createExceptionDetailErrorCallback(err){
    if(err!=null && err["errorMessage"]!=null)
        kony.print(constructErrorMsg("Error",err));
    //callAlert(constructErrorMsg("Error",err),"error");
    else
        kony.print(getMessageTemplate("generalError"));

    dismissSyncLoadingScreen();
    removeProgressView();
}
function setAppMenuForAppGeneration(){
    var myAppMenu = [];
    myAppMenu[0]= ["id0", "Home", "home.png", navigateToHomeForm];

    if(kony.os.deviceInfo().name=="iPhone" || kony.os.deviceInfo().name=="iPad"){
        myAppMenu[1] = ["id1", "Location", "dflt.png", getAllLocationFromMenu];
    }
    else{
        myAppMenu[1] = ["id1", "Location", "dflt.png", getAllLocationFromMenu];
    }
    kony.application.createAppMenu("defaultAppMenu", myAppMenu, "Skin Defaults", "Skin Defaults");
    kony.application.setCurrentAppMenu("defaultAppMenu");
}
function navigateToHomeForm(){
    frmHome.show();
}

function showSyncLoadingScreen(text){
    text = " " + text + " \n"; 
	kony.application.showLoadingScreen(sknBlockUI, text,constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null)
}

function dismissSyncLoadingScreen(){
    kony.application.dismissLoadingScreen();
}

function navigateToAppMenuMoreForm(){
    frmAppMenuMore.show();
}

function showObjectListFormFromAppMenu(){
}

function searchSegment(mySegUi,searchString,key,mapObject, criteria){
    var myObj = [];
    var j=0;
    if(criteria == null) criteria = "startsWith";
    if (null == mapObject) return;
    if (null == mapObject[0]) return;
    if (null == mapObject[0][key]) return;
    if (searchString == null) searchString = "";
    searchString = searchString + "";
	
    if(kony.string.equalsIgnoreCase(criteria,"endsWith")){
        for(i in mapObject){
            if(kony.string.endsWith(mapObject[i][key] + "", searchString, true)){
                myObj[j] = mapObject[i];
                j++;
            }
        }
    }
    else if(kony.string.equalsIgnoreCase(criteria,"contains")){
        searchString = kony.string.lower(searchString + "");
        for(i in mapObject){
            var searchObject = kony.string.lower(mapObject[i][key] + "");
            if(kony.string.find(searchObject,searchString)!=null){
                myObj[j] = mapObject[i];
                j++;
            }
        }
    }
    else if(kony.string.equalsIgnoreCase(criteria,"startsWith")){
        for(i in mapObject){
            if(kony.string.startsWith(mapObject[i][key] + "", searchString, true)){
                myObj[j] = mapObject[i];
                j++;
            }
        }
    }


    mySegUi.setData(myObj);
}

//Function for checking undefined values
function checkUndefined(val){
	if(val == 0)
		return val;
    else if(val==null || val+""=="undefined" || val=="" || val == undefined || val == NaN)
        return "";
    else
        return val+"";	
}

// Function check for undefined fields value
function checkForUndefinedVal(val){
	if(val != undefined && val != null){
		return val;
	}
	return "";
}

//Function to open URL
function callURL(url){
    if(kony.string.startsWith(url,"http://",true) || kony.string.startsWith(url,"https://",true)){
        kony.application.openURL(url)
    }
    else{
        kony.application.openURL("http://"+url)
    }
	
}

//common message function
function getMessageTemplate(operation,entityName){
    if(entityName == null)
        entityName=null
    //delete message template
    if(operation =="delete")
        return ("Are you sure you want to delete "+entityName+" ?")
    if(operation == "deleteSuccess")
        return (entityName + " deleted successfully.")
    if(operation == "deleteFailure")
	
        //update message template
        return ("Some problem occurred while deleting "+entityName)
    if(operation == "updateSuccess")
        return (entityName + " updated successfully.")
    if(operation == "updateFailure")
        return ("Some problem occurred while updating "+entityName)
		
    //add message template
    if(operation == "addSuccess")
        return(entityName + " added successfully.")
    if(operation == "addFailure")
        return("Some problem occurred while adding "+entityName)
		
    //sync message template
    if(operation == "syncSuccess")
        return("Sync Success")
    if(operation == "syncError")
        return("Sync Error")
    if(operation == "syncInitSuccess")
        return ("Sync Init Success")
    if(operation == "syncInitFailure")
        return ("Sync Init Failure")
    if(operation == "syncResetSuccess")
        return("Sync reset successfully")
    if(operation == "syncResetFailure")
        return("Sync reset failed")
    if(operation == "rollbackSuccess")
        return("All recent changes rollbacked successfully")
    if(operation == "rollbackFailure")
        return("Problem occurred in rollbacking recent changes")
    if(operation == "syncStopFailure")
        return("Stopping Sky Sync Failure")
    if(operation == "syncSuccessFailure")
        return("Sync Stop Success")
		
    //settings message template
    if(operation == "settingsSaveSuccess")
        return("Settings saved successfully.")
    if(operation == "settingsSaveFailure")
        return("Some problem occured while saving settings.")
		
    //misc message template
    if(operation =="noData")
        //return("No Data To Display")
        if(operation == "generalError")
            return("Some error occurred while doing requested operation")
	
}

function callAlert(msg,type,alertHandler,title,yesLabel,noLabel) {

    var numType;
    var pspConf = {};
    var basicConf;
	
	          

    if(yesLabel==null) yesLabel = kony.i18n.getLocalizedString("strLblOk")
    if(noLabel==null)  noLabel = kony.i18n.getLocalizedString("btnCancel")
    if(alertHandler == null) alertHandler = null;
    if(title == null) title = ""
    if(type=="info"){
        numType = constants.ALERT_TYPE_INFO;
    }
    if(type=="error"){
        numType = constants.ALERT_TYPE_ERROR;
    }
    if(type=="confirmation"){
        numType = constants.ALERT_TYPE_CONFIRMATION; 
    }
    basicConf = {
        message: msg,
        alertType:numType ,
        alertTitle: title ,
        yesLabel:yesLabel,
        noLabel: noLabel, 
        alertHandler: alertHandler
    };
    kony.ui.Alert(basicConf,pspConf);
}


function convertDateToYYYYMMDD(inDate,inChar){
    // inDate format should be: DD/MM/YYYY	
    var outDate = "";
    if(inDate != null && inDate != "0"){
        var dateTab = inDate.split(inChar)
        outDate = dateTab[2] + dateTab[1] + dateTab[0]; 
    }
    return outDate;
}


/*
************************************************************************************************
This function is used to convert date yyyymmdd format of ddmmyyy,mmddyyyy,yyyymmdd with required
spliter.
input parameters are :
	inDate: date in yyyymmdd
	dateFormat : ddmmyyy,mmddyyyy,yyyymmdd (one of these)
	spliter : -,/ which ever needed.
************************************************************************************************
--*/

function formatDateFromSky( inDate, dateFormat, spliter ){
    var outDate = "";
    if((inDate != null && inDate != "0")){
        var year = kony.string.sub(inDate, 0, 3);
        var month = kony.string.sub(inDate, 4, 5);
        var day = kony.string.sub(inDate, 6, 7);
        if((dateFormat == "ddmmyyyy")){
            outDate = day + spliter + month + spliter + year;
        }else if((dateFormat == "mmddyyyy")){
            outDate = month + spliter + day + spliter + year;
        }else if((dateFormat == "yyyymmdd")){
            outDate = year + spliter + month + spliter + day;
        }
    }
    return outDate;
}

/*
***********************************************************************
*	Name    : formatToSetDate
*	Purpose : This function will change the format of given date as table to set calendar widget
*   Params  : date
***********************************************************************
--*/

function formatToSetDate( givendate ){
    var calWidgetTab = [  ];
    if(givendate != null && givendate != ""){
        calWidgetTab = (givendate).split ("/");    	
        if((kony.os.deviceInfo().name == "blackberry")){
            var mmm = kony.os.toNumber(calWidgetTab[ kony.decrement(2) ]);
            var ddd = kony.os.toNumber(calWidgetTab[ kony.decrement(1) ]);
            var yyy = kony.os.toNumber(calWidgetTab[ kony.decrement(3) ]);
            var temp = [  ];
            temp = [ mmm, ddd, yyy ];
            return temp;
        }else{
            var mmm = calWidgetTab[ kony.decrement(2) ];
            var ddd = calWidgetTab[ kony.decrement(1) ];
            var yyy = calWidgetTab[ kony.decrement(3) ];
            calWidgetTab = [ ddd , mmm , yyy ];
            return calWidgetTab;
        }
    }
    return givendate;
}

function goBack(expr){
    expr();
}
//Function to build error message from error code and message
function constructErrorMsg(operation,errorArguments){
    var errMsg = "";
    if(!kony.sync.isNull(operation)){
        errMsg = errMsg.concat(operation);		
        if(!kony.sync.isNull(errorArguments)){			
            if(!kony.sync.isNull(errorArguments.errorCode) && !kony.sync.isNull(errorArguments.errorMessage)){
                errMsg = errMsg.concat("\n");
                errMsg = errMsg.concat("Error Code : ");
                errMsg = errMsg.concat(errorArguments.errorCode);		
                errMsg = errMsg.concat("\n");
                errMsg = errMsg.concat("Error Message : ");
                errMsg = errMsg.concat(errorArguments.errorMessage);
                if(!kony.sync.isNull(errorArguments.errorInfo)){
                    errMsg = errMsg.concat("\n");
                    errMsg = errMsg.concat("Error Info : ");
                    errMsg = errMsg.concat(JSON.stringify(errorArguments.errorInfo, null, " "));
                }
            }	
        }
    }
    return errMsg;
}



//Function to retrieve age from date of birth
//** Updated function definition on 14/03/2017 For MEG - 6340
//** Calculation of age from DOB
function getAgeFromDob(DOB) {
    try {
    	kony.print("getAgeFromDob")
        if (checkValidString(DOB)) {
        
            
            var frmtDOB = supportTime(new Date(DOB), "", "yyyy-mm-ddT00:00:00");
            kony.print("frmtDOB -- " + frmtDOB);
           // kony.print("frmtDOB.split(T)[0] " + frmtDOB.split("T")[0]);
           // kony.print("frmtDOB.split(T)[0].split " + JSON.stringify(frmtDOB.split("T")[0].split("-")));
            var splitedDOB = frmtDOB.split("T")[0].split("-");
            var agevalue = com.es.weighincalculations.CalculateAge(splitedDOB[1], splitedDOB[2], splitedDOB[0]);
            kony.print("agevalue -- " + agevalue)
            
            return agevalue;
        } else {
            kony.print("getAgeFromDob Do Nothing");
        }
        
    } catch (err) {
        GlobalException(err);
    }
}
//** End

// START functions for remove duplicate results from offline and online search
function getRegistrationIds(offlineMemberRes){
    var regIds = [];
    try{
        for(i in offlineMemberRes){
            regIds.push(offlineMemberRes[i]["RegistrationNumber"]);
        }
        return regIds;
    }
    catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
    
}

function removeDuplicateResult(offlineMemberRes,onlineMemberRes){
    var offlineRegIds = getRegistrationIds(offlineMemberRes);
    try{
        for(k in onlineMemberRes){
            if(!in_array(onlineMemberRes[k]["RegistrationNumber"],offlineRegIds))
            {
                offlineMemberRes.push(onlineMemberRes[k]);
            }
        }
        return offlineMemberRes;
    }
    catch(e){
        GlobalException(e);
    }
}

function in_array(needle,offlineRegIds) {
    try{
        for(var i = 0, l = offlineRegIds.length; i < l; i++) {
            if(offlineRegIds[i] == needle) {
                return true;
            }
        }
        return false;
    }
    catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
    
}

function checkIfNetworkIsAvailable()
{
	var isNWAvailable =  kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
	kony.print("Network availability : " + isNWAvailable)
	return isNWAvailable;
}
// END functions for remove duplicate results from offline and online search

// display selected location on home screen page


function displayLocationTitleInHeader(){
	hboxHomeScreen.lblLocationValue.text = glbLocationTitle;
	hboxHomeScreen.lblSuperVisorName.text = glbUserName;
	//clearHomeScreenPaymentData();
	
	if(in_array(deviceLocale,Countries["US"]) && !IsNoMeetingSelected && checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true")){
    	hboxHomeScreenHeader.vboxMPActivate.isVisible = true;
	} else {
		hboxHomeScreenHeader.vboxMPActivate.isVisible = false;
	}
}

function insertLastSyncTime(isSuccess){
    var tempFlag = (isSuccess)?1:0;
    var whereClause = "where isSyncSuccess ="+tempFlag+" and LocationID="+glbLocationID;
    kony.print("InsertLastSyncTime whereClause == "+whereClause);
    function insertLastSyncTimeSuccCallback(res){
        if(res.length > 0){
            var updatedSyncLookupObj = {
                "isSyncSuccess":(isSuccess)?true:false,
                "updatedLast":supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS")
            }
            kony.print("Updated SyncObj==="+JSON.stringify(updatedSyncLookupObj));
            function updateLastSyncDataSuccCallback(res){
                kony.print(getMessageTemplate("addSuccess","Sync lookup"),"info");
            }
            com.kony.WeightWatchers.LookUpTables.SyncLookUp.update(whereClause,updatedSyncLookupObj,updateLastSyncDataSuccCallback,eventErrorCallBack,false);
        }
        else{
            var syncLookupObj = {
                "isSyncSuccess":(isSuccess)?true:false,
                "updatedLast":supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
                "LocationID":glbLocationID
            }
            kony.print("SyncObj==="+JSON.stringify(syncLookupObj));
            function insertLastSyncDataSuccCallback(res){
                kony.print(getMessageTemplate("addSuccess","Sync lookup"),"info");
            }
            com.kony.WeightWatchers.LookUpTables.SyncLookUp.create(syncLookupObj,insertLastSyncDataSuccCallback,eventErrorCallBack,false);
			
        }
        
        
    }
	
    com.kony.WeightWatchers.LookUpTables.SyncLookUp.find(whereClause,insertLastSyncTimeSuccCallback,eventErrorCallBack,false)
 }

function checkForLastUpdatedTime(isFromForeground){
	var whereClause = "where 1=1 order by updatedLast DESC limit 0,1";
	function checkForLastUpdatedTimeSuccCallback(res){
		if(res.length > 0){
			kony.print("synclookup data"+JSON.stringify(res));
			var LastDateVal = kony.sync.getString(res[0]["updatedLast"]);
			var first = LastDateVal.split("T");
			var second = first[0].split("-");
			var third = first[1].split(":");
			var currentDate = new Date();
			var updatedate= new Date(second[0], second[1]-1, second[2], third[0], third[1], third[2]);
			var hourDiff = Math.round((currentDate - updatedate)/(1000*3600));
			kony.print("Hour diff =="+hourDiff+"======res[0]syn"+res[0]["isSyncSuccess"]);
			if(hourDiff >= "24" && res[0]["isSyncSuccess"])
			{
				kony.print("in true");
				if(checkForLastUpdatedTime){
					alertForMessages(kony.i18n.getLocalizedString('strMsgSync24hr'));
					if(isFromForeground){
						insertLastSyncTime(false);
					}
				}
			}
			else{
				kony.print("in else");
			}
			
		}
	}
	com.kony.WeightWatchers.LookUpTables.SyncLookUp.find(whereClause,checkForLastUpdatedTimeSuccCallback,eventErrorCallBack)
}

function getLastSyncDateBeforesyncStartSession(){
	var tempFlag = 1;
    var whereClause = "where isSyncSuccess ="+tempFlag+" and LocationID="+glbLocationID;
    kony.print("getLastSyncDateBeforesyncStartSession whereClause == "+whereClause);
    function getLastSyncDateBeforesyncStartSession(res){
    	kony.print("getLastSyncDateBeforesyncStartSession data: " + JSON.stringify(res));
        if(res.length > 0){
			glbLastSyncDate = kony.sync.getString(res[0]["updatedLast"]);
			var temp = glbLastSyncDate.split('T');
			var temp1 = temp[0].split("-");
			var temp2 = temp[1].split(":");
			var d = new Date(temp1[0], parseInt(temp1[1] - 1), temp1[2], temp2[0], temp2[1],temp2[2]);
			kony.print("BEFORE getLastSyncDateBeforesyncStartSession: " + glbLastSyncDate);
			kony.print("d: " + d);
			glbLastSyncDate = d.toISOString().replace('Z', '');
        }
        else{
        	glbLastSyncDate = "";
        }
        kony.print("AFTER getLastSyncDateBeforesyncStartSession: " + glbLastSyncDate);
        removeProgressView();
        boAuthentication.issueSessionViaWSForSync();//Prateek: generate token before sync to ensure token validity
        //syncStartSession(); //Added by Chirag Chauhan for Incremental Download
    }
    com.kony.WeightWatchers.LookUpTables.SyncLookUp.find(whereClause,getLastSyncDateBeforesyncStartSession,eventErrorCallBack);
}

//Updated by Ami- MEG-2722
function bindAddress(add1,add2,city,state,zip){
	var address = "";
	if(add1!= undefined && add1 != "" && add1!=null){
		address += add1;
	}
	if(add2 != undefined && add2 != "" && add2!=null){
		address += ","+add2;
	}
	if(city != undefined && city != "" && city !=null){
		address += ","+city;
	}
	if(state != undefined && state != "" && state!=null){
		address += ","+state;
	}
	if(zip != undefined && zip != "" && zip!=null){
		address += "-"+zip;
	}
	   		kony.print("value of address==="+address);
	
	address= address.replace(/,\s*$/, '');
		kony.print("value of address==="+address);
	return address;
	
}
function returnWeeksDiff(startDate)
{
	if(startDate != undefined && startDate != null && startDate != ""){
		var d1 = new Date(startDate)
   		kony.print("value of dateone==="+d1);
   		var d2 = new Date();
   		kony.print("value of dateTwo==="+d2);
   		var days = Math.round((d2-d1)/(1000*60*60*24).toFixed(2));
   		kony.print("value of dateTwo==="+days);
   		var weeks = Math.floor(days/7);
   		return weeks;
	}
	return 0;
   
}

function returnDateAfterWeeksCompleted(sDate,noOfWeeks)
{
	 	kony.print("returnLastTwoWeeks="+noOfWeeks);
	var currentDate=new Date(sDate);
	currentDate.setDate(currentDate.getDate() - currentDate.getDay() + (noOfWeeks*7));
 	kony.print("currentDate="+currentDate);
 	return currentDate;
}


function returnWeeksDates(lastWeighInDate)
{
 if(lastWeighInDate != undefined && lastWeighInDate != null && lastWeighInDate != ""){

// Get the previous Sunday
  	var sunday = new Date();
	sunday.setDate(sunday.getDate() - sunday.getDay());
	
	var lastWeighInWeek=startAndEndOfWeek(lastWeighInDate);
	kony.print("sunday ==="+sunday);
	kony.print("lastWeighInWeek ==="+lastWeighInWeek);
	var missedWeekData=[];
	//missedWeekData.push(lastWeighInWeek);
	while(startAndEndOfWeek(lastWeighInWeek)<=sunday)
	{
		missedWeekData.push(lastWeighInWeek);
		lastWeighInWeek=startAndEndOfWeek(lastWeighInWeek);	
	}
	kony.print("missedWeekData data==="+missedWeekData);
	return missedWeekData;
 }
 return 0;
 
}

// return an array of date objects for start (monday)
// and end (sunday) of week based on supplied 
// date object or current date
function startAndEndOfWeek(date) {

  // If no date object supplied, use current date
  // Copy date so don't modify supplied date
  var now = date? new Date(date) : new Date();
	
  // set time to some convenient value
  now.setHours(0,0,0,0);

  // Get next Sunday
  var nextweekStartDay = new Date(now);
  nextweekStartDay.setDate(nextweekStartDay.getDate() - nextweekStartDay.getDay() + 7);
  // Return array of date objects
  return nextweekStartDay;
}

//function on done goalweight Editing
function onDoneGoalWeightEditing(){    
    if(frmAddIndividulaMember.txtGoalWeight.text != "")
    {
        var rndWeight = parseFloat(frmAddIndividulaMember.txtGoalWeight.text);
        frmAddIndividulaMember.txtGoalWeight.text = rndWeight.toFixed(1); //parseFloat
    }
    else
    {
        frmAddIndividulaMember.txtGoalWeight.text = "0.0";
    }
} 

//function on done startweight Editing
function onDoneStartWeightEditing(){
	if(frmAddIndividulaMember.txtStartWeight.text != "")
    {
        var rndWeight = parseFloat(frmAddIndividulaMember.txtStartWeight.text);
        frmAddIndividulaMember.txtStartWeight.text = rndWeight.toFixed(1); //parseFloat
    }
    else
    {
        frmAddIndividulaMember.txtStartWeight.text = "0.0";
    }
} 

function onDoneEditingBatchStartWeight(){
	if(frmBatchAddMember.txtStartWeight.text != "")
    {
        var rndWeight = parseFloat(frmBatchAddMember.txtStartWeight.text);
        frmBatchAddMember.txtStartWeight.text = rndWeight.toFixed(1); //parseFloat
    }
    else
    {
        frmBatchAddMember.txtStartWeight.text = "0.0";
    }

}

/*
	function isValidExpriyDate 
	inputparam: date
	To check valid expiry date for monthly pass in online mode
	return true or false
*/

function isValidExpriyDate(expirydate){
	if(checkValidString(expirydate)){
		var Formatteddate = new Date(formattedDate(expirydate));
		var d = new Date();
		var todayDate = new Date(d.getFullYear(),d.getMonth(),d.getDate());
		kony.print(todayDate+"----->+++++++"+Formatteddate);
		if(todayDate > Formatteddate){
		   return false;
		}
		else{
		  return true;
		}
		
	}
	return false;
}

/*
	function getMPAndDateInSixDigitFormate 
	inputparam: Monthlypass and date 
	it will merge online expiration date with existing MP pass
	return M+8+6
*/
function getMPAndDateInSixDigitFormate(MpPass,str)
{
	try
	{
		if(checkValidString(str))
		{
			var d = str.split("T");
			var d1 = d[0].split("-");
			var finaldate;
			
    		if(deviceLocale=="fr_FR")
    		{
    			finaldate = d1[2]+d1[1]+d1[0].substring(2,4);
    		}
    		else // if(deviceLocale=="en_US"  || deviceLocale=="en_CA")
    		{
    			finaldate = d1[1]+d1[2]+d1[0].substring(2,4);
    		}
			var finalmp = MpPass.substring(0,9)+finaldate;
			kony.print("finalmp---"+finalmp);
			return finalmp;
		}
	}
	catch (e) 
	{
		GlobalException(e);
	}
}


/*
	function getMPAnd3MPWithExpiry 
	inputparam: Monthlypass and Pass 1: MP and 3: 3MP  
	it will return MP with future expiry date based on pass type
	return M+8+6
*/
function getMPAnd3MPWithExpiry__(MpPass,pass){
	try{
		if(checkValidString(MpPass))
		{
			var expdate;
			expdate = getDateAfterXMonths(pass);
			/*if(pass == "1")
			{
				expdate = getDateAfterOneMonth();
			}
			else if(pass == "3")
			{
				expdate = getDateAfterThreeMonth();
			}
			else if(pass == "6") //Added For MEGCA-301
			{
				expdate = getDateAfterSixMonth();
			}*/
			var dateData = expdate.split("/");
			var finalmp =  MpPass.substring(0,9)+dateData[0]+dateData[1]+dateData[2].substring(2,4);
			return finalmp;
		}
	}
	catch (e) {
	
	}
}

function getMPAnd3MPWithExpiry(MpPass,value){
	try{
		if(checkValidString(MpPass))
		{
			var pass;
			var expdate;
			if(value == kony.i18n.getLocalizedString("strMPBuyNew") || value == kony.i18n.getLocalizedString("strLTC6") || value == '1'){
				pass = 1;
			}else if(value == kony.i18n.getLocalizedString("str3MPBuy") || value == '3'){
				pass = 3;
			}else if(value == kony.i18n.getLocalizedString("str6MPBuy") || value == '6'){
				pass = 6;
			}
			
			expdate = getDateAfterXMonths(pass);
			
			var dateData = expdate.split("/");
			var finalmp =  MpPass.substring(0,9)+dateData[0]+dateData[1]+dateData[2].substring(2,4);
			return finalmp;
		}
	}
	catch (e) {
	
	}
}


/*
	function validExpiryDate 
	inputparam:validate expiry date which entered in UI with MP pass  
	return true or false
*/
function validExpiryDate(mppass)
{
	try{
		kony.print("mppass==="+mppass);
		var tmp =mppass.slice(-6);
		kony.print("tmp==="+tmp);
		if(!isNaN(tmp))
		{
	        if(!checkForCorrectDate(tmp))
	        {
	            return false;
	        }	
	        var strdate = tmp.substring(0, 2) + "/" + tmp.substring(2, 4) + "/" + tmp.substring(4, 6);
	        kony.print("one==="+strdate);
	        var expirydate = new Date(strdate);
	        kony.print("Two==="+expirydate);
	        if(expirydate == "Invalid Date")
	        {
	            return false;
	        }
	        expirydate = changeDateFormatTo(expirydate);
	        kony.print("thrree expirydate==="+expirydate);
	        var currentdate = new Date();
	    	currentdate = changeDateFormatTo(currentdate);
	        kony.print("thrree currentdate==="+currentdate);
	        //alert(currentdate);
	        if(Date.parse(expirydate) >= Date.parse(currentdate))
	        {
	            return true;
	        }
	    }
	    return false;
	}
	catch (e) 
	{
		GlobalException(e);	
	}
}

/*
 *  Idle time out
 *  Function registerForIdleTimeout
 *  Param-1 time in minute 
 *  Param-2 Callback method
 */
 
function registerForIdleTimeout ()
{	
	kony.application.registerForIdleTimeout(idealTimeOut, LoadHomeScreen);
}

function LoadHomeScreen()
{
	frmLogin.show();
}

/* Function clearSkuTextData
 * clear sku text data in text box on form preshow event
 */
function clearSkuTextData()
{
	frmAddAndWeighMemberTransaction.txtSearchProduct.text = "";
}

/*
	function validExpiryDate20WeekPass 
	inputparam:validate expiry date which entered in UI with 20 week pass  
	return true or false
*/
function validExpiryDate20WeekPass(TwentyWeekPass,is20WeekBuyNew)
{
	try{
		kony.print("20WeekPass==="+TwentyWeekPass);
		var tmp =TwentyWeekPass.slice(-6);
		kony.print("tmp==="+tmp);
		
		if(!isNaN(tmp))
		{
			if(!checkForCorrectDate(tmp))
	        {
	            return false;
	        }	
	        var inputDate = tmp.substring(0, 2) + "/" + tmp.substring(2, 4) + "/" + tmp.substring(4, 6);
	        inputDate = new Date(inputDate);
	        if(inputDate == "Invalid Date")
	        {
	            return false;
	        }
	        inputDate = changeDateFormatTo(inputDate);
	        kony.print("inputDate==="+inputDate);
	        
	        var expiryDate = calculateWeeks(new Date(), 19);
			kony.print("20WeekPass Expiry Date==="+expiryDate);
	        expiryDate = changeDateFormatTo(expiryDate);
	        kony.print("New expirydate==="+expiryDate);
	        var currentdate = new Date();
	    	currentdate = changeDateFormatTo(currentdate);
	        kony.print("urrentdate==="+currentdate);
	        var weekFirstLastDate = getSaturdayOfWeek(expiryDate,1);
	        kony.print("IS weekFirstLastDate===>"+weekFirstLastDate);
	        var weekFirstLastDateArray = weekFirstLastDate.split("|");
	        var firstDayOfWeek = weekFirstLastDateArray[0];
	        kony.print("IS firstDayOfWeek===>"+firstDayOfWeek);
	        var LastDayOfWeek = weekFirstLastDateArray[1];
	        kony.print("IS LastDayOfWeek===>"+LastDayOfWeek);

			if(is20WeekBuyNew){
				if(Date.parse(inputDate) >= Date.parse(firstDayOfWeek) && Date.parse(inputDate) <= Date.parse(LastDayOfWeek)) // allows user to enter for whole 20th week
		        {
		            return true;
		        }
			} else { // for redeem check for date greater then current and less than saturday of 20th week 
			    if(Date.parse(inputDate) > Date.parse(currentdate) && Date.parse(inputDate) <= Date.parse(LastDayOfWeek)) {
	        		return true;
	        	}
			}
	    }
	    return false;
	}
	catch (e) 
	{
		GlobalException(e);	
	}
}


function convertArrayToString(list) {
 var resultString = "";
 _.each(list, function(item) {
    resultString += "'" + item + "',";
 })
 return resultString.substr(0,resultString.length-1);
}

// Update PreActivation set IsCurrentSyncData= false MEG-5593
function updatePreActivationAfterSync(){
	
	var wcs = "where ActivationStatus='true' ";
	
	var updateObj = {"IsCurrentSyncData":"false"};
	
	function updateFlagPreActSuccessCallback(res){
		kony.print("PreActivation updated successfully")
	}
	
	DBPreActivationController.update(wcs, updateObj, updateFlagPreActSuccessCallback, eventErrorCallBack, false);
	
}


function getLastSunday(d) {
	  var t = new Date(d);
	  t.setDate(t.getDate() - t.getDay());
	  return t;
}

function getWeekNumber( b,isSplit ) {

	kony.print("::getWeek::---"+b);
    var b = b.split('T')[0];
	var dt = b.split('-');
	b = new Date(dt[0],parseInt(dt[1])-1,dt[2]);
    b= getLastSunday(b); 
  //Get 1 day in milliseconds

	var a = new Date(1800,0,5);

	var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    
	// Discard the time and time-zone information.

	var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
		
	var result =  Math.floor((utc2 - utc1) / _MS_PER_DAY);
	return Math.round(result/7)+1;
}

function setDefaultDataForMemberAndWeight(outputparams){
	kony.print("::6194::outputparams::"+JSON.stringify(outputparams));
	if(outputparams && outputparams.currentScope && outputparams.currentScope == 'MemberSyncScope'){
		var FailedRowMemberIDs = [];
		var FailedRowWeighMemberIDs = [];
		
		if(outputparams.uploadcontext && outputparams.uploadcontext.failedrowinfo && outputparams.uploadcontext.failedrowinfo.length > 0){
			var FailedRowData = outputparams.uploadcontext.failedrowinfo;
			
			_.each(FailedRowData,function(obj){
				if(obj.type == "MemberDetails" && !in_array(obj.key.MemberID,FailedRowMemberIDs)){
					FailedRowMemberIDs.push(obj.key.MemberID.toString());
				}
				if(obj.type == "WeighDetails" && !in_array(obj.key.MemberID,FailedRowWeighMemberIDs)){
					FailedRowWeighMemberIDs.push(obj.key.MemberID.toString());
				}
			})
		}
		
		kony.print("::sync::inside one");
		if(outputparams.uploadRequest && outputparams.uploadRequest.UploadRequest){
			kony.print("::sync::inside two");
			var resultdata = JSON.parse(outputparams.uploadRequest.UploadRequest);
			var regData =[];
			var WeighMemberIDs = [];
			var WeighWeekNumber = [];
			_.each(resultdata.d.results,function(obj){
				if(obj.metadata.type == "MemberDetails"){
					if(obj.RegNumber && !in_array(obj.MemberID, FailedRowMemberIDs)){
						if(!in_array(obj.RegNumber,regData)){
							regData.push(obj.RegNumber.toString());
						}
					}
				}
				
				if(obj.metadata.type == "WeighDetails"){
					if(obj.MemberID && !in_array(obj.MemberID, FailedRowWeighMemberIDs)){
						if(!in_array(obj.MemberID,WeighMemberIDs)){
							WeighMemberIDs.push(obj.MemberID.toString());
							
							if(!in_array(obj.WeekNumber,WeighWeekNumber))
							WeighWeekNumber.push(obj.WeekNumber.toString());
						}
					}
				}
				
			});
			
			var oldPksData = outputparams.uploadcontext.objectlevelinfo.WeighDetails.reconciledprimarykeys;
			var newPk = [];
			if(oldPksData && oldPksData.length > 0){
				_.each(oldPksData,function(obj){
					newPk.push(obj.MemberID.newpk);
				})
				WeighMemberIDs = _.union(WeighMemberIDs,newPk);
				kony.print("::After Union PK::"+JSON.stringify(WeighMemberIDs));
			}
			 
			
			kony.print("::sync::inside three::RegData::"+JSON.stringify(regData));
			kony.print("::sync::inside three::WeighMemberIDs::"+JSON.stringify(WeighMemberIDs));
			kony.print("::sync::inside three::WeighWeekNumber::"+JSON.stringify(WeighWeekNumber));
			boEnrollMember.setDefualtDataForMember(regData,WeighMemberIDs,WeighWeekNumber);
		}
		
		
	}
}

function getSubkeyForLTC(MemberRes){
	if(MemberRes.PlanType && MemberRes.PlanType == 'LTC'){
		return 'LTC-'+MemberRes.CommitmentDuration;
	}
}

function getMonthsValue(key){
	kony.print("::Month:: key::"+key+"::deviceLocale:::"+deviceLocale);
	var monthsFrenchToEnglish ={'janvier':'January',
 							'février':'February',
							'mars':'March',
							'avril':'April',
							'mai':'May',
							'juin':'June',
							'juillet':'July',
							'août':'August',
							'septembre':'September',
							'octobre':'October',
 							'novembre':'November',
 							'décembre':'December'};
	
	if(deviceLocale == "fr_CA"){
		return monthsFrenchToEnglish[key];
	}
	else{
		return key;
	}	
}

