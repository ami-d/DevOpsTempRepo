function p2kwiet3578093094488_vboxCancelImage_onClick_seq0(eventobject) {
    if (checkValidString(glbNumberOfBanks)) popupNumberOfBanks.pickerBanks.selectedKeys = [parseInt(glbNumberOfBanks) - 1];
    popupNumberOfBanks.dismiss();
}