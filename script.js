let tasks = [];

// Function to add a task to the list 
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;
    if (taskName) {
        tasks.push({ task: taskName, completed: false });
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    tasks.forEach((taskObj, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskObj.task;
        if (taskObj.completed) {
            taskItem.style.textDecoration = 'line-through';
        }
        taskItem.onclick = () => toggleTaskCompletion(index);
        taskItem.ondblclick = () => removeTask(index);
        taskList.appendChild(taskItem);
    });
}

// Function to toggle task completion  
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
