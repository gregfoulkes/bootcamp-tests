describe ('findItemsOver', function(){

  it ('Should return pears', function(){

    assert.deepEqual(findItemsOver([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}], 30),[{"name":"pears","qty":37}]);
  });
  it ('Should return oranges', function(){

    assert.deepEqual(findItemsOver([{name : 'oranges', qty : 27}, {name : 'pears', qty : 3}], 15),[{"name":"oranges","qty":27}]);
  });
});
