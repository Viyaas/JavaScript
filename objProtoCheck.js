function Person(name)
{
    this.name = name ;
}

Person.prototype.numEye = 2;

const human = new Person("viyas");

let ownProp = [];
let prototypeProp = [];

for(let property in human)
{
    if(human.hasOwnProperty(property))
    {
        ownProp.push(property);
    }
    else{
        prototypeProp.push(property);
    }
}

console.log(human);
console.log(ownProp);
console.log(prototypeProp);

// this program has check which property has belongs to properties 
// and return the properties through variable name 
