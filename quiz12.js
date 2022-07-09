function bouncers(arr)
{
    let newArray = [];
    for(let i =0; i <arr.length; i++)
    {
        if(arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}
console.log(bouncers([7, false , "viyas", "", true]));

// Falsey Bouncer ?
// the program will not return the falsey value in above code...