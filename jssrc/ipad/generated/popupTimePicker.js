function addWidgetspopupTimePicker() {
    var hbox133245075518468 = new kony.ui.Box({
        "id": "hbox133245075518468",
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
    var vbox12443534677836869 = new kony.ui.Box({
        "id": "vbox12443534677836869",
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
    var line12443534677837494 = new kony.ui.Line({
        "id": "line12443534677837494",
        "isVisible": true,
        "skin": "lineDataSeparatorSkin"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var timePicker = new kony.ui.PickerView({
        "id": "timePicker",
        "isVisible": true,
        "masterData": [
            [
                ["12", "12"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"], 40
            ],
            [
                ["00", "00"],
                ["01", "01"],
                ["02", "02"],
                ["03", "03"],
                ["04", "04"],
                ["05", "05"],
                ["06", "06"],
                ["07", "07"],
                ["08", "08"],
                ["09", "09"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"],
                ["14", "14"],
                ["15", "15"],
                ["16", "16"],
                ["17", "17"],
                ["18", "18"],
                ["19", "19"],
                ["20", "20"],
                ["21", "21"],
                ["22", "22"],
                ["23", "23"],
                ["24", "24"],
                ["25", "25"],
                ["26", "26"],
                ["27", "27"],
                ["28", "28"],
                ["29", "29"],
                ["30", "30"],
                ["31", "31"],
                ["32", "32"],
                ["33", "33"],
                ["34", "34"],
                ["35", "35"],
                ["36", "36"],
                ["37", "37"],
                ["38", "38"],
                ["39", "39"],
                ["40", "40"],
                ["41", "41"],
                ["42", "42"],
                ["43", "43"],
                ["44", "44"],
                ["45", "45"],
                ["46", "46"],
                ["47", "47"],
                ["48", "48"],
                ["49", "49"],
                ["50", "50"],
                ["51", "51"],
                ["52", "52"],
                ["53", "53"],
                ["54", "54"],
                ["55", "55"],
                ["56", "56"],
                ["57", "57"],
                ["58", "58"],
                ["59", "59"], 40
            ],
            [
                ["AM", kony.i18n.getLocalizedString("strAM")],
                ["PM", kony.i18n.getLocalizedString("strPM")], 20
            ]
        ],
        "masterDataMap": null,
        "onSelection": p2kwiet3578093094967_timePicker_onSelection_seq0,
        "selectedKeyValues": ["2009", "Jan"]
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line12443534677837495 = new kony.ui.Line({
        "id": "line12443534677837495",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox12443534677836869.add(line12443534677837494, timePicker, line12443534677837495);
    hbox133245075518468.add(vbox12443534677836869);
    popupTimePicker.add(hbox133245075518468);
};

function popupTimePickerGlobals() {
    popupTimePicker = new kony.ui.Popup({
        "addWidgets": addWidgetspopupTimePicker,
        "id": "popupTimePicker",
        "init": p2kwiet3578093094967_popupTimePicker_init_seq0,
        "isModal": false,
        "skin": "frm",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
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
        "popupStyle": constants.POPUP_TYPE_KONY_STYLE
    });
};