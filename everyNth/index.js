var everyNth = function(str, n) {
    var length = str.length;
    var temp = "";
    for (var i = 0; i < str.length; i = i + n) {
        // var temp += str.charAt(i);
        temp += str.charAt(i);
    }
    return temp;
}
console.log(everyNth("Hello World", 3));