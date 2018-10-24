var isEMPNWI = true;
//This function is called on OnDone event of textfield
function eventOnClickSearchProvider() {
    var valid = new validationcls();
    var res = valid.checkLookUpServiceProviderName(popupLookupServiceProvider.txtSearch.text).isValid();

    if (res) {
        var val = popupLookupServiceProvider.txtSearch.text;

        if (val.length > 0) {
            try {
                //Show Progress View
                displayProgressView();

                //Check search by field
                var searchByField;
                if (isNaN(val)) {
                    searchByField = "Name";
                } else {
                    searchByField = "Number";
                }

                //Call service
                if (checkIfNetworkIsAvailable()) {
                    boLookupServiceProvider.searchEmployeeByNameOrNumberViaWS(glbLocationID, val.toLowerCase().toString(), searchByField, "");
                    popupLookupServiceProvider.txtManualEmployeeNumber.setEnabled(false);
                } else {
                    alertForMessages(kony.i18n.getLocalizedString("strNoNetConnect"));
                    removeProgressView();
                    popupLookupServiceProvider.txtManualEmployeeNumber.setEnabled(true);
                }

            } catch (e) {
                GlobalException(e);
            }
        }
    }
}

//Check Decimal Point and disallow it
function checkDecimalPointAndDisallow() {
    var empNumber = popupLookupServiceProvider.txtManualEmployeeNumber.text;
    if (empNumber.indexOf(".") != -1) {
        alertForMessages(kony.i18n.getLocalizedString("strAlertAllowOnlyNumber"));
        popupLookupServiceProvider.txtManualEmployeeNumber.text = popupLookupServiceProvider.txtManualEmployeeNumber.text.replace(".", "");
    }
}

//This function is called on Save button Tap
function eventonClickbtnSaveEmployeeByNumber() {
    //show segment and fields title hbox
    popupLookupServiceProvider.hbxTableTitle.setVisibility(true);

    //Hide No data label
    popupLookupServiceProvider.lblNoEmployee.setVisibility(false);

    //Create datasource
    if (popupLookupServiceProvider.txtManualEmployeeNumber.text != "" && popupLookupServiceProvider.txtManualEmployeeNumber.text != null) {
        popupLookupServiceProvider.segLookupServiceProvider.setVisibility(true);
        var segmentDatasource = [{
            lblLastName: "N/A",
            lblFirstName: "N/A",
            lblEmployeeNumber: popupLookupServiceProvider.txtManualEmployeeNumber.text,
            imgPurchase: "icn_shopping_cart.png",
            hdnEmployeeID: popupLookupServiceProvider.txtManualEmployeeNumber.text
        }];
        popupLookupServiceProvider.segLookupServiceProvider.data = segmentDatasource;

    }

    //reset textfield text
    popupLookupServiceProvider.txtManualEmployeeNumber.text = "";
}

//Search Employee by name or number service response
function searchEmployeeByNameOrNumberResponse(status, popupLookupServiceProvider_segLookupServiceProvider_temp) {
    popupLookupServiceProvider.segLookupServiceProvider.removeAll();
    if (status) {
        //show segment and fields title hbox
        popupLookupServiceProvider.hbxTableTitle.setVisibility(true);
        popupLookupServiceProvider.segLookupServiceProvider.setVisibility(true);

        //Hide No data label
        popupLookupServiceProvider.lblNoEmployee.setVisibility(false);

        //Hide Progress View
        removeProgressView();

        //Bind Employee data in segment
        popupLookupServiceProvider.segLookupServiceProvider.setData(popupLookupServiceProvider_segLookupServiceProvider_temp);
    } else {
        //hide segment and fields title hbox
        popupLookupServiceProvider.hbxTableTitle.setVisibility(false);
        popupLookupServiceProvider.segLookupServiceProvider.setVisibility(false);

        //Show No data label
        popupLookupServiceProvider.lblNoEmployee.setVisibility(true);
        popupLookupServiceProvider.lblNoEmployee.text = kony.i18n.getLocalizedString("strMsgNoRecord");
        removeProgressView();
    }
}

