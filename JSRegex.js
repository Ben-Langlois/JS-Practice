/* Regex Practice
 - regex can be used to identify patterns in strings 
 - https://www.rexegg.com/regex-quickstart.html (color scheme is really bad but info is there)
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
 */

 /* Cheat Sheet
    Character classes
    .	any character except newline
    \w\d\s	word, digit, whitespace
    \W\D\S	not word, digit, whitespace
    [abc]	any of a, b, or c
    [^abc]	not a, b, or c
    [a-g]	character between a & g
    
    Anchors
    ^abc$	start / end of the string
    \b\B	word, not-word boundary
    
    Escaped characters
    \.\*\\	escaped special characters
    \t\n\r	tab, linefeed, carriage return

    Groups & Lookaround
    (abc)	capture group
    \1	backreference to group #1
    (?:abc)	non-capturing group
    (?=abc)	positive lookahead
    (?!abc)	negative lookahead
    
    Quantifiers & Alternation
    a*a+a?	0 or more, 1 or more, 0 or 1
    a{5}a{2,}	exactly five, two or more
    a{1,3}	between one & three
    a+?a{2,}?	match as few as possible
    ab|cd	match ab or cd
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
let reg = /[a-z]/g;
let reg1 = /fox/;
let reg2 = /horse/;
let reg3 = /\w/;            // the \w is for any letter (inverse is \W for things not letters)
let reg4 = /\d/;            // the \d is for any digit (inverse is \D for anything NOT a number)

// // test for 'fox'
// console.log(reg1.test(str));            // true
// // test for 'horse'
// console.log(reg2.test(str));            // false
// // test for any letter
// console.log(reg3.test(str));            // true
// // test for any number
// console.log(reg4.test(str));            // false

// The following are technically string fun--tions but still work with regex
/* match()
 - returns an array of values which match regex 
 - like test but instead returns values
*/
// vars
let fdoxg = /.o./g;

// using reg should return all 
//console.log(str.match(reg));                // returns every letter in str

let match = str.match(fdoxg);
console.log(match);                           // ["row", "fox", " ov", "dog"]
// using whitespace characters you can just get fox and dog
let match2 = str.match(/\s.o./g);
console.log(match2);                          // [" fox", " dog"]


// matchAll()

// replace()

// replaceAll()

// search()

// split()

// #endregion
