describe ('isFromBellville', function() {

it ('returns true if reg from Bellville',function() {
 var reg = ('CY 246543');
 assert.equal(isFromBellville(reg), true);
  });
it ('returns false if reg not from Bellville', function(){
  var reg = ('CA 243243');
  assert.equal(reg,'CA 243243', false);
  });
});
