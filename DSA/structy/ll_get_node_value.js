// Write a function, getNodeValue, that takes in the head of a 
// linked list and an index. The function should return the 
// value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// Algorithm: Get Node Value by Index
// Start from the head of the linked list.
// Create a variable current that points to the current node.
// Create a variable currentIndex and set it to 0.
// While current is not null, repeat the following steps:
// Check if currentIndex is equal to the target index.
// If it is equal, return the value of the current node.
// If it is not equal, move current to the next node.
// Increase currentIndex by 1.
// If the loop finishes, it means the list ended before we found the given index.
// Return null.
// Interview explanation

// I start from the head of the linked list and keep track of the current index. While the current node exists, I check whether the current index matches the target index. If it matches, I return the current node’s value. Otherwise, I move to the next node and increment the index. If I reach the end of the list without finding the index, I return null.

// Complexity

// Time complexity is O(n) because in the worst case we may need to traverse the whole linked list.

// Space complexity is O(1) because we only use a few variables and do not create any extra data structure.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
    let current = head;
    let currentIndex = 0;
   while(current !== null){
       if(currentIndex === index) return current.val;
        console.log("currentIndex", currentIndex)
        console.log("current.val", current.val)
        
        current = current.next
        currentIndex++;
       }
   return null;
};

// n = number of nodes
// Time: O(n)
// Space: O(1)

//recursive
// const getNodeValue = (head, index) => {
//     if(head === null) return null;
//     if(index == 0) return head.val;
//     return getNodeValue(head.next, index-1);
// }
// n = number of nodes
// Time: O(n)
// Space: O(n)

//test_00
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'

//test_01
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 3); // 'd'

//test_02
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 7); // null

//test_03
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 0); // 'banana'

//test_04
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 1); // 'mango'
