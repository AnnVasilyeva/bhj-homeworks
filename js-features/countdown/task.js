const getTimer = function () {
    const timer = document.getElementById('timer');

    if (timer.textContent > 0) {
        timer.textContent--;
    } else {
        clearInterval(timerId);
        return alert('Вы победили в конкурсе!');
    }
};

let timerId = setInterval(getTimer, 1000);

