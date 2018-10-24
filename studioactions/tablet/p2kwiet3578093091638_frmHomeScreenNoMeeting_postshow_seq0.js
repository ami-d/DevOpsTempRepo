function p2kwiet3578093091638_frmHomeScreenNoMeeting_postshow_seq0(eventobject, neworientation) {
    ClearLinkObject.call(this);
    addDataForGlobalMenu.call(this);
    createDynamicMenu.call(this);
    UnitLbsORKg.call(this);
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
}