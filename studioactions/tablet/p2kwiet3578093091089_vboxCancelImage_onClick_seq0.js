function p2kwiet3578093091089_vboxCancelImage_onClick_seq0(eventobject) {
    frmViewMemberProfile.show();
    if (glbLinkType == "None" || glbLinkType == "" || glbLinkType == "Unlink") frmEditMemberProfile.btnLinkUnlink.text = "Link";
    else frmEditMemberProfile.btnLinkUnlink.text = "Unlink";
    frmCheckout.lblSubType.text = "";
    clearEditMemberFields.call(this, false);
}