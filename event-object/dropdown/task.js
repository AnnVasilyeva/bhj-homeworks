let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.getElementsByClassName('dropdown__list');
let dropdownLink = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', function () {
    if (!dropdownList[0].classList.contains('dropdown__list_active')) {
        dropdownList[0].classList.add('dropdown__list_active');
        return false;
    } else {
        dropdownList[0].classList.remove('dropdown__list_active');
        return false;
    }
});

for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].addEventListener('click', function (event) {
        event.preventDefault();
        dropdownValue.textContent = dropdownLink[i].textContent;
        dropdownList[0].classList.remove('dropdown__list_active');
    });

}


