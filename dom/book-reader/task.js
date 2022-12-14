'use strict';

class BookComponent {
    // Инициализируем все обработчики событий
    constructor(selector) {
        const fontSizeControls = document.querySelectorAll(selector + ' .book__control_font-size a.font-size');
        const bookContent = document.querySelector(selector + ' .book__content');

        fontSizeControls.forEach((fontSizeControl) => {
            fontSizeControl.addEventListener('click', (e) => {
                e.preventDefault();
                bookContent.classList.remove('book_fs-big');
                bookContent.classList.remove('book_fs-small');

                fontSizeControls.forEach((fontSizeControl) => {
                    fontSizeControl.classList.remove('font-size_active');
                });

                e.target.classList.add('font-size_active')
                if (e.target.classList.contains('font-size_small')) {
                    bookContent.classList.add('book_fs-small')
                }
                if (e.target.classList.contains('font-size_big')) {
                    bookContent.classList.add('book_fs-big')
                }
            });
        });
    }

}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new BookComponent('.book');
};