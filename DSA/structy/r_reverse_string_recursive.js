// Write a function, reverseString, that takes in a string as an argument. 
// The function should return the string with its characters in reverse order.
// You must do this recursively.

// cut last char and add last char  + the rest of the string without
// const reverseString = (s) => {
//  if(s.length === 0){
//     return "";
//  }

//  console.log('entering', s)

//  const recursiveResult = reverseString(s.slice(0, s.length-1));

//  const reversedString = s.slice(-1) + recursiveResult;

//  console.log('returning from', s, 'reversed String', reversedString);

//  return reversedString;
// };


// // Time: O(n^2)
// // Space: O(n^2)


// // cut first char and add the rest of the string to the first char
const reverseString = (s) => {
  if (s.length === 0) {
    return '';
  }

  return reverseString(s.slice(1)) + s[0];
};


// module.exports = {
//   reverseString,
// };

// reverseString("hello"); // -> "olleh"
// reverseString("abcdefg"); // -> "gfedcba"
// reverseString("stopwatch"); // -> "hctawpots"
// reverseString(""); // -> ""

const string = "hello";
console.log("string", string.slice(0, string.length-1)) //hell
console.log("string", string.slice(1)) //ello