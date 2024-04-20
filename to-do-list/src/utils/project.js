import '../style.css';
import { sidebar } from "../main/sidebar";

const project = (title) => {

    let todos = [];
    return {title, todos};
}

const createProj = (project) => {
    localStorage.setItem(project.title, JSON.stringify(project));

    createProjTab(project.title);
}

const createProjTab = (title) => {
    let projDiv = document.createElement('div');
    let projHead = document.createElement('p');
    projDiv.appendChild(projHead);
    projHead.textContent = title;
    projHead.classList.add('proj-tab-head');
    projDiv.classList.add('project-tab')
    projDiv.setAttribute('id', title);
    sidebar.sidebarNav.appendChild(projDiv);
}

const addTodoTab = (projectName, todo) => {
    let taskDiv = document.createElement('div');
    taskDiv.textContent = todo.title;
    let projTab = document.getElementById(projectName);
    taskDiv.classList.add('todo-tab');
    projTab.appendChild(taskDiv);
}

const addToProj = (project, todo) => {
    project.todos.push(todo);
    addTodoTab(project.title, todo);
}



export {project, createProj, addToProj, addTodoTab};