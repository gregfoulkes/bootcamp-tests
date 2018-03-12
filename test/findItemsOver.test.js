describe ('findItemsOver', function(){

  it ('Should return items over threshold ', function(){
    var threshold = 30;
    var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

    assert.deepEqual(findItemsOver(itemList,threshold),[{"name":"pears","qty":37}]);
  });
});
