var boTransacations = {
    /**
     * For Both - Member and Non Member
     * This Function will get the transactions grouped by Member ID. Amount will be sum of all individual transactions for that member - MAIN SCREEN
     * @param {} MeetingId
     * @param {} isMember
     * @param {} isSort
     * @param {} bindTransactionsData
     * @returns {} 
     */
    getTransacationsByMeetingId: function(MeetingId, isMember, isSort, bindTransactionsData) {
        var transactionSQLQuery = "";
        var orderClause = " order by A.SaleDate";
        if (isSort == true) orderClause = orderClause + " desc";
        var today = supportTime(new Date(), "", kony.i18n.getLocalizedString("strDBInsertionDateFormat"));//** MEG 6386
        kony.print("::getTransacationsByMeetingId:: isMember = " + isMember);
		//** 7249
        if(IsAWSLocationEnabled())
        {
          if (isMember == "members") {
              transactionSQLQuery = "Select * from (SELECT B.LastName, B.FirstName, A.TotalSalePrice as SalePrice, A.TotalSaleTax, max(strftime('%H:%M', A.SaleDate)) " + " as SaleDate1,(sum((C.UnitPriceTax+C.UnitPrice) * C.Quantity) - A.subsidyamount)  " + " as TotalSalePrice  ,A.RegNumber, A.MemberID, A.MeetingOccurID " + " FROM SaleDetails A " + " inner join MemberDetails B on B.RegNumber=A.RegNumber and(B.Memberid = B.PreRegNumber or B.PreRegNumber = 0 or B.Memberid GLOB '*[A-z]*' )  " + " inner join SaleItems C on  C.SaleTransactnId=A.SaleTransactnId " +
                  " where A.CountryID = '" + getCountryID() + "' AND  A.MeetingOccurID='" + MeetingId + "' and A.MeetingDate like '%" + today + "%' " + " and (A.IsSaleVoid is null or A.IsSaleVoid= '' or A.IsSaleVoid= 0) " + " and (A.IsReturn is null or A.IsReturn= '' or A.IsReturn= 0) and (C.IsSaleItemVoid is null or C.IsSaleItemVoid= '' or C.IsSaleItemVoid= 0) " + " and C.Quantity >0 " + " and   C.ProductID in (select ProductID from ProductDetail where ProductID=C.ProductID)  and (A.IsServiceProvider is null or A.IsServiceProvider= '' or A.IsServiceProvider= 0) and  A.LocationID=" + glbLocationID + " group by A.MemberID " + orderClause + ")"; //**MEG 7383
          } else if (isMember == "nonmembers"){
              transactionSQLQuery = "SELECT  A.SaleTransactnId,A.TotalSalePrice as SalePrice, A.TotalSaleTax, max(strftime('%H:%M', A.SaleDate)) as SaleDate1," + "(sum((B.UnitPriceTax+B.UnitPrice)* B.Quantity)- A.subsidyamount )  as TotalSalePrice  , " + "A.RegNumber, A.MeetingOccurID " +
                  "FROM SaleDetails A" + " inner join SaleItems B on A.[SaleTransactnId] = B.[SaleTransactnId]" +
                  " where A.CountryID = '" + getCountryID() + "' AND A.MeetingOccurID=" + MeetingId + " and A.MeetingDate like '%" + today + "%' " + " and (A.IsSaleVoid is null or A.IsSaleVoid= '' or A.IsSaleVoid= 0)" + " and (A.IsReturn is null or A.IsReturn= '' or A.IsReturn= 0) " + " and (B.IsSaleItemVoid is null or B.IsSaleItemVoid= '' or B.IsSaleItemVoid= 0)" + " and (A.IsServiceProvider is null or A.IsServiceProvider= '' or A.IsServiceProvider= 0)" + " and B.Quantity >0 and (A.RegNumber='1' or A.RegNumber='1.0') " + " and A.LocationID=" + glbLocationID + " group by  A.SaleTransactnId" + orderClause;
          } else if (isMember == "employeesale") {
              transactionSQLQuery = "Select * from (SELECT B.LastName, B.FirstName, A.TotalSalePrice as SalePrice, A.TotalSaleTax, max(strftime('%H:%M', A.SaleDate)) " + " as SaleDate1,(sum((C.UnitPriceTax+C.UnitPrice) * C.Quantity)- A.subsidyamount) " + " as TotalSalePrice  ,A.RegNumber, A.MemberID, A.MeetingOccurID " + " FROM SaleDetails A " + " inner join MemberDetails B on B.MemberId=A.MemberId  " + " inner join SaleItems C on  C.SaleTransactnId=A.SaleTransactnId " +
                  " where A.CountryID = '" + getCountryID() + "' AND  A.MeetingOccurID='" + MeetingId + "' and A.MeetingDate like '%" + today + "%' " + " and (A.IsSaleVoid is null or A.IsSaleVoid= '' or A.IsSaleVoid= 0) " + " and (A.IsReturn is null or A.IsReturn= '' or A.IsReturn= 0) and (C.IsSaleItemVoid is null or C.IsSaleItemVoid= '' or C.IsSaleItemVoid= 0) " + " and C.Quantity >0 " + " and   C.ProductID in (select ProductID from ProductDetail where ProductID=C.ProductID)  and (A.IsServiceProvider= 1) and  A.LocationID=" + glbLocationID + " group by A.MemberID " + orderClause + ")"; //**MEG 7383
          }
        }else
          {
            if (isMember == "members") {
            transactionSQLQuery = "Select * from (SELECT B.LastName, B.FirstName, A.TotalSalePrice as SalePrice, A.TotalSaleTax, max(strftime('%H:%M', A.SaleDate)) " + " as SaleDate1,sum((C.UnitPriceTax+C.UnitPrice) * C.Quantity)  " + " as TotalSalePrice  ,A.RegNumber, A.MemberID, A.MeetingOccurID " + " FROM SaleDetails A " + " inner join MemberDetails B on B.RegNumber=A.RegNumber and(B.Memberid = B.PreRegNumber or B.PreRegNumber = 0 or B.Memberid GLOB '*[A-z]*' )  " + " inner join SaleItems C on  C.SaleTransactnId=A.SaleTransactnId " +
                  " where A.CountryID = '" + getCountryID() + "' AND  A.MeetingOccurID='" + MeetingId + "' and A.MeetingDate like '%" + today + "%' " + " and (A.IsSaleVoid is null or A.IsSaleVoid= '' or A.IsSaleVoid= 0) " + " and (A.IsReturn is null or A.IsReturn= '' or A.IsReturn= 0) and (C.IsSaleItemVoid is null or C.IsSaleItemVoid= '' or C.IsSaleItemVoid= 0) " + " and C.Quantity >0 " + " and   C.ProductID in (select ProductID from ProductDetail where ProductID=C.ProductID)  and (A.IsServiceProvider is null or A.IsServiceProvider= '' or A.IsServiceProvider= 0) and  A.LocationID=" + glbLocationID + " group by A.MemberID " + orderClause + ")";//**MEG 7383
          } else if (isMember == "nonmembers"){
              transactionSQLQuery = "SELECT  A.SaleTransactnId,A.TotalSalePrice as SalePrice, A.TotalSaleTax, max(strftime('%H:%M', A.SaleDate)) as SaleDate1," + "sum((B.UnitPriceTax+B.UnitPrice)* B.Quantity) as TotalSalePrice  , " + "A.RegNumber, A.MeetingOccurID " +
                  "FROM SaleDetails A" + " inner join SaleItems B on A.[SaleTransactnId] = B.[SaleTransactnId]" +
                  " where A.CountryID = '" + getCountryID() + "' AND A.MeetingOccurID=" + MeetingId + " and A.MeetingDate like '%" + today + "%' " + " and (A.IsSaleVoid is null or A.IsSaleVoid= '' or A.IsSaleVoid= 0)" + " and (A.IsReturn is null or A.IsReturn= '' or A.IsReturn= 0) " + " and (B.IsSaleItemVoid is null or B.IsSaleItemVoid= '' or B.IsSaleItemVoid= 0)" + " and (A.IsServiceProvider is null or A.IsServiceProvider= '' or A.IsServiceProvider= 0)" + " and B.Quantity >0 and (A.RegNumber='1' or A.RegNumber='1.0') " + " and A.LocationID=" + glbLocationID + " group by  A.SaleTransactnId" + orderClause;
          } else if (isMember == "employeesale") {
              transactionSQLQuery = "Select * from (SELECT B.LastName, B.FirstName, A.TotalSalePrice as SalePrice, A.TotalSaleTax, max(strftime('%H:%M', A.SaleDate)) " + " as SaleDate1,sum((C.UnitPriceTax+C.UnitPrice) * C.Quantity) " + " as TotalSalePrice  ,A.RegNumber, A.MemberID, A.MeetingOccurID " + " FROM SaleDetails A " + " inner join MemberDetails B on B.MemberId=A.MemberId " + " inner join SaleItems C on  C.SaleTransactnId=A.SaleTransactnId " +
                  " where A.CountryID = '" + getCountryID() + "' AND  A.MeetingOccurID='" + MeetingId + "' and A.MeetingDate like '%" + today + "%' " + " and (A.IsSaleVoid is null or A.IsSaleVoid= '' or A.IsSaleVoid= 0) " + " and (A.IsReturn is null or A.IsReturn= '' or A.IsReturn= 0) and (C.IsSaleItemVoid is null or C.IsSaleItemVoid= '' or C.IsSaleItemVoid= 0) " + " and C.Quantity >0 " + " and   C.ProductID in (select ProductID from ProductDetail where ProductID=C.ProductID)  and (A.IsServiceProvider= 1) and  A.LocationID=" + glbLocationID + " group by A.MemberID " + orderClause + ")"; //**MEG 7383
          }
          }
      //**End
        kony.print("::getTransacationsByMeetingId:: transactionSQLQuery = " + transactionSQLQuery);

        function getTransacationsByMeetingIdSuccessCallback(res) {
            kony.print("getTransacationsByMeetingIdSuccessCallback");

            if (res.length <= 0) {
                removeProgressView();
                kony.print("No transaction records found");
            } else {
                removeProgressView();

                kony.print("transaction found.... = " + res.length + "-" + JSON.stringify(res));
                if (res.length == 1) {
                    if (parseInt(kony.sync.getString(res[0].TotalSalePrice)) >= 0) bindTransactionsData(res);
                } else {
                    bindTransactionsData(res);
                }

            }
        }
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getTransacationsByMeetingIdSuccessCallback, eventErrorCallBack);

    },

    /**
     * This function is For Member Void Popup  - Popup Opens after selecting a member from void screen - Gets the transactions for the selected member
     * @param {} MeetingId
     * @param {} MemberId
     * @param {} isMember
     * @param {} bindProductTransactionsData
     * @returns {} 
     */
    getProductsForReturnByMemberID: function(MeetingId, MemberId, isMember, bindProductTransactionsData) {
		//**MEG 7249
        var transactionSQLQuery = "";
        if(IsAWSLocationEnabled())
          {
      	 transactionSQLQuery = "SELECT A.Id, A.ProductID, A.ProductSku, B.description, A.Quantity , case when B.Type == 'Fees' then (A.UnitPrice - S.SubsidyAmount) else A.UnitPrice end as UnitPrice, A.UnitPriceTax, B.Type, " +
            " case when B.Type == 'Fees' then (((A.UnitPrice+A.UnitPriceTax)* A.Quantity) - S.SubsidyAmount) else ((A.UnitPrice+A.UnitPriceTax)* A.Quantity) end as TotalPrice, A.SaleTransactnId,S.TotalSalePrice as SalePrice, S.TotalSaleTax,"+
            " (Select count(*) from PreActivation where SaleTransactnId = A.SaleTransactnId) as isActivated " +
            " from SaleItems A  " +
            " inner join ProductDetail B on A.ProductID=B.ProductID and B.LocationID=" + glbLocationID +
            " inner join SaleDetails S on S.SaleTransactnId = A.[SaleTransactnId] and S.MemberID = '" + MemberId + "'" +
            " and S.MeetingOccurID = '" + glbMeetingNum + "' and S.MeetingDate like '%" + glbMeetingDate + "%'" +
            " where S.CountryID = '" + getCountryID() + "' AND A.Quantity >0  " +
            " and (A.IsSaleItemVoid is null or A.IsSaleItemVoid= '' or A.IsSaleItemVoid= 0) and A.ProductSku not in("+convertArrayToString(getSKUList('Employee_Attendance'))+") order by S.SaleDate desc";
          }else
            {
              transactionSQLQuery = "SELECT A.Id, A.ProductID, A.ProductSku, B.description, A.Quantity , A.UnitPrice as UnitPrice, A.UnitPriceTax, B.Type, " +
            " ((A.UnitPrice+A.UnitPriceTax)* A.Quantity) as TotalPrice, A.SaleTransactnId,S.TotalSalePrice as SalePrice, S.TotalSaleTax,"+
            " (Select count(*) from PreActivation where SaleTransactnId = A.SaleTransactnId) as isActivated " +
            " from SaleItems A  " +
            " inner join ProductDetail B on A.ProductID=B.ProductID and B.LocationID=" + glbLocationID +
            " inner join SaleDetails S on S.SaleTransactnId = A.[SaleTransactnId] and S.MemberID = '" + MemberId + "'" +
            " and S.MeetingOccurID = '" + glbMeetingNum + "' and S.MeetingDate like '%" + glbMeetingDate + "%'" +
            " where S.CountryID = '" + getCountryID() + "' AND A.Quantity >0  " +
            " and (A.IsSaleItemVoid is null or A.IsSaleItemVoid= '' or A.IsSaleItemVoid= 0) and A.ProductSku not in("+convertArrayToString(getSKUList('Employee_Attendance'))+") order by S.SaleDate desc";

            }
      //**End
        kony.print("::transactionSQLQuery=" + transactionSQLQuery);

        function getProductsForReturnByMeetingIdSuccessCallback(res) {
            removeProgressView();
            kony.print("transaction  response" + JSON.stringify(res));
            if (res.length <= 0) {
                kony.print("No transaction records found");
            } else {
                kony.print("transaction found.... = " + res.length);
                bindProductsReturnData(res);
            }
        }
        displayProgressView();
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getProductsForReturnByMeetingIdSuccessCallback, eventErrorCallBack);
    },

    /**
     * This function is used when SP selects the Non Member for Product Return
     * @param {} MeetingId
     * @param {} MemberId
     * @param {} isMember
     * @param {} SaleTransId
     * @param {} bindProductTransactionsData
     * @returns {} 
     */
    getProductsForReturnByMeetingId: function(MeetingId, MemberId, isMember, SaleTransId, bindProductTransactionsData) {
        var transactionSQLQuery = "SELECT A.Id,A.ProductID,A.ProductSku,B.description,A.Quantity , " + "  (A.UnitPrice) as UnitPrice ,  A.UnitPriceTax , " + "  ((A.UnitPrice+A.UnitPriceTax )* A.Quantity) as TotalPrice, " + "  A.SaleTransactnId " + ",B.Type from SaleItems A " + " inner join ProductDetail B on A.ProductID=B.ProductID and B.Type='TangibleProduct' and B.LocationID=" + glbLocationID +
            " where A.CountryID = '" + getCountryID() + "' AND A.Quantity >0 " + " and A.SaleTransactnId='" + SaleTransId + "' " + " and (A.IsSaleItemVoid is null or A.IsSaleItemVoid= '' or A.IsSaleItemVoid= 0) " + " order by A.SaleTransactnId";

        kony.print("::transactionSQLQuery=" + transactionSQLQuery);

        function getProductsForReturnByMeetingIdSuccessCallback(res) {
            kony.print("transaction  response" + JSON.stringify(res));
            if (res.length <= 0) {
                removeProgressView();
                kony.print("No transaction records found");
            } else {
                removeProgressView();
                kony.print("transaction found.... = " + res.length);
                bindProductsReturnData(res);
            }
        }
        displayProgressView();
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getProductsForReturnByMeetingIdSuccessCallback, eventErrorCallBack);
    },
    getSalePaymentDatabySaleTransactionId: function(saleTransIds, getallproductsReturnSuccessCallBack, isVoidSuccess) {
        function getSalePaymentDatabySaleTransactionIdSuccessCallback(recordSet) {
            getallproductsReturnSuccessCallBack(recordSet,isVoidSuccess);
        }
        var transactionSQLQuery = "SELECT A.Amount,A.Type,A.SaleTransactnId FROM SalePayments A ,SaleItems B," + " ProductDetail C where A.CountryID = '" + getCountryID() + "' AND A.SaleTransactnId  ='" + saleTransIds + "' and " + "(A.RefundAmount ='NULL' or A.RefundAmount is null or A.RefundAmount= '' or A.RefundAmount= 0) and A.SaleTransactnId=B.SaleTransactnId " + "and B.ProductID=C.ProductID and B.IsSaleItemVoid=1  and C.LocationID=" + glbLocationID + " group by A.Type,A.SaleTransactnId";
        kony.print("getSalePaymentDatabySaleTransactionId transactionSQLQuery=" + transactionSQLQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getSalePaymentDatabySaleTransactionIdSuccessCallback, eventErrorCallBack);
    },
    checkForPartialreturnByTransacationId: function(isMember, saleTransIds, checkForPartialreturnByTransacationIdSuccessCallback) {
        var isPartialReturn = false;

        function getSalePaymentDatabySaleTransactionIdSuccessCallback(recordSet) {
            if (recordSet.length > 0) {
                isPartialReturn = true;
            }
            checkForPartialreturnByTransacationIdSuccessCallback(isPartialReturn);
        }

        var transactionSQLQuery = "SELECT * FROM SalePayments where CountryID = '" + getCountryID() + "' AND SaleTransactnId ='" + saleTransIds + "' and RefundAmount=1";
        kony.print("non member checkForPartialreturnByTransacationId transactionSQLQuery=" + transactionSQLQuery);
        kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getSalePaymentDatabySaleTransactionIdSuccessCallback, eventErrorCallBack);

    },
    deleteAllProductAndOffer: function() {

        var query = " where LocationId = " + glbLocationID;

        function deleteProductSuccessCallback() {
            kony.print("Inside deleteProductSuccessCallback");
            getLastSyncDateBeforesyncStartSession();
        }

        function deleteOfferSuccessCallback() {
            kony.print("Inside deleteOfferSuccessCallback");
            com.kony.WeightWatchers.ProductSyncScope.ProductDetail.remove(query, deleteProductSuccessCallback, deleteProductSuccessCallback, false);
        }

        kony.print("deleteAllProductAndOffer query: " + query);

        com.kony.WeightWatchers.ProductSyncScope.OfferDetail.remove(query, deleteOfferSuccessCallback, deleteProductSuccessCallback, false);

    },
    returnProducts: function(productList, isAllProductReturned, productsReturnSuccessCallBack,voidInfo) {
        var SaleTransId = productList[0].SaleTransactnId;
        kony.print("::PRO RETURN::===returnProducts====");
        var saleItemDetail = [];
        var saleDetail = {};
        var salePayment = [];
        var productCount = 0;
        var paymentMode = 0;
        var whrCondition = "where SaleTransactnId ='" + SaleTransId + "'";
        var insertOjb = [];
      
		creditCrardSalePaymentDataObj=null;

        displayProgressView();

        saleDetail.IsReturnTransaction = true;

        if (isAllProductReturned) {
            saleDetail.IsSaleVoid = 1;
            saleDetail.IsReturnTransaction = 1;
        } else {

            var totalSalePrice = frmProductReturns.segPrdReturns.selectedItems[0]["SalePrice"];
            var totalSaleTax = frmProductReturns.segPrdReturns.selectedItems[0]["TotalSaleTax"];

            kony.print("totalSalePrice===" + totalSalePrice);
            kony.print("totalSaleTax===" + totalSaleTax);
            kony.print("isMemberSelected===" + isMemberSelected);
            var updatedRefundAmount = 0;
            var updatedRefundTax = 0;

            _.each(productList, function(saleItemData) {
                updatedRefundAmount += parseFloat(parseFloat((parseFloat(removeDollar(saleItemData.lblPrice))) * parseFloat(saleItemData.lblQuantity)).toFixed(2));
                updatedRefundTax += parseFloat(parseFloat(parseFloat(removeDollar(saleItemData.lblTax)) * parseFloat(saleItemData.lblQuantity)).toFixed(2));
            });

            if (isMemberSelected == "members") {
                totalSalePrice = productList[0].SalePrice;
                totalSaleTax = productList[0].TotalSaleTax;
            }

            saleDetail.TotalSalePriceNew = parseFloat(parseFloat(totalSalePrice) - parseFloat(updatedRefundAmount)).toFixed(2);
            saleDetail.TotalSalePrice = saleDetail.TotalSalePriceNew;
            saleDetail.TotalSaleTax = (parseFloat(totalSaleTax) - parseFloat(updatedRefundTax)).toFixed(2);
            saleDetail.IsReturnTransaction = 1;
        }

        kony.print("SaleDetails===" + JSON.stringify(saleDetail));
		kony.sync.trackIntermediateUpdates = true;		
        DBSaleDetailsController.update(whrCondition, saleDetail, updateSaleDetailSuccessCallback, eventErrorCallBack);        

        //Update SaleItems
        function updateSaleDetailSuccessCallback() {
          	kony.sync.trackIntermediateUpdates = false;
            //Update SaleItems
            var finalSaleItem = [];
            _.each(productList, function(saleItemData) {
                var saleItem = {};
                saleItemDetail = {};

                saleItem.IsSaleItemVoid = 1;
                saleItem.IsReturnItem = true;
                saleItem.ReturnQuantity = saleItemData.lblRetQuantity;

                saleItemDetail.changeSet = saleItem;
                saleItemDetail.whereClause = whrCondition + " and ProductID=" + saleItemData.ProductID;
                
                finalSaleItem.push(saleItemDetail);

            })
            kony.print("SaleItems===" + JSON.stringify(finalSaleItem));
            com.kony.WeightWatchers.MemberSyncScope.SaleItems.updateAll(finalSaleItem, updateSaleItemSuccessCallback, eventErrorCallBack);

            kony.print("updatedRefundAmount===" + updatedRefundAmount);
            kony.print("updatedRefundTax===" + updatedRefundTax);
        }


        //Update SalePayment
        function updateSaleItemSuccessCallback() {

            if (!isAllProductReturned) {
                
                var transactionSQLQuery = "SELECT AuthorizationCode, CCLastFourDigits, CardType, ExpirationDate, HasToken, InvoiceNumber, ReferenceNumber, RequestId, Token, TokenExpirationDate, TransactionStatus, TransactionType, IsTrack, Amount,Type, (Select sum(((UnitPrice+UnitPriceTax)* Quantity)) from SaleItems " + "where CountryID = '" + getCountryID() + "' AND SaleTransactnId ='" + SaleTransId + "' and ProductID in (";
                
                for (var i = 0; i < productList.length; i++) {
                    transactionSQLQuery += productList[i].ProductID;
                    if (i < (productList.length - 1)) {
                        transactionSQLQuery += ",";
                    }
                }

                transactionSQLQuery += ") and IsSaleItemVoid=1 " + "order by SaleTransactnId) as refundAmount, IsIngenicoPayment FROM SalePayments where CountryID = '" + getCountryID() + "' AND (RefundAmount = 'NULL' or RefundAmount is null or RefundAmount= '' or" + " RefundAmount= 0) and SaleTransactnId ='" + SaleTransId + "'";
                kony.print("insertSaleItemSuccessCallbackInMain===" + transactionSQLQuery);

                kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getPartialProdcutsFromSaleItemSuccessCallback, eventErrorCallBack);


                function getPartialProdcutsFromSaleItemSuccessCallback(recordSet) {
                    //var insertOjb = [];
                    //	var recordSet=salePaymentTemp;

                    if (recordSet.length == 1) // Payment made by Single Mode
                    {
                        var data = recordSet[0];
                        paymentMode = getPaymentModeByPurchaseModeType((kony.sync.getString(data.Type)));
                        if(kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == true && voidInfo.isVoidSuccess == true) {
        					creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(recordSet[0]);
        					creditCrardSalePaymentDataObj.Amount=recordSet[0].refundAmount;
        					creditCrardSalePaymentDataObj.RequestId=voidInfo.voidCCrequestID;
        				}
                    } else { // Payment made by Multiple Mode
                        paymentMode = PaymentType[9]; //Payment mode is CreditSlip at return
                    }

                    var paymnetData = {};
                    paymnetData["RefundAmount"] = 1;
                    paymnetData["Type"] = paymentMode;
                    paymnetData["SaleTransactnId"] = SaleTransId;
                    paymnetData["IsRefundAmount"] = true;
                    
                    if (kony.sync.getString(recordSet[0].refundAmount) == undefined || kony.sync.getString(recordSet[0].refundAmount) == null) {
                        paymnetData["Amount"] = 0;

                    } else if (paymentMode == PaymentType[9]){ //added for MEG-6722
                          	paymnetData["Amount"] = kony.sync.getString(recordSet[0].refundAmount);	
                    }else {
                        paymnetData["Amount"] = 0 - kony.sync.getString(recordSet[0].refundAmount);		
                    }
                    
                    if(creditCrardSalePaymentDataObj != null &&  voidInfo.isVoidSuccess == true){
						//var invoiceNumber = tempObj["SaleTransactnId"].substr(tempObj["SaleTransactnId"].length - 6);
					    paymnetData["InvoiceNumber"] = creditCrardSalePaymentDataObj.InvoiceNumber;
	                    paymnetData["AuthorizationCode"] = creditCrardSalePaymentDataObj.AuthorizationCode;
	                    paymnetData["CCLastFourDigits"] = creditCrardSalePaymentDataObj.CCLastFourDigits;
						paymnetData["CardType"] = creditCrardSalePaymentDataObj.CardType
						paymnetData["ExpirationDate"] = creditCrardSalePaymentDataObj.ExpirationDate
						paymnetData["HasToken"] = creditCrardSalePaymentDataObj.HasToken;
					    paymnetData["ReferenceNumber"] = creditCrardSalePaymentDataObj.ReferenceNumber;
					    paymnetData["RequestId"] = creditCrardSalePaymentDataObj.RequestId;
					    paymnetData["Token"] = creditCrardSalePaymentDataObj.Token;
					    paymnetData["TokenExpirationDate"] = creditCrardSalePaymentDataObj.TokenExpirationDate;
					    paymnetData["TransactionType"] = "Reversal";
					    paymnetData["TransactionStatus"] = creditCrardSalePaymentDataObj.TransactionStatus;
						paymnetData["PaymentGateway"] = creditCrardSalePaymentDataObj.PaymentGateway;						
						isTrack = creditCrardSalePaymentDataObj.IsTrack;					}else{
                        if(kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == true) {
					       paymnetData["Type"] = PaymentType[9];
					    }
					}

                    paymnetData["PaymentDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
                  	paymnetData["SalePaymentID"] = gblDeviceID + "_" + generateSaleItemID();
                    insertOjb.push(paymnetData);
                    DBSalePaymentsController.createAll(insertOjb, updateSalePaymentSuccessCallback, eventErrorCallBack);
                }


            } else {

                //Update SalePayments Table
                var transactionSQLQuery = "SELECT AuthorizationCode, CCLastFourDigits, CardType, ExpirationDate, HasToken, InvoiceNumber, ReferenceNumber, RequestId, Token, TokenExpirationDate, TransactionStatus, TransactionType, IsTrack, Amount,Type, IsIngenicoPayment FROM SalePayments where CountryID = '" + getCountryID() + "' AND SaleTransactnId ='" + SaleTransId + "'" + " and (RefundAmount ='NULL' or RefundAmount is null or RefundAmount= '' or RefundAmount= 0)";
                kony.print("insertSalePaymentsSuccessCallback transactionSQLQuery==" + transactionSQLQuery);
                kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getProdcutsFromSaleItemSuccessCallback, eventErrorCallBack);

                function getProdcutsFromSaleItemSuccessCallback(recordSet) {
                    kony.print("getProdcutsFromSaleItemSuccessCallback =" + recordSet.length);
                    //var insertOjb = [];
                    var index = 0;
                    
                    if (recordSet.length == 1) // Payment made by Single Mode
                    {
                        var data = recordSet[0];
                        
                        paymentMode = getPaymentModeByPurchaseModeType((kony.sync.getString(data.Type)));
                        
                        if(kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == true && voidInfo.isVoidSuccess == true) {
        					creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(recordSet[0]);
							creditCrardSalePaymentDataObj.Amount=recordSet[0].Amount;
							creditCrardSalePaymentDataObj.RequestId=voidInfo.voidCCrequestID;
						}
                    }
                    
                    
                    for (var i in recordSet) {
                        kony.print("recordSet[i] =" + JSON.stringify(recordSet[i]));
                        var data = recordSet[i];
                        var paymnetData = {};
                        if(kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == true && voidInfo.isVoidSuccess == true) 
                        {
	                        creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(data);
							creditCrardSalePaymentDataObj.Amount=parseFloat(kony.sync.getString(data.Amount));
							creditCrardSalePaymentDataObj.RequestId=voidInfo.voidCCrequestID;
							kony.print("creditCrardSalePaymentDataObj =" + creditCrardSalePaymentDataObj);
							
                        }
                        
                        paymnetData["RefundAmount"] = 1;
                        paymnetData["IsRefundAmount"] = true;
                        paymnetData["Type"] = kony.sync.getString(data.Type);
                        if (kony.sync.getString(data.Type) == PaymentType[10]) paymnetData["Type"] = PaymentType[9]; //Payment mode is CreditSlip at return

                        paymnetData["SaleTransactnId"] = SaleTransId;
                        if ((paymnetData["Type"] == PaymentType[9])) {   //MEG-6722 - Insert postivie value for credit slip issue.;
                          kony.print("Return Amt = "+parseFloat(kony.sync.getString(data.Amount))) ;
                          var amtAlreadyReturned = 0;
                          calculateCrSlipReturnAmt(SaleTransId,true, function(amt){
                               amtAlreadyReturned = parseFloat(amt).toFixed(2);
                          });
                          var returnAmt = parseFloat(kony.sync.getString(data.Amount)) - amtAlreadyReturned;
                          kony.print("returnAmt bo=="+returnAmt);
                          paymnetData["Amount"] = returnAmt; //parseFloat(kony.sync.getString(data.Amount));
                        } else {
                            paymnetData["Amount"] = (0 - parseFloat(kony.sync.getString(data.Amount)));
                        }
						if(creditCrardSalePaymentDataObj != null &&  voidInfo.isVoidSuccess == true){
								//var invoiceNumber = tempObj["SaleTransactnId"].substr(tempObj["SaleTransactnId"].length - 6);
							    paymnetData["InvoiceNumber"] = creditCrardSalePaymentDataObj.InvoiceNumber;
			                    paymnetData["AuthorizationCode"] = creditCrardSalePaymentDataObj.AuthorizationCode;
			                    paymnetData["CCLastFourDigits"] = creditCrardSalePaymentDataObj.CCLastFourDigits;
								paymnetData["CardType"] = creditCrardSalePaymentDataObj.CardType
								paymnetData["ExpirationDate"] = creditCrardSalePaymentDataObj.ExpirationDate
								paymnetData["HasToken"] = creditCrardSalePaymentDataObj.HasToken;
							    paymnetData["ReferenceNumber"] = creditCrardSalePaymentDataObj.ReferenceNumber;
							    paymnetData["RequestId"] = creditCrardSalePaymentDataObj.RequestId;
							    paymnetData["Token"] = creditCrardSalePaymentDataObj.Token;
							    paymnetData["TokenExpirationDate"] = creditCrardSalePaymentDataObj.TokenExpirationDate;
							    paymnetData["TransactionType"] = "Reversal";
							    paymnetData["TransactionStatus"] = creditCrardSalePaymentDataObj.TransactionStatus;
								paymnetData["PaymentGateway"] = creditCrardSalePaymentDataObj.PaymentGateway;
								isTrack = creditCrardSalePaymentDataObj.IsTrack;
						}else{
							   if(kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == true) {
							      paymnetData["Type"] = PaymentType[9];
							   }
							
						}
                        paymnetData["PaymentDate"] = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
						paymnetData["SalePaymentID"] = gblDeviceID + "_" + generateSaleItemID();
                      
                        insertOjb.push(paymnetData);
                    }
                    DBSalePaymentsController.createAll(insertOjb, updateSalePaymentSuccessCallback, eventErrorCallBack);
                }


            }
        }
		
