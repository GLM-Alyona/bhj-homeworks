class RevealComponent {
    // Инициализируем все обработчики событий
    constructor(selector) {
        window.addEventListener('scroll', (e) => {
            document.querySelectorAll(selector).forEach((element) => {
                const revealActiveClass = 'reveal_active';
                const revealTop = element.getBoundingClientRect().top;
                const revealBottom = element.getBoundingClientRect().bottom;
                const revealHeight = revealBottom - revealTop;

                if (revealTop <= window.innerHeight / 2) {
                    element.classList.add(revealActiveClass);
                }
                if (revealTop <= window.innerHeight / 2 && revealBottom <= revealHeight) {
                    element.classList.remove(revealActiveClass);
                }
                if (revealBottom > window.innerHeight / 2 + revealHeight) {
                    element.classList.remove(revealActiveClass);
                }
            });
        });
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new RevealComponent('.reveal');
};