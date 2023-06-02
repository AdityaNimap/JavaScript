/**
 * @param {string[]} strs
 * @return {string}
 */
let strs = ["flower","flow","flight"]
var longestCommonPrefix = function(strs) {
    let i = 1;
    let prf = strs[0];
    while(i < strs.length){
        if(!strs[i].startsWith(prf)){
            prf = prf.slice(0, -1)
        }else{
            i++
        }
    }
    return prf
};
