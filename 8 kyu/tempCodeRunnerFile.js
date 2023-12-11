
function pickIt(arr) {
  let odd = [];
  let even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(even.push(arr[i]));
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

console.log(
  (pickIt([8, 1, 5, 4, 6, 1, 1]),
  [
    [1, 5, 1, 1],
    [8, 4, 6],
  ])
);