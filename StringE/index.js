var stringE=function(str){ 
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'e') count++;
        // alternately: str.substring(i, i+1).equals("e")

    }

    if(count >= 1 && count <= 3){
      return true;
    } else
    return false;
}
console.log(stringE('Heelele'));