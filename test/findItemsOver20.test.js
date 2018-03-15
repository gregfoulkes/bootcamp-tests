describe ('findItemsOver20', function(){

  it ('Should return items more than twenty', function(){
    assert.deepEqual(findItemsOver20([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27},]), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
  });
  it ('Should return items more than twenty', function(){
    assert.deepEqual(findItemsOver20([{name : 'bananas', qty : 19}, {name : 'oranges', qty : 42},]), [{"name":"oranges","qty":42}]);
  });
});
