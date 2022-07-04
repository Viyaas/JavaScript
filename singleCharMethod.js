let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou]/gi; 
let result = quoteSample.match(myRegex);

console.log(result);

// this ( /[^]/ig) method to mentioned characters are not allowed and not a numbers