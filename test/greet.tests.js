describe('Test my greet function' , function(){
    it('it should greet "Ntsakelo" correctly when called' , function(){
        assert.equal('Hello, Ntsakelo',greet('Ntsakelo'));
    });
    it('it should greet "Arnold" correctly when called' , function(){
        assert.equal('Hello, Arnold',greet('Arnold'));
    });
    it('it should greet "Makhuvele" correctly when called' , function(){
        assert.equal('Hello, Makhuvele',greet('Makhuvele'));
    });
    it('it should greet "Coders" correctly when called' , function(){
        assert.equal('Hello, Coders',greet('Coders'));
    });
});