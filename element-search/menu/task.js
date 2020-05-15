let menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        let menuItem = menuLink[i].parentElement;
        let menuSub = menuItem.querySelector('.menu_sub');

        if (menuSub.classList.contains('menu_active')) {
            menuSub.classList.remove('menu_active');
            return false;
        } else {
            menuSub.classList.add('menu_active');
            return false;
        }
    }
}



