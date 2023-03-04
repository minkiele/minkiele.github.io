"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 4573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ UberMath)
/* harmony export */ });
var UberMath;
(function(UberMath) {
    function sum(start, end, sumTerm) {
        let sum = 0;
        for(let i = start; i <= end; i += 1){
            sum += sumTerm(i, start, end);
        }
        return sum;
    }
    UberMath.sum = sum;
    function getPrimesUpTo(limit) {
        const primes = [];
        /**
     * Optimize: start from 3 and consider only odd numbers. We know
     */ for(let i = 3; i <= limit; i += 2){
            let notPrime = false;
            let upperLimit = i;
            // console.log('Testing %d', i);
            for(let j = 0; !notPrime && j < primes.length && primes[j] < upperLimit; j += 1){
                const rem = i % primes[j];
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
    UberMath.getPrimesUpTo = getPrimesUpTo;
    function getPrimesRateUpTo(limit) {
        return getPrimesUpTo(limit).length / limit * 100;
    }
    UberMath.getPrimesRateUpTo = getPrimesRateUpTo;
    function isPrime(input) {
        let upperLimit = input;
        if (input < 2) {
            return false;
        }
        if (input % 2 === 0) {
            return false;
        }
        for(let i = 3; i < upperLimit; i += 2){
            const rem = input % i;
            if (rem === 0) {
                return false;
            } else {
                upperLimit = (input - rem) / i;
            // console.log('Set upper limit to %d', upperLimit);
            }
        }
        return true;
    }
    UberMath.isPrime = isPrime;
    function factorize(input) {
        let factors = [];
        let upperLimit = input;
        let i = 2;
        let current = input;
        while(i < upperLimit){
            // console.log('Testing %d on an upper limit of %d', i, upperLimit);
            const rem = current % i;
            if (rem === 0) {
                factors.push(i);
                current /= i;
                upperLimit = current;
            // console.log('Found %d, setting current to %d', i, current);
            } else {
                upperLimit = (current - rem) / i;
                i += i === 2 ? 1 : 2;
            }
        }
        // Current is already the largest prime.
        // console.log('Adding back largest prime number found %d', current);
        if (i >= upperLimit) {
            factors.push(current);
        }
        return factors;
    }
    UberMath.factorize = factorize;
    function sortNumbers(a, b) {
        return a - b;
    }
    function factorizeInputs(inputs, primes = [
        2,
        3
    ]) {
        let largestPrime = Math.max(...primes);
        const allFactors = [];
        const sortedInputs = Array.from(inputs).sort(sortNumbers);
        for (const input of sortedInputs){
            // console.log('Starting factorization of %d', input);
            let factors = [];
            let upperLimit = input;
            let i = 2;
            let current = input;
            let currentPrimeIndex = 0;
            while(currentPrimeIndex < primes.length && i < upperLimit){
                i = primes[currentPrimeIndex];
                // console.log('Testing found prime %d on an upper limit of %d', i, upperLimit);
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
            while(i < upperLimit){
                // console.log('Testing %d on an upper limit of %d', i, upperLimit);
                const rem1 = current % i;
                if (rem1 === 0) {
                    factors.push(i);
                    if (i > largestPrime) {
                        primes.push(i);
                        largestPrime = i;
                    // console.log('Adding %d as largest prime', largestPrime);
                    }
                    current /= i;
                    upperLimit = current;
                // console.log('Found %d, setting current to %d', i, current);
                } else {
                    upperLimit = (current - rem1) / i;
                    i += i === 2 ? 1 : 2;
                }
            }
            // Current is already the largest prime.
            // console.log('Adding back largest prime number found %d', current);
            if (i >= upperLimit) {
                factors.push(current);
                if (i > largestPrime) {
                    primes.push(i);
                    largestPrime = i;
                }
            }
            allFactors.push({
                input,
                factors
            });
        }
        // console.log('Primes pool is %s', primes);
        return allFactors.sort(({ input: a  }, { input: b  })=>sortNumbers(a, b)).map(({ factors  })=>factors);
    }
    UberMath.factorizeInputs = factorizeInputs;
    function range(length, start = 0, step = 1) {
        const output = [];
        for(let i = 0; i < length; i += 1){
            output.push(i * step + start);
        }
        return output;
    }
    UberMath.range = range;
    var factorial = UberMath.factorial = (input)=>{
        let output = 1;
        for(let i = 2; i <= input; i += 1){
            output *= i;
        }
        return output;
    };
})(UberMath || (UberMath = {}));


/***/ })

};
;