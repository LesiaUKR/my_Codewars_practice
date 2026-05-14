// longest streak
// Write a function, longestStreak, that takes in the head of a linked list as an argument.
// The function should return the length of the longest consecutive streak of the same 
// value within the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  if (head === null) return 0;

  let maxStreak = 1;
  let currentStreak = 1;
  let current = head;

  while (current.next !== null) {
    if (current.val === current.next.val) {
      currentStreak += 1;
    } else {
      if (currentStreak > maxStreak) maxStreak = currentStreak;
      currentStreak = 1;
    }

    current = current.next;
  }

  return currentStreak > maxStreak ? currentStreak : maxStreak;
};

//test_00
//test_00
