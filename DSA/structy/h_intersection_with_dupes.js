// intersection with dupes
// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. 
// The function should return a new array containing elements that are common 
// to both input arrays. The elements in the result should appear as many times 
// as they occur in both input arrays.

// You can return the result in any order.

// const intersectionWithDupes = (a, b) => {
//  const countA = countElements(a);
//  const countB = countElements(b);
//  console.log("countA", countA)
//  console.log("countB", countB)
//  const result = [];
//  for(let element in countA){
//     if(element in countB){
//         for(let i = 0; i < Math.min(countA[element], countB[element]); i++){
//           result.push(element);
//         }
//     }
//  }
// console.log("result", result)
//  return result;
// };

// const countElements = (elements)=>{
//     const countEl = Object.create(null);

//     for (const element of elements){
//         if(!(element in countEl)){
//             countEl[element]=0;
//         }
//         countEl[element] += 1;
//     }

//     return countEl;
// }

const intersectionWithDupes = (a, b) => {
 const countA = countElements(a);
 const countB = countElements(b);

 const result = [];
 for(const [key, value] of countA){
    console.log(key, value)
    if(countB.has(key)){
        for(let i = 0; i < Math.min(value, countB.get(key)); i++){
          console.log("key frequency in b", countB.get(key))
          result.push(key);
        }
    }
 }
console.log("result", result)
 return result;
};

const countElements = (elements)=>{
    const countEl = new Map();

    for (const element of elements){
        if(!(countEl.has(element))){
            countEl.set(element,0)
        }
        countEl.set(element, countEl.get(element)+1)
    }

    return countEl;
}

// n = length of array a
// m = length of array b
// Time: O(n+m)
// Space: O(n+m)

module.exports = {
  intersectionWithDupes,
};

intersectionWithDupes(
  ["a", "b", "c", "b"], 
  ["x", "y", "b", "b"]
); // -> ["b", "b"]

// intersectionWithDupes(
//   ["q", "b", "m", "s", "s", "s"], 
//   ["s", "m", "s"]
// ); // -> ["m", "s", "s"]

// intersectionWithDupes(
//   ["p", "r", "r", "r"], 
//   ["r"]
// ); // -> ["r"]

// intersectionWithDupes(
//   ["r"], 
//   ["p", "r", "r", "r"]
// ); // -> ["r"]

// intersectionWithDupes(
//   ["t", "v", "u"], 
//   ["g", "e", "d", "f"]
// ); // -> [ ]

// intersectionWithDupes(
//   ["a", "a", "a", "a", "a", "a",], 
//   ["a", "a", "a", "a"]
// ); // -> ["a", "a", "a", "a"]


// const a = [];
// const b = [];
// for (let i = 0; i < 20000; i += 1) {
//   a.push(String(i));
//   b.push(String(i));
// }

// intersectionWithDupes(a, b); // -> [0, 1, 2, ..., 19999]


