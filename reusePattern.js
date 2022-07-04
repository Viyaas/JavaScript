let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;  // 
let result = reRegex.test(repeatNum);

/*The substring matched by the group is saved to a temporary "variable", which can be accessed
within the same regex using a backslash and the number of the capture group (e.g. \1).
Capture groups are automatically numbered by the position of their opening parentheses
(left to right), starting at 1.
*/
console.log(result);


   