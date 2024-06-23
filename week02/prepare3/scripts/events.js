// events.js
let tasks = [];

function renderTasks(tasks) {
    // get the list element from the DOM
    // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
    const actualTaskList = document.getElementById("todoList");
    actualTaskList.innerHTML = ""; // I add this line so the array doesn't multiply the rendered task list in the for loop.
    const renderedTaskList = tasks.map(task => `<li ${task.completed ? 'class="strike"' : ""}><p>${task.detail}</p><div><span data-function="delete">❎</span><span data-function="complete">✅</span></div></li>`);

    for (let index in renderedTaskList) {
        let listItem = renderedTaskList[index];
        actualTaskList.innerHTML += listItem;
    };

}

function newTask() {
    // get the value entered into the #todo input
    // add it to our arrays tasks
    // render out the list
    const taskName = document.getElementById("todo");

    let taskDetails = { detail: taskName.value, completed: false };

    tasks.push(taskDetails);
    renderTasks(tasks);

}

function removeTask(taskElement) {
    // Note the use of Array.filter to remove the element from our task array
    // Notice also how we are using taskElement instead of document as our starting point?
    // This will restrict our search to the element instead of searching the whole document.
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );

    // this line removes the HTML element from the DOM
    taskElement.remove();
}

function completeTask(taskElement) {
    // In this case we need to find the index of the task so we can modify it.
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.childNodes[0].innerText
    );
    // once we have the index we can modify the complete field.
    // tasks[taskIndex].completed ? false : true is a ternary expression.
    // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    // toggle adds a class if it is not there, removes it if it is.
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(event) {
    // did they click the delete or complete icon?
    console.log(event.target);
    console.log(event.currentTarget);
    // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

    const buttonClicked = event.target.getAttribute("data-function"); // This gets the type of button the user selected by grabing the text of the attribute's value.
    const currentTask = event.target.closest("li"); // This gets the specific task in question.

    // Now I make a *thing* that both the removeTask() and the completeTask() are expecting using the constant variables I made.


    if (buttonClicked == "delete") {
        removeTask(currentTask);
    } else if (buttonClicked == "complete") {
        completeTask(currentTask);
    } else { // error handling
        console.log("Nothing clicked on!");
    }
    // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
    // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.

// Event listener for the Task List
document.querySelector("ul").addEventListener("click", manageTasks);

// Event listener for the submitTask button.
document.getElementById("submitTask").addEventListener("click", newTask);
