// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.

var endUp = function(str) {
    if (str.length <= 3) {
        let newStr = str.toUpperCase();
        return newStr;
    }
    var length = str.length;
    var frtStr = str.substring(0, length - 3);
    var subStr = str.substring(length - 3, length + 1);
    var subUpStr = subStr.toUpperCase();
    var newStr = frtStr.concat(subUpStr);
    //console.log(newStr);
    return newStr;
}
console.log(endUp("Hello World"));
//endUp("hello");