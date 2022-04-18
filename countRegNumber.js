function countRegNumber(input){
    let regArray = input.split(",")
    let count = 0;
    for(let i = 0; i <= regArray.length;i++){
         count = i;
  }
    if(input === ""){
        count = 0
    }
    return count;
}