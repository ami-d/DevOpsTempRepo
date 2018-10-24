var ProductSale = {};

function addCurrency(amount) {
    var a = amount;
    if (a.toString().indexOf(glbCurrency) < 0) {
    	a = parseFloat(a).toFixed(2);
    	//fr_CA price format changes
    	if(deviceLocale == "fr_CA"){
    		a = a.toString().replace(".",",");
    		return a + glbCurrency;
    	}else{
    		return glbCurrency + a;
    	}
    	//return glbCurrency + a;
        
    } else {
        return amount;
    }

}

function removeCurrency(amount) {
    var a = amount;
    if (a.toString().indexOf(glbCurrency) >= 0){
        a = a.replace(glbCurrency, "");
        //fr_CA price format changes
        if(deviceLocale == "fr_CA")
        	a = a.replace(",",".");
        
    }
    return parseFloat(a);
}

function roundOffToHigh5Cents(value) {
    if (in_array(deviceLocale,Countries["CA"])) {
        value = removeCurrency(value);
        if (value.toString().indexOf(".") != -1 && value.toString().split(".")[1].charAt(1) % 5 != 0) {
            value = value * 100; 
            if (value % 5 != 0) {
                value = (5 - (value % 5) + value);
            }
            value /= 100;
            return value;
        }
        else {
            return value;
        }
    }
    return value;
}

function roundOffToLow5Cents(value) {
    if (in_array(deviceLocale,Countries["CA"])) {
        value = removeCurrency(value);
        if (value.toString().indexOf(".") != -1 && value.toString().split(".")[1].charAt(1) % 5 != 0) {
            value = value * 100; 
            if (value % 5 != 0) {
                value = (value - (value % 5));
            }
            value /= 100;
            return value;
        }
        else {
            return value;
        }
    }
    return value;
}

function roundOff5Cents(value) {
    if (in_array(deviceLocale,Countries["CA"])) {
        value = removeCurrency(value);
        if (value.toString().indexOf(".") != -1 && value.toString().split(".")[1].charAt(1) % 5 != 0) {
            value = value * 100;
            if (value % 5 != 0) {
                if ((value % 5) >= 2.5) {
                    value = (5 - (value % 5) + value);
                } else {
                    value = (value - (value % 5));
                }
            }
            value /= 100;
            kony.print("Rounding to " + value);
            return value;
        } else {
            return value;
        }
    }
    return value;
}

var Product = function(pid, sku, orgprice, img, desc, fulldesc, tax, maxQty, type, taxRate, isPrepaymentPlan) {
    this.pid = pid;
    this.sku = sku;
    this.orgprice = orgprice;
    this.img = img;
    this.nameOfProduct = desc;
    this.fulldesc = fulldesc;
    if(isServiceProvider) // Added for MEGCA-375
    	this.tax = tax * discountforServiceProvider;
    else
    	this.tax = tax;
    this.maxQty = maxQty;
    if (type) this.typeOfProduct = type;
    else this.typeOfProduct = 'tangible';

    this.qty = 1;
    if (isServiceProvider) {
        this.price = (parseFloat(removeCurrency(this.orgprice)) * discountforServiceProvider).toFixed(2);
    } else {
        this.price = removeCurrency(this.orgprice);
    }
    this.subTotalWithoutTax = parseFloat(removeCurrency(this.price)) * parseInt(this.qty);
    this.isOverride = false;


    this.isDiscount = false;
    this.discountDesc = "";
    this.discountValue = 0;
    this.discountPrice = 0;
    this.discountTax = 0;
    this.offerNo = 0;
    this.offerId = 0;
    
	//Added for 4832
	kony.print("Saving taxRate for product : "+taxRate);
	this.taxRate = taxRate;
	this.isPrepaymentPlan = isPrepaymentPlan;
};


