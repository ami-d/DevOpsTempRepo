var isSaveAndAddPreRegMember = false;
function eventOnClickDOBSectionPreRegMemberPage() {
    var context = {
        "widget": frmPreRegAddMember.hboxDOBSection1,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupDateOfBirth.setContext(context);
    popupDateOfBirth.calEnrollMemberDOB.clear();
    if (frmPreRegAddMember.lblDOBInfo.text == "") {
        eventinitDOBPopUp("");
    } else {
        eventinitDOBPopUp(frmPreRegAddMember.lblDOBInfo.text);
    }

    popupDateOfBirth.show();
}

function eventOnClickState2SectionPreRegMemberPage() {
    displayStatePopup(frmPreRegAddMember.vboxStateSection, "bottom", false)
}

function ClearPreRegMemberVariables() {

    frmPreRegAddMember.txtEmail.text = "";
    frmPreRegAddMember.txtFirstName.text = "";
    frmPreRegAddMember.txtLastName.text = "";
    frmPreRegAddMember.lblHeightInfo.text = "";
    frmPreRegAddMember.txtNickName.text = "";
    frmPreRegAddMember.lblDOBInfo.text = "";
    frmPreRegAddMember.txtAddr1.text = "";
    frmPreRegAddMember.txtCity.text = "";
    frmPreRegAddMember.txtAddr2.text = "";
    frmPreRegAddMember.txtZip.text = "";
    frmPreRegAddMember.lblStateInfo.text = "";
    frmPreRegAddMember.txtPhoneNo.text = "";
    frmPreRegAddMember.cmbGender.selectedKey = "Female";
    IsStartDate = false;
    glbMemberLastAttDate = "";
}


function eventOnClickHeightSectionPreRegMemberPage() {


    popupHeight.pckrSelectHeight.masterData = heightUS;
    popupHeight.pckrSelectHeight.selectedKeys = SelectedheightUS;

    var context = {
        "widget": frmPreRegAddMember.hboxHeight,
        "anchor": "bottom",
        "sizetoanchorwidth": false
    };
    popupHeight.setContext(context);
    popupHeight.show();
}

function eventOnclickSaveAndAddPreRegMember() {
    isSaveAndAddPreRegMember = true;
	kony.print("eventOnclickSaveAndAddPreRegMember()");
    eventOnSavePreRegMember();

}

function eventOnclickSavePreRegMember() {
    isSaveAndAddPreRegMember = false;
	kony.print("eventOnclickSaveAndAddPreRegMember()");
    eventOnSavePreRegMember();

}

function eventOnSavePreRegMember() {
    var valid = new validationcls();
    var city = true,
        nickName = true,
        zipcode = true;

    kony.print(" frmPreRegAddMember.txtEmail.text " + frmPreRegAddMember.txtEmail.text);
    kony.print(" frmPreRegAddMember.txtFirstName.text " + frmPreRegAddMember.txtFirstName.text);
    kony.print(" frmPreRegAddMember.txtLastName.text " + frmPreRegAddMember.txtLastName.text);
    kony.print(" frmPreRegAddMember.lblHeightInfo.text " + frmPreRegAddMember.lblHeightInfo.text);
    kony.print(" frmPreRegAddMember.txtNickName.text " + frmPreRegAddMember.txtNickName.text);
    kony.print(" frmPreRegAddMember.lblDOBInfo.text " + frmPreRegAddMember.lblDOBInfo.text);
    kony.print(" frmPreRegAddMember.txtAddr1.text " + frmPreRegAddMember.txtAddr1.text);
    kony.print(" frmPreRegAddMember.txtCity.text " + frmPreRegAddMember.txtCity.text);
    kony.print(" frmPreRegAddMember.txtAddr2.text " + frmPreRegAddMember.txtAddr2.text);
    kony.print(" frmPreRegAddMember.txtZip.text " + frmPreRegAddMember.txtZip.text);
    kony.print(" frmPreRegAddMember.lblStateInfo.text " + frmPreRegAddMember.lblStateInfo.text);
    kony.print(" frmPreRegAddMember.txtPhoneNo.text " + frmPreRegAddMember.txtPhoneNo.text);
    kony.print(" frmPreRegAddMember.cmbGender.selectedKey " + frmPreRegAddMember.cmbGender.selectedKey);

    var res = valid
        .checkEnrollFirstName(frmPreRegAddMember.txtFirstName.text)
        .checkEnrollLastName(frmPreRegAddMember.txtLastName.text)
        .heightValidation(frmPreRegAddMember.lblHeightInfo.text)
        .validateDate(frmPreRegAddMember.lblDOBInfo.text)
    	.checkForRequiredFields(frmPreRegAddMember.txtAddr1.text, "", "strValidAddress1")
    	.checkForRequiredFields(frmPreRegAddMember.lblStateInfo.text, "", "strSelectState")
        .checkEmail(frmPreRegAddMember.txtEmail.text)
   		.CheckTenDigitPhone(frmPreRegAddMember.txtPhoneNo.text)
        .isValid();

    if (frmPreRegAddMember.txtCity.text != "") {
        city = valid
            .checkCity(frmPreRegAddMember.txtCity.text)
            .isValid();
    }

    if (frmPreRegAddMember.txtZip.text != "") {
        zipcode = valid
            .validateZipCode(frmPreRegAddMember.txtZip.text)
            .isValid();
    }
    if (frmPreRegAddMember.txtNickName.text != "") {
        nickName = valid
            .checkNickName(frmPreRegAddMember.txtNickName.text)
            .isValid();
    }

    if (res && city && nickName && zipcode) {
        if (frmPreRegAddMember.txtCity.text != "" || frmPreRegAddMember.txtAddr1.text != "" || frmPreRegAddMember.txtAddr2.text != "" || frmPreRegAddMember.txtZip.text != "") {
            if (frmPreRegAddMember.lblStateInfo.text == "") {
                alertForMessages(kony.i18n.getLocalizedString("strSelectState"));
                return false;
            }
        }

        var createPreRegMember = {};
        //var entryDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
        var pickerHeightSelectedKeys = popupHeight.pckrSelectHeight.selectedKeys;
        var heightInMeters = com.es.weighincalculations.ConvertHeight(pickerHeightSelectedKeys);
        var heightinInches = com.es.weighincalculations.ConvertHeight_Meters_To_Inches(heightInMeters);
        var ageval = getAgeFromDob(frmPreRegAddMember.lblDOBInfo.text);
        var gender = frmPreRegAddMember.cmbGender.selectedKey;

        kony.print("ageval==" + ageval + "===hghtInMtrs==" + heightInMeters + "==gender==" + gender);

        createPreRegMember.FirstName = frmPreRegAddMember.txtFirstName.text;
        createPreRegMember.LastName = frmPreRegAddMember.txtLastName.text;
        createPreRegMember.Gender = frmPreRegAddMember.cmbGender.selectedKey;
		createPreRegMember.DateOfBirth = supportTime(frmPreRegAddMember.lblDOBInfo.text, "", "yyyy-mm-ddTHH:NN:SS");
        createPreRegMember.Height = Math.round(heightinInches);
      	createPreRegMember.Email = frmPreRegAddMember.txtEmail.text;
		createPreRegMember.Phone = frmPreRegAddMember.txtPhoneNo.text;
        createPreRegMember.HomeAdd1 = decodeSpecialCharacters(frmPreRegAddMember.txtAddr1.text);
        createPreRegMember.HomeAdd2 = decodeSpecialCharacters(frmPreRegAddMember.txtAddr2.text);
        createPreRegMember.HomeCity = frmPreRegAddMember.txtCity.text;
        createPreRegMember.HomeStateId = returnStateIDByName(frmPreRegAddMember.lblStateInfo.text);
        createPreRegMember.PostalCode = frmPreRegAddMember.txtZip.text;
        createPreRegMember.MtngOccrID = glbMeetingNum; 
        createPreRegMember.MeetingDate = (glbMeetingNum == "") ? "0001-01-01T00:00:00" : glbMeetingDate;

        glbMemberLastAttDate = "";

        kony.print("createPreRegMember --> " + JSON.stringify(createPreRegMember));
       DBPreRegMemberDetailsController.create(createPreRegMember,createPreRegMemberSuccessCallback,createPreRegMemberErrorCallBack);
		
       function createPreRegMemberSuccessCallback(res) {
          	kony.print("createPreRegMemberSuccessCallback res " + JSON.stringify(res));
            ClearPreRegMemberVariables();
         	ClearVariables();
        	alertForMessages(kony.i18n.getLocalizedString("strPreRegMemSuccess"));
			if(isSaveAndAddPreRegMember)
              frmPreRegAddMember.show();
            else 
              frmHomeScreen.show();
			isSaveAndAddPreRegMember = false;
        }
      
        function createPreRegMemberErrorCallBack()
          {
            ClearPreRegMemberVariables();
         	ClearVariables();
			frmHomeScreen.show();
            kony.print("createPreRegMemberErrorCallBack");
            isSaveAndAddPreRegMember = false;
           
          }
      
    }
}