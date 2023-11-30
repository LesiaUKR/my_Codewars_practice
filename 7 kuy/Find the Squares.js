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
