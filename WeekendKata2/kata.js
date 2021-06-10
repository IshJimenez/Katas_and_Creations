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