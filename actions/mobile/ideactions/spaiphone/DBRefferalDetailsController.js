var DBRefferalDetailsController = {
    create: function(Obj, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        Obj.CountryID = getCountryID();
        Obj.Locale = deviceLocale.replace('_', '-');
        kony.print("::DBRefferalDetailsController::create::" + JSON.stringify(Obj) + " markForUpload= " + markForUpload);
        com.kony.WeightWatchers.MemberSyncScope.RefferalDetails.create(Obj, successRefferalCallBack, errorRefferalCallBack, markForUpload);
    }
}

function successRefferalCallBack(res) {
    kony.print("in succes");
}

function errorRefferalCallBack(res) {
    kony.print("in error");
}