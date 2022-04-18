function isWeekday(day){
    let newDay = day.toLowerCase();
    if (newDay.startsWith("sun") || day.startsWith("sat")){
       return false
    }else if(newDay == 'monday'){

        return true
    }else if(newDay == 'tuesday'){
        return true
    }else if(newDay == 'wednesday'){
        return true
    }else if(newDay == 'thursday'){
        return true
    } 
    else if(newDay == 'friday'){
        return true
    }
    else{
        return false;
    }
}