// This lesson we learn the last three methods: isArray() indexOf() and toString().
// Each of these three methods have their own purpose and put them together
// just because this is the last lesson of arrayObject; -)

// For more information, please refer to:

Array.prototype.isArray();
Array.prototype.indexOf();
Array.prototype.toString();

// Here are some examples to help us understand the use of isArray() indexOf and toString():

// isarray() is a static method, its main - body can only be Array.
// it returns a Boolean value, which means that the parameter is an array or not.
// See example:

var a = [1],
  b = 1,
  c = "1",
  d = { 1: 1 },
  e = true;
console.log(Array.isArray(a)); //true    a is an array
console.log(Array.isArray(b)); //false   b is not an array
console.log(Array.isArray(c)); //false   c is not an array
console.log(Array.isArray(d)); //false   d is not an array
console.log(Array.isArray(e)); //false   e is not an array

// It is often used to check the validity of the parameters.
// There are many other ways to determine the parameter type,
// and we will learn from the next lesson.

// We have seen indexOf() used for stringObject.
// The array object can also be used.
// its Usage is basically the same as the string object.

// It's usually used to determine whether an array contains an element or not.
// Its return value is the index of element.
// If there is no such element in the array, return -1.
// See example:

var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(1)); //output: 0  arr[0]=1
console.log(arr.indexOf(5)); //output: 4  arr[4]=5
console.log(arr.indexOf(6)); //output: -1 no 6 in the array

// More examples please refer to #17: Methods of String object--indexOf(), lastIndexOf() and search()

// All objects in JS have toString() methods.
// Its function is to return a string representation of an object.
// Converting an object into a string, toString() is not the easiest way to do it.

// A lot of ways to do this:

var arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); //1,2,3,4,5
console.log(arr + ""); //1,2,3,4,5
console.log(arr.join()); //1,2,3,4,5

// Sometimes the performance of toString()' is not satisfactory,
// JSON.stringify() provides us with a more powerful feature:

var arr1 = ["1", "2", "3", "4", "5"];
console.log(arr1.toString()); //1,2,3,4,5
console.log(JSON.stringify(arr1)); //["1","2","3","4","5"]

var arr2 = [[1, 2], [3, 4], [5]];
console.log(arr2.toString()); //1,2,3,4,5
console.log(JSON.stringify(arr2)); //[[1,2],[3,4],[5]]

/******** Task ********/

// Coding in function blackAndWhite.
// function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:
// "It's a fake array"

// If arr contains elements 5 and 13, function should return:
// "It's a black array"

// If arr contains neither 5 nor 13, function should return:
// "It's a white array"

// Examples
blackAndWhite(5, 13); //should return "It's a fake array"
blackAndWhite([5, 13]); //should return "It's a black array"
blackAndWhite([5, 12]); //should return "It's a white array"

// Using string template and ternary operator can make your work easier.

/******** Task Solution 1 ********/

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  } else if (arr.includes(5) && arr.includes(13)) {
    return "It's a black array";
  } else {
    return "It's a white array";
  }
}

/******** Task Solution 2 ********/

const blackAndWhite = (arr) =>
  `It's a ${
    !Array.isArray(arr)
      ? `fake`
      : arr.includes(5) && arr.includes(13)
      ? `black`
      : `white`
  } array`;

/******** Task Solution 3 ********/
// ternary operator
blackAndWhite = (a) =>
  !Array.isArray(a)
    ? `It's a fake array`
    : ~a.indexOf(5) && ~a.indexOf(13)
    ? `It's a black array`
    : `It's a white array`;

//template literal inner ternary operator
blackAndWhite = (a) =>
  `It's a ${
    !Array.isArray(a)
      ? "fake"
      : ~a.indexOf(5) && ~a.indexOf(13)
      ? "black"
      : "white"
  } array`;

// without isArray()
blackAndWhite = (a) =>
  `It's a ${
    !a || !a.map ? "fake" : ~a.indexOf(5) && ~a.indexOf(13) ? "black" : "white"
  } array`;

// includes()
blackAndWhite = (a) =>
  `It's a ${
    !a || !a.map ? "fake" : a.includes(5) && a.includes(13) ? "black" : "white"
  } array`;

// match & RegExp
blackAndWhite = (a) =>
  `It's a ${
    !a || !a.map
      ? "fake"
      : `${a}`.match(/(?=.*\b5\b)(?=.*\b13\b)/)
      ? "black"
      : "white"
  } array`;

// string-constant
blackAndWhite = (a) =>
  `It's a ${
    "fake black white".split` `[
      +!!(a && a.map) && +((a.includes(5) && a.includes(13)) || 2)
    ]
  } array`;

// string's array-constant
blackAndWhite = (a) =>
  `It's a ${
    ["fake", "black", "white"][
      +!!(a && a.map) && +((a.includes(5) && a.includes(13)) || 2)
    ]
  } array`;

blackAndWhite = (a) =>
  `It's a ${
    !a || !a.map
      ? "fake"
      : ["white", "black"][+(a.includes(5) && a.includes(13))]
  } array`;
/******** Task Solution 4 ********/
function blackAndWhite(arr) {
  //coding here...
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  } else if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
    return "It's a black array";
  }
  return "It's a white array";
}
/******** Task Solution 5 ********/
const blackAndWhite = (arr) => {
  if (!Array.isArray(arr)) return "It's a fake array";

  return `It's a ${
    [5, 13].every((item) => arr.indexOf(item) > -1)
      ? "black array"
      : "white array"
  }`;
};
console.log(blackAndWhite(5, 13));
console.log(blackAndWhite([5, 13]));
console.log(blackAndWhite([5, 12]));
console.log(blackAndWhite([10, 4, 8, 7, 9, 13, 3, 6, 13, 3, 13]));
