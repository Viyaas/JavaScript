function countUp(n)
{
    if(n<1)
    {
        return [];
    }
    else{
        const countArray = countUp(n-1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countUp(5));