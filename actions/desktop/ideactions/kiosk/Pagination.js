var noOfRecordsToDisplay = 50;
var incrRecords = 50;
var recordsCount = 0;
var searchResultData = [];
var displaySearchResultData = [];
var localDBRecords = 135;

function eventOnPostShowSegMemberProfileSearch() {
    if (localDBRecords > 100) {
        for (var i = 1; i <= localDBRecords; i++) {
            searchResultData.push({
                "lblMPSDateOfBirth": "02/12/1990",
                "lblMPSFirstName": "First name " + i,
                "lblMPSLastName": "Last name " + i,
                "lblMPSPhone": "Phone No " + i,
                "lblMPSStreet": "Street Address " + i,
                "lblMPSState": "State " + i,
                "lblMPSCity": "City " + i,
                "imgMPS2": "icn_weigh.png",
                "imgMPS1": "icn_enroll_member.png"
            })
        }
    } else {
        //Webservice code will be here
    }
    displaySearchResult(noOfRecordsToDisplay);
}

function eventOnClickBtnLoadMoreDetails() {
    if (noOfRecordsToDisplay <= searchResultData.length) {
        var addCount = (searchResultData.length - noOfRecordsToDisplay) < incrRecords ? (searchResultData.length - noOfRecordsToDisplay) : incrRecords;
        recordsCount = recordsCount + incrRecords;
        noOfRecordsToDisplay = noOfRecordsToDisplay + addCount;
    } else {
        recordsCount = searchResultData.length;
    }
    displaySearchResult(noOfRecordsToDisplay);
}

function displaySearchResult(noOfRecordsToDisplay) {
    frmMemberProfileSearch.segMemberProfileSearch.data = "";
    frmMemberProfileSearch.lblRecordCount.text = "";
    var toRecords = (noOfRecordsToDisplay <= searchResultData.length) ? noOfRecordsToDisplay : searchResultData.length;
    for (var i = recordsCount; i < toRecords; i++) {
        if (noOfRecordsToDisplay <= searchResultData.length) {
            displaySearchResultData.push(searchResultData[i]);
        } else if (searchResultData.length < incrRecords) {
            displaySearchResultData.push(searchResultData[i]);
        }
    }
    frmMemberProfileSearch.segMemberProfileSearch.data = displaySearchResultData;
    var strPagingDisplayText = kony.i18n.getLocalizedString('strPagingLbl');
    strPagingDisplayText = strPagingDisplayText.replace("XYZ", toRecords); //Showing 1 - XYZ  Of 
    frmMemberProfileSearch.lblRecordCount.text = strPagingDisplayText + "  " + searchResultData.length;
}