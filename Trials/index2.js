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