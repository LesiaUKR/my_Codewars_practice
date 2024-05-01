// Code as fast as you can!

// You need to make a constructor function with two methods
// (and only these two methods) to return and increment a counter,
// but the counter should not be directly accessible from outside the function.

// Task_v_1
function Counter() {
  //quickly, now!
  this.check = function () {
    return count;
  };
  this.increment = function () {
    count++;
  };
}

// Task_v_2
function Counter() {
  let counter = 0;
  this.check = () => counter;
  this.increment = () => counter++;
}
