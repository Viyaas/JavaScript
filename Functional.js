const prepareTea = () => " Gree Tea ";

/**
 * Get given number of cups of tea.
 * param {number} numOfCups Number of required cups of tea.
 * return {Array<string>} Given amount of tea cups.
 **/
const getTea = numOfCup => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCup; cups += 1)
    {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups ;

}

const team4Tea = getTea(1000);

console.log(team4Tea);
