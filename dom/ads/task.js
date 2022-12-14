'use strict';


class RotatorComponent {
    // Инициализируем все обработчики событий
    constructor(selector) {
        const rotateElements = [...document.querySelector(selector).children];
        this.setupNextRotateElement(rotateElements, rotateElements[0]);
    }

    // Ротация и смена скорости и цвета для элемента.
    // Вызов setupNextRotateElement внутри setTimeout обеспечивает бесконечную ротацию
    setupNextRotateElement(rotateElements, currentElement) {
        let self = this;
        const speed = this.getSpeed(currentElement);
        const color = this.getColor(currentElement);

        setTimeout(() => {
            currentElement.classList.contains('rotator__case_active') &&
                currentElement.classList.remove('rotator__case_active');
            currentElement = currentElement.nextElementSibling ? currentElement.nextElementSibling : rotateElements[0];
            currentElement.classList.add('rotator__case_active');
            self.changeColor(currentElement, color);
            self.setupNextRotateElement(rotateElements, currentElement);
        }, speed);
    }

    changeColor(el, color) {
        el.style.color = color ? color : '';
    }

    getSpeed(el) {
        return Number.parseInt(el.dataset.speed) || Math.floor(1 + Math.random() * 20) * 100;
    }

    getColor(el) {
        return el.dataset.color ? el.dataset.color : '#000000';
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new RotatorComponent('.rotator');
    new RotatorComponent('.rotator2');
};