function p2kwiet357809309135_frmAddAndWeighMemberTransaction_postshow_seq0(eventobject, neworientation) {
    if (deviceLevelTransactId != null && deviceLevelTransactId != undefined && deviceLevelTransactId != "") {
        kony.print("deviceLevelTransactId==>>>" + deviceLevelTransactId);
    } else {
        boEnrollMember.generateDeviceLevelTransactID();
        kony.print("Generated deviceLevelTransactId==>>>" + deviceLevelTransactId);
    }
    if (kony.application.getPreviousForm().id != frmPayment.id) {
        onPostShowgetProductsAddWeighScreen();
        onPostShowPopulateOpenPromotion();
    }
}