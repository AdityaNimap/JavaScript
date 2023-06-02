/**
 * @param {number[]} height
 * @return {number}
 */
 let height = [1,8,6,2,5,4,8,3,7]
var maxArea = function(height) {
    if(height.length<3){
        if(height[0]>height[1]) return height[1]
        else return height[0]
    }
    let max1 = height[0] ;
    let max2 = height[0] ;
    let count = 0
    for(let i = 0 ; i<height.length ; i++){
        if(height[i]>max1){
            max2 = max1;
            max1 = height[i]
        }
        else if(height[i]>max2 && height[i]!==max1){
            max2=height[i]
        }
    }
    let arr =[];
    arr.push(Math.abs(height.indexOf(max1)-height.indexOf(max2)))
    arr.push(Math.abs(height.lastIndexOf(max1)-height.lastIndexOf(max2)))
    arr.push(Math.abs(height.lastIndexOf(max1)-height.indexOf(max2)))
    arr.push(Math.abs(height.indexOf(max1)-height.lastIndexOf(max2)))
    arr.push(Math.abs(height.indexOf(max1)-height.lastIndexOf(max1)))
    arr.push(Math.abs(height.indexOf(max2)-height.lastIndexOf(max2)))

    let maxDiff = 0
    for(let i= 0 ; i < arr.length ; i++){
        if(arr[i]>maxDiff){
            maxDiff=arr[i]
        }
    }
    return max2 * maxDiff
};
