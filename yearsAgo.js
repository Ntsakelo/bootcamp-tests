function yearsAgo(year){
    let currentYear = new Date().getFullYear();
 
   let diff = currentYear - year;
   return diff;
 }