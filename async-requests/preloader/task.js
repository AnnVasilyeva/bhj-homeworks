let items = document.getElementById('items');
let img = document.getElementById('loader');

//клонируем новый элемент и записываем в него значения
function setCloneNewElement (a, b) {
    let item = (document.querySelector('template').content).cloneNode(true);
    item.querySelector('.item__code').textContent = a;
    item.querySelector('.item__value').textContent = b;

    items.appendChild(item);
}

//создаем запрос и отправлем его
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', true);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
    let responseValute = xhr.response.response.Valute;
        for (let charCode in responseValute) {
            let item = responseValute[charCode];
            let value = item.Value;

            setCloneNewElement (charCode, value);
            img.classList.remove('loader_active');
        }
    }
});
