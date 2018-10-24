var DBTallyTimesheetController = {
    find: function(wcs, successcallback, errorcallback) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        kony.print("DBTallyTimesheetController wcs=" + wcs);
        com.kony.WeightWatchers.Tally.TallyTimesheet.find(wcs, successcallback, errorcallback);
    },
    create: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        com.kony.WeightWatchers.Tally.TallyTimesheet.create(obj, successcallback, errorcallback, markForUpload);
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
        com.kony.WeightWatchers.Tally.TallyTimesheet.createAll(obj, successcallback, errorcallback, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        com.kony.WeightWatchers.Tally.TallyTimesheet.update(wcs, obj, successcallback, errorcallback, markForUpload);
    }
}