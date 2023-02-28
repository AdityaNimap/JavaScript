// function x(){
//     let a = 7 ;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x() {
//     for (var i = 0; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
//     console.log("JavaScript")
// }
// x();


// function x() {
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000)
//     }
//     console.log("JavaScript")
// }
// x();


// function x() {
//     for (var i = 0; i <= 5; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, x * 1000)
//         }
//         close(i);
//     }
//     console.log("JavaScript")
// }
// x();

function outer(){
    let a = 10 ;
    function inner(){
        console.log(a);
    }
    return inner;
}
let close = outer()();
