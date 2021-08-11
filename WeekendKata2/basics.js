
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