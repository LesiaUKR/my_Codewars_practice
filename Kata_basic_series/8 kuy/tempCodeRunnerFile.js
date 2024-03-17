function dnaStrand(dna) {
  let dnaArr = dna.split("");
  let result = [];
  for (let i = 0; i < dnaArr.length; i++) {
    if (dnaArr[i] === "A") {
      result.push("T");
    } else if (dnaArr[i] === "T") {
      result.push("A");
    } else if (dnaArr[i] === "C") {
      result.push("G");
    } else if (dnaArr[i] === "G") {
      result.push("C");
    }
  }
  return `String ${dna} is ${result.join("")}`;
}

console.log(dnaStrand("AAAA"))