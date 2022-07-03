let myString = " hi i am viyas";
let find = /viyas/;  //  this is regular expressionn to find the word in myString
let result = find.test(myString); // this method return true or false
console.log(result);

/* and same thing we can search multiple string ,
using the OR operator to find the problems like above the code
 let myString = " hi i am viyas";
 let find = /viyas|fried|life/;   (performed in OR Operator)
 let result = find.test(myString);
 console.log(result);
  

*/