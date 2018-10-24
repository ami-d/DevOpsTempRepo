var DBWeighDetailsController = {
    find: function(wcs, successcallback, errorcallback) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");

        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.find(wcs, successcallback, errorcallback);
    },

    create: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.CountryID = getCountryID();
        obj.Locale = deviceLocale.replace('_', '-');
        obj.WeekNumber = getWeekNumber(obj.WeighInDate,true);

        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create(obj, successcallback, errorcallback, markForUpload);
    },

    createAll: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        kony.print("::obj::"+JSON.stringify(obj));
        if (obj && obj.length >= 1) {
        	
            _.each(obj, function(o) {
                o.Locale = deviceLocale.replace('_', '-');
                o.CountryID = getCountryID();
                o.WeekNumber = getWeekNumber(o.WeighInDate,true);
            });
        } else {
            obj.Locale = deviceLocale.replace('_', '-');
            obj.CountryID = getCountryID();
            obj.WeekNumber = getWeekNumber(obj.WeighInDate);
        }

        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll(obj, successcallback, errorcallback, markForUpload);
    },

    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.CountryID = getCountryID();
        obj.Locale = deviceLocale.replace('_', '-');
		if(obj.WeighInDate != null && obj.WeighInDate != undefined)
			obj.WeekNumber = getWeekNumber(obj.WeighInDate,true);

        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.update(wcs, obj, successcallback, errorcallback, markForUpload);
    },
    remove: function(wcs, successcallback,errorcallback, markForUpload){
    	wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
    	com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove(wcs, successcallback,errorcallback, markForUpload)
    }
}
