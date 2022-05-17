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