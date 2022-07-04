let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

console.log(result);
// this is the method used to find group of characters in above statement 

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";  
// let chewieRegex = /Aa*/; 

// the ( * ) used to find the group statement align with the same word
// let result = chewieQuote.match(chewieRegex);