/******** Task ********/
// Sum all the numbers of a given array(cq.list),
// except the highest and the lowest element(by value, not by index!).

// The highest or lowest element respectively is a single element at each edge,
// even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

/******** Task Solution 1 ********/

function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }
  const sortedArray = array.sort((a, b) => a - b).slice(1, -1);
  const sum = sortedArray.reduce((acc, curr) => acc + curr, 0);
  console.log("sortedArray", sortedArray);
  console.log("sum", sum);

  return sum;
}

/******** Task Solution 2 ********/
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
/******** Task Solution 3 ********/
sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;
/******** Task Solution 4 ********/
const sumArray = (numbers) =>
  numbers && numbers.length > 1
    ? numbers
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, number) => sum + number, 0)
    : 0;
/******** Task Solution 5 ********/
function sumArray(arr) {
  if (!arr || arr.length <= 2) return 0;

  var min, max, result;
  result = 0;
  min = max = arr[0];

  arr.forEach(function (el) {
    result += el;
    min > el ? (min = el) : max < el ? (max = el) : el;
  });

  return result - max - min;
}
/******** Task Solution 6 ********/

function sumArray(array) {
  if (array == null || array.length < 2) {
    return 0;
  }
  var sum = 0;
  var max = array[0];
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    max = max < array[i] ? array[i] : max;
    min = min > array[i] ? array[i] : min;
    sum += array[i];
  }
  sum -= max + min;
  return sum;
}

console.log(sumArray(null)); //0
console.log(sumArray([])); //0;
console.log(sumArray([3])); //0
console.log(sumArray([3, 5])); //0
console.log(sumArray([6, 2, 1, 8, 10])); //16
console.log(sumArray([0, 1, 6, 10, 10])); //17
console.log(sumArray([-6, -20, -1, -10, -12])); //-28
console.log(sumArray([-6, 20, -1, 10, -12])); //3

/******** Task Solution 1 ********/
/******** Task Solution 2 ********/
/******** Task Solution 3 ********/
/******** Task Solution 4 ********/
/******** Task Solution 5 ********/
/******** Task Solution 6 ********/
