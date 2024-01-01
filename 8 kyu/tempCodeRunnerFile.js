function infiniteLoop(arr, d, n) {

    if (d === "left") {
       console.log(arr[0].shift());
       console.log(arr[arr.length-1].push(arr[0].shift()));
    }

}

console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "left",
    1
  )
);
