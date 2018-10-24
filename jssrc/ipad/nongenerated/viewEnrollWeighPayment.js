var megFlow = {
    Process: "Process",
    Enroll: "Enroll",
    ReEnroll: "RrEnroll",
    Add: "Add"
};

function eventonFootervboxEditENMP() {
    glbFormName.show();
}

function eventonFootervboxWeighSectionENMP() {
    frmEnrollWeighMember.show();
}

function eventOnPreShowSetHeaderLabelDirectSale() {
    IsDirectSale = FlowForScreens.DirectSale;
    ProductSale.Cart = new ProductCart();
    ClearTangibleProductsSegments();
    selectedMemberData = "";
    hboxHeaderWithCancelBtn.lblTitle.text = "";
    hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strLblDirectSale");
    frmDirectSaleProductList.hboxSubHeader.isVisible = false;
    frmDirectSaleProductList.scrollbox12443534679147550.containerHeight = 50;
    frmDirectSaleProductList.scrollbox12443534677872493.containerHeight = 80;
    frmDirectSaleProductList.lblProcessMembersubSubHeaderstudio4.text = kony.i18n.getLocalizedString("strLblProductSale"); //Modified by Studio Viz
    frmDirectSaleProductList.show();
}

function eventOnPreShowSetHeaderLabelPayment() {
    hboxEnrollHdrMain.btnScan.setVisibility(true);
    var fname, lname;
    if (IsEnrollMember == FlowForScreens.Enroll) {
        fname = frmEnrollNewMember.txtFirstName.text.trim();
        lname = frmEnrollNewMember.txtLastName.text.trim();
        if (fname.length > 6) {
            fname = fname.substring(0, 4) + "..";
        }
        if (lname.length > 6) {
            lname = lname.substring(0, 4) + "..";
        }
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = fname + " " + lname; // (frmEnrollNewMember.txtFirstName.text).trim() +" "+ (frmEnrollNewMember.txtLastName.text).trim();//Modified by Studio Viz
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = toTitleCase(frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text); //Modified by Studio Viz
        kony.print("frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text after TitleCase==>>>" + frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text); //Modified by Studio Viz
    }
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
        fname = frmAddIndividulaMember.txtFirstName.text.trim();
        lname = frmAddIndividulaMember.txtLastName.text.trim();
        if (fname.length > 6) {
            fname = fname.substring(0, 4) + "..";
        }
        if (lname.length > 6) {
            lname = lname.substring(0, 4) + "..";
        }
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = fname + " " + lname; //Modified by Studio Viz
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = toTitleCase(frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text); //Modified by Studio Viz
    }
    if (IsFromPM == FlowForScreens.ProcessMember) {
        fname = glbFirstNamePM;
        lname = glbLastNamePM;
        kony.print("glbFirstNamePM ===>>" + glbFirstNamePM);
        kony.print("glbLastNamePM ===>>" + glbLastNamePM);
        if (fname.length > 6) {
            fname = fname.substring(0, 4) + "..";
        }
        if (lname.length > 6) {
            lname = lname.substring(0, 4) + "..";
        }
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = fname + " " + lname; //Modified by Studio Viz
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = toTitleCase(frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text); //Modified by Studio Viz
    }
    if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        fname = termMemberInfo.FirstName.trim();
        lname = termMemberInfo.LastName.trim();
        if (fname.length > 6) {
            fname = fname.substring(0, 4) + "..";
        }
        if (lname.length > 6) {
            lname = lname.substring(0, 4) + "..";
        }
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = fname + " " + lname; //Modified by Studio Viz
        frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text = toTitleCase(frmAddAndWeighMemberTransaction.lblProcessMembersubHeader1studio12.text); //Modified by Studio Viz
    }
}

function onCompleteSpProductSale(formshow) {
    function getMembersDetailsForUpdateRequest(res) {
        kony.print("::Nikita res.length::===>" + JSON.stringify(res.length));
        if (res.length === 0) {
            kony.print("::Nikita res::===>" + JSON.stringify(res));
            var MemberValuesFromDB = {};
            MemberValuesFromDB.MemberID = glbMemberId;
            MemberValuesFromDB.PreRegNumber = 0;
            MemberValuesFromDB.TrackerID = 0;
            MemberValuesFromDB.RegNumber = 0;
            MemberValuesFromDB.MemberType = 'Active';
            MemberValuesFromDB.MaintenanceMode = 'false';
            MemberValuesFromDB.TrackerStartDate = "0001-01-01T00:00:00";
            MemberValuesFromDB.FailedDate = "0001-01-01T00:00:00";
            MemberValuesFromDB.Eligible = 'false';
            MemberValuesFromDB.EligibleDate = "0001-01-01T00:00:00";
            MemberValuesFromDB.WeightCountMet = 'false';
            MemberValuesFromDB.StartDate = "0001-01-01T00:00:00";
            MemberValuesFromDB.IsFreshStart = 'false';
            MemberValuesFromDB.RefreshDate = "0001-01-01T00:00:00";
            MemberValuesFromDB.PaidLastFee = 'false';
            MemberValuesFromDB.EnterpriseID = 0;
            MemberValuesFromDB.EmailID = "";
            MemberValuesFromDB.LinkType = "None";
            MemberValuesFromDB.UserName = "";
            MemberValuesFromDB.IsLink = "true";
            MemberValuesFromDB.EmpID = glbEmployeeId;
            MemberValuesFromDB.IsPAYG = 'false';
            MemberValuesFromDB.BillingState = 0;
            MemberValuesFromDB.ShippingState = 0;
            MemberValuesFromDB.WeeksCompleted = 0;
            MemberValuesFromDB.SubscriptnID = 0;
            MemberValuesFromDB.ProductID = 0;
            MemberValuesFromDB.SessionNumber = 1;
            MemberValuesFromDB.RedeemedDate = "0001-01-01T00:00:00";
            MemberValuesFromDB.EnrollmentDate = "0001-01-01T00:00:00";
            MemberValuesFromDB.ReedeemedPasses = 0;
            MemberValuesFromDB.MissWeekPasses = 0;
            MemberValuesFromDB.IsDateRedeemed = 'true';
            MemberValuesFromDB.UserStsChngRsn = "None";
            MemberValuesFromDB.UserStsEndPrd = "0001-01-01T00:00:00";
            MemberValuesFromDB.LastAttendanceDate = glbMeetingDate;
            MemberValuesFromDB.Usertype = UserType.Employee;
            var nameArr = [];
            kony.print("::Nikita nameArr in viewPayment::==" + frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text); //Modified by Studio Viz
            nameArr = frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text.split(" "); //Modified by Studio Viz
            kony.print("::Nikita nameArr in viewPayment::==" + nameArr);
            MemberValuesFromDB.FirstName = nameArr[0];
            MemberValuesFromDB.LastName = nameArr[1];
            kony.print("::Nikita::==>>" + popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]["lblFirstName"]);
            insertToTable("MemberDetails", MemberValuesFromDB, function() {
                kony.print("Return callback");
                onClickCompleteTransaction();
            });
            //DBMemberDetailsController.create(MemberValuesFromDB, createSPMemberSuccessCallback, eventErrorCallBack, false);
        } else {
            kony.print("::Nikita else called onClickCompleteTransaction executed::===>");
            onClickCompleteTransaction();
        }
    }

    function createSPMemberSuccessCallback() {
        onClickCompleteTransaction();
    }
    var whereClause = "where MemberID = '" + glbMemberId + "'";
    DBMemberDetailsController.find(whereClause, getMembersDetailsForUpdateRequest, eventErrorCallBack);
}

