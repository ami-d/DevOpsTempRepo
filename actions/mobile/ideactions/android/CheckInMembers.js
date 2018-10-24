var membersData = [];
var weightData = [];
var milestoneData = [];
var checkeInMembers = {
    getAllMembersList: function() {
        displayProgressView();
        //var whrCondition = "where MtngOccrID='"+glbMeetingNum+"' and LocationID='"+glbLocationID+"'";
        //var whrCondition = "where 1=1";
        var whrCondition = "where MtngOccrID = '" + glbMeetingNum + "' and date(LastAttendanceDate) = date('now','localtime') and (Usertype <> '1' or Usertype IS NULL)";

        function getAllMembersListSuccCallback(res) {
            membersData = [];
            weightData = [];
            milestoneData = [];
            if (res.length > 0) {
                membersData = [];
                for (i in res) {
                    var tmpObj = {};
                    var v = res[i];
                    var expDateMasking = kony.sync.getString(v.ExpirationDate);
                    if (expDateMasking != undefined && expDateMasking != null) {
                        kony.print("INSIDE Split Function.");
                        var expDateSplit = expDateMasking.split("T");
                        if (isNaN(expDateSplit.toString())) {
                            var expDOBFormatted = formatDateMemberSearch(expDateSplit[0]);
                        } else {
                            var expDOBFormatted = "";
                        }
                    } else {
                        var expDOBFormatted = "";
                    }
                    tmpObj["FirstName"] = makeFirstLetterUp(kony.sync.getString(v.FirstName));
                    tmpObj["LastName"] = makeFirstLetterUp(kony.sync.getString(v.LastName));
                    tmpObj["Phone1"] = kony.sync.getString(v.Phone1);
                    tmpObj["FeePaid"] = kony.sync.getString(v.FeePaid);
                    tmpObj["SubscriptnType"] = kony.sync.getString(v.SubscriptnType);
                    tmpObj["MemberID"] = kony.sync.getString(v.MemberID);
                    tmpObj["MtngOccrID"] = kony.sync.getString(v.MtngOccrID);
                    tmpObj["MemberStatus"] = kony.sync.getString(v.MemberStatus);
                    tmpObj["RegNo"] = kony.sync.getString(v.RegNumber);
                    tmpObj["StartDate"] = kony.sync.getString(v.StartDate);
                    tmpObj["MembershipType"] = kony.sync.getString(v.MemberType);
                    tmpObj["OriginalDateOfBirth"] = kony.sync.getString(v.DateOfBirth);
                    tmpObj["Height"] = kony.sync.getString(v.Height);
                    tmpObj["Gender"] = kony.sync.getString(v.Gender);
                    tmpObj["RegStatus"] = kony.sync.getString(v.RegStatus);
                    tmpObj["Email"] = kony.sync.getString(v.Email);
                    tmpObj["misWeekPass"] = kony.sync.getString(v.MissWeekPasses);
                    tmpObj["isOnlineSearch"] = false;
                    tmpObj["StartWeight"] = kony.sync.getString(v.StartWeight);
                    tmpObj["GoalWeight"] = kony.sync.getString(v.GoalWeight);
                    tmpObj["PreRegNumber"] = kony.sync.getString(v.PreRegNumber);
                    tmpObj["ExpirationDate"] = expDOBFormatted;
                    tmpObj["CouponCode"] = kony.sync.getString(v.CouponCode);
                    tmpObj["IncompleteData"] = kony.sync.getBoolean(v.IncompleteData);
                    tmpObj["EmpID"] = kony.sync.getString(v.EmpID);
                    tmpObj["Usertype"] = kony.sync.getString(v.Usertype);
                    membersData.push(tmpObj);
                }
                kony.print("membersData.length is : " + membersData.length + "::--" + JSON.stringify(membersData));
                checkeInMembers.getMemberWeightList();
            } else {
                checkeInMembers.getEmployeeListForCheckedInList(false);
                //showCheckedinMemberData(false);
            }
        }
        DBMemberDetailsController.find(whrCondition, getAllMembersListSuccCallback, eventErrorCallBack);
    },
    getMemberWeightList: function() {
        var whrCondition = "where LocationID='" + glbLocationID + "' and date(WeighInDate) = date('now','localtime') order by datetime(WeighInDate) DESC ";

        function getMemberWeightListSuccCallback(res) {
            if (res.length > 0) {
                var memIDObj = [];
                for (i in res) {
                    var tmpWeighObj = {};
                    var v = res[i];
                    if (!in_array(v.MemberID, memIDObj)) {
                        tmpWeighObj["MemberID"] = kony.sync.getString(v.MemberID);
                        tmpWeighObj["Weight"] = kony.sync.getString(v.Weight);
                        tmpWeighObj["WeightLoss"] = kony.sync.getString(v.WeightLoss);
                        weightData.push(tmpWeighObj);
                        kony.print("Weight kony.sync.getString(v.MemberID)  ==== " + v.MemberID);
                        memIDObj.push(v.MemberID);
                    }
                }
                kony.print("weightData.lengths is ::: " + weightData.length + "::--" + JSON.stringify(weightData));
                checkeInMembers.getMemberMilestoneAchivedList();
            } else {
                checkeInMembers.getEmployeeListForCheckedInList(false);
                //showCheckedinMemberData(false);
            }
        }
        DBWeighDetailsController.find(whrCondition, getMemberWeightListSuccCallback, eventErrorCallBack);
    },
    getMemberMilestoneAchivedList: function() {
        var whrCondition = "where date(WeighInDate) = date('now','localtime')";

        function getMemberMilestoneAchivedListSuccCallback(res) {
            if (res.length > 0) {
                for (i in res) {
                    var tmpMileObj = {};
                    var v = res[i];
                    kony.print("Milestone kony.sync.getString(v.MemberID) === " + v.MemberID);
                    kony.print("Milestone ID is : " + kony.sync.getString(v.MilestoneID));
                    tmpMileObj["MemberID"] = v.MemberID;
                    tmpMileObj["MilestoneName"] = checkUndefined(MiletoneLookupTable[parseInt(kony.sync.getString(v.MilestoneID))]);
                    kony.print("tmpMileObj[MilestoneName] " + tmpMileObj["MilestoneName"]);
                    milestoneData.push(tmpMileObj);
                }
            }
            kony.print("milestoneData.lengths is ::: " + milestoneData.length + "::--" + JSON.stringify(milestoneData));
            checkeInMembers.getFinalCheckedInResult();
        }
        DBMilestoneAchievedController.find(whrCondition, getMemberMilestoneAchivedListSuccCallback, eventErrorCallBack);
    },
    getFinalCheckedInResult: function() {
        var finalObj = [];
        kony.print(" weightData.length ==== " + weightData.length);
        if (weightData.length > 0) {
            for (i in weightData) {
                for (j in membersData) {
                    kony.print(" Weigh memid : " + weightData[i]["MemberID"] + " - " + weightData[i]["MemberID"] + "    Memeber ID: " + membersData[j]["MemberID"]);
                    if (weightData[i]["MemberID"] == membersData[j]["MemberID"]) {
                        membersData[j]["WeightLoss"] = parseFloat(weightData[i]["WeightLoss"]).toFixed(1);
                        finalObj.push(membersData[j]);
                        break;
                    }
                }
                kony.print("finalObj.length === " + finalObj.length + "::--" + JSON.stringify(finalObj));
            }
            if (finalObj.length > 0) {
                for (k in finalObj) {
                    var mName = "";
                    for (m in milestoneData) {
                        kony.print(" finalObj memid : " + finalObj[k]["MemberID"] + " - " + finalObj[k]["MemberID"] + "    milestoneData ID: " + milestoneData[m]["MemberID"]);
                        kony.print("milestoneData[m][MilestoneName] === " + milestoneData[m]["MilestoneName"]);
                        if (milestoneData[m]["MemberID"] == finalObj[k]["MemberID"]) {
                            kony.print("mname=== " + milestoneData[m]["MilestoneName"]);
                            if (milestoneData[m]["MilestoneName"] != undefined && milestoneData[m]["MilestoneName"] != null && milestoneData[m]["MilestoneName"].toString().trim() != "") {
                                mName += milestoneData[m]["MilestoneName"] + ", ";
                            }
                        }
                    }
                    if (mName == "") {
                        mName = "--";
                    }
                    finalObj[k]["MilestoneName"] = mName.replace(/,\s*$/, '');
                    //get the preactivation data
                    if (in_array(deviceLocale, Countries["US"]) && finalObj[k]["SubscriptnType"] == "MonthlyPass") {
                        finalObj[k]["ActivationStatusIcon"] = getActivationStatus(finalObj[k]["MemberID"], finalObj[k]["CouponCode"]);
                    }
                }
            }
        }
        checkeInMembers.getEmployeeListForCheckedInList(true, finalObj);
        //showCheckedinMemberData(true, finalObj);
    },
    getEmployeeListForCheckedInList: function(status, data) {
        var whrCondition = "where MtngOccrID = '" + glbMeetingNum + "' and date(LastAttendanceDate) = date('now','localtime') and Usertype = '1'";

        function getEmployeeListForCheckedInListSuccCallback(res) {
            kony.print(status + "::Before::data---" + JSON.stringify(data));
            if (!status) {
                data = [];
            }
            kony.print("::After::data---" + JSON.stringify(data));
            if (res.length > 0) {
                for (i in res) {
                    var tmpObj = {};
                    var v = res[i];
                    //
                    var expDateMasking = kony.sync.getString(v.ExpirationDate);
                    if (expDateMasking != undefined && expDateMasking != null) {
                        kony.print("INSIDE Split Function.");
                        var expDateSplit = expDateMasking.split("T");
                        if (isNaN(expDateSplit.toString())) {
                            kony.print("Inside Format function");
                            var expDOBFormatted = formatDateMemberSearch(expDateSplit[0]);
                        } else {
                            kony.print("Outside Format function");
                            var expDOBFormatted = "";
                        }
                    } else {
                        kony.print("OUTSIDE Split Function.");
                        var expDOBFormatted = "";
                    }
                    tmpObj["FirstName"] = makeFirstLetterUp(kony.sync.getString(v.FirstName));
                    tmpObj["LastName"] = makeFirstLetterUp(kony.sync.getString(v.LastName));
                    tmpObj["Phone1"] = kony.sync.getString(v.Phone1);
                    tmpObj["FeePaid"] = kony.sync.getString(v.FeePaid);
                    tmpObj["SubscriptnType"] = kony.sync.getString(v.SubscriptnType);
                    tmpObj["MemberID"] = kony.sync.getString(v.MemberID);
                    tmpObj["MtngOccrID"] = kony.sync.getString(v.MtngOccrID);
                    tmpObj["MemberStatus"] = kony.sync.getString(v.MemberStatus);
                    tmpObj["RegNo"] = kony.sync.getString(v.RegNumber);
                    tmpObj["StartDate"] = kony.sync.getString(v.StartDate);
                    tmpObj["MembershipType"] = kony.sync.getString(v.MemberType);
                    tmpObj["OriginalDateOfBirth"] = kony.sync.getString(v.DateOfBirth);
                    tmpObj["Height"] = kony.sync.getString(v.Height);
                    tmpObj["Gender"] = kony.sync.getString(v.Gender);
                    tmpObj["RegStatus"] = kony.sync.getString(v.RegStatus);
                    tmpObj["Email"] = kony.sync.getString(v.Email);
                    tmpObj["misWeekPass"] = kony.sync.getString(v.MissWeekPasses);
                    tmpObj["isOnlineSearch"] = false;
                    tmpObj["StartWeight"] = kony.sync.getString(v.StartWeight);
                    tmpObj["GoalWeight"] = kony.sync.getString(v.GoalWeight);
                    tmpObj["PreRegNumber"] = kony.sync.getString(v.PreRegNumber);
                    tmpObj["ExpirationDate"] = expDOBFormatted;
                    tmpObj["CouponCode"] = kony.sync.getString(v.CouponCode);
                    tmpObj["IncompleteData"] = kony.sync.getBoolean(v.IncompleteData);
                    tmpObj["EmpID"] = kony.sync.getString(v.EmpID);
                    tmpObj["Usertype"] = kony.sync.getString(v.Usertype);
                    data.push(tmpObj);
                }
                showCheckedinMemberData(true, data);
            } else if (data.length > 0) {
                showCheckedinMemberData(true, data);
            } else {
                showCheckedinMemberData(false);
            }
        }
        DBMemberDetailsController.find(whrCondition, getEmployeeListForCheckedInListSuccCallback, eventErrorCallBack);
    }
}

