var valid = new validationcls();

function eventOnClickVbxAdvancedSearch() {
    isFromAdvanceSearch = false;
    hboxHomeScreenHeader.tbxLastNameHeader.text = "";
    hboxHomeScreenHeader.tbxFirstNameHeader.text = "";
    hboxName.tbxFirstNameHeader.text = "";
    hboxName.tbxLastNameHeader.text = "";
    hboxPhoneNumberSection.tbxPhoneNumberHeader.text = "";
    hboxUserIDSection.tbxUserIDHeader.text = "";
    hboxMemberIDSection.tbxMemberIDHeader.text = "";
    var context = {
        "widget": hboxHomeScreenHeader.vbxAdvancedSearch,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupAdvancedSearch.setContext(context);
    eventOnSelectionCmbSearchCriteria();
    popupAdvancedSearch.show();
}

function eventOnSelectionCmbSearchCriteria(val) {
    var selectedKey = (val == "" || val == undefined) ? popupAdvancedSearch.cmbSearchCriteria.selectedKeyValue[0] : val.selectedKeyValue[0];
    if (selectedKey == "Phone") {
        //Header for PopUP Search
        hboxPhoneNumberSection.isVisible = true;
        hboxUserIDSection.isVisible = false;
        hboxMemberIDSection.isVisible = false;
        hboxName.isVisible = false;
        advanceSearchHeader = "Phone";
        //Header for Result Page
        hboxName.tbxFirstNameHeader.text = "";
        hboxName.tbxLastNameHeader.text = "";
        hboxUserIDSection.tbxUserIDHeader.text = "";
        hboxMemberIDSection.tbxMemberIDHeader.text = "";
        /*hboxPhoneSection.isVisible=true;
        hboxUserIdSection.isVisible=false;
        hboxMemberIdSection.isVisible=false;
        hboxNameSection.isVisible=false;*/
    } else if (selectedKey == "UserId") {
        //Header for PopUP Search
        hboxPhoneNumberSection.isVisible = false;
        hboxUserIDSection.isVisible = true;
        hboxMemberIDSection.isVisible = false;
        hboxName.isVisible = false;
        advanceSearchHeader = "UserId";
        //Header for Result Page
        hboxName.tbxFirstNameHeader.text = "";
        hboxName.tbxLastNameHeader.text = "";
        hboxMemberIDSection.tbxMemberIDHeader.text = "";
        hboxPhoneNumberSection.tbxPhoneNumberHeader.text = "";
        /*hboxPhoneSection.isVisible=false;
        hboxUserIdSection.isVisible=true;
        hboxMemberIdSection.isVisible=false;
        hboxNameSection.isVisible=false;*/
    } else if (selectedKey == "MemberId") {
        //Header for PopUP Search
        hboxPhoneNumberSection.isVisible = false;
        hboxUserIDSection.isVisible = false;
        hboxMemberIDSection.isVisible = true;
        hboxName.isVisible = false;
        advanceSearchHeader = "MemberId";
        //Header for Result Page
        hboxName.tbxFirstNameHeader.text = "";
        hboxName.tbxLastNameHeader.text = "";
        hboxPhoneNumberSection.tbxPhoneNumberHeader.text = "";
        hboxUserIDSection.tbxUserIDHeader.text = "";
        /*hboxPhoneSection.isVisible=false;
        hboxUserIdSection.isVisible=false;
        hboxMemberIdSection.isVisible=true;
        hboxNameSection.isVisible=false;*/
    } else if (selectedKey == "Name") {
        //Header for PopUP Search
        hboxPhoneNumberSection.isVisible = false;
        hboxUserIDSection.isVisible = false;
        hboxMemberIDSection.isVisible = false;
        hboxName.isVisible = true;
        advanceSearchHeader = "Name";
        //Header for Result Page
        hboxPhoneNumberSection.tbxPhoneNumberHeader.text = "";
        hboxUserIDSection.tbxUserIDHeader.text = "";
        hboxMemberIDSection.tbxMemberIDHeader.text = "";
        /*hboxPhoneSection.isVisible=false;
        hboxUserIdSection.isVisible=false;
        hboxMemberIdSection.isVisible=false;
        hboxNameSection.isVisible=true;*/
    }
}

function eventOnSelectionCmbLocationCityState() {
    if (popupAdvancedSearch.cmbLocationCityState.selectedKey == "City_State") {
        popupAdvancedSearch.hboxCityState.isVisible = true;
        popupAdvancedSearch.hboxMeetingLocation.isVisible = false;
        if (cityName != "") {
            popupAdvancedSearch.txtCity.text = cityName;
            popupAdvancedSearch.lblStateInfo.text = stateName;
            //cityName = "";
        }
        /* else {
        	popupAdvancedSearch.txtCity.text = popupSearchLocation.segmentRecentLocations.selectedItems[0]["city"];
        	boLocation.getStateNameByStateId(popupSearchLocation.segmentRecentLocations.selectedItems[0]["stateId"]);
        }*/
    } else if (popupAdvancedSearch.cmbLocationCityState.selectedKey == "Location") {
        popupAdvancedSearch.hboxMeetingLocation.isVisible = true;
        popupAdvancedSearch.hboxCityState.isVisible = false;
    }
}
/////Result page search functionality added
function evenOnDoneSearchFNameLNameResultPage() {
    var strsearchFirstname = hboxNameSection.tbxFirstNameHeader.text;
    var strsearchLastname = hboxNameSection.tbxLastNameHeader.text;
    valid = new validationcls();
    kony.print("strsearchFirstname" + strsearchFirstname);
    strsearchFirstname = checkUndefined(strsearchFirstname);
    kony.print("strsearchFirstname" + strsearchFirstname);
    strsearchLastname = checkUndefined(strsearchLastname);
    kony.print("strsearchFirstname" + strsearchFirstname);
    var resFname = false;
    var resLname = false;
    if (strsearchFirstname.length == 0 && strsearchLastname.length == 0) {
        alertForMessages(kony.i18n.getLocalizedString("strMsgSearchNameValid"));
        return 1;
    } else if (strsearchFirstname.length > 0 && strsearchLastname.length > 0) {
        kony.print("both are filled")
            //Commented old and added new to solve MEG 5148
            //resFname = valid.validateAdvanceSearchString(strsearchFirstname).isValid();
            //resLname = valid.validateAdvanceSearchString(strsearchLastname).isValid();
        resFname = valid.validateAdvanceSearchFNameLName(strsearchFirstname).isValid();
        resLname = valid.validateAdvanceSearchFNameLName(strsearchLastname).isValid();
    } else if (strsearchFirstname.length > 0) {
        kony.print("First Name is not empty");
        //Commented old and added new to solve MEG 5148
        //resFname = valid.validateAdvanceSearchString(strsearchFirstname).isValid();
        resFname = valid.validateAdvanceSearchFNameLName(strsearchFirstname).isValid();
    } else if (strsearchLastname.length > 0) {
        kony.print("Last Name is not empty");
        //Commented old and added new to solve MEG 5148
        //resLname = valid.validateAdvanceSearchString(strsearchLastname).isValid();
        resLname = valid.validateAdvanceSearchFNameLName(strsearchLastname).isValid();
    }
    if (resFname || resLname) {
        kony.print("Calling createAdvancedSearchWhereClause function resFname -- " + resFname + "  resLname -- " + resLname);
        popupAdvancedSearch.cmbSearchCriteria.selectedKey = "Name";
        createAdvancedSearchWhereClause(strsearchFirstname.toUpperCase(), strsearchLastname.toUpperCase(), "", "", "");
    }
}

function eventOnDoneSearchMemberIdResultPage() {
    kony.print("inside eventOnDoneSearchMemberIdResultPage");
    //Dileep Chejerla: Added below two lines to leftpad zeros
    var strsearchMemberId = checkUndefined(hboxMemberIdSection.tbxMemberIDHeader.text);
    strsearchMemberId = leftpadZerosForMonthlyPassId(strsearchMemberId);
    valid = new validationcls();
    //var strsearchMemberId = checkUndefined(hboxMemberIdSection.tbxMemberIDHeader.text);
    //createAdvancedSearchWhereClause("", "", "", strsearchMemberId, "");
    var res = valid.validateAdvanceSearchString(strsearchMemberId).isValid();
    if (strsearchMemberId == "" || !res) {
        //alert(kony.i18n.getLocalizedString("strMsgSearchMemberValid"));
    } else {
        popupAdvancedSearch.cmbSearchCriteria.selectedKey = "MemberId";
        createAdvancedSearchWhereClause("", "", "", strsearchMemberId, "");
    }
}

function eventOnDoneSearchUserIdResultPage() {
    valid = new validationcls();
    var strsearchUserId = checkUndefined(hboxUserIdSection.tbxUserIDHeader.text);
    var res = valid.validateAdvanceSearchString(strsearchUserId).isValid();
    if (strsearchUserId == "" || !res) {
        //alert(kony.i18n.getLocalizedString("strMsgSearchUserValid"));
    } else {
        popupAdvancedSearch.cmbSearchCriteria.selectedKey = "UserId";
        createAdvancedSearchWhereClause("", "", "", "", strsearchUserId);
    }
}

function eventOnDoneSearchPhoneNoResultPage() {
    valid = new validationcls();
    var strsearchPhone = checkUndefined(hboxPhoneSection.tbxPhoneNumberHeader.text);
    var res = valid.validateAdvanceSearchString(strsearchPhone).isValid();
    if (strsearchPhone == "" || !res) {
        //alert(kony.i18n.getLocalizedString("strMsgSearchPhoneValid"));
    } else {
        popupAdvancedSearch.cmbSearchCriteria.selectedKey = "Phone";
        createAdvancedSearchWhereClause("", "", strsearchPhone, "", "");
    }
}

function eventonPostshowSearchResultPage() {
    kony.print("::pk::" + advanceSearchHeader)
    if (advanceSearchHeader == "Phone") {
        //Header for Result Page
        hboxPhoneSection.isVisible = true;
        hboxPhoneSection.lblCurrentMeetingPhone.text = glbCurrentMeetingValue;
        hboxPhoneSection.tbxPhoneNumberHeader.text = hboxPhoneNumberSection.tbxPhoneNumberHeader.text;
        hboxUserIdSection.isVisible = false;
        hboxMemberIdSection.isVisible = false;
        hboxNameSection.isVisible = false;
    } else if (advanceSearchHeader == "UserId") {
        //Header for Result Page
        hboxPhoneSection.isVisible = false;
        hboxUserIdSection.isVisible = true;
        hboxUserIdSection.lblCurrentMeetingUserId.text = glbCurrentMeetingValue;
        hboxUserIdSection.tbxUserIDHeader.text = hboxUserIDSection.tbxUserIDHeader.text;
        hboxMemberIdSection.isVisible = false;
        hboxNameSection.isVisible = false;
    } else if (advanceSearchHeader == "MemberId") {
        //Header for Result Page
        hboxPhoneSection.isVisible = false;
        hboxUserIdSection.isVisible = false;
        hboxMemberIdSection.isVisible = true;
        hboxMemberIdSection.lblCurrentMeetingMemerId.text = glbCurrentMeetingValue;
        hboxMemberIdSection.tbxMemberIDHeader.text = (gblScannedData != '') ? gblScannedData : hboxMemberIDSection.tbxMemberIDHeader.text;
        hboxNameSection.isVisible = false;
    } else if (advanceSearchHeader == "Name") {
        //Header for Result Page
        hboxPhoneSection.isVisible = false;
        hboxUserIdSection.isVisible = false;
        hboxMemberIdSection.isVisible = false;
        hboxNameSection.isVisible = true;
        hboxNameSection.lblCurrentMeetingName.text = glbCurrentMeetingValue;
        /*Pratik Kagda -> WWMP-14 - Issue resolved for Advance search returns all result on second time */
        //hboxNameSection.tbxFirstNameHeader.text=hboxName.tbxFirstNameHeader.text;
        //hboxNameSection.tbxLastNameHeader.text=hboxName.tbxLastNameHeader.text;
        /*End of resolution*/
    }
}

function eventOnClickVboxDoneImage() {
    isFromAdvanceSearch = true;
    kony.print("Dileep --> Inside eventOnClickVboxDoneImage --> tbxFirstNameHeader = " + hboxName.tbxFirstNameHeader.text);
    var strsearchFirstname = hboxName.tbxFirstNameHeader.text;
    var strsearchLastname = hboxName.tbxLastNameHeader.text;
    valid = new validationcls();
    hboxNameSection.tbxLastNameHeader.text = strsearchLastname;
    hboxNameSection.tbxFirstNameHeader.text = strsearchFirstname;
    strsearchFirstname = checkUndefined(strsearchFirstname);
    kony.print("strsearchFirstname = " + strsearchFirstname);
    strsearchLastname = checkUndefined(strsearchLastname);
    kony.print("strsearchLastname = " + strsearchFirstname);
    var resFname = false;
    var resLname = false;
    if (strsearchFirstname.length == 0 && strsearchLastname.length == 0) {
        //alertForMessages(kony.i18n.getLocalizedString("strMsgSearchNameValid"));
        displayPopupAlert(kony.i18n.getLocalizedString("strMsgSearchNameValid"));
        //return 1;
    } else if (strsearchFirstname.length > 0 && strsearchLastname.length > 0) {
        kony.print("both are filled")
            //Commented old and added new to solve MEG 5148
            //resFname = valid.validateAdvanceSearchString(strsearchFirstname).isValid();
            //resLname = valid.validateAdvanceSearchString(strsearchLastname).isValid();
        resFname = valid.validateAdvanceSearchFNameLName(strsearchFirstname).isValid();
        resLname = valid.validateAdvanceSearchFNameLName(strsearchLastname).isValid();
    } else if (strsearchFirstname.length > 0) {
        kony.print("First Name is not empty");
        //Commented old and added new to solve MEG 5148
        //resFname = valid.validateAdvanceSearchString(strsearchFirstname).isValid();
        resFname = valid.validateAdvanceSearchFNameLName(strsearchFirstname).isValid();
    } else if (strsearchLastname.length > 0) {
        kony.print("Last Name is not empty");
        //Commented old and added new to solve MEG 5148
        //resLname = valid.validateAdvanceSearchString(strsearchLastname).isValid();
        resLname = valid.validateAdvanceSearchFNameLName(strsearchLastname).isValid();
    }
    if (resFname || resLname) {
        kony.print("Calling createAdvancedSearchWhereClause function resFname -- " + resFname + "  resLname -- " + resLname);
        //createAdvancedSearchWhereClause(strsearchFirstname.toUpperCase(), strsearchLastname.toUpperCase(), "", "" , "");
        createAdvancedSearchWhereClause(strsearchFirstname.toUpperCase(), strsearchLastname.toUpperCase(), "", "", "");
    }
    frmMemberProfileSearch.lblMemberTypeInfo.text = popupAdvancedSearch.lblMemberTypeInfo.text;
    frmMemberProfileSearch.lblMemberStatusInfo.text = popupAdvancedSearch.lblMemberStatusInfo.text;
    //frmMemberProfileSearch.lblStateInfo.text = popupAdvancedSearch.lblStateInfo.text;
    //	frmMemberProfileSearch.txtCity.text = popupAdvancedSearch.txtCity.text;
    kony.print("Name has set.")
}

function eventOnClickVboxMemberIdDoneImage() {
    //Dileep Chejerla: Added below two lines to leftpad zeros
    isFromAdvanceSearch = true;
    var strsearchMemberId = checkUndefined(hboxMemberIDSection.tbxMemberIDHeader.text);
    strsearchMemberId = leftpadZerosForMonthlyPassId(strsearchMemberId);
    valid = new validationcls();
    //createAdvancedSearchWhereClause("", "", "", strsearchMemberId, "");
    var res = valid.validateAdvanceSearchString(strsearchMemberId);
    if (error != "") {
        //alert(kony.i18n.getLocalizedString("strMsgSearchMemberValid"));
        displayPopupAlert(kony.i18n.getLocalizedString("strMsgSearchValid"));
        error = "";
    } else {
        createAdvancedSearchWhereClause("", "", "", strsearchMemberId, "");
    }
}
/**
 * Dileep Chejerla
 * Below function will leftpadd zeros to monthly pass number if the length is less than 8
 * e.g. input monthly pass number = W1234567, output monthly pass number = W01234567
 * input monthly pass number = W123456, output monthly pass number = W00123456
 */
function leftpadZerosForMonthlyPassId(strsearchMemberId) {
    var monthlypassId = strsearchMemberId;
    var leftpaddedMonthlypassId = "";
    kony.print("monthlypassId = " + monthlypassId + " and length is = " + monthlypassId.length);
    var strFirstChar = monthlypassId.charAt(0);
    if (strFirstChar == "m" || strFirstChar == "w" || strFirstChar == "M" || strFirstChar == "W") {
        if (monthlypassId.length < 9) {
            var substrDigits = monthlypassId.substring(1, monthlypassId.length);
            kony.print("substrDigits = " + substrDigits + " and length = " + substrDigits.length);
            if (substrDigits.length < 8) {
                while (substrDigits.length < 8) {
                    substrDigits = 0 + substrDigits;
                } // while end
                leftpaddedMonthlypassId = strFirstChar + substrDigits;
            }
        } else if (monthlypassId.length > 9 && monthlypassId.length < 15) { //Block added by Ami-MEG-3721
            var substrDigits = monthlypassId.substring(1, monthlypassId.length);
            kony.print("substrDigits = " + substrDigits + " and length = " + substrDigits.length);
            if (substrDigits.length < 14) {
                while (substrDigits.length < 14) {
                    substrDigits = 0 + substrDigits;
                } // while end
                leftpaddedMonthlypassId = strFirstChar + substrDigits;
            }
        } else {
            kony.print("else of substrDigits.length <9");
            leftpaddedMonthlypassId = monthlypassId;
        }
    } else {
        kony.print("else of strFirstChar == m or w");
        leftpaddedMonthlypassId = monthlypassId;
    }
    kony.print("leftpaddedMonthlypassId = " + leftpaddedMonthlypassId);
    return leftpaddedMonthlypassId;
    //return strsearchMemberId;
}

function eventOnClickUserIdDoneImage() {
    isFromAdvanceSearch = true;
    valid = new validationcls();
    var strsearchUserId = checkUndefined(hboxUserIDSection.tbxUserIDHeader.text);
    //var res = valid.validateAdvanceSearchString(strsearchUserId).isValid();
    var res = true;
    if (strsearchUserId == "" || !res) {
        //alert(kony.i18n.getLocalizedString("strMsgSearchUserValid"));
        displayPopupAlert(kony.i18n.getLocalizedString("strMsgSearchUserValid"));
    } else {
        createAdvancedSearchWhereClause("", "", "", "", strsearchUserId);
    }
}

function eventOnClickVboxPhoneNoDoneImage() {
    isFromAdvanceSearch = true;
    valid = new validationcls();
    var strsearchPhone = checkUndefined(hboxPhoneNumberSection.tbxPhoneNumberHeader.text);
    //var res = valid.validateAdvanceSearchString(strsearchPhone).isValid();
    var res = valid.validateAdvanceSearchString(strsearchPhone);
    if (error != "") {
        //alert(kony.i18n.getLocalizedString("strMsgSearchPhoneValid"));
        displayPopupAlert(kony.i18n.getLocalizedString("strMsgSearchValid"));
        error = "";
    } else {
        createAdvancedSearchWhereClause("", "", strsearchPhone, "", "");
    }
}
// Dileep - start
function eventonClickVboxDoneReasonForStatusChange() {
    if (gblIsMemberSearchPage) {
        frmMemberProfileSearch.lblMemberStatusInfo.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
        var memStatus = parseInt(popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][0]);
        kony.print("Member key is : + " + memStatus + "  ---  Status is : " + MemberStatusEnum[memStatus]);
        var queryStr = " and MemberStatus='" + MemberStatusEnum[memStatus] + "'";
        refineSearch();
    } else {
        popupAdvancedSearch.lblMemberStatusInfo.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
        frmMemberProfileSearch.lblMemberStatusInfo.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
    }
    kony.print("IsViewMember in popupchangememberstatus====" + IsViewMember);
    if (IsViewMember == FlowForScreens.ViewMember) {
        popupChangeMemberStatus.lblChangeMemberStatus.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
    }
    if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
        frmBatchAddMember.lblMemberStatus.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
    }
    gblIsMemberSearchPage = false;
    popupMemberStatus.dismiss();
}
// Dileep - end
function eventonClickVboxDoneMemberStatus() {
    glbSelectMemStatus = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][0];
    if (gblIsMemberSearchPage) {
        frmMemberProfileSearch.lblMemberStatusInfo.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
        var memStatus = parseInt(popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][0]);
        kony.print("Member key is : + " + memStatus + "  ---  Status is : " + MemberStatusEnum[memStatus]);
        var queryStr = " and MemberStatus='" + MemberStatusEnum[memStatus] + "'";
        refineSearch();
    } else {
        popupAdvancedSearch.lblMemberStatusInfo.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
        frmMemberProfileSearch.lblMemberStatusInfo.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
    }
    kony.print("IsViewMember in popupchangememberstatus====" + IsViewMember);
    if (IsViewMember == FlowForScreens.ViewMember) {
        popupChangeMemberStatus.lblChangeMemberStatus.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
    }
    if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
        frmBatchAddMember.lblMemberStatus.text = popupMemberStatus.pickerMemberStatus.selectedKeyValues[0][1];
    }
    gblIsMemberSearchPage = false;
    popupMemberStatus.dismiss();
}

