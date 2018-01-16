var makes10=function(a ,b) { 
    if((a == 10 || b == 10) || ( a + b == 10)) {
        return true;
    } else {
        return false;
    }
}
console.log(makes10(10, 9));