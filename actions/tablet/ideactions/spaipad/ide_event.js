function p2kwiet357809309135_frmAddAndWeighMemberTransaction_preshow_seq0(eventobject, neworientation) {
    eventOnPreShowSetHeaderLabelPayment.call(this);
    /* 
onPostShowPopulateBarcodeSKU.call(this);

 */
    clearSkuTextData.call(this);
};

function p2kwiet357809309135_frmAddAndWeighMemberTransaction_postshow_seq0(eventobject, neworientation) {
    if (deviceLevelTransactId != null && deviceLevelTransactId != undefined && deviceLevelTransactId != "") {
        kony.print("deviceLevelTransactId==>>>" + deviceLevelTransactId);
    } else {
        boEnrollMember.generateDeviceLevelTransactID();
        kony.print("Generated deviceLevelTransactId==>>>" + deviceLevelTransactId);
    }
    /* 
onPostShowgetProductsAddWeighScreen.call(this);

 */
    /* 
onPostShowPopulateOpenPromotion.call(this);

 */
    /* 
BindSegProductData.call(this,eventobject);

 */
    if (kony.application.getPreviousForm().id != frmPayment.id) {
        onPostShowgetProductsAddWeighScreen();
        onPostShowPopulateOpenPromotion();
    }
};

function p2kwiet357809309135_frmAddAndWeighMemberTransaction_onhide_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
    hboxEnrollHdrMain.btnScan.setVisibility(false);
};

function p2kwiet357809309135_frmAddAndWeighMemberTransaction_onDestroy_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
};

function p2kwiet357809309135_vbox12443534672611876_onClick_seq0(eventobject) {
    eventonFootervboxEditENMP.call(this);
};

function p2kwiet357809309135_btnScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet357809309135_vboxCategorySection_onClick_seq0(eventobject) {
    eventonClickhboxCategorySection.call(this);
};

function p2kwiet357809309135_txtSearchProduct_onDone_seq0(eventobject, changedtext) {
    searchProductBySKUUPC.call(this);
};

function p2kwiet357809309135_segProductDetails_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickProductSegment.call(this, eventobject);
};

function p2kwiet357809309135_segProductDetails1_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickProductSegment.call(this, eventobject);
};

function p2kwiet357809309135_segProductDetails2_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickProductSegment.call(this, eventobject);
};

function p2kwiet357809309135_vbox390007167166976_onClick_seq0(eventobject) {
    makeCartAsEmpty.call(this);
};

function p2kwiet357809309135_segSKUDataPOC_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnRowClickOrderDetails.call(this);
};

function p2kwiet357809309135_vbox1244353467115134_onClick_seq0(eventobject, context) {
    /* 
eventonClickvboxEditIcon.call(this);

 */
};

function p2kwiet357809309135_segSKUData_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventonClicksegSKUData.call(this);
};

function p2kwiet357809309135_vboxEditIconInSegment_onClick_seq0(eventobject, context) {
    eventonClickvboxEditIcon.call(this);
};

function p2kwiet357809309135_btnCompleteProcessMember_onClick_seq0(eventobject) {
    /* 
frmPayment.show();
	
 */
    eventonClickCompleteProcessMember.call(this);
};

function p2kwiet357809309135_vboxPaymentSection_onClick_seq0(eventobject) {
    //frmEnrollNewMember.imgEnrollNormal.src="icn_enroll_selected.png"
};

function p2kwiet357809309279_frmAddIndividulaMember_postshow_seq0(eventobject, neworientation) {
    isMissedWeekPopupShowed = false;
    popupMissedWeeks.destroy();
};

function p2kwiet357809309279_vboxHeightSection_onClick_seq0(eventobject) {
    /* 
CallHeightPopUp.call(this);

 */
};

function p2kwiet357809309279_hboxHeight_onClick_seq0(eventobject) {
    /* 
CallHeightPopUp.call(this);

 */
    /* 
alert("hi");

 */
    eventOnClickAddIndividualHeight.call(this);
};

function p2kwiet357809309279_vboxDOBSection_onClick_seq0(eventobject) {
    /* 
eventonClickvboxDOBSection.call(this);

 */
};

function p2kwiet357809309279_hboxDOBSection1_onClick_seq0(eventobject) {
    /* 
alert("hi");

 */
    eventOnClickDOBAddIndividual.call(this);
};

function p2kwiet357809309279_vboxMemberSection_onClick_seq0(eventobject) {
    eventOnClickMemberShipTypeAddIndividual.call(this);
};

function p2kwiet357809309279_switchOffers_onslide_seq0(eventobject) {
    eventonSlideswitchOffers.call(this);
};

function p2kwiet357809309279_btnScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet357809309279_txtStartWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneStartWeightEditing.call(this);
};

function p2kwiet357809309279_hboxStartDate_onClick_seq0(eventobject) {
    eventOnClickStartDateAddIndividual.call(this);
};

function p2kwiet357809309279_txtGoalWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneGoalWeightEditing.call(this);
};

function p2kwiet357809309279_vbox12443534672794578_onClick_seq0(eventobject) {
    isMissedWeekPopupShowed = false;
    popupMissedWeeks.destroy();
};

function p2kwiet357809309279_vboxWeigh_onClick_seq0(eventobject) {
    eventonClickvboxWeighSection.call(this);
};

function p2kwiet357809309279_vboxPayment_onClick_seq0(eventobject) {
    //frmEnrollNewMember.imgEnrollNormal.src="icn_enroll_selected.png"
};

function p2kwiet357809309639_frmBatchAddMember_preshow_seq0(eventobject, neworientation) {
    ClearBatchMemberVariables.call(this);
    /* 
ClearVariables.call(this);

 */
};

function p2kwiet357809309639_frmBatchAddMember_postshow_seq0(eventobject, neworientation) {
    boEnrollMember.generateDeviceLevelMemberID();
    generateIncrementalMemberID.call(this);
    onPostShowfrmAddBatchMember.call(this);
};

function p2kwiet357809309639_vboxCancelImage_onClick_seq0(eventobject) {
    ClearVariables();
    batchWeightData = [];
    if (IsNoMeetingSelected) {
        frmHomeScreenNoMeeting.show();
    } else {
        evenOnPostShowHomeScreen();
        //frmHomeScreen.show();
    }
};

function p2kwiet357809309639_vboxSaveAddDoneImage_onClick_seq0(eventobject) {
    eventOnclickSaveAndAddBtn.call(this);
};

function p2kwiet357809309639_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnclickSaveOnlyBatchBtn.call(this);
};

function p2kwiet357809309639_btnUnlink_onClick_seq0(eventobject) {
    onClickLinkUnlinkButton.call(this);
};

function p2kwiet357809309639_vboxSubTypeBAMember_onClick_seq0(eventobject) {
    eventOnClickSubTypeSectionBAMemberPage.call(this);
};

function p2kwiet357809309639_vboxExpirationDate_onClick_seq0(eventobject) {
    eventOnClickExpiryDateSectionBAMemberPage.call(this);
};

function p2kwiet357809309639_vboxMemberShipType_onClick_seq0(eventobject) {
    eventOnClickMemberShipTypeSectionBAMemberPage.call(this);
};

function p2kwiet357809309639_hboxStatus_onClick_seq0(eventobject) {
    eventonOpenStatusPopup.call(this);
};

function p2kwiet357809309639_vbox13850002191432192_onClick_seq0(eventobject) {
    eventOnClickSubTypeSectionBAMemberPage.call(this);
};

function p2kwiet357809309639_hboxStartDate_onClick_seq0(eventobject) {
    eventOnClickStartDateAddBatchMember.call(this);
};

function p2kwiet357809309639_txtStartWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneEditingBatchStartWeight.call(this);
};

function p2kwiet357809309639_vboxHeightSection_onClick_seq0(eventobject) {
    eventOnClickHeightSectionBAMemberPage.call(this);
};

function p2kwiet357809309639_vboxDOBSection_onClick_seq0(eventobject) {
    eventOnClickDOBSectionBAMemberPage.call(this);
};

function p2kwiet357809309639_vboxStateSection_onClick_seq0(eventobject) {
    eventOnClickState1SectionBAMemberPage.call(this);
};

function p2kwiet357809309639_vboxPhone_onClick_seq0(eventobject) {
    eventOnClickCellTypeSectionBAMemberPage.call(this);
};

function p2kwiet357809309639_btnAdd_onClick_seq0(eventobject) {
    eventonClickAddInBatchMember.call(this);
};

function p2kwiet357809309639_segAddBatchMembeProfileDetails_onReachingEnd_seq0(eventobject) {
    /* 
eventOnClickBtnLoadMoreDetails.call(this);

 */
};

function p2kwiet357809309639_segAddBatchMembeProfileDetails_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    /* 
eventonRowClickSegWeighHistory.call(this);

 */
    eventonClickBatchSegWeighHistory.call(this);
};

function p2kwiet357809309639_btnNWI_onClick_seq0(eventobject, context) {
    eventonClickBatchSegWeighHistory.call(this);
};

function p2kwiet357809309639_txtGoalWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneEditingGoalWeightTextBA.call(this);
};

function p2kwiet357809309639_switchReceiveCoupons_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveCouponsBAMember.call(this);
};

function p2kwiet357809309639_switchParticipateSurveys_onslide_seq0(eventobject) {
    eventonSlideswitchParticipateSurveysBAMember.call(this);
};

function p2kwiet357809309639_switchReceiveMsgs_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveMsgsBAMember.call(this);
};

function p2kwiet357809309639_switchReceiveCalls_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveCallsBAMember.call(this);
};

function p2kwiet357809309639_switchOffers_onslide_seq0(eventobject) {
    eventonSlideswitchOffersBatchAdd.call(this);
};

function p2kwiet357809309639_switchMailingAdd_onslide_seq0(eventobject) {
    onClickSwitchSameAsBillingAddress.call(this);
};

function p2kwiet357809309639_vboxBillingCityState_onClick_seq0(eventobject) {
    eventOnClickState2SectionBAMemberPage.call(this);
};

function p2kwiet357809309699_frmCheckout_preshow_seq0(eventobject, neworientation) {
    eventOnPreShowSetHeaderLabel.call(this);
    /* 
startBarcodeForSubID.call(this);

 */
    /* 
isScanInProgress = true;
isFromHomeScreen = false;

 */
    if (frmCheckout.lblSubType.text == "Pay as you go") {
        frmCheckout.btnScan.setVisibility(false); // Added by Dileep Chejerla
    }
};

function p2kwiet357809309699_frmCheckout_postshow_seq0(eventobject, neworientation) {
    eventOnPostShowPreFillEmail.call(this);
    resetVarOnFrmCheckOutPostShow.call(this);
    eventOnPostShowCheckoutForm.call(this);
};

function p2kwiet357809309699_frmCheckout_onDestroy_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
    /* 
isScanInProgress = false;

 */
};

function p2kwiet357809309699_hboxSubscriptionTypeSection_onClick_seq0(eventobject) {
    eventonClickhboxMemberSection.call(this);
};

function p2kwiet357809309699_txtSubscriptionID_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onEndEditingForSubID.call(this);
};

function p2kwiet357809309699_btnScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet357809309699_btnCheckOut_onClick_seq0(eventobject) {
    eventonClickCheckOut.call(this);
};

function p2kwiet357809309699_vboxFooterMemberSection_onClick_seq0(eventobject) {
    eventOnClickMemberSectionForFlow.call(this);
    isMissedWeekPopupShowed = false;
    popupMissedWeeks.destroy();
};

function p2kwiet357809309699_vboxWeighSection_onClick_seq0(eventobject) {
    eventonFootervboxWeighSectionCheckout.call(this);
};

function p2kwiet357809309808_frmDirectSaleProductList_preshow_seq0(eventobject, neworientation) {
    /* 
onPostShowPopulateBarcodeSKU.call(this);

 */
};

function p2kwiet357809309808_frmDirectSaleProductList_postshow_seq0(eventobject, neworientation) {
    onPostShowgetProductsAddWeighScreen.call(this);
    onPostShowPopulateOpenPromotion.call(this);
    if (deviceLevelTransactId != null && deviceLevelTransactId != undefined && deviceLevelTransactId != "") {
        kony.print("deviceLevelTransactId==>>>" + deviceLevelTransactId);
    } else {
        boEnrollMember.generateDeviceLevelTransactID();
        kony.print("Generated deviceLevelTransactId==>>>" + deviceLevelTransactId);
    }
};

function p2kwiet357809309808_frmDirectSaleProductList_onhide_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
};

function p2kwiet357809309808_frmDirectSaleProductList_onDestroy_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
};

function p2kwiet357809309808_vbox12443534672611876_onClick_seq0(eventobject) {
    eventonFootervboxEditENMP.call(this);
};

function p2kwiet357809309808_vboxCategorySection_onClick_seq0(eventobject) {
    eventonClickhboxCategorySection.call(this);
};

function p2kwiet357809309808_txtSearchProduct_onDone_seq0(eventobject, changedtext) {
    searchProductBySKUUPC.call(this);
};

function p2kwiet357809309808_segProductDetails_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickProductSegment.call(this, eventobject);
};

