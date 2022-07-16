function sliceArray(anim, beginSlice, endSlice) {
    
    return  anim.slice(beginSlice,endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim,1,3));


// The slice method in the sliceArray function to return part of the anim array,
//  given the provided beginSlice and endSlice indices.