const findSquares = (num) => {
  let squares = [];
  let i = 1;
  while (i < 1000000) {
    squares.push(i * i);
    i++;
  }

  for (let i = 0; i < squares.length - 1; i++) {
    if (Math.abs(squares[i + 1] - squares[i]) === num) {
      return `${squares[i + 1]}-${squares[i]}`;
    }
  }
  return 1;
};

// Examples
// console.log(findSquares(9));  // Output: "25-16"
// console.log(findSquares(5)); // Output: "9-4"
// console.log(findSquares(7)); // Output: "16-9"
console.log(findSquares(81));