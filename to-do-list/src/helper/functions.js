import { todo, deleteTodo } from "../utils/todo";
import { project } from "../utils/project";


const helpers = (() => {
    const addDeleteListeners = (project, todoItem) => {
    
        let todoDiv = document.getElementById(`${todoItem.title}`);
        let deleteBtn = todoDiv.getElementsByClassName('setting-btn delete-btn')[0];
    
        deleteBtn.addEventListener('click', () => {
            deleteTodo(project, todoItem);
        });

        // for(let i = 0; i < localStorage.length; i++) {
        //     let todoList = (JSON.parse(localStorage.getItem(localStorage.key(i))).todos);
        //     for(let j = 0; todoList.length; j++) {
        //         let todoDiv = document.querySelector(`#${todoList[j].title}`);
        //         let deleteBtn = todoDiv.getElementsByClassName('setting-div delete-btn')[0];
        //     }
        // }
        
    }

    const addEditListeners = () => {

    }

    const addTodoPrevListeners = (project, todoItem) => {

        // addDeleteListeners();
        // addEditListeners();
    }

    return {addDeleteListeners, addEditListeners, addTodoPrevListeners}

})();

export {helpers};