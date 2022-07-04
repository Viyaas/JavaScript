let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;  //  this method is return the whitespace in output
let result = sample.match(countWhiteSpace);

console.log(result);