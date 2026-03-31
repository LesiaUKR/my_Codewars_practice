// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

// You must solve this recursively.

const sumOfLengths = (strings) => {
if(strings.length === 0){
    return 0;
}
console.log('entering', strings, 'with length', strings[0].length)

const recursiveResult = sumOfLengths(strings.slice(1));
const total = strings[0].length + recursiveResult;

console.log('returning from', strings, 'with total', total);

return total;

};

// Time: O(n^2)
// Space: O(n^2)

module.exports = {
  sumOfLengths,
};


sumOfLengths(["goat", "cat", "purple"]); // -> 13
// sumOfLengths(["bike", "at", "pencils", "phone"]); // -> 18
// sumOfLengths([]); // -> 0
// sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15
// sumOfLengths(["0", "313", "1234567890"]); // -> 14 
