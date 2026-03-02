// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative. If the array is empty, return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: [-2.398]
// Output: -2.398

// Input: []
// Output: 0

// Assumptions
// You can assume that you are given a (possibly empty) valid array containing only numbers.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum (numbers) {
    let totalSum=0;
    if(numbers.length === 0) return 0;
    for (let i = 0; i < numbers.length; i++){
            totalSum += numbers[i];
            console.log("totalSum", totalSum)
    }
  return totalSum;
}

let numbersArray = [1, 5.2, 4, 0, -1]

console.log("test", sum(numbersArray))

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// function sum (numbers) {
//   if(numbers.length === 0){
//     return 0;
//   }
//   else {
//     let sumNumbers = 0;
//     for (e of numbers) {
//       sumNumbers += e;
//     }
//     return sumNumbers;
//   }    
// };