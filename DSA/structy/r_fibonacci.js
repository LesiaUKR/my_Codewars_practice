// Write a function, fibonacci, that takes in a number argument, n, and 
// returns the n-th number of the Fibonacci sequence.
// The 0-th number of the sequence is 0.
// The 1-st number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous two numbers.
// You must solve this recursively.

const fibonacci = (n) => {   
 if(n === 0) {
    return 0;
 }
  if(n === 1) {
    return 1;
 }
 console.log("entering", n)

 const recursiveResult = fibonacci(n-1) + fibonacci(n-2)
console.log("returning from", recursiveResult)
 return recursiveResult;
};

module.exports = {
  fibonacci,
};

// fibonacci(0); // -> 0
// fibonacci(1); // -> 1
// fibonacci(2); // -> 1
// fibonacci(3); // -> 2
// fibonacci(4); // -> 3
fibonacci(5); // -> 5
// fibonacci(8); // -> 21
