var logger = {
    /* sendView(String Resource Name) */
    Log_sendView: function(modulename) {
        /*Db operation goes here */
    },
    /* 
     * @param {} resourceCategory e.g  ui_button  
     * @param {} resourceAction  e.g. button_press 	 
     * @param {} resourceName e.g. Login Button
     */
    Log_sendEvent: function(resourceCategory, resourceAction, resourceValue, screenName) {
        resultscreen.lblone.text = "Screen Name: " + screenName;
        resultscreen.lbltwo.text = "Resource Category: " + resourceCategory;
        resultscreen.lblthree.text = "Resource Action: " + resourceAction;
        resultscreen.lblfour.text = "Resource Value: " + resourceValue;
        resultscreen.show();
        //TO DO  	
        /*  	user = username;
          	localTime = DateTimeEntered;
          	description = from USer
          	action = form name
        */
        /*Db operation goes here */
    },
    /*
     * @param {} desc : Exception Description
     * @param {} val :  boolean isFatal
     */
    //Log_SendException(name,error_type,desc,errorcode)
    Log_SendException: function(name, error_type, description, errorcode) {

        //alert("Description:"+description+"\n"+"Value:"+value);
        //DB operation Insert exception to DB
        function createExceptionSuccessCallback() {
            kony.print(getMessageTemplate("addSuccess", "Exception"), "info")
        }
        //var createExceptionObj = new com.kony.WeightWatchers.Logger.ExceptionDetail();
        var createExceptionObj = {};
        var date = new Date();
        var fdate = changeDateFormat(date);
        createExceptionObj.name = name;
        createExceptionObj.errorcode = errorcode;
        createExceptionObj.errortype = error_type;
        createExceptionObj.description = description;
        createExceptionObj.user = username;
        createExceptionObj.localTime = fdate;
        //createExceptionObj.create(createExceptionSuccessCallback, eventErrorCallBack);
        com.kony.WeightWatchers.Logger.ExceptionDetail.create(createExceptionObj, createExceptionSuccessCallback, eventErrorCallBack, false);

    },
    Log_ButtonPressed: function(eventobject, screenname) {


        resultscreen.actionrecord.text = "Screen name " + screenname + " button clicked " + eventobject.id;
        resultscreen.show();
    }
};
