describe('Test my regCheck Function',function(){
    it('It should return true when number plate is from Gauteng',function(){
        assert.equal(true,regCheck('RG 45 HN GP','GP')); 
    })
    it('It should return true when number plate is from Limpopo',function(){
        assert.equal(true,regCheck('FGT 491 L','L')); 
    }) 
    it('It should return false when number plate is from Cape Town',function(){
        assert.equal(false,regCheck('CA 1234-123','CA')); 
    }) 
    it('It should return true when number plate is from Bellville',function(){
        assert.equal(false,regCheck('CY 678-453','CY')); 
    }) 
})