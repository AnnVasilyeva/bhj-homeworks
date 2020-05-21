let fontSizeSelection = document.querySelectorAll('.font-size');
let book = document.getElementById('book');
let textColorSelection = document.querySelectorAll('.book__control_color .color');
let backColorSelection = document.querySelectorAll('.book__control_background .color');


for (let i = 0; i < fontSizeSelection.length; i++) {

    fontSizeSelection[i].addEventListener('click', function (e) {
        setActive(i, fontSizeSelection, 'font-size_active');

        let size1 = fontSizeSelection[i].dataset.size;

        if (size1 === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        }

        if (size1 == undefined) {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
        if (size1 === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        }
        e.preventDefault();
    });
}

for (let i = 0; i < textColorSelection.length; i++) {

    textColorSelection[i].addEventListener('click', function (e) {

        setActive(i, textColorSelection, 'color_active');

        let textColor = textColorSelection[i].dataset.color;

        if (textColor === 'gray') {
            book.classList.remove('book_color-whitesmoke');
            book.classList.add('book_color-gray');
        }

        if (textColor == undefined) {
            book.classList.remove('book_color-whitesmoke');
            book.classList.remove('book_color-gray');
        }
        if (textColor === 'whitesmoke') {
            book.classList.remove('book_color-gray');
            book.classList.add('book_color-whitesmoke');
        }
        e.preventDefault();
    });
}

for (let i = 0; i < backColorSelection.length; i++) {

    backColorSelection[i].addEventListener('click', function (e) {

        setActive(i, backColorSelection, 'color_active');

        let backColor = backColorSelection[i].dataset.color;

        if (backColor === 'gray') {
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-gray');
        }

        if (backColor == undefined) {
            book.classList.remove('book_bg-black');
            book.classList.remove('book_bg-gray');
        }

        if (backColor === 'black') {
            book.classList.remove('book_bg-gray');
            book.classList.add('book_bg-black');
        }
        e.preventDefault();
    });
}

function setActive(activeIndex, arrName, nameClass) {
    let index = [...arrName].findIndex((element) => element.classList.contains(nameClass));

    arrName[index].classList.remove(nameClass);

    arrName[activeIndex].classList.add(nameClass);

}


