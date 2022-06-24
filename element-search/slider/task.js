const sliders = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.slider__arrow_prev'),
    next = document.querySelector('.slider__arrow_next'),
    dots = document.querySelectorAll('.slider__dot');
let slideActive = 0;

prev.onclick = () => {
    if (slideActive - 1 < 0) {
        slideActive = sliders.length - 1;
    } else {
        slideActive -= 1;
    }
    changeSlide(slideActive);
}

next.onclick = () => {
    if (slideActive + 1 === sliders.length) {
        slideActive = 0;
    } else {
        slideActive += 1;
    }
    changeSlide(slideActive);
}

// Управление точками
dots[slideActive].classList.add('slider__dot_active');
[...dots].forEach((item, i) => item.onclick = () => {
    changeSlide(i);
});

// Функция переключения слайда на номер i
function changeSlide(i) {
    [...sliders].forEach((item) => item.classList.remove('slider__item_active'));
    [...dots].forEach((item) => item.classList.remove('slider__dot_active'));
    sliders[i].classList.add('slider__item_active');
    dots[i].classList.add('slider__dot_active');
}