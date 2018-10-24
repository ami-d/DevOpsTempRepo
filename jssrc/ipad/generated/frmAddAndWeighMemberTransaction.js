function addWidgetsfrmAddAndWeighMemberTransaction() {
    var hboxSubHeader = new kony.ui.Box({
        "id": "hboxSubHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxProcessMemberHeader"
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
    var lblProcessMembersubHeader1studio12 = new kony.ui.Label({
        "id": "lblProcessMembersubHeader1studio12",
        "isVisible": true,
        "skin": "lblwwtxtBook24px",
        "text": "\"Dre\" Drummond"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": false,
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
    var vbox198407320743 = new kony.ui.Box({
        "id": "vbox198407320743",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 12,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox198407320745 = new kony.ui.Box({
        "id": "hbox198407320745",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2198407320746 = new kony.ui.Image2({
        "id": "image2198407320746",
        "isVisible": true,
        "src": "divider_title_vertical.png"
    }, {
        "containerWeight": 14,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var imgLifetime = new kony.ui.Image2({
        "id": "imgLifetime",
        "isVisible": false
    }, {
        "containerWeight": 39,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var imgMonthlyPass = new kony.ui.Image2({
        "id": "imgMonthlyPass",
        "isVisible": true,
        "src": "icn_payment_header.png"
    }, {
        "containerWeight": 39,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hbox198407320745.add(image2198407320746, imgLifetime, imgMonthlyPass);
    vbox198407320743.add(hbox198407320745);
    var lblProcessMemberSubHeaderlbl2studio11 = new kony.ui.Label({
        "id": "lblProcessMemberSubHeaderlbl2studio11",
        "isVisible": true,
        "skin": "lblwwTextBook38px",
        "text": "Pay as you go"
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
    var lblExpDate = new kony.ui.Label({
        "id": "lblExpDate",
        "isVisible": true,
        "skin": "lblwwTextBook38px",
        "text": "Label"
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
    var vbox12443534672611876 = new kony.ui.Box({
        "id": "vbox12443534672611876",
        "isVisible": true,
        "onClick": p2kwiet357809309135_vbox12443534672611876_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 8,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox12443534672611878 = new kony.ui.Box({
        "id": "hbox12443534672611878",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image212443534672611882 = new kony.ui.Image2({
        "id": "image212443534672611882",
        "isVisible": true,
        "src": "icn_edit_note.png"
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
    hbox12443534672611878.add(image212443534672611882);
    vbox12443534672611876.add(hbox12443534672611878);
    var btnScan = new kony.ui.Button({
        "focusSkin": "btnScanHdrFocus",
        "id": "btnScan",
        "isVisible": false,
        "onClick": p2kwiet357809309135_btnScan_onClick_seq0,
        "skin": "btnScanHdr"
    }, {
        "containerWeight": 7,
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
    hboxSubHeader.add(lblProcessMembersubHeader1studio12, vbox198407320743, lblProcessMemberSubHeaderlbl2studio11, lblExpDate, vbox12443534672611876, btnScan);
    var hbox198407320756 = new kony.ui.Box({
        "id": "hbox198407320756",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "H2hbox"
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
    var vbox12443534679633977 = new kony.ui.Box({
        "id": "vbox12443534679633977",
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
    var lblProcessMembersubSubHeaderstudio10 = new kony.ui.Label({
        "id": "lblProcessMembersubSubHeaderstudio10",
        "isVisible": true,
        "skin": "H2",
        "text": kony.i18n.getLocalizedString("strLblPayment")
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
    var line12443534672595389 = new kony.ui.Line({
        "id": "line12443534672595389",
        "isVisible": true,
        "skin": "lineHeaderSeparator"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox12443534679633977.add(lblProcessMembersubSubHeaderstudio10, line12443534672595389);
    hbox198407320756.add(vbox12443534679633977);
    var hboxProductList = new kony.ui.Box({
        "id": "hboxProductList",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAddAndWeighCategorySkin"
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
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
        "padding": [0, 0, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox12443534673772707 = new kony.ui.Box({
        "id": "hbox12443534673772707",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAddAndWeighCategorySkin"
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
    var lblCategory = new kony.ui.Label({
        "id": "lblCategory",
        "isVisible": true,
        "skin": "lblHelveticaRegular12pxGrey",
        "text": kony.i18n.getLocalizedString("strLblCategory")
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vboxCategorySection = new kony.ui.Box({
        "id": "vboxCategorySection",
        "isVisible": true,
        "onClick": p2kwiet357809309135_vboxCategorySection_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var hboxCategorySection = new kony.ui.Box({
        "focusSkin": "hboxWhite",
        "id": "hboxCategorySection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxWhite"
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var lblCatType = new kony.ui.Label({
        "id": "lblCatType",
        "isVisible": true,
        "skin": "lblHelveticeRegular15pxGrey"
    }, {
        "containerWeight": 91,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox141535724822566 = new kony.ui.Box({
        "id": "vbox141535724822566",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 4, 5, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgHope1 = new kony.ui.Image2({
        "id": "imgHope1",
        "isVisible": true,
        "src": "icn_hope_aerrow.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    vbox141535724822566.add(imgHope1);
    hboxCategorySection.add(lblCatType, vbox141535724822566);
    vboxCategorySection.add(hboxCategorySection);
    var label79527106148843 = new kony.ui.Label({
        "id": "label79527106148843",
        "isVisible": true,
        "skin": "lblHelveticaRegular12pxGrey",
        "text": kony.i18n.getLocalizedString("strlblSearch")
    }, {
        "containerWeight": 11,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [15, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox14153572485934 = new kony.ui.Box({
        "id": "vbox14153572485934",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox79527106124879 = new kony.ui.Box({
        "id": "hbox79527106124879",
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
    var vbox79527106149906 = new kony.ui.Box({
        "id": "vbox79527106149906",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var txtSearchProduct = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtHelvetice15pxGrey",
        "id": "txtSearchProduct",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "onDone": p2kwiet357809309135_txtSearchProduct_onDone_seq0,
        "placeholder": kony.i18n.getLocalizedString("strDirectSaleKeywordPlaceHolder"),
        "secureTextEntry": false,
        "skin": "txtHelvetice15pxGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
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
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    vbox79527106149906.add(txtSearchProduct);
    hbox79527106124879.add(vbox79527106149906);
    vbox14153572485934.add(hbox79527106124879);
    hbox12443534673772707.add(lblCategory, vboxCategorySection, label79527106148843, vbox14153572485934);
    var line12443534677251693 = new kony.ui.Line({
        "id": "line12443534677251693",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var scrollbox12443534677872493 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox12443534677872493",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_BOTH,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeight": 68,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "bounces": true
    });
    var vbox12443534677986854 = new kony.ui.Box({
        "id": "vbox12443534677986854",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxCategorySection"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segProductDetails = new kony.ui.SegmentedUI2({
        "data": [{}, {}, {}],
        "groupCells": false,
        "id": "segProductDetails",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet357809309135_segProductDetails_onRowClick_seq0,
        "retainSelection": false,
        "rowTemplate": vbox357809309526,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "efeff400",
        "separatorRequired": true,
        "separatorThickness": 15,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534677008484": "hbox12443534677008484",
            "hbox12443534677009058": "hbox12443534677009058",
            "hbox12443534677010894": "hbox12443534677010894",
            "img1": "img1",
            "lblDesc1": "lblDesc1",
            "lblPrice1": "lblPrice1",
            "lblProdID1": "lblProdID1",
            "vbox12443534677008485": "vbox12443534677008485",
            "vbox12443534677011256": "vbox12443534677011256"
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
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    vbox12443534677986854.add(segProductDetails);
    var vbox12443534677806800 = new kony.ui.Box({
        "id": "vbox12443534677806800",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxCategorySection"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segProductDetails1 = new kony.ui.SegmentedUI2({
        "data": [{}, {}, {}],
        "groupCells": false,
        "id": "segProductDetails1",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet357809309135_segProductDetails1_onRowClick_seq0,
        "retainSelection": false,
        "rowTemplate": vbox357809309528,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "efeff400",
        "separatorRequired": true,
        "separatorThickness": 15,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534679756122": "hbox12443534679756122",
            "hbox12443534679756126": "hbox12443534679756126",
            "hbox12443534679756130": "hbox12443534679756130",
            "img2": "img2",
            "lblDesc2": "lblDesc2",
            "lblPrice2": "lblPrice2",
            "lblProdID2": "lblProdID2",
            "vbox12443534679756124": "vbox12443534679756124",
            "vbox12443534679756134": "vbox12443534679756134"
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
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    vbox12443534677806800.add(segProductDetails1);
    var vbox12443534677807209 = new kony.ui.Box({
        "id": "vbox12443534677807209",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vboxCategorySection"
    }, {
        "containerWeight": 33,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segProductDetails2 = new kony.ui.SegmentedUI2({
        "data": [{}, {}, {}],
        "groupCells": false,
        "id": "segProductDetails2",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet357809309135_segProductDetails2_onRowClick_seq0,
        "retainSelection": false,
        "rowTemplate": vbox357809309530,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "efeff400",
        "separatorRequired": true,
        "separatorThickness": 15,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534679326614": "hbox12443534679326614",
            "hbox12443534679326618": "hbox12443534679326618",
            "hbox12443534679326622": "hbox12443534679326622",
            "img3": "img3",
            "lblDesc3": "lblDesc3",
            "lblPrice3": "lblPrice3",
            "lblProdID3": "lblProdID3",
            "vbox12443534679326616": "vbox12443534679326616",
            "vbox12443534679326624": "vbox12443534679326624"
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
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    vbox12443534677807209.add(segProductDetails2);
    scrollbox12443534677872493.add(vbox12443534677986854, vbox12443534677806800, vbox12443534677807209);
    vbox12443534672170962.add(hbox12443534673772707, line12443534677251693, scrollbox12443534677872493);
    var vbox202458205262792 = new kony.ui.Box({
        "id": "vbox202458205262792",
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {});
    var vbox12443534679260220 = new kony.ui.Box({
        "id": "vbox12443534679260220",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 71,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblOrderDetails = new kony.ui.Label({
        "id": "lblOrderDetails",
        "isVisible": true,
        "skin": "F27",
        "text": kony.i18n.getLocalizedString("strLblOrderDetails")
    }, {
        "containerWeight": 100,
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
    vbox12443534679260220.add(lblOrderDetails);
    var vbox390007167166976 = new kony.ui.Box({
        "id": "vbox390007167166976",
        "isVisible": true,
        "onClick": p2kwiet357809309135_vbox390007167166976_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 29,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
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
    vbox390007167166976.add(imgBasket);
    hbox202458205262794.add(vbox12443534679260220, vbox390007167166976);
    var line12443534672041922 = new kony.ui.Line({
        "id": "line12443534672041922",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [1, 2, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var scrollbox124435346767178 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox124435346767178",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_BOTH,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeight": 27,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
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
    var vbox124435346767180 = new kony.ui.Box({
        "id": "vbox124435346767180",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 97,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segSKUDataPOC = new kony.ui.SegmentedUI2({
        "data": [{}, {}, {}],
        "groupCells": false,
        "id": "segSKUDataPOC",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet357809309135_segSKUDataPOC_onRowClick_seq0,
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": vbox357809309532,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "seg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 1,
        "showScrollbars": true,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox1244353467115128": "hbox1244353467115128",
            "imgEditIcon1": "imgEditIcon1",
            "lblDesc": "lblDesc",
            "lblUnit": "lblUnit",
            "vbox1244353467115134": "vbox1244353467115134"
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
    vbox124435346767180.add(segSKUDataPOC);
    scrollbox124435346767178.add(vbox124435346767180);
    var hbox29244706522003 = new kony.ui.Box({
        "id": "hbox29244706522003",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1415357248160054 = new kony.ui.Box({
        "id": "vbox1415357248160054",
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
    var image21415357248160056 = new kony.ui.Image2({
        "id": "image21415357248160056",
        "isVisible": false,
        "src": "icn_edit_note.png"
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
    vbox1415357248160054.add(image21415357248160056);
    var lblBillingDate = new kony.ui.Label({
        "id": "lblBillingDate",
        "isVisible": false,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblBillingDate")
    }, {
        "containerWeight": 52,
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
    var lblBillingDateData = new kony.ui.Label({
        "id": "lblBillingDateData",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px"
    }, {
        "containerWeight": 39,
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
    hbox29244706522003.add(vbox1415357248160054, lblBillingDate, lblBillingDateData);
    var scrollbox12443534679147550 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox12443534679147550",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_BOTH,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeight": 40,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
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
    var vbox12443534679165611 = new kony.ui.Box({
        "id": "vbox12443534679165611",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 97,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var segSKUData = new kony.ui.SegmentedUI2({
        "data": [{}, {}, {}],
        "groupCells": false,
        "id": "segSKUData",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet357809309135_segSKUData_onRowClick_seq0,
        "retainSelection": false,
        "rowSkin": "seg2Normal",
        "rowTemplate": vbox357809309534,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "seg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534673057547": "hbox12443534673057547",
            "hbox12443534675363": "hbox12443534675363",
            "hbox12443534675364": "hbox12443534675364",
            "hbox12443534675365": "hbox12443534675365",
            "imgEditIcon": "imgEditIcon",
            "lblProdDiscAmount": "lblProdDiscAmount",
            "lblProdDiscVal": "lblProdDiscVal",
            "lblProdId": "lblProdId",
            "lblProductName": "lblProductName",
            "lblQuantity": "lblQuantity",
            "lblTotalProductPrice": "lblTotalProductPrice",
            "vbox12443534675362": "vbox12443534675362",
            "vboxEditIconInSegment": "vboxEditIconInSegment"
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
    vbox12443534679165611.add(segSKUData);
    scrollbox12443534679147550.add(vbox12443534679165611);
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
        "padding": [0, 0, 0, 0],
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
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var line12443534679898917 = new kony.ui.Line({
        "id": "line12443534679898917",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblSubTotal = new kony.ui.Label({
        "id": "lblSubTotal",
        "isVisible": true,
        "skin": "F15",
        "text": kony.i18n.getLocalizedString("strLblSubTotal")
    }, {
        "containerWeight": 60,
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
    var lblSubTotalCart = new kony.ui.Label({
        "id": "lblSubTotalCart",
        "isVisible": true,
        "skin": "F15"
    }, {
        "containerWeight": 40,
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
    hbox12443534678465215.add(lblSubTotal, lblSubTotalCart);
    vbox1415357248166590.add(line12443534679898917, hbox12443534678465215);
    hboxOutstandingBalance.add(vbox1415357248166590);
    var hbox124435346743767 = new kony.ui.Box({
        "id": "hbox124435346743767",
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
    var lblTax2 = new kony.ui.Label({
        "id": "lblTax2",
        "isVisible": true,
        "skin": "F15",
        "text": kony.i18n.getLocalizedString("strLblTax")
    }, {
        "containerWeight": 64,
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
    var lblTaxInfo = new kony.ui.Label({
        "id": "lblTaxInfo",
        "isVisible": true,
        "skin": "F15"
    }, {
        "containerWeight": 36,
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
    hbox124435346743767.add(lblTax2, lblTaxInfo);
    var line12443534672038153 = new kony.ui.Line({
        "id": "line12443534672038153",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 1, 0, 2],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox202458205271537 = new kony.ui.Box({
        "id": "hbox202458205271537",
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
        "containerWeight": 60,
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
        "skin": "F26"
    }, {
        "containerWeight": 40,
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
    hbox202458205271537.add(lblTotal, lblTotalData);
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
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox12443534672466500 = new kony.ui.Box({
        "id": "vbox12443534672466500",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "vBoxGraySkin"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
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
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnCompleteProcessMember = new kony.ui.Button({
        "focusSkin": "btnwwtxtCompleteProcessMember",
        "id": "btnCompleteProcessMember",
        "isVisible": true,
        "onClick": p2kwiet357809309135_btnCompleteProcessMember_onClick_seq0,
        "skin": "btnwwtxtCompleteProcessMember",
        "text": kony.i18n.getLocalizedString("btnCompleteProcessMember")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 4, 0, 5],
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
    vbox202458205262792.add(hbox202458205262794, line12443534672041922, scrollbox124435346767178, hbox29244706522003, scrollbox12443534679147550, hboxOutstandingBalance, hbox124435346743767, line12443534672038153, hbox202458205271537, hbox12443534672171885);
    hboxProductList.add(vbox12443534672170962, vbox202458205262792);
    var lineLastSeparator = new kony.ui.Line({
        "id": "lineLastSeparator",
        "isVisible": true,
        "skin": "lineHeaderSeparator"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxFooterButtons = new kony.ui.Box({
        "id": "hboxFooterButtons",
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
    var line12443534672810410 = new kony.ui.Line({
        "id": "line12443534672810410",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxFooterSection = new kony.ui.Box({
        "id": "hboxFooterSection",
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
    var vboxFooterMemberSection = new kony.ui.Box({
        "id": "vboxFooterMemberSection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [300, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 8, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgEnrollNormal = new kony.ui.Image2({
        "id": "imgEnrollNormal",
        "isVisible": true,
        "src": "icn_enroll_selected.png"
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
    vboxFooterMemberSection.add(imgEnrollNormal);
    var vboxWeighSection = new kony.ui.Box({
        "id": "vboxWeighSection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 8, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgWeigh = new kony.ui.Image2({
        "id": "imgWeigh",
        "isVisible": true,
        "src": "icn_weigh_selected.png"
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
    vboxWeighSection.add(imgWeigh);
    var vboxPaymentSection = new kony.ui.Box({
        "id": "vboxPaymentSection",
        "isVisible": true,
        "onClick": p2kwiet357809309135_vboxPaymentSection_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
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
    var image212443534675895740 = new kony.ui.Image2({
        "id": "image212443534675895740",
        "isVisible": true,
        "src": "icn_payment_selected.png"
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
    vboxPaymentSection.add(hboxSelectedLine, image212443534675895740);
    hboxFooterSection.add(vboxFooterMemberSection, vboxWeighSection, vboxPaymentSection);
    vbox12443534672773271.add(line12443534672810410, hboxFooterSection);
    hboxFooterButtons.add(vbox12443534672773271);
    frmAddAndWeighMemberTransaction.add(hboxSubHeader, hbox198407320756, hboxProductList, lineLastSeparator, hboxFooterButtons);
};

function frmAddAndWeighMemberTransactionGlobals() {
    frmAddAndWeighMemberTransaction = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAddAndWeighMemberTransaction,
        "bounces": true,
        "enabledForIdleTimeout": true,
        "headers": [hboxEnrollHdrMain],
        "id": "frmAddAndWeighMemberTransaction",
        "needAppMenu": true,
        "onDestroy": p2kwiet357809309135_frmAddAndWeighMemberTransaction_onDestroy_seq0,
        "onHide": p2kwiet357809309135_frmAddAndWeighMemberTransaction_onhide_seq0,
        "postShow": p2kwiet357809309135_frmAddAndWeighMemberTransaction_postshow_seq0,
        "preShow": p2kwiet357809309135_frmAddAndWeighMemberTransaction_preshow_seq0,
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