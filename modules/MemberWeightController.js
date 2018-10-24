/**
 *  Add member data to the MemberWeight Table from the json data
 * @returns {} 
 */
function addMemberWeightData(){
    var MemberWtDetailObject = new com.kony.WeightWatchers.WeightWatchers.MemberWeight();
    //alert("Entering addProductData")
    function createMemberWtSuccessCallback(res){
        //callAlert(getMessageTemplate("addSuccess","ProductDatail"),"info")
        kony.print("MemberWt Success call back")
    }
	
    var jsonData = JSON.parse(memberWtData);
    kony.print(" MemberWt 1:"+jsonData);
    kony.print(" MemberWt 2:"+jsonData.memberWtOb);
    kony.print(" MemberWt 3:"+jsonData.memberWtOb.length);
    for (var i = 0; i < jsonData.memberWtOb.length; i++) {
        var jsonObj = jsonData.memberWtOb[i];
        //console.log(counter.counter_name);
	    
        MemberWtDetailObject.MemberID = jsonObj.MemberID;
        MemberWtDetailObject.MemberWeight = jsonObj.MemberWeight;
        MemberWtDetailObject.ID = jsonObj.ID;
        MemberWtDetailObject.EntryDate = jsonObj.EntryDate;

        // Call the com.kony.WeightWatchers.WeightWatchers.MemberWeight.create ORM API
        kony.print("for "+i+"th record");
        MemberWtDetailObject.create(createMemberWtSuccessCallback, eventErrorCallBack);
    }
}

/**
 * Helper method to get all Membert weight data from MemberWeight table 
 * @returns {} 
 */
function getAllMemberWtData(){
var membersWeightDetail = [];
    function getAllMemberWtSuccessCallback(res){
        for(var i in res){
            kony.print(i+"th record fetching");
            var v=res[i];
            var tempObj = {};
            tempObj["MemberID"] = kony.sync.getString(v.MemberID);
            tempObj["MemberWeight"] = kony.sync.getString(v.MemberWeight);
			tempObj["ID"] = kony.sync.getString(v.ID);
			tempObj["EntryDate"] = kony.sync.getString(v.EntryDate);

			membersWeightDetail.push(tempObj);     
        }
        //alert("Member Wt Data=="+JSON.stringify(membersWeightDetail));
    }
    com.kony.WeightWatchers.WeightWatchers.MemberWeight.getAll(getAllMemberWtSuccessCallback, eventErrorCallBack);
}

/**
 *  Helper method that returns the member Weight details by ID
 * @returns {} 
 */
function getMemberWtByID(ID){
membersWeightDetail = [];
    function getMemberWtByIdsuccesscallback(res){
        for(var i in res){
            kony.print(i+"th record fetching");
            var v=res[i];
            var tempObj = {};
            tempObj["MemberID"] = kony.sync.getString(v.MemberID);
            tempObj["MemberWeight"] = kony.sync.getString(v.MemberWeight);
			tempObj["ID"] = kony.sync.getString(v.ID);
			tempObj["EntryDate"] = kony.sync.getString(v.EntryDate);

			membersWeightDetail.push(tempObj);     
        }
        alert("Member Wt Data=="+JSON.stringify(membersWeightDetail));
    }
com.kony.WeightWatchers.WeightWatchers.MemberWeight.find("where ID="+ID, getMemberWtByIdsuccesscallback,eventErrorCallBack);

}

/**
 *  Helper method that returns the member Weight details by Membert ID 
 * @param {} memberID
 * @returns {} 
 */
function getMemberWtByMemberID(memberID){
membersWeightDetail = [];
    function getMemberWtByIdsuccesscallback(res){
        for(var i in res){
            kony.print(i+"th record fetching");
            var v=res[i];
            var tempObj = {};
            tempObj["MemberID"] = kony.sync.getString(v.MemberID);
            tempObj["MemberWeight"] = kony.sync.getString(v.MemberWeight);
			tempObj["ID"] = kony.sync.getString(v.ID);
			tempObj["EntryDate"] = kony.sync.getString(v.EntryDate);

			membersWeightDetail.push(tempObj);     
        }
        alert("Member Wt Data=="+JSON.stringify(membersWeightDetail));
    }
com.kony.WeightWatchers.WeightWatchers.MemberWeight.find("where MemberID="+memberID, getMemberWtByIdsuccesscallback,eventErrorCallBack);

}


/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of MemberWeight instances
 *   
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
 
