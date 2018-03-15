describe ('countAllPaarl', function(){

it ('Should count number of Paarl registrations', function(){
  assert.equal(countAllPaarl('CJ 786876, CY 070973'),1);
  });
it ('Should equal 1', function(){
  assert.equal(countAllPaarl('CJ 786876, CY 070973 ,CJ 079708'),2)
  });
});
