function mutation(arr)
{
    let a = arr[1].toLowerCase();
    let b = arr[0].toLowerCase();

    for(let i =0; i < a.length; i++)
    {
        if(b.indexOf(a[i] < 0))
        {
            return false;
        }
        return true;
    }
}

console.log(mutation(["Viyas","vija"]));

// mutation ?
// in this program will return the  true statement  above strings are 
// or otherwise it will return false