function regCheck(reg,loc) {
  var isFrom = reg.endsWith(loc)
	return isFrom;
}

console.log(regCheck('64646454 GP', 'GP'))
console.log(regCheck('64646454 MP', 'MP'))
console.log(regCheck('64646454 GP', 'MP'))
console.log(regCheck('CA 64646454', 'MP'))

var isGP = regCheck('DV 23 NB GP', 'GP');
console.log(isGP);
