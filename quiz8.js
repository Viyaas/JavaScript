function findElement(arr,fun)
{
    let num = 0;
    for(let i =0; i<arr.length;i++)
    {
        num = arr[i];
        if(fun(num))
        {
            return num ;
        }
    }
    // return num;
}

console.log(findElement([1,2,,3,4], num => num % 2 === 0));

// Find thee Keeper in array method 