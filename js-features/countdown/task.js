const timer = document.getElementById('timer');
let countdown = timer.textContent;
const timerInterval = setInterval(() => {
    countdown -= 1;
    timer.textContent = countdown;

    if (countdown <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
    }
}, 1000);

// Дополнительная задача #1
const wireTime = document.getElementById('wiretimer');
const timerSplit = wireTime.textContent.split(':');
let countdownExtended = timerSplit[0] * 60 * 60 + timerSplit[1] * 60 + timerSplit[2] * 1;

const wireTimerInterval = setInterval(() => {
    countdownExtended -= 1;
    wireTime.textContent = secToString(countdownExtended);

    if (countdownExtended <= 0) {
        alert('Всё взорвалось :(');
        clearInterval(wireTimerInterval);
    }
}, 1000);

function secToString(sec) {
    let hours = Math.floor(sec / (60 * 60)),
        minutes = Math.floor(sec / 60 % 60),
        seconds = Math.floor(sec % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}

// Дополнительная задача #2
const fileLink = document.getElementById('filelink');
const filetimer = document.getElementById('filetimer');
let countdownFile = filetimer.textContent;
const fileTimerInterval = setInterval(() => {
    countdownFile -= 1;
    filetimer.textContent = countdownFile;

    if (countdownFile <= 0) {
        fileLink.click();
        clearInterval(fileTimerInterval);
    }
}, 100);