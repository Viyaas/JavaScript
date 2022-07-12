function countUp(n)
{
    if(n<1)
    {
        return [];
    }
    else{
        const countArray = countUp(n-1);   //  
        countArray.unshift(n);// output execute like this on unshift method value returned from the n of vlaue
        return countArray;
    }
}
console.log(countUp(10));

//[
//     10, 9, 8, 7, 6,   out put will be displayed like this bcz  
//     5, 4, 3, 2, 1
//  ]