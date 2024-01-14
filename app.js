document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");
    const taskDeadline = document.getElementById("task-deadline");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const filters = document.getElementById("filters");

    addTaskBtn.addEventListener('click', addTask);
    filters.addEventListener('change', filterTasks);

    function addTask() {
        const taskItem = document.createElement("li");
        const taskText = document.createElement("span");
        const taskDateText = document.createElement("span");
        const taskDeadlineText = document.createElement("span");
        const completeButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        taskText.innerText = taskInput.value;
        taskDateText.innerText = taskDate.value;
        taskDeadlineText.innerText = taskDeadline.value;

        completeButton.innerText = "Complete";
        completeButton.addEventListener('click', completeTask);

        deleteButton.innerText = "Delete";
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(taskText);
        taskItem.appendChild(document.createElement("br"));  // Add a line break
        taskItem.appendChild(taskDateText);
        taskItem.appendChild(taskDeadlineText);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Add animation classes
        taskItem.classList.add("animated", "fadeIn");

        taskList.appendChild(taskItem);

        // Reset input fields
        taskInput.value = "";
        taskDate.value = "";
        taskDeadline.value = "";
    }

    function completeTask() {
        const taskItem = this.parentElement;
        taskItem.classList.toggle('completed');
    }

    function deleteTask() {
        const taskItem = this.parentElement;
        taskList.removeChild(taskItem);
    }

    function filterTasks() {
        const filterType = document.querySelector('input[name="filter"]:checked').value;
        const tasks = document.querySelectorAll('#task-list li');

        tasks.forEach(task => {
            task.style.display = 'block';

            if (filterType === 'completed' && !task.classList.contains('completed')) {
                task.style.display = 'none';
            } else if (filterType === 'incomplete' && task.classList.contains('completed')) {
                task.style.display = 'none';
            }
        });
    }
});
