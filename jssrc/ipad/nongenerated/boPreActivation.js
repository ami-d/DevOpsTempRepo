var IsPreActivation = "";
var IsShippingState = false;
var isPaymodeCr = false;
var preActivationObj = {};
var boPreActivation = {
    getMemberByMemberID: function(paymode) {
        kony.print("::paymode---" + paymode + "---" + (paymode == kony.i18n.getLocalizedString("strCredit")));
        var whereClause = " where MemberID = '" + glbMemberId + "'";

        function getMemberByMemberIDCallback(res) {
            kony.print("::res::" + JSON.stringify(res));
            if (res.length > 0) {
                var address1 = res[0].BillingAddr1;
                var address2 = res[0].BillingAddr2;
                var city = res[0].BillingCity;
                var state = "";
                kony.print("::Biilling State" + res[0].BillingState);
                for (var i = 0; i < StateDataObjArr.length; i++) {
                    var Obj = StateDataObjArr[i];
                    if (Obj.StateID == res[0].BillingState) {
                        state = Obj.StateABBR;
                        break;
                    }
                }
                var zip = res[0].BillingZipCode;
                popupPreActivation.txtAddress1.text = address1;
                popupPreActivation.txtAddress2.text = address2;
                popupPreActivation.txtCity.text = city;
                popupPreActivation.lblState.text = state;
                popupPreActivation.txtZip.text = zip;
                var shippingState = "";
                kony.print("::Shipping State" + res[0].ShippingState);
                for (var i = 0; i < StateDataObjArr.length; i++) {
                    var Obj = StateDataObjArr[i];
                    if (Obj.StateID == res[0].ShippingState) {
                        shippingState = Obj.StateABBR;
                        break;
                    }
                }
                popupPreActivation.txtShippingAdd1.text = res[0].ShippingAddr1;
                popupPreActivation.txtShippingAdd2.text = res[0].ShippingAddr2;
                popupPreActivation.txtShippingCity.text = res[0].ShippingCity;
                popupPreActivation.lblShippingState.text = shippingState;
                popupPreActivation.txtShippingZip.text = res[0].ShippingZipCode;
                popupPreActivation.txtRegNum.text = res[0].RegNumber;
                if ((res[0].Height == undefined || res[0].Height == null || res[0].Height == "0" || res[0].Height == "") && paymode == kony.i18n.getLocalizedString("strCredit")) {
                    popupPreActivation.hboxHeight.setVisibility(true);
                }
                kony.print("res[0].RegNumber===>>>" + res[0].RegNumber);
            }
            if (checkValidObject(termMemberInfo)) {
                if (Object.keys(termMemberInfo).length !== 0) {
                    kony.print("::obj length==" + Object.keys(termMemberInfo).length);
                    if (termMemberInfo.hasOwnProperty("Height") && termMemberInfo.Height == 0 && paymode == kony.i18n.getLocalizedString("strCredit")) {
                        popupPreActivation.hboxHeight.setVisibility(true);
                    }
                }
            }
            kony.print("demoEmail" + demoEmail);
            popupPreActivation.txtEmail.text = demoEmail;
        }
        DBMemberDetailsController.find(whereClause, getMemberByMemberIDCallback, eventErrorCallBack);
    },
    vaildateData: function() {
        // displayProgressView();
        var valid = new validationcls;
        var res = true;
        var resRequire, voucherNumber;
        var msgtype = "MP";
        if (kony.application.getCurrentForm().id == frmHomeScreen.id) {
            resRequire = valid.checkForRequiredFields(popupPreActivation.txtVoucherNumber.text, "", "strInvalidSubscriptionID").isValid();
            kony.print("::ss::resRequire " + resRequire);
            if (resRequire) {
                var resSubID = valid.validSubscriptiodIdLength(popupPreActivation.txtVoucherNumber.text, msgtype).isValid();
                kony.print("::ss::resSubID " + resSubID);
                if (resSubID) {
                    kony.print("::ss::resSubID Inside");
                    voucherNumber = popupPreActivation.txtVoucherNumber.text;
                    boPreActivation.checkForValidMP(voucherNumber);
                }
            }
        } else {
            resRequire = valid.checkForRequiredFields(popupPreActivation.txtVoucherNumber.text, "", "strInvalidSubscriptionID").checkForRequiredFields(popupPreActivation.txtEmail.text, "", "strValidEmail").isValid();
            res = valid.checkEmail(popupPreActivation.txtEmail.text).isValid();
            if (resRequire) {
                if (res) {
                    var resSubID = valid.validSubscriptiodIdLength(popupPreActivation.txtVoucherNumber.text, msgtype).isValid();
                    if (resSubID) {
                        var resAddr = true,
                            resZip = true;
                        if (checkValidString(popupPreActivation.txtCity.text)) {
                            resAddr = valid.checkCity(popupPreActivation.txtCity.text).isValid();
                        }
                        if (checkValidString(popupPreActivation.txtZip.text)) {
                            resZip = valid.validateZipCode(popupPreActivation.txtZip.text).isValid();
                        }
                        if (checkValidString(popupPreActivation.txtCity.text) || checkValidString(popupPreActivation.txtAddress1.text) || checkValidString(popupPreActivation.txtAddress2.text) || checkValidString(popupPreActivation.txtZip.text)) {
                            kony.print("Inside City,Address,Zip Condition..");
                            if (popupPreActivation.lblState.text == "") {
                                kony.print("Inside State Condition..");
                                alertForMessages(kony.i18n.getLocalizedString("strSelectState"));
                                removeProgressView();
                                return false;
                            }
                        }
                        if (resAddr && resZip) {
                            voucherNumber = popupPreActivation.txtVoucherNumber.text;
                            boPreActivation.checkForValidMP(voucherNumber);
                        }
                    }
                }
            }
        }
        //removeProgressView();
    },
    checkForValidMP: function(voucherNumber) {
        var data = voucherNumber;
        var date = voucherNumber.slice(-6);
        kony.print("date" + date);
        var expdate = new Date(date.slice(0, 2) + "/" + date.slice(2, 4) + "/" + date.slice(4, 6));
        var couponCode = data;
        kony.print("data value --- " + data);
        if (data.length > 9 && data.length < 15) {
            couponCode = data.substring(0, data.length - 6);
        } else if (data.length < 9) {
            couponCode = data
        } else {
            couponCode = data.substring(0, 9);
        }

        function checkForValidMPSuccessCallback(res) {
            if (res.length > 0) {
                if (res.length == 1 && glbMemberId == res[0]["MemberID"]) {
                    if (checkIfNetworkIsAvailable()) {
                        boPreActivation.checkForValidMPViaWS(couponCode, expdate);
                    } else {
                        if (validExpiryDate(data)) {
                            if (kony.application.getCurrentForm().id == frmHomeScreen.id) boPreActivation.saveActivatedCouponInDB(couponCode, glbMPActivationSelectedData.MemberID, expdate);
                            else boPreActivation.successMPValidation();
                        } else {
                            removeProgressView();
                            alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                        }
                    }
                } else {
                    removeProgressView();
                    alertForMessages(kony.i18n.getLocalizedString("strmsgSelectFmp"));
                    return;
                }
            } else {
                if (checkIfNetworkIsAvailable()) {
                    boPreActivation.checkForValidMPViaWS(couponCode, expdate);
                } else {
                    if (validExpiryDate(data)) {
                        var typeofSub = glbFormName.lblSubType.text;
                        popupPreActivation.txtVoucherNumber.text = getMPAnd3MPWithExpiry(data, typeofSub);
                        onEndEditingForSubID();
                        if (kony.application.getCurrentForm().id == frmHomeScreen.id) {
                            var obj = {};
                            obj = getSubscriptionData(getMPAnd3MPWithExpiry(data, glbMPActivationSelectedData.ProgramDuration));
                            expdate = obj.ExpirationDate;
                            popupPreActivation.txtVoucherNumber.text = getMPAnd3MPWithExpiry(data, glbMPActivationSelectedData.ProgramDuration);
                            kony.print("::pp::" + parseInt(glbMPActivationSelectedData.ProgramDuration));
                            kony.print("::obj::--" + JSON.stringify(obj));
                            kony.print("::expdate::--" + expdate);
                            boPreActivation.saveActivatedCouponInDB(couponCode, glbMPActivationSelectedData.MemberID, expdate);
                        } else {
                            boPreActivation.successMPValidation();
                        }
                    } else {
                        removeProgressView();
                        alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                        return;
                    }
                }
            }
        }
        kony.print("couponCode value --- " + couponCode);
        var SQLQuery = "Select MemberID,CouponCode,ExpirationDate From MemberDetails Where CountryID = '" + getCountryID() + "' AND CouponCode = '" + couponCode.toUpperCase() + "'";
        kony.print("query on print===" + SQLQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQuery, null, checkForValidMPSuccessCallback, eventErrorCallBack);
    },
    checkForValidMPViaWS: function(couponCode, expdate) {
        var data = popupPreActivation.txtVoucherNumber.text;

        function checkForValidMPViaWSCallback(status, CheckValidMPResult) {
            try {
                displayProgressView();
                if (status == 400) {
                    if (CheckValidMPResult["opstatus"] == 0) {
                        kony.print("CheckValidMPResult====" + JSON.stringify(CheckValidMPResult));
                        if (CheckValidMPResult["MembersList"] && CheckValidMPResult["MembersList"].length > 0) { //** MEG 6493
                            kony.print("Subscription Id Validation: res[0]['MemberID'] " + CheckValidMPResult["MembersList"][0]["ServerMemberID"]);
                            kony.print("Subscription Id Validation: glbMemberId " + glbMemberId);
                            kony.print("Subscription Id Validation: res[0]['regNumber'] " + CheckValidMPResult["MembersList"][0]["RegNumber"]);
                            kony.print("Subscription Id Validation: glbRegNo " + glbRegNo);
                            kony.print("CheckValidMPResult[MembersList]++++====" + JSON.stringify(CheckValidMPResult['MembersList']))
                            if (CheckValidMPResult["MembersList"].length == 1 && (glbMemberId == CheckValidMPResult["MembersList"][0]["ServerMemberID"] || CheckValidMPResult["MembersList"][0]["ServerMemberID"] == "" || (CheckValidMPResult["MembersList"][0]["ServerMemberID"] == 0 && CheckValidMPResult["MembersList"][0]["RegStatus"] == "Online"))) {
                                if (checkValidString(CheckValidMPResult["MembersList"][0]["ExpirationDate"])) {
                                    if (isValidExpriyDate(CheckValidMPResult["MembersList"][0]["ExpirationDate"])) {
                                        //  removeProgressView();
                                        // kony.print("::PK::changed---whrCondition--" + whrCondition);
                                        // End MEG-4614
                                        popupPreActivation.txtVoucherNumber.text = getMPAndDateInSixDigitFormate(data, CheckValidMPResult["MembersList"][0]["ExpirationDate"]);
                                        expdate = CheckValidMPResult["MembersList"][0]["ExpirationDate"];
                                        onEndEditingForSubID();
                                        if (CheckValidMPResult["MembersList"][0] != undefined && CheckValidMPResult["MembersList"][0] != null && checkValidString(CheckValidMPResult["MembersList"][0].EnterpriseID) && CheckValidMPResult["MembersList"][0].EnterpriseID != "0") {
                                            setLinkInfoForOnlineMember(CheckValidMPResult["MembersList"][0]); //MEG-4510
                                        }
                                        kony.print("setLinkInfoForOnlineMember = " + JSON.stringify(gblLinkInfoForOnlineMember));
                                        if (kony.application.getCurrentForm().id == frmHomeScreen.id) boPreActivation.saveActivatedCouponInDB(couponCode, glbMPActivationSelectedData.MemberID, expdate);
                                        else boPreActivation.successMPValidation();
                                    } else {
                                        removeProgressView();
                                        alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                                    }
                                } else {
                                    removeProgressView();
                                    alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassIsValid"));
                                }
                            } else {
                                removeProgressView();
                                alertForMessages(kony.i18n.getLocalizedString("strmsgSelectFmp"));
                                return;
                            }
                        } else {
                            var typeofSub = glbFormName.lblSubType.text;
                            kony.print("typeofSub====" + typeofSub);
                            if (validExpiryDate(data)) {
                                popupPreActivation.txtVoucherNumber.text = getMPAnd3MPWithExpiry(data, typeofSub);
                                onEndEditingForSubID()
                                if (kony.application.getCurrentForm().id == frmHomeScreen.id) {
                                    var obj = {};
                                    kony.print("::pp::" + parseInt(glbMPActivationSelectedData.ProgramDuration));
                                    obj = getSubscriptionData(getMPAnd3MPWithExpiry(data, glbMPActivationSelectedData.ProgramDuration));
                                    expdate = obj.ExpirationDate;
                                    popupPreActivation.txtVoucherNumber.text = getMPAnd3MPWithExpiry(data, glbMPActivationSelectedData.ProgramDuration);
                                    kony.print("::obj::--" + JSON.stringify(obj));
                                    kony.print("::expdate::--" + expdate);
                                    boPreActivation.saveActivatedCouponInDB(couponCode, glbMPActivationSelectedData.MemberID, expdate);
                                } else {
                                    boPreActivation.successMPValidation();
                                }
                            } else {
                                removeProgressView();
                                alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassIsValid"));
                                return;
                            }
                        }
                    } else {
                        if (validExpiryDate(data)) {
                            if (kony.application.getCurrentForm().id == frmHomeScreen.id) boPreActivation.saveActivatedCouponInDB(couponCode, glbMPActivationSelectedData.MemberID, expdate);
                            else boPreActivation.successMPValidation();
                        } else {
                            removeProgressView();
                            alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                            return;
                        }
                    }
                } else if (status == 300) {
                    if (validExpiryDate(data)) {
                        if (kony.application.getCurrentForm().id == frmHomeScreen.id) boPreActivation.saveActivatedCouponInDB(couponCode, glbMPActivationSelectedData.MemberID, expdate);
                        else boPreActivation.successMPValidation();
                    } else {
                        removeProgressView();
                        alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                        return;
                    }
                }
            } catch (e) {
                GlobalException(e);
                removeProgressView();
            }
        }
        boPreActivation.searchMemberWSCall(couponCode, checkForValidMPViaWSCallback);
    },
    searchMemberWSCall: function(couponCode, callback) {
        function searchMemberWSCallback(status, CheckValidMPResult) {
            callback.call(null, status, CheckValidMPResult);
        }
        var CheckValidMP_inputparam = {};
        var noLocationId = true,
            noMtngOccrId = true,
            noMemCategory = true,
            noUserStatus = true,
            searchText = "",
            noCity = true,
            noState = true;
        CheckValidMP_inputparam["serviceID"] = Services.searchMember;
        CheckValidMP_inputparam["httpheaders"] = {};
        CheckValidMP_inputparam["httpconfigs"] = {};
        //** MEG 6493
        if (JsonService) {
            CheckValidMP_inputparam["httpheaders"] = setRESTHeader();
        } else {
            CheckValidMP_inputparam["accessToken"] = glbSPAuthToken; // Need to replace with Authetication token
            CheckValidMP_inputparam["deviceID"] = gblDeviceID;
            CheckValidMP_inputparam["SPID"] = glbEmployeeId;
            CheckValidMP_inputparam["HeaderDate"] = "";
            CheckValidMP_inputparam["Source"] = gblSourceVal;
        }
        CheckValidMP_inputparam["searchType"] = MemberSearchTypeEnum.RegNo;
        CheckValidMP_inputparam["searchText"] = couponCode.toUpperCase();
        //CheckValidMP_inputparam["locationId"] = glbLocationID;
        CheckValidMP_inputparam["noLocationId"] = noLocationId.toString();
        CheckValidMP_inputparam["noMemCategory"] = noMemCategory.toString();
        CheckValidMP_inputparam["noUserStatus"] = noUserStatus.toString();
        CheckValidMP_inputparam["noMtngOccrId"] = noMtngOccrId.toString();
        CheckValidMP_inputparam["noCity"] = noCity.toString();
        CheckValidMP_inputparam["noState"] = noState.toString();
        CheckValidMP_inputparam["firstName"] = "";
        CheckValidMP_inputparam["lastName"] = "";
        CheckValidMP_inputparam["locationId"] = "";
        CheckValidMP_inputparam["memCategory"] = "";
        CheckValidMP_inputparam["mtngOccrId"] = "";
        CheckValidMP_inputparam["userStatus"] = "";
        CheckValidMP_inputparam["city"] = "";
        CheckValidMP_inputparam["stateCode"] = "";
        //**End
        kony.print("CheckValidMP_inputparam.length == " + JSON.stringify(CheckValidMP_inputparam));
        CheckValidMP = Network.makeServiceCall(CheckValidMP_inputparam, searchMemberWSCallback, false);
    },
    searchMemberForDuplicateMPWSCall: function(userId, couponCode, callback) {
        function searchMemberForDuplicateMPWSCallback(status, CheckValidMPResult) {
            callback.call(null, status, CheckValidMPResult);
        }
        var CheckValidMP_inputparam = {};
        /* var noLocationId = true,
             noMtngOccrId = true,
             noMemCategory = true,
             noUserStatus = true,
             searchText = "",
             noCity = true,
             noState = true;*/
        CheckValidMP_inputparam["serviceID"] = Services.searchMemberForDuplicateMP;
        CheckValidMP_inputparam["httpheaders"] = {};
        CheckValidMP_inputparam["httpconfigs"] = {};
        CheckValidMP_inputparam["httpheaders"] = setRESTHeader();
        CheckValidMP_inputparam["memberID"] = userId;
        CheckValidMP_inputparam["couponCode"] = couponCode.toUpperCase();
        /*CheckValidMP_inputparam["locationId"] = glbLocationID;
        CheckValidMP_inputparam["noLocationId"] = noLocationId.toString();
        CheckValidMP_inputparam["noMemCategory"] = noMemCategory.toString();
        CheckValidMP_inputparam["noUserStatus"] = noUserStatus.toString();
        CheckValidMP_inputparam["noMtngOccrId"] = noMtngOccrId.toString();
        CheckValidMP_inputparam["noCity"] = noCity.toString();
        CheckValidMP_inputparam["noState"] = noState.toString();
      	CheckValidMP_inputparam["firstName"] = "";
        CheckValidMP_inputparam["lastName"] = "";	
	    CheckValidMP_inputparam["locationId"] = "";
        CheckValidMP_inputparam["memCategory"] = "";	
        CheckValidMP_inputparam["mtngOccrId"] = "";
        CheckValidMP_inputparam["userStatus"] = "";
        CheckValidMP_inputparam["city"] = "";
        CheckValidMP_inputparam["stateCode"] = "";*/
        //**End
        kony.print("CheckValidMP_inputparam.length == " + JSON.stringify(CheckValidMP_inputparam));
        CheckValidMP = Network.makeServiceCall(CheckValidMP_inputparam, searchMemberForDuplicateMPWSCallback, false);
    },
    successBillingInformation: function() {
        kony.print("Succesfully Validates The MP-PASS - successBillingInformation");
        IsPreActivation = ""; // clear the flag after success MP..
        var Name = getCurrentMemberName();
        preActivationObj.voucherNumber = "";
        preActivationObj.firstName = Name.firstName;
        preActivationObj.lastName = Name.lastName;
        preActivationObj.middleName = "";
        preActivationObj.title = "";
        preActivationObj.country = in_array(deviceLocale, Countries["US"]) ? "USA" : "CAN";
        preActivationObj.email = popupPreActivation.txtEmail.text;
        preActivationObj.billingAddr1 = popupPreActivation.txtAddress1.text;
        preActivationObj.billingAddr2 = popupPreActivation.txtAddress2.text;
        preActivationObj.city = popupPreActivation.txtCity.text;
        preActivationObj.state = popupPreActivation.lblState.text;
        preActivationObj.zip = popupPreActivation.txtZip.text;
        preActivationObj.regNum = popupPreActivation.txtRegNum.text;
        preActivationObj.shippingAddr1 = popupPreActivation.txtShippingAdd1.text;
        preActivationObj.shippingAddr2 = popupPreActivation.txtShippingAdd2.text;
        preActivationObj.shippingCity = popupPreActivation.txtShippingCity.text;
        preActivationObj.shippingState = popupPreActivation.lblShippingState.text;
        preActivationObj.shippingZip = popupPreActivation.txtShippingZip.text;
        if (popupPreActivation.hboxHeight.isVisible) {
            preActivationObj.Height = popupPreActivation.lblheight.text;
        }
        if (popupPreActivation.checkBoxBillingInfo.src == "icn_checkbox_unchecked.png") preActivationObj.sameBillInfo = "icn_checkbox_unchecked.png";
        else preActivationObj.sameBillInfo = "icn_checkbox_checked.png";
        glbFormName.txtEmailID.text = popupPreActivation.txtEmail.text; // set EmailID in glbFormName ....
        popupPreActivation.destroy();
        //popupPreActivation.dismiss();
        removeProgressView();
    },
    successMPValidation: function() {
        kony.print("Succesfully Validates The MP-PASS - successMPValidation");
        IsPreActivation = ""; // clear the flag after success MP..
        preActivationObj.voucherNumber = popupPreActivation.txtVoucherNumber.text;
        preActivationObj.email = popupPreActivation.txtEmail.text;
        preActivationObj.regNum = popupPreActivation.txtRegNum.text;
        preActivationObj.billingAddr1 = popupPreActivation.txtAddress1.text;
        preActivationObj.billingAddr2 = popupPreActivation.txtAddress2.text;
        preActivationObj.city = popupPreActivation.txtCity.text;
        preActivationObj.state = popupPreActivation.lblState.text;
        preActivationObj.zip = popupPreActivation.txtZip.text;
        preActivationObj.shippingAddr1 = popupPreActivation.txtShippingAdd1.text;
        preActivationObj.shippingAddr2 = popupPreActivation.txtShippingAdd2.text;
        preActivationObj.shippingCity = popupPreActivation.txtShippingCity.text;
        preActivationObj.shippingState = popupPreActivation.lblShippingState.text;
        preActivationObj.shippingZip = popupPreActivation.txtShippingZip.text;
        if (popupPreActivation.checkBoxBillingInfo.src == "icn_checkbox_unchecked.png") preActivationObj.sameBillInfo = "icn_checkbox_unchecked.png";
        else preActivationObj.sameBillInfo = "icn_checkbox_checked.png";
        glbFormName.txtSubscriptionID.text = popupPreActivation.txtVoucherNumber.text; // set SubID in glbFormName ....
        glbFormName.txtEmailID.text = popupPreActivation.txtEmail.text; // set EmailID in glbFormName ....
        popupPreActivation.destroy();
        //popupPreActivation.dismiss();
        removeProgressView();
        if ((paymentMode == kony.i18n.getLocalizedString("strCredit") || isPaymentByBTDevice) && checkIfNetworkIsAvailable() && validateCCEnabledLocation()) {
            MPPreActivationSuccessCC();
        } else {
            bindPaymentDataToSegmentSuccess(paymentMode, frmPayment.txtBoxAmount.text);
        }
    },
    getMPPreActivation: function(preActivation_offerId, preActivation_ProgramDuration, preActivation_SubscriptnType, preActivation_PlanType, preActivation_CommitmentDuration) { //** MEG 6434
        kony.print("::here::");
        try {
            var GetPreActivate_inputparam = {};
            GetPreActivate_inputparam["serviceID"] = Services.PreActivate;
            GetPreActivate_inputparam["httpheaders"] = {};
            GetPreActivate_inputparam["httpconfigs"] = {};
            //** MEG 6493
            if (JsonService) {
                GetPreActivate_inputparam["httpheaders"] = setRESTHeader();
            } else {
                GetPreActivate_inputparam["AccessToken"] = glbSPAuthToken;
                GetPreActivate_inputparam["DeviceID"] = gblDeviceID;
                GetPreActivate_inputparam["SPID"] = glbEmployeeId;
                GetPreActivate_inputparam["HeaderDate"] = "";
                GetPreActivate_inputparam["Source"] = gblSourceVal;
            }
            GetPreActivate_inputparam["OfferId"] = (checkValidString(preActivation_offerId)) ? preActivation_offerId : "";
            GetPreActivate_inputparam["ProgramDuration"] = (checkValidString(preActivation_ProgramDuration)) ? preActivation_ProgramDuration : "";
            GetPreActivate_inputparam["SubscriptionType"] = (checkValidString(preActivation_SubscriptnType)) ? preActivation_SubscriptnType : "";
            GetPreActivate_inputparam["PlanType"] = (checkValidString(preActivation_PlanType)) ? preActivation_PlanType : ""; //** MEG 6434
            GetPreActivate_inputparam["CommitmentDuration"] = (checkValidString(preActivation_CommitmentDuration)) ? preActivation_CommitmentDuration : ""; //** MEG 6434
            //**End
            GetMPPreActivate = Network.makeServiceCall(GetPreActivate_inputparam, boPreActivation.getMPPreActivationSuccess, false);
        } catch (e) {
            GlobalException(e);
        }
    },
    getMPPreActivationSuccess: function(status, GetMPPreActivate) {
        try {
            if (status == 400) {
                if (GetMPPreActivate["opstatus"] == 0) {
                    kony.print("Response===" + JSON.stringify(GetMPPreActivate));
                    if (GetMPPreActivate["PreActivationList"] && GetMPPreActivate["PreActivationList"].length > 0) {
                        var subScriptionData = GetMPPreActivate["PreActivationList"];
                        var CouponCode = subScriptionData[0].CouponCode;
                        var ExpirationDate = subScriptionData[0].ExpirationDate;
                        var x = ExpirationDate.slice(0, 10).split('-');
                        x[0] = x[0].substring(2, 4);
                        popupPreActivation.txtVoucherNumber.text = CouponCode + x[1] + x[2] + x[0];
                        preActivationObj.voucherNumber = popupPreActivation.txtVoucherNumber.text;
                        glbFormName.txtSubscriptionID.text = popupPreActivation.txtVoucherNumber.text;
                        kony.print(":popupPreActivation.txtVoucherNumber.text:" + popupPreActivation.txtVoucherNumber.text);
                        var monitorData = {
                            "CouponCode": popupPreActivation.txtVoucherNumber.text,
                            "ExpirationDate": ExpirationDate
                        };
                        boMonitor.log("PreActivation:data after response", "PreActivation", monitorData, FlowForMonitor.ServiceCall);
                        MPPreActivationSuccessCC();
                    } else {
                        kony.print("::MPPreActivationFailure::");
                        boPreActivation.MPPreActivationFailure(true);
                    }
                } else {
                    kony.print("::MPPreActivationFailure::");
                    boPreActivation.MPPreActivationFailure(true);
                }
            } else if (status == 300) {
                CommonErrHandler.networkError(status, GetMPPreActivate);
            }
            removeProgressView(); // 
        } catch (e) {
            GlobalException(e);
        }
    },
    MPPreActivationFailure: function(IsMPServiceFailed) {
        kony.print("::frmPayment.txtBoxAmount.text::" + frmPayment.txtBoxAmount.text);
        if ((parseFloat((frmPayment.txtBoxAmount.text).replace(glbCurrency, "")).toFixed(2)) > 0) {
            populatePreActivationPopup(kony.i18n.getLocalizedString("strCash"), IsMPServiceFailed);
        } else {
            displayAlert(kony.i18n.getLocalizedString("strErrorMsgInvalidCardOrCheckAmount"));
        }
    },
    isDataExistInPreactivationDetails: function(callback) {
        var whereClause = "where MtngOccrID='" + glbMeetingNum + "' and LocationID = " + glbLocationID + " and ActivationStatus != 'true' and SaleTransactnId is not null";
        kony.print("::where Clause::isDataExistInPreactivationDetails::" + whereClause);

        function isDataExistInPreactivationDetailsSuccess(res) {
            kony.print("::res.length::" + res.length);
            if (res.length > 0) {
                callback.call(null, true);
            } else {
                callback.call(null, false);
            }
        }
        DBPreActivationController.find(whereClause, isDataExistInPreactivationDetailsSuccess, eventErrorCallBack);
    },
    checkRequiredInfo: function() {
        var resRequire;
        var valid = new validationcls;
        if (popupPreActivation.hboxHeight.isVisible) {
            resRequire = valid.checkForRequiredFields(popupPreActivation.txtEmail.text, "", "strValidEmail").checkForRequiredFields(popupPreActivation.txtAddress1.text, "", "strValidAddr1").checkForRequiredFields(popupPreActivation.txtCity.text, "", "strValidBillingCity").checkForRequiredFields(popupPreActivation.txtZip.text, "", "strMsgZip").checkForRequiredFields(popupPreActivation.lblState.text, "", "strSelectState").checkForRequiredFields(popupPreActivation.txtShippingAdd1.text, "", "strValidShippingAddr").checkForRequiredFields(popupPreActivation.txtShippingCity.text, "", "strValidShippingCity").checkForRequiredFields(popupPreActivation.txtShippingZip.text, "", "strValidShippingZip").checkForRequiredFields(popupPreActivation.lblShippingState.text, "", "strValidShippingState").checkForRequiredFields(popupPreActivation.lblheight.text, "", "strValidHeight").checkMemberID(popupPreActivation.txtRegNum.text, "Registration ID", true).isValid();
        } else {
            resRequire = valid.checkForRequiredFields(popupPreActivation.txtEmail.text, "", "strValidEmail").checkForRequiredFields(popupPreActivation.txtAddress1.text, "", "strValidAddr1").checkForRequiredFields(popupPreActivation.txtCity.text, "", "strValidBillingCity").checkForRequiredFields(popupPreActivation.txtZip.text, "", "strMsgZip").checkForRequiredFields(popupPreActivation.lblState.text, "", "strSelectState").checkForRequiredFields(popupPreActivation.txtShippingAdd1.text, "", "strValidShippingAddr").checkForRequiredFields(popupPreActivation.txtShippingCity.text, "", "strValidShippingCity").checkForRequiredFields(popupPreActivation.txtShippingZip.text, "", "strValidShippingZip").checkForRequiredFields(popupPreActivation.lblShippingState.text, "", "strValidShippingState").checkMemberID(popupPreActivation.txtRegNum.text, "Registration ID", true).isValid();
        }
        if (resRequire) {
            var res;
            var valid = new validationcls;
            res = valid.checkEmail(popupPreActivation.txtEmail.text).checkCity(popupPreActivation.txtCity.text).validateZipCode(popupPreActivation.txtZip.text).isValid();
            kony.print("::res::" + res);
            if (res) {
                if (isPaymodeCr && (glbRegNoForProcess != popupPreActivation.txtRegNum.text)) {
                    checkIfMemberAlreadyExistsInDB(popupPreActivation.txtRegNum.text, glbMemberId, function() {
                        boPreActivation.successBillingInformation();
                        alertForswipeCreditCard();
                    });
                } else {
                    boPreActivation.successBillingInformation();
                    alertForswipeCreditCard();
                }
            }
        }
    },
    saveActivatedCouponInDB: function(couponCode, memberID, expdate) {
        boPreActivation.removeActivationRecordFromDB(couponCode, memberID, expdate, boPreActivation.updateActivatedCouponInDB);
    },
    updateActivatedCouponInDB: function(res, couponCode, memberID, expdate) {
        kony.print("SJ : In saveActivatedCouponInDB");
        //MEG-6733
        var updateObj = {};
        var whrClause = "where MemberID = '" + memberID + "'";

        function getMemberDataSuccessCallback(res) {
            kony.print("In getMemberDataSuccessCallback" + JSON.stringify(res));
            if (res.length > 0) {
                function saveActivatedCouponInDBSuccessCallback(res) {
                    kony.print("SJ : Saved Coupone code Data in MemberDetails");
                    kony.print("SJ : Removing Preactivation record");
                    boPreActivation.updateSaleItem(couponCode, function(res) {
                        if (res) {
                            _.find(glbMPActivationSegmentData, function(v) {
                                kony.print(v.CouponCode + ":: === ::" + glbMPActivationSelectedData.lblMPNumber);
                                if (v.CouponCode === glbMPActivationSelectedData.lblMPNumber) {
                                    v.CouponCode = couponCode;
                                    v.ActivationStatus = 'Voucher Issued';
                                }
                            });
                            setMPActivationSegmentData(glbMPActivationSegmentData);
                            //glbMPActivationCoupon = "";
                            IsPreActivation = ""; // as clear the IsPreActivation Flag .. 
                            removeProgressView();
                            //popupMPActivation.destroy();
                            popupPreActivation.destroy();
                            glbMPActivationSegmentData = {};
                            kony.print("SJ : Refresh ChekedIn Data");
                            showCheckedinUIData(true);
                            showPreRegisteredUIData(false);
                            hboxMeetingSummery.lblFilterByInfo.text = kony.i18n.getLocalizedString("strSelectFilter");
                            checkeInMembers.getAllMembersList();
                        } else {
                            kony.print("SJ : PreActivation record not removed from DB");
                        }
                    });
                }
                //updateObj = res[0];
                var memObj = res[0];
                kony.print("SJ : memObj ===>>>" + JSON.stringify(memObj));
                updateObj.GoalAchDate = checkValidString(memObj.GoalAchDate) ? memObj.GoalAchDate : "0001-01-01T00:00:00";
                updateObj.IsDateRedeemed = (checkValidString(memObj.RedeemedDate) && (memObj.RedeemedDate != "0001-01-01T00:00:00")) ? "false" : "true";
                updateObj.IsFreshStart = checkValidString(memObj.IsFreshStart) ? memObj.IsFreshStart : "false";
                updateObj.IsLink = checkValidString(memObj.LinkType) ? "false" : "true";
                updateObj.IsMemberInMtns = checkValidString(memObj.IsMemberInMtns) ? memObj.IsMemberInMtns : "false";
                updateObj.IsPAYG = "false";
                updateObj.isVoided = checkValidString(memObj.isVoided) ? memObj.isVoided : "false";
                updateObj.MeetingId = checkValidString(memObj.MeetingId) ? memObj.MeetingId : glbMeetingNum;
                updateObj.MemTypeUpdateDt = checkValidString(memObj.MemTypeUpdateDt) ? memObj.MemTypeUpdateDt : "";
                updateObj.RefreshDate = checkValidString(memObj.RefreshDate) ? memObj.RefreshDate : "0001-01-01T00:00:00";
                updateObj.UserStsEndPrd = checkValidString(memObj.UserStsEndPrd) ? memObj.UserStsEndPrd : "0001-01-01T00:00:00";
                //updateObj.MemberID = memberID;
                updateObj.CouponCode = couponCode.toUpperCase();
                updateObj.ExpirationDate = supportTime(expdate, "", "yyyy-mm-ddTHH:NN:SS");
                updateObj.EmpID = glbEmployeeId; //AD :: EMPid sent as 0 in member update after issue voucher results in member update failure
                /*checkValidString(gblLinkInfoForOnlineMember.EnterpriseID) ? (updateObj.EnterpriseID = gblLinkInfoForOnlineMember.EnterpriseID) : (updateObj.EnterpriseID = 0);
                checkValidString(gblLinkInfoForOnlineMember.EmailID) ? (updateObj.EmailID = gblLinkInfoForOnlineMember.EmailID) : (updateObj.EmailID = "");
                checkValidString(gblLinkInfoForOnlineMember.LinkType) ? (updateObj.LinkType = gblLinkInfoForOnlineMember.LinkType) : (updateObj.LinkType = "None");
                checkValidString(gblLinkInfoForOnlineMember.UserName) ? (updateObj.UserName = gblLinkInfoForOnlineMember.UserName) : (updateObj.UserName = "");
                (checkValidString(gblLinkInfoForOnlineMember.IsLink) && updateObj.EnterpriseID != "0" && updateObj.EnterpriseID != 0) ? (updateObj.IsLink = gblLinkInfoForOnlineMember.IsLink) : (updateObj.IsLink = 'true');*/
                clearLinkInfoForOnlineMember(); //clear link member details
                kony.print("::updateObj::---" + JSON.stringify(updateObj));
                kony.print("SJ : In saveActivatedCouponInDB whrClause : " + whrClause);
                //removeProgressView();
                DBMemberDetailsController.update(whrClause, updateObj, saveActivatedCouponInDBSuccessCallback, eventErrorCallBack, true);
                //com.kony.WeightWatchers.MemberSyncScope.MemberDetails.update(whrClause, updateObj, saveActivatedCouponInDBSuccessCallback, eventErrorCallBack, true);
            }
        }
        DBMemberDetailsController.find(whrClause, getMemberDataSuccessCallback, eventErrorCallBack);
    },
    removeActivationRecordFromDB: function(couponCode, memberID, expdate, callback) {
        kony.print("SJ : In removeActivationRecordFromDB");
        var whereClause = " where MemberID = '" + memberID + "'";

        function getPreActivationDetailsSuccessCallback(res) {
            kony.print("SJ : In getPreActivationDetailsSuccessCallback" + JSON.stringify(res));
            var preActObj = res[0];
            var preActivationObj = new com.kony.WeightWatchers.MemberSyncScope.PreActivation();
            preActivationObj.MemberID = preActObj.MemberID;
            preActivationObj.ID = preActObj.ID;
            preActivationObj.CouponCode = preActObj.CouponCode;
            preActivationObj.ActivationStatus = preActObj.ActivationStatus;
            preActivationObj.ActivationDate = preActObj.ActivationDate;

            function removeActivationRecordFromDBSuccessCallback(res) {
                //kony.print("SJ : Removed device instance by pk is successfull for Activation Record : "+preActObj.CouponCode);
                callback.call(this, true, couponCode, memberID, expdate);
            }

            function removeActivationRecordFromDBErrorCallback(res) {
                kony.print("SJ : Error occured while removing record");
                kony.print("SJ : Removing PreActivation Failed --error information:" + JSON.stringify(res));
                //callback.call(this, false);
            }
            preActivationObj.removeDeviceInstanceByPK(removeActivationRecordFromDBSuccessCallback, removeActivationRecordFromDBErrorCallback);
        }
        DBPreActivationController.find(whereClause, getPreActivationDetailsSuccessCallback, eventErrorCallBack);
    },
    deletePendingActivationDataFromDB: function() {
        kony.print("SJ : In deletePendingActivationDataFromDB");
        boPreActivation.getAllPendingActivationDataFromDB(function(res) {
            if (res.length > 0) {
                kony.print("SJ : res : " + JSON.stringify(res));
                for (var i in res) {
                    boPreActivation.removeActivationRecordFromDBByPK(res[i]);
                }
            }
        });
    },
    getAllPendingActivationDataFromDB: function(callback) {
        kony.print("SJ : In getAllPendingActivationDataFromDB");
        var whrClause = "where ActivationStatus = '' AND MtngOccrID = '" + glbMeetingNum + "' AND LocationID = '" + glbLocationID + "'";

        function getAllPendingActivationDataFromDBCallback(res) {
            kony.print("SJ : getAllPendingActivationDataFromDBCallback : " + JSON.stringify(res));
            callback.call(this, res);
        }
        DBPreActivationController.find(whrClause, getAllPendingActivationDataFromDBCallback, eventErrorCallBack);
    },
    removeActivationRecordFromDBByPK: function(res) {
        kony.print("SJ : In removeActivationRecordFromDBByPK" + JSON.stringify(res));
        var preActObj = res;
        var preActivationObj = new com.kony.WeightWatchers.MemberSyncScope.PreActivation();
        preActivationObj.MemberID = preActObj.MemberID;
        preActivationObj.ID = preActObj.ID;
        preActivationObj.CouponCode = preActObj.CouponCode;
        preActivationObj.ActivationStatus = preActObj.ActivationStatus;
        preActivationObj.ActivationDate = preActObj.ActivationDate;

        function removeActivationRecordFromDBSuccessCallback(res) {
            kony.print("SJ : Removed device instance by pk is successfull for Activation Record : " + preActObj.CouponCode);
        }

        function removeActivationRecordFromDBErrorCallback(res) {
            kony.print("SJ : Error occured while removing record");
            kony.print("SJ : Removing PreActivation Failed --error information:" + JSON.stringify(res));
            //callback.call(this, false);
        }
        preActivationObj.removeDeviceInstanceByPK(removeActivationRecordFromDBSuccessCallback, removeActivationRecordFromDBErrorCallback);
    },
    updateSaleItem: function(couponCode, callback) {
        var updateObj = {};
        var whrClause = "where CouponCode='" + glbMPActivationSelectedData.lblMPNumber + "'";
        kony.print("::updateSaleItem::whrClause::" + whrClause);
        updateObj.IsFailedMPVoucher = 'true';
        updateObj.CouponCode = couponCode.toUpperCase();

        function updateSaleItemSuccesscallback(res) {
            callback.call(this, true);
        }
        DBSaleItemsController.update(whrClause, updateObj, updateSaleItemSuccesscallback, eventErrorCallBack, false);
    }
}

