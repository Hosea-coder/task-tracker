// Welcome screen logic
document.getElementById('start-btn').addEventListener('click', function() {
    // Hide the welcome screen
    document.getElementById('welcome-screen').style.display = 'none';

    // Show the task section
    document.getElementById('task-section').style.display = 'block';
});

// Task management logic
let taskCounter = 1;
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
});

// Function to return status class based on status
function getStatusClass(status) {
    if (status === 'submitted') return 'status-submitted';
    if (status === 'pending') return 'status-pending';
    if (status === 'completed') return 'status-completed';
}
