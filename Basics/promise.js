let condition = false;
let p1 = new Promise((resolve, reject) => {
    if (condition) {
        function add(a, b) {
            let sum = a + b;
            resolve(sum);
        }
        add(5, 6);
    }
    else {
        const err = new Error("Something Wrong")
        reject(err)
    }
})
    .then(value => console.log(`Addtion in ${value}`))
    .catch (err => console.log(err.message));