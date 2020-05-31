let modalSubscribe = document.getElementById('subscribe-modal');
let modalClose = modalSubscribe.querySelector('.modal__close');

//добавляем активный класс модальному окну (чтобы показать его на странице) только если куки пусты
window.onload = () => {
    if (document.cookie === '') {
        modalSubscribe.classList.add('modal_active');
    }
}

//при клике на крестик закрываем окно
modalClose.onclick = function () {
    modalSubscribe.classList.remove('modal_active');
    document.cookie = 'modalClosed=' + encodeURIComponent('modalSubscribe.classList.remove(\'modal_active\')') + "; Expires=Mon, 01 Jul 2021 00:00:00 GMT;";
}
