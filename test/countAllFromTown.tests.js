describe('Test my countAllFromTown Function',function(){
    it('It should return the number of registrations from stellies("CL")',function(){
        assert.equal(2,countAllFromTown('CL 234, CF 678, CF 292 ,CL 678','CL'))
    })
    it('It should return the number of registrations from kuilsriver("CF")',function(){
        assert.equal(3,countAllFromTown('CL 234, CF 678, CF 292 ,CL 678,CF 298','CF'))
    })
    it('It should return the 0 when there are no registrations entered for a town',function(){
        assert.equal(0,countAllFromTown('','CF'))
    })
})