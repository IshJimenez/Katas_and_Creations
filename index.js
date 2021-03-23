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

// 1: Function product() should return the product of any 2 given numbers
function product(x, y) {
  return x * y;
}

// 2: Function isEven() should return true/false depending whether a given number is even
var isEven = function(number) {

if(number % 2 === 0){ return true; }else{ return false; }

};

isEven();

// 3: Function maxOfTwoNumbers() should return the greater of 2 given numbers
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else {
      return b;
    }
}

// 4: Function maxOfThreeNumbers() should return the greater of 3 given numbers
function maxOfThreeNumbers(a, b, c) {
   {
  max_val = 0;
  if (a > b)
  {
    max_val = a;
  } else
  {
    max_val = b;
  }
  if (c > max_val) 
  {
    max_val = c;
  }
  return max_val;
}
}

// 5: Function sumArray() should return the sum of an array of numbers
function sumArray(numbers) {
     return numbers.reduce((a, b) => a + b, 0);
};
 


// 6: Function maxOfArray() should return the greatest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}



// 7: Function longestString() should return the longest string in an array
function longestString(strings) {
 var answer = strings[0];
  for (i = 0; i < strings.length; i++) {
    if (strings[i].length > answer.length) {
      answer = strings[i];
    }
  }
  return answer;
}

// 8: Function doesWordExist() should return whether a word is in the array
function doesWordExist(wordsArr, word) {
    if (wordsArr.length === 0) return null;
  return wordsArr.includes(word);
}


// 9: Function findUnique() should return the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  return wordsArr.filter( (elm, idx, arr) => arr.indexOf(elm) == idx );  
}
// 10: Function getFullName() should return the string representing person's full name based on the provided object with first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
}

// 11: Function maxTwoDimArray() should return the greatest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return Math.max(...matrix.map(e => Array.isArray(e) ? maxTwoDimArray(e) : e));
}

// How many arguments 7kyu
//args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

let args_count = (...args) => [...args].length;

// 7kyu - Next Prime

// I don't think we have this specific prime kata on codewars, yet.
// It's really simple:
// Get the next prime number!
// You will get a number n (n>=0) and your task is to find the next prime number.
// e.g: nextPrime(5)=>7 || nextPrime(12)=>13

function isPrime(n) {
  if(n === 2) { return true; }
  if(n < 2 || n % 2 === 0) { return false; }
  for(let i = 3; i <= ~~Math.sqrt(n); i+=2) {
    if(n % i === 0)
      return false;
  }
  return true;
}

function nextPrime(n){
  n++;
  while(!isPrime(n)) n++;
  return n;



import { React, useState } from "react";

function Cal() {
  const [counterz, addSub] = useState(0)
  
  console.log(useState(0))
  
      return (
          <div>
              <h1 className = "counter">
              {counterz}
              </h1>
              <button className="increment" onClick={() => addSub(counterz + 1)}>
                  increment
              </button>
              <button className="decrement" onClick={() => addSub(counterz - 1)}>
                  decrement
              </button>
          </div>
      );
  }
  
  export default Cal

  Mexican Wave
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
 function wave(str){
  let result = [];
  
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  
  return result;
}

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(str){
  //create a var to hold string value that IGNORES case
  let word = str.toLowerCase();
  //create a var to hold the finished string to return after it's looped through 
  let special = '';
  //loop through all letters in string
  for (var z=0; z < word.length; z++) {
  //check for any characters that repeat  
  if (word.lastIndexOf(word[z]) === word.indexOf(word[z])) {
  //for each character that never dupes, place (  
    special += '(';
    } else 
//for each character that IS a dupe, place )      
    special += ')';
  }
//return the full string value where '(' are non duped and all')' are duped  
  return special;
  }

  Finding Nemo
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"
Notes
! , ? . are always separated from the last word.
Nemo will always look like Nemo, and not NeMo or other capital variations.
Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
If there are multiple Nemo's in the sentence, only return for the first one.

findNemo = sentence => {
	nemoLoc = sentence.split(" ").indexOf("Nemo")+1
	return nemoLoc ? `I found Nemo at ${nemoLoc}!` : "I can't find Nemo :("
									
}

Write a function that removes any non-letters from a string, returning a well-known film title.

function lettersOnly(str) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < alpha.length; j++) {
      if (str[i] === alpha[j] || str[i] === alpha[j].toUpperCase()) {
        temp += str[i];
      }
    }
  }
  str = temp;``
  return str;
}

function lettersOnly(str) {
	return str.match(/[A-Z]|[a-z]/g).join('');
}

Sort Numbers in Descending Order
Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

Examples
sortDescending(123) ➞ 321

sortDescending(1254859723) ➞ 9875543221

sortDescending(73065) ➞ 76530

function sortDescending(num) {
	return parseInt(String(num).split('').sort().reverse().join(''))
}



swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log(swapcase('AaBbc'));

Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  

 return str.split('').filter(a => a == letter).length
}
Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

Input Format

Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Constraints

Output Format

The function must return the value of .

Sample Input 0

4
Sample Output 0

24
Explanation 0

We return the value of .

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

Description:
We have a matrix of integers with m rows and n columns.
source: imgur.com
We want to calculate the total sum for the matrix:
source: imgur.com
As you can see, the name "alternating sum" of the title is due to the sign of the terms that changes from one term to its contiguous one and so on.
Let's see an example:
matrix = [[1, 2, 3], [-3, -2, 1], [3, - 1, 2]]
total_sum = (1 - 2 + 3) + [-(-3) + (-2) - 1] + [3 - (-1) + 2] = 2 + 0 + 6 = 8
You may be given matrixes with their dimensions between these values:10 < m < 300 and 10 < n < 300.
More example cases in the Example Test Cases. Enjoy it!!
*/
function scoreMatrix(matrix) {
    let score=0;
    matrix.map((e,j)=>{
    if (j%2===0){
      return e.map((v,i)=>i%2===0?score+=v:score-=v)
    } else {
       return e.map((v,i)=>i%2!==0?score+=v:score-=v)
    }}) 
    return score;
}

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers){
  const arr = numbers.split(" ").map(item => Number(item)).sort((a,b) => b - a)
  return String(arr[0] + " " + String(arr[arr.length - 1]))
}

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.

function encryptThis(text) {
  let strArr = text.split(' ');
  let output = [];
  
  strArr.forEach(str => {
    if (str.length === 1) {
      output.push(str.codeAt(0));
    } 
    else {
      let tempStr = str.split('');
      tempStr[0] = str.codeAt(0);
      tempStr[1] = str[str.length - 1];
      tempStr[str.length - 1] = str[1];
      output.push(tempStr.join(''));
    }
  });
  
  return output.join(' ');
}

Convert Age to Days
Create a function that takes the age and return the age in days.
const calcAge = age => age * 365;

Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.

const triArea = (base, height) => (base * height) / 2;

Return the First Element in an Array
Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
Notes
The first element in an array always has an index of 0.

function getFirstValue(arr) {
	return arr[0];
}

cubes(3) ➞ 27

cubes(5) ➞ 125

cubes(10) ➞ 1000

function cubes(a) {
	return a ** 3
}

Golf Code
In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return names[0] 
} else if (strokes <= par - 2) {
return names[1] 
} else if (strokes == par - 1) {
return names[2] 
} else if (strokes == par) {
return names[3] 
} else if (strokes == par + 1) {
return names[4] 
} else if (strokes == par + 2) {
return names[5] 
} else if (strokes >= par + 3 ) {
return names[6] 
}

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
Basketball Points
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
function points(twoPointers, threePointers){
	return twoPointers * 2 + threePointers * 3;
}