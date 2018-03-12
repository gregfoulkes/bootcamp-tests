function isWeekday(day){
return !day.startsWith('S'); 
 // var weekDay = day.endsWith('day');  
}
console.log(isWeekday('Monday'));
console.log(isWeekday('Saturday'));