function onClickCancelpreActivation() {
    glbMPActivationSelectedData = {};
    IsPreActivation = ""; // clear the flag of practivation
    popupPreActivation.destroy();
    //popupPreActivation.dismiss();
}

function eventOnClickStatePreActivation() {
    displayStatePopup(popupPreActivation.hboxState, "right", false);
}

function eventOnClickShippingStatePreActivation() {
    IsShippingState = true;
    displayStatePopup(popupPreActivation.hboxShippingState, "right", false);
}

function eventOnClickDoneActivation() {
    if (preActivationObj.isMPFromService == "true") {
        boPreActivation.checkRequiredInfo();
    } else {
        boPreActivation.vaildateData();
    } // condition addede here for that when CC is there , No validation required , but for Voucher Validation reuired ..
}

function populatePreActivationPopup(payMode, isCraditFailure) {
    kony.print("::here in If condition::");
    IsPreActivation = FlowForScreens.PreActivation; // flag set preactivation flow
    kony.print("::frmPayment.btnCompleteProcessMember.skin::" + frmPayment.btnCompleteProcessMember.skin + "::frmPayment.lblTotalData.text::" + frmPayment.lblTotalData.text);
    if (paymentMode == kony.i18n.getLocalizedString("strCredit") && checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") && (checkIfNetworkIsAvailable())) {
        popupPreActivation.imgCancel.setVisibility(false);
    } else {
        popupPreActivation.imgCancel.setVisibility(true);
    }
    if ((payMode == kony.i18n.getLocalizedString("strCredit")) && (checkIfNetworkIsAvailable())) {
        if (preActivationObj.hasOwnProperty('Height')) {
            popupPreActivation.hboxHeight.setVisibility(true);
            popupPreActivation.lblheight.text = preActivationObj.Height;
        }
        isPaymodeCr = true;
        popupPreActivation.hboxVoucherNumber.setVisibility(false);
        popupPreActivation.btnScan.isVisible = false;
        popupPreActivation.imgVoucher.isVisible = false; // it is the place where new middleware coming & Service Call occurs
        popupPreActivation.imgAddress1.isVisible = true;
        popupPreActivation.imgCity.isVisible = true;
        popupPreActivation.imgState.isVisible = true;
        popupPreActivation.imgZip.isVisible = true;
        preActivationObj.isMPFromService = "true";
        popupPreActivation.hboxShipping.setVisibility(true);
        popupPreActivation.lblVoucherNo.text = kony.i18n.getLocalizedString("strMPNumber");
        popupPreActivation.lblHeader.text = kony.i18n.getLocalizedString("strMPPreActivation");
    } else {
        isPaymodeCr = false;
        popupPreActivation.hboxVoucherNumber.setVisibility(true);
        popupPreActivation.btnScan.isVisible = true;
        popupPreActivation.imgVoucher.isVisible = true;
        popupPreActivation.imgAddress1.isVisible = false;
        popupPreActivation.imgCity.isVisible = false;
        popupPreActivation.imgState.isVisible = false;
        popupPreActivation.imgZip.isVisible = false;
        preActivationObj.isMPFromService = "false";
        popupPreActivation.hboxShipping.setVisibility(false);
        popupPreActivation.lblHeader.text = kony.i18n.getLocalizedString("strMPActivation");
        popupPreActivation.lblVoucherNo.text = kony.i18n.getLocalizedString("strVoucherNo");
    }
    kony.print("glbRegNoForProcess===>>>" + glbRegNoForProcess);
    kony.print("glbRegNo===>>>" + glbRegNo);
    if (IsFromPM == FlowForScreens.ProcessMember) popupPreActivation.txtRegNum.text = (glbRegNo == "") ? glbRegNoForProcess : glbRegNo;
    else if (IsEnrollMember == FlowForScreens.Enroll) popupPreActivation.txtRegNum.text = frmEnrollNewMember.txtMemberIDInfo.text;
    else if (IsAddIndividual == FlowForScreens.AddIndividual) popupPreActivation.txtRegNum.text = frmAddIndividulaMember.txtMemberID.text;
    else if (IsReEnrollScreen == FlowForScreens.ReEnroll) popupPreActivation.txtRegNum.text = frmEnrollReturningMember.txtRegistrationID.text;
    if (payMode == kony.i18n.getLocalizedString("strCredit")) {
        popupPreActivation.hboxRegNum.setVisibility(true);
        popupPreActivation.lineRegNumSep.setVisibility(true);
        popupPreActivation.hboxRegNumMsg.setVisibility(true);
        if (checkIfNetworkIsAvailable() && (popupPreActivation.txtRegNum.text.length < 7 || popupPreActivation.txtRegNum.text.length > 9)) {
            popupPreActivation.txtRegNum.setEnabled(true);
            popupPreActivation.butRegNumScan.setEnabled(true);
            popupPreActivation.txtRegNum.skin = "tbx2Normal";
        } else {
            popupPreActivation.txtRegNum.setEnabled(false);
            popupPreActivation.butRegNumScan.setEnabled(false);
            popupPreActivation.txtRegNum.skin = "textDisabled";
        }
    } else {
        popupPreActivation.hboxRegNum.setVisibility(false);
        popupPreActivation.lineRegNumSep.setVisibility(false);
        popupPreActivation.hboxRegNumMsg.setVisibility(false);
    }
    kony.print("::object alredy there::");
    kony.print("glbSelectedMemberData ===>>> : " + JSON.stringify(glbSelectedMemberData));
    if (isCraditFailure) {
        popupPreActivation.hboxlblMessgae.isVisible = true;
        popupPreActivation.lblMessage.text = kony.i18n.getLocalizedString("strMpValidationFail");
    } else {
        popupPreActivation.lblMessage.text = "";
        popupPreActivation.hboxlblMessgae.isVisible = false;
    }
    if (preActivationObj.hasOwnProperty('voucherNumber')) {
        popupPreActivation.txtVoucherNumber.text = preActivationObj.voucherNumber;
        popupPreActivation.txtEmail.text = preActivationObj.email;
        popupPreActivation.txtAddress1.text = preActivationObj.billingAddr1;
        popupPreActivation.txtAddress2.text = preActivationObj.billingAddr2;
        popupPreActivation.txtCity.text = preActivationObj.city;
        popupPreActivation.lblState.text = preActivationObj.state;
        popupPreActivation.txtZip.text = preActivationObj.zip;
        popupPreActivation.txtRegNum.text = preActivationObj.regNum;
        popupPreActivation.txtShippingAdd1.text = preActivationObj.shippingAddr1;
        popupPreActivation.txtShippingAdd2.text = preActivationObj.shippingAddr2;
        popupPreActivation.txtShippingCity.text = preActivationObj.shippingCity;
        popupPreActivation.lblShippingState.text = preActivationObj.shippingState;
        popupPreActivation.txtShippingZip.text = preActivationObj.shippingZip;
        if (preActivationObj.sameBillInfo == "icn_checkbox_unchecked.png") popupPreActivation.checkBoxBillingInfo.src = "icn_checkbox_unchecked.png";
        else popupPreActivation.checkBoxBillingInfo.src = "icn_checkbox_checked.png";
    } else {
        kony.print("::create new object::");
        boPreActivation.getMemberByMemberID(payMode);
    }
    popupPreActivation.show();
}

