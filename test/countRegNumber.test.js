
describe ('countRegNumber', function(){
  it ('Should return 4', function(){
  assert.equal(countRegNumber('CA 354654, CY 54654, ND 565544, CX 69698'),4);
  });
  it('should return 3', function(){
  assert.equal(countRegNumber('CA 354654, CY 54654, ND 565544'),3);
  });
});
