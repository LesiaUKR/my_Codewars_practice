function cutCube(volume, n) {
  console.log(Math.cbrt(n));
  return (
    Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume / n))
  );
}
/******** Task Solution 5 ********/

// function cutCube(volume, n) {
//   return [volume / n, n].map(Math.cbrt).every((x) => x == ~~x);
// }

console.log(cutCube(27, 27)); // should return true
console.log(cutCube(512, 8)); // should return true
console.log(cutCube(512, 64)); 