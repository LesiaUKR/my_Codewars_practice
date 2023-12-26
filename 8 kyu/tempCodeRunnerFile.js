
function colorOf(r, g, b) {
  const redHex =
    r.toString(16).length === 1
      ? r.toString(16).padStart(2, 0)
      : r.toString(16);
  console.log(redHex);
  const greenHex =
    g.toString(16).length === 1
      ? g.toString(16).padStart(2, 0)
         : g.toString(16);
   console.log(greenHex);
  const blueHex =
    b.toString(16).length === 1
      ? b.toString(16).padStart(2, 0)
      : b.toString(16);
  const colorCode = `#${redHex}${greenHex}${blueHex}`;
  return colorCode;
}

console.log(colorOf(255, 0, 0))