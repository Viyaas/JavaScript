const prepareGreenTea = () => " Green Tea!";

const prepareFilterCoffee = () => " Filter Coffee " ;

const getTea = (prepareTea,numCups) =>
/*
We can modify getTea to accept a function as a parameter to be able to change 
the type of tea it prepares. 
This makes getTea more flexible, and gives the programmer more control when client requests change.
*/
{
    const totalCups = [];

    for(let cup = 1 ; cup <= numCups;  cup += 1)
    {
        const teaCup = prepareTea();
        totalCups.push(teaCup);
    }
    return totalCups;
}

const team4Coffee  =  getTea(prepareFilterCoffee,2);
const team4Tea =   getTea(prepareGreenTea,5);

console.log(team4Coffee,team4Tea);