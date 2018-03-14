var reg = 'CY 28762,CX 34758,CL 29867,CL 32946';
var num = 'CL';
function countAllFromTown (reg,num){
var fromStellies = [];
  var splitReg = reg.split(',');
  for (var i=0; i<splitReg.length; i ++){
    if(splitReg[i].startsWith('CL'||num)){
      fromStellies.push(splitReg[i]);
  		}
  	}
 console.log(fromStellies.length)
 return fromStellies.length;
}
