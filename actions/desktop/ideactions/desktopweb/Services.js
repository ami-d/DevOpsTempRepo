	var Login = "LoginService";
	var LocationByZipService = "GetLocations";
	var GetMeetingsForLocation = "GetMeetingsForLocations";
	var LocationService = "GetLocation";
	var enrollMember = "EnrollNonMember";
	var searchMember = "SearchMember";
	var LocaitonLookupTable = [];
	var MiletoneLookupTable = [];
	var orderMapLocation = [];
	orderMapLocation[0] = [{
	    "": ""
	}, {
	    "key": "lastupdatedtime"
	}, {
	    "sortType": "desc"
	}];
	var orderMapTallyTimesheet = [];
	orderMapTallyTimesheet[0] = [{
	    "": ""
	}, {
	    "key": "ModifiedLast"
	}, {
	    "sortType": "desc"
	}];
	//var heightInFeets = [["4":"4"],["5":"5"],["6":"6"],["7":"7"],50];
	//var heightInInches = [["0":"0"],["1":"1"],["2":"2"],["3":"3"],["4":"4"],["5":"5"],["6":"6"],["7":"7"],["8":"8"],["9":"9"],["10":"10"],["11":"11"],50];
	var SelectedheightUS = [];
	var SelectedheightFR = [];
	var heightUS = [];
	var heightFR = [];

	function setHeight() {
	    SelectedheightUS = [
	        [
	            ["4", "4 " + kony.i18n.getLocalizedString("strFeet")], 1
	        ],
	        [
	            ["0", "0 " + kony.i18n.getLocalizedString("strInches")], 1
	        ]
	    ];
	    SelectedheightFR = [
	        ["122", "122 cms."], 1
	    ];
	    heightUS = [
	        [
	            ["4", "4 " + getLocalizedString("strFeet")],
	            ["5", "5 " + getLocalizedString("strFeet")],
	            ["6", "6 " + getLocalizedString("strFeet")],
	            ["7", "7 " + getLocalizedString("strFeet")], 50
	        ],
	        [
	            ["0", "0 " + getLocalizedString("strInches")],
	            ["1", "1 " + getLocalizedString("strInches")],
	            ["2", "2 " + getLocalizedString("strInches")],
	            ["3", "3 " + getLocalizedString("strInches")],
	            ["4", "4 " + getLocalizedString("strInches")],
	            ["5", "5 " + getLocalizedString("strInches")],
	            ["6", "6 " + getLocalizedString("strInches")],
	            ["7", "7 " + getLocalizedString("strInches")],
	            ["8", "8 " + getLocalizedString("strInches")],
	            ["9", "9 " + getLocalizedString("strInches")],
	            ["10", "10 " + getLocalizedString("strInches")],
	            ["11", "11 " + getLocalizedString("strInches")], 50
	        ]
	    ];
	    heightFR = [
	        [
	            ["122", "122 cms."],
	            ["123", "123 cms."],
	            ["124", "124 cms."],
	            ["125", "125 cms."],
	            ["126", "126 cms."],
	            ["127", "127 cms."],
	            ["128", "128 cms."],
	            ["129", "129 cms."],
	            ["130", "130 cms."],
	            ["131", "131 cms."],
	            ["132", "132 cms."],
	            ["133", "133 cms."],
	            ["134", "134 cms."],
	            ["135", "135 cms."],
	            ["136", "136 cms."],
	            ["137", "137 cms."],
	            ["138", "138 cms."],
	            ["139", "139 cms."],
	            ["140", "140 cms."],
	            ["141", "141 cms."],
	            ["142", "142 cms."],
	            ["143", "143 cms."],
	            ["144", "144 cms."],
	            ["145", "145 cms."],
	            ["146", "146 cms."],
	            ["147", "147 cms."],
	            ["148", "148 cms."],
	            ["149", "149 cms."],
	            ["150", "150 cms."],
	            ["151", "151 cms."],
	            ["152", "152 cms."],
	            ["153", "153 cms."],
	            ["154", "154 cms."],
	            ["155", "155 cms."],
	            ["156", "156 cms."],
	            ["157", "157 cms."],
	            ["158", "158 cms."],
	            ["159", "159 cms."],
	            ["160", "160 cms."],
	            ["161", "161 cms."],
	            ["162", "162 cms."],
	            ["163", "163 cms."],
	            ["164", "164 cms."],
	            ["165", "165 cms."],
	            ["166", "166 cms."],
	            ["167", "167 cms."],
	            ["168", "168 cms."],
	            ["169", "169 cms."],
	            ["170", "170 cms."],
	            ["171", "171 cms."],
	            ["172", "172 cms."],
	            ["173", "173 cms."],
	            ["174", "174 cms."],
	            ["175", "175 cms."],
	            ["176", "176 cms."],
	            ["177", "177 cms."],
	            ["178", "178 cms."],
	            ["179", "179 cms."],
	            ["180", "180 cms."],
	            ["181", "181 cms."],
	            ["182", "182 cms."],
	            ["183", "183 cms."],
	            ["184", "184 cms."],
	            ["185", "185 cms."],
	            ["186", "186 cms."],
	            ["187", "187 cms."],
	            ["188", "188 cms."],
	            ["189", "189 cms."],
	            ["190", "190 cms."],
	            ["191", "191 cms."],
	            ["192", "192 cms."],
	            ["193", "193 cms."],
	            ["194", "194 cms."],
	            ["195", "195 cms."],
	            ["196", "196 cms."],
	            ["197", "197 cms."],
	            ["198", "198 cms."],
	            ["199", "199 cms."],
	            ["200", "200 cms."],
	            ["201", "201 cms."],
	            ["202", "202 cms."],
	            ["203", "203 cms."],
	            ["204", "204 cms."],
	            ["205", "205 cms."],
	            ["206", "206 cms."],
	            ["207", "207 cms."],
	            ["208", "208 cms."],
	            ["209", "209 cms."],
	            ["210", "210 cms."],
	            ["211", "211 cms."],
	            ["212", "212 cms."],
	            ["213", "213 cms."],
	            ["214", "214 cms."],
	            ["215", "215 cms."],
	            ["216", "216 cms."],
	            ["217", "217 cms."],
	            ["218", "218 cms."],
	            ["219", "219 cms."],
	            ["220", "220 cms."],
	            ["221", "221 cms."],
	            ["222", "222 cms."],
	            ["223", "223 cms."],
	            ["224", "224 cms."],
	            ["225", "225 cms."],
	            ["226", "226 cms."],
	            ["227", "227 cms."],
	            ["228", "228 cms."],
	            ["229", "229 cms."],
	            ["230", "230 cms."],
	            ["231", "231 cms."],
	            ["232", "232 cms."],
	            ["233", "233 cms."],
	            ["234", "234 cms."],
	            ["235", "235 cms."],
	            ["236", "236 cms."],
	            ["237", "237 cms."],
	            ["238", "238 cms."],
	            ["239", "239 cms."],
	            ["240", "240 cms."],
	            ["241", "241 cms."], 100
	        ]
	    ];
	}