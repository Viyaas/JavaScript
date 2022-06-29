function mathWholeNum(myMin,myMax)
{

        return  Math.floor(Math.random() * (myMax  -  myMin +1 )+ myMin) ; 
// this function generates the whole number to random 

    }
console.log(mathWholeNum(5,20));