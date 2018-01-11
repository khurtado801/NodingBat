var intMax=function(a, b, c) { 
    let currLargest = 0;
      if(a > b && a > c){
        currLargest = a;
        return a;
      } else if(b > a && b > c){
        currLargest = b;
        return b;
      } else if(c > a && c > b){
        currLargest = c;
        return c;
      }
}
console.log(intMax(1, 2, 4));