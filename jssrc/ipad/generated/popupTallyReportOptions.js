function addWidgetspopupTallyReportOptions() {
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
        "onClick": p2kwiet3578093094958_vboxCancelImage_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 17,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 2, 0, 0],
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
        "containerWeight": 83,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox12443534671918228.add();
    hboxHeaderSection.add(vboxCancelImage, vbox12443534671918228);
    var line686154 = new kony.ui.Line({
        "id": "line686154",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxActionPopup = new kony.ui.Box({
        "id": "hboxActionPopup",
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
    var vbox1415357248876 = new kony.ui.Box({
        "id": "vbox1415357248876",
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
    var tallyReportActionsSegment = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "tallyReportActionsSegment",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet3578093094958_tallyReportActionsSegment_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "selectedRowBackgroundColor",
        "rowSkin": "seg2Normal",
        "rowTemplate": vbox357809309968,
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
            "lblActionItem": "lblActionItem"
        },
        "widgetSkin": "segWhite"
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
    vbox1415357248876.add(tallyReportActionsSegment);
    hboxActionPopup.add(vbox1415357248876);
    popupTallyReportOptions.add(hboxHeaderSection, line686154, hboxActionPopup);
};

function popupTallyReportOptionsGlobals() {
    popupTallyReportOptions = new kony.ui.Popup({
        "addWidgets": addWidgetspopupTallyReportOptions,
        "id": "popupTallyReportOptions",
        "init": p2kwiet3578093094958_popupTallyReportOptions_init_seq0,
        "isModal": false,
        "skin": "frm",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 30,
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