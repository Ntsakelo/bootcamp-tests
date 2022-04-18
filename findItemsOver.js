function findItemsOver(list,threshold){
    var productList = []
    for(var i = 0; i < list.length;i++){
       var listItems = list[i];
      var listQuantity = listItems.qty;
      if(listQuantity > threshold){
        productList.push(listItems)
      }
    }
   return productList
 }