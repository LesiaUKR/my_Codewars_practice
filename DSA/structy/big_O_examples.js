//O(1)
const stuff = {a:1, b: 2, c:3}
console.log('b' in stuff)

// O(1)
const a = 4;
const sum = a + 10;
console.log(a);

// O(1)
const str = "hello";
console.log(str[1]);

// O(1)
const colors = ['red', 'blue', 'green', 'yellow', 'magenta'];
console.log(colors.includes('green'))

// O(n)
const sentence = 'hello world, how are you?';
console.log(sentence.split(' '));

// O(n)
const array = [5, 9, 2, -6, 12, 20, 30, 24];
let sumArray = 0;
for (let i = 0; i < array.length; i += 1) {
  sumArray += array[i];
}
console.log(sumArray);

// O(n * n) n square
const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < letters.length; i += 1) {
  for (let j = 0; j < letters.length; j += 1) {
    console.log(letters[i], letters[j]);
  }
}

// n = array length
// Time: O(n) - 
// array.includes method has what time complexity - O(n), linear
// Space: O(1)
const function1 = (array) => {
  return array.includes('potato'); 
};

console.log(function1(['broccoli', 'squash', 'lettuce', 'turnip', 'spinach']));

// Time: O(n)
// Space: O(1) - no any arrays, strings created
const function2 = (n) => {
  for (let i = 0; i < (n / 2); i += 1) {
    console.log(i);
  }
};

function2(20);


// Time: O(n)
// Space: O(n)
const function3 = (n) => {
  const nums = [];
  for (let i = 1; i < n; i += 1) {
    nums.push(i);
  }
  return nums;
};

console.log(function3(10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Time: O(n*n)
// Space: O(n)
const function4 = (n) => {
  const nums = [];
  for (let i = 1; i < n; i += 1) {
    nums.unshift(i);
  }
  return nums;
};

console.log(function4(10)); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// n = string length
// Time: O(n*n + n) = O(n*n)
// Space: O(1)  no any arrays, strings created
const function5 = (s) => {
  for (let i = 0; i < s.length; i += 1) {
    for (let j = 0; j < s.length; j += 1) {
      console.log(s[i], s[j]);
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    console.log(s[i]);
  }
};

function5('qrs');

/*
Output:
q q
q r
q s
r q
r r
r s
s q
s r
s s
q
r
s
*/