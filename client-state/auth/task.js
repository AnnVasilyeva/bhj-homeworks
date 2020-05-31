let signIn = document.getElementById('signin');
let form = document.getElementById('signin__form');
let inputLogin = document.getElementsByName('login')[0];
let inputPassword= document.getElementsByName('password')[0];
let userId = document.getElementById('user_id');

window.onload = () => {

    if (localStorage.userId === undefined) {
        signIn.classList.add('signin_active');
    } else {
        userId.textContent = localStorage.userId;
        userId.closest('.welcome').classList.add('welcome_active');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    formData.login = inputLogin.value;
    formData.password = inputPassword.value;

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);

    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            if (!xhr.response.success) {
                alert('Неверный логин/пароль');
                inputLogin.value = '';
                inputPassword.value = '';
            } else {
                localStorage.userId = xhr.response.user_id;
                userId.textContent = xhr.response.user_id;
                signIn.classList.remove('signin_active');
                userId.closest('.welcome').classList.add('welcome_active');
            }
        }
    });
});