function p2kwiet357809309808_segProductDetails1_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickProductSegment.call(this, eventobject);
};

function p2kwiet357809309808_segProductDetails2_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickProductSegment.call(this, eventobject);
};

function p2kwiet357809309808_vbox390007167166976_onClick_seq0(eventobject) {
    makeCartAsEmpty.call(this);
};

function p2kwiet357809309808_segSKUData_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventonClicksegSKUData.call(this);
};

function p2kwiet357809309808_vboxEditIconInSegment_onClick_seq0(eventobject, context) {
    eventonClickvboxEditIcon.call(this);
};

function p2kwiet357809309808_btnCompleteProcessMember_onClick_seq0(eventobject) {
    eventonClickCompleteTransaction.call(this);
};

function p2kwiet3578093091089_frmEditMemberProfile_preshow_seq0(eventobject, neworientation) {
    preShowOfEditMemberProfile.call(this);
};

function p2kwiet3578093091089_vboxCancelImage_onClick_seq0(eventobject) {
    frmViewMemberProfile.show();
    if (glbLinkType == "None" || glbLinkType == "" || glbLinkType == "Unlink") frmEditMemberProfile.btnLinkUnlink.text = "Link";
    else frmEditMemberProfile.btnLinkUnlink.text = "Unlink";
    frmCheckout.lblSubType.text = "";
    clearEditMemberFields.call(this, false);
};

function p2kwiet3578093091089_vboxDoneImage_onClick_seq0(eventobject) {
    UpdateMemberProfile.call(this);
};

function p2kwiet3578093091089_btnLinkUnlink_onClick_seq0(eventobject) {
    eventOnClickbtnLinkUnlink.call(this);
};

function p2kwiet3578093091089_vbox12443534675486828_onClick_seq0(eventobject) {
    eventOnClickSubTypeSectionEditProfilePage.call(this);
};

function p2kwiet3578093091089_vboxExpirationDate_onClick_seq0(eventobject) {
    eventOnClickExpiryDateSectionEditProfilePage.call(this);
};

function p2kwiet3578093091089_hboxExpirationDate_onClick_seq0(eventobject) {
    eventOnClickExpiryDateSectionEditProfilePage.call(this);
};

function p2kwiet3578093091089_vboxHeightSection_onClick_seq0(eventobject) {
    eventOnClickHeightSectionEditProfilePage.call(this);
};

function p2kwiet3578093091089_vboxDOBSection_onClick_seq0(eventobject) {
    eventOnClickDOBSectionEditProfilePage.call(this);
};

function p2kwiet3578093091089_vboxStateSection_onClick_seq0(eventobject) {
    eventOnClickStateSectionEditMemberPage.call(this);
};

function p2kwiet3578093091089_vboxPhone_onClick_seq0(eventobject) {
    eventOnClickCellTypeSectionEditProfilePage.call(this);
};

function p2kwiet3578093091089_btnAdd_onClick_seq0(eventobject) {
    eventonClickAddWeightData.call(this);
};

function p2kwiet3578093091089_segEditMemberProfileDetails_onReachingEnd_seq0(eventobject) {
    /* 
eventOnClickBtnLoadMoreDetails.call(this);

 */
};

function p2kwiet3578093091089_segEditMemberProfileDetails_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventonRowClickSegWeighHistory.call(this);
};

function p2kwiet3578093091089_txtGoalWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneEditingMemberGoalWeightText.call(this);
};

function p2kwiet3578093091089_txtPersonalGoalWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneEditingMemberGoalWeightText.call(this);
};

function p2kwiet3578093091089_switchReceiveCoupons_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveCouponsEditProfile.call(this);
};

function p2kwiet3578093091089_switchParticipateSurveys_onslide_seq0(eventobject) {
    eventonSlideswitchParticipateSurveysEditProfile.call(this);
};

function p2kwiet3578093091089_switchReceiveMsgs_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveMsgsEditProfile.call(this);
};

function p2kwiet3578093091089_switchReceiveCalls_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveCallsEditProfile.call(this);
};

function p2kwiet3578093091089_switchOffers_onslide_seq0(eventobject) {
    eventonSlideswitchOffersEditProfile.call(this);
};

function p2kwiet3578093091187_frmEnrollNewMember_preshow_seq0(eventobject, neworientation) {
    eventPreShowEnrollNewMember.call(this);
};

function p2kwiet3578093091187_frmEnrollNewMember_postshow_seq0(eventobject, neworientation) {
    /* 
startBarcodeForSubID.call(this);

 */
    /* 
isScanInProgress = true;
isFromHomeScreen = false;

 */
};

function p2kwiet3578093091187_frmEnrollNewMember_onhide_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
    /* 
isScanInProgress = false;

 */
};

function p2kwiet3578093091187_frmEnrollNewMember_onDestroy_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
    /* 
isScanInProgress = false;

 */
};

function p2kwiet3578093091187_vboxHeightSection_onClick_seq0(eventobject) {
    /* 
CallHeightPopUp.call(this);

 */
};

function p2kwiet3578093091187_hboxHeight_onClick_seq0(eventobject) {
    /* 
CallHeightPopUp.call(this);

 */
    /* 
alert("hi");

 */
    eventonClickhboxHeightSection.call(this);
};

function p2kwiet3578093091187_vboxDOBSection_onClick_seq0(eventobject) {
    eventonClickvboxDOBSection.call(this);
};

function p2kwiet3578093091187_hboxDOBSection1_onClick_seq0(eventobject) {
    /* 
alert("hi");

 */
    eventonClickvboxDOBSection.call(this);
};

function p2kwiet3578093091187_btnScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet3578093091187_switchOffers_onslide_seq0(eventobject) {
    eventonSlideswitchOffers.call(this);
};

function p2kwiet3578093091187_switchReffered_onslide_seq0(eventobject) {
    onChangeSwitchReffered.call(this);
};

function p2kwiet3578093091187_vboxSearchIcon_onClick_seq0(eventobject) {
    eventOnClickSearchRefferalIcon.call(this);
};

function p2kwiet3578093091187_vbox12443534672794578_onClick_seq0(eventobject) {
    //frmEnrollNewMember.imgEnrollNormal.src="icn_enroll_selected.png"
};

function p2kwiet3578093091187_vboxWeigh_onClick_seq0(eventobject) {
    eventonClickvboxWeighSection.call(this);
};

function p2kwiet3578093091187_vboxPayment_onClick_seq0(eventobject) {
    //frmEnrollNewMember.imgEnrollNormal.src="icn_enroll_selected.png"
};

function p2kwiet3578093091276_frmEnrollNewMemberPayment_preshow_seq0(eventobject, neworientation) {
    eventOnPreShowSetHeaderLabelPayment.call(this);
};

function p2kwiet3578093091276_vbox12443534672611876_onClick_seq0(eventobject) {
    eventonFootervboxEditENMP.call(this);
};

function p2kwiet3578093091276_vboxEditIconInSegment_onClick_seq0(eventobject, context) {
    eventonClickvboxEditIcon.call(this);
};

function p2kwiet3578093091276_btnCompleteProcessMember_onClick_seq0(eventobject) {
    onclickCompleteEnrollProcess.call(this, null);
    /* 
onClickCompleteTransaction.call(this);

 */
};

function p2kwiet3578093091276_vboxFooterMemberSection_onClick_seq0(eventobject) {
    isMissedWeekPopupShowed = false;
    popupMissedWeeks.destroy();
};

function p2kwiet3578093091276_vboxWeighSection_onClick_seq0(eventobject) {
    /* 
eventonFootervboxWeighSectionENMP.call(this);

 */
};

function p2kwiet3578093091276_vboxPaymentSection_onClick_seq0(eventobject) {
    //frmEnrollNewMember.imgEnrollNormal.src="icn_enroll_selected.png"
};

function p2kwiet3578093091416_vboxHeightSection_onClick_seq0(eventobject) {
    /* 
CallHeightPopUp.call(this);

 */
};

function p2kwiet3578093091416_hboxHeight_onClick_seq0(eventobject) {
    /* 
CallHeightPopUp.call(this);

 */
    /* 
alert("hi");

 */
    eventOnClickAddIndividualHeight.call(this);
};

function p2kwiet3578093091416_vboxDOBSection_onClick_seq0(eventobject) {
    /* 
eventonClickvboxDOBSection.call(this);

 */
};

function p2kwiet3578093091416_hboxDOBSection1_onClick_seq0(eventobject) {
    /* 
alert("hi");

 */
    eventOnClickDOBAddIndividual.call(this);
};

function p2kwiet3578093091416_vboxStateSection_onClick_seq0(eventobject) {
    onPopupOpenStateInReEnroll.call(this);
};

function p2kwiet3578093091416_switchReceiveCoupons_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveCoupons.call(this);
};

function p2kwiet3578093091416_switchParticipateSurveys_onslide_seq0(eventobject) {
    eventonSlideswitchParticipateSurveys.call(this);
};

function p2kwiet3578093091416_switchReceiveMsgs_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveMsgs.call(this);
};

function p2kwiet3578093091416_switchReceiveCalls_onslide_seq0(eventobject) {
    eventonSlideswitchReceiveCalls.call(this);
};

function p2kwiet3578093091416_switchOffers_onslide_seq0(eventobject) {
    eventonSlideswitchOffers.call(this);
};

function p2kwiet3578093091416_vbox12443534672794578_onClick_seq0(eventobject) {
    //frmEnrollNewMember.imgEnrollNormal.src="icn_enroll_selected.png"
};

function p2kwiet3578093091416_vboxWeigh_onClick_seq0(eventobject) {
    eventonClickvboxWeighSection.call(this);
};

function p2kwiet3578093091416_vboxPayment_onClick_seq0(eventobject) {
    //frmEnrollNewMember.imgEnrollNormal.src="icn_enroll_selected.png"
};

function p2kwiet3578093091541_frmEnrollWeighMember_preshow_seq0(eventobject, neworientation) {
    eventOnPreShowSetHeaderLabel.call(this);
};

function p2kwiet3578093091541_frmEnrollWeighMember_postshow_seq0(eventobject, neworientation) {
    eventOnPostshowFrmEnrollWeighMember.call(this);
    loadMissedWeekData.call(this);
    eventOnPostShowPreFillEmail.call(this);
    resetVarOnFrmCheckOutPostShow.call(this);
    eventOnPostShowCheckoutForm.call(this);
    displayPersonalGoalMessage.call(this);
};

function p2kwiet3578093091541_vbox14183363253984_onClick_seq0(eventobject) {
    ClearEnrollWeighInFields.call(this);
    eventOnClickFlowDecessionForMember.call(this);
};

function p2kwiet3578093091541_cmbStats_onSelection_seq0(eventobject) {
    onclickStatisticsTabs.call(this);
};

function p2kwiet3578093091541_txtDPTValue_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onEndEditingOfDPT.call(this);
};

function p2kwiet3578093091541_txtWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    eventonDoneTextAreaWeighCalculations.call(this);
};

function p2kwiet3578093091541_vboxAtendingMeeting_onClick_seq0(eventobject) {
    eventonClickCheckBoxEnrollWeighMember.call(this);
};

function p2kwiet3578093091541_vboxNoWeighIn_onClick_seq0(eventobject) {
    eventonClickbtnNWI.call(this);
};

function p2kwiet3578093091541_vboxCheckAtRisk_onClick_seq0(eventobject) {
    eventonClickAtRiskCheckBox.call(this);
};

function p2kwiet3578093091541_txtNotes_onDone_seq0() {
    isNoteUpdated = true;
};

function p2kwiet3578093091541_hboxSubscriptionTypeSection_onClick_seq0(eventobject) {
    eventonClickhboxMemberSection.call(this);
};

function p2kwiet3578093091541_txtSubscriptionID_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onEndEditingForSubID.call(this);
};

function p2kwiet3578093091541_btnScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet3578093091549_frmHelp_postshow_seq0(eventobject, neworientation) {
    loadURL.call(this);
};

function p2kwiet3578093091549_vboxCancelImage_onClick_seq0(eventobject) {
    closeHelp.call(this);
};

function p2kwiet3578093091611_frmHomeScreen_preshow_seq0(eventobject, neworientation) {
    displayLocationTitleInHeader.call(this);
    ResetHomeScreenComboValues.call(this);
};

