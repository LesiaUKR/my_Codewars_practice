// Write a function, pairs, that takes in an array as an argument. 
// The function should return an array containing all unique pairs of elements.
// You may return the pairs in any order and the order of elements within a single pair does not matter.
// You can assume that the input array contains unique elements.
// n = length of array
// Time: O(n^2)
// Space: O(n^2)

const pairs = (elements) => {
  const pairedArray = []
  for (let i = 0; i < elements.length; i++){
    for(let j = i+1; j < elements.length; j++){
        pairedArray.push([elements[i], elements[j]])
    }
  }
  return pairedArray;
};

console.log(pairs(["a", "b", "c"]))
console.log(pairs(["a", "b", "c", "d"]))
console.log(pairs(["cherry", "cranberry", "banana", "blueberry", "lime", "papaya"]))