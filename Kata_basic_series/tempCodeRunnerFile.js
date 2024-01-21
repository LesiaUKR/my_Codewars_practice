
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  } else if (arr.includes(5) && arr.includes(13)) {
    return "It's a black array";
  } else {
    return "It's a white array";
  }
}

console.log(blackAndWhite(5, 13));
console.log(blackAndWhite([5, 13]));
console.log(blackAndWhite([5, 12]));
console.log(blackAndWhite([10, 4, 8, 7, 9, 13, 3, 6, 13, 3, 13]));