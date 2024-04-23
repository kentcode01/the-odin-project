
const todo = (title, description, dueDate, priority, notes) => {
    priority = [];
    return {title, description, dueDate, priority, notes}
}

const createTodoDivs = (todoItem) => {

    let todoObj = todo(todoItem.title, todoItem.description, todoItem.dueDate, todoItem.priority, todoItem.notes);

    let todoDiv = document.createElement('div');
    let titleHead = document.createElement('h1');
    let descriptPara = document.createElement('p');
    let dueDatePara = document.createElement('p');
    let priorityInput = document.createElement('input');
    let notePara = document.createElement('p');

    titleHead.textContent = todoObj.title;
    descriptPara.textContent = todoObj.description;
    dueDatePara.textContent = todoObj.dueDate;
    priorityInput.textContent = todoObj.priority;
    notePara.textContent = todoObj.note;
    
    todoDiv.appendChild(titleHead);
    todoDiv.appendChild(descriptPara);
    todoDiv.appendChild(dueDatePara);
    todoDiv.appendChild(priorityInput);
    todoDiv.appendChild(notePara);

    todoDiv.classList.add('todo-div');

    return todoDiv;
}

const deleteTodo = (todo) => {
    
}

export {todo, createTodoDivs, deleteTodo};