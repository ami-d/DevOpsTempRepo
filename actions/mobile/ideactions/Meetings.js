// This function is implemented to get the data for selected meeting location
function getMeetingsList() {
    try {
        //		getMeetingsfromDB();
        //if(count <= 0)
        //{

        var meetingService_inputparam = {};
        meetingService_inputparam["serviceID"] = GetMeetingsForLocation;
        meetingService_inputparam["searchId"] = "115";
        // TODO : Remove hardcoded data from search ID
        meetingService_inputparam["httpheaders"] = {};
        meetingService_inputparam["httpconfigs"] = {};
        meetingServiceResult = Network.makeServiceCall(meetingService_inputparam, meetingCallback);
        //}
    } catch (e) {
        GlobalException(e);
    }
}

/*
 * Callback function for Meeting service
 */

function meetingCallback(status, meetingServiceResult) {
    try {
        kony.print("Status is : " + status);
        if (status == 400) {


            //	alert(JSON.stringify(GetLocationbyZip));


            if (meetingServiceResult["MeetingsLists"].length > 0) {
                //alert("Data===="+JSON.stringify(GetLocationbyZip["LocationList"]));

                if (meetingServiceResult != null && meetingServiceResult != undefined && meetingServiceResult["MeetingsLists"] != null && meetingServiceResult["MeetingsLists"] != undefined) {

                    var mtngTypeId = "";
                    var meetingTime = "";
                    var meetingResponse_segmentMeetings_temp = [];
                    for (var i1 = 0; i1 < meetingServiceResult["MeetingsLists"].length; i1++) {

                        // meetingTypeIds += meetingServiceResult["MeetingsLists"][i1]["meetingTypeId"] + "," ;
                        // meetingTimes += meetingServiceResult["MeetingsLists"][i1]["meetingTime"] + "," ;

                        mtngTypeId = meetingServiceResult["MeetingsLists"][i1]["meetingTypeId"];
                        mtngTypeId = parseInt(mtngTypeId);
                        kony.print("Getting meeting type ID for Meeting type " + mtngTypeId);
                        var mtngTypeDesc = LocaitonLookupTable[mtngTypeId].toString();
                        kony.print("meeting type ID Desc " + mtngTypeDesc);

                        meetingTime = meetingServiceResult["MeetingsLists"][i1]["meetingTime"];
                        meetingTime = getFormatedValue(meetingTime);

                        meetingResponse_segmentMeetings_temp.push({
                            "lblMeetings": mtngTypeDesc + " - " + meetingTime
                        });
                    }
                    //                            meetingTypeIds = meetingTypeIds.replace(/,\s*$/, '');

                    //                            getLookupForMeeting(meetingTypeIds, 1);
                    frmSelectMeeting.segMeetingsList.removeAll();
                    frmSelectMeeting.segMeetingsList.setData(meetingResponse_segmentMeetings_temp);

                }
            }
            removeProgressView();
        }
    } catch (e) {
        GlobalException(e);
        removeProgressView();
    }


}


/*
 * This function gets the meeting from local DB
 */
function getMeetingsfromDB() {
    try {
        //	callInsertDbOperation("meetings",meetingRes);
        var todaydate = new Date();

        displayProgressView();

        frmSelectMeeting.lblDateInfo.text = formatDate();
        getMeetingsList();

        //var fields = [];
        /*	    callSelectDbOperation("meetings",fields,""); // first param is tablename (required),second is column array(optional),where clause (optional)
        	    if(dbSelectRes.length > 0 ){ // check for location records in local db
        				//alert("Record=="+JSON.stringify(dbSelectRes));
        	            var meeting_segmentRecentLocations_temp = [];
        	            for (var i1 = 0; i1 < dbSelectRes.length; i1++) {
        	                meeting_segmentRecentLocations_temp.push({
        	                   "lblMeetings":"Meeting At -"+dbSelectRes[i1]["meetingtime"]
        	                })
        	            }
        	            
        	            frmSelectMeeting.segMeetingsList.setData(meeting_segmentRecentLocations_temp);

        	    }
        	    else{
        	       	
        	    }
        */
    } catch (e) {
        GlobalException(e);
    }
    //frmSelectMeeting.show();
}

function getFormatedValue(inpt) {

    if (deviceLocale == "fr_CA") { //** MEG 6386
      
        return inpt.replace(/([0-9]{2})$/, "h\$1");

    } else {
        if (inpt == 1200) {
            return "12:00 " + getLocalizedString("strPM");
        } else if (inpt < 1200) {
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " " + getLocalizedString("strAM");
        } else if (inpt < 1300) {
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " " + getLocalizedString("strPM");
        } else if (inpt < 2400) {
            inpt = inpt - 1200;
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " " + getLocalizedString("strPM");
        } else {
            return "Invalid Input";
        }
    }
}


//** MEG 6386 function to change time format
function getFormatedTimeValue(inpt) {
    try {
        inpt = inpt.replace(/[h]/g, "");
        if (inpt == 1200) {
            return "12:00 " + getLocalizedString("strPM");
        } else if (inpt < 1200) {
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " " + getLocalizedString("strAM");
        } else if (inpt < 1300) {
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " " + getLocalizedString("strPM");
        } else if (inpt < 2400) {
            inpt = inpt - 1200;
            inpt = inpt.toString();
            return inpt.replace(/([0-9]{2})$/, ":\$1") + " " + getLocalizedString("strPM");
        } else {
            return "Invalid Input";
        }
    
	} catch (err) {
    	GlobalException(err);
	}
}
//** End