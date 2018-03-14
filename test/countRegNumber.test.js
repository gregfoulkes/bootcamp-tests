describe ('countRegNumber', function(){
  var regList = 'CA 354654, CY 54654, ND 565544';
it ('should count the length of the string', function(){
  //var regSplit = regList.split(',');
  //var regLen = regSplit.length;
  assert.equal(countRegNumber(regList),3)
  });
  it('should return 3', function(){
   var regList = 'CA 354654, CY 54654, ND 565544, CX 69698'
  assert.notEqual(countRegNumber(regList),3)
  });
});
