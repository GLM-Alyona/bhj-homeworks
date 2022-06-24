const link = document.querySelectorAll('.menu__link');

[...link].forEach((item) => {

    item.onclick = () => {
        // Проверяем есть ли в этом списке вложенные меню
        const menuSub = item.closest('.menu__item').querySelector('.menu_sub');
        if (menuSub) {
            // Проверяем открыто ли уже вложенное меню
            if (!menuSub.classList.contains('menu_active')) {
                // Закрываем другие вложенные меню у главного родителя
                const activeMenu = item.closest('.menu_main').querySelectorAll('.menu_active');
                if (activeMenu.length > 0) {
                    [...activeMenu].forEach((item) => item.classList.remove('menu_active'));
                }

                menuSub.classList.add('menu_active');
            } else {
                menuSub.classList.remove('menu_active');
            }

            return false;
        }

    }

});