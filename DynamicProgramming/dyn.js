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
//
// Say that you are a traveler on a 2D grid. You begin in the top-left corner and your
// goal is to travel to the bottom-right corner. You may only move down or right.
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
//
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

// ---------------------canSum
//
// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of 
// numbers as arguments.
// The function should return a boolean indicating whether or not is is possible to generate
// the targetSum using numbers from the array.
// You can use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.
// canSum(7, [5,3,4,7]) would be true since 3+4 or 7 = 7
// canSum(7, [2,4]) would be false since there is no wayto get 7

const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
    memo[targetSum] = true;
    return true;
    }
    }
    memo[targetSum] = false;
    return false;
};

console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); //false

// ---------------------howSum
//
// Write a function `howSum(targetSum, numbers)` that takes in a targetSum 
// and an array of numbers as arguments.
// 
// The function should return an array containing any combination of elements that add up
// to exactly the targetSum. If there is no combination that adds up to the targetSum,
// then return null.
//
// If there are multiple combiinations possible, you may return any single one.

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
       memo[targetSum] = [ ...remainderResult, num ];
       return memo[targetSum]
    }
    }
    memo[targetSum] = null;
    return null;
};

// m = target sum
// n = numbers.length

//Brute force
// time: O(n*m = m)
// time is the exponential number of nodes in a tree x height power(target sum)
// space: O(m^2)
// height of recursion

//Memoized
// time: O(n*m^2)
// space: O(m)

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); //null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); //null

// ---------------------bestSum
//
// Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of 
// numbers as arguments.
//
// The function should return an array containing the shortest combination of numbers
// that add up to exactly the targetSum.
//
// If there is a tie for the shortest combination, you may return any one of the shortest.

const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    // using -in- would give you incedis of numbers like 0,1,2 and -of- gives us elements
    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if(remainderCombination !== null) {
        const combination = [ ...remainderCombination, num ];
        // if the combination is shorter than the current "shortest", update it
        if(shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
        }
        }
 }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

// m = target sum
// n = numbers.length

//Brute force
// time: O(n^m * m)
// space: O(m^2)

//Memoized
// time: O(m^2 * n)
// space: O(m^2)

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

// ---------------------canConstruct
//
// Write a function `canConstruct(target, wordbank)` that accepts a 
// target string and an array of strings.
//
// The function should return a boolean indicating whether or not the
// `target` can be constructed by concatenating elements of the `wordbank`
// array.
//
// You can reuse elements of `wordBank` as many times as needed.

    // canConstruct(abcdef, [ab, abc, cd, def, abcd])

//             -abcdef-
//  Take ab    Take abc   Take abcd    Take cd (NO) (taking from middle will create new agenicies)
//  -cdef-      -def-        -ef-       (NO) -abef-   (Will affect later moves)
//  Take cd     Take def    Cant take more out
//  -ef-         -''-       Return F
// Return F     Return T
// F, T, F is sent to the top but since we have a way to solve returns T

// abc + def = true

// canConstruct(skateboard, [bo,rd,ate,t,ska,sk,boar])

    //             -skateboard-
    //  Take ska        Take sk   
    //  -reboard-     -ateboard-             
    //  Take t         Take ate   
    //  -eboard-         -board-       
//  Return F        Take bo     Take boar
//                  -ard-       -d-
//                  Return F    Return F
// F, F, F is sent to the top but since we have a way to solve returns F

// abc + def = true


// ska + t + ? || sk + ate + boar + ? || sk + ate + bo + ?
// false

// canConstruct('', [ cat, dog, mouse ])

// can take zero elements from an array
//true

const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if (target === '') {
        return true;
    }
    for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
        const suffix = target.slice(word.length)
        if (canConstruct(suffix, wordBank, memo) === true) {
            memo[target] = true;
            return true;
        }
    }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct("abcdef", ['ab','abc','cd','def','abcd'])) //true
