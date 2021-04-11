// Memorization
// Js object, key will be the argument to function, value will be return value
//
// Write a function `fin(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.
//
// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.
//
//     n:  1, 2, 3, 4, 5, 6, 7,  8,   9, ...
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//

// Orginal Code Without Memorization
// const fib = (n) => {
//     if(n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// };

// Code with Memorization Implemented
const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};


console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21
console.log(fib(50)); // 12586269025

const foo = (n) => {
    if(n <= 1) return;
    foo(n - 1);
}
const bar = (n) => {
    if(n <= 1) return;
    bar(n - 2);
}
const dib = (n) => {
    if(n <= 1) return;
    dib(n - 1);
    dib(n - 1)
}
const lib = (n) => {
    if(n <= 1) return;
    lib(n - 2);
    lib(n - 2);
}