function p2kwiet3578093091611_frmHomeScreen_postshow_seq0(eventobject, neworientation) {
    addDataForGlobalMenu.call(this);
    createDynamicMenu.call(this);
    ClearVariables.call(this);
    ClearLinkObject.call(this);
    clearRefferalobj.call(this);
    UnitLbsORKg.call(this);
    /* 
searchMemberUsingBarcode.call(this);

 */
    generateIncrementalMemberID.call(this);
    isMissedWeekPopupShowed = false;
    popupMissedWeeks.destroy();
    missedWeek = 0;
    MissedWeekWeightData = [];
    glbSelectedMemberMtngOccrID = 0;
    gblLinkInfoForOnlineMember = {};
    ProductSale.Cart = new ProductCart();
    glbNonTangibleDataToBeSet = [];
    setCurrencyType.call(this);
    ClearTangibleProductsSegments.call(this, true);
    popupStateRefineSearch.pickerState.setSelectedKeyInComponent("", 0);
    popupMemberType.pickerMemberType.setSelectedKeyInComponent("All", 0);
    popupMemberStatus.pickerMemberStatus.setSelectedKeyInComponent("All", 0);
    frmMemberProfileSearch.lblStateInfo.text = "";
    frmMemberProfileSearch.lblMemberTypeInfo.text = "All";
    frmMemberProfileSearch.lblMemberStatusInfo.text = "All";
    frmMemberProfileSearch.txtCity.text = "";
    gblExpirationDate = "";
    isSearchPage = false;
    //Added by Ami
    removeProgressView();
    bindTallyDiffReasonList.call(this);
    getHomeScreenPaymentData.call(this);
};

function p2kwiet3578093091611_frmHomeScreen_onhide_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
    /* 
isScanInProgress = false;
isFromHomeScreen = false;

 */
};

function p2kwiet3578093091611_frmHomeScreen_onDestroy_seq0(eventobject, neworientation) {
    /* 
stopBarcoeScan.call(this);

 */
    /* 
isScanInProgress = false;
isFromHomeScreen = false;

 */
};

function p2kwiet3578093091611_vboxSortImg_onClick_seq0(eventobject) {
    eventOnClickVboxSortImg.call(this);
};

function p2kwiet3578093091611_vboxSortFirstName_onClick_seq0(eventobject) {
    eventOnClickVboxFirstSortImg.call(this);
};

function p2kwiet3578093091611_vboxLastNameSortChk_onClick_seq0(eventobject) {
    eventOnClickVBoxCheckedinSorting.call(this);
};

function p2kwiet3578093091611_vboxCheckedSortFirstName_onClick_seq0(eventobject) {
    eventOnClickVBoxFirstNameCheckedinSorting.call(this);
};

function p2kwiet3578093091611_segCheckedInMembers_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    /* 
frmViewMemberProfile.show();
	
 */
    onSelectRowCheckedInMember.call(this);
};

function p2kwiet3578093091611_vboxProductList_onClick_seq0(eventobject, context) {
    eventonClickCheckedInProductSale.call(this);
};

function p2kwiet3578093091638_frmHomeScreenNoMeeting_postshow_seq0(eventobject, neworientation) {
    /* 
evenOnPostShowHomeScreen.call(this);

 */
    ClearLinkObject.call(this);
    addDataForGlobalMenu.call(this);
    createDynamicMenu.call(this);
    UnitLbsORKg.call(this);
    /* 
searchMemberUsingBarcode.call(this);

 */
    displayLocationTitleInHeader.call(this);
    generateIncrementalMemberID.call(this);
    ClearTangibleProductsSegments.call(this, true);
    popupStateRefineSearch.pickerState.setSelectedKeyInComponent("", 0);
    popupMemberType.pickerMemberType.setSelectedKeyInComponent("All", 0);
    popupMemberStatus.pickerMemberStatus.setSelectedKeyInComponent("All", 0);
    frmMemberProfileSearch.lblStateInfo.text = "";
    frmMemberProfileSearch.lblMemberTypeInfo.text = "All";
    frmMemberProfileSearch.lblMemberStatusInfo.text = "All";
    frmMemberProfileSearch.txtCity.text = "";
};

function p2kwiet3578093091638_frmHomeScreenNoMeeting_onhide_seq0(eventobject, neworientation) {
    stopBarcoeScan.call(this);
};

function p2kwiet3578093091638_frmHomeScreenNoMeeting_onDestroy_seq0(eventobject, neworientation) {
    stopBarcoeScan.call(this);
};

function p2kwiet3578093091638_segNoMeeting_onReachingEnd_seq0(eventobject) {
    eventOnClickBtnLoadMoreDetails.call(this);
};

function p2kwiet3578093091638_segNoMeeting_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    frmViewMemberProfile.show();
};

function p2kwiet3578093091675_frmLogin_preshow_seq0(eventobject, neworientation) {
    frmLogin.tbxLogin.text = "";
    frmLogin.tbxPassword.text = "";
    eventOnPostShowLogin.call(this);
};

function p2kwiet3578093091675_frmLogin_postshow_seq0(eventobject, neworientation) {
    /* 
eventOnPostShowGetLastLocation.call(this);

 */
    eventOnPostShowLogin.call(this);
};

function p2kwiet3578093091675_frmLogin_init_seq0(eventobject, neworientation) {
    initSyncSession.call(this);
};

function p2kwiet3578093091675_vbox156335075082754_onClick_seq0(eventobject) {
    checkDevice.call(this);
};

function p2kwiet3578093091675_hbox5075934199039_onClick_seq0(eventobject) {
    /* 
openSearchPopup.call(this);

 */
};

function p2kwiet3578093091675_vboxLocation_onClick_seq0(eventobject) {
    eventOnClickChangeLocation.call(this);
};

function p2kwiet3578093091675_btnLogin_onClick_seq0(eventobject) {
    eventOnClickLogin.call(this);
    /* 
frmSelectMeeting.show();
	
 */
    /* 
getAllProductData.call(this);

 */
};

function p2kwiet3578093091675_button213558102289490_onClick_seq0(eventobject) {
    syncStartSession();
};

function p2kwiet3578093091675_vbox12443534678116659_onClick_seq0(eventobject) {
    frmSavedLocations.show();
};

function p2kwiet3578093091742_frmMemberProfileSearch_preshow_seq0(eventobject, neworientation) {
    eventonPostshowSearchResultPage.call(this);
};

function p2kwiet3578093091742_frmMemberProfileSearch_postshow_seq0(eventobject, neworientation) {
    kony.print("Form Advanced Search Post show");
    ClearAdvancedSearchFields.call(this);
};

function p2kwiet3578093091742_txtCity_onDone_seq0(eventobject, changedtext) {
    refineSearch.call(this);
};

function p2kwiet3578093091742_hboxState_onClick_seq0(eventobject) {
    eventOnClickStateSearchResult.call(this);
};

function p2kwiet3578093091742_hboxMemberTypeSection_onClick_seq0(eventobject) {
    eventonClickHboxMemberTypeSearch.call(this);
};

function p2kwiet3578093091742_hboxMemberStatusSection_onClick_seq0(eventobject) {
    eventonClickHboxMemberStatusSearch.call(this);
};

function p2kwiet3578093091742_vboxSortImg_onClick_seq0(eventobject) {
    eventOnClickVboxSortAdvResult.call(this);
};

function p2kwiet3578093091742_segMemberProfileSearch_onReachingEnd_seq0(eventobject) {
    /* 
eventOnClickBtnLoadMoreDetails.call(this);

 */
};

function p2kwiet3578093091742_segMemberProfileSearch_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickSegmentMemberProfileSearch.call(this);
};

function p2kwiet3578093091742_vboxProcessMember_onClick_seq0(eventobject, context) {
    eventonClickvbxProcessMemberForProfileSearch.call(this);
    displayNote.call(this);
};

function p2kwiet3578093091835_vbox390007167359145_onClick_seq0_seq4() {
    /* 
eventonClickvboxRemovePaymentDetails.call(this);

 */
};

function act1_p2kwiet3578093091835_vbox390007167359145_onClick_seq0_seq0(response) {
    if (response == true) {
        p2kwiet3578093091835_vbox390007167359145_onClick_seq0_seq4()
    } else {}
};

function p2kwiet3578093091835_vbox2052845472275302_onClick_seq0_seq8() {
    /* 
eventonClickvboxRemoveAllPaymentDetails.call(this);

 */
};

function act0_p2kwiet3578093091835_vbox2052845472275302_onClick_seq0_seq6(response) {
    if (response == true) {
        p2kwiet3578093091835_vbox2052845472275302_onClick_seq0_seq8()
    } else {}
};

function p2kwiet3578093091835_frmPayment_preshow_seq0(eventobject, neworientation) {
    preShow_FormPayment.call(this);
};

function p2kwiet3578093091835_frmPayment_postshow_seq0(eventobject, neworientation) {
    postShow_generatePaymentOptions.call(this);
};

function p2kwiet3578093091835_frmPayment_onhide_seq0(eventobject, neworientation) {
    stopTimerAndDisableSled.call(this);
};

function p2kwiet3578093091835_vbox12443534676066565_onClick_seq0(eventobject) {
    eventonClickvboxCancelImageHeaderForPaymentSection.call(this);
};

function p2kwiet3578093091835_vbox12443534678547347_onClick_seq0(eventobject) {
    testBTDevice.call(this, null);
};

function p2kwiet3578093091835_vbox205284547251080_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblSeven.text);
};

function p2kwiet3578093091835_vbox205284547253742_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblEight.text);
};

function p2kwiet3578093091835_vbox205284547253734_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblNine.text);
};

function p2kwiet3578093091835_vbox205284547255991_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblFour.text);
};

function p2kwiet3578093091835_vbox205284547255999_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblFive.text);
};

function p2kwiet3578093091835_vbox205284547255995_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblSix.text);
};

function p2kwiet3578093091835_vbox205284547256803_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblOne.text);
};

function p2kwiet3578093091835_vbox205284547256811_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblTwo.text);
};

function p2kwiet3578093091835_vbox205284547256807_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblThree.text);
};

function p2kwiet3578093091835_vbox205284547264055_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblDoubleZero.text);
};

function p2kwiet3578093091835_vbox205284547264063_onClick_seq0(eventobject) {
    eventonClickvboxForEnterAmountSection.call(this, frmPayment.lblZero.text);
};

function p2kwiet3578093091835_vbox205284547264059_onClick_seq0(eventobject) {
    onclickeventEraseBtn.call(this);
};

function p2kwiet3578093091835_vbox2052845472275302_onClick_seq0(eventobject) {
    eventOnclick_DeleteAllPaymentDetails.call(this);
    /* 
var totalRecordsInPayment = 0;
if(frmPayment.segPaymentTypeData && frmPayment.segPaymentTypeData.data)
{
 totalRecordsInPayment = frmPayment.segPaymentTypeData.data.length;
}

 */
    if (totalRecordsInPayment > 0) {
        /* 
           var alert_seq6_act0 = kony.ui.Alert({"message" : "Are you sure you want to remove all payment details entered?", "alertType" : constants.ALERT_TYPE_CONFIRMATION,"alertTitle": "Alert", "yesLabel" : "Yes", "noLabel" : "No", "alertIcon" : "", "alertHandler" : act0_p2kwiet3578093091835_vbox2052845472275302_onClick_seq0_seq6}, {});

        */
    }
};

function p2kwiet3578093091835_vbox390007167359145_onClick_seq0(eventobject, context) {
    eventOnclick_DeleteEachPaymentDetail.call(this);
    /* 
       var alert_seq0_act1 = kony.ui.Alert({"message" : "Are you sure you want to remove this payment details ?", "alertType" : constants.ALERT_TYPE_CONFIRMATION,"alertTitle": "Alert", "yesLabel" : "Yes", "noLabel" : "No", "alertIcon" : "", "alertHandler" : act1_p2kwiet3578093091835_vbox390007167359145_onClick_seq0_seq0}, {});

    */
};

function p2kwiet3578093091835_vboxSendReceipt_onClick_seq0(eventobject) {
    eventOnClickChkSendReceipt.call(this);
};

function p2kwiet3578093091835_btnCompleteProcessMember_onClick_seq0(eventobject) {
    checkValidationsForCompleteTrasaction.call(this);
};

function p2kwiet3578093091972_frmProcessMember_preshow_seq0(eventobject, neworientation) {
    eventOnPreShowSetHeaderLabel.call(this);
};

function p2kwiet3578093091972_frmProcessMember_postshow_seq0(eventobject, neworientation) {
    onPostShowFrmProcess.call(this);
    lbsToNextMilestone.call(this);
    loadMissedWeekData.call(this);
    checkForAchievedReachedLifeTimeMilestone.call(this);
    displayPersonalGoalMessage.call(this);
    eventOnPostShowPreFillEmail.call(this);
    resetVarOnFrmCheckOutPostShow.call(this);
    eventOnPostShowCheckoutForm.call(this);
    setIsAttendingOnPostShow_ProcessMember.call(this);
    setSubScriptionInfo.call(this);
};

function p2kwiet3578093091972_cmbStats_onSelection_seq0(eventobject) {
    onclickStatisticsTabs.call(this);
};

function p2kwiet3578093091972_txtAreaWeightProcess_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneCurrentWeight.call(this);
    eventonDoneTextAreaProcessMemberWeighCalculations.call(this, frmProcessMember.txtAreaWeightProcess.text, null, true);
    onClickIsMemberLoosingWeightRapidly.call(this, frmProcessMember.txtAreaWeightProcess.text);
};

function p2kwiet3578093091972_vboxAtendingMeeting_onClick_seq0(eventobject) {
    eventonClickCheckBox.call(this);
};

function p2kwiet3578093091972_vboxNoWeighIn_onClick_seq0(eventobject) {
    /* 
eventonClickCheckBoxEnrollWeighMember.call(this);

 */
    eventonClickbtnNoWeighIn.call(this);
};

