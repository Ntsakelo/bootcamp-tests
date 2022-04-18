let dataList = [
    {department : 'Computers', sales : 4500, day : 'Monday'},
    {department : 'Gardening', sales : 1500, day : 'Monday'},
    {department : 'Computers', sales : 5500, day : 'Monday'},
    {department : 'Gardening', sales : 7500, day : 'Tuesday'},
    {department : 'Computers', sales : 2505, day : 'Tuesday'},
    {department : 'Furniture', sales : 1540, day : 'Tuesday'}
 ]

 let dataList2 = [
    {department : 'Computers', sales : 1500, day : 'Monday'},
    {department : 'Gardening', sales : 9500, day : 'Monday'},
    {department : 'Computers', sales : 5500, day : 'Monday'},
    {department : 'Gardening', sales : 7500, day : 'Tuesday'},
    {department : 'Computers', sales : 1500, day : 'Tuesday'},
    {department : 'Furniture', sales : 1540, day : 'Tuesday'}
 ]

 let dataList3 = [
    {department : 'Computers', sales : 1000, day : 'Monday'},
    {department : 'Furniture', sales : 5000, day : 'Monday'},
    {department : 'Computers', sales : 1000, day : 'Monday'},
    {department : 'Gardening', sales : 7500, day : 'Tuesday'},
    {department : 'Computers', sales : 1500, day : 'Tuesday'},
    {department : 'Furniture', sales : 7000, day : 'Tuesday'}
 ]

 let dataList4 = [
    {department : 'IT', sales : 1000, day : 'Monday'},
    {department : 'Finance', sales : 5000, day : 'Monday'},
    {department : 'Finance', sales : 1000, day : 'Monday'},
    {department : 'Operations', sales : 7500, day : 'Tuesday'},
    {department : 'Finance', sales : 1500, day : 'Tuesday'},
    {department : 'Operations', sales : 7000, day : 'Tuesday'}
 ]

describe('Test my mostProfitableDepartment',function(){
    it('It should return "Computers" as the most profitable department',function(){
        assert.equal('Computers',mostProfitableDepartment(dataList));
    })

    it('It should return "Gardening" as the most profitable department',function(){
        assert.equal('Gardening',mostProfitableDepartment(dataList2));
    })
    it('It should return "Furniture" as the most profitable department',function(){
        assert.equal('Furniture',mostProfitableDepartment(dataList3));
    })
    it('It should return "Operations" as the most profitable department',function(){
        assert.equal('Operations',mostProfitableDepartment(dataList4));
    })
    
})