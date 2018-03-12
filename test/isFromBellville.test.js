describe('The isFromBellville function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', isFromBellville(''));
    });
    it('should return Bellville reg', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', isFromBellville(''));
    });
});
