var doubleX=function(str) { 
    let i = str.indexOf("x");
    if (i == -1) {
        return false;
    }
    if (i + 1 >= str.length) {
        return false;
    } else {
        return true;
    }
}
console.log(doubleX("sexxi"));