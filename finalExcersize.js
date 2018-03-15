function nissansFromCK(cars){

  var map = {}
  var name = ''

  for (var i = 0; i<cars.length;i++){
  var carList = cars[i];
    //console.log(carList)
    var reg = carList.reg_number;
    console.log(map[reg])
    if(map[reg.startsWith('CK')] && map[carList.make] == 'Nissan'){
    map[carList.make] = map[carList.make]+1
    }
  }

}
