
let form = document.querySelector('.tasks__control');
let formInput = document.getElementById('task__input');
let tasksList = document.querySelector('.tasks__list');
let taskTemplate = document.querySelector('template').content;

form.addEventListener('submit', (evt) => {
    if (formInput.value.length === 0) {
        return;
    }

    let taskText = formInput.value;
    let task = taskTemplate.cloneNode(true);
    let taskDescription = task.querySelector('.task__title');
    taskDescription.textContent = taskText;

    tasksList.appendChild(task);
    formInput.value = '';

    [...tasksList.children].forEach((item) => {
        let closeBtn = item.querySelector('.task__remove');
        closeBtn.addEventListener('click', (event) => event.currentTarget.closest('.task').remove());
    });
});

