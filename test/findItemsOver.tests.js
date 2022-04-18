let newList = [
    {
        name: 'Shoes',
        qty: 20
    },
    {
        name: 'Jersey',
        qty: 10
    },
    {
        name: 'Trousers',
        qty: 25
    },
    {
        name:'Socks',
        qty: 39
    },
    {
        name:'Dresses',
        qty: 45
    }
]

let newList2 = [
    {
        name: 'Sweets',
        qty: 10
    },
    {
        name: 'Biscuits',
        qty: 15
    },
    {
        name: 'Chocolates',
        qty: 10
    },
    {
        name:'Simba',
        qty: 15
    },
    {
        name:'Coldrinks',
        qty: 5
    }
]

let newList3 = [
    {
        name: 'Apples',
        qty: 20
    },
    {
        name: 'Banana',
        qty: 25
    },
    {
        name: 'Oranges',
        qty: 10
    },
    {
        name:'Guavas',
        qty: 15
    },
    {
        name:'Lemons',
        qty: 40
    }
]

let newList4 = [
    {
        name: 'Apples',
        qty: 20
    },
    {
        name: 'Banana',
        qty: 10
    },
    {
        name: 'Oranges',
        qty: 10
    },
    {
        name:'Guavas',
        qty: 15
    },
    {
        name:'Lemons',
        qty: 20
    }
]

describe('Test my findItemsOver Function',function(){
    it('it should return items that are over 20',function(){
        assert.deepEqual([{name: 'Trousers', qty: 25},{name: 'Socks', qty: 39},{name: 'Dresses', qty: 45}],findItemsOver(newList,20));
    })
    it('it should return items that are over 10',function(){
        assert.deepEqual([{name: 'Biscuits', qty: 15},{name: 'Simba', qty: 15}],findItemsOver(newList2,10));
    })
    it('it should return items that are over 25',function(){
        assert.deepEqual([{name: 'Lemons', qty: 40}],findItemsOver(newList3,25));
    })
    it('it should return items that are over 15',function(){
        assert.deepEqual([{name: 'Apples', qty: 20},{name: 'Lemons', qty: 20}],findItemsOver(newList4,15));
    })
})