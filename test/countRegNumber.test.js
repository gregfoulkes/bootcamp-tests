describe ('countRegNumber', function(){
it ('should count the length of the string', function(){
  var regList = 'CA 354654, CY 54654, ND 565544';
  var regSplit = regList.split(',');
  var regLen = regSplit.length;
  assert.equal(countRegNumber(regList),regLen)
  });
});
