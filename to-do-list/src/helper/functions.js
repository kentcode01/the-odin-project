import { todo, deleteTodo, createModalDiv } from "../utils/todo";
import { project, createProj, addToProj } from "../utils/project";
import { format, parse } from "date-fns";
import { modal } from "../main/modal";
import { content } from "../main/content";


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
           
            todoItem.checked = checkBox.checked;
           

            if(proj.title === 'Today') {
                let originalProj = JSON.parse(localStorage.getItem(todoItem.projectTitle));
                let originalList = originalProj.todos;
                let originalIndex = originalList.findIndex(index => ((JSON.stringify(index.title)) === JSON.stringify(todoItem.title)) && (JSON.stringify(index.projectTitle) === JSON.stringify(todoItem.projectTitle)));
            
                originalList.splice(originalIndex, 1, todoItem);
                originalProj.todos = originalList;
                localStorage.setItem(originalProj.title, JSON.stringify(originalProj));
            }
            let objList = JSON.parse(localStorage.getItem(`${proj.title}`)).todos;
            let index = objList.findIndex(index => ((JSON.stringify(index.title)) === JSON.stringify(todoItem.title)) && (JSON.stringify(index.projectTitle) === JSON.stringify(todoItem.projectTitle)));
        
            
            todoDiv.classList.toggle('complete');
            objList.splice(index, 1, todoItem);
            proj.todos = objList;
            localStorage.setItem(proj.title, JSON.stringify(proj));

        });
    }

    const addSampleData = () => {

        localStorage.clear();

        let todayProj = project("Today", true);
        
        createProj(todayProj);
        let upcomingProj = project("Upcoming", true);
        createProj(upcomingProj);
        let otherProj = project("Others");
        createProj(otherProj);
        let task1 = todo("Wake up early", "Get up at 7am", format(new Date(2024, 4, 12), 'MM/dd/yyyy'), "high", "Make coffee once up", false, otherProj.title);
        let task2 = todo("Submit Project", "Include everything in the module", format(new Date(2024, 4, 13), 'MM/dd/yyyy'), "low", "Be sure to share with team", false, otherProj.title);
        let task3 = todo("Cook Dinner", "Making seafood spaghetti today", format(new Date(2024, 4, 12), 'MM/dd/yyyy'), "medium", "Buy from Krogers", false, upcomingProj.title);
        let task4 = todo("Buy new phone", "Get an Android", format(new Date(2024, 6, 3), 'MM/dd/yyyy'), "medium", "Go to store", false, upcomingProj.title);
        let task5 = todo("Finish Python project", "Submit to Github", format(new Date(2024, 5, 29), 'MM/dd/yyyy'), "high", "", false, upcomingProj.title);
        let task6 = todo("Cook Lunch", "Make tacos", format(new Date(2024, 5, 17), 'MM/dd/yyyy'), "low", "Buy from Krogers", false, upcomingProj.title);
        addToProj(otherProj, task1);
        addToProj(otherProj, task2);
        addToProj(upcomingProj, task3);
        addToProj(upcomingProj, task4);
        addToProj(upcomingProj, task5);
        addToProj(upcomingProj, task6);
     
        // orderByTitle();

    }

    // functions for ordering todo items using bubble sort

    const orderByTitle = () => {
        if(content.contentDiv.id !== 'undefined') {
            let swap;
            let todoProj = JSON.parse(localStorage.getItem(content.contentDiv.id));
            let todoList = todoProj.todos;
            if(todoList.length > 1) {
                for(let i = 0; i < todoList.length - 1; i++) {
                    swap = false;
                    for(let j = 0; j < todoList.length - i - 1; j++) {
                        if((todoList[j].title).localeCompare(todoList[j + 1].title) !== -1) {
                            let temp = todoList[j];
                            todoList[j] = todoList[j + 1];
                            todoList[j + 1] = temp;
                            swap = true;
                        }
                    }
                    if(swap === false) break;
                }
            }
                

            todoProj.todos = todoList;
            localStorage.setItem(todoProj.title, JSON.stringify(todoProj));
            content.displayCurrProject(todoProj.title, todoProj);
        }
            

    }


    return {addDeleteListener, addModalListener, addCheckListener, addSampleData, orderByTitle}

})();

export {helpers};