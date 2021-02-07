// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(a) {
  return a.filter(x => typeof x === 'number');
}
console.log(filter_list([1, 'a', 'b', 0, 15]));

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n * m;
  }
}

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
  if (typeof x=='number') {
  
  return (x*50)+6;
  } else {
  return "Error";
  }
  }


  //You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

 // For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

 function repeats(arr){
  let i;
    let sum = 0;
    arr.sort((a, b) => {
      return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
      if (arr[i] !== arr[i + 1]) {
        sum += arr[i];
        i--;
      }
    }
    return sum;
  };

//   Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, 
// but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). 
// Looping all the way up to n, or n/2, will be too slow.

function isPrime(num){
  let result = true;
  if (num < 2){
    return false;
  } else if (num === 2) {
    return true;
  }
  if (num % 2 === 1){
    for (let i=2; i<=Math.ceil(Math.sqrt(num)); i++){
      if(num % i === 0){
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  return result;
}
