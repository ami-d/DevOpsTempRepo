function addWidgetsfrmTallyMeetingCashout() {
    var hboxTallyHeader = new kony.ui.Box({
        "id": "hboxTallyHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
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
    var vboxCancelImage = new kony.ui.Box({
        "id": "vboxCancelImage",
        "isVisible": true,
        "onClick": p2kwiet3578093092425_vboxCancelImage_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgCancel = new kony.ui.Image2({
        "id": "imgCancel",
        "isVisible": true,
        "src": "icn_cancel.png"
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
    vboxCancelImage.add(imgCancel);
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "skin": "lblwwtxtHeader",
        "text": "Tally Meeting: 30-45 MIN 10:00 AM -- Cash Out "
    }, {
        "containerWeight": 91,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hboxTallyHeader.add(vboxCancelImage, lblTitle);
    var hbox12443534677284671 = new kony.ui.Box({
        "id": "hbox12443534677284671",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label138875386243855 = new kony.ui.Label({
        "id": "label138875386243855",
        "isVisible": true,
        "skin": "F16",
        "text": kony.i18n.getLocalizedString("strDate")
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label55555 = new kony.ui.Label({
        "id": "label55555",
        "isVisible": true,
        "skin": "F16",
        "text": kony.i18n.getLocalizedString("strLblDaytimeCode")
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label138875386244110 = new kony.ui.Label({
        "id": "label138875386244110",
        "isVisible": true,
        "skin": "F16",
        "text": kony.i18n.getLocalizedString("strlbllocationnumberheader")
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534677284671.add(label138875386243855, label55555, label138875386244110);
    var hbox12443534677310390 = new kony.ui.Box({
        "id": "hbox12443534677310390",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblDate = new kony.ui.Label({
        "id": "lblDate",
        "isVisible": true,
        "skin": "F15",
        "text": "4/23/14"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDaytimeCode = new kony.ui.Label({
        "id": "lblDaytimeCode",
        "isVisible": true,
        "skin": "F15",
        "text": "42"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblLocationNumber = new kony.ui.Label({
        "id": "lblLocationNumber",
        "isVisible": true,
        "skin": "F15",
        "text": "60"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534677310390.add(lblDate, lblDaytimeCode, lblLocationNumber);
    var line1388753862333995 = new kony.ui.Line({
        "id": "line1388753862333995",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxNumberOfBanks = new kony.ui.Box({
        "id": "hboxNumberOfBanks",
        "isVisible": true,
        "onClick": p2kwiet3578093092425_hboxNumberOfBanks_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1244353467320125 = new kony.ui.Box({
        "id": "vbox1244353467320125",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 50,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1244353467320127 = new kony.ui.Box({
        "id": "hbox1244353467320127",
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
    var label1244353467320129 = new kony.ui.Label({
        "id": "label1244353467320129",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 2,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label138875386246984 = new kony.ui.Label({
        "id": "label138875386246984",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblBanksCollected")
    }, {
        "containerWeight": 92,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    var lblBanks = new kony.ui.Label({
        "id": "lblBanks",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 6,
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
    hbox1244353467320127.add(label1244353467320129, label138875386246984, lblBanks);
    vbox1244353467320125.add(hbox1244353467320127);
    var txtBanksInThisMeeting = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetica19pxGrey",
        "id": "txtBanksInThisMeeting",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 2,
        "secureTextEntry": false,
        "skin": "txtHelvetica19pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    var vbox1244353467320121 = new kony.ui.Box({
        "id": "vbox1244353467320121",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 44,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1244353467320123 = new kony.ui.Label({
        "id": "label1244353467320123",
        "isVisible": false,
        "skin": "lblHelveticeRegular15pxGrey",
        "text": kony.i18n.getLocalizedString("strLblBankSlipRequired")
    }, {
        "containerWeight": 100,
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
    vbox1244353467320121.add(label1244353467320123);
    hboxNumberOfBanks.add(vbox1244353467320125, txtBanksInThisMeeting, vbox1244353467320121);
    var line1388753862377756 = new kony.ui.Line({
        "id": "line1388753862377756",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox138875386247324 = new kony.ui.Box({
        "id": "hbox138875386247324",
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
        "padding": [10, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox138875386268073 = new kony.ui.Box({
        "id": "vbox138875386268073",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox138875386268073.add();
    var vbox12443534679578397 = new kony.ui.Box({
        "id": "vbox12443534679578397",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxLightGreyCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox12443534679578399 = new kony.ui.Box({
        "id": "hbox12443534679578399",
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
    var label12443534679578404 = new kony.ui.Label({
        "id": "label12443534679578404",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 4,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 4, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label138875386267794 = new kony.ui.Label({
        "id": "label138875386267794",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblInMyBank")
    }, {
        "containerWeight": 96,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    hbox12443534679578399.add(label12443534679578404, label138875386267794);
    vbox12443534679578397.add(hbox12443534679578399);
    var vbox138875386252920 = new kony.ui.Box({
        "id": "vbox138875386252920",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label138875386267987 = new kony.ui.Label({
        "id": "label138875386267987",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblMEGDrawer")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    vbox138875386252920.add(label138875386267987);
    var vbox138875386253657 = new kony.ui.Box({
        "id": "vbox138875386253657",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label138875386268072 = new kony.ui.Label({
        "id": "label138875386268072",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strDifference")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    vbox138875386253657.add(label138875386268072);
    var vbox138875386276998 = new kony.ui.Box({
        "id": "vbox138875386276998",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox138875386276998.add();
    hbox138875386247324.add(vbox138875386268073, vbox12443534679578397, vbox138875386252920, vbox138875386253657, vbox138875386276998);
    var line1388753862333997 = new kony.ui.Line({
        "id": "line1388753862333997",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox138875386291765 = new kony.ui.Box({
        "id": "hbox138875386291765",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox138875386291779 = new kony.ui.Box({
        "id": "vbox138875386291779",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1388753862327074 = new kony.ui.Label({
        "id": "label1388753862327074",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strCash")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox138875386291779.add(label1388753862327074);
    var vbox138875386291767 = new kony.ui.Box({
        "id": "vbox138875386291767",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxGreyForCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1388753862307755 = new kony.ui.Box({
        "id": "hbox1388753862307755",
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
    var label1332450755229256 = new kony.ui.Label({
        "id": "label1332450755229256",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 5,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 4, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1388753862307756 = new kony.ui.Label({
        "id": "label1388753862307756",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtCash = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtFirstNameSkin",
        "id": "txtCash",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 7,
        "onTextChange": p2kwiet3578093092425_txtCash_onTextChange_seq0,
        "placeholder": kony.i18n.getLocalizedString("placeHolderRequired"),
        "secureTextEntry": false,
        "skin": "txtFirstNameSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
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
    hbox1388753862307755.add(label1332450755229256, label1388753862307756, txtCash);
    vbox138875386291767.add(hbox1388753862307755);
    var vbox138875386291771 = new kony.ui.Box({
        "id": "vbox138875386291771",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox12443534679628876 = new kony.ui.Box({
        "id": "hbox12443534679628876",
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
    var label12443534679630154 = new kony.ui.Label({
        "id": "label12443534679630154",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMEGCash = new kony.ui.Label({
        "id": "lblMEGCash",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "0.00"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534679628876.add(label12443534679630154, lblMEGCash);
    vbox138875386291771.add(hbox12443534679628876);
    var vbox138875386291775 = new kony.ui.Box({
        "id": "vbox138875386291775",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDiffCash = new kony.ui.Label({
        "id": "lblDiffCash",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox138875386291775.add(lblDiffCash);
    var vbox138875386291781 = new kony.ui.Box({
        "id": "vbox138875386291781",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox138875386291781.add();
    hbox138875386291765.add(vbox138875386291779, vbox138875386291767, vbox138875386291771, vbox138875386291775, vbox138875386291781);
    var hboxCheck = new kony.ui.Box({
        "id": "hboxCheck",
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
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1388753862109804 = new kony.ui.Box({
        "id": "vbox1388753862109804",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1388753862109806 = new kony.ui.Label({
        "id": "label1388753862109806",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strCheck")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1388753862109804.add(label1388753862109806);
    var vbox1388753862109793 = new kony.ui.Box({
        "id": "vbox1388753862109793",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxLightGreyCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1388753862308653 = new kony.ui.Box({
        "id": "hbox1388753862308653",
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
    var label1332450755231969 = new kony.ui.Label({
        "id": "label1332450755231969",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 5,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 4, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1388753862308655 = new kony.ui.Label({
        "id": "label1388753862308655",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtChecks = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtFirstNameSkin",
        "id": "txtChecks",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 7,
        "onTextChange": p2kwiet3578093092425_txtChecks_onTextChange_seq0,
        "placeholder": kony.i18n.getLocalizedString("placeHolderRequired"),
        "secureTextEntry": false,
        "skin": "txtFirstNameSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
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
    hbox1388753862308653.add(label1332450755231969, label1388753862308655, txtChecks);
    vbox1388753862109793.add(hbox1388753862308653);
    var vbox1388753862109796 = new kony.ui.Box({
        "id": "vbox1388753862109796",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox12443534679715924 = new kony.ui.Box({
        "id": "hbox12443534679715924",
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
    var label12443534679716782 = new kony.ui.Label({
        "id": "label12443534679716782",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMEGChecks = new kony.ui.Label({
        "id": "lblMEGChecks",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "0.00"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534679715924.add(label12443534679716782, lblMEGChecks);
    vbox1388753862109796.add(hbox12443534679715924);
    var vbox1388753862109800 = new kony.ui.Box({
        "id": "vbox1388753862109800",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDiffChecks = new kony.ui.Label({
        "id": "lblDiffChecks",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1388753862109800.add(lblDiffChecks);
    var vbox1388753862109808 = new kony.ui.Box({
        "id": "vbox1388753862109808",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1388753862109808.add();
    hboxCheck.add(vbox1388753862109804, vbox1388753862109793, vbox1388753862109796, vbox1388753862109800, vbox1388753862109808);
    var hboxCreditCard = new kony.ui.Box({
        "id": "hboxCreditCard",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1388753862114440 = new kony.ui.Box({
        "id": "vbox1388753862114440",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1388753862114442 = new kony.ui.Label({
        "id": "label1388753862114442",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strLblCreditCard")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
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
    vbox1388753862114440.add(label1388753862114442);
    var vbox1388753862114429 = new kony.ui.Box({
        "id": "vbox1388753862114429",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxGreyForCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1388753862308813 = new kony.ui.Box({
        "id": "hbox1388753862308813",
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
    var label1332450755232141 = new kony.ui.Label({
        "id": "label1332450755232141",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 5,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 4, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1388753862308815 = new kony.ui.Label({
        "id": "label1388753862308815",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtCreditCard = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtFirstNameSkin",
        "id": "txtCreditCard",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 7,
        "onTextChange": p2kwiet3578093092425_txtCreditCard_onTextChange_seq0,
        "placeholder": kony.i18n.getLocalizedString("placeHolderRequired"),
        "secureTextEntry": false,
        "skin": "txtFirstNameSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
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
    hbox1388753862308813.add(label1332450755232141, label1388753862308815, txtCreditCard);
    vbox1388753862114429.add(hbox1388753862308813);
    var vbox1388753862114432 = new kony.ui.Box({
        "id": "vbox1388753862114432",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox12443534679716957 = new kony.ui.Box({
        "id": "hbox12443534679716957",
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
    var label12443534679717335 = new kony.ui.Label({
        "id": "label12443534679717335",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMEGCreditCard = new kony.ui.Label({
        "id": "lblMEGCreditCard",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "0.00"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534679716957.add(label12443534679717335, lblMEGCreditCard);
    vbox1388753862114432.add(hbox12443534679716957);
    var vbox1388753862114436 = new kony.ui.Box({
        "id": "vbox1388753862114436",
        "isVisible": true,
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
    var lblDiffCreditCard = new kony.ui.Label({
        "id": "lblDiffCreditCard",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1388753862114436.add(lblDiffCreditCard);
    var vbox1388753862114444 = new kony.ui.Box({
        "id": "vbox1388753862114444",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1388753862114444.add();
    hboxCreditCard.add(vbox1388753862114440, vbox1388753862114429, vbox1388753862114432, vbox1388753862114436, vbox1388753862114444);
    var hboxDebitCard = new kony.ui.Box({
        "id": "hboxDebitCard",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox141833632511198 = new kony.ui.Box({
        "id": "vbox141833632511198",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label141833632511203 = new kony.ui.Label({
        "id": "label141833632511203",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strDebitCard")
    }, {
        "containerWeight": 100,
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
    vbox141833632511198.add(label141833632511203);
    var vbox141833632511199 = new kony.ui.Box({
        "id": "vbox141833632511199",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxGreyForCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox141833632511209 = new kony.ui.Box({
        "id": "hbox141833632511209",
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
    var label141833632511210 = new kony.ui.Label({
        "id": "label141833632511210",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 5,
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
    var label141833632511211 = new kony.ui.Label({
        "id": "label141833632511211",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "$"
    }, {
        "containerWeight": 10,
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
    var txtDebitCard = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtFirstNameSkin",
        "id": "txtDebitCard",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 7,
        "onTextChange": p2kwiet3578093092425_txtDebitCard_onTextChange_seq0,
        "placeholder": kony.i18n.getLocalizedString("placeHolderRequired"),
        "secureTextEntry": false,
        "skin": "txtFirstNameSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbox141833632511209.add(label141833632511210, label141833632511211, txtDebitCard);
    vbox141833632511199.add(hbox141833632511209);
    var vbox141833632511200 = new kony.ui.Box({
        "id": "vbox141833632511200",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox141833632511205 = new kony.ui.Box({
        "id": "hbox141833632511205",
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
    var label141833632511206 = new kony.ui.Label({
        "id": "label141833632511206",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "$"
    }, {
        "containerWeight": 11,
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
    var lblMEGDebit = new kony.ui.Label({
        "id": "lblMEGDebit",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "0.00"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox141833632511205.add(label141833632511206, lblMEGDebit);
    vbox141833632511200.add(hbox141833632511205);
    var vbox141833632511201 = new kony.ui.Box({
        "id": "vbox141833632511201",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDiffDebitCard = new kony.ui.Label({
        "id": "lblDiffDebitCard",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox141833632511201.add(lblDiffDebitCard);
    var vbox141833632511202 = new kony.ui.Box({
        "id": "vbox141833632511202",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox141833632511202.add();
    hboxDebitCard.add(vbox141833632511198, vbox141833632511199, vbox141833632511200, vbox141833632511201, vbox141833632511202);
    var hbox1388753862121001 = new kony.ui.Box({
        "id": "hbox1388753862121001",
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
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1388753862121014 = new kony.ui.Box({
        "id": "vbox1388753862121014",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblReedemed = new kony.ui.Label({
        "id": "lblReedemed",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strLblCreditSlipsRedeemed")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1388753862121014.add(lblReedemed);
    var vbox1388753862121003 = new kony.ui.Box({
        "id": "vbox1388753862121003",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxLightGreyCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1388753862309103 = new kony.ui.Box({
        "id": "hbox1388753862309103",
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
    var label1332450755232253 = new kony.ui.Label({
        "id": "label1332450755232253",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 5,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 4, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1388753862309105 = new kony.ui.Label({
        "id": "label1388753862309105",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtCreditSlipsRedeemed = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtFirstNameSkin",
        "id": "txtCreditSlipsRedeemed",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 7,
        "onTextChange": p2kwiet3578093092425_txtCreditSlipsRedeemed_onTextChange_seq0,
        "placeholder": kony.i18n.getLocalizedString("placeHolderRequired"),
        "secureTextEntry": false,
        "skin": "txtFirstNameSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
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
    hbox1388753862309103.add(label1332450755232253, label1388753862309105, txtCreditSlipsRedeemed);
    vbox1388753862121003.add(hbox1388753862309103);
    var vbox1388753862121006 = new kony.ui.Box({
        "id": "vbox1388753862121006",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox12443534679717374 = new kony.ui.Box({
        "id": "hbox12443534679717374",
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
    var label12443534679717552 = new kony.ui.Label({
        "id": "label12443534679717552",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMEGCreditSlipsRedeemed = new kony.ui.Label({
        "id": "lblMEGCreditSlipsRedeemed",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "0.00"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534679717374.add(label12443534679717552, lblMEGCreditSlipsRedeemed);
    vbox1388753862121006.add(hbox12443534679717374);
    var vbox1388753862121010 = new kony.ui.Box({
        "id": "vbox1388753862121010",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDiffCreditSlipsRedeemed = new kony.ui.Label({
        "id": "lblDiffCreditSlipsRedeemed",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1388753862121010.add(lblDiffCreditSlipsRedeemed);
    var vbox1388753862121018 = new kony.ui.Box({
        "id": "vbox1388753862121018",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1388753862121018.add();
    hbox1388753862121001.add(vbox1388753862121014, vbox1388753862121003, vbox1388753862121006, vbox1388753862121010, vbox1388753862121018);
    var hbox1388753862365199 = new kony.ui.Box({
        "id": "hbox1388753862365199",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1388753862365216 = new kony.ui.Box({
        "id": "vbox1388753862365216",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblIssued = new kony.ui.Label({
        "id": "lblIssued",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strLblCreditSlipsIssued")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1388753862365216.add(lblIssued);
    var vbox1388753862365201 = new kony.ui.Box({
        "id": "vbox1388753862365201",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxGreyForCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1388753862365203 = new kony.ui.Box({
        "id": "hbox1388753862365203",
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
    var label1332450755232341 = new kony.ui.Label({
        "id": "label1332450755232341",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 5,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 4, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1388753862365205 = new kony.ui.Label({
        "id": "label1388753862365205",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtCreditSlipsIssued = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtFirstNameSkin",
        "id": "txtCreditSlipsIssued",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 7,
        "onTextChange": p2kwiet3578093092425_txtCreditSlipsIssued_onTextChange_seq0,
        "placeholder": kony.i18n.getLocalizedString("placeHolderRequired"),
        "secureTextEntry": false,
        "skin": "txtFirstNameSkin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
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
    hbox1388753862365203.add(label1332450755232341, label1388753862365205, txtCreditSlipsIssued);
    vbox1388753862365201.add(hbox1388753862365203);
    var vbox1388753862365208 = new kony.ui.Box({
        "id": "vbox1388753862365208",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox12443534679717631 = new kony.ui.Box({
        "id": "hbox12443534679717631",
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
    var label12443534679717853 = new kony.ui.Label({
        "id": "label12443534679717853",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("currencySymbol")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMEGCreditSlipsIssued = new kony.ui.Label({
        "id": "lblMEGCreditSlipsIssued",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "0.00"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534679717631.add(label12443534679717853, lblMEGCreditSlipsIssued);
    vbox1388753862365208.add(hbox12443534679717631);
    var vbox1388753862365212 = new kony.ui.Box({
        "id": "vbox1388753862365212",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDiffCreditSlipsIssued = new kony.ui.Label({
        "id": "lblDiffCreditSlipsIssued",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox1388753862365212.add(lblDiffCreditSlipsIssued);
    var vbox1388753862365220 = new kony.ui.Box({
        "id": "vbox1388753862365220",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1388753862365220.add();
    hbox1388753862365199.add(vbox1388753862365216, vbox1388753862365201, vbox1388753862365208, vbox1388753862365212, vbox1388753862365220);
    var line1388753862333996 = new kony.ui.Line({
        "id": "line1388753862333996",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox1244353467291769 = new kony.ui.Box({
        "id": "hbox1244353467291769",
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
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1244353467291792 = new kony.ui.Box({
        "id": "vbox1244353467291792",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1388753862162208 = new kony.ui.Label({
        "id": "label1388753862162208",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblTotal")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
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
    vbox1244353467291792.add(label1388753862162208);
    var vbox1244353467291771 = new kony.ui.Box({
        "id": "vbox1244353467291771",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxGreyForCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1244353467291773 = new kony.ui.Box({
        "id": "hbox1244353467291773",
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
    var label1244353467291775 = new kony.ui.Label({
        "id": "label1244353467291775",
        "isVisible": true,
        "skin": "lblTransparentCashOutSkin",
        "text": "$"
    }, {
        "containerWeight": 99,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox1244353467291773.add(label1244353467291775);
    vbox1244353467291771.add(hbox1244353467291773);
    var vbox1244353467291780 = new kony.ui.Box({
        "id": "vbox1244353467291780",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox1244353467291782 = new kony.ui.Box({
        "id": "hbox1244353467291782",
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
    var label12443534679718250 = new kony.ui.Label({
        "id": "label12443534679718250",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "$"
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMEGTotal = new kony.ui.Label({
        "id": "lblMEGTotal",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox1244353467291782.add(label12443534679718250, lblMEGTotal);
    vbox1244353467291780.add(hbox1244353467291782);
    var vbox1244353467291788 = new kony.ui.Box({
        "id": "vbox1244353467291788",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1244353467291788.add();
    var vbox1244353467291796 = new kony.ui.Box({
        "id": "vbox1244353467291796",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1244353467291796.add();
    hbox1244353467291769.add(vbox1244353467291792, vbox1244353467291771, vbox1244353467291780, vbox1244353467291788, vbox1244353467291796);
    var hboxSubsidy = new kony.ui.Box({
        "id": "hboxSubsidy",
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
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox18667869961879068 = new kony.ui.Box({
        "id": "vbox18667869961879068",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 45,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label18667869961879070 = new kony.ui.Label({
        "id": "label18667869961879070",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblTotalSubsidy")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
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
    vbox18667869961879068.add(label18667869961879070);
    var vbox18667869961879052 = new kony.ui.Box({
        "id": "vbox18667869961879052",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxGreyForCashOut"
    }, {
        "containerWeight": 22,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox18667869961879054 = new kony.ui.Box({
        "id": "hbox18667869961879054",
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
    var label18667869961879056 = new kony.ui.Label({
        "id": "label18667869961879056",
        "isVisible": true,
        "skin": "lblTransparentCashOutSkin",
        "text": "$"
    }, {
        "containerWeight": 99,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox18667869961879054.add(label18667869961879056);
    vbox18667869961879052.add(hbox18667869961879054);
    var vbox18667869961879058 = new kony.ui.Box({
        "id": "vbox18667869961879058",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox18667869961879060 = new kony.ui.Box({
        "id": "hbox18667869961879060",
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
    var label18667869961879064 = new kony.ui.Label({
        "id": "label18667869961879064",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": "$"
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSubsidyTotal = new kony.ui.Label({
        "id": "lblSubsidyTotal",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 89,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox18667869961879060.add(label18667869961879064, lblSubsidyTotal);
    vbox18667869961879058.add(hbox18667869961879060);
    var vbox18667869961879066 = new kony.ui.Box({
        "id": "vbox18667869961879066",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox18667869961879066.add();
    var vbox18667869961879072 = new kony.ui.Box({
        "id": "vbox18667869961879072",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 3,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox18667869961879072.add();
    hboxSubsidy.add(vbox18667869961879068, vbox18667869961879052, vbox18667869961879058, vbox18667869961879066, vbox18667869961879072);
    var line1388753862377757 = new kony.ui.Line({
        "id": "line1388753862377757",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxbankDepoSlip = new kony.ui.Box({
        "id": "hboxbankDepoSlip",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox12443534679594965 = new kony.ui.Box({
        "id": "vbox12443534679594965",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 36,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox12443534679594967 = new kony.ui.Box({
        "id": "hbox12443534679594967",
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
    var lblAsterik = new kony.ui.Label({
        "id": "lblAsterik",
        "isVisible": true,
        "skin": "AsteriskSkin",
        "text": "*"
    }, {
        "containerWeight": 3,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label138875386289477 = new kony.ui.Label({
        "id": "label138875386289477",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblBanksDepositSLip")
    }, {
        "containerWeight": 97,
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
    hbox12443534679594967.add(lblAsterik, label138875386289477);
    vbox12443534679594965.add(hbox12443534679594967);
    var vboxDepositSlipNumber = new kony.ui.Box({
        "id": "vboxDepositSlipNumber",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 58,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtBankDepositSlipNumber = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetica19pxGrey",
        "id": "txtBankDepositSlipNumber",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "maxTextLength": 9,
        "onTextChange": p2kwiet3578093092425_txtBankDepositSlipNumber_onTextChange_seq0,
        "placeholder": kony.i18n.getLocalizedString("strLblBankSlipRequired"),
        "secureTextEntry": false,
        "skin": "txtHelvetica19pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    vboxDepositSlipNumber.add(txtBankDepositSlipNumber);
    var btnScan = new kony.ui.Button({
        "focusSkin": "btnScanHdrFocus",
        "id": "btnScan",
        "isVisible": true,
        "onClick": p2kwiet3578093092425_btnScan_onClick_seq0,
        "skin": "btnScanHdr"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hboxbankDepoSlip.add(vbox12443534679594965, vboxDepositSlipNumber, btnScan);
    var hboxSplitBankSlip = new kony.ui.Box({
        "id": "hboxSplitBankSlip",
        "isVisible": false,
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
    var VBox00ea89205731c49 = new kony.ui.Box({
        "id": "VBox00ea89205731c49",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
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
    var Label0b0da655782264e = new kony.ui.Label({
        "id": "Label0b0da655782264e",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblBanksDepositSLip")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hboxbankslip1 = new kony.ui.Box({
        "id": "hboxbankslip1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbl1stSlip = new kony.ui.Label({
        "id": "lbl1stSlip",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("lbl1stSlip")
    }, {
        "containerWeight": 10,
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
    var VBox0934ee8f9126242 = new kony.ui.Box({
        "id": "VBox0934ee8f9126242",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 32,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hboxSlipDate1Section = new kony.ui.Box({
        "id": "hboxSlipDate1Section",
        "isVisible": true,
        "onClick": AS_HBox_901cd246581546c09328e44641b8f8ef,
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
    var Label08772d4154a6f4b = new kony.ui.Label({
        "id": "Label08772d4154a6f4b",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblDate1")
    }, {
        "containerWeight": 30,
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
    var lblSlipDate1 = new kony.ui.Label({
        "id": "lblSlipDate1",
        "isVisible": true
    }, {
        "containerWeight": 53,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Image0b41464b6bd094a = new kony.ui.Image2({
        "id": "Image0b41464b6bd094a",
        "isVisible": true,
        "src": "icn_hope_aerrow.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxSlipDate1Section.add(Label08772d4154a6f4b, lblSlipDate1, Image0b41464b6bd094a);
    VBox0934ee8f9126242.add(hboxSlipDate1Section);
    var hbox132312665555285 = new kony.ui.Box({
        "id": "hbox132312665555285",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 52,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtBankDepositSlip1No = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetica19pxGrey",
        "id": "txtBankDepositSlip1No",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "maxTextLength": 9,
        "onDone": AS_TextField_f6bfb47024774bec8ed8bfde1d5ffca9,
        "onTextChange": AS_TextField_37b897f711a646138c7fd05f2f65adb0,
        "placeholder": kony.i18n.getLocalizedString("lblEnterDepoNo"),
        "secureTextEntry": false,
        "skin": "txtHelvetica19pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    hbox132312665555285.add(txtBankDepositSlip1No);
    var button132312665555309 = new kony.ui.Button({
        "focusSkin": "btnScanHdrFocus",
        "id": "button132312665555309",
        "isVisible": true,
        "onClick": AS_Button_e3990cf10be2405b8008f36a807e6a9d,
        "skin": "btnScanHdr"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hboxbankslip1.add(lbl1stSlip, VBox0934ee8f9126242, hbox132312665555285, button132312665555309);
    var hboxbankslip2 = new kony.ui.Box({
        "id": "hboxbankslip2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbl2ndSlip = new kony.ui.Label({
        "id": "lbl2ndSlip",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("lbl2ndSlip")
    }, {
        "containerWeight": 10,
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
    var vbox132312665557647 = new kony.ui.Box({
        "id": "vbox132312665557647",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 32,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hboxSlipDate2Section = new kony.ui.Box({
        "id": "hboxSlipDate2Section",
        "isVisible": true,
        "onClick": AS_HBox_da613a3692f240c2a9eb6570cf62d28e,
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
    var label132312665557651 = new kony.ui.Label({
        "id": "label132312665557651",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblDate1")
    }, {
        "containerWeight": 30,
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
    var lblSlipDate2 = new kony.ui.Label({
        "id": "lblSlipDate2",
        "isVisible": true
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image2132312665557655 = new kony.ui.Image2({
        "id": "image2132312665557655",
        "isVisible": true,
        "src": "icn_hope_aerrow.png"
    }, {
        "containerWeight": 15,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxSlipDate2Section.add(label132312665557651, lblSlipDate2, image2132312665557655);
    vbox132312665557647.add(hboxSlipDate2Section);
    var hbox132312665557659 = new kony.ui.Box({
        "id": "hbox132312665557659",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 52,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtBankDepositSlip2No = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetica19pxGrey",
        "id": "txtBankDepositSlip2No",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "maxTextLength": 9,
        "onDone": AS_TextField_583a26ec9d874ee3a07fe0dd3654646c,
        "onTextChange": AS_TextField_09fda301d18544f38fc932ede5d9f033,
        "placeholder": kony.i18n.getLocalizedString("lblEnterDepoNo"),
        "secureTextEntry": false,
        "skin": "txtHelvetica19pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    hbox132312665557659.add(txtBankDepositSlip2No);
    var button132312665557664 = new kony.ui.Button({
        "focusSkin": "btnScanHdrFocus",
        "id": "button132312665557664",
        "isVisible": true,
        "onClick": AS_Button_5c84767819054bb5a5ffbed06cd58ae7,
        "skin": "btnScanHdr"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hboxbankslip2.add(lbl2ndSlip, vbox132312665557647, hbox132312665557659, button132312665557664);
    var hboxbankslip3 = new kony.ui.Box({
        "id": "hboxbankslip3",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbl3rdSlip = new kony.ui.Label({
        "id": "lbl3rdSlip",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("lbl3rdSlip")
    }, {
        "containerWeight": 10,
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
    var vbox132312665575449 = new kony.ui.Box({
        "id": "vbox132312665575449",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 32,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hboxSlipDate3Section = new kony.ui.Box({
        "id": "hboxSlipDate3Section",
        "isVisible": true,
        "onClick": AS_HBox_43e93ce9134d47f0af8e45f5b2593e71,
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
    var label132312665575453 = new kony.ui.Label({
        "id": "label132312665575453",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblDate1")
    }, {
        "containerWeight": 30,
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
    var lblSlipDate3 = new kony.ui.Label({
        "id": "lblSlipDate3",
        "isVisible": true
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image2132312665575457 = new kony.ui.Image2({
        "id": "image2132312665575457",
        "isVisible": true,
        "src": "icn_hope_aerrow.png"
    }, {
        "containerWeight": 15,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxSlipDate3Section.add(label132312665575453, lblSlipDate3, image2132312665575457);
    vbox132312665575449.add(hboxSlipDate3Section);
    var hbox132312665575461 = new kony.ui.Box({
        "id": "hbox132312665575461",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 52,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtBankDepositSlip3No = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetica19pxGrey",
        "id": "txtBankDepositSlip3No",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
        "maxTextLength": 9,
        "onDone": AS_TextField_67b8ca118b74448299c9560aa6709a89,
        "onTextChange": AS_TextField_3db513fb469f4fec845de523bc989b52,
        "placeholder": kony.i18n.getLocalizedString("lblEnterDepoNo"),
        "secureTextEntry": false,
        "skin": "txtHelvetica19pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    hbox132312665575461.add(txtBankDepositSlip3No);
    var button132312665575466 = new kony.ui.Button({
        "focusSkin": "btnScanHdrFocus",
        "id": "button132312665575466",
        "isVisible": true,
        "onClick": AS_Button_9989ee57eb35431a9d655defcc54e17e,
        "skin": "btnScanHdr"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hboxbankslip3.add(lbl3rdSlip, vbox132312665575449, hbox132312665575461, button132312665575466);
    VBox00ea89205731c49.add(Label0b0da655782264e, hboxbankslip1, hboxbankslip2, hboxbankslip3);
    hboxSplitBankSlip.add(VBox00ea89205731c49);
    var line1388753862317822 = new kony.ui.Line({
        "id": "line1388753862317822",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox1388753862318463 = new kony.ui.Box({
        "id": "hbox1388753862318463",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER
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
    var vbox1388753862319024 = new kony.ui.Box({
        "id": "vbox1388753862319024",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 82,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1388753862319024.add();
    var vbox1388753862319655 = new kony.ui.Box({
        "id": "vbox1388753862319655",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 0, 4, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnContinue = new kony.ui.Button({
        "focusSkin": "btnwwtxtSearchLocation",
        "id": "btnContinue",
        "isVisible": true,
        "onClick": p2kwiet3578093092425_btnContinue_onClick_seq0,
        "skin": "btnwwtxtSearchLocation",
        "text": kony.i18n.getLocalizedString("btnContinue")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 6, 0, 0],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    vbox1388753862319655.add(btnContinue);
    hbox1388753862318463.add(vbox1388753862319024, vbox1388753862319655);
    var hbox12443534672773270 = new kony.ui.Box({
        "id": "hbox12443534672773270",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER
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
    var vbox12443534672773271 = new kony.ui.Box({
        "id": "vbox12443534672773271",
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
    var line12443534672781918 = new kony.ui.Line({
        "id": "line12443534672781918",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 30, 0, 0],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var hbox12443534672794576 = new kony.ui.Box({
        "id": "hbox12443534672794576",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "skin": "hboxFooterSkin"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 8],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox12443534672794578 = new kony.ui.Box({
        "id": "vbox12443534672794578",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [300, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hboxSelectedLine = new kony.ui.Box({
        "id": "hboxSelectedLine",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [25, 0, 25, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxSelectedLine = new kony.ui.Box({
        "id": "vboxSelectedLine",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [3, 0, 3, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lineSelected = new kony.ui.Line({
        "id": "lineSelected",
        "isVisible": true,
        "skin": "lineSelectedIcon"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 2
    }, {});
    vboxSelectedLine.add(lineSelected);
    hboxSelectedLine.add(vboxSelectedLine);
    var image212443534675864276 = new kony.ui.Image2({
        "id": "image212443534675864276",
        "isVisible": true,
        "src": "icn_cashout_selected.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 6, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbox12443534672794578.add(hboxSelectedLine, image212443534675864276);
    var vboxWeigh = new kony.ui.Box({
        "id": "vboxWeigh",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image212443534672794584 = new kony.ui.Image2({
        "id": "image212443534672794584",
        "isVisible": true,
        "src": "icn_timesheet_disable.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 8, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vboxWeigh.add(image212443534672794584);
    var vbox12443534672794586 = new kony.ui.Box({
        "id": "vbox12443534672794586",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image212443534672794588 = new kony.ui.Image2({
        "id": "image212443534672794588",
        "isVisible": true,
        "src": "icn_reportsandsignoff_disable.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 8, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbox12443534672794586.add(image212443534672794588);
    hbox12443534672794576.add(vbox12443534672794578, vboxWeigh, vbox12443534672794586);
    vbox12443534672773271.add(line12443534672781918, hbox12443534672794576);
    hbox12443534672773270.add(vbox12443534672773271);
    frmTallyMeetingCashout.add(hboxTallyHeader, hbox12443534677284671, hbox12443534677310390, line1388753862333995, hboxNumberOfBanks, line1388753862377756, hbox138875386247324, line1388753862333997, hbox138875386291765, hboxCheck, hboxCreditCard, hboxDebitCard, hbox1388753862121001, hbox1388753862365199, line1388753862333996, hbox1244353467291769, hboxSubsidy, line1388753862377757, hboxbankDepoSlip, hboxSplitBankSlip, line1388753862317822, hbox1388753862318463, hbox12443534672773270);
};

function frmTallyMeetingCashoutGlobals() {
    frmTallyMeetingCashout = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTallyMeetingCashout,
        "bounces": true,
        "enabledForIdleTimeout": true,
        "id": "frmTallyMeetingCashout",
        "needAppMenu": true,
        "onDestroy": p2kwiet3578093092425_frmTallyMeetingCashout_onDestroy_seq0,
        "onHide": p2kwiet3578093092425_frmTallyMeetingCashout_onhide_seq0,
        "postShow": p2kwiet3578093092425_frmTallyMeetingCashout_postshow_seq0,
        "preShow": p2kwiet3578093092425_frmTallyMeetingCashout_preshow_seq0,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "fromBottom",
            "transitionEffect": "transitionMoveIn"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromTop",
            "transitionEffect": "transitionMoveIn"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": false
    });
};