export const primeFactors = {
    generate (n: number): number [] {
        if (n <= 1) {
            return []
        }
        const allPrimes = this.getAllPrimes(n)
        const allPrimesSet = new Set(allPrimes)
        let currentDiv = n
        let primeIndex = 0
        let prime: number
        const result = []

        while (!allPrimesSet.has(currentDiv)) {
            prime = allPrimes[primeIndex]
            const mod = currentDiv % prime
            if (mod === 0) {
                result.push(prime)
                currentDiv = currentDiv / prime
            } else {
                primeIndex++
            }
        }

        result.push(currentDiv)

        return result
    },

    composites: new Set<number>(),

    getAllPrimes (n: number): number [] {
        if (n <= 1) {
            return []
        }
        this.composites.clear()
        const primes = []
        let sqrtN = Math.ceil(Math.sqrt(n))
        sqrtN = sqrtN < n ? n : sqrtN
        for (let p = 2; p <= sqrtN; p++) {
            if (!this.composites.has(p)) {
                primes.push(p)
                this.crossOutComposite(p, sqrtN)
            }
        }

        return primes
    },

    crossOutComposite (prime: number, limit: number) {
        let i = 2
        let composite = prime * i
        while (composite <= limit) {
            this.composites.add(composite)
            composite = prime * i
            i++
        }
    }
}