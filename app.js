function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const taskDateText = document.createElement("span");

    taskText.innerText = taskInput.value;
    taskDateText.innerText = taskDate.value;

    taskItem.appendChild(taskText);
    taskItem.appendChild(document.createElement("br"));  // Add a line break
    taskItem.appendChild(taskDateText);

    taskList.appendChild(taskItem);

    // Reset input fields
    taskInput.value = "";
    taskDate.value = "";
}
