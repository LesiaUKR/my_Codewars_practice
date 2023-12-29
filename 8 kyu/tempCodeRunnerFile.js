function fiveLine(s) {
  // Remove leading and trailing whitespaces
  s = s.trim();

  // Initialize an empty string to store the result
  let result = "";

  // Loop from 1 to 5 to generate the lines
  for (let i = 1; i <= 5; i++) {
    // Use string template to concatenate s repeated i times
    result += `${s.repeat(i)}\n`;
  }

  // Remove the trailing newline character and return the result
  return result.trim();
}

// Test cases
console.log(fiveLine("  a"));