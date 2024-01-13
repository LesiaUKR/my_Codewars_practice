function mirrorImage(arr) {
  let newArr = [];
  arr.some((currentNumber, i) => {
    const nextNumber = arr[i + 1];
    const reversedNumber = parseInt(
      String(nextNumber).split("").reverse().join(""),
      10
    );
    console.log("currentNumber", currentNumber);
    console.log("nextNumber", nextNumber);
    console.log("reversedNumber", reversedNumber);
    if (currentNumber === reversedNumber) {
      console.log("if currentNumber", currentNumber);
      console.log("if nextNumber", nextNumber);
      newArr.push(currentNumber, nextNumber);
      return true;
      // newArr.push(currentNumber);
      // newArr.push(nextNumber);
      // console.log(newArr);
    } else return false;
  });
  return newArr;
}

// console.log(mirrorImage([11, 22, 33, 33, 22, 11])); //should return [33,33]
console.log(mirrorImage([454, 86, 57, 75, 16, 88]));