/* This method creates lookup table for Product Max quantity
 *
 * Created On: 18/06/2014 
 */
function createProductMaxQtyLookup() {

    function createProdMaxQtyLookupSuccessCallback(res) {
        kony.print(getMessageTemplate("addSuccess", "ProductMaxQuantityLookUp"), "info")
        transactionSuccessCallback();
    }

    var jsonData = JSON.parse(prodQtyLookUpData);
    var valueArray = [];

    for (var i = 0; i < jsonData.ProdMaxQtyLookUp.length; i++) {

        valueArray[i] = {};
        var jsonObj = jsonData.ProdMaxQtyLookUp[i];

        valueArray[i].Id = jsonObj.Id;
        valueArray[i].ProductSKU = jsonObj.ProductSKU;
        valueArray[i].MaxQuantity = jsonObj.MaxQuantity;

    }

    com.kony.WeightWatchers.LookUpTables.ProductMaxQuantity.createAll(valueArray, createProdMaxQtyLookupSuccessCallback, transactionErrorCallback, true);
}
