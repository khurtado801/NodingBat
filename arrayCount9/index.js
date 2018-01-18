var arrayCount9 = function(nums){
    let nines = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == '9') {
            nines++;
        }
    }
    return nines;
}
console.log(arrayCount9([1,3,9,3,9]));