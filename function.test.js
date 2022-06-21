const {
    isEven, 
    findWhichEnd, 
    countAbove,
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

//test 3
test('should tell you numbers in the array that are greater than the min', () => { 
    expect(countAbove([4, 8, 2, 2, 6],4)).toBe(3)
    expect(countAbove([3, -2, -17, 100, -42],18)).toBe(2)
 })
