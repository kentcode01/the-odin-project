import { isToday } from "date-fns";

const todo = (title, description, dueDate, priority, notes, checked) => {
    return {title, description, dueDate, priority, notes, checked}
}

const createTodoPrev = (project, todoItem) => {
    let todoObj = todo(todoItem.title, todoItem.description, todoItem.dueDate, todoItem.priority, todoItem.notes);

    let markInput = document.createElement('input');
    let todoDiv = document.createElement('div');
    let titleHead = document.createElement('h3');
    let dueDatePara = document.createElement('p');
    let priorityPara = document.createElement('p');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    
    let titleDiv = document.createElement('div');
    let summaryDiv = document.createElement('div');
    let settingDiv = document.createElement('div');

    titleHead.textContent = todoObj.title;

    let dateStr = todoObj.dueDate;

    if(isToday(dateStr)) {
        dateStr = 'Today';
    }

    dueDatePara.textContent = 'Due: ' + dateStr;
    priorityPara.textContent = 'Priority: ' + todoObj.priority;

    markInput.setAttribute('type', 'checkbox');

    titleDiv.appendChild(markInput);
    titleDiv.appendChild(titleHead);
    summaryDiv.appendChild(dueDatePara);
    summaryDiv.appendChild(priorityPara);
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

    markInput.checked = todoItem.checked;
    if(markInput.checked) todoDiv.classList.toggle('complete');
    todoDiv.setAttribute('id', todoItem.title);

    return todoDiv;
}

const deleteTodo = (project, todoItem) => {
    let projArray = JSON.parse(localStorage.getItem(project.title)).todos;

    for(let i = 0; i < projArray.length; i++) {
        if(JSON.stringify(projArray[i]) === JSON.stringify(todoItem)) {
            projArray.splice(i,1);
            let myProj = JSON.parse(localStorage.getItem(project.title));
            myProj.todos = projArray;
            localStorage.setItem(project.title, JSON.stringify(myProj));
            break;
        }
    }
    
    document.getElementById(`${todoItem.title}`).remove();

}

const addNewTodo = () => {
    
}



export {todo, createTodoPrev, deleteTodo};