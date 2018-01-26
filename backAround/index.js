var backAround = function(str){ 
    let strBack = str.substring(str.length - 1, str.length);
    return strBack + str + strBack;
}
console.log(backAround("cat"))