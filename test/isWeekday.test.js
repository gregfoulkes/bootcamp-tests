describe ('isWeekday',function(){

it ('Should return true if weekday', function (){
  var day = 'Monday';
  assert.equal(isWeekday(day),true)
  });
it ('Should return false if not weekday', function (){
  var day = 'Saturday';
  assert.equal(isWeekday(day),false)
  });
});
