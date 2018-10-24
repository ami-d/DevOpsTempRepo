function addWidgetsfrmTallyMeetingTimeSheet() {
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxCancelImage = new kony.ui.Box({
        "id": "vboxCancelImage",
        "isVisible": true,
        "onClick": p2kwiet3578093092757_vboxCancelImage_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
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
    var hbox1388753862153100 = new kony.ui.Box({
        "id": "hbox1388753862153100",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    var lblTimesheetMessage = new kony.ui.Label({
        "id": "lblTimesheetMessage",
        "isVisible": true,
        "skin": "lblHelveticaRegular19pxGrey",
        "text": kony.i18n.getLocalizedString("strLblTallyTimeSheetLabel")
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
    hbox1388753862153100.add(lblTimesheetMessage);
    var line1388753862155975 = new kony.ui.Line({
        "id": "line1388753862155975",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox1388753862153886 = new kony.ui.Box({
        "id": "hbox1388753862153886",
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
    var label1388753862153887 = new kony.ui.Label({
        "id": "label1388753862153887",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblEmployeeName")
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
    var label1388753862153889 = new kony.ui.Label({
        "id": "label1388753862153889",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblNumber")
    }, {
        "containerWeight": 13,
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
    var label1388753862153888 = new kony.ui.Label({
        "id": "label1388753862153888",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strlblposition")
    }, {
        "containerWeight": 14,
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
    var lblHeaderStartTime = new kony.ui.Label({
        "id": "lblHeaderStartTime",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strHeaderTimeIn")
    }, {
        "containerWeight": 12,
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
    var lblHeaderEndTime = new kony.ui.Label({
        "id": "lblHeaderEndTime",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strHeaderTimeOut")
    }, {
        "containerWeight": 12,
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
    var lblHeaderBreakout = new kony.ui.Label({
        "id": "lblHeaderBreakout",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strHeaderBreakOut")
    }, {
        "containerWeight": 12,
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
    var lblHeaderBreakIn = new kony.ui.Label({
        "id": "lblHeaderBreakIn",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": "Break In"
    }, {
        "containerWeight": 12,
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
    var label1388753862154240 = new kony.ui.Label({
        "id": "label1388753862154240",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblActions")
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
    hbox1388753862153886.add(label1388753862153887, label1388753862153889, label1388753862153888, lblHeaderStartTime, lblHeaderEndTime, lblHeaderBreakout, lblHeaderBreakIn, label1388753862154240);
    var line1388753862156824 = new kony.ui.Line({
        "id": "line1388753862156824",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox1388753862157061 = new kony.ui.Box({
        "id": "hbox1388753862157061",
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
    var vbox1388753862162982 = new kony.ui.Box({
        "id": "vbox1388753862162982",
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
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var segTimesheet = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "segLGrey",
        "groupCells": false,
        "id": "segTimesheet",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet3578093092757_segTimesheet_onRowClick_seq0,
        "retainSelection": false,
        "rowSkin": "segWhite",
        "rowTemplate": vbox357809309794,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox1388753862166102": "hbox1388753862166102",
            "imgDelete": "imgDelete",
            "imgEdit": "imgEdit",
            "lblBreakIn": "lblBreakIn",
            "lblBreakOut": "lblBreakOut",
            "lblEmpRole": "lblEmpRole",
            "lblEmployee": "lblEmployee",
            "lblNumber": "lblNumber",
            "lblTimeIn": "lblTimeIn",
            "lblTimeOut": "lblTimeOut",
            "vbox1388753862174093": "vbox1388753862174093",
            "vbox385389561521639": "vbox385389561521639"
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
    vbox1388753862162982.add(segTimesheet);
    hbox1388753862157061.add(vbox1388753862162982);
    var hbox1388753862157502 = new kony.ui.Box({
        "id": "hbox1388753862157502",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [5, 0, 5, 5],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_RIGHT
    }, {});
    var vbox1388753862161000 = new kony.ui.Box({
        "id": "vbox1388753862161000",
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
    var hbox12443534679715914 = new kony.ui.Box({
        "id": "hbox12443534679715914",
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
    var vbox12443534679715923 = new kony.ui.Box({
        "id": "vbox12443534679715923",
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
    vbox12443534679715923.add();
    var vbox1388753862162325 = new kony.ui.Box({
        "id": "vbox1388753862162325",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [3, 0, 3, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnAddTime = new kony.ui.Button({
        "focusSkin": "btnwwtxtSearchLocation",
        "id": "btnAddTime",
        "isVisible": true,
        "onClick": p2kwiet3578093092757_btnAddTime_onClick_seq0,
        "skin": "btnwwtxtSearchLocation",
        "text": kony.i18n.getLocalizedString("strAddTime")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_RIGHT
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    vbox1388753862162325.add(btnAddTime);
    hbox12443534679715914.add(vbox12443534679715923, vbox1388753862162325);
    var line12443534679715913 = new kony.ui.Line({
        "id": "line12443534679715913",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox1388753862161000.add(hbox12443534679715914, line12443534679715913);
    hbox1388753862157502.add(vbox1388753862161000);
    var hbox1388753862318463 = new kony.ui.Box({
        "id": "hbox1388753862318463",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 5, 0, 5],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1388753862148141 = new kony.ui.Box({
        "id": "vbox1388753862148141",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 4, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var btnBack = new kony.ui.Button({
        "focusSkin": "btnwwtxtSearchLocation",
        "id": "btnBack",
        "isVisible": true,
        "onClick": p2kwiet3578093092757_btnBack_onClick_seq0,
        "skin": "btnwwtxtSearchLocation",
        "text": kony.i18n.getLocalizedString("strBack")
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
    vbox1388753862148141.add(btnBack);
    var vbox1388753862319024 = new kony.ui.Box({
        "id": "vbox1388753862319024",
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
        "padding": [3, 0, 3, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    var btnContinue = new kony.ui.Button({
        "focusSkin": "btnwwtxtSearchLocation",
        "id": "btnContinue",
        "isVisible": true,
        "onClick": p2kwiet3578093092757_btnContinue_onClick_seq0,
        "skin": "btnNoWeighInSelected",
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
    hbox1388753862318463.add(vbox1388753862148141, vbox1388753862319024, vbox1388753862319655);
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
    var vboxWeighSection = new kony.ui.Box({
        "id": "vboxWeighSection",
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
    var image212443534675880606 = new kony.ui.Image2({
        "id": "image212443534675880606",
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
    vboxWeighSection.add(image212443534675880606);
    var vboxFooterMemberSection = new kony.ui.Box({
        "id": "vboxFooterMemberSection",
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
    var hbox1388753862350163 = new kony.ui.Box({
        "id": "hbox1388753862350163",
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
    var vbox1388753862350165 = new kony.ui.Box({
        "id": "vbox1388753862350165",
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
    var line1388753862350167 = new kony.ui.Line({
        "id": "line1388753862350167",
        "isVisible": true,
        "skin": "lineSelectedIcon"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 2
    }, {});
    vbox1388753862350165.add(line1388753862350167);
    hbox1388753862350163.add(vbox1388753862350165);
    var imgEnrollNormal = new kony.ui.Image2({
        "id": "imgEnrollNormal",
        "isVisible": true,
        "src": "icn_timesheet_selected.png"
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
    vboxFooterMemberSection.add(hbox1388753862350163, imgEnrollNormal);
    var vboxPaymentSection = new kony.ui.Box({
        "id": "vboxPaymentSection",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 18,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 8, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgPayment = new kony.ui.Image2({
        "id": "imgPayment",
        "isVisible": true,
        "src": "icn_reportsandsignoff_disable.png"
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
    vboxPaymentSection.add(imgPayment);
    hboxFooterSection.add(vboxWeighSection, vboxFooterMemberSection, vboxPaymentSection);
    vbox12443534672773271.add(line12443534672810410, hboxFooterSection);
    hbox12443534672773270.add(vbox12443534672773271);
    frmTallyMeetingTimeSheet.add(hboxTallyHeader, hbox1388753862153100, line1388753862155975, hbox1388753862153886, line1388753862156824, hbox1388753862157061, hbox1388753862157502, hbox1388753862318463, hbox12443534672773270);
};

function frmTallyMeetingTimeSheetGlobals() {
    frmTallyMeetingTimeSheet = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTallyMeetingTimeSheet,
        "bounces": true,
        "enabledForIdleTimeout": true,
        "id": "frmTallyMeetingTimeSheet",
        "needAppMenu": true,
        "postShow": p2kwiet3578093092757_frmTallyMeetingTimeSheet_postshow_seq0,
        "preShow": p2kwiet3578093092757_frmTallyMeetingTimeSheet_preshow_seq0,
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