import {primeFactors} from "./prime-factors";

const list = (...args: number []) => {
    const list = []
    for(let i of args) {
        list.push(i)
    }
    return list
}

describe('тест primeFactors', () => {
    test('test 1', () => {
        expect(list()).toEqual(primeFactors.generate(1))
    })
    test('test 2', () => {
        expect(list(2)).toEqual(primeFactors.generate(2))
    })
    test('test 3', () => {
        expect(list(3)).toEqual(primeFactors.generate(3))
    })
    test('test 4', () => {
        expect(list(2, 2)).toEqual(primeFactors.generate(4))
    })
    test('test 6', () => {
        expect(list(2, 3)).toEqual(primeFactors.generate(6))
    })
    test('test 8', () => {
        expect(list(2, 2, 2)).toEqual(primeFactors.generate(8))
    })
    test('test 9', () => {
        expect(list(3, 3)).toEqual(primeFactors.generate(9));
    })
    test('test 12', () => {
        expect(list(2,2, 3)).toEqual(primeFactors.generate(12));
    })
    test('test 19', () => {
        expect(list(19)).toEqual(primeFactors.generate(19));
    })
    test('test 125', () => {
        expect(list(5, 5, 5)).toEqual(primeFactors.generate(125));
    })
    test('middle amount of factors, when passed 300', () => {
        expect(primeFactors.generate(300)).toEqual([2,  2, 3, 5, 5])
    })
    test('large amount  of factors , when passed 10', () => {
        console.log(primeFactors.generate(39))
    })
})