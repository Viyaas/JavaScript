let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;  
let result = myRegex.test(myString);  

console.log(result);
// After passing the challenge experiment with myString and see how the grouping works