const a = "";
const b = 9;
const c = null;

console.log(!!(!a || (!b && !c))); // true || (false && true) - true

console.log(!!(a || (!b && !c))); // false || (false && true) - false

console.log(!!(a || !b || c)); // (false || false ||false) - false

console.log(!(!a && b && !c)); // true && true && true - false

console.log(!(a || (!b && !c))); //false || (false && true) - true