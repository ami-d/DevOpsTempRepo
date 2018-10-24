var boLinkMember = {
    //service searchMember (by Username or Email)
    searchMemberByUsernameOrEmailViaWS: function(searchParamValue, searchParamRole, callback) {
        function linkMemberByUsernameOrEmailViaWSCallback(status, linkMemberResult) {
            try {
                if (status == 400) {
                    if (linkMemberResult["opstatus"] == 0) {
                        if (linkMemberResult["MembersList"].length > 0) {
                            callback.call(null, true, linkMemberResult["MembersList"]);
                        } else {
                            callback.call(null, false);
                        }
                    } else {
                        callback.call(null, false);
                    }
                } else if (status == 300) {
                    callback.call(null, false);
                }
            } catch (e) {
                GlobalException(e);
            }
        }
        var AdvanceSearchList_inputparam = {};
        AdvanceSearchList_inputparam["serviceID"] = Services.linkMember;
        AdvanceSearchList_inputparam["accessToken"] = glbSPAuthToken; // Need to replace with Authetication token
        AdvanceSearchList_inputparam["deviceID"] = gblDeviceID;
        AdvanceSearchList_inputparam["SPID"] = glbEmployeeId;
        AdvanceSearchList_inputparam["HeaderDate"] = "";
        AdvanceSearchList_inputparam["Source"] = gblSourceVal;
        AdvanceSearchList_inputparam["SearchText"] = searchParamValue;
        AdvanceSearchList_inputparam["WWRole"] = searchParamRole;
        AdvanceSearchList_inputparam["httpheaders"] = {};
        AdvanceSearchList_inputparam["httpconfigs"] = {};
        AdvanceSearchList = Network.makeServiceCall(AdvanceSearchList_inputparam, linkMemberByUsernameOrEmailViaWSCallback, false); //true to allow offline data access
    },
    getMemberLinkedwithUser: function(userIDorEmailID, callback) {
        kony.print("In getMemberLinkedwithUser");
        var whereClause = "where LinkType = 'Link' and (EmailID like '" + userIDorEmailID + "' or UserName like '" + userIDorEmailID + "')"; //LIMIT 0,1";
        function getMemberLinkedwithUserSuccessCallback(res) {
            kony.print("getMemberLinkedwithUserSuccessCallback Result of search == " + JSON.stringify(res));
            if (res.length <= 0) {
                callback.call(null, false);
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strMsgProfileAlreadyLinked"));
            }
        }
        DBMemberDetailsController.find(whereClause, getMemberLinkedwithUserSuccessCallback, eventErrorCallBack)
    },
    getMemberLinkedWithEnterpriseID: function(EnterpriseID, callback) {
        kony.print("EnterpriseID----" + EnterpriseID);
        var whereClause = "where EnterpriseID like '" + EnterpriseID + "'"; //LIMIT 0,1";
        function getMemberLinkedWithEnterpriseIDSuccessCallback(res) {
            kony.print("getMemberLinkedWithEnterpriseIDSuccessCallback Result of search == " + JSON.stringify(res));
            if (res.length <= 0) {
                callback.call(null, false);
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strMsgProfileAlreadyLinked"));
            }
        }
        DBMemberDetailsController.find(whereClause, getMemberLinkedWithEnterpriseIDSuccessCallback, eventErrorCallBack)
    }
}