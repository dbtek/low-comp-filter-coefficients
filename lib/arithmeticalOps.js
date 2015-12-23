/** @module Provides bitwise arithmetic operations. */

/**
 * Converts given decimal to binary form.
 * @param{number} dec  - Decimal number.
 * @param{number} bits - Number of result bits.
 * @returns{string}    - Binary representation.
 */
export function decTobin(dec, bits = 8) {
  // convert whole number part
  let number = parseInt(dec);
  let numberBin = (number >>> 0).toString(2);

  // convert fraction part
  let fraction = dec - number;
  let fractionBin = '';


  if(fraction > 0.0) {
    let i = 1;
    while(i < bits) {
      let outcome = fraction * 2;

      if(outcome == 1.0) {
        fractionBin += '1';
        break;
      }

      if(outcome > 1.0) {
        fractionBin += '1';
        // extract fraction part of the outcome
        fraction = outcome - parseInt(outcome);
      }
      else {
        fractionBin += '0';
        fraction = outcome;
      }
      i++;
    }
  }

  return numberBin + '.' + fractionBin;
};


/**
 * Converts given decimal to binary form.
 * @param{number} dec - Decimal number.
 * @returns{string}   - Binary representation.
 */
export function binToDec(bin) {
  let numberDec = parseInt(bin, 2);
  let fraction = (bin+'').split('.')[1];

  console.log(numberDec, fraction);

  let fractionDec = 0;
  if(fraction && fraction.length) {
    let i = -1;
    let f;
    for(f of fraction) {
      fractionDec += f * Math.pow(2, i);
      i--;
    }
  }
  return numberDec + fractionDec;
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
