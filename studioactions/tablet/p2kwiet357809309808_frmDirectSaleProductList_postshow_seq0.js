function p2kwiet357809309808_frmDirectSaleProductList_postshow_seq0(eventobject, neworientation) {
    onPostShowgetProductsAddWeighScreen.call(this);
    onPostShowPopulateOpenPromotion.call(this);
    if (deviceLevelTransactId != null && deviceLevelTransactId != undefined && deviceLevelTransactId != "") {
        kony.print("deviceLevelTransactId==>>>" + deviceLevelTransactId);
    } else {
        boEnrollMember.generateDeviceLevelTransactID();
        kony.print("Generated deviceLevelTransactId==>>>" + deviceLevelTransactId);
    }
}