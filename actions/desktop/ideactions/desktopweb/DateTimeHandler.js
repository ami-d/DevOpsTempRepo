var usDateFormat24 = "dd/mm/yyyy HH:NN:SS";
var usDateFormat12 = "dd/mm/yyyy HH:NN:SS AA";
var frDateFormat24 = "mm/dd/yyyy HH:NN:SS"
var frDateFormat12 = "mm/dd/yyyy HH:NN:SS AA"
    /**
     * Function for Date Time Format
     * @param {} dateParam (dateparam is required date in Mar 24, 2014 or 03/24/2014 or standerd date format)
     * @param {} hoursFormat (required numerical value 12 or 24)
     * @param {} formatString (required date format with hours)
     * @returns {} formattedDate
     */
function supportTime(dateParam, hoursFormat, formatString) {
    var formattedDate;
    dateParam = new Date(dateParam);
    if (hoursFormat == undefined || hoursFormat == "") hoursFormat = "24";
    if (formatString == undefined || formatString == "") {
        if (deviceLocale == "fr_FR") {
            if (hoursFormat == 12) formattedDate = formatDateTime(dateParam, frDateFormat12);
            else if (hoursFormat == 24) formattedDate = formatDateTime(dateParam, frDateFormat24);
        } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
        {
            if (hoursFormat == 12) formattedDate = formatDateTime(dateParam, usDateFormat12);
            else if (hoursFormat == 24) formattedDate = formatDateTime(dateParam, usDateFormat24);
        }
    } else {
        formattedDate = formatDateTime(dateParam, formatString);
    }
    return formattedDate;
}

function checkDate() {
    var formatString = "yyyy-mm-ddTHH:NN:SS";
    var fDate = supportTime("Mar 24, 2014", 12, formatString);
    kony.print("Formatted Date : " + fDate);
}
/**
 * Method for format date according to specific format type
 * @param {} formatDate
 * @param {} formatString
 * @returns {} formatString (formatted string)
 */
function formatDateTime(formatDate, formatString) {
    if (formatDate instanceof Date) {
        var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        var yyyy = formatDate.getFullYear();
        var yy = yyyy.toString().substring(2);
        var m, mm;
        if (isNaN(m)) {
            m = formatDate.getMonth() + 1;
            mm = m < 10 ? "0" + m : m;
            mmm = months[m - 1];
        } else {
            m = formatDate.getMonth();
            mm = m < 10 ? "0" + m : m;
            mmm = months[m];
        }
        var d = formatDate.getDate();
        var dd = d < 10 ? "0" + d : d;
        var H = formatDate.getHours();
        var HH = H < 10 ? "0" + H : H;
        var N = formatDate.getMinutes();
        var NN = N < 10 ? "0" + N : N;
        var S = formatDate.getSeconds();
        var SS = S < 10 ? "0" + S : S;
        var AA;
        var T;
        if (formatString.indexOf("AA") > 0) {
            if (HH > 12) {
                HH = HH - 12;
                AA = "PM";
            } else {
                AA = "AM";
            }
        }
        if (formatString.indexOf("T") > 0) {
            T = "T";
        }
        formatString = formatString.replace(/yyyy/i, yyyy);
        formatString = formatString.replace(/yy/i, yy);
        if (formatString.indexOf("mmm") != -1) {
            formatString = formatString.replace(/mmm/i, mmm);
        } else {
            formatString = formatString.replace(/mm/i, mm);
            formatString = formatString.replace(/m/i, m);
        }
        formatString = formatString.replace(/dd/i, dd);
        formatString = formatString.replace(/d/i, d);
        formatString = formatString.replace(/HH/i, HH);
        formatString = formatString.replace(/H/i, H);
        formatString = formatString.replace(/NN/i, NN);
        formatString = formatString.replace(/N/i, N);
        formatString = formatString.replace(/SS/i, SS);
        formatString = formatString.replace(/S/i, S);
        formatString = formatString.replace(/AA/i, AA);
        formatString = formatString.replace(/T/i, T);
        return formatString;
    } else {
        return "";
    }
}
/**
 * Function for support date and time according to device local
 * @param {} date ;
 * @param {} offset (Require in '+5.5' or '-5' format)
 * @param {} dateformat
 * @returns {} date
 */
