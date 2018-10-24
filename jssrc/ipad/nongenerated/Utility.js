var countryCode = "1";
var memberWtData = '{"memberWtOb":[' + '{"MemberID":"10","MemberWeight":"150","ID":15,"EntryDate":' + (new Date(2014, 1, 1).getTime()) + ' },' + '{"MemberID":"10","MemberWeight":"150","ID":16,"EntryDate":' + (new Date(2014, 1, 5).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":17,"EntryDate":' + (new Date(2014, 1, 1).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":18,"EntryDate":' + (new Date(2014, 1, 5).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":19,"EntryDate":' + (new Date(2014, 0, 1).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":1,"EntryDate":' + (new Date(2014, 2, 1).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":2,"EntryDate":' + (new Date(2014, 2, 8).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":3,"EntryDate":' + (new Date(2014, 2, 17).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":4,"EntryDate":' + (new Date(2014, 2, 22).getTime()) + ' },' + '{"MemberID":"11","MemberWeight":"150","ID":20,"EntryDate":' + (new Date(2014, 2, 31).getTime()) + ' },' + '{"MemberID":"12","MemberWeight":"175","ID":5,"EntryDate":' + (new Date(2014, 3, 1).getTime()) + '},' + '{"MemberID":"16","MemberWeight":"161","ID":7,"EntryDate":' + (new Date(2014, 3, 1).getTime()) + '},' + '{"MemberID":"13","MemberWeight":"200","ID":6,"EntryDate":' + (new Date(2014, 2, 15).getTime()) + '}' + ']}';
var milestoneLookUpData = '{"MilestoneLookUp":[' + '{ "MilestoneID":"0" , "MilestoneName":"None", "MilestoneTypeID": "1","MilestonTypName": "Manual", "MilestoneDesc": "No Milestone"},' + '{ "MilestoneID":"1" , "MilestoneName":"Give Award", "MilestoneTypeID": "1", "MilestonTypName": "Manual", "MilestoneDesc": "Award has been given to the member"},' + '{ "MilestoneID":"2" , "MilestoneName":"10% Award", "MilestoneTypeID": "7", "MilestonTypName": "TenPercent", "MilestoneDesc": "Member has lost 10% of start weight"},' + '{ "MilestoneID":"3" , "MilestoneName":"Reached Goal", "MilestoneTypeID": "5", "MilestonTypName": "Goal", "MilestoneDesc": "Member has reached their goal weight"},' + '{ "MilestoneID":"4" , "MilestoneName":"16 Week Award", "MilestoneTypeID": "4", "MilestonTypName": "Attendance", "MilestoneDesc": "Member has successfully completed 16 weeks"},' + '{ "MilestoneID":"8" , "MilestoneName":"25lb Award", "MilestoneTypeID": "2", "MilestonTypName": "Value", "MilestoneDesc": "Member has achieved the 25lb award"},' + '{ "MilestoneID":"11" , "MilestoneName":"50lb Award", "MilestoneTypeID": "2", "MilestonTypName": "Value", "MilestoneDesc": "Member has achieved the 50lb award"},' + '{ "MilestoneID":"13" , "MilestoneName":"Reached Lifetime", "MilestoneTypeID": "6", "MilestonTypName": "Lifetime", "MilestoneDesc": "Member reached Lifetime status"},' + '{ "MilestoneID":"15" , "MilestoneName":"75lb Award", "MilestoneTypeID": "2", "MilestonTypName": "Value", "MilestoneDesc": "Member has achieved the 75lb award"},' + '{ "MilestoneID":"18" , "MilestoneName":"100lb Award", "MilestoneTypeID": "2", "MilestonTypName": "Value", "MilestoneDesc": "Member has achieved the 100lb award"},' + '{ "MilestoneID":"26" , "MilestoneName":"5% Award", "MilestoneTypeID": "8", "MilestonTypName": "FivePercent", "MilestoneDesc": "Member has lost 5% of start weight"},' + '{ "MilestoneID":"27" , "MilestoneName":"Recruitment Opportunity", "MilestoneTypeID": "9", "MilestonTypName": "Recruitment", "MilestoneDesc": "Member is eligible for recruitment with WeightWatchers"},' + '{ "MilestoneID":"28" , "MilestoneName":"Reached Personal Goal", "MilestoneTypeID": "10", "MilestonTypName": "PersonalGoal", "MilestoneDesc": "Member has reached their personal goal"},' + '{ "MilestoneID":"29" , "MilestoneName":"2 WEEK AWARD", "MilestoneTypeID": "4", "MilestonTypName": "Attendance", "MilestoneDesc": "Member Completed 2 Weeks"},' + '{ "MilestoneID":"30" , "MilestoneName":"3 WEEK AWARD", "MilestoneTypeID": "4", "MilestonTypName": "Attendance", "MilestoneDesc": "Member Completed 2 Weeks"},' + '{ "MilestoneID":"31" , "MilestoneName":"5lb Award", "MilestoneTypeID": "11", "MilestonTypName": "Recurring Value", "MilestoneDesc": "Member has achieved the recurring 5lb Award"}' + ']}';
var prodQtyLookUpData = '{"ProdMaxQtyLookUp": [' + '{"Id":"1","ProductSKU":"30117","MaxQuantity":"10"},' + '{"Id":"2","ProductSKU":"30118","MaxQuantity":"10"},' + '{"Id":"3","ProductSKU":"30115","MaxQuantity":"10"},' + '{"Id":"4","ProductSKU":"30119","MaxQuantity":"10"},' + '{"Id":"5","ProductSKU":"30128","MaxQuantity":"10"},' + '{"Id":"6","ProductSKU":"21103","MaxQuantity":"10"},' + '{"Id":"7","ProductSKU":"21104","MaxQuantity":"10"},' + '{"Id":"8","ProductSKU":"30125","MaxQuantity":"10"},' + '{"Id":"9","ProductSKU":"30116","MaxQuantity":"10"},' + '{"Id":"10","ProductSKU":"21115","MaxQuantity":"10"},' + '{"Id":"11","ProductSKU":"30114","MaxQuantity":"10"},' + '{"Id":"12","ProductSKU":"30112","MaxQuantity":"10"},' + '{"Id":"13","ProductSKU":"11479","MaxQuantity":"10"},' + '{"Id":"14","ProductSKU":"11465","MaxQuantity":"10"},' + '{"Id":"15","ProductSKU":"11470","MaxQuantity":"10"},' + '{"Id":"16","ProductSKU":"11475","MaxQuantity":"10"},' + '{"Id":"17","ProductSKU":"11456","MaxQuantity":"10"},' + '{"Id":"18","ProductSKU":"11471","MaxQuantity":"10"},' + '{"Id":"19","ProductSKU":"11474","MaxQuantity":"10"},' + '{"Id":"20","ProductSKU":"30110","MaxQuantity":"10"},' + '{"Id":"21","ProductSKU":"21036","MaxQuantity":"10"},' + '{"Id":"22","ProductSKU":"11863","MaxQuantity":"10"},' + '{"Id":"23","ProductSKU":"11864","MaxQuantity":"10"},' + '{"Id":"24","ProductSKU":"21042","MaxQuantity":"10"},' + '{"Id":"25","ProductSKU":"11862","MaxQuantity":"10"},' + '{"Id":"26","ProductSKU":"11483","MaxQuantity":"10"},' + '{"Id":"27","ProductSKU":"11484","MaxQuantity":"10"},' + '{"Id":"28","ProductSKU":"50019","MaxQuantity":"10"},' + '{"Id":"29","ProductSKU":"21026","MaxQuantity":"10"},' + '{"Id":"30","ProductSKU":"21025","MaxQuantity":"10"},' + '{"Id":"31","ProductSKU":"21168","MaxQuantity":"10"},' + '{"Id":"32","ProductSKU":"50048","MaxQuantity":"10"},' + '{"Id":"33","ProductSKU":"50040","MaxQuantity":"10"},' + '{"Id":"34","ProductSKU":"50039","MaxQuantity":"10"},' + '{"Id":"35","ProductSKU":"12009","MaxQuantity":"2"},' + '{"Id":"36","ProductSKU":"11998","MaxQuantity":"2"},' + '{"Id":"37","ProductSKU":"30043","MaxQuantity":"2"},' + '{"Id":"38","ProductSKU":"12008","MaxQuantity":"2"},' + '{"Id":"39","ProductSKU":"1198604","MaxQuantity":"2"},' + '{"Id":"40","ProductSKU":"12005","MaxQuantity":"2"},' + '{"Id":"41","ProductSKU":"12006","MaxQuantity":"2"},' + '{"Id":"42","ProductSKU":"12007","MaxQuantity":"2"},' + '{"Id":"43","ProductSKU":"120024","MaxQuantity":"2"},' + '{"Id":"44","ProductSKU":"11966","MaxQuantity":"2"},' + '{"Id":"45","ProductSKU":"11989","MaxQuantity":"2"},' + '{"Id":"46","ProductSKU":"11965","MaxQuantity":"2"},' + '{"Id":"47","ProductSKU":"30060","MaxQuantity":"2"},' + '{"Id":"48","ProductSKU":"11506","MaxQuantity":"2"},' + '{"Id":"49","ProductSKU":"30055","MaxQuantity":"2"},' + '{"Id":"50","ProductSKU":"30072","MaxQuantity":"2"},' + '{"Id":"51","ProductSKU":"30047","MaxQuantity":"2"},' + '{"Id":"52","ProductSKU":"55011","MaxQuantity":"2"},' + '{"Id":"53","ProductSKU":"11517","MaxQuantity":"2"},' + '{"Id":"54","ProductSKU":"11508","MaxQuantity":"2"},' + '{"Id":"55","ProductSKU":"11477","MaxQuantity":"2"},' + '{"Id":"56","ProductSKU":"30040","MaxQuantity":"2"},' + '{"Id":"57","ProductSKU":"11503","MaxQuantity":"2"},' + '{"Id":"58","ProductSKU":"11504","MaxQuantity":"2"},' + '{"Id":"59","ProductSKU":"11502","MaxQuantity":"2"},' + '{"Id":"60","ProductSKU":"30061","MaxQuantity":"2"},' + '{"Id":"61","ProductSKU":"11993","MaxQuantity":"2"},' + '{"Id":"62","ProductSKU":"11509","MaxQuantity":"2"},' + '{"Id":"63","ProductSKU":"30038","MaxQuantity":"10"},' + '{"Id":"64","ProductSKU":"30036","MaxQuantity":"10"},' + '{"Id":"65","ProductSKU":"30035","MaxQuantity":"10"},' + '{"Id":"66","ProductSKU":"30037","MaxQuantity":"10"},' + '{"Id":"67","ProductSKU":"30039","MaxQuantity":"10"},' + '{"Id":"68","ProductSKU":"30041","MaxQuantity":"10"},' + '{"Id":"69","ProductSKU":"11299","MaxQuantity":"2"},' + '{"Id":"70","ProductSKU":"11978","MaxQuantity":"2"},' + '{"Id":"71","ProductSKU":"30111","MaxQuantity":"10"},' + '{"Id":"72","ProductSKU":"11860","MaxQuantity":"10"},' + '{"Id":"73","ProductSKU":"11450","MaxQuantity":"10"},' + '{"Id":"74","ProductSKU":"50037","MaxQuantity":"10"},' + '{"Id":"75","ProductSKU":"50035","MaxQuantity":"10"},' + '{"Id":"76","ProductSKU":"21030","MaxQuantity":"10"},' + '{"Id":"77","ProductSKU":"30025","MaxQuantity":"2"},' + '{"Id":"78","ProductSKU":"30018","MaxQuantity":"2"},' + '{"Id":"79","ProductSKU":"11988","MaxQuantity":"2"},' + '{"Id":"80","ProductSKU":"11186","MaxQuantity":"2"},' + '{"Id":"81","ProductSKU":"50036","MaxQuantity":"10"},' + '{"Id":"82","ProductSKU":"50018","MaxQuantity":"10"},' + '{"Id":"83","ProductSKU":"21037","MaxQuantity":"10"},' + '{"Id":"84","ProductSKU":"11505","MaxQuantity":"2"},' + '{"Id":"85","ProductSKU":"11981","MaxQuantity":"2"},' + '{"Id":"86","ProductSKU":"11462","MaxQuantity":"10"},' + '{"Id":"87","ProductSKU":"30107","MaxQuantity":"10"},' + '{"Id":"88","ProductSKU":"30109","MaxQuantity":"10"},' + '{"Id":"89","ProductSKU":"50034","MaxQuantity":"10"},' + '{"Id":"90","ProductSKU":"50026","MaxQuantity":"10"},' + '{"Id":"91","ProductSKU":"50032","MaxQuantity":"10"},' + '{"Id":"92","ProductSKU":"21034","MaxQuantity":"10"},' + '{"Id":"93","ProductSKU":"30101","MaxQuantity":"10"},' + '{"Id":"94","ProductSKU":"11466","MaxQuantity":"10"},' + '{"Id":"95","ProductSKU":"21035","MaxQuantity":"10"},' + '{"Id":"96","ProductSKU":"30033","MaxQuantity":"2"},' + '{"Id":"97","ProductSKU":"30024","MaxQuantity":"2"},' + '{"Id":"98","ProductSKU":"30023","MaxQuantity":"2"},' + '{"Id":"99","ProductSKU":"11461","MaxQuantity":"10"},' + '{"Id":"100","ProductSKU":"11464","MaxQuantity":"10"},' + '{"Id":"101","ProductSKU":"11187","MaxQuantity":"2"},' + '{"Id":"102","ProductSKU":"11250","MaxQuantity":"2"},' + '{"Id":"103","ProductSKU":"11468","MaxQuantity":"10"},' + '{"Id":"104","ProductSKU":"11463","MaxQuantity":"10"},' + '{"Id":"105","ProductSKU":"11987","MaxQuantity":"2"},' + '{"Id":"106","ProductSKU":"50033","MaxQuantity":"10"},' + '{"Id":"107","ProductSKU":"30113","MaxQuantity":"10"},' + '{"Id":"108","ProductSKU":"11467","MaxQuantity":"2"},' + '{"Id":"109","ProductSKU":"11980","MaxQuantity":"2"},' + '{"Id":"110","ProductSKU":"21113","MaxQuantity":"10"},' + '{"Id":"111","ProductSKU":"30105","MaxQuantity":"10"},' + '{"Id":"112","ProductSKU":"11982","MaxQuantity":"2"},' + '{"Id":"113","ProductSKU":"50031","MaxQuantity":"10"},' + '{"Id":"114","ProductSKU":"11968","MaxQuantity":"2"},' + '{"Id":"115","ProductSKU":"11983","MaxQuantity":"2"},' + '{"Id":"116","ProductSKU":"11183","MaxQuantity":"2"},' + '{"Id":"117","ProductSKU":"11216","MaxQuantity":"2"}' + ']}';
var SKUCategoryList = [{
    "Category": "Prepaid_Coupons",
    "Locale": Countries["US"],
    "SKUList": "250,450,455,375,385,490,373,430,431,432"
}, {
    "Category": "Current_Attendance",
    "Locale": Countries["US"],
    "SKUList": "500,507"
}, {
    "Category": "MissedWeek",
    "Locale": Countries["US"],
    "SKUList": "702,703,720,480"
}, {
    "Category": "Enrollments",
    "Locale": Countries["US"],
    "SKUList": "400,490,450,455,481,373,430,431,432"
}, {
    "Category": "PaidLTAttendance",
    "Locale": Countries["US"],
    "SKUList": "501,503,511"
}, {
    "Category": "PrepaidAttendance",
    "Locale": Countries["US"],
    "SKUList": "385,375,250,490,373"
}, {
    "Category": "FreeLTAttendance",
    "Locale": Countries["US"],
    "SKUList": "350"
}, {
    "Category": "MPSold",
    "Locale": Countries["US"],
    "SKUList": "331"
}, {
    "Category": "ThreeMPSold",
    "Locale": Countries["US"],
    "SKUList": "496"
}, {
    "Category": "ThreeMPLTCSold",
    "Locale": Countries["US"],
    "SKUList": "433"
}, {
    "Category": "SixMPSold",
    "Locale": Countries["US"],
    "SKUList": "383"
}, {
    "Category": "SixMPLTCSold",
    "Locale": Countries["US"],
    "SKUList": "434"
}, {
    "Category": "QueryCombination",
    "Locale": Countries["US"],
    "SKUList": "500,702,703,720,400,450,455,501,503,507,481,490,480,511,373,430,431,432,269,220,262,263,264,265,266,267,268,270,221,315,316,317,318,319,642,222,656,643,225,657,996,995,994,989,988,987,986,985,990" //** 26 week SKU added//** SKU 262 Added //**MEG 7274
}, {
    "Category": "Applied_PrePaid_Coupon",
    "Locale": Countries["US"],
    "SKUList": "702,703,720,480"
}, {
    "Category": "NumOfMonthlyPassLTAttd",
    "Locale": Countries["US"],
    "SKUList": "375"
}, {
    "Category": "Applied_Discount",
    "Locale": Countries["US"],
    "SKUList": "500,507,702,703,720,480"
}, {
    "Category": "Employee_Attendance",
    "Locale": Countries["US"],
    "SKUList": "410"
}, {
    "Category": "SaleReport",
    "Locale": Countries["US"],
    "SKUList": "331,496"
}, {
    "Category": "New_Enrollments",
    "Locale": Countries["US"],
    "SKUList": "642,222,656,262,263,264,265,266,267,268,269,270,315,316,317,318,319,996,995,994,989,988,987,986,985,990" //** 26 week SKU added//**MEG 7274 //** 500 remove MEG 7247//** SKU 262 Added
}, {
    "Category": "Cont_Enrollments",
    "Locale": Countries["US"],
    "SKUList": "643,225,657" //**MEG 7274
}, {
    "Category": "Paid_LT",
    "Locale": Countries["US"],
    "SKUList": "501"
}, {
    "Category": "Free_LT",
    "Locale": Countries["US"],
    "SKUList": "350"
}, {
    "Category": "PrePaid",
    "Locale": Countries["US"],
    "SKUList": "250"
}, {
    "Category": "BridgeSeries",
    "Locale": Countries["US"],
    "SKUList": "690"
}, {
    "Category": "Prepaid_Coupons",
    "Locale": Countries["CA"],
    "SKUList": "F25,F21,375,385,F30,F35,F21,F26,251"
}, {
    "Category": "Current_Attendance",
    "Locale": Countries["CA"],
    "SKUList": "F10"
}, {
    "Category": "MissedWeek",
    "Locale": Countries["CA"],
    "SKUList": "F12,F27"
}, {
    "Category": "Enrollments",
    "Locale": Countries["CA"],
    "SKUList": "F14,F25,F21,F30,F35,F26"
}, {
    "Category": "PaidLTAttendance",
    "Locale": Countries["CA"],
    "SKUList": "LT,511"
}, {
    "Category": "PrepaidAttendance",
    "Locale": Countries["CA"],
    "SKUList": "385,375,F25,F30,F35,F26,251"
}, {
    "Category": "FreeLTAttendance",
    "Locale": Countries["CA"],
    "SKUList": "350"
}, {
    "Category": "MPSold",
    "Locale": Countries["CA"],
    "SKUList": "331"
}, {
    "Category": "ThreeMPSold",
    "Locale": Countries["CA"],
    "SKUList": "452"
}, {
    "Category": "QueryCombination",
    "Locale": Countries["CA"],
    "SKUList": "F10,F12,F27,F14,F25,F21,LT,F30,F35,F26"
}, {
    "Category": "20weekPassSold",
    "Locale": Countries["CA"],
    "SKUList": "P60"
}, {
    "Category": "SixMPSold",
    "Locale": Countries["CA"],
    "SKUList": "383"
}, {
    "Category": "Applied_PrePaid_Coupon",
    "Locale": Countries["CA"],
    "SKUList": "F12,F27"
}, {
    "Category": "Applied_Discount",
    "Locale": Countries["CA"],
    "SKUList": "F10,F12,F27"
}, {
    "Category": "NumOfMonthlyPassLTAttd",
    "Locale": Countries["CA"],
    "SKUList": "375,385"
}, {
    "Category": "Employee_Attendance",
    "Locale": Countries["CA"],
    "SKUList": "410"
}, {
    "Category": "SaleReport",
    "Locale": Countries["CA"],
    "SKUList": "331,452,383,P60"
}];

function getSKUList(category) {
    var SKUData;
    var x = _.filter(SKUCategoryList, function(SKUCategory) {
        if (SKUCategory.Category == category && in_array(deviceLocale, SKUCategory.Locale)) {
            SKUData = SKUCategory.SKUList;
        }
    });
    if (SKUData != undefined) {
        return SKUData.split(",");
    } else {
        return SKUData;
    }
}
var ProductImageList = [{
        "SKU": "11518",
        "Locale": "en_CA",
        "ImageName": "prod11508.png"
    }, {
        "SKU": "80035",
        "Locale": "en_CA",
        "ImageName": "prod30018.png"
    }, {
        "SKU": "383",
        "Locale": "en_CA",
        "ImageName": "prod331.png"
    }, {
        "SKU": "452",
        "Locale": "en_CA",
        "ImageName": "prod331.png"
    }, {
        "SKU": "F10",
        "Locale": "en_CA",
        "ImageName": "prod500.png"
    }, {
        "SKU": "F14",
        "Locale": "en_CA",
        "ImageName": "prod400.png"
    }, {
        "SKU": "F25",
        "Locale": "en_CA",
        "ImageName": "prod450.png"
    }, {
        "SKU": "F26",
        "Locale": "en_CA",
        "ImageName": "prod406.png"
    }, {
        "SKU": "LT",
        "Locale": "en_CA",
        "ImageName": "prod501.png"
    }, {
        "SKU": "80038",
        "Locale": "en_CA",
        "ImageName": "prod50038.png"
    }, {
        "SKU": "80044",
        "Locale": "en_CA",
        "ImageName": "prod30043.png"
    },
    //{"SKU": "80045","Locale": "en_CA","ImageName": "prod30055.png"},
    {
        "SKU": "80091",
        "Locale": "en_CA",
        "ImageName": "prod11467.png"
    }, {
        "SKU": "80116",
        "Locale": "en_CA",
        "ImageName": "prod30116.png"
    }, {
        "SKU": "80138",
        "Locale": "en_CA",
        "ImageName": "prod21115.png"
    }, {
        "SKU": "81025",
        "Locale": "en_CA",
        "ImageName": "prod21025.png"
    }, {
        "SKU": "81026",
        "Locale": "en_CA",
        "ImageName": "prod21026.png"
    }, {
        "SKU": "81029",
        "Locale": "en_CA",
        "ImageName": "prod50019.png"
    }, {
        "SKU": "81119",
        "Locale": "en_CA",
        "ImageName": "prod11450.png"
    }, {
        "SKU": "81123",
        "Locale": "en_CA",
        "ImageName": "prod30114.png"
    }, {
        "SKU": "81135",
        "Locale": "en_CA",
        "ImageName": "prod30122.png"
    }, {
        "SKU": "81162",
        "Locale": "en_CA",
        "ImageName": "prod11455.png"
    }, {
        "SKU": "81163",
        "Locale": "en_CA",
        "ImageName": "prod11456.png"
    }, {
        "SKU": "81167",
        "Locale": "en_CA",
        "ImageName": "prod30114.png"
    }, {
        "SKU": "81171",
        "Locale": "en_CA",
        "ImageName": "prod21103.png"
    }, {
        "SKU": "81172",
        "Locale": "en_CA",
        "ImageName": "prod21104.png"
    }, {
        "SKU": "81173",
        "Locale": "en_CA",
        "ImageName": "prod30105.png"
    }, {
        "SKU": "81174",
        "Locale": "en_CA",
        "ImageName": "prod21113.png"
    }, {
        "SKU": "81184",
        "Locale": "en_CA",
        "ImageName": "prod11184.png"
    }, {
        "SKU": "81185",
        "Locale": "en_CA",
        "ImageName": "prod11185.png"
    }, {
        "SKU": "81190",
        "Locale": "en_CA",
        "ImageName": "prod11186.png"
    }, {
        "SKU": "81197",
        "Locale": "en_CA",
        "ImageName": "prod11471.png"
    }, {
        "SKU": "81465",
        "Locale": "en_CA",
        "ImageName": "prod11465.png"
    }, {
        "SKU": "81862",
        "Locale": "en_CA",
        "ImageName": "prod11862.png"
    }, {
        "SKU": "81863",
        "Locale": "en_CA",
        "ImageName": "prod11863.png"
    }, {
        "SKU": "820021",
        "Locale": "en_CA",
        "ImageName": "prod120021.png"
    }, {
        "SKU": "820022",
        "Locale": "en_CA",
        "ImageName": "prod120022.png"
    }, {
        "SKU": "820023",
        "Locale": "en_CA",
        "ImageName": "prod120023.png"
    }, {
        "SKU": "820024",
        "Locale": "en_CA",
        "ImageName": "prod120024.png"
    }, {
        "SKU": "820025",
        "Locale": "en_CA",
        "ImageName": "prod120025.png"
    }, {
        "SKU": "8032709C",
        "Locale": "en_CA",
        "ImageName": "prod12011.png"
    }, {
        "SKU": "81212C",
        "Locale": "en_CA",
        "ImageName": "prod11998.png"
    }, {
        "SKU": "81216C",
        "Locale": "en_CA",
        "ImageName": "prod12009.png"
    }, {
        "SKU": "81217C",
        "Locale": "en_CA",
        "ImageName": "prod12008.png"
    }, {
        "SKU": "80061",
        "Locale": "en_CA",
        "ImageName": "prod30023.png"
    }, {
        "SKU": "81187",
        "Locale": "en_CA",
        "ImageName": "prod11187.png"
    }, {
        "SKU": "30065",
        "Locale": "en_CA",
        "ImageName": "prod30065.png"
    }, {
        "SKU": "30401",
        "Locale": "en_CA",
        "ImageName": "prod30401.png"
    }, {
        "SKU": "81139",
        "Locale": "en_CA",
        "ImageName": "prod81139.png"
    }, {
        "SKU": "81247",
        "Locale": "en_CA",
        "ImageName": "prod81247.png"
    }, {
        "SKU": "81949C",
        "Locale": "en_CA",
        "ImageName": "prod81949C.png"
    }, {
        "SKU": "81984",
        "Locale": "en_CA",
        "ImageName": "prod81984.png"
    }, {
        "SKU": "89918",
        "Locale": "en_CA",
        "ImageName": "prod89918.png"
    }, {
        "SKU": "DBL3",
        "Locale": "en_CA",
        "ImageName": "prodDBL3.png"
    }, {
        "SKU": "FBL1",
        "Locale": "en_CA",
        "ImageName": "prodFBL1.png"
    }, {
        "SKU": "SBL1",
        "Locale": "en_CA",
        "ImageName": "prodSBL1.png"
    }
];
/*
var ReasonMasterData = [
							[
								["0","None"],
								["1","Series price is non standard"],
								["2","Continuing member discount"],
								["3","Client contact discount"],
								["4","Special Offer"],
								["5","Product Promo"]
							,60]
						];
*/
function getProductImage(SKU) {
    var ImageName;
    if (in_array(deviceLocale, Countries["CA"])) {
        var x = _.filter(ProductImageList, function(ProductDetails) {
            if (ProductDetails.SKU == SKU) {
                ImageName = ProductDetails.ImageName;
            }
        });
        if (ImageName != undefined && ImageName != null && ImageName != "") {
            return ImageName;
        } else {
            return "prod" + SKU + ".png";
        }
    } else {
        return "prod" + SKU + ".png";
    }
}

function validateActivationDetails() {
    if ((in_array(glbFormName.lblSubType.text, [kony.i18n.getLocalizedString("strMPBuyNew"), kony.i18n.getLocalizedString("str3MPBuy"), kony.i18n.getLocalizedString("str6MPBuy"), kony.i18n.getLocalizedString("strLTC6"), kony.i18n.getLocalizedString("strLTC12"), kony.i18n.getLocalizedString("strLTC3")])) && deviceLocale == Countries["US"] && (frmPayment.segPaymentTypeData.data == null || frmPayment.segPaymentTypeData.data == undefined || frmPayment.segPaymentTypeData.data.length == 0)) { //** MEG 6434
        return true;
    } else {
        return false;
    }
}

function getCurrentMemberName() {
    var Name = {};
    var fname = "",
        lname = "";
    if (IsEnrollMember == FlowForScreens.Enroll) {
        fname = frmEnrollNewMember.txtFirstName.text.trim();
        lname = frmEnrollNewMember.txtLastName.text.trim();
    } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
        fname = frmAddIndividulaMember.txtFirstName.text.trim();
        lname = frmAddIndividulaMember.txtLastName.text.trim();
    } else if (IsFromPM == FlowForScreens.ProcessMember) {
        fname = glbFirstNamePM;
        lname = glbLastNamePM;
    } else if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        fname = termMemberInfo.FirstName.trim();
        lname = termMemberInfo.LastName.trim();
    }
    Name.firstName = fname;
    Name.lastName = lname;
    return Name;
}

function validateCCEnabledLocation() {
    if (checkAppSettingEnable(Settings["CC"]) && (glbIsCreditCardEnabled == true || glbIsCreditCardEnabled == "true")) {
        return true;
    } else {
        return false;
    }
}
/*
 * this function is used for calculating TotalWeightLoss in the indvidual devices ,  
 */
function getTotalWeightLoss() {
    var dateQuery, meetingQuery, Totalweightloss = 0.0;
    dateQuery = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat")); //** MEG 6386
    meetingQuery = glbMeetingNum;
    var sqlQuery = "SELECT A.* FROM WeighDetails A inner join MemberDetails B on A.MemberID=B.MemberID where B.CountryID = '" + getCountryID() + "' AND B.MtngOccrID='" + meetingQuery + "' and A.MemberID != 0 and date(A.WeighInDate) = '" + dateQuery + "'  and A.MemberID in (Select MemberID from SaleDetails where CountryID = '" + getCountryID() + "' AND date(MeetingDate) = '" + dateQuery + "' AND TransactionType='NonTangible')";
    kony.print("::getWeightDetail::sqlQuery=" + sqlQuery);
    kony.sync.single_select_execute(kony.sync.getDBName(), sqlQuery, null, getWeightDetailCallback, eventErrorCallBack);

    function getWeightDetailCallback(res) {
        kony.print("getWeightDetail res==>" + JSON.stringify(res));
        if (res.length > 0) {
            for (var i in res) {
                var v = res[i];
                var weightloss = kony.sync.getString(v.WeightLoss);
                kony.print("weightloss" + weightloss);
                if (checkValidString(weightloss) && parseFloat(weightloss) > 0) {
                    Totalweightloss += parseFloat(weightloss);
                }
            }
        }
        kony.print("Totalweightloss" + Totalweightloss);
    }
    kony.print("Totalweightloss" + Totalweightloss);
    return Totalweightloss;
}

function eventonClickvbocHeightSectionInPreactivation() {
    //kony.print("devicelocale----->>>>"+deviceLocale);
    if (deviceLocale == "fr_FR") {
        popupHeight.pckrSelectHeight.masterData = heightFR;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightFR;
    } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
    {
        popupHeight.pckrSelectHeight.masterData = heightUS;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightUS;
        //kony.print("SelectedheightUS----->>>>"+SelectedheightUS);
    }
    //popupHeight.pckrSelectHeight.selectedKeys=[["4","4 Feet"]],[["0","0 Inches"]];
    isFromPreActivationHeight = true;
    var context = {
        "widget": popupPreActivation.hbox1866786996428697,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupHeight.setContext(context);
    popupHeight.show();
}