let sample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let check = /[aeiou]/gi;

let find  = sample.match(check);

console.log(find);

// this (/[]/gi) bracket used to find all the vowels in above statement print the statements