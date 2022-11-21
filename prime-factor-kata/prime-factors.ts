export const primeFactors = {
    generate (n: number) {
        const primes = []
        for (let candidate = 2; n > 1; candidate++) {
            for (; n % candidate === 0; n /= candidate) {
                primes.push(candidate)
            }
        }
        return primes
    }
}