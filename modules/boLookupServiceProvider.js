//service Employee search by Name or Number
var EmpWeightData = [];
var boLookupServiceProvider = {
    searchEmployeeByNameOrNumberViaWS: function(locationID, searchParamValue, searchByFieldName, fromScreen) {
    	var AlreadyWeighInMembers = [];
    	var whereClause ="where EmpID = MemberID and (IsCurrentWeekWeighed = 1 or IsCurrentWeekWeighed='true')";
    	DBMemberDetailsController.find(whereClause, onSuccessFindEmployee, eventErrorCallBack);
    	
    	function onSuccessFindEmployee(res){
    		if(res && res.length > 0){
    			_.each(res,function(i){
    				AlreadyWeighInMembers.push(i.MemberID);
    			})
    		}
    		
    		var GetEmployeeByNameOrNumber_inputparam = {};
	        GetEmployeeByNameOrNumber_inputparam["serviceID"] = Services.searchEmployee;
	        GetEmployeeByNameOrNumber_inputparam["httpheaders"] = {};
	        GetEmployeeByNameOrNumber_inputparam["httpconfigs"] = {};
	        //** MEG 6493
		 	if(JsonService){
        		GetEmployeeByNameOrNumber_inputparam["httpheaders"] = setRESTHeader();
      		}else {		       
		        GetEmployeeByNameOrNumber_inputparam["DeviceID"] = gblDeviceID;
		        GetEmployeeByNameOrNumber_inputparam["AccessToken"] = glbSPAuthToken;
		        GetEmployeeByNameOrNumber_inputparam["SPID"] = glbEmployeeId;
		        GetEmployeeByNameOrNumber_inputparam["HeaderDate"] = glbHeaderDate;
		        GetEmployeeByNameOrNumber_inputparam["Source"] = gblSourceVal;
		    }
		    GetEmployeeByNameOrNumber_inputparam["LocationID"] = locationID;
	        GetEmployeeByNameOrNumber_inputparam["searchText"] = searchParamValue;
	        GetEmployeeByNameOrNumber_inputparam["searchType"] = searchByFieldName;
		     //**End 
	
	        GetEmployeeByNameOrNumber = Network.makeServiceCall(GetEmployeeByNameOrNumber_inputparam, searchEmployeeByNameOrNumberViaWSCallback, false); //true to allow offline data access
    			
    	}
    
        
        function searchEmployeeByNameOrNumberViaWSCallback(status, GetEmpByNameOrNumberResult) {
            try {
                if (status == 400) {
                    if (GetEmpByNameOrNumberResult["opstatus"] == 0) {
                        kony.print("GetEmpByNameOrNumberResult ===" + JSON.stringify(GetEmpByNameOrNumberResult));

                        if (GetEmpByNameOrNumberResult["EmployeeList"] && GetEmpByNameOrNumberResult["EmployeeList"].length > 0) {
                            var popupLookupServiceProvider_segLookupServiceProvider_temp = [];
                            if (GetEmpByNameOrNumberResult != null && GetEmpByNameOrNumberResult != undefined && GetEmpByNameOrNumberResult["EmployeeList"] != null && GetEmpByNameOrNumberResult["EmployeeList"] != undefined) {
                            	
                            	_.each(GetEmpByNameOrNumberResult["EmployeeList"],function(emp){
									if(in_array(emp.EmployeeID, AlreadyWeighInMembers)){
										emp.IsCurrentWeekWeighed = true;
									}
								});
								
								kony.print("::EMP SVC Result:: GetEmpByNameOrNumberResult::"+JSON.stringify(GetEmpByNameOrNumberResult["EmployeeList"]));
                            
                                for (var i1 = 0; i1 < GetEmpByNameOrNumberResult["EmployeeList"].length; i1++) {


                                    var empObj = mapKeys(viewSearchEmployee, {
                                        hdnEmployeeID: GetEmpByNameOrNumberResult["EmployeeList"][i1]["EmployeeID"],
                                        lblFirstName: GetEmpByNameOrNumberResult["EmployeeList"][i1]["FirstName"],
                                        lblLastName: GetEmpByNameOrNumberResult["EmployeeList"][i1]["LastName"],
                                        lblEmployeeNumber: GetEmpByNameOrNumberResult["EmployeeList"][i1]["EmployeeNumber"],
                                        imgEnroll: (!GetEmpByNameOrNumberResult["EmployeeList"][i1]["IsCurrentWeekWeighed"] && checkAppSettingEnable(Settings['EMPLOYEEWEIGHIN']))?"icn_weigh.png":"",
                                        imgPurchase: "icn_shopping_cart.png",
                                        lastWeight:""
                                    });
                                    popupLookupServiceProvider_segLookupServiceProvider_temp.push(empObj);
                                }

                                if (fromScreen && fromScreen == "frmTallyTimesheet") {
                                    searchEmployeeFromTimesheetResponse(true, popupLookupServiceProvider_segLookupServiceProvider_temp);
                                } else {
                                    searchEmployeeByNameOrNumberResponse(true, popupLookupServiceProvider_segLookupServiceProvider_temp);
                                }
                            }
                        } else {
                            //Callback - No Employee found
                            if (fromScreen && fromScreen != "") {
                                searchEmployeeFromTimesheetResponse(false, popupLookupServiceProvider_segLookupServiceProvider_temp);
                            } else {
                                searchEmployeeByNameOrNumberResponse(false, popupLookupServiceProvider_segLookupServiceProvider_temp);
                            }
                        }
                    } else {
                        //Callback - opstatus is Nonzero
                        CommonErrHandler.networkError(GetEmpByNameOrNumberResult['opstatus'])
                        searchEmployeeByNameOrNumberResponse(false, popupLookupServiceProvider_segLookupServiceProvider_temp);
                    }
                } else if (status == 300) {
                    CommonErrHandler.networkError(status, GetEmpByNameOrNumberResult);
                    searchEmployeeByNameOrNumberResponse(false, popupLookupServiceProvider_segLookupServiceProvider_temp);
                }
                tempCallback = null;
            } catch (e) {
                GlobalException(e);
            }
        }
    },
    getWeightDataOfEmployeeViaWS:function(employeeData,callback){
    	kony.print("::employeeData::"+JSON.stringify(employeeData));
    	var createMemberDetailsObject = {}; //Member object
        createMemberDetailsObject.MemberID = employeeData.hdnEmployeeID;
	    createMemberDetailsObject.PreRegNumber = 0;
	    createMemberDetailsObject.EmpID = employeeData.hdnEmployeeID;
	    createMemberDetailsObject.MemberType = '0';
	    createMemberDetailsObject.Usertype = UserType.Employee;
	    createMemberDetailsObject.FirstName = employeeData.lblFirstName;
	    createMemberDetailsObject.LastName = employeeData.lblLastName;
	    createMemberDetailsObject.EnrollmentDate = supportTime(new Date(), "", "yyyy-mm-ddTHH:NN:SS");
	    createMemberDetailsObject.MeetingDate = glbMeetingDate;
	    createMemberDetailsObject.LocationID = parseInt(glbLocationID);
	    createMemberDetailsObject.MtngOccrID = checkValidString(glbTempMeetingNum) ? glbTempMeetingNum : glbMeetingNum; //ID field value of the meetings getall
	    var whereClause = "where MemberID = '"+employeeData.hdnEmployeeID+"'"; 
	    
	    DBMemberDetailsController.find(whereClause, function(res){
	    	if(res && res.length > 0){
	    		onsuccessCreateMember();
	    	}
	    	else{
	    		insertToTable("MemberDetails",createMemberDetailsObject,function() {
	    			onsuccessCreateMember();
	    		});
	    		//DBMemberDetailsController.create(createMemberDetailsObject, onsuccessCreateMember, eventErrorCallBack, false);	
	    	}
	    }, eventErrorCallBack);
	    
    	
    	
    	function onsuccessCreateMember(){
    	
	    	var GetWeightDataOfEmployee_inputparam = {};
	        GetWeightDataOfEmployee_inputparam["serviceID"] = Services.memberWeight;
	        GetWeightDataOfEmployee_inputparam["httpheaders"] = {};
		    GetWeightDataOfEmployee_inputparam["httpconfigs"] = {};
	        
	        //** MEG 6493
		 	if(JsonService){
        		GetWeightDataOfEmployee_inputparam["httpheaders"] = setRESTHeader();
      		}else {		       
		        GetWeightDataOfEmployee_inputparam["deviceID"] = gblDeviceID;
		        GetWeightDataOfEmployee_inputparam["accessToken"] = glbSPAuthToken;
		        GetWeightDataOfEmployee_inputparam["SPID"] = glbEmployeeId;
		        GetWeightDataOfEmployee_inputparam["HeaderDate"] = glbHeaderDate;
		        GetWeightDataOfEmployee_inputparam["Source"] = gblSourceVal;		        
		    }
		     GetWeightDataOfEmployee_inputparam["MemberID"] = employeeData['hdnEmployeeID'];
		    //**End
	    	
	    	GetWeightDataOfEmployee = Network.makeServiceCall(GetWeightDataOfEmployee_inputparam, getWeightDataOfEmployeeViaWSCallback, false); //true to allow offline data access
    		
    	}
    
    	
		function getWeightDataOfEmployeeViaWSCallback(status,GetWeightDataOfEmployeeResult){
			try{
				if(status === 400){
					if(GetWeightDataOfEmployeeResult['opstatus'] == 0){
						removeProgressView();
						kony.print("::GetWeightDataOfEmployeeResult::"+JSON.stringify(GetWeightDataOfEmployeeResult));

							if(GetWeightDataOfEmployeeResult && GetWeightDataOfEmployeeResult['MemberWeightList'] && GetWeightDataOfEmployeeResult['MemberWeightList'].length > 0){ //** MEG 6493
								
								EmpWeightData = [];
								for(var i=0; i< GetWeightDataOfEmployeeResult['MemberWeightList'].length; i++){
									var tmpObj = {};
									var v = GetWeightDataOfEmployeeResult['MemberWeightList'][i];
									tmpObj.IsAtndgMeeting = v.IsAttendingMeeting;
	     							tmpObj.MemberID = v.MemberID;
	     							tmpObj.LocationID = v.LocationID;
									tmpObj.WeekNumber = v.WeekNo;
									tmpObj.WeightLoss = v.WeightLoss
									tmpObj.WeighInDate = v.WeighInDate;
									tmpObj.Weight = v.Weight;
									tmpObj.WeeklyPointsAllowance = v.WeeklyPointsAllowance;
									tmpObj.Height = v.Height
									tmpObj.DailyPtTarget = v.DPT;
									kony.print("tmpOBJ---"+JSON.stringify(tmpObj));
									EmpWeightData.push(tmpObj);
								}
								//insert weight data to locat db 
								
								var whereCond = "where MemberID = '"+employeeData.hdnEmployeeID+"'";
								DBWeighDetailsController.remove(whereCond, addEmpWeightToLocalDb, eventErrorCallBack, false)
								
							}
							else{
								callback.call(null,false,0);
							}
						
					}
				}
				else if (status == 300) {
						removeProgressView();	
	                    //Callback - Network Error
	                    CommonErrHandler.networkError(status, GetWeightDataOfEmployeeResult);
	                    callback.call(null,false,0);
	            }
			}
			catch (e) {
	// todo: handle exception
				removeProgressView();
				GlobalException(e);
				
			}
			
		}
		
		function addEmpWeightToLocalDb(){
			DBWeighDetailsController.createAll(EmpWeightData, function(){
					EmpWeightData = _.sortBy(EmpWeightData, function(w) {
						return w.WeighInDate;
					});
					EmpWeightData = EmpWeightData.reverse();
					callback.call(null,true,EmpWeightData[0].Weight); // return last weight of Employee
				}, eventErrorCallBack, false);
		}	
    }
}
