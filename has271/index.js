var has271 = function(nums){ 
   for (let i = 0; i < nums.length-2; i++) {
       let val = nums[i];
       if (nums[i+1] == (val+5) && Math.abs(nums[1+2] - (val-1)) <= 2) {
           return true;
       }
   }
   return false
}

console.log(has271());