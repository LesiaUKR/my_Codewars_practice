function topSecret(str) {
  const shift = 3;
  const totalAlphabetLength = 26;
  let chars = str.split("");
  let decodedStr = "";

  console.log(chars);

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    const isUpperCase = chars[i] === chars[i].toUpperCase();

    console.log(isUpperCase);

    if (/^[A-Za-z]+$/.test(currentChar)) {
      const baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      let currentUnicode = currentChar.charCodeAt();
      console.log("currentUnicode", currentUnicode);
      decodedUnicode =
        ((currentUnicode - baseCharCode - shift + totalAlphabetLength) % 26) +
        baseCharCode;
      console.log("decodedUnicode", decodedUnicode);
      decodedStr += String.fromCharCode(decodedUnicode);
    } else {
      decodedStr += currentChar;
    }
  }
  return decodedStr;
}

// console.log(topSecret("B"));
// console.log("Y".charCodeAt());

//console.log(topSecret("Pb qdph lv Mrkq")); // "My name is John";
// console.log(topSecret("wklv lv dq hadpsoh")); // "this is an example";
// console.log(topSecret("Khoor Zruog!")); // "Hello World!";
console.log(topSecret("Wrs vhfuhw ilohv: Qr. 2478 Vxshu djhqw LIFOBS, rq d gdun qljkw, vwroh wkh Dssoh fruh iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh."));