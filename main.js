// import { HolidayAPI } from 'holidayapi';
// const key = '611aa967-a0ee-4f61-8935-1a6929c62457'
// const holidayApi = new HolidayAPI({ key });
// holidayApi.holidays({
//     country: 'TH',
//     year: '2022',
// });
// console.log(holidayApi)




let countDownDate = new Date("Jan 24, 2022 00:00:00").getTime(); 
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