function supportTimeZone(dateParam, offset, dateFormat) {
    if (dateParam == undefined) dateParam = new Date();
    //offset = "-5";
    var convertedDate;
    var newDateTime = calculateTimeZone(dateParam, offset);
    convertedDate = formatDateTime(newDateTime, ((dateFormat == undefined) || (dateFormat == "")) ? usDateFormat24 : dateFormat);
    return convertedDate;
}
/**
 * Function to calculate local time in a different country
 * @param {} date 
 * @param {} offset (Require country's UTC offset)
 * @returns {} Date
 */
function calculateTimeZone(dateParam, offset) {
    // create Date object for current location
    if (dateParam == undefined) dateParam = new Date();
    // convert to msec add local time zone offset get UTC time in msec
    var utc = dateParam.getTime() + (dateParam.getTimezoneOffset() * 60000);
    // create new Date object for different country using supplied offset
    var newDate = new Date(utc + (3600000 * offset));
    return newDate;
}
// change Date formate to dd/mm/yyyy to mm/dd/yyyy and vice versa
function changeDateFormate(dateParam, dateFormat) {
    kony.print("dateParam ------------" + dateParam + "---------dateFormat-----------" + dateFormat);
    if (checkValidString(dateParam)) {
        var tmp = dateParam.split('/');
        var date;
        if (dateFormat == 'dd/mm/yyyy') {
            date = tmp[1] + '/' + tmp[0] + '/' + tmp[2];
        } else if (dateFormat == 'mm/dd/yyyy') {
            date = tmp[0] + '/' + tmp[1] + '/' + tmp[2];
        } else if (dateFormat == 'yyyy/mm/dd') { //** MEG 6386
            date = tmp[2] + '/' + tmp[0] + '/' + tmp[1];
        }
        kony.print("Formatted Date ++++" + date);
        return date;
    } else {
        return "";
    }
}

function formatDateMemberSearch(fDate) {
    kony.print("fDate ===>>> " + fDate);
    if (fDate != undefined && fDate != "") {
        var dateArray = fDate.split("-");
        kony.print("dateArray[0]===>>" + dateArray[0]); //YEAR
        kony.print("dateArray[1]===>>" + dateArray[1]); //MONTH
        kony.print("dateArray[2]===>>" + dateArray[2]); // DATE
        var finalDate;
        if (deviceLocale == "fr_FR") {
            finalDate = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
            kony.print("finalDate------___>>>>>" + finalDate);
            return finalDate;
        } else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA")
        {
            finalDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
            kony.print("finalDate------___>>>>>" + finalDate);
            return finalDate;
        }
    } else {
        return "";
    }
}

function formattedDate(fDate) {
    kony.print("fDate ===>>> " + fDate);
    if (fDate != undefined && fDate != "") {
        var timeArray = fDate.split("T");
        var dateArray = timeArray[0].split("-");
        kony.print("dateArray[0]===>>" + dateArray[0]); //YEAR
        kony.print("dateArray[1]===>>" + dateArray[1]); //MONTH
        kony.print("dateArray[2]===>>" + dateArray[2]); // DATE
        if (deviceLocale == "fr_FR") {
            return dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
            //kony.print("finalDate------___>>>>>"+finalDate);
        } else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA")
        {
            return dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
            //kony.print("finalDate------___>>>>>"+finalDate);
        }
    } else {
        return "";
    }
}