function p2kwiet3578093091972_vboxCheckAtRisk_onClick_seq0(eventobject) {
    eventonClickAtRiskCheckBox.call(this);
};

function p2kwiet3578093091972_txtNotes_onDone_seq0() {
    isNoteUpdated = true;
};

function p2kwiet3578093091972_hboxSubscriptionTypeSection_onClick_seq0(eventobject) {
    eventonClickhboxMemberSection.call(this);
};

function p2kwiet3578093091972_txtSubscriptionID_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onEndEditingForSubID.call(this);
};

function p2kwiet3578093091972_btnScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet3578093092017_frmProductReturns_preshow_seq0(eventobject, neworientation) {
    resetVars.call(this);
};

function p2kwiet3578093092017_frmProductReturns_postshow_seq0(eventobject, neworientation) {
    onChangeMemberType.call(this);
};

function p2kwiet3578093092017_frmProductReturns_onhide_seq0(eventobject, neworientation) {
    hboxHeaderWithCancelBtn.btnScan.setVisibility(true);
};

function p2kwiet3578093092017_cmbxMemberType_onSelection_seq0(eventobject) {
    onChangeMemberType.call(this);
};

function p2kwiet3578093092017_txtLname_onDone_seq0(eventobject, changedtext) {
    eventOnClickTransactionSearchText.call(this);
};

function p2kwiet3578093092017_txtFname_onDone_seq0(eventobject, changedtext) {
    eventOnClickTransactionSearchText.call(this);
};

function p2kwiet3578093092017_vbox1332450755510435_onClick_seq0(eventobject) {
    eventOnClickTimeSortImg.call(this);
};

function p2kwiet3578093092017_segPrdReturns_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSelectRowOfProductReturnsList.call(this);
};

function p2kwiet3578093092017_btnSimpleRet_onClick_seq0(eventobject) {
    eventOnSelectSimpleReturnBtn.call(this);
};

function p2kwiet3578093092033_frmReceipt_preshow_seq0(eventobject, neworientation) {
    eventOnPreShowBindReceiptData.call(this);
};

function p2kwiet3578093092033_vbox12443534676066565_onClick_seq0(eventobject) {
    frmHomeScreen.show();
};

function p2kwiet3578093092033_btnOK_onClick_seq0(eventobject) {
    evenOnPostShowHomeScreen();
};

function p2kwiet3578093092060_frmSavedLocations_postshow_seq0(eventobject, neworientation) {
    getSavedLocationData.call(this);
};

function p2kwiet3578093092060_vbox12443534676066565_onClick_seq0(eventobject) {
    frmSavedLocations.destroy();
    popupAddSavedLocation.dismiss();
    //frmLogin.show();
    if (glbMeetingNum != "") {
        frmHomeScreen.show();
    } else if (glbMeetingNum == "") {
        frmHomeScreenNoMeeting.show();
    }
};

function p2kwiet3578093092060_btnAddNew_onClick_seq0(eventobject) {
    eventOnClickAddMyLocationPopup.call(this);
};

function p2kwiet3578093092060_vbxDeleteLocation_onClick_seq0(eventobject, context) {
    alertForDeleteSavedLocation.call(this);
};

function p2kwiet3578093092083_frmSelectMeeting_preshow_seq0(eventobject, neworientation) {
    hideCCImage.call(this);
};

function p2kwiet3578093092083_frmSelectMeeting_postshow_seq0(eventobject, neworientation) {
    /* 
onPostShowMeetingForm.call(this);

 */
    getAllProductData.call(this);
    eventOnPostShowSelectMeetingForm.call(this);
    createMilestoneLookUp.call(this);
    setDataFromAppSetting.call(this);
    createStateLookUp.call(this);
    setHeight.call(this);
};

function p2kwiet3578093092083_frmSelectMeeting_init_seq0(eventobject, neworientation) {
    onInitMeetingForm.call(this);
    /* 
onPostShowMeetingForm.call(this);

 */
};

function p2kwiet3578093092083_vbox156335075082754_onClick_seq0(eventobject) {
    checkDeviceONMeeting.call(this);
};

function p2kwiet3578093092083_vboxSelMeetingLogout_onClick_seq0(eventobject) {
    logoutApplication.call(this);
};

function p2kwiet3578093092083_segMeetingsList_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    /* 
frmEnrollNewMember.show();
	
 */
};

function p2kwiet3578093092083_btnOpen_onClick_seq0(eventobject, context) {
    eventOnclickMeetingSegment.call(this);
};

function p2kwiet3578093092083_btnNoMeeting_onClick_seq0(eventobject) {
    createMilestoneLookUp.call(this);
    eventOnClickNoMeeting.call(this);
};

function p2kwiet3578093092253_vbox12443534676066565_onClick_seq0(eventobject) {
    frmHomeScreen.show();
};

function p2kwiet3578093092425_frmTallyMeetingCashout_preshow_seq0(eventobject, neworientation) {
    /* 
onpreShowfrmTallyMeetingCashoutStartBarcodeScanner.call(this);

 */
};

function p2kwiet3578093092425_frmTallyMeetingCashout_postshow_seq0(eventobject, neworientation) {
    checkContinueState.call(this);
    bindMeetingAndLocationData.call(this);
};

function p2kwiet3578093092425_frmTallyMeetingCashout_onhide_seq0(eventobject, neworientation) {
    /* 
onHideAndOnDestroyfrmTallyMeetingCashoutStopBarcodeScanner.call(this);

 */
};

function p2kwiet3578093092425_frmTallyMeetingCashout_onDestroy_seq0(eventobject, neworientation) {
    onHideAndOnDestroyfrmTallyMeetingCashoutStopBarcodeScanner.call(this);
};

function p2kwiet3578093092425_vboxCancelImage_onClick_seq0(eventobject) {
    frmHomeScreen.show();
};

function p2kwiet3578093092425_hboxNumberOfBanks_onClick_seq0(eventobject) {
    /* 
frmTallyMeetingCashout.txtBanksInThisMeeting.setFocus(true);

 */
    onClickNumberOfBanksSelect.call(this);
};

function p2kwiet3578093092425_txtCash_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCash");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCash.text, frmTallyMeetingCashout.lblMEGCash.text, "lblDiffCash");
};

function p2kwiet3578093092425_txtChecks_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtChecks");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtChecks.text, frmTallyMeetingCashout.lblMEGChecks.text, "lblDiffChecks");
};

function p2kwiet3578093092425_txtCreditCard_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCreditCard");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCreditCard.text, frmTallyMeetingCashout.lblMEGCreditCard.text, "lblDiffCreditCard");
};

function p2kwiet3578093092425_txtDebitCard_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtDebitCard");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtDebitCard.text, frmTallyMeetingCashout.lblMEGDebit.text, "lblDiffDebitCard");
};

function p2kwiet3578093092425_txtCreditSlipsRedeemed_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCreditSlipsRedeemed");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCreditSlipsRedeemed.text, frmTallyMeetingCashout.lblMEGCreditSlipsRedeemed.text, "lblDiffCreditSlipsRedeemed");
};

function p2kwiet3578093092425_txtCreditSlipsIssued_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromInMyBankTextBox.call(this, "txtCreditSlipsIssued");
    eventOnTextChangeInMyBankTextboxes.call(this, frmTallyMeetingCashout.txtCreditSlipsIssued.text, frmTallyMeetingCashout.lblMEGCreditSlipsIssued.text, "lblDiffCreditSlipsIssued");
};

function p2kwiet3578093092425_txtBankDepositSlipNumber_onTextChange_seq0(eventobject, changedtext) {
    removeCommaAndDotFromDepositSliNumberTextBox.call(this);
};

function p2kwiet3578093092425_btnScan_onClick_seq0(eventobject) {
    onpreShowfrmTallyMeetingCashoutStartBarcodeScanner.call(this);
};

function p2kwiet3578093092425_btnContinue_onClick_seq0(eventobject) {
    eventonclickNavigatetoTimeSheet.call(this);
};

function p2kwiet3578093092694_frmTallyMeetingReport_postshow_seq0(eventobject, neworientation) {
    /* 
MEGTotalCalcultaion.call(this);

 */
    DisplayTallyMettingReportData.call(this);
};

function p2kwiet3578093092694_vboxCancelImage_onClick_seq0(eventobject) {
    frmHomeScreen.show();
};

function p2kwiet3578093092694_hbox1388753862500523_onClick_seq0(eventobject) {
    checkBoxToggle.call(this);
};

function p2kwiet3578093092694_btnBack_onClick_seq0(eventobject) {
    navigateToTallyTimesheet.call(this);
};

function p2kwiet3578093092694_btnSubmit_onClick_seq0(eventobject) {
    onclickSubmitTallyReport.call(this);
};

function p2kwiet3578093092757_frmTallyMeetingTimeSheet_preshow_seq0(eventobject, neworientation) {
    /* 
eventPreShow_TallyTimesheet.call(this);

 */
};

function p2kwiet3578093092757_frmTallyMeetingTimeSheet_postshow_seq0(eventobject, neworientation) {
    /* 
MEGTotalCalcultaion.call(this);

 */
    eventPreShow_TallyTimesheet.call(this);
};

function p2kwiet3578093092757_vboxCancelImage_onClick_seq0(eventobject) {
    frmHomeScreen.show();
};

function p2kwiet3578093092757_segTimesheet_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickEditEmpTimeButton.call(this);
};

function p2kwiet3578093092757_vbox1388753862174093_onClick_seq0(eventobject, context) {
    eventOnClickAddTimeFromSegmentEdit.call(this);
};

function p2kwiet3578093092757_vbox385389561521639_onClick_seq0(eventobject, context) {
    eventOnClickDeleteTimesheetRecord.call(this);
};

function p2kwiet3578093092757_btnAddTime_onClick_seq0(eventobject) {
    eventOnClickAddTimeButton.call(this);
    eventOnClickAddTime();
    /* 
eventOnClickAddTime.call(this,eventobject);

 */
};

function p2kwiet3578093092757_btnBack_onClick_seq0(eventobject) {
    eventonclickBtnBack.call(this);
};

function p2kwiet3578093092757_btnContinue_onClick_seq0(eventobject) {
    navigateToReport.call(this);
};

function p2kwiet3578093093179_frmTallyReports_postshow_seq0(eventobject, neworientation) {
    onPostShowTallyReports.call(this);
};

function p2kwiet3578093093179_vboxCancelImage_onClick_seq0(eventobject) {
    if (kony.application.getPreviousForm().id == frmSelectMeeting.id) {
        frmSelectMeeting.show();
    } else {
        if (glbMeetingNum != "") {
            frmHomeScreen.show();
        } else if (glbMeetingNum == "") {
            frmHomeScreenNoMeeting.show();
        }
    }
};

function p2kwiet3578093093179_hboxDatePickerPopup_onClick_seq0(eventobject) {
    onSelectTallyMeetingDate.call(this);
};

function p2kwiet3578093093179_vboxMeetingsPopup_onClick_seq0(eventobject) {
    onClickvboxMeetingsReport.call(this);
};

function p2kwiet3578093093179_vbox674499_onClick_seq0(eventobject) {
    onClickTallyTabs.call(this);
};

function p2kwiet3578093093388_frmViewMemberProfile_preshow_seq0(eventobject, neworientation) {
    IsViewMember = FlowForScreens.ViewMember;
    isSynForMPActivationFromProfile = false;
};

function p2kwiet3578093093388_frmViewMemberProfile_postshow_seq0(eventobject, neworientation) {
    onPostShowViewMemberProfile.call(this);
};

function p2kwiet3578093093388_vboxEditNote_onClick_seq0(eventobject) {
    showPopupAddNote.call(this, "edit");
};

function p2kwiet3578093093388_vboxAddNote_onClick_seq0(eventobject) {
    showPopupAddNote.call(this, "add");
};

function p2kwiet3578093093388_vboxSortImg_onClick_seq0(eventobject) {
    /* 
eventOnClickVboxSortAdvResult.call(this);

 */
};

function p2kwiet3578093093388_segMemberProfileDetails_onReachingEnd_seq0(eventobject) {
    /* 
eventOnClickBtnLoadMoreDetails.call(this);

 */
};

function p2kwiet3578093093388_vboxPaymentSection_onClick_seq0(eventobject) {
    onReEnrollEditProfilePopupOpen.call(this);
};

function p2kwiet3578093093388_vboxNotesSection_onClick_seq0(eventobject) {
    /* 
alertForTermed.call(this);

 */
    onClickNoteIconForReEnroll.call(this);
};

function p2kwiet3578093093388_vboxWeighSection_onClick_seq0(eventobject) {
    /* 
eventOnClickWeighIconProfilePage.call(this);

 */
    /* 
displayNote.call(this);

 */
    IsViewMember = FlowForScreens.ViewMember;
    eventonClickvbxProcessMemberForProfileSearch.call(this);
};

function p2kwiet3578093093397_addMemberActionsSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onRowClickFromActionAddMemberPopup.call(this);
};

