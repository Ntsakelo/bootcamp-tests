describe('Test my totalPhoneBill Function',function(){
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R10.20',totalPhoneBill('sms,sms,sms,call,call,call'))
    })
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R3.40',totalPhoneBill('sms,call'));
    })
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R4.05',totalPhoneBill('sms,sms,call'));
    })
    it('it should return the total cost of a phone bill',function(){
        assert.equal('R2.75',totalPhoneBill('call'));
    })
})