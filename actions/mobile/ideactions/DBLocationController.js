var DBLocationController = {
    find: function(wcs, successcallback, errorcallback) {
        // wcs = wcs.replace("where ","where CountryID='"+getCountryID()+"' AND ");
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");

        com.kony.WeightWatchers.LookUpTables.Location.find(wcs, successcallback, errorcallback);
    },
    create: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        com.kony.WeightWatchers.LookUpTables.Location.create(obj, successcallback, errorcallback, markForUpload);
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
        com.kony.WeightWatchers.LookUpTables.Location.createAll(obj, successcallback, errorcallback, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        kony.print("::PK:: ----"+wcs);
        com.kony.WeightWatchers.LookUpTables.Location.update(wcs, obj, successcallback, errorcallback, markForUpload);
    }
}