var ProductCart = function() {
    var _this = this;


    this.products = [];
    this.subTotal = 0;
    this.taxTotal = 0;
    this.total = 0;
    this.defaultOffers = [1, 2];

    this.find = function(pid) {
        return _.find(_this.products, function(p) {
            return p.pid == pid;
        });
    };

    this.empty = function() {
        //Remove all except NT
        _this.products = _.reject(_this.products, function(p) {
            return p.typeOfProduct == "Tangible";
        })
        _this.defaultOffers = [1, 2];
        _this.calculateTotal();
    };

    this.calculateTotal = function() {
		_this.subTotal = 0;
		_this.taxTotal = 0;
		var self = _this;
		_.each(_this.products, function(pr) {
			self.subTotal += parseFloat((pr.qty * parseFloat(removeCurrency(pr.price))).toFixed(2));
			self.subTotal = parseFloat(self.subTotal.toFixed(2));
			kony.print("glbIsTaxCollected==="+glbIsTaxCollected);
			if (glbIsTaxCollected == "true" && pr.isDiscount) {
				self.taxTotal += parseFloat((pr.qty * parseFloat(removeCurrency(pr.discountTax))).toFixed(2));
				self.taxTotal = parseFloat(self.taxTotal.toFixed(2));
				kony.print("glbIsTaxCollected & isDiscount self.taxTotal"+self.taxTotal);
			}else{
			 	self.taxTotal += parseFloat((pr.qty * parseFloat(removeCurrency(pr.tax))).toFixed(2));
				self.taxTotal = parseFloat(self.taxTotal.toFixed(2));
				kony.print("self.taxTotal"+self.taxTotal);
			}
		});
		//Total is having nontangible amount also
		_this.total = parseFloat(parseFloat(_this.subTotal + _this.taxTotal).toFixed(2));
		_this.changeSegment();
	};
	
    this.changeSegment = function() {
        var segData = [],
            nontangibleSegData = [];
        _.each(_this.products, function(p) {
            var data = {};
            kony.print("::PK---5534-DD--"+JSON.stringify(p));
            var ProductTaxCust = parseFloat(removeDollar(p.price))*parseFloat(p.taxRate).toFixed(3);
            kony.print("Before::PK--5534----"+ProductTaxCust);
            ProductTaxCust = ProductTaxCust.toFixed(2);
            
            kony.print("::PK--5534----"+ProductTaxCust);
            
            if (p.typeOfProduct.toString().toLowerCase() == "tangible") {
                data.lblProductName = p.nameOfProduct;
                p.subTotalWithoutTax = parseFloat(removeCurrency(p.price)) * parseInt(p.qty);
                data.lblTotalProductPrice = addCurrency(p.subTotalWithoutTax);
                data.lblProdId = p.sku;
                data.lblQuantity = addCurrency(p.price) + " x " + p.qty;
                if (isServiceProvider) {
                    data.lblProdDiscVal = kony.i18n.getLocalizedString("strlblDiscount") + " [50% " + kony.i18n.getLocalizedString("strlblOff") + "]";
                    data.lblProdDiscAmount = "- " + glbCurrency + (p.price);
                } else if (p.isDiscount && !_.contains(_this.defaultOffers, p.offerNo)) {
                    data.lblProdDiscVal = kony.i18n.getLocalizedString("strlblDiscount") + " [" + addCurrency(p.discountValue) + " " + kony.i18n.getLocalizedString("strlblOff") + "]";
                    data.lblProdDiscAmount = "- " + glbCurrency + (p.discountValue * p.qty);
                } else {
                    data.lblProdDiscVal = "";
                    data.lblProdDiscAmount = "";
                }
                data.lblPrdImgName = p.img;
                data.hidProductId = p.pid;
                data.hidSKU = p.sku;
                data.hidOfferDesc = p.discountDesc;
                data.hidOfferNo = p.offerNo;
                data.hidOfferId = p.offerId; // For MEG-4857
                data.hidDiscountValue = p.discountValue;
                data.isOpenPromo = false;
                data.hidFullDesc = p.fulldesc;
                data.hidProductTax = ProductTaxCust;
                data.hidTaxTotal = p.tax * p.qty;
                data.hidOrigPrice = p.orgprice;
                data.hidMaxQty = p.maxQty;
                data.lblPrice = addCurrency(p.price);
                data.hidDiscountedPrice = p.discountPrice;
                data.hidOfferTax = (glbIsTaxCollected == "true") ? p.discountTax : 0;
                //Added for 4832
				data.hidTaxRate = p.taxRate;
				data.hidIsPrepaymentPlan = p.isPrepaymentPlan;
                segData.push(data);
            } else {
                var data = {};
                data.lblDesc = p.nameOfProduct;
                data.lblUnit = addCurrency(p.price);
                data.hidProductTax = addCurrency(ProductTaxCust);
                data.imgEditIcon = p.img;
                data.hidProductId = p.pid;
                data.hidSKU = p.sku;
                data.hidOfferNo = p.offerNo; //Added By PK MEG-4857
				data.hidOfferId = p.offerId; // For MEG-4857
                data.hidPrice = addCurrency(p.price);
                //Added for 4832 - Saving offertaxPrice in SaleItems
	            data.hidOfferTax = (glbIsTaxCollected == "true")?p.discountTax:0;
	            data.hidTaxRate = p.taxRate;
	            data.hidIsPrepaymentPlan = p.isPrepaymentPlan;
                nontangibleSegData.push(data);
            }

        });

        kony.print("::PRODUCT SALE:segData:" + JSON.stringify(segData));
        kony.print("::PRODUCT SALE:nontangibleSegData:" + JSON.stringify(nontangibleSegData));
        kony.application.getCurrentForm().segSKUData.setData(segData);
        if (kony.application.getCurrentForm().id == frmAddAndWeighMemberTransaction.id) {
            kony.application.getCurrentForm().segSKUDataPOC.setData(nontangibleSegData);
        }
        kony.application.getCurrentForm().lblSubTotalCart.text = addCurrency((parseFloat(ProductSale.Cart.subTotal)).toFixed(2));
        kony.application.getCurrentForm().lblTotalData.text = addCurrency(parseFloat(parseFloat(ProductSale.Cart.subTotal) + parseFloat(ProductSale.Cart.taxTotal)).toFixed(2));
        kony.application.getCurrentForm().lblTaxInfo.text = addCurrency((parseFloat(ProductSale.Cart.taxTotal)).toFixed(2));
    };
    this.add = function(p) {
        //Check Open Promotion - if Applies - then add

        if (_this.products.length > 0) {
            var pro = _.findWhere(_this.products, {
                pid: p.pid
            });


            if (pro) {
                var cartTotal = parseFloat(_this.subTotal) + parseFloat(_this.taxTotal) + parseFloat(totalNonTangibleTaxAmount) + parseFloat(nonTangibleTotal);
                if (cartTotal + (removeCurrency(pro.price) * parseInt(pro.qty)) > MaxProductCartAmount) {
                    alertForMessages(kony.i18n.getLocalizedString("strlblMaxCartAmtReached"));
                    return;
                }
                if (pro.maxQty < pro.qty + 1 && pro.maxQty !== 0) {
                    alertForMessages(kony.i18n.getLocalizedString("strlblMaxProductQtyReached"));
                    kony.print("Max Qty Error");
                } else {
                    pro.qty++;
                }
                _this.calculateTotal();
            } else {
                _this.addProductToArray(p);
            }
        } else {
            _this.addProductToArray(p);
        }
    };
    this.addProductToArray = function(p) {
        var openPromo = _.find(ProductSale.promotionProductIDs, function(pro) {
            return pro._ProductID == p.pid;
        });
        if (openPromo) {
            p.isDiscount = true;
            p.discountValue = (IsRedeemOptionOfStarterFee == true) ? 0 : openPromo._DiscountValue;
            p.discountPrice = (IsRedeemOptionOfStarterFee == true) ? 0 : openPromo._DiscountedProductPrice;
            p.offerNo = openPromo._OfferNo;
            p.offerId = openPromo._OfferID;
            p.discountDesc = openPromo._OfferDesc;
            p.price = (IsRedeemOptionOfStarterFee == true) ? 0 : openPromo._DiscountedProductPrice;
            p.discountTax = (checkValidString(openPromo._OfferUnitPriceTax) ? openPromo._OfferUnitPriceTax : 0);
          //  IsRedeemOptionOfStarterFee = false;
        }
        IsRedeemOptionOfStarterFee = false; // remove flag from if condition & put here
		if(p.price == 0){
			p.discountTax = 0;
		}
        var cartTotal = parseFloat(_this.subTotal) + parseFloat(_this.taxTotal) + parseFloat(totalNonTangibleTaxAmount) + parseFloat(nonTangibleTotal);
        if (cartTotal + ((removeCurrency(p.price) + removeCurrency(p.discountTax)) * parseInt(p.qty)) > MaxProductCartAmount) {
            alertForMessages(kony.i18n.getLocalizedString("strlblMaxCartAmtReached"));
            return;
        }
        _this.products.push(p);
        kony.print(JSON.stringify(p));
        _this.calculateTotal();

    };
    this.remove = function(pid) {
        kony.print(" SALE remove pid=" + pid);
        if (_this.products.length > 0) {
            var pro = _.find(_this.products, function(product) {
                return product.pid == pid;
            });
            if (pro) {
                _this.products = _.without(_this.products, _.findWhere(_this.products, {
                    pid: pro.pid
                }));
                kony.print("Deleted");
                _this.calculateTotal();
            } else {
                kony.print("Not Found / Non Tangible Product");
            }
        }
    };

    this.update = function(p, qty, isOverride, price, isDiscount, offerNo, discountValue, discountPrice, discountDesc, discountTax, offerId) {
        kony.print("qty = " + qty + "isOverride = " + isOverride + "price = " + price + "isDiscount = " + isDiscount + "offerNo = " + offerNo + "discountValue = " + discountValue + "discountPrice = " + discountPrice + "discountDesc = " + discountDesc + "discountTax = " + discountTax + "OfferId = " + offerId);
        if (_this.products.length > 0) {
            var pro = _.findWhere(_this.products, {
                pid: p.pid
            });
            var cartTotal = parseFloat(_this.subTotal) + parseFloat(_this.taxTotal) + parseFloat(totalNonTangibleTaxAmount) + parseFloat(nonTangibleTotal);
            if (cartTotal + (removeCurrency(price) * qty) > MaxProductCartAmount) {
                alertForMessages(kony.i18n.getLocalizedString("strlblMaxCartAmtReached"));
                return;
            }
            kony.print("::pro::=" + JSON.stringify(pro));
            if (pro) {


                if (qty && qty > pro.maxQty && pro.maxQty !== 0) {
                    alertForMessages(kony.i18n.getLocalizedString("strlblMaxProductQtyReached"));
                    kony.print("Max Qty Error");
                    return;
                } else {
                    pro.qty = parseInt(qty);
                }
                pro.price = addCurrency(price);
                //isDiscount will set if User Selects Any Other than None

                if (!isServiceProvider) {
                    //Check if open promotion is applied
                    var openPromo = _.findWhere(ProductSale.promotionProductIDs, {
                        _ProductID: parseInt(pro.pid)
                    });
                    //If Incorrect or Customer coupon
                    if (_.contains(_this.defaultOffers, offerNo)) {
                        if (offerNo == 1) pro.discountDesc = "Incorrect Price";
                        else if (offerNo == 2) pro.discountDesc = "Customer Coupon";
                        pro.offerNo = offerNo;
                        pro.offerId = offerId;
                        pro.isDiscount = true;
                        pro.discountValue = discountValue;
                        pro.discountPrice = discountPrice;
                        //Added for 4832 - Non tangible products
						if(isOverride)
							{
								pro.discountTax = checkValidString(discountTax)?discountTax:0;
								//pro.isDiscount = false;
							}
						else{
							if(parseFloat(discountTax) > 0 )
								pro.discountTax = pro.tax;
							else
								pro.discountTax = discountTax;
						}
						//pro.tax = 0;
                        
                    } else if (isDiscount && offerNo && discountValue && discountPrice && discountDesc) {
                        //Normal Discount and Passed from parameter
                        pro.discountDesc = discountDesc;
                        pro.discountValue = parseFloat(discountValue).toFixed(2);
                        pro.discountPrice = parseFloat(discountPrice).toFixed(2);
                        pro.price = pro.discountPrice;
                        pro.offerNo = offerNo;
                        pro.offerId = offerId;
                        pro.isOverride = false;
                        pro.overridePrice = 0;
                        pro.isDiscount = true;
                        pro.discountTax = checkValidString(discountTax) ? discountTax : 0;
                    } else if (openPromo && isDiscount) {
                        //Open Promotion and changes related to it.
                        pro.discountValue = openPromo._DiscountValue;
                        pro.discountPrice = openPromo._DiscountedProductPrice;
                        pro.offerNo = openPromo._OfferNo;
                        pro.offerId = openPromo._OfferID;
                        pro.discountDesc = openPromo._OfferDesc;
                        pro.price = openPromo._DiscountedProductPrice;
                        pro.discountTax = openPromo._OfferUnitPriceTax;
                        pro.isOverride = false;
                        pro.overridePrice = 0;
                        pro.isDiscount = true;
                    } else {
                        //None is Selected
                        pro.price = addCurrency(price);
                        //Added for 4832 tangible products
						if(isOverride){
							pro.tax = checkValidString(discountTax)?discountTax:pro.tax;
						}else{
							if(parseFloat(discountTax) > 0 )
								pro.tax = discountTax;
							else
								pro.tax = pro.tax;
						}
						
                        pro.isOverride = false;
                        pro.overridePrice = 0;
                        pro.isDiscount = false;
                        pro.discountDesc = 0;
                        pro.discountValue = 0;
                        pro.discountPrice = 0;
                        pro.offerNo = 0;
                        pro.offerId = 0;

                    }


                } else if (_.contains(_this.defaultOffers, offerNo)) {
                    //SP Price Override
                    if (offerNo == 1) pro.discountDesc = "Incorrect Price";
                    else if (offerNo == 2) pro.discountDesc = "Customer Coupon";
                    pro.offerNo = offerNo;
                    pro.offerId = offerId;
                    pro.isDiscount = true;
                    pro.price = (removeCurrency(price) * discountforServiceProvider).toFixed(2);
                    //Added for 4832
					if(isOverride)
						pro.discountTax = checkValidString(discountTax)?discountTax:pro.tax;
					else{
						if(parseFloat(discountTax) > 0 )
							pro.discountTax = (removeCurrency(pro.tax) * discountforServiceProvider).toFixed(2);//pro.tax; //Added for MEGCA-375
						else
							pro.tax = (removeCurrency(discountTax) * discountforServiceProvider).toFixed(2);//discountTax; //Added for MEGCA-375
					}
                } else {
                	pro.isDiscount = false;
                    pro.price = (removeCurrency(price) * discountforServiceProvider).toFixed(2);
                    //Added for 4832
					if(isOverride)
						pro.tax = checkValidString(discountTax)?((removeCurrency(discountTax) * discountforServiceProvider).toFixed(2)):((removeCurrency(pro.tax) * discountforServiceProvider).toFixed(2)); //pro.tax = checkValidString(discountTax)?discountTax:pro.tax; //Added for MEGCA-375
					else 
						pro.tax = (removeCurrency(discountTax) * discountforServiceProvider).toFixed(2);//discountTax; //Added for MEGCA-375;
                }

                pro.isOverride = isOverride;

                kony.print(JSON.stringify(pro));
                _this.calculateTotal();
            }
        }
    };

};

