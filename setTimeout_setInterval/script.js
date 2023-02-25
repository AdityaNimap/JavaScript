const timeout_btn = document.getElementById('setTime')
const interval_btn = document.getElementById('setIntr')

timeout_btn.addEventListener('click',()=>{
    setTimeout(()=>{
        document.getElementById('setTimePara').innerText=`It run only once after 2sec`
    },2000)
})

let countValue = 0 ;
let interval = null;
const count = ()=>{
    countValue++;
    document.getElementById('setIntrPara').innerHTML = `This will run after every 1 sec : ${countValue}`
}

interval_btn.addEventListener('click',()=>{
    if(interval)
    {
        return;
    }
    interval = setInterval(count , 1000)
});