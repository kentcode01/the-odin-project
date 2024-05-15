import { isToday } from "date-fns";

const todo = (title, description, dueDate, priority, notes, checked, projectTitle) => {
    return {title, description, dueDate, priority, notes, checked, projectTitle}
}

const createTodoPrev = (project, todoItem) => {
    let todoObj = todo(todoItem.title, todoItem.description, todoItem.dueDate, todoItem.priority, todoItem.notes);

    let toggleBtn = document.createElement('button');
    let markInput = document.createElement('input');
    let todoDiv = document.createElement('div');
    let todoPrevDiv = document.createElement('div');
    let titleHead = document.createElement('h3');
    let dueDatePara = document.createElement('p');
    let priorityPara = document.createElement('p');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    
    let titleDiv = document.createElement('div');
    let summaryDiv = document.createElement('div');
    let settingDiv = document.createElement('div');

    let descriptDiv = document.createElement('div');
    let descriptPara = document.createElement('div');
    let notesPara = document.createElement('div');

    descriptDiv.appendChild(descriptPara);
    descriptDiv.appendChild(notesPara);

    toggleBtn.addEventListener('click', () => {
        descriptDiv.classList.toggle('hidden');
        if(toggleBtn.classList.contains('hide-descript')) {
            toggleBtn.classList.remove('hide-descript');
            toggleBtn.classList.add('show-descript');
        } else {
            toggleBtn.classList.remove('show-descript');
            toggleBtn.classList.add('hide-descript');
        }
            
    });

    descriptPara.textContent = 'Description: ' + todoItem.description;
    notesPara.textContent = 'Notes: ' + todoItem.notes;
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
    todoPrevDiv.appendChild(toggleBtn);
    todoPrevDiv.appendChild(titleDiv);
    todoPrevDiv.appendChild(summaryDiv);
    todoPrevDiv.appendChild(settingDiv);
    todoDiv.appendChild(todoPrevDiv);
    todoDiv.appendChild(descriptDiv);

    toggleBtn.classList.add('toggle-btn');
    toggleBtn.classList.add('hide-descript');
    descriptDiv.classList.add('hidden');
    descriptDiv.classList.add('descript-div');
    markInput.classList.add('checkbox');
    editBtn.classList.add('setting-btn');
    deleteBtn.classList.add('setting-btn');
    editBtn.classList.add('edit-btn');
    deleteBtn.classList.add('delete-btn');
    titleDiv.classList.add('preview-div');
    summaryDiv.classList.add('preview-div');
    settingDiv.classList.add('setting-div');
    todoDiv.classList.add('todo-div');
    todoPrevDiv.classList.add('todo-prev-div');

    markInput.checked = todoItem.checked;
    if(markInput.checked) todoDiv.classList.toggle('complete');
    todoDiv.setAttribute('id', todoItem.title);

    return todoDiv;
}

const deleteTodo = (project, todoItem) => {
    let projArray = JSON.parse(localStorage.getItem(todoItem.projectTitle)).todos;

    for(let i = 0; i < projArray.length; i++) {
        if(JSON.stringify(projArray[i]) === JSON.stringify(todoItem)) {
            projArray.splice(i,1);
            let myProj = JSON.parse(localStorage.getItem(todoItem.projectTitle));
            myProj.todos = projArray;
            localStorage.setItem(todoItem.projectTitle, JSON.stringify(myProj));
            break;
        }
    }
    
    document.getElementById(`${todoItem.title}`).remove();

}


export {todo, createTodoPrev, deleteTodo};