function getDateAfterOneMonth() {
    var fromdate = new Date();
    var dd = fromdate.getDate();
    var fromdate1;
    var mm;
    var yyyy;
    if (fromdate.getMonth() == 11) {
        mm = 1;
        yyyy = fromdate.getFullYear() + 1;
    } else {
        mm = fromdate.getMonth() + 2;
        yyyy = fromdate.getFullYear();
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (deviceLocale == "fr_FR") //DD/MM/YYYY
    {
        fromdate1 = dd + "/" + mm + "/" + yyyy;
        kony.print("This is in Common function formattedDate Value of fromdate1 " + fromdate1);
        kony.print("This is in Common function formattedDate Value of deviceLocale " + deviceLocale);
        kony.print("This is in Common function formattedDate Value of mm " + mm);
        kony.print("This is in Common function formattedDate Value of dd " + dd);
        kony.print("This is in Common function formattedDate Value of yyyy " + yyyy);
    } else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA")//MM/DD/YYYY  03 MM 04 DD 2014 YYYY
    {
        fromdate1 = mm + "/" + dd + "/" + yyyy;
        kony.print("This is in Common function formattedDate Value of fromdate1 " + fromdate1);
        kony.print("This is in Common function formattedDate Value of deviceLocale " + deviceLocale);
        kony.print("This is in Common function formattedDate Value of mm " + mm);
        kony.print("This is in Common function formattedDate Value of dd " + dd);
        kony.print("This is in Common function formattedDate Value of yyyy " + yyyy);
    }
    return fromdate1;
}

function getDateAfterThreeMonth() {
    var fromdate = new Date();
    var dateAfterThreeMonth = new Date(fromdate.setMonth(fromdate.getMonth() + 3));
    var dd = dateAfterThreeMonth.getDate();
    var mm = dateAfterThreeMonth.getMonth() + 1;
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    var yyyy = dateAfterThreeMonth.getFullYear();
    if (deviceLocale == "fr_FR") //DD/MM/YYYY
    {
        return dd + "/" + mm + "/" + yyyy;
    } else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA")//MM/DD/YYYY  03 MM 04 DD 2014 YYYY
    {
        return mm + "/" + dd + "/" + yyyy;
    }
}
//Added for MEGCA-301
function getDateAfterSixMonth() {
    var fromdate = new Date();
    var dateAfterThreeMonth = new Date(fromdate.setMonth(fromdate.getMonth() + 6));
    var dd = dateAfterThreeMonth.getDate();
    var mm = dateAfterThreeMonth.getMonth() + 1;
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    var yyyy = dateAfterThreeMonth.getFullYear();
    if (deviceLocale == "fr_FR") //DD/MM/YYYY
    {
        return dd + "/" + mm + "/" + yyyy;
    } else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA")//MM/DD/YYYY  03 MM 04 DD 2014 YYYY
    {
        return mm + "/" + dd + "/" + yyyy;
    }
}

function getDateAfterXMonths(numberofMonths) {
    var fromdate = new Date();
    var dateAfterXMonth = new Date(fromdate.setMonth(fromdate.getMonth() + parseInt(numberofMonths) + 1));
    var dd = dateAfterXMonth.getDate();
    var mm = dateAfterXMonth.getMonth();
    //mm = "0" + mm.substring(mm.length - 2, mm.length);
    //dd = "0" + dd.substring(dd.length - 2, dd.length);
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    var yyyy = dateAfterXMonth.getFullYear();
    if (in_array(deviceLocale, Countries["US"]) || in_array(deviceLocale, Countries["CA"])) {
        return mm + "/" + dd + "/" + yyyy;
    } else {
        return dd + "/" + mm + "/" + yyyy;
    }
    /*if (deviceLocale == "fr_FR") //DD/MM/YYYY
    {
        return dd + "/" + mm + "/" + yyyy;
    } else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA")//MM/DD/YYYY  03 MM 04 DD 2014 YYYY
    {
        return mm + "/" + dd + "/" + yyyy;
    }*/
}

function formattJsDefaultDate() {
    var fromdate = new Date();
    var dd = fromdate.getDate();
    var fromdate1;
    var mm = fromdate.getMonth() + 1;
    var yyyy = fromdate.getFullYear();;
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (deviceLocale == "fr_FR") //DD/MM/YYYY
    {
        fromdate1 = dd + "/" + mm + "/" + yyyy;
        kony.print("This is in Common function formattedDate Value of fromdate1 " + fromdate1);
        kony.print("This is in Common function formattedDate Value of deviceLocale " + deviceLocale);
        kony.print("This is in Common function formattedDate Value of mm " + mm);
        kony.print("This is in Common function formattedDate Value of dd " + dd);
        kony.print("This is in Common function formattedDate Value of yyyy " + yyyy);
    } else //if(deviceLocale == "en_US"  || deviceLocale=="en_CA"	)//MM/DD/YYYY  03 MM 04 DD 2014 YYYY
    {
        fromdate1 = mm + "/" + dd + "/" + yyyy;
        kony.print("This is in Common function formattedDate Value of fromdate1 " + fromdate1);
        kony.print("This is in Common function formattedDate Value of deviceLocale " + deviceLocale);
        kony.print("This is in Common function formattedDate Value of mm " + mm);
        kony.print("This is in Common function formattedDate Value of dd " + dd);
        kony.print("This is in Common function formattedDate Value of yyyy " + yyyy);
    }
    return fromdate1;
}

function calculateWeeks(fromDate, week) {
    var month, day, year, addDay;
    month = fromDate.getMonth() + 1;
    day = fromDate.getDate();
    year = fromDate.getFullYear();
    addDay = week * 7;
    if (!addDay) {
        return false;
    }
    if ((validDate(day, month, year, "starting"))) {
        return false;
    }
    if (checkDaysInput(addDay)) {
        return false;
    }
    var dayofweekarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var datestring1 = montharray[month - 1] + " " + day + ", " + year + " 04:00:00";
    datestring1 = Date.parse(datestring1);
    var datestring2 = (datestring1 + (addDay * 24 * 60 * 60 * 1000));
    //var datestring2 = (datestring1 - (addDay*24*60*60*1000));
    datestring2 = new Date(datestring2);
    var resultyear = datestring2.getFullYear();
    var resultmonth = datestring2.getMonth();
    resultmonth = montharray[resultmonth];
    var resultday = datestring2.getDate();
    var resultdayofweek = datestring2.getDay();
    resultdayofweek = dayofweekarray[resultdayofweek];
    end4 = "th";
    if (resultday == 1 || resultday == 21 || resultday == 31) end4 = "st";
    if (resultday == 2 || resultday == 22) end4 = "nd";
    if (resultday == 3 || resultday == 23) end4 = "rd";
    //var resultday = resultday += end4;
    // write the results into the form
    return resultmonth + " " + resultday + ", " + resultyear;
}

function checkDaysInput(field) {
    for (var i = 0; i < field.length; i++) {
        var ch = field.substring(i, i + 1);
        if (ch < "0" || "9" < ch) {
            alertForMessages("There is a problem with the number of days to add or subtract.\n" + "This must be a whole number only, and must be positive.\n" + "'" + field + "' is not a valid number to use.\n" + "Please try again.");
            return true;
        }
    }
    return false; // field is valid
}
// check whether date is a valid date
function validDate(day, month, year, startOrEnd) {
    // check for 30 day months
    if ((month == "April" || month == "June" || month == "September" || month == "November") && day == 31) {
        alertForMessages("There is a problem with your " + startOrEnd + " date.\n" + month + " does not have 31 days.");
        return true;
    }
    // check for February 29th
    if (month == "February") {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            alertForMessages("There is a problem with your " + startOrEnd + " date.\n" + "February " + year + " does not have " + day + " days.");
            return true;
        }
    }
    return false; // date is valid
}
// datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
function dateDiff(datepart, fromdate, todate) {
    datepart = datepart.toLowerCase();
    var diff = todate - fromdate;
    var divideBy = {
        w: 604800000,
        d: 86400000,
        h: 3600000,
        n: 60000,
        s: 1000
    };
    return Math.floor(diff / divideBy[datepart]);
}

