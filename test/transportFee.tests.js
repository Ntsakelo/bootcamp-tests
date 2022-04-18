describe('Test my transportFee Function',function(){
    it('It should return "20" when shift is in the morning',function(){
        assert.equal('R20', transportFee('morning'));
    })
    it('It should return "10" when shift is in the afternoon',function(){
        assert.equal('R10', transportFee('afternoon'));
    })
    it('It should return "free" when shift is at night',function(){
        assert.equal('free', transportFee('night'));
    })
})