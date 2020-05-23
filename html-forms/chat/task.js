const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
let chatInput = document.querySelector('.chat-widget__input');

//по клику на боковой бэйдж открывается чат
chatWidget.addEventListener('click', event => {
    chatWidget.classList.add('chat-widget_active');
})

//по клику на Enter
document.addEventListener('keydown', event => {
    //если это кнопка Enter
    if (event.keyCode === 13) {

        //запрос даты
        let date = new Date();

//проверка что поле не пустое
        if (chatInput.value !== '') {

  //добавляем новый кусок кода в html
            messages.innerHTML += `
              <div class="message message_client">
                <div class="message__time"></div>
                <div class="message__text"></div>
              </div>
            `;

            let newMessages = document.querySelectorAll('.message_client');
            let message = newMessages[newMessages.length - 1];

//добавляем контент в новый блок
            message.querySelector('.message__text').textContent = chatInput.value;
            message.querySelector('.message__time').textContent = date.getHours() + ':' + date. getMinutes();
            chatInput.value = '';
        } else {
            event.preventDefault(); //отменяем отправку сообщения если оно пустое
        }

        //добавляем новый элемент с ответом бота
        messages.innerHTML += `
              <div class="message">
                <div class="message__time"></div>
                <div class="message__text"></div>
              </div>
            `;

        //выбор ответа из массива рандомно
        let BotTextMsg = ['Добрый день!', 'Чем я могу Вам помочь?', 'Какой товар вы ищете?', 'К сожалению все операторы сейчас заняты', 'Напишите ваш номер телефона и мы свяжемся с Вами'];
        const randomElement = BotTextMsg[Math.floor(Math.random() * BotTextMsg.length)];

        let newMessagesBot = document.querySelectorAll('.message');
        let messageBot = newMessagesBot[newMessagesBot.length - 1];

        messageBot.querySelector('.message__text').textContent = randomElement;
        messageBot.querySelector('.message__time').textContent = date.getHours() + ':' + date. getMinutes();
    }
});

