// Welcome screen logic
const welcomeScreen = document.getElementById('welcome-screen');

// Automatically transition to the main app section after the welcome screen animations
setTimeout(function() {
    welcomeScreen.style.display = 'none'; // Hide the welcome screen
    document.getElementById('main-app').style.display = 'block'; // Show main application
}, 5000); // 5 seconds delay (animation time)

// Task management logic
let taskCounter = 1;
const taskListView = document.getElementById('task-list-view');

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const clientName = document.getElementById('client-name').value;
    const researchTitle = document.getElementById('research-title').value;
    const dateReceived = document.getElementById('date-received').value;
    const dateSubmitted = document.getElementById('date-submitted').value;
    const status = document.getElementById('status').value;

    // Create a new row
    const taskList = document.getElementById('task-list');
    const newRow = document.createElement('tr');

    // Add cells to the row
    newRow.innerHTML = `
        <td>${taskCounter++}</td>
        <td>${clientName}</td>
        <td>${researchTitle}</td>
        <td>${dateReceived}</td>
        <td>${dateSubmitted ? dateSubmitted : 'Not Submitted'}</td>
        <td class="${getStatusClass(status)}">${status.charAt(0).toUpperCase() + status.slice(1)}</td>
    `;

    // Append the row to the task list
    taskList.appendChild(newRow);

    // Reset the form
    document.getElementById('task-form').reset();

    // Update the view info section
    updateViewInfo();
});

// Function to return status class based on status
function getStatusClass(status) {
    if (status === 'submitted') return 'status-submitted';
    if (status === 'pending') return 'status-pending';
    if (status === 'completed') return 'status-completed';
}

// Function to update the view info section
function updateViewInfo() {
    const taskList = document.getElementById('task-list').getElementsByTagName('tr');
    let viewContent = "<table><thead><tr><th>#</th><th>Client Name</th><th>Research Title</th><th>Date Received</th><th>Date Submitted</th><th>Status</th></tr></thead><tbody>";

    for (let i = 0; i < taskList.length; i++) {
        viewContent += taskList[i].innerHTML; // Use the same row structure
    }

    viewContent += "</tbody></table>";
    taskListView.innerHTML = viewContent;
}

// Tab switching logic
function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`).classList.add('active');
}
