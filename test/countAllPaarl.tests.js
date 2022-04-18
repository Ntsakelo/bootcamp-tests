describe('Test my countAllPaarl Function',function(){
    it('it should return the count for all number plates that start with "CJ"',function(){
        assert.equal(3,countAllPaarl('CJ 678 453, CJ 925 333, CJ 4533,CF 298 675'))
    })
    it('it should return 0 when no registration starts with "CJ"',function(){
        assert.equal(0,countAllPaarl('CF 678 453, CA 925 333, CF 4533,CF 298 675'))
    })
    it('it should return 0 when the string is empty',function(){
        assert.equal(0,countAllPaarl(''))
    })

})