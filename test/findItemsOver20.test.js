describe ('findItemsOver20', function(){

  it ('Should return items more than twenty', function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    assert.deepEqual(findItemsOver20(itemList), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);

  });
});
