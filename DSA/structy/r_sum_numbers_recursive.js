// sum numbers recursive
// Watch the Approach video first!

// Write a function sumNumbersRecursive that takes in an array of numbers and 
// returns the sum of all the numbers in the array. All elements will be integers.
// Solve this recursively.

const sumNumbersRecursive = (numbers) => {
 if(numbers.length === 0) return 0;
console.log('entering', numbers);

const recursiveResult = sumNumbersRecursive(numbers.slice(1));
const total = numbers[0] + recursiveResult;

console.log('returning from', numbers, 'with total', total);

return total;

};

// Time: O(n^2)
// Space: O(n^2)

// const sumNumbersRecursive = (numbers) => {
//  if(numbers.length === 0) return 0;

//  return numbers[0] + sumNumbersRecursive(numbers.slice(1))

// };

module.exports = {
  sumNumbersRecursive,
};

sumNumbersRecursive([5, 2, 9, 10]); // -> 26
// sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
// sumNumbersRecursive([]); // -> 0
// sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001
// sumNumbersRecursive([700, 70, 7]); // -> 777
// sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55
// sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // -> 0
