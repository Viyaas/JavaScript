let glideMixin = function(obj)
{
  obj.glide  = function()
  {
      console.log("all are in the mid of sea");
  }
};



let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// For unrelated objects, it's better to use mixins.
//  A mixin allows other objects to use a collection of functions.