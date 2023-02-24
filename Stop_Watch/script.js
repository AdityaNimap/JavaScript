const time = document.querySelector('.time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;
console.log(interval);

function timer() {
    seconds++;
    
    let hrs = Math.floor(seconds/(60*60));
    let min = Math.floor((seconds - (hrs*60*60))/60);
    let sec = seconds % 60;
    
    if(sec<10) sec = '0'+ sec;
    if(min<10) min = '0'+ min;
    if(hrs<10) hrs = '0'+ hrs;

    time.innerHTML= `${hrs} : ${min} : ${sec}`;
}

start_btn.addEventListener('click', ()=>{

    if(interval)
    {
        return;
    }
    interval = setInterval(timer, 1000);
    console.log(interval);
});

stop_btn.addEventListener('click', ()=>{
    clearInterval(interval);
    interval = null;
})

reset_btn.addEventListener('click',()=>{
    
    clearInterval(interval);
    interval = null;
    seconds=0;
    time.innerHTML = '00 : 00 : 00';
})
