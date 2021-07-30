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

    Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 15, 61, 77.

    var side1 = 15; 
    var side2 = 61; 
    var side3 = 77; 
    var s = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log(area);

Write a JavaScript function that reverse a number.
    Sample Data and output:
    Example x = 32243;
    Expected Output: 34223

function reverse_a_number(n){
	    n = n + "";
	    return n.split("").reverse().join("");
    }
    console.log(reverse_a_number(32243));

Write a JavaScript program to calculate number of days left until next Christmas.

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days till Christmas!");

Declaring a JavaScript date : In JavaScript Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.

The getFullYear() method is used to get the year of the specified date according to local time. The value returned by the method is an absolute number. For dates between the years 1000 and 9999, getFullYear() returns a four-digit number, for example, 1985.

The getMonth() method is used to get the month in the specified date according to local time, as a zero-based value. The value returned by getMonth() is an integer between 0 and 11. 0 corresponds to January, 1 to February, and so on.

The getDate() method is used to get the day of the month for the specified date according to local time. The value returned by getDate() is an integer between 1 and 31.

The getTime() method is used to get the numeric value corresponding to the time for the specified date according to universal time.

The Math.ceil() function is used to get the smallest integer greater than or equal to a given number.

Write a JavaScript function to convert an amount to coins.

Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

Write a JavaScript function that generates a string id (specified length) of random characters.

Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

Write a JavaScript function to find the first not repeated character.

Sample arguments : 'abacddbec'
Expected output : 'e'

function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var ctr = 0;
 
  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;
 
    for (var y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar('abacddbec'));

Write a JavaScript program to pass a 'JavaScript function' as parameter.

function addSuperH(id, refreshCallback)
{
    refreshCallback();  
}

function refreshSuperHList() {
    console.log('I see you hero');
}

addSuperH(1, refreshSuperHList);

Write a JavaScript function to get the number of occurrences of each letter in specified string.

function Char_Counts(str1) {
  var uchars = {};
  str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
  return uchars;
  }
  console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));


Write a JavaScript function which accepts an argument and returns the type.

Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

Write a JavaScript function that returns array elements larger than a number.

function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);

Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.

Example: toFahrenheit(0) should return 32.

function toFahrenheit(celsius) {
  return 1.8 * celsius + 32;
}

Write a function firstChar, which returns the first character that is not a space when a string is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.

function firstChar(text) {
  let trimmedText = text.trim();
  return trimmedText.charAt(0);
}

rite a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

function midrange(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  return (min + max) / 2;
}

Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

var ar = mergeLeft(ar1, ar2);
println(ar);

function mergeLeft(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }

    return ar;
}

Calculate the sum of first 100 prime numbers

var n = 10;
println("Sum of first ", n, " primes is ", sumPrimes(10));

function sumPrimes(n)
{
    var foundPrimes = 0;
    var i = 2;
    var sum = 0;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            foundPrimes++;
            sum += i;
        }
        
        i++;
    }
    
    return sum;
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}

Rotate an array to the right 1 position

var ar = [1, 2, 3];
rotateRight(ar);
println(ar);

function rotateRight(ar)
{
    var last = ar.pop();
    ar.unshift(last);
}

Reverse an array

var ar = [1, 2, 3];
var ar2 = reverseArray(ar);
println(ar2);

function reverseArray(ar)
{
    var ar2 = [];
    
    for(var i = ar.length - 1; i >= 0; i--)
    {
        ar2.push(ar[i]);
    }
    
    return ar2;
}

Calculate the average of the numbers in an array of numbers

function averageArray(ar)
{
    var n = ar.length;
    var sum = 0;
    
    for(var i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

println("Average: ", avg);

Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
    var ar2 = [];
    
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];
        
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

println(ar2);

Find the maximum number in an array of numbers

function findMax(ar)
{
    var max = ar[0];
    
    for(var i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }
    
    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
println("Max: ", max);

Print the first 10 Fibonacci numbers without recursion

var f0 = 0;
println(f0);

var f1 = 1;
println(f1);

for(var i = 2; i < 10; i++)
{
    var fi = f1 + f0;
    println(fi);
    
    f0 = f1;
    f1 = fi;
}

Create a function that will return a Boolean specifying if a number is prime

function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

println(2, " is prime? ", isPrime(2));
println(3, " is prime? ", isPrime(3));
println(4, " is prime? ", isPrime(4));
println(5, " is prime? ", isPrime(5));
println(9, " is prime? ", isPrime(9));

Calculate the sum of digits of a positive integer number

function sumDigits(n)
{
    var s = n.toString();
    var sum = 0;
    
    for(var char of s)
    {
        var digit = parseInt(char);
        sum += digit;
    }
    
    return sum;
}

var sum = sumDigits(1235231);
println("Sum: ", sum);