function onclickCompleteEnrollProcess(updatedEmailFromMPActivated) {
    var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    kony.print("onclickCompleteEnrollProcess :: entryDate " + entryDate);
    kony.print("onclickCompleteEnrollProcess :: Member Id :  " + glbMemberId);
    kony.print("onclickCompleteEnrollProcess :: updatedEmailFromMPActivated " + updatedEmailFromMPActivated);
    if (IsFromPM == FlowForScreens.ProcessMember) {
        completeTrasForProcessMember(entryDate, updatedEmailFromMPActivated, megFlow.Process);
    }
    if (IsEnrollMember == FlowForScreens.Enroll) {
        completeTrasForEnrollMember(entryDate, updatedEmailFromMPActivated, megFlow.Enroll)
    }
    if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        completeTrasForREEnrollMember(entryDate, updatedEmailFromMPActivated, megFlow.ReEnroll);
    }
    if (IsAddIndividual == FlowForScreens.AddIndividual) {
        completeTrasForAddMember(entryDate, updatedEmailFromMPActivated, megFlow.Add);
    }
    ClearInputFields();
    glbTempCurrentMeetingValue = "";
    glbTempMeetingNum = "";
    glbTempMeetingStatus = "";
}
//This function helps to change the meeting id when the user changes the meeting id during the process memebr - Used because milestone object is defined first and member can change the meeting afterwards - so we need to change here also.
function updateMilestoneObjectMeetingID() {
    //Check if the meeting was changed during the PROCESS Member - Milestone and Missed Week Check
    if (checkValidString(glbTempMeetingNum)) {
        if (mileStoneObj && mileStoneObj.length > 0) {
            for (var i in mileStoneObj) {
                mileStoneObj[i].MeetingID = parseInt(checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum);
            }
        }
        if (MissedWeekWeightData && MissedWeekWeightData.length > 0) {
            for (var j in MissedWeekWeightData) {
                MissedWeekWeightData[j].MtngOccrID = parseInt(checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum);
            }
        }
    }
}

function completeTrasForProcessMember(entryDate, updatedEmailFromMPActivated, flow) {
    var updatememberdetailsObject = {};
    updateProcessMemberData(updatememberdetailsObject, entryDate);
    setPersonalGoalWeight(updatememberdetailsObject, entryDate);
    setSubcriptionData(updatememberdetailsObject, updatedEmailFromMPActivated, entryDate, flow);
    setMemberUpdateEmail(updatememberdetailsObject, updatedEmailFromMPActivated);
    setLifeTimeEligibityForProcessMember(updatememberdetailsObject);
    setGoalWeightReset(updatememberdetailsObject);
    setFreshStart(updatememberdetailsObject);
    var createWeightDetailsObject = setWeighData(entryDate);
    var noteupdatememberdetailsObject = {};
    var createNoteDetailsObject = {};
    var createBMINoteDetailsObject = {};
    kony.print(" glbNoteID:===> " + glbNoteID);
    if (glbNoteID != null && glbNoteID != "") {
        noteupdatememberdetailsObject = updateNoteData();
        kony.print(" noteupdatememberdetailsObject:===> " + JSON.stringify(noteupdatememberdetailsObject));
    } else {
        createNoteDetailsObject = setNoteData(entryDate, frmProcessMember.txtNotes.text);
    }
    var createBMINoteDetailsObject = setBMINoteData(entryDate);
    setIncompleteFlag(updatememberdetailsObject, flow);
    boEnrollMember.updateMemberDetails(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, noteupdatememberdetailsObject, flow);
}

function completeTrasForEnrollMember(entryDate, updatedEmailFromMPActivated, flow) {
    var createMemberDetailsObject = {};
    createEnrollMemberData(createMemberDetailsObject, entryDate);
    setPersonalGoalWeight(createMemberDetailsObject, entryDate);
    setEnrollSubcriptionData(createMemberDetailsObject, updatedEmailFromMPActivated, entryDate, flow);
    var createNoteDetailsObject = setNoteData(entryDate, frmEnrollWeighMember.txtNotes.text);
    var createBMINoteDetailsObject = setBMINoteData(entryDate);
    var createWeightDetailsObject = setEnrollWeightData(entryDate);
    setMemberRefferalOtherData();
    setMemberUpdateEmail(createMemberDetailsObject, updatedEmailFromMPActivated);
    setIncompleteFlag(createMemberDetailsObject, flow);
    boEnrollMember.addNewMemberDetails(createMemberDetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, flow);
}

function completeTrasForREEnrollMember(entryDate, updatedEmailFromMPActivated, flow) {
    var updatememberdetailsObject = {};
    setReEnrollMemberData(updatememberdetailsObject, entryDate);
    setPersonalGoalWeight(updatememberdetailsObject, entryDate);
    setReEnrollSubcriptionData(updatememberdetailsObject, updatedEmailFromMPActivated, entryDate, flow)
    var createNoteDetailsObject = setNoteData(entryDate, frmEnrollWeighMember.txtNotes.text);
    var createBMINoteDetailsObject = setBMINoteData(entryDate);
    glbRegNo = frmEnrollReturningMember.txtRegistrationID.text; //Returning Member
    glbRegNoForProcess = frmEnrollReturningMember.txtRegistrationID.text; //Returning Member
    var createWeightDetailsObject = setEnrollWeightData(entryDate);
    setMemberUpdateEmail(updatememberdetailsObject, updatedEmailFromMPActivated);
    setIncompleteFlag(updatememberdetailsObject, flow);
    if (IsPreRegister == FlowForScreens.PreRegistered) {
        setPreRegMemberData(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject);
        var whereClause = "where PreRegNumber = '" + deviceLevelPreRegNo + "'";
        boEnrollMember.deleteMemberDetails(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, flow, whereClause);
    } else if (IsWebsiteMember == FlowForScreens.Website) {
        setWebsiteMembertData(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, updatedEmailFromMPActivated);
        var whereClause = "where PreRegNumber = '" + deviceLevelPreRegNo + "' and RegStatus = 'Online'";
        boEnrollMember.deleteMemberDetails(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, flow, whereClause);
    } else {
        createWeightDetailsObject.SessionNumber = parseInt(glbSelectedMemberSessionNumber) + 1;
        createWeightDetailsObject.MemberID = termMemberInfo.MemberID;
        updatememberdetailsObject.SessionNumber = parseInt(termMemberInfo.SessionNumber) + 1;
        updatememberdetailsObject.RefreshDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"); // MEG-3023 Added By praveen
        updatememberdetailsObject.MemberID = termMemberInfo.MemberID;
        updatememberdetailsObject.SubscnMemberID = termMemberInfo.MemberID;
        createNoteDetailsObject.MemberID = termMemberInfo.MemberID;
        createBMINoteDetailsObject.MemberID = termMemberInfo.MemberID;
        glbMemberId = updatememberdetailsObject.MemberID;
        if (preActivationObj.hasOwnProperty('voucherNumber')) {
            preActivationObj.MemberID = termMemberInfo.MemberID;
        }
        boEnrollMember.updateMemberDetails(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, {}, "Enroll");
    }
}

