//Divide the JS code into 3 parts: Selectors, Event Listeners and Functions

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    event.preventDefault();
    //create a div for a new item which will contain the buttons for deleting, checking

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button'); 
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    //Delete Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    //Append to the List
    todoList.appendChild(todoDiv);

    //Clear Input Value
    todoInput.value="";
}

function deleteCheck(event) {
    const item = event.target;

    if(item.classList[0] == 'trash-button'){
        const todo = item.parentElement;
        todo.remove();
    }

//Mark as completed
    if(item.classList[0] == 'complete-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}