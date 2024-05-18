import '../style.css';
import { addToProj, project } from '../utils/project';
import { helpers } from '../helper/functions';
import { todo, createTodoPrev} from '../utils/todo';
import { modal } from './modal';
import { isToday } from "date-fns";
import { sidebar } from './sidebar';

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
        
        contentDiv.setAttribute('id', `${project.title}`);
        modal.editModalDiv.setAttribute('id', `${project.title}`);
        
        createProjHeader(project.title);
        for(let i = 0; i < todoObjList.length; i++) {
            let currObj = todoObjList[i];
            displayTodos(project, currObj);
        }
        if(contentDiv.id !== 'undefined') {
            contentDiv.getElementsByClassName('proj-header-div')[0].querySelector('#orderBy').value = JSON.parse(localStorage.getItem(contentDiv.id)).orderBy;
        }
            

        createNavbar();
    }

    const generateTodayProject = () => {
        let todoProj = JSON.parse(localStorage.getItem('Today'));
        todoProj.todos = [];
        for(let i = 0; i < localStorage.length; i++) {
            let currentProj = JSON.parse(localStorage.getItem(localStorage.key(i)));
            for(let j = 0; j < currentProj.todos.length && currentProj.title !== 'Today'; j++) {
                if(isToday(currentProj.todos[j].dueDate)) {
                    todoProj.todos.push(currentProj.todos[j]);
                }
            }
        }
        localStorage.setItem('Today', JSON.stringify(todoProj));

        displayCurrProject(todoProj,  JSON.parse(localStorage.getItem(todoProj.title)).todos)
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
       
        headerDiv.appendChild(orderByInput());

        contentDiv.appendChild(headerDiv);
        
    }

    const orderByInput = () => {
        let selectOptions = document.createElement('div');

        let orderBySelect = document.createElement('select');
        let orderByLabel = document.createElement('label');

        orderByLabel.setAttribute('for', 'orderBy');
        orderBySelect.setAttribute('id', 'orderBy');

        let defaultOption = document.createElement('option');
        let titleOption = document.createElement('option');
        let dateOption = document.createElement('option');
        let priorityOption = document.createElement('option');

        defaultOption.setAttribute('value', 'default-option');
        titleOption.setAttribute('value', 'title-option');
        dateOption.setAttribute('value', 'dueDate-option');
        priorityOption.setAttribute('value', 'priority-option');

        defaultOption.textContent = '---';
        titleOption.textContent = 'Title';
        dateOption.textContent = 'Date';
        priorityOption.textContent = 'Priority';

        orderBySelect.addEventListener('change', (e) => {
            e.preventDefault();
            if(e.target.value !== '---' || e.target.value !== 'undefined') {
                if(e.target.value === 'title-option') {
                    helpers.orderByTitle();
                }
                else if(e.target.value === 'dueDate-option') {
                    helpers.orderByDate();
                }
                else if(e.target.value === 'priority-option') {
                    helpers.orderByPriority();
                }
                displayCurrProject(JSON.parse(localStorage.getItem(contentDiv.id)), JSON.parse(localStorage.getItem(contentDiv.id)).todos);
            }
                
        })

        orderBySelect.appendChild(defaultOption);
        orderBySelect.appendChild(titleOption);
        orderBySelect.appendChild(dateOption);
        orderBySelect.appendChild(priorityOption);

        selectOptions.appendChild(orderByLabel);
        selectOptions.appendChild(orderBySelect);

        selectOptions.setAttribute('id', 'order-options');

        return selectOptions;
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
            let projName = contentDiv.id;
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

        deleteProjBtn.addEventListener('click', (e) => {
            e.preventDefault();
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

    

    return {contentDiv, contentNavbar, clearContentDiv, createNavbar, displayTodos, displayCurrProject, displayAllTodos, generateTodayProject};
})();

export { content };