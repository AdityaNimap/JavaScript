/**
 * @param {number[]} nums
 * @return {number}
 */

letnums = [4,1,2,1,2]
var singleNumber = function (nums) {
  let arr = nums.sort((a, b) => a - b)

  for (let i = 0; i <= nums.length - 1; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }

};
