const {Node, LinkedList} = require('./reverse')

describe('reverse', ()=>{
    let list; 
    
    beforeEach(() => {
        list = new LinkedList();    
    })
    
    it('add_to_head', ()=>{
        list.add_to_head(1)
        expect(list.head.value).toEqual(1)
        list.add_to_head(2)
        expect(list.head.value).toEqual(2)
    })
    
    it('contains', ()=>{
        list.add_to_head(1)
        list.add_to_head(2)
        list.add_to_head(10)
        
        expect(list.contains(2)).toBe(true)
        expect(list.contains(10)).toBe(true)
        expect(list.contains(100)).toBe(false)
    })
    
    it('empty reverse', ()=>{
        list.reverse_list(list.head, null)
        expect(list.head.value).toEqual(null)
    })
    
    it('single reverse', ()=>{
        list.add_to_head(1)
        list.reverse_list(list.head, null)
        expect(list.head.value).toEqual(1)
    })
    
    it('longer reverse', ()=>{
        list.add_to_head(1)
        list.add_to_head(2)
        list.add_to_head(3)
        list.add_to_head(4)
        list.add_to_head(5)
        
        expect(list.head.value).toEqual(5)
        list.reverse_list(list.head, null)
        expect(list.head.value).toEqual(1)
        expect(list.head.get_next().value).toEqual(2)
        expect(list.head.get_next().get_next().value).toEqual(3)
    })
})