//This function is used to set sorting order flag
var isSortAscendinglookup = false;

function setSortFlagLookup() {
    if (isSortAscendinglookup == true)
        isSortAscendinglookup = false;
    else
        isSortAscendinglookup = true;
    return isSortAscendinglookup;
}

//This function is used to sort segment data
function eventOnClickLookupVboxSortImg() {
    var obj = popupLookupServiceProvider.segLookupServiceProvider.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagLookup();
        if (sortFlag == true) {
            popupLookupServiceProvider.imgSortHeader.src = "icn_sortby.png";
            var sortedObj = obj.sort(compare);
            popupLookupServiceProvider.segLookupServiceProvider.data = sortedObj;
        } else {
            popupLookupServiceProvider.imgSortHeader.src = "icn_sortby_down.png";
            var reverseSortedObj = obj.reverse(compare);
            popupLookupServiceProvider.segLookupServiceProvider.data = reverseSortedObj;
        }
    }
}

function redirectToProductForSP() {

    /*Added By Praveen Kalal For MEG-2730*/
    if (glbMeetingNum == "" || IsNoMeetingSelected) {
        alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingPurchase"));
        return;
    }
    /*End By Praveen Kalal For MEG-2730*/
    isServiceProvider = true;
    ClearTangibleProductsSegments();
    hboxHeaderWithCancelBtn.lblTitle.text = "";

    hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strHeaderSellMember");
    popupLookupServiceProvider.dismiss();

    glbMemberId = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]["hdnEmployeeID"];
    kony.print("glbMemberId=== >" + glbMemberId);
    //glbMemberId = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]["lblEmployeeNumber"]; //commneted for MEG-3151
    //glbRegNo = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]["RegNo"]; // SP Reg Number


    var fname = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]["lblFirstName"];
    var lname = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]["lblLastName"];
    frmDirectSaleProductList.scrollbox12443534679147550.containerHeight = 43;
    frmDirectSaleProductList.scrollbox12443534677872493.containerHeight = 73;
    if (fname.length > 10) {
        fname = fname.substring(0, 4) + "...";
    }

    if (lname.length > 10) {
        lname = lname.substring(0, 4) + "...";
    }
    frmDirectSaleProductList.hboxSubHeader.isVisible = true;
    frmDirectSaleProductList.vbox12443534672611876.setEnabled(false);
    frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = fname + " " + lname;//Modified by Studio Viz
    frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = toTitleCase(frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text);//Modified by Studio Viz
    //frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = selectedData["SubscriptnType"];//Modified by Studio Viz
    frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.isVisible = false;//Modified by Studio Viz
    frmDirectSaleProductList.vbox198407320743.isVisible = false;
    frmDirectSaleProductList.vbox12443534672611876.isVisible = false;
    frmDirectSaleProductList.lblExpDate.isVisible = false;
    frmDirectSaleProductList.lblProcessMembersubSubHeaderstudio4.text = kony.i18n.getLocalizedString("strLblPayment");//Modified by Studio Viz
    frmDirectSaleProductList.show();
}

