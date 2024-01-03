function threeInOne(arr) {
  let sumArrs = [];
   for (var i = 0; i < arr.length; i += 3) {
      console.log(arr[i]);
      console.log(arr[i + 1]);
            console.log(arr[i + 2]);
    sumArrs.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return sumArrs;
}

// console.log(threeInOne([1, 2, 3])); // should return [6]
console.log(threeInOne([1, 2, 3, 4, 5, 6])); 