// Write a function, allEven, that takes in an array of 
// numbers as an argument. The function should return a 
// boolean indicating whether or not every element of the 
// array is an even number.

// You can assume that the array is non-empty.

const allEven = (nums) => {
 for(let num of nums){
    console.log(num)
    if(num % 2 !== 0){
        console.log(num % 2)
        return false
    }
 }
 return true
};

console.log('all even', allEven([14, 40, 36, 3]))
console.log('all even', allEven([30, 24, 2048, 0, 12, 50]))

// n = length of array
// Time: O(n)
// Space: O(1)

// const allEven = (nums) => {
//   for (let num of nums) {
//     if (num % 2 === 1) {
//       return false;
//     }
//   }
//   return true;
// };

// That returns false when you see an even number.
// That’s the opposite of what we want.
// const allEven = (nums) => {
//   for (let num of nums) {
//     if (num % 2 === 0) {
//       return false;
//     }
//   }
//   return true;
// };
module.exports = {
  allEven,
};

