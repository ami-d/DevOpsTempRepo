var DBPeripheralController = {
    find: function(wcs, successcallback, errorcallback) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        //wcs = wcs.replace("where ", "where serialn='" + getCountryID() + "' AND ");
        kony.print("::find:: ----" + wcs);
        com.kony.WeightWatchers.Logger.PeripheralInfo.find(wcs, successcallback, errorcallback);
    },
    create: function(obj, successcallback, errorcallback, markForUpload) {
        markForUpload = false;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        kony.print("::create:: ----" + JSON.stringify(obj));
        com.kony.WeightWatchers.Logger.PeripheralInfo.create(obj, successcallback, errorcallback, markForUpload);
    },
    createAll: function(obj, successcallback, errorcallback, markForUpload) {
        markForUpload = false;
        if (obj && obj.length >= 1) {
            _.each(obj, function(o) {
                o.Locale = deviceLocale.replace('_', '-');
                o.CountryID = getCountryID();
            });
        } else {
            obj.Locale = deviceLocale.replace('_', '-');
            obj.CountryID = getCountryID();
        }
        com.kony.WeightWatchers.Logger.PeripheralInfo.createAll(obj, successcallback, errorcallback, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        markForUpload = false;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        kony.print("::PK:: ----" + wcs);
        com.kony.WeightWatchers.Logger.PeripheralInfo.update(wcs, obj, successcallback, errorcallback, markForUpload);
    }
}