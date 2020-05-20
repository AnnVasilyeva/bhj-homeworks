let rotator = document.querySelector('.rotator');
let rotatorCases = rotator.children;

const rotatorChange = function () {
let i = 0;
let nextElement = 0;

    while (i < rotatorCases.length) {
        if (rotatorCases[i].classList.contains('rotator__case_active')) {
            if (i !== rotatorCases.length - 1) {
                nextElement = i + 1;
            }
            setActive(nextElement);
            break;
        }
        i++;
    }
    function setActive(active) {

        let index = [...rotatorCases].findIndex((element) => element.classList.contains('rotator__case_active'));
        // у элементов с этим индексом убираем активный класс
        rotatorCases[index].classList.remove('rotator__case_active');

        //установить активный класс
        rotatorCases[active].classList.add('rotator__case_active');
    }

};

let timer = setInterval(rotatorChange, 1000);
