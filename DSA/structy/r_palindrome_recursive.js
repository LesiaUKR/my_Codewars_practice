// palindrome recursive
// Write a function, palindrome, that takes in a string and returns a boolean 
// indicating whether or not the string is the same forwards and backwards.

// You must solve this recursively.


const palindrome = (s) => {
if(s.length === 0 || s.length === 1){
    console.log('base case', s, '-> true');
    return true;
}
console.log('entering', s);
if(s[0] === s[s.length-1]){

const inner = s.slice(1, -1);
console.log('recurse on', inner);
const recursiveResult = palindrome(inner);
console.log('returning from', s, '->', recursiveResult);
return recursiveResult;
}
console.log('mismatch', s[0], 'vs', s[s.length - 1], 'in', s, '-> false');
return false;

};

// const palindrome = (s) => {
//   if (s.length <= 1) {
//     return true;
//   }

//   if (s[0] !== s[s.length - 1]) {
//     return false;
//   }

//   return palindrome(s.slice(1, -1));
// };

// Time: O(n^2)
// Space: O(n^2)

module.exports = {
  palindrome,
};


// palindrome("pop"); // -> true
// palindrome("kayak"); // -> true
// palindrome("pops"); // -> false
palindrome("boot"); // -> false
// palindrome("rotator"); // -> true
// palindrome("abcbca"); // -> false
// palindrome(""); // -> true
