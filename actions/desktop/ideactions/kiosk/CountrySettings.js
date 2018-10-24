var Countries = {
    "CA": ["en_CA", "fr_CA"],
    "US": ["en_US"]
}
var CountryID = {
    "CA": "4",
    "US": "1"
}

function getCountryID() {
    var cid;
    switch (deviceLocale) {
        case "en_US":
            cid = CountryID["US"];
            break;
        case "en_CA":
            cid = CountryID["CA"];
            break;
        case "fr_CA":
            cid = CountryID["CA"];
            break;
        case "en-US_US":
            cid = CountryID["US"];
            break;
        case "en-CA_CA":
            cid = CountryID["CA"];
            break
        case "fr-CA_CA":
            cid = CountryID["CA"];
            break;
        default:
            cid = CountryID["US"];
            break;
    }
    return cid;
}

function setDeviceLocale() {
    var dlocale;
    switch (deviceLocale) {
        case "en_US":
            dlocale = deviceLocale;
            break;
        case "en_CA":
            dlocale = deviceLocale;
            break;
        case "fr_CA":
            dlocale = "fr_CA";
            break;
        case "en-US_US":
            dlocale = "en_US";
            break;
        case "en-CA_CA":
            dlocale = "en_CA";
            break;
        case "fr-CA_CA":
            dlocale = "fr_CA";
            break;
        default:
            dlocale = "en_US";
            break;
    }
    deviceLocale = dlocale;
}