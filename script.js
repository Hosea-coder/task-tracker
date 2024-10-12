// Selectors
const taskName = document.getElementById("taskName");
const dateReceived = document.getElementById("dateReceived");
const deadline = document.getElementById("deadline");
const status = document.getElementById("status");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTable = document.getElementById("taskTable").getElementsByTagName('tbody')[0];

// Event Listener to Add Task
addTaskBtn.addEventListener('click', addTask);

// Function to Add Task
function addTask() {
    const task = {
        taskName: taskName.value,
        dateReceived: dateReceived.value,
        deadline: deadline.value,
        status: status.value
    };

    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    saveTasksToLocalStorage(tasks);
    renderTasks();
    clearForm();
}

// Function to Render Tasks in the Table
function renderTasks() {
    let tasks = getTasksFromLocalStorage();
    taskTable.innerHTML = ""; // Clear existing tasks

    tasks.forEach((task, index) => {
        let row = taskTable.insertRow();

        let taskCell = row.insertCell(0);
        let dateReceivedCell = row.insertCell(1);
        let deadlineCell = row.insertCell(2);
        let statusCell = row.insertCell(3);
        let actionCell = row.insertCell(4);

        taskCell.innerText = task.taskName;
        dateReceivedCell.innerText = task.dateReceived;
        deadlineCell.innerText = task.deadline;
        statusCell.innerText = task.status;

        // Delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        actionCell.appendChild(deleteBtn);
    });
}

// Function to Delete Task
function deleteTask(index) {
    let tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1); // Remove the selected task
    saveTasksToLocalStorage(tasks);
    renderTasks();
}

// Utility Functions for Local Storage
function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to Clear Form
function clearForm() {
    taskName.value = '';
    dateReceived.value = '';
    deadline.value = '';
    status.value = 'Pending';
}

// Initial Render of Tasks
renderTasks();
