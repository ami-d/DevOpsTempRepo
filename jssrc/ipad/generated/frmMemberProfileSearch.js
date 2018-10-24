function addWidgetsfrmMemberProfileSearch() {
    var hboxheaderFilter = new kony.ui.Box({
        "id": "hboxheaderFilter",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "H2hbox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblRecordCount = new kony.ui.Label({
        "id": "lblRecordCount",
        "isVisible": true,
        "skin": "H2",
        "text": kony.i18n.getLocalizedString("strFilters")
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": false,
        "margin": [2, 0, 2, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox12443534673793941 = new kony.ui.Box({
        "id": "vbox12443534673793941",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtCity = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtF28",
        "id": "txtCity",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 100,
        "onDone": p2kwiet3578093091742_txtCity_onDone_seq0,
        "placeholder": kony.i18n.getLocalizedString("strLblCity"),
        "secureTextEntry": false,
        "skin": "txtF28",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": 2,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
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
    vbox12443534673793941.add(txtCity);
    var vboxDOBSection = new kony.ui.Box({
        "id": "vboxDOBSection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 16,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hboxState = new kony.ui.Box({
        "id": "hboxState",
        "isVisible": true,
        "onClick": p2kwiet3578093091742_hboxState_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 5, 0, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblState = new kony.ui.Label({
        "id": "lblState",
        "isVisible": true,
        "skin": "F28",
        "text": kony.i18n.getLocalizedString("strLblState")
    }, {
        "containerWeight": 55,
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
    var lblStateInfo = new kony.ui.Label({
        "id": "lblStateInfo",
        "isVisible": true,
        "skin": "F28"
    }, {
        "containerWeight": 33,
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
    var imgHopeArrowAdvSearch = new kony.ui.Image2({
        "id": "imgHopeArrowAdvSearch",
        "isVisible": true,
        "src": "icn_hope_aerrow.png"
    }, {
        "containerWeight": 10,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 6],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hboxState.add(lblState, lblStateInfo, imgHopeArrowAdvSearch);
    vboxDOBSection.add(hboxState);
    var vboxMemberTypeSection = new kony.ui.Box({
        "id": "vboxMemberTypeSection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 31,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [5, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hboxMemberTypeSection = new kony.ui.Box({
        "id": "hboxMemberTypeSection",
        "isVisible": true,
        "onClick": p2kwiet3578093091742_hboxMemberTypeSection_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblMemberType = new kony.ui.Label({
        "id": "lblMemberType",
        "isVisible": true,
        "skin": "F28",
        "text": kony.i18n.getLocalizedString("strLblMembershipType")
    }, {
        "containerWeight": 45,
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
    var lblMemberTypeInfo = new kony.ui.Label({
        "id": "lblMemberTypeInfo",
        "isVisible": true,
        "skin": "F28",
        "text": "All"
    }, {
        "containerWeight": 51,
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
    var imgHopeAdvSearch = new kony.ui.Image2({
        "id": "imgHopeAdvSearch",
        "isVisible": true,
        "src": "icn_hope_aerrow.png"
    }, {
        "containerWeight": 3,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 6],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hboxMemberTypeSection.add(lblMemberType, lblMemberTypeInfo, imgHopeAdvSearch);
    vboxMemberTypeSection.add(hboxMemberTypeSection);
    var vboxMemberStatus = new kony.ui.Box({
        "id": "vboxMemberStatus",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 26,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hboxMemberStatusSection = new kony.ui.Box({
        "id": "hboxMemberStatusSection",
        "isVisible": true,
        "onClick": p2kwiet3578093091742_hboxMemberStatusSection_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblMemberStatus = new kony.ui.Label({
        "id": "lblMemberStatus",
        "isVisible": true,
        "skin": "F28",
        "text": kony.i18n.getLocalizedString("strLblStatus")
    }, {
        "containerWeight": 32,
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
    var lblMemberStatusInfo = new kony.ui.Label({
        "id": "lblMemberStatusInfo",
        "isVisible": true,
        "skin": "F28",
        "text": "All"
    }, {
        "containerWeight": 62,
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
    var imgHopeIconAdvSearch = new kony.ui.Image2({
        "id": "imgHopeIconAdvSearch",
        "isVisible": true,
        "src": "icn_hope_aerrow.png"
    }, {
        "containerWeight": 6,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 6],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hboxMemberStatusSection.add(lblMemberStatus, lblMemberStatusInfo, imgHopeIconAdvSearch);
    vboxMemberStatus.add(hboxMemberStatusSection);
    hboxheaderFilter.add(lblRecordCount, vbox12443534673793941, vboxDOBSection, vboxMemberTypeSection, vboxMemberStatus);
    var line138693663477429 = new kony.ui.Line({
        "id": "line138693663477429",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox12443534673981868 = new kony.ui.Box({
        "id": "hbox12443534673981868",
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
    var vbox12443534673996825 = new kony.ui.Box({
        "id": "vbox12443534673996825",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 5,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label135348275621481 = new kony.ui.Label({
        "id": "label135348275621481",
        "isVisible": false,
        "skin": "lblNormal",
        "text": "Label"
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
    vbox12443534673996825.add(label135348275621481);
    var label12443534673981872 = new kony.ui.Label({
        "id": "label12443534673981872",
        "isVisible": true,
        "skin": "lblNormal",
        "text": kony.i18n.getLocalizedString("strLastName")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    var vboxSortImg = new kony.ui.Box({
        "id": "vboxSortImg",
        "isVisible": true,
        "onClick": p2kwiet3578093091742_vboxSortImg_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 2,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var imgSortHeader = new kony.ui.Image2({
        "id": "imgSortHeader",
        "isVisible": true,
        "src": "icn_sortby.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vboxSortImg.add(imgSortHeader);
    var label12443534673981886 = new kony.ui.Label({
        "id": "label12443534673981886",
        "isVisible": true,
        "skin": "lblwwtextMedium34px",
        "text": kony.i18n.getLocalizedString("strFirstName")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    var vbox13850002191476920 = new kony.ui.Box({
        "id": "vbox13850002191476920",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 2,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label13850002191476921 = new kony.ui.Label({
        "id": "label13850002191476921",
        "isVisible": false,
        "skin": "lblNormal",
        "text": "Label"
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
    vbox13850002191476920.add(label13850002191476921);
    var label12443534673981884 = new kony.ui.Label({
        "id": "label12443534673981884",
        "isVisible": true,
        "skin": "lblwwtextMedium34px",
        "text": kony.i18n.getLocalizedString("strLblCity")
    }, {
        "containerWeight": 8,
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
    var label12443534673981882 = new kony.ui.Label({
        "id": "label12443534673981882",
        "isVisible": true,
        "skin": "lblwwtextMedium34px",
        "text": kony.i18n.getLocalizedString("strLblState")
    }, {
        "containerWeight": 9,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label12443534673981880 = new kony.ui.Label({
        "id": "label12443534673981880",
        "isVisible": true,
        "skin": "lblwwtextMedium34px",
        "text": kony.i18n.getLocalizedString("strLblStreetAddress")
    }, {
        "containerWeight": 18,
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
    var label12443534673981878 = new kony.ui.Label({
        "id": "label12443534673981878",
        "isVisible": true,
        "skin": "lblwwtextMedium34px",
        "text": kony.i18n.getLocalizedString("strLblDateOfBirth")
    }, {
        "containerWeight": 15,
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
    var label12443534673981876 = new kony.ui.Label({
        "id": "label12443534673981876",
        "isVisible": true,
        "skin": "lblwwtextMedium34px",
        "text": kony.i18n.getLocalizedString("strLblPhoneTitle")
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
    var vbox12443534673996826 = new kony.ui.Box({
        "id": "vbox12443534673996826",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label135348275621450 = new kony.ui.Label({
        "id": "label135348275621450",
        "isVisible": false,
        "skin": "lblNormal",
        "text": "Label"
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
    vbox12443534673996826.add(label135348275621450);
    hbox12443534673981868.add(vbox12443534673996825, label12443534673981872, vboxSortImg, label12443534673981886, vbox13850002191476920, label12443534673981884, label12443534673981882, label12443534673981880, label12443534673981878, label12443534673981876, vbox12443534673996826);
    var line138693663477432 = new kony.ui.Line({
        "id": "line138693663477432",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox12443534674348115 = new kony.ui.Box({
        "id": "hbox12443534674348115",
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
    hbox12443534674348115.add();
    var segMemberProfileSearch = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "segWhite",
        "groupCells": false,
        "id": "segMemberProfileSearch",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet3578093091742_segMemberProfileSearch_onRowClick_seq0,
        "retainSelection": false,
        "rowSkin": "segGrey",
        "rowTemplate": vbox357809309726,
        "screenLevelWidget": false,
        "scrollingEvents": {
            "onReachingEnd": p2kwiet3578093091742_segMemberProfileSearch_onReachingEnd_seq0
        },
        "sectionHeaderSkin": "seg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": true,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534674784481": "hbox12443534674784481",
            "hbox1353482756334194": "hbox1353482756334194",
            "imgMPS1": "imgMPS1",
            "imgMPS2": "imgMPS2",
            "imgMPS3": "imgMPS3",
            "imgMPS4": "imgMPS4",
            "imgMPS5": "imgMPS5",
            "lblMPSCity": "lblMPSCity",
            "lblMPSDateOfBirth": "lblMPSDateOfBirth",
            "lblMPSFirstName": "lblMPSFirstName",
            "lblMPSLastName": "lblMPSLastName",
            "lblMPSPhone": "lblMPSPhone",
            "lblMPSState": "lblMPSState",
            "lblMPSStreet": "lblMPSStreet",
            "vbox12443534674348117": "vbox12443534674348117",
            "vbox12443534674348125": "vbox12443534674348125",
            "vbox12443534674348129": "vbox12443534674348129",
            "vbox12443534674348133": "vbox12443534674348133",
            "vbox12443534674348137": "vbox12443534674348137",
            "vbox12443534674348141": "vbox12443534674348141",
            "vbox12443534674348145": "vbox12443534674348145",
            "vbox12443534674348153": "vbox12443534674348153",
            "vboxProcessMember": "vboxProcessMember"
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
    var hboxSegHeader = new kony.ui.Box({
        "id": "hboxSegHeader",
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
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblShowMoreResult = new kony.ui.Label({
        "id": "lblShowMoreResult",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strLblShowMoreResult")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hboxSegHeader.add(lblShowMoreResult);
    frmMemberProfileSearch.add(hboxheaderFilter, line138693663477429, hbox12443534673981868, line138693663477432, hbox12443534674348115, segMemberProfileSearch, hboxSegHeader);
};

function frmMemberProfileSearchGlobals() {
    frmMemberProfileSearch = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMemberProfileSearch,
        "bounces": true,
        "enabledForIdleTimeout": true,
        "headers": [hboxNameSection, hboxPhoneSection, hboxUserIdSection, hboxMemberIdSection],
        "id": "frmMemberProfileSearch",
        "needAppMenu": true,
        "postShow": p2kwiet3578093091742_frmMemberProfileSearch_postshow_seq0,
        "preShow": p2kwiet3578093091742_frmMemberProfileSearch_preshow_seq0,
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