const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let displayTimer = document.querySelector('.displayTimer');
let int = 0;

start.addEventListener('click', ()=>{
    if(int!==0){
        clearInterval(int);
    }
    int = setInterval(displayTime,10);
});


pause.addEventListener('click', ()=>{
    clearInterval(int);
});


reset.addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    displayTimer.innerHTML = '00 : 00 : 00 : 000 ';
});


function displayTime(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;


 displayTimer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
