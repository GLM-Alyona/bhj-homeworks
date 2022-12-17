class TodoComponent {
    constructor(selector) {
        let self = this;
        self.tasksInput = document.querySelector(selector + ' .tasks__input');
        self.tasksList = document.querySelector(selector + ' .tasks__list');
        self.tasksAddButton = document.querySelector(selector + ' .tasks__add');

        self.tasksInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                self.addTask(event);
            }
        });

        self.tasksAddButton.addEventListener('click', function(event) {
            event.preventDefault();
            self.addTask(event);
        });
    }

    addTask(event) {
        if (this.tasksInput.value.trim().length !== 0) {
            this.tasksList.appendChild(this.generateTaskHTML(this.tasksInput.value));
            this.tasksInput.value = '';
        }
    }

    generateTaskHTML(text) {
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.innerText = text;

        const taskRemoveLink = document.createElement('a');
        taskRemoveLink.href = '#';
        taskRemoveLink.classList.add('task__remove');
        taskRemoveLink.innerHTML = '&times;';
        taskRemoveLink.addEventListener('click', (event) => {
            event.preventDefault();
            event.target.closest('.task').remove();
        });

        const task = document.createElement('div');
        task.classList.add('task');
        task.appendChild(taskTitle)
        task.appendChild(taskRemoveLink);
        return task;
    }
}

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new TodoComponent('.tasks');
};