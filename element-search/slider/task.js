let sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev');
let sliderArrowNext = document.getElementsByClassName('slider__arrow_next');
let sliderItem = document.querySelectorAll('.slider__item');


sliderArrowPrev[0].onclick = function () {
    let i = 0;
    let nextElement = sliderItem.length - 1;

    while (i < sliderItem.length) {
        if (sliderItem[i].classList.contains('slider__item_active')) {
            sliderItem[i].classList.remove('slider__item_active');
            if (i !== 0) {
                nextElement = i - 1;
            }
            sliderItem[nextElement].classList.add('slider__item_active');
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
            sliderItem[i].classList.remove('slider__item_active');
            if (i !== sliderItem.length - 1) {
                nextElement = i + 1;
            }
            sliderItem[nextElement].classList.add('slider__item_active');
            break;
        }
        i++;
    }
}

<!-- Повышенная сложность.-->
// let sliderDot = document.querySelectorAll('.slider__dot');
//
// for (let i = 0; i < sliderDot.length; i++) {
//     sliderDot[i].onclick = function () {
//         if (sliderDot[i].classList.contains('slider__dot_active')) {
//             sliderDot[i].classList.remove('slider__dot_active');
//             sliderItem[i].classList.remove('slider__item_active');
//
//         } else {
//             sliderDot[i].classList.add('slider__dot_active');
//             sliderItem[i].classList.add('slider__item_active');
//         }
//
//     };
//
// }