describe('Test my countRegNumber Function',function(){
    it('It should count the registration numbers in a string and return the count',function(){
        assert.equal(3, countRegNumber('345 CL,2897 CF, 111 CA')) 
    })
    it('It should count the registration numbers in a string and return the count',function(){
        assert.equal(2, countRegNumber('345 CL,2897 CF')) 
    }) 
    it('It should count the registration numbers in a string and return the count',function(){
        assert.equal(1, countRegNumber('345 CL')) 
    })
    it('It should count the registration numbers in a string and return the count',function(){
        assert.equal(0, countRegNumber('')) 
    })
}) 