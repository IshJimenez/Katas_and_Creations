//--------------------------Memoization
//              
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

// Orginal Code Without Memoization
// const fib = (n) => {
//     if(n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// };

// Code with Memoization Implemented
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

//--------------------------Memoization(gridTraveler)
// Say that you are a traveler on a 2D grid. You begin in the top-left corner and your
// goal is to travel to the bottom-right corner. You may only move down orright.
//
// In how many ways can you travel to the goal on a grid with dimensions m * n?
//
// Write a function `gridTraveler(m, n)` that calculate this.
//
//gridTraveler(2, 3)

// const gridTraveler = (m, n ) => {
//     if(m === 1 && n === 1) return 1;
//     if(m === 0 || n === 0) return 0;
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// }

//gridTraveler(a,b) is the same as gridTraveler(b,a)tion
// Memoization

const gridTraveler = (m, n, memo={}) => {
    // Are the arguments in the memoization
    const key = m + ',' + n;
    //The purpose of the ',' is so the numbers dont get mixed together
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    // if (( m - 1 + ',' + n) in memo){} will make debugging harder and there is no need to check if the child of an object
    // has the item since the line on 77 will check or that 
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    // gridTraveler(m - 1, n) + gridTraveler(m, n - 1) will go inside the memo object
    return memo[key];
};


// m = 42
// n = 3
// or if you had
// m = 2
// n = 23
// key = 423 (would not work)
// key = 4,23

console.log(gridTraveler(1, 1)); //1
console.log(gridTraveler(2, 3)); //3
console.log(gridTraveler(3, 2)); //3
console.log(gridTraveler(3, 3)); //6
console.log(gridTraveler(18, 18)); //2333606220

// ---------------------Memoization Recipe
// 1. Make it work 
//          A) A solution that is recursive
//          B) Visualize the problem as a tree  
//          C) We have a large issue to break down to smaller 
//          issue of the same problem
//          D) Implement the tree using recursion
//          E) Think of the leaf as the base grid that will 
//          be the brute force recursion
//          F) Test it ( 
//          E) Code that is slow not same thing as wrong code
// 2. Make it efficient
//          A) Add a memo object 
//          - Needs to include key which are arguments to our function,
//          value of that object which represent the return value
//          --Unqiue set of arguments should give particular results
//          ---Make sure this object is shared with all your recursive calls. 
//          ----Helps to pass them as arguments. Setting empty argument at top level call.
//          B) Add a base case to return memo values  
//          -Not remove any base case from 
//          brute force solution just adding
//          --If arguments in memo item as a key we return stored value =memo section logic=
//                                               =looking up some stored value insdie memo
//          C) Store return values into the memo
//          -Going to return values are in function and make sure add those values to our memo
//          before returning