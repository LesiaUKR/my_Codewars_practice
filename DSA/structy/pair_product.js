// pair product
// Write a function, pairProduct, that takes in an array and a target
//  product as arguments. The function should return an array containing 
//  a pair of indices whose elements multiply to the given target.
// The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.


const pairProduct = (numbers, targetProduct) => {
    const prevNumbers = {}
    for(i = 0; i < numbers.length; i++){
        const currentNumber = numbers[i];
        const complement = targetProduct/currentNumber
        if(complement in prevNumbers) {
            console.log("answer", [prevNumbers[complement], i])
            return [prevNumbers[complement], i]
        }
        prevNumbers[currentNumber] = i;
    }

};

module.exports = {
  pairProduct,
};


pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
// const numbers = [];
// for (let i = 0; i <= 30000; i += 1) {
//   numbers.push(i);
// }
// pairProduct(numbers, 899970000); // -> [ 29999, 30000 ] 
