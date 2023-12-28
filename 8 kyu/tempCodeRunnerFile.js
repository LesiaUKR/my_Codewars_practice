function topSecret(str) {
  const shift = 3;
  let chars = str.split("");
  let decodedStr = "";
  console.log(chars);
  for (let i = 0; i < chars.length; i++) {
    let currentUnicode = chars[i].charCodeAt();
    let previousUnicode = currentUnicode - shift;
    console.log("currentUnicode", currentUnicode);
    console.log("previousUnicode", previousUnicode);
    decodedStr = String.fromCharCode();
    console.log("decodedStr", decodedStr);
  }
}
console.log(topSecret("Pb qdph lv Mrkq")); // "My name is John";