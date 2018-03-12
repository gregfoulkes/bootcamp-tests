describe ('countAllFromTown', function(){

it ('Should count all registrations from town', function(){

  var reg = 'CY 28762,CX 34758,CL 29867,CL 32946';
  var num = 'CL';
  
  assert.equal(countAllFromTown(reg,num),2);
  });
});