function getActivationStatus(memberID, couponCode) {
    kony.print("IN getActivationStatus");
    var returnImageName = "";

    function getActivationStatusSuccCallback(res) {
        if (res.length > 0) // member found pre activated in same device
        {
            //Get the Member status for Activation
            var v = res[0];
            var ActivationStatus = kony.sync.getString(v.ActivationStatus);
            var ActivationDate = kony.sync.getString(v.ActivationDate);
            switch (ActivationStatus) {
                case '':
                    returnImageName = (checkValidString(checkForFailureOnMember(memberID, couponCode))) ? 'mpactive_orangeicon.png' : 'mpactive_blackicon.png';
                    break;
                case 'false':
                    returnImageName = 'mpactive_orangeicon.png';
                    break;
                case 'true':
                    returnImageName = 'mpactive_greenicon.png';
                    break;
                default:
                    break;
            }
        } else {
            kony.print("No record found in PreActivation");
            var whereCondition = "SELECT A.IsFailedMPVoucher, A.CouponCode FROM SaleItems A inner join SaleDetails B on A.[SaleTransactnId] = B.[SaleTransactnId] Where B.MemberID = '" + memberID + "' AND A.CouponCode = '" + couponCode + "' AND B.CountryID = '" + getCountryID() + "'";
            kony.print("getFailedVoucherInfo:=== " + whereCondition);

            function getFailedVoucherInfoSuccessCallback(res) {
                kony.print("in getFailedVoucherInfoSuccessCallback" + JSON.stringify(res));
                if (res.length > 0) {
                    var isFailedVaocherInfo = kony.sync.getBoolean(res[0].IsFailedMPVoucher);
                    kony.print("isFailedVaocherInfo : " + isFailedVaocherInfo);
                    if (isFailedVaocherInfo == true) returnImageName = 'icn_mp_v_green.png';
                }
            }
            kony.sync.single_select_execute(kony.sync.getDBName(), whereCondition, null, getFailedVoucherInfoSuccessCallback, eventErrorCallBack);
        }
    }
    //Check whether member is pre activated in same device or not
    var whrCondition = "where MemberID='" + memberID + "' and CouponCode = '" + couponCode + "'";
    DBPreActivationController.find(whrCondition, getActivationStatusSuccCallback, eventErrorCallBack);
    return returnImageName;
}

