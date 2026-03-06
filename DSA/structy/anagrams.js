// Write a function, anagrams, that takes in two strings as arguments. 
// The function should return a boolean indicating whether or not the 
// strings are anagrams. Anagrams are strings that contain the same 
// characters, but in any order.

const anagrams = (s1, s2) => {
 const count = Object.create(null)
 if(s1.length !== s2.length) return false;

 for(let key of s1){
    if(!(key in count)){
        count[key] = 0;
    }
    count[key] += 1;
 }

  for(let key of s2){
    if(!(key in count)) return false
      count[key] -= 1;
    if (count[key] < 0) return false
 }

 for(let key in count){
    if(count[key] !==0) return false
 }
 return true;

};

console.log('is anagrams?', anagrams('restful', 'fluster')); // -> true

// const anagrams = (s1, s2) => {
//   const count = {};
//   for (let char of s1) {
//     if (!(char in count)) {
//       count[char] = 0;
//     }
//     count[char] += 1;
//   }
  
//   for (let char of s2) {
//     if (count[char] === undefined) {
//       return false;
//     } else {
//       count[char] -= 1;
//     }
//   }
  
//   for (let char in count) {
//     if (count[char] !== 0) {
//       return false;
//     }
//   }
  
//   return true;
// };


// instead of:  
// if (!(key in count)) count[key] = 0;  
// count[key] += 1;  
  
// you can do:  
// count[key] = (count[key] ?? 0) + 1;

module.exports = {
  anagrams,
};