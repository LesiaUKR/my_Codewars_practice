// Write a function, longestWord, that takes in a sentence 
// string as an argument. The function should return the 
// longest word in the sentence. If there is a tie, return 
// the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

const longestWord = (sentence) => {
  let longestWorld = ""
  const sentenceArray = sentence.split(" ")
  console.log(sentenceArray)
  for(let word of sentenceArray){
    console.log("word", word)
    if(word.length >= longestWorld.length) longestWorld = word
  }
  return longestWorld;
};

console.log(longestWord("the quick brown fox jumped over the lazy dog"))
// n = length of sentence
// Time - O(n) space - O(n) too because we save all of 

module.exports = {
  longestWord,
};
