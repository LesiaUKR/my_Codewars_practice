/******** Task ********/

// Who remembers back to their time in the schoolyard,
// when girls would take a flower and tear its petals,
// saying each of the following phrases each time a petal was torn:

"I love you";
"a little";
"a lot";
"passionately";
"madly";
"not at all";

// If there are more than 6 petals, you start over
// with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement,
// dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls
// would say at the last petal for a flower of a given number of petals.
// The number of petals is always greater than 0.

/******** Task Solution 1 ********/

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
function howMuchILoveYou(nbPetals) {
  let phrase = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
  };
  return phrase[nbPetals % 6];
}
/******** Task Solution 3 ********/
const howMuchILoveYou = (n) =>
  ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
    n % 6
  ];
/******** Task Solution 4 ********/
function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
    case 1:
      return "a little";
    case 2:
      return "a lot";
    case 3:
      return "passionately";
    case 4:
      return "madly";
    case 5:
      return "not at all";
    default:
      return "I love you";
  }
}
/******** Task Solution 5 ********/
function howMuchILoveYou(nbPetals) {
  var muchLoves = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return muchLoves[(nbPetals - 1) % muchLoves.length];
}
/******** Task Solution 6 ********/
function howMuchILoveYou(petals) {
  const arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  while (petals > 6) petals -= 6;
  return arr[petals - 1];
}

console.log(howMuchILoveYou(7)); // "I love you"
console.log(howMuchILoveYou(3)); // "a lot"
console.log(howMuchILoveYou(20)); //"not at all"
