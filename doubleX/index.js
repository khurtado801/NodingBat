var doubleX=function(str) { 
    str.toLowerCase();
    let x = str.indexOf('x');
    if(x == -1) {
        return false;
    } if (x >= str.length) {
        return false;
    }
    return str.substring(x + 1, x + 2) == "x";
}
console.log(doubleX('axxbb'));