let tab = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');



tab.forEach(function (elementTab) {
    let index = [...tab].indexOf(elementTab);

    elementTab.addEventListener('click', function () {

        if (elementTab.classList.contains('tab_active')) {

            elementTab.classList.remove('tab_active');
            tabContent[index].classList.remove('tab__content_active');

        } else {
            document.querySelectorAll('.tab_active').forEach((tab_item) => tab_item.classList.remove('tab_active'));
            document.querySelectorAll('.tab__content_active').forEach((tab_content) => tab_content.classList.remove('tab__content_active'));
            elementTab.classList.add('tab_active');
            tabContent[index].classList.add('tab__content_active');
        }
    });
});
