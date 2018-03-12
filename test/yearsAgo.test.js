describe('yearsAgo', function(){
  it ('Should count how many years ago', function(){
    var year = 1978
    var date = new Date();
    var isYear = date.getFullYear() - year;

    assert.equal(yearsAgo(year),isYear)

  });
});
