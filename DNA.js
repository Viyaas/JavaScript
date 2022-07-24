function pairElement(str) {
    var pairs = {
     A: "T",
     T: "A",
     C: "G",
     G: "C"
   };
    var arr = str.split("");
    return arr.map(x => [x, pairs[x]]);
 }
 console.log(pairElement("GCG"));

 // this program will calculate the DNA samples 
 // and return the output given through DNA samples