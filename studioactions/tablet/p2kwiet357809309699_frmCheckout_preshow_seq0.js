function p2kwiet357809309699_frmCheckout_preshow_seq0(eventobject, neworientation) {
    eventOnPreShowSetHeaderLabel.call(this);
    if (frmCheckout.lblSubType.text == "Pay as you go") {
        frmCheckout.btnScan.setVisibility(false); // Added by Dileep Chejerla
    }
}