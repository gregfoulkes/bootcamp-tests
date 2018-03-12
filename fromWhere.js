function  fromWhere(reg){
  if(reg.startsWith ('CY')){
    return 'Bellville';
}
  else if(reg.startsWith ('CJ')){
  return 'Paarl'
  }
  else if (reg.startsWith('CA')){
  return 'Cape Town'
  }
  else {
  return 'Some other place!'
  }
};

console.log(fromWhere('CA 46531'))
console.log(fromWhere('CY 45645'))
console.log(fromWhere('CJ 35465'))
console.log(fromWhere('GP 35465'))
