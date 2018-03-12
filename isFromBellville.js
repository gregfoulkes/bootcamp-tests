function isFromBellville(reg) {
	var numPlate = reg.startsWith('CY');
 return numPlate;
}
console.log(isFromBellville('CY 246543'));
console.log(isFromBellville('CA 243243'));
