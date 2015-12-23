import truncate from './truncate';
import { binToDec } from './arithmeticalOps';

// acceptable filter designs
let C = [];

/**
 * Tries to lower complexity of a coefficient.
 * @returns {string} - Fixed coefficient.
 */
export default (coefficient) => {
  if(coefficient === 0)
    return 0

  // upper & lower bounds
  let lBound = -2*coefficient;
  let uBound = 2*coefficient;

  let prevCoefficient = coefficient;

  // repeat until find a coefficient that satisfies specifications
  while(1) {
    coefficient = truncate(coefficient, lBound, uBound);
    // @todo Since I do not know how to accept a design, this line of code accepts first truncation. Needs to be changed...
    if(C.indexOf(coefficient) < 0)
      break;
    else {
      if(coefficient > prevCoefficient)
        uBound = coefficient;
      else
        lBound = coefficient;
    }
  }

  // return fixed coefficient
  return coefficient;
}
