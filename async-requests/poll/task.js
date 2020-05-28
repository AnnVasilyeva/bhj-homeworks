let body = document.querySelector('body');


function setCloneNewElement (a, arr) {
    let poll = (document.querySelector('template').content).cloneNode(true);
    poll.getElementById('poll__title').textContent = a;
    let pollAnswers = poll.querySelectorAll('.poll__answer');

    for (let i = 0; i < pollAnswers.length; i++) {
        pollAnswers[i].textContent = arr[i];

        if (pollAnswers[i].textContent == '') {
            pollAnswers[i].remove();
        }
        pollAnswers[i].addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
    }

    body.appendChild(poll);
}

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = xhr.response;
        let title = response.data.title;
        let answers = response.data.answers;

        setCloneNewElement (title, answers);
    }

});