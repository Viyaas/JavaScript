let words = "Hello, hello , world";
let check = /Hello/gi;
let result = words.match(check);

console.log(result);

// this (/statement/ gi ) flag use to search or extract pattern more than once
// you can use the gi flag