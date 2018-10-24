//This function is called on Cancel button tap
function eventOnClickvboxCancelImageLinkMember() {
    glbLinkType = "None";
    popupLinkMember.dismiss();
}
//This function is called on OnDone event of search textbox
function eventOnDonetxtSearch() {
    popupLinkMember.lblNoMember.setVisibility(false);
    popupLinkMember.segLinkMember.removeAll();
    if (popupLinkMember.txtSearch.text.length > 0) {
        if (checkIfNetworkIsAvailable()) {
            //Show Progress View
            displayProgressView();
            //Call Search Member Service
            boLinkMember.searchMemberByUsernameOrEmailViaWS(popupLinkMember.txtSearch.text, WWLinkRole.ETools, searchMemberByUsernameOrEmailResponse);
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
        }
    }
}
//Search Member by Username or Email service response
function searchMemberByUsernameOrEmailResponse(status, popupLinkMember_segLinkMember_temp) {
    //kony.print("::popupLinkMember_segLinkMember_temp = "+JSON.stringify(popupLinkMember_segLinkMember_temp));
    //Hide Progress View
    removeProgressView();
    if (status) {
        var tempArray = [];
        for (var i1 = 0; i1 < popupLinkMember_segLinkMember_temp.length; i1++) {
            //kony.print("::popupLinkMember_segLinkMember_temp = "+JSON.stringify(popupLinkMember_segLinkMember_temp[i1]));
            if (checkValidString(popupLinkMember_segLinkMember_temp[i1]["UserName"]) && checkValidString(popupLinkMember_segLinkMember_temp[i1]["EmailID"]) && checkValidString(popupLinkMember_segLinkMember_temp[i1]["EnterpriseID"])) {
                var linkObj = mapKeys(viewLinkMember, {
                    //lblUsername : popupLinkMember_segLinkMember_temp[i1]["FirstName"],
                    lblUsername: popupLinkMember_segLinkMember_temp[i1]["UserName"],
                    lblAddress: popupLinkMember_segLinkMember_temp[i1]["ShippingAddr1"],
                    lblName: popupLinkMember_segLinkMember_temp[i1]["FirstName"] + " " + popupLinkMember_segLinkMember_temp[i1]["LastName"],
                    //lblEmailID : popupLinkMember_segLinkMember_temp[i1]["Email"],
                    lblEmailID: popupLinkMember_segLinkMember_temp[i1]["EmailID"],
                    EnterpriseID: popupLinkMember_segLinkMember_temp[i1]["EnterpriseID"],
                    LinkType: popupLinkMember_segLinkMember_temp[i1]["LinkType"]
                });
                tempArray.push(linkObj);
            }
            kony.print("::popupLinkMember_segLinkMember_temp = " + JSON.stringify(tempArray));
        }
        //Bind Member data in segment
        if (tempArray.length > 0) {
            //Hide No data label
            noRecordsFoundForLinkMember(false);
            popupLinkMember.segLinkMember.setData(tempArray);
        } else {
            noRecordsFoundForLinkMember(true);
        }
    } else {
        noRecordsFoundForLinkMember(true);
    }
}

function noRecordsFoundForLinkMember(visible) {
    //hide segment and fields title hbox
    popupLinkMember.hbxTableTitle.setVisibility(!visible);
    popupLinkMember.segLinkMember.setVisibility(!visible);
    //Show No data label
    popupLinkMember.lblNoMember.setVisibility(visible);
    popupLinkMember.lblNoMember.text = kony.i18n.getLocalizedString("strMsgNoRecord");
}
//Ami add-MEG-3832 
function eventOnClickSegmentSaveLinkMember() {
    try {
        boLinkMember.getMemberLinkedwithUser(popupLinkMember.txtSearch.text, eventOnClickSegmentSaveLinkMember_org);
    } catch (e) {
        GlobalException(e);
    }
}
//This is Segment Click Function - on click update database and link member
function eventOnClickSegmentSaveLinkMember_org() {
    //Ami add-MEG-3832 -start
    var linkType = popupLinkMember.segLinkMember.selectedItems[0].LinkType;
    kony.print("Link type===" + linkType);
    if (linkType == "Link") {
        alertForMessages(kony.i18n.getLocalizedString("strMsgProfileAlreadyLinked"));
    } else { //Ami add-MEG-3832 -end
        linkChangeDetected = true;
        //Change the Button Text in Edit Profile Screen
        var linkButtonText = frmEditMemberProfile.btnLinkUnlink.text;
        if (linkButtonText == getLocalizedString("strLink")) {
            if (kony.application.getCurrentForm().id == frmEditMemberProfile.id) frmEditMemberProfile.btnLinkUnlink.text = getLocalizedString("strUnlink");
            else if (kony.application.getCurrentForm().id == frmBatchAddMember.id) frmBatchAddMember.btnUnlink.text = getLocalizedString("strUnlink");
        } else if (linkButtonText == getLocalizedString("strUnlink")) {
            if (kony.application.getCurrentForm().id == frmEditMemberProfile.id) frmEditMemberProfile.btnLinkUnlink.text = getLocalizedString("strLink");
            else if (kony.application.getCurrentForm().id == frmBatchAddMember.id) frmBatchAddMember.btnUnlink.text = getLocalizedString("strLink");
        }
        //Save the Global Variable
        var selectedData = popupLinkMember.segLinkMember.selectedItems[0];
        currentMemberLinkValues.EmailID = selectedData.lblEmailID;
        currentMemberLinkValues.EnterpriseID = selectedData.EnterpriseID;
        currentMemberLinkValues.LinkType = "Link";
        //currentMemberLinkValues.LinkType = selectedData.LinkType;
        currentMemberLinkValues.UserName = selectedData.lblUsername;
        currentMemberLinkValues.IsLink = 'false';
    }
    popupLinkMember.dismiss();
}
//This function is used to set sorting order flag
var isSortAscendinglookup = false;

