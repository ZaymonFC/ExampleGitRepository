const assert = require('assert')
const linearPoint = require('./linearPoint')

// m, x, c, result
const testCases = [
    [2, 1, 4, 6],
    [2, 0, 4, 4],
    [2, -1, 4, 2],
]

describe('LinearPoint', () => {
    for(testData of testCases) {
        it('Should return the correct result', () => {
            let m = testData[0]
            let x = testData[1]
            let c = testData[2]
            let expectedResult = testData[3]

            assert.equal(linearPoint(m, x, c), expectedResult)
        })
    }
})

