
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400


// function howManySec(hours) {
//	let sec = 60,
//	let min = 60
//	return hrs = min * sec					
//  }

console.log(howManySec(10))

function howManySeconds(hours) {
	const min = hours * 60
	const sec = min * 60
	return sec
}

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0) {
		return true
	} else {
		return false
	}
}

Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

function toCase(text) {
	return text.toLowerCase() + '-' + text.toUpperCase();
  }

  Coding challenge #33. Calculate the sum of numbers received in a comma delimited string

  println(sumC("4.1, 4.2, 4.2, 4, 4.5, 4, 4, 8, 4, 4.3"));

function sumC(x)
{
    var art = x.split(",");
    
    var sum = 0;
    
    for(var n of art)
    {
        sum += parseFloat(n);
    }
    
    return sum;
}

Very simple, given a number, find its opposite.

function opposite(num) {
  return num * -1;
}

Write a JavaScript function to check whether an 'input' is an array or not.

function isArray(input){
  if (toString.call(input) === "[object Array]")
  return true;
  return false;
}

Write a JavaScript function to clone an array.

 let arrayC = function(arr1) {
  return arr1.slice(0);
 }

 Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

 let last = function(arr, n) {
  if (arr == null) 
    return void 0;
  if (n == null)
  return arr[arr.length - 1];
  return arr.slice(Math.max(arr.length - n, 0))
 }

 Write a simple JavaScript program to join all elements of the following array into a string.

 Expected Output:
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

newColor = ["Red", "Green", "White", "Black"];
console.log(newColor.toString());
console.log(newColor.join());
console.log(newColor.join('+'));


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function myFunction(a, b) {
  if (a == b & a === b) {
  return true
  } else {
  return false
  }
}


// function myFunction(a, b) {
//   return a === b;
// }

// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array

function myFunction (a, b){
return a.filter(x => x !== b)
}

// Write a function that takes an array (a) as argument
// Return the number of elements in a

function myFunction(a) {
   
  return a.length;
}