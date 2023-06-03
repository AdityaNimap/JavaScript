/**
 * @param {string} s
 * @return {number}
 */
let s = "   fly me   to   the moon  "
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ")
    return arr[arr.length-1].length
};
