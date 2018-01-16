var notString=function(str) { 
    if(str.charAt(0) == 'n' && str.charAt(1) == 'o' && str.charAt(2) == 't') {
        return (str);
    } else {
        return ("not " + str);
    }
}
console.log(notString("candy"));