function checkForFailureOnMember(memberID, couponCode) {
    var returnImage = "";

    function getActivatedFailureMemberListSuccCallback(res) {
        kony.print("IN getActivatedFailureMemberList==" + JSON.stringify(res));
        if (res.length > 0) {
            for (i in res) {
                var v = res[i];
                kony.print("IN v==" + JSON.stringify(v));
                var keyStr = JSON.stringify(kony.sync.getString(v._Key));
                var keyObj = JSON.parse(keyStr);
                kony.print("IN keyStr==" + keyStr);
                kony.print("IN keyStr==" + keyObj.toString());
                kony.print("IN IF=" + keyObj["MemberID"] + "--" + keyObj.MemberID);
                var memId = keyStr.search(memberID);
                var saleId = keyStr.search(couponCode);
                //if(keyObj && keyObj["MemberID"] == memberID)
                if (memId > 0 && saleId > 0) {
                    kony.print("IN IF=" + keyObj.MemberID);
                    returnImage = "mpactive_orangeicon.png";
                }
            }
        }
    }
    kony.print("IN getSaleDetailForActivationMemberSuccCallback couponCode==" + couponCode);
    var whrCondition = "where SyncObject = 'PreActivation'";
    com.kony.WeightWatchers.Logger.SyncErrorLog.find(whrCondition, getActivatedFailureMemberListSuccCallback, eventErrorCallBack);
    return returnImage;
}

