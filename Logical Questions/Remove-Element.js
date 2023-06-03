/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let nums = [0,1,2,2,3,0,4,2]
let val = 2
var removeElement = function(nums, val) {
    let arr = nums.filter((item) => item !== val)
    return arr
};
