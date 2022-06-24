const cookie = document.getElementById('cookie'),
      clickCounter = document.getElementById('clicker__counter'),
      clickSpeed = document.getElementById('clicker__speed');
let timerStart = new Date;

cookie.onclick = function () {
    clickCounter.textContent = parseInt(clickCounter.textContent) + 1;
    cookie.width = cookie.width != 200 ? 200 : 180;

    const timerNext = new Date;
    let speed = timerNext.getTime() - timerStart.getTime();
    clickSpeed.textContent = (1 / (speed / 1000)).toFixed(2);
    timerStart = new Date;
}