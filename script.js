// Variables
const form = document.querySelector('#to-do-form');
const input = document.querySelector('#input-task');
const taskList = document.querySelector('#task-list');


// Add task function
form.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    if (input.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Inner variables
    const li = document.createElement('li');
    const span = document.createElement('span');
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    span.innerText = `${input.value} - ${formattedDate}`;

    // Check List Button
    const buttonCheck = document.createElement('button');
    buttonCheck.innerHTML = '<i class="fa fa-check"></i>';
    buttonCheck.classList.add('check-btn');
    buttonCheck.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Remove List Button
    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = '<i class="fa fa-trash"></i>';
    buttonRemove.classList.add('remove-btn');
    buttonRemove.addEventListener('click', function () {
        li.remove();
    });

    // Appending to DOM
    li.appendChild(span);
    li.appendChild(buttonCheck);
    li.appendChild(buttonRemove);
    taskList.appendChild(li);
    input.value = '';
}
