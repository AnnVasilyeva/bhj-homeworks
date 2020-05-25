let hasTooltip = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', (evt) => {
        evt.preventDefault();
let tooltip = document.querySelector('.tooltip');
let  hasTooltipPosition = hasTooltip[i].getBoundingClientRect();

        if (tooltip.style.display === 'block') {
            tooltip.style.display = 'none';
        } else {
            tooltip.style.display = 'block';
            tooltip.style.top = hasTooltipPosition.bottom + 'px';
            tooltip.style.left = hasTooltipPosition.left + 'px';
            tooltip.textContent = hasTooltip[i].title;
        }


    })
}


