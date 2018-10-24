function addWidgetsfrmTallyMeeting() {
    var hboxTallyHeader = new kony.ui.Box({
        "id": "hboxTallyHeader",
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
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var vbox12443534676066565 = new kony.ui.Box({
        "id": "vbox12443534676066565",
        "isVisible": true,
        "onClick": p2kwiet3578093092253_vbox12443534676066565_onClick_seq0,
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
        "src": "icn_cancel.png"
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
    vbox12443534676066565.add(image212443534676066566);
    var label1353482756356264 = new kony.ui.Label({
        "id": "label1353482756356264",
        "isVisible": true,
        "skin": "lblwwtxtHeader",
        "text": kony.i18n.getLocalizedString("strLblTallyMeeting")
    }, {
        "containerWeight": 89,
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
    hboxTallyHeader.add(vbox12443534676066565, label1353482756356264);
    var hboxMeetingName = new kony.ui.Box({
        "id": "hboxMeetingName",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_HEADER
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
    var lblMeetingName = new kony.ui.Label({
        "id": "lblMeetingName",
        "isVisible": true,
        "skin": "lblDemographicInfoSkin",
        "text": "Tally 9:00 - 9:45 AM 1/2/14 Meeting"
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
    hboxMeetingName.add(lblMeetingName);
    var hboxSummery = new kony.ui.Box({
        "id": "hboxSummery",
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
    var lblSummary = new kony.ui.Label({
        "id": "lblSummary",
        "isVisible": true,
        "skin": "lblwwtextBook40pxBlueSkin",
        "text": kony.i18n.getLocalizedString("strLblSummary")
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
    hboxSummery.add(lblSummary);
    var hbox1353482756356281 = new kony.ui.Box({
        "id": "hbox1353482756356281",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRecentLocation"
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
    var label1353482756356283 = new kony.ui.Label({
        "id": "label1353482756356283",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblAttendanceFees")
    }, {
        "containerWeight": 67,
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
    var label1353482756356284 = new kony.ui.Label({
        "id": "label1353482756356284",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": "#"
    }, {
        "containerWeight": 17,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 3, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1353482756356285 = new kony.ui.Label({
        "id": "label1353482756356285",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": "$"
    }, {
        "containerWeight": 16,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 7, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox1353482756356281.add(label1353482756356283, label1353482756356284, label1353482756356285);
    var hbox1353482756356282 = new kony.ui.Box({
        "id": "hbox1353482756356282",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblCurrAttendance = new kony.ui.Label({
        "id": "lblCurrAttendance",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblCurrentAttendance")
    }, {
        "containerWeight": 50,
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
    var label1353482756356287 = new kony.ui.Label({
        "id": "label1353482756356287",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblNumOfPaygAttMeeting = new kony.ui.Label({
        "id": "lblNumOfPaygAttMeeting",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblSumOfPaygAttMeeting = new kony.ui.Label({
        "id": "lblSumOfPaygAttMeeting",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox1353482756356282.add(lblCurrAttendance, label1353482756356287, lblNumOfPaygAttMeeting, lblSumOfPaygAttMeeting);
    var hbox1353482756356931 = new kony.ui.Box({
        "id": "hbox1353482756356931",
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
    var lblCurrentAttendSenior = new kony.ui.Label({
        "id": "lblCurrentAttendSenior",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strCurrAttendSenior")
    }, {
        "containerWeight": 50,
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
    var label1353482756356935 = new kony.ui.Label({
        "id": "label1353482756356935",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblCurrAttendSeniorInfo = new kony.ui.Label({
        "id": "lblCurrAttendSeniorInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblCurrAttendSeniorInfo1 = new kony.ui.Label({
        "id": "lblCurrAttendSeniorInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox1353482756356931.add(lblCurrentAttendSenior, label1353482756356935, lblCurrAttendSeniorInfo, lblCurrAttendSeniorInfo1);
    var hbox1353482756360331 = new kony.ui.Box({
        "id": "hbox1353482756360331",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblCurrentAttendMissedWeek = new kony.ui.Label({
        "id": "lblCurrentAttendMissedWeek",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strCurrAttendMissedWeek")
    }, {
        "containerWeight": 50,
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
    var label1353482756360335 = new kony.ui.Label({
        "id": "label1353482756360335",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblCurrAttendMissedWeekInfo = new kony.ui.Label({
        "id": "lblCurrAttendMissedWeekInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblCurrAttendMissedWeekInfo1 = new kony.ui.Label({
        "id": "lblCurrAttendMissedWeekInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox1353482756360331.add(lblCurrentAttendMissedWeek, label1353482756360335, lblCurrAttendMissedWeekInfo, lblCurrAttendMissedWeekInfo1);
    var hbox1353482756361791 = new kony.ui.Box({
        "id": "hbox1353482756361791",
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
    var lblCurrentAttendSeniorMissedWeek = new kony.ui.Label({
        "id": "lblCurrentAttendSeniorMissedWeek",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strCurrAttendSeniorMissedWeek")
    }, {
        "containerWeight": 50,
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
    var label1353482756361795 = new kony.ui.Label({
        "id": "label1353482756361795",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblCurrAttendSeniorMissedWeekInfo = new kony.ui.Label({
        "id": "lblCurrAttendSeniorMissedWeekInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblCurrAttendSeniorMissedWeekInfo1 = new kony.ui.Label({
        "id": "lblCurrAttendSeniorMissedWeekInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox1353482756361791.add(lblCurrentAttendSeniorMissedWeek, label1353482756361795, lblCurrAttendSeniorMissedWeekInfo, lblCurrAttendSeniorMissedWeekInfo1);
    var hbox1353482756369811 = new kony.ui.Box({
        "id": "hbox1353482756369811",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var vbox1386936634954660 = new kony.ui.Box({
        "id": "vbox1386936634954660",
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
    var line1386936634961494 = new kony.ui.Line({
        "id": "line1386936634961494",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox1386936634957781 = new kony.ui.Box({
        "id": "hbox1386936634957781",
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
    var lblTotalCurrAttend = new kony.ui.Label({
        "id": "lblTotalCurrAttend",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strTotalCurrAttend")
    }, {
        "containerWeight": 50,
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
    var label1353482756369815 = new kony.ui.Label({
        "id": "label1353482756369815",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "A"
    }, {
        "containerWeight": 17,
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
    var lblTotalCurrentAttend = new kony.ui.Label({
        "id": "lblTotalCurrentAttend",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblSumTotalCurrentAttend = new kony.ui.Label({
        "id": "lblSumTotalCurrentAttend",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
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
    hbox1386936634957781.add(lblTotalCurrAttend, label1353482756369815, lblTotalCurrentAttend, lblSumTotalCurrentAttend);
    var line1386936634988240 = new kony.ui.Line({
        "id": "line1386936634988240",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox1386936634954660.add(line1386936634961494, hbox1386936634957781, line1386936634988240);
    hbox1353482756369811.add(vbox1386936634954660);
    var hbox1386936634996808 = new kony.ui.Box({
        "id": "hbox1386936634996808",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblEnrollPAYG = new kony.ui.Label({
        "id": "lblEnrollPAYG",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strEnrollPAYG")
    }, {
        "containerWeight": 50,
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
    var label1386936634996812 = new kony.ui.Label({
        "id": "label1386936634996812",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblEnrollPAYGInfo = new kony.ui.Label({
        "id": "lblEnrollPAYGInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblEnrollPAYGInfo1 = new kony.ui.Label({
        "id": "lblEnrollPAYGInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox1386936634996808.add(lblEnrollPAYG, label1386936634996812, lblEnrollPAYGInfo, lblEnrollPAYGInfo1);
    var hbox13869366341051732 = new kony.ui.Box({
        "id": "hbox13869366341051732",
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
    var lblEnrollSenior = new kony.ui.Label({
        "id": "lblEnrollSenior",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strEnrollSenior")
    }, {
        "containerWeight": 50,
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
    var label13869366341051736 = new kony.ui.Label({
        "id": "label13869366341051736",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblEnrollPAYGSenInfo = new kony.ui.Label({
        "id": "lblEnrollPAYGSenInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblEnrollPAYGSenInfo1 = new kony.ui.Label({
        "id": "lblEnrollPAYGSenInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341051732.add(lblEnrollSenior, label13869366341051736, lblEnrollPAYGSenInfo, lblEnrollPAYGSenInfo1);
    var hbox13869366341063478 = new kony.ui.Box({
        "id": "hbox13869366341063478",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblEnrollMonthlyPass = new kony.ui.Label({
        "id": "lblEnrollMonthlyPass",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strEnrollMonthlyPass")
    }, {
        "containerWeight": 50,
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
    var label13869366341063482 = new kony.ui.Label({
        "id": "label13869366341063482",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblEnrollMonthlyPassInfo = new kony.ui.Label({
        "id": "lblEnrollMonthlyPassInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblsumOfEnroll = new kony.ui.Label({
        "id": "lblsumOfEnroll",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341063478.add(lblEnrollMonthlyPass, label13869366341063482, lblEnrollMonthlyPassInfo, lblsumOfEnroll);
    var hbox13869366341063998 = new kony.ui.Box({
        "id": "hbox13869366341063998",
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
    var lblEnroll17Week = new kony.ui.Label({
        "id": "lblEnroll17Week",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strEnroll17Week")
    }, {
        "containerWeight": 50,
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
    var label13869366341064002 = new kony.ui.Label({
        "id": "label13869366341064002",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblEnroll17WeekInfo = new kony.ui.Label({
        "id": "lblEnroll17WeekInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblSumofSevWK = new kony.ui.Label({
        "id": "lblSumofSevWK",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341063998.add(lblEnroll17Week, label13869366341064002, lblEnroll17WeekInfo, lblSumofSevWK);
    var hbox13869366341071606 = new kony.ui.Box({
        "id": "hbox13869366341071606",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var vbox13869366341071608 = new kony.ui.Box({
        "id": "vbox13869366341071608",
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
    var line13869366341071610 = new kony.ui.Line({
        "id": "line13869366341071610",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox13869366341071614 = new kony.ui.Box({
        "id": "hbox13869366341071614",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var lblEnrollTotal = new kony.ui.Label({
        "id": "lblEnrollTotal",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strEnrollTotal")
    }, {
        "containerWeight": 50,
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
    var label13869366341071618 = new kony.ui.Label({
        "id": "label13869366341071618",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "B"
    }, {
        "containerWeight": 17,
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
    var lblNumTotalEnrol = new kony.ui.Label({
        "id": "lblNumTotalEnrol",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var label13869366341071622 = new kony.ui.Label({
        "id": "label13869366341071622",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341071614.add(lblEnrollTotal, label13869366341071618, lblNumTotalEnrol, label13869366341071622);
    var line13869366341071612 = new kony.ui.Line({
        "id": "line13869366341071612",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox13869366341071608.add(line13869366341071610, hbox13869366341071614, line13869366341071612);
    hbox13869366341071606.add(vbox13869366341071608);
    var hbox13869366341074882 = new kony.ui.Box({
        "id": "hbox13869366341074882",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var vbox13869366341074884 = new kony.ui.Box({
        "id": "vbox13869366341074884",
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
    var hbox13869366341074890 = new kony.ui.Box({
        "id": "hbox13869366341074890",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var lblTotalPaidAtt = new kony.ui.Label({
        "id": "lblTotalPaidAtt",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strLblTotalPaid")
    }, {
        "containerWeight": 50,
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
    var label13869366341074894 = new kony.ui.Label({
        "id": "label13869366341074894",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "A+B+C+E"
    }, {
        "containerWeight": 17,
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
    var lblTotalPaidAttendInfo = new kony.ui.Label({
        "id": "lblTotalPaidAttendInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var label13869366341074898 = new kony.ui.Label({
        "id": "label13869366341074898",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341074890.add(lblTotalPaidAtt, label13869366341074894, lblTotalPaidAttendInfo, label13869366341074898);
    var line13869366341074888 = new kony.ui.Line({
        "id": "line13869366341074888",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox13869366341074884.add(hbox13869366341074890, line13869366341074888);
    hbox13869366341074882.add(vbox13869366341074884);
    var hbox13869366341076078 = new kony.ui.Box({
        "id": "hbox13869366341076078",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblPaidLT = new kony.ui.Label({
        "id": "lblPaidLT",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strPaidLT")
    }, {
        "containerWeight": 50,
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
    var label13869366341076082 = new kony.ui.Label({
        "id": "label13869366341076082",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "C"
    }, {
        "containerWeight": 17,
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
    var lblPaidLTInfo = new kony.ui.Label({
        "id": "lblPaidLTInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblPaidLTInfo1 = new kony.ui.Label({
        "id": "lblPaidLTInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341076078.add(lblPaidLT, label13869366341076082, lblPaidLTInfo, lblPaidLTInfo1);
    var hbox13869366341089884 = new kony.ui.Box({
        "id": "hbox13869366341089884",
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
    var lblPaidDiscountLT = new kony.ui.Label({
        "id": "lblPaidDiscountLT",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strDiscountPaidLT")
    }, {
        "containerWeight": 50,
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
    var label13869366341089888 = new kony.ui.Label({
        "id": "label13869366341089888",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "D"
    }, {
        "containerWeight": 17,
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
    var lblDiscountPaidLTInfo = new kony.ui.Label({
        "id": "lblDiscountPaidLTInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblDiscountPaidLTInfo1 = new kony.ui.Label({
        "id": "lblDiscountPaidLTInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341089884.add(lblPaidDiscountLT, label13869366341089888, lblDiscountPaidLTInfo, lblDiscountPaidLTInfo1);
    var hbox13869366341098544 = new kony.ui.Box({
        "id": "hbox13869366341098544",
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
    var lblFreeLT = new kony.ui.Label({
        "id": "lblFreeLT",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strFreeLT")
    }, {
        "containerWeight": 50,
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
    var label13869366341098548 = new kony.ui.Label({
        "id": "label13869366341098548",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "F"
    }, {
        "containerWeight": 17,
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
    var lblFreeLTInfo = new kony.ui.Label({
        "id": "lblFreeLTInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblFreeLTInfo1 = new kony.ui.Label({
        "id": "lblFreeLTInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341098544.add(lblFreeLT, label13869366341098548, lblFreeLTInfo, lblFreeLTInfo1);
    var hbox13869366341098584 = new kony.ui.Box({
        "id": "hbox13869366341098584",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblPrePaySales = new kony.ui.Label({
        "id": "lblPrePaySales",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strPrePaySales")
    }, {
        "containerWeight": 50,
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
    var label13869366341098588 = new kony.ui.Label({
        "id": "label13869366341098588",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblPrePaySalesInfo = new kony.ui.Label({
        "id": "lblPrePaySalesInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblPrePaySalesInfo1 = new kony.ui.Label({
        "id": "lblPrePaySalesInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341098584.add(lblPrePaySales, label13869366341098588, lblPrePaySalesInfo, lblPrePaySalesInfo1);
    var hbox13869366341098624 = new kony.ui.Box({
        "id": "hbox13869366341098624",
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
    var lbll17weekSales = new kony.ui.Label({
        "id": "lbll17weekSales",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("str17WeekSales")
    }, {
        "containerWeight": 50,
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
    var label13869366341098628 = new kony.ui.Label({
        "id": "label13869366341098628",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lbl17WeekSalesInfo = new kony.ui.Label({
        "id": "lbl17WeekSalesInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lbl17WeekSalesInfo1 = new kony.ui.Label({
        "id": "lbl17WeekSalesInfo1",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341098624.add(lbll17weekSales, label13869366341098628, lbl17WeekSalesInfo, lbl17WeekSalesInfo1);
    var hbox13869366341098464 = new kony.ui.Box({
        "id": "hbox13869366341098464",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblPrepaidAttend17Week = new kony.ui.Label({
        "id": "lblPrepaidAttend17Week",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strPrepaidAttend17Week")
    }, {
        "containerWeight": 50,
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
    var label13869366341098468 = new kony.ui.Label({
        "id": "label13869366341098468",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblPrepaidAttend17WeekInfo = new kony.ui.Label({
        "id": "lblPrepaidAttend17WeekInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var label13869366341098472 = new kony.ui.Label({
        "id": "label13869366341098472",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341098464.add(lblPrepaidAttend17Week, label13869366341098468, lblPrepaidAttend17WeekInfo, label13869366341098472);
    var hbox13869366341098504 = new kony.ui.Box({
        "id": "hbox13869366341098504",
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
    var lblPrepaidAttendMP = new kony.ui.Label({
        "id": "lblPrepaidAttendMP",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strPrepaidAttendMP")
    }, {
        "containerWeight": 50,
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
    var label13869366341098508 = new kony.ui.Label({
        "id": "label13869366341098508",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var lblPrepaidAttendMPInfo = new kony.ui.Label({
        "id": "lblPrepaidAttendMPInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var label13869366341098512 = new kony.ui.Label({
        "id": "label13869366341098512",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341098504.add(lblPrepaidAttendMP, label13869366341098508, lblPrepaidAttendMPInfo, label13869366341098512);
    var hbox13869366341102064 = new kony.ui.Box({
        "id": "hbox13869366341102064",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxAlternateSkin"
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
    var lblPrepaidAttendOther = new kony.ui.Label({
        "id": "lblPrepaidAttendOther",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strprepaidAttendOther")
    }, {
        "containerWeight": 50,
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
    var label13869366341102068 = new kony.ui.Label({
        "id": "label13869366341102068",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "AW"
    }, {
        "containerWeight": 17,
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
    var lblPrepaidAttendOtherInfo = new kony.ui.Label({
        "id": "lblPrepaidAttendOtherInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var label13869366341102072 = new kony.ui.Label({
        "id": "label13869366341102072",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341102064.add(lblPrepaidAttendOther, label13869366341102068, lblPrepaidAttendOtherInfo, label13869366341102072);
    var hbox13869366341114086 = new kony.ui.Box({
        "id": "hbox13869366341114086",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var vbox13869366341114088 = new kony.ui.Box({
        "id": "vbox13869366341114088",
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
    var line13869366341114090 = new kony.ui.Line({
        "id": "line13869366341114090",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox13869366341114094 = new kony.ui.Box({
        "id": "hbox13869366341114094",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var lblPrepaidCouponTotal = new kony.ui.Label({
        "id": "lblPrepaidCouponTotal",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strPrepaidCouponTotal")
    }, {
        "containerWeight": 50,
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
    var label13869366341114098 = new kony.ui.Label({
        "id": "label13869366341114098",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "E"
    }, {
        "containerWeight": 17,
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
    var lblPrepaidCouponTotalInfo = new kony.ui.Label({
        "id": "lblPrepaidCouponTotalInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var label13869366341114102 = new kony.ui.Label({
        "id": "label13869366341114102",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341114094.add(lblPrepaidCouponTotal, label13869366341114098, lblPrepaidCouponTotalInfo, label13869366341114102);
    var line13869366341114092 = new kony.ui.Line({
        "id": "line13869366341114092",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox13869366341114088.add(line13869366341114090, hbox13869366341114094, line13869366341114092);
    hbox13869366341114086.add(vbox13869366341114088);
    var hbox13869366341114158 = new kony.ui.Box({
        "id": "hbox13869366341114158",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var vbox13869366341114160 = new kony.ui.Box({
        "id": "vbox13869366341114160",
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
    var hbox13869366341114166 = new kony.ui.Box({
        "id": "hbox13869366341114166",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxTally"
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
    var lblMemberAttendTotal = new kony.ui.Label({
        "id": "lblMemberAttendTotal",
        "isVisible": true,
        "skin": "lblHelveticaRegular19px",
        "text": kony.i18n.getLocalizedString("strMemberAttendTotal")
    }, {
        "containerWeight": 50,
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
    var label13869366341114170 = new kony.ui.Label({
        "id": "label13869366341114170",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey",
        "text": "A+B+C+E+F"
    }, {
        "containerWeight": 17,
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
    var lblTotalMemberAttend = new kony.ui.Label({
        "id": "lblTotalMemberAttend",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 17,
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
    var label13869366341114174 = new kony.ui.Label({
        "id": "label13869366341114174",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
    }, {
        "containerWeight": 16,
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
    hbox13869366341114166.add(lblMemberAttendTotal, label13869366341114170, lblTotalMemberAttend, label13869366341114174);
    var line13869366341114164 = new kony.ui.Line({
        "id": "line13869366341114164",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox13869366341114160.add(hbox13869366341114166, line13869366341114164);
    hbox13869366341114158.add(vbox13869366341114160);
    var hbox12443534675934409 = new kony.ui.Box({
        "id": "hbox12443534675934409",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRecentLocation"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblMeetingStats = new kony.ui.Label({
        "id": "lblMeetingStats",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblMeetingStats")
    }, {
        "containerWeight": 84,
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
    var label1386936634968450 = new kony.ui.Label({
        "id": "label1386936634968450",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": "$"
    }, {
        "containerWeight": 16,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 0, 6, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534675934409.add(lblMeetingStats, label1386936634968450);
    var scrSegmentMeetingStats = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrSegmentMeetingStats",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "bounces": true
    });
    var vbox12443534675721296 = new kony.ui.Box({
        "id": "vbox12443534675721296",
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
    var segMeetingStats = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "segWhite",
        "groupCells": false,
        "id": "segMeetingStats",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowSkin": "segLGrey",
        "rowTemplate": vbox357809309784,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "seg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534675634977": "hbox12443534675634977",
            "lblColumnName": "lblColumnName",
            "lblMeetingStatsDesc": "lblMeetingStatsDesc",
            "lblStats": "lblStats",
            "vbox12443534675636640": "vbox12443534675636640",
            "vbox12443534675639842": "vbox12443534675639842",
            "vbox12443534675641347": "vbox12443534675641347"
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
    vbox12443534675721296.add(segMeetingStats);
    scrSegmentMeetingStats.add(vbox12443534675721296);
    var hbox202458205271537 = new kony.ui.Box({
        "id": "hbox202458205271537",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRecentLocation"
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
    var lblTotalWeightChange = new kony.ui.Label({
        "id": "lblTotalWeightChange",
        "isVisible": true,
        "skin": "lblDemographicInfoSkin",
        "text": kony.i18n.getLocalizedString("strLblTotalWeightChange")
    }, {
        "containerWeight": 86,
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
    var lblTotalWeightChangeInfo = new kony.ui.Label({
        "id": "lblTotalWeightChangeInfo",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
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
    hbox202458205271537.add(lblTotalWeightChange, lblTotalWeightChangeInfo);
    var hbox12443534675998878 = new kony.ui.Box({
        "id": "hbox12443534675998878",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRecentLocation"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblSalesSummaryDetails = new kony.ui.Label({
        "id": "lblSalesSummaryDetails",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": kony.i18n.getLocalizedString("strLblSalesSummary")
    }, {
        "containerWeight": 83,
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
    var label1386936634969307 = new kony.ui.Label({
        "id": "label1386936634969307",
        "isVisible": true,
        "skin": "lblwwTextMedium17pxGrey",
        "text": "$"
    }, {
        "containerWeight": 17,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 0, 4, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox12443534675998878.add(lblSalesSummaryDetails, label1386936634969307);
    var scrSegmentSalesSummary = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrSegmentSalesSummary",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "bounces": true
    });
    var vbox12443534676026088 = new kony.ui.Box({
        "id": "vbox12443534676026088",
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
    var segmentSalesSummary = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "segWhite",
        "groupCells": false,
        "id": "segmentSalesSummary",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowSkin": "segLGrey",
        "rowTemplate": vbox357809309786,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "seg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox12443534676026095": "hbox12443534676026095",
            "lblSalesDesc": "lblSalesDesc",
            "lblSalesStats": "lblSalesStats",
            "vbox12443534676026097": "vbox12443534676026097",
            "vbox12443534676026101": "vbox12443534676026101"
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
    vbox12443534676026088.add(segmentSalesSummary);
    scrSegmentSalesSummary.add(vbox12443534676026088);
    var hbox12443534676069616 = new kony.ui.Box({
        "id": "hbox12443534676069616",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRecentLocation"
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
    var lblTotalPre = new kony.ui.Label({
        "id": "lblTotalPre",
        "isVisible": true,
        "skin": "lblDemographicInfoSkin",
        "text": kony.i18n.getLocalizedString("strLblTotalPrePayment")
    }, {
        "containerWeight": 86,
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
    var label12443534676069620 = new kony.ui.Label({
        "id": "label12443534676069620",
        "isVisible": true,
        "skin": "lblHelveticaBold17pxGrey"
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
    hbox12443534676069616.add(lblTotalPre, label12443534676069620);
    frmTallyMeeting.add(hboxTallyHeader, hboxMeetingName, hboxSummery, hbox1353482756356281, hbox1353482756356282, hbox1353482756356931, hbox1353482756360331, hbox1353482756361791, hbox1353482756369811, hbox1386936634996808, hbox13869366341051732, hbox13869366341063478, hbox13869366341063998, hbox13869366341071606, hbox13869366341074882, hbox13869366341076078, hbox13869366341089884, hbox13869366341098544, hbox13869366341098584, hbox13869366341098624, hbox13869366341098464, hbox13869366341098504, hbox13869366341102064, hbox13869366341114086, hbox13869366341114158, hbox12443534675934409, scrSegmentMeetingStats, hbox202458205271537, hbox12443534675998878, scrSegmentSalesSummary, hbox12443534676069616);
};

function frmTallyMeetingGlobals() {
    frmTallyMeeting = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTallyMeeting,
        "bounces": true,
        "enabledForIdleTimeout": true,
        "id": "frmTallyMeeting",
        "needAppMenu": true,
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