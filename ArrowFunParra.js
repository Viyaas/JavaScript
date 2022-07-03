const result = (...args) =>{
    return args.reduce((a,b) =>  a+b ,0);
}
console.log(result(5,5,2));

// this function is used to pass the value on arguments 
// using through args keyword 