var numberOfRows = 0;
var numberOfColums = 0;
var Tabledata = [];
var widgetMap = {};


var widgetMap = {
    widgetId1: "lblDate",
    widgetId2: "txtAttendenceType",
    widgetId3: "txtPasses",
    widgetId4: "btnNoWeighIn",
    widgetId5: "imgCheck",
    widgetId6: "imgHope1",
    widgetId7: "imgHope2",
    widgetId8: "startDate",
    widgetId9: "attendenceIndex",
    widgetId10: "passesIndex",
    widgetId11: "rowIndex"
};


function createTableRowAtIndex(index, tbldata) {
    var imgCheck = new kony.ui.Image2({
        "id": "imgCheck" + index,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "icn_datepicker.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vboxDate = new kony.ui.Box({
        "id": "vboxDate" + index,
        "isVisible": true,
        "onClick": popupMissedWeeks_vboxDate_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 5,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxDate.add(
        imgCheck);
    var lblDate = new kony.ui.Label({
        "id": "lblDate" + index,
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": tbldata["lblDate"]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtAttendenceType = new kony.ui.Label({
        "id": "txtAttendenceType" + index,
        "isVisible": true,
        "skin": "lblHelveticeRegular15pxGrey",
        "text": tbldata["txtAttendenceType"]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgHope1 = new kony.ui.Image2({
        "id": "imgHope1" + index,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "icn_hope_aerrow.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox46410192860711 = new kony.ui.Box({
        "id": "hbox46410192860711" + index,
        "isVisible": true,
        "skin": "hboxwithBorder",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 61,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox46410192860711.add(
        txtAttendenceType, imgHope1);
    var vbox46410192860709 = new kony.ui.Box({
        "id": "vboxType" + index,
        "isVisible": true,
        "onClick": popupMissedWeeks_vbox46410192860709_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 23,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox46410192860709.add(
        hbox46410192860711);
    var txtPasses = new kony.ui.Label({
        "id": "txtPasses" + index,
        "isVisible": true,
        "skin": "lblHelveticeRegular15pxGrey",
        "text": tbldata["txtPasses"]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 94
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgHope2 = new kony.ui.Image2({
        "id": "imgHope2" + index,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "icn_hope_aerrow.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox1332453641765877 = new kony.ui.Box({
        "id": "hbox1332453641765877" + index,
        "isVisible": true,
        "skin": "hboxwithBorder",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 61,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1332453641765877.add(
        txtPasses, imgHope2);
    var vbox1332453641765875 = new kony.ui.Box({
        "id": "vboxPasses" + index,
        "isVisible": true,
        "onClick": popupMissedWeeks_vbox1332453641765875_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1332453641765875.add(
        hbox1332453641765877);
    var txtWeight = new kony.ui.TextBox2({
        "id": "txtWeight" + index,
        "isVisible": true,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus",
        "onEndEditing": popupMissedWeeks_txtWeight_onEndEditing_seq0,
        "text": tbldata["txtWeight"]
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var hBoxWeight = new kony.ui.Box({
        "id": "hBoxWeight" + index,
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 61,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hBoxWeight.add(
        txtWeight);
    var vboxtxtWeight = new kony.ui.Box({
        "id": "vboxtxtWeight" + index,
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 17,
        "margin": [0, 0, 0, 0],
        "padding": [1, 0, 2, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxtxtWeight.add(
        hBoxWeight);
    var btnNoWeighIn = new kony.ui.Button({
        "id": "btnNoWeighIn" + index,
        "isVisible": true,
        "skin": "btnwwtxtSearchLocation",
        "focusSkin": "btnwwtxtSearchLocation",
        "text": getLocalizedString("strNWI"),
        "onClick": popupMissedWeeks_btnNoWeighIn_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": true,
        "hExpand": false,
        "margin": [0, 3, 0, 3],
        "padding": [2, 3, 2, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 68
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var vbox46410192877708 = new kony.ui.Box({
        "id": "vbox46410192877708" + index,
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox46410192877708.add(
        btnNoWeighIn);
    var hboxData = new kony.ui.Box({
        "id": "hboxData" + index,
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 16,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [20, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxData.add(
        vboxDate, lblDate, vbox46410192860709, vbox1332453641765875, vboxtxtWeight, vbox46410192877708);

    return hboxData;
}

function popupMissedWeeks_vboxDate_onClick_seq0(eventobject) {
    onSelectCalender.call(this);
};

function popupMissedWeeks_vbox46410192860709_onClick_seq0(eventobject) {
    onSelectLastAttendence.call(this);
};

function popupMissedWeeks_vbox1332453641765875_onClick_seq0(eventobject) {
    onSelectPasses.call(this);
};

function popupMissedWeeks_btnNoWeighIn_onClick_seq0(eventobject) {
    onClickNWIForMissedWeek.call(this);
};

function popupMissedWeeks_txtWeight_onEndEditing_seq0(eventobject) {
    onDoneTxtweight.call(this);
}
