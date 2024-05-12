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
        content.contentDiv.setAttribute('id', `${project.title}`);
        modal.editModalDiv.setAttribute('id', `${project.title}`);
        createProjHeader(project.title);
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

    const createProjHeader = (projName) => {
        let headerDiv = document.createElement('div');
        let projTitle = document.createElement('h1');

        headerDiv.appendChild(projTitle);

        projTitle.textContent = projName;
        
        projTitle.classList.add('proj-title');
        headerDiv.classList.add('proj-header-div');
        contentDiv.appendChild(headerDiv);
    }

    const createNavbar = () => {
        let navbarDiv = document.createElement('div');
        let todoBtn = document.createElement('button');
        let calendarBtn = document.createElement('button');
        let deleteProjBtn = document.createElement('button');

        navbarDiv.classList.add('content-navbar');

        navbarDiv.appendChild(todoBtn);
        navbarDiv.appendChild(calendarBtn);
        navbarDiv.appendChild(deleteProjBtn);

        todoBtn.addEventListener('click', () => {
            let modalDiv = modal.editModalDiv;
            let projName = content.contentDiv.id;
            modalDiv.setAttribute('id', `${projName}`);
            modalDiv.querySelector('form').setAttribute('id',``);
            modalDiv.querySelector('#title').value = ``;
            modalDiv.querySelector('#description').value = ``;
            modalDiv.querySelector('#date').value = ``;
            modalDiv.querySelector('#priority').value = ``;
            modalDiv.querySelector('#notes').value = ``;

            modalDiv.classList.remove('hidden');
            modalDiv.classList.add('create-todo');
        })

        deleteProjBtn.addEventListener('click', () => {
            modal.deleteModalDiv.classList.add('delete-proj-div');
            modal.deleteModalDiv.classList.remove('hidden');
            
            let formText = modal.deleteModalDiv.getElementsByClassName('modal-form-div')[0].getElementsByTagName('p')[0];
            formText.textContent = `Are you sure you want to delete ${modal.editModalDiv.id} project?`;
        })

        todoBtn.setAttribute('id', 'add-todo-btn');
        calendarBtn.setAttribute('id', 'calendar-btn');
        deleteProjBtn.setAttribute('id', 'delete-proj-btn');

        contentDiv.appendChild(navbarDiv);
    }


    return {contentDiv, contentNavbar, createNavbar, displayTodos, displayCurrProject, displayAllTodos, clearContentDiv};
})();

export { content };