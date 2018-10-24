function initializehdrNoMeetingScreen() {
    hboxNoMeetingHeader = new kony.ui.Box({
        "focusSkin": "hboxHeader",
        "id": "hboxNoMeetingHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "hboxHeader"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 4],
        "marginInPixel": true,
        "padding": [0, 8, 0, 8],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbxMenu = new kony.ui.Box({
        "id": "vbxMenu",
        "isVisible": true,
        "onClick": p2kwiet3578093095238_vbxMenu_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 6,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 8, 0, 8],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgMenu = new kony.ui.Image2({
        "id": "imgMenu",
        "isVisible": true,
        "src": "icn_menu.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 30,
        "referenceWidth": 30,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbxMenu.add(imgMenu);
    var vbxAdvancedSearch = new kony.ui.Box({
        "id": "vbxAdvancedSearch",
        "isVisible": true,
        "onClick": p2kwiet3578093095238_vbxAdvancedSearch_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 6,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 8, 0, 8],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgAdvancedSearch = new kony.ui.Image2({
        "id": "imgAdvancedSearch",
        "isVisible": true,
        "src": "icn_advance_settings.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 30,
        "referenceWidth": 30,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbxAdvancedSearch.add(imgAdvancedSearch);
    var vbox15633509363297038 = new kony.ui.Box({
        "focusSkin": "vboxWhiteBackGround",
        "id": "vbox15633509363297038",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxWhiteBackGround"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox15633509363297187 = new kony.ui.Box({
        "id": "hbox15633509363297187",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgSearchIcon = new kony.ui.Image2({
        "id": "imgSearchIcon",
        "isVisible": true,
        "src": "icn_search.png"
    }, {
        "containerWeight": 13,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 2, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 30,
        "referenceWidth": 30,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var tbxLastNameHeader = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetice15pxGrey",
        "id": "tbxLastNameHeader",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 50,
        "onDone": p2kwiet3578093095238_tbxLastNameHeader_onDone_seq0,
        "placeholder": kony.i18n.getLocalizedString("strLastName"),
        "secureTextEntry": false,
        "skin": "txtHelvetice15pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 41,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
        "onEndEditing": p2kwiet3578093095238_tbxLastNameHeader_iPad_onEndEditing_seq0,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var line15633509363297428 = new kony.ui.Line({
        "id": "line15633509363297428",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var tbxFirstNameHeader = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetice15pxGrey",
        "id": "tbxFirstNameHeader",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": 50,
        "onDone": p2kwiet3578093095238_tbxFirstNameHeader_onDone_seq0,
        "placeholder": kony.i18n.getLocalizedString("strFirstName"),
        "secureTextEntry": false,
        "skin": "txtHelvetice15pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 1, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
        "onEndEditing": p2kwiet3578093095238_tbxFirstNameHeader_iPad_onEndEditing_seq0,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbox15633509363297187.add(imgSearchIcon, tbxLastNameHeader, line15633509363297428, tbxFirstNameHeader);
    vbox15633509363297038.add(hbox15633509363297187);
    var btnScan = new kony.ui.Button({
        "focusSkin": "btnScanHdrFocus",
        "id": "btnScan",
        "isVisible": true,
        "onClick": p2kwiet3578093095238_btnScan_onClick_seq0,
        "skin": "btnScanHdr"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label12443534676897279 = new kony.ui.Label({
        "id": "label12443534676897279",
        "isVisible": true,
        "skin": "lblHelveticaRegular12pxGrey",
        "text": kony.i18n.getLocalizedString("strLblCurrentMeeting")
    }, {
        "containerWeight": 14,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vboxCurrMeetingSection = new kony.ui.Box({
        "id": "vboxCurrMeetingSection",
        "isVisible": true,
        "onClick": p2kwiet3578093095238_vboxCurrMeetingSection_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 23,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hboxCurrMeetingSection = new kony.ui.Box({
        "id": "hboxCurrMeetingSection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblCurrMeetingInfo = new kony.ui.Label({
        "id": "lblCurrMeetingInfo",
        "isVisible": true,
        "skin": "lblHelveticeRegular15pxGrey"
    }, {
        "containerWeight": 75,
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
    var vbox23515897221792 = new kony.ui.Box({
        "id": "vbox23515897221792",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 19,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox23515897221792.add();
    var imgHope1 = new kony.ui.Image2({
        "id": "imgHope1",
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
    hboxCurrMeetingSection.add(lblCurrMeetingInfo, vbox23515897221792, imgHope1);
    vboxCurrMeetingSection.add(hboxCurrMeetingSection);
    var vbxAddnWeightMemberHome = new kony.ui.Box({
        "id": "vbxAddnWeightMemberHome",
        "isVisible": true,
        "onClick": p2kwiet3578093095238_vbxAddnWeightMemberHome_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 5,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 8, 0, 8],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgAddnWeightMemberHome = new kony.ui.Image2({
        "id": "imgAddnWeightMemberHome",
        "isVisible": true,
        "src": "icn_addweigh_member.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 40,
        "referenceWidth": 40,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbxAddnWeightMemberHome.add(imgAddnWeightMemberHome);
    var vbxEnrollMember = new kony.ui.Box({
        "id": "vbxEnrollMember",
        "isVisible": true,
        "onClick": p2kwiet3578093095238_vbxEnrollMember_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 6,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 8, 0, 8],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgEnrollMember = new kony.ui.Image2({
        "id": "imgEnrollMember",
        "isVisible": true,
        "src": "icn_enroll_member.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 30,
        "referenceWidth": 30,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbxEnrollMember.add(imgEnrollMember);
    hboxNoMeetingHeader.add(vbxMenu, vbxAdvancedSearch, vbox15633509363297038, btnScan, label12443534676897279, vboxCurrMeetingSection, vbxAddnWeightMemberHome, vbxEnrollMember);
}