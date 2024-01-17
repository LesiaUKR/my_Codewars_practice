function getIntervalArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i += 1) {
    console.log("i", i);
    arr.push(i);
  }
  return arr;
}
console.log(getIntervalArray(1, 5));