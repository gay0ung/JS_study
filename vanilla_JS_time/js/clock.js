const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds()
    clockTitle.innerText = `${
        hours < 10 
        ? `0${hours}` 
        : hours}:${
        minutes < 10 
        ? `0${minutes}`
        : minutes}:${
        // 삼항 연산자
        seconds < 10 
        ? `0${seconds}` 
        : seconds}`
}

function init() {
    getTime()
    // setInterval (function, ms)s
    setInterval ( getTime , 1000 );
}

init()


