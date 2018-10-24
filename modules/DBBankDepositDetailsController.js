var DBBankDepositDetailsController = {
    find: function(wcs, successcallback, errorcallback) {
        com.kony.WeightWatchers.Tally.BankDepositDetails.find(wcs, successcallback, errorcallback);
    },
    create: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        com.kony.WeightWatchers.Tally.BankDepositDetails.create(obj, successcallback, errorcallback, markForUpload);
    },
    createAll: function(obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        com.kony.WeightWatchers.Tally.BankDepositDetails.createAll(obj, successcallback, errorcallback, markForUpload);
    },
    update: function(wcs, obj, successcallback, errorcallback, markForUpload) {
        if (markForUpload === undefined) markForUpload = true;
        com.kony.WeightWatchers.Tally.BankDepositDetails.update(wcs, obj, successcallback, errorcallback, markForUpload);
    }
}
