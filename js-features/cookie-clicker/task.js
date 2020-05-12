const cookie1 = document.getElementById('cookie');

let lastClick = Date.now();
let speedCounter = document.getElementById('speed__counter');
let clickerCounter = document.getElementById('clicker__counter');

cookie1.onclick = function () {

    if (cookie1.width === 200) {
        cookie1.width = 220;
    } else {
        cookie1.width = 200;
    }

    clickerCounter.textContent++;

    speedCounter.textContent = (1000 / (Date.now() - lastClick)).toFixed(2);

    lastClick = Date.now();
};