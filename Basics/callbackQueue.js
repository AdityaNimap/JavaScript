console.log("start");
function callbackQueue1(){
    
    setTimeout(()=> console.log("timeout 1sec"),1000)
}
callbackQueue1();
function callbackQueue2(){
    setTimeout(()=> console.log("timeout 0.4 sec"),400)
}
setTimeout(()=>console.log("timeout 0.5 sec"),500)
callbackQueue2();
console.log("end")
