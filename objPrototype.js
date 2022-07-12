 function Person(name,job,DOB)
 {
    this.name = name;
    this.job = job;
    this.DOB = DOB;
 }

Person.prototype.calculateAge = function()
{
    console.log('The age is : '+(2022 - this.DOB));
}

const person1 = new Person("Viyas","Developer","2001");  // create a object and define Person 1
person1.calculateAge();
console.log(person1);      // call person 1

const person2 = new Person("Krishna","Full Stack Developer",1980); // create a object and define Person 2
person2.calculateAge();
console.log(person2);   

// A better way is to use the prototype of Person. 
// Properties in the prototype are shared among ALL instances of Person. 
// Here's how to add a person age in to the Persons prototype: