var offlineMemberResponse = [];
var objMemberDetails = [];
var frmHomeScreen_AdvancedSearch_temp = [];
var frmHomeScreen_AdvancedSearch_offline = [];
var memberOnlineSearchResultSet;
var isDuplicate = false;
var boHomeScreenSearch = {
    populateSearchResults: function(response) {
        kony.print("populating result");
        var frmHomeScreen_SimpleSearch_temp = [];
        if (response.length > 0) {
            isFreeLifeTimeMember = false;
            for (var i in response) {
                var v = response[i];
                kony.print("Member status is : " + kony.sync.getString(v.MemberStatus));
                var b = mapKeys(viewHomeScreen, {
                    lblFirstName: makeFirstLetterUp(kony.sync.getString(v.FirstName)),
                    lblPhoneNumber: kony.sync.getString(v.Phone1),
                    lblLastName: makeFirstLetterUp(kony.sync.getString(v.LastName)),
                    MemberId: kony.sync.getString(v.MemberID),
                    MemberStatus: kony.sync.getString(v.MemberStatus),
                    MembershipType: kony.sync.getString(v.MemberType),
                    imgProcessMember: "icn_plus.png",
                    RegStatus: kony.sync.getString(v.RegStatus),
                    PreRegNumber: kony.sync.getString(v.PreRegNumber),
                    MtngOccrID: kony.sync.getString(v.MtngOccrID)
                });
                kony.print("First Name is : " + kony.sync.getString(v.FirstName));
                frmHomeScreen_SimpleSearch_temp.push(b);
            }
        }
        if (frmHomeScreen_SimpleSearch_temp.length > 0) {
            displayHomeScreen(true, frmHomeScreen_SimpleSearch_temp);
        }
    },
    //MEG-70: Advance Search call to get Members
    getAdvancedSearchData: function(whereClause, firstName, lastName, phone, regNo, email, location, city, state, memStatus, memType) {
        kony.print("inside the BO====== Query is " + whereClause);
        //Phase1 code for searching member wise weigh detail   
        isBarcodeScanned = false;
        var dbname = kony.sync.getDBName();
        var tbname1 = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
        var tbname2 = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
        whereClause = whereClause.replace("where ", "where m.CountryID='" + getCountryID() + "' AND ");
        kony.print("::whereClause::AdvanceSearch::===>>>>" + whereClause);
        var sql = "select w.weighindate, m.* from " + tbname1 + " m left join  " + tbname2 + " w on m.MemberID = w.MemberID AND w.weighindate == (select weighindate from " + tbname2 + " wa where wa.MemberID = w.MemberID order by wa.weighindate desc limit 1) " + whereClause + ";"; //' order by m.MemberID desc
        kony.print("sql this is the custom query===>>>>" + sql);

        function searchSuccess(response) {
            kony.print("::Response Search:: " + JSON.stringify(response));
            getAdvancedSearchDataCallback.call(null, response);
        }
        //ExecuteSQL.ExecuteSQLQuery(sql, categorySuccess, eventErrorCallBack);
        function mySuccCallback(res) {
            kony.sync.verifyAndCallClosure(searchSuccess, boHomeScreenSearch.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
        }
        //End Phase1
        function getAdvancedSearchDataCallback(res) {
            frmHomeScreen_AdvancedSearch_offline = [];
            if (res.length > 0) {
                kony.print("Got the result populating..... ");
                frmHomeScreen_AdvancedSearch_temp = [];
                //Reset Filters on Search Screen
                popupStateRefineSearch.pickerState.setSelectedKeyInComponent("", 0);
                popupMemberType.pickerMemberType.setSelectedKeyInComponent(getLocalizedString("strAll"), 0);
                popupMemberStatus.pickerMemberStatus.setSelectedKeyInComponent(getLocalizedString("strAll"), 0);
                frmMemberProfileSearch.lblStateInfo.text = "";
                frmMemberProfileSearch.lblMemberTypeInfo.text = getLocalizedString("strAll");
                frmMemberProfileSearch.lblMemberStatusInfo.text = getLocalizedString("strAll");
                frmMemberProfileSearch.txtCity.text = "";
                kony.print("Dileep --> calling boHomeScreenSearch.getAdvancedSearchDataOffline");
                boHomeScreenSearch.getAdvancedSearchDataOffline(res, true);
            }
            if (res.length >= NumOfMemberToShow || (!checkIfNetworkIsAvailable() && res.length > 0)) {
                kony.print("frmHomeScreen_AdvancedSearch_offline.length is : " + frmHomeScreen_AdvancedSearch_offline.length);
                displayMemberProfileScreenWithAdvancedSearch(true, false, true, frmHomeScreen_AdvancedSearch_offline);
            } else if (res.length == 0 && !checkIfNetworkIsAvailable()) {
                kony.print("No Network and result is empty");
                displayMemberProfileScreenWithAdvancedSearch(true, false, true);
            }
            // TODO: start the service all once it is done
            else {
                kony.print("Searching for online records");
                boHomeScreenSearch.getAdvancedSearchDataWS(firstName, lastName, phone, regNo, email, location, city, state, memStatus, memType);
            }
            //TODO : un comment else condition for online search. Service is not ready so not integrated
        }
        //Changes here for DB integration, this code is incorrect without that
        //Phase1 code for searching member wise weigh detail
        kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, eventErrorCallBack);
        //ExecuteSQL.ExecuteSQLQuery(SQLQuery, getAdvancedSearchDataCallback, eventErrorCallBack);
        //End Phase1
        //com.kony.WeightWatchers.MemberSyncScope.MemberDetails.find(whereClause, getAdvancedSearchDataCallback, eventErrorCallBack)
    },
    //MEG-70: Advanced search service call
    getAdvancedSearchDataWS: function(firstName, lastName, phone, regNo, email, location, city, state, memStatus, memType) {
        try {
            displayProgressView();
            var AdvanceSearchList_inputparam = {};
            var searchType = "";
            kony.print(" Making service call ");
            kony.print("values passed are : " + firstName + " - " + lastName + " - " + phone + " - " + regNo + " - " + email + " - " + location + " - " + city + " - " + state + " - " + memStatus + " - " + memType);
            kony.print("First name is : " + checkUndefined(firstName));
            kony.print("Setting values");
            var noLocationId = true,
                noMtngOccrId = true,
                noMemCategory = true,
                noUserStatus = true,
                searchText = "",
                noCity = true,
                noState = true;
            kony.print("Values are set");
            if (firstName != "" || lastName != "") {
                searchType = MemberSearchTypeEnum.Name;
            } else if (phone != "") {
                searchType = MemberSearchTypeEnum.Phone;
                searchText = phone;
            } else if (regNo != "") {
                searchType = MemberSearchTypeEnum.RegNo;
                searchText = regNo;
            } else if (email != "") {
                searchType = MemberSearchTypeEnum.Email;
                searchText = email;
            }
            if (location != "") {
                noLocationId = false;
            }
            if (memStatus != "") {
                noUserStatus = false;
            }
            if (city != "") {
                noCity = false;
                noState = false;
            }
            if (memType != "") {
                noMemCategory = false;
                if (memType == "Value") {
                    memType = "Current";
                }
            }
            AdvanceSearchList_inputparam["serviceID"] = Services.searchMember;
            AdvanceSearchList_inputparam["firstName"] = firstName;
            AdvanceSearchList_inputparam["lastName"] = lastName;
            AdvanceSearchList_inputparam["accessToken"] = glbSPAuthToken; // Need to replace with Authetication token
            AdvanceSearchList_inputparam["deviceID"] = gblDeviceID;
            AdvanceSearchList_inputparam["SPID"] = glbEmployeeId;
            AdvanceSearchList_inputparam["HeaderDate"] = "";
            AdvanceSearchList_inputparam["Source"] = gblSourceVal;
            AdvanceSearchList_inputparam["searchType"] = searchType;
            AdvanceSearchList_inputparam["searchText"] = searchText;
            AdvanceSearchList_inputparam["locationId"] = location;
            AdvanceSearchList_inputparam["memCategory"] = memType;
            AdvanceSearchList_inputparam["mtngOccrId"] = "";
            AdvanceSearchList_inputparam["userStatus"] = memStatus;
            AdvanceSearchList_inputparam["city"] = city;
            AdvanceSearchList_inputparam["stateCode"] = state;
            AdvanceSearchList_inputparam["noLocationId"] = noLocationId.toString();
            AdvanceSearchList_inputparam["noMemCategory"] = noMemCategory.toString();
            AdvanceSearchList_inputparam["noUserStatus"] = noUserStatus.toString();
            AdvanceSearchList_inputparam["noMtngOccrId"] = noMtngOccrId.toString();
            AdvanceSearchList_inputparam["noCity"] = noCity.toString();
            AdvanceSearchList_inputparam["noState"] = noState.toString();
            AdvanceSearchList_inputparam["httpheaders"] = {};
            AdvanceSearchList_inputparam["httpconfigs"] = {};
            kony.print("AdvanceSearchList_inputparam == " + JSON.stringify(AdvanceSearchList_inputparam));
            AdvanceSearchList = Network.makeServiceCall(AdvanceSearchList_inputparam, boHomeScreenSearch.getAdvancedSearchDataWSCallback, true); //true to allow offline data access
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    //MEG-70: Advanced search service callback
    getAdvancedSearchDataWSCallback: function(status, AdvanceSearchList, processOffline) {
        try {
            kony.print("Status for getAdvancedSearchDataWSCallback == " + status);
            if (status == 400) {
                kony.print("AdvanceSearchList===" + JSON.stringify(AdvanceSearchList))
                kony.print("Response===" + JSON.stringify(AdvanceSearchList));
                if (processOffline) {
                    if (frmHomeScreen_AdvancedSearch_offline.length > 0) {
                        displayMemberDataWithAdvancedSearch(frmHomeScreen_AdvancedSearch_offline);
                    } else {
                        displayMemberDataWithAdvancedSearch(null);
                    }
                    return;
                }
                if (AdvanceSearchList["MembersList"].length > 0) {
                    kony.print("Filling online data :: Length == " + AdvanceSearchList["MembersList"].length);
                    boHomeScreenSearch.getAdvancedSearchDataFromService(JSON.stringify(AdvanceSearchList));
                } else {
                    if (frmHomeScreen_AdvancedSearch_offline.length > 0) {
                        displayMemberDataWithAdvancedSearch(frmHomeScreen_AdvancedSearch_offline);
                    } else {
                        displayMemberDataWithAdvancedSearch(null);
                    }
                }
                removeProgressView();
            }
        } catch (e) {
            GlobalException(e);
            isBarcodeScanned = false;
            boHomeScreenSearch.getAdvancedSearchDataFromService(JSON.stringify(AdvanceSearchList));
            removeProgressView();
        }
    },
    //MEG-70: Advanced search Populate data    
    getAdvancedSearchDataOffline: function(response, isManualSearch) {
        frmMemberProfileDetils_temp = [];
        var isMemberDuplicate = [];
        var results = [];
        var uniqueid = "";
        // AD : Added for MEG-4909 - START
        response = boHomeScreenSearch.identifyAndUpdateExpiredSeventeenWeekPassMember(response);
        // AD : Added for MEG-4909 - END
        for (var i = 0; i < response.length - 1; i++) {
            uniqueid = response[i]["UniqueID"];
            kony.print("UNIQUE ID=====>" + uniqueid);
            kony.print("uniqueid value1===> " + uniqueid);
            for (var j = i + 1; j < response.length; j++) {
                kony.print("value of j---" + j + "--Value of i--" + i);
                if (uniqueid != undefined && uniqueid != null && uniqueid.length > 0) {
                    if (response[j]["UniqueID"] == response[i]["UniqueID"]) {
                        results.push(response[i]);
                        results.push(response[j]);
                        kony.print("You have push=====>" + response[i] + "--&--" + response[j]);
                    }
                }
            }
        }
        // TO DO: Need to change following condition with >1
        if (response.length > 0 && isManualSearch) {
            for (var i in response) {
                var v = response[i];
                for (var j in results) {
                    if (response[i]["UniqueID"] == results[j]["UniqueID"]) {
                        isDuplicate = true;
                        break;
                    }
                }
                kony.print("data in bohomescreen ==== " + JSON.stringify(v));
                var imgMemberRow = "";
                var imgMemberRowCurrentWeigh = "";
                var imgMemberStatus = "";
                var imgMemberType = "";
                var imgRegStatus = "";
                var imgMemberSubscriptionStatus = "";
                var isTerminated = false;
                //Code added for Phase1
                var IsWeighedForCurrentWeek = false;
                kony.print("v.WeighInDate in The advance search function = " + v.WeighInDate);
                if (v.WeighInDate != null && v.WeighInDate != undefined) {
                    var WeighDateFormatted = formattedDate(v.WeighInDate);
                    kony.print("WeighDateFormatted from offline search ---->>> " + WeighDateFormatted);
                    IsWeighedForCurrentWeek = ToCheckLastWeighInRnge(WeighDateFormatted);
                    kony.print("IsWeighedForCurrentWeek  in the Advance search function = " + IsWeighedForCurrentWeek);
                } else {
                    //Search for Member Details record for IsCurrentWeekWeighed
                    if (checkValidString(v.IsCurrentWeekWeighed)) {
                        IsWeighedForCurrentWeek = v.IsCurrentWeekWeighed;
                    }
                }
                if (IsWeighedForCurrentWeek.toString() != "true") {
                    imgMemberRowCurrentWeigh = "icn_weigh.png";
                    IsProductFlowFromSearch = false;
                } else {
                    imgMemberRowCurrentWeigh = "icn_shopping_cart.png";
                    IsProductFlowFromSearch = true;
                }
                //End
                kony.print("Member status is : " + kony.sync.getString(v.MemberStatus));
                if ((kony.sync.getString(v.RegStatus)).toUpperCase() == (MemberRegEnum.Pre_Registered).toUpperCase()) {
                    imgMemberRow = "icn_plus.png";
                    IsProductFlowFromSearch = false;
                } else if ((kony.sync.getString(v.RegStatus)).toUpperCase() == (MemberRegEnum.Website).toUpperCase() || (kony.sync.getString(v.RegStatus)).toUpperCase() == (MemberRegEnum.Online).toUpperCase()) {
                    imgRegStatus = "icn_online_only_member.png";
                    imgMemberRow = "icn_plus.png";
                    IsProductFlowFromSearch = false;
                } else if ((kony.sync.getString(v.MemberStatus)).toUpperCase() == (MemberStatusEnum[1]).toUpperCase()) {
                    //Add code for Phase1 here where need to display product icon instead of weigh
                    imgMemberRow = imgMemberRowCurrentWeigh; //"icn_weigh.png"
                    //End
                } else if ((kony.sync.getString(v.MemberStatus)).toUpperCase() == (MemberStatusEnum[3]).toUpperCase()) {
                    imgMemberRow = "icn_plus.png";
                    isTerminated = true;
                    IsProductFlowFromSearch = false;
                } else if ((kony.sync.getString(v.MemberStatus)).toUpperCase() == (MemberStatusEnum[2]).toUpperCase()) {
                    imgMemberStatus = "icn_inactive_member.png";
                    //Add code for Phase1 here where need to display product icon instead of weigh for inactive member
                    imgMemberRow = imgMemberRowCurrentWeigh; //"icn_weigh.png";
                    //End
                } else if ((kony.sync.getString(v.MemberStatus)).toUpperCase() == (MemberStatusEnum[4]).toUpperCase()) { //Ami - MEG-3798
                    imgMemberRow = "icn_weigh.png";
                    IsProductFlowFromSearch = false;
                }
                //Added for MEG-6550
                if (isSubIdSearched == true && (kony.sync.getString(v.RegStatus)).toUpperCase() == (MemberRegEnum.Online).toUpperCase()) {
                    imgMemberRow = "icn_advance_settings.png";
                }
                var IsSelectedMemberExpired = false;
                if (in_array(kony.sync.getString(v.MemberType).toUpperCase(), lifeTimeTypes)) {
                    imgMemberType = "icn_lifetime_member.png";
                }
                if ((((kony.sync.getString(v.SubscriptnType)).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("strMPBuyNew")]).toUpperCase()) || ((kony.sync.getString(v.SubscriptnType)).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("strMPRedeem")]).toUpperCase()))) {
                    IsSelectedMemberExpired = checkExpirationDate(kony.sync.getString(v.ExpirationDate));
                    if (!IsSelectedMemberExpired) imgMemberSubscriptionStatus = "icn_monthly_pass1.png";
                } else if ((checkUndefined(kony.sync.getString(v.SubscriptnType)).toUpperCase() == (MemberSubscriptionTypeEnum["17 Week Pass-Buy New"]).toUpperCase()) || (checkUndefined(kony.sync.getString(v.SubscriptnType)).toUpperCase() == (MemberSubscriptionTypeEnum["17 Week Pass-Redeem"]).toUpperCase())) {
                    imgMemberSubscriptionStatus = "icn_17_week_pass.png";
                } else if ((checkUndefined(kony.sync.getString(v.SubscriptnType)).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("str20WkBuyNew")]).toUpperCase()) || (checkUndefined(kony.sync.getString(v.SubscriptnType)).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("str20WkRedeem")]).toUpperCase())) {
                    imgMemberSubscriptionStatus = "icn_20_week_pass.png";
                }
                kony.print("::IsSelectedMemberExpired =" + IsSelectedMemberExpired + " kony.sync.getString(v.LastName)=" + kony.sync.getString(v.LastName) + " kony.sync.getString(v.FirstName)=" + kony.sync.getString(v.FirstName) + " Subscription=" + kony.sync.getString(v.SubscriptnType));
                kony.print("image to be inserted is : " + imgMemberRow + " " + imgMemberSubscriptionStatus);
                var expDate = kony.sync.getString(v.ExpirationDate);
                var couponCode = kony.sync.getString(v.CouponCode);
                kony.print("Exp Date :" + expDate);
                if (expDate != undefined && expDate != null) {
                    kony.print("INSIDE Split Function.");
                    var expDateSplit = expDate.split("T");
                    if (isNaN(expDateSplit.toString())) {
                        kony.print("Inside Format function");
                        expDate = formatDateMemberSearch(expDateSplit[0]);
                    } else {
                        kony.print("Outside Format function");
                        expDate = "";
                    }
                } else {
                    kony.print("OUTSIDE Split Function.");
                    expDate = "";
                }
                kony.print(i + "===== Flag val===" + IsWeighedForCurrentWeek.toString() + "==Final Set Flag==" + imgMemberRow)
                var dateMasking = kony.sync.getString(v.DateOfBirth);
                kony.print("dateMasking original: " + dateMasking);
                if (dateMasking != undefined && dateMasking != "") {
                    var dateMaskedSplit = dateMasking.split("T");
                    kony.print("dateMaskedSplit: " + JSON.stringify(dateMaskedSplit));
                    kony.print("dateMaskedSplit[0]: " + dateMaskedSplit[0]);
                    var DOBFormatted = formatDateMemberSearch(dateMaskedSplit[0]);
                    kony.print("DOBFormatted: " + DOBFormatted);
                    dateMasking = formatDateMemberSearch(dateMaskedSplit[0])
                    kony.print("Again changing : " + dateMasking);
                    dateMasking = dateMasking.replace(dateMasking.substring(dateMasking.length - 4, dateMasking.length), "XX");
                } else {
                    dateMasking = "";
                }
                var b, resDup;
                var DontContByEmail = "";
                var DontCnctPhone = "";
                var DontCnctSMS = "";
                var DontSendCard = "";
                var DontRecvCalls = "";
                var DontSendCoupon = "";
                var MemberProfileDetailsView;
                if (isDuplicate) {
                    resDup = mapKeys(viewAdvancedSearchResultWithDuplicate, {
                        lblMPSLastName: makeFirstLetterUp(kony.sync.getString(v.LastName)),
                        lblMPSFirstName: makeFirstLetterUp(kony.sync.getString(v.FirstName)),
                        lblMPSCity: (deviceLocale == "fr_CA") ? kony.sync.getString(v.ShippingCity) : makeFirstLetterUp(kony.sync.getString(v.ShippingCity)),
                        lblMPSState: getStateNameById(kony.sync.getString(v.ShippingState)),
                        lblMPSStreet: encodeSpecialCharacters(kony.sync.getString(v.ShippingAddr1)),
                        lblMPSDateOfBirth: dateMasking,
                        OriginalDateOfBirth: kony.sync.getString(v.DateOfBirth),
                        lblMPSPhone: kony.sync.getString(v.Phone1),
                        Height: kony.sync.getString(v.Height),
                        Weight: kony.sync.getString(v.Weight),
                        DPT: kony.sync.getString(v.DailyPtTarget),
                        WPA: kony.sync.getString(v.WeeklyPointsAllowance),
                        RegNo: kony.sync.getString(v.RegNumber),
                        MemberStatus: kony.sync.getString(v.MemberStatus),
                        MembershipType: kony.sync.getString(v.MemberType),
                        Email: kony.sync.getString(v.Email),
                        StartDate: kony.sync.getString(v.StartDate),
                        Gender: kony.sync.getString(v.Gender),
                        imgMPS1: imgMemberType,
                        imgMPS2: imgMemberRow,
                        imgMPS3: imgMemberStatus,
                        imgMPS4: imgRegStatus,
                        template: hboxDuplicateMemberSeg,
                        RegStatus: kony.sync.getString(v.RegStatus),
                        imgMPS5: imgMemberSubscriptionStatus,
                        missWeekPass: kony.sync.getString(v.MissWeekPasses),
                        MemberID: kony.sync.getString(v.MemberID),
                        StartWeight: kony.sync.getString(v.StartWeight),
                        PreRegNumber: kony.sync.getString(v.PreRegNumber),
                        UniqueID: kony.sync.getString(v.UniqueID),
                        GoalWeight: kony.sync.getString(v.GoalWeight),
                        isOnlineSearch: false,
                        SubscriptnType: kony.sync.getString(v.SubscriptnType),
                        ExpirationDate: expDate,
                        CouponCode: couponCode,
                        FlowForCart: IsProductFlowFromSearch,
                        SessionNumber: kony.sync.getString(v.SessionNumber),
                        MaintenanceMode: kony.sync.getString(v.MaintenanceMode),
                        SubscriptionID: checkValidString(kony.sync.getString(v.SubscriptnID)) ? kony.sync.getString(v.SubscriptnID) : 0,
                        MemberRole: kony.sync.getString(v.MemberRole),
                        ProgramDuration: kony.sync.getString(v.ProgramDuration),
                        MtngOccrID: kony.sync.getString(v.MtngOccrID),
                        ShippingZipCode: kony.sync.getString(v.ShippingZipCode),
                        UserType: kony.sync.getString(v.UserType),
                        CommitmentDuration: kony.sync.getString(v.CommitmentDuration),
                        PlanType: kony.sync.getString(v.PlanType)
                    });
                    kony.print("RES DUP====>" + JSON.stringify(resDup));
                    isMemberDuplicate.push(resDup);
                } else if (isTerminated) {
                    kony.print("isTerminated====>\n" + JSON.stringify(v));
                    b = mapKeys(viewAdvancedSearchResultWithTerminated, {
                        lblMPSLastName: makeFirstLetterUp(kony.sync.getString(v.LastName)),
                        lblMPSFirstName: makeFirstLetterUp(kony.sync.getString(v.FirstName)),
                        //lblMPSCity: makeFirstLetterUp(kony.sync.getString(v.ShippingCity)),
                        lblMPSCity: (deviceLocale == "fr_CA") ? kony.sync.getString(v.ShippingCity) : makeFirstLetterUp(kony.sync.getString(v.ShippingCity)),
                        lblMPSState: getStateNameById(kony.sync.getString(v.ShippingState)),
                        lblMPSStreet: encodeSpecialCharacters(kony.sync.getString(v.ShippingAddr1)),
                        lblMPSDateOfBirth: dateMasking,
                        lblMPSPhone: kony.sync.getString(v.Phone1),
                        Height: kony.sync.getString(v.Height),
                        Weight: kony.sync.getString(v.Weight),
                        DPT: kony.sync.getString(v.DailyPtTarget),
                        WPA: kony.sync.getString(v.WeeklyPointsAllowance),
                        RegNo: kony.sync.getString(v.RegNumber),
                        MemberStatus: kony.sync.getString(v.MemberStatus),
                        MembershipType: kony.sync.getString(v.MemberType),
                        Email: kony.sync.getString(v.Email),
                        StartDate: kony.sync.getString(v.StartDate),
                        Gender: kony.sync.getString(v.Gender),
                        imgMPS1: imgMemberType,
                        imgMPS2: imgMemberRow,
                        imgMPS3: imgMemberStatus,
                        imgMPS4: imgRegStatus,
                        imgMPS5: imgMemberSubscriptionStatus,
                        RegStatus: kony.sync.getString(v.RegStatus),
                        template: hboxMemberSearchTemp,
                        missWeekPass: kony.sync.getString(v.MissWeekPasses),
                        MemberID: kony.sync.getString(v.MemberID),
                        StartWeight: kony.sync.getString(v.StartWeight),
                        PreRegNumber: kony.sync.getString(v.PreRegNumber),
                        UniqueID: kony.sync.getString(v.UniqueID),
                        GoalWeight: kony.sync.getString(v.GoalWeight),
                        OriginalDateOfBirth: kony.sync.getString(v.DateOfBirth),
                        isOnlineSearch: false,
                        SubscriptnType: kony.sync.getString(v.SubscriptnType),
                        ExpirationDate: expDate,
                        CouponCode: couponCode,
                        FlowForCart: IsProductFlowFromSearch,
                        SessionNumber: kony.sync.getString(v.SessionNumber),
                        MaintenanceMode: kony.sync.getString(v.MaintenanceMode),
                        SubscriptionID: checkValidString(kony.sync.getString(v.SubscriptnID)) ? kony.sync.getString(v.SubscriptnID) : 0,
                        MemberRole: kony.sync.getString(v.MemberRole),
                        ProgramDuration: kony.sync.getString(v.ProgramDuration),
                        MtngOccrID: kony.sync.getString(v.MtngOccrID),
                        ShippingZipCode: kony.sync.getString(v.ShippingZipCode),
                        UserType: kony.sync.getString(v.UserType),
                        CommitmentDuration: kony.sync.getString(v.CommitmentDuration),
                        PlanType: kony.sync.getString(v.PlanType)
                    });
                } else {
                    b = mapKeys(viewAdvancedSearchResult, {
                        lblMPSLastName: makeFirstLetterUp(kony.sync.getString(v.LastName)),
                        lblMPSFirstName: makeFirstLetterUp(kony.sync.getString(v.FirstName)),
                        //lblMPSCity: makeFirstLetterUp(kony.sync.getString(v.ShippingCity)),
                        lblMPSCity: (deviceLocale == "fr_CA") ? kony.sync.getString(v.ShippingCity) : makeFirstLetterUp(kony.sync.getString(v.ShippingCity)),
                        lblMPSState: getStateNameById(kony.sync.getString(v.ShippingState)),
                        lblMPSStreet: encodeSpecialCharacters(kony.sync.getString(v.ShippingAddr1)),
                        lblMPSDateOfBirth: dateMasking,
                        OriginalDateOfBirth: kony.sync.getString(v.DateOfBirth),
                        lblMPSPhone: kony.sync.getString(v.Phone1),
                        Height: kony.sync.getString(v.Height),
                        Weight: kony.sync.getString(v.Weight),
                        DPT: kony.sync.getString(v.DailyPtTarget),
                        WPA: kony.sync.getString(v.WeeklyPointsAllowance),
                        RegNo: kony.sync.getString(v.RegNumber),
                        MemberStatus: kony.sync.getString(v.MemberStatus),
                        MembershipType: kony.sync.getString(v.MemberType),
                        Email: kony.sync.getString(v.Email),
                        StartDate: kony.sync.getString(v.StartDate),
                        Gender: kony.sync.getString(v.Gender),
                        imgMPS1: imgMemberType,
                        imgMPS2: imgMemberRow,
                        imgMPS3: imgMemberStatus,
                        imgMPS4: imgRegStatus,
                        RegStatus: kony.sync.getString(v.RegStatus),
                        imgMPS5: imgMemberSubscriptionStatus,
                        missWeekPass: kony.sync.getString(v.MissWeekPasses),
                        MemberID: kony.sync.getString(v.MemberID),
                        StartWeight: kony.sync.getString(v.StartWeight),
                        PreRegNumber: kony.sync.getString(v.PreRegNumber),
                        UniqueID: kony.sync.getString(v.UniqueID),
                        GoalWeight: kony.sync.getString(v.GoalWeight),
                        isOnlineSearch: false,
                        SubscriptnType: kony.sync.getString(v.SubscriptnType),
                        ExpirationDate: expDate,
                        CouponCode: couponCode,
                        FlowForCart: IsProductFlowFromSearch,
                        SessionNumber: kony.sync.getString(v.SessionNumber),
                        MaintenanceMode: kony.sync.getString(v.MaintenanceMode),
                        SubscriptionID: checkValidString(kony.sync.getString(v.SubscriptnID)) ? kony.sync.getString(v.SubscriptnID) : 0,
                        MemberRole: kony.sync.getString(v.MemberRole),
                        ProgramDuration: kony.sync.getString(v.ProgramDuration),
                        MtngOccrID: kony.sync.getString(v.MtngOccrID),
                        EnterpriseID: kony.sync.getString(v.EnterpriseID),
                        UserName: kony.sync.getString(v.UserName),
                        ShippingZipCode: kony.sync.getString(v.ShippingZipCode),
                        UserType: kony.sync.getString(v.UserType),
                        CommitmentDuration: kony.sync.getString(v.CommitmentDuration),
                        PlanType: kony.sync.getString(v.PlanType)
                    });
                    DontSendCard = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontSendCard));
                    DontContByEmail = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontContByEmail));
                    DontSendCoupon = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontSendCoupon));
                    DontRecvCalls = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontRecvCalls));
                    DontCnctSMS = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontCnctSMS));
                    DontCnctPhone = boHomeScreenSearch.getValueYesOrNo(kony.sync.getString(v.DontCnctPhone));
                }
                isTerminated = false;
                if (!isDuplicate) {
                    frmHomeScreen_AdvancedSearch_temp.push(b);
                }
                isDuplicate = false;
                //Logic for calling online service to fetch more results
                kony.print("frmHomeScreen_AdvancedSearch_temp length is : " + frmHomeScreen_AdvancedSearch_temp.length);
                if (frmHomeScreen_AdvancedSearch_temp.length > 0) {
                    frmHomeScreen_AdvancedSearch_offline = frmHomeScreen_AdvancedSearch_temp;
                }
                if (frmHomeScreen_AdvancedSearch_temp.length > 0 && frmHomeScreen_AdvancedSearch_temp.length < 100) {
                    frmHomeScreen_AdvancedSearch_offline = frmHomeScreen_AdvancedSearch_temp;
                    kony.print("frmHomeScreenAdvancedSearch_offline length is : " + frmHomeScreen_AdvancedSearch_offline.length);
                }
            }
            for (var k in isMemberDuplicate) {
                frmHomeScreen_AdvancedSearch_temp.push(isMemberDuplicate[k]);
            }
            if (frmHomeScreen_AdvancedSearch_temp.length > 0 && frmHomeScreen_AdvancedSearch_temp.length < 100) {
                frmHomeScreen_AdvancedSearch_offline = frmHomeScreen_AdvancedSearch_temp;
            }
            kony.print("frmHomeScreen_AdvancedSearch_temp ARRAY+++++++++>>>>>" + JSON.stringify(frmHomeScreen_AdvancedSearch_temp));
            kony.print("isMemberDuplicate++++++_____?>>>>" + JSON.stringify(isMemberDuplicate));
            kony.print("Populated data");
        } else if (response.length == 1 && !isManualSearch) {
            var v = response[0];
            kony.print("Member status is : " + kony.sync.getString(v.MemberStatus));
            kony.print("Member Type is : " + kony.sync.getString(v.MemberType));
            kony.print("Member Reg Status is : " + kony.sync.getString(v.RegStatus));
            if (kony.sync.getString(v.RegStatus) == MemberRegEnum.Pre_Registered) {
                kony.print("Reg Status is Pre Registred");
                termMemberInfo = new Object();
                kony.print("Filing data in termobj");
                isBarcodeScanned = false;
                boHomeScreenSearch.fillTermMemberInfoObject(response);
                preRegisterdMember();
            } else if (kony.sync.getString(v.RegStatus) == MemberRegEnum.Website || kony.sync.getString(v.RegStatus) == MemberRegEnum.Online) {
                kony.print("Reg Status is Website or Online");
                termMemberInfo = new Object();
                kony.print("Filing data in termobj");
                boHomeScreenSearch.fillTermMemberInfoObject(response);
                isBarcodeScanned = false;
                websiteMember();
            } else {
                kony.print("Reg Status is Registred ");
                if (kony.sync.getString(v.MemberStatus) == MemberStatusEnum[1] || kony.sync.getString(v.MemberStatus) == MemberStatusEnum[2]) {
                    termMemberInfo = new Object();
                    kony.print("Filing data in termobj");
                    boHomeScreenSearch.fillTermMemberInfoObject(response);
                    ProcessMember();
                } else if (kony.sync.getString(v.MemberStatus) == MemberStatusEnum[3]) {
                    termMemberInfo = new Object();
                    kony.print("Got data for Termed Member --- in adv search");
                    kony.print("alertForTermed: " + JSON.stringify(response));
                    boHomeScreenSearch.fillTermMemberInfoObject(response);
                    kony.print("isBarcodeScanned in termed flow : " + isBarcodeScanned);
                    if (isBarcodeScanned) {
                        isBarcodeScanned = false;
                        frmMemberProfileSearch.show();
                    }
                    alertForTermed();
                }
            }
        }
    },
    getSelectedMemberWeightDetails: function(memberID, isOnlineMember) {
        var whr = "where MemberID = '" + memberID + "'";
        DBMemberDetailsController.find(whr, function(res1) {
            if (res1 && res1.length > 0) {
                var v = res1[0];
                var isVoided = kony.sync.getString(v.isVoided);
                kony.print("::DJP::getSelectedMemberWeightDetails::isVoided=" + isVoided);
                var whereClause = "where MemberID = '" + memberID + "' order by WeighInDate DESC LIMIT 0,1";
                WeightValueFromDB = 0.0;

                function getMemberWeightSuccessCallback(res) {
                    if (res.length <= 0 && checkIfNetworkIsAvailable()) {
                        if (!isVoided || isVoided != "true") {
                            kony.print("calling getMemberWeightDataWS service");
                            boHomeScreenSearch.getMemberWeightDataWS(memberID);
                        } else {
                            eventonPostShowProcessMember([], false, false);
                        }
                    } else if (res.length <= 0 && !checkIfNetworkIsAvailable()) {
                        kony.print("No Member Weight records found and no connectivity");
                        eventonPostShowProcessMember(res, false, false);
                    } else {
                        kony.print("Member Weight Record found.... Applying logic count = " + res.length + " isOnlineMember is : " + isOnlineMember);
                        var WeighDate = res[0].WeighInDate.toString();
                        //Removed the WeighDate as not required for verifying the time range. It was introduced to check the time range.Nikita Acharya
                        eventonPostShowProcessMember(res, false, true);
                    }
                }
                // Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.find ORM API
                DBWeighDetailsController.find(whereClause, getMemberWeightSuccessCallback, eventErrorCallBack);
            }
        }, eventErrorCallBack);
    },
    //MEG-3: Getting list of Pre Registered member for showing on Home Screen
    getMembersOfMeetingForHomeScreen: function(whereClause) {
        function getMembersOfMeetingForHomeScreenSuccessCallback(res) {
            kony.print("res.length==>>" + res.length);
            kony.print("kony.application.getCurrentForm().id==>>" + kony.application.getCurrentForm().id);
            if (res.length <= 0) {
                kony.print("No Members found");
                frmHomeScreen.segHomeMemberView.removeAll();
            } else {
                boHomeScreenSearch.populateSearchResults(res);
            }
        }
        DBMemberDetailsController.find(whereClause, getMembersOfMeetingForHomeScreenSuccessCallback, eventErrorCallBack)
    },
    // Function to get Termed member detail to start processing.    
    getMemberDetailsByDeviceMemberID: function(whereClause) {
        kony.print("Inside  getMemberDetailsByDeviceMemberID");

        function getMemberDetailsByDeviceMemberIDSuccessCallback(res) {
            termMemberInfo = new Object();
            if (res.length > 0) {
                kony.print("Got data for Termed Member");
                boHomeScreenSearch.fillTermMemberInfoObject(res);
                alertForTermed();
            }
        }
        DBMemberDetailsController.find(whereClause, getMemberDetailsByDeviceMemberIDSuccessCallback, eventErrorCallBack);
    },
    //MEG-3: Start processing Pre Registered member when selected to process    
    getPreRegMemberDetailsByMemberID: function(whereClause) {
        kony.print("Inside getPreRegMemberDetailsByMemberID " + whereClause);

        function getPreRegMemberDetailsByMemberIDSuccessCallback(res) {
            termMemberInfo = new Object();
            if (res.length > 0) {
                kony.print("Got data for Pre Reg Member");
                boHomeScreenSearch.fillTermMemberInfoObject(res);
                preRegisterdMember();
            }
        }
        kony.print("Where clause in getPreRegMemberDetailsByMemberID :: " + whereClause);
        DBMemberDetailsController.find(whereClause, getPreRegMemberDetailsByMemberIDSuccessCallback, eventErrorCallBack);
    },
    getMemberDetailsByMemberID: function(whereClause) {
        kony.print("Inside getMemberDetailsByMemberID");

        function getMemberDetailsByMemberIDSuccessCallback(res) {
            if (res.length > 0) {
                kony.print("inside member in success callback");
                objMemberDetails = res[0];
            }
        }
        DBMemberDetailsController.find(whereClause, getMemberDetailsByMemberIDSuccessCallback, eventErrorCallBack);
    },
    //MEG-4: For Website Member flow    
    getWebsiteMemberByUserID: function(whereClause) {
        kony.print("Inside getWebsiteMemberByUserID " + whereClause);

        function getWebsiteMemberByUserIDSuccessCallback(res) {
            termMemberInfo = new Object();
            if (res.length > 0) {
                kony.print("Got data for Website / Online Member");
                boHomeScreenSearch.fillTermMemberInfoObject(res);
                websiteMember();
            }
        }
        DBMemberDetailsController.find(whereClause, getWebsiteMemberByUserIDSuccessCallback, eventErrorCallBack)
    },
    //MEG-157, MEG-3, MEG-4 : starting the flow once the member Id is captured using barcode    
    getMemberDetailUsingBarCode: function(whereClause) {
        var internalCouponType = "";

        function getMemberDetailUsingBarCodeSuccessCallback(res) {
            kony.print("Got the success in scanning");
            popupAdvancedSearch.cmbSearchCriteria.selectedKey = "MemberId";
            eventonPostshowSearchResultPage();
            isBarcodeScanned = true;
            if (res.length > 0) {
                kony.print("Found barcode scanned member in Data base");
                frmHomeScreen_AdvancedSearch_temp = [];
                boHomeScreenSearch.getAdvancedSearchDataOffline(res, true);
                displayMemberProfileScreenWithAdvancedSearch(true, false, true, frmHomeScreen_AdvancedSearch_temp);
            } else if (res.length == 0 && checkIfNetworkIsAvailable()) {
                kony.print("gblBarcodeScannedData Reg# scanned is : " + gblBarcodeScannedData);
                frmHomeScreen_AdvancedSearch_offline = [];
                internalCouponType = gblBarcodeScannedData.substring(0, 1);
                switch (internalCouponType) {
                    case "M":
                        boHomeScreenSearch.getAdvancedSearchDataWS("", "", "", gblScannedCouponCode, "", "", "", "", "", "");
                        break;
                    case "W":
                        boHomeScreenSearch.getAdvancedSearchDataWS("", "", "", gblScannedCouponCode, "", "", "", "", "", "");
                        break;
                    case "Q":
                        boHomeScreenSearch.getAdvancedSearchDataWS("", "", "", gblScannedCouponCode, "", "", "", "", "", "");
                        break;
                    case "P":
                        boHomeScreenSearch.getAdvancedSearchDataWS("", "", "", gblBarcodeScannedData, "", "", "", "", "", "");
                        break;
                    default:
                        boHomeScreenSearch.getAdvancedSearchDataWS("", "", "", gblBarcodeScannedData, "", "", "", "", "", "");
                        break;
                }
            } else {
                hboxPhoneSection.isVisible = false;
                hboxUserIdSection.isVisible = false;
                hboxMemberIdSection.isVisible = true;
                hboxNameSection.isVisible = false;
                isBarcodeScanned = false;
                displayMemberProfileScreenWithAdvancedSearch(true, false, true);
            }
            hboxMemberIdSection.tbxMemberIDHeader.text = gblBarcodeScannedData;
        }
        // adding custom SQL query as per new design
        var dbname = kony.sync.getDBName();
        var tbname1 = com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getTableName();
        var tbname2 = com.kony.WeightWatchers.MemberSyncScope.WeighDetails.getTableName();
        var sql = "select w.weighindate, m.* from " + tbname1 + " m left join  " + tbname2 + " w on m.MemberID = w.MemberID and m.CountryID = '" + getCountryID() + "' AND w.weighindate == (select weighindate from " + tbname2 + " wa where wa.MemberID = w.MemberID order by wa.weighindate desc limit 1) " + whereClause + ";"; //' order by m.MemberID desc
        kony.print("sql this is the custom query for barcode :: " + sql);

        function searchBarcodeSuccess(response) {
            kony.print("::Response Search in barcode:: " + JSON.stringify(response));
            getMemberDetailUsingBarCodeSuccessCallback.call(null, response);
        }

        function searchSuccCallback(res) {
            kony.sync.verifyAndCallClosure(searchBarcodeSuccess, boHomeScreenSearch.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
        }
        kony.sync.single_select_execute(dbname, sql, null, searchSuccCallback, eventErrorCallBack);
    },
    getProcessMemberDetailsByDeviceMemberID: function(whereClause) {
        kony.print("Inside  getProcessMemberDetailsByDeviceMemberID");

        function getProcessMemberDetailsByDeviceMemberIDSuccessCallback(res) {
            termMemberInfo = new Object();
            if (res.length > 0) {
                kony.print("Got data for Processed Member");
                boHomeScreenSearch.fillTermMemberInfoObject(res);
                kony.print("This is in Process Member Fill===" + res);
            }
        }
        DBMemberDetailsController.find(whereClause, getProcessMemberDetailsByDeviceMemberIDSuccessCallback, eventErrorCallBack);
    },
    fillTermMemberInfoObject: function(res) {
        kony.print("Inside fillTermMemberInfoObject + " + JSON.stringify(res));
        var DontContByEmail = "";
        var DontCnctPhone = "";
        var DontCnctSMS = "";
        var DontSendCard = "";
        var DontRecvCalls = "";
        var DontSendCoupon = "";
        DontSendCard = boHomeScreenSearch.getValueYesOrNo((checkUndefined(res[0].DontSendCard).toString()));
        DontContByEmail = boHomeScreenSearch.getValueYesOrNo((checkUndefined(res[0].DontContByEmail).toString()));
        DontSendCoupon = boHomeScreenSearch.getValueYesOrNo((checkUndefined(res[0].DontSendCoupon).toString()));
        DontRecvCalls = boHomeScreenSearch.getValueYesOrNo((checkUndefined(res[0].DontRecvCalls).toString()));
        DontCnctSMS = boHomeScreenSearch.getValueYesOrNo((checkUndefined(res[0].DontCnctSMS).toString()));
        DontCnctPhone = boHomeScreenSearch.getValueYesOrNo((checkUndefined(res[0].DontCnctPhone).toString()));
        termMemberInfo.ConsWeightGain = (checkUndefined(res[0].ConsWeightGain) == "") ? 0 : checkUndefined(res[0].ConsWeightGain);
        termMemberInfo.CrntLifeTimeSta = (checkUndefined(res[0].CrntLifeTimeSta) == "") ? 0 : checkUndefined(res[0].CrntLifeTimeSta);
        termMemberInfo.LastAchvdMStone = (checkUndefined(res[0].LastAchvdMStone) == "") ? 0 : checkUndefined(res[0].LastAchvdMStone);
        termMemberInfo.PrevLifeTimeSta = (checkUndefined(res[0].PrevLifeTimeSta) == "") ? 0 : checkUndefined(res[0].PrevLifeTimeSta);
        termMemberInfo.WeeksCompleted = (checkUndefined(res[0].WeeksCompleted) == "") ? 0 : checkUndefined(res[0].WeeksCompleted);
        termMemberInfo.FeePaid = (checkUndefined(res[0].FeePaid) == "") ? false : checkUndefined(res[0].FeePaid);
        termMemberInfo.GoalWeight = (checkUndefined(res[0].GoalWeight) == "") ? 0 : checkUndefined(res[0].GoalWeight).toString().trim();
        termMemberInfo.IncompleteData = (checkUndefined(res[0].IncompleteData) == "") ? 1 : checkUndefined(res[0].IncompleteData);
        termMemberInfo.LastContactDate = checkUndefined(res[0].LastContactDate).trim();
        termMemberInfo.LastNteEntrDate = checkUndefined(res[0].LastNteEntrDate).trim();
        termMemberInfo.MissWeekPasses = (checkUndefined(res[0].MissWeekPasses) == "") ? 0 : checkUndefined(res[0].MissWeekPasses);
        termMemberInfo.NoWeeksAttended = (checkUndefined(res[0].NoWeeksAttended) == "") ? 0 : checkUndefined(res[0].NoWeeksAttended);
        termMemberInfo.RegDate = checkUndefined(res[0].RegDate).trim();
        termMemberInfo.WeightGain = (checkUndefined(res[0].WeightGain) == "") ? 0 : checkUndefined(res[0].WeightGain);
        termMemberInfo.UserComments = checkUndefined(res[0].UserComments).trim();
        termMemberInfo.UserStsEndPrd = checkUndefined(res[0].UserStsEndPrd).trim();
        termMemberInfo.UserStsChngRsn = checkUndefined(res[0].UserStsChngRsn).trim();
        termMemberInfo.UniqueID = checkUndefined(res[0].UniqueID).trim();
        termMemberInfo.RegNumber = checkUndefined(res[0].RegNumber).trim();
        termMemberInfo.FirstName = checkUndefined(res[0].FirstName).trim();
        termMemberInfo.LastName = checkUndefined(res[0].LastName).trim();
        termMemberInfo.Gender = checkUndefined(res[0].Gender).trim();
        termMemberInfo.Height = checkUndefined(res[0].Height).toString().trim();
        termMemberInfo.Email = checkUndefined(res[0].Email).trim();
        termMemberInfo.DateOfBirth = checkUndefined(res[0].DateOfBirth).trim();
        termMemberInfo.MemberType = checkUndefined(res[0].MemberType).trim();
        termMemberInfo.BillingAddr1 = checkUndefined(res[0].ShippingAddr1).trim();
        termMemberInfo.BillingAddr2 = checkUndefined(res[0].ShippingAddr2).trim();
        termMemberInfo.BillingCity = checkUndefined(res[0].ShippingCity).trim();
        termMemberInfo.BillingCountry = checkUndefined(res[0].ShippingCountry).trim();
        termMemberInfo.BillingState = getStateNameById(checkUndefined(res[0].ShippingState));
        termMemberInfo.StartDate = checkUndefined(res[0].StartDate).trim();
        termMemberInfo.BillingZipCode = checkUndefined(res[0].BillingZipCode).trim();
        termMemberInfo.Phone = checkUndefined(res[0].Phone1).trim();
        termMemberInfo.EnrollmentDate = checkUndefined(res[0].EnrollmentDate).trim();
        kony.print("checkUndefined(res[0].MemberID).trim()" + checkUndefined(res[0].MemberID));
        termMemberInfo.MemberID = checkUndefined(res[0].MemberID);
        termMemberInfo.PreRegNumber = checkUndefined(res[0].PreRegNumber);
        kony.print("termMemberInfo.MemberID=====>>>" + termMemberInfo.MemberID);
        termMemberInfo.DontContByEmail = DontContByEmail;
        termMemberInfo.DontCnctPhone = DontCnctPhone;
        termMemberInfo.DontCnctSMS = DontCnctSMS;
        termMemberInfo.DontSendCard = DontSendCard;
        termMemberInfo.DontRecvCalls = DontRecvCalls;
        termMemberInfo.DontSendCoupon = DontSendCoupon;
        termMemberInfo.StartWeight = checkUndefined(res[0].StartWeight);
        termMemberInfo.SessionNumber = (checkUndefined(res[0].SessionNumber) == "") ? 1 : res[0].SessionNumber;
        termMemberInfo.RegStatus = kony.sync.getString(res.RegStatus).trim();
        //added for MEG-3428
        termMemberInfo.UserName = (checkUndefined(res[0].UserName) == "") ? "" : checkUndefined(res[0].UserName);
        termMemberInfo.EnterpriseID = (checkUndefined(res[0].EnterpriseID) == "") ? 0 : checkUndefined(res[0].EnterpriseID);
        termMemberInfo.EmailID = (checkUndefined(res[0].EmailID) == "") ? "" : checkUndefined(res[0].EmailID);
        kony.print("boHomeScreenSearch fillTermMemberInfoObject termMemberInfo=====>>> " + JSON.stringify(termMemberInfo));
    },
    identifyAndUpdateExpiredSeventeenWeekPassMember: function(membersData) {
        if (in_array(deviceLocale, Countries["US"])) {
            for (var i = 0; i < membersData.length; i++) {
                if (in_array(deviceLocale, Countries["US"])) {
                    if (checkUndefined(membersData[i]["SubscriptnType"]).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("str20WkBuyNew")]).toUpperCase()) {
                        membersData[i].SubscriptnType = "";
                        membersData[i].ExpirationDate = "";
                        membersData[i].CouponCode = "";
                    }
                }
            }
        }
        return membersData;
    },
    getAdvancedSearchDataFromService: function(response) {
        kony.print("Inside getAdvancedSearchDataFromService ... response length is : " + response);
        try {
            memberOnlineSearchResultSet = [];
            isMemberDuplicate = [];
            if (response.length > 0) {
                response = JSON.parse(response);
                kony.print(" ... response  is : " + response);
                var imgMemberRow = "";
                var imgMemberStatus = "";
                var imgMemberType = "";
                var imgRegStatus = "";
                var imgMemberSubscriptionStatus = "";
                var isTerminated = false;
                var AdvanceSearchList = response;
                frmHomeScreen_AdvancedSearch_temp = [];
                var results = [];
                var uniqueid = "";
                // AD : Added for MEG-4909 - START
                response["MembersList"] = boHomeScreenSearch.identifyAndUpdateExpiredSeventeenWeekPassMember(response["MembersList"]);
                AdvanceSearchList = response;
                // AD : Added for MEG-4909 - END
                kony.print(" AD after ...  AdvanceSearchList: " + JSON.stringify(AdvanceSearchList));
                for (var i = 0; i < response["MembersList"].length - 1; i++) {
                    uniqueid = response["MembersList"][i]["UniqueID"];
                    kony.print("uniqueid value1===> " + uniqueid);
                    for (var j = i + 1; j < response["MembersList"].length; j++) {
                        if (uniqueid != undefined && uniqueid != null && uniqueid.length > 0) {
                            if (response["MembersList"][j]["UniqueID"] == response["MembersList"][i]["UniqueID"]) {
                                results.push(response["MembersList"][i]);
                                results.push(response["MembersList"][j]);
                                kony.print("You have push=====>" + response["MembersList"][i] + "--&--" + response["MembersList"][i + 1]);
                            }
                        }
                    }
                }
                kony.print("Before logic frmHomeScreen_AdvancedSearch_temp length is : " + frmHomeScreen_AdvancedSearch_temp.length);
                kony.print("Length of AdvanceSearchList :: " + AdvanceSearchList.length + "    response::: " + response["MembersList"].length);
                var offlineDataLength = frmHomeScreen_AdvancedSearch_offline.length;
                frmHomeScreen_AdvancedSearch_temp = frmHomeScreen_AdvancedSearch_offline;
                kony.print("offlineDataLength is : " + frmHomeScreen_AdvancedSearch_offline.length);
                if (offlineDataLength.length == 0 && AdvanceSearchList["MembersList"].length == 0) {
                    displayMemberProfileScreenWithAdvancedSearch(true, false, true);
                    return;
                }
                kony.print("Data record exists ");
                if (AdvanceSearchList["MembersList"].length > 0) {
                    memberOnlineSearchResultSet = response;
                }
                kony.print("memberOnlineSearchResultSet.length==>>>" + memberOnlineSearchResultSet.length);
                for (var i1 = 0; i1 < AdvanceSearchList["MembersList"].length; i1++) {
                    for (var j in results) {
                        if (AdvanceSearchList["MembersList"][i1]["UniqueID"] == results[j]["UniqueID"]) {
                            isDuplicate = true;
                            kony.print("Duplicate found");
                            break;
                        }
                    }
                    imgMemberRow = "";
                    imgMemberStatus = "";
                    imgMemberType = "";
                    imgRegStatus = "";
                    imgMemberSubscriptionStatus = "";
                    var imgMemberRowCurrentWeigh = "";
                    var enrollmentDateOnline = AdvanceSearchList["MembersList"][i1]["ServerMemberID"]; // This logic is written considering ServerMemberID as Primary Key.
                    var insertFlag = true;
                    var IsWeighedForCurrentWeek = false;
                    kony.print("checkUndefined(AdvanceSearchList[MembersList][i1][IsCurrentWeekWeighed]) in The advance search function service call" + checkUndefined(AdvanceSearchList["MembersList"][i1]["IsCurrentWeekWeighed"]));
                    var IsCurrentWeekWeighedvalue = checkUndefined(AdvanceSearchList["MembersList"][i1]["IsCurrentWeekWeighed"])
                    if (IsCurrentWeekWeighedvalue != null && IsCurrentWeekWeighedvalue != undefined) {
                        kony.print("Dileep --> IsCurrentWeekWeighedvalue = " + IsCurrentWeekWeighedvalue);
                        if (IsCurrentWeekWeighedvalue.toString() == "false") {
                            imgMemberRowCurrentWeigh = "icn_weigh.png";
                            IsProductFlowFromSearch = false;
                        } else {
                            imgMemberRowCurrentWeigh = "icn_shopping_cart.png";
                            IsProductFlowFromSearch = true;
                        }
                    }
                    kony.print(i1 + "========Flagval=====" + IsCurrentWeekWeighedvalue.toString() + "====imageval===" + imgMemberRowCurrentWeigh);
                    // Dileep - start MEG-2736
                    kony.print("Dileep --> RegStatus = " + AdvanceSearchList["MembersList"][i1]["RegStatus"]);
                    if ((AdvanceSearchList["MembersList"][i1]["RegStatus"]).toUpperCase() == (MemberRegEnum.Pre_Registered).toUpperCase()) {
                        kony.print("11111111111");
                        imgMemberRow = "icn_plus.png";
                        IsProductFlowFromSearch = false;
                    } else if ((AdvanceSearchList["MembersList"][i1]["RegStatus"]).toUpperCase() == (MemberRegEnum.Online).toUpperCase() || (AdvanceSearchList["MembersList"][i1]["RegStatus"]).toUpperCase() == (MemberRegEnum.Website).toUpperCase()) {
                        imgRegStatus = "icn_online_only_member.png";
                        imgMemberRow = "icn_plus.png";
                        IsProductFlowFromSearch = false;
                    }
                    // Dileep - end MEG-2736            
                    else if ((AdvanceSearchList["MembersList"][i1]["MemberStatus"]).toUpperCase() == (MemberStatusEnum[1]).toUpperCase()) {
                        //Add code for Phase1 here where need to display product icon instead of weigh
                        kony.print("222222222");
                        imgMemberRow = imgMemberRowCurrentWeigh; //"icn_weigh.png"
                        //End
                    } else if ((AdvanceSearchList["MembersList"][i1]["MemberStatus"]).toUpperCase() == (MemberStatusEnum[3]).toUpperCase()) {
                        kony.print("333333333");
                        imgMemberRow = "icn_plus.png";
                        isTerminated = true;
                        IsProductFlowFromSearch = false;
                    } else if ((AdvanceSearchList["MembersList"][i1]["MemberStatus"]).toUpperCase() == (MemberStatusEnum[2]).toUpperCase()) {
                        kony.print("444444444");
                        imgMemberStatus = "icn_inactive_member.png";
                        //Add code for Phase1 here where need to display product icon instead of weigh
                        imgMemberRow = imgMemberRowCurrentWeigh; //"icn_weigh.png"
                        //End
                    } else if ((AdvanceSearchList["MembersList"][i1]["MemberStatus"]).toUpperCase() == (MemberStatusEnum[4]).toUpperCase()) { //Ami - MEG-3798
                        imgMemberRow = "icn_weigh.png";
                        IsProductFlowFromSearch = false;
                    }
                    if (in_array(AdvanceSearchList["MembersList"][i1]["MemberType"].toUpperCase(), lifeTimeTypes)) {
                        imgMemberType = "icn_lifetime_member.png";
                    }
                    //Added for MEG-6550
                    if (isSubIdSearched == true && (AdvanceSearchList["MembersList"][i1]["RegStatus"]).toUpperCase() == (MemberRegEnum.Online).toUpperCase()) {
                        imgMemberRow = "icn_advance_settings.png";
                    }
                    var IsSelectedMemberExpired = false;
                    kony.print("SubscriptnType : " + AdvanceSearchList["MembersList"][i1]["SubscriptnType"]);
                    if (((checkUndefined(AdvanceSearchList["MembersList"][i1]["SubscriptnType"]).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("strMPBuyNew")]).toUpperCase()) || (checkUndefined(AdvanceSearchList["MembersList"][i1]["SubscriptnType"]).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("strMPRedeem")]).toUpperCase()))) {
                        IsSelectedMemberExpired = checkExpirationDate(AdvanceSearchList["MembersList"][i1]["ExpirationDate"]);
                        if (!IsSelectedMemberExpired) imgMemberSubscriptionStatus = "icn_monthly_pass1.png";
                    } else if ((checkUndefined(AdvanceSearchList["MembersList"][i1]["SubscriptnType"]).toUpperCase() == (MemberSubscriptionTypeEnum["17 Week Pass-Buy New"]).toUpperCase()) || (checkUndefined(AdvanceSearchList["MembersList"][i1]["SubscriptnType"]).toUpperCase() == (MemberSubscriptionTypeEnum["17 Week Pass-Redeem"]).toUpperCase())) {
                        imgMemberSubscriptionStatus = "icn_17_week_pass.png";
                    } else if ((checkUndefined(AdvanceSearchList["MembersList"][i1]["SubscriptnType"]).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("str20WkBuyNew")]).toUpperCase()) || (checkUndefined(AdvanceSearchList["MembersList"][i1]["SubscriptnType"]).toUpperCase() == (MemberSubscriptionTypeEnum[kony.i18n.getLocalizedString("str20WkRedeem")]).toUpperCase())) {
                        imgMemberSubscriptionStatus = "icn_20_week_pass.png";
                    }
                    kony.print("::DJP::IsSelectedMemberExpired=" + IsSelectedMemberExpired + " AdvanceSearchList[MembersList][i1][LastName]=" + AdvanceSearchList["MembersList"][i1]["LastName"] + " AdvanceSearchList[MembersList][i1][FirstName]=" + AdvanceSearchList["MembersList"][i1]["FirstName"] + " SubscriptionType = " + AdvanceSearchList["MembersList"][i1]["SubscriptnType"]);
                    kony.print("imgMemberRow : " + imgMemberRow);
                    kony.print("imgMemberStatus : " + imgMemberStatus);
                    kony.print("imgMemberType : " + imgMemberType);
                    kony.print("imgRegStatus : " + imgRegStatus);
                    kony.print("imgMemberSubscriptionStatus : " + imgMemberSubscriptionStatus);
                    var expDate = AdvanceSearchList["MembersList"][i1]["ExpirationDate"];
                    var couponCode = AdvanceSearchList["MembersList"][i1]["CouponCode"];
                    kony.print("Exp Date :" + expDate);
                    if (expDate != undefined && expDate != null) {
                        kony.print("INSIDE Split Function.");
                        var expDateSplit = expDate.split("T");
                        if (isNaN(expDateSplit.toString())) {
                            kony.print("Inside Format function");
                            expDate = formatDateMemberSearch(expDateSplit[0]);
                        } else {
                            kony.print("Outside Format function");
                            expDate = "";
                        }
                    } else {
                        kony.print("OUTSIDE Split Function.");
                        expDate = "";
                    }
                    var dateMasking = AdvanceSearchList["MembersList"][i1]["DateOfBirth"];
                    var dateMaskedSplit = dateMasking.split("T");
                    dateMasking = formatDateMemberSearch(dateMaskedSplit[0]);
                    kony.print("Again changing : " + dateMasking);
                    dateMasking = dateMasking.replace(dateMasking.substring(dateMasking.length - 4, dateMasking.length), "XX");
                    var b, resDup;
                    if (isDuplicate) {
                        resDup = mapKeys(viewAdvancedSearchResultWithDuplicate, {
                            lblMPSLastName: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["LastName"]),
                            lblMPSFirstName: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["FirstName"]),
                            //lblMPSCity: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["ShippingCity"]),
                            lblMPSCity: (deviceLocale == "fr_CA") ? AdvanceSearchList["MembersList"][i1]["ShippingCity"] : makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["ShippingCity"]),
                            lblMPSState: getStateNameById(AdvanceSearchList["MembersList"][i1]["ShippingState"]),
                            lblMPSStreet: encodeSpecialCharacters(AdvanceSearchList["MembersList"][i1]["ShippingAddr1"]),
                            lblMPSDateOfBirth: dateMasking,
                            OriginalDateOfBirth: AdvanceSearchList["MembersList"][i1]["DateOfBirth"],
                            lblMPSPhone: AdvanceSearchList["MembersList"][i1]["Phone1"],
                            Height: AdvanceSearchList["MembersList"][i1]["Height"],
                            Weight: AdvanceSearchList["MembersList"][i1]["Weight"],
                            DPT: AdvanceSearchList["MembersList"][i1]["DailyPtTarget"],
                            WPA: AdvanceSearchList["MembersList"][i1]["WeeklyPointsAllowance"],
                            RegNo: AdvanceSearchList["MembersList"][i1]["RegNumber"],
                            MemberStatus: AdvanceSearchList["MembersList"][i1]["MemberStatus"],
                            MembershipType: AdvanceSearchList["MembersList"][i1]["MemberType"],
                            Email: AdvanceSearchList["MembersList"][i1]["Email"],
                            StartDate: AdvanceSearchList["MembersList"][i1]["StartDate"],
                            Gender: AdvanceSearchList["MembersList"][i1]["Gender"],
                            imgMPS1: imgMemberType,
                            imgMPS2: imgMemberRow,
                            imgMPS3: imgMemberStatus,
                            imgMPS4: imgRegStatus,
                            template: hboxDuplicateMemberSeg,
                            RegStatus: AdvanceSearchList["MembersList"][i1]["RegStatus"],
                            imgMPS5: imgMemberSubscriptionStatus,
                            StartWeight: AdvanceSearchList["MembersList"][i1]["StartWeight"],
                            PreRegNumber: AdvanceSearchList["MembersList"][i1]["PreRegNumber"],
                            isOnlineSearch: true,
                            UniqueID: AdvanceSearchList["MembersList"][i1]["UniqueID"],
                            GoalWeight: AdvanceSearchList["MembersList"][i1]["GoalWeight"],
                            MemberID: AdvanceSearchList["MembersList"][i1]["ServerMemberID"],
                            SubscriptnType: AdvanceSearchList["MembersList"][i1]["SubscriptnType"],
                            ExpirationDate: expDate,
                            CouponCode: couponCode,
                            FlowForCart: IsProductFlowFromSearch,
                            SessionNumber: AdvanceSearchList["MembersList"][i1]["SessionNumber"],
                            SubscriptionID: checkValidString(AdvanceSearchList["MembersList"][i1]["SubscriptnID"]) ? AdvanceSearchList["MembersList"][i1]["SubscriptnID"] : 0,
                            MemberRole: AdvanceSearchList["MembersList"][i1]["MemberRole"],
                            ProgramDuration: AdvanceSearchList["MembersList"][i1]["ProgramDuration"],
                            MtngOccrID: AdvanceSearchList["MembersList"][i1]["MeetingOccuranceID"],
                            ShippingZipCode: AdvanceSearchList["MembersList"][i1]["ShippingZipCode"],
                            UserType: AdvanceSearchList["MembersList"][i1]["UserType"],
                            CommitmentDuration: AdvanceSearchList["MembersList"][i1]["CommitmentDuration"],
                            PlanType: AdvanceSearchList["MembersList"][i1]["PlanType"]
                        });
                        kony.print("Push an element");
                        isMemberDuplicate.push(resDup);
                    } else if (isTerminated) {
                        b = mapKeys(viewAdvancedSearchResultWithTerminated, {
                            lblMPSLastName: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["LastName"]),
                            lblMPSFirstName: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["FirstName"]),
                            //lblMPSCity: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["ShippingCity"]),
                            lblMPSCity: (deviceLocale == "fr_CA") ? AdvanceSearchList["MembersList"][i1]["ShippingCity"] : makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["ShippingCity"]),
                            lblMPSState: getStateNameById(AdvanceSearchList["MembersList"][i1]["ShippingState"]),
                            lblMPSStreet: encodeSpecialCharacters(AdvanceSearchList["MembersList"][i1]["ShippingAddr1"]),
                            lblMPSDateOfBirth: dateMasking, //kony.sync.getString(v.DateOfBirth),
                            OriginalDateOfBirth: AdvanceSearchList["MembersList"][i1]["DateOfBirth"],
                            lblMPSPhone: AdvanceSearchList["MembersList"][i1]["Phone1"],
                            Height: AdvanceSearchList["MembersList"][i1]["Height"],
                            Weight: AdvanceSearchList["MembersList"][i1]["Weight"],
                            DPT: AdvanceSearchList["MembersList"][i1]["DailyPtTarget"],
                            WPA: AdvanceSearchList["MembersList"][i1]["WeeklyPointsAllowance"],
                            RegNo: AdvanceSearchList["MembersList"][i1]["RegNumber"],
                            MemberStatus: AdvanceSearchList["MembersList"][i1]["MemberStatus"],
                            MembershipType: AdvanceSearchList["MembersList"][i1]["MemberType"],
                            Email: AdvanceSearchList["MembersList"][i1]["Email"],
                            StartDate: AdvanceSearchList["MembersList"][i1]["StartDate"],
                            Gender: AdvanceSearchList["MembersList"][i1]["Gender"],
                            imgMPS1: imgMemberType,
                            imgMPS2: imgMemberRow,
                            imgMPS3: imgMemberStatus,
                            imgMPS4: imgRegStatus,
                            imgMPS5: imgMemberSubscriptionStatus,
                            RegStatus: AdvanceSearchList["MembersList"][i1]["RegStatus"],
                            template: hboxMemberSearchTemp,
                            StartWeight: AdvanceSearchList["MembersList"][i1]["StartWeight"],
                            PreRegNumber: AdvanceSearchList["MembersList"][i1]["PreRegNumber"],
                            isOnlineSearch: true,
                            UniqueID: AdvanceSearchList["MembersList"][i1]["UniqueID"],
                            GoalWeight: AdvanceSearchList["MembersList"][i1]["GoalWeight"],
                            MemberID: AdvanceSearchList["MembersList"][i1]["ServerMemberID"],
                            SubscriptnType: AdvanceSearchList["MembersList"][i1]["SubscriptnType"],
                            ExpirationDate: expDate,
                            CouponCode: couponCode,
                            FlowForCart: IsProductFlowFromSearch,
                            SessionNumber: AdvanceSearchList["MembersList"][i1]["SessionNumber"], //TO DO if maintanence mode comes from service need to bind here..
                            SubscriptionID: checkValidString(AdvanceSearchList["MembersList"][i1]["SubscriptnID"]) ? AdvanceSearchList["MembersList"][i1]["SubscriptnID"] : 0,
                            MemberRole: AdvanceSearchList["MembersList"][i1]["MemberRole"],
                            ProgramDuration: AdvanceSearchList["MembersList"][i1]["ProgramDuration"],
                            MtngOccrID: AdvanceSearchList["MembersList"][i1]["MeetingOccuranceID"],
                            ShippingZipCode: AdvanceSearchList["MembersList"][i1]["ShippingZipCode"],
                            UserType: AdvanceSearchList["MembersList"][i1]["UserType"],
                            CommitmentDuration: AdvanceSearchList["MembersList"][i1]["CommitmentDuration"],
                            PlanType: AdvanceSearchList["MembersList"][i1]["PlanType"]
                        });
                    } else {
                        b = mapKeys(viewAdvancedSearchResult, {
                            lblMPSLastName: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["LastName"]),
                            lblMPSFirstName: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["FirstName"]),
                            //lblMPSCity: makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["ShippingCity"]),
                            lblMPSCity: (deviceLocale == "fr_CA") ? AdvanceSearchList["MembersList"][i1]["ShippingCity"] : makeFirstLetterUp(AdvanceSearchList["MembersList"][i1]["ShippingCity"]),
                            lblMPSState: getStateNameById(AdvanceSearchList["MembersList"][i1]["ShippingState"]),
                            lblMPSStreet: encodeSpecialCharacters(AdvanceSearchList["MembersList"][i1]["ShippingAddr1"]),
                            lblMPSDateOfBirth: dateMasking,
                            OriginalDateOfBirth: AdvanceSearchList["MembersList"][i1]["DateOfBirth"],
                            lblMPSPhone: AdvanceSearchList["MembersList"][i1]["Phone1"],
                            Height: AdvanceSearchList["MembersList"][i1]["Height"],
                            Weight: AdvanceSearchList["MembersList"][i1]["Weight"],
                            DPT: AdvanceSearchList["MembersList"][i1]["DailyPtTarget"],
                            WPA: AdvanceSearchList["MembersList"][i1]["WeeklyPointsAllowance"],
                            RegNo: AdvanceSearchList["MembersList"][i1]["RegNumber"],
                            MemberStatus: AdvanceSearchList["MembersList"][i1]["MemberStatus"],
                            MembershipType: AdvanceSearchList["MembersList"][i1]["MemberType"],
                            Email: AdvanceSearchList["MembersList"][i1]["Email"],
                            StartDate: AdvanceSearchList["MembersList"][i1]["StartDate"],
                            Gender: AdvanceSearchList["MembersList"][i1]["Gender"],
                            imgMPS1: imgMemberType,
                            imgMPS2: imgMemberRow,
                            imgMPS3: imgMemberStatus,
                            imgMPS4: imgRegStatus,
                            RegStatus: AdvanceSearchList["MembersList"][i1]["RegStatus"],
                            imgMPS5: imgMemberSubscriptionStatus,
                            StartWeight: AdvanceSearchList["MembersList"][i1]["StartWeight"],
                            PreRegNumber: AdvanceSearchList["MembersList"][i1]["PreRegNumber"],
                            isOnlineSearch: true,
                            UniqueID: AdvanceSearchList["MembersList"][i1]["UniqueID"],
                            GoalWeight: AdvanceSearchList["MembersList"][i1]["GoalWeight"],
                            MemberID: AdvanceSearchList["MembersList"][i1]["ServerMemberID"],
                            SubscriptnType: AdvanceSearchList["MembersList"][i1]["SubscriptnType"],
                            ExpirationDate: expDate,
                            CouponCode: couponCode,
                            FlowForCart: IsProductFlowFromSearch,
                            SessionNumber: AdvanceSearchList["MembersList"][i1]["SessionNumber"],
                            SubscriptionID: checkValidString(AdvanceSearchList["MembersList"][i1]["SubscriptnID"]) ? AdvanceSearchList["MembersList"][i1]["SubscriptnID"] : 0,
                            MemberRole: AdvanceSearchList["MembersList"][i1]["MemberRole"],
                            ProgramDuration: AdvanceSearchList["MembersList"][i1]["ProgramDuration"],
                            MtngOccrID: AdvanceSearchList["MembersList"][i1]["MeetingOccuranceID"],
                            EnterpriseID: AdvanceSearchList["MembersList"][i1]["EnterpriseID"],
                            UserName: AdvanceSearchList["MembersList"][i1]["UserName"],
                            ShippingZipCode: AdvanceSearchList["MembersList"][i1]["ShippingZipCode"],
                            UserType: AdvanceSearchList["MembersList"][i1]["UserType"],
                            CommitmentDuration: AdvanceSearchList["MembersList"][i1]["CommitmentDuration"],
                            PlanType: AdvanceSearchList["MembersList"][i1]["PlanType"]
                        });
                    }
                    isTerminated = false;
                    for (var j = 0; j < offlineDataLength; j++) {
                        var enrollmentDateOffline = frmHomeScreen_AdvancedSearch_offline[j]["MemberID"];
                        kony.print("EnrollmentdateOffline value is: " + enrollmentDateOffline + " and EnrollmentDateOnline is : " + enrollmentDateOnline);
                        if (kony.string.equalsIgnoreCase(enrollmentDateOnline, enrollmentDateOffline)) {
                            insertFlag = false;
                        }
                    }
                    if (insertFlag == true) {
                        kony.print("Insertflag value: " + insertFlag);
                        if (!isDuplicate) {
                            frmHomeScreen_AdvancedSearch_temp.push(b);
                        }
                    }
                    isDuplicate = false;
                    kony.print("After logic frmHomeScreen_AdvancedSearch_temp length is : " + frmHomeScreen_AdvancedSearch_temp.length);
                    kony.print("After logic frmHomeScreen_AdvancedSearch_offline length is : " + frmHomeScreen_AdvancedSearch_offline.length);
                    kony.print("Populated data");
                }
                if (insertFlag == true) {
                    for (var k in isMemberDuplicate) {
                        frmHomeScreen_AdvancedSearch_temp.push(isMemberDuplicate[k]);
                    }
                }
                kony.print("frmHomeScreen_AdvancedSearch_temp ARRAY+++++++++>>>>>" + frmHomeScreen_AdvancedSearch_temp);
                kony.print("isMemberDuplicate++++++_____?>>>>" + isMemberDuplicate);
            }
            // Changing the code to show member profile if not barco de scanned, and if barcode scanned starting appropriate flow.	
            kony.print(" isBarcodeScanned in service:: " + isBarcodeScanned + "   response.length:: " + response.length);
            //if(!isBarcodeScanned && frmHomeScreen_AdvancedSearch_temp.length > 0) // showing results for all flows
            if (frmHomeScreen_AdvancedSearch_temp.length > 0) {
                displayMemberProfileScreenWithAdvancedSearch(true, false, true, frmHomeScreen_AdvancedSearch_temp);
                return;
            }
        } catch (e) {
            GlobalException(e);
            isBarcodeScanned = false;
            removeProgressView();
        }
    },
    //MEG-237: Getting processed member weight details
    getCheckedInMemberWeightDetails: function(whrCondition) {
        kony.print("Inside getCheckedInMemberWeightDetails ");

        function getCheckedInMemberWeightDetailsSuccessCallback(results) {
            kony.print("Inside getCheckedInMemberWeightDetailsSuccessCallback");
            if (results.length > 0) {
                kony.print("Got the Weight Details");
            } else {
                kony.print("No Members checked in");
            }
        }
        kony.print("Where condition is : " + whrCondition);
        DBWeighDetailsController.find(whereClause, getCheckedInMemberWeightDetailsSuccessCallback, eventErrorCallBack);
    },
    getValueYesOrNo: function(flagValue) {
        kony.print("getValueYesOrNo: " + flagValue);
        if (flagValue == "true") {
            return getLocalizedString("strNo");
        }
        return getLocalizedString("strYes");
    },
    getMemberWeightDataWS: function(memberID) {
        try {
            var MemberWeightList_inputparam = {};
            kony.print("Inside Member Weight service + " + memberID + "  Service id is " + Services.memberWeight);
            MemberWeightList_inputparam["serviceID"] = Services.memberWeight;
            MemberWeightList_inputparam["MemberID"] = memberID; //"13697714"; // TODO: to be replaced with actual member ID 
            MemberWeightList_inputparam["deviceID"] = gblDeviceID;
            MemberWeightList_inputparam["SPID"] = glbEmployeeId;
            MemberWeightList_inputparam["Source"] = gblSourceVal;
            MemberWeightList_inputparam["accessToken"] = glbSPAuthToken;
            MemberWeightList_inputparam["HeaderDate"] = "";
            MemberWeightList_inputparam["httpheaders"] = {};
            MemberWeightList_inputparam["httpconfigs"] = {};
            MembersWeightList = Network.makeServiceCall(MemberWeightList_inputparam, boHomeScreenSearch.getMemberWeightDataWSCallback, true); //true to allow offline data access
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    getMemberWeightDataWSCallback: function(status, MembersWeightList, processOffline) {
        try {
            if (status == 400) {
                kony.print("Inside getMemberWeightDataWSCallback ");
                kony.print("getMemberWeightDataWSCallback --> Response ===" + JSON.stringify(MembersWeightList));
                if (processOffline) {
                    eventonPostShowProcessMember(null, true, false);
                    return;
                }
                if (MembersWeightList["MemberWeightList"].length > 0) {
                    kony.print("Weight online data :: Length == " + MembersWeightList["MemberWeightList"].length);
                    MembersWeightList["MemberWeightList"].sort(dateSorting);
                    for (var n = 0; n < MembersWeightList["MemberWeightList"].length; n++) {
                        kony.print("Adding weight data to local db in process flow");
                        boMemberProfile.insertOnlineWeightDetails(MembersWeightList["MemberWeightList"][n]);
                    }
                    eventonPostShowProcessMember(MembersWeightList["MemberWeightList"], true, true);
                } else {
                    eventonPostShowProcessMember(null, true, false);
                }
                removeProgressView();
            }
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },
    convertTableToObject: function(res) {
        objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = {}; //new com.kony.WeightWatchers.MemberSyncScope.MemberDetails();
                obj.DontContByEmail = res[i].DontContByEmail;
                obj.MemberRole = res[i].MemberRole;
                obj.DateOfBirth = res[i].DateOfBirth;
                obj.Email = res[i].Email;
                obj.EmpID = res[i].EmpID;
                obj.FirstName = res[i].FirstName;
                obj.Gender = res[i].Gender;
                obj.Height = res[i].Height;
                obj.LastName = res[i].LastName;
                obj.SubscriptnID = res[i].SubscriptnID;
                obj.SubscriptnType = res[i].SubscriptnType;
                obj.RegNumber = res[i].RegNumber;
                obj.LastUpdatedTime = res[i].LastUpdatedTime;
                obj.MemberType = res[i].MemberType;
                obj.BillingAddr1 = res[i].BillingAddr1;
                obj.BillingAddr2 = res[i].BillingAddr2;
                obj.BillingCity = res[i].BillingCity;
                obj.BillingCountry = res[i].BillingCountry;
                obj.BillingState = res[i].BillingState;
                obj.BillingZipCode = res[i].BillingZipCode;
                obj.ConsWeightGain = res[i].ConsWeightGain;
                obj.CrntLifeTimeSta = res[i].CrntLifeTimeSta;
                obj.DontRecvCalls = res[i].DontRecvCalls;
                obj.DontCnctPhone = res[i].DontCnctPhone;
                obj.DontCnctSMS = res[i].DontCnctSMS;
                obj.DontSendCard = res[i].DontSendCard;
                obj.DontSendCoupon = res[i].DontSendCoupon;
                obj.EnrollmentDate = res[i].EnrollmentDate;
                obj.FeePaid = res[i].FeePaid;
                obj.LastAchvdMStone = res[i].LastAchvdMStone;
                obj.LastContactDate = res[i].LastContactDate;
                obj.LastNteEntrDate = res[i].LastNteEntrDate;
                obj.LocationID = res[i].LocationID;
                obj.MeetingDate = res[i].MeetingDate;
                obj.MtngOccrID = res[i].MtngOccrID;
                obj.CouponCode = res[i].CouponCode;
                obj.ExpirationDate = res[i].ExpirationDate;
                obj.LastUsedDate = res[i].LastUsedDate;
                obj.ProductID = res[i].ProductID;
                obj.MissWeekPasses = res[i].MissWeekPasses;
                obj.NoWeeksAttended = res[i].NoWeeksAttended;
                obj.Phone1 = res[i].Phone1;
                obj.PhoneType1 = res[i].PhoneType1;
                obj.Phone2 = res[i].Phone2;
                obj.PhoneType2 = res[i].PhoneType2;
                obj.PrevLifeTimeSta = res[i].PrevLifeTimeSta;
                obj.ShippingAddr1 = res[i].ShippingAddr1;
                obj.ShippingAddr2 = res[i].ShippingAddr2;
                obj.ShippingCity = res[i].ShippingCity;
                obj.ShippingCountry = res[i].ShippingCountry;
                obj.ShippingState = res[i].ShippingState;
                obj.ShippingZipCode = res[i].ShippingZipCode;
                obj.StartDate = res[i].StartDate;
                obj.MemberStatus = res[i].MemberStatus;
                obj.TransactionType = res[i].TransactionType;
                obj.WeeksCompleted = res[i].WeeksCompleted;
                obj.WeightGain = res[i].WeightGain;
                obj.MeetingId = res[i].MeetingId;
                obj.MemTypeUpdateDt = res[i].MemTypeUpdateDt;
                obj.RegStatus = res[i].RegStatus;
                obj.MemberID = res[i].MemberID;
                obj.DeviceID = res[i].DeviceID;
                obj.GoalWeight = res[i].GoalWeight;
                obj.GoalAchDate = res[i].GoalAchDate;
                obj.StartWeight = res[i].StartWeight;
                obj.RegDate = res[i].RegDate;
                obj.IncompleteData = res[i].IncompleteData;
                obj.PreRegNumber = res[i].PreRegNumber;
                obj.UniqueID = res[i].UniqueID;
                obj.UserStsEndPrd = res[i].UserStsEndPrd;
                obj.UserComments = res[i].UserComments;
                obj.UserStsChngRsn = res[i].UserStsChngRsn;
                obj.localTime = res[i].localTime;
                obj.DailyPtTarget = res[i].DailyPtTarget;
                obj.WeeklyPointsAllowance = res[i].WeeklyPointsAllowance;
                obj.EmpID = res[i].EmpID;
                obj.IsAtndgMeeting = res[i].IsAtndgMeeting;
                obj.NoWeighIn = res[i].NoWeighIn;
                obj.LastUpdatedTime = res[i].LastUpdatedTime;
                obj.ManualWeighIn = res[i].ManualWeighIn;
                obj.MeetingDate = res[i].MeetingDate;
                obj.MtngOccrID = res[i].MtngOccrID;
                obj.MilestoneID = res[i].MilestoneID;
                obj.ReachedDate = res[i].ReachedDate;
                obj.WeekNumber = res[i].WeekNumber;
                obj.WeighInDate = res[i].WeighInDate;
                obj.Weight = res[i].Weight;
                obj.WeighId = res[i].WeighId;
                obj.WeighMSDate = res[i].WeighMSDate;
                obj.Height = res[i].Height;
                obj.LocationID = res[i].LocationID;
                obj.SessionNumber = res[i].SessionNumber; //fresh start - story -116
                obj.WeightLoss = res[i].WeightLoss;
                obj.DeviceID = res[i].DeviceID;
                obj.modifiedLast = res[i].modifiedLast;
                obj.MaintenanceMode = res[i].MaintenanceMode;
                obj.ProgramDuration = res[i].ProgramDuration;
                obj.IsCurrentWeekWeighed = res[i].IsCurrentWeekWeighed;
                obj.UserType = res[i].Usertype;
                obj.CommitmentDuration = res[i].CommitmentDuration;
                obj.PlanType = res[i].PlanType;
                obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
                objMap[i] = obj;
            }
        }
        return objMap;
    }
};