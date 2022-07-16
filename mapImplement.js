// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  
  this.forEach(a => newArray.push(callback(a)));
   return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 7;
});

console.log(new_s);