function completeTrasForAddMember(entryDate, updatedEmailFromMPActivated, flow) {
    var createMemberDetailsObject = {};
    createAddMemberData(createMemberDetailsObject, entryDate);
    setPersonalGoalWeight(createMemberDetailsObject, entryDate);
    setAddMemberSubscriptionData(createMemberDetailsObject, updatedEmailFromMPActivated, entryDate, flow);
    //Member Subscription Block Nodes, if PAYG selected then nothing to pass
    var createNoteDetailsObject = setNoteData(entryDate, frmEnrollWeighMember.txtNotes.text);
    var createBMINoteDetailsObject = setBMINoteData(entryDate);
    var createWeightDetailsForAddMember = {};
    var createWeightDetailsObject = {};
    setAddMemberWeightData(createWeightDetailsForAddMember, createWeightDetailsObject, entryDate);
    setMemberUpdateEmail(createMemberDetailsObject, updatedEmailFromMPActivated);
    setIncompleteFlag(createMemberDetailsObject, flow);
    updateMilestoneObjectMeetingID();
    kony.print("START WEIGHT AND DATE ARRAY::-->>" + JSON.stringify(createWeightDetailsObject));
    boEnrollMember.addNewMemberDetails(createMemberDetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, "Add", createWeightDetailsForAddMember);
}

