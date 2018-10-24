

/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of WeighDetails instances
 *   
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
 
/*  This method retrieves all the instances of the WeighDetails stored in the device and displays on frmWeighDetailsList
 *
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
seguiSearchKeyWeighDetails=null;
function getAllWeighDetails(){
	//Success callback reads the response and populates the SegmentedUI
	function getAllWeighDetailsSuccessCallback(res){
		//preparing object to be mapped to SegmentedUI
		var objectToMap = [];
		if(res.length<0){
			callAlert(getMessageTemplate("noData"),"info")
		}else{
			//Initialize global for back button feature
			gblWeighDetailsBack = getAllWeighDetails;
			for(var i in res){
				var v=res[i];
				objectToMap[i] = new Object();
				//objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
				objectToMap[i]["widgetMemberIDValue"] = kony.sync.getString(v.MemberID);
				objectToMap[i]["widgetWeighIdValue"] = kony.sync.getString(v.WeighId);
	
				//preparing primary key object to be mapped to SegmentedUI as hidden variable
				objectToMap[i]["MemberID"] = kony.sync.getString(v.MemberID);
				objectToMap[i]["WeighId"] = kony.sync.getString(v.WeighId);
				objectToMap[i]["imgArr"] = "arr.png";
			}
		}
		if(res.length!=0) {
			offsetForListView = offsetForListView + limitForListView;
		}
		else{
			isPageLimit = true;
		}

		//Set the data to the Segmented UI and display the form
		if(gblComingFromHome){
			frmWeighDetailsList.seguiList.setData(objectToMap);
			gblComingFromHome = false;
		}
		else{
			if(isPageLimit==false)
				frmWeighDetailsList.seguiList.addAll(objectToMap);
		}
		frmWeighDetailsList.show();
		//Dismiss Loading screen
		dismissSyncLoadingScreen();
	}
		//Display Loading screen
		showSyncLoadingScreen("Loading Data");		
		// Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAll ORM API
		com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAll(getAllWeighDetailsSuccessCallback, eventErrorCallBack,null,limitForListView,offsetForListView);
}
//Wrapper method for back button functionality of edit page
function getWeighDetailsbyPKFromBack(){
	getWeighDetailsbyPK(true);
}

//Wrapper method for navigation from List to Detail view
function getWeighDetailsbyPKFromList(){
	getWeighDetailsbyPK(false);
}


/*  This method retrieves an instance of WeighDetails for a given Primary Key (unique identifier) of the object and displays on frmWeighDetailsDetails
 *
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
function getWeighDetailsbyPK(fromBack){
	var getWeighDetailsbyPKObject = new com.kony.WeightWatchers.MemberSyncScope.WeighDetails ();
	// Success callback reads the response and populates the fields on frmWeighDetailsDetails
	function getWeighDetailsSuccessCallback(res){
		if(res!=null && res.length>0){
			gblWeighDetailsObject = res[0];
			frmWeighDetailsDetails.widgetDailyPtTargetValue.text = kony.sync.getString(gblWeighDetailsObject.DailyPtTarget);
			frmWeighDetailsDetails.widgetEmpIDValue.text = kony.sync.getString(gblWeighDetailsObject.EmpID);
			frmWeighDetailsDetails.widgetIsAtndgMeetingValue.text = kony.sync.getString(gblWeighDetailsObject.IsAtndgMeeting);
			frmWeighDetailsDetails.widgetMemberIDValue.text = kony.sync.getString(gblWeighDetailsObject.MemberID);
			frmWeighDetailsDetails.widgetNoWeighInValue.text = kony.sync.getString(gblWeighDetailsObject.NoWeighIn);
			frmWeighDetailsDetails.widgetManualWeighInValue.text = kony.sync.getString(gblWeighDetailsObject.ManualWeighIn);
			frmWeighDetailsDetails.widgetMeetingDateValue.text = kony.sync.getString(gblWeighDetailsObject.MeetingDate);
			frmWeighDetailsDetails.widgetMtngOccrIDValue.text = kony.sync.getString(gblWeighDetailsObject.MtngOccrID);
			frmWeighDetailsDetails.widgetMilestoneIDValue.text = kony.sync.getString(gblWeighDetailsObject.MilestoneID);
			frmWeighDetailsDetails.widgetReachedDateValue.text = kony.sync.getString(gblWeighDetailsObject.MSReachedDate);
			frmWeighDetailsDetails.widgetWeekNumberValue.text = kony.sync.getString(gblWeighDetailsObject.MSWeekNumber);
			frmWeighDetailsDetails.widgetWeighInDateValue.text = kony.sync.getString(gblWeighDetailsObject.WeighInDate);
			frmWeighDetailsDetails.widgetWeightValue.text = kony.sync.getString(gblWeighDetailsObject.Weight);
			frmWeighDetailsDetails.widgetWeighIdValue.text = kony.sync.getString(gblWeighDetailsObject.WeighId);
			frmWeighDetailsDetails.widgetWeighMSDateValue.text = kony.sync.getString(gblWeighDetailsObject.WeighMSDate);
			frmWeighDetailsDetails.show();
		}
		//Showing alert when result set is empty
		else{
			callAlert(getMessageTemplate("noData"),"info")
		}
	}
	if(fromBack==true) {
		getWeighDetailsbyPKObject.MemberID = gblWeighDetailsObject.MemberID;
		getWeighDetailsbyPKObject.WeighId = gblWeighDetailsObject.WeighId;
	}
	else {
		//Storing the primary key in global variable to be used for other ORMs
		getWeighDetailsbyPKObject.MemberID = frmWeighDetailsList.seguiList.selectedItems[0].MemberID;
		getWeighDetailsbyPKObject.WeighId = frmWeighDetailsList.seguiList.selectedItems[0].WeighId;
	}

	// Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK ORM API
getWeighDetailsbyPKObject.getAllDetailsByPK(getWeighDetailsSuccessCallback, eventErrorCallBack);
}

/* This method deletes an instance of WeighDetails identified by Primary Key (unique identifier) of the object 
 * and loads the frmWeighDetailsList with refreshed data
 *
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
function deleteByPKWeighDetails(){ 
	// Success callback deletes the entry of specified record on frmWeighDetailsDetails
	function deleteByPKWeighDetailsSuccessCallback(res) {
		callAlert(getMessageTemplate("deleteSuccess","WeighDetails"),"info")
		gblWeighDetailsObject = null;
		kony.appgen.comingFromDelete = true;
		goBackToWeighDetailsList();
	}
	// Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.deleteByByPK ORM API
	function handler(response){
	if(response==true){
		gblWeighDetailsObject.deleteByPK(deleteByPKWeighDetailsSuccessCallback, eventErrorCallBack); 
		}
	}
	callAlert(getMessageTemplate("delete","WeighDetails"),"confirmation",handler,"","YES","NO")
}


/* This method updates an instance of WeighDetails identified by Primary Key (unique identifier) of the object
 *
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
function updateByPKWeighDetails(){ 
	//Success callback that displays an alert on successful update
	function updateByPKWeighDetailsSuccessCallback(res) {
		callAlert(getMessageTemplate("updateSuccess","WeighDetails"),"info")
	}
	function updateByPKWeighDetailsErrorCallback(res){
		gblWeighDetailsObject = gblWeighDetailstempObject;
		eventErrorCallBack(res);
	}
	//storing the global object in a temporary object as backup in case the update fails
	var gblWeighDetailstempObject = kony.sync.CreateCopy(gblWeighDetailsObject);
	//Preparing an object to store the values to be updated
	gblWeighDetailsObject.DailyPtTarget = frmWeighDetailsEdit.widgetDailyPtTargetValue.text;
	gblWeighDetailsObject.EmpID = frmWeighDetailsEdit.widgetEmpIDValue.text;
	gblWeighDetailsObject.IsAtndgMeeting = frmWeighDetailsEdit.widgetIsAtndgMeetingValue.text;
	gblWeighDetailsObject.NoWeighIn = frmWeighDetailsEdit.widgetNoWeighInValue.text;
	gblWeighDetailsObject.ManualWeighIn = frmWeighDetailsEdit.widgetManualWeighInValue.text;
	gblWeighDetailsObject.MeetingDate = frmWeighDetailsEdit.widgetMeetingDateValue.text;
	gblWeighDetailsObject.MtngOccrID = frmWeighDetailsEdit.widgetMtngOccrIDValue.text;
	gblWeighDetailsObject.MilestoneID = frmWeighDetailsEdit.widgetMilestoneIDValue.text;
	gblWeighDetailsObject.MSReachedDate = frmWeighDetailsEdit.widgetReachedDateValue.text;
	gblWeighDetailsObject.MSWeekNumber = frmWeighDetailsEdit.widgetWeekNumberValue.text;
	gblWeighDetailsObject.WeighInDate = frmWeighDetailsEdit.widgetWeighInDateValue.text;
	gblWeighDetailsObject.Weight = frmWeighDetailsEdit.widgetWeightValue.text;
	gblWeighDetailsObject.WeighMSDate = frmWeighDetailsEdit.widgetWeighMSDateValue.text;


	// Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.updateByByPK ORM API
	gblWeighDetailsObject.updateByPK(updateByPKWeighDetailsSuccessCallback, updateByPKWeighDetailsErrorCallback); 
}


/*  This method navigates to Add Form of WeighDetails object after resetting the fields 
 *
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
function showAddWeighDetailsForm(){
	//Resetting the fields				
		frmWeighDetailsAdd.widgetDailyPtTargetValue.text="";
		frmWeighDetailsAdd.widgetEmpIDValue.text="";
		frmWeighDetailsAdd.widgetIsAtndgMeetingValue.text="";
		frmWeighDetailsAdd.widgetMemberIDValue.text="";
		frmWeighDetailsAdd.widgetNoWeighInValue.text="";
		frmWeighDetailsAdd.widgetManualWeighInValue.text="";
		frmWeighDetailsAdd.widgetMeetingDateValue.text="";
		frmWeighDetailsAdd.widgetMtngOccrIDValue.text="";
		frmWeighDetailsAdd.widgetMilestoneIDValue.text="";
		frmWeighDetailsAdd.widgetReachedDateValue.text="";
		frmWeighDetailsAdd.widgetWeekNumberValue.text="";
		frmWeighDetailsAdd.widgetWeighInDateValue.text="";
		frmWeighDetailsAdd.widgetWeightValue.text="";
		frmWeighDetailsAdd.widgetWeighIdValue.text="";
		frmWeighDetailsAdd.widgetWeighMSDateValue.text="";
	
	frmWeighDetailsAdd.show();
}

/*  This method navigates to Edit Form of WeighDetails object
 *
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
function showEditWeighDetailsForm(){
// Success callback reads the response and populates the fields on frmWeighDetailsEdit
	function editWeighDetailsSuccessCallback(res){
	if(res!=null && res.length>0){
		frmWeighDetailsEdit.widgetDailyPtTargetValue.text = checkUndefined(res[0].DailyPtTarget).trim();
		frmWeighDetailsEdit.widgetEmpIDValue.text = checkUndefined(res[0].EmpID).trim();
		frmWeighDetailsEdit.widgetIsAtndgMeetingValue.text = checkUndefined(res[0].IsAtndgMeeting).trim();
		frmWeighDetailsEdit.widgetNoWeighInValue.text = checkUndefined(res[0].NoWeighIn).trim();
		frmWeighDetailsEdit.widgetManualWeighInValue.text = checkUndefined(res[0].ManualWeighIn).trim();
		frmWeighDetailsEdit.widgetMeetingDateValue.text = checkUndefined(res[0].MeetingDate).trim();
		frmWeighDetailsEdit.widgetMtngOccrIDValue.text = checkUndefined(res[0].MtngOccrID).trim();
		frmWeighDetailsEdit.widgetMilestoneIDValue.text = checkUndefined(res[0].MilestoneID).trim();
		frmWeighDetailsEdit.widgetReachedDateValue.text = checkUndefined(res[0].ReachedDate).trim();
		frmWeighDetailsEdit.widgetWeekNumberValue.text = checkUndefined(res[0].WeekNumber).trim();
		frmWeighDetailsEdit.widgetWeighInDateValue.text = checkUndefined(res[0].WeighInDate).trim();
		frmWeighDetailsEdit.widgetWeightValue.text = checkUndefined(res[0].Weight).trim();
		frmWeighDetailsEdit.widgetWeighMSDateValue.text = checkUndefined(res[0].WeighMSDate).trim();
		frmWeighDetailsEdit.show();
		}
	}

		// Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getAllDetailsByPK ORM API
	gblWeighDetailsObject.getAllDetailsByPK(editWeighDetailsSuccessCallback, eventErrorCallBack);
}

/* This method creates an instance of WeighDetails
 *
 * Created On: Mon Mar 31 12:38:15 IST 2014
 * Created by: ispl_336
 */
