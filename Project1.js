function palindrome(str) {
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);
       
    return alphanumericOnly.join(" ") === alphanumericOnly.reverse().join(" ");
}



console.log(palindrome("eye"));