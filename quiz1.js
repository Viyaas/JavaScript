function ReverseString(str)
{
    const splitStr = str.split("");
    const reversStr = splitStr.reverse();
    const joinStr = reversStr.join("");

    return joinStr;

}

console.log(ReverseString("ViyasS"));
// reverse the string 