/*  This method retrieves all the instances of the MemberWeight stored in the device and displays on frmMemberWeightList
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
seguiSearchKeyMemberWeight=null;
function getAllMemberWeight(){
	//Success callback reads the response and populates the SegmentedUI
	function getAllMemberWeightSuccessCallback(res){
		//preparing object to be mapped to SegmentedUI
		var objectToMap = [];
		if(res.length<0){
			callAlert(getMessageTemplate("noData"),"info")
		}else{
			//Initialize global for back button feature
			gblMemberWeightBack = getAllMemberWeight;
			for(var i in res){
				var v=res[i];
				objectToMap[i] = new Object();
				//objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
				objectToMap[i]["widgetIDValue"] = kony.sync.getString(v.ID);
	
				//preparing primary key object to be mapped to SegmentedUI as hidden variable
				objectToMap[i]["ID"] = kony.sync.getString(v.ID);
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
			frmMemberWeightList.seguiList.setData(objectToMap);
			gblComingFromHome = false;
		}
		else{
			if(isPageLimit==false)
				frmMemberWeightList.seguiList.addAll(objectToMap);
		}
		frmMemberWeightList.show();
		//Dismiss Loading screen
		dismissSyncLoadingScreen();
	}
		//Display Loading screen
		showSyncLoadingScreen("Loading Data");		
		// Call the com.kony.WeightWatchers.WeightWatchers.MemberWeight.getAll ORM API
		com.kony.WeightWatchers.WeightWatchers.MemberWeight.getAll(getAllMemberWeightSuccessCallback, eventErrorCallBack,null,limitForListView,offsetForListView);
}
//Wrapper method for back button functionality of edit page
function getMemberWeightbyPKFromBack(){
	getMemberWeightbyPK(true);
}

//Wrapper method for navigation from List to Detail view
function getMemberWeightbyPKFromList(){
	getMemberWeightbyPK(false);
}


/*  This method retrieves an instance of MemberWeight for a given Primary Key (unique identifier) of the object and displays on frmMemberWeightDetails
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function getMemberWeightbyPK(fromBack){
	var getMemberWeightbyPKObject = new com.kony.WeightWatchers.WeightWatchers.MemberWeight ();
	// Success callback reads the response and populates the fields on frmMemberWeightDetails
	function getMemberWeightSuccessCallback(res){
		if(res!=null && res.length>0){
			gblMemberWeightObject = res[0];
			frmMemberWeightDetails.widgetIDValue.text = kony.sync.getString(gblMemberWeightObject.ID);
			frmMemberWeightDetails.widgetMemberIDValue.text = kony.sync.getString(gblMemberWeightObject.MemberID);
			frmMemberWeightDetails.widgetMemberWeightValue.text = kony.sync.getString(gblMemberWeightObject.MemberWeight);
			frmMemberWeightDetails.widgetEntryDateValue.text = kony.sync.getString(gblMemberWeightObject.EntryDate);
			frmMemberWeightDetails.show();
		}
		//Showing alert when result set is empty
		else{
			callAlert(getMessageTemplate("noData"),"info")
		}
	}
	if(fromBack==true) {
		getMemberWeightbyPKObject.ID = gblMemberWeightObject.ID;
	}
	else {
		//Storing the primary key in global variable to be used for other ORMs
		getMemberWeightbyPKObject.ID = frmMemberWeightList.seguiList.selectedItems[0].ID;
	}

	// Call the com.kony.WeightWatchers.WeightWatchers.MemberWeight.getAllDetailsByPK ORM API
getMemberWeightbyPKObject.getAllDetailsByPK(getMemberWeightSuccessCallback, eventErrorCallBack);
}

/* This method deletes an instance of MemberWeight identified by Primary Key (unique identifier) of the object 
 * and loads the frmMemberWeightList with refreshed data
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function deleteByPKMemberWeight(){ 
	// Success callback deletes the entry of specified record on frmMemberWeightDetails
	function deleteByPKMemberWeightSuccessCallback(res) {
		callAlert(getMessageTemplate("deleteSuccess","MemberWeight"),"info")
		gblMemberWeightObject = null;
		kony.appgen.comingFromDelete = true;
		goBackToMemberWeightList();
	}
	// Call the com.kony.WeightWatchers.WeightWatchers.MemberWeight.deleteByByPK ORM API
	function handler(response){
	if(response==true){
		gblMemberWeightObject.deleteByPK(deleteByPKMemberWeightSuccessCallback, eventErrorCallBack); 
		}
	}
	callAlert(getMessageTemplate("delete","MemberWeight"),"confirmation",handler,"","YES","NO")
}


/* This method updates an instance of MemberWeight identified by Primary Key (unique identifier) of the object
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function updateByPKMemberWeight(){ 
	//Success callback that displays an alert on successful update
	function updateByPKMemberWeightSuccessCallback(res) {
		callAlert(getMessageTemplate("updateSuccess","MemberWeight"),"info")
	}
	function updateByPKMemberWeightErrorCallback(res){
		gblMemberWeightObject = gblMemberWeighttempObject;
		eventErrorCallBack(res);
	}
	//storing the global object in a temporary object as backup in case the update fails
	var gblMemberWeighttempObject = kony.sync.CreateCopy(gblMemberWeightObject);
	//Preparing an object to store the values to be updated
	gblMemberWeightObject.MemberID = frmMemberWeightEdit.widgetMemberIDValue.text;
	gblMemberWeightObject.MemberWeight = frmMemberWeightEdit.widgetMemberWeightValue.text;
	gblMemberWeightObject.EntryDate = frmMemberWeightEdit.widgetEntryDateValue.text;


	// Call the com.kony.WeightWatchers.WeightWatchers.MemberWeight.updateByByPK ORM API
	gblMemberWeightObject.updateByPK(updateByPKMemberWeightSuccessCallback, updateByPKMemberWeightErrorCallback); 
}


/*  This method navigates to Add Form of MemberWeight object after resetting the fields 
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function showAddMemberWeightForm(){
	//Resetting the fields				
		frmMemberWeightAdd.widgetIDValue.text="";
		frmMemberWeightAdd.widgetMemberIDValue.text="";
		frmMemberWeightAdd.widgetMemberWeightValue.text="";
		frmMemberWeightAdd.widgetEntryDateValue.text="";
	
	frmMemberWeightAdd.show();
}

/*  This method navigates to Edit Form of MemberWeight object
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function showEditMemberWeightForm(){
// Success callback reads the response and populates the fields on frmMemberWeightEdit
	function editMemberWeightSuccessCallback(res){
	if(res!=null && res.length>0){
		frmMemberWeightEdit.widgetMemberIDValue.text = checkUndefined(res[0].MemberID).trim();
		frmMemberWeightEdit.widgetMemberWeightValue.text = checkUndefined(res[0].MemberWeight).trim();
		frmMemberWeightEdit.widgetEntryDateValue.text = checkUndefined(res[0].EntryDate).trim();
		frmMemberWeightEdit.show();
		}
	}

		// Call the com.kony.WeightWatchers.WeightWatchers.MemberWeight.getAllDetailsByPK ORM API
	gblMemberWeightObject.getAllDetailsByPK(editMemberWeightSuccessCallback, eventErrorCallBack);
}

/* This method creates an instance of MemberWeight
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function createMemberWeight(){
	var createMemberWeightObject = new com.kony.WeightWatchers.WeightWatchers.MemberWeight();
// Success callback creates a new record on frmMemberWeightDetails	
	function createMemberWeightSuccessCallback(res){
		callAlert(getMessageTemplate("addSuccess","MemberWeight"),"info")
	}
	createMemberWeightObject.ID = frmMemberWeightAdd.widgetIDValue.text;
	createMemberWeightObject.MemberID = frmMemberWeightAdd.widgetMemberIDValue.text;
	createMemberWeightObject.MemberWeight = frmMemberWeightAdd.widgetMemberWeightValue.text;
	createMemberWeightObject.EntryDate = frmMemberWeightAdd.widgetEntryDateValue.text;

	// Call the com.kony.WeightWatchers.WeightWatchers.MemberWeight.create ORM API

	createMemberWeightObject.create(createMemberWeightSuccessCallback, eventErrorCallBack);
}



function goBackToMemberWeightList() {
	gblComingFromHome=true;
	offsetForListView = 0;
	goBack(gblMemberWeightBack);
}

function getAllMemberWeightFromMenu(){
	gblComingFromHome = true;
	limitForListView = gblLimitForListView;
	offsetForListView = 0;
	isPageLimit = false;
	showSyncLoadingScreen("Loading Data");
	getAllMemberWeight();
}

function onReachEventMemberWeight(){
	if(gblMemberWeightBack){
		gblMemberWeightBack();
	}else{
		getAllMemberWeight();
	}
}

//**MEG 7304
function checkIsAtndgMeetingValue(wcs,obj,callback)
{
  var object = obj;
  kony.print("ABA -----> checkIsAtndgMeetingValue " + JSON.stringify(object));
  if(object.hasOwnProperty('IsAtndgMeeting'))
    {
      if(checkValidString(object.IsAtndgMeeting))
      {
        kony.print("Set object.IsAtndgMeeting " + object.IsAtndgMeeting);
        callback.call(null,object.IsAtndgMeeting);
      }else{
        kony.print("Set IsAtndgMeeting false");
        callback.call(null,false);//*** Default false for IsAtndgMeeting
      }
    }else
    {
		checkIsAtndgMeetingValueInDB(wcs,callback);
    }
}

function checkIsAtndgMeetingValueInDB(wcs,callback)
{
  kony.print("ABA -----> checkIsAtndgMeetingValueInDB  wcs " + wcs);
  var sql = "Select IsAtndgMeeting from WeighDetails  "+ wcs;
  
  kony.print("ABA -----> checkIsAtndgMeetingValueInDB sql " + sql);
  kony.sync.single_select_execute(kony.sync.getDBName(), sql, null, checkIsAtndgMeetingValueInDBSuccessCallback, checkIsAtndgMeetingValueInDBErrorCallBack);
	
  function checkIsAtndgMeetingValueInDBSuccessCallback(res)
  {
    kony.print("checkIsAtndgMeetingValueInDBSuccessCallback res " + JSON.stringify(res));
    if(res && res.length > 0)
    {
		if(checkValidString(res[0].IsAtndgMeeting))
        {
          kony.print("Set res[0].IsAtndgMeeting " + res[0].IsAtndgMeeting);
          callback.call(null,res[0].IsAtndgMeeting);
        }else{
          kony.print("Set IsAtndgMeeting false");
          callback.call(null,false);//*** Default false for IsAtndgMeeting
        }
    }else
    {
		kony.print("In else of res.lenght > 0 ");
    	callback.call(null,false); //*** Default false for IsAtndgMeeting
    }
  }
  
  function checkIsAtndgMeetingValueInDBErrorCallBack(res)
  {
    kony.print("checkIsAtndgMeetingValueInDBErrorCallBack res " + JSON.stringify(res));
    callback.call(null,false);//*** Default false for IsAtndgMeeting
  }
}

//**MEG 7304
function checkIsMemberAtRiskValue(wcs,obj,callback)
{
  var object = obj;
  kony.print("ABA -----> checkIsMemberAtRiskValue " + JSON.stringify(object));
  if(object.hasOwnProperty('IsMemberAtRisk'))
    {
      if(checkValidString(object.IsMemberAtRisk))
      {
        kony.print("Set object.IsMemberAtRisk " + object.IsMemberAtRisk);
        callback.call(null,object.IsMemberAtRisk);
      } else{
        kony.print("Set IsMemberAtRisk False");
        callback.call(null,false); //*** Default false for IsMemberAtRisk
      }
    }else
    {
		checkIsMemberAtRiskValueInDB(wcs,callback);
    }
}

function checkIsMemberAtRiskValueInDB(wcs,callback)
{
  kony.print("ABA -----> checkIsMemberAtRiskValueInDB  wcs " + wcs);
  var sql = "Select IsMemberAtRisk from WeighDetails  "+ wcs;
  
  kony.print("ABA -----> checkIsMemberAtRiskValueInDB sql " + sql);
  kony.sync.single_select_execute(kony.sync.getDBName(), sql, null, checkIsMemberAtRiskValueInDBSuccessCallback, checkIsMemberAtRiskValueInDBErrorCallBack);
	
  function checkIsMemberAtRiskValueInDBSuccessCallback(res)
  {
    kony.print("checkIsMemberAtRiskValueInDBSuccessCallback res " + JSON.stringify(res));
    if(res && res.length > 0)
    {
		if(checkValidString(res[0].IsMemberAtRisk))
        {
          kony.print("Set res[0].IsMemberAtRisk " + res[0].IsMemberAtRisk);
          callback.call(null,res[0].IsMemberAtRisk);
        }else{
          kony.print("Set IsMemberAtRisk False");
          callback.call(null,false);//*** Default false for IsMemberAtRisk
        }
    }else
    {
		kony.print("In else of res.lenght > 0 ");
    	callback.call(null,false);//*** Default false for IsMemberAtRisk
    }
  }
  
  function checkIsMemberAtRiskValueInDBErrorCallBack(res)
  {
    kony.print("checkIsMemberAtRiskValueInDBErrorCallBack res " + JSON.stringify(res));
    callback.call(null,false);//*** Default false for IsMemberAtRisk
  }
}