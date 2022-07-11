function House(bedroom) {
   this.bedroom = bedroom;
}

let myHouse = new House(4);

console.log(myHouse instanceof House);
console.log(myHouse);

// JavaScript gives a convenient way to verify this with the instanceof operator
// instanceof allows you to compare an object to a constructor, returning true or false
// based on whether or not that object was created with the constructor