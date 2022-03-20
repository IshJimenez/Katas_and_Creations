// Purpose of this file is to add a random problem per day.

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
    let temp = arr.reverse()
    return temp
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
    let sorted = numbers.sort();
    if (sorted[0] === sorted[1]) {
      let answer = sorted[sorted.length -1]
      return answer
    }  else {
      return sorted[0]
    } 
    }

  // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
  // You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

  function removeChar(str){
    return str.slice(1, str.length-1)
   };

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
  if (l===w) return l*w
  return 2 * (l+w)
};

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
  switch (number) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10 / 19 / 21

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  let diffuse = name.split(" ");
  let answer= (diffuse[0].charAt(0) + "." + diffuse[1].charAt(0)).toUpperCase();
  return answer;

}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map(ele => -ele);
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(days) {
  let dayCost = 40;
  
  let discount = 0;
  if(days >= 3) discount += 20;
  if(days >= 7) discount += 30;
  
  return dayCost * days - discount;
}

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17

function century(year) {
  return Math.ceil(year / 100)
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a,x){
  return a.includes(x);
};

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
switch(current) {
  case 'green':
    return 'yellow';
  case 'yellow':
    return 'red';
  case 'red':
    return 'green';
}
}

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}

// Move all exclamation marks to the end of the sentence

// remove("Hi!") === "Hi!"

// remove("Hi! Hi!") === "Hi Hi!!"

// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"

// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"

// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"


function remove11() {
  // return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
  // Another method
  

let str = document.getElementById("demo1").innerHTML;
const output = function() {
  let res = str.replace(/!/g, "");
  return (res + "!".repeat(str.length - res.length));
}
document.getElementById("demo1").innerHTML = output();
}

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr3 = arr1.concat(arr2).reduce((x,y) => x + y);
}

// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);

// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.

function diffBig2(arr) {
  var largestNum = 0;
  var secondNum = 0
  for (i = 0; i < arr.length; i ++) {
      if (arr[i] >= largestNum) {
        secondNum = largestNum;
        largestNum = arr[i];
      }
      else if (arr[i] > secondNum) {
        secondNum = arr[i];
      }
    }
    
    return largestNum - secondNum;
  }

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

  function boolToWord( bool ){
    if (bool === true){
      return "Yes"
    } else {
      return "No"
    }
  }

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// function makeNegative(num) {
//   if (num > 0) {
//       let b = num - (2 * num);
//       return b
//   } else {
//     return num
//   }
// }

  function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }

//   Very simple, given a number, find its opposite.

//    Examples:
//    1: -1
//    14: -14
//    -34: 34

function opposite(number) {
  if (number > 0 ) {
    let b = number - (2 * number)
    return b
} else {
  let a = number * -1
  return a 
}
}

// Is n divisible by x and y?

function isDivisible(n, x, y) {
  if ( n % x == 0 && n % y == 0 ) {
    return true
  } else {
    return false 
  }
}

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

function sumStr(a,b) {
  let sum=""
  sum = Number(a)+Number(b)+'';
  return sum
}

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor (time / 2)
}

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 00 --> 198
///298734 --> 2597466

const nthEven = n => (n - 1) * 2

// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let filterGeese = birds.filter((word) => !geese.includes(word));
  
  return filterGeese
};

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0
  
  for (let i = 0; i < spl.length; i++) {
    
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest
}

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(int) {
  return Array(int).fill('+'.repeat(int)).join('\n')
}

// Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

// There are 64 squares on a chessboard.

// #Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

// Write a program that shows how many grains were on each square.

function square(number) {
  return Math.pow(2, number-1)
}

// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true 
  } else {
    return false 
  }
}

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
  return stringarray.map(Number)
}

// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  return position + roll * 2
}

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

function animal(obj){
  return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs."
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8
  } else {
    return number * 9
  }
}

// We need a function that can transform a number into a string.

// Examples:
// 123 --> "123"   ||   999 --> "999"

function numberToString(num) {
  return num.toString()
}

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bm = weight / Math.pow(height, 2)
  if (bm <= 18.5) {
    return "Underweight"
  } else if (bm <= 25.0) {
    return "Normal"
  } else if (bm <= 30.0) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nb_Petals) {
  if (nb_Petals % 6 == 1) {
    return "I love you"
  } else if (nb_Petals % 6 == 2) {
    return "a little"
  } else if (nb_Petals % 6 == 3) {
    return "a lot"
  } else if (nb_Petals % 6 == 4) {
    return "passionately"
  } else if (nb_Petals % 6 == 5) {
    return "madly"
  } else {
    return "not at all"
  }
}

