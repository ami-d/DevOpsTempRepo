var com.weightwatchers.ingenico={};
com.weightwatchers.ingenico.PairingHandler=function(){
this.initiazeDevice= function(baseURL,apiKey,clientVersion,userName,password,pairCallBack,connCallback,isConnInBG){};
this.connectDevice= function(connectCallBack){};
this.swipeCardAndProcessPayment= function(amount,merchantReferenceCode,enrollToken,tokenReferenceNo,memberData,paymentCallback){};
this.voidPayment= function(transactionId,merchantReferenceCode,voidCallback){};
this.generateHashPassword= function(password,salt,keyLength,prf,iteration,loginCallback){};
this.login= function(userName,password,loginCallback){};
this.changeLoginPassword= function(oldPassword,newPassword,loginCallback){};
this.setLoginCredential= function(userName,password,isLoginSuccess,loginCallback){};
this.generateSalt256= function(loginCallback){};
};
