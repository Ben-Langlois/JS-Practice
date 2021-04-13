/* Hard ones
 - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#intermediate-algorithm-scripting 


*/


/* Prompt
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
Requirements
 - replace the before with after
 - if the before has upper/lower first letter than make after also have upper/lower first letter 
*/
function myReplace(str, before, after) {
    //let firstChar = before.charAt(0);
    if (/^[A-Z]/.test(before)){
      after = after[0].toUpperCase() + after.substring(1);
    } else {
      after = after[0].toLowerCase() + after.substring(1);
    }
  
  
    return str.replace(before, after);
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

  /*
 https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
  */

 function pairElement(str) {
    let result = [];      // to store results
    let arr = str.split('');
    // to determine pair
    // loop through str
    for(let x = 0; x < arr.length; x++){
      switch(arr[x]){
        case "A": 
          result.push(["A", "T"]);
          break;
        case "T":
          result.push(["T", "A"]);
          break;
        case "C":
          result.push(["C", "G"]);
          break;
        case "G":
          result.push(["G", "C"]);
          break;
      }
    }
    return result;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement("CTCTA"));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
function uniteUnique(arr) {
    let concat = [];
    let i = 0;
  
    while(arguments[i]){  // will loop as long as theres something at [i]
      concat.push(...arguments[i]);
      i++;
    }
    
    let unique = [...new Set(concat)]; 
  
    console.log(unique);
    return unique;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1]);

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
function convertHTML(str) {
    let arr = str.split('');
    
    for(let e in arr){
      switch(arr[e]){
        case "&": 
          arr[e] = "&amp;";
          break;
        case "<":
          arr[e] = "&lt;";
          break;
        case ">":
          arr[e] = "&gt;"
          break;
        case '"':
          arr[e] = "&quot;";
          break;
        case "'":
          arr[e] = "&apos;";
          break;
      }
    }
  
    let result = arr.join('');
    return result;
  }
  
  convertHTML("Dolce & Gabbana");


  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
  function sumPrimes(num) {
    // helper function
    const isPrime = num => {
      for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
    }
      
      let total = 0;
      // loop through num
      for(let x = 0; x <= num; x++){
        if (isPrime(x)){      // at each number determine if prime
          total += x;         // true: add total
        }
      }
    
      return total;
    }
    
    console.log(sumPrimes(10));
    console.log(sumPrimes(17));
    console.log(sumPrimes(977));


    // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
    function dropElements(arr, func) {
      // while there is something in arr & the value in arr is > given
      while(arr.length > 0 && !func(arr[0])){
        arr.shift();    // shift out element   
      } 
        return arr;     // return final 
      }
      
      dropElements([1, 2, 3], function(n) {return n < 3; });
      dropElements([0, 1, 0, 1], function(n) {return n === 1; });
      dropElements([1, 2, 3, 7, 4], function(n) {return n > 3; });

    //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
    function steamrollArray(arr) {
      let result = [];        // to hold pushed elements

      // loop thru elements
      for(let x = 0; x < arr.length; x++){
        // if the element is an array (if it goes deeper)
        if(Array.isArray(arr[x])){
          result.push(...steamrollArray(arr[x]))      // calls itself onto the array containing elements for it to be processed by itself, and pushes result 
        }else { // if not array 
          result.push(arr[x]);      // pushes value
        }
    }
    return result;
  }

  console.log(steamrollArray([1, [2], [3, [[4]]]]));


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents   
  function binaryAgent(str) {
    let result = str.split(" ")                                       // split into array
                    .map(e => String.fromCharCode(parseInt(e, 2)))    // convert each element from binary to letter
                    .join('');                                        // join it all together
    console.log(result);
    return result;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");



// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true 
function truthCheck(collection, pre) {
  // My solution
  let arr = [...arguments[0]];    // create array with contents of given collection
  let count = 0;                  // start count

  // loop thru elements
  for(let e in arr){
    // if indexed object has property and its truthy
    if(arr[e].hasOwnProperty(pre) === true && Boolean(arr[e][pre])){        
        count++;    // increase count
      }
  }

  // if they dont all have a valid version of the prop return true
  if(count < arr.length){
    return false
  } 
  
  return true;
  

  /* their solution
    return collection.every(function(element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });

  */

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional 
function addTogether() {
  // create array with contents of args
  const [first, second] = [...arguments];   // apparently you can assign 'tags' to elements to refer to within scope
  // if first element isnt a number
  if(typeof first !== "number"){
    return undefined;     
  } 

  // function to add elements together
  const add = (second) => typeof second === "number" ? first + second : undefined;

  // if second exists/not null
  if(second !== undefined){   
    return add(second);       // use add to add numbers
  } else {
    return add;               // return function, not sure why, its not like it returns a number it just says function: add
  }
}

addTogether(2,3);
