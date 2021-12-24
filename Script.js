let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime(); 
function newyear(){
    let now = new Date().getTime(); 
    gap = countDownDate - now; 

    let second = 1000  ;
    let minute = second * 60; 
    let hour = minute * 60; 
    let day = hour * 24; 

    var days = Math.floor(gap / (day));
    var hours = Math.floor((gap % (day)) / (hour));
    var minutes = Math.floor((gap % (hour)) / (minute));
    var seconds = Math.floor((gap % (minute)) / second);

    document.getElementById("day").innerHTML = days; 
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}
setInterval(newyear, 1000); 



function stars(){
    const count = 200; 
    const section = document.querySelector('section'); 
    var i = 0  ; 

    while (i < count){
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);

        const size = Math.random() * 4; 
        star.style.left = x + 'px'; 
        star.style.top = y + 'px';
        star.style.width  = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        const duration = Math.random() *2 ;
        star.style.animationDuration = 2 + duration + 's';
        star.style.animationDelay = 2+duration + 's';
        section.appendChild(star); 
        i++; 
    } 
}
stars();