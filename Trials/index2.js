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