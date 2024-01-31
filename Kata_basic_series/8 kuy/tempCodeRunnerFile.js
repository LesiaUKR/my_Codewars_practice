function howMuchILoveYou(nbPetals) {
  let phrasesArr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  // Знайти індекс останньої фрази залишковою від ділення кількості пелюсток на 6
  const lastPhraseIndex = (nbPetals - 1) % phrasesArr.length;

  // Повернути фразу, що відповідає індексу
  return phrasesArr[lastPhraseIndex];
}

/******** Task Solution 2 ********/
/******** Task Solution 3 ********/
/******** Task Solution 4 ********/
/******** Task Solution 5 ********/
/******** Task Solution 6 ********/

console.log(howMuchILoveYou(7)); // "I love you"
console.log(howMuchILoveYou(3)); // "a lot"
console.log(howMuchILoveYou(20)); //"not at all"