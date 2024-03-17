// Deoxyribonucleic acid(DNA) is a chemical found in the nucleus
// of cells and carries the "instructions" for the development
// and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other,
// as "C" and "G".Your function receives one side of the DNA
// (string, except for Haskell); you need to return the other
// complementary side.DNA strand is never empty or there is
// no DNA at all(again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

/******** Task Solution ********/
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
  return result.join("");
}

console.log(dnaStrand("AAAA")); // "TTTT", "String AAAA is";
dnaStrand("ATTGC"); // "TAACG", "String ATTGC is");
dnaStrand("GTAT"); // "CATA", "String GTAT is");

/******** Task Solution 1 ********/
const pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return pairs[v];
    })
    .join("");
}

/******** Task Solution 2 ********/
function DNAStrand(dna) {
  //your code here
  var result = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}
/******** Task Solution 3 ********/
// let pairs = { A: "T", T: "A", C: "G", G: "C" };
// const DNAStrand = (dna) => dna.replace(/./g, (c) => pairs[c]);
/******** Task Solution 4 ********/
function DNAStrand(dna) {
  return dna
    .replace(/A/g, "t")
    .replace(/T/g, "a")
    .replace(/C/g, "g")
    .replace(/G/g, "c")
    .toUpperCase();
}
/******** Task Solution 5 ********/
function DNAStrand(dna) {
  let newDNA = "";
  let dnaKeys = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  for (let i = 0; i < dna.length; i++) {
    let char = dna[i];

    newDNA += dnaKeys[char];
  }

  return newDNA;
}
/******** Task Solution 6 ********/
function DNAStrand(dna) {
  return dna
    .split("")
    .map((str) => {
      switch (str) {
        case "G":
          return "C";
        case "C":
          return "G";
        case "T":
          return "A";
        case "A":
          return "T";
        default:
          throw new Error("Not a valid DNA sequence");
      }
    })
    .join("");
}
