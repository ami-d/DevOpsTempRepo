var dbCreationJson = [{
    "operation": "create",
    "tablename": "login",
    "fields": [{
        "name": "id",
        "datatype": "REAL",
        "isPrimary": true
    }, {
        "name": "username",
        "datatype": "TEXT",
        "isPrimary": false
    }, {
        "name": "password",
        "datatype": "TEXT",
        "isPrimary": false
    }]

}, {
    "operation": "create",
    "tablename": "location",
    "fields": [

        {
            "name": "locationnumber",
            "datatype": "REAL",
            "isPrimary": true
        }, {
            "name": "zip",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "displayvalue",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "added_date",
            "datatype": "TEXT",
            "isPrimary": false
        }
    ]

}, {
    "operation": "create",
    "tablename": "meetings",
    "fields": [

        {
            "name": "id",
            "datatype": "REAL",
            "isPrimary": true
        }, {
            "name": "meetingnumber",
            "datatype": "REAL",
            "isPrimary": false
        }, {
            "name": "locationnumber",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "startdate",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "enddate",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "dayofoccurence",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "meetingtime",
            "datatype": "TEXT",
            "isPrimary": false
        }
    ]

}, {
    "operation": "create",
    "tablename": "member",
    "fields": [

        {
            "name": "registration_id",
            "datatype": "REAL",
            "isPrimary": true
        }, {
            "name": "first_name",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "last_name",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "dob",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "gender",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "height",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "email",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "isOfferRequired",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "updatedDatetime",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "membership_type",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "member_weight",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "isAttendMeeting",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "notes",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "subscription_type",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "employee_id",
            "datatype": "REAL",
            "isPrimary": false
        }, {
            "name": "sync_flag",
            "datatype": "TEXT",
            "isPrimary": false
        }, {
            "name": "title_id",
            "datatype": "REAL",
            "isPrimary": false
        }, {
            "name": "site_id",
            "datatype": "REAL",
            "isPrimary": false
        }
    ]

}]

var meetingRes = [{
    "id": 1,
    "meetingnumber": 20011,
    "locationnumber": 10121,
    "startdate": "",
    "enddate": "",
    "dayofoccurence": "1",
    "meetingtime": "08:01 am"
}, {
    "id": 2,
    "meetingnumber": 20012,
    "locationnumber": 10122,
    "startdate": "",
    "enddate": "",
    "dayofoccurence": "2",
    "meetingtime": "09:31 am"
}, {
    "id": 3,
    "meetingnumber": 20013,
    "locationnumber": 10123,
    "startdate": "",
    "enddate": "",
    "dayofoccurence": "0",
    "meetingtime": "09:00 am"
}, {
    "id": 4,
    "meetingnumber": 20014,
    "locationnumber": 10124,
    "startdate": "",
    "enddate": "",
    "dayofoccurence": "2",
    "meetingtime": "02:30 pm"
}]
