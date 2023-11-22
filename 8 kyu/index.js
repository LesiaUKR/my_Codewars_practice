/* Task 1 
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/

// варіант 1
function stringy(size) {
  // your code here  
  let result = '';
  
  for (let i = 0; i < size; i++){
    
    result += i % 2 === 0 ? '1' : '0'
    
  }
  
  return result;
}

console.log(stringy(6));

// варіант 2
function stringy2 (size) {
  let str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;
}

console.log(stringy2(6));

// варіант 3
const stringy3 = size =>
    ``.padStart(size, `10`);
  
console.log(stringy3(5));
    
