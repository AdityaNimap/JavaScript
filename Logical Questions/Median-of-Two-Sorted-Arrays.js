/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let nums1 = [1,2]
let nums2 = [3,4]
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort(function(a,b){ 
    return a - b})
    if(arr.length%2===0){
      return (arr[arr.length/2] + arr[arr.length/2 - 1])/2
    }
    else
    return arr[Math.ceil(arr.length/2)-1]
};