function p2kwiet3578093093405_segActions_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSelectRowForActions.call(this);
};

function p2kwiet3578093093413_enrollMemberActionsSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onRowClickFromActionEnrollMemberPopup.call(this);
};

function p2kwiet3578093093421_processMemberActionsSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onRowClickFromActionPopup.call(this);
};

function p2kwiet3578093093433_vbox1323126655416692_onClick_seq0(eventobject) {
    popupAddEmail.dismiss();
    if (popupAddEmail.txtEmailAddress.text == "" || popupAddEmail.txtEmailAddress.text == undefined) frmPayment.imgSendReceipt.src = "icn_checkbox_unchecked.png";
};

function p2kwiet3578093093433_vboxAddEmail_onClick_seq0(eventobject) {
    saveEmail.call(this);
};

function p2kwiet3578093093450_vboxCancelImage_onClick_seq0(eventobject) {
    popupAddNote.dismiss();
};

function p2kwiet3578093093450_vboxDoneImage_onClick_seq0(eventobject) {
    onDonePopupAddNote.call(this);
};

function p2kwiet3578093093479_vboxCancelImage_onClick_seq0(eventobject) {
    popupAddSavedLocation.dismiss();
};

function p2kwiet3578093093479_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickSaveAddLocationData.call(this);
};

function p2kwiet3578093093479_txtZip_onDone_seq0(eventobject, changedtext) {
    eventOnClickSearchSavedLocationByZip.call(this);
};

function p2kwiet3578093093479_segmentSearchLocationsResult_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickAddLocationPopupRow.call(this);
    /* 
eventOnClickRowSelectLocation.call(this);

 */
};

function p2kwiet3578093093566_popupAddTime_init_seq0(eventobject, neworientation) {
    initAddTimePopUp.call(this);
};

function p2kwiet3578093093566_vboxCancelImage_onClick_seq0(eventobject) {
    popupAddTime.dismiss();
};

function p2kwiet3578093093566_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickAddTimeSaveData.call(this);
};

function p2kwiet3578093093566_hboxMemberDetail_onClick_seq0(eventobject) {
    eventonClickhboxEmpSearchSection.call(this);
};

function p2kwiet3578093093566_hbxEmpDetails_onClick_seq0(eventobject) {
    eventonClickhboxEmpSearchSection.call(this);
};

function p2kwiet3578093093566_hboxEmpPosition_onClick_seq0(eventobject) {
    eventonClickhboxEmpPositionSection.call(this);
};

function p2kwiet3578093093566_hbox685083128282838_onClick_seq0(eventobject) {
    eventonClickStartTime.call(this);
};

function p2kwiet3578093093566_hboxEndTimeSection_onClick_seq0(eventobject) {
    eventonClickEndTime.call(this);
};

function p2kwiet3578093093566_hboxBreakStartTimeSection_onClick_seq0(eventobject) {
    eventonClickBreakStartTime.call(this);
};

function p2kwiet3578093093566_hboxBreakEndTimeSection_onClick_seq0(eventobject) {
    eventonClickBreakEndTime.call(this);
};

function p2kwiet3578093093566_vbox38988707143655_onClick_seq0(eventobject) {
    eventonClickIsParticipatedinMetingSetup.call(this);
};

function p2kwiet3578093093566_vboxMeetingSetup_onClick_seq0(eventobject) {
    eventonClickIsMentorTraining.call(this);
};

function p2kwiet3578093093594_popupAddWeigh_onhide_seq0(eventobject, neworientation) {
    ClearWeightInfo.call(this);
};

function p2kwiet3578093093594_vboxCancelImage_onClick_seq0(eventobject) {
    dismissWeightPopup.call(this);
};

function p2kwiet3578093093594_vboxDoneImage_onClick_seq0(eventobject) {
    eventonclickToSaveweigh.call(this);
};

function p2kwiet3578093093594_vboxDOBSection_onClick_seq0(eventobject) {
    eventOnClickDateSelection.call(this);
};

function p2kwiet3578093093594_txtAddWeight_iPad_onEndEditing_seq0(eventobject, changedtext) {
    onDoneEditingAddWeightText.call(this);
};

function p2kwiet3578093093594_btnNWI_onClick_seq0(eventobject) {
    eventonClickNoWeighInpopUpAddWeigh.call(this);
};

function p2kwiet3578093093649_popupAdvancedSearch_init_seq0(eventobject, neworientation) {
    onPostShowAdvanceSearchPopup.call(this);
};

function p2kwiet3578093093649_cmbSearchCriteria_onSelection_seq0(eventobject) {
    eventOnSelectionCmbSearchCriteria.call(this, eventobject);
};

function p2kwiet3578093093649_hboxMemberTypeSection_onClick_seq0(eventobject) {
    eventonClickVboxMemberTypeSection.call(this);
};

function p2kwiet3578093093649_hboxMemberStatusSection_onClick_seq0(eventobject) {
    eventonClickVboxMemberStatusSection.call(this);
};

function p2kwiet3578093093649_cmbLocationCityState_onSelection_seq0(eventobject) {
    eventOnSelectionCmbLocationCityState.call(this);
};

function p2kwiet3578093093649_hboxState_onClick_seq0(eventobject) {
    eventonClickhboxState.call(this);
};

function p2kwiet3578093093649_hboxMeetingLocationSection_onClick_seq0(eventobject) {
    evenOnClickHboxMeetingLocationSection.call(this);
};

function p2kwiet3578093093658_hbox1388753862377881_onClick_seq0(eventobject) {
    dismissPopupAlert.call(this);
};

function p2kwiet3578093093681_vboxCancelImage_onClick_seq0(eventobject) {
    popupBMINote.textareaBMINote.text = "";
    popupBMINote.dismiss();
};

function p2kwiet3578093093681_vboxDoneImage_onClick_seq0(eventobject) {
    saveBMINote.call(this);
};

function p2kwiet3578093093692_vboxCancelImage_onClick_seq0(eventobject) {
    popupCategoryType.dismiss();
};

function p2kwiet3578093093692_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageHeaderCategoryType.call(this);
};

function p2kwiet3578093093731_vboxCancelImage_onClick_seq0(eventobject) {
    popupChangeMemberStatus.dismiss();
};

function p2kwiet3578093093731_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnclickChangeStatus.call(this);
};

function p2kwiet3578093093731_vboxSubscriptionTypeSection_onClick_seq0(eventobject) {
    eventonClickhboxMemberStatusSection.call(this);
};

function p2kwiet3578093093731_vboxDuration_onClick_seq0(eventobject) {
    eventonClickhboxDurationSection.call(this);
};

function p2kwiet3578093093731_vboxReason_onClick_seq0(eventobject) {
    eventonClickVboxReasonForStatusChange.call(this);
};

function p2kwiet3578093093743_vboxCancelImage_onClick_seq0(eventobject) {
    eventOnCancelChangeMemberTransition.call(this);
};

function p2kwiet3578093093743_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickDoneChangeMemberStatus.call(this);
};

function p2kwiet3578093093743_segMemberStatus_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnRowClickStatusSegment.call(this);
};

function p2kwiet3578093093757_vboxCancelImage_onClick_seq0(eventobject) {
    popupChangeMemberType.dismiss();
};

function p2kwiet3578093093757_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnSaveReasonMemberShipType.call(this);
};

function p2kwiet3578093093769_vboxCancelImage_onClick_seq0(eventobject) {
    popupChangeMemberTypeForProcessMember.dismiss();
};

function p2kwiet3578093093769_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnSaveReasonMemberShipTypeForProcessMember.call(this);
};

function p2kwiet3578093093782_vboxCancelImage_onClick_seq0(eventobject) {
    popupChangePersonalGoal.dismiss();
};

function p2kwiet3578093093782_vboxDoneImage_onClick_seq0(eventobject) {
    onDonePopupPersonalGoal.call(this);
};

function p2kwiet3578093093782_txtPersonalGoalWeight_onDone_seq0(eventobject, changedtext) {
    onDoneTextChangeStartWeight.call(this);
};

function p2kwiet3578093093798_vboxCancelImage_onClick_seq0(eventobject) {
    popupChangeStartWeight.dismiss();
};

function p2kwiet3578093093798_vboxDoneImage_onClick_seq0(eventobject) {
    onClickSavePopupChangeStartWeight.call(this);
};

function p2kwiet3578093093798_txtWeight_onDone_seq0(eventobject, changedtext) {
    onDoneTextChangeStartWeight.call(this);
};

function p2kwiet3578093093808_vboxCancelImage_onClick_seq0(eventobject) {
    popupChangeTermedMemberStatus.dismiss();
};

function p2kwiet3578093093808_hbox12443534676997939_onClick_seq0(eventobject) {
    alertForMemberStatusActive.call(this);
};

function p2kwiet3578093093820_vboxCancelImage_onClick_seq0(eventobject) {
    popupCheckedInFilter.dismiss();
};

function p2kwiet3578093093820_vboxDoneImage_onClick_seq0(eventobject) {
    onclickvboxDoneImageCheckedInMember.call(this);
};

function p2kwiet3578093093835_popupCurrentMeeting_init_seq0(eventobject, neworientation) {
    //popupCurrentMeeting.pickerCurrMeeting.masterData=MeetingDataForPicker;
    /* 
getCurrentMeetingDropDownData.call(this);

 */
};

function p2kwiet3578093093835_vboxCancelImage_onClick_seq0(eventobject) {
    popupCurrentMeeting.dismiss();
};

function p2kwiet3578093093835_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageHeader.call(this);
};

function p2kwiet3578093093835_segMeetingList_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventonClickDoneImageHeader.call(this);
};

function p2kwiet3578093093850_popupDateOfBirth_init_seq0(eventobject, neworientation) {
    /* 
eventinitDOBPopUp.call(this,null);

 */
};

function p2kwiet3578093093850_vboxCancelImage_onClick_seq0(eventobject) {
    isSegmentDate = false;
    isExpirationDate = false;
    if (IsAddIndividual != FlowForScreens.AddIndividual) {
        IsStartDate = false;
    }
    popupDateOfBirth.dismiss();
};

function p2kwiet3578093093850_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneDOBPopUp.call(this);
};

function p2kwiet3578093093861_vboxCancelImage_onClick_seq0(eventobject) {
    popupDiscount.dismiss();
};

function p2kwiet3578093093861_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneDOBPopUp.call(this);
};

function p2kwiet3578093093861_segmentApplyDiscount_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventonClicksegmentApplyDiscount.call(this);
};

function p2kwiet3578093093878_vboxCancelImage_onClick_seq0(eventobject) {
    //popopupDiscountData.hboxQuantity.isVisible=false;
    //popopupDiscountData.segmentApplyDiscount.isVisible=false;
    popupDiscountData.dismiss();
};

function p2kwiet3578093093878_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageDiscount.call(this);
};

function p2kwiet3578093093892_popupDuration_init_seq0(eventobject, neworientation) {
    eventinitDurationPopUp.call(this);
};

function p2kwiet3578093093892_vboxCancelImage_onClick_seq0(eventobject) {
    popupChangeMemberStatus.isModal = true;
    popupDuration.dismiss();
};

function p2kwiet3578093093892_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneDurationPopUp.call(this);
};

function p2kwiet3578093093898_editMemberProfileSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSelectingFromPopup.call(this);
};

function p2kwiet3578093093918_vboxCancelImage_onClick_seq0(eventobject) {
    dismissEmployeeWeightPopup.call(this);
};

function p2kwiet3578093093918_vboxNoWeighIn_onClick_seq0(eventobject) {
    onclickNWIEmpWeightBtn.call(this);
};

function p2kwiet3578093093918_btnCheckOut_onClick_seq0(eventobject) {
    onclickSaveEmpPopupBtn.call(this);
};

function p2kwiet3578093093965_popupEmployeeSearch_init_seq0(eventobject, neworientation) {
    /* 
getServiceProviderDetail.call(this);

 */
    /* 
popupEmployeeSearch.segEmplyoeeData.setData([
     {lblFnameData: "Jan",lblLnameData: "Doe",lblEmpNoData: "400"}, 
     {lblFnameData: "John",lblLnameData: "Doe",lblEmpNoData: "100"}, 
     {lblFnameData: "Sam",lblLnameData: "Smith",lblEmpNoData: "600"}
     ]);


 */
    hiddenControls.call(this);
};

function p2kwiet3578093093965_vboxCancelImage_onClick_seq0(eventobject) {
    popupEmployeeSearch.dismiss();
};

function p2kwiet3578093093965_txtSearch_onDone_seq0(eventobject, changedtext) {
    /* 
eventOnClickSearchProvider.call(this);

 */
    eventOnClickEmpSearchText.call(this);
};

function p2kwiet3578093093965_segEmplyoeeData_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventonClickEmpSearchRow.call(this);
};

function p2kwiet3578093093965_hbox12443534678040623_onClick_seq0(eventobject) {
    eventonClickForManualEmpEntry.call(this);
};

function p2kwiet3578093093965_txtManualSearch_iPad_onBeginEditing_seq0(eventobject, changedtext) {
    popupEmployeeSearch.btnSaveSearch.isVisible = true;
};

