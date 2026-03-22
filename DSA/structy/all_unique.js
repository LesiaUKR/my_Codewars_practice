// all unique
// Write a function, allUnique, that takes in an array. 
// The function should return a boolean indicating whether 
// or not the array contains unique items.

// const allUnique = (items) => {
// const result = new Set();

// for (const item of items){
//     if(result.has(item)) { 
//          return false;
//     }
//     result.add(item)
//     console.log("result", result)
// }
// return true;
// };

// const allUnique = (items) => {
// const result = new Set(items);

// if (items.length === result.size) return true
// return  false;
// };

const allUnique = (items) => {
  const uniqueItems = new Set(items);
  return uniqueItems.size === items.length;
};

// n = array length
// Time: O(n)
// Space: O(n)

module.exports = {
  allUnique,
};

allUnique(["q", "r", "s", "a"]); // -> true
// allUnique(["q", "r", "s", "a", "r", "z"]); // -> false
// allUnique(["red", "blue", "yellow", "green", "orange"]); // -> true
// allUnique(["cat", "cat", "dog"]); // -> false
// allUnique(["a", "u", "t", "u", "m", "n"]); // -> false
