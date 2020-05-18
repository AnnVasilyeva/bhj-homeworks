let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let btnSuccess = modalSuccess.getElementsByClassName('btn_success');
let modalClose = document.getElementsByClassName('modal__close');
console.log(modalClose);

//добавляем активный класс модальному окну (чтобы показать его на странице)
modalMain.classList.add('modal_active');

//при клике на крестик закрываем окно
modalClose[0].onclick = function () {
    modalMain.classList.remove('modal_active');
}

//при клике по ссылке (кнопке) активируем второе модальное окно и закрываем первое
modalClose[1].onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');

}

//при клике по крестику во втором окне закрываем окно
modalClose[2].onclick = function () {
    modalSuccess.classList.remove('modal_active');
}

//при клике по кнопке второго окна закрываем окно
btnSuccess[0].onclick = function () {
    modalSuccess.classList.remove('modal_active');
}