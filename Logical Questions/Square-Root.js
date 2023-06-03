/**
 * @param {number} x
 * @return {number}
 */
let x = 8
var mySqrt = function(x) {
    for (let i = 0 ; i <= x+1 ; i++){
        if(i*i>x){
            return i-1
        }
    }
};
