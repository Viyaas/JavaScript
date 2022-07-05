function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = [' learning ', ...fragment , ' is ', ' fun ']; // Change this line
    return sentence;
  }
  // Using spread syntax, we have just achieved an operation that would have been more complex
  // and more verbose had we used traditional methods.



  console.log(spreadOut());