//Function on click of weighin icon on employee search pop screen
function onClickEmpWeighIcon(){
	try{
		if(checkAppSettingEnable(Settings['EMPLOYEEWEIGHIN'])){
		
			if (!IsNoMeetingSelected) {
				var selectEmpData = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0];
				var selRowIndex = popupLookupServiceProvider.segLookupServiceProvider.selectedIndex[1];
				var selIndex = popupLookupServiceProvider.segLookupServiceProvider.selectedIndex;
				kony.print("::5568::-selectEmpData--"+JSON.stringify(selectEmpData));
				if(selectEmpData['isEmpCurrWeekWeighin']){
					alertForMessages(kony.i18n.getLocalizedString("strMsgWeighDone"));
			        return;
				}
				else{
					//getWeightDataOfEmployeeViaWS
					
					boLookupServiceProvider.getWeightDataOfEmployeeViaWS(selectEmpData,function(status,lwt){
						kony.print(status+";;;"+lwt);
						popupEmpAddWeigh.lblHeaderEmpName.text = selectEmpData.lblFirstName+" "+selectEmpData.lblLastName;
						isEMPNWI = true;
						if(status){
							selectEmpData['lastWeight'] = lwt; 
							kony.print("::selIndex::"+selIndex);
							
							kony.print("::selectEmpData::"+JSON.stringify(selectEmpData));
							var tmpData = popupLookupServiceProvider.segLookupServiceProvider.data;
							tmpData[selRowIndex]['lastWeight'] = lwt; 
							kony.print("tmpData::"+JSON.stringify(tmpData));
							popupLookupServiceProvider.segLookupServiceProvider.setData(tmpData);
							popupLookupServiceProvider.segLookupServiceProvider.selectedIndex = selIndex;
							
							kony.print("setData::"+JSON.stringify(popupLookupServiceProvider.segLookupServiceProvider.data));
							popupEmpAddWeigh.imgNoWeighIn.src = "noweighin_disable.png";
							popupEmpAddWeigh.vboxNoWeighIn.isVisible = true;
							
			        		popupEmpAddWeigh.txtAddWeight.setEnabled(true);
							popupEmpAddWeigh.show();
						}
						else{
							
							popupEmpAddWeigh.txtAddWeight.setEnabled(true);
							popupEmpAddWeigh.vboxNoWeighIn.isVisible = false;
							popupEmpAddWeigh.show();
						}
					})
				}
				
			} else{
				alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
			}	
		}
	}
	catch (e) {
		// todo: handle exception
		GlobalException(e);
	}
}

// function to dismiss Employee add weight popup

function dismissEmployeeWeightPopup(){
	isEMPNWI = false;
	popupEmpAddWeigh.txtAddWeight.text = "";
	popupEmpAddWeigh.lblHeaderEmpName.text ="";
	popupEmpAddWeigh.dismiss();
}

// function onclick of nwi button on Employee add weight popup

function onclickNWIEmpWeightBtn(){
	
	if(isEMPNWI){
		kony.print("::ISNWI:::"+JSON.stringify(popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]));
		popupEmpAddWeigh.imgNoWeighIn.src = "noweighin.png";
        popupEmpAddWeigh.txtAddWeight.setEnabled(false);
		var lwt = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0]['lastWeight'];
	
		if(lwt !== null){
			popupEmpAddWeigh.txtAddWeight.text = lwt;
		}
		else{
			popupEmpAddWeigh.txtAddWeight.text = "0.0";
		}
		isEMPNWI = false;
	}
	else{
		popupEmpAddWeigh.txtAddWeight.text = "";
		popupEmpAddWeigh.imgNoWeighIn.src = "noweighin_disable.png";
        popupEmpAddWeigh.txtAddWeight.setEnabled(true);
        isEMPNWI = true;
	}	
}