//       	function updateAllSalePaymentRecords(){
//           	var updatedData = [];
//         	_.each(insertOjb, function(data) {
//                 var spd = {};
//                 salePaymentUpdateData = {};
// 				spd.IsRefundAmount = true;
//                 spd.PaymentDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
//                 salePaymentUpdateData.changeSet = spd;
//                 salePaymentUpdateData.whereClause = "where SalePaymentID = '"+data.SalePaymentID+"' and IsRefundAmount =1 and SaleTransactnId ='" + SaleTransId + "'";
//                 updatedData.push(salePaymentUpdateData);
//             })
//             kony.print(":: updatedData::"+JSON.stringify(updatedData));
//             DBSalePaymentsController.updateAll(updatedData, updateSalePaymentSuccessCallback, eventErrorCallBack);
//         }

        function updateSalePaymentSuccessCallback() {
            removeProgressView();
            kony.print("updatePartialProductReturn callback");

            if (!isAllProductReturned)
                productsReturnSuccessCallBack(productCount, paymentMode, SaleTransId);
            else {
            	(voidInfo) ? allproductsReturnSuccessCallBack(SaleTransId,voidInfo.isVoidSuccess) : allproductsReturnSuccessCallBack(SaleTransId);             		
            }
               
        }
    },
    // function to Validate  partial return if there are multiple payment mode used[PK]
    checkMuliplePaymentType: function(saleTransIds,callback){
    	var transactionSQLQuery = "SELECT  AuthorizationCode, CCLastFourDigits, CardType, ExpirationDate, HasToken, InvoiceNumber, ReferenceNumber, RequestId, Token, TokenExpirationDate, TransactionStatus, TransactionType, IsTrack, Amount, Type, IsIngenicoPayment FROM SalePayments where CountryID = '" + getCountryID() + "' AND SaleTransactnId ='" + saleTransIds + "' and IsRefundAmount = 0 and Type!='CreditSlipIssued' group by Type";
    	kony.print("::PK::--transactionSQLQuery Res--"+transactionSQLQuery);
    	var isCreditDisabled=false;
    	glbIsDisplayCCAmtRefundAlert=false;
    	creditCrardSalePaymentDataObj=null;
    	function checkMuliplePaymentTypeSuccessCallback(res){
    		kony.print("::PK::--checkMuliplePaymentType Res--"+JSON.stringify(res));
    		if(res.length > 1){
    			 for (var i in res) {
                        var data = res[i];
                        
		                if( kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == true) {
		        				creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(data);
								creditCrardSalePaymentDataObj.Amount=data.Amount;
								glbIsDisplayCCAmtRefundAlert = true;
						}else if( kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == false) { 
							isCreditDisabled=true;
						}
    			}
    			callback.call(null,true,isCreditDisabled);
    		}
    		else{
    				var data = res[0];
                        
		                if( kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == true) {
		        				creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(data);
								creditCrardSalePaymentDataObj.Amount=data.Amount;
								glbIsDisplayCCAmtRefundAlert = true;
						}else if( kony.sync.getString(data.Type) == PaymentType[13] && kony.sync.getString(data.IsTrack) == false) { 
							isCreditDisabled=true;
						}
    			callback.call(null,false,isCreditDisabled);
    		}
    	}
    	kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, checkMuliplePaymentTypeSuccessCallback, eventErrorCallBack);
    },
    // function to Validate  partial return if there is credit card payment mode used
    checkIsCreditCardPaymentType: function(saleTransIds,callback){
    	var transactionSQLQuery = "SELECT  AuthorizationCode, CCLastFourDigits, CardType, ExpirationDate, HasToken, InvoiceNumber, ReferenceNumber, RequestId, Token, TokenExpirationDate, TransactionStatus, TransactionType, IsTrack, Amount,Type, IsIngenicoPayment FROM SalePayments where CountryID = '" + getCountryID() + "' AND SaleTransactnId ='" + saleTransIds + "' AND Type = 'CreditCard'";
    	kony.print("::PK::--transactionSQLQuery Res--"+transactionSQLQuery);
    	function checkMuliplePaymentTypeSuccessCallback(res){
    		kony.print("::PK::--checkMuliplePaymentType Res--"+JSON.stringify(res));
    		if(res.length > 0){
              	var data = res[0];
                if( kony.sync.getString(data.IsTrack) == true) {
        				creditCrardSalePaymentDataObj = new CCSalePaymentDataObj(data);
						creditCrardSalePaymentDataObj.Amount=data.Amount;
						glbIsDisplayCCAmtRefundAlert = true;
				}
    			callback.call(null,true);
    		}
    		else{
    			callback.call(null,false);
    		}
    	}
    	kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, checkMuliplePaymentTypeSuccessCallback, eventErrorCallBack);
    },
  
  	getCrSlipIssueBySaleTranID: function(saleTransId,callback){
    	var transactionSQLQuery = "SELECT Amount, Type, SaleTransactnId FROM SalePayments  where SaleTransactnId = '" + saleTransId +"' and Type = '" + PaymentType[9] + "'";
      	kony.print("::SJ::--transactionSQLQuery--"+transactionSQLQuery);
      	function getCrSlipIssueBySaleTranIDSuccessCallback(res){
          	kony.print("::SJ::--getCrSlipIssueBySaleTranIDSuccessCallback Res--"+JSON.stringify(res));
    		callback.call(null,res);
        }
      
      	kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getCrSlipIssueBySaleTranIDSuccessCallback, eventErrorCallBack);
    }
};
