/**
 * Helper method to add dummy Member detail data for testing. Uses the date in memberDetailData Json string 
 *  created in Utility.js
 * @returns {} 
 */
function addMemberDetailData() {
    var MemberDetailObject = new com.kony.WeightWatchers.WeightWatchers.Members();
    //alert("Entering addProductData")
    function createMemberDetailSuccessCallback(res) {
        //callAlert(getMessageTemplate("addSuccess","ProductDatail"),"info")
        kony.print("MemberDetail Success call back")
    }
    var jsonData = JSON.parse(memberDetailData);
    for (var i = 0; i < jsonData.memberDetailOb.length; i++) {
        var jsonObj = jsonData.memberDetailOb[i];
        //console.log(counter.counter_name);
        MemberDetailObject.MemberID = jsonObj.MemberID;
        MemberDetailObject.MemberType = jsonObj.MemberType;
        MemberDetailObject.MemTypeUpdateDt = jsonObj.MemTypeUpdateDt;
        MemberDetailObject.ClientRefID = jsonObj.ClientRefID;
        MemberDetailObject.RegistrationNum = jsonObj.RegistrationNum;
        // Call the com.kony.WeightWatchers.WeightWatchers.Members.create ORM API
        MemberDetailObject.create(createMemberDetailSuccessCallback, eventErrorCallBack);
    }
}
/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of Members instances
 *   
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
/*  This method retrieves all the instances of the Members stored in the device and displays on frmMembersList
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
seguiSearchKeyMembers = null;

function getAllMembers() {
    //Success callback reads the response and populates the SegmentedUI
    function getAllMembersSuccessCallback(res) {
        //preparing object to be mapped to SegmentedUI
        var objectToMap = [];
        if (res.length < 0) {
            callAlert(getMessageTemplate("noData"), "info")
        } else {
            //Initialize global for back button feature
            gblMembersBack = getAllMembers;
            for (var i in res) {
                var v = res[i];
                objectToMap[i] = new Object();
                //objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
                objectToMap[i]["widgetFirstNameValue"] = kony.sync.getString(v.FirstName);
                objectToMap[i]["widgetLastNameValue"] = kony.sync.getString(v.LastName);
                objectToMap[i]["widgetRegistrationNumValue"] = kony.sync.getString(v.RegistrationNum);
                //preparing primary key object to be mapped to SegmentedUI as hidden variable
                objectToMap[i]["ClientRefID"] = kony.sync.getString(v.ClientRefID);
                objectToMap[i]["RegistrationNum"] = kony.sync.getString(v.RegistrationNum);
                objectToMap[i]["imgArr"] = "arr.png";
            }
        }
        if (res.length != 0) {
            offsetForListView = offsetForListView + limitForListView;
        } else {
            isPageLimit = true;
        }
        //Set the data to the Segmented UI and display the form
        if (gblComingFromHome) {
            frmMembersList.seguiList.setData(objectToMap);
            gblComingFromHome = false;
        } else {
            if (isPageLimit == false) frmMembersList.seguiList.addAll(objectToMap);
        }
        frmMembersList.show();
        //Dismiss Loading screen
        dismissSyncLoadingScreen();
    }
    //Display Loading screen
    showSyncLoadingScreen("Loading Data");
    // Call the com.kony.WeightWatchers.WeightWatchers.Members.getAll ORM API
    com.kony.WeightWatchers.WeightWatchers.Members.getAll(getAllMembersSuccessCallback, eventErrorCallBack, null, limitForListView, offsetForListView);
}
//Wrapper method for back button functionality of edit page
function getMembersbyPKFromBack() {
    getMembersbyPK(true);
}
//Wrapper method for navigation from List to Detail view
function getMembersbyPKFromList() {
    getMembersbyPK(false);
}
/*  This method retrieves an instance of Members for a given Primary Key (unique identifier) of the object and displays on frmMembersDetails
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function getMembersbyPK(fromBack) {
    var getMembersbyPKObject = new com.kony.WeightWatchers.WeightWatchers.Members();
    // Success callback reads the response and populates the fields on frmMembersDetails
    function getMembersSuccessCallback(res) {
        if (res != null && res.length > 0) {
            gblMembersObject = res[0];
            frmMembersDetails.widgetClientRefIDValue.text = kony.sync.getString(gblMembersObject.ClientRefID);
            frmMembersDetails.widgetDateOfBirthValue.text = kony.sync.getString(gblMembersObject.DateOfBirth);
            frmMembersDetails.widgetDNTReCalForEvntValue.text = kony.sync.getString(gblMembersObject.DNTReCalForEvnt);
            frmMembersDetails.widgetDNTConctByEmailValue.text = kony.sync.getString(gblMembersObject.DNTConctByEmail);
            frmMembersDetails.widgetDNTConctByPhoneValue.text = kony.sync.getString(gblMembersObject.DNTConctByPhone);
            frmMembersDetails.widgetDNTContactBySMSValue.text = kony.sync.getString(gblMembersObject.DNTContactBySMS);
            frmMembersDetails.widgetDontSendCardsValue.text = kony.sync.getString(gblMembersObject.DontSendCards);
            frmMembersDetails.widgetDontSendCouponsValue.text = kony.sync.getString(gblMembersObject.DontSendCoupons);
            frmMembersDetails.widgetEmailValue.text = kony.sync.getString(gblMembersObject.Email);
            frmMembersDetails.widgetEmployeeIDValue.text = kony.sync.getString(gblMembersObject.EmployeeID);
            frmMembersDetails.widgetFeePaidValue.text = kony.sync.getString(gblMembersObject.FeePaid);
            frmMembersDetails.widgetFirstNameValue.text = kony.sync.getString(gblMembersObject.FirstName);
            frmMembersDetails.widgetGenderValue.text = kony.sync.getString(gblMembersObject.Gender);
            frmMembersDetails.widgetHeightValue.text = kony.sync.getString(gblMembersObject.Height);
            frmMembersDetails.widgetLastNameValue.text = kony.sync.getString(gblMembersObject.LastName);
            frmMembersDetails.widgetLocationIDValue.text = kony.sync.getString(gblMembersObject.LocationID);
            frmMembersDetails.widgetMeetingDateValue.text = kony.sync.getString(gblMembersObject.MeetingDate);
            frmMembersDetails.widgetMeetingOcurncIDValue.text = kony.sync.getString(gblMembersObject.MeetingOcurncID);
            frmMembersDetails.widgetCouponCodeValue.text = kony.sync.getString(gblMembersObject.CouponCode);
            frmMembersDetails.widgetExpirationDateValue.text = kony.sync.getString(gblMembersObject.ExpirationDate);
            frmMembersDetails.widgetIDValue.text = kony.sync.getString(gblMembersObject.ID);
            frmMembersDetails.widgetLastUsedDateValue.text = kony.sync.getString(gblMembersObject.LastUsedDate);
            frmMembersDetails.widgetMemberIDValue.text = kony.sync.getString(gblMembersObject.MemberID);
            frmMembersDetails.widgetProductIDValue.text = kony.sync.getString(gblMembersObject.ProductID);
            frmMembersDetails.widgetSubscriptnTypeValue.text = kony.sync.getString(gblMembersObject.SubscriptnType);
            frmMembersDetails.widgetMemberTypeValue.text = kony.sync.getString(gblMembersObject.MemberType);
            frmMembersDetails.widgetMissedWeekPassValue.text = kony.sync.getString(gblMembersObject.MissedWeekPass);
            frmMembersDetails.widgetPhone1Value.text = kony.sync.getString(gblMembersObject.Phone1);
            frmMembersDetails.widgetPhone2Value.text = kony.sync.getString(gblMembersObject.Phone2);
            frmMembersDetails.widgetPhoneType1Value.text = kony.sync.getString(gblMembersObject.PhoneType1);
            frmMembersDetails.widgetPhoneType2Value.text = kony.sync.getString(gblMembersObject.PhoneType2);
            frmMembersDetails.widgetRegistrationNumValue.text = kony.sync.getString(gblMembersObject.RegistrationNum);
            frmMembersDetails.widgetStartDateValue.text = kony.sync.getString(gblMembersObject.StartDate);
            frmMembersDetails.widgetStatusValue.text = kony.sync.getString(gblMembersObject.Status);
            frmMembersDetails.widgetWeeksCompletedValue.text = kony.sync.getString(gblMembersObject.WeeksCompleted);
            frmMembersDetails.widgetTransStatusValue.text = kony.sync.getString(gblMembersObject.TransStatus);
            frmMembersDetails.widgetMemTypeUpdateDtValue.text = kony.sync.getString(gblMembersObject.MemTypeUpdateDt);
            frmMembersDetails.show();
        }
        //Showing alert when result set is empty
        else {
            callAlert(getMessageTemplate("noData"), "info")
        }
    }
    if (fromBack == true) {
        getMembersbyPKObject.ClientRefID = gblMembersObject.ClientRefID;
        getMembersbyPKObject.RegistrationNum = gblMembersObject.RegistrationNum;
    } else {
        //Storing the primary key in global variable to be used for other ORMs
        getMembersbyPKObject.ClientRefID = frmMembersList.seguiList.selectedItems[0].ClientRefID;
        getMembersbyPKObject.RegistrationNum = frmMembersList.seguiList.selectedItems[0].RegistrationNum;
    }
    // Call the com.kony.WeightWatchers.WeightWatchers.Members.getAllDetailsByPK ORM API
    getMembersbyPKObject.getAllDetailsByPK(getMembersSuccessCallback, eventErrorCallBack);
}
/* This method deletes an instance of Members identified by Primary Key (unique identifier) of the object 
 * and loads the frmMembersList with refreshed data
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function deleteByPKMembers() {
    // Success callback deletes the entry of specified record on frmMembersDetails
    function deleteByPKMembersSuccessCallback(res) {
        callAlert(getMessageTemplate("deleteSuccess", "Members"), "info")
        gblMembersObject = null;
        kony.appgen.comingFromDelete = true;
        goBackToMembersList();
    }
    // Call the com.kony.WeightWatchers.WeightWatchers.Members.deleteByByPK ORM API
    function handler(response) {
        if (response == true) {
            gblMembersObject.deleteByPK(deleteByPKMembersSuccessCallback, eventErrorCallBack);
        }
    }
    callAlert(getMessageTemplate("delete", "Members"), "confirmation", handler, "", "YES", "NO")
}
/* This method updates an instance of Members identified by Primary Key (unique identifier) of the object
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function updateByPKMembers() {
    //Success callback that displays an alert on successful update
    function updateByPKMembersSuccessCallback(res) {
        callAlert(getMessageTemplate("updateSuccess", "Members"), "info")
    }

    function updateByPKMembersErrorCallback(res) {
        gblMembersObject = gblMemberstempObject;
        eventErrorCallBack(res);
    }
    //storing the global object in a temporary object as backup in case the update fails
    var gblMemberstempObject = kony.sync.CreateCopy(gblMembersObject);
    //Preparing an object to store the values to be updated
    gblMembersObject.DateOfBirth = frmMembersEdit.widgetDateOfBirthValue.formattedDate;
    gblMembersObject.DNTReCalForEvnt = frmMembersEdit.widgetDNTReCalForEvntValue.text;
    gblMembersObject.DNTConctByEmail = frmMembersEdit.widgetDNTConctByEmailValue.text;
    gblMembersObject.DNTConctByPhone = frmMembersEdit.widgetDNTConctByPhoneValue.text;
    gblMembersObject.DNTContactBySMS = frmMembersEdit.widgetDNTContactBySMSValue.text;
    gblMembersObject.DontSendCards = frmMembersEdit.widgetDontSendCardsValue.text;
    gblMembersObject.DontSendCoupons = frmMembersEdit.widgetDontSendCouponsValue.text;
    gblMembersObject.Email = frmMembersEdit.widgetEmailValue.text;
    gblMembersObject.EmployeeID = frmMembersEdit.widgetEmployeeIDValue.text;
    gblMembersObject.FeePaid = frmMembersEdit.widgetFeePaidValue.text;
    gblMembersObject.FirstName = frmMembersEdit.widgetFirstNameValue.text;
    gblMembersObject.Gender = frmMembersEdit.widgetGenderValue.text;
    gblMembersObject.Height = frmMembersEdit.widgetHeightValue.text;
    gblMembersObject.LastName = frmMembersEdit.widgetLastNameValue.text;
    gblMembersObject.LocationID = frmMembersEdit.widgetLocationIDValue.text;
    gblMembersObject.MeetingDate = frmMembersEdit.widgetMeetingDateValue.formattedDate;
    gblMembersObject.MeetingOcurncID = frmMembersEdit.widgetMeetingOcurncIDValue.text;
    gblMembersObject.CouponCode = frmMembersEdit.widgetCouponCodeValue.text;
    gblMembersObject.ExpirationDate = frmMembersEdit.widgetExpirationDateValue.formattedDate;
    gblMembersObject.LastUsedDate = frmMembersEdit.widgetLastUsedDateValue.formattedDate;
    gblMembersObject.MemberID = frmMembersEdit.widgetMemberIDValue.text;
    gblMembersObject.ProductID = frmMembersEdit.widgetProductIDValue.text;
    gblMembersObject.SubscriptnType = frmMembersEdit.widgetSubscriptnTypeValue.text;
    gblMembersObject.MemberType = frmMembersEdit.widgetMemberTypeValue.text;
    gblMembersObject.MissedWeekPass = frmMembersEdit.widgetMissedWeekPassValue.text;
    gblMembersObject.Phone1 = frmMembersEdit.widgetPhone1Value.text;
    gblMembersObject.Phone2 = frmMembersEdit.widgetPhone2Value.text;
    gblMembersObject.PhoneType1 = frmMembersEdit.widgetPhoneType1Value.text;
    gblMembersObject.PhoneType2 = frmMembersEdit.widgetPhoneType2Value.text;
    gblMembersObject.StartDate = frmMembersEdit.widgetStartDateValue.formattedDate;
    gblMembersObject.Status = frmMembersEdit.widgetStatusValue.text;
    gblMembersObject.WeeksCompleted = frmMembersEdit.widgetWeeksCompletedValue.text;
    gblMembersObject.TransStatus = frmMembersEdit.widgetTransStatusValue.text;
    gblMembersObject.MemTypeUpdateDt = frmMembersEdit.widgetMemTypeUpdateDtValue.text;
    // Call the com.kony.WeightWatchers.WeightWatchers.Members.updateByByPK ORM API
    gblMembersObject.updateByPK(updateByPKMembersSuccessCallback, updateByPKMembersErrorCallback);
}
/*  This method navigates to Add Form of Members object after resetting the fields 
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function showAddMembersForm() {
    //Resetting the fields				
    clearCalenderWidget(frmMembersAdd.widgetDateOfBirthValue);
    frmMembersAdd.widgetDNTReCalForEvntValue.text = "";
    frmMembersAdd.widgetDNTConctByEmailValue.text = "";
    frmMembersAdd.widgetDNTConctByPhoneValue.text = "";
    frmMembersAdd.widgetDNTContactBySMSValue.text = "";
    frmMembersAdd.widgetDontSendCardsValue.text = "";
    frmMembersAdd.widgetDontSendCouponsValue.text = "";
    frmMembersAdd.widgetEmailValue.text = "";
    frmMembersAdd.widgetEmployeeIDValue.text = "";
    frmMembersAdd.widgetFeePaidValue.text = "";
    frmMembersAdd.widgetFirstNameValue.text = "";
    frmMembersAdd.widgetGenderValue.text = "";
    frmMembersAdd.widgetHeightValue.text = "";
    frmMembersAdd.widgetLastNameValue.text = "";
    frmMembersAdd.widgetLocationIDValue.text = "";
    clearCalenderWidget(frmMembersAdd.widgetMeetingDateValue);
    frmMembersAdd.widgetMeetingOcurncIDValue.text = "";
    frmMembersAdd.widgetCouponCodeValue.text = "";
    clearCalenderWidget(frmMembersAdd.widgetExpirationDateValue);
    frmMembersAdd.widgetIDValue.text = "";
    clearCalenderWidget(frmMembersAdd.widgetLastUsedDateValue);
    frmMembersAdd.widgetMemberIDValue.text = "";
    frmMembersAdd.widgetProductIDValue.text = "";
    frmMembersAdd.widgetSubscriptnTypeValue.text = "";
    frmMembersAdd.widgetMemberTypeValue.text = "";
    frmMembersAdd.widgetMissedWeekPassValue.text = "";
    frmMembersAdd.widgetPhone1Value.text = "";
    frmMembersAdd.widgetPhone2Value.text = "";
    frmMembersAdd.widgetPhoneType1Value.text = "";
    frmMembersAdd.widgetPhoneType2Value.text = "";
    frmMembersAdd.widgetRegistrationNumValue.text = "";
    clearCalenderWidget(frmMembersAdd.widgetStartDateValue);
    frmMembersAdd.widgetStatusValue.text = "";
    frmMembersAdd.widgetWeeksCompletedValue.text = "";
    frmMembersAdd.widgetTransStatusValue.text = "";
    frmMembersAdd.widgetMemTypeUpdateDtValue.text = "";
    frmMembersAdd.show();
}
/*  This method navigates to Edit Form of Members object
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function showEditMembersForm() {
    // Success callback reads the response and populates the fields on frmMembersEdit
    function editMembersSuccessCallback(res) {
        if (res != null && res.length > 0) {
            var inputDate;
            var mydate;
            inputDate = checkUndefined(res[0].DateOfBirth)
            mydate = new Date(inputDate);
            //This workaround is for iOS platform where Safari has issues with some ISO complaint date formats
            if (mydate.toString() === "Invalid Date") {
                var re = new RegExp("-", "g");
                inputDate = inputDate.replace(re, "/");
                //If server sends time component also, remove it
                if (inputDate.indexOf(" ") !== -1) {
                    inputDate = inputDate.substr(0, inputDate.indexOf(" "));
                }
                mydate = new Date(inputDate);
            }
            frmMembersEdit.widgetDateOfBirthValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMembersEdit.widgetDNTReCalForEvntValue.text = checkUndefined(res[0].DNTReCalForEvnt).trim();
            frmMembersEdit.widgetDNTConctByEmailValue.text = checkUndefined(res[0].DNTConctByEmail).trim();
            frmMembersEdit.widgetDNTConctByPhoneValue.text = checkUndefined(res[0].DNTConctByPhone).trim();
            frmMembersEdit.widgetDNTContactBySMSValue.text = checkUndefined(res[0].DNTContactBySMS).trim();
            frmMembersEdit.widgetDontSendCardsValue.text = checkUndefined(res[0].DontSendCards).trim();
            frmMembersEdit.widgetDontSendCouponsValue.text = checkUndefined(res[0].DontSendCoupons).trim();
            frmMembersEdit.widgetEmailValue.text = checkUndefined(res[0].Email).trim();
            frmMembersEdit.widgetEmployeeIDValue.text = checkUndefined(res[0].EmployeeID);
            frmMembersEdit.widgetFeePaidValue.text = checkUndefined(res[0].FeePaid).trim();
            frmMembersEdit.widgetFirstNameValue.text = checkUndefined(res[0].FirstName).trim();
            frmMembersEdit.widgetGenderValue.text = checkUndefined(res[0].Gender).trim();
            frmMembersEdit.widgetHeightValue.text = checkUndefined(res[0].Height);
            frmMembersEdit.widgetLastNameValue.text = checkUndefined(res[0].LastName).trim();
            frmMembersEdit.widgetLocationIDValue.text = checkUndefined(res[0].LocationID);
            inputDate = checkUndefined(res[0].MeetingDate)
            mydate = new Date(inputDate);
            //This workaround is for iOS platform where Safari has issues with some ISO complaint date formats
            if (mydate.toString() === "Invalid Date") {
                var re = new RegExp("-", "g");
                inputDate = inputDate.replace(re, "/");
                //If server sends time component also, remove it
                if (inputDate.indexOf(" ") !== -1) {
                    inputDate = inputDate.substr(0, inputDate.indexOf(" "));
                }
                mydate = new Date(inputDate);
            }
            frmMembersEdit.widgetMeetingDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMembersEdit.widgetMeetingOcurncIDValue.text = checkUndefined(res[0].MeetingOcurncID);
            frmMembersEdit.widgetCouponCodeValue.text = checkUndefined(res[0].CouponCode).trim();
            inputDate = checkUndefined(res[0].ExpirationDate)
            mydate = new Date(inputDate);
            //This workaround is for iOS platform where Safari has issues with some ISO complaint date formats
            if (mydate.toString() === "Invalid Date") {
                var re = new RegExp("-", "g");
                inputDate = inputDate.replace(re, "/");
                //If server sends time component also, remove it
                if (inputDate.indexOf(" ") !== -1) {
                    inputDate = inputDate.substr(0, inputDate.indexOf(" "));
                }
                mydate = new Date(inputDate);
            }
            frmMembersEdit.widgetExpirationDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            inputDate = checkUndefined(res[0].LastUsedDate)
            mydate = new Date(inputDate);
            //This workaround is for iOS platform where Safari has issues with some ISO complaint date formats
            if (mydate.toString() === "Invalid Date") {
                var re = new RegExp("-", "g");
                inputDate = inputDate.replace(re, "/");
                //If server sends time component also, remove it
                if (inputDate.indexOf(" ") !== -1) {
                    inputDate = inputDate.substr(0, inputDate.indexOf(" "));
                }
                mydate = new Date(inputDate);
            }
            frmMembersEdit.widgetLastUsedDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMembersEdit.widgetMemberIDValue.text = checkUndefined(res[0].MemberID);
            frmMembersEdit.widgetProductIDValue.text = checkUndefined(res[0].ProductID);
            frmMembersEdit.widgetSubscriptnTypeValue.text = checkUndefined(res[0].SubscriptnType).trim();
            frmMembersEdit.widgetMemberTypeValue.text = checkUndefined(res[0].MemberType).trim();
            frmMembersEdit.widgetMissedWeekPassValue.text = checkUndefined(res[0].MissedWeekPass).trim();
            frmMembersEdit.widgetPhone1Value.text = checkUndefined(res[0].Phone1).trim();
            frmMembersEdit.widgetPhone2Value.text = checkUndefined(res[0].Phone2).trim();
            frmMembersEdit.widgetPhoneType1Value.text = checkUndefined(res[0].PhoneType1).trim();
            frmMembersEdit.widgetPhoneType2Value.text = checkUndefined(res[0].PhoneType2).trim();
            inputDate = checkUndefined(res[0].StartDate)
            mydate = new Date(inputDate);
            //This workaround is for iOS platform where Safari has issues with some ISO complaint date formats
            if (mydate.toString() === "Invalid Date") {
                var re = new RegExp("-", "g");
                inputDate = inputDate.replace(re, "/");
                //If server sends time component also, remove it
                if (inputDate.indexOf(" ") !== -1) {
                    inputDate = inputDate.substr(0, inputDate.indexOf(" "));
                }
                mydate = new Date(inputDate);
            }
            frmMembersEdit.widgetStartDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMembersEdit.widgetStatusValue.text = checkUndefined(res[0].Status).trim();
            frmMembersEdit.widgetWeeksCompletedValue.text = checkUndefined(res[0].WeeksCompleted);
            frmMembersEdit.widgetTransStatusValue.text = checkUndefined(res[0].TransStatus).trim();
            frmMembersEdit.widgetMemTypeUpdateDtValue.text = checkUndefined(res[0].MemTypeUpdateDt).trim();
            frmMembersEdit.show();
        }
    }
    // Call the com.kony.WeightWatchers.WeightWatchers.Members.getAllDetailsByPK ORM API
    gblMembersObject.getAllDetailsByPK(editMembersSuccessCallback, eventErrorCallBack);
}
/* This method creates an instance of Members
 *
 * Created On: Tue Apr 01 15:21:23 PDT 2014
 * Created by: amit.gupta
 */
