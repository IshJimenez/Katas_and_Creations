// FizzBuzz is the "Hello World" of technical interview questions. 
// Your function should write the numbers from 1 to n with a twist; instead of any multiplier of 3, 
// you output Fizz, instead of multiplers of 5 you output Buzz, 
// and if they happen at the same time, you should use FizzBuzz. 
// The output of your function should be a mixed array of numbers and strings.

function fizzbuzz(n){
    for(let i = 0; i <= n; i++) {
        let result = "";
        if (i % 3 === 0  && i % 5 === 0) {
            console.log( result += "FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log(result += "Fizz");
        }
        else if (i % 5 === 0) {
            console.log(result += "Buzz");
        }
        else {
        console.log(i);
    }
}
}
fizzbuzz(30);

// Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600

function answer(voltage, current) {
    return voltage * current
}

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Examples
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720

function myFunction(a) {
    return (a - 2) * 180;
    }


// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically

function myFunction( arr ) {
    return arr.sort()
    }