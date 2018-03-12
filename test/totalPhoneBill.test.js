describe ('totalPhoneBill', function(){
  it ('Should calculate total cost of calls',function(){
    var phone = 'call, call, sms, call, sms';
    var call = 3;
    var sms = 2;
  var total= call*2.75 + sms*0.65;
    assert.equal(totalPhoneBill(phone),"R"+total.toFixed(2));
  });
});
