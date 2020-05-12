// const getTimer = function () {
//     const timer = document.getElementById('timer');
//
//     if (timer.textContent > 0) {
//         timer.textContent--;
//     } else {
//         clearInterval(timerId);
//         return alert('Вы победили в конкурсе!');
//     }
// };
//
// let timerId = setInterval(getTimer, 1000);


const getTimer = function () {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


    if (seconds.textContent > 0 && seconds.textContent > 10) {
        seconds.textContent--;
    } else if (seconds.textContent == 10) {
        seconds.textContent = '0' + '9';
    } else if (seconds.textContent < 10 && seconds.textContent[1] > 0) {
        seconds.textContent = '0' + (seconds.textContent[1] -= 1);
    } else {
        seconds.textContent = '59';
    }

    if (seconds.textContent == '59') {
        if (minutes.textContent > 0 && minutes.textContent > 10) {
            minutes.textContent--;
        } else if (minutes.textContent == 10) {
            minutes.textContent = '0' + '9';
        } else if (minutes.textContent < 10 && minutes.textContent[1] > 0) {
            minutes.textContent = '0' + (minutes.textContent[1] -= 1);
        } else {
            minutes.textContent = '59';
        }
    }

    if (minutes.textContent == '59' && seconds.textContent == '59') {
        if (hours.textContent > 0 && hours.textContent > 10) {
            hours.textContent--;
        } else if (hours.textContent == 10) {
            hours.textContent = '0' + '9';
        } else if (hours.textContent < 10 && hours.textContent[1] > 0) {
            hours.textContent = '0' + (hours.textContent[1] -= 1);
        }
    }

    if (seconds.textContent == '00' && minutes.textContent == '00' && hours.textContent == '00') {
        clearInterval(timerId);
        return alert('Вы победили в конкурсе!');

    }
}

let timerId = setInterval(getTimer, 1000);