function onPostShowPopulateOpenPromotion() {
    function successPromotions(promotions) {
        kony.print("::successPromotions::promotions=" + JSON.stringify(promotions));
        if (promotions && promotions.length > 0) {
            ProductSale.isAnyOpenPromotion = true;
            //Save the list of Products having open promotion
            ProductSale.promotionProductIDs = promotions;
        } else {
            ProductSale.isAnyOpenPromotion = false;
        }
        kony.print("::successPromotions::ProductSale.promotionProductIDs=" + JSON.stringify(ProductSale.promotionProductIDs));
    }
    if (!isServiceProvider)
        boAddWeighTransaction.getOpenPromotionProducts(successPromotions);
}


function eventOnClickProductInSegment(products, type) {
    //(pid, sku, orgprice, img, desc, fulldesc, tax, maxQty, type)
    if (type == "NonTangible") {
        kony.print("eventOnClickProductInSegment products = " + JSON.stringify(products));
        var ntpros = products;
        //Remove all NonTangible and Add new -> used in back flow
        _.each(ProductSale.Cart.products, function(prod) {
            if (prod.typeOfProduct == "NonTangible") ProductSale.Cart.remove(prod.pid);
        });
        _.each(ntpros, function(pro) {
            var p = new Product(pro.hidProductId, pro.hidSKU, pro.hidPrice, pro.imgEditIcon, pro.lblDesc, pro.lblDesc, pro.hidProductTax, 0, "NonTangible", pro.hidTaxRate, pro.hidIsPrepaymentPlan); //Added for 4832 - field : hidTaxRate
            kony.print("::ProductSale:: NON TANGIBLE p=" + JSON.stringify(p));
            ProductSale.Cart.add(p);
        });
    } else {
        var p = new Product(products.selectedProductId, products.productId, products.price, products.productImg, products.productDescr, products.hidFullDesc, products.hidProductTax, products.hidMaxQty, "Tangible",  products.hidTaxRate, products.hidIsPrepaymentPlan); // //Added for 4832 field : hidTaxRate
        kony.print("::ProductSale:: TANGIBLE p=" + JSON.stringify(p));
        ProductSale.Cart.add(p);
    }
    var Cart = ProductSale.Cart;
    kony.print("::ProductSale::Cart=" + JSON.stringify(Cart));
}

