function changeMe(moneyIn) {
  // Write your function here
   const change = ["£5", "£2", "£1", "50p", "20p"];
    const value = parseFloat(input.replace(/[£p]/g, ""));
   console.log("value", value);
}
console.log(changeMe("20p 20p 20p 20p 20p"));