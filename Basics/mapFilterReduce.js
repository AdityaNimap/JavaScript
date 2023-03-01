const obj = [
    { firstname: "Aditya", lastname: "Titame", age: 22 },
    { firstname: "Pratiksha", lastname: "Malunjkar", age: 21 },
    { firstname: "Vaishnavi", lastname: "Nehe", age: 22 },
    { firstname: "Ganesh", lastname: "Khemnar", age: 21 },
    { firstname: "Tejas", lastname: "Kale", age: 20 },
    { firstname: "Pradnya", lastname: "Rode", age: 22 },
]

// List of fullnames 
const outputMap = obj.map(x => `${x.firstname} ${x.lastname}`);
console.log(outputMap)

// Calculate how many persons with the same age

const outputReduce = obj.reduce((acc, cur) => {
    if (acc[cur.age]) {
        acc[cur.age] = ++acc[cur.age]
    }
    else {
        acc[cur.age] = 1;
    }
    return acc;
}, {})
console.log(outputReduce);

// Display name of the person whose age is less than 22

const outputFilter = obj.filter(x => x.age < 22).map(x => x.firstname);
console.log(outputFilter)