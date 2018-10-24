var GetMeetingListRes = {
    "opstatus": "0",
    "MeetingList": [{
        "ID": 1,
        "StartDate": 20011,
        "EndDate": 10121,
        "LocationID": "",
        "MeetingNumber": "",
        "DayCodeID": "1",
        "DayTimeCodeID": "08:01 am",
        "DTCTime": "",
        "DisplayValue": "",
        "LineOfBusinessID": "",
        "MeetingOccurrenceStatusID": "",
        "LeaderID": "",
        "MeetingStatus": "",
        "TallyStatus": "",
        "Description": "",
        "EndTime": "",
        "MeetingTypeID": "",
        "BackOfficeRefID": "",
        "MeetingTerminalID": "",
        "IsPersonalizedMeeting": "",
        "MeetingDate": "",
        "LastModifiedDate": ""
    }, {
        "ID": 1,
        "StartDate": 20011,
        "EndDate": 10121,
        "LocationID": "",
        "MeetingNumber": "",
        "DayCodeID": "1",
        "DayTimeCodeID": "08:01 am",
        "DTCTime": "",
        "DisplayValue": "",
        "LineOfBusinessID": "",
        "MeetingOccurrenceStatusID": "",
        "LeaderID": "",
        "MeetingStatus": "",
        "TallyStatus": "",
        "Description": "",
        "EndTime": "",
        "MeetingTypeID": "",
        "BackOfficeRefID": "",
        "MeetingTerminalID": "",
        "IsPersonalizedMeeting": "",
        "MeetingDate": "",
        "LastModifiedDate": ""
    }, {
        "ID": 1,
        "StartDate": 20011,
        "EndDate": 10121,
        "LocationID": "",
        "MeetingNumber": "",
        "DayCodeID": "1",
        "DayTimeCodeID": "08:01 am",
        "DTCTime": "",
        "DisplayValue": "",
        "LineOfBusinessID": "",
        "MeetingOccurrenceStatusID": "",
        "LeaderID": "",
        "MeetingStatus": "",
        "TallyStatus": "",
        "Description": "",
        "EndTime": "",
        "MeetingTypeID": "",
        "BackOfficeRefID": "",
        "MeetingTerminalID": "",
        "IsPersonalizedMeeting": "",
        "MeetingDate": "",
        "LastModifiedDate": ""
    }]
}
var getMeetingRequest = {
    "locationnumber": "",
    "deviceID": ""
}
var enrollNonMember = {
    "opstatus": "0",
    "Response": "Added successfully."
}
var enrollNonMemberCollection = [{
    "registration_id": 1,
    "first_name": "Praveen",
    "last_name": "Kalal",
    "dob": "28/01/1989",
    "gender": "male",
    "height": "168",
    "email": "praveen.kalal@infostretch.com",
    "isOfferRequired": "true",
    "updatedDatetime": "25/02/2014",
    "membership_type": "monthly",
    "member_weight": "200",
    "isAttendMeeting": "true",
    "notes": "this is test",
    "subscription_type": "monthly",
    "employee_id": 505,
    "sync_flag": "true",
    "title_id": 10,
    "site_id": 115
}];
/*
 Enroll non member
 */
function addMember() {
    try {
        var valid = new validationcls();
        var res = valid.CheckPhone("999_9999999").checkEmail("kalf gsd").validateHeight("").isValid();
        if (res) {
            displayProgressView();
            var enrollNonMember_inputparam = {};
            enrollNonMember_inputparam = enrollNonMemberCollection;
            enrollNonMember_inputparam["serviceID"] = enrollMember;
            enrollNonMember_inputparam["httpheaders"] = {};
            enrollNonMember_inputparam["httpconfigs"] = {};
            //enrollNonMember = Network.makeServiceCall(enrollNonMember_inputparam, enrollNonMemberCallback);
            enrollNonMemberCallback(400, enrollNonMember);
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
};

function enrollNonMemberCallback(status, enrollNonMemberCollection) {
    try {
        if (status == 400) {
            //	alert(JSON.stringify(GetLocationbyZip));
            if (enrollNonMember["opstatus"] == 0) {
                alertForMessages(enrollNonMember["Response"]);
                callInsertDbOperation("member", enrollNonMemberCollection);
                removeProgressView();
            } else {
                CommonErrHandler.networkError(enrollNonMember['opstatus'], enrollNonMember);
                removeProgressView();
            }
        } else if (status == 300) {
            CommonErrHandler.networkError(status, GetLocationbyZip);
            removeProgressView();
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}

function getMeetingsByLocation() {
    try {
        if (isNaN(getMeetingRequest["locationnumber"])) {
            displayProgressView();
            var GetMeetingsForLocations_inputparam = {};
            GetMeetingsForLocations_inputparam["serviceID"] = enrollMember;
            GetMeetingsForLocations_inputparam["locationnumber"] = getMeetingRequest["locationnumber"];
            GetMeetingsForLocations_inputparam["deviceID"] = getMeetingRequest["deviceID"];
            GetMeetingsForLocations_inputparam["httpheaders"] = {};
            GetMeetingsForLocations_inputparam["httpconfigs"] = {};
            //enrollNonMember = Network.makeServiceCall(GetMeetingsForLocations_inputparam, getMeetingsByLocationCallback);
            getMeetingsByLocationCallback(400, GetMeetingListRes);
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}

function getMeetingsByLocationCallback(status, GetMeetingListRes) {
    try {
        if (status == 400) {
            //	alert(JSON.stringify(GetLocationbyZip));
            if (GetMeetingListRes["opstatus"] == 0) {
                removeProgressView();
            } else {
                CommonErrHandler.networkError(GetMeetingListRes['opstatus'], GetMeetingListRes);
                removeProgressView();
            }
        } else if (status == 300) {
            CommonErrHandler.networkError(status, GetMeetingListRes);
            removeProgressView();
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }
}