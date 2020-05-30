const progress = document.getElementById( 'progress' );
let form = document.getElementById('form');
let input = form.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let file = input.files[0]; //находим массив с файлами в  input и достаем нужный
    let formData = new FormData();
    let xhr = new XMLHttpRequest();

    progress.value = 0; //обнуляем значение прогресс-бара
    progress.max = file.size; //задаем максимальный размер прогресс-бара (он равен размеру файла)

    formData.append('file', file); //добавляем в объект формы файл
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true); //делаем запрос
    xhr.upload.onprogress = (e) => progress.value = e.loaded; //во время прогресса присваивать значение e.loaded
    xhr.send(formData);
});