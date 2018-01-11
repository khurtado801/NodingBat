var in3050=function(a ,b) { 
    if((a < 30 || a > 50) || (b < 30 || b > 50)) {
        return false;
    } else if ((a >= 30 && a <= 40) && (b >= 30 && b <= 40) || (a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
        return true;
    } else
       return false;
}
console.log(in3050(31, 49));