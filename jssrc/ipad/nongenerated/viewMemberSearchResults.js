function onPostShowAdvanceSearchPopup() {
    popupMeetingLocation.pickerMeetingLocation.selectedKeys = [getLocalizedString("strAll")];
    popupAdvancedSearch.lblMeetingLocationInfo.text = getLocalizedString("strAll");
}

function eventonClickHboxMemberStatusSearch() {
    var context = {
        "widget": frmMemberProfileSearch.hboxMemberStatusSection,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    gblIsMemberSearchPage = true;
    popupMemberStatus.setContext(context);
    popupMemberStatus.pickerMemberStatus.masterData = [
        [
            ["0", getLocalizedString("strAll")],
            ["1", getLocalizedString("strActive")],
            ["2", getLocalizedString("strInactive")],
            ["3", getLocalizedString("strTermed")], 100
        ]
    ]; //added by praveen kalal
    popupMemberStatus.show();
}

function eventonClickHboxMemberTypeSearch() {
    var context = {
        "widget": frmMemberProfileSearch.hboxMemberTypeSection,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    gblIsMemberSearchPage = true;
    popupMemberType.setContext(context);
    popupMemberType.pickerMemberType.masterData = [
        [
            ["0", getLocalizedString("strAll")],
            ["1", getLocalizedString("strPaid")],
            ["7", getLocalizedString("strLifetime")], 100
        ]
    ];
    popupMemberType.show();
}

function eventonClickvboxNameCurrMeetingSection() {
    if (!IsNoMeetingSelected) {
        var context1 = {
            "widget": hboxNameSection.vboxCurrNameSection,
            "anchor": "bottom",
            "sizetoanchorwidth": false
        };
        popupCurrentMeeting.setContext(context1);
        popupCurrentMeeting.show();
    }
}

function eventonClickvboxPhoneCurrMeetingSection() {
    if (!IsNoMeetingSelected) {
        var context1 = {
            "widget": hboxPhoneSection.vboxCurrMeetingPhoneSection,
            "anchor": "bottom",
            "sizetoanchorwidth": false
        };
        popupCurrentMeeting.setContext(context1);
        popupCurrentMeeting.show();
    }
}

function eventonClickvboxUserIdCurrMeetingSection() {
    if (!IsNoMeetingSelected) {
        var context1 = {
            "widget": hboxUserIdSection.vboxCurrMeetingUserSection,
            "anchor": "bottom",
            "sizetoanchorwidth": false
        };
        popupCurrentMeeting.setContext(context1);
        popupCurrentMeeting.show();
    }
}

function eventonClickvboxMemberIdCurrMeetingSection() {
    if (!IsNoMeetingSelected) {
        var context1 = {
            "widget": hboxMemberIdSection.vboxCurrMeetingMemberSection,
            "anchor": "bottom",
            "sizetoanchorwidth": false
        };
        popupCurrentMeeting.setContext(context1);
        popupCurrentMeeting.show();
    }
}

function eventOnClickvboxNameAdvanceSearchPopupResultPage() {
    var context = {
        "widget": hboxNameSection.vboxAdvanceSearchNameSection,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupAdvancedSearch.setContext(context);
    popupAdvancedSearch.show();
}

function eventOnClickvboxPhoneAdvanceSearchPopupResultPage() {
    var context = {
        "widget": hboxPhoneSection.vboxAdvanceSearchPhoneSection,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupAdvancedSearch.setContext(context);
    popupAdvancedSearch.show();
}

function eventOnClickvboxMemberIdAdvanceSearchPopupResultPage() {
    var context = {
        "widget": hboxMemberIdSection.vboxAdvanceSearchMemberIdSection,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupAdvancedSearch.setContext(context);
    popupAdvancedSearch.show();
}

function eventOnClickvboxUserIdAdvanceSearchPopupResultPage() {
    var context = {
        "widget": hboxUserIdSection.vboxAdvanceSearchUserIdSection,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupAdvancedSearch.setContext(context);
    popupAdvancedSearch.show();
}

function eventonClickHBoxStateSearch() {
    var context = {
        "widget": frmMemberProfileSearch.hboxState,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    gblIsMemberSearchPage = true;
    //TODO: Need to write code to open State pop up
}

function refineSearchResults(qryStr) {
    try {
        var queryString = "where ";
        var isName, isPhone, isMemberId, isEmail = false;
        if (popupAdvancedSearch.cmbSearchCriteria.selectedKey.toUpperCase() == "NAME") {
            isName = true;
            queryString = queryString + " FirstName like '" + firstname + "' and LastName like '" + lastname + "'";
        } else if (popupAdvancedSearch.cmbSearchCriteria.selectedKey.toUpperCase() == "PHONE") {
            isPhone = true;
            queryString = queryString + " Phone1='" + phone + "' or Phone2='" + phone + "'";
        } else if (popupAdvancedSearch.cmbSearchCriteria.selectedKey.toUpperCase() == "MEMBERID") {
            isID = true;
            queryString = queryString + " RegNumber='" + memberid + "'";
        } else if (popupAdvancedSearch.cmbSearchCriteria.selectedKey.toUpperCase() == "USERID") {
            isEmail = true;
            queryString = queryString + " Email like '" + email + "'"; // TODO: Need to do for other fields or EmpID='"+email+"'";
        }
        queryString = queryString + qryStr;
        boHomeScreenSearch.getAdvancedSearchData(queryString);
    } catch (e) {
        // todo: handle exception
    }
}