var DBNoteDetailsController = {
    find: function(wcs, successcallback, errorcallback) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        com.kony.WeightWatchers.MemberSyncScope.NoteDetails.find(wcs, successcallback, errorcallback);
    },
    create: function(obj, successcallback, errorcallback, markForUpload) {
    	kony.print("create Note Obj :" + JSON.stringify(obj));
    	kony.print("IS create obj");
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID(obj, successcallback, errorcallback, markForUpload);
		
        com.kony.WeightWatchers.MemberSyncScope.NoteDetails.create(obj, successcallback, errorcallback, markForUpload);
    },
    createAll: function(obj, successcallback, errorcallback, markForUpload) {
    	kony.print("createAll Note Obj :" + JSON.stringify(obj));
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

        com.kony.WeightWatchers.MemberSyncScope.NoteDetails.createAll(obj, successcallback, errorcallback, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
    	kony.print("update Note Obj :" + JSON.stringify(obj));
        if (markForUpload === undefined) markForUpload = true;
        obj.Locale = deviceLocale.replace('_', '-');
        obj.CountryID = getCountryID();

        com.kony.WeightWatchers.MemberSyncScope.NoteDetails.update(wcs, obj, successcallback, errorcallback, markForUpload);
    }
}
