document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.in input');
    const addButton = document.querySelector('.in button');
    const listDisplay = document.querySelector('.list-display');
    const numberOfTask = document.querySelector('.numberoftask');

    let tasks = [];

    function updateTaskCount() {
        const completed = tasks.filter(task => task.completed).length;
        numberOfTask.textContent = `${completed}/${tasks.length}`;
    }

    function renderTasks() {
        listDisplay.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-item');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
                task.completed = checkbox.checked;
                updateTaskCount();
            });

            const taskName = document.createElement('p');
            taskName.textContent = task.name;
            taskName.classList.add('listname');
            const editButton = document.createElement('button');
            editButton.textContent = 'edit';
            editButton.classList.add('ed');

          


            editButton.addEventListener('click', () => {
                const newName = prompt('Edit task:', task.name);
                if (newName) {
                    task.name = newName;
                    renderTasks();
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete';
            deleteButton.classList.add('e');
            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                renderTasks();
                updateTaskCount();
            });

            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(taskName);
            taskDiv.appendChild(editButton);
            taskDiv.appendChild(deleteButton);
            listDisplay.append(taskDiv);
        });
        updateTaskCount();
    }

    addButton.addEventListener('click', () => {
        const taskName = input.value.trim();
        if (taskName) {
            tasks.push({ name: taskName, completed: false });
            input.value = '';
            renderTasks();
        }
    });

    renderTasks();
});