function setSortFlagLookup() {
    if (isSortAscendinglookup == true) isSortAscendinglookup = false;
    else isSortAscendinglookup = true;
    return isSortAscendinglookup;
}
//This function is used to sort segment data
function eventOnClickVboxSortImgLinkMember() {
    var obj = popupLinkMember.segLinkMember.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagLookup();
        if (sortFlag == true) {
            popupLinkMember.imgSortHeader.src = "icn_sortby.png";
            popupLinkMember.segLinkMember.data = obj.sort(compareName);
        } else {
            popupLinkMember.imgSortHeader.src = "icn_sortby_down.png";
            popupLinkMember.segLinkMember.data = obj.reverse(compareName);
        }
    }
}
//This function sorts the records in the segments on a specific key 
function compareName(firstObj, secondObj) {
    //We have done sorting of Name and then Username key
    if (firstObj.lblName < secondObj.lblName) return -1;
    if (firstObj.lblName > secondObj.lblName) return 1;
    if (firstObj.lblName == secondObj.lblName) {
        if (firstObj.lblUsername < secondObj.lblUsername) return -1;
        if (firstObj.lblUsername > secondObj.lblUsername) return 1;
    }
    return 0;
}

function eventOnClickSearchUserNameEmail() {
    kony.print("eventOnClickSearchUserNameEmail " + popupMPPreActivated.txtSearch.text)
    var strSearchText = checkUndefined(popupMPPreActivated.txtSearch.text);
    if (strSearchText != "") {
        if (checkIfNetworkIsAvailable()) {
            //Show Progress View
            displayProgressView();
            //Call Search Member Service
            /* Maulik -  08/29/2016
             * Fixing the issue MEG-5699. It resolves the issue of not being able to search all the Weight Watchers account members and not just e-Tools members.
             * Code pending is : validate whether the selected memebr from the link search utility results already has an active MP associated to the profile. In this case we would need to block it...
             */
            boLinkMember.searchMemberByUsernameOrEmailViaWS(strSearchText, WWLinkRole.All, function(status, res) {
                removeProgressView();
                if (status) {
                    kony.print("result from search " + JSON.stringify(res));
                    var tempArray = [];
                    for (var i = 0; i < res.length; i++) {
                        var memberData = res[i];
                        kony.print("memberData " + JSON.stringify(memberData));
                        var memberObj = mapKeys(viewMembertoLink, {
                            lblUsername: memberData.UserName,
                            lblAddress: memberData.ShippingAddr1,
                            lblMemName: memberData.FirstName + " " + memberData.LastName,
                            lblEmailID: memberData.Email,
                            EnterpriseID: memberData.EnterpriseID,
                            LinkType: memberData.LinkType,
                            SubscriptionType: (memberData.SubscriptionType) ? memberData.SubscriptionType : "",
                            ExpirationDate: (memberData.ExpirationDate) ? memberData.ExpirationDate : "",
                            imgCheckMember: "icn_checkbox_unchecked.png"
                        });
                        tempArray.push(memberObj);
                    }
                    if (tempArray.length > 0) {
                        popupMPPreActivated.segMemberData.setData(tempArray);
                    }
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strMsgSelectDataToLink"));
                }
            });
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
        }
    }
}

function eventOnClickCheckedMemberToLink() {
    var selectedIndex = popupMPPreActivated.segMemberData.selectedIndex;
    var selectedRow = parseInt(selectedIndex[1]);
    var currentDataForSeg = popupMPPreActivated.segMemberData.data;
    for (i = 0; i < currentDataForSeg.length; i++) {
        if (selectedRow == i) {
            var memData = currentDataForSeg[i];
            kony.print("selectedMemberData====>>>>>" + JSON.stringify(memData));
            if (memData.imgCheckMember == "icn_checkbox_unchecked.png") {
                boLinkMember.getMemberLinkedWithEnterpriseID(memData.EnterpriseID, function(res) {
                    if (memData.SubscriptionType === "MonthlyPass" && !checkExpirationDate(memData.ExpirationDate)) {
                        alertForMessages(kony.i18n.getLocalizedString("strMsgProfileAlreadyLinked"));
                    } else {
                        memData.imgCheckMember = "icn_checkbox_checked.png";
                        glbSelectedMemberToLink = memData;
                    }
                });
            } else {
                memData.imgCheckMember = "icn_checkbox_unchecked.png";
                glbSelectedMemberToLink = {};
            }
            popupMPPreActivated.segMemberData.setDataAt(memData, i);
        } else {
            var memData = currentDataForSeg[i];
            kony.print("selectedMemberDataElse====>>>>>" + JSON.stringify(memData));
            memData.imgCheckMember = "icn_checkbox_unchecked.png";
            popupMPPreActivated.segMemberData.setDataAt(memData, i);
        }
    }
}