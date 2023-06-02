/**
 * @param {number} x
 * @return {number}
 */
 let x = -123
var reverse = function(x) {
    
    let temp = x
    let num = 0
    let rem = 0
    if(temp>0){
    while(temp>0){
        rem = temp%10
        num = num*10+rem
        temp = Math.floor(temp/10)
    }
    }
    else{
        temp-=2*temp
         while(temp>0){
        rem = temp%10
        num = num*10+rem
        temp = Math.floor(temp/10)
    }
    num-=2*num
    }
    if(num>2**31-1 || num<(-2)**31) return 0 
    return num;
};
