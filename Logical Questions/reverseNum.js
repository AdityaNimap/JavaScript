console.log("2. Reverse Number")
function revNum(num) {
    let rev = 0;
console.log("Original Number " + num)
    while (num > 0) {

        let rem = num % 10;

        rev = rem + rev * 10;

        num = Math.floor(num / 10)

    }
    console.log("Reverse Number "+rev)
}
revNum(123456789)