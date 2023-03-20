console.log(`1. Find max1 and max2`)
let arr = [12, 35, 1, 10, 34, 1, 35];
let max1 = arr[0];
let max2 = arr[0];
arr.forEach((a) => {
    if (a > max1) {
        max2 = max1;
        max1 = a;
    }
    else if (a != max1 && a > max2) {
        max2 = a;
    }
})
console.log(`First maximum number is : ${max1}
Second maximum number is : ${max2}`)
