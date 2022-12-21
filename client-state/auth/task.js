function welcomer(id) {
    const welcome = document.getElementById('welcome');
    welcome.classList.add('welcome_active');
    const user_id = document.getElementById('user_id');
    user_id.insertAdjacentHTML('afterbegin', `${id}`);

    user_id.insertAdjacentHTML('beforeend', '<br><button id="button">Деавторизация</button>');

    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        welcome.classList.remove('welcome_active');
        document.getElementById('signin').classList.add('signin_active');

        button.remove();
        user_id.innerHTML = '';

        delete localStorage.id;
    });
}

if (localStorage.length && localStorage.id) {
    welcomer(localStorage.id);
}
else {
    const signin = document.getElementById('signin');
    signin.classList.add('signin_active');
}

document.addEventListener('submit', (e) => {
    const signin__form = document.getElementById('signin__form');
    let formData = new FormData(signin__form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const parse = JSON.parse(xhr.responseText);
            if (parse.success) {
                signin.classList.remove('signin_active');

                welcomer(parse.user_id);        
                localStorage.id = parse.user_id;
            }
            else {
                alert('Неверный логин/пароль');
            }
        }
    });
    e.preventDefault();
})