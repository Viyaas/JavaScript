function Duck(name)
{
    this.name = name;
    this.numLegs = 2;
}

let Birds = new Duck("Duck");
let ownProp = [];

for(let property in Birds)
{
    if(Birds.hasOwnProperty(property))
    {
        ownProp.push(property);
    }
}

console.log(Birds);
console.log(ownProp);