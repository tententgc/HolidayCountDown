




let countDownDate = new Date("Feb 14, 2022 00:00:00").getTime(); 
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

    document.getElementById("days").innerHTML = days; 
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}
setInterval(newyear, 1000); 