function showMpActivatedMemberData() {
    var query = "select A.CouponCode, A.ActivationStatus,A.PassDuration as ProgramDuration, A.ActivationDate, A.MemberID, A.ID , ifnull(M.FirstName || ' '  || M.LastName , '--') as Name from PreActivation A left join  MemberDetails M on M.MemberID = A.MemberID where A.MeetingDate = '" + glbMeetingDate + "'  and A.MtngOccrID ='" + glbMeetingNum + "' and A.SaleTransactnId is not null and A.IsCurrentSyncData ='true'";
    popupMPActivation.segMPActivatedMember.removeAll();

    function getMPMemberSuccessCallback(res) {
        kony.print("::res:" + JSON.stringify(res));
        updatePreActivationAfterSync(); // Update the preactivation table MEG-5593
        glbMPActivationSegmentData = res;
        setMPActivationSegmentData(res);
    }
    kony.print("::Sql::----" + query);
    kony.sync.single_select_execute(kony.sync.getDBName(), query, null, getMPMemberSuccessCallback, eventErrorCallBack);
}

function setMPActivationSegmentData(res) {
    if (res.length > 0) {
        var status;
        var tmpSegMPMember = [];
        var b;
        for (i in res) {
            var v = res[i];
            if (v.ActivationStatus.trim() == "") {
                status = getLocalizedString("strLblActivationPending");
            } else if (v.ActivationStatus == "true") {
                status = getLocalizedString("strLblActivated");
            } else if (v.ActivationStatus == "Voucher Issued") {
                status = getLocalizedString("strLblVoucherIssued");
            } else {
                status = getLocalizedString("strLblActivationFailed");
            } // condition added becoz v.ActivationStatus recieved "true" or "false" of data type string , 
            b = mapKeys(viewMPMembers, {
                lblName: v.Name,
                lblMPNumber: v.CouponCode.toUpperCase(), //LastName
                lblStatus: status,
                MemberID: v.MemberID,
                ID: v.ID,
                ActivationDate: v.ActivationDate,
                ProgramDuration: v.ProgramDuration,
                btnIssueVoucher: (v.ActivationStatus == "true" || v.ActivationStatus == "Voucher Issued" /*|| v.ActivationStatus.trim() == ""*/ ) ? {
                    text: "",
                    isVisible: false
                } : {
                    text: kony.i18n.getLocalizedString("strLblIssueVoucher"),
                    isVisible: true
                }
            });
            tmpSegMPMember.push(b);
        }
    }
    popupMPActivation.segMPActivatedMember.setData(tmpSegMPMember);
}

