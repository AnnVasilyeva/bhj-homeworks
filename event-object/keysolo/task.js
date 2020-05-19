class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');
        this.timer = null;

        this.reset();

        this.registerEvents();
    }

    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    registerEvents() {
        /*
          TODO:
          Написать обработчик события, который откликается
          на каждый введённый символ.
          В случае правильного ввода символа вызываем this.success()
          При неправильном вводе символа - this.fail();
         */
        let self = this;

        document.addEventListener('keyup', function (event) {

            let symbols = document.querySelectorAll('.symbol');
            this.currentSymbol = document.querySelector('.symbol_current').textContent;


            if (event.key.toLowerCase() === this.currentSymbol.toLowerCase()) {
                self.success();

                let index = [...symbols].findIndex((element) => element.classList.contains('symbol_current'));
                let nextIndex = index + 1;

                if (index !== symbols.length - 1) {
                    symbols[index].classList.remove('symbol_current');
                    symbols[nextIndex].classList.add('symbol_current');
                }

            } else {
                self.fail();
            }
        });

    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (this.currentSymbol !== null) {
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
    }

    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
    }

    setNewWord() {
        const word = this.getWord();

        this.renderWord(word);
    }

    getWord() {
        const words = [
                'bob',
                'awesome',
                'netology',
                'hello',
                'kitty',
                'rock',
                'youtube',
                'popcorn',
                'cinema',
                'love',
                'javascript'
            ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                    `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;

        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
        this.startTimer(word.length);
    }

    startTimer(seconds) {
        let timer = document.querySelector('.status__time');
        timer.textContent = seconds;
        this.timer = setInterval(this.countdown, 1000);
    };

    countdown() {
        let timer = document.querySelector('.status__time');
        if (timer.textContent > 0) {
            timer.textContent--;
        } else {
            clearInterval(this.timer);
            // console.log('Вы проиграли!');
            // this.fail();
        }
    }
}

new Game(document.getElementById('game'));

