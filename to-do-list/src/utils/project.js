import '../style.css';
import { sidebar } from "../main/sidebar";
import { sendTodo } from '../helper/jsonFunctions';
import { content } from '../main/content';

const project = (title) => {

    let todos = [];
    return {title, todos};
}

const createProj = (project) => {
    localStorage.setItem(project.title, JSON.stringify(project));

    createProjTab(project);
}

const createProjTab = (project) => {
    
    let projDiv = document.createElement('div');
    let projHead = document.createElement('p');
    projDiv.appendChild(projHead);
    projHead.textContent = project.title;
    projHead.classList.add('proj-tab-head');
    projDiv.classList.add('project-tab')
    projDiv.setAttribute('id', project.title);

    projDiv.addEventListener('click', () => {
        content.clearContentDiv();
        content.displayTodos(project);
    });
    

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
    let proj = JSON.parse(localStorage.getItem(project.title));
    proj.todos.push(todo);
    localStorage.setItem(project.title, JSON.stringify(proj));
}

const allProject = () => {

}



export {project, createProj, addToProj, addTodoTab};