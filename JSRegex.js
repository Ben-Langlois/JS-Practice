/* Regex Practice
 - regex can be used to identify patterns in strings 
 - https://www.rexegg.com/regex-quickstart.html (color scheme is really bad but info is there)
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
 */

// #region functions
/* exec()
 - searches for a match in a specified string
 - returns array or null
*/

/* test()
 - searches for a match between regex and string
 - returns true or false
*/ 
let str = "A quick brown fox jumps over the lazy dog";
let reg1 = /fox/;
let reg2 = /horse/;
let reg3 = /\w/;            // the \w is for any letter (inverse is \W for things not letters)
let reg4 = /\d/;            // the \d is for any digit (inverse is \D for anything NOT a number)

// test for 'fox'
console.log(reg1.test(str));            // true
// test for 'horse'
console.log(reg2.test(str));            // false
// test for any letter
console.log(reg3.test(str));            // true
// test for any number
console.log(reg4.test(str));            // false

// The following are technically string functions but still work with regex
/* match()
 - returns an array of values which match regex 
*/


// matchAll()

// replace()

// replaceAll()

// search()

// split()

// #endregion
