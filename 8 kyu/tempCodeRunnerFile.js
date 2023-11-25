
function padIt(str, n) {
  //coding here
  let num = 1;
  const symbolToAdd = "*";
  do {
    if (num % 2 === 0) {
      str = str + symbolToAdd;
    } else {
      str = symbolToAdd + str;
    }
    num++;
  } while (num <= n);
  return str;
}

(padIt("a", 1));