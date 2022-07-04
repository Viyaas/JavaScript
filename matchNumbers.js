let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[a-z0-9]/ig;  
let result = quoteSample.match(myRegex);  

console.log(result);

// this ( - ) also used to find the number in statement