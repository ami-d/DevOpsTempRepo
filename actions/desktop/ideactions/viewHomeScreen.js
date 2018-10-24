//var TempData=[];
var gblBarcodeScannedData = "";
var gblScannedData = "";
var gblScannedCouponCode = "";
var isSubIdSearched = false;
var glbTotalWeightLoss = 0.0;
var chkMember = [];

function displayHomeScreen(status, responseObj) {
    try {
        if (status) {
            frmHomeScreen.hbxTableTitle.isVisible = true;
            kony.print("Adding data to segment");
            isSortAscendingHome = false;
            frmHomeScreen.segHomeMemberView.setData(responseObj);
            eventOnClickVboxSortImg();
        } else {}
    } catch (e) {
        GlobalException(e);
    }
}
/* binding global menu array to segment */
function createDynamicMenu() {
    var homeMenuOptions = _.where(glbHomeMenuOptions, {
        isActive: true
    })
    kony.print("The value of dynamic home array " + JSON.stringify(homeMenuOptions));
    popupHomeMenu.HomeScreenMenuSegment.setData(homeMenuOptions);
}

function displayMemberProfileScreenWithAdvancedSearch(status, isRefineSearch, toShowForm, responseObj) {
    try {
        if (status) {
            kony.print("is toShowForm " + toShowForm);
            if (responseObj == null) {
                kony.print("is coming from refine search " + isRefineSearch);
                if (!isRefineSearch) {
                    advanceSearchHeader = "Name";
                    popupMemberNotFound.show();
                    frmMemberProfileSearch.segMemberProfileSearch.removeAll();
                    frmMemberProfileSearch.hbox12443534673981868.isVisible = true;
                    frmMemberProfileSearch.segMemberProfileSearch.isVisible = false;
                    frmMemberProfileSearch.lblShowMoreResult.isVisible = true;
                    frmMemberProfileSearch.lblShowMoreResult.text = kony.i18n.getLocalizedString("strmsgNoMemberFound");
                } else {
                    frmMemberProfileSearch.lblShowMoreResult.text = kony.i18n.getLocalizedString("strmsgNoMemberFound");
                    frmMemberProfileSearch.lblShowMoreResult.isVisible = true;
                    frmMemberProfileSearch.hbox12443534673981868.isVisible = true;
                    frmMemberProfileSearch.segMemberProfileSearch.isVisible = false;

                    
                    kony.print("called shows " + toShowForm);
                    if (toShowForm) //Ami Add- to fix blocker issue for kony 6.0
                        frmMemberProfileSearch.show();

                }
            } else {
                kony.print("Adding data to form obj  " + responseObj + "    Length is ::: " + responseObj.length);
                popupAdvancedSearch.destroy(); // Added by Praveen Kalal MEG-2712
                frmMemberProfileSearch.lblShowMoreResult.isVisible = false;
                frmMemberProfileSearch.hbox12443534673981868.isVisible = true;
                frmMemberProfileSearch.segMemberProfileSearch.isVisible = true;
                frmMemberProfileSearch.segMemberProfileSearch.removeAll();
                frmMemberProfileSearch.segMemberProfileSearch.data = [];
                if (responseObj.length >= NumOfMemberToShow) {
                    responseObj = responseObj.slice(0, 100);
                    frmMemberProfileSearch.lblShowMoreResult.text = kony.i18n.getLocalizedString("strLblShowMoreResult");
                    frmMemberProfileSearch.lblShowMoreResult.setVisibility(true);
                } else {
                    frmMemberProfileSearch.lblShowMoreResult.setVisibility(false);
                }
                kony.print("Set Data " + "   Length is :::: " + responseObj.length);

                
                //added for MEG-5641
                _.each(responseObj,function(item){
                    if(item.MemberStatus == MemberStatusEnum[2] && in_array(deviceLocale,Countries["CA"])){
                        item.template = hboxInActiveMember;
                    }
                })
                
                kony.print(":::5541::responseObj::"+JSON.stringify(responseObj));
                isSortAscendingAdv = false;
                frmMemberProfileSearch.segMemberProfileSearch.setData(responseObj);
                eventOnClickVboxSortAdvResult();


                //Following condition is added for MEG-2180 - improvment for Barcode scan flow. If barcode is scanned and single record is found than not showing form directly
                if (toShowForm) {
                    frmMemberProfileSearch.show();
                }
            }
        }
    } catch (e) {
        GlobalException(e);
    }
}

//Added for MEG-6550
function displayMemberDataWithAdvancedSearch(data){
	kony.print("In displayMemberDataWithAdvancedSearch : "+ JSON.stringify(data));
	kony.print("In displayMemberDataWithAdvancedSearch selectedMemberData: "+ JSON.stringify(selectedMemberData));
	if((selectedMemberData != "" && selectedMemberData != undefined) && selectedMemberData.RegStatus == MemberRegEnum.Online && data == null){
		alertForMessages(kony.i18n.getLocalizedString("strMsgNoMemFound"));
		var selectedRow = 0;
		selectedMemberData.imgMPS2 = "icn_enroll_member_row.png";
		frmMemberProfileSearch.segMemberProfileSearch.setDataAt(selectedMemberData, selectedRow);
		selectedMemberData = "";
	}else{
    	displayMemberProfileScreenWithAdvancedSearch(true, false, true, data);
    }

}

function refineSearch() {
    try {
        var city = true;
        if (frmMemberProfileSearch.txtCity.text != undefined && frmMemberProfileSearch.txtCity.text != null && frmMemberProfileSearch.txtCity.text != "") {
            var valid = new validationcls();
            city = valid.checkCityForRefineSearch(frmMemberProfileSearch.txtCity.text).isValid();
        }

        if (frmHomeScreen_AdvancedSearch_temp != null && frmHomeScreen_AdvancedSearch_temp != undefined && frmHomeScreen_AdvancedSearch_temp != "" && city) {
            var cityValue = checkUndefined(frmMemberProfileSearch.txtCity.text);
            var stateValue = checkUndefined(frmMemberProfileSearch.lblStateInfo.text);
            var memberShipValue = checkUndefined(frmMemberProfileSearch.lblMemberTypeInfo.text);

            if (memberShipValue.toUpperCase() == 'LIFETIME') {
                memberShipValue = "LifeTime";
            } else if (memberShipValue.toUpperCase() == 'PAID') {
                memberShipValue = "Value";
            }

            var statusValue = checkUndefined(frmMemberProfileSearch.lblMemberStatusInfo.text);
            if (statusValue.toUpperCase() == 'TERMED') {
                statusValue = "Terminated";
            }
            var cityType = "";
            var stateType = "";
            var memberShipType = "";
            var statusType = "";
            var isSameRecord = false;
            if (cityValue.length > 0) {
                cityType = "lblMPSCity";
            } else {
                cityValue = '';
            }
            if (stateValue != "All") {
                stateType = "lblMPSState";
            } else {
                stateValue = '';
            }
            if (memberShipValue != "All") {
                memberShipType = "membershipType";

            } else {
                memberShipValue = '';
            }
            if (statusValue != "All") {
                statusType = "MemberStatus";

            } else {
                statusValue = '';
            }

            kony.print("cityValue == " + cityValue + "   stateValue == " + stateValue + "   memberShipValue ==" + memberShipValue + "   statusValue == " + statusValue);
            kony.print("lblMPSCity:" + "'" + cityValue + "'" + "lblMPSState:" + "'" + stateValue + "'" + "MembershipType:" + "'" + memberShipValue + "'" + "MemberStatus:" + "'" + statusValue + "'");
            var searchResults = [];
            kony.print("frmHomeScreen_AdvancedSearch_temp value before : " + JSON.stringify(frmHomeScreen_AdvancedSearch_temp));
            var filterstring = "";
            filterstring = {
                "lblMPSCity": cityValue,
                "lblMPSState": stateValue,
                "MembershipType": memberShipValue,
                "MemberStatus": statusValue
            };
            kony.print("Filter String : " + JSON.stringify(filterstring));
            searchResults = filter(frmHomeScreen_AdvancedSearch_temp, filterstring);

            kony.print("Search Result is : " + JSON.stringify(searchResults));
            if (searchResults != null && searchResults != undefined && searchResults.length > 0) {
                displayMemberProfileScreenWithAdvancedSearch(true, true, false, searchResults)
                kony.print("Search Result is : 1111");

            } else {
                displayMemberProfileScreenWithAdvancedSearch(true, true, false);

                kony.print("Search Result is : 2222");

            }
        }
    } catch (e) {
        GlobalException(e);
    }
}


