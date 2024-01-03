
const infiniteLoop = (arr, d, n) => {
  const nums = arr.reduce((acc, v) => acc.concat(v), []);
  while (n--) 
    d === "left" ? nums.push(nums.shift()) : nums.unshift(nums.pop());

  return arr.map((a) => Array.from({ length: a.length }, () => nums.shift()));
};

console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "right",
    1
  )
);