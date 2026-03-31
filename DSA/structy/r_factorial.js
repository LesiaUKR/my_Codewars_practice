// Write a function, factorial, that takes in a number n and returns the factorial of that number.
// The factorial of n is the product of all the positive numbers less than or equal to n. 
// You must solve this recursively.

// For example, the factorial of 6 is:

// 6 * 5 * 4 * 3 * 2 * 1 = 720
// You can assume that n is a non-negative integer. Note that the factorial of 0 is defined to be 1 (wiki).

const factorial = (n) => {
if (n === 0){
    return 1;
}
console.log('entering', n);

const recursiveResult = factorial(n-1);
const total = n * recursiveResult;

console.log('returning from', n, 'with total', total);

return total;

};

// Time: O(n)
// Space: O(n)

module.exports = {
  factorial,
};

// factorial(3); // -> 6
// factorial(6); // -> 720
// factorial(18); // -> 6402373705728000
// factorial(18); // -> 6402373705728000
// factorial(13); // -> 6227020800
factorial(0); // -> 1
