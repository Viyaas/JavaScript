let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; //  the 
let result = hello.replace(wsRegex,""); // Change this line

console.log(result);