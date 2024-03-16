function highAndLow(numbers) {
  const arrayOfNumbers = numbers.split(" ").map(Number);
  console.log("arrayOfNumbers", arrayOfNumbers);
   const maxNumber = Math.max(...arrayOfNumbers);
   console.log("maxNumber", maxNumber);
   const minNumber = Math.min(...arrayOfNumbers);
   console.log('minNumber', minNumber)
   return `${maxNumber} ${minNumber}`;
}

console.log('highAndLow("1 2 3 4 5")', highAndLow("1 2 3 4 5"));