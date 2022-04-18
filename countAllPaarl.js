function countAllPaarl(inputString){
    var regNumbers = inputString.split(',')
    var counter = 0
     for(var i = 0; i < regNumbers.length;i++){
        var newRegNumbers = regNumbers[i].trim()
        if(newRegNumbers.startsWith('CJ')){   
          counter++;
    
        } 
       
     } 
      return counter
    }