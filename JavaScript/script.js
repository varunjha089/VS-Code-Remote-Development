var removeDuplicates = function(nums) {
    for(i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
    // print(nums.length)
    // print(nums)
};

console.log(removeDuplicates([1,1,2]))