function filter(arr, criteria) {
    return arr.filter(function(obj) {
        return Object.keys(criteria).every(function(c) {
            return new RegExp(criteria[c]).test(obj[c]);
        });
    });
}

// Function to search Simple data
function getSimpleSearchData() {
    isFromAdvanceSearch = false;
    try {
        var whrCondition = "";
        var firstnamesearchstr = checkUndefined(hboxHomeScreenHeader.tbxFirstNameHeader.text).toUpperCase();
        var lastnamesearchstr = checkUndefined(hboxHomeScreenHeader.tbxLastNameHeader.text).toUpperCase();

        var valid = new validationcls();

        if (firstnamesearchstr != "" && lastnamesearchstr != "") {

            var firstres = valid.checkEnrollFirstName(firstnamesearchstr).isValid();

            var lastres = valid.checkEnrollLastName(lastnamesearchstr).isValid();

            if (firstres == false || lastres == false) {
                return 1;
            }

            kony.print("::inside the search");
            whrCondition = "where m.FirstName like \"" + firstnamesearchstr + "\" and  m.LastName like \"" + lastnamesearchstr + "\"";
        } else if (firstnamesearchstr != "") {
            var firstres = valid
                .checkEnrollFirstName(firstnamesearchstr)
                .isValid();
            if (firstres == false) {
                return 1;
            }
            whrCondition = "where m.FirstName like \"" + firstnamesearchstr + "\"";
        } else if (lastnamesearchstr != "") {
            var lastres = valid
                .checkEnrollLastName(lastnamesearchstr)
                .isValid();
            if (lastres == false) {
                return 1;
            }
            whrCondition = "where m.LastName like \"" + lastnamesearchstr + "\"";
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgSearchNameValid"));
            return 1;
        }

        whrCondition = whrCondition + " and m.LocationID='" + glbLocationID + "'";

        // TODO: Search criteria for online search to be passed

        hboxPhoneSection.isVisible = false;
        hboxUserIdSection.isVisible = false;
        hboxMemberIdSection.isVisible = false;
        hboxNameSection.isVisible = true;
        hboxNameSection.lblCurrentMeetingName.text = glbCurrentMeetingValue;

        hboxNameSection.tbxFirstNameHeader.text = hboxHomeScreenHeader.tbxFirstNameHeader.text;
        hboxNameSection.tbxLastNameHeader.text = hboxHomeScreenHeader.tbxLastNameHeader.text;

        boHomeScreenSearch.getAdvancedSearchData(whrCondition, firstnamesearchstr, lastnamesearchstr, "", "", "", glbLocationID, "", "", "", "");

    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

function isStringEmptyOrNull(str) {

    if (str == undefined || str == null || str == "") {
        return true;
    }
    return false;
}
//MEG-70  Function to create Advanced search query
function createAdvancedSearchWhereClause(firstname, lastname, phone, memberid, email) {
	kony.print("SJ createAdvancedSearchWhereClause==>>"+firstname+"---"+ lastname+"---"+ phone+"---"+ memberid+"---"+ email)
    kony.print("Dileep --> Inside createAdvancedSearchWhereClause");
    try {

        
        popupStateRefineSearch.pickerState.setSelectedKeyInComponent("", 0);
        popupMemberType.pickerMemberType.setSelectedKeyInComponent(getLocalizedString("strAll"), 0);
        popupMemberStatus.pickerMemberStatus.setSelectedKeyInComponent(getLocalizedString("strAll"), 0);

        frmMemberProfileSearch.lblStateInfo.text = "";
        frmMemberProfileSearch.lblMemberTypeInfo.text = getLocalizedString("strAll");
        frmMemberProfileSearch.lblMemberStatusInfo.text = getLocalizedString("strAll");


        frmMemberProfileSearch.txtCity.text = "";
        var queryString = "";
        gblBarcodeScannedData = "";
        var isName, isPhone, isMemberId, isEmail = false;
        isSubIdSearched = false;
        var location = "",
            city = "",
            state = "",
            memStatus = "",
            memType = "";

        kony.print("selected value====>" + advanceSearchHeader.toUpperCase());
        if (advanceSearchHeader.toUpperCase() == "NAME") {
            isName = true;
            if (isStringEmptyOrNull(firstname)) {
                
                queryString = " m.LastName like \"" + lastname + "\"";
            } else if (isStringEmptyOrNull(lastname)) {
                queryString = " m.FirstName like \"" + firstname + "\"";
            } else {
                queryString = " m.FirstName like \"" + firstname + "\" and m.LastName like \"" + lastname + "\"";
            }

        } else if (advanceSearchHeader.toUpperCase() == "PHONE") {
            isPhone = true;
            queryString = queryString + " m.Phone1='" + phone + "' or m.Phone2='" + phone + "'";
        } else if (advanceSearchHeader.toUpperCase() == "MEMBERID") {
            isID = true;
            memberid = memberid.toUpperCase();
            var qString = getEnteredIDCondition(memberid);
            kony.print("qString : " + qString);
            if (qString != null && qString != undefined && qString.length > 0) {
                queryString = queryString + qString;
                gblBarcodeScannedData = memberid;
            } else {
                return;
            }
        } else if (advanceSearchHeader.toUpperCase() == "USERID") {
            kony.print(" USERID == " + email);
            isEmail = true;
            queryString = queryString + " m.Email like '" + email + "' ";
        }

        if (popupAdvancedSearch.lblMemberTypeInfo.text != getLocalizedString("strAll")) {
            memType = MemberValueEnum[parseInt(glbSelectMemType)];
            kony.print("Selected Member Tye : " + memType)
            queryString = queryString + " and  m.MemberType='" + memType + "'";
        }

        if (popupAdvancedSearch.lblMemberStatusInfo.text != getLocalizedString("strAll")) {
            memStatus = MemberStatusEnum[parseInt(glbSelectMemStatus)];
            kony.print("Selected Member status : " + memStatus)
            queryString = queryString + " and m.MemberStatus='" + memStatus + "'";
        }

        //TODO : uncomment this block after profile 

        if (popupAdvancedSearch.cmbLocationCityState.selectedKey.toUpperCase() == "LOCATION") {
            if (popupMeetingLocation.pickerMeetingLocation.selectedKeys[0] == kony.i18n.getLocalizedString("strCurrent")) {
                location = glbLocationID;
                queryString = queryString + " and m.LocationID='" + glbLocationID + "'";
            }
        } else if (popupAdvancedSearch.cmbLocationCityState.selectedKeys[0].toUpperCase() == "CITY_STATE") {
            city = popupAdvancedSearch.txtCity.text;
            state = popupState.pickerState.selectedKeys[0];
            queryString = queryString + " and ( m.BillingCity like '" + city + "' and m.BillingState like '" + state + "' ) or ( m.ShippingCity like '" + city + "' and m.ShippingState like '" + state + "' )";
        }

        eventonPostshowSearchResultPage();
        popupAdvancedSearch.destroy(); // Added by Praveen Kalal MEG-2712
        queryString = "where " + queryString;
        kony.print("Dileep --> calling boHomeScreenSearch.getAdvancedSearchData -> queryString = " + queryString);
        boHomeScreenSearch.getAdvancedSearchData(queryString, firstname, lastname, phone, memberid, email, location, city, state, memStatus, memType);

    } catch (e) {
        // todo: handle exception
        GlobalException(e);
    }
}

function getEnteredIDCondition(data) {
    data = data.toUpperCase();
    var barcodeChar = data.charAt(0);
    barcodeChar = barcodeChar.toUpperCase();
    kony.print("getEnteredIDCondition data: " + data);

    if (!in_array(barcodeChar, ['M', 'Q', 'P', 'W'])) {
        kony.print("Got the number as : " + data);
        var whrClause = " ( m.RegNumber like '" + data + "' or m.PreRegNumber like '" + data + "' ) ";
        return whrClause;
    } else {

        kony.print("Starting Char is : " + barcodeChar);
        var whrClause = "";
        switch (barcodeChar) {
            case "M":
            case "W":
                {
                    kony.print("Monthly Pass Searching");
                
                    var couponCode = data.substring(0, 9);
                    
                    kony.print(" Searching with " + couponCode);
                    isSubIdSearched = true;

                    whrClause = " (m.SubscriptnID like '" + couponCode + "' or m.CouponCode like '" + couponCode + "') and date(m.ExpirationDate) >= date('now','localtime') ";
                    break;
                }
            case "P":
                {
                    kony.print("Office code/Coupon searching");
                    whrClause = " ( m.SubscriptnID like '" + data + "' or m.CouponCode like '" + data + "' ) ";
                    break;
                }
            case "Q":
                {
                    kony.print("17 Week Pass searching");
                    
                    isSubIdSearched = true;
                    var couponCode = data.substring(0, 9);
                    kony.print(" Searching with 17- " + couponCode);
                    whrClause = " ( m.SubscriptnID like '" + couponCode + "' or m.CouponCode like '" + couponCode + "' ) ";
                    break;
                }
            default:
                {
                    kony.print("Unrecognized ID search");
                    // Dileep Chejerla: 16-Oct-2014: Added below for popup shrink issue when the entered member id is invalid
                    
                    displayPopupAlert(kony.i18n.getLocalizedString("strMsgSearchValid"));
                    break;
                }
        }
        kony.print("In Swithc return : " + whrClause);
        return whrClause;
    }
}


function eventonClickAdvancedSetting() {
    var context = {
        "widget": hboxHomeScreen.vbxAdvancedSearch,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupAdvancedSearch.setContext(context);
    popupAdvancedSearch.show();
}

function eventonClickvbxProcessMember() {

    var selectedIndex = frmHomeScreen.segHomeMemberView.selectedIndex;
    var selectedRow = parseInt(selectedIndex[1]);
    var selectedData = frmHomeScreen.segHomeMemberView.data[selectedRow];
    kony.print("selectedData[MemberStatus]------>>>" + selectedData["MemberStatus"]);

    if (selectedData["RegStatus"] == MemberRegEnum.Pre_Registered) {
        glbFormName = frmEnrollWeighMember;
        deviceLevelPreRegNo = selectedData["PreRegNumber"];
        kony.print("MemberID in Reg Status------>>>" + glbMemberId);
        kony.print("deviceLevelPreRegNo in Reg Status------>>>" + deviceLevelPreRegNo);
        var whrCondition = "where PreRegNumber = '" + deviceLevelPreRegNo + "'";
        boHomeScreenSearch.getPreRegMemberDetailsByMemberID(whrCondition);
    }
    
}


function eventOnClickVboxSortImg() {
    var obj = frmHomeScreen.segHomeMemberView.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagHome();
        if (sortFlag == true) {
            frmHomeScreen.imgSortHeader.src = "icn_sortby.png";
            frmHomeScreen.segHomeMemberView.data = obj.sort(compare);
        } else {
            frmHomeScreen.imgSortHeader.src = "icn_sortby_down.png";
            frmHomeScreen.segHomeMemberView.data = obj.reverse(compare);
        }
    }
}

function eventOnClickVboxFirstSortImg() {
    var obj = frmHomeScreen.segHomeMemberView.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagHome();
        if (sortFlag == true) {
            frmHomeScreen.imgSortFirstname.src = "icn_sortby.png";
            frmHomeScreen.segHomeMemberView.data = obj.sort(compareFirstName);
        } else {
            frmHomeScreen.imgSortFirstname.src = "icn_sortby_down.png";
            frmHomeScreen.segHomeMemberView.data = obj.reverse(compareFirstName);
        }
    }
}

function eventOnClickVBoxCheckedinSorting() {
    var obj = frmHomeScreen.segCheckedInMembers.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagHome();
        setSortFlagToDefault("LastName");
        if (sortFlag == true) {
            frmHomeScreen.imgCheckedinSort.src = "icn_sortby.png";
            frmHomeScreen.segCheckedInMembers.data = obj.sort(compareCheckedin);
        } else {
            frmHomeScreen.imgCheckedinSort.src = "icn_sortby_down.png";
            frmHomeScreen.segCheckedInMembers.data = obj.reverse(compareCheckedin);
        }
    }
}