function createMembers() {
    var createMembersObject = new com.kony.WeightWatchers.WeightWatchers.Members();
    // Success callback creates a new record on frmMembersDetails	
    function createMembersSuccessCallback(res) {
        callAlert(getMessageTemplate("addSuccess", "Members"), "info")
    }
    createMembersObject.DateOfBirth = frmMembersAdd.widgetDateOfBirthValue.formattedDate;
    createMembersObject.DNTReCalForEvnt = frmMembersAdd.widgetDNTReCalForEvntValue.text;
    createMembersObject.DNTConctByEmail = frmMembersAdd.widgetDNTConctByEmailValue.text;
    createMembersObject.DNTConctByPhone = frmMembersAdd.widgetDNTConctByPhoneValue.text;
    createMembersObject.DNTContactBySMS = frmMembersAdd.widgetDNTContactBySMSValue.text;
    createMembersObject.DontSendCards = frmMembersAdd.widgetDontSendCardsValue.text;
    createMembersObject.DontSendCoupons = frmMembersAdd.widgetDontSendCouponsValue.text;
    createMembersObject.Email = frmMembersAdd.widgetEmailValue.text;
    createMembersObject.EmployeeID = frmMembersAdd.widgetEmployeeIDValue.text;
    createMembersObject.FeePaid = frmMembersAdd.widgetFeePaidValue.text;
    createMembersObject.FirstName = frmMembersAdd.widgetFirstNameValue.text;
    createMembersObject.Gender = frmMembersAdd.widgetGenderValue.text;
    createMembersObject.Height = frmMembersAdd.widgetHeightValue.text;
    createMembersObject.LastName = frmMembersAdd.widgetLastNameValue.text;
    createMembersObject.LocationID = frmMembersAdd.widgetLocationIDValue.text;
    createMembersObject.MeetingDate = frmMembersAdd.widgetMeetingDateValue.formattedDate;
    createMembersObject.MeetingOcurncID = frmMembersAdd.widgetMeetingOcurncIDValue.text;
    createMembersObject.CouponCode = frmMembersAdd.widgetCouponCodeValue.text;
    createMembersObject.ExpirationDate = frmMembersAdd.widgetExpirationDateValue.formattedDate;
    createMembersObject.ID = frmMembersAdd.widgetIDValue.text;
    createMembersObject.LastUsedDate = frmMembersAdd.widgetLastUsedDateValue.formattedDate;
    createMembersObject.MemberID = frmMembersAdd.widgetMemberIDValue.text;
    createMembersObject.ProductID = frmMembersAdd.widgetProductIDValue.text;
    createMembersObject.SubscriptnType = frmMembersAdd.widgetSubscriptnTypeValue.text;
    createMembersObject.MemberType = frmMembersAdd.widgetMemberTypeValue.text;
    createMembersObject.MissedWeekPass = frmMembersAdd.widgetMissedWeekPassValue.text;
    createMembersObject.Phone1 = frmMembersAdd.widgetPhone1Value.text;
    createMembersObject.Phone2 = frmMembersAdd.widgetPhone2Value.text;
    createMembersObject.PhoneType1 = frmMembersAdd.widgetPhoneType1Value.text;
    createMembersObject.PhoneType2 = frmMembersAdd.widgetPhoneType2Value.text;
    createMembersObject.RegistrationNum = frmMembersAdd.widgetRegistrationNumValue.text;
    createMembersObject.StartDate = frmMembersAdd.widgetStartDateValue.formattedDate;
    createMembersObject.Status = frmMembersAdd.widgetStatusValue.text;
    createMembersObject.WeeksCompleted = frmMembersAdd.widgetWeeksCompletedValue.text;
    createMembersObject.TransStatus = frmMembersAdd.widgetTransStatusValue.text;
    createMembersObject.MemTypeUpdateDt = frmMembersAdd.widgetMemTypeUpdateDtValue.text;
    // Call the com.kony.WeightWatchers.WeightWatchers.Members.create ORM API
    createMembersObject.create(createMembersSuccessCallback, eventErrorCallBack);
}

function goBackToMembersList() {
    gblComingFromHome = true;
    offsetForListView = 0;
    goBack(gblMembersBack);
}

function getAllMembersFromMenu() {
    gblComingFromHome = true;
    limitForListView = gblLimitForListView;
    offsetForListView = 0;
    isPageLimit = false;
    showSyncLoadingScreen("Loading Data");
    getAllMembers();
}

function onReachEventMembers() {
    if (gblMembersBack) {
        gblMembersBack();
    } else {
        getAllMembers();
    }
}