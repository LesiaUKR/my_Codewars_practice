// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
// Examples
// If a = [1, 2] and b = [1], the result should be [2].
// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

// function arrayDiff(a, b) {
//   const banned = new Set (b)
//   console.log("banned", banned)
//   return a.filter((item)=>!banned.has(item))
// }

function arrayDiff(a, b) {
  return a.filter((item)=> !b.includes(item))
}

const c = [1, 2]
const d = [ 2, 2, 3 ]

console.log("тест", arrayDiff(c, d))

const e = [5, 5, 2, 2, 1]
const f = [ 2, 2, 3 ]
console.log("тест 2", arrayDiff(e, f))

// function arrayDiff(a, b) {
//   if(b.length==0 || a.length==0)
//     return a;
//   for(let i =0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//       if(a[i]==b[j]){
//         a.splice(i,1);
//         i--;
//       }
//     }
//   }
//   return a;
// }