function p2kwiet3578093093965_btnSaveSearch_onClick_seq0(eventobject) {
    eventonClickManualEmpSaveButton.call(this);
};

function p2kwiet3578093093977_vboxCancelImage_onClick_seq0(eventobject) {
    popupGoalWeight.dismiss();
    popupActionsForProcessMember.dismiss();
};

function p2kwiet3578093093977_vboxDoneImage_onClick_seq0(eventobject) {
    onDoneUpdateGoalWeight.call(this);
};

function p2kwiet3578093093977_textareaGoalweight_Android_onEndEditing_seq0() {
    onDoneEditingGoalWeight.call(this);
};

function p2kwiet3578093093977_textareaGoalweight_iPad_onEndEditing_seq0() {
    /* 
onDoneEditingGoalWeight.call(this);

 */
};

function p2kwiet3578093093977_textareaGoalweight_onDone_seq0() {
    onDoneTextChangeGoalWeight.call(this);
};

function p2kwiet3578093093989_vboxCancelImage_onClick_seq0(eventobject) {
    dismissHeightPopup.call(this);
};

function p2kwiet3578093093989_vboxDoneImage_onClick_seq0(eventobject) {
    /* 
DonePopUpHeightClick.call(this);

 */
    eventonClickDoneHeightPopUp.call(this);
};

function p2kwiet3578093093998_HomeScreenMenuSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickSegmentForMenuOption.call(this);
};

function p2kwiet3578093093998_button39000716713230_onClick_seq0(eventobject) {
    eventOnClickSyncButton.call(this);
};

function p2kwiet3578093094060_vboxCancelImage_onClick_seq0(eventobject) {
    popupItemDetails.destroy();
};

function p2kwiet3578093094060_btnScan_onClick_seq0(eventobject) {
    /* 
startBarcodeForSubID.call(this);

 */
    startBarcodeForOfferCoupon.call(this);
};

function p2kwiet3578093094060_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickPopupItemDetailsUpdate.call(this);
};

function p2kwiet3578093094060_txtUnits_onDone_seq0(eventobject, changedtext) {
    updateProductDetailSubTotal.call(this);
};

function p2kwiet3578093094060_txtUnits_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromUnitPriceTextBox.call(this, "txtUnits");
};

function p2kwiet3578093094060_vbox12443534677214674_onClick_seq0(eventobject) {
    decrementProductCounter.call(this);
};

function p2kwiet3578093094060_vbox12443534677216043_onClick_seq0(eventobject) {
    addProductCounter.call(this);
};

function p2kwiet3578093094060_vbox12443534677208836_onClick_seq0(eventobject) {
    /* 
alert("remove brn clicked");

 */
    /* 
removeProductFromCart.call(this);

 */
};

function p2kwiet3578093094060_btnRemove_onClick_seq0(eventobject) {
    removeProductFromCart.call(this);
};

function p2kwiet3578093094060_hboxOffersSection_onClick_seq0(eventobject) {
    /* 
eventonClickVboxMemberTypeSection.call(this);

 */
};

function p2kwiet3578093094060_hboxOffersSection1_onClick_seq0(eventobject) {
    eventonClickhBoxProductOfferTypeSelection.call(this);
};

function p2kwiet3578093094060_hbox12443534677112243_onClick_seq0(eventobject) {
    /* 
eventonClickVboxMemberTypeSection.call(this);

 */
};

function p2kwiet3578093094060_txtUnitPrice_onDone_seq0(eventobject, changedtext) {
    updateProductDetailSubTotal.call(this);
};

function p2kwiet3578093094060_txtUnitPrice_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromUnitPriceTextBox.call(this, "txtUnitPrice");
};

function p2kwiet3578093094101_vboxCancelImage_onClick_seq0(eventobject) {
    eventOnClickvboxCancelImageLinkMember.call(this);
};

function p2kwiet3578093094101_txtSearch_onDone_seq0(eventobject, changedtext) {
    eventOnDonetxtSearch.call(this);
};

function p2kwiet3578093094101_vboxSortImg_onClick_seq0(eventobject) {
    eventOnClickVboxSortImgLinkMember.call(this);
};

function p2kwiet3578093094101_segLinkMember_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickSegmentSaveLinkMember.call(this);
};

function p2kwiet3578093094126_popupLogin_onhide_seq0(eventobject, neworientation) {
    glbLoginCallback = "";
};

function p2kwiet3578093094126_vboxCancelImage_onClick_seq0(eventobject) {
    popupLogin.destroy();
    glbLoginPopupOpen = false;
};

function p2kwiet3578093094126_btnLogin_onClick_seq0(eventobject) {
    eventOnClickLoginPopup.call(this);
    /* 
frmSelectMeeting.show();
	
 */
    /* 
getAllProductData.call(this);

 */
};

function p2kwiet3578093094183_vboxCancelImage_onClick_seq0(eventobject) {
    dismissLooupServiceProviderPopup.call(this);
};

function p2kwiet3578093094183_vboxDoneImage_onClick_seq0(eventobject) {
    /* 
popupLookupServiceProvider.dismiss();

 */
};

function p2kwiet3578093094183_txtSearch_onDone_seq0(eventobject, changedtext) {
    eventOnClickSearchProvider.call(this);
};

function p2kwiet3578093094183_vboxSortImg_onClick_seq0(eventobject) {
    eventOnClickLookupVboxSortImg.call(this);
};

function p2kwiet3578093094183_vbox2656947445932_onClick_seq0(eventobject, context) {
    onClickEmpWeighIcon.call(this);
};

function p2kwiet3578093094183_vboxPurchase_onClick_seq0(eventobject, context) {
    redirectToProductForSP.call(this);
};

function p2kwiet3578093094183_hboxManualEmployeeNumber_onClick_seq0(eventobject) {
    eventonClickForManualEmpEntry.call(this);
};

function p2kwiet3578093094183_txtManualEmployeeNumber_onTextChange_seq0(eventobject, changedtext) {
    checkDecimalPointAndDisallow.call(this);
};

function p2kwiet3578093094183_btnSaveEmployeeByNumber_onClick_seq0(eventobject) {
    eventonClickbtnSaveEmployeeByNumber.call(this);
};

function p2kwiet3578093094197_vboxCancelImage_onClick_seq0(eventobject) {
    gblIsMemberSearchPage = false;
    popupMeetingLocation.dismiss();
};

function p2kwiet3578093094197_vboxDoneImage_onClick_seq0(eventobject) {
    popupAdvancedSearch.lblMeetingLocationInfo.text = popupMeetingLocation.pickerMeetingLocation.selectedKeys[0];
    popupMeetingLocation.dismiss();
};

function p2kwiet3578093094225_vboxCancelImage_onClick_seq0(eventobject) {
    popupMemberNotFound.dismiss();
};

function p2kwiet3578093094225_btnEnroll_onClick_seq0(eventobject) {
    popupMemberNotFound.dismiss();
    eventOnClickPlusIconHeader.call(this);
};

function p2kwiet3578093094225_btnAdd_onClick_seq0(eventobject) {
    popupMemberNotFound.dismiss();
    eventOnClickAddIconHeader.call(this);
};

function p2kwiet3578093094225_button795271061258774_onClick_seq0(eventobject) {
    doAdvancedSearchIfNoResultFound.call(this);
};

function p2kwiet3578093094237_vboxCancelImage_onClick_seq0(eventobject) {
    gblIsMemberSearchPage = false;
    popupMemberStatus.dismiss();
};

function p2kwiet3578093094237_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickVboxDoneMemberStatus.call(this);
};

function p2kwiet3578093094249_vboxCancelImage_onClick_seq0(eventobject) {
    gblIsMemberSearchPage = false;
    popupMemberType.dismiss();
};

function p2kwiet3578093094249_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickVboxDoneMemberType.call(this);
};

function p2kwiet3578093094275_popupMemberWeightHistory_init_seq0(eventobject, neworientation) {
    getFreshStartWeightHistory.call(this);
};

function p2kwiet3578093094275_vboxCancelImage_onClick_seq0(eventobject) {
    popupMemberWeightHistory.dismiss();
    destroyPopupforMemberWeightHistory.call(this);
};

function p2kwiet3578093094275_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickSaveFreshStartWeight.call(this);
};

function p2kwiet3578093094275_imgDone_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    eventOnClickSaveFreshStartWeight.call(this);
};

function p2kwiet3578093094275_segWeightData_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventOnClickAddFreshStartRecord.call(this);
};

function p2kwiet3578093094322_popupMissedWeeks_init_seq0(eventobject, neworientation) {
    isMissedWeekPopupShowed = true;
    loadMissedWeekData.call(this);
};

function p2kwiet3578093094322_vboxCancelImage_onClick_seq0(eventobject) {
    popupMissedWeeks.destroy();
    isMissedWeekPopupShowed = false;
    loadMissedWeekData.call(this);
};

function p2kwiet3578093094322_vboxDoneImage_onClick_seq0(eventobject) {
    /* 
popupLookupServiceProvider.dismiss();

 */
    onDoneMissedWeek.call(this);
};

function p2kwiet3578093094322_vbox1332450755740884_onClick_seq0(eventobject) {
    onCheckedAllProductReturnList.call(this);
};

function p2kwiet3578093094322_vbox1332450755510435_onClick_seq0(eventobject) {
    eventOnClickDateSortImg.call(this);
};

function p2kwiet3578093094322_vboxDate_onClick_seq0(eventobject) {
    onSelectCalender.call(this);
};

function p2kwiet3578093094322_vbox46410192860709_onClick_seq0(eventobject) {
    onSelectLastAttendence.call(this);
};

function p2kwiet3578093094322_vbox1332453641765875_onClick_seq0(eventobject) {
    onSelectPasses.call(this);
};

function p2kwiet3578093094322_btnNoWeighIn_onClick_seq0(eventobject) {
    onClickNWIForMissedWeek.call(this);
};

function p2kwiet3578093094352_popupMPActivation_init_seq0(eventobject, neworientation) {
    showMpActivatedMemberData.call(this);
};

function p2kwiet3578093094352_vboxCancelImage_onClick_seq0(eventobject) {
    onClikCancelMPactivatePopup.call(this);
};

function p2kwiet3578093094352_vboxMPActivate_onClick_seq0(eventobject) {
    eventOnClickMpActivateBtn.call(this);
};

function p2kwiet3578093094352_btnIssueVoucher_onClick_seq0(eventobject, context) {
    onClickIssueVoucher.call(this);
};

function p2kwiet3578093094420_hboxLinkAccount_onClick_seq0(eventobject) {
    checkBoxToggleLink.call(this);
};

function p2kwiet3578093094420_txtSearch_onDone_seq0(eventobject, changedtext) {
    eventOnClickSearchUserNameEmail.call(this);
};

function p2kwiet3578093094420_vbox1323126655328036_onClick_seq0(eventobject, context) {
    eventOnClickCheckedMemberToLink.call(this);
};

function p2kwiet3578093094420_btnActivateMP_onClick_seq0(eventobject) {
    eventOnClickMPActivation.call(this);
};

function p2kwiet3578093094434_button141833632557495_onClick_seq0(eventobject) {
    submitNextMeeting.call(this);
};

function p2kwiet3578093094475_vboxCancelImage_onClick_seq0(eventobject) {
    popupNonTengibleoffers.destroy();
};

function p2kwiet3578093094475_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnDoneHeaderApplyOffer.call(this);
};

function p2kwiet3578093094475_hboxOffersSection_onClick_seq0(eventobject) {
    /* 
eventonClickVboxMemberTypeSection.call(this);

 */
};

function p2kwiet3578093094475_hboxOffersSection1_onClick_seq0(eventobject) {
    evenOnClickOffersRegion.call(this);
};

function p2kwiet3578093094475_hbox12443534677112243_onClick_seq0(eventobject) {
    /* 
eventonClickVboxMemberTypeSection.call(this);

 */
};

function p2kwiet3578093094475_txtUnitPrice_onTextChange_seq0(eventobject, changedtext) {
    removeCommaFromNonTGUnitPriceTextBox.call(this, "txtUnitPrice");
};

function p2kwiet3578093094488_vboxCancelImage_onClick_seq0(eventobject) {
    if (checkValidString(glbNumberOfBanks)) popupNumberOfBanks.pickerBanks.selectedKeys = [parseInt(glbNumberOfBanks) - 1];
    popupNumberOfBanks.dismiss();
};

function p2kwiet3578093094488_vboxDoneImage_onClick_seq0(eventobject) {
    onSaveNumberOfBanks.call(this);
};

function p2kwiet3578093094499_vboxCancelImage_onClick_seq0(eventobject) {
    popupOfferRegions.dismiss();
};

function p2kwiet3578093094499_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageHeaderOffersRegion.call(this);
};

function p2kwiet3578093094517_vboxCancelImage_onClick_seq0(eventobject) {
    //Reset Temp Value of tally mismatch reason 
    tallyMismatchReason = "";
    kony.print("tallyMismatchReason----->>" + tallyMismatchReason);
    popupOutOfBalance.dismiss();
};