function eventOnClickVBoxFirstNameCheckedinSorting() {
    var obj = frmHomeScreen.segCheckedInMembers.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagHomeFName();
        setSortFlagToDefault("FirstName");
        if (sortFlag == true) {
            frmHomeScreen.imgSortCheckInMemFirstName.src = "icn_sortby.png";
            frmHomeScreen.segCheckedInMembers.data = obj.sort(compareFirstCheckedin);
        } else {
            frmHomeScreen.imgSortCheckInMemFirstName.src = "icn_sortby_down.png";
            frmHomeScreen.segCheckedInMembers.data = obj.reverse(compareFirstCheckedin);
        }
    }
}

function eventOnClickVBoxSubTypeCheckedinSorting() {
    var obj = frmHomeScreen.segCheckedInMembers.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagHomeSubType();
        setSortFlagToDefault("SubType");
        if (sortFlag == true) {
            frmHomeScreen.imgSortCheckInMemSubType.src = "icn_sortby.png";
            frmHomeScreen.segCheckedInMembers.data = obj.sort(compareSubTypeCheckedin);
        } else {
            frmHomeScreen.imgSortCheckInMemSubType.src = "icn_sortby_down.png";
            frmHomeScreen.segCheckedInMembers.data = obj.reverse(compareSubTypeCheckedin);
        }
    }
}


function compare(firstObj, secondObj) {
    if (firstObj.lblLastName < secondObj.lblLastName)
        return -1;
    if (firstObj.lblLastName > secondObj.lblLastName)
        return 1;
    if (firstObj.lblLastName == secondObj.lblLastName) {
        if (firstObj.lblFirstName < secondObj.lblFirstName)
            return -1;
        if (firstObj.lblFirstName > secondObj.lblFirstName)
            return 1;
    }
    return 0;
}

function compareFirstName(firstObj, secondObj) {
    if (firstObj.lblFirstName < secondObj.lblFirstName)
        return -1;
    if (firstObj.lblFirstName > secondObj.lblFirstName)
        return 1;
    if (firstObj.lblFirstName == secondObj.lblFirstName) {
        if (firstObj.lblLastName < secondObj.lblLastName)
            return -1;
        if (firstObj.lblLastName > secondObj.lblLastName)
            return 1;
    }
    return 0;
}

function compareCheckedin(firstObj, secondObj) {
    if (firstObj.lblMPSLastName < secondObj.lblMPSLastName)
        return -1;
    if (firstObj.lblMPSLastName > secondObj.lblMPSLastName)
        return 1;
    if (firstObj.lblMPSLastName == secondObj.lblMPSLastName) {
        if (firstObj.lblMPSFirstName < secondObj.lblMPSFirstName)
            return -1;
        if (firstObj.lblMPSFirstName > secondObj.lblMPSFirstName)
            return 1;
    }
    return 0;
}

function compareFirstCheckedin(firstObj, secondObj) {
    if (firstObj.lblMPSFirstName < secondObj.lblMPSFirstName)
        return -1;
    if (firstObj.lblMPSFirstName > secondObj.lblMPSFirstName)
        return 1;
    if (firstObj.lblMPSFirstName == secondObj.lblMPSFirstName) {
        if (firstObj.lblMPSLastName < secondObj.lblMPSLastName)
            return -1;
        if (firstObj.lblMPSLastName > secondObj.lblMPSLastName)
            return 1;
    }
    return 0;
}

