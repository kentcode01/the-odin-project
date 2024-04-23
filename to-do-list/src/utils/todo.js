
const todo = (title, description, dueDate, priority, notes, checked) => {
    priority = [];
    return {title, description, dueDate, priority, notes, checked}
}

const createTodoPrev = (todoItem) => {
    let todoObj = todo(todoItem.title, todoItem.description, todoItem.dueDate, todoItem.priority, todoItem.notes);

    let markInput = document.createElement('input');
    let todoDiv = document.createElement('div');
    let titleHead = document.createElement('h3');
    let dueDatePara = document.createElement('p');
    let priorityInput = document.createElement('input');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    
    let titleDiv = document.createElement('div');
    let summaryDiv = document.createElement('div');
    let settingDiv = document.createElement('div');

    titleHead.textContent = todoObj.title;
    dueDatePara.textContent = 'Due: ' + todoObj.dueDate;
    priorityInput.textContent = 'Priority: ' + todoObj.priority;

    markInput.setAttribute('type', 'checkbox');

    titleDiv.appendChild(markInput);
    titleDiv.appendChild(titleHead);
    summaryDiv.appendChild(dueDatePara);
    summaryDiv.appendChild(priorityInput);
    settingDiv.appendChild(editBtn);
    settingDiv.appendChild(deleteBtn);

    todoDiv.appendChild(titleDiv);
    todoDiv.appendChild(summaryDiv);
    todoDiv.appendChild(settingDiv);
    

    markInput.classList.add('checkbox');
    editBtn.classList.add('setting-btn');
    deleteBtn.classList.add('setting-btn');
    editBtn.classList.add('edit-btn');
    deleteBtn.classList.add('delete-btn');
    titleDiv.classList.add('preview-div');
    summaryDiv.classList.add('preview-div');
    settingDiv.classList.add('setting-div');
    todoDiv.classList.add('todo-prev-div');

    return todoDiv;
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

const deleteTodo = (project, todoItem) => {
    
}

export {todo, createTodoDivs, createTodoPrev, deleteTodo};