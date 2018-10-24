var refferalSearch_offline = [];
var refferalSearch_WebService = [];

function eventOnClickSearchRefferalIcon() {
    if (frmEnrollNewMember.switchReffered.selectedIndex == 0) {
        var context1 = {
            "widget": frmEnrollNewMember.lblReffered,
            "anchor": "bottom",
            "sizetoanchorwidth": true
        };
        popupRefferalSearch.setContext(context1);
        popupRefferalSearch.tbxLastNameHeader.text = "";
        popupRefferalSearch.tbxFirstNameHeader.text = "";
        popupRefferalSearch.segRefferalMember.removeAll();
        popupRefferalSearch.show();
    }
}

function onClosepopupRefferalSearch() {
    popupRefferalSearch.dismiss();
}

function onClickGetRefferelSearch() {
    try {
        var whrCondition = "";
        var firstnamesearchstr = checkUndefined(popupRefferalSearch.tbxFirstNameHeader.text).toUpperCase();
        var lastnamesearchstr = checkUndefined(popupRefferalSearch.tbxLastNameHeader.text).toUpperCase();
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
            var firstres = valid.checkEnrollFirstName(firstnamesearchstr).isValid();
            if (firstres == false) {
                return 1;
            }
            whrCondition = "where m.FirstName like \"" + firstnamesearchstr + "\"";
        } else if (lastnamesearchstr != "") {
            var lastres = valid.checkEnrollLastName(lastnamesearchstr).isValid();
            if (lastres == false) {
                return 1;
            }
            whrCondition = "where m.LastName like \"" + lastnamesearchstr + "\"";
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgSearchNameValid"));
            return 1;
        }
        whrCondition = whrCondition + " and m.LocationID='" + glbLocationID + "' and m.CountryID= '" + getCountryID() + "' ";
        kony.print("whr1" + whrCondition);
        referralSearch.getAdvancedSearchData(whrCondition, firstnamesearchstr, lastnamesearchstr);
    } catch (e) {
        GlobalException(e);
    }
}
var referralSearch = {
    getAdvancedSearchData: function(whereClause, firstName, lastName) {
        kony.print("inside the BO====== Query is " + whereClause);
        var dbname = kony.sync.getDBName();
        var tbname1 = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
        var tbname2 = com.kony.WeightWatchers.ProductSyncScope.StatesLookup.getTableName();
        var sql = "select m.MemberID as ServerMemberID, m.LastName, m.FirstName, m.ShippingCity,m.RegNumber, m.Phone1, s.StateABBR from " + tbname1 + " m left join " + tbname2 + " s on m.ShippingState = s.StateCode " + whereClause + ";";
        kony.print("sql this is the custom query===>>>>" + sql);
        kony.sync.single_select_execute(dbname, sql, null, searchSuccess, eventErrorCallBack);

        function searchSuccess(response) {
            kony.print("::Response Search:: " + JSON.stringify(response));
            refferalSearch_offline = [];
            if (response.length > 0) {
                refferalSearch_offline = referralSearch.mapReferredSearchView(response);
            }
            if (response.length >= 100 || (!checkIfNetworkIsAvailable() && response.length > 0)) {
                referralSearch.displaySearchData(refferalSearch_offline);
            } else if (response.length == 0 && !checkIfNetworkIsAvailable()) {
                popupRefferalSearch.segRefferalMember.removeAll();
                kony.print("No Network and result is empty");
            } else {
                kony.print("Searching for online records");
                referralSearch.getAdvancedSearchDataWS(firstName, lastName);
            }
        }
    },
    mapReferredSearchView: function(response) {
        var temprefferalSearch = [];
        var tempMemberId;
        //var stateData = JSON.parse(stateLookUpData);
        for (var i in response) {
            var v = response[i];
            var stateABBR = v.StateABBR;
            if (!isNaN(v.StateABBR)) {
                try {
                    /*for (var i = 0; i < stateData.StateLookUp.length; i++) {
	        				var Obj = stateData.StateLookUp[i];
	      					if(Obj.StateCode==kony.sync.getString(v.ShippingState)){
	      						stateABBR=Obj.StateABBR;
	      						break;
	      					}
	   				 }*/
                    for (var i = 0; i < StateDataObjArr.length; i++) {
                        var Obj = StateDataObjArr[i];
                        if (Obj.StateID == kony.sync.getString(v.ShippingState)) {
                            stateABBR = Obj.StateABBR;
                            break;
                        }
                    }
                } catch (e) {
                    kony.print("error");
                }
            }
            var b = mapKeys(viewReferredSearch, {
                lblsegLastName: makeFirstLetterUp(kony.sync.getString(v.LastName)),
                lblsegFirstName: makeFirstLetterUp(kony.sync.getString(v.FirstName)),
                lblsegCity: makeFirstLetterUp(kony.sync.getString(v.ShippingCity)),
                lblsegState: kony.sync.getString(stateABBR),
                lblsegPhone: kony.sync.getString(v.Phone1),
                MemberID: kony.sync.getString(v.ServerMemberID),
                RegNumber: kony.sync.getString(v.RegNumber)
            });
            temprefferalSearch.push(b);
        }
        kony.print("offline Data" + JSON.stringify(temprefferalSearch));
        return temprefferalSearch;
    },
    displaySearchData: function(Data) {
        popupRefferalSearch.segRefferalMember.removeAll();
        popupRefferalSearch.segRefferalMember.setData(Data);
    },
    getAdvancedSearchDataWS: function(firstName, lastName) {
        try {
            displayProgressView();
            var AdvanceSearchList_inputparam = {};
            var noLocationId = true,
                noMtngOccrId = true,
                noMemCategory = true,
                noUserStatus = true,
                searchText = "",
                noCity = true,
                noState = true;
            kony.print("Values are set");
            AdvanceSearchList_inputparam["serviceID"] = Services.searchMember;
            AdvanceSearchList_inputparam["firstName"] = firstName;
            AdvanceSearchList_inputparam["lastName"] = lastName;
            AdvanceSearchList_inputparam["accessToken"] = glbSPAuthToken; // Need to replace with Authetication token
            AdvanceSearchList_inputparam["deviceID"] = gblDeviceID;
            AdvanceSearchList_inputparam["SPID"] = glbEmployeeId;
            AdvanceSearchList_inputparam["HeaderDate"] = "";
            AdvanceSearchList_inputparam["Source"] = gblSourceVal;
            AdvanceSearchList_inputparam["searchType"] = MemberSearchTypeEnum.Name;
            AdvanceSearchList_inputparam["searchText"] = searchText;
            AdvanceSearchList_inputparam["locationId"] = "";
            AdvanceSearchList_inputparam["memCategory"] = "";
            AdvanceSearchList_inputparam["mtngOccrId"] = "";
            AdvanceSearchList_inputparam["userStatus"] = "";
            AdvanceSearchList_inputparam["city"] = "";
            AdvanceSearchList_inputparam["stateCode"] = "";
            AdvanceSearchList_inputparam["noLocationId"] = noLocationId.toString();
            AdvanceSearchList_inputparam["noMemCategory"] = noMemCategory.toString();
            AdvanceSearchList_inputparam["noUserStatus"] = noUserStatus.toString();
            AdvanceSearchList_inputparam["noMtngOccrId"] = noMtngOccrId.toString();
            AdvanceSearchList_inputparam["noCity"] = noCity.toString();
            AdvanceSearchList_inputparam["noState"] = noState.toString();
            AdvanceSearchList_inputparam["httpheaders"] = {};
            AdvanceSearchList_inputparam["httpconfigs"] = {};
            kony.print("AdvanceSearchList_inputparam == " + JSON.stringify(AdvanceSearchList_inputparam));
            AdvanceSearchList = Network.makeServiceCall(AdvanceSearchList_inputparam, referralSearch.getAdvancedSearchDataWSCallback, true); //true to allow offline data access
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    getAdvancedSearchDataWSCallback: function(status, AdvanceSearchList, processOffline) {
        try {
            //  var AdvanceSearchList_temp = [];
            kony.print("Status for getAdvancedSearchDataWSCallback == " + status);
            if (status == 400) {
                kony.print("AdvanceSearchList===" + JSON.stringify(AdvanceSearchList));
                kony.print("processOffline" + processOffline);
                kony.print("now");
                if (processOffline || AdvanceSearchList["MembersList"].length == 0) {
                    kony.print("in processOffline");
                    if (refferalSearch_offline.length > 0) {
                        referralSearch.displaySearchData(refferalSearch_offline);
                        kony.print("in ref");
                    } else {
                        popupRefferalSearch.segRefferalMember.removeAll();
                        kony.print("remove");
                    }
                    removeProgressView();
                    return;
                }
                if (AdvanceSearchList["MembersList"].length > 0) {
                    kony.print("Filling online data :: Length == " + AdvanceSearchList["MembersList"].length);
                    referralSearch.displaySearchDataWS(JSON.stringify(AdvanceSearchList["MembersList"]));
                }
                kony.print("kfiogfg");
                removeProgressView();
            }
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    displaySearchDataWS: function(response) {
        var searchResultDataSet = [];
        refferalSearch_WebService = [];
        response = JSON.parse(response);
        kony.print("response1" + JSON.stringify(response));
        kony.print("response::length" + response.length);
        refferalSearch_WebService = referralSearch.mapReferredSearchView(response);
        kony.print("refferalSearch_WebService1" + JSON.stringify(refferalSearch_WebService));
        if (refferalSearch_offline.length > 0) {
            searchResultDataSet = refferalSearch_offline.slice(0, NumOfMemberToShow);
            kony.print("refferalSearch_offline offline length " + refferalSearch_offline.length);
            kony.print("searchResultDataSet offline legth " + searchResultDataSet.length);
        }
        if (refferalSearch_offline.length < NumOfMemberToShow && refferalSearch_WebService.length > 0) {
            kony.print("refferalSearch_WebService length " + refferalSearch_WebService.length);
            for (var i = 0; i < refferalSearch_WebService.length; i++) {
                var isDuplicate = false;
                for (var j = 0; j < refferalSearch_offline.length; j++) {
                    if (refferalSearch_WebService[i].MemberID == refferalSearch_offline[j].MemberID) {
                        isDuplicate = true;
                        kony.print("isDuplicate  + i + j" + isDuplicate + "-" + i + "-" + j);
                        kony.print("refferalSearch_WebService[i].MemberID" + refferalSearch_WebService[i].MemberID);
                        kony.print("refferalSearch_offline[j].MemberID" + refferalSearch_offline[j].MemberID);
                        break;
                    }
                }
                if (!isDuplicate) searchResultDataSet.push(refferalSearch_WebService[i]);
                if (searchResultDataSet.length >= NumOfMemberToShow) break;
            }
            kony.print("searchResultDataSet length " + searchResultDataSet.length);
        }
        kony.print("NOw data is " + JSON.stringify(searchResultDataSet));
        kony.print("length is " + searchResultDataSet.length);
        referralSearch.displaySearchData(searchResultDataSet);
    }
}

function onRowClickpopupReferralSearch() {
    var selectedIndex = popupRefferalSearch.segRefferalMember.selectedIndex;
    var selectedRow = parseInt(selectedIndex[1]);
    var selectedReferrelMember = popupRefferalSearch.segRefferalMember.data[selectedRow];
    var firstName = selectedReferrelMember["lblsegFirstName"];
    var lastName = selectedReferrelMember["lblsegLastName"];
    glbRefferalMemberObj.ReferredByMemberID = selectedReferrelMember["MemberID"];
    glbRefferalMemberObj.ReferredByRegistrationNumber = selectedReferrelMember["RegNumber"];
    frmEnrollNewMember.lblSelectedMember.text = firstName + " " + lastName;
    popupRefferalSearch.dismiss();
}

function onChangeSwitchReffered() {
    glbRefferalMemberObj = {};
    frmEnrollNewMember.lblSelectedMember.text = "";
}