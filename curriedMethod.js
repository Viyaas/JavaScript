function add(x) {
    return  y => z => x+y+z;
  
  }
  
  let curried = add(10)(20)(30);
  console.log(curried);

//   The arity of a function is the number of arguments it requires.
//  Currying a function means to convert a function of N arity into N functions of arity 1.
// In other words, it restructures a function so it takes one argument,
//  then returns another function that takes the next argument, and so on.