// function howMuchILoveYou(nbPetals) {
//   let phrase = {    
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly"
//   }
//   return phrase[nbPetals%6]
// }

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
  return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
}

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy"
  } else if (old < 18){
     return "drink coke"
  } else if (old < 21){
     return "drink beer"
  } else {
     return "drink whisky"
  }
};

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (sonYearsOld*2));
}

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - a - b
}

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13

function getRealFloor(n) {
  if(n == 1 || n == 0){
    return 0
  } else if ( n <= 13 && n > 1){ 
    return n-1;
  } else if(n >= 14){
    return n - 2
  } else {
    return n
  }
  }

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  return i * 2
 }

//  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

 function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  let newDna = dna.replace(/T/g, "U")
  return newDna
}

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples:

// flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
// flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

const flip=(d, a)=>{
  if(d === 'R') return a.sort((a,b)=>a-b);
  if(d === 'L') return a.sort((a,b)=>b-a);
}

// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

function flyBy(lamps, drone){
  const i = drone.indexOf('T')
  const indx = lamps.length > i ? i+1 : i
  return 'o'.repeat(indx) + lamps.slice(indx)
}

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split("").reverse().join("");
}

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)


function remainder(a, b){
  if(b>a)
    return b%a;
  else
    return a%b;
}

// function remainder(a, b){
//   let min = Math.min(a,b);
//   let max = Math.max(a,b);

//   return min ? max % min : NaN;
// }

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheeps(arrayOfSheep) {
  let num = 0;
  
  for(let i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;
      
  return num;
}

function countSheeps(arrayOfSheep) {
  let counter = 0
  arrayOfSheep.forEach(sheep => {
      if(sheep) counter++
  })
  return counter
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

function getVolumeOfCuboid(l, w, h){
  return l * w * h
}


// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  var num1 = a[0];
  var num2 = b[0];
  for (var i = 1; i < 3; i++) {
    num1 = num1 * a[i];
    num2 = num2 * b[i];
  }
  
  if (num1 > num2) {
    return num1 - num2
  }
  return num2 - num1;
}

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  let a = h * 3600000
  let b = m * 60000
  let c = s * 1000
  return a + b + c
   }

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 % 2 == 1){
   return true;
}
if(flower1 % 2 == 1 && flower2 % 2 == 0){
  return true;
}
else{
   return false;
   }
}

// Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

// Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

// For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

// So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".

function calculateSpeed(distance, time) {
  let meters, seconds
  
  if(distance.includes('km')){
    meters = parseInt(distance) * 1000
  } else {
    meters = parseInt(distance)
  }

  if(time.includes('min')){
    seconds = parseInt(time) * 60
  } else {
    seconds = parseInt(time)
  }

  return `${Math.round((meters / seconds) * 2.23694)}mph`

}

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10){
    return 100
  } else if (exam > 75 && projects >= 5) {
    return 90
  } else if (exam > 50 && projects >= 2) {
    return 75
  } else { 
    return 0
  }
}

// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function without(string){
  let vowels = /[aeiou]+/g
  return string.replace(vowels, "")
}

// Implement a function which multiplies two numbers.

function multiply(a, b){
  return a * b
}


// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

// Task
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// Example
// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let first = numbers[0];
  let last = numbers[numbers.length-1];
  
  let arr = [];
  for(let i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}

// Instructions
// Output
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

let a = "code";
let b = "wa.rs";
let name = a + b;


// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
  let factorial = p - 1;
  for (i = factorial; i > 1; i--) {
    factorial = factorial * (i - 1)
  }
  let wilson = (factorial + 1) / (p * p);

  if (wilson % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade (s1, s2, s3) {
  let total = (s1 + s2 + s3) / 3
  if (total >= 90) {
   return "A"
  } else if (total >= 80) {
    return "B"
  } else if (total >= 70) {
    return "C"
  } else if (total >= 60) {
    return "D"
  } else {
    return "F"
  }
}

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const smash = words => words.join(' ');

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let y = x.filter(el => el == 'good').length;
  if ( y > 0 && y < 3){
  return 'Publish!';
  } else if (y > 2){
  return 'I smell a series!';
  }else {return 'Fail!';}
  };

