/**
 * Formatting currency 
 * @param {} paramCurrency (require number)
 * @returns {} formattedCurrency
 */
function formatCurrency(paramCurrency) {
    var formattedCurrency;
    var isNegative = false;
    if (paramCurrency[0] == "-") {
        paramCurrency = paramCurrency.substring(1);
        isNegative = true;
    }
    if (deviceLocale == "fr_FR") {
        formattedCurrency = accounting.formatMoney(paramCurrency, glbCurrency, 2, " ", ",");
    } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
    {
        formattedCurrency = accounting.formatMoney(paramCurrency, glbCurrency, 2, ",", ".");
    }

    if (isNegative) {
        formattedCurrency = "-" + formattedCurrency
    }
    return formattedCurrency;
}

function checkCurrency() {
    var formattedCurrency = formatCurrency("1234567.48");
    kony.print("Formatted Currency : " + formattedCurrency);
}
