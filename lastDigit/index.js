var lastDigit=function(a ,b) { 
 if (a % 10 == b % 10) {
        return true;
    } else
    return false;
}
console.log(lastDigit(7, 17));