
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