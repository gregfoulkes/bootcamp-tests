function countRegNumber(regList) {
  var regSplit = regList.split(',');
  var regLen = regSplit.length;
  return regLen;
}
console.log(countRegNumber ('CA 354654, CY 54654, ND 565544'))
