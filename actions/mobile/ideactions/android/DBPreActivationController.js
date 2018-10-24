var DBPreActivationController = {
    find: function(wcs, successcallback, errorcallback) {
        wcs = wcs.replace("where ", "where CountryID='" + getCountryID() + "' AND ");
        kony.print("::DBPreActivationController::Find::" + wcs);
        com.kony.WeightWatchers.MemberSyncScope.PreActivation.find(wcs, successcallback, errorcallback);
    },
    create: function(Obj, successCallBack, errorCallBack, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        Obj.CountryID = getCountryID();
        Obj.Locale = deviceLocale.replace('_', '-');
        var typeofSub = glbFormName.lblSubType.text;
        if (typeofSub == kony.i18n.getLocalizedString("strMPBuyNew")) {
            Obj.PassDuration = "1";
            Obj.PassType = "MonthlyPass";
        } else if (typeofSub == kony.i18n.getLocalizedString("str3MPBuy")) {
            Obj.PassDuration = "3";
            Obj.PassType = "MonthlyPass";
        } else if (typeofSub == kony.i18n.getLocalizedString("str6MPBuy")) {
            Obj.PassDuration = "6";
            Obj.PassType = "MonthlyPass";
        }
        kony.print("::DBPreActivationController::create::" + JSON.stringify(Obj));
        com.kony.WeightWatchers.MemberSyncScope.PreActivation.create(Obj, successCallBack, errorCallBack, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        obj.CountryID = getCountryID();
        obj.Locale = deviceLocale.replace('_', '-');
        kony.print("::DBPreActivationController::update::" + JSON.stringify(obj));
        com.kony.WeightWatchers.MemberSyncScope.PreActivation.update(wcs, obj, successcallback, errorcallback, markForUpload);
    }
}