function Person(name)
{
    this.name = name;
}

function humanFraternity(human)
{
    if(human.constructor === Person)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

console.log(humanFraternity("viyas"));
console.log(Person());
// not Complete!