function compareSubTypeCheckedin(firstObj, secondObj) {
    if (firstObj.SubscriptnType < secondObj.SubscriptnType)
        return -1;
    if (firstObj.SubscriptnType > secondObj.SubscriptnType)
        return 1;
    return 0;
}

function setSortFlagHome() {
    if (isSortAscendingHome == true)
        isSortAscendingHome = false;
    else
        isSortAscendingHome = true;
    return isSortAscendingHome;
}

function setSortFlagHomeFName() {
    if (isSortAscendingHomeFName == true)
        isSortAscendingHomeFName = false;
    else
        isSortAscendingHomeFName = true;
    return isSortAscendingHomeFName;
}

function setSortFlagHomeSubType() {
    if (isSortAscendingHomeSubType == true)
        isSortAscendingHomeSubType = false;
    else
        isSortAscendingHomeSubType = true;
    return isSortAscendingHomeSubType;
}

function setSortFlagToDefault(sortField) {
    if (sortField != "LastName") {
        isSortAscendingHome = false;
        frmHomeScreen.imgCheckedinSort.src = "icn_sortby.png";
    } else if (sortField != "FirstName") {
        isSortAscendingHomeFName = false;
        frmHomeScreen.imgSortCheckInMemFirstName.src = "icn_sortby.png";
    } else if (sortField != "SubType") {
        isSortAscendingHomeSubType = false;
        frmHomeScreen.imgSortCheckInMemSubType.src = "icn_sortby.png";
    }

}

//MEG-157
function searchMemberUsingBarcode() {
    try {
        gblScannedData = "";
        //Creates an object of class 'BarcodeScanner'
        var ScanBarcodeFFIObject = new com.weightwatchers.barcodescanner.ScanBarcodeFFI();
        //Invokes method 'startScanner' on the object
        kony.print("Inside searchMemberUsingBarcode");
        ScanBarcodeFFIObject.startScanner(
            /**Function*/
            scannerBarcodeCallback);
    } catch (e) {
        // todo: handle exception
        alertForMessages("Exception in opening scan FFI");
    }
}

// Dileep start
function searchMemberUsingBarcode() {
    try {
        if (glbMeetingNum != "") {
            kony.print("Inside getBarcodeData");
            //Creates an object of class 'ReadNativeBarcodeObject'
            var ReadNativeBarcodeObject = new com.weightwatchers.nativebarcode.ReadNativeBarcode();
            //Invokes method 'readNativeBarcodeData' on the object
            ReadNativeBarcodeObject.readNativeBarcodeData(scannerBarcodeCallback);
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
        }
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening scan FFI Home Screen");
    }
}

function searchMemberUsingBarcodeNew() {

    try {
        if (glbMeetingNum != "") {
            kony.print("Inside getBarcodeData");
            //Invokes function 'readBarcodeFromCamera'
            com.ww.barcode.nativecam.readBarcodeFromCamera(scannerBarcodeCallback);
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
        }
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in opening scan FFI Home Screen");
    }
}

// Dileep end


function scannerBarcodeCallback(data) {
    try {
        kony.print("Barcode data: " + data);
        gblScannedData = "";
        if (data != undefined && data != null && data.length > 0) {
            if (data == "(Cancelled)") {
                kony.print("User has cancelled barcode scanning. " + data);
                return;
            } else {
                gblScannedData = data.toUpperCase().trim();
            }
        }

        gblBarcodeScannedData = "";
        isSubIdSearched = false;
        popupAdvancedSearch.destroy(); // Added By Praveen Kalal
        popupMemberType.dismiss();
        popupMemberStatus.dismiss();
        popupState.dismiss();
        popupMeetingLocation.dismiss();
        popupHomeMenu.dismiss();
        popupCheckedInFilter.dismiss();
        popupCurrentMeeting.dismiss();

        kony.print("Meeting status is : " + glbMeetingStatus);
        if (glbMeetingStatus == "Open") {
            scannedDataFunctionFlow();
        } else {
            isClickedOnIcon = "Scanned";
            alertForEnrollAddInTalliedMeetingConfirmation();
        }
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in Parsing scan data Home Screen");
    }
}

function scannedDataFunctionFlow() {
    var data = gblScannedData.toUpperCase();
    kony.print("Barcode data : " + data + "  gblBarcodeScannedData : " + gblBarcodeScannedData + "   gblScannedData : " + gblScannedData);
    var barcodeChar = data.charAt(0);
    barcodeChar = barcodeChar.toUpperCase();
    kony.print("Starting Char is : " + barcodeChar);

    if (!in_array(barcodeChar, ['M', 'Q', 'P', 'W', 'C'])) {
        // TODO: Will have both Product and Member, need a differentiator
        advanceSearchHeader = "MemberId";
        kony.print("Got the number as : " + data);
        var whrClause = "";
        gblBarcodeScannedData = data;
        if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
            whrClause = " where RegNumber like '" + data + "' or PreRegNumber like '" + data + "'";
            getBarcodeSKUSuccess(data);
        } else {
            whrClause = " where m.RegNumber like '" + data + "' or m.PreRegNumber like '" + data + "'";
            boHomeScreenSearch.getMemberDetailUsingBarCode(whrClause);
        }
    } else {

        switch (barcodeChar) {
            case "M":
            case "W":
                {
                    advanceSearchHeader = "MemberId";
                    kony.print("Monthly Pass Detected");
                    
                    var couponCode = data;
                    if (data.length > 9 && data.length < 15) {
                        couponCode = leftpadZerosForMonthlyPassId(data.substring(0, data.length - 6))
                    } else if (data.length < 9) {
                        couponCode = leftpadZerosForMonthlyPassId(data)
                    } else {
                        couponCode = data.substring(0, 9);
                    }

                    
                    kony.print(" Searching with " + couponCode);

                    var whrClause = " where (m.SubscriptnID like '" + couponCode + "' or m.CouponCode like '" + couponCode + "') and date(m.ExpirationDate) >= date('now','localtime') ";
                    gblBarcodeScannedData = data;
                    gblScannedCouponCode = couponCode;
                    isSubIdSearched = true;
                    boHomeScreenSearch.getMemberDetailUsingBarCode(whrClause);
                    break;
                }
            case "P":
                {
                    kony.print("Office code/Coupon Detected");
                    gblBarcodeScannedData = data;
                    if (kony.application.getCurrentForm().id == frmDirectSaleProductList.id || kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
                        GetBarcodeOfferno(data);
                    } else {
                        var whrClause = " where m.SubscriptnID like '" + data + "' or m.CouponCode like '" + data + "'";
                        boHomeScreenSearch.getMemberDetailUsingBarCode(whrClause);
                    }
                    break;
                }
            case "Q":
            case "C":
                {
                    advanceSearchHeader = "MemberId";
                    kony.print("20 Week Pass Detected");
                    var couponCode = data.substring(0, 10);
                    couponCode = couponCode.replace("C", "Q");
                    kony.print(" Searching with 20 pass " + couponCode);
                    var whrClause = " where m.SubscriptnID like '" + couponCode + "' or m.CouponCode like '" + couponCode + "'";
                    gblBarcodeScannedData = data;
                    gblScannedCouponCode = couponCode;
                    isSubIdSearched = true;
                    boHomeScreenSearch.getMemberDetailUsingBarCode(whrClause);
                    break;
                }
            default:
                {
                    kony.print("Unrecognized Barcode");
                    alertForMessages(kony.i18n.getLocalizedString("strBarcodeNotReg"));
                    break;
                }
        }
    }
}

function stopBarcoeScan() {
    try {
        //Creates an object of class 'BarcodeScanner'
        var ScanBarcodeFFIObject = new com.weightwatchers.barcodescanner.ScanBarcodeFFI();
        //Invokes method 'stopScan' on the object
        ScanBarcodeFFIObject.stopScanner(
            /**Function*/
            stopScannerCallback);
    } catch (e) {
        // todo: handle exception
        kony.print("Exception in closing scan FFI");
    }
}

function stopScannerCallback(data) {
    kony.print("Stopping Scanning barcode");
}

