
const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach((tooltip) => {
    tooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip" style="top: 0; left: 0">${tooltip.title}</div>`);
    
    tooltip.onclick = (event) => {
        event.preventDefault();
        let tooltipActive = Array.from(document.querySelectorAll('.tooltip')).find((item) => item.classList.contains('tooltip_active'));
        
        if (tooltipActive && tooltipActive !== tooltip.nextElementSibling) {
            tooltipActive.classList.remove('tooltip_active');
        }
        
        tooltip.nextElementSibling.classList.toggle('tooltip_active');
        tooltip.nextElementSibling.style.top = tooltip.getBoundingClientRect().top + tooltip.getBoundingClientRect().height + 'px';
        tooltip.nextElementSibling.style.left = tooltip.getBoundingClientRect().left + 'px';
    };
});