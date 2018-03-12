describe ('countAllPaarl', function(){

it ('Should count number of Paarl registrations', function(){
  var reg = 'CJ 786876, CY 070973';
  assert.equal(countAllPaarl(reg),1);
  });
});
