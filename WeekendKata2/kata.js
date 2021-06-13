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