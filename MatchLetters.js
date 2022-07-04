let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;  
let result = quoteSample.match(alphabetRegex);  

console.log(result);
// this method ( /[startLetter-endLetter]) has used to match all letters in above statement