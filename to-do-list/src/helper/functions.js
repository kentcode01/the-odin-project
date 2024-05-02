import { todo, deleteTodo } from "../utils/todo";
import { project, createProj, addToProj } from "../utils/project";


const helpers = (() => {
    const addDeleteListener = (project, todoItem) => {
    
        let todoDiv = document.getElementById(`${todoItem.title}`);
        let deleteBtn = todoDiv.getElementsByClassName('setting-btn delete-btn')[0];
    
        deleteBtn.addEventListener('click', () => {
            deleteTodo(project, todoItem);
        });
        
    }

    const addEditListeners = (project, todoItem) => {
        
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

    const addTodoPrevListeners = (project, todoItem) => {

        // addDeleteListeners();
        // addEditListeners();
    }

    const addSampleData = () => {
        let todayProj = project("Today");
        createProj(todayProj);
        let upcomingProj = project("Upcoming");
        createProj(upcomingProj);

        let task1 = todo("Wake up early", "Get up at 7am", "Today", "Yes", "Make coffee once up", true, todayProj.title);
        let task2 = todo("Submit Project", "Include everything in the module", "3 days", "Yes", "Be sure to share with team", false, todayProj.title);
        let task3 = todo("Cook Dinner", "Making seafood spaghetti today", "Today", "Yes", "Buy from Krogers", true, upcomingProj.title);
        addToProj(todayProj, task1);
        addToProj(todayProj, task2);
        addToProj(upcomingProj, task3);
    }

    return {addDeleteListener, addEditListeners, addCheckListener, addTodoPrevListeners, addSampleData}

})();

export {helpers};