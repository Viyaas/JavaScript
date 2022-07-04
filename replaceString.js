let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // this is replace the string using reGex pattern 
let replaceText = "$3 $2 $1"; // the dollar sign is used to change output no wise
let result = str.replace(fixRegex, replaceText);

console.log(result);