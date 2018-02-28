var noTriples=function(nums) { 
    for(let i = 0; i < nums.length; i++) {
        if ((nums[i] == nums[i + 1]) && (nums[i + 1] == nums[i + 2])) {
            return false;
        } else {
            return true
        }
    }
    // for(let i = 0; i < nums.length; i ++) {
    //     for(let j = 0; j < i; j++) {
    //         if((nums[j] == nums[j + 1]) && (nums[j + 1] == nums[j + 2])) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    // }
}
console.log(noTriples([2,2,2,2,1]))