import {primeFactors} from "./prime-factors";

describe('prime factoring testing', () => {
    describe('getting all primes list', () => {
        test.each([-10, -1, 0, 1])('empty primes list, when passed not natural number', (n) => {
            expect(primeFactors.getAllPrimes(n)).toEqual([])
        })
        test('first prime, when passed 2', () => {
            expect(primeFactors.getAllPrimes(2)).toEqual([2])
        })
        test('first two primes, when passed 3', () => {
            expect(primeFactors.getAllPrimes(3)).toEqual([2, 3])
        })
        test('a little primes amount, when passed 10', () => {
            expect(primeFactors.getAllPrimes(10)).toEqual([2, 3, 5, 7])
        })
        test('medium primes amount, when passed 100', () => {
            expect(primeFactors.getAllPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
        })
        test('large primes amount, when passed 9999999', () => {
            expect(primeFactors.getAllPrimes(1000000))
        })
        test('error getting primes, when passed too big amount', () => {
            expect(primeFactors.getAllPrimes(100000000))
        })
    })
    describe('getting prime factors', () => {
        test.each([-10, -1, 0, 1])('empty factores list, when passed not naturals', (n) => {
            expect(primeFactors.generate(n)).toEqual([])
        })
        test('prime number factoring, when passed 2', () => {
            expect(primeFactors.generate(2)).toEqual([2])
        })
        test('prime number factoring, when passed 3', () => {
            expect(primeFactors.generate(3)).toEqual([3])
        })
        test('composite number factoring, when passed 6', () => {
            expect(primeFactors.generate(6)).toEqual([2, 3])
        })
        test('middle amount of factors, when passed 300', () => {
            expect(primeFactors.generate(300)).toEqual([2,  2, 3, 5, 5])
        })
        test('large amount  of factors , when passed 10', () => {
            console.log(primeFactors.generate(100000000))
        })
    })
})