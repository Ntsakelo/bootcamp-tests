function countAllFromTown(inputString,stringStart){
    var regNumbers = inputString.split(',');
    var fromStellies = [];
    var fromKuilsriver = [];
    for(var i = 0; i < regNumbers.length;i++){
     var newRegNumbers = regNumbers[i].trim();
      if(newRegNumbers.startsWith('CL') && stringStart === 'CL' ){
         fromStellies.push(newRegNumbers);
       }
      else if(newRegNumbers.startsWith('CF') && stringStart === 'CF'){
       fromKuilsriver.push(newRegNumbers);
       }
    }
   
    return (stringStart === 'CL')? fromStellies.length : fromKuilsriver.length
   }