function onClikCancelMPactivatePopup() {
    glbMPActivationSegmentData = [];
    popupMPActivation.destroy(); // close the popup
}

function onClickIssueVoucher() {
    clearPreActivationPopupData(); //clear the preActivation Popup data before open
    kony.print("SJ : In onClickIssueVoucher");
    issueVoucherPopupSetting();
    var selectedIndex = popupMPActivation.segMPActivatedMember.selectedIndex;
    var selectedRow = parseInt(selectedIndex[1]);
    var selectedData = popupMPActivation.segMPActivatedMember.data[selectedRow];
    kony.print("SJ : In onClickIssueVoucher selectedData : " + JSON.stringify(selectedData));
    popupPreActivation.lblMemberName.text = selectedData.lblName;
    //glbIsMPActivationHomeScreenFlow = true;
    kony.print("SJ : In onClickIssueVoucher selectedData.MemberID : " + selectedData.MemberID);
    glbMPActivationSelectedData = selectedData;
    popupPreActivation.show();
}

function issueVoucherPopupSetting() {
    popupPreActivation.hboxBillingInfo.isVisible = false;
    popupPreActivation.lineBillingInfoSep.isVisible = false;
    popupPreActivation.hboxAddr1Section.isVisible = false;
    popupPreActivation.lineAddSep.isVisible = false;
    popupPreActivation.hboxAddressSection.isVisible = false;
    popupPreActivation.hboxEmailSection.isVisible = false;
    popupPreActivation.hboxVoucherNumber.isVisible = true;
    popupPreActivation.vboxCancelImage.isVisible = true;
    popupPreActivation.hboxName.isVisible = true;
    popupPreActivation.linenameSep.isVisible = true;
    IsPreActivation = FlowForScreens.PreActivation;
    popupPreActivation.lblVoucherNo.text = "Voucher Number";
    popupPreActivation.lblHeader.text = "Issue Voucher";
}