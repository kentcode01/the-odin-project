import '../style.css';
import { sidebar } from "../main/sidebar";
import { content } from '../main/content';
import { helpers } from '../helper/functions';


const project = (title, defaultTab = false, orderBy = '---') => {

    let todos = [];
    return {title, todos, defaultTab, orderBy};
}

const createProj = (project) => {
    localStorage.setItem(project.title, JSON.stringify(project));

    createProjTab(project);
}

const createProjTab = (project) => {
    
    let projDiv = document.createElement('div');
    let projHead = document.createElement('p');
    let projIcon = document.createElement('img');
    projDiv.appendChild(projIcon);
    projDiv.appendChild(projHead);
    projHead.textContent = project.title;
    projIcon.classList.add('proj-tab-icon');
    projHead.classList.add('proj-tab-head');
    projDiv.classList.add('project-tab')
    projDiv.setAttribute('id', project.title);

    if(project.defaultTab === true) {
        projIcon.classList.add('default-icon');
    } else {
        projIcon.classList.add('normal-icon');
    }

    projDiv.addEventListener('click', () => {
        if(project.title === 'Today') content.generateTodayProject();
       
        content.displayCurrProject(project, JSON.parse(localStorage.getItem(project.title)).todos);
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

const addToProj = (project, todoObj) => {

    let proj = JSON.parse(localStorage.getItem(project.title));
    proj.todos.push(todoObj);
    localStorage.setItem(project.title, JSON.stringify(proj));
    
    content.displayTodos(project, todoObj)
}





export {project, createProj, addToProj, addTodoTab};