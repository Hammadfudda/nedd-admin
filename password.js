var min = 0;
var sec = 0;
var mili = 0;

var displayMinute = document.getElementById("minute");
var displaySecond = document.getElementById("second");
var displayMiliSecond = document.getElementById("milisecond");
var startBtn = document.getElementById("startBtn");
var numberElement = document.getElementById("number");

function renderTimer() {
    displayMinute.innerHTML = min;
    displaySecond.innerHTML = sec;
    displayMiliSecond.innerHTML = mili;
}

function timer() {
    mili++;
    if (mili >= 10) {
        mili = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min == 5) {
                clearInterval(interval);
               alert("Time up");
               startBtn.disabled = false;

            }
        }
    }
    renderTimer();
}

var interval;

function startTimer() {
    interval = setInterval(function () {
        timer();
    }, 100);
    let random = Math.random().toString().slice(2, 8);
            localStorage.setItem("number", JSON.stringify((random)));
            numberElement.innerHTML = random;
            startBtn.disabled = true;
        }


renderTimer(); // Initial render to show the starting time
startTimer();
