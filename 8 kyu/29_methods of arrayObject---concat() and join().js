// This lesson we learn two methods of array: concat() and join().
// We have seen concat() in the stringObject method,
// but the method of the arrayObject is different from the stringObject method,
// so we need to learn again.When studying the stringObject method split(),
// we have simply learned the join() method.This time we will review and explain it in detail.

// Their definitions and syntax please refer to:

/*** Array.prototype.concat()***/

// The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.

// Syntax;
// concat();
// concat(value1);
// concat(value1, value2);
// concat(value1, value2, /* …, */ valueN);

// Parameters;
// Arrays and / or values to concatenate into a new array.If all valueN parameters are omitted,
// concat returns a shallow copy of the existing array on which it is called.

// Return value
// A new Array instance.

// Here are some examples to help us understand the use of concat() and join():

// We first learn the concat() method, which can add some elements to the end of the array.
// concat() can have more and more parameters, and the parameter can be values,
// array or otherthings.Look this example:

var arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
//The following ways can achieve the same purpose:
//It can use an array as parameter
console.log(arr1.concat(arr2));
//also can use some values as parameters
console.log(arr1.concat(4, 5, 6));
//also can use more than one array as parameters
console.log(arr1.concat([4], [5], [6]));
//use ... accept the value of an enumeration
console.log(arr1.concat(...arr2));
//It can be used continuously
console.log(arr1.concat(4).concat(5).concat(6));
//output:
[1, 2, 3, 4, 5, 6][(1, 2, 3, 4, 5, 6)][(1, 2, 3, 4, 5, 6)][(1, 2, 3, 4, 5, 6)][
  (1, 2, 3, 4, 5, 6)
];

// concat() can be used for the flat output of two - dimensional
// or multidimensional arrays.look this example:

var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
var result = [];
for (var i = 0; i < arr.length; i++) result = result.concat(arr[i]);
console.log(result); //output: [ 1, 2, 3, 4, 5, 6 ]

// This example by traversing the array and concat() method to get a one - dimensional array,
// which contains all the elements of the two - dimensional array.Or use more simple code:

var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
var result = [].concat(...arr);
console.log(result); //output: [ 1, 2, 3, 4, 5, 6 ]

// ...arr takes all the elements of arr (some one-dimensional array) as parameters of concat().

/*** Array.prototype.join()***/

// The join() method of Array instances creates and returns a new string by concatenating all of
// the elements in this array, separated by commas or a specified separator string.If the array
// has only one item, then that item will be returned without using the separator.

// Syntax
// join()
// join(separator)

// Parameters
// separator Optional
// A string to separate each pair of adjacent elements of the array.
// If omitted, the array elements are separated with a comma(",").

// Return value
// A string with all array elements joined.If array.length is 0,
// the empty string is returned.

// Here we look at some examples of join().Its main purpose is to merge the
// elements of an array into a string, using a parameter separator to connect each element.
// If the separator is omitted, the default separator is ",":

var arr = [1, 2, 3, 4, 5];
console.log(arr.join()); //output: 1,2,3,4,5
console.log(arr.join(",")); //output: 1,2,3,4,5
console.log(arr.join(" ")); //output: 1 2 3 4 5
console.log(arr.join("and")); //output: 1and2and3and4and5

// One of its classic applications is to produce a specified number of repeating characters:

function repeat(s, n) {
  return [...Array(n + 1)].join(s);
}
console.log(repeat("a", 5)); //output: aaaaa
console.log(repeat("abc", 5)); //output: abcabcabcabcabc

// It is also a good choice to connect multiple strings.When there is a large number
// of strings that need to be connected to a string, the use of the + operator speed is slow,
// the correct method should be to put them into the array, and then use the join() method:

//use + operator:
var result = "";
for (var i = 0; i < 26; i++) result += String.fromCharCode(97 + i);
console.log(result); //output: abcdefghijklmnopqrstuvwxyz
//use join() method:
var cache = [];
for (var i = 0; i < 26; i++) cache[i] = String.fromCharCode(97 + i);
var result = cache.join("");
console.log(result); //output: abcdefghijklmnopqrstuvwxyz

// Of course, when the amount of data is very small, we do not feel the difference in speed.

/******** Task ********/

// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).
// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
// And then sort array in descending order.
// Finally, use the separator ">" to connect the elements into a string.
// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

/******** Task Solution 1 ********/

function bigToSmall(arr) {
  let result = []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
  console.log(result);
  return result;
}

/******** Task Solution 2 ********/

function bigToSmall(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
  }
  return newArr.sort((a, b) => b - a).join(">");
}

// console.log(
//   bigToSmall([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// ); //should return "6>5>4>3>2>1"
console.log(
  bigToSmall([
    [1, 3, 5],
    [2, 4, 6],
  ])
); //should return "6>5>4>3>2>1"
bigToSmall([[1, 1], [1], [1, 1]]); //should return "1>1>1>1>1"
