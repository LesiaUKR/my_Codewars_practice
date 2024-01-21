/******** Task 1 ********/

// const obj = {
//   doSmth: function () {
//     console.log(this);
//   },
// };
// const doSmthElse = obj.doSmth.bind(this);
// doSmthElse();

//  output [object Window]
// The output in the console would be: window
// Explanation:
// When you use bind(this) on the doSmth function, you are explicitly setting the context(this)
// to the global object, which is window in a browser environment.
// Therefore, when doSmthElse() is called, it logs the global object(window) to the console.

/******** Task 2 ********/

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

//  output 1-7-3-5—2-6-4

/******** Task 3 ********/

// const obj = {
//   doSmth: function () {
//     console.log(this);
//   },
// };

// obj.doSmth();

// The output in the console would be: obj
// Explanation:

// When obj.doSmth() is called, the value of this inside the doSmth function refers to the object obj.
// Therefore, the output in the console would be the reference to the obj object.

/******** Task 4 ********/

// function doSmth() {
//   console.log(this);
// }
// doSmth();

// The output in the console would be: window
// Explanation:

// In a browser environment, when a function is called in the global scope(outside of any object or context),
// the default value of this is the global object, which is window in browsers.
// Therefore, when doSmth() is called in the global scope, it logs the global object(window) to the console.

/******** Task 5 ********/

// var x = 5;
// var y = "10";
// var result = x + y;
// console.log(result);

// The result of the following code would be the string "510".

// Explanation:

// In JavaScript, when the + operator is used with a number and a string, the number is implicitly converted
// to a string, and then the two strings are concatenated.In this case,
// the number 5 is converted to the string "5", and when concatenated with the string "10",
// the result is string "510".The console.log(result) would output "510" to the console.

/******** Task 6 ********/

// console.log(doSmth); // Output: undefined
// var doSmth = function (param) {
//   console.log("text");
// };
// console.log(doSmth); // Output: [Function: doSmth]

// Explanation:

// The first console.log(doSmth) is executed before the variable doSmth is initialized.
// At this point, the variable doSmth exists due to hoisting, but its value is undefined.

// The variable doSmth is then assigned a function expression.

// The second console.log(doSmth) is executed after the variable has been assigned the function expression.
// It now logs the function definition to the console.

/******** Task 7 ********/

// function debounce(f, ms) {
//   let isCooldown = false;
//   return function () {
//     if (isCooldown) return;
//     f.apply(this, arguments);
//     isCooldown = true;
//     setTimeout(() => (isCooldown = false), ms);
//   };
// }

// let f = debounce(console.log, 1000);

// f(1); //1
// f(2); //2
// setTimeout(() => f(3), 100); //3
// setTimeout(() => f(4), 1000); //4
// setTimeout(() => f(5), 1500); //3

// output 1, 4

/******** Task 8 ********/

// function doSmth() {
//   var counter = 0;
//   return function () {
//     return ++counter;
//   };
// }
// const a = doSmth();
// const b = doSmth();
// a();
// a();
// console.log(a());
// console.log(b());

//output 3, 1

// Explanation:

// a() is called three times, so the counter for a is incremented three times.
// The last value of the counter for a is logged, resulting in 3.

// b() is called once, so the counter for b is incremented once.
// The value of the counter for b is logged, resulting in 1.

/******** Task 9 ********/

// const bar = () => console.log("bar");
// const baz = () => console.log("baz");
// const foo = () => {
//   console.log("foo");
//   setTimeout(bar, 0);
//   baz();
// };
// foo();

//output foo, baz, bar

/******** Task 10 ********/

console.dir(doSmth);
function doSmth(param) {
  console.log("text");
}
console.dir(doSmth);

//output function, function

//The output in the console would typically show the function doSmth and its properties before
// and after its declaration.However, the specific content of the output can vary based on the
// JavaScript environment and the console implementation.

/******** Task 11 ********/

/*
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(arr, value) {
  let index = -1;
  arr.some((item, i) => {
    console.log("i", i);
    console.log("item", item);
    if (item === value) {
      index = i;
      return true;
    }
    return false;
  });
  return index;
}

console.log(findElement(["Ace", 10, true], 10));

/******** Task 12 ********/

//NOT SOLVED
// function sumArrays(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i <= arr1.length - 1; i += 1) {
//     console.log("arr1[i]", arr1[i]);
//     arr2.reduce((current) => {
//       console.log("current", current);
//       return newArr.push(arr1[i] + current);
//     });
//   }
//   return newArr;
// }

// console.log(sumArrays([-1, 0, 1], [1, 2, 3, 4])); //[0, 2, 4, 4]);
