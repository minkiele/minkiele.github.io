export namespace UberMath {
    export type SumTerm = (i: number, start: number, end: number) => number;
    export function sum(start: number, end: number, sumTerm: SumTerm): number {
        let sum: number = 0;
        for (let i = start; i <= end; i += 1) {
            sum += sumTerm(i, start, end);
        }
        return sum;
    }

    export function getPrimesUpTo(limit: number): Array<number> {

        const primes: Array<number> = [];

        /**
         * Optimize: start from 3 and consider only odd numbers. We know
         */
        for (let i = 3; i <= limit; i += 2) {
            let notPrime = false;
            let upperLimit = i;
            // console.log('Testing %d', i);
            for (let j = 0; !notPrime && j < primes.length && primes[j] < upperLimit; j += 1) {
                const rem: number = i % primes[j];
                if (rem === 0) {
                    notPrime = true;
                } else {
                    upperLimit = (i - rem) / primes[j];
                    // console.log('Tested %d with %d, lowering upper limit down to %d', i, primes[j], upperLimit);
                }
            }
            if (!notPrime) {
                primes.push(i);
                // console.log('Found prime %d', i);
            }
        }

        if (limit >= 2) {
            primes.unshift(2);
        }

        return primes;
    }

    export function getPrimesRateUpTo(limit: number): number {
        return getPrimesUpTo(limit).length / limit * 100;
    }

    export function isPrime(input: number): boolean {
        let upperLimit: number = input;
        if (input < 2) {
            return false;
        }
        if (input % 2 === 0) {
            return false;
        }
        for (let i = 3; i < upperLimit; i += 2) {
            const rem: number = input % i;
            if (rem === 0) {
                return false;
            } else {
                upperLimit = (input - rem) / i;
                // console.log('Set upper limit to %d', upperLimit);
            }
        }
        return true;
    }

    export function factorize(input: number): Array<number> {
        let factors: Array<number> = [];
        let upperLimit: number = input;
        let i: number = 2;
        let current: number = input;
        while (i < upperLimit) {
            // console.log('Testing %d on an upper limit of %d', i, upperLimit);
            const rem = current % i;
            if (rem === 0) {
                factors.push(i);
                current /= i;
                upperLimit = current;
                // console.log('Found %d, setting current to %d', i, current);
            } else {
                upperLimit = (current - rem) / i;
                i += (i === 2 ? 1 : 2);
            }
        }
        // Current is already the largest prime.
        // console.log('Adding back largest prime number found %d', current);
        if (i >= upperLimit) {
            factors.push(current);
        }
        return factors;
    }

    function sortNumbers (a: number, b: number): number {
        return a - b;
    }

    /**
     * This is a function to progressively factorize an array of numbers
     * I believe I wrote this in 2019, but while toying around with it in 2022 I found
     * there is a little problem: for certain sets the it will fail to find 3 as a prime
     * thus setting 9 as prime. Bootstrapping the primes array including 3 seems to solve the problem.
     * @param inputs An array of natural numbers
     * @param primes An array of prime numbers to speed up factorization
     * @returns An array of arrays
     */
    export function factorizeInputs(inputs: Array<number>, primes: Array<number> = [2, 3]): Array<Array<number>> {

        let largestPrime = Math.max(...primes);

        const allFactors: Array<{input: number, factors: Array<number>}> = [];

        const sortedInputs = Array.from(inputs).sort(sortNumbers);

        for (const input of sortedInputs) {
            console.log('Starting factorization of %d', input);
            let factors: Array<number> = [];
            let upperLimit: number = input;
            let i = 2;
            let current: number = input;

            let currentPrimeIndex = 0;
            while (currentPrimeIndex < primes.length && i < upperLimit) {
                i = primes[currentPrimeIndex];
                console.log('Testing found prime %d on an upper limit of %d', i, upperLimit);
                const rem = current % i;
                if (rem === 0) {
                    factors.push(i);
                    current /= i;
                    upperLimit = current;
                } else {
                    upperLimit = (current - rem) / i;
                    currentPrimeIndex += 1;
                }
            }

            while (i < upperLimit) {
                console.log('Testing %d on an upper limit of %d', i, upperLimit);
                const rem = current % i;
                if (rem === 0) {
                    factors.push(i);
                    if (i > largestPrime) {
                        primes.push(i);
                        largestPrime = i;
                        console.log('Adding %d as largest prime', largestPrime);
                    }
                    current /= i;
                    upperLimit = current;
                    console.log('Found %d, setting current to %d', i, current);
                } else {
                    upperLimit = (current - rem) / i;
                    i += (i === 2 ? 1 : 2);
                }
            }
            // Current is already the largest prime.
            console.log('Adding back largest prime number found %d', current);
            if (i >= upperLimit) {
                factors.push(current);
                if (i > largestPrime) {
                    primes.push(i);
                    largestPrime = i;
                }
            }
            allFactors.push({input, factors});
        }
        return allFactors.sort(({input: a}, {input: b}) => sortNumbers(a, b)).map(({factors}) => factors);
    }

    export function range(length: number, start = 0, step = 1): Array<number> {
        const output = [];
        for(let i = 0; i < length; i += 1) {
            output.push(i * step + start);
        }
        return output;
    }

}
