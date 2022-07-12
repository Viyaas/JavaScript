function Person(name)
{
    this.name = name;
}

let human = new Person("Viyas");

console.log(human);
console.log(Person.prototype.isPrototypeOf(human));

// this concept has Object through prototype has invoke from the function
