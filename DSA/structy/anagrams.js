// Write a function, anagrams, that takes in two strings as arguments. 
// The function should return a boolean indicating whether or not the 
// strings are anagrams. Anagrams are strings that contain the same 
// characters, but in any order.

const anagrams = (s1, s2) => {
 const count = {}
 if(s1.length !== s2.length) return false;

 for(let key of s1){
    if(!(key in count)){
        count[key] = 0;
    }
    count[key] += 1;
 }

  for(let key of s2){
    if(key in count){
      count[key] -= 1;
    if (count[key] < 0) return false
    } else {
        return false;
    }

 }

 for(let key in count){
    if(count[key] !==0) return false
 }
 return true;

};

console.log('is anagrams?', anagrams('restful', 'fluster')); // -> true


module.exports = {
  anagrams,
};