function createWeighDetails(){
	var createWeighDetailsObject = {};
// Success callback creates a new record on frmWeighDetailsDetails	
	function createWeighDetailsSuccessCallback(res){
		callAlert(getMessageTemplate("addSuccess","WeighDetails"),"info")
	}
	createWeighDetailsObject.DailyPtTarget = frmWeighDetailsAdd.widgetDailyPtTargetValue.text;
	createWeighDetailsObject.EmpID = frmWeighDetailsAdd.widgetEmpIDValue.text;
	createWeighDetailsObject.IsAtndgMeeting = frmWeighDetailsAdd.widgetIsAtndgMeetingValue.text;
	createWeighDetailsObject.MemberID = frmWeighDetailsAdd.widgetMemberIDValue.text;
	createWeighDetailsObject.NoWeighIn = frmWeighDetailsAdd.widgetNoWeighInValue.text;
	createWeighDetailsObject.ManualWeighIn = frmWeighDetailsAdd.widgetManualWeighInValue.text;
	createWeighDetailsObject.MeetingDate = frmWeighDetailsAdd.widgetMeetingDateValue.text;
	createWeighDetailsObject.MtngOccrID = frmWeighDetailsAdd.widgetMtngOccrIDValue.text;
	createWeighDetailsObject.MilestoneID = frmWeighDetailsAdd.widgetMilestoneIDValue.text;
	createWeighDetailsObject.MSReachedDate = frmWeighDetailsAdd.widgetReachedDateValue.text;
	createWeighDetailsObject.MSWeekNumber = frmWeighDetailsAdd.widgetWeekNumberValue.text;
	createWeighDetailsObject.WeighInDate = frmWeighDetailsAdd.widgetWeighInDateValue.text;
	createWeighDetailsObject.Weight = frmWeighDetailsAdd.widgetWeightValue.text;
	createWeighDetailsObject.WeighId = frmWeighDetailsAdd.widgetWeighIdValue.text;
	createWeighDetailsObject.WeighMSDate = frmWeighDetailsAdd.widgetWeighMSDateValue.text;

	// Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create ORM API

	createWeighDetailsObject.create(createWeighDetailsSuccessCallback, eventErrorCallBack);
}



function goBackToWeighDetailsList() {
	gblComingFromHome=true;
	offsetForListView = 0;
	goBack(gblWeighDetailsBack);
}

function getAllWeighDetailsFromMenu(){
	gblComingFromHome = true;
	limitForListView = gblLimitForListView;
	offsetForListView = 0;
	isPageLimit = false;
	showSyncLoadingScreen("Loading Data");
	getAllWeighDetails();
}

function onReachEventWeighDetails(){
	if(gblWeighDetailsBack){
		gblWeighDetailsBack();
	}else{
		getAllWeighDetails();
	}
}