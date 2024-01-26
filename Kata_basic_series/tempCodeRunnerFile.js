function maxMin(arr1, arr2) {
  let diffArr = [];
  for (let i = 0; i < arr1.length; i++) {
    console.log("arr1[i]", arr1[i]);
    console.log("arr2[i]", arr2[i]);
    console.log("arr1[i] - arr2[j]", arr1[i] - arr2[i]);
    let difference = Math.abs(arr1[i] - arr2[i]);
    console.log("difference", difference);
    diffArr.push(difference);
  }

  let maxValue = Math.max(...diffArr);
  let minValue = Math.min(...diffArr);
  return [maxValue, minValue];
}

// console.log(maxMin([1, 3, 5], [9, 8, 7])); // should return [8,2]
// console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0])); // should return [1000,1]
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111]));