function sumAll(arr)
{
    let maxi = Math.max(arr[0],arr[1]);
    let mini = Math.min(arr[0],arr[1]);

    let sum = 0;
    for(let i = mini; i <= maxi; i++)
    {
        sum += i;
    }
    return sum ;
} 

console.log(sumAll([1,5]));
