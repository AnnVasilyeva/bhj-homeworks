let hasTooltip = document.querySelectorAll('.has-tooltip');
let tooltipTarget = null;

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        let tooltip = document.querySelector('.tooltip');
        //получем все координаты ссылки
        let  hasTooltipPosition = hasTooltip[i].getBoundingClientRect();

        //проверка, если это та ссылка которую нажали
        if (tooltipTarget === evt.currentTarget) {
            //если подсказка не видима, сделать ее видимой
            if (tooltip.style.display !== 'block') {
                tooltip.style.display = 'block';
            } else { //если наоборот, то скрыть подсказку
                tooltip.style.display = 'none';
            }
        //иначе присвоить значение кликнутой ссылки и сделать подсказку видимой
        } else {
            tooltipTarget = evt.currentTarget;
            tooltip.style.display = 'block';
        }
//присваиваем координаты и текст для подсказки
        tooltip.style.top = hasTooltipPosition.bottom + 'px';
        tooltip.style.left = hasTooltipPosition.left + 'px';
        tooltip.textContent = hasTooltip[i].title;
    })
}

