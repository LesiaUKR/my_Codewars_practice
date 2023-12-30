function shuffleIt(arr, ...arrays) {
  const indexes = arrays.flat();
  console.log("indexes", indexes);

  for (let i = 0; i < indexes.length; i += 2) {
    const index1 = indexes[i];
    console.log("index1", index1);
    const index2 = indexes[i + 1];
    console.log("index2", index2);
    if (
      index1 >= 0 &&
      index1 < arr.length &&
      index2 >= 0 &&
      index2 < arr.length
    ) {
       console.log("arr[index1], arr[index2]", arr[index1], arr[index2]);
            console.log("arr[index2], arr[index1]", arr[index2], arr[index1]);
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
  }
  return arr;
}
// console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));