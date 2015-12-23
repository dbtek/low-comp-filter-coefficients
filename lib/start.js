import permutation from 'array-permutation';
import arithmeticalOps, {
  decToBin,
  complexity,
} from './arithmeticalOps';
import adjust from './adjust';
import { R } from './config';

// initial coefficients
let coefficients = [1.248046875, 1.148036845, 0.438018170, 0.148043005, 0.348013035];

/**
 * Calculates total complexity of given coefficients.
 */
function calculateTotalComplexity(coefficients) {
  let totalComplexity = 0
  for(let coefficient in coefficients) {
    totalComplexity += complexity(decToBin(coefficient, R));
  }
  return totalComplexity;
}


let prevComplexity = null;

// Repeat adjust until no more changes occur.
while(1) {
  // chose a random permutation of coefficient indices
  let indices = permutation.random(coefficients.length - 1);

  // fix each coefficient with adjust procedure
  for(let i of indices) {
    coefficients[i] = adjust(coefficients[i]);
  }

  let complexity = calculateTotalComplexity(coefficients);
  // first pass

  if(prevComplexity == null)
    prevComplexity = complexity;
  else if(complexity == prevComplexity)
    // quit if complexity does not change
    break;
  else
    prevComplexity = complexity;

}

console.log(`Coefficents fixed. Final values: ${coefficients.join(', ')}.`);
