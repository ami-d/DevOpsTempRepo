var DBPreRegMemberDetailsController = {
    find: function(wcs, successcallback, errorcallback) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        kony.print("::DBPreRegMemberDetailsController::Find::" + wcs);
        com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.find(wcs, successcallback, errorcallback);
    },
    create: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.CountryID = getCountryID();
        obj.Locale = deviceLocale.replace('_', '-');
        kony.print("::DBPreRegMemberDetailsController::create::" + JSON.stringify(obj) + " markForUpload= " + markForUpload);
        com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.create(obj, successcallback, errorcallback, markForUpload);
    },
    createAll: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        if (obj && obj.length >= 1) {
            _.each(obj, function(o) {
                o.Locale = deviceLocale.replace('_', '-');
                o.CountryID = getCountryID();
            });
        } else {
            obj.Locale = deviceLocale.replace('_', '-');
            obj.CountryID = getCountryID();
        }
        kony.print("::DBPreRegMemberDetailsController::createAll::" + JSON.stringify(obj));
        com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.createAll(obj, successcallback, errorcallback, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.CountryID = getCountryID();
        obj.Locale = deviceLocale.replace('_', '-');
        kony.print("::DBPreRegMemberDetailsController::update::" + JSON.stringify(obj));
        com.kony.WeightWatchers.MemberSyncScope.PreRegMemberDetails.update(wcs, obj, successcallback, errorcallback, markForUpload);
    }

}
