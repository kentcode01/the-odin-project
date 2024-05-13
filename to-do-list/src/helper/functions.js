import { todo, deleteTodo, createModalDiv } from "../utils/todo";
import { project, createProj, addToProj } from "../utils/project";
import { format, parse } from "date-fns";
import { modal } from "../main/modal";


const helpers = (() => {
    const addDeleteListener = (project, todoItem) => {
    
        let todoDiv = document.getElementById(`${todoItem.title}`);
        let deleteBtn = todoDiv.getElementsByClassName('setting-btn delete-btn')[0];
    
        deleteBtn.addEventListener('click', () => {
            deleteTodo(project, todoItem);
        });
        
    }

    const addModalListener = (proj, todoItem) => {
        let todoDiv = document.getElementById(`${todoItem.title}`);
        let editBtn = todoDiv.getElementsByClassName('setting-btn edit-btn')[0];
        
        editBtn.addEventListener('click', () => {
            let modalDiv = modal.editModalDiv;
            let formDiv = modalDiv.getElementsByTagName('form')[0];
            modalDiv.setAttribute('id', `${proj.title}`);
            formDiv.setAttribute('id', `${todoItem.title}`);
            modalDiv.querySelector('form').setAttribute('id',`${todoItem.title}`);
            modalDiv.querySelector('#title').value = `${todoItem.title}`;
            modalDiv.querySelector('#description').value = `${todoItem.description}`;
            modalDiv.querySelector('#date').value = `${todoItem.dueDate}`;
            modalDiv.querySelector('#priority').value = `${todoItem.priority}`;
            modalDiv.querySelector('#notes').value = `${todoItem.notes}`;
            modalDiv.classList.remove('hidden');

        });
    }

    const addCheckListener = (proj, todoItem) => {
        let todoDiv = document.getElementById(`${todoItem.title}`);
        let checkBox = todoDiv.querySelector('input[type=checkbox]');
        
        checkBox.addEventListener('click', () => {
            let objList = JSON.parse(localStorage.getItem(`${proj.title}`)).todos;
            let index = (JSON.parse(localStorage.getItem(`${proj.title}`)).todos).findIndex(id => JSON.stringify(id) === JSON.stringify(todoItem));
            todoItem.checked = checkBox.checked;
            todoDiv.classList.toggle('complete');
            objList.splice(index, 1, todoItem);
            proj.todos = objList;
            localStorage.setItem(proj.title, JSON.stringify(proj));

        });
    }

    const addSampleData = () => {
        let todayProj = project("Today", true);
        
        createProj(todayProj);
        let upcomingProj = project("Upcoming", true);
        createProj(upcomingProj);
        let otherProj = project("Others");
        createProj(otherProj);
        let task1 = todo("Wake up early", "Get up at 7am", format(new Date(2024, 4, 12), 'MM/dd/yyyy'), "high", "Make coffee once up", false, todayProj.title);
        let task2 = todo("Submit Project", "Include everything in the module", format(new Date(2024, 4, 13), 'MM/dd/yyyy'), "low", "Be sure to share with team", false, todayProj.title);
        let task3 = todo("Cook Dinner", "Making seafood spaghetti today", format(new Date(2024, 4, 12), 'MM/dd/yyyy'), "medium", "Buy from Krogers", true, upcomingProj.title);
        addToProj(otherProj, task1);
        addToProj(otherProj, task2);
        addToProj(upcomingProj, task3);

    }

    return {addDeleteListener, addModalListener, addCheckListener, addSampleData}

})();

export {helpers};