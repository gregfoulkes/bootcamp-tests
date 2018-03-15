describe('yearsAgo', function(){
  it ('Should count 42 years ago', function(){
    assert.equal(yearsAgo(1976),42);
  });
  it ('Should return 40', function(){
    assert.equal(yearsAgo(1978),40);
  });
  it ('Should return 42', function(){
    assert.notEqual(yearsAgo(1969),42)
  });
});