function checkExpirationDate(expdate) {
    kony.print("::ExpirationDate Check = " + expdate);
    if (checkValidString(expdate)) {
        var expDateFormatted = formattedDate(expdate);
        var diff = calculateDateDifference(new Date(), new Date(expDateFormatted));
        //if -ve then return true - Expired - glbIsSelectedMemberExpired
        return diff < 0 ? true : false;
    }
    return false;
}
/*
	function getSaturdayOfWeek 
	inputparam:validate expiry date of 20 week pass buy now, flag to get first and last day 
	return saturday of the expdate's week, or first or last day of expdate's week
*/
function getSaturdayOfWeek(expDate, getFirstLastDayFlag) {
    try {
        kony.print("IS expdate inside f==>" + expDate);
        var curr = new Date(expDate);
        kony.print("IS curr of week===>" + curr);
        day = curr.getDay();
        kony.print("IS day of week===>" + day);
        firstday = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000); //will return firstday (ie sunday) of the week
        kony.print("IS firstday of week===>" + firstday);
        lastday = new Date(firstday.getTime() + 60 * 60 * 24 * 6 * 1000);
        kony.print("IS lastday of week===>" + lastday);
        if (getFirstLastDayFlag) {
            kony.print("IS inside flag");
            return firstday + "|" + lastday;
        } else {
            return lastday;
        }
    } catch (e) {
        GlobalException(e);
    }
}

function getDateAsPerDeviceLocale() {
    var todayDate = new Date();
    var dd = todayDate.getDate();
    var mm = todayDate.getMonth() + 1;
    var yyyy = todayDate.getFullYear();
    var dateData;
    if (deviceLocale == "fr_FR") {
        dateData = dd + "/" + mm + "/" + yyyy;
    } else {
        dateData = mm + "/" + dd + "/" + yyyy;
    }
    return dateData;
}