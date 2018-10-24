//**MEG 7278
var HeatlhyWeightRangeData = '{"HeatlhyWeightRangeOb": [' + '{"ID" : "1","Height" :"56","MinWeight": "89","MaxWeight": "111"},' + '{"ID" : "2","Height" :"57","MinWeight": "92","MaxWeight": "116"},' + '{"ID" : "3","Height" :"58","MinWeight": "96","MaxWeight": "120"},' + '{"ID" : "4","Height" :"59","MinWeight": "99","MaxWeight": "124"},' + '{"ID" : "5","Height" :"60","MinWeight": "102","MaxWeight": "128"},' + '{"ID" : "6","Height" :"61","MinWeight": "106","MaxWeight": "132"},' + '{"ID" : "7","Height" :"62","MinWeight": "109","MaxWeight": "137"},' + '{"ID" : "8","Height" :"63","MinWeight": "113","MaxWeight": "141"},' + '{"ID" : "9","Height" :"64","MinWeight": "117","MaxWeight": "146"},' + '{"ID" : "10","Height" :"65","MinWeight": "120","MaxWeight": "150"},' + '{"ID" : "11","Height" :"66","MinWeight": "124","MaxWeight": "155"},' + '{"ID" : "12","Height" :"67","MinWeight": "128","MaxWeight": "160"},' + '{"ID" : "13","Height" :"68","MinWeight": "132","MaxWeight": "164"},' + '{"ID" : "14","Height" :"69","MinWeight": "135","MaxWeight": "169"},' + '{"ID" : "15","Height" :"70","MinWeight": "139","MaxWeight": "174"},' + '{"ID" : "16","Height" :"71","MinWeight": "143","MaxWeight": "179"},' + '{"ID" : "17","Height" :"72","MinWeight": "147","MaxWeight": "184"},' + '{"ID" : "18","Height" :"73","MinWeight": "152","MaxWeight": "189"},' + '{"ID" : "19","Height" :"74","MinWeight": "156","MaxWeight": "195"},' + '{"ID" : "20","Height" :"75","MinWeight": "160","MaxWeight": "200"},' + '{"ID" : "21","Height" :"76","MinWeight": "164","MaxWeight": "205"},' + '{"ID" : "22","Height" :"77","MinWeight": "169","MaxWeight": "211"},' + '{"ID" : "23","Height" :"78","MinWeight": "173","MaxWeight": "216"},' + '{"ID" : "24","Height" :"79","MinWeight": "177","MaxWeight": "222"}' + ']}';
//** End
//** MEG 7278
function addHeatlhyWeightRangeLookUpData() {
    kony.print("addHeatlhyWeightRangeLookUpData");

    function HeatlhyWeightRangeSuccessCallback(res) {
        kony.print(getMessageTemplate("addSuccess", "HeatlhyWeightRangeLookUp"), "info")
        transactionSuccessCallback();
    }
    var jsonData = JSON.parse(HeatlhyWeightRangeData);
    var valueArray = [];
    kony.print(" HeatlhyWeightRange 1:" + jsonData);
    kony.print(" HeatlhyWeightRange 3:" + jsonData.HeatlhyWeightRangeOb.length);
    kony.print(" HeatlhyWeightRange 2:" + jsonData.HeatlhyWeightRangeOb);
    for (var i = 0; i < jsonData.HeatlhyWeightRangeOb.length; i++) {
        ///kony.print(" HeatlhyWeightRange 1:"+jsonData);
        valueArray[i] = {};
        var jsonObj = jsonData.HeatlhyWeightRangeOb[i];
        kony.print(" HeatlhyWeightRange 3:" + jsonData);
        valueArray[i].Id = jsonObj.ID;
        valueArray[i].Height = jsonObj.Height;
        valueArray[i].MaxWeight = jsonObj.MaxWeight;
        valueArray[i].MinWeight = jsonObj.MinWeight;
    }
    kony.print("valueArray " + JSON.stringify(valueArray));
    com.kony.WeightWatchers.ProductSyncScope.HeatlhyWeightRangeLookUp.createAll(valueArray, HeatlhyWeightRangeSuccessCallback, transactionErrorCallback, true);
}