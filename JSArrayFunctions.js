// JSArrayFunctions.js 
const customers = [
    {
        'first': 'Ben',
        'last': 'Langlois',
        'age': 20,
        'start': 20190605,
        'end': null     // if null they are still customer
    },
    {
        'first': 'Bjork',
        'last': 'Johnson',
        'age': 26,
        'start': 20180319,
        'end': 20200101
    },
    {
        'first': 'Fender',
        'last': 'Jenderson',
        'age': 93,
        'start': 19921231,
        'end': null
    },
    {
        'first': 'Blingorg',
        'last': 'Macmlmore',
        'age': 6,
        'start': 20190605,
        'end': null
    },
    {
        'first': 'Aubrey',
        'last': 'Bogagegsgog',
        'age': 23,
        'start': 20191002,
        'end': 20200515
    },
    {
        'first': 'Sven',
        'last': 'Svenderson',
        'age': 34,
        'start': 20160713,
        'end': null
    }

]
const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomNums = [14, 25, 123, 53, 5, 234, 42, 63, 74, 2, 0];
let smallNums = [0, 1, 2, 3, 4, 5];
let arrOfObj = [{x: 0}, {x: 1}, {x: 2}, {x: 3}, {x: 4}, {x: 5}];

// Array Functions
// #region .map 
/* .map(function)
 - Loops through every element applying the callback function to its elements
 - Creates a new array (doesnt mutate og)
 */
// muliply every number in arrOfNums by 3
// ES6
//const map1 = arrOfNums.map(x => x * 3);

// OR
//const map1 = arrOfNums.map(function(x){return x * 3});

// What i think the function is made of
// const myMap = function(arr){
//     let result = [];
//     for(let x in arr){
//         result.push(arr[x] * 3);
//     }
//     return result;
// };

// ES6
// const myMap = (arr) => {
//     let result = [];
//     for(let x in arr){
//         result.push(arr[x] * 3);
//     }
//     return result;
// }

//console.log(myMap(arrOfNums));
//console.log(map1);                                //(10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// #endregion

// #region .filter
/* .filter(function)
 - loops through array and passes elements thru criteria (like if statement)
 - returns new array of elements that passed test
 - Creates a new array (doesnt mutate og)
*/ 

// return all numbers higher than 10
// const filterResult1 = randomNums.filter(e => e > 10);

// OR
// const filterResult2 = randomNums.filter(function(e){return e > 10});

// what i think it is
// const myFilter = (arr) => {
//     let result = [];                    // create new array
//     for(let x in arr){                  // loop through array
//         if(arr[x] > 10){                     // pass element thru test
//             result.push(arr[x]);        // if it passes push into result
//         }
//     }
//     return result;                      // return new array
// };

// console.log(myFilter(randomNums));          //(8) [14, 25, 123, 53, 234, 42, 63, 74]
// console.log(filterResult2);
// #endregion

// #region .reduce
/* .reduce(function)
 - executes a callback/reader function to each element of an array
 - mutates og array
 - not sure the point yet besides getting sum of all numbers
 - executes the callback function on each member of the calling array which 
   results in a single output value. 
 - The reduce method accepts two parameters: 1) The reducer function (callback), 2) 
   and an optional initialValue.
*/

// cycle through arr and add numbers together
//const filterCallback = (total, current) => total + current;

// cycle through array of object and add values together
//const filterCallBack = (total, current) => total + current.x; 

//console.log(smallNums.reduce(filterCallback));          // 15

// you can add a number after the callback to increase the sum (for some reason lmao) 
//console.log(smallNums.reduce(filterCallback, 1));       // 16

// // How I think its written (HAVeNT FINISHED)
// const myReduce = (arr) => {
//     for(let x in arr){

//     }
// }
// #endregion

