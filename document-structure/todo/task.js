
let form = document.querySelector('.tasks__control');
let formInput = document.getElementById('task__input');
let tasksList = document.querySelector('.tasks__list');
let taskTemplate = document.querySelector('template').content;

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    //если поле ввода пустое то ничего дальше не выполнять
    if (formInput.value.length === 0) {
        return;
    }

    let taskText = formInput.value;
    let task = taskTemplate.cloneNode(true);
    let taskDescription = task.querySelector('.task__title');
    taskDescription.textContent = taskText;

    //находим у задачи кнопку закрытия и вешаем на нее обработчик закрытия задачи
    let closeBtn = task.querySelector('.task__remove');
    closeBtn.addEventListener('click', (event) => event.currentTarget.closest('.task').remove());

    //добавляем задачу в список
    tasksList.appendChild(task);

    //очищаем поле ввода
    formInput.value = '';
});

