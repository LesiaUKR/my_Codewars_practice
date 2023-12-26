function whatNumberIsIt(n) {
  let message = "";
  switch (true) {
    case n === Number.MAX_VALUE:
      message = " Input number is Number.MAX_VALUE";
      break;
    case n === Number.MIN_VALUE:
      message = " Input number is Number.MIN_VALUE";
      break;
    case n === Number.POSITIVE_INFINITY:
      message = " Input number is Number.POSITIVE_INFINITY";
      break;
    case n === Number.NEGATIVE_INFINITY:
      message = " Input number is Number.NEGATIVE_INFINITY";
      break;
    default:
      message = ` Input number is ${n}`;
  }
  return message;
}

console.log(whatNumberIsIt(1.7976931348623157e308));
