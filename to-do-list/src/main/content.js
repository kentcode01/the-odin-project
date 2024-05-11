import '../style.css';
import { addToProj, project } from '../utils/project';
import { helpers } from '../helper/functions';
import { todo, createTodoPrev} from '../utils/todo';
import { modal } from './modal';
const content = (() => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const contentNavbar = document.createElement('div');

    const displayTodos = (project, todoObj) => {

        let currDiv = createTodoPrev(project, todoObj);
        contentDiv.appendChild(currDiv);
        helpers.addDeleteListener(JSON.parse(localStorage.getItem(project.title)), todoObj);
        helpers.addCheckListener(JSON.parse(localStorage.getItem(project.title)), todoObj);
        helpers.addModalListener(JSON.parse(localStorage.getItem(project.title)), todoObj);

    }

    const displayAllTodos = () => {
        clearContentDiv();
        for(let i = 0; i < localStorage.length; i++) {
            displayTodos(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    }

    const displayCurrProject = (project, todoObjList) => {
        clearContentDiv();

        for(let i = 0; i < todoObjList.length; i++) {
            let currObj = todoObjList[i];
            displayTodos(project, currObj);
        }

        createNavbar();
    }

    const clearContentDiv = () => {
        while(contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    const createNavbar = () => {
        let navbarDiv = document.createElement('div');
        let todoBtn = document.createElement('button');
        let calendarBtn = document.createElement('button');

        navbarDiv.classList.add('content-navbar');

        navbarDiv.appendChild(todoBtn);
        navbarDiv.appendChild(calendarBtn);

        todoBtn.setAttribute('id', 'add-todo-btn');
        calendarBtn.setAttribute('id', 'calendar-btn');

        contentDiv.appendChild(navbarDiv);
    }


    return {contentDiv, contentNavbar, createNavbar, displayTodos, displayCurrProject, displayAllTodos, clearContentDiv};
})();

export { content };