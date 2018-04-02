var stringYak = function(str){ 
    let result = "";
    for(let i=0;i<str.length;i++){
     if(i+2<str.length && str.charAt(i)=='y' && str.charAt(i+2)=='k'){
      i=i+2;
    }
    else{
     result = result + str.charAt(i);
    }
   }
   return result;
}
console.log(stringYak('yakybk'));