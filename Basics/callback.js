function calculateArea(callback){
    let r = callback(4);
    return Math.PI * r * r;
}
let area = calculateArea(radius);
console.log(area);

function radius(dia){
 return dia /2 ;
}