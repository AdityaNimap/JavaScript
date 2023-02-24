let desireDate = new Date("feb 26, 2023 10:00:00").getTime();
setInterval(() => {
    let currentDate = new Date().getTime();
    let diff = desireDate - currentDate;
    
    let days = Math.floor(diff/(24*60*60*1000));
    let hrs = Math.floor((diff % (24*60*60*1000)) / (1000*60*60));
    let min = Math.floor((diff % (1000*60*60)) / (1000*60));
    let sec = Math.floor((diff % (1000*60)) / (1000));

    document.getElementById("time").innerHTML= `${days} d : ${hrs} hrs : ${min} min : ${sec} sec`

}, 1000)
