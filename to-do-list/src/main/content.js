import '../style.css';
import { project } from '../utils/project';
import { todo, createTodoDivs, createTodoPrev } from '../utils/todo';

const content = (() => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const displayTodos = (project) => {

        let todoList = JSON.parse(localStorage.getItem(project.title)).todos;
        for(let t = 0; t < todoList.length; t++) {
            let currDiv = createTodoPrev(todoList[t]);
            contentDiv.appendChild(currDiv);
        }
    }

    const displayAllTodos = () => {
        clearContentDiv();
        for(let i = 0; i < localStorage.length; i++) {
            displayTodos(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    }

    const clearContentDiv = () => {
        while(contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    return {contentDiv, displayTodos, displayAllTodos, clearContentDiv};
})();

export { content };