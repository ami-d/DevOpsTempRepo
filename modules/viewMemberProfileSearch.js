var gblDOBPM, gblEmail, gblSybType, gblSubID, gblStartDatePM, glbSubscriptionID;
var gblHeightPM, gblGenderPM;
var gblStartWeightPM;
var gblGoalWeightPM;
var tempIndex;

/**
 * Function for change skin of particualar row of segment
 * @param {} seg (required segment object)
 * @param {} indexArr (required index for which need to change row skin)
 * @param {} templateSkin (template which is applied for row)
 */

function changeSkinOfSegRow(seg, indexArr, templateSkin) {

    var propertyName = "template";
    var propertyValue = templateSkin;
    var data = seg.data;

    for (var k = 0; k < indexArr.length; k++) {
        //var dataForRowTemp = {};
        for (var i = 0; i < data.length; i++) {
            if (indexArr[k] == i) {
                data[i][propertyName] = propertyValue;
            }
        }

    }
    seg.setData(data);
}


function eventonClickvbxProcessMemberForProfileSearch() {
    try {
        var selectedData, flowforcart;
        kony.print("kony.application.getCurrentForm().id = " + kony.application.getCurrentForm().id);
        
     
        
        if (kony.application.getCurrentForm().id == frmMemberProfileSearch.id) {
        
        	glbFormName = frmProcessMember; //Added By PK MEG-4797
        	
            var selectedIndex = frmMemberProfileSearch.segMemberProfileSearch.selectedIndex;
            kony.print("selectedIndex Ami  = " + selectedIndex);
            kony.print("frmMemberProfileSearch.segMemberProfileSearch.data.length  = " + frmMemberProfileSearch.segMemberProfileSearch.data.length);
            if(selectedIndex == null && frmMemberProfileSearch.segMemberProfileSearch.data.length == 1){
            	selectedIndex = [0,0];
            	tempIndex = 0;
            }

            var selectedRow = parseInt(selectedIndex[1]);
            selectedData = frmMemberProfileSearch.segMemberProfileSearch.data[selectedRow];

            kony.print("---------------->  if  " + JSON.stringify(selectedData));
            flowforcart = selectedData["FlowForCart"];
            glbSelectedMemberSessionNumber = checkValidString(selectedData.SessionNumber) ? selectedData.SessionNumber : 1;
            glbRegNoForProcess = checkValidString(selectedData["RegNo"]) ? selectedData["RegNo"] : 0;
            glbProgDurationForProcess = checkValidString(selectedData["ProgramDuration"]) ? selectedData["ProgramDuration"] : 0;
            kony.print("IF glbRegNoForProcess =====>" + glbRegNoForProcess);
            glbMemberType = selectedData["MembershipType"];
            
            selectedMemberData = selectedData; // MEG-5581
        } else if (kony.application.getCurrentForm().id == frmHomeScreen.id) {
            kony.print("FROM VIEW WE ARE GOING TO PROCESS MEMBER USING FLAG");
            selectedData = selectedMemberData;
            kony.print("---------------->  else if 11 " + JSON.stringify(selectedData));
            flowforcart = selectedData["FlowForCart"];
            glbSelectedMemberSessionNumber = checkValidString(selectedData.SessionNumber) ? selectedData.SessionNumber : 1;
            glbRegNoForProcess = checkValidString(selectedData["RegNo"]) ? selectedData["RegNo"] : 0;
            glbProgDurationForProcess = checkValidString(selectedData["ProgramDuration"]) ? selectedData["ProgramDuration"] : 0;
            kony.print("ELSEIF glbRegNoForProcess =====>" + glbRegNoForProcess);
        } else if (kony.application.getCurrentForm().id == frmViewMemberProfile.id) {
        	
        	glbFormName = frmProcessMember; //Added By PK MEG-4797
        	
            kony.print("FROM VIEW WE ARE GOING TO PROCESS MEMBER USING FLAG");
            selectedData = selectedMemberData;
            kony.print("selectedMemberData = " + JSON.stringify(selectedMemberData));
            kony.print("---------------->  else if 22 " + JSON.stringify(selectedData));
            flowforcart = selectedData["FlowForCart"];
            glbSelectedMemberSessionNumber = checkValidString(selectedData.SessionNumber) ? selectedData.SessionNumber : 1;
            glbRegNoForProcess = checkValidString(selectedData["RegNo"]) ? selectedData["RegNo"] : 0;
            glbProgDurationForProcess = checkValidString(selectedData["ProgramDuration"]) ? selectedData["ProgramDuration"] : 0;
            kony.print("ELSEIF Second =====>" + glbRegNoForProcess);
        }
        
        kony.print(selectedData.MemberStatus+"::::selectedData.MemberStatus == MemberStatusEnum[2]==="+(selectedData.MemberStatus == MemberStatusEnum[2]));
        kony.print("SJ=====>>>>>"+selectedData.RegStatus +"=="+ MemberRegEnum.Online);
        if(selectedData.RegStatus == MemberRegEnum.Online && isSubIdSearched == true){	//Added for MEG-6550
        	kony.print("Online Member - Advance search by fname and lname");
        	createAdvancedSearchWhereClause(selectedData.lblMPSFirstName, selectedData.lblMPSLastName, "", "", "");
        } else if(selectedData.MemberStatus == MemberStatusEnum[2] && in_array(deviceLocale,Countries["CA"])){
        	showInActiveConfirmation(kony.i18n.getLocalizedString("alretForInactive"),function(res){
        		kony.print("::Res::---"+res);
        		if(res){
        			continueProcessMember();
        		}
				else{
					return;
				}
        	})
        } else{
			continueProcessMember();
		}
		
        function continueProcessMember(){
			kony.print("::DJP::glbProgDurationForProcess=" + glbProgDurationForProcess);
			kony.print("Need SelectData =====" + JSON.stringify(selectedData));

			boMonitor.log("Process Member", "vboxProcessMember", selectedData, FlowForMonitor.ProcessMember);

			// Added by Praveen Kalal
			glbLastGlbSubType = selectedData["SubscriptnType"];
			glbLastCouponCode = selectedData["CouponCode"];
			glbLastExpDate = selectedData["ExpirationDate"];
			//Ended By Praveen Kalal


			glbSelectedMemberMtngOccrID = selectedData["MtngOccrID"];
			
			clearLinkInfoForOnlineMember();
			linkObj.EnterpriseID = selectedData["EnterpriseID"];
			linkObj.UserName = selectedData["UserName"];
			linkObj.EmailID = selectedData["Email"];
			kony.print("linkObj HomeScreen-->>"+JSON.stringify(linkObj));
			if (linkObj != undefined && linkObj != null && checkValidString(linkObj.EnterpriseID) && linkObj.EnterpriseID != "0") {
				setLinkInfoForOnlineMember(linkObj); 
			}

			glbMembershipType = checkValidString(selectedData["MemberRole"]) ? selectedData["MemberRole"] : "Member";
			glbIsSelectedMemberExpired = false;
			if (selectedData["SubscriptnType"] == "MonthlyPass") {
				isOnlineMPMember = true;
				glbIsSelectedMemberExpired = checkExpirationDate(selectedData["ExpirationDate"]);
              	//RTB-126
              	if (glbIsSelectedMemberExpired) {
                    glbIsSelectedMemberExpired = checkGracePeriod(selectedData["IsGracePeriod"]);
                }
			} else {
				isOnlineMPMember = false;
			}
			kony.print("::glbIsSelectedMemberExpired=" + glbIsSelectedMemberExpired + " selectedData[ExpirationDate]=" + selectedData["ExpirationDate"]);
			kony.print("glbMembershipType===" + glbMembershipType);
			kony.print("----------------> coming from case1 - seetting glbSelectedMemberSessionNumber = " + glbSelectedMemberSessionNumber);
			if (!IsNoMeetingSelected) {
				if (glbMeetingStatus == "Open") {
					if (flowforcart == false) //Condition added for Phase 1
					{	
                      	isBarcodeScanned = false;
						kony.print("Calling ProcessMemberAfterSearch");
                      	if(IsAWSLocationEnabled() && selectedData["SubscriptnType"] == "MonthlyPass"){
                        	boEnrollMember.checkActiveMPMember(selectedData["CouponCode"],glbIsSelectedMemberExpired,function(isActive){
                                if(isActive){
                                  	alertForMessages(kony.i18n.getLocalizedString("strMsgIsActive"));
                                }else{
									ProcessMemberAfterSearch();
                                }
                            });  
                        }else{
                        	ProcessMemberAfterSearch();  
                        }
                      	
						
					} else //Code for Phase1
					{
						var isOnlineMember = selectedData["isOnlineSearch"];
						glbMemberId = selectedData["MemberID"];
						kony.print("selectedData[isOnlineSearch] :: " + isOnlineMember);
						if (isOnlineMember) {
							for (var i in memberOnlineSearchResultSet["MembersList"]) {
								var v = memberOnlineSearchResultSet["MembersList"][i];
								kony.print("boMemberProfile  ====" + JSON.stringify(v));
								kony.print("Member Id is : " + v.ServerMemberID.toString() + "    " + glbMemberId.toString());
								if (v.ServerMemberID.toString() == glbMemberId.toString()) {
									addMemberdataToLocaldb(v, true);
									break;
								}
							}
						}
						IsProductFlowFromSearch = true;
						kony.print("selectedData[lblMPSLastName]====>>>>>" + selectedData["lblMPSLastName"]);
						kony.print("selectedData[lblMPSLastName]====>>>>>" + selectedData["lblMPSFirstName"]);
						kony.print("selectedData[SubscriptnType]====>>>>>" + selectedData["SubscriptnType"]);
						var lname = selectedData["lblMPSLastName"].trim();
						var fname = selectedData["lblMPSFirstName"].trim();
						glbSubscriptionID = selectedData["SubscriptionID"];
						if (fname.length > 6) {
							fname = fname.substring(0, 4) + "...";
						}
						if (lname.length > 6) {
							lname = lname.substring(0, 4) + "...";
						}

						gblSubType = selectedData["SubscriptnType"];
						//If member is expired
						if (glbIsSelectedMemberExpired) {
							gblSubType = "PAYG";
						}

						kony.print("SUBSCRIPTION TYPE:0>>" + gblSubType);
						kony.print("glbMemberType == " + glbMemberType);

						gblExpirationDate = selectedData["ExpirationDate"];
						kony.print("::DJP:: 22 Setting gblExpirationDate=" + gblExpirationDate);
						glbCouponCode = selectedData["CouponCode"];

						deviceLevelPreRegNo = checkValidString(selectedData["RegNo"]) ? selectedData["RegNo"] : "1";
						glbRegNo = checkValidString(selectedData["RegNo"]) ? selectedData["RegNo"] : "1";
						glbRegNoForProcess = checkValidString(selectedData["RegNo"]) ? selectedData["RegNo"] : "1";
						if (!checkValidString(gblSubType)) {
							gblSubType = "PAYG";
						}
						if (gblSubType == "MonthlyPass" || gblSubType == "Monthly Pass") {
							if (glbIsSelectedMemberExpired) {
								//If Member has expired, use PAYG
								gblSubType = "PAYG";
								frmDirectSaleProductList.imgLifetime.src = "";
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = "";//Modified by Studio Viz
								frmDirectSaleProductList.imgMonthlyPass.src = "";
								frmDirectSaleProductList.imgLifetime.setVisibility(false);
							} else {
								frmDirectSaleProductList.imgMonthlyPass.src = "icn_monthly_pass_header.png";
								frmDirectSaleProductList.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386;
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strMPAbbr");//Modified by Studio Viz
							}

							if (in_array(glbMemberType.toUpperCase(),lifeTimeTypes)) {
								frmDirectSaleProductList.imgLifetime.setVisibility(true);
								frmDirectSaleProductList.imgLifetime.src = "icn_lifetime_member_header.png";
							} else {
								frmDirectSaleProductList.imgLifetime.src = "";
								frmDirectSaleProductList.imgLifetime.setVisibility(false);
							}
						} else if (gblSubType == "SeventeenWeekPass" || gblSubType == "17 Week Pass") {
							frmDirectSaleProductList.imgMonthlyPass.src = "icn_17_week_pass_header.png";
							frmDirectSaleProductList.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386;
							frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = "17 Week ";//Modified by Studio Viz
							if (in_array(glbMemberType.toUpperCase(),lifeTimeTypes)) {
								frmDirectSaleProductList.imgLifetime.setVisibility(true);
								frmDirectSaleProductList.imgLifetime.src = "icn_lifetime_member_header.png";
							} else {
								frmDirectSaleProductList.imgLifetime.src = "";
								frmDirectSaleProductList.imgLifetime.setVisibility(false);
							}
						} else if (gblSubType == MemberSubscriptionTypeEnumBatch["20 Week Pass"]) {
							frmDirectSaleProductList.imgMonthlyPass.src = "icn_20_week_pass_header.png";
							frmDirectSaleProductList.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386;
							frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("str20WEEKSAbbr");//Modified by Studio Viz
							if (in_array(glbMemberType.toUpperCase(),lifeTimeTypes)) {
								frmDirectSaleProductList.imgLifetime.setVisibility(true);
								frmDirectSaleProductList.imgLifetime.src = "icn_lifetime_member_header.png";
							} else {
								frmDirectSaleProductList.imgLifetime.src = "";
								frmDirectSaleProductList.imgLifetime.setVisibility(false);
							}
						} else if (gblSubType == "Series") {

							frmDirectSaleProductList.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386;
							//MEG-5688
							if (in_array(glbMemberType.toUpperCase(),lifeTimeTypes)) {
                              	kony.print("7280 -- 2");
								frmDirectSaleProductList.imgLifetime.setVisibility(true);
								frmDirectSaleProductList.imgLifetime.src = "icn_lifetime_member_header.png";
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strSeriesAbbr"); //** MEG 7280//Modified by Studio Viz
								frmDirectSaleProductList.imgMonthlyPass.src = "";
							} else {
								frmDirectSaleProductList.imgLifetime.src = "";
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strSeriesAbbr");//Modified by Studio Viz
								frmDirectSaleProductList.imgMonthlyPass.src = "";
								frmDirectSaleProductList.imgLifetime.setVisibility(false);
							}
						} else if (gblSubType == "PAYG" || gblSubType == kony.i18n.getLocalizedString("strPayg")) {

							frmDirectSaleProductList.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386;
							//MEG-5688
							if (in_array(glbMemberType.toUpperCase(),lifeTimeTypes)) {
								frmDirectSaleProductList.imgLifetime.setVisibility(true);
								frmDirectSaleProductList.imgLifetime.src = "icn_lifetime_member_header.png";
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strLTAbbr");//Modified by Studio Viz
								frmDirectSaleProductList.imgMonthlyPass.src = "";
							} else {
								frmDirectSaleProductList.imgLifetime.src = "";
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strPAYGAbbr");//Modified by Studio Viz
								frmDirectSaleProductList.imgMonthlyPass.src = "icn_payment_header.png";
								frmDirectSaleProductList.imgLifetime.setVisibility(false);
							}
						} else {
							frmDirectSaleProductList.lblExpDate.text = changeDateFormate(gblExpirationDate, kony.i18n.getLocalizedString("strDisplayDateFormat"));//** MEG 6386;
							if (in_array(glbMemberType.toUpperCase(),lifeTimeTypes)) {
								frmDirectSaleProductList.imgLifetime.setVisibility(true);
								frmDirectSaleProductList.imgLifetime.src = "icn_lifetime_member_header.png";
								frmDirectSaleProductList.imgMonthlyPass.src = "";
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strLTAbbr");//Modified by Studio Viz
							} else {
								frmDirectSaleProductList.imgLifetime.src = "";
								frmDirectSaleProductList.imgMonthlyPass.src = "icn_payment_header.png";
								frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.text = getLocalizedString("strPAYGAbbr");//Modified by Studio Viz
								frmDirectSaleProductList.imgLifetime.setVisibility(false);
							}
						}
						hboxHeaderWithCancelBtn.lblTitle.text = "";
						hboxHeaderWithCancelBtn.lblTitle.text = kony.i18n.getLocalizedString("strHeaderSellMember");
						ClearTangibleProductsSegments();
						frmDirectSaleProductList.scrollbox12443534679147550.containerHeight = 43;
						frmDirectSaleProductList.scrollbox12443534677872493.containerHeight = 73;
						frmDirectSaleProductList.hboxSubHeader.isVisible = true;
						frmDirectSaleProductList.vbox12443534672611876.setEnabled(false);
						frmDirectSaleProductList.lblProcessMemberSubHeaderlbl2studio5.isVisible = true;//Modified by Studio Viz
						frmDirectSaleProductList.vbox198407320743.isVisible = true;
						frmDirectSaleProductList.vbox12443534672611876.isVisible = false;

						frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = fname + " " + lname;//Modified by Studio Viz
						frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text = toTitleCase(frmDirectSaleProductList.lblProcessMembersubHeader1studio6.text);//Modified by Studio Viz
						
						frmDirectSaleProductList.lblProcessMembersubSubHeaderstudio4.text = kony.i18n.getLocalizedString("strLblPayment");//Modified by Studio Viz
						frmDirectSaleProductList.show();
					}

				} else {
					isClickedOnIcon = "Process";
					alertForEnrollAddInTalliedMeetingConfirmation();
				}
			} else {
				alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
			}
		}
    } catch (e) {
        GlobalException(e);
    }
}

