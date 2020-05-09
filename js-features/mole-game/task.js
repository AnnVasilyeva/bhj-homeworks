function getHole(index) {
    for (let i = 1; i < 10; i++) {
        let clickHole = document.getElementById(`${index}${i}`);

        clickHole.onclick = function () {
            const dead = document.getElementById('dead');
            const lost = document.getElementById('lost');

            if (clickHole.classList.contains('hole_has-mole')) {
                dead.textContent++;
            } else {
                lost.textContent++;
            }

            if (dead.textContent == 10) {
                dead.textContent = 0;
                lost.textContent = 0;
                alert('Победа!');
            } else if (lost.textContent == 5) {
                lost.textContent = 0;
                dead.textContent = 0;
                alert('Вы проиграли');
            }
        }
    }
}

getHole('hole');