const {
    isEven, 
    findWhichEnd, 
} = require('./function')


// test 1
test('should combine words', () => { 
    expect(isEven(12)).toBe(true)
    expect(isEven(35)).toBe(false)
 })

// test 2
test('should tell the where certain letter is found', () => { 
    expect(findWhichEnd('sparrow',"s")).toBe("start")
    expect(findWhichEnd('woodchuck',"k")).toBe("end")
    expect(findWhichEnd('trout',"t")).toBe("both")
    expect(findWhichEnd('cuttlefish',"u")).toBe("neither")
 })


