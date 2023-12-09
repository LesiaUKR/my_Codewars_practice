// Problem
// Complete the function that takes an odd integer (0 < n < 1000000)
// which is the difference between two consecutive perfect squares,
// and return these squares as a string in the format "bigger-smaller"

// Examples
// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"

/******** Task Solution 1 ********/

const findSquares = (num) => {
  let squares = [];
  let i = 1;
  while (i < 1000000) {
    squares.push(i * i);
    i++;
  }

  for (let i = 0; i < squares.length - 1; i++) {
    if (Math.abs(squares[i + 1] - squares[i]) === num) {
      return `${squares[i + 1]}-${squares[i]}`;
    }
  }
  return 1;
};

// Examples
// console.log(findSquares(9));  // Output: "25-16"
// console.log(findSquares(5)); // Output: "9-4"
// console.log(findSquares(7)); // Output: "16-9"
console.log(findSquares(81));
// console.log(findSquares(25));

// Ця функція шукає два послідовних повних квадрати з різницею, яка дорівнює заданому числу num.

// алгоритм виконання функції:

// Створюється масив squares, в якому будуть зберігатися квадрати натуральних чисел.

// Запускається цикл while, який буде додавати квадрати чисел до масиву squares до того
// моменту, поки квадрат додається менше, ніж 1000000.

// Потім запускається цикл for, який пройде по всіх елементах масиву squares(крім останнього),
//    і перевіряє, чи різниця між наступним і поточним елементами дорівнює заданому числу num.

// Якщо умова виконується, функція повертає рядок у форматі "більший-менший",
// де "більший" - це квадрат наступного числа в масиві,
// а "менший" - квадрат поточного числа.

// Якщо жодна пара не відповідає умові після перевірки всіх елементів,
// функція повертає 1(який, ймовірно, може слугувати як позначка, що пара не знайдена).

/******** Task Solution Others ********/

// function findSquares(n) {
//   const i = (n - 1) / 2;
//   return (i + 1) ** 2 + "-" + i ** 2;
// }

// const findSquares = (num) => {
//   return Math.round(num / 2) ** 2 + "-" + Math.floor(num / 2) ** 2;
// };

// const findSquares = ($) =>
//   `${Math.round($ / 2) ** 2}-${Math.floor($ / 2) ** 2}`;

//   const findSquares = (num) => {
//     return Math.round(num / 2) ** 2 + "-" + Math.floor(num / 2) ** 2;
//   };

// const findSquares = (num) => {
//   let min = num - Math.ceil(num / 2);
//   let max = num - Math.floor(num / 2);
//   let max2 = Math.pow(max, 2);
//   let min2 = Math.pow(min, 2);

//   return `${max2}-${min2}`;
// };

/*** Task ***/

// let a = true;
// let b = true;

// console.log(a && b); //true
// console.log(!a && b); //false
// console.log(a && !b); //false
// console.log(!(a && b)); //false
// console.log(!a && !b); //false
// console.log(!(!a && !b)); //true

/*** Task ***/
// const name = "Vasia";
// Math.abs(name.length - 15);
// console.log(Math.abs(name.length - 15));

/*** Task ***/

// console.log("after    " + "    before");
// const result = 0.32 * 0.22 * 0.75;
// console.log(result);

/*** Task ***/

// let a = 5;
// console.log(++a);
// console.log(a++);

/*** Task ***/

// 0 === 1; //false(strict equality, 0 is not equal to 1)
// console.log(0 === 1);
// 1 === "1"; //false (strict equality, different types)
// console.log(1 === "1");
// 1 == "1"; //true (loose equality, type coercion)
// console.log(1 == "1");
// 4 === 1 + 3; //true (strict equality, 1 + 3 equals 4)
// console.log(4 === 1 + 3);
// "A" > "a"; //false (comparing Unicode values, 'A' comes before 'a')
// console.log("A" > "a");
// "B" < "b"; //true (comparing Unicode values, 'B' comes before 'b')
// console.log("B" < "b");
// "13" > 12; //true (string comparison, '13' is greater than 12)
// console.log("13" > 12);
// "13px" > 12; //false (string comparison, '13px' is not a valid number)
// console.log("13px" > 12);
// "13px" < "14"; //true (string comparison, '13px' comes before '14' lexicographically)
// console.log("13px" < "14");

/*** Task ***/

Math.abs(Math.floor(-46.867));

console.log(Math.abs(Math.floor(-46.867)));
// /*** Task ***/

// for (let i = 0; i <= 4; i++) {
//   console.log(++i);
// }

/*** Task ***/

// let i = 0;
// let c = 0;
// const str = "Rolling Scopes School";
// while (i < str.length) {
//   if (str[i] === "o") {
//     c++;
//   }
//   i++;
// }
// console.log(c);

/*** Task ***/

// let a = true;
// let b = true;

// console.log(a || b); //true
// console.log(!a || b); //true
// console.log(a || !b); //true
// console.log(!a || !b); //false
// console.log(!(a || b)); //false
// console.log(!(!a || !b)); //true

/*** Task ***/

// let a = 5;
// console.log(++a);
// console.log(a++);

/*** Task ***/
// const a = "";
// const b = 9;
// const c = null;

// console.log(!!(!a || (!b && !c))); // true || (false && true) - true

// console.log(!!(a || (!b && !c))); // false || (false && true) - false

// console.log(!!(a || !b || c)); // (false || false ||false) - false

// console.log(!(!a && b && !c)); // true && true && true - false

// console.log(!(a || (!b && !c))); //false || (false && true) - true

/*** Task ***/

//  How to create a string with a valid greeting based on the name contained in the name variable?

// let name = "Jack";
// const greeting = 'Hello ${name}'
// console.log(greeting);
// const greeting = 'Hello ', name
// console.log(greeting);
// const greeting = 'Hello name'
// console.log(greeting);
// const greeting = "Hello " + name;
// console.log(greeting);
// const greeting = `Hello ${name}`
// console.log(greeting);

/*** Task ***/
// let sum = 8 / 2 + 5 - -3 / 2;

// console.log(sum);

/*** Task ***/
// const RS = "rs";
// console.log("css", RS, "js");

/*** Task ***/

// let num = "4" * "9";
// console.log(num);

/*** Task ***/
// let name = "Vasia";
// name.length = 50;

// The value of the length property for a string is read-only, and attempting to
// modify it will not have any effect.
// The length property will still reflect the actual length of the string, which is 5 in this case.

/*** Task ***/
