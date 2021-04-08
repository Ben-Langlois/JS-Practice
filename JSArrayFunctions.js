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

// let randomNums = [14, 25, 123, 53, 5, 234, 42, 63, 74, 2, 0];
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

// Reduce
// Sort