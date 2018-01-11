// Given a string, if the string "del" appears starting at index 1, return a string 
// where that "del" has been deleted. Otherwise, return the string unchanged.

var delDel = function(str) {
    if (str.charAt(1) === 'd'){
    let result = str.replace(/del/g, "");
    return result;
    } else
return str;
}
console.log(delDel('abcdel'));