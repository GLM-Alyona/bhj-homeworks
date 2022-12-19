const taskInput = document.getElementById('task__input');
const taskButton = document.getElementById('tasks__add');
const tasksListContainer = document.getElementById('tasks__list');

function addTask() {
    tasksListContainer.insertAdjacentHTML('beforeEnd', `
 <div class="task">
 <div class="task__title">
            ${taskInput.value}
 </div>
 <a href="#" class="task__remove">&times;</a>
 </div>
    `);
    
    taskInput.value = '';

    const taskRemove = tasksListContainer.lastElementChild.querySelector('.task__remove');
    taskRemove.onclick = () => taskRemove.closest('.task').remove();
}

document.getElementById('tasks__form').onclick = (event) => event.preventDefault();

// Добавляет задачу при нажатии кнопки "Добавить" и нажатии Enter
taskButton.addEventListener('click', () => {
    if (taskInput.value.trim().length !== 0) {
        addTask();
    }
});