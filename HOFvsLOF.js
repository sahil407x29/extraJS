// higher order function vs lower order function 

// Lower-order function (LOF)

// A function that does NOT deal with other functions

// It:

// does not take a function as input

// does not return a function

// function add(a, b) {
//   return a + b;
// }


// Higher-order function (HOF)

// A function that works WITH functions

// It does at least one of these:

// takes a function as an argument

// returns a function

// Examples of HOF


// ex1
// function operate(a, b, fn) {
//   return fn(a, b);
// }

// operate(2, 3, add);

// ex2
// function multiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const double = multiplier(2);
// double(5); // 10

// Mechanism
// 1st Line
// const double = multiplier(2);
// What happens internally
// multiplier(2) runs

// it returns this function:

// function (y) {
//   return 2 * y;
// }
// x = 2//

// So now JS does:

// const double = function (y) {
//   return 2 * y;
// };

// 2nd Line
// double(5);

// Since double is a function, this is legal.

// Replace double with what it actually is:

// (function (y) {
//   return 2 * y;
// })(5);

// Now:

// y = 5

// return 2 * 5