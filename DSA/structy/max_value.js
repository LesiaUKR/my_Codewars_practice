// Click on the  approach tab at the top of this box to get started.
// Write a function, maxValue, that takes in array of numbers as an argument. 
// The function should return the largest number in the array.
// Solve this without using any built-in array methods. You can assume that the array is non-empty.

// const maxValue = (nums) => {
//   let max = -Infinity;
//   if (nums.length === 0) return;
  
//   for (let i = 0; i < nums.length; i++){
//     if(nums[i] > max) max = nums[i]
//   }
//   console.log(max);
//   return max;
// };

// maxValue([4, 7, 2, 8, 10, 9]);


const maxValue = (nums) => {
  let max = -Infinity;
  
  for (let num of nums){
    if(num > max) max = num
  }
  console.log(max);
  return max;
};

maxValue([4, 7, 2, 8, 10, 9]);

// time complexity is O(n), space complexity is O(1)

module.exports = {
  maxValue,
};