//MEG-237: Showing Checked-in or Pre Registered Member
function onSelectMeetingMembers() {
    
    if (hboxMeetingSummery.cmbxMeetingMemberType.selectedKey == "checkedin") {
        showCheckedinUIData(true);
        showPreRegisteredUIData(false);
        hboxMeetingSummery.lblFilterByInfo.text = kony.i18n.getLocalizedString("strSelectFilter");
        checkeInMembers.getAllMembersList();
    } else {
        showCheckedinUIData(false);
        showPreRegisteredUIData(true);
        showPreRegData();
    }
}

/*Commented by Ami - to fix Crash with kony iOS pluging update to 6.0.2*/

function evenOnPostShowHomeScreen() {
    checkeInMembers.getAllMembersList();
    getHomeScreenPaymentData();
    frmHomeScreen.show();
}

function showPreRegData(){

    var whrCondition = "";
    kony.print("glbMeetingNum------>>>" + glbMeetingNum);
    kony.print("glbLocationID------>>>" + glbLocationID);

    if (glbMeetingNum == "" || glbMeetingNum == undefined) {
        // get members data for particular location id and display on home screen 
        whrCondition = "where LocationID='" + glbLocationID + "' and RegStatus='" + MemberRegEnum.Pre_Registered + "'";
        kony.print("whrCondition------>>>" + whrCondition);
        boHomeScreenSearch.getMembersOfMeetingForHomeScreen(whrCondition);
    } else {
        // get members data for particular location id and selected meeting id. Display on home screen 
        whrCondition = "where ( MeetingId='" + glbMeetingNum + "' or MtngOccrID='" + glbMeetingNum + "') and  LocationID='" + glbLocationID + "' and RegStatus='" + MemberRegEnum.Pre_Registered + "'";
        kony.print("whrCondition in else------>>> " + whrCondition);
        boHomeScreenSearch.getMembersOfMeetingForHomeScreen(whrCondition);
    }
}


function showCheckedinMemberData(status, chkMemberList) {
    kony.print("chkMemberList is : " + JSON.stringify(chkMemberList));
    chkMember = [];
    glbTotalWeightLoss = 0.0;
    if (status) {
        for (i in chkMemberList) {
            var v = chkMemberList[i];
            var weighN = "";
            var wSkin = "lblF37HelveticaReg19px";
            kony.print("Weight loss == ::  " + v.WeightLoss + "   incomplete profile :: " + v.IncompleteData);

            if (checkUndefined(v.WeightLoss) != "") {
                if (parseFloat(v.WeightLoss) > 0) {
                    weighN = "-" + v.WeightLoss + " "+getLocalizedString("strLbs");
                    glbTotalWeightLoss = glbTotalWeightLoss + parseFloat(v.WeightLoss);
                } else if (parseFloat(v.WeightLoss) < 0) {
                    weighN = "+" + (parseFloat(v.WeightLoss) * (-1)) + " "+getLocalizedString("strLbs");
                    wSkin = "lblF38Helvetica19px";
                } else {
                    weighN = "0.0 "+getLocalizedString("strLbs");
                    glbTotalWeightLoss = glbTotalWeightLoss + parseFloat(0);
                }
            } else {
                weighN = "--";
            }
            var imgProfile = "";
            kony.print("v.IncompleteData : " + v.IncompleteData);
            if (checkUndefined(v.IncompleteData) != "" && (v.IncompleteData == true || v.IncompleteData == "true")) {
                kony.print("v.IncompleteData : " + v.IncompleteData);
                imgProfile = "icn_member_profile_incomplete.png";
            }
            if (v.SubscriptnType == "SeventeenWeekPass") {
                v.SubscriptnType = kony.i18n.getLocalizedString("str17WkPass");
            }
            if (v.SubscriptnType == MemberSubscriptionTypeEnumBatch["20 Week Pass"]) {
                v.SubscriptnType = kony.i18n.getLocalizedString("str20WkPass");
            }
            if (v.SubscriptnType == "MonthlyPass") {
                v.SubscriptnType = kony.i18n.getLocalizedString("strMonthlyPass");
            }
            if (v.SubscriptnType == "") {
                v.SubscriptnType = kony.i18n.getLocalizedString("strPayg");
            }
            //Adding Phase1 code here for CheckedIn Members
            var b;
            b = mapKeys(viewChekedInMembers, {
                imgIncompleteProfile: imgProfile,
                lblMPSLastName: v.LastName, //LastName
                lblMPSFirstName: v.FirstName,
                lblChkPhone: v.Phone1,
                lblChkWeightChangeN: {
                    text: weighN,
                    skin: wSkin
                },
                SubscriptnType: v.SubscriptnType,
                lblChkMilestone: v.MilestoneName,
                MemberID: v.MemberID,
                MemberStatus: v.MemberStatus,
                //Adding Phase1 code here for CheckedIn Members
                imgProductLst: "icn_shopping_cart.png",
                imgMPActive: (v.SubscriptnType == kony.i18n.getLocalizedString("strMonthlyPass"))? v.ActivationStatusIcon : "",
                RegNo: v.RegNo,
                StartDate: v.StartDate,
                MembershipType: v.MembershipType,
                OriginalDateOfBirth: v.OriginalDateOfBirth,
                Height: v.Height,
                Gender: v.Gender,
                RegStatus: v.RegStatus,
                Email: v.Email,
                misWeekPass: v.misWeekPass,
                StartWeight: v.StartWeight,
                GoalWeight: v.GoalWeight,
                PreRegNumber: v.PreRegNumber,
                ExpirationDate: v.ExpirationDate,
                CouponCode: v.CouponCode,
                FlowForCart: true,
                MtngOccrID: v.MtngOccrID,
                EmpID:v.EmpID,
                FirstName:v.FirstName,
                LastName:v.LastName,
                Usertype:v.Usertype
            });
            kony.print(b.Usertype+"::"+UserType.Employee+"::::b.Usertype == UserType.Employee"+(b.Usertype == UserType.Employee));
            if(b.Usertype == UserType.Employee){
                b.imgMPActive ="employee.png";
                b.SubscriptnType = "Employee";
            }
            chkMember.push(b);
        }
    }

    kony.print("showing data for Checked in Member  :" + chkMember.length);
    glbTotalWeightLoss = parseFloat(glbTotalWeightLoss);
    kony.print("total weight Loss === " + glbTotalWeightLoss.toString());

    var TotalWeightLoss = parseFloat(getTotalWeightLoss());
    kony.print("TotalWeightLoss::here"+TotalWeightLoss);
    if (parseFloat(TotalWeightLoss) == 0) {
        hboxMeetingSummery.lblTotalWeightLossInfo.text = "0.0 "+getLocalizedString("strLbs");
    } else if (parseFloat(TotalWeightLoss) < 0) {
        hboxMeetingSummery.lblTotalWeightLossInfo.text = TotalWeightLoss.toFixed(1) + " "+getLocalizedString("strLbs");
    } else {
        hboxMeetingSummery.lblTotalWeightLossInfo.text = "-" + TotalWeightLoss.toFixed(1) + " "+getLocalizedString("strLbs");
    }
    kony.print("Sorted chekedinData=====> " + JSON.stringify(chkMember));
    isSortAscendingHome = false;
    frmHomeScreen.segCheckedInMembers.setData(chkMember);
    eventOnClickVBoxCheckedinSorting();
    removeProgressView();

}



//MEG-237: Changing visibiity for Checked In UI
function showCheckedinUIData(makeVisible) {
    kony.print("Making Visibility of Checkedin UI elements : " + makeVisible);
    frmHomeScreen.hboxCheckedinTitle.setVisibility(makeVisible);
    frmHomeScreen.segCheckedInMembers.setVisibility(makeVisible);
    frmHomeScreen.lineCheckedinTitle.setVisibility(makeVisible);
    hboxMeetingSummery.lblFilterTitle.setVisibility(makeVisible);
    hboxMeetingSummery.vBoxSelectFilter.setVisibility(makeVisible);
    hboxMeetingSummery.vboxTotalWeightLoss.setVisibility(makeVisible);
    hboxMeetingSummery.lineTWLoss.setVisibility(makeVisible);
    hboxMeetingSummery.lineProduct.setVisibility(makeVisible);
}

