function addWidgetsfrmPayment() {
    var hboxPaymentHeader = new kony.ui.Box({
        "id": "hboxPaymentHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "hboxHeader"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox12443534676066565 = new kony.ui.Box({
        "id": "vbox12443534676066565",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox12443534676066565_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 11,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var image212443534676066566 = new kony.ui.Image2({
        "id": "image212443534676066566",
        "isVisible": true,
        "src": "back_button.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbox12443534676066565.add(image212443534676066566);
    var label1353482756356264 = new kony.ui.Label({
        "id": "label1353482756356264",
        "isVisible": true,
        "skin": "F1",
        "text": kony.i18n.getLocalizedString("strlblCompleteTransaction")
    }, {
        "containerWeight": 80,
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
    var boxBatteryStatus = new kony.ui.Box({
        "id": "boxBatteryStatus",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 4,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgBatteryStatus = new kony.ui.Image2({
        "id": "imgBatteryStatus",
        "isVisible": true,
        "src": "batteryfull.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblBatteryStatus = new kony.ui.Label({
        "id": "lblBatteryStatus",
        "isVisible": true,
        "skin": "batteryLbl",
        "text": "100%"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    boxBatteryStatus.add(imgBatteryStatus, lblBatteryStatus);
    var vbox12443534678547347 = new kony.ui.Box({
        "id": "vbox12443534678547347",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox12443534678547347_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 4,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var ccValidateImg = new kony.ui.Image2({
        "id": "ccValidateImg",
        "isVisible": true,
        "src": "icn_credit_card.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbox12443534678547347.add(ccValidateImg);
    hboxPaymentHeader.add(vbox12443534676066565, label1353482756356264, boxBatteryStatus, vbox12443534678547347);
    var hbox12443534678655095 = new kony.ui.Box({
        "id": "hbox12443534678655095",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox12443534672170962 = new kony.ui.Box({
        "id": "vbox12443534672170962",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxCategorySection"
    }, {
        "containerWeight": 66,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hboxTextbox = new kony.ui.Box({
        "id": "hboxTextbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxLightGrey"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox12443534678533538 = new kony.ui.Box({
        "id": "vbox12443534678533538",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 6, 0, 6],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtBoxAmount = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtF22",
        "id": "txtBoxAmount",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "maxTextLength": 50,
        "secureTextEntry": false,
        "skin": "txtF22",
        "text": ".0",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeight": 10,
        "containerHeightMode": constants.TEXTBOX_CUSTOM_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    vbox12443534678533538.add(txtBoxAmount);
    hboxTextbox.add(vbox12443534678533538);
    var line12443534677251693 = new kony.ui.Line({
        "id": "line12443534677251693",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox205284547248972 = new kony.ui.Box({
        "id": "hbox205284547248972",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 9, 0, 10],
        "marginInPixel": false,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox205284547248973 = new kony.ui.Box({
        "id": "vbox205284547248973",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox205284547250614 = new kony.ui.Box({
        "id": "hbox205284547250614",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox205284547251080 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547251080",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547251080_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblSeven = new kony.ui.Label({
        "id": "lblSeven",
        "isVisible": true,
        "skin": "F21",
        "text": "7"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547251080.add(lblSeven);
    var vbox205284547253742 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547253742",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547253742_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblEight = new kony.ui.Label({
        "id": "lblEight",
        "isVisible": true,
        "skin": "F21",
        "text": "8"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547253742.add(lblEight);
    var vbox205284547253734 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547253734",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547253734_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblNine = new kony.ui.Label({
        "id": "lblNine",
        "isVisible": true,
        "skin": "F21",
        "text": "9"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547253734.add(lblNine);
    hbox205284547250614.add(vbox205284547251080, vbox205284547253742, vbox205284547253734);
    var hbox205284547255989 = new kony.ui.Box({
        "id": "hbox205284547255989",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox205284547255991 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547255991",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547255991_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblFour = new kony.ui.Label({
        "id": "lblFour",
        "isVisible": true,
        "skin": "F21",
        "text": "4"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547255991.add(lblFour);
    var vbox205284547255999 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547255999",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547255999_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblFive = new kony.ui.Label({
        "id": "lblFive",
        "isVisible": true,
        "skin": "F21",
        "text": "5"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547255999.add(lblFive);
    var vbox205284547255995 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547255995",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547255995_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblSix = new kony.ui.Label({
        "id": "lblSix",
        "isVisible": true,
        "skin": "F21",
        "text": "6"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547255995.add(lblSix);
    hbox205284547255989.add(vbox205284547255991, vbox205284547255999, vbox205284547255995);
    var hbox205284547256801 = new kony.ui.Box({
        "id": "hbox205284547256801",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox205284547256803 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547256803",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547256803_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblOne = new kony.ui.Label({
        "id": "lblOne",
        "isVisible": true,
        "skin": "F21",
        "text": "1"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547256803.add(lblOne);
    var vbox205284547256811 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547256811",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547256811_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblTwo = new kony.ui.Label({
        "id": "lblTwo",
        "isVisible": true,
        "skin": "F21",
        "text": "2"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547256811.add(lblTwo);
    var vbox205284547256807 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547256807",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547256807_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblThree = new kony.ui.Label({
        "id": "lblThree",
        "isVisible": true,
        "skin": "F21",
        "text": "3"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547256807.add(lblThree);
    hbox205284547256801.add(vbox205284547256803, vbox205284547256811, vbox205284547256807);
    var hbox205284547264053 = new kony.ui.Box({
        "id": "hbox205284547264053",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox205284547264055 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547264055",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547264055_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblDoubleZero = new kony.ui.Label({
        "id": "lblDoubleZero",
        "isVisible": true,
        "skin": "F21",
        "text": "00"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547264055.add(lblDoubleZero);
    var vbox205284547264063 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547264063",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547264063_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblZero = new kony.ui.Label({
        "id": "lblZero",
        "isVisible": true,
        "skin": "F21",
        "text": "0"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [30, 30, 30, 30],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox205284547264063.add(lblZero);
    var vbox205284547264059 = new kony.ui.Box({
        "focusSkin": "vboxOnTap209209209Back",
        "id": "vbox205284547264059",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox205284547264059_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21012413156207423 = new kony.ui.Image2({
        "id": "image21012413156207423",
        "isVisible": true,
        "src": "icn_delete_calculator.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [30, 37, 30, 36],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbox205284547264059.add(image21012413156207423);
    hbox205284547264053.add(vbox205284547264055, vbox205284547264063, vbox205284547264059);
    vbox205284547248973.add(hbox205284547250614, hbox205284547255989, hbox205284547256801, hbox205284547264053);
    var vboxPaymentButtons = new kony.ui.Box({
        "id": "vboxPaymentButtons",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vboxPaymentButtons.add();
    hbox205284547248972.add(vbox205284547248973, vboxPaymentButtons);
    vbox12443534672170962.add(hboxTextbox, line12443534677251693, hbox205284547248972);
    var vbox12443534678761658 = new kony.ui.Box({
        "id": "vbox12443534678761658",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vBoxGraySkin"
    }, {
        "containerWeight": 34,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox202458205262794 = new kony.ui.Box({
        "id": "hbox202458205262794",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox12443534678987762 = new kony.ui.Box({
        "id": "vbox12443534678987762",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox12443534678993192 = new kony.ui.Box({
        "id": "hbox12443534678993192",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblOrderDetails = new kony.ui.Label({
        "id": "lblOrderDetails",
        "isVisible": true,
        "skin": "F27",
        "text": kony.i18n.getLocalizedString("strlblPayDetail")
    }, {
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox2052845472275302 = new kony.ui.Box({
        "id": "vbox2052845472275302",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vbox2052845472275302_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 10, 0, 10],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgBasket = new kony.ui.Image2({
        "id": "imgBasket",
        "isVisible": true,
        "src": "icn_clearall_shoppingcart.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbox2052845472275302.add(imgBasket);
    hbox12443534678993192.add(lblOrderDetails, vbox2052845472275302);
    var line12443534678990623 = new kony.ui.Line({
        "id": "line12443534678990623",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox12443534678987762.add(hbox12443534678993192, line12443534678990623);
    hbox202458205262794.add(vbox12443534678987762);
    var hboxMainParent = new kony.ui.Box({
        "id": "hboxMainParent",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxMainParent = new kony.ui.Box({
        "id": "vboxMainParent",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var paymentScroll = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "paymentScroll",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_BOTH,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeight": 69,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "bounces": true
    });
    var vbox124435346778905 = new kony.ui.Box({
        "id": "vbox124435346778905",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segPaymentTypeData = new kony.ui.SegmentedUI2({
        "data": [{}, {}, {}],
        "groupCells": false,
        "id": "segPaymentTypeData",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": vbox357809309728,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "seg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534673057547": "hbox12443534673057547",
            "hiddenPaymentMode": "hiddenPaymentMode",
            "imgPaymentRemove": "imgPaymentRemove",
            "lblPaymentTypeText": "lblPaymentTypeText",
            "lblPaymentTypeTextVal": "lblPaymentTypeTextVal",
            "vbox390007167359145": "vbox390007167359145",
            "vbox390007167359149": "vbox390007167359149",
            "vbox390007167359153": "vbox390007167359153"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    vbox124435346778905.add(segPaymentTypeData);
    paymentScroll.add(vbox124435346778905);
    vboxMainParent.add(paymentScroll);
    hboxMainParent.add(vboxMainParent);
    var hboxOutstandingBalance = new kony.ui.Box({
        "id": "hboxOutstandingBalance",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1415357248166590 = new kony.ui.Box({
        "id": "vbox1415357248166590",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 98,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var line12443534678464836 = new kony.ui.Line({
        "id": "line12443534678464836",
        "isVisible": false,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 79, 0, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox12443534678465215 = new kony.ui.Box({
        "id": "hbox12443534678465215",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {});
    var lblOutstandingBal = new kony.ui.Label({
        "id": "lblOutstandingBal",
        "isVisible": true,
        "skin": "F15",
        "text": kony.i18n.getLocalizedString("strOutstandingBalance")
    }, {
        "containerWeight": 63,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblOutstandingBalInfo = new kony.ui.Label({
        "id": "lblOutstandingBalInfo",
        "isVisible": true,
        "skin": "F15",
        "text": "$0.00"
    }, {
        "containerWeight": 37,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534678465215.add(lblOutstandingBal, lblOutstandingBalInfo);
    vbox1415357248166590.add(line12443534678464836, hbox12443534678465215);
    hboxOutstandingBalance.add(vbox1415357248166590);
    var hbox12443534678500842 = new kony.ui.Box({
        "id": "hbox12443534678500842",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {});
    var vbox12443534678500844 = new kony.ui.Box({
        "id": "vbox12443534678500844",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 98,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var line12443534678500846 = new kony.ui.Line({
        "id": "line12443534678500846",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox12443534678500848 = new kony.ui.Box({
        "id": "hbox12443534678500848",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblTotal = new kony.ui.Label({
        "id": "lblTotal",
        "isVisible": true,
        "skin": "F25",
        "text": kony.i18n.getLocalizedString("strLblTotal")
    }, {
        "containerWeight": 63,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTotalData = new kony.ui.Label({
        "id": "lblTotalData",
        "isVisible": true,
        "skin": "F26",
        "text": "$20.70"
    }, {
        "containerWeight": 37,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534678500848.add(lblTotal, lblTotalData);
    vbox12443534678500844.add(line12443534678500846, hbox12443534678500848);
    hbox12443534678500842.add(vbox12443534678500844);
    var hboxSendReceipt = new kony.ui.Box({
        "id": "hboxSendReceipt",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1323126655365284 = new kony.ui.Box({
        "id": "vbox1323126655365284",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var line1323126655366485 = new kony.ui.Line({
        "id": "line1323126655366485",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox1323126655366726 = new kony.ui.Box({
        "id": "hbox1323126655366726",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vboxSendReceipt = new kony.ui.Box({
        "id": "vboxSendReceipt",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_vboxSendReceipt_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var imgSendReceipt = new kony.ui.Image2({
        "id": "imgSendReceipt",
        "isVisible": true,
        "src": "icn_checkbox_unchecked.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vboxSendReceipt.add(imgSendReceipt);
    var lblSendReceipt = new kony.ui.Label({
        "id": "lblSendReceipt",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Send Receipt"
    }, {
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox1323126655366726.add(vboxSendReceipt, lblSendReceipt);
    vbox1323126655365284.add(line1323126655366485, hbox1323126655366726);
    hboxSendReceipt.add(vbox1323126655365284);
    var hbox12443534672171885 = new kony.ui.Box({
        "id": "hbox12443534672171885",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {});
    var vbox12443534672466500 = new kony.ui.Box({
        "id": "vbox12443534672466500",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 98,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var line12443534671985337 = new kony.ui.Line({
        "id": "line12443534671985337",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox12443534672581957 = new kony.ui.Box({
        "id": "hbox12443534672581957",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 5, 0, 0],
        "marginInPixel": true,
        "padding": [5, 0, 5, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnCompleteProcessMember = new kony.ui.Button({
        "focusSkin": "btnwwtxtCompleteProcessMember",
        "id": "btnCompleteProcessMember",
        "isVisible": true,
        "onClick": p2kwiet3578093091835_btnCompleteProcessMember_onClick_seq0,
        "skin": "btnNoWeighInSelected",
        "text": kony.i18n.getLocalizedString("strlblCompleteTransaction")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 2, 0, 8],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbox12443534672581957.add(btnCompleteProcessMember);
    vbox12443534672466500.add(line12443534671985337, hbox12443534672581957);
    hbox12443534672171885.add(vbox12443534672466500);
    vbox12443534678761658.add(hbox202458205262794, hboxMainParent, hboxOutstandingBalance, hbox12443534678500842, hboxSendReceipt, hbox12443534672171885);
    hbox12443534678655095.add(vbox12443534672170962, vbox12443534678761658);
    frmPayment.add(hboxPaymentHeader, hbox12443534678655095);
};

function frmPaymentGlobals() {
    frmPayment = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPayment,
        "bounces": false,
        "enabledForIdleTimeout": true,
        "id": "frmPayment",
        "needAppMenu": true,
        "onHide": p2kwiet3578093091835_frmPayment_onhide_seq0,
        "postShow": p2kwiet3578093091835_frmPayment_postshow_seq0,
        "preShow": p2kwiet3578093091835_frmPayment_preshow_seq0,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": false
    });
};