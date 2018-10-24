var DBMilestoneAchievedController = {
    find: function(wcs, successcallback, errorcallback) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.find(wcs, successcallback, errorcallback);
    },
    create: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.create(obj, successcallback, errorcallback, markForUpload);
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
        com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.createAll(obj, successcallback, errorcallback, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.update(wcs, obj, successcallback, errorcallback, markForUpload);
    },
    remove: function(wcs, successcallback, errorcallback, markForUpload) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        com.kony.WeightWatchers.MemberSyncScope.MilestoneAchieved.remove(wcs, successcallback, errorcallback, markForUpload)
    }
}