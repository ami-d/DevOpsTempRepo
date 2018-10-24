var ActivationStatusEnum = {
    0: "None",
    1: "PreActivated",
    2: "Activated",
    3: "Failure"
};


var boActivation = {

    setActivationInfoForMember: function(memberInfoObj,viewCallBack) {
    	kony.print("IN setActivationIconForMember == "+JSON.stringify(memberInfoObj));
    	
    	var selectedMemberID = memberInfoObj["MemberID"];
    	var selectedMemberCouponCode =  memberInfoObj["CouponCode"];
    	if (memberInfoObj["SubscriptnType"] == "MonthlyPass" || memberInfoObj["SubscriptnType"] == "Monthly Pass") { //check MP member
    		if(!isNaN(selectedMemberID)){ // member data synced
    			if(checkIfNetworkIsAvailable()){
					boActivation.getActivtionInfoFromWS(selectedMemberID,selectedMemberCouponCode,viewCallBack,function(memberActivationInfo){ // get activation detail from web service
						boActivation.addUpdateActivationDetailsToLocalDB(memberActivationInfo, function(){ //add or update activation detail in DB
							boActivation.getMemberActivationStatusFromDB(memberInfoObj,viewCallBack); // get the updated activation status from DB
						});
					});
				}else{
					viewCallBack.call(null);
				}
    		}else{ // Local member not synced yet
    			boActivation.getMemberActivationStatusFromDB(memberInfoObj,viewCallBack);// get the updated activation status from DB
    		}
    	}
    },
    getActivtionInfoFromWS: function(memberID,couponCode,viewCallBack,callBack){
    
    	function getActivtionInfoFromWSCallback(status, MemberActivationInfo, processOffline) {
    		removeProgressView();
    		kony.print(" respomse = " + JSON.stringify(MemberActivationInfo));
    	
		    kony.print(" MemberActivationInfo = " + JSON.stringify(MemberActivationInfo.MemberSubscription));
		   	kony.print(" MemberActivationInfo.ActivationStatus = " + JSON.stringify(MemberActivationInfo.ActivationStatus));
		   	
		    if (status == 400) {
				if(MemberActivationInfo && MemberActivationInfo.MemberSubscription.length >0 && (MemberActivationInfo.ActivationStatus != ActivationStatusEnum[0])){
					callBack.call(null,MemberActivationInfo);
				
				}else if((MemberActivationInfo.ActivationStatus == ActivationStatusEnum[0])) {
					//Identify the member as localy processed preactivated MP
					function getMPMemberSuccessCallback(res)
					{
						kony.print("getMPMemberSuccessCallback ::res:"+JSON.stringify(res));
						if (res.length > 0) {
							var memberInfo = res[0];
							memberInfo.isLocalyPreActivatedMP = true;
							viewCallBack.call(null,memberInfo);
						}
					}
					var whereClause = "where MemberID='"+memberID+"' and CouponCode='"+couponCode+"'";
       				DBPreActivationController.find(whereClause, getMPMemberSuccessCallback, eventErrorCallBack);
				}else {
					viewCallBack.call(null);
				}
				
		    }else{
		    	viewCallBack.call(null);
		    }
		}
    	try {
	        var MemberActivation_inputparam = {};
	        MemberActivation_inputparam["serviceID"] = Services.GetMemberActivation;
	        MemberActivation_inputparam["httpheaders"] = {};
		    MemberActivation_inputparam["httpconfigs"] = {};
	        
	          //** MEG 6493
		 	if(JsonService){
        		MemberActivation_inputparam["httpheaders"] = setRESTHeader();
      		}else {		      
		        MemberActivation_inputparam["deviceID"] = gblDeviceID;
		        MemberActivation_inputparam["accessToken"] = glbSPAuthToken;
		        MemberActivation_inputparam["SPID"] = glbEmployeeId;
		        MemberActivation_inputparam["Source"] = gblSourceVal;
		        MemberActivation_inputparam["HeaderDate"] = "";		        
		    }
		    MemberActivation_inputparam["MemberID"] = memberID;
		    //** End
	        kony.print(" --> MemberActivation_inputparam = " + JSON.stringify(MemberActivation_inputparam));
	        MemberActivationHandle = Network.makeServiceCall(MemberActivation_inputparam, getActivtionInfoFromWSCallback, true); //true to allow offline data access
	
	    } catch (e) {
	        GlobalException(e);
	        removeProgressView();
	        viewCallBack.call(null);
	    }
	    
    },
    addUpdateActivationDetailsToLocalDB : function(memberActivationInfoObj,callBack){

    	kony.print(":::: addUpdateActivationDetailsToLocalDB memberActivationInfoObj=" + JSON.stringify(memberActivationInfoObj));
    	var memberActivationInfo = memberActivationInfoObj.MemberSubscription;
    	var couponCode = glbCouponCode;//need to uncommente..this is for tesing _.find(memberActivationInfo, function (MemberActivation) { return 'CouponCode' in MemberActivation }).CouponCode;
    	var memberActivationStatus="";
    	
    	switch (memberActivationInfoObj.ActivationStatus) {
			case ActivationStatusEnum[2]:
				memberActivationStatus = "true";
				break;
			case ActivationStatusEnum[3]:
				memberActivationStatus = "false";
				break;
			default:
				memberActivationStatus="";
				break;
		}
    	function getMemberActivationAlreadyExistsCallBack(res){
    		kony.print(":::: getMemberActivationAlreadyExistsCallBack res=" + JSON.stringify(res));
    		if(res.length>0){
    			function updateActivationSuccess() {
					kony.print("IN updateActivationSuccess");
					callBack.call(null);
				}
				var memberActivationInfoObj_update = {};
					
				memberActivationInfoObj_update.ActivationStatus = memberActivationStatus;
				memberActivationInfoObj_update.ActivationDate = "0001-01-01T00:00:00";
				
				kony.print(":::: memberActivationInfoObj_update =" + JSON.stringify(memberActivationInfoObj_update));	
				whereClause = "where MemberID='"+glbMemberId+"' and CouponCode='"+couponCode+"'";
				
				boActivation.updateOnPreActivation(whereClause,memberActivationInfoObj_update,updateActivationSuccess);

    		}else{
    		
    			function createActivationSuccess(res) {
					kony.print("IN createActivationSuccess");
					callBack.call(null);
				}
				var memberActivationInfoObj_create = {};
				
				memberActivationInfoObj_create.ActivationDate = _.find(memberActivationInfo, function (MemberActivation) { return 'LastUsedDate' in MemberActivation }).LastUsedDate;
				memberActivationInfoObj_create.ActivationStatus = memberActivationStatus;
				memberActivationInfoObj_create.PassDuration = _.find(memberActivationInfo, function (MemberActivation) { return 'ProgramDuration' in MemberActivation }).ProgramDuration;
				memberActivationInfoObj_create.PassType = _.find(memberActivationInfo, function (MemberActivation) { return 'SubscriptionType' in MemberActivation }).SubscriptionType;
				memberActivationInfoObj_create.CouponCode = couponCode;
				memberActivationInfoObj_create.ExpirationDate = _.find(memberActivationInfo, function (MemberActivation) { return 'ExpirationDate' in MemberActivation }).ExpirationDate;
				memberActivationInfoObj_create.PreactivationDate = _.find(memberActivationInfo, function (MemberActivation) { return 'CreatedDate' in MemberActivation }).CreatedDate;
				memberActivationInfoObj_create.SaleTransactnId = null;
				memberActivationInfoObj_create.MemberID = glbMemberId;
				
				memberActivationInfoObj_create.MtngOccrID = glbMeetingNum;
				memberActivationInfoObj_create.MeetingDate = glbMeetingDate;
				memberActivationInfoObj_create.LocationID = glbLocationID;
				kony.print(":::: memberActivationInfoObj_create =" + JSON.stringify(memberActivationInfoObj_create));			
				DBPreActivationController.create(memberActivationInfoObj_create,createActivationSuccess,eventErrorCallBack,false);
    		}
    	}
    	var whereClause = "where MemberID='"+glbMemberId+"' and CouponCode='"+couponCode+"'";
       	DBPreActivationController.find(whereClause, getMemberActivationAlreadyExistsCallBack, eventErrorCallBack);
    
    },
    getMemberActivationStatusFromDB: function(memberInfoObj,callBack) {
    	function getMemberActivationCallBack(res){
    	kony.print(":::: getMemberActivationStatusFromDB res=" + JSON.stringify(res));
    		if(res.length>0){
    			var v = res[0];
    			
    			callBack.call(null,v);//kony.sync.getString(v.ActivationStatus));
    		}
    	}
		var whereClause = "where CouponCode='"+memberInfoObj.CouponCode+"'";
       	DBPreActivationController.find(whereClause, getMemberActivationCallBack, eventErrorCallBack);
    },
    activateMemberMPByWS: function(callBack){
    
    	function getActivtionFromWSCallback(status, MemberActivationInfo, processOffline) {
    		removeProgressView();
    	
    		kony.print("activateMemberMPByWS respomse = " + JSON.stringify(MemberActivationInfo));
    	
		    if (status == 400) {
				function updateActivationSuccess() {
					kony.print("IN updateActivationSuccess");
					callBack.call(null);
				}
				var memberActivationInfoObj_update = {};
					
				memberActivationInfoObj_update.ActivationStatus = MemberActivationInfo.ActivationStatus;
				memberActivationInfoObj_update.ActivationDate = MemberActivationInfo.ActivationDate;//_.find(MemberActivationInfo.MemberSubscription, function (MemberActivation) { return 'LastUsedDate' in MemberActivation }).ExpirationDate;
				
				kony.print(":::: memberActivationInfoObj_update =" + JSON.stringify(memberActivationInfoObj_update));
				var whereClause = "where MemberID='"+glbMemberActivationStatusInfo.memberID+"' and CouponCode='"+glbMemberActivationStatusInfo.couponCode+"'";
				kony.print("IN activateMemberMPByWS whereClause" +whereClause);
				boActivation.updateOnPreActivation(whereClause,memberActivationInfoObj_update,updateActivationSuccess);
		    }
		}
    	try {
	        var MemberActivation_inputparam = {};
	        MemberActivation_inputparam["serviceID"] = Services.ActivateMP;
	        MemberActivation_inputparam["httpheaders"] = {};
		    MemberActivation_inputparam["httpconfigs"] = {};
	        
	        //** MEG 6493
		 	if(JsonService){
        		MemberActivation_inputparam["httpheaders"] = setRESTHeader();
      		}else {
		       
		        MemberActivation_inputparam["DeviceID"] = gblDeviceID;
		        MemberActivation_inputparam["AccessToken"] = glbSPAuthToken;
		        MemberActivation_inputparam["EmployeeID"] = glbEmployeeId;
		        MemberActivation_inputparam["Source"] = gblSourceVal;		      
		        MemberActivation_inputparam["HeaderDate"] = "";		       
		    }
		     MemberActivation_inputparam["MemberID"] = glbMemberActivationStatusInfo.memberID;
		     MemberActivation_inputparam["CouponCode"] = glbMemberActivationStatusInfo.couponCode;
		    //** End
	        kony.print(" --> MemberActivation_inputparam = " + JSON.stringify(MemberActivation_inputparam));
	        MemberActivationHandle = Network.makeServiceCall(MemberActivation_inputparam, getActivtionFromWSCallback, true); //true to allow offline data access
	
	    } catch (e) {
	        GlobalException(e);
	        removeProgressView();
	    }
	    
    },
    updateOnPreActivation : function(whrCondition,memberInfo,callBack){
    	var transQuery = "select * from PreActivation "+whrCondition;
    	var preActObj = {};
	    	function preactfindsuccess(res){
	    		kony.print("response::"+JSON.stringify(res));
	    		if(res.length > 0){
	    			preActObj = res[0];
	    			deleteOnPreActivation();
	    		}else{
	    			kony.print("No Records found of the member");
	    		}	
	    	}
	    	function deleteOnPreActivation(){
	    		function preactremovesuccess(res){
    				kony.print("Record successfully removed from local database.");
    				addOnPreActivation();
    			}
    			com.kony.WeightWatchers.MemberSyncScope.PreActivation.removeDeviceInstance(whrCondition,preactremovesuccess,eventErrorCallBack);
	    	}
	    	function addOnPreActivation() {
	    		function preactaddsuccess(res){
        			kony.print("record is added succesfully in local Database");
        			callBack.call(null);
        		}
        		kony.print("addOnPreActivation preActObj:: BEFORE"+JSON.stringify(preActObj));
        		
        		preActObj.ActivationStatus=memberInfo.ActivationStatus;
        		preActObj.ActivationDate=memberInfo.ActivationDate;
        		kony.print("addOnPreActivation preActObj:: AFTER"+JSON.stringify(preActObj));
    			DBPreActivationController.create(preActObj,preactaddsuccess,eventErrorCallBack,false); // false as for mark upload
	    	}
	    	   
	    kony.print("::PreActivation:whrCondition: "+whrCondition);
        kony.sync.single_select_execute(kony.sync.getDBName(), transQuery, null, preactfindsuccess, eventErrorCallBack);

    }
};
