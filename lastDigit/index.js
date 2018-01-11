var lastDigit=function(a ,b) { 
    let modA = a % 10;
    let modB = b % 10;
    
    if (modA == modB || modA == modC || modB == modC) {
        return true;
    } else
    return false;
}
console.log(lastDigit(7, 17));