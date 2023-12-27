function howManySmaller(arr, n) {
  let fixedArray = arr.map((el) => el.toFixed(2));
   console.log(fixedArray);
   let count = "";
   for (let i = 0; i <= fixedArray.length; i++){
      if (fixedArray[i] < n) {
      count++
      }
   
   }
   return count;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));