function p2kwiet3578093094517_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickvboxDoneImageHeaderForEnterTallyReason.call(this);
};

function p2kwiet3578093094517_hboxOutofBalanceSection_onClick_seq0(eventobject) {
    eventonClickhboxOutofBalanceSection.call(this);
};

function p2kwiet3578093094528_vboxCancelImage_onClick_seq0(eventobject) {
    eventonClickvboxCancelImageHeaderForTallyReason.call(this);
};

function p2kwiet3578093094528_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickvboxDoneImageHeaderForTallyReason.call(this);
};

function p2kwiet3578093094538_vboxCancelImage_onClick_seq0(eventobject) {
    popupPhoneType.dismiss();
};

function p2kwiet3578093094538_vboxDoneImage_onClick_seq0(eventobject) {
    /* 
var SelectedValue = popupPhoneType.phoneTypeSegment.selectedItems[0]["lblEdit"];
popupPhoneType.dismiss();

 */
    /* 
onVboxDoneClickforPhonetype.call(this);

 */
};

function p2kwiet3578093094538_phoneTypeSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSelectingFromPopupPhoneType.call(this);
};

function p2kwiet3578093094701_vboxCancelImage_onClick_seq0(eventobject) {
    onClickCancelpreActivation.call(this);
};

function p2kwiet3578093094701_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickDoneActivation.call(this);
};

function p2kwiet3578093094701_btnScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet3578093094701_hbox1866786996428697_onClick_seq0(eventobject) {
    eventonClickvbocHeightSectionInPreactivation.call(this);
};

function p2kwiet3578093094701_butRegNumScan_onClick_seq0(eventobject) {
    startBarcodeForSubID.call(this);
};

function p2kwiet3578093094701_vbox265694744470808_onClick_seq0(eventobject) {
    eventOnClickStatePreActivation.call(this);
};

function p2kwiet3578093094701_vbox1563350750164362_onClick_seq0(eventobject) {
    copyBillingInfoToShippingInfo.call(this);
};

function p2kwiet3578093094701_vbox1323126655140741_onClick_seq0(eventobject) {
    eventOnClickShippingStatePreActivation.call(this);
};

function p2kwiet3578093094712_vboxCancelImage_onClick_seq0(eventobject) {
    popupProductOffers.dismiss();
};

function p2kwiet3578093094712_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageHeaderProductOfferType.call(this);
};

function p2kwiet3578093094754_vbox1332450755740884_onClick_seq0(eventobject) {
    onCheckedAllProductReturnList.call(this);
};

function p2kwiet3578093094754_segPrdReturns_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {};

function p2kwiet3578093094754_vbox1332450755734312_onClick_seq0(eventobject, context) {
    onCheckedProductReturnList.call(this);
};

function p2kwiet3578093094754_vbox1332453641765875_onClick_seq0(eventobject, context) {
    onChangeReturnQuantity.call(this);
};

function p2kwiet3578093094754_btnSimpleRet_onClick_seq0(eventobject) {
    eventOnSelectReturnBtn.call(this);
};

function p2kwiet3578093094754_btnRetCan_onClick_seq0(eventobject) {
    popupProductReturns.destroy();
};

function p2kwiet3578093094767_vboxCancelImage_onClick_seq0(eventobject) {
    popupQuantityPicker.destroy();
};

function p2kwiet3578093094767_vboxDoneImage_onClick_seq0(eventobject) {
    onSelectQuantityPickerValue.call(this);
};

function p2kwiet3578093094779_vboxCancelImage_onClick_seq0(eventobject) {
    popupReasonForStatusChange.dismiss();
};

function p2kwiet3578093094779_vboxDoneImage_onClick_seq0(eventobject) {
    eventonDoneReasonForStatusChange.call(this);
};

function p2kwiet3578093094785_reEnrollEditMemberProfileSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSelectingFromPopupReEnrollEditProfile.call(this);
};

function p2kwiet3578093094805_vboxCancelImage_onClick_seq0(eventobject) {
    popupReEntrollOrActiveTermedMember.dismiss();
};

function p2kwiet3578093094805_btnEnroll_onClick_seq0(eventobject) {
    popupReEntrollOrActiveTermedMember.dismiss();
    onClickEventForReenrollTermedMember.call(this);
};

function p2kwiet3578093094805_btnAdd_onClick_seq0(eventobject) {
    popupReEntrollOrActiveTermedMember.dismiss();
    onClickEventForActiveTermedMember.call(this);
};

function p2kwiet3578093094846_vboxCancelImage_onClick_seq0(eventobject) {
    /* 
eventOnClickCancelAdvanceSearchPopup.call(this);

 */
    /* 
ClearAdvancedSearchFields.call(this);

 */
    onClosepopupRefferalSearch.call(this);
};

function p2kwiet3578093094846_tbxLastNameHeader_onDone_seq0(eventobject, changedtext) {
    onClickGetRefferelSearch.call(this);
};

function p2kwiet3578093094846_tbxFirstNameHeader_onDone_seq0(eventobject, changedtext) {
    onClickGetRefferelSearch.call(this);
};

function p2kwiet3578093094846_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickVboxDoneImage.call(this);
    /* 
ClearAdvancedSearchFields.call(this);

 */
};

function p2kwiet3578093094846_segRefferalMember_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onRowClickpopupReferralSearch.call(this);
};

function p2kwiet3578093094870_vbox46684360572013_onClick_seq0(eventobject) {
    popupSearchLocation.dismiss();
};

function p2kwiet3578093094870_txtZip_onDone_seq0(eventobject, changedtext) {
    eventOnClickSearchLocationByZip.call(this, eventobject);
};

function p2kwiet3578093094870_segmentRecentLocations_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    /* 
changeLocation.call(this);

 */
    eventOnClickRowSelectLocation.call(this);
};

function p2kwiet3578093094882_vboxPaymentOptionCancelImage_onClick_seq0(eventobject) {
    popupSelectPaymentOption.dismiss();
};

function p2kwiet3578093094882_vboxPaymentOptionDoneImage_onClick_seq0(eventobject) {
    onSelectionOfPaymentDevices.call(this);
};

function p2kwiet3578093094892_vbox1563350750307625_onClick_seq0(eventobject) {
    popupShowWeeklyAlert.destroy();
    checkAttendMeetingForWeighIn.call(this);
};

function p2kwiet3578093094910_button141833632557511_onClick_seq0(eventobject) {
    getNextMeeting.call(this);
};

function p2kwiet3578093094910_button141833632557512_onClick_seq0(eventobject) {
    cancelStaffingGuideline.call(this);
};

function p2kwiet3578093094919_popupState_init_seq0(eventobject, neworientation) {
    getStateDropDownData.call(this);
};

function p2kwiet3578093094919_vboxCancelImage_onClick_seq0(eventobject) {
    popupState.dismiss();
};

function p2kwiet3578093094919_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageHeaderState.call(this);
};

function p2kwiet3578093094928_popupStateRefineSearch_init_seq0(eventobject, neworientation) {
    getStateDropDownDataForRefineSearch.call(this);
};

function p2kwiet3578093094928_vboxCancelImage_onClick_seq0(eventobject) {
    popupStateRefineSearch.dismiss();
};

function p2kwiet3578093094928_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageHeaderStateForRefineSearch.call(this);
};

function p2kwiet3578093094938_vboxCancelImage_onClick_seq0(eventobject) {
    popupStickyNote.dismiss();
};

function p2kwiet3578093094938_vboxDoneImage_onClick_seq0(eventobject) {
    saveStickyNote.call(this);
};

function p2kwiet3578093094947_vboxCancelImage_onClick_seq0(eventobject) {
    eventonClickvboxCancelImageHeader.call(this);
};

function p2kwiet3578093094947_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickDoneImageHeaderCheckOut.call(this);
};

function p2kwiet3578093094958_popupTallyReportOptions_init_seq0(eventobject, neworientation) {
    loadReportType.call(this);
};

function p2kwiet3578093094958_vboxCancelImage_onClick_seq0(eventobject) {
    popupTallyReportOptions.dismiss();
};

function p2kwiet3578093094958_tallyReportActionsSegment_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSelectTallyReportsRow.call(this);
};

function p2kwiet3578093094967_popupTimePicker_init_seq0(eventobject, neworientation) {
    /* 
var timePicker = new kony.ui.PickerView({
        "id": "timePicker",
        "isVisible": true,
        "masterData": [
            [
                ["12", "12"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"], 40],
            [
                ["00", "00"],
                ["01", "01"],
                ["02", "02"],
                ["03", "03"],
                ["04", "04"],
                ["05", "05"],
                ["06", "06"],
                ["07", "07"],
                ["08", "08"],
                ["09", "09"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"],
                ["14", "14"],
                ["15", "15"],
                ["16", "16"],
                ["17", "17"],
                ["18", "18"],
                ["19", "19"],
                ["20", "20"],
                ["21", "21"],
                ["22", "22"],
                ["23", "23"],
                ["24", "24"],
                ["25", "25"],
                ["26", "26"],
                ["27", "27"],
                ["28", "28"],
                ["29", "29"],
                ["31", "30"], 40],
            [
                ["1", "AM"],
                ["PM", "PM"], 20]
        ],
        "onSelection": popupTimePicker_timePicker_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    popupTimePicker.hbox133245075518468.add(timePicker);

 */
};

function p2kwiet3578093094967_timePicker_onSelection_seq0(eventobject, component, keyselected) {
    eventonSelectionTimerPicker.call(this);
};

function p2kwiet3578093094981_popupTimesheetSelectPosition_init_seq0(eventobject, neworientation) {
    bindPositionDatainSegment.call(this);
};

function p2kwiet3578093094981_vboxCancelImage_onClick_seq0(eventobject) {
    popupTimesheetSelectPosition.dismiss();
    popupTimesheetSelectPosition.destroy();
};

function p2kwiet3578093094981_vboxDoneImage_onClick_seq0(eventobject) {
    eventonClickvboxDoneImageHeaderForEEmpPosition.call(this);
};

function p2kwiet3578093094981_segEmployeePosition_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eventonClickhboxTimesheetPositionSection.call(this);
};

function p2kwiet3578093095026_vboxCancelImage_onClick_seq0(eventobject) {
    eventOnClickCancelAdvanceSearchPopup.call(this);
    ClearAdvancedSearchFields.call(this);
};

function p2kwiet3578093095026_vboxDoneImage_onClick_seq0(eventobject) {
    eventOnClickVboxDoneImage.call(this);
    /* 
ClearAdvancedSearchFields.call(this);

 */
};

function p2kwiet3578093095026_vboxMemberIdCancelImage_onClick_seq0(eventobject) {
    eventOnClickCancelAdvanceSearchPopup.call(this);
    ClearAdvancedSearchFields.call(this);
};

function p2kwiet3578093095026_vboxMemberIdDoneImage_onClick_seq0(eventobject) {
    eventOnClickVboxMemberIdDoneImage.call(this);
    /* 
ClearAdvancedSearchFields.call(this);

 */
};

function p2kwiet3578093095026_vboxPhNoCancelImage_onClick_seq0(eventobject) {
    eventOnClickCancelAdvanceSearchPopup.call(this);
    ClearAdvancedSearchFields.call(this);
};

function p2kwiet3578093095026_vboxPhNoDoneImage_onClick_seq0(eventobject) {
    eventOnClickVboxPhoneNoDoneImage.call(this);
    /* 
ClearAdvancedSearchFields.call(this);

 */
};

function p2kwiet3578093095026_vboxUserIdCancelImage_onClick_seq0(eventobject) {
    eventOnClickCancelAdvanceSearchPopup.call(this);
    ClearAdvancedSearchFields.call(this);
};

function p2kwiet3578093095026_vboxUserIdDoneImage_onClick_seq0(eventobject) {
    eventOnClickUserIdDoneImage.call(this);
    /* 
ClearAdvancedSearchFields.call(this);

 */
};

function p2kwiet3578093095099_vbox12443534674948653_onClick_seq0(eventobject) {
    eventonClickBackFromSearchResult.call(this);
};

function p2kwiet3578093095099_vboxAdvanceSearchNameSection_onClick_seq0(eventobject) {
    eventOnClickvboxNameAdvanceSearchPopupResultPage.call(this);
};

function p2kwiet3578093095099_tbxLastNameHeader_onDone_seq0(eventobject, changedtext) {
    evenOnDoneSearchFNameLNameResultPage.call(this);
};

function p2kwiet3578093095099_tbxFirstNameHeader_onDone_seq0(eventobject, changedtext) {
    evenOnDoneSearchFNameLNameResultPage.call(this);
};

function p2kwiet3578093095099_vboxCurrNameSection_onClick_seq0(eventobject) {
    /* 
eventonClickvboxNameCurrMeetingSection.call(this);

 */
};

function p2kwiet3578093095099_vbox12443534674948671_onClick_seq0(eventobject) {
    eventOnClickAddIconHeader.call(this);
};

function p2kwiet3578093095099_vbox12443534674948675_onClick_seq0(eventobject) {
    eventOnClickPlusIconHeader.call(this);
};

