//var regTwo = 'CY 28762,CX 34758,CL 29867,CL 32946, CL 98696';
describe ('countAllFromTown', function(){

it ('Should return 2', function(){
  assert.equal(countAllFromTown('CY 28762,CX 34758,CL 29867,CL 32946','CL'),2);
  });
it ('Should return 3', function(){
  assert.equal(countAllFromTown('CY 28762,CX 34758,CL 29867,CL 32946,CL 698699','CL'),3);
  });
});
