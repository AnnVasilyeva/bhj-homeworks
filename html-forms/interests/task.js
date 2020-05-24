//находим все чекбоксы class="interest__check"
let checkboxes = document.querySelectorAll('.interest__check');

//для каждого чекбокса из массива
checkboxes.forEach((checkbox) => {
    //навешиваем обработчик клика
    checkbox.addEventListener('click', (event) => {
        //выбираем тот чекбокс по которому кликнули
        let clickedBox = event.currentTarget;
        //ищем его ближайшего родителя с class="interest"
        let parent = clickedBox.closest('.interest');
        //находим его детей с class="interest__check"
        let childBoxes = parent.querySelectorAll('.interest__check');
        //для каждого из детей присваиваем checked как у кликнутого чекбокса
        childBoxes.forEach((box) => box.checked = clickedBox.checked);
    });
});
