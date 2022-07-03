function freezeObj(){
    const MATH_CONSTANTS = {
        PI : 3.14 
    }
     Object.freeze(MATH_CONSTANTS);   // this object freeze the above statements 

     try{
        MATH_CONSTANTS = 157;
     }
     catch(hi){
        console.log(hi);
     }
     return MATH_CONSTANTS.PI;    /// this statement not execute because can't modifty the above 
     // statement so, the out put will be 3.14

}
const PI = freezeObj();
console.log(freezeObj());