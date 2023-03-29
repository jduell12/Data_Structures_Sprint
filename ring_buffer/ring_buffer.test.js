const {RingBuffer} = require('./ring_buffer')

describe('RingBuffer', ()=>{
    let buffer;
    
    beforeEach(() => {
        buffer = new RingBuffer(5)
    })
    
    it('new buffer has correct capacity', ()=>{
        expect(buffer.capacity).toEqual(5)
    })
    
    it('add one element to buffer', ()=>{
        buffer.append('a')
        expect(buffer.get()).toEqual(['a'])
    })
    
    it('fill buffer to capacity', ()=>{
        buffer.append('a')
        buffer.append('b')
        buffer.append('c')
        buffer.append('d')
        buffer.append('e')
        expect(buffer.get()).toEqual(['a', 'b', 'c', 'd', 'e'])
    })
    
    it('adding to full buffer', ()=>{
        buffer.append('a')
        buffer.append('b')
        buffer.append('c')
        buffer.append('d')
        buffer.append('e')
        buffer.append('f')
        expect(buffer.get()).toEqual(['f', 'b', 'c', 'd', 'e'])
    })
    
    it('adding many elements to full buffer', ()=>{
        buffer.append('a')
        buffer.append('b')
        buffer.append('c')
        buffer.append('d')
        buffer.append('e')
        buffer.append('f')
        buffer.append('g')
        buffer.append('h')
        buffer.append('i')
        expect(buffer.get()).toEqual(['f', 'g', 'h', 'i', 'e'])
    })
})