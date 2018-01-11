var startOz=function(str) { 
    if(str.charAt(0) === 'o' && str.charAt(1) === 'z') {
        return (str.charAt(0) + str.charAt(1));
    } else if(str.charAt(0) === 'o') {
        return (str.charAt(0));
    } else if(str.charAt(1) === 'z') {
        return str.charAt(1);
    } else
        return false;
}
console.log(startOz("oxx"));