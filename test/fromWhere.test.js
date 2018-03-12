describe ('fromWhere', function(){
  it ('Should return location of registration', function(){

    var reg = 'CJ 986987';

    assert.equal(fromWhere(reg),'Paarl')

  });
});
