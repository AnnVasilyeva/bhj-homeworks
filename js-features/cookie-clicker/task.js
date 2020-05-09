const cookie1 = document.getElementById('cookie');


cookie1.onclick = function () {
    if (cookie1.width === 200) {
        cookie1.width = 220;
    } else {
        cookie1.width = 200;
    }

    let clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent++;
};