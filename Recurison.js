function rangeOfNumbers(startNum , endNum)
{
    return startNum === endNum ? [startNum] : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
    
    
console.log(rangeOfNumbers(3,5));

// [ 3, 4, 5 ] the output will be display in like this bez the 
// value point in startnum, to endnum 
// its called recursion 
