function findElement(arr, value) {
    let index = -1;
  arr.some((item, i) => {
    console.log("i", i);
    console.log("item", item);
    if (item === value) {
      index = i;
      return true;
    }return false;
    
  });
  return index
}

console.log(findElement(["Ace", 10, true], 10));