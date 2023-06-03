/**
 * @param {number[]} digits
 * @return {number[]}
 */
let digits = [4,3,2,1]
var plusOne = function(digits) {
    let num = BigInt(digits.join(""))+BigInt(1)
    return num.toString().split('')
};
