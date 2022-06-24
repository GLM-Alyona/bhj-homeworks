const main = document.getElementById('modal_main');
main.classList.add('modal_active');

const close = document.getElementsByClassName('modal__close');
[...close].forEach((item) => item.onclick = () => {
    const active = document.getElementsByClassName('modal_active');
    [...active].forEach((item) => item.classList.remove('modal_active'));
});

const success = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');
showSuccess.onclick = () => {
    main.classList.remove('modal_active');
    success.classList.add('modal_active');
};