class TooltipComponent {
    constructor(selector) {
        let self = this;
        [...document.querySelectorAll(selector)].forEach((element) => {
            element.addEventListener('click', (e) => {
                self.handleTooltipClick(e);
            });
        });
    }

    handleTooltipClick(event) {
        event.preventDefault();

        if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
        }

        let target = event.target;
        let tooltip = this.createTooltip(target.title);
        const tooltipPosition = target.dataset.position;
        const targetPosition = target.getBoundingClientRect();
        const defaultPadding = 10;

        if (tooltipPosition === 'top') {
            tooltip.style.top = (targetPosition.top + window.scrollY - tooltip.getBoundingClientRect().height - defaultPadding) + 'px';
            tooltip.style.left = targetPosition.left + 'px';
        } else if (tooltipPosition === 'bottom') {
            tooltip.style.top = (targetPosition.bottom + window.scrollY + defaultPadding) + 'px';
            tooltip.style.left = targetPosition.left + 'px';
        } else if (tooltipPosition === 'right') {
            tooltip.style.top = (targetPosition.top + window.scrollY - defaultPadding) + 'px';
            tooltip.style.left = targetPosition.left + targetPosition.width + defaultPadding + 'px';
        } else {
            tooltip.style.top = (targetPosition.top + window.scrollY - defaultPadding) + 'px';
            tooltip.style.left = (targetPosition.left - tooltip.getBoundingClientRect().width - defaultPadding) + 'px';
        }
    }

    createTooltip(text) {
        const div = document.createElement('div');
        div.classList.add('tooltip');
        div.classList.add('tooltip_active');
        div.style.position = 'absolute';
        div.style.top = 0;
        div.style.left = 0;
        div.innerText = text;

        document.body.insertAdjacentElement('beforeend', div);

        return div;
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new TooltipComponent('.has-tooltip');
};