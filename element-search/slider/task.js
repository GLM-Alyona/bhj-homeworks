'use strict';

class SliderComponent {
    // Инициализируем все обработчики событий для указанного селектора + запоминаем внутреннее состояние слайдера
    constructor(selector) {
        let self = this;

        self.slider = document.querySelector(selector);
        self.sliderItems = [...self.slider.querySelectorAll('.slider__item')];
        self.dots = [...self.slider.querySelectorAll('.slider__dots .slider__dot')];

        self.slider.querySelector('.slider__arrows .slider__arrow_prev').addEventListener('click', (e) => {
            self.onClickPreviousSlide();
        });
        self.slider.querySelector('.slider__arrows .slider__arrow_next').addEventListener('click', (e) => {
            self.onClickNextSlide();
        });

        self.activeSlideClass = 'slider__item_active';
        self.activeDotClass = 'slider__dot_active';
        self.activeSlide = self.sliderItems.findIndex((slide) =>
            slide.classList.contains(self.activeSlideClass),
        );

        self.dots[self.activeSlide].classList.add(self.activeDotClass);
        self.dots.forEach((dot) => {
            dot.addEventListener('click', (e) => {
                self.onClickDot(e);
            });
        });
    }

    // Перелистывание вперед
    onClickNextSlide() {
        this.activeSlide = this.activeSlide < this.sliderItems.length - 1 ? this.activeSlide + 1 : 0;
        this.updateSliderState();
    };

    // Перелистывание назад
    onClickPreviousSlide() {
        this.activeSlide = this.activeSlide === 0 ? this.sliderItems.length - 1 : this.activeSlide - 1;
        this.updateSliderState();
    };

    // Обновляем текущую картинку и текущую "точку" внизу слайдера
    updateSliderState() {
        this.dots.forEach((dot) => dot.classList.remove(this.activeDotClass));
        this.dots[this.activeSlide].classList.add(this.activeDotClass);
        this.sliderItems.forEach((slide) => slide.classList.remove(this.activeSlideClass));
        this.sliderItems[this.activeSlide].classList.add(this.activeSlideClass);
    }

    // Обработчик клика "точки" внизу слайдера
    onClickDot(e) {
        this.activeSlide = this.dots.findIndex((dot) => dot === e.target);
        this.updateSliderState();
    };
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new SliderComponent('.slider');

};