// This lesson we learn two methods of array: concat() and join().
// We have seen concat() in the stringObject method,
// but the method of the arrayObject is different from the stringObject method,
// so we need to learn again.When studying the stringObject method split(),
// we have simply learned the join() method.This time we will review and explain it in detail.

// Their definitions and syntax please refer to:

/*** Array.prototype.concat()***/

// The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.

// Syntax;
// concat();
// concat(value1);
// concat(value1, value2);
// concat(value1, value2, /* …, */ valueN);

// Parameters;
// Arrays and / or values to concatenate into a new array.If all valueN parameters are omitted,
// concat returns a shallow copy of the existing array on which it is called.
// See the description below for more details.

/*** Array.prototype.join()***/

// Here are some examples to help us understand the use of concat() and join():

// We first learn the concat() method, which can add some elements to the end of the array.
// concat() can have more and more parameters, and the parameter can be values,
// array or otherthings.Look this example:
