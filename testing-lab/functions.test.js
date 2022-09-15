const { returnTwo, add, greeting, multiply, divide, subtract } = require('./functions')

require('./functions')

test('test returnTwo', () => {
    expect(returnTwo()).toEqual(2)
})

test('test greeting', () => {
    expect(greeting('James')).toEqual('Hello, James')
})

describe('Math functions', () => {
    test('test subtract', () => {
        expect(subtract(5,2)).toEqual(3)
    })
    
    test('test divide', () => {
        expect(divide(9,3)).toEqual(3)
    })
    
    test('test add', () => {
        expect(add(1,2)).toEqual(3)
    })
    
    test('test multiply', () => {
        expect(multiply(3,4)).toEqual(12)
    })
})