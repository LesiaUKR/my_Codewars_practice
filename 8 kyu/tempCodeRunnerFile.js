function bigToSmall(arr) {
  let result = [].concat(...arr).sort((a, b) => b-a).join(">");
  console.log(result);
  return result;
}

// console.log(
//   bigToSmall([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// ); //should return "6>5>4>3>2>1"
console.log(
  bigToSmall([
    [1, 3, 5],
    [2, 4, 6],
  ])
); 