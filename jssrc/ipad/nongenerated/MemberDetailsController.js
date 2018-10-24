/* This JavaScript file contains the business logic for creation, retrieval, modification and removal of MemberDetails instances
 *   
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
/*  This method retrieves all the instances of the MemberDetails stored in the device and displays on frmMemberDetailsList
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
seguiSearchKeyMemberDetails = null;

function getAllMemberDetails() {
    //Success callback reads the response and populates the SegmentedUI
    function getAllMemberDetailsSuccessCallback(res) {
        //preparing object to be mapped to SegmentedUI
        var objectToMap = [];
        if (res.length < 0) {
            callAlert(getMessageTemplate("noData"), "info")
        } else {
            //Initialize global for back button feature
            gblMemberDetailsBack = getAllMemberDetails;
            for (var i in res) {
                var v = res[i];
                objectToMap[i] = new Object();
                //objectToMap for ListViewWithoutSearchBar/ListViewWithSearchBar
                objectToMap[i]["widgetDontContByEmailValue"] = kony.sync.getString(v.DontContByEmail);
                objectToMap[i]["widgetFirstNameValue"] = kony.sync.getString(v.FirstName);
                objectToMap[i]["widgetLastNameValue"] = kony.sync.getString(v.LastName);
                //preparing primary key object to be mapped to SegmentedUI as hidden variable
                objectToMap[i]["DontContByEmail"] = kony.sync.getString(v.DontContByEmail);
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
            frmMemberDetailsList.seguiList.setData(objectToMap);
            gblComingFromHome = false;
        } else {
            if (isPageLimit == false) frmMemberDetailsList.seguiList.addAll(objectToMap);
        }
        frmMemberDetailsList.show();
        //Dismiss Loading screen
        dismissSyncLoadingScreen();
    }
    //Display Loading screen
    showSyncLoadingScreen("Loading Data");
    // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAll ORM API
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAll(getAllMemberDetailsSuccessCallback, eventErrorCallBack, null, limitForListView, offsetForListView);
}
//Wrapper method for back button functionality of edit page
function getMemberDetailsbyPKFromBack() {
    getMemberDetailsbyPK(true);
}
//Wrapper method for navigation from List to Detail view
function getMemberDetailsbyPKFromList() {
    getMemberDetailsbyPK(false);
}
/*  This method retrieves an instance of MemberDetails for a given Primary Key (unique identifier) of the object and displays on frmMemberDetailsDetails
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function getMemberDetailsbyPK(fromBack) {
    var getMemberDetailsbyPKObject = new com.kony.WeightWatchers.MemberSyncScope.MemberDetails();
    // Success callback reads the response and populates the fields on frmMemberDetailsDetails
    function getMemberDetailsSuccessCallback(res) {
        if (res != null && res.length > 0) {
            gblMemberDetailsObject = res[0];
            frmMemberDetailsDetails.widgetDontContByEmailValue.text = kony.sync.getString(gblMemberDetailsObject.DontContByEmail);
            frmMemberDetailsDetails.widgetDateOfBirthValue.text = kony.sync.getString(gblMemberDetailsObject.DateOfBirth);
            frmMemberDetailsDetails.widgetEmailValue.text = kony.sync.getString(gblMemberDetailsObject.Email);
            frmMemberDetailsDetails.widgetEmpIDValue.text = kony.sync.getString(gblMemberDetailsObject.EmpID);
            frmMemberDetailsDetails.widgetFirstNameValue.text = kony.sync.getString(gblMemberDetailsObject.FirstName);
            frmMemberDetailsDetails.widgetGenderValue.text = kony.sync.getString(gblMemberDetailsObject.Gender);
            frmMemberDetailsDetails.widgetHeightValue.text = kony.sync.getString(gblMemberDetailsObject.Height);
            frmMemberDetailsDetails.widgetLastNameValue.text = kony.sync.getString(gblMemberDetailsObject.LastName);
            frmMemberDetailsDetails.widgetSubscriptnIDValue.text = kony.sync.getString(gblMemberDetailsObject.SubscriptnID);
            frmMemberDetailsDetails.widgetMemberIDValue.text = kony.sync.getString(gblMemberDetailsObject.MemberID);
            frmMemberDetailsDetails.widgetSubscriptnTypeValue.text = kony.sync.getString(gblMemberDetailsObject.SubscriptnType);
            frmMemberDetailsDetails.widgetRegNumberValue.text = kony.sync.getString(gblMemberDetailsObject.RegNumber);
            frmMemberDetailsDetails.widgetMemberTypeValue.text = kony.sync.getString(gblMemberDetailsObject.MemberType);
            frmMemberDetailsDetails.widgetBillingAddr1Value.text = kony.sync.getString(gblMemberDetailsObject.BillingAddr1);
            frmMemberDetailsDetails.widgetBillingAddr2Value.text = kony.sync.getString(gblMemberDetailsObject.BillingAddr2);
            frmMemberDetailsDetails.widgetBillingCityValue.text = kony.sync.getString(gblMemberDetailsObject.BillingCity);
            frmMemberDetailsDetails.widgetBillingCountryValue.text = kony.sync.getString(gblMemberDetailsObject.BillingCountry);
            frmMemberDetailsDetails.widgetBillingStateValue.text = kony.sync.getString(gblMemberDetailsObject.BillingState);
            frmMemberDetailsDetails.widgetBillingZipCodeValue.text = kony.sync.getString(gblMemberDetailsObject.BillingZipCode);
            frmMemberDetailsDetails.widgetConsWeightGainValue.text = kony.sync.getString(gblMemberDetailsObject.ConsWeightGain);
            frmMemberDetailsDetails.widgetCrntLifeTimeStaValue.text = kony.sync.getString(gblMemberDetailsObject.CrntLifeTimeSta);
            frmMemberDetailsDetails.widgetDontRecvCallsValue.text = kony.sync.getString(gblMemberDetailsObject.DontRecvCalls);
            frmMemberDetailsDetails.widgetDontCnctPhoneValue.text = kony.sync.getString(gblMemberDetailsObject.DontCnctPhone);
            frmMemberDetailsDetails.widgetDontCnctSMSValue.text = kony.sync.getString(gblMemberDetailsObject.DontCnctSMS);
            frmMemberDetailsDetails.widgetDontSendCardValue.text = kony.sync.getString(gblMemberDetailsObject.DontSendCard);
            frmMemberDetailsDetails.widgetDontSendCouponValue.text = kony.sync.getString(gblMemberDetailsObject.DontSendCoupon);
            frmMemberDetailsDetails.widgetEnrollmentDateValue.text = kony.sync.getString(gblMemberDetailsObject.EnrollmentDate);
            frmMemberDetailsDetails.widgetFeePaidValue.text = kony.sync.getString(gblMemberDetailsObject.FeePaid);
            frmMemberDetailsDetails.widgetLastAchvdMStoneValue.text = kony.sync.getString(gblMemberDetailsObject.LastAchvdMStone);
            frmMemberDetailsDetails.widgetLastContactDateValue.text = kony.sync.getString(gblMemberDetailsObject.LastContactDate);
            frmMemberDetailsDetails.widgetLastNteEntrDateValue.text = kony.sync.getString(gblMemberDetailsObject.LastNteEntrDate);
            frmMemberDetailsDetails.widgetLocationIDValue.text = kony.sync.getString(gblMemberDetailsObject.LocationID);
            frmMemberDetailsDetails.widgetMeetingDateValue.text = kony.sync.getString(gblMemberDetailsObject.MeetingDate);
            frmMemberDetailsDetails.widgetMtngOccrIDValue.text = kony.sync.getString(gblMemberDetailsObject.MtngOccrID);
            frmMemberDetailsDetails.widgetCouponCodeValue.text = kony.sync.getString(gblMemberDetailsObject.CouponCode);
            frmMemberDetailsDetails.widgetExpirationDateValue.text = kony.sync.getString(gblMemberDetailsObject.ExpirationDate);
            frmMemberDetailsDetails.widgetLastUsedDateValue.text = kony.sync.getString(gblMemberDetailsObject.LastUsedDate);
            frmMemberDetailsDetails.widgetProductIDValue.text = kony.sync.getString(gblMemberDetailsObject.ProductID);
            frmMemberDetailsDetails.widgetMissWeekPassesValue.text = kony.sync.getString(gblMemberDetailsObject.MissWeekPasses);
            frmMemberDetailsDetails.widgetNoWeeksAttendedValue.text = kony.sync.getString(gblMemberDetailsObject.NoWeeksAttended);
            frmMemberDetailsDetails.widgetPhone1Value.text = kony.sync.getString(gblMemberDetailsObject.Phone1);
            frmMemberDetailsDetails.widgetPhoneType1Value.text = kony.sync.getString(gblMemberDetailsObject.PhoneType1);
            frmMemberDetailsDetails.widgetPhone2Value.text = kony.sync.getString(gblMemberDetailsObject.Phone2);
            frmMemberDetailsDetails.widgetPhoneType2Value.text = kony.sync.getString(gblMemberDetailsObject.PhoneType2);
            frmMemberDetailsDetails.widgetPrevLifeTimeStaValue.text = kony.sync.getString(gblMemberDetailsObject.PrevLifeTimeSta);
            frmMemberDetailsDetails.widgetShippingAddr1Value.text = kony.sync.getString(gblMemberDetailsObject.ShippingAddr1);
            frmMemberDetailsDetails.widgetShippingAddr2Value.text = kony.sync.getString(gblMemberDetailsObject.ShippingAddr2);
            frmMemberDetailsDetails.widgetShippingCityValue.text = kony.sync.getString(gblMemberDetailsObject.ShippingCity);
            frmMemberDetailsDetails.widgetShippingCountryValue.text = kony.sync.getString(gblMemberDetailsObject.ShippingCountry);
            frmMemberDetailsDetails.widgetShippingStateValue.text = kony.sync.getString(gblMemberDetailsObject.ShippingState);
            frmMemberDetailsDetails.widgetShippingZipCodeValue.text = kony.sync.getString(gblMemberDetailsObject.ShippingZipCode);
            frmMemberDetailsDetails.widgetStartDateValue.text = kony.sync.getString(gblMemberDetailsObject.StartDate);
            frmMemberDetailsDetails.widgetStatusValue.text = kony.sync.getString(gblMemberDetailsObject.Status);
            frmMemberDetailsDetails.widgetTransactionTypeValue.text = kony.sync.getString(gblMemberDetailsObject.TransactionType);
            frmMemberDetailsDetails.widgetWeeksCompletedValue.text = kony.sync.getString(gblMemberDetailsObject.WeeksCompleted);
            frmMemberDetailsDetails.widgetWeightGainValue.text = kony.sync.getString(gblMemberDetailsObject.WeightGain);
            frmMemberDetailsDetails.show();
        }
        //Showing alert when result set is empty
        else {
            callAlert(getMessageTemplate("noData"), "info")
        }
    }
    if (fromBack == true) {
        getMemberDetailsbyPKObject.DontContByEmail = gblMemberDetailsObject.DontContByEmail;
    } else {
        //Storing the primary key in global variable to be used for other ORMs
        getMemberDetailsbyPKObject.DontContByEmail = frmMemberDetailsList.seguiList.selectedItems[0].DontContByEmail;
    }
    // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK ORM API
    getMemberDetailsbyPKObject.getAllDetailsByPK(getMemberDetailsSuccessCallback, eventErrorCallBack);
}
/* This method deletes an instance of MemberDetails identified by Primary Key (unique identifier) of the object 
 * and loads the frmMemberDetailsList with refreshed data
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function deleteByPKMemberDetails() {
    // Success callback deletes the entry of specified record on frmMemberDetailsDetails
    function deleteByPKMemberDetailsSuccessCallback(res) {
        callAlert(getMessageTemplate("deleteSuccess", "MemberDetails"), "info")
        gblMemberDetailsObject = null;
        kony.appgen.comingFromDelete = true;
        goBackToMemberDetailsList();
    }
    // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.deleteByByPK ORM API
    function handler(response) {
        if (response == true) {
            gblMemberDetailsObject.deleteByPK(deleteByPKMemberDetailsSuccessCallback, eventErrorCallBack);
        }
    }
    callAlert(getMessageTemplate("delete", "MemberDetails"), "confirmation", handler, "", "YES", "NO")
}
/* This method updates an instance of MemberDetails identified by Primary Key (unique identifier) of the object
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function updateByPKMemberDetails() {
    //Success callback that displays an alert on successful update
    function updateByPKMemberDetailsSuccessCallback(res) {
        callAlert(getMessageTemplate("updateSuccess", "MemberDetails"), "info")
    }

    function updateByPKMemberDetailsErrorCallback(res) {
        gblMemberDetailsObject = gblMemberDetailstempObject;
        eventErrorCallBack(res);
    }
    //storing the global object in a temporary object as backup in case the update fails
    var gblMemberDetailstempObject = kony.sync.CreateCopy(gblMemberDetailsObject);
    //Preparing an object to store the values to be updated
    gblMemberDetailsObject.DateOfBirth = frmMemberDetailsEdit.widgetDateOfBirthValue.text;
    gblMemberDetailsObject.EmpID = frmMemberDetailsEdit.widgetEmpIDValue.text;
    gblMemberDetailsObject.FirstName = frmMemberDetailsEdit.widgetFirstNameValue.text;
    gblMemberDetailsObject.Gender = frmMemberDetailsEdit.widgetGenderValue.text;
    gblMemberDetailsObject.Height = frmMemberDetailsEdit.widgetHeightValue.text;
    gblMemberDetailsObject.LastName = frmMemberDetailsEdit.widgetLastNameValue.text;
    gblMemberDetailsObject.SubscriptnID = frmMemberDetailsEdit.widgetSubscriptnIDValue.text;
    gblMemberDetailsObject.MemberID = frmMemberDetailsEdit.widgetMemberIDValue.text;
    gblMemberDetailsObject.SubscriptnType = frmMemberDetailsEdit.widgetSubscriptnTypeValue.text;
    gblMemberDetailsObject.RegNumber = frmMemberDetailsEdit.widgetRegNumberValue.text;
    gblMemberDetailsObject.MemberType = frmMemberDetailsEdit.widgetMemberTypeValue.text;
    gblMemberDetailsObject.BillingAddr1 = frmMemberDetailsEdit.widgetBillingAddr1Value.text;
    gblMemberDetailsObject.BillingAddr2 = frmMemberDetailsEdit.widgetBillingAddr2Value.text;
    gblMemberDetailsObject.BillingCity = frmMemberDetailsEdit.widgetBillingCityValue.text;
    gblMemberDetailsObject.BillingCountry = frmMemberDetailsEdit.widgetBillingCountryValue.text;
    gblMemberDetailsObject.BillingState = frmMemberDetailsEdit.widgetBillingStateValue.text;
    gblMemberDetailsObject.BillingZipCode = frmMemberDetailsEdit.widgetBillingZipCodeValue.text;
    gblMemberDetailsObject.ConsWeightGain = frmMemberDetailsEdit.widgetConsWeightGainValue.text;
    gblMemberDetailsObject.CrntLifeTimeSta = frmMemberDetailsEdit.widgetCrntLifeTimeStaValue.text;
    gblMemberDetailsObject.DontRecvCalls = frmMemberDetailsEdit.widgetDontRecvCallsValue.text;
    gblMemberDetailsObject.DontCnctPhone = frmMemberDetailsEdit.widgetDontCnctPhoneValue.text;
    gblMemberDetailsObject.DontCnctSMS = frmMemberDetailsEdit.widgetDontCnctSMSValue.text;
    gblMemberDetailsObject.DontSendCard = frmMemberDetailsEdit.widgetDontSendCardValue.text;
    gblMemberDetailsObject.DontSendCoupon = frmMemberDetailsEdit.widgetDontSendCouponValue.text;
    gblMemberDetailsObject.EnrollmentDate = frmMemberDetailsEdit.widgetEnrollmentDateValue.formattedDate;
    gblMemberDetailsObject.FeePaid = frmMemberDetailsEdit.widgetFeePaidValue.text;
    gblMemberDetailsObject.LastAchvdMStone = frmMemberDetailsEdit.widgetLastAchvdMStoneValue.text;
    gblMemberDetailsObject.LastContactDate = frmMemberDetailsEdit.widgetLastContactDateValue.formattedDate;
    gblMemberDetailsObject.LastNteEntrDate = frmMemberDetailsEdit.widgetLastNteEntrDateValue.formattedDate;
    gblMemberDetailsObject.LocationID = frmMemberDetailsEdit.widgetLocationIDValue.text;
    gblMemberDetailsObject.MeetingDate = frmMemberDetailsEdit.widgetMeetingDateValue.formattedDate;
    gblMemberDetailsObject.MtngOccrID = frmMemberDetailsEdit.widgetMtngOccrIDValue.text;
    gblMemberDetailsObject.CouponCode = frmMemberDetailsEdit.widgetCouponCodeValue.text;
    gblMemberDetailsObject.ExpirationDate = frmMemberDetailsEdit.widgetExpirationDateValue.text;
    gblMemberDetailsObject.LastUsedDate = frmMemberDetailsEdit.widgetLastUsedDateValue.text;
    gblMemberDetailsObject.ProductID = frmMemberDetailsEdit.widgetProductIDValue.text;
    gblMemberDetailsObject.MissWeekPasses = frmMemberDetailsEdit.widgetMissWeekPassesValue.text;
    gblMemberDetailsObject.NoWeeksAttended = frmMemberDetailsEdit.widgetNoWeeksAttendedValue.text;
    gblMemberDetailsObject.Phone1 = frmMemberDetailsEdit.widgetPhone1Value.text;
    gblMemberDetailsObject.PhoneType1 = frmMemberDetailsEdit.widgetPhoneType1Value.text;
    gblMemberDetailsObject.Phone2 = frmMemberDetailsEdit.widgetPhone2Value.text;
    gblMemberDetailsObject.PhoneType2 = frmMemberDetailsEdit.widgetPhoneType2Value.text;
    gblMemberDetailsObject.PrevLifeTimeSta = frmMemberDetailsEdit.widgetPrevLifeTimeStaValue.text;
    gblMemberDetailsObject.ShippingAddr1 = frmMemberDetailsEdit.widgetShippingAddr1Value.text;
    gblMemberDetailsObject.ShippingAddr2 = frmMemberDetailsEdit.widgetShippingAddr2Value.text;
    gblMemberDetailsObject.ShippingCity = frmMemberDetailsEdit.widgetShippingCityValue.text;
    gblMemberDetailsObject.ShippingCountry = frmMemberDetailsEdit.widgetShippingCountryValue.text;
    gblMemberDetailsObject.ShippingState = frmMemberDetailsEdit.widgetShippingStateValue.text;
    gblMemberDetailsObject.ShippingZipCode = frmMemberDetailsEdit.widgetShippingZipCodeValue.text;
    gblMemberDetailsObject.StartDate = frmMemberDetailsEdit.widgetStartDateValue.formattedDate;
    gblMemberDetailsObject.Status = frmMemberDetailsEdit.widgetStatusValue.text;
    gblMemberDetailsObject.TransactionType = frmMemberDetailsEdit.widgetTransactionTypeValue.text;
    gblMemberDetailsObject.WeeksCompleted = frmMemberDetailsEdit.widgetWeeksCompletedValue.text;
    gblMemberDetailsObject.WeightGain = frmMemberDetailsEdit.widgetWeightGainValue.text;
    // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.updateByByPK ORM API
    gblMemberDetailsObject.updateByPK(updateByPKMemberDetailsSuccessCallback, updateByPKMemberDetailsErrorCallback);
}
/*  This method retrieves all instances of WeighDetails With MemberID for MemberDetails which is identified by given Primary Key (unique identifier) of the object
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function getWeighDetailsForMemberDetailsWithMemberID() {
    function successCallback(res) {
        if (res != null && res.length > 0) {
            //back button global for relationship
            gblWeighDetailsBack = getWeighDetailsForMemberDetailsWithMemberID;
            //preparing object to be mapped to SegmentedUI
            var objectToMap = [];
            for (var i in res) {
                var v = res[i];
                objectToMap[i] = new Object();
                objectToMap[i]["widgetMemberIDValue"] = v.MemberID;
                objectToMap[i]["widgetWeighIdValue"] = v.WeighId;
                //preparing primary key object to be mapped to SegmentedUI as hidden variable
                objectToMap[i]["MemberID"] = v.MemberID;
                objectToMap[i]["WeighId"] = v.WeighId;
            }
            //Set the data to the Segmented UI
            frmWeighDetailsList.seguiList.setData(objectToMap);
            frmWeighDetailsList.show();
            //Dismiss Loading screen
            dismissSyncLoadingScreen();
        }
        //Showing alert when result set is empty	
        else {
            if (kony.appgen.comingFromDelete !== true) {
                callAlert(getMessageTemplate("noData"), "info")
                dismissSyncLoadingScreen();
            } else {
                frmWeighDetailsList.seguiList.removeAll();
                frmWeighDetailsList.show();
                dismissSyncLoadingScreen();
                kony.appgen.comingFromDelete = false;
            }
        }
    }
    showSyncLoadingScreen("Loading Data");
    gblMemberDetailsObject.getWeighDetailsWithMemberID(successCallback, eventErrorCallBack);
}
/*  This method navigates to Add Form of MemberDetails object after resetting the fields 
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function showAddMemberDetailsForm() {
    //Resetting the fields				
    frmMemberDetailsAdd.widgetDontContByEmailValue.text = "";
    frmMemberDetailsAdd.widgetDateOfBirthValue.text = "";
    frmMemberDetailsAdd.widgetEmailValue.text = "";
    frmMemberDetailsAdd.widgetEmpIDValue.text = "";
    frmMemberDetailsAdd.widgetFirstNameValue.text = "";
    frmMemberDetailsAdd.widgetGenderValue.text = "";
    frmMemberDetailsAdd.widgetHeightValue.text = "";
    frmMemberDetailsAdd.widgetLastNameValue.text = "";
    frmMemberDetailsAdd.widgetSubscriptnIDValue.text = "";
    frmMemberDetailsAdd.widgetMemberIDValue.text = "";
    frmMemberDetailsAdd.widgetSubscriptnTypeValue.text = "";
    frmMemberDetailsAdd.widgetRegNumberValue.text = "";
    frmMemberDetailsAdd.widgetMemberTypeValue.text = "";
    frmMemberDetailsAdd.widgetBillingAddr1Value.text = "";
    frmMemberDetailsAdd.widgetBillingAddr2Value.text = "";
    frmMemberDetailsAdd.widgetBillingCityValue.text = "";
    frmMemberDetailsAdd.widgetBillingCountryValue.text = "";
    frmMemberDetailsAdd.widgetBillingStateValue.text = "";
    frmMemberDetailsAdd.widgetBillingZipCodeValue.text = "";
    frmMemberDetailsAdd.widgetConsWeightGainValue.text = "";
    frmMemberDetailsAdd.widgetCrntLifeTimeStaValue.text = "";
    frmMemberDetailsAdd.widgetDontRecvCallsValue.text = "";
    frmMemberDetailsAdd.widgetDontCnctPhoneValue.text = "";
    frmMemberDetailsAdd.widgetDontCnctSMSValue.text = "";
    frmMemberDetailsAdd.widgetDontSendCardValue.text = "";
    frmMemberDetailsAdd.widgetDontSendCouponValue.text = "";
    frmMemberDetailsAdd.widgetEnrollmentDateValue.dateComponents = {};
    frmMemberDetailsAdd.widgetFeePaidValue.text = "";
    frmMemberDetailsAdd.widgetLastAchvdMStoneValue.text = "";
    frmMemberDetailsAdd.widgetLastContactDateValue.dateComponents = {};
    frmMemberDetailsAdd.widgetLastNteEntrDateValue.dateComponents = {};
    frmMemberDetailsAdd.widgetLocationIDValue.text = "";
    frmMemberDetailsAdd.widgetMeetingDateValue.dateComponents = {};
    frmMemberDetailsAdd.widgetMtngOccrIDValue.text = "";
    frmMemberDetailsAdd.widgetCouponCodeValue.text = "";
    frmMemberDetailsAdd.widgetExpirationDateValue.text = "";
    frmMemberDetailsAdd.widgetLastUsedDateValue.text = "";
    frmMemberDetailsAdd.widgetProductIDValue.text = "";
    frmMemberDetailsAdd.widgetMissWeekPassesValue.text = "";
    frmMemberDetailsAdd.widgetNoWeeksAttendedValue.text = "";
    frmMemberDetailsAdd.widgetPhone1Value.text = "";
    frmMemberDetailsAdd.widgetPhoneType1Value.text = "";
    frmMemberDetailsAdd.widgetPhone2Value.text = "";
    frmMemberDetailsAdd.widgetPhoneType2Value.text = "";
    frmMemberDetailsAdd.widgetPrevLifeTimeStaValue.text = "";
    frmMemberDetailsAdd.widgetShippingAddr1Value.text = "";
    frmMemberDetailsAdd.widgetShippingAddr2Value.text = "";
    frmMemberDetailsAdd.widgetShippingCityValue.text = "";
    frmMemberDetailsAdd.widgetShippingCountryValue.text = "";
    frmMemberDetailsAdd.widgetShippingStateValue.text = "";
    frmMemberDetailsAdd.widgetShippingZipCodeValue.text = "";
    frmMemberDetailsAdd.widgetStartDateValue.dateComponents = {};
    frmMemberDetailsAdd.widgetStatusValue.text = "";
    frmMemberDetailsAdd.widgetTransactionTypeValue.text = "";
    frmMemberDetailsAdd.widgetWeeksCompletedValue.text = "";
    frmMemberDetailsAdd.widgetWeightGainValue.text = "";
    frmMemberDetailsAdd.show();
}
/*  This method navigates to Edit Form of MemberDetails object
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function showEditMemberDetailsForm() {
    // Success callback reads the response and populates the fields on frmMemberDetailsEdit
    function editMemberDetailsSuccessCallback(res) {
        if (res != null && res.length > 0) {
            frmMemberDetailsEdit.widgetDateOfBirthValue.text = checkUndefined(res[0].DateOfBirth).trim();
            frmMemberDetailsEdit.widgetEmpIDValue.text = checkUndefined(res[0].EmpID).trim();
            frmMemberDetailsEdit.widgetFirstNameValue.text = checkUndefined(res[0].FirstName).trim();
            frmMemberDetailsEdit.widgetGenderValue.text = checkUndefined(res[0].Gender).trim();
            frmMemberDetailsEdit.widgetHeightValue.text = checkUndefined(res[0].Height).trim();
            frmMemberDetailsEdit.widgetLastNameValue.text = checkUndefined(res[0].LastName).trim();
            frmMemberDetailsEdit.widgetSubscriptnIDValue.text = checkUndefined(res[0].SubscriptnID).trim();
            frmMemberDetailsEdit.widgetMemberIDValue.text = checkUndefined(res[0].MemberID).trim();
            frmMemberDetailsEdit.widgetSubscriptnTypeValue.text = checkUndefined(res[0].SubscriptnType).trim();
            frmMemberDetailsEdit.widgetRegNumberValue.text = checkUndefined(res[0].RegNumber).trim();
            frmMemberDetailsEdit.widgetMemberTypeValue.text = checkUndefined(res[0].MemberType).trim();
            frmMemberDetailsEdit.widgetBillingAddr1Value.text = checkUndefined(res[0].BillingAddr1).trim();
            frmMemberDetailsEdit.widgetBillingAddr2Value.text = checkUndefined(res[0].BillingAddr2).trim();
            frmMemberDetailsEdit.widgetBillingCityValue.text = checkUndefined(res[0].BillingCity).trim();
            frmMemberDetailsEdit.widgetBillingCountryValue.text = checkUndefined(res[0].BillingCountry).trim();
            frmMemberDetailsEdit.widgetBillingStateValue.text = checkUndefined(res[0].BillingState).trim();
            frmMemberDetailsEdit.widgetBillingZipCodeValue.text = checkUndefined(res[0].BillingZipCode).trim();
            frmMemberDetailsEdit.widgetConsWeightGainValue.text = checkUndefined(res[0].ConsWeightGain);
            frmMemberDetailsEdit.widgetCrntLifeTimeStaValue.text = checkUndefined(res[0].CrntLifeTimeSta).trim();
            frmMemberDetailsEdit.widgetDontRecvCallsValue.text = checkUndefined(res[0].DontRecvCalls).trim();
            frmMemberDetailsEdit.widgetDontCnctPhoneValue.text = checkUndefined(res[0].DontCnctPhone).trim();
            frmMemberDetailsEdit.widgetDontCnctSMSValue.text = checkUndefined(res[0].DontCnctSMS).trim();
            frmMemberDetailsEdit.widgetDontSendCardValue.text = checkUndefined(res[0].DontSendCard).trim();
            frmMemberDetailsEdit.widgetDontSendCouponValue.text = checkUndefined(res[0].DontSendCoupon).trim();
            var inputDate;
            var mydate;
            inputDate = checkUndefined(res[0].EnrollmentDate)
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
            frmMemberDetailsEdit.widgetEnrollmentDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMemberDetailsEdit.widgetFeePaidValue.text = checkUndefined(res[0].FeePaid).trim();
            frmMemberDetailsEdit.widgetLastAchvdMStoneValue.text = checkUndefined(res[0].LastAchvdMStone);
            inputDate = checkUndefined(res[0].LastContactDate)
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
            frmMemberDetailsEdit.widgetLastContactDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            inputDate = checkUndefined(res[0].LastNteEntrDate)
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
            frmMemberDetailsEdit.widgetLastNteEntrDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMemberDetailsEdit.widgetLocationIDValue.text = checkUndefined(res[0].LocationID);
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
            frmMemberDetailsEdit.widgetMeetingDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMemberDetailsEdit.widgetMtngOccrIDValue.text = checkUndefined(res[0].MtngOccrID);
            frmMemberDetailsEdit.widgetCouponCodeValue.text = checkUndefined(res[0].CouponCode).trim();
            frmMemberDetailsEdit.widgetExpirationDateValue.text = checkUndefined(res[0].ExpirationDate).trim();
            frmMemberDetailsEdit.widgetLastUsedDateValue.text = checkUndefined(res[0].LastUsedDate).trim();
            frmMemberDetailsEdit.widgetProductIDValue.text = checkUndefined(res[0].ProductID).trim();
            frmMemberDetailsEdit.widgetMissWeekPassesValue.text = checkUndefined(res[0].MissWeekPasses);
            frmMemberDetailsEdit.widgetNoWeeksAttendedValue.text = checkUndefined(res[0].NoWeeksAttended);
            frmMemberDetailsEdit.widgetPhone1Value.text = checkUndefined(res[0].Phone1).trim();
            frmMemberDetailsEdit.widgetPhoneType1Value.text = checkUndefined(res[0].PhoneType1).trim();
            frmMemberDetailsEdit.widgetPhone2Value.text = checkUndefined(res[0].Phone2).trim();
            frmMemberDetailsEdit.widgetPhoneType2Value.text = checkUndefined(res[0].PhoneType2).trim();
            frmMemberDetailsEdit.widgetPrevLifeTimeStaValue.text = checkUndefined(res[0].PrevLifeTimeSta).trim();
            frmMemberDetailsEdit.widgetShippingAddr1Value.text = checkUndefined(res[0].ShippingAddr1).trim();
            frmMemberDetailsEdit.widgetShippingAddr2Value.text = checkUndefined(res[0].ShippingAddr2).trim();
            frmMemberDetailsEdit.widgetShippingCityValue.text = checkUndefined(res[0].ShippingCity).trim();
            frmMemberDetailsEdit.widgetShippingCountryValue.text = checkUndefined(res[0].ShippingCountry).trim();
            frmMemberDetailsEdit.widgetShippingStateValue.text = checkUndefined(res[0].ShippingState).trim();
            frmMemberDetailsEdit.widgetShippingZipCodeValue.text = checkUndefined(res[0].ShippingZipCode).trim();
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
            frmMemberDetailsEdit.widgetStartDateValue.dateComponents = [mydate.getDate(), mydate.getMonth() + 1, mydate.getFullYear()];
            frmMemberDetailsEdit.widgetStatusValue.text = checkUndefined(res[0].Status).trim();
            frmMemberDetailsEdit.widgetTransactionTypeValue.text = checkUndefined(res[0].TransactionType).trim();
            frmMemberDetailsEdit.widgetWeeksCompletedValue.text = checkUndefined(res[0].WeeksCompleted);
            frmMemberDetailsEdit.widgetWeightGainValue.text = checkUndefined(res[0].WeightGain).trim();
            frmMemberDetailsEdit.show();
        }
    }
    // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK ORM API
    gblMemberDetailsObject.getAllDetailsByPK(editMemberDetailsSuccessCallback, eventErrorCallBack);
}
/* This method creates an instance of MemberDetails
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function createMemberDetails() {
    var createMemberDetailsObject = {};
    // Success callback creates a new record on frmMemberDetailsDetails	
    function createMemberDetailsSuccessCallback(res) {
        callAlert(getMessageTemplate("addSuccess", "MemberDetails"), "info")
    }
    createMemberDetailsObject.DontContByEmail = frmMemberDetailsAdd.widgetDontContByEmailValue.text;
    createMemberDetailsObject.DateOfBirth = frmMemberDetailsAdd.widgetDateOfBirthValue.text;
    createMemberDetailsObject.Email = frmMemberDetailsAdd.widgetEmailValue.text;
    createMemberDetailsObject.EmpID = frmMemberDetailsAdd.widgetEmpIDValue.text;
    createMemberDetailsObject.FirstName = frmMemberDetailsAdd.widgetFirstNameValue.text;
    createMemberDetailsObject.Gender = frmMemberDetailsAdd.widgetGenderValue.text;
    createMemberDetailsObject.Height = frmMemberDetailsAdd.widgetHeightValue.text;
    createMemberDetailsObject.LastName = frmMemberDetailsAdd.widgetLastNameValue.text;
    createMemberDetailsObject.SubscriptnID = frmMemberDetailsAdd.widgetSubscriptnIDValue.text;
    createMemberDetailsObject.MemberID = frmMemberDetailsAdd.widgetMemberIDValue.text;
    createMemberDetailsObject.SubscriptnType = frmMemberDetailsAdd.widgetSubscriptnTypeValue.text;
    createMemberDetailsObject.RegNumber = frmMemberDetailsAdd.widgetRegNumberValue.text;
    createMemberDetailsObject.MemberType = frmMemberDetailsAdd.widgetMemberTypeValue.text;
    createMemberDetailsObject.BillingAddr1 = frmMemberDetailsAdd.widgetBillingAddr1Value.text;
    createMemberDetailsObject.BillingAddr2 = frmMemberDetailsAdd.widgetBillingAddr2Value.text;
    createMemberDetailsObject.BillingCity = frmMemberDetailsAdd.widgetBillingCityValue.text;
    createMemberDetailsObject.BillingCountry = frmMemberDetailsAdd.widgetBillingCountryValue.text;
    createMemberDetailsObject.BillingState = frmMemberDetailsAdd.widgetBillingStateValue.text;
    createMemberDetailsObject.BillingZipCode = frmMemberDetailsAdd.widgetBillingZipCodeValue.text;
    createMemberDetailsObject.ConsWeightGain = frmMemberDetailsAdd.widgetConsWeightGainValue.text;
    createMemberDetailsObject.CrntLifeTimeSta = frmMemberDetailsAdd.widgetCrntLifeTimeStaValue.text;
    createMemberDetailsObject.DontRecvCalls = frmMemberDetailsAdd.widgetDontRecvCallsValue.text;
    createMemberDetailsObject.DontCnctPhone = frmMemberDetailsAdd.widgetDontCnctPhoneValue.text;
    createMemberDetailsObject.DontCnctSMS = frmMemberDetailsAdd.widgetDontCnctSMSValue.text;
    createMemberDetailsObject.DontSendCard = frmMemberDetailsAdd.widgetDontSendCardValue.text;
    createMemberDetailsObject.DontSendCoupon = frmMemberDetailsAdd.widgetDontSendCouponValue.text;
    createMemberDetailsObject.EnrollmentDate = frmMemberDetailsAdd.widgetEnrollmentDateValue.formattedDate;
    createMemberDetailsObject.FeePaid = frmMemberDetailsAdd.widgetFeePaidValue.text;
    createMemberDetailsObject.LastAchvdMStone = frmMemberDetailsAdd.widgetLastAchvdMStoneValue.text;
    createMemberDetailsObject.LastContactDate = frmMemberDetailsAdd.widgetLastContactDateValue.formattedDate;
    createMemberDetailsObject.LastNteEntrDate = frmMemberDetailsAdd.widgetLastNteEntrDateValue.formattedDate;
    createMemberDetailsObject.LocationID = frmMemberDetailsAdd.widgetLocationIDValue.text;
    createMemberDetailsObject.MeetingDate = frmMemberDetailsAdd.widgetMeetingDateValue.formattedDate;
    createMemberDetailsObject.MtngOccrID = frmMemberDetailsAdd.widgetMtngOccrIDValue.text;
    createMemberDetailsObject.CouponCode = frmMemberDetailsAdd.widgetCouponCodeValue.text;
    createMemberDetailsObject.ExpirationDate = frmMemberDetailsAdd.widgetExpirationDateValue.text;
    createMemberDetailsObject.LastUsedDate = frmMemberDetailsAdd.widgetLastUsedDateValue.text;
    createMemberDetailsObject.ProductID = frmMemberDetailsAdd.widgetProductIDValue.text;
    createMemberDetailsObject.MissWeekPasses = frmMemberDetailsAdd.widgetMissWeekPassesValue.text;
    createMemberDetailsObject.NoWeeksAttended = frmMemberDetailsAdd.widgetNoWeeksAttendedValue.text;
    createMemberDetailsObject.Phone1 = frmMemberDetailsAdd.widgetPhone1Value.text;
    createMemberDetailsObject.PhoneType1 = frmMemberDetailsAdd.widgetPhoneType1Value.text;
    createMemberDetailsObject.Phone2 = frmMemberDetailsAdd.widgetPhone2Value.text;
    createMemberDetailsObject.PhoneType2 = frmMemberDetailsAdd.widgetPhoneType2Value.text;
    createMemberDetailsObject.PrevLifeTimeSta = frmMemberDetailsAdd.widgetPrevLifeTimeStaValue.text;
    createMemberDetailsObject.ShippingAddr1 = frmMemberDetailsAdd.widgetShippingAddr1Value.text;
    createMemberDetailsObject.ShippingAddr2 = frmMemberDetailsAdd.widgetShippingAddr2Value.text;
    createMemberDetailsObject.ShippingCity = frmMemberDetailsAdd.widgetShippingCityValue.text;
    createMemberDetailsObject.ShippingCountry = frmMemberDetailsAdd.widgetShippingCountryValue.text;
    createMemberDetailsObject.ShippingState = frmMemberDetailsAdd.widgetShippingStateValue.text;
    createMemberDetailsObject.ShippingZipCode = frmMemberDetailsAdd.widgetShippingZipCodeValue.text;
    createMemberDetailsObject.StartDate = frmMemberDetailsAdd.widgetStartDateValue.formattedDate;
    createMemberDetailsObject.Status = frmMemberDetailsAdd.widgetStatusValue.text;
    createMemberDetailsObject.TransactionType = frmMemberDetailsAdd.widgetTransactionTypeValue.text;
    createMemberDetailsObject.WeeksCompleted = frmMemberDetailsAdd.widgetWeeksCompletedValue.text;
    createMemberDetailsObject.WeightGain = frmMemberDetailsAdd.widgetWeightGainValue.text;
    // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.create ORM API
    DBMemberDetailsController.create(createMemberDetailsObject, createMemberDetailsSuccessCallback, eventErrorCallBack);
}
/* This method loads respective relationship list form
 *
 * Created On: Mon Mar 31 12:38:14 IST 2014
 * Created by: ispl_336
 */
