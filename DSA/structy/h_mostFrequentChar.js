// Write a function, mostFrequentChar, that takes in a string as an argument. 
// The function should return the most frequent character of the string. 
// If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.


const mostFrequentChar = (s) => {
  const count = {}

  for(const char of s){
    if(count[char] === undefined){
      count[char] = 0;
    }
      count[char] +=1;
      console.log('count', count)
  }

  let maxCount = -Infinity
  for(const key in count){
     if(count[key]>maxCount) maxCount = count[key]
     console.log('maxCount', maxCount)
  }

 for(const char of s){
    if(count[char] === maxCount) return char
 }

};

console.log(mostFrequentChar('bookeeper')) ; // -> 'e'

// const mostFrequentChar = (s) => {
//   const count = {};
  
//   for (let char of s) {
//     if (!(char in count)) {
//       count[char] = 0;
//     }
//     count[char] += 1;
//   }
  
//   let best = null;
//   for (let char of s) {
//     if (best === null || count[char] > count[best]) {
//       best = char;
//     }
//   }
//   return best;
// };

module.exports = {
  mostFrequentChar,
};
