function isolateIt(arr) {
  const divider = "|";
  const newArr = arr.map((string) => {
    let newString = "";
    if (string.length % 2 === 0) {
      console.log("string", string);
      newString =
        string.slice(0, string.length / 2) +
        divider +
        string.slice(string.length / 2);
    } else {
      console.log("string", string);
      const middleIndex = Math.floor(string.length / 2);
      console.log("middleIndex", middleIndex);
      // newString = string.replace(string.charAt(middleIndex), divider);
      console.log(middleIndex);
      newString =
        string.substring(0, middleIndex) +
        divider +
        string.substring(middleIndex+1);
      console.log("newString else", newString);
    }
    return newString;
  });
  return newArr;
}

// console.log(isolateIt(["abcd", "efgh"])); //should return ["ab|cd","ef|gh"]
// console.log(isolateIt(["abcde", "fghij"])); //should return ["ab|de","fg|ij"]
// console.log(isolateIt(["1234", "56789"])); //should return ["12|34","56|89"]
console.log(
  isolateIt([
    "*jmICwO4WH#F",
    "ukHX$It%6h",
    "qzRmwDCKo8",
    "8%8C|D",
    "utWKOMu3A",
    "xY*c.x",
  ])
);