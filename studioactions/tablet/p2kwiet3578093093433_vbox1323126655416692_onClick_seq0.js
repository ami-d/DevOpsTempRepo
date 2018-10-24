function p2kwiet3578093093433_vbox1323126655416692_onClick_seq0(eventobject) {
    popupAddEmail.dismiss();
    var email = popupAddEmail.txtEmailAddress.text;
    var valid = new validationcls;
    valid.checkEmail(email);
    error = "";
    if (!isvalid || popupAddEmail.txtEmailAddress.text == "" || popupAddEmail.txtEmailAddress.text == undefined) {
        frmPayment.imgSendReceipt.src = "icn_checkbox_unchecked.png";
        popupAddEmail.txtEmailAddress.text = "";
    }
}