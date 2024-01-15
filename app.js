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
        taskItem.classList.add("animated", "slideInRight");

        taskList.appendChild(taskItem);

        // Reset input fields
        taskInput.value = "";
        taskDate.value = "";
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

// DARK MODE

function toggleTheme() {
    console.log("Funzione toggleTheme chiamata.");

    const body = document.body;
    const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";

    // Inverti il tema
    body.classList.toggle("dark-theme");

    // Aggiorna l'immagine in base al tema corrente
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.src = currentTheme === "dark" ? 'sun.svg' : 'moon.svg';

    // Verifica se il tema è stato applicato correttamente
    const newTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    if (currentTheme !== newTheme) {
        // Il tema è cambiato, esegui ulteriori azioni se necessario
        console.log("Tema cambiato a:", newTheme);
    }


    // Aggiungi una classe temporanea per attivare l'animazione
    body.classList.add("theme-transition");

    // Rimuovi la classe temporanea dopo un breve ritardo per attivare l'animazione
    setTimeout(() => {
        body.classList.remove("theme-transition");
    }, 500); // Modifica il valore in millisecondi in base alla tua animazione
}

// Verifica se è stato salvato un tema preferito dall'utente
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Imposta il tema iniziale in base alle preferenze dell'utente
if (userPrefersDark) {
    toggleTheme();
}
