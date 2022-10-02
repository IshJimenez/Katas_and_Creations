// 1) If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;
function solve1() {
for(x = 0; x < 1000; x++){
    if(x % 3 === 0 || x % 5 === 0) {
        sum += x
    }
}
console.log(sum)
}
solve1()

//2) Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function sumFib(){
    let sum = 0;
    let fibArray = fib()

    for(let x = 0, n=fibArray.length; x<n; x++) {
        sum += fibArray[x]
        
        }
        console.log(sum)

    }

sumFib()

function fib(){
    let a = 1
    let b = 2
    let nextN = a + b
    let fibArray = []
    while(nextN < 4000000) {
        if(nextN % 2 === 0) {
            fibArray.push(nextN)
        }
        a = b
        b = nextN
        nextN = a + b
    }
    return fibArray
}

// 3) 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMulti(n){
    // Setup the state
    let incr = 2;
    let step = 2;
    let smallestNum = 2;
    // Loop through all the numbers until we arrive at the correct one
    // Number.MAX_SAFE_INTEGER 
    // represents the maximum safe integer in JavaScript
    while (smallestNum <= Number.MAX_SAFE_INTEGER) {
    // Starting from the step value
    for( let x = 2; x <= n; x++){
    // Checkingg to see if its divisible
    // (%) returns the remainder left over when one operand is divided by a second
    const isDivisible = smallestNum % x === 0;
    if (!isDivisible) {
        break;
    }
    // If its divisible, + the step to be the next 
    if ( x === incr) {
    step = smallestNum;
    // + the global increment by 1
    incr++
    }
    // Inspect to see if x is equal to the last digit
    if (x === n) {
        return smallestNum;

    }
    console.log(smallestNum)
    }
    smallestNum += step;
    }
}

smallestMulti(5)

// Return the result// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

function myFUnction(a){
    return a.slice(3);
}

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction (str){
return  str.slice(-3);
}


// Write a function that takes a string as argument
// Create an ojbect that has a proeprty with key 'key' and a value equal to the string
// Return the object 

function myFunction(a) {
    return { key : a };
 }

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

 function myFunction(a, b) {
   
    return {[a]:b}
 }

 // Write a function that takes two arrays (a and b) as arguments
 // Create an object that has properties with keys 'a' and corresponding values 'b'
 // Return the object

 function myFunction(a,b) {
    let app = {}
    let index = 0;
    for(let i of a){
        app[i] = b[index]
        index++
    }
    return app
 }


// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

 function myFunction(obj, key) {
    return obj[key]
  }