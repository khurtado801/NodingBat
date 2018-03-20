var stringTimes=function(str, n) { 
let result = '';
    for (let i = 0; i < n; i++) {
        result = result + str;
    }
    return result;
}
console.log(stringTimes('hello', 5));