function onclickSaveEmpPopupBtn(){
	
	 var valid = new validationcls();
	 var ProductResult = [];
	 var res = valid.validateWeight(popupEmpAddWeigh.txtAddWeight.text).isValid();
	 var employeeData = popupLookupServiceProvider.segLookupServiceProvider.selectedItems[0];
	 transactionSQLQuery = "SELECT P.* FROM ProductDetail P INNER JOIN SKURuleEngine S ON S.SKU = P.sku WHERE S.Subscription = '"+Subcriptions['11']+"'";
	 kony.print("::::transactionSQLQuery::::"+transactionSQLQuery);
	 
	 kony.print("::isEMPNWI::"+isEMPNWI);
	 kony.sync.single_select_execute(kony.sync.getDBName(), transactionSQLQuery, null, getProductAndSKUDetailsCallback, eventErrorCallBack);
	 
	 function getProductAndSKUDetailsCallback(result){
	 	if(result && result.length > 0){
		 	ProductResult = result;
		 	if(res){
			 	if (deviceLevelTransactId != null && deviceLevelTransactId !== undefined && deviceLevelTransactId != "") {
		        	kony.print("deviceLevelTransactId==>>>" + deviceLevelTransactId);
			    } else {
			        boEnrollMember.generateDeviceLevelTransactID();
			        kony.print("Generated deviceLevelTransactId==>>>" + deviceLevelTransactId);
			    }
				 
				 	     
			     var createWeightDetailObject = {};
			     createWeightDetailObject.NoWeighIn = (isEMPNWI)?false:true;
			     createWeightDetailObject.IsAtndgMeeting = true;
			     createWeightDetailObject.EmpID = glbEmployeeId;
			     createWeightDetailObject.DailyPtTarget = parseInt(0);
			     createWeightDetailObject.LocationID = parseInt(glbLocationID);
			     createWeightDetailObject.MeetingDate = glbMeetingDate;
		         createWeightDetailObject.MtngOccrID =  checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
				 createWeightDetailObject.MemberID = employeeData.hdnEmployeeID;
				 createWeightDetailObject.WeighInDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
				 createWeightDetailObject.Weight = parseFloat(popupEmpAddWeigh.txtAddWeight.text);
				 createWeightDetailObject.WeeklyPointsAllowance = parseInt(0);	
		     	 kony.print("in createWeightDetailObject ===" + JSON.stringify(createWeightDetailObject));
			     DBWeighDetailsController.create(createWeightDetailObject,onsuccessCreateWeight,eventErrorCallBack, true)
			     
			}
	 	}
	 	else{
	 		 alertForMessages(kony.i18n.getLocalizedString("strMsgValidPass"));
	 	}
	}
	 
	 
	 function onsuccessCreateWeight(){
	 	var saleDetailsObject = {};
	 	
	 	saleDetailsObject.IsServiceProvider = false;
	 	saleDetailsObject.EmpID = glbEmployeeId;
        saleDetailsObject.EmployeeNumber = employeeData.lblEmployeeNumber;
        saleDetailsObject.IsEmployeeSale = false;
        saleDetailsObject.MeetingDate = glbMeetingDate;
        saleDetailsObject.MeetingOccurID =  checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
		saleDetailsObject.MemberID = employeeData.hdnEmployeeID;
		saleDetailsObject.IsSaleVoid = false;
    	saleDetailsObject.LocationID = parseInt(glbLocationID);
        saleDetailsObject.SaleDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    	saleDetailsObject.LastUpdated = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
    	saleDetailsObject.SaleTransactnId = deviceLevelTransactId.toString();
    	saleDetailsObject.TotalSaleTax = parseFloat(0).toFixed(2);
    	saleDetailsObject.TotalSalePrice = parseFloat(0).toFixed(2);
    	saleDetailsObject.TransactionType = "NonTangible";
    
    	DBSaleDetailsController.create(saleDetailsObject,onsuccessSaleDetail,eventErrorCallBack,true);
    }
    function onsuccessSaleDetail(){	
    	var saleItemObject = {};
    	saleItemObject.AdjustTotal = 0;
        saleItemObject.CalcTotal = 0;
        saleItemObject.CouponCode = ""; //NOT REQ
        saleItemObject.IsSaleItemVoid = false;
        saleItemObject.LastUpdated = "";
        saleItemObject.MissWeekPassNo = 0;
        saleItemObject.OfferId = ""; 
        saleItemObject.OfrCouponCode = "";
        saleItemObject.PrepaidCoupNo = 0; //NOT REQ
        saleItemObject.ProductID = ProductResult[0].ProductID;
        saleItemObject.ProductSku = ProductResult[0].sku; // remove parseInt because ProductSku is alphanumeric
        saleItemObject.Quantity = 1;
        saleItemObject.OriginalQuantity = 1;
        saleItemObject.ReturnQuantity = 0;
        saleItemObject.ReasonCode = 0;
        saleItemObject.SaleTransactnId = deviceLevelTransactId.toString();
        saleItemObject.UnitPrice = parseFloat(0);
        
        DBSaleItemsController.create(saleItemObject,onsuccessSaleItem,eventErrorCallBack,true);
    }
    function onsuccessSaleItem(){
    	ProductResult =[];
	 	var salePaymentObject = {};
    	salePaymentObject.LastUpdated = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
        salePaymentObject.PaymentDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
        salePaymentObject.SaleTransactnId = deviceLevelTransactId.toString();
        salePaymentObject.Amount = 0;
        salePaymentObject.Type = PaymentType[1];
        salePaymentObject.RefundAmount = 0;
        salePaymentObject.IsRefundAmount = false;
		DBSalePaymentsController.create(salePaymentObject,onsuccessSalePayment,eventErrorCallBack,true);
	 }
	 
	function onsuccessSalePayment(){
		
		//var whereClause ="where MemberID= '"+employeeData.hdnEmployeeID+"'";
		var whereClause ="MemberID= '"+employeeData.hdnEmployeeID+"'";
		var obj = {
			"MtngOccrID":checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum,
			"IsCurrentWeekWeighed":true,
			"LastAttendanceDate" : supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS"),
			"Usertype":UserType.Employee
		};
		
		//DBMemberDetailsController.update(whereClause, obj, onEmpUpdateSuccess, eventErrorCallBack, false)
		updateTable("MemberDetails",obj,whereClause,function(){
			onEmpUpdateSuccess();
		});

		
	}
	
	function onEmpUpdateSuccess(){
		var segMentData = popupLookupServiceProvider.segLookupServiceProvider.data;
		
		_.each(segMentData,function(emp){
			kony.print("emp.hdnEmployeeID "+"==="+" employeeData.hdnEmployeeID");
			if(emp.hdnEmployeeID === employeeData.hdnEmployeeID){
				emp.imgEnroll = "";
			}
		});
		popupEmpAddWeigh.txtAddWeight.text = "";
		popupEmpAddWeigh.lblHeaderEmpName.text ="";
		popupEmpAddWeigh.dismiss();
		deviceLevelTransactId = "";
	 	popupLookupServiceProvider.segLookupServiceProvider.setData(segMentData);
	 	alertForMessages("Employee process successfully");
	}
}

