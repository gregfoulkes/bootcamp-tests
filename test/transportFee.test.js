describe ('transportFee', function(){
it ('Should calculate transport fee',function(){
  assert.equal(transportFee('morning'),'R20');
  assert.equal(transportFee('afternoon'),'R10');
  assert.equal(transportFee('nightshift'),'free')
  });
});