function ProcessMemberAfterSearch() {
    kony.print("FLOW SET:::-->>" + IsViewMember);
    var selectedData;
    kony.print("::DJP 00 :: kony.application.getCurrentForm().id" + kony.application.getCurrentForm().id);
    if (kony.application.getCurrentForm().id == frmMemberProfileSearch.id) {
        kony.print("::DJP:: kony.application.getCurrentForm().id" + kony.application.getCurrentForm().id);
        kony.print("::DJP::frmMemberProfileSearch.segMemberProfileSearch.selectedIndex=" + frmMemberProfileSearch.segMemberProfileSearch.selectedIndex);
        var selectedRow;
        var selectedIndex = frmMemberProfileSearch.segMemberProfileSearch.selectedIndex;
        if (selectedIndex) {
            selectedRow = parseInt(selectedIndex[1]);
            tempIndex = selectedRow;
        } else {
            selectedRow = parseInt(tempIndex);
        }
        kony.print("::DJP:: selectedIndex=" + JSON.stringify(selectedIndex));


        kony.print("::DJP:: Setting tempIndex=" + tempIndex);
        selectedData = frmMemberProfileSearch.segMemberProfileSearch.data[selectedRow];
        kony.print("frmMemberProfileSearch --> Selected:-> " + JSON.stringify(selectedData));


    } else if (kony.application.getCurrentForm().id == frmHomeScreen.id) {
        kony.print("frmHomeScreen --> FROM VIEW WE ARE GOING TO PROCESS MEMBER USING FLAG");
        selectedData = selectedMemberData;
        kony.print("frmHomeScreen --> Selected:-> " + JSON.stringify(selectedMemberData));
    } else if (kony.application.getCurrentForm().id == frmViewMemberProfile.id) {
        kony.print("frmViewMemberProfile --> FROM VIEW WE ARE GOING TO PROCESS MEMBER USING FLAG");
        selectedData = selectedMemberData;
        kony.print("frmViewMemberProfile --> Selected:-> " + JSON.stringify(selectedMemberData));
    }

    //AMi add MEG-3147

    if (isTermedMemberForActive)
        selectedData["MemberStatus"] = MemberStatusEnum[1];

    //Ami add- MEG-3147
    //Ami add-MEG-3798
    if (selectedData["MemberStatus"].toUpperCase() == MemberStatusEnum[4].toUpperCase()) {
        selectedData["MemberStatus"] = MemberStatusEnum[1];
    }

    
    glbRegNo = selectedData["RegNo"]; // Process member
    glbRegNoForProcess = selectedData["RegNo"];

    

    gblSubType = selectedData["SubscriptnType"];
    kony.print("SUBSCRIPTION TYPE:0 --> gblSubType = " + gblSubType);
    gblExpirationDate = selectedData["ExpirationDate"];
    kony.print("::DJP:: 44 Setting gblExpirationDate=" + gblExpirationDate);
    glbCouponCode = selectedData["CouponCode"];
    
    if (!checkValidString(gblSubType)) {
        //Added by Ami- MEG- 3481
        gblSubType = "";
    }
    kony.print("selectedData[MemberStatus]------>>>" + selectedData["MemberStatus"]);
    kony.print("selectedData[MembershipType]------>>>" + selectedData["MembershipType"]);
    kony.print("selectedData[RegStatus]------>>>" + selectedData["RegStatus"]);
    userMissedWeekPass = selectedData["missWeekPass"]
    kony.print("Member ID Selected Data=======>>>" + JSON.stringify(selectedData));

    var isOnlineMember = selectedData["isOnlineSearch"];
    kony.print("selectedData[isOnlineSearch] :: " + selectedData["isOnlineSearch"]);
    glbMemberId = selectedData["MemberID"];
    if (selectedData["RegStatus"] == MemberRegEnum.Pre_Registered || selectedData["RegStatus"] == MemberRegEnum.Website || selectedData["RegStatus"] == MemberRegEnum.Online) {
        if (!IsNoMeetingSelected) {
        	
        	glbFormName = frmProcessMember; //Added By PK MEG-4797
        	
            MemberType = selectedData["MembershipType"];
            kony.print("selectedData[MembershipType] in Terminated------>>>" + selectedData["MembershipType"]);
            kony.print("Selected member status is : " + selectedData["RegStatus"]);
            deviceLevelPreRegNo = selectedData["PreRegNumber"];
            kony.print("glbMemberId in Reg Status------>>>" + glbMemberId);

            if (isOnlineMember) {
                for (var i in memberOnlineSearchResultSet["MembersList"]) {
                    var v = memberOnlineSearchResultSet["MembersList"][i];
                    kony.print("boMemberProfile  ====" + JSON.stringify(v));
                    kony.print("Member Id is : " + v.ServerMemberID.toString() + "    " + glbMemberId.toString());
                    if (v.ServerMemberID.toString() == glbMemberId.toString()) {
                    	
                    	boEnrollMember.generateDeviceLevelMemberID();
                    	
                        //addMemberdataToLocaldb(v, true);
                        termMemberInfo = new Object();
                        boMemberProfile.fillTermMemberInfoObjectOnline(v);
                        if (selectedData["RegStatus"] == MemberRegEnum.Pre_Registered) {
                            preRegisterdMember();
                        } else {
                            websiteMember();
                        }
                        break;
                    }
                }
            } else {
                var whrCondition = "";
                if (selectedData["RegStatus"] == MemberRegEnum.Pre_Registered) {
                    whrCondition = "where PreRegNumber = '" + deviceLevelPreRegNo + "'";
                    boHomeScreenSearch.getPreRegMemberDetailsByMemberID(whrCondition);
                } else {
                    whrCondition = "where MemberID = '" + glbMemberId + "'";
                    boHomeScreenSearch.getWebsiteMemberByUserID(whrCondition);
                }
            }
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
        }
    } else if (selectedData["MemberStatus"] == MemberStatusEnum[1] || selectedData["MemberStatus"] == MemberStatusEnum[2]) {
        
        if (!IsNoMeetingSelected) {
            kony.print("MemberID------>>>" + glbMemberId);

            if (isOnlineMember) {
                for (var i in memberOnlineSearchResultSet["MembersList"]) {
                    var v = memberOnlineSearchResultSet["MembersList"][i];
                    kony.print("boMemberProfile  ====" + JSON.stringify(v));
                    kony.print("Member Id is : " + v.ServerMemberID.toString() + "    " + glbMemberId.toString());
                    if (v.ServerMemberID.toString() == glbMemberId.toString()) {
                        addMemberdataToLocaldb(v, true);
                        break;
                    }
                }
            }

            MemberType = selectedData["MembershipType"];
            kony.print("Memeber Type---" + selectedData["MembershipType"]);
            // Added by Dileep Chejerla
            if (MemberType == "LifeTime" || MemberType.toUpperCase() == "LIFETIME") {
                glbMemberType = MemberType;
            }

            kony.print("selectedData[lblMPSLastName]====>>>>>" + selectedData["lblMPSLastName"]);
            
            kony.print("selectedData[lblMPSLastName]====>>>>>" + selectedData["lblMPSFirstName"]);
            frmProcessMember.lblProcessMembersubHeader1.text = (selectedData["lblMPSFirstName"]).trim() + " " + (selectedData["lblMPSLastName"]).trim();
            frmProcessMember.lblProcessMembersubHeader1.text = toTitleCase(frmProcessMember.lblProcessMembersubHeader1.text);
            glbFirstNamePM = selectedData["lblMPSFirstName"];
            glbLastNamePM = selectedData["lblMPSLastName"];
            kony.print("REG NO:->>>>" + selectedData["RegNo"]);
            glbMembershipType = checkValidString(selectedData["MemberRole"]) ? selectedData["MemberRole"] : "Member";
          
			frmProcessMember.lblWeightLossFocusInfo.text = (selectedData["WeightLossFocus"] === 0 || selectedData["WeightLossFocus"] === '0' || selectedData["WeightLossFocus"] === false || selectedData["WeightLossFocus"] === 'false') ? kony.i18n.getLocalizedString("strLblNo") : kony.i18n.getLocalizedString("strLblYes");
            
            kony.print("glbMembershipType----" + glbMembershipType)
            if (selectedData["RegNo"] != undefined && selectedData["RegNo"] != null && selectedData["RegNo"] != "") {
                glbFormName.lblProcessMemberSubHeader4.text = selectedData["RegNo"]; //Added by Nikita
                kony.print("inside if --> REG NO:->>>>" + selectedData["RegNo"]);
            } else {
                glbFormName.lblProcessMemberSubHeader4.text = ""; //Added by Nikita
            }

            hboxEnrollHdrMain.lblCurrentMeeting.text = hboxNameSection.lblCurrentMeetingName.text;

            glbSubscriptionID = selectedData["SubscriptionID"];

            gblDOBPM = selectedData["OriginalDateOfBirth"];
            kony.print("gblDOBPM------>>>" + gblDOBPM);

            gblHeightPM = selectedData["Height"];
            kony.print("gblHeightPM------>>>" + gblHeightPM);

            gblGenderPM = selectedData["Gender"];
            kony.print("gblGenderPM------>>>" + gblGenderPM);

            gblEmail = selectedData["Email"];
            kony.print("selectedData[Email]" + JSON.stringify(selectedData));
            kony.print("gblEmail------>>>" + gblEmail);

            gblStartDatePM = selectedData["StartDate"];
            kony.print("gblStartDatePM------>>>" + gblStartDatePM);
            kony.print("selectedData[StartDate]------>>>" + selectedData["StartDate"]);

            gblStartWeightPM = selectedData["StartWeight"];
            kony.print("gblStartWeightPM------>>>" + gblStartWeightPM);
            kony.print("selectedData[StartWeight]------>>>" + selectedData["StartWeight"]);

            gblGoalWeightPM = selectedData["GoalWeight"];
            kony.print("gblGoalWeightPM------>>>" + gblGoalWeightPM);
            kony.print("selectedData[GoalWeight]------>>>" + selectedData["GoalWeight"]);

            kony.print("selectedData[MaintenanceMode] Ami====>>>>" + selectedData["MaintenanceMode"]);
            glbIsInMaintance = selectedData["MaintenanceMode"];
          
            //Header Template Enroll New Member assigned according to the Flow value changed
            if (deviceLocale == "fr_FR") {
                hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strProcessMember");
            } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
            {
                hboxEnrollHdrMain.lblHeaderName.text = kony.i18n.getLocalizedString("strProcessMember");
            }


           
            ClearVariables();
            IsFromPM = FlowForScreens.ProcessMember;
            glbIsFormPM=FlowForScreens.ProcessMember;
            boHomeScreenSearch.getSelectedMemberWeightDetails(glbMemberId, isOnlineMember);

            //This flag is used to determine the Process member flow

            // Query the weight sync objct , passing the devicemember id with latest weighInDate
            // get the weigh data and populate the data in the process member UI	
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
        }
    }
    // get the weigh data and populate the data in the process member UI	
    else if (selectedData["MemberStatus"] == MemberStatusEnum[3]) {
        if (!IsNoMeetingSelected) {
            MemberType = selectedData["MembershipType"];
            kony.print("selectedData[MembershipType] in Terminated------>>>" + selectedData["MembershipType"]);

            if (isOnlineMember) {
                for (var i in memberOnlineSearchResultSet["MembersList"]) {
                    var v = memberOnlineSearchResultSet["MembersList"][i];
                    kony.print("boMemberProfile  ====" + JSON.stringify(v));
                    kony.print("Member Id is : " + v.ServerMemberID.toString() + "    " + glbMemberId.toString());
                    if (v.ServerMemberID.toString() == glbMemberId.toString()) {
                        termMemberInfo = new Object();
                        addMemberdataToLocaldb(v, true);
                        boMemberProfile.fillTermMemberInfoObjectOnline(v);
                        if (!IsNoMeetingSelected) {
                            alertForTermed();
                        } else {
                            alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
                        }
                        break;
                    }
                }
            } else {
                var whrCondition = "where MemberID = '" + glbMemberId + "'";

                boHomeScreenSearch.getMemberDetailsByDeviceMemberID(whrCondition);
            }
        } else {
            alertForMessages(kony.i18n.getLocalizedString("strMsgNoMeetingSelected"));
        }
    }

}

