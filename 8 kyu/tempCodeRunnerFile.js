
function sortIt(arr) {
  const newArray = arr.slice();
  console.log(newArray);

  let countObj = {};
  newArray.forEach((element) => {
    countObj[element] = (countObj[element] || 0) + 1;
  });
  newArray.sort((a, b) => {
    console.log("countObj[a]", countObj[a]);
    console.log("countObj[b]", countObj[b]);
    if (countObj[a] === countObj[b]) {
      return b - a; // Якщо кількості однакові, сортувати за значенням у зворотньому порядку.
    }
    return countObj[a] - countObj[b]; // Інакше сортувати за кількістю у зростаючому порядку.
  });

  return newArray;
}

// console.log(sortIt([1, 1, 1, 2, 2, 3]));
// console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));
console.log([1, 2, 3, 4, 4, 5, 5, 6, 6]);