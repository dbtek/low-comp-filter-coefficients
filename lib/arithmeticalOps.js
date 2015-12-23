/** @module Provides bitwise arithmetic operations. */

/**
 * Converts given decimal to binary form.
 * @param{number} dec - Decimal number.
 * @returns{string}   - Binary representation.
 */
export function decTobin(dec) {
  return (dec >>> 0).toString(2);
};


/**
 * Converts given decimal to binary form.
 * @param{number} dec - Decimal number.
 * @returns{string}   - Binary representation.
 */
export function binToDec(bin) {
  parseInt(bin, 2);
};

/**
 * Measures the complexity of given binary or CSD expansion.
 * @param {string} number - Binary / CSD expansion of a number.
 * @returns {number}      - Complexity defined as the total number of non-zero bits in the given binary / csd expansion.
 */
export function complexity(number) {
  let counter = 0
  for(let i of number) {
    if(i !== '0')
      counter++;
  }
  // return number of non-zero bits
  return counter;
};

export default {
  decTobin,
  binToDec,
  complexity
};
