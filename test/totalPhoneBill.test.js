describe ('totalPhoneBill', function(){
  it ('Should calculate total cost of calls',function(){
    assert.equal(totalPhoneBill('call, call, sms, call, sms'),"R9.55");
  });
  it ('Should calculate total cost of calls',function(){
    assert.equal(totalPhoneBill('call, call, call, call, sms'),"R11.65");
  });
});
