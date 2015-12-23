import { decToBin, complexity } from './arithmeticalOps';

import { L, R } from './config';

/**
 * Returns a number between bounds with complexity less than or equal to complexity(x)
 * @param {number} x      - Number to be truncated.
 * @param {number} lBound - Lower bound.
 * @param {number} uBound - Upper bound.
 * @returns {number}      - Truncated number.
 */
export default (x, lBound, uBound) => {
  if(parseInt(lBound) * parseInt(uBound) < 0)
    return 0;

  let lBin = decToBin(lBound, R);
  let uBin = decToBin(uBound, R);
  let xBin = decToBin(x, R);

  let result;

  for(let i = -L; i < R - 1; i++) {
    result = (sumOfDigitsDecimals(lBin, i) + sumOfDigitsDecimals(uBin, i)) / 2
    if(result > lBound && result < uBound) {
      if(complexity(decToBin(result, R)) < complexity(xBin)) {
        return result;
      }
    }
  }
};

/**
 * Calculates sum of the binary digits' decimal provisions begining with left-most digit (which has position 0) to digit at order max.
 * @param {string} bin - Binary / CSD expansion.
 * @param {number} max - Order of the max bit to be added to sum.
 * @returns {number}   - Decimal sum of desired bits.
 */
export function sumOfDigitsDecimals(bin, max) {
  let parts = (bin+'').split('.');
  // reverse whole number part
  let number = parts[0].split('').reverse();
  let fraction = '.' + parts[1];
  let result = 0;

  let j;

  // boundary check
  if(max > R - 1) {
    max = R - 1;
  }

  // iterate over bits
  for(j = -L; j <= max; j++) {
    if(j <= 0)
      result += number[-j] * Math.pow(2, -j);
    else if(fraction && j < fraction.length)
      result += fraction[j] * Math.pow(2, -j);
    else
      break
  }

  return result;
};
