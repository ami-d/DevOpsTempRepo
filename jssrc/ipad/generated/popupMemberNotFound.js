function addWidgetspopupMemberNotFound() {
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
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxCancelImage = new kony.ui.Box({
        "id": "vboxCancelImage",
        "isVisible": true,
        "onClick": p2kwiet3578093094225_vboxCancelImage_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 14,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 7, 0, 7],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
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
    var vbox12443534671918228 = new kony.ui.Box({
        "id": "vbox12443534671918228",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 72,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblMemberNotFoundHdr = new kony.ui.Label({
        "id": "lblMemberNotFoundHdr",
        "isVisible": true,
        "skin": "lblwwtextMedium34px",
        "text": kony.i18n.getLocalizedString("strMemberNotFound")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 5, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox12443534671918228.add(lblMemberNotFoundHdr);
    var vboxDoneImage = new kony.ui.Box({
        "id": "vboxDoneImage",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 14,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vboxDoneImage.add();
    hboxHeaderSection.add(vboxCancelImage, vbox12443534671918228, vboxDoneImage);
    var line1353482756503848 = new kony.ui.Line({
        "id": "line1353482756503848",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 4
    }, {});
    var lblMsg = new kony.ui.Label({
        "id": "lblMsg",
        "isVisible": true,
        "skin": "lblNormal",
        "text": kony.i18n.getLocalizedString("strMsgMemberNotFound")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 10, 0, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox1353482756503847 = new kony.ui.Box({
        "id": "hbox1353482756503847",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox1353482756528841 = new kony.ui.Box({
        "id": "vbox1353482756528841",
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT
    }, {});
    var btnEnroll = new kony.ui.Button({
        "focusSkin": "btnwwtxtSearchLocation",
        "id": "btnEnroll",
        "isVisible": true,
        "onClick": p2kwiet3578093094225_btnEnroll_onClick_seq0,
        "skin": "btnwwtxtSearchLocation",
        "text": kony.i18n.getLocalizedString("btnEnroll")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [50, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    vbox1353482756528841.add(btnEnroll);
    var vbox1353482756528842 = new kony.ui.Box({
        "id": "vbox1353482756528842",
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
    var btnAdd = new kony.ui.Button({
        "focusSkin": "btnwwtxtSearchLocation",
        "id": "btnAdd",
        "isVisible": true,
        "onClick": p2kwiet3578093094225_btnAdd_onClick_seq0,
        "skin": "btnwwtxtSearchLocation",
        "text": kony.i18n.getLocalizedString("btnAdd")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 0, 50, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    vbox1353482756528842.add(btnAdd);
    hbox1353482756503847.add(vbox1353482756528841, vbox1353482756528842);
    var hbox795271061261833 = new kony.ui.Box({
        "id": "hbox795271061261833",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox795271061261839 = new kony.ui.Box({
        "id": "vbox795271061261839",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 24,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox795271061261839.add();
    var vbox795271061261835 = new kony.ui.Box({
        "id": "vbox795271061261835",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 51,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label795271061267292 = new kony.ui.Label({
        "id": "label795271061267292",
        "isVisible": true,
        "skin": "lblNormal",
        "text": kony.i18n.getLocalizedString("strLblSearchAllLocation")
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
    vbox795271061261835.add(label795271061267292);
    var vbox795271061261841 = new kony.ui.Box({
        "id": "vbox795271061261841",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox795271061261841.add();
    hbox795271061261833.add(vbox795271061261839, vbox795271061261835, vbox795271061261841);
    var hbox795271061259224 = new kony.ui.Box({
        "id": "hbox795271061259224",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 10],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox795271061259226 = new kony.ui.Box({
        "id": "vbox795271061259226",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 24,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox795271061259226.add();
    var vbox795271061259225 = new kony.ui.Box({
        "id": "vbox795271061259225",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 51,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button795271061258774 = new kony.ui.Button({
        "focusSkin": "btnwwtxtSearchLocation",
        "id": "button795271061258774",
        "isVisible": true,
        "onClick": p2kwiet3578093094225_button795271061258774_onClick_seq0,
        "skin": "btnwwtxtSearchLocation",
        "text": kony.i18n.getLocalizedString("strBtnAdvancedSearch")
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [3, 3, 3, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    vbox795271061259225.add(button795271061258774);
    var vbox795271061259227 = new kony.ui.Box({
        "id": "vbox795271061259227",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox795271061259227.add();
    hbox795271061259224.add(vbox795271061259226, vbox795271061259225, vbox795271061259227);
    var hbox1353482756504681 = new kony.ui.Box({
        "id": "hbox1353482756504681",
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
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1353482756504682 = new kony.ui.Box({
        "id": "vbox1353482756504682",
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
    var label1353482756504721 = new kony.ui.Label({
        "id": "label1353482756504721",
        "isVisible": true,
        "skin": "lblNormal"
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
    vbox1353482756504682.add(label1353482756504721);
    hbox1353482756504681.add(vbox1353482756504682);
    popupMemberNotFound.add(hboxHeaderSection, line1353482756503848, lblMsg, hbox1353482756503847, hbox795271061261833, hbox795271061259224, hbox1353482756504681);
};

function popupMemberNotFoundGlobals() {
    popupMemberNotFound = new kony.ui.Popup({
        "addWidgets": addWidgetspopupMemberNotFound,
        "id": "popupMemberNotFound",
        "isModal": false,
        "skin": "frm",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 35,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendTop": false,
        "extendTop": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "popupStyle": constants.POPUP_TYPE_NATIVE_STYLE
    });
};