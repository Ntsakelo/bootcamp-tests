describe('test my isFromBellville Function' , function(){
    it("It should return true when number plate starts with 'CY'" , function(){
        assert.equal(true,isFromBellville('CY 243'));

        
    });
    it("It should return false when number plate does not start with 'CY'" , function(){
        assert.equal(false,isFromBellville('CJ 212'));

        
    });
    it("It should return false when number plate starts with a number and end with other letters" , function(){
        assert.equal(false,isFromBellville('123 CJ'));

        
    });
    it("It should return false when number plate starts with a number and end with the letters 'CY' " , function(){
        assert.equal(false,isFromBellville('123 CY'));

        
    });
 

});