function eventOnClickPopupItemDetailsUpdate() {
    var oldData = objProductData;
    kony.print("objProductData::=" + JSON.stringify(objProductData));
    kony.print("ProductSale.Cart.products::=" + JSON.stringify(ProductSale.Cart.products));
    //this.update = function(p, qty, isOverride, overridePrice, isDiscount, offerNo, discountValue, discountPrice, discountDesc, discountTax) {	
    var p = ProductSale.Cart.find(oldData.hidProductId);
    kony.print("::PRODUCT SALE::Update Product = " + JSON.stringify(p));
    var qty = popupItemDetails.txtUnits.text;
    var validQty = /^\d+$/.test(qty);

    if (!validQty || parseInt(qty) <= 0 || qty == "") {
        alertForMessages(kony.i18n.getLocalizedString("strAlertForValidQuantity"));
        return;
    }

    var newPrice = p.price,
        isOverride = p.isOverride,
        isDiscount = p.isDiscount,
        offerNo = p.offerNo,
        offerId = p.offerId,
        discountValue = p.discountValue,
        discountPrice = p.discountPrice,
        discountTax = checkValidString(p.discountTax) ? p.discountTax : 0,
        discountDesc = p.discountDesc;
    kony.print("::PRODUCT SALE:: popupItemDetails.txtUnitPrice.text = " + popupItemDetails.txtUnitPrice.text);
    if (checkValidString(popupItemDetails.txtUnitPrice.text) && popupItemDetails.txtUnitPrice.text !== ".") {
        isOverride = true;
        newPrice = convertPriceToSaveByLocale(popupItemDetails.txtUnitPrice.text);
        //Added for 4832
		kony.print("taxRate : "+p.taxRate);
		var newTax = parseFloat(newPrice) * parseFloat(p.taxRate);
		discountTax = newTax.toFixed(2);
		kony.print("Tax after price override : "+discountTax);
    } else {
        isOverride = false;
        newPrice = removeCurrency(p.orgprice);
        //Added for 4832
        kony.print("taxRate : " + p.taxRate);
        var newTax = parseFloat(newPrice) * parseFloat(p.taxRate);
        discountTax = newTax.toFixed(2); //Added for 4832
    }

    kony.print("::PRODUCT SALE:: selectedOfferForProduct = " + JSON.stringify(selectedOfferForProduct));
    if (selectedOfferForProduct !== null && selectedOfferForProduct !== undefined) {
        if (!isEmptyObject(selectedOfferForProduct) && selectedOfferForProduct.DiscountValue != "0") {
            isDiscount = true;
            offerNo = selectedOfferForProduct.OfferNo;
            offerId = isOverride == true ? "" : selectedOfferForProduct.OfferID;
            discountValue = isOverride == true ? "" : selectedOfferForProduct.DiscountValue;
            discountPrice = isOverride == true ? "" : selectedOfferForProduct.DiscountedPrice;
            discountDesc = selectedOfferForProduct.OfferDesc;
            //Added for 4832
			var newTax = parseFloat(newPrice) * parseFloat(p.taxRate);
			if(isOverride == false)
        		discountTax = checkValidString(selectedOfferForProduct.OfferTax) ? selectedOfferForProduct.OfferTax : newTax.toFixed(2);
        	else
        		discountTax = newTax.toFixed(2);
        } else {
            offerNo = selectedOfferForProduct.OfferNo;
            offerId = selectedOfferForProduct.OfferID;
			isDiscount = false;
			var newTax = parseFloat(newPrice) * parseFloat(p.taxRate);
        	discountTax = newTax.toFixed(2); //Added for 4832
        }
    } else {
        //None Is Selected
        isDiscount = false;
    }
    kony.print("::isOverride=" + isOverride);
    kony.print("::newPrice=" + newPrice);
    kony.print("::isDiscount=" + isDiscount);
    kony.print("::discountTax="+discountTax);
    ProductSale.Cart.update(p, qty, isOverride, newPrice, isDiscount, offerNo, discountValue, discountPrice, discountDesc, discountTax, offerId);
    popupItemDetails.destroy();

}

function removeProductFromCart() {
    kony.print("selectedProductID=" + selectedProductID);
    ProductSale.Cart.remove(selectedProductID);
    popupItemDetails.txtUnitPrice.text = "";
	popupItemDetails.lblTotalPrice = "";
    popupItemDetails.dismiss();
}
