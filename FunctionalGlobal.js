// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr,bookName) {
   let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
  
  
}


function remove(arr,bookName) {
  let newArr = [...arr];
  
  if (newArr.indexOf(bookName) >= 0) {

    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newestBookList);

// Modifty the array of the element 
// change the some statement using functions 
// using add function to add some statement
// using delete function to delete the statements 
// altering the statements on Global variable 