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