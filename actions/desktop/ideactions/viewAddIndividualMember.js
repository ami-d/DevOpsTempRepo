var IsAddIndividual = "";

function eventOnClickFlowDecessionForMember() {
    if (IsReEnrollScreen == FlowForScreens.ReEnroll) {
        frmEnrollReturningMember.show();
        frmEnrollReturningMember.imgWeight.src = "icn_weigh_selected.png";

    } else if (IsEnrollMember == FlowForScreens.Enroll) {
        frmEnrollNewMember.show();
        frmEnrollNewMember.imgWeight.src = "icn_weigh_selected.png";
    } else if (IsAddIndividual == FlowForScreens.AddIndividual) {
        frmAddIndividulaMember.show();
        frmAddIndividulaMember.imgWeight.src = "icn_weigh_selected.png";

    }
}

function eventOnClickMemberShipTypeAddIndividual() {
    var context = {
        "widget": frmAddIndividulaMember.hboxMemberSection1,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupMemberType.setContext(context);
    popupMemberType.pickerMemberType.masterData = [
        [
            ["1", getLocalizedString("strPaid")],
            ["7", getLocalizedString("strLifetime")], 100
        ]
    ];
    popupMemberType.show();
}

function eventOnClickAddIndividualHeight() {
    
    if (deviceLocale == "fr_FR") {
        popupHeight.pckrSelectHeight.masterData = heightFR;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightFR;
    } else 
    {
        popupHeight.pckrSelectHeight.masterData = heightUS;
        popupHeight.pckrSelectHeight.selectedKeys = SelectedheightUS;
        
    }
    
    var context = {
        "widget":(frmAddIndividulaMember.id == kony.application.getCurrentForm().id) ? frmAddIndividulaMember.hboxHeight : frmEnrollReturningMember.hboxHeight,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupHeight.setContext(context);
    popupHeight.show();
}

function eventOnClickDOBAddIndividual() {
    
    IsStartDate = false;
    popupDateOfBirth.calEnrollMemberDOB.clear();
    var context1 = {
        "widget": (frmAddIndividulaMember.id == kony.application.getCurrentForm().id) ? frmAddIndividulaMember.hboxDOBSection1 : frmEnrollReturningMember.hboxDOBSection1,
        "anchor": "right",
        "sizetoanchorwidth": true
    };
    popupDateOfBirth.setContext(context1);
    if (frmAddIndividulaMember.lblDOBInfo.text == "") {
        eventinitDOBPopUp("");
    } else {
        eventinitDOBPopUp(frmAddIndividulaMember.lblDOBInfo.text);
    }
    popupDateOfBirth.show();
}

function eventOnClickStartDateAddIndividual() {
    IsStartDate = true;
    popupDateOfBirth.calEnrollMemberDOB.clear(); //.clearData();
    var context1 = {
        "widget": frmAddIndividulaMember.hboxStartDate,
        "anchor": "bottom",
        "sizetoanchorwidth": true
    };
    popupDateOfBirth.setContext(context1);

    fortnightAway = getLastSaturday(new Date());
    kony.print("fortnightAway----" + fortnightAway);
    date = fortnightAway.getDate();
    mon = fortnightAway.getMonth() + 1;
    year = fortnightAway.getFullYear();

    popupDateOfBirth.calEnrollMemberDOB.validEndDate = [date, mon, year];
    popupDateOfBirth.show();
}