function eventOnClickVboxSortAdvResult() {
    var obj = frmMemberProfileSearch.segMemberProfileSearch.data;
    if (obj != null && obj.length > 0) {
        var sortFlag = setSortFlagAdvResult();
        if (sortFlag) {
            frmMemberProfileSearch.imgSortHeader.src = "icn_sortby.png";
            frmMemberProfileSearch.segMemberProfileSearch.data = obj.sort(compareSearchedRes);
            
        } else {
            frmMemberProfileSearch.imgSortHeader.src = "icn_sortby_down.png";
            frmMemberProfileSearch.segMemberProfileSearch.data = obj.reverse(compareSearchedRes);
        }
    }
}

function compareSearchedRes(firstObj, secondObj) {
    if (firstObj.lblMPSLastName < secondObj.lblMPSLastName)
        return -1;
    if (firstObj.lblMPSLastName > secondObj.lblMPSLastName)
        return 1;
    if (firstObj.lblMPSLastName == secondObj.lblMPSLastName) {
        if (firstObj.lblMPSFirstName < secondObj.lblMPSFirstName)
            return -1;
        if (firstObj.lblMPSFirstName > secondObj.lblMPSFirstName)
            return 1;
    }
    return 0;
}


function setSortFlagAdvResult() {
    if (isSortAscendingAdv == true)
        isSortAscendingAdv = false;
    else
        isSortAscendingAdv = true;
    return isSortAscendingAdv;
}

//RTB-126
function checkGracePeriod(isGracePeriod){
  	//if isGracePeriod is true then MP has not expired. Hence returning false value for IsSelectedMemberExpired
  	if(isGracePeriod == true) 
       return false;
  	else
       return true;
}

//Function returns member has expired or not as per expiration date.
function checkGracePeriodByExpirationDate(expDate){
  kony.print("::ExpirationDate Check = " + expDate);
    if (checkValidString(expDate)) {
        var expDateFormatted = formattedDate(expDate);
        var diff = calculateDateDifference(new Date(), new Date(expDateFormatted));
        //if diff greater that 30 then expired otherwise in grace period
		kony.print("::Difference between dates:: = " + diff);
        return diff >= -30 ? false : true;
    }
    return true;
}