//MEG-237: Changing visibiity for Pre Registered UI
function showPreRegisteredUIData(makeVisible) {
    kony.print("Making Visibility of Pre Registered UI elements : " + makeVisible);
    frmHomeScreen.hbxTableTitle.setVisibility(makeVisible);
    frmHomeScreen.segHomeMemberView.setVisibility(makeVisible);
    frmHomeScreen.linePreRegTitle.setVisibility(makeVisible);
}

function populateCheckedinMember(status, responseObj) {
    try {
        if (status) {
            if (responseObj != null) {
                frmHomeScreen.segCheckedInMembers.setData(responseObj);
            } else {
                kony.print("Adding data to form obj  " + responseObj);

                kony.print("Set Data ");
            }
        }
    } catch (e) {
        GlobalException(e);
    }

}

function alertForTallyConfirmation() {
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strTallyConfirmation"), //"Are you sure you want to tally this meeting?",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: kony.i18n.getLocalizedString("strConfirm"),
        yesLabel: kony.i18n.getLocalizedString("strLblYes"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("strLblNo"), // "No",
        alertHandler: onClickTallyConfirmationAlert
    };
    var psConfig = {};
    var TallyConfirmationAlert = kony.ui.Alert(alertConfig, psConfig);
}

function onClickTallyConfirmationAlert(response) {
    if (response == true) {
        //Reset previous data before showing the form
        boMonitor.log("Tally Clicked", "btnTally", {}, FlowForMonitor.Tally, false);
        tallyMismatchReason = 0;
        popupOutOfBalance.lblReason.text = "";
        popupOutOfBalanceReason.pickerviewTallyMismatchReasons.selectedKeys = ["1"];

        frmTallyMeetingCashout.txtBanksInThisMeeting.text = "";
        frmTallyMeetingCashout.txtCash.text = "";
        frmTallyMeetingCashout.lblMEGCash.text = displayPriceByLocale("0.00");
        frmTallyMeetingCashout.lblDiffCash.text = "";
        frmTallyMeetingCashout.txtChecks.text = "";
        frmTallyMeetingCashout.lblMEGChecks.text = displayPriceByLocale("0.00");
        frmTallyMeetingCashout.lblDiffChecks.text = "";
        frmTallyMeetingCashout.txtCreditCard.text = "";
        frmTallyMeetingCashout.lblMEGCreditCard.text = displayPriceByLocale("0.00");
        frmTallyMeetingCashout.lblDiffCreditCard.text = "";
        frmTallyMeetingCashout.txtCreditSlipsRedeemed.text = "";
        frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text = displayPriceByLocale("0.00");
        frmTallyMeetingCashout.lblDiffCreditSlipsRedeemed.text = "";
        frmTallyMeetingCashout.txtCreditSlipsIssued.text = "";
        frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text = displayPriceByLocale("0.00");
        frmTallyMeetingCashout.lblDiffCreditSlipsIssued.text = "";
        frmTallyMeetingCashout.lblMEGTotal.text = displayPriceByLocale("0.00");
        frmTallyMeetingCashout.txtBankDepositSlipNumber.text = "";
        frmTallyMeetingCashout.lblMEGDebit.text = displayPriceByLocale("0.00");
        frmTallyMeetingCashout.txtDebitCard.text = "";
        frmTallyMeetingCashout.lblDiffDebitCard.text = "";

        //show the form 
        frmTallyMeetingCashout.show();

    } else {
    }
}

function alertInfoForMPActivationDataPending(){
    var alertConfig = {
        message: kony.i18n.getLocalizedString("strPendingInfoConfirmation"),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "",
        yesLabel: kony.i18n.getLocalizedString("btnContinue"), // "Yes",
        noLabel: kony.i18n.getLocalizedString("btnCancel"), //"No",
        alertHandler: alertHandlerMPActivationDataPending
    };
    var psConfig = {};
    var TallyAlert = kony.ui.Alert(alertConfig, psConfig);
}

function alertHandlerMPActivationDataPending(response){
    if(response == true){
        alertForTallyConfirmation();
    }else{
        popupMPActivation.show();
    }
}

function eventOnClickTallyButton() {
    if(checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true")){
        boPreActivation.isDataExistInPreactivationDetails(function(res){
            kony.print("isDataExistInPreactivationDetails"+res);
            if (!IsSyncRunning) {
                if(res == true || res == "true"){
                    alertInfoForMPActivationDataPending();
                }else{
                    alertForTallyConfirmation();
                }
            }else{
                alertForMessages("Sync is already running in background, please try after sometime");
            }
        });
    }
    else
    {
        alertForTallyConfirmation();
    }
}   

function onClickWeightLossAlert(response) {
    if (response == true) {
        notifyNewlyEnrolledMember(false);
    }
}

function displayTallyData(status, result) {
    if (status) {
        frmTallyMeeting.lblNumOfPaygAttMeeting.text = result["NumOfTotalCurrentAttd"];
        frmTallyMeeting.lblSumOfPaygAttMeeting.text = parseFloat(result["SumOfTotalCurrentAttd"]).toFixed(2);
        frmTallyMeeting.lblCurrAttendSeniorInfo.text = result["NumOfTotalSeniorCurrAttd"];
        frmTallyMeeting.lblCurrAttendSeniorInfo1.text = parseFloat(result["SumOfTotalSeniorCurrAttd"]).toFixed(2);
        frmTallyMeeting.lblCurrAttendMissedWeekInfo.text = result["NumOfMissedWKCurrAttd"];
        frmTallyMeeting.lblCurrAttendMissedWeekInfo1.text = parseFloat(result["SumOfMissedWKCurrAttd"]).toFixed(2);
        frmTallyMeeting.lblCurrAttendSeniorMissedWeekInfo.text = result["NumOfMissedWKSenCurrAttd"];
        frmTallyMeeting.lblCurrAttendSeniorMissedWeekInfo1.text = parseFloat(result["SumOfMissedWKSenCurrAttd"]).toFixed(2);
        frmTallyMeeting.lblTotalCurrentAttend.text = result["TotalCurrentAtt_A"];
        frmTallyMeeting.lblSumTotalCurrentAttend.text = result["SumTotalCurrentAtt"];
        frmTallyMeeting.lblEnrollPAYGInfo.text = result["NumOfEnrollPayg"];
        frmTallyMeeting.lblEnrollPAYGInfo1.text = parseFloat(result["SumOfEnrollPayg"]).toFixed(2);
        frmTallyMeeting.lblEnrollPAYGSenInfo.text = result["NumOfEnrollSenPayg"];
        frmTallyMeeting.lblEnrollPAYGSenInfo1.text = parseFloat(result["SumOfEnrollSenPayg"]).toFixed(2);
        frmTallyMeeting.lblEnrollMonthlyPassInfo.text = result["NumOfEnrollMP"];
        frmTallyMeeting.lblEnroll17WeekInfo.text = result["NumOfEnroll_17Wk"];
        frmTallyMeeting.lblNumTotalEnrol.text = result["TotalEnrolments_B"];
        frmTallyMeeting.lblTotalPaidAttendInfo.text = result["TotalPaidAttandace"];
        frmTallyMeeting.lblPaidLTInfo.text = result["NumOfPaidLTAttandance_C"];
        frmTallyMeeting.lblPaidLTInfo1.text = parseFloat(result["SumOfPaidLTAttandance"]).toFixed(2);
        frmTallyMeeting.lblFreeLTInfo.text = result["NumOfFreeLTAttandance_F"];
        frmTallyMeeting.lblPrepaidAttend17WeekInfo.text = result["NumOfPrepaid_17WKAttd"];
        frmTallyMeeting.lblPrepaidAttendMPInfo.text = result["NumOfPrepaid_MPAttd"];
        frmTallyMeeting.lblPrepaidAttendOtherInfo.text = result["NumOfPrepaid_OtherAttd"];
        frmTallyMeeting.lblPrepaidCouponTotalInfo.text = result["TotalPrepaidCoupon_E"];
        frmTallyMeeting.lblTotalMemberAttend.text = result["TotalMemberAttandace"];
        frmTallyMeeting.lblPrePaySalesInfo1.text = parseFloat(result["SumOfPrepaymentSales"]).toFixed(2);
        frmTallyMeeting.lblECCMemberResult.text = parseInt(glbTotalMemberAtRisk);
        
        var dataObj = [{
                lblMeetingStatsDesc: "Number of PrePaid Coupons Redeemed",
                lblColumnName: "G",
                lblStats: result["NumOfPrePaidCopRedeem"]
            }, {
                lblMeetingStatsDesc: "Members Staying for meeting",
                lblColumnName: "",
                lblStats: result["NumOfMembersAttMeeting"]
            }, {
                lblMeetingStatsDesc: "Members Reaching 5% target",
                lblColumnName: "",
                lblStats: result["NumOfMembersReached5"]
            }, {
                lblMeetingStatsDesc: "Members Reaching 10% target",
                lblColumnName: "",
                lblStats: result["NumOfMembersReached10"]
            }, {
                lblMeetingStatsDesc: "Members Reaching Weight Goal",
                lblColumnName: "",
                lblStats: result["NumOfMembersReachedWeighGoal"]
            }, {
                lblMeetingStatsDesc: "Members Reaching Lifetime",
                lblColumnName: "",
                lblStats: result["NumOfMembersReachedLifetime"]
            }, {
                lblMeetingStatsDesc: "Members Losing Weight",
                lblColumnName: "",
                lblStats: result["NumOfMembersWeightLossMeeting"]
            }
        ]

        frmTallyMeeting.segMeetingStats.setData(dataObj);
        frmTallyMeeting.lblTotalWeightChangeInfo.text = parseFloat(result["SumOfMembersWeightLossMeeting"]).toFixed(2);

        var dataObj1 = [{
            lblSalesDesc: "Member Fee",
            lblSalesStats: parseFloat(result["TotalMemberFees"]).toFixed(2)
        }, {
            lblSalesDesc: "Prepayment Sales",
            lblSalesStats: parseFloat(result["SumOfPrepaymentSales"]).toFixed(2)
        }];

        frmTallyMeeting.segmentSalesSummary.setData(dataObj1);

        frmTallyMeeting.label12443534676069620.text = (parseFloat(result["TotalMemberFees"]) + parseFloat(result["SumOfPrepaymentSales"])).toFixed(2);
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
        frmTallyMeeting.lblMeetingName.text = "Tally " + glbCurrentMeetingValue + " " + dateData + " Meeting";
        frmTallyMeeting.show();
        if (checkIfNetworkIsAvailable()) {
            if (!IsSyncRunning) {
                isFromTally = true;

                syncStartSession(); //Added by Praveen kalal
            } else {
                alertForMessages("Sync is already running in background, please try after sometime");
            }
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strTallyForceSyncMsg"));
        }
        result = {};
    }

}

