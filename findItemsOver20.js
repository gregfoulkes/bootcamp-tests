function findItemsOver20(list){
  var empty = [];
  for(i=0;i<list.length;i++){
    var emp = list[i];
  	if (emp.qty>20){
    empty.push(emp);
  	console.log(empty)
  	}
  }
  return empty;
}