function eventonClickVboxDoneMemberType() {
    glbSelectMemType = popupMemberType.pickerMemberType.selectedKeyValues[0][0];
    kony.print("PopUp Selected MemberType : " + glbSelectMemType);
    if (gblIsMemberSearchPage) {
        frmMemberProfileSearch.lblMemberTypeInfo.text = popupMemberType.pickerMemberType.selectedKeyValues[0][1];
        var memType = parseInt(popupMemberType.pickerMemberType.selectedKeyValues[0][0]);
        kony.print("Member Type is : " + memType);
        var queryStr = " and MemberType='" + MemberValueEnum[memType] + "'";
        refineSearch();
    } else if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
        //MEG-3919 Change Weights 0 to NWI
        /*MEG-3919 Replace the Data with New Segment Data if liftime member after NWI changes*/
        var dataSeg = frmBatchAddMember.segAddBatchMembeProfileDetails.data;
        if (glbSelectMemType == MemberTypeEnum["LifeTime"]) {
            kony.print("::LIFETIME:: dataSeg = " + JSON.stringify(dataSeg));
            var weightdata = dataSeg;
            if (weightdata && weightdata.length > 0) {
                _.each(weightdata, function(d) {
                    d.isNWIAllowed = true;
                    d.btnNWI = {
                        text: getLocalizedString("strNWI"),
                        isVisible: true,
                        skin: "btnwwtxtSearchLocation"
                    }
                });
                // First Weight
                weightdata[0].isNWIAllowed = false;
                weightdata[0].btnNWI = {
                    text: getLocalizedString("strNWI"),
                    isVisible: false,
                    skin: "btnwwtxtSearchLocation"
                };
                kony.print("::LIFETIME:: weightdata  =" + JSON.stringify(weightdata));
                var sorted = _.sortBy(weightdata, function(d) {
                    return new Date(d.lblDateData);
                });
                var result = [],
                    sorted1 = sorted;
                kony.print("::LIFETIME:: sorted1=" + JSON.stringify(sorted1));
                _.each(sorted, function(d) {
                    var date = new Date(d.lblDateData);
                    var monthrecords = _.filter(sorted1, function(dd) {
                        return new Date(dd.lblDateData).getMonth() == date.getMonth() && new Date(dd.lblDateData).getFullYear() == date.getFullYear();
                    });
                    if (monthrecords.length > 0) {
                        monthrecords[0]["isNWIAllowed"] = false;
                        if (monthrecords[0].lblWeightData == getLocalizedString("strNWI")) {
                            kony.print("::LIFETIME::monthrecords[0].lblDateData=" + monthrecords[0].lblDateData);
                            kony.print("::LIFETIME:: batchWeightData=" + JSON.stringify(batchWeightData));
                            //Find the Record With NWI in Segment with date less than selected one, and replace the weight of that
                            var record = _.filter(sorted, function(w) {
                                return (new Date(w.lblDateData).setHours(0, 0, 0) < new Date(monthrecords[0].lblDateData).setHours(0, 0, 0) && w.lblWeightData != getLocalizedString("strNWI"));
                            });
                            kony.print("::LIFETIME::weight=" + JSON.stringify(record));
                            monthrecords[0].lblWeightData = parseFloat(record[record.length - 1].lblWeightData).toFixed(1);
                        }
                        monthrecords[0].btnNWI = {
                            text: getLocalizedString("strNWI"),
                            isVisible: false
                        };
                        result.push(monthrecords);
                        sorted1 = _.difference(sorted1, monthrecords);
                        kony.print("::LIFETIME:: Loop sorted1==" + JSON.stringify(sorted1));
                    }
                });
                dataSeg = _.flatten(result);
                kony.print("::LIFETIME:: After Change data = " + JSON.stringify(dataSeg));
                frmBatchAddMember.segAddBatchMembeProfileDetails.setData(dataSeg);
                /*In Batch Add - Remove NoWeighIn = true for first Month Entries*/
                var batchDaata = batchWeightData;
                var result = [],
                    sorted1 = JSON.parse(JSON.stringify(batchDaata));
                kony.print("::LIFETIME:: sorted1=" + JSON.stringify(sorted1));
                _.each(batchDaata, function(d) {
                    var date = new Date(d.WeighInDate);
                    var monthrecords = _.filter(sorted1, function(dd) {
                        return new Date(dd.WeighInDate).getMonth() == date.getMonth() && new Date(dd.WeighInDate).getFullYear() == date.getFullYear();
                    });
                    if (monthrecords.length > 0) {
                        monthrecords[0]["NoWeighIn"] = false;
                        result.push(monthrecords);
                        sorted1 = _.difference(sorted1, monthrecords);
                    }
                });
                batchWeightData = _.flatten(result);
                kony.print("::LIFETIME:: After Change batchWeightData data Remove NoWeighIn= " + JSON.stringify(batchWeightData));
            }
        } else {
            var batchSegment = frmBatchAddMember.segAddBatchMembeProfileDetails.data;
            if (batchSegment && batchSegment.length > 0) {
                _.each(batchSegment, function(d) {
                    if (d.lblWeightData == getLocalizedString("strNWI")) {
                        d.btnNWI = {
                            text: getLocalizedString("strNWI"),
                            isVisible: true,
                            skin: "btnNoWeighInSelected"
                        };
                    } else {
                        d.btnNWI = {
                            text: getLocalizedString("strNWI"),
                            isVisible: true,
                            skin: "btnwwtxtSearchLocation"
                        };
                    }
                    d.isNWIAllowed = true;
                });
                //First Weight
                batchSegment[0].btnNWI = {
                    isVisible: false
                };
                frmBatchAddMember.segAddBatchMembeProfileDetails.setData(batchSegment);
            }
            kony.print(":::: After PaidbatchSegment === " + JSON.stringify(batchSegment));
            kony.print(":::: After Paid === " + JSON.stringify(batchWeightData));
        }
        /*Change batchData with NWI*/
        if (batchWeightData.length > 0) {
            _.each(batchWeightData, function(w) {
                if (w.NoWeighIn == true) {
                    var lessDateWeights = _.filter(batchWeightData, function(a) {
                        return (new Date(a.WeighInDate).setHours(0, 0, 0) < new Date(w.WeighInDate).setHours(0, 0, 0) && a.NoWeighIn != true);
                    });
                    kony.print("::DJP:: After lessDateWeights === " + JSON.stringify(lessDateWeights));
                    w.Weight = parseFloat(lessDateWeights[lessDateWeights.length - 1].Weight).toFixed(1);
                }
            });
        }
        kony.print(":::: After NWI Changes === " + JSON.stringify(batchWeightData));
        frmBatchAddMember.lblMemberType.text = popupMemberType.pickerMemberType.selectedKeyValues[0][1];
        if (popupMemberType.pickerMemberType.selectedKeyValues[0][1] == getLocalizedString("strLifetime")) {
            frmBatchAddMember.imgGoalWeight.isVisible = true;
        } else {
            frmBatchAddMember.imgGoalWeight.isVisible = false;
        }
    } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
        frmAddIndividulaMember.lblMemberShipInfo.text = popupMemberType.pickerMemberType.selectedKeyValues[0][1];
        //added by praveen kalal after new requirement for atwork 11OCT2014
        if (popupMemberType.pickerMemberType.selectedKeyValues[0][1].toUpperCase() == "AT WORK") {
            frmAddIndividulaMember.txtMemberID.text = "";
            frmAddIndividulaMember.txtMemberID.setEnabled(false);
            frmAddIndividulaMember.btnScan.isVisible = false;
            frmAddIndividulaMember.image214153572481362595.isVisible = false;
        } else {
            frmAddIndividulaMember.txtMemberID.setEnabled(true);
            frmAddIndividulaMember.btnScan.isVisible = true;
            frmAddIndividulaMember.image214153572481362595.isVisible = true;
        }
        //End by praveen kalal after new requirement for atwork 11OCT2014
        if (popupMemberType.pickerMemberType.selectedKeyValues[0][1] == getLocalizedString("strLifetime")) {
            frmAddIndividulaMember.imgGoalWeight.isVisible = true;
        } else {
            frmAddIndividulaMember.imgGoalWeight.isVisible = false;
        }
    } else if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        frmEnrollReturningMember.lblMembershipTypeValue.text = popupMemberType.pickerMemberType.selectedKeyValues[0][1];
        //Ami add
        if (frmEnrollReturningMember.lblMembershipTypeValue.text.toUpperCase() == 'VALUE') {
            frmEnrollReturningMember.lblMembershipTypeValue.text = getLocalizedString("strPaid");;
        }
    } else {
        kony.print("eventonClickVboxDoneMemberType In Else:  " + popupMemberType.pickerMemberType.selectedKeyValues[0][1]);
        popupAdvancedSearch.lblMemberTypeInfo.text = popupMemberType.pickerMemberType.selectedKeyValues[0][1];
        frmMemberProfileSearch.lblMemberTypeInfo.text = popupMemberType.pickerMemberType.selectedKeyValues[0][1];
    }
    gblIsMemberSearchPage = false;
    popupMemberType.dismiss();
}

