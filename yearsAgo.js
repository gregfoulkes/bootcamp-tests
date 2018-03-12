function yearsAgo(year){
 var date = new Date();
 var isYear = date.getFullYear() - year;
  return isYear;
}
console.log(yearsAgo(1978))
