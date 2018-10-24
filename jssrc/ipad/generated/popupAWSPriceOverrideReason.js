function addWidgetspopupAWSPriceOverrideReason() {
    var hboxHeaderSection = new kony.ui.Box({
        "id": "hboxHeaderSection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxSearchLocation"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxCancelImage = new kony.ui.Box({
        "id": "vboxCancelImage",
        "isVisible": true,
        "onClick": AS_VBox_0ada088895354dabb0c253887015df8a,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 19,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var image21323126655416694 = new kony.ui.Image2({
        "id": "image21323126655416694",
        "isVisible": true,
        "src": "icn_cancel.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 60,
        "referenceWidth": 60,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vboxCancelImage.add(image21323126655416694);
    var vbox1323126655416700 = new kony.ui.Box({
        "id": "vbox1323126655416700",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 64,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblReasonInfo = new kony.ui.Label({
        "id": "lblReasonInfo",
        "isVisible": true,
        "skin": "lblwwtxtBook42pxBlack",
        "text": kony.i18n.getLocalizedString("lblPriceOverRideReason")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1323126655416700.add(lblReasonInfo);
    var vboxDoneImage = new kony.ui.Box({
        "id": "vboxDoneImage",
        "isVisible": true,
        "onClick": AS_VBox_d6b985a696d5450db8c75ab91f5e20f7,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 17,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {});
    var image21323126655416698 = new kony.ui.Image2({
        "id": "image21323126655416698",
        "isVisible": true,
        "src": "icn_done.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 60,
        "referenceWidth": 60,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vboxDoneImage.add(image21323126655416698);
    hboxHeaderSection.add(vboxCancelImage, vbox1323126655416700, vboxDoneImage);
    var HBox0d08d348776c94e = new kony.ui.Box({
        "id": "HBox0d08d348776c94e",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var pickerviewPriceOverrideReasons = new kony.ui.PickerView({
        "id": "pickerviewPriceOverrideReasons",
        "isVisible": true,
        "masterData": [],
        "masterDataMap": null
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    HBox0d08d348776c94e.add(pickerviewPriceOverrideReasons);
    popupAWSPriceOverrideReason.add(hboxHeaderSection, HBox0d08d348776c94e);
};

function popupAWSPriceOverrideReasonGlobals() {
    popupAWSPriceOverrideReason = new kony.ui.Popup({
        "addWidgets": addWidgetspopupAWSPriceOverrideReason,
        "id": "popupAWSPriceOverrideReason",
        "init": AS_Popup_ce60218950344b0e83b8c6ae4a7f4631,
        "isModal": false,
        "skin": "popupRoundCorner",
        "transparencyBehindThePopup": 100
    }, {
        "containerWeight": 45,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendTop": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "popupStyle": constants.POPUP_TYPE_NATIVE_STYLE
    });
};