function GetMemberDataForProcessMember() {
    //To get Member
    var whrCondition = "where MemberID = '" + glbMemberId + "'";
    boHomeScreenSearch.getMemberDetailsByMemberID(whrCondition);

    if (IsFromPM == FlowForScreens.ProcessMember) {
        var whereCond = "where MemberID = '" + glbMemberId + "' order by WeighInDate desc LIMIT 0,1";
        boEnrollMember.getWeighInDetail(whereCond);
    }

}



function eventonClickFilterBy() {
    kony.print("Inside eventonClickFilterBy FUNCTION");
    var context = {
        "widget": hboxMeetingSummery.hboxSelectFilter,
        "anchor": "Bottom",
        "sizetoanchorwidth": true
    };
    popupCheckedInFilter.setContext(context);
    popupCheckedInFilter.show();
}

function onclickvboxDoneImageCheckedInMember() {

    //IncompleteData
    isSortAscendingHome = false; //added by praveen to Fixed MEG-2614
    if (parseInt(popupCheckedInFilter.pickerCheckedInMember.selectedKeys[0]) == 0) {
        frmHomeScreen.segCheckedInMembers.setData(chkMember);
    } else if (popupCheckedInFilter.pickerCheckedInMember.selectedKeys[0] == 1) {
        // Filter for Milestone achieved member
        var b = [];
        for (i in chkMember) {
            kony.print("chkMember[i].lblChkMilestone) val is :: " + chkMember[i].lblChkMilestone);
            if (checkUndefined(chkMember[i].lblChkMilestone) != "" && chkMember[i].lblChkMilestone != "--") {
                b.push(chkMember[i]);
            }
        }

        frmHomeScreen.segCheckedInMembers.setData(b);
    } else if (popupCheckedInFilter.pickerCheckedInMember.selectedKeys[0] == 2) {
        // Filter for Incomplete profile memmer
        var b = [];
        for (i in chkMember) {
            if (chkMember[i].imgIncompleteProfile == "icn_member_profile_incomplete.png") {
                b.push(chkMember[i]);
            }
        }

        frmHomeScreen.segCheckedInMembers.setData(b);
    }
    eventOnClickVBoxCheckedinSorting(); //added by praveen to Fixed MEG-2614
    hboxMeetingSummery.lblFilterByInfo.text = popupCheckedInFilter.pickerCheckedInMember.selectedKeyValues[0][1];
    popupCheckedInFilter.dismiss();
}

function dateSorting(firstObj, secondObj) {
    return (+firstObj.WeighInDate) - (+secondObj.WeighInDate);
}

function onSelectRowCheckedInMember() {
    var selectedIndex = frmHomeScreen.segCheckedInMembers.selectedIndex;
    var selectedRow = parseInt(selectedIndex[1]);
    selectedMemberData = frmHomeScreen.segCheckedInMembers.data[selectedRow]; //selectedData

    if(selectedMemberData.Usertype == "1"){
        return;
    }
    
    IsViewMember = FlowForScreens.ViewMember;
    isPMFromHomeScreen = true;
    displayProgressView();
    glbStartDateMemberProfile = selectedMemberData["StartDate"]; // added by praveen MEG-3293
    glbMemberId = selectedMemberData["MemberID"];

    glbSelectedMemberMtngOccrID = selectedMemberData["MtngOccrID"];

    gblStartWeightPM = selectedMemberData["StartWeight"];
    glbIsSelectedMemberExpired = checkExpirationDate(selectedMemberData["ExpirationDate"]);
    kony.print("::DJP0::glbIsSelectedMemberExpired=" + glbIsSelectedMemberExpired);
    gblGoalWeightPM = selectedMemberData["GoalWeight"];
    glbCouponCode = selectedMemberData["CouponCode"];
    var flowforcart = selectedMemberData["FlowForCart"];
    kony.print("glbCouponCode:>GLB COUPON CODE-->" + glbCouponCode);

    kony.print("IsViewMember in onSelectRowCheckedInMember==>>>" + IsViewMember + " MemberStatus is " + selectedMemberData["MemberStatus"]);

    glbSelectedMemberSessionNumber = checkValidString(selectedMemberData["SessionNumber"]) ? selectedMemberData["SessionNumber"] : 1; //fresh sart- 116

    if (selectedMemberData["MemberStatus"] == MemberStatusEnum[3]) {
        kony.print("Terminated member");
        frmViewMemberProfile.vboxPaymentSection.isVisible = true;
        frmViewMemberProfile.vboxWeighSection.isVisible = false;
        hboxMainMemberProfile.image212443534675273874.src = "icn_edit_profile.png";
        hboxMainMemberProfile.vboxEditPopup.onClick = false;
    } else {
        kony.print("else member");
        frmViewMemberProfile.vboxPaymentSection.isVisible = false;
        frmViewMemberProfile.vboxWeighSection.isVisible = true;
        if (flowforcart == true) {
            frmViewMemberProfile.imgWeigh.src = "icn_shopping_cart.png";
        } else {
            frmViewMemberProfile.imgWeigh.src = "icn_weigh.png";
        }
        hboxMainMemberProfile.image212443534675273874.src = "icn_action_menu_header.png";
        hboxMainMemberProfile.vboxEditPopup.onClick = onEditProfilePopupOpen;
    }
    var whereClause = " where MemberID = '" + glbMemberId + "' and NoteTypeID = 'Sticky' ";
    boEnrollMember.getNoteByMemberId(whereClause, glbMemberId);
    boMemberProfile.getSelectedMemberDetailsFromDeviceMemberID(glbMemberId);
}

