function findItemsOver20(list){
    var productList = [];   
    for(var i = 0; i < list.length;i++){
           var listItems = list[i];
           var listQuantity = listItems.qty
           if(listQuantity > 20){
             productList.push(listItems)
           }
    }
      return productList
    }
    let listItem = [
        {
            name: 'Apples',
            qty: 20
        },
        {
            name: 'Banana',
            qty: 10
        },
        {
            name: 'Oranges',
            qty: 25
        },
        {
            name:'Guavas',
            qty: 39
        },
        {
            name:'Lemons',
            qty: 45
        }
    ]
    console.log(findItemsOver20(listItem));