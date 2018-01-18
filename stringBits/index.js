var stringBits = function (n) {
    let temp ="";
    for (let i = 0; i < n.length; i = i + 2) {
        temp += n.charAt(i);
    }
    return temp;
}
console.log(stringBits('Hello'));