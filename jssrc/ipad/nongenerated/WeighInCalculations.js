if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.es) === "undefined") {
    com.es = {};
}
/*
 *  Boolean varialbe to indicate whethere a member is free lifetime or a paid lifetime member. 
 *  Should be used for the member being processed. 
 *  This boolean is set via a call to com.es.weighincalculations.isFreeLifeTimeMember() asynchronously.
 */
var isFreeLifeTimeMember = false;
com.es.weighincalculations = {
    /**
     * Converts heigh in feet and inches to inches
     * @param {} heightInFeetsAndInches (string) E.g.  5'12", 6'0", 0'10", 4'1",  0'0"
     * @returns {} inches (number) rounding off the decimal value
     * 
     */
    ConvertFeetInchesToInches: function(heightInFeetsAndInches) {
        try {
            var n = heightInFeetsAndInches.indexOf("\"");
            var m = heightInFeetsAndInches.indexOf("'");
            if (m != -1 && n != -1) {
                var inches_tmp = heightInFeetsAndInches.substring(m + 1, n); // inches
                var feet = heightInFeetsAndInches.substring(0, m) // feet
                var inches = (parseFloat(inches_tmp)) + (parseFloat(feet) * 12);
                return Math.round(inches);
            }
            return 0;
        } catch (e) {
            GlobalException(e);
        }
    },
    ConvertHeight: function(heightInFeetsAndInches) {
        //alert("heightInFeetsAndInches------->>>"+heightInFeetsAndInches);
        //			alert("heightInFeetsAndInches[0]"+heightInFeetsAndInches[0]);
        try {
            var meter = 0;
            if (deviceLocale == "fr_FR") {
                meter = heightInFeetsAndInches / 100;
            } else //if(deviceLocale=="en_US" || deviceLocale=="en_CA")
            {
                var feetHeight = heightInFeetsAndInches[0];
                //alert("feetHeight------->>>"+feetHeight);
                var inchHeight = heightInFeetsAndInches[1];
                //alert("inchHeight------->>>"+inchHeight);
                var inchTemp = parseFloat(feetHeight) * 12;
                meter = ((inchTemp + parseFloat(inchHeight)) * 2.54) / 100;
                kony.print("ConvertHeight meter" + meter);
            }
            return meter;
        } catch (e) {
            GlobalException(e);
        }
    },
    ConvertWeightInKg: function(weight, typeOfWeight) {
        try {
            //alert("in value " + typeOfWeight + " weight " + weight) ;
            switch (typeOfWeight) {
                case 'lbs':
                    var convertedWeightInKgs = weight / 2.20462;
                    return convertedWeightInKgs;
                    break;
                case 'kgs':
                    break;
                default:
                    break;
            }
        } catch (e) {
            GlobalException(e);
        }
    },
    ConvertWeight_Kg_To_Pound: function(weight) {
        try {
            return Math.round((weight * 2.20462) * 100) / 100;
        } catch (e) {
            //GlobalException(e);
            return 0;
        }
    },
    ConvertWeight_Pound_To_Kg: function(weight) {
        try {
            return Math.round((weight / 2.20462) * 100) / 100;
        } catch (e) {
            //GlobalException(e);
            return 0;
        }
    },
    ConvertHeight_Inches_To_Meters: function(height) {
        try {
            //kony.print("Inches to meters "+Math.round(height * 0.0254))
            //return Math.abs(height * 0.0254);
            return Math.round((height / 39.370) * 10000) / 10000;
        } catch (e) {
            //GlobalException(e);
            return 0;
        }
    },
    ConvertHeight_Meters_To_Inches: function(height) {
        try {
            return Math.round((height * 39.370) * 100) / 100;
        } catch (e) {
            //GlobalException(e);
            return 0;
        }
    },
    //Roshni
    ConvertHeight_Meters_To_Centimeter: function(height) {
        try {
            return Math.round(height * 100);
        } catch (e) {
            //GlobalException(e);
            return 0;
        }
    },
    CalculateDPT: function(age, heightInMeters, weightInKg, gender) {
        try {
            if (age <= 16) {
                var minorCalculatedDPT;
                switch (age) {
                    case 16:
                        if (gender == "Male") {
                            minorCalculatedDPT = 58;
                        } else if (gender == "Female") {
                            minorCalculatedDPT = 41;
                        }
                        break;
                    case 15:
                        if (gender == "Male") {
                            minorCalculatedDPT = 55;
                        } else if (gender == "Female") {
                            minorCalculatedDPT = 41;
                        }
                        break;
                    case 14:
                        if (gender == "Male") {
                            minorCalculatedDPT = 51;
                        } else if (gender == "Female") {
                            minorCalculatedDPT = 40;
                        }
                        break;
                    case 13:
                        if (gender == "Male") {
                            minorCalculatedDPT = 46;
                        } else if (gender == "Female") {
                            minorCalculatedDPT = 39;
                        }
                        break;
                    case 12:
                        if (gender == "Male") {
                            minorCalculatedDPT = 42;
                        } else if (gender == "Female") {
                            minorCalculatedDPT = 37;
                        }
                        break;
                    case 11:
                        if (gender == "Male") {
                            minorCalculatedDPT = 39;
                        } else if (gender == "Female") {
                            minorCalculatedDPT = 35;
                        }
                        break;
                    default:
                        // For Age 10 and less
                        if (gender == "Male") {
                            minorCalculatedDPT = 36;
                        } else if (gender == "Female") {
                            minorCalculatedDPT = 32;
                        }
                        break;
                }
                return minorCalculatedDPT;
            }
            if (heightInMeters < com.es.weighincalculations.ConvertHeight_Inches_To_Meters(48) || heightInMeters > com.es.weighincalculations.ConvertHeight_Inches_To_Meters(95)) {
                throw "Height is either less than 48 inches or more than 95 inches";
            }
            if (weightInKg < com.es.weighincalculations.ConvertWeight_Pound_To_Kg(60) || weightInKg > com.es.weighincalculations.ConvertWeight_Pound_To_Kg(999.9)) {
                throw "Weight is either less than 60 pounds or more than 999.9 pounds";
            }
            var AgeContant;
            var HeightConstant;
            var WeightConstant;
            var DTPContant_1;
            var DTPConstant_2;
            if (age > 16) {
                //constants for Male
                AgeContant = 9.72;
                HeightConstant = 503;
                WeightConstant = 14.2
                DTPContant_1 = 864;
                DTPConstant_2 = 1.12;
                if (gender == "Female") {
                    AgeContant = 7.31;
                    HeightConstant = 660.7;
                    WeightConstant = 10.9;
                    DTPContant_1 = 387
                    DTPConstant_2 = 1.14;
                }
                var calculatedAge = AgeContant * age;
                var calculatedHeight = parseFloat(HeightConstant) * parseFloat(heightInMeters);
                var calculatedWeight = WeightConstant * weightInKg;
                var tee = (DTPContant_1 - calculatedAge + DTPConstant_2 * (calculatedHeight + calculatedWeight));
                var caloricValue = (tee - (tee * 0.10) - 1200);
                if (caloricValue < 910) {
                    caloricValue = 910;
                } else if (caloricValue > 2500) {
                    caloricValue = 2500;
                }
                var calculatedDPT = caloricValue / 35;
                //return Math.round(calculatedDPT * 100) / 100;
                kony.print("CalculateDPT ++++++++++++++++++" + Math.round(calculatedDPT));
                return Math.round(calculatedDPT);
            }
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    //Roshni
    CalculateStatistics: function(StatasticsName, weightInKG, heightInMeters, age, gender) {
        var result = 0;
        kony.print("the height in heightInMeters " + heightInMeters);
        var heightInCM = com.es.weighincalculations.ConvertHeight_Meters_To_Centimeter(heightInMeters);
        kony.print("the height in centimeter " + heightInCM);
        switch (StatasticsName) {
            case "DPT":
                {
                    var checkDPTSettings = checkAppSettingEnable(Settings["DPT"]) ? true : false;
                    kony.print("checkDPTSettings ==============" + checkDPTSettings);
                    if (checkDPTSettings) {
                        if (age > 17) {
                            if (gender === "FEMALE" || gender === "F" || gender === "Female") {
                                result = (10 * weightInKG + 6.25 * heightInCM - 5 * age - 161) * 1.3;
                                kony.print("result TEE F " + result);
                            } else {
                                result = (10 * weightInKG + 6.25 * heightInCM - 5 * age + 5) * 1.3;
                                kony.print("result TEE M" + result);
                            }
                            kony.print("result TEE " + result);
                            var tempResult = result - 1000;
                            if (tempResult < 1131) {
                                tempResult = 1131;
                            } else if (tempResult > 3069) {
                                tempResult = 3069
                            }
                            result = Math.round((tempResult - 200) / 31);
                            kony.print("DPT before reduce : " + result);
                            if (checkAppSettingEnable(Settings["NDPT"])) {
                                kony.print("DPT by new free style formula");
                                result = Math.round(result - ((result * 22.95082) / 100)); //Added for MEG-6699
                                kony.print("DPT after reduce : " + result);
                            }
                        } else if (age <= 17) {
                            //** MEG 6963	
                            var NDPT = checkAppSettingEnable(Settings["NDPT"]) ? true : false;
                            if (gender === "FEMALE" || gender === "F" || gender === "Female") {
                                switch (age) {
                                    case 13:
                                        result = NDPT ? "27" : "35";
                                        break;
                                    case 14:
                                        result = NDPT ? "28" : "36";
                                        break;
                                    case 15:
                                        result = NDPT ? "29" : "37";
                                        break;
                                    case 16:
                                        result = NDPT ? "30" : "38";
                                        break;
                                    case 17:
                                        result = NDPT ? "30" : "38";
                                        break;
                                    default:
                                        result = NDPT ? "27" : "35";
                                        break;
                                }
                            } else {
                                switch (age) {
                                    case 13:
                                        result = NDPT ? "37" : "48";
                                        break;
                                    case 14:
                                        result = NDPT ? "38" : "49";
                                        break;
                                    case 15:
                                        result = NDPT ? "39" : "50";
                                        break;
                                    case 16:
                                        result = NDPT ? "40" : "51";
                                        break;
                                    case 17:
                                        result = NDPT ? "40" : "51";
                                        break;
                                    default:
                                        result = NDPT ? "37" : "48";
                                        break;
                                }
                                //** End
                            }
                        }
                    } else {
                        result = com.es.weighincalculations.CalculateDPT(age, heightInMeters, weightInKG, gender);
                    }
                }
                break;
            case "WPA":
                {
                    if (checkAppSettingEnable(Settings["DPT"])) {
                        var WPAResult = 0;
                        var FinalWPA = 0;
                        var returningWPA = 0;
                        if (age <= 17) {
                            result = 42;
                            kony.print("WPA for the minors is... " + result);
                        } else {
                            if (gender === "FEMALE" || gender === "F" || gender === "Female") {
                                result = (10 * weightInKG + 6.25 * heightInCM - 5 * age - 161) * 1.3;
                            } else {
                                result = (10 * weightInKG + 6.25 * heightInCM - 5 * age + 5) * 1.3;
                            }
                            WPAResult = result - 1000;
                            if (WPAResult < 1000) {
                                WPAResult = 1000;
                            } else if (WPAResult > 3069) {
                                WPAResult = 3069
                            }
                            kony.print("WPAResult " + result);
                            FinalWPA = result - WPAResult;
                            kony.print("FinalWPA which is actually printed as result is ... " + result);
                            kony.print("Actual Final WPA .. " + FinalWPA);
                            if (FinalWPA <= 250) {
                                returningWPA = 14;
                            } else if ((FinalWPA > 250) && (FinalWPA <= 500)) {
                                returningWPA = 21;
                            } else if ((FinalWPA > 500) && (FinalWPA <= 750)) {
                                returningWPA = 28;
                            } else if ((FinalWPA > 750) && (FinalWPA < 1000)) {
                                returningWPA = 35;
                            } else {
                                returningWPA = 42;
                            }
                            kony.print("What we return as a result WPA is .." + returningWPA);
                            result = returningWPA;
                        }
                    } else {
                        result = 0;
                    }
                    kony.print("Final WPA : " + result);
                    break;
                }
            default:
                {
                    break;
                }
        }
        return result;
    },
    CalculateBMI: function(currentWeightInKgs, heightInMeters) {
        try {
            heightInMeters = heightInMeters.toFixed(2);
            var calculatedBMI = (currentWeightInKgs / (heightInMeters * heightInMeters));
            return Math.round(calculatedBMI * 10) / 10;
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    CalculateInchesToFeetInches: function(heightInInches) {
        try {
            //Added by Praveen kalal 
            var feet = Math.floor(heightInInches / 12)
            var inches = (heightInInches % 12);
            // Ended by Praveen
            /* Not working
            	  var feet = Math.round( heightInInches / 12);
            	  var inches = heightInInches - (feet * 12);
            	  */
            return feet + " " + getLocalizedString("strFeetAbbr") + " " + inches + " " + getLocalizedString("strInchesAbbr") + " ";
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    RoundWeight: function(str) {
        try {
            var number = 0;
            if (str != "" || str != undefined || str != null) {
                number = parseFloat(str);
                kony.print("number value in roundweight" + number);
            }
            var rounded = 0;
            if (!isNaN(number)) {
                rounded = Math.round(parseFloat(number * 10)) / 10;
                kony.print("number value in roundweight isNaN condition" + number);
            }
            // rounded is 12.3
            // to get it back to number format
            return parseFloat(parseFloat(rounded.toFixed(1)).toString());
        } catch (e) {
            GlobalException(e);
        }
    },
    ProgressSinceLastWeightIn: function(currentWeightInKgs, previousWeightInKgs) {
        try {
            var progressInKgs = currentWeightInKgs - previousWeightInKgs;
            if (progressInKgs < 0) {
                return progressInKgs;
            } else if (progressInKgs == 0) {
                return progressInKgs;
            } else if (progressInKgs > 0) {
                return progressInKgs;
            }
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    CalculateAge: function(birth_month, birth_day, birth_year) {
        try {
            kony.print("birth_month-->>>" + birth_month + "birth_day--->>" + birth_day + "birth_year--->" + birth_year);
            today_date = new Date();
            today_year = today_date.getFullYear();
            today_month = today_date.getMonth();
            today_day = today_date.getDate();
            age = today_year - birth_year;
            if (today_month < (birth_month - 1)) {
                age--;
            }
            if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
                age--;
            }
            return age;
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    CalculateGoalWeight: function(startWeight, goalWeightType) {
        try {
            kony.print("number :" + startWeight);
            if (startWeight == 0 || (isNaN(startWeight))) {
                return 0;
            } else {
                kony.print("startweight " + startWeight + " type " + goalWeightType)
                    //var localStartWeight = Math.floor(startWeight);
                var localStartWeight = startWeight.toString();
                var is3DigitNum = startWeight >= 100;
                kony.print("Local " + localStartWeight)
                switch (goalWeightType) {
                    case '5':
                        return parseFloat(startWeight * 0.05).toFixed(1);
                        break;
                    case '10':
                        return parseFloat(startWeight * 0.1).toFixed(1);
                        break;
                }
            }
        } catch (e) {
            kony.print(e);
            GlobalException(e);
            return 0;
        }
    },
    CalculateBMIMessageBasedOnHealthyWeightRange: function(currentWeightInLBS, heightInInches) {
        //**MEG 7278 
        //var HealthyRange = com.es.weighincalculations.CalculateHelathyWeightRange(heightInInches);
        var HealthyRange = [];
        com.es.weighincalculations.getHelathyWeightRange(heightInInches, function(healthyRange) {
            kony.print("healthyRange 2 " + JSON.stringify(healthyRange));
            HealthyRange = healthyRange;
        });
        //**End
        //** MEG 7308
        kony.print("1 currentWeightInLBS " + currentWeightInLBS);
        kony.print("1 HealthyRange[0] " + HealthyRange[0]);
        currentWeightInLBS = parseFloat(currentWeightInLBS);
        HealthyRange[0] = parseFloat(HealthyRange[0]);
        kony.print("2 currentWeightInLBS " + currentWeightInLBS);
        kony.print("2 HealthyRange[0] " + HealthyRange[0]);
        if (HealthyRange != undefined && HealthyRange.length > 0 && currentWeightInLBS < HealthyRange[0]) {
            if (IsFromPM == FlowForScreens.ProcessMember || IsAddIndividual == FlowForScreens.AddIndividual) {
                return {
                    isCorrect: false,
                    msg: "strMsgValidBMIAddProcess"
                };
            } else {
                return {
                    isCorrect: false,
                    msg: "strMsgValidBMI"
                };
            }
        } else {
            return {
                isCorrect: true,
                msg: ""
            };
        }
    },
    CalculateHelathyWeightRange: function(heightInInches) {
        try {
            if (!heightInInches) {
                return 0;
            } else {
                if (heightInInches < 56 || heightInInches > 79) {
                    //alertForMessages(kony.i18n.getLocalizedString("strHeightLengthCalc"));
                    return 0;
                    //throw "Height:"+heightInInches+" is not within 56 and 79 Inches";
                }
                var minWeight = 0;
                var maxWeight = 0;
                var weightValArray = new Array();
                var kgToPoundConvertionFactor = 2.20462;
                if (heightInInches == 56) {
                    minWeight = 89;
                    maxWeight = 111;
                } else if (heightInInches == 57) {
                    minWeight = 92;
                    maxWeight = 116;
                } else if (heightInInches == 58) {
                    minWeight = 96;
                    maxWeight = 120;
                } else if (heightInInches == 59) {
                    minWeight = 99;
                    maxWeight = 124;
                } else if (heightInInches == 60) {
                    minWeight = 102;
                    maxWeight = 128;
                } else if (heightInInches == 61) {
                    minWeight = 106;
                    maxWeight = 132;
                } else if (heightInInches == 62) {
                    minWeight = 109;
                    maxWeight = 137;
                } else if (heightInInches == 63) {
                    minWeight = 113;
                    maxWeight = 141;
                } else if (heightInInches == 64) {
                    minWeight = 117;
                    maxWeight = 146;
                } else if (heightInInches == 65) {
                    minWeight = 120;
                    maxWeight = 150;
                } else if (heightInInches == 66) {
                    minWeight = 124;
                    maxWeight = 155;
                } else if (heightInInches == 67) {
                    minWeight = 128;
                    maxWeight = 160;
                } else if (heightInInches == 68) {
                    minWeight = 132;
                    maxWeight = 164;
                } else if (heightInInches == 69) {
                    minWeight = 135;
                    maxWeight = 169;
                } else if (heightInInches == 70) {
                    minWeight = 139;
                    maxWeight = 174;
                } else if (heightInInches == 71) {
                    minWeight = 143;
                    maxWeight = 179;
                } else if (heightInInches == 72) {
                    minWeight = 147;
                    maxWeight = 184;
                } else if (heightInInches == 73) {
                    minWeight = 152;
                    maxWeight = 189;
                } else if (heightInInches == 74) {
                    minWeight = 156;
                    maxWeight = 195;
                } else if (heightInInches == 75) {
                    minWeight = 160;
                    maxWeight = 200;
                } else if (heightInInches == 76) {
                    minWeight = 164;
                    maxWeight = 205;
                } else if (heightInInches == 77) {
                    minWeight = 169;
                    maxWeight = 211;
                } else if (heightInInches == 78) {
                    minWeight = 173;
                    maxWeight = 216;
                } else if (heightInInches == 79) {
                    minWeight = 177;
                    maxWeight = 222;
                }
                weightValArray[0] = minWeight;
                weightValArray[1] = maxWeight;
                return weightValArray;
            }
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    getHelathyWeightRange: function(heightInInches, callback) { //**MEG 7278
        try {
            if (!heightInInches) {
                callback.call(null, 0);
            } else {
                if (heightInInches < 56 || heightInInches > 79) {
                    //alertForMessages(kony.i18n.getLocalizedString("strHeightLengthCalc"));
                    callback.call(null, 0);
                    //throw "Height:"+heightInInches+" is not within 56 and 79 Inches";
                }
                var minWeight = 0;
                var maxWeight = 0;
                var weightValArray = new Array();
                //var kgToPoundConvertionFactor = 2.20462;
                kony.print("heightInInches " + heightInInches);
                var sql = "Select MinWeight,MaxWeight from HeatlhyWeightRangeLookUp where Height = '" + heightInInches + "' ";

                function getHelathyWeightRangeSuccessCallback(res) {
                    kony.print("res " + JSON.stringify(res));
                    if (res && res.length > 0) {
                        kony.print("res[0].MinWeight " + res[0].MinWeight);
                        kony.print("res[0].MaxWeight " + res[0].MaxWeight);
                        weightValArray[0] = res[0].MinWeight;
                        weightValArray[1] = res[0].MaxWeight;
                        kony.print("weightValArray " + JSON.stringify(weightValArray));
                        callback.call(null, weightValArray);
                    } else {
                        callback.call(null, 0);
                    }
                }

                function getHelathyWeightRangeErrorCallback(res) {
                    kony.print("getHelathyWeightRangeErrorCallback res " + JSON.stringify(res));
                    callback.call(null, 0);
                }
                kony.print("::getHelathyWeightRange:sql: " + sql);
                kony.sync.single_select_execute(kony.sync.getDBName(), sql, null, getHelathyWeightRangeSuccessCallback, getHelathyWeightRangeErrorCallback);
            }
        } catch (e) {
            GlobalException(e);
            callback.call(null, 0);
        }
    },
    CalculateHelathyWeightRangeOldMethod: function(heightInInches) //old method for healthy range calculation
        {
            try {
                if (!heightInInches) {
                    return 0;
                } else {
                    if (heightInInches < 56 || heightInInches > 79) {
                        //alertForMessages(kony.i18n.getLocalizedString("strHeightLengthCalc"));
                        return 0;
                        //throw "Height:"+heightInInches+" is not within 56 and 79 Inches";
                    }
                    var minWeight = 0;
                    var maxWeight = 0;
                    var weightValArray = new Array();
                    var kgToPoundConvertionFactor = 2.20462;
                    if (heightInInches == 56) {
                        minWeight = 40;
                        maxWeight = 51;
                    } else if (heightInInches == 57) {
                        minWeight = 42;
                        maxWeight = 53;
                    } else if (heightInInches == 58) {
                        minWeight = 44;
                        maxWeight = 54;
                    } else if (heightInInches == 59) {
                        minWeight = 45;
                        maxWeight = 56;
                    } else if (heightInInches == 60) {
                        minWeight = 46;
                        maxWeight = 58;
                    } else if (heightInInches == 61) {
                        minWeight = 48;
                        maxWeight = 60;
                    } else if (heightInInches == 62) {
                        minWeight = 49;
                        maxWeight = 62;
                    } else if (heightInInches == 63) {
                        minWeight = 51;
                        maxWeight = 64;
                    } else if (heightInInches == 64) {
                        minWeight = 53;
                        maxWeight = 66;
                    } else if (heightInInches == 65) {
                        minWeight = 54;
                        maxWeight = 68;
                    } else if (heightInInches == 66) {
                        minWeight = 56;
                        maxWeight = 70;
                    } else if (heightInInches == 67) {
                        minWeight = 58;
                        maxWeight = 73;
                    } else if (heightInInches == 68) {
                        minWeight = 60;
                        maxWeight = 74;
                    } else if (heightInInches == 69) {
                        minWeight = 61;
                        maxWeight = 77;
                    } else if (heightInInches == 70) {
                        minWeight = 63;
                        maxWeight = 79;
                    } else if (heightInInches == 71) {
                        minWeight = 65;
                        maxWeight = 81;
                    } else if (heightInInches == 72) {
                        minWeight = 67;
                        maxWeight = 83;
                    } else if (heightInInches == 73) {
                        minWeight = 69;
                        maxWeight = 86;
                    } else if (heightInInches == 74) {
                        minWeight = 71;
                        maxWeight = 88;
                    } else if (heightInInches == 75) {
                        minWeight = 73;
                        maxWeight = 91;
                    } else if (heightInInches == 76) {
                        minWeight = 74;
                        maxWeight = 93;
                    } else if (heightInInches == 77) {
                        minWeight = 77;
                        maxWeight = 96;
                    } else if (heightInInches == 78) {
                        minWeight = 78;
                        maxWeight = 98;
                    } else if (heightInInches == 79) {
                        minWeight = 81;
                        maxWeight = 101;
                    }
                    //	   	   weightValArray[0] = minWeight;      
                    //         weightValArray[1]=  maxWeight;
                    //         return weightValArray;
                    weightValArray[0] = Math.round(minWeight * kgToPoundConvertionFactor);
                    weightValArray[1] = Math.round(maxWeight * kgToPoundConvertionFactor);
                    //weightValArray[0] = com.es.weighincalculations.ConvertWeight_Kg_To_Pound(minWeight);      
                    //weightValArray[1]=  com.es.weighincalculations.ConvertWeight_Kg_To_Pound(maxWeight);
                    return weightValArray;
                }
            } catch (e) {
                GlobalException(e);
                return 0;
            }
        },
    /**
     *  This function will return the next achievable goal weight based on the customers start weight, current weight, and current goal weight
     * @param {} startWeight(lb) - The start weight of the customer when enrolled
     * @param {} goalWeight(lb)  - The goal weight for the customer, zero(0) if the user has just enrolled.
     * @param {} currentWeight(lb) - The current weight for the customer. 
     * @returns {} lbs_To_Next_Milestone - An array of size 3 .
     *                            lbs_To_Next_Milestone[0] - next Goal Weight for customer in lb. (number)
     *                            lbs_To_Next_Milestone[1] - target Weight Reduction scheme (A string representation of the weight plan the customer is currently in - e.g. 5% Award, 10% Award, 25lb Award..)
     *                            lbs_To_Next_Milestone[2] - Lbs that would take to reach the target weight (number)
     */
    lbs_To_Next_Milestone: function(startWeight, goalWeight, currentWeight) {
        try {
            startWeight = Math.round(startWeight);
            goalWeight = Math.round(goalWeight);
            currentWeight = Math.round(currentWeight);
            var lbs_To_Next_Milestone = new Array();
            if (!startWeight || startWeight < 60 || startWeight > 999.9 || !currentWeight || currentWeight < 60 || currentWeight > 999.9) {
                //do not process for invalid values
                return 0;
            }
            var is3DigitNum = startWeight >= 100;
            // alert("isDigit "+is3DigitNum);
            var localStartWeight = startWeight.toString();
            var award_5_lb = [5, getLocalizedString("str5lbAward")]; // 5 lb award
            var temp = localStartWeight.substring(0, 2);
            var award_5_percent = (is3DigitNum) ? [Math.round(parseInt(temp) / 2), "5% award"] : Math.round(startWeight * 0.05); // 5% award
            var award_10_percent = (is3DigitNum) ? [parseInt(temp), "10% award"] : Math.round(startWeight * 0.1); // 10% award
            var award_25_lb = [25, "25lb award"]; //25lb award
            var award_50_lb = [50, "50lb award"]; //50lb award
            var award_75_lb = [75, "75lb award"]; //75lb award
            var award_100_lb = [100, "100lb award"]; //100lb award
            var minimum = [];
            var target_LB_Award_Array = new Array();
            target_LB_Award_Array[0] = award_5_lb;
            target_LB_Award_Array[1] = award_5_percent;
            target_LB_Award_Array[2] = award_10_percent;
            target_LB_Award_Array[3] = award_25_lb;
            target_LB_Award_Array[4] = award_50_lb;
            target_LB_Award_Array[5] = award_75_lb;
            target_LB_Award_Array[6] = award_100_lb;
            // alert(target_LB_Award_Array);
            target_LB_Award_Array.sort(function(a, b) {
                var avalue = a[0],
                    bvalue = b[0];
                if (avalue < bvalue) {
                    return -1;
                }
                if (avalue > bvalue) {
                    return 1;
                }
                return 0;
            });
            kony.print(startWeight + " == " + currentWeight + "-----------" + goalWeight);
            //alert(""+target_LB_Award_Array);
            if (startWeight == currentWeight) {
                if (goalWeight == 0) { //The calculations are for a new member
                    minimum = target_LB_Award_Array[0];
                } else {
                    // Three is no change in the customer's weight
                    var next_Goal_Weight = goalWeight;
                    var lbs_To_TargetWeight = currentWeight - goalWeight;
                    var target_Weight_Reduce;
                    for (var i = 0; i < target_LB_Award_Array.length; i++) {
                        if (target_LB_Award_Array[i][0] >= lbs_To_TargetWeight) {
                            target_Weight_Reduce = target_LB_Award_Array[i][1];
                            break;
                        }
                    }
                    lbs_To_Next_Milestone = [next_Goal_Weight, target_Weight_Reduce, lbs_To_TargetWeight];
                    return lbs_To_Next_Milestone.toString();
                }
            } else if (startWeight > currentWeight) // && goalWeight != 0 ) 
            {
                if (goalWeight == 0) { //The calculations are for a new member
                    minimum = target_LB_Award_Array[0];
                } else if (currentWeight > goalWeight) {
                    var next_Goal_Weight = goalWeight;
                    var lbs_To_TargetWeight = currentWeight - goalWeight;
                    var target_Weight_Reduce;
                    var standardReductionWeight = startWeight - goalWeight;
                    for (var i = 0; i < target_LB_Award_Array.length; i++) {
                        if (target_LB_Award_Array[i][0] >= standardReductionWeight) {
                            target_Weight_Reduce = target_LB_Award_Array[i][1];
                            break;
                        }
                    }
                    lbs_To_Next_Milestone = [next_Goal_Weight, target_Weight_Reduce, lbs_To_TargetWeight];
                    return lbs_To_Next_Milestone.toString();
                } else if (currentWeight <= goalWeight) {
                    // write procedure to calculate new goal weight
                    if (startWeight - goalWeight == 100) {
                        //ToDo: User has already achieved 100 lb goal award, there is no further target goal weight target to achieve
                        //alert("Congrats! You achieved the top level milestone");
                        return 0;
                    }
                    minimum = target_LB_Award_Array[0];
                    var c = 1;
                    for (c = 1; c < target_LB_Award_Array.length; c++) {
                        if ((startWeight - target_LB_Award_Array[c][0]) < currentWeight && (target_LB_Award_Array[c][0] > minimum[0])) {
                            minimum = target_LB_Award_Array[c];
                            break;
                        }
                    }
                    var next_Goal_Weight = startWeight - minimum[0];
                    var target_Weight_Reduce = minimum[1];
                    var lbs_To_TargetWeight = currentWeight - next_Goal_Weight;
                    lbs_To_Next_Milestone = [next_Goal_Weight, target_Weight_Reduce, lbs_To_TargetWeight];
                    return lbs_To_Next_Milestone.toString();
                }
            } else if (startWeight < currentWeight) // && goalWeight != 0 )
            {
                if (goalWeight == 0) { //The calculations are for a new member
                    minimum = target_LB_Award_Array[0];
                } else {
                    // To handle this condition
                    var next_Goal_Weight = goalWeight;
                    var lbs_To_TargetWeight = currentWeight - goalWeight;
                    var target_Weight_Reduce;
                    var standardReductionWeight = startWeight - goalWeight;
                    for (var i = 0; i < target_LB_Award_Array.length; i++) {
                        if (target_LB_Award_Array[i][0] >= standardReductionWeight) {
                            target_Weight_Reduce = target_LB_Award_Array[i][1];
                            break;
                        }
                    }
                    lbs_To_Next_Milestone = [next_Goal_Weight, target_Weight_Reduce, lbs_To_TargetWeight];
                    return lbs_To_Next_Milestone.toString();
                }
            }
            var c = 1;
            for (c = 1; c < target_LB_Award_Array.length; c++) {
                if (target_LB_Award_Array[c][0] < minimum[0]) {
                    minimum = target_LB_Award_Array[c];
                }
            }
            var next_Goal_Weight = startWeight - minimum[0];
            //alert(next_Goal_Weight);
            var target_Weight_Reduce = minimum[1];
            var lbs_To_TargetWeight = minimum[0];
            lbs_To_Next_Milestone = [next_Goal_Weight, target_Weight_Reduce, lbs_To_TargetWeight];
            return lbs_To_Next_Milestone.toString();
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    /**
     *  This function will return the average weight loss for the last 4 weeks.
     *  The method will return 0 for entriesCount = 0 , or any excpetion arising out of undefined values
     * @param {} totalLossLast4Week (number) - The total loss for the last 4 weeks
     * @param {} entriesCount(number)  - Total count of the weight  entries
     * @returns {} average (number) - the avearage weight of the last 4 weeks
     */
    Avg_WT_Loss_last_4_weeks: function(totalLossLast4Week, entriesCount) {
        var average = 0;
        try {
            if (entriesCount > 4) {
                average = totalLossLast4Week / 4;
            } else {
                average = totalLossLast4Week / (entriesCount - 1 == 0 ? 1 : entriesCount - 1);
            }
            return Math.round(average);
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    /**
     *  This function will return the rounded value of the difference of start weight and current weight.
     * @param {}   startWeight (number)     - The start weight in lb or kg
     * @param {} currentWeight(number)      - The current weight in lb or kg
     * @returns {} TotalWeightLoss (number) - The difference of start weight and current weight. 
     *                                        The returned value can be negative if currentWeight > startWeight
     */
    TotalWeightLoss: function(startWeight, currentWeight) {
        try {
            //return Math.round(startWeight - currentWeight);
            return parseFloat(startWeight - currentWeight).toFixed(1);
        } catch (e) {
            GlobalException(e);
            return 0;
        }
    },
    /**
     * This function checks whether the customer is a free life time member or a paid life time member.
     * Based on the conditions the method sets the global boolean variable isFreeLifeTimeMember.
     * @param {} memberID (number)
     * @param {} currentWt (number)  The current Wt in Lb
     * @param {} goalWt (number)     The goal Wt in Lb
     * @returns {} 
     */
    isFreeLifeTimeMember: function(memberID, currentWt, goalWt) {
        function getMemberDetailByMemberIdsuccesscallback(res) {
            var v = res[0];
            //			         if(v.MemberType == "LIFETIME" || v.MemberType == "LIFETIME_RE_ENROLLED"){
            // check if this is the firt weight-in after being a lifetime member
            var currentTime = new Date();
            var memTypeUpdateDt = v.MemTypeUpdateDt;
            var memType = v.MemberType;
            //where clause: pull out the records of the member with the given memberID for dates from the membership update date, till today
            var whereClause = "where MemberID='" + memberID + "' AND WeighInDate>=" + memTypeUpdateDt + " AND WeighInDate<=" + currentTime.getTime();

            function getMemberWtByIdsuccesscallback(res) {
                //alert("getMemberWtByIdsuccesscallback res.len:"+res.length+"  memType:"+memType+ "  (currentWt > (goalWt + 2)):"+(currentWt > (goalWt + 2)));
                if (res.length <= 0 && memType == MemberValueEnum[7]) {
                    // The member should be considered as a free member as this is the first weight-in after membership updated to life time
                    isFreeLifeTimeMember = true;
                    //alert("MemberType= LIFETIME, First Weigh-in after enrolment -->  Free Life Time Member");
                } else if (res.length <= 0 && memType == MemberRegEnum[Registered]) { //"LIFETIME_RE_ENROLLED"){
                    isFreeLifeTimeMember = false; // The member is re-enrolled and its the firt time weight-in
                    //alert("MemberType= LIFETIME_RE_ENROLLED, First Weigh-in after re enrolment -->  Paid Life Time Member");
                } else {
                    //alert(" (currentWt > (goalWt + 2))"+(currentWt > (goalWt + 2))+"  currentWT:"+currentWt+" goalWt:"+goalWt);
                    if ((currentWt > (goalWt + 2)) || (currentWt < (goalWt - 2))) {
                        var currentTime = new Date();
                        var month = currentTime.getMonth(); // returns the month (from 0 to 11)
                        var year = currentTime.getFullYear(); // returns the year (four digits)
                        var firtDayOfMonth = (new Date(year, month, 1)).getTime(); //first day of the month
                        //where clause: pull out the records of the member with the given memberID for dates from the start of this month till today
                        var whereClause = "where MemberID='" + memberID + "' AND WeighInDate>=" + firtDayOfMonth + " AND WeighInDate<=" + currentTime.getTime();

                        function getMemberWtDefinedPeriodsuccesscallback(res) {
                            //alert("isPreviousWeighInWithinRange res.len:"+res.length+"  memType:"+memType);
                            var flag = false;
                            for (var i in res) {
                                var v = res[i];
                                if ((parseFloat(v.Weight) <= (goalWt + 2)) && (parseFloat(v.Weight) >= (goalWt - 2))) {
                                    isFreeLifeTimeMember = true;
                                    flag = true;
                                    //alert("CurrentWT >(goalWt + 2) && isPreviousWeighInWithinRange = true --> Free Life Time Member");
                                    break;
                                }
                            }
                            if (!flag) {
                                //alert("CurrentWT >(goalWt + 2) && isPreviousWeighInWithinRange = false --> Paid Life Time Member");    
                                isFreeLifeTimeMember = false;
                            }
                            boEnrollMember.updateMemberLifetimeType(memberID, isFreeLifeTimeMember);
                        }
                        DBWeighDetailsController.find(whereClause, getMemberWtDefinedPeriodsuccesscallback, eventErrorCallBack);
                    } else {
                        // CurrentWt is within the range
                        var currentTime = new Date();
                        var month = currentTime.getMonth(); // returns the month (from 0 to 11)
                        var year = currentTime.getFullYear(); // returns the year (four digits)
                        var firtDayOfMonth = 0;
                        var lastDayOfMonth = 0;
                        if (month == 0) {
                            year = year - 1;
                            month = 11;
                            firtDayOfMonth = (new Date(year, month, 1)).getTime(); //first day of the month
                            lastDayOfMonth = (new Date(year + 1, 0, 0, 23, 59, 59)).getTime(); //last day of Month
                        } else {
                            firtDayOfMonth = (new Date(year, month - 1, 1)).getTime(); //first day of the month
                            lastDayOfMonth = (new Date(year, month, 0, 23, 59, 59)).getTime(); //last day of Month
                        }
                        //where clause: find the records for the given memberID and for the entire month, previous to the current month
                        var whereClause = "where MemberID='" + memberID + "' AND WeighInDate>=" + firtDayOfMonth + " AND WeighInDate<=" + lastDayOfMonth;

                        function getMemberWt_EntireMonth_successcallback(res) {
                            //alert("isMissedWtIn_ForEntireMonth res.len:"+res.length+"  memType:"+memType);
                            if (res.length > 0) {
                                isFreeLifeTimeMember = true;
                                //alert("CurrentWT <=(goalWt + 2) && isMissedWtIn_ForEntireMonth = false --> Free Life Time Member");
                            } else {
                                isFreeLifeTimeMember = false;
                                //alert("CurrentWT <=(goalWt + 2) && isMissedWtIn_ForEntireMonth = true --> Paid Life Time Member");
                            }
                            boEnrollMember.updateMemberLifetimeType(memberID, isFreeLifeTimeMember);
                        }
                        DBWeighDetailsController.find(whereClause, getMemberWt_EntireMonth_successcallback, eventErrorCallBack);
                    }
                }
            }
            DBWeighDetailsController.find(whereClause, getMemberWtByIdsuccesscallback, eventErrorCallBack);
        }

        function getMemDetailErrorCallBack(res) {
            //alert("Error occured fetching member detail :"+res);
        }
        DBWeighDetailsController.find("where MemberID='" + memberID + "'", getMemberDetailByMemberIdsuccesscallback, getMemDetailErrorCallBack);
    }
}

function checkWeighHistoryOfLocalMemberInDB(wdateStr) {
    var isLatestWeighInAvailableIDB = true;
    var wdate = new Date(wdateStr).toDateString();
    var dt = new Date();
    var tempDate = new Date(dt.setDate(dt.getDate() - dt.getDay() - 1));
    var prevWeekSunday = new Date(tempDate.setDate(tempDate.getDate() - 6));
    dt = new Date();
    var lastSunday = new Date(dt.setDate(dt.getDate() - dt.getDay() - 1));
    lastSunday = new Date(lastSunday.toDateString());
    prevWeekSunday = new Date(prevWeekSunday.toDateString());
    kony.print('lastSunday=' + lastSunday);
    kony.print('prevWeekSunday=' + prevWeekSunday);
    wdate = new Date(wdate);
    kony.print('wdate=' + wdate);
    if (wdate <= lastSunday) {
        if (wdate >= prevWeekSunday && wdate <= lastSunday) {
            kony.print('last week weighe in available');
        } else {
            isLatestWeighInAvailableIDB = false;
            kony.print('not weighed in last week');
        }
    } else {
        kony.print('already weighed in current week');
    }
    kony.print('isLatestWeighInAvailableIDB = ' + isLatestWeighInAvailableIDB);
    return isLatestWeighInAvailableIDB;
}