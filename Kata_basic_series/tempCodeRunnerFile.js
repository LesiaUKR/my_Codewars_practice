function roundIt(n) {
  const slittedNumArr = n.toString().split(".");
  const roundedN = "";
  console.log(slittedNumArr);
  for (let i = 0; i < slittedNumArr.length - 1; i++) {
    if (slittedNumArr[i].length < slittedNumArr[i + 1].length) {
      return Math.ceil(n);
    } else if (slittedNumArr[i].length > slittedNumArr[i + 1].length) {
      return Math.floor(n);
    } else return Math.round(n);
  }
  return roundedN;
}

// console.log(roundIt(3.45));
// console.log(roundIt(34.5));
console.log(roundIt(34.56));