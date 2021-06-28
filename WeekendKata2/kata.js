Description:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}

Description:
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
Ex.
multiples(3, 5)
should return
[5, 10, 15]
*/
function multiples(m, n){
  const arr=[];
  for (let i=1;i<=m;i++){
  arr.push(n*i)
  }
  return arr
}

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  const result = []
  const lowerStr = s.toLowerCase()

  for(let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase()
    for(let j = 0; j < i; j++) {
      str += lowerStr[i]
    }
    result.push(str)
  }

  return result.join("-")
}


//https://www.codewars.com/kata/50654ddff44f800200000004

function multiply (a, b) {
  return a * b;
}

function timesCreator (a) {
  return function (b) {
      return multiply(a, b);
  }
}

timesTwo = timesCreator(2);
timesTwelve = timesCreator(12);

// Outputs: 4
console.log(timesTwo(2));

// Outputs: 24
console.log(timesTwelve(2));

Description:
Punky loves wearing different colored socks, but Henry can't stand it.
Given an array of different colored socks, return a pair depending on who was picking them out.
Example:
getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.
If there is no possible combination of socks, return an empty array.
*/
function getSocks(name, socks) {
 const set=[...new Set(socks)];
 if (name==='Punky') return set.length>1?[set[0],set[1]]:[];
 if (name==='Henry'){
 let sock = socks.filter(s => socks.filter(n => n === s).length > 1)[0];
    if (!sock) return [];
    return [sock, sock];
 };
}

Description:
While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.
So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.
If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".
If string contains 4 numbers but not consecutive it returns "not consecutive".
*/
function checkRoot(string){
  const arr=string.split(',').map(v=>v*1);
  if (arr.some(v=>isNaN(v)||v===0)||arr.length!==4) return 'incorrect input';
  const sum=arr.reduce((a,b)=>a*b,1);
  if (arr.map((v,i,arr)=>arr[i]+1===arr[i+1]).filter(v=>v===false).length>1) return 'not consecutive'
  return `${sum+1}, ${Math.sqrt(sum+1)}`
}

Task
misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

When you have finished the work, click "Run Tests" to see if your code is working properly.

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "";
}

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

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


The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

function generateHashtag(string) {
  if (string.trim() === '') return false;

  const stringWithCamelCase = string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}

Celsius to Fahrenheit
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

Formula:

°C x 9/5 + 32 = °F (°F - 32) x 5/9 = °C

Example:

37°C x 9/5 + 32 = 98.6°F 37°C = 98.6°F

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

Problem
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n.

function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}
powersOfTwo(0);  // [1]
powersOfTwo(1);  // [1, 2]
powersOfTwo(4);  // [1, 2, 4, 8, 16]

Prime number

//This will require an user input
const number = parseInt(prompt("Enter a + num: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime or a composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

Description:
Punky loves wearing different colored socks, but Henry can't stand it.
Given an array of different colored socks, return a pair depending on who was picking them out.
Example:
getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.
If there is no possible combination of socks, return an empty array.
*/
function getSocks(name, socks) {
 const set=[...new Set(socks)];
 if (name==='Punky') return set.length>1?[set[0],set[1]]:[];
 if (name==='Henry'){
 let sock = socks.filter(s => socks.filter(n => n === s).length > 1)[0];
    if (!sock) return [];
    return [sock, sock];
 };

 Description:
Julie is x years older than her brother, and she is also y times as old as him.
Given x and y calculate Julie's age using the function age(x, y).
For example:
Age(6, 3) // returns 9
Note also that x can be negative, and y can be a decimal.
Age(-15, 0.25) // returns 5
That is, Julie is 15 years younger and 0.25 times the age of her brother.
Do not concern yourself with the imperfections inherent in dividing by floating point numbers, as your answer will be rounded. Also, for the sake of simplicity, Julie is never the same age as her brother.
*/
function age(x, y){
    return x*y/(y-1)
}

// program to find the factors of an integer

// take input
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}

// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);

Is this a triangle?
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
  const sides = [a, b, c].sort();
  return ((sides[0] + sides[1]) > sides[2]);
}

Build a square

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

function squareDigits(num){
  let string = num.toString();  // turn number to a string
  let results = [];             // create an array to save the new values of the string
  for (let i = 0; i < string.length; i++){  // iterate through the string
      results[i] = string[i] * string[i];   // save the square of the number to the array 
  }
  return Number(results.join(''));    // turn the array into a string and then into a number
}

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  return arr.find((item) => arr.filter(el => el == item).length % 2)
}

Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.

The getDay() method is used to get the day of the week for the specified date according to local time, where 0 represents Sunday. 
The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    };
