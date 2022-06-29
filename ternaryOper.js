function Operator(sum)    // check sum is positive or zero or negative using ternary operator
{
    return (sum===0)? " Zero " : (sum>0) ? " Positive " : " Negative ";
}
console.log(Operator(-10));
// console.log(Operator(10));
// console.log(Operator(0));