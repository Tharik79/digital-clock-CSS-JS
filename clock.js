
const clock= document.querySelector('.clock');
function DigitalClock(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    // console.log(hrs);
    let txt = 'PM';

    if(hrs >12){
        hrs = hrs-12;
        txt = "PM";
    } else if(hrs == 0){
        hrs = 12;
        txt = 'AM';
    }
    //to change time display to 2 digts below:
    hrs = hrs<10?'0'+hrs: hrs;
    mins = mins<10?'0'+mins: mins;
    secs = secs<10?'0'+secs: secs;

    clock.innerHTML=`${hrs}:  ${mins}:  ${secs}: ${txt}`;
// console.log(`${hrs}:  ${mins}:  ${secs} ${txt}`);
    
}
DigitalClock();

setInterval(DigitalClock, 1000);
