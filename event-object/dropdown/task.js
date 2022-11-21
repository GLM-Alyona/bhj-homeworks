'use strict';

class DropDownComponent {
    // Инициализируем все обработчики событий для указанного селектора
    constructor(selector) {
        let self = this;

        this.dropdowns = [...document.querySelectorAll(selector)];
        this.menuClass = 'dropdown__list';
        this.valueClass = 'dropdown__value';
        this.menuActiveClass = 'dropdown__list_active';
        this.linkCkass = 'dropdown__link';

        this.dropdowns.forEach((drop) => {
            drop.onclick = function(e) { self.handleDropdownClick(e) };
        });

        // нажатие в любом месте закрывает все выпадающие списки
        document.body.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                self.closeAll();
            }
        });
    }

    // Обработчик нажатия на верхнее меню выпадающего списка и на элементы выпадающего списка
    handleDropdownClick(e) {
        e.preventDefault();
        const target = e.target;
        const currentDrop = e.currentTarget;
        if (target.classList.contains(this.linkCkass)) {
            const value = target.textContent;
            const dropdownValue = currentDrop.querySelector(`.${this.valueClass}`);
            dropdownValue.textContent = value;
        }
        const menu = currentDrop.querySelector(`.${this.menuClass}`);
        menu.classList.toggle(this.menuActiveClass);
    }

    // Закрывает все выпадающие списки
    closeAll() {
        this.dropdowns.forEach((drop) => {
            drop.querySelector(`.${this.menuClass}`).classList.remove(this.menuActiveClass);
        });
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new DropDownComponent('.dropdown');
};