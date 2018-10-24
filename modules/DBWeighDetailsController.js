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
		//** MEG 6866
      	if (in_array(deviceLocale,Countries["US"])){
          obj.IsMemberAtRisk = false;
          obj.IsAtndgMeeting = true;
		kony.print("ABA -----> DBWeighDetailsController create US " + JSON.stringify(obj));
        }
       kony.print("ABA -----> DBWeighDetailsController create All " + JSON.stringify(obj));
      //** End
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
              	//** MEG 6866
                if (in_array(deviceLocale,Countries["US"])){
                  o.IsMemberAtRisk = false;
                  o.IsAtndgMeeting = true;
                  kony.print("ABA -----> DBWeighDetailsController createAll US" + JSON.stringify(o));
                }
               //** End
               kony.print("ABA -----> DBWeighDetailsController createAll All " + JSON.stringify(o));
              
            });
        } else {
            obj.Locale = deviceLocale.replace('_', '-');
            obj.CountryID = getCountryID();
            obj.WeekNumber = getWeekNumber(obj.WeighInDate);
          //** MEG 6866
          if (in_array(deviceLocale,Countries["US"])){
            obj.IsMemberAtRisk = false;
            obj.IsAtndgMeeting = true;
          kony.print("ABA -----> DBWeighDetailsController createAll US " + JSON.stringify(obj));
          }
           //** End
        }
      	 kony.print("ABA -----> DBWeighDetailsController createAll All " + JSON.stringify(obj));
     
        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.createAll(obj, successcallback, errorcallback, markForUpload);
    },

    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.CountryID = getCountryID();
        obj.Locale = deviceLocale.replace('_', '-');
		if(obj.WeighInDate != null && obj.WeighInDate != undefined)
			obj.WeekNumber = getWeekNumber(obj.WeighInDate,true);
      	//** MEG 6866
          if (in_array(deviceLocale,Countries["US"])){
            obj.IsMemberAtRisk = false;
            obj.IsAtndgMeeting = true;
            kony.print("ABA -----> DBWeighDetailsController Update US " + JSON.stringify(obj));
          }else{
      	//** End
            checkIsAtndgMeetingValue(wcs,obj,function(IsAtndgMeeting){
              kony.print("checkIsAtndgMeetingValue IsAtndgMeeting " + IsAtndgMeeting);
              obj.IsAtndgMeeting = IsAtndgMeeting;
            });
            checkIsMemberAtRiskValue(wcs,obj,function(IsMemberAtRisk){
              kony.print("checkIsMemberAtRiskValue IsMemberAtRisk " + IsMemberAtRisk);
              obj.IsMemberAtRisk = IsMemberAtRisk;
            });
          }
		kony.print("ABA -----> DBWeighDetailsController Update All " + JSON.stringify(obj));
        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.update(wcs, obj, successcallback, errorcallback, markForUpload);
    },
    remove: function(wcs, successcallback,errorcallback, markForUpload){
    	wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
    	com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove(wcs, successcallback,errorcallback, markForUpload)
    }
}