function showMemberDetailsRelationship() {
    showSyncLoadingScreen("LoadingData");
    if (frmMemberDetailsDetails.seguiRelationship.selectedIndex[1] == 0) {
        getWeighDetailsForMemberDetailsWithMemberID();
    }
}

function goBackToMemberDetailsList() {
    gblComingFromHome = true;
    offsetForListView = 0;
    goBack(gblMemberDetailsBack);
}

function getAllMemberDetailsFromMenu() {
    gblComingFromHome = true;
    limitForListView = gblLimitForListView;
    offsetForListView = 0;
    isPageLimit = false;
    showSyncLoadingScreen("Loading Data");
    getAllMemberDetails();
}

function onReachEventMemberDetails() {
    if (gblMemberDetailsBack) {
        gblMemberDetailsBack();
    } else {
        getAllMemberDetails();
    }
}

function getMemberDetailsByDeviceMemberID(whereClause) {
    function getMemberDetailsByDeviceMemberIDSuccessCallback(res) {
        termMemberInfo = new Object();
        if (res.length > 0) {
            termMemberInfo.RegNumber = checkUndefined(res[0].RegNumber).trim();
            termMemberInfo.FirstName = checkUndefined(res[0].FirstName).trim();
            termMemberInfo.LastName = checkUndefined(res[0].LastName).trim();
            termMemberInfo.Gender = checkUndefined(res[0].Gender).trim();
            termMemberInfo.Height = checkUndefined(res[0].Height).trim();
            termMemberInfo.Email = checkUndefined(res[0].Email).trim();
            termMemberInfo.DeviceMemberID = checkUndefined(res[0].DeviceMemberID).trim();
            termMemberInfo.DateOfBirth = checkUndefined(res[0].DateOfBirth).trim();
            termMemberInfo.MemberType = checkUndefined(res[0].MemberType).trim();
            termMemberInfo.BillingAddr1 = checkUndefined(res[0].BillingAddr1).trim();
            termMemberInfo.BillingAddr2 = checkUndefined(res[0].BillingAddr2).trim();
            termMemberInfo.BillingCity = checkUndefined(res[0].BillingCity).trim();
            termMemberInfo.BillingCountry = checkUndefined(res[0].BillingCountry).trim();
            termMemberInfo.BillingState = checkUndefined(res[0].BillingState).trim();
            termMemberInfo.BillingZipCode = checkUndefined(res[0].BillingZipCode).trim();
            termMemberInfo.Phone = checkUndefined(res[0].Phone1).trim();
            alertForTermed();
        }
    }
    DBMemberDetailsController.find(whereClause, getMemberDetailsByDeviceMemberIDSuccessCallback, eventErrorCallBack)
}