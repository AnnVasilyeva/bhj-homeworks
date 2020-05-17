let menuLink = document.querySelectorAll('.menu__link');


menuLink.forEach( function (elementLink) {
    elementLink.onclick = function () {
        let menuItem = elementLink.parentElement;
        let menuSub = menuItem.querySelector('.menu_sub');



        if (menuSub.classList.contains('menu_active')) {
            menuSub.classList.remove('menu_active');
            return false;
        } else {
            document.querySelectorAll('.menu_active').forEach((menu_item) => menu_item.classList.remove('menu_active'));
            menuSub.classList.add('menu_active');
            return false;
        }
    }
});

