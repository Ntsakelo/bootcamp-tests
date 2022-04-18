describe('Test my fromWhere Function',function(){
    it('it should return the name of the town for a registration number starting with "CY"',function(){
        assert.equal('Bellville',fromWhere('CY'))
    })
    it('it should return the name of the town for a registration number starting with "CJ"',function(){
        assert.equal('Paarl',fromWhere('CJ'))
    })
    it('it should return the name of the town for a registration number starting with "CA"',function(){
        assert.equal('Cape Town',fromWhere('CA'))
    })

    it('it should return a "some other place!" string for an unknown town',function(){
        assert.equal('Some other place!',fromWhere('CC'))
    })
}) 