// #region .sort 
/* .sort(function)
 - cycles through array and sorts depending on function
 - mutates og array by sorting elements in place
 - default sort is ascending (if no callback is provided)
*/
/* Syntax
arr.sort([compareFunction])

function compareFunction(a, b) {       
  return a - b;                     // sorts in ascending order
}
*/
// lets try without call back
// console.log(randomNums.sort());                 //[0, 123, 14, 2, 234, 25, 42, 5, 53, 63, 74]
// only really sorts first number of element 
// although [1, 12, 14, 13].sort() if would give 1, 12, 13, 14

// properly sorting by ascending
//console.log(randomNums.sort((a,b) => a - b));

// #endregion

// #region .some
/* array.some(function)
 - returns true/false depending on passed function
 - used to see if some of the values pass the criteria
*/

// const even = (e) => e % 2 === 0;                // returns true if its an even number

// console.log([1, 2, 3, 4, 5].some(even));        // true
// console.log([2, 4, 6, 8, 10].some(even));       // true
// console.log([1, 3, 5, 7, 9].some(even));        // false
// #endregion

// #region .every
/* array.all(function)
 - like some but only returns true if all elements of array meet criteria
*/ 

// using even callback from .some section
// console.log([1, 2, 3, 4, 5].every(even));       // false
// console.log([2, 4, 6, 8, 10].every(even));      // true
// console.log([2, 4, 6, 8, 9].every(even));       // false (because of [9])
// #endregion

// #region  Problems (prefferably combining the four)
// find all even numbers, halve them and return them in order

// const evenNumHalfinator = (arr) => {
//     return arr                          // With first sample:
//         .filter((e) => e % 2 == 0)      // [2, 4, 6, 8, 10]
//         .map((e) => e / 2)              // [1, 2, 3, 4, 5]
//         .sort((a, b) => a - b);         // same (since its already ordered)
// }

//console.log(halfinator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));                      // [1, 2, 3, 4, 5]
//console.log(evenNumHalfinator([32, 21, 13, 53, 50, 27, 100, 86, 99, 34]));     // (5) [16, 17, 25, 43, 50]
//console.log(evenNumHalfinator([95, 90, 11, 21, 18, 41, 48, 65, 30, 75]));      // (4) [9, 15, 24, 45]

// passing an array with only odd numbers
//console.log(evenNumHalfinator([1, 3, 5, 7, 9, 11]));                            // []

// find all roots(of numbers) which are whole numbers
// const findWholeRootinator = (arr) => {
//     return arr
//         .map((e) => Math.sqrt(e))                  // squares each number
//         .filter((e) => (e - Math.floor(e)) == 0)   // filters out the ones that arent whole/returns the ones that are whole
// }

//console.log(findWholeRootinator([5, 10, 25]));
//console.log(findWholeRootinator([2, 3, 6, 12, 14, 16, 23, 26, 30]));
// #endregion

// More array functions
// #region .find()
/* arr.find(callback)
 - like filter but only returns the first value it finds
*/
//console.log(randomNums.find((e => e > 100)));       // 123 3rd element
// #endregion

// #region .findIndex
/* arr.findIndex(callBack)
 - exactly like .find but returns index
*/
// console.log(randomNums.findIndex(e => e > 20));             // 1
// console.log(randomNums.findIndex(e => e < 20));             // 0
// #endregion

// #region .concat
/* arr.concat(anotherArr, annotherArr)
 - merges elements of array onto end of another
*/
//  let arr1 = [1, 2, 3];
//  let arr2 = [4, 5, 6];

// let result = arr1.concat(arr2);
// console.log(result);                    // [1, 2, 3, 4, 5, 6]

// can do multiple arrays
// let arr3 = [ 7, 8, 9];
// let result = arr1.concat(arr2, arr3);   
// console.log(result);                       // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// can use raw input 
//let result = arr1.concat(4);
//console.log(result);

// can mix data types obvi
// let result = arr1.concat('wowee');
// console.log(result);

// #endregion



// Working with arrays of strings

