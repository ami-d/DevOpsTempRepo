var deviceLevelPreRegNo;
var deviceLevelTransactId;
var saleTransactionObj = [];
var getWeightDetailsObject = {};
var weightloss = 0;
var boEnrollMember = {

    getSKUValueFromDb: function(whereClause, membertype, subtype, isOverride, Action) {

        kony.print("inside the BO======");

        function getSKUValueFromDbCallback(res) {
            if (res.length > 0) {
                boEnrollMember.getPaymentInfoFromSKU(res, isOverride, subtype, Action);
            } else {
                if (membertype.toUpperCase() == "LIFETIME" && (subtype == 'MP' || subtype == '17WEEK')) {
                    alertForMessages(kony.i18n.getLocalizedString("strMsgValidPass"));
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strMsgValidPass"));
                }

            }

        }

        DBSKURuleEngineController.find(whereClause, getSKUValueFromDbCallback, eventErrorCallBack)
    },
    getPaymentInfoFromSKU: function(response, isOverride, subtype, Action) {

        try {
            saleTransactionObj = [];
            var totalPrice = 0;
            var tax = 0;
            var productPaymentDetail = [];
            var frmEnrollWeighPayment_segSKUValues_temp = [];
            var saleTempObj = {};
            var ProductDetail;
            
            response = _.uniq(response,'_SKU'); //remove duplicate sku data [MEGCA-382]
            kony.print("::PK:: unique sku Data====="+JSON.stringify(response));
            
            for (var i in response) {

                var v = response[i];
                if (isOverride) {
                	kony.print("PriceOverideSKU=="+v.PriceOverideSKU)
                    ProductDetail = boEnrollMember.getProductDetail(kony.sync.getString(v.PriceOverideSKU));
                } else {
                	kony.print("SKU=="+v.SKU)
                    ProductDetail = boEnrollMember.getProductDetail(kony.sync.getString(v.SKU));
                }


                if (ProductDetail != undefined && ProductDetail != null && ProductDetail != "") {
                    var ProductInfo = boEnrollMember.getProductInfoCalculation(ProductDetail, totalPrice, tax, Action, subtype);

                    saleTempObj["productDetail"] = ProductDetail;

                    if (ProductInfo != undefined && ProductInfo != null && ProductInfo != "") {

                        //
                        /***start-- story 922- calculation for enroll/rocess_Add member based calulation *********/
                        if (applyExtraCalculationBasedOnSKUForSubscriptionType == true) {
                            if (Flow == "Enroll") {
                                var ProductInfo_400 = boEnrollMember.getProductDetail(kony.sync.getString(400));
                                var ProductInfo_500 = boEnrollMember.getProductDetail(kony.sync.getString(500));
                                kony.print("ProductInfo_400:"+ProductInfo_400);
                                kony.print("ProductInfo_500:"+ProductInfo_500);
                                //calculate the total price based on story description--->$value of SKU(93) + $value of SKU(400) � $value of SKU(500)
                                differenceAmount = (ProductInfo_400.UnitPrice) - ProductInfo_500.UnitPrice;
                                kony.print("differenceAmount:"+differenceAmount);
                                newPrice = parseFloat(parseFloat(ProductInfo.productinfo.UnitPrice) + parseFloat(differenceAmount)).toFixed(2);
                                kony.print("newPrice:"+newPrice);
                                ProductInfo.Total = parseFloat(parseFloat(ProductInfo.Total) + parseFloat(differenceAmount)).toFixed(2);
                            } else //add-process member 
                            {
                                var ProductInfo_250 = boEnrollMember.getProductDetail(kony.sync.getString(250));

                                //calculate the total price based on story description---> $value of SKU(93) + $value of SKU(250)
                                newPrice = parseFloat(parseFloat(ProductInfo.productinfo.UnitPrice) - parseFloat(ProductInfo_250.UnitPrice)).toFixed(2);
                                ProductInfo.Total = parseFloat(ProductInfo.Total - ProductInfo_250.UnitPrice).toFixed(2);
                            }
                            ProductInfo.productinfo.UnitPrice = newPrice;
                        }
                        totalPrice = ProductInfo.Total;
                        tax = ProductInfo.Tax;
                        productPaymentDetail.push(ProductInfo.productinfo);
                        /*** end -- story 922- calculation for enroll/rocess_Add member based calulation *********/

                        

                        saleTransactionObj.push(saleTempObj);
                        saleTempObj = {};
                    } else {
                        continue;
                    }
                } else {
                    continue;
                }
            }

			kony.print("::PK----"+JSON.stringify(productPaymentDetail));
            if (productPaymentDetail.length > 0) {

                saleTransactionObj.push({
                    "TotalPrice": totalPrice
                });

                saleTransactionObj.push({
                    "Tax": tax
                });

                for (var i in productPaymentDetail) {

                    kony.print(i + "th record fetching");
                    var v = productPaymentDetail[i];
                    
                    var pid = (v.ProductID == undefined) ? 0 : v.ProductID;
                    var psku = (v.sku == undefined) ? 0 : v.sku;
                    var imgData = ((v.sku != undefined && v.sku == "250") || isOverride) ? "" : "icn_edit_note.png";
                    var b = mapKeys(viewEnrollWeighPayment, {
                        lblDesc: v.description,
                        lblUnit: formatCurrency(v.UnitPrice),
                        hidProductTax: (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') ? formatCurrency(v.UnitPriceTax) : 0.0,
                        imgEditIcon: imgData,
                        hidProductId: pid,
                        hidSKU: psku,
                        hidPrice: v.UnitPrice,
                        hidTaxRate:v.TaxRate, //Added for 4832
						hidIsPrepaymentPlan:v.IsPrepaymentPlan
                    });

                    frmEnrollWeighPayment_segSKUValues_temp.push(b);
                }
                productPaymentDetail = [];
            } else {
                alertForMessages(kony.i18n.getLocalizedString("strMsgValidPass"));
            }
            if (frmEnrollWeighPayment_segSKUValues_temp.length > 0) {
                displayCheckOutForm(true, frmEnrollWeighPayment_segSKUValues_temp, totalPrice, tax);
                frmEnrollWeighPayment_segSKUValues_temp = [];
            } else {
                displayCheckOutForm(false, frmEnrollWeighPayment_segSKUValues_temp, totalPrice, tax);
            }

            kony.print("Product Data=====" + i + "===" + JSON.stringify(ProductDetail));
            kony.print("Total Tax === " + tax);
            kony.print("Total price === " + totalPrice);
            kony.print("Product Data ===" + JSON.stringify(productPaymentDetail));
        } catch (e) {
            GlobalException(e);
        }
    },
    getProductDetail: function(sku) {

        kony.print("ProductSKUData Data=====" + JSON.stringify(productSKUData));
        for (var i in productSKUData) {
            if (productSKUData[i].sku == sku) {
                var obj = JSON.parse(JSON.stringify(productSKUData[i]));
                return obj;
            }
        }
    },
    getOfferDetail: function(productId, offerCoupon) {

        for (var i in OffersData) {

            if (OffersData[i].ProductID == productId && OffersData[i].OfferNo == offerCoupon) {
                var obj = JSON.parse(JSON.stringify(OffersData[i]));
                return obj;
            }
        }
    },

    //MEG-112

    checkEligibilityOfMember: function(currentWeightInKgs, heightInInches) {
        try {
            var heightInMeters = com.es.weighincalculations.ConvertHeight_Inches_To_Meters(heightInInches);
			var currWeight= deductWeight(currentWeightInKgs);
            var BMI = com.es.weighincalculations.CalculateBMI(currWeight, parseFloat(heightInMeters));
            kony.print("Value of BMI===" + BMI);
            if (heightInInches >= 56 && heightInInches <= 79) {
                return {
                    isCorrect: true,
                    msg: ""
                };
            } 
            
             else if (!(heightInInches >= 56 && heightInInches <= 79)) {
                if (IsAddIndividual == FlowForScreens.AddIndividual) {
                    return {
                        isCorrect: false,
                        msg: "strMsgValidHeightForAddMember"
                    };
                } else if (IsFromPM == FlowForScreens.ProcessMember) {
                    return {
                        isCorrect: false,
                        msg: "strMsgValidHeightForProcess"
                    };
                } else {
                    return {
                        isCorrect: false,
                        msg: "strMsgValidHeight"
                    };
                }
            } else {
                return {
                    isCorrect: false,
                    msg: "strEligiblemsg"
                };
            }
            return {
                isCorrect: false,
                msg: "strEligiblemsg"
            };
        } catch (e) {
            GlobalException(e);
        }

    },

    generateDeviceLevelMemberID: function() {
        glbMemberId = generateGUID();
    },
    addNewMemberDetails: function(createMemberDetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, strFlow, createWeightDetailsForAddMember) {
        function createMemberSuccessCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "Member"), "info");
            kony.print("in createMemberSuccessCallback");
            

            kony.print("Calling addNewMemberDetails success isNotesDataPresent: " + isNotesDataPresent);
            if (isBMINotesDataPresent) {
                boEnrollMember.addMemberNoteDetails(createBMINoteDetailsObject, strFlow);
                isBMINotesDataPresent = false;
            }
            if (isNotesDataPresent) {
                boEnrollMember.addMemberNoteDetails(createNoteDetailsObject, strFlow);
            }
            
            if (IsAddIndividual == FlowForScreens.AddIndividual) {
                for (var i = 0; i < MissedWeekWeightData.length; i++) {
                    MissedWeekWeightData[i]["MemberID"] = createMemberDetailsObject.MemberID;
                }
                MissedWeekWeightData.push(createWeightDetailsObject);
                kony.print("INSIDE Add WEIGHT FOR START WEIGHT");
                boEnrollMember.addMemberWeightDetails(createWeightDetailsForAddMember, strFlow);
                kony.print("ADD WEIGHT FOR START WEIGHT IS SUCCESSFULL..:):):)");
            } else {
            	
            	if(_.isEmpty(glbRefferalMemberObj) == false && strFlow == "Enroll"){
            		kony.print("Refferal OBject"+JSON.stringify(glbRefferalMemberObj));
            		boEnrollMember.addRefferalMemberDetails();            	
            	}          	
                boEnrollMember.addMemberWeightDetails(createWeightDetailsObject, strFlow);
            }

        }

        createMemberDetailsObject.EmpID = glbEmployeeId;

        kony.print("--- case 1 -> enroll  member - sesion number =1  " + JSON.stringify(createMemberDetailsObject));
        kony.print("Inserting locaiton " + createMemberDetailsObject.LocationID);
        DBMemberDetailsController.create(createMemberDetailsObject, createMemberSuccessCallback, eventErrorCallBack);
    },

    addMemberWeightDetails: function(createWeightDetailsObject, strFlow) {
        function createMemberWeightSuccessCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "Member Weight"), "info");

            kony.print("----->in createMemberWeightSuccessCallback - " + JSON.stringify(createWeightDetailsObject));
            kony.print("createMemberWeightSuccessCallback isNotesDataPresent: " + isNotesDataPresent);
            kony.print("MissedWeekWeightData.length  ::: " + MissedWeekWeightData.length);

            if (MissedWeekWeightData.length > 0 && (strFlow == "Process" || strFlow == "Add")) {

                //Added by Praveen kalal MEG-2925
                kony.print("::strFlow---" + strFlow);
                kony.print("::startWeight---" + gblStartWeightPM);
                kony.print("::goalwt---" + frmProcessMember.lblGoalWeightInfo.text);
                kony.print("::PK:: addMemberWeightDetails mileStoneObj-11--" + JSON.stringify(mileStoneObj));


                var startwt, goalwt;
                var weightdataArr = [];


                kony.print(":pp:MissedWeekWeightData ----" + JSON.stringify(MissedWeekWeightData));

                weightdataArr = JSON.parse(JSON.stringify(MissedWeekWeightData));
                weightdataArr.push(createWeightDetailsObject);
                kony.print("::weightdataArr ----" + JSON.stringify(weightdataArr));
                kony.print(":p1:MissedWeekWeightData ----" + JSON.stringify(MissedWeekWeightData));
                if (strFlow == "Process") {
                    startwt = gblStartWeightPM;
                    goalwt = frmProcessMember.lblGoalWeightInfo.text;
                    boMemberMilestone.getMasterMilestones(toGetAchievedMilestoneForBatchAddAndAdd, weightdataArr, startwt, goalwt, false, false);
                }

                MissedWeekWeightData.sort(function(a, b) {
                    var dateA = new Date(a.WeighInDate),
                        dateB = new Date(b.WeighInDate);
                    return dateA - dateB //sort by date ascending
                });

                var preWeight = createWeightDetailsObject.Weight;
                for (var i in MissedWeekWeightData) {
                    preWeight = MissedWeekWeightData[i].Weight;
                    kony.print("Add member MissedWeekWeightData: " + JSON.stringify(MissedWeekWeightData[i]));
                }
                boEnrollMember.addMissedWeekWeightData();

            }

            kony.print("::PK:: addMemberWeightDetails mileStoneObj-22--" + JSON.stringify(mileStoneObj));
            if (mileStoneObj.length > 0 || InsertAchMilestone) {
                for (var m in mileStoneObj) {
                    mileStoneObj[m]["MemberID"] = glbMemberId;
                }
                kony.print("ACHIEVED MLT---" + JSON.stringify(mileStoneObj));
                boMemberMilestone.insertMileStoneAchived(mileStoneObj);
                InsertAchMilestone = false;
            }
			onClickCompleteTransaction();

        }

        createWeightDetailsObject.EmpID = glbEmployeeId;
        kony.print("--> case 2- session number creating weight object -- Weight object== for " + strFlow + "   " + JSON.stringify(createWeightDetailsObject));
        // Call the com.kony.WeightWatchers.MemberSyncScope.WeighDetails.create ORM API
        if (strFlow == "Process") {
            if (MissedWeekWeightData.length > 0) {
                createWeightDetailsObject.WeightLoss = parseFloat(MissedWeekWeightData[parseFloat(MissedWeekWeightData.length) - 1].Weight) - parseFloat(createWeightDetailsObject.Weight);
                kony.print("::PKIN: createWeightDetailsObject ---" + JSON.stringify(createWeightDetailsObject));
            }
            DBWeighDetailsController.create(createWeightDetailsObject, createMemberWeightSuccessCallback, eventErrorCallBack);
        } else {
            DBWeighDetailsController.create(createWeightDetailsObject, createMemberWeightSuccessCallback, eventErrorCallBack);
        }
    },

    addMissedWeekWeightData: function() {
        function addMissedWeekWeightDataCallBack(res) {
            kony.print("addMissedWeekWeightDataCallBack success");
            MissedWeekWeightData = [];
        }
        DBWeighDetailsController.createAll(MissedWeekWeightData, addMissedWeekWeightDataCallBack, eventErrorCallBack, true);
    },

    addOnlineMemberWeightDetails: function(createWeightDetailsOnline) {
        function createOnlineWeightSuccessCallback(res) {
            kony.print("in createMemberWeightSuccessCallback addOnlineMemberWeightDetails");
        }
        kony.print("Inserting locaiton addOnlineMemberWeightDetails" + JSON.stringify(createWeightDetailsOnline));
        kony.print("Week number to be inserted is : " + createWeightDetailsOnline.WeekNumber);
        createWeightDetailsOnline.SessionNumber = glbSelectedMemberSessionNumber;
        kony.print("--- case 1 -> creating weight - sesion number =1  ");
        DBWeighDetailsController.create(createWeightDetailsOnline, createOnlineWeightSuccessCallback, eventErrorCallBack, false);
    },
	addMemberPreActivationDetails : function(callBack) {
		function createPreActivationSuccess(res) {
			kony.print("IN successcallback");
			callBack.call(null);
		}
		
		preActivationObj.IsCurrentSyncData = "true";

        //Patch for member request failure due to empty coupon code.
        if(!checkValidString(preActivationObj.CouponCode)){
            var obj = getSubscriptionData(glbFormName.txtSubscriptionID.text);
            kony.print(":: Patch for member failure ::getSubscriptionData:===== " + JSON.stringify(obj));
            preActivationObj.CouponCode = obj.CouponCode.toUpperCase(); 
            preActivationObj.ExpirationDate = obj.ExpirationDate;
        }
        
		DBPreActivationController.create(preActivationObj,createPreActivationSuccess,eventErrorCallBack);
	},
    addMemberNoteDetails: function(createNoteDetailsObject, strFlow) {

        kony.print("Inside addMemberNoteDetails function");
        kony.print("IS notedetails==>"+JSON.stringify(createNoteDetailsObject));

        function createMemberNoteSuccessCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "Member Note"), "info");
            kony.print("in createMemberNoteSuccessCallback");
            if (isNotesDataPresent) {
                isNotesDataPresent = false;
            }
        }
        DBNoteDetailsController.create(createNoteDetailsObject, createMemberNoteSuccessCallback, eventErrorCallBack);

    },
    getProductInfoCalculation: function(productdetail, total, Tax, action, subsType) {
        var productInfo = {};

        if (productdetail != null && productdetail != "") {
            if ((glbIsTaxCollected == 'true' || glbIsTaxCollected == '1') && productdetail.UnitPriceTax != null && productdetail.UnitPriceTax != "") {

                // Commented by Praveen Kalal for starter Fee Implementation
                // Maulik - Uncommenting the below for Starter Fee due to MEG-3984 and as confirmed by Praveen that uncommeting doesn't impact otherwise.
                // Adding one more subsType in conditional criteria to take care of MEG-4033
                IsRedeemOptionOfStarterFee = false;
                if(glbIsStarterFeeFeatureEnable){
                    if ((action.toUpperCase() == 'REDEEM' && (subsType == "MP" || subsType == "MP-3" || subsType == "MP-6" || subsType == "FMP")) || (action.toUpperCase() == 'BUY' && subsType == "FMP")) {
                        productdetail.UnitPrice = 0;
                        productdetail.UnitPriceTax = 0; 
                        IsRedeemOptionOfStarterFee = true;

                	}
                }
                // Ended  by Praveen Kalal for starter Fee Implementation
                var totalprice;
                totalprice = parseFloat(total) + parseFloat(productdetail.UnitPrice);
                var calulatedTax = parseFloat(productdetail.UnitPriceTax);
                totalprice = parseFloat(totalprice) + parseFloat(calulatedTax);
                var tax = parseFloat(Tax) + parseFloat(calulatedTax)
                productInfo["Tax"] = tax;
                productInfo["Total"] = totalprice;
                productInfo["calulatedTax"] = calulatedTax;
                productInfo["productinfo"] = productdetail;
                productInfo["TaxRate"] = productdetail.TaxRate; //Added for 4832
				productInfo["IsPrepaymentPlan"] = productdetail.IsPrepaymentPlan;
            } else {

                // Commented by Praveen Kalal for starter Fee Implementation
                // Maulik - Uncommenting the below for Starter Fee due to MEG-3984 and as confirmed by Praveen that uncommeting doesn't impact otherwise.
                // Adding one more subsType in conditional criteria to take care of MEG-4033
                IsRedeemOptionOfStarterFee = false;
                if(glbIsStarterFeeFeatureEnable){
                    if ((action.toUpperCase() == 'REDEEM' && (subsType == "MP" || subsType == "MP-3" || subsType == "MP-6" || subsType == "FMP")) || (action.toUpperCase() == 'BUY' && subsType == "FMP")) {
                        productdetail.UnitPrice = 0;
                        productdetail.UnitPriceTax = 0; 
                        IsRedeemOptionOfStarterFee = true;

                	}
                }
                // Ended  by Praveen Kalal for starter Fee Implementation
                productInfo["Tax"] = Tax;
                productInfo["Total"] = parseFloat(total) + parseFloat(productdetail.UnitPrice);
                productInfo["productinfo"] = productdetail;
                productInfo["calulatedTax"] = "";
                productInfo["TaxRate"] = productdetail.TaxRate; //Added for 4832
				productInfo["IsPrepaymentPlan"] = productdetail.IsPrepaymentPlan;

            }

        }
        return productInfo;
    },
    getWeighInDetail: function(whereClause) {
        function getWeighInDetailSuccessCallback(res) {
            kony.print("inside getweighindetail success callback");
            if (res != undefined && res.length > 0) {
                var v = res[0];
                kony.print("Data object is : " + JSON.stringify(v));
                getWeightDetailsObject = new com.kony.WeightWatchers.MemberSyncScope.WeighDetails();
                getWeightDetailsObject.Weight = kony.sync.getString(v.Weight);
                getWeightDetailsObject.DailyPtTarget = kony.sync.getString(v.DailyPtTarget);
                getWeightDetailsObject.NoWeighIn = kony.sync.getString(v.NoWeighIn);
                getWeightDetailsObject.IsAtndgMeeting = kony.sync.getString(v.IsAtndgMeeting);
                getWeightDetailsObject.WeighInDate = kony.sync.getString(v.WeighInDate);
                getWeightDetailsObject.MemberID = kony.sync.getString(v.MemberID);
                getWeightDetailsObject.WeekNumber = kony.sync.getString(v.WeekNumber);
                getWeightDetailsObject.WeightLoss = kony.sync.getString(v.WeightLoss);
                getWeightDetailsObject.WeeklyPointsAllowance = kony.sync.getString(v.WeeklyPointsAllowance);
            }
        }
        kony.print("inside getweighindetail");
        DBWeighDetailsController.find(whereClause, getWeighInDetailSuccessCallback, eventErrorCallBack);
    },

    addLogForEligibility: function(LogDetails) {
        var createLogObject = {};

        function createLogObjectSuccessCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "LogEligibility"), "info")
        }
        createLogObject.action = LogDetails[0];
        createLogObject.description = LogDetails[1];
        createLogObject.localTime = LogDetails[2];
        createLogObject.user = username;

        com.kony.WeightWatchers.Logger.Log.create(createLogObject, createLogObjectSuccessCallback, eventErrorCallBack, false);
    },
    updateMemberDetails: function(updateMemberDetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject,updateNoteObject, strFlow) {
        function updateMemberSuccessCallback(res) {
            kony.print(getMessageTemplate("updateSuccess", "Member"), "info");
            kony.print("in updateMemberDetails createNoteDetailsObject  == "+JSON.stringify(createNoteDetailsObject));
            kony.print("in updateMemberDetails updateNoteObject ==  "+JSON.stringify(updateNoteObject));
            kony.print("in updateMemberDetails createNoteDetailsObject len == "+createNoteDetailsObject.length);
            kony.print("in updateMemberDetails updateNoteObject len == "+updateNoteObject.length);
            kony.print("in updateMemberDetails createNoteDetailsObject len == "+createNoteDetailsObject.length);
            kony.print("in updateMemberDetails isNotesDataPresent len == "+isNotesDataPresent);
            
            
            if (isBMINotesDataPresent) {
                boEnrollMember.addMemberNoteDetails(createBMINoteDetailsObject, strFlow);
                isBMINotesDataPresent = false;
            }
            if (isNotesDataPresent) {
            	if(_.isEmpty(createNoteDetailsObject) == false)
                	boEnrollMember.addMemberNoteDetails(createNoteDetailsObject, strFlow);
                if(_.isEmpty(updateNoteObject) == false){
                	var whrcond = "where MemberID = '" + glbMemberId + "' and ID = '" + glbNoteID + "'";
                	boEnrollMember.updateNoteByMemberId(whrcond, updateNoteObject);
                }
            }
            
            boEnrollMember.addMemberWeightDetails(createWeightDetailsObject, strFlow);
        }
        var whrClause = "";
		if(strFlow == "Process")
        {
        	updateMemberDetailsObject.EmpID = glbEmployeeId;
        	updateMemberDetailsObject.SessionNumber = glbSelectedMemberSessionNumber;
        	
        	whrClause = "where MemberID = '" + glbMemberId + "'";
        }else {
	        
	
	        whrClause = "where MemberID = '" + updateMemberDetailsObject.MemberID + "'"
	        updateMemberDetailsObject.EmpID = glbEmployeeId;
	        if (glbMemberId == 0) glbMemberId = updateMemberDetailsObject.MemberID;
        }
        //Update Defaults
        updateMemberDetailsSetDefaults(updateMemberDetailsObject, successupdateMemberSuccessCallback);

        function successupdateMemberSuccessCallback(updateMemberDetailsObject) {
            DBMemberDetailsController.update(whrClause, updateMemberDetailsObject, updateMemberSuccessCallback, eventErrorCallBack);
        }

    },
    deleteMemberDetails: function(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, strFlow, whrClause) {
        function deleteMemberDetailsSuccessCallback(res) {
            kony.print(getMessageTemplate("deleteSuccess", "Member"), "info");
            kony.print("in deleteMemberDetailsSuccessCallback");
            boEnrollMember.addNewMemberDetails(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject, createBMINoteDetailsObject, strFlow);
        }
        kony.print("Deleting record... in deleteMemberDetails :: " + whrClause);
        com.kony.WeightWatchers.MemberSyncScope.MemberDetails.remove(whrClause, deleteMemberDetailsSuccessCallback, eventErrorCallBack, false);
    },

    //MEG-739
    deleteWeighDetails: function(memberIDToDelete, updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject) {
        function deleteWeighSuccessCallback(res) {
            kony.print(getMessageTemplate("deleteSuccess", "Weight"), "info");
            kony.print("in deleteWeighSuccessCallback");
            boEnrollMember.updateMemberDetails(updatememberdetailsObject, createWeightDetailsObject, createNoteDetailsObject);

        }
        var whrClause = "where MemberID = '" + memberIDToDelete + "'";
        com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove(whrClause, deleteWeighSuccessCallback, eventErrorCallBack);
    },
    generateDeviceLevelTransactID: function() {
        var saleCount;

        function getAllSaleCountSuccess(res) {
            saleCount = res.count;
            deviceLevelTransactId = gblDeviceID + "_" + generateGUID(); //saleCount;
            kony.print("Generated Tansaction ID : " + deviceLevelTransactId);
        }
        com.kony.WeightWatchers.MemberSyncScope.SaleDetails.getAllCount(getAllSaleCountSuccess, eventErrorCallBack);
    },
    insertToSaleTransaction: function(saleDetail, saleItemData, salePayment, callBackCompleteTranscation) {
        glbMemberId = 0;
        glbRegNoForProcess = 0;
        kony.print("Total bind data ==" + JSON.stringify(saleDetail) + "=== Sale Item===" + JSON.stringify(saleItemData) + "==== Payment ====" + JSON.stringify(salePayment));

        function insertToSaleTransactionCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "SaleDetailData"), "info")
            boEnrollMember.addSaleItems(saleItemData, salePayment, callBackCompleteTranscation);
        }
        saleDetail.EmpID = glbEmployeeId;
        if(saleDetail["MemberID"]!=0){  // MEG-5021
			var saleTransactionIdExist = boEnrollMember.checkIfSaleTransactionIdExists(saleDetail["SaleTransactnId"], function(res){
			    kony.print("IS saleTransactionIdExist-->"+res);
			    if(res == false){
			   		kony.print("inside saleTransactionIdExist");
			        DBSaleDetailsController.create(saleDetail, insertToSaleTransactionCallback, eventErrorCallBack); 
	            }
        	}); 
  		}
    },
    
    checkIfSaleTransactionIdExists: function(saleTransactionId, callback){
		// Query to check if Same transaction ID exists
	  	whereClause = " where SaleTransactnId = '"+saleTransactionId +"'";
	  	function checkIfSaleTransactionIdExistsCallBack(res) {
	        kony.print("::getSaleTransactionID::res=" + JSON.stringify(res));
	            if (res.length > 0) {
	             callback.call(null, true);
	            } else {
	             callback.call(null, false);
	            }
	        }
	  	DBSaleDetailsController.find(whereClause, checkIfSaleTransactionIdExistsCallBack, eventErrorCallBack);
    },
    
    addSaleItems: function(saleItemData, salePayment, callBackCompleteTranscation) {
        function addSaleItemsCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "SaleItemsData"), "info");
            boEnrollMember.addSalePayments(salePayment, callBackCompleteTranscation);
        }
        DBSaleItemsController.createAll(saleItemData, addSaleItemsCallback);
    },
    addSalePayments: function(PaymentDetails, callBackCompleteTranscation) {
        function addSalePaymentsCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "SalePaymentData"), "info");
            callBackCompleteTranscation.call(null);
        }
        DBSalePaymentsController.createAll(PaymentDetails, addSalePaymentsCallback, eventErrorCallBack);
    },

    checkForGoalAchivedDate: function() {
        var whereClause = " where MemberID = '" + glbMemberId + "'";

        function checkForGoalAchivedDateSuccessCallback(res) {
            if (res.length > 0) {
                goalAchiveDate = kony.sync.getString(res[0].GoalAchDate);
                goalWeight = kony.sync.getString(res[0].GoalWeight);
            }
        }
        DBMemberDetailsController.find(whereClause, checkForGoalAchivedDateSuccessCallback, eventErrorCallBack);
    },
    updateMemberGoalAchievedDate: function(whrCond, dataobj) {
        function updateMemberGoalAchievedDateCallback() {
            kony.print("IN updateMemberGoalAchievedDateCallback");
            kony.print(getMessageTemplate("UpdateMemberGoal", "MemberDetails"), "info")
        }
        kony.print("updateMemberGoalAchievedDate whrCond before:==>> " + whrCond + " dataobj:==> " + JSON.stringify(dataobj));
        dataobj.EmpID = glbEmployeeId;
        dataobj.SessionNumber = glbSelectedMemberSessionNumber;
        kony.print("updateMemberGoalAchievedDate whrCond after:==>> " + whrCond + " dataobj:==> " + JSON.stringify(dataobj));
        //Update Defaults
        updateMemberDetailsSetDefaults(dataobj, successupdateMemberGoalAchievedDateCallback);

        function successupdateMemberGoalAchievedDateCallback(dataobj) {
            DBMemberDetailsController.update(whrCond, dataobj, updateMemberGoalAchievedDateCallback, eventErrorCallBack);
        }

    },
    getLifetimeMemberEligibility: function(memberId) {
        var whereClause = " where MemberStatus = '" + MemberStatusEnum[1] + "' AND MemberType = '" + MemberValueEnum[1] + "' AND MemberID = '" + memberId + "'";

        function getLifetimeMemberEligibilitySuccessCallback(res) {
            if (res.length > 0) {
                var v = res[0];
                boEnrollMember.getWeightDetailsForLifetimeMemberEligibility(memberId, kony.sync.getString(v.GoalWeight), kony.sync.getString(v.GoalAchDate));
            }
        }
        DBMemberDetailsController.find(whereClause, getLifetimeMemberEligibilitySuccessCallback, eventErrorCallBack);
    },

    getWeightDetailsForLifetimeMemberEligibility: function(memberId, goalWeight, goalAchDate) {
        var whereClause = " where Weight BETWEEN '60' AND '" + (parseInt(goalWeight) + 2) + "' AND MemberID = '" + memberId + "' ORDER BY WeighInDate DESC";

        function getWeightDetailsForLifetimeMemberEligibilitySuccessCallback(res) {
            if (res.length > 0) {
                isMaintainace = true;
            } else {
            }
            if (isMaintainace)
                boEnrollMember.getWeightEntriesTillSixthWeek(memberId, goalAchDate, goalWeight);
            else {
                kony.print("Member not eligible for lifetime");
                isNotEligibleForLifetime = true;
            }
        }
        DBWeighDetailsController.find(whereClause, getWeightDetailsForLifetimeMemberEligibilitySuccessCallback, eventErrorCallBack);
    },

    getWeightEntriesTillSixthWeek: function(memberId, goalAchDate, goalWeight) {
        
        var WeighDateFormatted = formattedDate(goalAchDate);
        var week6Date = calculateWeeks(new Date(WeighDateFormatted), 6);
        week6Date = supportTime(new Date(week6Date), "", "yyyy-mm-ddTHH:NN:SS");
        var whereClause = "where WeighInDate BETWEEN '" + goalAchDate + "' AND '" + week6Date + "' AND MemberID = '" + memberId + "'";

        function getWeightEntriesTillSixthWeekSuccessCallback(res) {
            if (res.length >= 2) {
                boEnrollMember.getWeightEntriesAfterSixthWeek(memberId, week6Date, goalWeight)
            } else {
                kony.print("Member not eligible for lifetime");
                isNotEligibleForLifetime = true;
                //MEG-43 Code
                isMaintainace = false;
                boEnrollMember.updateIsMemberInMaintainence(memberId, isMaintainace);
            }
        }
        DBWeighDetailsController.find(whereClause, getWeightEntriesTillSixthWeekSuccessCallback, eventErrorCallBack);
    },

    getWeightEntriesAfterSixthWeek: function(memberId, dateParam, goalWeight) {
        
        var WeighDateFormatted = formattedDate(dateParam);
        var week12Date = calculateWeeks(new Date(WeighDateFormatted), 6);
        week12Date = supportTime(new Date(week12Date), "", "yyyy-mm-ddTHH:NN:SS");
        var whereClause = "where WeighInDate BETWEEN '" + dateParam + "' AND '" + week12Date + "' AND  Weight BETWEEN '60' AND '" + (parseInt(goalWeight) + 2) + "' AND MemberID = '" + memberId + "'";

        function getWeightEntriesAfterSixthWeekSuccessCallback(res) {
            if (res.length >= 1) {
                isEligibleForLifetime = true;
                alertForMessages(kony.i18n.getLocalizedString("strMsgMemberEligilbleLifetime"));
            } else {
                kony.print("Member not eligible for lifetime");
                isNotEligibleForLifetime = true;
                //MEG-43 Code
                isMaintainace = false;
                boEnrollMember.updateIsMemberInMaintainence(memberId, isMaintainace);
            }
        }
        DBWeighDetailsController.find(whereClause, getWeightEntriesAfterSixthWeekSuccessCallback, eventErrorCallBack);
    },

    getLatestWeightDataOfMember: function(memberId, currentWeight) {
        var whereClause = "where MemberID = '" + memberId + "' order by WeighInDate desc LIMIT 0,1";

        function getastWeightDataOfMemberSuccessCallback(res) {
            if (res.length > 0) {
                //This line was commented due to the confusion of the data being received in res[0].Weight
                //Hence removed the conversion
                //var lastWeight = com.es.weighincalculations.ConvertWeight_Kg_To_Pound(res[0].Weight);
                //////var lastWeight = res[0].Weight;
                kony.print("Weight data == " + JSON.stringify(res));
                var lastWeight = parseFloat(kony.sync.getString(res[0].Weight)).toFixed(2);
                var currWeight = com.es.weighincalculations.RoundWeight(currentWeight);
                kony.print("currWeight in res.length==>>>" + currWeight);
                kony.print("currentWeight in res.length==>>>" + currentWeight);
                kony.print("res[0].Weight in res.length==>>>" + kony.sync.getString(res[0].Weight));
                if ((parseFloat(lastWeight) - parseFloat(currWeight)) > 10) {
                    alertForWeightLoss();
                } else {
                    notifyNewlyEnrolledMember(false);
                }
            } else {
                kony.print("res[0].Weight in res.length else==>>>");
                notifyNewlyEnrolledMember(false);
            }
        }
        DBWeighDetailsController.find(whereClause, getastWeightDataOfMemberSuccessCallback, eventErrorCallBack);
    },

    getNewlyEnrolledMember_old: function(memberId) {
    	kony.print("In getNewlyEnrolledMember");
        var whereClause = " where MemberID = '" + memberId + "'";

        function getNewlyEnrolledMemberSuccessCallback(res) {
            if (res.length > 0) {
            	kony.print("res.length : "+res.length);
            	var currentDate = formattJsDefaultDate();
                var enrollmentDateFormatted = formattedDate(res[0].EnrollmentDate);
                var diff = CalculationforWeek(enrollmentDateFormatted, currentDate);
                kony.print("diff : "+diff);
                if (diff == 0)
                    showNotificationsForNewlyEnrolledMember(5);
                else
                    showNotificationsForNewlyEnrolledMember(diff);
            } else {
                showNotificationsForNewlyEnrolledMember(5);
            }
        }
        DBMemberDetailsController.find(whereClause, getNewlyEnrolledMemberSuccessCallback, eventErrorCallBack);
    },
     getNewlyEnrolledMember: function(memberId) {
    	kony.print("In getNewlyEnrolledMember");
        var whereClause = " where  MemberID = '" + memberId + "'";

        function getNewlyEnrolledMemberSuccessCallback(res) {
            	kony.print("res.length : "+res.length);
            	var diff = res.length;
                kony.print("diff : "+diff);
                if (diff == 0 || diff > 4)
                    showNotificationsForNewlyEnrolledMember(5);
                else
                    showNotificationsForNewlyEnrolledMember(diff);
            
        }
        DBWeighDetailsController.find(whereClause, getNewlyEnrolledMemberSuccessCallback, eventErrorCallBack);
    },

    updateMemberLifetimeType: function(memberId, isFreeLifeTime) {
        var whereClause = "where MemberID = '" + memberId + "'";
        var dataObj = {};
        if (isFreeLifeTime)
            dataObj["FreePaid"] = false;
        else
            dataObj["FreePaid"] = true;

        function updateMemberLifetimeTypeSuccessCallback() {
            kony.print(getMessageTemplate("UpdateMemberLifetimeType", "MemberDetails"), "info");
        }
        dataObj.EmpID = glbEmployeeId;

        //Change to 1 - if member mtngoccrid other than present mtngoccrid
        dataObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;

        //Update Defaults
        updateMemberDetailsSetDefaults(dataObj, successupdateMemberLifetimeTypeSuccessCallback);

        function successupdateMemberLifetimeTypeSuccessCallback(dataObj) {
            DBMemberDetailsController.update(whereClause, dataObj, updateMemberLifetimeTypeSuccessCallback, eventErrorCallBack);
        }

    },
    addTallyData: function(tallyInfoObj) {
        saleTransactionObj = [];

        function addTallyDataCallback(res) {
            tallyInfoObj = [];
            kony.print("After added ==" + JSON.stringify(tallyInfoObj));
            kony.print(getMessageTemplate("addSuccess", "TallyInfo"), "info");
            kony.print("emptyDirectSale=" + emptyDirectSale);
            if (emptyDirectSale) {
                kony.print("glbMeetingNum=" + glbMeetingNum);
                alertForMessages(kony.i18n.getLocalizedString("strAlertTransactionDone"));
                if (glbMeetingNum != "") {
                    frmHomeScreen.show();
                } else if (glbMeetingNum == "") {
                    frmHomeScreenNoMeeting.show();
                }
                emptyDirectSale = false;
            }
        }
        kony.print("Tally Data ----" + JSON.stringify(tallyInfoObj));

        DBTallyInfoController.createAll(tallyInfoObj, addTallyDataCallback, eventErrorCallBack, false);
    },
    applyDiscountValue: function(productid, offerCoupon) {

        var productPaymentDetail = [];
        var OfferData = boEnrollMember.getOfferDetail(productid, offerCoupon);
        var frmEnrollWeighPayment_segSKUValues_temp = [];;
        var nonTangibleData = frmAddAndWeighMemberTransaction.segSKUDataPOC.data;
        var selectedProductOffer = 0;
        var overwriteFlag = false;
        for (var i in nonTangibleData) {
            if (nonTangibleData[i]["hidIsOffer"] == true && nonTangibleData[i]["hidProductId"] == OfferData["ProductID"]) {
                //Already Exists Offer
            } else {
                frmEnrollWeighPayment_segSKUValues_temp.push(nonTangibleData[i]);
            }

        }
        //Check if already a discount is applied for a particular product if yes then overwrite else add

        if (OfferData != undefined) {
            productPaymentDetail.push(OfferData);
            if (productPaymentDetail.length > 0) {
                for (var i in productPaymentDetail) {
                    kony.print(i + "th record fetching");
                    var v = productPaymentDetail[i];
                    var pid = (v.ProductID == undefined) ? 0 : v.ProductID;
                    var b = mapKeys(viewEnrollWeighPayment, {
                        lblDesc: v.description,
                        lblUnit: "-" + formatCurrency(v.UnitPrice),
                        imgEditIcon1: "",
                        hidProductId: pid,
                        hidIsOffer: true
                    });
                    frmEnrollWeighPayment_segSKUValues_temp.push(b);
                }
            }


            frmAddAndWeighMemberTransaction.segSKUDataPOC.setData(frmEnrollWeighPayment_segSKUValues_temp);
        } else {
            alertForMessages(kony.i18n.getLocalizedString("msgCouponFail"));
        }
    },
    //get Last updated weight for tally weigth loss calculation
    getLastUpdatedWeight: function(whereClause) {
        function getLastUpdatedWeightSuccessCallback(res) {
            kony.print("inside getLastUpdatedWeightSuccessCallback in success callback" + JSON.stringify(res));
            if (res.length > 0) {
                var v = res[0];
                var tmpweight = parseFloat(kony.sync.getString(v.Weight)) - parseFloat(frmProcessMember.txtAreaWeightProcess.text);
                weightloss = (tmpweight > 0) ? tmpweight : 0;
            }
        }
        DBWeighDetailsController.find(whereClause, getLastUpdatedWeightSuccessCallback, eventErrorCallBack);
    },
    createBatchMember: function(createMemberObj, memberWeightObjArr) {
        function createBatchMemberSuccessCallback(res) {
            ClearBatchMemberVariables();

            boEnrollMember.addBatchMemberWeightData(memberWeightObjArr)
            kony.print(getMessageTemplate("addSuccess", "MemberDetails"), "info")
        }
        createMemberObj.EmpID = glbEmployeeId;
        DBMemberDetailsController.create(createMemberObj, createBatchMemberSuccessCallback, eventErrorCallBack);
    },
    addBatchMemberWeightData: function(memberWeightObjArr) {
        function addBatchMemberWeightDataSuccCallback(res) {

            //Added By praveen MEG-2925
            if (mileStoneObj.length > 0) {
                boMemberMilestone.insertMileStoneAchived(mileStoneObj);
            }

            kony.print("::BATCH::mileStoneObj.length---" + mileStoneObj.length + " == 0 &&--- " + eligibleMilestonesArrObj.length);
            if (mileStoneObj.length == 0 && eligibleMilestonesArrObj.length > 0) {
                kony.print("inside EG--BATCH-");
                boMemberMilestone.insertEligibleMilestone();
            }

            //End By praveen MEG-2925

            alertForMessages(kony.i18n.getLocalizedString("strBatchMemSuccess"));
            batchWeightData = [];
            memberWeightObjArr = [];
            kony.print(getMessageTemplate("addSuccess", "MemberDetails"), "info")
        }
        DBWeighDetailsController.createAll(memberWeightObjArr, addBatchMemberWeightDataSuccCallback, eventErrorCallBack);
    },

    getNoteByMemberId: function(whereClause, memberid) {
        frmViewMemberProfile.lblnotes.text = ""
        frmProcessMember.txtNotes.text = "";
        glbNoteID = "";
        var whr = "where MemberID = '" + memberid + "'";
        DBMemberDetailsController.find(whr, function(res1) {
            kony.print("::DJP::getNoteByMemberId:: Member search res1" + JSON.stringify(res1));
            if (res1 && res1.length > 0) {
                var v = res1[0];
                var isVoided = kony.sync.getString(v.isVoided);
                kony.print("::DJP::getNoteByMemberId::isVoided=" + isVoided);

                function getNoteByMemberIdSuccessCallback(res) {
                    if (res.length > 0) {
                        kony.print("inside the note Local DB call---" + JSON.stringify(res));
                        var v = res[0];
						var noteText = v.Note;
                        frmViewMemberProfile.lblnotes.text = noteText; // display note on view member profile
						frmViewMemberProfile.vboxAddNote.setVisibility(false);
						frmViewMemberProfile.vboxEditNote.setVisibility(true);
                        frmProcessMember.txtNotes.text = noteText;
                        glbNoteID = v.ID;
                        kony.print("glbNoteID from offline: " + glbNoteID);
                    } else {
                        kony.print("inside the note service call---");
                        if (!isNaN(memberid)) {
                            if (!isVoided || isVoided != "true") {
                                boEnrollMember.getMemberNoteDataWS(memberid);
                            }
                        }
                    }
                }
                DBNoteDetailsController.find(whereClause, getNoteByMemberIdSuccessCallback, eventErrorCallBack);
            }else{
            	kony.print("inside the note service call---");
            	if (!isNaN(memberid)) {
            		boEnrollMember.getMemberNoteDataWS(memberid);
            	}
            }
        }, eventErrorCallBack);
    },

    updateNoteByMemberId: function(whereClause, dataObj) {
        function updateNoteByMemberIdCallback() {
            kony.print("IN updateNoteByMemberId");
            kony.print(getMessageTemplate("UpdateNote", "NoteDetails"), "info")
        }
        kony.print("updateNoteByMemberId" + JSON.stringify(dataObj));
        DBNoteDetailsController.update(whereClause, dataObj, updateNoteByMemberIdCallback, eventErrorCallBack);

    },
    
    addOnlineMemberDetails: function(createMemberDetailsObject, isSegmentClicked) {
        function createMemberSuccessCallback(res) {
            kony.print(getMessageTemplate("addSuccess", "Member"), "info");
            kony.print("in createMemberSuccessCallback addOnlineMemberDetails");
            if (isSegmentClicked) {
                var selectedIndex = frmMemberProfileSearch.segMemberProfileSearch.selectedIndex;
                var selectedRow = parseInt(selectedIndex[1]);
                var sData = frmMemberProfileSearch.segMemberProfileSearch.data[selectedRow];
                sData["isOnlineSearch"] = false;
                selectedMemberData["isOnlineSearch"] = false;
                kony.print("Segmemnt row to be modified is : " + selectedRow + "   data is : " + JSON.stringify(sData));


                frmMemberProfileSearch.segMemberProfileSearch.setDataAt(sData, selectedRow);
            }
        }
        // Call the com.kony.WeightWatchers.MemberSyncScope.MemberDetails.create ORM API
        kony.print("Inserting locaiton addOnlineMemberDetails" + JSON.stringify(createMemberDetailsObject));

        createMemberDetailsObject.EmpID = glbEmployeeId;

        DBMemberDetailsController.create(createMemberDetailsObject, createMemberSuccessCallback, eventErrorCallBack, false);
    },

    //MEG-43 Code
    updateIsMemberInMaintainence: function(memberId, isMaintainace) {
        var dataObj = {};
        dataObj["IsMemberInMtns"] = isMaintainace;

        //Change to 1 - if member mtngoccrid other than present mtngoccrid
        dataObj.MtngOccrID = (glbSelectedMemberMtngOccrID == glbMeetingNum) ? glbMeetingNum : 1;

        var whereClause = "where MemberID = '" + memberId + "'";

        function updateIsMemberInMaintainenceCallback() {
            kony.print(getMessageTemplate("Update IsMemberInMaintainence", "MemberDetails"), "info")
        }
        DBMemberDetailsController.update(whereClause, dataObj, updateIsMemberInMaintainenceCallback, eventErrorCallBack)
    },

    //MEG-43 Code
    checkMemberInMaintainence: function(memberId) {
        var dataObj = {};
        dataObj["IsMemberInMtns"] = isMaintainace;
        var whereClause = "where MemberID = '" + memberId + "'";

        function checkMemberInMaintainenceCallback(res) {
            if (res.length > 0) {
                var v = res[0];
                isMaintainace = v.IsMemberInMtns;

            }
        }
        DBMemberDetailsController.find(whereClause, dataObj, checkMemberInMaintainenceCallback, eventErrorCallBack);

    },

    getMemberNoteDataWS: function(memberID) {
        try {
            var MemberNoteList_inputparam = {};
            kony.print("Inside Member Note service + " + memberID + "  Service id is " + Services.memberNote);
            MemberNoteList_inputparam["serviceID"] = Services.memberNote;

            MemberNoteList_inputparam["MemberID"] = memberID; //"13697714"; // TODO: to be replaced with actual member ID 
            MemberNoteList_inputparam["deviceID"] = gblDeviceID;
            MemberNoteList_inputparam["accessToken"] = glbSPAuthToken;
            MemberNoteList_inputparam["SPID"] = glbEmployeeId;
            MemberNoteList_inputparam["HeaderDate"] = "";
            MemberNoteList_inputparam["Source"] = gblSourceVal;
            MemberNoteList_inputparam["httpheaders"] = {};
            MemberNoteList_inputparam["httpconfigs"] = {};
            MembersNoteList = Network.makeServiceCall(MemberNoteList_inputparam, boEnrollMember.getMemberNoteDataWSCallback);
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },

    getMemberNoteDataWSCallback: function(status, MembersNoteList) {
        try {
            glbNoteID = "";
            if (status == 400) {
                kony.print("Response===" + JSON.stringify(MembersNoteList));
                if (MembersNoteList["MemberNote"].length > 0) {
                    kony.print("Weight online data :: Length == " + MembersNoteList["MemberNote"].length);
                    var MemberNote = MembersNoteList["MemberNote"][0].Note.toString();
                    glbNoteID = MembersNoteList["MemberNote"][0].ID.toString();
                    kony.print("glbNoteID : " + glbNoteID);
                    kony.print("Weigh in Date is : " + MemberNote);
					displayNoteFromOnline(true, MemberNote)
                    DBNoteDetailsController.create(MembersNoteList["MemberNote"][0], createMemberNoteSuccessCallback, eventErrorCallBack, false);
                    function createMemberNoteSuccessCallback(){
                    	kony.print("Saved online note into db");	
                    }
                    
                    
                }
                removeProgressView();
            }
        } catch (e) {
            GlobalException(e);
            removeProgressView();
        }
    },

    getGoalWeightOfMember: function(memberId) {
        var whereClause = " where MemberID = '" + memberId + "'";

        function getGoalWeightOfMemberSuccessCallback(res) {
            if (res.length > 0) {
                goalWeightSub = res[0].GoalWeight;
            }
        }
        DBMemberDetailsController.find(whereClause, getGoalWeightOfMemberSuccessCallback, eventErrorCallBack);
    },

    getMemberTypeByMemberId: function(memberId) {
        var whereClause = " where MemberID = '" + glbMemberId + "'";
        function getMemberTypeByMemberIdSuccessCallback(res) {
            kony.print("Is Active Value Before: " + isMemberAcive);
            if (res.length > 0) {
                kony.print("Check for MemberType: " + res[0].MemberType + " Member Status:" + res[0].MemberStatus + " Goal Weight: " + res[0].GoalWeight);
                if (in_array(res[0].MemberType.toUpperCase(),lifeTimeTypes) || isLifetimeInChangeMemberType == true) //Added by Ami - MEG-3312
                {
                    kony.print("===Lifetime member====");
                    isLifetime = true;
                } else {
                    isLifetime = false;
                    if (res[0].MemberType == MemberValueEnum[1] && res[0].MemberStatus == MemberStatusEnum[1] && res[0].GoalWeight > 0) {
                        isEligibleForLTInChangeMemberType = true;
                        isGoalWeightAvailable = true;
                        isMemberAcive = true;
                    } else if (res[0].MemberStatus != MemberStatusEnum[1]) {
                        isMemberAcive = false;
                    } else if (!isMemberAcive) {
                        isMemberAcive = true;
                    } else if (res[0].GoalWeight < 1) {
                        isGoalWeightAvailable = false;
                    } else {
                        isGoalWeightAvailable = false;
                        isMemberAcive = false;
                        isEligibleForLTInChangeMemberType = false;
                    }
                }
            }
            kony.print("Is Active Value: " + isMemberAcive);
        }
        kony.print("Get MEmber status queyry : " + whereClause);
        DBMemberDetailsController.find(whereClause, getMemberTypeByMemberIdSuccessCallback, eventErrorCallBack);
    },
    getAvgWeightLossOfMember: function(memberId) {
        
        var avgWeightLoss = 0;
        var transactionSQLQuery = "select Avg(WeightLoss) as WeightLoss from (SELECT * FROM WeighDetails where CountryID = '" + getCountryID() + "' AND MemberId='" + memberId + "' order by WeighInDate desc LIMIT 4) where WeightLoss >0";
        kony.print("Four Weeks:: whereClause=" + transactionSQLQuery);

        function getAvgWeightLossOfMemberSuccessCallback(res) {
            if (res.length > 0) {
                if (checkValidString(kony.sync.getString(res[0].WeightLoss))) {
                    avgWeightLoss = parseFloat(kony.sync.getString(res[0].WeightLoss));
                }
            }

            kony.print("avgWeightLoss " + avgWeightLoss);
            avgWeightLoss = parseFloat(avgWeightLoss) * (-1);
            if (avgWeightLoss > 0) {
                frmProcessMember.lblAverageWeightLossInfo.skin = "lblRedBold";
                frmProcessMember.lblAverageWeightLossInfo.text = "+" + parseFloat(avgWeightLoss).toFixed(1) + " " + UnitText;
            } else {
                frmProcessMember.lblAverageWeightLossInfo.skin = "lblHelveticaBoldGreen";
                frmProcessMember.lblAverageWeightLossInfo.text = parseFloat(avgWeightLoss).toFixed(1) + " " + UnitText;
            }
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getAvgWeightLossOfMemberSuccessCallback, eventErrorCallBack);
    },
    getAvgWeightLossOfMember_Org: function(memberId) {
        var tWeightLoss = 0.0;
        avgWeightLoss = 0;
        var lastSaturday = getLastWeekSaturday();
        var fourWeeksBeforeDate = new Date(lastSaturday);
        lastSaturday = supportTime(new Date(lastSaturday), "", "yyyy-mm-ddT23:59:59");
        fourWeeksBeforeDate.setDate(fourWeeksBeforeDate.getDate() - 27);

        fourWeeksBeforeDate = new Date(fourWeeksBeforeDate);

        fourWeeksBeforeDate = supportTime(fourWeeksBeforeDate, "", "yyyy-mm-ddT00:00:00");
        var whereClause = "where WeighInDate BETWEEN '" + fourWeeksBeforeDate + "' AND '" + lastSaturday + "' AND MemberID = '" + memberId + "'";
        kony.print("Four Weeks:: whereClause=" + whereClause);
        function getAvgWeightLossOfMemberSuccessCallback(res) {
            if (res.length > 0) {
                for (var i in res) {
                    var v = res[i];
                    kony.print("v.WeightLoss ::: " + v.WeightLoss);
                    if (isNaN(parseFloat(v.WeightLoss))) {} else {
                        if (parseFloat(v.WeightLoss) >= 0) {
                            tWeightLoss = tWeightLoss + parseFloat(v.WeightLoss);
                        }

                    }
                    kony.print("tWeightLoss ::: " + tWeightLoss);
                }
                kony.print("tWeightLoss ::: " + tWeightLoss + "   " + res.length);
                if (parseFloat(tWeightLoss) > 0) {
                    avgWeightLoss = parseFloat(tWeightLoss) / parseFloat(res.length);
                    avgWeightLoss = avgWeightLoss.toFixed(2);
                    kony.print("avgWeightLoss1 " + avgWeightLoss)
                }
            }
            avgWeightLoss = parseFloat(avgWeightLoss) * (-1);
            kony.print("avgWeightLoss " + avgWeightLoss);
            if (avgWeightLoss > 0) {
                frmProcessMember.lblAverageWeightLossInfo.skin = "lblRedBold";
                frmProcessMember.lblAverageWeightLossInfo.text = "+" + parseFloat(avgWeightLoss).toFixed(1) + " " + UnitText;
            } else {
                frmProcessMember.lblAverageWeightLossInfo.skin = "lblHelveticaBoldGreen";
                frmProcessMember.lblAverageWeightLossInfo.text = parseFloat(avgWeightLoss).toFixed(1) + " " + UnitText;
            }
        }
        DBWeighDetailsController.find(whereClause, getAvgWeightLossOfMemberSuccessCallback, eventErrorCallBack);
    },
    removeWeightHistoryForFreshStartAction: function(memberId) {

        kony.print("-- glbArrMemberFreshStart " + JSON.stringify(glbArrMemberFreshStart));

        /** logic to delete the weight history for user : if the user has weight history for 20 records
		and he selects 10th record as fresh start then before 10th record just keep 6 record means
		keep keep 9,8,7,6,5,4 - and remove the first 3 records 
		
		step1: get all the data before the selected record and do the looping 
		step2 : while looping check is the record count is more than 6 then remove those records
		*/

        kony.print(" -- in function remove history and set sessionnumber for weight history ");

        function deleteWeighHistoryCallBack(res) {
            //nothing to do 
            kony.print("-- delete call back ");
        }

        function UpdateWeighHistoryCallBack(res) {
            //nothing to do 
            kony.print("-- update call back ");
        }

        function getWeightHistorySuccessCallback(resp) {

            kony.print("-------getWeightHistorySuccessCallback ");
            intSkipRecordCount = 6;
            counter = 0;
            isMemberSessionNumberUpdated = false;

            for (i = resp.length - 1; i >= 0; i--) {

                if (counter < intSkipRecordCount) {
                    //keep record as it is in daabase
                    kony.print("---------->SKIPPING --- and updating only session number --------- " + i + '--' + JSON.stringify(resp[i]));
                } else {
                    //remove from weighDetails table

                    strWhereDelete = " WHERE WeekNumber = '" + resp[i].WeekNumber + "' AND MemberID = '" + resp[i].MemberID + "' ";
                    kony.print("----------> deleting --------- " + i + '--' + JSON.stringify(resp[i]) + "------ where condition = " + strWhereDelete);
                    com.kony.WeightWatchers.MemberSyncScope.WeighDetails.remove(strWhereDelete, deleteWeighHistoryCallBack, eventErrorCallBack, false);
                }
                counter++;
            }
        }
        kony.print("--- WeighInDate " + JSON.stringify(glbArrMemberFreshStart['WeighInDate']) + '---' + glbArrMemberFreshStart.WeighInDate);
        var timeArray = (glbArrMemberFreshStart.WeighInDate).split("T");
        var FreshStartWeighDate = timeArray[0];



        var strExtraWhr = " AND  ( NoWeighIn = 'false' OR NoWeighIn = 0) ";

        //Added By Praveen Kalal
        var SQLQuery = "Select WeekNumber,MemberID,WeighInDate,weight From WeighDetails Where CountryID = '" + getCountryID() + "' AND ( MemberID = '" + memberId + "' ) " + strExtraWhr + " AND date(WeighInDate) < '" + FreshStartWeighDate + "'  order by date(WeighInDate) ";
        whrClause = " where  ( MemberID = '" + memberId + "' ) " + strExtraWhr + " AND date(WeighInDate) >= '" + FreshStartWeighDate + "'  ";
        //End By Praveen Kalal

        kony.print("SQLQuery------------>" + SQLQuery);
        kony.print("whrClause------------>" + whrClause);
        //Execute Sql query
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQuery, null, getWeightHistorySuccessCallback, eventErrorCallBack);

        updateWeighDetailsObject = {};

        updateWeighDetailsObject.SessionNumber = glbSelectedMemberSessionNumber;
        updateWeighDetailsObject.EmpID = glbEmployeeId;
        updateWeighDetailsObject.MtngOccrID = glbMeetingNum;
        updateWeighDetailsObject.MeetingDate = glbMeetingDate;

        DBWeighDetailsController.update(whrClause, updateWeighDetailsObject, UpdateWeighHistoryCallBack, eventErrorCallBack);
        kony.print("-- incerement session counter - where " + whrClause + '-- object = ' + JSON.stringify(updateWeighDetailsObject));
    },

    getRegNumberbyMemberId: function(memberId) {
        function getRegNumberSuccessCallback(res) {
            if (res.length > 0) {
                var v = res[0];
                return v["RegNumber"];
            }
        }
        com.kony.WeightWatchers.MemberSyncScope.MemberDetails.getAllDetailsByPK({
            "MemberID": memberId
        }, getRegNumberSuccessCallback, eventErrorCallBack);
    },
    checkForValidMP: function(whrCondition, membertype, Subtype, isOverride, flow, action, callback, isFromEditProfile, callbackEdit) {
        var data = isFromEditProfile ? frmEditMemberProfile.txtSubID.text : glbFormName.txtSubscriptionID.text;
        kony.print("data value --- " + data);
        var couponCode = data;
        var is20Week = false;
        var is20WeekRedeem = false;
        if (glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str20WkBuyNew")) {
            is20Week = true;
            is20WeekRedeem = false
            if (data.length > 10 && data.length < 16) {
                couponCode = data.substring(0, data.length - 6);
            } else if (data.length < 10) {
                couponCode = data
            } else {
                couponCode = data.substring(0, 10);
            }
        } else if(glbFormName.lblSubType.text == kony.i18n.getLocalizedString("str20WkRedeem")){
            is20WeekRedeem = true;
            is20Week = false;
            if (data.length > 10 && data.length < 16) {
                couponCode = data.substring(0, data.length - 6);
            } else if (data.length < 10) {
                couponCode = data
            } else {
                couponCode = data.substring(0, 10);
            }
        } else {
            if (data.length > 9 && data.length < 15) {
                couponCode = data.substring(0, data.length - 6);
            } else if (data.length < 9) {
                couponCode = data
            } else {
                couponCode = data.substring(0, 9);
            }
        }


        kony.print("couponCode value --- " + couponCode);

        function checkForValidMPSuccessCallback(res) {
            if (res.length > 0) {
                kony.print("Subscription Id Validation: res[0]['MemberID'] " + res[0]["MemberID"]);
                kony.print("Subscription Id Validation: glbMemberId " + glbMemberId);
                kony.print("Subscription Id Validation: res[0]['regNumber'] " + res[0]["RegNumber"]);
                kony.print("Subscription Id Validation: glbRegNo " + glbRegNo);

                if (res.length == 1 && glbMemberId == res[0]["MemberID"]) {
                    if (checkIfNetworkIsAvailable() && !is20Week && !is20WeekRedeem) {
                    	boEnrollMember.checkForValidMPViaWS(whrCondition, membertype, Subtype, isOverride, action, couponCode, callback, isFromEditProfile, callbackEdit);
                    } else if (checkValidString(data)) {
                    	//Added by sayali for expiration date validation for 20 week pass
                    	if(is20Week){ 
                    		kony.print("IS inside 20 week-buynow 1:"+data);
                    		if (validExpiryDate20WeekPass(data,is20Week)) { // buy new
	                            if (isFromEditProfile) {
	                                callbackEdit.call(null);
	                                return true;
	                            }
	                            callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
	                        } else {
	                            removeProgressView();
	                            alertForMessages(kony.i18n.getLocalizedString("strValid20WeekPassExpiryDate"));
	                        }
                    	} else if(is20WeekRedeem){
                    		kony.print("IS inside 20 week-redeem 1:"+data);
                    		if (validExpiryDate20WeekPass(data,is20Week)) {  // redeem
	                            if (isFromEditProfile) {
	                                callbackEdit.call(null);
	                                return true;
	                            }
	                            callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
	                        } else {
	                            removeProgressView();
	                            alertForMessages(kony.i18n.getLocalizedString("strValid20WeekPassExpiryDate"));
	                        }
                    	}
                    	else{
                    		if (validExpiryDate(data)) {
	                            if (isFromEditProfile) {
	                                callbackEdit.call(null);
	                                return true;
	                            }
	                            callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
	                        } else {
	                            removeProgressView();
	                            alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
	                        }
                    	}
                    
                        
                    } else {
                        if (isFromEditProfile) {
                            callbackEdit.call(null);
                            return true;
                        }
                        callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
                    }
                } else {
                    if (is20Week || is20WeekRedeem) alertForMessages(kony.i18n.getLocalizedString("strAlreadyAssociated"));
                    else alertForMessages(kony.i18n.getLocalizedString("strmsgSelectFmp"));
                    return;
                }

            } else {
                if (checkIfNetworkIsAvailable() && !is20Week && !is20WeekRedeem) {
                    boEnrollMember.checkForValidMPViaWS(whrCondition, membertype, Subtype, isOverride, action, couponCode, callback, isFromEditProfile, callbackEdit);
                } else {
                	//Added by sayali for expiration date validation for 20 week pass
					if(is20Week){ 
						kony.print("IS inside 20 week-buynow 2:"+data);
                		if (validExpiryDate20WeekPass(data,is20Week)) {
                            if (isFromEditProfile) {
                                callbackEdit.call(null);
                                return true;
                            }
                            callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
                        } else {
                            removeProgressView();
                            alertForMessages(kony.i18n.getLocalizedString("strValid20WeekPassExpiryDate"));
                            return;
                        }
                	} else if(is20WeekRedeem){
						kony.print("IS inside 20 week-redeem 2:"+data);
                		if (validExpiryDate20WeekPass(data,is20Week)) {
                            if (isFromEditProfile) {
                                callbackEdit.call(null);
                                return true;
                            }
                            callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
                        } else {
                            removeProgressView();
                            alertForMessages(kony.i18n.getLocalizedString("strValid20WeekPassExpiryDate"));
                            return;
                        }
                	}
                	else{
                		if (validExpiryDate(data)) {
	                        if (isFromEditProfile) {
	                            callbackEdit.call(null);
	                            return true;
	                        }
	
	                        var typeofSub = glbFormName.lblSubType.text;
	                        glbFormName.txtSubscriptionID.text = getMPAnd3MPWithExpiry(data, typeofSub);
	                        
	                        onEndEditingForSubID()
	                        callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
	                    } else {
	                        removeProgressView();
	                        alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
	                        return;
	                    }
                	}
                }
            }
        }
        var SQLQuery = "Select MemberID,CouponCode,ExpirationDate From MemberDetails Where CountryID = '" + getCountryID() + "' AND CouponCode = '" + couponCode.toUpperCase() + "'";
        kony.print("query on print===" + SQLQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQuery, null, checkForValidMPSuccessCallback, eventErrorCallBack);
    },
    checkForValidMPViaWS: function(whrCondition, membertype, Subtype, isOverride, action, couponCode, callback, isFromEditProfile, callbackEdit) {
        var data = isFromEditProfile ? frmEditMemberProfile.txtSubID.text : glbFormName.txtSubscriptionID.text;

        function checkForValidMPViaWSCallback(status, CheckValidMPResult) {
            try {
                if (status == 400) {

                    if (CheckValidMPResult["opstatus"] == 0) {

                        kony.print("CheckValidMPResult====" + JSON.stringify(CheckValidMPResult));
                        if (CheckValidMPResult["MembersList"].length > 0) {
                            kony.print("Subscription Id Validation: res[0]['MemberID'] " + CheckValidMPResult["MembersList"][0]["ServerMemberID"]);
                            kony.print("Subscription Id Validation: glbMemberId " + glbMemberId);
                            kony.print("Subscription Id Validation: res[0]['regNumber'] " + CheckValidMPResult["MembersList"][0]["RegNumber"]);
                            kony.print("Subscription Id Validation: glbRegNo " + glbRegNo);

                            kony.print("CheckValidMPResult[MembersList]++++====" + JSON.stringify(CheckValidMPResult['MembersList']))
                            if (CheckValidMPResult["MembersList"].length == 1 && (glbMemberId == CheckValidMPResult["MembersList"][0]["ServerMemberID"] || CheckValidMPResult["MembersList"][0]["ServerMemberID"] == "" || (CheckValidMPResult["MembersList"][0]["ServerMemberID"] == 0 && CheckValidMPResult["MembersList"][0]["RegStatus"] == "Online"))) {
                                if (checkValidString(CheckValidMPResult["MembersList"][0]["ExpirationDate"])) {
                                    if (isValidExpriyDate(CheckValidMPResult["MembersList"][0]["ExpirationDate"])) {
                                        removeProgressView();
                                        if (isFromEditProfile) {
                                            frmEditMemberProfile.txtSubID.text = getMPAndDateInSixDigitFormate(data, CheckValidMPResult["MembersList"][0]["ExpirationDate"]);
                                            callbackEdit.call(null);
                                            return true;
                                        }

                                        // Added MEG-4614
                                        var typeofSub = glbFormName.lblSubType.text;
                                        kony.print("typeofSub====" + typeofSub);
										
										//Added for MEG-5290		
										if (CheckValidMPResult["MembersList"][0]["ProgramDuration"] == "1" && typeofSub == kony.i18n.getLocalizedString("strMPRedeem") && Flow.toUpperCase() == "ENROLL" && in_array(deviceLocale,Countries["CA"]) && (CheckValidMPResult["MembersList"][0]["RegStatus"] == 'Online') ) {
								            whrCondition = "where Action='" + action + "' and Subscription='" + Subcriptions[1] + "' and Transact='" + Flow + "' and RegistrationStatus = 'ONLINE'";
										}
										
                                        if (CheckValidMPResult["MembersList"][0]["ProgramDuration"] == "3" && typeofSub == kony.i18n.getLocalizedString("strMPRedeem")) {
                                            //whrCondition = "where Action='"+action+"' and Subscription='"+Subcriptions[8]+"' and Transact='"+Flow+"'";

                                            /* Maulik - 08/05/2015
                                             * Fix for MEG-4665.. When Program Duration which came back from MP Search SVCs comes back as "3" and the subscription selection for the member is "Monthly Pass-Redeem"
                                             * Change the Subscription Selection from "MP-3" to "MP" as ideally all MP Redeem are same and is 375 which should come back from SKURuleEngine
                                             */

                                            // Added By Praveen to fix both MEG-4665 and MEG-4614

                                            if (Flow.toUpperCase() == "ENROLL") {
                                            	if (in_array(deviceLocale,Countries["CA"]) && (CheckValidMPResult["MembersList"][0]["RegStatus"] == 'Online'))
								            		whrCondition = "where Action='" + action + "' and Subscription='" + Subcriptions[8] + "' and Transact='" + Flow + "' and RegistrationStatus = 'ONLINE'";
								            	else 
                                                	whrCondition = "where Action='" + action + "' and Subscription='" + Subcriptions[8] + "' and Transact='" + Flow + "' and RegistrationStatus <> 'ONLINE'";
                                            } else {
                                                whrCondition = "where Action='" + action + "' and Subscription='" + Subcriptions[1] + "' and Transact='" + Flow + "'";
                                            }
                                        }
                                        // Added for MEG-5038[PK]
                                        if (CheckValidMPResult["MembersList"][0]["ProgramDuration"] == "6" && typeofSub == kony.i18n.getLocalizedString("strMPRedeem")) {
                                            //whrCondition = "where Action='"+action+"' and Subscription='"+Subcriptions[8]+"' and Transact='"+Flow+"'";

                                            /* Maulik - 08/05/2015
                                             * Fix for MEG-4665.. When Program Duration which came back from MP Search SVCs comes back as "3" and the subscription selection for the member is "Monthly Pass-Redeem"
                                             * Change the Subscription Selection from "MP-3" to "MP" as ideally all MP Redeem are same and is 375 which should come back from SKURuleEngine
                                             */

                                            // Added By Praveen to fix both MEG-4665 and MEG-4614

                                            kony.print("RegStatus===>>>" + CheckValidMPResult["MembersList"][0]["RegStatus"]);
                                            if (Flow.toUpperCase() == "ENROLL") {
                                            	if (in_array(deviceLocale,Countries["CA"]) && (CheckValidMPResult["MembersList"][0]["RegStatus"] == 'Online'))
                                                	whrCondition = "where Action='" + action + "' and Subscription='" + Subcriptions[10] + "' and Transact='" + Flow + "' and RegistrationStatus = 'ONLINE'";
                                                else
                                                	whrCondition = "where Action='" + action + "' and Subscription='" + Subcriptions[10] + "' and Transact='" + Flow + "' and RegistrationStatus <> 'ONLINE'";
                                            } else {
                                                whrCondition = "where Action='" + action + "' and Subscription='" + Subcriptions[1] + "' and Transact='" + Flow + "'";
                                            }
                                        }
										
										if(CheckValidMPResult["MembersList"][0]["PlanType"] == 'LTC' && in_array(CheckValidMPResult["MembersList"][0]["CommitmentDuration"], ['6','12'])){
											var tmpsubtype = CheckValidMPResult["MembersList"][0]["PlanType"]+'-'+CheckValidMPResult["MembersList"][0]["CommitmentDuration"];
											whrCondition = "where Action='" + action + "' and Subscription='" + tmpsubtype + "' and Transact='" + Flow + "'";
											glbLTCInfo.PlanType = CheckValidMPResult["MembersList"][0]["PlanType"];
											glbLTCInfo.CommitmentDuration = CheckValidMPResult["MembersList"][0]["CommitmentDuration"];
											kony.print("::PK::LTC::changed---whrCondition--" + whrCondition);
										}
										else{
											glbLTCInfo = {};
										}

                                        kony.print("::PK::changed---whrCondition--" + whrCondition);
                                        // End MEG-4614

                                        glbFormName.txtSubscriptionID.text = getMPAndDateInSixDigitFormate(data, CheckValidMPResult["MembersList"][0]["ExpirationDate"]);
                                        onEndEditingForSubID();
                                        if (CheckValidMPResult["MembersList"][0] != undefined && CheckValidMPResult["MembersList"][0] != null && checkValidString(CheckValidMPResult["MembersList"][0].EnterpriseID) && CheckValidMPResult["MembersList"][0].EnterpriseID != "0") {
                                            setLinkInfoForOnlineMember(CheckValidMPResult["MembersList"][0]); //MEG-4510
                                        }
                                        kony.print("setLinkInfoForOnlineMember = " + JSON.stringify(gblLinkInfoForOnlineMember));
                                        callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
                                    } else {
                                        removeProgressView();
                                        alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                                    }
                                } else {
                                    removeProgressView();
                                    alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassIsValid"));
                                }

                            } else {
                                alertForMessages(kony.i18n.getLocalizedString("strmsgSelectFmp"));
                                removeProgressView();
                                return;
                            }
                        } else {
                            var typeofSub = glbFormName.lblSubType.text;
                            kony.print("typeofSub====" + typeofSub);
                            removeProgressView();
                            if (typeofSub == kony.i18n.getLocalizedString("strMPRedeem")) {
                            	//Added for MEGCA-386
                            	if(in_array(deviceLocale,Countries["CA"])){
                            		if (validExpiryDate(data)) {
				                    	callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
				                    }else{
				                        alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
				                        return;
				                    }
		                    	} else {
		                    		alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassIsValid"));
                                	return;
		                    	}
		                    	
                            } else {
                                if (validExpiryDate(data)) {
                                	
                                	glbFormName.txtSubscriptionID.text = getMPAnd3MPWithExpiry(data, typeofSub);
                                    

                                    if (isFromEditProfile) {
                                        callbackEdit.call(null);
                                        return true;
                                    }

                                    onEndEditingForSubID()
                                    callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
                                } else {
                                    alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassIsValid"));
                                    return;
                                }
                            }

                        }
                    } else {
                        removeProgressView();
                        if (validExpiryDate(data)) {
                            if (isFromEditProfile) {
                                callbackEdit.call(null);
                                return true;
                            }
                            callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
                        } else {
                            alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                            return;
                        }

                    }
                } else if (status == 300) {
                    removeProgressView();
                    if (validExpiryDate(data)) {
                        if (isFromEditProfile) {
                            callbackEdit.call(null);
                            return true;
                        }
                        callback.call(null, whrCondition, membertype, Subtype, isOverride, action);
                    } else {
                        alertForMessages(kony.i18n.getLocalizedString("strMsgCheckMonthlyPassExpiryDate"));
                        return;
                    }

                }
            } catch (e) {
                GlobalException(e);
                removeProgressView();
            }
        }

		boPreActivation.searchMemberWSCall(couponCode,checkForValidMPViaWSCallback);
      
    },

    //Added By Praveen (Maulik's Email Issue: Local Member With Expired MP but valid extension from .COM gives "MP Expired")
    checkMemberExistWithMemberId: function(memberid, memberObj, isSegmentClicked, callback) {
        kony.print("memberid----" + memberid);
        var whereClause = "where MemberID like '" + memberid + "'";

        function checkMemberExistWithMemberIdSuccessCallback(res) {
            if (res.length > 0) {
                boEnrollMember.updateMemberProfileDetailForMpOnline(memberid, memberObj, isSegmentClicked);
            } else {
                callback.call(null, memberObj, isSegmentClicked);
            }
        }
        DBMemberDetailsController.find(whereClause, checkMemberExistWithMemberIdSuccessCallback, eventErrorCallBack);
    },
    updateMemberProfileDetailForMpOnline: function(memberid, memberObj, isSegmentClicked) {
        if (memberid && !isNaN(memberid) && parseInt(memberid) > 0) {
            var whrClause = "where MemberID = '" + memberid + "'";

            function updateMemberProfileDetailForMpOnlineSuccessCallback(res) {
                kony.print(getMessageTemplate("updateSuccess", "Member"), "info");
                kony.print("in updateMemberProfileDetailForMpOnlineSuccessCallback addOnlineMemberDetails");
                if (isSegmentClicked) {
                    var selectedIndex = frmMemberProfileSearch.segMemberProfileSearch.selectedIndex;
                    var selectedRow = parseInt(selectedIndex[1]);
                    var sData = frmMemberProfileSearch.segMemberProfileSearch.data[selectedRow];
                    sData["isOnlineSearch"] = false;
                    selectedMemberData["isOnlineSearch"] = false;
                    kony.print("Segmemnt row to be modified is : " + selectedRow + "   data is : " + JSON.stringify(sData));

                    frmMemberProfileSearch.segMemberProfileSearch.setDataAt(sData, selectedRow);
                }
            }

            DBMemberDetailsController.update(whrClause, memberObj, updateMemberProfileDetailForMpOnlineSuccessCallback, eventErrorCallBack, false);
        }
    },
    getProductTypeFromProdcutDetail: function(productID, callBack) {
        var whereClause = "where ProductID=" + productID;

        function getProductTypeFromProdcutDetailCallback(response) {
            if (response.length > 0) {
                var v = response[0];
                productType = kony.sync.getString(v.Type);
                callBack.call(null, productType);
                kony.print("getProductTypeFromProdcutDetailCallback==" + productType);
            }
        }
        DBProductDetailController.find(whereClause, getProductTypeFromProdcutDetailCallback, eventErrorCallBack)

    },
    //End By Praveen (Maulik's Email Issue: Local Member With Expired MP but valid extension from .COM gives "MP Expired")

    //Added fot 4497
    getMemberHeightByMemberId: function(callback) {
        var whereClause = " where MemberID = '" + glbMemberId + "'";

        function getMemberHeightByMemberIdSuccessCallback(res) {
            if (res.length > 0) {
                kony.print("SJ---->>>>Height :" + kony.sync.getString(res[0].Height));
                var height = kony.sync.getString(res[0].Height);
                callback.call(null, height);
            } else {
                callback.call(null, 0);
            }
        }
        DBMemberDetailsController.find(whereClause, getMemberHeightByMemberIdSuccessCallback, eventErrorCallBack);
    },

    //Added for 4513
    checkPersonalGoalWeightAvailability: function() {
        var whereClause = " where MemberID = '" + glbMemberId + "'";

        function checkPersonalGoalWeightAvailabilitySuccessCallback(res) {
            if (res.length > 0) {
                var personalGoalWeight = kony.sync.getString(res[0].PersonalGoalWeight);
                kony.print("SJ---->>>>Personal Goal Weight :" + personalGoalWeight);
                if (personalGoalWeight != undefined && personalGoalWeight > 0) {
                    isPersonalGoalWeight = true;
                } else if (personalGoalWeight == null) {
                    isPersonalGoalWeight = true;
                } else {
                    isPersonalGoalWeight = false;
                }

                var resultDate = kony.sync.getString(res[0].PersonalGoalWeightDate);
                kony.print("SJ---->>>>Personal Goal Weight Date :" + resultDate);
                if (resultDate != undefined && resultDate != "" && resultDate != null && resultDate != "0001-01-01T00:00:00")
                    personalGoalDate = resultDate;
            } else {
                isPersonalGoalWeight = false;
            }
        }
        DBMemberDetailsController.find(whereClause, checkPersonalGoalWeightAvailabilitySuccessCallback, eventErrorCallBack);
    },

    getWeightEntries: function(callback) {
        var timeArray = personalGoalDate.split("T");
        var lastPromptDate = timeArray[0];
        var whereClause = "where MemberID = '" + glbMemberId + "' AND date(WeighInDate) > '" + lastPromptDate + "' ";
        kony.print("SJ--->>>Query : " + whereClause);

        function getWeighInDetailSuccessCallback(res) {
            kony.print("SJ--->>> inside getWeightEntries success callback " + res.length);
            var noOfWeightEntries = res.length;
            var isDisplayAlert = false;
            kony.print("SJ--->>> Weight Entries : " + noOfWeightEntries);
            if (res != undefined && res.length > 4) {
                if (noOfWeightEntries % 4 == 3) {
                    isDisplayAlert = true;
                } else {
                    isDisplayAlert = false;
                }
            } else if (res != undefined && res.length == 3) {
                kony.print("SJ--->>> Weight Entries : " + noOfWeightEntries);
                isDisplayAlert = true;
            } else {
                isDisplayAlert = false;
            }
            callback.call(null, isDisplayAlert);
        }
        kony.print("SJ--->>> inside getWeightEntries");
        DBWeighDetailsController.find(whereClause, getWeighInDetailSuccessCallback, eventErrorCallBack);
    },

    getPersonalGoalMemberId: function() {
        var whereClause = " where MemberID = '" + glbMemberId + "'";

        function getPersonalGoalMemberIdSuccessCallback(res) {
            if (res.length > 0) {
                kony.print("SJ---->>>>Personal Goal from DB :" + kony.sync.getString(res[0].PersonalGoalWeight));
                glbPersonalGoalWeight = kony.sync.getString(res[0].PersonalGoalWeight);
            }
        }
        DBMemberDetailsController.find(whereClause, getPersonalGoalMemberIdSuccessCallback, eventErrorCallBack);
    },
    
     getCommonMemberDataById:function(memberId,callback){
    
    	var whereClause = " where MemberID = '" + memberId + "'";
        function getCommonMemberDataByIdSuccessCallback(res){
            if(res.length > 0){
            	callback.call(null,res[0]);
            }
            else{
            	callback.call(null);
            }
        }
        DBMemberDetailsController.find(whereClause,getCommonMemberDataByIdSuccessCallback, eventErrorCallBack);
    },
    getDollerPriceValue:function (whereCond,subsType,action,callback)
    {
    	kony.print("::PK::---"+whereCond+"--"+subsType+"---"+action+"----"+callback);
    	var SQLQuery; 
    	var priceQuery = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1')?'ifnull(O.DiscountedProductPrice + O.OfferUnitPriceTax,P.UnitPrice+P.UnitPriceTax)':'ifnull(O.DiscountedProductPrice,P.UnitPrice)';    	
    	if(glbIsStarterFeeFeatureEnable)
    	{
    		SQLQuery = "select sum("+priceQuery+") as price from ProductDetail P left join OfferDetail O on P.ProductID = O.ProductID and O.AutoApplied='true' and O.LocationID ='"+glbLocationID+"' where P.sku IN (select sku from SKURuleEngine "+whereCond+")and P.LocationID ='"+glbLocationID+"'";    		
    	}
    	else
    	{
    		SQLQuery = "select sum("+priceQuery+") as price from ProductDetail P left join OfferDetail O on P.ProductID = O.ProductID and O.AutoApplied='true' and O.LocationID ='"+glbLocationID+"'  where P.sku IN (select sku from SKURuleEngine "+whereCond+")and P.LocationID ='"+glbLocationID+"' and sku NOT IN(450,490)";
    	}
    	
    	kony.print("sql==>"+SQLQuery);
    	
    	function getDollerPriceValueSuccessCallback(res)
    	{
    		if(res.length > 0)
    		{
    			if((action.toUpperCase() == 'REDEEM' && (subsType == "MP" || subsType=="MP-3" || subsType=="FMP")) || (action.toUpperCase() == 'BUY' && subsType=="FMP"))
    			{
    				res[0].price = 0;
    				callback.call(null,res[0].price)
    			}
    			else{
    				callback.call(null,res[0].price)
    			}
    			
    		}
    		else
    		{
				callback.call(null,0);    		
    		}
    	}
    	
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQuery, null, getDollerPriceValueSuccessCallback, eventErrorCallBack);
    },
    getOriginalUnitPrice :function (sku,callback){
    
    	var query = "select UnitPrice from ProductDetail where sku = " + sku;
    	kony.print("getOriginalUnitPrice " + query);
    	function getOriginalUnitPriceSuccessCallback(res)
    	{
    		kony.print("::getOriginalUnitPriceSuccessCallback::--"+JSON.stringify(res)+"");
    		kony.print("::PK Sql ----  return res.UnitPrice; "+query + res[0].UnitPrice);
    		callback(res);
    		
    	}
    	
    	kony.sync.single_select_execute(kony.sync.getDBName(), query, null, getOriginalUnitPriceSuccessCallback, eventErrorCallBack);
    	
    },
   	getDiscountedPrice: function(whereCond,res,subsType,action,callback)
   	{
    	var SQLQuery;
    	var priceQuery = (glbIsTaxCollected == 'true' || glbIsTaxCollected == '1')?'DiscountedProductPrice+OfferUnitPriceTax':'DiscountedProductPrice';
     	if(glbIsStarterFeeFeatureEnable)
     	{
     		SQLQuery = "select sum("+priceQuery+") as price from OfferDetail where ProductID IN(select ProductID from ProductDetail where sku IN (select sku from SKURuleEngine "+whereCond+") and LocationID ='"+glbLocationID+"') and AutoApplied='true' and LocationID ='"+glbLocationID+"'";
     	}
     	else
     	{
     		SQLQuery = "select sum("+priceQuery+") as price from OfferDetail where ProductID IN(select ProductID from ProductDetail where sku IN (select sku from SKURuleEngine "+whereCond+") and LocationID ='"+glbLocationID+"' and sku NOT IN(450,490)) and AutoApplied='true' and LocationID ='"+glbLocationID+"'";
     	}	
     	
     	kony.print("SQLQuery---"+SQLQuery);
     
     	function getDiscountedPriceSuccessCallback(result)
     	{
      		if(result.length > 0)
      		{
       			kony.print("inside the result---"+JSON.stringify(result));
       			if(result[0].price != undefined && result[0].price != null)
       			{
       				if((action.toUpperCase() == 'REDEEM' && (subsType == "MP" || subsType=="MP-3" || subsType=="FMP")) || (action.toUpperCase() == 'BUY' && subsType=="FMP"))
    				{
        				callback.call(null,0);
        			}
        			else{
        				callback.call(null,result[0].price);
        			}
       			}
        		else
        		{
         			callback.call(null,res[0].price);
        		}
      		}
      		else
      		{
       			kony.print("outside the result---"+JSON.stringify(res));
     			callback.call(null,res[0].price);      
      		}
     	}
        
        kony.sync.single_select_execute(kony.sync.getDBName(), SQLQuery, null, getDiscountedPriceSuccessCallback, eventErrorCallBack);
    },
    addRefferalMemberDetails : function(){
     DBRefferalDetailsController.create(glbRefferalMemberObj,true);
    },
    getLastWeightDataOfMember: function(memberId,callback) {
        var whereClause = "where MemberID = '" + memberId + "' order by WeighInDate desc LIMIT 0,1";

        function getLastWeightDataOfMemberSuccessCallback(res) {
            if (res.length > 0) {
                callback.call(null,true,res[0]);
            } else {
                callback.call(null,false);
            }
        }
        DBWeighDetailsController.find(whereClause, getLastWeightDataOfMemberSuccessCallback, eventErrorCallBack);
    },
    
    getProductNameBySKU:function(sku,callback){
    	var whrClause = " Where sku = "+sku;
    	function getProductNameBySKUCallBack(res){
    		var productName = "";
    		if(res.length > 0){
    			productName = res[0].description;
    			callback.call(null,productName);
    		}else{
    			callback.call(null,productName);
    		}
    	}
    	DBProductDetailController.find(whrClause, getProductNameBySKUCallBack, eventErrorCallBack);
    },
    
    getCCTranSalePaymentForMember:function(queryType, callback){
    	var transactionSQLQuery = "SELECT * from SalePayments WHERE SaleTransactnId  IN (Select C.SaleTransactnId from SalePayments C INNER JOIN  SaleDetails B " +
    							" ON B.SaleTransactnId = C.SaleTransactnId WHERE B.MeetingOccurID = '" + glbMeetingNum + "' AND " +
    							" B.MeetingDate = '" + glbMeetingDate + "' AND B.MemberId = '" + glbMemberId + "' AND B.IsSaleVoid = 0)";
    	kony.print("transactionSQLQuery : "+transactionSQLQuery);
    	function getCCTranSalePaymentForMemberSuccessCallback(res){
    		kony.print("In getCCTranSalePaymentForMemberSuccessCallback"+JSON.stringify(res));
    		if(res.length > 0){
    			if(queryType == "count")
    				callback.call(null, true);
    			else
    				callback.call(null, res);
    		}else{
    			callback.call(null,null);
    		}
    	}
    	kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getCCTranSalePaymentForMemberSuccessCallback, eventErrorCallBack);
    },
    
    getCCTranSaleItemForMember:function(saleTranID, callback){
    	kony.print("In getCCTranSaleItemForMember === "+saleTranID);
    	var whrCaluse = " WHERE IsSaleItemVoid = 0 AND SaleTransactnId = '"+ saleTranID +"'";
    	
    	function getCCTranSaleItemForMemberCallBack(res){
    		kony.print("In getCCTranSaleItemForMemberCallBack"+JSON.stringify(res));
    		if(res.length > 0){
    			callback.call(null, res);
    		}else{
    			callback.call(null,null);
    		}
    	}
    	DBSaleItemsController.find(whrCaluse, getCCTranSaleItemForMemberCallBack, eventErrorCallBack);
    },
    
    updateMemberEmail:function(updateObj,frmPage){
    	 function updateMemberEmailSuccessCallback(res) {
            kony.print("in updateMemberEmail");
            if(frmPage == "DirectSale")
            	kony.print("Email saved");
            else
            	getCCTransactionsForMember("updatedEmail",updateObj.Email);
         }
         
        var whrClause = " WHERE MemberID = '" +updateObj.MemberID+ "'";
        updateObj.EmpID = glbEmployeeId;
        updateObj.Locale = deviceLocale;
        updateObj.CountryID = getCountryID();

		DBMemberDetailsController.update(whrClause,updateObj, updateMemberEmailSuccessCallback, eventErrorCallBack);
    },
    setDefualtDataForMember:function(regData,WeighMemberIDs,WeighWeekNumber){
    	var updateObj = {};
    	updateObj.GoalAchDate = '';
    	updateObj.IsDateRedeemed ='';
    	updateObj.IsFreshStart = '';
    	updateObj.IsLink = '';
    	updateObj.IsMemberInMtns = '';
    	updateObj.IsPAYG = '';
    	updateObj.isVoided = '';
    	updateObj.MeetingId = '';
    	updateObj.MemTypeUpdateDt = '';
    	updateObj.RefreshDate = '';
    	
    	var whereClause = " RegNumber IN ("+regData.join(',')+")";
    	updateTable("MemberDetails",updateObj,whereClause,function(){
			boEnrollMember.getMemberIDByRegNumber(WeighMemberIDs,WeighWeekNumber);
		});
    	
   	},
    getMemberIDByRegNumber:function(WeighMemberIDs,WeighWeekNumber){
    	
    	var updateObj = {};
    	updateObj.IsMemberAtRisk = '';
		updateObj.MilestoneID = '';
		updateObj.ReachedDate = ''
		updateObj.WeighId = '';
		updateObj.WeighMSDate = '';
		
		if(WeighMemberIDs.length > 0 && WeighWeekNumber.length > 0){
    		var whereClause = " MemberID IN ('"+WeighMemberIDs.join("','")+"') and WeekNumber IN ('"+WeighWeekNumber.join("','")+"')";
    		kony.print("::WeighUpdate::"+whereClause);
	    	updateTable("WeighDetails",updateObj,whereClause,function(){
				kony.print("data updated");
			});
    	}
    	
    	
    }
};