function eventonClickVboxMemberTypeSection() {
    var context = {
        "widget": popupAdvancedSearch.hboxMemberTypeSection,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupMemberType.setContext(context);
    popupMemberType.pickerMemberType.masterData = [
        [
            ["0", kony.i18n.getLocalizedString("strAll")],
            ["1", kony.i18n.getLocalizedString("strPaid")],
            ["7", kony.i18n.getLocalizedString("strLifetime")], 100
        ]
    ];
    popupMemberType.show();
}

function eventonClickVboxMemberStatusSection() {
    var context = {
        "widget": popupAdvancedSearch.hboxMemberStatusSection,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupMemberStatus.pickerMemberStatus.masterData = [
        [
            ["0", kony.i18n.getLocalizedString("strAll")],
            ["1", kony.i18n.getLocalizedString("strActive")],
            ["2", kony.i18n.getLocalizedString("strInactive")],
            ["3", kony.i18n.getLocalizedString("strTermed")], 100
        ]
    ]; //added by praveen kalal  
    popupMemberStatus.setContext(context);
    popupMemberStatus.show();
}

function eventOnClickCancelAdvanceSearchPopup() {
    //popupAdvancedSearch.dismiss();
    popupAdvancedSearch.destroy(); // Added by Praveen Kalal MEG-2712
}

function evenOnClickHboxMeetingLocationSection() {
    var context = {
        "widget": popupAdvancedSearch.hboxMeetingLocationSection,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupMeetingLocation.pickerMeetingLocation.masterData = [
        [
            [kony.i18n.getLocalizedString("strAll"), kony.i18n.getLocalizedString("strAll")],
            [kony.i18n.getLocalizedString("strCurrent"), kony.i18n.getLocalizedString("strCurrent")], 100
        ]
    ]; //added by praveen kalal  
    popupMeetingLocation.setContext(context);
    popupMeetingLocation.show();
}

function eventonClickhboxState() {
    displayStatePopup(popupAdvancedSearch.hboxState, "right", true);
}

function getStateDropDownData() {
    boLocation.getStates();
}

function getStateDropDownDataForRefineSearch() {
    boLocation.getStatesForRefineSearch();
}

function eventonClickDoneImageHeaderState() {
    var CurrStateKeyValues = popupState.pickerState.selectedKeyValues;
    kony.print("FLOW VALUE IN STATE" + IsViewMember);
    if (IsPreActivation == FlowForScreens.PreActivation && in_array(deviceLocale, Countries["US"])) {
        if (IsShippingState) {
            popupPreActivation.lblShippingState.text = CurrStateKeyValues[0][1];
            IsShippingState = false;
        } else {
            popupPreActivation.lblState.text = CurrStateKeyValues[0][1];
        }
    } // condition added for state popup on preactivation popup
    else if (IsBatchAddMember == FlowForScreens.BatchAddMember) {
        if (isBillingState) {
            isBillingState = false;
            frmBatchAddMember.lblBillingStateInfo.text = CurrStateKeyValues[0][1];
        } else {
            frmBatchAddMember.lblStateInfo.text = CurrStateKeyValues[0][1];
        }
    } else if (gblIsMemberSearchPage) {
        frmMemberProfileSearch.lblStateInfo.text = CurrStateKeyValues[0][1];
        refineSearch();
        gblIsMemberSearchPage = false;
    } else if (IsViewMember == FlowForScreens.ViewMember) {
        frmEditMemberProfile.lblStateInfo.text = CurrStateKeyValues[0][1];
    } else if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        frmEnrollReturningMember.lblStateInfo.text = CurrStateKeyValues[0][1];
    } else {
        popupAdvancedSearch.hboxState.lblStateInfo.text = CurrStateKeyValues[0][1];
        selectedStateId = CurrStateKeyValues[0][0];
    }
    frmEditMemberProfile.lblStateInfo.text = CurrStateKeyValues[0][1];
    popupState.dismiss();
}

function eventonClickDoneImageHeaderStateForRefineSearch() {
    var CurrStateKeyValues = popupStateRefineSearch.pickerState.selectedKeyValues;
    frmMemberProfileSearch.lblStateInfo.text = CurrStateKeyValues[0][1];
    gblIsMemberSearchPage = false;
    refineSearch();
    popupStateRefineSearch.dismiss();
}