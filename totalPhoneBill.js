function totalPhoneBill(inputString){
    var phoneBillType = inputString.split(',');
    var totalBill = 0;
    var costPerSms = 0.65
    var costPerCall = 2.75
    var smsCount = 0;
    var callCount = 0; 
    for(var i = 0; i < phoneBillType.length;i++){
     var newPhoneBillType = phoneBillType[i].trim();
      if(newPhoneBillType === 'sms'){
        smsCount++;
      }else if(newPhoneBillType === 'call'){
       callCount++;
    }
    } 
      totalBill = (smsCount * costPerSms) + (callCount * costPerCall)
  
      return "R" + totalBill.toFixed(2);
    }