console.log(canConstruct("skateboard", ['bo','rd','ate','t','ska','sk','boar'])) //false
console.log(canConstruct("enterapotentpot", ['a','p','ent','enter','ot','o','t'])) //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
])) // false


// ---------------------countConstruction
//
// Write a function `countConstruction(target, wordbank)` that accepts a 
// target string and an array of strings.
//
// The function should return the number of ways that the `target` can be constructed
// by concatenating elements of the `wordBank` array.
//
// You may reuse elements of `wordBank` as many times as needed.

const countConstruction = (target, wordBank, memo={}) => {
if (target in memo) return memo[target];
if (target === '') return 1;
let totalCount = 0;

for (let word of wordBank) {
    if(target.indexOf(word) === 0) {
    const numWaysForRest = countConstruction(target.slice(word.length), wordBank, memo)
    totalCount += numWaysForRest;
    }
}

memo[target] = totalCount;
return totalCount;

}

console.log(countConstruction("purple", ['purp','p','ur','le','purl'])) //2
console.log(countConstruction("abcdef", ['ab','abc','cd','def','abcd'])) //1
console.log(countConstruction("skateboard", ['bo','rd','ate','t','ska','sk','boar'])) //0
console.log(countConstruction("enterapotentpot", ['a','p','ent','enter','ot','o','t'])) //4
console.log(countConstruction("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
])) // 0

// ---------------------allConstruct
//
// Write a function `allConstruct(target, wordbank)` that accepts a 
// target string and an array of strings.
//
// The function should return a 2D array containing all of the ways that the
// `target`can be constructed by concatenating elements of the `wordBank` array.
// Each element of the 2D array should represent one combination
// that constructs the `target`.
//
// You may reuse elements of `wordBank` as many times as needed.

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
        const suffix = target.slice(word.length);
        const suffixWays = allConstruct(suffix, wordBank, memo);
        const targetWays = suffixWays.map(way => [ word, ...way ]);
        result.push(...targetWays)
    }
    }

    memo[target] = result;
    return result;
}

console.log(allConstruct("purple", ['purp','p','ur','le','purl'])) // Wrote it down on notebook. Remember to add 
console.log(allConstruct("abcdef", ['ab','abc','cd','def','abcd'])) // Wrote it down on notebook. Remember to add 
console.log(allConstruct("skateboard", ['bo','rd','ate','t','ska','sk','boar'])) // Look Above
console.log(allConstruct("enterapotentpot", ['a','p','ent','enter','ot','o','t'])) // Looke Above
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
])) // Yeah what he said

// ---------------------fib
//
// Write a function `fib(n)` that takes in a number as an argument. The function
// should return the n-th number of the Fibonacci sequenece.
//
// The 0th number of the sequence is 0.
// The 1st number of the sequence is 1.
//
// To generate the next number of sequence, we sum the previous two.
//
// m:       0,1,2,3,4,5,6,7,8,9, ---
// fib(n):  0,1,1,2,3,5,8,13,21,34, ---

const fibx = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++){
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }
    return table[n];
}

console.log(fibx(6)); //8
console.log(fibx(7)); //13
console.log(fibx(8)); //21
console.log(fibx(50)); //12586269025

// ---------------------gridTraveler
//
// Say that you are a traveler on a 2D grid. You begin in the top-left
// corner and your goal is to travel to the bottom-right corner.
// You may only move down or right.
//
// In how many ways can you travel to the goalon a grid with 
// dimensions m * n?
//
// Write a function `gridTraveler(m,n)` that calculates this.
//
const gridTraveler2 = (m, n) => {
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            const current = table[i][j];
            if(j + 1 <= n) table[i][j + 1] += current;
            if(i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n];

}

console.log(gridTraveler2(1, 1)); //1
console.log(gridTraveler2(2, 3)); //3
console.log(gridTraveler2(3, 2)); //3
console.log(gridTraveler2(3, 3)); //6
console.log(gridTraveler2(18, 18)); //2333606220