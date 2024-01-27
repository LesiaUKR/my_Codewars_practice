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

/******** Task ********/

// Coding in function maxMin.function accept 2 parameter arr1 and arr2.
// They are two number array and have the same number of elements.

// First, calculate the difference of the same index of the arr1 and arr2.
// Like this:

// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]

// Please note that the difference is positive.
// Such as the above 1 and 9, the difference should be 8,
// not - 8. I think abs() can help you get the correct result; -)

// Then find the maximum and minimum values of them,
// and return the results in the form of an array.Like this:

// maxvalue, minvalue[(8, 2)];

/******** Task Solution 1 ********/

function maxMin(arr1, arr2) {
  let diffArr = [];
  for (let i = 0; i < arr1.length; i++) {
    console.log("arr1[i]", arr1[i]);
    console.log("arr2[i]", arr2[i]);
    console.log("arr1[i] - arr2[j]", arr1[i] - arr2[i]);
    let difference = Math.abs(arr1[i] - arr2[i]);
    console.log("difference", difference);
    diffArr.push(difference);
  }

  let maxValue = Math.max(...diffArr);
  let minValue = Math.min(...diffArr);
  return [maxValue, minValue];
}

/******** Task Solution 2 ********/
function maxMin(arr1, arr2) {
  var rs = arr1.map((x, i) => Math.abs(x - arr2[i]));
  return [Math.max(...rs), Math.min(...rs)];
}
/******** Task Solution 3 ********/
function maxMin(arr1, arr2) {
  var diffs = [];
  for (i = 0; i < arr1.length; i++) {
    diffs.push(Math.abs(arr1[i] - arr2[i]));
  }
  return [Math.max(...diffs), Math.min(...diffs)];
}
/******** Task Solution 4 ********/
function maxMin(arr1, arr2) {
  var k = arr1.reduce((a, b, i) => a.concat(Math.abs(b - arr2[i])), []);
  return [Math.max(...k), Math.min(...k)];
}
/******** Task Solution 5 ********/
const maxMin = (arr1, arr2) =>
  arr1.reduce(
    ([max, min], v, i) => (
      [
        (max = Math.max(Math.abs(v - arr2[i]), max)),
        (min = Math.min(Math.abs(v - arr2[i]), min)),
      ],
      [max, min]
    ),
    [0, Infinity]
  );
// console.log(maxMin([1, 3, 5], [9, 8, 7])); // should return [8,2]
// console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0])); // should return [1000,1]
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111])); // should return [151,9]