// Function on click of cart icon from checked in list for employee

function redirectToProductFromCheckedInListForSP(memberObj) {

    if (glbMeetingNum == "" || IsNoMeetingSelected) {
        alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingPurchase"));
        return;
    }

    isServiceProvider = true;
    ClearTangibleProductsSegments();
    hboxHeaderWithCancelBtn.lblTitle.text = "";

    hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strHeaderSellMember");
    
    glbMemberId = memberObj['MemberID'];
    kony.print("glbMemberId=== >" + glbMemberId);

    var fname = memberObj['FirstName'];
    var lname = memberObj['LastName'];
    
    frmDirectSaleProductList.scrollbox12443534679147550.containerHeight = 43;
    frmDirectSaleProductList.scrollbox12443534677872493.containerHeight = 73;
    if (fname.length > 10) {
        fname = fname.substring(0, 4) + "...";
    }

    if (lname.length > 10) {
        lname = lname.substring(0, 4) + "...";
    }
    
    frmDirectSaleProductList.hboxSubHeader.isVisible = true;
    frmDirectSaleProductList.vbox12443534672611876.setEnabled(false);
    frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = fname + " " + lname;//Modified by Studio Viz
    frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = toTitleCase(frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text);//Modified by Studio Viz
    //frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = selectedData["SubscriptnType"];//Modified by Studio Viz
    frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.isVisible = false;//Modified by Studio Viz
    frmDirectSaleProductList.vbox198407320743.isVisible = false;
    frmDirectSaleProductList.vbox12443534672611876.isVisible = false;
    frmDirectSaleProductList.lblExpDate.isVisible = false;
    frmDirectSaleProductList.lblProcessMembersubSubHeaderstudio4.text = kony.i18n.getLocalizedString("strLblPayment");//Modified by Studio Viz
    frmDirectSaleProductList.show();

}

// dismiss popupLookupServiceProvider
function dismissLooupServiceProviderPopup(){
	popupLookupServiceProvider.dismiss();
	getHomeScreenPaymentData()
}