function copyBillingInfoToShippingInfo() {
    kony.print("checkBoxBillingInfo.src==:" + popupPreActivation.checkBoxBillingInfo.src);
    if (popupPreActivation.checkBoxBillingInfo.src == "icn_checkbox_unchecked.png") {
        popupPreActivation.checkBoxBillingInfo.src = "icn_checkbox_checked.png";
        popupPreActivation.txtShippingAdd1.text = popupPreActivation.txtAddress1.text;
        popupPreActivation.txtShippingAdd2.text = popupPreActivation.txtAddress2.text;
        popupPreActivation.txtShippingCity.text = popupPreActivation.txtCity.text;
        popupPreActivation.lblShippingState.text = popupPreActivation.lblState.text;
        popupPreActivation.txtShippingZip.text = popupPreActivation.txtZip.text;
    } else {
        popupPreActivation.checkBoxBillingInfo.src = "icn_checkbox_unchecked.png"
        popupPreActivation.txtShippingAdd1.text = "";
        popupPreActivation.txtShippingAdd2.text = "";
        popupPreActivation.txtShippingCity.text = "";
        popupPreActivation.lblShippingState.text = "";
        popupPreActivation.txtShippingZip.text = "";
    }
}

function checkBoxToggleLink() {
    if (popupMPPreActivated.imgCheckBox.src == "icn_checkbox_checked.png") {
        popupMPPreActivated.imgCheckBox.src = "icn_checkbox_unchecked.png";
        popupMPPreActivated.hboxSearch.isVisible = false;
        popupMPPreActivated.hbxTableTitle.isVisible = false;
        popupMPPreActivated.scrollboxMemberData.isVisible = false;
        popupMPPreActivated.lineSep.isVisible = false;
        popupMPPreActivated.lineSep1.isVisible = false;
        popupMPPreActivated.lineSep2.isVisible = false;
        popupMPPreActivated.txtSearch.text = "";
        popupMPPreActivated.segMemberData.data = "";
        glbSelectedMemberToLink = {};
    } else {
        popupMPPreActivated.imgCheckBox.src = "icn_checkbox_checked.png"
        popupMPPreActivated.hboxSearch.isVisible = true;
        popupMPPreActivated.hbxTableTitle.isVisible = true;
        popupMPPreActivated.scrollboxMemberData.isVisible = true;
        popupMPPreActivated.lineSep.isVisible = true;
        popupMPPreActivated.lineSep1.isVisible = true;
        popupMPPreActivated.lineSep2.isVisible = true;
        popupMPPreActivated.txtSearch.text = "";
    }
}

function showPopupMPPreActivated() {
    var context = {
        "widget": frmViewMemberProfile.hboxNotesProfileData,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    popupAddNote.setContext(context);
    popupMPPreActivated.lblNoteFlow.text = action;
    popupMPPreActivated.show();
}

function eventOnClickMPActivation() {
    kony.print("In eventOnClickMPActivation" + JSON.stringify(glbSelectedMemberToLink));
    var email = popupMPPreActivated.txtEmailAddress.text;
    var valid = new validationcls;
    var res = valid.checkEmail(email).isValid();
    if (res) {
        if ((popupMPPreActivated.imgCheckBox.src == "icn_checkbox_checked.png") && (glbSelectedMemberToLink.lblEmailID == "" || glbSelectedMemberToLink.lblEmailID == undefined)) {
            alertForMessages(kony.i18n.getLocalizedString("strMsgSelectDataToLink"));
        } else {
            popupMPPreActivated.destroy();
            //popupMPPreActivated.dismiss();
            kony.print("valid email");
            displayProgressView();
            onclickCompleteEnrollProcess(email);
            glbSelectedMemberToLink = {};
        }
    } else {
        kony.print("invalid email");
    }
}