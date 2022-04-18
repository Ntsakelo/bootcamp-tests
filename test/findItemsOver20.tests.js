let listItems = [
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
        qty: 25
    },
    {
        name:'Guavas',
        qty: 39
    },
    {
        name:'Lemons',
        qty: 45
    }
]

let listItems2 = [
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
        qty: 20
    }
]

let listItems3 = [
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

let listItems4 = [
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

describe('Test my findItemsOver20 Function',function(){
    it('it should return items that have quantity over 20',function(){
        assert.deepEqual([{name: 'Oranges', qty: 25},{name: 'Guavas', qty: 39},{name: 'Lemons', qty: 45}],findItemsOver20(listItems))
    })
    it('it should return items that have quantity over 20',function(){
        assert.deepEqual([{name: 'Banana', qty: 25}],findItemsOver20(listItems2))
    })
    it('it should return items that have quantity over 20',function(){
        assert.deepEqual([{name: 'Banana', qty: 25},{name: 'Lemons', qty: 40}],findItemsOver20(listItems3))
    })
    it('it should return items that have quantity over 20',function(){
        assert.deepEqual([],findItemsOver20(listItems4))
    })
})