function onClickCompleteTransaction() {
    var saleDetailsObject = {};
    var saleItemsObject = [];
    var salePaymentObject = [];
    var saleSplitPaymentObject = [];
    var tallyInfoObject = [];
    var selectKey;
    var currentFlow = "";
    kony.print("glbRegNo ----->" + glbRegNo);
    if (deviceLevelTransactId != null && deviceLevelTransactId !== undefined && deviceLevelTransactId != "") {
        kony.print("deviceLevelTransactId==>>>" + deviceLevelTransactId);
    } else {
        boEnrollMember.generateDeviceLevelTransactID();
        kony.print("Generated deviceLevelTransactId==>>>" + deviceLevelTransactId);
    }
    kony.print("This is the EnrollWeighPayment file" + "IsDirectSale==>>" + IsDirectSale + "glbLocationTypeId==>>" + glbLocationTypeId + "IsProductFlowFromSearch==>>" + IsProductFlowFromSearch + "IsSimpleReturn==>>" + IsSimpleReturn + "isServiceProvider==>>" + isServiceProvider);
    if (IsDirectSale != FlowForScreens.DirectSale && glbLocationTypeId != AT_WORK_LOCATION_TYPE_ID && IsProductFlowFromSearch == false && IsSimpleReturn != FlowForScreens.SimpleReturn && isServiceProvider == false && glbRegNo != "" && IsProductFlowFromCheckedIn == false) {
        selectKey = glbSelectSubType;
        splData = selectKey.split("-");
    }
    kony.print("onClickCompleteTransaction glbMemberId:  " + " + " + glbMemberId);
    if (IsEnrollMember == FlowForScreens.Enroll || IsAddIndividual == FlowForScreens.AddIndividual) {
        kony.print("In Enroll or AddIndividual onClickCompleteTransaction");
        saleDetailsObject["MemberID"] = glbMemberId;
        saleDetailsObject["isVoidAllowed"] = true;
        (IsEnrollMember == FlowForScreens.Enroll) ? currentFlow = FlowForScreens.Enroll: FlowForScreens.AddIndividual;
    } else if (IsFromPM == FlowForScreens.ProcessMember) {
        kony.print("In ProcessMember onClickCompleteTransaction");
        saleDetailsObject["MemberID"] = glbMemberId;
        currentFlow = FlowForScreens.ProcessMember;
    } else if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        kony.print("In ReEnroll onClickCompleteTransaction");
        if (IsPreRegister == FlowForScreens.PreRegistered) {
            kony.print("In PreRegistered onClickCompleteTransaction");
            saleDetailsObject["MemberID"] = deviceLevelPreRegNo;
            currentFlow = FlowForScreens.PreRegistered;
        } else if (IsWebsiteMember == FlowForScreens.Website) {
            saleDetailsObject["MemberID"] = glbMemberId;
            saleDetailsObject["isVoidAllowed"] = true;
            currentFlow = FlowForScreens.Website;
        } else {
            kony.print("In termMemberInfo.MemberID onClickCompleteTransaction: " + termMemberInfo.MemberID);
            saleDetailsObject["MemberID"] = termMemberInfo.MemberID;
            currentFlow = FlowForScreens.ReEnroll;
        }
    } else if (IsDirectSale == FlowForScreens.DirectSale) {
        saleDetailsObject["MemberID"] = "1";
        saleDetailsObject["RegNumber"] = 1;
        currentFlow = FlowForScreens.DirectSale;
    } else if (IsProductFlowFromSearch || IsProductFlowFromCheckedIn) {
        saleDetailsObject["MemberID"] = glbMemberId;
        //** MEG 6596
        //saleDetailsObject["RegNumber"] = boEnrollMember.getRegNumberbyMemberId(glbMemberId);
        boEnrollMember.getRegNumberbyMemberId(glbMemberId, function(regNumber) {
            if (checkValidString(regNumber)) {
                saleDetailsObject["RegNumber"] = regNumber;
            } else {
                saleDetailsObject["RegNumber"] = 0;
            }
        });
        //** End
        currentFlow = (IsProductFlowFromSearch) ? "IsProductFlowFromSearch" : "IsProductFlowFromCheckedIn";
    }
    kony.print("saleTransactionObj data===" + JSON.stringify(saleTransactionObj));
    var attfeesku = 0;
    if (saleTransactionObj.length > 1) {
        attfeesku = (saleTransactionObj.length > 3) ? saleTransactionObj[1]["productDetail"]["sku"] : saleTransactionObj[0]["productDetail"]["sku"];
    }
    saleDetailsObject["AttFeeSku"] = (attfeesku > 0) ? parseInt(attfeesku) : parseInt("450"); //parseInt("450");
    saleDetailsObject["EmpID"] = glbEmployeeId;
    if (IsSimpleReturn == FlowForScreens.SimpleReturn) {
        saleDetailsObject["MemberID"] = "1";
        saleDetailsObject["RegNumber"] = 1;
        saleDetailsObject["IsReturn"] = true;
        saleDetailsObject["IsReturnTransaction"] = true;
    } else {
        saleDetailsObject["IsReturn"] = false;
        saleDetailsObject["IsReturnTransaction"] = false;
    }
    //Added Employee sale in offline mode change MEG-4798.
    if (isServiceProvider) {
        saleDetailsObject["MemberID"] = glbMemberId;
        saleDetailsObject["IsServiceProvider"] = true;
        saleDetailsObject["RegNumber"] = 0;
        saleDetailsObject["EmployeeNumber"] = (checkIfNetworkIsAvailable()) ? "" : glbMemberId;
        saleDetailsObject["IsEmployeeSale"] = true;
    } else {
        saleDetailsObject["IsServiceProvider"] = false;
        saleDetailsObject["EmployeeNumber"] = "";
        saleDetailsObject["IsEmployeeSale"] = false;
    }
    saleDetailsObject["IsSaleVoid"] = false;
    saleDetailsObject["LocationID"] = parseInt(glbLocationID);
    saleDetailsObject["MeetingDate"] = glbMeetingDate; //supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    saleDetailsObject["MeetingOccurID"] = parseInt(checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum);
    saleDetailsObject["SaleDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    saleDetailsObject["LastUpdated"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    saleDetailsObject["SaleTransactnId"] = deviceLevelTransactId.toString();
    saleDetailsObject['HasSplitPayment'] = false;
    if (IsDirectSale != FlowForScreens.DirectSale) saleDetailsObject["RegNumber"] = glbRegNoForProcess;
    saleDetailsObject["IsPreActivated"] = 0;
    if ((preActivationObj.hasOwnProperty('voucherNumber')) && (preActivationObj.isMPFromService == "true")) {
        saleDetailsObject["IsPreActivated"] = 1;
    }
    var cartData = [];
    if (isDirectSaleForm) {
        cartData = frmDirectSaleProductList.segSKUData.data;
        cartNontangibleData = [];
    } else if (glbLocationTypeId == AT_WORK_LOCATION_TYPE_ID) {
        cartData = frmAddAndWeighMemberTransaction.segSKUData.data;
        cartNontangibleData = [];
    } else {
        cartData = frmAddAndWeighMemberTransaction.segSKUData.data;
        cartNontangibleData = frmAddAndWeighMemberTransaction.segSKUDataPOC.data;
    }
    //Tangible Data
    kony.print("CartData====" + JSON.stringify(cartData));
    for (var i in cartData) {
        //var price = parseFloat(cartData[i]["lblPrice"].replace("$", ""));
        var price = parseFloat(removeDollar(cartData[i]["lblPrice"]));
        var taxvalue = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? parseFloat(cartData[i]["hidProductTax"]) : 0;
        var qty = cartData[i]["lblQuantity"];
        qty = parseInt(qty.slice(qty.indexOf("x") + 2));
        var DiscountedPrice = (cartData[i]["hidDiscountedPrice"] != null && cartData[i]["hidDiscountedPrice"] != "") ? parseFloat(cartData[i]["hidDiscountedPrice"]) : 0;
        kony.print("offer tax : " + parseFloat(cartData[i]["hidOfferTax"]));
        kony.print("Offer tax condition" + (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1'));
        var OfferTax = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? parseFloat(cartData[i]["hidOfferTax"]) : 0;
        var discountval = (cartData[i]["hidDiscountValue"] != null && cartData[i]["hidDiscountValue"] != "") ? cartData[i]["hidDiscountValue"] : 0;
        if (checkValidString(discountval)) {
            discountval = parseFloat(discountval);
        } else {
            discountval = 0;
        }
        //var offrid = cartData[i]["hidOfferNo"];
        var offrid = cartData[i]["hidOfferId"]; // Added for MEG-4857
        if (checkValidString(offrid)) {
            offrid = parseFloat(offrid);
        } else {
            offrid = 0;
        }
        var tmpItemObj = {};
        var tmpTallyObj = {};
        kony.print("::DiscountedPrice=" + DiscountedPrice);
        kony.print("::discountval=" + discountval);
        if (isServiceProvider) {
            tmpItemObj["AdjustTotal"] = parseFloat(((price - discountval) * qty).toFixed(2));
            tmpItemObj["CalcTotal"] = parseFloat(((price - discountval) * qty).toFixed(2));
            tmpItemObj["UnitPrice"] = price;
            tmpItemObj["UnitPriceTax"] = taxvalue;
        } else if (discountval > 0 && checkValidString(DiscountedPrice.toString())) {
            tmpItemObj["AdjustTotal"] = parseFloat(((DiscountedPrice) * qty).toFixed(2));
            tmpItemObj["CalcTotal"] = parseFloat(((DiscountedPrice) * qty).toFixed(2));
            tmpItemObj["UnitPrice"] = DiscountedPrice;
            tmpItemObj["UnitPriceTax"] = OfferTax;
        } else {
            kony.print("::DJP::price=" + price + " taxvalue=" + taxvalue + " qty=" + qty);
            tmpItemObj["AdjustTotal"] = parseFloat(((price) * qty).toFixed(2));
            tmpItemObj["CalcTotal"] = parseFloat(((price) * qty).toFixed(2));
            tmpItemObj["UnitPrice"] = price;
            tmpItemObj["UnitPriceTax"] = taxvalue;
        }
        tmpItemObj["CouponCode"] = cartData[i]["hidOfferNo"]; //NOT REQ
        tmpItemObj["IsSaleItemVoid"] = false;
        //tmpItemObj["IsUpload"] = false;
        tmpItemObj["LastUpdated"] = "";
        tmpItemObj["MissWeekPassNo"] = 0;
        tmpItemObj["OfferId"] = offrid; //NOT REQ
        tmpItemObj["OfrCouponCode"] = cartData[i]["hidOfferNo"]; //NOT REQ
        tmpItemObj["PrepaidCoupNo"] = 0; //NOT REQ
        tmpItemObj["ProductID"] = parseInt(cartData[i]["hidProductId"]);
        tmpItemObj["ProductSku"] = cartData[i]["lblProdId"]; // remove parseInt because ProductSku is alphanumeric
        tmpItemObj["Quantity"] = qty;
        tmpItemObj["OriginalQuantity"] = qty;
        tmpItemObj["ReturnQuantity"] = 0;
        tmpItemObj["ReasonCode"] = 0;
        tmpItemObj["SaleTransactnId"] = deviceLevelTransactId.toString();
        tmpItemObj["ClientSaleItemId"] = gblDeviceID + "_" + generateSaleItemID();

        function setProductTypeFromProdcutDetail(productType) {
            tmpItemObj["ProductType"] = productType;
        }
        boEnrollMember.getProductTypeFromProdcutDetail(parseInt(cartData[i]["hidProductId"]), setProductTypeFromProdcutDetail);
        kony.print("tmpItemObj[ProductType]==" + tmpItemObj["ProductType"]);
        tmpItemObj["IsReturnItem"] = false;
        if (IsSimpleReturn == FlowForScreens.SimpleReturn) {
            tmpItemObj["IsReturnItem"] = true;
            tmpItemObj["ReturnQuantity"] = qty;
        }
        saleItemsObject.push(tmpItemObj);
        tmpItemObj = {};
        isFromMissedWeek = false;
        //end of tally data
    }
    // Non tangible data
    kony.print("::cartNontangibleData = " + JSON.stringify(cartNontangibleData));
    var SubsidyAmount = (checkValidString(ProductSale.Cart.totalSubsidy)) ? parseFloat(ProductSale.Cart.totalSubsidy).toFixed(2) : 0;
    for (var i in cartNontangibleData) {
        //Added By PK MEG-4857
        //var nonTGoffrid =cartNontangibleData[i]["hidOfferNo"];
        var nonTGoffrid = cartNontangibleData[i]["hidOfferId"];
        if (checkValidString(nonTGoffrid)) {
            nonTGoffrid = parseFloat(nonTGoffrid);
        } else {
            nonTGoffrid = 0;
        }
        //End By PK MEG-4857
        //var price = parseFloat(cartNontangibleData[i]["lblUnit"].replace("$", ""));
        var price = parseFloat(removeDollar(cartNontangibleData[i]["lblUnit"]));
        var offerPriceTax = cartNontangibleData[i]["hidOfferTax"]; //Added for 4832
        var taxvalue = cartNontangibleData[i]["hidProductTax"];
        taxvalue = (!checkValidString(taxvalue) || taxvalue == "$0.0") ? 0.0 : parseFloat(removeDollar(taxvalue));
        kony.print("Offer Price Tax before applying the validation patch .... " + offerPriceTax);
        offerPriceTax = (!checkValidString(offerPriceTax) || offerPriceTax == "$0.0" || offerPriceTax == 0) ? 0.0 : parseFloat(removeDollar(offerPriceTax));
        kony.print("Offer Price Tax after applying the validation patch .... " + offerPriceTax);
        var discountval = 0.0;
        var tmpItemObj = {};
        var tmpTallyObj = {};
        //** MEG-7230 	
        if (IsAWSLocationEnabled()) {
            tmpItemObj["AdjustTotal"] = (price != null) ? parseFloat(price.toFixed(2)) + parseFloat(SubsidyAmount) : 0;
            tmpItemObj["CalcTotal"] = (price != null) ? parseFloat(price.toFixed(2)) + parseFloat(SubsidyAmount) : 0;
            tmpItemObj["UnitPrice"] = parseFloat(price) + parseFloat(SubsidyAmount);
        } else {
            tmpItemObj["AdjustTotal"] = (price != null) ? price.toFixed(2) : 0;
            tmpItemObj["CalcTotal"] = (price != null) ? price.toFixed(2) : 0;
            tmpItemObj["UnitPrice"] = parseFloat(price);
        }
        //tmpItemObj["AdjustTotal"] = (price != null) ? price.toFixed(2) : 0;
        //tmpItemObj["CalcTotal"] = (price != null) ? price.toFixed(2) : 0;
        tmpItemObj["CouponCode"] = (isFromFMP) ? "M99999999" : getMPSubcriptionId(); //NOT REQ
        tmpItemObj["IsSaleItemVoid"] = false;
        tmpItemObj["LastUpdated"] = "";
        tmpItemObj["MissWeekPassNo"] = 0;
        tmpItemObj["OfferId"] = nonTGoffrid; //Added By PK MEG-4857
        tmpItemObj["OfrCouponCode"] = cartNontangibleData[i]["hidOfferNo"]; //Added By PK MEG-4857
        tmpItemObj["PrepaidCoupNo"] = 0; //NOT REQ
        tmpItemObj["ProductID"] = parseInt(cartNontangibleData[i]["hidProductId"]);
        tmpItemObj["ProductSku"] = cartNontangibleData[i]["hidSKU"]; // remove parseInt because ProductSku is alphanumeric
        tmpItemObj["Quantity"] = 1;
        tmpItemObj["OriginalQuantity"] = 1;
        tmpItemObj["ReturnQuantity"] = 0;
        tmpItemObj["ReasonCode"] = 0;
        tmpItemObj["SaleTransactnId"] = deviceLevelTransactId.toString();
        // tmpItemObj["UnitPrice"] = parseFloat(price) + parseFloat(SubsidyAmount);
        tmpItemObj["ReasonId"] = (IsAWSLocationEnabled()) ? cartNontangibleData[i]["hidReasonId"] : null; // AWS add client subsidy amount to db MEG-5839
        //Added for 4832
        if ((offerPriceTax != undefined && offerPriceTax != "") || ((offerPriceTax == 0) && (price == 0))) {
            tmpItemObj["UnitPriceTax"] = parseFloat(offerPriceTax);
        } else {
            tmpItemObj["UnitPriceTax"] = taxvalue;
        }
        tmpItemObj["ClientSaleItemId"] = gblDeviceID + "_" + generateSaleItemID();

        function setProductTypeFromNonTProdcutDetail(productType) {
            tmpItemObj["ProductType"] = productType;
        }
        boEnrollMember.getProductTypeFromProdcutDetail(parseInt(cartNontangibleData[i]["hidProductId"]), setProductTypeFromNonTProdcutDetail);
        kony.print("non tangible tmpItemObj[ProductType]==" + tmpItemObj["ProductType"]);
        tmpItemObj["IsReturnItem"] = false;
        if (IsSimpleReturn == FlowForScreens.SimpleReturn) {
            tmpItemObj["IsReturnItem"] = true;
            tmpItemObj["ReturnQuantity"] = qty;
        }
        saleItemsObject.push(tmpItemObj);
        tmpItemObj = {};
        //end of tally data
    }
    var isAnyNonTangible = _.find(saleItemsObject, function(item) {
        return (item.ProductType != "TangibleProduct");
    });
    kony.print("::DJP::saleItemsObject=" + JSON.stringify(saleItemsObject));
    kony.print("::DJP::isAnyNonTangible=" + JSON.stringify(isAnyNonTangible));
    if (checkValidString(isAnyNonTangible)) {
        saleDetailsObject["TransactionType"] = "NonTangible";
    } else {
        saleDetailsObject["TransactionType"] = "Tangible";
    }
    saleDetailsObject["TotalSaleTax"] = parseFloat(ProductSale.Cart.taxTotal).toFixed(2);
    //Dileep Chejerla: Price issue
    saleDetailsObject["TotalSalePrice"] = parseFloat(ProductSale.Cart.subTotal).toFixed(2);
    saleDetailsObject["TotalSalePriceNew"] = parseFloat(ProductSale.Cart.subTotal).toFixed(2);
    saleDetailsObject['SubsidyAmount'] = (checkValidString(ProductSale.Cart.totalSubsidy)) ? parseFloat(ProductSale.Cart.totalSubsidy).toFixed(2) : 0;
    if (IsSimpleReturn == FlowForScreens.SimpleReturn) {
        var tempObj = {};
        tempObj["SalePaymentID"] = gblDeviceID + "_" + generateSaleItemID();
        tempObj["Amount"] = /*0 -*/ parseFloat(ProductSale.Cart.total); //MEG-6722
        tempObj["LastUpdated"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
        tempObj["PaymentDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
        tempObj["SaleTransactnId"] = deviceLevelTransactId.toString();
        tempObj["Type"] = PaymentType[9];
        tempObj["RefundAmount"] = 1;
        tempObj["IsRefundAmount"] = true;
        salePaymentObject.push(tempObj);
    } else {
        var amountReturned;
        if (in_array(deviceLocale, Countries["CA"]) && paymentRoundOff) {
            amountReturned = parseFloat(originalPaymentForCash);
            kony.print("::SALEITEM::amountReturned == " + amountReturned);
            originalPaymentForCash = 0;
        } else {
            amountReturned = parseFloat(amountForChangeOwnedForPayment);
        }
        var amountReturnedType = amountForChangeReturnFormatForPayment;
        //kony.print("IS ischangedueuser in enroll==>"+isChangeDueToUser);
        // MEGCA-15
        if (in_array(deviceLocale, Countries["CA"])) {
            if (enableCompleteTransaction == true && paymentRoundOff) {
                kony.print("IS outstandingNegativeBal inside" + outstandingNegativeBal);
                if (outstandingNegativeBal == true) {
                    cashReturned = true;
                } else {
                    cashReturned = false;
                }
            }
        }
        //
        if (amountReturnedType == kony.i18n.getLocalizedString("strCash")) {
            cashReturned = true;
            kony.print("IS cashreturned-->" + cashReturned);
        } else if (amountReturnedType == kony.i18n.getLocalizedString("strCreditSlip")) {
            var tempObj1 = {};
            if (parseFloat(amountReturned) > 0) {
                tempObj1["LastUpdated"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                tempObj1["PaymentDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                tempObj1["SaleTransactnId"] = deviceLevelTransactId.toString();
                tempObj1["Amount"] = /*0 -*/ amountReturned; //MEG-6722
                tempObj1["Type"] = PaymentType[9];
                tempObj1["RefundAmount"] = 1;
                tempObj1["IsRefundAmount"] = false;
                tempObj1["SalePaymentID"] = gblDeviceID + "_" + generateSaleItemID();
                kony.print("::DJP::Adding New Payment Record Credit Slip = " + JSON.stringify(tempObj1));
                cashReturned = false;
                salePaymentObject.push(tempObj1);
            }
        }
        //MEG-2775 Ami start
        if (ProductSale.Cart.total == 0) {
            var tempObj = {};
            tempObj["LastUpdated"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            tempObj["PaymentDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
            tempObj["SaleTransactnId"] = deviceLevelTransactId.toString();
            tempObj["Amount"] = 0;
            tempObj["Type"] = PaymentType[1];
            tempObj["RefundAmount"] = 0;
            tempObj["IsRefundAmount"] = false;
            tempObj["SalePaymentID"] = gblDeviceID + "_" + generateSaleItemID();
            salePaymentObject.push(tempObj);
        } else { //MEG-2775 Ami end
            var paymentData = frmPayment.segPaymentTypeData.data;
            kony.print("IS inside outstandingNegativeBal-->" + outstandingNegativeBal);
            kony.print("IS inside enableCompleteTransaction-->" + enableCompleteTransaction);
            kony.print("IS inside amtreturned-->" + amountReturned);
            _.each(paymentData, function(p) {
                var tempObj = {};
                var isTrack = false;
                //var amountInSegment = parseFloat(p.lblPaymentTypeTextVal.replace("$", ""));
                var amountInSegment = parseFloat(removeDollar(p.lblPaymentTypeTextVal));
                tempObj["SaleTransactnId"] = deviceLevelTransactId.toString();
                //    tempObj["IsIngenicoPayment"] = false;
                var paymentMode = p.lblPaymentTypeText;
                if (paymentMode == kony.i18n.getLocalizedString("strCash")) {
                    if (cashReturned) amountInSegment = amountInSegment - amountReturned;
                    if (outstandingNegativeBal == false && enableCompleteTransaction == true) {
                        amountInSegment = amountInSegment + amountReturned;
                    }
                    hiddenValue = PaymentType[1];
                } else if (paymentMode == kony.i18n.getLocalizedString("strCredit") || (isPaymentByBTDevice && paymentMode == kony.i18n.getLocalizedString("strCredit"))) {
                    hiddenValue = PaymentType[13];
                    //Added for saving credit card service response in db
                    if (checkAppSettingEnable(Settings["CC"])) {
                        if ((glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true") && creditCrardSalePaymentDataObj != null) {
                            tempObj["InvoiceNumber"] = creditCrardSalePaymentDataObj.InvoiceNumber;
                            tempObj["AuthorizationCode"] = creditCrardSalePaymentDataObj.AuthorizationCode;
                            tempObj["CCLastFourDigits"] = creditCrardSalePaymentDataObj.CCLastFourDigits;
                            tempObj["CardType"] = creditCrardSalePaymentDataObj.CardType
                            tempObj["ExpirationDate"] = creditCrardSalePaymentDataObj.ExpirationDate
                            tempObj["HasToken"] = creditCrardSalePaymentDataObj.HasToken;
                            tempObj["ReferenceNumber"] = creditCrardSalePaymentDataObj.ReferenceNumber;
                            tempObj["RequestId"] = creditCrardSalePaymentDataObj.RequestId;
                            tempObj["Token"] = creditCrardSalePaymentDataObj.Token;
                            tempObj["TokenExpirationDate"] = creditCrardSalePaymentDataObj.TokenExpirationDate;
                            tempObj["TransactionType"] = creditCrardSalePaymentDataObj.TransactionType;
                            tempObj["TransactionStatus"] = creditCrardSalePaymentDataObj.TransactionStatus;
                            isTrack = creditCrardSalePaymentDataObj.IsTrack;
                            tempObj["CardSignature"] = creditCrardSalePaymentDataObj.CardSignature;
                            tempObj["IsIngenicoPayment"] = creditCrardSalePaymentDataObj.IsIngenicoPayment;
                            tempObj["PaymentGateway"] = creditCrardSalePaymentDataObj.PaymentGateway;
                        }
                    }
                } else if (paymentMode == kony.i18n.getLocalizedString("strbtnCheck")) {
                    hiddenValue = PaymentType[2];
                } else if (paymentMode == kony.i18n.getLocalizedString("strCreditSlip")) {
                    hiddenValue = PaymentType[10];
                } else if (paymentMode == kony.i18n.getLocalizedString("strDebitCard")) {
                    hiddenValue = PaymentType[7];
                } else if (paymentMode == kony.i18n.getLocalizedString("strSplit")) {
                    hiddenValue = PaymentType[14]; //PaymentType[14];
                }
                tempObj["SalePaymentID"] = gblDeviceID + "_" + generateSaleItemID();
                tempObj["LastUpdated"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                tempObj["PaymentDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                tempObj["Amount"] = amountInSegment;
                tempObj["Type"] = hiddenValue;
                tempObj["RefundAmount"] = 0;
                tempObj["IsRefundAmount"] = false;
                if (paymentMode == kony.i18n.getLocalizedString("strSplit")) {
                    var totalSalePriceWithTax = parseFloat(saleDetailsObject.TotalSalePrice) + parseFloat(saleDetailsObject.TotalSaleTax);
                    tempObj["NoOfCheques"] = (totalSalePriceWithTax == amountInSegment) ? 3 : 2;
                } else {
                    tempObj["NoOfCheques"] = 0;
                }
                //IsTrack false for Credit Card(if enabled) and true for other payment modes
                tempObj["IsTrack"] = isTrack;
                salePaymentObject.push(tempObj);
            });
        }
    }
    kony.print("::DJP::salePaymentObject = " + JSON.stringify(salePaymentObject));
    var monitorData = {
        "SaleTransactnId": saleDetailsObject.SaleTransactnId,
        "TotalSalePrice": saleDetailsObject.TotalSalePrice,
        "MemberID": saleDetailsObject.MemberID
    };
    // START AWS changes for Split Payment MEG-5823 
    if (IsAWSLocationEnabled()) {
        var isSplitPayment = _.find(salePaymentObject, function(v) {
            return (v.Type == kony.i18n.getLocalizedString("strSplit"));
        })
        if (isSplitPayment) {
            saleDetailsObject['HasSplitPayment'] = true
            _.each(salePaymentObject, function(v, i) {
                var b = {};
                var c, d;
                b['SplitAmount'] = v.Amount;
                b['SaleTransactnId'] = v.SaleTransactnId
                b['SplitType'] = v.Type;
                b['IsSplit'] = '0';
                if (v.Type == kony.i18n.getLocalizedString("strSplit")) {
                    b['SplitAmount'] = parseFloat(v.Amount / v.NoOfCheques).toFixed(2);
                    b['SplitType'] = PaymentType[2];
                    b['IsSplit'] = '1';
                    if (v.NoOfCheques == 3) {
                        saleSplitPaymentObject.push(b);
                        c = _.clone(b);
                        saleSplitPaymentObject.push(c);
                        d = _.clone(b);
                        saleSplitPaymentObject.push(d);
                    } else {
                        saleSplitPaymentObject.push(b);
                        c = _.clone(b);
                        saleSplitPaymentObject.push(c);
                    }
                } else {
                    saleSplitPaymentObject.push(b); //** MEG 7132
                }
            })
            saleSplitPaymentObject = sortSplitPaymentByCheckDesc(saleSplitPaymentObject);
            kony.print("::saleSplitPaymentObject::" + JSON.stringify(saleSplitPaymentObject));
            _.each(saleSplitPaymentObject, function(v, i) {
                kony.print("i+1----" + (i + 1));
                saleSplitPaymentObject[i]['SplitNumber'] = i + 1;
            })
            var tmpPayment = {};
            tmpPayment.Amount = 0;
            tmpPayment.NoOfCheques = 0;
            _.each(salePaymentObject, function(v) {
                if (v.Type == kony.i18n.getLocalizedString("strSplit") || v.Type == kony.i18n.getLocalizedString("strbtnCheck")) {
                    tmpPayment.SalePaymentID = gblDeviceID + "_" + generateSaleItemID();
                    tmpPayment.Amount += v.Amount;
                    tmpPayment.Type = PaymentType[2];
                    tmpPayment.IsRefundAmount = v.IsRefundAmount;
                    tmpPayment.RefundAmount = v.RefundAmount;
                    tmpPayment.PaymentDate = v.PaymentDate;
                    tmpPayment.LastUpdated = v.LastUpdated;
                    tmpPayment.NoOfCheques += v.NoOfCheques;
                    tmpPayment.LastUpdated = v.LastUpdated;
                    tmpPayment.SaleTransactnId = v.SaleTransactnId;
                    tmpPayment.IsTrack = v.IsTrack
                }
            })
            kony.print("::After tmpPayment::" + JSON.stringify(tmpPayment));
            salePaymentObject = _.filter(salePaymentObject, function(v) {
                return (v.Type != kony.i18n.getLocalizedString("strSplit") && v.Type != kony.i18n.getLocalizedString("strbtnCheck"))
            })
            kony.print("::After Filter::" + JSON.stringify(salePaymentObject));
            salePaymentObject.push(tmpPayment);
            kony.print("::After Push::" + JSON.stringify(salePaymentObject));
        }
    }
    //END AWS changes for Split Payment MEG-5823
    boMonitor.log("Insert Sale Transaction", "btnCompleteProcessMember", monitorData, currentFlow);
    boEnrollMember.insertToSaleTransaction(saleDetailsObject, saleItemsObject, salePaymentObject, saleSplitPaymentObject, callBackCompleteTranAndRedirectToHome);
    kony.print("popupAddEmail.txtEmailAddress.text complete:" + popupAddEmail.txtEmailAddress.text);
    var email = popupAddEmail.txtEmailAddress.text;
    if ((frmPayment.imgSendReceipt.src == "icn_checkbox_checked.png") && (email != "") && (email != undefined)) sendReceiptEmail(saleItemsObject, salePaymentObject);
    glbMemberSubscpBefore = "";
    glbChangeSubscDetected = false;
}

function callBackCompleteTranAndRedirectToHome() {
    kony.print("In callBackCompleteTranAndRedirectToHome..");
    disableCreditCardAndBackBtn(false);
    removeProgressView();
    if ((preActivationObj.hasOwnProperty('voucherNumber')) && (preActivationObj.isMPFromService == "true")) {
        boEnrollMember.addMemberPreActivationDetails(function startActivation() {
            kony.print("In callBackCompleteTranAndRedirectToHome addMemberPreActivationDetails..");
            successOnMpActivateBtn(true);
        });
    } else {
        if (preActivationObj.isMPFromService === "true") {} else if (IsFromPM == FlowForScreens.ProcessMember) {
            alertForMessages(kony.i18n.getLocalizedString("strMemProcessSuccess"));
        } else if (IsReEnrollScreen == FlowForScreens.ReEnroll || IsEnrollMember == FlowForScreens.Enroll || IsPreRegister == FlowForScreens.PreRegistered || IsWebsiteMember == FlowForScreens.Website) {
            alertForMessages(kony.i18n.getLocalizedString("strMemEnrollSuccess"));
        } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
            alertForMessages(kony.i18n.getLocalizedString("strMemAddSuccess"));
        }
        kony.print("callBackCompleteTranAndRedirectToHome: = " + CheckFormshow);
        kony.print("glbMeetingNum: = " + glbMeetingNum);
        if (CheckFormshow && glbMeetingNum != "") {
            evenOnPostShowHomeScreen();
        } else if (CheckFormshow && glbMeetingNum == "") {
            frmHomeScreenNoMeeting.show();
        } else {
            frmReceipt.show();
        }
    }
}

function generateIncrementalMemberID() {
    function getAllCountSuccess(res) {
        memberIDCount = res.count;
        kony.print("memberIDCount : " + memberIDCount);
    }
    com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllCount(getAllCountSuccess, eventErrorCallBack);
}

function getSubscriptionData(SubscriptionID) {
    var is20Week = (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str20WkRedeem")) ? true : false; // for 20 week pass redeem
    kony.print("::20::getSubscriptionData is20Week = " + is20Week);
    //AMi var is20WeekBuy = (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str20WkBuyNew") || frmEditMemberProfile.lblSubTypeInfo.text == "20 Week Pass") ? true : false; //for 20 week buy now
    //ami add - MEG-7343  
    var is20WeekBuy = false;
    is20WeekBuy = (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str20WkBuyNew")) ? true : false; //for 20 week buy now
    if (kony.application.getCurrentForm().id == frmEditMemberProfile.id) {
        is20WeekBuy = (frmEditMemberProfile.lblSubTypeInfo.text == "20 Week Pass") ? true : false;
    }
    //ami add - MEG-7343
    kony.print("getSubscriptionData SubscriptionID=====" + SubscriptionID);
    var strCpnCode = (is20Week || is20WeekBuy) ? SubscriptionID.substring(0, 10) : SubscriptionID.substring(0, 9);
    if (is20Week || is20WeekBuy) {
        strCpnCode = strCpnCode.toUpperCase().replace("C", "Q");
    }
    kony.print(" getSubscriptionData strCpnCode=====" + strCpnCode);
    var strdt = (is20Week || is20WeekBuy) ? SubscriptionID.substring(10) : SubscriptionID.substring(9);
    var dateData = strdt.match(/.{1,2}/g);
    kony.print(" getSubscriptionDatadateData=====" + dateData);
    var dateStr = dateData[0] + "/" + dateData[1] + "/20" + dateData[2];
    kony.print("getSubscriptionData dateStr=====" + dateStr);
    kony.print("::DJP:: gblExpirationDate" + gblExpirationDate);
    //var dt = new Date(dateStr);
    var dateTemp;
    var dt;
    var currentDateTime = new Date();
    var glbExpirationTimeTemp = new Date(gblExpirationDate);
    if (checkIfValidDate(glbExpirationTimeTemp)) {
        if (glbExpirationTimeTemp <= currentDateTime) {
            dt = new Date(dateStr);
        } else {
            dt = new Date(gblExpirationDate);
        }
    } else {
        dt = new Date(dateStr);
    }
    // for 20 weekBuy now	
    if (is20WeekBuy) {
        kony.print("IS dt before function===>" + dt);
        dt = getSaturdayOfWeek(dt, 0);
        kony.print("IS after function==>" + dt);
    }
    kony.print("Dt=====" + dt);
    var exprnDate = supportTime(dt, "", "yyyy-mm-ddTHH:NN:SS");
    kony.print("Dt=====" + dt);
    kony.print("IS ExpirationDate==>" + exprnDate);
    var objsubscription = {
        "CouponCode": strCpnCode.toUpperCase(),
        "ExpirationDate": exprnDate
    };
    kony.print("objsubscription====" + JSON.stringify(objsubscription));
    return objsubscription;
}

function eventonClickCompleteProcessMember() {
    var monitorData = {
        "Total": frmAddAndWeighMemberTransaction.lblTotalData.text
    };
    if (IsFromPM == FlowForScreens.ProcessMember) {
        boMonitor.log("Member Process:- Product Sale", "btnCompleteProcessMember", monitorData, FlowForMonitor.ProcessMember);
    }
    if (parseFloat(ProductSale.Cart.total) > parseFloat(MaxProductCartAmount)) {
        alertForMessages(kony.i18n.getLocalizedString("strlblMaxCartAmtReached"));
        return;
    }
    kony.print("frmAddAndWeighMemberTransaction.lblTotalData.text==>>" + frmAddAndWeighMemberTransaction.lblTotalData.text);
    if ((frmAddAndWeighMemberTransaction.lblTotalData.text == addCurrency("0.00")) && (IsAddIndividual == FlowForScreens.AddIndividual || IsEnrollMember == FlowForScreens.Enroll || IsReEnrollScreen == FlowForScreens.ReEnroll || IsPreRegister == FlowForScreens.PreRegistered || IsFromPM == FlowForScreens.ProcessMember)) {
        CheckFormshow = true;
        onclickCompleteEnrollProcess();
    } else {
        frmPayment.show();
    }
}

function getMPSubcriptionId() {
    var cpnNo = "0";
    var tempCC = glbFormName.txtSubscriptionID.text;
    kony.print("glbLastCouponCode===" + glbLastCouponCode + "====tempCC====" + tempCC)
    if (glbLastCouponCode !== undefined && glbLastCouponCode != null && checkValidString(glbLastCouponCode) && glbLastCouponCode.trim().length > 0) { //**MEG 6815
        cpnNo = glbLastCouponCode;
        glbLastCouponCode = "";
        return cpnNo.toUpperCase();
    } else if (tempCC !== undefined && tempCC != null && tempCC.trim().length > 0) {
        cpnNo = tempCC.substring(0, 9);
        /* ADD MEG-7339*/
        if (in_array(tempCC.charAt(0).toUpperCase(), ['C', 'Q'])) {
            cpnNo = tempCC.substring(0, 10);
        }
        /*  MEG-7339*/
    }
    glbLastCouponCode = "";
    return cpnNo.toUpperCase();
}

function sortSplitPaymentByCheckDesc(objArr) {
    var tempA = _.reject(objArr, function(v) {
        return v.SplitType == 'Check';
    })
    var tempB = _.reject(objArr, function(v) {
        return v.SplitType != 'Check';
    });
    _.each(tempB, function(v) {
        tempA.push(v);
    });
    return tempA;
}