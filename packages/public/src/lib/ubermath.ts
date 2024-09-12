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
      for (
        let j = 0;
        !notPrime && j < primes.length && primes[j] < upperLimit;
        j += 1
      ) {
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
    return (getPrimesUpTo(limit).length / limit) * 100;
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

  function sortNumbers(a: number, b: number): number {
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
  export function factorizeInputs(
    inputs: Array<number>,
    primes: Array<number> = [2, 3]
  ): Array<Array<number>> {
    let largestPrime = Math.max(...primes);

    const allFactors: Array<{ input: number; factors: Array<number> }> = [];

    const sortedInputs = Array.from(inputs).sort(sortNumbers);

    for (const input of sortedInputs) {
      // console.log('Starting factorization of %d', input);
      let factors: Array<number> = [];
      let upperLimit: number = input;
      let i = 2;
      let current: number = input;

      let currentPrimeIndex = 0;
      while (currentPrimeIndex < primes.length && i < upperLimit) {
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

      while (i < upperLimit) {
        // console.log('Testing %d on an upper limit of %d', i, upperLimit);
        const rem = current % i;
        if (rem === 0) {
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
          upperLimit = (current - rem) / i;
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
      allFactors.push({ input, factors });
    }
    // console.log('Primes pool is %s', primes);
    return allFactors
      .sort(({ input: a }, { input: b }) => sortNumbers(a, b))
      .map(({ factors }) => factors);
  }

  export function range(length: number, start = 0, step = 1): Array<number> {
    const output = [];
    for (let i = 0; i < length; i += 1) {
      output.push(i * step + start);
    }
    return output;
  }

  export const factorial = (input: number): number => {
    let output = 1;
    for (let i = 2; i <= input; i += 1) {
      output *= i;
    }
    return output;
  };

  class SQRTApprox {
    private lb = 0;
    private hb = Infinity;
    private candidate = 0;
    constructor(private input: number, private iterations = 100) {
      this.candidate = this.input;
      this.hb = input;
    }
    public approx() {
      for (let i = 0; i < this.iterations; i += 1) {
        if (this.lb === this.hb) {
          this.candidate = this.lb;
          break;
        } else {
          const delta = this.hb - this.lb;
          this.candidate = this.lb + delta / 2;
          const sqr = this.candidate ** 2;
          if (sqr > this.input) {
            this.hb = this.candidate;
          } else if (sqr < this.input) {
            this.lb = this.candidate;
          } else {
            break;
          }
        }
      }
      return this.candidate;
    }
  }

  export const approximateSquareRoot = (
    input: number,
    iterations?: number
  ): number => new SQRTApprox(input, iterations ?? input).approx();
}

class ArbitraryInteger {

  /**
   * That's how we sum numbers by hand
   */
  public static sumDigits(
    arr1: Array<number>,
    arr2: Array<number>
  ): Array<number> {
    const output: Array<number> = [];
    let rem = 0;
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i += 1) {
      const d1 = arr1[arr1.length - i - 1] ?? 0;
      const d2 = arr2[arr2.length - i - 1] ?? 0;
      const s = rem + d1 + d2;
      const u = s % 10;
      rem = s - u;
      output.unshift(u);
    }
    if (rem > 0) {
      output.unshift(rem);
    }
    return output;
  }

  /**
   * That's how we multiply numbers by hand
   */
  public static multiplyDigits(
    arr1: Array<number>,
    arr2: Array<number>
  ): Array<number> {
    let output: Array<number> = [0];
    for (let i = 0; i < arr1.length; i += 1) {
      const d1 = arr1[arr1.length - i - 1];
      let rem = 0;
      let partial: Array<number> = Array.from<number>({ length: i }).fill(0);
      for (let j = 0; j < arr2.length; j += 1) {
        const d2 = arr2[arr2.length - j - 1];
        const p = rem + d1 * d2;
        const u = p % 10;
        rem = (p - u) / 10;
        partial.unshift(u);
      }
      if (rem > 0) {
        partial.unshift(rem);
      }
      output = ArbitraryInteger.sumDigits(output, partial);
    }
    return output;
  }

  public static compareDigits(
    arr1: Array<number>,
    arr2: Array<number>
  ): number {
    let diff = arr1.length - arr2.length;
    // Same length, check digit by digit, the first difference is returned
    if (diff === 0) {
      for (let i = 0; i < arr1.length; i += 1) {
        const d1 = arr1[i];
        const d2 = arr2[i];
        if (d1 !== d2) {
          return d1 - d2;
        }
      }
    }
    // Default case, when numbers have different lengths or digits are equal
    return diff;
  }

  /**
   * @param digits
   * @returns
   */
  public static trimLeadingZeros(input: Array<number>): Array<number> {
    const digits = input.slice();
    for (let i = 0; i < digits.length; i += 1) {
      if (digits[0] === 0 && digits.length > 1) {
        digits.shift();
      } else {
        break;
      }
    }
    return digits;
  }

  /**
   * arr 1 must be >= arr2 or result will be undetermined
   */
  public static subDigits(
    arr1: Array<number>,
    arr2: Array<number>
  ): Array<number> {
    const output: Array<number> = [];
    let borrow = 0;
    for (let i = 0; i < arr1.length; i += 1) {
      let d1 = arr1[arr1.length - i - 1] - borrow;
      const d2 = arr2[arr2.length - i - 1] ?? 0;
      if (d1 < d2) {
        d1 += 10;
        borrow = 1;
      }
      output.unshift(d1 - d2);
    }
    return ArbitraryInteger.trimLeadingZeros(output);
  }

  public static divideDigits(
    arr1: Array<number>,
    arr2: Array<number>
  ): Array<number> {
    let curr: Array<number> = [];
    let output: Array<number> = [];
    for (let i = 0; i < arr1.length; i += 1) {
      curr.push(arr1[i]);
      const cmp = ArbitraryInteger.compareDigits(curr, arr2);
      if (cmp < 0) {
        output.push(0);
      } else if (cmp === 0) {
        output.push(1);
      } else {
        for (let t = 2; t <= 10; t += 1) {
          const candidate = ArbitraryInteger.multiplyDigits(arr2, [t]);
          const candidateCmp = ArbitraryInteger.compareDigits(curr, candidate);
          if (candidateCmp < 0) {
            output.push(t - 1);
            curr = ArbitraryInteger.subDigits(
              curr,
              ArbitraryInteger.multiplyDigits(arr2, [t - 1])
            );
            if(curr.length === 1 && curr[0] === 0) {
              curr.shift();
            }
            break;
          }
        }
      }
    }
    return ArbitraryInteger.trimLeadingZeros(output);
  }

  public static parse(input: string | number): ArbitraryInteger {
    const strInput = `${input}`.trim();
    if (strInput.length > 0) {
      let sign: -1 | 1 = 1;
      let digits: Array<number> = [];
      // Pick minus sign and digits
      for (let i = 0; i < strInput.length; i += 1) {
        const curr = strInput.charAt(i);
        if (i === 0 && curr === '-') {
          sign = -1;
        } else if (curr >= '0' && curr <= '9') {
          digits.push(Number(curr));
        }
      }
      // Remove leading zeros
      digits = ArbitraryInteger.trimLeadingZeros(digits);
      return new ArbitraryInteger({ sign, digits });
    }
    // Return 0 in any other case
    return new ArbitraryInteger({ digits: [0] });
  }
  private sign: -1 | 1;
  private digits: Array<number>;
  public constructor({
    sign = 1,
    digits,
  }: {
    sign?: -1 | 1;
    digits: Array<number>;
  }) {
    this.sign = sign;
    this.digits = digits.slice();
  }

  public setSign(sign: -1 | 1): this {
    this.sign = sign;
    return this;
  }

  public setDigits(digits: Array<number>): this {
    this.digits = digits;
    return this;
  }

  /**
   * Compare the ArbitraryInteger with another
   */
  public compare(input: ArbitraryInteger): number {
    // Classic trick to do a quick compare, it works also with signs
    // If numbers have different signs then you don't need to compare the digits
    let diffSign = this.sign - input.sign;
    // Same sign, check digit by digit
    if (diffSign === 0) {
      const cmp = ArbitraryInteger.compareDigits(this.digits, input.digits);
      // if digits are different and sign is negative I just invert the comparison
      return cmp === 0 ? cmp : this.sign * cmp;
    }
    return diffSign;
  }

  public clone(): ArbitraryInteger {
    return new ArbitraryInteger({
      sign: this.sign,
      digits: this.digits.slice(),
    });
  }

  public sum(input: ArbitraryInteger): ArbitraryInteger {
    const diffSign = this.sign - input.sign;
    if (diffSign === 0) {
      // Signs are the same, so this is a sum
      return new ArbitraryInteger({
        sign: this.sign,
        digits: ArbitraryInteger.sumDigits(this.digits, input.digits),
      });
    } else {
      // Signs are different, so this is really a subtraction with sign flipping based on the order of the operands
      const [lt, gt] = [this, input]
        .map((x) => x.clone().setSign(1))
        .sort((a, b) => a.compare(b));
      return new ArbitraryInteger({
        sign: Math.sign(diffSign) as -1 | 1,
        digits: ArbitraryInteger.subDigits(gt.digits, lt.digits),
      });
    }
  }

  public sub(input: ArbitraryInteger): ArbitraryInteger {
    const diffSign = this.sign - input.sign;
    if (diffSign === 0) {
      // Signs are the same, so this is a subtraction
      const [lt, gt] = [this, input]
        .map((x) => x.clone().setSign(1))
        .sort((a, b) => a.compare(b));
      return new ArbitraryInteger({
        sign: this.sign,
        digits: ArbitraryInteger.subDigits(gt.digits, lt.digits),
      });
    } else {
      // Signs are different, so this is really a sum with sign flipping based on the order of the operands
      return new ArbitraryInteger({
        sign: Math.sign(diffSign) as -1 | 1,
        digits: ArbitraryInteger.sumDigits(this.digits, input.digits),
      });
    }
  }

  public multiply(input: ArbitraryInteger): ArbitraryInteger {
    // Multiplication is simpler on the signs
    return new ArbitraryInteger({
      sign: (this.sign * input.sign) as -1 | 1,
      digits: ArbitraryInteger.multiplyDigits(this.digits, input.digits),
    });
  }

  public divide(input: ArbitraryInteger): ArbitraryInteger {
    // Multiplication is simpler on the signs
    const [lt, gt] = [this, input]
      .map((x) => x.clone().setSign(1))
      .sort((a, b) => a.compare(b));
    return new ArbitraryInteger({
      sign: (this.sign * input.sign) as -1 | 1,
      digits: ArbitraryInteger.divideDigits(gt.digits, lt.digits),
    });
  }

  public toString() {
    return `${this.sign < 0 ? '-' : ''}${this.digits.join('')}`;
  }
}

// console.log(ArbitraryInteger.parse('111111').divide(ArbitraryInteger.parse('3')).toString());
