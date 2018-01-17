// Given a string, we'll say that the front is the first 3 chars of the string.
// If the string length is less than 3, the front is whatever is there.
// Return a new string which is 3 copies of the front.

var front3=function(str) { 
    if(str.length < 3) {
        return (str+str+str);
    } else {
        let newStr = str.slice(0, 3);
        return (newStr+newStr+newStr);
    }
}
console.log(front3("ab"));