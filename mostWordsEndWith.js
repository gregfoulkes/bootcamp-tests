//var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.';

function mostWordsEndWith(sentence){
  var map = {}
  var name = ' '
  var senSplit = sentence.split(' ')
	for(var i=0;i<senSplit.length;i++){
    	var index = senSplit[i]
        var indexSlice = index.slice(-1)
      if (map[indexSlice] == undefined){
      	map[indexSlice]= 0;
        //max = map+1;
      }
      map[indexSlice] = map[indexSlice]+1;
    }
        //console.log(map)
 var max = 0;

    for (var key in map){
      if(map[key] > max){
        max = map[key];
        name = key;
   	 }
  }
console.log(name);
return name;
}
