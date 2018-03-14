
describe ('regCheck',function(){
  it ('returns true if reg from Cape Town', function(){
    var reg =('64646454 GP');
    var loc =('GP');
    assert.equal(regCheck(reg,loc),true);
  });
});
