let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let btnSuccess = modalSuccess.getElementsByClassName('btn_success');
let modalClose = document.getElementsByClassName('modal__close');

modalMain.classList.add('modal_active');

modalClose[0].onclick = function () {
    modalMain.classList.remove('modal_active');
}

modalClose[1].onclick = function () {
    modalSuccess.classList.add('modal_active');
}

modalClose[2].onclick = function () {

    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
}

btnSuccess[0].onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
}