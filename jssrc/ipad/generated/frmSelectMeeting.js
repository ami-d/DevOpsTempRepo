function addWidgetsfrmSelectMeeting() {
    var hobxHeaderSelectMeeting = new kony.ui.Box({
        "id": "hobxHeaderSelectMeeting",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxSMlogoutSkn"
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
    var vbox156335075082754 = new kony.ui.Box({
        "id": "vbox156335075082754",
        "isVisible": true,
        "onClick": p2kwiet3578093092083_vbox156335075082754_onClick_seq0,
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
    var ccValidateImg = new kony.ui.Image2({
        "id": "ccValidateImg",
        "isVisible": false,
        "src": "icn_credit_card.png"
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
    vbox156335075082754.add(ccValidateImg);
    var label12443534676896235 = new kony.ui.Label({
        "id": "label12443534676896235",
        "isVisible": true,
        "skin": "lblWWText17pxGreyBackground",
        "text": kony.i18n.getLocalizedString("strLblSelectMeeting")
    }, {
        "containerWeight": 80,
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
    var vboxSelMeetingLogout = new kony.ui.Box({
        "id": "vboxSelMeetingLogout",
        "isVisible": true,
        "onClick": p2kwiet3578093092083_vboxSelMeetingLogout_onClick_seq0,
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
    var image223515897225513 = new kony.ui.Image2({
        "id": "image223515897225513",
        "isVisible": true,
        "src": "icn_sm_logout.png"
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
    vboxSelMeetingLogout.add(image223515897225513);
    hobxHeaderSelectMeeting.add(vbox156335075082754, label12443534676896235, vboxSelMeetingLogout);
    var hboxSection2 = new kony.ui.Box({
        "id": "hboxSection2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblDateInfo = new kony.ui.Label({
        "id": "lblDateInfo",
        "isVisible": true,
        "skin": "lblHelvetica60px"
    }, {
        "containerWeight": 100,
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
    hboxSection2.add(lblDateInfo);
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineHeaderSeparator"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var segMeetingsList = new kony.ui.SegmentedUI2({
        "data": [{
            "btnOpen": ""
        }, {}, {}],
        "groupCells": false,
        "id": "segMeetingsList",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet3578093092083_segMeetingsList_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "selectedRowBackgroundColor",
        "rowSkin": "seg2Normal",
        "rowTemplate": vbox357809309770,
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
            "btnOpen": "btnOpen",
            "hbox1296409062127448": "hbox1296409062127448",
            "lineSegment": "lineSegment",
            "meetingName": "meetingName",
            "vbox061c391128b3b4e": "vbox061c391128b3b4e",
            "vbox1296409062127449": "vbox1296409062127449",
            "vbox1296409062155886": "vbox1296409062155886",
            "weekNumber": "weekNumber"
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
    var hboxSection4 = new kony.ui.Box({
        "id": "hboxSection4",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 20, 0, 118],
        "marginInPixel": true,
        "padding": [420, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnNoMeeting = new kony.ui.Button({
        "focusSkin": "btnwwtxtNoMeeting",
        "id": "btnNoMeeting",
        "isVisible": true,
        "onClick": p2kwiet3578093092083_btnNoMeeting_onClick_seq0,
        "skin": "btnwwtxtNoMeeting",
        "text": kony.i18n.getLocalizedString("strNoMeeting")
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hboxSection4.add(btnNoMeeting);
    frmSelectMeeting.add(hobxHeaderSelectMeeting, hboxSection2, line1, segMeetingsList, hboxSection4);
};

function frmSelectMeetingGlobals() {
    frmSelectMeeting = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSelectMeeting,
        "bounces": true,
        "enabledForIdleTimeout": true,
        "id": "frmSelectMeeting",
        "init": p2kwiet3578093092083_frmSelectMeeting_init_seq0,
        "needAppMenu": true,
        "postShow": p2kwiet3578093092083_frmSelectMeeting_postshow_seq0,
        "preShow": p2kwiet3578093092083_frmSelectMeeting_preshow_seq0,
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