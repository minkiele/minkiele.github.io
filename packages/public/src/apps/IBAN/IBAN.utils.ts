export const validateIban = (input: string) =>
  mod(asNumber(reorder(sanitize(input))), 97, 9) === 1;

/**
 * Sanitize and normalize input
 */
const sanitize = (input: string) =>
  input.toUpperCase().replace(/[^A-Z0-9]+/g, '');

/**
 * To validate we must move the first 4 characters at the end of the string
 */
const reorder = (input: string) => input.substring(4) + input.substring(0, 4);

/**
 * Translating an IBAN in number is basically a conversion
 * from base 36 to base 10 digit by digit
 */
const asNumber = (input: string) => {
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    output += parseInt(input.charAt(i), 36);
  }
  return output;
};

/**
 * modulus on a number of arbitrary length,
 * it works exactly like a division made by hand
 * as you learn it at school
 */
const mod = (input: string, root: number, digits = 1) => {
  let rem = 0;
  for (let i = 0; i < input.length; i += digits) {
    rem = parseInt(rem + input.substring(i, i + digits)) % root;
  }
  return rem;
};
