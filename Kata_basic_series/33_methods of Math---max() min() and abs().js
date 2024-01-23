// In this lesson we learn three methods of Math: max(), min() and abs().

// Their definitions and detailed information:

Math.max();
Math.min();
Math.abs();

// Their usage is very simple: for the given parameters,
// return the maximum value, minimum value and absolute value.
// Here we use some examples to understand their usage:

var a = 1,
  b = 2,
  c = -1;
console.log(Math.max(a, b)); //output: 2
console.log(Math.min(a, b)); //output: 1
console.log(Math.abs(c)); //output: 1

// abs() can has only one parameter, max() and min()
// can has more than one parameters.See example:

var a = 1,
  b = 2,
  c = -1;
console.log(Math.max(a)); //output: 1
console.log(Math.max(a, b, c)); //output: 2
console.log(Math.min(a)); //output: 1
console.log(Math.min(a, b, c)); //output: -1
console.log(Math.abs(a)); //output: 1
console.log(Math.abs(a, b, c)); //output: 1
console.log(Math.abs(b, a, c)); //output: 2
console.log(Math.abs(c, b, a)); //output: 1

// We can see: For max() and min().If it has only one parameter,
// method returns the parameter itself; If it has many parameters,
// method will return the maximum / minimum values;
// For abs().No matter how many parameters,
// it returns only the absolute value of the first parameter.

// max() and min() can accept an array as a parameter by using spread operator (...).
// The following example is a classic usage,
// to calculate the maximum / minimum values of the array:

var arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr)); //output: 5
console.log(Math.min(...arr)); //output: 1
