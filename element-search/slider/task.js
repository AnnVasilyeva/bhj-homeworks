let sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev');
let sliderArrowNext = document.getElementsByClassName('slider__arrow_next');
let sliderItem = document.querySelectorAll('.slider__item');
let sliderDot = document.querySelectorAll('.slider__dot');

sliderArrowPrev[0].onclick = function () {
    let i = 0;
    let nextElement = sliderItem.length - 1;

    while (i < sliderItem.length) {
        if (sliderItem[i].classList.contains('slider__item_active')) {
            if (i !== 0) {
                nextElement = i - 1;
            }
            setActive(nextElement);
            break;
        }
        i++;
    }
};

sliderArrowNext[0].onclick = function () {
    let i = 0;
    let nextElement = 0;

    while (i < sliderItem.length) {
        if (sliderItem[i].classList.contains('slider__item_active')) {
            if (i !== sliderItem.length - 1) {
                nextElement = i + 1;
            }
            setActive(nextElement);
            break;
        }
        i++;
    }
}

for (let i = 0; i < sliderDot.length; i++) {
    sliderDot[i].onclick = function () {
        setActive(i);
    };
}

function setActive(active) {
    // убрать все активные элементы
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('slider__item_active');
        sliderDot[i].classList.remove('slider__dot_active');
    }
    //установить активную картинку
    sliderItem[active].classList.add('slider__item_active');
    //установить активную точку
    sliderDot[active].classList.add('slider__dot_active');
}