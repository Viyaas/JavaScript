// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
   const newArray = [];

  this.forEach(function(x){
    if(callback(x) ==  true)
    {
      newArray.push(x);
    }
  })
   return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);