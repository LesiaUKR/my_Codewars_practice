class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}
 
let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')

class LinkedList {
    constructor(value) {}
    push(value) {}
    unshift(value) {}
    remove(value) {}
    pop() {}
    shift() {}
    insert(index, value) {}
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(7)
myLinkedList.unshift(3)
myLinkedList.insert(1, 5)
myLinkedList.remove(3)
myLinkedList.pop()
myLinkedList.shift()

let num1 = 1
let num2 = num1 // num2 is a copy of num1, they are not connected
num1 = 10
console.log(num1) // 10
console.log(num2) // 1

// Pointers - objects are stored in memory and variables that point 
// to those objects are references to the memory location where the
// object is stored. When you assign an object to a variable, 
// you are creating a reference to that object, not a copy of it. 
// Therefore, if you change the object through one variable, 
// it will affect all variables that reference that same object.
let obj1 = { name: 'Alice' }
let obj2 = obj1 // obj2 is a reference to the same object as obj1, they are connected
obj1.name = 'Bob'
console.log(obj1.name) // Bob
console.log(obj2.name) // Bob