function p2kwiet3578093095099_vbox12443534675040846_onClick_seq0(eventobject) {
    eventonClickBackFromSearchResult.call(this);
};

function p2kwiet3578093095099_vboxAdvanceSearchPhoneSection_onClick_seq0(eventobject) {
    eventOnClickvboxPhoneAdvanceSearchPopupResultPage.call(this);
};

function p2kwiet3578093095099_tbxPhoneNumberHeader_onDone_seq0(eventobject, changedtext) {
    eventOnDoneSearchPhoneNoResultPage.call(this);
};

function p2kwiet3578093095099_vboxCurrMeetingPhoneSection_onClick_seq0(eventobject) {
    /* 
eventonClickvboxPhoneCurrMeetingSection.call(this);

 */
};

function p2kwiet3578093095099_vbox12443534675040864_onClick_seq0(eventobject) {
    eventOnClickAddIconHeader.call(this);
};

function p2kwiet3578093095099_vbox12443534675040868_onClick_seq0(eventobject) {
    eventOnClickPlusIconHeader.call(this);
};

function p2kwiet3578093095099_vbox12443534675089934_onClick_seq0(eventobject) {
    eventonClickBackFromSearchResult.call(this);
};

function p2kwiet3578093095099_vboxAdvanceSearchUserIdSection_onClick_seq0(eventobject) {
    eventOnClickvboxUserIdAdvanceSearchPopupResultPage.call(this);
};

function p2kwiet3578093095099_tbxUserIDHeader_onDone_seq0(eventobject, changedtext) {
    eventOnDoneSearchUserIdResultPage.call(this);
};

function p2kwiet3578093095099_vboxCurrMeetingUserSection_onClick_seq0(eventobject) {
    /* 
eventonClickvboxUserIdCurrMeetingSection.call(this);

 */
};

function p2kwiet3578093095099_vbox12443534675089952_onClick_seq0(eventobject) {
    eventOnClickAddIconHeader.call(this);
};

function p2kwiet3578093095099_vbox12443534675089956_onClick_seq0(eventobject) {
    eventOnClickPlusIconHeader.call(this);
};

function p2kwiet3578093095099_vbox12443534675101022_onClick_seq0(eventobject) {
    eventonClickBackFromSearchResult.call(this);
};

function p2kwiet3578093095099_vboxAdvanceSearchMemberIdSection_onClick_seq0(eventobject) {
    eventOnClickvboxMemberIdAdvanceSearchPopupResultPage.call(this);
};

function p2kwiet3578093095099_tbxMemberIDHeader_onDone_seq0(eventobject, changedtext) {
    eventOnDoneSearchMemberIdResultPage.call(this);
};

function p2kwiet3578093095099_vboxCurrMeetingMemberSection_onClick_seq0(eventobject) {
    /* 
eventonClickvboxMemberIdCurrMeetingSection.call(this);

 */
};

function p2kwiet3578093095099_vbox12443534675101040_onClick_seq0(eventobject) {
    eventOnClickAddIconHeader.call(this);
};

function p2kwiet3578093095099_vbox12443534675101044_onClick_seq0(eventobject) {
    eventOnClickPlusIconHeader.call(this);
};

function p2kwiet3578093095117_vbox13932202681386599_onClick_seq0(eventobject) {
    ClearVariables();
    glbMemberId = 0;
    if (isSearchPage) {
        isSearchPage = false;
        frmMemberProfileSearch.show();
    } else {
        if (isPMFromHomeScreen == true) {
            isPMFromHomeScreen = false;
        }
        evenOnPostShowHomeScreen();
        //frmHomeScreen.show();
    }
    isLifetimeInChangeMemberType = false;
    /* 
frmMemberProfileSearch.show();
	
 */
};

function p2kwiet3578093095117_vboxEditPopup_onClick_seq0(eventobject) {
    /* 
Clear Variables();

 */
    onEditProfilePopupOpen.call(this);
};

function p2kwiet3578093095134_vbox13932202681386599_onClick_seq0(eventobject) {
    ClearVariables.call(this);
    eventonClickCancelEnrollHeader.call(this);
    ClearInputFields.call(this);
    isLifetimeInChangeMemberType = false;
    popupMissedWeeks.destroy();
};

function p2kwiet3578093095134_btnScan_onClick_seq0(eventobject) {
    onPostShowPopulateBarcodeSKU.call(this);
};

function p2kwiet3578093095134_vboxCurrMeetingSection_onClick_seq0(eventobject) {
    eventonClickvboxCurrMeetingSection.call(this);
};

function p2kwiet3578093095207_vbxMenu_onClick_seq0(eventobject) {
    eventonClickBulletHmeScr.call(this);
};

function p2kwiet3578093095207_vboxCurrMeetingSection_onClick_seq0(eventobject) {
    eventonClickvboxCurrMeetingSectionHomeScreen.call(this);
};

function p2kwiet3578093095207_cmbxMeetingMemberType_onSelection_seq0(eventobject) {
    onSelectMeetingMembers.call(this);
};

function p2kwiet3578093095207_vBoxSelectFilter_onClick_seq0(eventobject) {
    eventonClickFilterBy.call(this);
};

function p2kwiet3578093095207_hboxSelectFilter_onClick_seq0(eventobject) {
    eventonClickFilterBy.call(this);
};

function p2kwiet3578093095207_vbxAdvancedSearch_onClick_seq0(eventobject) {
    eventOnClickVbxAdvancedSearch.call(this);
};

function p2kwiet3578093095207_tbxLastNameHeader_iPad_onEndEditing_seq0(eventobject, changedtext) {
    /* 
getSimpleSearchData.call(this);

 */
};

function p2kwiet3578093095207_tbxLastNameHeader_onDone_seq0(eventobject, changedtext) {
    getSimpleSearchData.call(this);
};

function p2kwiet3578093095207_tbxFirstNameHeader_iPad_onEndEditing_seq0(eventobject, changedtext) {
    /* 
getSimpleSearchData.call(this);

 */
};

function p2kwiet3578093095207_tbxFirstNameHeader_onDone_seq0(eventobject, changedtext) {
    getSimpleSearchData.call(this);
};

function p2kwiet3578093095207_btnScan_onClick_seq0(eventobject) {
    searchMemberUsingBarcode.call(this);
};

function p2kwiet3578093095207_vboxTally_onClick_seq0(eventobject) {
    checkDate.call(this);
    eventOnClickTallyButton.call(this);
};

function p2kwiet3578093095207_vboxDirectSale_onClick_seq0(eventobject) {
    eventOnPreShowSetHeaderLabelDirectSale.call(this);
};

function p2kwiet3578093095207_vboxMPActivate_onClick_seq0(eventobject) {
    eventOnClickMpActivateBtn.call(this);
};

function p2kwiet3578093095207_vbxAddnWeightMemberHome_onClick_seq0(eventobject) {
    eventOnClickAddIconHeader.call(this);
};

function p2kwiet3578093095207_vbxEnrollMember_onClick_seq0(eventobject) {
    eventOnClickPlusIconHeader.call(this);
};

function p2kwiet3578093095214_vboxCancelImage_onClick_seq0(eventobject) {
    frmHomeScreen.show();
};

function p2kwiet3578093095214_btnScan_onClick_seq0(eventobject) {
    isFromOffersForm = false;
    onPostShowPopulateBarcodeSKU.call(this);
};

function p2kwiet3578093095238_vbxMenu_onClick_seq0(eventobject) {
    eventonClickBulletHmeScr.call(this);
};

function p2kwiet3578093095238_vbxAdvancedSearch_onClick_seq0(eventobject) {
    eventOnClickVbxAdvancedSearch.call(this);
};

function p2kwiet3578093095238_tbxLastNameHeader_iPad_onEndEditing_seq0(eventobject, changedtext) {
    /* 
getSimpleSearchData.call(this);

 */
};

function p2kwiet3578093095238_tbxLastNameHeader_onDone_seq0(eventobject, changedtext) {
    getSimpleSearchData.call(this);
};

function p2kwiet3578093095238_tbxFirstNameHeader_iPad_onEndEditing_seq0(eventobject, changedtext) {
    /* 
getSimpleSearchData.call(this);

 */
};

function p2kwiet3578093095238_tbxFirstNameHeader_onDone_seq0(eventobject, changedtext) {
    getSimpleSearchData.call(this);
};

function p2kwiet3578093095238_btnScan_onClick_seq0(eventobject) {
    searchMemberUsingBarcode.call(this);
};

function p2kwiet3578093095238_vboxCurrMeetingSection_onClick_seq0(eventobject) {
    eventonClickvboxCurrMeetingSectionHomeScreen.call(this);
};

function p2kwiet3578093095238_vbxAddnWeightMemberHome_onClick_seq0(eventobject) {
    eventOnClickAddIconHeader.call(this);
};

function p2kwiet3578093095238_vbxEnrollMember_onClick_seq0(eventobject) {
    eventOnClickPlusIconHeader.call(this);
};

function p2kwiet3578093095249_vboxCancelImage_onClick_seq0(eventobject) {
    popupSearchLocation.dismiss();
};

function p2kwiet3578093095249_vboxMeetingImage_onClick_seq0(eventobject) {
    popupSearchLocation.dismiss();
};

function p2kwiet3578093095275_button14183363254816_onClick_seq0(eventobject) {
    eventonClickvBoxPayment.call(this);
};

function p2kwiet3578093095275_vboxProcessMemberAction_onClick_seq0(eventobject) {
    /* 
eventonClickvboxProcessMemberActions.call(this);

 */
};

function p2kwiet3578093095275_link1418336325367892_onClick_seq0(eventobject) {
    showMissedWeeks.call(this);
};

function p2kwiet3578093095275_link1418336325838349_onClick_seq0(eventobject) {
    showPersonalGoalWeight.call(this);
};

function p2kwiet3578093095275_button14183363259378_onClick_seq0(eventobject) {
    eventonClickvBoxPayment.call(this);
};

function p2kwiet3578093095275_vbox1418336325851155_onClick_seq0(eventobject) {
    /* 
eventonClickvboxProcessMemberActions.call(this);

 */
};

function p2kwiet3578093095275_link1418336325852741_onClick_seq0(eventobject) {
    showPersonalGoalWeight.call(this);
};

function p2kwiet3578093095307_button141833632514899_onClick_seq0(eventobject) {
    eventonClickvboxPaymentProcessMember.call(this);
    onDoneCurrentWeight.call(this);
};

function p2kwiet3578093095307_vboxProcessMemberAction_onClick_seq0(eventobject) {
    /* 
eventonClickvboxProcessMemberActions.call(this);

 */
};

function p2kwiet3578093095307_link1418336325312455_onClick_seq0(eventobject) {
    showFreshStart.call(this);
};

function p2kwiet3578093095307_link1418336325367892_onClick_seq0(eventobject) {
    showMissedWeeks.call(this);
};

function p2kwiet3578093095307_link1418336325368343_onClick_seq0(eventobject) {
    makeLifeTimeMember.call(this);
};

function p2kwiet3578093095307_link1418336325368344_onClick_seq0(eventobject) {
    setGoalWeight.call(this);
};

function p2kwiet3578093095307_link1418336325368345_onClick_seq0(eventobject) {
    setStartWeight.call(this);
};

function p2kwiet3578093095307_link1418336325838349_onClick_seq0(eventobject) {
    showPersonalGoalWeight.call(this);
};

function p2kwiet3578093095350_vbxProcessMember_onClick_seq0(eventobject, context) {
    eventonClickvbxProcessMember.call(this);
};

function p2kwiet3578093095360_btnReport_onClick_seq0(eventobject, context) {
    showTalliedMeetingReport();
};

function p2kwiet3578093095360_btnReopen_onClick_seq0(eventobject, context) {
    alertForReOpenTalliedMeetingConfirmationHomeScreen();
};

function p2kwiet3578093095370_btnReport_onClick_seq0(eventobject, context) {
    showTalliedMeetingReport();
};

function p2kwiet3578093095370_btnReopen_onClick_seq0(eventobject, context) {
    alertForReOpenTalliedMeetingConfirmationHomeScreen();
};

function p2kwiet3578093095395_vboxProcessMember_onClick_seq0(eventobject, context) {
    eventonClickvbxProcessMemberForProfileSearch.call(this);
};

function p2kwiet3578093095420_vboxProcessMember_onClick_seq0(eventobject, context) {
    eventonClickvbxProcessMemberForProfileSearch.call(this);
    displayNote.call(this);
};

function p2kwiet3578093095445_vboxProcessMember_onClick_seq0(eventobject, context) {
    eventonClickvbxProcessMemberForProfileSearch.call(this);
    displayNote.call(this);
};

function p2kwiet3578093095468_btnSimpleRet_onClick_seq0(eventobject, context) {
    eventOnSelectReturnBtn.call(this);
};

function MEGDevelopmentpreappinit_seq0(params) {
    getDeviceLocaleInfo.call(this);
    setSyncAndUsbSettingsForScanners.call(this);
};

function MEGDevelopmentpostappinit_seq0(params) {
    /* 
initSyncSession.call(this);

 */
    setAppCallBacks.call(this);
};