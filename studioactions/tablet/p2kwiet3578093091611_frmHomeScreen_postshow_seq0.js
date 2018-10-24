function p2kwiet3578093091611_frmHomeScreen_postshow_seq0(eventobject, neworientation) {
    addDataForGlobalMenu.call(this);
    createDynamicMenu.call(this);
    ClearVariables.call(this);
    ClearLinkObject.call(this);
    clearRefferalobj.call(this);
    UnitLbsORKg.call(this);
    generateIncrementalMemberID.call(this);
    isMissedWeekPopupShowed = false;
    popupMissedWeeks.destroy();
    missedWeek = 0;
    MissedWeekWeightData = [];
    glbSelectedMemberMtngOccrID = 0;
    gblLinkInfoForOnlineMember = {};
    ProductSale.Cart = new ProductCart();
    glbNonTangibleDataToBeSet = [];
    glbFormName.lblSubType.text = null;
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
}