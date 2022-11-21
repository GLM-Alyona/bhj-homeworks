'use strict';

class TabsComponent {
    // Инициализируем все обработчики событий
    constructor(selector) {
        let self = this;

        this.tabs = document.querySelector(selector);
        this.tabsNavigation = [...this.tabs.querySelectorAll('.tab')];
        this.tabsContent = [...this.tabs.querySelectorAll('.tab__content')];
        this.tabNavigationActiveClass = 'tab_active';
        this.tabContentActiveClass = 'tab__content_active';
        this.tabs.querySelectorAll('.tab').forEach((tab) => {
            tab.addEventListener('click', function(event) { self.handleTabLinkClick(event) });
        });
    }

    // Обработчик события переключения вкладки
    handleTabLinkClick(event) {
        const target = event.target;
        const activeContent = this.tabsContent[this.tabsNavigation.findIndex((item) => item === target)];

        this.clearActiveClasses(this.tabsNavigation, this.tabNavigationActiveClass);
        this.clearActiveClasses(this.tabsContent, this.tabContentActiveClass);
        this.setActiveClass(this.tabsNavigation, target, this.tabNavigationActiveClass);
        this.setActiveClass(this.tabsContent, activeContent, this.tabContentActiveClass);
    }

    // Добавляет указанный CSS класс для target всех элемента
    setActiveClass(arr, target, className) {
        arr.find((item) => item === target).classList.add(className);
    }

    // Удаляет указанный CSS класс у всех элементов
    clearActiveClasses(elements, className) {
        elements.forEach((item) => {
            if (item.classList.contains(className)) {
                item.classList.remove(className);
            }
        });
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new TabsComponent('.tabs');
};