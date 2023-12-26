// We have seen break in the switch statement, it can jump out the switch statement.
// it can also be used in the loop statement.an example:

// function findFirstOddNumber(arr){
//   var result;
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]%2==1){
//       result=arr[i];
//       break;
//     }
//   }
//   return result;
// }
// In this example, for loop traverse the array arr.when the first odd number found,
// break statement will jump out the for loop.

// In the loop statement, we can use continue skipping some code.for example,
// the following code ignores negative values:

// function dontDisplayNegative(arr){
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]<0) continue;
//     console.log(arr[i])
//   }
// }
// In this example, console.log(arr[i]) is never executed for negative element.
// thanks to continue.

// Through the use of break and continue, you can make the loop statement more
// flexible and convenient.

/******** Task ********/

// Coding in function grabDoll.function accept 1 parameter: dolls.
// it's a string array, a list of some dolls.

// You need traverse dolls by using for loop.
// If element is "Hello Kitty" or "Barbie doll",
// you should push it to a bag(bag is an array,
// I've defined in the function); if it's other strings,
// we should use continue skip it.

// When the bag has three element, bag is full.You should use break jump
// out the loop; If bag is not full, you should traverse dolls until the
// last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code.
// otherwise, your solution may not pass this kata.

/******** Task Solution 1 ********/

function grabDoll(dolls) {
  let bag = [];
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
      continue; // Skip the iteration for other dolls
    }

    console.log(dolls[i]);
    bag.push(dolls[i]);

    if (bag.length >= 3) {
      break;
    }
  }

  return bag;
}

/******** Task Solution 2 ********/

// function grabDoll(dolls) {
//   var bag = [];

//   for (var i = 0; i < dolls.length; i++) {
//     if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
//       bag.push(dolls[i]);
//     else continue;

//     if (bag.length === 3) break;
//   }

//   return bag;
// }

/******** Task Solution 3 ********/

// function grabDoll(dolls) {
//   var bag = [];
//   for (d in dolls) {
//     if (dolls[d] == "Hello Kitty" || dolls[d] == "Barbie doll")
//       bag.push(dolls[d]);
//     if (bag.length < 3) continue;
//     break;
//   }
//   return bag;
// }

/******** Task Solution 4 ********/

// console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), [
//   "Hello Kitty",
// ]);
// console.log(
//   grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"])
// );
// console.log(
//   grabDoll([
//     "Mickey Mouse",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Barbie doll",
//     "Snow white",
//   ])
// );
// console.log(
//   grabDoll([
//     "Mickey Mouse",
//     "Barbie doll",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Snow white",
//   ])
// );
