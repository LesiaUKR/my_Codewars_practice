const a = "";
const b = 9;
const c = null;

console.log(!!(!a || !b && !c)); // true || (false && true) - true