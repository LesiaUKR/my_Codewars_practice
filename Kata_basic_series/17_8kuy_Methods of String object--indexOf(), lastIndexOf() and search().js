// We can see, indexOf() returned 4 and lastIndexOf() returned 7. search() always returned the first "o".
// Look at the following example:

// var str="Hello World!";
// console.log(str.indexOf("o",5))
// console.log(str.lastIndexOf("o",5))
// console.log(str.search("o"))
// //output:
// 7
// 4
// 4

// We can see, indexOf() returned 7, because it start retrieves from index 5 to the right;
// lastIndexOf() returned 4 because it start retrieves from index 5 to the left;
// .search() always returned the first "o".
// Look at the following example:

// var str="Hello World!";
// console.log(str.indexOf("world"))
// console.log(str.lastIndexOf("world"))
// console.log(str.search(/world/i))
// console.log(str.search(/word/i))
// //output:
// -1
// -1
// 6
// -1

// From this example we can see that indexOf() and lastIndexOf() can not find "world" in str,
// because "World" and "world" are diffrent; search() uses a regular expression,
// the option i allows it to ignore the case (Regular expressions are powerful and complex,
// and we will learn it later). when the search string is not found, they always return -1;

/******** Task ********/

// Coding in function firstToLast, function accept 2 parameters:str and c.
// str is a string.c is a char.
// Please return the gap between the first position of c and the last position of c.
// If there are a lot of c in the str, should return a positive integer;
// If there is only one c in str, should return 0; If there is no c in the str,
// should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

/******** Task Solution 1 ********/

function firstToLast(str, c) {
  if (str.indexOf(`${c}`) === -1) {
    return -1;
  }
  const firstPosition = str.indexOf(`${c}`);

  const lastPosition = str.lastIndexOf(`${c}`);

  return lastPosition - firstPosition;
}

/******** Task Solution 2 ********/

// function firstToLast(str, c) {
//   var first = str.indexOf(c),
//     last = str.lastIndexOf(c);
//   return first == -1 ? -1 : last - first;
// }

/******** Task Solution 2 ********/

function firstToLast(str, c) {
  return str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
}

// console.log(firstToLast("ababc", "a"));
console.log(firstToLast("ababc", "c"));
// console.log(firstToLast("ababc","d"));
