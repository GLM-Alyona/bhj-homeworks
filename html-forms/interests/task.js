'use strict';

class InterestsComponent {
    // Инициализируем все обработчики событий
    constructor(selector) {
        let self = this;

        document.querySelectorAll(selector + ' .interest__check').forEach((checkbox) => {
            checkbox.addEventListener('change', function(e) { self.handleInterestCheck(e) });
        });
    }

    // обработчик клика на любой чекбокс
    handleInterestCheck(event) {
        this.handleChildren(event.target);
        this.handleParent(event.target);
    }

    // обработчик для вложенного чекбокса
    handleChildren(target) {
        const targetParent = target.closest('.interest');
        const childrenCheckBoxes = targetParent && [...targetParent.querySelectorAll('.interests_active .interest__check')];

        if (!childrenCheckBoxes) {
            return;
        }

        childrenCheckBoxes.forEach((checkbox) => {
            checkbox.checked = target.checked;
        });
    }

    // обработчик для родительского чекбокса
    handleParent(target) {
        const parentCheckbox = target?.closest('.interests_active')?.closest('.interest')?.querySelector('label>.interest__check');

        if (!parentCheckbox) {
            return;
        }

        const childCheckboxesCount = [...parentCheckbox?.parentElement?.nextElementSibling?.children];
        let checkedCount = 0;

        if (parentCheckbox) {
            childCheckboxesCount.forEach((checkbox) => {
                if (checkbox?.querySelector('label').querySelector('.interest__check').checked) {
                    checkedCount += 1;
                }
            });
        }

        if (checkedCount === 0) {
            // все вложенные чекбоксы выключены
            parentCheckbox.checked = false;
            parentCheckbox.indeterminate = false;
        } else if (checkedCount === childCheckboxesCount.length) {
            // все вложенные чекбоксы включены
            parentCheckbox.indeterminate = false;
            parentCheckbox.checked = true;
        } else if (checkedCount < childCheckboxesCount.length) {
            // вложенные чекбоксы частично включены
            parentCheckbox.indeterminate = true;
            parentCheckbox.checked = false;
        }
    }
}


// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new InterestsComponent('.interests');
}