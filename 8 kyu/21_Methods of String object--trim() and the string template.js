/******** Task Solution 1 ********/

function fiveLine(s) {
  s = s.trim();

  let result = "";

  for (let i = 1; i <= 5; i++) {
    result += `${s.repeat(i)}\n`;
  }

  return result.trim();
}

// Test cases
console.log(fiveLine("  a"));
console.log(fiveLine("  xy "));

/******** Task Solution 2 ********/

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}

/******** Task Solution 3 ********/

function fiveLine(s) {
  return [1, 2, 3, 4, 5].map((n) => s.trim().repeat(n)).join("\n");
}
