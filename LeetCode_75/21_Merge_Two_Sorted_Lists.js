// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing 
// together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = (list1, list2) => {
    let dummyHead = new Node(null);
    let tail = dummyHead;
    let current1 = list1;
    let current2 = list2;
    while(current1 !== null && current2 !== null){
        if(current1.val < current2.val){
            tail.next = current1;
            current1 = current1.next;
        }else{
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
    }
    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;
    console.log('dummyHead.next', dummyHead.next);
    return dummyHead.next;
};

// test_02
const h = new Node(30);
// 30

const p = new Node(15);
const q = new Node(67);
p.next = q;
// 15 -> 67


console.log(mergeTwoLists(h, p));