document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const filters = document.getElementById("filters");

    addTaskBtn.addEventListener('click', addTask);
    filters.addEventListener('change', filterTasks);

    function addTask() {
        const taskItem = document.createElement("li");
        const taskText = document.createElement("span");
        const taskDateText = document.createElement("span");
        const completeButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        taskText.innerText = taskInput.value;
        taskDateText.innerText = taskDate.value;

        completeButton.innerText = "Complete";
        completeButton.addEventListener('click', completeTask);

        deleteButton.innerText = "Delete";
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(taskText);
        taskItem.appendChild(document.createElement("br"));  // Add a line break
        taskItem.appendChild(taskDateText);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Add animation classes
        taskItem.classList.add("animated", "fadeIn");

        taskList.appendChild(taskItem);

        // Reset input fields
        taskInput.value = "";
        taskDate.value = "";
    }

    // ... Altre funzioni rimangono invariate ...
});