function setHeader() {

    var index = hboxMeetingSummery.cmbxMeetingMemberType.selectedKey;
    kony.print("index---????>>>" + index);
    if (index == "preregistered") {
        frmHomeScreen.hbxTableTitle.isVisible = true;
        frmHomeScreen.hboxCheckedinTitle.isVisible = false;
    } else {
        frmHomeScreen.hbxTableTitle.isVisible = false;
        frmHomeScreen.hboxCheckedinTitle.isVisible = true;
    }
}

function ResetHomeScreenComboValues() {
    isFromAdvanceSearch = false;
    kony.print("::PRESHOW::22");
    hboxHomeScreenHeader.tbxFirstNameHeader.text = "";
    hboxHomeScreenHeader.tbxLastNameHeader.text = "";

    hboxMeetingSummery.cmbxMeetingMemberType.selectedKey = "checkedin";
    frmHomeScreen.hbxTableTitle.isVisible = true;
    frmHomeScreen.hboxCheckedinTitle.isVisible = false;
    
    hboxMeetingSummery.cmbxMeetingMemberType.viewConfig =  {
                toggleViewConfig: {
                    "viewStyle": constants.COMBOBOX_TOGGLE_VIEW_STYLE_BORDERED,
                    "equalSegments": true,
                    "tintColor": "00c0f300"
                }};
    hboxMeetingSummery.cmbxMeetingMemberType.viewType = constants.COMBOBOX_VIEW_TYPE_TOGGLEVIEW;
    
    showCheckedinUIData(true);
    showPreRegisteredUIData(false);
}

function doAdvancedSearchIfNoResultFound() {
    popupMemberNotFound.destroy();
    var firstnamesearchstr = "",
        lastnamesearchstr = "",
        phone = "",
        memberid = "",
        email = "";

    kony.print("::----" + kony.application.getCurrentForm().id + " ==" + frmHomeScreen.id + "------" + isFromAdvanceSearch);

    if (kony.application.getCurrentForm().id == frmHomeScreen.id && !isFromAdvanceSearch) {
        firstnamesearchstr = checkUndefined(hboxHomeScreenHeader.tbxFirstNameHeader.text);
        lastnamesearchstr = checkUndefined(hboxHomeScreenHeader.tbxLastNameHeader.text);
        phone = "";
        memberid = "";
        email = "";
        //Added for fixing adavance search issue if members not found in local search
        advanceSearchHeader = "Name";
    } else if (kony.application.getCurrentForm().id == frmHomeScreen.id && isFromAdvanceSearch) {
        firstnamesearchstr = checkUndefined(hboxName.tbxFirstNameHeader.text);
        lastnamesearchstr = checkUndefined(hboxName.tbxLastNameHeader.text);
        phone = checkUndefined(hboxPhoneNumberSection.tbxPhoneNumberHeader.text);
        memberid = checkUndefined(hboxMemberIDSection.tbxMemberIDHeader.text);
        email = checkUndefined(hboxUserIDSection.tbxUserIDHeader.text);
    } else {
        firstnamesearchstr = checkUndefined(hboxNameSection.tbxFirstNameHeader.text);
        lastnamesearchstr = checkUndefined(hboxNameSection.tbxLastNameHeader.text);
        phone = checkUndefined(hboxPhoneSection.tbxPhoneNumberHeader.text);
        memberid = checkUndefined(hboxMemberIdSection.tbxMemberIDHeader.text);
        email = checkUndefined(hboxUserIdSection.tbxUserIDHeader.text);
    }
    kony.print("Inside doAdvancedSearchIfNoResultFound FirstName: " + firstnamesearchstr.toUpperCase() + " LastName " + lastnamesearchstr.toUpperCase());
    createAdvancedSearchWhereClause(firstnamesearchstr.toUpperCase(), lastnamesearchstr.toUpperCase(), phone, memberid, email);


}

//Added for MEGCN-6
function bindTallyDiffReasonList() {
    glbTallyDiffReasonArray = [];
    boTallyMeetingCashout.getTallyPaymentDiffReasonData(getCountryID(), function(res) {
        if (res.length > 0) {
            kony.print("TallyDiffReasonLookup Data : " + res);
            for (var i in res) {
                var obj = res[i];
                glbTallyDiffReasonArray.push([obj.TallyDiffReasonId, obj.TallyDiffReasonDesc]);
            }
            kony.print("glbTallyDiffReasonArray : " + glbTallyDiffReasonArray);
        } else {
            kony.print("TallyDiffReasonLookup Empty Data");
            //set static data
            if (in_array(deviceLocale,Countries["US"])) {
                glbTallyDiffReasonArray = [
                    [3, getLocalizedString("strBankChange")],
                    [5, getLocalizedString("strUnknownDifference")],
                    [6, getLocalizedString("strCreditCards")],
                    [7, getLocalizedString("strWWCreditSlip")],
                    [9, getLocalizedString("strMemberChecks")]
                ];
            } else if (in_array(deviceLocale,Countries["CA"])) {
                glbTallyDiffReasonArray = [
                    [1, getLocalizedString("strLeaderSettled")],
                    [2, getLocalizedString("strRoundingOfPennies")],
                    [3, getLocalizedString("strMemberChargedIncorrectly")],
                    [4, getLocalizedString("strUnknown")]
                ];
            }
            kony.print("glbTallyDiffReasonArray : " + glbTallyDiffReasonArray);
        }

    })
}

function getHomeScreenPaymentData(){
    boTallyMeetingReport.getHomeScreenMeetingData(function(totalMemberAttandace, totalMemberFees, totalProductSales){
    
        boTallyMeetingReport.getEmployeeAttendence(function(empAttendance){
            kony.print("empAttendance::"+empAttendance+"===>>>>=="+totalMemberAttandace +" - " + totalMemberFees + " - " + totalProductSales);
            hboxMeetingSummery.lblAttendance.text = parseInt(totalMemberAttandace)+parseInt(empAttendance);
            hboxMeetingSummery.lblMemberFees.text = displayPriceByLocale(totalMemberFees);
            hboxMeetingSummery.lblProductSale.text = displayPriceByLocale(totalProductSales); 
        })
        
    });
    
}

function eventOnClickMpActivateBtn(){
    if(checkIfNetworkIsAvailable()){
        var alertConfig = {
            message: getLocalizedString("strMsgActivateMPPass"),
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: kony.i18n.getLocalizedString("strConfirm"),
            yesLabel: kony.i18n.getLocalizedString("strLblYes"),
            noLabel: kony.i18n.getLocalizedString("strLblNo"),
            alertHandler: successOnMpActivateBtn
        };
        var psConfig = {};
        var mpActivate = kony.ui.Alert(alertConfig, psConfig);
    }else{
        alertForMessages(kony.i18n.getLocalizedString("strInternateConnection"));
    }
}


function successOnMpActivateBtn(response){
    if (response == true)
    {
        if(popupMPActivation)
        {
            popupMPActivation.destroy();
        }
        if(checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true")){
            boPreActivation.isDataExistInPreactivationDetails(function(res){
                    kony.print("isDataExistInPreactivationDetails"+res);
                    if (!IsSyncRunning) {
                        if(res){
                            kony.print("Activating MP..");
                            IsFromLocationSelected=false;
                            isSyncForActivation = true;
                            syncStartSession();
                        }else{
                            alertForMessages(kony.i18n.getLocalizedString("strNoPassToActivate"));
                        }
                    }else{
                        alertForMessages("Sync is already running in background, please try after sometime");
                    }
                    
                });
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strNoPassToActivate"));
        }
    }else{
        // do nothing in case of selecting no button
    }
}