//   Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!"
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!"
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!"
  } else if (p1 === p2) {
    return "Draw!"
  } else {
    return "Player 2 won!"
  }
};

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/((normPrice*discount)/100));
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
  var ret = [];
  for(var i = 0; i < x.length; i++){
    if(x[i] < 5){
      ret.push(0);
    } else {
      ret.push(1);
    }
  }
  return(ret.join(""))
}

// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

function symmetricPoint([a, b], [c, d]) {
  return  [c * 2 - a, d * 2 - b]
}

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  if (on + wait < cap){
  return 0;
  } else {
  return (on + wait) - cap;
  }
}


// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 4 or less.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

const cannonsReady = (gunners) => {
  for(let prop in gunners){
    if(gunners[prop] !== "aye")
      return "Shiver me timbers!";
  }
  
  return "Fire!";
}

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let sum = 0
  for( let i = 0; i < numbers.length; i++) {
      sum += numbers[i] **2
  }
  return sum
}

// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

// All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim.

// All inputs are integers.

// Example 1:
// radius = 1
// bottle_length = 10
// rim_length = 2

// volume = 16

function iceBrickVolume(radius, bottleLength, rimLength) {
  let brickL = bottleLength - rimLength;
  let brickD = radius*2;
  let brickH = radius; 
  
  return brickL * brickD * brickH;
  
  }

// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(s){
  return s.replace(/!*$/g,'');
}

// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return b.toString();
  }

//   A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
  if (bullets >= dragons * 2){
      return true
      } else {
    return false
 }
 }

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

 function guessif (str){
   return Number(str)
 }

//  The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//  For example:
 
//  1.08 --> 30

 function cockroachSpeed(s) {
  return Math.floor(s*27.7777777778);
}

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  let sum = 0;
 if (array.length != 0 ){
   for (let i in array) {
     sum += array[i]
   }
   return sum / array.length
   } else {
     return 0
   }
 }

//  Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

 function greetings(name){
   return `Hello, ${name} how are you doing today?`;
 }

//  There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//    number of pillars (≥ 1);
//    distance between pillars (10 - 30 meters);
//    width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

 function pillars(num_pill, dist, width) {
  let distance = dist * ((num_pill - 1) * 100)
  let pillars = num_pill - 2
  return distance + (width * pillars)
}

// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

function sixToast(num) {
  if (num < 6){
  return 6 - num
  } else 
  return num -6; 
}

// Now you have to write a function that takes an argument and returns the square of it.

function square(num){
  return num * num
}

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
  var circ = 4 * A;
  var radius = circ / (2 * Math.PI);
  var area = Math.pow(radius, 2);
  return Math.round(area*100)/100
}

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n){
  return n.toString().split('').reverse().map(Number)
}

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  return Array(n).fill(0).map((a, b) => n - b );
};

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  let pos = 0;
  let neg = 0;
  
  for (let i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ pos;
    else
      neg += input[i];
  }
  
  return [pos, neg];
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  if (n >= 10){
    return "Great, now move on to tricks"
  } else {
    return "Keep at it until you get it"
  }  
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog and NASM) if it is possible and false (0 in Prolog and NASM) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true
  } else {
    return false
  }
};

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
}

// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

let summation = function (num) {
  let sum = 0
  for(let i = 0; i <= num; i++) {
      sum += i
  }
  return sum
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g,'');
}


// Write a function that returns the number of seconds in the given minutes

function seconds(m) {
  return m * 60
}

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(obj){
  return obj.country;
}

// Create a function that takes two numbers as arguments and returns their sum.

function addition( a, b ) {
  return a + b
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return ++num;
}

// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
	return arr[0];
}

// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	return base * height /2
}

// Create a function that takes length and width and finds the perimeter of a rectangle.

function recPerimeter(w, l){
  return 2 * w + 2 * l
}

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers){
	return twoPointers * 2 + threePointers * 3;
}

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}

// Print numbers from 1 to 10

function answer(){
  for(let i=1; i<=10; i++){
      console.log(i)
  }
}


// Write a function that accepts an array of strings. Return the longest string.

function longestString1(arr) {
	var longest = ''; 
	for (var i = 0; i < arr.length; i++) { 
		if (arr[i].length > longest.length) { 
			longest = arr[i]; 
		}
	}
	return longest; 

