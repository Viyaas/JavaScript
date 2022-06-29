function mathRandom()
{
    let result = 0
    
    while(result===0)
    {
      result =  Math.random();
    }
    return result;
}

console.log(mathRandom());