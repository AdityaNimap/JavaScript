/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1,3,5,6], target = 2
var searchInsert = function(nums, target) {
    for(let i = 0 ; i < nums.length ; i++){
    if(target<nums[0]){
        return 0
    }
    else if(nums[i]==target){
        return i
    }
    else if(target>nums[i] && target<nums[i+1]){
        return i+1
    }
    else if(i === nums.length-1){
        return nums.length
    }
}
};
