function mostProfitableDepartment(dataList){
    var salesMap = {};
     for(var i = 0; i < dataList.length;i++){
      var salesList = dataList[i];
       var deptName = salesList.department
       var salesNumbers = salesList.sales
       if(salesMap[deptName] === undefined){
           salesMap[deptName] = salesNumbers;
          
           }
           else{
              salesMap[deptName] += salesNumbers; 
           } 
            var currentMaxVal = 0;
          var currentDept = '';
          for(var depts in salesMap){
             var currentSales = salesMap[depts]
             if(currentSales > currentMaxVal ){
                currentMaxVal = currentSales;
                 currentDept = depts
             }
             
            }
     
     
     }
    return currentDept
   }

 


